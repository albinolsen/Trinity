var explosion : GameObject;
var playerExplosion : GameObject;

function OnTriggerEnter(other : Collider) 
{
	if (other.tag == "Water")
    {
		Instantiate(explosion, transform.position, Quaternion.identity);
		Destroy (gameObject);
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