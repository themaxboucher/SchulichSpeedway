# Schulich Speedway 🏎️💨   

An interactive web-based game that visualizes GPS tracking data as a racing experience, inspired by the journey of a first-year engineering student at the University of Calgary.  

**Created as part of the G-Hacks Hackathon at the University of Calgary** 🎓🚀  

## 🎮 Live Demo  
[Click here to play the game!](https://schulich-speedway.vercel.app/) 

---

## ⚡ Inspiration  
This project was built during **G-Hacks**, a hackathon hosted at the University of Calgary, where we had 24 hours to showcase **real-world position data collected from a GNSS receiver** in a creative and meaningful way. We wanted to go beyond simple data visualization and make the experience interactive. By transforming GPS tracking data into a **game-based racing format**, we created a fun and engaging way to explore movement data.  

The website’s retro pixel-art style takes inspiration from classic video games, pushing us to experiment with design outside our comfort zones. It also serves as a test of our problem-solving skills and engineering knowledge.  

## ⚙️ What It Does  
Our website transforms raw GPS data into an interactive experience. The main feature is a game that maps our tracked pathway in a racing-style format.  

- Navigate the course, crossing interactive checkpoints that represent the journey of a first-year engineering student at U of C.  
- Each checkpoint includes fun insights or relatable moments from student life.  
- The game makes real-world movement data more engaging by turning it into a playable experience.  

## 🚀 How We Built It  
### 🛠 Tech Stack  
- **Frontend:** React, Google Maps API  
- **Data Processing:** Python, Matplotlib, SciPy, Excel  

### 🔧 Process  
1. **Data Collection & Processing:**  
   - We collected GPS data using a high-frequency sampling method.  
   - The data was cleaned and transformed using Python scripts.  
   - Plots were generated using Matplotlib and SciPy for analysis.  

2. **Game & Visualization:**  
   - The frontend was built with React.  
   - The Google Maps API was used to visualize the GPS-based race track.  

## 😭 Challenges We Faced  
- **Hackathon Time Limit!** Completing a functional project in just 24 hours was a challenge.  
- **Too Much Data!** Our initial dataset had over 2,000 points due to high-frequency collection (every 0.05 seconds), leading to excessive noise.  
- **Data Refinement:** We recollected data at a lower frequency (1-second intervals) to improve clarity.  

## 🏔️ Accomplishments We're Proud Of  
✅ Successfully completing the project within the G-Hacks hackathon timeframe.  
✅ Turning raw GPS data into an interactive and visually engaging game.  
✅ Experimenting with pixel-art aesthetics and game-based visualization.  
✅ Overcoming data challenges and refining our problem-solving skills.  

## 🧠 What We Learned  
- How GPS tracking systems collect and process location data.  
- Data cleaning, transformation, and visualization techniques.  
- The importance of adaptability and teamwork in tackling unfamiliar challenges.
