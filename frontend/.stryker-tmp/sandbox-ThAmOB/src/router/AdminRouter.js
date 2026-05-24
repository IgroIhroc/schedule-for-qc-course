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
import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import LessonPage from '../containers/LessonPage/LessonPage';
import { ACTIVATION_PAGE_LINK, ADMIN_PAGE_LINK, BUST_ROOMS_LINK, CHANGES_LINK, CLASS_SCHEDULE_TITLE_LINK, DEPARTMENTS_LINK, GROUP_LIST_PARAM_LINK, LESSON_PAGE_LINK, MARGE_ROLE_PAGE_LINK, ROOM_LIST_LINK, SEMESTER_PAGE_LINK, SUBJECT_PAGE_LINK, TEACHER_LESSONS_LINK, TEACHER_LIST_LINK } from '../constants/links';
import TeachersPage from '../containers/TeachersPage/TeachersPage';
import BusyRoomsPage from '../containers/Rooms/BusyRoomsPage';
import GroupList from '../containers/GroupPage/GroupPage';
import ClassSchedule from '../containers/ClassSchedule/ClassSchedule';
import RoomPage from '../containers/RoomsPage/RoomsPage';
import SubjectPage from '../containers/SubjectPage/SubjectPage';
import SemesterPage from '../containers/SemesterPage/SemesterPage';
import MergeRolePage from '../containers/MergeRolePage/MergeRolePage';
import DepartmentPage from '../containers/DepartmentPage/DepartmentPage';
import TemporarySchedule from '../containers/TemporarySchedule/TemporarySchedule';
import { AdminRoute } from './routes';
import NavigationPanel from '../components/Navigation/NavigationPanel';
import TeacherLessonsPage from '../components/TeacherLessonsPage/TeacherLessonsPage';
export default function Routers() {
  if (stryMutAct_9fa48("7331")) {
    {}
  } else {
    stryCov_9fa48("7331");
    return <>
            <NavigationPanel />
            <Switch>
                <AdminRoute path={DEPARTMENTS_LINK} component={DepartmentPage} />
                <AdminRoute path={LESSON_PAGE_LINK} component={LessonPage} />
                <AdminRoute path={TEACHER_LIST_LINK} component={TeachersPage} />
                <AdminRoute path={GROUP_LIST_PARAM_LINK} component={GroupList} />
                <AdminRoute path={CLASS_SCHEDULE_TITLE_LINK} component={ClassSchedule} />
                <AdminRoute path={ROOM_LIST_LINK} component={RoomPage} />
                <AdminRoute path={SUBJECT_PAGE_LINK} component={SubjectPage} />
                <AdminRoute path={BUST_ROOMS_LINK} component={BusyRoomsPage} />
                <AdminRoute path={SEMESTER_PAGE_LINK} component={SemesterPage} />
                <AdminRoute path={MARGE_ROLE_PAGE_LINK} component={MergeRolePage} />
                <AdminRoute path={CHANGES_LINK} component={TemporarySchedule} />

                <AdminRoute path={TEACHER_LESSONS_LINK} component={TeacherLessonsPage} />

                <AdminRoute path={ACTIVATION_PAGE_LINK}>
                    <Redirect to={ADMIN_PAGE_LINK} />
                </AdminRoute>
                <AdminRoute path="/">
                    <Redirect to={LESSON_PAGE_LINK} />
                </AdminRoute>
            </Switch>
        </>;
  }
}