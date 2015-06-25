#pragma strict
var bullet : GameObject;
var rateOfFire : float = 0.5;
internal var fireDelay : float;
var speed : float = 200;

function Start () {

}

function Update () {
	if(Input.GetButton("Fire1") && Time.time > fireDelay){
	fireDelay = Time.time + rateOfFire;
		var clone : GameObject = Instantiate(bullet, transform.position, transform.rotation);
		clone.GetComponent.<Rigidbody>().velocity = transform.TransformDirection(Vector3(0	,speed,0));
		Physics.IgnoreCollision(clone.GetComponent.<Collider>(), transform.root.GetComponent.<Collider>());
	}

}