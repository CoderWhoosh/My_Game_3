class People{
    constructor(x, y, w, h){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("soldier.jpg");
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(-225);
        image(this.image,0,0,this.w,this.h);
        pop();

    }
}