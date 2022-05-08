"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[727],{58017:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Qe});var i=a(67294),r=a.n(i),n=a(73305),l=a(46886),u=a(9832),o=a(28760),s=a(20657),c=a(80053);const m="gTvMl6pwfRD9PobMSB5x",d="hNAQG0TAe2WFYyf_iZEB",p="Zhzrb2k9nQRActS2lp4U",E=()=>r().createElement("div",{className:m},r().createElement(c.Y,{iconSize:64}),r().createElement(o.Dy,{as:"h1",variant:"alto",semanticColor:"textBase",className:d},s.ag.get("history.empty-title")),r().createElement("p",null,s.ag.get("history.empty-description")));var g=a(69518),y=a.n(g),v=a(28248),b=a(47991),f=a(42922),x=a(59713),h=a.n(x),P=a(19719),k=a(26529);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const w=[];function N(e,t=!0){const[a,r]=(0,i.useState)({});return(0,i.useEffect)((()=>{if(!t)return;const i=Array.from(new Set(e)),n=i.filter((e=>y().isTrack(e)&&!a[e])),l=i.filter((e=>y().isEpisode(e)&&!a[e])),u=n.length?P.fQ.getTracks(k.b.getInstance(),n.map((e=>y().from(e).getBase62Id()))).then((e=>e.body.tracks||w)):Promise.resolve(w),o=l.map((e=>P.UY.getEpisodeGraphQL(k.b.getInstance(),y().from(e).getBase62Id()).then((e=>(null==e?void 0:e.body)||{})).catch((t=>(console.error(t),{uri:e})))));Promise.all([u,...o]).then((([e,...t])=>{const a={},i={};e.forEach((e=>{var t;a[(null==e||null===(t=e.linked_from)||void 0===t?void 0:t.uri)||e.uri]=e})),t.forEach((e=>{i[e.uri]=e})),(e.length>0||t.length>0)&&r((e=>C(C(C({},e),a),i)))}))}),[e,a,t]),e.map((e=>a[e]))}var I=a(42781),U=a(49961),T=a(25988),D=a(26921),A=a(86213),R=a(27481),S=a(83384),L=a(82760),q=a(18261),M=a(65095),_=a(87257),Q=a(57978),j=a(26010),B=a(84242),G=a(84788);const F=r().memo((({uri:e,name:t,duration_ms:a,index:n,imgUrl:l,artists:u,album:o,isExplicit:c,isMOGEFRestricted:m,type:d})=>{var p;const{useCurrentAvailability:E}=(0,i.useContext)(j.I),[g,v]=E(e),{isActive:b,isPlaying:x,triggerPlay:h,togglePlay:P}=(0,B.n)({uri:e},{featureIdentifier:"history"}),{badges:k,hasBadges:O}=(0,G.r)({offlineAvailability:v,isExplicit:c,isMOGEFRestricted:m}),C=g,w=(null==u?void 0:u.map((e=>e.name)).join(s.ag.getSeparator()))||"";let N;var I;y().isEpisode(e)?N=r().createElement(T.k,{uri:e,contextUri:e,showUri:null==u||null===(I=u[0])||void 0===I?void 0:I.uri}):y().isLocalTrack(e)?N=r().createElement(D.N,{uri:e,contextUri:e}):y().isTrack(e)&&(N=r().createElement(A.$,{uri:e,contextUri:e,albumUri:null==o?void 0:o.uri,artists:u}));return r().createElement(f.ZP,{value:"row",index:n},r().createElement(q._,{menu:N},r().createElement(L.c,{uri:e,contextUri:e,index:n,ariaRowIndex:n,onTriggerPlay:()=>{h()},isActive:b,isPlayable:C,ageRestricted:m,dragMetadata:{name:t,createdBy:w}},r().createElement(R.vZ,{ariaColIndex:0},r().createElement(R.VG,{uri:e,src:l,isPlaying:x,isActive:b,isLocked:!1,onClick:()=>{P()},isEpisode:y().isEpisode(e),playAriaLabel:s.ag.get("tracklist.a11y.play",t,w)}),r().createElement(R.vm,null,r().createElement(R.Wh,{titleText:t},t),O&&r().createElement(R.g3,null,k.download&&r().createElement(M.G,{size:16}),k.explicit&&r().createElement(_.N,null),k.nineteen&&r().createElement(Q.X,{className:S.Z.nineteen,size:16})),r().createElement(R.K9,null,y().isTrack(e)?r().createElement(R.T6,{artists:u}):u[0].name))),r().createElement(R.UA,{ariaColIndex:2},r().createElement(R.BM,{nonInteractive:y().isLocalTrack(e),uri:o.uri,name:o.name,creatorUri:null==u||null===(p=u[0])||void 0===p?void 0:p.uri},o.name)),r().createElement(R.mU,{ariaColIndex:1},!y().isLocalTrack(e)&&r().createElement(R.qS,{uri:e,type:d}),r().createElement(R.A$,{duration:a}),r().createElement(R.Zv,{menu:N,label:s.ag.get("more.label.track",t,w)})))))}),((e,t)=>e.uri===t.uri)),$=r().memo((({items:e})=>{const t=N(e.map((e=>e.uri))),a=(0,i.useMemo)((()=>t.map(((t,a)=>e[a].isLocal?e[a]:t))),[t,e]),n=(0,i.useCallback)(((e,t)=>{if((i=e).type===I.p.TRACK&&y().isTrack(i.uri)){var a;const i=(0,U.X)(null===(a=e.album)||void 0===a?void 0:a.images,{desiredSize:40});return r().createElement(F,{key:t+e.uri,index:t,uri:(0,b.$V)(e),name:e.name,duration_ms:e.duration_ms,imgUrl:(null==i?void 0:i.url)||"",album:e.album,artists:e.artists,isExplicit:e.explicit,isMOGEFRestricted:(e.tags||[]).includes("MOGEF-19+"),type:I.p.TRACK})}var i,n,l;if((e=>e.type===I.p.EPISODE)(e)){var u;const a=(0,U.X)(null===(u=e.show)||void 0===u?void 0:u.images,{desiredSize:40});return r().createElement(F,{key:t+e.uri,index:t,uri:(0,b.$V)(e),name:e.name,duration_ms:e.duration_ms,imgUrl:(null==a?void 0:a.url)||"",album:{name:e.show.name,uri:e.show.uri},artists:[{name:e.show.publisher,uri:""}],isExplicit:e.explicit,isMOGEFRestricted:!1,type:I.p.EPISODE})}return(e=>e.type===I.p.TRACK&&y().isLocalTrack(e.uri))(e)?r().createElement(F,{key:t+e.uri,index:t,uri:e.uri,name:e.name,duration_ms:e.duration,imgUrl:e.imageUrl||"",album:{name:(null===(n=e.album)||void 0===n?void 0:n.name)||"",uri:""},artists:[{name:(null===(l=e.artist)||void 0===l?void 0:l.name)||"",uri:""}],isExplicit:e.isExplicit,isMOGEFRestricted:!1,type:I.p.LOCAL_FILES}):r().createElement(v.hU,{height:`${v.dN}px`})}),[]),l=(0,i.useMemo)((()=>[v.QD.TITLE,v.QD.ALBUM_OR_PODCAST,v.QD.DURATION]),[]),u=(0,i.useCallback)((e=>e.uri),[]);return r().createElement(r().Fragment,null,r().createElement(f.ZP,{value:"play-history-tracklist"},r().createElement(v.Pv,{ariaLabel:"play-history",hasHeaderRow:!0,columns:l,renderRow:n,resolveUri:u,tracks:a,nrTracks:a.length,rowPlaceholder:v.hU,limit:50})))})),Z="dt3fysZYdQ6hhWfpmjAu",W="n6LsTkKvpO88xeRyRTdw",z=()=>{const e=(0,u.U5)();return e&&e.items.length>0?r().createElement("div",{className:Z},r().createElement(o.Dy,{as:"h1",variant:"canon",semanticColor:"textBase",className:W},s.ag.get("view.recently-played")),r().createElement($,{items:e.items})):r().createElement(E,null)};var K=a(94184),V=a.n(K),X=a(70369),H=a(67892),Y=a(23716),J=a(34891),ee=a(86081);var te=a(14472),ae=a(24209);const ie=({onClick:e})=>r().createElement(ae.P,{onClick:e,buttonSize:"sm"},s.ag.get("queue.clear-queue"));var re=a(73012),ne=a(21770),le=a(99450),ue=(a(29298),a(85105));const oe="i9rTNwKyT_NMDghd8q65",se="DXBMXJD8Zoj4V8MxIVTB",ce="UEtqSfWDubkNdPIaEkfA",me="I_Rc74Je7W4sk6KAVR05",de=r().memo((({onClose:e,onConfirm:t,isOpen:a,itemCount:n})=>{const l=(0,i.useCallback)((a=>{t(),e(a)}),[t,e]),u=s.ag.get("queue.confirm-title",n);return r().createElement(ue.Z,{shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:e,contentLabel:u,isOpen:a},r().createElement("div",{className:oe},r().createElement(o.Dy,{as:"h2",variant:"cello",className:se},u),r().createElement(o.Dy,{as:"p",variant:"mesto",className:ce,paddingBottom:re.g4V},s.ag.get("queue.confirm-message")),r().createElement("div",{className:V()("encore-light-theme",me)},r().createElement(ne.oM,{onClick:e},s.ag.get("queue.cancel-button")),r().createElement(le.D,{onClick:l},s.ag.get("queue.confirm-button")))))}));var pe=a(76),Ee=a(17470);const ge=()=>r().createElement("div",{className:m},r().createElement(Ee.S,{iconSize:64}),r().createElement(o.Dy,{as:"h1",variant:"alto",semanticColor:"textBase",className:d},s.ag.get("queue.empty-title")),r().createElement("p",null,s.ag.get("queue.empty-description")),r().createElement(pe.OL,{to:"/search",className:p},r().createElement(le.D,{colorSet:"invertedLight"},s.ag.get("queue.fine-something"))));let ye;!function(e){e[e.NowPlaying=0]="NowPlaying",e[e.NextInQueue=1]="NextInQueue",e[e.NextUp=2]="NextUp"}(ye||(ye={}));var ve=a(56802),be=a(89952);function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function xe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const he=(e,t)=>{const a=N(e.slice(0,50).map((e=>e.uri)),t);return t?e.reduce(((e,t,i)=>(a[i]&&e.push(((e,t)=>(0,be.G_)(e)&&(e=>"track"===e.type)(t)?xe(xe({},e),{},{name:t.name,album:xe(xe({},e.album),{},{name:t.album.name,images:t.album.images,uri:t.album.uri}),artists:t.artists.map((e=>({name:e.name,uri:e.uri,type:I.p.ARTIST}))),duration:{milliseconds:t.duration_ms},isExplicit:t.explicit,is19PlusOnly:(t.tags||[]).includes("MOGEF-19+")}):(0,be.iw)(e)&&(e=>"episode"===e.type)(t)?xe(xe({},e),{},{name:t.name,show:xe(xe({},e.show),{},{name:t.show.name,images:t.show.images,uri:t.show.uri}),duration:{milliseconds:t.duration_ms}}):e)(t,a[i])),e)),[]):e};var Pe=a(22345),ke=a(99191),Oe=a(69691);let Ce;!function(e){e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local"}(Ce||(Ce={}));const we=r().memo((({uri:e,uid:t,contextUri:a,name:n,duration_ms:l,artists:u,index:o,rowNumberOffset:c,imgUrl:m,isExplicit:d,isPlayable:p,isMOGEFRestricted:E,album:g,type:v,section:b,usePlayContextItem:x,isAutoPlay:h=!1})=>{var P;const k=(0,Y.g)(),{useCurrentAvailability:O}=(0,i.useContext)(j.I),[C,w]=O(e),{triggerPlay:N,togglePlay:I}=x({uid:t,uri:e,index:o}),{isActive:U,isPlaying:B}=(0,Oe.$o)(e),F=(0,i.useCallback)((()=>{t?N({},(()=>k.skipToNext({uri:e,uid:t}))):N()}),[k,N,e,t]),$=(0,i.useCallback)((()=>{t?I({},(()=>k.skipToNext({uri:e,uid:t}))):I()}),[k,I,e,t]),Z=p&&(y().isLocalTrack(e)||C),W=v===Ce.TRACK,z=v===Ce.EPISODE,K=v===Ce.CHAPTER,V=z&&"video"===(null==g?void 0:g.mediaType),X=v===Ce.LOCAL,H=(null==u?void 0:u.map((e=>e.name)).join(s.ag.getSeparator()))||"",{badges:J,hasBadges:ee}=(0,G.r)({offlineAvailability:w,isExplicit:d,isMOGEFRestricted:E});let te;te=z?r().createElement(T.k,{uri:e,uid:h?void 0:t,showUri:g.uri,contextUri:a}):K?r().createElement(Pe.r,{uri:e,uid:h?void 0:t,showUri:g.uri,contextUri:a}):X?r().createElement(D.N,{uri:e,uid:h?void 0:t,contextUri:a}):r().createElement(A.$,{uri:e,uid:h?void 0:t,albumUri:g.uri,artists:u,contextUri:a});const ae=(0,i.useCallback)(((a,i)=>{const{meta:r,uris:n}=a,l=n.map((e=>({uri:e,uid:null})));let u;u=i===L.W.Before?{before:{uri:e,uid:null!=t?t:null}}:{after:{uri:e,uid:null!=t?t:null}},r.section===ye.NowPlaying?k.addToQueue(l):r.origin===ye.NowPlaying?k.insertIntoQueue(l,u):k.reorderQueue(l,u)}),[k,t,e]),ie=(0,i.useCallback)(((a,i)=>{const{uids:r}=a,n=r.map((e=>({uri:"",uid:e})));let l;l=i===L.W.Before?{before:{uri:e,uid:null!=t?t:null}}:{after:{uri:e,uid:null!=t?t:null}},k.reorderQueue(n,l)}),[k,t,e]),re=h?[]:[ke.aN[y().Type.TRACK],ke.aN[y().Type.EPISODE]];return r().createElement(f.ZP,{value:"row",index:o},r().createElement(q._,{menu:te},r().createElement(L.c,{uri:e,contextUri:a,index:o,onTriggerPlay:F,isActive:b===ye.NowPlaying&&U,ariaRowIndex:o,isPlayable:Z,ageRestricted:E,dragMetadata:{name:n,createdBy:H,sectionId:b},onInsert:(e,t,a,i,r)=>{ae({uris:e,dropIndex:t,meta:r},a)},onMove:(e,t,a,i)=>{ie({uids:e,dropIndex:t,meta:i},a)},allowedDropTypes:re},r().createElement(R.Dd,{ariaColIndex:0},r().createElement(R.Du,{uri:e,playAriaLabel:s.ag.get("tracklist.a11y.play",n,H),isPlaying:b===ye.NowPlaying&&B,isActive:b===ye.NowPlaying&&U,onClick:()=>{$()}},r().createElement(R.km,null,o+c+1))),r().createElement(R.vZ,{ariaColIndex:1},r().createElement(R.lD,{src:m,isVideo:V,isEpisode:z||K}),r().createElement(R.vm,null,r().createElement(R.Wh,{titleText:n},n),ee&&r().createElement(R.g3,null,J.download&&r().createElement(M.G,{size:16}),J.explicit&&r().createElement(_.N,null),J.nineteen&&r().createElement(Q.X,{className:S.Z.nineteen,size:16})),r().createElement(R.K9,null,W&&r().createElement(R.T6,{artists:u}),(z||X)&&!V&&H))),r().createElement(R.UA,{ariaColIndex:2},r().createElement(R.BM,{nonInteractive:X,uri:g.uri,name:g.name,creatorUri:null==u||null===(P=u[0])||void 0===P?void 0:P.uri},g.name)),r().createElement(R.mU,{ariaColIndex:3},!X&&r().createElement(R.qS,{uri:e,type:v}),r().createElement(R.A$,{duration:l}),r().createElement(R.Zv,{menu:te,label:s.ag.get("more.label.track",n,H)})))))}),((e,t)=>e.uri===t.uri&&e.index===t.index)),Ne=r().memo((({tracks:e,ariaLabel:t,contextUri:a,rowNumberOffset:n=0,section:l,usePlayContextItem:u})=>{const o=(0,ve.o)(),s=(0,Y.g)(),c=he(e,!s.getCapabilities().hasDecoratedQueue),m=(0,i.useCallback)(((e,t)=>{o({intent:"remove-from-queue",type:"click"}),s.removeFromQueue(e.map((e=>({uid:e.id,uri:e.uri})))).then(t)}),[s,o]),d=(0,i.useCallback)(((e,t)=>{if((0,be.iw)(e)){var i,o;const s=(0,U.X)(null===(i=e.show)||void 0===i?void 0:i.images,{desiredSize:40});return r().createElement(we,{key:`${t}${n}${e.uid}`,index:t,rowNumberOffset:n,imgUrl:(null==s?void 0:s.url)||"",uri:(0,b.$V)(e),uid:null!==(o=e.uid)&&void 0!==o?o:e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:Ce.EPISODE,section:l,usePlayContextItem:u,isAutoPlay:"autoplay"===e.provider})}if((0,be.G7)(e)){var s;const i=(0,U.X)(e.images||void 0,{desiredSize:40});return r().createElement(we,{key:`${t}${n}${e.uid}`,index:t,rowNumberOffset:n,imgUrl:(null==i?void 0:i.url)||"",uri:(0,b.$V)(e),uid:null!==(s=e.uid)&&void 0!==s?s:e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:Ce.CHAPTER,section:l,usePlayContextItem:u,isAutoPlay:"autoplay"===e.provider})}if((0,be.G_)(e)||(0,be.RB)(e)){var c,m,d,p;const i=(0,U.X)(null==e||null===(c=e.album)||void 0===c?void 0:c.images,{desiredSize:40}),o=e.type===I.p.TRACK?e:null;return r().createElement(we,{key:`${t}${n}${e.uid}`,index:t,rowNumberOffset:n,imgUrl:(null==i?void 0:i.url)||"",uri:(0,b.$V)(e),uid:null!==(m=e.uid)&&void 0!==m?m:e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:null!==(d=null==o?void 0:o.isExplicit)&&void 0!==d&&d,isPlayable:!0,isMOGEFRestricted:null!==(p=null==o?void 0:o.is19PlusOnly)&&void 0!==p&&p,type:null!=o&&o.isLocal?Ce.LOCAL:Ce.TRACK,section:l,usePlayContextItem:u,isAutoPlay:"autoplay"===e.provider})}return r().createElement(v.Lb,{height:`${v.dN}px`})}),[n,a,l,u]),p=(0,i.useMemo)((()=>[v.QD.INDEX,v.QD.TITLE,v.QD.ALBUM,v.QD.DURATION]),[]),E=(0,i.useCallback)((e=>e.uri),[]),g=(0,i.useCallback)((e=>{var t;return null!==(t=e.uid)&&void 0!==t?t:e.uri}),[]);return c&&r().createElement(v.Pv,{ariaLabel:t,tracks:c,nrTracks:c.length,onRemove:m,renderRow:d,resolveUri:E,resolveUid:g,columns:p})})),Ie="rHpv7osDRvs3SUPMpQ_g",Ue="DG9CsoFIptJhAneKoo_F",Te="jf2HafzDEI9jn7Yo05eM",De="H3Puuvc2nV0GoZRrfpRS",Ae="HckHyQocDDePWQL2baOY",Re=()=>{const{uri:e,description:t}=(0,te.$)(),a=(0,Y.g)(),{current:n,nextUp:l,queued:u}=function(){const e=(0,Y.g)(),[t,a]=(0,i.useState)(e.getQueue());return(0,ee.G)(J.rg.QUEUE_UPDATE,(e=>a(e.data))),t}(),[c,m]=(0,i.useState)(!1),d=(0,i.useCallback)((()=>{m(!1)}),[m]),p=(0,i.useCallback)((()=>{a.clearQueue(),m(!1)}),[a]),E=(0,i.useCallback)((()=>{m(!0)}),[m]),{usePlayContextItem:g}=(0,B.n)({uri:null!=e?e:""},{featureIdentifier:"queue"}),y="autoplay"===(null==n?void 0:n.provider),v=l.filter((e=>y?e:"autoplay"!==e.provider)),b=!(null==u||!u.length),x=!(null==v||!v.length);return!1===(n||b||x)?r().createElement(ge,null):r().createElement("section",{className:Ie},r().createElement(X.$,null,s.ag.get("queue.page-title")),r().createElement(o.Dy,{as:"h1",variant:"canon",semanticColor:"textBase",className:Ue},s.ag.get("playback-control.queue")),n&&e&&r().createElement(r().Fragment,null,r().createElement(o.Dy,{as:"h2",variant:"balladBold",semanticColor:"textSubdued"},s.ag.get("queue.now-playing")),r().createElement(f.ZP,{value:"now-playing"},r().createElement(Ne,{ariaLabel:s.ag.get("queue.now-playing"),tracks:[n],contextUri:e,section:ye.NowPlaying,usePlayContextItem:g}))),b&&e&&r().createElement(r().Fragment,null,r().createElement("div",{className:V()(Ae,Te)},r().createElement(o.Dy,{as:"h2",variant:"balladBold",semanticColor:"textSubdued"},s.ag.get("queue.next-in-queue")),b&&r().createElement(ie,{onClick:E})),r().createElement(f.ZP,{value:"next-in-queue"},r().createElement(Ne,{ariaLabel:s.ag.get("queue.next-in-queue"),tracks:u,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",section:ye.NextInQueue,usePlayContextItem:g}))),x&&e&&r().createElement(r().Fragment,null,r().createElement(o.Dy,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",className:V()(Te,"standalone-ellipsis-one-line")},t&&!y?r().createElement(r().Fragment,null,s.ag.get("queue.next-from")," ",r().createElement(H.r,{className:De,to:e},t)):s.ag.get("queue.next-up")),r().createElement(f.ZP,{value:"next-up"},r().createElement(Ne,{ariaLabel:s.ag.get("queue.next-up"),tracks:v,rowNumberOffset:1+((null==u?void 0:u.length)||0),contextUri:"spotify:app:queue:NextUp",section:ye.NextUp,usePlayContextItem:g}))),r().createElement(de,{itemCount:(null==u?void 0:u.length)||0,isOpen:c,onClose:d,onConfirm:p}))};var Se=a(9746),Le=a(28638),qe=a(69559);const Me="vhW0kRN8JJD5UwW4TdXi",_e=()=>{const[e,t]=(0,i.useState)(window.innerWidth);(0,qe.a)((()=>{t(window.innerWidth)}));const a=(0,i.useMemo)((()=>[{title:s.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue"},{title:s.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[]);return r().createElement(Le.w,null,r().createElement(Se.n,{className:Me,links:a,windowSize:e}))},Qe=()=>{const e=(0,u.nF)();return r().createElement("section",{className:"contentSpacing"},e&&r().createElement(l.No,{path:"/history",pageId:n.W.NOWPLAYING_HISTORY},r().createElement(z,null)),r().createElement(l.No,{path:"/queue",pageId:n.W.NOWPLAYING_QUEUE},r().createElement(i.Suspense,{fallback:null},r().createElement(Re,null))),e&&r().createElement(_e,null))}}}]);
//# sourceMappingURL=xpui-routes-queue.js.map