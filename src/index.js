function init () {
  const element = document.createElement('div')
  element.innerHTML = 'WORKS!'

  return element
}

document.body.appendChild(init())
