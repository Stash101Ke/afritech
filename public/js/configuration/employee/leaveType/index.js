(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"79Df":function(e,t,a){"use strict";var s={components:{},data:function(){return{leaveTypeForm:new Form({name:"",alias:"",is_active:0,description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.leaveTypeForm.post("/api/employee/leave/type").then((function(a){toastr.success(a.message),e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/leave/type/"+this.id).then((function(a){e.leaveTypeForm.name=a.name,e.leaveTypeForm.alias=a.alias,e.leaveTypeForm.is_active=a.is_active,e.leaveTypeForm.description=a.description,t.hide()})).catch((function(a){t.hide(),helper.showErrorMsg(a),e.$router.push("/configuration/employee/leave/type")}))},update:function(){var e=this,t=this.$loading.show();this.leaveTypeForm.patch("/api/employee/leave/type/"+this.id).then((function(a){toastr.success(a.message),t.hide(),e.$router.push("/configuration/employee/leave/type")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}}},o=a("KHd+"),n=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){return e.leaveTypeForm.errors.clear(t.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.leave_type_name")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.leaveTypeForm.name,expression:"leaveTypeForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("employee.leave_type_name")},domProps:{value:e.leaveTypeForm.name},on:{input:function(t){t.target.composing||e.$set(e.leaveTypeForm,"name",t.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.leaveTypeForm,"prop-name":"name"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.leave_type_alias")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.leaveTypeForm.alias,expression:"leaveTypeForm.alias"}],staticClass:"form-control",attrs:{type:"text",name:"alias",placeholder:e.trans("employee.leave_type_alias")},domProps:{value:e.leaveTypeForm.alias},on:{input:function(t){t.target.composing||e.$set(e.leaveTypeForm,"alias",t.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.leaveTypeForm,"prop-name":"alias"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.leave_type_is_active")))]),e._v(" "),a("br"),e._v(" "),a("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:e.leaveTypeForm.is_active,callback:function(t){e.$set(e.leaveTypeForm,"is_active",t)},expression:"leaveTypeForm.is_active"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.leave_type_description")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.leaveTypeForm.description,expression:"leaveTypeForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("employee.leave_type_description")},domProps:{value:e.leaveTypeForm.description},on:{input:function(t){t.target.composing||e.$set(e.leaveTypeForm,"description",t.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.leaveTypeForm,"prop-name":"description"}})],1)])]),e._v(" "),a("div",{staticClass:"card-footer text-right"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/employee/leave/type"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():a("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?a("span",[e._v(e._s(e.trans("general.update")))]):a("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null);t.a=n.exports},bpm4:function(e,t,a){"use strict";a.r(t);var s={components:{leaveTypeForm:a("79Df").a},data:function(){return{leave_types:{total:0,data:[]},filter:{sort_by:"name",order:"asc",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.employee.leave_type_name},{value:"alias",translation:i18n.employee.leave_type_alias}],showCreatePanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getLeaveTypes()},methods:{getConfig:function(e){return helper.getConfig(e)},getLeaveTypes:function(e){var t=this,a=this.$loading.show();"number"!=typeof e&&(e=1);var s=helper.getFilterURL(this.filter);axios.get("/api/employee/leave/type?page="+e+s).then((function(e){t.leave_types=e,a.hide()})).catch((function(e){a.hide(),helper.showErrorMsg(e)}))},editLeaveType:function(e){this.$router.push("/configuration/employee/leave/type/"+e.id+"/edit")},confirmDelete:function(e){var t=this;return function(a){return t.deleteLeaveType(e)}},deleteLeaveType:function(e){var t=this,a=this.$loading.show();axios.delete("/api/employee/leave/type/"+e.id).then((function(e){toastr.success(e.message),t.getLeaveTypes(),a.hide()})).catch((function(e){a.hide(),helper.showErrorMsg(e)}))},print:function(){var e=this.$loading.show();axios.post("/api/employee/leave/type/print",{filter:this.filter}).then((function(t){var a=window.open("/print");e.hide(),a.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/employee/leave/type/pdf",{filter:this.filter}).then((function(a){t.hide(),window.open("/download/report/"+a+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getStatus:function(e){return e.is_active?'<span class="label label-success">'+i18n.employee.leave_type_status_active+"</span>":'<span class="label label-danger">'+i18n.employee.leave_type_status_inactive+"</span>"}},filters:{momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getLeaveTypes()},"filter.order":function(e){this.getLeaveTypes()},"filter.page_length":function(e){this.getLeaveTypes()}},computed:{authToken:function(){return helper.getAuthToken()}}},o=a("KHd+"),n=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.leave_type"))+" \n                    "),e.leave_types.total?a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.leave_types.total,from:e.leave_types.from,to:e.leave_types.to})))]):a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[e.leave_types.total&&!e.showCreatePanel?a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[a("i",{staticClass:"fas fa-plus"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.add_new_leave_type")))])]):e._e(),e._v(" "),a("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),a("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[a("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[a("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),a("help-button",{on:{clicked:function(t){e.help_topic="configuration.employee.leave-type"}}})],1)])])]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("transition",{attrs:{name:"fade"}},[e.showCreatePanel?a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("employee.add_new_leave_type")))]),e._v(" "),a("leave-type-form",{on:{completed:e.getLeaveTypes,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]),e._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[e.leave_types.total?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",[e._v(e._s(e.trans("employee.leave_type_name")))]),e._v(" "),a("th",[e._v(e._s(e.trans("employee.leave_type_alias")))]),e._v(" "),a("th",[e._v(e._s(e.trans("employee.leave_type_status")))]),e._v(" "),a("th",[e._v(e._s(e.trans("employee.leave_type_description")))]),e._v(" "),a("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),a("tbody",e._l(e.leave_types.data,(function(t){return a("tr",[a("td",{domProps:{textContent:e._s(t.name)}}),e._v(" "),a("td",{domProps:{textContent:e._s(t.alias)}}),e._v(" "),a("td",{domProps:{innerHTML:e._s(e.getStatus(t))}}),e._v(" "),a("td",{domProps:{textContent:e._s(t.description)}}),e._v(" "),a("td",{staticClass:"table-option"},[a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("employee.edit_leave_type"),expression:"trans('employee.edit_leave_type')"}],staticClass:"btn btn-info btn-sm",on:{click:function(a){return a.preventDefault(),e.editLeaveType(t)}}},[a("i",{staticClass:"fas fa-edit"})]),e._v(" "),a("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t)},expression:"{ok: confirmDelete(leave_type)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("employee.delete_leave_type"),expression:"trans('employee.delete_leave_type')"}],key:t.id,staticClass:"btn btn-danger btn-sm"},[a("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):e._e(),e._v(" "),e.leave_types.total?e._e():a("module-info",{attrs:{module:"employee",title:"leave_type_module_title",description:"leave_type_module_description",icon:"list"}},[a("div",{attrs:{slot:"btn"},slot:"btn"},[e.showCreatePanel?e._e():a("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[a("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))])])]),e._v(" "),a("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.leave_types},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getLeaveTypes},nativeOn:{change:function(t){return e.getLeaveTypes(t)}}})],1)])],1),e._v(" "),a("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);
//# sourceMappingURL=index.js.map?id=c0c7db847446c8193b00