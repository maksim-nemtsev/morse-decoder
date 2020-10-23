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
    let res = '';

    for ( let i = 0; i < expr.length; i += 10) {
        let sub = expr.substring(i, i + 10);
        
        if ( sub === '**********' ) {
            res += ' ';
            continue;
        };
        let temp = '';
        
        for (let j = 0; j < 10; j += 2) {
            
            if ( sub.substring(j, j + 2) === '10' ) temp += '.';
            else if ( sub.substring(j, j + 2) === '11' ) temp += '-';
        }
        res += MORSE_TABLE[temp];
    }

    return res;
}

module.exports = {
    decode
}
