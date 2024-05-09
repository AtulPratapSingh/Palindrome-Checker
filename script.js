
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr === reverseStr;
}

function palindromeChecker() {
    const inputText = document.getElementById("inputtext").value;
    const result = document.getElementById('result');

    if (isPalindrome(inputText)) {
        result.textContent = "It's a palindrome!";
    } else {
        result.textContent = "It's not a palindrome!";
    }
}

document.getElementById("checkbtn").addEventListener("click", palindromeChecker);
