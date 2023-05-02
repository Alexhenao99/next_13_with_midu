const iniciarAnimacion = () => {
  // Obtén el elemento canvas y su contexto de dibujo
  const canvas = document.getElementById('miCanvas')
  const ctx = canvas.getContext('2d')

  // Define las palabras que se mostrarán en la animación
  const words = ['Hola', 'Mundo', 'OpenAI', 'Globo']

  // Define el radio y la posición inicial del círculo
  const radius = 200
  let angle = 0

  // Define la función que dibuja el círculo y las palabras en una posición dada
  function drawCircle (x, y) {
    // Borra el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Dibuja cada palabra en su posición correspondiente
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      const wordAngle = angle + (2 * Math.PI * i) / words.length
      const x = canvas.width / 2 + radius * Math.cos(wordAngle)
      const y = canvas.height / 2 + radius * Math.sin(wordAngle)
      ctx.fillText(word, x, y)
    }

    // Incrementa el ángulo para animar el movimiento del círculo
    angle += 0.01
  }

  // Llama a la función de dibujo de forma repetida para animar el movimiento del círculo
  setInterval(() => {
    drawCircle()
  }, 10)

  // Agrega un evento para detectar cuando se mueve el cursor sobre el canvas
  canvas.addEventListener('mousemove', function (event) {
    // Calcula la posición del cursor
    const x = event.clientX - canvas.offsetLeft
    const y = event.clientY - canvas.offsetTop

    // Calcula el ángulo hacia el que se debe mover el círculo
    const dx = x - canvas.width / 2
    const dy = y - canvas.height / 2
    const targetAngle = Math.atan2(dy, dx)

    // Ajusta la velocidad de rotación del círculo hacia la dirección del cursor
    angle += (targetAngle - angle) * 0.1
  })

  // Inicializa el canvas
  ctx.font = '20px Arial'
  ctx.fillStyle = 'white'
}

export default iniciarAnimacion
