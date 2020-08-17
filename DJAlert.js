//SECTION MyEVENTS: Events call from host:
var MyEVENTS = {
  connectAPI: function() {
    try{
      this.proxy = {
        eventDjadvance: $.proxy(this.eventDjadvance, this),
      };
      API.on(API.ADVANCE, this.proxy.eventDjadvance);
    } catch (err) {
      console.log("connectAPI: " + err.message);
    }
  },
  eventDjadvance: function(obj) {
    try{
	  if (obj.dj.username === "Doc_Z") {
		var audio = new Audio('https://www.myinstants.com/media/sounds/ding-sound-effect_2.mp3');
		audio.play();
	  }
    } catch (err) {
      console.log("eventDjadvance: " + err.message);
    }
  }
};

var STARTUP = {
	initbot: function() {
      try{
        if (window.APIisRunning) return;
        window.APIisRunning = true;
	    MyEVENTS.connectAPI();
      } catch (err) {
        console.log("eventDjadvance: " + err.message);
      }
	}
};

if (!window.APIisRunning) {
  STARTUP.initbot();
} else {
  setTimeout(function() {
    STARTUP.initbot();
  }, 1000);
}
