(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"vRU+":function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),e=function(){return function(){}}(),u=t("t68o"),a=t("zbXB"),r=t("X+Oc"),c=t("JUwe"),i=t("DNVI"),s=t("pMnS"),g=t("gIcY"),b=t("Ip0R"),d=t("bujt"),p=t("UodH"),f=t("dWZg"),m=t("lLAP"),C=t("wFw1"),M=t("9ans"),P=t("4rDk"),_=t("xGnx"),O=t("BIUv"),h=function(){function n(n,l,t,o,e,u){this.auth=n,this.router=l,this.credential=t,this.location=o,this.socialService=e,this.aux=u,this.user={email:"",password:""},this.usrVld={usr:!1,pass:!1}}return n.prototype.ngOnInit=function(){},n.prototype.goBack=function(){this.location.back()},n.prototype.changeInFields=function(n){"email"==n?this.usrVld.usr=!1:"pass"==n&&(this.usrVld.pass=!1)},n.prototype.login=function(){var n=this,l=!1;""==this.user.email&&(this.usrVld.usr=!0,l=!0),""==this.user.password&&(this.usrVld.pass=!0,l||(l=!0)),l?this.aux.showAlert("Please don't leave any field blank","ERROR!"):this.auth.login({email:this.user.email,pwd:this.user.password}).subscribe(function(l){n.credential.setUser(l.data),n.router.navigate(["/setup"])},function(l){n.aux.errorResponse(l)})},n.prototype.fbLogin=function(){var n=this;this.socialService.signIn(O.c.PROVIDER_ID).then(function(l){n.auth.fbLogin({email:l.email,fb_id:l.id}).subscribe(function(l){n.credential.setUser(l.data),n.router.navigate(["/home"])},function(l){n.aux.errorResponse(l)})})},n.prototype.gpLogin=function(){var n=this;this.socialService.signIn(O.d.PROVIDER_ID).then(function(l){n.auth.gpLogin({email:l.email,g_id:l.id}).subscribe(function(l){n.credential.setUser(l.data),n.router.navigate(["/home"])},function(l){n.aux.errorResponse(l)})}).catch(function(n){console.log(n)})},n}(),w=t("ZYCi"),v=o.pb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:calc(100% - 120px);height:100%}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   .logoWithHeading[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   .logoWithHeading[_ngcontent-%COMP%]   span.logo[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:28px;height:28px;background:url(GLogo.d6e55957ebea203d3d0b.png) center/cover no-repeat}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   .logoWithHeading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;margin-left:10px;font-size:30px;color:#747474;font-family:ProximaNova-Light}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:25px 0}@media (max-width:1100px){.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{flex-wrap:wrap}}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]{flex:1}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]:first-child{padding-right:25px;border-right:1px solid #f5f4f4}@media (max-width:1100px){.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]:first-child{padding:0}}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]:last-child{padding-left:25px;padding-top:30px}@media (max-width:1100px){.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]:last-child{padding:0}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]{width:100%;border:none}}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]   .cus-inp-row[_ngcontent-%COMP%]{margin-bottom:25px}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]   .cus-inp-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{height:20px}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]   .cus-check-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;padding-bottom:50px}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]   .cus-check-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:3px solid #18c1f0;border-radius:50%;width:20px;height:20px;display:inline-block;vertical-align:middle;margin-right:10px}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]   .cus-check-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]   .cus-check-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#18c1f0}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]   .cus-btn[_ngcontent-%COMP%]{width:-webkit-fill-available;text-align:left;display:block;border-radius:5px;text-transform:uppercase;margin-bottom:25px;padding:5px 10px 5px 55px;color:#fff}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]   .cus-btn.fb-btn[_ngcontent-%COMP%]{background:url(fb.de0983edc74cbc674af4.png) left/10px no-repeat #496399;background-position-x:20px}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]   .cus-btn.google-btn[_ngcontent-%COMP%]{background:url(googlePlus.781f9491a049e22e2d5c.png) left/15px no-repeat #4686f1;background-position-x:20px}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-two-col[_ngcontent-%COMP%]   .cus-btn.inp-btn[_ngcontent-%COMP%]{background:#385fbc}.container[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   .forgot-text[_ngcontent-%COMP%]{color:#18c1f0;display:block;text-align:center;font-size:20px;letter-spacing:1.5px}"]],data:{}});function x(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,59,"div",[["class","container"]],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,58,"div",[["class","GlobalFormWrapper"]],null,null,null,null,null)),(n()(),o.rb(2,0,null,null,57,"div",[["class","form-slide"]],null,null,null,null,null)),(n()(),o.rb(3,0,null,null,4,"div",[["class","form-head-row"]],null,null,null,null,null)),(n()(),o.rb(4,0,null,null,3,"span",[["class","back"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.goBack()&&o),o},null,null)),(n()(),o.rb(5,0,null,null,0,"img",[["alt","icon"],["src","assets/img/back.png"]],null,null,null,null,null)),(n()(),o.rb(6,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,[" Back "])),(n()(),o.rb(8,0,null,null,51,"div",[["class","form-area"]],null,null,null,null,null)),(n()(),o.rb(9,0,null,null,3,"div",[["class","logoWithHeading"]],null,null,null,null,null)),(n()(),o.rb(10,0,null,null,0,"span",[["class","logo"]],null,null,null,null,null)),(n()(),o.rb(11,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,["Login to your dashboard!"])),(n()(),o.rb(13,0,null,null,46,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0;return"submit"===l&&(e=!1!==o.Bb(n,15).onSubmit(t)&&e),"reset"===l&&(e=!1!==o.Bb(n,15).onReset()&&e),e},null,null)),o.qb(14,16384,null,0,g.p,[],null,null),o.qb(15,4210688,null,0,g.l,[[8,null],[8,null]],null,null),o.Fb(2048,null,g.c,null,[g.l]),o.qb(17,16384,null,0,g.k,[[4,g.c]],null,null),(n()(),o.rb(18,0,null,null,36,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),o.rb(19,0,null,null,27,"div",[["class","form-two-col"]],null,null,null,null,null)),(n()(),o.rb(20,0,null,null,10,"div",[["class","cus-inp-row"]],null,null,null,null,null)),(n()(),o.rb(21,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,["Email"])),(n()(),o.rb(23,0,null,null,7,"input",[["autocomplete","off"],["name","address"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0,u=n.component;return"input"===l&&(e=!1!==o.Bb(n,24)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==o.Bb(n,24).onTouched()&&e),"compositionstart"===l&&(e=!1!==o.Bb(n,24)._compositionStart()&&e),"compositionend"===l&&(e=!1!==o.Bb(n,24)._compositionEnd(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==(u.user.email=t)&&e),"ngModelChange"===l&&(e=!1!==u.changeInFields("email")&&e),e},null,null)),o.qb(24,16384,null,0,g.d,[o.F,o.k,[2,g.a]],null,null),o.Fb(1024,null,g.h,function(n){return[n]},[g.d]),o.qb(26,671744,null,0,g.m,[[2,g.c],[8,null],[8,null],[6,g.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,g.i,null,[g.m]),o.qb(28,16384,null,0,g.j,[[4,g.i]],null,null),o.qb(29,278528,null,0,b.h,[o.t,o.u,o.k,o.F],{ngClass:[0,"ngClass"]},null),o.Db(30,{active:0,error:1}),(n()(),o.rb(31,0,null,null,10,"div",[["class","cus-inp-row"]],null,null,null,null,null)),(n()(),o.rb(32,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,["Password"])),(n()(),o.rb(34,0,null,null,7,"input",[["autocomplete","off"],["name","unit"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0,u=n.component;return"input"===l&&(e=!1!==o.Bb(n,35)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==o.Bb(n,35).onTouched()&&e),"compositionstart"===l&&(e=!1!==o.Bb(n,35)._compositionStart()&&e),"compositionend"===l&&(e=!1!==o.Bb(n,35)._compositionEnd(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==(u.user.password=t)&&e),"ngModelChange"===l&&(e=!1!==u.changeInFields("pass")&&e),e},null,null)),o.qb(35,16384,null,0,g.d,[o.F,o.k,[2,g.a]],null,null),o.Fb(1024,null,g.h,function(n){return[n]},[g.d]),o.qb(37,671744,null,0,g.m,[[2,g.c],[8,null],[8,null],[6,g.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,g.i,null,[g.m]),o.qb(39,16384,null,0,g.j,[[4,g.i]],null,null),o.qb(40,278528,null,0,b.h,[o.t,o.u,o.k,o.F],{ngClass:[0,"ngClass"]},null),o.Db(41,{active:0,error:1}),(n()(),o.rb(42,0,null,null,4,"div",[["class","cus-check-row"]],null,null,null,null,null)),(n()(),o.rb(43,0,null,null,0,"input",[["id","cus-check"],["type","checkbox"]],null,null,null,null,null)),(n()(),o.rb(44,0,null,null,2,"label",[["for","cus-check"]],null,null,null,null,null)),(n()(),o.rb(45,0,null,null,0,"span",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,["REMEMBER ME"])),(n()(),o.rb(47,0,null,null,7,"div",[["class","form-two-col"]],null,null,null,null,null)),(n()(),o.rb(48,0,null,null,6,"div",[["class",""]],null,null,null,null,null)),(n()(),o.rb(49,0,null,null,2,"button",[["class","cus-btn fb-btn"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.fbLogin()&&o),o},d.b,d.a)),o.qb(50,180224,null,0,p.b,[o.k,f.a,m.f,[2,C.a]],null,null),(n()(),o.Ib(-1,0,[" FACEBOOK LOGIN "])),(n()(),o.rb(52,0,null,null,2,"button",[["class","cus-btn google-btn"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.gpLogin()&&o),o},d.b,d.a)),o.qb(53,180224,null,0,p.b,[o.k,f.a,m.f,[2,C.a]],null,null),(n()(),o.Ib(-1,0,[" GOOGLE LOGIN "])),(n()(),o.rb(55,0,null,null,2,"button",[["class","blue-btn"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.login()&&o),o},d.b,d.a)),o.qb(56,180224,null,0,p.b,[o.k,f.a,m.f,[2,C.a]],null,null),(n()(),o.Ib(-1,0,["NEXT"])),(n()(),o.rb(58,0,null,null,1,"p",[["class","forgot-text"]],null,null,null,null,null)),(n()(),o.Ib(-1,null,["Forgot Your Password"]))],function(n,l){var t=l.component;n(l,26,0,"address",t.user.email);var o=n(l,30,0,""!=t.user.email,1==t.usrVld.usr);n(l,29,0,o),n(l,37,0,"unit",t.user.password);var e=n(l,41,0,""!=t.user.password,1==t.usrVld.pass);n(l,40,0,e)},function(n,l){n(l,13,0,o.Bb(l,17).ngClassUntouched,o.Bb(l,17).ngClassTouched,o.Bb(l,17).ngClassPristine,o.Bb(l,17).ngClassDirty,o.Bb(l,17).ngClassValid,o.Bb(l,17).ngClassInvalid,o.Bb(l,17).ngClassPending),n(l,23,0,o.Bb(l,28).ngClassUntouched,o.Bb(l,28).ngClassTouched,o.Bb(l,28).ngClassPristine,o.Bb(l,28).ngClassDirty,o.Bb(l,28).ngClassValid,o.Bb(l,28).ngClassInvalid,o.Bb(l,28).ngClassPending),n(l,34,0,o.Bb(l,39).ngClassUntouched,o.Bb(l,39).ngClassTouched,o.Bb(l,39).ngClassPristine,o.Bb(l,39).ngClassDirty,o.Bb(l,39).ngClassValid,o.Bb(l,39).ngClassInvalid,o.Bb(l,39).ngClassPending),n(l,49,0,o.Bb(l,50).disabled||null,"NoopAnimations"===o.Bb(l,50)._animationMode),n(l,52,0,o.Bb(l,53).disabled||null,"NoopAnimations"===o.Bb(l,53)._animationMode),n(l,55,0,o.Bb(l,56).disabled||null,"NoopAnimations"===o.Bb(l,56)._animationMode)})}function k(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,1,"app-login",[],null,null,null,x,v)),o.qb(1,114688,null,0,h,[M.a,w.k,_.a,b.f,O.a,P.a],null,null)],function(n,l){n(l,1,0)},null)}var z=o.nb("app-login",h,k,{},{},[]),B=t("M2Lx"),y=t("eDkP"),I=t("Fzqc"),q=t("o3x0"),j=t("jQLj"),F=t("Wf4p"),L=t("hR/J"),R=t("6uYy"),V=t("da9U"),E=t("ZYjt"),D=t("4c35"),U=t("La40"),G=t("qAlS"),N=t("LC5p"),A=t("0/Q6"),S=t("Blfk"),W=t("a66F"),T=t("crdh"),H=t("pPKK"),K=t("WGtt"),Y=t("j1ZV");t.d(l,"LoginModuleNgFactory",function(){return J});var J=o.ob(e,[],function(n){return o.yb([o.zb(512,o.j,o.db,[[8,[u.a,a.b,a.a,r.a,c.a,i.a,s.a,z]],[3,o.j],o.y]),o.zb(4608,b.l,b.k,[o.v,[2,b.w]]),o.zb(4608,g.q,g.q,[]),o.zb(4608,B.c,B.c,[]),o.zb(4608,y.a,y.a,[y.g,y.c,o.j,y.f,y.d,o.r,o.A,b.c,I.b,[2,b.f]]),o.zb(5120,y.h,y.i,[y.a]),o.zb(5120,q.c,q.d,[y.a]),o.zb(135680,q.e,q.e,[y.a,o.r,[2,b.f],[2,q.b],q.c,[3,q.e],y.c]),o.zb(4608,j.i,j.i,[]),o.zb(5120,j.a,j.b,[y.a]),o.zb(4608,F.a,L.a,[F.d]),o.zb(4608,R.i,R.i,[R.g]),o.zb(1073742336,b.b,b.b,[]),o.zb(1073742336,g.o,g.o,[]),o.zb(1073742336,g.e,g.e,[]),o.zb(1073742336,V.b,V.b,[]),o.zb(1073742336,I.a,I.a,[]),o.zb(1073742336,F.h,F.h,[[2,F.b],[2,E.g]]),o.zb(1073742336,f.b,f.b,[]),o.zb(1073742336,F.q,F.q,[]),o.zb(1073742336,p.c,p.c,[]),o.zb(1073742336,D.g,D.g,[]),o.zb(1073742336,B.d,B.d,[]),o.zb(1073742336,m.a,m.a,[]),o.zb(1073742336,U.j,U.j,[]),o.zb(1073742336,G.b,G.b,[]),o.zb(1073742336,y.e,y.e,[]),o.zb(1073742336,q.j,q.j,[]),o.zb(1073742336,F.i,F.i,[]),o.zb(1073742336,F.o,F.o,[]),o.zb(1073742336,N.a,N.a,[]),o.zb(1073742336,A.c,A.c,[]),o.zb(1073742336,S.c,S.c,[]),o.zb(1073742336,j.j,j.j,[]),o.zb(1073742336,F.s,F.s,[]),o.zb(1073742336,F.j,F.j,[]),o.zb(1073742336,W.b,W.b,[]),o.zb(1073742336,T.h,T.h,[]),o.zb(1073742336,T.l,T.l,[]),o.zb(1073742336,H.a,H.a,[]),o.zb(1073742336,T.d,T.d,[]),o.zb(1073742336,T.b,T.b,[]),o.zb(1073742336,K.a,K.a,[]),o.zb(1073742336,R.e,R.e,[]),o.zb(1073742336,Y.a,Y.a,[]),o.zb(1073742336,w.l,w.l,[[2,w.r],[2,w.k]]),o.zb(1073742336,e,e,[]),o.zb(256,F.c,W.a,[]),o.zb(1024,w.i,function(){return[[{path:"",component:h}]]},[])])})}}]);