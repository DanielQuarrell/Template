import Boot from "./scenes/Boot";
import AssetManager from "./utility/AssetManager";
import DeviceManager from "./utility/DeviceManager";
import ScaleManager from "./utility/ScaleManager";
import SceneManager from "./utility/SceneManager";

export default class MPGame {
    constructor(){      
        //Initialise Game
        let gameConfig = {
            type: Phaser.AUTO,
            width: 1024,
            height: 720,
            scene: [Boot]
        };

        const game = new Phaser.Game(gameConfig);
        console.log(game)
        const sceneManager = new SceneManager(game);
        const deviceManager = new DeviceManager(game);
        const assetManager = new AssetManager(game);
        const scaleManager = new ScaleManager(game);
    }
}