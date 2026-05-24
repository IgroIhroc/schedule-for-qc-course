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
import { connect } from 'react-redux';
import { isNil } from 'lodash';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaClipboardList, FaClock, FaEye, FaEyeSlash, FaHome, FaRunning, FaSignOutAlt, FaTrash, FaUser } from 'react-icons/fa';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Header.scss';
import { ADMIN_PAGE_LINK, HOME_PAGE_LINK, LOGIN_LINK, LOGOUT_LINK, MY_PROFILE_LINK, SCHEDULE_PAGE_LINK, TEACHER_LIST_LINK, TEACHER_SCHEDULE_LINK } from '../../constants/links';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import * as colors from '../../constants/schedule/colors';
import FreeRooms from '../../containers/Dialogs/FreeRoomsDialog';
import { setSemesterLoadingService } from '../../services/loadingService';
import { ADMIN_TITLE, CLEAR_CACHE_BUTTON, CLEAR_CACHE_CONFIRM, CLEAR_CACHE_ERROR, CLEAR_CACHE_SUCCESS, CLEAR_CACHE_TITLE, CLEARING_CACHE, CANCEL_BUTTON_LABEL, COMMON_YES_BUTTON_TITLE, HOME_TITLE, LOGIN_TITLE, LOGOUT_TITLE, MENU_BUTTON, MY_PROFILE, SCHEDULE_TITLE, SEMESTER_LABEL } from '../../constants/translationLabels/common';
import { getCurrentSemesterRequsted } from '../../actions/schedule';
import { axiosCall } from "../../services/axios";
import { DELETE, POST } from "../../constants/methods";
import CustomDialog from "../../containers/Dialogs/CustomDialog";
const StyledMenu = withStyles(stryMutAct_9fa48("1910") ? {} : (stryCov_9fa48("1910"), {
  paper: stryMutAct_9fa48("1911") ? {} : (stryCov_9fa48("1911"), {
    border: stryMutAct_9fa48("1912") ? `` : (stryCov_9fa48("1912"), `1px solid ${colors.colors.BORDER}`)
  })
}))(stryMutAct_9fa48("1913") ? () => undefined : (stryCov_9fa48("1913"), props => <Menu elevation={0} getContentAnchorEl={null} anchorOrigin={stryMutAct_9fa48("1914") ? {} : (stryCov_9fa48("1914"), {
  vertical: stryMutAct_9fa48("1915") ? "" : (stryCov_9fa48("1915"), 'bottom'),
  horizontal: stryMutAct_9fa48("1916") ? "" : (stryCov_9fa48("1916"), 'center')
})} transformOrigin={stryMutAct_9fa48("1917") ? {} : (stryCov_9fa48("1917"), {
  vertical: stryMutAct_9fa48("1918") ? "" : (stryCov_9fa48("1918"), 'bottom'),
  horizontal: stryMutAct_9fa48("1919") ? "" : (stryCov_9fa48("1919"), 'center')
})} {...props} />));
const StyledMenuItem = withStyles(stryMutAct_9fa48("1920") ? () => undefined : (stryCov_9fa48("1920"), theme => stryMutAct_9fa48("1921") ? {} : (stryCov_9fa48("1921"), {
  root: stryMutAct_9fa48("1922") ? {} : (stryCov_9fa48("1922"), {
    '&:focus': stryMutAct_9fa48("1923") ? {} : (stryCov_9fa48("1923"), {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    })
  })
})))(MenuItem);
const Header = props => {
  if (stryMutAct_9fa48("1924")) {
    {}
  } else {
    stryCov_9fa48("1924");
    const {
      roles,
      userRole,
      loading,
      currentSemester,
      getCurrentSemester
    } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = stryMutAct_9fa48("1925") ? () => undefined : (stryCov_9fa48("1925"), (() => {
      const handleClick = event => setAnchorEl(event.currentTarget);
      return handleClick;
    })());
    const handleClose = stryMutAct_9fa48("1926") ? () => undefined : (stryCov_9fa48("1926"), (() => {
      const handleClose = () => setAnchorEl(null);
      return handleClose;
    })());
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleClickUserMenu = stryMutAct_9fa48("1927") ? () => undefined : (stryCov_9fa48("1927"), (() => {
      const handleClickUserMenu = event => setAnchorElUser(event.currentTarget);
      return handleClickUserMenu;
    })());
    const handleCloseUserMenu = stryMutAct_9fa48("1928") ? () => undefined : (stryCov_9fa48("1928"), (() => {
      const handleCloseUserMenu = () => setAnchorElUser(null);
      return handleCloseUserMenu;
    })());
    const [schedulePublished, setSchedulePublished] = useState(stryMutAct_9fa48("1929") ? false : (stryCov_9fa48("1929"), true));
    const [cacheClearing, setCacheClearing] = useState(stryMutAct_9fa48("1930") ? true : (stryCov_9fa48("1930"), false));
    const [cacheDialogOpen, setCacheDialogOpen] = useState(stryMutAct_9fa48("1931") ? true : (stryCov_9fa48("1931"), false));
    const [cacheResultDialog, setCacheResultDialog] = useState(stryMutAct_9fa48("1932") ? {} : (stryCov_9fa48("1932"), {
      open: stryMutAct_9fa48("1933") ? true : (stryCov_9fa48("1933"), false),
      success: stryMutAct_9fa48("1934") ? false : (stryCov_9fa48("1934"), true)
    }));
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1935") ? "" : (stryCov_9fa48("1935"), 'common'));
    useEffect(() => {
      if (stryMutAct_9fa48("1936")) {
        {}
      } else {
        stryCov_9fa48("1936");
        if (stryMutAct_9fa48("1939") ? userRole !== roles.MANAGER : stryMutAct_9fa48("1938") ? false : stryMutAct_9fa48("1937") ? true : (stryCov_9fa48("1937", "1938", "1939"), userRole === roles.MANAGER)) {
          if (stryMutAct_9fa48("1940")) {
            {}
          } else {
            stryCov_9fa48("1940");
            setSemesterLoadingService(stryMutAct_9fa48("1941") ? false : (stryCov_9fa48("1941"), true));
            getCurrentSemester();
            axiosCall(stryMutAct_9fa48("1942") ? "" : (stryCov_9fa48("1942"), 'schedules/public/status')).then(stryMutAct_9fa48("1943") ? () => undefined : (stryCov_9fa48("1943"), ({
              data
            }) => setSchedulePublished(data.published))).catch(console.error);
          }
        }
      }
    }, stryMutAct_9fa48("1944") ? [] : (stryCov_9fa48("1944"), [userRole, roles.MANAGER, getCurrentSemester]));
    const handleTogglePublish = () => {
      if (stryMutAct_9fa48("1945")) {
        {}
      } else {
        stryCov_9fa48("1945");
        if (stryMutAct_9fa48("1947") ? false : stryMutAct_9fa48("1946") ? true : (stryCov_9fa48("1946", "1947"), schedulePublished)) {
          if (stryMutAct_9fa48("1948")) {
            {}
          } else {
            stryCov_9fa48("1948");
            axiosCall(stryMutAct_9fa48("1949") ? "" : (stryCov_9fa48("1949"), 'schedules/publish'), DELETE).then(stryMutAct_9fa48("1950") ? () => undefined : (stryCov_9fa48("1950"), () => setSchedulePublished(stryMutAct_9fa48("1951") ? true : (stryCov_9fa48("1951"), false)))).catch(console.error);
          }
        } else {
          if (stryMutAct_9fa48("1952")) {
            {}
          } else {
            stryCov_9fa48("1952");
            axiosCall(stryMutAct_9fa48("1953") ? "" : (stryCov_9fa48("1953"), 'schedules/publish'), POST).then(stryMutAct_9fa48("1954") ? () => undefined : (stryCov_9fa48("1954"), () => setSchedulePublished(stryMutAct_9fa48("1955") ? false : (stryCov_9fa48("1955"), true)))).catch(console.error);
          }
        }
        handleCloseUserMenu();
      }
    };
    const handleClearCacheClick = () => {
      if (stryMutAct_9fa48("1956")) {
        {}
      } else {
        stryCov_9fa48("1956");
        handleCloseUserMenu();
        setCacheDialogOpen(stryMutAct_9fa48("1957") ? false : (stryCov_9fa48("1957"), true));
      }
    };
    const handleClearCacheConfirm = () => {
      if (stryMutAct_9fa48("1958")) {
        {}
      } else {
        stryCov_9fa48("1958");
        setCacheDialogOpen(stryMutAct_9fa48("1959") ? true : (stryCov_9fa48("1959"), false));
        setCacheClearing(stryMutAct_9fa48("1960") ? false : (stryCov_9fa48("1960"), true));
        axiosCall(stryMutAct_9fa48("1961") ? "" : (stryCov_9fa48("1961"), 'admin/cache/all'), DELETE).then(() => {
          if (stryMutAct_9fa48("1962")) {
            {}
          } else {
            stryCov_9fa48("1962");
            setCacheResultDialog(stryMutAct_9fa48("1963") ? {} : (stryCov_9fa48("1963"), {
              open: stryMutAct_9fa48("1964") ? false : (stryCov_9fa48("1964"), true),
              success: stryMutAct_9fa48("1965") ? false : (stryCov_9fa48("1965"), true)
            }));
          }
        }).catch(() => {
          if (stryMutAct_9fa48("1966")) {
            {}
          } else {
            stryCov_9fa48("1966");
            setCacheResultDialog(stryMutAct_9fa48("1967") ? {} : (stryCov_9fa48("1967"), {
              open: stryMutAct_9fa48("1968") ? false : (stryCov_9fa48("1968"), true),
              success: stryMutAct_9fa48("1969") ? true : (stryCov_9fa48("1969"), false)
            }));
          }
        }).finally(() => {
          if (stryMutAct_9fa48("1970")) {
            {}
          } else {
            stryCov_9fa48("1970");
            setCacheClearing(stryMutAct_9fa48("1971") ? true : (stryCov_9fa48("1971"), false));
          }
        });
      }
    };
    const handleClearCacheCancel = () => {
      if (stryMutAct_9fa48("1972")) {
        {}
      } else {
        stryCov_9fa48("1972");
        setCacheDialogOpen(stryMutAct_9fa48("1973") ? true : (stryCov_9fa48("1973"), false));
      }
    };
    const handleResultDialogClose = () => {
      if (stryMutAct_9fa48("1974")) {
        {}
      } else {
        stryCov_9fa48("1974");
        setCacheResultDialog(stryMutAct_9fa48("1975") ? {} : (stryCov_9fa48("1975"), {
          open: stryMutAct_9fa48("1976") ? true : (stryCov_9fa48("1976"), false),
          success: stryMutAct_9fa48("1977") ? false : (stryCov_9fa48("1977"), true)
        }));
      }
    };
    const getUserMenu = role => {
      if (stryMutAct_9fa48("1978")) {
        {}
      } else {
        stryCov_9fa48("1978");
        let userMenu = null;
        if (stryMutAct_9fa48("1980") ? false : stryMutAct_9fa48("1979") ? true : (stryCov_9fa48("1979", "1980"), isNil(role))) {
          if (stryMutAct_9fa48("1981")) {
            {}
          } else {
            stryCov_9fa48("1981");
            return <Link to={LOGIN_LINK} className="navLinks">
                    {t(LOGIN_TITLE)}
                </Link>;
          }
        }
        switch (role) {
          case roles.MANAGER:
            if (stryMutAct_9fa48("1982")) {} else {
              stryCov_9fa48("1982");
              userMenu = <div className="user-menu">
                        <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClickUserMenu}>
                            {localStorage.getItem(stryMutAct_9fa48("1983") ? "" : (stryCov_9fa48("1983"), 'email'))}
                            <ListItemIcon>
                                <FaCaretDown fontSize="normall" />
                            </ListItemIcon>
                        </Button>
                        <StyledMenu id="customized-menu" anchorEl={anchorElUser} keepMounted open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                            <Link to={ADMIN_PAGE_LINK} className="navLinks" style={stryMutAct_9fa48("1984") ? {} : (stryCov_9fa48("1984"), {
                    textDecoration: stryMutAct_9fa48("1985") ? "" : (stryCov_9fa48("1985"), 'none')
                  })} onClick={handleCloseUserMenu}>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <FaUser fontSize="normall" />
                                    </ListItemIcon>
                                    {t(ADMIN_TITLE)}
                                </StyledMenuItem>
                            </Link>
                            <Link to={SCHEDULE_PAGE_LINK} className="navLinks" style={stryMutAct_9fa48("1986") ? {} : (stryCov_9fa48("1986"), {
                    textDecoration: stryMutAct_9fa48("1987") ? "" : (stryCov_9fa48("1987"), 'none')
                  })} onClick={handleCloseUserMenu}>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <FaClock fontSize="normal" />
                                    </ListItemIcon>
                                    {t(SCHEDULE_TITLE)}
                                </StyledMenuItem>
                            </Link>
                            <span className="navLinks" style={stryMutAct_9fa48("1988") ? {} : (stryCov_9fa48("1988"), {
                    textDecoration: stryMutAct_9fa48("1989") ? "" : (stryCov_9fa48("1989"), 'none')
                  })} onClick={handleCloseUserMenu} role="button" tabIndex="0">
                                <StyledMenuItem>
                                    <FreeRooms classScheduler={props.classScheduler} />
                                </StyledMenuItem>
                            </span>
                            <StyledMenuItem onClick={handleTogglePublish}>
                                <ListItemIcon>
                                    {schedulePublished ? <FaEyeSlash fontSize="normal" /> : <FaEye fontSize="normal" />}
                                </ListItemIcon>
                                {schedulePublished ? t(stryMutAct_9fa48("1990") ? "" : (stryCov_9fa48("1990"), 'unpublish_schedule')) : t(stryMutAct_9fa48("1991") ? "" : (stryCov_9fa48("1991"), 'publish_schedule'))}
                            </StyledMenuItem>
                            <StyledMenuItem onClick={handleClearCacheClick} disabled={cacheClearing}>
                                <ListItemIcon>
                                    <FaTrash fontSize="normal" />
                                </ListItemIcon>
                                {cacheClearing ? t(CLEARING_CACHE) : t(CLEAR_CACHE_BUTTON)}
                            </StyledMenuItem>
                            <Link to={MY_PROFILE_LINK} className="navLinks" style={stryMutAct_9fa48("1992") ? {} : (stryCov_9fa48("1992"), {
                    textDecoration: stryMutAct_9fa48("1993") ? "" : (stryCov_9fa48("1993"), 'none')
                  })} onClick={handleCloseUserMenu}>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <FaUser fontSize="normal" />
                                    </ListItemIcon>
                                    {t(MY_PROFILE)}
                                </StyledMenuItem>
                            </Link>
                            <Link to={LOGOUT_LINK} className="navLinks" style={stryMutAct_9fa48("1994") ? {} : (stryCov_9fa48("1994"), {
                    textDecoration: stryMutAct_9fa48("1995") ? "" : (stryCov_9fa48("1995"), 'none')
                  })} onClick={handleCloseUserMenu}>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <FaSignOutAlt fontSize="normal" />
                                    </ListItemIcon>
                                    {t(LOGOUT_TITLE)}
                                </StyledMenuItem>
                            </Link>
                        </StyledMenu>
                    </div>;
              break;
            }
          case roles.TEACHER:
            if (stryMutAct_9fa48("1996")) {} else {
              stryCov_9fa48("1996");
              userMenu = <div className="user-menu">
                        <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClickUserMenu}>
                            {localStorage.getItem(stryMutAct_9fa48("1997") ? "" : (stryCov_9fa48("1997"), 'email'))}
                            <ListItemIcon>
                                <FaCaretDown fontSize="normal" />
                            </ListItemIcon>
                        </Button>
                        <StyledMenu id="customized-menu" anchorEl={anchorElUser} keepMounted open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                            <Link to={TEACHER_LIST_LINK} className="navLinks" style={stryMutAct_9fa48("1998") ? {} : (stryCov_9fa48("1998"), {
                    textDecoration: stryMutAct_9fa48("1999") ? "" : (stryCov_9fa48("1999"), 'none')
                  })} onClick={handleCloseUserMenu}>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <FaClock fontSize="normal" />
                                    </ListItemIcon>
                                    {t(SCHEDULE_TITLE)}
                                </StyledMenuItem>
                            </Link>
                            <span className="navLinks" style={stryMutAct_9fa48("2000") ? {} : (stryCov_9fa48("2000"), {
                    textDecoration: stryMutAct_9fa48("2001") ? "" : (stryCov_9fa48("2001"), 'none')
                  })} onClick={() => {
                    if (stryMutAct_9fa48("2002")) {
                      {}
                    } else {
                      stryCov_9fa48("2002");
                      handleCloseUserMenu();
                    }
                  }} role="button" tabIndex="0"></span>
                            <Link to={MY_PROFILE_LINK} className="navLinks" style={stryMutAct_9fa48("2003") ? {} : (stryCov_9fa48("2003"), {
                    textDecoration: stryMutAct_9fa48("2004") ? "" : (stryCov_9fa48("2004"), 'none')
                  })} onClick={handleCloseUserMenu}>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <FaUser fontSize="normal" />
                                    </ListItemIcon>
                                    {t(MY_PROFILE)}
                                </StyledMenuItem>
                            </Link>
                            <Link to={LOGOUT_LINK} className="navLinks" style={stryMutAct_9fa48("2005") ? {} : (stryCov_9fa48("2005"), {
                    textDecoration: stryMutAct_9fa48("2006") ? "" : (stryCov_9fa48("2006"), 'none')
                  })} onClick={handleCloseUserMenu}>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <FaSignOutAlt fontSize="normal" />
                                    </ListItemIcon>
                                    {t(LOGOUT_TITLE)}
                                </StyledMenuItem>
                            </Link>
                        </StyledMenu>
                    </div>;
              break;
            }
          default:
            if (stryMutAct_9fa48("2007")) {} else {
              stryCov_9fa48("2007");
              userMenu = <div className="user-menu">
                        <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClickUserMenu}>
                            {localStorage.getItem(stryMutAct_9fa48("2008") ? "" : (stryCov_9fa48("2008"), 'email'))}
                        </Button>
                        <StyledMenu id="customized-menu" anchorEl={anchorElUser} keepMounted open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                            <Link to={LOGOUT_LINK} className="navLinks" style={stryMutAct_9fa48("2009") ? {} : (stryCov_9fa48("2009"), {
                    textDecoration: stryMutAct_9fa48("2010") ? "" : (stryCov_9fa48("2010"), 'none')
                  })} onClick={handleCloseUserMenu}>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <FaSignOutAlt fontSize="normal" />
                                    </ListItemIcon>
                                    {t(LOGOUT_TITLE)}
                                </StyledMenuItem>
                            </Link>
                        </StyledMenu>
                    </div>;
            }
        }
        return userMenu;
      }
    };
    let leftLinks = null;
    let menu = null;
    const userMenu = getUserMenu(userRole);
    if (stryMutAct_9fa48("2013") ? userRole !== roles.MANAGER : stryMutAct_9fa48("2012") ? false : stryMutAct_9fa48("2011") ? true : (stryCov_9fa48("2011", "2012", "2013"), userRole === roles.MANAGER)) {
      if (stryMutAct_9fa48("2014")) {
        {}
      } else {
        stryCov_9fa48("2014");
        leftLinks = <>
                {loading ? <span className="navLinks nav-semester">
                        <CircularProgress size={20} />
                    </span> : <span className="navLinks nav-semester">
                        {t(SEMESTER_LABEL)}: {currentSemester.description}
                    </span>}
            </>;
        menu = <div className="menu">
                <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>
                    {t(MENU_BUTTON)}
                </Button>

                <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <span className="navLinks menu-semester">{currentSemester.description}</span>
                    <Link to={HOME_PAGE_LINK} className="navLinks" style={stryMutAct_9fa48("2015") ? {} : (stryCov_9fa48("2015"), {
              textDecoration: stryMutAct_9fa48("2016") ? "" : (stryCov_9fa48("2016"), 'none')
            })} onClick={handleClose}>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FaHome fontSize="normall" />
                            </ListItemIcon>
                            {t(HOME_TITLE)}
                        </StyledMenuItem>
                    </Link>

                    <Link to={SCHEDULE_PAGE_LINK} className="navLinks" style={stryMutAct_9fa48("2017") ? {} : (stryCov_9fa48("2017"), {
              textDecoration: stryMutAct_9fa48("2018") ? "" : (stryCov_9fa48("2018"), 'none')
            })} onClick={handleClose}>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FaClock fontSize="normall" />
                            </ListItemIcon>
                            {t(SCHEDULE_TITLE)}
                        </StyledMenuItem>
                    </Link>

                    <Link to={ADMIN_PAGE_LINK} className="navLinks" style={stryMutAct_9fa48("2019") ? {} : (stryCov_9fa48("2019"), {
              textDecoration: stryMutAct_9fa48("2020") ? "" : (stryCov_9fa48("2020"), 'none')
            })} onClick={handleClose}>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FaUser fontSize="normall" />
                            </ListItemIcon>
                            {t(ADMIN_TITLE)}
                        </StyledMenuItem>
                    </Link>

                    <span className="navLinks" style={stryMutAct_9fa48("2021") ? {} : (stryCov_9fa48("2021"), {
              textDecoration: stryMutAct_9fa48("2022") ? "" : (stryCov_9fa48("2022"), 'none')
            })} onClick={handleClose} role="button" tabIndex="0">
                        <StyledMenuItem>
                            <FreeRooms classScheduler={props.classScheduler} />
                        </StyledMenuItem>
                    </span>

                    <Link to={LOGOUT_LINK} className="navLinks" style={stryMutAct_9fa48("2023") ? {} : (stryCov_9fa48("2023"), {
              textDecoration: stryMutAct_9fa48("2024") ? "" : (stryCov_9fa48("2024"), 'none')
            })} onClick={handleClose}>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FaSignOutAlt fontSize="normall" />
                            </ListItemIcon>
                            {t(LOGOUT_TITLE)}
                        </StyledMenuItem>
                    </Link>
                </StyledMenu>
            </div>;
      }
    } else if (stryMutAct_9fa48("2027") ? userRole !== roles.TEACHER : stryMutAct_9fa48("2026") ? false : stryMutAct_9fa48("2025") ? true : (stryCov_9fa48("2025", "2026", "2027"), userRole === roles.TEACHER)) {
      if (stryMutAct_9fa48("2028")) {
        {}
      } else {
        stryCov_9fa48("2028");
        menu = <div className="menu">
                <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>
                    {t(MENU_BUTTON)}
                </Button>

                <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <Link to={HOME_PAGE_LINK} className="navLinks" style={stryMutAct_9fa48("2029") ? {} : (stryCov_9fa48("2029"), {
              textDecoration: stryMutAct_9fa48("2030") ? "" : (stryCov_9fa48("2030"), 'none')
            })} onClick={handleClose}>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FaHome fontSize="normall" />
                            </ListItemIcon>
                            {t(HOME_TITLE)}
                        </StyledMenuItem>
                    </Link>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <FaClipboardList fontSize="normall" />
                        </ListItemIcon>
                    </StyledMenuItem>

                    <Link to={TEACHER_SCHEDULE_LINK} className="navLinks" style={stryMutAct_9fa48("2031") ? {} : (stryCov_9fa48("2031"), {
              textDecoration: stryMutAct_9fa48("2032") ? "" : (stryCov_9fa48("2032"), 'none')
            })} onClick={handleClose}>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FaClock fontSize="normall" />
                            </ListItemIcon>
                            {t(SCHEDULE_TITLE)}
                        </StyledMenuItem>
                    </Link>

                    <Link to={LOGOUT_LINK} className="navLinks" style={stryMutAct_9fa48("2033") ? {} : (stryCov_9fa48("2033"), {
              textDecoration: stryMutAct_9fa48("2034") ? "" : (stryCov_9fa48("2034"), 'none')
            })} onClick={handleClose}>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FaSignOutAlt fontSize="normall" />
                            </ListItemIcon>
                            {t(LOGOUT_TITLE)}
                        </StyledMenuItem>
                    </Link>
                </StyledMenu>
            </div>;
      }
    } else if (stryMutAct_9fa48("2036") ? false : stryMutAct_9fa48("2035") ? true : (stryCov_9fa48("2035", "2036"), isNil(userRole))) {
      if (stryMutAct_9fa48("2037")) {
        {}
      } else {
        stryCov_9fa48("2037");
        menu = <div className="menu">
                <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>
                    {t(MENU_BUTTON)}
                </Button>
                <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <Link to={HOME_PAGE_LINK} className="navLinks" style={stryMutAct_9fa48("2038") ? {} : (stryCov_9fa48("2038"), {
              textDecoration: stryMutAct_9fa48("2039") ? "" : (stryCov_9fa48("2039"), 'none')
            })} onClick={() => {
              if (stryMutAct_9fa48("2040")) {
                {}
              } else {
                stryCov_9fa48("2040");
                setAnchorEl(null);
              }
            }}>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FaHome fontSize="normall" />
                            </ListItemIcon>
                            {t(HOME_TITLE)}
                        </StyledMenuItem>
                    </Link>
                    <Link to={LOGIN_LINK} className="navLinks" style={stryMutAct_9fa48("2041") ? {} : (stryCov_9fa48("2041"), {
              textDecoration: stryMutAct_9fa48("2042") ? "" : (stryCov_9fa48("2042"), 'none')
            })} onClick={handleClose}>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FaRunning fontSize="normall" />
                            </ListItemIcon>
                            {t(LOGIN_TITLE)}
                        </StyledMenuItem>
                    </Link>
                </StyledMenu>
            </div>;
      }
    }
    return <>
            <header className="header">
                {menu}
                <nav className="header-blocks header-blocks_one">
                    <Link to={HOME_PAGE_LINK} className="navLinks">
                        {t(HOME_TITLE)}
                    </Link>
                    {leftLinks}
                </nav>
                <nav className="header-blocks header-blocks_two">{userMenu}</nav>
                <nav className="header-blocks header-blocks_three">
                    <LanguageSelector />
                </nav>
            </header>

            <CustomDialog open={cacheDialogOpen} onClose={handleClearCacheCancel} title={t(CLEAR_CACHE_TITLE)} buttons={stryMutAct_9fa48("2043") ? [] : (stryCov_9fa48("2043"), [stryMutAct_9fa48("2044") ? {} : (stryCov_9fa48("2044"), {
        label: t(CANCEL_BUTTON_LABEL),
        handleClick: handleClearCacheCancel
      }), stryMutAct_9fa48("2045") ? {} : (stryCov_9fa48("2045"), {
        label: t(COMMON_YES_BUTTON_TITLE),
        handleClick: handleClearCacheConfirm,
        color: stryMutAct_9fa48("2046") ? "" : (stryCov_9fa48("2046"), 'primary')
      })])}>
                {t(CLEAR_CACHE_CONFIRM)}
            </CustomDialog>

            <CustomDialog open={cacheResultDialog.open} onClose={handleResultDialogClose} title={t(CLEAR_CACHE_TITLE)} buttons={stryMutAct_9fa48("2047") ? [] : (stryCov_9fa48("2047"), [stryMutAct_9fa48("2048") ? {} : (stryCov_9fa48("2048"), {
        label: stryMutAct_9fa48("2049") ? "" : (stryCov_9fa48("2049"), 'OK'),
        handleClick: handleResultDialogClose,
        color: stryMutAct_9fa48("2050") ? "" : (stryCov_9fa48("2050"), 'primary')
      })])}>
                {cacheResultDialog.success ? t(CLEAR_CACHE_SUCCESS) : t(CLEAR_CACHE_ERROR)}
            </CustomDialog>
        </>;
  }
};
const mapStateToProps = stryMutAct_9fa48("2051") ? () => undefined : (stryCov_9fa48("2051"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("2052") ? {} : (stryCov_9fa48("2052"), {
    classScheduler: state.classActions.classScheduler,
    currentSemester: state.schedule.currentSemester,
    loading: state.loadingIndicator.semesterLoading
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("2053") ? () => undefined : (stryCov_9fa48("2053"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("2054") ? {} : (stryCov_9fa48("2054"), {
    getCurrentSemester: stryMutAct_9fa48("2055") ? () => undefined : (stryCov_9fa48("2055"), () => dispatch(getCurrentSemesterRequsted()))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(Header);