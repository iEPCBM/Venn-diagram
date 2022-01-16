class EDSet {
  #name;
  #x=75;
  #y=75;
  #r=50;
  #path;
  #value = [];
  constructor(name,x,y,value) {
    this.#name = name;
    this.#x = x;
    this.#y = y;
    this.#value = value;
    this.#path = new Path2D();
    this.#path.arc(this.#x, this.#y, this.#r, 0, 2 * Math.PI);
  }
  renderStroke(ctx) {
    ctx.stroke(this.#path);
  }
  renderTitle(ctx) {
    ctx.fillText(this.#name, this.#x, this.#y+5);
  }
  get value() {
    return this.#value;
  }
  get name() {
    return this.#name;
  }
}
