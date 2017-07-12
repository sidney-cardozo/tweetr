$( document ).ready(function() {
  const max = 140;
  $(".new-tweet textarea").on("keyup", function(){
    let stringLength = $(this).val().length;
    const counter = $(this).parents().children(".counter");
    counter.text(max - stringLength);
    if(max - stringLength < 0){
      counter.addClass("redText");
    }else{
      counter.removeClass("redText");
    }
  })
});

