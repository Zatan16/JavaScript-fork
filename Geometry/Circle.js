/**
 * This class represents a circle and can calculate its perimeter and area
 * https://en.wikipedia.org/wiki/Circle
*/
export default class Circle {
  /**
   * @param {number} radius - The radius of the circle.
   */
  constructor (radius) {
    this.radius = radius
  }

  #validateParams = () => {
    if(typeof this.radius !== "number") throw new Error(`Expected type number for radius, instead recieved ${typeof this.radius}`)
  }

  perimeter = () => {
    return this.radius * 2 * Math.PI
  }

  area = () => {
    return Math.pow(this.radius, 2) * Math.PI
  }
}
