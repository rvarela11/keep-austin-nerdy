(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{286:function(e,t,n){e.exports=n(542)},294:function(e,t,n){e.exports={black:"#000",white:"#fff",midGray:"#a3a3a3",darkPurple:"#03223b",purple:"#60607e",lightGreen:"#a5d6a7",lightMidGreen:"#00f59e",lightDarkGreen:"#11c574",lightRed:"#ef9a9a",lightBlue:"#81d4fa",lightPurple:"#b39ddb",lightAqua:"#80cbc4"}},296:function(e,t,n){},361:function(e,t,n){},516:function(e,t,n){},537:function(e,t,n){},538:function(e,t,n){},539:function(e,t,n){},540:function(e,t,n){},541:function(e,t,n){},542:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),s=n.n(c),i=n(202),o=n(43),u=n(45),l=n(204),m=n(32),d=n(56),h=n(21),p="/quiz",f="/results",v=(n(294),function(){return r.a.createElement("div",{className:"header"},r.a.createElement(d.b,{to:"/",className:"header__logo"}))}),b=n(8),E=n(9),g=n(16),y=n(5),O=n(15),w=(n(296),function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"page"},e)}}]),t}(a.Component)),j=n(25),N=n.n(j),k=n(69),_=n(87),A=n.n(_),F=n(86),q=n.n(F),z=n(26),x=n.n(z),C=n(33),S=n.n(C),T=function(e){var t=e.className,n=e.label;return r.a.createElement("div",{className:t},r.a.createElement(d.b,{to:"/",className:"button-link"},r.a.createElement(S.a,{color:"primary",size:"small",variant:"contained"},n)))};T.defaultProps={className:"",label:"Start"};var Q=T,D=(n(361),function(e){var t=e.actions,n=e.avatar_message,a=e.children,c=e.className,s=e.error,i=e.isFetching,o=e.title,u=e.subheader,l={};n&&(l.avatar=r.a.createElement(q.a,{className:"card-header__avatar"},n));return r.a.createElement(k.a,{className:"card ".concat(c)},r.a.createElement(k.d,Object.assign({title:o,subheader:u},l)),r.a.createElement(k.c,{className:"card-content"},i?r.a.createElement("div",{className:"center-content"},r.a.createElement(A.a,null)):N.a.isEmpty(s)?a:r.a.createElement("div",{className:"center-content error"},r.a.createElement(x.a,{className:"error_title",variant:"h2"},"Error"),r.a.createElement(Q,{label:"Home"}))),t&&r.a.createElement(k.b,{className:"card-actions"},t))});D.defaultProps={actions:void 0,avatar_message:"",className:"",content_center:"",error:{},isFetching:!1,title:"",subheader:""};var R=D,G=n(134),M=n(6),P=n.n(M),U=n(88),B=n.n(U),I=n(66),H=n.n(I),V=n(89),J=n.n(V),L=n(68),W=n(17),X=n(46),K=n(135),Y="integer",Z="string",$={boolean:"boolean",integer:"number",string:"string"},ee=function(e){var t={};return e.length>0&&(t=Object.entries(e[0]).reduce(function(e,t){var n=Object(X.a)(t,2),a=n[0],r=n[1];return Object(W.a)({},e,Object(L.a)({},a,r.value))},{})),t},te=function(e){var t={};return e.length>0&&(t=Object.entries(e[0]).reduce(function(e,t){var n=Object(X.a)(t,2),a=n[0],r=n[1],c=r.dataType,s=r.required;if(!$[c])return Object(W.a)({},e);var i=K[$[c]]();return s&&(i=i.required("validation.required")),Object(W.a)({},e,Object(L.a)({},a,i))},{})),K.object().shape(t)},ne=function(e){var t=e.attr,n=e.error,a=e.form,c=e.onChange,s=e.value,i=e.setFieldTouched,o=a[t],u=o.dataType,l=o.label,m=o.options,d=o.readOnly,h=o.required,p=function(){i(t)},f=function(e){i(t),c(e)};return r.a.createElement(r.a.Fragment,null,function(){if(u===Z||u===Y){var e={name:t,label:l,disabled:d,error:n,onBlur:p,onChange:f,required:h,type:$[u],value:s};return m&&m.length>0?r.a.createElement(H.a,Object.assign({},e,{select:!0}),m.map(function(e){return r.a.createElement(J.a,{key:e.value,value:e.value},e.label)})):r.a.createElement(H.a,e)}return null}())};ne.defaultProps={error:!1};var ae=ne,re=(n(516),function(e){var t=e.results;return r.a.createElement(G.b,{enableReinitialize:!0,initialValues:ee(t),onSubmit:function(t){return function(e,t){return t.onSave(e)}(t,e)},validationSchema:te(t)},function(e){var n=e.dirty,a=e.errors,c=e.handleChange,s=e.handleReset,i=e.isValid,o=e.setFieldTouched,u=e.submitForm,l=e.touched,m=e.values,d=Object.keys(l).length>0&&n;return r.a.createElement(G.a,{className:"form"},Object.keys(m).map(function(e,n){return r.a.createElement(ae,{key:n,attr:e,error:l[e]&&a[e]&&!i,form:t[0],onChange:c,setFieldTouched:o,value:m[e]})}),r.a.createElement(B.a,{className:P()("card-actions__form",{"card-actions__form--hide":!d})},r.a.createElement(S.a,{color:"primary",disabled:!i,onClick:u,size:"small",variant:"contained"},"Save"),r.a.createElement(S.a,{onClick:function(){return s()},size:"small"},"Reset")))})}),ce=n(36),se=n.n(ce),ie=n(58),oe="REQUEST",ue="SUCCESS",le="FAILURE";function me(e){if(!e)throw new Error("cannot create request type with base = '' or base = null");return[oe,ue,le].reduce(function(t,n){return t[n]="".concat(e,"_").concat(n),t},{})}function de(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(W.a)({type:e},t)}var he=me("GET_FORM_DATA"),pe=me("GET_QUESTIONS"),fe="NEXT_QUESTION",ve="GRADE",be=function(e){return e.map(function(e){return{label:e.name,value:e.id}})},Ee=n(195),ge=function(){return de(he[oe])},ye=function(e){return de(he[ue],{results:e})},Oe=function(e){return de(he[le],{error:e})},we=n(195),je=function(){return de(pe[oe])},Ne=function(e){return de(pe[ue],{results:e})},ke=function(e){return de(pe[le],{error:e})},_e=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).handleOnSave=function(e){var t=n.props,a=t.getQuestionsAction,r=t.history;a(e),r.replace(p)},n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getFormDataAction)()}},{key:"render",value:function(){var e=this.props.form,t=e.error,n=e.isFetching,a=e.results;return r.a.createElement(R,{error:t,isFetching:n,title:"Start"},r.a.createElement(re,{onSave:this.handleOnSave,results:a}))}}]),t}(a.Component),Ae=Object(u.b)(function(e){return{form:e.form}},function(e){return{getFormDataAction:function(){return e(function(){var e=Object(ie.a)(se.a.mark(function e(t){var n,a,r,c,s,i,o,u,l;return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://opentdb.com","/api_category.php"),e.prev=1,t(ge()),e.next=5,Ee.get(n);case 5:return a=e.sent,r=a.data,c=Ee.create({baseURL:"http://robertvarela.com/keep-austin-nerdy"}),e.next=10,c.get("formData.json");case 10:s=e.sent,(i=s.data)[0].category=Object(W.a)({},i[0].category,{options:be(r.trivia_categories)}),t(ye(i)),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(1),console.log("Error",e.t0),o=e.t0.response,u=o.status,l=o.statusText,t(Oe({status:u,statusText:l}));case 21:case"end":return e.stop()}},e,null,[[1,16]])}));return function(t){return e.apply(this,arguments)}}())},getQuestionsAction:function(t){return e(function(e){return function(){var t=Object(ie.a)(se.a.mark(function t(n){var a,r,c,s,i,o;return se.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat("https://opentdb.com","/api.php"),t.prev=1,n(je()),t.next=5,we.get(a,{params:Object(W.a)({},e)});case 5:r=t.sent,c=r.data.results,n(Ne(c)),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(1),console.log("Error",t.t0),s=t.t0.response,i=s.status,o=s.statusText,n(ke({status:i,statusText:o}));case 15:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(_e),Fe=function(e){var t=e.history;return r.a.createElement(w,null,r.a.createElement(Ae,{history:t}))},qe=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={answers:[]},n.shuffleAnswers=function(){var e=n.props.item,t=e.correct_answer,a=e.incorrect_answers;n.setState({answers:N.a.shuffle(a.concat(t))})},n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.shuffleAnswers()}},{key:"componentDidUpdate",value:function(e){var t=e.item,n=this.props.item;N.a.isEqual(t,n)||this.shuffleAnswers()}},{key:"render",value:function(){var e=this.state.answers,t=this.props,n=t.answered,a=t.handleAnswer,c=t.item,s=c.correct_answer,i=c.question;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:"question",variant:"body1"},i),e.map(function(e){return r.a.createElement(S.a,{key:e,disabled:n,onClick:function(){return a(e,s)},size:"small",variant:"outlined"},e)}))}}]),t}(a.Component),ze=n(210),xe=n.n(ze),Ce=n(211),Se=n.n(Ce),Te=(n(537),function(e){var t=e.answer,n=e.isAnswerCorrect;return r.a.createElement("div",{className:P()("answer","center-content",{"answer--correct":n})},n?r.a.createElement(xe.a,null):r.a.createElement(Se.a,null),t)}),Qe=(n(538),function(e){var t=e.answer,n=e.answered,a=e.current,c=e.handleAnswer,s=e.isAnswerCorrect,i=e.results;return r.a.createElement("div",{className:"quiz"},r.a.createElement(qe,{answered:n,handleAnswer:c,item:i[a]}),n&&r.a.createElement(Te,{answer:t,isAnswerCorrect:s}))}),De={answer:"",answered:!1,isAnswerCorrect:!1,hideQuiz:!0},Re=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).state=De,n.resetState=function(){var e=n.state.hideQuiz;n.setState(Object(W.a)({},De,{hideQuiz:e}))},n.handleAnswer=function(e,t){e===t&&(n.handleGrade(),n.setState({isAnswerCorrect:!0})),n.setState({answer:e,answered:!0})},n.handleGrade=function(){(0,n.props.gradeAction)()},n.handleOnClickNext=function(){(0,n.props.nextQuestionAction)()},n.handleOnClickFinish=function(){n.props.history.replace(f)},n.display=function(){var e=n.state,t=e.answer,a=e.answered,c=e.hideQuiz,s=e.isAnswerCorrect,i=n.props.quiz,o=i.current,u=i.results;return c?r.a.createElement(Q,{className:"center-content"}):r.a.createElement(Qe,{answer:t,answered:a,current:o,handleAnswer:n.handleAnswer,isAnswerCorrect:s,results:u})},n.diplayButton=function(){var e=n.state,t=e.answered,a=e.hideQuiz,c=n.props.quiz,s=c.current+1===c.results.length,i={onClick:n.handleOnClickNext,label:"Next"};return s&&(i.className="card-actions__finish",i.onClick=n.handleOnClickFinish,i.label="Finish"),!a&&r.a.createElement(S.a,Object.assign({},i,{color:"primary",disabled:!t,size:"small",variant:"contained"}),i.label)},n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.quiz.current,n=e.quiz.results,a=this.props.quiz,r=a.current,c=a.error,s=a.results;N.a.isEqual(n,s)||this.setState({hideQuiz:N.a.isEmpty(s)&&N.a.isEmpty(c)}),N.a.isEqual(t,r)||this.resetState()}},{key:"render",value:function(){var e=this.props.quiz,t=e.current,n=e.error,a=e.grade,c=e.isFetching,s=e.results,i=N.a.isEmpty(s)?"Quiz":s[0].category,o=N.a.isEmpty(s)?"":"".concat(t+1," of ").concat(s.length);return r.a.createElement(R,{actions:this.diplayButton(),avatar_message:"".concat(a,"%"),error:n,isFetching:c,title:i,subheader:o},this.display())}}]),t}(a.Component),Ge=Object(u.b)(function(e){return{quiz:e.quiz}},function(e){return{gradeAction:function(){return e(function(){var e=Object(ie.a)(se.a.mark(function e(t){return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:ve});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},nextQuestionAction:function(){return e(function(){var e=Object(ie.a)(se.a.mark(function e(t){return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:fe});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}})(Re),Me=function(e){var t=e.history;return r.a.createElement(w,null,r.a.createElement(Ge,{history:t}))},Pe=(n(539),function(e){var t=e.results;return r.a.createElement("div",{className:"results"},t.map(function(e,t){var n=e.correct_answer,a=e.question,c=t+1;return r.a.createElement("div",{key:t},r.a.createElement("div",{className:P()("results__number",{"results__number-double":c>9})},r.a.createElement(x.a,{variant:"body2"},"".concat(c,"."))),r.a.createElement("div",{className:"results__q-and-a"},r.a.createElement(x.a,{variant:"body2"},a),r.a.createElement(x.a,{className:"results__answer",variant:"body2"},n)))}))}),Ue=Object(u.b)(function(e){return{quiz:e.quiz}},null)(function(e){var t=e.quiz,n=t.error,a=t.grade,c=t.isFetching,s=t.results,i=N.a.isEmpty(s)&&N.a.isEmpty(n),o=N.a.isEmpty(s)?"":s[0].category;return r.a.createElement(R,{actions:!i&&r.a.createElement(Q,{label:"Restart"}),avatar_message:"".concat(a,"%"),error:n,isFetching:c,title:"Results",subheader:o},i?r.a.createElement(Q,{className:"center-content"}):r.a.createElement(Pe,{results:s}))}),Be=function(){return r.a.createElement(w,null,r.a.createElement(Ue,null))},Ie=(n(540),function(){return r.a.createElement(w,null,r.a.createElement("div",{className:"not-found"},r.a.createElement(x.a,{className:"not-found__title",variant:"h2"},"Page Not Found"),r.a.createElement(Q,{label:"Home"})))}),He=(n(541),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{basename:"/keep-austin-nerdy"},r.a.createElement(v,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:Fe}),r.a.createElement(h.b,{exact:!0,path:p,component:Me}),r.a.createElement(h.b,{exact:!0,path:f,component:Be}),r.a.createElement(h.b,{exact:!0,path:"/not-found",component:Ie}),r.a.createElement(h.a,{to:"/not-found"}))))}),Ve={error:{},isFetching:!1,results:[]};var Je={current:0,error:{},grade:0,isFetching:!1,results:[]};var Le=Object(o.combineReducers)({form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he[oe]:return Object(W.a)({},e,{isFetching:!0});case he[ue]:var n=t.results;return Object(W.a)({},e,{isFetching:!1,results:n});case he[le]:var a=t.error;return Object(W.a)({},e,{error:a,isFetching:!1});default:return e}},quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe[oe]:return Object(W.a)({},Je,{isFetching:!0});case pe[ue]:var n=t.results;return Object(W.a)({},e,{isFetching:!1,results:n});case pe[le]:var a=t.error;return Object(W.a)({},e,{error:a,isFetching:!1});case fe:return Object(W.a)({},e,{current:e.current+1});case ve:return Object(W.a)({},e,{grade:e.grade+10});default:return e}}}),We=Object(o.createStore)(Le,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(i.a))),Xe=Object(m.createMuiTheme)({palette:{primary:{main:"#81d4fa"}},typography:{useNextVariants:!0}}),Ke=function(){return r.a.createElement(m.MuiThemeProvider,{theme:Xe},r.a.createElement(He,null))};s.a.render(r.a.createElement(u.a,{store:We},r.a.createElement(Ke,null)),document.getElementById("root"))}},[[286,1,2]]]);
//# sourceMappingURL=main.bb2379da.chunk.js.map