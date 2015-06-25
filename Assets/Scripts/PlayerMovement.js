// JavaScript Document
#pragma strict

var forwardRate : float = 10;
var turnRate : float = 2;

function Update () {

// tank's forward speed in action
var forwardMoveAmount = Input.GetAxis("Vertical") * forwardRate;

transform.position += transform.forward * forwardMoveAmount * Time.deltaTime;

}