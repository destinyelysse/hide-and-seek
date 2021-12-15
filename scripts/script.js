// find pizza cat, get 20 points, cat scratcher revealed, and pick three more spots before the tiles are reset
// find scratcher dory, tiles are hidden and scrambled and you lose one catsnack
// find other dories, get points or a life

// START
// Dory Game Title
// Start Game button
// View Instructions button

// GAME
// loads Dory tiles, score = 0, lives = 5
// each tile has a hidden type of Dory under it
// select two tiles. if they match, you get a point. 
// if you find pizza cat, you get a life. 
// if you find scratcher dory, you lose a life. 

// generate tiles
// determine uncovered tile state

let homeShowing = true;
let gameShowing = false;

let points = 0;
let totalLives = 5;
let totalTiles = 10;

const pizzaCatPath = "./images/pizza-cat.png";
const doryInABoxPath = "./images/dory-in-a-box.png";
const doryScratcherPath = "./images/dory-scratcher.png";

// set up lives
const displayLives = (lives) => {
    let lifeImages = [];
    for (let i = 1; i <= lives; i++) {
        let lifeImage = document.createElement("img");
        lifeImage.src = "./images/pizza-cat.png";
        lifeImage.className = "life";
        lifeImages.push(lifeImage);
    }
    let livesContainer = document.getElementById("lives-container");
    for (life of lifeImages) {
        livesContainer.appendChild(life);
    }
}

// set up tiles
const createTilesArray = (tiles) => {
    let tilesArray = [];
    for (let i = 1; i <= tiles; i++) {
        let newTile = document.createElement("img");
        newTile.src = "./images/spot.png";
        newTile.id = "tile" + i;
        newTile.className = "tile";
        tilesArray.push(newTile);
    }
    return tilesArray;
}

const createDoriesArray = (totalDories) => {
    let doriesArray = [];
    let pizzaCatLocation = Math.floor(Math.random() * (totalDories - 1));
    let doryScratcherLocation = pizzaCatLocation;
    while (doryScratcherLocation === pizzaCatLocation) {
        doryScratcherLocation = Math.floor(Math.random() * (totalDories - 1));
    }
    for (let i = 0; i < totalDories; i++) {
        if (i === pizzaCatLocation) {
            doriesArray.push(pizzaCatPath);
        } else if (i === doryScratcherLocation) {
            doriesArray.push(doryScratcherPath);
        } else {
            doriesArray.push(doryInABoxPath);
        }
    }
    return doriesArray;
}

const assignDories = (tiles, dories) => {
    let assignedTiles = []
    if (tiles.length != dories.length) {
        console.log("tiles and dories different lengths.")
    }
    for (let i = 0; i < tiles.length; i++) {
        let tile = tiles[i];
        let dory = dories[i];
        tile.onclick = () => {
            tile.src = dory;
            playTile(dory);
        }
        assignedTiles.push(tile);
    }
    return assignedTiles;
}

function renderTiles(tiles) {
    let tilesContainer = document.getElementById("tiles-container");
    for (tile of tiles) {
        tilesContainer.appendChild(tile);
    }
}

const setupBoard = (lives, tiles) => {

    displayLives(lives);
    let gameTiles = createTilesArray(tiles);
    let dories = createDoriesArray(tiles);
    let assignedTiles = assignDories(gameTiles, dories);
    renderTiles(assignedTiles);
}

let game = document.getElementById("game");
game.hidden = true;
let homeScreenContainer = document.getElementById("home");
let startGameBtn = document.getElementById("start-button");
startGameBtn.onclick = () => {
    homeScreenContainer.hidden = true;
    game.hidden = false;
    setupBoard(totalLives, totalTiles);
}

// play game
const reduceLives = () => {
    let lostLife = document.getElementById("life" + totalLives);
    lostLife.remove();
    lives--;
}

const resetGame = () => {
    setupBoard();
}

const playTile = (tile) => {
    if (tile === pizzaCatPath) {
        lives++;
        // add bonus dory functionality
    } else if (tile === doryScratcherPath) {
        reduceLives();
        if (lives === 0) {
            //game over
        } else {
            //reset tiles

            setupBoard();

        }
        // reset tiles
    } else if (tile === doryInABoxPath) {
        points++;
    }
}

