// console.log("superpippo!");

// const myCanvas = document.getElementById("my-canvas");

// console.log("canvas", myCanvas.width, myCanvas.height);



// const ctx = myCanvas.getContext('2d');



// // ctx.fillRect(10, 10, 100, 50);

// // ctx.fillStyle = 'red';

// // ctx.fillRect(500, 300, 90, 10);

// // ctx.strokeRect(200, 200, 30, 30);

// // ctx.strokeStyle = 'orange';

// // ctx.strokeRect(500, 600, 100,100);


// // for (let i = 0; i < 30; i++) {

// //     const red = Math.round(Math.random() * 255);
// //  const green = Math.round(Math.random() * 255);
// //   const blue= Math.round(Math.random() * 255);
// //   const alpha= Math.random();


// //   ctx.fillStyle = 'rgba(' + red + ', ' + green + ', ' + blue + ',' + alpha + ')';

// //     const randomX = Math.random() * 800;
// //     const randomY = Math.random() * 800;

// //     const randomW = Math.random() * 400;
// //     const randomH = Math.random() * 400;

// //     ctx.fillRect(randomX, randomY, randomW, randomH);

// // }


// // setInterval(() => {

// // //  ctx.clearRect(0, 0, 800, 800)
// // // ctx.fillStyle = 'white';
// // // ctx.fillRect(0, 0, 800, 800);




// //   const red = Math.round(Math.random() * 255);
// //   const green = Math.round(Math.random() * 255);
// //   const blue= Math.round(Math.random() * 255);
// //   const alpha= Math.random();


// //   ctx.fillStyle = 'rgba(' + red + ', ' + green + ', ' + blue + ',' + alpha + ')';

// //     const randomW = Math.random() * 400;
// //     const randomH = Math.random() * 400;

// //     const randomX = Math.random() * ( 800 - randomW);
// //     const randomY = Math.random() * (800 - randomW) ;



// //     ctx.fillRect(randomX, randomY, randomW, randomH);

// // }



// // const rettangolo = {
// //     x: 400,
// //     y: 400,
// //     width: 10,
// //     height: 10
// // }

// // setInterval(() => {


// //     ctx.clearRect(0, 0, 800, 800)


// //     rettangolo.x = rettangolo.x + 1;
// //     ctx.fillRect(rettangolo.x, rettangolo.y, rettangolo.width, rettangolo.height);

// // } , 100);


// const rectangles = [];


// function setUp() {
//     for (let i = 0; i < 100; i++) {

//         const red = Math.round(Math.random() * 255);
//         const green = Math.round(Math.random() * 255);
//         const blue = Math.round(Math.random() * 255);
//         const alpha = Math.random();

//         const width = 3;
//         const height = 3;




//         const randomX = Math.random() * (800 - width);
//         const randomY = Math.random() * (800 - height);
//         const randomVX = Math.random() * 4 - 2;
//         const randomVY = Math.random() * 4 - 2;



//         const rect = {
//             x: randomX,
//             y: randomY,
//             width: 10,
//             height: 10,
//             color: 'rgba(' + red + ', ' + green + ', ' + blue + ',' + alpha + ')',
//             vX: randomVX,
//             vY: randomVY

//         }



//         rectangles.push(rect);


//     }




// }

// setUp();

// console.log(rectangles);




// function update() {
//     for (const rect of rectangles) {

//         rect.x = rect.x + rect.vX;
//         rect.y = rect.y + rect.vY;

//         if (rect.x + rect.width > 800 || rect.x < 0) {
//             rect.vX = rect.vX * -1;

//         }

//         if (rect.y + rect.height > 800 || rect.x < 0) {
//             rect.vY = rect.vY * -1;

//         }
//         const diceX = Math.random();
//         if (diceX > 0.9) {
//             rect.vX += Math.random()

//         }
//         if (diceX < 0.1) {
//             rect.vX -= Math.random()

//         }
//         const diceY = Math.random();
//         if (diceY > 0.9) {
//             rect.vY += Math.random()

//         }
//         if (diceY < 0.1) {
//             rect.vY -= Math.random()
//         }


//         if (rect.vX > 3) {
//             rect.vX = 3
//         }
//         if (rect.vY > 3) {
//             rect.vY = 3
//         }
//         if (rect.vX < -3) {
//             rect.vX = -3
//         }
//         if (rect.vY < -3) {
//             rect.vY = -3
//         }

//     }

// }


// function draw() {

//      ctx.clearRect(0, 0, 800, 800);
//     for (const rect of rectangles) {

//         ctx.fillStyle = rect.color;
//         ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
//     }
// }

// setInterval(() => {
//     update();
//     draw();
// }, 18);



console.log("Natale!");

const myCanvas = document.getElementById("my-canvas");
const ctx = myCanvas.getContext("2d");

const objects = [];

const treeImg = new Image();
treeImg.src = "xmas_christmas_tree_emoji_icon_260217.png";   // alberello

const giftImg = new Image();
giftImg.src = "christmas_gift_box_present_icon_171303.webp"; // pacchetto

function createObject(img) {
    const width = 40;
    const height = 40;

    const obj = {
        x: Math.random() * (800 - width),
        y: Math.random() * (800 - height),
        width: width,
        height: height,
        img: img,
        vX: Math.random() * 4 - 2,
        vY: Math.random() * 4 - 2
    };

    return obj;
}

function setUp() {
    // 25 alberelli
    for (let i = 0; i < 25; i++) {
        objects.push(createObject(treeImg));
    }

    // 25 pacchetti
    for (let i = 0; i < 25; i++) {
        objects.push(createObject(giftImg));
    }
}

setUp();

function update() {
    for (const obj of objects) {

        obj.x += obj.vX;
        obj.y += obj.vY;

        // Rimbalzi
        if (obj.x + obj.width > 800 || obj.x < 0) {
            obj.vX = obj.vX * -1;
        }
        if (obj.y + obj.height > 800 || obj.y < 0) {
            obj.vY = obj.vY * -1;
        }

        // Piccoli cambi di direzione casuali
        const dice = Math.random();
        if (dice > 0.95) obj.vX += Math.random() - 0.5;
        if (dice < 0.05) obj.vY += Math.random() - 0.5;

        // Limiti velocità
        obj.vX = Math.max(Math.min(obj.vX, 3), -3);
        obj.vY = Math.max(Math.min(obj.vY, 3), -3);
    }
}

function draw() {
    ctx.clearRect(0, 0, 800, 800);

    for (const obj of objects) {
        ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
    }
}

setInterval(() => {
    update();
    draw();
}, 18);
