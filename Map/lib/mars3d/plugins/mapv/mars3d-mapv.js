/**
 * Mars3D平台插件,结合mapv可视化功能插件  mars3d-mapv
 *
 * 版本信息：v3.5.7
 * 编译日期：2023-05-16 21:12:01
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2023-03-17
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mapv || require('mapv')), (window.mars3d || require('mars3d'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mapv', 'mars3d'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-mapv"] = {}, global.mapv, global.mars3d));
})(this, (function (exports, mapv, mars3d) { 
'use strict';function _0xa1ff(_0x2c93b6,_0x5a6145){const _0x3bfb61=_0x3bfb();return _0xa1ff=function(_0xa1ff5e,_0x5dfea8){_0xa1ff5e=_0xa1ff5e-0x18f;let _0x2ef775=_0x3bfb61[_0xa1ff5e];return _0x2ef775;},_0xa1ff(_0x2c93b6,_0x5a6145);}const _0x31a592=_0xa1ff;(function(_0x2a1f27,_0x4e2d2c){const _0x304c1b={_0x509bd5:0x1e5,_0x4f214c:0x1ec,_0x24588b:0x1b5,_0x318b60:0x1d3,_0x369222:0x1c3,_0x4e8b53:0x1a7},_0x5e62f0=_0xa1ff,_0x29c8fa=_0x2a1f27();while(!![]){try{const _0x4efde8=parseInt(_0x5e62f0(0x1a3))/0x1*(parseInt(_0x5e62f0(_0x304c1b._0x509bd5))/0x2)+parseInt(_0x5e62f0(_0x304c1b._0x4f214c))/0x3*(parseInt(_0x5e62f0(0x1aa))/0x4)+parseInt(_0x5e62f0(_0x304c1b._0x24588b))/0x5*(parseInt(_0x5e62f0(_0x304c1b._0x318b60))/0x6)+parseInt(_0x5e62f0(0x192))/0x7+-parseInt(_0x5e62f0(_0x304c1b._0x369222))/0x8*(parseInt(_0x5e62f0(0x19c))/0x9)+parseInt(_0x5e62f0(0x1df))/0xa*(parseInt(_0x5e62f0(0x1d8))/0xb)+-parseInt(_0x5e62f0(_0x304c1b._0x4e8b53))/0xc;if(_0x4efde8===_0x4e2d2c)break;else _0x29c8fa['push'](_0x29c8fa['shift']());}catch(_0x1a9b72){_0x29c8fa['push'](_0x29c8fa['shift']());}}}(_0x3bfb,0xf1e81));function _interopNamespace(_0x218b4c){const _0x340975={_0x276125:0x1d6},_0x267287={_0x45fd2f:0x1b0,_0x127bbe:0x1fb},_0x43fb8d=_0xa1ff;if(_0x218b4c&&_0x218b4c['__esModule'])return _0x218b4c;var _0x23be5a=Object['create'](null);return _0x218b4c&&Object[_0x43fb8d(_0x340975._0x276125)](_0x218b4c)[_0x43fb8d(0x1d4)](function(_0x4f7f95){const _0x460776=_0x43fb8d;if(_0x4f7f95!=='default'){var _0x5ceeda=Object[_0x460776(_0x267287._0x45fd2f)](_0x218b4c,_0x4f7f95);Object['defineProperty'](_0x23be5a,_0x4f7f95,_0x5ceeda[_0x460776(_0x267287._0x127bbe)]?_0x5ceeda:{'enumerable':!![],'get':function(){return _0x218b4c[_0x4f7f95];}});}}),_0x23be5a['default']=_0x218b4c,_0x23be5a;}var mapv__namespace=_interopNamespace(mapv),mars3d__namespace=_interopNamespace(mars3d);const Cesium$1=mars3d__namespace['Cesium'],baiduMapLayer=mapv__namespace?mapv__namespace['baiduMapLayer']:null,BaseLayer$1=baiduMapLayer?baiduMapLayer['__proto__']:Function;class MapVRenderer extends BaseLayer$1{constructor(_0x1b3baa,_0x1ea159,_0x300d78,_0x20f0f0){const _0x49eceb=_0xa1ff;super(_0x1b3baa,_0x1ea159,_0x300d78);if(!BaseLayer$1)return;this['map']=_0x1b3baa,this['scene']=_0x1b3baa['scene'],this['dataSet']=_0x1ea159,_0x300d78=_0x300d78||{},this['init'](_0x300d78),this[_0x49eceb(0x1b8)](_0x300d78),this[_0x49eceb(0x1c6)](),this['canvasLayer']=_0x20f0f0,this['stopAniamation']=!0x1,this['animation']=_0x300d78[_0x49eceb(0x1b1)];}[_0x31a592(0x1c6)](){this['devicePixelRatio']=window['devicePixelRatio']||0x1;}['addAnimatorEvent'](){}['animatorMovestartEvent'](){const _0x298557={_0x4d4d4a:0x1c0},_0x2a8f28=_0x31a592,_0x1833ed=this[_0x2a8f28(0x1f5)][_0x2a8f28(0x1b1)];this[_0x2a8f28(0x1c5)]()&&this['animator']&&(this['steps']['step']=_0x1833ed[_0x2a8f28(_0x298557._0x4d4d4a)]['start']);}['animatorMoveendEvent'](){const _0x383f02={_0x376bad:0x1c8},_0x5eec99=_0x31a592;this['isEnabledTime']()&&this[_0x5eec99(_0x383f02._0x376bad)];}['getContext'](){const _0x3bf01a={_0x2c3651:0x1c4},_0x5096bf=_0x31a592;return this['canvasLayer']['canvas'][_0x5096bf(0x18f)](this[_0x5096bf(_0x3bf01a._0x2c3651)]);}[_0x31a592(0x1f8)](_0x143762){const _0x359be5={_0x4124bc:0x1c4},_0x52de9b=_0x31a592;this['options']=_0x143762,this['initDataRange'](_0x143762),this[_0x52de9b(_0x359be5._0x4124bc)]=this['options']['context']||'2d',this['options'][_0x52de9b(0x1c9)]&&this['canvasLayer']&&this['canvasLayer']['setZIndex']&&this['canvasLayer']['setZIndex'](this[_0x52de9b(0x1f5)][_0x52de9b(0x1c9)]),this['initAnimator']();}['_canvasUpdate'](_0x216729){const _0x575fef={_0x2924c0:0x1d2,_0x2bbb73:0x1b1,_0x555e98:0x1da,_0x3aa362:0x1bf},_0x461b4e={_0x47329a:0x1b7,_0x5a8e04:0x1f4,_0x2ca649:0x1f9,_0x29e7ba:0x1ae,_0x5bafc2:0x1f0,_0x1e71ec:0x1f2},_0x5965cb=_0x31a592,_0x425319=this[_0x5965cb(0x1d1)];if(this['canvasLayer']&&!this[_0x5965cb(_0x575fef._0x2924c0)]){const _0x27e91f=this['options'][_0x5965cb(_0x575fef._0x2bbb73)],_0x5b836b=this['getContext']();if(this['isEnabledTime']()){if(void 0x0===_0x216729)return void this[_0x5965cb(0x1a9)](_0x5b836b);this['context']==='2d'&&(_0x5b836b['save'](),_0x5b836b['globalCompositeOperation']='destination-out',_0x5b836b['fillStyle']='rgba(0,\x200,\x200,\x20.1)',_0x5b836b[_0x5965cb(0x1ee)](0x0,0x0,_0x5b836b['canvas']['width'],_0x5b836b['canvas']['height']),_0x5b836b[_0x5965cb(_0x575fef._0x555e98)]());}else this['clear'](_0x5b836b);if(this['context']==='2d')for(const _0x3fd23b in this['options']){_0x5b836b[_0x3fd23b]=this['options'][_0x3fd23b];}else _0x5b836b[_0x5965cb(0x1a9)](_0x5b836b['COLOR_BUFFER_BIT']);const _0x540c21={'transferCoordinate':function(_0x216da7){const _0x539e85=_0x5965cb,_0x349859=null;let _0x518d2a=_0x425319['mapvFixedHeight'];_0x425319['mapvAutoHeight']&&(_0x518d2a=_0x425319['globe'][_0x539e85(0x1e7)](Cesium$1['Cartographic'][_0x539e85(0x1e3)](_0x216da7[0x0],_0x216da7[0x1])));const _0x4944ff=Cesium$1['Cartesian3']['fromDegrees'](_0x216da7[0x0],_0x216da7[0x1],_0x518d2a);if(!_0x4944ff)return _0x349859;const _0x1c4533=_0x425319['cartesianToCanvasCoordinates'](_0x4944ff);if(!_0x1c4533)return _0x349859;if(_0x425319[_0x539e85(_0x461b4e._0x47329a)]&&_0x425319['mode']===Cesium$1[_0x539e85(_0x461b4e._0x5a8e04)][_0x539e85(_0x461b4e._0x2ca649)]){const _0x1e8a27=new Cesium$1['EllipsoidalOccluder'](_0x425319[_0x539e85(0x1a2)][_0x539e85(_0x461b4e._0x29e7ba)],_0x425319[_0x539e85(_0x461b4e._0x5bafc2)][_0x539e85(_0x461b4e._0x1e71ec)]),_0x181fe1=_0x1e8a27[_0x539e85(0x1c2)](_0x4944ff);if(!_0x181fe1)return _0x349859;}return[_0x1c4533['x'],_0x1c4533['y']];}};void 0x0!==_0x216729&&(_0x540c21['filter']=function(_0x384aa8){const _0x44e0f5=_0x5965cb,_0x1f6b66=_0x27e91f[_0x44e0f5(0x1bb)]||0xa;return!!(_0x216729&&_0x384aa8['time']>_0x216729-_0x1f6b66&&_0x384aa8['time']<_0x216729);});const _0x5c956a=this['dataSet']['get'](_0x540c21);this['processData'](_0x5c956a),this['options']['unit']==='m'&&this['options'][_0x5965cb(_0x575fef._0x3aa362)],this['options']['_size']=this['options']['size'];const _0x162ac7=_0x425319[_0x5965cb(0x1ab)](Cesium$1['Cartesian3'][_0x5965cb(0x1e3)](0x0,0x0));if(!_0x162ac7)return;this[_0x5965cb(0x1c1)](_0x5b836b,new mapv__namespace['DataSet'](_0x5c956a),this['options'],_0x162ac7),this[_0x5965cb(0x1f5)]['updateCallback']&&this['options']['updateCallback'](_0x216729);}}['updateData'](_0x3c9bf9,_0x55a94f){const _0x1f59d4=_0x31a592;let _0x2527b9=_0x3c9bf9;_0x2527b9&&_0x2527b9['get']&&(_0x2527b9=_0x2527b9['get']()),void 0x0!==_0x2527b9&&this[_0x1f59d4(0x194)]['set'](_0x2527b9),super[_0x1f59d4(0x1cd)]({'options':_0x55a94f});}['addData'](_0x452344,_0x5697dd){const _0x57046d={_0x4f38d5:0x1b4},_0x51d79f=_0x31a592;let _0x28d1b2=_0x452344;_0x452344&&_0x452344['get']&&(_0x28d1b2=_0x452344['get']()),this['dataSet'][_0x51d79f(_0x57046d._0x4f38d5)](_0x28d1b2),this['update']({'options':_0x5697dd});}[_0x31a592(0x1ad)](){return this['dataSet'];}[_0x31a592(0x1fd)](_0x1cdcc3){const _0x361f3d={_0x2c4fc3:0x1d7},_0x26e34b=_0x31a592;if(this['dataSet']){const _0x31f338=this[_0x26e34b(0x194)]['get']({'filter':function(_0x349d09){const _0x486b96=_0x26e34b;return _0x1cdcc3==null||typeof _0x1cdcc3!==_0x486b96(_0x361f3d._0x2c4fc3)||!_0x1cdcc3(_0x349d09);}});this['dataSet']['set'](_0x31f338),this[_0x26e34b(0x1cd)]({'options':null});}}['clearData'](){const _0x56e02d=_0x31a592;this[_0x56e02d(0x194)]&&this['dataSet']['clear'](),this[_0x56e02d(0x1cd)]({'options':null});}[_0x31a592(0x1bd)](){const _0x157701=_0x31a592;this['canvasLayer'][_0x157701(0x1bd)]();}['clear'](_0x5c7cbf){const _0x96a24d=_0x31a592;_0x5c7cbf&&_0x5c7cbf['clearRect']&&_0x5c7cbf['clearRect'](0x0,0x0,_0x5c7cbf['canvas'][_0x96a24d(0x199)],_0x5c7cbf['canvas']['height']);}[_0x31a592(0x198)](){const _0x6e292e={_0x4b62a6:0x1e4,_0x4f2bec:0x1a6},_0x3e7633=_0x31a592;this['clear'](this[_0x3e7633(0x18f)]()),this[_0x3e7633(_0x6e292e._0x4b62a6)](),this['animator']&&this['animator'][_0x3e7633(0x1a8)](),this['animator']=null,this[_0x3e7633(_0x6e292e._0x4f2bec)]=null;}}if(mapv__namespace!==null&&mapv__namespace!==void 0x0&&mapv__namespace['DataSet'])mapv__namespace['DataSet'][_0x31a592(0x1af)][_0x31a592(0x1cf)]=function(_0x121802,_0x41671c,_0x4a4656,_0x1fa3f0){const _0x456177={_0x35276c:0x19e,_0x485f72:0x1ac},_0x3cf18e={_0x426a00:0x1dc,_0x50825c:0x1b2},_0xb7f549=_0x31a592;_0x1fa3f0=_0x1fa3f0||_0xb7f549(_0x456177._0x35276c),_0x4a4656=_0x4a4656||'coordinates';for(let _0x1aa6fa=0x0;_0x1aa6fa<_0x121802['length'];_0x1aa6fa++){const _0x7dc03d=_0x121802[_0x1aa6fa]['geometry'],_0x3aea83=_0x7dc03d[_0x4a4656];switch(_0x7dc03d[_0xb7f549(_0x456177._0x485f72)]){case'Point':{const _0x1e5a12=_0x41671c(_0x3aea83);_0x1e5a12?_0x7dc03d[_0x1fa3f0]=_0x1e5a12:_0x7dc03d[_0x1fa3f0]=[-0x3e7,-0x3e7];}break;case'LineString':{const _0x104eac=[];for(let _0x4496e1=0x0;_0x4496e1<_0x3aea83['length'];_0x4496e1++){const _0x3a8400=_0x41671c(_0x3aea83[_0x4496e1]);_0x3a8400&&_0x104eac['push'](_0x3a8400);}_0x7dc03d[_0x1fa3f0]=_0x104eac;}break;case'MultiLineString':case'Polygon':{const _0x14ff55=_0x236155(_0x3aea83);_0x7dc03d[_0x1fa3f0]=_0x14ff55;}break;case'MultiPolygon':{const _0x294448=[];for(let _0x4c3564=0x0;_0x4c3564<_0x3aea83[_0xb7f549(0x1dc)];_0x4c3564++){const _0xad6b46=_0x236155(_0x3aea83[_0x4c3564]);_0xad6b46['length']>0x0&&_0x294448['push'](_0xad6b46);}_0x7dc03d[_0x1fa3f0]=_0x294448;}break;}}function _0x236155(_0x24da36){const _0x386f54=_0xb7f549,_0xc5a7bb=[];for(let _0x5bd16b=0x0;_0x5bd16b<_0x24da36[_0x386f54(_0x3cf18e._0x426a00)];_0x5bd16b++){const _0x41f712=_0x24da36[_0x5bd16b],_0x3dc521=[];for(let _0x588bfd=0x0;_0x588bfd<_0x41f712[_0x386f54(_0x3cf18e._0x426a00)];_0x588bfd++){const _0x280d27=_0x41671c(_0x41f712[_0x588bfd]);_0x280d27&&_0x3dc521['push'](_0x280d27);}_0x3dc521['length']>0x0&&_0xc5a7bb[_0x386f54(_0x3cf18e._0x50825c)](_0x3dc521);}return _0xc5a7bb;}return _0x121802;};else throw new Error('请引入\x20mapv\x20库\x20');const Cesium=mars3d__namespace['Cesium'],BaseLayer=mars3d__namespace['layer'][_0x31a592(0x190)];class MapVLayer extends BaseLayer{constructor(_0x363df2,_0x4a3cad){const _0x4f039e={_0x484601:0x194,_0x42e45b:0x19d},_0x110b94=_0x31a592;super(_0x363df2),this['_pointerEvents']=this['options'][_0x110b94(0x1ca)],this[_0x110b94(_0x4f039e._0x484601)]=_0x4a3cad||new mapv__namespace['DataSet'](_0x363df2['data']),this[_0x110b94(_0x4f039e._0x42e45b)]=null;}get['pointerEvents'](){return this['_pointerEvents'];}set[_0x31a592(0x1ca)](_0x556cbf){const _0x26f1d0=_0x31a592;this['_pointerEvents']=_0x556cbf,this['canvas']&&(_0x556cbf?this[_0x26f1d0(0x19d)]['style'][_0x26f1d0(0x1ca)]=_0x26f1d0(0x1f6):this['canvas'][_0x26f1d0(0x1b3)]['pointerEvents']='none');}['_showHook'](_0x28c942){const _0x1d73c6={_0x38f2ae:0x1f7},_0x325998=_0x31a592;_0x28c942?this['canvas']['style']['display']=_0x325998(_0x1d73c6._0x38f2ae):this['canvas']['style']['display']='none';}[_0x31a592(0x191)](){const _0x5ea193={_0x5bf45d:0x1d0,_0x24ec3f:0x1f5},_0x4d7497=_0x31a592;this['_map']['scene']['mapvDepthTest']=this[_0x4d7497(0x1f5)]['depthTest']??!![],this['_map'][_0x4d7497(0x1d1)]['mapvAutoHeight']=this['options'][_0x4d7497(0x1ea)]??![],this['_map']['scene'][_0x4d7497(_0x5ea193._0x5bf45d)]=this[_0x4d7497(_0x5ea193._0x24ec3f)][_0x4d7497(0x1b9)]??0x0;}['_addedHook'](){const _0x3e9166={_0x455653:0x1ed,_0x25b8e1:0x194,_0x3e7624:0x1c6},_0x31442c=_0x31a592;this['dataSet']&&(!this['dataSet'][_0x31442c(_0x3e9166._0x455653)]||this[_0x31442c(_0x3e9166._0x25b8e1)]['_data']['length']===0x0)&&(this[_0x31442c(0x194)]['_data']=[]['concat'](this['dataSet']['_dataCache'])),this['_mapVRenderer']=new MapVRenderer(this['_map'],this['dataSet'],this['options'],this),this[_0x31442c(_0x3e9166._0x3e7624)](),this['canvas']=this[_0x31442c(0x196)](),this[_0x31442c(0x1fa)]=this['render']['bind'](this),this['bindEvent'](),this['_reset']();}['_removedHook'](){const _0x21700c={_0x4faa53:0x1e9,_0x5f2b60:0x19d},_0x2db219=_0x31a592;this['unbindEvent'](),this[_0x2db219(0x1e9)]&&(this[_0x2db219(_0x21700c._0x4faa53)]['destroy'](),this['_mapVRenderer']=null),this['canvas']['parentElement'][_0x2db219(0x1cb)](this[_0x2db219(_0x21700c._0x5f2b60)]);}[_0x31a592(0x1c6)](){this['devicePixelRatio']=window['devicePixelRatio']||0x1;}['bindEvent'](){const _0x22f2f4={_0x1f4a1d:0x1d5,_0x4e45da:0x1cc,_0x10481e:0x1ef},_0x1af645=_0x31a592;var _0x46646b,_0x12d0c2,_0x2d0c5b,_0x54c86d;this['_map']['on'](mars3d__namespace[_0x1af645(_0x22f2f4._0x1f4a1d)]['mouseDown'],this['_onMoveStartEvent'],this),this[_0x1af645(_0x22f2f4._0x4e45da)]['on'](mars3d__namespace['EventType']['cameraMoveStart'],this['_onMoveStartEvent'],this),this['_map']['on'](mars3d__namespace[_0x1af645(_0x22f2f4._0x1f4a1d)]['cameraMoveEnd'],this['_onMoveEndEvent'],this),(_0x46646b=this['options'])!==null&&_0x46646b!==void 0x0&&(_0x12d0c2=_0x46646b['methods'])!==null&&_0x12d0c2!==void 0x0&&_0x12d0c2[_0x1af645(_0x22f2f4._0x10481e)]&&this['_map']['on'](mars3d__namespace['EventType'][_0x1af645(0x1ef)],this['_onMapClick'],this),(_0x2d0c5b=this['options'])!==null&&_0x2d0c5b!==void 0x0&&(_0x54c86d=_0x2d0c5b[_0x1af645(0x19a)])!==null&&_0x54c86d!==void 0x0&&_0x54c86d['mousemove']&&this[_0x1af645(0x1cc)]['on'](mars3d__namespace['EventType'][_0x1af645(0x1a0)],this[_0x1af645(0x1ce)],this);}[_0x31a592(0x1a5)](){const _0xf2757e={_0x488cc8:0x1d5,_0x361ff5:0x19a,_0x267b58:0x1ef,_0x5e427e:0x19a},_0x44ddff=_0x31a592;var _0x2ed97c,_0x822c6d,_0x10e671,_0x4270b9;this['_map']['off'](mars3d__namespace[_0x44ddff(0x1d5)]['mouseDown'],this['_onMoveStartEvent'],this),this['_map'][_0x44ddff(0x1ba)](mars3d__namespace[_0x44ddff(_0xf2757e._0x488cc8)]['cameraMoveStart'],this['_onMoveStartEvent'],this),this['_map']['off'](mars3d__namespace['EventType']['cameraMoveEnd'],this['_onMoveEndEvent'],this),this['_map']['off'](mars3d__namespace['EventType'][_0x44ddff(0x193)],this[_0x44ddff(0x1e8)],this),(_0x2ed97c=this['options'])!==null&&_0x2ed97c!==void 0x0&&(_0x822c6d=_0x2ed97c[_0x44ddff(_0xf2757e._0x361ff5)])!==null&&_0x822c6d!==void 0x0&&_0x822c6d['click']&&this['_map']['off'](mars3d__namespace['EventType'][_0x44ddff(_0xf2757e._0x267b58)],this[_0x44ddff(0x1e2)],this),(_0x10e671=this['options'])!==null&&_0x10e671!==void 0x0&&(_0x4270b9=_0x10e671[_0x44ddff(_0xf2757e._0x5e427e)])!==null&&_0x4270b9!==void 0x0&&_0x4270b9['mousemove']&&this['_map'][_0x44ddff(0x1ba)](mars3d__namespace[_0x44ddff(_0xf2757e._0x488cc8)]['mouseMove'],this[_0x44ddff(0x1ce)],this);}['_onMoveStartEvent'](){const _0x16fc85={_0x3314b0:0x1ba,_0x4928dd:0x1d5,_0x909217:0x1e8,_0x2005be:0x1d5,_0x1f012d:0x193},_0x250fa6=_0x31a592;this['_mapVRenderer']&&(this['_mapVRenderer'][_0x250fa6(0x19f)](),this['_map'][_0x250fa6(_0x16fc85._0x3314b0)](mars3d__namespace[_0x250fa6(_0x16fc85._0x4928dd)]['postRender'],this[_0x250fa6(_0x16fc85._0x909217)],this),this['_map']['on'](mars3d__namespace[_0x250fa6(_0x16fc85._0x2005be)][_0x250fa6(_0x16fc85._0x1f012d)],this['_reset'],this));}[_0x31a592(0x1e6)](){const _0xc0bd0a=_0x31a592;this[_0xc0bd0a(0x1e9)]&&(this['_map']['off'](mars3d__namespace['EventType']['postRender'],this['_reset'],this),this['_mapVRenderer']['animatorMoveendEvent'](),this['_reset']());}[_0x31a592(0x1be)](_0x2cd172,_0x36bf44){this['_removedHook'](),this['_addedHook']();}['addData'](_0x242a9e){const _0x4a1dc2={_0x5dfb9c:0x1f5},_0x248fef=_0x31a592;this['_mapVRenderer']&&this[_0x248fef(0x1e9)]['addData'](_0x242a9e,this[_0x248fef(_0x4a1dc2._0x5dfb9c)]);}[_0x31a592(0x197)](_0x3a69ba){const _0x318770=_0x31a592;this[_0x318770(0x1e9)]&&this['_mapVRenderer']['updateData'](_0x3a69ba,this['options']);}['getData'](){return this['_mapVRenderer']&&(this['dataSet']=this['_mapVRenderer']['getData']()),this['dataSet'];}['removeData'](_0x83dff1){this['_mapVRenderer']&&this['_mapVRenderer']['removeData'](_0x83dff1);}['removeAllData'](){const _0x3cac7a=_0x31a592;this['_mapVRenderer']&&this[_0x3cac7a(0x1e9)]['clearData']();}[_0x31a592(0x196)](){const _0x1eddcb={_0x88cc67:0x1cc,_0x41833a:0x199,_0x230094:0x19d,_0x5da99c:0x1b3,_0x412d2f:0x1f5,_0x222987:0x1d9},_0xd1bfd1=_0x31a592,_0x59c94e=mars3d__namespace['DomUtil']['create']('canvas','mars3d-mapv',this[_0xd1bfd1(0x1cc)]['container']);_0x59c94e['id']=this['id'],_0x59c94e['style']['position']='absolute',_0x59c94e['style']['top']=_0xd1bfd1(0x1dd),_0x59c94e['style'][_0xd1bfd1(0x1eb)]=_0xd1bfd1(0x1dd),_0x59c94e['width']=parseInt(this[_0xd1bfd1(_0x1eddcb._0x88cc67)]['canvas'][_0xd1bfd1(_0x1eddcb._0x41833a)]),_0x59c94e['height']=parseInt(this['_map']['canvas']['height']),_0x59c94e[_0xd1bfd1(0x1b3)]['width']=this['_map']['canvas'][_0xd1bfd1(0x1b3)]['width'],_0x59c94e['style']['height']=this['_map'][_0xd1bfd1(_0x1eddcb._0x230094)]['style'][_0xd1bfd1(0x1b6)],_0x59c94e['style']['pointerEvents']=this[_0xd1bfd1(0x195)]?'auto':'none',_0x59c94e[_0xd1bfd1(_0x1eddcb._0x5da99c)][_0xd1bfd1(0x1c9)]=this[_0xd1bfd1(_0x1eddcb._0x412d2f)]['zIndex']??0x9;if(this[_0xd1bfd1(0x1f5)]['context']==='2d'){const _0x27e361=this['devicePixelRatio'];_0x59c94e[_0xd1bfd1(0x18f)](this[_0xd1bfd1(0x1f5)]['context'])[_0xd1bfd1(_0x1eddcb._0x222987)](_0x27e361,_0x27e361);}return _0x59c94e;}['_reset'](){const _0x543090={_0x25f0a6:0x1a1},_0x6a613=_0x31a592;this[_0x6a613(_0x543090._0x25f0a6)](),this['render']();}['draw'](){this['_reset']();}['remove'](){const _0xd082e={_0x4d566d:0x1e9,_0x145aa4:0x1bc},_0x352fe8=_0x31a592;this['_mapVRenderer']&&(this[_0x352fe8(_0xd082e._0x4d566d)][_0x352fe8(0x198)](),this['_mapVRenderer']=null),this['canvas'][_0x352fe8(_0xd082e._0x145aa4)]['removeChild'](this['canvas']);}['render'](){this['_mapVRenderer']['_canvasUpdate']();}['resize'](){const _0x840154={_0x5e2da4:0x1f3,_0x5149e6:0x1dd,_0x58276e:0x19d,_0x371853:0x19d,_0x5bf0af:0x199},_0x3e52d5=_0x31a592;if(this[_0x3e52d5(0x19d)]){const _0x30bcdc=this['canvas'];_0x30bcdc[_0x3e52d5(0x1b3)]['position']=_0x3e52d5(_0x840154._0x5e2da4),_0x30bcdc['style']['top']=_0x3e52d5(0x1dd),_0x30bcdc['style']['left']=_0x3e52d5(_0x840154._0x5149e6),_0x30bcdc['width']=parseInt(this['_map']['canvas']['width']),_0x30bcdc['height']=parseInt(this['_map'][_0x3e52d5(_0x840154._0x58276e)]['height']),_0x30bcdc[_0x3e52d5(0x1b3)]['width']=this['_map'][_0x3e52d5(_0x840154._0x371853)]['style'][_0x3e52d5(_0x840154._0x5bf0af)],_0x30bcdc['style'][_0x3e52d5(0x1b6)]=this['_map']['canvas'][_0x3e52d5(0x1b3)]['height'];}}['getRectangle'](_0xe3e58e){const _0x109b32={_0x19f6ce:0x1c7,_0x127044:0x1e3},_0x2fc3c2=_0x31a592;if(!this['dataSet']||!this[_0x2fc3c2(0x194)]['_data'])return;const _0x3866f2=mars3d__namespace['Util']['getExtentByGeoJSON']({'type':_0x2fc3c2(_0x109b32._0x19f6ce),'features':this['dataSet'][_0x2fc3c2(0x1ed)]});if(!_0x3866f2)return;return _0xe3e58e!==null&&_0xe3e58e!==void 0x0&&_0xe3e58e['isFormat']?_0x3866f2:Cesium[_0x2fc3c2(0x1db)][_0x2fc3c2(_0x109b32._0x127044)](_0x3866f2['xmin'],_0x3866f2['ymin'],_0x3866f2['xmax'],_0x3866f2['ymax']);}['_onMapClick'](_0x354c88){const _0x500d09={_0x3e3ef6:0x19b},_0x10ee6e=_0x31a592;this[_0x10ee6e(0x1e0)]=_0x354c88,this['_mapVRenderer']&&this['_mapVRenderer'][_0x10ee6e(_0x500d09._0x3e3ef6)](_0x354c88[_0x10ee6e(0x1a4)],_0x354c88);}['_onMapMouseMove'](_0x54381a){this['_cache_event']=_0x54381a,this['_mapVRenderer']&&this['_mapVRenderer']['mousemoveEvent'](_0x54381a['windowPosition'],_0x54381a);}['on'](_0x327525,_0x4cd4f4,_0x2e2885){const _0xf451af={_0x2dfbc6:0x1ef,_0x119fad:0x1a0,_0x319d99:0x1f1,_0x50ae23:0x1ce},_0x1e57fe=_0x31a592;this['options']['methods']=this['options'][_0x1e57fe(0x19a)]||{};if(_0x327525===mars3d__namespace['EventType']['click'])this['options']['methods'][_0x1e57fe(_0xf451af._0x2dfbc6)]=_0x5d4759=>{_0x5d4759&&_0x4cd4f4['bind'](_0x2e2885)({...this['_cache_event'],'layer':this,'data':_0x5d4759});},this['_map']['on'](mars3d__namespace['EventType']['click'],this['_onMapClick'],this);else _0x327525===mars3d__namespace['EventType'][_0x1e57fe(_0xf451af._0x119fad)]&&(this['options']['methods'][_0x1e57fe(_0xf451af._0x319d99)]=_0x537f33=>{const _0x2273c2=_0x1e57fe;_0x537f33&&_0x4cd4f4[_0x2273c2(0x1de)](_0x2e2885)({...this['_cache_event'],'layer':this,'data':_0x537f33});},this['_map']['on'](mars3d__namespace['EventType']['mouseMove'],this[_0x1e57fe(_0xf451af._0x50ae23)],this));return this;}['off'](_0x48513a,_0x1b9bdc){const _0x2ed519={_0x2644b3:0x1e2,_0x4c297c:0x1f5,_0x269786:0x19a},_0x493022=_0x31a592;if(_0x48513a===_0x493022(0x1ef)){var _0x25047d;this['_map']['off'](_0x48513a,this[_0x493022(_0x2ed519._0x2644b3)],this),(_0x25047d=this[_0x493022(_0x2ed519._0x4c297c)]['methods'])!==null&&_0x25047d!==void 0x0&&_0x25047d['mousemove']&&delete this['options'][_0x493022(_0x2ed519._0x269786)]['click'];}else{if(_0x48513a==='mouseMove'){var _0x28d4ab;this['_map']['off'](_0x48513a,this['_onMapMouseMove'],this),(_0x28d4ab=this['options']['methods'])!==null&&_0x28d4ab!==void 0x0&&_0x28d4ab['mousemove']&&delete this['options']['methods']['mousemove'];}}return this;}}function _0x3bfb(){const _0x59df0=['clampToGround','left','3090VuNGQv','_data','fillRect','click','camera','mousemove','positionWC','absolute','SceneMode','options','all','block','init','SCENE3D','render','get','MapVLayer','removeData','getContext','BaseLayer','_mountedHook','2900982RfDrWR','postRender','dataSet','_pointerEvents','_createCanvas','updateData','destroy','width','methods','clickEvent','59733MvxQzc','canvas','_coordinates','animatorMovestartEvent','mouseMove','resize','globe','13327lSLKML','windowPosition','unbindEvent','canvasLayer','297432npUQjg','stop','clear','76xMnJCm','cartesianToCanvasCoordinates','type','getData','ellipsoid','prototype','getOwnPropertyDescriptor','animation','push','style','add','2824870SZaTeh','height','mapvDepthTest','argCheck','fixedHeight','off','trails','parentElement','draw','_setOptionsHook','size','stepsRange','drawContext','isPointVisible','1936TqvQcL','context','isEnabledTime','initDevicePixelRatio','FeatureCollection','animator','zIndex','pointerEvents','removeChild','_map','update','_onMapMouseMove','transferCoordinate','mapvFixedHeight','scene','stopAniamation','6ghVdtq','forEach','EventType','keys','function','14564rLSMmJ','scale','restore','Rectangle','length','0px','bind','8130WHGxbM','_cache_event','LayerUtil','_onMapClick','fromDegrees','clearData','82DjIaCT','_onMoveEndEvent','getHeight','_reset','_mapVRenderer'];_0x3bfb=function(){return _0x59df0;};return _0x3bfb();}mars3d__namespace[_0x31a592(0x1e1)]['register']('mapv',MapVLayer),mars3d__namespace['layer']['MapVLayer']=MapVLayer,exports[_0x31a592(0x1fc)]=MapVLayer,Object['keys'](mapv)[_0x31a592(0x1d4)](function(_0x417264){if(_0x417264!=='default'&&!exports['hasOwnProperty'](_0x417264))Object['defineProperty'](exports,_0x417264,{'enumerable':!![],'get':function(){return mapv[_0x417264];}});}),Object['defineProperty'](exports,'__esModule',{'value':!![]});
}));
