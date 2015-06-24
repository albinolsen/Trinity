// JavaScript Document
#pragma strict
var accelerateAmount : float = 0.04;

static var maxSpeed : float = 5;
static var currentSpeed : float = 0;

function Update () {
	if(Input.GetKey("f")) {
		if(currentSpeed < maxSpeed){
			currentSpeed += accelerateAmount;
	 	}
	 }
	if(Input.GetKey("v")){
		if(currentSpeed > -(maxSpeed/2)){
			currentSpeed -= accelerateAmount;
		}	
	}
	transform.position += transform.forward * currentSpeed * Time.deltaTime;
}