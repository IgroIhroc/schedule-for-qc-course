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
import { connect } from 'react-redux';
import { setPlace } from '../../actions/schedule';
import SelectPlace from '../../components/GroupSchedulePage/SelectPlace';
const mapStateToProps = stryMutAct_9fa48("5144") ? () => undefined : (stryCov_9fa48("5144"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5145") ? {} : (stryCov_9fa48("5145"), {
    place: state.schedule.place
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5146") ? () => undefined : (stryCov_9fa48("5146"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5147") ? {} : (stryCov_9fa48("5147"), {
    changePlace: stryMutAct_9fa48("5148") ? () => undefined : (stryCov_9fa48("5148"), place => dispatch(setPlace(place)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(SelectPlace);