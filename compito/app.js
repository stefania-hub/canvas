
function setup() {
    createCanvas(600, 400);
}



function draw() {


    ctx.clearRect(0, 0, 800, 800);


    background(220);




    for (const obj of objects) {


        ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);


    }


}


// cerchio semplice


fill(0, 120, 255);


circle(x, height / 2, 60);





// movimento


x = x + speed;




setInterval(() => {


    update();


    draw();


}, 18);


// rimbalzo ai bordi


if (x > width || x < 0) {


    speed = speed * -1;


}


