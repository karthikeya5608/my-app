var enemyimage;

function preload(){
    createCanvas(200,200);
 enemyimage =loadImage("sven-thole-druid-attack.gif");
 enemy= createImg("sven-thole-druid-attack.gif");
}

function draw(){
    background(255,0,0);

    enemy.position(100,100);
}