#pragma strict


var sideangle = 0;
function Update () {
if(sideangle > -130){	
	if(Input.GetKey("q")){
		transform.Rotate(0,1,0);
		sideangle -= 1;
}

if(Input.GetKey("d")){
	transform.Rotate(0,1,0);
	sideangle -= 1;
}

}
if(sideangle < 130){	
	if(Input.GetKey("e")){
		transform.Rotate(0,-1,0);
		sideangle += 1;
}
if(Input.GetKey("a")){
	transform.Rotate(0,-1,0);
	sideangle += 1;
}

}
}