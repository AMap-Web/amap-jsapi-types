export interface HeatmapOptions {
  /** 热力图中单个点的半径，默认：30 */
  radius?: number;
  /** 热力图的渐变区间 */
  gradient?: object;
  /** 热力图透明度数组，取值范围[0,1]，0表示完全透明，1表示不透明，默认：[0,1] */
  opacity?: [number, number];
  /** 支持的缩放级别范围，取值范围[3-18]，默认：[3,18] */
  zooms?: [number, number];
}

export interface DataSet {
  max: number;
  data: {
    lng: AMap.LngLat["lng"];
    lat: AMap.LngLat["lat"];
    count: number;
  }[];
}
export class _Heatmap {
  constructor(map: AMap.Map, options: HeatmapOptions);

  setMap: (map: AMap.Map) => void;
  setOptions: (options: HeatmapOptions) => void;
  /** 向热力图数据集中添加坐标点，count不填写时默认：1 */
  addDataPoint: (
    lng: AMap.LngLat["lng"],
    lat: AMap.LngLat["lat"],
    count?: number
  ) => void;
  /** 设置热力图展现的数据集 */
  setDataSet: (data: DataSet, url: string, urlDataParser: Function) => void;
  hide: () => void;
  show: () => void;
  getMap: () => AMap.Map;
  getOptions: () => HeatmapOptions;
  getDataSet: () => DataSet;
}
