/*!CK:716814765!*//*1434940153,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["c7FKf"]); }

__d("PagesEventObserver",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h='pages_client_logging',i={VITAL_WAIT:g.VITAL_WAIT,logData_DEPRECATED:function(j,k){var l={delay:k||g.VITAL_WAIT};g.post(h,j,l);},notify:function(event,j,k,l,m){var n=Object.assign({},k,{event_name:event,page_id:j,dedupe:l!==false}),o={delay:m||g.VITAL_WAIT};g.post(h,n,o);}};e.exports=i;},null);