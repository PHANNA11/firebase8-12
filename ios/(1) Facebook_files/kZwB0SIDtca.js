;/*FB_PKG_DELIM*/

__d("PagesCometOpenHourPopover_aboutFields.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesCometOpenHourPopover_aboutFields",selections:[{alias:null,args:null,kind:"ScalarField",name:"current_datetime",storageKey:null},{alias:null,args:null,concreteType:"PageOpenHoursDetailsRow",kind:"LinkedField",name:"open_hour_details",plural:!0,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"day_in_week",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"hours_text",plural:!1,selections:a,storageKey:null}],storageKey:null}],type:"CometPageAboutFields",abstractKey:null}}();e.exports=a}),null);
__d("PagesCometOpenHourPopover.react",["BaseContextualLayerOrientationContext","CometPopover.react","CometRelay","CometRow.react","CometRowItem.react","PagesCometOpenHourPopover_aboutFields.graphql","TetraText.react","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.aboutFields;a=d("CometRelay").useFragment(h!==void 0?h:h=b("PagesCometOpenHourPopover_aboutFields.graphql"),a);var e=a==null?void 0:a.open_hour_details,f=a==null?void 0:a.current_datetime;if(e==null||f==null)return null;var g=[];e.map(function(a){var b;b=(b=a.day_in_week)==null?void 0:b.text;a=(a=a.hours_text)==null?void 0:a.text;if(b==null||a==null){c("recoverableViolation")("The dayInWeekText or hoursText is null","pages_consumer_experience_www");return null}var d=f===b?"bodyLink4":"body4",e=i.jsxs(c("TetraText.react"),{type:d,children:[b,":"]});a=a.split(", ");a=a.map(function(a){return i.jsx("div",{className:"x12nagc",children:i.jsx(c("TetraText.react"),{type:d,children:a})},a)});g.push(i.jsxs(c("CometRow.react"),{columns:2,spacingHorizontal:16,children:[i.jsxs(c("CometRowItem.react"),{children:[e,i.jsx("div",{className:"xqtp20y xlshs6z x78zum5 xdt5ytf",children:a})]}),i.jsxs(c("CometRowItem.react"),{children:[i.jsx("div",{className:"x78zum5 xdt5ytf",children:a}),i.jsx("div",{className:"xqtp20y xlshs6z",children:e})]})]},b+d))});return i.jsx("div",{className:"x78zum5 xdt5ytf",children:i.jsx(c("BaseContextualLayerOrientationContext").Provider,{value:{align:"middle",position:"below"},children:i.jsx(c("CometPopover.react"),{withArrow:!0,children:i.jsx("div",{className:"x1l90r2v",children:g})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MenuLoggerFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1912868");b=d("FalcoLoggerInternal").create("menu_logger",a);e=b;g["default"]=e}),98);