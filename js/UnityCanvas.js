UNITYCANVAS = {
    loadCanvas: function (CanvasID, DataURL, FrameWorkURL, CodeURL) {
        var canvas = document.getElementById(CanvasID);
        createUnityInstance(canvas, {
            arguments: [],
            dataUrl: DataURL,
            frameworkUrl: FrameWorkURL,
            codeUrl: CodeURL,
            streamingAssetsUrl: "StreamingAssets",
            companyName: "DefaultCompany",
            productName: "ProjectThatsLife",
            productVersion: "1.0",
        });
    }
};