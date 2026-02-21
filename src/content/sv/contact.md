---
locale: sv
slug: contact
route: /sv/contact/
meta:
  title: Kontakt | Nordkust Byggpartner
  description: Kontaktmall för byggföretag med tydliga kontaktvägar, geografi och nästa steg.
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
      href: /sv/contact/
    - code: en
      label: English
      href: /en/contact/
    - code: sq
      label: Shqip
      href: /sq/contact/
  theme:
    storageKey: bygg-mall-theme
    defaultTheme: trust-friendly
    menuLabel: Installningar
    themeLabel: Tema
    options:
      - id: trust-friendly
        label: Trustworthy + Friendly
      - id: warm-home
        label: Warm Home
      - id: clean-modern
        label: Clean Modern
      - id: eco-sustainable
        label: Eco Sustainable
      - id: scandi-lite
        label: Scandinavian-lite
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
    - heading: Nästa steg
      links:
        - label: Förstudie
          href: /sv/contact/#kontakt
        - label: Platsbesök
          href: /sv/contact/#geografi
        - label: Offert
          href: /sv/contact/#cta-contact
    - heading: Direktkontakt
      links:
        - label: 08-555 100 20
          href: tel:+46855510020
        - label: anbud@nordkustbygg.se
          href: mailto:anbud@nordkustbygg.se
        - label: Sveavägen 118, Stockholm
          href: /sv/contact/#kontakt
  footerNote: Nordkust Byggpartner AB | Mallinnehåll för byggföretag i Sverige.
hero:
  eyebrow: Kontakt och offert
  title: Gör det enkelt för beställaren att ta nästa steg.
  intro: Kontaktflödet i mallen hjälper er samla rätt underlag tidigt, så dialogen kan bli konkret direkt.
  showActions: false
  primaryCta:
    label: Ring oss
    href: tel:+46855510020
  secondaryCta:
    label: Skicka e-post
    href: mailto:anbud@nordkustbygg.se
  image:
    src: /assets/contact-consultation.svg
    alt: Konsultation mellan kund och byggledare vid ritningsbord.
sections:
  - type: text-block
    id: kontakt
    heading: Kontaktuppgifter och förväntad återkoppling
    intro: Visa vem som ansvarar för offert och vilka svarstider kunder kan förvänta sig.
    body:
      - Den här sektionen passar för kontaktpersoner, telefonnummer, e-post och kontorstider.
      - Med tydliga förväntningar på återkoppling skapas en professionell start på affären.
    metrics:
      - label: Växel
        value: 08-555 100 20
      - label: Offertmejl
        value: anbud@nordkustbygg.se
      - label: Adress
        value: Sveavägen 118, Stockholm
  - type: contact-form
    id: kontakt-formular
    heading: Skicka in er projektförfrågan
    intro: Fyll i grunduppgifterna så återkommer vi med nästa steg som passar ert projekt.
    recipientEmail: anbud@nordkustbygg.se
    subject: Projektforfragan fran webbplats
    submitLabel: Skicka förfrågan
    fields:
      - name: namn
        label: Namn
        type: text
        placeholder: Anna Andersson
        required: true
      - name: foretag
        label: Företag
        type: text
        placeholder: Företagsnamn
      - name: epost
        label: E-post
        type: email
        placeholder: namn@foretag.se
        required: true
      - name: telefon
        label: Telefon
        type: tel
        placeholder: 070-123 45 67
      - name: meddelande
        label: Projektbeskrivning
        type: textarea
        placeholder: Beskriv omfattning, plats och önskad tidplan.
        required: true
  - type: image-block
    id: geografi
    heading: Geografiskt arbetsområde som går att anpassa per företag
    intro: Beskriv var ni utför entreprenader och hur ni hanterar uppdrag utanför kärnområdet.
    body:
      - Mallen kan användas för en lokal aktör, en regional organisation eller en rikstäckande entreprenör.
      - Lägg till karta, ortlista eller projektzoner utifrån er verkliga verksamhet.
    bullets:
      - Storstockholm och Mälardalen som primärt område
      - Möjlighet till uppdrag i övriga södra Sverige
      - Fast process för platsbesök och uppstartsmöte
    image:
      src: /assets/project-site.svg
      alt: Byggteam vid platsgenomgång utomhus.
    imageSide: right
  - type: cta
    id: cta-contact
    heading: Klar att skapa er första version av sajten?
    intro: Ersätt mallinnehållet med era verkliga uppgifter och publicera en tydlig byggsajt på kort tid.
    primaryCta:
      label: Starta offertdialog
      href: mailto:anbud@nordkustbygg.se
    secondaryCta:
      label: Se tjänstesidan
      href: /sv/services/
---








