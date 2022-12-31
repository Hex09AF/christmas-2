const _flake_container = document.getElementById("christmas-event");

const _NUMBER_OF_FLAKE = 10;

const _flake_y = [];
const _flake_x = [];

let curX = 0;
let curY = 0;

const stepX = 100 / _NUMBER_OF_FLAKE;
const stepY = 100 / _NUMBER_OF_FLAKE;

const _SNOW_FLAKE_PATH = "./images/snowflake.png";

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

for (let i = 0; i < _NUMBER_OF_FLAKE; ++i) {
    const x = curX + Math.random() * stepX;
    curX += stepX;
    const y = curY + Math.random() * stepY;
    curY += stepY;
    _flake_y.push(x);
    _flake_x.push(y);
}

shuffle(_flake_x);
shuffle(_flake_y);

const backgroundImage = Array(_NUMBER_OF_FLAKE).fill(0).map((val) => {
    return `url(${_SNOW_FLAKE_PATH})`;
}).join(", ");

const backgroundPosition = Array(_NUMBER_OF_FLAKE).fill(0).map((val, idx) => {
    return `${_flake_x[idx]}% ${_flake_y[idx]}%`;
}).join(", ");

const backgroundSize = Array(_NUMBER_OF_FLAKE).fill(0).map((val, idx) => {
    return `${0.5 + Math.random() * 4}%`;
}).join(", ");

_flake_container.style.backgroundImage = backgroundImage;
_flake_container.style.backgroundPosition = backgroundPosition;
_flake_container.style.backgroundSize = backgroundSize;