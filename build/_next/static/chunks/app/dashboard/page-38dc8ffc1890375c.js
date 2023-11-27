(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{9129:function(e,t,s){Promise.resolve().then(s.bind(s,1388))},7832:function(e,t,s){"use strict";s.d(t,{Z:function(){return Components_Navbar}});var a=s(7437),r=s(1396),n=s.n(r);s(2265);var i=s(4606),l=s(1490),Components_Logout=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("li",{children:(0,a.jsx)("div",{onClick:()=>{l.Z.remove("UserId"),window.location.reload()},className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600 rounded md:bg-transparent md:p-0",children:"Log Out"})})}),Components_Navbar=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{children:(0,a.jsx)("nav",{className:"fixed top-0 left-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded",children:(0,a.jsxs)("div",{className:"container flex flex-wrap justify-between items-center mx-auto",children:[(0,a.jsx)(n(),{href:"/dashboard",className:"flex items-center",children:(0,a.jsx)("span",{className:"self-center text-xl font-semibold font-serif px-3 whitespace-nowrap text-gray-700",children:"Chit-Chat"})}),(0,a.jsx)("div",{className:"w-full md:w-auto",id:"navbar-default",children:(0,a.jsxs)("ul",{className:"flex flex-row flex-wrap p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-400",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/organization",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0",children:"Organizations"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/addAIData",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0",children:"Train Data"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"https://github.com/apurvjha123",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"https://github.com/apurvjha123/chit-chat-nextjs",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(i.rFR,{className:"p-1 text-xl"}),"Contribute"]})})}),(0,a.jsx)(Components_Logout,{})]})})]})})})})},4608:function(e,t,s){"use strict";var a=s(7437);s(2265);var r=s(1396),n=s.n(r);t.Z=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,a.jsxs)("div",{className:"bg-white bg-opacity-10 rounded-xl p-8 w-96 shadow-lg backdrop-blur-md",children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Login Is Require !"}),(0,a.jsx)(n(),{href:"/login",className:"px-4 py-2 rounded bg-white bg-opacity-20 hover:bg-opacity-30 focus:outline-none",children:"Sign Up"})]})})})},9947:function(e,t,s){"use strict";s.d(t,{$9:function(){return getOrganizationById},Fi:function(){return addOrganization},Mo:function(){return SignUp},XU:function(){return getAiModelById},gx:function(){return Auth}});var a=s(2173),r=s(3396);let n=(0,r.K)({Production:!0}),getOrganizationById=async()=>{let e=await a.Z.get(n+"/api/v1/getOrganizationById",{withCredentials:!0});return e.data},getAiModelById=async()=>{let e=await a.Z.get(n+"/api/v1/getAiModelById",{withCredentials:!0});return e.data},addOrganization=async e=>{let t=await a.Z.post(n+"/api/v1/newOrganization",e);return t},Auth=async e=>{let t=await a.Z.post(n+"/register/login",e,{withCredentials:!0});return t},SignUp=async e=>{let t=await a.Z.post(n+"/register/signup",e,{withCredentials:!0});return t}},3396:function(e,t,s){"use strict";s.d(t,{K:function(){return serverUrl}});let serverUrl=e=>e.Production?"http://3.110.27.93":"http://localhost:8000"},1388:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return page}});var a=s(7437),r=s(7832),n=s(2265);function OrgTemp(e){let{OrganizationName:t,OrganizationPhone:s,OrganizationWebsite:r,createdAt:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex justify-center items-center p-3",children:(0,a.jsxs)("div",{className:"overflow-x-auto scrollbar-hide max-w-xs bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300",children:[(0,a.jsx)("h1",{className:"text-xl font-semibold mb-2",children:t}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("span",{className:"font-medium",children:"Phone:"})," ",s]}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("span",{className:"font-medium",children:"Website:"})," ",r]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-medium",children:"Created At:"})," ",new Date(n).toLocaleString()]})]})})})}var i=s(6820),l=s(2410),d=s(4606),o=s(171),dashboard_AiModel=e=>{let{organizationName:t,uploadKnowledge:s,embeddedKnowlege:r,apiKey:c,createdAt:x}=e,[m,h]=(0,n.useState)({organizationName:"",uploadKnowledge:"",embeddedKnowlege:"",apiKey:"",createdAt:""}),[p,u]=(0,n.useState)(!1);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsx)("div",{className:"rounded-xl p-2 shadow-md w-full",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("div",{className:"flex-none rounded-md mr-2",children:t}),(0,a.jsxs)("div",{className:"flex-grow text-center rounded-md",children:[c.substring(0,4),"...",c.slice(-5),(0,a.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(c.toString()).then(()=>{(0,o.Am)("API Key copied to clipboard!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}).catch(e=>{o.Am.error("Failed to copy API Key!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})})},className:"p-2 border text-white rounded active:bg-white",children:(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)(i.fwS,{className:"text-lime-500"})})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"flex-none rounded-md underline pt-3 text-blue-900",onClick:()=>{h({organizationName:t,uploadKnowledge:s,embeddedKnowlege:r,apiKey:c,createdAt:x}),u(!0)},children:(0,a.jsx)(d.xt8,{})}),p&&(0,a.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",onClick:()=>u(!1),children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gray-500 opacity-50 backdrop-blur-md"}),(0,a.jsxs)("div",{className:"relative p-6 bg-white bg-opacity-20 rounded-lg backdrop-blur-md max-w-screen-lg mx-auto",onClick:e=>e.stopPropagation(),children:[(0,a.jsx)("button",{onClick:()=>u(!1),className:"absolute top-4 right-4  text-gray-500 rounded-full p-2 hover:bg-gray-600 focus:outline-none",children:(0,a.jsx)(l.FMH,{})}),(0,a.jsx)("h2",{className:"text-2xl mb-4",children:"Details"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Organization Name:"})," ",m.organizationName]}),(0,a.jsxs)("p",{className:"flex",children:[(0,a.jsx)("strong",{children:"Upload Knowledge:"})," ",(0,a.jsx)("div",{className:"text-sky-500 underline",children:m.uploadKnowledge})]}),(0,a.jsxs)("p",{className:"flex",children:[(0,a.jsx)("strong",{children:"Embedded Knowledge:"})," ",(0,a.jsx)("div",{className:"text-sky-500 underline",children:m.embeddedKnowlege})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"API Key:"})," ",m.apiKey]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Created At:"})," ",new Date(m.createdAt).toLocaleString()]})]})]})]})]})})})})},c=s(9947),x=s(4608),m=s(1490),h=s(1396),p=s.n(h),page=()=>{let[e,t]=(0,n.useState)(void 0),s=m.Z.get("UserId");(0,n.useEffect)(()=>{t(s)},[s]);let[i,l]=(0,n.useState)({response:{data:[]}}),[d,o]=(0,n.useState)({response:{data:[]}}),value=async()=>{if(e){let e=await (0,c.$9)();l(e)}};(0,n.useEffect)(()=>{value()},[e]);let valueAi=async()=>{if(e){let e=await (0,c.XU)();o(e)}};return(0,n.useEffect)(()=>{valueAi()},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{}),e?(0,a.jsxs)("div",{className:"grid md:grid-cols-7 grid-cols-1 sm:pt-20 pt-52 h-screen shadow-2xl",children:[(0,a.jsxs)("div",{className:"md:col-span-3 overflow-y-auto scrollbar-hide max-h-[calc(100vh-64px)]",children:[(0,a.jsx)("div",{className:"flex justify-center p-2 font-serif text-gray-800 font-bold text-2xl",children:"Organizations"}),(0,a.jsx)("div",{className:"grid sm:grid-cols-2 grid-cols-1",children:i&&i.response&&i.response.data&&i.response.data.map((e,t)=>(0,a.jsx)(OrgTemp,{OrganizationName:e.OrganizationName,OrganizationPhone:e.OrganizationPhone,OrganizationWebsite:e.OrganizationWebsite,createdAt:e.createdAt},t))})]}),(0,a.jsxs)("div",{className:"md:col-span-4 overflow-y-auto scrollbar-hide max-h-[calc(100vh-64px)]",children:[(0,a.jsx)("div",{className:"flex justify-center p-2 font-serif text-gray-800 font-bold text-2xl",children:"Ai Trained Models"}),(0,a.jsxs)("div",{className:"flex p-3",children:[(0,a.jsx)("div",{className:"text-start py-2 font-bold font-sans",children:"Name"}),(0,a.jsx)("div",{className:"flex-grow text-center py-2 font-bold font-sans",children:"API Key"})]}),(0,a.jsx)("div",{className:"p-4 overflow-y-auto",children:d&&d.response&&d.response.data&&d.response.data.map((e,t)=>(0,a.jsx)(p(),{href:"/trychatbot",onClick:()=>{localStorage.setItem("apiKey",e.apiKey)},children:(0,a.jsx)(dashboard_AiModel,{organizationName:e.organizationName,uploadKnowledge:e.uploadKnowledge,embeddedKnowlege:e.embeddedKnowlege,apiKey:e.apiKey,createdAt:e.createdAt})},t))})]})]}):(0,a.jsx)(x.Z,{})]})}}},function(e){e.O(0,[447,115,400,438,563,971,864,744],function(){return e(e.s=9129)}),_N_E=e.O()}]);