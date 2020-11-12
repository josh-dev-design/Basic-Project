const tableRow = document.querySelector('ul')
const subBtn = document.getElementById('submit')
const textInput = document.getElementById('text')
const nameInput = document.getElementById('name')

subBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!textInput.value){
        return alert("Enter some details")
    }
    const table = document.createElement('li')
    tableRow.appendChild(table)
    table.append(textInput.value)
    table.classList = "Todo-List"
    textInput.value = ''
})
