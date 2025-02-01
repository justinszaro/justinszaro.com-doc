"use strict";(self.webpackChunkjustinszaro_com_docs=self.webpackChunkjustinszaro_com_docs||[]).push([[6037],{8412:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"technologies/React/Packages/ReactRouter/react-router-core-guide","title":"React Router Core Guide","description":"Philosophy","source":"@site/docs/technologies/React/Packages/ReactRouter/react-router-core-guide.md","sourceDirName":"technologies/React/Packages/ReactRouter","slug":"/technologies/React/Packages/ReactRouter/react-router-core-guide","permalink":"/docs/technologies/React/Packages/ReactRouter/react-router-core-guide","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"technologies","previous":{"title":"React Router Core API","permalink":"/docs/technologies/React/Packages/ReactRouter/api"},"next":{"title":"TanStackQuery","permalink":"/docs/technologies/React/Packages/TanStackQuery/getting-started"}}');var i=t(4848),s=t(8453);const r={},a="React Router Core Guide",c={},l=[{value:"Philosophy",id:"philosophy",level:2},{value:"Static Routing",id:"static-routing",level:3},{value:"Dynamic Routing",id:"dynamic-routing",level:3},{value:"Nested Routes",id:"nested-routes",level:3},{value:"Responsive Routes",id:"responsive-routes",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"react-router-core-guide",children:"React Router Core Guide"})}),"\n",(0,i.jsx)(n.h2,{id:"philosophy",children:"Philosophy"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Router Router allows you to dynamically route your application."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"static-routing",children:"Static Routing"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Routes are declared as part of the app's initialization before any rendering takes place."}),"\n",(0,i.jsx)(n.li,{children:"Laravel uses Static Routing"}),"\n",(0,i.jsx)(n.li,{children:"React Router DOES NOT DO THIS!"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dynamic-routing",children:"Dynamic Routing"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In Dynamic Routing, routing takes place as the app is rendering."}),"\n",(0,i.jsx)(n.li,{children:"This allows almost everything to be a component in React Router."}),"\n",(0,i.jsxs)(n.li,{children:["Example:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"First, grab a Router component from your environment and render it at the top of the app."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'// react-native\nimport { NativeRouter } from "react-router-native";\n\n// react-dom (what we\'ll use here)\nimport { BrowserRouter } from "react-router-dom";\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Next, grab a link component to to send the user to a new location."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'const App = () => (\n  <div>\n    <nav>\n      <Link to="/dashboard">Dashboard</Link>\n    </nav>\n  </div>\n);\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Finally, render a route when someone visits the dashboard."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'const App = () => (\n  <div>\n    <nav>\n      <Link to="/dashboard">Dashboard</Link>\n    </nav>\n    <div>\n      <Route path="/dashboard" component={Dashboard} />\n    </div>\n  </div>\n);\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The route will render ",(0,i.jsx)(n.code,{children:"<Dashboard {...props}/>"})," which is where props are specific router things ",(0,i.jsx)(n.code,{children:"{ match, location, history }"})]}),"\n",(0,i.jsx)(n.li,{children:"If the user is not at the dashboard, null will be rendered."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"nested-routes",children:"Nested Routes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can nest routes in the same way you nest divs."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const App = () => (\n  <BrowserRouter>\n    {/* here's a div */}\n    <div>\n      {/* here's a Route */}\n      <Route path=\"/tacos\" component={Tacos} />\n    </div>\n  </BrowserRouter>\n);\n\n// when the url matches `/tacos` this component renders\nconst Tacos = ({ match }) => (\n  // here's a nested div\n  <div>\n    {/* here's a nested Route,\n        match.url helps us make a relative path */}\n    <Route path={match.url + \"/carnitas\"} component={Carnitas} />\n  </div>\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"responsive-routes",children:"Responsive Routes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Consider a user navigates to /invoices."}),"\n",(0,i.jsx)(n.li,{children:"On a smaller screen, we want to show a list of invoices and link to the invoice dashboard."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Small Screen\nurl: /invoices\n\n+----------------------+\n|                      |\n|      Dashboard       |\n|                      |\n+----------------------+\n|                      |\n|      Invoice 01      |\n|                      |\n+----------------------+\n|                      |\n|      Invoice 02      |\n|                      |\n+----------------------+\n|                      |\n|      Invoice 03      |\n|                      |\n+----------------------+\n|                      |\n|      Invoice 04      |\n|                      |\n+----------------------+\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On larger screens, we want to show a master-detail view where the navigation is on the left and the dashboard or specific invoices show up on the right."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Large Screen\nurl: /invoices/dashboard\n\n+----------------------+---------------------------+\n|                      |                           |\n|      Dashboard       |                           |\n|                      |   Unpaid:             5   |\n+----------------------+                           |\n|                      |   Balance:   $53,543.00   |\n|      Invoice 01      |                           |\n|                      |   Past Due:           2   |\n+----------------------+                           |\n|                      |                           |\n|      Invoice 02      |                           |\n|                      |   +-------------------+   |\n+----------------------+   |                   |   |\n|                      |   |  +    +     +     |   |\n|      Invoice 03      |   |  | +  |     |     |   |\n|                      |   |  | |  |  +  |  +  |   |\n+----------------------+   |  | |  |  |  |  |  |   |\n|                      |   +--+-+--+--+--+--+--+   |\n|      Invoice 04      |                           |\n|                      |                           |\n+----------------------+---------------------------+\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/invoices"})," is not a valid route for a larger screen, since there isn't anything to include on the right hand side."]}),"\n",(0,i.jsx)(n.li,{children:"If you start thinking about routing as UI, it could lead to the following configuration:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'const App = () => (\n  <AppLayout>\n    <Route path="/invoices" component={Invoices} />\n  </AppLayout>\n);\n\nconst Invoices = () => (\n  <Layout>\n    {/* always show the nav */}\n    <InvoicesNav />\n\n    <Media query={PRETTY_SMALL}>\n      {screenIsSmall =>\n        screenIsSmall ? (\n          // small screen has no redirect\n          <Switch>\n            <Route\n              exact\n              path="/invoices/dashboard"\n              component={Dashboard}\n            />\n            <Route path="/invoices/:id" component={Invoice} />\n          </Switch>\n        ) : (\n          // large screen does!\n          <Switch>\n            <Route\n              exact\n              path="/invoices/dashboard"\n              component={Dashboard}\n            />\n            <Route path="/invoices/:id" component={Invoice} />\n            <Redirect from="/invoices" to="/invoices/dashboard" />\n          </Switch>\n        )\n      }\n    </Media>\n  </Layout>\n);\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The user rotating their phone will be redirected to the correct layout."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);