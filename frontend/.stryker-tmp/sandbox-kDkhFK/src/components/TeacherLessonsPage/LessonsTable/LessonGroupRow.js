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
import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DeleteIcon from '@material-ui/icons/Delete';
const LessonGroupRow = React.memo(props => {
  if (stryMutAct_9fa48("3002")) {
    {}
  } else {
    stryCov_9fa48("3002");
    const {
      group,
      groupKey,
      linkValue,
      getLessonTypeLabel,
      onUpdateLink,
      onDeleteLink,
      onLinkChange,
      t
    } = props;
    const [isExpanded, setIsExpanded] = useState(stryMutAct_9fa48("3003") ? false : (stryCov_9fa48("3003"), true));
    const groupTitles = stryMutAct_9fa48("3004") ? group.lessons.map(l => l.group?.title) : (stryCov_9fa48("3004"), group.lessons.map(stryMutAct_9fa48("3005") ? () => undefined : (stryCov_9fa48("3005"), l => stryMutAct_9fa48("3006") ? l.group.title : (stryCov_9fa48("3006"), l.group?.title))).filter(Boolean));
    const uniqueGroups = stryMutAct_9fa48("3007") ? [...new Set(groupTitles)] : (stryCov_9fa48("3007"), (stryMutAct_9fa48("3008") ? [] : (stryCov_9fa48("3008"), [...new Set(groupTitles)])).sort(stryMutAct_9fa48("3009") ? () => undefined : (stryCov_9fa48("3009"), (a, b) => a.localeCompare(b, stryMutAct_9fa48("3010") ? "" : (stryCov_9fa48("3010"), 'uk')))));
    const canExpand = stryMutAct_9fa48("3014") ? uniqueGroups.length <= 1 : stryMutAct_9fa48("3013") ? uniqueGroups.length >= 1 : stryMutAct_9fa48("3012") ? false : stryMutAct_9fa48("3011") ? true : (stryCov_9fa48("3011", "3012", "3013", "3014"), uniqueGroups.length > 1);
    const getTypeCommonLink = () => {
      if (stryMutAct_9fa48("3015")) {
        {}
      } else {
        stryCov_9fa48("3015");
        const {
          lessons
        } = group;
        if (stryMutAct_9fa48("3018") ? lessons.length !== 0 : stryMutAct_9fa48("3017") ? false : stryMutAct_9fa48("3016") ? true : (stryCov_9fa48("3016", "3017", "3018"), lessons.length === 0)) return null;
        const allHaveLinks = stryMutAct_9fa48("3019") ? lessons.some(lesson => lesson.linkToMeeting) : (stryCov_9fa48("3019"), lessons.every(stryMutAct_9fa48("3020") ? () => undefined : (stryCov_9fa48("3020"), lesson => lesson.linkToMeeting)));
        if (stryMutAct_9fa48("3023") ? false : stryMutAct_9fa48("3022") ? true : stryMutAct_9fa48("3021") ? allHaveLinks : (stryCov_9fa48("3021", "3022", "3023"), !allHaveLinks)) return null;
        const firstLink = lessons[0].linkToMeeting;
        return (stryMutAct_9fa48("3024") ? lessons.some(lesson => lesson.linkToMeeting === firstLink) : (stryCov_9fa48("3024"), lessons.every(stryMutAct_9fa48("3025") ? () => undefined : (stryCov_9fa48("3025"), lesson => stryMutAct_9fa48("3028") ? lesson.linkToMeeting !== firstLink : stryMutAct_9fa48("3027") ? false : stryMutAct_9fa48("3026") ? true : (stryCov_9fa48("3026", "3027", "3028"), lesson.linkToMeeting === firstLink))))) ? firstLink : null;
      }
    };
    const typeCommonLink = getTypeCommonLink();
    const hasChanges = stryMutAct_9fa48("3031") ? linkValue === (typeCommonLink || '') : stryMutAct_9fa48("3030") ? false : stryMutAct_9fa48("3029") ? true : (stryCov_9fa48("3029", "3030", "3031"), linkValue !== (stryMutAct_9fa48("3034") ? typeCommonLink && '' : stryMutAct_9fa48("3033") ? false : stryMutAct_9fa48("3032") ? true : (stryCov_9fa48("3032", "3033", "3034"), typeCommonLink || (stryMutAct_9fa48("3035") ? "Stryker was here!" : (stryCov_9fa48("3035"), '')))));
    const subjectDisplay = (stryMutAct_9fa48("3038") ? group.subjectForSite || group.subjectForSite !== group.subjectName : stryMutAct_9fa48("3037") ? false : stryMutAct_9fa48("3036") ? true : (stryCov_9fa48("3036", "3037", "3038"), group.subjectForSite && (stryMutAct_9fa48("3040") ? group.subjectForSite === group.subjectName : stryMutAct_9fa48("3039") ? true : (stryCov_9fa48("3039", "3040"), group.subjectForSite !== group.subjectName)))) ? stryMutAct_9fa48("3041") ? `` : (stryCov_9fa48("3041"), `${group.subjectName} (${group.subjectForSite})`) : group.subjectName;
    const handleLinkChange = e => {
      if (stryMutAct_9fa48("3042")) {
        {}
      } else {
        stryCov_9fa48("3042");
        onLinkChange(groupKey, e.target.value);
      }
    };
    const handleApplyLink = () => {
      if (stryMutAct_9fa48("3043")) {
        {}
      } else {
        stryCov_9fa48("3043");
        if (stryMutAct_9fa48("3046") ? !linkValue.trim() && !hasChanges : stryMutAct_9fa48("3045") ? false : stryMutAct_9fa48("3044") ? true : (stryCov_9fa48("3044", "3045", "3046"), (stryMutAct_9fa48("3047") ? linkValue.trim() : (stryCov_9fa48("3047"), !(stryMutAct_9fa48("3048") ? linkValue : (stryCov_9fa48("3048"), linkValue.trim())))) || (stryMutAct_9fa48("3049") ? hasChanges : (stryCov_9fa48("3049"), !hasChanges)))) return;
        onUpdateLink(groupKey, group, stryMutAct_9fa48("3050") ? linkValue : (stryCov_9fa48("3050"), linkValue.trim()));
      }
    };
    const handleOpenLink = link => {
      if (stryMutAct_9fa48("3051")) {
        {}
      } else {
        stryCov_9fa48("3051");
        if (stryMutAct_9fa48("3053") ? false : stryMutAct_9fa48("3052") ? true : (stryCov_9fa48("3052", "3053"), link)) window.open(link, stryMutAct_9fa48("3054") ? "" : (stryCov_9fa48("3054"), '_blank'), stryMutAct_9fa48("3055") ? "" : (stryCov_9fa48("3055"), 'noopener,noreferrer'));
      }
    };
    const renderLinkCell = stryMutAct_9fa48("3056") ? () => undefined : (stryCov_9fa48("3056"), (() => {
      const renderLinkCell = lesson => <TableCell className="link-cell">
            <div className="link-wrapper">
                {(stryMutAct_9fa48("3057") ? lesson.linkToMeeting : (stryCov_9fa48("3057"), lesson?.linkToMeeting)) ? <span className="link-text" onClick={stryMutAct_9fa48("3058") ? () => undefined : (stryCov_9fa48("3058"), () => handleOpenLink(lesson.linkToMeeting))} title={lesson.linkToMeeting}>
                        {(stryMutAct_9fa48("3062") ? lesson.linkToMeeting.length <= 30 : stryMutAct_9fa48("3061") ? lesson.linkToMeeting.length >= 30 : stryMutAct_9fa48("3060") ? false : stryMutAct_9fa48("3059") ? true : (stryCov_9fa48("3059", "3060", "3061", "3062"), lesson.linkToMeeting.length > 30)) ? stryMutAct_9fa48("3063") ? `` : (stryCov_9fa48("3063"), `${stryMutAct_9fa48("3064") ? lesson.linkToMeeting : (stryCov_9fa48("3064"), lesson.linkToMeeting.substring(0, 30))}...`) : lesson.linkToMeeting}
                    </span> : <span className="no-link">{stryMutAct_9fa48("3067") ? t('no_link') && 'Немає' : stryMutAct_9fa48("3066") ? false : stryMutAct_9fa48("3065") ? true : (stryCov_9fa48("3065", "3066", "3067"), t(stryMutAct_9fa48("3068") ? "" : (stryCov_9fa48("3068"), 'no_link')) || (stryMutAct_9fa48("3069") ? "" : (stryCov_9fa48("3069"), 'Немає')))}</span>}
            </div>
        </TableCell>;
      return renderLinkCell;
    })());
    const renderEditCell = stryMutAct_9fa48("3070") ? () => undefined : (stryCov_9fa48("3070"), (() => {
      const renderEditCell = (showDelete = stryMutAct_9fa48("3071") ? false : (stryCov_9fa48("3071"), true)) => <TableCell className="new-link-cell">
            <div className="new-link-wrapper">
                <TextField value={linkValue} onChange={handleLinkChange} variant="outlined" size="small" placeholder={stryMutAct_9fa48("3074") ? t('enter_link') && 'Введіть посилання' : stryMutAct_9fa48("3073") ? false : stryMutAct_9fa48("3072") ? true : (stryCov_9fa48("3072", "3073", "3074"), t(stryMutAct_9fa48("3075") ? "" : (stryCov_9fa48("3075"), 'enter_link')) || (stryMutAct_9fa48("3076") ? "" : (stryCov_9fa48("3076"), 'Введіть посилання')))} className={stryMutAct_9fa48("3077") ? `` : (stryCov_9fa48("3077"), `new-link-input ${hasChanges ? stryMutAct_9fa48("3078") ? "" : (stryCov_9fa48("3078"), 'unsaved-input') : stryMutAct_9fa48("3079") ? "Stryker was here!" : (stryCov_9fa48("3079"), '')}`)} />
                <IconButton size="small" onClick={handleApplyLink} disabled={stryMutAct_9fa48("3082") ? !hasChanges && !linkValue.trim() : stryMutAct_9fa48("3081") ? false : stryMutAct_9fa48("3080") ? true : (stryCov_9fa48("3080", "3081", "3082"), (stryMutAct_9fa48("3083") ? hasChanges : (stryCov_9fa48("3083"), !hasChanges)) || (stryMutAct_9fa48("3084") ? linkValue.trim() : (stryCov_9fa48("3084"), !(stryMutAct_9fa48("3085") ? linkValue : (stryCov_9fa48("3085"), linkValue.trim())))))} className="apply-button" title={stryMutAct_9fa48("3088") ? t('apply') && 'Застосувати' : stryMutAct_9fa48("3087") ? false : stryMutAct_9fa48("3086") ? true : (stryCov_9fa48("3086", "3087", "3088"), t(stryMutAct_9fa48("3089") ? "" : (stryCov_9fa48("3089"), 'apply')) || (stryMutAct_9fa48("3090") ? "" : (stryCov_9fa48("3090"), 'Застосувати')))}>
                    <CheckIcon />
                </IconButton>
                {stryMutAct_9fa48("3093") ? showDelete && typeCommonLink || <IconButton size="small" onClick={() => onDeleteLink?.(group)} className="delete-link-button" title={t('delete_link') || 'Видалити посилання'}>
                        <DeleteIcon fontSize="small" />
                    </IconButton> : stryMutAct_9fa48("3092") ? false : stryMutAct_9fa48("3091") ? true : (stryCov_9fa48("3091", "3092", "3093"), (stryMutAct_9fa48("3095") ? showDelete || typeCommonLink : stryMutAct_9fa48("3094") ? true : (stryCov_9fa48("3094", "3095"), showDelete && typeCommonLink)) && <IconButton size="small" onClick={stryMutAct_9fa48("3096") ? () => undefined : (stryCov_9fa48("3096"), () => stryMutAct_9fa48("3097") ? onDeleteLink(group) : (stryCov_9fa48("3097"), onDeleteLink?.(group)))} className="delete-link-button" title={stryMutAct_9fa48("3100") ? t('delete_link') && 'Видалити посилання' : stryMutAct_9fa48("3099") ? false : stryMutAct_9fa48("3098") ? true : (stryCov_9fa48("3098", "3099", "3100"), t(stryMutAct_9fa48("3101") ? "" : (stryCov_9fa48("3101"), 'delete_link')) || (stryMutAct_9fa48("3102") ? "" : (stryCov_9fa48("3102"), 'Видалити посилання')))}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>)}
            </div>
        </TableCell>;
      return renderEditCell;
    })());
    const renderGroupsCell = stryMutAct_9fa48("3103") ? () => undefined : (stryCov_9fa48("3103"), (() => {
      const renderGroupsCell = (title, showExpand, onExpandClick) => <TableCell>
            <div className="groups-cell">
                {showExpand ? <IconButton size="small" onClick={onExpandClick} className="expand-button">
                        {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton> : <span className="expand-placeholder" />}
                <span className="groups-list">{title}</span>
            </div>
        </TableCell>;
      return renderGroupsCell;
    })());
    const renderCommonCells = stryMutAct_9fa48("3104") ? () => undefined : (stryCov_9fa48("3104"), (() => {
      const renderCommonCells = (lesson, showEdit = stryMutAct_9fa48("3105") ? true : (stryCov_9fa48("3105"), false)) => <>
            <TableCell>{subjectDisplay}</TableCell>
            <TableCell>{getLessonTypeLabel(group.lessonType)}</TableCell>
            <TableCell align="center">
                {stryMutAct_9fa48("3108") ? lesson?.grouped || <CheckCircleIcon className="grouped-icon" /> : stryMutAct_9fa48("3107") ? false : stryMutAct_9fa48("3106") ? true : (stryCov_9fa48("3106", "3107", "3108"), (stryMutAct_9fa48("3109") ? lesson.grouped : (stryCov_9fa48("3109"), lesson?.grouped)) && <CheckCircleIcon className="grouped-icon" />)}
            </TableCell>
            {renderLinkCell(lesson)}
            {showEdit ? renderEditCell() : <TableCell />}
        </>;
      return renderCommonCells;
    })());
    const renderCollapsedRow = stryMutAct_9fa48("3110") ? () => undefined : (stryCov_9fa48("3110"), (() => {
      const renderCollapsedRow = () => <TableRow className="lesson-group-row type-last-row">
            {renderGroupsCell(uniqueGroups.join(stryMutAct_9fa48("3111") ? "" : (stryCov_9fa48("3111"), ', ')), canExpand, stryMutAct_9fa48("3112") ? () => undefined : (stryCov_9fa48("3112"), () => setIsExpanded(stryMutAct_9fa48("3113") ? false : (stryCov_9fa48("3113"), true))))}
            {renderCommonCells(group, stryMutAct_9fa48("3114") ? false : (stryCov_9fa48("3114"), true))}
        </TableRow>;
      return renderCollapsedRow;
    })());
    const renderExpandedRows = () => {
      if (stryMutAct_9fa48("3115")) {
        {}
      } else {
        stryCov_9fa48("3115");
        const {
          lessons
        } = group;
        const totalLessons = lessons.length;
        return <>
                <TableRow className={stryMutAct_9fa48("3116") ? `` : (stryCov_9fa48("3116"), `lesson-group-row expanded-header ${(stryMutAct_9fa48("3119") ? totalLessons !== 1 : stryMutAct_9fa48("3118") ? false : stryMutAct_9fa48("3117") ? true : (stryCov_9fa48("3117", "3118", "3119"), totalLessons === 1)) ? stryMutAct_9fa48("3120") ? "" : (stryCov_9fa48("3120"), 'type-last-row') : stryMutAct_9fa48("3121") ? "Stryker was here!" : (stryCov_9fa48("3121"), '')}`)}>
                    {renderGroupsCell(stryMutAct_9fa48("3124") ? lessons[0]?.group?.title && '-' : stryMutAct_9fa48("3123") ? false : stryMutAct_9fa48("3122") ? true : (stryCov_9fa48("3122", "3123", "3124"), (stryMutAct_9fa48("3126") ? lessons[0].group?.title : stryMutAct_9fa48("3125") ? lessons[0]?.group.title : (stryCov_9fa48("3125", "3126"), lessons[0]?.group?.title)) || (stryMutAct_9fa48("3127") ? "" : (stryCov_9fa48("3127"), '-'))), stryMutAct_9fa48("3128") ? false : (stryCov_9fa48("3128"), true), stryMutAct_9fa48("3129") ? () => undefined : (stryCov_9fa48("3129"), () => setIsExpanded(stryMutAct_9fa48("3130") ? true : (stryCov_9fa48("3130"), false))))}
                    {renderCommonCells(lessons[0], stryMutAct_9fa48("3131") ? false : (stryCov_9fa48("3131"), true))}
                </TableRow>

                {stryMutAct_9fa48("3132") ? lessons.map((lesson, index) => <TableRow key={lesson.id || index} className={`lesson-group-row expanded-row ${index === totalLessons - 2 ? 'type-last-row' : ''}`}>
                        {renderGroupsCell(lesson.group?.title || '-', false, null)}
                        {renderCommonCells(lesson, false)}
                    </TableRow>) : (stryCov_9fa48("3132"), lessons.slice(1).map(stryMutAct_9fa48("3133") ? () => undefined : (stryCov_9fa48("3133"), (lesson, index) => <TableRow key={stryMutAct_9fa48("3136") ? lesson.id && index : stryMutAct_9fa48("3135") ? false : stryMutAct_9fa48("3134") ? true : (stryCov_9fa48("3134", "3135", "3136"), lesson.id || index)} className={stryMutAct_9fa48("3137") ? `` : (stryCov_9fa48("3137"), `lesson-group-row expanded-row ${(stryMutAct_9fa48("3140") ? index !== totalLessons - 2 : stryMutAct_9fa48("3139") ? false : stryMutAct_9fa48("3138") ? true : (stryCov_9fa48("3138", "3139", "3140"), index === (stryMutAct_9fa48("3141") ? totalLessons + 2 : (stryCov_9fa48("3141"), totalLessons - 2)))) ? stryMutAct_9fa48("3142") ? "" : (stryCov_9fa48("3142"), 'type-last-row') : stryMutAct_9fa48("3143") ? "Stryker was here!" : (stryCov_9fa48("3143"), '')}`)}>
                        {renderGroupsCell(stryMutAct_9fa48("3146") ? lesson.group?.title && '-' : stryMutAct_9fa48("3145") ? false : stryMutAct_9fa48("3144") ? true : (stryCov_9fa48("3144", "3145", "3146"), (stryMutAct_9fa48("3147") ? lesson.group.title : (stryCov_9fa48("3147"), lesson.group?.title)) || (stryMutAct_9fa48("3148") ? "" : (stryCov_9fa48("3148"), '-'))), stryMutAct_9fa48("3149") ? true : (stryCov_9fa48("3149"), false), null)}
                        {renderCommonCells(lesson, stryMutAct_9fa48("3150") ? true : (stryCov_9fa48("3150"), false))}
                    </TableRow>)))}
            </>;
      }
    };
    if (stryMutAct_9fa48("3153") ? false : stryMutAct_9fa48("3152") ? true : stryMutAct_9fa48("3151") ? canExpand : (stryCov_9fa48("3151", "3152", "3153"), !canExpand)) return renderCollapsedRow();
    return isExpanded ? renderExpandedRows() : renderCollapsedRow();
  }
});
export default LessonGroupRow;