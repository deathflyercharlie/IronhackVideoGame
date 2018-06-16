
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  
// Clases 
      function Board (){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.score = 0;
        this.score2 = 0;
        this.img = new Image ();
        this.img.src = "./Images/sea.png";
        this.img.onload = function () {this.draw() } .bind(this);
        this.draw = function()
        {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    
       this.drawScore = function()
    {
      this.score = Math.floor (frames / 60);
      this.score2 = this.score * 10;
      ctx.font = "50px Avenir";
      //ctx.fillStyle = "orange";
      //ctx.fillText(this.score, this.width/2, this.y + 50);
      ctx.font = "30px Avenir";
      ctx.fillText("Score "+this.score2, this.width-135, this.y + 30);
    }

      
  }

function RainDrop()
{
  this.width = 85;
  this.x = Math.floor(Math.random() * (canvas.width - this.width));
  this.y = 0;
  this.height = 85;
  this.img = new Image();
  this.img.src = "./Images/drop.png";
  this.value1 = Math.floor(Math.random()* 10);
  this.value2 = Math.floor(Math.random() * 100);
  this.resultadoRainDrop = this.value1 + this.value2;
  
  this.img.onload = function()
    {
      this.draw();
    }.bind(this);

  this.draw = function()
    { 
      this.y += Math.floor(Math.random() * (Math.floor(Math.random())));
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      if ( this.y > canvas.height - this.height) gameOver();
    }

    this.move= function ()
    {
      this.y += Math.floor(Math.random() * 2.8);
      ctx.font = "18px Avenir";
      ctx.fillStyle = "black";
      ctx.fillText((this.value1 +" + " + this.value2) , this.x, this.y+3);
    }
}


  // declaraciones


  var board = new Board();
  var rainDrop1 = new RainDrop();
  var frames = 0;
  var drops = [];
  
    
  var teclaInput = document.getElementById("numerosCalculadora"); 
  var teclaNumber9 = document.getElementById("9");
  var teclaNumber8 = document.getElementById("8");
  var teclaNumber7 = document.getElementById("7");
  var teclaNumber6 = document.getElementById("6");
  var teclaNumber5 = document.getElementById("5");
  var teclaNumber4 = document.getElementById("4");
  var teclaNumber3 = document.getElementById("3");
  var teclaNumber2 = document.getElementById("2");
  var teclaNumber1= document.getElementById("1");
  var teclaNumber0 = document.getElementById("0");
  var teclaResult = document.getElementById('result');
  var teclaClear = document.getElementById('clear');
  var number = document.querySelectorAll('.numbers div');

  var intervalo;


  
    

    // FUNCIONES

  function gameOver()
  {
    stop();
    ctx.font = "120px courier";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 8 ;
    ctx.strokeText("Gameover", 50, 200);
    
  }

function creaRainDropTime()
  {
 
      drops.push(new RainDrop(), new RainDrop);
    
 
  }



//main

teclaClear.addEventListener("click", function()
{
 teclaInput.value = "";
 }
)
teclaNumber9.addEventListener("click", function()
{
 teclaInput.value += 9;
 }
)
teclaNumber8.addEventListener("click", function()
{
 teclaInput.value += 8;
 }
)
teclaNumber7.addEventListener("click", function()
{
 teclaInput.value +=7;
 }
)
teclaNumber6.addEventListener("click", function()
{
 teclaInput.value += 6;
 }
)
teclaNumber5.addEventListener("click", function()
{
 teclaInput.value += 5;
 }
)
teclaNumber4.addEventListener("click", function()
{
 teclaInput.value += 4;
 }
)
teclaNumber3.addEventListener("click", function()
{
 teclaInput.value += 3;
 }
)
teclaNumber2.addEventListener("click", function()
{
 teclaInput.value +=2;
 }
)
teclaNumber1.addEventListener("click", function()
{
 teclaInput.value +=1;
 }
)
teclaNumber0.addEventListener("click", function()
{
 teclaInput.value += 0;
 }
)

teclaResult.addEventListener("click", function()
{
 
  var z = teclaInput.value
  console.log(z);
  console.log(typeof z);
  z = parseInt(z);
 
  drops.forEach(function(resultado, index){

    if (z == resultado.resultadoRainDrop){
      drops.splice(index, 1);
    }

    teclaInput.value = "";

  });
}

)

function stop()
{
  clearInterval(intervalo);
  intervalo = 0;
}


function update ()

{
  frames ++;
  board.draw();
  if (frames >0)
  {
    drops.forEach(function (drop)
    {
      drop.draw();
      drop.move();
    })


  }
  board.drawScore();
  if(frames%100 == 0){
    creaRainDropTime();


  }
}


function startGame() {

    if (intervalo >0) return;
    intervalo = setInterval(function(){
      update();
  }, 1000/60);
}

window.onload = function() 
{
  board.draw();
  document.getElementById("start-button").onclick = function() 
  {
    startGame();
  };
}