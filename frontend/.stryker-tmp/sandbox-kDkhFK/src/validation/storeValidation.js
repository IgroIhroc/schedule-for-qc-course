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
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { store } from '../store';
import i18n from '../i18n';
import { INTERSECT_TIME_ERROR_MESSAGE, UNIQUE_ERROR_MESSAGE } from '../constants/translationLabels/validationMessages';
export const checkUniqClassName = className => {
  if (stryMutAct_9fa48("8891")) {
    {}
  } else {
    stryCov_9fa48("8891");
    const classId = store.getState().classActions.classSchedule.id;
    let find = stryMutAct_9fa48("8892") ? true : (stryCov_9fa48("8892"), false);
    if (stryMutAct_9fa48("8894") ? false : stryMutAct_9fa48("8893") ? true : (stryCov_9fa48("8893", "8894"), classId)) {
      if (stryMutAct_9fa48("8895")) {
        {}
      } else {
        stryCov_9fa48("8895");
        find = stryMutAct_9fa48("8896") ? store.getState().classActions.classScheduler.every(value => {
          return value.class_name === className && value.id !== classId;
        }) : (stryCov_9fa48("8896"), store.getState().classActions.classScheduler.some(value => {
          if (stryMutAct_9fa48("8897")) {
            {}
          } else {
            stryCov_9fa48("8897");
            return stryMutAct_9fa48("8900") ? value.class_name === className || value.id !== classId : stryMutAct_9fa48("8899") ? false : stryMutAct_9fa48("8898") ? true : (stryCov_9fa48("8898", "8899", "8900"), (stryMutAct_9fa48("8902") ? value.class_name !== className : stryMutAct_9fa48("8901") ? true : (stryCov_9fa48("8901", "8902"), value.class_name === className)) && (stryMutAct_9fa48("8904") ? value.id === classId : stryMutAct_9fa48("8903") ? true : (stryCov_9fa48("8903", "8904"), value.id !== classId)));
          }
        }));
      }
    } else {
      if (stryMutAct_9fa48("8905")) {
        {}
      } else {
        stryCov_9fa48("8905");
        find = stryMutAct_9fa48("8906") ? store.getState().classActions.classScheduler.every(value => {
          return value.class_name === className;
        }) : (stryCov_9fa48("8906"), store.getState().classActions.classScheduler.some(value => {
          if (stryMutAct_9fa48("8907")) {
            {}
          } else {
            stryCov_9fa48("8907");
            return stryMutAct_9fa48("8910") ? value.class_name !== className : stryMutAct_9fa48("8909") ? false : stryMutAct_9fa48("8908") ? true : (stryCov_9fa48("8908", "8909", "8910"), value.class_name === className);
          }
        }));
      }
    }
    return find ? i18n.t(UNIQUE_ERROR_MESSAGE) : undefined;
  }
};
export const timeIntersectService = (startTime, endTime) => {
  if (stryMutAct_9fa48("8911")) {
    {}
  } else {
    stryCov_9fa48("8911");
    const classId = store.getState().classActions.classSchedule.id;
    const moment = extendMoment(Moment);
    let find = stryMutAct_9fa48("8912") ? true : (stryCov_9fa48("8912"), false);
    if (stryMutAct_9fa48("8915") ? startTime || endTime : stryMutAct_9fa48("8914") ? false : stryMutAct_9fa48("8913") ? true : (stryCov_9fa48("8913", "8914", "8915"), startTime && endTime)) {
      if (stryMutAct_9fa48("8916")) {
        {}
      } else {
        stryCov_9fa48("8916");
        const incomeRange = moment.range(moment(startTime, stryMutAct_9fa48("8917") ? "" : (stryCov_9fa48("8917"), 'HH:mm')).toDate(), moment(endTime, stryMutAct_9fa48("8918") ? "" : (stryCov_9fa48("8918"), 'HH:mm')).toDate());
        if (stryMutAct_9fa48("8920") ? false : stryMutAct_9fa48("8919") ? true : (stryCov_9fa48("8919", "8920"), classId)) {
          if (stryMutAct_9fa48("8921")) {
            {}
          } else {
            stryCov_9fa48("8921");
            find = stryMutAct_9fa48("8922") ? store.getState().classActions.classScheduler.every(value => {
              return incomeRange.intersect(moment.range(moment(value.startTime, 'HH:mm').toDate(), moment(value.endTime, 'HH:mm').toDate())) !== null && value.id !== classId;
            }) : (stryCov_9fa48("8922"), store.getState().classActions.classScheduler.some(value => {
              if (stryMutAct_9fa48("8923")) {
                {}
              } else {
                stryCov_9fa48("8923");
                return stryMutAct_9fa48("8926") ? incomeRange.intersect(moment.range(moment(value.startTime, 'HH:mm').toDate(), moment(value.endTime, 'HH:mm').toDate())) !== null || value.id !== classId : stryMutAct_9fa48("8925") ? false : stryMutAct_9fa48("8924") ? true : (stryCov_9fa48("8924", "8925", "8926"), (stryMutAct_9fa48("8928") ? incomeRange.intersect(moment.range(moment(value.startTime, 'HH:mm').toDate(), moment(value.endTime, 'HH:mm').toDate())) === null : stryMutAct_9fa48("8927") ? true : (stryCov_9fa48("8927", "8928"), incomeRange.intersect(moment.range(moment(value.startTime, stryMutAct_9fa48("8929") ? "" : (stryCov_9fa48("8929"), 'HH:mm')).toDate(), moment(value.endTime, stryMutAct_9fa48("8930") ? "" : (stryCov_9fa48("8930"), 'HH:mm')).toDate())) !== null)) && (stryMutAct_9fa48("8932") ? value.id === classId : stryMutAct_9fa48("8931") ? true : (stryCov_9fa48("8931", "8932"), value.id !== classId)));
              }
            }));
          }
        } else {
          if (stryMutAct_9fa48("8933")) {
            {}
          } else {
            stryCov_9fa48("8933");
            find = stryMutAct_9fa48("8934") ? store.getState().classActions.classScheduler.every(value => {
              return incomeRange.intersect(moment.range(moment(value.startTime, 'HH:mm').toDate(), moment(value.endTime, 'HH:mm').toDate())) !== null;
            }) : (stryCov_9fa48("8934"), store.getState().classActions.classScheduler.some(value => {
              if (stryMutAct_9fa48("8935")) {
                {}
              } else {
                stryCov_9fa48("8935");
                return stryMutAct_9fa48("8938") ? incomeRange.intersect(moment.range(moment(value.startTime, 'HH:mm').toDate(), moment(value.endTime, 'HH:mm').toDate())) === null : stryMutAct_9fa48("8937") ? false : stryMutAct_9fa48("8936") ? true : (stryCov_9fa48("8936", "8937", "8938"), incomeRange.intersect(moment.range(moment(value.startTime, stryMutAct_9fa48("8939") ? "" : (stryCov_9fa48("8939"), 'HH:mm')).toDate(), moment(value.endTime, stryMutAct_9fa48("8940") ? "" : (stryCov_9fa48("8940"), 'HH:mm')).toDate())) !== null);
              }
            }));
          }
        }
      }
    }
    return find ? i18n.t(INTERSECT_TIME_ERROR_MESSAGE) : undefined;
  }
};
export const checkUniqLesson = (lessons, currentLesson) => {
  if (stryMutAct_9fa48("8941")) {
    {}
  } else {
    stryCov_9fa48("8941");
    if (stryMutAct_9fa48("8944") ? false : stryMutAct_9fa48("8943") ? true : stryMutAct_9fa48("8942") ? currentLesson?.id : (stryCov_9fa48("8942", "8943", "8944"), !(stryMutAct_9fa48("8945") ? currentLesson.id : (stryCov_9fa48("8945"), currentLesson?.id)))) {
      if (stryMutAct_9fa48("8946")) {
        {}
      } else {
        stryCov_9fa48("8946");
        return stryMutAct_9fa48("8947") ? lessons.find(lesson => lesson.subject.id === +currentLesson.subject.id && lesson.teacher.id === +currentLesson.teacher.id && lesson.lessonType === currentLesson.lessonType) : (stryCov_9fa48("8947"), !lessons.find(stryMutAct_9fa48("8948") ? () => undefined : (stryCov_9fa48("8948"), lesson => stryMutAct_9fa48("8951") ? lesson.subject.id === +currentLesson.subject.id && lesson.teacher.id === +currentLesson.teacher.id || lesson.lessonType === currentLesson.lessonType : stryMutAct_9fa48("8950") ? false : stryMutAct_9fa48("8949") ? true : (stryCov_9fa48("8949", "8950", "8951"), (stryMutAct_9fa48("8953") ? lesson.subject.id === +currentLesson.subject.id || lesson.teacher.id === +currentLesson.teacher.id : stryMutAct_9fa48("8952") ? true : (stryCov_9fa48("8952", "8953"), (stryMutAct_9fa48("8955") ? lesson.subject.id !== +currentLesson.subject.id : stryMutAct_9fa48("8954") ? true : (stryCov_9fa48("8954", "8955"), lesson.subject.id === (stryMutAct_9fa48("8956") ? -currentLesson.subject.id : (stryCov_9fa48("8956"), +currentLesson.subject.id)))) && (stryMutAct_9fa48("8958") ? lesson.teacher.id !== +currentLesson.teacher.id : stryMutAct_9fa48("8957") ? true : (stryCov_9fa48("8957", "8958"), lesson.teacher.id === (stryMutAct_9fa48("8959") ? -currentLesson.teacher.id : (stryCov_9fa48("8959"), +currentLesson.teacher.id)))))) && (stryMutAct_9fa48("8961") ? lesson.lessonType !== currentLesson.lessonType : stryMutAct_9fa48("8960") ? true : (stryCov_9fa48("8960", "8961"), lesson.lessonType === currentLesson.lessonType))))));
      }
    }
    return stryMutAct_9fa48("8962") ? lessons.find(lesson => lesson.subject.id === +currentLesson.subject.id && lesson.teacher.id === +currentLesson.teacher.id && lesson.lessonType === currentLesson.lessonType && lesson.id !== +currentLesson.id) : (stryCov_9fa48("8962"), !lessons.find(stryMutAct_9fa48("8963") ? () => undefined : (stryCov_9fa48("8963"), lesson => stryMutAct_9fa48("8966") ? lesson.subject.id === +currentLesson.subject.id && lesson.teacher.id === +currentLesson.teacher.id && lesson.lessonType === currentLesson.lessonType || lesson.id !== +currentLesson.id : stryMutAct_9fa48("8965") ? false : stryMutAct_9fa48("8964") ? true : (stryCov_9fa48("8964", "8965", "8966"), (stryMutAct_9fa48("8968") ? lesson.subject.id === +currentLesson.subject.id && lesson.teacher.id === +currentLesson.teacher.id || lesson.lessonType === currentLesson.lessonType : stryMutAct_9fa48("8967") ? true : (stryCov_9fa48("8967", "8968"), (stryMutAct_9fa48("8970") ? lesson.subject.id === +currentLesson.subject.id || lesson.teacher.id === +currentLesson.teacher.id : stryMutAct_9fa48("8969") ? true : (stryCov_9fa48("8969", "8970"), (stryMutAct_9fa48("8972") ? lesson.subject.id !== +currentLesson.subject.id : stryMutAct_9fa48("8971") ? true : (stryCov_9fa48("8971", "8972"), lesson.subject.id === (stryMutAct_9fa48("8973") ? -currentLesson.subject.id : (stryCov_9fa48("8973"), +currentLesson.subject.id)))) && (stryMutAct_9fa48("8975") ? lesson.teacher.id !== +currentLesson.teacher.id : stryMutAct_9fa48("8974") ? true : (stryCov_9fa48("8974", "8975"), lesson.teacher.id === (stryMutAct_9fa48("8976") ? -currentLesson.teacher.id : (stryCov_9fa48("8976"), +currentLesson.teacher.id)))))) && (stryMutAct_9fa48("8978") ? lesson.lessonType !== currentLesson.lessonType : stryMutAct_9fa48("8977") ? true : (stryCov_9fa48("8977", "8978"), lesson.lessonType === currentLesson.lessonType)))) && (stryMutAct_9fa48("8980") ? lesson.id === +currentLesson.id : stryMutAct_9fa48("8979") ? true : (stryCov_9fa48("8979", "8980"), lesson.id !== (stryMutAct_9fa48("8981") ? -currentLesson.id : (stryCov_9fa48("8981"), +currentLesson.id))))))));
  }
};
export const checkUniqueRoomName = roomName => {
  if (stryMutAct_9fa48("8982")) {
    {}
  } else {
    stryCov_9fa48("8982");
    const roomdId = store.getState().rooms.oneRoom.id;
    let find = stryMutAct_9fa48("8983") ? true : (stryCov_9fa48("8983"), false);
    if (stryMutAct_9fa48("8985") ? false : stryMutAct_9fa48("8984") ? true : (stryCov_9fa48("8984", "8985"), roomdId)) {
      if (stryMutAct_9fa48("8986")) {
        {}
      } else {
        stryCov_9fa48("8986");
        find = stryMutAct_9fa48("8987") ? store.getState().rooms.rooms.every(value => {
          return value.name.toUpperCase() === roomName.toUpperCase() && value.id !== roomdId;
        }) : (stryCov_9fa48("8987"), store.getState().rooms.rooms.some(value => {
          if (stryMutAct_9fa48("8988")) {
            {}
          } else {
            stryCov_9fa48("8988");
            return stryMutAct_9fa48("8991") ? value.name.toUpperCase() === roomName.toUpperCase() || value.id !== roomdId : stryMutAct_9fa48("8990") ? false : stryMutAct_9fa48("8989") ? true : (stryCov_9fa48("8989", "8990", "8991"), (stryMutAct_9fa48("8993") ? value.name.toUpperCase() !== roomName.toUpperCase() : stryMutAct_9fa48("8992") ? true : (stryCov_9fa48("8992", "8993"), (stryMutAct_9fa48("8994") ? value.name.toLowerCase() : (stryCov_9fa48("8994"), value.name.toUpperCase())) === (stryMutAct_9fa48("8995") ? roomName.toLowerCase() : (stryCov_9fa48("8995"), roomName.toUpperCase())))) && (stryMutAct_9fa48("8997") ? value.id === roomdId : stryMutAct_9fa48("8996") ? true : (stryCov_9fa48("8996", "8997"), value.id !== roomdId)));
          }
        }));
      }
    } else {
      if (stryMutAct_9fa48("8998")) {
        {}
      } else {
        stryCov_9fa48("8998");
        find = stryMutAct_9fa48("8999") ? store.getState().rooms.rooms.every(value => {
          return value.name.toUpperCase() === roomName.toUpperCase();
        }) : (stryCov_9fa48("8999"), store.getState().rooms.rooms.some(value => {
          if (stryMutAct_9fa48("9000")) {
            {}
          } else {
            stryCov_9fa48("9000");
            return stryMutAct_9fa48("9003") ? value.name.toUpperCase() !== roomName.toUpperCase() : stryMutAct_9fa48("9002") ? false : stryMutAct_9fa48("9001") ? true : (stryCov_9fa48("9001", "9002", "9003"), (stryMutAct_9fa48("9004") ? value.name.toLowerCase() : (stryCov_9fa48("9004"), value.name.toUpperCase())) === (stryMutAct_9fa48("9005") ? roomName.toLowerCase() : (stryCov_9fa48("9005"), roomName.toUpperCase())));
          }
        }));
      }
    }
    return find ? i18n.t(UNIQUE_ERROR_MESSAGE) : undefined;
  }
};
export const checkUniqueGroup = groupTitle => {
  if (stryMutAct_9fa48("9006")) {
    {}
  } else {
    stryCov_9fa48("9006");
    if (stryMutAct_9fa48("9009") ? false : stryMutAct_9fa48("9008") ? true : stryMutAct_9fa48("9007") ? groupTitle : (stryCov_9fa48("9007", "9008", "9009"), !groupTitle)) {
      if (stryMutAct_9fa48("9010")) {
        {}
      } else {
        stryCov_9fa48("9010");
        return undefined;
      }
    }
    const find = stryMutAct_9fa48("9011") ? store.getState().groups.groups.every(value => {
      return value.title.toUpperCase().trim() === groupTitle.toUpperCase().trim();
    }) : (stryCov_9fa48("9011"), store.getState().groups.groups.some(value => {
      if (stryMutAct_9fa48("9012")) {
        {}
      } else {
        stryCov_9fa48("9012");
        return stryMutAct_9fa48("9015") ? value.title.toUpperCase().trim() !== groupTitle.toUpperCase().trim() : stryMutAct_9fa48("9014") ? false : stryMutAct_9fa48("9013") ? true : (stryCov_9fa48("9013", "9014", "9015"), (stryMutAct_9fa48("9017") ? value.title.toLowerCase().trim() : stryMutAct_9fa48("9016") ? value.title.toUpperCase() : (stryCov_9fa48("9016", "9017"), value.title.toUpperCase().trim())) === (stryMutAct_9fa48("9019") ? groupTitle.toLowerCase().trim() : stryMutAct_9fa48("9018") ? groupTitle.toUpperCase() : (stryCov_9fa48("9018", "9019"), groupTitle.toUpperCase().trim())));
      }
    }));
    return find ? i18n.t(UNIQUE_ERROR_MESSAGE) : undefined;
  }
};
export const checkUniqueSubject = subjectTitle => {
  if (stryMutAct_9fa48("9020")) {
    {}
  } else {
    stryCov_9fa48("9020");
    if (stryMutAct_9fa48("9023") ? false : stryMutAct_9fa48("9022") ? true : stryMutAct_9fa48("9021") ? subjectTitle : (stryCov_9fa48("9021", "9022", "9023"), !subjectTitle)) {
      if (stryMutAct_9fa48("9024")) {
        {}
      } else {
        stryCov_9fa48("9024");
        return undefined;
      }
    }
    const find = stryMutAct_9fa48("9025") ? store.getState().subjects.subjects.every(value => {
      return value.name.toUpperCase().trim() === subjectTitle.toUpperCase().trim();
    }) : (stryCov_9fa48("9025"), store.getState().subjects.subjects.some(value => {
      if (stryMutAct_9fa48("9026")) {
        {}
      } else {
        stryCov_9fa48("9026");
        return stryMutAct_9fa48("9029") ? value.name.toUpperCase().trim() !== subjectTitle.toUpperCase().trim() : stryMutAct_9fa48("9028") ? false : stryMutAct_9fa48("9027") ? true : (stryCov_9fa48("9027", "9028", "9029"), (stryMutAct_9fa48("9031") ? value.name.toLowerCase().trim() : stryMutAct_9fa48("9030") ? value.name.toUpperCase() : (stryCov_9fa48("9030", "9031"), value.name.toUpperCase().trim())) === (stryMutAct_9fa48("9033") ? subjectTitle.toLowerCase().trim() : stryMutAct_9fa48("9032") ? subjectTitle.toUpperCase() : (stryCov_9fa48("9032", "9033"), subjectTitle.toUpperCase().trim())));
      }
    }));
    return find ? i18n.t(UNIQUE_ERROR_MESSAGE) : undefined;
  }
};
export const checkUniqueDepartment = departmentTitle => {
  if (stryMutAct_9fa48("9034")) {
    {}
  } else {
    stryCov_9fa48("9034");
    if (stryMutAct_9fa48("9037") ? false : stryMutAct_9fa48("9036") ? true : stryMutAct_9fa48("9035") ? departmentTitle : (stryCov_9fa48("9035", "9036", "9037"), !departmentTitle)) {
      if (stryMutAct_9fa48("9038")) {
        {}
      } else {
        stryCov_9fa48("9038");
        return undefined;
      }
    }
    const find = stryMutAct_9fa48("9039") ? store.getState().departments.departments.every(value => {
      return value.name.toUpperCase().trim() === departmentTitle.toUpperCase().trim();
    }) : (stryCov_9fa48("9039"), store.getState().departments.departments.some(value => {
      if (stryMutAct_9fa48("9040")) {
        {}
      } else {
        stryCov_9fa48("9040");
        return stryMutAct_9fa48("9043") ? value.name.toUpperCase().trim() !== departmentTitle.toUpperCase().trim() : stryMutAct_9fa48("9042") ? false : stryMutAct_9fa48("9041") ? true : (stryCov_9fa48("9041", "9042", "9043"), (stryMutAct_9fa48("9045") ? value.name.toLowerCase().trim() : stryMutAct_9fa48("9044") ? value.name.toUpperCase() : (stryCov_9fa48("9044", "9045"), value.name.toUpperCase().trim())) === (stryMutAct_9fa48("9047") ? departmentTitle.toLowerCase().trim() : stryMutAct_9fa48("9046") ? departmentTitle.toUpperCase() : (stryCov_9fa48("9046", "9047"), departmentTitle.toUpperCase().trim())));
      }
    }));
    return find ? i18n.t(UNIQUE_ERROR_MESSAGE) : undefined;
  }
};
export const checkUniqSemester = semester => {
  if (stryMutAct_9fa48("9048")) {
    {}
  } else {
    stryCov_9fa48("9048");
    const {
      semesters
    } = store.getState().semesters;
    let isNotUnique;
    if (stryMutAct_9fa48("9051") ? false : stryMutAct_9fa48("9050") ? true : stryMutAct_9fa48("9049") ? semester.id : (stryCov_9fa48("9049", "9050", "9051"), !semester.id)) {
      if (stryMutAct_9fa48("9052")) {
        {}
      } else {
        stryCov_9fa48("9052");
        isNotUnique = stryMutAct_9fa48("9053") ? !semesters.find(storeSemester => storeSemester.year === +semester.year && storeSemester.description.toUpperCase().trim() === semester.description.toUpperCase().trim()) : (stryCov_9fa48("9053"), !(stryMutAct_9fa48("9054") ? semesters.find(storeSemester => storeSemester.year === +semester.year && storeSemester.description.toUpperCase().trim() === semester.description.toUpperCase().trim()) : (stryCov_9fa48("9054"), !semesters.find(stryMutAct_9fa48("9055") ? () => undefined : (stryCov_9fa48("9055"), storeSemester => stryMutAct_9fa48("9058") ? storeSemester.year === +semester.year || storeSemester.description.toUpperCase().trim() === semester.description.toUpperCase().trim() : stryMutAct_9fa48("9057") ? false : stryMutAct_9fa48("9056") ? true : (stryCov_9fa48("9056", "9057", "9058"), (stryMutAct_9fa48("9060") ? storeSemester.year !== +semester.year : stryMutAct_9fa48("9059") ? true : (stryCov_9fa48("9059", "9060"), storeSemester.year === (stryMutAct_9fa48("9061") ? -semester.year : (stryCov_9fa48("9061"), +semester.year)))) && (stryMutAct_9fa48("9063") ? storeSemester.description.toUpperCase().trim() !== semester.description.toUpperCase().trim() : stryMutAct_9fa48("9062") ? true : (stryCov_9fa48("9062", "9063"), (stryMutAct_9fa48("9065") ? storeSemester.description.toLowerCase().trim() : stryMutAct_9fa48("9064") ? storeSemester.description.toUpperCase() : (stryCov_9fa48("9064", "9065"), storeSemester.description.toUpperCase().trim())) === (stryMutAct_9fa48("9067") ? semester.description.toLowerCase().trim() : stryMutAct_9fa48("9066") ? semester.description.toUpperCase() : (stryCov_9fa48("9066", "9067"), semester.description.toUpperCase().trim()))))))))));
      }
    } else {
      if (stryMutAct_9fa48("9068")) {
        {}
      } else {
        stryCov_9fa48("9068");
        isNotUnique = stryMutAct_9fa48("9069") ? !semesters.find(storeSemester => storeSemester.year === +semester.year && storeSemester.description.toUpperCase().trim() === semester.description.toUpperCase().trim() && storeSemester.id !== +semester.id) : (stryCov_9fa48("9069"), !(stryMutAct_9fa48("9070") ? semesters.find(storeSemester => storeSemester.year === +semester.year && storeSemester.description.toUpperCase().trim() === semester.description.toUpperCase().trim() && storeSemester.id !== +semester.id) : (stryCov_9fa48("9070"), !semesters.find(stryMutAct_9fa48("9071") ? () => undefined : (stryCov_9fa48("9071"), storeSemester => stryMutAct_9fa48("9074") ? storeSemester.year === +semester.year && storeSemester.description.toUpperCase().trim() === semester.description.toUpperCase().trim() || storeSemester.id !== +semester.id : stryMutAct_9fa48("9073") ? false : stryMutAct_9fa48("9072") ? true : (stryCov_9fa48("9072", "9073", "9074"), (stryMutAct_9fa48("9076") ? storeSemester.year === +semester.year || storeSemester.description.toUpperCase().trim() === semester.description.toUpperCase().trim() : stryMutAct_9fa48("9075") ? true : (stryCov_9fa48("9075", "9076"), (stryMutAct_9fa48("9078") ? storeSemester.year !== +semester.year : stryMutAct_9fa48("9077") ? true : (stryCov_9fa48("9077", "9078"), storeSemester.year === (stryMutAct_9fa48("9079") ? -semester.year : (stryCov_9fa48("9079"), +semester.year)))) && (stryMutAct_9fa48("9081") ? storeSemester.description.toUpperCase().trim() !== semester.description.toUpperCase().trim() : stryMutAct_9fa48("9080") ? true : (stryCov_9fa48("9080", "9081"), (stryMutAct_9fa48("9083") ? storeSemester.description.toLowerCase().trim() : stryMutAct_9fa48("9082") ? storeSemester.description.toUpperCase() : (stryCov_9fa48("9082", "9083"), storeSemester.description.toUpperCase().trim())) === (stryMutAct_9fa48("9085") ? semester.description.toLowerCase().trim() : stryMutAct_9fa48("9084") ? semester.description.toUpperCase() : (stryCov_9fa48("9084", "9085"), semester.description.toUpperCase().trim())))))) && (stryMutAct_9fa48("9087") ? storeSemester.id === +semester.id : stryMutAct_9fa48("9086") ? true : (stryCov_9fa48("9086", "9087"), storeSemester.id !== (stryMutAct_9fa48("9088") ? -semester.id : (stryCov_9fa48("9088"), +semester.id))))))))));
      }
    }
    return stryMutAct_9fa48("9089") ? isNotUnique : (stryCov_9fa48("9089"), !isNotUnique);
  }
};