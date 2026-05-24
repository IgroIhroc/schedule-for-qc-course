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
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Card from '../../../share/Card/Card';
import renderTextField from '../../../share/renderedFields/input';
import renderCheckboxField from '../../../share/renderedFields/checkbox';
import { isUrl, lessThanZero, maxLengthValue, required } from '../../../validation/validateFields';
import { handleTeacherInfo } from '../../../helper/renderTeacher';
import { getClearOrCancelTitle, setDisableButton } from '../../../helper/disableComponent';
import { RenderMultiselect } from '../../../share/renderedFields/renderMultiselect';
import { renderAutocompleteField } from '../../../helper/renderAutocompleteField';
import LessonLabelForm from '../../../containers/LessonPage/LessonLabelForm';
import { COPY_FOR_BUTTON_LABEL, COPY_GROUPS_LABEL, FOR_SITE_LABEL, FORM_GROUPED_LABEL, GROUP_LABEL, GROUPS_LABEL, HOURS_LABEL_SHORT, LINK_TO_MEETING_LABEL, NOT_SELECTED_LABEL, SAVE_BUTTON_LABEL, SUBJECT_LABEL, TEACHER_LABEL, TYPE_LABEL } from '../../../constants/translationLabels/formElements';
import './LessonForm.scss';
import '../LessonPage.scss';
const LessonForm = props => {
  if (stryMutAct_9fa48("2116")) {
    {}
  } else {
    stryCov_9fa48("2116");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2117") ? "" : (stryCov_9fa48("2117"), 'formElements'));
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      groups,
      group,
      lesson,
      isUniqueError,
      teachers,
      subjects,
      groupId,
      initialize,
      change,
      lessonTypes,
      selectLessonCardSuccess,
      setUniqueError,
      selectGroupSuccess
    } = props;
    const [checked, setChecked] = useState(stryMutAct_9fa48("2118") ? true : (stryCov_9fa48("2118"), false));
    const lessonId = lesson.id;
    const initializeFormHandler = lessonData => {
      if (stryMutAct_9fa48("2119")) {
        {}
      } else {
        stryCov_9fa48("2119");
        const {
          id: lessonCardId,
          teacher,
          subject,
          lessonType: type,
          hours,
          linkToMeeting,
          subjectForSite,
          grouped
        } = lessonData;
        initialize(stryMutAct_9fa48("2120") ? {} : (stryCov_9fa48("2120"), {
          lessonCardId,
          teacher,
          subject,
          type,
          hours,
          linkToMeeting,
          subjectForSite,
          grouped,
          groups: stryMutAct_9fa48("2121") ? [] : (stryCov_9fa48("2121"), [group])
        }));
        setChecked(lessonData.grouped);
      }
    };
    const handleChange = stryMutAct_9fa48("2122") ? () => undefined : (stryCov_9fa48("2122"), (() => {
      const handleChange = event => setChecked(event.target.checked);
      return handleChange;
    })());
    useEffect(() => {
      if (stryMutAct_9fa48("2123")) {
        {}
      } else {
        stryCov_9fa48("2123");
        selectGroupSuccess(groupId);
      }
    }, stryMutAct_9fa48("2124") ? [] : (stryCov_9fa48("2124"), [groupId]));
    useEffect(() => {
      if (stryMutAct_9fa48("2125")) {
        {}
      } else {
        stryCov_9fa48("2125");
        setChecked(stryMutAct_9fa48("2126") ? true : (stryCov_9fa48("2126"), false));
        if (stryMutAct_9fa48("2128") ? false : stryMutAct_9fa48("2127") ? true : (stryCov_9fa48("2127", "2128"), lessonId)) {
          if (stryMutAct_9fa48("2129")) {
            {}
          } else {
            stryCov_9fa48("2129");
            initializeFormHandler(lesson);
          }
        } else {
          if (stryMutAct_9fa48("2130")) {
            {}
          } else {
            stryCov_9fa48("2130");
            initialize(stryMutAct_9fa48("2131") ? {} : (stryCov_9fa48("2131"), {
              groups: stryMutAct_9fa48("2132") ? [] : (stryCov_9fa48("2132"), [group])
            }));
          }
        }
      }
    }, stryMutAct_9fa48("2133") ? [] : (stryCov_9fa48("2133"), [lessonId, group]));
    const valid = (stryMutAct_9fa48("2134") ? isUniqueError : (stryCov_9fa48("2134"), !isUniqueError)) ? stryMutAct_9fa48("2135") ? {} : (stryCov_9fa48("2135"), {
      validate: stryMutAct_9fa48("2136") ? [] : (stryCov_9fa48("2136"), [required])
    }) : stryMutAct_9fa48("2137") ? {} : (stryCov_9fa48("2137"), {
      error: isUniqueError
    });
    const clearForm = () => {
      if (stryMutAct_9fa48("2138")) {
        {}
      } else {
        stryCov_9fa48("2138");
        reset();
        setUniqueError(null);
        selectLessonCardSuccess(null);
      }
    };
    return <>
            {groupId ? <Card additionClassName="lesson-form-card">
                    <LessonLabelForm />
                    <form onSubmit={handleSubmit} className="lesson-form">
                        <Field name="teacher" component={renderAutocompleteField} {...valid} label={t(TEACHER_LABEL)} type="text" getItemTitle={handleTeacherInfo} values={teachers} onChange={stryMutAct_9fa48("2139") ? () => undefined : (stryCov_9fa48("2139"), () => setUniqueError(stryMutAct_9fa48("2140") ? true : (stryCov_9fa48("2140"), false)))} getOptionLabel={stryMutAct_9fa48("2141") ? () => undefined : (stryCov_9fa48("2141"), option => option ? handleTeacherInfo(option) : stryMutAct_9fa48("2142") ? "Stryker was here!" : (stryCov_9fa48("2142"), ''))} />
                        <Field name="subject" component={renderAutocompleteField} {...valid} label={t(SUBJECT_LABEL)} type="text" getItemTitle={stryMutAct_9fa48("2143") ? () => undefined : (stryCov_9fa48("2143"), sub => sub.name)} values={subjects} onChange={subject => {
            if (stryMutAct_9fa48("2144")) {
              {}
            } else {
              stryCov_9fa48("2144");
              change(stryMutAct_9fa48("2145") ? "" : (stryCov_9fa48("2145"), 'subjectForSite'), stryMutAct_9fa48("2146") ? subject?.name && '' : (stryCov_9fa48("2146"), (stryMutAct_9fa48("2147") ? subject.name : (stryCov_9fa48("2147"), subject?.name)) ?? (stryMutAct_9fa48("2148") ? "Stryker was here!" : (stryCov_9fa48("2148"), ''))));
              setUniqueError(stryMutAct_9fa48("2149") ? true : (stryCov_9fa48("2149"), false));
            }
          }} getOptionLabel={stryMutAct_9fa48("2150") ? () => undefined : (stryCov_9fa48("2150"), option => stryMutAct_9fa48("2151") ? subjects.find(subject => subject.id === option.id)?.name && '' : (stryCov_9fa48("2151"), (stryMutAct_9fa48("2152") ? subjects.find(subject => subject.id === option.id).name : (stryCov_9fa48("2152"), subjects.find(stryMutAct_9fa48("2153") ? () => undefined : (stryCov_9fa48("2153"), subject => stryMutAct_9fa48("2156") ? subject.id !== option.id : stryMutAct_9fa48("2155") ? false : stryMutAct_9fa48("2154") ? true : (stryCov_9fa48("2154", "2155", "2156"), subject.id === option.id)))?.name)) ?? (stryMutAct_9fa48("2157") ? "Stryker was here!" : (stryCov_9fa48("2157"), ''))))} />
                        <div className="form-fields-container">
                            <Field name="type" component={renderAutocompleteField} {...valid} label={t(TYPE_LABEL)} type="text" getItemTitle={type => {
              if (stryMutAct_9fa48("2158")) {
                {}
              } else {
                stryCov_9fa48("2158");
                t(stryMutAct_9fa48("2159") ? `` : (stryCov_9fa48("2159"), `formElements:lesson_type_${stryMutAct_9fa48("2160") ? type.toUpperCase() : (stryCov_9fa48("2160"), type.toLowerCase())}_label`));
              }
            }} values={lessonTypes} onChange={() => {
              if (stryMutAct_9fa48("2161")) {
                {}
              } else {
                stryCov_9fa48("2161");
                setUniqueError(stryMutAct_9fa48("2162") ? true : (stryCov_9fa48("2162"), false));
              }
            }} getOptionLabel={stryMutAct_9fa48("2163") ? () => undefined : (stryCov_9fa48("2163"), lessonType => lessonType ? t(stryMutAct_9fa48("2164") ? `` : (stryCov_9fa48("2164"), `formElements:lesson_type_${stryMutAct_9fa48("2165") ? lessonType.toUpperCase() : (stryCov_9fa48("2165"), lessonType.toLowerCase())}_label`)) : stryMutAct_9fa48("2166") ? "Stryker was here!" : (stryCov_9fa48("2166"), ''))} />

                            <Field id="hours" name="hours" type="tel" component={renderTextField} label={t(HOURS_LABEL_SHORT)} validate={stryMutAct_9fa48("2167") ? [] : (stryCov_9fa48("2167"), [required, lessThanZero])} />
                            <Field id="grouped" name="grouped" label={t(FORM_GROUPED_LABEL)} labelPlacement="Top" defaultValue={checked} component={renderCheckboxField} checked={checked} onChange={handleChange} color="primary" />
                        </div>
                        <Field id="linkToMeeting" name="linkToMeeting" rowsMax="1" margin="normal" component={renderTextField} label={t(LINK_TO_MEETING_LABEL)} validate={stryMutAct_9fa48("2168") ? [] : (stryCov_9fa48("2168"), [isUrl, maxLengthValue])} placeholder="Input URL" />
                        <Field id="subjectForSite" name="subjectForSite" multiline rowsMax="1" margin="normal" component={renderTextField} label={stryMutAct_9fa48("2169") ? t(SUBJECT_LABEL) - t(FOR_SITE_LABEL) : (stryCov_9fa48("2169"), t(SUBJECT_LABEL) + t(FOR_SITE_LABEL))} validate={stryMutAct_9fa48("2170") ? [] : (stryCov_9fa48("2170"), [required, maxLengthValue])} />
                        {stryMutAct_9fa48("2173") ? !lessonId || <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                    <Typography>{t(COPY_FOR_BUTTON_LABEL)}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <>
                                            <p className="group-label">
                                                <label htmlFor="groups">
                                                    {t(COPY_GROUPS_LABEL)}
                                                </label>
                                            </p>
                                            <Field id="groups" name="groups" component={RenderMultiselect} options={groups} value={[group]} displayValue="title" className="form-control mt-2" placeholder={t(GROUPS_LABEL)} hidePlaceholder selectedValues={[group]} alwaysDisplayedItem={group} />
                                        </>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion> : stryMutAct_9fa48("2172") ? false : stryMutAct_9fa48("2171") ? true : (stryCov_9fa48("2171", "2172", "2173"), (stryMutAct_9fa48("2174") ? lessonId : (stryCov_9fa48("2174"), !lessonId)) && <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                    <Typography>{t(COPY_FOR_BUTTON_LABEL)}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <>
                                            <p className="group-label">
                                                <label htmlFor="groups">
                                                    {t(COPY_GROUPS_LABEL)}
                                                </label>
                                            </p>
                                            <Field id="groups" name="groups" component={RenderMultiselect} options={groups} value={stryMutAct_9fa48("2175") ? [] : (stryCov_9fa48("2175"), [group])} displayValue="title" className="form-control mt-2" placeholder={t(GROUPS_LABEL)} hidePlaceholder selectedValues={stryMutAct_9fa48("2176") ? [] : (stryCov_9fa48("2176"), [group])} alwaysDisplayedItem={group} />
                                        </>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>)}
                        <div className="form-buttons-container">
                            <Button className="buttons-style" type="submit" variant="contained" color="primary" disabled={stryMutAct_9fa48("2179") ? pristine && submitting : stryMutAct_9fa48("2178") ? false : stryMutAct_9fa48("2177") ? true : (stryCov_9fa48("2177", "2178", "2179"), pristine || submitting)} onClick={() => {
              if (stryMutAct_9fa48("2180")) {
                {}
              } else {
                stryCov_9fa48("2180");
                setChecked(stryMutAct_9fa48("2181") ? true : (stryCov_9fa48("2181"), false));
              }
            }}>
                                {t(SAVE_BUTTON_LABEL)}
                            </Button>
                            <Button className="buttons-style" type="button" variant="contained" disabled={setDisableButton(pristine, submitting, lesson.id)} onClick={() => {
              if (stryMutAct_9fa48("2182")) {
                {}
              } else {
                stryCov_9fa48("2182");
                clearForm();
              }
            }}>
                                {getClearOrCancelTitle(lesson.id, t)}
                            </Button>
                        </div>
                    </form>
                </Card> : <h2 className="not-selected">{stryMutAct_9fa48("2183") ? `` : (stryCov_9fa48("2183"), `${t(GROUP_LABEL)} ${t(NOT_SELECTED_LABEL)}`)}</h2>}
        </>;
  }
};
export default LessonForm;