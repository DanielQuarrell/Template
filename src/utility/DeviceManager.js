export default class DeviceManager {
    constructor(game){     	
        this.gameScale = 1;
    
        this.kindle = /Kindle/i.test(platform.ua) || /Silk/i.test(platform.ua);
        this.iOS = platform.os.family == 'iOS';
        this.android = platform.os.family == 'Android';
        this.iphone = platform.product == "iPhone";
        this.ipad = platform.product == "iPad";
        this.ipad2 = this.IsIpad2();
    
        this.mobile = this.iOS || this.android || this.kindle;
        this.desktop = !this.mobile;
    
        this.isWKWebView = this.IsWKWebView();
        this.displayBrim = this.ShouldDisplayBrim();
    
        this.renderMode = Phaser.WEBGL;
    }

    IsIpad2(){
		if(platform.product == 'iPad' && window.devicePixelRatio === 1 && ((window.screen.height === 768 && window.screen.width === 1024) || (window.screen.height === 1024 && window.screen.width === 768))) {
            return true;
        }
        return false;
    }
    
    IsWKWebView(){
        if (window.webkit && window.webkit.messageHandlers) {
            return true;
        }
    
        return false;
    }
    
    ShouldDisplayBrim(){
        return (platform.product != "iPad" && !this.isWKWebView && (platform.os.family == 'iOS' && parseInt(platform.os.version, 10) > 8 || platform.ua.indexOf('like Mac OS X') != -1)&&("standalone" in window.navigator) &&!window.navigator.standalone);
	}
}
