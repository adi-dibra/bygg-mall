import type { LanguageCode, PageContent } from "../types/content";

type MarkdownModule = {
  frontmatter: PageContent;
};

const markdownModules = import.meta.glob<MarkdownModule>("../content/*/*.md", {
  eager: true
});

const pages = Object.values(markdownModules)
  .map((module) => module.frontmatter)
  .sort((left, right) => left.route.localeCompare(right.route));

export const supportedLanguages: LanguageCode[] = ["sv", "en", "sq"];
export const defaultLanguage: LanguageCode = "sv";

export function isSupportedLanguage(language: string): language is LanguageCode {
  return supportedLanguages.includes(language as LanguageCode);
}

export function getAllPages(): PageContent[] {
  return pages;
}

export function getPageBySlug(language: LanguageCode, slug: string): PageContent | undefined {
  const normalizedSlug = slug.length > 0 ? slug : "home";

  return pages.find((page) => page.locale === language && page.slug === normalizedSlug);
}
