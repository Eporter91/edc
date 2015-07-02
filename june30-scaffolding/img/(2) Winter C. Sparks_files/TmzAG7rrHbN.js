/*!CK:821166602!*//*1435266901,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["nGI+M"]); }

__d("TrendingEvent",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={TAG_IMPRESSION:"tag_impression",TAG_FEED_LOAD:"tag_feed_load",TAG_FEED_LONG_VIEW:"tag_feed_long_view",TAG_HIDE:"tag_hide",TOPIC_HEADER_TAPPED:"topic_header_tapped",HOVERCARD_LOAD:"hovercard_load",HOVERCARD_UNLOAD:"hovercard_unload",HOVERCARD_ARTICLE_CLICK:"hovercard_article_click",HOVERCARD_FEED_CLICK:"hovercard_feed_click",HOVERCARD_CONTEXT_CLICK:"hovercard_context_click",OBJECT_CLICK:"object_click",OBJECT_OUTBOUND_CLICK:"object_outbound_click",OBJECT_LIKE:"object_like",OBJECT_COMMENT:"object_comment",OBJECT_SHARE:"object_share",OBJECT_PAGE_LIKE:"object_page_like",OBJECT_FOLLOW:"object_follow",OBJECT_HIDE:"object_hide",PAGINATE:"paginate",TOPIC_SHARE:"topic_share",CATEGORY_HEADER_CLICKED:"category_header_clicked"};},null);
__d("TrendingExternalCategory",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={ALL_NEWS:0,POLITICS:1,BUSINESS:2,SCIENCE_AND_TECHNOLOGY:3,SPORTS:4,ENTERTAINMENT:5,FRIEND_TRENDS:6};},null);
__d("TrendingLocation",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={FBFEED_TOPIC_PIVOT:"ftp",FBFEED_TRENDING_TOPIC_PIVOT:"fttp",IOS_TRENDING_DASHBOARD_IN_BOOKMARK:"ios_trending_dashboard_in_bookmark",IOS_TRENDING_INTERSTITIAL:"ios_trending_interstitial",MSITE_PERMALINK:"mp",MSITE_QP:"mq",MSITE_HASHTAG_REDIRECTION:"mhr",MSITE_CARD_PIVOT:"mcp",MSITE_FEED_TOPIC_PIVOT:"mftp",MSITE_FEED_TRENDING_TOPIC_PIVOT:"mfttp",MSITE_NEWS_DASHBOARD:"mnd",MSITE_NEWS_MODULE:"mnm",MSITE_LIVE_EVENT:"mle",MSITE_PAGE_REDIRECTION:"mpr",MSITE_RELATED_TOPICS:"mrt",MSITE_ADS:"ma",MSITE_SEARCH_SPORT_MATCH_MODULE:"mssmm",WEB_FEED_TOPIC_PIVOT:"wftp",WEB_FEED_TRENDING_TOPIC_PIVOT:"wfttp",OLD_FEED_TOPIC_PIVOT:"oftp",OLD_FEED_TRENDING_TOPIC_PIVOT:"ofttp",WWW_PERMALINK:"wp",WWW_QP:"wq",WWW_HASHTAG_REDIRECTION:"whr",WWW_HIDDEN_RHC_TRENDING:"whrt",WWW_HOME_FEED_RHC_TRENDING:"whfrt",WWW_POST_LIKE_TOPIC_CHAINING:"wpltc",WWW_TOPIC_FEED_RHC_TRENDING:"wtfrt",WWW_POST_SEARCH_RHC_TRENDING:"wpsrt",WWW_PAGE_FEED_RHC_TRENDING:"wpfrt",WWW_BROWSE_RHC_TRENDING:"wbrt",WWW_BROWSE_LATEST_POSTS_TAB:"wblpt",WWW_WORLDCUP_RHC_TRENDING:"wwcrt",WWW_LIVE_EVENT:"wle",WWW_PAGE_REDIRECTION:"wpr",WWW_ADS:"wa",WWW_SEARCH_SPORT_MATCH_MODULE:"wssmm",UNKNOWN:"unknown",IOS_NEWS_FEED:"ios_news_feed",MTOUCH_NEWS_FEED:"mtouch_news_feed",ANDROID_NULL_STATE:"android_null_state",IOS_GRAPH_SEARCH_NULL_STATE:"ios_graph_search_null_state",MSITE_NEWS_NON_GS_NULL_STATE:"mnngns",MSITE_NEWS_NULL_STATE:"mnns",MSITE_LATEST_POSTS_TAB:"mlpt",SEARCH_TRENDING_MODULE:"stm",IOS_TODAY_MAIN:"ios_today_main",IOS_TODAY_SEE_MORE:"ios_today_see_more",IOS_STORY_TOPIC_HEADER:"ios_story_topic_header",TOPIC_SHARE:"share",TOPIC_MOBILE_SHARE:"mobile_share"};},null);
__d("TrendingCategoriesIconUnitCallback",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g=null,h={register:function(i){g=i;},callback:function(i,j){g.setCategoryList(i,j);}};e.exports=h;},null);
__d("XPubcontentTrendingCategoriesFetchListController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/trending\/categories\/fetch_list\/",{category:{type:"Enum",required:true,enumType:0},source:{type:"String",required:true},topic_ids_seen:{type:"IntVector",required:true}});},null);
__d("TrendingCategoriesIconUnit",["AsyncRequest","CSS","Event","TrendingCategoriesIconUnitCallback","XPubcontentTrendingCategoriesFetchListController","XPubcontentTrendingCategoriesSaveSelectionController","XPubcontentTrendingReplaceTrendsController","cx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();function p(q){"use strict";this.$TrendingCategoriesIconUnit0=q.categoryIconMap;this.$TrendingCategoriesIconUnit1=q.categoryListMap;this.$TrendingCategoriesIconUnit2=q.categoryHeaderMap;this.$TrendingCategoriesIconUnit3=q.loadingBar;this.$TrendingCategoriesIconUnit4=q.selectedCategoryId;this.$TrendingCategoriesIconUnit5=q.selectedCategoryId;this.$TrendingCategoriesIconUnit6=q.source;this.$TrendingCategoriesIconUnit7=q.hideSeeMore;this.$TrendingCategoriesIconUnit8=q.enableIconSeeMore;this.$TrendingCategoriesIconUnit9=q.rememberCategorySelection;this.$TrendingCategoriesIconUnita=q.iconsAtTopDesign;this.$TrendingCategoriesIconUnitb=[];this.$TrendingCategoriesIconUnitc=this.$TrendingCategoriesIconUnit1[this.$TrendingCategoriesIconUnit4].getHeight();j.register(this);for(var r in this.$TrendingCategoriesIconUnit0)this.$TrendingCategoriesIconUnitd(this.$TrendingCategoriesIconUnit0[r]);this.$TrendingCategoriesIconUnite(q.refreshSeconds,q.isExpanded);}p.prototype.setCategoryList=function(q,r){"use strict";this.$TrendingCategoriesIconUnit1[r]=q;if(r===this.$TrendingCategoriesIconUnit4){if(this.$TrendingCategoriesIconUnit3)h.hide(this.$TrendingCategoriesIconUnit3);this.$TrendingCategoriesIconUnit1[r].showItems();this.$TrendingCategoriesIconUnitc=this.$TrendingCategoriesIconUnit1[r].getHeight();}};p.prototype.$TrendingCategoriesIconUnitd=function(q){"use strict";var r=q.getCategoryId();o(i.listen(q.getRoot(),'click',function(){var s=r===this.$TrendingCategoriesIconUnit5&&this.$TrendingCategoriesIconUnit8;if(s){if(r===this.$TrendingCategoriesIconUnit4&&!this.$TrendingCategoriesIconUnit7)return;if(this.$TrendingCategoriesIconUnit7)h.removeClass(this.$TrendingCategoriesIconUnit0[r].getRoot(),"_tuc");this.$TrendingCategoriesIconUnit1[r].fetchExtraItems();}if(r===this.$TrendingCategoriesIconUnit4)return;this.$TrendingCategoriesIconUnitf(r);this.$TrendingCategoriesIconUnit0[this.$TrendingCategoriesIconUnit4].unselect();if(this.$TrendingCategoriesIconUnit1[this.$TrendingCategoriesIconUnit4]){this.$TrendingCategoriesIconUnitc=this.$TrendingCategoriesIconUnit1[this.$TrendingCategoriesIconUnit4].getHeight();this.$TrendingCategoriesIconUnit1[this.$TrendingCategoriesIconUnit4].hideItems();}if(!this.$TrendingCategoriesIconUnita){h.hide(this.$TrendingCategoriesIconUnit2[this.$TrendingCategoriesIconUnit4]);h.show(this.$TrendingCategoriesIconUnit2[r]);}this.$TrendingCategoriesIconUnit0[r].select();this.$TrendingCategoriesIconUnit4=r;if(this.$TrendingCategoriesIconUnit1[r]){if(this.$TrendingCategoriesIconUnit3)h.hide(this.$TrendingCategoriesIconUnit3);this.$TrendingCategoriesIconUnit1[r].showItems();this.$TrendingCategoriesIconUnitc=this.$TrendingCategoriesIconUnit1[r].getHeight();return;}this.$TrendingCategoriesIconUnit3.style.height=this.$TrendingCategoriesIconUnitc;h.show(this.$TrendingCategoriesIconUnit3);if(this.$TrendingCategoriesIconUnitb[r])return;this.$TrendingCategoriesIconUnitb[r]=true;var t=this.$TrendingCategoriesIconUnit1[this.$TrendingCategoriesIconUnit5],u=t.getCategoryItemInfo(),v=k.getURIBuilder().setEnum('category',r).setString('source',this.$TrendingCategoriesIconUnit6).setIntVector('topic_ids_seen',u.visibleTopicIds).getURI();new g().setURI(v).send();}.bind(this)));};p.prototype.$TrendingCategoriesIconUnite=function(q,r){"use strict";var s=q*1000;setTimeout(function(){var t=(m.getURIBuilder()).setBool('is_expanded',r).getURI();new g(t).send();},s);};p.prototype.$TrendingCategoriesIconUnitf=function(q){"use strict";if(!this.$TrendingCategoriesIconUnit9)return;var r=l.getURIBuilder().setEnum('category',q).getURI();new g().setURI(r).send();};e.exports=p;},null);
__d("XPubcontentTrendingCategoriesInsertItemController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/trending\/categories\/hide_options\/",{num_removed_topics:{type:"Int",defaultValue:0},trending_topic_id:{type:"Int",required:true},topic_ids:{type:"IntVector",defaultValue:[]},category:{type:"Enum",required:true,enumType:0}});},null);
__d("TrendingCategoriesRHCHide",["AsyncRequest","CSS","DOM","DOMQuery","Event","Parent","TrendingRHCLogger","URI","XPubcontentTrendingHideConfirmController","XPubcontentTrendingCategoriesInsertItemController","csx","cx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();var t=[],u=[],v=false,w=['webkitAnimationEnd','animationend','mozAnimationEnd','oAnimationEnd','MSAnimationEnd'];function x(aa,ba){var ca=j.scry(aa,"._5my2"),da=ca.filter(function(fa){var ga=Number(fa.getAttribute('data-position'));return ga>=ba;}),ea=[];da.forEach(function(fa){var ga=Number(fa.getAttribute('data-position'));fa.setAttribute('data-position',ga-1);var ha=j.scry(fa,"._7ge");ha.forEach(function(ia){var ja=new n(ia.getAttribute('href')).addQueryData('position',ga-1);ea.push({link:ia,uri:ja.toString()});});});ea.forEach(function(fa){var ga=fa.link;ga.setAttribute('href',fa.uri);});}function y(aa,ba,ca){var da=j.find(aa,"^._2snq"),ea=j.find(aa,"^._5my2"),fa=i.create('div',{className:"_4_nj"}),ga=Number(ea.getAttribute('data-position'));x(da,ga);t[ca].showExtraItem();t[ca].removeItem(ea);i.insertBefore(ea,fa);w.forEach(function(event){fa.addEventListener(event,function(){h.removeClass(fa,"_4_nj");});});var ha=(o.getURIBuilder()).setInt('reason',aa.firstChild.value).setInt('hidden_topic_id',ba).setInt('position',ga);if(m.getSource())ha.setString('source',m.getSource());if(m.getQueryID())ha.setInt('trqid',m.getQueryID());var ia=ha.getURI();new g().setURI(ia).setRelativeTo(aa).send();}var z={addCategoryList:function(aa,ba){t[ba]=aa;},confirmHide:function(aa,ba,ca){var da=false;s(k.listen(aa,'click',function(){setTimeout(function(){if(da)return;da=true;y(aa,ba,ca,false);},100);}));},onHideReasonClicked:function(aa,ba){var ca=j.find(aa,'input[name="trending_hide_reason"]'),da=parseInt(ca.getAttribute('data-topicid'),10);if(u[da])return;u[da]=true;setTimeout(function(){y(aa,da,ba);u[da]=false;},100);},listenForHide:function(aa,ba,ca){s(k.listen(aa,'click',function(){var da=j.find(aa,"^._5my2"),ea=j.find(da,"._4_nl"),fa=j.find(da,"._4_nm");h.hide(fa);h.show(ea);if(!v){if(t[ca]==null)return;v=true;var ga=t[ca].getCategoryItemInfo(),ha=ga.visibleTopicIds.concat(ga.hiddenTopicIds,ga.removedTopicIds),ia=ga.removedTopicIds.length,ja=(p.getURIBuilder()).setInt('trending_topic_id',ba).setIntVector('topic_ids',ha).setInt('num_removed_topics',ia).setEnum('category',ca).getURI();new g().setURI(ja).setRelativeTo(aa).setHandler(function(){v=false;}).send();}}));},onHideClicked:function(aa,ba){var ca=parseInt(aa.getAttribute('data-topicid'),10),da=j.find(aa,"^._5my2"),ea=j.find(da,"._4_nl"),fa=j.find(da,"._4_nm");h.hide(fa);h.show(ea);if(!v){if(t[ba]==null)return;v=true;var ga=t[ba].getCategoryItemInfo(),ha=ga.visibleTopicIds.concat(ga.hiddenTopicIds,ga.removedTopicIds),ia=ga.removedTopicIds.length,ja=(p.getURIBuilder()).setInt('trending_topic_id',ca).setIntVector('topic_ids',ha).setInt('num_removed_topics',ia).setEnum('category',ba).getURI();new g().setURI(ja).setRelativeTo(aa).setHandler(function(){v=false;}).send();}},listenForUndo:function(aa){var ba=j.find(aa,"._4_nn");s(k.listen(ba,'click',function(){var ca=j.find(aa,"^._5my2 ._4_nm");h.hide(aa);h.show(ca);}));},onHideMenuUndoClicked:function(aa,ba){var ca=j.find(aa,"^._4_nl"),da=j.find(ca,"^._5my2 ._4_nm");h.hide(ca);h.show(da);},hideSeeMoreLink:function(aa,ba){var ca=t[ba].getCategoryItemInfo();if(ca.hiddenTopicIds.length!==0)return;var da=l.byClass(aa,"_5my7"),ea=j.scry(da,"a._5my9");if(ea&&ea.length===1&&h.shown(ea[0]))h.addClass(ea[0],"_4_nk");}};e.exports=z;},null);
__d("TrendingCategoryIcon",["BanzaiLogger","CSS","TrendingEvent","cx"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l,m){"use strict";this.$TrendingCategoryIcon0=l;this.$TrendingCategoryIcon1=m.iconElement;this.$TrendingCategoryIcon2=m.nub;this.$TrendingCategoryIcon3=m.unselectedClass;this.$TrendingCategoryIcon4=m.selectedClass;this.$TrendingCategoryIcon5=m.categoryId;this.$TrendingCategoryIcon6=m.categoryLoggingOffset;this.$TrendingCategoryIcon7=m.queryId;this.$TrendingCategoryIcon8=m.source;}k.prototype.getRoot=function(){"use strict";return this.$TrendingCategoryIcon0;};k.prototype.getCategoryId=function(){"use strict";return this.$TrendingCategoryIcon5;};k.prototype.select=function(){"use strict";h.addClass(this.$TrendingCategoryIcon0,"_5nns");h.addClass(this.$TrendingCategoryIcon1,this.$TrendingCategoryIcon4);h.removeClass(this.$TrendingCategoryIcon1,this.$TrendingCategoryIcon3);h.show(this.$TrendingCategoryIcon2);this.$TrendingCategoryIcon9();};k.prototype.unselect=function(){"use strict";h.removeClass(this.$TrendingCategoryIcon0,"_5nns");h.addClass(this.$TrendingCategoryIcon1,this.$TrendingCategoryIcon3);h.removeClass(this.$TrendingCategoryIcon1,this.$TrendingCategoryIcon4);h.hide(this.$TrendingCategoryIcon2);};k.prototype.$TrendingCategoryIcon9=function(){"use strict";var l={trending_event:i.CATEGORY_HEADER_CLICKED,trending_location:this.$TrendingCategoryIcon8,trending_positions:[this.$TrendingCategoryIcon6],query_id:parseInt(this.$TrendingCategoryIcon7,10),tagids:[]};g.log('TrendingEventLoggerConfig',l);};e.exports=k;},null);
__d("XPubcontentTrendingCategoriesImpressionLoggingController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/trending\/categories\/log_impression\/",{topic_ids_by_position:{type:"IntToIntMap",required:true},source:{type:"String",required:true},query_id:{type:"Int",required:true}});},null);
__d("XPubcontentTrendingCategoriesSeeMoreController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/trending\/categories\/see_more\/",{topic_ids_seen:{type:"IntVector",defaultValue:[]},num_topics_to_add:{type:"Int",required:true},num_removed_topics:{type:"Int",defaultValue:0},category:{type:"Enum",required:true,enumType:0}});},null);
__d("TrendingCategoryList",["AsyncRequest","CSS","DOM","Event","Parent","PubContentTrendingUnitTruncation","TrendingCategoriesRHCHide","TrendingLocation","XPubcontentTrendingCategoriesImpressionLoggingController","XPubcontentTrendingCategoriesSeeMoreController","csx","cx","getStyleProperty","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b.__markCompiled&&b.__markCompiled();var u=['webkitAnimationEnd','animationend','mozAnimationEnd','oAnimationEnd','MSAnimationEnd'];function v(w,x,y){"use strict";this.$TrendingCategoryList0=w;this.$TrendingCategoryList1=x;this.$TrendingCategoryList2=y.category;this.$TrendingCategoryList3=y.rowsAfterSeeMore;this.$TrendingCategoryList4=y.source;this.$TrendingCategoryList5=y.queryId;this.$TrendingCategoryList6=false;this.$TrendingCategoryList7();m.addCategoryList(this,this.$TrendingCategoryList2);if(y.useDelegateListener)this.$TrendingCategoryList8();this.$TrendingCategoryList9();}v.prototype.showItems=function(){"use strict";h.show(this.$TrendingCategoryList0);var w=this.getCategoryItemInfo();this.$TrendingCategoryLista(w.visibleTopicIds,w.visiblePositions,this.$TrendingCategoryList4);};v.prototype.hideItems=function(){"use strict";h.hide(this.$TrendingCategoryList0);};v.prototype.getHeight=function(){"use strict";return s(this.$TrendingCategoryList0,'height');};v.prototype.getCategoryItemInfo=function(){"use strict";var w=[],x=[],y=[],z=[],aa=[];i.scry(this.$TrendingCategoryList0,"._5my2").forEach(function(ba){if(h.hasClass(ba,"_5my9"))return;var ca=Number(ba.getAttribute('data-topicid')),da=Number(ba.getAttribute('data-position'));if(h.hasClass(ba,"_338c")){aa.push(ca);}else if(h.hasClass(ba,"_5my1")){y.push(ca);z.push(da);}else{w.push(ca);x.push(da);}});return {visibleTopicIds:w,visiblePositions:x,hiddenTopicIds:y,hiddenPositions:z,removedTopicIds:aa};};v.prototype.showExtraItem=function(){"use strict";var w=i.scry(this.$TrendingCategoryList0,"._5my1");if(w.length===0)return;var x=Number.MAX_VALUE,y=null;w.forEach(function(z){var aa=Number(z.getAttribute('data-position'));if(aa<x){y=z;x=aa;}});h.removeClass(y,"_5my1");h.addClass(y,"_4_ni");h.show(y);u.forEach(function(event){y.addEventListener(event,function(){l.truncate(y);h.removeClass(y,"_4_ni");});});this.$TrendingCategoryLista([Number(y.getAttribute('data-topicid'))],[Number(y.getAttribute('data-position'))],n.WWW_HIDDEN_RHC_TRENDING);};v.prototype.removeItem=function(w){"use strict";h.addClass(w,"_338c");h.hide(w);};v.prototype.fetchExtraItems=function(){"use strict";if(this.$TrendingCategoryList6)return;this.$TrendingCategoryList6=true;if(this.$TrendingCategoryList1!==null)h.hide(this.$TrendingCategoryList1);var w=this.getCategoryItemInfo(),x=this.$TrendingCategoryList3-w.hiddenTopicIds.length;if(x<=0){this.$TrendingCategoryListb();return;}var y=i.find(this.$TrendingCategoryList0,"._30_w");h.show(y);var z=w.visibleTopicIds.concat(w.hiddenTopicIds,w.removedTopicIds),aa=p.getURIBuilder().setIntVector('topic_ids_seen',z).setInt('num_topics_to_add',x).setInt('num_removed_topics',w.removedTopicIds.length).setEnum('category',this.$TrendingCategoryList2).getURI();new g().setURI(aa).setRelativeTo(this.$TrendingCategoryList0).setHandler(function(ba){h.hide(y);this.$TrendingCategoryListb();}.bind(this)).send();};v.prototype.$TrendingCategoryList7=function(){"use strict";i.scry(this.$TrendingCategoryList0,"._5my2").forEach(function(w){if(h.hasClass(w,"_5my9")){return;}else if(h.hasClass(w,"_5my1"))return;l.truncate(w);});};v.prototype.$TrendingCategoryList8=function(){"use strict";t(j.listen(this.$TrendingCategoryList0,'click',function(event){var w=event.getTarget();if(h.hasClass(w,"_19_3")){var x=i.find(w,"._1k6k");m.onHideClicked(x,this.$TrendingCategoryList2);return;}else if(h.hasClass(w,"_1k6k")){m.onHideClicked(w,this.$TrendingCategoryList2);return;}var y=k.byClass(w,"_2p3m");if(y){m.onHideReasonClicked(y,this.$TrendingCategoryList2);return;}var z=k.byClass(w,"_4_nn");if(z){m.onHideMenuUndoClicked(z,this.$TrendingCategoryList2);return;}}.bind(this)));};v.prototype.$TrendingCategoryList9=function(){"use strict";if(this.$TrendingCategoryList1==null)return;t(j.listen(this.$TrendingCategoryList1,'click',function(){h.hide(this.$TrendingCategoryList1);this.fetchExtraItems();}.bind(this)));};v.prototype.$TrendingCategoryListb=function(){"use strict";var w=i.scry(this.$TrendingCategoryList0,"._5my1");if(w.length===0)return;var x=Math.min(this.$TrendingCategoryList3,w.length),y=[],z=[];for(var aa=0;aa<x;aa++){h.show(w[aa]);h.removeClass(w[aa],"_5my1");l.truncate(w[aa]);y.push(Number(w[aa].getAttribute('data-topicid')));z.push(Number(w[aa].getAttribute('data-position')));}this.$TrendingCategoryLista(y,z,n.WWW_HIDDEN_RHC_TRENDING);};v.prototype.$TrendingCategoryLista=function(w,x,y){"use strict";if(w.length===0)return;var z={};for(var aa=0;aa<w.length;aa++)z[x[aa]]=w[aa];var ba=o.getURIBuilder().setIntToIntMap('topic_ids_by_position',z).setString('source',y).setInt('query_id',this.$TrendingCategoryList5).getURI();new g(ba).send();};e.exports=v;},null);