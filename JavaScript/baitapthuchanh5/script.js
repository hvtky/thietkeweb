var tasks = []

function add(value) {
    const rows = document.querySelector('.rows')
    const li = document.createElement('li')
    li.className = 'row'
    const task = document.createElement('textNode')
    task.className = 'task'
    task.innerHTML = value
    const btn_del = document.createElement('textNode')
    btn_del.className = 'btn_del'
    btn_del.innerHTML = 'x'
    btn_del.addEventListener('click', () => {
        tasks = tasks.filter(e => e.task!== value)
        localStorage.setItem('myTasks', JSON.stringify(tasks))
        rows.removeChild(li)
    })
    li.appendChild(task)
    li.appendChild(btn_del)
    rows.appendChild(li)
    const newTask = {task: value}
    tasks.push(newTask)
    localStorage.setItem('myTasks', JSON.stringify(tasks))
    document.querySelector('#input_text').value = ''
}

function getValue() {
    const value = document.querySelector('#input_text').value
    if (value === '') {
        alert('Invalid Data Type')
    } else {
        add(value)
    }
}

(() => {
    let items = localStorage.getItem('myTasks')
    if (items !== null) {
        let tasks = JSON.parse(items)
        tasks.forEach((id) => {
            add(id.task)
        })
    }
})()

const btn_add = document.querySelector('#btn_add')
btn_add.addEventListener('click', getValue)

