// import { AMapNamespace } from "./";
// import { default as Namespace } from ".";
// import { AMap } from ".";
import ".";
function loader(test: AMap.NameSpace) {
  let a: AMap.CircleMarkerOptions;
  new AMap.Circle();
  AMap.createDefaultLayer();
}

let mapOptions: AMap.MapOptions = {
  layers: [
    AMap.createDefaultLayer(),
    new AMap.TileLayer({
      tileSize: 256,
      tileUrl: "saf",
    }),
  ],
};
let map = new AMap.Map("div", mapOptions);
function MassMarker() {
  let data: AMap.MassData[] = [];
  let opts: AMap.MassMarkersOptions = {
    zIndex: 122,
  };
  new AMap.MassMarks(data, opts);
}
function Vector() {
  let a: AMap.CircleMarkerOptions;
  let circle = new AMap.Circle(a);
  let polylineOpt: AMap.PolylineOptions = {};
  let polygonOpt: AMap.PolygonOptions = {};
  let bezierOpt: AMap.BezierCurveOptions = {};
  let rectOpt: AMap.RectangleOptions = {};
  let ellipseOpt: AMap.EllipseOptions = {};
  let ciecleMarkerOpt: AMap.CircleMarkerOptions = {};
  const polyline = new AMap.Polyline();
  const bezier = new AMap.BezierCurve();
  const polygon = new AMap.Polygon();
  const rect = new AMap.Rectangle();
  const circkeMarker = new AMap.CircleMarker();
  const ellipse = new AMap.Ellipse();
  const group = new AMap.OverlayGroup();
  group.addOverlay(circle);
  group.addOverlays([circle, bezier, polygon, rect]);
  group.removeOverlay(circkeMarker);
  group.removeOverlays([ellipse]);
}
function baseType() {
  let southWest = new AMap.LngLat(134, 45);
  let northEast = new AMap.LngLat(135, 46);
  let bounds1 = new AMap.Bounds(southWest, northEast);
  let pixel = new AMap.Pixel(12, 123);
  let size = new AMap.Size(12, 24);
  size.height;
}
function Marker() {
  let markerOptions: AMap.MarkerOptions = {
    zooms: [12, 15],
    icon: new AMap.Icon({
      image: "12",
      imageOffset: [12, 12],
    }),
  };
  let labelOption: AMap.LabelMarkerOptions = {
    name: "jasik",
    // position: [12, 23]
    position: new AMap.LngLat(123, 34),
  };
  const info = new AMap.InfoWindow();
  const menu = new AMap.ContextMenu();
  new AMap.OverlayGroup();
  new AMap.LayerGroup().on;
  let marker = new AMap.Marker();
  let text = new AMap.Text();
  new AMap.LabelMarker({
    name: "sdfs",
    position: [123, 123],
  });
  const group = new AMap.OverlayGroup();
  group.addOverlay(marker);
  group.addOverlays([marker, text]);
  group.removeOverlay(text);
  map.add(info);
  map.add([info, menu]);
  map.remove(info);
  map.remove([info, menu]);
}
function Util() {
  AMap.GeometryUtil.distance([123, 23], [123, 23]);
  AMap.DomUtil.hasClass(document.body, "name");
  AMap.Browser.isWebGL;
  AMap.Browser.baidu;
  AMap.Util.cancelAnimFrame;
}

function LayerOptions() {
  let tileLayerOptions: AMap.TileLayerOptions = {};
  let buildingsOpt: AMap.BuildingLayerOpts = {};
  let districtOptions: AMap.DistrictLayerOptions = {};
  let traficOpt: AMap.TrafficLayerOptions = {};
  let sateliteOpt: AMap.SatelliteLayerOptions = {};
  let roadnetOpt: AMap.RoadnetLayerOptions = {};
  let inoorOpt: AMap.SatelliteLayerOptions = {};
  let wmsOpt: AMap.WMSLayerOptions = {};
  let wmstOpt: AMap.WMTSLayerOptions = {};
  let lalels: AMap.LabelsLayerOptions = {};
  let customOpt: AMap.CustomLayerOption = {
    render: () => {},
  };
  let flexOpt: AMap.FlexibleLayerOptions = {};
  let imageOpt: AMap.ImageLayerOptions = {
    url: "123,",
    bounds: [123, 34, 134, 45],
  };
  let canvasOpt: AMap.CanvasLayerOptions = {};
}
function Layers() {
  map.add(new AMap.TileLayer({}));
  new AMap.TileLayer.Traffic({});
  new AMap.TileLayer.Satellite({});
  new AMap.TileLayer.RoadNet({});
  new AMap.TileLayer.WMS();
  new AMap.TileLayer.WMTS();
  new AMap.TileLayer.Flexible({});

  new AMap.BuildingLayer({});
  new AMap.DistrictLayer({});
  new AMap.LabelsLayer();
  new AMap.CustomLayer(document.createElement("canvas"), {
    render: () => {},
  });
  new AMap.ImageLayer({
    url: "sf",
    bounds: [135, 45, 145, 46],
  });
  new AMap.CanvasLayer({});

  let tileLayerOptions: AMap.TileLayerOptions = {};
  let buildingsOpt: AMap.BuildingLayerOpts = {};
  let districtOptions: AMap.DistrictLayerOptions = {};
  let traficOpt: AMap.TrafficLayerOptions = {};
  let sateliteOpt: AMap.SatelliteLayerOptions = {};
  let roadnetOpt: AMap.RoadnetLayerOptions = {};
  let inoorOpt: AMap.SatelliteLayerOptions = {};
  let wmsOpt: AMap.WMSLayerOptions = {};
  let wmstOpt: AMap.WMTSLayerOptions = {};
  let lalels: AMap.LabelsLayerOptions = {};
  let customOpt: AMap.CustomLayerOption = {
    render: () => {},
  };
  let flexOpt: AMap.FlexibleLayerOptions = {};
  let imageOpt: AMap.ImageLayerOptions = {
    url: "123,",
    bounds: [123, 34, 134, 45],
  };
  let canvasOpt: AMap.CanvasLayerOptions = {};
}
function testMapAdd() {
  let circle = new AMap.Circle();
  let traffic = new AMap.TileLayer.Traffic();
  map.add(circle);
  map.add(traffic);
  map.add([circle, traffic]);

  map.remove(circle);
  map.remove(traffic);
  map.remove([circle, traffic]);
}

function group() {
  let layerGroup = new AMap.LayerGroup();
  let overlayGroup = new AMap.OverlayGroup();
  layerGroup && overlayGroup;
}

function other() {
  AMap.extend({}, {});
  let config = AMap.getConfig();
}
let a = new AMap.Bounds();