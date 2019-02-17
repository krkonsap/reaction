var klikkAeg; var uusAeg; var reaktAeg; var highScore = [];

function looKast() {
    var aeg=Math.random();
    aeg=aeg*3000;

    setTimeout(function() {
        var top= Math.random();
        top= top*215;
        var vasak= Math.random();
        vasak= vasak*450;

        document.getElementById("kast").style.top = top + "px";
        document.getElementById("kast").style.left = vasak + "px";
        document.getElementById("kast").style.backgroundColor= '#f00';
        document.getElementById("kast").style.display="block";
        uusAeg=Date.now();
    }, aeg);
}

document.getElementById("kast").onclick=function() {
    klikkAeg=Date.now();
    reaktAeg=(klikkAeg-uusAeg)/1000;

    var pildid = [
        "img/valestart.jpg",
        "img/pikne.jpg",
        "img/rakett.jpg",
        "img/tuli.jpg",
        "img/bolt.jpg",
        "img/ninja.jpg",
        "img/cobra.jpg",
        "img/koolibri.jpg",
        "img/ferrari.jpg",
        "img/tigu.png",
        "img/laiskloom.jpg",
        "img/aratus.jpg"
    ];

    if(reaktAeg<0.1){
        document.getElementById("reaktsiooniaeg").innerHTML="Your reaction time: " + reaktAeg + " seconds";
        document.getElementById("tulemus").innerHTML="False start!"+ '<br>' +'<img src="'+pildid[0]+'">';
    }
    else if(reaktAeg<0.3){
        document.getElementById("reaktsiooniaeg").innerHTML="Your reaction time: " + reaktAeg + " seconds";
        document.getElementById("tulemus").innerHTML="Lightning fast!!!"+ '<br>' +'<img src="'+pildid[1]+'">';
    }
    else if(reaktAeg<0.4){
        document.getElementById("reaktsiooniaeg").innerHTML="Your reaction time: " + reaktAeg + " seconds";
        document.getElementById("tulemus").innerHTML="You will soon be on the moon!"+ '<br>' +'<img src="'+pildid[2]+'">';
    }
    else if(reaktAeg<0.5){
        document.getElementById("reaktsiooniaeg").innerHTML="Your reaction time: " + reaktAeg + " seconds";
        document.getElementById("tulemus").innerHTML="Caution, the mouse may ignite!"+ '<br>' +'<img src="'+pildid[3]+'">';
    }
    else if(reaktAeg<0.6){
        document.getElementById("reaktsiooniaeg").innerHTML="Your reaction time: " + reaktAeg + " seconds";
        document.getElementById("tulemus").innerHTML="Wow, a sprinter!"+ '<br>' +'<img src="'+pildid[4]+'">';
    }
    else if(reaktAeg<0.7){
        document.getElementById("reaktsiooniaeg").innerHTML="Your reaction time: " + reaktAeg + " seconds";
        document.getElementById("tulemus").innerHTML="Officially faster than a ninja."+ '<br>' +'<img src="'+pildid[5]+'">';
    }
    else if(reaktAeg<0.8){
        document.getElementById("reaktsiooniaeg").innerHTML="Your reaction time: " + reaktAeg + " seconds";
        document.getElementById("tulemus").innerHTML="Fast like a cobra!"+ '<br>' +'<img src="'+pildid[6]+'">';
    }
    else if(reaktAeg<0.9){
        document.getElementById("reaktsiooniaeg").innerHTML="Your reaction time: " + reaktAeg + " seconds";
        document.getElementById("tulemus").innerHTML="Enough speed."+ '<br>' +'<img src="'+pildid[7]+'">';
    }
    else if(reaktAeg<1){
        document.getElementById("reaktsiooniaeg").innerHTML="Your reaction time: " + reaktAeg + " seconds";
        document.getElementById("tulemus").innerHTML="0 to 100 real quick"+ '<br>' +'<img src="'+pildid[8]+'">';
    }
    else if(reaktAeg<1.5){
        document.getElementById("reaktsiooniaeg").innerHTML="Your reaction time: " + reaktAeg + " seconds";
        document.getElementById("tulemus").innerHTML="Row gently, arrive eventually?"+ '<br>' +'<img src="'+pildid[9]+'">';
    }
    else if(reaktAeg<3){
        document.getElementById("reaktsiooniaeg").innerHTML="Your reaction time: " + reaktAeg + " seconds";
        document.getElementById("tulemus").innerHTML="Sloth?" + '<br>' +'<img src="'+pildid[10]+'">';
    }
    else{
        document.getElementById("reaktsiooniaeg").innerHTML="Your reaction time: " + reaktAeg + " seconds";
        document.getElementById("tulemus").innerHTML="Oh... you're still here." + '<br>' +'<img src="'+pildid[11]+'">';
    }


    this.style.display="none";
    looKast();
}

looKast();

function restart() {
    location.reload();
}