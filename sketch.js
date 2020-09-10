//Create variables here
var dog, happyDog,database,foods,foodStock;
var img1,img2;

function preload()
{
 
  //load images here
  img1 = loadImage("images/dogimg.png");
  img2 = loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodstock = database.ref('Food');
  foodstock.on("value",readstock,showerror);
  dog = createSprite(200,200,20,20);
  dog.addImage(img2);
  happyDog = createSprtie(100,100,20,20);
  
  
}


function draw() {  
  background(46,139,87);

  if(keyDown(UP_ARROW)){
    writeFood(-1);
  }else
  {
    if(keyDown(DOWN_ARROW)){
    writeStock(foods);
    happyDog.addImage(img1);
 }
}
  drawSprites();
  textSize(20);
  fill('red')
  stroke(4)
  text("Note: Press UP _ ARROW Key to Feed Dragon Milk",200,100);
  //add styles here

}
function readStock(data){
  foods=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
    database.ref('/').update({
      Food:x
    })
  }
}



