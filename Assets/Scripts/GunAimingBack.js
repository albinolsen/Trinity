static var angle : float = 0;
var maxAngle = 30;
function Update () {
	
if(Input.GetKey("w")) {
	if(angle < maxAngle){
		transform.Rotate(0.1,0,0);
		angle += 0.1;
 }}
if(Input.GetKey("s")){
	if(angle > 0.1){
		transform.Rotate(-0.1,0,0);
		angle -= 0.1;
	}


}
}
