/**********************************************************

    Organization    :Asymptopia Software | Software@theLimit

    Website         :www.asymptopia.org

    Author          :Charles B. Cosse

    Email           :ccosse@gmail.com

    Copyright       :(C) 2017 Asymptopia Software

    License         :Apache 2.0

***********************************************************/
var LANGUAGE_NAMES={
	"keys":["en","fr","es","de","it","gr","cn","sw","th"],
	"en":"English",
	"fr":"French",
	"es":"Spanish",
	"de":"German",
	"it":"Italian",
	"gr":"Greek",
	"cn":"Chinese",
	"sw":"Swahili",
	"th":"Thai"
};
var REGION_NAMES=["World","Caribbean","Africa","Americas","Europe","Asia",];
var REGION_ICONS=[
	"./new_icons/world.png","./new_icons/caribbean.png","./new_icons/africa.png","./new_icons/americas.png","./new_icons/europe.png",
	"./new_icons/asia.png"
];
var NUM_COLORS=8;
var MODE_NAMES=["Tour","Coloring","Interactive"];
var TOUR=0;
var COLORING=1;
var INTERACTIVE=2;
var DEFAULT_STROKE="RGBA(200,200,200,1.0)";
var OUTLINE_COLOR="rgba(255,255,0,255)";
var OUTLINE_WIDTH=2;
var INSTALLED={
	"keys":[
		"World","Caribbean","Africa","Americas","Europe","Asia"
	],
	"Caribbean":{
		"path":"data/caribbean/",
		"bbox":[-90.,-2.,-53.,30.],
		"center":[-71.5,14.5],
		"color":"rgba(255,255,0,0)",
		"fill":"rgba(0,100,40,0)",
		"width":2,
		"polygon_sources":[
			{"filename":"caribbean.geojson","color":"rgba(200,200,200,1)","fill":'rgba(100,100,100,1)','width':1,"category":"Caribbean","layer_name":'Nations'},
		],
		"point_sources":[],
		"line_sources":[],
		"gpx_sources":[]
	},
	"World":{
		"path":"data/world/",
		"bbox":[-179.,-55.,179., 55.],
		"center":[0,35],
		"color":"rgba(255,255,0,0)",
		"fill":"rgba(0,100,40,0)",
		"width":2,
		"polygon_sources":[
			{"filename":"world.geojson","color":"rgba(200,200,200,1)","fill":'rgba(100,100,100,1)','width':1,"category":"World","layer_name":'World'},
		],
		"point_sources":[],
		"line_sources":[],
		"gpx_sources":[]
	},
	"Asia":{
		"path":"data/asia/",
		"bbox":[19.63,-54.75,179.0, 75.85],
		"center":[125.,10.],
		"color":"rgba(255,255,0,0)",
		"fill":"rgba(0,100,40,0)",
		"width":2,
		"polygon_sources":[
			{"filename":"asia.geojson","color":"rgba(200,200,200,1)","fill":'rgba(100,100,100,1)','width':1,"category":"Asia","layer_name":'Asia'},
		],
		"point_sources":[],
		"line_sources":[],
		"gpx_sources":[]
	},
	"Americas":{
		"path":"data/americas/",
		"bbox":[-187.52, -55.92,-12.15, 83.62],
		"center":[-99,0.05],
		"color":"rgba(255,255,0,0)",
		"fill":"rgba(0,100,40,0)",
		"width":2,
		"polygon_sources":[
			{"filename":"americas.geojson","color":"rgba(200,200,200,1)","fill":'rgba(100,100,100,1)','width':1,"category":"Americas","layer_name":'Americas'},
		],
		"point_sources":[],
		"line_sources":[],
		"gpx_sources":[]
	},
	"Australia Region":{
		"path":"data/australia/",
		"bbox":[105.63,-54.75,159.10,-10.05],
		"center":[132,-32.4],
		"color":"rgba(255,255,0,0)",
		"fill":"rgba(0,100,40,0)",
		"width":2,
		"polygon_sources":[
			{"filename":"australia.geojson","color":"rgba(200,200,200,1)","fill":'rgba(100,100,100,1)','width':1,"category":"Australia Region","layer_name":'Australia'},
		],
		"point_sources":[],
		"line_sources":[],
		"gpx_sources":[]
	},
	"Africa":{
		"toggle":false,
		"path":"data/africa/",
		"bbox":[-25.36,-40.97, 63.50, 40.54],
		"center":[19.,3.0],
		"color":"rgba(255,255,0,0)",
		"fill":"rgba(0,100,40,0)",
		"width":2,
		"polygon_sources":[
			{"filename":"africa.geojson","color":"rgba(200,200,200,1)","fill":'rgba(100,100,100,1)','width':1,"category":"Africa","layer_name":'Africa'},
		],
		"point_sources":[],
		"line_sources":[],
		"gpx_sources":[]
	},
	"Europe":{
		"path":"data/europe/",
		"bbox":[-31.29, 27.64, 40.18, 71.16],
		"center":[4,51.3],
		"color":"rgba(255,255,0,0)",
		"fill":"rgba(0,100,40,0)",
		"width":2,
		"polygon_sources":[
			{"filename":"europe.geojson","color":"rgba(200,200,200,1)","fill":'rgba(100,100,100,1)','width':1,"category":"Europe","layer_name":'Europe'},
		],
		"point_sources":[],
		"line_sources":[],
		"gpx_sources":[]
	},

}
