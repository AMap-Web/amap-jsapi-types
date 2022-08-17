# @amap/amap-jsapi-types

@amap/amap-jsapi-types 是高德开放平台官网提供的地图 JSAPI2.0 的 Typescript 声明文件。旨在为开发者提供 Typescript 环境下的类型提示，提升开发体验。

> 目前仅包含 JSAPI2.0 核心文件的接口，不包含插件的接口！ 

## INSTALL

`npm i -S @amap/amap-jsapi-types`

## USAGE

```ts
import "@amap/amap-jsapi-types";

const mapOptions: AMap.MapOptions = {
  center :[116.45, 39.92],
  zoom: 10,

};
const map = new AMap.Map('container',mapOptions);
const circle :AMap.CircleMarker = new AMap.CircleMarker({
  center:[116.45, 39.92],
  radius: 30
});

map.add(circle);
```

# 相关链接：

地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;图 JSAPI：  &nbsp;&nbsp;[示例中心](https://lbs.amap.com/demo-center/jsapi-v2)&nbsp;&nbsp;&nbsp;&nbsp;[教程](https://lbs.amap.com/api/jsapi-v2/summary)&nbsp;&nbsp;&nbsp;&nbsp;[参考手册](https://lbs.amap.com/api/jsapi-v2/documentation)

官方 JSAPI 加载器：  &nbsp;&nbsp;&nbsp;&nbsp;[教程](https://lbs.amap.com/api/jsapi-v2/guide/abc/load)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[NPM](https://www.npmjs.com/package/@amap/amap-jsapi-loader)

