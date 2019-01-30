export class Car {

  constructor(public manufacturer: string, public type: string, public prodDate: Date, public color?: string) {
  }

  setColor(color: string) {
    this.color = color;
  }

}
