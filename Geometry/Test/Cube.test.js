import Cube from '../Cube'

const cube = new Cube(4)

test('The volme of a cube of side 4', () => {
  expect(cube.volume()).toBe(64)
})

test('The surface area of a cube of side 4', () => {
  expect(cube.surfaceArea()).toBe(96)
})

test('The surface area of a cube of side 4', () => {
  expect(cube.surfaceArea()).toBe(64)
})
