const bodyEl = document.querySelector('body')
const inputEl = document.querySelector('.input')

inputEl.checked = JSON.parse(localStorage.getItem('mode'))

const updateBody = () => {
    if(inputEl.checked){
        bodyEl.style.background = 'black'
        return
    }
    bodyEl.style.background = 'white'
}

const updateLocalStorage = () => {
    localStorage.setItem('mode', JSON.stringify(inputEl.checked))
}

inputEl.addEventListener('click', () => {
    updateBody()
    updateLocalStorage()
})

updateBody()