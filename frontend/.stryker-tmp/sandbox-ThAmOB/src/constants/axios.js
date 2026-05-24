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
export const CLASS_URL = stryMutAct_9fa48("4250") ? "" : (stryCov_9fa48("4250"), 'classes');
export const GROUP_URL = stryMutAct_9fa48("4251") ? "" : (stryCov_9fa48("4251"), 'groups');
export const LESSON_URL = stryMutAct_9fa48("4252") ? "" : (stryCov_9fa48("4252"), 'lessons');
export const LESSON_TYPES_URL = stryMutAct_9fa48("4253") ? "" : (stryCov_9fa48("4253"), 'lessons/types');
export const LOGIN_URL = stryMutAct_9fa48("4254") ? "" : (stryCov_9fa48("4254"), 'auth/sign-in');
export const GOOGLE_LOGIN_URL = stryMutAct_9fa48("4255") ? "" : (stryCov_9fa48("4255"), 'auth/google');
export const LOGOUT_URL = stryMutAct_9fa48("4256") ? "" : (stryCov_9fa48("4256"), 'auth/sign-out');
export const REGISTRATION_URL = stryMutAct_9fa48("4257") ? "" : (stryCov_9fa48("4257"), 'auth/sign-up');
export const RESET_PASSWORD_URL = stryMutAct_9fa48("4258") ? "" : (stryCov_9fa48("4258"), 'auth/reset-password');
export const ACTIVATE_ACCOUNT_URL = stryMutAct_9fa48("4259") ? "" : (stryCov_9fa48("4259"), 'auth/activation-account');
export const TEACHER_URL = stryMutAct_9fa48("4260") ? "" : (stryCov_9fa48("4260"), 'teachers');
export const ROOM_AFTER_URL = stryMutAct_9fa48("4261") ? "" : (stryCov_9fa48("4261"), 'rooms/after');
export const ROOM_ORDERED_URL = stryMutAct_9fa48("4262") ? "" : (stryCov_9fa48("4262"), 'rooms/ordered');
export const ROOM_URL = stryMutAct_9fa48("4263") ? "" : (stryCov_9fa48("4263"), 'rooms');
export const ROOM_TYPES_URL = stryMutAct_9fa48("4264") ? "" : (stryCov_9fa48("4264"), 'room-types');
export const FREE_ROOMS_URL = stryMutAct_9fa48("4265") ? "" : (stryCov_9fa48("4265"), 'rooms/free');
export const SUBJECT_URL = stryMutAct_9fa48("4266") ? "" : (stryCov_9fa48("4266"), 'subjects');
export const STUDENT_URL = stryMutAct_9fa48("4267") ? "" : (stryCov_9fa48("4267"), 'students');
export const MOVE_STUDENTS_URL = stryMutAct_9fa48("4268") ? "" : (stryCov_9fa48("4268"), 'students/move-to-group');
export const FULL_SCHEDULE_URL = stryMutAct_9fa48("4269") ? "" : (stryCov_9fa48("4269"), 'schedules/full/semester?semesterId=');
export const GROUP_SCHEDULE_URL = stryMutAct_9fa48("4270") ? "" : (stryCov_9fa48("4270"), 'schedules/full/groups?semesterId=');
export const SCHEDULE_SEMESTER_ITEMS_URL = stryMutAct_9fa48("4271") ? "" : (stryCov_9fa48("4271"), 'schedules/semester');
export const SCHEDULE_ITEMS_URL = stryMutAct_9fa48("4272") ? "" : (stryCov_9fa48("4272"), 'schedules');
export const CURRENT_SEMESTER_URL = stryMutAct_9fa48("4273") ? "" : (stryCov_9fa48("4273"), 'semesters/current');
export const DEFAULT_SEMESTER_URL = stryMutAct_9fa48("4274") ? "" : (stryCov_9fa48("4274"), 'semesters/default');
export const SEND_PDF_TO_EMAIL = stryMutAct_9fa48("4275") ? "" : (stryCov_9fa48("4275"), 'send-pdf-to-email');
export const TEMPORARY_SCHEDULE_URL = stryMutAct_9fa48("4276") ? "" : (stryCov_9fa48("4276"), 'temporary-schedules');
export const TEMPORARY_SCHEDULE_RANGE_URL = stryMutAct_9fa48("4277") ? "" : (stryCov_9fa48("4277"), 'temporary-schedules/add-range');
export const TEACHER_TEMPORARY_SCHEDULE = stryMutAct_9fa48("4278") ? "" : (stryCov_9fa48("4278"), 'schedules/full/teachers/date-range');
export const WITH_STUDENTS = stryMutAct_9fa48("4279") ? "" : (stryCov_9fa48("4279"), '/with-students');
export const STUDENTS_TO_GROUP_FILE = stryMutAct_9fa48("4280") ? "" : (stryCov_9fa48("4280"), 'students/import?groupId=');
export const SCHEDULE_CHECK_AVAILABILITY_URL = stryMutAct_9fa48("4281") ? "" : (stryCov_9fa48("4281"), 'schedules/data-before');
export const BUSY_ROOMS = stryMutAct_9fa48("4282") ? "" : (stryCov_9fa48("4282"), 'schedules/full/rooms');
export const ROOMS_AVAILABILITY = stryMutAct_9fa48("4283") ? "" : (stryCov_9fa48("4283"), 'rooms/available');
export const SEMESTERS_URL = stryMutAct_9fa48("4284") ? "" : (stryCov_9fa48("4284"), 'semesters');
export const GROUPS_URL = stryMutAct_9fa48("4285") ? "" : (stryCov_9fa48("4285"), 'groups');
export const GROUPS_AFTER_URL = stryMutAct_9fa48("4286") ? "" : (stryCov_9fa48("4286"), '/groups/after');
export const TEACHER_SCHEDULE_URL = stryMutAct_9fa48("4287") ? "" : (stryCov_9fa48("4287"), 'schedules/full/teachers?semesterId=');
export const DISABLED_ROOMS_URL = stryMutAct_9fa48("4288") ? "" : (stryCov_9fa48("4288"), 'rooms/disabled');
export const DISABLED_TEACHERS_URL = stryMutAct_9fa48("4289") ? "" : (stryCov_9fa48("4289"), 'teachers/disabled');
export const DISABLED_GROUPS_URL = stryMutAct_9fa48("4290") ? "" : (stryCov_9fa48("4290"), 'groups/disabled');
export const DISABLED_SEMESTERS_URL = stryMutAct_9fa48("4291") ? "" : (stryCov_9fa48("4291"), 'semesters/disabled');
export const DISABLED_SUBJECTS_URL = stryMutAct_9fa48("4292") ? "" : (stryCov_9fa48("4292"), 'subjects/disabled');
export const USERS_URL = stryMutAct_9fa48("4293") ? "" : (stryCov_9fa48("4293"), 'users/with-role-user');
export const USER_PROFILE = stryMutAct_9fa48("4294") ? "" : (stryCov_9fa48("4294"), 'users/profile');
export const UPDATE_USER_PROFILE = stryMutAct_9fa48("4295") ? "" : (stryCov_9fa48("4295"), 'users/change-profile');
export const TEACHERS_WITHOUT_ACCOUNT_URL = stryMutAct_9fa48("4296") ? "" : (stryCov_9fa48("4296"), 'not-registered-teachers');
export const MERGE_USER_AND_TEACHER_URL = stryMutAct_9fa48("4297") ? "" : (stryCov_9fa48("4297"), 'managers/teacher_credentials');
export const PUBLIC_CLASSES_URL = stryMutAct_9fa48("4298") ? "" : (stryCov_9fa48("4298"), 'public/classes');
export const PUBLIC_GROUP_URL = stryMutAct_9fa48("4299") ? "" : (stryCov_9fa48("4299"), 'public/groups');
export const PUBLIC_TEACHER_URL = stryMutAct_9fa48("4300") ? "" : (stryCov_9fa48("4300"), 'public/teachers');
export const PUBLIC_SEMESTERS_URL = stryMutAct_9fa48("4301") ? "" : (stryCov_9fa48("4301"), 'public/semesters');
export const PUBLIC_DOWNLOAD_GROUP_SCHEDULE_URL = stryMutAct_9fa48("4302") ? "" : (stryCov_9fa48("4302"), 'download/schedule-for-group-in-pdf');
export const PUBLIC_DOWNLOAD_TEACHER_SCHEDULE_URL = stryMutAct_9fa48("4303") ? "" : (stryCov_9fa48("4303"), 'download/schedule-for-teacher-in-pdf');
export const FOR_TEACHER_SCHEDULE_URL = stryMutAct_9fa48("4304") ? "" : (stryCov_9fa48("4304"), 'schedules/teacher');
export const SEMESTER_COPY_URL = stryMutAct_9fa48("4305") ? "" : (stryCov_9fa48("4305"), '/schedules/copy-schedule');
export const CLEAR_SCHEDULE_URL = stryMutAct_9fa48("4306") ? "" : (stryCov_9fa48("4306"), '/schedules/delete-schedules');
export const TEACHER_SCHEDULE_BY_DATE_RANGE_URL = stryMutAct_9fa48("4307") ? "" : (stryCov_9fa48("4307"), 'schedules/full/teachers/date-range');
export const COPY_LESSON_URL = stryMutAct_9fa48("4308") ? "" : (stryCov_9fa48("4308"), '/lessons/copy-lesson-for-groups');
export const LESSONS_FROM_SEMESTER_COPY_URL = stryMutAct_9fa48("4309") ? "" : (stryCov_9fa48("4309"), '/lessons/copy-lessons');
export const SCHEDULE_ITEM_ROOM_CHANGE = stryMutAct_9fa48("4310") ? "" : (stryCov_9fa48("4310"), '/schedules/by-room');
export const ARCHIVE_SEMESTER = stryMutAct_9fa48("4311") ? "" : (stryCov_9fa48("4311"), '/archive');
export const ARCHIVED_SEMESTERS_URL = stryMutAct_9fa48("4312") ? "" : (stryCov_9fa48("4312"), '/archive/all-semesters');
export const DEPARTMENT_URL = stryMutAct_9fa48("4313") ? "" : (stryCov_9fa48("4313"), '/departments');
export const LESSON_BY_TEACHER_URL = stryMutAct_9fa48("4314") ? "" : (stryCov_9fa48("4314"), '/lessons/teacher');