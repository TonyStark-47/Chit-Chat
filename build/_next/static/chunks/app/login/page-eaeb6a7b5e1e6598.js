(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{6745:function(e,t,r){Promise.resolve().then(r.bind(r,7621))},7832:function(e,t,r){"use strict";r.d(t,{Z:function(){return Components_Navbar}});var n=r(7437),a=r(1396),s=r.n(a);r(2265);var i=r(4606),l=r(1490),Components_Logout=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("li",{children:(0,n.jsx)("div",{onClick:()=>{l.Z.remove("UserId"),window.location.reload()},className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600 rounded md:bg-transparent md:p-0",children:"Log Out"})})}),Components_Navbar=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{children:(0,n.jsx)("nav",{className:"fixed top-0 left-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded",children:(0,n.jsxs)("div",{className:"container flex flex-wrap justify-between items-center mx-auto",children:[(0,n.jsx)(s(),{href:"/dashboard",className:"flex items-center",children:(0,n.jsx)("span",{className:"self-center text-xl font-semibold font-serif px-3 whitespace-nowrap text-gray-700",children:"Chit-Chat"})}),(0,n.jsx)("div",{className:"w-full md:w-auto",id:"navbar-default",children:(0,n.jsxs)("ul",{className:"flex flex-row flex-wrap p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-400",children:[(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/organization",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0",children:"Organizations"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/addAIData",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0",children:"Train Data"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"https://github.com/apurvjha123",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0",children:"About"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"https://github.com/apurvjha123/chit-chat-nextjs",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0",children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(i.rFR,{className:"p-1 text-xl"}),"Contribute"]})})}),(0,n.jsx)(Components_Logout,{})]})})]})})})})},9947:function(e,t,r){"use strict";r.d(t,{$9:function(){return getOrganizationById},Fi:function(){return addOrganization},Mo:function(){return SignUp},XU:function(){return getAiModelById},gx:function(){return Auth}});var n=r(2173),a=r(3396);let s=(0,a.K)({Production:!0}),getOrganizationById=async()=>{let e=await n.Z.get(s+"/api/v1/getOrganizationById",{withCredentials:!0});return e.data},getAiModelById=async()=>{let e=await n.Z.get(s+"/api/v1/getAiModelById",{withCredentials:!0});return e.data},addOrganization=async e=>{let t=await n.Z.post(s+"/api/v1/newOrganization",e);return t},Auth=async e=>{let t=await n.Z.post(s+"/register/login",e,{withCredentials:!0});return t},SignUp=async e=>{let t=await n.Z.post(s+"/register/signup",e,{withCredentials:!0});return t}},3396:function(e,t,r){"use strict";r.d(t,{K:function(){return serverUrl}});let serverUrl=e=>e.Production?"http://3.110.27.93":"http://localhost:8000"},7621:function(e,t,r){"use strict";r.r(t);var n=r(7437),a=r(2265),s=r(7832),i=r(171),l=r(9150),o=r(4033),d=r(9947),c=r(1396),u=r.n(c);t.default=()=>{let e=(0,o.useRouter)(),[t,r]=(0,a.useState)(!1),[c,p]=(0,a.useState)({UserName:"",Password:""}),handleChange=e=>{p({...c,[e.target.name]:e.target.value})},handleSubmit=async t=>{var n;t.preventDefault(),r(!0);let a=await (0,d.gx)(c);r(!1),(null===(n=a.data)||void 0===n?void 0:n.status)!="Failed"?((0,i.Am)("Organization Submitted !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),e.push("/dashboard")):i.Am.error("Failed to Login !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{}),(0,n.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-opacity-50 sm:pt-24 pt-30",children:(0,n.jsxs)("form",{onSubmit:handleSubmit,className:"p-8 bg-white rounded-lg shadow-xl w-96 bg-opacity-10",style:{backdropFilter:"blur(4px)"},children:[(0,n.jsx)("div",{className:"text-gray-950 flex justify-center text-2xl",children:"Log In"}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-600",children:"UserName"}),(0,n.jsx)("input",{type:"text",name:"UserName",required:!0,minLength:6,onChange:handleChange,className:"mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-pink-500"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-600",children:"Password"}),(0,n.jsx)("input",{type:"password",name:"Password",required:!0,minLength:6,maxLength:12,onChange:handleChange,title:"Please enter a 10-digit mobile number",className:"mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none  focus:border-pink-500"})]}),t?(0,n.jsx)("button",{disabled:!0,className:"w-full flex justify-center py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700",children:(0,n.jsx)(l.Z7b,{className:"animate-spin"})}):(0,n.jsx)("button",{className:"w-full py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700",children:"Submit"}),(0,n.jsxs)("p",{className:"font-sans font-normal flex justify-center p-2",children:["Create An Account"," ",(0,n.jsx)(u(),{href:"/sign-up",className:"text-sky-500 underline italic pl-2",children:"Sign Up"})]})]})})]})}},4033:function(e,t,r){e.exports=r(290)}},function(e){e.O(0,[447,712,438,563,971,864,744],function(){return e(e.s=6745)}),_N_E=e.O()}]);