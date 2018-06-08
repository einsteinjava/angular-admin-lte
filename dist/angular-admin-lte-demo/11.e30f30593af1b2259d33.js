(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{KbKR:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),a=function(){},o=e("9o+3"),u=e("nKAJ"),i=e("wZee"),r=function(){function n(){}return n.prototype.ngAfterViewInit=function(){i.highlightAll()},n}(),p=t.Ja({encapsulation:0,styles:[[""]],data:{}});function s(n){return t.cb(0,[(n()(),t.La(0,0,null,null,11,"mk-box",[["header","About content component"]],null,null,null,o.b,o.a)),t.Ka(1,4374528,null,4,u.a,[t.h,t.x,t.B],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),t.Za(335544320,1,{boxHeaderDirective:0}),t.Za(335544320,2,{boxFooterDirective:0}),t.Za(335544320,3,{boxContentDirective:0}),t.Za(335544320,4,{boxToolsDirective:0}),(n()(),t.La(6,0,null,3,5,"p",[],null,null,null,null,null)),(n()(),t.bb(-1,null,["The content component is used for displaying router outlet, page title, page description and breadcrumbs."])),(n()(),t.La(8,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.bb(-1,null,[" Page title, page description and breadcrumbs can be configured in app routing module via the data property of routes."])),(n()(),t.La(10,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.bb(-1,null,[" Page title use title property, page description use description property and breadcrumbs use breadcrumbs property or title property if breadcrumbs is not defined."])),(n()(),t.La(12,0,null,null,8,"mk-box",[["header","Routing module example"]],null,null,null,o.b,o.a)),t.Ka(13,4374528,null,4,u.a,[t.h,t.x,t.B],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),t.Za(335544320,5,{boxHeaderDirective:0}),t.Za(335544320,6,{boxFooterDirective:0}),t.Za(335544320,7,{boxContentDirective:0}),t.Za(335544320,8,{boxToolsDirective:0}),(n()(),t.La(18,0,null,3,2,"pre",[],null,null,null,null,null)),(n()(),t.La(19,0,null,null,1,"code",[["class","language-typescript"]],null,null,null,null,null)),(n()(),t.bb(-1,null,["const routes: Routes = [{\n  path: '',\n  data: {\n    title: 'Home'\n  }, children: [{\n    path: '',\n    component: HomeComponent\n  }, {\n    path: 'page',\n    loadChildren: 'app/+page/page.module#PageModule',\n    data: {\n      title: 'Accordion',\n    }\n  }, {\n    path: 'posts',\n    data: {\n      title: 'Posts',\n      description: 'All the posts',\n      breadcrumbs: 'Posts'\n    },\n    children: [{\n      path: '',\n      loadChildren: 'app/posts/posts.module#PostsModule',\n    }, {\n      path: ':id',\n      loadChildren: 'app/post/post.module#PostModule',\n      data: {\n        title: 'Post :id',\n        description: 'Post N\xb0:id description',\n        breadcrumbs: 'Post :id'\n      }\n    }]\n  }\n}]\n"]))],function(n,l){n(l,1,0,"About content component",!1,!1),n(l,13,0,"Routing module example",!1,!1)},null)}var d=t.Ha("app-content",r,function(n){return t.cb(0,[(n()(),t.La(0,0,null,null,1,"app-content",[],null,null,null,s,p)),t.Ka(1,4243456,null,0,r,[],null,null)],null,null)},{},{},[]),c=e("Ip0R"),b=e("ZYCi"),m=function(){},h=e("lp/B"),g=e("k3IM"),f=e("RyNk");e.d(l,"ContentModuleNgFactory",function(){return v});var v=t.Ia(a,[],function(n){return t.Sa([t.Ta(512,t.j,t.X,[[8,[d]],[3,t.j],t.v]),t.Ta(4608,c.l,c.k,[t.s,[2,c.q]]),t.Ta(1073742336,c.b,c.b,[]),t.Ta(1073742336,b.r,b.r,[[2,b.w],[2,b.p]]),t.Ta(1073742336,m,m,[]),t.Ta(1073742336,h.a,h.a,[]),t.Ta(1073742336,g.a,g.a,[]),t.Ta(1073742336,f.a,f.a,[]),t.Ta(1073742336,a,a,[]),t.Ta(1024,b.n,function(){return[[{path:"",component:r}]]},[])])})}}]);