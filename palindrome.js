function checkPalindrome(event) {
    event.preventDefault();
    const word = document.getElementById("word").value.toLowerCase().replace(/[\s]/g, '');
    const isPalindrome = word === word.split('').reverse().join('');
    document.getElementById("result").innerText = isPalindrome
      ? `"${word}" is a palindrome!`
      : `"${word}" is not a palindrome.`;
  }
  