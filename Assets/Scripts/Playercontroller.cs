using UnityEngine;
using System.Collections;
[RequireComponent (typeof (CharacterController))] //Adds a characther controller to player.
public class Playercontroller : MonoBehaviour {
	//handling
	public float rotationSpeed = 30;
	public float speed = 100;
	public float boostSpeed = 5;
	// System
	private Quaternion targetRotation;
	// Components
	private CharacterController controller;
	private Camera Cam;


	void Start () {
		controller = GetComponent<CharacterController>();
		Cam = Camera.main;
	
	}

	void Update () {
		ControlMouse();
	}

	void ControlMouse() {
		Vector3 mousePos = Input.mousePosition;
		mousePos = Cam.ScreenToWorldPoint(new Vector3(mousePos.x,mousePos.y,Cam.transform.position.y - transform.position.y));
		targetRotation = Quaternion.LookRotation (mousePos - new Vector3(transform.position.x,0,transform.position.z));
		transform.eulerAngles = Vector3.up * Mathf.MoveTowardsAngle (transform.eulerAngles.y, targetRotation.eulerAngles.y, rotationSpeed * Time.deltaTime);

		//Vector3 input = new Vector3(Input.GetAxisRaw("Horizontal"),0,Input.GetAxisRaw("Vertical"));		
		//Vector3 motion = input;
		
		//controller.Move (motion * Time.deltaTime);	
	}
}