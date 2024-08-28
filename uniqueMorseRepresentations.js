var uniqueMorseRepresentations = function (words) {
    let morseArr = words.map(item => {
        let morse = ''
        for (let i = 0; i < item.length; i++) {
            morse += map[item[i].charCodeAt() - 97]
        }
        return morse
    })
    let resArr = []
    for (let i = 0; i < morseArr.length; i++) {
        if (!resArr.includes(morseArr[i])) {
            resArr.push(morseArr[i])
        }
    }
    return resArr.length
};

const map = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
let words = ["gin", "zen", "gig", "msg"]

uniqueMorseRepresentations(words)