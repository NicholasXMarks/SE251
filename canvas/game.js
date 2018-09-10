var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var timer = setInterval(main, 1000/60);


var s = new GameObject();
s.color = "red";
s.vx = 5;
s.vy = 9;


function main()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(s.x >= canvas.width - s.w)
    {
        s.vx = -5;
    }
    if(s.x <= 0)
    {
        s.vx = 5;
    }
    if(s.y >= canvas.height - s.h)
    {
        s.vy = -9;
    }
    if(s.y <= 0)
    {
        s.vy = 9;
    }
    s.move();
    s.draw();
}