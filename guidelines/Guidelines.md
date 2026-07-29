# HERBIQUE — Design Guidelines

## Brand Stance
Warm botanical luxury. Aesop meets Ayurveda — creamy parchment grounds, deep forest greens, dusty golds. Serif display type for authority; clean sans for readability. Every surface feels hand-touched, not mass-produced.

## Color Tokens
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7F2E9` | Page ground — warm parchment |
| Foreground | `#2C1E12` | Body text — deep espresso brown |
| Primary | `#3A5C3E` | Forest green — CTAs, accents |
| Secondary | `#8FAF7E` | Sage green — supporting accents |
| Accent | `#C8A97E` | Warm gold — highlights, CTA banner |
| Muted | `#E8E0D0` | Dividers, inactive states |
| Card | `#FBF8F2` | Card surfaces |

## Typography
- **Display:** Playfair Display — headings, product names, numbers
- **Body:** Work Sans — paragraphs, labels, UI copy
- Scale: `clamp()` fluid sizing between 320px–1200px viewports

## Product Colors
- Glutathione: `#B8860B` gold tones, warm yellows
- Red Velvet: `#9B3A3A` burgundy/rose tones
- Neem: `#3A5C3E` deep botanical green

## Design Principles
1. Mobile-first — designed for 375px, scales to desktop
2. Whitespace is generous — let botanicals breathe
3. No harsh shadows — soft `shadow-sm` / `shadow-md` only
4. Rounded corners — `rounded-xl` (12px) or `rounded-2xl` (16px)
5. Interactive states via `-translate-y-0.5` hover lifts
