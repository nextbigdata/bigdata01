
var imageSrc =[];

var iconStyle; 
var keys =[];
var selectionList = document.getElementById('attr-list');

var overlay_array =[];

//Load Base Map
var map = new ol.Map({
	target: 'map',
	layers: [
	         new ol.layer.Tile({
	        	 source: new ol.source.OSM({wrapX:false}),
	        	 name:'base'
	         })
	         ],
	         view: new ol.View({
	        	 center: ol.proj.fromLonLat([77.00, 16.00]),
	        	 zoom: 5,
	        	 maxZoom: 20,
	        	 minZoom:6
	         }),controls : ol.control.defaults({
	        	 attribution : false
	         }),

});
document.getElementsByClassName("ol-zoom ol-unselectable ol-control")[0].style.display ='none';


//Get Dataset from Database
/*
$.ajax({
	type: 'GET',
	url: '/getdatatable',
	async: false,
	success: function(data) {
		dataSetForMapAnimation = eval(data);
	},
	error: function() {
		console.log("oops! Error")
	}
});*/
//Append Attribute List
for(var key in dataSetForMapAnimation[0])
{
	if(key!='lon' && key!= 'lat' && key.indexOf('direction')!=-1 )
	{
		keys.push(key)
		var option = document.createElement('option');
		option.text = key;
		selectionList.appendChild(option);
	}

}


imageSrc[keys[0]]= 'spread-blue.gif';
imageSrc[keys[1]]= 'spread-red.gif';
imageSrc[keys[2]]= 'spread-green.gif';

//Define Vector Layer
var vectorSource =new ol.source.Vector();

//Define Vector Source
var vectorLayer = new ol.layer.Vector({
	source: vectorSource,
	visible:false
});

//Add vector layer
map.addLayer(vectorLayer);


//Function to Add Marker Overlay
function addMarker(obj){
	for(var i=0;i<overlay_array.length;i++)
	{
		map.removeOverlay(overlay_array[i]);
	}
	overlay_array.length = 0;
	vectorSource.clear();


	for(var i=0;i<dataSetForMapAnimation.length;i++)
	{
		feature = new ol.Feature({
			geometry: new  ol.geom.Point(ol.proj.transform([dataSetForMapAnimation[i].lon,dataSetForMapAnimation[i].lat], 'EPSG:4326','EPSG:3857')),
		});
		vectorSource.addFeature(feature);
	}
	map.getView().fit(vectorSource.getExtent());
	for(i = 0; i < dataSetForMapAnimation.length; i++) {
		var position = ol.proj.fromLonLat([dataSetForMapAnimation[i].lon,dataSetForMapAnimation[i].lat]);
		var element = document.createElement('div'); 
		element.id='marker'

			var rotationdegree;
		rotationdegree = 270+dataSetForMapAnimation[i][obj.value]+'deg';
		var marker = new ol.Overlay({
			position:position,
			positioning: 'center-center',
			element:element,
		});
		map.addOverlay(marker);
		overlay_array.push(marker);
		console.log(rotationdegree)	
		document.getElementById('marker').style.background =  'url('+imageSrc[obj.value]+') no-repeat scroll 0% 0% transparent';
		document.getElementById('marker').style.transform = "rotate("+rotationdegree+")";
	}
}
