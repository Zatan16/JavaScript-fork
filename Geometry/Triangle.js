/**
 * This class represents a triangle and can calculate its perimeter, area, other sides and angles.
 * **Please note that only 3 properties should be provided, and one should be a side**
 * https://en.wikipedia.org/wiki/Triangle \
 * The sides and angles are calculated using formulae taken from https://www.calculator.net/triangle-calculator.html
 */
export default class Triangle {
  /**
 * @param {{side1: number, side2: number, side3: number}} sides - The sides of the triangle
 * > side1: First side of the Triangle.\
 * > side2: Second side of the Triangle.\
 * > side3: Third side of the Triangle.
 * @param {{angle1: number, angle2: number, angle3: number}} angles - The angles of the triangle
 * > angle1: The angle opposite to side 1.\
 * > angle2: The angle opposite to side 2.\
 * > angle3: The angle opposite to side 3.
 */
  constructor(sides, angles) {
    this.sides = sides
    this.angles = angles

    this.#validateParams()
    this.#calculateAllParams()
  }

  #validateParams = () => {
    // Number of Parameters (sides, angles) provided
    let numberOfSidesProvided = 0, numberOfAnglesProvided = 0
    if(this.sides.side1) numberOfSidesProvided++
    if(this.sides.side2) numberOfSidesProvided++
    if(this.sides.side3) numberOfSidesProvided++
    if(this.angles.angle1) numberOfAnglesProvided++
    if(this.angles.angle2) numberOfAnglesProvided++
    if(this.angles.angle3) numberOfAnglesProvided++

    // Validate number of required params
    if(numberOfSidesProvided + numberOfAnglesProvided !== 3) throw new Error(`Expected only 3 properties of the triangle, instead received ${this.sides.length + this.angles.length} properties`)
    if(numberOfSidesProvided < 1) throw new Error(`Expected atleast one side of the triangle, instead none were provided`)

    // Validate type of params
    let areNumbers = (x) => {
      let state = true
      for(let i = 0; i < x.length; i++) {
        if(typeof x[i] !== "number") state = false
      }
      return state
    }

    if(!areNumbers(Object.values(this.sides)) && !areNumbers(Object.values(this.angles))) throw new Error(`Expected type numbers for the properties of triangles, instead received: sides: {side1: ${typeof this.sides.side1}, side2: ${typeof this.sides.side2}, side3: ${this.sides.side3}}, angles: {angle1: ${typeof this.angles.angle1}, angle2: ${typeof this.angles.angle2}, angle3: ${typeof this.angles.angle3}}`)
  }

  #calculateAllParams = () => {
    let a = this.sides.side1
    let b = this.sides.side2
    let c = this.sides.side3
    let A = this.angles.angle1
    let B = this.angles.angle2
    let C = this.angles.angle3

    if(a && b && c) {
      A = Math.acos((b**2 + c**2 - a**2) / (2 * b * c))
      B = Math.acos((a**2 + c**2 - b**2) / (2 * a * c))
      C = Math.acos((a**2 + b**2 - c**2) / (2 * a * b))
    }

    if(!a && b && c) {
      if(A) {
        a = Math.sqrt(b**2 + c**2 - 2 * b * c * Math.cos(A))
        B = Math.acos((a**2 + c**2 - b**2)/(2 * a * c))
        C = Math.acos((a**2 + b**2 - c**2)/(2 * a * b))
      }

      if(B) {
        C = Math.asin(c * Math.sin(B) / b)
        A = Math.PI - B - C
        a = b * Math.sin(A) / Math.sin(B)
      }

      if(C) {
        B = Math.asin(b * Math.sin(C) / c)
        A = Math.PI - B - C
        a = c * Math.sin(A) / Math.sin(C)
      }
    } else {
      if(!A) {
        A = Math.PI - B - C
        b = a * Math.sin(B) / Math.sin(A)
        c = a * Math.sin(C) / Math.sin(A)
      }

      if(!B) {
        B = Math.PI - A - C
        b = a * Math.sin(B) / Math.sin(A)
        c = a * Math.sin(C) / Math.sin(A)
      }

      if(!C) {
        C = Math.PI - A - B
        b = a * Math.sin(B) / Math.sin(A)
        c = a * Math.sin(C) / Math.sin(A)
      }
    }

    if(a && !b && c) {
      if(B) {
        b = Math.sqrt(a**2 + c**2 - 2 * a * c * Math.cos(B))
        A = Math.acos((b**2 + c**2 - a**2)/(2 * b * c))
        C = Math.acos((b**2 + a**2 - c**2)/(2 * b * a))
      }

      if(A) {
        C = Math.asin(c * Math.sin(A) / a)
        B = Math.PI - A - C
        b = a * Math.sin(B) / Math.sin(A)
      }

      if(C) {
        A = Math.asin(a * Math.sin(C) / c)
        B = Math.PI - A - C
        b = c * Math.sin(B) / Math.sin(C)
      }
    } else {
      if(!A) {
        A = Math.PI - B - C
        a = b * Math.sin(A) / Math.sin(B)
        c = b * Math.sin(C) / Math.sin(B)
      }

      if(!B) {
        B = Math.PI - A - C
        a = b * Math.sin(A) / Math.sin(B)
        c = b * Math.sin(C) / Math.sin(B)
      }

      if(!C) {
        C = Math.PI - A - B
        a = b * Math.sin(A) / Math.sin(B)
        c = b * Math.sin(C) / Math.sin(B)
      }
    }

    if(a && b && !c) {
      if(C) {
        c = Math.sqrt(b**2 + a**2 - 2 * b * a * Math.cos(C))
        C = Math.acos((c**2 + a**2 - b**2)/(2 * c * a))
        A = Math.acos((c**2 + b**2 - a**2)/(2 * c * b))
      }

      if(B) {
        A = Math.asin(a * Math.sin(B) / b)
        C = Math.PI - B - A
        c = b * Math.sin(C) / Math.sin(B)
      }

      if(A) {
        B = Math.asin(b * Math.sin(A) / b)
        C = Math.PI - B - A
        c = a * Math.sin(C) / Math.sin(A)
      }
    } else {
      if(!A) {
        A = Math.PI - B - C
        b = c * Math.sin(B) / Math.sin(C)
        a = c * Math.sin(A) / Math.sin(C)
      }

      if(!B) {
        B = Math.PI - A - C
        b = c * Math.sin(B) / Math.sin(C)
        a = c * Math.sin(A) / Math.sin(C)
      }

      if(!C) {
        C = Math.PI - A - B
        b = c * Math.sin(B) / Math.sin(C)
        a = c * Math.sin(A) / Math.sin(C)
      }
    }

    this.sides = {side1: a, side2: b, side3: c}
    this.angles = {angle1: A, angle2: B, angle3: C}
  }

  area = () => {
    return this.sides.side1 * this.sides.side2 * Math.sin(this.angles.angle3) / 2
  }

  perimeter = () => {
    return this.sides.side1 + this.sides.side2 + this.sides.side3
  }
}
