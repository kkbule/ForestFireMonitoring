(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b7e87c7"],{"403b":function(t,e,a){"use strict";var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination-wrapper"},[e("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","current-page":t.page.pageNum,"page-size":t.page.pageSize,total:t.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentPageChange,"update:currentPage":function(e){return t.$set(t.page,"pageNum",e)},"update:current-page":function(e){return t.$set(t.page,"pageNum",e)}}})],1)},s=[],i={name:"PageBar",props:{page:{type:Object,default:()=>({pageNum:1,pageSize:10,total:0})},queryMethod:{type:Function,default:null}},mounted:function(){},methods:{handleCurrentPageChange(t){this.page.pageNum=t,this.queryMethod()},handleSizeChange(t){this.page.pageSize=t,this.queryMethod()}}},n=i,r=a("2877"),o=Object(r["a"])(n,l,s,!1,null,null,null);e["a"]=o.exports},"84d9":function(t,e,a){"use strict";var l=function(){var t=this,e=t._self._c;return e("el-dialog",{ref:"detailDialog",staticClass:"custom-dialog",attrs:{title:"车辆信息",visible:!0,"append-to-body":!0,"close-on-click-modal":!1,width:"60%"},on:{close:t.closeDialog}},[e("div",{staticClass:"form-wrapper"},[e("div",{staticClass:"form-box"},[e("div",{staticClass:"tit"},[e("h3",[t._v("基本信息")])]),e("div",{staticClass:"content"},[e("el-form",{ref:"baseInfoForm",attrs:{model:t.entity,rules:t.rules,"inline-message":!0}},[e("table",{attrs:{cellpadding:"0",cellspacing:"0"}},[e("tr",[e("td",{attrs:{colspan:"2"}},[e("div",{staticClass:"label"},[e("span",{staticClass:"red-star"},[t._v("*")]),t._v("单位")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1),e("td",[e("div",{staticClass:"label"},[e("span",{staticClass:"red-star"},[t._v("*")]),t._v("车辆类型")]),e("el-form-item",{attrs:{prop:"carType",size:"small"}},[e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",size:"small"},model:{value:t.carType,callback:function(e){t.carType=e},expression:"carType"}},t._l(t.carOptions,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)]),e("tr",[e("td",[e("div",{staticClass:"label"},[e("span",{staticClass:"red-star"},[t._v("*")]),t._v("品牌型号")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1),e("td",[e("div",{staticClass:"label"},[e("span",{staticClass:"red-star"},[t._v("*")]),t._v("编号")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1),e("td",[e("div",{staticClass:"label"},[t._v("车辆号")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1)]),e("tr",[e("td",{attrs:{colspan:"2"}},[e("div",{staticClass:"label"},[t._v("使用单位")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1),e("td",[e("div",{staticClass:"label"},[t._v("排量")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1)]),e("tr",[e("td",[e("div",{staticClass:"label"},[t._v("燃油")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1),e("td",[e("div",{staticClass:"label"},[t._v("注册日期")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择注册日期",size:"small"},model:{value:t.entity.date,callback:function(e){t.$set(t.entity,"date",e)},expression:"entity.date"}})],1)],1),e("td",[e("div",{staticClass:"label"},[t._v("购买价格")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1)]),e("tr",[e("td",[e("div",{staticClass:"label"},[t._v("管理员")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1),e("td",[e("div",{staticClass:"label"},[t._v("联系方式")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{placeholder:"请输入联系方式",size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1),e("td",[e("div",{staticClass:"label"},[t._v("GPS设备型号")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1)]),e("tr",[e("td",[e("div",{staticClass:"label"},[t._v("GPS号码")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1),e("td",{attrs:{colspan:"2"}},[e("div",{staticClass:"label"},[t._v("位置")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1)]),e("tr",[e("td",{attrs:{colspan:"3"}},[e("div",{staticClass:"label"},[t._v("备注")]),e("el-form-item",{attrs:{prop:"cartype",size:"small"}},[e("el-input",{attrs:{type:"textarea",rows:3,size:"small",clearable:"",maxlength:"50","show-word-limit":""},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1)],1)])])])],1)]),e("div",{staticClass:"form-box"},[e("div",{staticClass:"tit"},[e("h3",[t._v("照片信息")])]),e("div",{staticClass:"content no-bg"},[e("el-upload",{ref:"upload",staticClass:"custom-upload",attrs:{action:"",headers:t.uploadHeaders,data:t.uploadParams,"list-type":"picture-card","file-list":t.photoList,disabled:t.isReadonly,accept:".bmp,.jpg,.jpeg,.png,.gif,.jfif"},scopedSlots:t._u([{key:"file",fn:function({file:a}){return e("div",{staticClass:"pic-box"},[e("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:a.url,alt:""}}),e("span",{staticClass:"el-upload-list__item-actions"},[e("span",{staticClass:"el-upload-list__item-preview",on:{click:function(e){return t.handlePictureCardPreview(a)}}},[e("i",{staticClass:"el-icon-zoom-in"})])])])}}])},[e("el-button",{staticClass:"upload-btn",attrs:{icon:"el-icon-plus"}},[t._v("添加图片")]),e("div",{staticClass:"tip"},[t._v("支持jpg.png类型的图片格式， 不超过1MB。")])],1)],1)])]),e("div",{staticClass:"form-btn-wrapper"},[e("el-button",{staticClass:"e-btn-blue",attrs:{size:"small"},on:{click:t.saveInfo}},[t._v("保存")]),e("el-button",{staticClass:"e-btn-grey",attrs:{size:"small"},on:{click:t.closeDialog}},[t._v("取消")])],1)])},s=[],i={name:"DemoEdit",components:{},props:["dataId","title","isReadonly","orgRootId"],data(){return{activeName:"baseInfo",rules:{},entity:{},carOptions:[{value:"1",label:"汽车"}],carType:"",uploadParams:{},uploadHeaders:{Authorization:this.utils.localstorage.get("token")},photoList:[]}},created(){this.dataId?this.projno=this.dataId:(this.projno=this.utils.uuid(),this.entity.dcCarId=this.projno),this.uploadParams.projno=this.projno},mounted:function(){},methods:{getInfo(){this.dataId},getPhotoList(){let t=this;t.photoList=[]},handlePictureCardPreview(t){},saveInfo(){},closeDialog:function(){this.$emit("closeDialog")},reloadTableData(){this.$emit("reloadTableData")},validateForm:function(){this.rules={}}}},n=i,r=a("2877"),o=Object(r["a"])(n,l,s,!1,null,"57c10ed2",null);e["a"]=o.exports},d02a:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));const l=20},d49c:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-panel"},[e("Breadcrumb",{attrs:{breadcrumbs:t.breadcrumbs}}),e("el-form",{staticClass:"query-form",attrs:{inline:!0,model:t.queryParam}},[e("el-form-item",[e("el-input",{attrs:{placeholder:"请输入单位名称",size:"small",clearable:""},model:{value:t.queryParam.userName,callback:function(e){t.$set(t.queryParam,"userName",e)},expression:"queryParam.userName"}})],1),e("el-form-item",[e("el-input",{attrs:{placeholder:"请输入单位名称",size:"small",clearable:""},model:{value:t.queryParam.userName,callback:function(e){t.$set(t.queryParam,"userName",e)},expression:"queryParam.userName"}})],1),e("el-form-item",[e("el-input",{attrs:{placeholder:"请输入单位名称",size:"small",clearable:""},model:{value:t.queryParam.userName,callback:function(e){t.$set(t.queryParam,"userName",e)},expression:"queryParam.userName"}})],1),e("el-form-item",[e("el-button",{staticClass:"e-btn-blue",attrs:{size:"small"},on:{click:t.getTableData}},[t._v("开始查询")])],1)],1),e("div",{staticClass:"list-wrapper"},[t._m(0),e("div",{staticClass:"list-box"},[e("div",{staticClass:"btn-box"},[e("el-button",{staticClass:"e-btn-blue",attrs:{size:"small",icon:"el-icon-plus"},on:{click:function(e){return t.editData()}}},[t._v("添加数据")]),e("div",{staticClass:"right-btn"},[e("el-button",{staticClass:"e-btn-border-blue",attrs:{size:"small",icon:"el-icon-plus"}},[t._v("导入")]),e("el-button",{staticClass:"e-btn-border-blue",attrs:{size:"small",icon:"el-icon-plus"}},[t._v("导出")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticClass:"list-table",attrs:{data:t.tableData,stripe:"",border:"","highlight-current-row":""}},[e("el-table-column",{attrs:{type:"index",label:"序号",align:"center","class-name":"etc-width"}}),e("el-table-column",{attrs:{prop:"clxx",label:"车辆信息","min-width":"25%","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{prop:"sydw",label:"使用单位","min-width":"25%"}}),e("el-table-column",{attrs:{prop:"cllx",label:"车辆类型","min-width":"13%"}}),e("el-table-column",{attrs:{prop:"gly",label:"管理员","min-width":"12%"}}),e("el-table-column",{attrs:{label:"操作","min-width":"20%"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"et-btn-blue el-icon-location-information"},[t._v("定位")]),e("span",{staticClass:"et-btn-blue el-icon-location-information"},[t._v("查看")]),e("span",{staticClass:"et-btn-blue el-icon-location-information"},[t._v("预览")]),e("span",{staticClass:"et-btn-red el-icon-location-information"},[t._v("删除")])]}}])})],1),e("PageBar",{attrs:{page:t.page,queryMethod:t.getTableData}})],1)]),t.dialogProp.show?e("DemoEdit",{attrs:{dataId:t.dialogProp.dataId},on:{closeDialog:t.closeDialog,reloadTableData:t.getTableData}}):t._e()],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tool-box"},[e("span",[t._v(" 综合"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("span",{staticClass:"el-icon-menu"}),e("span",{staticClass:"el-icon-s-operation"})])}],i=a("d02a"),n=a("fbd2"),r=a("403b"),o=a("84d9"),c={name:"DemoList",components:{Breadcrumb:n["a"],PageBar:r["a"],DemoEdit:o["a"]},data:function(){return{breadcrumbs:["处理工具","格式转换"],tableLoading:!0,tableData:[],page:{pageNum:1,pageSize:i["a"],total:500},queryParam:{},dialogProp:{dataId:null,show:!1}}},created(){},mounted:function(){this.getTableData()},methods:{pageIndexMethod(t){return this.utils.pageIndexMethod(t,this.page)},getTableData(){this.tableData=[{id:"0",clxx:"云GZE500 森防牌BSF5030XTXB6云GZE500 森防牌BSF5030XTXB6云GZE500",sydw:"开远市林业和草原局林火监测中心",cllx:"通讯车",gly:"罗顺 15687309171"},{id:"0",clxx:"云GZE500 森防牌BSF5030XTXB6",sydw:"开远市林业和草原局林火监测中心",cllx:"通讯车",gly:"罗顺 15687309171"},{id:"0",clxx:"云GZE500 森防牌BSF5030XTXB6",sydw:"开远市林业和草原局林火监测中心",cllx:"通讯车",gly:"罗顺 15687309171"},{id:"0",clxx:"云GZE500 森防牌BSF5030XTXB6",sydw:"开远市林业和草原局林火监测中心",cllx:"通讯车",gly:"罗顺 15687309171"},{id:"0",clxx:"云GZE500 森防牌BSF5030XTXB6",sydw:"开远市林业和草原局林火监测中心",cllx:"通讯车",gly:"罗顺 15687309171"},{id:"0",clxx:"云GZE500 森防牌BSF5030XTXB6",sydw:"开远市林业和草原局林火监测中心",cllx:"通讯车",gly:"罗顺 15687309171"}],this.tableLoading=!1},closeDialog(){this.dialogProp.show=!1,this.dialogProp.dataId=null},editData(t){this.dialogProp.dataId=t||null,this.dialogProp.show=!0}}},m=c,d=a("2877"),u=Object(d["a"])(m,l,s,!1,null,null,null);e["default"]=u.exports},fbd2:function(t,e,a){"use strict";var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.backShow,expression:"backShow"}],staticClass:"back-box",on:{click:function(e){return t.$router.go(-1)}}},[e("span",{staticClass:"el-icon-back"})]),e("el-breadcrumb",{attrs:{separator:"/"}},[t._l(t.breadcrumbs,(function(a,l){return[e("el-breadcrumb-item",{key:l},[t._v(" "+t._s(a)+" ")])]}))],2)],1)},s=[],i={name:"Breadcrumb",props:{breadcrumbs:{type:Array,default:()=>[]},backShow:{type:Boolean,default:()=>!1}},mounted:function(){},methods:{}},n=i,r=a("2877"),o=Object(r["a"])(n,l,s,!1,null,"0e914e3c",null);e["a"]=o.exports}}]);