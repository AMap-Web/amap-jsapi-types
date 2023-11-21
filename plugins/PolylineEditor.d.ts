export type PolylineEditorEventType =
  | "addnode"
  | "adjust"
  | "removenode"
  | "end"
  | "move"
  | "add";

export interface _PolylineEditorOptions {
  /** 新创建的对象样式 */
  createOptions?: AMap.PolylineOptions;
  editOptions?: AMap.PolylineOptions;
  controlPoint?: AMap.MarkerOptions;
  midControlPoint?: AMap.MarkerOptions;
}

export class _PolylineEditor extends AMap.Event<PolylineEditorEventType> {
  constructor(
    map: AMap.Map,
    polyline?: AMap.Polyline,
    options?: _PolylineEditorOptions
  );
  /** 开始编辑 */
  open: () => void;
  /** 停止编辑 */
  close: () => void;
  /** 设置编辑对象 */
  setTarget: (overlayer?: AMap.Polyline) => void;
  /** 获取编辑对象 */
  getTarget: () => AMap.Polyline | undefined;
}
