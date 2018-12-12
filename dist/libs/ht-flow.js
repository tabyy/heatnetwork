!function(V){"use strict";var I="ht",u=V[I],y=u.Default,R=Math,h=R.PI,M=2*h,G=R.sin,b=R.cos,D=R.atan2,X=R.sqrt,L=R.max,f=R.floor,$=(R.round,R.ceil),c=R.abs,S=u.Shape,p=u.Edge,N=u.List,w=u.Style,k=u.graph,K=y.getInternal(),l=K.ui(),e=null,E="__segmentLengths",P="__lineTotalLength",z="__linePoints",T="__distance0",O="flow.count",d="flow.step",n="flow.element.max",W="flow.element.count",Z="flow.element.min",q="flow.element.space",s="flow.element.autorotate",j="flow.element.background",F="flow.element.shadow.max",m="flow.element.shadow.min",i="flow.element.shadow.begincolor",J="flow.element.shadow.endcolor",x="flow.element.shadow.visible",v="flow.element.image",Y="flow",t="prototype",A=k.GraphView[t],a=u.Data[t],Q=l.DataUI[t],r=l.ShapeUI[t],H=l.EdgeUI[t],o=u.DataModel[t],U=r._80o,C=H._80o,B=o.prepareRemove,g=H._79o,_=r._79o,tc=A.setDataModel,us=function(X){return document.createElement(X)};A.calculatePointLength=function(r,X,a){var o=this,M=o.getDataUI(r);a==e&&(a=.1);var v=Wj(M),C=[];if(v){for(var K=v.length,m=0;K>m;m++){var z=v[m];z._as&&(z=z._as);for(var u=z[0],q=1;q<z.length;q++)C.push([u,z[q]]),u=z[q]}for(var $=[],m=0;m<C.length;m++){var I=jj(C[m][0],C[m][1],X);$.push(I)}var b=$.slice(0);b.sort(function(B,g){return B.z>g.z?1:B.z<g.z?-1:0});var f=b[0];if(f.z<a){for(var n=$.indexOf(f),A=0,m=0;n>=m;m++)A+=n>m?y.getDistance(C[m][0],C[m][1]):y.getDistance(C[m][0],f);return A}}},y.calculatePointLength=function(v,G,T,I){I==e&&(I=.1);var A=Wj(e,v,G),G=[];if(A){for(var u=A.length,l=0;u>l;l++){var J=A[l];J._as&&(J=J._as);for(var D=J[0],M=1;M<J.length;M++)G.push([D,J[M]]),D=J[M]}for(var N=[],l=0;l<G.length;l++){var x=jj(G[l][0],G[l][1],T);N.push(x)}var r=N.slice(0);r.sort(function(f,o){return f.z>o.z?1:f.z<o.z?-1:0});var Y=r[0];if(Y.z<I){for(var Q=N.indexOf(Y),S=0,l=0;Q>=l;l++)S+=Q>l?y.getDistance(G[l][0],G[l][1]):y.getDistance(G[l][0],Y);return S}}},A.calculateClosestPoint=function(j,n){var I=this,T=I.getDataUI(j),v=Wj(T),Z=[];if(v){for(var N=v.length,F=0;N>F;F++){var $=v[F];$._as&&($=$._as);for(var g=$[0],c=1;c<$.length;c++)Z.push([g,$[c]]),g=$[c]}for(var J=[],F=0;F<Z.length;F++){var Y=jj(Z[F][0],Z[F][1],n);J.push(Y)}return J.sort(function(T,u){return T.z>u.z?1:T.z<u.z?-1:0}),J[0]}},y.calculateClosestPoint=function(V,K,D){var I=Wj(e,V,K),K=[];if(I){for(var L=I.length,N=0;L>N;N++){var y=I[N];y._as&&(y=y._as);for(var m=y[0],A=1;A<y.length;A++)K.push([m,y[A]]),m=y[A]}for(var Y=[],N=0;N<K.length;N++){var $=jj(K[N][0],K[N][1],D);Y.push($)}return Y.sort(function(L,I){return L.z>I.z?1:L.z<I.z?-1:0}),Y[0]}},A.getPercentAngle=function(P,r){var V=this,e=V.getDataUI(P),t=P.getRotation?P.getRotation():0,O=Wj(e);if(O)if(0===r){var Y=O[0][0],$=O[0][1];t+=D($.y-Y.y,$.x-Y.x)}else if(100===r){O=O[O.length-1];var Y=O[O.length-2],$=O[O.length-1];t+=D($.y-Y.y,$.x-Y.x)}else{for(var s=0,g=[],M=O.length,N=0;M>N;N++){var f=O[N],Z=Qk(f);s+=Z,g.push(Z)}for(var o=s*r/100,C=dh(o,g),L=0,U=0;C>U;U++)L+=g[U];o-=L;for(var B=di(O[C],o),l=O[C],h=0,q=0,G=0;G<l.length-1;G++){var n=l[G],S=l[G+1],d=S.x-n.x,H=S.y-n.y,m=X(d*d+H*H);if(h+=m,h>o){q=G;break}}var Q=l[q];t+=D(B.y-Q.y,B.x-Q.x)}return t},y.getPercentAngle=function(C,o,L){var g=0,c=Wj(e,C,o);if(c)if(0===L){var a=c[0][0],w=c[0][1];g+=D(w.y-a.y,w.x-a.x)}else if(100===L){c=c[c.length-1];var a=c[c.length-2],w=c[c.length-1];g+=D(w.y-a.y,w.x-a.x)}else{for(var r=0,d=[],J=c.length,b=0;J>b;b++){var N=c[b],I=Qk(N);r+=I,d.push(I)}for(var W=r*L/100,P=dh(W,d),x=0,Z=0;P>Z;Z++)x+=d[Z];W-=x;for(var S=di(c[P],W),s=c[P],h=0,A=0,G=0;G<s.length-1;G++){var O=s[G],B=s[G+1],R=B.x-O.x,n=B.y-O.y,y=X(R*R+n*n);if(h+=y,h>W){A=G;break}}var p=s[A];g+=D(S.y-p.y,S.x-p.x)}return g},A.calculateLength=function(n){var A=this,E=A.getDataUI(n),d=Wj(E),C=0;if(d)if(Array.isArray(d[0]))for(var X=d.length,G=0;X>G;G++){var p=d[G],F=Qk(p);C+=F}else C=Qk(d);return C},y.calculateLength=function(s,q){var s=Wj(e,s,q),$=0;if(s)if(Array.isArray(s[0]))for(var m=s.length,D=0;m>D;D++){var h=s[D],i=Qk(h);$+=i}else $=Qk(s);return $};var jj=y.calculateClosestPointOnLine=function(Q,n,d){var B=Q.x,I=Q.y,P=n.x,C=n.y,A=d.x,j=d.y,G={},K=P-B,Z=C-I,i=Math.sqrt(K*K+Z*Z),$=K/i,y=Z/i,V=(-B+A)*$+(-I+j)*y;return G.x=B+V*$,G.y=I+V*y,Xn(G,Q,n)||(G.x=Math.abs(G.x-Q.x)<Math.abs(G.x-n.x)?Q.x:n.x,G.y=Math.abs(G.y-Q.y)<Math.abs(G.y-n.y)?Q.y:n.y),K=A-G.x,Z=j-G.y,G.z=Math.sqrt(K*K+Z*Z),G},Xn=function(x,S,R){return x.x>=Math.min(S.x,R.x)&&x.x<=Math.max(S.x,R.x)&&x.y>=Math.min(S.y,R.y)&&x.y<=Math.max(S.y,R.y)},Qk=function(Y){for(var M=0,l=Y.length-1,d=0;l>d;d++){var i=Y[d],b=Y[d+1],J=b.x-i.x,t=b.y-i.y,R=X(J*J+t*t);M+=R}return M},di=function(z,d){for(var q=0,_=0,R=0,e=z.length-1,W=0;e>W;W++){var E=z[W],j=z[W+1],y=j.x-E.x,i=j.y-E.y;if(R=X(y*y+i*i),q+=R,q>d){q-=R,_=W;break}}var u=z[_],m=z[_+1],S=D(m.y-u.y,m.x-u.x),v=d-q,i=G(S)*v,y=b(S)*v;return{x:u.x+y,y:u.y+i}},Oc=function(w,$,u,D){var H=b(D),x=G(D),v=H*$-x*u,l=x*$+H*u;return w?{x:w.x+v,y:w.y+l}:{x:v,y:l}},kk=function(X,f){X[E]=X[P]=X[z]=f[T]=e},xg=function(e,n,P,B,T,y){var z,t,q,H,s,E,I,_,O,W,X,m=[];if(c(B)>M&&(B=M),s=$(c(B)/(h/4)),z=B/s,t=-z,q=-P,s>0){E=e+b(P)*T,I=n+G(-P)*y,m.push({x:E,y:I});for(var k=0;s>k;k++)q+=t,H=q-t/2,_=e+b(q)*T,O=n+G(q)*y,W=e+b(H)*(T/b(t/2)),X=n+G(H)*(y/b(t/2)),m.push({x:W,y:X}),m.push({x:_,y:O})}return m},Wj=function(j,b,r){if(b==e){var t=j._data;if(t instanceof S){if(b=t.getPoints(),r=t.getSegments(),(!r||0===r.size())&&b){r=new u.List([1]);for(var c=1;c<b.size();c++)r.add(2)}}else if(t instanceof p){var L=j._78o;if(L){var n=L.type,B=L.points,v=L.segments,s=L.edgeTypeInfo;if(!n||B){var o=L.sourcePoint,w=o.x,R=o.y,h=L.targetPoint,P=h.x,X=h.y;if(n)v?(b=new N({x:w,y:R}),b.addAll(B),b.add({x:P,y:X}),r=new N(v._as)):(b=new N({x:w,y:R}),r=new N([1]),B.each(function(W){b.add(W),r.add(2)}),b.add({x:P,y:X}),r.add(2));else if(L.looped){b=new N(xg(w,R,0,M,L.radius,L.radius)),r=new N([1]);for(var c=0;c<(b.size()-1)/2;c++)r.add(3)}else b=new N,L.center?(b.add({x:L.c1.x,y:L.c1.y}),b.add({x:w,y:R}),b.add({x:P,y:X}),b.add({x:L.c2.x,y:L.c2.y}),r=new N([1,2,2,2])):(b.add({x:w,y:R}),b.add({x:P,y:X}),r=new N([1,2]))}else if(s)if(b=new N(s.points._as),s.segments)r=new N(s.segments._as);else{r=new N([1]);for(var c=1;c<s.points.size();c++)r.add(2)}}}}if(b){if(Array.isArray(b)&&(b=new N(b)),"number"==typeof b.get(0)){for(var D=new u.List,c=0;c<b.size();c+=2)D.add({x:b.get(c),y:b.get(c+1)});b=D}if(!r){r=[];for(var c=0;c<b.size();c++)0===c?r.push(1):r.push(2)}Array.isArray(r)&&(r=new N(r));for(var Z=K.toPointsArray(b._as,r._as,50),y=Z.length,O=[],c=0;y>c;c++){var i=Z[c];i.length>1&&O.push(i)}return O}},er=function(F){var N=F._data,t=Wj(F);if(t){N.s("flow.reverse")&&(t.reverse(),t.forEach(function(L){L.reverse()}));for(var f=0,u=[],W=t.length,$=0;W>$;$++){var i=t[$],s=Qk(i);f+=s,u.push(s)}if(N[E]=u,N[P]=f,N[z]=t,N instanceof p){var k=y.unionPoint(t),g=k.x+k.width/2,w=k.y+k.height/2;N.$10e={x:g,y:w}}Oh(F,!0)}},Oh=(y.getPercentPositionOnPoints=function(z,q,c){if(z){var S=Wj(e,z,q);if(S){var r;if(0===c)r=S[0][0];else if(100===c)S=S[S.length-1],r=S[S.length-1];else{for(var d=0,R=[],K=S.length,Y=0;K>Y;Y++){var C=S[Y],f=Qk(C);d+=f,R.push(f)}for(var j=d*c/100,B=dh(j,R),H=0,m=0;B>m;m++)H+=R[m];j-=H,r=di(S[B],j)}return r}}},A.getPercentPosition=function(y,T){var m=this,h=m.getDataUI(y),V=Wj(h);if(V){var N;if(0===T)N=V[0][0];else if(100===T)V=V[V.length-1],N=V[V.length-1];else{for(var Q=0,r=[],c=V.length,q=0;c>q;q++){var g=V[q],K=Qk(g);Q+=K,r.push(K)}for(var s=Q*T/100,e=dh(s,r),d=0,o=0;e>o;o++)d+=r[o];s-=d,N=di(V[e],s)}return N}},function(Y,X){var U=Y._data,M=U[P],c=U.s(O),w=U.s(d),v=0,i=U[E],D=U.s(n),I=U.s(Z),y=U.s(W),h=(D-I)/(y-1),q=[];if(i){if(1===y)q.push(D);else if(2===y)q.push(D),q.push(I);else{if(!(y>2))return;q.push(D);for(var p=y-2;p>0;p--)q.push(I+h*p);q.push(I)}var C=0,f=0;q.forEach(function(A){y-1>C&&(f+=U.getFlowElementSpace(A)),C++}),f+=(D+I)/2,v=(M-c*f+f)/c;var S=Y[T];for(null==S&&(S=0),X||(S+=w);S>M+f;){var g=Y._overCount;g?g++:g=1,g>=c&&(g=null),Y._overCount=g,U.s("flow.autoreverse")?g?S-=v+f:(S=0,U.s("flow.reverse",!U.s("flow.reverse"))):S-=v+f}Y[T]=S}}),bs=function(I){var N=I.data,l=this.dm();if(N&&"add"===I.kind){var L=l.$3e;L&&N.s(Y)&&L.indexOf(N)<0&&L.push(N)}"clear"===I.kind&&(l.$3e=[])},fb=function(r){var Z=r.property,I=r.data,O=r.newValue,o=this.dm().$3e;if(o&&"s:flow"===Z)if(O)o.indexOf(I)<0&&o.push(I);else for(var l=o.length,B=0;l>B;B++)if(o[B]===I){o.splice(B,1);break}},dh=dh=function(J,k){for(var I=0,G=k.length,Z=0;G>Z;Z++){var F=k[Z];if(I+=F,I>J)return Z}return Math.min(Z,G-1)},Fg=function(v){var d=this,p=d._data,b=p[P],$=p[E],Q=p[z],i=p.s(O),h=0,c=d[T],C=p.s(n),K=p.s(Z),t=p.s(W),g=p.s(m),M=p.s(F),Y=p.s(s),V=(M-g)/(t-1),l=(C-K)/(t-1),B=p.getRotation?p.getRotation():0,a=p.getPosition?p.p():p.$10e,L=[],N=[];if(c!=e){if(1===t)L.push(C);else if(2===t)L.push(C),L.push(K);else{if(!(t>2))return;L.push(C);for(var j=t-2;j>0;j--)L.push(K+l*j);L.push(K)}if(1===t)N.push(M);else if(2===t)N.push(M),N.push(g);else{if(!(t>2))return;N.push(M);for(var j=t-2;j>0;j--)N.push(g+V*j);N.push(g)}var H=0,J=0;L.forEach(function($){t-1>H&&(J+=p.getFlowElementSpace($)),H++}),J+=(C+K)/2,h=(b-i*J+J)/i,v.save();for(var j=0;i>j;j++){var U=c,I=0,f=d._overCount,x=0;p.s("flow.autoreverse")&&f&&f>i-(j+1)||(U-=j*(h+J),H=0,L.forEach(function(i){var Z=U-I;if(Z>=0&&b>Z){var C=!0,l=dh(Z,$);x=0;for(var T=0;l>T;T++)x+=$[T];if(Z-=x,C){var E=di(Q[l],Z),h=B;if(Y){for(var V=Q[l],q=0,o=0,s=0;s<V.length-1;s++){var n=V[s],m=V[s+1],M=m.x-n.x,f=m.y-n.y,g=X(M*M+f*f);if(q+=g,q>Z){o=s;break}}var S=V[o];h+=D(E.y-S.y,E.x-S.x)}B&&(E=Oc(a,E.x-a.x,E.y-a.y,B)),d.$5e(v,E,i,N[H],h)}}I+=p.getFlowElementSpace(L[H]),H++}))}v.restore()}},xr=function(){var P=this,m=P._data,z=m.s(n),T=!1,E=e;if(P._6I||(T=!0),E=m instanceof p?g.call(P):_.call(P),m.s(Y)&&T){var a=m.s(F),I=m.s(x);I&&a>z&&(z=a),z>0&&y.grow(E,$(z/2)),er(P)}return!m.s(Y)&&T&&kk(m,P),E};a.getFlowElementSpace=function(){return this.s(q)},r._79o=xr,H._79o=xr,w[n]==e&&(w[n]=7),w[Z]==e&&(w[Z]=0),w[O]==e&&(w[O]=1),w[d]==e&&(w[d]=3),w[W]==e&&(w[W]=10),w[q]==e&&(w[q]=3.5),w[s]==e&&(w[s]=!1),w[j]==e&&(w[j]="rgba(255, 255, 114, 0.4)"),w[i]==e&&(w[i]="rgba(255, 255, 0, 0.3)"),w[J]==e&&(w[J]="rgba(255, 255, 0, 0)"),w[x]==e&&(w[x]=1),w[F]==e&&(w[F]=22),w[m]==e&&(w[m]=4),o.prepareRemove=function(v){B.call(this,v);var P=v._dataModel,l=P.$3e;if(l)for(var b=l.length,Y=0;b>Y;Y++)if(l[Y]===v){l.splice(Y,1);break}},A.setDataModel=function(_){var Q=this,w=Q._dataModel;if(w!==_){w&&(w.umm(bs,Q),w.umd(fb,Q),w.$3e=[]),_.mm(bs,Q),_.md(fb,Q);var a=_.$3e=[];_.each(function(D){D.s(Y)&&a.indexOf(D)<0&&a.push(D)}),tc.call(Q,_)}},A.setFlowInterval=function(Z){var B=this,g=B.$11e;B.$11e=Z,B.fp("flowInterval",g,Z),B.$7e!=e&&(clearInterval(B.$7e),delete B.$7e,B.enableFlow(Z))},A.getFlowInterval=function(){return this.$11e},A.$9e=function(){var b,S,w,o=this,W=o.tx(),I=o.ty(),E=o.getZoom(),B=o.getWidth(),J=o.getHeight(),V={x:-W/E,y:-I/E,width:B/E,height:J/E},g=o.dm().$3e,C=o._56I,Q=new N;if(g.forEach(function(z){C[z.getId()]&&(b=o.getDataUI(z),b&&(w=b._79o(),w&&Q.add(w)))}),0!==Q.size()&&(Q.each(function(R){y.intersectsRect(V,R)&&(S=y.unionRect(S,R))}),S&&(S&&(y.grow(S,L(1,1/E)),S.x=f(S.x*E)/E,S.y=f(S.y*E)/E,S.width=$(S.width*E)/E,S.height=$(S.height*E)/E,S=y.intersection(V,S)),S))){var q=o._canvas.getContext("2d");q.save(),q.lineCap=y.lineCap,q.lineJoin=y.lineJoin,K.translateAndScale(q,W,I,E),q.beginPath(),q.rect(S.x,S.y,S.width,S.height),q.clip(),q.clearRect(S.x,S.y,S.width,S.height),o.$6e(q,S),q.restore()}},A.$6e=function(t,H){var O,j,k=this;k._93db(t),k.each(function(h){k._56I[h._id]&&(O=k.getDataUI(h),O&&(j=O._79o(),(!H||y.intersectsRect(H,j))&&O._42(t)))}),k._92db(t)},A.enableFlow=function(Q){var m=this,L=m.dm(),s=L.$3e;m.$7e==e&&(s.forEach(function(V){var B=m.getDataUI(V);er(B)}),m.$7e=setInterval(function(){L.$3e.forEach(function(e){Oh(m.getDataUI(e))}),m.$9e()},Q||m.$11e||50))},A.disableFlow=function(){var O=this;clearInterval(O.$7e),delete O.$7e;var U=O.dm().$3e;U&&O.$9e()},Q.$5e=function(b,N,Z,I,c){var n=this,k=n._data,H=n.gv,d=k.s(j),P=k.s(i),g=k.s(J),s=k.s(x),U=H.$8e,o=k.s(v);if(U==e&&(U=H.$8e={}),b.beginPath(),o!=e){var S=y.getImage(o),Y=Z/2;b.translate(N.x,N.y),b.rotate(c),b.translate(-N.x,-N.y),y.drawImage(b,S,N.x-Y,N.y-Y,Z,Z,k),b.translate(N.x,N.y),b.rotate(-c),b.translate(-N.x,-N.y)}else b.fillStyle=d,b.arc(N.x,N.y,Z/2,0,M,!0),b.fill();if(s){var a=22,h=a+"_"+P+"_"+g,q=U[h];if(q==e){var L=us("canvas");K.setCanvas(L,a,a);var T=L.getContext("2d"),_=a/2,u=_,W=_;K.translateAndScale(T,0,0,1),T.beginPath();var z=T.createRadialGradient(u,W,0,u,u,_);z.addColorStop(0,P),z.addColorStop(1,g),T.fillStyle=z,T.arc(u,W,_,0,M,!0),T.fill(),q=U[h]=L}var Y=I/2;y.drawImage(b,q,N.x-Y,N.y-Y,I,I,k)}},H._80o=function(D){C.call(this,D);var d=this,p=d._data,l=d.gv;p.s(Y)&&l.$7e!=e&&Fg.call(d,D)},r._80o=function(T){U.call(this,T);var f=this,g=f._data,l=f.gv;g.s(Y)&&l.$7e!=e&&Fg.call(f,T)}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);