/**
 * This class represents a Triangle based Pyramid and can calculae its aurface area, lateral surface area, volume
 */
export default class TriangleBasePyramid {
  /**
   * @param {number} height - The height of the Pyramid.
   * @param {Triangle} baseTriangle - The object `new Triangle()` representing the base Triangle of the Pyramid.
   */
  constructor(height, baseTriangle) {
    this.height = height
    this.baseTriangle = baseTriangle

    this.#vaildateParams()
  }

  #vaildateParams = () => {
    if(typeof this.height !== "number") throw new Error(`Expedted type number for height, instead received ${typeof this.height}`)
  }

  volume = () => {
    return 1/3 * this.baseTriangle.area() * this.height
  }

  lateralSurfaceArea = () => {
    let a = this.baseTriangle.sides.side1
    let b = this.baseTriangle.sides.side2
    let c = this.baseTriangle.sides.side3
    let A = this.baseTriangle.angles.angle1
    let B = this.baseTriangle.angles.angle2
    let C = this.baseTriangle.angles.angle3
    return 1/2*(a * Math.sqrt(this.height**2 + (b * Math.sin(C))**2) + b * Math.sqrt(this.height**2 + (c * Math.sin(A))**2) + c * Math.sqrt(this.height**2 + (a * Math.sin(B))**2))
  }

  surfaceArea = () => {
    return this.baseTriangle.area() + this.lateralSurfaceArea()
  }
}