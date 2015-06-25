// JavaScript Document
#pragma strict
var accelerateAmount : float = 0.04;
var maxSpeed : float = 20;
var currentSpeed : float = 0;

function Update () {
	if(Input.GetKey("f")) {
		if(currentSpeed < maxSpeed){
			currentSpeed += accelerateAmount;
	 	}
	 }
	if(Input.GetKey("v")){
		if(currentSpeed > 0){
			currentSpeed -= accelerateAmount;
		}	
	}
	Debug.Log(currentSpeed);
	transform.position += transform.forward * currentSpeed * Time.deltaTime;
}