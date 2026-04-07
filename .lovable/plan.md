

## Plan: Rebuild Public Page — Start Fresh

### What changes

1. **Remove the SectionHero** — delete the hero block that shows "A Voice for the Profession", "PUB", "Public Impact & Recognition", and the decorative title.

2. **Remove StatsRow** — remove the stats bar at the top.

3. **Start the page with a centered BlackBanner** — the first thing on the page will be a full-width black banner with **"A Trajectory of Grit and Excellence"** centered (text-center), no tag/subtitle.

4. **Keep everything else below** — the ContentBlock with the biography text, credential images, and all subsequent sections remain as-is.

### Technical detail

**File: `src/components/sections/PublicSection.tsx`**
- Remove `SectionHero` import and usage
- Remove `StatsRow` import, `stats` array, and usage
- Update `BlackBanner` component to center text (`text-center`)
- The page starts directly with `<BlackBanner title="A Trajectory of Grit and Excellence" />` followed by the existing biography ContentBlock

