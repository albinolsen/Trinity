#pragma strict
var bullet : GameObject;
var rateOfFire : float = 0.5;
internal var fireDelay : float;
var speed : float = 200;
var laser : GameObject;
var fireexplo : GameObject;

function Start () {
var createlaser : GameObject = Instantiate(laser, transform.position, transform.rotation);
 createlaser.transform.parent = gameObject.transform;


}

function Update () {
	if(Input.GetButton("Fire1") && Time.time > fireDelay){
	Instantiate(fireexplo, transform.position, Quaternion.identity);
	fireDelay = Time.time + rateOfFire;
		var clone : GameObject = Instantiate(bullet, transform.position, transform.rotation);
		clone.GetComponent.<Rigidbody>().velocity = transform.TransformDirection(Vector3(Random.Range(-2.0, 2.0), speed, Random.Range(-2.0, 2.0)));
		Physics.IgnoreCollision(clone.GetComponent.<Collider>(), transform.root.GetComponent.<Collider>());
	}

}