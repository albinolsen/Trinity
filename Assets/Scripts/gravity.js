#pragma strict

function Start () {

}

function Update () {
	Physics.gravity = Vector3(0, -12-(30-GunAimingAngle.angle), 0);
}