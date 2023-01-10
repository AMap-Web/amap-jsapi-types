export type RectangleEditorEventType =
  | "addnode"
  | "adjust"
  | "removenode"
  | "end"
  | "move"
  | "add";

export interface RectangleEditorOptions {
  /** 新创建的对象样式 */
  createOptions?: AMap.RectangleOptions;
  editOptions?: AMap.RectangleOptions;
  /** 西南点样式 */
  southWestPoint?: AMap.MarkerOptions;
  /** 	东北点样式 */
  northEastPoint?: AMap.MarkerOptions;
}

export class _RectangleEditor extends AMap.Event<RectangleEditorEventType> {
  constructor(
    map: AMap.Map,
    circle?: AMap.Rectangle,
    options?: RectangleEditorOptions
  );
  /** 开始编辑 */
  open: () => void;
  /** 停止编辑 */
  close: () => void;
  /** 设置编辑对象 */
  setTarget: (overlayer?: AMap.Rectangle) => void;
  /** 获取编辑对象 */
  getTarget: () => AMap.Rectangle | undefined;
}
