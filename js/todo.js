$(document).ready(function() {
  var input = $(".ajoutTodo");
  var list = $(".todo-list");

  var tasks = [];
  var data = localStorage.getItem("todo");

  if (data) {
    tasks = JSON.parse(data);
  }

  tasks.forEach(function (task) {
    $(this).delay(100).queue(function () {
        $(taskToHtml(task)).hide().appendTo(list).fadeIn(300);
        $(this).dequeue();
    });
});

  input.on("keyup", function(event) {
    if (event.keyCode === 13) {
      var text = event.target.value;

      if (text.trim()) {
        var task = {
          id: "task-" + (tasks.length + 1),
          text: text,
          date: Date.now(),
          done: false
        };

        tasks.push(task);
        localStorage.setItem("todo", JSON.stringify(tasks));
        
        var li = taskToHtml(task);

        list.append(li);
        input.val(null);
      }
    }
  });

  list.on("click", "li", function(event) {
    var element = $(event.target);

    if (element.hasClass("todo-delete")) {
      var id = element.parent().attr("id");

      var index = tasks.findIndex(function(task) {
        return task.id === id;
      });

      tasks.splice(index, 1);

      element.parent().fadeOut(1000, function() {
        $(this).remove();
      });

      localStorage.setItem("todo", JSON.stringify(tasks));
    }
    if (element.hasClass("todo-list-text")) {
      element.on("keyup", function(e) {

        if (e.keyCode === 13) {
          e.preventDefault();

          var id = element.parent().attr("id");

          var index = tasks.findIndex(function(task) {
            return task.id === id;
          });

          var task = tasks[index];

          task.text = e.target.innerText;
          localStorage.setItem("todo", JSON.stringify(tasks));
        }
      });
    }
  });
});

function taskToHtml(task) {
  var li = '<li id="' + task.id + '" class="list-group-item list-group-item-action">';
  li += '<div class="todo-list-text single-line" contenteditable="true">' + task.text + "</div>";
  li += '<i class="fa fa-check-square todo-edit"></i>';
  li += '<i class="fa fa-times-circle todo-delete"></i>';
  li += "</li>";

  return li;
}
