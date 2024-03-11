import Validator from '../Validator';

describe('Check name', () => {
  test('name checker case', () => {
    expect(new Validator("www2-32W2_3ww").validateUsername()).toEqual(true)
  })

  test('name checker case2', () => {
    expect(new Validator("www2-32W2_3ww2").validateUsername()).toEqual(false)
  })

  test('name checker case3', () => {
    expect(new Validator("2www2-32W2_3ww").validateUsername()).toEqual(false)
  })

  test('name checker case4', () => {
    expect(new Validator("www2-32W2_3ww-").validateUsername()).toEqual(false)
  })

  test('name checker case5', () => {
    expect(new Validator("www@2-32W2_3ww").validateUsername()).toEqual(false)
  })
})