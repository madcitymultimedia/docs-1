(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{377:function(e,t,n){var a=n(9),r=n(0),l=n(3),i=n(100),o=n(230),u=n(34),s=n(14).f,c=n(49).f,d=n(32),f=n(219),p=n(16),y=n(133),m=n(215),v=n(15),b=n(4),h=n(12),g=n(38).enforce,O=n(224),j=n(6),w=n(218),x=n(226),k=j("match"),C=r.RegExp,_=C.prototype,T=r.SyntaxError,E=l(y),S=l(_.exec),A=l("".charAt),B=l("".replace),D=l("".indexOf),P=l("".slice),N=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,L=/a/g,M=/a/g,R=new C(L)!==L,H=m.UNSUPPORTED_Y,V=a&&(!R||H||w||x||b((function(){return M[k]=!1,C(L)!=L||C(M)==M||"/a/i"!=C(L,"i")})));if(i("RegExp",V)){for(var q=function(e,t){var n,a,r,l,i,s,c=d(_,this),y=f(e),m=void 0===t,v=[],b=e;if(!c&&y&&m&&e.constructor===q)return e;if((y||d(_,e))&&(e=e.source,m&&(t="flags"in b?b.flags:E(b))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),b=e,w&&"dotAll"in L&&(a=!!t&&D(t,"s")>-1)&&(t=B(t,/s/g,"")),n=t,H&&"sticky"in L&&(r=!!t&&D(t,"y")>-1)&&(t=B(t,/y/g,"")),x&&(e=(l=function(e){for(var t,n=e.length,a=0,r="",l=[],i={},o=!1,u=!1,s=0,c="";a<=n;a++){if("\\"===(t=A(e,a)))t+=A(e,++a);else if("]"===t)o=!1;else if(!o)switch(!0){case"["===t:o=!0;break;case"("===t:S(N,P(e,a+1))&&(a+=2,u=!0),r+=t,s++;continue;case">"===t&&u:if(""===c||h(i,c))throw new T("Invalid capture group name");i[c]=!0,l[l.length]=[c,s],u=!1,c="";continue}u?c+=t:r+=t}return[r,l]}(e))[0],v=l[1]),i=o(C(e,t),c?this:_,q),(a||r||v.length)&&(s=g(i),a&&(s.dotAll=!0,s.raw=q(function(e){for(var t,n=e.length,a=0,r="",l=!1;a<=n;a++)"\\"!==(t=A(e,a))?l||"."!==t?("["===t?l=!0:"]"===t&&(l=!1),r+=t):r+="[\\s\\S]":r+=t+A(e,++a);return r}(e),n)),r&&(s.sticky=!0),v.length&&(s.groups=v)),e!==b)try{u(i,"source",""===b?"(?:)":b)}catch(e){}return i},I=function(e){e in q||s(q,e,{configurable:!0,get:function(){return C[e]},set:function(t){C[e]=t}})},F=c(C),J=0;F.length>J;)I(F[J++]);_.constructor=q,q.prototype=_,v(r,"RegExp",q)}O("RegExp")},378:function(e,t,n){var a=n(0),r=n(9),l=n(218),i=n(28),o=n(14).f,u=n(38).get,s=RegExp.prototype,c=a.TypeError;r&&l&&o(s,"dotAll",{configurable:!0,get:function(){if(this!==s){if("RegExp"===i(this))return!!u(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})},379:function(e,t,n){var a=n(0),r=n(9),l=n(215).UNSUPPORTED_Y,i=n(28),o=n(14).f,u=n(38).get,s=RegExp.prototype,c=a.TypeError;r&&l&&o(s,"sticky",{configurable:!0,get:function(){if(this!==s){if("RegExp"===i(this))return!!u(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},381:function(e,t,n){var a=n(40),r=Math.floor,l=function(e,t){var n=e.length,u=r(n/2);return n<8?i(e,t):o(e,l(a(e,0,u),t),l(a(e,u),t),t)},i=function(e,t){for(var n,a,r=e.length,l=1;l<r;){for(a=l,n=e[l];a&&t(e[a-1],n)>0;)e[a]=e[--a];a!==l++&&(e[a]=n)}return e},o=function(e,t,n,a){for(var r=t.length,l=n.length,i=0,o=0;i<r||o<l;)e[i+o]=i<r&&o<l?a(t[i],n[o])<=0?t[i++]:n[o++]:i<r?t[i++]:n[o++];return e};e.exports=l},382:function(e,t,n){"use strict";var a,r=n(2),l=n(3),i=n(30).f,o=n(98),u=n(16),s=n(130),c=n(27),d=n(131),f=n(31),p=l("".endsWith),y=l("".slice),m=Math.min,v=d("endsWith");r({target:"String",proto:!0,forced:!!(f||v||(a=i(String.prototype,"endsWith"),!a||a.writable))&&!v},{endsWith:function(e){var t=u(c(this));s(e);var n=arguments.length>1?arguments[1]:void 0,a=t.length,r=void 0===n?a:m(o(n),a),l=u(e);return p?p(t,l,r):y(t,r-l.length,r)===l}})},407:function(e,t,n){"use strict";var a=n(2),r=n(0),l=n(137),i=n(53),o=n(33),u=n(18),s=n(141),c=n(71),d=n(72)("splice"),f=r.TypeError,p=Math.max,y=Math.min;a({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,a,r,d,m,v,b=u(this),h=o(b),g=l(e,h),O=arguments.length;if(0===O?n=a=0:1===O?(n=0,a=h-g):(n=O-2,a=y(p(i(t),0),h-g)),h+n-a>9007199254740991)throw f("Maximum allowed length exceeded");for(r=s(b,a),d=0;d<a;d++)(m=g+d)in b&&c(r,d,b[m]);if(r.length=a,n<a){for(d=g;d<h-a;d++)v=d+n,(m=d+a)in b?b[v]=b[m]:delete b[v];for(d=h;d>h-a+n;d--)delete b[d-1]}else if(n>a)for(d=h-a;d>g;d--)v=d+n-1,(m=d+a-1)in b?b[v]=b[m]:delete b[v];for(d=0;d<n;d++)b[d+g]=arguments[d+2];return b.length=h-a+n,r}})},408:function(e,t,n){},536:function(e,t,n){var a=n(2),r=n(13),l=n(8),i=n(10),o=n(537),u=n(30),s=n(101);a({target:"Reflect",stat:!0},{get:function e(t,n){var a,c,d=arguments.length<3?t:arguments[2];return i(t)===d?t[n]:(a=u.f(t,n))?o(a)?a.value:void 0===a.get?void 0:r(a.get,d):l(c=s(t))?e(c,n,d):void 0}})},537:function(e,t,n){var a=n(12);e.exports=function(e){return void 0!==e&&(a(e,"value")||a(e,"writable"))}},538:function(e,t,n){"use strict";var a=n(2),r=n(3),l=n(36),i=n(18),o=n(33),u=n(16),s=n(4),c=n(381),d=n(55),f=n(539),p=n(540),y=n(52),m=n(541),v=[],b=r(v.sort),h=r(v.push),g=s((function(){v.sort(void 0)})),O=s((function(){v.sort(null)})),j=d("sort"),w=!s((function(){if(y)return y<70;if(!(f&&f>3)){if(p)return!0;if(m)return m<603;var e,t,n,a,r="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(a=0;a<47;a++)v.push({k:t+a,v:n})}for(v.sort((function(e,t){return t.v-e.v})),a=0;a<v.length;a++)t=v[a].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));a({target:"Array",proto:!0,forced:g||!O||!j||!w},{sort:function(e){void 0!==e&&l(e);var t=i(this);if(w)return void 0===e?b(t):b(t,e);var n,a,r=[],s=o(t);for(a=0;a<s;a++)a in t&&h(r,t[a]);for(c(r,function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:u(t)>u(n)?1:-1}}(e)),n=r.length,a=0;a<n;)t[a]=r[a++];for(;a<s;)delete t[a++];return t}})},539:function(e,t,n){var a=n(47).match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},540:function(e,t,n){var a=n(47);e.exports=/MSIE|Trident/.test(a)},541:function(e,t,n){var a=n(47).match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},542:function(e,t,n){"use strict";n(408)},550:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(125),l=(n(67),n(65),n(7),n(66),n(214),n(42),n(56),n(48),n(407),n(213),n(39),n(95),n(377),n(378),n(379),n(216),n(127),n(382),n(23)),i=n.n(l),o=n(205),u=n(197),s=n.n(u),c=n(198),d=n(208),f=n(206),p=n(207),y=n(22),m=n(29),v=function(){function e(){Object(y.a)(this,e)}return Object(m.a)(e,null,[{key:"data",value:function(){return{type:"switch",multi:!0}}},{key:"default",value:function(e){return null!==e&&e}}]),e}(),b=function(){function e(){Object(y.a)(this,e)}return Object(m.a)(e,null,[{key:"data",value:function(){return{type:"input",newElementButtonLabelClasses:i.a.validators.string}}},{key:"default",value:function(e){return null===e?"":e}}]),e}(),h=function(){function e(){Object(y.a)(this,e)}return Object(m.a)(e,null,[{key:"data",value:function(){return{type:"select"}}},{key:"default",value:function(e){return null===e?"":e}}]),e}(),g=function(){function e(){Object(y.a)(this,e)}return Object(m.a)(e,null,[{key:"data",value:function(){return{type:"datalist"}}},{key:"default",value:function(e){return null===e?"":e}}]),e}(),O=function(){function e(){Object(y.a)(this,e)}return Object(m.a)(e,null,[{key:"data",value:function(){return{type:"vueMultiSelect"}}},{key:"default",value:function(e){return null===e?"":e}}]),e}(),j=function(){function e(){Object(y.a)(this,e)}return Object(m.a)(e,null,[{key:"data",value:function(){return{type:"array",showRemoveButton:!0,newElementButtonLabelClasses:"button is-primary"}}},{key:"default",value:function(e){return e}}]),e}(),w=function(){function e(){Object(y.a)(this,e)}return Object(m.a)(e,null,[{key:"data",value:function(){return{type:"custom-object"}}},{key:"default",value:function(e){return e}}]),e}(),x=(n(142),n(536),n(240),n(99));function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(x.a)(e)););return e}function C(){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=k(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}}).apply(this,arguments)}var T=n(129),E=n(128),S=n(97),A=function(e){Object(T.a)(n,e);var t=Object(E.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,null,[{key:"data",value:function(){return Object.assign(C(Object(x.a)(n),"data",this).call(this),{type:"array",showModeElementUpButton:!1,showModeElementDownButton:!1,itemFieldClasses:"form-control",itemContainerClasses:"input-group pb-2",newElementButtonLabelClasses:"btn btn-sm btn-secondary",itemContainerComponent:"field-array-bootstrap-accordion-item",itemContainerHeader:function(e,t,n){var a="Undefined";return e&&e.id&&(a=e.id,e.operation&&(a+=" ["+e.operation+"]",e.value&&(a+=" "+e.value))),a},showRemoveButton:!1,required:!1,items:{type:"custom-object",default:{},schema:{fields:[{type:"input",inputType:"text",label:"Linked Field ID",model:"id"},{type:"select",label:"Operation",model:"operation",values:["=","equals","!=","not",">","greater","is_larger",">=","greater_equal","is_larger_equal","<","less","is_smaller","<=","less_equal","is_smaller_equal","contains","doesnt_contain","not_contain","is_empty_or","not_empty_and"]},{type:"input",inputType:"text",label:"Value",model:"value",visible:function(e){return e&&"is_empty_or"!==e.operation}}]}}})}},{key:"toPHPObject",value:function(e){var t=[],n=e.length;if(n>0)for(var a=0;a<n;a++)void 0!==e[a].value&&e[a].value.length&&(e[a].value=this.convertToRightObject(e[a].value)),void 0!==e[a].id&&void 0!==e[a].operation&&("is_empty_or"===e[a].operation?t.push([e[a].id,e[a].operation]):void 0!==e[a].value&&t.push([e[a].id,e[a].operation,e[a].value]));if(JSON.stringify(t)!==JSON.stringify({}))return t}},{key:"convertToRightObject",value:function(e){return"true"===e?e=!0:"false"===e&&(e=!1),e}}]),n}(j),B=(n(46),n(220),n(221),n(223),n(17),function(e){Object(T.a)(n,e);var t=Object(E.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,null,[{key:"data",value:function(e){var t=e.possibleValues,n=e.execludeValues,a=e.required;return{schema:{fields:[{model:"type",inputName:"type",required:a,validator:"string",type:"vueMultiSelect",selectOptions:{multiple:!1,showLabels:!1},values:function(){var e=["categories","menus","pages","terms","taxonomies","posts","post_types","tags","image_sizes","menu_locations","elusive_icons","roles","sidebars","capabilities","users","array","ordered-array","multi_dimensional","callback","custom"];return n&&n.length>0?e.filter((function(e){return!n.includes(e)})):t&&t.length>0?t:e}},{type:"array",label:"Data Arguments",model:"values",validator:"array",showModeElementUpButton:!1,showModeElementDownButton:!1,itemFieldClasses:"form-control",itemContainerClasses:"input-group pb-2 collapse-container",newElementButtonLabelClasses:"",itemContainerComponent:"field-array-bootstrap-accordion-item",newElementButtonLabel:"+ Add Data Argument",itemContainerHeader:function(e,t,n){var a="Undefined";return e&&e.id&&(a=e.id,e.type&&("string"==e.type?e.valueText&&(a+=" => "+e.valueText):e.valueArray&&e.valueArray.length&&(a+=" => array("+e.valueArray.length+")"))),a},items:{type:"custom-object",default:{},schema:{fields:[{type:"input",inputType:"text",label:"ID",model:"id",required:a},{type:"select",label:"Type",model:"type",values:["string","array"],required:a},{type:"input",inputType:"text",label:"Value",model:"valueText",visible:function(e){return e&&e.type&&"string"===e.type}},{type:"array",inputName:"values",label:"Value",itemContainerClasses:"field-array-group",model:"valueArray",showRemoveButton:!0,newElementButtonLabel:"+ Add Value",visible:function(e){return e&&e.type&&"array"===e.type}}]}},visible:function(e){return e&&e.type&&!["custom","callback","array","ordered-array","multi_dimensional"].includes(e.type)},required:function(e){return e&&("custom"===e.type||"callback"===e.type)}},{type:"input",inputType:"text",label:"Text Value",model:"dataText",inputName:"dataText",visible:function(e){return e&&e.type&&["model","custom"].includes(e.type)}},{type:"array",model:"array",showRemoveButton:!0,newElementButtonLabel:"+ Add Array Value",itemContainerClasses:"input-group pb-2",visible:function(e){return e&&("array"===e.type||"ordered-array"===e.type)}},{type:"array",model:"multi_dimensional",showModeElementUpButton:!1,showModeElementDownButton:!1,itemFieldClasses:"form-control",itemContainerClasses:"input-group pb-2",newElementButtonLabelClasses:"",visible:function(e){return e&&e.type&&"multi_dimensional"===e.type},itemContainerComponent:"field-array-bootstrap-accordion-item",itemContainerHeader:function(e,t,n){var a="Undefined";return e&&e.key&&(a=e.key,e.value&&(a+=" => "+e.value)),a},newElementButtonLabel:"+ Add Array Element",items:{type:"custom-object",default:{},schema:{fields:[{type:"input",inputType:"text",label:"Key",model:"key"},{type:"input",inputType:"text",label:"Value",model:"value"}]}}}]}}}},{key:"default",value:function(e){return e}},{key:"toPHPObject",value:function(e){var t=this.generateNewObject(e);if(JSON.stringify(t)!==JSON.stringify({}))return"custom"===e.type||"array"===e.type||"ordered-array"===e.type||"multi_dimensional"===e.type?{data:t}:{data:e.type,args:t}}},{key:"generateNewObject",value:function(e){var t={};if(this.isArgsPlainText(e))t=e.dataText;else if(e&&e.type&&"array"===e.type)t=Object(S.compact)(e.array);else if(e&&e.type&&"ordered-array"===e.type)for(var n=0;e.array&&n<e.array.length;n++)t[(n+1).toString()]=e.array[n];else if(e&&e.type&&"multi_dimensional"===e.type)for(var a=0;e.multi_dimensional&&a<e.multi_dimensional.length;a++)t[e.multi_dimensional[a].key]=e.multi_dimensional[a].value;else for(var r=e.values,l=0;r&&l<r.length;l++)void 0===r[l].id||void 0===r[l].type||void 0===r[l].valueText&&void 0===r[l].valueArray||("string"===r[l].type?t[r[l].id]=this.convertToRightObject(r[l].valueText):t[r[l].id]=Object(S.compact)(r[l].valueArray));return t}},{key:"isArgsPlainText",value:function(e){return e&&e.type&&("custom"===e.type.toLowerCase()||"callback"===e.type.toLowerCase())&&e.dataText&&e.dataText.length>0}},{key:"convertToRightObject",value:function(e){return"true"===e?e=!0:"false"===e&&(e=!1),e}}]),n}(w)),D=(n(538),function(){function e(){Object(y.a)(this,e)}return Object(m.a)(e,null,[{key:"set",value:function(e,t,n,r){if(void 0!==("undefined"==typeof window?"undefined":Object(a.a)(window))&&void 0!==Object(a.a)(window.localStorage)&&void 0!==window.localStorage){var l={val:n,exp:r,time:(new Date).getTime()};window.localStorage.setItem(e+"_"+t,JSON.stringify(l))}}},{key:"get",value:function(e,t){if(void 0!==("undefined"==typeof window?"undefined":Object(a.a)(window))&&void 0!==Object(a.a)(window.localStorage)&&void 0!==window.localStorage){var n=JSON.parse(window.localStorage.getItem(e+"_"+t));return n?(new Date).getTime()-n.time>n.exp?null:n.val:null}}}]),e}()),P=function(e){Object(T.a)(n,e);var t=Object(E.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,null,[{key:"data",value:function(e){var t=e.fieldType,a=e.name,r=e.newElementButtonLabel,l=e.selectValues,i=e.listName,o=e.booleanFields,u=e.selectFields,s=e.arrayFields,c=e.defaultObj,d=!(l&&l.length>0);function f(e){var t=e.keyText||e.keySelect;if(t){if(o&&o.indexOf(t)>=0)return"boolean";if(u&&u.length>0){var n=Object(S.map)(u,"key");if(n&&n.indexOf(t)>=0)return"select"}if(s&&s.indexOf(t)>=0)return"array"}return"text"}return l&&l.sort(),Object.assign(C(Object(x.a)(n),"data",this).call(this),{schema:{fields:[{type:"array",model:a,showModeElementUpButton:!1,showModeElementDownButton:!1,itemFieldClasses:"form-control",itemContainerClasses:"input-group pb-2",newElementButtonLabelClasses:"btn btn-sm btn-secondary",itemContainerComponent:"field-array-bootstrap-accordion-item",itemContainerHeader:function(e,t,n){var a="Undefined";return e&&(e.keyText||e.keySelect)&&(a=e.keyText?e.keyText:e.keySelect,e.value&&(a+=" => "+e.value)),a},newElementButtonLabel:r,items:{type:"custom-object",default:{},schema:{fields:[{type:"input",inputType:"text",label:"Key",model:"keyText",visible:d,fieldClasses:"error",validateDebounceTime:1e3,validator:function(e,n){var r=D.get(t,a);if(e&&r&&-1!==r.indexOf(e)&&Object(S.filter)(r,(function(t){return t==e})).length>1)return["Duplicate Entry"];return[]}},{type:"datalist",label:"Key",model:"keySelect",listName:i||"keyslist_"+a,values:l,visible:!d,fieldClasses:"error",featured:!0,validateDebounceTime:1e3,validator:function(e,n){var r=D.get(t,a);if(e&&r&&-1!==r.indexOf(e)&&Object(S.filter)(r,(function(t){return t==e})).length>1)return["Duplicate Entry"];return[]}},{type:"input",inputType:"text",label:"Value",model:"valueText",visible:function(e){return"text"===f(e)}},{type:"switch",label:"Value",model:"valueSwitch",visible:function(e){return"boolean"===f(e)},default:function(e){var t=e.keyText||e.keySelect;return c.hasOwnProperty(t)?c[t]:null}},{type:"datalist",label:"Value",model:"valueSelect",listName:function(e){var t=e.keyText||e.keySelect;return i||"valueslist_"+a+t},values:function(e){var t=e.keyText||e.keySelect;return"select"===f(e)?Object(S.find)(u,{key:t}).values:[]},visible:function(e){return"select"===f(e)}},{type:"array",label:"Value",model:"valueArray",itemContainerClasses:"input-group pb-2 collapse-container",visible:function(e){return"array"==f(e)}}]}}}]}})}},{key:"deleteUndefined",value:function(e){return e}},{key:"toPHPObject",value:function(e,t,n){var a=Object(S.cloneDeep)(e),r={},l=[];if(e[t])for(var i=function(e){var n=a[t][e].keyText?a[t][e].keyText:a[t][e].keySelect,i=Object(S.find)(["valueText","valueSelect","valueSwitch","valueArray"],(function(n){return!!a[t][e][n]}));l.push(n),i&&(r[n]=a[t][e][i])},o=0;a[t]&&o<a[t].length;o++)i(o);if(D.set(n,t,Object(S.without)(l,void 0,null),18e5),JSON.stringify(r)!==JSON.stringify({}))return r}},{key:"generateModel",value:function(e,t,n){var a=Object(S.cloneDeep)(e),r=n.booleanFields,l=n.selectFields,i=n.arrayFields,o=n.default;if(e[t]&&o)for(var u=function(e){var n=a[t][e].keyText?a[t][e].keyText:a[t][e].keySelect,u="valueText";if(!Object(S.find)(["valueText","valueSelect","valueSwitch","valueArray"],(function(n){return!!a[t][e][n]}))){r&&-1!==r.indexOf(n)&&(u="valueSwitch"),l&&-1!==l.indexOf(n)&&(u="valueSelect"),i&&-1!==i.indexOf(n)&&(u="valueArray");var s=Object(S.cloneDeep)(a[t][e])||{};s[u]=o[n],a[t].splice(e,1,s)}},s=0;a[t]&&s<a[t].length;s++)u(s);return a}}]),n}(w),N=(n(236),function(e){Object(T.a)(n,e);var t=Object(E.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,null,[{key:"data",value:function(e){var t=e.acceptedTypes;return Object.assign(C(Object(x.a)(n),"data",this).call(this),{schema:{fields:[{type:"vueMultiSelect",model:"validate",values:t||["color","comma_numeric","css","date","email","html_custom","js","no_html","no_special_chars","not_empty","numeric","preg_replace","str_replace","unique_slug","url","custom"],selectOptions:{multiple:!0,showLabels:!1}},{type:"input",inputType:"text",label:"Custom Validation Callback",visible:function(e){return e&&"custom"==e.validate},model:"validate_callback"},{type:"custom-object",label:"preg_replace",model:"preg",default:{},schema:{fields:[{type:"input",inputType:"text",label:"Pattern",model:"pattern"},{type:"input",inputType:"text",label:"Replacement",model:"replacement"}]},visible:function(e){return e&&e.validate&&e.validate.includes("preg_replace")}},{type:"custom-object",label:"str_replace",model:"str",default:{},schema:{fields:[{type:"input",inputType:"text",label:"Search",model:"search"},{type:"input",inputType:"text",label:"Replacement",model:"replacement"}]},visible:function(e){return e&&e.validate&&e.validate.includes("str_replace")}},{type:"array",label:"Allowed HTML",model:"allowed_html",validator:"array",showRemoveButton:!1,itemFieldClasses:"form-control",itemContainerClasses:"input-group pb-2",itemContainerComponent:"field-array-bootstrap-accordion-item",newElementButtonLabelClasses:"btn btn-sm btn-secondary",removeElementButtonClasses:"btn btn-danger input-group-append",newElementButtonLabel:"+ Add Allowed HTML",itemContainerHeader:function(e,t,n){return e&&e.tag?e.tag:"Undefined"},items:{type:"custom-object",default:{},schema:{fields:[{type:"datalist",name:"tag",title:"Tag",label:"Tag",values:["a","br","em","strong"],model:"tag",listName:"taglist",required:!0},{type:"array",inputName:"attributes",label:"Attribute",itemContainerClasses:"field-array-group",model:"attributes",required:!0,showRemoveButton:!0,newElementButtonLabel:"+ Add Attribute"}]}},visible:function(e){return e&&e.validate&&e.validate.includes("html_custom")}}]}})}},{key:"toPHPObject",value:function(e){if(e.validate&&0==e.validate.length)return{};var t=Object(S.cloneDeep)(e);void 0!==e.allowed_html&&(t.allowed_html=e.allowed_html.filter((function(e){return void 0!==e.tag})).reduce((function(e,t){e[t.tag]=Object(S.compact)(t.attributes);for(var n={},a=0;a<e[t.tag].length;a++)n[e[t.tag][a]]=[];return e[t.tag]=n,e}),{})),e.validate&&e.validate.includes("custom")&&(delete t.validate,e.validate="custom");var n={str_replace:"str",preg_replace:"preg_match",html_custom:"allowed_html",custom:"validate_callback"};return e.validate&&0==e.validate.length&&Object.keys(n).forEach((function(a,r){e.validate.includes(a)||(t[n[a]]&&delete t[t[n[a]]],e[n[a]]&&delete e[t[n[a]]])})),JSON.stringify(t)!==JSON.stringify({})?t:void 0}}]),n}(w)),L=(n(222),function(e){Object(T.a)(n,e);var t=Object(E.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,null,[{key:"data",value:function(e){var t=e.possibleProperties,a=e.possibleTypes;return Object.assign(C(Object(x.a)(n),"data",this).call(this),{schema:{fields:[{type:"radios",model:"type",label:"Type",values:function(){return a&&a.length>0?a:["text","basic","object"]},default:"text",attributes:{label:{class:"btn btn-sm btn-secondary"}},hideNoneSelectedText:!0,selectOptions:{hideNoneSelectedText:!0}},{type:"input",inputType:"text",label:"Selector",visible:function(e){return e&&"text"===e.type},model:"text_value"},{type:"switch",model:"bool_value",visible:function(e){return e&&"boolean"===e.type}},{type:"custom-object",model:"basic_value",default:{},schema:{fields:[{type:"input",inputType:"text",label:"Selector",model:"selector"},{type:"array",showRemoveButton:!0,itemContainerClasses:"field-array-group",newElementButtonLabelClasses:"btn btn-sm btn-secondary",label:"Values",model:"values"}]},visible:function(e){return e&&e.type&&"basic"===e.type}},{type:"array",label:"Selectors",model:"object_selector",validator:"array",showRemoveButton:!1,itemFieldClasses:"form-control",itemContainerClasses:"input-group pb-2",itemContainerComponent:"field-array-bootstrap-accordion-item",newElementButtonLabelClasses:"btn btn-sm btn-secondary",removeElementButtonClasses:"btn btn-danger input-group-append",newElementButtonLabel:"+ Add Output Item",itemContainerHeader:function(e,t,n){return e&&e.selector?e.value?e.selector+" => "+e.value:e.selector:"Undefined"},items:{type:"custom-object",default:{},schema:{fields:[{type:"datalist",model:"selector",label:"Selector",values:t,selectOptions:{hideNoneSelectedText:!0}},{type:"input",inputType:"text",label:"Value",model:"value"}]}},visible:function(e){return e&&e.type&&"object"===e.type}},{model:"array_value",inputName:"array_value",label:"Array Values",type:"vueMultiSelect",selectOptions:{multiple:!0,showLabels:!1},values:t,visible:function(e){return e&&"array"===e.type}}]}})}},{key:"toPHPObject",value:function(e,t){var n={};return"text"===e.type&&null!==e.text_value&&void 0!==e.text_value?e.text_value:("basic"===e.type&&e.basic_value&&e.basic_value.selector&&(n[e.basic_value.selector]=Object(S.compact)(e.basic_value.values).join(", ")),"object"===e.type&&e.object_selector&&e.object_selector.forEach((function(e){var t=e.selector;t&&e.value&&(n[t]=e.value)})),"boolean"===e.type?!0===e.bool_value:"array"===e.type?e.array_value:n)}}]),n}(w)),M=function(e){Object(T.a)(n,e);var t=Object(E.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,null,[{key:"data",value:function(e){var t=e.name,a=e.fieldType,r=e.arrayType,l=e.valueType,i=e.categoryValues,o=e.itemValues,u=e.visible;return Object.assign(C(Object(x.a)(n),"data",this).call(this),{showModeElementUpButton:!1,showModeElementDownButton:!1,itemFieldClasses:"form-control",itemContainerClasses:"input-group pb-2",newElementButtonLabel:"+ Add Category",newElementButtonLabelClasses:"",itemContainerComponent:"field-array-bootstrap-accordion-item",showRemoveButton:!1,visible:u||!0,itemContainerHeader:function(e,t,n){var a="Unnamed Category";return e&&e.CategoryKey&&(a="Category("+e.CategoryKey+")"),a},items:{type:"custom-object",default:{},schema:{fields:[{type:"datalist",label:"Category",model:"CategoryKey",values:i,visible:"key"===r,validateDebounceTime:1e3,validator:function(e,n){if("key"===r){var l=D.get(a,t);if(e&&l&&-1!==l.indexOf(e))if(Object(S.filter)(l,(function(t){return t==e})).length>1)return["Duplicate Entry"]}return[]}},{type:"array",model:"CategoryKeyValueArray",label:"Items In Category",showModeElementUpButton:!1,showModeElementDownButton:!1,itemFieldClasses:"form-control",itemContainerClasses:"input-group pb-2",newElementButtonLabelClasses:"btn btn-sm btn-secondary",itemContainerComponent:"field-array-bootstrap-accordion-item",visible:"plain"!==l,itemContainerHeader:function(e,t,n){var a="Undefined";return e&&e.key&&(a=e.key,e.value&&(a+=" => "+e.value)),a},newElementButtonLabel:"+ Add Items",items:{type:"custom-object",default:{},schema:{fields:[{type:"datalist",inputType:"text",label:"Key",model:"key",values:o,validateDebounceTime:1e3,validator:function(e,n){if(console.log(e),"key"===r){var l=D.get(a,t);if(e&&l&&-1!==l.indexOf(e))if(Object(S.filter)(l,(function(t){return t==e})).length>1)return["Duplicate Entry"]}return[]}},{type:"input",inputType:"text",label:"Value",model:"value"}]}}},{type:"array",model:"CategoryPlainArray",label:"Items In Category",showModeElementUpButton:!1,showModeElementDownButton:!1,itemFieldClasses:"form-control",itemContainerClasses:"input-group pb-2",visible:"plain"===l}]}}})}},{key:"deleteUndefined",value:function(e){return e}},{key:"toPHPObject",value:function(e,t,n){if(JSON.stringify(e)!==JSON.stringify({})){var a=function(e){if("plain"==l)return e;for(var t={},n=0;n<e.length;n++)t[e[n].key]=e[n].value;return t},r=(Object(S.cloneDeep)(e),t.arrayType),l=t.valueType,i=t.model,o="unordered"==r?[]:{},u=[];if(e.forEach((function(e,t){var n=function(e,t){return"ordered"==r?(t+1).toString():"key"==r?e:void 0}(e.CategoryKey,t);u.push(n);var i="plain"==l?"CategoryPlainArray":"CategoryKeyValueArray";(function(e,t){return e&&(e.CategoryKey||"key"!==r)&&e[t]&&e[t].length>=0})(e,i)&&("unordered"==r?o.push(a(e[i])):o[n]=a(e[i]))})),D.set(n,i,Object(S.without)(u,void 0,null),18e5),JSON.stringify(o)!==JSON.stringify([]))return o}return e}}]),n}(j),R={render:function(){},components:{"vue-form-generator":i.a.component,BootstrapVue:o.a,vueMultiselect:s.a,FieldArray:c.a,FieldArrayBootstrapAccordionItem:d.default,fieldCustomObject:p.fieldCustomObject,fieldDatalist:f.fieldDatalist},props:["field"],data:function(){if(this.$attrs.builder_json){var e=_.cloneDeep(this.$attrs.builder_json),t=this,n=e.type,a=Object.keys(e.fields),l={model:{id:"FIELD_ID",type:n},schema:{fields:[],redux:e},formOptions:{validateAfterLoad:!0,validateAfterChanged:!0}};l.schema.fields.push({type:"input",inputType:"text",label:"Type",model:"type",readonly:!0,featured:!1,order:1,disabled:!0}),a.forEach((function(n){var a=t.formatSchemaField(e.fields[n],n);l.schema.fields.push(a),l.model[n]=e.fields[n].default})),l.schema.fields=Object(S.sortBy)(l.schema.fields,"order");var i=D.get(n,"model");null!==i&&(l.model=Object(r.a)(Object(r.a)({},l.model),i));var o=e.groups;if(o&&Object.keys(o).length>0){var u=[],s=[];if(Object.keys(o).forEach((function(e){var t={title:e};t.fields=Object(S.map)(o[e],(function(e){return s.push(e),Object(S.find)(l.schema.fields,{model:e})})),t.fields=Object(S.filter)(t.fields,(function(e){return!!e})),u.push(t)})),Object(S.difference)(a,s).length>0){var c={title:"Extra"};c.fields=Object(S.map)(Object(S.difference)(a,s),(function(e){return Object(S.find)(l.schema.fields,{model:e})})),c.fields=Object(S.filter)(c.fields,(function(e){return!!e})),u.push(c)}l.groups=u}return l}},computed:{hasGroup:function(){return this.groups&&this.groups.length>0}},methods:{fieldType:function(){return this.$attrs.builder_json.type},reset:function(){var e=_.cloneDeep(this.$attrs.builder_json),t={id:"FIELD_ID",type:e.type};Object.keys(e.fields).forEach((function(n){t[n]=e.fields[n].default})),["data","output"].forEach((function(n){-1==Object.keys(e.fields).indexOf(n)||e.fields[n].default||(t[n]={})})),this.model=Object(S.cloneDeep)(t)},formatSchemaField:function(e,t){var n,a={input:b,text:b,bool:v,switch:v,vueMultiselect:O,select:h,datalist:g,array:j,object:w,"custom-object":w,required:A,data:B,keyvalue:P,validate:N,"dynamic-type":L,multiarray:M};return e.fieldType=this.fieldType(),n=-1!=["required","data","attributes","validate"].indexOf(t)?a[t]:a[e.type],e.formatter&&(n=a[e.formatter]),(e=Object.assign(e,n.data(e))).default=n.default(e.default),e.label=e.title,delete e.title,e.hint=e.description,e.model=e.name,delete e.name,e},toPHP:function(e,t){if(e&&t){var n=Object(S.cloneDeep)(t);return D.set(n.type,"model",n,18e5),n=this.deleteEmptyValues(e,n),this.dependencyHook(e,n),n=this.transformCustomArgs(e,n),n=this.sortModel(e,n),this.phpify(n)}},deleteEmptyValues:function(e,t){for(var n in t)null!==t[n]&&void 0!==t[n]&&""!==t[n]||delete t[n],"type"!==n&&e.redux.fields.hasOwnProperty(n)&&e.redux.fields[n].hasOwnProperty("default")&&e.redux.fields[n].default===t[n]&&delete t[n];return t},dependencyHook:function(e,t){var n=Object(S.cloneDeep)(this.model),r=this,l=Object(S.filter)(e.fields,"dependent");Object(S.filter)(l,{dependencyType:"visible"}).forEach((function(t){var a=Object(S.findIndex)(e.fields,{model:t.model}),l=n[t.dependency.parent]==t.dependency.activatedOn;t.visible!==l&&(t.visible=l,e.fields.splice(a,1,t),r.schema=Object(S.cloneDeep)(e))})),Object(S.filter)(l,{dependencyType:"type"}).forEach((function(t){var l=Object(S.findIndex)(e.fields,{model:t.model}),i=e.fields[l],o=i.dependency.status,u=i.dependency.parent;o.forEach((function(o){n[u]==o.parentValue&&(Object(a.a)(n[t.model])!=o.typeof&&(r.model[t.model]=o.default),i.type!=o.type&&(i.type=o.type,i.formatter=o.formatter,i.inputType=o.inputType,e.fields.splice(l,1,i),r.schema=Object(S.cloneDeep)(e)))}))}));var i=Object(S.findIndex)(e.fields,{model:"options"});if(-1!=i){var o=Object(S.cloneDeep)(e.fields[i]);n.data&&JSON.stringify(n.data)!==JSON.stringify({})&&o.visible!==(-1===Object.keys(n).indexOf("data"))&&(o.visible=-1===Object.keys(n).indexOf("data"),e.fields.splice(i,1,o),this.schema=Object(S.cloneDeep)(e))}},transformCustomArgs:function(e,t){var n=Object(S.cloneDeep)(t),a=this;return delete n.data,delete n.validate,t.required&&(n.required=A.toPHPObject(t.required)),t.data&&(n=Object(S.extend)(n,B.toPHPObject(t.data))),t.validate&&(n=Object.assign(n,N.toPHPObject(t.validate))),Object(S.filter)(e.fields,{formatter:"keyvalue"}).forEach((function(t){var l=t.model;if(n[l]){var i=Object(S.find)(e.fields,{model:l}),o=P.generateModel(n[l],l,i);!1===Object(S.isEqual)(o,n[l])&&(a.model[l]=Object(r.a)(Object(r.a)({},a.model.modelKey),o)),n[l]=P.toPHPObject(n[l],l,a.fieldType())}})),Object(S.filter)(e.fields,{formatter:"multiarray"}).forEach((function(e){t[e.model]&&t[e.model].length>0&&(n[e.model]=M.toPHPObject(n[e.model],e,a.fieldType()))})),Object(S.filter)(e.fields,{formatter:"dynamic-type"}).forEach((function(e){t[e.model]&&(n[e.model]=L.toPHPObject(n[e.model],e))})),Object(S.filter)(e.fields,{type:"switch"}).forEach((function(e){!0===n[e.model]&&e.textOn&&(n[e.model]=e.textOn),!1===n[e.model]&&e.textOff&&(n[e.model]=e.textOff)})),Object.keys(n).forEach((function(e){n[e]||delete n[e],JSON.stringify(n[e])===JSON.stringify({})&&delete n[e],JSON.stringify(n[e])===JSON.stringify([])&&delete n[e]})),Object(S.filter)(e.fields,{visible:!1}).forEach((function(e){delete n[e.model]})),n},sortModel:function(e,t){var n={};return e.fields.forEach((function(e){t[e.model]&&(n[e.model]=t[e.model])})),t.args&&(n.args=t.args),n},phpify:function(e){var t=JSON.stringify(e,void 0,4);t=t.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">");for(var n=["title","subtitle","description","note","desc","placeholder"],a=n.length,r=0;r<a;r++){var l=n[r],i=new RegExp('"'+l+'": "(.*)"',"g");t=t.replace(i,'"'+l+'": __( "$1" , "redux_docs_generator" )')}var o=t.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,(function(e){var t="number";/^"/.test(e)?t="single-quoted-string string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null");var n="";e.endsWith(":")&&(e=e.replace(":",""),n="=>");var a='<span class="token '+t+'">'+e+"</span>";return""==n?a:a+=' <span class="token operator">'+n+"</span>"}));return'<?php <br />Redux<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">set_field</span><span class="token punctuation">(</span> <span class="token single-quoted-string string">\'OPT_NAME\'</span>, <span class="token single-quoted-string string">\'SECTION_ID\'</span>, '+(o=o.replace(/{/g,'<span class="token keyword">array</span>(').replace(/}/g,'<span class="">)</span>').replace(/\[/g,'<span class="token keyword">array</span>(').replace(/]/g,'<span class="">)</span>').replace(/"/g,"'"))+' <span class="token punctuation">)</span>;'}}},H=(n(542),n(11)),V=Object(H.a)(R,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"redux-builder"},[n("div",{staticClass:"panel thirty"},[n("div",{staticClass:"panel-heading"},[e._v("\n            Build a Custom Configuration →\n        ")]),e._v(" "),n("div",{staticClass:"panel-body"},[n("small",[e._v("Changes you make to this form will be reflected in the generated code.")]),e._v(" "),e.hasGroup?e._e():n("vue-form-generator",{attrs:{schema:e.schema,model:e.model,options:e.formOptions}}),e._v(" "),e.hasGroup?n("b-card",{staticClass:"no-margin",attrs:{"no-body":""}},[n("b-tabs",{attrs:{card:""}},e._l(e.groups,(function(t){return n("b-tab",{attrs:{title:t.title}},[n("vue-form-generator",{attrs:{schema:t,model:e.model,options:e.formOptions}})],1)})),1)],1):e._e(),e._v(" "),n("input",{staticClass:"btn btn-sm btn-info float-right",attrs:{type:"button",value:"Reset Form"},on:{click:e.reset}}),e._v(" "),n("br",{staticStyle:{clear:"both"}})],1)]),e._v(" "),n("div",{staticClass:"seventy"},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"language-php extra-class"},[n("pre",{staticClass:"language-php extra-class"},[e.model?n("code",{domProps:{innerHTML:e._s(e.toPHP(e.schema,e.model))}}):e._e()])])])]),e._v(" "),n("br",{staticStyle:{clear:"both"}})])}),[],!1,null,null,null);t.default=V.exports}}]);