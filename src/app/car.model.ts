export class Car {

  public color: string;

  constructor(public manufacturer: string, public type: string, public prodDate: Date) {
  }

  setColor(color: string) {
    this.color = color;
  }

}
