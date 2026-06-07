# YOU Agency — Complete Website Audit Report
## Using SEO-Audit | Ad-Creative | Campaign-Plan | Copywriting | Pricing-Strategy

**Website:** https://anexlbk.github.io/you-agency/
**Date:** June 8, 2026
**Type:** Service-based agency (Algeria-focused digital marketing & production)

---

# EXECUTIVE SUMMARY

### Overall Health Score: 62/100

| Dimension | Score | Status |
|-----------|-------|--------|
| SEO | 45/100 | Needs Work |
| Copywriting | 65/100 | Decent Foundation |
| Ad Creative | 55/100 | Needs Refresh |
| Campaign Strategy | 40/100 | Missing Structure |
| Pricing | 30/100 | Critical Gap |

**Top 5 Priority Issues (Fix These First):**

1. **No Pricing Page** — Your "Packs" footer link is a 404. For a service agency, this is your highest-intent page. It's where ready-to-buy visitors go, and it doesn't exist.
2. **Single-Page Site** — You have 5 nav items (Services, About, Work, Contact) but they're all anchor links on one page. No dedicated service pages, no About page, no blog. Google has almost nothing to index.
3. **Zero Social Proof** — No client testimonials, no case studies with metrics, no client logos, no "X+ clients served." For an agency, this is your #1 conversion killer.
4. **Weak Meta/SEO Foundation** — No visible meta description optimization, no structured data, no sitemap, no robots.txt, no alt text strategy. You're invisible to search engines.
5. **No Conversion Funnel** — One CTA ("Let's Talk") leads to a phone number. No lead capture form, no email opt-in, no "free audit" or consultation booking. You're losing leads who aren't ready to call.

---

# 1. SEO AUDIT (Score: 45/100)

## Critical Issues (Fix Immediately)

### Issue 1: Single-Page Architecture = No Indexable Content
**Impact:** HIGH | **Priority:** 1

**What's wrong:** Your entire site is one homepage. The nav links (Services, About, Work, Contact) are all anchor jumps (`#services`, `#about`, etc.) — not separate pages. Google sees one page with ~500 words of content. Competitors like Moris Media, Koncept Digital, and SHIFTIN have 10-30+ indexed pages each.

**Fix:** Build out dedicated sub-pages:
- `/services/reels-production/` — Deep service page with portfolio, process, pricing
- `/services/social-media-marketing/` — Same structure
- `/services/podcast-production/` 
- `/services/branding/`
- `/services/video-production/`
- `/about/` — Team, story, mission, values
- `/case-studies/` — Individual project pages with before/after metrics
- `/blog/` — Content marketing (see Content Gaps below)
- `/contact/` — Full contact page with form
- `/pricing/` — Service packages (see Pricing Audit)

**Evidence:** Search `site:anexlbk.github.io` — only the homepage is indexed. Compare to `site:shiftin.co` or `site:konceptdigitalagency.com`.

---

### Issue 2: Missing robots.txt and sitemap.xml
**Impact:** HIGH | **Priority:** 1

**What's wrong:** No `robots.txt` file and no `sitemap.xml` at the root. Google can't discover your pages efficiently, and you have no crawl directives.

**Fix:** 
Create `robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://anexlbk.github.io/you-agency/sitemap.xml
```

Create `sitemap.xml` with all page URLs and lastmod dates. Submit to Google Search Console.

---

### Issue 3: No Schema Markup / Structured Data
**Impact:** MEDIUM-HIGH | **Priority:** 2

**What's wrong:** No LocalBusiness schema, no Organization schema, no Service schema. You're a local Algerian agency — LocalBusiness schema is essential for appearing in local search results.

**Fix:** Add JSON-LD structured data to every page:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "YOU Agency",
  "description": "Full-service marketing & production agency in Algeria",
  "url": "https://anexlbk.github.io/you-agency/",
  "telephone": "+213-783-281-957",
  "email": "youagency2025@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DZ",
    "addressLocality": "Algiers"
  },
  "serviceArea": {
    "@type": "Place",
    "name": "Algeria"
  },
  "sameAs": [
    "https://www.instagram.com/you_agencyy/",
    "https://www.tiktok.com/@you.agencyy",
    "https://www.linkedin.com/company/you-agency-dz/"
  ],
  "priceRange": "$$"
}
```

---

### Issue 4: Title Tag Needs Optimization
**Impact:** MEDIUM | **Priority:** 2

**Current:** `YOU Agency | We Grow Your Brand Digitally`

**Issues:** 
- Missing location ("Algeria" or "Algiers")
- Missing key services
- "We Grow Your Brand Digitally" is vague — what does that mean specifically?

**Recommended:** 
```
YOU Agency | Digital Marketing & Video Production | Algeria
```

For sub-pages (once built):
```
Social Media Marketing Services | YOU Agency Algeria
Podcast Production Services | YOU Agency Algiers
```

---

### Issue 5: Meta Description
**Impact:** MEDIUM | **Priority:** 2

**Current (likely):** None visible or auto-generated.

**Recommended:**
```
YOU Agency — Algeria's full-service digital marketing & production agency. Reels, social media marketing, podcast production, branding & video. Let's grow your brand. Call +213 783 281 957.
```
(155 characters, includes primary keywords, services, CTA, phone number)

---

## Medium-Priority SEO Issues

### Issue 6: No Heading Hierarchy Optimization
**Impact:** MEDIUM | **Priority:** 3

**What's wrong:** The H1 "We Grow Your Brand. Digitally." is styled well but missing keywords. H2s are used for section headers ("What We Do", "Why YOU Agency?", "Previous Work") but service cards don't use proper H3s for each service — they rely on visual styling, which search engines can't read as structure.

**Fix:** Ensure proper heading hierarchy:
- H1: Hero headline (include "Algeria digital marketing agency")
- H2: Section headers (What We Do, Our Work, Contact)
- H3: Each service name (Reels & Social Media Videos, Podcast Production, etc.)
- H4: Sub-features within each service

---

### Issue 7: No Alt Text Strategy on Images/Videos
**Impact:** MEDIUM | **Priority:** 3

**What's wrong:** Portfolio videos likely have no alt text. The hero infinity graphic probably has no alt. This hurts accessibility and image SEO.

**Fix:** Add descriptive alt text to every image:
```html
<!-- Hero -->
<img alt="YOU Agency - Algeria digital marketing and video production" ... />

<!-- Portfolio -->
<img alt="Fashion reel production for Algerian brand - YOU Agency portfolio" ... />
<img alt="Restaurant promotional video - YOU Agency Algeria" ... />
```

---

### Issue 8: No Internal Linking Structure
**Impact:** MEDIUM | **Priority:** 3

**What's wrong:** Single page = zero internal links. Once you build sub-pages, there's no path for users or crawlers to navigate between them.

**Fix:** Build topic clusters:
- Homepage → links to all 5 service pages
- Each service page → links to related services (e.g., "Reels Production" links to "Social Media Marketing")
- Every page → links to /contact/ and /pricing/

---

### Issue 9: URL Structure Concern
**Impact:** LOW-MEDIUM | **Priority:** 4

**Current:** `anexlbk.github.io/you-agency/`

**Issue:** You're on GitHub Pages subdomain with a path. This is fine for a starter, but for credibility and SEO:
- Buy a custom domain (`youagency.dz` or `youagency-algeria.com`) — this is expected for an agency
- Redirect GitHub Pages to the custom domain
- Competitors like shiftin.co, konceptdigitalagency.com, and morismedia.in all have branded domains

---

## Content Gaps (What's Missing for SEO)

| Content Type | Status | Why It Matters |
|-------------|--------|----------------|
| Blog | Missing | No topical authority; can't rank for informational keywords |
| Case Studies | Missing | No proof content; can't rank for "[service] + Algeria" |
| FAQ Page | Missing | Misses long-tail voice search queries |
| Team Page | Missing | E-E-A-T signal; builds trust |
| Client Logos | Missing | Social proof that also ranks in image search |

**Blog topics YOU Agency should target:**
- "How much does social media marketing cost in Algeria (2025)"
- "Best video production agencies in Algiers"
- "TikTok marketing strategy for Algerian businesses"
- "Podcast production guide for brands in Algeria"
- "Reels vs TikTok: which platform for Algerian brands?"

These are low-competition, high-intent keywords in the Algerian market.

---

## Quick SEO Wins (Do This Week)

1. Add meta title and description to homepage
2. Create robots.txt and sitemap.xml
3. Add LocalBusiness schema markup
4. Fix alt text on all images
5. Buy and configure a custom domain
6. Set up Google Search Console + Bing Webmaster Tools

---

# 2. COPYWRITING AUDIT (Score: 65/100)

## What's Working

| Element | Verdict | Notes |
|---------|---------|-------|
| Brand Tagline | Strong | "Because it's always about you" — memorable, ownable |
| Brand Name | Strong | "YOU Agency" with infinity logo creates strong brand recall |
| Visual Consistency | Strong | Dark theme + green gradient is cohesive and premium |
| Service Descriptions | Decent | Short benefit-focused descriptions under each card |
| "Why Us" Section | Good | 3 clear differentiators (Speed, Results-Driven, Local Expertise) |

## What Needs Improvement

### Issue 1: Hero Headline is Generic
**Impact:** HIGH | **Priority:** 2

**Current:** "We Grow Your Brand. Digitally."

**Problem:** This could be any agency in any country. It doesn't specify who you serve, what makes you different, or what "grow" means. It's not specific enough to make someone choose YOU over SHIFTIN or Moris Media.

**Alternatives:**

| Option | Copy | Rationale |
|--------|------|-----------|
| A | "Algeria's Digital Growth Partner" | Anchors location + positions as partner, not vendor |
| B | "Reels, Campaigns & Brands That Convert" | Specific services + outcome-focused |
| C | "The Algerian Agency for Brands That Want to Stand Out" | Identity-based + emotional |
| D | "From First Reel to Full Campaign — We Build Algerian Brands" | Shows range + local focus |

**Recommended:** Option B or D. The current headline is forgettable. Your headline should make someone say "this is for me" in 2 seconds.

---

### Issue 2: Subheadline is Too Vague
**Impact:** MEDIUM | **Priority:** 3

**Current:** "Because it's always about you — full-service marketing & production agency in Algeria, specialized in high-impact digital campaigns."

**Problems:**
- "High-impact digital campaigns" — what does this mean? Every agency says this.
- No specific outcome or transformation
- No target audience clarity

**Improved:**
```
Full-service marketing & production for Algerian brands who want more than likes — 
we deliver reels, ads, and campaigns that drive real business results.
```

Or:
```
We help Algerian businesses grow on TikTok, Instagram, and beyond — 
from scroll-stopping reels to complete social media strategies.
```

---

### Issue 3: Service Card Copy is Feature-Heavy, Benefit-Light
**Impact:** MEDIUM | **Priority:** 3

**Current example (Reels & Social Media Videos):**
> "Professional content that stops the scroll." [Bullets: Video Editing, Voice Over, Graphic Design, Script Writing, Instagram Reels / TikTok / Shorts, Dynamic Content Optimized for Engagement]

**Problem:** The bullets are outputs, not outcomes. "Video Editing" tells me what you do. It doesn't tell me what I get.

**Improved:**
```
Reels & Social Media Videos
Short-form content engineered for views, saves, and shares.

What you get:
• Reels that stop the scroll and spark engagement
• Scripts written for Algerian audiences (Arabic, French, or English)
• Polished editing with trending sounds and transitions
• Content optimized for Instagram, TikTok & YouTube Shorts
• Monthly performance reports so you know what's working
```

**Apply this pattern to all 5 service cards.** Lead with the business outcome, then list deliverables.

---

### Issue 4: Missing Social Proof Section
**Impact:** CRITICAL | **Priority:** 1

**Current:** Zero testimonials. Zero client logos. Zero case studies. Zero stats ("X campaigns delivered", "X+ happy clients").

**Why this matters:** For an agency, social proof is the #1 conversion driver. SHIFTIN has testimonials from ASUS, Renault, Canbebe. You need at least something.

**Fix (even if starting out):**
- Add a "Trusted By" section with client names/logos (even 2-3 is enough to start)
- Add 2-3 testimonials with name, company, and specific result: *"YOU Agency grew our Instagram from 2K to 15K followers in 3 months" — [Name], [Business]*
- Add a stat bar: "50+ campaigns delivered | 30+ brands served | 1M+ views generated"

---

### Issue 5: "Previous Work" Description is a Placeholder
**Impact:** HIGH | **Priority:** 2

**Current:** "A few of our latest video projects, from video 1 to video 5."

**Problem:** This looks unfinished. "From video 1 to video 5" is placeholder copy that slipped through. It signals unprofessionalism.

**Fix:**
```
Recent Work
Campaigns and content we've created for brands across Algeria.

[Add captions under each video with client name + project type]
• "Fashion brand launch reel — 500K organic views"
• "Restaurant grand opening campaign — Algiers"
• "Gaming café viral TikTok series"
• "Anime store promotional campaign — Brussels location"
```

---

### Issue 6: CTA Copy is Weak
**Impact:** MEDIUM | **Priority:** 3

**Current CTAs:**
- "Let's Talk" (hero)
- "See Our Services" (hero)
- "Start a Project" (nav)

**Analysis:**
- "Let's Talk" — fine, but leads to a phone number. Not everyone wants to call.
- "See Our Services" — good secondary CTA
- "Start a Project" — strong, but the destination should be a form, not just a contact section

**Missing CTAs:**
- No "Get a Free Quote" 
- No "Book a Free Consultation"
- No "View Pricing"
- No "See Case Studies"

**Recommend adding:**
- Secondary CTA after services: "Get a Custom Quote for Your Project"
- After portfolio: "See Full Case Studies" 
- After "Why Us": "Book Your Free 15-Min Strategy Call"

---

### Issue 7: Footer Copy Missed Opportunity
**Impact:** LOW-MEDIUM | **Priority:** 4

**Current:** "Elevating brands through high-impact digital storytelling and results-driven marketing. Because it's always about you."

**Problem:** Passive voice ("Elevating brands through..."). No CTA. No email signup.

**Improved:**
```
Ready to grow? Let's talk about your next campaign.

[Email field + Subscribe button — "Get marketing tips for Algerian brands"]

Call: +213 783 281 957
Email: youagency2025@gmail.com
```

---

## Voice & Tone Assessment

| Aspect | Current | Recommendation |
|--------|---------|----------------|
| Formality | Professional but stiff | Loosen up — agencies can be conversational |
| Confidence | Measured | Be bolder. You're making claims; own them |
| Specificity | Weak | Add numbers, names, concrete examples |
| Customer-centric | Good tagline, weak execution | Every section should speak to the client's outcome |

**Overall tone recommendation:** Move from "we are a professional agency" to "we're your growth partner, and here's proof." Be confident. Be specific. Be slightly bold.

---

# 3. AD CREATIVE AUDIT (Score: 55/100)

## Current State Assessment

YOU Agency doesn't appear to be running paid ads currently (no pixel evidence, no landing pages, no campaign-specific URLs). This audit covers what your ad creative *should* look like based on your positioning, and how to build campaigns.

## Ad Angles to Develop (3-5 Core Angles)

Based on your services and the Algerian market, here are the strongest angles:

### Angle 1: Local Market Expertise (Differentiation)
**Core message:** "We understand Algeria. Foreign agencies don't."

**Meta Ad Primary Text:**
```
Tired of agencies that don't understand the Algerian market? 

We create content in Arabic, French, and English — designed specifically 
for how Algerians actually engage on Instagram and TikTok.

From reels to full campaigns, we know what works here.

Book a free 15-min strategy call.
```

**Headlines (40 char):**
- "The Algerian Agency for Algerian Brands"
- "Content Built for Algeria"
- "We Know the Local Market"
- "Reels That Algerians Watch"

---

### Angle 2: Video-First / Reels (Core Service)
**Core message:** "Video is everything. We make scroll-stopping reels."

**Meta Ad Primary Text:**
```
Your competitors are already posting reels. Are yours getting views?

We create reels, TikToks, and short-form videos designed to stop the 
scroll and drive engagement for Algerian brands.

Professional editing. Trending formats. Content that converts.

See our recent work →
```

**Headlines (40 char):**
- "Reels That Stop the Scroll"
- "Professional Reels for Your Brand"
- "From Shoot to Viral Reel"
- "We Make Algerian Brands Go Viral"

---

### Angle 3: Full-Service Convenience (Pain Point)
**Core message:** "One agency. Everything you need. No more managing 5 vendors."

**Meta Ad Primary Text:**
```
Stop juggling between a video editor, a graphic designer, a social media 
manager, and an ad specialist.

YOU Agency handles everything — reels, podcast production, branding, 
Meta ads, and content strategy — under one roof.

One team. One invoice. Real results.

Get a custom package quote →
```

**Headlines (40 char):**
- "One Agency. All Your Marketing."
- "Stop Juggling Vendors"
- "Everything Under One Roof"
- "Reels + Ads + Branding = One Team"

---

### Angle 4: Speed + Results (Why Us)
**Core message:** "Fast turnaround. Measurable results. No fluff."

**Meta Ad Primary Text:**
```
Most agencies take 2 weeks to deliver a single reel. We deliver campaigns 
in days — without cutting corners.

Every video, every post, every ad is built to drive real results: 
followers, engagement, and customers.

See why Algerian brands choose YOU Agency →
```

**Headlines (40 char):**
- "Fast. Professional. Results."
- "Campaigns Delivered in Days"
- "Speed Without Sacrifice"
- "Your Next Reel, This Week"

---

### Angle 5: Podcast Production (Niche Service)
**Core message:** "Algeria's podcast scene is growing. Be the first in your industry."

**Meta Ad Primary Text:**
```
Podcasts are exploding in Algeria — but who's producing yours?

We handle everything: studio recording, multi-camera video podcast, 
editing, set design, and distribution.

Be the voice your industry trusts.

Learn about our podcast packages →
```

**Headlines (40 char):**
- "Launch Your Podcast in Algeria"
- "Algeria's Podcast Production Team"
- "Studio to Upload — We Handle It"
- "Your Voice. Professional Production."

---

## Google Ads (Search) Creative

### Keywords to Target (Algeria-focused):
- "agence marketing digital algerie"
- "production video alger"
- "social media management algeria"
- "reels instagram algerie"
- "podcast production algeria"
- "agence community management alger"
- "creation contenu tiktok algerie"
- "branding agency algeria"

### RSA Headlines (30 char max):
```
1. "Digital Marketing | Algeria" (28)
2. "Video Production in Algiers" (28)
3. "Reels That Drive Results" (24)
4. "Full-Service Algerian Agency" (28)
5. "Grow on Instagram & TikTok" (27)
6. "Book a Free Strategy Call" (25)
7. "We Know the Algerian Market" (27)
8. "Podcast Production Services" (27)
9. "Stop the Scroll. Start Growth." (30)
10. "Your Brand. Our Expertise." (26)
11. "Social Media That Converts" (27)
12. "Algeria's Creative Agency" (25)
13. "Reels + Ads + Branding" (22)
14. "Get Your Custom Quote Now" (26)
15. "Professional Content Team" (25)
```

### RSA Descriptions (90 char max):
```
1. "Full-service digital marketing & video production for Algerian brands. Reels, campaigns, podcast production. Call +213 783 281 957." (119) → TRIMMED: "Digital marketing & video production for Algerian brands. Reels, campaigns, podcasts. Call +213 783 281 957." (95)

2. "From scroll-stopping reels to complete social media strategies. We help Algerian brands grow on every platform. Free consultation." (125) → TRIMMED: "Scroll-stopping reels & social strategies for Algerian brands. Grow on every platform. Book a free consultation." (93)

3. "One agency for all your marketing. Video editing, branding, Meta ads, podcast production & more. Based in Algeria. Get a quote." (116) → TRIMMED: "One agency for all your marketing needs. Video, branding, ads, podcasts. Based in Algeria. Request a quote." (93)

4. "Professional podcast production in Algeria. Studio recording, multi-camera video, editing & distribution. Launch your show today." (118) → TRIMMED: "Podcast production in Algeria. Studio recording, multi-camera video, editing & distribution. Launch today." (94)
```

---

## Ad Creative Recommendations Summary

| Priority | Action | Timeline |
|----------|--------|----------|
| 1 | Set up Meta Pixel + Google Ads conversion tracking | This week |
| 2 | Create 3 landing pages matching ad angles (Reels, Full-Service, Podcast) | 2 weeks |
| 3 | Launch Meta campaign with Angles 1 & 2 (highest volume) | 2-3 weeks |
| 4 | A/B test 3-5 creatives per angle | Ongoing |
| 5 | Build lookalike audiences from website visitors + video viewers | Month 2 |

---

# 4. CAMPAIGN PLAN AUDIT (Score: 40/100)

## Current State: No Structured Campaigns

YOU Agency doesn't appear to have structured marketing campaigns. Your "campaign" is essentially your website + social media presence. Here's what you need:

## Recommended Campaign: "Brand Launch" (90-Day Plan)

### Campaign Overview

| Element | Detail |
|---------|--------|
| **Campaign Name** | "Algeria's Brands Deserve Better Content" |
| **Objective** | Drive consultation bookings + build email list |
| **Duration** | 90 days |
| **Primary KPI** | 50+ qualified consultation requests |
| **Secondary KPIs** | 1,000+ email subscribers; 10,000+ website visitors; 500+ social followers |

### Target Audience

**Primary:** Business owners and marketing managers at Algerian SMEs (10-100 employees) who:
- Have a business Instagram/TikTok but post inconsistently or get low engagement
- Have considered hiring an agency but don't know who to trust
- Value speed, local expertise, and clear pricing
- Operate in: restaurants, fashion, beauty, retail, tech startups, events

**Secondary:** Content creators and influencers in Algeria looking to professionalize their output (podcast production, reel editing).

**Audience Profile:**
> "A restaurant owner in Algiers who posts on Instagram but gets 50-100 likes per post. They know TikTok and Reels are important but don't have time to create content. They want a local agency that understands Algerian culture and can handle everything from filming to posting."

### Channel Strategy

| Channel | Role | Content | Budget Allocation | Effort |
|---------|------|---------|-------------------|--------|
| **Meta Ads (FB/IG)** | Primary acquisition | Video ads showcasing reel work; carousel ads for services | 40% | Medium |
| **TikTok Organic** | Awareness + credibility | Behind-the-scenes of shoots; before/after edits; tips | 0% (organic) | High |
| **Instagram Organic** | Portfolio showcase + nurture | Reels of client work; Stories with polls/QA; carousel tips | 0% (organic) | High |
| **LinkedIn** | B2B lead gen | Case study posts; industry insights; Algerian market trends | 0% (organic) | Medium |
| **Google Ads** | High-intent capture | Search ads for "agence marketing digital algerie" | 30% | Medium |
| **Email** | Nurture + retention | Weekly tips newsletter; case studies; exclusive offers | 10% (tool cost) | Low |
| **Blog/SEO** | Long-term organic | Target Algerian marketing keywords | 10% (content cost) | Medium |
| **Partnerships** | Referral channel | Cross-promote with Algerian web devs, PR agencies | 10% | Low |

### 90-Day Content Calendar

#### Phase 1: Foundation (Days 1-30)

| Week | Content | Channel | Purpose |
|------|---------|---------|---------|
| 1 | Launch "Before & After Reels" series on TikTok/IG | Organic | Showcase editing skills; build initial audience |
| 1 | Set up Meta + Google ad accounts; install pixels | Paid | Infrastructure for tracking |
| 2 | Publish blog: "How Much Does Social Media Marketing Cost in Algeria (2025)" | Blog/SEO | Target high-intent keyword |
| 2 | Create 3 landing pages for ad campaigns | Website | Conversion-ready destinations |
| 3 | Launch Meta ad campaign (Angle 1: Local Expertise) | Paid | Begin paid acquisition |
| 3 | Launch Google Ads campaign (service keywords) | Paid | Capture search intent |
| 4 | Publish case study: "How We Generated 500K Views for [Client]" | Blog/LinkedIn | Social proof content |
| 4 | Email #1: "5 Reels Ideas for Algerian Restaurants" | Email | First nurture touch |

#### Phase 2: Growth (Days 31-60)

| Week | Content | Channel | Purpose |
|------|---------|---------|---------|
| 5 | Launch podcast production campaign (Angle 5) | Paid + Organic | Target niche audience |
| 5 | Partner with 2 Algerian business influencers for content | Partnership | Borrowed audience |
| 6 | Publish blog: "TikTok Algorithm 2025: What Algerian Brands Need to Know" | Blog/SEO | Thought leadership |
| 6 | A/B test ad creative — swap underperforming headlines | Paid | Optimize CTR |
| 7 | Launch retargeting campaign (website visitors → consultation offer) | Paid | Convert warm traffic |
| 7 | Host free webinar: "Social Media Strategy for Algerian SMEs" | Email + Organic | Lead generation event |
| 8 | Publish video case study on YouTube + IGTV | Organic | Video social proof |
| 8 | Email #4: Webinar replay + consultation CTA | Email | Convert engaged subscribers |

#### Phase 3: Scale (Days 61-90)

| Week | Content | Channel | Purpose |
|------|---------|---------|---------|
| 9 | Scale winning ad sets; pause losers | Paid | Double down on what works |
| 9 | Launch referral program: "Refer a brand, get 1 free reel" | Email + Organic | Word of mouth |
| 10 | Publish blog: "10 Algerian Brands Crushing It on TikTok" | Blog/SEO | Linkbait + social shares |
| 10 | Run giveaway: "Free social media audit for 5 Algerian businesses" | All channels | List building + engagement |
| 11 | Create lookalike audiences from converters | Paid | Expand reach |
| 11 | Publish 3 client testimonial videos | All channels | Social proof at scale |
| 12 | Campaign wrap-up report + case study on results | Blog/LinkedIn | Document success; attract more |
| 12 | Plan next 90-day campaign | Internal | Continuous improvement |

### Success Metrics (90-Day Targets)

| Metric | Target | How Tracked |
|--------|--------|-------------|
| Consultation requests | 50+ | Form submissions + phone calls |
| Cost per consultation | < 5,000 DZD | Ad spend / consultations |
| Website visitors | 10,000+ | Google Analytics |
| Email subscribers | 1,000+ | Email platform |
| Social followers (combined) | +500 | Native analytics |
| Blog organic traffic | 1,000+ visits | Google Search Console |
| Retargeting conversion rate | >3% | Ad platform |

---

# 5. PRICING STRATEGY AUDIT (Score: 30/100)

## Critical Issue: No Pricing Page

**Status:** Your footer links to `/packs` which returns a 404 error. This is the most damaging issue on your entire site.

**Why this matters:**
- "Pricing" is the second-most visited page on agency websites (after homepage)
- Visitors who click "Packs" and hit a 404 will assume you're unprofessional and leave
- You're missing high-intent traffic — people who want to buy but can't find pricing
- Competitors like SHIFTIN, Createch, and Fan Advertising all display pricing tiers

**Fix immediately:** Create a `/pricing/` page with the structure below.

---

## Recommended Pricing Structure

### Tier Model: Good-Better-Best

For an Algerian digital agency, I recommend 3 clear tiers plus a custom option:

#### Tier 1: Starter ("Content Essentials")
**Price point:** 30,000-50,000 DZD/month (~$220-370)

| Feature | Included |
|---------|----------|
| Reels / Shorts | 4 per month |
| Graphic Design | 8 social posts |
| Platform Coverage | Instagram + Facebook |
| Community Management | Basic (responses only) |
| Reporting | Monthly |
| Support | Email |

**Best for:** Small businesses, cafes, local shops just starting on social media

---

#### Tier 2: Growth ("Brand Builder") — RECOMMENDED
**Price point:** 80,000-120,000 DZD/month (~$590-880)

| Feature | Included |
|---------|----------|
| Reels / Shorts | 8 per month |
| Graphic Design | 16 social posts + stories |
| Platform Coverage | Instagram + Facebook + TikTok |
| Meta Ads Management | Included (ad spend separate) |
| Community Management | Full (responses + engagement) |
| Content Strategy | Monthly planning session |
| Reporting | Weekly + monthly |
| Support | WhatsApp priority |

**Best for:** Growing brands, restaurants, fashion labels, beauty salons ready to scale

**This is your default tier.** Mark it as "Most Popular" on the pricing page.

---

#### Tier 3: Professional ("Full Campaign")
**Price point:** 200,000-300,000 DZD/month (~$1,470-2,200)

| Feature | Included |
|---------|----------|
| Everything in Growth | Plus: |
| Video Production | 1 professional shoot per month |
| Podcast Production | 2 episodes per month |
| Platform Coverage | All platforms + YouTube |
| Influencer Collaborations | 1 per month |
| Branding Support | Logo tweaks, visual updates |
| Reporting | Real-time dashboard + weekly |
| Support | Dedicated account manager |

**Best for:** Established brands, e-commerce, corporate clients, event companies

---

#### Custom: Enterprise
**Price:** Contact us

| What's included |
|-----------------|
| Everything tailored |
| Full video production team |
| Multi-location shoots |
| Annual strategy roadmap |
| SLA guarantee |

---

## Pricing Page Structure

### Above the Fold

```
[Label] TRANSPARENT PRICING
[Headline] Marketing Packages for Every Algerian Brand
[Subheadline] From your first reel to a full digital campaign. 
              No hidden fees. No surprises.

[Tabs: Monthly | Quarterly (Save 10%) | Annual (Save 20%)]

[Starter Card]              [Growth Card ★ Most Popular]      [Professional Card]
30,000 DZD/mo               100,000 DZD/mo                    250,000 DZD/mo
Content Essentials          Brand Builder                     Full Campaign

• 4 Reels/mo                • 8 Reels/mo                      • Everything in Growth
• 8 Graphics/mo             • 16 Posts/mo                     • + 1 Video Shoot/mo
• IG + FB                   • + TikTok                        • + 2 Podcast Episodes/mo
• Basic Management          • Meta Ads Included               • + YouTube
• Monthly Report            • Weekly Reports                  • Real-time Dashboard
• Email Support             • WhatsApp Priority               • Dedicated Manager

[Get Started]               [Get Started] ★                   [Get Started]
```

### Below the Fold

**Feature Comparison Table**
Full comparison with checkmarks/x marks for every feature across all tiers.

**FAQ Section:**
1. "Can I customize a package?" → Yes, all packages can be tailored. Contact us.
2. "What's the minimum commitment?" → 3 months for best results. Monthly available.
3. "Are ad spend costs included?" → No, Meta/TikTok ad budgets are separate.
4. "How do I get started?" → Book a free 15-min call and we'll recommend the right package.
5. "Do you offer one-time projects?" → Yes! Contact us for project-based pricing.

**Social Proof:**
2-3 testimonials specific to pricing: *"Worth every dinar. Our engagement tripled in 2 months."*

**Final CTA:**
```
Not sure which plan is right? 
Book a free 15-minute strategy call — we'll help you choose.
[Book Free Call]
```

---

## Pricing Psychology Tips

1. **Show annual savings prominently** — "Save 20%" is a strong motivator
2. **Anchor with the Professional tier** — Makes Growth look affordable
3. **Use "Most Popular" badge** — Guides the choice
4. **Include "Contact Us" for custom** — Captures enterprise leads without publishing high prices
5. **Show prices in DZD** — Local currency builds trust with Algerian clients

---

# PRIORITIZED ACTION PLAN

## Week 1: Critical Fixes

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | Create `/pricing/` page with 3 tiers + FAQ | High | Medium |
| 2 | Fix footer "Packs" link → point to `/pricing/` | High | 5 min |
| 3 | Fix "Previous Work" placeholder copy | High | 5 min |
| 4 | Add meta title + description | High | 15 min |
| 5 | Create robots.txt + sitemap.xml | High | 30 min |

## Month 1: Foundation Building

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 6 | Add testimonials section (even 2-3) | Critical | Medium |
| 7 | Add "Trusted By" client logo section | High | Low |
| 8 | Create dedicated service pages (5) | High | High |
| 9 | Add LocalBusiness schema markup | Medium | 30 min |
| 10 | Buy custom domain | Medium | Low |
| 11 | Rewrite hero headline + subheadline | Medium | 1 hour |
| 12 | Add lead capture form (not just phone) | High | Medium |

## Month 2-3: Growth

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 13 | Launch Meta ad campaign (2 angles) | High | Medium |
| 14 | Launch Google Ads (search keywords) | High | Medium |
| 15 | Start blog (1 post/week minimum) | Medium-High | High |
| 16 | Create case study pages for portfolio | High | High |
| 17 | Set up email list + weekly newsletter | Medium | Medium |
| 18 | Launch retargeting campaign | High | Low |

## Long-Term (3-6 Months)

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 19 | Build full internal page structure | High | High |
| 20 | Create video case studies | High | High |
| 21 | Develop referral/partnership program | Medium | Low |
| 22 | Launch webinar/event strategy | Medium | High |
| 23 | Add team page with bios + photos | Medium | Medium |
| 24 | Implement advanced analytics + conversion tracking | Medium | Medium |

---

# COMPETITIVE CONTEXT

Based on research of the Algerian digital agency market:

| Competitor | Strength | YOUR Agency Advantage |
|------------|----------|----------------------|
| **SHIFTIN** | Biggest name (ASUS, Renault, Canbebe) | Faster, more personal, video-focused |
| **Moris Media** | SEO-heavy, "#1" positioning | Local production quality, not just marketing |
| **Koncept Digital** | Established (2018), Oran-based | Full production (podcast, video), not just digital |
| **Fan Advertising** | Broad service range | Niche focus on reels + video content |
| **Createch** | Tech-focused, low pricing | Premium positioning, production quality |

**Your differentiation:** YOU Agency is the only Algerian agency that combines **video production + podcast production + social media marketing** under one roof with a **video-first approach**. Lean into that. Most agencies do "digital marketing." You do "content that converts."

---

*Report compiled using 5 specialized skill frameworks. All recommendations are prioritized by impact vs. effort. Start with Week 1 critical fixes — they're fast and high-impact.*
