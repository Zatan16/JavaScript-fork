/**
 * This class represents a Triangle based Pyramid and can calculae its aurface area, lateral surface area, volume
 */
export default class TriangleBasePyramid {
  /**
   * @param {number} height - The height of the Pyramid.
   * @param {number} baseSide - The length of the side of base triangle of the Pyramid.
   */
  constructor(height, baseSide) {
    this.height = height;
    this.baseSide = baseSide;
  }

  volume = () => {
    return Math.pow(this.baseSide, 2) * this.height / (sqrt(3) * 4);
  }

  surfaceArea = () => {
    return 
  }
}