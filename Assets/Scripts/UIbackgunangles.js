var Text : UnityEngine.UI.Text;

function Update ()
{Text.text = GunAimingBack.angle.ToString();
Debug.Log(GunAimingBack.angle.ToString());
}
