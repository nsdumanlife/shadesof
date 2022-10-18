/* eslint-disable no-plusplus */
function shadesOfGrey(n) {
  if (!Number.isInteger(n)) throw new Error(`'n' must be a number.`)
  if (n <= 0) return []

  const shades = ['#010101']

  for (let i = 1; i < Math.min(n, 254); i++) {
    let temp = '010101'
    temp = (parseInt(temp, 16) + i * 0x010101).toString(16)

    if (temp.length < 6) temp = `0${temp}`

    shades.push(`#${temp}`)
  }

  return shades
}

module.exports = shadesOfGrey

// This line just added for test.
