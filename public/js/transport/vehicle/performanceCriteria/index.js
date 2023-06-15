(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{Dg54:function(e,r,t){"use strict";var i={components:{},data:function(){return{vehiclePerformanceCriteriaForm:new Form({vehicle_id:"",date_effective:"",max_mileage:"",min_mileage:"",min_run:"",max_run:"",min_service_charge:"",max_service_charge:"",description:""}),vehicles:[],selected_vehicle:null}},props:["id"],mounted:function(){this.id&&this.getVehicleLog(),this.getPreRequisite()},methods:{proceed:function(){this.id?this.updateVehicleLog():this.storeVehicleLog()},getPreRequisite:function(){var e=this,r=this.$loading.show();axios.get("/api/vehicle/performance/criteria/pre-requisite").then((function(t){e.vehicles=t,r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},storeVehicleLog:function(){var e=this,r=this.$loading.show();this.vehiclePerformanceCriteriaForm.post("/api/vehicle/performance/criteria").then((function(t){toastr.success(t.message),e.selected_vehicle=null,e.$emit("completed"),r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},getVehicleLog:function(){var e=this,r=this.$loading.show();axios.get("/api/vehicle/performance/criteria/"+this.id).then((function(t){e.vehiclePerformanceCriteriaForm.vehicle_id=t.vehicle_performance_criteria.vehicle_id,e.vehiclePerformanceCriteriaForm.date_effective=t.vehicle_performance_criteria.date_effective,e.vehiclePerformanceCriteriaForm.min_mileage=t.vehicle_performance_criteria.min_mileage,e.vehiclePerformanceCriteriaForm.max_mileage=t.vehicle_performance_criteria.max_mileage,e.vehiclePerformanceCriteriaForm.min_run=t.vehicle_performance_criteria.min_run,e.vehiclePerformanceCriteriaForm.max_run=t.vehicle_performance_criteria.max_run,e.vehiclePerformanceCriteriaForm.min_service_charge=t.vehicle_performance_criteria.min_service_charge,e.vehiclePerformanceCriteriaForm.max_service_charge=t.vehicle_performance_criteria.max_service_charge,e.vehiclePerformanceCriteriaForm.description=t.vehicle_performance_criteria.description,e.selected_vehicle=t.selected_vehicle,r.hide()})).catch((function(t){r.hide(),e.$router.push("/transport/vehicle/performance/criteria")}))},updateVehicleLog:function(){var e=this,r=this.$loading.show();this.vehiclePerformanceCriteriaForm.patch("/api/vehicle/performance/criteria/"+this.id).then((function(t){toastr.success(t.message),r.hide(),e.$router.push("/transport/vehicle/performance/criteria")})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},onVehicleSelect:function(e){this.vehiclePerformanceCriteriaForm.vehicle_id=e.id}}},a=t("KHd+"),n=Object(a.a)(i,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("form",{on:{submit:function(r){return r.preventDefault(),e.proceed(r)},keydown:function(r){return e.vehiclePerformanceCriteriaForm.errors.clear(r.target.name)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle")))]),e._v(" "),t("v-select",{attrs:{label:"name",name:"vehicle_id",id:"vehicle_id",options:e.vehicles,placeholder:e.trans("transport.select_vehicle")},on:{select:e.onVehicleSelect,close:function(r){return e.vehiclePerformanceCriteriaForm.errors.clear("vehicle_id")},remove:function(r){e.vehiclePerformanceCriteriaForm.vehicle_id=""}},model:{value:e.selected_vehicle,callback:function(r){e.selected_vehicle=r},expression:"selected_vehicle"}},[e.vehicles.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),t("show-error",{attrs:{"form-name":e.vehiclePerformanceCriteriaForm,"prop-name":"vehicle_id"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_performance_criteria_date_effective")))]),e._v(" "),t("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("transport.vehicle_performance_criteria_date_effective")},on:{selected:function(r){return e.vehiclePerformanceCriteriaForm.errors.clear("date_effective")}},model:{value:e.vehiclePerformanceCriteriaForm.date_effective,callback:function(r){e.$set(e.vehiclePerformanceCriteriaForm,"date_effective",r)},expression:"vehiclePerformanceCriteriaForm.date_effective"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vehiclePerformanceCriteriaForm,"prop-name":"date_effective"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_performance_criteria_mileage_range"))+" ("+e._s(e.trans("transport.unit_km_per_liter"))+")")]),e._v(" "),t("div",{staticClass:"input-group mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.vehiclePerformanceCriteriaForm.min_mileage,expression:"vehiclePerformanceCriteriaForm.min_mileage"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.vehiclePerformanceCriteriaForm.min_mileage},on:{input:function(r){r.target.composing||e.$set(e.vehiclePerformanceCriteriaForm,"min_mileage",r.target.value)}}}),e._v(" "),t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[e._v(e._s(e.trans("general.to")))])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vehiclePerformanceCriteriaForm.max_mileage,expression:"vehiclePerformanceCriteriaForm.max_mileage"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.vehiclePerformanceCriteriaForm.max_mileage},on:{input:function(r){r.target.composing||e.$set(e.vehiclePerformanceCriteriaForm,"max_mileage",r.target.value)}}})]),e._v(" "),t("show-error",{attrs:{"form-name":e.vehiclePerformanceCriteriaForm,"prop-name":"min_mileage"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vehiclePerformanceCriteriaForm,"prop-name":"max_mileage"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_performance_criteria_run_range"))+" ("+e._s(e.trans("transport.unit_km"))+")")]),e._v(" "),t("div",{staticClass:"input-group mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.vehiclePerformanceCriteriaForm.min_run,expression:"vehiclePerformanceCriteriaForm.min_run"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.vehiclePerformanceCriteriaForm.min_run},on:{input:function(r){r.target.composing||e.$set(e.vehiclePerformanceCriteriaForm,"min_run",r.target.value)}}}),e._v(" "),t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[e._v(e._s(e.trans("general.to")))])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vehiclePerformanceCriteriaForm.max_run,expression:"vehiclePerformanceCriteriaForm.max_run"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.vehiclePerformanceCriteriaForm.max_run},on:{input:function(r){r.target.composing||e.$set(e.vehiclePerformanceCriteriaForm,"max_run",r.target.value)}}})]),e._v(" "),t("show-error",{attrs:{"form-name":e.vehiclePerformanceCriteriaForm,"prop-name":"min_run"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vehiclePerformanceCriteriaForm,"prop-name":"max_run"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_performance_criteria_service_charge_range"))+" ("+e._s(e.trans("transport.vehicle_performance_criteria_service_charge_range_per_month"))+")")]),e._v(" "),t("div",{staticClass:"input-group mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.vehiclePerformanceCriteriaForm.min_service_charge,expression:"vehiclePerformanceCriteriaForm.min_service_charge"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.vehiclePerformanceCriteriaForm.min_service_charge},on:{input:function(r){r.target.composing||e.$set(e.vehiclePerformanceCriteriaForm,"min_service_charge",r.target.value)}}}),e._v(" "),t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[e._v(e._s(e.trans("general.to")))])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vehiclePerformanceCriteriaForm.max_service_charge,expression:"vehiclePerformanceCriteriaForm.max_service_charge"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.vehiclePerformanceCriteriaForm.max_service_charge},on:{input:function(r){r.target.composing||e.$set(e.vehiclePerformanceCriteriaForm,"max_service_charge",r.target.value)}}})]),e._v(" "),t("show-error",{attrs:{"form-name":e.vehiclePerformanceCriteriaForm,"prop-name":"min_service_charge"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vehiclePerformanceCriteriaForm,"prop-name":"max_service_charge"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_performance_criteria_description")))]),e._v(" "),t("autosize-textarea",{attrs:{rows:"1",name:"description",placeholder:e.trans("transport.vehicle_performance_criteria_description")},model:{value:e.vehiclePerformanceCriteriaForm.description,callback:function(r){e.$set(e.vehiclePerformanceCriteriaForm,"description",r)},expression:"vehiclePerformanceCriteriaForm.description"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vehiclePerformanceCriteriaForm,"prop-name":"description"}})],1)])]),e._v(" "),t("div",{staticClass:"card-footer text-right"},[t("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/transport/vehicle/performance/criteria"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():t("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(r){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?t("span",[e._v(e._s(e.trans("general.update")))]):t("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null);r.a=n.exports},UhR0:function(e,r,t){"use strict";t.r(r);var i={components:{vehiclePerformanceCriteriaForm:t("Dg54").a},data:function(){return{vehicle_performance_criterias:{total:0,data:[]},filter:{sort_by:"date_effective",order:"desc",vehicle_id:[],date_effective:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"vehicle_id",translation:i18n.transport.vehicle},{value:"date_effective",translation:i18n.transport.vehicle_performance_criteria_date_effective}],vehicles:[],selected_vehicle:null,showCreatePanel:!1,showFilterPanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("list-vehicle")&&helper.hasPermission("create-vehicle")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),helper.hasPermission("list-vehicle")&&this.getVehiclePerformanceCriterias(),helper.showDemoNotification(["transport"])},methods:{getConfig:function(e){return helper.getConfig(e)},hasPermission:function(e){return helper.hasPermission(e)},getVehiclePerformanceCriterias:function(e){var r=this,t=this.$loading.show();"number"!=typeof e&&(e=1),this.filter.date_effective=helper.toDate(this.filter.date_effective);var i=helper.getFilterURL(this.filter);axios.get("/api/vehicle/performance/criteria?page="+e+i).then((function(e){r.vehicle_performance_criterias=e.vehicle_performance_criterias,r.vehicles=e.filters.vehicles,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},editVehiclePerformanceCriteria:function(e){this.$router.push("/transport/vehicle/performance/criteria/"+e.id+"/edit")},confirmDelete:function(e){var r=this;return function(t){return r.deleteVehiclePerformanceCriteria(e)}},deleteVehiclePerformanceCriteria:function(e){var r=this,t=this.$loading.show();axios.delete("/api/vehicle/performance/criteria/"+e.id).then((function(e){toastr.success(e.message),r.getVehiclePerformanceCriterias(),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},print:function(){var e=this.$loading.show();axios.post("/api/vehicle/performance/criteria/print",{filter:this.filter}).then((function(r){var t=window.open("/print");e.hide(),t.document.write(r)})).catch((function(r){e.hide(),helper.showErrorMsg(r)}))},pdf:function(){var e=this,r=this.$loading.show();axios.post("/api/vehicle/performance/criteria/pdf",{filter:this.filter}).then((function(t){r.hide(),window.open("/download/report/"+t+"?token="+e.authToken)})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},onVehicleSelect:function(e){this.filter.vehicle_id.push(e.id)},onVehicleRemove:function(e){this.filter.vehicle_id.splice(this.filter.vehicle_id.indexOf(e.id),1)},formatNumber:function(e){return helper.formatNumber(e)},formatCurrency:function(e){return helper.formatCurrency(e)}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getVehiclePerformanceCriterias()},"filter.order":function(e){this.getVehiclePerformanceCriterias()},"filter.page_length":function(e){this.getVehiclePerformanceCriterias()}},computed:{authToken:function(){return helper.getAuthToken()}}},a=t("KHd+"),n=Object(a.a)(i,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"page-titles"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("transport.vehicle_performance_criteria"))+" \n                    "),e.vehicle_performance_criterias.total?t("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.vehicle_performance_criterias.total,from:e.vehicle_performance_criterias.from,to:e.vehicle_performance_criterias.to})))]):t("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"action-buttons pull-right"},[e.vehicle_performance_criterias.total&&!e.showCreatePanel&&e.hasPermission("create-vehicle")?t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(r){e.showCreatePanel=!e.showCreatePanel}}},[t("i",{staticClass:"fas fa-plus"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("transport.add_new_vehicle_performance_criteria")))])]):e._e(),e._v(" "),e.showFilterPanel?e._e():t("button",{staticClass:"btn btn-info btn-sm",on:{click:function(r){e.showFilterPanel=!e.showFilterPanel}}},[t("i",{staticClass:"fas fa-filter"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),t("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(r){e.filter.sort_by=r},updateOrder:function(r){e.filter.order=r}}}),e._v(" "),t("div",{staticClass:"btn-group"},[t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),t("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[t("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[t("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),t("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[t("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),t("help-button",{on:{clicked:function(r){e.help_topic="transport.vehicle.log"}}})],1)])])]),e._v(" "),t("div",{staticClass:"container-fluid"},[t("transition",{attrs:{name:"fade"}},[e.showFilterPanel?t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body"},[t("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter")))]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle")))]),e._v(" "),t("v-select",{attrs:{label:"name","track-by":"id",name:"vehicle_id",id:"vehicle_id",options:e.vehicles,placeholder:e.trans("transport.select_vehicle"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_vehicle},on:{select:e.onVehicleSelect,remove:e.onVehicleRemove},model:{value:e.selected_vehicle,callback:function(r){e.selected_vehicle=r},expression:"selected_vehicle"}},[e.vehicles.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)])]),e._v(" "),t("div",{staticClass:"card-footer text-right"},[t("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(r){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getVehiclePerformanceCriterias}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),e.hasPermission("create-vehicle")?t("transition",{attrs:{name:"fade"}},[e.showCreatePanel?t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body"},[t("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("transport.add_new_vehicle_performance_criteria")))]),e._v(" "),t("vehicle-performance-criteria-form",{on:{completed:e.getVehiclePerformanceCriterias,cancel:function(r){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]):e._e(),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[e.vehicle_performance_criterias.total?t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-sm"},[t("thead",[t("tr",[t("th",[e._v(e._s(e.trans("transport.vehicle")))]),e._v(" "),t("th",[e._v(e._s(e.trans("transport.vehicle_performance_criteria_date_effective")))]),e._v(" "),t("th",[e._v(e._s(e.trans("transport.vehicle_performance_criteria_mileage_range"))+" ("+e._s(e.trans("transport.unit_km_per_liter"))+")")]),e._v(" "),t("th",[e._v(e._s(e.trans("transport.vehicle_performance_criteria_run_range"))+" ("+e._s(e.trans("transport.unit_km"))+")")]),e._v(" "),t("th",[e._v(e._s(e.trans("transport.vehicle_performance_criteria_service_charge_range"))+" ("+e._s(e.trans("transport.vehicle_performance_criteria_service_charge_range_per_month"))+")")]),e._v(" "),t("th",[e._v(e._s(e.trans("transport.vehicle_performance_criteria_description")))]),e._v(" "),t("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),t("tbody",e._l(e.vehicle_performance_criterias.data,(function(r){return t("tr",[t("td",[e._v(e._s(r.vehicle.name+" ("+r.vehicle.registration_number+")"))]),e._v(" "),t("td",[e._v(e._s(e._f("moment")(r.date_effective)))]),e._v(" "),t("td",[e._v("\n                                    "+e._s(e.formatNumber(r.min_mileage)+" "+e.trans("general.to")+" "+e.formatNumber(r.max_mileage))+"\n                                ")]),e._v(" "),t("td",[e._v("\n                                    "+e._s(r.min_run+" "+e.trans("general.to")+" "+r.max_run)+"\n                                ")]),e._v(" "),t("td",[e._v("\n                                    "+e._s(e.formatCurrency(r.min_service_charge)+" "+e.trans("general.to")+" "+e.formatCurrency(r.max_service_charge))+"\n                                ")]),e._v(" "),t("td",{domProps:{textContent:e._s(r.description)}}),e._v(" "),t("td",{staticClass:"table-option"},[t("div",{staticClass:"btn-group"},[t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("transport.edit_vehicle_performance_criteria"),expression:"trans('transport.edit_vehicle_performance_criteria')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){return t.preventDefault(),e.editVehiclePerformanceCriteria(r)}}},[t("i",{staticClass:"fas fa-edit"})]),e._v(" "),t("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(r)},expression:"{ok: confirmDelete(vehicle_performance_criteria)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("transport.delete_vehicle_performance_criteria"),expression:"trans('transport.delete_vehicle_performance_criteria')"}],key:r.id,staticClass:"btn btn-danger btn-sm"},[t("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):e._e(),e._v(" "),e.vehicle_performance_criterias.total?e._e():t("module-info",{attrs:{module:"transport",title:"vehicle_performance_criteria_module_title",description:"vehicle_performance_criteria_module_description",icon:"list"}},[t("div",{attrs:{slot:"btn"},slot:"btn"},[!e.showCreatePanel&&e.hasPermission("create-vehicle")?t("button",{staticClass:"btn btn-info btn-md",on:{click:function(r){e.showCreatePanel=!e.showCreatePanel}}},[t("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))]):e._e()])]),e._v(" "),t("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.vehicle_performance_criterias},on:{"update:pageLength":function(r){return e.$set(e.filter,"page_length",r)},"update:page-length":function(r){return e.$set(e.filter,"page_length",r)},updateRecords:e.getVehiclePerformanceCriterias}})],1)])],1),e._v(" "),t("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null);r.default=n.exports}}]);
//# sourceMappingURL=index.js.map?id=c367a2175dfb4254f2c8