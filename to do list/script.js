window.addEventListener('load', () => {
    const form = document.querySelector("#form");
    const input = document.querySelector("#input");

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        var val = input.value;
        if (!val) {
            alert("please insert something");
            return;
        }
        create_item(val)
        // create_div(val);
        input.value="";
    })
})


function create_item(item) {
    const arr_item = get_Item();
    arr_item.push(item);
    set_Item(arr_item);
    console.log(arr_item)
    create_div()
}

function create_div() {
    const element = document.getElementById("items");
    element.innerHTML = ''
    const arr_item = get_Item();

    arr_item.forEach((data, index) => {
        var item_div = document.getElementById("items")
        var task = document.createElement("div");
        task.classList.add("task");

        item_div.appendChild(task);

        var content = document.createElement("div");
        content.classList.add("content");

        task.appendChild(content);

        var inp = document.createElement("input");
        inp.classList.add("text");
        inp.type = "text";
        inp.value = data;
        inp.setAttribute("readonly", "readonly");

        content.appendChild(inp);

        var actions = document.createElement("div");
        actions.classList.add("actions");

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.onclick = () => editTask(index);
        edit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'

        var del = document.createElement("button");
        del.classList.add("delete");
        del.onclick = () => deleteTask(index);
        del.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

        actions.appendChild(edit);
        actions.appendChild(del);

        task.appendChild(actions);

    });
    console.log(arr_item)

}
function editTask(index) {
    const arr_item = get_Item();
    const updatedTask = prompt('Edit task:', arr_item[index]);

    if (updatedTask !== null) {
        arr_item[index] = updatedTask;
        set_Item(arr_item)
        create_div();
    }
}
function deleteTask(index) {
    const arr_item = get_Item();
    arr_item.splice(index, 1);
    set_Item(arr_item)
    create_div();
}

function get_Item() {
    return JSON.parse(localStorage.getItem('arr')) || [];
}

function set_Item(arr) {
    localStorage.setItem('arr', JSON.stringify(arr));
}

create_div()