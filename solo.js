class Solo {
    constructor(x, y, w, h) {
        var parado = { isStatic: true };
        this.body = Bodies.rectangle(x, y, w, h, parado);
        this.width = w;
        this.height = h
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
        pop();

    }
}