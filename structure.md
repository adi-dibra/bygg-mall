# Site Structure Reference

Purpose: quick internal map of every rendered route and its component stack.

Legend:
- `Layout` = `src/components/Layout.astro`
- `Header` = `src/components/Header.astro`
- `Hero` = `src/components/Hero.astro`
- `SectionRenderer` resolves section components by `type`
- `Footer` = `src/components/Footer.astro`

## Root

### `/`

```text
+------------------------------------------------------+
| src/pages/index.astro                                |
|  meta refresh + JS redirect                           |
|  -> /sv/ (defaultLanguage)                            |
+------------------------------------------------------+
```

## Swedish Routes

### `/sv/` (home)

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    FeatureGrid   id=fokus                              |
|    ImageBlock    id=projekt                            |
|    TextBlock     id=process                            |
|    CtaBlock      id=cta-home                           |
|  Footer                                                |
+------------------------------------------------------+
```

### `/sv/about/`

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    ImageBlock    id=samordning                         |
|    TextBlock     id=kvalitet                           |
|    FeatureGrid   id=team                               |
|    CtaBlock      id=cta-about                          |
|  Footer                                                |
+------------------------------------------------------+
```

### `/sv/contact/`

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    TextBlock     id=kontakt                            |
|    ImageBlock    id=geografi                           |
|    CtaBlock      id=cta-contact                        |
|  Footer                                                |
+------------------------------------------------------+
```

### `/sv/services/` (overview)

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    FeatureGrid   id=grupper                            |
|    ImageBlock    id=struktur                           |
|    CtaBlock      id=cta-services                       |
|  Footer                                                |
+------------------------------------------------------+
```

### `/sv/services/nyproduktion/`

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    TextBlock     id=omfattning                         |
|    ImageBlock    id=projektering                       |
|    FeatureGrid   id=leveranspaket                      |
|    ImageBlock    id=risk                               |
|    TextBlock     id=uppfoljning                        |
|    CtaBlock      id=cta-nyproduktion                   |
|  Footer                                                |
+------------------------------------------------------+
```

### `/sv/services/renovering/`

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    TextBlock     id=uppdrag                            |
|    ImageBlock    id=etapper                            |
|    FeatureGrid   id=leverans                           |
|    ImageBlock    id=samordning                         |
|    TextBlock     id=kvalitet                           |
|    CtaBlock      id=cta-renovering                     |
|  Footer                                                |
+------------------------------------------------------+
```

### `/sv/services/energi/`

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    TextBlock     id=inriktning                         |
|    ImageBlock    id=analys                             |
|    FeatureGrid   id=atgardspaket                       |
|    ImageBlock    id=genomforande                       |
|    TextBlock     id=resultat                            |
|    CtaBlock      id=cta-energi                         |
|  Footer                                                |
+------------------------------------------------------+
```

### `/sv/projects/`

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    TextBlock       id=omdomen                          |
|    ProjectGallery  id=projektgalleri                   |
|      Tabs (category filter)                            |
|      Card Grid (all projects)                          |
|      Gallery Modal (open on card click)                |
|    CtaBlock        id=cta-projects                     |
|  Footer                                                |
+------------------------------------------------------+
```

## English Routes

### `/en/` (home)

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    FeatureGrid   id=focus                              |
|    ImageBlock    id=projects                           |
|    TextBlock     id=process                            |
|    CtaBlock      id=cta-home                           |
|  Footer                                                |
+------------------------------------------------------+
```

### `/en/about/`

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    ImageBlock    id=coordination                       |
|    TextBlock     id=quality                            |
|    FeatureGrid   id=team                               |
|    CtaBlock      id=cta-about                          |
|  Footer                                                |
+------------------------------------------------------+
```

### `/en/contact/`

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    TextBlock     id=contact                            |
|    ImageBlock    id=coverage                           |
|    CtaBlock      id=cta-contact                        |
|  Footer                                                |
+------------------------------------------------------+
```

### `/en/services/` (overview)

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    FeatureGrid   id=groups                             |
|    ImageBlock    id=structure                          |
|    CtaBlock      id=cta-services                       |
|  Footer                                                |
+------------------------------------------------------+
```

### `/en/services/new-build/`

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    TextBlock     id=scope                              |
|    ImageBlock    id=planning                           |
|    FeatureGrid   id=packages                           |
|    ImageBlock    id=risk                               |
|    TextBlock     id=follow-up                          |
|    CtaBlock      id=cta-new-build                      |
|  Footer                                                |
+------------------------------------------------------+
```

### `/en/services/renovation/`

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    TextBlock     id=assignment                         |
|    ImageBlock    id=phases                             |
|    FeatureGrid   id=delivery                           |
|    ImageBlock    id=coordination                       |
|    TextBlock     id=controls                           |
|    CtaBlock      id=cta-renovation                     |
|  Footer                                                |
+------------------------------------------------------+
```

### `/en/services/energy/`

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    TextBlock     id=direction                          |
|    ImageBlock    id=baseline                           |
|    FeatureGrid   id=measures                           |
|    ImageBlock    id=execution                          |
|    TextBlock     id=verification                       |
|    CtaBlock      id=cta-energy                         |
|  Footer                                                |
+------------------------------------------------------+
```

### `/en/projects/`

```text
+------------------------------------------------------+
| Layout                                                |
|  Header                                                |
|  Main                                                  |
|   Hero                                                 |
|   SectionRenderer                                      |
|    TextBlock       id=reviews                          |
|    ProjectGallery  id=project-gallery                  |
|      Tabs (category filter)                            |
|      Card Grid (all projects)                          |
|      Gallery Modal (open on card click)                |
|    CtaBlock        id=cta-projects                     |
|  Footer                                                |
+------------------------------------------------------+
```
