🌌 Sky For All

A beginner-friendly astronomy community website built with React + Vite.

Sky For All is a volunteer project designed to make astronomy learning more accessible and fun. The website uses a space-themed interface with interactive sections such as an astronomy quiz, tonight's sky planner, annual roadmap, learning resources, and volunteer information.

🛠️ Tech Stack

This project uses:
React
Vite
JavaScript
CSS
Font Awesome
Netlify

🚀 Getting Started

Step 1 – install Visual Studio Code.

Open the Sky For All project folder in VS Code.
You can also open the terminal in VS Code using:
Terminal → New Terminal

Step 2 — Download / Clone the Repository

If you are using GitHub, clone the repository:
git clone YOUR_REPOSITORY_URL
Then enter the project folder:
cd SkyForAll

Step 3 — Install Dependencies

This step is very important.
Inside the project folder, run:
npm install

This reads package.json and installs all required packages.
You only normally need to run this once after downloading the project.

Step 4 — Start the Website

Run:
npm run dev

Vite will start the development server.
You should see something similar to:
Local: http://localhost:5173/
Open that address in your browser.

🎉 Your Sky For All website should now be running locally.

Whenever you come back to the project:

cd SkyForAll
npm run dev

🧩 Understanding the Components

The website is divided into smaller React components.
This makes the project easier for beginners to understand and maintain.

–RetroWindow

RetroWindow creates the Windows/retro-style container used around many sections.

Example:

<RetroWindow title="astro_quiz.exe">
  <Quiz />
</RetroWindow>

If you want to change the appearance of all retro windows, edit:

src/components/RetroWindow/RetroWindow.css

–SkyPlanner

Files:

SkyPlanner.jsx
SkyPlanner.css

The Sky Planner allows users to select:
Hemisphere
Northern Hemisphere
Southern Hemisphere
Equipment
Naked Eye
Binoculars
Telescope
The target list changes according to the selected combination.

For example:
Northern + Naked Eye
can show different objects from:
Southern + Telescope

To add another target, edit the targets array inside SkyPlanner.jsx.

–Quiz

Files:

Quiz.jsx
Quiz.css

Questions are stored inside the questions array.

Example:

{
question: "Which planet is known as the Red Planet?",
options: ["Earth", "Mars", "Venus", "Mercury"],
answer: "Mars"
}

To add a new question:
Copy an existing question.
Change the question.
Change the four options.
Set the correct answer in answer.

Example:

{
question: "Which planet has the Great Red Spot?",
options: ["Earth", "Jupiter", "Mars", "Venus"],
answer: "Jupiter"
}

The quiz automatically calculates the final score.

–Annual Roadmap

Files:

Roadmap.jsx
Roadmap.css

The roadmap contains monthly sections.

Each month can contain:
Month name
Short description
Activities
Member goal
Additional information

Users can click any month to open or close it.
To edit roadmap information, update the roadmap data inside:

Roadmap.jsx

–Learning Resources

Files:

Resources.jsx
Resources.css

Resources can be stored as objects containing:

Name
Description
URL
Icon

Example:

{
name: "Stellarium Web",
description: "Explore the night sky using an online planetarium.",
url: "https://stellarium-web.org/",
icon: "..."
}

When adding external links, always test them in a browser before committing your changes.

–Volunteer Section

Files:

Volunteer.jsx
Volunteer.css

The volunteer section contains information about joining Sky For All.

–Social Media Links

Social buttons can use normal anchor tags.

🌱 How to Contribute

This is a volunteer project, so beginners are welcome.

Step 1 — Fork the repository

Create your own copy of the repository on GitHub.

Step 2 — Clone your fork

git clone YOUR_FORK_URL

Step 3 — Enter the project

cd SkyForAll

Step 4 — Install dependencies

npm install

Step 5 — Create a branch

Do not make changes directly to the main branch.

git checkout -b feature/my-new-feature

Example:

git checkout -b feature/add-astronomy-resource

Step 6 — Make your changes

Edit the required files.

Step 7 — Test your changes

npm run dev

Then test the website in your browser.

Step 8 — Check the build

npm run build

Make sure there are no errors.

Step 9 — Save your changes with Git

git add .

Then:

git commit -m "Add new astronomy resource"

Step 10 — Push your branch

git push origin feature/my-new-feature

Step 11 — Create a Pull Request

Go to GitHub and open a Pull Request from your branch into the project's main branch.

Explain:

What you changed
Why you changed it
How you tested it
Any issues the maintainer should know about

💡 Beginner Contribution Ideas

If you're new to coding, you can start with small changes.

🟢 Easy

Add new Sky Planner targets
Add more roadmap months/details
Add new animations
Improve responsive design
Add new astronomy facts

🟡 Medium

Add live astronomy data
Add a real weather/sky-quality system
Add user accounts
Add a backend
Add a database
Add an interactive star map

🤝 Contribution Guidelines

Please keep contributions:
Beginner-friendly
Accessible
Respectful
Well documented
Tested before submission

When possible:
Keep components small
Avoid unnecessary dependencies
Use meaningful variable names
Keep CSS organized
Don't remove someone else's work without discussing it
Test your changes before opening a Pull Request

🌠 About Sky For All

Sky For All aims to create a welcoming community where people can explore astronomy, learn new skills, collaborate on meaningful projects, and stay curious about the universe.

Every contribution helps make astronomy a little more accessible. 🚀

📞 Need Help?

If you're stuck:
Read the error message carefully.
Check the browser console.
Check the terminal.
Search the exact error.
Ask the project maintainer or volunteer team.
Don't be afraid to ask questions — this project is also a place to learn.

🚀 Happy coding, and keep looking up! 🌌

---

> Made by **Shifa Shaikh** — [Portfolio](https://portfolio-shifa.netlify.app/)
