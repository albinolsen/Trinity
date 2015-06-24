var Text : UnityEngine.UI.Text;

function Update ()
{Text.text = GunAimingAngle.angle.ToString();
Debug.Log(GunAimingAngle.angle.ToString());
}
