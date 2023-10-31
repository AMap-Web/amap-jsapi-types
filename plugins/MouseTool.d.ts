export class _MouseTool extends AMap.Event<"draw"> {
  constructor(map: AMap.Map);
  public marker: (options: AMap.MarkerOptions) => void;
  public polyline: (options: AMap.PolylineOptions) => void;
  public polygon: (options: AMap.PolygonOptions) => void;
  public rectangle: (options: AMap.RectangleOptions) => void;
  public circle: (options: AMap.CircleOptions) => void;
  /** 开启距离量测模式 */
  public rule: (options: AMap.PolylineOptions) => void;
  /** 开启面积量测模式 */
  public measureArea: (options: AMap.PolygonOptions) => void;
  public rectZoomIn: (options: AMap.PolygonOptions) => void;
  /** 开启鼠标拉框缩小模式。鼠标可在地图上拉框缩小地图。矩形框样式参考PolygonOptions设置 */
  public rectZoomOut: (options: AMap.PolygonOptions) => void;
  /**
   * 设为true时，鼠标操作关闭的同时清除地图上绘制的所有覆盖物对象；
   * 设为false时，保留所绘制的覆盖物对象。默认为false
   */
  public close: (isClose?: boolean) => void;
}
