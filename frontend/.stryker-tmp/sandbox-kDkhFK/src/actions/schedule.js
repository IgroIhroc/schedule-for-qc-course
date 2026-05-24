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
import * as actionTypes from './actionsType';
export const getScheduleItemsStart = semesterId => {
  if (stryMutAct_9fa48("449")) {
    {}
  } else {
    stryCov_9fa48("449");
    return stryMutAct_9fa48("450") ? {} : (stryCov_9fa48("450"), {
      type: actionTypes.GET_SCHEDULE_ITEMS_START,
      semesterId
    });
  }
};
export const getScheduleItemsSuccess = items => {
  if (stryMutAct_9fa48("451")) {
    {}
  } else {
    stryCov_9fa48("451");
    return stryMutAct_9fa48("452") ? {} : (stryCov_9fa48("452"), {
      type: actionTypes.GET_SCHEDULE_ITEMS_SUCCESS,
      items
    });
  }
};
export const getCurrentSemesterSuccess = semester => {
  if (stryMutAct_9fa48("453")) {
    {}
  } else {
    stryCov_9fa48("453");
    return stryMutAct_9fa48("454") ? {} : (stryCov_9fa48("454"), {
      type: actionTypes.GET_CURRENT_SEMESTER_SUCCESS,
      semester
    });
  }
};
export const getAllPublicSemestersStart = () => {
  if (stryMutAct_9fa48("455")) {
    {}
  } else {
    stryCov_9fa48("455");
    return stryMutAct_9fa48("456") ? {} : (stryCov_9fa48("456"), {
      type: actionTypes.GET_ALL_PUBLIC_SEMESTERS_START
    });
  }
};
export const getAllPublicSemestersSuccess = semesters => {
  if (stryMutAct_9fa48("457")) {
    {}
  } else {
    stryCov_9fa48("457");
    return stryMutAct_9fa48("458") ? {} : (stryCov_9fa48("458"), {
      type: actionTypes.GET_ALL_PUBLIC_SEMESTERS_SUCCESS,
      semesters
    });
  }
};
export const getAllScheduleItemsStart = () => {
  if (stryMutAct_9fa48("459")) {
    {}
  } else {
    stryCov_9fa48("459");
    return stryMutAct_9fa48("460") ? {} : (stryCov_9fa48("460"), {
      type: actionTypes.GET_ALL_SCHEDULE_ITEMS_START
    });
  }
};
export const addItemsToScheduleStart = item => {
  if (stryMutAct_9fa48("461")) {
    {}
  } else {
    stryCov_9fa48("461");
    return stryMutAct_9fa48("462") ? {} : (stryCov_9fa48("462"), {
      type: actionTypes.ADD_ITEM_TO_SCHEDULE_START,
      item
    });
  }
};
export const editRoomItemToScheduleStart = item => {
  if (stryMutAct_9fa48("463")) {
    {}
  } else {
    stryCov_9fa48("463");
    return stryMutAct_9fa48("464") ? {} : (stryCov_9fa48("464"), {
      type: actionTypes.EDIT_ITEM_TO_SCHEDULE_START,
      item
    });
  }
};
export const deleteScheduleItemStart = itemId => {
  if (stryMutAct_9fa48("465")) {
    {}
  } else {
    stryCov_9fa48("465");
    return stryMutAct_9fa48("466") ? {} : (stryCov_9fa48("466"), {
      type: actionTypes.DELETE_SCHEDULE_ITEM_START,
      itemId
    });
  }
};
export const deleteScheduleItemSuccess = itemId => {
  if (stryMutAct_9fa48("467")) {
    {}
  } else {
    stryCov_9fa48("467");
    return stryMutAct_9fa48("468") ? {} : (stryCov_9fa48("468"), {
      type: actionTypes.DELETE_SCHEDULE_ITEM_SUCCESS,
      itemId
    });
  }
};
export const clearScheduleStart = semesterId => {
  if (stryMutAct_9fa48("469")) {
    {}
  } else {
    stryCov_9fa48("469");
    return stryMutAct_9fa48("470") ? {} : (stryCov_9fa48("470"), {
      type: actionTypes.CLEAR_SCHEDULE_START,
      semesterId
    });
  }
};
export const sendTeacherScheduleStart = data => {
  if (stryMutAct_9fa48("471")) {
    {}
  } else {
    stryCov_9fa48("471");
    return stryMutAct_9fa48("472") ? {} : (stryCov_9fa48("472"), {
      type: actionTypes.SEND_TEACHER_SCHEDULE_START,
      data
    });
  }
};
export const getTeacherRangeScheduleStart = values => {
  if (stryMutAct_9fa48("473")) {
    {}
  } else {
    stryCov_9fa48("473");
    return stryMutAct_9fa48("474") ? {} : (stryCov_9fa48("474"), {
      type: actionTypes.GET_TEACHER_RANGE_SCHEDULE_START,
      values
    });
  }
};
export const getTeacherRangeScheduleSuccess = schedule => {
  if (stryMutAct_9fa48("475")) {
    {}
  } else {
    stryCov_9fa48("475");
    return stryMutAct_9fa48("476") ? {} : (stryCov_9fa48("476"), {
      type: actionTypes.GET_TEACHER_RANGE_SCHEDULE_SUCCESS,
      schedule
    });
  }
};
export const getCurrentSemesterRequsted = () => {
  if (stryMutAct_9fa48("477")) {
    {}
  } else {
    stryCov_9fa48("477");
    return stryMutAct_9fa48("478") ? {} : (stryCov_9fa48("478"), {
      type: actionTypes.GET_CURRENT_SEMESTER_START
    });
  }
};
export const getDefaultSemesterRequsted = () => {
  if (stryMutAct_9fa48("479")) {
    {}
  } else {
    stryCov_9fa48("479");
    return stryMutAct_9fa48("480") ? {} : (stryCov_9fa48("480"), {
      type: actionTypes.GET_DEFAULT_SEMESTER_START
    });
  }
};
export const getDefaultSemesterSuccess = semester => {
  if (stryMutAct_9fa48("481")) {
    {}
  } else {
    stryCov_9fa48("481");
    return stryMutAct_9fa48("482") ? {} : (stryCov_9fa48("482"), {
      type: actionTypes.GET_DEFAULT_SEMESTER_SUCCESS,
      semester
    });
  }
};
export const addItemToSchedule = payload => {
  if (stryMutAct_9fa48("483")) {
    {}
  } else {
    stryCov_9fa48("483");
    return stryMutAct_9fa48("484") ? {} : (stryCov_9fa48("484"), {
      type: actionTypes.ADD_ITEM_TO_SCHEDULE,
      payload
    });
  }
};
export const checkAvailabilityScheduleStart = item => {
  if (stryMutAct_9fa48("485")) {
    {}
  } else {
    stryCov_9fa48("485");
    return stryMutAct_9fa48("486") ? {} : (stryCov_9fa48("486"), {
      type: actionTypes.CHECK_AVAILABILITY_SCHEDULE_START,
      item
    });
  }
};
export const checkAvailabilityScheduleSuccess = payload => {
  if (stryMutAct_9fa48("487")) {
    {}
  } else {
    stryCov_9fa48("487");
    return stryMutAct_9fa48("488") ? {} : (stryCov_9fa48("488"), {
      type: actionTypes.CHECK_AVAILABILITY_CHANGE_ROOM_SCHEDULE_SUCCESS,
      payload
    });
  }
};
export const checkAvailabilityChangeRoomScheduleStart = item => {
  if (stryMutAct_9fa48("489")) {
    {}
  } else {
    stryCov_9fa48("489");
    return stryMutAct_9fa48("490") ? {} : (stryCov_9fa48("490"), {
      type: actionTypes.CHECK_AVAILABILITY_CHANGE_ROOM_SCHEDULE_START,
      item
    });
  }
};
export const getFullScheduleStart = semesterId => {
  if (stryMutAct_9fa48("491")) {
    {}
  } else {
    stryCov_9fa48("491");
    return stryMutAct_9fa48("492") ? {} : (stryCov_9fa48("492"), {
      type: actionTypes.GET_FULL_SCHEDULE_START,
      semesterId
    });
  }
};
export const getFullScheduleSuccess = schedule => {
  if (stryMutAct_9fa48("493")) {
    {}
  } else {
    stryCov_9fa48("493");
    return stryMutAct_9fa48("494") ? {} : (stryCov_9fa48("494"), {
      type: actionTypes.GET_FULL_SCHEDULE_SUCCESS,
      schedule
    });
  }
};
export const setItemGroupId = payload => {
  if (stryMutAct_9fa48("495")) {
    {}
  } else {
    stryCov_9fa48("495");
    return stryMutAct_9fa48("496") ? {} : (stryCov_9fa48("496"), {
      type: actionTypes.SET_ITEM_GROUP_ID,
      payload
    });
  }
};
export const getGroupScheduleStart = (groupId, semesterId) => {
  if (stryMutAct_9fa48("497")) {
    {}
  } else {
    stryCov_9fa48("497");
    return stryMutAct_9fa48("498") ? {} : (stryCov_9fa48("498"), {
      type: actionTypes.GET_GROUP_SCHEDULE_START,
      groupId,
      semesterId
    });
  }
};
export const getGroupScheduleSuccess = schedule => {
  if (stryMutAct_9fa48("499")) {
    {}
  } else {
    stryCov_9fa48("499");
    return stryMutAct_9fa48("500") ? {} : (stryCov_9fa48("500"), {
      type: actionTypes.GET_GROUP_SCHEDULE_SUCCESS,
      schedule
    });
  }
};
export const getTeacherScheduleStart = (teacherId, semesterId) => {
  if (stryMutAct_9fa48("501")) {
    {}
  } else {
    stryCov_9fa48("501");
    return stryMutAct_9fa48("502") ? {} : (stryCov_9fa48("502"), {
      type: actionTypes.GET_TEACHER_SCHEDULE_START,
      teacherId,
      semesterId
    });
  }
};
export const getTeacherScheduleSuccess = schedule => {
  if (stryMutAct_9fa48("503")) {
    {}
  } else {
    stryCov_9fa48("503");
    return stryMutAct_9fa48("504") ? {} : (stryCov_9fa48("504"), {
      type: actionTypes.GET_TEACHER_SCHEDULE_SUCCESS,
      schedule
    });
  }
};
export const setScheduleType = newType => {
  if (stryMutAct_9fa48("505")) {
    {}
  } else {
    stryCov_9fa48("505");
    return stryMutAct_9fa48("506") ? {} : (stryCov_9fa48("506"), {
      type: actionTypes.SET_SCHEDULE_TYPE,
      newType
    });
  }
};
export const setScheduleGroup = group => {
  if (stryMutAct_9fa48("507")) {
    {}
  } else {
    stryCov_9fa48("507");
    return stryMutAct_9fa48("508") ? {} : (stryCov_9fa48("508"), {
      type: actionTypes.SET_SCHEDULE_GROUP,
      group
    });
  }
};
export const setScheduleTeacher = teacher => {
  if (stryMutAct_9fa48("509")) {
    {}
  } else {
    stryCov_9fa48("509");
    return stryMutAct_9fa48("510") ? {} : (stryCov_9fa48("510"), {
      type: actionTypes.SET_SCHEDULE_TEACHER,
      teacher
    });
  }
};
export const setScheduleSemester = semester => {
  if (stryMutAct_9fa48("511")) {
    {}
  } else {
    stryCov_9fa48("511");
    return stryMutAct_9fa48("512") ? {} : (stryCov_9fa48("512"), {
      type: actionTypes.SET_SCHEDULE_SEMESTER,
      semester
    });
  }
};
export const setTeacherViewType = payload => {
  if (stryMutAct_9fa48("513")) {
    {}
  } else {
    stryCov_9fa48("513");
    return stryMutAct_9fa48("514") ? {} : (stryCov_9fa48("514"), {
      type: actionTypes.SET_TEACHER_VIEW_TYPE,
      payload
    });
  }
};
export const setPlace = place => {
  if (stryMutAct_9fa48("515")) {
    {}
  } else {
    stryCov_9fa48("515");
    return stryMutAct_9fa48("516") ? {} : (stryCov_9fa48("516"), {
      type: actionTypes.SET_PLACE,
      place
    });
  }
};
export const selectGroupSchedule = (semesterId, groupId) => {
  if (stryMutAct_9fa48("517")) {
    {}
  } else {
    stryCov_9fa48("517");
    return stryMutAct_9fa48("518") ? {} : (stryCov_9fa48("518"), {
      type: actionTypes.SELECT_GROUP_SCHEDULE_START,
      semesterId,
      groupId
    });
  }
};
export const selectTeacherSchedule = (semesterId, teacherId) => {
  if (stryMutAct_9fa48("519")) {
    {}
  } else {
    stryCov_9fa48("519");
    return stryMutAct_9fa48("520") ? {} : (stryCov_9fa48("520"), {
      type: actionTypes.SELECT_TEACHER_SCHEDULE_START,
      semesterId,
      teacherId
    });
  }
};
export const selectFullSchedule = semesterId => {
  if (stryMutAct_9fa48("521")) {
    {}
  } else {
    stryCov_9fa48("521");
    return stryMutAct_9fa48("522") ? {} : (stryCov_9fa48("522"), {
      type: actionTypes.SELECT_FULL_SCHEDULE_START,
      semesterId
    });
  }
};
export const setScheduleNotPublished = stryMutAct_9fa48("523") ? () => undefined : (stryCov_9fa48("523"), (() => {
  const setScheduleNotPublished = message => stryMutAct_9fa48("524") ? {} : (stryCov_9fa48("524"), {
    type: actionTypes.SCHEDULE_NOT_PUBLISHED,
    payload: message
  });
  return setScheduleNotPublished;
})());
export const selectDepartmentSchedule = (semesterId, departmentId) => {
  if (stryMutAct_9fa48("525")) {
    {}
  } else {
    stryCov_9fa48("525");
    return stryMutAct_9fa48("526") ? {} : (stryCov_9fa48("526"), {
      type: actionTypes.SELECT_DEPARTMENT_SCHEDULE_START,
      semesterId,
      departmentId
    });
  }
};
export const setScheduleDepartment = department => {
  if (stryMutAct_9fa48("527")) {
    {}
  } else {
    stryCov_9fa48("527");
    return stryMutAct_9fa48("528") ? {} : (stryCov_9fa48("528"), {
      type: actionTypes.SET_SCHEDULE_DEPARTMENT,
      department
    });
  }
};