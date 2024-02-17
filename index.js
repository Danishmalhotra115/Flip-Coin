let heads=0;
let tails=0;

$(".toss-coin").click(function() {
   
    var audio=new Audio('sound1.mp3');
    audio.play();
    let randomNumber = Math.floor(Math.random() * 2) +1;
let image = randomNumber + ".png";
setTimeout(function(){
    $("img").attr("src", image);
    if(randomNumber==1){
        heads++;
        $(".head-score").text("Heads : "+heads);
        $(".jack-intro").html("Great news, it's a <span>Head!<span>");
    }
    else{
        tails++;
        $(".tail-score").text("Tails : "+tails);
        $(".jack-intro").html("Woohoo, we got a <span>Tail!<span");
    }
},1100)});
$(".my-playlist").click(function(){
    var newWindow = window.open("https://open.spotify.com/playlist/6wPRkM9n8imoBPp2sNQHXn", "_blank");
    newWindow.focus(); 


});
$(".para-credentials").click(function(){
    var newWindow = window.open("https://www.linkedin.com/in/danish-malhotra-47bb90269/", "_blank");
    newWindow.focus(); 
})