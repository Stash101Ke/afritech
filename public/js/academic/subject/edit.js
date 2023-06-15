(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"0+TA":function(e,t,s){"use strict";var a={components:{},data:function(){return{subjectForm:new Form({name:"",group:"",batch_id:"",code:"",shortcode:"",max_class_per_week:"",is_elective:!1,has_no_exam:!1,description:""}),batches:[],selected_batch:null}},props:["id"],mounted:function(){helper.hasPermission("create-subject")||helper.hasPermission("edit-subject")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.id&&this.get(),this.getPreRequisite()},methods:{getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/subject/pre-requisite").then((function(s){e.batches=s.batches,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},proceed:function(){this.id?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.subjectForm.post("/api/subject").then((function(s){toastr.success(s.message),e.selected_batch=null,e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/subject/"+this.id).then((function(s){e.subjectForm.name=s.subject.name,e.subjectForm.code=s.subject.code,e.subjectForm.shortcode=s.subject.shortcode,e.subjectForm.batch_id=s.subject.batch_id,e.subjectForm.description=s.subject.description,e.subjectForm.max_class_per_week=s.subject.max_class_per_week,e.subjectForm.is_elective=s.subject.is_elective,e.subjectForm.has_no_exam=s.subject.has_no_exam,e.subjectForm.group=s.subject.options.group,e.selected_batch=s.selected_batch,t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s),e.$router.push("/academic/subject")}))},update:function(){var e=this,t=this.$loading.show();this.subjectForm.patch("/api/subject/"+this.id).then((function(s){toastr.success(s.message),t.hide(),e.$router.push("/academic/subject")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onBatchSelect:function(e){this.subjectForm.batch_id=e.id}}},c=s("KHd+"),o=Object(c.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){return e.subjectForm.errors.clear(t.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.batch")))]),e._v(" "),s("v-select",{attrs:{label:"name","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:e.batches,placeholder:e.trans("academic.select_batch")},on:{select:e.onBatchSelect,close:function(t){return e.subjectForm.errors.clear("batch_id")},remove:function(t){e.subjectForm.batch_id=""}},model:{value:e.selected_batch,callback:function(t){e.selected_batch=t},expression:"selected_batch"}},[e.batches.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),s("show-error",{attrs:{"form-name":e.subjectForm,"prop-name":"batch_id"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.subject_name")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.subjectForm.name,expression:"subjectForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("academic.subject_name")},domProps:{value:e.subjectForm.name},on:{input:function(t){t.target.composing||e.$set(e.subjectForm,"name",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.subjectForm,"prop-name":"name"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.subject_group")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.subjectForm.group,expression:"subjectForm.group"}],staticClass:"form-control",attrs:{type:"text",name:"group",placeholder:e.trans("academic.subject_group")},domProps:{value:e.subjectForm.group},on:{input:function(t){t.target.composing||e.$set(e.subjectForm,"group",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.subjectForm,"prop-name":"group"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.subject_code")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.subjectForm.code,expression:"subjectForm.code"}],staticClass:"form-control",attrs:{type:"text",name:"code",placeholder:e.trans("academic.subject_code")},domProps:{value:e.subjectForm.code},on:{input:function(t){t.target.composing||e.$set(e.subjectForm,"code",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.subjectForm,"prop-name":"code"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.subject_shortcode")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.subjectForm.shortcode,expression:"subjectForm.shortcode"}],staticClass:"form-control",attrs:{type:"text",name:"shortcode",placeholder:e.trans("academic.subject_shortcode")},domProps:{value:e.subjectForm.shortcode},on:{input:function(t){t.target.composing||e.$set(e.subjectForm,"shortcode",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.subjectForm,"prop-name":"shortcode"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.subject_max_class_per_week")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.subjectForm.max_class_per_week,expression:"subjectForm.max_class_per_week"}],staticClass:"form-control",attrs:{type:"text",name:"max_class_per_week",placeholder:e.trans("academic.subject_max_class_per_week")},domProps:{value:e.subjectForm.max_class_per_week},on:{input:function(t){t.target.composing||e.$set(e.subjectForm,"max_class_per_week",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.subjectForm,"prop-name":"max_class_per_week"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("div",[e._v(e._s(e.trans("academic.subject_is_elective")))]),e._v(" "),s("switches",{staticClass:"m-t-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.subjectForm.is_elective,callback:function(t){e.$set(e.subjectForm,"is_elective",t)},expression:"subjectForm.is_elective"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.subjectForm,"prop-name":"is_elective"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("div",[e._v(e._s(e.trans("academic.subject_has_no_exam")))]),e._v(" "),s("switches",{staticClass:"m-t-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.subjectForm.has_no_exam,callback:function(t){e.$set(e.subjectForm,"has_no_exam",t)},expression:"subjectForm.has_no_exam"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.subjectForm,"prop-name":"has_no_exam"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-8"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.subject_description")))]),e._v(" "),s("autosize-textarea",{attrs:{rows:"1",name:"description",placeholder:e.trans("academic.subject_description")},model:{value:e.subjectForm.description,callback:function(t){e.$set(e.subjectForm,"description",t)},expression:"subjectForm.description"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.subjectForm,"prop-name":"description"}})],1)])]),e._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/academic/subject"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?s("span",[e._v(e._s(e.trans("general.update")))]):s("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null);t.a=o.exports},"cR+F":function(e,t,s){"use strict";s.r(t);var a={components:{subjectForm:s("0+TA").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("edit-subject")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},c=s("KHd+"),o=Object(c.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("academic.edit_subject")))])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/academic/subject")}}},[s("i",{staticClass:"fas fa-list"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("academic.subject")))])])])])])]),e._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body p-t-20"},[s("subject-form",{attrs:{id:e.id}})],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);
//# sourceMappingURL=edit.js.map?id=686fb88ae36028402e79