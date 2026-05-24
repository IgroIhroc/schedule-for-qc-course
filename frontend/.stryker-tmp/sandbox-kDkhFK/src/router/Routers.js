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
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import HomePage from '../containers/Home/Home';
import TeacherSchedule from '../components/TeacherSchedule/TeacherSchedule';
import Logout from '../containers/Auth/Logout';
import ActivationPage from '../containers/ActivationPage/ActivationPage';
import ProfilePage from '../containers/ProfilePage/ProfilePage';
import EditCurrentSchedulePage from '../containers/EditCurrentSchedule/EditCurrentSchedulePage';
import { ACTIVATION_PAGE_LINK, ADMIN_PAGE_LINK, HOME_PAGE_LINK, LOGIN_LINK, LOGOUT_LINK, MY_PROFILE_LINK, REGISTRATION_LINK, RESET_PASSWORD_LINK, SCHEDULE_FOR_LINK, SCHEDULE_PAGE_LINK, TEACHER_SCHEDULE_LINK } from '../constants/links';
import { userRoles } from '../constants/userRoles';
import GroupSchedulePage from '../containers/GroupSchedulePage/GroupSchedulePage';
import { Register } from '../components/Register/Register';
import { ResetPassword } from '../components/ResetPassword/ResetPassword';
import { Login } from '../components/Login/Login';
import { AdminRoute, UserRoute } from './routes';
import AdminRouter from './AdminRouter';
const Routers = props => {
  if (stryMutAct_9fa48("7332")) {
    {}
  } else {
    stryCov_9fa48("7332");
    const {
      userRole
    } = props;
    return <Router>
            <Header userRole={userRole} roles={userRoles} />
            <Switch>
                <Route exact path={HOME_PAGE_LINK} component={HomePage} />
                <Route path={SCHEDULE_FOR_LINK} component={GroupSchedulePage} />
                <Route path={ACTIVATION_PAGE_LINK} component={ActivationPage} />
                <Route path={RESET_PASSWORD_LINK} component={ResetPassword} />
                <Route path={REGISTRATION_LINK} component={Register} />
                <Route path={LOGIN_LINK} component={Login} />
                <UserRoute path={TEACHER_SCHEDULE_LINK} component={TeacherSchedule} />
                <UserRoute path={MY_PROFILE_LINK} component={ProfilePage} />
                <UserRoute path={LOGOUT_LINK} component={Logout} />
                <AdminRoute path={SCHEDULE_PAGE_LINK} component={EditCurrentSchedulePage} />
                <AdminRoute path={ADMIN_PAGE_LINK} component={AdminRouter} />
                <UserRoute path={ACTIVATION_PAGE_LINK}>
                    <Redirect to={HOME_PAGE_LINK} />
                </UserRoute>
                <UserRoute path={SCHEDULE_PAGE_LINK}>
                    <Redirect to={LOGIN_LINK} />
                </UserRoute>
            </Switch>
        </Router>;
  }
};
const mapStateToProps = stryMutAct_9fa48("7333") ? () => undefined : (stryCov_9fa48("7333"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("7334") ? {} : (stryCov_9fa48("7334"), {
    userRole: state.auth.role
  });
  return mapStateToProps;
})());
export default connect(mapStateToProps)(Routers);