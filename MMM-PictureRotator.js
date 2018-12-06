/* global Module */

/* Magic Mirror
 * Module: MMM-PictureRotator
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */


/* MMM-PictureRotator 
 * by Mariano S. Cosentino http://www.marianok.com.ar
 *
 * Additional Module info on github: https://github.com/mok726/MMM-PictureRotator
 * and on http://www.Marianok.com.ar/MMM-PictureRotator
 *
 */


Module.register("MMM-PictureRotator",{

	// Default module config.
	defaults: {
		url: ["http://www.marianok.com.ar/_/rsrc/1468750769294/home/DSC03614.JPG"],
		alt: "",
		updateInterval:  0.5 * 60 * 1000, // every 5 minutes
		height: "100%",  // height=240
		width: "100%"	// width=320
	},

// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);
		self = this;
           var count = 0;

		// Set locale.
		//moment.locale(config.language);
		this.loaded = false;
		this.activeItem = 0;
		//console.log("GETDOM: " + this.activeItem);
		count = this.activeItem; 
                if (this.config.url.length > 1 ) {
                      setInterval( function () { 
				   
                         self.updateDom(1000);
                         //console.log('update ' + count )
                         }, this.config.updateInterval);
                }

	},

        socketNotificationReceived: function(notification, payload) {
		
	},



	// Override dom generator.
	getDom: function() {
	//	console.log("GETDOM: " + this.config.url.length);
	//	console.log("GETDOM: " + this.activeItem);
		if (this.activeItem == this.config.url.length) {
			this.activeItem = 0 ;
		}
		var wrapper = document.createElement("div");
		wrapper.innerHTML = "<img  src='" + this.config.url[this.activeItem] + "&rnd=" + new Date().getTime()  + "' alt='" + this.config.alt + "' height='" + this.config.height + "' width='" + this.config.width + "'>";
		this.activeItem++;
		return wrapper;
	}
});
