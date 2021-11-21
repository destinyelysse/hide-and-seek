let totalSpots = 50;

const setupSpots = (spotsToMake) => {
    let spotArray = [];

    for (let i=1; i<=spotsToMake; i++ ){
        let newSpot = document.createElement("img");
        newSpot.src = "./images/spot.png";
        newSpot.id = "spot"+i;
        newSpot.className = "spot";
        spotArray.push(newSpot);
    }

    return spotArray;
}

const spots = setupSpots(totalSpots);

const pizzaCatPath = "./images/pizza-cat.png";
const doryInABoxPath = "./images/dory-in-a-box.png";
const doryScratcherPath = "./images/dory-scratcher.png";

const setupDories = (totalDories) => {

    let srcs = [];

    let pizzaCatLocation = Math.floor(Math.random() * (totalDories - 1));
    let doryScratcherLocation = pizzaCatLocation;

    while (doryScratcherLocation === pizzaCatLocation){
        doryScratcherLocation = Math.floor(Math.random() * (totalDories - 1));
    }

    for (let i = 0; i<totalDories; i++){
        if (i === pizzaCatLocation){
            srcs.push(pizzaCatPath);
        } else if (i=== doryScratcherLocation){
            srcs.push(doryScratcherPath);
        } else {
            srcs.push(doryInABoxPath);
        }
    }

    return srcs;
}

let dories = setupDories(totalSpots);

const assignDories = (spots, dories) => {
    if (spots.length != dories.length){
        console.log("spots and dories different lengths.")
    }

    for (let i = 0; i< spots.length; i++){
        let spot = spots[i];
        let dory = dories[i];
        spot.onclick = () => {
            console.log("old class");
            console.log(spot.class)
            spot.src = dory;
            console.log(spot.class)
        }
    }

    return spots;
}

const gameSpots = assignDories(spots, dories);

function renderSpots(gameSpots){

    let spotContainer = document.getElementById("spot-container");
    console.log("got container");
    console.log(spotContainer);

    for (spot of gameSpots){
        console.log(spot.class);
        spotContainer.appendChild(spot);

    }
}

renderSpots(gameSpots);

