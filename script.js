var todos = [];
$(".input-1").on("click", function (event) {
    event.preventDefault();
    var ask0 = prompt("What will you schedule?");
    var elemId = $(this).attr('id');
    todos.push({
        id: elemId,
        value: ask0
    });
    $(this).append(ask0);
});
$('#save').on('click', function () {
    localStorage.setItem("hourBlocks", JSON.stringify(todos));
});
$('#clear').on('click', function () {
    localStorage.clear();
    location.reload();
});
$(document).ready(function () {
    var hourBlocks = JSON.parse(localStorage.getItem('hourBlocks'));
    if (hourBlocks) {
        // one approach: procedural programming approach
        for (i = 0; i < hourBlocks.length; i++) {
            $('#' + hourBlocks[i].id).append(hourBlocks[i].value);
        }
        // second approach: functional programming approach
        /**
          hourBlocks.forEach(function(todo){
            $('#' + todo.id).append(todo.value);
          });
        **/
    }
});

function updateTime() {
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    var timeNow = $("#currentDay").text(currentdate);
    setTimeout("updateTime()", 1000);
}
updateTime();