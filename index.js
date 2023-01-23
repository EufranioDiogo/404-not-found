let btnChangeColor = document.querySelector('#change-color-btn');
let corIsBranca = true;


btnChangeColor.addEventListener('click', (e) => {
  if (corIsBranca == true) {
    document.body.style.background = '#222'
    document.body.style.color = '#fff'
    document.querySelector('.main-404-title').style.color = '#fff';
  
    btnChangeColor.innerText = 'Light';
    btnChangeColor.style.color = '#333'
    btnChangeColor.style.background = "#fff"
    corIsBranca = false;
  } else {
    document.body.style.background = '#fff'
    document.body.style.color = '#333'
    document.querySelector('.main-404-title').style.color = '#333';
  
    btnChangeColor.innerText = 'Dark';
    btnChangeColor.style.color = '#fff'
    btnChangeColor.style.background = "#333"
    corIsBranca = true;
  }
})