let spotImage1 = document.getElementById("spot1");
let spotImage2 = document.getElementById("spot2");
let spotImage3 = document.getElementById("spot3");

const pizzaCatImagePath = "./images/pizza-cat.png";
const doryInABoxPath = "./images/dory-in-a-box.png";
const doryScratcherPath = "./images/dory-scratcher.png";

spotImage1.onclick = () => {
    spotImage1.src = foundDory1;
}

spotImage2.onclick = () => {
    spotImage2.src = foundDory2;
}

spotImage3.onclick = () => {
    spotImage3.src = foundDory3;
}

let foundDory1;
let foundDory2;
let foundDory3;

const randomDoryLocationGenerator = () => {
    let pizzaCatLocation = Math.floor(Math.random() * 3);
    let doryScratcherLocation = pizzaCatLocation;

    while (doryScratcherLocation === pizzaCatLocation){
        doryScratcherLocation = Math.floor(Math.random() * 2);
    }

    if (pizzaCatLocation == 0){
        if (doryScratcherLocation == 1){
            foundDory1 = pizzaCatImagePath;
            foundDory2 = doryScratcherPath;
            foundDory3 = doryInABoxPath;
        } else {
            foundDory1 = pizzaCatImagePath;
            foundDory2 = doryInABoxPath;
            foundDory3 = doryScratcherPath;
        }
    } else if (pizzaCatLocation == 1){
        if (doryScratcherLocation = 0){
            foundDory1 = doryScratcherPath;
            foundDory2 = pizzaCatImagePath;
            foundDory3 = doryInABoxPath;
        } else {
            foundDory1 = doryInABoxPath;
            foundDory2 = pizzaCatImagePath;
            foundDory3 = doryScratcherPath;
        }
    } else {
        if (doryScratcherLocation == 0){
            foundDory1 = doryScratcherPath;
            foundDory2 = doryInABoxPath;
            foundDory3 = pizzaCatImagePath;
        } else {
            foundDory1 = doryInABoxPath;
            foundDory2 = doryScratcherPath;
            foundDory3 = pizzaCatImagePath;
        }
    }
}

randomDoryLocationGenerator();