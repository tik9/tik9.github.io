---
layout: default
title: breakout game
js: breakout3
css: game
---

<button id=start_game class='btn btn-primary'>Start Game</button><span style="display:inline-block; width: 50px;"></span>
 Move the paddle with the left and right arrow keys

<div id=over >

  <div class='modal-content'>
    <span class=close>&times;</span>
    <p>Game Over</p>
  </div>

</div>


<div id=win>

  <div class='modal-content'>
    <span class=close>&times;</span>
    <p>You won</p>
  </div>

</div>
<div id=canvas style='margin-top:70px;margin-bottom:70px'>
<canvas id=myCanvas></canvas>
</div>

<script>
//    console.log('star')

</script>
