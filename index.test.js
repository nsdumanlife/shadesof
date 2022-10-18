/* eslint-disable no-undef */
const shadesOfGrey = require('./index')

describe('shadesOfGrey function', () => {
  test(`if n=1, should return ['#010101']`, () => {
    const result = shadesOfGrey(1)
    const expectedOutput = ['#010101']

    expect(result[0]).toBe(expectedOutput[0])
  })

  test('if n=10, should return ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]', () => {
    const result = shadesOfGrey(10)
    const expectedOutput = [
      '#010101',
      '#020202',
      '#030303',
      '#040404',
      '#050505',
      '#060606',
      '#070707',
      '#080808',
      '#090909',
      '#0a0a0a',
    ]

    expect(result.length).toBe(10)
    expect(result[1]).toBe(expectedOutput[1])
    expect(result[10]).toBe(expectedOutput[10])
    expect(result).toEqual(expectedOutput)
  })

  test('if n<=0, should return empty array', () => {
    const result = shadesOfGrey(0)

    expect(result.length).toBe(0)
  })

  test('if n<=0, should return empty array', () => {
    const result = shadesOfGrey(-2)

    expect(result.length).toBe(0)
  })

  test('if n> 254, should return an array of 254 elements', () => {
    const result = shadesOfGrey(999)

    expect(result.length).toBe(254)
  })

  test(`if n is not a number, should throw error message 'n must be a number.'`, () => {
    expect(() => shadesOfGrey('nsd')).toThrow(`'n' must be a number.`)
  })
})
