(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Button});__webpack_require__(14),__webpack_require__(60),__webpack_require__(20),__webpack_require__(21);var _emotion_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(17),_emotion_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(40),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var basicButton={name:"f4hdl3-basicButton",styles:"min-width:336px;height:48px;color:#ffffff;background-color:#000000;border:none;outline:none;font-size:24px;cursor:pointer;transition:linear 300ms;transition-property:color,background-color;&:hover{background-color:#00000080;}label:basicButton;"},invertedButton={name:"1r2e385-invertedButton",styles:"background-color:#414141;border:2px solid #ffffff;&:hover,&:focus{background-color:#ffffff;color:#000000;}label:invertedButton;"},selectorButton={name:"1sjbdmv-selectorButton",styles:"background-color:#fafafa;color:#979797;&:hover{background-color:#f0f0ee;color:#000000;}&:focus{background-color:#6e61cc;color:#fafafa;}label:selectorButton;"},mobileButton={name:"1eq8oc6-mobileButton",styles:"@media screen and (max-width:600px){min-width:100%;font-size:16px;}label:mobileButton;"},Button=function(_ref){var inverted=_ref.inverted,selector=_ref.selector,props=_objectWithoutProperties(_ref,["inverted","selector"]);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__.a)("button",Object.assign({css:Object(_emotion_css__WEBPACK_IMPORTED_MODULE_4__.a)([basicButton,inverted?invertedButton:selector?selectorButton:null,mobileButton],"label:Button;")},props))};Button.displayName="Button",Button.propTypes={inverted:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,selector:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{inverted:{type:{name:"bool"},required:!1,description:""},selector:{type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/Button.js"})},106:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return TextArea});__webpack_require__(14),__webpack_require__(60),__webpack_require__(20),__webpack_require__(21);var _emotion_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(17),_emotion_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(40),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),autosize__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(238),autosize__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_8__);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var baseTextArea={name:"9hjurb-baseTextArea",styles:"width:100%;height:48px;padding:0px;box-sizing:border-box;padding:9px;border:0;outline:none;background-color:#fafafa;font-family:inherit;font-size:24px;text-align:center;resize:none;&::placeholder{color:#979797;}&:focus{&::placeholder{color:transparent;}}label:baseTextArea;"},TextArea=function(_ref){var defaultValue=_ref.defaultValue,props=_objectWithoutProperties(_ref,["defaultValue"]),textareaRef=Object(react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);return Object(react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function(){autosize__WEBPACK_IMPORTED_MODULE_8___default()(textareaRef.current)},[defaultValue]),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__.a)("textarea",Object.assign({ref:textareaRef,css:Object(_emotion_css__WEBPACK_IMPORTED_MODULE_4__.a)([baseTextArea],"label:TextArea;"),"data-enable-grammarly":"false",defaultValue:defaultValue},props))};TextArea.displayName="TextArea",TextArea.propTypes={defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string},TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{defaultValue:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TextArea.js"]={name:"TextArea",docgenInfo:TextArea.__docgenInfo,path:"src/TextArea.js"})},148:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return CornerButton});__webpack_require__(20);var _emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(17),_emotion_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),baseButton={name:"1bczvod-baseButton",styles:"border:none;height:48px;min-width:204px;background:#000;color:#fff;font-size:24px;cursor:pointer;transition:linear background 300ms;&:focus{outline:none;background:#080808;}&:hover{background:rgba(0,0,0,0.8);}&:disabled{background:#ddd;cursor:default;}@media print{display:none;}label:baseButton;"},mobileButton={name:"1mby1ur-mobileButton",styles:"@media screen and (max-width:600px){min-width:48px;}label:mobileButton;"},CornerButton=function(props){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.a)("button",Object.assign({css:Object(_emotion_css__WEBPACK_IMPORTED_MODULE_1__.a)([baseButton,mobileButton],"label:CornerButton;")},props))};CornerButton.displayName="CornerButton",CornerButton.__docgenInfo={description:"",methods:[],displayName:"CornerButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CornerButton.js"]={name:"CornerButton",docgenInfo:CornerButton.__docgenInfo,path:"src/CornerButton.js"})},233:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# Button Usage\n\n## Typical Default Button Use\n\n```javascript\nimport { Button } from '@woorkio/shaarp'\n\n<Button> Default </Button>\n```\n\n## Inverted and Selector Styles\n\n```javascript\n<Button inverted> Inverted </Button>\n\n<Button selector> Selector </Button>\n```\n\n\n## Note\n\n- Mobile View: `Button` style will change with screen width <= 600px"},234:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# Corner Button Usage\n\n## Typical use\n\n```javascript\nimport { CornerButton, CornerActionArea } from '@woorkio/shaarp'\n\n<CornerActionArea>\n  <CornerButton> 1 </CornerButton>\n  <CornerButton> 2 </CornerButton>\n</CornerActionArea>\n```\n\n## Note\n- `CornerButton` should be wrapped in `CornerActionArea` for positioning.\n- Mobile View: `Corner Button` style and `CornerActionArea` positioning will change with screen width <= 600px"},235:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return CornerActionArea});__webpack_require__(14),__webpack_require__(60),__webpack_require__(20),__webpack_require__(21);var _emotion_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(17),_emotion_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(40),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var actionArea={name:"mtu776-actionArea",styles:"position:absolute;label:actionArea;"},mobileArea={name:"1m02xwx-mobileArea",styles:"@media screen and (max-width:600px){display:flex;flex-direction:column;bottom:48px;}label:mobileArea;"},bottomRightArea={name:"1gn18of-bottomRightArea",styles:"bottom:0;right:0;label:bottomRightArea;"},topRightArea={name:"6wl5z8-topRightArea",styles:"top:0;right:0;label:topRightArea;"},CornerActionArea=function(_ref){var topRight=_ref.topRight,props=_objectWithoutProperties(_ref,["topRight"]);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__.a)("div",Object.assign({css:Object(_emotion_css__WEBPACK_IMPORTED_MODULE_4__.a)([actionArea,topRight?topRightArea:bottomRightArea,mobileArea],"label:CornerActionArea;")},props))};CornerActionArea.displayName="CornerActionArea",CornerActionArea.propTypes={topRight:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool},CornerActionArea.__docgenInfo={description:"",methods:[],displayName:"CornerActionArea",props:{topRight:{type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CornerActionArea.js"]={name:"CornerActionArea",docgenInfo:CornerActionArea.__docgenInfo,path:"src/CornerActionArea.js"})},236:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='# Input Usage\n\n## Typical Input Use\n\n```javascript\nimport { Input } from \'@woorkio/shaarp\'\n\n<Input\n  big\n  defaultValue="Big Input with a value"\n/>\n\n<Input\n  defaultValue="Text Input with a value"\n/>\n```\n\n## Note\n- Use prop `big` in `Input` to use as "Big Input"\n- Mobile View: `Input` style will change with screen width <= 600px'},237:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# TextArea Usage\n\n## Typical TextArea Use\n\n```javascript\nimport { TextArea } from '@woorkio/shaarp'\n\n<TextArea\n  defaultValue=\"Big Input with a value\"\n/>\n```"},239:function(module,exports,__webpack_require__){__webpack_require__(240),__webpack_require__(343),module.exports=__webpack_require__(344)},344:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(15),__webpack_require__(28),__webpack_require__(26),__webpack_require__(16),__webpack_require__(33);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(49);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({backgrounds:[{name:"woork",value:"#ffffff",default:!0},{name:"twitter",value:"#00aced"},{name:"facebook",value:"#3b5998"}]});var req=__webpack_require__(508);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(118)(module))},508:function(module,exports,__webpack_require__){var map={"./Button.stories.js":509,"./Input.stories.js":524};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=508},509:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _emotion_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(18),_buttonNotes_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(233),_cornerButtonNotes_md__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(234),_CornerActionArea__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(235),_CornerButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(148),_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(105),_ref=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Default Button"),_ref2=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Inverted Button"),_ref3=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Selector Button"),_ref4=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Corner Button");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).add("button",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("div",null,_ref,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Button__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")}," Default "),_ref2,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Button__WEBPACK_IMPORTED_MODULE_7__.a,{inverted:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Inverted"),_ref3,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Button__WEBPACK_IMPORTED_MODULE_7__.a,{selector:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Selector"))},{notes:{markdown:_buttonNotes_md__WEBPACK_IMPORTED_MODULE_3__.a}}).add("corner button",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("div",null,_ref4,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_CornerActionArea__WEBPACK_IMPORTED_MODULE_5__.a,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_CornerButton__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked 1")}," 1 "),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_CornerButton__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked 2")}," 2 ")))},{notes:{markdown:_cornerButtonNotes_md__WEBPACK_IMPORTED_MODULE_4__.a}})}.call(this,__webpack_require__(118)(module))},524:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _emotion_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(18),_inputNotes_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(236),_textAreaNotes_md__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(237),_Input__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(76),_TextArea__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(106),_ref=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Big Input"),_ref2=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"Default Input"),_ref3=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("h1",null,"TextArea Input");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Input Field",module).add("Input",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("div",null,_ref,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Input__WEBPACK_IMPORTED_MODULE_5__.a,{big:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("big input selected"),placeholder:"Big Input with placeholder"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Input__WEBPACK_IMPORTED_MODULE_5__.a,{big:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("big input selected"),defaultValue:"Big Input with a value"}),_ref2,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Input__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("text input selected"),placeholder:"Text Input with placeholder"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_Input__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("text input selected"),defaultValue:"Text Input with a value"}))},{notes:{markdown:_inputNotes_md__WEBPACK_IMPORTED_MODULE_3__.a}}).add("TextArea",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)("div",null,_ref3,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_TextArea__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("text area selected"),placeholder:"Text area with placeholder"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_TextArea__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("text area selected"),defaultValue:"Text area with a value"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.a)(_TextArea__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("text area selected"),defaultValue:"Text area\nput notes here!\n:)"}))},{notes:{markdown:_textAreaNotes_md__WEBPACK_IMPORTED_MODULE_4__.a}})}.call(this,__webpack_require__(118)(module))},76:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Input});__webpack_require__(14),__webpack_require__(60),__webpack_require__(20),__webpack_require__(21),__webpack_require__(525);var _emotion_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(17),_emotion_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(40),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var baseInput={name:"lcsnbq-baseInput",styles:"width:100%;height:48px;padding:0px;border:none;outline:none;background-color:#fafafa;font-size:24px;text-align:center;&::placeholder{color:#979797;}&:focus{&::placeholder{color:transparent;}}label:baseInput;"},bigInput={name:"1bult1u-bigInput",styles:"height:72px;font-size:48px;@media screen and (max-width:600px){height:48px;font-weight:bold;}label:bigInput;"},mobileInput={name:"ypjqna-mobileInput",styles:"@media screen and (max-width:600px){font-size:16px;}label:mobileInput;"},Input=function(_ref){var big=_ref.big,props=_objectWithoutProperties(_ref,["big"]);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__.a)("input",Object.assign({css:Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__.a)([baseInput,big&&bigInput,mobileInput],"label:Input;")},props))};Input.displayName="Input",Input.propTypes={big:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool},Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{big:{type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Input.js"]={name:"Input",docgenInfo:Input.__docgenInfo,path:"src/Input.js"})}},[[239,1,2]]]);
//# sourceMappingURL=main.08de734beeda170952cd.bundle.js.map