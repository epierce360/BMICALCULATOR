$("button").click( function click_handler(){
  var weight = $("#weight").val();
  var height = $("#height").val();
  var BMI = 703 * weight / (height * height);
  $("#score").text(BMI);
  if(BMI < 18){
    $("#type").text("Underweight");
  }else{
    $("#type").text("Normal");
  }
});