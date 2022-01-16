var printError = function(objErr) {}
$(document).ready(function() {
  $("#sub_exp").click(function() {
    $(".error-wrapper>p").html("&nbsp;").removeClass("error");
    generateDiagram($("#exp").val(), "canv_result");
  });
  printError = function(objErr) {
    $(".error-wrapper>p").html("<b>Синтаксическая ошибка:</b> "+objErr.message).addClass("error");
  }
});
