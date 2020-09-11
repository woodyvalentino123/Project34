//Create variables here
var dog, happyDog,database,foods,foodStock;
var img1,img2;

function preload()
{
 
  //load images here
  img1 = loadImage("images/dogImg.png");
  img2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodstock = database.ref('Food');
  foodstock.on("value",readstock,showerror);
  dog = createSprite(200,200,20,20);
  
  happyDog = createSprite(100,100,20,20);
  
  
}


function draw() {  
  background(46,139,87);

  if(keyDown(UP_ARROW)){
    writeStock(foods);
    
    dog.addImage(img2)
    dog.scale = 0.2;
    
  }else
  {
    if(keyDown(DOWN_ARROW)){
    updatestock(foods);
    happyDog.addImage(img2);
    happyDog.scale = 0.2;
 }
}
  drawSprites();
  textSize(20);
  fill('red')
  stroke(4)
  text("Note: Press UP _ ARROW Key to Feed Dragon Milk",200,100);
  //add styles here

}
function readstock(data){
  foods=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
    database.ref('/').update({
      Food:x
    })
  }
function updatestock(y){
  y =y+1;
  database.ref("/").update({
    Food:y
  })
}

function showerror(){
  console.log("error");
}



