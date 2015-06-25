#pragma strict
var speedmonitor :float = 0;
function Move(speed) {	
	
}

function Update () {
	if(Input.GetKey("f")&& transform.position.y <= 90 && speedmonitor != PlayerMovement.currentSpeed){
	Debug.Log(transform.position.y);
		transform.Translate(0,0.6,0);
		speedmonitor +=0.04;
}	
if(Input.GetKey("v")&& transform.position.y >= 7 && speedmonitor != PlayerMovement.currentSpeed){	
	transform.Translate(0,-0.6,0);
	speedmonitor -=0.04;
}	
}