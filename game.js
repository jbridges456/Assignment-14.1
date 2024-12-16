function playGame() {
    const number = Math.floor(Math.random() * 6) + 1;
    document.getElementById("gameResult").innerText = `You rolled a ${number}!`;
  }
  