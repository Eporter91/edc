/*!CK:987960869!*//*1434939298,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ZTQUy"]); }

__d("ComposerVersion",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={MBASIC_LEGACY:"legacy",MBASIC_AMBER:"amber",MBASIC_LEGACY_SHARE:"legacy_share",MBASIC_AMBER_SHARE:"amber_share",WWW_LEGACY:"www_legacy",WWW_REACT:"www_react",WWW_REACT_SHARE:"www_react_share",WWW_REACT_SHARER:"www_react_sharer"};},null);
__d("LitestandLinkHider",["DataStore","DOMQuery","Event","Parent","UserAgent_DEPRECATED"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(event){var n=event.getTarget(),o=j.byTag(n,'a');if(!o)return;if(event.type==='mouseover'){g.set(o,'href',o.href);o.removeAttribute('href');}else{o.href=g.get(o,'href')||o.href;if(event.type==='mouseout')g.remove(o,'href');}}var m={hideLinks:function(n){if(k.chrome()||9<=k.ie()||k.opera())i.listen(n,{mouseover:l,mouseout:l,mousedown:l});},removeAllHrefs:function(n){var o=h.scry(n,'a');o.forEach(function(p){p.removeAttribute('href');p.removeAttribute('ajaxify');p.removeAttribute('rel');p.setAttribute('tabindex',0);});}};e.exports=m;},null);
__d("HideInlineHelp",["DynamicIconSelector","SelectorDeprecated"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=[],j={registerMenu:function(k,l,m){i[k]=l.setValue.bind(l,m);},registerLegacyMenu:function(k,l,m){i[k]=function(){h.setSelected(l,m);g.swapIcon(l);};},registerAsyncPopoverMenu:function(k,l,m){i[k]=function(){var n=l.getMenu();n.setValue(m);};},triggerUndo:function(k){i[k]();}};e.exports=j;},null);
__d("XPagesShareActorListController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/share\/actors\/",{target_id:{type:"Int",required:true}});},null);
__d("ShareActorSelector.react",["ActorSelector.react","AsyncRequest","React","XPagesShareActorListController"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=i,l=k.PropTypes,m=110,n=i.createClass({displayName:"ShareActorSelector",propTypes:{onChange:l.func.isRequired,targetID:l.string.isRequired},getInitialState:function(){return {actorIDs:[],loading:true,selectedActorID:null};},componentWillMount:function(){this._fetchActorIDs();},render:function(){if(!this.state.actorIDs||!this.state.selectedActorID)return i.createElement("div",null);return (i.createElement(g,{actorIDs:this.state.actorIDs,coverEnabled:false,loading:this.state.loading,onChange:this._onChange,ref:"selector",selectedActorID:this.state.selectedActorID,showName:true,showNameMaxWidth:m,suppressed:this.state.actorIDs.length===1}));},componentDidUpdate:function(o){if(this.props.targetID!==o.targetID)this._fetchActorIDs();},_fetchActorIDs:function(){this.setState({loading:true});var o=j.getURIBuilder().setInt('target_id',this.props.targetID).getURI();new h().setURI(o).setHandler(function(p){var q=p.getPayload().actorIDs,r=this.props.targetID;this.setState({actorIDs:q,loading:false,selectedActorID:r});this.props.onChange({value:r});}.bind(this)).send();},_onChange:function(o){this.setState({selectedActorID:o.value});this.props.onChange(o);}});e.exports=n;},null);
__d("Sharer",["CSS","Event","ShareModeConst","ShareNowCounter","ShareNowCounterEvent","URI"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();function m(n,o){"use strict";this.$Sharer0=n;if(o)j.logEvent(k.OPEN_DIALOG,true);}m.prototype.getSharerFrame=function(){"use strict";return this.$Sharer0;};m.prototype.getComponents=function(){"use strict";return this.$Sharer0.getComponents();};m.initPrivacyWarning=function(n,o){"use strict";n.subscribe('selector-change',function(p,q){g.conditionShow(o,q===i.GROUP||q===i.MESSAGE||q===i.FRIEND||q===i.SELF_POST);});};m.close=function(n){"use strict";if(typeof(n)=='string'&&n){window.location.href=n;}else{var o=function(){window.close();window.location.href=new l(window.location.href).setPath('/').setQueryData().toString();};history.back();setTimeout(o,100);}return false;};m.listenForCancel=function(n){"use strict";h.listen(n,'click',this.close);};m.reloadIfPostLogin=function(){"use strict";var n=new l(document.referrer);if(n.getPath()=='/login.php')window.opener.require('Plugin').reloadOtherPlugins();};e.exports=m;},null);
__d("SharerFrame",["ArbiterMixin","ComposerVersion","ComposerXMarauderLogger","ComposerXSessionIDs","DOM","Event","Parent","cx","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=o(g);for(var q in p)if(p.hasOwnProperty(q))s[q]=p[q];var r=p===null?null:p.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=p;function s(t,u,v,w,x){"use strict";this.$SharerFrame0=v;this.$SharerFrame1=t;this.$SharerFrame2=this.$SharerFrame0.id;j.resetSessionID(this.$SharerFrame2);k.prependContent(this.$SharerFrame0,j.createSessionIDInput(j.getSessionID(this.$SharerFrame2)));if(w){i.registerComposer(this.$SharerFrame0,'feed','share',h.WWW_LEGACY);i.listenForPostEvents(this.$SharerFrame2,m.byClass(this.$SharerFrame0,"_59s7"));i.logEntry(this.$SharerFrame2);}this.$SharerFrame1.subscribe('change',function(aa,ba){this.inform('selector-change',ba);if(w)i.setShareMode(this.$SharerFrame2,ba);}.bind(this));this.$SharerFrame4=u;if(x){var y=x.row,z=x.removeLink;l.listen(z,'click',function(){return k.remove(y);});}}s.focusInput=function(t){"use strict";t.focus();};s.focusSelector=function(t){"use strict";var u=k.find(t,'.selectedMode input[type="text"]');if(u)u.focus();};s.prototype.getSelector=function(){"use strict";return this.$SharerFrame1;};s.prototype.getSelectedMode=function(){"use strict";return this.$SharerFrame1.getSelectedMode();};s.prototype.getComponents=function(){"use strict";return this.$SharerFrame4.getComponents();};e.exports=s;},null);
__d("XSharePrivacyAsyncController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/share\/mode\/group\/privacy\/",{current_group_id:{type:"Int",required:true},target_group_id:{type:"Int",required:true}});},null);
__d("SharerSelector",["ArbiterMixin","AsyncRequest","CSS","Event","Input","XSharePrivacyAsyncController","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=m(g);for(var o in n)if(n.hasOwnProperty(o))q[o]=n[o];var p=n===null?null:n.prototype;q.prototype=Object.create(p);q.prototype.constructor=q;q.__superConstructor__=n;function q(r){"use strict";this.$SharerSelector0=r.attachments;this.$SharerSelector1=r.icons;this.$SharerSelector2=r.modeInput;this.$SharerSelector3=r.selector;this.$SharerSelector4=r.selectorGroup;this.$SharerSelector5=r.selectedMode;if(this.$SharerSelector3)this.$SharerSelector3.subscribe('change',this.$SharerSelector6.bind(this));if(this.$SharerSelector0&&this.$SharerSelector5&&this.$SharerSelector0[this.$SharerSelector5])this.$SharerSelector0[this.$SharerSelector5].showContent();}q.prototype.updateMode=function(r){"use strict";this.$SharerSelector3.setValue(r);};q.prototype.getSelectedMode=function(){"use strict";return this.$SharerSelector5;};q.prototype.hideModeSelector=function(){"use strict";i.hide(this.$SharerSelector4);};q.prototype.showModeSelector=function(){"use strict";i.show(this.$SharerSelector4);};q.prototype.$SharerSelector6=function(r,s){"use strict";var t=s.value;this.$SharerSelector2&&k.setValue(this.$SharerSelector2,t);this.$SharerSelector0[this.$SharerSelector5].hideContent();this.$SharerSelector1&&i.hide(this.$SharerSelector1[this.$SharerSelector5]);this.$SharerSelector0[t].showContent();this.$SharerSelector1&&i.show(this.$SharerSelector1[t]);this.$SharerSelector5=t;if(this.$SharerSelector5==='group')this.$SharerSelector8(this.$SharerSelector0[this.$SharerSelector5]);this.inform('change',this.$SharerSelector5);};q.prototype.$SharerSelector8=function(r){"use strict";if(r.getTypeahead()){var s=r.getTypeahead();j.listen(s,'keyup',function(){if(r.getTargetGroupID()){var t=r.getCurrentGroupID(),u=r.getTargetGroupID();if(r.isCurrentGroupOpenPrivacy()){var v=l.getURIBuilder().setInt('current_group_id',t).setInt('target_group_id',u).getURI();new h(v).setMethod('GET').setReadOnly(true).send();}}});}};e.exports=q;},null);
__d("ShareMode",["CSS","Parent","cx","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l){this._content=l;}Object.assign(k.prototype,{showContent:function(){this._content&&g.show(this._content);this.show();},hideContent:function(){this._content&&g.hide(this._content);this.hide();},_getSharerRoot:function(){var l=h.byClass(this._content,"_b-z");if(!l)l=h.byClass(this._content,"_57xr");return l;},hideMentionsInput:function(){g.addClass(this._getSharerRoot(),"_c7f");},showMentionsInput:function(){g.removeClass(this._getSharerRoot(),"_c7f");},show:j,hide:j});e.exports=k;},null);
__d("ShareModeFriendTimeline",["Focus","ShareMode"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(l,m){"use strict";h.call(this,l);this._typeaheadInput=m;}k.prototype.show=function(){"use strict";g.set(this._typeaheadInput);};e.exports=k;},null);
__d("ShareModeGroup",["Focus","ShareMode"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(l,m,n,o,p){"use strict";h.call(this,l);this._typeaheadInput=m;this._hiddenInput=n;this._currentGroupID=o;this._isCurrentGroupOpenPrivacy=p;}k.prototype.show=function(){"use strict";g.set(this._typeaheadInput);};k.prototype.getTypeahead=function(){"use strict";return this._typeaheadInput;};k.prototype.getCurrentGroupID=function(){"use strict";return this._currentGroupID;};k.prototype.getTargetGroupID=function(){"use strict";if(this._hiddenInput&&this._hiddenInput.value)return this._hiddenInput.value;};k.prototype.isCurrentGroupOpenPrivacy=function(){"use strict";return this._isCurrentGroupOpenPrivacy;};e.exports=k;},null);
__d("ShareModeMessage",["Focus","ShareMode"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(l,m){"use strict";h.call(this,l);this._typeaheadInput=m;}k.prototype.show=function(){"use strict";g.set(this._typeaheadInput);};e.exports=k;},null);
__d("ShareModeOwnTimeline",["CSS","ShareMode"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(l){"use strict";h.call(this);this._privacyWidget=l;}k.prototype.show=function(){"use strict";g.show(this._privacyWidget);};k.prototype.hide=function(){"use strict";g.hide(this._privacyWidget);};e.exports=k;},null);
__d("ShareModePage",["CSS","Input","React","ShareActorSelector.react","ShareMode","UITargetedPrivacyWidget"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();for(var m in k)if(k.hasOwnProperty(m))o[m]=k[m];var n=k===null?null:k.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=k;function o(p,q,r,s,t,u){"use strict";k.call(this,p);this._pageID=u;this._pageSelector=q;this._actorSelectorContainer=r;this._actorIDInput=s;this._targetingWidget=t;this._targetingWidgetInstance=null;if(this._pageSelector)this._pageSelector.subscribe('change',function(v,w){this._pageID=this._pageSelector.getValue();this.show();}.bind(this));}o.prototype._updateActorIDInput=function(){"use strict";h.setValue(this._actorIDInput,this._selectedActorID);};o.prototype._updateActorSelector=function(){"use strict";i.render(i.createElement(j,{onChange:function(p){this._selectedActorID=p.value;this.show();}.bind(this),targetID:this._pageID}),this._actorSelectorContainer);};o.prototype._updateTargetingWidget=function(){"use strict";if(!this._targetingWidgetInstance)this._targetingWidgetInstance=l.getInstance(this._targetingWidget.id);if(this._targetingWidgetInstance)this._targetingWidgetInstance.setProfileID(this._selectedActorID);g.conditionShow(this._targetingWidget,this._pageID===h.getValue(this._actorIDInput,this._selectedActorID));};o.prototype.show=function(){"use strict";this._updateActorSelector();this._updateActorIDInput();this._updateTargetingWidget();};o.prototype.hide=function(){"use strict";h.setValue(this._actorIDInput,'');g.hide(this._targetingWidget);};e.exports=o;},null);
__d("Selector",["ArbiterMixin","BehaviorsMixin","Button","DOM","DOMQuery","csx","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=m(g,h);for(var o in n)if(n.hasOwnProperty(o))q[o]=n[o];var p=n===null?null:n.prototype;q.prototype=Object.create(p);q.prototype.constructor=q;q.__superConstructor__=n;function q(r,s,t,u,v){"use strict";this._popoverMenu=r;this._button=s;this._menu=t;this._input=u;this.init();v.behaviors&&this.enableBehaviors(v.behaviors);}q.prototype.init=function(){"use strict";this._menu.subscribe('change',function(r,s){this._setLabelContent(s.label);this._input.value=s.value;this.inform('change',s);}.bind(this));this._popoverMenu.getPopover().subscribe(['hide','show'],function(r){this.inform(r);}.bind(this));};q.prototype._getLabel=function(){"use strict";return k.find(this._button,"span._55pe");};q.prototype._setLabelContent=function(r){"use strict";var s=this._getLabel();j.setContent(s,r);};q.prototype.getLabelContent=function(){"use strict";var r=this._getLabel();return r.firstChild;};q.prototype.setValue=function(r){"use strict";this._menu.setValue(r);};q.prototype.getValue=function(){"use strict";return this._input.value;};q.prototype.getName=function(){"use strict";return this._input.name;};q.prototype.getButton=function(){"use strict";return this._button;};q.prototype.getMenu=function(){"use strict";return this._menu;};q.prototype.enable=function(){"use strict";i.setEnabled(this._button,true);this._popoverMenu.enable();};q.prototype.disable=function(){"use strict";i.setEnabled(this._button,false);this._popoverMenu.disable();};e.exports=q;},null);
__d("SelectorSubmitOnChange",["Parent","submitForm"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j){"use strict";this._selector=j;}i.prototype.enable=function(){"use strict";this._subscription=this._selector.subscribe('change',this._onChange.bind(this));};i.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;};i.prototype._onChange=function(){"use strict";var j=g.byTag(this._selector.getButton(),'form');j&&h(j);};Object.assign(i.prototype,{_subscription:null});e.exports=i;},null);