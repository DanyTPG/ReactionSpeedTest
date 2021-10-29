var start, end, timeTaken, c = 0;
var average = 0;
var date = new Date();
var color = 'green'

function makeShapeAppear() {

    document.getElementById("shape").style.background = color;	
}

async function appearAfterDelay() {
	document.getElementById("shape").style.background = "#a10000";
    timer = Math.floor(Math.random() * 3000 + 1800);
    await setTimeout(makeShapeAppear, timer);
    start = new Date().getTime() + timer;
}


document.getElementById("shape").onclick = function() {
	document.getElementById("shape").innerHTML = "";
    end = new Date().getTime();
	timeTaken = end - start;

	if(timeTaken < 0){
		
		document.getElementById("timeTaken").innerHTML = "TOO SOON !!";
		document.getElementById("shape").style.display = "none";
		document.getElementById("soon").style.display = "flex";
		
		return; 
		}else{
			
			average+= timeTaken;
			c++;
			document.getElementById("progress").innerHTML = c + "/5";
			if(c == 5) finish();
			
			document.getElementById("shape").style.background = "#a10000";

			document.getElementById("timeTaken").innerHTML = timeTaken + " ms";

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
	document.getElementById("start").style.display = "none";
	document.getElementById("shape").style.display = "block";
	appearAfterDelay();
}
