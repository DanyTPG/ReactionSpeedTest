var start, end, timeTaken, c = 0;
var average = 0;
var date = new Date();
var green = 'green';
var red = '#a10000';

function makeShapeAppear() {
	var time = new Date().getTime();
	if (time >= start) document.getElementById("shape").style.background = green;	
}

function appearAfterDelay() {
	document.getElementById("shape").style.background = red;
   	timer = Math.floor(Math.random() * 3000 + 1800);
   	setTimeout(makeShapeAppear, timer);
	start = new Date().getTime() + timer;
}


document.getElementById("shape").onclick = function() {
	document.getElementById("shape").innerHTML = "";
    	end = new Date().getTime();
	timeTaken = end - start;

	if(timeTaken < 0){
		
		document.getElementById("shape").style.display = "none";
		document.getElementById("soon").style.display = "flex";
		
		return; 
		}else{
			
			average+= timeTaken;
			c++;
			document.getElementById("progress").innerHTML = c + "/5";
			document.getElementById("timeTaken").innerHTML = timeTaken + " ms";
			if(c == 5){
				finish();
				return;
			}
			
			document.getElementById("shape").style.background = red;
			appearAfterDelay();
			}
}

function finish(){
	c = 0;
	document.getElementById("shape").style.display = "none";
	document.getElementById("start").style.display = "flex";
	document.getElementById("start").innerHTML = "your average time: " + average/5;
	average = 0;
}
	
document.getElementById("soon").onclick = function() {
	document.getElementById("soon").style.display = "none";
	document.getElementById("shape").style.display = "block";
	appearAfterDelay();
}


document.getElementById("start").onclick = function() {
	document.getElementById("progress").innerHTML = "0/5";
	document.getElementById("start").style.display = "none";
	document.getElementById("shape").style.display = "block";
	appearAfterDelay();
}
