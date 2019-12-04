
document.body.addEventListener("wheel", e=>{
if(e.ctrlKey)
  event.preventDefault();//prevent zoom
});
$(document).ready(function(){
// Chaining
$(".upper-docker-conn").animate({top: '0'}, "slow");
$(".docker-container").animate({bottom: '0'}, "fast",)
.delay(1000).promise().done(dclwrbrdr);
//   -->
function dclwrbrdr(){
$(".dc-lower ul li").css({"border-top": "1px solid #424242"})
.promise().done(initiatedemo);
}
//   -->
function initiatedemo(){
  $(".doc-demo").css("font-size", "0.7em");
  $("#res-hnt").fadeIn(500).css("display", "block")
  .delay(2000).promise().done(rminitiatedemo);
}
//   -->
function rminitiatedemo(){
  $("#res-hnt").css("display", "none")
  $(".doc-demo").css("font-size", "0em");
}
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
    $(".docker-container").css({ "height": "7.5%"});
    $(".wind-con").animate({ width:'0%', height: '0%', top: '45%', left: '45%' }, "fast");
  });


  //tabsize
  $(".tabsize").click(function(){
    var tem = parseInt(temp.css("width"));
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
        $(".docker-container").css({ "height": "7.5%"});
      }
    });
}

// demo and hints

// UPPER LEFT MENU HINT

$(".hnthvr").hover(function(){
  var abodoccls = $(this).prop('class').toString();
  var adcls = abodoccls.substring(abodoccls.length -2, abodoccls.length);
  abodocfn(adcls);
});
function abodocfn(adcls){
  $(".udlhnt"+adcls).fadeIn(500).css({"display": "block"});
}
$(".hnthvr").mouseleave(function(){
  $(".udlht").css({"display": "none"});
});



// LOWER DOCKER HINT

  $(".dcimg").hover(function(){
    var dott = $(this).prop('class').toString();
    var dotno = dott.substring(dott.length -2, dott.length);
    dotdemopn(dotno);
  });
  $(".dcimg").mouseleave(function(){
    $(".doc-demo").css("font-size","0em");
  });

  function dotdemopn(dotno){
    $(".dem-lst"+dotno).css("font-size","0.7em");
  }


});
