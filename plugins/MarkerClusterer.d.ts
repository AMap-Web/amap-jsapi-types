export interface RenderClusterMarkerObject {
  /** 当前聚合点下聚合的Marker的数量 */
  count: number;
  /** 当前聚合点下聚合的所有Marker的数组 */
  markers: AMap.Marker[];
  /** 当前聚合点的显示Marker */
  marker: AMap.Marker;
}

export interface StyleOptions {
  /** 图标显示图片的url地址 */
  url: string;
  /** 图标显示图片的大小 */
  size: AMap.Size;
  /** 图标定位在地图上的位置相对于图标左上角的偏移值。默认为(0,0) */
  offset?: AMap.Pixel;
  /** 图片相对于可视区域的偏移值 */
  imageOffset?: AMap.Pixel;
  /** 文字的颜色，默认为"#000000" */
  textColor?: string;
  /** 文字的大小，默认为10（可选） */
  textSize?: number;
}

export interface MarkerClustererOptions {
  /** 聚合计算时网格的像素大小，默认60 */
  gridSize?: number;
  /** 聚合的最小数量。默认值为2，即小于2个点则不能成为一个聚合 */
  minClusterSize?: number;
  /** 最大的聚合级别，大于该级别就不进行相应的聚合。默认值为18，即小于18级的级别均进行聚合，18及以上级别不进行聚合 */
  maxZoom?: number;
  /** 聚合点的图标位置是否是所有聚合内点的中心点。默认为否，即聚合点的图标位置位于聚合内的第一个点处 */
  averageCenter?: boolean;
  /**
   *  指定聚合后的点标记的图标样式，可缺省，缺省时为默认样式；
   *  数据元素分别对应聚合量在1-10,11-100,101-1000…的聚合点的样式；
   *  当用户设置聚合样式少于实际叠加的点数，未设置部分按照系统默认样式显示；
   *  单个图标样式包括以下几个属性：
   *  1. {string}url：图标显示图片的url地址（必选）
   *  2. {AMap.Size}size：图标显示图片的大小（必选）
   *  3. {AMap.Pixel} offset：图标定位在地图上的位置相对于图标左上角的偏移值。默认为(0,0),不偏移（可选）
   *  4. {AMap.Pixel} imageOffset：图片相对于可视区域的偏移值，此功能的作用等同CSS中的background-position属性。默认为(0,0)，不偏移（可选）
   *  5. {String} textColor：文字的颜色，默认为"#000000"（可选）
   *  6. {Number} textSize：文字的大小，默认为10（可选）
   */
  styles?: StyleOptions[];
  /**
   * 该方法用来实现聚合点的自定义绘制，由开发者自己实现，API将在绘制每个聚合点的时候调用这个方法，可以实现聚合点样式的灵活设定，指定了renderClusterMarker后styles无效。
   * 在renderClusterMarker里面可以根据count和markers的一些附加属性来修改marker的icon、content等属性实现聚合点的完全自定义
   */
  renderClusterMarker?: (o: RenderClusterMarkerObject) => void;
  /** 点击聚合点时，是否散开，默认值为：true */
  zoomOnClick?: boolean;
}

export class _MarkerClusterer extends AMap.Event<"click"> {
  constructor(
    map: AMap.Map,
    markers: AMap.Marker[],
    options: MarkerClustererOptions
  );
  /** 添加一个需进行聚合的点标记 */
  public addMarker: (marker: AMap.Marker) => void;

  public removeMarker: (marker: AMap.Marker) => void;
  /** 获取聚合点的总数量 */
  public getClustersCount: () => number;
  /** 获取聚合网格的像素大小 */
  public getGridSize: () => number;

  getMaxZoom: () => number;
  /** 获取单个聚合的最小数量 */
  getMinClusterSize: () => number;
  getStyles: () => StyleOptions[];
  /** 设置聚合网格的像素大小 */
  setGridSize: (size: number) => void;
  setMaxZoom: (zoom: number) => void;
  /** 设置单个聚合的最小数量 */
  setMinClusterSize: (size: number) => void;
  /** 设置聚合的样式风格 */
  setStyles: (styles: StyleOptions[]) => void;
  /** 从地图上彻底清除所有聚合点标记 */
  clearMarkers: () => void;
  setMap: (map: AMap.Map) => void;
  /** 设置将进行点聚合显示的点标记集合 */
  setMarkers: (markers: AMap.Marker[]) => void;
  getMap: () => AMap.Map;
  getMarkers: () => AMap.Marker[];
  /** 加一组需进行聚合的点标记 */
  addMarkers: (markers: AMap.Marker[]) => void;
  /** 删除一组聚合的点标记 */
  removeMarkers: (markers: AMap.Marker[]) => void;
  /** 获取单个聚合点位置是否是聚合内所有标记的平均中心 */
  isAverageCenter: () => boolean;
  /** 设置单个聚合点位置是否是聚合内所有标记的平均中心 */
  setAverageCenter: (averageCenter: boolean) => void;
}
