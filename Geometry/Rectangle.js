/**
 * This class represents a rectangle and can calculate its perimeter and area
 * http://en.wikipedia.org/wiki/Rectangle
 */
export default class Rectangle {
  /**
   * @param {number} length - The length of the Rectangle.
   * @param {number} width - The breadth/width of the Rectangle.
   */
  constructor(length, width) {
    this.length = length
    this.width = width
  }

  perimeter = () => {
    return (this.length + this.width) * 2
  }

  area = () => {
    return this.length * this.width
  }
}
