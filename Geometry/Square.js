/**
 * This class represents a square and can calculate its perimeter and area
 * https://en.wikipedia.org/wiki/Square
*/
export default class Square {
  /**
   * @param {number} side - The side of the square.
   */
  constructor(side) {
    this.side = side
  }

  perimeter = () => {
    return this.side * 4
  }

  area = () => {
    return Math.pow(this.side, 2)
  }
}
