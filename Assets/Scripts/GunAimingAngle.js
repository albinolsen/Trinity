#pragma strict
static var angle = 0;
var maxAngle = 30;
function Update () {
	
if(Input.GetKey("w")) {
	if(angle < maxAngle){
		transform.Rotate(0,0,-1);
		angle += 1;
 }}
if(Input.GetKey("s")){
	if(angle > -5){
		transform.Rotate(0,0,1);
		angle -= 1;
	}


}
}
