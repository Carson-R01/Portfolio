// Builds one Bootstrap card for a project object (see js/projects-data.js)
function createProjectCard(project) {
  const { title, description, image, tags = [], liveUrl, repoUrl } = project;

  const badges = tags
    .map((tag) => `<span class="badge project-tag me-1">${tag}</span>`)
    .join("");

  const liveButton = liveUrl
    ? `<a href="${liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
         <i class="bi bi-box-arrow-up-right me-1"></i>Live Demo
       </a>`
    : "";

  const repoButton = repoUrl
    ? `<a href="${repoUrl}" target="_blank" rel="noopener" class="btn btn-outline-secondary btn-sm">
         <i class="bi bi-github me-1"></i>Code
       </a>`
    : "";

  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4";
  col.innerHTML = `
    <div class="card project-card h-100">
      <img src="${image}" class="card-img-top project-card-img" alt="${title} preview">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${title}</h5>
        <p class="card-text flex-grow-1">${description}</p>
        <div class="mb-3">${badges}</div>
        <div class="d-flex gap-2">${liveButton}${repoButton}</div>
      </div>
    </div>
  `;
  return col;
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container || typeof projects === "undefined") return;

  projects.forEach((project) => {
    container.appendChild(createProjectCard(project));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
