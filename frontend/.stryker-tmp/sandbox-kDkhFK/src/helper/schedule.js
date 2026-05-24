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
import { isEmpty } from 'lodash';
const hoverLineClassName = stryMutAct_9fa48("6249") ? "" : (stryCov_9fa48("6249"), 'hover-line');
export const divideLessonsByOneHourLesson = (items, lessons) => {
  if (stryMutAct_9fa48("6250")) {
    {}
  } else {
    stryCov_9fa48("6250");
    const lessonItem = stryMutAct_9fa48("6251") ? ["Stryker was here"] : (stryCov_9fa48("6251"), []);
    lessons.forEach(lesson => {
      if (stryMutAct_9fa48("6252")) {
        {}
      } else {
        stryCov_9fa48("6252");
        let filteredLesson = stryMutAct_9fa48("6253") ? ["Stryker was here"] : (stryCov_9fa48("6253"), []);
        const modifiedLesson = lesson;
        const {
          hours
        } = modifiedLesson;
        if (stryMutAct_9fa48("6256") ? false : stryMutAct_9fa48("6255") ? true : stryMutAct_9fa48("6254") ? isEmpty(items) : (stryCov_9fa48("6254", "6255", "6256"), !isEmpty(items))) {
          if (stryMutAct_9fa48("6257")) {
            {}
          } else {
            stryCov_9fa48("6257");
            filteredLesson = stryMutAct_9fa48("6258") ? items : (stryCov_9fa48("6258"), items.filter(stryMutAct_9fa48("6259") ? () => undefined : (stryCov_9fa48("6259"), item => stryMutAct_9fa48("6262") ? item.lesson.id !== lesson.id : stryMutAct_9fa48("6261") ? false : stryMutAct_9fa48("6260") ? true : (stryCov_9fa48("6260", "6261", "6262"), item.lesson.id === lesson.id))));
          }
        }
        for (let i = 0; stryMutAct_9fa48("6265") ? i >= hours - filteredLesson.length : stryMutAct_9fa48("6264") ? i <= hours - filteredLesson.length : stryMutAct_9fa48("6263") ? false : (stryCov_9fa48("6263", "6264", "6265"), i < (stryMutAct_9fa48("6266") ? hours + filteredLesson.length : (stryCov_9fa48("6266"), hours - filteredLesson.length))); stryMutAct_9fa48("6267") ? i -= 1 : (stryCov_9fa48("6267"), i += 1)) {
          if (stryMutAct_9fa48("6268")) {
            {}
          } else {
            stryCov_9fa48("6268");
            lessonItem.push(modifiedLesson);
          }
        }
      }
    });
    return lessonItem;
  }
};
export const addClassDayBoard = (dayName, classId) => {
  if (stryMutAct_9fa48("6269")) {
    {}
  } else {
    stryCov_9fa48("6269");
    const dayClassWeek = document.querySelectorAll(stryMutAct_9fa48("6270") ? `` : (stryCov_9fa48("6270"), `.${dayName}-${classId}`));
    const dayClass = document.querySelector(stryMutAct_9fa48("6271") ? `` : (stryCov_9fa48("6271"), `#${dayName}-${classId}`));
    dayClass.classList.add(stryMutAct_9fa48("6272") ? "" : (stryCov_9fa48("6272"), 'focus-class'));
    dayClassWeek[0].classList.add(hoverLineClassName);
    dayClassWeek[1].classList.add(hoverLineClassName);
  }
};
export const removeClassDayBoard = (dayName, classId) => {
  if (stryMutAct_9fa48("6273")) {
    {}
  } else {
    stryCov_9fa48("6273");
    const dayClassWeek = document.querySelectorAll(stryMutAct_9fa48("6274") ? `` : (stryCov_9fa48("6274"), `.${dayName}-${classId}`));
    const dayClass = document.querySelector(stryMutAct_9fa48("6275") ? `` : (stryCov_9fa48("6275"), `#${dayName}-${classId}`));
    dayClass.classList.remove(stryMutAct_9fa48("6276") ? "" : (stryCov_9fa48("6276"), 'focus-class'));
    dayClassWeek[0].classList.remove(hoverLineClassName);
    dayClassWeek[1].classList.remove(hoverLineClassName);
  }
};
export const getColorByFullness = (array = stryMutAct_9fa48("6277") ? ["Stryker was here"] : (stryCov_9fa48("6277"), [])) => {
  if (stryMutAct_9fa48("6278")) {
    {}
  } else {
    stryCov_9fa48("6278");
    let color = isEmpty(array) ? stryMutAct_9fa48("6279") ? "" : (stryCov_9fa48("6279"), 'available') : stryMutAct_9fa48("6280") ? "" : (stryCov_9fa48("6280"), 'allow');
    let prevLesson = stryMutAct_9fa48("6281") ? {} : (stryCov_9fa48("6281"), {
      teacherName: stryMutAct_9fa48("6282") ? array[0].teacher_for_site : (stryCov_9fa48("6282"), array[0]?.teacher_for_site),
      lessonName: stryMutAct_9fa48("6283") ? array[0].subject_for_site : (stryCov_9fa48("6283"), array[0]?.subject_for_site)
    });
    array.forEach(lesson => {
      if (stryMutAct_9fa48("6284")) {
        {}
      } else {
        stryCov_9fa48("6284");
        const isTeacherNameTheSame = stryMutAct_9fa48("6287") ? lesson.teacher_for_site !== prevLesson.teacherName : stryMutAct_9fa48("6286") ? false : stryMutAct_9fa48("6285") ? true : (stryCov_9fa48("6285", "6286", "6287"), lesson.teacher_for_site === prevLesson.teacherName);
        const isLessonNotTheSame = stryMutAct_9fa48("6290") ? lesson.subject_for_site === prevLesson.lessonName : stryMutAct_9fa48("6289") ? false : stryMutAct_9fa48("6288") ? true : (stryCov_9fa48("6288", "6289", "6290"), lesson.subject_for_site !== prevLesson.lessonName);
        if (stryMutAct_9fa48("6293") ? isLessonNotTheSame || isTeacherNameTheSame : stryMutAct_9fa48("6292") ? false : stryMutAct_9fa48("6291") ? true : (stryCov_9fa48("6291", "6292", "6293"), isLessonNotTheSame && isTeacherNameTheSame)) {
          if (stryMutAct_9fa48("6294")) {
            {}
          } else {
            stryCov_9fa48("6294");
            color = stryMutAct_9fa48("6295") ? "" : (stryCov_9fa48("6295"), 'possible');
          }
        }
        if (stryMutAct_9fa48("6298") ? false : stryMutAct_9fa48("6297") ? true : stryMutAct_9fa48("6296") ? isTeacherNameTheSame : (stryCov_9fa48("6296", "6297", "6298"), !isTeacherNameTheSame)) {
          if (stryMutAct_9fa48("6299")) {
            {}
          } else {
            stryCov_9fa48("6299");
            color = stryMutAct_9fa48("6300") ? "" : (stryCov_9fa48("6300"), 'not-allow');
          }
        }
        prevLesson = stryMutAct_9fa48("6301") ? {} : (stryCov_9fa48("6301"), {
          teacherName: lesson.teacher_for_site,
          lessonName: lesson.subject_for_site
        });
      }
    });
    return color;
  }
};