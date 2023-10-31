export type PolygonEditorEventType =
  | "addnode"
  | "adjust"
  | "removenode"
  | "end"
  | "move"
  | "add";

export interface _PolygonEditorOptions {
  /** 新创建的对象样式 */
  createOptions?: AMap.PolygonOptions;
  editOptions?: AMap.PolygonOptions;
  controlPoint?: AMap.CircleMarkerOptions;
  midControlPoint?: AMap.CircleMarkerOptions;
}

export class _PolygonEditor extends AMap.Event<PolygonEditorEventType> {
  constructor(
    map: AMap.Map,
    polygon?: AMap.Polygon,
    options?: _PolygonEditorOptions
  );
  /** 开始编辑 */
  open: () => void;
  /** 停止编辑 */
  close: () => void;
  /** 设置编辑对象 */
  setTarget: (target?: any, overlayer?: AMap.Polygon) => void;
  /** 获取编辑对象 */
  getTarget: () => AMap.Polygon | undefined;
  /** 设置吸附多边形 */
  setAdsorbPolygons: (data: AMap.Polygon | AMap.Polygon[]) => void;
  /** 清空所有的吸附多边形 */
  clearAdsorbPolygons: () => void;
  /** 添加吸附多边形 */
  addAdsorbPolygons: (data: AMap.Polygon | AMap.Polygon[]) => void;
  /** 删除吸附多边形 */
  removeAdsorbPolygons: (data: AMap.Polygon | AMap.Polygon[]) => void;
}
