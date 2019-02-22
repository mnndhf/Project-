//buat add todolist

function newElement() {
  var input = document.getElementById("tdl").value;
  var p = document.createElement("p");
  var par = document.createElement("h6");
  var text = document.createTextNode(input);
  par.appendChild(text);
  p.appendChild(par);
  document.getElementById("list").appendChild(p);

  //buat bikin button remove dan function remove
  var removeTask = document.createElement("input");
  removeTask.setAttribute("type", "button");
  removeTask.setAttribute("value", "Delete");
  removeTask.setAttribute("id", "removeButton");
  removeTask.addEventListener(
    "click",
    function(e) {
      p.parentNode.removeChild(p);
    },
    false
  );
  p.appendChild(removeTask);

  //buat bikin button edit
  var editTask = document.createElement("input");
  editTask.setAttribute("type", "button");
  editTask.setAttribute("value", "Edit");
  editTask.setAttribute("id", "EditButton");
  editTask.addEventListener(
    "click",
    function(e) {
      // console.log(p.children[0])
      var x = document.createElement("INPUT");
      x.setAttribute("type", "text");
      x.setAttribute("value", p.children[0].innerHTML);
      p.appendChild(x);
      var saveTask = document.createElement("input");
      saveTask.setAttribute("type", "button");
      saveTask.setAttribute("value", "Save");
      saveTask.setAttribute("id", "SaveButton");
      saveTask.addEventListener(
        "click",
        function(e) {
           
        
        },
      );
      p.appendChild(saveTask);
    },
    false
  );
  p.appendChild(editTask);
}


