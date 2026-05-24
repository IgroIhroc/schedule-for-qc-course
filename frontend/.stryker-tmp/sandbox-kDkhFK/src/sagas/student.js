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
import { reset } from 'redux-form';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { omit } from 'lodash';
import * as actionTypes from '../actions/actionsType';
import { setLoading, setStudentsLoading } from '../actions/loadingIndicator';
import { setOpenErrorSnackbar, setOpenSuccessSnackbar } from '../actions/snackbar';
import { deleteAllStudentSuccess, deleteStudentSuccess, selectStudentSuccess, showAllStudents, updateStudentSuccess } from '../actions/students';
import { GROUP_URL, MOVE_STUDENTS_URL, STUDENT_URL, STUDENTS_TO_GROUP_FILE, WITH_STUDENTS } from '../constants/axios';
import { DELETE, POST, PUT } from '../constants/methods';
import { STUDENT } from '../constants/names';
import { STUDENT_FORM } from '../constants/reduxForms';
import { FORM_STUDENTS_FILE_LABEL, STUDENTS_UPPERCASE } from '../constants/translationLabels/formElements';
import { BACK_END_SUCCESS_OPERATION, CREATED_LABEL, DELETED_LABEL, FILE_BACK_END_SUCCESS_OPERATION, FILE_LABEL, MOVED_TO_GROUP_LABEL, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { axiosCall } from '../services/axios';
import { createDynamicMessage, createErrorMessage, createMessage } from '../utils/sagaUtils';
const getStudents = stryMutAct_9fa48("7913") ? () => undefined : (stryCov_9fa48("7913"), (() => {
  const getStudents = state => state.students.students;
  return getStudents;
})());
function* getAllStudents({
  id
}) {
  if (stryMutAct_9fa48("7914")) {
    {}
  } else {
    stryCov_9fa48("7914");
    try {
      if (stryMutAct_9fa48("7915")) {
        {}
      } else {
        stryCov_9fa48("7915");
        yield put(showAllStudents(stryMutAct_9fa48("7916") ? ["Stryker was here"] : (stryCov_9fa48("7916"), [])));
        yield put(setStudentsLoading(stryMutAct_9fa48("7917") ? false : (stryCov_9fa48("7917"), true)));
        const requestUrl = stryMutAct_9fa48("7918") ? `` : (stryCov_9fa48("7918"), `${GROUP_URL}/${id}${WITH_STUDENTS}`);
        const res = yield call(axiosCall, requestUrl);
        yield put(showAllStudents(res.data.students));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7919")) {
        {}
      } else {
        stryCov_9fa48("7919");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    } finally {
      if (stryMutAct_9fa48("7920")) {
        {}
      } else {
        stryCov_9fa48("7920");
        yield put(setStudentsLoading(stryMutAct_9fa48("7921") ? true : (stryCov_9fa48("7921"), false)));
      }
    }
  }
}
function* createStudent({
  data
}) {
  if (stryMutAct_9fa48("7922")) {
    {}
  } else {
    stryCov_9fa48("7922");
    try {
      if (stryMutAct_9fa48("7923")) {
        {}
      } else {
        stryCov_9fa48("7923");
        yield call(axiosCall, STUDENT_URL, POST, data);
        yield put(reset(STUDENT_FORM));
        const message = createDynamicMessage(STUDENT, CREATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7924")) {
        {}
      } else {
        stryCov_9fa48("7924");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    }
  }
}
function* updateStudent({
  data,
  groupId
}) {
  if (stryMutAct_9fa48("7925")) {
    {}
  } else {
    stryCov_9fa48("7925");
    try {
      if (stryMutAct_9fa48("7926")) {
        {}
      } else {
        stryCov_9fa48("7926");
        const res = yield call(axiosCall, STUDENT_URL, PUT, data);
        if (stryMutAct_9fa48("7929") ? data.group.id !== +groupId : stryMutAct_9fa48("7928") ? false : stryMutAct_9fa48("7927") ? true : (stryCov_9fa48("7927", "7928", "7929"), data.group.id === (stryMutAct_9fa48("7930") ? -groupId : (stryCov_9fa48("7930"), +groupId)))) {
          if (stryMutAct_9fa48("7931")) {
            {}
          } else {
            stryCov_9fa48("7931");
            yield put(updateStudentSuccess(res.data));
          }
        } else {
          if (stryMutAct_9fa48("7932")) {
            {}
          } else {
            stryCov_9fa48("7932");
            yield put(deleteStudentSuccess(data.id));
          }
        }
        yield put(selectStudentSuccess(data.id));
        yield put(reset(STUDENT_FORM));
        const message = createDynamicMessage(STUDENT, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7933")) {
        {}
      } else {
        stryCov_9fa48("7933");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    }
  }
}
function* submitStudentForm({
  data,
  groupId
}) {
  if (stryMutAct_9fa48("7934")) {
    {}
  } else {
    stryCov_9fa48("7934");
    try {
      if (stryMutAct_9fa48("7935")) {
        {}
      } else {
        stryCov_9fa48("7935");
        if (stryMutAct_9fa48("7938") ? false : stryMutAct_9fa48("7937") ? true : stryMutAct_9fa48("7936") ? data.id : (stryCov_9fa48("7936", "7937", "7938"), !data.id)) {
          if (stryMutAct_9fa48("7939")) {
            {}
          } else {
            stryCov_9fa48("7939");
            const newStudent = stryMutAct_9fa48("7940") ? {} : (stryCov_9fa48("7940"), {
              ...data,
              group: stryMutAct_9fa48("7941") ? {} : (stryCov_9fa48("7941"), {
                id: groupId
              })
            });
            yield call(createStudent, stryMutAct_9fa48("7942") ? {} : (stryCov_9fa48("7942"), {
              data: newStudent
            }));
          }
        } else {
          if (stryMutAct_9fa48("7943")) {
            {}
          } else {
            stryCov_9fa48("7943");
            const updatedStudent = stryMutAct_9fa48("7944") ? {} : (stryCov_9fa48("7944"), {
              ...data,
              group: stryMutAct_9fa48("7945") ? {} : (stryCov_9fa48("7945"), {
                id: data.group
              })
            });
            yield call(updateStudent, stryMutAct_9fa48("7946") ? {} : (stryCov_9fa48("7946"), {
              data: updatedStudent,
              groupId
            }));
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("7947")) {
        {}
      } else {
        stryCov_9fa48("7947");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    }
  }
}
function* deleteStudent({
  id
}) {
  if (stryMutAct_9fa48("7948")) {
    {}
  } else {
    stryCov_9fa48("7948");
    try {
      if (stryMutAct_9fa48("7949")) {
        {}
      } else {
        stryCov_9fa48("7949");
        yield call(axiosCall, stryMutAct_9fa48("7950") ? `` : (stryCov_9fa48("7950"), `${STUDENT_URL}/${id}`), DELETE);
        yield put(deleteStudentSuccess(id));
        const message = createDynamicMessage(STUDENT, DELETED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7951")) {
        {}
      } else {
        stryCov_9fa48("7951");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    }
  }
}
function* uploadStudentsToGroup({
  file,
  id
}) {
  if (stryMutAct_9fa48("7952")) {
    {}
  } else {
    stryCov_9fa48("7952");
    try {
      if (stryMutAct_9fa48("7953")) {
        {}
      } else {
        stryCov_9fa48("7953");
        yield put(setLoading(stryMutAct_9fa48("7954") ? false : (stryCov_9fa48("7954"), true)));
        const formData = new FormData();
        formData.append(stryMutAct_9fa48("7955") ? "" : (stryCov_9fa48("7955"), 'file'), file);
        yield call(axiosCall, stryMutAct_9fa48("7956") ? `` : (stryCov_9fa48("7956"), `${STUDENTS_TO_GROUP_FILE}${id}`), POST, formData);
        const message = createMessage(FILE_BACK_END_SUCCESS_OPERATION, FORM_STUDENTS_FILE_LABEL, FILE_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7957")) {
        {}
      } else {
        stryCov_9fa48("7957");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    } finally {
      if (stryMutAct_9fa48("7958")) {
        {}
      } else {
        stryCov_9fa48("7958");
        yield put(setLoading(stryMutAct_9fa48("7959") ? true : (stryCov_9fa48("7959"), false)));
      }
    }
  }
}
function* moveStudentsToGroup({
  group
}) {
  if (stryMutAct_9fa48("7960")) {
    {}
  } else {
    stryCov_9fa48("7960");
    try {
      if (stryMutAct_9fa48("7961")) {
        {}
      } else {
        stryCov_9fa48("7961");
        const allStudents = yield select(getStudents);
        const movedStudents = stryMutAct_9fa48("7962") ? allStudents : (stryCov_9fa48("7962"), allStudents.filter(stryMutAct_9fa48("7963") ? () => undefined : (stryCov_9fa48("7963"), item => stryMutAct_9fa48("7966") ? item.checked !== true : stryMutAct_9fa48("7965") ? false : stryMutAct_9fa48("7964") ? true : (stryCov_9fa48("7964", "7965", "7966"), item.checked === (stryMutAct_9fa48("7967") ? false : (stryCov_9fa48("7967"), true))))));
        const students = movedStudents.map(stryMutAct_9fa48("7968") ? () => undefined : (stryCov_9fa48("7968"), student => omit(student, stryMutAct_9fa48("7969") ? [] : (stryCov_9fa48("7969"), [stryMutAct_9fa48("7970") ? "" : (stryCov_9fa48("7970"), 'checked')]))));
        yield call(axiosCall, MOVE_STUDENTS_URL, PUT, stryMutAct_9fa48("7971") ? {} : (stryCov_9fa48("7971"), {
          students,
          groupId: group.id
        }));
        yield put(deleteAllStudentSuccess(students));
        const message = createMessage(STUDENTS_UPPERCASE, MOVED_TO_GROUP_LABEL, BACK_END_SUCCESS_OPERATION);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7972")) {
        {}
      } else {
        stryCov_9fa48("7972");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    }
  }
}
export default function* studentWatcher() {
  if (stryMutAct_9fa48("7973")) {
    {}
  } else {
    stryCov_9fa48("7973");
    yield takeEvery(actionTypes.UPLOAD_FILE_STUDENT_START, uploadStudentsToGroup);
    yield takeEvery(actionTypes.MOVE_STUDENTS_TO_GROUP_START, moveStudentsToGroup);
    yield takeEvery(actionTypes.SUBMIT_STUDENT_FORM, submitStudentForm);
    yield takeEvery(actionTypes.CREATE_STUDENT_START, createStudent);
    yield takeEvery(actionTypes.UPDATE_STUDENT_START, updateStudent);
    yield takeEvery(actionTypes.DELETE_STUDENT_START, deleteStudent);
    yield takeEvery(actionTypes.GET_ALL_STUDENTS, getAllStudents);
  }
}