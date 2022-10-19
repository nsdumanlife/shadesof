/* eslint-disable no-plusplus */
function shadesOfGrey(n) {
  if (!Number.isInteger(n)) throw new Error(`Parameter must be a number.`)

  /* The grey color is composed by the same number of red, green and blue: #010101, #aeaeae, or #555555.
  Black: #000000 and white: #ffffff are not accepted values. So there are 254 shades of grey */
  const numberOfShades = 254

  const shades = []

  // There are 2 middle elements because numberOfShades array length is even
  let lighter = Math.floor((numberOfShades + 1) / 2)
  let darker = Math.ceil((numberOfShades + 1) / 2)

  for (let i = 1; i <= Math.min(n, numberOfShades); i++) {
    if (i % 2 === 0) {
      shades.push(darker)
      darker++
    } else {
      shades.push(lighter)
      lighter--
    }
  }

  return shades.map(x => `#${x.toString(16).repeat(3)}`)
}

module.exports = shadesOfGrey
