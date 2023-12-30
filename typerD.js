let words = [
"ALGORITHM",
"COMPUTER",
"KEYBOARD",
"SOFTWARE",
"FIREWALL",
"PROCESSOR",
"DATABASE",
"INTERNET",
"BLUETOOTH",
"ENCRYPTION",
"CYBERSECURITY",
"ARTIFICIAL",
"OPERATING",
"PASSWORD",
"SPREADSHEET",
"PERIPHERAL",
"MALWARE",
"PROTOCOL",
"DIRECTORY",
"BROWSER",
"HYPERLINK",
"JAVASCRIPT",
"PROCESSOR",
"WEBMASTER",
"PROGRAMMED",
"MEMORY",
"FREEWARE",
"MOTHERBOARD",
"VIRTUALIZATION",
"MULTITASKING",
"DEBUGGING",
"COMPILER",
"DEBUGGER",
"ANALYTICS",
"ETHERNET",
"AUTOCOMPLETE"]

//Creá la Función randomWords y ejecutala en la consola. Antes de avanzar, asegúrate que retorne una palabra aleatoria.

  function randomWords () {
    return words[Math.floor(Math.random()*words.length)]
  }

//Declará la variables palabraAleatoria, time (que empiece en 10) y score (que empiece en 0) .

  let palabraAleatoria = randomWords()
  let time = 10
  let score = 0

//Escribí la función addToDOM que le agrega una palabra random al h1 e invocala.

  function addToDOM () {
    palabraAleatoria = randomWords()
    document.querySelector("#randomWord").textContent = palabraAleatoria
  }
    
  addToDOM()

//Escribí el Evento que se aplica al input referenciado de tipo text.

  let input = document.querySelector("input")

//Creá la Función del Evento que tenga un parámetro "e" (que usarás más adelante).
//Creá una variable que se llame palabraIngresada.
//Compará las variables palabraIngresada y palabraAleatoria. Probá que todo funcione correctamente.

  input.addEventListener("keyup", function (e) {
    let palabraIngresada = input.value.toUpperCase()
    if (palabraAleatoria === palabraIngresada) {
        time = time + 3
        document.getElementById("text").value = ""
        addToDOM()
        updateScore()
    }
  })

//Declará la Función actualizarTiempo en donde la variable time haga una cuenta regresiva de 1 en 1. Esta acción deberá verse en pantalla.

  

  function actualizarTiempo () {
      time --
      if (time === 0) {
      clearInterval(timeInterval)
      gameOver()
      }
      document.querySelector("#timeSpan").textContent = time + "s"
  }

//Creá la variable llamada timeInterval.

  let timeInterval = setInterval(actualizarTiempo, 1000)

//Creá la Función updateScore la cual incrementara la variable score en 1 en 1.
//Añadí tu variable score al elemento HTML referenciado con el id score.

  function updateScore () {
    score ++
    document.querySelector("#score").textContent = score
  }

//Creá la Función gameOver que tiene como finalidad agregar elementos al contenedor con el id end-game-container.

  function gameOver () {
    let main = document.querySelector('.main')
    main.remove()
    let endGame = document.querySelector("#end-game-container")
    let h2 = document.createElement("h2")
    endGame.appendChild(h2)
    h2.textContent = "Te quedaste sin tiempo :("
    let parrafo = document.createElement("p")
    endGame.appendChild(parrafo)
    parrafo.textContent = `Acumulaste ${score} puntos`
    let boton = document.createElement("button")
    endGame.appendChild(boton)
    boton.innerHTML = "Volver a empezar" 
    boton.setAttribute("onclick","location.reload()")
    let br1 = document.createElement("br")
    endGame.appendChild(br1)
    let br2 = document.createElement("br")
    endGame.appendChild(br2)
  }


