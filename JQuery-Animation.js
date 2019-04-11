$(document).ready(function(){
  $(".button").click(function(){
    $("#divv").animate({left:'+=500'},"slow","linear")
    .animate({left:'-=500'},"slow","linear")
    .animate({left:'-=500'},"slow","linear")
    .animate({left:'+=500'},"slow","linear")

  })
});

$(document).ready(function(){
  $(".button2").click(function(){
    $("#divv").animate({opacity:'-=0.8'},"slow","linear")
    .animate({opacity:'+=0.8'},"slow","linear")
    .animate({opacity:'-=0.8'},"slow","linear")
    .animate({opacity:'+=0.8'},"slow","linear")

  })
});

$(document).ready(function(){
  $(".button3").click(function(){
    $("#divv").css("border-radius","50%")
  })
});
$(document).ready(function(){
  $(".button4").click(function(){
    $("#divv").css('border-radius','0%')
  })
});

$(document).ready(function(){
  $(".button5").click(function(){
    $("#divv").animate({width:'+=50px', height:'+=50px'})

  })
});
$(document).ready(function(){
  $(".button6").click(function(){
    $("#divv").animate({width:'-=100px', height:'-=100px', minHeight:'50', minWidth:'50'})

  })
});
//crazy button
$(document).ready(function(){
  $(".button7").click(function(){
    loopCrazy1();
  })
});

function loopCrazy1(){
  //random border
  var b1 = Math.floor(Math.random()*101) + "%";
  var b2 = Math.floor(Math.random()*101) + "%";
  var b3 = Math.floor(Math.random()*101) + "%";
  var b4 = Math.floor(Math.random()*101) + "%";
  var bindb = b1 + " " + b2 + " " + b3 + " " + b4 + " ";

  //random color
  function getRandomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }
  //back to center
  $("#divv").css({"top":"0", "left":"0"});

    $("#divv").animate({height:'100',width:'100'}, "slow", "linear")
    .animate({top:'-=200px', left:'+=200px'}, "slow", "linear")
    .animate({top:'+=500px'}, "slow", "linear")
    .toggle(500)
    .toggle(500)
    .animate({width:'+=100px', height:'+=100px'}, "slow","linear", function(){
    $("#divv").css('background-color',getRandomColor())})
    .animate({top:'-=300px', left:'+=200px'}, "slow", "linear")
    .animate({opacity:'-=0.8'},"fast","linear", function(){
    $("#divv").css('border-radius', bindb)})
    .animate({width:'-=100'},"slow", "linear", function(){
    $("#divv").css('background-color', getRandomColor())})
    .animate({left:'-=900px', top:'-=100px'}, "slow", "linear", function(){
    $("#divv").css('z-index',"-1")})
    .animate({top:'+=400px', left:'+=50px'},"slow", "linear")
    .animate({left:'+=200px'},"fast","linear")
    .animate({top:'-=200px'},"fast","linear", function(){
    $("#divv").css('background-color',"#FA6900")})
    .animate({width:'+=100'},"slow", "linear", function(){
    $("body").css('background-color', getRandomColor())})
    .animate({width:'-=100px', height:'-=100px'}, "slow","linear", function(){
    $("#divv").css('border-radius',"0%")})
    .animate({opacity:'+=0.8'},"fast","linear")
    .animate({height:'-=80'},"slow", "linear", function(){
    $("#divv").css('z-index',"0")})
    .animate({left:'-=100px'},"fast","linear", function(){
    $("body").css('background-color', "white")})
    .animate({top:'+=100px'},"fast","linear")
    .animate({left:'-=100px'},"slow","linear")
    .animate({height:'+=80'},"slow", "linear")
    .animate({left:'+=450px', top:'-=190px'},"slow","linear", loopCrazy1)
  }

$(document).ready(function(){
  $(".button10").click(function(){
      crazyloop2();
    })
  });

  function crazyloop2(){
    var neg_pos = [1,-1];
    var temp = Math.floor(Math.random()*2);
    var temp2 = Math.floor(Math.random()*2);
    console.log(temp + "testing pos or neg");

    var leftS = (Math.floor(Math.random()*501))* neg_pos[temp];
    var bottomS = (Math.floor(Math.random()*151))* neg_pos[temp2];
    var opaS = (Math.floor(Math.random()*(100-50))+50) *.01;
    var widthS = (Math.floor(Math.random()*(200-50))+50);
    var heightS = (Math.floor(Math.random()*(200-50))+50);

    //random border
    var b1 = Math.floor(Math.random()*101) + "%";
    var b2 = Math.floor(Math.random()*101) + "%";
    var b3 = Math.floor(Math.random()*101) + "%";
    var b4 = Math.floor(Math.random()*101) + "%";
    var bindb = b1 + " " + b2 + " " + b3 + " " + b4 + " ";

    //random color
    function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

    $("#divv").animate({left:leftS, bottom:bottomS, opacity:opaS, width:widthS, height:heightS}, "slow","linear", function(){
    $("#divv").css('background-color',getRandomColor())})
    .animate({left:leftS, bottom:bottomS, opacity:opaS, width:widthS, height:heightS},"slow","linear", function(){
    $("#divv").css('border-radius', bindb)})
    .animate({left:leftS, bottom:bottomS, opacity:opaS, width:widthS, height:heightS},"slow","linear", function(){
    $("body").css('background-color',getRandomColor())})
    .animate({left:leftS, bottom:bottomS, opacity:opaS, width:widthS, height:heightS},"slow", "linear", function(){
    $("#divv").css('z-index',neg_pos[Math.floor(Math.random()*2)])})
    .animate({left:leftS, bottom:bottomS, opacity:opaS, width:widthS, height:heightS},"slow","linear", crazyloop2)

}


$(document).ready(function(){
  $(".button8").click(function(){
    $("#divv").stop(true);

  })
});

$(document).ready(function(){
  $(".button9").click(function(){
    $("#divv").animate({left:'+=50', bottom:'+50'},"fast","linear")
    .animate({left:'+=50', bottom:'-50'},"fast","linear")
    .animate({left:'+=50', bottom:'+50'},"fast","linear")
    .animate({left:'+=50', bottom:'-50'},"fast","linear")
    .animate({left:'+=50', bottom:'+50'},"fast","linear")
    .animate({left:'+=50', bottom:'-50'},"fast","linear")
    .animate({left:'+=50', bottom:'+50'},"fast","linear")
    .animate({left:'+=50', bottom:'-50'},"fast","linear")

    .animate({left:'-=50', bottom:'+50'},"fast","linear")
    .animate({left:'-=50', bottom:'-50'},"fast","linear")
    .animate({left:'-=50', bottom:'+50'},"fast","linear")
    .animate({left:'-=50', bottom:'-50'},"fast","linear")
    .animate({left:'-=50', bottom:'+50'},"fast","linear")
    .animate({left:'-=50', bottom:'-50'},"fast","linear")
    .animate({left:'-=50', bottom:'+50'},"fast","linear")
    .animate({left:'-=50', bottom:'-50'},"fast","linear")

    .animate({left:'-=50', bottom:'+50'},"fast","linear")
    .animate({left:'-=50', bottom:'-50'},"fast","linear")
    .animate({left:'-=50', bottom:'+50'},"fast","linear")
    .animate({left:'-=50', bottom:'-50'},"fast","linear")
    .animate({left:'-=50', bottom:'+50'},"fast","linear")
    .animate({left:'-=50', bottom:'-50'},"fast","linear")
    .animate({left:'-=50', bottom:'+50'},"fast","linear")
    .animate({left:'-=50', bottom:'-50'},"fast","linear")

    .animate({left:'+=50', bottom:'+50'},"fast","linear")
    .animate({left:'+=50', bottom:'-50'},"fast","linear")
    .animate({left:'+=50', bottom:'+50'},"fast","linear")
    .animate({left:'+=50', bottom:'-50'},"fast","linear")
    .animate({left:'+=50', bottom:'+50'},"fast","linear")
    .animate({left:'+=50', bottom:'-50'},"fast","linear")
    .animate({left:'+=50', bottom:'+50'},"fast","linear")
    .animate({left:'+=50', bottom:'-50'},"fast","linear")
    .animate({bottom:'+=50'},"fast", "linear")
})
});
