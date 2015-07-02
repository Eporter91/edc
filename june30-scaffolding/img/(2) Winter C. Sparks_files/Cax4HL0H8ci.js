/*!CK:3912888660!*//*1434952537,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["TiE7p"]); }

__d("Collection",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h,i){if(!h.__collection__){var j=new Function();for(var k in h.prototype)j.prototype[k]=g._call.bind(null,k);h.__collection__=j;}var l=new h.__collection__();l._elements=i;return l;}g._call=function(h){var i=Array.prototype.slice.call(arguments,1);this._elements.forEach(function(j){j[h].apply(j,i);});return this;};e.exports=g;},null);
__d("Drag",["Event","Arbiter","DOM","Style","Vector"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={};l.currentDraggable=null;l.grab=function(m){if(l.currentDraggable)l._onmouseup();m.lastDragOver=null;l.attachDragEvents();l.currentDraggable=m;};l.attachDragEvents=function(){document.onselectstart=function(){document.onselectstart=null;return false;};if(l.dragEventsAttached)return;l.dragEventsAttached=true;h.subscribe('scroller/scroll',l._onmousemove);g.listen(document,{mousemove:l._onmousemove,mouseup:l._onmouseup});};l.droppables={};l.addDroppable=function(m,n){(l.droppables[m]=l.droppables[m]||[]).push(n);};l.removeDroppable=function(m,n){l.droppables[m]=l.droppables[m].filter(function(o){return o!=n;});};l.getOffsetParent=function(m){if(i.isNodeOfType(m,['body','html']))return document.body;while((m=m.parentNode)&&m!==document.body)if(j.get(m,'position')!=='static')return m;return document.body;};l._onmousemove=function(event,m){if(!l.currentDraggable)return;var n=m||k.getEventPosition(event),o=l.currentDraggable,p=l.droppables[o.namespace];if(o.namespace&&o.active&&p){var q={};p.forEach(function(w){q[w.zIndex]=w.zIndex;});var r=[];for(var s in q)r.push(q[s]);r.sort();var t=o.lastDragOver,u=null;for(var v=r.length-1;v>=0;v--)if(t&&t.dom!=null&&t.zIndex==r[v]&&t.isDraggedOver(n)){u=t;break;}else for(s=0;s<p.length;s++){if(r[v]!=p[s].zIndex)continue;if(t!=p[s]&&o.dom!=p[s].dom&&p[s].isDraggedOver(n)){u=p[s];v=-1;break;}}if(u&&u!=t){u.ondragover(o);l.currentDraggable.adjustCursorPosition();}if(u)u.ondragmove(o,n.sub(k.getElementPosition(u.dom)));o.lastDragOver=u;}l.currentDraggable._onmousemove(n);};l._onmouseup=function(m){document.onselectstart=null;if(l.currentDraggable){l.currentDraggable._ondrop();l.currentDraggable=null;}};e.exports=l;},null);
__d("Draggable",["Event","Arbiter","Collection","DOM","Drag","Rect","Style","Vector","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();function p(r){"use strict";this.canvas=r;this.scrollZone=50;this.velocity=100;this.coefficient=1;}p.prototype.activate=function(){"use strict";this.activate=o;this.event=g.listen(document,'mousemove',this._onmousemove.bind(this));this.interval=setInterval(this._intervalHandler.bind(this),50);this.cursor=null;};p.prototype.deactivate=function(){"use strict";delete this.activate;this.event&&this.event.remove();this.event=null;clearInterval(this.interval);};p.prototype._onmousemove=function(event){"use strict";this.cursor=n.getEventPosition(event);};p.prototype._intervalHandler=function(){"use strict";if(!this.cursor)return;var r=this.canvas==document.body?l.getViewportBounds():new l(this.canvas),s=new l(this.cursor.y-r.t,r.r-this.cursor.x,r.b-this.cursor.y,this.cursor.x-r.l),t=new n(0,0);if(s.t<s.b&&s.t<this.scrollZone){t.y=-this.scrollZone+s.t;}else if(s.b<this.scrollZone)t.y=this.scrollZone-s.b;t.y=this._doMath(t.y);if(s.l<s.r&&s.l<this.scrollZone){t.x=-this.scrollZone+s.l;}else if(s.r<this.scrollZone)t.x=this.scrollZone-s.r;t.x=this._doMath(t.x);if(t.x||t.y){t.scrollElementBy(this.canvas);if(document.body==this.canvas){var u=n.getScrollPosition();t.scrollElementBy(this.canvas);var v=n.getScrollPosition();this.cursor=this.cursor.add(v.sub(u));}else t.scrollElementBy(this.canvas);h.inform('scroller/scroll',this.cursor);}};p.prototype._doMath=function(r){"use strict";r=(r>=0?Math.min(r,this.scrollZone):Math.max(r,-this.scrollZone));return Math.floor(Math.pow(r/this.scrollZone*this.velocity,this.coefficient));};p.findScrollParent=function(r){"use strict";var s;r=r.parentNode;while(r){if(r.scrollHeight!=r.offsetTop){s=m.get(r,'overflowY');if(s=='scroll'||s=='auto')return r;}r=r.parentNode;}return document.body;};function q(r){"use strict";if(!r)throw new Error('Element should be a DOM node');if(!(this instanceof q)){if(r instanceof Array){var s=[];r.forEach(function(t){s.push(new q(t));});return new i(q,s);}else return new q(r);}else{this.data={};this.handles=[];this.dom=r;this.boundingBox=null;this.useScroller=true;this.grabPctX=this.grabPctY=0;this._shouldKillEvents=true;this.addHandle(this.dom);}}q.prototype.destroy=function(){"use strict";this.handles.forEach(function(r){this.removeHandle(r.obj);}.bind(this));this.data=this.dom=null;};q.prototype.adjustCursorPosition=function(){"use strict";var r=n.getElementDimensions(this.dom);this.cursorPositionVector=new n(parseInt(this.grabPctX*r.x,10),parseInt(this.grabPctY*r.y,10));};q.prototype._onclick=function(event){"use strict";if(!this._shouldKillEvents)return true;if(this.active)return g.kill(event);};q.prototype._ongrab=function(r){"use strict";this.ongrab();if(this.useScroller){if(!this.scroller)this.scroller=new p(p.findScrollParent(this.dom));this.scroller.activate();}if(this.active){if(!this.oldPosition)this.oldPosition=this.dom.style.position;var s=k.getOffsetParent(this.dom);if(s!==document.body)r=r.sub(n.getElementPosition(s));this.dom.style.position=this.absolute?'absolute':'relative';r.sub(this.cursorPositionVector).setElementPosition(this.dom);}};q.prototype._onmousedown=function(event){"use strict";if(!((event.which&&event.which===1)||(event.button&&event.button===1)))return;var r=event.getTarget();if(j.isNodeOfType(r,['input','select','textarea','object','embed']))return true;var s=n.getEventPosition(event),t=n.getElementDimensions(this.dom);this.draggableInitialVector=n.getElementPosition(this.dom);this.cursorPositionVector=s.sub(this.draggableInitialVector);this.grabPctX=t.x===0?0:this.cursorPositionVector.x/t.x;this.grabPctY=t.y===0?0:this.cursorPositionVector.y/t.y;k.grab(this,event);if(this.gutter){this.cursorInitialVector=s;}else{this._setActive(true);this._ongrab(s);}if(!this._shouldKillEvents)return true;return g.kill(event);};q.prototype._onmousemove=function(r){"use strict";if(!this.active)if(r.distanceTo(this.cursorInitialVector)>=this.gutter){this._setActive(true);this._ongrab(r);}if(this.active){var s=r.sub(this.cursorPositionVector),t;if(this.boundingBox){var u=l.newFromVectors(s,n.getElementDimensions(this.dom));u=u.boundWithin(this.boundingBox);s=u.getPositionVector();if(this.boundingBox.w()===0){t=new n(this.draggableInitialVector.x,s.y,'document');}else if(this.boundingBox.h()===0){t=new n(s.x,this.draggableInitialVector.y,'document');}else t=s;}else t=s;var v=k.getOffsetParent(this.dom);if(v!==document.body)t=t.sub(n.getElementPosition(v));t.setElementPosition(this.dom);this.ondrag(r);}};q.prototype._ondrop=function(){"use strict";this.scroller&&this.scroller.deactivate();if(this.active){setTimeout((function(){this._setActive(false);}).bind(this),0);this.ondrop(this.scroller&&this.scroller.cursor);if(this.lastDragOver)this.lastDragOver.ondrop(this);}};q.prototype.killDrag=function(){"use strict";this._setActive(false);k._onmouseup();};q.prototype.forceDrop=function(){"use strict";k._onmouseup();};q.prototype.setBoundingBox=function(r){"use strict";this.boundingBox=r;return this;};q.prototype.resetPosition=function(){"use strict";this.dom.style.position=this.oldPosition;this.oldPosition=null;this.dom.style.left='';this.dom.style.top='';return this;};q.prototype.setUseAbsolute=function(r){"use strict";this.absolute=r;return this;};q.prototype.setDragHandler=function(r){"use strict";this.ondrag=r;return this;};q.prototype.setGrabHandler=function(r){"use strict";this.ongrab=r;return this;};q.prototype.setDropHandler=function(r){"use strict";this.ondrop=r;return this;};q.prototype.setGutter=function(r){"use strict";this.gutter=r;return this;};q.prototype.setNamespace=function(r){"use strict";this.namespace=r;return this;};q.prototype.setUseScroller=function(r){"use strict";this.useScroller=r;return this;};q.prototype.setAvoidKillingEvents=function(r){"use strict";this._shouldKillEvents=!r;return this;};q.prototype.addHandle=function(r){"use strict";if(this.handles.length==1&&this.handles[0].obj==this.dom)this.removeHandle(this.dom);this.handles.push({obj:r,evt:[g.listen(r,'mousedown',this._onmousedown.bind(this)),g.listen(r,'click',this._onclick.bind(this)),g.listen(r,'drag',this._killUnlessActive.bind(this)),g.listen(r,'selectstart',this._killUnlessActive.bind(this))]});return this;};q.prototype.removeHandle=function(r){"use strict";this.handles=this.handles.filter(function(s){if(s.obj!=r){return true;}else{s.evt.forEach(function(t){t.remove();});return false;}});};q.prototype.getDOM=function(){"use strict";return this.dom;};q.prototype.setKey=function(r,s){"use strict";this.data[r]=s;return this;};q.prototype.getKey=function(r){"use strict";return this.data[r];};q.prototype._setActive=function(r){"use strict";if(!this.dom)return;this.dom.activeDrag=this.active=r;for(var s=0;s<this.handles.length;s++)this.handles[s].obj.activeDrag=r;};q.prototype._killUnlessActive=function(r){"use strict";if(!this._shouldKillEvents)return;if(r.getTarget()!==document.activeElement)return r.kill();};q.prototype.ondrag=o;q.prototype.ongrab=o;q.prototype.ondrop=o;q.prototype.gutter=0;q.prototype.handles=null;e.exports=q;},null);
__d("Droppable",["Collection","Drag","Draggable","Vector","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m){"use strict";if(!m)throw new Error('Element should be a DOM node');if(!(this instanceof l)){if(m instanceof Array){var n=[];m.forEach(function(o){n.push(new l(o));});return new g(l,n);}else return new l(m);}else{this.data={};this.dom=m;this.namespace=null;}}l.prototype.destroy=function(){"use strict";if(this.namespace)h.removeDroppable(this.namespace,this);this.data=this.dom=null;};l.prototype.setNamespace=function(m){"use strict";if(this.namespace)h.removeDroppable(this.namespace,this);this.namespace=m;h.addDroppable(m,this);return this;};l.prototype.setZIndex=function(m){"use strict";this.zIndex=m;return this;};l.prototype.hasPointMovedHorizontally=function(m){"use strict";var n=j.getElementPosition(this.dom);return n.x<=m.x&&this.dom.offsetWidth+n.x>m.x;};l.prototype.hasPointMovedVertically=function(m){"use strict";var n=j.getElementPosition(this.dom);return n.y<=m.y&&this.dom.offsetHeight+n.y>m.y;};l.prototype.hasPointMovedInside=function(m){"use strict";return this.hasPointMovedHorizontally(m)&&this.hasPointMovedVertically(m);};l.prototype.setDragOverHandler=function(m){"use strict";this.ondragover=m;return this;};l.prototype.setDragOverVectically=function(){"use strict";this.isDraggedOver=l.prototype.hasPointMovedVertically;return this;};l.prototype.setDragOverHorizontally=function(){"use strict";this.isDraggedOver=l.prototype.hasPointMovedHorizontally;return this;};l.prototype.setDragMoveHandler=function(m){"use strict";this.ondragmove=m;return this;};l.prototype.setDropHandler=function(m){"use strict";this.ondrop=m;return this;};l.prototype.zIndex=0;l.prototype.isDraggedOver=l.prototype.hasPointMovedInside;l.prototype.ondragover=k;l.prototype.ondragmove=k;l.prototype.ondrop=k;l.prototype.getDOM=i.prototype.getDOM;l.prototype.setKey=i.prototype.setKey;l.prototype.getKey=i.prototype.getKey;e.exports=l;},null);
__d("SortableGroup",["CSS","DOM","Draggable","Droppable","Style","Vector","emptyFunction","removeFromArray"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();function o(){"use strict";this.namespace='sortable'+(++o.instanceCount);this.draggables={};this.droppables={};this.sortables={};this.linkedGroups=[];this.linkedGroups.onbeforelinkjump=m;this.linkedGroups.onlinkjump=m;this.rootNode=null;this.boundingBox=null;this.neverEmpty=false;this.hasEmptyMessage=false;this.isDroppable=true;this.isDraggable=true;this.useScroller=true;this.dragOverCriteria='inside';this.requireSameParent=true;this.anchor=null;this.disabled=false;this.autoWidth=false;}o.prototype.addEmptyMessage=function(p,q){"use strict";var r='placeholder';if(p.parentNode!=q)h.appendContent(q,p);this.emptyMessage=p;this._initializeAdded(r,p);this.hasEmptyMessage=true;this.sortables[r]=p;this.droppables[r]=(new j(p)).setNamespace(this.namespace).setDragOverHandler(this._dragOverHandlerShim.bind(this,r));return this;};o.prototype.setAutoWidth=function(p){"use strict";this.autoWidth=p;return this;};o.prototype.setUseScroller=function(p){"use strict";this.useScroller=p;return this;};o.prototype.setDragOverHorizontally=function(){"use strict";this.dragOverCriteria='horizontal';return this;};o.prototype.setDragOverVertically=function(){"use strict";this.dragOverCriteria='vertical';return this;};o.prototype.removeEmptyMessage=function(){"use strict";if(this.emptyMessage)h.remove(this.emptyMessage);this.hasEmptyMessage=false;this.removeSortable('placeholder');return this;};o.prototype.addSortable=function(p,q,r){"use strict";this._initializeAdded(p,q);this.sortables[p]=q;this.draggables[p]=(new i(q)).setNamespace(this.namespace).setGutter(this.gutter).setUseAbsolute(true).setUseScroller(this.useScroller).setGrabHandler(this.grabHandler.bind(this,p)).setDropHandler(this.dropHandler.bind(this,p)).setKey('key',p).setBoundingBox(this.boundingBox);if(r)this.draggables[p].addHandle(r);this.droppables[p]=(new j(q)).setNamespace(this.namespace).setDragOverHandler(this._dragOverHandlerShim.bind(this,p));if(this.dragOverCriteria==='horizontal'){this.droppables[p].setDragOverHorizontally();}else if(this.dragOverCriteria==='vertical')this.droppables[p].setDragOverVectically();return this;};o.prototype.destroy=function(){"use strict";for(var p in this.droppables)this.droppables[p].destroy();for(var q in this.draggables)this.draggables[q].destroy();this.droppables=this.draggables=this.rootNode=null;n(this.linkedGroups,this);for(var r=0;r<this.linkedGroups.length;r++)this.linkedGroups[r].linkedGroups=this.linkedGroups;};o.prototype.dragOverHandler=function(p,q){"use strict";if(!this.isDroppable&&!this.anchor)return;var r=false;if(!(q in this.draggables)){this.linkedGroups.onbeforelinkjump.call(this,q);if(!this.migrateLinkedSortable(q))throw new Error('Draggable dropped onto a foreign droppable!');r=true;}var s=true,t=this.getSortables(),u=this.sortables[q],v=this.sortables[p];if(!this.anchor){var w=t.length;for(var x=0;x<w;x++)if(t[x]==v){break;}else if(t[x]==u){s=false;break;}}else v=this.anchor;this.onbeforedragover(u,v);var y=this.linkedGroups.placeholder;this.insertPlaceholder(y,v,s||this.anchor);y.parentNode.insertBefore(u,y);this.ondragover(u,v,q,p);if(r)this.linkedGroups.onlinkjump.call(this,q);};o.prototype.dropHandler=function(p){"use strict";if(this._checkLastRemaining()){this.draggables[p].resetPosition();return;}var q=this.linkedGroups.placeholder;g.removeClass(this.sortables[p],'drag');this.draggables[p].resetPosition();q.parentNode.insertBefore(this.sortables[p],q);q.parentNode.removeChild(q);for(var r=0;r<this.linkedGroups.length;r++)if(this.linkedGroups[r].anchor)delete this.linkedGroups[r].anchor;this.ondropcallback(p,this.sortables[p]);this.onorderchange();};o.prototype.getOrder=function(){"use strict";var p=[],q=this.getSortables();for(var r=0;r<q.length;r++)for(var s in this.sortables)if(this.sortables[s]==q[r]){p.push(s);break;}return p;};o.prototype.getSortables=function(){"use strict";return this.rootNode?this.rootNode.childNodes:[];};o.prototype.grabHandler=function(p){"use strict";if(this.disabled||this._checkLastRemaining()||!this.isDraggable){this.draggables[p].killDrag();return;}this.onbeforegrabcallback(this.sortables[p],p);var q=this.linkedGroups.placeholder,r=this.sortables[p];g.setClass(q,r.className);g.addClass(q,'droppable_placeholder');g.addClass(r,'drag');l.getElementDimensions(r).setElementDimensions(q);if(this.autoWidth)k.set(q,'width','auto');r.parentNode.insertBefore(q,r);this.ongrabcallback(this.sortables[p],p);if(!this.isDroppable){this.anchor=r.nextSibling;if(!this.anchor){this.anchor=h.create('div');r.parentNode.appendChild(this.anchor);}}};o.prototype.insertPlaceholder=function(p,q,r){"use strict";if(r){h.insertBefore(q,p);}else h.insertAfter(q,p);};o.prototype.keyExists=function(p){"use strict";return this.sortables[p];};o.prototype.link=function(p){"use strict";p.linkedGroups=this.linkedGroups;if(!this.linkedGroups.length)this.linkedGroups.push(this);this.linkedGroups.push(p);for(var q=0;q<this.linkedGroups.length;q++)if(this.linkedGroups[q].namespace!=this.namespace){this.linkedGroups[q].namespace=this.namespace;for(var r in this.linkedGroups[q].droppables){this.linkedGroups[q].droppables[r].setNamespace(this.namespace);var s=this.linkedGroups[q].draggables[r];s&&s.setNamespace(this.namespace);}}return this;};o.prototype.migrateLinkedSortable=function(p){"use strict";for(var q=0;q<this.linkedGroups.length;q++)if(p in this.linkedGroups[q].draggables){this.sortables[p]=this.linkedGroups[q].sortables[p];this.draggables[p]=this.linkedGroups[q].draggables[p];this.draggables[p].setGrabHandler(this.grabHandler.bind(this,p)).setDropHandler(this.dropHandler.bind(this,p));this.droppables[p]=this.linkedGroups[q].droppables[p];this.droppables[p].setDragOverHandler(this._dragOverHandlerShim.bind(this,p));delete this.linkedGroups[q].sortables[p];delete this.linkedGroups[q].draggables[p];delete this.linkedGroups[q].droppables[p];return true;}return false;};o.prototype.removeSortable=function(p){"use strict";if(p in this.sortables){if(p in this.draggables)this.draggables[p].destroy();if(p in this.droppables)this.droppables[p].destroy();delete this.draggables[p];delete this.droppables[p];delete this.sortables[p];}};o.prototype.removeAllSortables=function(){"use strict";for(var p in this.sortables)this.removeSortable(p);};o.prototype.setDisabled=function(p){"use strict";this.disabled=p;return this;};o.prototype.forceDrop=function(p){"use strict";if(p in this.sortables)this.draggables[p].forceDrop();};o.prototype.killDrag=function(p){"use strict";if(p in this.sortables)this.draggables[p].killDrag();};o.prototype.setBeforeGrabCallback=function(p){"use strict";this.onbeforegrabcallback=p;return this;};o.prototype.setBoundingBox=function(p){"use strict";this.boundingBox=p;for(var q in this.draggables)this.draggables[q].setBoundingBox(this.boundingBox);return this;};o.prototype.setBeforeDragOverCallback=function(p){"use strict";this.onbeforedragover=p;return this;};o.prototype.setDragOverCallback=function(p){"use strict";this.ondragover=p;return this;};o.prototype.setDropCallback=function(p){"use strict";this.ondropcallback=p;return this;};o.prototype.setDroppable=function(p){"use strict";this.isDroppable=p;return this;};o.prototype.setDraggable=function(p){"use strict";this.isDraggable=p;return this;};o.prototype.setGrabCallback=function(p){"use strict";this.ongrabcallback=p;return this;};o.prototype.setBeforeLinkJumpHandler=function(p){"use strict";this.linkedGroups.onbeforelinkjump=p;return this;};o.prototype.setInsertPlaceholderHandler=function(p){"use strict";this.insertPlaceholder=p;};o.prototype.setLinkJumpHandler=function(p){"use strict";this.linkedGroups.onlinkjump=p;return this;};o.prototype.setNeverEmpty=function(p){"use strict";this.neverEmpty=p;};o.prototype.setOrderChangeHandler=function(p){"use strict";this.onorderchange=p;return this;};o.prototype.setRequireSameParent=function(p,q){"use strict";this.requireSameParent=q;};o.prototype.setSortablesGetter=function(p){"use strict";this.getSortables=p;};o.prototype._checkLastRemaining=function(p){"use strict";var q=this.hasEmptyMessage?2:1;return this.neverEmpty&&this.getSortables().length==q;};o.prototype._dragOverHandlerShim=function(p,q){"use strict";this.dragOverHandler(p,q.getKey('key'));};o.prototype._initializeAdded=function(p,q){"use strict";if(this.rootNode===null){this.rootNode=q.parentNode;if(!this.linkedGroups.placeholder)this.linkedGroups.placeholder=h.create(q.tagName,{className:'dragPlaceholder',style:{padding:'0'}});}else if(this.requireSameParent&&this.rootNode!=q.parentNode)throw new Error('All sortables of a collection must share the same parentNode');if(p in this.draggables)throw new Error('All sortables must have a unique key');};o.instanceCount=0;Object.assign(o.prototype,{gutter:15,onbeforegrabcallback:m,onbeforedragover:m,ondragover:m,ondropcallback:m,ongrabcallback:m,onorderchange:m});e.exports=a.SortableGroup||o;},null);
__d("WebMessengerNux",["Event","AsyncSignal","DOM","WebMessengerEvents"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l,m,n,o){function p(){i.remove(l);j.masterDOMChanged();j.detailDOMChanged();new h('/ajax/web_messenger/dismiss_nux.php').send();}g.listen(m,'click',p);g.listen(n,'click',o.show.bind(o));o.subscribe('hide',p);}e.exports=k;},null);
__d("MercuryRecipientsDataSource",["DataSource","MercuryTypeaheadConstants"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();for(var i in g)if(g.hasOwnProperty(i))k[i]=g[i];var j=g===null?null:g.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=g;function k(l){"use strict";l=l||{};l.kanaNormalization=true;g.call(this,l);}k.prototype.buildData=function(l){"use strict";var m=[],n=[];l.forEach(function(o){var p=j.getEntry.call(this,o);if(p.render_type==h.NON_FRIEND_TYPE){var q=h.COMPOSER_NON_FRIENDS_MAX;if(n.length<q)n.push(o);}else if(m.length<h.COMPOSER_FRIENDS_MAX){p.render_type=h.FRIEND_TYPE;m.push(o);}}.bind(this));return j.buildData.call(this,m.concat(n));};e.exports=k;},null);
__d("MessagingDebug",["URI","BugBar","WebMessengerMessageIDFinder"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={showTrace:function(k){var l=i.find(k,k.getAttribute('data-selector')),m=new g(k.getAttribute('data-uri'));m.setQueryData({message_id:l,timestamp:k.getAttribute('data-timestamp')});window.open(m.toString(),'_blank');},reportBug:function(k){var l=i.find(k,k.getAttribute('data-selector')),m=k.getAttribute('data-timestamp');h.addMetadata({'Message ID':l});h.addMetadata({'Message Timestamp':m});}};e.exports=j;},null);
__d("ComposerPhotoSorter",["Arbiter","CSS","DOM","Rect","SortableGroup","arrayContains"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m={init:function(n){this._container=n;this._reset();var o=this._update.bind(this);g.subscribe('multi-upload/images-added/'+n.id,o);g.subscribe('multi-upload/image-removed/'+n.id,o);},_reset:function(){this._ids=[];this._sortableGroup=new k();h.removeClass(this._container,'fbVaultPhotoSorter');},_update:function(){var n=i.scry(this._container,'.fbVaultGridItem').filter(function(o){return !h.hasClass(o,'fbVaultEditableGridMoreLink');});if(n.length<2){if(this._ids.length>1){this._sortableGroup.destroy();this._reset();}return;}h.addClass(this._container,'fbVaultPhotoSorter');n.forEach(function(o){var p=i.scry(o,'input[type="hidden"]')[0];if(p&&!l(this._ids,p.value)){this._ids.push(p.value);this._sortableGroup.addSortable(p.value,o);}}.bind(this));this._sortableGroup.setBoundingBox(new j(this._container));}};e.exports=m;},null);