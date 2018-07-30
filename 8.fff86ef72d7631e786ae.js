(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"V3/c":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){},a=u("zl1X"),o=u("+Xo0"),c=u("0G9f"),i=u("ZYCi"),r=u("Ip0R"),s=u("QkwE"),d=u("vAyd"),p=u("mrSG"),b='\n<div class="btn-group">\n    <button class="btn" (click)="leftContentPanel.toggle()">Show/Hide Left</button>\n    <button class="btn" (click)="rightContentPanel.toggle()">Show/Hide Right</button>\n</div>\n\n<clr-content-panel-container>\n    <h2>This is the page title</h2>\n    <span>This is the page content</span>\n    <clr-content-panel #leftContentPanel clrDirection="left">\n        <ng-container clr-content-panel-title>Left Content Panel</ng-container>\n        <ng-container clr-content-panel-content>Content</ng-container>\n    </clr-content-panel>\n    <clr-content-panel #rightContentPanel>\n        <ng-container clr-content-panel-title>Right Content Panel</ng-container>\n        <ng-container clr-content-panel-content>Content</ng-container>\n    </clr-content-panel>\n</clr-content-panel-container>\n',f=function(l){function n(){var n=l.call(this,"content-panel-layout")||this;return n.codeExample=b,n}return Object(p.b)(n,l),n}(u("N+3j").a),h=e.La({encapsulation:2,styles:[],data:{}});function g(l){return e.hb(0,[(l()(),e.Na(0,0,null,null,85,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,o.b,o.a)),e.Ma(1,49152,null,0,c.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.Na(2,0,null,0,83,"article",[],null,null,null,null,null)),(l()(),e.Na(3,0,null,null,1,"h5",[["class","component-summary"],["id","generic-pager-header"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["The Content Panel is a basic component that can be used to highlight or split specific content from the main content. It can also only be used to switch between showing & hiding specific content."])),(l()(),e.Na(5,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Na(6,0,null,null,6,"a",[["routerLink","/full-page-layouts/content-panel"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Xa(l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.Ma(7,671744,[[2,4]],0,i.n,[i.l,i.a,r.l],{routerLink:[0,"routerLink"]},null),e.Ma(8,1720320,null,2,i.m,[i.l,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.db(603979776,1,{links:1}),e.db(603979776,2,{linksWithHrefs:1}),(l()(),e.Na(11,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.fb(-1,null,["Click here for a full example of the Base Page Layout with a Content Panel (Code below)"])),(l()(),e.Na(13,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.fb(-1,null,["Responsive Bahavior"])),(l()(),e.Na(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.fb(-1,null,["The sidebar uses on mobile devices the full page width. It is displayed as modal layer above the main content on larger screens. On medium sized desktops and above, the sidebar is a column next to the content. Note that it is always possible to hide or display the panel."])),(l()(),e.Na(17,0,null,null,35,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.Na(18,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.fb(-1,null,["Usage"])),(l()(),e.Na(20,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.fb(-1,null,[" When implementing a content panel on your page, you will want to replace your default container div with a "])),(l()(),e.Na(22,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["clr-content-panel-container"])),(l()(),e.fb(-1,null,[". Inside of it, you can place any content you want to - including one or multiple "])),(l()(),e.Na(25,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["clr-content-panel"])),(l()(),e.fb(-1,null,[". "])),(l()(),e.Na(28,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.fb(-1,null,[" You can use the "])),(l()(),e.Na(30,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["@ViewChild()"])),(l()(),e.fb(-1,null,[" annotation to get a reference of your "])),(l()(),e.Na(33,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["ClrContentPanel"])),(l()(),e.fb(-1,null,[", which will allow you to call its methods: "])),(l()(),e.Na(36,0,null,null,16,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.Na(37,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Na(38,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["open()"])),(l()(),e.fb(-1,null,[" - opens the content panel."])),(l()(),e.Na(41,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Na(42,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["close()"])),(l()(),e.fb(-1,null,[" - closes the content panel."])),(l()(),e.Na(45,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Na(46,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["toggle()"])),(l()(),e.fb(-1,null,[" - convenience method, either opens or closes the content panel depending on the current state of it. "])),(l()(),e.Na(49,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Na(50,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["isOpen()"])),(l()(),e.fb(-1,null,[" - returns true if the content panel is open."])),(l()(),e.Na(53,0,null,null,32,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.Na(54,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["Code & Examples"])),(l()(),e.Na(56,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.fb(-1,null,[" Following inputs & outputs are available: "])),(l()(),e.Na(58,0,null,null,25,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.Na(59,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),e.Na(60,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["[clrDirection]"])),(l()(),e.fb(-1,null,[" - determines if the content panel is shown on the left or right side. Default is "])),(l()(),e.Na(63,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["right"])),(l()(),e.fb(-1,null,[". "])),(l()(),e.Na(66,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Na(67,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["(clrClosed)"])),(l()(),e.fb(-1,null,[" is fired every time the content panel is closed. "])),(l()(),e.Na(70,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Na(71,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["(clrOpened)"])),(l()(),e.fb(-1,null,[" is fired every time the content panel is opened. "])),(l()(),e.Na(74,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.fb(-1,null,[" Adding any HTML with the attribute "])),(l()(),e.Na(76,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["clr-content-panel-title"])),(l()(),e.fb(-1,null,[" will set the title of the content panel. "])),(l()(),e.Na(79,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.fb(-1,null,[" Adding any HTML with the attribute "])),(l()(),e.Na(81,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["clr-content-panel-content"])),(l()(),e.fb(-1,null,[" will set the content of the content panel. "])),(l()(),e.Na(84,0,null,null,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.Ma(85,4243456,null,0,d.a,[],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,7,0,"/full-page-layouts/content-panel"),l(n,8,0,"active"),l(n,85,0,u.codeExample)},function(l,n){l(n,0,0,!0),l(n,6,0,e.Xa(n,7).target,e.Xa(n,7).href)})}var V=e.Ja("clr-content-panel-layout-demo-docu",f,function(l){return e.hb(0,[(l()(),e.Na(0,0,null,null,1,"clr-content-panel-layout-demo-docu",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,g,h)),e.Ma(1,49152,null,0,f,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),N=u("KZfJ"),m=u("gIcY"),w=u("XPsC"),y=u("JsA7");u.d(n,"ContentPanelLayoutDemoModuleNgFactory",function(){return v});var v=e.Ka(t,[],function(l){return e.Ua([e.Va(512,e.j,e.Aa,[[8,[a.o,a.a,a.n,V]],[3,e.j],e.v]),e.Va(4608,r.q,r.p,[e.s,[2,r.F]]),e.Va(4608,N.Eb,N.Eb,[]),e.Va(4608,m.r,m.r,[]),e.Va(5120,N.uc,N.vc,[[3,N.uc]]),e.Va(1073742336,r.b,r.b,[]),e.Va(1073742336,N.Y,N.Y,[]),e.Va(1073742336,N.Fb,N.Fb,[]),e.Va(1073742336,N.Rc,N.Rc,[]),e.Va(1073742336,N.R,N.R,[]),e.Va(1073742336,N.d,N.d,[]),e.Va(1073742336,N.T,N.T,[]),e.Va(1073742336,N.n,N.n,[]),e.Va(1073742336,N.Yc,N.Yc,[]),e.Va(1073742336,N.ad,N.ad,[]),e.Va(1073742336,N.K,N.K,[]),e.Va(1073742336,N.U,N.U,[]),e.Va(1073742336,m.o,m.o,[]),e.Va(1073742336,m.e,m.e,[]),e.Va(1073742336,N.Fa,N.Fa,[]),e.Va(1073742336,N.Mb,N.Mb,[]),e.Va(1073742336,N.mc,N.mc,[]),e.Va(1073742336,N.D,N.D,[]),e.Va(1073742336,N.Za,N.Za,[]),e.Va(1073742336,N.mb,N.mb,[]),e.Va(1073742336,N.u,N.u,[]),e.Va(1073742336,N.Ja,N.Ja,[]),e.Va(1073742336,N.Ea,N.Ea,[]),e.Va(1073742336,N.i,N.i,[]),e.Va(1073742336,N.j,N.j,[]),e.Va(1073742336,N.ab,N.ab,[]),e.Va(1073742336,N.q,N.q,[]),e.Va(1073742336,N.Ha,N.Ha,[]),e.Va(1073742336,N.Ma,N.Ma,[]),e.Va(1073742336,N.wc,N.wc,[]),e.Va(1073742336,N.fb,N.fb,[]),e.Va(1073742336,N.rb,N.rb,[]),e.Va(1073742336,N.Ca,N.Ca,[]),e.Va(1073742336,N.Sa,N.Sa,[]),e.Va(1073742336,N.kb,N.kb,[]),e.Va(1073742336,N.Na,N.Na,[]),e.Va(1073742336,N.vb,N.vb,[]),e.Va(1073742336,N.a,N.a,[]),e.Va(1073742336,w.a,w.a,[]),e.Va(1073742336,i.o,i.o,[[2,i.t],[2,i.l]]),e.Va(1073742336,y.a,y.a,[]),e.Va(1073742336,t,t,[]),e.Va(1024,i.j,function(){return[[{path:"",component:f}]]},[])])})}}]);