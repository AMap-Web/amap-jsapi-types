export type BezierCurveEditorEventType =
  | "addnode"
  | "adjust"
  | "removenode"
  | "end"
  | "move"
  | "add";

export interface _BezierCurveEditorOptions {
  /** 新创建的对象样式 */
  createOptions?: AMap.BezierCurveOptions;
  editOptions?: AMap.BezierCurveOptions;
  /** 顶点样式 */
  controlPoint?: AMap.MarkerOptions;
  /** 中间点样式 */
  midControlPoint?: AMap.MarkerOptions;
  /** 贝塞尔控制点样式 */
  bezierControlPoint?: AMap.MarkerOptions;
  /** 贝塞尔控制线样式 */
  bezierControlLine?: AMap.PolylineOptions;
}

export class _BezierCurveEditor extends AMap.Event<BezierCurveEditorEventType> {
  constructor(
    map: AMap.Map,
    curve?: AMap.BezierCurve,
    options?: _BezierCurveEditorOptions
  );
  /** 开始编辑 */
  open: () => void;
  /** 停止编辑 */
  close: () => void;
  /** 设置编辑对象 */
  setTarget: (overlayer?: AMap.BezierCurve) => void;
  /** 获取编辑对象 */
  getTarget: () => AMap.BezierCurve | undefined;
}
