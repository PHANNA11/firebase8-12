;/*FB_PKG_DELIM*/

__d("LSGetParentThreadKey",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[];return b.seq([function(e){return b.seq([function(d){return b.db.table(9).fetch([[[a[0]]]]).next().then(function(a,b){var d=a.done;a=a.value;return d?c[0]=[0,0]:(b=a.item,c[0]=b.parentThreadKey)})},function(a){return d[0]=c[0]}])},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSUpdateFolderThreadSnippet",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[],e;return b.seq([function(d){return b.seq([function(d){return b.i64.neq(a[1],e)?b.resolve(c[0]=a[1]):b.seq([function(d){return b.ct(b.ftr(b.db.table(9).fetch([[[a[0]]],"parentThreadKeyLastActivityTimestampMs"]),function(c){return b.i64.eq(c.parentThreadKey,a[0])&&b.i64.lt(c.lastReadWatermarkTimestampMs,c.lastActivityTimestampMs)})).then(function(a){return c[5]=a})},function(a){return c[0]=c[5]}])},function(d){return c[1]=a[2].get("all_read"),a[2],c[2]=a[2].get("unread_singular"),a[2],c[3]=a[2].get("unread_plural"),a[2],b.i64.eq(c[0],[0,0])?c[4]=c[1]:(b.i64.eq(c[0],[0,1])?c[5]=[b.i64.to_string(c[0]),c[2]].join(""):c[5]=[b.i64.to_string(c[0]),c[3]].join(""),c[4]=c[5]),b.fe(b.db.table(9).fetch([[[a[0]]]]),function(a){var b=a.update;a.item;return b({snippet:c[4],snippetStringHash:e,snippetStringArgument1:e,snippetAttribution:e,snippetAttributionStringHash:e})})}])},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSUpdateParentFolderReadWatermark",["LSGetParentThreadKey","LSUpdateFolderThreadSnippet"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return c.seq([function(e){return c.sp(b("LSGetParentThreadKey"),a[0]).then(function(a){return a=a,d[0]=a[0],a})},function(e){return c.i64.neq(d[0],[0,0])?c.seq([function(a){return c.sb(c.ftr(c.db.table(9).fetch([[[d[0]]],"parentThreadKeyLastActivityTimestampMs"]),function(a){return c.i64.eq(a.parentThreadKey,d[0])&&c.i64.lt(a.lastReadWatermarkTimestampMs,a.lastActivityTimestampMs)}),[["lastReadWatermarkTimestampMs","ASC"]]).next().then(function(a,b){var c=a.done;a=a.value;return c?d[1]=f:(b=a.item,d[1]=b.lastReadWatermarkTimestampMs)})},function(a){return c.i64.neq(d[1],f)?c.fe(c.db.table(9).fetch([[[d[0]]]]),function(a){var b=a.update;a.item;return b({lastReadWatermarkTimestampMs:d[1]})}):c.seq([function(a){return c.db.table(9).fetch([[[d[0]]]]).next().then(function(a,b){var c=a.done;a=a.value;return c?d[3]=f:(b=a.item,d[3]=b.lastActivityTimestampMs)})},function(a){return c.i64.neq(d[3],f)?c.fe(c.db.table(9).fetch([[[d[0]]]]),function(a){var b=a.update;a.item;return b({lastReadWatermarkTimestampMs:d[3]})}):c.resolve()}])},function(e){return c.sp(b("LSUpdateFolderThreadSnippet"),d[0],f,a[1])}]):c.resolve()}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSUpsertFolder",["LSUpdateFolderThreadSnippet"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return c.seq([function(b){return c.i64.neq(a[3],f)?c.resolve(d[0]=a[3]):c.seq([function(b){return c.db.table(9).fetchDesc([[[a[0]]],"parentThreadKeyLastActivityTimestampMs"]).next().then(function(a,b){var c=a.done;a=a.value;return c?d[3]=[0,0]:(b=a.item,d[3]=b.lastActivityTimestampMs)})},function(a){return d[0]=d[3]}])},function(b){return c.i64.neq(a[4],f)?c.resolve(d[1]=a[4]):c.seq([function(b){return c.sb(c.ftr(c.db.table(9).fetch([[[a[0]]],"parentThreadKeyLastActivityTimestampMs"]),function(b){return c.i64.eq(b.parentThreadKey,a[0])&&c.i64.lt(b.lastReadWatermarkTimestampMs,b.lastActivityTimestampMs)}),[["lastReadWatermarkTimestampMs","ASC"]]).next().then(function(b,e){var g=b.done;b=b.value;return g?c.seq([function(b){return c.i64.neq(a[3],f)?c.resolve(d[5]=a[3]):c.seq([function(b){return c.db.table(9).fetchDesc([[[a[0]]],"parentThreadKeyLastActivityTimestampMs"]).next().then(function(b,c){var a=b.done;b=b.value;return a?d[6]=[0,0]:(c=b.item,d[6]=c.lastActivityTimestampMs)})},function(a){return d[5]=d[6]}])},function(a){return d[3]=d[5]}]):(e=b.item,d[3]=e.lastReadWatermarkTimestampMs)})},function(a){return d[1]=d[3]}])},function(b){return c.db.table(9).fetch([[[a[0]]]]).next().then(function(b,e){e=b.done;b=b.value;return e?c.seq([function(b){return c.fe(c.ftr(c.db.table(9).fetch([[[a[0]]]]),function(b){return c.i64.eq(b.threadKey,a[0])&&c.i64.lt(b.authorityLevel,[0,80])}),function(a){return a["delete"]()})},function(b){return c.db.table(9).add({threadKey:a[0],mailboxType:[0,0],threadType:[0,6],threadName:a[1],folderName:"",parentThreadKey:[0,0],threadPictureUrl:a[2],lastActivityTimestampMs:d[0],lastReadWatermarkTimestampMs:d[1],removeWatermarkTimestampMs:[0,0],muteExpireTimeMs:[0,0],snippet:"",isAdminSnippet:!1,hasPersistentMenu:!1,disableComposerInput:!1,snippetHasEmoji:!1,authorityLevel:[0,80],ongoingCallState:[0,0],capabilities:[0,0],shouldRoundThreadPicture:!1})}]):(b.item,c.fe(c.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({threadName:a[1],folderName:"",parentThreadKey:[0,0],threadPictureUrl:a[2],lastActivityTimestampMs:d[0],lastReadWatermarkTimestampMs:d[1],removeWatermarkTimestampMs:[0,0],muteExpireTimeMs:[0,0],snippet:"",snippetStringHash:f,snippetStringArgument1:f,snippetAttribution:f,snippetAttributionStringHash:f,isAdminSnippet:!1,hasPersistentMenu:!1,disableComposerInput:!1,snippetHasEmoji:!1,authorityLevel:[0,80],ongoingCallState:[0,0],capabilities:[0,0],shouldRoundThreadPicture:!1})}))})},function(d){return c.sp(b("LSUpdateFolderThreadSnippet"),a[0],a[5],a[6])}])},function(a){return c.resolve(e)}])}e.exports=a}),null);