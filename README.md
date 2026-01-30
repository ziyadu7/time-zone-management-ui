cat << 'EOF' > README.md
# Timezone & Timeslot Management – Frontend

This repository contains the frontend application for the **Timezone and Timeslot Management** system.  
It allows users to select a timezone, view converted timeslots, and display detailed time information.

---

## 🚀 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Axios
- Luxon (Timezone conversion)
- Vercel (Deployment)

---

## 📁 Project Structure

app/
├─ page.tsx # Main UI page
├─ layout.tsx # Root layout
components/
├─ TimezoneDropdown.tsx
├─ TimeslotDropdown.tsx
├─ TimeslotDetails.tsx
services/
├─ axios.ts # Axios base configuration
├─ api.ts # API calls to backend
utils/
├─ time.ts # Timezone conversion logic
types/
├─ index.ts # Shared TypeScript interfaces


---

## 🎯 Features

- Fetches timezones and UTC timeslots from backend APIs
- Converts UTC timeslots to the selected timezone
- Dropdown-based selection for timezone and timeslot
- Displays both original UTC and converted timeslot
- Clean, responsive UI built with Tailwind CSS

---

## ⏰ Timezone Handling

- All times are received in **UTC**
- Conversion is handled on the frontend using **Luxon**
- Supports decimal timezone offsets (e.g., IST +5.5)
- Backend remains timezone-agnostic

---

## 🔐 Environment Variables

Create a `.env` file for local development:

```env
NEXT_PUBLIC_API_URL=http://localhost:8081
For production, configure the environment variable in Vercel Dashboard:

NEXT_PUBLIC_API_URL=https://<your-backend-url>.onrender.com
⚠️ Environment files are not committed to the repository.
Variables must start with NEXT_PUBLIC_ to be accessible in the browser.

▶️ Run Locally
npm install
npm run dev
The application will run at:

http://localhost:3000
☁️ Deployment
Deployed on Vercel

Backend API URL injected via environment variables

Automatic deployments on GitHub push

🧠 Design Decisions
Axios used for centralized API handling with a configurable base URL

Environment-based configuration for backend API endpoints

Reusable, strongly-typed React components

Timezone conversion logic isolated in a utility function

Tailwind CSS used for rapid and consistent UI styling

✅ Status
✔ Frontend complete
✔ Integrated with backend APIs
✔ Ready for production deployment
EOF


---

## ✅ Final Step

After running the command:

```bash
git add README.md
git commit -m "Add frontend README"
git push