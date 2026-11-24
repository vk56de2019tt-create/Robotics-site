/**
 * CENTRALIZED WEBSITE CONTENT & PLACEHOLDER CONFIGURATION
 * ---------------------------------------------------------------------------
 * Replace values in `window.TEAM_CONTENT` with your team's verified details.
 * Fields marked with bracketed tokens (e.g. [TEAM NAME], [MEMBER NAME]) or
 * "Sample placeholder" notes are intentionally marked so you never publish
 * unverified claims or invented statistics.
 *
 * Image Slots:
 * - Set `image: "assets/images/..."` to display a real photograph or render.
 * - Leave `image: ""` to show a clean, deliberate placeholder box displaying
 *   the recommended asset path and aspect ratio.
 */

window.TEAM_CONTENT = {
  identity: {
    teamName: "[TEAM NAME]",
    teamNumber: "[FTC/FRC TEAM NUMBER]",
    program: "[FTC / FRC / VEX]",
    location: "[CITY, STATE]",
    season: "[CURRENT SEASON]",
    foundedYear: "[FOUNDED YEAR]",
    tagline:
      "Student-led competitive robotics engineering, precision fabrication, and community STEM education.",
    mission:
      "[TEAM MISSION] Sample mission statement — Replace with your organization's verified mission, engineering philosophy, and community commitment.",
    contactEmail: "[CONTACT EMAIL]",
    sponsorshipEmail: "[SPONSORSHIP EMAIL]",
    recruitmentEmail: "[RECRUITMENT EMAIL]",
    meetingSchedule: "[MEETING DAYS & HOURS]",
    workshopAddress: "[SCHOOL / LAB / WORKSHOP ADDRESS, CITY, STATE]",
    logoPath: "assets/icons/team-mark.svg",
    socials: [
      { label: "GitHub", handle: "[GITHUB HANDLE]", url: "https://github.com/" },
      { label: "Instagram", handle: "[INSTAGRAM HANDLE]", url: "https://instagram.com/" },
      { label: "YouTube", handle: "[YOUTUBE CHANNEL]", url: "https://youtube.com/" },
      { label: "LinkedIn", handle: "[LINKEDIN PAGE]", url: "https://linkedin.com/" }
    ]
  },

  home: {
    heroImage: "assets/images/robot/hero-chassis.jpg",
    heroImageCaption: "Sample robot chassis photo · Replace with assets/images/robot/hero-chassis.jpg",
    heroHeadline: "Engineering competition robotics with discipline and purpose.",
    heroIntro:
      "[TEAM NAME] ([FTC/FRC TEAM NUMBER]) is a student-driven robotics organization in [CITY, STATE] preparing for the [CURRENT SEASON] season through iterative CAD, custom machining, and community outreach.",
    keyStats: [
      {
        value: "[XX]",
        label: "Active Student Members",
        note: "Sample count · Replace with verified roster total"
      },
      {
        value: "[XX]",
        label: "Mentors & Advisors",
        note: "Sample count · Replace with verified mentor count"
      },
      {
        value: "[XXX hrs]",
        label: "Community Outreach Logged",
        note: "Sample metric · Replace with verified season log"
      },
      {
        value: "[CURRENT SEASON]",
        label: "Active Competition Cycle",
        note: "Competition program: [FTC/FRC TEAM NUMBER]"
      }
    ],
    featuredRobotSummary:
      "Meet [ROBOT NAME], our [CURRENT SEASON] competition platform engineered around modular serviceability, closed-loop motion control, and documented CAD revisions.",
    featuredOutreachImage: "assets/images/outreach/stem-demo.jpg",
    featuredOutreachCaption:
      "Sample outreach workshop photo · Replace with assets/images/outreach/stem-demo.jpg"
  },

  about: {
    groupImage: "assets/images/team/workshop-collab.jpg",
    groupImageCaption:
      "Sample team workshop photograph · Replace with assets/images/team/workshop-collab.jpg",
    intro:
      "[TEAM NAME] brings together students across mechanical design, electrical systems, embedded software, and team operations to design, fabricate, and compete with custom-built robots each season.",
    originStory:
      "[TEAM HISTORY] Sample origin story — Document how [TEAM NAME] was founded in [FOUNDED YEAR] in [CITY, STATE], the educators or mentors who helped launch the workshop, and how your subteams evolved.",
    philosophy:
      "Every subsystem is prototyped, documented in CAD, tested against match cycle targets, and reviewed in an engineering notebook before competition day.",
    historyMilestones: [
      {
        year: "[FOUNDED YEAR]",
        title: "Organization Founded in [CITY, STATE]",
        detail: "Sample milestone — Replace with founding roster size, first workshop space, and inaugural season notes."
      },
      {
        year: "[YEAR 02]",
        title: "Expansion of Fabrication & Programming Subteams",
        detail: "Sample milestone — Document addition of CNC/3D printing tooling, formal CAD workflow, or mentorship programs."
      },
      {
        year: "[CURRENT SEASON]",
        title: "[CURRENT SEASON] Build & Outreach Cycle",
        detail: "Sample milestone — Current season leadership structure, community workshops, and regional competition preparation."
      }
    ],
    leadership: [
      {
        name: "[MEMBER NAME]",
        role: "[TEAM ROLE — Team Captain]",
        subteam: "Leadership",
        gradYear: "[CLASS YEAR]",
        bio: "Sample biography — Coordinates build-season milestones, competition logistics, and cross-subteam design reviews.",
        skills: "Systems Integration · Project Management · Strategy",
        image: "",
        placeholderPath: "assets/images/team/lead-01.jpg"
      },
      {
        name: "[MEMBER NAME]",
        role: "[TEAM ROLE — Mechanical Lead]",
        subteam: "Mechanical",
        gradYear: "[CLASS YEAR]",
        bio: "Sample biography — Leads chassis architecture, mechanism prototyping, tolerances, and CNC/laser fabrication workflows.",
        skills: "CAD Modeling · Machining · Mechanism Design",
        image: "",
        placeholderPath: "assets/images/team/lead-02.jpg"
      },
      {
        name: "[MEMBER NAME]",
        role: "[TEAM ROLE — Software & Controls Lead]",
        subteam: "Software",
        gradYear: "[CLASS YEAR]",
        bio: "Sample biography — Architects autonomous pathing, odometry localization, vision pipelines, and driver telemetry.",
        skills: "Control Loops · Odometry · Embedded Java/C++",
        image: "",
        placeholderPath: "assets/images/team/lead-03.jpg"
      }
    ],
    members: [
      {
        name: "[MEMBER NAME]",
        role: "[TEAM ROLE — Drivetrain Engineer]",
        subteam: "Mechanical",
        gradYear: "[CLASS YEAR]",
        bio: "Sample member profile — Focuses on drivetrain packaging, belt tensioning, and structural weight reduction.",
        skills: "Onshape / SolidWorks · Milling · Assembly",
        image: "",
        placeholderPath: "assets/images/team/member-01.jpg"
      },
      {
        name: "[MEMBER NAME]",
        role: "[TEAM ROLE — Electronics & Wiring Lead]",
        subteam: "Electrical",
        gradYear: "[CLASS YEAR]",
        bio: "Sample member profile — Manages power distribution, CAN/sensor harnesses, crimp standards, and pit diagnostics.",
        skills: "Harness Routing · Power Distribution · Diagnostics",
        image: "",
        placeholderPath: "assets/images/team/member-02.jpg"
      },
      {
        name: "[MEMBER NAME]",
        role: "[TEAM ROLE — Autonomous Programmer]",
        subteam: "Software",
        gradYear: "[CLASS YEAR]",
        bio: "Sample member profile — Tunes PID controllers, trajectory followers, and match-start autonomous routines.",
        skills: "PID Tuning · State Machines · Git Workflow",
        image: "",
        placeholderPath: "assets/images/team/member-03.jpg"
      },
      {
        name: "[MEMBER NAME]",
        role: "[TEAM ROLE — Outreach & Operations]",
        subteam: "Operations",
        gradYear: "[CLASS YEAR]",
        bio: "Sample member profile — Organizes STEM workshops, sponsor communications, portfolio layout, and event documentation.",
        skills: "Community Outreach · Portfolio Design · Sponsorships",
        image: "",
        placeholderPath: "assets/images/team/member-04.jpg"
      },
      {
        name: "[MEMBER NAME]",
        role: "[TEAM ROLE — CAD & Prototyping]",
        subteam: "Mechanical",
        gradYear: "[CLASS YEAR]",
        bio: "Sample member profile — Iterates intake geometry and scoring end-effectors using rapid 3D-printed test rigs.",
        skills: "Rapid Prototyping · 3D Printing · Testing",
        image: "",
        placeholderPath: "assets/images/team/member-05.jpg"
      },
      {
        name: "[MEMBER NAME]",
        role: "[TEAM ROLE — Drive Team & Scouting]",
        subteam: "Operations",
        gradYear: "[CLASS YEAR]",
        bio: "Sample member profile — Leads match strategy, alliance scouting analytics, and pit-crew turnaround checklists.",
        skills: "Match Strategy · Scouting Data · Pit Operations",
        image: "",
        placeholderPath: "assets/images/team/member-06.jpg"
      }
    ],
    mentors: [
      {
        name: "[MENTOR NAME]",
        role: "[MENTOR ROLE — Lead Technical Mentor]",
        organization: "[AFFILIATION / COMPANY]",
        bio: "Sample mentor profile — Advises students on mechanical design reviews, workshop safety, and competition engineering standards.",
        image: "",
        placeholderPath: "assets/images/team/mentor-01.jpg"
      },
      {
        name: "[MENTOR NAME]",
        role: "[MENTOR ROLE — Software & Controls Advisor]",
        organization: "[AFFILIATION / COMPANY]",
        bio: "Sample mentor profile — Supports embedded control architecture, version control practices, and sensor debugging.",
        image: "",
        placeholderPath: "assets/images/team/mentor-02.jpg"
      },
      {
        name: "[MENTOR NAME]",
        role: "[MENTOR ROLE — Faculty / Program Advisor]",
        organization: "[SCHOOL / ORGANIZATION]",
        bio: "Sample mentor profile — Coordinates school facility access, competition travel logistics, and community partnerships.",
        image: "",
        placeholderPath: "assets/images/team/mentor-03.jpg"
      }
    ]
  },

  robot: {
    name: "[ROBOT NAME]",
    season: "[CURRENT SEASON]",
    heroImage: "assets/images/robot/hero-chassis.jpg",
    cadImage: "assets/images/robot/cad-assembly.jpg",
    overview:
      "[ROBOT SPECIFICATIONS] Sample robot overview — Replace with a verified engineering summary of [ROBOT NAME], including your primary game strategy, packaging constraints, and key design iterations for [CURRENT SEASON].",
    quickSpecs: [
      { label: "Dimensions (Stowed)", value: "[XX.X × XX.X × XX.X in]", note: "Sample spec · Replace with measured envelope" },
      { label: "Competition Weight", value: "[XX.X lbs]", note: "Sample spec · Replace with scale weight" },
      { label: "Drivetrain Topology", value: "[Swerve / Mecanum / Tank]", note: "Sample spec · Replace with chassis type" },
      { label: "Control Architecture", value: "[Control Hub / roboRIO]", note: "Sample spec · Replace with hardware stack" }
    ],
    specTable: [
      { parameter: "Chassis Frame", spec: "[6061-T6 Aluminum / Carbon Plate — Sample]", notes: "Replace with actual material and stock thickness" },
      { parameter: "Drive Motors & Ratio", spec: "[X Motors · XX:1 Gear Ratio — Sample]", notes: "Replace with verified motor model and reduction" },
      { parameter: "Odometry & Localization", spec: "[Dead Wheels / IMU / AprilTag Vision — Sample]", notes: "Replace with active localization sensors" },
      { parameter: "Intake Mechanism", spec: "[Compliant Roller / Active Claw — Sample]", notes: "Replace with game-piece acquisition design" },
      { parameter: "Lift / Extension", spec: "[Multi-Stage Linear / Pivoting Arm — Sample]", notes: "Replace with scoring reach architecture" },
      { parameter: "End-Effector / Scoring", spec: "[Shooter / Deposit Bucket / Wrist — Sample]", notes: "Replace with scoring system specifications" }
    ],
    subsystems: [
      {
        index: "01",
        name: "Drivetrain & Mobility",
        summary: "High-traction chassis designed for rapid acceleration, defensive stability, and low center of gravity.",
        description:
          "Sample mechanical breakdown — Describe wheel type, gear ratio, bearing blocks, belt tensioning, and clearance around field obstacles.",
        metrics: [
          { label: "Wheel Type", value: "[Mecanum / Swerve Module — Sample]" },
          { label: "Free Speed", value: "[XX.X ft/s — Sample]" },
          { label: "Drive Power", value: "[4x Brushless / DC Motors — Sample]" }
        ],
        image: "",
        placeholderPath: "assets/images/robot/drivetrain-detail.jpg"
      },
      {
        index: "02",
        name: "Intake & Game-Piece Handling",
        summary: "Wide-capture acquisition assembly engineered to collect game elements reliably across varied approach angles.",
        description:
          "Sample intake breakdown — Detail roller durometer, compliance geometry, motor/servo actuation, and jam-recovery logic.",
        metrics: [
          { label: "Capture Width", value: "[XX.X in — Sample]" },
          { label: "Acquisition Time", value: "[< X.Xs — Sample]" },
          { label: "Detection Sensor", value: "[Color / Distance / Beam Break — Sample]" }
        ],
        image: "",
        placeholderPath: "assets/images/robot/intake-detail.jpg"
      },
      {
        index: "03",
        name: "Scoring & Elevation Systems",
        summary: "Repeatable scoring mechanism built for consistent cycle times and minimal backlash.",
        description:
          "Sample scoring breakdown — Document shooter wheel geometry, linear slide rigging, pivot kinematics, or endgame climbing hooks.",
        metrics: [
          { label: "Max Reach", value: "[XX.X in — Sample]" },
          { label: "Cycle Target", value: "[X.X sec — Sample]" },
          { label: "Actuation", value: "[Closed-Loop PID / Motion Profile]" }
        ],
        image: "",
        placeholderPath: "assets/images/robot/scoring-detail.jpg"
      },
      {
        index: "04",
        name: "Electronics & Power Distribution",
        summary: "Serviceable wiring harness with labeled terminations, strain relief, and rapid pit-swap connectors.",
        description:
          "Sample electrical breakdown — Describe battery placement, main breaker routing, ESD mitigation, and sensor bus layout.",
        metrics: [
          { label: "System Voltage", value: "[12V Nominal — Sample]" },
          { label: "Sensor Bus", value: "[I2C / CAN / PWM — Sample]" },
          { label: "Service Access", value: "[Top-Access Service Panel]" }
        ],
        image: "",
        placeholderPath: "assets/images/robot/electronics-detail.jpg"
      },
      {
        index: "05",
        name: "Software, Vision & Autonomous",
        summary: "Deterministic state machines, closed-loop trajectory tracking, and real-time driver feedback.",
        description:
          "Sample software breakdown — Explain path planning, AprilTag/camera pose correction, automated scoring presets, and telemetry logging.",
        metrics: [
          { label: "Language / SDK", value: "[Java / C++ / Python — Sample]" },
          { label: "Auto Routines", value: "[X Verified Paths — Sample]" },
          { label: "Vision Pipeline", value: "[AprilTag / Color Detection — Sample]" }
        ],
        image: "",
        placeholderPath: "assets/images/robot/software-telemetry.jpg"
      }
    ],
    cadDetails: {
      software: "[Onshape / SolidWorks / Fusion 360]",
      revision: "[REV X.X — Sample]",
      summary:
        "All structural plates, bearing blocks, and mounting brackets are modeled as a parametric master assembly prior to CNC routing or 3D printing.",
      deliverables: [
        "Full Parametric Assembly & Bill of Materials",
        "2D Fabrication Drawings & DXF Laser Profiles",
        "Engineering Notebook Design Reviews & Weight Budget"
      ]
    }
  },

  outreach: {
    heroImage: "assets/images/outreach/stem-demo.jpg",
    intro:
      "[OUTREACH DETAILS] Sample outreach overview — Replace with how [TEAM NAME] expands hands-on STEM access across schools, libraries, and community organizations in [CITY, STATE].",
    impactStats: [
      { value: "[XX]", label: "Workshops Hosted", note: "Sample count · Replace with verified tally" },
      { value: "[XXX+]", label: "Students Reached", note: "Sample count · Replace with verified attendance" },
      { value: "[XX]", label: "Teams Mentored", note: "Sample count · Replace with FLL/FTC teams mentored" },
      { value: "[XXX hrs]", label: "Volunteer Hours", note: "Sample count · Replace with verified team hours" }
    ],
    programs: [
      {
        category: "Workshops",
        title: "Hands-On Community Robotics Workshops",
        date: "[SEASON / TERM]",
        location: "[LOCAL LIBRARY / SCHOOL]",
        summary:
          "Sample outreach program — Describe beginner soldering, CAD introduction, or microcontroller workshops led by student members.",
        image: "assets/images/outreach/stem-demo.jpg",
        placeholderPath: "assets/images/outreach/stem-demo.jpg"
      },
      {
        category: "Mentorship",
        title: "Junior Team Mentorship & Scrimmages",
        date: "[SEASON / TERM]",
        location: "[PARTNER ELEMENTARY / MIDDLE SCHOOL]",
        summary:
          "Sample mentorship program — Detail weekly coaching visits, field-build support, and practice scrimmages for younger robotics teams.",
        image: "",
        placeholderPath: "assets/images/outreach/mentorship-01.jpg"
      },
      {
        category: "Demonstrations",
        title: "Public STEM Demonstrations & Science Nights",
        date: "[SEASON / TERM]",
        location: "[CITY COMMUNITY CENTER]",
        summary:
          "Sample demonstration event — Showcase live robot driving demos and interactive engineering Q&A stations for local families.",
        image: "",
        placeholderPath: "assets/images/outreach/demo-01.jpg"
      },
      {
        category: "Camps",
        title: "Summer Engineering & Coding Camp",
        date: "[SUMMER DATES]",
        location: "[HOST CAMPUS]",
        summary:
          "Sample camp program — Multi-day curriculum introducing mechanical design, block or text coding, and collaborative problem solving.",
        image: "",
        placeholderPath: "assets/images/outreach/camp-01.jpg"
      },
      {
        category: "Community",
        title: "Event Volunteering & Tournament Support",
        date: "[SEASON / TERM]",
        location: "[REGIONAL VENUE]",
        summary:
          "Sample volunteer initiative — Field reset crews, pit inspection support, and tournament logistics volunteering across regional qualifiers.",
        image: "",
        placeholderPath: "assets/images/outreach/volunteer-01.jpg"
      },
      {
        category: "STEM Education",
        title: "Open-Source Curriculum & Resource Kits",
        date: "[ONGOING]",
        location: "[ONLINE / LOCAL DISTRICTS]",
        summary:
          "Sample educational resource — Printable CAD guides, wiring checklists, and starter code templates shared with rookie teams.",
        image: "",
        placeholderPath: "assets/images/outreach/curriculum-01.jpg"
      }
    ]
  },

  achievements: {
    intro:
      "[COMPETITION RESULTS] Sample competition archive — All tournament placements, rankings, and judged awards below are structured placeholders awaiting verified team records.",
    summaryStats: [
      { value: "[XX]", label: "Events Competed", note: "Sample metric · Replace with verified total" },
      { value: "[XX]", label: "Judged Awards", note: "Sample metric · Replace with verified awards" },
      { value: "[X.X]", label: "Peak Qualification Rank", note: "Sample metric · Replace with verified ranking" },
      { value: "[XX%]", label: "Win / Playoff Rate", note: "Sample metric · Replace with verified record" }
    ],
    seasons: [
      {
        season: "[CURRENT SEASON]",
        robotName: "[ROBOT NAME]",
        status: "Active Season · Placeholder Records",
        events: [
          {
            event: "[REGIONAL QUALIFIER 01]",
            date: "[MONTH YEAR]",
            ranking: "[RANK #X / XX]",
            record: "[W-L-T]",
            award: "[AWARDS — e.g. Inspire / Engineering / Finalist Placeholder]",
            notes: "Sample event log — Replace with verified match results and judge feedback."
          },
          {
            event: "[LEAGUE / STATE CHAMPIONSHIP]",
            date: "[MONTH YEAR]",
            ranking: "[RANK #X / XX]",
            record: "[W-L-T]",
            award: "[AWARDS — Placeholder]",
            notes: "Sample event log — Replace with verified alliance selection and playoff outcome."
          }
        ]
      },
      {
        season: "[PREVIOUS SEASON]",
        robotName: "[PREVIOUS ROBOT NAME]",
        status: "Archived Season · Placeholder Records",
        events: [
          {
            event: "[REGIONAL EVENT]",
            date: "[MONTH YEAR]",
            ranking: "[RANK #X / XX]",
            record: "[W-L-T]",
            award: "[AWARDS — Placeholder]",
            notes: "Sample archive entry — Replace with historical competition placement."
          },
          {
            event: "[INVITATIONAL / OFF-SEASON EVENT]",
            date: "[MONTH YEAR]",
            ranking: "[RANK #X / XX]",
            record: "[W-L-T]",
            award: "[AWARDS — Placeholder]",
            notes: "Sample archive entry — Replace with verified event notes."
          }
        ]
      }
    ],
    awardShowcase: [
      {
        title: "[AWARDS — Primary Judged Award Placeholder]",
        season: "[SEASON]",
        event: "[EVENT NAME]",
        description: "Sample award description — Summarize the engineering, outreach, or portfolio criteria recognized.",
        image: "",
        placeholderPath: "assets/images/awards/award-01.jpg"
      },
      {
        title: "[AWARDS — Mechanical / Control Award Placeholder]",
        season: "[SEASON]",
        event: "[EVENT NAME]",
        description: "Sample award description — Document specific robot mechanisms or autonomous capabilities noted by judges.",
        image: "",
        placeholderPath: "assets/images/awards/award-02.jpg"
      },
      {
        title: "[AWARDS — Tournament Finalist / Winner Placeholder]",
        season: "[SEASON]",
        event: "[EVENT NAME]",
        description: "Sample award description — Record alliance partners and elimination bracket progression.",
        image: "",
        placeholderPath: "assets/images/awards/award-03.jpg"
      }
    ]
  },

  sponsors: {
    intro:
      "Competitive robotics depends on industry and community partners who invest in student engineering, workshop tooling, and accessible STEM outreach.",
    fundingAllocation: [
      {
        category: "Robot Hardware & Fabrication",
        share: "[XX%]",
        detail: "Raw aluminum stock, fasteners, motors, sensors, electronics, and CNC/3D-printing consumables."
      },
      {
        category: "Competition Registration & Travel",
        share: "[XX%]",
        detail: "Official season registration, regional event entry fees, pit safety gear, and team transport."
      },
      {
        category: "Community Outreach Kits",
        share: "[XX%]",
        detail: "Workshop electronics kits, demo supplies, and curriculum materials provided free to local students."
      },
      {
        category: "Workshop Tooling & Safety",
        share: "[XX%]",
        detail: "Precision metrology instruments, machine maintenance, eye protection, and battery test equipment."
      }
    ],
    tiers: [
      {
        name: "Title Partner",
        contribution: "[$X,XXX+ — Sample Tier]",
        benefits: [
          "Primary logo placement on competition robot chassis and pit banner",
          "Featured placement on website homepage and season engineering packet",
          "Dedicated lab tour, robot demonstration, and annual impact report"
        ]
      },
      {
        name: "Engineering Partner",
        contribution: "[$X,XXX — Sample Tier]",
        benefits: [
          "Logo placement on robot side panels, team apparel, and pit signage",
          "Sponsor showcase listing on website and social announcements",
          "Invitation to regional scrimmages and season review presentation"
        ]
      },
      {
        name: "Workshop Supporter",
        contribution: "[$XXX — Sample Tier]",
        benefits: [
          "Recognition on website sponsors directory and community materials",
          "End-of-season engineering summary and team thank-you packet",
          "Direct support for student outreach workshop kits"
        ]
      }
    ],
    partners: [
      {
        name: "[SPONSOR NAME 01]",
        tier: "Title Partner · Placeholder",
        contribution: "Financial & Tooling Support",
        image: "",
        placeholderPath: "assets/images/sponsors/sponsor-01.png"
      },
      {
        name: "[SPONSOR NAME 02]",
        tier: "Engineering Partner · Placeholder",
        contribution: "Machining / Materials Partner",
        image: "",
        placeholderPath: "assets/images/sponsors/sponsor-02.png"
      },
      {
        name: "[SPONSOR NAME 03]",
        tier: "Engineering Partner · Placeholder",
        contribution: "Electronics & Hardware Grant",
        image: "",
        placeholderPath: "assets/images/sponsors/sponsor-03.png"
      },
      {
        name: "[SPONSOR NAME 04]",
        tier: "Workshop Supporter · Placeholder",
        contribution: "Community Outreach Grant",
        image: "",
        placeholderPath: "assets/images/sponsors/sponsor-04.png"
      }
    ]
  },

  contact: {
    intro:
      "Connect with [TEAM NAME] regarding student membership, corporate sponsorships, community workshop bookings, or tournament collaboration.",
    channels: [
      {
        title: "General Inquiries",
        email: "[CONTACT EMAIL]",
        description: "Questions about our organization, competition schedule, or community demonstrations."
      },
      {
        title: "Sponsorship & Grants",
        email: "[SPONSORSHIP EMAIL]",
        description: "Corporate partnerships, in-kind machining/materials donations, and sponsorship prospectus requests."
      },
      {
        title: "Student Recruitment & Mentors",
        email: "[RECRUITMENT EMAIL]",
        description: "Prospective student members, parent info sessions, and engineering mentor applications."
      }
    ]
  }
};
