# 🎓 EduDash

A modern student learning dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Supabase**, and **Framer Motion**.

EduDash helps students track course progress, monitor learning activity, and visualize study performance through an interactive and responsive dashboard.

---

## 🚀 Live Demo

https://learning-dashboard-murex.vercel.app/

---

## 📂 GitHub Repository


```text
https://github.com/shreya-1920/learning-dashboard
```

---

## ✨ Features

* Responsive Dashboard UI
* Course Progress Tracking
* Weekly Activity Analytics
* Dynamic Data from Supabase
* Smooth Framer Motion Animations
* Mobile-Friendly Navigation
* Modern Dark Theme Design
* Reusable React Components
* Environment Variable Support

---

## 🛠 Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS

### Backend / Database

* Supabase

### Animations

* Framer Motion

### Deployment

* Vercel

https://learning-dashboard-murex.vercel.app/

## 📸 Screenshots

### Dashboard

![EduDash Dashboard](public/dashboard-preview.png)

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

A sample file is included as:

```text
.env.example
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/shreya-1920/learning-dashboard.git
```

Navigate into the project:

```bash
cd learning-dashboard
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env.local
```

Add your Supabase credentials.

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📁 Project Structure

```text
learning-dashboard/
│
├── app/
├── components/
├── lib/
│   └── supabase.ts
│
├── public/
│
├── .env.example
├── README.md
├── package.json
└── next.config.ts
```

---

## 🎯 Assignment Objectives Covered

* Next.js App Router
* TypeScript Usage
* Tailwind CSS Styling
* Supabase Integration
* Responsive Design
* Reusable Components
* Framer Motion Animations
* Clean Project Structure
* GitHub Version Control
* Environment Configuration

---
## Architecture Decisions

The application is built using Next.js App Router and follows a component-based architecture. The dashboard is divided into reusable UI components such as Sidebar, HeroTile, CourseCard, and ActivityTile to improve maintainability and code organization.

Supabase is used as the backend database for storing course information and progress data. The application fetches data directly from Supabase and displays it in a responsive dashboard interface.

## Server and Client Component Split

The main page (`page.tsx`) is implemented as a Server Component. Data is fetched from Supabase on the server before rendering, reducing client-side work and improving performance.

Interactive UI components such as animations and hover effects use Client Components. Components that rely on Framer Motion, including MotionCard, HeroTile animations, and ActivityTile animations, are marked with `"use client"` to enable client-side interactivity.

This approach keeps data fetching on the server while limiting client-side JavaScript to only the parts that require user interaction.

## Challenges Faced

One challenge was designing a responsive layout that works well across desktop and mobile devices. This was solved using Tailwind CSS responsive utilities and conditional layouts.

Another challenge was balancing Server Components and Client Components when integrating Framer Motion. The solution was to keep data fetching in Server Components while isolating animations into dedicated Client Components.

Additional effort was spent improving the user interface with custom animations, responsive navigation, gradient styling, and visually distinct course cards to create a modern dashboard experience.

## 👩‍💻 Author

**Shreya Jain**

Frontend Intern Assignment Submission


