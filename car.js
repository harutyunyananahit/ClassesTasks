// Task 1
/*Create a constructor function for a car.
  That function should get 3 arguments:
  1) brand
  2) color
  3) type // (sedan, van, etc.)
  The instance of car should have:
  1) method "drive" which logs "Somebody is driving a car"
  2) method "turnOffEngine" which logs "The engine is turned off"
  3) method "turnOnEngine" which logs "The engine is turned on"
  4) properties brand, color, type, which are assigned using
  the argument the function get while called
  5) add a prototype function "addPetrol" which logs
  "Petrol is added to the car *brandOfTheCar*"
  where *brandOfTheCar* is a brand of the car
  6) add a prototype function "repaintCar" which gets one argument,
  changes color of the car to the given color and
  7) add a static function "whatIsSedan" which logs "sedan is a car :D" */
class  Car {
  constructor(brand, color, type) {
    this._brand = brand;
    this._color = color;
    this._type = type;
  }
  drive() {
    console.log("Somebody is driving a car");
  }
  turnOffEngine() {
    console.log("The engine is turned off");
  }
  turnOnEngine() {
    console.log("The engine is turned on");
  }
  get brand() {
    return this._brand;
  }
  get color(){
    return this._color;
  }
  get type() {
    return this._type;
  }
  addPetrol() {
    console.log('Petrol is added to the car' , this._type)
  }
  repaintCar(newcolor) {
    this._color = newcolor;
  }
  static whatIsSedan() {
    console.log("Sedan is a car :D");
  }
}
// Task 2
/*Do the previous task with "class"
  1) create a subclass Sedan which is inherited from Car
  2) add a constructor function to Sedan,
  which gets only 2 arguments: brand and color
  3) add a prototype function "shine" to Sedan which logs "this car shines!"*/
class Sedan extends Car {
  constructor(brand, color) {
    this._brand = brand;
    this._color = color;
  }
  shine() {
    console.log("this car shines!");
  }
}


let myObj = new Car("Honda", "gray", "15");
console.log(myObj.color);
