(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{HRNn:function(e,t,s){"use strict";s.r(t);var o={components:{},data:function(){return{issueForm:new Form({type:"student",student_id:"",employee_id:"",date_of_issue:"",issue_remarks:"",books:[]}),book_details:[],book_number:"",selected_student:null,selected_student_record:null,selected_employee:null,studentFilter:{name:"",page_length:helper.getConfig("page_length")},employeeFilter:{name:"",page_length:helper.getConfig("page_length")},students:{data:[],total:0},employees:{data:[],total:0},unreturned_books:[]}},mounted:function(){helper.showDemoNotification(["library"]),this.issueForm.date_of_issue=moment().format("YYYY-MM-DD")},methods:{getStudentName:function(e){return helper.getStudentName(e)},getStudentFatherName:function(e){return e.parent.first_guardian_name},getEmployeeName:function(e){return helper.getEmployeeName(e)},getEmployeeCode:function(e){return helper.getEmployeeCode(e)},searchBook:function(){var e=this,t=this.$loading.show(),s=this.issueForm.date_of_issue;return s?this.issueForm.books.indexOf(parseInt(this.book_number))>=0?(t.hide(),toastr.error(i18n.library.book_already_added_in_issue_list)):void axios.post("/api/book/search/number",{number:this.book_number,date:s}).then((function(s){e.issueForm.books.push(s.number),e.book_details.push(s),e.book_number="",t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)})):(t.hide(),toastr.error(i18n.library.choose_date_before_adding_book))},searchStudent:function(e){var t=this,s=this.$loading.show();"number"!=typeof e&&(e=1);var o=helper.getFilterURL(this.studentFilter);axios.get("/api/student/search/name?page="+e+o).then((function(e){if(t.students=e,!e.total)return s.hide(),toastr.error(i18n.general.no_search_result_found);s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},selectStudentRecord:function(e,t){this.issueForm.student_id=e.id,this.selected_student=e,this.selected_student_record=t,this.students=[],this.studentFilter.name="",this.getUnreturnedBooks(this.issueForm.type,t.id)},searchEmployee:function(e){var t=this,s=this.$loading.show();"number"!=typeof e&&(e=1);var o=helper.getFilterURL(this.employeeFilter);axios.get("/api/employee/search/name?page="+e+o).then((function(e){if(t.employees=e,!e.total)return s.hide(),toastr.error(i18n.general.no_search_result_found);s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},selectEmployee:function(e){this.issueForm.employee_id=e.id,this.selected_employee=e,this.employees=[],this.employeeFilter.name="",this.getUnreturnedBooks(this.issueForm.type,e.id)},getUnreturnedBooks:function(e,t){var s=this,o=this.$loading.show();axios.post("/api/book/log/unreturned",{id:t,type:e}).then((function(e){s.unreturned_books=e,o.hide()})).catch((function(e){loading.hide(),helper.showErrorMsg(e)}))},confirmDelete:function(e){var t=this;return function(s){return t.deleteBook(e)}},deleteBook:function(e){var t=this.book_details.findIndex((function(t){return t.number==e}));this.book_details.splice(t,1),t=this.issueForm.books.indexOf(e),this.issueForm.books.splice(t,1)},submit:function(){var e=this,t=this.$loading.show();this.issueForm.post("/api/book/log").then((function(s){toastr.success(s.message),e.selected_employee=null,e.selected_student=null,e.selected_student_record=null,e.studentFilter.name="",e.employeeFilter.name="",e.students.data=[],e.students.total=0,e.employees.data=[],e.employees.total=0,e.book_details=[],e.unreturned_books=[],e.issueForm.type="student",e.issueForm.books=[],t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}},watch:{"studentFilter.page_length":function(e){this.searchStudent()}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}}},a=s("KHd+"),r=Object(a.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("library.issue_book")))])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/library/issue/list")}}},[s("i",{staticClass:"fas fa-book"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("library.issue_list")))])]),e._v(" "),s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/library/book")}}},[s("i",{staticClass:"fas fa-list"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("library.book")))])]),e._v(" "),s("help-button",{on:{clicked:function(t){e.help_topic="book-issue"}}})],1)])])]),e._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body p-t-20"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)},keydown:function(t){return e.issueForm.errors.clear(t.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("library.date_of_issue")))]),e._v(" "),s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("library.date_of_issue")},on:{selected:function(t){return e.issueForm.errors.clear("date_of_issue")}},model:{value:e.issueForm.date_of_issue,callback:function(t){e.$set(e.issueForm,"date_of_issue",t)},expression:"issueForm.date_of_issue"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.issueForm,"prop-name":"date_of_issue"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("library.issue_to")))]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"radio radio-success"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.issueForm.type,expression:"issueForm.type"}],attrs:{type:"radio",value:"student",id:"type_student",name:"type"},domProps:{checked:"student"==e.issueForm.type,checked:e._q(e.issueForm.type,"student")},on:{click:function(t){return e.issueForm.errors.clear("type")},change:function(t){return e.$set(e.issueForm,"type","student")}}}),e._v(" "),s("label",{attrs:{for:"type_student"}},[e._v(e._s(e.trans("student.student")))])])]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"radio radio-success"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.issueForm.type,expression:"issueForm.type"}],attrs:{type:"radio",value:"employee",id:"type_employee",name:"type"},domProps:{checked:"employee"==e.issueForm.type,checked:e._q(e.issueForm.type,"employee")},on:{click:function(t){return e.issueForm.errors.clear("type")},change:function(t){return e.$set(e.issueForm,"type","employee")}}}),e._v(" "),s("label",{attrs:{for:"type_employee"}},[e._v(e._s(e.trans("employee.employee")))])])])]),e._v(" "),s("show-error",{attrs:{"form-name":e.issueForm,"prop-name":"type"}})],1)]),e._v(" "),s("div",{staticClass:"col-12"},["student"==e.issueForm.type&&e.selected_student?s("div",{staticClass:"m-b-20"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[e._v(e._s(e.trans("student.name")+": "+e.getStudentName(e.selected_student)))]),e._v(" "),s("div",{staticClass:"col-6"},[e._v(e._s(e.trans("student.first_guardian_name")+": "+e.getStudentFatherName(e.selected_student))+" "),s("br")]),e._v(" "),s("div",{staticClass:"col-6"},[e._v(e._s(e.trans("academic.batch")+": "+e.selected_student_record.batch.course.name+" "+e.selected_student_record.batch.name))]),e._v(" "),s("div",{staticClass:"col-6"},[e._v(e._s(e.trans("student.contact_number")+": "+e.selected_student.contact_number))])])]):e._e(),e._v(" "),"employee"==e.issueForm.type&&e.selected_employee?s("div",{staticClass:"m-b-20"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[e._v(e._s(e.trans("employee.code")+": "+e.getEmployeeCode(e.selected_employee)))]),e._v(" "),s("div",{staticClass:"col-6"},[e._v(e._s(e.trans("employee.name")+": "+e.getEmployeeName(e.selected_employee)))]),e._v(" "),s("div",{staticClass:"col-6"},[e._v(e._s(e.trans("employee.father_name")+": "+e.selected_employee.father_name)+" "),s("br")]),e._v(" "),s("div",{staticClass:"col-6"},[e._v(e._s(e.trans("employee.contact_number")+": "+e.selected_employee.contact_number))])])]):e._e(),e._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.book_number,expression:"book_number"}],staticClass:"form-control",attrs:{type:"text",name:"book_number",placeholder:e.trans("library.book_search_by_number")},domProps:{value:e.book_number},on:{keypress:function(t){return t.type.indexOf("key")||13===t.keyCode?(t.preventDefault(),e.searchBook(t)):null},input:function(t){t.target.composing||(e.book_number=t.target.value)}}}),e._v(" "),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-info pull-right",attrs:{type:"button"},on:{click:e.searchBook}},[s("i",{staticClass:"fas fa-search"}),e._v(" "+e._s(e.trans("general.search")))])])])]),e._v(" "),e.book_details.length?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[e._v(e._s(e.trans("library.book_number")))]),e._v(" "),s("th",[e._v(e._s(e.trans("library.book_title")))]),e._v(" "),s("th",[e._v(e._s(e.trans("library.book_author")))]),e._v(" "),s("th",[e._v(e._s(e.trans("library.book_condition")))]),e._v(" "),s("th")])]),e._v(" "),s("tbody",e._l(e.book_details,(function(t){return s("tr",[s("td",[e._v(e._s(t.number))]),e._v(" "),s("td",[e._v(e._s(t.book_post.book.title))]),e._v(" "),s("td",[e._v(e._s(t.book_post.book.book_author.name))]),e._v(" "),s("td",[e._v(e._s(t.book_condition_id?t.book_condition.name:"-"))]),e._v(" "),s("td",[s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t.number)},expression:"{ok: confirmDelete(book_post_detail.number)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("library.delete_book"),expression:"trans('library.delete_book')"}],key:t.id,staticClass:"btn btn-danger btn-sm",attrs:{type:"button"}},[s("i",{staticClass:"fas fa-trash"})])])])})),0)])]):e._e()])]),e._v(" "),e.book_details.length?[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("library.issue_remarks")))]),e._v(" "),s("autosize-textarea",{attrs:{rows:"1",name:"issue_remarks",placeholder:e.trans("library.issue_remarks")},model:{value:e.issueForm.issue_remarks,callback:function(t){e.$set(e.issueForm,"issue_remarks",t)},expression:"issueForm.issue_remarks"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.issueForm,"prop-name":"issue_remarks"}})],1),e._v(" "),s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-info pull-right",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))])])]:e._e()],2)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"row"},["student"==e.issueForm.type?s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.studentFilter.name,expression:"studentFilter.name"}],staticClass:"form-control",attrs:{type:"text",name:"student_name",placeholder:e.trans("student.student_search_by_name")},domProps:{value:e.studentFilter.name},on:{input:function(t){t.target.composing||e.$set(e.studentFilter,"name",t.target.value)}}}),e._v(" "),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-info pull-right",attrs:{type:"button"},on:{click:e.searchStudent}},[s("i",{staticClass:"fas fa-search"}),e._v(" "+e._s(e.trans("general.search")))])])])]),e._v(" "),e.students.total?[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[e._v(e._s(e.trans("student.name")))]),e._v(" "),s("th",[e._v(e._s(e.trans("academic.batch")))]),e._v(" "),s("th",[e._v(e._s(e.trans("student.first_guardian_name")))]),e._v(" "),s("th",[e._v(e._s(e.trans("student.contact_number")))]),e._v(" "),s("th")])]),e._v(" "),s("tbody",[e._l(e.students.data,(function(t){return e._l(t.student_records,(function(o){return s("tr",[s("td",[e._v(e._s(e.getStudentName(t)))]),e._v(" "),s("td",[e._v(e._s(o.batch.course.name+" "+o.batch.name))]),e._v(" "),s("td",[e._v(e._s(e.getStudentFatherName(t)))]),e._v(" "),s("td",[e._v(e._s(t.contact_number))]),e._v(" "),s("td",[s("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(s){return e.selectStudentRecord(t,o)}}},[e._v(e._s(e.trans("student.select_student")))])])])}))}))],2)])]),e._v(" "),s("pagination-record",{attrs:{"page-length":e.studentFilter.page_length,records:e.students},on:{"update:pageLength":function(t){return e.$set(e.studentFilter,"page_length",t)},"update:page-length":function(t){return e.$set(e.studentFilter,"page_length",t)},updateRecords:e.searchStudent}})]:e._e()],2):e._e(),e._v(" "),"employee"==e.issueForm.type?s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeFilter.name,expression:"employeeFilter.name"}],staticClass:"form-control",attrs:{type:"text",name:"employee_name",placeholder:e.trans("employee.employee_search_by_name")},domProps:{value:e.employeeFilter.name},on:{input:function(t){t.target.composing||e.$set(e.employeeFilter,"name",t.target.value)}}}),e._v(" "),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-info pull-right",attrs:{type:"button"},on:{click:e.searchEmployee}},[s("i",{staticClass:"fas fa-search"}),e._v(" "+e._s(e.trans("general.search")))])])])]),e._v(" "),e.employees.total?[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[e._v(e._s(e.trans("employee.code")))]),e._v(" "),s("th",[e._v(e._s(e.trans("employee.name")))]),e._v(" "),s("th",[e._v(e._s(e.trans("employee.father_name")))]),e._v(" "),s("th",[e._v(e._s(e.trans("employee.contact_number")))]),e._v(" "),s("th")])]),e._v(" "),s("tbody",e._l(e.employees.data,(function(t){return s("tr",[s("td",[e._v(e._s(e.getEmployeeCode(t)))]),e._v(" "),s("td",[e._v(e._s(e.getEmployeeName(t)))]),e._v(" "),s("td",[e._v(e._s(t.father_name))]),e._v(" "),s("td",[e._v(e._s(t.contact_number))]),e._v(" "),s("td",[s("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(s){return e.selectEmployee(t)}}},[e._v(e._s(e.trans("employee.select_employee")))])])])})),0)])]),e._v(" "),s("pagination-record",{attrs:{"page-length":e.employeeFilter.page_length,records:e.employees},on:{"update:pageLength":function(t){return e.$set(e.employeeFilter,"page_length",t)},"update:page-length":function(t){return e.$set(e.employeeFilter,"page_length",t)},updateRecords:e.searchEmployee}})]:e._e()],2):e._e(),e._v(" "),e.unreturned_books.length?s("div",{staticClass:"col-12 m-b-10"},[s("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("library.unreturned_books")))]),e._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[e._v(e._s(e.trans("library.book_number")))]),e._v(" "),s("th",[e._v(e._s(e.trans("library.book_title")))]),e._v(" "),s("th",[e._v(e._s(e.trans("library.book_author")))]),e._v(" "),s("th",[e._v(e._s(e.trans("library.date_of_issue")))]),e._v(" "),s("th",[e._v(e._s(e.trans("library.due_date")))])])]),e._v(" "),s("tbody",[e._l(e.unreturned_books,(function(t){return e._l(t.book_log_details,(function(o){return s("tr",[s("td",[e._v(e._s(o.book_post_detail.number))]),e._v(" "),s("td",[e._v(e._s(o.book_post_detail.book_post.book.title))]),e._v(" "),s("td",[e._v(e._s(o.book_post_detail.book_post.book.book_author.name))]),e._v(" "),s("td",[e._v(e._s(e._f("moment")(t.date_of_issue)))]),e._v(" "),s("td",[e._v(e._s(e._f("moment")(t.due_date)))])])}))}))],2)])])]):e._e()])])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
//# sourceMappingURL=issue.js.map?id=0497a153549108fe594d