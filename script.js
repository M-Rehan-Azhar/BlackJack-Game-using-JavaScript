let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let balance = 100
let playerName = prompt("Enter your name:")

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let balanceEl = document.getElementById("balance-el")
let playerNameEl = document.getElementById("player-name")

playerNameEl.textContent = playerName

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(" ")
    sumEl.textContent = "Sum: " + sum

    messageEl.classList.remove("win", "lose")

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        balance += 20
        messageEl.classList.add("win")
    } else {
        message = "You're out of the game!"
        isAlive = false
        balance -= 10
        messageEl.classList.add("lose")
    }

    balanceEl.textContent = "Balance: $" + balance
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function restartGame() {
    isAlive = false
    hasBlackJack = false
    cards = []
    sum = 0
    balance = 100
    message = "Want to play a round?"
    playerName = prompt("Enter your name:")
    playerNameEl.textContent = playerName
    renderGame()
    balanceEl.textContent = "Balance: $" + balance
    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
}