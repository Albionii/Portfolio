
const goku_idle = [
  '../assets/sprites/goku/0.png'
]

const goku_spirit_bomb = [
  '../assets/sprites/goku/5.png',
  '../assets/sprites/goku/6.png',
  '../assets/sprites/goku/7.png',
  '../assets/sprites/goku/8.png',
  '../assets/sprites/goku/9.png',
  '../assets/sprites/goku/10.png',
  '../assets/sprites/goku/12.png',
  '../assets/sprites/goku/13.png',
  '../assets/sprites/goku/14.png',
  '../assets/sprites/goku/15.png'
]

const goku_spirit_bomb_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 0]],
  animation_speed : 1,
  move : function(e) {
    if (e >= 400*player.this_animation.animation_speed) {
        player.this_animation.currentFrame = (player.this_animation.currentFrame+1)%player.this_animation.frames.length;
        return true;
      }
  }
}

