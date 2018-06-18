const musix = require('musix')
const express = require('express')
const app = express()

let Cmajor = new musix.Scale(
  {
    "name": "major",
    "key": new musix.Note('C')
  }
)
console.log(Cmajor.notes)
