const dateElement = document.getElementById("date");
list = document.getElementById("list")



// // Show todays date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}


function addTodo(){

    var  todoText = document.getElementById("input");
    li = document.createElement("li")
    li.setAttribute("class", "item")
    list.appendChild(li)


    para = document.createElement("p")
    li.appendChild(para)
    para.setAttribute("class", "text")
    inpText = document.createTextNode(todoText.value);
    para.appendChild(inpText)


    btnDiv = document.createElement("div")
    li.appendChild(btnDiv)
    btnDiv.setAttribute("class","btn-div")


    editBtn = document.createElement("button")
    btnDiv.appendChild(editBtn)
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","editItem(this)")


    editTag = document.createElement("i")
    editBtn.appendChild(editTag)
    editTag.setAttribute("class", "fa fa-edit")


    delBtn = document.createElement("button")
    btnDiv.appendChild(delBtn)
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")


    delTag = document.createElement("i")
    delBtn.appendChild(delTag)
    delTag.setAttribute("class", "fa fa-trash")
    




    todoText.value =""
}

function deleteItem(e){
    li = e.parentNode
    li.parentNode.remove()
}

function delAll(){
    list.innerHTML = ""
}

function editItem(e){
    li = e.parentNode
    value = li.parentNode.firstChild.firstChild.nodeValue
    editVal = prompt("Edit your task", value)

    li.parentNode.firstChild.firstChild.nodeValue = editVal
    console.log(li.parentNode.firstChild.firstChild)

}
