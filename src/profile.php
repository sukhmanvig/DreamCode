<?php
//$dbconn = db_connect();
class Profile {
	/* Represents a Profile */
	public $id = -1;
	public $level = -1;
	public $totalXP = -1;	

	public function __construct($id) {
        $this->$view = view;
    }
	
	public function addXP($xp){
		$this->$totalXP += $xp
	}

	public function confirmChanges() {
		// TODO
	}
}
?>
