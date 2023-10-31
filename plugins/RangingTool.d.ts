export interface _RangingToolOptions {
  /** 设置量测起始点标记属性对象，包括点标记样式、大小等，参考   MarkerOptions  列表 */
  startMarkerOptions?: {} | AMap.MarkerOptions;
  midMarkerOptions?: {} | AMap.MarkerOptions;
  endMarkerOptions?: {} | AMap.MarkerOptions;
  /** 设置距离量测线的属性对象，包括线样式、颜色等，参考  PolylineOptions 列表 */
  lineOptions?: {} | AMap.PolylineOptions;
  /** 设置距离量测过程中临时量测线的属性对象，包括线样式、颜色等，参考  PolylineOptions  列表 */
  tmpLineOptions?: {} | AMap.PolylineOptions;
  /** 设置量测起始点标签的文字内容，默认为“起点” */
  startLabelText?: string;
  /** 设置量测中间点处标签的文字内容，默认为当前量测结果值 */
  midLabelText?: string;
  /** 设置量测结束点处标签的文字内容，默认为当前量测结果值 */
  endLabelText?: string;
  /** 设置量测起始点标签的偏移量。默认值：Pixel(-6, 6) */
  startLabelOffset?: AMap.Pixel;
  /** 设置量测中间点标签的偏移量。默认值：Pixel(-6, 6) */
  midLabelOffset?: AMap.Pixel;
  /** 设置量测结束点标签的偏移量。默认值：Pixel(-6, 6) */
  endLabelOffset?: AMap.Pixel;
}

export type RangingToolEventType = "addnode" | "removenode" | "end";

export class _RangingTool extends AMap.Event<RangingToolEventType> {
  constructor(map: AMap.Map, options?: _RangingToolOptions);
  /** 开启距离量测功能 */
  turnOn: () => void;
  /**
   * 关闭距离量测功能
   * @param removeOverlays 是否删除绘制的覆盖物
   */
  turnOff: (removeOverlays?: boolean) => void;
}
