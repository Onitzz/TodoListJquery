$(document).ready(function() {
  //ici je suis sur que le DOM est prêt à être manipulé
  var input = $(".ajoutTodo");
  var list = $(".todo-list");

  var tasks = [];

  input.on("keyup", function(event) {
    if (event.keyCode === 13) {
      tasks.push(event.target.value);
      
      
      list.append(
        '<li class="list-group-item list-group-item-action">' +
          event.target.value +
          "</li>"
      );
    }
  });
  list.on("click", 'li', function(event) {
    this.remove();
  });
});
