const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let newArr = [];
    let out = [];
    for (let i = 0; i < expr.length; i = i + 10) {
      arr.push(expr.substr(i, 10));
    }
    console.log(arr);
    arr.forEach(el => {
      let elArr = el.split('');
      let a = [];
      for (let i = 0; i < 5; i++) {
        let num = [];
        for (let k = 0; k < 2; k++) {
          num.push(elArr.shift([k]));   
        }
        a.push(num.join(''));
      }
      newArr.push(a);
    })
    newArr.forEach(el => {
      for (let i = 0; i < el.length; i++) {
        if (el[i] == '00') {
          el[i] = '';
        }
        if (el[i] === "11") {
          el[i] = "-";
        }
        if (el[i] === "10") {
          el[i] = ".";
        }
      }
    })
    newArr = newArr.map((item) => item.join(''));
    for (let i of newArr) {
      for (let [key, value] of Object.entries(MORSE_TABLE)) {
        if (i == key) {
            out.push(value);
        }
        if (i == '**********') {
            out.push(' ');
            break;
        }
      }
    }
    return out.join('');
}

module.exports = {
    decode
}