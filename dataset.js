

var chartByColor={};  var keys =[];
var stroke = ['rgba(150,50,200, 0.4)','rgba(50,50,200, 0.4)','rgba(200,0,0, 0.4)','rgba(0,200,0, 0.4)','rgba(200,50,50, 0.4)','rgba(250,50,50, 0.1)'];
var fill = ['rgba(150,50,200, 0.05)','rgba(50,50,200, 0.05)','rgba(200,0,0, 0.05)','rgba(0,200,0, 0.05)','rgba(200,50,50, 0.1)','rgba(250,50,50, 0.4)'];
var attrItems =[],attrChart_items=[];

//Get dataset from database
/*
$.ajax({
	type: 'GET',
	url: '/getdata',
	async: false,
	success: function(data) {
		dataSetForMap = eval(data);
	},
	error: function() {
		console.log("oops! Error")
	}
});*/


String.prototype.initCap = function () {
	return this.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
		return m.toUpperCase();
	});
};


//Find Keys from Dataset
for(var key in dataSetForMap[0])
{
	if(key !='lon' && key!='lat' ){
		keys.push(key);
	}
}

//Apply dynamic color for Each Attribute
for(var i=0;i<keys.length;i++)
{
	chartByColor[keys[i]]={'stroke':stroke[i],'fill':fill[i],'text':keys[i].initCap()+'<br />{textDisplayProperty} PPM'};
}

//Build Dynamic object from dataset
for(var i=0 ; i<keys.length;i++){

	var data1 = 'e'+i;
	var d = "informationSelectItem" + data1
	eval("var informationSelectItem" + data1 + "={dataset: 'data',propertyToPlot: keys[i], textDisplayTemplate: chartByColor[keys[i]].text,textDisplayProperty: keys[i],fillStyle:chartByColor[keys[i]].fill,strokeStyle:chartByColor[keys[i]].stroke}")
	attrItems.push(eval(d))	
}

//Function to Update Legend For Chart
function updateLegend(){
	var legendDiv = document.getElementById('legend-div');

	var div = document.createElement('div');
	div.classname = 'legend-title';
	div.innerHTML="<h3 class='legend-head'>L E G E N D</h3>";
	legendDiv.appendChild(div);
	var subDiv = document.createElement('div');
	subDiv.id = 'align-legend';
	for(var i=0;i<keys.length;i++)
	{


		var div = document.createElement('div');
		var canvas = document.createElement('canvas');
		canvas.width = 20;
		canvas.height = 20;
		var context = canvas.getContext('2d');

		context.lineWidth = "2";
		var color = chartByColor[keys[i]]['stroke'].split('(')[1];
		color= 'rgb('+color.slice(0, -6)+')';
		context.strokeStyle = color;
		context.moveTo(17, 4);
		context.lineTo(4, 17);

		context.stroke();
		var image = new Image();
		image.src = canvas.toDataURL();
		div.appendChild(image);
		var paragraphElement = document.createElement('p');
		paragraphElement.innerHTML =  keys[i].initCap();
		div.appendChild(paragraphElement);
		subDiv.appendChild(div);
	}
	legendDiv.appendChild(subDiv);
}
updateLegend();
