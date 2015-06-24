#pragma strict
static var angle :float = 0;
function Update () {

if(Input.GetKey("w")) {
	
	if (angle < 30){
		transform.Rotate(0,0,0-0.1);
		Debug.Log(angle);
		angle += 0.1;
 }}
if(Input.GetKey("s")){
	if (angle > 0.1){
	transform.Rotate(0,0,0.1);
	angle -= 0.1;
}}
}
