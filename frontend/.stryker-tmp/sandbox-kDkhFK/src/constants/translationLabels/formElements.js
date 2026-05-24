// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
export const FORM_CLASS_LABEL = stryMutAct_9fa48("4713") ? "" : (stryCov_9fa48("4713"), 'formElements:class_label');
export const FORM_GROUP_LABEL = stryMutAct_9fa48("4714") ? "" : (stryCov_9fa48("4714"), 'formElements:group_label');
export const FORM_LESSON_LABEL = stryMutAct_9fa48("4715") ? "" : (stryCov_9fa48("4715"), 'formElements:lesson_label');
export const FORM_ROOM_LABEL = stryMutAct_9fa48("4716") ? "" : (stryCov_9fa48("4716"), 'formElements:room_label');
export const FORM_TYPE_LABEL = stryMutAct_9fa48("4717") ? "" : (stryCov_9fa48("4717"), 'formElements:type_label');
export const TYPE_LABEL = stryMutAct_9fa48("4718") ? "" : (stryCov_9fa48("4718"), 'formElements:type_element');
export const FORM_CLASS_FROM_LABEL = stryMutAct_9fa48("4719") ? "" : (stryCov_9fa48("4719"), 'formElements:class_from_label');
export const FORM_CLASS_TO_LABEL = stryMutAct_9fa48("4720") ? "" : (stryCov_9fa48("4720"), 'formElements:class_to_label');
export const FORM_SEMESTER_LABEL = stryMutAct_9fa48("4721") ? "" : (stryCov_9fa48("4721"), 'formElements:semester_label');
export const FORM_STUDENT_ADD_LABEL = stryMutAct_9fa48("4722") ? "" : (stryCov_9fa48("4722"), 'formElements:student_add_label');
export const FORM_SHOW_STUDENTS = stryMutAct_9fa48("4723") ? "" : (stryCov_9fa48("4723"), 'formElements:show_students');
export const FORM_MERGE_BUTTON = stryMutAct_9fa48("4724") ? "" : (stryCov_9fa48("4724"), 'formElements:merge_button');
export const FORM_SHOW_GROUPS = stryMutAct_9fa48("4725") ? "" : (stryCov_9fa48("4725"), 'formElements:show_groups');
export const FORM_STUDENT_LABEL = stryMutAct_9fa48("4726") ? "" : (stryCov_9fa48("4726"), 'formElements:student_a_label');
export const FORM_SUBJECT_LABEL = stryMutAct_9fa48("4727") ? "" : (stryCov_9fa48("4727"), 'formElements:subject_label');
export const FORM_TEACHER_A_LABEL = stryMutAct_9fa48("4728") ? "" : (stryCov_9fa48("4728"), 'formElements:teacher_a_label');
export const FORM_TEACHER_LABEL = stryMutAct_9fa48("4729") ? "" : (stryCov_9fa48("4729"), 'formElements:teacher_label');
export const FORM_COPY_LESSON = stryMutAct_9fa48("4730") ? "" : (stryCov_9fa48("4730"), 'formElements:copy_label');
export const FORM_SEMESTER_FREE_ROOMS = stryMutAct_9fa48("4731") ? "" : (stryCov_9fa48("4731"), 'formElements:semester_free_rooms');
export const FORM_WEEK_FREE_ROOMS = stryMutAct_9fa48("4732") ? "" : (stryCov_9fa48("4732"), 'formElements:week_free_rooms');
export const FORM_DAY_FREE_ROOMS = stryMutAct_9fa48("4733") ? "" : (stryCov_9fa48("4733"), 'formElements:day_free_rooms');
export const FORM_CLASS_FREE_ROOMS = stryMutAct_9fa48("4734") ? "" : (stryCov_9fa48("4734"), 'formElements:class_free_rooms');
export const FORM_SUBMIT_BUTTON_LABEL = stryMutAct_9fa48("4735") ? "" : (stryCov_9fa48("4735"), 'formElements:submit_button_label');
export const FORM_CLEAR_BUTTON_LABEL = stryMutAct_9fa48("4736") ? "" : (stryCov_9fa48("4736"), 'formElements:clear_button_label');
export const FORM_GROUPED_LABEL = stryMutAct_9fa48("4737") ? "" : (stryCov_9fa48("4737"), 'formElements:grouped_label');
export const FORM_HOURS_LABEL = stryMutAct_9fa48("4738") ? "" : (stryCov_9fa48("4738"), 'formElements:hours_label');
export const FORM_SEMESTER_COPY_HINT = stryMutAct_9fa48("4739") ? "" : (stryCov_9fa48("4739"), 'formElements:semester_copy_hint');
export const FORM_SEMESTER_COPY_RED_HINT = stryMutAct_9fa48("4740") ? "" : (stryCov_9fa48("4740"), 'formElements:semester_copy_red_hint');
export const FORM_USER_LABEL = stryMutAct_9fa48("4741") ? "" : (stryCov_9fa48("4741"), 'formElements:user_label');
export const FORM_STUDENT_FILE_LABEL = stryMutAct_9fa48("4742") ? "" : (stryCov_9fa48("4742"), 'formElements:student_file_label');
export const FORM_STUDENTS_FILE_LABEL = stryMutAct_9fa48("4743") ? "" : (stryCov_9fa48("4743"), 'formElements:students_file_label');
export const FORM_TEMPORARY_SCHEDULE_LABEL = stryMutAct_9fa48("4744") ? "" : (stryCov_9fa48("4744"), 'formElements:temporary_schedule_label');
export const FORM_CHOSEN_SEMESTER_LABEL = stryMutAct_9fa48("4745") ? "" : (stryCov_9fa48("4745"), 'formElements:chosen_semester_label');
export const FORM_SCHEDULE_LABEL = stryMutAct_9fa48("4746") ? "" : (stryCov_9fa48("4746"), 'formElements:schedule_label');
export const FORM_DEPARTMENT_LABEL = stryMutAct_9fa48("4747") ? "" : (stryCov_9fa48("4747"), 'formElements:department_label');
export const FORM_DAY_LABEL = stryMutAct_9fa48("4748") ? "" : (stryCov_9fa48("4748"), 'formElements:day_label');
export const FORM_CHOOSE_BUTTON_TITLE = stryMutAct_9fa48("4749") ? "" : (stryCov_9fa48("4749"), 'formElements:choose_button_title');
export const FORM_CANCEL_BUTTON_TITLE = stryMutAct_9fa48("4750") ? "" : (stryCov_9fa48("4750"), 'formElements:cancel_button_title');
export const CANCEL_BUTTON_TITLE = stryMutAct_9fa48("4751") ? "" : (stryCov_9fa48("4751"), 'cancel_button_title');
export const EDIT_TITLE = stryMutAct_9fa48("4752") ? "" : (stryCov_9fa48("4752"), 'edit_title');
export const SEND_LETTER_LABEL = stryMutAct_9fa48("4753") ? "" : (stryCov_9fa48("4753"), 'send_letter_title');
export const SELECT_ALL = stryMutAct_9fa48("4754") ? "" : (stryCov_9fa48("4754"), 'select_all');
export const SELECT_STUDENT = stryMutAct_9fa48("4755") ? "" : (stryCov_9fa48("4755"), 'select_student');
export const STUDENT_ACTIONS = stryMutAct_9fa48("4756") ? "" : (stryCov_9fa48("4756"), 'student_actions');
export const ROWS_PER_PAGE = stryMutAct_9fa48("4757") ? "" : (stryCov_9fa48("4757"), 'rows_per_page');
export const ALL_PAGE = stryMutAct_9fa48("4758") ? "" : (stryCov_9fa48("4758"), 'all_page');
export const CREATE_TITLE = stryMutAct_9fa48("4759") ? "" : (stryCov_9fa48("4759"), 'create_title');
export const DELETE_TITLE = stryMutAct_9fa48("4760") ? "" : (stryCov_9fa48("4760"), 'delete_title');
export const SHOW_TEACHER_TITLE = stryMutAct_9fa48("4761") ? "" : (stryCov_9fa48("4761"), 'show_teacher_title');
export const SET_DEFAULT_TITLE = stryMutAct_9fa48("4762") ? "" : (stryCov_9fa48("4762"), 'set_default_title');
export const EDIT_TEMPORARY_SCHEDULE_FORM = stryMutAct_9fa48("4763") ? "" : (stryCov_9fa48("4763"), 'edit_temporary_schedule_form');
export const CREATE_TEMPORARY_SCHEDULE_FORM = stryMutAct_9fa48("4764") ? "" : (stryCov_9fa48("4764"), 'create_temporary_schedule_form');
export const EDIT_VACATION_FORM = stryMutAct_9fa48("4765") ? "" : (stryCov_9fa48("4765"), 'edit_vacation_form');
export const CREATE_VACATION_FORM = stryMutAct_9fa48("4766") ? "" : (stryCov_9fa48("4766"), 'create_vacation_form');
export const TEACHER_LABEL = stryMutAct_9fa48("4767") ? "" : (stryCov_9fa48("4767"), 'teacher_label');
export const TEACHERS_LABEL = stryMutAct_9fa48("4768") ? "" : (stryCov_9fa48("4768"), 'teachers_label');
export const LINK_TO_MEETING_LABEL = stryMutAct_9fa48("4769") ? "" : (stryCov_9fa48("4769"), 'link_to_meeting_label');
export const GROUP_LABEL = stryMutAct_9fa48("4770") ? "" : (stryCov_9fa48("4770"), 'group_label');
export const CLASS_LABEL = stryMutAct_9fa48("4771") ? "" : (stryCov_9fa48("4771"), 'class_label');
export const ROOM_LABEL = stryMutAct_9fa48("4772") ? "" : (stryCov_9fa48("4772"), 'room_label');
export const STUDENT_FULL_NAME = stryMutAct_9fa48("4773") ? "" : (stryCov_9fa48("4773"), 'full_name');
export const STUDENT_LABEL = stryMutAct_9fa48("4774") ? "" : (stryCov_9fa48("4774"), 'student_label');
export const SUBJECT_LABEL = stryMutAct_9fa48("4775") ? "" : (stryCov_9fa48("4775"), 'subject_label');
export const DEPARTMENT_TEACHER_LABEL = stryMutAct_9fa48("4776") ? "" : (stryCov_9fa48("4776"), 'department_teachers_label');
export const DEPARTMENT_TEACHERS = stryMutAct_9fa48("4777") ? "" : (stryCov_9fa48("4777"), 'department_teachers');
export const GROUP_STUDENTS = stryMutAct_9fa48("4778") ? "" : (stryCov_9fa48("4778"), 'group_students');
export const HOURS_LABEL = stryMutAct_9fa48("4779") ? "" : (stryCov_9fa48("4779"), 'hours_label');
export const HOURS_LABEL_SHORT = stryMutAct_9fa48("4780") ? "" : (stryCov_9fa48("4780"), 'hours_label_short');
export const LESSON_LABEL = stryMutAct_9fa48("4781") ? "" : (stryCov_9fa48("4781"), 'lesson_label');
export const TEACHER_A_LABEL = stryMutAct_9fa48("4782") ? "" : (stryCov_9fa48("4782"), 'teacher_a_label');
export const STUDENT_A_LABEL = stryMutAct_9fa48("4783") ? "" : (stryCov_9fa48("4783"), 'student_a_label');
export const GROUP_Y_LABEL = stryMutAct_9fa48("4784") ? "" : (stryCov_9fa48("4784"), 'group_y_label');
export const CLASS_Y_LABEL = stryMutAct_9fa48("4785") ? "" : (stryCov_9fa48("4785"), 'class_y_label');
export const ROOM_Y_LABEL = stryMutAct_9fa48("4786") ? "" : (stryCov_9fa48("4786"), 'room_y_label');
export const SUBJECT_Y_LABEL = stryMutAct_9fa48("4787") ? "" : (stryCov_9fa48("4787"), 'subject_y_label');
export const DEPARTMENT_LABEL = stryMutAct_9fa48("4788") ? "" : (stryCov_9fa48("4788"), 'department_y_label');
export const EMAIL_LABEL = stryMutAct_9fa48("4789") ? "" : (stryCov_9fa48("4789"), 'formElements:email_label');
export const PASSWORD_LABEL = stryMutAct_9fa48("4790") ? "" : (stryCov_9fa48("4790"), 'formElements:password_label');
export const RETYPE_PASSWORD_LABEL = stryMutAct_9fa48("4791") ? "" : (stryCov_9fa48("4791"), 'formElements:retype_password_label');
export const NEW_PASSWORD_LABEL = stryMutAct_9fa48("4792") ? "" : (stryCov_9fa48("4792"), 'formElements:new_password_label');
export const SEMESTERY_LABEL = stryMutAct_9fa48("4793") ? "" : (stryCov_9fa48("4793"), 'semestry_label');
export const TEACHER_FIRST_NAME = stryMutAct_9fa48("4794") ? "" : (stryCov_9fa48("4794"), 'teacher_first_name');
export const TEACHER_SURNAME = stryMutAct_9fa48("4795") ? "" : (stryCov_9fa48("4795"), 'teacher_surname');
export const PATRONYMIC_PLACEHOLDER = stryMutAct_9fa48("4796") ? "" : (stryCov_9fa48("4796"), 'patronymic_placeholder');
export const NAME_PLACEHOLDER = stryMutAct_9fa48("4797") ? "" : (stryCov_9fa48("4797"), 'name_placeholder');
export const SURNAME_PLACEHOLDER = stryMutAct_9fa48("4798") ? "" : (stryCov_9fa48("4798"), 'surname_placeholder');
export const NAME_LABEL = stryMutAct_9fa48("4799") ? "" : (stryCov_9fa48("4799"), 'name');
export const TEACHER_PATRONYMIC = stryMutAct_9fa48("4800") ? "" : (stryCov_9fa48("4800"), 'teacher_patronymic');
export const TEACHER_POSITION = stryMutAct_9fa48("4801") ? "" : (stryCov_9fa48("4801"), 'teacher_position');
export const EMAIL_FIELD = stryMutAct_9fa48("4802") ? "" : (stryCov_9fa48("4802"), 'email_field');
export const FOR_SITE_LABEL = stryMutAct_9fa48("4803") ? "" : (stryCov_9fa48("4803"), 'for_site_label');
export const NOT_SELECTED_LABEL = stryMutAct_9fa48("4804") ? "" : (stryCov_9fa48("4804"), 'not_selected_label');
export const FOR_TEACHER = stryMutAct_9fa48("4805") ? "" : (stryCov_9fa48("4805"), 'for_teacher');
export const SAVE_BUTTON_LABEL = stryMutAct_9fa48("4806") ? "" : (stryCov_9fa48("4806"), 'save_button_label');
export const COPY_GROUPS_LABEL = stryMutAct_9fa48("4807") ? "" : (stryCov_9fa48("4807"), 'copy_groups_label');
export const GROUPS_LABEL = stryMutAct_9fa48("4808") ? "" : (stryCov_9fa48("4808"), 'groups_label');
export const COPY_FOR_BUTTON_LABEL = stryMutAct_9fa48("4809") ? "" : (stryCov_9fa48("4809"), 'copy_for_button_label');
export const CLEAR_BUTTON_LABEL = stryMutAct_9fa48("4810") ? "" : (stryCov_9fa48("4810"), 'clear_button_label');
export const CLASS_FROM_LABEL = stryMutAct_9fa48("4811") ? "" : (stryCov_9fa48("4811"), 'class_from_label');
export const CLASS_TO_LABEL = stryMutAct_9fa48("4812") ? "" : (stryCov_9fa48("4812"), 'class_to_label');
export const TYPE_TO_SEARCH = stryMutAct_9fa48("4813") ? "" : (stryCov_9fa48("4813"), 'type_to_search');
export const THERE_IS_NO = stryMutAct_9fa48("4814") ? "" : (stryCov_9fa48("4814"), 'there_is_no');
export const FIND_FREE_ROOM = stryMutAct_9fa48("4815") ? "" : (stryCov_9fa48("4815"), 'find_free_room');
export const NUMBER_LABEL = stryMutAct_9fa48("4816") ? "" : (stryCov_9fa48("4816"), 'number_label');
export const ADD_TYPE_LABEL = stryMutAct_9fa48("4817") ? "" : (stryCov_9fa48("4817"), 'add_type_label');
export const STUDENTS_LABEL = stryMutAct_9fa48("4818") ? "" : (stryCov_9fa48("4818"), 'students_label');
export const FORM_SEMESTER_ELEMENT = stryMutAct_9fa48("4819") ? "" : (stryCov_9fa48("4819"), 'formElements:semester_element');
export const FORM_REFERENCE_ELEMENT = stryMutAct_9fa48("4820") ? "" : (stryCov_9fa48("4820"), 'formElements:reference_element');
export const MAX_COUNT_CLASSES_REACHED = stryMutAct_9fa48("4821") ? "" : (stryCov_9fa48("4821"), 'max_count_classes_reached');
export const CHANGE_PASSWORD_FROM_TITLE = stryMutAct_9fa48("4822") ? "" : (stryCov_9fa48("4822"), 'change_password_form_title');
export const SEMESTER_COPY_LABEL = stryMutAct_9fa48("4823") ? "" : (stryCov_9fa48("4823"), 'semester_copy_label');
export const CLOSE_LABEL = stryMutAct_9fa48("4824") ? "" : (stryCov_9fa48("4824"), 'close_label');
export const COPY_LABEL = stryMutAct_9fa48("4825") ? "" : (stryCov_9fa48("4825"), 'copy_label');
export const SHOW_ARCHIVED = stryMutAct_9fa48("4826") ? "" : (stryCov_9fa48("4826"), 'show_archived');
export const SHOW_REGULAR = stryMutAct_9fa48("4827") ? "" : (stryCov_9fa48("4827"), 'show_regular');
export const NO_EXIST_TEACHER_AT_DEPARTMENT = stryMutAct_9fa48("4828") ? "" : (stryCov_9fa48("4828"), 'no_exist_teachers_at_department');
export const NO_EXIST_STUDENTS_AT_GROUP = stryMutAct_9fa48("4829") ? "" : (stryCov_9fa48("4829"), 'no_exist_students_in_group');
export const NEW_TYPE_LABEL = stryMutAct_9fa48("4830") ? "" : (stryCov_9fa48("4830"), 'new_type_label');
export const DELETE_TITLE_LABEL = stryMutAct_9fa48("4831") ? "" : (stryCov_9fa48("4831"), 'delete_title');
export const CREATE_ACCOUNT_LABEL = stryMutAct_9fa48("4832") ? "" : (stryCov_9fa48("4832"), 'formElements:create_account_label');
export const FORGOT_PASSWORD_LABEL = stryMutAct_9fa48("4833") ? "" : (stryCov_9fa48("4833"), 'formElements:forgot_password_label');
export const DONT_HAVE_ACCOUNT_LABEL = stryMutAct_9fa48("4834") ? "" : (stryCov_9fa48("4834"), 'formElements:dont_have_an_account');
export const LOGIN_VIA_GOOGLE_LABEL = stryMutAct_9fa48("4835") ? "" : (stryCov_9fa48("4835"), 'formElements:login_via_google');
export const RESET_PASSWORD_HELPER_TEXT = stryMutAct_9fa48("4836") ? "" : (stryCov_9fa48("4836"), 'formElements:reset_password_helper_text');
export const FORM_CHOOSE_GROUP_LABEL = stryMutAct_9fa48("4837") ? "" : (stryCov_9fa48("4837"), 'choose_group_title');
export const FORM_GROUP_LABEL_AFTER = stryMutAct_9fa48("4838") ? "" : (stryCov_9fa48("4838"), 'form_group_label_after');
export const STUDENTS_UPPERCASE = stryMutAct_9fa48("4839") ? "" : (stryCov_9fa48("4839"), 'formElements:students_uppercase');
export const FORM_ROOM_LABEL_AFTER = stryMutAct_9fa48("4840") ? "" : (stryCov_9fa48("4840"), 'formElements:room_label_after');
export const FORM_DEPARTMENT_TEACHERS_LABEL = stryMutAct_9fa48("4841") ? "" : (stryCov_9fa48("4841"), 'formElements:department_teachers_label');