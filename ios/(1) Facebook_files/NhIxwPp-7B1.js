;/*FB_PKG_DELIM*/

__d("CometHovercardQueryRendererQuery.graphql",["GlobalPanelEnabled.relayprovider","CometGlobalPanelEMCopresence.relayprovider","relay-runtime"],(function(a,b,c,d,e,f){"use strict";var g={__relay_internal__pv__GlobalPanelEnabledrelayprovider:b("GlobalPanelEnabled.relayprovider"),__relay_internal__pv__CometGlobalPanelEMCopresencerelayprovider:b("CometGlobalPanelEMCopresence.relayprovider")};a=function(){var a={defaultValue:"WWW_COMET_HOVERCARD",kind:"LocalArgument",name:"actionBarRenderLocation"},b={defaultValue:"DEFAULT",kind:"LocalArgument",name:"context"},c={defaultValue:null,kind:"LocalArgument",name:"entityID"},d={defaultValue:null,kind:"LocalArgument",name:"groupID"},e={defaultValue:null,kind:"LocalArgument",name:"includeTdaInfo"},f={defaultValue:null,kind:"LocalArgument",name:"scale"},h=[{kind:"Variable",name:"id",variableName:"entityID"}],i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:[a,b,c,d,e,f],kind:"Fragment",metadata:null,name:"CometHovercardQueryRendererQuery",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometHovercard_entity"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,f,c,b,d,e,{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__GlobalPanelEnabledrelayprovider"},{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__CometGlobalPanelEMCopresencerelayprovider"}],kind:"Operation",name:"CometHovercardQueryRendererQuery",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[i,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"context",variableName:"context"},{kind:"Literal",name:"supported",value:["CometHovercardMarketplaceUserRenderer","CometHovercardUserRenderer","CometHovercardProfilePlusUserRenderer","CometHovercardPageRenderer","CometHovercardGamingStreamerRenderer","CometHovercardGroupRenderer","CometHovercardGroupContextualProfileRenderer","CometHovercardGroupCommunityPanelRenderer","CometHovercardEventRenderer","CometHovercardGroupAnonProfileRenderer","CometHovercardGroupMemberRenderer","CometHovercardGameRenderer","CometHovercardApplicationInstantGameRenderer","CometHovercardRemovedCommentRenderer","WorkCometHovercardAdminUserRenderer","WorkCometHovercardEventRenderer","WorkCometHovercardGroupPrivacyInfoRenderer","WorkCometHovercardGroupRenderer","WorkCometHovercardPageRenderer","WorkCometHovercardUserRP4SMBRenderer","WorkCometHovercardWorkroomsUserRenderer","WorkCometHovercardUserRenderer","WorkCometHovercardUserWorkPlatformRenderer","CometHovercardTownsquareUserRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_hovercard_renderer",plural:!1,selections:[i,{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardMarketplaceUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardMarketplaceUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardProfilePlusUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardProfilePlusUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGamingStreamerRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardGamingStreamerRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"CometHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupContextualProfileRenderer_profile",fragmentPropName:"profile",kind:"ModuleImport"}],type:"CometHovercardGroupContextualProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupCommunityPanelRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"CometHovercardGroupCommunityPanelRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"CometHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupAnonProfileRenderer_anon",fragmentPropName:"anon",kind:"ModuleImport"}],type:"CometHovercardGroupAnonProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupMemberRenderer_actor",fragmentPropName:"actor",kind:"ModuleImport"}],type:"CometHovercardGroupMemberRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGameRenderer_game",fragmentPropName:"game",kind:"ModuleImport"}],type:"CometHovercardGameRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardApplicationInstantGameRenderer_application",fragmentPropName:"application",kind:"ModuleImport"}],type:"CometHovercardApplicationInstantGameRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardRemovedCommentRenderer_comment",fragmentPropName:"comment",kind:"ModuleImport"}],type:"CometHovercardRemovedCommentRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardAdminUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardAdminUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"WorkCometHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardGroupPrivacyInfoRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WorkCometHovercardGroupPrivacyInfoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WorkCometHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"WorkCometHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardUserRP4SMBRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardUserRP4SMBRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardWorkroomsUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardWorkroomsUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardUserWorkPlatformRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardUserWorkPlatformRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardTownsquareUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardTownsquareUserRenderer",abstractKey:null}],storageKey:null}],type:"CometHovercard",abstractKey:"__isCometHovercard"}],type:"Entity",abstractKey:"__isEntity"}],storageKey:null}]},params:{id:"6281083818592224",metadata:{},name:"CometHovercardQueryRendererQuery",operationKind:"query",text:null,providedVariables:g}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometHovercard_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"context"}],kind:"Fragment",metadata:null,name:"CometHovercard_entity",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"context",variableName:"context"},{kind:"Literal",name:"supported",value:["CometHovercardMarketplaceUserRenderer","CometHovercardUserRenderer","CometHovercardProfilePlusUserRenderer","CometHovercardPageRenderer","CometHovercardGamingStreamerRenderer","CometHovercardGroupRenderer","CometHovercardGroupContextualProfileRenderer","CometHovercardGroupCommunityPanelRenderer","CometHovercardEventRenderer","CometHovercardGroupAnonProfileRenderer","CometHovercardGroupMemberRenderer","CometHovercardGameRenderer","CometHovercardApplicationInstantGameRenderer","CometHovercardRemovedCommentRenderer","WorkCometHovercardAdminUserRenderer","WorkCometHovercardEventRenderer","WorkCometHovercardGroupPrivacyInfoRenderer","WorkCometHovercardGroupRenderer","WorkCometHovercardPageRenderer","WorkCometHovercardUserRP4SMBRenderer","WorkCometHovercardWorkroomsUserRenderer","WorkCometHovercardUserRenderer","WorkCometHovercardUserWorkPlatformRenderer","CometHovercardTownsquareUserRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_hovercard_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardMarketplaceUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardMarketplaceUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardProfilePlusUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardProfilePlusUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGamingStreamerRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardGamingStreamerRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"CometHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupContextualProfileRenderer_profile",fragmentPropName:"profile",kind:"ModuleImport"}],type:"CometHovercardGroupContextualProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupCommunityPanelRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"CometHovercardGroupCommunityPanelRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"CometHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupAnonProfileRenderer_anon",fragmentPropName:"anon",kind:"ModuleImport"}],type:"CometHovercardGroupAnonProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupMemberRenderer_actor",fragmentPropName:"actor",kind:"ModuleImport"}],type:"CometHovercardGroupMemberRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGameRenderer_game",fragmentPropName:"game",kind:"ModuleImport"}],type:"CometHovercardGameRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardApplicationInstantGameRenderer_application",fragmentPropName:"application",kind:"ModuleImport"}],type:"CometHovercardApplicationInstantGameRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardRemovedCommentRenderer_comment",fragmentPropName:"comment",kind:"ModuleImport"}],type:"CometHovercardRemovedCommentRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardAdminUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardAdminUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"WorkCometHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardGroupPrivacyInfoRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WorkCometHovercardGroupPrivacyInfoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WorkCometHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"WorkCometHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardUserRP4SMBRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardUserRP4SMBRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardWorkroomsUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardWorkroomsUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardUserWorkPlatformRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardUserWorkPlatformRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardTownsquareUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardTownsquareUserRenderer",abstractKey:null}],storageKey:null}],type:"CometHovercard",abstractKey:"__isCometHovercard"}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("CometHovercard.react",["CometHovercardLinkContext","CometHovercard_entity.graphql","CometRelay","CometTrackingNodeProvider.react","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useMemo;function a(a){var e=a.entity;a=a.visualStyle;a=a===void 0?"default":a;e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometHovercard_entity.graphql"),e);var f=j(function(){return{isRenderedInHovercard:!0}},[]),g=e==null?void 0:e.comet_hovercard_renderer;return g==null?c("recoverableViolation")("Unhandled entity for Hovercard "+e.__typename,"comet_ui"):i.jsx(c("CometHovercardLinkContext").Provider,{value:f,children:i.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:250,children:i.jsx(d("CometRelay").MatchContainer,{fallback:null,match:g,props:{visualStyle:a}})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHovercardQueryRenderer.react",["CometHovercard.react","CometHovercardQueryRendererQuery.graphql","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.props;a=a.queries;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("CometHovercardQueryRendererQuery.graphql"),a.hovercardQueryReference);a=a==null?void 0:a.node;return a==null?null:i.jsx(c("CometHovercard.react"),{entity:a,visualStyle:e.visualStyle})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);