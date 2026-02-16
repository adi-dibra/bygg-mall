---
locale: sq
slug: projects
route: /sq/projects/
meta:
  title: Finished Projects | Nordkust Construction Partner
  description: Finished-project page with one shared card grid, tab filters, and gallery modal on card click.
site:
  htmlLang: sq-AL
  brandName: Nordkust Construction Partner
  brandTagline: Contracting with structure, accountability, and long-term value.
  navigationAriaLabel: Main navigation
  navigation:
    - label: Home
      href: /sq/
    - label: About
      href: /sq/about/
    - label: Services
      href: /sq/services/
    - label: Projects
      href: /sq/projects/
    - label: Contact
      href: /sq/contact/
  headerCta:
    label: Book site visit
    href: /sq/contact/
  languageSwitcherLabel: Language
  languageOptions:
    - code: sv
      label: Svenska
      href: /sv/projects/
    - code: en
      label: English
      href: /en/projects/
    - code: sq
      label: Shqip
      href: /sq/projects/
  theme:
    storageKey: bygg-mall-theme
    defaultTheme: light-red
    menuLabel: Opsionet
    themeLabel: Tema
    lightGroupLabel: Tema te ndritshme
    darkGroupLabel: Tema te erreta
    options:
      - id: light-red
        label: Kuqe
        tone: light
      - id: light-blue
        label: Blu
        tone: light
      - id: light-green
        label: Jeshile
        tone: light
      - id: light-yellow
        label: Verdhe
        tone: light
      - id: dark-red
        label: Kuqe
        tone: dark
      - id: dark-blue
        label: Blu
        tone: dark
      - id: dark-green
        label: Jeshile
        tone: dark
      - id: dark-yellow
        label: Verdhe
        tone: dark
  footerColumns:
    - heading: Pages
      links:
        - label: Home
          href: /sq/
        - label: About
          href: /sq/about/
        - label: Services
          href: /sq/services/
        - label: Projects
          href: /sq/projects/
        - label: Contact
          href: /sq/contact/
    - heading: Service groups
      links:
        - label: New build
          href: /sq/services/new-build/
        - label: Renovation
          href: /sq/services/renovation/
        - label: Energy upgrades
          href: /sq/services/energy/
    - heading: Contact
      links:
        - label: +46 8 555 100 20
          href: tel:+46855510020
        - label: tender@nordkustbygg.se
          href: mailto:tender@nordkustbygg.se
        - label: Sveavagen 118, Stockholm
          href: /sq/contact/#contact
  footerNote: Nordkust Construction Partner AB | Template content for construction companies in Sweden.
hero:
  eyebrow: References | Finished projects
  title: A unified project gallery with category tabs.
  intro: All finished references are shown in one card grid. Visitors filter by tab and open each project in a gallery modal without navigating to separate project pages.
  primaryCta:
    label: Contact us for similar projects
    href: /sq/contact/
  secondaryCta:
    label: View service groups
    href: /sq/services/
  image:
    src: /assets/project-site.svg
    alt: Overview of finished construction references in one project gallery.
sections:
  - type: review-list
    id: reviews
    heading: Client reviews from completed assignments
    intro: Real client feedback from recently completed projects.
    items:
      - quote: "Structured communication from kickoff to handover made it easy for our board to make fast decisions."
        author: Anna Berg
        role: Chair, Parklinjen Housing Association
        rating: 5.0/5
      - quote: "The team kept the office operational during renovation and still delivered on the agreed timeline."
        author: Johan Nyström
        role: Property Manager, Kvarnen Office Building
        rating: 4.8/5
      - quote: "Quality documentation was clear and complete, which made procurement follow-up straightforward."
        author: Karin Lund
        role: Procurement Lead, Westby Education Campus
        rating: 4.9/5
  - type: project-gallery
    id: project-gallery
    heading: Finished projects
    intro: Use the tabs to filter by category and click any card to open its gallery.
    tabsAriaLabel: Filter project categories
    allTabLabel: All projects
    categories:
      - id: residential
        label: Residential
      - id: commercial
        label: Commercial
      - id: public
        label: Public
    cards:
      - title: Strandangen Quarter
        description: New-build delivery of 84 apartments with parking, shared areas, and coordinated final handover.
        categories: [residential]
        location: Uppsala
        timeframe: 2023-2025
        image:
          src: /assets/project-villa.svg
          alt: Completed residential quarter with landscaped courtyard.
        gallery:
          - src: /assets/project-villa.svg
            alt: Completed facade view of residential quarter.
          - src: /assets/hero-construction.svg
            alt: Structural stage during residential construction.
          - src: /assets/project-site.svg
            alt: Final site works and logistics closing stage.
        openLabel: Open gallery
      - title: Parklinjen Housing Association
        description: Full utility replacement and renovation in phased execution with residents remaining on site.
        categories: [residential]
        location: Stockholm
        timeframe: 2022-2024
        image:
          src: /assets/services-renovation.svg
          alt: Renovated housing block after staged reconstruction.
        gallery:
          - src: /assets/services-renovation.svg
            alt: Interior renovation works in occupied housing asset.
          - src: /assets/project-facade.svg
            alt: Facade upgrade stage during housing renovation.
          - src: /assets/about-team.svg
            alt: Coordination meeting for resident communication and phase plan.
        openLabel: Open gallery
      - title: Solbacka Townhouses
        description: Completion package with facade upgrades, outdoor works, and verified quality closeout.
        categories: [residential]
        location: Vasteras
        timeframe: 2024-2025
        image:
          src: /assets/project-facade.svg
          alt: Completed townhouse row after construction package delivery.
        gallery:
          - src: /assets/project-facade.svg
            alt: Completed townhouse facade and entry zones.
          - src: /assets/project-villa.svg
            alt: Outdoor spaces and landscaping after handover.
          - src: /assets/services-core.svg
            alt: Technical package used for completion scope.
        openLabel: Open gallery
      - title: North Harbor Logistics Hub
        description: New logistics facility with optimized loading zones and energy-focused system package.
        categories: [commercial]
        location: Sodertalje
        timeframe: 2023-2025
        image:
          src: /assets/hero-construction.svg
          alt: Completed logistics property with active loading zones.
        gallery:
          - src: /assets/hero-construction.svg
            alt: Wide view of completed logistics facility.
          - src: /assets/project-site.svg
            alt: Execution stage with heavy assembly and logistics routing.
          - src: /assets/services-energy.svg
            alt: Installed technical systems for improved energy performance.
        openLabel: Open gallery
      - title: Kvarnen Office Building
        description: Office rebuild in active operation with phased implementation and close tenant coordination.
        categories: [commercial]
        location: Solna
        timeframe: 2022-2024
        image:
          src: /assets/project-site.svg
          alt: Completed office redevelopment project.
        gallery:
          - src: /assets/project-site.svg
            alt: Office redevelopment during phased construction.
          - src: /assets/services-renovation.svg
            alt: Interior upgrade works in operational office floors.
          - src: /assets/about-team.svg
            alt: Production meeting focused on occupancy continuity.
        openLabel: Open gallery
      - title: Lunden Retail Center
        description: Retail adaptation with installation upgrades and entrance reconstruction on compressed timeline.
        categories: [commercial]
        location: Linkoping
        timeframe: "2024"
        image:
          src: /assets/services-core.svg
          alt: Completed retail fit-out and upgraded customer entry.
        gallery:
          - src: /assets/services-core.svg
            alt: Planning package for retail tenant adaptation.
          - src: /assets/project-facade.svg
            alt: Completed facade and storefront zone.
          - src: /assets/project-site.svg
            alt: Final installation coordination inside retail area.
        openLabel: Open gallery
      - title: Westby Education Campus
        description: School extension and renovation with active operations and student-safety-led delivery planning.
        categories: [public]
        location: Norrtalje
        timeframe: 2021-2024
        image:
          src: /assets/about-team.svg
          alt: Completed school modernization with updated learning spaces.
        gallery:
          - src: /assets/about-team.svg
            alt: Project-lead coordination in school delivery.
          - src: /assets/project-facade.svg
            alt: Completed school facade and main entry area.
          - src: /assets/services-renovation.svg
            alt: Interior learning environments after phased upgrade.
        openLabel: Open gallery
      - title: Ekhagen Care Facility
        description: Technical modernization of healthcare property with strict hygiene-zone and system controls.
        categories: [public]
        location: Orebro
        timeframe: 2023-2025
        image:
          src: /assets/services-energy.svg
          alt: Upgraded care facility with improved technical systems.
        gallery:
          - src: /assets/services-energy.svg
            alt: Energy and system upgrades in care facility.
          - src: /assets/project-site.svg
            alt: Installation and commissioning works in technical areas.
          - src: /assets/services-core.svg
            alt: Engineering package for hygiene and system zoning.
        openLabel: Open gallery
      - title: City Cultural Center
        description: Public venue renovation with heritage requirements and extensive quality documentation.
        categories: [public]
        location: Gothenburg
        timeframe: 2022-2025
        image:
          src: /assets/project-facade.svg
          alt: Completed public cultural building renovation.
        gallery:
          - src: /assets/project-facade.svg
            alt: Restored facade of cultural center.
          - src: /assets/services-renovation.svg
            alt: Interior restoration in public venue areas.
          - src: /assets/about-team.svg
            alt: Client quality review after completion stage.
        openLabel: Open gallery
    modalAriaLabel: Project gallery modal
    modalCloseLabel: Close
    locationLabel: Location
    timeframeLabel: Project period
    galleryHeading: Gallery
  - type: cta
    id: cta-projects
    heading: Want to replace these examples with your real references?
    intro: Populate the same grid and modal gallery with your finished projects, measured outcomes, and delivery details.
    primaryCta:
      label: Start content rollout
      href: /sq/contact/
    secondaryCta:
      label: Back to services
      href: /sq/services/
---






