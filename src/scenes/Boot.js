import MPScene from "./MPScene";
import MainMenu from "./MainMenu";
import SceneManager from "../utility/SceneManager";

export default class Boot extends MPScene {
	constructor(){
		super({key: "Boot"});
	}

	init(){
		super.init();
	}

	preload(){
		super.preload();
	}

	create(){
		super.create();

		SceneManager.Instance.StartScene(MainMenu);
	}

	

	update(time, delta){
		super.update(time, delta);
	}
}