(window.webpackJsonp=window.webpackJsonp||[]).push([[315,316],{"4AD2":function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.loading-overlay.is-full-page{\n    z-index: 1060;\n}\n",""])},"8Eeo":function(t,e,s){"use strict";s.r(e);var n=s("NNu8"),a=s("Y39b"),o={components:{lessonPlanForm:n.a,lessonPlanDetail:a.default},data:function(){return{lesson_plans:{total:0,data:[]},filter:{sort_by:"start_date",order:"desc",topic:"",batch_id:[],page_length:helper.getConfig("page_length")},orderByOptions:[{value:"start_date",translation:i18n.resource.lesson_plan_start_date},{value:"topic",translation:i18n.resource.lesson_plan_topic}],batches:[],selected_batches:null,showFilterPanel:!1,showCreatePanel:!1,help_topic:"",showUuid:"",showModal:!1}},mounted:function(){helper.hasPermission("list-lesson-plan")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getLessonPlans(),helper.showDemoNotification(["resource"])},methods:{hasPermission:function(t){return helper.hasPermission(t)},showAction:function(t){this.showUuid=t.uuid,this.showModal=!0},getEmployeeName:function(t){return helper.getEmployeeName(t)},getEmployeeDesignationOnDate:function(t,e){return helper.getEmployeeDesignationOnDate(t,e)},getLessonPlans:function(t){var e=this,s=this.$loading.show();"number"!=typeof t&&(t=1);var n=helper.getFilterURL(this.filter);axios.get("/api/lesson/plan?page="+t+n).then((function(t){e.lesson_plans=t.lesson_plans,e.batches=t.filters.batches,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},editLessonPlan:function(t){this.$router.push("/resource/lesson/plan/"+t.uuid+"/edit")},confirmDelete:function(t){var e=this;return function(s){return e.deleteLessonPlan(t)}},deleteLessonPlan:function(t){var e=this,s=this.$loading.show();axios.delete("/api/lesson/plan/"+t.uuid).then((function(t){toastr.success(t.message),e.getLessonPlans(),s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)},print:function(){var t=this.$loading.show();axios.post("/api/lesson/plan/print",{filter:this.filter}).then((function(e){var s=window.open("/print");t.hide(),s.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/lesson/plan/pdf",{filter:this.filter}).then((function(s){e.hide(),window.open("/download/report/"+s+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onBatchSelect:function(t){this.filter.batch_id.push(t.id)},onBatchRemove:function(t){this.filter.batch_id.splice(this.filter.batch_id.indexOf(t.id),1)}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getLessonPlans()},"filter.order":function(t){this.getLessonPlans()},"filter.page_length":function(t){this.getLessonPlans()}},computed:{authToken:function(){return helper.getAuthToken()}}},l=s("KHd+"),r=Object(l.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("resource.lesson_plan"))+" \n                    "),t.lesson_plans.total?s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.lesson_plans.total,from:t.lesson_plans.from,to:t.lesson_plans.to})))]):s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[t.lesson_plans.total&&t.hasPermission("create-lesson-plan")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/resource/lesson/plan/create")}}},[s("i",{staticClass:"fas fa-plus"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("resource.add_new_lesson_plan")))])]):t._e(),t._v(" "),t.showFilterPanel?t._e():s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[s("i",{staticClass:"fas fa-filter"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),s("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),s("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[s("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[s("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),s("help-button",{on:{clicked:function(e){t.help_topic="resource.lesson_plan"}}})],1)])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("transition",{attrs:{name:"fade"}},[t.showFilterPanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter")))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),s("v-select",{attrs:{label:"name","track-by":"id","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:t.batches,placeholder:t.trans("academic.select_batch"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_batches},on:{select:t.onBatchSelect,remove:t.onBatchRemove},model:{value:t.selected_batches,callback:function(e){t.selected_batches=e},expression:"selected_batches"}},[t.batches.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.lesson_plan_topic")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.topic,expression:"filter.topic"}],staticClass:"form-control",attrs:{name:"topic"},domProps:{value:t.filter.topic},on:{input:function(e){e.target.composing||t.$set(t.filter,"topic",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getLessonPlans}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t.lesson_plans.total?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[t._v(t._s(t.trans("academic.subject")))]),t._v(" "),s("th",[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),s("th",[t._v(t._s(t.trans("resource.lesson_plan_topic")))]),t._v(" "),s("th",[t._v(t._s(t.trans("resource.lesson_plan_start_date")))]),t._v(" "),s("th",[t._v(t._s(t.trans("resource.lesson_plan_end_date")))]),t._v(" "),s("th",[t._v(t._s(t.trans("resource.lesson_plan_created_by")))]),t._v(" "),s("th",[t._v(t._s(t.trans("general.created_at")))]),t._v(" "),s("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),s("tbody",t._l(t.lesson_plans.data,(function(e){return s("tr",[s("td",{domProps:{textContent:t._s(e.subject.name+" ("+e.subject.code+")")}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.subject.batch.course.name+" "+e.subject.batch.name)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.topic)}}),t._v(" "),s("td",[t._v(t._s(t._f("moment")(e.start_date)))]),t._v(" "),s("td",[t._v(t._s(t._f("moment")(e.end_date)))]),t._v(" "),s("td",[t._v(t._s(t.getEmployeeName(e.employee))+" "),s("br"),t._v(" "+t._s(t.getEmployeeDesignationOnDate(e.employee,e.start_date)))]),t._v(" "),s("td",[t._v(t._s(t._f("momentDateTime")(e.created_at)))]),t._v(" "),s("td",{staticClass:"table-option"},[s("div",{staticClass:"btn-group"},[s("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.print"),expression:"trans('general.print')"}],staticClass:"btn btn-secondary btn-sm",attrs:{target:"_blank",href:"/resource/lesson/plan/"+e.uuid+"/print?token="+t.authToken}},[s("i",{staticClass:"fas fa-print"})]),t._v(" "),s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("resource.view_lesson_plan"),expression:"trans('resource.view_lesson_plan')"}],staticClass:"btn btn-success btn-sm",on:{click:function(s){return s.preventDefault(),t.showAction(e)}}},[s("i",{staticClass:"fas fa-arrow-circle-right"})]),t._v(" "),t.hasPermission("edit-lesson-plan")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("resource.edit_lesson_plan"),expression:"trans('resource.edit_lesson_plan')"}],staticClass:"btn btn-info btn-sm",on:{click:function(s){return s.preventDefault(),t.editLessonPlan(e)}}},[s("i",{staticClass:"fas fa-edit"})]):t._e(),t._v(" "),t.hasPermission("delete-lesson-plan")?s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(lesson_plan)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("resource.delete_lesson_plan"),expression:"trans('resource.delete_lesson_plan')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[s("i",{staticClass:"fas fa-trash"})]):t._e()])])])})),0)])]):t._e(),t._v(" "),t.lesson_plans.total?t._e():s("module-info",{attrs:{module:"resource",title:"lesson_plan_module_title",description:"lesson_plan_module_description",icon:"list"}},[s("div",{attrs:{slot:"btn"},slot:"btn"},[t.hasPermission("create-lesson-plan")?s("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){return t.$router.push("/resource/lesson/plan/create")}}},[s("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))]):t._e()])]),t._v(" "),s("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.lesson_plans},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getLessonPlans}})],1)])],1),t._v(" "),t.showModal?s("lesson-plan-detail",{attrs:{uuid:t.showUuid},on:{close:function(e){t.showModal=!1}}}):t._e(),t._v(" "),s("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);e.default=r.exports},NNu8:function(t,e,s){"use strict";var n={components:{},data:function(){return{lessonPlanForm:new Form({batch_id:"",subject_id:"",topic:"",start_date:"",end_date:"",details:[],upload_token:""}),batches:[],selected_batch:null,subjects:[],selected_subject:null,subject_detail:[],module_id:"",clearAttachment:!0}},props:["uuid"],mounted:function(){helper.hasPermission("create-lesson-plan")||helper.hasPermission("edit-lesson-plan")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid?this.get():(this.addRow(),this.lessonPlanForm.upload_token=this.$uuid.v4()),this.getPreRequisite()},methods:{hasPermission:function(t){return helper.hasPermission(t)},addRow:function(){this.lessonPlanForm.details.push({title:"",description:""})},confirmDeleteDetail:function(t){var e=this;return function(s){return e.deleteDetail(t)}},deleteDetail:function(t){this.lessonPlanForm.details.splice(t,1)},getDetailTitleName:function(t){return t+"_detail_title"},getDetailDescriptionName:function(t){return t+"_detail_description"},getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/lesson/plan/pre-requisite").then((function(s){t.batches=s.batches,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getSubjects:function(){var t=this;this.uuid||(this.lessonPlanForm.subject_id="",this.selected_subject=null);var e=this.$loading.show();axios.post("/api/batch/"+this.lessonPlanForm.batch_id+"/subjects").then((function(s){t.subjects=s.subjects,t.subject_details=s.subject_details,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},proceed:function(){this.uuid?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.lessonPlanForm.post("/api/lesson/plan").then((function(s){toastr.success(s.message),t.clearAttachment=!t.clearAttachment,t.lessonPlanForm.upload_token=t.$uuid.v4(),t.selected_batch=null,t.selected_subject=null,t.lessonPlanForm.details=[],t.addRow(),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/lesson/plan/"+this.uuid).then((function(s){var n=s.lesson_plan;t.lessonPlanForm.title=n.title,t.lessonPlanForm.topic=n.topic,t.lessonPlanForm.start_date=n.start_date,t.lessonPlanForm.end_date=n.end_date,t.lessonPlanForm.batch_id=n.subject.batch_id,t.lessonPlanForm.subject_id=n.subject_id,t.selected_batch=t.lessonPlanForm.batch_id?{id:n.subject.batch_id,name:n.subject.batch.course.name+" "+n.subject.batch.name}:null,t.selected_subject=n.subject_id?{id:n.subject_id,name:n.subject.name+" ("+n.subject.code+")"}:null,t.lessonPlanForm.upload_token=n.upload_token,n.lesson_plan_details.forEach((function(e){t.lessonPlanForm.details.push({title:e.title,description:e.description})})),t.module_id=n.id,e.hide()})).catch((function(s){e.hide(),helper.showErrorMsg(s),t.$router.push("/resource/lesson/plan")}))},update:function(){var t=this,e=this.$loading.show();this.lessonPlanForm.patch("/api/lesson/plan/"+this.uuid).then((function(s){toastr.success(s.message),e.hide(),t.$router.push("/resource/lesson/plan")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onBatchSelect:function(t){this.lessonPlanForm.batch_id=t.id},onSubjectSelect:function(t){this.lessonPlanForm.subject_id=t.id}},watch:{"lessonPlanForm.batch_id":function(t){t&&this.getSubjects()}}},a=(s("c221"),s("KHd+")),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.lessonPlanForm.errors.clear(e.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch"))+" ")]),t._v(" "),s("v-select",{attrs:{label:"name","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:t.batches,placeholder:t.trans("academic.select_batch")},on:{select:t.onBatchSelect,close:function(e){return t.lessonPlanForm.errors.clear("batch_id")},remove:function(e){t.lessonPlanForm.batch_id=""}},model:{value:t.selected_batch,callback:function(e){t.selected_batch=e},expression:"selected_batch"}},[t.batches.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.lessonPlanForm,"prop-name":"batch_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[t.lessonPlanForm.batch_id?s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.subject"))+" ")]),t._v(" "),s("v-select",{attrs:{label:"name",name:"subject_id",id:"subject_id",options:t.subjects,placeholder:t.trans("resource.select_subject")},on:{select:t.onSubjectSelect,close:function(e){return t.lessonPlanForm.errors.clear("subject_id")},remove:function(e){t.lessonPlanForm.subject_id=""}},model:{value:t.selected_subject,callback:function(e){t.selected_subject=e},expression:"selected_subject"}},[t.subjects.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.lessonPlanForm,"prop-name":"subject_id"}})],1):t._e()]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.lesson_plan_start_date")))]),t._v(" "),s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("resource.lesson_plan_start_date")},on:{selected:function(e){return t.lessonPlanForm.errors.clear("start_date")}},model:{value:t.lessonPlanForm.start_date,callback:function(e){t.$set(t.lessonPlanForm,"start_date",e)},expression:"lessonPlanForm.start_date"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.lessonPlanForm,"prop-name":"start_date"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.lesson_plan_end_date")))]),t._v(" "),s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("resource.lesson_plan_end_date")},on:{selected:function(e){return t.lessonPlanForm.errors.clear("end_date")}},model:{value:t.lessonPlanForm.end_date,callback:function(e){t.$set(t.lessonPlanForm,"end_date",e)},expression:"lessonPlanForm.end_date"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.lessonPlanForm,"prop-name":"end_date"}})],1)])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.lesson_plan_topic")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.lessonPlanForm.topic,expression:"lessonPlanForm.topic"}],staticClass:"form-control",attrs:{type:"text",name:"topic",placeholder:t.trans("resource.lesson_plan_topic")},domProps:{value:t.lessonPlanForm.topic},on:{input:function(e){e.target.composing||t.$set(t.lessonPlanForm,"topic",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.lessonPlanForm,"prop-name":"topic"}})],1),t._v(" "),t._l(t.lessonPlanForm.details,(function(e,n){return[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.lesson_plan_detail_title"))+" \n                                "),s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDeleteDetail(n)},expression:"{ok: confirmDeleteDetail(index)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.delete"),expression:"trans('general.delete')"}],key:n+"_delete_detail",staticClass:"btn btn-xs btn-danger m-l-20",attrs:{type:"button"}},[s("i",{staticClass:"fas fa-times"})])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"detail.title"}],staticClass:"form-control",attrs:{type:"text",name:t.getDetailTitleName(n),placeholder:t.trans("resource.lesson_plan_detail_title")},domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.lessonPlanForm,"prop-name":t.getDetailTitleName(n)}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.lesson_plan_detail_description")))]),t._v(" "),s("autosize-textarea",{attrs:{rows:"2",name:t.getDetailDescriptionName(n),placeholder:t.trans("resource.lesson_plan_detail_description")},model:{value:e.description,callback:function(s){t.$set(e,"description",s)},expression:"detail.description"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.lessonPlanForm,"prop-name":t.getDetailDescriptionName(n)}})],1)])])]})),t._v(" "),s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-info btn-sm waves-effect waves-light",attrs:{type:"button"},on:{click:t.addRow}},[t._v(t._s(t.trans("resource.lesson_plan_add_new_detail")))])]),t._v(" "),s("div",{staticClass:"form-group"},[s("file-upload-input",{attrs:{"button-text":t.trans("general.upload_document"),token:t.lessonPlanForm.upload_token,module:"lesson_plan","clear-file":t.clearAttachment,"module-id":t.module_id}})],1)],2)]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/resource/lesson/plan"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.uuid?s("span",[t._v(t._s(t.trans("general.update")))]):s("span",[t._v(t._s(t.trans("general.save")))])])],1)])])}),[],!1,null,null,null);e.a=o.exports},OLZL:function(t,e,s){var n=s("4AD2");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,a);n.locals&&(t.exports=n.locals)},Y39b:function(t,e,s){"use strict";s.r(e);var n={components:{},props:["uuid","url"],mounted:function(){this.uuid&&this.get()},data:function(){return{lesson_plan:[],attachments:[]}},methods:{get:function(){var t=this,e=this.$loading.show();axios.get("/api/lesson/plan/"+this.uuid).then((function(s){t.lesson_plan=s.lesson_plan,t.attachments=s.attachments,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getEmployeeName:function(t){return helper.getEmployeeName(t)},getEmployeeDesignation:function(t,e){return helper.getEmployeeDesignation(t,e)}},computed:{authToken:function(){return helper.getAuthToken()}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)},moment:function(t){return helper.formatDate(t)}}},a=s("KHd+"),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container modal-lg"},[t.lesson_plan.id?s("div",{staticClass:"modal-header"},[t._t("header",[s("span",[t._v(t._s(t.lesson_plan.topic))]),t._v(" "),s("span",{staticClass:"float-right pointer",on:{click:function(e){return t.$emit("close")}}},[t._v("x")])])],2):t._e(),t._v(" "),t.lesson_plan.id?s("div",{staticClass:"modal-body"},[t._t("body",[s("h6",{staticClass:"card-title"},[s("strong",[t._v(t._s(t.trans("academic.subject"))+":")]),t._v(" "+t._s(t.lesson_plan.subject.name+" ("+t.lesson_plan.subject.code+")")+" \n                            "),s("br"),t._v(" "),s("strong",[t._v(t._s(t.trans("academic.batch"))+":")]),t._v(" "+t._s(t.lesson_plan.subject.batch.course.name+" "+t.lesson_plan.subject.batch.name)+" \n                            "),s("br"),t._v(" "),s("strong",[t._v(t._s(t.trans("resource.lesson_plan_start_date"))+":")]),t._v(" "+t._s(t._f("moment")(t.lesson_plan.start_date))+" \n                            "),s("br"),t._v(" "),s("strong",[t._v(t._s(t.trans("resource.lesson_plan_end_date"))+":")]),t._v(" "+t._s(t._f("moment")(t.lesson_plan.end_date))+" \n                            "),t.lesson_plan.employee?s("p",{staticClass:"pull-right"},[s("strong",[t._v(t._s(t.trans("resource.lesson_plan_created_by"))+":")]),t._v(" "+t._s(t.getEmployeeName(t.lesson_plan.employee))+" "+t._s(t.getEmployeeDesignation(t.lesson_plan.employee,t.lesson_plan.start_date))+"\n                            ")]):t._e()]),t._v(" "),t._l(t.lesson_plan.lesson_plan_details,(function(e){return s("div",{staticClass:"m-t-20"},[s("h6",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),s("p",{staticClass:"font-90pc",domProps:{textContent:t._s(e.description)}}),t._v(" "),t.$last(e,t.lesson_plan.lesson_plan_details)?t._e():s("hr")])})),t._v(" "),t.attachments.length?s("div",[s("ul",{staticClass:"m-t-10 upload-file-list"},t._l(t.attachments,(function(e){return s("li",{staticClass:"upload-file-list-item"},[s("a",{staticClass:"no-link-color",attrs:{href:"/resource/lesson/plan/"+t.lesson_plan.uuid+"/attachment/"+e.uuid+"/download?token="+t.authToken}},[s("i",{class:["file-icon","fas","fa-lg",e.file_info.icon]}),t._v(" "),s("span",{staticClass:"upload-file-list-item-size"},[t._v(t._s(e.file_info.size))]),t._v(" "+t._s(e.user_filename))])])})),0)]):t._e(),t._v(" "),s("hr"),t._v(" "),s("p",[s("i",{staticClass:"far fa-clock"}),t._v(" "),s("small",[t._v(t._s(t.trans("general.created_at"))+" "+t._s(t._f("momentDateTime")(t.lesson_plan.created_at)))]),t._v(" "),s("span",{staticClass:"pull-right"},[s("i",{staticClass:"far fa-clock"}),t._v(" "),s("small",[t._v(t._s(t.trans("general.updated_at"))+" "+t._s(t._f("momentDateTime")(t.lesson_plan.updated_at)))])])])])],2):t._e()])])])])}),[],!1,null,null,null);e.default=o.exports},c221:function(t,e,s){"use strict";var n=s("OLZL");s.n(n).a}}]);
//# sourceMappingURL=index.js.map?id=ffd2517616c2dd3ed75d