import { MarkOptions } from "perf_hooks";

export type RectangleEditorEventType = "adjust" | "end";

export class _RectangleEditor extends AMap.Event<RectangleEditorEventType> {
  constructor(map: AMap.Map, rectangle: AMap.Rectangle);
  public open: () => void;
  public close: () => void;
}
