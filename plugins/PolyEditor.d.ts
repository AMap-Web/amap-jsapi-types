export type PolyEditorEventType = "addnode" | "adjust" | "removenode" | "end";
export class _PolyEditor extends AMap.Event<PolyEditorEventType> {
  constructor(map: AMap.Map, circle: AMap.PolygonOptions | AMap.PolylineOptions);
  public open: () => void;
  public close: () => void;
}
