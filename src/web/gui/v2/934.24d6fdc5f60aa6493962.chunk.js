!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f54005cd-254a-4d44-abb8-62e22bbc3514",e._sentryDebugIdIdentifier="sentry-dbid-f54005cd-254a-4d44-abb8-62e22bbc3514")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"30b1ba65cc8722be7e184f4a401fb43e6b21634d"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[934],{83863:(e,t,n)=>{n.d(t,{Bo:()=>b,Hv:()=>l,Lf:()=>g,Lm:()=>D,NK:()=>C,OK:()=>_,Pm:()=>A,R8:()=>f,Ro:()=>y,WB:()=>c,Ws:()=>N,XG:()=>x,ZE:()=>v,j8:()=>r,jV:()=>i,uZ:()=>h});n(62953);const a={threshold:{label:"Threshold",value:"threshold"},variance:{label:"Variance",value:"variance"},anomalies:{label:"Anomalies",value:"anomalies"}},l=Object.values(a),o=a.threshold.value,i={thresholds:{above:{label:"above",value:"above",symbol:">"},below:{label:"below",value:"below",symbol:"<"}}},r=Object.values(i.thresholds),s=i.thresholds.above,u={seconds:{label:"seconds",value:"seconds",symbol:"s"},minutes:{label:"minutes",value:"minutes",symbol:"m"},hours:{label:"hours",value:"hours",symbol:"h"},days:{label:"days",value:"days",symbol:"d"}},c=Object.values(u),d={"5_min":{label:"5 mins",value:"5_min",after:"-5m"},"10_min":{label:"10 mins",value:"10_min",after:"-10m"},"15_min":{label:"15 mins",value:"15_min",after:"-15m"},"30_min":{label:"30 mins",value:"30_min",after:"-30m"},"1_hour":{label:"1 hour",value:"1_hour",after:"-1h"},"2_hours":{label:"2 hours",value:"2_hours",after:"-2h"},"6_hours":{label:"6 hours",value:"6_hours",after:"-6h"},"12_hours":{label:"12 hours",value:"12_hours",after:"-12h"},"1_day":{label:"1 day",value:"1_day",after:"-1d"},"2_days":{label:"2 days",value:"2_days",after:"-2d"},"7_days":{label:"7 days",value:"7_days",after:"-7d"}},v=Object.values(d),m=d["5_min"],p={linux:{label:"Linux",value:"linux"},freeBSD:{label:"FreeBSD",value:"freeBSD"},windows:{label:"Windows",value:"windows"}},g={label:"".concat(Object.keys(p).length," OS"),value:""},f=[g,...Object.values(p)],h={avg:{label:"AVG()",value:"average"},sum:{label:"SUM()",value:"sum"},min:{label:"MIN()",value:"min"},max:{label:"MAX()",value:"max"},stddev:{label:"STDDEV()",value:"stddev"},cv:{label:"CV()",value:"cv"}},b=Object.values(h),y=h.stddev,C=h.avg,w={sum:{label:"SUM",value:"of"},each:{label:"EACH",value:"foreach"}},D=Object.values(w),O=w.sum,A={unaligned:{label:"unaligned",value:"unaligned"},percentage:{label:"percentage",value:"percentage"},absolute:{label:"absolute",value:"absolute"},min2max:{label:"min2max",value:"min2max"}},N=Object.values(A),_={label:"&this",value:"$this"},x={alertId:null,detection:{method:o},metrics:{on:"",hosts:{items:[],expression:""},os:[],charts:{items:[],expression:""},chartLabels:{items:[],expression:""},lookup:{aggregation:C,denoter:O,dimensions:[],timePeriod:m,options:[]},calc:{active:!1,value:""},units:""},alertingConditions:{denoter:s,critical:{isFormula:!1,denoter:s,value:85,recovery:null},warning:{isFormula:!1,denoter:s,value:75,recovery:null},interval:{value:60,unit:u.seconds},delayNotification:{active:!1,up:{value:0,unit:u.seconds},down:{value:0,unit:u.seconds},multiplier:1,max:{value:0,unit:u.hours}},agentOptions:{active:!1,off:!0,warningAlertsDuration:{value:15,unit:u.minutes},criticalAlertsDuration:{value:5,unit:u.minutes},sendTo:{value:"",clearNotifications:!0},execScript:{active:!1,path:""}}},description:{summary:"",templateName:"",templateDescription:""}}},60934:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(62953);var a=n(96540),l=n(39225),o=n(8711),i=n(83199),r=n(29217),s=n(21875),u=n(64118),c=n(59303),d=n(28738),v=n(93155);const m=(0,l.A)((()=>Promise.all([n.e(7144),n.e(6331)]).then(n.bind(n,33590))),"Content"),p=(0,o.default)(i.ModalContent).attrs({width:{base:"90vw"},height:{base:"90vh",min:"90vh",max:"90vh"},padding:[0,0,4,0]}).withConfig({displayName:"configurationManagement__ModalContent",componentId:"sc-56l9v5-0"})(["box-shadow:0 18px 28px rgba(0,0,0,0.5);"]),g=()=>a.createElement(d.A,{title:"Loading configuration manager"}),f=()=>{const[e,t]=(0,s.v7)(),[,n]=(0,s.$h)(),l=(0,s.Vj)(),[o,d]=(0,a.useState)(!1);(0,u.yk)(null===e||void 0===e?void 0:e.alertId);const f=(0,u.JL)(null===e||void 0===e?void 0:e.alertId);(0,a.useEffect)((()=>{e&&!e.alertId&&d(!0)}),[e]),(0,a.useEffect)((()=>{if(null!==f&&void 0!==f&&f.fullyLoaded){const e=(0,c.we)(f);n(e),d(!0)}}),[f]);const h=(0,a.useCallback)((()=>{t(null),l(),d(!1)}),[t,l,d]);return v.Dm&&e?a.createElement(i.Modal,{backdropProps:{backdropBlur:!0}},a.createElement(p,null,a.createElement(i.ModalHeader,{justifyContent:"between",padding:[4]},a.createElement(i.Flex,{gap:2,alignItems:"center"},a.createElement(i.Icon,{name:"alarm_bell",color:"text",size:"small"}),a.createElement(i.H4,null,"Generate Alert Configuration")),a.createElement(i.Flex,{gap:2,alignItems:"baseline"},a.createElement(r.A,{align:"bottom",content:"Close window",zIndex:7050},a.createElement(i.Flex,null,a.createElement(i.ModalCloseButton,{onClose:h,testId:"assistant-modal-close-button"}))))),a.createElement(i.ModalBody,{height:"100%",padding:[0,4],overflow:"hidden"},o?a.createElement(a.Suspense,{fallback:a.createElement(g,null)},a.createElement(m,null)):a.createElement(g,null)))):null}},21875:(e,t,n)=>{n.d(t,{v7:()=>c,vX:()=>u,$h:()=>v,op:()=>h,I8:()=>b,aR:()=>p,BO:()=>f,Vj:()=>m});n(17333),n(98992),n(54520),n(62953);var a=n(96540),l=n(47444),o=n(83863);const i=(0,l.eU)({key:"alertConfiguration",default:o.XG}),r=(0,l.eU)({key:"alertConfigurationChart",default:null});var s=n(59303);const u=()=>(0,l.vc)(r),c=()=>(0,l.L4)(r),d=(0,l.gD)({key:"alertConfigurationSelector",get:e=>{let{get:t}=e;return t(i)},set:(e,t)=>{let{set:n}=e;n(i,(e=>({...e,...t})))}}),v=()=>(0,l.L4)(d),m=()=>(0,l.E0)(i),p=()=>{const[e,t]=v(),{detection:{method:n},metrics:a}=e;return{detectionMethod:n,setDetectionMethod:e=>t({detection:{method:e},metrics:{...a,lookup:{...a.lookup,aggregation:"variance"==e?o.Ro:o.NK}}})}},g=e=>{let{scope:t,setConfiguration:n,metrics:a,isComposite:l}=e;return e=>{const o=null!==e&&void 0!==e&&e.length?e.filter((e=>{let{value:t}=e;return t})):e;n({metrics:{...a,[t]:l||Array.isArray(o)?o:o.value?[o]:[]}})}},f=()=>{const[e,t]=v(),{metrics:n}=e,a=g({scope:"hosts",setConfiguration:t,metrics:n,isComposite:!0}),l=g({scope:"charts",setConfiguration:t,metrics:n,isComposite:!0}),o=g({scope:"chartLabels",setConfiguration:t,metrics:n,isComposite:!0}),i=g({scope:"os",setConfiguration:t,metrics:n});return{metrics:n,setLookup:e=>{let{aggregation:a,denoter:l,dimensions:o,timePeriod:i,options:r}=e;t({metrics:{...n,lookup:{...n.lookup,...a?{aggregation:a}:{},...l?{denoter:l}:{},...o?{dimensions:o}:{},...i?{timePeriod:i}:{},...r?{options:r}:{}}}})},setOn:e=>t({metrics:{...n,on:e}}),setHosts:a,setCharts:l,setChartLabels:o,setOs:i,setCalcActive:e=>t({metrics:{...n,calc:{...n.calc,active:e,...e?{}:{value:""}}}}),setCalcValue:e=>t({metrics:{...n,calc:{...n.calc,value:e}}}),setUnitsValue:e=>t({metrics:{...n,units:e}})}},h=()=>{const[e,t]=v(),{alertId:n,alertingConditions:a}=e,l=!!n,o=e=>n=>t({alertingConditions:{...a,interval:{...a.interval,[e]:n}}}),i=o("value"),r=o("unit"),s=e=>n=>t({alertingConditions:{...a,[e]:{...a[e],active:n}}}),u=s("delayNotification"),c=e=>n=>l=>o=>t({alertingConditions:{...a,[e]:{...a[e],[n]:{...a[e][n],[l]:o}}}}),d=c("delayNotification"),m=d("up"),p=m("value"),g=m("unit"),f=d("down"),h=f("value"),b=f("unit"),y=d("max"),C=y("value"),w=y("unit"),D=s("agentOptions"),O=c("agentOptions"),A=O("warningAlertsDuration"),N=A("value"),_=A("unit"),x=O("criticalAlertsDuration"),E=x("value"),I=x("unit"),k=e=>n=>t({alertingConditions:{...a,agentOptions:{...a.agentOptions,sendTo:{...a.agentOptions.sendTo,[e]:n}}}}),j=k("value"),S=k("clearNotifications"),M=e=>n=>t({alertingConditions:{...a,agentOptions:{...a.agentOptions,execScript:{...a.agentOptions.execScript,[e]:n}}}}),L=M("active"),V=M("path");return{isEdit:l,alertingConditions:a,setMainDenoter:e=>t({alertingConditions:{...a,denoter:e,critical:{...a.critical,denoter:e},warning:{...a.warning,denoter:e}}}),setIntervalValue:i,setIntervalUnit:r,setThreshold:(e,n)=>l=>t({alertingConditions:{...a,[e]:{...a[e],[n]:l}}}),setRecoveryThreshold:(e,n)=>l=>t({alertingConditions:{...a,[e]:{...a[e],recovery:{...a[e].recovery,[n]:l}}}}),setDelayNotificationActive:u,setDelayNotificationUpValue:p,setDelayNotificationUpUnit:g,setDelayNotificationDownValue:h,setDelayNotificationDownUnit:b,setDelayNotificationMaxDelayValue:C,setDelayNotificationMaxDelayUnit:w,setDelayNotificationMultiplier:e=>t({alertingConditions:{...a,delayNotification:{...a.delayNotification,multiplier:e}}}),setAgentOptionsActive:D,setAgentOptionsRepeatNotification:e=>t({alertingConditions:{...a,agentOptions:{...a.agentOptions,off:e}}}),setAgentOptionsWarningAlertsDurationValue:N,setAgentOptionsWarningAlertsDurationUnit:_,setAgentOptionsCriticalAlertsDurationValue:E,setAgentOptionsCriticalAlertsDurationUnit:I,setAgentOptionsSendToValue:j,setAgentOptionsSendToClearNotifications:S,setAgentOptionsExecScriptActive:L,setAgentOptionsExecScriptPath:V}},b=()=>{const[e,t]=v(),{metrics:{on:n},description:{templateName:l,templateDescription:o,summary:i}}=e;return(0,a.useEffect)((()=>{if(n){const{template:a,info:i}=(0,s.q7)({on:n,templateName:l,templateDescription:o});t({description:{...e.description,templateName:a,templateDescription:i}})}}),[n]),{templateName:l,templateDescription:o,summary:i,setTemplateName:n=>t({description:{...e.description,templateName:n}}),setTemplateDescription:n=>t({description:{...e.description,templateDescription:n}}),setSummary:n=>t({description:{...e.description,summary:n}})}}},59303:(e,t,n)=>{n.d(t,{L7:()=>r,m8:()=>o,pU:()=>i,q7:()=>y,sS:()=>A,we:()=>N});n(17333),n(3064),n(41393),n(14905),n(98992),n(54520),n(72577),n(81454),n(8872),n(62953);var a=n(83863),l=n(33829);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n=>{let{target:{checked:a}}=n;return e(t?!a:a)}},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n=>e(t?!n:n)},r=e=>t=>{let{target:{value:n}}=t;return e(n)},s=function(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{alertId:l,alertingConditions:o={}}=n,{critical:i,warning:r}=o;return!!l?{...null!==i&&void 0!==i&&i.value?{crit:i.value}:{},...null!==r&&void 0!==r&&r.value?{warn:r.value}:{}}:i&&r&&null!==(e=i.denoter)&&void 0!==e&&e.value&&void 0!==i.value&&null!==(t=r.denoter)&&void 0!==t&&t.value&&void 0!==r.value?{crit:c({flavour:"critical",formula:a.OK.value,isFormula:i.isFormula,denoter:i.denoter,value:i.value,recovery:i.recovery}),warn:c({flavour:"warning",formula:a.OK.value,isFormula:r.isFormula,denoter:r.denoter,value:r.value,recovery:r.recovery})}:{}},u={critical:"$status == $CRITICAL",warning:"$status >= $WARNING"},c=e=>{let{flavour:t,formula:n=a.OK.value,isFormula:l,denoter:o,value:i,recovery:r}=e;const s=u[t];return l?i:null!==r&&void 0!==r&&r.value&&s?"$this ".concat(null===o||void 0===o?void 0:o.symbol," ((").concat(s,")  ? (").concat(r.value,")) : (").concat(i,")"):"".concat(n," ").concat(null===o||void 0===o?void 0:o.symbol," (").concat(i,")")},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{value:t,unit:n}=e;return"".concat(t).concat(null===n||void 0===n?void 0:n.symbol)},v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value";return function(){let t=arguments.length>1?arguments[1]:void 0;const n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((t=>t[e]));return t?n:n.join(" ")}},m=v(),p=v("label"),g=function(){let{aggregation:e,denoter:t,dimensions:n=[],timePeriod:a,options:l=[]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;const i=l.map((e=>{let{value:t}=e;return t})).join(" "),r=n.map((e=>{let{value:t}=e;return t})).filter(Boolean),s=r.length?"".concat((null===t||void 0===t?void 0:t.value)||"of"," ").concat(r.join(",")):"foreach"==(null===t||void 0===t?void 0:t.value)?"foreach *":null,u="anomalies"==o?"anomaly-rate":"";return{lookup:[null===e||void 0===e?void 0:e.value,null===a||void 0===a?void 0:a.after,i,s,u].filter(Boolean).join(" ")}},f=function(){let{active:e,up:t,down:n,multiplier:a,max:l}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e||0==parseInt(null===t||void 0===t?void 0:t.value,10)&&0==parseInt(null===n||void 0===n?void 0:n.value,10))return{};const o=[...parseInt(null===t||void 0===t?void 0:t.value,10)>0?["up ".concat(d(t))]:[],...parseInt(null===n||void 0===n?void 0:n.value,10)>0?["down ".concat(d(n))]:[],...parseFloat(a)>0?["multiplier ".concat(a)]:[],...parseInt(null===l||void 0===l?void 0:l.value,10)>0?["max ".concat(d(l))]:[]];return o.length?{delay:o.join(" ")}:{}},h=function(){let{off:e,warningAlertsDuration:t,criticalAlertsDuration:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=[...e?["off"]:[],...!e&&null!==t&&void 0!==t&&t.value?["warning ".concat(d(t))]:[],...!e&&null!==n&&void 0!==n&&n.value?["critical ".concat(d(n))]:[]];return a.length?{repeat:a.join(" ")}:{}},b=function(){let{active:e,sendTo:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{value:n,clearNotifications:a}=t||{};return{...n?{to:n}:{},...e&&!a?{options:"no-clear-notification"}:{}}},y=e=>{let{templateName:t,templateDescription:n,on:a}=e;const o=(0,l.A)(),i=a?"".concat(a.split(".").join("_"),"_").concat(o):o;return{template:t||i,info:n||"Alert description"}},C=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;return function(){var n;let{items:a=[],expression:l=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=null===(n=[t(a),l].join(" "))||void 0===n?void 0:n.trim();return o?{[e]:o}:{}}},w=C("hosts"),D=C("charts",(function(){return p(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],!0).reduce(((e,t)=>{var n;const a=(null===(n=/\.(.*?)@/.exec(t))||void 0===n?void 0:n[1])||t;return e.includes(a)||e.push(a),e}),[]).join(" ")})),O=C("chart labels",(e=>m(e,!0).map((e=>e.split(":").join("="))).join(" "))),A=function(){const e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{detection:t,metrics:n={},description:a={},alertingConditions:l={}}=e,{on:o,hosts:i,os:r,charts:u,chartLabels:c,lookup:v,calc:p,units:y}=n,{templateName:C,templateDescription:A,summary:N}=a,{agentOptions:_={},interval:x={},delayNotification:E={}}=l,{execScript:I={},sendTo:k={}}=_;return{...C?{template:C}:{},...o?{on:o}:{},...w(i),...null!==r&&void 0!==r&&r.length?{os:m(r)}:{},...D(u),...O(c),...g(v,null===t||void 0===t?void 0:t.method),...null!==p&&void 0!==p&&p.value?{calc:p.value}:{},...y&&null!==p&&void 0!==p&&p.value?{units:y}:{},...x.value?{every:d(x)}:{},...s(e),..._.active&&I.active&&I.path?{exec:I.path}:{},...A?{info:A}:{},...N?{summary:N}:{},...f(E),..._.active?h(_):{},...b(_)}}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return Object.entries(e).reduce(((e,t)=>{let[n,a]=t;return[...e,"".concat(n,": ").concat(a)]}),[]).join("\n")},N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{id:t,context:n="",calculation:l="",displayName:o="",configInfo:i="",critical:r="",warning:s="",lookupMethod:u="",lookupOptions:c=[],lookupAfter:d,lookupBefore:v,lookupDimensions:m="",summary:p}=e;return{...a.XG,...t?{alertId:t}:{},metrics:{...a.XG.metrics,on:n,lookup:{...a.XG.metrics.lookup,aggregation:Object.values(a.uZ).find((e=>{let{value:t}=e;return t==u})),dimensions:m.split(" ").map((e=>({label:e,value:e}))),options:Object.values(a.Pm).filter((e=>{let{value:t}=e;return c.includes(t)}))}},alertingConditions:{...a.XG.alertingConditions,critical:{value:r},warning:{value:s}},description:{summary:p,templateName:o,templateDescription:i}}}}}]);