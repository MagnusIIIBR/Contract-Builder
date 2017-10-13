webpackJsonp([1],{"/oiM":function(t,e,n){"use strict";e.a={name:"Contact"}},0:function(t,e){},1:function(t,e){},2:function(t,e){},"2SJe":function(t,e,n){"use strict";var i=n("mvHQ"),a=n.n(i),o=n("fZjL"),s=n.n(o),r=n("Dd8w"),c=n.n(r),u=n("NYxO"),l=n("uXZL");e.a={name:"DataInput",computed:c()({},n.i(u.a)({decisions:"getDecisionsTree",current:"getCurrentNode",variables:"getVariables"})),data:function(){return{parseURL:""}},watch:{parseURL:function(t){this.validateURL()}},methods:{updateDecisions:function(t){this.$store.commit("updateDecisionsTree",t)},updateCurrent:function(t){this.$store.commit("updateCurrentNode",t)},updateContractName:function(t){this.$store.commit("updateContractName",t)},addVariables:function(t){this.$store.commit("addVariables",t)},clearDecisions:function(){this.$store.commit("updateDecisionsTree",[])},clearCurrent:function(){this.$store.commit("updateCurrentNode",[])},clearContract:function(){this.$store.commit("updateContract",[])},validateURL:function(){var t=new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(this.parseURL);if(null!==t&&void 0!==t){t=t[1];var e=new RegExp("[#&]gid=([0-9]+)").exec(this.parseURL);e=e?e[1]:"0",this.parseDataFromURL(t,e)}},parseUpload:function(t){var e=t.target.files[0],n=new FileReader,i=this;n.onload=function(t){i.parseSpreadsheetData(t,t.target.result)},n.readAsBinaryString(e)},parseDataFromURL:function(t,e){var n=this,i="https://docs.google.com/spreadsheets/d/"+t+"/export?format=xlsx&gid="+e;console.log(i);var a=new XMLHttpRequest;a.open("GET",i,!0),a.overrideMimeType("text/plain; charset=x-user-defined"),a.onload=function(t){var e=a.responseText,i=new File([],"sample.xlsx",{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),o=new FileReader;o.onload=function(t){n.parseSpreadsheetData(t,e)},o.readAsBinaryString(i)},a.send(null)},parseSpreadsheetData:function(t,e){var n={},i=l.read(e,{type:"binary"}),o=i.SheetNames[0];this.updateContractName(i.SheetNames[0]);for(var r=i.Sheets[o],c=s()(r).length,u=JSON.parse(a()(r)),d=0;d<c;d++){var p=s()(r)[d];if("!ref"!==p){var h=r[p].h;h||(h=r[p].w),u[p].w=h}}n=l.utils.sheet_to_row_object_array(u),console.log(n),this.contractObjParser(n),this.$router.push("contract")},contractObjParser:function(t){this.clearDecisions(),this.clearCurrent(),this.clearContract();var e=this,n=[];t.filter(function(t){var n=[];if(n.id=t.id,n.description=t.description,n.content=t.content,n.type=t.type,n.depends=t.depends,void 0===n.depends&&(n.depends=""),n.mandatory=t.mandatory,"true"===n.mandatory.toLowerCase()?n.mandatory=!0:n.mandatory=!1,n.disabled=t.disabled,void 0===n.disabled)n.disabled="";else if("true"===n.disabled.toLowerCase())return;n.used=!1,n.childs=[],e.checkVariables(n.content),e.decisions.push(n)}),n=this.decisions.filter(function(t){return t.depends});var i=this.decisions.filter(function(t){return!t.depends});this.updateDecisions(i),console.log(n);for(var a=!1,o=!1,s=0,r=n.length;!a;)n.forEach(function(t){(o=e.findFather(e.decisions,t))&&++s>=r&&(a=!0)})},checkVariables:function(t){var e=t.match(/{{\s*[\w.]+\s*}}/g);if(e){var n=e.map(function(t){return t.match(/[\w.]+/)[0]});this.addVariables(n),console.log(this.variables)}},findFather:function(t,e){var n=!1,i=this;return t.filter(function(t){n||(t.id===e.depends?(t.childs.push(e),n=!0):t.childs.length>0&&(n=i.findFather(t.childs,e)))}),n}}}},"71F2":function(t,e,n){"use strict";e.a={name:"VarInput",props:["inputField","inputValue"],model:{prop:"inputValue",event:"input"},methods:{updateValue:function(t){""===t&&(t=this.inputField.toUpperCase()),this.inputValue[this.inputField]=t,this.$emit("input",this.inputValue)}}}},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.1beacaf.png"},"8yxk":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("section",[n("h2",[t._v("What is Contract Builder?")]),t._v(" "),n("p",[t._v("Contract Builder is a free open-source project that allows anyone to easily maintain and build any kind of contract (legal documents, lawsuit, rent, agreements, construction and so on) or even resumes using Google Spreadsheets. This was develop as a personal project to help a friend who was struggling spending up to an hour to make a custom contract, now she is able to do it in less than 5 minutes. Hooray!")])]),t._v(" "),n("section",[n("h2",[t._v("Features")]),t._v(" "),n("p",[t._v("Lorem ipsum.")]),t._v(" "),n("ul",[n("li",[t._v("Parse data from Google Spreadsheet")]),t._v(" "),n("li",[t._v("Use HTML to enhance your contract")]),t._v(" "),n("li",[t._v('\n        4 different types of "blocks"\n        '),n("ul",[n("li",[t._v("Title")]),t._v(" "),n("li",[t._v("Subtitle")]),t._v(" "),n("li",[t._v("Paragraph")]),t._v(" "),n("li",[t._v("List")])])]),t._v(" "),n("li",[t._v("Download the contract as .docx")])])]),t._v(" "),n("section",[n("h2",[t._v("Usage")]),t._v(" "),n("p",[t._v("First of all you need to create a Google Spreadsheet or .xls file following the same rules as this one (you can "),n("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1HFGm_cSH_XeZtxfREusftu-4S1LYZeAVSVjWMmsRHtY/copy"}},[t._v("make a copy")]),t._v(" or "),n("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1HFGm_cSH_XeZtxfREusftu-4S1LYZeAVSVjWMmsRHtY/export?format=xlsx&gid=0"}},[t._v("download it")]),t._v(" if you like) and populate with your contract informations.")]),t._v(" "),n("ul",[n("li",[n("b",[t._v("id:")]),t._v(" The identification of the row, it can be anything but must be unique")]),t._v(" "),n("li",[n("b",[t._v("description:")]),t._v(" Short description of the row")]),t._v(" "),n("li",[n("b",[t._v("content:")]),t._v(" The actual content that will appear on the contract. Use HTML tags to format this content")]),t._v(" "),n("li",[n("b",[t._v("type:")]),t._v(" Type of the block\n        "),n("ul",[n("li",[n("b",[t._v("title:")]),t._v(" A title for the contract")]),t._v(" "),n("li",[n("b",[t._v("title-center:")]),t._v(" A centralized title for the contract")]),t._v(" "),n("li",[n("b",[t._v("subtitle:")]),t._v(" A subtitle for the contract")]),t._v(" "),n("li",[n("b",[t._v("subtitle-center:")]),t._v(" A centralized subtitle for the contract")]),t._v(" "),n("li",[n("b",[t._v("paragraph:")]),t._v(" A paragraph for the contract")]),t._v(" "),n("li",[n("b",[t._v("paragraph-center:")]),t._v(" A centralized paragraph for the contract")]),t._v(" "),n("li",[n("b",[t._v("list:")]),t._v(" A basic list ")]),t._v(" "),n("li",[n("b",[t._v("numeric-list:")]),t._v(" A list with a incremented number before it")]),t._v(" "),n("li",[n("b",[t._v("circle-list:")]),t._v(" A list with a circle before it")]),t._v(" "),n("li",[n("b",[t._v("square-list:")]),t._v(" A list with a square before it")])])]),t._v(" "),n("li",[n("b",[t._v("depends:")]),t._v(" Put the identification (id) of the row that this row must belong")]),t._v(" "),n("li",[n("b",[t._v("mandatory:")]),t._v(" Make the row mandatory, meaning it will not ask to be added to the contract")]),t._v(" "),n("li",[n("b",[t._v("disabled:")]),t._v(" Disable row")])]),t._v(" "),n("p",[t._v("So whenever you want a part of the contract to be only available when certain other part is on the contract, you should use the depends field. One row can depend of another row that also depends on another and so on. Use your creativity.")])])])}],o={render:i,staticRenderFns:a};e.a=o},FiWN:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"no-print"},[n("h1",[t._v(t._s(t.contractName))]),t._v(" "),t.showButton?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.startDecisions()}}},[t._v("Start")]):t._e()]),t._v(" "),n("div",[0===t.decisions.length?n("section",{staticClass:"no-print",class:{"hide-menu":t.hideMenu},attrs:{id:"variables-container"}},[n("div",{staticClass:"hide-menu",attrs:{id:"variables-menu-toggle"}},[n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){t.toggleVariableMenu()}}},[t._v("Toggle Menu")])]),t._v(" "),n("div",{class:{"hide-menu":t.hideMenu},attrs:{id:"variables-menu"}},[n("h3",[t._v("Variables")]),t._v(" "),t._l(t.variables,function(e,i,a){return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showVariableInput[i],expression:"showVariableInput[key]"}],staticClass:"variableEditor"},[n("label",{staticClass:"col-form-label",attrs:{for:i+a}},[t._v(t._s(t.prettifyVarName(i)))]),t._v(" "),n("var-input",{staticClass:"form-control",attrs:{id:i+a,inputField:i},model:{value:t.inputVars,callback:function(e){t.inputVars=e},expression:"inputVars"}})],1)])})],2)]):t._e(),t._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:t.showContract,expression:"showContract"}],attrs:{id:"contract-section"}},t._l(t.dynamicComponents,function(t){return n("div",[n(t.name,{tag:"p",attrs:{dynamicContent:t.content}})])}))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showContract&&t.decisions.length>0,expression:"showContract && (decisions.length > 0)"}],staticClass:"no-print",attrs:{id:"pick-option"}},[n("p",[t._v('Add "'+t._s(t.current.description)+'"?')]),t._v(" "),n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){t.generateHTMLContent(t.current)}}},[t._v("Yes")]),t._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.JSONPath(t.decisions,0)}}},[t._v("No")])])])},a=[],o={render:i,staticRenderFns:a};e.a=o},FnhZ:function(t,e,n){"use strict";function i(t){n("NzUu")}var a=n("/oiM"),o=n("SeOR"),s=n("VU/8"),r=i,c=s(a.a,o.a,r,"data-v-79a9ca80",null);e.a=c.exports},Fs8J:function(t,e,n){"use strict";e.a={name:"Home"}},HTUP:function(t,e){},M93x:function(t,e,n){"use strict";function i(t){n("ztHt")}var a=n("xJD8"),o=n("uSXR"),s=n("VU/8"),r=i,c=s(a.a,o.a,r,null,null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("M93x"),o=n("YaEn"),s=n("olkN");i.a.config.productionTip=!1,new i.a({el:"#app",router:o.a,store:s.a,template:"<App/>",components:{App:a.a}})},NzUu:function(t,e){},PEiY:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{attrs:{type:"text"},domProps:{value:t.inputValue[t.inputField]},on:{input:function(e){t.updateValue(e.target.value)}}})},a=[],o={render:i,staticRenderFns:a};e.a=o},SMAl:function(t,e,n){"use strict";function i(t){n("U4Kg")}var a=n("71F2"),o=n("PEiY"),s=n("VU/8"),r=i,c=s(a.a,o.a,r,"data-v-0e72ff33",null);e.a=c.exports},SeOR:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contact"}},[n("section",[n("h2",[t._v("Contact")]),t._v(" "),n("p",[t._v("To get in contact please access our GitHub project page "),n("a",{attrs:{href:"https://github.com/blopa/Contract-Builder"}},[t._v("here")])])])])}],o={render:i,staticRenderFns:a};e.a=o},TO8t:function(t,e,n){"use strict";function i(t){n("TVm9")}var a=n("2SJe"),o=n("uapg"),s=n("VU/8"),r=i,c=s(a.a,o.a,r,"data-v-6aa912c0",null);e.a=c.exports},TVm9:function(t,e){},U4Kg:function(t,e){},YaEn:function(t,e,n){"use strict";var i=n("7+uW"),a=n("/ocq"),o=n("lO7g"),s=n("TO8t"),r=n("v3tV"),c=n("FnhZ");i.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:o.a},{path:"/builder",name:"DataInput",component:s.a},{path:"/contract",name:"ContractBuilder",component:r.a},{path:"/contact",name:"Contact",component:c.a}]})},bMrm:function(t,e){},cdjJ:function(t,e,n){"use strict";var i=n("fZjL"),a=n.n(i),o=n("Dd8w"),s=n.n(o),r=n("SMAl"),c=n("NYxO"),u=n("7+uW");e.a={name:"ContractBuilder",components:{VarInput:r.a},destroyed:function(){this.updateContract([])},mounted:function(){this.decisions.length>0?(this.showButton=!0,this.pickOptionListener(1)):this.contract.length>0?this.showContract=!0:this.$router.push("/")},computed:s()({},n.i(c.a)({decisions:"getDecisionsTree",current:"getCurrentNode",contract:"getContract",contractName:"getContractName",variables:"getVariables",numericListCount:"getNumericListCount"})),data:function(){return{auxPath:[],showButton:!1,showContract:!1,isMouseButtonDown:!1,mousePositionOffset:[],mousePosition:{},lastItemType:"",dynamicComponents:[],inputVars:{},showVariableInput:[],hideMenu:!0,compCount:1}},methods:{addDecision:function(t){this.$store.commit("addDecision",t)},addContractSection:function(t){this.$store.commit("addContractSection",t)},updateContract:function(t){this.$store.commit("updateContract",t)},addVariables:function(t){this.$store.commit("addVariables",t)},updateVariableContent:function(t,e){this.$store.commit("updateVariableContent",[t,e])},updateDecisions:function(t){this.$store.commit("updateDecisionsTree",t)},updateCurrent:function(t){this.$store.commit("updateCurrentNode",t)},incrementNumericListCount:function(){this.$store.commit("incrementNumericListCount")},updateNumericListCount:function(t){this.$store.commit("updateNumericListCount",t)},draggableDivMouseDown:function(t){var e=document.getElementById("pick-option");this.isMouseButtonDown=!0,this.mousePositionOffset=[e.offsetLeft-t.clientX,e.offsetTop-t.clientY]},draggableDivMouseUp:function(){this.isMouseButtonDown=!1},draggableDivMouseMove:function(t){var e=document.getElementById("pick-option");t.preventDefault(),this.isMouseButtonDown&&(this.mousePosition={x:t.clientX,y:t.clientY},e.style.left=this.mousePosition.x+this.mousePositionOffset[0]+"px",e.style.top=this.mousePosition.y+this.mousePositionOffset[1]+"px")},pickOptionListener:function(t){var e=document.getElementById("pick-option");1===t?(e.addEventListener("mousedown",this.draggableDivMouseDown,!0),document.addEventListener("mouseup",this.draggableDivMouseUp,!0),document.addEventListener("mousemove",this.draggableDivMouseMove,!0)):(e.removeEventListener("mousedown",this.draggableDivMouseDown,!0),document.removeEventListener("mouseup",this.draggableDivMouseUp,!0),document.removeEventListener("mousemove",this.draggableDivMouseMove,!0))},startDecisions:function(){this.showContract=!0,this.showButton=!1,this.JSONPath(this.decisions,0)},JSONPath:function(t,e){var n=this;console.log("Current node: "+e);var i=!1,a=[],o=0,s=t.length;if(t.forEach(function(t){i?a.push(t):t.mandatory?(o++,n.generateHTMLContent(t),t.content=t.content.replace(/&#x000a;/g,"<br/>"),t.childs.length>0&&(i=n.JSONPath(t.childs,e+1))):(n.updateCurrent(t),i=!0)}),o>=s&&(i=!0),a.length>0&&this.auxPath.push(a),!i&&this.decisions.length>0&&(i=this.JSONPath(this.decisions,e+1)),0===e){s=this.auxPath.length;for(var r=[],c=s-1;c>=0;c--)r=this.auxPath[c].concat(r);this.auxPath=[],this.updateDecisions(r),this.decisions.length<=0&&this.pickOptionListener(0)}return i},prettifyVarName:function(t){return t.replace(/_/g," ").toLowerCase().replace(/^.|\s\S/g,function(t){return t.toUpperCase()})},toggleVariableMenu:function(){this.hideMenu=!this.hideMenu},toggleVariableInput:function(t){var e=t.content.match(/{{\s*[\w.]+\s*}}/g);if(e){var n=this;e.map(function(t){return t.match(/[\w.]+/)[0]}).forEach(function(t){n.showVariableInput[t]=!0})}return t},generateHTMLContent:function(t){this.toggleVariableInput(t);var e=document.createElement("div"),n=void 0,i=void 0,o=void 0;if("list"===t.type)n=document.createElement("li"),n.className=t.type,n.innerHTML=t.content,e.appendChild(n),t.content=e.innerHTML;else if("numeric-list"===t.type){this.lastItemType!==t.type&&this.updateNumericListCount(1);var s=document.getElementById("custom-styles"),r="number-"+this.numericListCount;s.append(document.createTextNode("."+r+':before {content: "'+this.numericListCount+'";margin-left: -20px;margin-right: 15px;}')),i="li",o=t.type+" "+r+" list",this.incrementNumericListCount()}else"circle-list"===t.type?(i="li",o=t.type+" list"):"square-list"===t.type?(i="li",o=t.type+" list"):"list"===t.type?(i="li",o=t.type):"title"===t.type?(i="h1",o=t.type):"title-center"===t.type?(i="h1",o=t.type):"subtitle-center"===t.type?(i="h2",o=t.type):"subtitle"===t.type?(i="h2",o=t.type):(t.type,i="p",o=t.type);n=document.createElement(i),n.className=o,n.innerHTML=t.content,e.appendChild(n),t.content=e.innerHTML;var c=this,l="dynamicComp_"+this.compCount;if(u.a.component(l,{template:"<div>"+t.content+"</div>",props:["dynamicContent"],data:function(){return this.dynamicContent}}),a()(this.variables).forEach(function(t){u.a.set(c.inputVars,t,t.toUpperCase())}),this.dynamicComponents.push({name:l,content:this.$data.inputVars}),this.compCount++,this.lastItemType=t.type,this.addContractSection(t),!t.mandatory){if(t.childs.length>0)for(var d=t.childs.length,p=d-1;p>=0;p--)this.addDecision(t.childs[p]);this.JSONPath(this.decisions,0)}}}}},lO7g:function(t,e,n){"use strict";function i(t){n("HTUP")}var a=n("Fs8J"),o=n("8yxk"),s=n("VU/8"),r=i,c=s(a.a,o.a,r,"data-v-38c4f12f",null);e.a=c.exports},olkN:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("7+uW"),a=n("NYxO");i.a.use(a.b);var o=new a.b.Store({state:{decisionsTree:[],currentNode:[],contract:[],contractName:"",variables:{},numericListCount:1},getters:{getDecisionsTree:function(t){return t.decisionsTree},getCurrentNode:function(t){return t.currentNode},getContract:function(t){return t.contract},getContractName:function(t){return t.contractName},getVariables:function(t){return t.variables},getNumericListCount:function(t){return t.numericListCount}},mutations:{incrementNumericListCount:function(t){t.numericListCount++},updateNumericListCount:function(t,e){t.numericListCount=e},updateDecisionsTree:function(t,e){t.decisionsTree=e},addDecision:function(t,e){t.decisionsTree.unshift(e)},updateCurrentNode:function(t,e){t.currentNode=e},updateContract:function(t,e){t.contract=e},updateContractName:function(t,e){t.contractName=e},addContractSection:function(t,e){t.contract.push(e)},addVariables:function(t,e){var n=t.variables;e.forEach(function(t){void 0===n[t]&&(n[t]="")})},updateVariableContent:function(t,e){t.variables[e[0]]=e[1]}}})},uSXR:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav-menu no-print"},[n("ul",[t._m(0),t._v(" "),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n      ")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/builder"}},[t._v("Build a Contract")]),t._v(" |\n      ")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" |\n      ")],1)])]),t._v(" "),n("router-view")],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{staticClass:"nav-disabled",attrs:{href:"#"}},[i("img",{staticClass:"logo",attrs:{src:n("7Otq"),title:"Made with squarespace.com"}})])])}],o={render:i,staticRenderFns:a};e.a=o},uapg:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"data-input"}},[n("h4",[t._v("Paste your Google Spreadsheet URL...")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"input-container"},[n("div",{staticClass:"data-link-input"},[n("form",{on:{submit:function(e){t.validateURL()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.parseURL,expression:"parseURL"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Paste your Google Spreadsheet URL here."},domProps:{value:t.parseURL},on:{input:function(e){e.target.composing||(t.parseURL=e.target.value)}}})])]),t._v(" "),n("h4",[t._v("... or choose a file from your computer")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"data-upload-input"},[n("label",{staticClass:"custom-file"},[n("input",{staticClass:"custom-file-input",attrs:{type:"file"},on:{change:t.parseUpload}}),t._v(" "),n("span",{staticClass:"custom-file-control"},[t._v("Choose file...")])])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("("),n("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1HFGm_cSH_XeZtxfREusftu-4S1LYZeAVSVjWMmsRHtY/copy",target:"_blank"}},[t._v("make a copy")]),t._v(")")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("("),n("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1HFGm_cSH_XeZtxfREusftu-4S1LYZeAVSVjWMmsRHtY/export?format=xlsx&gid=0"}},[t._v("download sample")]),t._v(")")])}],o={render:i,staticRenderFns:a};e.a=o},v3tV:function(t,e,n){"use strict";function i(t){n("bMrm")}var a=n("cdjJ"),o=n("FiWN"),s=n("VU/8"),r=i,c=s(a.a,o.a,r,"data-v-c7209fee",null);e.a=c.exports},xJD8:function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),o=n("NYxO");e.a={name:"app",mounted:function(){var t=document.createElement("style");t.id="custom-styles",document.getElementById("app").appendChild(t)},computed:a()({},n.i(o.a)({contract:"getContract"}))}},ztHt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b6d1325f929b5b8f287c.js.map