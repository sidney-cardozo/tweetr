$( document ).ready(function() {
  const max = 140;
  $(".new-tweet textarea").on("keyup", function(){
    let stringLength = $(this).val().length;
    $(this).parents().children(".counter").text(max - stringLength);
  })
});

