# Theme & Formatting Guide

This file documents the current visual language so the style can be preserved without the original reference-site code.

## Core Theme

- Font family: `NIXGONM-Vb` (loaded via `@font-face` from jsDelivr)
- Background: `#fff`
- Primary text: `#000`
- Secondary heading/link text: `#413e3e`
- Accent underline for links: `#ff6800`
- Selection highlight: background `#fff2cf`, text `#000`

## Layout System

- Global content container:
  - `main` max width `900px`
  - horizontal padding `50px` desktop, `20px` mobile
- Header:
  - centered text
  - `50px` padding desktop, `30px 20px` mobile
  - title + subtitle + inline nav links

## Typography Rules

- `h1`, `h2`: weight `500`, margin bottom `10px`
- `h3`: heavier emphasis (`1000`)
- body text (`p`):
  - desktop: `18px`, line-height `2`, justified
  - mobile: `16px`, line-height `1.6`, left aligned
- section title class `.heading`:
  - bold with top spacing (`margin-top: 4ch`)

## Link Styling

- Links are visually plain text with custom underline effect
- `a::after` draws a thin orange line below text (`bottom: -5px`, `height: 1px`)

## Reusable Structural Patterns

- `SectionHeader` component:
  - renders `.heading` + `<hr />`
- `PostCard` component:
  - two-column card (`.post`) with text and optional image
  - title class `.post-title`
  - description class `.post-description`
  - metadata class `.date`

## Image Patterns

- Home profile image (`.profile-image`):
  - desktop: `220x280`, `object-fit: cover`, `object-position: 50% 30%`
  - mobile: max width `320px`, height `360px`, `object-position: 50% 25%`
- Post thumbnail image (`.post-image`):
  - desktop fixed height `180px`, cover crop
  - mobile responsive width, auto height
- Blog hero image (`.blog-hero-image`):
  - full width, max height `420px`, cover crop
- About city rows:
  - `.about-city-row` desktop is side-by-side with image on right (`row-reverse`)
  - image wrapper fixed width `280px`
  - image height `220px`, cover crop
  - mobile stacks vertically

## Current Components Anchoring This Theme

- `/Users/abhishek.shinde/Documents/Projects/person_website/src/styles/global.css`
- `/Users/abhishek.shinde/Documents/Projects/person_website/src/components/Common/SectionHeader.tsx`
- `/Users/abhishek.shinde/Documents/Projects/person_website/src/components/Common/PostCard.tsx`
- `/Users/abhishek.shinde/Documents/Projects/person_website/src/components/Header/Header.tsx`
- `/Users/abhishek.shinde/Documents/Projects/person_website/src/components/Home/Home.tsx`
- `/Users/abhishek.shinde/Documents/Projects/person_website/src/components/About/About.tsx`
- `/Users/abhishek.shinde/Documents/Projects/person_website/src/components/Blog/Blog.tsx`

## Asset Convention

- Keep user/site assets under:
  - `/Users/abhishek.shinde/Documents/Projects/person_website/public/reference-assets`
- Use root-relative runtime paths in React (example: `/reference-assets/ProfilePic.jpg`)

