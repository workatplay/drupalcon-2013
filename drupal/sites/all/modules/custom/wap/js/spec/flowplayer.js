describe("Flow Player", function() {
    // get the first player
    var player = null;
    
    beforeEach(function() {
        player = $f('flowplayer-preview');
    });

    it("should be able to play a video", function() {
        player.play();
        
        expect(player.isPlaying()).toBeTruthy();
        
        //expect(player.getState()).toEqual(3);
        //expect(player.video).toEqual(video);
        
        
        //demonstrates use of custom matcher
        //expect(player).toBePlaying();
    });
    
    xit("should be able to stop a video", function() {
        //player.stop();
        
        //expect(player.getState()).toEqual(5);
    });
    
    xdescribe("when video has been paused", function() {
        beforeEach(function() {
            //player.play();
            //player.pause();
        });
        
        it("should indicate that the video is currently paused", function() {
            //expect(player.isPlaying()).toBeFalsy();
            //expect(player.getState()).toEqual(4);
            
            // demonstrates use of 'not' with a custom matcher
            //expect(player).not.toBePlaying();
        });
        
        it("should be possible to resume", function() {
            //player.resume();
            //expect(player.isPlaying()).toBeTruthy();
            //expect(player.video).toEqual(video);
        });
    });
    
    xit("should be able to stop a video again", function() {
        //player.stop();
        
        //expect(player.getState()).toEqual(5);
    });
    
    // demonstrates use of spies to intercept and test method calls
    // TODO: change this to a different bind event for flowplayer
    // maybe for seek, fullscreen, load, etc?
    xit("tells the current video if the user has made it a favorite", function() {
        //spyOn(player, 'FUNCTION');
        
        //player.play(video);
        //player.TODO
        
        //expect(song.TODO).toHaveBeenCalledWith(TODO);
    });
    
    //demonstrates use of expected exceptions
    xdescribe("exceptions", function() {
        // TODO: Change to a different exception if the below example isn't supported
        // ie. Video file not found (Error code: 4)
        it("should throw an exception if video is already playing", function() {
            //player.play(video);
            
            //expect(function() {
            //    player.resume();
            //}).toThrow("TODO");
        });
    });
});