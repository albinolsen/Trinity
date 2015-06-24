var Text : UnityEngine.UI.Text;

function Update ()
{Text.text = GunAimingAngle.angle.ToString("F0");
Debug.Log(GunAimingAngle.angle.ToString("F0"));
}
