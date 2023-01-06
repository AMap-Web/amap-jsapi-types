import { MarkOptions } from "perf_hooks";

export type EllipseEditorEventType = "move" | "adjust" | "end";

export class _EllipseEditor extends AMap.Event<EllipseEditorEventType> {
  constructor(map: AMap.Map, ellipse: AMap.Ellipse);
  public open: () => void;
  public close: () => void;
}
