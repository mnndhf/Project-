//buat add todolist

  function newElement(){
    var input = document.getElementById('tdl').value;
    var p = document.createElement('p');
    var text=document.createTextNode(input);
    p.appendChild(text);
    document.getElementById('list').appendChild(p);
    
//buat bikin button remove dan function remove
    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "Delete");
    removeTask.setAttribute("id", "removeButton");
    removeTask.addEventListener('click', function(e) {
        p.parentNode.removeChild(p);
    }, false);
    p.appendChild(removeTask);    
    
//buat bikin button edit 
    var editTask = document.createElement('input');
    editTask.setAttribute('type', 'button');
    editTask.setAttribute("value", "Edit");
    editTask.setAttribute("id", "EditButton");
    editTask.addEventListener('click', function(e) {
      var x = document.createElement("INPUT");
      x.setAttribute("type", "text");
      x.setAttribute("value" , "");
      p.appendChild(x);
      p.parentNode.editTask(p);
    
    }, false);
    p.appendChild(editTask);
    
 
    
 
}




