﻿#pragma strict
static var angle = 0;
function Update () {

if(Input.GetKey("w")) {
	
	if (angle < 30){
		transform.Rotate(0,0,-1);
		Debug.Log(angle);
		angle += 1;
 }}
if(Input.GetKey("s")){
	if (angle > 0){
	transform.Rotate(0,0,1);
	angle -= 1;
}}
}
