(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{286:function(e,t,a){e.exports=a(542)},294:function(e,t,a){e.exports={black:"#000",white:"#fff",midGray:"#a3a3a3",darkPurple:"#03223b",purple:"#60607e",lightGreen:"#a5d6a7",lightMidGreen:"#00f59e",lightDarkGreen:"#11c574",lightRed:"#ef9a9a",lightBlue:"#81d4fa",lightPurple:"#b39ddb",lightAqua:"#80cbc4"}},296:function(e,t,a){},361:function(e,t,a){},516:function(e,t,a){},537:function(e,t,a){},538:function(e,t,a){},539:function(e,t,a){},540:function(e,t,a){},541:function(e,t,a){},542:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(31),s=a.n(c),i=a(202),u=a(43),o=a(45),l=a(204),m=a(32),d=a(56),f=a(19),h="/quiz",p="/results",v=(a(294),function(){return n.a.createElement("div",{className:"header"},n.a.createElement(d.b,{to:"/",className:"header__logo"}))}),b=(a(296),function(e){var t=e.children;return n.a.createElement("div",{className:"page"},t)}),E=a(10),g=a(11),y=a(23),w=a(6),O=a(21),j=a(25),N=a.n(j),_=a(69),k=a(87),A=a.n(k),F=a(86),q=a.n(F),z=a(26),x=a.n(z),C=a(33),S=a.n(C),T=function(e){var t=e.className,a=e.label;return n.a.createElement("div",{className:t},n.a.createElement(d.b,{to:"/",className:"button-link"},n.a.createElement(S.a,{color:"primary",size:"small",variant:"contained"},a)))};T.defaultProps={className:"",label:"Start"};var Q=T,R=(a(361),function(e){var t=e.actions,a=e.avatar_message,r=e.children,c=e.className,s=e.error,i=e.isFetching,u=e.title,o=e.subheader,l={};a&&(l.avatar=n.a.createElement(q.a,{className:"card-header__avatar"},a));return n.a.createElement(_.a,{className:"card ".concat(c)},n.a.createElement(_.d,Object.assign({title:u,subheader:o},l)),n.a.createElement(_.c,{className:"card-content"},i?n.a.createElement("div",{className:"center-content"},n.a.createElement(A.a,null)):N.a.isEmpty(s)?r:n.a.createElement("div",{className:"center-content error"},n.a.createElement(x.a,{className:"error_title",variant:"h2"},"Error"),n.a.createElement(Q,{label:"Home"}))),t&&n.a.createElement(_.b,{className:"card-actions"},t))});R.defaultProps={actions:void 0,avatar_message:"",className:"",content_center:"",error:{},isFetching:!1,title:"",subheader:""};var D=R,G=a(134),U=a(5),M=a.n(U),P=a(88),B=a.n(P),I=a(66),V=a.n(I),H=a(89),J=a.n(H),L=a(68),W=a(15),X=a(46),K=a(135),Y="integer",Z="string",$={boolean:"boolean",integer:"number",string:"string"},ee=function(e){var t={};return e.length>0&&(t=Object.entries(e[0]).reduce(function(e,t){var a=Object(X.a)(t,2),r=a[0],n=a[1];return Object(W.a)({},e,Object(L.a)({},r,n.value))},{})),t},te=function(e){var t={};return e.length>0&&(t=Object.entries(e[0]).reduce(function(e,t){var a=Object(X.a)(t,2),r=a[0],n=a[1],c=n.dataType,s=n.required;if(!$[c])return Object(W.a)({},e);var i=K[$[c]]();return s&&(i=i.required("validation.required")),Object(W.a)({},e,Object(L.a)({},r,i))},{})),K.object().shape(t)},ae=function(e){var t=e.attr,a=e.error,r=e.form,c=e.onChange,s=e.value,i=e.setFieldTouched,u=r[t],o=u.dataType,l=u.label,m=u.options,d=u.readOnly,f=u.required,h=function(){i(t)},p=function(e){i(t),c(e)};return n.a.createElement(n.a.Fragment,null,function(){if(o===Z||o===Y){var e={name:t,label:l,disabled:d,error:a,onBlur:h,onChange:p,required:f,type:$[o],value:s};return m&&m.length>0?n.a.createElement(V.a,Object.assign({},e,{select:!0}),m.map(function(e){return n.a.createElement(J.a,{key:e.value,value:e.value},e.label)})):n.a.createElement(V.a,e)}return null}())};ae.defaultProps={error:!1};var re=ae,ne=(a(516),function(e){var t=e.results;return n.a.createElement(G.b,{enableReinitialize:!0,initialValues:ee(t),onSubmit:function(t){return function(e,t){return t.onSave(e)}(t,e)},validationSchema:te(t)},function(e){var a=e.dirty,r=e.errors,c=e.handleChange,s=e.handleReset,i=e.isValid,u=e.setFieldTouched,o=e.submitForm,l=e.touched,m=e.values,d=Object.keys(l).length>0&&a;return n.a.createElement(G.a,{className:"form"},Object.keys(m).map(function(e,a){return n.a.createElement(re,{key:a,attr:e,error:l[e]&&r[e]&&!i,form:t[0],onChange:c,setFieldTouched:u,value:m[e]})}),n.a.createElement(B.a,{className:M()("card-actions__form",{"card-actions__form--hide":!d})},n.a.createElement(S.a,{color:"primary",disabled:!i,onClick:o,size:"small",variant:"contained"},"Save"),n.a.createElement(S.a,{onClick:function(){return s()},size:"small"},"Reset")))})}),ce=a(36),se=a.n(ce),ie=a(58),ue="REQUEST",oe="SUCCESS",le="FAILURE";function me(e){if(!e)throw new Error("cannot create request type with base = '' or base = null");return[ue,oe,le].reduce(function(t,a){return t[a]="".concat(e,"_").concat(a),t},{})}function de(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(W.a)({type:e},t)}var fe=me("GET_FORM_DATA"),he=me("GET_QUESTIONS"),pe="NEXT_QUESTION",ve="GRADE",be=function(e){return e.map(function(e){return{label:e.name,value:e.id}})},Ee=a(195),ge=function(){return de(fe[ue])},ye=function(e){return de(fe[oe],{results:e})},we=function(e){return de(fe[le],{error:e})},Oe=a(195),je=function(){return de(he[ue])},Ne=function(e){return de(he[oe],{results:e})},_e=function(e){return de(he[le],{error:e})},ke=function(e){function t(){var e,a;Object(E.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).handleOnSave=function(e){var t=a.props,r=t.getQuestionsAction,n=t.history;r(e),n.replace(h)},a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getFormDataAction)()}},{key:"render",value:function(){var e=this.props.form,t=e.error,a=e.isFetching,r=e.results;return n.a.createElement(D,{error:t,isFetching:a,title:"Start"},n.a.createElement(ne,{onSave:this.handleOnSave,results:r}))}}]),t}(r.Component),Ae=Object(o.b)(function(e){return{form:e.form}},function(e){return{getFormDataAction:function(){return e(function(){var e=Object(ie.a)(se.a.mark(function e(t){var a,r,n,c,s,i,u,o,l;return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://opentdb.com","/api_category.php"),e.prev=1,t(ge()),e.next=5,Ee.get(a);case 5:return r=e.sent,n=r.data,c=Ee.create({baseURL:"http://robertvarela.com/keep-austin-nerdy"}),e.next=10,c.get("formData.json");case 10:s=e.sent,(i=s.data)[0].category=Object(W.a)({},i[0].category,{options:be(n.trivia_categories)}),t(ye(i)),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(1),console.log("Error",e.t0),u=e.t0.response,o=u.status,l=u.statusText,t(we({status:o,statusText:l}));case 21:case"end":return e.stop()}},e,null,[[1,16]])}));return function(t){return e.apply(this,arguments)}}())},getQuestionsAction:function(t){return e(function(e){return function(){var t=Object(ie.a)(se.a.mark(function t(a){var r,n,c,s,i,u;return se.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat("https://opentdb.com","/api.php"),t.prev=1,a(je()),t.next=5,Oe.get(r,{params:Object(W.a)({},e)});case 5:n=t.sent,c=n.data.results,a(Ne(c)),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(1),console.log("Error",t.t0),s=t.t0.response,i=s.status,u=s.statusText,a(_e({status:i,statusText:u}));case 15:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(ke),Fe=function(e){var t=e.history;return n.a.createElement(b,null,n.a.createElement(Ae,{history:t}))},qe=function(e){function t(){var e,a;Object(E.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).state={answers:[]},a.shuffleAnswers=function(){var e=a.props.item,t=e.correct_answer,r=e.incorrect_answers;a.setState({answers:N.a.shuffle(r.concat(t))})},a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.shuffleAnswers()}},{key:"componentDidUpdate",value:function(e){var t=e.item,a=this.props.item;N.a.isEqual(t,a)||this.shuffleAnswers()}},{key:"render",value:function(){var e=this.state.answers,t=this.props,a=t.answered,r=t.handleAnswer,c=t.item,s=c.correct_answer,i=c.question;return n.a.createElement(n.a.Fragment,null,n.a.createElement(x.a,{className:"question",variant:"body1"},i),e.map(function(e){return n.a.createElement(S.a,{key:e,disabled:a,onClick:function(){return r(e,s)},size:"small",variant:"outlined"},e)}))}}]),t}(r.Component),ze=a(210),xe=a.n(ze),Ce=a(211),Se=a.n(Ce),Te=(a(537),function(e){var t=e.answer,a=e.isAnswerCorrect;return n.a.createElement("div",{className:M()("answer","center-content",{"answer--correct":a})},a?n.a.createElement(xe.a,null):n.a.createElement(Se.a,null),t)}),Qe=(a(538),function(e){var t=e.answer,a=e.answered,r=e.current,c=e.handleAnswer,s=e.isAnswerCorrect,i=e.results;return n.a.createElement("div",{className:"quiz"},n.a.createElement(qe,{answered:a,handleAnswer:c,item:i[r]}),a&&n.a.createElement(Te,{answer:t,isAnswerCorrect:s}))}),Re={answer:"",answered:!1,isAnswerCorrect:!1,hideQuiz:!0},De=function(e){function t(){var e,a;Object(E.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(y.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(c)))).state=Re,a.resetState=function(){var e=a.state.hideQuiz;a.setState(Object(W.a)({},Re,{hideQuiz:e}))},a.handleAnswer=function(e,t){e===t&&(a.handleGrade(),a.setState({isAnswerCorrect:!0})),a.setState({answer:e,answered:!0})},a.handleGrade=function(){(0,a.props.gradeAction)()},a.handleOnClickNext=function(){(0,a.props.nextQuestionAction)()},a.handleOnClickFinish=function(){a.props.history.replace(p)},a.display=function(){var e=a.state,t=e.answer,r=e.answered,c=e.hideQuiz,s=e.isAnswerCorrect,i=a.props.quiz,u=i.current,o=i.results;return c?n.a.createElement(Q,{className:"center-content"}):n.a.createElement(Qe,{answer:t,answered:r,current:u,handleAnswer:a.handleAnswer,isAnswerCorrect:s,results:o})},a.diplayButton=function(){var e=a.state,t=e.answered,r=e.hideQuiz,c=a.props.quiz,s=c.current+1===c.results.length,i={onClick:a.handleOnClickNext,label:"Next"};return s&&(i.className="card-actions__finish",i.onClick=a.handleOnClickFinish,i.label="Finish"),!r&&n.a.createElement(S.a,Object.assign({},i,{color:"primary",disabled:!t,size:"small",variant:"contained"}),i.label)},a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.quiz.current,a=e.quiz.results,r=this.props.quiz,n=r.current,c=r.error,s=r.results;N.a.isEqual(a,s)||this.setState({hideQuiz:N.a.isEmpty(s)&&N.a.isEmpty(c)}),N.a.isEqual(t,n)||this.resetState()}},{key:"render",value:function(){var e=this.props.quiz,t=e.current,a=e.error,r=e.grade,c=e.isFetching,s=e.results,i=N.a.isEmpty(s)?"Quiz":s[0].category,u=N.a.isEmpty(s)?"":"".concat(t+1," of ").concat(s.length);return n.a.createElement(D,{actions:this.diplayButton(),avatar_message:"".concat(r,"%"),error:a,isFetching:c,title:i,subheader:u},this.display())}}]),t}(r.Component),Ge=Object(o.b)(function(e){return{quiz:e.quiz}},function(e){return{gradeAction:function(){return e(function(){var e=Object(ie.a)(se.a.mark(function e(t){return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:ve});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},nextQuestionAction:function(){return e(function(){var e=Object(ie.a)(se.a.mark(function e(t){return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:pe});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}})(De),Ue=function(e){var t=e.history;return n.a.createElement(b,null,n.a.createElement(Ge,{history:t}))},Me=(a(539),function(e){var t=e.results;return n.a.createElement("div",{className:"results"},t.map(function(e,t){var a=e.correct_answer,r=e.question,c=t+1;return n.a.createElement("div",{key:t},n.a.createElement("div",{className:M()("results__number",{"results__number-double":c>9})},n.a.createElement(x.a,{variant:"body2"},"".concat(c,"."))),n.a.createElement("div",{className:"results__q-and-a"},n.a.createElement(x.a,{variant:"body2"},r),n.a.createElement(x.a,{className:"results__answer",variant:"body2"},a)))}))}),Pe=Object(o.b)(function(e){return{quiz:e.quiz}},null)(function(e){var t=e.quiz,a=t.error,r=t.grade,c=t.isFetching,s=t.results,i=N.a.isEmpty(s)&&N.a.isEmpty(a),u=N.a.isEmpty(s)?"":s[0].category;return n.a.createElement(D,{actions:!i&&n.a.createElement(Q,{label:"Restart"}),avatar_message:"".concat(r,"%"),error:a,isFetching:c,title:"Results",subheader:u},i?n.a.createElement(Q,{className:"center-content"}):n.a.createElement(Me,{results:s}))}),Be=function(){return n.a.createElement(b,null,n.a.createElement(Pe,null))},Ie=(a(540),function(){return n.a.createElement(b,null,n.a.createElement("div",{className:"not-found"},n.a.createElement(x.a,{className:"not-found__title",variant:"h2"},"Page Not Found"),n.a.createElement(Q,{label:"Home"})))}),Ve=(a(541),function(){return n.a.createElement("div",{className:"App"},n.a.createElement(d.a,{basename:"/keep-austin-nerdy"},n.a.createElement(v,null),n.a.createElement(f.d,null,n.a.createElement(f.b,{exact:!0,path:"/",component:Fe}),n.a.createElement(f.b,{exact:!0,path:h,component:Ue}),n.a.createElement(f.b,{exact:!0,path:p,component:Be}),n.a.createElement(f.b,{exact:!0,path:"/not-found",component:Ie}),n.a.createElement(f.a,{to:"/not-found"}))))}),He={error:{},isFetching:!1,results:[]};var Je={current:0,error:{},grade:0,isFetching:!1,results:[]};var Le=Object(u.combineReducers)({form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe[ue]:return Object(W.a)({},e,{isFetching:!0});case fe[oe]:var a=t.results;return Object(W.a)({},e,{isFetching:!1,results:a});case fe[le]:var r=t.error;return Object(W.a)({},e,{error:r,isFetching:!1});default:return e}},quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he[ue]:return Object(W.a)({},Je,{isFetching:!0});case he[oe]:var a=t.results;return Object(W.a)({},e,{isFetching:!1,results:a});case he[le]:var r=t.error;return Object(W.a)({},e,{error:r,isFetching:!1});case pe:return Object(W.a)({},e,{current:e.current+1});case ve:return Object(W.a)({},e,{grade:e.grade+10});default:return e}}}),We=Object(u.createStore)(Le,Object(l.composeWithDevTools)(Object(u.applyMiddleware)(i.a))),Xe=Object(m.createMuiTheme)({palette:{primary:{main:"#81d4fa"}},typography:{useNextVariants:!0}}),Ke=function(){return n.a.createElement(m.MuiThemeProvider,{theme:Xe},n.a.createElement(Ve,null))};s.a.render(n.a.createElement(o.a,{store:We},n.a.createElement(Ke,null)),document.getElementById("root"))}},[[286,1,2]]]);
//# sourceMappingURL=main.9fe0d30f.chunk.js.map