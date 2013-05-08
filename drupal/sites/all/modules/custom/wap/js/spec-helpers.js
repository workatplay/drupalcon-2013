beforeEach(function() {
  this.addMatchers({
    toBePlaying: function() {
      var player = this.actual;
      
      return player.isPlaying();
    }
  });
});