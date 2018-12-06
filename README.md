# MMM-PictureRotator
A module for MagicMirror which allows to rotate pictures from different sources.


To Install it:
cd ~/MagicMirror/modules # adapt directory if you are using a different one
git clone https://github.com/mok726/MMM-PictureRotator.git



add and configure the module in config.js


{
		module: "MMM-PictureRotator",
		position: "bottom_center",	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
			url: ["<first URL>","<Second URL>", ... ,"<n-th URL>"],
			width: "96%",
			height: "96%"
		}
	},
