
document.body.addEventListener("wheel", e=>{
if(e.ctrlKey)
  event.preventDefault();//prevent zoom
});
$(document).ready(function(){


// Drag and Resize
  $( function() {
    $( ".wind-con").draggable();
    $( ".wind-con").resizable();
  });


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


// Lower DOCKER ANimation
$(".docker-conn ul li").click(function(){
$(this).animate({top: '-20px'}, "fast");
$(this).animate({top: '0px'} , "fast");
$(this).animate({top: '-3px'}, "fast" );
$(this).animate({top: '0px'} , "fast");

});


// UPPER LEFT MENU Click
$(".hnthvr").click(function(){
  var hnthvrvar = $(this).prop('class').toString();
  var hnthvrno = hnthvrvar.substring(hnthvrvar.length - 2, hnthvrvar.length);
  wmanager(hnthvrno);
});

// On lower docket click
$(".dcimg").click(function(){
  var dcimgcls = $(this).prop('class').toString();
  var dcimgvar = dcimgcls.substring(dcimgcls.length-2, dcimgcls.length);
  wmanager(dcimgvar);
});

var opnwinid = $("#opend-window");
function wmanager(dcimgvar){
  var t = $(".opnwin"+dcimgvar);
  var tt = t.prop('class').toString();

  // if Resume clicked
  if(tt == "wind-con wind-conn opnwin13 ui-draggable ui-draggable-handle ui-resizable"){
    console.log(tt);
    t.toggle().css({ "width":'50%', "height": '90.8%', "top": '0%', "left": '25%' });
  }
  else{
    //window show hide
    console.log(tt);
    t.toggle().css({ "width":'60%', "height": '70%', "top": '15%', "left": '20%' });
  }

  // Cls, mini
  $(".closetab, .minimztab").click(function(){
    $(".docker-container").css({ "height": "7.5%"})
    .promise().done(function(){
      $(".doc-demo").css({"border-top": "1px solid #424242"});
    });

    var clsminid = $(this).prop('class').toString();
    var clsminno = clsminid.substring(clsminid.length-2, clsminid.length);
    var clsminwin = ".opnwin"+clsminno;
    $(clsminwin).hide().css({ "width":'0%', "height": '0%', "top": '45%', "left": '45%' });
  });


  //tabsize
  $(".tabsize").click(function(){
    var twdth = parseInt(t.css("width"));
    var opnwinwdth = parseInt(opnwinid.css("width"));
    var tem = twdth/opnwinwdth*100;
    if(tem <= 99){
      $(t).css({
        "width": "100%",
        "height": "100%",
        "top": "0%",
        "left": "0%",
      });
      $(".dc-lower ul li").css({"border-top": "none"});
      $(".docker-container").css({ "height": "0%"});
      }
      else{
        $(t).css({
          "width": "60%",
          "height": "70%",
          "top": "15%",
          "left": "20%"
        });
        $(".dc-lower ul li").delay(3000).css({"border-top": "1px solid #424242"});
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
$(".hnthvr").mouseout(function(){
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

// Right Side Navigation

var rnbid = $("#rnavbar");
var bdyid = $(".opend-window");
$(document).ready(function(){
  $(".bckimg").click(function(){
    var tempbdimg = $(this).prop('class').toString();
    var bcimgno = tempbdimg.substring(tempbdimg.length-2,tempbdimg.length);
    var bckimgattr = $(".bdimag"+bcimgno).attr('src');
    $("#mac-bc-img").attr('src',bckimgattr);
  });
  $("#opend-window, #mac-bg-image").click(function(){
    rnbid.animate({ width: "0%"});
  });

$("#ryt-menu-nav").click(function(){
  var rnbidper = parseInt(rnbid.css("width"));
  var bdywth = parseInt(bdyid.css("width"));
  var t = Math.ceil(rnbidper/bdywth*100);
  if(t<=0)
  {
    rnbid.animate({ width: "22%"});
  }
  else {
    rnbid.animate({ width: "0%"});
  }
});
});



});
