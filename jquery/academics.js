$(document).ready(function(){

  $(".doc-shw").hide();

  $("#ssc10").dblclick(function(){
    $("#wdtri-ssc").show(1000);
    $(".wdtr-inner").hide(500);
  });

  $("#hsc12").dblclick(function(){
    $("#wdtri-hsc").show(1000);
    $(".wdtr-inner").hide(500);
  });

  //back button
  $("#wul-conn").click(function(){
    $("#wdtri-ssc").hide(500);
    $("#wdtri-hsc").hide(500);
    $(".wdtr-inner").show(1000);
  });

});
