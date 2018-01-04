$(document).ready(function() {

  $('#host').click(function() {
    $("#info").load("./host.html");
  })

  $('#book').click(function() {
    $("#info").load("./book.html");
  })
})
