import Validator from '../Validator';

describe('Check name', () => {
  test('name checker', () => {
    expect(new Validator("www2-32W2_3ww").validateUsername()).toEqual(true)
  })

  test('name checker', () => {
    expect(new Validator("www2-32W2_3ww2").validateUsername()).toEqual(false)
  })

  test('name checker', () => {
    expect(new Validator("2www2-32W2_3ww").validateUsername()).toEqual(false)
  })

  test('name checker', () => {
    expect(new Validator("www2-32W2_3ww-").validateUsername()).toEqual(false)
  })

  test('name checker', () => {
    expect(new Validator("www@2-32W2_3ww").validateUsername()).toEqual(false)
  })
})