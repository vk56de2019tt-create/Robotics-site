/**
 * [TEAM NAME] Robotics — Core UI Hydration & Interactive Modules
 * Pure Vanilla JavaScript (zero framework dependencies, GitHub Pages compatible).
 */

(function () {
  "use strict";

  const DATA = window.TEAM_CONTENT;
  if (!DATA) {
    return;
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function setText(selector, text) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.textContent = text;
    });
  }

  function buildPlaceholderHtml(title, pathHint) {
    return (
      '<div class="photo-placeholder" role="img" aria-label="' +
      escapeHtml(title) +
      '">' +
      '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' +
      '<rect x="3" y="4" width="18" height="16" rx="2"></rect>' +
      '<circle cx="8.5" cy="9.5" r="1.5"></circle>' +
      '<path d="M21 16l-5-5-4 4-2-2-7 7"></path>' +
      "</svg>" +
      '<span class="photo-placeholder-title">' +
      escapeHtml(title) +
      "</span>" +
      '<span class="photo-placeholder-path">Photo slot: ' +
      escapeHtml(pathHint || "assets/images/...") +
      "</span>" +
      "</div>"
    );
  }

  function renderMediaFrame(options) {
    var src = options.image;
    var placeholderPath = options.placeholderPath || src || "assets/images/...";
    var alt = options.alt || "Image placeholder";
    var ratioClass = options.ratioClass || "ratio-4x3";
    var caption = options.caption || "";

    var mediaInner = src
      ? '<img src="' +
        escapeHtml(src) +
        '" alt="' +
        escapeHtml(alt) +
        '" loading="lazy" referrerpolicy="no-referrer" data-fallback-title="' +
        escapeHtml(alt) +
        '" data-fallback-path="' +
        escapeHtml(placeholderPath) +
        '" />'
      : buildPlaceholderHtml(alt, placeholderPath);

    var captionHtml = caption
      ? '<div class="media-caption-bar"><span>' +
        escapeHtml(caption) +
        "</span></div>"
      : "";

    return (
      '<div class="media-frame ' +
      ratioClass +
      '">' +
      mediaInner +
      "</div>" +
      captionHtml
    );
  }

  function bindImageFallbacks(root) {
    (root || document).querySelectorAll("img[data-fallback-title]").forEach(function (img) {
      if (img.dataset.boundFallback) return;
      img.dataset.boundFallback = "true";
      img.addEventListener("error", function () {
        var title = img.getAttribute("data-fallback-title") || "Image Placeholder";
        var pathHint = img.getAttribute("data-fallback-path") || "assets/images/...";
        var parent = img.parentElement;
        if (parent) {
          parent.innerHTML = buildPlaceholderHtml(title, pathHint);
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     Shared Header & Footer Chrome
     -------------------------------------------------------------------------- */
  function initNavigation() {
    var header = document.getElementById("site-header");
    var currentPage = document.body.getAttribute("data-page") || "home";
    var navItems = [
      { id: "about", label: "About", href: "about.html" },
      { id: "robot", label: "Robot", href: "robot.html" },
      { id: "outreach", label: "Outreach", href: "outreach.html" },
      { id: "achievements", label: "Achievements", href: "achievements.html" },
      { id: "sponsors", label: "Sponsors", href: "sponsors.html" }
    ];

    if (header) {
      var linksHtml = navItems
        .map(function (item) {
          var currentAttr = item.id === currentPage ? ' aria-current="page"' : "";
          return (
            '<a class="nav-link" href="' +
            item.href +
            '"' +
            currentAttr +
            ">" +
            escapeHtml(item.label) +
            "</a>"
          );
        })
        .join("");

      var mobileLinksHtml = [{ id: "home", label: "Home", href: "index.html" }]
        .concat(navItems)
        .concat([{ id: "contact", label: "Contact", href: "contact.html" }])
        .map(function (item) {
          var currentAttr = item.id === currentPage ? ' aria-current="page"' : "";
          return (
            '<a href="' +
            item.href +
            '"' +
            currentAttr +
            "><span>" +
            escapeHtml(item.label) +
            '</span><span aria-hidden="true">&#8594;</span></a>'
          );
        })
        .join("");

      header.innerHTML =
        '<div class="container header-inner">' +
        '<a class="brand-wordmark" href="index.html">' +
        escapeHtml(DATA.identity.teamName) +
        "</a>" +
        '<nav class="primary-nav" aria-label="Primary Navigation">' +
        linksHtml +
        "</nav>" +
        '<div class="header-actions">' +
        '<a class="btn btn-primary btn-sm header-cta" href="contact.html">Contact</a>' +
        '<button type="button" class="mobile-menu-toggle" aria-expanded="false" aria-controls="mobile-drawer" aria-label="Open navigation menu">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
        '<line x1="3" y1="7" x2="21" y2="7"></line>' +
        '<line x1="3" y1="12" x2="21" y2="12"></line>' +
        '<line x1="3" y1="17" x2="21" y2="17"></line>' +
        "</svg>" +
        "</button>" +
        "</div>" +
        "</div>" +
        '<div id="mobile-drawer" class="mobile-drawer" aria-hidden="true">' +
        mobileLinksHtml +
        "</div>";

      var toggleBtn = header.querySelector(".mobile-menu-toggle");
      var drawer = header.querySelector("#mobile-drawer");
      if (toggleBtn && drawer) {
        function setDrawer(open) {
          drawer.classList.toggle("is-open", open);
          drawer.setAttribute("aria-hidden", open ? "false" : "true");
          toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
          toggleBtn.setAttribute(
            "aria-label",
            open ? "Close navigation menu" : "Open navigation menu"
          );
        }

        toggleBtn.addEventListener("click", function () {
          var isOpen = drawer.classList.contains("is-open");
          setDrawer(!isOpen);
        });

        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && drawer.classList.contains("is-open")) {
            setDrawer(false);
            toggleBtn.focus();
          }
        });
      }
    }

    var footer = document.getElementById("site-footer");
    if (footer) {
      var year = new Date().getFullYear();
      var socialsHtml = DATA.identity.socials
        .map(function (s) {
          return (
            '<li><a href="' +
            escapeHtml(s.url) +
            '" target="_blank" rel="noopener noreferrer">' +
            escapeHtml(s.label) +
            " · " +
            escapeHtml(s.handle) +
            "</a></li>"
          );
        })
        .join("");

      footer.innerHTML =
        '<div class="container">' +
        '<div class="footer-grid">' +
        '<div>' +
        '<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;">' +
        '<img src="' +
        escapeHtml(DATA.identity.logoPath) +
        '" alt="Team logo placeholder" width="40" height="40" />' +
        '<div>' +
        '<div style="font-family:var(--font-display);font-weight:700;font-size:1.05rem;">' +
        escapeHtml(DATA.identity.teamName) +
        "</div>" +
        '<div class="mono-num" style="font-size:0.8rem;color:var(--text-dark-secondary);">' +
        escapeHtml(DATA.identity.teamNumber) +
        " · " +
        escapeHtml(DATA.identity.location) +
        "</div>" +
        "</div>" +
        "</div>" +
        '<p style="color:var(--text-dark-secondary);font-size:0.9375rem;">' +
        escapeHtml(DATA.identity.tagline) +
        "</p>" +
        "</div>" +
        "<div>" +
        '<div class="footer-heading">Organization</div>' +
        '<ul class="footer-links">' +
        '<li><a href="index.html">Home</a></li>' +
        '<li><a href="about.html">About the Team</a></li>' +
        '<li><a href="robot.html">Our Robot</a></li>' +
        '<li><a href="achievements.html">Achievements</a></li>' +
        "</ul>" +
        "</div>" +
        "<div>" +
        '<div class="footer-heading">Community</div>' +
        '<ul class="footer-links">' +
        '<li><a href="outreach.html">Outreach &amp; STEM</a></li>' +
        '<li><a href="sponsors.html">Sponsorships</a></li>' +
        '<li><a href="contact.html">Contact &amp; Join</a></li>' +
        "</ul>" +
        "</div>" +
        "<div>" +
        '<div class="footer-heading">Connect</div>' +
        '<ul class="footer-links">' +
        '<li><a href="mailto:' +
        escapeHtml(DATA.identity.contactEmail) +
        '">' +
        escapeHtml(DATA.identity.contactEmail) +
        "</a></li>" +
        socialsHtml +
        "</ul>" +
        "</div>" +
        "</div>" +
        '<div class="footer-bottom">' +
        "<span>&copy; " +
        year +
        " " +
        escapeHtml(DATA.identity.teamName) +
        " (" +
        escapeHtml(DATA.identity.teamNumber) +
        "). Placeholder template ready for customization in assets/js/content.js.</span>" +
        "<span>" +
        escapeHtml(DATA.identity.location) +
        " · " +
        escapeHtml(DATA.identity.season) +
        "</span>" +
        "</div>" +
        "</div>";
    }
  }

  /* --------------------------------------------------------------------------
     Scroll Reveal (Zero-Latency Safe)
     -------------------------------------------------------------------------- */
  function initReveal() {
    var reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    var reducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-hidden");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    reveals.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.92) {
        el.classList.add("is-hidden");
        observer.observe(el);
      }
    });
  }

  /* --------------------------------------------------------------------------
     Page Hydrators
     -------------------------------------------------------------------------- */
  function hydrateCommonTokens() {
    setText("[data-token='teamName']", DATA.identity.teamName);
    setText("[data-token='teamNumber']", DATA.identity.teamNumber);
    setText("[data-token='location']", DATA.identity.location);
    setText("[data-token='season']", DATA.identity.season);
    setText("[data-token='mission']", DATA.identity.mission);
    setText("[data-token='robotName']", DATA.robot.name);
    setText("[data-token='contactEmail']", DATA.identity.contactEmail);
  }

  function hydrateHome() {
    setText("[data-home='headline']", DATA.home.heroHeadline);
    setText("[data-home='intro']", DATA.home.heroIntro);
    setText("[data-home='robotSummary']", DATA.home.featuredRobotSummary);

    var heroMedia = document.getElementById("home-hero-media");
    if (heroMedia) {
      heroMedia.innerHTML =
        '<img src="' +
        escapeHtml(DATA.home.heroImage) +
        '" alt="Robot chassis studio photograph" referrerpolicy="no-referrer" data-fallback-title="Hero Robot Photograph" data-fallback-path="assets/images/robot/hero-chassis.jpg" />';
      bindImageFallbacks(heroMedia);
    }

    var kpiStrip = document.getElementById("home-kpi-strip");
    if (kpiStrip) {
      kpiStrip.innerHTML = DATA.home.keyStats
        .map(function (stat) {
          return (
            '<div class="kpi-cell">' +
            '<span class="kpi-value">' +
            escapeHtml(stat.value) +
            "</span>" +
            '<span class="kpi-label">' +
            escapeHtml(stat.label) +
            "</span>" +
            '<span class="kpi-note">' +
            escapeHtml(stat.note) +
            "</span>" +
            "</div>"
          );
        })
        .join("");
    }

    var robotPreviewImg = document.getElementById("home-robot-preview-media");
    if (robotPreviewImg) {
      robotPreviewImg.innerHTML = renderMediaFrame({
        image: DATA.robot.cadImage,
        placeholderPath: "assets/images/robot/cad-assembly.jpg",
        alt: "Sample CAD assembly render of " + DATA.robot.name,
        ratioClass: "ratio-4x3",
        caption: "Sample CAD render · Replace with assets/images/robot/cad-assembly.jpg"
      });
      bindImageFallbacks(robotPreviewImg);
    }

    var robotSpecsBrief = document.getElementById("home-robot-specs");
    if (robotSpecsBrief) {
      robotSpecsBrief.innerHTML = DATA.robot.quickSpecs
        .map(function (item) {
          return (
            '<div style="padding:14px 0;border-bottom:1px solid var(--border-light);display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;">' +
            '<span style="font-weight:600;">' +
            escapeHtml(item.label) +
            "</span>" +
            '<span class="mono-num">' +
            escapeHtml(item.value) +
            "</span>" +
            "</div>"
          );
        })
        .join("");
    }

    var achievementsPreview = document.getElementById("home-achievements-preview");
    if (achievementsPreview) {
      achievementsPreview.innerHTML = DATA.achievements.awardShowcase
        .map(function (item) {
          return (
            '<article class="card">' +
            '<div class="meta-line mono-num"><span>' +
            escapeHtml(item.season) +
            '</span><span aria-hidden="true">·</span><span>' +
            escapeHtml(item.event) +
            "</span></div>" +
            "<h3>" +
            escapeHtml(item.title) +
            "</h3>" +
            '<p style="color:var(--text-dark-secondary);">' +
            escapeHtml(item.description) +
            "</p>" +
            "</article>"
          );
        })
        .join("");
    }

    var outreachPreview = document.getElementById("home-outreach-preview");
    if (outreachPreview) {
      outreachPreview.innerHTML = DATA.outreach.programs
        .slice(0, 3)
        .map(function (prog) {
          return (
            '<article class="card card-flush card-interactive">' +
            renderMediaFrame({
              image: prog.image,
              placeholderPath: prog.placeholderPath,
              alt: prog.title,
              ratioClass: "ratio-4x3"
            }) +
            '<div class="card-body">' +
            '<div class="meta-line"><span>' +
            escapeHtml(prog.category) +
            '</span><span aria-hidden="true">·</span><span>' +
            escapeHtml(prog.date) +
            "</span></div>" +
            "<h3>" +
            escapeHtml(prog.title) +
            "</h3>" +
            '<p style="color:var(--text-light-secondary);font-size:0.9375rem;">' +
            escapeHtml(prog.summary) +
            "</p>" +
            "</div>" +
            "</article>"
          );
        })
        .join("");
      bindImageFallbacks(outreachPreview);
    }

    var sponsorPreview = document.getElementById("home-sponsor-preview");
    if (sponsorPreview) {
      sponsorPreview.innerHTML = DATA.sponsors.partners
        .map(function (p) {
          return (
            '<div class="sponsor-tile">' +
            '<div class="sponsor-logo-box">' +
            (p.image
              ? '<img src="' +
                escapeHtml(p.image) +
                '" alt="' +
                escapeHtml(p.name) +
                '" style="max-height:48px;object-fit:contain;" />'
              : escapeHtml(p.name) + " Logo Slot") +
            "</div>" +
            "<div>" +
            '<div style="font-weight:700;">' +
            escapeHtml(p.name) +
            "</div>" +
            '<div class="meta-line" style="margin-top:4px;"><span>' +
            escapeHtml(p.tier) +
            "</span></div>" +
            "</div>" +
            "</div>"
          );
        })
        .join("");
    }
  }

  function hydrateAbout() {
    setText("[data-about='intro']", DATA.about.intro);
    setText("[data-about='origin']", DATA.about.originStory);
    setText("[data-about='philosophy']", DATA.about.philosophy);

    var groupFrame = document.getElementById("about-group-photo");
    if (groupFrame) {
      groupFrame.innerHTML = renderMediaFrame({
        image: DATA.about.groupImage,
        placeholderPath: "assets/images/team/workshop-collab.jpg",
        alt: "Team members collaborating in the robotics workshop",
        ratioClass: "ratio-16x9",
        caption: DATA.about.groupImageCaption
      });
      bindImageFallbacks(groupFrame);
    }

    var timeline = document.getElementById("about-history-timeline");
    if (timeline) {
      timeline.innerHTML = DATA.about.historyMilestones
        .map(function (m) {
          return (
            '<div class="timeline-row">' +
            '<div class="timeline-year">' +
            escapeHtml(m.year) +
            "</div>" +
            '<div><h3 style="margin-bottom:8px;">' +
            escapeHtml(m.title) +
            '</h3><p style="color:var(--text-light-secondary);">' +
            escapeHtml(m.detail) +
            "</p></div>" +
            '<div class="timeline-result">Milestone Placeholder</div>' +
            "</div>"
          );
        })
        .join("");
    }

    var leadershipGrid = document.getElementById("about-leadership-grid");
    if (leadershipGrid) {
      leadershipGrid.innerHTML = DATA.about.leadership
        .map(function (person) {
          return (
            '<article class="member-card">' +
            '<div class="member-photo">' +
            (person.image
              ? '<img src="' + escapeHtml(person.image) + '" alt="' + escapeHtml(person.name) + '" />'
              : buildPlaceholderHtml(person.name, person.placeholderPath)) +
            "</div>" +
            '<div class="member-content">' +
            '<div class="meta-line"><span>' +
            escapeHtml(person.subteam) +
            '</span><span aria-hidden="true">·</span><span class="mono-num">' +
            escapeHtml(person.gradYear) +
            "</span></div>" +
            "<h3>" +
            escapeHtml(person.name) +
            "</h3>" +
            '<div style="font-weight:600;font-size:0.9rem;">' +
            escapeHtml(person.role) +
            "</div>" +
            '<p style="color:var(--text-dark-secondary);font-size:0.9375rem;">' +
            escapeHtml(person.bio) +
            "</p>" +
            '<div class="member-skills">' +
            escapeHtml(person.skills) +
            "</div>" +
            "</div>" +
            "</article>"
          );
        })
        .join("");
    }

    var rosterGrid = document.getElementById("about-members-grid");
    var filterBar = document.getElementById("about-subteam-filters");
    if (rosterGrid && filterBar) {
      var categories = ["All", "Mechanical", "Electrical", "Software", "Operations"];
      var activeFilter = "All";

      function renderMembers() {
        var filtered = DATA.about.members.filter(function (m) {
          return activeFilter === "All" || m.subteam === activeFilter;
        });

        rosterGrid.innerHTML = filtered
          .map(function (person) {
            return (
              '<article class="member-card">' +
              '<div class="member-photo">' +
              (person.image
                ? '<img src="' + escapeHtml(person.image) + '" alt="' + escapeHtml(person.name) + '" />'
                : buildPlaceholderHtml(person.name, person.placeholderPath)) +
              "</div>" +
              '<div class="member-content">' +
              '<div class="meta-line"><span>' +
              escapeHtml(person.subteam) +
              '</span><span aria-hidden="true">·</span><span class="mono-num">' +
              escapeHtml(person.gradYear) +
              "</span></div>" +
              "<h3>" +
              escapeHtml(person.name) +
              "</h3>" +
              '<div style="font-weight:600;font-size:0.9rem;">' +
              escapeHtml(person.role) +
              "</div>" +
              '<p style="color:var(--text-light-secondary);font-size:0.9375rem;">' +
              escapeHtml(person.bio) +
              "</p>" +
              '<div class="member-skills">' +
              escapeHtml(person.skills) +
              "</div>" +
              "</div>" +
              "</article>"
            );
          })
          .join("");
      }

      filterBar.innerHTML = categories
        .map(function (cat) {
          return (
            '<button type="button" class="filter-btn" data-filter="' +
            escapeHtml(cat) +
            '" aria-pressed="' +
            (cat === activeFilter ? "true" : "false") +
            '">' +
            escapeHtml(cat) +
            "</button>"
          );
        })
        .join("");

      filterBar.addEventListener("click", function (e) {
        var btn = e.target.closest("button[data-filter]");
        if (!btn) return;
        activeFilter = btn.getAttribute("data-filter");
        filterBar.querySelectorAll("button").forEach(function (b) {
          b.setAttribute(
            "aria-pressed",
            b.getAttribute("data-filter") === activeFilter ? "true" : "false"
          );
        });
        renderMembers();
      });

      renderMembers();
    }

    var mentorsGrid = document.getElementById("about-mentors-grid");
    if (mentorsGrid) {
      mentorsGrid.innerHTML = DATA.about.mentors
        .map(function (mentor) {
          return (
            '<article class="member-card">' +
            '<div class="member-photo">' +
            (mentor.image
              ? '<img src="' + escapeHtml(mentor.image) + '" alt="' + escapeHtml(mentor.name) + '" />'
              : buildPlaceholderHtml(mentor.name, mentor.placeholderPath)) +
            "</div>" +
            '<div class="member-content">' +
            '<div class="meta-line"><span>' +
            escapeHtml(mentor.organization) +
            "</span></div>" +
            "<h3>" +
            escapeHtml(mentor.name) +
            "</h3>" +
            '<div style="font-weight:600;font-size:0.9rem;">' +
            escapeHtml(mentor.role) +
            "</div>" +
            '<p style="color:var(--text-dark-secondary);font-size:0.9375rem;">' +
            escapeHtml(mentor.bio) +
            "</p>" +
            "</div>" +
            "</article>"
          );
        })
        .join("");
    }
  }

  function hydrateRobot() {
    setText("[data-robot='overview']", DATA.robot.overview);
    setText("[data-robot='cadSoftware']", DATA.robot.cadDetails.software);
    setText("[data-robot='cadRevision']", DATA.robot.cadDetails.revision);
    setText("[data-robot='cadSummary']", DATA.robot.cadDetails.summary);

    var robotHero = document.getElementById("robot-hero-media");
    if (robotHero) {
      robotHero.innerHTML = renderMediaFrame({
        image: DATA.robot.heroImage,
        placeholderPath: "assets/images/robot/hero-chassis.jpg",
        alt: DATA.robot.name + " hero photograph",
        ratioClass: "ratio-16x9",
        caption: "Sample robot photograph · Replace with assets/images/robot/hero-chassis.jpg"
      });
      bindImageFallbacks(robotHero);
    }

    var quickSpecsEl = document.getElementById("robot-quick-specs");
    if (quickSpecsEl) {
      quickSpecsEl.innerHTML = DATA.robot.quickSpecs
        .map(function (s) {
          return (
            '<div class="kpi-cell">' +
            '<span class="kpi-value">' +
            escapeHtml(s.value) +
            "</span>" +
            '<span class="kpi-label">' +
            escapeHtml(s.label) +
            "</span>" +
            '<span class="kpi-note">' +
            escapeHtml(s.note) +
            "</span>" +
            "</div>"
          );
        })
        .join("");
    }

    var specBody = document.getElementById("robot-spec-table-body");
    if (specBody) {
      specBody.innerHTML = DATA.robot.specTable
        .map(function (row) {
          return (
            "<tr>" +
            '<th scope="row">' +
            escapeHtml(row.parameter) +
            "</th>" +
            '<td class="mono-cell">' +
            escapeHtml(row.spec) +
            "</td>" +
            '<td style="color:var(--text-light-secondary);">' +
            escapeHtml(row.notes) +
            "</td>" +
            "</tr>"
          );
        })
        .join("");
    }

    var accordionList = document.getElementById("robot-subsystems-accordion");
    if (accordionList) {
      accordionList.innerHTML = DATA.robot.subsystems
        .map(function (sub, idx) {
          var expanded = idx === 0;
          var panelId = "subsystem-panel-" + idx;
          var metricsHtml = sub.metrics
            .map(function (m) {
              return (
                "<dt>" +
                escapeHtml(m.label) +
                "</dt><dd class=\"mono-num\">" +
                escapeHtml(m.value) +
                "</dd>"
              );
            })
            .join("");

          return (
            '<div class="accordion-item">' +
            '<button type="button" class="accordion-trigger" aria-expanded="' +
            (expanded ? "true" : "false") +
            '" aria-controls="' +
            panelId +
            '">' +
            '<div class="accordion-title-group">' +
            '<span class="accordion-index">' +
            escapeHtml(sub.index) +
            ".</span>" +
            "<h3>" +
            escapeHtml(sub.name) +
            "</h3>" +
            "</div>" +
            '<span class="accordion-icon" aria-hidden="true">+</span>' +
            "</button>" +
            '<div id="' +
            panelId +
            '" class="accordion-panel"' +
            (expanded ? "" : " hidden") +
            ">" +
            "<div>" +
            '<p style="font-weight:600;margin-bottom:10px;">' +
            escapeHtml(sub.summary) +
            "</p>" +
            '<p style="color:var(--text-dark-secondary);margin-bottom:20px;">' +
            escapeHtml(sub.description) +
            "</p>" +
            '<dl class="detail-dl">' +
            metricsHtml +
            "</dl>" +
            "</div>" +
            '<div class="card card-flush">' +
            renderMediaFrame({
              image: sub.image,
              placeholderPath: sub.placeholderPath,
              alt: sub.name + " engineering visual",
              ratioClass: "ratio-4x3"
            }) +
            "</div>" +
            "</div>" +
            "</div>"
          );
        })
        .join("");

      accordionList.addEventListener("click", function (e) {
        var trigger = e.target.closest(".accordion-trigger");
        if (!trigger) return;
        var panelId = trigger.getAttribute("aria-controls");
        var panel = document.getElementById(panelId);
        var isExpanded = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", isExpanded ? "false" : "true");
        if (panel) {
          panel.hidden = isExpanded;
        }
      });

      var expandAllBtn = document.getElementById("robot-expand-all");
      if (expandAllBtn) {
        expandAllBtn.addEventListener("click", function () {
          var triggers = accordionList.querySelectorAll(".accordion-trigger");
          var anyClosed = Array.prototype.some.call(triggers, function (t) {
            return t.getAttribute("aria-expanded") !== "true";
          });
          triggers.forEach(function (t) {
            var panel = document.getElementById(t.getAttribute("aria-controls"));
            t.setAttribute("aria-expanded", anyClosed ? "true" : "false");
            if (panel) panel.hidden = !anyClosed;
          });
          expandAllBtn.textContent = anyClosed ? "Collapse All" : "Expand All";
        });
      }
    }

    var cadMedia = document.getElementById("robot-cad-media");
    if (cadMedia) {
      cadMedia.innerHTML = renderMediaFrame({
        image: DATA.robot.cadImage,
        placeholderPath: "assets/images/robot/cad-assembly.jpg",
        alt: "Full CAD assembly render",
        ratioClass: "ratio-4x3",
        caption: "Sample CAD assembly · Replace with assets/images/robot/cad-assembly.jpg"
      });
      bindImageFallbacks(cadMedia);
    }

    var cadDeliverables = document.getElementById("robot-cad-deliverables");
    if (cadDeliverables) {
      cadDeliverables.innerHTML = DATA.robot.cadDetails.deliverables
        .map(function (item) {
          return (
            '<li style="padding:10px 0;border-bottom:1px solid var(--border-light);">' +
            escapeHtml(item) +
            "</li>"
          );
        })
        .join("");
    }
  }

  function hydrateOutreach() {
    setText("[data-outreach='intro']", DATA.outreach.intro);

    var statsEl = document.getElementById("outreach-stats");
    if (statsEl) {
      statsEl.innerHTML = DATA.outreach.impactStats
        .map(function (stat) {
          return (
            '<div class="kpi-cell">' +
            '<span class="kpi-value">' +
            escapeHtml(stat.value) +
            "</span>" +
            '<span class="kpi-label">' +
            escapeHtml(stat.label) +
            "</span>" +
            '<span class="kpi-note">' +
            escapeHtml(stat.note) +
            "</span>" +
            "</div>"
          );
        })
        .join("");
    }

    var galleryEl = document.getElementById("outreach-gallery");
    var filterBar = document.getElementById("outreach-filters");
    var lightbox = document.getElementById("outreach-lightbox");

    if (galleryEl && filterBar) {
      var cats = ["All", "Workshops", "Mentorship", "Demonstrations", "Camps", "Community", "STEM Education"];
      var activeCat = "All";

      function renderGallery() {
        var items = DATA.outreach.programs.filter(function (item) {
          return activeCat === "All" || item.category === activeCat;
        });

        galleryEl.innerHTML = items
          .map(function (item) {
            var originalIdx = DATA.outreach.programs.indexOf(item);
            return (
              '<button type="button" class="gallery-tile" data-program-index="' +
              originalIdx +
              '">' +
              renderMediaFrame({
                image: item.image,
                placeholderPath: item.placeholderPath,
                alt: item.title,
                ratioClass: "ratio-4x3"
              }) +
              '<div class="card-body">' +
              '<div class="meta-line"><span>' +
              escapeHtml(item.category) +
              '</span><span aria-hidden="true">·</span><span>' +
              escapeHtml(item.location) +
              "</span></div>" +
              "<h3>" +
              escapeHtml(item.title) +
              "</h3>" +
              '<p style="color:var(--text-light-secondary);font-size:0.9375rem;">' +
              escapeHtml(item.summary) +
              "</p>" +
              "</div>" +
              "</button>"
            );
          })
          .join("");
        bindImageFallbacks(galleryEl);
      }

      filterBar.innerHTML = cats
        .map(function (c) {
          return (
            '<button type="button" class="filter-btn" data-filter="' +
            escapeHtml(c) +
            '" aria-pressed="' +
            (c === activeCat ? "true" : "false") +
            '">' +
            escapeHtml(c) +
            "</button>"
          );
        })
        .join("");

      filterBar.addEventListener("click", function (e) {
        var btn = e.target.closest("button[data-filter]");
        if (!btn) return;
        activeCat = btn.getAttribute("data-filter");
        filterBar.querySelectorAll("button").forEach(function (b) {
          b.setAttribute(
            "aria-pressed",
            b.getAttribute("data-filter") === activeCat ? "true" : "false"
          );
        });
        renderGallery();
      });

      if (lightbox) {
        var closeBtn = lightbox.querySelector(".lightbox-close");
        var lbTitle = document.getElementById("lightbox-title");
        var lbMeta = document.getElementById("lightbox-meta");
        var lbMedia = document.getElementById("lightbox-media");
        var lbDesc = document.getElementById("lightbox-desc");

        function closeLightbox() {
          lightbox.hidden = true;
        }

        galleryEl.addEventListener("click", function (e) {
          var tile = e.target.closest("[data-program-index]");
          if (!tile) return;
          var item = DATA.outreach.programs[Number(tile.getAttribute("data-program-index"))];
          if (!item) return;

          if (lbTitle) lbTitle.textContent = item.title;
          if (lbMeta) lbMeta.textContent = item.category + " · " + item.date + " · " + item.location;
          if (lbDesc) lbDesc.textContent = item.summary;
          if (lbMedia) {
            lbMedia.innerHTML = item.image
              ? '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.title) + '" style="width:100%;height:100%;object-fit:cover;" />'
              : buildPlaceholderHtml(item.title, item.placeholderPath);
          }
          lightbox.hidden = false;
          if (closeBtn) closeBtn.focus();
        });

        if (closeBtn) {
          closeBtn.addEventListener("click", closeLightbox);
        }
        lightbox.addEventListener("click", function (e) {
          if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
        });
      }

      renderGallery();
    }
  }

  function hydrateAchievements() {
    setText("[data-achievements='intro']", DATA.achievements.intro);

    var statsEl = document.getElementById("achievements-stats");
    if (statsEl) {
      statsEl.innerHTML = DATA.achievements.summaryStats
        .map(function (stat) {
          return (
            '<div class="kpi-cell">' +
            '<span class="kpi-value">' +
            escapeHtml(stat.value) +
            "</span>" +
            '<span class="kpi-label">' +
            escapeHtml(stat.label) +
            "</span>" +
            '<span class="kpi-note">' +
            escapeHtml(stat.note) +
            "</span>" +
            "</div>"
          );
        })
        .join("");
    }

    var filterBar = document.getElementById("achievements-season-filters");
    var seasonContainer = document.getElementById("achievements-seasons-list");
    if (filterBar && seasonContainer) {
      var seasonNames = ["All Seasons"].concat(
        DATA.achievements.seasons.map(function (s) {
          return s.season;
        })
      );
      var activeSeason = "All Seasons";

      function renderSeasons() {
        var visible = DATA.achievements.seasons.filter(function (s) {
          return activeSeason === "All Seasons" || s.season === activeSeason;
        });

        seasonContainer.innerHTML = visible
          .map(function (s) {
            var rows = s.events
              .map(function (ev) {
                return (
                  '<div class="timeline-row">' +
                  '<div class="timeline-year">' +
                  escapeHtml(ev.date) +
                  "</div>" +
                  "<div>" +
                  '<h3 style="margin-bottom:6px;">' +
                  escapeHtml(ev.event) +
                  "</h3>" +
                  '<p style="color:var(--text-light-secondary);margin-bottom:8px;">' +
                  escapeHtml(ev.notes) +
                  "</p>" +
                  '<div class="meta-line" style="color:var(--text-light-primary);font-weight:600;">' +
                  escapeHtml(ev.award) +
                  "</div>" +
                  "</div>" +
                  '<div class="timeline-result">Rank: ' +
                  escapeHtml(ev.ranking) +
                  "<br />Record: " +
                  escapeHtml(ev.record) +
                  "</div>" +
                  "</div>"
                );
              })
              .join("");

            return (
              '<div style="margin-bottom:48px;">' +
              '<div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:12px;margin-bottom:16px;">' +
              "<h3>" +
              escapeHtml(s.season) +
              " — Robot: " +
              escapeHtml(s.robotName) +
              "</h3>" +
              '<span class="meta-line mono-num">' +
              escapeHtml(s.status) +
              "</span>" +
              "</div>" +
              '<div class="timeline">' +
              rows +
              "</div>" +
              "</div>"
            );
          })
          .join("");
      }

      filterBar.innerHTML = seasonNames
        .map(function (name) {
          return (
            '<button type="button" class="filter-btn" data-filter="' +
            escapeHtml(name) +
            '" aria-pressed="' +
            (name === activeSeason ? "true" : "false") +
            '">' +
            escapeHtml(name) +
            "</button>"
          );
        })
        .join("");

      filterBar.addEventListener("click", function (e) {
        var btn = e.target.closest("button[data-filter]");
        if (!btn) return;
        activeSeason = btn.getAttribute("data-filter");
        filterBar.querySelectorAll("button").forEach(function (b) {
          b.setAttribute(
            "aria-pressed",
            b.getAttribute("data-filter") === activeSeason ? "true" : "false"
          );
        });
        renderSeasons();
      });

      renderSeasons();
    }

    var awardsGrid = document.getElementById("achievements-awards-grid");
    if (awardsGrid) {
      awardsGrid.innerHTML = DATA.achievements.awardShowcase
        .map(function (aw) {
          return (
            '<article class="card card-flush">' +
            renderMediaFrame({
              image: aw.image,
              placeholderPath: aw.placeholderPath,
              alt: aw.title,
              ratioClass: "ratio-4x3"
            }) +
            '<div class="card-body">' +
            '<div class="meta-line mono-num"><span>' +
            escapeHtml(aw.season) +
            '</span><span aria-hidden="true">·</span><span>' +
            escapeHtml(aw.event) +
            "</span></div>" +
            "<h3>" +
            escapeHtml(aw.title) +
            "</h3>" +
            '<p style="color:var(--text-dark-secondary);font-size:0.9375rem;">' +
            escapeHtml(aw.description) +
            "</p>" +
            "</div>" +
            "</article>"
          );
        })
        .join("");
    }
  }

  function hydrateSponsors() {
    setText("[data-sponsors='intro']", DATA.sponsors.intro);

    var partnersGrid = document.getElementById("sponsors-partners-grid");
    if (partnersGrid) {
      partnersGrid.innerHTML = DATA.sponsors.partners
        .map(function (p) {
          return (
            '<article class="sponsor-tile">' +
            '<div class="sponsor-logo-box">' +
            (p.image
              ? '<img src="' +
                escapeHtml(p.image) +
                '" alt="' +
                escapeHtml(p.name) +
                '" style="max-height:48px;object-fit:contain;" />'
              : escapeHtml(p.placeholderPath)) +
            "</div>" +
            "<div>" +
            '<h3 style="margin-bottom:4px;">' +
            escapeHtml(p.name) +
            "</h3>" +
            '<div class="meta-line"><span>' +
            escapeHtml(p.tier) +
            '</span><span aria-hidden="true">·</span><span>' +
            escapeHtml(p.contribution) +
            "</span></div>" +
            "</div>" +
            "</article>"
          );
        })
        .join("");
    }

    var tiersGrid = document.getElementById("sponsors-tiers-grid");
    if (tiersGrid) {
      tiersGrid.innerHTML = DATA.sponsors.tiers
        .map(function (t) {
          var items = t.benefits
            .map(function (b) {
              return (
                '<li style="padding:8px 0;border-bottom:1px solid var(--border-dark);">' +
                escapeHtml(b) +
                "</li>"
              );
            })
            .join("");

          return (
            '<article class="card">' +
            '<div class="mono-num" style="font-size:0.875rem;color:var(--text-dark-secondary);">' +
            escapeHtml(t.contribution) +
            "</div>" +
            "<h3>" +
            escapeHtml(t.name) +
            "</h3>" +
            '<ul style="list-style:none;padding:0;margin:8px 0 0;color:var(--text-dark-secondary);font-size:0.9375rem;">' +
            items +
            "</ul>" +
            "</article>"
          );
        })
        .join("");
    }

    var fundingGrid = document.getElementById("sponsors-funding-grid");
    if (fundingGrid) {
      fundingGrid.innerHTML = DATA.sponsors.fundingAllocation
        .map(function (f) {
          return (
            '<article class="card">' +
            '<div class="kpi-value" style="color:inherit;">' +
            escapeHtml(f.share) +
            "</div>" +
            "<h3>" +
            escapeHtml(f.category) +
            "</h3>" +
            '<p style="color:var(--text-light-secondary);font-size:0.9375rem;">' +
            escapeHtml(f.detail) +
            "</p>" +
            "</article>"
          );
        })
        .join("");
    }
  }

  function hydrateContact() {
    setText("[data-contact='intro']", DATA.contact.intro);
    setText("[data-contact='schedule']", DATA.identity.meetingSchedule);
    setText("[data-contact='address']", DATA.identity.workshopAddress);

    var channelsEl = document.getElementById("contact-channels-grid");
    if (channelsEl) {
      channelsEl.innerHTML = DATA.contact.channels
        .map(function (ch) {
          return (
            '<article class="card">' +
            "<h3>" +
            escapeHtml(ch.title) +
            "</h3>" +
            '<p style="color:var(--text-light-secondary);font-size:0.9375rem;">' +
            escapeHtml(ch.description) +
            "</p>" +
            '<div class="cta-row" style="margin-top:auto;">' +
            '<a class="btn btn-primary btn-sm" href="mailto:' +
            escapeHtml(ch.email) +
            '">Email ' +
            escapeHtml(ch.email) +
            "</a>" +
            '<button type="button" class="btn btn-secondary btn-sm" data-copy-email="' +
            escapeHtml(ch.email) +
            '">Copy Address</button>' +
            "</div>" +
            "</article>"
          );
        })
        .join("");

      channelsEl.addEventListener("click", function (e) {
        var copyBtn = e.target.closest("button[data-copy-email]");
        if (!copyBtn) return;
        var addr = copyBtn.getAttribute("data-copy-email");
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(addr).then(function () {
            copyBtn.textContent = "Copied";
            setTimeout(function () {
              copyBtn.textContent = "Copy Address";
            }, 1800);
          });
        }
      });
    }

    var composerForm = document.getElementById("contact-mailto-composer");
    var feedback = document.getElementById("contact-form-feedback");
    if (composerForm && feedback) {
      composerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = composerForm.querySelector("#sender-name").value.trim();
        var topic = composerForm.querySelector("#inquiry-topic").value;
        var message = composerForm.querySelector("#sender-message").value.trim();

        if (!name || !message) {
          feedback.hidden = false;
          feedback.textContent = "Please enter your name and message before opening your email draft.";
          return;
        }

        var targetEmail = DATA.identity.contactEmail;
        if (topic === "Sponsorship") targetEmail = DATA.identity.sponsorshipEmail;
        if (topic === "Recruitment") targetEmail = DATA.identity.recruitmentEmail;

        var subject = encodeURIComponent("[" + topic + "] Inquiry from " + name);
        var body = encodeURIComponent("Name: " + name + "\nTopic: " + topic + "\n\n" + message);
        feedback.hidden = false;
        feedback.textContent =
          "Opening email draft to " + targetEmail + " in your default mail client.";
        window.location.href = "mailto:" + targetEmail + "?subject=" + subject + "&body=" + body;
      });
    }

    var socialList = document.getElementById("contact-socials-list");
    if (socialList) {
      socialList.innerHTML = DATA.identity.socials
        .map(function (s) {
          return (
            '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border-dark);">' +
            "<span>" +
            escapeHtml(s.label) +
            "</span>" +
            '<a class="mono-num" href="' +
            escapeHtml(s.url) +
            '" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;">' +
            escapeHtml(s.handle) +
            "</a>" +
            "</div>"
          );
        })
        .join("");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavigation();
    hydrateCommonTokens();

    var page = document.body.getAttribute("data-page");
    if (page === "home") hydrateHome();
    if (page === "about") hydrateAbout();
    if (page === "robot") hydrateRobot();
    if (page === "outreach") hydrateOutreach();
    if (page === "achievements") hydrateAchievements();
    if (page === "sponsors") hydrateSponsors();
    if (page === "contact") hydrateContact();

    bindImageFallbacks(document);
    initReveal();
  });
})();
