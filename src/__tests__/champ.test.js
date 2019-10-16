import { getName } from '../index'

describe('champ', () => {
  test('should render a string', () => {
    expect(typeof getName()).toBe('string')
  })

  test('should render the same name for a seeded value', () => {
    expect(getName(2)).toBe(getName(2))
    expect(getName(3)).toBe(getName(3))
    expect(getName(5)).toBe(getName(5))
  })
})
