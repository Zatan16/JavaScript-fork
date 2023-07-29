/**
 * This class represents a rectangle and can calculate its perimeter and area
 * http://en.wikipedia.org/wiki/Rectangle
 */
export default class Rectangle {
  /**
   * @param {number} length - The length of the Rectangle.
   * @param {number} breadth - The breadth of the Rectangle.
   */
  constructor(length, breadth) {
    this.length = length
    this.breadth = breadth
  }

  perimeter = () => {
    return (this.length + this.breadth) * 2
  }

  area = () => {
    return this.length * this.breadth
  }
}
