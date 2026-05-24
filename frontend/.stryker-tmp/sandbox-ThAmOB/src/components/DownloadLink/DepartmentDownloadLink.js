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
import { MdPictureAsPdf } from 'react-icons/md';
import i18n from '../../i18n';
import { COMMON_DOWNLOAD_PDF } from '../../constants/translationLabels/common';
const DepartmentDownloadLink = ({
  departmentName,
  semesterDescription,
  semesterStartDay,
  semesterEndDay
}) => {
  if (stryMutAct_9fa48("1173")) {
    {}
  } else {
    stryCov_9fa48("1173");
    const handlePrint = () => {
      if (stryMutAct_9fa48("1174")) {
        {}
      } else {
        stryCov_9fa48("1174");
        const tableElement = document.querySelector(stryMutAct_9fa48("1175") ? "" : (stryCov_9fa48("1175"), '.department-schedule'));
        if (stryMutAct_9fa48("1178") ? false : stryMutAct_9fa48("1177") ? true : stryMutAct_9fa48("1176") ? tableElement : (stryCov_9fa48("1176", "1177", "1178"), !tableElement)) return;
        const semesterTitle = stryMutAct_9fa48("1179") ? `` : (stryCov_9fa48("1179"), `${stryMutAct_9fa48("1182") ? semesterDescription && '' : stryMutAct_9fa48("1181") ? false : stryMutAct_9fa48("1180") ? true : (stryCov_9fa48("1180", "1181", "1182"), semesterDescription || (stryMutAct_9fa48("1183") ? "Stryker was here!" : (stryCov_9fa48("1183"), '')))} (${stryMutAct_9fa48("1186") ? semesterStartDay && '' : stryMutAct_9fa48("1185") ? false : stryMutAct_9fa48("1184") ? true : (stryCov_9fa48("1184", "1185", "1186"), semesterStartDay || (stryMutAct_9fa48("1187") ? "Stryker was here!" : (stryCov_9fa48("1187"), '')))} - ${stryMutAct_9fa48("1190") ? semesterEndDay && '' : stryMutAct_9fa48("1189") ? false : stryMutAct_9fa48("1188") ? true : (stryCov_9fa48("1188", "1189", "1190"), semesterEndDay || (stryMutAct_9fa48("1191") ? "Stryker was here!" : (stryCov_9fa48("1191"), '')))})`);
        const departmentTitle = stryMutAct_9fa48("1192") ? `` : (stryCov_9fa48("1192"), `${i18n.t(stryMutAct_9fa48("1193") ? "" : (stryCov_9fa48("1193"), 'common:department_label'))}: ${stryMutAct_9fa48("1196") ? departmentName && '' : stryMutAct_9fa48("1195") ? false : stryMutAct_9fa48("1194") ? true : (stryCov_9fa48("1194", "1195", "1196"), departmentName || (stryMutAct_9fa48("1197") ? "Stryker was here!" : (stryCov_9fa48("1197"), '')))}`);

        // Клонуємо таблицю
        const clonedTable = tableElement.cloneNode(stryMutAct_9fa48("1198") ? false : (stryCov_9fa48("1198"), true));

        // Замінюємо повні назви днів на скорочені
        const dayCells = clonedTable.querySelectorAll(stryMutAct_9fa48("1199") ? "" : (stryCov_9fa48("1199"), '.day-cell'));
        const dayMap = stryMutAct_9fa48("1200") ? {} : (stryCov_9fa48("1200"), {
          [i18n.t(stryMutAct_9fa48("1201") ? "" : (stryCov_9fa48("1201"), 'common:day_of_week_MONDAY'))]: i18n.t(stryMutAct_9fa48("1202") ? "" : (stryCov_9fa48("1202"), 'common:day_of_week_short_MONDAY')),
          [i18n.t(stryMutAct_9fa48("1203") ? "" : (stryCov_9fa48("1203"), 'common:day_of_week_TUESDAY'))]: i18n.t(stryMutAct_9fa48("1204") ? "" : (stryCov_9fa48("1204"), 'common:day_of_week_short_TUESDAY')),
          [i18n.t(stryMutAct_9fa48("1205") ? "" : (stryCov_9fa48("1205"), 'common:day_of_week_WEDNESDAY'))]: i18n.t(stryMutAct_9fa48("1206") ? "" : (stryCov_9fa48("1206"), 'common:day_of_week_short_WEDNESDAY')),
          [i18n.t(stryMutAct_9fa48("1207") ? "" : (stryCov_9fa48("1207"), 'common:day_of_week_THURSDAY'))]: i18n.t(stryMutAct_9fa48("1208") ? "" : (stryCov_9fa48("1208"), 'common:day_of_week_short_THURSDAY')),
          [i18n.t(stryMutAct_9fa48("1209") ? "" : (stryCov_9fa48("1209"), 'common:day_of_week_FRIDAY'))]: i18n.t(stryMutAct_9fa48("1210") ? "" : (stryCov_9fa48("1210"), 'common:day_of_week_short_FRIDAY')),
          [i18n.t(stryMutAct_9fa48("1211") ? "" : (stryCov_9fa48("1211"), 'common:day_of_week_SATURDAY'))]: i18n.t(stryMutAct_9fa48("1212") ? "" : (stryCov_9fa48("1212"), 'common:day_of_week_short_SATURDAY')),
          [i18n.t(stryMutAct_9fa48("1213") ? "" : (stryCov_9fa48("1213"), 'common:day_of_week_SUNDAY'))]: i18n.t(stryMutAct_9fa48("1214") ? "" : (stryCov_9fa48("1214"), 'common:day_of_week_short_SUNDAY'))
        });
        dayCells.forEach(cell => {
          if (stryMutAct_9fa48("1215")) {
            {}
          } else {
            stryCov_9fa48("1215");
            const fullName = stryMutAct_9fa48("1216") ? cell.textContent : (stryCov_9fa48("1216"), cell.textContent.trim());
            if (stryMutAct_9fa48("1218") ? false : stryMutAct_9fa48("1217") ? true : (stryCov_9fa48("1217", "1218"), dayMap[fullName])) {
              if (stryMutAct_9fa48("1219")) {
                {}
              } else {
                stryCov_9fa48("1219");
                cell.textContent = dayMap[fullName];
              }
            }
          }
        });
        const printWindow = window.open(stryMutAct_9fa48("1220") ? "Stryker was here!" : (stryCov_9fa48("1220"), ''), stryMutAct_9fa48("1221") ? "" : (stryCov_9fa48("1221"), '_blank'));
        printWindow.document.write(stryMutAct_9fa48("1222") ? `` : (stryCov_9fa48("1222"), `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${departmentName}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                    }
                    .title-block {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .semester-title {
                        font-size: 16px;
                        margin-bottom: 5px;
                    }
                    .department-title {
                        font-size: 18px;
                        font-weight: bold;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        font-size: 10px;
                    }
                    th, td {
                        border: 1px solid #d1d5db;
                        padding: 4px 6px;
                        text-align: center;
                        vertical-align: middle;
                    }
                    th {
                        background-color: #edeef1;
                        font-weight: bold;
                    }
                    
                    /* Day cell */
                    td.day-cell {
                        background-color: #e8f1f8;
                        font-weight: bold;
                        border-right: 2px solid #757575;
                        width: 25px;
                    }
                    
                    /* Class cell */
                    td.class-cell-wrapper {
                        border-right: 2px solid #bdbdbd;
                    }
                    
                    /* Week cell */
                    td.week-cell {
                        font-weight: bold;
                        color: #757575;
                        font-size: 9px;
                    }
                    
                    /* Row stripes */
                    tr.day-even td {
                        background-color: #ffffff;
                    }
                    tr.day-odd td {
                        background-color: #fafafa;
                    }
                    
                    /* Keep day-cell color */
                    tr.day-even td.day-cell,
                    tr.day-odd td.day-cell {
                        background-color: #e8f1f8;
                    }
                    
                    /* Border between days */
                    tr.day-last td {
                        border-bottom: 3px solid #757575;
                    }
                    
                    /* Border between classes */
                    tr.class-last td {
                        border-bottom: 2px solid #bdbdbd;
                    }
                    
                    /* Lesson content */
                    .empty-cell {
                        color: #ccc;
                    }
                    .lesson-cell {
                        text-align: center;
                    }
                    .lesson-cell .subject {
                        font-weight: 500;
                    }
                    .lesson-cell .group,
                    .lesson-cell .room {
                        font-size: 9px;
                        color: #666;
                    }
                    
                    /* Hide meeting links in print */
                    .meeting-link {
                        display: none;
                    }
                    
                    @media print {
                        body { padding: 10px; }
                    }
                </style>
            </head>
            <body>
                <div class="title-block">
                    <div class="semester-title">${semesterTitle}</div>
                    <div class="department-title">${departmentTitle}</div>
                </div>
                ${clonedTable.outerHTML}
            </body>
            </html>
        `));
        printWindow.document.close();
      }
    };
    return <a href="#" onClick={e => {
      if (stryMutAct_9fa48("1223")) {
        {}
      } else {
        stryCov_9fa48("1223");
        e.preventDefault();
        handlePrint();
      }
    }} className="pdf_link" style={stryMutAct_9fa48("1224") ? {} : (stryCov_9fa48("1224"), {
      color: stryMutAct_9fa48("1225") ? "" : (stryCov_9fa48("1225"), '-webkit-link')
    })}>
            <MdPictureAsPdf className="svg-btn" />
            {i18n.t(COMMON_DOWNLOAD_PDF)}
        </a>;
  }
};
export default DepartmentDownloadLink;