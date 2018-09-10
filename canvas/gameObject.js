class GameObject
{
    constructor()
    {
        this.x=canvas.width/2;
        this.y=canvas.height/2;
        this.w=10;
        this.h=10;
        this.vy=0;
        this.vx=0;
        this.color="gold";
    }

    draw()
    {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle=this.color;
        ctx.fillRect(0, 0, this.w, this.h);
        ctx.restore();
    }

    move()
    {
        this.x+=this.vx;
        this.y+=this.vy;
    }
}
