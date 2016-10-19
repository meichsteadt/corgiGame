var countCorgi = 0;

$(document).ready(function() {
  function win(){
    setInterval(function() { alert("You win the corgi game! You are awesome!"); }, 500);
    setInterval(function() { location.reload(); }, 800);
  }
  //shows picture of adorable corgi. When three corgis have been found, alerts user they win and are awesome, then refreshes page.
  $(".click-corgi").one('click', function(){
    countCorgi+=1;
    if(countCorgi === 3) {
      win();
    }
  });

  //calls alert informing user they suck and lost. Then refreshes page
  $(".click-lose").one('click', function(){
    setInterval(function() { alert("You lose... Try harder next time."); }, 500);
    setInterval(function() { location.reload(); }, 800);
  });

  var cards = $(".random");
  for(var i = 0; i < cards.length; i++){
      var target = Math.floor(Math.random() * cards.length -1) + 1;
      var target2 = Math.floor(Math.random() * cards.length -1) +1;
      cards.eq(target).before(cards.eq(target2));
  }
});
