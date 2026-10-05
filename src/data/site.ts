import type { ImageMetadata } from 'astro';

export interface SiteInfo {
  /** The "Hi, I'm Grant." paragraph. Null until Grant writes it: the section leaves it out. */
  bio: string | null;
  /** Grant's photo (import it from src/assets). Null until he supplies one: the section leaves it out. */
  photo: ImageMetadata | null;
  links: { label: string; href: string }[];
}

export const site: SiteInfo = {
  bio: null,
  photo: null,
  links: [{ label: 'GitHub', href: 'https://github.com/walkingkangaroo' }],
};
