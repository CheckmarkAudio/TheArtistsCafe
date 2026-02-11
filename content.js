window.SiteContent = {
  brand: {
    name: "Artist Cafe",
    email: "artistscafe@hallpassinternational.com",
  },
  accessibility: {
    homeLabel: "Home",
    applyNowLabel: "Apply now",
  },
  nav: [
    { id: "membership", label: "Membership", href: "#membership" },
    { id: "support", label: "Support", href: "#support" },
    { id: "disclaimers", label: "Disclaimers", href: "#disclaimers" },
    { id: "optional-services", label: "Optional services", href: "#optional-services" },
    { id: "faq", label: "FAQ", href: "#faq" },
    { id: "apply", label: "Apply", href: "apply.html" },
  ],
  hero: {
    headline: "Artist Cafe is an open label for independent artists.",
    subhead:
      "We provide professional distribution, infrastructure, and access to opportunities — and we actively support artists who demonstrate readiness, momentum, and consistency.\n\nNot every artist is pushed.\nNot every release qualifies.\nSupport is earned, not purchased.",
    ctas: [
      { label: "Apply for membership", href: "apply.html" },
      { label: "How support works", href: "#support" },
    ],
  },
  membership: {
    headline: "What membership means",
    sentence:
      "When you join Artist Cafe, you gain access to our distribution platform and become eligible for review by our team.",
    allMembersTitle: "All members can:",
    bullets: [
      "Release music professionally",
      "Distribute audio and video (including VEVO)",
      "Collect and track royalties",
      "Maintain full control of their catalog",
    ],
    supportNote:
      "Additional support — including editorial submissions, platform verification, and promotional consideration — is offered selectively based on artist readiness and release quality.",
  },
  support: {
    headline: "How Artist Cafe support works",
    sentence:
      "Artist Cafe uses a status system to determine which artists and releases are eligible for additional opportunities.",
    bullets: [
      "Statuses are not paid upgrades.",
      "They reflect where you are in your journey.",
      "Statuses may change over time and are reviewed regularly.",
    ],
    statuses: [
      {
        id: "opener",
        name: "Opener",
        copy:
          "You’re officially part of Artist Cafe.\n\nYour releases are live, professionally distributed, and eligible for review. At this stage, our focus is ensuring smooth delivery, clean metadata, and a strong foundation for future releases.\n\nAs you continue releasing and building momentum, your work may be reviewed for additional opportunities.",
      },
      {
        id: "headliner",
        name: "Headliner",
        copy:
          "You’ve been flagged as a Headliner artist.\n\nThis means your releases demonstrate professional readiness and may be considered for select platform opportunities, including:\n\n- Editorial playlist submission consideration\n- Platform verification submissions (where applicable)\n- Priority review for Artist Cafe features and highlights\n\nSubmission does not guarantee placement or approval, and all opportunities are subject to platform discretion.\n\nContinue releasing consistently and building momentum — status is reviewed on an ongoing basis.",
      },
      {
        id: "hitmaker",
        name: "Hitmaker",
        copy:
          "Your project has been selected for active support.\n\nHitmaker status is invite-only and applies to releases that demonstrate strong momentum, strategic fit, and readiness for wider exposure.\n\nThis may include:\n\n- Priority editorial playlist submissions\n- VEVO video pitching and promotional consideration\n- Territory-specific opportunities when appropriate\n\nNot all releases qualify, and Hitmaker support is reviewed per project.",
      },
    ],
  },
  disclaimers: {
    headline: "Important notes",
    editorialTitle: "Editorial & pitching disclaimer",
    editorialCopy:
      "Editorial submissions and platform pitching are discretionary and non-guaranteed.\nPlacement decisions are made entirely by third-party platforms and editors.",
    verificationTitle: "Verification submissions",
    verificationCopy:
      "Artist Cafe may submit eligible artist profiles for platform verification when requirements are met.\n\nSubmission does not guarantee verification and approval is determined solely by each platform.\n\nWe only submit accounts when there is a reasonable likelihood of approval.",
  },
  optionalServices: {
    headline: "How we offer promotion",
    copy:
      "Artist Cafe does not sell promotion as a menu of guarantees.\n\nInstead, we recommend optional paid services — such as PR, advertising, or campaign support — when they align with your goals and readiness.\n\nIf we believe a paid service could meaningfully support your release, our team will let you know.",
  },
  faq: {
    headline: "FAQ",
    items: [
      {
        q: "Is additional support guaranteed?",
        a: "No. Editorial submissions, pitching, and platform opportunities are discretionary and non-guaranteed. Decisions are made by third-party platforms and editors.",
      },
      {
        q: "Are statuses paid upgrades?",
        a: "No. Statuses are not paid upgrades. They reflect where you are in your journey and may change over time as we review activity and release quality.",
      },
      {
        q: "Why wasn’t my release selected for additional support?",
        a: "We review artists and releases on a rolling basis. Not all projects qualify for additional support at every stage. You’re welcome to continue releasing through Artist Cafe, and we’ll reassess as momentum develops.",
      },
      {
        q: "Can my status change?",
        a: "Yes. Artist Cafe statuses are reviewed periodically and may change based on activity, release quality, or strategic focus. This does not affect your ability to release music through the platform.",
      },
      {
        q: "Do you submit verification requests?",
        a: "Artist Cafe may submit eligible artist profiles for platform verification when requirements are met. Submission does not guarantee verification and approval is determined solely by each platform.",
      },
      {
        q: "Do you sell promotion packages?",
        a: "Artist Cafe does not sell promotion as a menu of guarantees. We recommend optional paid services when they align with your goals and readiness.",
      },
    ],
  },
  finalCta: {
    headline: "Artist Cafe is built to support artists who show up, execute, and grow.",
    sentence:
      "We’re here for the long game — and we invest our attention where it makes sense.",
    applyLabel: "Apply for membership",
    emailLabel: "Email",
  },
  sidebar: {
    label: "Artist Cafe",
    title: "Navigate",
    featuredLabel: "Featured",
    links: [
      { label: "Home", href: "#top" },
      { label: "Membership", href: "#membership" },
      { label: "How support works", href: "#support" },
      { label: "Important notes", href: "#disclaimers" },
      { label: "Optional services", href: "#optional-services" },
      { label: "FAQ", href: "#faq" },
      { label: "Apply", href: "apply.html" },
      { label: "Email us", href: "mailto:artistscafe@hallpassinternational.com" },
    ],
    featured: [
      {
        eyebrow: "Status system",
        title: "Opener → Headliner → Hitmaker",
        foot: "Statuses reflect readiness — not payment",
      },
      {
        eyebrow: "Editorial",
        title: "Pitching is discretionary",
        foot: "No guaranteed placements",
      },
      {
        eyebrow: "Verification",
        title: "Submission is not a guarantee",
        foot: "Approval is platform-decided",
      },
    ],
  },
  apply: {
    headline: "Apply for membership",
    sentence:
      "When you join Artist Cafe, you gain access to our distribution platform and become eligible for review by our team.",
    note:
      "Additional opportunities — including editorial submissions and platform verification submissions — are discretionary and non-guaranteed. Placement decisions are made entirely by third-party platforms and editors.",
    steps: [
      {
        id: "identity",
        title: "Identity",
        fields: [
          {
            id: "artistName",
            label: "Artist / stage name",
            type: "text",
            required: true,
          },
          {
            id: "contactName",
            label: "Contact name",
            type: "text",
            required: true,
          },
          { id: "email", label: "Email", type: "email", required: true },
          { id: "phone", label: "Phone", type: "tel", required: true },
          {
            id: "location",
            label: "Location (city, country)",
            type: "text",
            required: true,
          },
        ],
        role: {
          label: "Role",
          options: ["Artist", "Producer", "Label", "Manager"],
        },
      },
      {
        id: "presence",
        title: "Proof of presence",
        fields: [
          {
            id: "spotify",
            label: "Spotify artist link (optional)",
            type: "url",
            required: false,
          },
          {
            id: "appleMusic",
            label: "Apple Music link (optional)",
            type: "url",
            required: false,
          },
          {
            id: "youtube",
            label: "YouTube link",
            type: "url",
            required: true,
          },
          {
            id: "tiktok",
            label: "TikTok link",
            type: "url",
            required: true,
          },
          {
            id: "instagram",
            label: "Instagram link (optional)",
            type: "url",
            required: false,
          },
          {
            id: "soundcloud",
            label: "SoundCloud/Bandcamp (optional)",
            type: "url",
            required: false,
          },
        ],
        spotifyNotLive: {
          id: "spotifyNotLive",
          label: "Not live on Spotify yet",
        },
        bio: {
          id: "bio",
          label: "Short bio (max 500 chars)",
          maxLength: 500,
        },
        releases: {
          id: "releases",
          label: "1–3 release links or private stream link",
        },
      },
      {
        id: "rights",
        title: "Rights + goals",
        rights: {
          id: "rightsCheck",
          label: "I own/control rights to distribute.",
        },
        labelAffiliation: {
          id: "labelAffiliation",
          label: "Label affiliation",
          options: ["No", "Yes"],
        },
        labelName: {
          id: "labelName",
          label: "Label name (if yes)",
        },
        mediaTypes: {
          id: "mediaTypes",
          label: "What are you distributing?",
          options: ["Audio", "Video"],
        },
        interests: {
          id: "interests",
          label: "What are you looking for?",
          options: [
            "Professional distribution + infrastructure",
            "Audio + video distribution (including VEVO)",
            "Royalty collection + tracking",
            "Platform opportunities (discretionary, non-guaranteed)",
            "Optional campaign support (team-recommended)",
          ],
        },
        goals: {
          id: "goals",
          label: "Goals for your next release (optional)",
        },
        notes: {
          id: "notes",
          label: "Notes (optional)",
        },
      },
    ],
    actions: {
      next: "Next",
      back: "Back",
      submit: "Submit application",
      sending: "Sending...",
      success: "Application received. Our team will review and follow up.",
      error: "Something went wrong. Please try again.",
      rateLimit: "Please wait a moment before submitting again.",
    },
    nextSteps: [
      "We review applications on a rolling basis.",
      "If approved, we’ll follow up with next steps for onboarding and releases.",
    ],
  },
};
