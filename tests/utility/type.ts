import {setup} from '#testHelpers'

test('type into input', async () => {
  const {element, getEventSnapshot, user} = setup('<input value="foo"/>', {
    focus: false,
  })

  await user.type(element, 'bar')

  expect(element).toHaveValue('foobar')
  expect(getEventSnapshot()).toMatchInlineSnapshot(`
    Events fired on: input[value="foobar"]

    input[value="foo"] - pointerover
    input[value="foo"] - pointerenter
    input[value="foo"] - mouseover
    input[value="foo"] - mouseenter
    input[value="foo"] - pointermove
    input[value="foo"] - mousemove
    input[value="foo"] - pointerdown
    input[value="foo"] - mousedown: primary
    input[value="foo"] - select
    input[value="foo"] - focus
    input[value="foo"] - focusin
    input[value="foo"] - pointerup
    input[value="foo"] - mouseup: primary
    input[value="foo"] - click: primary
    input[value="foo"] - keydown: b
    input[value="foo"] - keypress: b
    input[value="foo"] - beforeinput
    input[value="foob"] - input
    input[value="foob"] - keyup: b
    input[value="foob"] - keydown: a
    input[value="foob"] - keypress: a
    input[value="foob"] - beforeinput
    input[value="fooba"] - input
    input[value="fooba"] - keyup: a
    input[value="fooba"] - keydown: r
    input[value="fooba"] - keypress: r
    input[value="fooba"] - beforeinput
    input[value="foobar"] - input
    input[value="foobar"] - keyup: r
  `)
})

test('type long text into input', async () => {
  const {element, getEventSnapshot, user} = setup('<input value="foo"/>', {
    focus: false,
  })

  await user.type(element, 'bar bar bar bar bar bar bar bar bar bar bar')

  expect(element).toHaveValue('foobar bar bar bar bar bar bar bar bar bar bar')
  expect(getEventSnapshot()).toMatchInlineSnapshot(`
    Events fired on: input[value="foobar bar bar bar bar bar bar bar bar bar bar"]
    
    input[value="foo"] - pointerover
    input[value="foo"] - pointerenter
    input[value="foo"] - mouseover
    input[value="foo"] - mouseenter
    input[value="foo"] - pointermove
    input[value="foo"] - mousemove
    input[value="foo"] - pointerdown
    input[value="foo"] - mousedown: primary
    input[value="foo"] - select
    input[value="foo"] - focus
    input[value="foo"] - focusin
    input[value="foo"] - pointerup
    input[value="foo"] - mouseup: primary
    input[value="foo"] - click: primary
    input[value="foo"] - keydown: b
    input[value="foo"] - keypress: b
    input[value="foo"] - beforeinput
    input[value="foob"] - input
    input[value="foob"] - keyup: b
    input[value="foob"] - keydown: a
    input[value="foob"] - keypress: a
    input[value="foob"] - beforeinput
    input[value="fooba"] - input
    input[value="fooba"] - keyup: a
    input[value="fooba"] - keydown: r
    input[value="fooba"] - keypress: r
    input[value="fooba"] - beforeinput
    input[value="foobar"] - input
    input[value="foobar"] - keyup: r
    input[value="foobar"] - keydown: Space
    input[value="foobar"] - keypress: Space
    input[value="foobar"] - beforeinput
    input[value="foobar "] - input
    input[value="foobar "] - keyup: Space
    input[value="foobar "] - keydown: b
    input[value="foobar "] - keypress: b
    input[value="foobar "] - beforeinput
    input[value="foobar b"] - input
    input[value="foobar b"] - keyup: b
    input[value="foobar b"] - keydown: a
    input[value="foobar b"] - keypress: a
    input[value="foobar b"] - beforeinput
    input[value="foobar ba"] - input
    input[value="foobar ba"] - keyup: a
    input[value="foobar ba"] - keydown: r
    input[value="foobar ba"] - keypress: r
    input[value="foobar ba"] - beforeinput
    input[value="foobar bar"] - input
    input[value="foobar bar"] - keyup: r
    input[value="foobar bar"] - keydown: Space
    input[value="foobar bar"] - keypress: Space
    input[value="foobar bar"] - beforeinput
    input[value="foobar bar "] - input
    input[value="foobar bar "] - keyup: Space
    input[value="foobar bar "] - keydown: b
    input[value="foobar bar "] - keypress: b
    input[value="foobar bar "] - beforeinput
    input[value="foobar bar b"] - input
    input[value="foobar bar b"] - keyup: b
    input[value="foobar bar b"] - keydown: a
    input[value="foobar bar b"] - keypress: a
    input[value="foobar bar b"] - beforeinput
    input[value="foobar bar ba"] - input
    input[value="foobar bar ba"] - keyup: a
    input[value="foobar bar ba"] - keydown: r
    input[value="foobar bar ba"] - keypress: r
    input[value="foobar bar ba"] - beforeinput
    input[value="foobar bar bar"] - input
    input[value="foobar bar bar"] - keyup: r
    input[value="foobar bar bar"] - keydown: Space
    input[value="foobar bar bar"] - keypress: Space
    input[value="foobar bar bar"] - beforeinput
    input[value="foobar bar bar "] - input
    input[value="foobar bar bar "] - keyup: Space
    input[value="foobar bar bar "] - keydown: b
    input[value="foobar bar bar "] - keypress: b
    input[value="foobar bar bar "] - beforeinput
    input[value="foobar bar bar b"] - input
    input[value="foobar bar bar b"] - keyup: b
    input[value="foobar bar bar b"] - keydown: a
    input[value="foobar bar bar b"] - keypress: a
    input[value="foobar bar bar b"] - beforeinput
    input[value="foobar bar bar ba"] - input
    input[value="foobar bar bar ba"] - keyup: a
    input[value="foobar bar bar ba"] - keydown: r
    input[value="foobar bar bar ba"] - keypress: r
    input[value="foobar bar bar ba"] - beforeinput
    input[value="foobar bar bar bar"] - input
    input[value="foobar bar bar bar"] - keyup: r
    input[value="foobar bar bar bar"] - keydown: Space
    input[value="foobar bar bar bar"] - keypress: Space
    input[value="foobar bar bar bar"] - beforeinput
    input[value="foobar bar bar bar "] - input
    input[value="foobar bar bar bar "] - keyup: Space
    input[value="foobar bar bar bar "] - keydown: b
    input[value="foobar bar bar bar "] - keypress: b
    input[value="foobar bar bar bar "] - beforeinput
    input[value="foobar bar bar bar b"] - input
    input[value="foobar bar bar bar b"] - keyup: b
    input[value="foobar bar bar bar b"] - keydown: a
    input[value="foobar bar bar bar b"] - keypress: a
    input[value="foobar bar bar bar b"] - beforeinput
    input[value="foobar bar bar bar ba"] - input
    input[value="foobar bar bar bar ba"] - keyup: a
    input[value="foobar bar bar bar ba"] - keydown: r
    input[value="foobar bar bar bar ba"] - keypress: r
    input[value="foobar bar bar bar ba"] - beforeinput
    input[value="foobar bar bar bar bar"] - input
    input[value="foobar bar bar bar bar"] - keyup: r
    input[value="foobar bar bar bar bar"] - keydown: Space
    input[value="foobar bar bar bar bar"] - keypress: Space
    input[value="foobar bar bar bar bar"] - beforeinput
    input[value="foobar bar bar bar bar "] - input
    input[value="foobar bar bar bar bar "] - keyup: Space
    input[value="foobar bar bar bar bar "] - keydown: b
    input[value="foobar bar bar bar bar "] - keypress: b
    input[value="foobar bar bar bar bar "] - beforeinput
    input[value="foobar bar bar bar bar b"] - input
    input[value="foobar bar bar bar bar b"] - keyup: b
    input[value="foobar bar bar bar bar b"] - keydown: a
    input[value="foobar bar bar bar bar b"] - keypress: a
    input[value="foobar bar bar bar bar b"] - beforeinput
    input[value="foobar bar bar bar bar ba"] - input
    input[value="foobar bar bar bar bar ba"] - keyup: a
    input[value="foobar bar bar bar bar ba"] - keydown: r
    input[value="foobar bar bar bar bar ba"] - keypress: r
    input[value="foobar bar bar bar bar ba"] - beforeinput
    input[value="foobar bar bar bar bar bar"] - input
    input[value="foobar bar bar bar bar bar"] - keyup: r
    input[value="foobar bar bar bar bar bar"] - keydown: Space
    input[value="foobar bar bar bar bar bar"] - keypress: Space
    input[value="foobar bar bar bar bar bar"] - beforeinput
    input[value="foobar bar bar bar bar bar "] - input
    input[value="foobar bar bar bar bar bar "] - keyup: Space
    input[value="foobar bar bar bar bar bar "] - keydown: b
    input[value="foobar bar bar bar bar bar "] - keypress: b
    input[value="foobar bar bar bar bar bar "] - beforeinput
    input[value="foobar bar bar bar bar bar b"] - input
    input[value="foobar bar bar bar bar bar b"] - keyup: b
    input[value="foobar bar bar bar bar bar b"] - keydown: a
    input[value="foobar bar bar bar bar bar b"] - keypress: a
    input[value="foobar bar bar bar bar bar b"] - beforeinput
    input[value="foobar bar bar bar bar bar ba"] - input
    input[value="foobar bar bar bar bar bar ba"] - keyup: a
    input[value="foobar bar bar bar bar bar ba"] - keydown: r
    input[value="foobar bar bar bar bar bar ba"] - keypress: r
    input[value="foobar bar bar bar bar bar ba"] - beforeinput
    input[value="foobar bar bar bar bar bar bar"] - input
    input[value="foobar bar bar bar bar bar bar"] - keyup: r
    input[value="foobar bar bar bar bar bar bar"] - keydown: Space
    input[value="foobar bar bar bar bar bar bar"] - keypress: Space
    input[value="foobar bar bar bar bar bar bar"] - beforeinput
    input[value="foobar bar bar bar bar bar bar "] - input
    input[value="foobar bar bar bar bar bar bar "] - keyup: Space
    input[value="foobar bar bar bar bar bar bar "] - keydown: b
    input[value="foobar bar bar bar bar bar bar "] - keypress: b
    input[value="foobar bar bar bar bar bar bar "] - beforeinput
    input[value="foobar bar bar bar bar bar bar b"] - input
    input[value="foobar bar bar bar bar bar bar b"] - keyup: b
    input[value="foobar bar bar bar bar bar bar b"] - keydown: a
    input[value="foobar bar bar bar bar bar bar b"] - keypress: a
    input[value="foobar bar bar bar bar bar bar b"] - beforeinput
    input[value="foobar bar bar bar bar bar bar ba"] - input
    input[value="foobar bar bar bar bar bar bar ba"] - keyup: a
    input[value="foobar bar bar bar bar bar bar ba"] - keydown: r
    input[value="foobar bar bar bar bar bar bar ba"] - keypress: r
    input[value="foobar bar bar bar bar bar bar ba"] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar"] - input
    input[value="foobar bar bar bar bar bar bar bar"] - keyup: r
    input[value="foobar bar bar bar bar bar bar bar"] - keydown: Space
    input[value="foobar bar bar bar bar bar bar bar"] - keypress: Space
    input[value="foobar bar bar bar bar bar bar bar"] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar "] - input
    input[value="foobar bar bar bar bar bar bar bar "] - keyup: Space
    input[value="foobar bar bar bar bar bar bar bar "] - keydown: b
    input[value="foobar bar bar bar bar bar bar bar "] - keypress: b
    input[value="foobar bar bar bar bar bar bar bar "] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar b"] - input
    input[value="foobar bar bar bar bar bar bar bar b"] - keyup: b
    input[value="foobar bar bar bar bar bar bar bar b"] - keydown: a
    input[value="foobar bar bar bar bar bar bar bar b"] - keypress: a
    input[value="foobar bar bar bar bar bar bar bar b"] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar ba"] - input
    input[value="foobar bar bar bar bar bar bar bar ba"] - keyup: a
    input[value="foobar bar bar bar bar bar bar bar ba"] - keydown: r
    input[value="foobar bar bar bar bar bar bar bar ba"] - keypress: r
    input[value="foobar bar bar bar bar bar bar bar ba"] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar bar"] - input
    input[value="foobar bar bar bar bar bar bar bar bar"] - keyup: r
    input[value="foobar bar bar bar bar bar bar bar bar"] - keydown: Space
    input[value="foobar bar bar bar bar bar bar bar bar"] - keypress: Space
    input[value="foobar bar bar bar bar bar bar bar bar"] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar bar "] - input
    input[value="foobar bar bar bar bar bar bar bar bar "] - keyup: Space
    input[value="foobar bar bar bar bar bar bar bar bar "] - keydown: b
    input[value="foobar bar bar bar bar bar bar bar bar "] - keypress: b
    input[value="foobar bar bar bar bar bar bar bar bar "] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar bar b"] - input
    input[value="foobar bar bar bar bar bar bar bar bar b"] - keyup: b
    input[value="foobar bar bar bar bar bar bar bar bar b"] - keydown: a
    input[value="foobar bar bar bar bar bar bar bar bar b"] - keypress: a
    input[value="foobar bar bar bar bar bar bar bar bar b"] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar bar ba"] - input
    input[value="foobar bar bar bar bar bar bar bar bar ba"] - keyup: a
    input[value="foobar bar bar bar bar bar bar bar bar ba"] - keydown: r
    input[value="foobar bar bar bar bar bar bar bar bar ba"] - keypress: r
    input[value="foobar bar bar bar bar bar bar bar bar ba"] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar bar bar"] - input
    input[value="foobar bar bar bar bar bar bar bar bar bar"] - keyup: r
    input[value="foobar bar bar bar bar bar bar bar bar bar"] - keydown: Space
    input[value="foobar bar bar bar bar bar bar bar bar bar"] - keypress: Space
    input[value="foobar bar bar bar bar bar bar bar bar bar"] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar bar bar "] - input
    input[value="foobar bar bar bar bar bar bar bar bar bar "] - keyup: Space
    input[value="foobar bar bar bar bar bar bar bar bar bar "] - keydown: b
    input[value="foobar bar bar bar bar bar bar bar bar bar "] - keypress: b
    input[value="foobar bar bar bar bar bar bar bar bar bar "] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar bar bar b"] - input
    input[value="foobar bar bar bar bar bar bar bar bar bar b"] - keyup: b
    input[value="foobar bar bar bar bar bar bar bar bar bar b"] - keydown: a
    input[value="foobar bar bar bar bar bar bar bar bar bar b"] - keypress: a
    input[value="foobar bar bar bar bar bar bar bar bar bar b"] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar bar bar ba"] - input
    input[value="foobar bar bar bar bar bar bar bar bar bar ba"] - keyup: a
    input[value="foobar bar bar bar bar bar bar bar bar bar ba"] - keydown: r
    input[value="foobar bar bar bar bar bar bar bar bar bar ba"] - keypress: r
    input[value="foobar bar bar bar bar bar bar bar bar bar ba"] - beforeinput
    input[value="foobar bar bar bar bar bar bar bar bar bar bar"] - input
    input[value="foobar bar bar bar bar bar bar bar bar bar bar"] - keyup: r
  `)
})

test('can skip the initial click', async () => {
  const {element, getEvents, user} = setup('<input value="foo"/>')

  await user.type(element, 'bar', {skipClick: true})

  expect(getEvents('click')).toHaveLength(0)
  expect(element).toHaveValue('barfoo')
})

test('type with initialSelection', async () => {
  const {element, user} = setup<HTMLTextAreaElement>(
    '<textarea>Hello World</textarea>',
  )

  await user.type(element, 'Frien', {
    initialSelectionStart: 6,
    initialSelectionEnd: 10,
  })

  expect(element).toHaveValue('Hello Friend')
})

describe('automatically release pressed keys', () => {
  test('release keys', async () => {
    const {element, getEvents, user} = setup('<input />')

    await user.type(element, '{meta>}{alt>}{control>}a{/alt}')

    expect(getEvents('keyup')).toHaveLength(4)
  })

  test('skipAutoClose', async () => {
    const {element, getEvents, user} = setup('<input />')

    await user.type(element, '{meta>}a', {skipAutoClose: true})

    expect(getEvents('keyup')).toHaveLength(1)
  })
})

test('do nothing on disabled element', async () => {
  const {element, getEvents, user} = setup('<input disabled/>')

  await user.type(element, 'foo')

  expect(getEvents()).toHaveLength(0)
})
