"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[578],{1142:(t,e,s)=>{s.d(e,{useSuspenseQueries:()=>n});var i=s(1610),r=s(4791);function n(t,e){return(0,i.useQueries)({...t,queries:t.queries.map(t=>({...t,suspense:!0,throwOnError:r.R3,enabled:!0,placeholderData:void 0}))},e)}},1610:(t,e,s)=>{s.d(e,{useQueries:()=>m});var i=s(2115),r=s(7165),n=s(6347),a=s(5910),u=s(2020);function o(t,e){return t.filter(t=>!e.includes(t))}var h=class extends a.Q{#t;#e;#s;#i;#r;#n;#a;#u;#o=[];constructor(t,e,s){super(),this.#t=t,this.#i=s,this.#s=[],this.#r=[],this.#e=[],this.setQueries(e)}onSubscribe(){1===this.listeners.size&&this.#r.forEach(t=>{t.subscribe(e=>{this.#h(t,e)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.#r.forEach(t=>{t.destroy()})}setQueries(t,e){this.#s=t,this.#i=e,r.jG.batch(()=>{let t=this.#r,e=this.#l(this.#s);this.#o=e,e.forEach(t=>t.observer.setOptions(t.defaultedQueryOptions));let s=e.map(t=>t.observer),i=s.map(t=>t.getCurrentResult()),r=s.some((e,s)=>e!==t[s]);if(t.length!==s.length||r)this.#r=s,this.#e=i,this.hasListeners()&&(o(t,s).forEach(t=>{t.destroy()}),o(s,t).forEach(t=>{t.subscribe(e=>{this.#h(t,e)})}),this.#c())})}getCurrentResult(){return this.#e}getQueries(){return this.#r.map(t=>t.getCurrentQuery())}getObservers(){return this.#r}getOptimisticResult(t,e){let s=this.#l(t),i=s.map(t=>t.observer.getOptimisticResult(t.defaultedQueryOptions));return[i,t=>this.#d(t??i,e),()=>this.#p(i,s)]}#p(t,e){return e.map((s,i)=>{let r=t[i];return s.defaultedQueryOptions.notifyOnChangeProps?r:s.observer.trackResult(r,t=>{e.forEach(e=>{e.observer.trackProp(t)})})})}#d(t,e){return e?(this.#n&&this.#e===this.#u&&e===this.#a||(this.#a=e,this.#u=this.#e,this.#n=(0,u.BH)(this.#n,e(t))),this.#n):t}#l(t){let e=new Map(this.#r.map(t=>[t.options.queryHash,t])),s=[];return t.forEach(t=>{let i=this.#t.defaultQueryOptions(t),r=e.get(i.queryHash);r?s.push({defaultedQueryOptions:i,observer:r}):s.push({defaultedQueryOptions:i,observer:new n.$(this.#t,i)})}),s}#h(t,e){let s=this.#r.indexOf(t);-1!==s&&(this.#e=function(t,e,s){let i=t.slice(0);return i[e]=s,i}(this.#e,s,e),this.#c())}#c(){if(this.hasListeners()){let t=this.#n,e=this.#p(this.#e,this.#o);t!==this.#d(e,this.#i?.combine)&&r.jG.batch(()=>{this.listeners.forEach(t=>{t(this.#e)})})}}},l=s(6715),c=s(7252),d=s(382),p=s(2450),f=s(4791),b=s(3768);function m(t,e){let{queries:s,...a}=t,u=(0,l.useQueryClient)(e),o=(0,c.useIsRestoring)(),m=(0,d.useQueryErrorResetBoundary)(),g=i.useMemo(()=>s.map(t=>{let e=u.defaultQueryOptions(t);return e._optimisticResults=o?"isRestoring":"optimistic",e}),[s,u,o]);g.forEach(t=>{(0,f.jv)(t),(0,p.LJ)(t,m)}),(0,p.wZ)(m);let[y]=i.useState(()=>new h(u,g,a)),[v,R,C]=y.getOptimisticResult(g,a.combine),O=!o&&!1!==a.subscribed;i.useSyncExternalStore(i.useCallback(t=>O?y.subscribe(r.jG.batchCalls(t)):b.l,[y,O]),()=>y.getCurrentResult(),()=>y.getCurrentResult()),i.useEffect(()=>{y.setQueries(g,a)},[g,a,y]);let P=v.some((t,e)=>(0,f.EU)(g[e],t))?v.flatMap((t,e)=>{let s=g[e];if(s){let e=new n.$(u,s);if((0,f.EU)(s,t))return(0,f.iL)(s,e,m);(0,f.nE)(t,o)&&(0,f.iL)(s,e,m)}return[]}):[];if(P.length>0)throw Promise.all(P);let M=v.find((t,e)=>{let s=g[e];return s&&(0,p.$1)({result:t,errorResetBoundary:m,throwOnError:s.throwOnError,query:u.getQueryCache().get(s.queryHash),suspense:s.suspense})});if(null==M?void 0:M.error)throw M.error;return R(C())}},2490:(t,e,s)=>{s.d(e,{useIsFetching:()=>a});var i=s(2115),r=s(7165),n=s(6715);function a(t,e){let s=(0,n.useQueryClient)(e),a=s.getQueryCache();return i.useSyncExternalStore(i.useCallback(t=>a.subscribe(r.jG.batchCalls(t)),[a]),()=>s.isFetching(t),()=>s.isFetching(t))}},4123:(t,e,s)=>{s.d(e,{z:()=>n});var i=s(6347),r=s(4275),n=class extends i.${constructor(t,e){super(t,e)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t){super.setOptions({...t,behavior:(0,r.PL)()})}getOptimisticResult(t){return t.behavior=(0,r.PL)(),super.getOptimisticResult(t)}fetchNextPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"backward"}}})}createResult(t,e){let{state:s}=t,i=super.createResult(t,e),{isFetching:n,isRefetching:a,isError:u,isRefetchError:o}=i,h=s.fetchMeta?.fetchMore?.direction,l=u&&"forward"===h,c=n&&"forward"===h,d=u&&"backward"===h,p=n&&"backward"===h;return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,r.rB)(e,s.data),hasPreviousPage:(0,r.RQ)(e,s.data),isFetchNextPageError:l,isFetchingNextPage:c,isFetchPreviousPageError:d,isFetchingPreviousPage:p,isRefetchError:o&&!l&&!d,isRefetching:a&&!c&&!p}}}},4275:(t,e,s)=>{s.d(e,{PL:()=>r,RQ:()=>o,rB:()=>u});var i=s(2020);function r(t){return{onFetch:(e,s)=>{let r=e.options,u=e.fetchOptions?.meta?.fetchMore?.direction,o=e.state.data?.pages||[],h=e.state.data?.pageParams||[],l={pages:[],pageParams:[]},c=0,d=async()=>{let s=!1,d=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?s=!0:e.signal.addEventListener("abort",()=>{s=!0}),e.signal)})},p=(0,i.ZM)(e.options,e.fetchOptions),f=async(t,r,n)=>{if(s)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let a={client:e.client,queryKey:e.queryKey,pageParam:r,direction:n?"backward":"forward",meta:e.options.meta};d(a);let u=await p(a),{maxPages:o}=e.options,h=n?i.ZZ:i.y9;return{pages:h(t.pages,u,o),pageParams:h(t.pageParams,r,o)}};if(u&&o.length){let t="backward"===u,e={pages:o,pageParams:h},s=(t?a:n)(r,e);l=await f(e,s,t)}else{let e=t??o.length;do{let t=0===c?h[0]??r.initialPageParam:n(r,l);if(c>0&&null==t)break;l=await f(l,t),c++}while(c<e)}return l};e.options.persister?e.fetchFn=()=>e.options.persister?.(d,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=d}}}function n(t,{pages:e,pageParams:s}){let i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}function a(t,{pages:e,pageParams:s}){return e.length>0?t.getPreviousPageParam?.(e[0],e,s[0],s):void 0}function u(t,e){return!!e&&null!=n(t,e)}function o(t,e){return!!e&&!!t.getPreviousPageParam&&null!=a(t,e)}},4560:(t,e,s)=>{s.d(e,{$:()=>u,s:()=>a});var i=s(7165),r=s(7948),n=s(6784),a=class extends r.k{#r;#f;#b;constructor(t){super(),this.mutationId=t.mutationId,this.#f=t.mutationCache,this.#r=[],this.state=t.state||u(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#r.includes(t)||(this.#r.push(t),this.clearGcTimeout(),this.#f.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#r=this.#r.filter(e=>e!==t),this.scheduleGc(),this.#f.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#r.length||("pending"===this.state.status?this.scheduleGc():this.#f.remove(this))}continue(){return this.#b?.continue()??this.execute(this.state.variables)}async execute(t){this.#b=(0,n.II)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#m({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#m({type:"pause"})},onContinue:()=>{this.#m({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#f.canRun(this)});let e="pending"===this.state.status,s=!this.#b.canStart();try{if(!e){this.#m({type:"pending",variables:t,isPaused:s}),await this.#f.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#m({type:"pending",context:e,variables:t,isPaused:s})}let i=await this.#b.start();return await this.#f.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#f.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#m({type:"success",data:i}),i}catch(e){try{throw await this.#f.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#f.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#m({type:"error",error:e})}}finally{this.#f.runNext(this)}}#m(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),i.jG.batch(()=>{this.#r.forEach(e=>{e.onMutationUpdate(t)}),this.#f.notify({mutation:this,type:"updated",action:t})})}};function u(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},5041:(t,e,s)=>{s.d(e,{useMutation:()=>c});var i=s(2115),r=s(4560),n=s(7165),a=s(5910),u=s(2020),o=class extends a.Q{#t;#g=void 0;#y;#v;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#R()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,u.f8)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#y,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,u.EN)(e.mutationKey)!==(0,u.EN)(this.options.mutationKey)?this.reset():this.#y?.state.status==="pending"&&this.#y.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#y?.removeObserver(this)}onMutationUpdate(t){this.#R(),this.#c(t)}getCurrentResult(){return this.#g}reset(){this.#y?.removeObserver(this),this.#y=void 0,this.#R(),this.#c()}mutate(t,e){return this.#v=e,this.#y?.removeObserver(this),this.#y=this.#t.getMutationCache().build(this.#t,this.options),this.#y.addObserver(this),this.#y.execute(t)}#R(){let t=this.#y?.state??(0,r.$)();this.#g={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#c(t){n.jG.batch(()=>{if(this.#v&&this.hasListeners()){let e=this.#g.variables,s=this.#g.context;t?.type==="success"?(this.#v.onSuccess?.(t.data,e,s),this.#v.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#v.onError?.(t.error,e,s),this.#v.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#g)})})}},h=s(6715),l=s(3768);function c(t,e){let s=(0,h.useQueryClient)(e),[r]=i.useState(()=>new o(s,t));i.useEffect(()=>{r.setOptions(t)},[r,t]);let a=i.useSyncExternalStore(i.useCallback(t=>r.subscribe(n.jG.batchCalls(t)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),u=i.useCallback((t,e)=>{r.mutate(t,e).catch(l.l)},[r]);if(a.error&&(0,l.G)(r.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:u,mutateAsync:a.mutate}}},5490:(t,e,s)=>{s.d(e,{useSuspenseInfiniteQuery:()=>a});var i=s(4123),r=s(5),n=s(4791);function a(t,e){return(0,r.t)({...t,enabled:!0,suspense:!0,throwOnError:n.R3},i.z,e)}},8564:(t,e,s)=>{s.d(e,{A:()=>i});let i=(0,s(9946).A)("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]])},8822:(t,e,s)=>{s.d(e,{useInfiniteQuery:()=>n});var i=s(4123),r=s(5);function n(t,e){return(0,r.t)(t,i.z,e)}},8902:(t,e,s)=>{s.d(e,{HydrationBoundary:()=>o});var i=s(2115);function r(t){return t}function n(t,e,s){if("object"!=typeof e||null===e)return;let i=t.getMutationCache(),n=t.getQueryCache(),a=s?.defaultOptions?.deserializeData??t.getDefaultOptions().hydrate?.deserializeData??r,u=e.mutations||[],o=e.queries||[];u.forEach(({state:e,...r})=>{i.build(t,{...t.getDefaultOptions().hydrate?.mutations,...s?.defaultOptions?.mutations,...r},e)}),o.forEach(({queryKey:e,state:i,queryHash:r,meta:u,promise:o})=>{let h=n.get(r),l=void 0===i.data?i.data:a(i.data);if(h){if(h.state.dataUpdatedAt<i.dataUpdatedAt){let{fetchStatus:t,...e}=i;h.setState({...e,data:l})}}else h=n.build(t,{...t.getDefaultOptions().hydrate?.queries,...s?.defaultOptions?.queries,queryKey:e,queryHash:r,meta:u},{...i,data:l,fetchStatus:"idle"});if(o){let t=Promise.resolve(o).then(a);h.fetch(void 0,{initialPromise:t})}})}var a=s(6715),u=(t,e)=>"object"==typeof t&&null!==t&&e in t,o=t=>{let{children:e,options:s={},state:r,queryClient:o}=t,h=(0,a.useQueryClient)(o),[l,c]=i.useState(),d=i.useRef(s);return d.current=s,i.useMemo(()=>{if(r){if("object"!=typeof r)return;let t=h.getQueryCache(),e=r.queries||[],s=[],i=[];for(let r of e){let e=t.get(r.queryHash);if(e){let t=r.state.dataUpdatedAt>e.state.dataUpdatedAt||u(r.promise,"status")&&u(e.promise,"status")&&r.promise.status!==e.promise.status,s=null==l?void 0:l.find(t=>t.queryHash===r.queryHash);t&&(!s||r.state.dataUpdatedAt>s.state.dataUpdatedAt)&&i.push(r)}else s.push(r)}s.length>0&&n(h,{queries:s},d.current),i.length>0&&c(t=>t?[...t,...i]:i)}},[h,l,r]),i.useEffect(()=>{l&&(n(h,{queries:l},d.current),c(void 0))},[h,l]),e}},9138:(t,e,s)=>{s.d(e,{useIsMutating:()=>u,useMutationState:()=>h});var i=s(2115),r=s(2020),n=s(7165),a=s(6715);function u(t,e){let s=(0,a.useQueryClient)(e);return h({filters:{...t,status:"pending"}},s).length}function o(t,e){return t.findAll(e.filters).map(t=>e.select?e.select(t):t.state)}function h(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,s=(0,a.useQueryClient)(e).getMutationCache(),u=i.useRef(t),h=i.useRef(null);return h.current||(h.current=o(s,t)),i.useEffect(()=>{u.current=t}),i.useSyncExternalStore(i.useCallback(t=>s.subscribe(()=>{let e=(0,r.BH)(h.current,o(s,u.current));h.current!==e&&(h.current=e,n.jG.schedule(t))}),[s]),()=>h.current,()=>h.current)}}}]);