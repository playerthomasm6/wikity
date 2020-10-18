
// Creates the array todos
var todos = [];
// On click any item with .input will add call a prompt
$(".input-1").on("click", function (event) {
    // This will prevent default reloading of the page
    event.preventDefault();
    //Creates new var which prompts user for str value
    var ask0 = prompt("What will you schedule?");
    // Creates a temporary var which selects the id of what was clicked and stores it in a var
    var elemId = $(this).attr('id');
    // Pushes new vars into array todos
    todos.push({
        id: elemId,
        value: ask0
    });
    // Uses currently clicked item and appends the prompt text to the selected section
    $(this).append(ask0);
});

// button that when clicked saves the array todos into local storage as "hourBlocks"
$('#save').on('click', function () {
    localStorage.setItem("hourBlocks", JSON.stringify(todos));
});

// Button that when clicked clears local storage and reloads the page which will clear all text from the page
$('#clear').on('click', function () {
    localStorage.clear();
    location.reload();
});

// This function prevents this code from running until the page fully loads
$(document).ready(function () {
    // Once loaded this creates the var hourBlocks and sets the value from local storage
    var hourBlocks = JSON.parse(localStorage.getItem('hourBlocks'));
    // Conditional which asks if hourBlocks is a var
    if (hourBlocks) {
        // one approach: procedural programming approach
        for (i = 0; i < hourBlocks.length; i++) {
            $('#' + hourBlocks[i].id).append(hourBlocks[i].value);
        }
       
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