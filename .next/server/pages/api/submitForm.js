"use strict";(()=>{var e={};e.id=795,e.ids=[795],e.modules={4558:e=>{e.exports=require("next/config")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2566:(e,t,r)=>{r.r(t),r.d(t,{config:()=>A,default:()=>h,routeModule:()=>b});var s={};r.r(s),r.d(s,{config:()=>f,default:()=>P});var a=r(1802),n=r(7153),o=r(6249);let i=require("nodemailer");var l=r.n(i);let u=require("multiparty");var m=r.n(u);let p=(e,t,r,s,a)=>`
    <html>
        <head>
            <style>
                body {
                margin: 0;
                    font-family: 'Arial', sans-serif;
                }
                
                .template-body {
                    padding: 24px;
                
                h2 {
                    color: #333;
                    }

                    p {
                        color: #555;
                        margin-bottom: 10px;
                    }

                    strong {
                        color: #A12212;
                    }
                }
                .message {
                    white-space: pre-wrap;
                }

            
                .template-footer {
                    padding: 20px;
                    background-color: #06202D
                }
            </style>
        </head>
        <body>
            <div class="template-body">
                <h2>${e}</h2>
                <p><strong>Naam :</strong> ${t}</p>
                <p><strong>Email:</strong> ${r}</p>
                ${void 0!==a?`<p><strong>Telefoonnummer:</strong>${a}</p>
                        <p class="message"><strong>Message:
</strong>${s}</p>`:`<p class="message"><strong>Message:
</strong>${s}</p>`}
            </div>
        </body>
    </html>
`;var c=r(4558),d=r.n(c);let{publicRuntimeConfig:g}=d()(),f={api:{bodyParser:!1}};async function P(e,t){if("POST"!==e.method)return t.status(405).end();let r=new(m()).Form;r.parse(e,async(e,r,s)=>{if(e)return console.error(e),t.status(500).json({success:!1,err:e});let a={name:r.name[0],email:r.email[0],phone:r.phone?r.phone[0]:void 0,message:r.message[0],subject:r.subject[0]},n="file"in s?s.file:void 0,o=l().createTransport({host:g.NEXT_PUBLIC_MAIL_HOST,port:465,secure:!0,logger:!0,debug:!0,auth:{user:g.NEXT_PUBLIC_MAIL_USER,pass:g.NEXT_PUBLIC_MAIL_PWD}}),i={from:a.email,to:g.NEXT_PUBLIC_MAIL_USER,subject:a.subject,text:`Naam: ${a.name}
Email: ${a.email}
Bericht: ${a.message}`,attachments:n?Array.isArray(n)?[...n]:[n]:[],html:p(a.subject,a.name,a.email,a.message,a.phone)};try{await o.sendMail(i),t.status(200).json({success:!0})}catch(e){console.error(e),t.status(500).json({success:!1,error:e})}})}let h=(0,o.l)(s,"default"),A=(0,o.l)(s,"config"),b=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/submitForm",pathname:"/api/submitForm",bundlePath:"",filename:""},userland:s})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=2566);module.exports=r})();