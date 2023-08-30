/**
 * This class represents a circular cone and can calculate its volume and surface area
 * https://en.wikipedia.org/wiki/Cone
*/
export default class Cone {
  /**
   * @param {number} baseRadius - The radius of the base of the cone.
   * @param {number} height - The height of the cone
   */
  constructor (baseRadius, height) {
    this.baseRadius = baseRadius
    this.height = height
  }

  #validateParams = () => {
    if(typeof this.baseRadius !== "number") throw new Error(`Expected type number for base radius, instead received ${typeof this.baseRadius}`)
    if(typeof this.height !== "number") throw new Error(`Expected type number for height, instead received ${typeof this.height}`)
  }

  baseArea = () => {
    return Math.pow(this.baseRadius, 2) * Math.PI
  }

  volume = () => {
    return this.baseArea() * this.height * 1 / 3
  }

  surfaceArea = () => {
    return this.baseArea() + Math.PI * this.baseRadius * Math.sqrt(Math.pow(this.baseRadius, 2) + Math.pow(this.height, 2))
  }
}
