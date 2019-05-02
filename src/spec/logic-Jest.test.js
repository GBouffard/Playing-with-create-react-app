import logic from '../logic'

describe('logic - ', function () {
  it('is not empty', () => {
    // expect.anything() matches anything but null or undefined.
    expect(logic).toEqual(expect.anything())
    expect(logic).toEqual(expect.objectContaining({
      myArray: [1, 2, 3, 4, 5],
      myNumber: expect.any(Number)
    }))
    expect(logic).toHaveProperty('sum')
    expect(Object.keys(logic)).toContain('myArray', 'myBoolean')
    // .toMatchObject checks that a JavaScript object matches a subset of the object.
    expect(logic).toMatchObject({ 'myBoolean': false })
    expect(logic).not.toEqual(expect.any(String))
    expect(logic).toBeInstanceOf(Object)
    expect(logic).not.toBeUndefined()
    expect(logic).not.toBeNull()
  })

  describe('multiple properties - ', () => {
    it('a string - multiple tests', () => {
      expect(logic.myString).toEqual(expect.any(String))
      expect(logic.myString).toMatch(/^this is/)
      expect(logic.myString).toContain('my value')
      expect(logic.myString).toEqual(expect.stringMatching(/value/))
      expect(logic.myString).not.toContain('whatever')
    })

    it('an array - multiple tests', () => {
      expect(logic.myArray).toEqual(expect.any(Array))
      expect(logic.myArray).toHaveLength(5)
      expect(logic.myArray.length).toBeGreaterThan(3)
      expect(logic.myArray.length).toBeGreaterThanOrEqual(4)
      expect(logic.myArray.length).toBeLessThan(7)
      expect(logic.myArray.length).toBeLessThanOrEqual(5)
      // .toBeCloseTo(number, numDigits) --> number: expected result / numDigits (how many digits after the decimal point to check)
      expect(logic.myArray[2]).toBeCloseTo(3, 5)
      expect(logic.myArray).toEqual(expect.arrayContaining([3, 2]))
    })

    it('a boolean - multiple tests', () => {
      expect(logic.myBoolean).not.toBeUndefined()
      expect(logic.myBoolean).toBe(false)
      expect(logic.myBoolean).not.toBe(true)
      expect(logic.myBoolean).not.toBeTruthy()
    })

    it('an error - multiple tests', () => {
      expect(logic.myError).toThrowError('this is an error!')
      expect(logic.myError).toThrow()
    })
  })

  it('sum function sums numbers', () => {
    expect(logic.sum(1, 2)).toEqual(3)
    expect(logic.sum(2, 2)).toEqual(4)

    // expect.extend can be used to add own matchers to Jest
    expect.extend({
      toBeDivisibleBy (received, argument) {
        const pass = (received % argument == 0)
        if (pass) {
          return {
            message: () => (
              `expected ${received} not to be divisible by ${argument}`
            ),
            pass: true
          }
        } else {
          return {
            message: () => (`expected ${received} to be divisible by ${argument}`),
            pass: false
          }
        }
      }
    })
    expect(logic.sum(2, 2)).toBeDivisibleBy(2)
  })
})
