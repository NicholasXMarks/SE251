var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var timer = setInterval(main, 1000/60);





var ballColor = ["red", "blue", "yellow", "gray", "black", "green", "orange", "purple"];

function rand(low, high)
{
    return Math.random()*(high - low) + low;
}

var s = new GameObject();
s.color = "red";
s.vx = Math.round(rand(-10,10));
s.vy = Math.round(rand(-10,10));

function main()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    var newColor = ballColor[Math.round(rand(0,7))];
    console.log(newColor);

    s.color = newColor;

    if(s.x >= canvas.width - s.w)
    {
        s.vx = Math.round(rand(-10,-1));
    }
    if(s.x <= 0)
    {
        s.vx = Math.round(rand(1,10));
    }
    if(s.y >= canvas.height - s.h)
    {
        s.vy = Math.round(rand(-10,-1));
    }
    if(s.y <= 0)
    {
        s.vy = Math.round(rand(1,10));
    }
    s.move();
    s.draw();
}