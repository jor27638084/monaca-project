$(function(){
  $(".btn").click(function(){
    let val = $(this).attr("value");

    if(val == "C")
      $("#display").val("");
    else if(val == "=")
      $("#display").val(eval($("#display").val()));
    else
      $("#display").val($("#display").val() + val);
  });
})