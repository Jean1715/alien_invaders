/*Positions your characters for each level*/
  var levelData = { 
     1:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,1,2,0,1,0,0,0],
          [0,0,0,0,1,0,0,1,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
     2:  [[0,0,2,2,2,2,2,2,2,0,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]] };
/* coordinates of sprite sheets or alien characters. Use frames to make an alien move more through sprite sheet*/
  var spriteData = {
    'alien1': { sx: 0,  sy: 200,  w: 25, h: 30, cls: Alien, frames: 2 },
    'alien2': { sx: 0,  sy: 241, w: 29, h: 37, cls: Alien, frames: 2 },
    'player': { sx: 0,  sy: 91, w: 77, h: 64, cls: Player },
    'missile': { sx: 0,  sy: 47, w: 7,  h: 31, cls: Missile },
    'missile2': { sx: 0,  sy: 177, w: 3,  h: 15, cls: Missile2 }
  }

  function startGame() {
    var screen = new GameScreen("Space Archer","press enter to start",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
    Game.loop();
    
  }

  function endGame() {
    var screen = new GameScreen("Game Over","(press enter to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }


  function winGame() {
    var screen = new GameScreen("You Win!","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }
/*changes the audio of the game for the player's arrows and when an alien dies*/
  $(function() {
    GameAudio.load({ 'fire' : 'media/arrow.ogg', 'die' : 'media/aww.ogg' }, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });



