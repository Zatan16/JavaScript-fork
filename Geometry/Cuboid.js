/**
 * This class represents a cuboid and can calculate its volume, surface area and lateral surface area
 * https://en.wikipedia.org/wiki/Cuboid
 */
export default class Cuboid {
  /**
   * @param {number} length - The length of the Cuboid.
   * @param {number} width - The breadth/width of the Cuboid.
   * @param {number} height - The height of the Cuboid.
   */
  constructor(length, width, height) {
    this.length = length
    this.width = width
    this.height = height
  }

  surfaceArea = () => {
    return 2 * (this.length * this.width + this.width * this.height + this.height * this.length)
  }

  lateralSurfaceArea = () => {
    return 2 * (this.width * this.height + this.length * this.height)
  }

  area = () => {
    return this.length * this.breadth * this.width
  }
}