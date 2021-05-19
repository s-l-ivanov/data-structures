import { isNumber } from './isNumber'

describe('test isNumber', () => {
  it('should be true', () => {
    expect(isNumber(3)).toEqual(true)
  })
})
