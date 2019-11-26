
document.body.addEventListener("wheel", e=>{
if(e.ctrlKey)
  event.preventDefault();//prevent zoom
});
$(document).ready(function(){

$(".upper-docker-conn").delay(3300).animate({top: '0'}, "slow");
$(".docker-container").delay(2800).animate({bottom: '0'}, "slow");
$(".wind-con").hide();
var temp;

$(".docker-conn ul li").click(function(){
$(this).animate({top: '-20px'}, "fast");
$(this).animate({top: '0px'} , "fast");
$(this).animate({top: '-3px'}, "fast" );
$(this).animate({top: '0px'} , "fast");

});
$(".abo-doc").click(function(){
  temp = $("#abo-window");
  wmanager(temp);
});
$(".aca-doc").click(function(){
  temp = $("#aca-window");
  wmanager(temp);
});
$(".ski-doc").click(function(){
  temp = $("#ski-window");
  wmanager(temp);
});
$(".lan-doc").click(function(){
  temp = $("#lan-window");
  wmanager(temp);
});
$(".sof-doc").click(function(){
  temp = $("#sof-window");
  wmanager(temp);
});
$(".exp-doc").click(function(){
  temp = $("#exp-window");
  wmanager(temp);
});
$(".pro-doc").click(function(){
  temp = $("#pro-window");
  wmanager(temp);
});

$(".ach-doc").click(function(){
  temp = $("#ach-window");
  wmanager(temp);
});
$(".cou-doc").click(function(){
  temp = $("#cou-window");
  wmanager(temp);
});
$(".hob-doc").click(function(){
  temp = $("#hob-window");
  wmanager(temp);
});
$(".con-doc").click(function(){
  temp = $("#con-window");
  wmanager(temp);
});
$(".gal-doc").click(function(){
  temp = $("#gal-window");
  wmanager(temp);
});

$(".res-doc").click(function(){
  temp = $("#res-window");
  wmanager(temp);
});

$(".help-doc").click(function(){
  temp = $("#help-window");
  wmanager(temp);
});

$(".cont-doc").click(function(){
  temp = $("#cont-window");
  wmanager(temp);
});

$(".blog-doc").click(function(){
  temp = $("#blog-window");
  wmanager(temp);
});

$(".thi-doc").click(function(){
  temp = $("#thi-window");
  wmanager(temp);
});



function wmanager(t){

  //window show hide
  t.toggle();
  $(".wind-con").animate({ width:'60%', height: '70%', top: '15%', left: '20%' }, "fast");

  // Cls, mini
  $("#closetab, #minimztab").click(function(){
    temp.hide();
    $(".docker-container").css({ "height": "6.5%"});
    $(".wind-con").animate({ width:'0%', height: '0%', top: '45%', left: '45%' }, "fast");
  });


  //tabsize
  $(".tabsize").click(function(){
    var tem = parseInt(temp.css("width"));
    console.log(temp);
    if(tem <= 900){
      $(temp).css({
        "width": "100%",
        "height": "100%",
        "top": "0%",
        "left": "0%",
      });
      $(".docker-container").css({ "height": "0%"});
      }
      else if(tem >= 900){
        $(temp).css({
          "width": "60%",
          "height": "70%",
          "top": "15%",
          "left": "20%"
        });
        $(".docker-container").css({ "height": "6.5%"});
      }
    });
}

});
