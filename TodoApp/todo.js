function addItem(){
    var node = document.createElement("li");
    var item_value = document.getElementById("item_input").value;
    if(item_value != ''){
        var textnode = document.createTextNode(item_value);
        node.appendChild(textnode);
        document.getElementById("todo_list").appendChild(node);
    }
};