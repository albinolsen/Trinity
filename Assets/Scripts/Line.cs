using UnityEngine;
using System.Collections;

public class Line : MonoBehaviour {

	private LineRenderer lr;

	// Use this for initialization
	void Start () {

		lr = GetComponent<LineRenderer> ();

	}
	
	// Update is called once per frame
	void Update () {
	
			lr.SetPosition (1, new Vector3 (0, 0, 100));
	}
}
