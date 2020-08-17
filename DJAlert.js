//SECTION MyEVENTS: Events call from host:
var MyEVENTS = {
  connectAPI: function() {
    console.log("connectAPI");
    this.proxy = {
      eventDjadvance: $.proxy(this.eventDjadvance, this),
    };
    API.on(API.ADVANCE, this.proxy.eventDjadvance);
    console.log("connectAPI-DONE");
  },
  eventDjadvance: function(obj) {
      // var dj = API.getDJ();
      console.log("eventDjadvance: " + obj.dj.username);
	  if (obj.dj.username === "Doc_Z") {
		var audio = new Audio('https://www.myinstants.com/media/sounds/ding-sound-effect_2.mp3');
		audio.play();
	  }
    console.log("eventDjadvance-DONE");
  };
};

var STARTUP = {
	initbot: function() {
    console.log("INIT1");
    if (window.APIisRunning) return;
    console.log("INIT2");
    window.APIisRunning = true;
    console.log("INIT3");
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
