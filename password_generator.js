const getPassword = (passwordLength) => {
    const getRandomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }
    
    let password = '';
    
    const getRandomChar = () => {
    
        const symbols = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '!', '@', '#', '$', '%', '^', '&', '*', '_', '+', '/', '?', ';', ':'];
    
        for (let i = 0; i < passwordLength; i++) {
            const randomNumber = getRandomNumber(symbols.length);
            password += symbols[randomNumber];
        }
        
    }
    
    getRandomChar();
    
    console.log(password)
}

getPassword(12)