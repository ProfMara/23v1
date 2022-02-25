class Caixa {
    constructor(x, y, w, h) {
        var mexendo = { isStatic: false, restitution: 0.8 };
        this.body = Bodies.rectangle(x, y, w, h, mexendo);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
        pop();

    }
}