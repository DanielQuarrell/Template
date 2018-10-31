

export default class SceneManager {
    constructor(game){        
        SceneManager.Instance = this;

        this.game = game;

        this.activeScenes = ["Boot"];
    }

    StartScene(sceneClass, config){
        let additive = config !== undefined && config.additive !== undefined ? config.additive : false;
        let preload = config !== undefined && config.preload !== undefined ? config.preload : false;
        let key = sceneClass.name;
  
        this.game.scene.add(key, sceneClass, true, {additive: additive});
        this.activeScenes.push(key);
    }

    StopScene(key){
        var indexOf = this.activeScenes.indexOf(key);
        if(indexOf >= 0){
            this.activeScenes.splice(indexOf, 1);
        }
        this.game.scene.getScene(key).Destroy();
        this.game.scene.stop(key);
        this.game.scene.remove(key);
    }

    OnSceneInit(settings){
        //Stop other scenes if this initialised scene is not additive
        if(!settings.data.additive){
            for(var i = this.activeScenes.length - 1; i>=0; i--){
                if(this.activeScenes[i] !== settings.key){
                    this.StopScene(this.activeScenes[i]);
                }
            }
        }
        
    }
}

