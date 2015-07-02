/*!CK:2038524149!*//*1435079731,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["zc0LZ"]); }

__d("ComposerXDragDropUtils",["Arbiter","CSS","DOMQuery","Parent","VideoUploadFeatureDetector","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={handleDragEnterAndLeave:function(o){var p=i.scry(j.byClass(o,"_119"),"._2wr");g.subscribe('dragenter',function(q,r){if(o==r.element)p.forEach(h.hide);});g.subscribe('dragleave',function(q,r){if(o==r.element)p.forEach(h.show);});},filterImages:function(o){var p=k.supportsFileAPI(),q=[];for(var r=0;r<o.length;r++)if(o[r].type.match('image/*')){q.push(o[r]);}else if(p&&o[r].type.match('video/*'))q.push(o[r]);return q;}};e.exports=n;},null);