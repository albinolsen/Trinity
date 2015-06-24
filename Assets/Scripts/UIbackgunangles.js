var Text : UnityEngine.UI.Text;

function Update ()
{Text.text = GunAimingBack.angle.ToString("F0");
Debug.Log(GunAimingBack.angle.ToString("F0"));
}
