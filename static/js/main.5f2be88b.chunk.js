(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,r){},,function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),a=r(4),c=r.n(a),o=(r(14),r(3)),i=r.n(o),l=r(5),d=r(6),u=r(7),m=r(9),f=r(8),h=(r(16),r(0));var j=function(){return Object(h.jsxs)("div",{className:"title-section",children:[Object(h.jsx)("h1",{children:"Employee Directory"}),Object(h.jsx)("p",{children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})},b=(r(18),function(e){var t=e.handleSearchChange;return Object(h.jsx)("div",{className:"container search-container",children:Object(h.jsx)("div",{className:"form-outline",children:Object(h.jsx)("input",{type:"search",id:"form1",className:"form-control",placeholder:"Search","aria-label":"Search",onChange:t})})})}),p=(r(19),{margin:"10px 5px"});var x=function(e){var t=e.sortByName,r=e.sortByPhone,s=e.sortByEmail,n=e.sortByDob;return Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Image"}),Object(h.jsxs)("th",{scope:"col",children:["Name",Object(h.jsx)("span",{onClick:function(){return t()},className:"caret",style:p})]}),Object(h.jsxs)("th",{scope:"col",children:["Phone",Object(h.jsx)("span",{onClick:function(){return r()},className:"caret",style:p})]}),Object(h.jsxs)("th",{scope:"col",children:["Email",Object(h.jsx)("span",{onClick:function(){return s()},className:"caret",style:p})]}),Object(h.jsxs)("th",{scope:"col",children:["DOB",Object(h.jsx)("span",{onClick:function(){return n()},className:"caret",style:p})]})]})})};function O(e){var t=e.split("-"),r=t[0];return[t[1],t[2].split("T")[0],r].join("-")}var y=function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:Object(h.jsx)("img",{src:e.image,alt:e.name})}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.phone}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:O(e.dob)})]})},v=(r(20),function(e){Object(m.a)(r,e);var t=Object(f.a)(r);function r(){var e;return Object(d.a)(this,r),(e=t.call(this)).fetchRandomUser=Object(l.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://randomuser.me/api/?results=20&inc=id,picture,name,cell,email,dob").then((function(e){return e.json()})).then((function(t){var r=t.results;e.setState({user:r})}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e.setState({error:t.t0});case 8:case 9:case"end":return t.stop()}}),t,null,[[0,5]])}))),e.sortByName=function(){e.setState({user:e.state.order?e.state.user.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0})):e.state.user.sort((function(e,t){return e.name.first<t.name.first?1:e.name.first>t.name.first?-1:0}))}),e.setState({filteredUsers:e.state.order?e.state.filteredUsers.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0})):e.state.filteredUsers.sort((function(e,t){return e.name.first<t.name.first?1:e.name.first>t.name.first?-1:0}))}),e.setState({order:!e.state.order})},e.sortByPhone=function(){e.setState({user:e.state.order?e.state.user.sort((function(e,t){return e.cell<t.cell?-1:e.cell>t.cell?1:0})):e.state.user.sort((function(e,t){return e.cell<t.cell?1:e.cell>t.cell?-1:0}))}),e.setState({filteredUsers:e.state.order?e.state.filteredUsers.sort((function(e,t){return e.cell<t.cell?-1:e.cell>t.cell?1:0})):e.state.filteredUsers.sort((function(e,t){return e.cell<t.cell?1:e.cell>t.cell?-1:0}))}),e.setState({order:!e.state.order})},e.sortByEmail=function(){e.setState({user:e.state.order?e.state.user.sort((function(e,t){return e.email<t.email?-1:e.email>t.email?1:0})):e.state.user.sort((function(e,t){return e.email<t.email?1:e.email>t.email?-1:0}))}),e.setState({filteredUsers:e.state.order?e.state.filteredUsers.sort((function(e,t){return e.email<t.email?-1:e.email>t.email?1:0})):e.state.filteredUsers.sort((function(e,t){return e.email<t.email?1:e.email>t.email?-1:0}))}),e.setState({order:!e.state.order})},e.sortByDob=function(){e.setState({user:e.state.order?e.state.user.sort((function(e,t){return e.dob.date<t.dob.date?-1:e.dob.date>t.dob.date?1:0})):e.state.user.sort((function(e,t){return e.dob.date<t.dob.date?1:e.dob.date>t.dob.date?-1:0}))}),e.setState({filteredUsers:e.state.order?e.state.filteredUsers.sort((function(e,t){return e.dob.date<t.dob.date?-1:e.dob.date>t.dob.date?1:0})):e.state.filteredUsers.sort((function(e,t){return e.dob.date<t.dob.date?1:e.dob.date>t.dob.date?-1:0}))}),e.setState({order:!e.state.order})},e.handleSearchChange=function(t){var r=e.state.user.filter((function(e){return e.name.first.startsWith(t.target.value.charAt(0).toUpperCase()+t.target.value.slice(1))}));e.setState({filteredUsers:r})},e.state={user:[],error:null,order:!0,filteredUsers:[]},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.fetchRandomUser()}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(j,{}),Object(h.jsx)(b,{handleSearchChange:this.handleSearchChange}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("table",{className:"table table-striped",children:[Object(h.jsx)(x,{sortByName:this.sortByName,sortByPhone:this.sortByPhone,sortByEmail:this.sortByEmail,sortByDob:this.sortByDob}),Object(h.jsx)("tbody",{children:0===this.state.filteredUsers.length?this.state.user.map((function(e){return Object(h.jsx)(y,{image:e.picture.large,name:e.name.first+" "+e.name.last,phone:e.cell,email:e.email,dob:e.dob.date},e.name.first+" "+e.name.last)})):this.state.filteredUsers.map((function(e){return Object(h.jsx)(y,{image:e.picture.large,name:e.name.first+" "+e.name.last,phone:e.cell,email:e.email,dob:e.dob.date},e.name.first+" "+e.name.last)}))})]})})]})}}]),r}(s.Component));var S=function(){return Object(h.jsx)(v,{})};r(21);c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.5f2be88b.chunk.js.map