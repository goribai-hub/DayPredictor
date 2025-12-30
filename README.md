# 🤖 Day Predictor AI

A fun and interactive web project that pretends to use AI to predict **which day tomorrow will be** 😄  
Built with pure **HTML, CSS, and JavaScript**.

> ⚠️ Disclaimer: This project is for fun & learning purposes only.

---

## ✨ Features

- 📱 Mobile-style card UI
- 🎨 Stylish pink dotted background
- 🧠 User selects a day
- ⏳ Fake AI loading animation (Consulting Elon Musk...)
- ✅ Correct answer → “YOU'RE RIGHT!”
- ❌ Wrong answer → Shows correct day
- 🔄 Restart option
- 🌐 Works as a **static website**

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- Vanilla JavaScript  
- No backend required  

---

## 📂 Project Structure
├── index.html
├── style.css
├── script.js
└── README.md

---

## 🚀 How to Run Locally

### Method 1: Direct (Easiest)
1. Download or clone the repository
2. Open `index.html` in your browser

### Method 2: VS Code Live Server
1. Install **Live Server** extension
2. Right click `index.html`
3. Click **Open with Live Server**

---

## 🌍 Deploy on Render (Recommended)

1. Push this project to GitHub
2. Go to **https://render.com**
3. Click **New → Static Site**
4. Select your repository
5. Set:
   - **Build Command:** *(leave empty)*
   - **Publish Directory:** `.`
6. Click **Deploy**

🎉 Your site will be live!

---

## 🧠 How It Works

- JavaScript gets **today’s day**
- Calculates **tomorrow**
- Compares it with the user’s selection
- Displays result after a fake AI loading animation

---

## 📸 Screens

- Day selection screen  
- AI loading screen  
- Result screen (Right / Wrong)

---

## 🧪 Example Logic Snippet

```js
const todayIndex = new Date().getDay();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const tomorrow = days[(todayIndex + 1) % 7];
