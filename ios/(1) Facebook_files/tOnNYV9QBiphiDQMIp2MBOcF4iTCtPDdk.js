;/*FB_PKG_DELIM*/

__d("CometInputWithCommands.react",["CometComponentWithKeyCommands.react","CometKeys","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=i(function(){var b=[];a.enter!=null&&b.push({command:{key:c("CometKeys").ENTER},description:a.enter.description,handler:a.enter.handler,triggerFromInputs:!0});a["delete"]!=null&&b.push({command:{key:c("CometKeys").DELETE},description:a["delete"].description,handler:a["delete"].handler,triggerFromInputs:!0});a.up!=null&&b.push({command:{key:c("CometKeys").UP},description:a.up.description,handler:a.up.handler,triggerFromInputs:!0});a.down!=null&&b.push({command:{key:c("CometKeys").DOWN},description:a.down.description,handler:a.down.handler,triggerFromInputs:!0});a.tab!=null&&b.push({command:{key:c("CometKeys").TAB},description:a.tab.description,handler:a.tab.handler,triggerFromInputs:!0});a.esc!=null&&b.push({command:{key:c("CometKeys").ESCAPE},description:a.esc.description,handler:a.esc.handler,triggerFromInputs:!0});return b},[a["delete"],a.down,a.enter,a.esc,a.tab,a.up]);return h.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:b,debugName:"InputSubmit",elementType:a.isInline===!0?"span":"div",xstyle:a.xstyle,children:a.children})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("cometReportBugDefaultOptions",["fbt","ix","fbicon"],(function(a,b,c,d,e,f,g,h,i){"use strict";a="public";b=h._("__JHASH__Sqzl58OucnB__JHASH__");c={addOnPrimary:{icon:d("fbicon")._(i("899558"),24),size:60,type:"contained-icon"},body:h._("__JHASH__5q7igOED7sX__JHASH__"),dialogTitle:h._("__JHASH__OPf0ZWrh9kh__JHASH__"),headline:h._("__JHASH__mBwCXx86-aM__JHASH__")};e={addOnPrimary:{icon:d("fbicon")._(i("502063"),24),size:60,type:"contained-icon"},body:h._("__JHASH__T0wDs12oUvR__JHASH__"),dialogTitle:h._("__JHASH__d8pLVqIL7yK__JHASH__"),headline:h._("__JHASH__06damxz0Ivb__JHASH__")};g.defaultProductListType=a;g.defaultInitialTitle=b;g.defaultFeedbackProblemTypeItem=c;g.defaultBugProblemTypeItem=e}),98);
__d("useCometReportBug",["fbt","CometCardedDialogLoadingStateLegacy.react","JSResourceForInteraction","cometReportBugDefaultOptions","promiseDone","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g,h){"use strict";b=d("react");var i=c("react"),j=b.useCallback,k=b.useRef,l=c("JSResourceForInteraction")("CometBugReportingDialog.react").__setRef("useCometReportBug"),m=c("JSResourceForInteraction")("VideoPlayerShakaPerformanceLogger").__setRef("useCometReportBug"),n=!1;function a(a){var b=k(null),e=c("useCometLazyDialog")(l,function(b){return i.jsx(c("CometCardedDialogLoadingStateLegacy.react"),{onClose:b,title:a==null?h._("__JHASH__Sqzl58OucnB__JHASH__"):h._("__JHASH___hkwAd2dM-2__JHASH__",[h._param("product name",a)]),withCloseButton:!0})}),f=e[0];e=j(function(b,e){if(!n){var g;c("promiseDone")(m.load().then(function(a){a.flushQueuedLogs()}));f(babelHelpers["extends"]({productName:a},b,{bugProblemTypeItem:(g=b==null?void 0:b.bugProblemTypeItem)!=null?g:d("cometReportBugDefaultOptions").defaultBugProblemTypeItem,feedbackProblemTypeItem:(g=b==null?void 0:b.feedbackProblemTypeItem)!=null?g:d("cometReportBugDefaultOptions").defaultFeedbackProblemTypeItem,initialTitle:(g=b==null?void 0:b.initialTitle)!=null?g:d("cometReportBugDefaultOptions").defaultInitialTitle,productListType:(g=b==null?void 0:b.productListType)!=null?g:d("cometReportBugDefaultOptions").defaultProductListType}),function(){e!=null&&e(),n=!1});n=!0}},[f]);return[e,b]}g["default"]=a}),98);
__d("CixWarningScreensFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743358");b=d("FalcoLoggerInternal").create("cix_warning_screens",a);e=b;g["default"]=e}),98);
__d("WarningScreenType",[],(function(a,b,c,d,e,f){a=Object.freeze({GRAPHIC:"Violence and Gore",HATE:"Hate",CHILD_ABUSE_NON_SEXUAL:"Child Abuse (non-sexual)",SENSITIVE:"Sensitive",CRUEL:"Cruel",MATURE_ONLY_14_AND_OVER:"Mature Only 14 And Over",SENSITIVE_TEXT:"Sensitive Text",FALSE_NEWS:"False News",FALSE_HEADLINE_NEWS:"False Headline News",MISLEADING_NEWS:"Misleading News",ALTERED_MEDIA:"Altered Media",MISSING_CONTEXT:"Missing Context",GOVERNMENT_CORRECTION:"Government Correction",CENSUS_BORDERLINE:"Census Borderline",WIDELY_DEBUNKED_HOAX_COVID:"Widely Debunked Hoax Covid",HEALTH_GENERIC:"Health Generic",GENERIC_INFORM_TREATMENT:"Generic Inform Treatment",CLIMATE_GENERIC_INFORM_TREATMENT:"Climate Science Generic Inform Treatment",NEWSWORTHY:"Newsworthy",SELF_APPLIED_GRAPHIC_VIOLENCE:"Self Applied Graphic Violence",CIVIC_VOTER_INFORM_TREATMENT:"Civic Voter Inform Treatment",CIVIC_VOTER_INFORM_TREATMENT_FOR_MM:"Civic Voter Inform Treatment For Myanmar",CIVIC_VOTER_INFORM_TREATMENT_FOR_BR:"Civic Voter Inform Treatment For Brazil",CIVIC_VOTER_INFORM_TREATMENT_FOR_ID:"Civic Voter Inform Treatment For Indonesia",CIVIC_FACTS_ABOUT_VOTING_INFORM_TREATMENT:"Civic Facts About Voting Inform Treatment",HACK_AND_LEAK:"Hack And Leak",GRAPHIC_MISINFO:"Graphic Misinfo",WIDELY_DEBUNKED_HOAX_VACCINE:"Widely Debunked Hoax Vaccine",WORK_RECRUITING_GROUP_POST:"Recruiting Group Post",USER_APPLIED:"User Applied",BLOCKS:"Blocks",MISINFORMATION:"Misinformation",GENERIC_CIVIC:"Generic Civic",COMPASS:"Compass",GENERIC_INFORM:"Generic Inform",DUMMY_GIT:"Dummy GIT",ANIMAL_VIOLENCE:"Animal Violence",POLITICAL:"Politically Charged",PROFANITY:"Profanity",CENSUS_MISINFO:"Census Misinfo",COVID_ELECTION_BORDERLINE:"Covd Election Borderline",OBJECTIONABLE:"Sexual"});f["default"]=a}),66);
__d("CometWarningScreenClientLogger",["CixWarningScreensFalcoEvent","WarningScreenType"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b,d=(b=a.contentIDRaw)==null?void 0:b.split(":").filter(function(a){return a!==""}).pop();c("CixWarningScreensFalcoEvent").log(function(){return{action:a.action,attribution_id_v2:a.attribution_id_v2,blocks_logging_data:a.blocksLoggingData,content_id_raw:d,event:a.event,inform_session_id:a.session_id,integrity_ui_element:a.integrityUIElement,product:a.product,render_type:a.renderType,story_ent_identifier_graphql_id:a.storyID,story_render_location:a.storyRenderLocation,surface:a.surface,top_warning_screen_category:h(a.objectionableCategory),vpvd:a.vpvd}})}function h(a){if(a==null)return null;a=a;return c("WarningScreenType")[a]}g.logInformTreatmentEvent=a}),98);
__d("StoriesArchiveCardStoreForBlue",[],(function(a,b,c,d,e,f){"use strict";a={DeletedStoryList:new Set(),SeenStoryList:new Set(),StoriesArchiveDataMap:new Map()};f["default"]=a}),66);
__d("CometMediaRemoveTagFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743382");b=d("FalcoLoggerInternal").create("comet_media_remove_tag",a);e=b;g["default"]=e}),98);
__d("CometMediaVpvdFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743384");b=d("FalcoLoggerInternal").create("comet_media_vpvd",a);e=b;g["default"]=e}),98);/*FB_PKG_DELIM*/
__d("CometRadioGroupList.react",["BaseView.react","CometRadioGroupListContext","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=a.children,d=a.component,e=d===void 0?"div":d;d=a.label;var f=a.name,g=a.onValueChange,j=a.subheader,k=a.testid,l=a.value;k=a.xstyle;a=i(function(){return{name:f,onValueChange:g,value:l}},[f,g,l]);return h.jsxs(c("BaseView.react"),{children:[j&&h.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headline3",children:j}),h.jsx(c("CometRadioGroupListContext").Provider,{value:a,children:h.jsx(e,{"aria-label":d,className:c("stylex")(k),role:"radiogroup",testid:void 0,children:h.Children.map(b,function(a){var b=e==="ul",c=b?"li":"div";return h.jsx(c,{className:""+(b?" x3ct3a4 xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd":""),children:a})})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometRadioListCellPressable.react",["ix","CometIcon.react","CometListCellPressable.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a,b){var e,f=a.radioAddonComponent,g=a.radioAddonProps;a=babelHelpers.objectWithoutPropertiesLoose(a,["radioAddonComponent","radioAddonProps"]);e=(e=a.disabled)!=null?e:!1;var j=g.checked;j=j===void 0?!1:j;var k=g.checkedIcon,l=g.color,m=g.disabled;m=m===void 0?!1:m;var n=g.icon;g["aria-label"];g["aria-labelledby"];g.onBlur;g.onChange;g.onFocus;g.onValueChange;var o=babelHelpers.objectWithoutPropertiesLoose(g,["aria-label","aria-labelledby","onBlur","onChange","onFocus","onValueChange"]);k=(k=k)!=null?k:d("fbicon")._(h("621399"),20);n=(n=n)!=null?n:d("fbicon")._(h("545517"),20);var p=f!=null;o=f!=null?i.jsx(f,babelHelpers["extends"]({},o)):i.jsx(c("CometIcon.react"),{"aria-hidden":!0,color:e||m?"disabled":j?(f=l)!=null?f:"highlight":"secondary",icon:j?k:n});e=i.jsx(c("CometListCellPressable.react"),babelHelpers["extends"]({},a,{addOnEnd:o,"aria-checked":p?void 0:!!g.checked,focusable:!p,ref:b,role:p?"presentation":"radio"}));return p?i.jsx("label",{children:e}):e}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("useCometProfessionalDashboardIsRouteComingFromProDash",["ConstUriUtils","useCometRoute"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=window.location.href;a=d("ConstUriUtils").getUri(a);a=c("useCometRoute")(a==null?void 0:a.toString());var b=(a=a==null?void 0:a.tracePolicy)!=null?a:"";return["comet.profile.professional_dashboard","comet.group.professional_dashboard","comet.professional_dashboard"].some(function(a){return b.startsWith(a)})}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("MutationObserver",[],(function(a,b,c,d,e,f){b=function(){function a(a){}var b=a.prototype;b.observe=function(a,b){};b.disconnect=function(){};b.takeRecords=function(){return[]};return a}();e=(d=(c=a.MutationObserver)!=null?c:a.WebKitMutationObserver)!=null?d:b;c=e;f["default"]=c}),66);
__d("useMutationObserver",["MutationObserver","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useRef;function a(a,b){var d=i({observer:null,callback:a}),e=i(null),f=i({element:null,options:null,observer:null}),g=h(function(){var a=f.current,c=a.observer,g=a.element;a=a.options;var h=d.current.observer,i=e.current;(g!=i||b!=a||h!=c)&&(c&&c.disconnect(),h&&i&&h.observe(i,b),f.current={observer:h,element:i,options:b})},[b]);(d.current.observer==null||d.current.callback!==a)&&(d.current.observer!=null&&d.current.observer.disconnect(),d.current={observer:new(c("MutationObserver"))(a),callback:a});g();return h(function(a){e.current=a,g()},[g])}g["default"]=a}),98);
__d("useShallowEqualState",["react","shallowEqual"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useState;function a(a){a=i(a);var b=a[0],d=a[1];a=h(function(a){if(typeof a==="function"){var b=a;return d(function(a){var d=b(a);return c("shallowEqual")(a,d)?a:d})}return d(function(b){return c("shallowEqual")(b,a)?b:a})},[]);return[b,a]}g["default"]=a}),98);
__d("CometPulseEffect.react",["CometPulseEffectBase.react","react","useMergeRefs","useMutationObserver","useResizeObserver","useShallowEqualState","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useRef,k=b.useState;function a(a){var b=a.children,d=a.disabled;d=d===void 0?!1:d;var e=a.pulseColor;e=e===void 0?"primary":e;a=a.xstyle;var f=j(null),g=k(null),l=g[0],m=g[1];g=k(null);var n=g[0],o=g[1];g=c("useShallowEqualState")(null);var p=g[0],q=g[1];g=k(!1);var r=g[0],s=g[1];g=c("useVisibilityObserver")({onHidden:function(a){a=a.hiddenReason;r&&a!=="COMPONENT_UNMOUNTED"&&s(!1)},onVisible:function(){return s(!0)}});var t=i(function(a){if(a!=null){a=window.getComputedStyle(a);var b=a.borderBottomLeftRadius,c=a.borderBottomRightRadius,d=a.borderTopLeftRadius;a=a.borderTopRightRadius;q({borderBottomLeftRadius:b,borderBottomRightRadius:c,borderTopLeftRadius:d,borderTopRightRadius:a})}},[q]),u=c("useResizeObserver")(function(a,b){o(a.height);m(a.width);a=window.getComputedStyle(b);b=a.borderBottomLeftRadius;var c=a.borderBottomRightRadius,d=a.borderTopLeftRadius;a=a.borderTopRightRadius;q({borderBottomLeftRadius:b,borderBottomRightRadius:c,borderTopLeftRadius:d,borderTopRightRadius:a})}),v=c("useMutationObserver")(function(){return t(f.current)},{attributeFilter:["style","class"],attributes:!0});g=c("useMergeRefs")(f,g,t,u,v);return h.jsx(c("CometPulseEffectBase.react"),{disabled:d,height:n,pulseColor:e,radii:p,visible:r,width:l,xstyle:a,children:b(g)})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLegacyListItemSeparator.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){return h.jsx("div",{className:"xdppsyt x14vqqas xktsk01 xod5an3 x1d52u69",role:"separator"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);