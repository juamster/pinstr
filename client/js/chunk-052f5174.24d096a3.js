(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-052f5174"],{"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),o=n("2d00"),i=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,n){var r=n("861d"),a=n("e8b5"),o=n("b622"),i=o("species");e.exports=function(e,t){var n;return a(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},8418:function(e,t,n){"use strict";var r=n("c04e"),a=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var i=r(t);i in e?a.f(e,i,o(0,n)):e[i]=n}},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("23cb"),o=n("a691"),i=n("50c4"),s=n("7b0b"),l=n("65f0"),c=n("8418"),u=n("1dde"),d=n("ae40"),f=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,v=Math.min,b=9007199254740991,h="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f||!p},{splice:function(e,t){var n,r,u,d,f,p,y=s(this),g=i(y.length),x=a(e,g),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=g-x):(n=_-2,r=v(m(o(t),0),g-x)),g+n-r>b)throw TypeError(h);for(u=l(y,r),d=0;d<r;d++)f=x+d,f in y&&c(u,d,y[f]);if(u.length=r,n<r){for(d=x;d<g-r;d++)f=d+r,p=d+n,f in y?y[p]=y[f]:delete y[p];for(d=g;d>g-r+n;d--)delete y[d-1]}else if(n>r)for(d=g-r;d>x;d--)f=d+r-1,p=d+n-1,f in y?y[p]=y[f]:delete y[p];for(d=0;d<n;d++)y[d+x]=arguments[d+2];return y.length=g-r+n,u}})},c66d:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.updateProfile(t)}}},[n("div",{staticClass:"mb-3"},[n("label",{attrs:{for:"name"}},[e._v("Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.editable.name,expression:"editable.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.editable.name},on:{input:function(t){t.target.composing||e.$set(e.editable,"name",t.target.value)}}})]),n("div",{staticClass:"mb-3"},[n("label",{attrs:{for:"name"}},[e._v("Picture:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.editable.picture,expression:"editable.picture"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.editable.picture},on:{input:function(t){t.target.composing||e.$set(e.editable,"picture",t.target.value)}}})]),n("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:e.addPhone}},[e._v("Add Phone")]),e._l(e.editable.phones,(function(t,r){return n("div",{key:t.id,staticClass:"d-flex align-items-center"},[n("div",{staticClass:"mr-2"},[n("label",{attrs:{for:"name"}},[e._v("Number:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"phone.number"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.number},on:{input:function(n){n.target.composing||e.$set(t,"number",n.target.value)}}})]),n("div",[n("label",{attrs:{for:"name"}},[e._v("Type:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"phone.type"}],staticClass:"form-control",on:{change:function(n){var r=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"type",n.target.multiple?r:r[0])}}},e._l(e.phoneTypes,(function(t){return n("option",{key:t},[e._v(e._s(t))])})),0)]),n("div",{on:{click:function(t){return e.removePhone(r)}}},[n("i",{staticClass:"fa fa-fw fa-trash text-danger"})])])})),e._m(0)],2)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-3"},[n("button",{staticClass:"btn btn-success btn-block"},[e._v("Update Profile")])])}],o=(n("a434"),{name:"Profile",computed:{profile:function(){return this.$store.state.profile}},data:function(){return{editable:{},phoneTypes:["cell","home","work"]}},watch:{profile:{handler:function(e){this.editable=JSON.parse(JSON.stringify(e))},deep:!0,immediate:!0}},methods:{updateProfile:function(){this.$store.dispatch("updateProfile",this.editable)},addPhone:function(){this.editable.phones.push({number:"",type:"cell"})},removePhone:function(e){this.editable.phones.splice(e,1)}}}),i=o,s=n("2877"),l=Object(s["a"])(i,r,a,!1,null,null,null);t["default"]=l.exports},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-052f5174.24d096a3.js.map