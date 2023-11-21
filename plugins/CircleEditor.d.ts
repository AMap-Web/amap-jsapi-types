export type CircleEditorEventType =
  | "addnode"
  | "adjust"
  | "removenode"
  | "end"
  | "move"
  | "add";

export interface _CircleEditorOptions {
  /** 新创建的对象样式 */
  createOptions?: AMap.CircleOptions;
  editOptions?: AMap.CircleOptions;
  controlPoint?: AMap.MarkerOptions;
  midControlPoint?: AMap.MarkerOptions;
}

export class _CircleEditor extends AMap.Event<CircleEditorEventType> {
  constructor(
    map: AMap.Map,
    circle?: AMap.Circle,
    options?: _CircleEditorOptions
  );
  /** 开始编辑 */
  open: () => void;
  /** 停止编辑 */
  close: () => void;
  /** 设置编辑对象 */
  setTarget: (overlayer?: AMap.Circle) => void;
  /** 获取编辑对象 */
  getTarget: () => AMap.Circle | undefined;
}
