const CONTENT_URL = "./content/site_content.json";

const root = document.getElementById("site-root");

function renderFileProtocolHelp() {
  root.innerHTML = `
    <section class="loading-state">
      <p><strong>Site scaffold is ready, but this preview was opened from a local file path.</strong></p>
      <p>
        The homepage loads <code>site_content.json</code> as a separate content model,
        and most browsers block that on <code>file://</code>.
      </p>
      <p>
        Start a small local server inside <code>portfolio_site</code>, then open
        <code>http://localhost:8080</code>.
      </p>
      <p><code>cd /Users/knighthr/Documents/Playground/hr_knight_recovered/portfolio_site && python3 -m http.server 8080</code></p>
    </section>
  `;
}

function drivePreviewUrl(url) {
  const match = url.match(/\/file\/d\/([^/]+)\//);
  if (!match) return url;
  return `https://drive.google.com/file/d/${match[1]}/preview`;
}

function cardMeta(items) {
  return items
    .filter(Boolean)
    .map((item) => `<span class="badge">${item}</span>`)
    .join("");
}

function button(label, href, className = "button-secondary", target = "_blank") {
  return `<a class="button ${className}" href="${href}" target="${target}" rel="noreferrer">${label}</a>`;
}

function renderHero(data) {
  const { site, profile, homepage } = data;
  const hero = homepage.hero;

  return `
    <section class="hero" id="hero">
      <div>
        <div class="eyebrow">${hero.eyebrow}</div>
        <h1>${hero.title}</h1>
        <p class="hero-lead">${hero.subtitle}</p>
        <div class="hero-actions">
          ${button(hero.cta_primary, site.materials.intro_video_url, "button-primary")}
          ${button(hero.cta_secondary, site.materials.portfolio_pdf_url)}
          ${button(hero.cta_tertiary, "#contact", "button-secondary", "_self")}
        </div>
        <div class="hero-meta">
          <span class="chip">${site.positioning_primary}</span>
          <span class="chip">${site.base}</span>
          <span class="chip">${site.visa}</span>
          ${site.positioning_secondary.map((item) => `<span class="chip">${item}</span>`).join("")}
        </div>
      </div>
      <aside class="portrait-card">
        <div>
          <h3>Portfolio-led web structure</h3>
          <p>
            This homepage now follows the logic of the PDF portfolio,
            but is rebuilt for casting clarity, media embedding, and future agent-driven updates.
          </p>
          <div class="portrait-grid">
            <div class="fact">
              <span class="fact-label">Base</span>
              <span class="fact-value">${profile.base}</span>
            </div>
            <div class="fact">
              <span class="fact-label">Languages</span>
              <span class="fact-value">${profile.languages.join(" / ")}</span>
            </div>
            <div class="fact">
              <span class="fact-label">Height / Weight</span>
              <span class="fact-value">${profile.height_cm} cm / ${profile.weight_kg} kg</span>
            </div>
            <div class="fact">
              <span class="fact-label">Eyes / Hair</span>
              <span class="fact-value">${profile.eyes} / ${profile.hair}</span>
            </div>
          </div>
        </div>
        <div class="note-card">
          <p>${homepage.positioning.body}</p>
        </div>
      </aside>
    </section>
  `;
}

function renderProfile(data) {
  const { profile, special_skills } = data;

  const rows = [
    ["Full name", profile.full_name],
    ["Birth date", profile.birth_date],
    ["Nationality", profile.nationality],
    ["Languages", profile.languages.join(" / ")],
    ["Height / Weight", `${profile.height_cm} cm / ${profile.weight_kg} kg`],
    ["Chest / Waist / Hips", `${profile.chest_cm} / ${profile.waist_cm} / ${profile.hips_cm} cm`],
    ["Shirt / Pants", `${profile.shirt_size} / ${profile.pants_size}`],
    ["Shoes", profile.shoes],
    ["Hair / Eyes", `${profile.hair} / ${profile.eyes}`],
    ["Tattoo", profile.tattoo]
  ];

  return `
    <section class="section" id="profile">
      <div class="section-head">
        <div>
          <p class="section-kicker">Profile</p>
          <h2>Portfolio structure, now web-ready.</h2>
        </div>
      </div>
      <div class="two-column">
        <div class="profile-table">
          ${rows
            .map(
              ([label, value]) => `
                <div class="profile-row">
                  <strong>${label}</strong>
                  <span>${value}</span>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="section-body">
          <p>${data.homepage.positioning.headline}</p>
          <p>${data.homepage.lookbook.body}</p>
          <div class="section-stack">
            <div class="card">
              <h3>Special skills</h3>
              <p>${special_skills.join(" / ")}</p>
            </div>
            <div class="card">
              <h3>Contacts already aligned</h3>
              <p>KakaoTalk: ${data.site.contact.kakaotalk_id}<br>Instagram: ${data.site.social.instagram_handle}<br>YouTube: ${data.site.social.youtube_handle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderVideo(data) {
  const iframeUrl = drivePreviewUrl(data.site.materials.intro_video_url);

  return `
    <section class="section" id="video">
      <div class="section-head">
        <div>
          <p class="section-kicker">Presentation Video</p>
          <h2>${data.homepage.intro_video.headline}</h2>
          <p class="section-body">${data.homepage.intro_video.body}</p>
        </div>
      </div>
      <div class="video-frame">
        <iframe
          src="${iframeUrl}"
          title="Valentin Rodin presentation video"
          allow="autoplay"
          allowfullscreen>
        </iframe>
      </div>
    </section>
  `;
}

function renderCredits(data) {
  return `
    <section class="section" id="credits">
      <div class="section-head">
        <div>
          <p class="section-kicker">Credits</p>
          <h2>Selected screen history.</h2>
          <p class="section-body">This section mirrors the strongest acting credits already present in the portfolio PDF and reorganizes them for faster casting review.</p>
        </div>
      </div>
      <div class="credits-grid">
        ${data.credits
          .map(
            (credit) => `
              <article class="card">
                <div class="card-meta">${cardMeta([credit.year, credit.market, credit.format])}</div>
                <h3>${credit.title}</h3>
                <p><strong>${credit.role}</strong></p>
                <p>${credit.note}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderArchetypes(data) {
  return `
    <section class="section" id="range">
      <div class="section-head">
        <div>
          <p class="section-kicker">Character Range</p>
          <h2>Readable casting energies.</h2>
          <p class="section-body">These archetypes come from the core portfolio direction and stay visible on the homepage so agencies and casting teams can position Valentin quickly.</p>
        </div>
      </div>
      <div class="archetype-grid">
        ${data.homepage.archetypes
          .map(
            (item) => `
              <article class="card">
                <h3>${item.title}</h3>
                <p>${item.summary}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTraining(data) {
  return `
    <section class="section" id="training">
      <div class="section-head">
        <div>
          <p class="section-kicker">Training</p>
          <h2>Professional background.</h2>
        </div>
      </div>
      <div class="training-grid">
        ${data.training
          .map(
            (item) => `
              <article class="card">
                <div class="card-meta">${cardMeta([item.category])}</div>
                <h3>${item.title}</h3>
                <p>${item.detail}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderYoutube(data) {
  const youtube = data.homepage.youtube;
  const episodes = youtube.featured_episodes || [];

  const cards =
    episodes.length > 0
      ? episodes
          .map(
            (episode) => `
              <article class="card">
                <h3>${episode.title}</h3>
                <p>${episode.description || "Featured episode"}</p>
                <div class="hero-actions">
                  ${button("Open Episode", episode.url)}
                </div>
              </article>
            `
          )
          .join("")
      : `
        <div class="empty-state">
          Featured YouTube episodes will be connected here next.
          The channel block is already part of the site architecture, so future updates will be clean and section-based.
        </div>
      `;

  return `
    <section class="section" id="youtube">
      <div class="section-head">
        <div>
          <p class="section-kicker">YouTube</p>
          <h2>${youtube.headline}</h2>
          <p class="section-body">${youtube.body}</p>
        </div>
      </div>
      <div class="youtube-grid">
        <article class="card">
          <div class="card-meta">${cardMeta([youtube.channel_handle, youtube.display_mode])}</div>
          <h3>Channel</h3>
          <p>This block exists to support your actor profile with proof of personality, camera confidence, and audience-facing presence.</p>
          <div class="hero-actions">
            ${button("Open YouTube Channel", youtube.channel_url, "button-primary")}
          </div>
        </article>
        ${cards}
      </div>
    </section>
  `;
}

function renderMaterials(data) {
  return `
    <section class="section" id="materials">
      <div class="section-head">
        <div>
          <p class="section-kicker">Materials</p>
          <h2>${data.homepage.materials.headline}</h2>
          <p class="section-body">${data.homepage.materials.body}</p>
        </div>
      </div>
      <div class="materials-grid">
        <a class="material-link" href="${data.site.materials.portfolio_pdf_url}" target="_blank" rel="noreferrer">
          <strong>Portfolio PDF</strong>
          <span>Open updated portfolio</span>
        </a>
        <a class="material-link" href="${data.site.materials.imdb_url}" target="_blank" rel="noreferrer">
          <strong>IMDb</strong>
          <span>Open filmography</span>
        </a>
        <a class="material-link" href="${data.site.materials.intro_video_url}" target="_blank" rel="noreferrer">
          <strong>Intro video</strong>
          <span>Open presentation source</span>
        </a>
        <a class="material-link" href="${data.site.social.instagram_url}" target="_blank" rel="noreferrer">
          <strong>Instagram</strong>
          <span>${data.site.social.instagram_handle}</span>
        </a>
      </div>
    </section>
  `;
}

function renderContact(data) {
  return `
    <section class="section" id="contact">
      <div class="section-head">
        <div>
          <p class="section-kicker">Contact</p>
          <h2>${data.homepage.contact.headline}</h2>
          <p class="section-body">${data.homepage.contact.body}</p>
        </div>
      </div>
      <div class="two-column">
        <div class="card">
          <h3>KakaoTalk</h3>
          <p>${data.site.contact.kakaotalk_id}</p>
          <h3 style="margin-top:18px;">Instagram</h3>
          <p>${data.site.social.instagram_handle}</p>
          <h3 style="margin-top:18px;">Email</h3>
          <p>${data.site.contact.email}</p>
        </div>
        <div class="card">
          <h3>Ready for the next step</h3>
          <p>This homepage is now structured for future polishing: stronger visuals, imported stills, selected YouTube episodes, and final domain deployment.</p>
          <div class="contact-actions">
            ${button("Message on Instagram", data.site.social.instagram_url, "button-primary")}
            ${button("Open PDF", data.site.materials.portfolio_pdf_url)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter(data) {
  return `<footer class="footer">Built as a content-driven portfolio module for ${data.profile.full_name}.</footer>`;
}

function renderPage(data) {
  document.title = data.site.seo?.title || data.site.name;

  const description = document.querySelector('meta[name="description"]');
  if (description && data.site.seo?.description) {
    description.setAttribute("content", data.site.seo.description);
  }

  root.innerHTML = `
    ${renderHero(data)}
    <div class="section-stack">
      ${renderProfile(data)}
      ${renderVideo(data)}
      ${renderCredits(data)}
      ${renderArchetypes(data)}
      ${renderTraining(data)}
      ${renderYoutube(data)}
      ${renderMaterials(data)}
      ${renderContact(data)}
      ${renderFooter(data)}
    </div>
  `;
}

async function init() {
  if (window.location.protocol === "file:") {
    renderFileProtocolHelp();
    return;
  }

  try {
    const response = await fetch(CONTENT_URL);
    if (!response.ok) {
      throw new Error(`Failed to load content: ${response.status}`);
    }
    const data = await response.json();
    renderPage(data);
  } catch (error) {
    root.innerHTML = `
      <section class="loading-state">
        <p>Could not load the portfolio content model.</p>
        <p>${error.message}</p>
      </section>
    `;
  }
}

init();
