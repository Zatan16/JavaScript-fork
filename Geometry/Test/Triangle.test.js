import Triangle from '../Triangle'

const triangle = new Triangle({side1: 1}, {angle1: Math.PI / 12, angle2: Math.PI / 4})
let getTwoDigitFloat = (num) => parseFloat(num.toFixed(2))
let props = {
  side1: getTwoDigitFloat(triangle.sides.side1),
  side2: getTwoDigitFloat(triangle.sides.side2),
  side3: getTwoDigitFloat(triangle.sides.side3),
  angle1: getTwoDigitFloat(triangle.angles.angle1),
  angle2: getTwoDigitFloat(triangle.angles.angle2),
  angle3: getTwoDigitFloat(triangle.angles.angle3),
};

test('The Sides and Angles of the triangle with side1 equal to 1, angle1 equal to PI/12 and angle2 equal to PI/4', () => {
  expect(JSON.stringify(props)).toEqual(JSON.stringify({side1: 1, side2: 2.73, side3: 3.35, angle1: 0.26, angle2: 0.79, angle3: 2.09}))
})

test('The Perimeter of the triangle with side1 equal to 1, angle1 equal to PI/12 and angle2 equal to PI/4', () => {
  expect(getTwoDigitFloat(triangle.perimeter())).toEqual(7.08)
})

test('The Area of the triangle with side1 equal to 1, angle1 equal to PI/12 and angle2 equal to PI/4', () => {
  expect(getTwoDigitFloat(triangle.area())).toEqual(1.18)
})
