export type EllipseEditorEventType =
  | "addnode"
  | "adjust"
  | "removenode"
  | "end"
  | "move"
  | "add";

export interface _EllipseEditorOptions {
  /** 新创建的对象样式 */
  createOptions?: AMap.EllipseOptions;
  editOptions?: AMap.EllipseOptions;
  /** 顶点样式 */
  controlPoint?: AMap.MarkerOptions;
  /** 中间点样式 */
  midControlPoint?: AMap.MarkerOptions;
  /** reaizeX点样式  */
  resizeXPoint: AMap.MapOptions;
  /** reaizeY点样式  */
  resizeYPoint: AMap.MapOptions;
}

export class _EllipseEditor extends AMap.Event<EllipseEditorEventType> {
  constructor(
    map: AMap.Map,
    circle?: AMap.Ellipse,
    options?: _EllipseEditorOptions
  );
  /** 开始编辑 */
  open: () => void;
  /** 停止编辑 */
  close: () => void;
  /** 设置编辑对象 */
  setTarget: (overlayer?: AMap.Ellipse) => void;
  /** 获取编辑对象 */
  getTarget: () => AMap.Ellipse | undefined;
}
