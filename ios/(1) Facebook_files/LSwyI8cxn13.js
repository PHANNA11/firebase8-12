;/*FB_PKG_DELIM*/

__d("HostnameRewriter",["ConstUriUtils","Env","URI","isFacebookURI","lowerFacebookDomain"],(function(a,b,c,d,e,f,g){var h=function(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},i=null,j=null,k=new RegExp("facebook\\.com$"),l=new RegExp("^www\\.(|.*\\.)facebook\\.com$"),m=null,n="facebook.com",o=null,p=new RegExp("fbcdn\\.net$"),q=new RegExp("^www\\."),r=new RegExp("(^|\\.)(facebook\\.com|workplace\\.com)$","i");function s(){i=null;var a="(^|\\.)";m=a+h(n)+"$";j=null}function t(){if(m==null)return null;if(i)return i;i=new RegExp(m,"i");return i}function u(){if(j)return j;j=new RegExp("(^|\\.)("+h(n)+"|facebook\\.com)$","i");return j}function v(a){if(u().test(a)&&n!=null)return a.replace(k,n);else if(o!=null&&a!==null)return a.replace(p,o);return a}function w(a){return l.test(a)?a.replace(q,"web."):a}function x(a){return function(b){b=new(c("URI"))(b);b.setDomain(a(b.getDomain()));return b}}function y(a,b){n=a,o=b,s(),c("isFacebookURI").setRegex(t()),c("URI").registerFilter(x(v)),d("ConstUriUtils").registerDomainFilter(v),c("lowerFacebookDomain").setDomain(n)}function a(a,b){n=a,c("URI").registerFilter(x(w))}function b(){var a=c("Env").hostnameRewriterConfig;if(a==null)return;switch(a.site){case"onion":y(a.inboundName,a.cdnDomainName);break}}function e(){c("isFacebookURI").setRegex(r)}g.registerFacebookOverTorFilters=y;g.registerInternetDotOrgFilters=a;g.maybeRegisterFilters=b;g.treatWorkplaceAsFacebookURI=e}),98);
__d("nullIfAnyNullProperties",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||Object.entries(a).some(function(a){var b=a[0];a=a[1];return b!=="__fragmentOwner"&&a==null})?null:a}f["default"]=a}),66);
__d("XAppSettingsAsyncDeleteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/settings/apps/delete_app_multi/",{__asyncDialog:{type:"Int"},app_ids:{type:"String"},surface:{type:"Enum",defaultValue:"applications",enumType:1},refresh_page_on_success:{type:"Bool",defaultValue:!1},refresh_page_on_done:{type:"Bool",defaultValue:!1},page_id:{type:"Int"},privacy_mutation_token:{type:"String"}})}),null);