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
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DeleteIcon from '@material-ui/icons/Delete';
import './LessonsTable.scss';
import LessonGroupRow from './LessonGroupRow';
const getCommonLink = lessons => {
  if (stryMutAct_9fa48("3154")) {
    {}
  } else {
    stryCov_9fa48("3154");
    if (stryMutAct_9fa48("3157") ? lessons.length !== 0 : stryMutAct_9fa48("3156") ? false : stryMutAct_9fa48("3155") ? true : (stryCov_9fa48("3155", "3156", "3157"), lessons.length === 0)) return null;
    if (stryMutAct_9fa48("3160") ? false : stryMutAct_9fa48("3159") ? true : stryMutAct_9fa48("3158") ? lessons.every(lesson => lesson.linkToMeeting) : (stryCov_9fa48("3158", "3159", "3160"), !(stryMutAct_9fa48("3161") ? lessons.some(lesson => lesson.linkToMeeting) : (stryCov_9fa48("3161"), lessons.every(stryMutAct_9fa48("3162") ? () => undefined : (stryCov_9fa48("3162"), lesson => lesson.linkToMeeting)))))) return null;
    const firstLink = lessons[0].linkToMeeting;
    return (stryMutAct_9fa48("3163") ? lessons.some(lesson => lesson.linkToMeeting === firstLink) : (stryCov_9fa48("3163"), lessons.every(stryMutAct_9fa48("3164") ? () => undefined : (stryCov_9fa48("3164"), lesson => stryMutAct_9fa48("3167") ? lesson.linkToMeeting !== firstLink : stryMutAct_9fa48("3166") ? false : stryMutAct_9fa48("3165") ? true : (stryCov_9fa48("3165", "3166", "3167"), lesson.linkToMeeting === firstLink))))) ? firstLink : null;
  }
};
const LessonsTable = ({
  lessons,
  onUpdateLink,
  selectedTeacher,
  onUnsavedChanges,
  t
}) => {
  if (stryMutAct_9fa48("3168")) {
    {}
  } else {
    stryCov_9fa48("3168");
    const [expandedSubjects, setExpandedSubjects] = useState({});
    const [subjectLinks, setSubjectLinks] = useState({});
    const [globalLink, setGlobalLink] = useState(stryMutAct_9fa48("3169") ? "Stryker was here!" : (stryCov_9fa48("3169"), ''));
    const [rowLinks, setRowLinks] = useState({});
    const groupedBySubject = useMemo(() => {
      if (stryMutAct_9fa48("3170")) {
        {}
      } else {
        stryCov_9fa48("3170");
        const subjects = {};
        lessons.forEach(lesson => {
          if (stryMutAct_9fa48("3171")) {
            {}
          } else {
            stryCov_9fa48("3171");
            const subjectName = stryMutAct_9fa48("3174") ? lesson.subject?.name && '' : stryMutAct_9fa48("3173") ? false : stryMutAct_9fa48("3172") ? true : (stryCov_9fa48("3172", "3173", "3174"), (stryMutAct_9fa48("3175") ? lesson.subject.name : (stryCov_9fa48("3175"), lesson.subject?.name)) || (stryMutAct_9fa48("3176") ? "Stryker was here!" : (stryCov_9fa48("3176"), '')));
            const subjectId = stryMutAct_9fa48("3177") ? lesson.subject.id : (stryCov_9fa48("3177"), lesson.subject?.id);
            const lessonType = stryMutAct_9fa48("3180") ? lesson.lessonType && '' : stryMutAct_9fa48("3179") ? false : stryMutAct_9fa48("3178") ? true : (stryCov_9fa48("3178", "3179", "3180"), lesson.lessonType || (stryMutAct_9fa48("3181") ? "Stryker was here!" : (stryCov_9fa48("3181"), '')));
            if (stryMutAct_9fa48("3184") ? false : stryMutAct_9fa48("3183") ? true : stryMutAct_9fa48("3182") ? subjects[subjectName] : (stryCov_9fa48("3182", "3183", "3184"), !subjects[subjectName])) {
              if (stryMutAct_9fa48("3185")) {
                {}
              } else {
                stryCov_9fa48("3185");
                subjects[subjectName] = stryMutAct_9fa48("3186") ? {} : (stryCov_9fa48("3186"), {
                  subjectName,
                  subjectId,
                  semesterId: lesson.semesterId,
                  types: {}
                });
              }
            }
            if (stryMutAct_9fa48("3189") ? false : stryMutAct_9fa48("3188") ? true : stryMutAct_9fa48("3187") ? subjects[subjectName].types[lessonType] : (stryCov_9fa48("3187", "3188", "3189"), !subjects[subjectName].types[lessonType])) {
              if (stryMutAct_9fa48("3190")) {
                {}
              } else {
                stryCov_9fa48("3190");
                subjects[subjectName].types[lessonType] = stryMutAct_9fa48("3191") ? {} : (stryCov_9fa48("3191"), {
                  subjectName,
                  subjectForSite: lesson.subjectForSite,
                  subjectId,
                  lessonType,
                  semesterId: lesson.semesterId,
                  grouped: lesson.grouped,
                  linkToMeeting: lesson.linkToMeeting,
                  lessons: stryMutAct_9fa48("3192") ? ["Stryker was here"] : (stryCov_9fa48("3192"), [])
                });
              }
            }
            subjects[subjectName].types[lessonType].lessons.push(lesson);
          }
        });
        return stryMutAct_9fa48("3193") ? Object.values(subjects) : (stryCov_9fa48("3193"), Object.values(subjects).sort(stryMutAct_9fa48("3194") ? () => undefined : (stryCov_9fa48("3194"), (a, b) => a.subjectName.localeCompare(b.subjectName, stryMutAct_9fa48("3195") ? "" : (stryCov_9fa48("3195"), 'uk')))));
      }
    }, stryMutAct_9fa48("3196") ? [] : (stryCov_9fa48("3196"), [lessons]));
    const getSubjectCommonLink = useCallback(subject => {
      if (stryMutAct_9fa48("3197")) {
        {}
      } else {
        stryCov_9fa48("3197");
        const allLessons = Object.values(subject.types).flatMap(stryMutAct_9fa48("3198") ? () => undefined : (stryCov_9fa48("3198"), type => type.lessons));
        return getCommonLink(allLessons);
      }
    }, stryMutAct_9fa48("3199") ? ["Stryker was here"] : (stryCov_9fa48("3199"), []));
    const globalCommonLink = useMemo(stryMutAct_9fa48("3200") ? () => undefined : (stryCov_9fa48("3200"), () => getCommonLink(lessons)), stryMutAct_9fa48("3201") ? [] : (stryCov_9fa48("3201"), [lessons]));

    // Ініціалізація rowLinks
    useEffect(() => {
      if (stryMutAct_9fa48("3202")) {
        {}
      } else {
        stryCov_9fa48("3202");
        const newRowLinks = {};
        groupedBySubject.forEach(subject => {
          if (stryMutAct_9fa48("3203")) {
            {}
          } else {
            stryCov_9fa48("3203");
            Object.values(subject.types).forEach(group => {
              if (stryMutAct_9fa48("3204")) {
                {}
              } else {
                stryCov_9fa48("3204");
                const groupKey = stryMutAct_9fa48("3205") ? `` : (stryCov_9fa48("3205"), `${group.subjectName}_${group.lessonType}`);
                const commonLink = getCommonLink(group.lessons);
                newRowLinks[groupKey] = stryMutAct_9fa48("3208") ? commonLink && '' : stryMutAct_9fa48("3207") ? false : stryMutAct_9fa48("3206") ? true : (stryCov_9fa48("3206", "3207", "3208"), commonLink || (stryMutAct_9fa48("3209") ? "Stryker was here!" : (stryCov_9fa48("3209"), '')));
              }
            });
          }
        });
        setRowLinks(newRowLinks);
      }
    }, stryMutAct_9fa48("3210") ? [] : (stryCov_9fa48("3210"), [groupedBySubject]));
    useEffect(() => {
      if (stryMutAct_9fa48("3211")) {
        {}
      } else {
        stryCov_9fa48("3211");
        const newSubjectLinks = {};
        groupedBySubject.forEach(subject => {
          if (stryMutAct_9fa48("3212")) {
            {}
          } else {
            stryCov_9fa48("3212");
            newSubjectLinks[subject.subjectName] = stryMutAct_9fa48("3215") ? getSubjectCommonLink(subject) && '' : stryMutAct_9fa48("3214") ? false : stryMutAct_9fa48("3213") ? true : (stryCov_9fa48("3213", "3214", "3215"), getSubjectCommonLink(subject) || (stryMutAct_9fa48("3216") ? "Stryker was here!" : (stryCov_9fa48("3216"), '')));
          }
        });
        setSubjectLinks(newSubjectLinks);
      }
    }, stryMutAct_9fa48("3217") ? [] : (stryCov_9fa48("3217"), [groupedBySubject, getSubjectCommonLink]));
    useEffect(() => {
      if (stryMutAct_9fa48("3218")) {
        {}
      } else {
        stryCov_9fa48("3218");
        setGlobalLink(stryMutAct_9fa48("3221") ? globalCommonLink && '' : stryMutAct_9fa48("3220") ? false : stryMutAct_9fa48("3219") ? true : (stryCov_9fa48("3219", "3220", "3221"), globalCommonLink || (stryMutAct_9fa48("3222") ? "Stryker was here!" : (stryCov_9fa48("3222"), ''))));
      }
    }, stryMutAct_9fa48("3223") ? [] : (stryCov_9fa48("3223"), [globalCommonLink]));
    useEffect(() => {
      if (stryMutAct_9fa48("3224")) {
        {}
      } else {
        stryCov_9fa48("3224");
        setExpandedSubjects(prev => {
          if (stryMutAct_9fa48("3225")) {
            {}
          } else {
            stryCov_9fa48("3225");
            const newExpanded = stryMutAct_9fa48("3226") ? {} : (stryCov_9fa48("3226"), {
              ...prev
            });
            groupedBySubject.forEach(subject => {
              if (stryMutAct_9fa48("3227")) {
                {}
              } else {
                stryCov_9fa48("3227");
                if (stryMutAct_9fa48("3230") ? newExpanded[subject.subjectName] !== undefined : stryMutAct_9fa48("3229") ? false : stryMutAct_9fa48("3228") ? true : (stryCov_9fa48("3228", "3229", "3230"), newExpanded[subject.subjectName] === undefined)) {
                  if (stryMutAct_9fa48("3231")) {
                    {}
                  } else {
                    stryCov_9fa48("3231");
                    newExpanded[subject.subjectName] = stryMutAct_9fa48("3232") ? false : (stryCov_9fa48("3232"), true);
                  }
                }
              }
            });
            return newExpanded;
          }
        });
      }
    }, stryMutAct_9fa48("3233") ? [] : (stryCov_9fa48("3233"), [groupedBySubject]));
    const hasUnsavedChanges = useMemo(() => {
      if (stryMutAct_9fa48("3234")) {
        {}
      } else {
        stryCov_9fa48("3234");
        const globalChanged = stryMutAct_9fa48("3237") ? globalLink === (globalCommonLink || '') : stryMutAct_9fa48("3236") ? false : stryMutAct_9fa48("3235") ? true : (stryCov_9fa48("3235", "3236", "3237"), globalLink !== (stryMutAct_9fa48("3240") ? globalCommonLink && '' : stryMutAct_9fa48("3239") ? false : stryMutAct_9fa48("3238") ? true : (stryCov_9fa48("3238", "3239", "3240"), globalCommonLink || (stryMutAct_9fa48("3241") ? "Stryker was here!" : (stryCov_9fa48("3241"), '')))));
        const subjectChanged = stryMutAct_9fa48("3242") ? groupedBySubject.every(subject => {
          const commonLink = getSubjectCommonLink(subject);
          return subjectLinks[subject.subjectName] !== (commonLink || '');
        }) : (stryCov_9fa48("3242"), groupedBySubject.some(subject => {
          if (stryMutAct_9fa48("3243")) {
            {}
          } else {
            stryCov_9fa48("3243");
            const commonLink = getSubjectCommonLink(subject);
            return stryMutAct_9fa48("3246") ? subjectLinks[subject.subjectName] === (commonLink || '') : stryMutAct_9fa48("3245") ? false : stryMutAct_9fa48("3244") ? true : (stryCov_9fa48("3244", "3245", "3246"), subjectLinks[subject.subjectName] !== (stryMutAct_9fa48("3249") ? commonLink && '' : stryMutAct_9fa48("3248") ? false : stryMutAct_9fa48("3247") ? true : (stryCov_9fa48("3247", "3248", "3249"), commonLink || (stryMutAct_9fa48("3250") ? "Stryker was here!" : (stryCov_9fa48("3250"), '')))));
          }
        }));
        const rowsChanged = stryMutAct_9fa48("3251") ? groupedBySubject.every(subject => {
          return Object.values(subject.types).some(group => {
            const groupKey = `${group.subjectName}_${group.lessonType}`;
            const commonLink = getCommonLink(group.lessons);
            return rowLinks[groupKey] !== (commonLink || '');
          });
        }) : (stryCov_9fa48("3251"), groupedBySubject.some(subject => {
          if (stryMutAct_9fa48("3252")) {
            {}
          } else {
            stryCov_9fa48("3252");
            return stryMutAct_9fa48("3253") ? Object.values(subject.types).every(group => {
              const groupKey = `${group.subjectName}_${group.lessonType}`;
              const commonLink = getCommonLink(group.lessons);
              return rowLinks[groupKey] !== (commonLink || '');
            }) : (stryCov_9fa48("3253"), Object.values(subject.types).some(group => {
              if (stryMutAct_9fa48("3254")) {
                {}
              } else {
                stryCov_9fa48("3254");
                const groupKey = stryMutAct_9fa48("3255") ? `` : (stryCov_9fa48("3255"), `${group.subjectName}_${group.lessonType}`);
                const commonLink = getCommonLink(group.lessons);
                return stryMutAct_9fa48("3258") ? rowLinks[groupKey] === (commonLink || '') : stryMutAct_9fa48("3257") ? false : stryMutAct_9fa48("3256") ? true : (stryCov_9fa48("3256", "3257", "3258"), rowLinks[groupKey] !== (stryMutAct_9fa48("3261") ? commonLink && '' : stryMutAct_9fa48("3260") ? false : stryMutAct_9fa48("3259") ? true : (stryCov_9fa48("3259", "3260", "3261"), commonLink || (stryMutAct_9fa48("3262") ? "Stryker was here!" : (stryCov_9fa48("3262"), '')))));
              }
            }));
          }
        }));
        return stryMutAct_9fa48("3265") ? (globalChanged || subjectChanged) && rowsChanged : stryMutAct_9fa48("3264") ? false : stryMutAct_9fa48("3263") ? true : (stryCov_9fa48("3263", "3264", "3265"), (stryMutAct_9fa48("3267") ? globalChanged && subjectChanged : stryMutAct_9fa48("3266") ? false : (stryCov_9fa48("3266", "3267"), globalChanged || subjectChanged)) || rowsChanged);
      }
    }, stryMutAct_9fa48("3268") ? [] : (stryCov_9fa48("3268"), [globalLink, globalCommonLink, subjectLinks, groupedBySubject, rowLinks, getSubjectCommonLink]));
    useEffect(() => {
      if (stryMutAct_9fa48("3269")) {
        {}
      } else {
        stryCov_9fa48("3269");
        stryMutAct_9fa48("3270") ? onUnsavedChanges(hasUnsavedChanges) : (stryCov_9fa48("3270"), onUnsavedChanges?.(hasUnsavedChanges));
      }
    }, stryMutAct_9fa48("3271") ? [] : (stryCov_9fa48("3271"), [hasUnsavedChanges, onUnsavedChanges]));
    const getLessonTypeLabel = useCallback(type => {
      if (stryMutAct_9fa48("3272")) {
        {}
      } else {
        stryCov_9fa48("3272");
        const types = stryMutAct_9fa48("3273") ? {} : (stryCov_9fa48("3273"), {
          LECTURE: stryMutAct_9fa48("3276") ? t('lesson_type_lecture') && 'Лекція' : stryMutAct_9fa48("3275") ? false : stryMutAct_9fa48("3274") ? true : (stryCov_9fa48("3274", "3275", "3276"), t(stryMutAct_9fa48("3277") ? "" : (stryCov_9fa48("3277"), 'lesson_type_lecture')) || (stryMutAct_9fa48("3278") ? "" : (stryCov_9fa48("3278"), 'Лекція'))),
          LABORATORY: stryMutAct_9fa48("3281") ? t('lesson_type_lab') && 'Лабораторна' : stryMutAct_9fa48("3280") ? false : stryMutAct_9fa48("3279") ? true : (stryCov_9fa48("3279", "3280", "3281"), t(stryMutAct_9fa48("3282") ? "" : (stryCov_9fa48("3282"), 'lesson_type_lab')) || (stryMutAct_9fa48("3283") ? "" : (stryCov_9fa48("3283"), 'Лабораторна'))),
          PRACTICAL: stryMutAct_9fa48("3286") ? t('lesson_type_practical') && 'Практична' : stryMutAct_9fa48("3285") ? false : stryMutAct_9fa48("3284") ? true : (stryCov_9fa48("3284", "3285", "3286"), t(stryMutAct_9fa48("3287") ? "" : (stryCov_9fa48("3287"), 'lesson_type_practical')) || (stryMutAct_9fa48("3288") ? "" : (stryCov_9fa48("3288"), 'Практична')))
        });
        return stryMutAct_9fa48("3291") ? types[type] && type : stryMutAct_9fa48("3290") ? false : stryMutAct_9fa48("3289") ? true : (stryCov_9fa48("3289", "3290", "3291"), types[type] || type);
      }
    }, stryMutAct_9fa48("3292") ? [] : (stryCov_9fa48("3292"), [t]));
    const createLinkData = useCallback(stryMutAct_9fa48("3293") ? () => undefined : (stryCov_9fa48("3293"), (base, extra = {}) => stryMutAct_9fa48("3294") ? {} : (stryCov_9fa48("3294"), {
      ...base,
      teacherId: selectedTeacher.id,
      ...extra
    })), stryMutAct_9fa48("3295") ? [] : (stryCov_9fa48("3295"), [selectedTeacher.id]));
    const handleApplyToAll = () => {
      if (stryMutAct_9fa48("3296")) {
        {}
      } else {
        stryCov_9fa48("3296");
        if (stryMutAct_9fa48("3299") ? !globalLink.trim() && globalLink === (globalCommonLink || '') : stryMutAct_9fa48("3298") ? false : stryMutAct_9fa48("3297") ? true : (stryCov_9fa48("3297", "3298", "3299"), (stryMutAct_9fa48("3300") ? globalLink.trim() : (stryCov_9fa48("3300"), !(stryMutAct_9fa48("3301") ? globalLink : (stryCov_9fa48("3301"), globalLink.trim())))) || (stryMutAct_9fa48("3303") ? globalLink !== (globalCommonLink || '') : stryMutAct_9fa48("3302") ? false : (stryCov_9fa48("3302", "3303"), globalLink === (stryMutAct_9fa48("3306") ? globalCommonLink && '' : stryMutAct_9fa48("3305") ? false : stryMutAct_9fa48("3304") ? true : (stryCov_9fa48("3304", "3305", "3306"), globalCommonLink || (stryMutAct_9fa48("3307") ? "Stryker was here!" : (stryCov_9fa48("3307"), '')))))))) return;
        const firstLesson = lessons[0];
        if (stryMutAct_9fa48("3310") ? false : stryMutAct_9fa48("3309") ? true : stryMutAct_9fa48("3308") ? firstLesson : (stryCov_9fa48("3308", "3309", "3310"), !firstLesson)) return;
        onUpdateLink(createLinkData(stryMutAct_9fa48("3311") ? {} : (stryCov_9fa48("3311"), {
          linkToMeeting: stryMutAct_9fa48("3312") ? globalLink : (stryCov_9fa48("3312"), globalLink.trim()),
          semesterId: firstLesson.semesterId
        })));
      }
    };
    const handleDeleteAll = () => {
      if (stryMutAct_9fa48("3313")) {
        {}
      } else {
        stryCov_9fa48("3313");
        const firstLesson = lessons[0];
        if (stryMutAct_9fa48("3316") ? false : stryMutAct_9fa48("3315") ? true : stryMutAct_9fa48("3314") ? firstLesson : (stryCov_9fa48("3314", "3315", "3316"), !firstLesson)) return;
        onUpdateLink(createLinkData(stryMutAct_9fa48("3317") ? {} : (stryCov_9fa48("3317"), {
          linkToMeeting: null,
          semesterId: firstLesson.semesterId
        })));
      }
    };
    const handleApplyToSubject = subject => {
      if (stryMutAct_9fa48("3318")) {
        {}
      } else {
        stryCov_9fa48("3318");
        const link = subjectLinks[subject.subjectName];
        const commonLink = getSubjectCommonLink(subject);
        if (stryMutAct_9fa48("3321") ? !link?.trim() && link === (commonLink || '') : stryMutAct_9fa48("3320") ? false : stryMutAct_9fa48("3319") ? true : (stryCov_9fa48("3319", "3320", "3321"), (stryMutAct_9fa48("3322") ? link?.trim() : (stryCov_9fa48("3322"), !(stryMutAct_9fa48("3324") ? link.trim() : stryMutAct_9fa48("3323") ? link : (stryCov_9fa48("3323", "3324"), link?.trim())))) || (stryMutAct_9fa48("3326") ? link !== (commonLink || '') : stryMutAct_9fa48("3325") ? false : (stryCov_9fa48("3325", "3326"), link === (stryMutAct_9fa48("3329") ? commonLink && '' : stryMutAct_9fa48("3328") ? false : stryMutAct_9fa48("3327") ? true : (stryCov_9fa48("3327", "3328", "3329"), commonLink || (stryMutAct_9fa48("3330") ? "Stryker was here!" : (stryCov_9fa48("3330"), '')))))))) return;
        onUpdateLink(createLinkData(stryMutAct_9fa48("3331") ? {} : (stryCov_9fa48("3331"), {
          linkToMeeting: stryMutAct_9fa48("3332") ? link : (stryCov_9fa48("3332"), link.trim()),
          semesterId: subject.semesterId,
          subjectId: subject.subjectId
        })));
      }
    };
    const handleDeleteSubjectLink = subject => {
      if (stryMutAct_9fa48("3333")) {
        {}
      } else {
        stryCov_9fa48("3333");
        onUpdateLink(createLinkData(stryMutAct_9fa48("3334") ? {} : (stryCov_9fa48("3334"), {
          linkToMeeting: null,
          semesterId: subject.semesterId,
          subjectId: subject.subjectId
        })));
      }
    };
    const handleRowLinkChange = useCallback((groupKey, value) => {
      if (stryMutAct_9fa48("3335")) {
        {}
      } else {
        stryCov_9fa48("3335");
        setRowLinks(stryMutAct_9fa48("3336") ? () => undefined : (stryCov_9fa48("3336"), prev => stryMutAct_9fa48("3337") ? {} : (stryCov_9fa48("3337"), {
          ...prev,
          [groupKey]: value
        })));
      }
    }, stryMutAct_9fa48("3338") ? ["Stryker was here"] : (stryCov_9fa48("3338"), []));
    const handleGroupLinkUpdate = useCallback((groupKey, group, newLink) => {
      if (stryMutAct_9fa48("3339")) {
        {}
      } else {
        stryCov_9fa48("3339");
        onUpdateLink(createLinkData(stryMutAct_9fa48("3340") ? {} : (stryCov_9fa48("3340"), {
          linkToMeeting: newLink,
          semesterId: group.semesterId,
          subjectId: group.subjectId,
          lessonType: group.lessonType
        })));
      }
    }, stryMutAct_9fa48("3341") ? [] : (stryCov_9fa48("3341"), [onUpdateLink, createLinkData]));
    const handleDeleteLink = useCallback(group => {
      if (stryMutAct_9fa48("3342")) {
        {}
      } else {
        stryCov_9fa48("3342");
        onUpdateLink(createLinkData(stryMutAct_9fa48("3343") ? {} : (stryCov_9fa48("3343"), {
          linkToMeeting: null,
          semesterId: group.semesterId,
          subjectId: group.subjectId,
          lessonType: group.lessonType
        })));
      }
    }, stryMutAct_9fa48("3344") ? [] : (stryCov_9fa48("3344"), [onUpdateLink, createLinkData]));
    const toggleSubjectExpanded = subjectName => {
      if (stryMutAct_9fa48("3345")) {
        {}
      } else {
        stryCov_9fa48("3345");
        setExpandedSubjects(stryMutAct_9fa48("3346") ? () => undefined : (stryCov_9fa48("3346"), prev => stryMutAct_9fa48("3347") ? {} : (stryCov_9fa48("3347"), {
          ...prev,
          [subjectName]: stryMutAct_9fa48("3348") ? prev[subjectName] : (stryCov_9fa48("3348"), !prev[subjectName])
        })));
      }
    };
    const isSubjectExpanded = stryMutAct_9fa48("3349") ? () => undefined : (stryCov_9fa48("3349"), (() => {
      const isSubjectExpanded = subjectName => stryMutAct_9fa48("3352") ? expandedSubjects[subjectName] === false : stryMutAct_9fa48("3351") ? false : stryMutAct_9fa48("3350") ? true : (stryCov_9fa48("3350", "3351", "3352"), expandedSubjects[subjectName] !== (stryMutAct_9fa48("3353") ? true : (stryCov_9fa48("3353"), false)));
      return isSubjectExpanded;
    })());
    const subjectHasLinks = stryMutAct_9fa48("3354") ? () => undefined : (stryCov_9fa48("3354"), (() => {
      const subjectHasLinks = subject => stryMutAct_9fa48("3355") ? Object.values(subject.types).every(type => type.lessons.some(lesson => lesson.linkToMeeting)) : (stryCov_9fa48("3355"), Object.values(subject.types).some(stryMutAct_9fa48("3356") ? () => undefined : (stryCov_9fa48("3356"), type => stryMutAct_9fa48("3357") ? type.lessons.every(lesson => lesson.linkToMeeting) : (stryCov_9fa48("3357"), type.lessons.some(stryMutAct_9fa48("3358") ? () => undefined : (stryCov_9fa48("3358"), lesson => lesson.linkToMeeting))))));
      return subjectHasLinks;
    })());
    const subjectHasChanges = subject => {
      if (stryMutAct_9fa48("3359")) {
        {}
      } else {
        stryCov_9fa48("3359");
        const commonLink = getSubjectCommonLink(subject);
        return stryMutAct_9fa48("3362") ? subjectLinks[subject.subjectName] === (commonLink || '') : stryMutAct_9fa48("3361") ? false : stryMutAct_9fa48("3360") ? true : (stryCov_9fa48("3360", "3361", "3362"), subjectLinks[subject.subjectName] !== (stryMutAct_9fa48("3365") ? commonLink && '' : stryMutAct_9fa48("3364") ? false : stryMutAct_9fa48("3363") ? true : (stryCov_9fa48("3363", "3364", "3365"), commonLink || (stryMutAct_9fa48("3366") ? "Stryker was here!" : (stryCov_9fa48("3366"), '')))));
      }
    };
    const globalHasChanges = stryMutAct_9fa48("3369") ? globalLink === (globalCommonLink || '') : stryMutAct_9fa48("3368") ? false : stryMutAct_9fa48("3367") ? true : (stryCov_9fa48("3367", "3368", "3369"), globalLink !== (stryMutAct_9fa48("3372") ? globalCommonLink && '' : stryMutAct_9fa48("3371") ? false : stryMutAct_9fa48("3370") ? true : (stryCov_9fa48("3370", "3371", "3372"), globalCommonLink || (stryMutAct_9fa48("3373") ? "Stryker was here!" : (stryCov_9fa48("3373"), '')))));
    return <>
            <Prompt when={hasUnsavedChanges} message={stryMutAct_9fa48("3376") ? t('unsaved_changes_warning') && 'У вас є незбережені дані. Ви впевнені, що хочете покинути сторінку?' : stryMutAct_9fa48("3375") ? false : stryMutAct_9fa48("3374") ? true : (stryCov_9fa48("3374", "3375", "3376"), t(stryMutAct_9fa48("3377") ? "" : (stryCov_9fa48("3377"), 'unsaved_changes_warning')) || (stryMutAct_9fa48("3378") ? "" : (stryCov_9fa48("3378"), 'У вас є незбережені дані. Ви впевнені, що хочете покинути сторінку?')))} />
            <div className="lessons-table-wrapper">
                <TableContainer component={Paper} className="lessons-table-container">
                    <Table className="lessons-table" aria-label="lessons table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{stryMutAct_9fa48("3381") ? t('groups') && 'Групи' : stryMutAct_9fa48("3380") ? false : stryMutAct_9fa48("3379") ? true : (stryCov_9fa48("3379", "3380", "3381"), t(stryMutAct_9fa48("3382") ? "" : (stryCov_9fa48("3382"), 'groups')) || (stryMutAct_9fa48("3383") ? "" : (stryCov_9fa48("3383"), 'Групи')))}</TableCell>
                                <TableCell>{stryMutAct_9fa48("3386") ? t('subject_name') && 'Предмет' : stryMutAct_9fa48("3385") ? false : stryMutAct_9fa48("3384") ? true : (stryCov_9fa48("3384", "3385", "3386"), t(stryMutAct_9fa48("3387") ? "" : (stryCov_9fa48("3387"), 'subject_name')) || (stryMutAct_9fa48("3388") ? "" : (stryCov_9fa48("3388"), 'Предмет')))}</TableCell>
                                <TableCell>{stryMutAct_9fa48("3391") ? t('lesson_type') && 'Тип' : stryMutAct_9fa48("3390") ? false : stryMutAct_9fa48("3389") ? true : (stryCov_9fa48("3389", "3390", "3391"), t(stryMutAct_9fa48("3392") ? "" : (stryCov_9fa48("3392"), 'lesson_type')) || (stryMutAct_9fa48("3393") ? "" : (stryCov_9fa48("3393"), 'Тип')))}</TableCell>
                                <TableCell align="center">{stryMutAct_9fa48("3396") ? t('grouped') && "Об'єднано" : stryMutAct_9fa48("3395") ? false : stryMutAct_9fa48("3394") ? true : (stryCov_9fa48("3394", "3395", "3396"), t(stryMutAct_9fa48("3397") ? "" : (stryCov_9fa48("3397"), 'grouped')) || (stryMutAct_9fa48("3398") ? "" : (stryCov_9fa48("3398"), "Об'єднано")))}</TableCell>
                                <TableCell>{stryMutAct_9fa48("3401") ? t('current_link') && 'Поточне посилання' : stryMutAct_9fa48("3400") ? false : stryMutAct_9fa48("3399") ? true : (stryCov_9fa48("3399", "3400", "3401"), t(stryMutAct_9fa48("3402") ? "" : (stryCov_9fa48("3402"), 'current_link')) || (stryMutAct_9fa48("3403") ? "" : (stryCov_9fa48("3403"), 'Поточне посилання')))}</TableCell>
                                <TableCell>{stryMutAct_9fa48("3406") ? t('link') && 'Посилання' : stryMutAct_9fa48("3405") ? false : stryMutAct_9fa48("3404") ? true : (stryCov_9fa48("3404", "3405", "3406"), t(stryMutAct_9fa48("3407") ? "" : (stryCov_9fa48("3407"), 'link')) || (stryMutAct_9fa48("3408") ? "" : (stryCov_9fa48("3408"), 'Посилання')))}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {groupedBySubject.map(stryMutAct_9fa48("3409") ? () => undefined : (stryCov_9fa48("3409"), subject => <React.Fragment key={subject.subjectName}>
                                    <TableRow className="subject-header-row">
                                        <TableCell colSpan={5}>
                                            <div className="subject-header">
                                                <IconButton size="small" onClick={stryMutAct_9fa48("3410") ? () => undefined : (stryCov_9fa48("3410"), () => toggleSubjectExpanded(subject.subjectName))} className="expand-button">
                                                    {isSubjectExpanded(subject.subjectName) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                                </IconButton>
                                                <span className="subject-title">{subject.subjectName}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="subject-link-wrapper">
                                                <TextField value={stryMutAct_9fa48("3413") ? subjectLinks[subject.subjectName] && '' : stryMutAct_9fa48("3412") ? false : stryMutAct_9fa48("3411") ? true : (stryCov_9fa48("3411", "3412", "3413"), subjectLinks[subject.subjectName] || (stryMutAct_9fa48("3414") ? "Stryker was here!" : (stryCov_9fa48("3414"), '')))} onChange={e => {
                        if (stryMutAct_9fa48("3415")) {
                          {}
                        } else {
                          stryCov_9fa48("3415");
                          const value = e.target.value;
                          setSubjectLinks(stryMutAct_9fa48("3416") ? () => undefined : (stryCov_9fa48("3416"), prev => stryMutAct_9fa48("3417") ? {} : (stryCov_9fa48("3417"), {
                            ...prev,
                            [subject.subjectName]: value
                          })));
                        }
                      }} variant="outlined" size="small" placeholder={stryMutAct_9fa48("3420") ? t('enter_link') && 'Введіть посилання' : stryMutAct_9fa48("3419") ? false : stryMutAct_9fa48("3418") ? true : (stryCov_9fa48("3418", "3419", "3420"), t(stryMutAct_9fa48("3421") ? "" : (stryCov_9fa48("3421"), 'enter_link')) || (stryMutAct_9fa48("3422") ? "" : (stryCov_9fa48("3422"), 'Введіть посилання')))} className={stryMutAct_9fa48("3423") ? `` : (stryCov_9fa48("3423"), `subject-link-input ${subjectHasChanges(subject) ? stryMutAct_9fa48("3424") ? "" : (stryCov_9fa48("3424"), 'unsaved-input') : stryMutAct_9fa48("3425") ? "Stryker was here!" : (stryCov_9fa48("3425"), '')}`)} />
                                                <Button variant="outlined" color="primary" size="small" onClick={stryMutAct_9fa48("3426") ? () => undefined : (stryCov_9fa48("3426"), () => handleApplyToSubject(subject))} disabled={stryMutAct_9fa48("3429") ? !subjectHasChanges(subject) && !subjectLinks[subject.subjectName]?.trim() : stryMutAct_9fa48("3428") ? false : stryMutAct_9fa48("3427") ? true : (stryCov_9fa48("3427", "3428", "3429"), (stryMutAct_9fa48("3430") ? subjectHasChanges(subject) : (stryCov_9fa48("3430"), !subjectHasChanges(subject))) || (stryMutAct_9fa48("3431") ? subjectLinks[subject.subjectName]?.trim() : (stryCov_9fa48("3431"), !(stryMutAct_9fa48("3433") ? subjectLinks[subject.subjectName].trim() : stryMutAct_9fa48("3432") ? subjectLinks[subject.subjectName] : (stryCov_9fa48("3432", "3433"), subjectLinks[subject.subjectName]?.trim())))))} className="subject-link-button">
                                                    {stryMutAct_9fa48("3436") ? t('apply_to_subject') && 'До предмету' : stryMutAct_9fa48("3435") ? false : stryMutAct_9fa48("3434") ? true : (stryCov_9fa48("3434", "3435", "3436"), t(stryMutAct_9fa48("3437") ? "" : (stryCov_9fa48("3437"), 'apply_to_subject')) || (stryMutAct_9fa48("3438") ? "" : (stryCov_9fa48("3438"), 'До предмету')))}
                                                </Button>
                                                {stryMutAct_9fa48("3441") ? subjectHasLinks(subject) || <IconButton size="small" onClick={() => handleDeleteSubjectLink(subject)} className="delete-subject-link-button" title={t('delete_subject_links') || 'Видалити всі посилання предмету'}>
                                                        <DeleteIcon fontSize="small" />
                                                    </IconButton> : stryMutAct_9fa48("3440") ? false : stryMutAct_9fa48("3439") ? true : (stryCov_9fa48("3439", "3440", "3441"), subjectHasLinks(subject) && <IconButton size="small" onClick={stryMutAct_9fa48("3442") ? () => undefined : (stryCov_9fa48("3442"), () => handleDeleteSubjectLink(subject))} className="delete-subject-link-button" title={stryMutAct_9fa48("3445") ? t('delete_subject_links') && 'Видалити всі посилання предмету' : stryMutAct_9fa48("3444") ? false : stryMutAct_9fa48("3443") ? true : (stryCov_9fa48("3443", "3444", "3445"), t(stryMutAct_9fa48("3446") ? "" : (stryCov_9fa48("3446"), 'delete_subject_links')) || (stryMutAct_9fa48("3447") ? "" : (stryCov_9fa48("3447"), 'Видалити всі посилання предмету')))}>
                                                        <DeleteIcon fontSize="small" />
                                                    </IconButton>)}
                                            </div>
                                        </TableCell>
                                    </TableRow>

                                    {stryMutAct_9fa48("3450") ? isSubjectExpanded(subject.subjectName) || Object.values(subject.types).sort((a, b) => a.lessonType.localeCompare(b.lessonType)).map(group => {
                  const groupKey = `${group.subjectName}_${group.lessonType}`;
                  return <LessonGroupRow key={groupKey} groupKey={groupKey} group={group} linkValue={rowLinks[groupKey] || ''} onLinkChange={handleRowLinkChange} getLessonTypeLabel={getLessonTypeLabel} onUpdateLink={handleGroupLinkUpdate} onDeleteLink={handleDeleteLink} t={t} />;
                }) : stryMutAct_9fa48("3449") ? false : stryMutAct_9fa48("3448") ? true : (stryCov_9fa48("3448", "3449", "3450"), isSubjectExpanded(subject.subjectName) && (stryMutAct_9fa48("3451") ? Object.values(subject.types).map(group => {
                  const groupKey = `${group.subjectName}_${group.lessonType}`;
                  return <LessonGroupRow key={groupKey} groupKey={groupKey} group={group} linkValue={rowLinks[groupKey] || ''} onLinkChange={handleRowLinkChange} getLessonTypeLabel={getLessonTypeLabel} onUpdateLink={handleGroupLinkUpdate} onDeleteLink={handleDeleteLink} t={t} />;
                }) : (stryCov_9fa48("3451"), Object.values(subject.types).sort(stryMutAct_9fa48("3452") ? () => undefined : (stryCov_9fa48("3452"), (a, b) => a.lessonType.localeCompare(b.lessonType))).map(group => {
                  if (stryMutAct_9fa48("3453")) {
                    {}
                  } else {
                    stryCov_9fa48("3453");
                    const groupKey = stryMutAct_9fa48("3454") ? `` : (stryCov_9fa48("3454"), `${group.subjectName}_${group.lessonType}`);
                    return <LessonGroupRow key={groupKey} groupKey={groupKey} group={group} linkValue={stryMutAct_9fa48("3457") ? rowLinks[groupKey] && '' : stryMutAct_9fa48("3456") ? false : stryMutAct_9fa48("3455") ? true : (stryCov_9fa48("3455", "3456", "3457"), rowLinks[groupKey] || (stryMutAct_9fa48("3458") ? "Stryker was here!" : (stryCov_9fa48("3458"), '')))} onLinkChange={handleRowLinkChange} getLessonTypeLabel={getLessonTypeLabel} onUpdateLink={handleGroupLinkUpdate} onDeleteLink={handleDeleteLink} t={t} />;
                  }
                }))))}
                                </React.Fragment>))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div className="global-link-section">
                    <div className="global-link-controls">
                        <TextField value={globalLink} onChange={stryMutAct_9fa48("3459") ? () => undefined : (stryCov_9fa48("3459"), e => setGlobalLink(e.target.value))} variant="outlined" size="small" placeholder={stryMutAct_9fa48("3462") ? t('enter_link_for_all') && 'Посилання для всіх пар' : stryMutAct_9fa48("3461") ? false : stryMutAct_9fa48("3460") ? true : (stryCov_9fa48("3460", "3461", "3462"), t(stryMutAct_9fa48("3463") ? "" : (stryCov_9fa48("3463"), 'enter_link_for_all')) || (stryMutAct_9fa48("3464") ? "" : (stryCov_9fa48("3464"), 'Посилання для всіх пар')))} className={stryMutAct_9fa48("3465") ? `` : (stryCov_9fa48("3465"), `global-link-input ${globalHasChanges ? stryMutAct_9fa48("3466") ? "" : (stryCov_9fa48("3466"), 'unsaved-input') : stryMutAct_9fa48("3467") ? "Stryker was here!" : (stryCov_9fa48("3467"), '')}`)} />
                        <Button variant="contained" color="primary" onClick={handleApplyToAll} disabled={stryMutAct_9fa48("3470") ? !globalHasChanges && !globalLink.trim() : stryMutAct_9fa48("3469") ? false : stryMutAct_9fa48("3468") ? true : (stryCov_9fa48("3468", "3469", "3470"), (stryMutAct_9fa48("3471") ? globalHasChanges : (stryCov_9fa48("3471"), !globalHasChanges)) || (stryMutAct_9fa48("3472") ? globalLink.trim() : (stryCov_9fa48("3472"), !(stryMutAct_9fa48("3473") ? globalLink : (stryCov_9fa48("3473"), globalLink.trim())))))} className="global-link-button">
                            {stryMutAct_9fa48("3476") ? t('apply_to_all') && 'Застосувати до всіх' : stryMutAct_9fa48("3475") ? false : stryMutAct_9fa48("3474") ? true : (stryCov_9fa48("3474", "3475", "3476"), t(stryMutAct_9fa48("3477") ? "" : (stryCov_9fa48("3477"), 'apply_to_all')) || (stryMutAct_9fa48("3478") ? "" : (stryCov_9fa48("3478"), 'Застосувати до всіх')))}
                        </Button>
                        {stryMutAct_9fa48("3481") ? globalCommonLink || <Button variant="outlined" color="secondary" onClick={handleDeleteAll} className="delete-all-button" startIcon={<DeleteIcon />}>
                                {t('delete_all_links') || 'Видалити всі'}
                            </Button> : stryMutAct_9fa48("3480") ? false : stryMutAct_9fa48("3479") ? true : (stryCov_9fa48("3479", "3480", "3481"), globalCommonLink && <Button variant="outlined" color="secondary" onClick={handleDeleteAll} className="delete-all-button" startIcon={<DeleteIcon />}>
                                {stryMutAct_9fa48("3484") ? t('delete_all_links') && 'Видалити всі' : stryMutAct_9fa48("3483") ? false : stryMutAct_9fa48("3482") ? true : (stryCov_9fa48("3482", "3483", "3484"), t(stryMutAct_9fa48("3485") ? "" : (stryCov_9fa48("3485"), 'delete_all_links')) || (stryMutAct_9fa48("3486") ? "" : (stryCov_9fa48("3486"), 'Видалити всі')))}
                            </Button>)}
                    </div>
                </div>
            </div>
        </>;
  }
};
export default LessonsTable;