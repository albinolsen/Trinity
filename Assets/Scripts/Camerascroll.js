 var minFov: float = 50f;
 var maxFov: float = 140f;
 var sensitivity: float = 10f;
 
 function Update () {
   var fov: float = Camera.main.fieldOfView;
   fov -= Input.GetAxis("Mouse ScrollWheel") * sensitivity;
   fov = Mathf.Clamp(fov, minFov, maxFov);
   Camera.main.fieldOfView = fov;
 }