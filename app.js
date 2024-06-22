let num = +prompt(`Give me a number`)
let value
switch (num) {
  case 1:
    value = `One`
    break
  case 0:
    value = `Zero`
    break
  case -1:
    value = `Minus`
  break
  default:
    value = `Invalid number`
}
alert(`${value}`)
