import MPScene from "./MPScene";
import GameScene from "./GameScene";
import SceneManager from "../utility/SceneManager";

export default class MainMenu extends MPScene {
	constructor(){
		super({key: "MainMenu"});
	}

	create(){
		super.create();

		var rect = new Phaser.Geom.Rectangle(0, 0, this.game.renderer.width, this.game.renderer.height);
		var graphics = this.add.graphics({ fillStyle: { color: 0x0000ff } });
		graphics.fillRectShape(rect);

		this.input.keyboard.on('keydown', this.OnAnyKeyDown, this);
	}

	update(time, delta){
		super.update(time, delta);
	}

	render(){
		super.render(time, delta);
		console.log(this.scene.manager.isProcessing)
	}

	OnAnyKeyDown(){
		SceneManager.Instance.StartScene(GameScene);
	}
}