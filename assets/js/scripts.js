const currentNumber = document.getElementById("currentNumber")

const btnIncrement = document.getElementById("adicionar")
btnIncrement.addEventListener("click", increment)

function increment() {
  if (parseInt(currentNumber.innerHTML) < 10) {
    currentNumber.innerHTML = parseInt(currentNumber.innerHTML) + 1
  } else {
    alert("10 é o maior número.")
  }

  mudaCor()
}

const btnDecrement = document.getElementById("subtrair")
btnDecrement.addEventListener("click", decrement)

function decrement() {
  if (parseInt(currentNumber.innerHTML) > -10) {
    currentNumber.innerHTML = parseInt(currentNumber.innerHTML) - 1
  } else {
    alert("-10 é o menor número.")
  }

  mudaCor()
}

function mudaCor() {
  if (parseInt(currentNumber.innerHTML) < 0) {
    currentNumber.style.color = "red"
  } else {
    currentNumber.style.color = "black"
  }
}
