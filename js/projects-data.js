/**
 * Project data for the portfolio.
 *
 * To add a new project, copy one of the objects below and edit the fields.
 * A card is generated automatically for every entry in this array — no HTML editing required.
 *
 * Fields:
 *   title       - Project name
 *   description - Short (1-3 sentence) summary of the project
 *   image       - Path or URL to a preview image/screenshot of the project
 *   tags        - Array of short strings shown as badges (tech used, category, etc.)
 *   liveUrl     - Link to the live/deployed site (set to "" to hide the button)
 *   repoUrl     - Link to the GitHub repo (set to "" to hide the button)
 */
const projects = [
  {
    title: "Movie Discovery",
    description: "A web app for searching and discovering movies, browsing details, ratings, and recommendations.",
    image: "images/projects/movie-discovery.svg",
    tags: ["JavaScript", "HTML/CSS", "REST API"],
    liveUrl: "https://carson-r01.github.io/MovieDiscovery/",
    repoUrl: "https://github.com/carson-r01/MovieDiscovery"
  },
  {
    title: "Music Visualizer",
    description: "An audio visualizer that reacts to music in real time, rendering animated visuals synced to sound.",
    image: "images/projects/music-visualizer.svg",
    tags: ["JavaScript", "Web Audio API", "Canvas"],
    liveUrl: "https://carson-r01.github.io/MusicVisualizer/",
    repoUrl: "https://github.com/carson-r01/MusicVisualizer"
  },

  // Add new projects below by copying the template object:
  // {
  //   title: "Project Name",
  //   description: "What it does in a sentence or two.",
  //   image: "images/projects/your-image.png",
  //   tags: ["Tag1", "Tag2"],
  //   liveUrl: "https://your-demo-link",
  //   repoUrl: "https://github.com/your-username/your-repo"
  // },
];
