let selectedOperation = 'encrypt'; // Default to 'encrypt'

function selectOperation(operation) {
    selectedOperation = operation;
    // Highlight the selected operation button
    const encryptButton = document.getElementById('encrypt');
    const decryptButton = document.getElementById('decrypt');
    
    if (operation === 'encrypt') {
        encryptButton.style.backgroundColor = '#43ccb5';
        decryptButton.style.backgroundColor = '#006564';
    } else {
        encryptButton.style.backgroundColor = '#006564';
        decryptButton.style.backgroundColor = '#43ccb5';
    }
}

// Caesar Cipher function remains the same
function caesarCipher(text, shift, operation) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (alphabet.includes(char)) {
            let index = alphabet.indexOf(char);
            if (operation === 'encrypt') {
                result += alphabet[(index + shift) % 26];
            } else {
                result += alphabet[(index - shift + 26) % 26];
            }
        } else if (lowerAlphabet.includes(char)) {
            let index = lowerAlphabet.indexOf(char);
            if (operation === 'encrypt') {
                result += lowerAlphabet[(index + shift) % 26];
            } else {
                result += lowerAlphabet[(index - shift + 26) % 26];
            }
        } else {
            result += char; // Non-alphabetical characters are unchanged
        }
    }
    return result;
}

function performOperation() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);
    const resultText = caesarCipher(text, shift, selectedOperation);
    
    document.getElementById('output').textContent = resultText;
}
