;/*FB_PKG_DELIM*/

__d("ProfileCometHeaderActionBarMenuItemWithoutIsActiveField_profileAction.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Literal",name:"icon_color",value:"fds-black"},b={kind:"Literal",name:"icon_size",value:"20"},c={kind:"Variable",name:"scale",variableName:"scale"},d=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBarMenuItemWithoutIsActiveField_profileAction",selections:[{alias:null,args:null,kind:"ScalarField",name:"profile_action_type",storageKey:null},{alias:"secondary_icon",args:[a,b,{kind:"Literal",name:"icon_variant",value:"outline"},c],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:d,storageKey:null},{alias:"active_secondary_icon",args:[a,b,{kind:"Literal",name:"icon_variant",value:"filled"},c],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometActionTrigger_action"},{args:null,kind:"FragmentSpread",name:"ProfileCometActionLogger_action"}],type:"ProfileAction",abstractKey:"__isProfileAction"}}();e.exports=a}),null);
__d("ProfileCometHeaderActionBarMenuItem_profileAction.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Literal",name:"icon_color",value:"fds-black"},b={kind:"Literal",name:"icon_size",value:"20"},c={kind:"Variable",name:"scale",variableName:"scale"},d=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBarMenuItem_profileAction",selections:[{alias:null,args:null,kind:"ScalarField",name:"profile_action_type",storageKey:null},{alias:"secondary_icon",args:[a,b,{kind:"Literal",name:"icon_variant",value:"outline"},c],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:d,storageKey:null},{alias:"active_secondary_icon",args:[a,b,{kind:"Literal",name:"icon_variant",value:"filled"},c],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_disabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometActionTrigger_action"},{args:null,kind:"FragmentSpread",name:"ProfileCometActionLogger_action"}],type:"ProfileAction",abstractKey:"__isProfileAction"}}();e.exports=a}),null);
__d("ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"entityID"},{defaultValue:"WWW_COMET_PROFILE",kind:"LocalArgument",name:"userActionBarRenderLocation"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBarMoreMenu_actorWithActionBar",selections:[{alias:"secondaryActions",args:[{kind:"Variable",name:"associated_entity_id",variableName:"entityID"},{kind:"Variable",name:"render_location",variableName:"userActionBarRenderLocation"},{kind:"Literal",name:"subsurface_type",value:"SECONDARY_SURFACE"}],concreteType:null,kind:"LinkedField",name:"profile_actions",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"secondary_title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometHeaderActionBarMenuItem_profileAction"}],storageKey:null}],type:"ActorWithActionBar",abstractKey:"__isActorWithActionBar"};e.exports=a}),null);
__d("ProfileCometActionLogger_action.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionLogger_action",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["ProfileActionProfessionalModeRollbackLogger","ProfileActionProfessionalModeOnboardingLogger"]}],concreteType:null,kind:"LinkedField",name:"client_logger",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionLogger_action",fragmentName:"ProfileCometActionProfessionalModeRollbackLogger_logger",fragmentPropName:"logger",kind:"ModuleImport"}],type:"ProfileActionProfessionalModeRollbackLogger",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionLogger_action",fragmentName:"ProfileCometActionProfessionalModeOnboardingLogger_logger",fragmentPropName:"logger",kind:"ModuleImport"}],type:"ProfileActionProfessionalModeOnboardingLogger",abstractKey:null}],storageKey:'client_logger(supported:["ProfileActionProfessionalModeRollbackLogger","ProfileActionProfessionalModeOnboardingLogger"])'}],type:"ProfileAction",abstractKey:"__isProfileAction"};e.exports=a}),null);
__d("ProfileCometActionLogger.react",["CometRelay","ProfileCometActionLogger_action.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var c=a.action,e=a.children;a=a.overflowSlot;c=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometActionLogger_action.graphql"),c);return i.jsx(d("CometRelay").MatchContainer,{fallback:e,match:c.client_logger,props:{children:e,overflowSlot:a}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometHeaderActionBarMenuItem.react",["ix","CometLightweightGroupsActionSourceContext","CometMenuItem.react","CometRelay","ProfileCometActionLogger.react","ProfileCometActionTrigger.react","ProfileCometContextualProfileContext","ProfileCometHeaderActionBarMenuItemWithoutIsActiveField_profileAction.graphql","ProfileCometHeaderActionBarMenuItem_profileAction.graphql","TintableIconSource","coerceRelayImage","gkx","mergeRefs","react","recoverableViolation","requireDeferred","useProfileCometEngagementEventsClickCallback","useProfileCometEngagementEventsImpression","useProfileEngagementClickCallback"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=d("react");e=d("react");var l=e.useCallback,m=e.useContext,n=c("requireDeferred")("GroupLwgUserEventsFalcoEvent").__setRef("ProfileCometHeaderActionBarMenuItem.react");i!==void 0?i:i=b("ProfileCometHeaderActionBarMenuItemWithoutIsActiveField_profileAction.graphql");function a(a){var e=a.action,f=a.additionalActionProps,g=a.onClose,i=a.overflowSlot;a=a.pushPage;var o=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometHeaderActionBarMenuItem_profileAction.graphql"),e);e=m(c("ProfileCometContextualProfileContext"));var p=m(c("CometLightweightGroupsActionSourceContext")),q=e.groupID,r=e.userID,s=p.lightweightGroupSource,t=c("useProfileEngagementClickCallback")(e.isContextualProfileView?{event_metadata:{groupID:q},item_subtype:(o.profile_action_type||"unknown").toLowerCase(),item_type:"more",product_bucket:"contextual_profile",profile_id_dummy:r,surface:"group_contextual_profile"}:{item_subtype:(o.profile_action_type||"unknown").toLowerCase(),item_type:"more",product_bucket:"action_bar",surface:"timeline"}),u=f==null?void 0:f.iconStyle,v=f==null?void 0:f.secondaryText,w=(o.profile_action_type||"unknown").toLowerCase(),x=o==null?void 0:(p=o.title)==null?void 0:p.text,y=l(function(){s!=null&&(w==="block_user_from_group"?n.onReady(function(a){a.log(function(){return{entry_point:s,event:"click_block_from_group",group_id:q,source:s}})}):w==="invite_admin"?x==="Cancel admin invite"?n.onReady(function(a){a.log(function(){return{entry_point:s,event:"click_cancel_admin_invite",group_id:q,source:s}})}):n.onReady(function(a){a.log(function(){return{entry_point:s,event:"click_add_as_admin",group_id:q,source:s}})}):w==="remove_member"?n.onReady(function(a){a.log(function(){return{entry_point:s,event:"click_remove_member",group_id:q,source:s}})}):w==="remove_admin"?n.onReady(function(a){a.log(function(){return{entry_point:s,event:"click_remove_as_admin",group_id:q,source:s}})}):w==="remove_member"?n.onReady(function(a){a.log(function(){return{entry_point:s,event:"click_remove_member",group_id:q,source:s}})}):w==="remove_admin"?n.onReady(function(a){a.log(function(){return{entry_point:s,event:"click_remove_as_admin",group_id:q,source:s}})}):w==="mute_member"&&(x==="Suspend"?n.onReady(function(a){a.log(function(){return{entry_point:s,event:"click_suspend_in_group",group_id:q,source:s}})}):n.onReady(function(a){a.log(function(){return{entry_point:s,event:"click_unsuspend_in_group",group_id:q,source:s}})})))},[w,q,s,x]);e={event_metadata:{overflow_slot:String(i)},feature_item:w,feature_surface:"action_sheet",profile_feature:"overflow_action",profile_section:"action_bar"};var z=c("useProfileCometEngagementEventsClickCallback")(e),A=c("useProfileCometEngagementEventsImpression")(e),B=o.is_active===!0?o.active_secondary_icon:o.secondary_icon;if(x==null){c("recoverableViolation")("Action has no title","profile_comet");return null}if(!B){c("recoverableViolation")("Action has no icon","profile_comet");return null}var C=w==="invite_post_reactors_to_follow";if(C&&!c("gkx")("5581"))return null;var D={icon:new(c("TintableIconSource"))("FB",h("1395922"),16),type:"icon"};return k.jsx(c("ProfileCometActionLogger.react"),{action:o,overflowSlot:i,children:k.jsx(c("ProfileCometActionTrigger.react"),{action:o,onClose:g,pushPage:a,children:function(a){var b;return a.memberModerations?a.memberModerations:k.jsx(c("CometMenuItem.react"),{auxItem:C?D:void 0,disabled:a.disabled!==void 0&&a.disabled||o.is_disabled!==null&&o.is_disabled,download:(b=(b=a.linkProps)==null?void 0:b.download)!=null?b:void 0,href:(b=(b=a.linkProps)==null?void 0:b.url)!=null?b:void 0,icon:new(c("TintableIconSource"))("FB",c("coerceRelayImage")(B),20),iconStyle:u,onClick:function(b){t(),z(),a.onPress&&a.onPress(b),q&&y()},onHoverIn:a.onHoverIn,onHoverOut:a.onHoverOut,onPressIn:a.onPressIn,preventClosingMenuOnSelect:w==="profile_share"?!0:void 0,primaryText:x,ref:c("mergeRefs")(a.ref,A),routeTarget:(b=(b=a.linkProps)==null?void 0:b.routeTarget)!=null?b:void 0,secondaryText:v,target:(b=(b=a.linkProps)==null?void 0:b.target)!=null?b:void 0})}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometHeaderActionBarMoreMenu.react",["BaseMultiStepContainer.react","CometMenuBase.react","CometPopover.react","CometRelay","ProfileCometHeaderActionBarMenuItem.react","ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql","emptyFunction","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function j(a){var e=a.actor,f=a.onClose;a=a.pushPage;var g=a===void 0?c("emptyFunction"):a;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql"),e);if(!a||!a.secondaryActions){c("recoverableViolation")("Rendering more menu with no actions","profile_comet");return null}return i.jsx(c("CometMenuBase.react"),{role:"menu",children:a.secondaryActions.map(function(a,b){var d;return i.jsx(c("ProfileCometHeaderActionBarMenuItem.react"),{action:a,additionalActionProps:{secondaryText:a==null?void 0:(d=a.secondary_title)==null?void 0:d.text},onClose:f,overflowSlot:b+1,pushPage:g},a==null?void 0:a.id)})})}j.displayName=j.name+" [from "+f.id+"]";function a(a){var b=a.actor,d=a.onClose;return i.jsx(c("CometPopover.react"),{role:"menu",withArrow:!0,children:i.jsx(c("BaseMultiStepContainer.react"),{fitContentWidth:!0,children:function(a){return i.jsx(j,{actor:b,onClose:d,pushPage:a})}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);