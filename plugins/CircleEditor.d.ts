export type CircleEditorEventType = "move" | "adjust" | "end";

export class _CircleEditor extends AMap.Event<CircleEditorEventType> {
  constructor(map: AMap.Map, circle: AMap.Circle);
  public open: () => void;
  public close: () => void;
}
