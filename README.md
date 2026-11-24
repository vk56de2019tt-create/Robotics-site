# [TEAM NAME] Robotics Website

A responsive, static multi-page website built with **HTML5**, **CSS3**, and **Vanilla JavaScript** for a competitive robotics organization ([FTC/FRC TEAM NUMBER]). Designed for zero-dependency deployment on **GitHub Pages** and structured around a centralized data configuration file (`assets/js/content.js`).

## Project Structure

```text
robotics-team-website/
├── index.html               # Home landing page
├── about.html               # Organization overview, history, leadership, roster, mentors
├── robot.html               # Technical robot showcase, spec matrix, subsystem accordions, CAD
├── outreach.html            # Community impact, filterable program gallery & lightbox
├── achievements.html        # Competition timeline, season filters, judged awards
├── sponsors.html            # Current sponsors, tiers, funding breakdown
├── contact.html             # Direct email channels, mailto draft composer, schedule & socials
├── .nojekyll                # Disables Jekyll processing on GitHub Pages
├── assets/
│   ├── css/
│   │   └── styles.css       # Architectural Black & White stylesheet
│   ├── js/
│   │   ├── content.js       # Centralized editable team copy, stats, members, and image paths
│   │   └── main.js          # Navigation chrome, filtering, accordions, lightbox, image fallbacks
│   ├── images/
│   │   ├── team/            # Team & member photographs
│   │   ├── robot/           # Robot photos & CAD renders
│   │   ├── outreach/        # Community workshop & demonstration photos
│   │   ├── awards/          # Competition & award photos
│   │   └── sponsors/        # Partner logos
│   └── icons/
│       ├── favicon.svg      # Site favicon placeholder
│       └── team-mark.svg    # Geometric team logo placeholder
└── README.md
```

## Personalizing Content & Placeholders

Open `assets/js/content.js` and replace the bracketed placeholders (`[TEAM NAME]`, `[FTC/FRC TEAM NUMBER]`, `[CITY, STATE]`, `[CURRENT SEASON]`, `[ROBOT NAME]`, `[MEMBER NAME]`, `[SPONSOR NAME]`, `[CONTACT EMAIL]`, etc.) with your verified team information.

### Replacing Photographs

1. Place your images in the corresponding folder under `assets/images/` (`team/`, `robot/`, `outreach/`, `awards/`, `sponsors/`).
2. Update the `image` property in `assets/js/content.js` (e.g., `image: "assets/images/team/lead-01.jpg"`).
3. Any entry with `image: ""` automatically displays a deliberate technical placeholder frame showing the recommended target path so no broken image icons ever appear.

## Running Locally

You can serve the static files with any local HTTP server:

```bash
# Option 1: Python built-in HTTP server
python3 -m http.server 8080

# Option 2: Node / Vite dev server (if dependencies are installed)
npm run dev
```

Then open `http://localhost:8080` (or `http://localhost:3000` for Vite).

## Publishing on GitHub Pages

1. Push all files (`index.html`, `about.html`, `robot.html`, `outreach.html`, `achievements.html`, `sponsors.html`, `contact.html`, `.nojekyll`, and `assets/`) to a GitHub repository.
2. In your GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select your branch (e.g., `main`) and folder **`/ (root)`**, then click **Save**.
5. Because all asset and page references use relative paths (`assets/css/styles.css`, `about.html`), the site works on both custom domains and repository subpaths (`https://<username>.github.io/<repo-name>/`).
