import { MarkOptions } from "perf_hooks";

export type markType = "pathNode" | "ctrlNode" | "midNode";

export type CurveEditorEventType = "addnode" | "adjust" | "removenode" | "end";

export interface CurveEditorOptions {
  /** 用于自定义编辑控制点的样式 */
  getMarkerOptions: (type: markType) => AMap.MarkerOptions;
  /* 用于自定义控制线的样式  */
  getCtrlLineOptions: () => AMap.PolylineOptions;
}

export class _BezierCurveEditor extends AMap.Event<CurveEditorEventType> {
  constructor(map: AMap.Map, curvue: AMap.BezierCurve, options: CurveEditorOptions);
  public open: () => void;
  public close: () => void;
}
