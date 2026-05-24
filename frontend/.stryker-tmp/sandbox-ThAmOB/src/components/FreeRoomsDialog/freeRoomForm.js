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
import React, { useEffect, useState } from 'react';
import { Field } from 'redux-form';
import { isNil } from 'lodash';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import { required } from '../../validation/validateFields';
import SelectField from '../../share/renderedFields/select';
import './FreeRoomsDialog.scss';
import { FORM_CLASS_FREE_ROOMS, FORM_DAY_FREE_ROOMS, FORM_SEMESTER_FREE_ROOMS, FORM_SUBMIT_BUTTON_LABEL, FORM_WEEK_FREE_ROOMS } from '../../constants/translationLabels/formElements';
import { COMMON_SEARCH_FREE_ROOMS_TITLE } from '../../constants/translationLabels/common';
const FreeRoomForm = props => {
  if (stryMutAct_9fa48("1530")) {
    {}
  } else {
    stryCov_9fa48("1530");
    const {
      handleSubmit,
      getAllSemestersItems,
      getFreeRoomsByParams,
      pristine,
      submitting,
      semesters,
      clearField,
      setRoomsLoading,
      initialValues
    } = props;
    const [semesterClasses, setSemesterClasses] = useState(stryMutAct_9fa48("1531") ? ["Stryker was here"] : (stryCov_9fa48("1531"), []));
    const [semesterDays, setSemesterDays] = useState(stryMutAct_9fa48("1532") ? ["Stryker was here"] : (stryCov_9fa48("1532"), []));
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1533") ? "" : (stryCov_9fa48("1533"), 'formElements'));
    const weeks = stryMutAct_9fa48("1534") ? [] : (stryCov_9fa48("1534"), [stryMutAct_9fa48("1535") ? "" : (stryCov_9fa48("1535"), 'ODD'), stryMutAct_9fa48("1536") ? "" : (stryCov_9fa48("1536"), 'EVEN'), stryMutAct_9fa48("1537") ? "" : (stryCov_9fa48("1537"), 'WEEKLY')]);
    const getFormDataBySemesterId = id => {
      if (stryMutAct_9fa48("1538")) {
        {}
      } else {
        stryCov_9fa48("1538");
        const semesterData = semesters.find(stryMutAct_9fa48("1539") ? () => undefined : (stryCov_9fa48("1539"), item => stryMutAct_9fa48("1542") ? item.id !== id : stryMutAct_9fa48("1541") ? false : stryMutAct_9fa48("1540") ? true : (stryCov_9fa48("1540", "1541", "1542"), item.id === id)));
        setSemesterDays(stryMutAct_9fa48("1545") ? semesterData?.semester_days.map(item => item.toUpperCase()) && [] : stryMutAct_9fa48("1544") ? false : stryMutAct_9fa48("1543") ? true : (stryCov_9fa48("1543", "1544", "1545"), (stryMutAct_9fa48("1546") ? semesterData.semester_days.map(item => item.toUpperCase()) : (stryCov_9fa48("1546"), semesterData?.semester_days.map(stryMutAct_9fa48("1547") ? () => undefined : (stryCov_9fa48("1547"), item => stryMutAct_9fa48("1548") ? item.toLowerCase() : (stryCov_9fa48("1548"), item.toUpperCase()))))) || (stryMutAct_9fa48("1549") ? ["Stryker was here"] : (stryCov_9fa48("1549"), []))));
        setSemesterClasses(stryMutAct_9fa48("1552") ? semesterData?.semester_classes && [] : stryMutAct_9fa48("1551") ? false : stryMutAct_9fa48("1550") ? true : (stryCov_9fa48("1550", "1551", "1552"), (stryMutAct_9fa48("1553") ? semesterData.semester_classes : (stryCov_9fa48("1553"), semesterData?.semester_classes)) || (stryMutAct_9fa48("1554") ? ["Stryker was here"] : (stryCov_9fa48("1554"), []))));
        clearField(stryMutAct_9fa48("1555") ? "" : (stryCov_9fa48("1555"), 'classId'));
        clearField(stryMutAct_9fa48("1556") ? "" : (stryCov_9fa48("1556"), 'dayOfWeek'));
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("1557")) {
        {}
      } else {
        stryCov_9fa48("1557");
        getAllSemestersItems();
      }
    }, stryMutAct_9fa48("1558") ? ["Stryker was here"] : (stryCov_9fa48("1558"), []));
    useEffect(() => {
      if (stryMutAct_9fa48("1559")) {
        {}
      } else {
        stryCov_9fa48("1559");
        if (stryMutAct_9fa48("1562") ? false : stryMutAct_9fa48("1561") ? true : stryMutAct_9fa48("1560") ? isNil(semesters) : (stryCov_9fa48("1560", "1561", "1562"), !isNil(semesters))) {
          if (stryMutAct_9fa48("1563")) {
            {}
          } else {
            stryCov_9fa48("1563");
            getFormDataBySemesterId(initialValues.semesterId);
          }
        }
      }
    }, stryMutAct_9fa48("1564") ? [] : (stryCov_9fa48("1564"), [semesters]));
    const searchHandler = params => {
      if (stryMutAct_9fa48("1565")) {
        {}
      } else {
        stryCov_9fa48("1565");
        getFreeRoomsByParams(params);
        setRoomsLoading(stryMutAct_9fa48("1566") ? false : (stryCov_9fa48("1566"), true));
      }
    };
    return <form className="free-room-form" onSubmit={handleSubmit(searchHandler)}>
            <h3>{t(COMMON_SEARCH_FREE_ROOMS_TITLE)}</h3>
            <div className="field-container">
                <Field name="semesterId" component={SelectField} label={t(FORM_SEMESTER_FREE_ROOMS)} onChange={stryMutAct_9fa48("1567") ? () => undefined : (stryCov_9fa48("1567"), ({
          target
        }) => getFormDataBySemesterId(target.value))} type="text" className="form-select" validate={stryMutAct_9fa48("1568") ? [] : (stryCov_9fa48("1568"), [required])}>
                    {semesters.map(stryMutAct_9fa48("1569") ? () => undefined : (stryCov_9fa48("1569"), semester => <MenuItem key={semester.id} value={semester.id}>
                            {semester.description}
                        </MenuItem>))}
                </Field>
                <Field name="evenOdd" component={SelectField} label={t(FORM_WEEK_FREE_ROOMS)} type="text" className="form-select" validate={stryMutAct_9fa48("1570") ? [] : (stryCov_9fa48("1570"), [required])}>
                    <MenuItem value="" className="hidden" disabled />
                    {weeks.map(stryMutAct_9fa48("1571") ? () => undefined : (stryCov_9fa48("1571"), week => <MenuItem key={week} value={stryMutAct_9fa48("1572") ? `` : (stryCov_9fa48("1572"), `${week}`)}>
                            {t(stryMutAct_9fa48("1573") ? `` : (stryCov_9fa48("1573"), `common:${stryMutAct_9fa48("1574") ? week.toUpperCase() : (stryCov_9fa48("1574"), week.toLowerCase())}_week`))}
                        </MenuItem>))}
                </Field>
                <Field name="dayOfWeek" component={SelectField} label={t(FORM_DAY_FREE_ROOMS)} type="text" className="form-select" validate={stryMutAct_9fa48("1575") ? [] : (stryCov_9fa48("1575"), [required])}>
                    <MenuItem value="" className="hidden" disabled />
                    {semesterDays.map(stryMutAct_9fa48("1576") ? () => undefined : (stryCov_9fa48("1576"), day => <MenuItem key={day} value={stryMutAct_9fa48("1577") ? `` : (stryCov_9fa48("1577"), `${day}`)}>
                            {t(stryMutAct_9fa48("1578") ? `` : (stryCov_9fa48("1578"), `common:day_of_week_${day}`))}
                        </MenuItem>))}
                </Field>
                <Field name="classId" component={SelectField} label={t(FORM_CLASS_FREE_ROOMS)} type="text" className="form-select" validate={stryMutAct_9fa48("1579") ? [] : (stryCov_9fa48("1579"), [required])}>
                    <MenuItem value="" className="hidden" disabled />
                    {semesterClasses.map(item => {
            if (stryMutAct_9fa48("1580")) {
              {}
            } else {
              stryCov_9fa48("1580");
              const classTitle = item.class_name;
              return <MenuItem key={classTitle} value={stryMutAct_9fa48("1581") ? `` : (stryCov_9fa48("1581"), `${classTitle}`)}>
                                {classTitle}
                            </MenuItem>;
            }
          })}
                </Field>
            </div>
            <div className="app-button-container">
                <Button variant="contained" disabled={stryMutAct_9fa48("1584") ? pristine && submitting : stryMutAct_9fa48("1583") ? false : stryMutAct_9fa48("1582") ? true : (stryCov_9fa48("1582", "1583", "1584"), pristine || submitting)} className="common-button" type="submit">
                    {t(FORM_SUBMIT_BUTTON_LABEL)}
                </Button>
            </div>
        </form>;
  }
};
export default FreeRoomForm;