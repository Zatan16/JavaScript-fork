/**
 * This class represents a cube and can calculate its volume, surface area and lateral surface area
 * https://en.wikipedia.org/wiki/Cube
*/
export default class Cube {
  /**
   * @param {number} side - The side of the Cube.
   */
  constructor(side) {
    this.side = side
  }

  volume = () => {
    return Math.pow(this.side, 3)
  }

  surfaceArea = () => {
    return 6 * Math.pow(this.side, 2)
  }

  lateralSurfaceArea = () => {
    return 4 * Math.pow(this.side, 2)
  }
}
