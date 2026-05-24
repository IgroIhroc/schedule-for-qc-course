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
import { isEmpty } from 'lodash';
import { CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DragDropCard from '../DragDropCard';
import { divideLessonsByOneHourLesson } from '../../../helper/schedule';
import { FORM_GROUP_LABEL } from '../../../constants/translationLabels/formElements';
import { CLEAR_SCHEDULE_LABEL, COMMON_SELECT_GROUP_SCHEDULE, LESSON_NO_LESSON_FOR_GROUP_LABEL } from '../../../constants/translationLabels/common';
import './ScheduleLessonList.scss';
const ScheduleLessonsList = props => {
  if (stryMutAct_9fa48("1483")) {
    {}
  } else {
    stryCov_9fa48("1483");
    const {
      groups,
      t,
      setDragItemData,
      groupId,
      lessons,
      handleClearSchedule,
      selectByGroupId,
      items
    } = props;
    const [listItems, setListItems] = useState(stryMutAct_9fa48("1484") ? ["Stryker was here"] : (stryCov_9fa48("1484"), []));
    const [listLoading, setListLoading] = useState(stryMutAct_9fa48("1485") ? false : (stryCov_9fa48("1485"), true));
    const isListEmpty = isEmpty(lessons);
    const handleGroupSelect = group => {
      if (stryMutAct_9fa48("1486")) {
        {}
      } else {
        stryCov_9fa48("1486");
        if (stryMutAct_9fa48("1488") ? false : stryMutAct_9fa48("1487") ? true : (stryCov_9fa48("1487", "1488"), group)) selectByGroupId(group.id);
      }
    };
    const groupFinderHandle = groupIdProp => {
      if (stryMutAct_9fa48("1489")) {
        {}
      } else {
        stryCov_9fa48("1489");
        if (stryMutAct_9fa48("1491") ? false : stryMutAct_9fa48("1490") ? true : (stryCov_9fa48("1490", "1491"), groupIdProp)) return groups.find(stryMutAct_9fa48("1492") ? () => undefined : (stryCov_9fa48("1492"), group => stryMutAct_9fa48("1495") ? group.id !== groupIdProp : stryMutAct_9fa48("1494") ? false : stryMutAct_9fa48("1493") ? true : (stryCov_9fa48("1493", "1494", "1495"), group.id === groupIdProp)));
        return stryMutAct_9fa48("1496") ? "Stryker was here!" : (stryCov_9fa48("1496"), '');
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("1497")) {
        {}
      } else {
        stryCov_9fa48("1497");
        setListItems(divideLessonsByOneHourLesson(items, lessons));
        setListLoading(stryMutAct_9fa48("1498") ? true : (stryCov_9fa48("1498"), false));
      }
    }, stryMutAct_9fa48("1499") ? [] : (stryCov_9fa48("1499"), [items, lessons]));
    useEffect(() => {
      if (stryMutAct_9fa48("1500")) {
        {}
      } else {
        stryCov_9fa48("1500");
        if (stryMutAct_9fa48("1502") ? false : stryMutAct_9fa48("1501") ? true : (stryCov_9fa48("1501", "1502"), groupId)) {
          if (stryMutAct_9fa48("1503")) {
            {}
          } else {
            stryCov_9fa48("1503");
            setListLoading(stryMutAct_9fa48("1504") ? false : (stryCov_9fa48("1504"), true));
          }
        }
      }
    }, stryMutAct_9fa48("1505") ? [] : (stryCov_9fa48("1505"), [groupId]));
    return <>
            <div className="app-button-container">
                <Button className="common-button" variant="contained" color="primary" onClick={handleClearSchedule}>
                    {t(CLEAR_SCHEDULE_LABEL)}
                </Button>
            </div>

            <>
                <p className="helper-text">{t(COMMON_SELECT_GROUP_SCHEDULE)}</p>
                <div className="autocomplete-container">
                    <Autocomplete options={groups} clearOnEscape openOnFocus value={groupFinderHandle(groupId)} onChange={(_, newValue) => {
            if (stryMutAct_9fa48("1506")) {
              {}
            } else {
              stryCov_9fa48("1506");
              handleGroupSelect(newValue);
            }
          }} getOptionLabel={stryMutAct_9fa48("1507") ? () => undefined : (stryCov_9fa48("1507"), option => option ? option.title : stryMutAct_9fa48("1508") ? "Stryker was here!" : (stryCov_9fa48("1508"), ''))} getOptionSelected={stryMutAct_9fa48("1509") ? () => undefined : (stryCov_9fa48("1509"), (option, value) => stryMutAct_9fa48("1512") ? option.id !== value.id : stryMutAct_9fa48("1511") ? false : stryMutAct_9fa48("1510") ? true : (stryCov_9fa48("1510", "1511", "1512"), option.id === value.id))} renderInput={stryMutAct_9fa48("1513") ? () => undefined : (stryCov_9fa48("1513"), params => <TextField {...params} className="form-input" label={t(FORM_GROUP_LABEL)} margin="normal" />)} />
                </div>

                <section className={stryMutAct_9fa48("1514") ? `` : (stryCov_9fa48("1514"), `lessons-container ${listLoading ? stryMutAct_9fa48("1515") ? "" : (stryCov_9fa48("1515"), 'loading') : stryMutAct_9fa48("1516") ? "Stryker was here!" : (stryCov_9fa48("1516"), '')}`)}>
                    {stryMutAct_9fa48("1519") ? listLoading || <div className="content-center">
                            <CircularProgress className="loading-circle" />
                        </div> : stryMutAct_9fa48("1518") ? false : stryMutAct_9fa48("1517") ? true : (stryCov_9fa48("1517", "1518", "1519"), listLoading && <div className="content-center">
                            <CircularProgress className="loading-circle" />
                        </div>)}
                    {(stryMutAct_9fa48("1522") ? !listLoading || !isListEmpty : stryMutAct_9fa48("1521") ? false : stryMutAct_9fa48("1520") ? true : (stryCov_9fa48("1520", "1521", "1522"), (stryMutAct_9fa48("1523") ? listLoading : (stryCov_9fa48("1523"), !listLoading)) && (stryMutAct_9fa48("1524") ? isListEmpty : (stryCov_9fa48("1524"), !isListEmpty)))) ? listItems.map(stryMutAct_9fa48("1525") ? () => undefined : (stryCov_9fa48("1525"), (item, index) => <DragDropCard key={stryMutAct_9fa48("1526") ? `` : (stryCov_9fa48("1526"), `${item.id}_${index.toString()}`)} index={index} lesson={item} lessons={lessons} t={t} setDragItemData={setDragItemData} classScheduler={props.classScheduler} />)) : stryMutAct_9fa48("1529") ? groupId || <p className="empty">{t(LESSON_NO_LESSON_FOR_GROUP_LABEL)}</p> : stryMutAct_9fa48("1528") ? false : stryMutAct_9fa48("1527") ? true : (stryCov_9fa48("1527", "1528", "1529"), groupId && <p className="empty">{t(LESSON_NO_LESSON_FOR_GROUP_LABEL)}</p>)}
                </section>
            </>
        </>;
  }
};
export default ScheduleLessonsList;