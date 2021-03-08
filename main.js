require([
  "esri/intl",
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/widgets/ElevationProfile"
], function (intl, WebScene, SceneView, ElevationProfile) {

  // Set app locale to Norwegian
  intl.setLocale('nb');

  /****************************************************************************
   *  Create Web Scene and View
   ***************************************************************************/
  let webscene = new WebScene({
    portalItem: {
      id: "bd8f9599b6dd42b6bd4f0a5ab381b5b6"
    }
  });

  let view = new SceneView({
    container: "viewDiv",
    map: webscene
  });

  /****************************************************************************
   *  Add elevation profile widget
   ***************************************************************************/
  let profileWidget = new ElevationProfile({
    view: view,
    profiles: [
      { type: "ground" },
      { type: "view"}
    ]
  });

  view.ui.add(profileWidget, 'top-right');
});