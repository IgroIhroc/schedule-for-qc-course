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
export const COMMON_EMPTY_SCHEDULE = stryMutAct_9fa48("4541") ? "" : (stryCov_9fa48("4541"), 'common:empty_schedule');
export const COMMON_DOWNLOAD_PDF = stryMutAct_9fa48("4542") ? "" : (stryCov_9fa48("4542"), 'common:download_pdf');
export const COMMON_ODD_WEEK = stryMutAct_9fa48("4543") ? "" : (stryCov_9fa48("4543"), 'common:odd_week');
export const COMMON_EVEN_WEEK = stryMutAct_9fa48("4544") ? "" : (stryCov_9fa48("4544"), 'common:even_week');
export const COMMON_DELETE_SCHEDULE_ITEM = stryMutAct_9fa48("4545") ? "" : (stryCov_9fa48("4545"), 'common:delete_schedule_item');
export const COMMON_EDIT_SCHEDULE_ITEM = stryMutAct_9fa48("4546") ? "" : (stryCov_9fa48("4546"), 'common:edit_schedule_item');
export const COMMON_SELECT_GROUP_SCHEDULE = stryMutAct_9fa48("4547") ? "" : (stryCov_9fa48("4547"), 'common:select_group_schedule');
export const COMMON_EDIT = stryMutAct_9fa48("4548") ? "" : (stryCov_9fa48("4548"), 'common:edit');
export const COMMON_SET_DISABLED = stryMutAct_9fa48("4549") ? "" : (stryCov_9fa48("4549"), 'common:set_disabled');
export const COMMON_CREATE = stryMutAct_9fa48("4550") ? "" : (stryCov_9fa48("4550"), 'common:create');
export const COMMON_SEMESTER = stryMutAct_9fa48("4551") ? "" : (stryCov_9fa48("4551"), 'common:semester');
export const COMMON_CURRENT_LABEL = stryMutAct_9fa48("4552") ? "" : (stryCov_9fa48("4552"), 'common:current_label');
export const COMMON_DEFAULT_LABEL = stryMutAct_9fa48("4553") ? "" : (stryCov_9fa48("4553"), 'common:default_label');
export const COMMON_YEAR_LABEL = stryMutAct_9fa48("4554") ? "" : (stryCov_9fa48("4554"), 'common:year_label');
export const COMMON_CHOOSE_GROUPS_BUTTON_LABEL = stryMutAct_9fa48("4555") ? "" : (stryCov_9fa48("4555"), 'common:choose_groups_button_label');
export const COMMON_SEMESTER_LABEL = stryMutAct_9fa48("4556") ? "" : (stryCov_9fa48("4556"), 'common:semester_label');
export const COMMON_CLASS_FROM_LABEL = stryMutAct_9fa48("4557") ? "" : (stryCov_9fa48("4557"), 'common:class_from_label');
export const COMMON_CLASS_TO_LABEL = stryMutAct_9fa48("4558") ? "" : (stryCov_9fa48("4558"), 'common:class_to_label');
export const COMMON_DAYS_LABEL = stryMutAct_9fa48("4559") ? "" : (stryCov_9fa48("4559"), 'common:days_label');
export const COMMON_CLASS_SCHEDULE_MANAGEMENT_TITLE = stryMutAct_9fa48("4560") ? "" : (stryCov_9fa48("4560"), 'common:ClassSchedule_management_title');
export const COMMON_SAVE_BUTTON_LABEL = stryMutAct_9fa48("4561") ? "" : (stryCov_9fa48("4561"), 'common:save_button_label');
export const COMMON_LIST_VIEW = stryMutAct_9fa48("4562") ? "" : (stryCov_9fa48("4562"), 'common:list_view');
export const COMMON_SELECT_DATES_FOR_TEACHERS_SCHEDULE = stryMutAct_9fa48("4563") ? "" : (stryCov_9fa48("4563"), 'common:select_dates_for_teacher_schedule');
export const COMMON_BLOCK_VIEW = stryMutAct_9fa48("4564") ? "" : (stryCov_9fa48("4564"), 'common:block_view');
export const COMMON_CLASS_SCHEDULE = stryMutAct_9fa48("4565") ? "" : (stryCov_9fa48("4565"), 'common:class_schedule');
export const COMMON_EDIT_HOVER_TITLE = stryMutAct_9fa48("4566") ? "" : (stryCov_9fa48("4566"), 'common:edit_hover_title');
export const COMMON_DELETE_HOVER_TITLE = stryMutAct_9fa48("4567") ? "" : (stryCov_9fa48("4567"), 'common:delete_hover_title');
export const COMMON_FEW_DAYS_LABEL = stryMutAct_9fa48("4568") ? "" : (stryCov_9fa48("4568"), 'common:few_days_label');
export const COMMON_DATE_LABEL = stryMutAct_9fa48("4569") ? "" : (stryCov_9fa48("4569"), 'common:date');
export const COMMON_HOLIDAY_LABEL = stryMutAct_9fa48("4570") ? "" : (stryCov_9fa48("4570"), 'common:holiday_label');
export const COMMON_NOTIFY_LABEL = stryMutAct_9fa48("4571") ? "" : (stryCov_9fa48("4571"), 'common:notify_label');
export const COMMON_NAME_LABEL = stryMutAct_9fa48("4572") ? "" : (stryCov_9fa48("4572"), 'common:name_label');
export const COMMON_TYPE_LABEL = stryMutAct_9fa48("4573") ? "" : (stryCov_9fa48("4573"), 'common:type_label');
export const COMMON_BYTE_SIZE_LABEL = stryMutAct_9fa48("4574") ? "" : (stryCov_9fa48("4574"), 'common:byte_size_label');
export const COMMON_UPLOAD_TITLE = stryMutAct_9fa48("4575") ? "" : (stryCov_9fa48("4575"), 'common:upload_title');
export const COMMON_MY_PROFILE = stryMutAct_9fa48("4576") ? "" : (stryCov_9fa48("4576"), 'common:my_profile');
export const COMMON_MAKE_ARCHIVE = stryMutAct_9fa48("4577") ? "" : (stryCov_9fa48("4577"), 'common:make_archive');
export const COMMON_PREVIEW = stryMutAct_9fa48("4578") ? "" : (stryCov_9fa48("4578"), 'common:preview');
export const COMMON_SET_ENABLED = stryMutAct_9fa48("4579") ? "" : (stryCov_9fa48("4579"), 'common:set_enabled');
export const COMMON_SEMESTER_IS_NOT_UNIQUE = stryMutAct_9fa48("4580") ? "" : (stryCov_9fa48("4580"), 'common:semester_service_is_not_unique');
export const COMMON_SCHEDULE_TITLE = stryMutAct_9fa48("4581") ? "" : (stryCov_9fa48("4581"), 'common:schedule_title');
export const COMMON_LESSON_SERVICE_IS_NOT_UNIQUE = stryMutAct_9fa48("4582") ? "" : (stryCov_9fa48("4582"), 'common:lesson_service_is_not_unique');
export const COMMON_NO_BUTTON_TITLE = stryMutAct_9fa48("4583") ? "" : (stryCov_9fa48("4583"), 'common:no_button_title');
export const COMMON_ERROR_MESSAGE = stryMutAct_9fa48("4584") ? "" : (stryCov_9fa48("4584"), 'common:error_message');
export const COMMON_REGULAR_LESSON_LABEL = stryMutAct_9fa48("4585") ? "" : (stryCov_9fa48("4585"), 'common:regular_lesson_label');
export const COMMON_LINK_TO_MEETING_WORD = stryMutAct_9fa48("4586") ? "" : (stryCov_9fa48("4586"), 'common:link_to_meeting_word');
export const COMMON_VACATION_LABEL = stryMutAct_9fa48("4587") ? "" : (stryCov_9fa48("4587"), 'common:vacation_label');
export const COMMON_GROUP_TITLE = stryMutAct_9fa48("4588") ? "" : (stryCov_9fa48("4588"), 'common:group_title');
export const LOGIN_TITLE = stryMutAct_9fa48("4589") ? "" : (stryCov_9fa48("4589"), 'login_title');
export const SEMESTER_LABEL = stryMutAct_9fa48("4590") ? "" : (stryCov_9fa48("4590"), 'semester_label');
export const REGISTRATION_PAGE_TITLE = stryMutAct_9fa48("4591") ? "" : (stryCov_9fa48("4591"), 'registration_page_title');
export const RESET_PASSWORD_PAGE_TITLE = stryMutAct_9fa48("4592") ? "" : (stryCov_9fa48("4592"), 'reset_password_page_title');
export const RESET_PASSWORD_LABEL = stryMutAct_9fa48("4593") ? "" : (stryCov_9fa48("4593"), 'common:reset_password_button');
export const LOGOUT_TITLE = stryMutAct_9fa48("4594") ? "" : (stryCov_9fa48("4594"), 'logout_title');
export const ADMIN_TITLE = stryMutAct_9fa48("4595") ? "" : (stryCov_9fa48("4595"), 'admin_title');
export const HOME_TITLE = stryMutAct_9fa48("4596") ? "" : (stryCov_9fa48("4596"), 'home_title');
export const SCHEDULE_TITLE = stryMutAct_9fa48("4597") ? "" : (stryCov_9fa48("4597"), 'schedule_title');
export const COMMON_STUDENT_TITLE = stryMutAct_9fa48("4598") ? "" : (stryCov_9fa48("4598"), 'common:student_title');
export const MY_PROFILE = stryMutAct_9fa48("4599") ? "" : (stryCov_9fa48("4599"), 'my_profile');
export const MERGE_HEADER = stryMutAct_9fa48("4600") ? "" : (stryCov_9fa48("4600"), 'merge_header');
export const SENT_SCHEDULE = stryMutAct_9fa48("4601") ? "" : (stryCov_9fa48("4601"), 'sent_schedule');
export const SCHEDULE_FOR_SEMESTER = stryMutAct_9fa48("4602") ? "" : (stryCov_9fa48("4602"), 'schedule_for_semester');
export const CONFIRM_GROUPS = stryMutAct_9fa48("4603") ? "" : (stryCov_9fa48("4603"), 'confirm_groups');
export const CHOOSE_TEACHER = stryMutAct_9fa48("4604") ? "" : (stryCov_9fa48("4604"), 'choose_teachers');
export const CHOOSE_GROUPS = stryMutAct_9fa48("4605") ? "" : (stryCov_9fa48("4605"), 'choose_groups');
export const ALL_TEACHERS = stryMutAct_9fa48("4606") ? "" : (stryCov_9fa48("4606"), 'all_teachers');
export const ALL_GROUPS = stryMutAct_9fa48("4607") ? "" : (stryCov_9fa48("4607"), 'all_groups');
export const TEACHER_CARD_NO_CARD = stryMutAct_9fa48("4608") ? "" : (stryCov_9fa48("4608"), 'teacher_card_no_cards');
export const TEACHER_DEPARTMENT = stryMutAct_9fa48("4609") ? "" : (stryCov_9fa48("4609"), 'teacher_department');
export const SEND_SCHEDULE_FOR_TEACHER = stryMutAct_9fa48("4610") ? "" : (stryCov_9fa48("4610"), 'send_schedule_for_teacher');
export const WEEK_LABEL = stryMutAct_9fa48("4611") ? "" : (stryCov_9fa48("4611"), 'week_label');
export const EDIT_HOVER_TITLE = stryMutAct_9fa48("4612") ? "" : (stryCov_9fa48("4612"), 'edit_hover_title');
export const DELETE_HOVER_TITLE = stryMutAct_9fa48("4613") ? "" : (stryCov_9fa48("4613"), 'delete_hover_title');
export const BUSY_ROOMS_HEADING = stryMutAct_9fa48("4614") ? "" : (stryCov_9fa48("4614"), 'busy_rooms_heading');
export const SUCCESSFUL_LOGIN_MESSAGE = stryMutAct_9fa48("4615") ? "" : (stryCov_9fa48("4615"), 'successful_login_message');
export const SUCCESSFUL_REGISTERED_MESSAGE = stryMutAct_9fa48("4616") ? "" : (stryCov_9fa48("4616"), 'successful_registered_message');
export const LESSON_FOR_GROUP_TITLE = stryMutAct_9fa48("4617") ? "" : (stryCov_9fa48("4617"), 'lesson_for_group_title');
export const TEMPORARY_SCHEDULE_FOR_TEACHER_TITLE = stryMutAct_9fa48("4618") ? "" : (stryCov_9fa48("4618"), 'temporary_schedule_for_teacher_title');
export const LESSON_NO_LESSON_FOR_GROUP_LABEL = stryMutAct_9fa48("4619") ? "" : (stryCov_9fa48("4619"), 'lesson_no_lesson_for_group_label');
export const WEEK_ODD_TITLE = stryMutAct_9fa48("4620") ? "" : (stryCov_9fa48("4620"), 'week_odd_title');
export const WEEK_EVEN_TITLE = stryMutAct_9fa48("4621") ? "" : (stryCov_9fa48("4621"), 'week_even_title');
export const CLASS_SCHEDULE = stryMutAct_9fa48("4622") ? "" : (stryCov_9fa48("4622"), 'class_schedule');
export const DELETE_LESSON = stryMutAct_9fa48("4623") ? "" : (stryCov_9fa48("4623"), 'delete_lesson');
export const EDIT_LESSON = stryMutAct_9fa48("4624") ? "" : (stryCov_9fa48("4624"), 'edit_lesson');
export const COPY_LESSON = stryMutAct_9fa48("4625") ? "" : (stryCov_9fa48("4625"), 'copy_lesson');
export const COPY_TO_SAME_GROUP_ERROR = stryMutAct_9fa48("4626") ? "" : (stryCov_9fa48("4626"), 'copy_to_same_group_error');
export const EMPTY_LABEL = stryMutAct_9fa48("4627") ? "" : (stryCov_9fa48("4627"), 'empty');
export const EMPTY_FIELDS = stryMutAct_9fa48("4628") ? "" : (stryCov_9fa48("4628"), 'empty_fields');
export const DIFFERENT_PASSWORDS = stryMutAct_9fa48("4629") ? "" : (stryCov_9fa48("4629"), 'different_passwords');
export const ACCOUNT_EXIST = stryMutAct_9fa48("4630") ? "" : (stryCov_9fa48("4630"), 'account_exist');
export const CREATE_ACCOUNT = stryMutAct_9fa48("4631") ? "" : (stryCov_9fa48("4631"), 'create_account');
export const VERIFYING_TOKEN = stryMutAct_9fa48("4632") ? "" : (stryCov_9fa48("4632"), 'verifying_token');
export const TOKEN_ERROR = stryMutAct_9fa48("4633") ? "" : (stryCov_9fa48("4633"), 'token_error');
export const COMMON_SCHEDULE_DIALOG_TITLE = stryMutAct_9fa48("4634") ? "" : (stryCov_9fa48("4634"), 'common:schedule_dialog_title');
export const CHOOSE_GROUP = stryMutAct_9fa48("4635") ? "" : (stryCov_9fa48("4635"), 'choose_group');
export const COMMON_CHOOSE_GROUP = stryMutAct_9fa48("4636") ? "" : (stryCov_9fa48("4636"), 'common:choose_group');
export const GREETING_SCHEDULE_MESSAGE = stryMutAct_9fa48("4637") ? "" : (stryCov_9fa48("4637"), 'greetings_schedule_message');
export const GREETING_SCHEDULE_MESSAGE_HINT = stryMutAct_9fa48("4638") ? "" : (stryCov_9fa48("4638"), 'greetings_schedule_message_hint');
export const FULL_SCHEDULE_LABEL = stryMutAct_9fa48("4639") ? "" : (stryCov_9fa48("4639"), 'full_schedule_label');
export const COMMON_ROOM_IS_UNAVAILABLE = stryMutAct_9fa48("4640") ? "" : (stryCov_9fa48("4640"), 'common:room_is_unavailable');
export const COMMON_AVAILABLE = stryMutAct_9fa48("4641") ? "" : (stryCov_9fa48("4641"), 'common:available');
export const COMMON_UNAVAILABLE = stryMutAct_9fa48("4642") ? "" : (stryCov_9fa48("4642"), 'common:unavailable');
export const COMMON_TEACHER_IS_UNAVAILABLE = stryMutAct_9fa48("4643") ? "" : (stryCov_9fa48("4643"), 'common:teacher_is_unavailable');
export const COMMON_CLASS_DOES_NOT_SUIT_FOR_TEACHER = stryMutAct_9fa48("4644") ? "" : (stryCov_9fa48("4644"), 'common:class_does_not_suit_for_teacher');
export const COMMON_YES_BUTTON_TITLE = stryMutAct_9fa48("4645") ? "" : (stryCov_9fa48("4645"), 'common:yes_button_title');
export const COMMON_ARE_YOU_SURE = stryMutAct_9fa48("4646") ? "" : (stryCov_9fa48("4646"), 'common:are_you_sure');
export const COMMON_CLOSE_TITLE = stryMutAct_9fa48("4647") ? "" : (stryCov_9fa48("4647"), 'common:close_title');
export const COMMON_UPLOAD_FROM_FILE_TITLE = stryMutAct_9fa48("4648") ? "" : (stryCov_9fa48("4648"), 'common:upload_from_file_title');
export const UPLOAD_FROM_FILE = stryMutAct_9fa48("4649") ? "" : (stryCov_9fa48("4649"), 'upload_from_file');
export const TYPE_LABEL = stryMutAct_9fa48("4650") ? "" : (stryCov_9fa48("4650"), 'type_label');
export const COMMON_MOVE_LABEL = stryMutAct_9fa48("4651") ? "" : (stryCov_9fa48("4651"), 'common:move_label');
export const MOVE_TO_GROUP_TITLE = stryMutAct_9fa48("4652") ? "" : (stryCov_9fa48("4652"), 'move_to_group_title');
export const COMMON_MOVE_TO_GROUP_TITLE = stryMutAct_9fa48("4653") ? "" : (stryCov_9fa48("4653"), 'common:move_to_group_title');
export const CANCEL_BUTTON_LABEL = stryMutAct_9fa48("4654") ? "" : (stryCov_9fa48("4654"), 'cancel_button_label');
export const HOLIDAY_LABEL = stryMutAct_9fa48("4655") ? "" : (stryCov_9fa48("4655"), 'holiday_label');
export const FEW_DAYS_LABEL = stryMutAct_9fa48("4656") ? "" : (stryCov_9fa48("4656"), 'few_days_label');
export const COMMON_SHOW_DISABLED = stryMutAct_9fa48("4657") ? "" : (stryCov_9fa48("4657"), 'common:show_disabled');
export const COMMON_SHOW_ENABLED = stryMutAct_9fa48("4658") ? "" : (stryCov_9fa48("4658"), 'common:show_enabled');
export const NO_CURRENT_SEMESTER = stryMutAct_9fa48("4659") ? "" : (stryCov_9fa48("4659"), 'no_current_semester');
export const NO_CURRENT_SEMESTER_ERROR = stryMutAct_9fa48("4660") ? "" : (stryCov_9fa48("4660"), 'common:no_current_semester_error');
export const USE_PC = stryMutAct_9fa48("4661") ? "" : (stryCov_9fa48("4661"), 'use_pc');
export const EMPTY_SCHEDULE = stryMutAct_9fa48("4662") ? "" : (stryCov_9fa48("4662"), 'empty_schedule');
export const MENU_BUTTON = stryMutAct_9fa48("4663") ? "" : (stryCov_9fa48("4663"), 'menu_button');
export const CLEAR_SCHEDULE_LABEL = stryMutAct_9fa48("4664") ? "" : (stryCov_9fa48("4664"), 'clear_schedule_label');
export const COPY_LESSONS_FROM_SEMESTER = stryMutAct_9fa48("4665") ? "" : (stryCov_9fa48("4665"), 'copy_lessons_from_semester_to_current');
export const FOR_ALL = stryMutAct_9fa48("4666") ? "" : (stryCov_9fa48("4666"), 'for_all');
export const DATE_LABEL = stryMutAct_9fa48("4667") ? "" : (stryCov_9fa48("4667"), 'date');
export const ONE_DAY_LABEL = stryMutAct_9fa48("4668") ? "" : (stryCov_9fa48("4668"), 'one_day');
export const TEACHER_SCHEDULE_LABEL = stryMutAct_9fa48("4669") ? "" : (stryCov_9fa48("4669"), 'teacher_schedule_label');
export const BROKEN_TOKEN = stryMutAct_9fa48("4670") ? "" : (stryCov_9fa48("4670"), 'broken_token');
export const SUCCESSFUL_RESET_PASSWORD_MESSAGE = stryMutAct_9fa48("4671") ? "" : (stryCov_9fa48("4671"), 'successful_reset_password_message');
export const PLACE_FOR_CLASS_LABEL = stryMutAct_9fa48("4672") ? "" : (stryCov_9fa48("4672"), 'place_for_class_label');
export const COMMON_DO_YOU_WANNA = stryMutAct_9fa48("4673") ? "" : (stryCov_9fa48("4673"), 'common:do_you_wanna');
export const COMMON_DO_YOU_WANNA_DISABLE = stryMutAct_9fa48("4674") ? "" : (stryCov_9fa48("4674"), 'common:do_you_wanna_disable');
export const COMMON_DELETE_WORD = stryMutAct_9fa48("4675") ? "" : (stryCov_9fa48("4675"), 'common:delete_word');
export const COMMON_DO_YOU_WANNA_SHOW = stryMutAct_9fa48("4676") ? "" : (stryCov_9fa48("4676"), 'common:do_you_wanna_show');
export const COMMON_BY_THIS_CARD_TYPE = stryMutAct_9fa48("4677") ? "" : (stryCov_9fa48("4677"), 'common:by_this_card_type');
export const COMMON_THIS_CARD_TYPE = stryMutAct_9fa48("4678") ? "" : (stryCov_9fa48("4678"), 'common:this_card_type');
export const COMMON_GO_TO_MEETING_WORD = stryMutAct_9fa48("4679") ? "" : (stryCov_9fa48("4679"), 'common:go_to_meeting_word');
export const COMMON_SET_DEFAULT_WORD = stryMutAct_9fa48("4680") ? "" : (stryCov_9fa48("4680"), 'common:set_default_word');
export const COMMON_MORE_LABEL = stryMutAct_9fa48("4681") ? "" : (stryCov_9fa48("4681"), 'common:more_label');
export const TEACHER_LIST_TITLE = stryMutAct_9fa48("4682") ? "" : (stryCov_9fa48("4682"), 'TeacherList_management_title');
export const GROUP_LIST_TITLE = stryMutAct_9fa48("4683") ? "" : (stryCov_9fa48("4683"), 'GroupList_management_title');
export const CLASS_SCHEDULE_TITLE = stryMutAct_9fa48("4684") ? "" : (stryCov_9fa48("4684"), 'ClassScheduleTitle_management_title');
export const ROOM_LIST_TITLE = stryMutAct_9fa48("4685") ? "" : (stryCov_9fa48("4685"), 'RoomList_management_title');
export const SUBJECT_PAGE_TITLE = stryMutAct_9fa48("4686") ? "" : (stryCov_9fa48("4686"), 'SubjectPage_management_title');
export const SEMESTER_PAGE_TITLE = stryMutAct_9fa48("4687") ? "" : (stryCov_9fa48("4687"), 'SemesterPage_management_title');
export const DEPARTMENTS_TITLE = stryMutAct_9fa48("4688") ? "" : (stryCov_9fa48("4688"), 'Departments_management_title');
export const LESSON_PAGE_TITLE = stryMutAct_9fa48("4689") ? "" : (stryCov_9fa48("4689"), 'LessonPage_management_title');
export const MERGE_ROLE_PAGE_TITLE = stryMutAct_9fa48("4690") ? "" : (stryCov_9fa48("4690"), 'MergeRolePage_management_title');
export const CHANGES_TITLE = stryMutAct_9fa48("4691") ? "" : (stryCov_9fa48("4691"), 'Changes_management_title');
export const BUSY_ROOMS_TITLE = stryMutAct_9fa48("4692") ? "" : (stryCov_9fa48("4692"), 'BusyRooms_management_title');
export const GENERAL_TITLE = stryMutAct_9fa48("4693") ? "" : (stryCov_9fa48("4693"), 'General_management_title');
export const SELECT_FILE = stryMutAct_9fa48("4694") ? "" : (stryCov_9fa48("4694"), 'common:select_file');
export const SELECT_CORRECT_FORMAT = stryMutAct_9fa48("4695") ? "" : (stryCov_9fa48("4695"), 'common:select_correct_format');
export const FILE_RULES_FOR_EACH_LNE = stryMutAct_9fa48("4696") ? "" : (stryCov_9fa48("4696"), 'common:file_rules_for_each_line');
export const FILE_RULES_FOR_HEADER = stryMutAct_9fa48("4697") ? "" : (stryCov_9fa48("4697"), 'common:file_rules_for_header');
export const EXAMPLE_FILE = stryMutAct_9fa48("4698") ? "" : (stryCov_9fa48("4698"), 'common:example_file');
export const COMMON_TABLE_COLUMNS_SIZE = stryMutAct_9fa48("4699") ? "" : (stryCov_9fa48("4699"), 'table_columns_size');
export const COMMON_TABLE_COLUMNS_SIZE_SMALL = stryMutAct_9fa48("4700") ? "" : (stryCov_9fa48("4700"), 'columns_size_small');
export const COMMON_TABLE_COLUMNS_SIZE_BASE = stryMutAct_9fa48("4701") ? "" : (stryCov_9fa48("4701"), 'columns_size_base');
export const COMMON_TABLE_COLUMNS_SIZE_LARGE = stryMutAct_9fa48("4702") ? "" : (stryCov_9fa48("4702"), 'columns_size_large');
export const COMMON_SEARCH_FREE_ROOMS_TITLE = stryMutAct_9fa48("4703") ? "" : (stryCov_9fa48("4703"), 'common:search_params');
export const COMMON_FREE_ROOMS_LIST_EMPTY = stryMutAct_9fa48("4704") ? "" : (stryCov_9fa48("4704"), 'common:free_rooms_list_empty');
export const TEACHER_LESSONS_TITLE = stryMutAct_9fa48("4705") ? "" : (stryCov_9fa48("4705"), 'teacher_lessons_title');
export const COMMON_ACTIONS_LABEL = stryMutAct_9fa48("4706") ? "" : (stryCov_9fa48("4706"), 'common:actions_label');
export const CLEAR_CACHE_TITLE = stryMutAct_9fa48("4707") ? "" : (stryCov_9fa48("4707"), 'clear_cache_title');
export const CLEAR_CACHE_CONFIRM = stryMutAct_9fa48("4708") ? "" : (stryCov_9fa48("4708"), 'clear_cache_confirm');
export const CLEAR_CACHE_SUCCESS = stryMutAct_9fa48("4709") ? "" : (stryCov_9fa48("4709"), 'clear_cache_success');
export const CLEAR_CACHE_ERROR = stryMutAct_9fa48("4710") ? "" : (stryCov_9fa48("4710"), 'clear_cache_error');
export const CLEAR_CACHE_BUTTON = stryMutAct_9fa48("4711") ? "" : (stryCov_9fa48("4711"), 'clear_cache');
export const CLEARING_CACHE = stryMutAct_9fa48("4712") ? "" : (stryCov_9fa48("4712"), 'clearing_cache');