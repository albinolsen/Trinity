var explosion : GameObject;
var playerExplosion : GameObject;

function OnTriggerEnter(other : Collider) 
{
	if (other.tag == "Water")
    {
		Instantiate(explosion, transform.position, Quaternion.identity);
		Destroy (gameObject);
    }
    if (other.tag == "Player")
    {
		Instantiate(playerExplosion, transform.position, Quaternion.identity);
		Destroy (gameObject);
		Debug.Log("SHIP HIT GOOD SIR");
    }
    
    

}








////import UnityEngine;
//import System.Collections;

//function OnCollisionEnter (col : Collision)
//{
  //  if(col.gameObject.name == "WaterBasicDaytime")
  //  {
    //	Debug.Log("MEGAHIT");
    //	
       
   // }
//}