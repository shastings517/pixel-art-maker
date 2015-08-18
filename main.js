window.onLoad = function(){
	

};

	document.body.style.height = "1000px";
	var body = document.querySelector("body");
	var tile = document.querySelectorAll("div");
	gColor = "red";

function newBox(){
	for (var i = 0; i < 629; i++){
		var tile = document.createElement("div");
		tile.style.height = "2%";
		tile.style.width = "2%";
		tile.style.border = "solid 2px black";
		tile.style.display = "inline-block";
		tile.style.margin = "2px";
		body.appendChild(tile);	
	}
}
newBox();

function addColor(){
	var tile = document.querySelectorAll("div");
	for(var i = 0; i < 629; i++){
		tile[i].addEventListener("click", function(){
			this.style.backgroundColor = gColor;
		});
	}
}
addColor();

function colorPallette(){
	var palletteColors = ["#442299", "#3b0cbd", "#3311bb", "#4444dd", "#11aabb", 
	"#12bdb9", "#22ccaa", "#69d025", "#aacc22", "#d0c310", "#ccbb33", "#feae2d", 
	"#ff9933", "#ff6644", "#ff4422", "#ff3311", "#ee1100", "#f80c12"];
	for (var i = 0; i < 17; i++){
		var tile2 = document.createElement("div");
		tile2.style.height = "5%";
		tile2.style.width = "5%";
		tile2.style.border = "solid 2px gray";
		tile2.style.display = "inline-block";
		tile2.style.margin = "2px";
		tile2.style.backgroundColor = palletteColors[i];
		tile2.addEventListener("click", function(){
			gColor = this.style.backgroundColor;
		});
		body.appendChild(tile2);
	}	
}
colorPallette();

