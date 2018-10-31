import SceneManager from "../utility/SceneManager";

export default class MPScene extends Phaser.Scene {
	constructor(config){
		super(config);
		this.key = config.key;
		console.log("%cInitialise Scene: " + config.key, 'background: #222; color: #01c439');
	}

	init(){
		console.log("Init Scene:", this.scene.key)

		SceneManager.Instance.OnSceneInit(this.sys.settings);
	}

	preload(){
		console.log("Preload Scene:", this.scene.key)
	}

	create(){
		console.log("Create Scene:", this.scene.key)
	}

	

	update(time, delta){
		super.update(time, delta);
	}

	Destroy(){
		console.warn("%cDestroy scene: " + this.key, 'background: #222; color: #e50628');
	}
}