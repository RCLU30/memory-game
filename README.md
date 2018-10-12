
# Two Card Memory Game

A simple two card color matching game built using React components. Application built using the create-react-app. Built this in the [cloud9.io](https://ide.c9.io) environment as part an exercise for the [Advanced WebDeveloper Bootcamp] (https://www.udemy.com/the-advanced-web-developer-bootcamp/) 
Currently not built for production.

# Usage

 1. Download or clone the files and install the dependencies listed in the `package.json`
 2. `cd` into directory where all files are located
 3. Run app using `npm start`.
 4. Open link created from `npm` and begin playing the game

# Dependencies

 - node v10.11.0 
 - react: 16.5.2
 - react-dom 16.5.2
 - react-scripts 2.0.4
# Files
 - /src/App.js
	 - Parent Component for MemoryGame
 - /src/MemoryGame.js
	 - Main MemoryGame component
	 - Parent to other components (Card and Navbar)
- /src/Card.js
	- Component for rendering each individual card
- /src/Navbar.js
	- Navbar component. Contains sub-heading and new game button
- /src/Serviceworker.js
	- React server component. Required if running server through`npm start`
 
