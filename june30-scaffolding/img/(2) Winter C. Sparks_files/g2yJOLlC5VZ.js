/*!CK:3556647980!*//*1434940372,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["mijv4"]); }

__d("GenderConst",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={NOT_A_PERSON:0,FEMALE_SINGULAR:1,MALE_SINGULAR:2,FEMALE_SINGULAR_GUESS:3,MALE_SINGULAR_GUESS:4,MIXED_SINGULAR:5,MIXED_PLURAL:5,NEUTER_SINGULAR:6,UNKNOWN_SINGULAR:7,FEMALE_PLURAL:8,MALE_PLURAL:9,NEUTER_PLURAL:10,UNKNOWN_PLURAL:11,UNKNOWN:0};},null);
__d("ChatTabTypeaheadRenderer",["DOM","CompactTypeaheadRenderer","MercuryTypeaheadConstants","MercuryThreadMetadataRawRenderer","TypeaheadFacepile"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(n,o){switch(n.type){case i.USER_TYPE:case i.PAGE_TYPE:return h(n,o);case i.THREAD_TYPE:return m(n,o);default:return g.create('div');}}function m(n,o){var p=[],q=n.mercury_thread;if(q.image_src){p.push(g.create('img',{alt:'',src:q.image_src}));}else{var r=n.participants_to_render.map(function(u){return u.big_image_src||u.image_src;});if(r){if(r instanceof Array){r=k.render(r);}else r=g.create('img',{alt:'',src:r});p.push(r);}}var s=q.name,t=j.renderRawParticipantList(q.thread_id,n.participants_to_render,q.participants.length,{names_renderer:j.renderShortNames});p.push(g.create('span',{className:'timestamp'},q.timestamp_relative));p.push(g.create('span',{className:'text'},s));p.push(g.create('span',{className:'subtext'},t));return g.create('li',{className:'node'},p);}l.className='compact';e.exports=l;},null);
__d("XAssociateGroupThreadController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/groups\/messenger\/associate_group_thread\/",{});},null);
__d("MultiChatController",["AsyncSignal","ChatOpenTab","Form","MercuryIDs","MercuryLocalIDs","MercuryViewer","MercuryServerDispatcher","XAssociateGroupThreadController","MercuryThreadIDMap","MercuryThreads","MercuryDispatcher"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o=b('MercuryThreadIDMap').get(),p=b('MercuryThreads').get(),q=b('MercuryDispatcher').get(),r=n.getURIBuilder().getURI().toString();function s(){}Object.assign(s,{subscribe:function(u,v){u.subscribe('confirm',function(){this.createGroupThreadFromChooserDialog(u,v);}.bind(this));},createGroupThreadFromChooserDialog:function(u,v){var w=i.serialize(u.getRoot()),x=JSON.parse(w.profileChooserItems),y=[];for(var z in x)if(x[z])y.push(z);var aa=s.createThreadForFBIDs(y),ba=q.subscribe('update-thread-ids',function(ca,da){for(var ea in da)if(da[ea]==aa){var fa=p.getThreadMetaNow(aa),ga=o.getFBIDFromClientIDNow(aa);if(fa&&!fa.is_canonical&&ga)m.trySend(r,{group_id:v,thread_id:ga});new g('/ajax/groups/chat/log',{group_id:v,message_id:ea}).send();q.unsubscribe(ba);break;}});u.hide();},createThreadForTokens:function(u){var v=l.getID();if(!u.length)return;u=u.filter(function(x){return x!==v;});var w;if(u.length===0){return;}else if(u.length===1){w=j.getThreadIDFromParticipantID(u[0]);h.openThread(w,'ChatTabView');}else{w=k.generateThreadID();u.unshift(v);p.createNewLocalThread(w,u);h.openThread(w,'MultiChatController');}return w;},createThreadForFBIDs:function(u){var v=[];for(var w=0;w<u.length;w++)v.push("fbid:"+u[w]);return s.createThreadForTokens(v);}});var t={};t[r]={mode:m.IMMEDIATE};m.registerEndpoints(t);e.exports=s;},null);
__d("ChatAddFriendsTabSheetRawRenderer",["ChatConfig","ChatTabTypeaheadRenderer","ContextualTypeaheadView","DOM","Event","MercuryDataSourceWrapper","MercuryTypeahead","ChatTabTemplates","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p={render:function(q,r,s,t,u,v){var w=v?n[':fb:mercury:chat:tab-sheet:add-friends-empty-tab'].build():n[':fb:mercury:chat:tab-sheet:add-friends'].build(),x=v?l.chat_typeahead_source:l.chat_add_people_source;x.setShowThreads(v);var y=new m(x,i);y.setViewOption('renderer',h);y.setExcludedParticipantsFromThreadMeta(t);if(!v){var z=g.get('IsWorkUser',false)?o._("Add co-workers to this chat"):o._("Add friends to this chat");y.setPlaceholder(z);}y.build();j.replace(w.getNode('participantsTypeahead'),y.getElement());j.setContent(s,w.getRoot());y.getTokenizer().adjustWidth();var aa=w.getNode('participantsTypeahead').getAttribute('data-labelid'),ba=j.scry(y.getElement(),'input[type="text"]')[0];if(ba)if(aa){ba.setAttribute('aria-labelledby',aa);}else ba.setAttribute('aria-label',o._("To"));y.focus();if(!v){var ca=function(){var da=y.getSelectedParticipantIDs();if(da.length)u(da);r.close(q);};k.listen(w.getNode('doneButton'),'click',ca);y.subscribe('tokens-return',function(){if(y.getTokens().length)ca();});}return y;}};e.exports=p;},null);
__d("ChatAddFriendsTabSheet",["ArbiterMixin","BanzaiLogger","ChatAddFriendsTabSheetRawRenderer","ChatOpenTab","ChatTabActions","MercuryLogMessageType","MercurySourceType","MercuryThreadInfo","MercuryTypeaheadConstants","MultiChatController","Style","MercuryMessageObject","MercuryMessageActions","MercuryThreadActions","MercuryThreads"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r=b('MercuryMessageObject').get(),s=b('MercuryMessageActions').get(),t=b('MercuryThreadActions').get(),u=b('MercuryThreads').get();function v(z,aa,ba,ca){this._threadID=z;this._rootElement=aa;this._sheetView=ba;this._typeahead=null;this._chatTabView=ca;}Object.assign(v.prototype,g,{render:function(){u.getThreadMeta(this._threadID,function(z){var aa=z.is_canonical_user?w:x,ba=u.isNewEmptyLocalThread(this._threadID);this._typeahead=i.render(this,this._sheetView,this._rootElement,z,aa.bind(null,z),ba);this._typeahead.subscribe('tokens-changed',function(){if(ba)y(this,this._typeahead,this._threadID,this._chatTabView);}.bind(this));this._typeahead.subscribe('resize',function(){this._sheetView.resize();}.bind(this));this._typeahead.subscribe('esc-pressed',function(){this.inform('esc-pressed');}.bind(this));}.bind(this));},getParticipants:function(){if(!this._typeahead)return null;return this._typeahead.getSelectedParticipantIDs();},isPermanent:function(){return true;},isSheetWithInput:function(){return true;},getType:function(){return 'add_friends_type';},open:function(){this._sheetView.open(this);},close:function(){this._sheetView.close(this);},getHeight:function(){return q.get(this._rootElement,'height');}});function w(z,aa){var ba=z.participants;p.createThreadForTokens(ba.concat(aa));}function x(z,aa){var ba=z.thread_id;if(n.isEmptyLocalThread(z)){t.addParticipants(ba,aa);}else s.send(r.constructLogMessageObject(m.CHAT_WEB,ba,l.SUBSCRIBE,{added_participants:aa}));j.openThread(ba,'ChatAddFriendsTabSheet');}function y(z,aa,ba,ca){var da=aa.getTypeahead().getData(),ea=aa.getTokens(),fa=aa.getTypeahead().getCore();fa.getElement().removeAttribute('disabled');da.setShowThreads(ea.length===0);var ga=ea.length==1&&ea[0].getInfo().render_type===o.THREAD_TYPE;if(ga){var ha=ea[0].getInfo().mercury_thread;if(ha){var ia=ca._sharePreview.getShareData();if(ia)var ja=function(ka){return ka.loadShareFromParams(ia.share_type,ia.share_params);};j.openThread(ha.thread_fbid,'openGroupChat','',ja);}h.log('MercuryQueryResultsLoggerConfig',{event:'chat_tab_group_thread_click'});k.closeTab(ba,'open_group_chat');}else{if(ea.length==1&&ea[0].getInfo().render_type===o.PAGE_TYPE)fa.getElement().setAttribute('disabled','disabled');h.log('MercuryQueryResultsLoggerConfig',{event:'chat_tab_tokens_changed',chat_tab_tokens:ea.map(function(ka){return ka.info.uid;})});z.inform('chat/tokens-changed',{token_count:ea.length});}}e.exports=v;},null);
__d("ChatEmployeeAwaySheet",["ArbiterMixin","DOM","mixin","ChatTabTemplates"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=i(g);for(var l in k)if(k.hasOwnProperty(l))n[l]=k[l];var m=k===null?null:k.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=k;function n(o,p,q){"use strict";this.$ChatEmployeeAwaySheet0=o;this.$ChatEmployeeAwaySheet1=p;this.$ChatEmployeeAwaySheet2=q;}n.prototype.render=function(){"use strict";var o=j[':fb:mercury:employee-away-sheet'].build();h.setContent(this.$ChatEmployeeAwaySheet1,o.getRoot());};n.prototype.isPermanent=function(){"use strict";return true;};n.prototype.getType=function(){"use strict";return 'employee-away';};n.prototype.open=function(){"use strict";this.$ChatEmployeeAwaySheet2.open(this);};n.prototype.close=function(){"use strict";this.$ChatEmployeeAwaySheet2.close(this);};e.exports=n;},null);
__d("ChatNameConversationTabSheetRawRenderer",["DOM","Event","Input","Keys","ChatTabTemplates","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();'use strict';var m={render:function(n,o,p,q,r,s){var t=k[':fb:mercury:chat:tab-sheet:name-conversation'].build(),u=t.getNode('nameInput'),v=t.getNode('doneButton'),w=l._("Done"),x=l._("Hide"),y=q.name;if(y){i.setValue(u,y);}else g.setContent(v,x);var z=function(){var aa=i.getValue(u);if(aa)r(aa);s();o.close(n);};h.listen(u,'input',function(){g.setContent(v,i.getValue(u).length===0?x:w);});h.listen(v,'click',z);h.listen(u,'keyup',function(aa){if(aa.keyCode===j.RETURN){z();return false;}});g.setContent(p,t.getRoot());!n.isAutomatic()&&u.focus();}};e.exports=m;},null);
__d("ChatNameConversationTabSheet",["AsyncRequest","ChatNameConversationTabSheetRawRenderer","MercuryAPIArgsSource","MercuryLogMessageType","MercurySourceType","MercuryMessageObject","MercuryMessageActions","MercuryThreadIDMap","MercuryThreads"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=b('MercuryMessageObject').get(),m=b('MercuryMessageActions').get(),n=b('MercuryThreadIDMap').get(),o=b('MercuryThreads').get(),p='/ajax/chat/multichat/name_conversation/dismiss.php',q={};function r(s,t,u){"use strict";this.$ChatNameConversationTabSheet0=s;this.$ChatNameConversationTabSheet1=t;this.$ChatNameConversationTabSheet2=u;this.$ChatNameConversationTabSheet3=false;}r.prototype.render=function(){"use strict";o.getThreadMeta(this.$ChatNameConversationTabSheet0,function(s){h.render(this,this.$ChatNameConversationTabSheet2,this.$ChatNameConversationTabSheet1,s,this.$ChatNameConversationTabSheet4.bind(null,s),this.$ChatNameConversationTabSheet5.bind(this,s));this.$ChatNameConversationTabSheet2.resize();}.bind(this));};r.prototype.isPermanent=function(){"use strict";return true;};r.prototype.isSheetWithInput=function(){"use strict";return true;};r.prototype.getType=function(){"use strict";return 'name_conversation_type';};r.prototype.open=function(s){"use strict";this.$ChatNameConversationTabSheet3=s;if(!(this.$ChatNameConversationTabSheet3&&this.$ChatNameConversationTabSheet6()))this.$ChatNameConversationTabSheet2.open(this);};r.prototype.close=function(){"use strict";this.$ChatNameConversationTabSheet2.close(this);};r.prototype.isAutomatic=function(){"use strict";return this.$ChatNameConversationTabSheet3;};r.prototype.$ChatNameConversationTabSheet6=function(){"use strict";return !!q[this.$ChatNameConversationTabSheet0];};r.prototype.$ChatNameConversationTabSheet7=function(){"use strict";q[this.$ChatNameConversationTabSheet0]=true;};r.prototype.$ChatNameConversationTabSheet5=function(s){"use strict";if(!s.name_conversation_sheet_dismissed||!this.$ChatNameConversationTabSheet6()){this.$ChatNameConversationTabSheet7();n.getFBIDFromClientID(s.thread_id,function(t){new g(p).setData({thread_fbid:t}).send();});}};r.prototype.$ChatNameConversationTabSheet4=function(s,t){"use strict";var u=s.name;if((t||u)&&(t!=u))m.send(l.constructLogMessageObject(k.CHAT_WEB,s.thread_id,j.THREAD_NAME,{name:t}),null,i.CHAT);};e.exports=r;},null);
__d("ChatNewMessagesTabSheet",["Event","ArbiterMixin","DOM","ChatTabTemplates","fbt"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m,n,o){this._threadID=m;this._rootElement=n;this._sheetView=o;}Object.assign(l.prototype,h,{render:function(){var m=j[':fb:mercury:chat:tab-sheet:clickable-message-icon-sheet'].build();i.setContent(m.getNode('text'),k._("Scroll down to see new messages."));i.setContent(this._rootElement,m.getRoot());g.listen(m.getRoot(),'click',function(){this.inform('clicked',this._threadID);}.bind(this));},isPermanent:function(){return true;},isSheetWithInput:function(){return true;},getType:function(){return 'new_messages_type';},open:function(){this._sheetView.open(this);},close:function(){this._sheetView.close(this);}});e.exports=l;},null);
__d("ChatNoRecipientsTabSheet",["DOM","ChatTabTemplates","fbt"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(k,l,m){this._threadID=k;this._rootElement=l;this._sheetView=m;}Object.assign(j.prototype,{render:function(){var k=h[':fb:mercury:chat:tab-sheet:message-icon-sheet'].build();g.setContent(k.getNode('text'),i._("Everyone has left the conversation."));g.setContent(this._rootElement,k.getRoot());},isPermanent:function(){return true;},getType:function(){return 'no_recipients_type';},open:function(){this._sheetView.open(this);},close:function(){this._sheetView.close(this);}});e.exports=j;},null);
__d("ChatOfflineTabSheet",["ChatPrivacyActionController","ChatVisibility","CSS","DOM","JSXDOM","Event","JSLogger","MercuryIDs","MercuryParticipants","ChatTabTemplates","WorkModeConfig","cx","emptyFunction","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b.__markCompiled&&b.__markCompiled();function u(v,w,x){this._rootElement=w;this._sheetView=x;this._logger=m.create('blackbird');this._canonicalUser=n.getUserIDFromThreadID(v);if(this._canonicalUser)this._privacyActionController=new g(this._canonicalUser,s);}Object.assign(u.prototype,{render:function(){if(!this._canonicalUser){this._logger.error('offline_sheet_open_with_non_friend');return;}var v=p[':fb:mercury:chat:tab-sheet:message-icon-sheet'].build(),w='fbid:'+this._canonicalUser;o.get(w,function(x){var y='fbChatGoOnlineLink',z=k.a({href:"#",className:y},t._("turn on chat")),aa;if(q.is_work_user){aa=t._("To chat with {name} and other co-workers, {link}.",[t.param("name",x.short_name),t.param("link",z)]);}else aa=t._("To chat with {name} and other friends, {link}.",[t.param("name",x.short_name),t.param("link",z)]);j.setContent(v.getNode('text'),aa);i.addClass(v.getRoot(),"_1sk1");j.setContent(this._rootElement,v.getRoot());l.listen(this._rootElement,'click',function(event){if(i.hasClass(event.getTarget(),y)){if(h.isOnline())this._logger.error('tab_sheet_already_online');this._privacyActionController.togglePrivacy();this._logger.log('tab_sheet_go_online',{tab_id:this._canonicalUser});return false;}}.bind(this));this._sheetView.resize();}.bind(this));},isPermanent:function(){return true;},getType:function(){return 'offline_type';},open:function(){this._sheetView.open(this);},close:function(){this._sheetView.close(this);},destroy:function(){this._privacyActionController&&this._privacyActionController.destroy();}});e.exports=u;},null);
__d("ChatReadOnlyTabSheet",["React","MercuryReadOnlyReason","cx","MercuryThreads"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=b('MercuryThreads').get();function k(l,m,n){"use strict";this.$ChatReadOnlyTabSheet0=l;this.$ChatReadOnlyTabSheet1=m;this.$ChatReadOnlyTabSheet2=n;}k.prototype.render=function(){"use strict";var l=h.getReason(j.getThreadMetaNow(this.$ChatReadOnlyTabSheet0));g.render(g.createElement("div",{className:"_87-"},l),this.$ChatReadOnlyTabSheet1);};k.prototype.isPermanent=function(){"use strict";return false;};k.prototype.getType=function(){"use strict";return 'chat-thread-is-read-only';};k.prototype.open=function(){"use strict";this.$ChatReadOnlyTabSheet2.open(this);};k.prototype.close=function(){"use strict";this.$ChatReadOnlyTabSheet2.open(this);};e.exports=k;},null);
__d("ChatThreadIsMutedTabSheet",["Event","ArbiterMixin","DOM","ChatTabTemplates","fbt"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m,n,o){this._threadID=m;this._rootElement=n;this._sheetView=o;}Object.assign(l.prototype,h,{render:function(){var m=j[':fb:mercury:chat:tab-sheet:message-mute-sheet'].build();i.setContent(m.getNode('text'),k._("This conversation is muted. Chat tabs will not pop up for it and push notifications are off."));i.setContent(this._rootElement,m.getRoot());g.listen(m.getNode('unmuteButton'),'click',function(){this.inform('clicked',this._threadID);}.bind(this));},isPermanent:function(){return false;},getType:function(){return 'chat-thread-is-muted';},open:function(){this._sheetView.open(this);},close:function(){this._sheetView.close(this);}});e.exports=l;},null);
__d("ChatUploadWarningTabSheet",["DOM","ChatTabTemplates","fbt"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(k,l,m){this._threadID=k;this._rootElement=l;this._sheetView=m;}Object.assign(j.prototype,{render:function(){var k=h[':fb:mercury:chat:tab-sheet:message-icon-sheet'].build();g.setContent(k.getNode('text'),i._("Please wait until the upload is complete before you send your message."));g.setContent(this._rootElement,k.getRoot());},isPermanent:function(){return false;},getType:function(){return 'upload_warning_type';},open:function(){this._sheetView.open(this);},close:function(){this._sheetView.close(this);}});e.exports=j;},null);
__d("ChatUserBlockedTabSheet",["CSS","ChatPrivacyActionController","DOM","Event","GenderConst","JSLogger","MercuryIDs","MercuryParticipants","ChatTabTemplates","cx","emptyFunction","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();function s(t,u,v){this._rootElement=u;this._sheetView=v;this._logger=l.create('blackbird');this._canonicalUser=m.getUserIDFromThreadID(t);if(this._canonicalUser)this._privacyActionController=new h(this._canonicalUser,q);}Object.assign(s.prototype,{render:function(){if(!this._canonicalUser){this._logger.error('user_blocked_sheet_open_with_non_friend');return;}var t=o[':fb:mercury:chat:tab-sheet:user-blocked'].build(),u='fbid:'+this._canonicalUser;n.get(u,function(v){var w=null;switch(v.gender){case k.FEMALE_SINGULAR:case k.FEMALE_SINGULAR_GUESS:w=r._("You turned off chat for {name} but you can still send her a message.",[r.param("name",v.short_name)]);break;case k.MALE_SINGULAR:case k.MALE_SINGULAR_GUESS:w=r._("You turned off chat for {name} but you can still send him a message.",[r.param("name",v.short_name)]);break;default:w=r._("You turned off chat for {name} but you can still send them a message.",[r.param("name",v.short_name)]);}i.setContent(t.getNode('text'),w+' ');var x=r._("Turn on chat for {name}?",[r.param("name",v.short_name)]);i.setContent(t.getNode('actionLink'),x);g.addClass(t.getRoot(),"_1sk0");i.setContent(this._rootElement,t.getRoot());j.listen(t.getNode('actionLink'),'click',this._privacyActionController.togglePrivacy.bind(this._privacyActionController));this._sheetView.resize();}.bind(this));},isPermanent:function(){return true;},getType:function(){return 'user_blocked_type';},open:function(){this._sheetView.open(this);},close:function(){this._sheetView.close(this);},destroy:function(){this._privacyActionController&&this._privacyActionController.destroy();}});e.exports=s;},null);