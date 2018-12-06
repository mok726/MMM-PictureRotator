# MMM-PictureRotator
A module for MagicMirror which allows to rotate pictures from different sources.

I developed in order to show snapshots from my Foscam cameras, but can show images from most any URL


## Installation

* Clone into the `~/MagicMirror/modules` directory.

* `cd ~/MagicMirror/modules` # adapt directory if you are using a different one
* `git clone https://github.com/mok726/MMM-PictureRotator.git` 


## configuration and Options
     add the module in config.js
     
     
     
     
     
## Config Options
| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `url` | [] | an array of urls to display |
| `alt` | `` | `optional` Altenrative caption for pictures. |
| `updateInterval` | 30000 | `optional` rotation interval, how long to show the image in Miliseconds (default 5 minutes) |
| `width` | 100% | `optional` Picture width can use % o px |
| `height` | 100% | `optional` Picture width can use % o px |

### Example Config

#### Simple example
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
