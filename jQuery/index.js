$("h1").addClass("big-title"); //adding class via jQuery
//when buttons are clicked h1 fades out
$("button").on("click", function(){
  $("h1").fadeOut();
});
//when buttons are clicked h1 slides up
$("button").on("click", function(){
  $("h1").slideUp();
});
