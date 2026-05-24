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
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEdit, FaSort, FaSortUp, FaSortDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { GiSightDisabled, IoMdEye } from 'react-icons/all';
import { isEmpty } from 'lodash';
import { dialogTypes } from '../../../constants/dialogs';
import { FORM_TEACHER_A_LABEL, TEACHER_SURNAME, TEACHER_FIRST_NAME, TEACHER_PATRONYMIC, TEACHER_POSITION, DEPARTMENT_TEACHER_LABEL, EMAIL_FIELD } from '../../../constants/translationLabels/formElements';
import { COMMON_DELETE_HOVER_TITLE, COMMON_EDIT_HOVER_TITLE, COMMON_SET_DISABLED, COMMON_SET_ENABLED } from '../../../constants/translationLabels/common';
import NotFound from '../../../share/NotFound/NotFound';
import './TeachersTable.scss';
const ROWS_PER_PAGE_OPTIONS = stryMutAct_9fa48("3674") ? [] : (stryCov_9fa48("3674"), [10, 25, 50]);
const TeachersTable = props => {
  if (stryMutAct_9fa48("3675")) {
    {}
  } else {
    stryCov_9fa48("3675");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("3676") ? "" : (stryCov_9fa48("3676"), 'formElements'));
    const {
      t: tCommon
    } = useTranslation(stryMutAct_9fa48("3677") ? "" : (stryCov_9fa48("3677"), 'common'));
    const {
      visibleItems,
      isDisabled,
      showConfirmDialog,
      selectedTeacherCard
    } = props;
    const [sortConfig, setSortConfig] = useState(stryMutAct_9fa48("3678") ? {} : (stryCov_9fa48("3678"), {
      key: stryMutAct_9fa48("3679") ? "" : (stryCov_9fa48("3679"), 'surname'),
      direction: stryMutAct_9fa48("3680") ? "" : (stryCov_9fa48("3680"), 'asc')
    }));
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    useEffect(() => {
      if (stryMutAct_9fa48("3681")) {
        {}
      } else {
        stryCov_9fa48("3681");
        setCurrentPage(1);
      }
    }, stryMutAct_9fa48("3682") ? [] : (stryCov_9fa48("3682"), [visibleItems.length]));
    const handleSort = key => {
      if (stryMutAct_9fa48("3683")) {
        {}
      } else {
        stryCov_9fa48("3683");
        let direction = stryMutAct_9fa48("3684") ? "" : (stryCov_9fa48("3684"), 'asc');
        if (stryMutAct_9fa48("3687") ? sortConfig.key === key || sortConfig.direction === 'asc' : stryMutAct_9fa48("3686") ? false : stryMutAct_9fa48("3685") ? true : (stryCov_9fa48("3685", "3686", "3687"), (stryMutAct_9fa48("3689") ? sortConfig.key !== key : stryMutAct_9fa48("3688") ? true : (stryCov_9fa48("3688", "3689"), sortConfig.key === key)) && (stryMutAct_9fa48("3691") ? sortConfig.direction !== 'asc' : stryMutAct_9fa48("3690") ? true : (stryCov_9fa48("3690", "3691"), sortConfig.direction === (stryMutAct_9fa48("3692") ? "" : (stryCov_9fa48("3692"), 'asc')))))) {
          if (stryMutAct_9fa48("3693")) {
            {}
          } else {
            stryCov_9fa48("3693");
            direction = stryMutAct_9fa48("3694") ? "" : (stryCov_9fa48("3694"), 'desc');
          }
        }
        setSortConfig(stryMutAct_9fa48("3695") ? {} : (stryCov_9fa48("3695"), {
          key,
          direction
        }));
        setCurrentPage(1); // Повернутися на першу сторінку при сортуванні
      }
    };
    const getSortIcon = key => {
      if (stryMutAct_9fa48("3696")) {
        {}
      } else {
        stryCov_9fa48("3696");
        if (stryMutAct_9fa48("3699") ? sortConfig.key === key : stryMutAct_9fa48("3698") ? false : stryMutAct_9fa48("3697") ? true : (stryCov_9fa48("3697", "3698", "3699"), sortConfig.key !== key)) {
          if (stryMutAct_9fa48("3700")) {
            {}
          } else {
            stryCov_9fa48("3700");
            return <FaSort className="sort-icon" />;
          }
        }
        return (stryMutAct_9fa48("3703") ? sortConfig.direction !== 'asc' : stryMutAct_9fa48("3702") ? false : stryMutAct_9fa48("3701") ? true : (stryCov_9fa48("3701", "3702", "3703"), sortConfig.direction === (stryMutAct_9fa48("3704") ? "" : (stryCov_9fa48("3704"), 'asc')))) ? <FaSortUp className="sort-icon active" /> : <FaSortDown className="sort-icon active" />;
      }
    };
    const sortedItems = stryMutAct_9fa48("3705") ? [...visibleItems] : (stryCov_9fa48("3705"), (stryMutAct_9fa48("3706") ? [] : (stryCov_9fa48("3706"), [...visibleItems])).sort((a, b) => {
      if (stryMutAct_9fa48("3707")) {
        {}
      } else {
        stryCov_9fa48("3707");
        let aValue, bValue;
        switch (sortConfig.key) {
          case stryMutAct_9fa48("3709") ? "" : (stryCov_9fa48("3709"), 'surname'):
            if (stryMutAct_9fa48("3708")) {} else {
              stryCov_9fa48("3708");
              aValue = stryMutAct_9fa48("3712") ? a.surname && '' : stryMutAct_9fa48("3711") ? false : stryMutAct_9fa48("3710") ? true : (stryCov_9fa48("3710", "3711", "3712"), a.surname || (stryMutAct_9fa48("3713") ? "Stryker was here!" : (stryCov_9fa48("3713"), '')));
              bValue = stryMutAct_9fa48("3716") ? b.surname && '' : stryMutAct_9fa48("3715") ? false : stryMutAct_9fa48("3714") ? true : (stryCov_9fa48("3714", "3715", "3716"), b.surname || (stryMutAct_9fa48("3717") ? "Stryker was here!" : (stryCov_9fa48("3717"), '')));
              break;
            }
          case stryMutAct_9fa48("3719") ? "" : (stryCov_9fa48("3719"), 'name'):
            if (stryMutAct_9fa48("3718")) {} else {
              stryCov_9fa48("3718");
              aValue = stryMutAct_9fa48("3722") ? a.name && '' : stryMutAct_9fa48("3721") ? false : stryMutAct_9fa48("3720") ? true : (stryCov_9fa48("3720", "3721", "3722"), a.name || (stryMutAct_9fa48("3723") ? "Stryker was here!" : (stryCov_9fa48("3723"), '')));
              bValue = stryMutAct_9fa48("3726") ? b.name && '' : stryMutAct_9fa48("3725") ? false : stryMutAct_9fa48("3724") ? true : (stryCov_9fa48("3724", "3725", "3726"), b.name || (stryMutAct_9fa48("3727") ? "Stryker was here!" : (stryCov_9fa48("3727"), '')));
              break;
            }
          case stryMutAct_9fa48("3729") ? "" : (stryCov_9fa48("3729"), 'patronymic'):
            if (stryMutAct_9fa48("3728")) {} else {
              stryCov_9fa48("3728");
              aValue = stryMutAct_9fa48("3732") ? a.patronymic && '' : stryMutAct_9fa48("3731") ? false : stryMutAct_9fa48("3730") ? true : (stryCov_9fa48("3730", "3731", "3732"), a.patronymic || (stryMutAct_9fa48("3733") ? "Stryker was here!" : (stryCov_9fa48("3733"), '')));
              bValue = stryMutAct_9fa48("3736") ? b.patronymic && '' : stryMutAct_9fa48("3735") ? false : stryMutAct_9fa48("3734") ? true : (stryCov_9fa48("3734", "3735", "3736"), b.patronymic || (stryMutAct_9fa48("3737") ? "Stryker was here!" : (stryCov_9fa48("3737"), '')));
              break;
            }
          case stryMutAct_9fa48("3739") ? "" : (stryCov_9fa48("3739"), 'position'):
            if (stryMutAct_9fa48("3738")) {} else {
              stryCov_9fa48("3738");
              aValue = stryMutAct_9fa48("3742") ? a.position && '' : stryMutAct_9fa48("3741") ? false : stryMutAct_9fa48("3740") ? true : (stryCov_9fa48("3740", "3741", "3742"), a.position || (stryMutAct_9fa48("3743") ? "Stryker was here!" : (stryCov_9fa48("3743"), '')));
              bValue = stryMutAct_9fa48("3746") ? b.position && '' : stryMutAct_9fa48("3745") ? false : stryMutAct_9fa48("3744") ? true : (stryCov_9fa48("3744", "3745", "3746"), b.position || (stryMutAct_9fa48("3747") ? "Stryker was here!" : (stryCov_9fa48("3747"), '')));
              break;
            }
          case stryMutAct_9fa48("3749") ? "" : (stryCov_9fa48("3749"), 'department'):
            if (stryMutAct_9fa48("3748")) {} else {
              stryCov_9fa48("3748");
              aValue = stryMutAct_9fa48("3752") ? a.department?.name && '' : stryMutAct_9fa48("3751") ? false : stryMutAct_9fa48("3750") ? true : (stryCov_9fa48("3750", "3751", "3752"), (stryMutAct_9fa48("3753") ? a.department.name : (stryCov_9fa48("3753"), a.department?.name)) || (stryMutAct_9fa48("3754") ? "Stryker was here!" : (stryCov_9fa48("3754"), '')));
              bValue = stryMutAct_9fa48("3757") ? b.department?.name && '' : stryMutAct_9fa48("3756") ? false : stryMutAct_9fa48("3755") ? true : (stryCov_9fa48("3755", "3756", "3757"), (stryMutAct_9fa48("3758") ? b.department.name : (stryCov_9fa48("3758"), b.department?.name)) || (stryMutAct_9fa48("3759") ? "Stryker was here!" : (stryCov_9fa48("3759"), '')));
              break;
            }
          case stryMutAct_9fa48("3761") ? "" : (stryCov_9fa48("3761"), 'email'):
            if (stryMutAct_9fa48("3760")) {} else {
              stryCov_9fa48("3760");
              aValue = stryMutAct_9fa48("3764") ? a.email && '' : stryMutAct_9fa48("3763") ? false : stryMutAct_9fa48("3762") ? true : (stryCov_9fa48("3762", "3763", "3764"), a.email || (stryMutAct_9fa48("3765") ? "Stryker was here!" : (stryCov_9fa48("3765"), '')));
              bValue = stryMutAct_9fa48("3768") ? b.email && '' : stryMutAct_9fa48("3767") ? false : stryMutAct_9fa48("3766") ? true : (stryCov_9fa48("3766", "3767", "3768"), b.email || (stryMutAct_9fa48("3769") ? "Stryker was here!" : (stryCov_9fa48("3769"), '')));
              break;
            }
          default:
            if (stryMutAct_9fa48("3770")) {} else {
              stryCov_9fa48("3770");
              return 0;
            }
        }
        if (stryMutAct_9fa48("3774") ? aValue >= bValue : stryMutAct_9fa48("3773") ? aValue <= bValue : stryMutAct_9fa48("3772") ? false : stryMutAct_9fa48("3771") ? true : (stryCov_9fa48("3771", "3772", "3773", "3774"), aValue < bValue)) return (stryMutAct_9fa48("3777") ? sortConfig.direction !== 'asc' : stryMutAct_9fa48("3776") ? false : stryMutAct_9fa48("3775") ? true : (stryCov_9fa48("3775", "3776", "3777"), sortConfig.direction === (stryMutAct_9fa48("3778") ? "" : (stryCov_9fa48("3778"), 'asc')))) ? stryMutAct_9fa48("3779") ? +1 : (stryCov_9fa48("3779"), -1) : 1;
        if (stryMutAct_9fa48("3783") ? aValue <= bValue : stryMutAct_9fa48("3782") ? aValue >= bValue : stryMutAct_9fa48("3781") ? false : stryMutAct_9fa48("3780") ? true : (stryCov_9fa48("3780", "3781", "3782", "3783"), aValue > bValue)) return (stryMutAct_9fa48("3786") ? sortConfig.direction !== 'asc' : stryMutAct_9fa48("3785") ? false : stryMutAct_9fa48("3784") ? true : (stryCov_9fa48("3784", "3785", "3786"), sortConfig.direction === (stryMutAct_9fa48("3787") ? "" : (stryCov_9fa48("3787"), 'asc')))) ? 1 : stryMutAct_9fa48("3788") ? +1 : (stryCov_9fa48("3788"), -1);
        return 0;
      }
    }));

    // Пагінація
    const totalPages = Math.ceil(stryMutAct_9fa48("3789") ? sortedItems.length * rowsPerPage : (stryCov_9fa48("3789"), sortedItems.length / rowsPerPage));
    const startIndex = stryMutAct_9fa48("3790") ? (currentPage - 1) / rowsPerPage : (stryCov_9fa48("3790"), (stryMutAct_9fa48("3791") ? currentPage + 1 : (stryCov_9fa48("3791"), currentPage - 1)) * rowsPerPage);
    const paginatedItems = stryMutAct_9fa48("3792") ? sortedItems : (stryCov_9fa48("3792"), sortedItems.slice(startIndex, stryMutAct_9fa48("3793") ? startIndex - rowsPerPage : (stryCov_9fa48("3793"), startIndex + rowsPerPage)));
    const handlePageChange = page => {
      if (stryMutAct_9fa48("3794")) {
        {}
      } else {
        stryCov_9fa48("3794");
        setCurrentPage(page);
      }
    };
    const handleRowsPerPageChange = e => {
      if (stryMutAct_9fa48("3795")) {
        {}
      } else {
        stryCov_9fa48("3795");
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1);
      }
    };
    const sendMail = email => {
      if (stryMutAct_9fa48("3796")) {
        {}
      } else {
        stryCov_9fa48("3796");
        window.location.href = stryMutAct_9fa48("3797") ? `` : (stryCov_9fa48("3797"), `mailto:${email}`);
      }
    };
    if (stryMutAct_9fa48("3799") ? false : stryMutAct_9fa48("3798") ? true : (stryCov_9fa48("3798", "3799"), isEmpty(visibleItems))) {
      if (stryMutAct_9fa48("3800")) {
        {}
      } else {
        stryCov_9fa48("3800");
        return <NotFound name={t(FORM_TEACHER_A_LABEL)} />;
      }
    }
    return <div className="teachers-table-container">
            <table className="teachers-table">
                <thead>
                <tr>
                    <th onClick={stryMutAct_9fa48("3801") ? () => undefined : (stryCov_9fa48("3801"), () => handleSort(stryMutAct_9fa48("3802") ? "" : (stryCov_9fa48("3802"), 'surname')))}>
                        {t(TEACHER_SURNAME)} {getSortIcon(stryMutAct_9fa48("3803") ? "" : (stryCov_9fa48("3803"), 'surname'))}
                    </th>
                    <th onClick={stryMutAct_9fa48("3804") ? () => undefined : (stryCov_9fa48("3804"), () => handleSort(stryMutAct_9fa48("3805") ? "" : (stryCov_9fa48("3805"), 'name')))}>
                        {t(TEACHER_FIRST_NAME)} {getSortIcon(stryMutAct_9fa48("3806") ? "" : (stryCov_9fa48("3806"), 'name'))}
                    </th>
                    <th onClick={stryMutAct_9fa48("3807") ? () => undefined : (stryCov_9fa48("3807"), () => handleSort(stryMutAct_9fa48("3808") ? "" : (stryCov_9fa48("3808"), 'patronymic')))}>
                        {t(TEACHER_PATRONYMIC)} {getSortIcon(stryMutAct_9fa48("3809") ? "" : (stryCov_9fa48("3809"), 'patronymic'))}
                    </th>
                    <th onClick={stryMutAct_9fa48("3810") ? () => undefined : (stryCov_9fa48("3810"), () => handleSort(stryMutAct_9fa48("3811") ? "" : (stryCov_9fa48("3811"), 'position')))}>
                        {t(TEACHER_POSITION)} {getSortIcon(stryMutAct_9fa48("3812") ? "" : (stryCov_9fa48("3812"), 'position'))}
                    </th>
                    <th onClick={stryMutAct_9fa48("3813") ? () => undefined : (stryCov_9fa48("3813"), () => handleSort(stryMutAct_9fa48("3814") ? "" : (stryCov_9fa48("3814"), 'department')))}>
                        {t(DEPARTMENT_TEACHER_LABEL)} {getSortIcon(stryMutAct_9fa48("3815") ? "" : (stryCov_9fa48("3815"), 'department'))}
                    </th>
                    <th onClick={stryMutAct_9fa48("3816") ? () => undefined : (stryCov_9fa48("3816"), () => handleSort(stryMutAct_9fa48("3817") ? "" : (stryCov_9fa48("3817"), 'email')))}>
                        {t(EMAIL_FIELD)} {getSortIcon(stryMutAct_9fa48("3818") ? "" : (stryCov_9fa48("3818"), 'email'))}
                    </th>
                    <th>Дії</th>
                </tr>
                </thead>
                <tbody>
                {paginatedItems.map(stryMutAct_9fa48("3819") ? () => undefined : (stryCov_9fa48("3819"), teacher => <tr key={teacher.id}>
                        <td>{teacher.surname}</td>
                        <td>{teacher.name}</td>
                        <td>{teacher.patronymic}</td>
                        <td>{teacher.position}</td>
                        <td>{stryMutAct_9fa48("3822") ? teacher.department?.name && '—' : stryMutAct_9fa48("3821") ? false : stryMutAct_9fa48("3820") ? true : (stryCov_9fa48("3820", "3821", "3822"), (stryMutAct_9fa48("3823") ? teacher.department.name : (stryCov_9fa48("3823"), teacher.department?.name)) || (stryMutAct_9fa48("3824") ? "" : (stryCov_9fa48("3824"), '—')))}</td>
                        <td>
                            {teacher.email ? <button type="button" className="email-link" onClick={stryMutAct_9fa48("3825") ? () => undefined : (stryCov_9fa48("3825"), () => sendMail(teacher.email))}>
                                    {teacher.email}
                                </button> : stryMutAct_9fa48("3826") ? "" : (stryCov_9fa48("3826"), '—')}
                        </td>
                        <td className="actions-cell">
                            {(stryMutAct_9fa48("3827") ? isDisabled : (stryCov_9fa48("3827"), !isDisabled)) ? <>
                                    <IoMdEye className="action-icon copy-icon-btn" title={tCommon(COMMON_SET_DISABLED)} onClick={stryMutAct_9fa48("3828") ? () => undefined : (stryCov_9fa48("3828"), () => showConfirmDialog(teacher.id, dialogTypes.SET_VISIBILITY_DISABLED))} />
                                    <FaEdit className="action-icon edit-icon-btn" title={tCommon(COMMON_EDIT_HOVER_TITLE)} onClick={stryMutAct_9fa48("3829") ? () => undefined : (stryCov_9fa48("3829"), () => selectedTeacherCard(teacher.id))} />
                                </> : <GiSightDisabled className="action-icon copy-icon-btn" title={tCommon(COMMON_SET_ENABLED)} onClick={stryMutAct_9fa48("3830") ? () => undefined : (stryCov_9fa48("3830"), () => showConfirmDialog(teacher.id, dialogTypes.SET_VISIBILITY_ENABLED))} />}
                            <MdDelete className="action-icon delete-icon-btn" title={tCommon(COMMON_DELETE_HOVER_TITLE)} onClick={stryMutAct_9fa48("3831") ? () => undefined : (stryCov_9fa48("3831"), () => showConfirmDialog(teacher.id, dialogTypes.DELETE_CONFIRM))} />
                        </td>
                    </tr>))}
                </tbody>
            </table>

            <div className="pagination">
                <div className="pagination-rows">
                    <span>Рядків на сторінці:</span>
                    <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
                        {ROWS_PER_PAGE_OPTIONS.map(stryMutAct_9fa48("3832") ? () => undefined : (stryCov_9fa48("3832"), option => <option key={option} value={option}>
                                {option}
                            </option>))}
                    </select>
                </div>

                <div className="pagination-info">
                    {stryMutAct_9fa48("3833") ? startIndex - 1 : (stryCov_9fa48("3833"), startIndex + 1)}–{stryMutAct_9fa48("3834") ? Math.max(startIndex + rowsPerPage, sortedItems.length) : (stryCov_9fa48("3834"), Math.min(stryMutAct_9fa48("3835") ? startIndex - rowsPerPage : (stryCov_9fa48("3835"), startIndex + rowsPerPage), sortedItems.length))} з {sortedItems.length}
                </div>

                <div className="pagination-controls">
                    <button type="button" className="pagination-btn" disabled={stryMutAct_9fa48("3838") ? currentPage !== 1 : stryMutAct_9fa48("3837") ? false : stryMutAct_9fa48("3836") ? true : (stryCov_9fa48("3836", "3837", "3838"), currentPage === 1)} onClick={stryMutAct_9fa48("3839") ? () => undefined : (stryCov_9fa48("3839"), () => handlePageChange(stryMutAct_9fa48("3840") ? currentPage + 1 : (stryCov_9fa48("3840"), currentPage - 1)))}>
                        <FaChevronLeft />
                    </button>
                    <button type="button" className="pagination-btn" disabled={stryMutAct_9fa48("3843") ? currentPage !== totalPages : stryMutAct_9fa48("3842") ? false : stryMutAct_9fa48("3841") ? true : (stryCov_9fa48("3841", "3842", "3843"), currentPage === totalPages)} onClick={stryMutAct_9fa48("3844") ? () => undefined : (stryCov_9fa48("3844"), () => handlePageChange(stryMutAct_9fa48("3845") ? currentPage - 1 : (stryCov_9fa48("3845"), currentPage + 1)))}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>;
  }
};
export default TeachersTable;