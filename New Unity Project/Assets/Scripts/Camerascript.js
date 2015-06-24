var cam_speed = 1.00;
var gui_size = 1;

function Update () {
var recdown = Rect(0, 0, Screen.width, gui_size);
var recup = Rect(0, Screen.height - gui_size, Screen.width, gui_size);
var recleft = Rect(0, 0, gui_size, Screen.height);
var recright = Rect(Screen.width - gui_size, 0, gui_size, Screen.height);

	if (recdown.Contains(Input.mousePosition))
		transform.Translate(0, 0, -cam_speed, Space.world);
	if (recup.Contains(Input.mousePosition))
		transform.Translate(0, 0, cam_speed, Space.world);
	if (recleft.Contains(Input.mousePosition))
		transform.Translate(-cam_speed, 0, 0, Space.world);
	if (recright.Contains(Input.mousePosition))
		transform.Translate(cam_speed, 0, 0, Space.world);

}