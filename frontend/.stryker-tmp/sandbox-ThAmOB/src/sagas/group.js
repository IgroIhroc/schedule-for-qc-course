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
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { GROUP_FORM } from '../constants/reduxForms';
import * as actionTypes from '../actions/actionsType';
import { setLoading } from '../actions/loadingIndicator';
import { createDynamicMessage, createErrorMessage, createMessage } from '../utils/sagaUtils';
import { setOpenErrorSnackbar, setOpenInfoSnackbar, setOpenSuccessSnackbar } from '../actions/snackbar';
import { DISABLED_GROUPS_URL, GROUP_URL, GROUPS_AFTER_URL, GROUPS_URL, SEMESTERS_URL } from '../constants/axios';
import { DELETE, POST, PUT } from '../constants/methods';
import { axiosCall } from '../services/axios';
import { FORM_CHOSEN_SEMESTER_LABEL } from '../constants/translationLabels/formElements';
import { CHOSEN_SEMESTER_HAS_NOT_GROUPS, CREATED_LABEL, DELETED_LABEL, SERVICE_MESSAGE_GROUP_LABEL, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { clearGroupSuccess, createGroupSuccess, deleteGroupSuccess, getGroupByIdSuccess, selectGroupSuccess, showAllGroupsSuccess, updateGroupSuccess } from '../actions';
import { GROUP } from '../constants/names';
import { handleFormSubmit } from '../helper/handleFormSubmit';
const getGroupsState = stryMutAct_9fa48("7453") ? () => undefined : (stryCov_9fa48("7453"), (() => {
  const getGroupsState = state => state.groups.groups;
  return getGroupsState;
})());
function* getGroups(url) {
  if (stryMutAct_9fa48("7454")) {
    {}
  } else {
    stryCov_9fa48("7454");
    try {
      if (stryMutAct_9fa48("7455")) {
        {}
      } else {
        stryCov_9fa48("7455");
        yield put(setLoading(stryMutAct_9fa48("7456") ? false : (stryCov_9fa48("7456"), true)));
        const res = yield call(axiosCall, url);
        yield put(showAllGroupsSuccess(res.data));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7457")) {
        {}
      } else {
        stryCov_9fa48("7457");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    } finally {
      if (stryMutAct_9fa48("7458")) {
        {}
      } else {
        stryCov_9fa48("7458");
        yield put(setLoading(stryMutAct_9fa48("7459") ? true : (stryCov_9fa48("7459"), false)));
      }
    }
  }
}
function* getGroupById({
  id
}) {
  if (stryMutAct_9fa48("7460")) {
    {}
  } else {
    stryCov_9fa48("7460");
    try {
      if (stryMutAct_9fa48("7461")) {
        {}
      } else {
        stryCov_9fa48("7461");
        yield put(selectGroupSuccess({}));
        const res = yield call(axiosCall, stryMutAct_9fa48("7462") ? `` : (stryCov_9fa48("7462"), `${GROUP_URL}${id}`));
        yield put(getGroupByIdSuccess(res.data));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7463")) {
        {}
      } else {
        stryCov_9fa48("7463");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    }
  }
}
function* getDisabledGroups() {
  if (stryMutAct_9fa48("7464")) {
    {}
  } else {
    stryCov_9fa48("7464");
    yield call(getGroups, DISABLED_GROUPS_URL);
  }
}
function* getEnabledGroups() {
  if (stryMutAct_9fa48("7465")) {
    {}
  } else {
    stryCov_9fa48("7465");
    yield call(getGroups, GROUPS_URL);
  }
}
function* createGroup({
  data
}) {
  if (stryMutAct_9fa48("7466")) {
    {}
  } else {
    stryCov_9fa48("7466");
    try {
      if (stryMutAct_9fa48("7467")) {
        {}
      } else {
        stryCov_9fa48("7467");
        const res = yield call(axiosCall, GROUPS_AFTER_URL, POST, data);
        yield put(createGroupSuccess(res.data, data.afterId));
        yield put(reset(GROUP_FORM));
        const message = createDynamicMessage(GROUP, CREATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7468")) {
        {}
      } else {
        stryCov_9fa48("7468");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    }
  }
}
function* updateGroup({
  data,
  url
}) {
  if (stryMutAct_9fa48("7469")) {
    {}
  } else {
    stryCov_9fa48("7469");
    try {
      if (stryMutAct_9fa48("7470")) {
        {}
      } else {
        stryCov_9fa48("7470");
        const res = yield call(axiosCall, url, PUT, data);
        yield put(updateGroupSuccess(res.data, data.afterId));
        yield put(selectGroupSuccess(null));
        const message = createDynamicMessage(GROUP, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
        yield put(reset(GROUP_FORM));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7471")) {
        {}
      } else {
        stryCov_9fa48("7471");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    }
  }
}
function* submitGroupForm({
  group
}) {
  if (stryMutAct_9fa48("7472")) {
    {}
  } else {
    stryCov_9fa48("7472");
    try {
      if (stryMutAct_9fa48("7473")) {
        {}
      } else {
        stryCov_9fa48("7473");
        const url = GROUPS_AFTER_URL;
        yield call(handleFormSubmit(group, createGroup, updateGroup), stryMutAct_9fa48("7474") ? {} : (stryCov_9fa48("7474"), {
          data: group,
          url
        }));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7475")) {
        {}
      } else {
        stryCov_9fa48("7475");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    }
  }
}
function* deleteGroup({
  id
}) {
  if (stryMutAct_9fa48("7476")) {
    {}
  } else {
    stryCov_9fa48("7476");
    try {
      if (stryMutAct_9fa48("7477")) {
        {}
      } else {
        stryCov_9fa48("7477");
        yield call(axiosCall, stryMutAct_9fa48("7478") ? `` : (stryCov_9fa48("7478"), `${GROUP_URL}/${id}`), DELETE);
        yield put(deleteGroupSuccess(id));
        const message = createDynamicMessage(GROUP, DELETED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7479")) {
        {}
      } else {
        stryCov_9fa48("7479");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    }
  }
}
function* dragAndDropGroup({
  dragGroup,
  afterGroupId
}) {
  if (stryMutAct_9fa48("7480")) {
    {}
  } else {
    stryCov_9fa48("7480");
    try {
      if (stryMutAct_9fa48("7481")) {
        {}
      } else {
        stryCov_9fa48("7481");
        yield put(setLoading(stryMutAct_9fa48("7482") ? false : (stryCov_9fa48("7482"), true)));
        const url = GROUPS_AFTER_URL;
        yield call(updateGroup, stryMutAct_9fa48("7483") ? {} : (stryCov_9fa48("7483"), {
          data: stryMutAct_9fa48("7484") ? {} : (stryCov_9fa48("7484"), {
            ...dragGroup,
            afterId: afterGroupId
          }),
          url
        }));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7485")) {
        {}
      } else {
        stryCov_9fa48("7485");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    } finally {
      if (stryMutAct_9fa48("7486")) {
        {}
      } else {
        stryCov_9fa48("7486");
        yield put(setLoading(stryMutAct_9fa48("7487") ? true : (stryCov_9fa48("7487"), false)));
      }
    }
  }
}
function* toggleDisabledGroup({
  groupId
}) {
  if (stryMutAct_9fa48("7488")) {
    {}
  } else {
    stryCov_9fa48("7488");
    try {
      if (stryMutAct_9fa48("7489")) {
        {}
      } else {
        stryCov_9fa48("7489");
        if (stryMutAct_9fa48("7491") ? false : stryMutAct_9fa48("7490") ? true : (stryCov_9fa48("7490", "7491"), groupId)) {
          if (stryMutAct_9fa48("7492")) {
            {}
          } else {
            stryCov_9fa48("7492");
            const url = GROUP_URL;
            const groups = yield select(getGroupsState);
            const group = groups.find(stryMutAct_9fa48("7493") ? () => undefined : (stryCov_9fa48("7493"), item => stryMutAct_9fa48("7496") ? item.id !== groupId : stryMutAct_9fa48("7495") ? false : stryMutAct_9fa48("7494") ? true : (stryCov_9fa48("7494", "7495", "7496"), item.id === groupId)));
            yield call(updateGroup, stryMutAct_9fa48("7497") ? {} : (stryCov_9fa48("7497"), {
              data: stryMutAct_9fa48("7498") ? {} : (stryCov_9fa48("7498"), {
                ...group,
                disable: stryMutAct_9fa48("7499") ? group.disable : (stryCov_9fa48("7499"), !group.disable)
              }),
              url
            }));
            yield put(deleteGroupSuccess(groupId));
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("7500")) {
        {}
      } else {
        stryCov_9fa48("7500");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    }
  }
}
function* clearGroup() {
  if (stryMutAct_9fa48("7501")) {
    {}
  } else {
    stryCov_9fa48("7501");
    try {
      if (stryMutAct_9fa48("7502")) {
        {}
      } else {
        stryCov_9fa48("7502");
        yield put(clearGroupSuccess());
        yield put(reset(GROUP_FORM));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7503")) {
        {}
      } else {
        stryCov_9fa48("7503");
        yield put(setOpenErrorSnackbar(createErrorMessage(err)));
      }
    }
  }
}
export function* getAllPublicGroups({
  id
}) {
  if (stryMutAct_9fa48("7504")) {
    {}
  } else {
    stryCov_9fa48("7504");
    try {
      if (stryMutAct_9fa48("7505")) {
        {}
      } else {
        stryCov_9fa48("7505");
        const requestUrl = stryMutAct_9fa48("7506") ? `` : (stryCov_9fa48("7506"), `/${SEMESTERS_URL}/${id}/${GROUPS_URL}`);
        const {
          data
        } = yield call(axiosCall, requestUrl);
        yield put(showAllGroupsSuccess(data));
        if (stryMutAct_9fa48("7509") ? data.length !== 0 : stryMutAct_9fa48("7508") ? false : stryMutAct_9fa48("7507") ? true : (stryCov_9fa48("7507", "7508", "7509"), data.length === 0)) {
          if (stryMutAct_9fa48("7510")) {
            {}
          } else {
            stryCov_9fa48("7510");
            const message = createMessage(CHOSEN_SEMESTER_HAS_NOT_GROUPS, FORM_CHOSEN_SEMESTER_LABEL, SERVICE_MESSAGE_GROUP_LABEL);
            yield put(setOpenInfoSnackbar(message));
          }
        }
      }
    } catch (error) {
      if (stryMutAct_9fa48("7511")) {
        {}
      } else {
        stryCov_9fa48("7511");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export default function* groupWatcher() {
  if (stryMutAct_9fa48("7512")) {
    {}
  } else {
    stryCov_9fa48("7512");
    yield takeEvery(actionTypes.DELETE_GROUP_START, deleteGroup);
    yield takeEvery(actionTypes.CLEAR_GROUP_START, clearGroup);
    yield takeEvery(actionTypes.GET_GROUP_BY_ID_START, getGroupById);
    yield takeEvery(actionTypes.SUBMIT_GROUP_START, submitGroupForm);
    yield takeLatest(actionTypes.GET_ENABLED_GROUPS_START, getEnabledGroups);
    yield takeEvery(actionTypes.DRAG_AND_DROP_GROUP_START, dragAndDropGroup);
    yield takeLatest(actionTypes.GET_DISABLED_GROUPS_START, getDisabledGroups);
    yield takeLatest(actionTypes.GET_ALL_PUBLIC_GROUPS_START, getAllPublicGroups);
    yield takeEvery(actionTypes.TOGGLE_DISABLED_STATUS_GROUP, toggleDisabledGroup);
  }
}