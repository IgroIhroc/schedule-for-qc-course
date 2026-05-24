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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { checkSemesterEnd, matchDayNumberSysytemToDayName, getWeekParity, isWeekOdd } from '../../helper/renderScheduleTable';
import i18n from '../../i18n';
import './DepartmentSchedule.scss';
const renderClassCell = classItem => {
  if (stryMutAct_9fa48("1013")) {
    {}
  } else {
    stryCov_9fa48("1013");
    return <div className="class-cell">
            <div className="class-name">{classItem.class_name}</div>
            <div className="class-time">{classItem.startTime} - {classItem.endTime}</div>
        </div>;
  }
};
const renderLessonCell = lesson => {
  if (stryMutAct_9fa48("1014")) {
    {}
  } else {
    stryCov_9fa48("1014");
    if (stryMutAct_9fa48("1017") ? false : stryMutAct_9fa48("1016") ? true : stryMutAct_9fa48("1015") ? lesson : (stryCov_9fa48("1015", "1016", "1017"), !lesson)) return <span className="empty-cell">-</span>;
    return <div className="lesson-cell">
            <div className="subject">{lesson.subject_for_site}</div>
            <div className="group">{lesson.group_name}</div>
            <div className="room">
                {stryMutAct_9fa48("1018") ? lesson.room.name : (stryCov_9fa48("1018"), lesson.room?.name)}
                {stryMutAct_9fa48("1021") ? lesson.linkToMeeting || <a href={lesson.linkToMeeting} target="_blank" rel="noopener noreferrer" className="meeting-link" title="Перейти до онлайн-заняття">
                        🔗
                    </a> : stryMutAct_9fa48("1020") ? false : stryMutAct_9fa48("1019") ? true : (stryCov_9fa48("1019", "1020", "1021"), lesson.linkToMeeting && <a href={lesson.linkToMeeting} target="_blank" rel="noopener noreferrer" className="meeting-link" title="Перейти до онлайн-заняття">
                        🔗
                    </a>)}
            </div>
        </div>;
  }
};
const isRowEmpty = (cards, teachers) => {
  if (stryMutAct_9fa48("1022")) {
    {}
  } else {
    stryCov_9fa48("1022");
    if (stryMutAct_9fa48("1025") ? !cards && cards.length === 0 : stryMutAct_9fa48("1024") ? false : stryMutAct_9fa48("1023") ? true : (stryCov_9fa48("1023", "1024", "1025"), (stryMutAct_9fa48("1026") ? cards : (stryCov_9fa48("1026"), !cards)) || (stryMutAct_9fa48("1028") ? cards.length !== 0 : stryMutAct_9fa48("1027") ? false : (stryCov_9fa48("1027", "1028"), cards.length === 0)))) return stryMutAct_9fa48("1029") ? false : (stryCov_9fa48("1029"), true);
    return stryMutAct_9fa48("1030") ? teachers.some(teacher => {
      const lesson = cards.find(c => c.card?.teacher?.id === teacher.id)?.card;
      return !lesson;
    }) : (stryCov_9fa48("1030"), teachers.every(teacher => {
      if (stryMutAct_9fa48("1031")) {
        {}
      } else {
        stryCov_9fa48("1031");
        const lesson = stryMutAct_9fa48("1032") ? cards.find(c => c.card?.teacher?.id === teacher.id).card : (stryCov_9fa48("1032"), cards.find(stryMutAct_9fa48("1033") ? () => undefined : (stryCov_9fa48("1033"), c => stryMutAct_9fa48("1036") ? c.card?.teacher?.id !== teacher.id : stryMutAct_9fa48("1035") ? false : stryMutAct_9fa48("1034") ? true : (stryCov_9fa48("1034", "1035", "1036"), (stryMutAct_9fa48("1038") ? c.card.teacher?.id : stryMutAct_9fa48("1037") ? c.card?.teacher.id : (stryCov_9fa48("1037", "1038"), c.card?.teacher?.id)) === teacher.id)))?.card);
        return stryMutAct_9fa48("1039") ? lesson : (stryCov_9fa48("1039"), !lesson);
      }
    }));
  }
};
const DepartmentSchedule = ({
  fullSchedule,
  departmentId
}) => {
  if (stryMutAct_9fa48("1040")) {
    {}
  } else {
    stryCov_9fa48("1040");
    const {
      resultArray,
      semester
    } = fullSchedule;
    const currentDay = (stryMutAct_9fa48("1043") ? semester?.endDay || !checkSemesterEnd(semester.endDay) : stryMutAct_9fa48("1042") ? false : stryMutAct_9fa48("1041") ? true : (stryCov_9fa48("1041", "1042", "1043"), (stryMutAct_9fa48("1044") ? semester.endDay : (stryCov_9fa48("1044"), semester?.endDay)) && (stryMutAct_9fa48("1045") ? checkSemesterEnd(semester.endDay) : (stryCov_9fa48("1045"), !checkSemesterEnd(semester.endDay))))) ? matchDayNumberSysytemToDayName() : stryMutAct_9fa48("1046") ? "Stryker was here!" : (stryCov_9fa48("1046"), '');
    const currentWeekType = (stryMutAct_9fa48("1047") ? semester.startDay : (stryCov_9fa48("1047"), semester?.startDay)) ? isWeekOdd(getWeekParity(semester.startDay)) : stryMutAct_9fa48("1048") ? false : (stryCov_9fa48("1048"), true);
    const teacherSet = new Map();
    resultArray.forEach(dayData => {
      if (stryMutAct_9fa48("1049")) {
        {}
      } else {
        stryCov_9fa48("1049");
        dayData.classes.forEach(classData => {
          if (stryMutAct_9fa48("1050")) {
            {}
          } else {
            stryCov_9fa48("1050");
            (stryMutAct_9fa48("1051") ? [] : (stryCov_9fa48("1051"), [stryMutAct_9fa48("1052") ? "" : (stryCov_9fa48("1052"), 'odd'), stryMutAct_9fa48("1053") ? "" : (stryCov_9fa48("1053"), 'even')])).forEach(weekType => {
              if (stryMutAct_9fa48("1054")) {
                {}
              } else {
                stryCov_9fa48("1054");
                const cards = stryMutAct_9fa48("1057") ? classData.cards[weekType] && [] : stryMutAct_9fa48("1056") ? false : stryMutAct_9fa48("1055") ? true : (stryCov_9fa48("1055", "1056", "1057"), classData.cards[weekType] || (stryMutAct_9fa48("1058") ? ["Stryker was here"] : (stryCov_9fa48("1058"), [])));
                cards.forEach(cardData => {
                  if (stryMutAct_9fa48("1059")) {
                    {}
                  } else {
                    stryCov_9fa48("1059");
                    const card = cardData.card;
                    if (stryMutAct_9fa48("1062") ? card && card.teacher || card.teacher.department?.id === departmentId : stryMutAct_9fa48("1061") ? false : stryMutAct_9fa48("1060") ? true : (stryCov_9fa48("1060", "1061", "1062"), (stryMutAct_9fa48("1064") ? card || card.teacher : stryMutAct_9fa48("1063") ? true : (stryCov_9fa48("1063", "1064"), card && card.teacher)) && (stryMutAct_9fa48("1066") ? card.teacher.department?.id !== departmentId : stryMutAct_9fa48("1065") ? true : (stryCov_9fa48("1065", "1066"), (stryMutAct_9fa48("1067") ? card.teacher.department.id : (stryCov_9fa48("1067"), card.teacher.department?.id)) === departmentId)))) {
                      if (stryMutAct_9fa48("1068")) {
                        {}
                      } else {
                        stryCov_9fa48("1068");
                        if (stryMutAct_9fa48("1071") ? false : stryMutAct_9fa48("1070") ? true : stryMutAct_9fa48("1069") ? teacherSet.has(card.teacher.id) : (stryCov_9fa48("1069", "1070", "1071"), !teacherSet.has(card.teacher.id))) {
                          if (stryMutAct_9fa48("1072")) {
                            {}
                          } else {
                            stryCov_9fa48("1072");
                            teacherSet.set(card.teacher.id, card.teacher);
                          }
                        }
                      }
                    }
                  }
                });
              }
            });
          }
        });
      }
    });
    const teachers = stryMutAct_9fa48("1073") ? Array.from(teacherSet.values()) : (stryCov_9fa48("1073"), Array.from(teacherSet.values()).sort(stryMutAct_9fa48("1074") ? () => undefined : (stryCov_9fa48("1074"), (a, b) => a.surname.localeCompare(b.surname, stryMutAct_9fa48("1075") ? "" : (stryCov_9fa48("1075"), 'uk')))));
    if (stryMutAct_9fa48("1078") ? teachers.length !== 0 : stryMutAct_9fa48("1077") ? false : stryMutAct_9fa48("1076") ? true : (stryCov_9fa48("1076", "1077", "1078"), teachers.length === 0)) {
      if (stryMutAct_9fa48("1079")) {
        {}
      } else {
        stryCov_9fa48("1079");
        return <p className="empty_schedule">{i18n.t(stryMutAct_9fa48("1080") ? "" : (stryCov_9fa48("1080"), 'common:empty_schedule'))}</p>;
      }
    }
    return <TableContainer className="department-schedule">
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell className="header-cell day-header">{i18n.t(stryMutAct_9fa48("1081") ? "" : (stryCov_9fa48("1081"), 'common:day_label'))}</TableCell>
                        <TableCell className="header-cell class-header">{i18n.t(stryMutAct_9fa48("1082") ? "" : (stryCov_9fa48("1082"), 'common:class_label'))}</TableCell>
                        <TableCell className="header-cell week-header">{i18n.t(stryMutAct_9fa48("1083") ? "" : (stryCov_9fa48("1083"), 'common:week_label'))}</TableCell>
                        {teachers.map(stryMutAct_9fa48("1084") ? () => undefined : (stryCov_9fa48("1084"), teacher => <TableCell key={teacher.id} className="header-cell teacher-header">
                                {stryMutAct_9fa48("1085") ? `` : (stryCov_9fa48("1085"), `${teacher.surname} ${stryMutAct_9fa48("1088") ? teacher.name?.charAt(0) && '' : stryMutAct_9fa48("1087") ? false : stryMutAct_9fa48("1086") ? true : (stryCov_9fa48("1086", "1087", "1088"), (stryMutAct_9fa48("1090") ? teacher.name.charAt(0) : stryMutAct_9fa48("1089") ? teacher.name : (stryCov_9fa48("1089", "1090"), teacher.name?.charAt(0))) || (stryMutAct_9fa48("1091") ? "Stryker was here!" : (stryCov_9fa48("1091"), '')))}.${stryMutAct_9fa48("1094") ? teacher.patronymic?.charAt(0) && '' : stryMutAct_9fa48("1093") ? false : stryMutAct_9fa48("1092") ? true : (stryCov_9fa48("1092", "1093", "1094"), (stryMutAct_9fa48("1096") ? teacher.patronymic.charAt(0) : stryMutAct_9fa48("1095") ? teacher.patronymic : (stryCov_9fa48("1095", "1096"), teacher.patronymic?.charAt(0))) || (stryMutAct_9fa48("1097") ? "Stryker was here!" : (stryCov_9fa48("1097"), '')))}.`)}
                            </TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {resultArray.map((dayData, dayIndex) => {
            if (stryMutAct_9fa48("1098")) {
              {}
            } else {
              stryCov_9fa48("1098");
              const classCount = dayData.classes.length;
              return dayData.classes.map(stryMutAct_9fa48("1099") ? () => undefined : (stryCov_9fa48("1099"), (classData, classIndex) => <React.Fragment key={stryMutAct_9fa48("1100") ? `` : (stryCov_9fa48("1100"), `${dayData.day}_${classData.class.id}`)}>
                                {/* Odd week row */}
                                <TableRow className={stryMutAct_9fa48("1101") ? `` : (stryCov_9fa48("1101"), `${(stryMutAct_9fa48("1104") ? dayIndex % 2 !== 0 : stryMutAct_9fa48("1103") ? false : stryMutAct_9fa48("1102") ? true : (stryCov_9fa48("1102", "1103", "1104"), (stryMutAct_9fa48("1105") ? dayIndex * 2 : (stryCov_9fa48("1105"), dayIndex % 2)) === 0)) ? stryMutAct_9fa48("1106") ? "" : (stryCov_9fa48("1106"), 'day-even') : stryMutAct_9fa48("1107") ? "" : (stryCov_9fa48("1107"), 'day-odd')} week-odd ${isRowEmpty(classData.cards.odd, teachers) ? stryMutAct_9fa48("1108") ? "" : (stryCov_9fa48("1108"), 'all-free') : stryMutAct_9fa48("1109") ? "Stryker was here!" : (stryCov_9fa48("1109"), '')} ${(stryMutAct_9fa48("1112") ? dayData.day === currentDay || currentWeekType : stryMutAct_9fa48("1111") ? false : stryMutAct_9fa48("1110") ? true : (stryCov_9fa48("1110", "1111", "1112"), (stryMutAct_9fa48("1114") ? dayData.day !== currentDay : stryMutAct_9fa48("1113") ? true : (stryCov_9fa48("1113", "1114"), dayData.day === currentDay)) && currentWeekType)) ? stryMutAct_9fa48("1115") ? "" : (stryCov_9fa48("1115"), 'currentDay') : stryMutAct_9fa48("1116") ? "Stryker was here!" : (stryCov_9fa48("1116"), '')}`)}>
                                    {stryMutAct_9fa48("1119") ? classIndex === 0 || <TableCell rowSpan={classCount * 2} className="day-cell">
                                            {i18n.t(`common:day_of_week_${dayData.day}`)}
                                        </TableCell> : stryMutAct_9fa48("1118") ? false : stryMutAct_9fa48("1117") ? true : (stryCov_9fa48("1117", "1118", "1119"), (stryMutAct_9fa48("1121") ? classIndex !== 0 : stryMutAct_9fa48("1120") ? true : (stryCov_9fa48("1120", "1121"), classIndex === 0)) && <TableCell rowSpan={stryMutAct_9fa48("1122") ? classCount / 2 : (stryCov_9fa48("1122"), classCount * 2)} className="day-cell">
                                            {i18n.t(stryMutAct_9fa48("1123") ? `` : (stryCov_9fa48("1123"), `common:day_of_week_${dayData.day}`))}
                                        </TableCell>)}
                                    <TableCell rowSpan={2} className="class-cell-wrapper">
                                        {renderClassCell(classData.class)}
                                    </TableCell>
                                    <TableCell className="week-cell">1</TableCell>
                                    {teachers.map(teacher => {
                    if (stryMutAct_9fa48("1124")) {
                      {}
                    } else {
                      stryCov_9fa48("1124");
                      const cards = stryMutAct_9fa48("1127") ? classData.cards.odd && [] : stryMutAct_9fa48("1126") ? false : stryMutAct_9fa48("1125") ? true : (stryCov_9fa48("1125", "1126", "1127"), classData.cards.odd || (stryMutAct_9fa48("1128") ? ["Stryker was here"] : (stryCov_9fa48("1128"), [])));
                      const lesson = stryMutAct_9fa48("1129") ? cards.find(c => c.card?.teacher?.id === teacher.id).card : (stryCov_9fa48("1129"), cards.find(stryMutAct_9fa48("1130") ? () => undefined : (stryCov_9fa48("1130"), c => stryMutAct_9fa48("1133") ? c.card?.teacher?.id !== teacher.id : stryMutAct_9fa48("1132") ? false : stryMutAct_9fa48("1131") ? true : (stryCov_9fa48("1131", "1132", "1133"), (stryMutAct_9fa48("1135") ? c.card.teacher?.id : stryMutAct_9fa48("1134") ? c.card?.teacher.id : (stryCov_9fa48("1134", "1135"), c.card?.teacher?.id)) === teacher.id)))?.card);
                      return <TableCell key={stryMutAct_9fa48("1136") ? `` : (stryCov_9fa48("1136"), `${teacher.id}_odd`)} className="lesson-cell-wrapper">
                                                {renderLessonCell(lesson)}
                                            </TableCell>;
                    }
                  })}
                                </TableRow>
                                {/* Even week row */}
                                <TableRow className={stryMutAct_9fa48("1137") ? `` : (stryCov_9fa48("1137"), `${(stryMutAct_9fa48("1140") ? dayIndex % 2 !== 0 : stryMutAct_9fa48("1139") ? false : stryMutAct_9fa48("1138") ? true : (stryCov_9fa48("1138", "1139", "1140"), (stryMutAct_9fa48("1141") ? dayIndex * 2 : (stryCov_9fa48("1141"), dayIndex % 2)) === 0)) ? stryMutAct_9fa48("1142") ? "" : (stryCov_9fa48("1142"), 'day-even') : stryMutAct_9fa48("1143") ? "" : (stryCov_9fa48("1143"), 'day-odd')} week-even ${(stryMutAct_9fa48("1146") ? classIndex !== classCount - 1 : stryMutAct_9fa48("1145") ? false : stryMutAct_9fa48("1144") ? true : (stryCov_9fa48("1144", "1145", "1146"), classIndex === (stryMutAct_9fa48("1147") ? classCount + 1 : (stryCov_9fa48("1147"), classCount - 1)))) ? stryMutAct_9fa48("1148") ? "" : (stryCov_9fa48("1148"), 'day-last') : stryMutAct_9fa48("1149") ? "" : (stryCov_9fa48("1149"), 'class-last')} ${isRowEmpty(classData.cards.even, teachers) ? stryMutAct_9fa48("1150") ? "" : (stryCov_9fa48("1150"), 'all-free') : stryMutAct_9fa48("1151") ? "Stryker was here!" : (stryCov_9fa48("1151"), '')} ${(stryMutAct_9fa48("1154") ? dayData.day === currentDay || !currentWeekType : stryMutAct_9fa48("1153") ? false : stryMutAct_9fa48("1152") ? true : (stryCov_9fa48("1152", "1153", "1154"), (stryMutAct_9fa48("1156") ? dayData.day !== currentDay : stryMutAct_9fa48("1155") ? true : (stryCov_9fa48("1155", "1156"), dayData.day === currentDay)) && (stryMutAct_9fa48("1157") ? currentWeekType : (stryCov_9fa48("1157"), !currentWeekType)))) ? stryMutAct_9fa48("1158") ? "" : (stryCov_9fa48("1158"), 'currentDay') : stryMutAct_9fa48("1159") ? "Stryker was here!" : (stryCov_9fa48("1159"), '')}`)}>
                                    <TableCell className="week-cell">2</TableCell>
                                    {teachers.map(teacher => {
                    if (stryMutAct_9fa48("1160")) {
                      {}
                    } else {
                      stryCov_9fa48("1160");
                      const cards = stryMutAct_9fa48("1163") ? classData.cards.even && [] : stryMutAct_9fa48("1162") ? false : stryMutAct_9fa48("1161") ? true : (stryCov_9fa48("1161", "1162", "1163"), classData.cards.even || (stryMutAct_9fa48("1164") ? ["Stryker was here"] : (stryCov_9fa48("1164"), [])));
                      const lesson = stryMutAct_9fa48("1165") ? cards.find(c => c.card?.teacher?.id === teacher.id).card : (stryCov_9fa48("1165"), cards.find(stryMutAct_9fa48("1166") ? () => undefined : (stryCov_9fa48("1166"), c => stryMutAct_9fa48("1169") ? c.card?.teacher?.id !== teacher.id : stryMutAct_9fa48("1168") ? false : stryMutAct_9fa48("1167") ? true : (stryCov_9fa48("1167", "1168", "1169"), (stryMutAct_9fa48("1171") ? c.card.teacher?.id : stryMutAct_9fa48("1170") ? c.card?.teacher.id : (stryCov_9fa48("1170", "1171"), c.card?.teacher?.id)) === teacher.id)))?.card);
                      return <TableCell key={stryMutAct_9fa48("1172") ? `` : (stryCov_9fa48("1172"), `${teacher.id}_even`)} className="lesson-cell-wrapper">
                                                {renderLessonCell(lesson)}
                                            </TableCell>;
                    }
                  })}
                                </TableRow>
                            </React.Fragment>));
            }
          })}
                </TableBody>
            </Table>
        </TableContainer>;
  }
};
export default DepartmentSchedule;