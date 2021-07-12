(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={contsct__list:"ContactList_contsct__list__3xhyM",contact__list_el:"ContactList_contact__list_el__3adlL",contact__list_text:"ContactList_contact__list_text__2BC_P"}},16:function(t,e,n){t.exports={form__input:"Form_form__input__3g_Hd"}},20:function(t,e,n){t.exports={filter__input:"Filter_filter__input__HyeJh"}},46:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(7),i=n.n(o),s=n(11),l=n(12),u=n(14),b=n(13),d=n(5),j=n(8),h=n.n(j),m=n(3),f={addContact:Object(m.b)("phonebook/add",(function(t){return{payload:{name:t.name,number:t.number,id:h.a.generate()}}})),deleteContact:Object(m.b)("phonebook/delete"),filterContscts:Object(m.b)("phonebook/changeFiler")},_=n(15),p=n.n(_),O=n(1),C=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},x=Object(d.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contactsData:C(n,a)}}),(function(t){return{onDeleteContact:function(e){return t(f.deleteContact(e))}}}))((function(t){var e=t.contactsData,n=t.onDeleteContact;return Object(O.jsx)("ul",{className:p.a.contsct__list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(O.jsxs)("li",{className:p.a.contact__list_el,children:[Object(O.jsxs)("p",{className:p.a.contact__list_text,children:[e,": ",a]}),Object(O.jsx)("button",{onClick:function(){return n(c)},children:"delete"})]},c)}))})})),v=n(6),g=n(16),y=n.n(g),k=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=h.a.generate(),t.telInputId=h.a.generate(),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){if(e.preventDefault(),!t.props.contacts.find((function(e){return e.name.includes(t.state.name)})))return t.props.onSubmit(t.state),void t.reset();alert("this name already exist"),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(O.jsx)("input",{className:y.a.form__input,id:this.nameInputId,onChange:this.handleChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(O.jsxs)("label",{htmlFor:this.telInputId,children:["Telephone",Object(O.jsx)("input",{className:y.a.form__input,id:this.telInputId,onChange:this.handleChange,value:this.state.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(O.jsx)("button",{className:y.a.form__btn,type:"submit",children:"Add Contact"})]})}}]),n}(c.Component),I=Object(d.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){return t(f.addContact(e))}}}))(k),S=n(20),w=n.n(S),A=(n(41),Object(d.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){var n=e.target.value;return t(f.filterContscts(n))}}}))((function(t){var e=t.onChange,n=t.value;return Object(O.jsxs)("label",{children:["Find contacts by name",Object(O.jsx)("input",{className:w.a.filter__input,onChange:e,value:n,name:"filter"})]})}))),N=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Phone Book"}),Object(O.jsx)(I,{onSubmit:this.formSubmitHandler}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(A,{}),Object(O.jsx)(x,{})]})}}]),n}(c.Component),F=n(21),L=n(2),z=n(24),D=Object(m.c)([],(a={},Object(v.a)(a,f.addContact,(function(t,e){var n=e.payload;return[].concat(Object(z.a)(t),[n])})),Object(v.a)(a,f.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),B=Object(m.c)("",Object(v.a)({},f.filterContscts,(function(t,e){return e.payload}))),J=Object(L.b)({items:D,filter:B}),H=n(22),M=n.n(H),Z=n(4),q=n(23),P={key:"contacts",storage:n.n(q).a,blacklist:["filter"]},T=Object(L.b)({contacts:Object(Z.g)(P,J)});console.log(Object(m.d)()),console.log("production");var E=Object(m.a)({reducer:T,devTools:!1,middleware:function(t){return t({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}}).concat(M.a)}}),$={store:E,persistor:Object(Z.h)(E)};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(d.a,{store:$.store,children:Object(O.jsx)(F.a,{loading:null,persistor:$.persistor,children:Object(O.jsx)(N,{})})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d4c41a4b.chunk.js.map