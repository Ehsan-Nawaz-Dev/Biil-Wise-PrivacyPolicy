<div align="center">

  <img src="./assets/favicon.svg" alt="BillWise Pakistan Logo" width="80" height="80" />

  # 🛡️ BillWise Pakistan — Legal & Privacy Center

  **Official Privacy Policy, Terms of Service & Google Play Data Safety Documentation**  
  *Application Package:* `com.billwise.pakistan` • *Target:* Android & iOS

  <p align="center">
    <a href="#-features"><img src="https://img.shields.io/badge/Architecture-100%25%20Offline--First-059669?style=for-the-badge&logo=shield" alt="Offline First" /></a>
    <a href="#-pages-included"><img src="https://img.shields.io/badge/Google%20Play-Compliant-10B981?style=for-the-badge&logo=googleplay&logoColor=white" alt="Play Store Compliant" /></a>
    <a href="#-quick-start"><img src="https://img.shields.io/badge/Built%20With-Vite%20%2B%20Vanilla%20CSS-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite + CSS" /></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" /></a>
  </p>

  <p align="center">
    A fast, modern, and legally comprehensive privacy documentation site engineered specifically for <strong>BillWise Pakistan</strong>, Pakistan's premier utility bill organizer and reminder application.
  </p>

</div>

---

## 📑 Pages Included

| Page | File | Description |
| :--- | :--- | :--- |
| **Privacy Policy** | [`index.html`](./index.html) | Full disclosure of offline-first storage (`AsyncStorage`), zero remote personal tracking, permissions (`POST_NOTIFICATIONS`), and Pakistan PECA / COPPA compliance. |
| **Terms of Service** | [`terms.html`](./terms.html) | Terms of use, non-affiliation disclaimers with DISCO utility companies (LESCO, IESCO, K-Electric, SNGPL, etc.), and non-payment gateway terms. |
| **Data Safety Guide** | [`data-safety.html`](./data-safety.html) | Exact answers and guidance for completing the Google Play Console "App Content > Data Safety" submission questionnaire. |

---

## ✨ Key Features & Design Highlights

- ⚡ **Offline-First Clarity:** Explicitly explains to users and Google reviewers why no remote personal data is collected or sold.
- 🎨 **Modern Design System:**
  - **Dark / Light Mode:** Automatic system detection with manual toggle, persisted via `localStorage`.
  - **Glassmorphism:** Frosted blur headers and cards.
  - **Scrollspy Navigation:** Table of contents actively tracks user scroll position.
  - **Live Search & Filter:** Instant clause filtering with section counters.
  - **One-Click Section Links:** Deep-link buttons with interactive toast notifications.
  - **Print / PDF Ready:** Custom `@media print` CSS rules for official paper or PDF export.
- 🤖 **Automated CI/CD:** Ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`) for seamless deployment to **GitHub Pages**.

---

## 📂 Project Structure

```
Biil-Wise-PrivacyPolicy/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automatic GitHub Pages CI/CD workflow
├── assets/
│   ├── favicon.svg           # Vector shield brand icon
│   └── logo.svg              # Full vector brand typography
├── css/
│   └── style.css             # Vanilla CSS design system with CSS custom properties
├── js/
│   └── app.js                # Theme switcher, scrollspy, search filter, and copy actions
├── index.html                # Privacy Policy (Entry Page)
├── terms.html                # Terms of Service & Disclaimers
├── data-safety.html          # Google Play Console Data Safety questionnaire mapping
├── package.json              # Standalone package scripts (dev, build, preview)
├── vite.config.js            # Multi-page build configuration with relative base
├── .gitignore                # Excludes node_modules and dist
└── README.md                 # Project documentation
```

---

## 🚀 Quick Start (Local Development)

### 1. Clone the Repository
```bash
git clone https://github.com/Ehsan-Nawaz-Dev/Biil-Wise-PrivacyPolicy.git
cd Biil-Wise-PrivacyPolicy
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Your browser will automatically open at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
Optimized static files will be generated in `dist/`.

---

## 🌐 Deploying to GitHub Pages (Automated & Free)

This repository includes a pre-configured GitHub Actions workflow:

1. Push your code to your repository:
   ```bash
   git push -u origin main
   ```
2. Open your repository on GitHub:
   `https://github.com/Ehsan-Nawaz-Dev/Biil-Wise-PrivacyPolicy`
3. Go to **Settings** > **Pages**.
4. Under **Build and deployment** > **Source**, select **GitHub Actions**.
5. The deployment will automatically run and publish your site at:  
   👉 **`https://ehsan-nawaz-dev.github.io/Biil-Wise-PrivacyPolicy/`**

---

## 📱 Google Play Console Integration Guide

When submitting or updating **BillWise Pakistan** (`com.billwise.pakistan`) on Google Play Console:

1. **Privacy Policy URL:**
   - Go to **Policy & Programs** > **App Content** > **Privacy Policy**.
   - Paste your live URL:  
     `https://ehsan-nawaz-dev.github.io/Biil-Wise-PrivacyPolicy/`
2. **Data Safety Form:**
   - Go to **App Content** > **Data Safety**.
   - Refer to [`data-safety.html`](./data-safety.html) for exact answers to guarantee swift approval without metadata rejection.

---

## 📜 Supported Utility Providers

BillWise Pakistan provides tracking organization for:
- **Electricity (DISCOs):** LESCO, IESCO, K-Electric, FESCO, GEPCO, MEPCO, PESCO, HESCO, SEPCO, QESCO
- **Gas:** SNGPL (Sui Northern), SSGC (Sui Southern)
- **Water & Sanitation:** WASA
- **Telecom & Internet:** PTCL, Nayatel, StormFiber

---

## 📬 Contact & Support

- **App Package:** `com.billwise.pakistan`
- **Developer:** Aampower Developer / BillWise Pakistan
- **Support Email:** [support@billwise.pk](mailto:support@billwise.pk)
- **Alternate Email:** [aampower.developer@gmail.com](mailto:aampower.developer@gmail.com)

---

<div align="center">
  <sub>Built with ❤️ for privacy and transparency • &copy; 2026 BillWise Pakistan</sub>
</div>
