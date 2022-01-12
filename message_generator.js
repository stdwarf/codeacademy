var randomStr = require('random-words')

function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

let message = []
let numsString = generateRandomNumber(10)
let wordsPerString = generateRandomNumber(10)
console.log(numsString,wordsPerString)

for(let i = numsString; i > 0; i--){
    message.push(randomStr({ exactly: 1, wordsPerString:wordsPerString, formatter: (word, index)=> {
        return index === 0 ? word.slice(0,1).toUpperCase().concat(word.slice(1)) : word;
    }}))
}


function formatMessage(message) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = message.join('\n')
    console.log(formatted)
  }

formatMessage(message)