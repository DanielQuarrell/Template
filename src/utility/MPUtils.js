export default class MPUtils{
    constructor(){}

    static GetAssetURL() {
        var serverURL = "";
        serverURL = MPUtils.GetServerURL();
        return serverURL + "bin/";
    }

    static GetServerURL() {
        return '';
    }
}