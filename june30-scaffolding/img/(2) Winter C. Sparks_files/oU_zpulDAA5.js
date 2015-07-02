/*!CK:1163718567!*//*1434938848,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Sy7l3"]); }

__d("PerfXClientMetricsConfig",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={LOGGER_CONFIG:"PerfXClientMetricsLoggerConfig"};},null);
__d("PixelRatioConst",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={cookieName:"dpr"};},null);
__d("ModuleDependencies",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(k,l,m){var n=b.__debug.modules[m],o=b.__debug.deps;if(l[m])return;l[m]=true;if(!n){o[m]&&(k[m]=true);return;}if(!n.dependencies||!n.dependencies.length){if(n.waiting)k[m]=true;return;}n.dependencies.forEach(function(p){g(k,l,p);});}function h(k){if(b.__debug){var l={};g(l,{},k);var m=Object.keys(l);m.sort();return m;}return null;}function i(){var k={loading:{},missing:[]};if(!b.__debug)return k;var l={},m=b.__debug.modules,n=b.__debug.deps;for(var o in m){var p=m[o];if(p.waiting){var q={};g(q,{},p.id);delete q[p.id];k.loading[p.id]=Object.keys(q);k.loading[p.id].sort();k.loading[p.id].forEach(function(r){if(!(r in m)&&n[r])l[r]=1;});}}k.missing=Object.keys(l);k.missing.sort();return k;}var j={setRequireDebug:function(k){b.__debug=k;},getMissing:h,getNotLoadedModules:i};e.exports=j;},null);
__d("sourceMetaToString",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h,i){var j;if(h.name){j=h.name;if(h.module)j=h.module+'.'+j;}else if(h.module)j=h.module+'.<anonymous>';if(i&&h.line){j=(j?j:'<anonymous>')+':'+h.line;if(h.column)j+=':'+h.column;}return j;}e.exports=g;},null);
__d("PerfXFlusher",["BanzaiLogger","PerfXClientMetricsConfig","invariant"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=h.LOGGER_CONFIG,k=['perfx_page','perfx_page_type','tti','e2e'];function l(n){k.forEach(function(o){i(o in n);});}var m={flush:function(n,o){l(o);o.lid=n;if(o.fbtrace_id){g.log(j,o,{delay:10*1000});}else g.log(j,o);}};e.exports=m;},null);
__d("legacy:onload-action",["PageHooks"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();a._domreadyHook=g._domreadyHook;a._onloadHook=g._onloadHook;a.runHook=g.runHook;a.runHooks=g.runHooks;a.keep_window_set_as_loaded=g.keepWindowSetAsLoaded;},3);
__d("WebMessengerEvents",["Arbiter"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=Object.assign(new g(),{MASTER_DOM_CHANGED:'master-dom-changed',DETAIL_DOM_CHANGED:'detail-dom-changed',FOCUS_COMPOSER:'focus-composer',FOCUS_SEARCH:'focus-search',FOCUS_AND_SELECT_SEARCH:'focus-and-select-search',STICKER_CLICKED:'sticker-clicked',SUBMIT_REPLY:'submit-reply',UPDATE_SELECTION:'update-selection',masterDOMChanged:function(){this.inform(h.MASTER_DOM_CHANGED);},detailDOMChanged:function(){this.inform(h.DETAIL_DOM_CHANGED);},focusComposer:function(){this.inform(h.FOCUS_COMPOSER);},focusSearch:function(){this.inform(h.FOCUS_SEARCH);},focusAndSelectSearch:function(){this.inform(h.FOCUS_AND_SELECT_SEARCH);},updateSelection:function(i){this.inform(h.UPDATE_SELECTION,i);},stickerClicked:function(i,j){this.inform(h.STICKER_CLICKED,{packID:i,stickerID:j});},submitReply:function(){this.inform(h.SUBMIT_REPLY);}});e.exports=h;},null);
__d("WebMessengerSubscriptionsHandler",["SubscriptionsHandler"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=new g('webmessenger');e.exports=h;},null);
__d("isWebMessengerURI",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){return (/^(\/messages)/).test(h.getPath());}e.exports=g;},null);
__d("WebMessengerWidthControl",["Arbiter","CSS","CSSClassTransition","DOM","DOMDimensions","Event","Style","URI","ViewportBounds","WebMessengerEvents","WebMessengerSubscriptionsHandler","$","cx","csx","isWebMessengerURI","requestAnimationFrame","setTimeoutAcrossTransitions","shield","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b.__markCompiled&&b.__markCompiled();var z=205,aa=981,ba=257,ca=18,da=848,ea=724,fa=.57,ga=56,ha,ia,ja;function ka(pa,qa,ra){this.masterChanged=pa;this.detailChaned=qa;q.addSubscriptions(l.listen(window,'resize',y(x(la,this,this),100)),g.subscribe(['sidebar/initialized','sidebar/show','sidebar/hide','minisidebar/show'],x(la,this,this),g.SUBSCRIBE_NEW));var sa=oa()?ga:0;if(ra)sa=z;this._width=oa()?0:da;ja=true;la(this,sa);}function la(pa,qa){var ra=o.getRight()+o.getLeft();ra=ra||qa||0;var sa=k.getViewportWithoutScrollbarDimensions().width-ra,ta=Math.round(Math.max(0,sa/2-aa/2));sa=aa+ta-ba;sa-=ca;sa=Math.max(ea,Math.min(da,sa));if(!isNaN(sa)&&pa._width!==sa){pa._width=sa;var ua=Math.round(sa/(1+fa)),va=sa-ua;pa.masterChanged(va);pa.detailChaned(ua);if(oa()){var wa=sa+ba;ma(function(){if(ia){document.body.className=ia;ia='';}na(wa+'px');h.removeClass(document.body,"_5uj5");ja&&p.detailDOMChanged();ja=false;},ia);}}}function ma(pa,qa){qa&&h.addClass(document.documentElement,"_5uj6");v(pa);qa&&w(h.removeClass.bind(null,document.documentElement,"_5uj6"),1000);}function na(pa){m.set(j.find(document,"div._uaw"),'width',pa);m.set(r('globalContainer'),'width',pa);}function oa(){if(!ha)ha=h.hasClass(document.body,"_6nw");return ha;}i.registerHandler(function(pa,qa,ra,sa){function ta(ua){return oa()&&u(new n(ua));}if(ta(sa)){ia=qa;return true;}else if(ta(ra)){ma(function(){pa.className=qa;na('');},true);return true;}});e.exports=ka;},null);
__d("ClickRefUtils",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={get_intern_ref:function(h){if(!!h){var i={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,searchBarClickRef:1};for(var j=h;j&&j!=document.body;j=j.parentNode){if(!j.id||typeof j.id!=='string')continue;if(j.id.substr(0,8)=='pagelet_')return j.id.substr(8);if(j.id.substr(0,8)=='box_app_')return j.id;if(i[j.id])return j.id;}}return '-';},get_href:function(h){var i=(h.getAttribute&&(h.getAttribute('ajaxify')||h.getAttribute('data-endpoint'))||h.action||h.href||h.name);return typeof i==='string'?i:null;},should_report:function(h,i){if(i=='FORCE')return true;if(i=='INDIRECT')return false;return h&&(g.get_href(h)||(h.getAttribute&&h.getAttribute('data-ft')));}};e.exports=g;},null);
__d("setUECookie",["Env"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){if(!g.no_cookies)document.cookie="act="+encodeURIComponent(i)+"; path=/; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');}e.exports=h;},null);
__d("ClickRefLogger",["Arbiter","Banzai","ClickRefUtils","Env","ScriptPath","SessionName","Vector","$","collectDataAttributes","copyProperties","ge","pageID","setUECookie"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();var t={delay:0,retry:true};function u(y){if(!q('content'))return [0,0,0,0];var z=n('content'),aa=m.getEventPosition(y);return [aa.x,aa.y,z.offsetLeft,z.clientWidth];}function v(y,z,event,aa){var ba='r',ca=[0,0,0,0],da,ea;if(!!event){da=event.type;if(da=='click'&&q('content'))ca=u(event);var fa=0;event.ctrlKey&&(fa+=1);event.shiftKey&&(fa+=2);event.altKey&&(fa+=4);event.metaKey&&(fa+=8);if(fa)da+=fa;}if(!!z)ea=i.get_href(z);var ga=o(!!event?(event.target||event.srcElement):z,['ft','gt']);p(ga.ft,aa.ft||{});p(ga.gt,aa.gt||{});if(typeof(ga.ft.ei)==='string')delete ga.ft.ei;var ha=[y._ue_ts,y._ue_count,ea||'-',y._context,da||'-',i.get_intern_ref(z),ba,a.URI?a.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,ga].concat(ca).concat(r).concat(k.getScriptPath());return ha;}g.subscribe("ClickRefAction/new",function(y,z){if(i.should_report(z.node,z.mode)){var aa=v(z.cfa,z.node,z.event,z.extra_data);s(z.cfa.ue);var ba=[l.getName(),Date.now(),'act'];h.post('click_ref_logger',Array.prototype.concat(ba,aa),t);}});function w(y){function z(ha){var ia='';for(var ja=0;ja<ha.length;ja++)ia+=String.fromCharCode(1^ha.charCodeAt(ja));return ia;}function aa(ha,ia,ja,ka){var la=ia[ja];if(la&&ha&&la in ha)if(ja+1<ia.length){aa(ha[la],ia,ja+1,ka);}else{var ma=ha[la],na=function(){setTimeout(ka.bind(null,arguments));return ma.apply(this,arguments);};na.toString=ma.toString.bind(ma);Object.defineProperty(ha,la,{configurable:false,writable:true,value:na});}}var ba={},ca={},da=false;function ea(ha,ia){if(ca[ha])return;ca[ha]=ba[ha]=1;}var fa=y[z('jiri')];if(fa){var ga=[];z(fa).split(',').map(function(ha,ia){var ja=ha.substring(1).split(':'),ka;switch(ha.charAt(0)){case '1':ka=new RegExp('\\b('+ja[0]+')\\b','i');ga.push(function(la){var ma=ka.exec(Object.keys(window));if(ma)ea(ia,''+ma);});break;case '2':ka=new RegExp(ja[0]);aa(window,ja,2,function(la){var ma=la[ja[1]];if(typeof ma==='string'&&ka.test(ma))ea(ia,ha);});break;case '3':aa(window,ja,0,function(){for(var la=ga.length;la--;)ga[la]();var ma=Object.keys(ba);if(ma.length){ba={};setTimeout(h[z('qnru')].bind(h,z('islg'),{m:''+ma}),5000);}});break;case '4':da=true;break;}});}}try{w(j);}catch(x){}},null);
__d("PixelRatio",["Arbiter","Cookie","PixelRatioConst","Run"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=i.cookieName,l,m;function n(){return window.devicePixelRatio||1;}function o(){h.set(k,n());}function p(){h.clear(k);}function q(){var s=n();if(s!==l){o();}else p();}var r={startDetecting:function(s){l=s||1;p();if(m)return;m=[g.subscribe('pre_page_transition',q)];j.onBeforeUnload(q);}};e.exports=r;},null);
__d("swfobject",["AsyncRequest","Bootloader","CSS","copyProperties","htmlSpecialChars"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();if(typeof l=="undefined")var l={};if(typeof l.util=="undefined")l.util={};if(typeof l.SWFObjectUtil=="undefined")l.SWFObjectUtil={};l.SWFObject=function(n,o,p,q,r,s,t,u,v,w){if(!document.getElementById)return;this.DETECT_KEY=w?w:'detectflash';this.skipDetect=l.util.getRequestParameter(this.DETECT_KEY);this.params={};this.variables={};this.attributes=[];this.fallback_html='';this.fallback_js_fcn=function(){};if(n)this.setAttribute('swf',n);if(o)this.setAttribute('id',o);if(p)this.setAttribute('width',p);if(q)this.setAttribute('height',q);this.installedVer=l.SWFObjectUtil.getPlayerVersion();if(r){if(!(r instanceof Array))r=[r];var x;r.forEach(function(aa){x=new l.PlayerVersion(aa.toString().split('.'));if(x.major==this.installedVer.major){this.setAttribute('version',x);return;}else if(!this.getAttribute('version')||x.major<this.getAttribute('version').major)this.setAttribute('version',x);}.bind(this));}if(!window.opera&&document.all&&this.installedVer.major>7)if(!l.unloadSet){l.SWFObjectUtil.prepUnload=function(){var aa=function(){},ba=function(){};window.attachEvent("onunload",l.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",l.SWFObjectUtil.prepUnload);l.unloadSet=true;}if(s)this.addParam('bgcolor',s);var y=t?t:'high';this.addParam('quality',y);this.setAttribute('useExpressInstall',false);this.setAttribute('doExpressInstall',false);var z=(u)?u:window.location;this.setAttribute('xiRedirectUrl',z);this.setAttribute('redirectUrl','');if(v)this.setAttribute('redirectUrl',v);};l.SWFObject.ieWorkaroundApplied=false;l.SWFObject.ensureIEWorkaroundAttached=function(){if(!l.SWFObject.ieWorkaroundApplied&&document.attachEvent){l.SWFObject.ieWorkaroundApplied=true;document.attachEvent('onpropertychange',l.SWFObject.onDocumentPropertyChange);}};l.SWFObject.onDocumentPropertyChange=function(event){if(event.propertyName=="title"){var n=document.title;if(n!=null&&n.indexOf('#!')!=-1){n=n.substring(0,n.indexOf('#!'));document.title=n;}}};j(l.SWFObject.prototype,{useExpressInstall:function(n){this.xiSWFPath=!n?"/swf/expressinstall.swf":n;this.setAttribute('useExpressInstall',true);},setAttribute:function(n,o){this.attributes[n]=o;},getAttribute:function(n){return this.attributes[n]||"";},addParam:function(n,o){this.params[n]=o;},getParams:function(){return this.params;},addVariable:function(n,o){this.variables[n]=o;},getVariable:function(n){return this.variables[n]||"";},getVariables:function(){return this.variables;},getVariablePairs:function(){var n=[],o,p=this.getVariables();for(o in p)n[n.length]=o+"="+p[o];return n.join('&');},getSWFHTML:function(){var n,o,p;if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute('swf',this.xiSWFPath);}o={type:'application/x-shockwave-flash',src:this.getAttribute('swf'),width:this.getAttribute('width'),height:this.getAttribute('height'),style:this.getAttribute('style')||'display: block;',id:this.getAttribute('id'),name:this.getAttribute('id')};var q=this.getParams();for(var r in q)o[r]=q[r];p=this.getVariablePairs();if(p)o.flashvars=p;n=m('embed',o,null);}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute('swf',this.xiSWFPath);}o={id:this.getAttribute('id'),classid:'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',width:this.getAttribute('width'),height:this.getAttribute('height'),style:this.getAttribute('style')||'display: block;'};var s=m('param',{name:'movie',value:this.getAttribute('swf')},null),q=this.getParams();for(var r in q)s+=m('param',{name:r,value:q[r]},null);p=this.getVariablePairs();if(p)s+=m('param',{name:'flashvars',value:p},null);n=m('object',o,s);}return n;},write:function(n){if(this.getAttribute('useExpressInstall')){var o=new l.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(o)&&!this.installedVer.versionIsValid(this.getAttribute('version'))){this.setAttribute('doExpressInstall',true);this.addVariable("MMredirectURL",escape(this.getAttribute('xiRedirectUrl')));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}var p=(typeof n=='string')?document.getElementById(n):n;if(!p)return false;i.addClass(p,'swfObject');p.setAttribute('data-swfid',this.getAttribute('id'));if(this.skipDetect||this.getAttribute('doExpressInstall')||this.installedVer.versionIsValid(this.getAttribute('version'))){l.SWFObject.ensureIEWorkaroundAttached();p.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute('redirectUrl')!="")document.location.replace(this.getAttribute('redirectUrl'));var q=this.getAttribute('version').major+'.'+this.getAttribute('version').minor+'.'+this.getAttribute('version').release+'.'+this.getAttribute('version').build,r=this.installedVer.major+'.'+this.installedVer.minor+'.'+this.installedVer.release+'.'+this.installedVer.build;this.fallback_js_fcn(r,q);p.innerHTML=this.fallback_html;}return false;}});l.SWFObjectUtil.getPlayerVersion=function(){var n=new l.PlayerVersion([0,0,0,0]),o;if(navigator.plugins&&navigator.mimeTypes.length){for(var p=0;p<navigator.plugins.length;p++)try{var r=navigator.plugins[p];if(r.name=='Shockwave Flash'){o=new l.PlayerVersion(r.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+(r|d)|\s+b[0-9]+)/,".").split("."));if(typeof n=='undefined'||o.major>n.major||(o.major==n.major&&(o.minor>n.minor||(o.minor==n.minor&&(o.release>n.release||(o.release==n.release&&o.build>n.build))))))n=o;}}catch(q){}}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var s=1,t=3;while(s)try{t++;s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+t);n=new l.PlayerVersion([t,0,0]);}catch(u){s=null;}}else{try{var s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(v){try{var s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");n=new l.PlayerVersion([6,0,21]);s.AllowScriptAccess="always";}catch(w){if(n.major==6)return n;}try{s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(x){}}if(s!=null)n=new l.PlayerVersion(s.GetVariable("$version").split(" ")[1].split(","));}return n;};l.PlayerVersion=function(n){this.major=n[0]!=null?parseInt(n[0],10):0;this.minor=n[1]!=null?parseInt(n[1],10):0;this.release=n[2]!=null?parseInt(n[2],10):0;this.build=n[3]!=null?parseInt(n[3],10):0;};l.PlayerVersion.prototype.versionIsValid=function(n){if(this.major<n.major)return false;if(this.major>n.major)return true;if(this.minor<n.minor)return false;if(this.minor>n.minor)return true;if(this.release<n.release)return false;if(this.release>n.release)return true;if(this.build<n.build)return false;return true;};l.util={getRequestParameter:function(n){var o=document.location.search||document.location.hash;if(n==null)return o;if(o){var p=o.substring(1).split("&");for(var q=0;q<p.length;q++)if(p[q].substring(0,p[q].indexOf("="))==n)return p[q].substring((p[q].indexOf("=")+1));}return "";}};l.SWFObjectUtil.cleanupSWFs=function(){var n=document.getElementsByTagName("OBJECT");for(var o=n.length-1;o>=0;o--){n[o].style.display='none';for(var p in n[o])if(typeof n[o][p]=='function')n[o][p]=function(){};}};if(!document.getElementById&&document.all)document.getElementById=function(n){return document.all[n];};l.spawn_flash_update_dialog=function(){new g().setURI('/ajax/flash_update_dialog.php').setMethod('GET').setReadOnly(true).send();};l.showFlashErrorDialog=function(n,o){h.loadModules(["ErrorDialog"],function(p){p.show(n,o);});};function m(n,o,p){var q=/^[A-Za-z0-9\-]+$/;if(!n.match(q))throw new Error('Invalid tag '+n);var r='<'+n;for(var s in o){if(!s.match(q))throw new Error('Invalid attr '+s);r+=' '+s+'="'+k(o[s])+'"';}if(p===null){return r+'/>';}else return r+'>'+p+'</'+n+'>';}e.exports=a.deconcept||l;},null);
__d("SoundPlayer",["Arbiter","URI","createArrayFromMixed","swfobject"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=b('swfobject').SWFObject,k={},l=null,m=false,n='so_sound_player',o='/swf/SoundPlayer.swf?v=1',p='10.0.22.87',q=null;function r(z){var aa=new h(z);if(!aa.getDomain())return new h(window.location.href).setPath(aa.getPath()).toString();return z;}function s(z){var aa=new h(z).getPath();if(/\.mp3$/.test(aa))return 'audio/mpeg';if(/\.og[ga]$/.test(aa))return 'audio/ogg';return '';}function t(){if(!q){var z=document.createElement('audio');if(!z||!z.canPlayType)return null;z.setAttribute('preload','auto');document.body.appendChild(z);q=z;}return q;}function u(){var z=document[n]||window[n];if(z)if(!z.playSound&&z.length)z=z[0];return (z&&z.playSound&&z.loopSound)?z:null;}function v(){return m;}function w(z,aa,ba){l={path:z,sync:aa,loop:ba};}function x(){m=true;if(l){var z=u();if(l.loop){z.loopSound(l.path,l.sync);}else z.playSound(l.path,l.sync);}}var y={init:function(z){z=i(z);var aa;for(var ba=0;ba<z.length;++ba){aa=z[ba];if(k[aa])return;}var ca=t();for(ba=0;ca&&ba<z.length;++ba){aa=z[ba];if(ca.canPlayType(aa)){k[aa]=true;return;}}k['audio/mpeg']=true;if(u())return;try{g.registerCallback(x,['sound/player_ready','sound/ready']);var ea=document.createElement('div');ea.id='sound_player_holder';document.body.appendChild(ea);var fa=new j(o,n,'1px','1px',[p],'#ffffff');fa.addParam('allowscriptaccess','always');fa.addParam('wmode','transparent');fa.addVariable('swf_id',n);fa.fallback_html=' ';fa.write(ea.id);window[n]=fa;g.inform('sound/player_ready');}catch(da){}},play:function(z,aa){z=i(z);var ba=t(),ca,da;for(var ea=0;ba&&ea<z.length;++ea){ca=z[ea];da=s(ca);if(!ba.canPlayType(da))continue;y.init([da]);ba.src=r(ca);if(aa){ba.setAttribute('loop','');}else ba.removeAttribute('loop');ba.play();return;}for(ea=0;ea<z.length;++ea){ca=r(z[ea]);da=s(ca);if(da!='audio/mpeg')continue;y.init([da]);var fa=u();if(!v()){w(ca,true,aa);return;}else if(fa){if(aa){fa.loopSound(ca,true);}else fa.playSound(ca,true);return;}}},stop:function(z){z=i(z);for(var aa=0;aa<z.length;++aa){var ba=r(z[aa]),ca=t(),da=u();if(ca&&ca.src==ba){ca.pause();ca.removeAttribute('src');}else da&&da.stopSound(ba);}}};e.exports=y;},null);
__d("SoundSynchronizer",["SoundPlayer","WebStorage","createArrayFromMixed"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j='fb_sounds_playing3';function k(){var o=h.getLocalStorage();if(o)try{var q=o[j];if(q){q=JSON.parse(q);if(Array.isArray(q))return q;}}catch(p){}return [];}function l(o){var p=h.getLocalStorage();if(p){var q=k();q.push(o);while(q.length>5)q.shift();try{p[j]=JSON.stringify(q);}catch(r){}}}function m(o){return k().some(function(p){return p===o;});}var n={play:function(o,p,q){o=i(o);p=p||(o[0]+Math.floor(Date.now()/1000));if(m(p))return;g.play(o,q);l(p);},isSupported:function(){return !!h.getLocalStorage();}};e.exports=n;},null);
__d("SoundRPC",["Event","SoundSynchronizer"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(k,l,m){h.play(k,l,m);}var j={playLocal:i,playRemote:function(k,l,m,n){var o={paths:l,sync:m,loop:n};k.postMessage(JSON.stringify(o),'*');},supportsRPC:function(){return !!window.postMessage;},_listen:function(){g.listen(window,'message',function(k){if(!/\.facebook.com$/.test(k.origin))return;var l=JSON.parse(k.data||'{}');i(l.paths,l.sync,l.loop);});}};e.exports=j;},null);
__d("Sound",["SoundInitialData","SoundPlayer","SoundRPC","SoundSynchronizer","URI","UserAgent_DEPRECATED","isFacebookURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=null,o={init:function(s){if(!n)h.init(s);},play:function(s,t,u){if(n){i.playRemote(n.contentWindow,s,t,false);}else i.playLocal(s,t,u);},stop:function(s){if(!n)h.stop(s);}},p=new k(location.href);if(p.getSubdomain()&&p.getSubdomain()!=='www')p.setSubdomain('www');var q=p.getDomain();function r(){if(l.ie()<9)return false;if(g.RPC_DISABLED)return false;return j.isSupported()&&i.supportsRPC();}if(m(p)&&location.host!==q&&r()){n=document.createElement('iframe');n.setAttribute('src','//'+q+'/sound_iframe.php');n.style.display='none';document.body.appendChild(n);}e.exports=o;},null);
__d("UserActionHistory",["Arbiter","ClickRefUtils","ScriptPath","throttle","WebStorage"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={click:1,submit:1},m=false,n={log:[],len:0},o=j.acrossTransitions(function(){try{m._ua_log=JSON.stringify(n);}catch(r){m=false;}},1000);function p(){var r=k.getSessionStorage();if(r){m=r;m._ua_log&&(n=JSON.parse(m._ua_log));}else m=false;n.log[n.len%10]={ts:Date.now(),path:'-',index:n.len,type:'init',iref:'-'};n.len++;g.subscribe("UserAction/new",function(s,t){var u=t.ua,v=t.node,event=t.event;if(!event||!(event.type in l))return;var w={path:i.getScriptPath(),type:event.type,ts:u._ue_ts,iref:h.get_intern_ref(v)||'-',index:n.len};n.log[n.len++%10]=w;m&&o();});}function q(){return n.log.sort(function(r,s){return (s.ts!=r.ts)?(s.ts-r.ts):(s.index-r.index);});}p();e.exports={getHistory:q};},null);
__d("PerfXLogger",["Arbiter","LogBuffer","PageEvents","PerfXFlusher","performance"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={},m='BigPipe/init',n='tti_bigpipe',o={},p,q={_listenersSetUp:false,_setupListeners:function(){if(this.listenersSetUp)return;this._subscribeToBigPipeInit(g);this._subscribeToFullPageE2E(g);this.listenersSetUp=true;},_init:function(r,s,t){l[r]={perfx_page:s,perfx_page_type:t};this._setupListeners();},initForPageLoad:function(r,s,t){p=r;this._init(r,s,t);},initForQuickling:function(r,s,t,u){this._init(r,s,t);o[r]=u;},_subscribeToBigPipeInit:function(r){r.subscribe(m,function(event,s){var t=s.arbiter;this._subscribeToTTI(t);this._subscribeToAsyncTransitionE2E(t);}.bind(this));},_subscribeToTTI:function(r){r.subscribe(n,function(event,s){var t=s.lid;if(!(t in l))return;l[t].tti=s.ts;});},_subscribeToFullPageE2E:function(r){r.subscribe(i.BIGPIPE_ONLOAD,function(event,s){if(!(p in l))return;l[p].e2e=s.ts;this._finishPageload(p);}.bind(this));},_subscribeToAsyncTransitionE2E:function(r){r.subscribe(i.AJAXPIPE_ONLOAD,function(event,s){var t=s.lid;if(!(t in l))return;l[t].e2e=s.ts;this._finishQuickling(t);}.bind(this));},_generatePayload:function(r,s){var t=l[r];if(t.fbtrace_id){t.js_tti=this._getJSTime(s,t.tti);t.js_e2e=this._getJSTime(s,t.e2e);}var u=Object.assign({},t);if(!this._adjustAndValidateValues(u,s))return;return u;},_getPageloadPayload:function(r){if(!(r in l))return;if(!k.timing){delete l[r];return;}var s=k.timing.navigationStart;return this._generatePayload(r,s);},_getQuicklingPayload:function(r){if(!(r in o)||!(r in l))return;if(!k.timing||!k.getEntriesByName){delete o[r];delete l[r];return;}var s=o[r],t=k.getEntriesByName(s);if(t.length===0)return;var u=t[0],v=k.timing.navigationStart+u.startTime;return this._generatePayload(r,v);},_finishPageload:function(r){var s=this._getPageloadPayload(r);if(s)this._log(r,s);},_finishQuickling:function(r){var s=this._getQuicklingPayload(r);if(s)this._log(r,s);},_log:function(r,s){j.flush(r,s);},_adjustAndValidateValues:function(r,s){var t=['e2e','tti'],u=true;for(var v=0;v<t.length;v++){var w=t[v],x=r[w];if(!x){u=false;break;}r[w]=x-s;}return u;},getPayload:function(r){if(!(r in l))return;var s=l[r].perfx_page_type;if(s==="normal"){return this._getPageloadPayload(r);}else if(s==="quickling")return this._getQuicklingPayload(r);},setFBTraceID:function(r,s){if(r in l)l[r].fbtrace_id=s;},_getJSTime:function(r,s){if(r>s)return 0;var t=0;h.read('time_slice').forEach(function(u){var v=u.begin,w=u.end;if(v>w)return;if(r<=v&&w<=s){t+=w-v;}else if(v<=r&&s<=w){t+=s-r;}else if(v<=r&&r<=w){t+=w-r;}else if(v<=s&&s<=w)t+=s-v;});return t;}};e.exports=q;},null);
__d("KappaWrapper",["AsyncSignal","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=false;e.exports={forceStart:function(j,k,l){var m=0,n=function(){new g('/si/kappa/',{Ko:"a"}).send();if(++m<j)h(n,(k*1000));};h(n,((k+l)*1000));},start:function(j,k,l){if(!i){i=true;this.forceStart(j,k,l);}}};},null);
__d("Chromedome",["fbt"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();f.start=function(h){if(h.off||top!==window||!/(^|\.)facebook\.com$/.test(document.domain))return;var i=h.stop||g._("Stop!"),j=h.text||g._("This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or \"hack\" someone's account, it is a scam and will give them access to your Facebook account."),k=h.more||g._("For more information, see {url}.",[g.param("url",'https://www.facebook.com/selfxss')]);if((window.chrome||window.safari)&&!h.textonly){var l='font-family:helvetica; font-size:20px; ';[[i,h.c1||l+'font-size:50px; font-weight:bold; '+'color:red; -webkit-text-stroke:1px black;'],[j,h.c2||l],[k,h.c3||l],['','']].map(function(r){setTimeout(console.log.bind(console,'\n%c'+r[0],r[1]));});}else{var m=['',' .d8888b.  888                       888','d88P  Y88b 888                       888','Y88b.      888                       888',' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P','Y88b  d88P Y88b.  Y88..88P 888 d88P',' "Y8888P"   "Y888  "Y88P"  88888P"   888','                           888','                           888','                           888'],n=(''+j).match(/.{35}.+?\s+|.+$/g),o=Math.floor(Math.max(0,(m.length-n.length)/2));for(var p=0;p<m.length||p<n.length;p++){var q=m[p];m[p]=q+new Array(45-q.length).join(' ')+(n[p-o]||'');}console.log('\n\n\n'+m.join('\n')+'\n\n'+k+'\n');return;}};},null);