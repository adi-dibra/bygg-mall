import { defineCollection, z } from "astro:content";

const linkSchema = z.object({
  label: z.string(),
  href: z.string()
});

const imageSchema = z.object({
  src: z.string(),
  alt: z.string()
});

const sectionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("feature-grid"),
    id: z.string(),
    heading: z.string(),
    intro: z.string(),
    items: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        image: imageSchema,
        link: linkSchema
      })
    ),
    sectionCta: z
      .object({
        heading: z.string(),
        description: z.string(),
        link: linkSchema
      })
      .optional()
  }),
  z.object({
    type: z.literal("image-block"),
    id: z.string(),
    heading: z.string(),
    intro: z.string(),
    body: z.array(z.string()),
    bullets: z.array(z.string()),
    image: imageSchema,
    imageSide: z.enum(["left", "right"])
  }),
  z.object({
    type: z.literal("text-block"),
    id: z.string(),
    heading: z.string(),
    intro: z.string(),
    body: z.array(z.string()),
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.union([z.string(), z.number()]).transform((value) => String(value))
      })
    )
  }),
  z.object({
    type: z.literal("cta"),
    id: z.string(),
    heading: z.string(),
    intro: z.string(),
    primaryCta: linkSchema,
    secondaryCta: linkSchema
  }),
  z.object({
    type: z.literal("project-gallery"),
    id: z.string(),
    heading: z.string(),
    intro: z.string(),
    tabsAriaLabel: z.string(),
    allTabLabel: z.string(),
    categories: z.array(
      z.object({
        id: z.string(),
        label: z.string()
      })
    ),
    cards: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        categories: z.array(z.string()),
        location: z.string(),
        timeframe: z.string(),
        image: imageSchema,
        gallery: z.array(imageSchema),
        openLabel: z.string()
      })
    ),
    modalAriaLabel: z.string(),
    modalCloseLabel: z.string(),
    locationLabel: z.string(),
    timeframeLabel: z.string(),
    galleryHeading: z.string()
  }),
  z.object({
    type: z.literal("review-list"),
    id: z.string(),
    heading: z.string(),
    intro: z.string(),
    items: z.array(
      z.object({
        quote: z.string(),
        author: z.string(),
        role: z.string(),
        rating: z.string()
      })
    )
  }),
  z.object({
    type: z.literal("contact-form"),
    id: z.string(),
    heading: z.string(),
    intro: z.string(),
    recipientEmail: z.string(),
    subject: z.string(),
    submitLabel: z.string(),
    fields: z.array(
      z.object({
        name: z.string(),
        label: z.string(),
        type: z.enum(["text", "email", "tel", "textarea"]),
        placeholder: z.string().optional(),
        required: z.boolean().optional()
      })
    )
  })
]);

const pageSchema = z.object({
  locale: z.enum(["sv", "en", "sq"]),
  slug: z.string().optional(),
  route: z.string(),
  meta: z.object({
    title: z.string(),
    description: z.string()
  }),
  site: z.object({
    htmlLang: z.string(),
    brandName: z.string(),
    brandTagline: z.string(),
    navigationAriaLabel: z.string(),
    navigation: z.array(linkSchema),
    headerCta: linkSchema,
    languageSwitcherLabel: z.string(),
    languageOptions: z.array(
      z.object({
        code: z.enum(["sv", "en", "sq"]),
        label: z.string(),
        href: z.string()
      })
    ),
    theme: z.object({
      storageKey: z.string(),
      defaultTheme: z.string(),
      menuLabel: z.string(),
      themeLabel: z.string(),
      lightGroupLabel: z.string(),
      darkGroupLabel: z.string(),
      options: z.array(
        z.object({
          id: z.string(),
          label: z.string(),
          tone: z.enum(["light", "dark"])
        })
      )
    }),
    footerColumns: z.array(
      z.object({
        heading: z.string(),
        links: z.array(linkSchema)
      })
    ),
    footerNote: z.string()
  }),
  hero: z.object({
    eyebrow: z.string(),
    title: z.string(),
    intro: z.string(),
    primaryCta: linkSchema,
    secondaryCta: linkSchema,
    image: imageSchema,
    showActions: z.boolean().optional()
  }),
  sections: z.array(sectionSchema)
});

const en = defineCollection({
  type: "content",
  schema: pageSchema
});

const sv = defineCollection({
  type: "content",
  schema: pageSchema
});

const sq = defineCollection({
  type: "content",
  schema: pageSchema
});

export const collections = {
  en,
  sv,
  sq
};
