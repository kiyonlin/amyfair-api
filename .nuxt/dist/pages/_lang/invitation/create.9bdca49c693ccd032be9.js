webpackJsonp([20],{"5rew":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",[i("b-row",{attrs:{"align-h":"center"}},[i("b-col",{attrs:{md:"8",lg:"8",sm:"12"}},[t.show?i("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[i("b-form-group",{attrs:{id:"emailGroup",label:t.$t("invitation.emailLabel"),"label-for":"email"}},[i("b-form-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required|email",expression:"'required|email'",modifiers:{initial:!0}}],attrs:{id:"email",name:t.$t("invitation.emailLabel"),state:!t.errors.has(t.$t("invitation.emailLabel")),placeholder:t.$t("invitation.emailPlaceholder")},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),i("b-form-invalid-feedback",[t._v(t._s(t.errors.first(t.$t("invitation.emailLabel"))))])],1),i("b-form-group",{attrs:{id:"mobileGroup",label:t.$t("invitation.mobileLabel"),"label-for":"mobile"}},[i("b-form-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{id:"mobile",name:t.$t("invitation.mobileLabel"),state:!t.errors.has(t.$t("invitation.mobileLabel")),placeholder:t.$t("invitation.mobilePlaceholder")},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}}),i("b-form-invalid-feedback",[t._v(t._s(t.errors.first(t.$t("invitation.mobileLabel"))))])],1),i("b-form-group",{attrs:{id:"fullNameGroup",label:t.$t("invitation.fullNameLabel"),"label-for":"fullName"}},[i("b-form-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{id:"fullName",name:t.$t("invitation.fullNameLabel"),state:!t.errors.has(t.$t("invitation.fullNameLabel")),placeholder:t.$t("invitation.fullNamePlaceholder")},model:{value:t.form.fullName,callback:function(e){t.$set(t.form,"fullName",e)},expression:"form.fullName"}}),i("b-form-invalid-feedback",[t._v(t._s(t.errors.first(t.$t("invitation.fullNameLabel"))))])],1),i("b-form-group",{attrs:{id:"passportNoGroup",label:t.$t("invitation.passportNoLabel"),"label-for":"passportNo"}},[i("b-form-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required|passport_no",expression:"'required|passport_no'",modifiers:{initial:!0}}],attrs:{id:"passportNo",name:t.$t("invitation.passportNoLabel"),state:!t.errors.has(t.$t("invitation.passportNoLabel")),placeholder:t.$t("invitation.passportNoPlaceholder")},model:{value:t.form.passportNo,callback:function(e){t.$set(t.form,"passportNo",e)},expression:"form.passportNo"}}),i("b-form-invalid-feedback",[t._v(t._s(t.errors.first(t.$t("invitation.passportNoLabel"))))])],1),i("b-form-group",{attrs:{id:"countryGroup",label:t.$t("invitation.countryLabel"),"label-for":"country"}},[i("b-form-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{id:"country",name:t.$t("invitation.countryLabel"),state:!t.errors.has(t.$t("invitation.countryLabel")),placeholder:t.$t("invitation.countryPlaceholder")},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}}),i("b-form-invalid-feedback",[t._v(t._s(t.errors.first(t.$t("invitation.countryLabel"))))])],1),i("b-form-group",{attrs:{id:"industryGroup",label:t.$t("invitation.industryLabel"),"label-for":"industry"}},[i("b-form-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{id:"industry",name:t.$t("invitation.industryLabel"),state:!t.errors.has(t.$t("invitation.industryLabel")),placeholder:t.$t("invitation.industryPlaceholder")},model:{value:t.form.industry,callback:function(e){t.$set(t.form,"industry",e)},expression:"form.industry"}}),i("b-form-invalid-feedback",[t._v(t._s(t.errors.first(t.$t("invitation.industryLabel"))))])],1),i("b-form-group",{attrs:{label:t.$t("invitation.genderLabel")}},[i("b-form-radio-group",{attrs:{options:t._f("text")("gendersText","invitation"),name:"gender"},model:{value:t.form.gender,callback:function(e){t.$set(t.form,"gender",e)},expression:"form.gender"}})],1),i("b-form-group",{attrs:{id:"phoneGroup",label:t.$t("invitation.phoneLabel"),"label-for":"phone"}},[i("b-form-input",{attrs:{id:"phone",placeholder:t.$t("invitation.optional")},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),i("div",{staticClass:"p-2"},[t._v("\n          "+t._s(t.$t("invitation.imList"))+"\n        ")]),i("b-form-group",{attrs:{id:"qqGroup",label:t.$t("invitation.qqLabel"),"label-for":"qq"}},[i("b-form-input",{attrs:{id:"qq",placeholder:t.$t("invitation.optional")},model:{value:t.form.qq,callback:function(e){t.$set(t.form,"qq",e)},expression:"form.qq"}})],1),i("b-form-group",{attrs:{id:"wechatGroup",label:t.$t("invitation.wechatLabel"),"label-for":"wechat"}},[i("b-form-input",{attrs:{id:"wechat",placeholder:t.$t("invitation.optional")},model:{value:t.form.wechat,callback:function(e){t.$set(t.form,"wechat",e)},expression:"form.wechat"}})],1),i("b-form-group",{attrs:{id:"whatsappGroup",label:t.$t("invitation.whatsappLabel"),"label-for":"whatsapp"}},[i("b-form-input",{attrs:{id:"whatsapp",placeholder:t.$t("invitation.optional")},model:{value:t.form.whatsapp,callback:function(e){t.$set(t.form,"whatsapp",e)},expression:"form.whatsapp"}})],1),i("b-form-group",{attrs:{id:"skypeGroup",label:t.$t("invitation.skypeLabel"),"label-for":"skype"}},[i("b-form-input",{attrs:{id:"skype",placeholder:t.$t("invitation.optional")},model:{value:t.form.skype,callback:function(e){t.$set(t.form,"skype",e)},expression:"form.skype"}})],1),i("b-form-group",{attrs:{id:"facebookGroup",label:t.$t("invitation.facebookLabel"),"label-for":"facebook"}},[i("b-form-input",{attrs:{id:"facebook",placeholder:t.$t("invitation.optional")},model:{value:t.form.facebook,callback:function(e){t.$set(t.form,"facebook",e)},expression:"form.facebook"}})],1),i("b-form-group",{attrs:{id:"corpNameGroup",label:t.$t("invitation.corpNameLabel"),"label-for":"corpName"}},[i("b-form-input",{attrs:{id:"corpName",placeholder:t.$t("invitation.optional")},model:{value:t.form.corpName,callback:function(e){t.$set(t.form,"corpName",e)},expression:"form.corpName"}})],1),i("b-form-group",{attrs:{id:"corpAddrGroup",label:t.$t("invitation.corpAddrLabel"),"label-for":"corpAddr"}},[i("b-form-input",{attrs:{id:"corpAddr",placeholder:t.$t("invitation.optional")},model:{value:t.form.corpAddr,callback:function(e){t.$set(t.form,"corpAddr",e)},expression:"form.corpAddr"}})],1),i("b-form-group",{attrs:{id:"websiteGroup",label:t.$t("invitation.websiteLabel"),"label-for":"website"}},[i("b-form-input",{attrs:{id:"website",placeholder:t.$t("invitation.optional")},model:{value:t.form.website,callback:function(e){t.$set(t.form,"website",e)},expression:"form.website"}})],1),i("b-form-group",{attrs:{id:"sourceGroup",label:t.$t("invitation.sourceLabel"),"label-for":"source"}},[i("b-form-select",{attrs:{id:"source",options:t._f("text")("sourcesText","invitation")},model:{value:t.form.source,callback:function(e){t.$set(t.form,"source",e)},expression:"form.source"}},[i("option",{domProps:{value:""}},[t._v(t._s(t.$t("invitation.selectDefaultOptionOptional")))])])],1),i("b-form-group",{attrs:{id:"intentGroup",label:t.$t("invitation.intentLabel"),"label-for":"intent"}},[i("b-form-select",{attrs:{id:"intent",options:t._f("text")("intentsText","invitation")},model:{value:t.form.intent,callback:function(e){t.$set(t.form,"intent",e)},expression:"form.intent"}},[i("option",{domProps:{value:""}},[t._v(t._s(t.$t("invitation.selectDefaultOptionOptional")))])])],1),i("b-form-group",{attrs:{id:"tradingIntroGroup",label:t.$t("invitation.tradingIntroLabel"),"label-for":"tradingIntro"}},[i("b-form-textarea",{attrs:{id:"tradingIntro",rows:5,"max-rows":5,placeholder:t.$t("invitation.optional")},model:{value:t.form.tradingIntro,callback:function(e){t.$set(t.form,"tradingIntro",e)},expression:"form.tradingIntro"}})],1),i("b-button",{staticClass:"m-3",attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.$t("btn.submit")))]),i("b-button",{staticClass:"m-3",attrs:{type:"reset",variant:"danger"}},[t._v(t._s(t.$t("btn.reset")))])],1):t._e()],1)],1)],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},fSlY:function(t,e,i){"use strict";var o=i("Xxa5"),a=i.n(o),r=i("exGp"),n=i.n(r),l=i("e7x4"),s=i.n(l);e.a={head:function(){return{title:this.$t("invitation.title")+" - "+this.$t("invitation.register")}},data:function(){return{email:"",show:!0,type:null,form:{email:"",mobile:"",fullName:"",gender:"",phone:"",qq:"",wechat:"",whatsapp:"",skype:"",facebook:"",corpName:"",corpAddr:"",website:"",country:"",industry:"",source:"",intent:"",tradingIntro:""}}},created:function(){this.form.type=this.$route.query.type},methods:{onSubmit:function(){var t=n()(a.a.mark(function t(e){var i=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,this.$axios.$post("invitations",this.form);case 3:s()({type:"success",text:this.$i18n.t("invitation.added"),timer:1500}).then(function(t){i.$router.push({path:i.$i18n.path("")})});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),onReset:function(t){var e=this;console.log(t),t.preventDefault(),this.form.email="",this.show=!1,this.$nextTick(function(){e.show=!0})}}}},jpQm:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("fSlY"),a=i("5rew"),r=i("VU/8")(o.a,a.a,!1,null,null,null);r.options.__file="client/pages/_lang/invitation/create.vue",e.default=r.exports}});