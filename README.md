![example workflow](https://github.com/nsdumanlife/shades-of-grey/actions/workflows/pr.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Coverage Status](https://coveralls.io/repos/github/nsdumanlife/shades-of-grey/badge.svg?branch=main)](https://coveralls.io/github/nsdumanlife/shades-of-grey?branch=main)

# shades-of-grey

A library that takes a number n as a parameter and return an array containing n shades of grey in hexadecimal code. There are 254 shades of grey in this library. First shade of the grey is `#010101` , second one `#020202` and the last one is `#FEFEFE`.

## &nbsp;

## Installation

---

Install the library:

```sh
npm install shades-of-grey
```

&nbsp;

## Usage

---

Import and call it in a file by passing an integer instead of 'n'.

```ruby
const shadesOfGrey = require('shades-of-grey')

shadesOfGrey(n)
```

```sh
node example.js
```

### Examples :

```ruby
console.log(shadesOfGrey(1))
// Output: ["#010101"]
```

```ruby
console.log(shadesOfGrey(5))
// Output: ["#010101", "#020202", "#030303", "#040404", "#050505"]
```

&nbsp;

## TODO

---

- Add other main colors
- Pick random shade of a color feature

This library work in progress. Feel free to contribute!

&nbsp;

## Licence

---

MIT License

Copyright (c) 2022 Numan Selman Duman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
