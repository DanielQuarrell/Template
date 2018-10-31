import MPScene from "./MPScene";
import SceneManager from "../utility/SceneManager";
import MainMenu from "./MainMenu";

export default class GameScene extends MPScene {
	constructor(){
		super({key: "GameScene"});
	}

	create(){
		super.create();

		var rect = new Phaser.Geom.Rectangle(0, 0, this.game.renderer.width, this.game.renderer.height);
		var graphics = this.add.graphics({ fillStyle: { color: 0x00ff00 } });
		graphics.fillRectShape(rect);

		console.log(this)

		this.input.keyboard.on('keydown', this.OnAnyKeyDown, this);
	}

	update(time, delta){
		super.update(time, delta);
	}

	OnAnyKeyDown(){
		SceneManager.Instance.StartScene(MainMenu);
	}
}