---
locale: sv
slug: projects
route: /sv/projects/
meta:
  title: Avslutade projekt | Nordkust Byggpartner
  description: Sida för avslutade projekt i ett gemensamt kortgalleri med filtrering per projekttyp.
site:
  htmlLang: sv-SE
  brandName: Nordkust Byggpartner
  brandTagline: Entreprenad med ordning, ansvar och långsiktighet.
  navigationAriaLabel: Huvudnavigation
  navigation:
    - label: Hem
      href: /sv/
    - label: Om oss
      href: /sv/about/
    - label: Tjänster
      href: /sv/services/
    - label: Projekt
      href: /sv/projects/
    - label: Kontakt
      href: /sv/contact/
  headerCta:
    label: Boka platsbesök
    href: /sv/contact/
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
    menuLabel: Installningar
    themeLabel: Tema
    lightGroupLabel: Ljusa teman
    darkGroupLabel: Morka teman
    options:
      - id: light-red
        label: Rod
        tone: light
      - id: light-blue
        label: Bla
        tone: light
      - id: light-green
        label: Gron
        tone: light
      - id: light-yellow
        label: Gul
        tone: light
      - id: dark-red
        label: Rod
        tone: dark
      - id: dark-blue
        label: Bla
        tone: dark
      - id: dark-green
        label: Gron
        tone: dark
      - id: dark-yellow
        label: Gul
        tone: dark
  footerColumns:
    - heading: Sidor
      links:
        - label: Hem
          href: /sv/
        - label: Om oss
          href: /sv/about/
        - label: Tjänster
          href: /sv/services/
        - label: Projekt
          href: /sv/projects/
        - label: Kontakt
          href: /sv/contact/
    - heading: Tjänstegrupper
      links:
        - label: Nyproduktion
          href: /sv/services/nyproduktion/
        - label: Renovering
          href: /sv/services/renovering/
        - label: Energieffektivisering
          href: /sv/services/energi/
    - heading: Kontakt
      links:
        - label: 08-555 100 20
          href: tel:+46855510020
        - label: anbud@nordkustbygg.se
          href: mailto:anbud@nordkustbygg.se
        - label: Sveavägen 118, Stockholm
          href: /sv/contact/#kontakt
  footerNote: Nordkust Byggpartner AB | Mallinnehåll för byggföretag i Sverige.
hero:
  eyebrow: Referenser | Avslutade projekt
  title: Ett sammanhållet projektgalleri med filtrering per kategori.
  intro: Alla avslutade projekt visas i ett gemensamt rutnät. Besökaren växlar kategori via flikar och öppnar varje projekt i en modal med bildgalleri.
  primaryCta:
    label: Kontakta oss om liknande projekt
    href: /sv/contact/
  secondaryCta:
    label: Se tjänstegrupper
    href: /sv/services/
  image:
    src: /assets/project-site.svg
    alt: Översikt av avslutade byggprojekt i en samlad portfölj.
sections:
  - type: review-list
    id: omdomen
    heading: Kundomdömen från genomförda uppdrag
    intro: Verkliga omdömen från nyligen avslutade projekt.
    items:
      - quote: "Tydlig kommunikation från start till slut gjorde att vår styrelse kunde fatta beslut snabbt och tryggt."
        author: Anna Berg
        role: Ordförande, Brf Parklinjen
        rating: 5,0/5
      - quote: "Teamet höll verksamheten igång under ombyggnaden och levererade enligt överenskommen tidplan."
        author: Johan Nyström
        role: Fastighetschef, Kontorshuset Kvarnen
        rating: 4,8/5
      - quote: "Kvalitetsdokumentationen var tydlig och komplett, vilket förenklade hela uppföljningen."
        author: Karin Lund
        role: Inköpsansvarig, Västby Skolcentrum
        rating: 4,9/5
  - type: project-gallery
    id: projektgalleri
    heading: Avslutade projekt
    intro: Filtrera projekt med flikarna och klicka på valfritt kort för att öppna galleriet.
    tabsAriaLabel: Filtrera projektkategorier
    allTabLabel: Alla projekt
    categories:
      - id: bostad
        label: Bostad
      - id: kommersiellt
        label: Kommersiellt
      - id: offentligt
        label: Offentligt
    cards:
      - title: Kvarter Strandängen
        description: Nyproduktion av 84 bostäder med garage, gårdsmiljö och samordnad slutleverans.
        categories: [bostad]
        location: Uppsala
        timeframe: 2023-2025
        image:
          src: /assets/project-villa.svg
          alt: Färdigställt bostadskvarter med innergård.
        gallery:
          - src: /assets/project-villa.svg
            alt: Fasadvy av färdigställt bostadskvarter.
          - src: /assets/hero-construction.svg
            alt: Produktionsskede med stomresning i bostadsprojekt.
          - src: /assets/project-site.svg
            alt: Slutskede med markarbeten och logistik på plats.
        openLabel: Öppna galleri
      - title: Brf Parklinjen
        description: Stambyte och totalrenovering i etapper med kvarboende under hela genomförandet.
        categories: [bostad]
        location: Stockholm
        timeframe: 2022-2024
        image:
          src: /assets/services-renovation.svg
          alt: Renoverad bostadsfastighet efter etappvis ombyggnad.
        gallery:
          - src: /assets/services-renovation.svg
            alt: Invändig renovering i bostadsfastighet.
          - src: /assets/project-facade.svg
            alt: Fasad under pågående upprustning.
          - src: /assets/about-team.svg
            alt: Samordningsmöte för boendekommunikation och etappplan.
        openLabel: Öppna galleri
      - title: Solbacka Radhus
        description: Kompletteringsentreprenad med fasadförbättring, utemiljö och verifierad slutkvalitet.
        categories: [bostad]
        location: Västerås
        timeframe: 2024-2025
        image:
          src: /assets/project-facade.svg
          alt: Färdigställd radhuslänga efter entreprenad.
        gallery:
          - src: /assets/project-facade.svg
            alt: Färdig fasad och entrémiljö i radhusprojekt.
          - src: /assets/project-villa.svg
            alt: Utemiljö med gångstråk och planteringar.
          - src: /assets/services-core.svg
            alt: Tekniska handlingar för kompletteringsentreprenad.
        openLabel: Öppna galleri
      - title: Logistikcenter Norrhamn
        description: Nybyggnation av logistikanläggning med anpassad lastzon och energieffektiva system.
        categories: [kommersiellt]
        location: Södertälje
        timeframe: 2023-2025
        image:
          src: /assets/hero-construction.svg
          alt: Färdig logistikfastighet med lastytor.
        gallery:
          - src: /assets/hero-construction.svg
            alt: Översikt av färdig logistikanläggning.
          - src: /assets/project-site.svg
            alt: Produktion på plats med pågående montage.
          - src: /assets/services-energy.svg
            alt: Energieffektiva system installerade i logistikanläggning.
        openLabel: Öppna galleri
      - title: Kontorshuset Kvarnen
        description: Ombyggnad i aktiv kontorsmiljö med etappvis produktion och verksamhetsanpassning.
        categories: [kommersiellt]
        location: Solna
        timeframe: 2022-2024
        image:
          src: /assets/project-site.svg
          alt: Färdigställt kontorsprojekt efter ombyggnation.
        gallery:
          - src: /assets/project-site.svg
            alt: Kontorsprojekt under ombyggnation i etapper.
          - src: /assets/services-renovation.svg
            alt: Interiört renoveringsarbete i kontorsmiljö.
          - src: /assets/about-team.svg
            alt: Produktionsmöte med fokus på drift under byggtid.
        openLabel: Öppna galleri
      - title: Handelsplats Lunden
        description: Anpassning av butiksyta, installationer och entrémiljö med kort genomförandetid.
        categories: [kommersiellt]
        location: Linköping
        timeframe: "2024"
        image:
          src: /assets/services-core.svg
          alt: Färdig handelslokal efter entreprenad.
        gallery:
          - src: /assets/services-core.svg
            alt: Planeringsunderlag för handelsanpassning.
          - src: /assets/project-facade.svg
            alt: Entréfasad i färdig handelsplats.
          - src: /assets/project-site.svg
            alt: Slutfas med installationssamordning i butiksyta.
        openLabel: Öppna galleri
      - title: Västby Skolcentrum
        description: Om- och tillbyggnad av skolmiljö med bibehållen drift och elevsäkerhetsplan.
        categories: [offentligt]
        location: Norrtälje
        timeframe: 2021-2024
        image:
          src: /assets/about-team.svg
          alt: Skolprojekt färdigställt med moderniserade lärmiljöer.
        gallery:
          - src: /assets/about-team.svg
            alt: Projektledning och samordning i skolentreprenad.
          - src: /assets/project-facade.svg
            alt: Färdig skolfasad och entréområde.
          - src: /assets/services-renovation.svg
            alt: Invändiga ytor efter etappvis ombyggnation.
        openLabel: Öppna galleri
      - title: Ekhagens Vårdbyggnad
        description: Teknisk uppgradering av vårdbyggnad med fokus på installationssäkerhet och hygienzoner.
        categories: [offentligt]
        location: Örebro
        timeframe: 2023-2025
        image:
          src: /assets/services-energy.svg
          alt: Vårdfastighet med förbättrade tekniska system.
        gallery:
          - src: /assets/services-energy.svg
            alt: Tekniska energiåtgärder i vårdbyggnad.
          - src: /assets/project-site.svg
            alt: Montage och driftsamordning i tekniska utrymmen.
          - src: /assets/services-core.svg
            alt: Projekteringsunderlag för hygien- och installationszoner.
        openLabel: Öppna galleri
      - title: Stadens Kulturhus
        description: Renovering av publik byggnad med kulturhistoriska krav och detaljerad kvalitetsdokumentation.
        categories: [offentligt]
        location: Göteborg
        timeframe: 2022-2025
        image:
          src: /assets/project-facade.svg
          alt: Färdigrenoverad publik byggnad.
        gallery:
          - src: /assets/project-facade.svg
            alt: Kulturhusets restaurerade fasad.
          - src: /assets/services-renovation.svg
            alt: Invändig restaurering i publik miljö.
          - src: /assets/about-team.svg
            alt: Kvalitetsgenomgång med beställare och projektledning.
        openLabel: Öppna galleri
    modalAriaLabel: Projektgalleri
    modalCloseLabel: Stäng
    locationLabel: Plats
    timeframeLabel: Projektperiod
    galleryHeading: Bildgalleri
  - type: cta
    id: cta-projects
    heading: Vill ni fylla sidan med era verkliga referenser?
    intro: Ersätt exempelinnehållet med färdigställda projekt, mätbara resultat och tydliga leveransbeskrivningar i samma galleriupplägg.
    primaryCta:
      label: Starta innehållsarbetet
      href: /sv/contact/
    secondaryCta:
      label: Till tjänsteöversikt
      href: /sv/services/
---





