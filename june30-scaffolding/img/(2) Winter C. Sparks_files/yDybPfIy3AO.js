/*!CK:3674686334!*//*1434941775,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["IhKCr"]); }

__d("StickyController",["CSS","Event","Style","Vector","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m,n,o,p){"use strict";this._element=m;this._marginTop=n;this._onchange=o;this._proxy=p||m.parentNode;this._boundQueryOnScroll=this.shouldFix.bind(this);this._boundMutateOnScroll=this._mutateOnScroll.bind(this);}l.prototype.handleScroll=function(){"use strict";k(this._boundQueryOnScroll,this._boundMutateOnScroll);};l.prototype.shouldFix=function(){"use strict";return j.getElementPosition(this._proxy,'viewport').y<=this._marginTop;};l.prototype._mutateOnScroll=function(){"use strict";var m=this.shouldFix();if(this.isFixed()!==m){i.set(this._element,'top',m?this._marginTop+'px':'');g.conditionClass(this._element,'fixed_elem',m);this._onchange&&this._onchange(m);}};l.prototype.start=function(){"use strict";if(this._event)return;this._event=h.listen(window,'scroll',this.handleScroll.bind(this));setTimeout(this.handleScroll.bind(this),0);};l.prototype.stop=function(){"use strict";this._event&&this._event.remove();this._event=null;};l.prototype.isFixed=function(){"use strict";return g.hasClass(this._element,'fixed_elem');};e.exports=l;},null);
__d("TimelineSideAds",["AdsMouseStateStore","Animation","Arbiter","CSS","DOM","EgoAdsObjectSet","Event","ProfileTabUtils","StickyController","TimelineAdsConfig","TimelineComponentKeys","TimelineConstants","TimelineController","UIPagelet","URI","Vector","csx","cx","debounce","ge","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa){b.__markCompiled&&b.__markCompiled();var ba=75,ca='data-height',da=g.STATES,ea=30000,fa=0,ga=false,ha,ia,ja,ka,la,ma,na=new l(),oa,pa,qa=false,ra,sa=Infinity,ta=false,ua=5,va,wa,xa,ya,za,ab,bb,cb,db,eb,fb,gb,hb,ib=false,jb=[],kb;function lb(kc,lc,mc){var nc=0;if(lc)nc+=lc.getHeight();if(!qb()&&!nc)return;kc-=nc;var oc=0;for(var pc=0;pc<mc;pc++)oc+=zb(pc);if(lc)if(kc<oc){kc+=lc.fold(oc-kc);}else if(kc>oc)kc-=lc.unfold(kc-oc);return kc;}function mb(){var kc=ia.cloneNode(true);kc.id='';var lc=new l();lc.init(k.scry(kc,'div.ego_unit'));var mc=true;lc.forEach(function(nc){if(mc){mc=false;}else k.remove(nc);});j.addClass(kc,'fixed_elem');return kc;}function nb(){ma=(void 0);if(!n.tabHasScrubber(oa)){rb(ua);ub();}else if(ab){sb(ia,false);var kc=bb;bb&&k.remove(bb);bb=mb();if(kc)fc();rb(s.sidebarInitialized()&&qa?ya:xa);ub();if(!ra){var lc=s.getCurrentScrubber();if(lc)ec(lc.getRoot(),lc.getOffset());}ra&&ra.start();}else jc.adjustAdsToFit();}function ob(){if(bb){k.remove(bb);bb=null;}if(ra){ra.stop();ra=null;}var kc=n.tabHasScrubber(oa);j.conditionClass(ia,'fixed_elem',!ab&&(qb()||kc));j.conditionClass(ia,"_31wm",!kc);j.conditionClass(ia,"_5r9k",kc);}function pb(kc){var lc=v.getViewportDimensions().y,mc=s.getCurrentScrubber(),nc=mc?mc.getOffset():r.SCRUBBER_DEFAULT_OFFSET,oc=lc-nc-ba;if(mc||qb())return lb(oc,mc,kc);}function qb(){return n.tabHasFixedAds(oa);}function rb(kc){la=Math.min(kc,na.getCount());na.forEach(function(lc,mc){sb(lc,mc>=la);});sb(ia,la===0);}function sb(kc,lc){j.conditionClass(kc,"_22r",lc);kc.setAttribute('aria-hidden',lc?'true':'false');}function tb(kc){var lc=k.find(na.getUnit(kc),"div._4u8"),mc=lc.getAttribute('data-ad');return JSON.parse(mc).adid;}function ub(){wb();vb();}function vb(){var kc;if(ma!==(void 0)){kc=na.getHoldoutAdIDsForSpace(ma,ac);}else kc=na.getHoldoutAdIDsForNumAds(la);if(kc)kc.forEach(xb);}function wb(){if(!cb)return;for(var kc=la-1;kc>=0;--kc){if(ra&&ra.isFixed()&&((kc!==0)||(bb&&!j.shown(bb))))continue;var lc=tb(kc);if(!cb[lc])return;xb(lc);}}function xb(kc){if(!cb[kc])return;var lc=k.create('iframe',{src:new u('/ai.php').addQueryData({aed:cb[kc]}),width:0,height:0,frameborder:0,scrolling:'no',className:'fbEmuTracking'});lc.setAttribute('aria-hidden','true');k.appendContent(ia,lc);delete cb[kc];}function yb(kc){var lc=0;for(var mc=0;mc<ua;mc++){var nc=zb(mc);kc-=nc;if(kc>0&&nc>0)lc++;}return lc;}function zb(kc){var lc=na.getUnit(kc);if(!lc)return 0;return ac(lc);}function ac(kc){if(!kc.getAttribute(ca))bc(kc);return parseInt(kc.getAttribute(ca),10);}function bc(kc){kc.setAttribute(ca,kc.offsetHeight);}function cc(){for(var kc=0;kc<na.getCount();kc++){var lc=na.getUnit(kc);if(!lc)continue;bc(lc);}}function dc(){var kc=k.scry(ia,'div.ego_unit');na.init(kc);var lc=kc.length;if(!lc)return;j.addClass(na.getUnit(0),'ego_unit_no_top_border');nb();setTimeout(function(){kc.forEach(bc);jc.adjustAdsToFit();sa=Date.now();},0);}function ec(kc,lc){ra=new o(kc,lc,function(mc){if(mc){fc();}else{k.remove(bb);ub();}});if(bb)ra.start();}function fc(){k.insertAfter(ia,bb);gc();}function gc(){j.conditionShow(bb,zb(0)<=pb(1)&&!j.hasClass(document.documentElement,'tinyViewport'));}function hc(){if(pa){var kc=z(ja);k.find(kc,'.ego_column').appendChild(pa);}if(p.fade)(new h(z(ja))).from('opacity',0).to('opacity',1).duration(600).go();}function ic(kc){return !!k.scry(kc,'div.fbEmuHidePoll')[0];}var jc={init:function(kc,lc,mc){if(ga)return;ua=mc.max_ads;ha=mc.refresh_delay;ea=mc.refresh_threshold;va=mc.min_ads;wa=mc.min_ads_wide;xa=mc.min_ads_short;ya=mc.min_ads_short_wide;ga=true;ka=lc;ia=kc;g.updateRhcID(k.getID(ia));jc.adjustAdsType(s.shouldShowWideAds());db=i.subscribe(['UFI/CommentAddedActive','UFI/CommentDeletedActive','UFI/LikeActive','Curation/Action','ProfileBrowser/LoadMoreContent','Ads/NewContentDisplayed'],jc.loadAdsIfEnoughTimePassed);eb=i.subscribe('TimelineSideAds/refresh',jc.forceReloadAds);fb=i.subscribe('ProfileQuestionAnswered',jc.forceReloadAdsWithCallback);gb=i.subscribe('Ads/displayPoll',jc.displayAdsPoll);hb=i.subscribe('Ads/hidePoll',jc.hideAdsPoll);kb=y(jc.loadAdsIfEnoughTimePassed,ha,this,true);if(mc.mouse_move){jb.push(m.listen(window,'mousemove',kb));jb.push(m.listen(window,'scroll',kb));jb.push(m.listen(window,'resize',kb));jb.push(m.listen(ia,'mouseenter',function(){ta=true;}));jb.push(m.listen(ia,'mouseleave',function(){ta=false;}));}s.register(q.ADS,jc);},setShortMode:function(kc){ab=kc;},start:function(kc){cb=kc;za=null;dc();},updateCurrentKey:function(kc){if(kc==oa)return;oa=kc;ob();},loadAds:function(kc){if(za)return;sa=Infinity;za=t.loadFromEndpoint('WebEgoPane',ia.id,{pid:33,data:[ka,'timeline_'+kc,ab?ya:ua,++fa,false]},{crossPage:true,bundle:false,handler:hc});},registerScrubber:function(kc){if(ab)ec(kc.getRoot(),kc.getOffset());!za&&jc.adjustAdsToFit();},intentShown:function(){if(!p.stateRefresh)return false;switch(g.getState()){case da.HOVER:case da.INTENT:default:return true;case da.NO_INTENT:return false;case da.STATIONARY:return !p.refreshOnStationary;}},loadAdsIfEnoughTimePassed:function(){if(ea&&(Date.now()-sa>=ea)&&!j.hasClass(document.documentElement,'tinyViewport')&&(!ra||ra.isFixed())&&(!cb||!cb[tb(0)])&&!jc.intentShown()&&!ta)jc.loadAds(oa);jc.adjustAdsToFit();},forceReloadAdsWithCallback:function(kc,lc){pa=lc;ja=k.getID(ia);jc.loadAds(oa);},forceReloadAds:function(){jc.loadAds(oa);},adjustAdsType:function(kc){if(kc!=qa){j.conditionClass(ia,"_22q",!kc);j.conditionClass(ia,"_35q",!kc);bb&&j.conditionClass(bb,"_22q",!kc);bb&&j.conditionClass(bb,"_35q",!kc);qa=kc;cc();jc.adjustAdsToFit();var lc=z('rightColContent');if(lc)j.conditionClass(lc,'fbTimelineWideRightCol',kc);}},displayAdsPoll:function(){var kc=-1;for(var lc=0;lc<na.getCount();lc++){var mc=na.getUnit(lc);if(!mc)continue;if(kc===-1&&ic(mc))kc=lc;bc(mc);}jc.adjustAdsToFit();if(kc===la&&kc>0){sb(na.getUnit(kc-1),true);sb(na.getUnit(kc),false);}},hideAdsPoll:function(){cc();jc.adjustAdsToFit();},adjustAdsToFit:function(){if(!ia||ib)return;ib=true;var kc;if(ab){kc=qa?ya:xa;if(ra&&bb){ra.handleScroll();if(ra.isFixed()){j.conditionShow(bb,zb(0)<=pb(1)&&!j.hasClass(document.documentElement,'tinyViewport'));}else rb(kc);ub();}ib=false;return;}kc=qa?wa:va;var lc=0;aa(function(){var mc=pb(kc);if(mc!==(void 0)){ma=mc;lc=yb(mc);}},function(){if(lc>0){rb(lc);ub();ib=false;}});},reset:function(){ra&&ra.stop();za&&za.cancel();na=new l();qa=false;ia=null;ra=null;za=null;fa=0;ab=null;bb=null;oa=null;sa=Infinity;ga=false;db&&i.unsubscribe(db);db=null;eb&&i.unsubscribe(eb);eb=null;fb&&i.unsubscribe(fb);gb&&i.unsubscribe(gb);hb&&i.unsubscribe(hb);fb=null;ta=false;jb.forEach(function(kc){kc.remove();});jb=[];kb&&kb.reset();}};e.exports=a.TimelineSideAds||jc;},null);
__d("TimelineStickyHeader",["Animation","Arbiter","Bootloader","CSS","DOM","ProfileTabConst","ProfileTabUtils","Style","TimelineComponentKeys","TimelineController","Vector","ViewportBounds","csx","ge","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b.__markCompiled&&b.__markCompiled();var v=200,w=false,x=false,y,z,aa,ba,ca,da,ea={},fa={VISIBLE:'TimelineStickyHeader/visible',ADJUST_WIDTH:'TimelineStickyHeader/adjustWidth',init:function(ga){if(w)return;w=true;y=ga;z=k.find(ga,'div.name');aa=k.find(ga,'div.actions');x=j.hasClass(ga,'fbTimelineStickyHeaderVisible');var ha=k.find(document,"div._4f7n"),ia,ja=false;u(function(){if(ha.offsetTop&&!t('page_admin_panel')&&p.getCurrentKey()!==l.TIMELINE){ia=q.tElementDimensions(ha).y;ja=true;}},function(){if(ja){i.loadModules(["StickyController"],function(ka){new ka(ga,ia).start();});}else j.addClass(ga,'fixed_elem');u(function(){ca=ga.offsetTop;da=ga.scrollHeight;},function(){ba=r.addTop(function(){return x?ca+da:0;});},'TimelineStickyHeader/init');p.register(o.STICKY_HEADER,fa);},'TimelineStickyHeader/init');},reset:function(){w=false;x=false;y=null;z=null;aa=null;ea={};ba.remove();ba=null;},handleTabChange:function(ga){if(!m.tabHasStickyHeader(ga)){this.toggle(false,function(){return j.hide(y);});return;}j.show(y);},toggle:function(ga,ha){if(ga===x){ha&&ha();return;}var ia=ga?ca-da:ca,ja=ga?ca:ca-da;n.set(y,'top',ia+'px');j.addClass(y,'fbTimelineStickyHeaderAnimating');var ka=k.getID(y);ea[ka]&&ea[ka].stop();ea[ka]=new g(y).from('top',ia).to('top',ja).duration(v).ondone(function(){ea[ka]=null;u(null,function(){j.conditionClass(y,'fbTimelineStickyHeaderHidden',!ga);y.setAttribute('aria-hidden',ga?'false':'true');j.removeClass(y,'fbTimelineStickyHeaderAnimating');n.set(y,'top','');h.inform(fa.VISIBLE,ga);ha&&ha();});}).go();x=ga;if(x)fa.adjustWidth();},adjustWidth:function(){h.inform(fa.ADJUST_WIDTH,z,h.BEHAVIOR_STATE);},getRoot:function(){return y;},setActions:function(ga){if(w&&ga){k.setContent(aa,ga);aa=ga;}}};e.exports=a.TimelineStickyHeader||fa;},null);
__d("ButtonGroup",["CSS","DataStore","Parent","createArrayFromMixed"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k='firstItem',l='lastItem';function m(r,s){var t=i.byClass(r,s);if(!t)throw new Error('invalid use case');return t;}function n(r){return g.shown(r)&&j(r.childNodes).some(g.shown);}function o(r){var s,t,u;j(r.childNodes).forEach(function(v){u=n(v);g.removeClass(v,k);g.removeClass(v,l);g.conditionShow(v,u);if(u){s=s||v;t=v;}});s&&g.addClass(s,k);t&&g.addClass(t,l);g.conditionShow(r,s);}function p(r,s){var t=m(s,'uiButtonGroupItem');r(t);o(t.parentNode);}function q(r){"use strict";this._root=m(r,'uiButtonGroup');h.set(this._root,'ButtonGroup',this);o(this._root);}q.getInstance=function(r){"use strict";var s=m(r,'uiButtonGroup'),t=h.get(s,'ButtonGroup');return t||new q(s);};Object.assign(q.prototype,{hideItem:p.bind(null,g.hide),showItem:p.bind(null,g.show),toggleItem:p.bind(null,g.toggle)});e.exports=q;},null);
__d("TimelineStickyHeaderNav",["Arbiter","ButtonGroup","CSS","DataStore","DateStrings","DOM","Event","Parent","SelectorDeprecated","Style","SubscriptionsHandler","TimelineComponentKeys","TimelineConstants","TimelineController","TimelineLegacySections","URI","Vector","csx","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b.__markCompiled&&b.__markCompiled();var z=false,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la={},ma={},na=[],oa=false,pa=[],qa=[],ra,sa=80;function ta(){var gb=o.getSelectorMenu(ea);ra.addSubscriptions(m.listen(gb,'click',ua),g.subscribe(s.SECTION_REGISTERED,ya));}function ua(event){var gb=n.byTag(event.getTarget(),'a'),hb=gb&&j.get(gb,'key');if(hb){t.stickyHeaderNavWasClicked(hb);t.navigateToSection(hb);event.prevent();}}function va(gb,hb){var ib=o.getValue(hb);if(ib==='allStories')u.get(gb).expandSubSections();if(ib!=='activityLog')wa(hb);}function wa(gb){eb(gb,'highlights');eb(gb,'allStories');var hb=l.find(gb,'li.separator');i.conditionShow(hb,hb.previousSibling);}function xa(gb){if(ja===gb&&ha[gb]&&!ba.custom_subsection_menu){cb(gb);}else za();t.adjustStickyHeaderWidth();}function ya(gb,hb){var ib=hb.section,jb=ib.getParentKey();if(!jb)return;var kb=bb(jb),lb=t.getCurrentScrubber(),mb=ib.getScrubberKey(),nb=lb?lb.getLabelForSubnav(jb,mb):nb=ab(mb);if(nb){ha[jb]=true;db(kb,{key:mb,label:nb});xa(jb);}}function za(){ca.hideItem(fa);}function ab(gb){var hb=gb.split('_');return k.getMonthName(parseInt(hb.pop(),10));}function bb(gb){var hb=ga[gb];if(!hb){hb=ga[gb]=fa.cloneNode(true);var ib=l.scry(hb,'li.activityLog a')[0];if(ib)ib.href=new v(ib.href).addQueryData({key:gb});ra.addSubscriptions(o.listen(hb,'change',va.bind(null,gb,hb)),m.listen(hb,'click',ua));}return hb;}function cb(gb){var hb=bb(gb);l.insertAfter(fa,hb);i.hide(fa);for(var ib in ga){var jb=ga[ib];i.conditionShow(jb,jb===hb);}ca.showItem(fa);}function db(gb,hb){var ib=l.create('a',{href:'#',rel:'ignore',className:'itemAnchor',tabIndex:0},l.create('span',{className:'itemLabel fsm'},hb.label));ib.setAttribute('data-key',hb.key);ib.setAttribute('aria-checked',false);var jb=l.create('li',{className:'uiMenuItem uiMenuItemRadio uiSelectorOption'},ib);jb.setAttribute('data-label',hb.label);var kb=l.find(gb,'ul.uiMenuInner'),lb=l.create('option',{value:hb.key},hb.label),mb=l.find(gb,'select');if(hb.key==='recent'){l.prependContent(kb,jb);l.insertAfter(mb.options[0],lb);}else{l.appendContent(kb,jb);l.appendContent(mb,lb);}}function eb(gb,hb){var ib=l.scry(gb,'li.uiMenuItem');if(!ib)return;for(var jb=0;jb<ib.length;jb++){var kb=ib[jb];if(i.hasClass(kb,hb)||kb.firstChild.getAttribute('data-key')==hb){l.remove(kb);break;}}var lb=l.find(gb,'select'),mb=l.scry(lb,'option');for(jb=0;jb<mb.length;jb++)if(mb[jb].value===hb){l.remove(mb[jb]);return;}}var fb={init:function(gb,hb){if(z)return;z=true;aa=gb;ba=hb||{};da=l.find(aa,'div.pageMenu');ea=l.find(aa,'div.sectionMenu');fa=l.find(aa,'div.subsectionMenu');ka=l.find(da,'li.uiMenuSeparator');ca=h.getInstance(da);ra=new q();ga={};ha={};ia={};fb.adjustMenuHeights();ta();t.register(r.STICKY_HEADER_NAV,fb);qa.forEach(function(ib){ib();});},reset:function(){z=false;ba={};na=[];la={};ma={};oa=false;pa=[];aa=null;da=null;ea=null;fa=null;ka=null;ga={};ha={};ia={};ra.release();},addTimePeriod:function(gb){var hb=t.getCurrentScrubber();if(!hb)return;var ib=hb.getLabelForNav(gb);if(!ib)return;db(ea,{key:gb,label:ib});var jb=l.find(ea,'ul.uiMenuInner');if(gb==='recent'||jb.children.length<2)o.setSelected(ea,gb,true);},updateSection:function(gb,hb){if(hb){var ib=bb(gb);o.setSelected(ib,hb);wa(ib);}else ia[gb]=true;ja=gb;o.setSelected(ea,gb,true);xa(gb);},adjustMenuHeights:function(){var gb='';y(function(){if(!i.hasClass(document.documentElement,'tinyViewport')){var hb=l.scry(document,"div._4f7n")[0];gb=w.getViewportDimensions().y-w.getElementDimensions(hb).y-sa;gb+='px';}},function(){[da,ea].map(function(hb){p.set(l.find(hb,'ul.uiMenuInner'),'maxHeight',gb);});});},initPageMenu:function(gb,hb){if(!z){qa.push(fb.initPageMenu.bind(null,gb,hb));return;}function ib(jb,kb){jb.forEach(function(lb){var mb=ma[lb]=l.create('li');i.hide(mb);kb?l.insertBefore(ka,mb):l.appendContent(l.find(da,'ul.uiMenuInner'),mb);});}ib(gb,true);ib(hb,false);la.info=l.scry(da,'li')[0];na=hb;oa=true;if(pa.length)pa.forEach(function(jb){fb.registerPageMenuItem(jb.key,jb.item);});},registerPageMenuItem:function(gb,hb){if(!oa){pa.push({key:gb,item:hb});return;}if(ma[gb]){l.replace(ma[gb],hb);la[gb]=hb;delete ma[gb];if(na.indexOf(gb)>=0)i.show(ka);}},removeTimePeriod:function(gb){eb(ea,gb);},hideSectionMenu:function(){z&&i.hide(ea);}};e.exports=fb;},null);
__d("TimelineScrubber",["CSS","DOM","Event","Focus","Keys","Parent","ProfileTabUtils","TimelineComponentKeys","TimelineController","Vector","cx","getElementText"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();var s="_3rrn";function t(u){"use strict";this.$TimelineScrubber0=u;this.$TimelineScrubber1={};this.$TimelineScrubber2={};this.$TimelineScrubber3={};this.$TimelineScrubber4={};var v=u.childNodes;this.$TimelineScrubber5=v[0];for(var w=0;w<v.length;w++){var x=v[w].getAttribute('data-key');this.$TimelineScrubber1[x]=v[w];var y=h.scry(v[w],'ul');this.$TimelineScrubber2[x]={};if(y.length){var z=y[0].childNodes;for(var aa=0;aa<z.length;aa++)this.$TimelineScrubber2[x][z[aa].getAttribute('data-key')]=z[aa];}var ba=v[w].getAttribute('data-rollup');if(ba){this.$TimelineScrubber3[ba]=this.$TimelineScrubber3[ba]||[];this.$TimelineScrubber3[ba].push(v[w]);}}this.$TimelineScrubber6=i.listen(this.$TimelineScrubber0,'click',this.$TimelineScrubber7.bind(this));this.$TimelineScrubber8=i.listen(this.$TimelineScrubber0,'keydown',this.$TimelineScrubber9.bind(this));this.$TimelineScrubbera=h.scry(this.$TimelineScrubber0,'a')[0];g.show(this.$TimelineScrubber0);var ca=p.getViewportDimensions().y-this.SCRUBBER_NO_ADS_VERTICAL_BUFFER,da=this.getHeight();if(da>ca)this.fold(da-ca);o.register(n.SCRUBBER,this);o.scrubberHasLoaded(this);}t.prototype.reset=function(){"use strict";this.$TimelineScrubber6&&this.$TimelineScrubber6.remove();this.$TimelineScrubber8&&this.$TimelineScrubber8.remove();this.$TimelineScrubber0=null;this.$TimelineScrubber1={};this.$TimelineScrubber2={};this.$TimelineScrubber3={};this.$TimelineScrubber4={};};t.prototype.getRoot=function(){"use strict";return this.$TimelineScrubber0;};t.prototype.getNav=function(u){"use strict";return this.$TimelineScrubber1[u];};t.prototype.getSubnav=function(u,v){"use strict";var w=this.$TimelineScrubber2[u];return w&&w[v];};t.prototype.getHeight=function(){"use strict";return this.$TimelineScrubber0.offsetHeight;};t.prototype.getLabelForNav=function(u){"use strict";var v=this.getNav(u);return v&&r(h.scry(v,'a')[0]);};t.prototype.getLabelForSubnav=function(u,v){"use strict";var w=this.getSubnav(u,v);return w&&r(h.scry(w,'a')[0]);};t.prototype.fold=function(u){"use strict";return this.$TimelineScrubberb(u,true);};t.prototype.unfold=function(u){"use strict";return this.$TimelineScrubberb(u,false);};t.prototype.handleTabChange=function(u){"use strict";g.conditionShow(this.$TimelineScrubber0,m.tabHasScrubber(u));};t.prototype.getOffset=function(){"use strict";return this.OFFSET+(g.hasClass(document.body,'hasVoiceBar')?26:0)+(g.hasClass('rightColContent','pagesTimelineRightColumn')?48:0);};t.prototype.updateSection=function(u,v){"use strict";if(!this.$TimelineScrubber1[u])return;var w=this.$TimelineScrubber1[u].getAttribute('data-rollup');if(this.$TimelineScrubberc&&this.$TimelineScrubberc!=w){g.removeClass(this.$TimelineScrubberc,s);g.removeClass(h.scry(this.$TimelineScrubberc,'ul')[0],'loaded');delete this.$TimelineScrubberc;}if(w&&this.$TimelineScrubber4[w]){var x=this.$TimelineScrubber4[w];if(x.getAttribute('data-rollup')){this.$TimelineScrubberc=x;g.addClass(this.$TimelineScrubberc,s);g.addClass(h.scry(this.$TimelineScrubberc,'ul')[0],'loaded');}}this.$TimelineScrubber5&&g.removeClass(this.$TimelineScrubber5,s);this.$TimelineScrubberd&&g.removeClass(this.$TimelineScrubberd,s);this.$TimelineScrubber5=null;this.$TimelineScrubberd=null;if(this.$TimelineScrubber1[u]){this.$TimelineScrubber5=this.$TimelineScrubber1[u];g.addClass(this.$TimelineScrubber5,s);if(this.decadesAreSelectable&&this.$TimelineScrubber1[v]){this.$TimelineScrubberd=this.$TimelineScrubber1[v];g.addClass(this.$TimelineScrubberd,s);}else if(v&&this.$TimelineScrubber2[u][v]){this.$TimelineScrubberd=this.$TimelineScrubber2[u][v];g.addClass(this.$TimelineScrubberd,s);}}};t.prototype.$TimelineScrubbere=function(u){"use strict";var v=this.$TimelineScrubber5,w=v&&v.getAttribute('data-rollup'),x=this.KEY_HEIGHT*(this.$TimelineScrubber3[u].length-1);if(u==w){x+=this.SUBKEY_HEIGHT*h.scry(v,'li').length;x-=this.SUBKEY_HEIGHT*(this.$TimelineScrubber3[u].length-1);}return x;};t.prototype.$TimelineScrubberb=function(u,v){"use strict";var w=u,x=Object.keys(this.$TimelineScrubber3);while(u>0&&x.length){var y=x[v?'pop':'shift']();if(!v==!this.$TimelineScrubber4[y])continue;var z=this.$TimelineScrubbere(y);if(z<=0)continue;if(!v&&z>u)break;var aa;if(v){aa=this.$TimelineScrubberf(y);}else aa=this.$TimelineScrubberg(y);if(aa)u-=z;}return w-u;};t.prototype.$TimelineScrubberf=function(u){"use strict";var v=this.$TimelineScrubber3[u];if(!v||v.length<2||this.$TimelineScrubber4[u])return false;var w=v[0].previousSibling,x=v[0],y=h.create('a',{href:x.firstChild.href,rel:'ignore',tabindex:'-1'},[u]),z=h.create('ul',{className:'clearfix'});for(var aa=0;aa<v.length;aa++)z.appendChild(v[aa]);var ba=h.create('li',null,[y,z]);if(this.decadesAreSelectable){var ca=v[v.length-1],da=x.getAttribute('data-key')+ca.getAttribute('data-key');ba.setAttribute('data-start',ca.getAttribute('data-start'));ba.setAttribute('data-end',x.getAttribute('data-end'));ba.setAttribute('data-key',da);this.$TimelineScrubber1[da]=ba;}else ba.setAttribute('data-key',x.getAttribute('data-key'));ba.setAttribute('data-rollup',u);if(w){h.insertAfter(w,ba);}else h.prependContent(this.$TimelineScrubber0,ba);this.$TimelineScrubber4[u]=ba;this.$TimelineScrubberh();this.$TimelineScrubberi();return true;};t.prototype.$TimelineScrubberg=function(u){"use strict";if(!this.$TimelineScrubber4[u])return false;var v=this.$TimelineScrubber4[u],w=h.scry(v,'ul')[0],x=document.createDocumentFragment();while(w.childNodes.length)x.appendChild(w.firstChild);h.replace(v,x);this.$TimelineScrubber4[u]=false;this.$TimelineScrubberh();return true;};t.prototype.$TimelineScrubberh=function(){"use strict";if(this.$TimelineScrubber5){var u=this.$TimelineScrubberd&&this.$TimelineScrubberd.getAttribute('data-key');this.updateSection(this.$TimelineScrubber5.getAttribute('data-key'),u);}};t.prototype.$TimelineScrubber7=function(event){"use strict";var u=event.getModifiers();if(event.isMiddleClick()||u.access||u.meta)return true;var v=l.byTag(event.getTarget(),'a'),w=v&&l.byAttribute(v,'data-key');if(w){o.scrubberWasClicked(w.getAttribute('data-key'));o.navigateToSection(w.getAttribute('data-key'));return event.prevent();}};t.prototype.$TimelineScrubberi=function(){"use strict";while(!(this.$TimelineScrubbera.offsetHeight||this.$TimelineScrubbera.offsetWidth)){this.$TimelineScrubbera.tabIndex=-1;var u=l.byTag(l.byTag(this.$TimelineScrubbera,'li'),'li'),v=h.scry(u,'a')[0];if(v===this.$TimelineScrubbera)return;this.$TimelineScrubbera=v;this.$TimelineScrubbera.tabIndex=0;}};t.prototype.$TimelineScrubber9=function(event){"use strict";if(event.getModifiers().any)return;var u=i.getKeyCode(event);if(u===k.UP||u===k.DOWN){var v=h.scry(this.$TimelineScrubber0,'a').filter(function(y){return y.offsetHeight||y.offsetWidth;}),w=v.indexOf(this.$TimelineScrubbera);if(w!=-1){var x=v[w+(u===k.UP?-1:1)];if(x){x.tabindex=0;j.set(x);this.$TimelineScrubbera.tabindex=-1;this.$TimelineScrubbera=x;event.prevent();}}}};Object.assign(t.prototype,{KEY_HEIGHT:23,SUBKEY_HEIGHT:16,OFFSET:38,SCRUBBER_NO_ADS_VERTICAL_BUFFER:125});e.exports=t;},null);
__d("TimelineMainScrubber",["Arbiter","CSS","DOMQuery","TimelineConstants","TimelineController","TimelineScrubber"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();for(var m in l)if(l.hasOwnProperty(m))o[m]=l[m];var n=l===null?null:l.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=l;function o(p){"use strict";l.call(this,p);this.$TimelineMainScrubber0=g.subscribe(j.SECTION_LOADED,function(q,r){var s=this.getNav(r.key),t=s&&i.scry(s,'ul')[0];if(t){h.addClass(t,'loaded');k.scrubberHasChangedState();if(r.hideSubSections)h.hide(t);}}.bind(this));}o.prototype.reset=function(){"use strict";n.reset.call(this);this.$TimelineMainScrubber0&&this.$TimelineMainScrubber0.unsubscribe();};e.exports=o;},null);
__d("ButtonGroupMonitor",["ContextualDialog","ContextualLayer","CSS","Layer","Parent","SelectorDeprecated","DataStore"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();function n(o,p){var q=k.byClass(o,'bg_stat_elem')||k.byClass(o,'uiButtonGroup');if(!q&&p)q=m.get(p,'toggleElement',null);if(q){p&&m.set(p,'toggleElement',q);i.toggleClass(q,'uiButtonGroupActive');}}j.subscribe(['hide','show'],function(o,p){if(p instanceof h||p instanceof g)n(p.getCausalElement(),p);});l.subscribe(['close','open'],function(o,p){n(p.selector);});},null);