

# 📄 Ft. NESS – Documentation

## 🏋️‍♂️ Overview

**Ft. NESS** is a responsive and modern fitness website built using **Next.js** and **Tailwind CSS**. It serves as an engaging platform to showcase fitness programs, trainer profiles, class schedules, testimonials, and contact information. The site is designed with clean UI/UX principles and deployed seamlessly using **Vercel**.

🔗 **Live Site**: [https://ft-ness.vercel.app](https://ft-ness.vercel.app)

---

## ⚙️ Tech Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| **Next.js**       | React framework for SSR & routing |
| **Tailwind CSS**  | Utility-first CSS styling         |
| **Framer Motion** | Smooth animations and transitions |
| **Vercel**        | Deployment platform (CI/CD ready) |

---

## 📁 Project Structure

```bash
ft-ness/
├── components/        # Reusable UI components
├── pages/             # Routes (index.js, about.js, contact.js etc.)
├── public/            # Static assets (images, icons, etc.)
├── styles/            # Global CSS and Tailwind config
├── utils/             # Optional utility functions
├── .env.local         # Environment variables (if any)
├── tailwind.config.js # Tailwind config
└── next.config.js     # Next.js configuration
```

---

## 🚀 Getting Started (Development)

### 1. Clone the repository

```bash
git clone https://github.com/Alwin-Sajan/ft-ness.git
cd ft-ness
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to view the app in your browser.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

The site is deployed using **Vercel** for continuous deployment.

### Vercel Setup:

* GitHub integration for auto-deploy
* Production branch: `main`
* Build command: `npm run build`
* Output directory: `.next`

---

## 📌 Key Features

* ⚡ Fast, SEO-friendly, and responsive
* 🎨 Tailwind CSS for clean, maintainable UI
* 🎥 Framer Motion for interactive animations
* 💡 Modular and reusable components
* 📱 Mobile-first design

---

## 📸 Pages Included

| Page     | Path        | Description                           |
| -------- | ----------- | ------------------------------------- |
| Home     | `/`         | Landing page with hero, features, CTA |
| About Us | `/about`    | Story, team, and mission              |
| Programs | `/programs` | Fitness plans and session breakdowns  |
| Trainers | `/trainers` | Trainer profiles                      |
| Contact  | `/contact`  | Contact form and map                  |

---

## 🛠️ Customization

* Change images from `/public/`
* Update colors and fonts in `tailwind.config.js`
* Add new pages via the `pages/` directory
* Update SEO and meta tags in `_document.js` or `_app.js`

---

## 🙋‍♂️ Maintainer

**Alwin Sajan**
💼 Full Stack Developer | AI Enthusiast
🔗 [Portfolio](https://alwin-sajan.github.io/portfoi)
📧 [alwinsajanofficial@gmail.com](mailto:alwinsajanofficial@gmail.com)

---

## 📃 License

This project is licensed under the **MIT License**. Feel free to use and modify for personal or commercial use.
