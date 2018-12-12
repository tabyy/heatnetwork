!function(d,T,F){"use strict";var z=ht.LiveNode=function(){z.superClass.constructor.apply(this)};ht.Default.def("ht.LiveNode",ht.Node,{_width:100,_height:35,_image:null,_enabled:!0,_editable:!0,_hover:!1,_pressed:!1,isEnabled:function(){return this._enabled},setEnabled:function(u){var p=this._enabled;this._enabled=u,this.fp("enabled",p,u)},isEditable:function(){return this._enabled},setEditable:function(L){var Z=this._editable;this._editable=L,this.fp("editable",Z,L)},isHover:function(){return this._hover},setHover:function(s){var _=this._hover;this._hover=s,this.fp("hover",_,s)},isPressed:function(){return this._pressed},setPressed:function(l){var z=this._pressed;this._pressed=l,this.fp("pressed",z,l)},getBackground:function(){var D,t,W=this;return D=W._enabled?W._pressed?"live.background.active":W._hover?"live.background.hover":"live.background":"live.background.disabled",t=W.s(D),t?t:W.s("live.background")},getForeground:function(){var x,H,e=this;return x=e._enabled?e._pressed?"live.label.active":e._hover?"live.label.hover":"live.label.color":"live.label.disabled",H=e.s(x),H?H:e.s("live.label.color")},setRotation:null,getUIClass:function(){return ht.graph.LiveNodeUI}});var S=ht.graph.LiveNodeUI=function(){S.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.LiveNodeUI",ht.Default.getInternal().ui().NodeUI,{freeDraw:function(n,M){var z=this,J=z._data,R=ht.Default.getImage(J._image);ht.Default.drawImage(n,R,M.x,M.y,M.width,M.height,J,z.gv)},onKeyDown:function(O){var c=this,y=c._data;return 32===O.keyCode||13===O.keyCode?(y.setPressed(!0),!0):void 0},onKeyUp:function(K){var H=this._data;(32===K.keyCode||13===K.keyCode)&&(H.setPressed(!1),H.onClicked&&H.onClicked(K))},onMouseOver:function(){this._data.setHover(!0)},onMouseOut:function(){this._data.setHover(!1)},onMouseDown:function(){this._data.setPressed(!0)},onMouseMove:function(){},onMouseUp:function(A){var b=this._data;b.setPressed(!1),b.onClicked&&b.onClicked(A)}});var l=ht.ButtonNode=function(){l.superClass.constructor.apply(this)};ht.Default.def("ht.ButtonNode",ht.LiveNode,{_image:"button_image"}),ht.Default.setImage("button_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},gradient:{func:"style@live.gradient"},gradientColor:{func:"style@live.gradient.color"},background:{func:"getBackground"},rect:[0,0,1,1],relative:!0},{type:"text",text:{func:"style@live.label"},align:{func:"style@live.label.align"},color:{func:"getForeground"},font:{func:"style@live.label.font"},rect:[0,0,1,1],relative:!0,offsetX:{func:"style@live.label.offset.x"},offsetY:{func:"style@live.label.offset.y"}}]});var v=ht.ToggleButtonNode=function(){v.superClass.constructor.apply(this)};ht.Default.def("ht.ToggleButtonNode",ht.ButtonNode,{_selected:!1,getUIClass:function(){return ht.graph.ToggleButtonNodeUI},getBackground:function(){var m,t,j=this;return j._enabled?(j._hover&&(m="live.background.hover"),j.s(m)||(m=j._selected?"live.background.active":"live.background")):m="live.background.disabled",t=j.s(m),t?t:j.s("live.background")},getForeground:function(){var k,n,D=this;return D._enabled?(D._hover&&(k="live.label.hover"),D.s(k)||(k=D._selected?"live.label.active":"live.label.color")):k="live.label.disabled",n=D.s(k),n?n:D.s("live.label.color")},isSelected:function(){return this._selected},setSelected:function(c){var K=this,D=K._selected,T=K._buttonGroup;K._selected=c,K.fp("selected",D,c)&&(T&&c&&T._selected!==K&&(T._selected&&T._selected.setSelected(!1),T._selected=K,T.onChanged(K)),K.onChanged(c))},onChanged:function(){}});var e=ht.graph.ToggleButtonNodeUI=function(){e.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.ToggleButtonNodeUI",ht.graph.LiveNodeUI,{rectIntersects:function(){return!0},onKeyDown:function(a){var r=this;return e.superClass.onKeyDown.call(r,a)?(r.toggleSelect(),!0):void 0},onMouseDown:function(K){var x=this;e.superClass.onMouseDown.call(x,K),x.toggleSelect()},toggleSelect:function(){var w=this,U=w._data;U._buttonGroup?U._selected||U.setSelected(!0):U.setSelected(!U._selected),U.setHover(!1)}});var E=ht.CheckboxNode=function(){var I=this;E.superClass.constructor.apply(I),I.s("live.label.align","left"),I.s("live.background",ht.Color.widgetIconBackground),I.s("live.background.active",ht.Color.widgetIconHighlight)};ht.Default.def("ht.CheckboxNode",ht.ToggleButtonNode,{_image:"checkbox_image",getBackground:function(){var T,k=this;return T=k._enabled?k._selected?"live.background.active":"live.background":"live.background.disabled",k.s(T)},getForeground:function(){var r,i=this;return r=i._enabled?i._selected?"live.background.active":"live.background":"live.background.disabled",i.s(r)}}),ht.Default.setImage("checkbox_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},background:{func:"getBackground"},rect:{func:function(y){var W=(y._width,y._height);return{x:.1*W,y:.2*W,width:.6*W,height:.6*W}}}},{type:"shape",points:{func:function(c){var F=(c._width,c._height);return[.3*F,.5*F,.4*F,.6*F,.55*F,.35*F]}},borderWidth:{func:function(C){return.05*C._height}},borderColor:"#FFFFFF",visible:{func:function(g){return g._selected||g._hover}}},{type:"text",text:{func:"style@live.label"},align:{func:"style@live.label.align"},color:{func:"getForeground"},font:{func:"style@live.label.font"},rect:{func:function(Y){var U=Y._width,R=Y._height;return{x:.8*R,y:0,width:U-.8*R,height:R}}},offsetX:{func:"style@live.label.offset.x"},offsetY:{func:"style@live.label.offset.y"}}]});var R=ht.RadioButtonNode=function(){var Q=this;R.superClass.constructor.apply(Q),Q.s("live.label.align","left"),Q.s("live.background",ht.Color.widgetIconBackground),Q.s("live.background.active",ht.Color.widgetIconHighlight)};ht.Default.def("ht.RadioButtonNode",ht.ToggleButtonNode,{_image:"radioButton_image",getUIClass:function(){return ht.graph.RadioButtonNodeUI},getBackground:function(){var j,T=this;return j=T._enabled?T._selected?"live.background.active":"live.background":"live.background.disabled",T.s(j)},getForeground:function(){var Z,m=this;return Z=m._enabled?m._selected?"live.background.active":"live.background":"live.background.disabled",m.s(Z)}}),ht.Default.setImage("radioButton_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:"circle",borderWidth:{func:function(F){return.1*F._height}},borderColor:{func:"getBackground"},rect:{func:function(T){var t=(T._width,T._height);return{x:.1*t,y:.2*t,width:.6*t,height:.6*t}}}},{type:"circle",background:{func:"getBackground"},rect:{func:function(C){var A=(C._width,C._height);return{x:.3*A,y:.4*A,width:.2*A,height:.2*A}}},visible:{func:function(H){return H._selected||H._hover}}},{type:"text",text:{func:"style@live.label"},align:{func:"style@live.label.align"},color:{func:"getBackground"},font:{func:"style@live.label.font"},rect:{func:function(E){var O=E._width,Q=E._height;return{x:.8*Q,y:0,width:O-.8*Q,height:Q}}},offsetX:{func:"style@live.label.offset.x"},offsetY:{func:"style@live.label.offset.y"}}]});var h=ht.graph.RadioButtonNodeUI=function(){h.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.RadioButtonNodeUI",ht.graph.ToggleButtonNodeUI,{toggleSelect:function(){this._data._selected||this._data.setSelected(!0)}});var Y=ht.SwitchNode=function(){var o=this;Y.superClass.constructor.apply(o),o.s("live.background",ht.Color.widgetIconBackground),o.s("live.background.active",ht.Color.widgetIconHighlight),o.s("live.label.color",ht.Color.widgetIconBackground),o.s("live.label.active",ht.Color.widgetIconHighlight)};ht.Default.def("ht.SwitchNode",ht.ToggleButtonNode,{_image:"switch_image",getBackground:function(){return this.s(this._selected?"live.background.active":"live.background")},getForeground:function(){return this.s(this._selected?"live.label.active":"live.label.color")}}),ht.Default.setImage("switch_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},background:{func:"style@switch.background"},opacity:{func:function(a){return a._enabled?1:.5}},rect:[0,0,1,1],relative:!0},{type:"circle",background:{func:"getBackground"},opacity:{func:function(h){return h._enabled?1:.5}},rect:{func:function(G){var Q=30,y=10,Y=G._selected;return{x:Y?G._width-y-Q:y,y:(G._height-Q)/2,width:Q,height:Q}}}},{type:"text",text:{func:function(U){return U.s(U._selected?"switch.text.on":"switch.text.off")}},rect:[17,1,1],relative:!0,offsetX:{func:function(g){return g._selected?-10:10}},color:{func:"getForeground"},font:{func:"style@live.label.font"},align:{func:"style@live.label.align"}}]});var Q=ht.ComboboxNode=function(){var P=this;Q.superClass.constructor.apply(P),P.s("live.label.align","left")};ht.Default.def("ht.ComboboxNode",ht.LiveNode,{_image:"combobox_image",_buttonWidth:20,_maxHeight:200,_selectedIndex:-1,getUIClass:function(){return ht.graph.ComboboxNodeUI},getItems:function(){return this._items},setItems:function(I){var W=this._items;this._items=I,this.fp("items",W,I)},getSelectedItem:function(){return this._selectedItem},setSelectedItem:function(P){var T,C=this,u=C._items,Q=C._selectedItem;!u||(T=u.indexOf(P))<0||(C._selectedItem=P,C._selectedIndex=T,C.s("live.label",P?C.getItemName(P):""),C.fp("selectedItem",Q,P)&&C.onChanged(P))},getSelectedIndex:function(){return this._selectedIndex},setSelectedIndex:function(r){var X=this,M=X._items;!M||0>r||r>=M.length||(X._selectedIndex=r,X.setSelectedItem(M[r]))},getItemName:function(p){return p.label||p},onChanged:function(){}}),ht.Default.setImage("combobox_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},gradient:{func:"style@live.gradient"},gradientColor:{func:"style@live.gradient.color"},background:{func:"getBackground"},rect:[0,0,1,1],relative:!0},{type:"shape",points:{func:function(B){var N=B._buttonWidth,$=B._width,a=B._height;return[$-N+.5*N,.6*a,$-N+.75*N,.4*a,$-N+.25*N,.4*a]}},background:{func:function(_){return _._pressed?"#000000":"#FFFFFF"}}},{type:"text",text:{func:"style@live.label"},align:{func:"style@live.label.align"},color:{func:"getForeground"},font:{func:"style@live.label.font"},rect:[0,0,1,1],relative:!0,offsetX:{func:"style@live.label.offset.x"},offsetY:{func:"style@live.label.offset.y"}}]});var V=ht.graph.ComboboxNodeUI=function(){V.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.ComboboxNodeUI",ht.graph.LiveNodeUI,{rectIntersects:function(){return!0},onKeyDown:function(K){var u,h=this._data,R=0;return(37===K.keyCode||38===K.keyCode)&&(R=-1),(39===K.keyCode||40===K.keyCode)&&(R=1),R?(h._selectedIndex>=0?u=h._selectedIndex+R:h._items&&h._items.length>0&&(u=1===R?0:h.items.length-1),h.setSelectedIndex(u),this._ignore=!0,!0):27===K.keyCode||13===K.keyCode?(this._hidePopup(),!0):void 0},onMouseMove:function(){this._data._pressed&&(this._moved=!0)},onMouseUp:function(O){var P=this;V.superClass.onMouseUp.call(P,O),P._moved||(P._list?P._hidePopup():P._showPopup()),delete P._moved},_42:function(i){if(V.superClass._42.call(this,i),this._list&&this._data._selectedIndex>=0){var C=this._list.getDataModel().getDatas().get(this._data._selectedIndex);this._list.sm().ld()!==C&&this._list.sm().setSelection(C)}},_showPopup:function(){var M,y,T,U,w,F,s,L,l,E,K=this,v=K._data,c=v._items,H=K.gv._view.getBoundingClientRect(),D=(v._position.x-v._width/2)*K.gv._zoom+K.gv.tx()+H.left-K.gv._view.scrollLeft,h=(v._position.y+v._height/2)*K.gv._zoom+K.gv.ty()+H.top-K.gv._view.scrollTop;if(c&&0!==c.length){for(M=new ht.DataModel,y=this._list=new ht.widget.ListView(M),y.getIcon=function(){return null},y.drawRow=function(W,p,A,R,t,m,L){y._focusData===p&&(W.fillStyle=ht.Default.darker(p.s("live.background")),W.beginPath(),W.rect(R,t,m,L),W.fill()),ht.widget.ListView.prototype.drawRow.apply(y,arguments)},T=0;T<c.length;T++)U=new ht.Data,U.setName(v.getItemName(c[T])),U._index=T,M.add(U),v._selectedIndex===T&&y.sm().setSelection(U);y.onSelectionChanged=function(){var C=y.sm().ld();C&&!K._ignore&&(v.setSelectedIndex(C._index),K._hidePopup(),delete K._ignore)},y.getSelectBackground=function(N){var V=N.s("live.background");return N===y._focusData?ht.Default.darker(V):V},y.getView().addEventListener("mousemove",function(C){y.setFocusData(y.getDataAt(C)),y.invalidateModel()},ht.Default.eventListenerOptionFalse),L=ht.Default.getWindowInfo(),F=v._width,s=Math.min(y.getRowHeight()*c.length,v._maxHeight,L.height),l=L.width-F-10,E=L.height-s-10,D=D>l?l:D,h=h>E?E:h,D=0>D?0:D,h=0>h?0:h,w=y.getView().style,w.left=D+L.left+"px",w.top=h+L.top+"px",w.width=F+"px",w.height=s+"px",w.zIndex=1e4,w.background="white",w.borderWidth="1px",w.borderColor="#DDDDE0",w.borderStyle="solid",w.borderRadius="5px",ht.Default.appendToScreen(y.getView()),x(function(){K._hidePopup()})}},_hidePopup:function(){this._list&&(ht.Default.removeHTML(this._list.getView()),delete this._list)}});var g=ht.ProgressBarNode=function(){var F=this;g.superClass.constructor.apply(F),F.s("label.position",17),F.s("live.background",ht.Color.widgetIconBackground),F.s("live.background.active",ht.Color.widgetIconHighlight)};ht.Default.def("ht.ProgressBarNode",ht.LiveNode,{_image:"progressBar_image",_value:0,getValue:function(){return this._value},setValue:function(R){var U=this._value;this._value=R,this.fp("value",U,R)},getName:function(){return this._value+"%"}}),ht.Default.setImage("progressBar_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:"rect",background:{func:"style@live.background"},rect:[0,0,1,1],relative:!0},{type:"rect",background:{func:"style@live.background.active"},rect:{func:function(z){return[0,0,z._value/100,.5]}},relative:!0},{type:"rect",background:{func:function(q){return ht.Default.darker(q.s("live.background.active"))}},rect:{func:function(c){return[0,.5,c._value/100,.5]}},relative:!0}]});var D=ht.SliderNode=function(){var g=this;D.superClass.constructor.apply(g),g.s("label.position",17),g.s("live.background",ht.Color.widgetIconBackground),g.s("live.background.active",ht.Color.widgetIconHighlight)};ht.Default.def("ht.SliderNode",ht.LiveNode,{_image:"slider_image",_orientation:"horizontal",_value:0,_min:0,_max:100,_step:1,getUIClass:function(){return ht.graph.SliderNodeUI},getOrientation:function(){return this._orientation},setOrientation:function(Z){var I=this._orientation;this._orientation=Z,this.fp("orientation",I,Z)},isHorizontal:function(){var L=this._orientation;return"h"===L||"horizontal"===L},getValue:function(){return this._value},setValue:function(Z){var V=this,u=V._min,M=V._max,h=V._step;u>Z&&(Z=u),Z>M&&(Z=M),Z=Math.floor(Z/h)*h;var U=V._value;V._value=Z,V.fp("value",U,Z)&&V.onChanged(Z)},getMin:function(){return this._min},setMin:function(g){var k=this._min;this._min=g,this.fp("min",k,g),this.setValue(this._value)},getMax:function(){return this._max},setMax:function(e){var v=this._max;this._max=e,this.fp("max",v,e),this.setValue(this._value)},getStep:function(){return this._step},setStep:function(t){var P=this._step;this._step=t,this.fp("step",P,t),this.setValue(this._value)},getName:function(){return this._value+""},onChanged:function(){}}),ht.Default.setImage("slider_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:"rect",background:{func:"style@live.background.active"},rect:{func:function(K){var N=K.s("slider.bar.size"),l=K.s("slider.thumb.size")+K.s("live.border.width"),M=K._value/(K._max-K._min),Q=K.isHorizontal(),v=K._width,k=K._height;return{x:Q?l:(v-N)/2,y:Q?(k-N)/2:k-l-(k-2*l)*M,width:Q?(v-2*l)*M:N,height:Q?N:(k-2*l)*M}}}},{type:"rect",background:{func:"style@live.background"},rect:{func:function(C){var c=C.s("slider.bar.size"),w=C.s("slider.thumb.size")+C.s("live.border.width"),y=C._value/(C._max-C._min),d=C.isHorizontal(),k=C._width,l=C._height;return{x:d?w+(k-2*w)*y:(k-c)/2,y:d?(l-c)/2:w,width:d?(k-2*w)*(1-y):c,height:d?c:(l-2*w)*(1-y)}}}},{type:"circle",borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},background:{func:"style@slider.thumb.background"},rect:{func:function(O){var L=O.s("slider.thumb.size"),V=O._value/(O._max-O._min),r=O.isHorizontal(),z=O._width,m=O._height;return{x:r?V*(z-2*L):z/2-L,y:r?m/2-L:(1-V)*(m-2*L),width:2*L,height:2*L}}}}]});var J=ht.graph.SliderNodeUI=function(){J.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.SliderNodeUI",ht.graph.LiveNodeUI,{rectIntersects:function(){return!0},onKeyDown:function(J){var g=this._data,N=g.isHorizontal(),G=0;return(N&&37===J.keyCode||!N&&40===J.keyCode)&&(G=-1),(N&&39===J.keyCode||!N&&38===J.keyCode)&&(G=1),G?(g.setValue(g._value+g._step*G),!0):void 0},onMouseDown:function(q){var U=this,i=U._data,V=ht.Default.getClientPoint(q);U._start=i.isHorizontal()?V.x:V.y,U._startValue=i._value},onDrag:function(Y){var s=this;if(s._start===F)return!1;var Z=s._data,z=Z.isHorizontal(),w=Z._step,h=ht.Default.getClientPoint(Y),x=z?h.x:h.y,r=Z.s("slider.thumb.size")+Z.s("live.border.width"),A=z?Z._width:Z._height-2*r,U=(x-s._start)*(z?1:-1),a=(Z._max-Z._min)*U/A/s.gv._zoom;return Z.setValue(s._startValue+Math.floor(a/w)*w),!0},onMouseUp:function(){delete this._start,delete this._startValue}});var a=ht.SpinnerNode=function(){a.superClass.constructor.apply(this),this._styleMap={},this._styleMap["label.position"]=16};ht.Default.def("ht.SpinnerNode",ht.LiveNode,{_image:"spinner_image",_value:0,_min:0,_max:100,_step:1,getUIClass:function(){return ht.graph.SpinnerNodeUI},getValue:function(){return this._value},setValue:function(r){r<this._min&&(r=this._min),r>this._max&&(r=this._max),r=Math.floor(r/this._step)*this._step;var e=this._value;this._value=r,this.fp("value",e,r)&&this.onChanged(r)},getMin:function(){return this._min},setMin:function(Y){var W=this._min;this._min=Y,this.fp("min",W,Y),this.setValue(this._value)},getMax:function(){return this._max},setMax:function(J){var T=this._max;this._max=J,this.fp("max",T,J),this.setValue(this._value)},getStep:function(){return this._step},setStep:function(l){var Q=this._step;this._step=l,this.fp("step",Q,l),this.setValue(this._value)},getName:function(){return this._value+""},onChanged:function(){},getForeground:function(){return this.s(this._enabled?"live.label.active":"live.label.color")}}),ht.Default.setImage("spinner_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},gradient:{func:"style@live.gradient"},gradientColor:{func:"style@live.gradient.color"},background:{func:function(k){return k.s(k._enabled?"spinner.background":"live.background.disabled")}},rect:[0,0,1,1],relative:!0},{type:"rect",background:{func:function(z){var n;return n=z._topPressed?"live.background.active":z._topHover?"live.background.hover":"live.background",z.s(n)}},rect:{func:function(x){var m=x.s("spinner.button.width"),_=x.s("live.border.width");return{x:x._width-m,y:_,width:m-_,height:x._height/2-_}}}},{type:"shape",points:{func:function(P){var c=P.s("spinner.button.width"),x=P._width,Z=P._height;return[x-c+.5*c,.15*Z,x-c+.75*c,.4*Z,x-c+.25*c,.4*Z]}},background:{func:function(w){return w._topHover?"#000000":"#FFFFFF"}}},{type:"rect",background:{func:function(W){var s;return s=W._bottomPressed?"live.background.active":W._bottomHover?"live.background.hover":"live.background",W.s(s)}},rect:{func:function(V){var z=V.s("spinner.button.width"),D=V.s("live.border.width"),C=V._width,U=V._height;return{x:C-z,y:U/2,width:z-D,height:U/2-D}}}},{type:"shape",points:{func:function(P){var n=P.s("spinner.button.width"),y=P._width,X=P._height;return[y-n+.5*n,.9*X,y-n+.75*n,.65*X,y-n+.25*n,.65*X]}},background:{func:function(e){return e._bottomHover?"#000000":"#FFFFFF"}}}]});var X=ht.graph.SpinnerNodeUI=function(){X.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.SpinnerNodeUI",ht.graph.LiveNodeUI,{_refresh:function(F){var E=this._data,A=E.s("spinner.button.width"),M=this.gv.getLogicalPoint(F),Y={x:E._position.x+E._width/2-A,y:E._position.y-E._height/2,width:A,height:E._height/2},s={x:E._position.x+E._width/2-A,y:E._position.y,width:A,height:E._height/2};E._topHover=ht.Default.containsPoint(Y,M),E._bottomHover=ht.Default.containsPoint(s,M)},onKeyDown:function(y){var c=this._data,b=0;return 38===y.keyCode&&(b=1),40===y.keyCode&&(b=-1),b?(c.setValue(c._value+c._step*b),!0):void 0},onMouseOut:function(){var n=this._data;n._topHover=!1,n._bottomHover=!1,this.gv.invalidateData(n)},onMouseDown:function(J){var I=this,n=I._data,G=0;I._refresh(J),n._topPressed=n._topHover,n._bottomPressed=n._bottomHover,n._topPressed&&(G=1),n._bottomPressed&&(G=-1),G&&(n.setValue(n._value+n._step*G),I._timer&&clearTimeout(I._timer),I._interval&&clearInterval(I._interval),I._timer=setTimeout(function(){I._interval=setInterval(function(){n.setValue(n._value+n._step*G)},100)},1e3))},onMouseMove:function(m){this._refresh(m),this.gv.invalidateData(this._data)},onMouseUp:function(){var x=this,m=x._data;m._topHover=!1,m._bottomHover=!1,m._topPressed=!1,m._bottomPressed=!1,x.gv.invalidateData(m),x._timer&&(clearTimeout(x._timer),delete x._timer),x._interval&&(clearInterval(x._interval),delete x._interval)}}),ht.ButtonGroup=function(I){var z=this;z._items=new ht.List,z.addAll(I)},ht.Default.def("ht.ButtonGroup",T,{add:function(M){var V=this;V._items.contains(M)||(V._items.add(M),M._buttonGroup=V,V._selected&&M._selected&&V._selected.setSelected(!1),M._selected&&(V._selected=M))},addAll:function(o){o&&new ht.List(o).each(self.add,self)},remove:function(B){var L=this;L._items.contains(B)&&(L._items.remove(B),delete B._buttonGroup,L._selected===B&&delete L._selected)},getItems:function(){return this._items},clear:function(){var v=this;v._items.each(v.remove,v)},getSelected:function(){return this._selected},onChanged:function(){}});var y=ht.Style,i=ht.Color,s=i.widgetBackground,A=i.widgetIconHighlight,f=ht.Default.labelSelectColor;y["live.shape"]="rect",y["live.border.width"]=1,y["live.border.color"]=i.widgetBorder,y["live.gradient"]="",y["live.gradient.color"]="#FFF",y["live.background"]=A,y["live.background.disabled"]=s,y["live.background.hover"]=ht.Default.brighter(A),y["live.background.active"]=ht.Default.darker(A),y["live.label"]="",y["live.label.offset.x"]=0,y["live.label.offset.y"]=0,y["live.label.align"]="center",y["live.label.font"]=F,y["live.label.color"]=f,y["live.label.disabled"]=i.widgetIconBackground,y["live.label.hover"]=f,y["live.label.active"]=f,y["switch.background"]=s,y["switch.text.on"]="ON",y["switch.text.off"]="OFF",y["slider.bar.size"]=6,y["slider.thumb.size"]=8,y["slider.thumb.background"]=A,y["spinner.background"]="#FFFFFF",y["spinner.button.width"]=20;var N=ht.graph.GraphView.prototype;N.getFocusData=function(){return this._focusData},N.handleKeyUp=function(x){var k=this._focusData,e=k&&this._25I[k._id];k&&k._enabled&&k._editable&&e&&e.onKeyUp&&e.onKeyUp(x)},N.handleMouseDown=function(K,X){this._focusData=X;var k=X&&this._25I[X._id];X&&X._enabled&&X._editable&&k&&k.onMouseDown&&k.onMouseDown(K)},N.handleMouseUp=function(y,d){var n=d&&this._25I[d._id];d&&d._enabled&&d._editable&&n&&n.onMouseUp&&n.onMouseUp(y)},N.handleMouseMove=function(x){var n=this._lastHoverData,A=n&&this._25I[n._id],m=this.getDataAt(x),L=m&&this._25I[m._id];n&&A&&n._enabled&&n._editable&&(n===m?A.onMouseMove&&A.onMouseMove(x):A.onMouseOut&&A.onMouseOut(x)),m&&n!==m&&m._enabled&&m._editable&&L&&L.onMouseOver&&L.onMouseOver(x),this._lastHoverData=m},N._93O=function(K,v){var b=v&&this._25I[v._id];return v&&v._enabled&&v._editable&&b&&b.onDrag&&b.onDrag(K)},N=ht.graph.DefaultInteractor.prototype,N.handle_keyup=function(I){this.gv.handleKeyUp&&this.gv.handleKeyUp(I)},N.handle_mousemove=function(g){this.gv.handleMouseMove&&this.gv.handleMouseMove(g)};var C=new ht.List,x=function(O){setTimeout(function(){C.add(O)},0)};d.addEventListener(ht.Default.isTouchable?"touchend":"mouseup",function(){C.size()>0&&setTimeout(function(){C.each(function(t){t()}),C.clear()},0)},ht.Default.eventListenerOptionFalse)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);