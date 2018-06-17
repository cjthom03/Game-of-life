# Charlie's Life

## Background and overview
Charlie's Life is an interactive implementation of John Horton Conway's [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

The game is a cellular automaton, meaning that it is made up of a grid of cells, each of which have a finite number of states and follow a set of rules which determine their state.

In this game, cells can have 2 states - alive or dead - and they follow 4 simple rules:
1. Underpopulation - A cell dies if it has less than 2 living neighbors
2. Continuation - A cell with 2-3 neighbors will stay alive
3. Overpopulation - A cell dies if it has more than 3 neighbors
4. Reproduction - A cell is born if it has exactly 3 living neighbors

In Charlie's life, users will be allowed to modify some of these rules and force state changes for some of the cells on the grid in order to experiment and play with the game.

## Functionality and MVP

In Charlie's Life, users will be able to:
* Start the game (with on click) with a pre-seeded board
* Pause & re-start the game, as well as clear the game of all live cells
* Easily change the speed of the game using a slide bar
* Choose between 'Life' and 'Highlife' implementations of Conway's game
* Access a side bar of pre-determined shapes that can be added to the board
* Access a side bar with more information about how the game works

## Design & Wireframes

Charlie's Game will be a single-screen application with a very simple design and UI. The game will consist of a main simulation area, containing around 7,500 cells. The user will click on this area to begin the game.

Controls along the bottom of the simulation area will allow the user to pause/play the simulation, speed up or slow down the simulation, toggle between Life and Highlife rules for the game, or clear the board.
![Game of Life - Main](assets/GameOfLife_Main.png)

Controls in the top right of the screen will allow the user to toggle one of two expandable sidebars. The first, toggled with a '+' icon, allows the use to add live cells to the board: randomly, in a full row, in a full column, or in various pre-constructed shapes - gliders, guns, and spaceships. The second sidebar, toggled with a '?' icon, will explain the game and various controls to the user.
![Game of Life - Sidebar](assets/GameOfLife_Sidebar.png)

## Technologies and Architecture
This project will be implemented with the following technologies:
* Vanilla Javascript - the game logic and user interactions
* Webpack - bundle and serve up the scripts
* Animate.css - Only for sidebar animations

In addition to the `bundle.js` entry file served up by webpack, the following scripts will be included:

* `board.js` - creating and updating the DOM elements
* `sidebar.js` - creating and updating the DOM elements in the sidebar
* `cell.js` - logic for determining the state of a given cell
* `action.js`- handles user interactions with the board
* `rules.js` - handles user interactions with the rules of the game

Additional scripts may be created as code is written and refactored.

## Implementation Timeline
This project is meant to be conceptualized and planned over a weekend, and then coded over 20-30 hours during the following week.

**Before Day 1 (over the weekend):**
- [ ] Configure Webpack and get it up an running
- [ ] Create basic file structure
- [ ] Build the basic elements in `index.html`

**Day 1:** Focus on the basic implementation of the game.
- [ ] User can click to start the game
- [ ] Random cells are 'brought to life'
- [ ] The simulation runs with default rules
- [ ] Cells on the top/bottom or left/right of the grid are treated as neighbors
- [ ] User can pause, re-start, and clear the simulation

**Day 2:** Focus on user actions (sidebar).
- [ ] Create a sidebar with buttons for all user actions
- [ ] User can toggle the sidebar view
- [ ] User can interact with simulation via actions sidebar (point-and-click)

**Day 3:** Focus on user interaction with rules of the game.
- [ ] Create slider for simulation speed
- [ ] Create dropdown for cell rules
- [ ] Allow for the cell rules to be variable
- [ ] User can speed up the simulation
- [ ] User can change the rules from 'Life' to 'Highlife'

**Day 4:** 'About this Game' + Style + UX
- [ ] Create sidebar for '?' icon
- [ ] User can access a detailed explanation of the game and the controls.
- [ ] Ensure smooth, bug-free navigation
- [ ] Ensure appropriate and adequate styling


## Bonus Features
Features that could be added:
 * Additional pre-constructed 'shapes' (eg. spaceships, guns, etc)
 * Color states could be added (such as the Immigration implementation)
