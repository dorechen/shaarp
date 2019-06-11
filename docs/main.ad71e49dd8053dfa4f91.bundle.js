(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return CornerActionArea});__webpack_require__(23);var _emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_emotion_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),actionArea={name:"xmwa61-actionArea",styles:"position:absolute;bottom:0;right:0;label:actionArea;"},CornerActionArea=function(props){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.a)("div",Object.assign({css:Object(_emotion_css__WEBPACK_IMPORTED_MODULE_1__.a)([actionArea],"label:CornerActionArea;")},props))};CornerActionArea.displayName="CornerActionArea",CornerActionArea.__docgenInfo={description:"",methods:[],displayName:"CornerActionArea"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CornerActionArea.js"]={name:"CornerActionArea",docgenInfo:CornerActionArea.__docgenInfo,path:"src/CornerActionArea.js"})},187:function(module,exports,__webpack_require__){__webpack_require__(188),__webpack_require__(274),module.exports=__webpack_require__(275)},25:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Input});__webpack_require__(21),__webpack_require__(47),__webpack_require__(17),__webpack_require__(18),__webpack_require__(16),__webpack_require__(30),__webpack_require__(23);var _emotion_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_emotion_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(20),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var baseInput={name:"lcsnbq-baseInput",styles:"width:100%;height:48px;padding:0px;border:none;outline:none;background-color:#fafafa;font-size:24px;text-align:center;&::placeholder{color:#979797;}&:focus{&::placeholder{color:transparent;}}label:baseInput;"},titleInput={name:"vp720a-titleInput",styles:"height:72px;font-size:48px;label:titleInput;"},mobileInput={name:"19he3cj-mobileInput",styles:"font-size:16px;label:mobileInput;"},mobileTitleInput={name:"1cnt32y-mobileTitleInput",styles:"height:48px;font-weight:bold;label:mobileTitleInput;"},Input=function(_ref){var title=_ref.title,mobile=_ref.mobile,props=_objectWithoutProperties(_ref,["title","mobile"]);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__.a)("input",Object.assign({css:Object(_emotion_css__WEBPACK_IMPORTED_MODULE_7__.a)([baseInput,title?titleInput:null,mobile?mobileInput:null,mobile&&title?mobileTitleInput:null],"label:Input;")},props))};Input.displayName="Input",Input.propTypes={title:prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,mobile:prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool},Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{title:{type:{name:"bool"},required:!1,description:""},mobile:{type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Input.js"]={name:"Input",docgenInfo:Input.__docgenInfo,path:"src/Input.js"})},275:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(17),__webpack_require__(18),__webpack_require__(16),__webpack_require__(36);var _storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(37);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addParameters)({backgrounds:[{name:"woork",value:"#ffffff",default:!0},{name:"twitter",value:"#00aced"},{name:"facebook",value:"#3b5998"}]});var req=__webpack_require__(341);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(100)(module))},341:function(module,exports,__webpack_require__){var map={"./Button.stories.js":342,"./Input.stories.js":414};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=341},342:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _emotion_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(37),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_CornerActionArea__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(112),_CornerButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(49),_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(39),_ref=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Desktop Default Button"),_ref2=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Mobile Default Button"),_ref3=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Desktop Inverted Button"),_ref4=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Mobile Inverted Button"),_ref5=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Desktop Selector Button"),_ref6=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Mobile Selector Button"),_ref7=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Desktop Corner Button"),_ref8=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Mobile Corner Button");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).add("default",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("div",null,_ref,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")}," Default "),_ref2,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{mobile:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Default"))}).add("inverted",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("div",null,_ref3,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{inverted:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Inverted"),_ref4,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{inverted:!0,mobile:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Inverted"))}).add("selector",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("div",null,_ref5,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{selector:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Selector"),_ref6,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{selector:!0,mobile:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Selector"))}).add("corner",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("div",null,_ref7,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_CornerActionArea__WEBPACK_IMPORTED_MODULE_3__.a,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_CornerButton__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked disabled")},"Corner Disabled"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_CornerButton__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked 1")}," Corner 1 "),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_CornerButton__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked 2")}," Corner 2 ")))}).add("corner mobile",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("div",null,_ref8,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_CornerActionArea__WEBPACK_IMPORTED_MODULE_3__.a,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_CornerButton__WEBPACK_IMPORTED_MODULE_4__.a,{mobile:!0,disabled:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"0"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_CornerButton__WEBPACK_IMPORTED_MODULE_4__.a,{mobile:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"1")))})}.call(this,__webpack_require__(100)(module))},39:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Button});__webpack_require__(21),__webpack_require__(47),__webpack_require__(17),__webpack_require__(18),__webpack_require__(16),__webpack_require__(30),__webpack_require__(23);var _emotion_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_emotion_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(20),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var basicButton={name:"f4hdl3-basicButton",styles:"min-width:336px;height:48px;color:#ffffff;background-color:#000000;border:none;outline:none;font-size:24px;cursor:pointer;transition:linear 300ms;transition-property:color,background-color;&:hover{background-color:#00000080;}label:basicButton;"},invertedButton={name:"1r2e385-invertedButton",styles:"background-color:#414141;border:2px solid #ffffff;&:hover,&:focus{background-color:#ffffff;color:#000000;}label:invertedButton;"},selectorButton={name:"1sjbdmv-selectorButton",styles:"background-color:#fafafa;color:#979797;&:hover{background-color:#f0f0ee;color:#000000;}&:focus{background-color:#6e61cc;color:#fafafa;}label:selectorButton;"},mobileButton={name:"9x5agl-mobileButton",styles:"min-width:100%;label:mobileButton;"},Button=function(_ref){var inverted=_ref.inverted,selector=_ref.selector,mobile=_ref.mobile,props=_objectWithoutProperties(_ref,["inverted","selector","mobile"]);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__.a)("button",Object.assign({css:Object(_emotion_css__WEBPACK_IMPORTED_MODULE_7__.a)([basicButton,inverted?invertedButton:selector?selectorButton:null,mobile?mobileButton:null],"label:Button;")},props))};Button.displayName="Button",Button.propTypes={inverted:prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,selector:prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,mobile:prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{inverted:{type:{name:"bool"},required:!1,description:""},selector:{type:{name:"bool"},required:!1,description:""},mobile:{type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/Button.js"})},414:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _emotion_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(37),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_Input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(25),_TextArea__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(85),_ref=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Desktop Title Input"),_ref2=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Mobile Title Input"),_ref3=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Desktop Text Input"),_ref4=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Mobile Text Input"),_ref5=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"TextArea Input");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Input Field",module).add("Title",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("div",null,_ref,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Input__WEBPACK_IMPORTED_MODULE_3__.a,{title:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("title input selected"),placeholder:"Title Input with placeholder"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Input__WEBPACK_IMPORTED_MODULE_3__.a,{title:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("title input selected"),defaultValue:"Title Input with a value"}),_ref2,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Input__WEBPACK_IMPORTED_MODULE_3__.a,{title:!0,mobile:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("Mobile title input selected"),placeholder:"Mobile Title Input with placeholder"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Input__WEBPACK_IMPORTED_MODULE_3__.a,{title:!0,mobile:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("Mobile title input selected"),defaultValue:"Mobile Title Input with a value"}))}).add("Text",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("div",null,_ref3,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Input__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("text input selected"),placeholder:"Text Input with placeholder"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Input__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("text input selected"),defaultValue:"Text Input with a value"}),_ref4,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Input__WEBPACK_IMPORTED_MODULE_3__.a,{mobile:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("Mobile title input selected"),placeholder:"Mobile Title Input with placeholder"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Input__WEBPACK_IMPORTED_MODULE_3__.a,{mobile:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("Mobile title input selected"),defaultValue:"Mobile Title Input with a value"}))}).add("TextArea",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("div",null,_ref5,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_TextArea__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("text area selected"),placeholder:"Text area with placeholder"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_TextArea__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("text area selected"),defaultValue:"Text area with a value"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_TextArea__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("text area selected"),defaultValue:"Text area\nput notes here!\n:)"}))})}.call(this,__webpack_require__(100)(module))},49:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return CornerButton});__webpack_require__(21),__webpack_require__(47),__webpack_require__(17),__webpack_require__(18),__webpack_require__(16),__webpack_require__(30),__webpack_require__(23);var _emotion_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_emotion_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(20),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var baseButton={name:"1bczvod-baseButton",styles:"border:none;height:48px;min-width:204px;background:#000;color:#fff;font-size:24px;cursor:pointer;transition:linear background 300ms;&:focus{outline:none;background:#080808;}&:hover{background:rgba(0,0,0,0.8);}&:disabled{background:#ddd;cursor:default;}@media print{display:none;}label:baseButton;"},mobileButton={name:"1myipfy-mobileButton",styles:"min-width:48px;label:mobileButton;"},CornerButton=function(_ref){var mobile=_ref.mobile,props=_objectWithoutProperties(_ref,["mobile"]);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__.a)("button",Object.assign({css:Object(_emotion_css__WEBPACK_IMPORTED_MODULE_7__.a)([baseButton,mobile?mobileButton:null],"label:CornerButton;")},props))};CornerButton.displayName="CornerButton",CornerButton.propTypes={mobile:prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool},CornerButton.__docgenInfo={description:"",methods:[],displayName:"CornerButton",props:{mobile:{type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CornerButton.js"]={name:"CornerButton",docgenInfo:CornerButton.__docgenInfo,path:"src/CornerButton.js"})},85:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return TextArea});__webpack_require__(21),__webpack_require__(47),__webpack_require__(17),__webpack_require__(18),__webpack_require__(16),__webpack_require__(30),__webpack_require__(23);var _emotion_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_emotion_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(4),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(20),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),autosize__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(186),autosize__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_11__);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var baseTextArea={name:"1tvdxdd-baseTextArea",styles:"width:100%;height:48px;padding:0px;box-sizing:border-box;padding:9px;border:0;outline:none;background-color:#fafafa;font-family:'Avenir Next';font-size:24px;text-align:center;resize:none;&::placeholder{color:#979797;}&:focus{&::placeholder{color:transparent;}}label:baseTextArea;"},TextArea=function(_ref){var value=_ref.value,props=_objectWithoutProperties(_ref,["value"]),textareaRef=Object(react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);return Object(react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function(){autosize__WEBPACK_IMPORTED_MODULE_11___default()(textareaRef.current)},[value]),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__.a)("textarea",Object.assign({ref:textareaRef,css:Object(_emotion_css__WEBPACK_IMPORTED_MODULE_7__.a)([baseTextArea],"label:TextArea;"),"data-enable-grammarly":"false",value:value},props))};TextArea.displayName="TextArea",TextArea.propTypes={value:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string},TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{value:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TextArea.js"]={name:"TextArea",docgenInfo:TextArea.__docgenInfo,path:"src/TextArea.js"})}},[[187,1,2]]]);
//# sourceMappingURL=main.ad71e49dd8053dfa4f91.bundle.js.map