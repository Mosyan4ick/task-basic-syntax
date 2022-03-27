export function romanToInteger(str) {
    let result = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        let one = magic(str[i]);
        let two = magic(str[i + 1]);
        if (one < two) {
            result -= one;
        } else {
            result += one;
        }
    }
    return result;
}

function magic(str) {
    let answ;
    switch (str) {
        case 'I':
            answ = 1;
            break;
        case 'V':
            answ = 5;
            break;
        case 'X':
            answ = 10;
            break;
        case 'L':
            answ = 50;
            break;
        case 'C':
            answ = 100;
            break;
        case 'D':
            answ = 500;
            break;
        case 'M':
            answ = 1000;
            break;
    }
    return answ;
}
