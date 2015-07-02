/*!CK:4286663723!*//*1435548581,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["2vymD"]); }

__d("FeedBlacklistButton",["Arbiter","Event"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={BLACKLIST:'feed_blacklist',UNBLACKLIST:'feed_unblacklist',init:function(j,k,l,m){h.listen(k,'click',function(){var n={profile_id:m};g.inform(i.BLACKLIST,n);g.inform('UnfollowingUser',n);});h.listen(l,'click',function(){var n={profile_id:m};g.inform(i.UNBLACKLIST,n);g.inform('FollowingUser',n);});g.subscribe(i.BLACKLIST,function(n,o){if(m==o.profile_id)j.swap();});g.subscribe(i.UNBLACKLIST,function(n,o){if(m==o.profile_id)j.unswap();});}};e.exports=a.FeedBlacklistButton||i;},null);
__d("XPubcontentChainedSuggestionsController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/chained_suggestions\/",{pageid:{type:"String"},profileid:{type:"Int"},eh:{type:"Bool",defaultValue:false},friendid:{type:"Int"}});},null);
__d("SubscribeButton",["Arbiter","AsyncRequest","Button","CSS","Event","Tooltip","XPubcontentChainedSuggestionsController"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={SUBSCRIBED:'FollowingUser',UNSUBSCRIBED:'UnfollowingUser',RECAP:'RecapUser',_enable:function(o){i.setEnabled(o,true);l.remove(o);},_disable:function(o,p){i.setEnabled(o,false);if(p)l.set(o,p);},init:function(o,p,q,r,s,t,u,v,w){v=(typeof v!=='undefined')?v:false;var x=(typeof w!=='undefined');if(x&&!u&&!v)n._disable(p,w);k.listen(p,'click',function(){g.inform(n.SUBSCRIBED,{profile_id:r,suppress:true});});g.subscribe(n.SUBSCRIBED,function(y,z){if(r==z.profile_id){if(!s)q.suppressNextMouseEnter&&q.suppressNextMouseEnter();if(x){if(typeof z.connected!=='undefined')u=z.connected;if(u||v)n._enable(p);}o.swap();if(t===true&&z.chaining!==false){var aa=(m.getURIBuilder()).setInt('profileid',r).getURI();new h().setURI(aa).send();}}});g.subscribe(n.UNSUBSCRIBED,function(y,z){if(r==z.profile_id){o.unswap();q.hideFlyout&&q.hideFlyout();if(x){if(typeof z.connected!=='undefined')u=z.connected;if(!u&&!v)n._disable(p,w);}g.inform('SubMenu/Reset');}});},initSubscribe:function(o,p){k.listen(o,'click',function(){setTimeout(g.inform.bind(g,n.SUBSCRIBED,{profile_id:p}),0);});},initUnsubscribe:function(o,p){k.listen(o,'click',function(){setTimeout(g.inform.bind(g,n.UNSUBSCRIBED,{profile_id:p}),0);});},initSubscribeMenuItem:function(o,p,q){j.hide(p);this._initMenuItem(o,p,q);},initUnsubscribeMenuItem:function(o,p,q){j.hide(o);this._initMenuItem(o,p,q);},_initMenuItem:function(o,p,q){this.initSubscribe(o,q);this.initUnsubscribe(p,q);g.subscribe(n.SUBSCRIBED,function(r,s){j.hide(o);j.show(p);});g.subscribe(n.UNSUBSCRIBED,function(r,s){j.hide(p);j.show(o);});}};e.exports=n;},null);
__d("BookmarkFeedSorter",["Run"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h,i={init:function(j){h=j;g.onLeave(function(){h=null;});},setChecked:function(j){if(h)h.setValue(j);}};e.exports=i;},null);
__d("LitestandStream",["Arbiter","DOMQuery","LitestandMessages","LitestandStoryInsertionStatus","ViewportBounds","csx","ge","getElementPosition","getOrCreateDOMID"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p,q,r,s={init:function(t,u,v){p=u;q=v;r=t;g.subscribe(i.STORIES_INSERTED,function(w,x){if(!x||!x.substream_id||!p)return;var y=h.scry(m(x.substream_id),s.getStoriesSelector());y.forEach(function(z){var aa=h.scry(z,"._5pbw"),ba=h.scry(z,"._5pcp")[0],ca=h.scry(z,"._5pbx")[0];if(aa[0]&&ba&&ca){var da='';for(var ea=0;ea<aa.length;ea++)da+=o(aa[ea])+' ';da.trim();z.setAttribute('aria-labelledby',da+' '+o(ba)+' '+o(ca));}});});},getStoriesSelector:function(){return "._5jmm";},getStreamRoot:function(){return r;},getSectionID:function(){return q;},canInsertNewerStories:function(){if(k.getTop()>n(s.getStreamRoot()).y)return false;return j.canInsert();},getFeedStreamID:function(){return parseInt(r.id.split('feed_stream_')[1],16)%1e+08;}};e.exports=s;},null);
__d("DialogHideOnSuccess",["CSS","cx"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j){"use strict";this._layer=j;}i.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe('success',this._handle.bind(this));};i.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;};i.prototype._handle=function(j,event){"use strict";if(g.hasClass(event.getTarget(),"_s"))this._layer.hide();};Object.assign(i.prototype,{_subscription:null});e.exports=i;},null);
__d("OnVisible",["Arbiter","DOM","Event","Parent","Run","Vector","ViewportBounds","coalesce","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=[],q,r=0,s=[],t,u,v,w,x;function y(){p.forEach(function(ea){ea.remove();});if(u){u.remove();t.remove();q.unsubscribe();u=t=q=null;}r=0;p.length=0;}function z(){if(!p.length){y();return;}s.length=0;v=l.getScrollPosition().y;w=l.getViewportDimensions().y;x=m.getTop();for(var ea=0;ea<p.length;++ea){var fa=p[ea];if(isNaN(fa.elementHeight))s.push(ea);fa.elementHeight=l.getElementDimensions(fa.element).y;fa.elementPos=l.getElementPosition(fa.element);fa.hidden=j.byClass(fa.element,'hidden_elem');if(fa.scrollArea){fa.scrollAreaHeight=l.getElementDimensions(fa.scrollArea).y;fa.scrollAreaY=l.getElementPosition(fa.scrollArea).y;}}r=ea;}function aa(){for(var ea=Math.min(p.length,r)-1;ea>=0;--ea){var fa=p[ea];if(!fa.elementPos||fa.removed){p.splice(ea,1);continue;}if(fa.hidden)continue;var ga=v+w+fa.buffer,ha=false;if(ga>fa.elementPos.y){var ia=v+x-fa.buffer,ja=v+x+w+fa.buffer,ka=fa.elementPos.y+fa.elementHeight,la=!fa.strict||(ia<fa.elementPos.y&&ja>ka);ha=la;if(ha&&fa.scrollArea){var ma=fa.scrollAreaY+fa.scrollAreaHeight+fa.buffer;ha=(fa.elementPos.y>fa.scrollAreaY-fa.buffer)&&(fa.elementPos.y<ma);}}if(fa.inverse?!ha:ha){fa.remove();fa.handler(s.indexOf(ea)!==-1);}}}function ba(){ca();if(p.length)return;u=i.listen(window,'scroll',ca);t=i.listen(window,'resize',ca);q=g.subscribe('dom-scroll',ca);}function ca(){o(z,aa,'OnVisible/positionCheck');}function da(ea,fa,ga,ha,ia,ja){"use strict";this.element=ea;this.handler=fa;this.strict=ga;this.buffer=n(ha,300);this.inverse=n(ia,false);this.scrollArea=ja||null;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible0();if(p.length===0)k.onLeave(y);ba();p.push(this);}da.prototype.remove=function(){"use strict";if(this.removed)return;this.removed=true;if(this.scrollAreaListener)this.scrollAreaListener.remove();};da.prototype.reset=function(){"use strict";this.elementHeight=null;this.removed=false;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible0();p.indexOf(this)===-1&&p.push(this);ba();};da.prototype.setBuffer=function(ea){"use strict";this.buffer=ea;ca();};da.prototype.checkBuffer=function(){"use strict";ca();};da.prototype.getElement=function(){"use strict";return this.element;};da.prototype.$OnVisible0=function(){"use strict";return i.listen(h.find(this.scrollArea,'.uiScrollableAreaWrap'),'scroll',this.checkBuffer);};Object.assign(da,{checkBuffer:ca});e.exports=da;},null);
__d("Tour",["Arbiter","LayerDestroyOnHide","LayerHideOnEscape","NavigationMessage","PageEvents"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(){"use strict";if(l._instance)l._instance.setTourComplete();l._instance=this;}l.prototype.init=function(){"use strict";this._pageLeaveToken=g.subscribe(k.AJAXPIPE_ONUNLOAD,this.handleLeavePage.bind(this));this._navigationBeginToken=g.subscribe(j.NAVIGATION_BEGIN,this.handleTransition.bind(this));this.steps={};return this;};l.prototype.registerStep=function(m,n){"use strict";m.disableBehavior(h);m.disableBehavior(i);this.steps[n]=m;m.subscribe('show',function(){m.inform('tour-dialog-show',m);});if(!this.getTourStarted())this.setTourStart();};l.prototype._unsubscribeSubscriptions=function(){"use strict";this._navigationBeginToken.unsubscribe();this._pageLeaveToken.unsubscribe();};l.prototype.handleLeavePage=function(){"use strict";this._unsubscribeSubscriptions();};l.prototype.handleTransition=function(){"use strict";this._unsubscribeSubscriptions();};l.prototype.handleTourStart=function(){"use strict";};l.prototype.handleTourStop=function(){"use strict";};l.prototype.handleTourComplete=function(){"use strict";};l.prototype.showStep=function(m){"use strict";var n=this.steps[m];if(!(this.openDialog==n))this.hideOpenDialog();if(!n)return;this.openDialog=n;n.show();};l.prototype.hideOpenDialog=function(){"use strict";if(this.openDialog){this.openDialog.hide();this.openDialog=null;}};l.prototype.getTourStarted=function(){"use strict";return this.tourStarted;};l.prototype.setTourStart=function(){"use strict";this.tourStarted=true;this.handleTourStart();};l.prototype.setTourStop=function(){"use strict";this.tourStarted=false;this.hideOpenDialog();this.handleTourStop();};l.prototype.setTourComplete=function(){"use strict";if(this.tourComplete)return;this.setTourStop();this.tourComplete=true;this.handleTourComplete();};l.prototype.hideStep=function(m){"use strict";var n=this.steps[m];n&&n.hide();};l.getInstance=function(){"use strict";return l._instance||(l._instance=new l());};Object.assign(l.prototype,{tourStarted:false,tourComplete:false,_navigationBeginToken:null,_pageLeaveToken:null,steps:{},openDialog:null});e.exports=l;},null);
__d("PageFanning",["Animation","AsyncRequest","CSS","DOM","Parent","URI","ActorURI","$","collectDataAttributes","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q={setFanStatus:function(s,t,u,v,w,x,y){var z={ft:{}};if(s)z={ft:o(s,['ft']).ft};w=w||function(da){var ea=da.getPayload();if(!ea||!s)return;if(ea.reload){q.reloadOnFanStatusChanged();}else r(s,ea);};var aa={fbpage_id:t,add:u,reload:v};if(y!=null)p(aa,y);p(aa,z);var ba='/ajax/pages/fan_status.php';if(y!=null&&y.actor_id!=null)ba=m.create(ba,y.actor_id);var ca=new h().setURI(ba).setData(aa).setNectarModuleDataSafe(s).setHandler(w);if(x)ca.setErrorHandler(x);ca.send();return false;},reloadOnFanStatusChanged:function(){var s=l.getRequestURI();window.location.href=s;},toggleLikeOnFanStatusChanged:function(s,t){var u=n('liked_pages_like_action_'+s),v=n('liked_pages_undo_action_'+s);i.conditionClass(u,'hidden_elem',t);i.conditionClass(v,'hidden_elem',!t);}};function r(s,t){var u=t.feedback;if(!u)return;if(k.byClass(s,'fbTimelineEscapeSectionItem'))s=k.byClass(s,'fan_status_inactive')||s;var v=j.create('span',{className:'fan_status_inactive'},u);s.parentNode.replaceChild(v,s);var w=function(){if(t.can_repeat_action)v.parentNode.replaceChild(s,v);};new g(v).duration(3000).checkpoint().to('backgroundColor','#FFFFFF').duration(1000).ondone(w).go();}e.exports=q;},null);
__d("XPagesLikeCountController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pages\/x\/updateLikeCountDomString\/",{page_id:{type:"Int",required:true},like_id:{type:"String",required:true}});},null);
__d("PageLikeButton",["Arbiter","AsyncRequest","AsyncResponse","Event","FeedBlacklistButton","PageFanning","SubscribeButton","Tour","URI","XPagesLikeCountController"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q={LIKED:'liked',UNLIKED:'unliked',LIKED_SUCCESS:'liked_success',SPM_CALLOUT:'spm_callout',init:function(u,v,w,x,y,z,aa,ba,ca,da,ea,fa){g.subscribe(q.LIKED,function(ga,ha){if(t(x,fa,ha)){u.swap();if(!ca)w.suppressNextMouseEnter&&w.suppressNextMouseEnter();}});g.subscribe(q.UNLIKED,function(ga,ha){if(t(x,fa,ha)){u.unswap();w.hideFlyout&&w.hideFlyout();}});if(ea)g.subscribe(q.SPM_CALLOUT,function(ga,ha){if(t(x,fa,ha)){ea.show();g._releaseAllEvents(q.SPM_CALLOUT);}});j.listen(v,'click',function(event){var ga=u.getCurrentButton();if(fa&&fa.actor_id!==null){var ha={actor_id:fa.actor_id};s(x,y,z,aa,ga,event,ha);}else s(x,y,z,aa,ga,event);}.bind(this));},initCallout:function(u,v){var w=document.getElementById('pageActionLikeCalloutButton');j.listen(w,'click',s.bind(null,u,v,null,null,null));},initUnlike:function(u,v,w,x){var y=x?x.actor_id:null;j.listen(u,'click',function(event){r(event.getTarget(),v,false,function(z){g.inform(q.LIKED,{profile_id:v,actor_id:y});i.defaultErrorHandler(z);},w,null,null,{actor_id:y});q.informUnlike(v,y);});},informLike:function(u,v,w,x){var y=x?x.actor_id:y,z={profile_id:u,actor_id:y,target:v,origin:w};g.inform(q.LIKED,z);z.connected=true;g.inform(m.SUBSCRIBED,z);g.inform(k.UNBLACKLIST,z);},informLikeSuccess:function(u){var v={profile_id:u};g.inform(q.LIKED_SUCCESS,v);g.inform(q.SPM_CALLOUT,v);},informUnlike:function(u,v){var w={profile_id:u,actor_id:v};setTimeout(g.inform.bind(g,q.UNLIKED,w),0);w.connected=false;setTimeout(g.inform.bind(g,m.UNSUBSCRIBED,w),0);g.inform(k.BLACKLIST,w);},updateLikeCount:function(u,v){g.subscribe(q.LIKED_SUCCESS,function(w,x){var y=x.profile_id;if(v==y){var z=p.getURIBuilder().setInt('page_id',v).setString('like_id',u).getURI();new h().setURI(z).send();}});}};function r(u,v,w,x,y,z,aa,ba){var ca=ba?ba.actor_id:null;n.getInstance().hideStep('low_page_likes');l.setFanStatus(u,v,w,false,function(){q.informLikeSuccess(v);},x,{fan_origin:y,fan_source:z,cat:aa,actor_id:ca});}function s(u,v,w,x,y,event,z){var aa=z?z.actor_id:null;r(event.getTarget(),u,true,function(ba){g.inform(q.UNLIKED,{profile_id:u,actor_id:aa});i.defaultErrorHandler(ba);},v,w,x,z);q.informLike(u,y,v,z);}function t(u,v,w){var x=v?v.actor_id:null;if(u===w.profile_id){if(x===null)return true;if(w.actor_id!==null&&x===w.actor_id)return true;}return false;}e.exports=q;a.PageLikeButton=q;},null);
__d("SwapButton",["DOM","Event","Focus"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(l,m,n){g.insertAfter(m,l);g.remove(m);n&&i.setWithoutOutline(l);}function k(l,m,n){"use strict";this._swapperButton=l;this._swappeeButton=m;h.listen(l,'click',j.bind(null,m,l,true));if(n)h.listen(m,'click',j.bind(null,l,m,true));}k.prototype.swap=function(l){"use strict";if(this._swapperButton.parentNode)j(this._swappeeButton,this._swapperButton,l);};k.prototype.unswap=function(l){"use strict";if(!this._swapperButton.parentNode)j(this._swapperButton,this._swappeeButton,l);};k.prototype.toggle=function(l){"use strict";if(this._swapperButton.parentNode){this.swap(l);}else this.unswap(l);};k.prototype.getCurrentButton=function(){"use strict";return this._swapperButton.parentNode?this._swapperButton:this._swappeeButton;};Object.assign(k.prototype,{_swapperButton:null,_swappeeButton:null});e.exports=k;},null);
__d("HoverButton",["AsyncRequest","CSS","DOM","URI","cx"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m,n,o,p){"use strict";this._button=m;this._flyout=n;this._flyoutAjaxify=p;this._flyoutContent=o;n.subscribe('show',this._onShow.bind(this));n.subscribe('hide',this._onHide.bind(this));}l.prototype.showFlyoutBriefly=function(){"use strict";this.showFlyout();this._flyout.hideFlyoutDelayed(5000);};l.prototype.showFlyout=function(){"use strict";this._flyout.showFlyout(this._button,true);this._flyout.inform('show',this._button);};l.prototype.hideFlyout=function(){"use strict";this._flyout.hideFlyout(true);this._flyout.inform('hide',this._button);};l.prototype.enableButton=function(){"use strict";this._flyout.initNode(this._button);};l.prototype.disableButton=function(){"use strict";this.hideFlyout();this._flyout.deactivateNode(this._button);};l.prototype._onShow=function(m,n){"use strict";h.addClass(n,"_52nd");if(h.hasClass(n,'uiButton')||h.hasClass(n,"_42fu"))h.addClass(n,'selected');if(this._flyoutAjaxify){h.addClass(this._flyoutContent,'async_saving');new g().setURI(new j(this._flyoutAjaxify)).setHandler(function(o){h.removeClass(this._flyoutContent,'async_saving');i.setContent(this._flyoutContent,o.payload);}.bind(this)).send();this._flyoutAjaxify=null;}};l.prototype._onHide=function(m,n){"use strict";h.removeClass(n,"_52nd");if(h.hasClass(n,'uiButton')||h.hasClass(n,"_42fu"))h.removeClass(n,'selected');};l.prototype.destroy=function(){"use strict";this.hideFlyout();this._flyout.destroy();};l.prototype.suppressNextMouseEnter=function(){"use strict";this._flyout.setActiveNode(this._button);};Object.assign(l.prototype,{_button:null,_flyout:null,_flyoutAjaxify:null,_flyoutContent:null});e.exports=l;},null);
__d("HoverFlyout",["Arbiter","ArbiterMixin","DataStore","Event","Keys","arrayContains","mixin","removeFromArray","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=m(h);for(var q in p)if(p.hasOwnProperty(q))s[q]=p[q];var r=p===null?null:p.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=p;function s(t,u,v,w){"use strict";if(t){this._showDelay=v;this._hideDelay=w;this.init(t);if(u)this.initNode(u);}g.subscribe('SwapButtonDEPRECATED/focusOnJoinButton',o(this.hideFlyout,this),g.SUBSCRIBE_ALL);}s.prototype.init=function(t){"use strict";this._flyout=t;this._showDelay=this._showDelay||0;this._hideDelay=this._hideDelay||100;this._showTimeout=null;this._hideTimeout=null;this._flyoutSubscriptions=[this._flyout.subscribe('mouseenter',this._onFlyoutMouseEnter.bind(this)),this._flyout.subscribe('mouseleave',o(this.hideFlyout,this))];this._nodes=[];this._dataStoreUnique='HoverFlyout_'+Date.now()+'_listeners';return this;};s.prototype.initNode=function(t){"use strict";if(l(this._nodes,t))return this;this._nodes.push(t);i.set(t,this._dataStoreUnique,[j.listen(t,'mouseenter',this._onNodeMouseEnter.bind(this,t)),j.listen(t,'mouseleave',o(this.hideFlyout,this)),j.listen(t,'click',this._onNodeMouseEnter.bind(this,t)),j.listen(t,'keydown',this._onNodeKeyEscape.bind(this))]);return this;};s.prototype.deactivateNode=function(t){"use strict";var u=i.get(t,this._dataStoreUnique);if(u)while(u.length)u.pop().remove();n(this._nodes,t);};s.prototype.setShowDelay=function(t){"use strict";this._showDelay=t;return this;};s.prototype.setHideDelay=function(t){"use strict";this._hideDelay=t;return this;};s.prototype.showFlyout=function(t,u){"use strict";this.setActiveNode(t);if(u){this._flyout.setContext(t).show();this.inform('show',t);}else this._showTimeout=setTimeout(this.showFlyout.bind(this,t,true),this._showDelay);return this;};s.prototype.hideFlyout=function(t){"use strict";clearTimeout(this._showTimeout);if(t){this._flyout.hide();this._activeNode&&this.inform('hide',this._activeNode);this._activeNode=null;}else this._hideTimeout=setTimeout(this.hideFlyout.bind(this,true),this._hideDelay);};s.prototype.hideFlyoutDelayed=function(t){"use strict";clearTimeout(this._showTimeout);clearTimeout(this._hideTimeout);this._hideTimeout=setTimeout(this.hideFlyout.bind(this,true),t);};s.prototype.getActiveNode=function(){"use strict";return this._activeNode;};s.prototype.setActiveNode=function(t){"use strict";clearTimeout(this._hideTimeout);if(this._activeNode&&this._activeNode!==t)this.hideFlyout(true);this._activeNode=t;return this;};s.prototype.clearNodes=function(){"use strict";for(var t=this._nodes.length;t>0;t--)this.deactivateNode(this._nodes[t-1]);};s.prototype.destroy=function(){"use strict";while(this._flyoutSubscriptions.length)this._flyout.unsubscribe(this._flyoutSubscriptions.pop());this.clearNodes();};s.prototype._onNodeMouseEnter=function(t){"use strict";if(this._activeNode===t){clearTimeout(this._hideTimeout);}else this.showFlyout(t);};s.prototype._onFlyoutMouseEnter=function(){"use strict";clearTimeout(this._hideTimeout);};s.prototype._onNodeKeyEscape=function(event){"use strict";if(j.getKeyCode(event)===k.ESC){this._activeNode&&this.inform('hide',this._activeNode);this._activeNode=null;}};e.exports=a.HoverFlyout||s;},null);