# How to Understand & Manage This Website (Simple Guide)

Welcome! This project is built with **Next.js + plain JavaScript** so every piece is super easy to find, read, and change.

---

## 1. How the Folders Work (Like a Toy Box!)

Think of the project in **4 simple folders**:

| Folder | What it does | Example |
|---|---|---|
| **`src/data/`** | **All your words, headlines, prices, and events** live here. You do NOT need to touch layout code just to change text! | `src/data/news.js` |
| **`src/components/`** | **Reusable building blocks** (like Lego bricks) used across pages. | `SiteHeader.js`, `NewsCard.js`, `SiteFooter.js` |
| **`src/app/`** | **Website pages**. Each folder name is a URL on your website! | `src/app/magazine/page.js` → `/magazine` |
| **`public/images/`** | **All pictures** saved locally on your computer. | `public/images/hero_supreme_court.jpg` |

---

## 2. How to Start the Website

Open a terminal inside this folder and run:

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser!

---

## 3. Common Tasks (5-Second Recipes)

### Want to add or edit a news story?
Open **`src/data/news.js`**.
- Find any list like `LATEST_LEGAL_NEWS`, `DEAL_STREET`, or `FROM_THE_COURTS`.
- Copy one `{ ... }` block, give it a unique `slug` (like `"my-new-ruling"`), and update the `title`, `summary`, `author`, `date`, and `image`.
- Save the file — it automatically appears on the Homepage, Category page (`/news`), Search page (`/search`), AND gets its own full Article page (`/news/my-new-ruling`)!

### Want to change the navigation menu or website name?
Open **`src/data/siteConfig.js`** and edit `SITE_INFO`, `NAV_LINKS`, or `FOOTER_COLUMNS`.

### Want to add a magazine edition?
Open **`src/data/magazine.js`** and add a new item to `ARCHIVE_ISSUES` (or update `FEATURED_ISSUE`).

### Want to add an event or legal award?
Open **`src/data/events.js`** and edit `FLAGSHIP_EVENT` or `UPCOMING_EVENTS`.

### Want to change membership prices or FAQs?
Open **`src/data/membership.js`** and edit `MEMBERSHIP_PLANS` or `MEMBERSHIP_FAQS`.

### Want to change the Navy Blue or Gold colors?
Open **`tailwind.config.js`** and edit the hex color codes under `colors` (`primary`, `accent`, `breaking`, etc.).
