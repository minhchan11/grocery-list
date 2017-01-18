var things = ["meat","veggie","dairy","drinks"];
var userInput = 0;
var list = [];
var newlist = [];
function calculate() {
  things.forEach(function(thing) {
    userInput= $("input#" + thing).val();
    list.push(userInput);
});
    newlist.push(list[0],list[1],list[3]);
    console.log(newlist);
    $(".grocery-list").append("<li>"+newlist+"</li>")
};

$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    calculate();
    });
  });
