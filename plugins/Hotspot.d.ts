import { MarkOptions } from "perf_hooks";

export type HotspotEventType = "click" | "mouseover" | "mouseout";

export class _Hotspot extends AMap.Event<HotspotEventType> {
  constructor(map: AMap.Map);
  public setMap: (map: AMap.Map) => void;
}
