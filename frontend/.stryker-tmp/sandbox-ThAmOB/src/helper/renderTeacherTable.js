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
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { useTranslation } from 'react-i18next';
import { FaEnvelope } from 'react-icons/fa';
import TableHead from '@material-ui/core/TableHead';
import { withStyles } from '@material-ui/core';
import { getTeacherFullName } from './renderTeacher';
import { ALL_PAGE, ROWS_PER_PAGE, SEND_LETTER_LABEL, TEACHER_LABEL, TEACHER_POSITION } from '../constants/translationLabels/formElements';
const useStyles1 = makeStyles(stryMutAct_9fa48("6151") ? () => undefined : (stryCov_9fa48("6151"), theme => stryMutAct_9fa48("6152") ? {} : (stryCov_9fa48("6152"), {
  root: stryMutAct_9fa48("6153") ? {} : (stryCov_9fa48("6153"), {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  })
})));
function RenderTeacherTableActions(props) {
  if (stryMutAct_9fa48("6154")) {
    {}
  } else {
    stryCov_9fa48("6154");
    const classes = useStyles1();
    const theme = useTheme();
    const {
      count,
      page,
      rowsPerPage,
      onPageChange
    } = props;
    const handleFirstPageButtonClick = event => {
      if (stryMutAct_9fa48("6155")) {
        {}
      } else {
        stryCov_9fa48("6155");
        onPageChange(event, 0);
      }
    };
    const handleBackButtonClick = event => {
      if (stryMutAct_9fa48("6156")) {
        {}
      } else {
        stryCov_9fa48("6156");
        onPageChange(event, stryMutAct_9fa48("6157") ? page + 1 : (stryCov_9fa48("6157"), page - 1));
      }
    };
    const handleNextButtonClick = event => {
      if (stryMutAct_9fa48("6158")) {
        {}
      } else {
        stryCov_9fa48("6158");
        onPageChange(event, stryMutAct_9fa48("6159") ? page - 1 : (stryCov_9fa48("6159"), page + 1));
      }
    };
    const handleLastPageButtonClick = event => {
      if (stryMutAct_9fa48("6160")) {
        {}
      } else {
        stryCov_9fa48("6160");
        onPageChange(event, stryMutAct_9fa48("6161") ? Math.min(0, Math.ceil(count / rowsPerPage) - 1) : (stryCov_9fa48("6161"), Math.max(0, stryMutAct_9fa48("6162") ? Math.ceil(count / rowsPerPage) + 1 : (stryCov_9fa48("6162"), Math.ceil(stryMutAct_9fa48("6163") ? count * rowsPerPage : (stryCov_9fa48("6163"), count / rowsPerPage)) - 1))));
      }
    };
    return <div className={classes.root}>
            <IconButton onClick={handleFirstPageButtonClick} disabled={stryMutAct_9fa48("6166") ? page !== 0 : stryMutAct_9fa48("6165") ? false : stryMutAct_9fa48("6164") ? true : (stryCov_9fa48("6164", "6165", "6166"), page === 0)} aria-label="first page">
                {(stryMutAct_9fa48("6169") ? theme.direction !== 'rtl' : stryMutAct_9fa48("6168") ? false : stryMutAct_9fa48("6167") ? true : (stryCov_9fa48("6167", "6168", "6169"), theme.direction === (stryMutAct_9fa48("6170") ? "" : (stryCov_9fa48("6170"), 'rtl')))) ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={stryMutAct_9fa48("6173") ? page !== 0 : stryMutAct_9fa48("6172") ? false : stryMutAct_9fa48("6171") ? true : (stryCov_9fa48("6171", "6172", "6173"), page === 0)} aria-label="previous page">
                {(stryMutAct_9fa48("6176") ? theme.direction !== 'rtl' : stryMutAct_9fa48("6175") ? false : stryMutAct_9fa48("6174") ? true : (stryCov_9fa48("6174", "6175", "6176"), theme.direction === (stryMutAct_9fa48("6177") ? "" : (stryCov_9fa48("6177"), 'rtl')))) ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton onClick={handleNextButtonClick} disabled={stryMutAct_9fa48("6181") ? page < Math.ceil(count / rowsPerPage) - 1 : stryMutAct_9fa48("6180") ? page > Math.ceil(count / rowsPerPage) - 1 : stryMutAct_9fa48("6179") ? false : stryMutAct_9fa48("6178") ? true : (stryCov_9fa48("6178", "6179", "6180", "6181"), page >= (stryMutAct_9fa48("6182") ? Math.ceil(count / rowsPerPage) + 1 : (stryCov_9fa48("6182"), Math.ceil(stryMutAct_9fa48("6183") ? count * rowsPerPage : (stryCov_9fa48("6183"), count / rowsPerPage)) - 1)))} aria-label="next page">
                {(stryMutAct_9fa48("6186") ? theme.direction !== 'rtl' : stryMutAct_9fa48("6185") ? false : stryMutAct_9fa48("6184") ? true : (stryCov_9fa48("6184", "6185", "6186"), theme.direction === (stryMutAct_9fa48("6187") ? "" : (stryCov_9fa48("6187"), 'rtl')))) ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton onClick={handleLastPageButtonClick} disabled={stryMutAct_9fa48("6191") ? page < Math.ceil(count / rowsPerPage) - 1 : stryMutAct_9fa48("6190") ? page > Math.ceil(count / rowsPerPage) - 1 : stryMutAct_9fa48("6189") ? false : stryMutAct_9fa48("6188") ? true : (stryCov_9fa48("6188", "6189", "6190", "6191"), page >= (stryMutAct_9fa48("6192") ? Math.ceil(count / rowsPerPage) + 1 : (stryCov_9fa48("6192"), Math.ceil(stryMutAct_9fa48("6193") ? count * rowsPerPage : (stryCov_9fa48("6193"), count / rowsPerPage)) - 1)))} aria-label="last page">
                {(stryMutAct_9fa48("6196") ? theme.direction !== 'rtl' : stryMutAct_9fa48("6195") ? false : stryMutAct_9fa48("6194") ? true : (stryCov_9fa48("6194", "6195", "6196"), theme.direction === (stryMutAct_9fa48("6197") ? "" : (stryCov_9fa48("6197"), 'rtl')))) ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>;
  }
}
RenderTeacherTableActions.propTypes = stryMutAct_9fa48("6198") ? {} : (stryCov_9fa48("6198"), {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
});
const useStyles2 = makeStyles(stryMutAct_9fa48("6199") ? {} : (stryCov_9fa48("6199"), {
  table: stryMutAct_9fa48("6200") ? {} : (stryCov_9fa48("6200"), {
    minWidth: 500
  })
}));
const StyledTableCell = withStyles(stryMutAct_9fa48("6201") ? () => undefined : (stryCov_9fa48("6201"), theme => stryMutAct_9fa48("6202") ? {} : (stryCov_9fa48("6202"), {
  head: stryMutAct_9fa48("6203") ? {} : (stryCov_9fa48("6203"), {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
  }),
  body: stryMutAct_9fa48("6204") ? {} : (stryCov_9fa48("6204"), {
    fontSize: 14
  })
})))(TableCell);
const StyledTableRow = withStyles(stryMutAct_9fa48("6205") ? () => undefined : (stryCov_9fa48("6205"), theme => stryMutAct_9fa48("6206") ? {} : (stryCov_9fa48("6206"), {
  root: stryMutAct_9fa48("6207") ? {} : (stryCov_9fa48("6207"), {
    '&:nth-of-type(odd)': stryMutAct_9fa48("6208") ? {} : (stryCov_9fa48("6208"), {
      backgroundColor: theme.palette.action.hover
    })
  })
})))(TableRow);
export default function RenderTeacherTable(props) {
  if (stryMutAct_9fa48("6209")) {
    {}
  } else {
    stryCov_9fa48("6209");
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const {
      teachers
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("6210") ? "" : (stryCov_9fa48("6210"), 'formElements'));
    const emptyRows = stryMutAct_9fa48("6211") ? rowsPerPage + Math.min(rowsPerPage, teachers.length - page * rowsPerPage) : (stryCov_9fa48("6211"), rowsPerPage - (stryMutAct_9fa48("6212") ? Math.max(rowsPerPage, teachers.length - page * rowsPerPage) : (stryCov_9fa48("6212"), Math.min(rowsPerPage, stryMutAct_9fa48("6213") ? teachers.length + page * rowsPerPage : (stryCov_9fa48("6213"), teachers.length - (stryMutAct_9fa48("6214") ? page / rowsPerPage : (stryCov_9fa48("6214"), page * rowsPerPage)))))));
    const handleChangePage = (event, newPage) => {
      if (stryMutAct_9fa48("6215")) {
        {}
      } else {
        stryCov_9fa48("6215");
        setPage(newPage);
      }
    };
    const handleChangeRowsPerPage = event => {
      if (stryMutAct_9fa48("6216")) {
        {}
      } else {
        stryCov_9fa48("6216");
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      }
    };
    const sendMail = email => {
      if (stryMutAct_9fa48("6217")) {
        {}
      } else {
        stryCov_9fa48("6217");
        const mailto = // "mailto:mail@gmail.com?subject=Test subject&body=Body content";
        stryMutAct_9fa48("6218") ? `` : (stryCov_9fa48("6218"), `mailto:${email}`);
        window.location.href = mailto;
      }
    };
    return <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>{t(TEACHER_LABEL)}</StyledTableCell>
                        <StyledTableCell>{t(TEACHER_POSITION)}</StyledTableCell>
                        <StyledTableCell>{t(SEND_LETTER_LABEL)}</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {((stryMutAct_9fa48("6222") ? rowsPerPage <= 0 : stryMutAct_9fa48("6221") ? rowsPerPage >= 0 : stryMutAct_9fa48("6220") ? false : stryMutAct_9fa48("6219") ? true : (stryCov_9fa48("6219", "6220", "6221", "6222"), rowsPerPage > 0)) ? stryMutAct_9fa48("6223") ? teachers : (stryCov_9fa48("6223"), teachers.slice(stryMutAct_9fa48("6224") ? page / rowsPerPage : (stryCov_9fa48("6224"), page * rowsPerPage), stryMutAct_9fa48("6225") ? page * rowsPerPage - rowsPerPage : (stryCov_9fa48("6225"), (stryMutAct_9fa48("6226") ? page / rowsPerPage : (stryCov_9fa48("6226"), page * rowsPerPage)) + rowsPerPage))) : teachers).map(stryMutAct_9fa48("6227") ? () => undefined : (stryCov_9fa48("6227"), teacher => <StyledTableRow key={teacher.position}>
                            <StyledTableCell align="center" style={stryMutAct_9fa48("6228") ? {} : (stryCov_9fa48("6228"), {
              width: 160
            })}>
                                {getTeacherFullName(teacher)}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row" align="center">
                                {teacher.position}
                            </StyledTableCell>
                            <StyledTableCell style={stryMutAct_9fa48("6229") ? {} : (stryCov_9fa48("6229"), {
              width: 160
            })} align="center">
                                <span>
                                    <p>{teacher.email}</p>
                                    <FaEnvelope className="svg-btn send-message" title={stryMutAct_9fa48("6230") ? `` : (stryCov_9fa48("6230"), `${t(SEND_LETTER_LABEL)} ${teacher.email}`)} onClick={stryMutAct_9fa48("6231") ? () => undefined : (stryCov_9fa48("6231"), () => sendMail(teacher.email))} />
                                </span>
                            </StyledTableCell>
                        </StyledTableRow>))}

                    {stryMutAct_9fa48("6234") ? emptyRows > 0 || <StyledTableRow style={{
            height: 53 * emptyRows
          }}>
                            <TableCell colSpan={6} />
                        </StyledTableRow> : stryMutAct_9fa48("6233") ? false : stryMutAct_9fa48("6232") ? true : (stryCov_9fa48("6232", "6233", "6234"), (stryMutAct_9fa48("6237") ? emptyRows <= 0 : stryMutAct_9fa48("6236") ? emptyRows >= 0 : stryMutAct_9fa48("6235") ? true : (stryCov_9fa48("6235", "6236", "6237"), emptyRows > 0)) && <StyledTableRow style={stryMutAct_9fa48("6238") ? {} : (stryCov_9fa48("6238"), {
            height: stryMutAct_9fa48("6239") ? 53 / emptyRows : (stryCov_9fa48("6239"), 53 * emptyRows)
          })}>
                            <TableCell colSpan={6} />
                        </StyledTableRow>)}
                </TableBody>
                <TableFooter>
                    <StyledTableRow>
                        <TablePagination labelRowsPerPage={stryMutAct_9fa48("6240") ? `` : (stryCov_9fa48("6240"), `${t(ROWS_PER_PAGE)}`)} rowsPerPageOptions={stryMutAct_9fa48("6241") ? [] : (stryCov_9fa48("6241"), [5, 10, 25, stryMutAct_9fa48("6242") ? {} : (stryCov_9fa48("6242"), {
              label: stryMutAct_9fa48("6243") ? `` : (stryCov_9fa48("6243"), `${t(ALL_PAGE)}`),
              value: stryMutAct_9fa48("6244") ? +1 : (stryCov_9fa48("6244"), -1)
            })])} colSpan={3} count={teachers.length} rowsPerPage={rowsPerPage} page={page} SelectProps={stryMutAct_9fa48("6245") ? {} : (stryCov_9fa48("6245"), {
              inputProps: stryMutAct_9fa48("6246") ? {} : (stryCov_9fa48("6246"), {
                'aria-label': stryMutAct_9fa48("6247") ? "" : (stryCov_9fa48("6247"), 'rows per page')
              }),
              native: stryMutAct_9fa48("6248") ? false : (stryCov_9fa48("6248"), true)
            })} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} ActionsComponent={RenderTeacherTableActions} />
                    </StyledTableRow>
                </TableFooter>
            </Table>
        </TableContainer>;
  }
}