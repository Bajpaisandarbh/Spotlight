# 🌟 Spotlight – My Developer Portfolio

Welcome to my modern, interactive developer portfolio built with **Next.js** and **Tailwind CSS**.  
Showcasing my projects, achievements, blog, and more - all in one place.

You can visit and contact me on my portfolio , here is the live link :

---

## ✨ Features

- ⚡ **Blazing Fast:** Built with Next.js 15 and optimized for performance
- 🎨 **Modern Design:** Clean, responsive, and accessible UI with Tailwind CSS
- 🛠️ **Projects Showcase:** Dynamic project cards, including “Always Building” WIP
- 📝 **Blog:** Share your thoughts and stories with integrated blog support
- 💡 **Spotlight Lamp Branding:** Unique animated lamp effect for branding and headings
- 📱 **Mobile Friendly:** Looks great on all devices
- 🔒 **Contact Form:** Secure, with MongoDB integration and instant email notifications
- 🌙 **Theme Support:** Easily switch between light and dark modes
- 🔍 **SEO Optimized:** Meta tags, sitemap, and Open Graph support

---


### 1️⃣ Clone the repository

git clone https://github.com/Bajpaisandarbh/Spotlight.git
cd Spotlight

### 2️⃣ Install dependencies
npm install
or
yarn install

### 3️⃣ Configure environment variables

Create a `.env.local` file in the root directory and add:

MONGODB_URI=your_mongodb_connection_string
GMAIL_USER=yourgmail@gmail.com
GMAIL_PASSWORD=your_gmail_app_password

> ⚠️ **Do NOT commit `.env.local` to GitHub.**  
> Add all secrets to Vercel’s Environment Variables after deployment.

### 4️⃣ Run the development server

npm run dev

or
yarn dev

text

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

---

## 🗂️ Folder Structure Overview

- `components/` – All UI components (navbar, hero, projects, blog, etc.)
- `lib/` – Types, utility functions, and API clients
- `app/` – Next.js App Router pages and layouts
- `public/` – Static assets (images, icons, etc.)
- `models/` – Mongoose models for MongoDB
- `app/actions/` – Server actions for data fetching and contact form
- `.env.local` – Your local environment variables (not committed)

---

## 📝 Customization

- **Edit your projects:** Update the `projects` collection in MongoDB.
- **Change images and icons:** Replace files in `/public/assets/icons` and `/public/Profile.jpg`.
- **Update blog posts:** Add/edit blog data or integrate with a CMS.
- **Tweak styles:** Modify Tailwind config or component classes.

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Nodemailer](https://nodemailer.com/) (for contact notifications)
- [Vercel](https://vercel.com/) (for deployment)

---

## 🙏 Credits & Inspiration

- [Simple Icons](https://simpleicons.org/) for skill logos
- [Lucide Icons](https://lucide.dev/) for UI icons

---

> Built with ❤️ by Sandarbh Bajpai
