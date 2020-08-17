//SECTION MyEVENTS: Events call from host:
var MyEVENTS = {
  connectAPI: function() {
    this.proxy = {
      eventDjadvance: $.proxy(this.eventDjadvance, this),
    };
    API.on(API.ADVANCE, this.proxy.eventDjadvance);
  },
  eventDjadvance: function(obj) {
      // var dj = API.getDJ();
	  if (obj.dj.username === "Doc_Z") {
		var audio = new Audio('https://www.myinstants.com/media/sounds/ding-sound-effect_2.mp3');
		audio.play();
	  }
  };
};

var STARTUP = {
	initbot: function() {
    if (window.APIisRunning) return;
    window.APIisRunning = true;
	MyEVENTS.connectAPI();
	};
};

if (!window.APIisRunning) {
  STARTUP.initbot();
} else {
  setTimeout(function() {
    STARTUP.initbot();
  }, 1000);
}
