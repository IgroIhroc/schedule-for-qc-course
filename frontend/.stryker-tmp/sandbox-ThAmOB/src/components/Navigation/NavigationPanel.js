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
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './NavigationPanel.scss';
import { general, tabsComponents } from '../../constants/navigationComponents';
import { ADMIN_PAGE_LINK } from '../../constants/links';
import { COMMON_MORE_LABEL } from '../../constants/translationLabels/common';
const NavigationPanel = () => {
  if (stryMutAct_9fa48("2363")) {
    {}
  } else {
    stryCov_9fa48("2363");
    const history = useHistory();
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2364") ? "" : (stryCov_9fa48("2364"), 'common'));
    const [selectItem, setSelectItem] = useState(stryMutAct_9fa48("2365") ? "Stryker was here!" : (stryCov_9fa48("2365"), ''));
    const [selectedTab, setSelectedTab] = useState(stryMutAct_9fa48("2366") ? "Stryker was here!" : (stryCov_9fa48("2366"), ''));
    const getCurrentTabNameByUrl = () => {
      if (stryMutAct_9fa48("2367")) {
        {}
      } else {
        stryCov_9fa48("2367");
        const pathName = history.location.pathname.split(stryMutAct_9fa48("2368") ? "" : (stryCov_9fa48("2368"), '/'));
        pathName.shift();
        return pathName[1];
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("2369")) {
        {}
      } else {
        stryCov_9fa48("2369");
        const tabByUrl = getCurrentTabNameByUrl();
        const tabIndex = tabsComponents.findIndex(stryMutAct_9fa48("2370") ? () => undefined : (stryCov_9fa48("2370"), item => stryMutAct_9fa48("2373") ? item.name !== tabByUrl : stryMutAct_9fa48("2372") ? false : stryMutAct_9fa48("2371") ? true : (stryCov_9fa48("2371", "2372", "2373"), item.name === tabByUrl)));
        if (stryMutAct_9fa48("2376") ? tabIndex !== -1 : stryMutAct_9fa48("2375") ? false : stryMutAct_9fa48("2374") ? true : (stryCov_9fa48("2374", "2375", "2376"), tabIndex === (stryMutAct_9fa48("2377") ? +1 : (stryCov_9fa48("2377"), -1)))) {
          if (stryMutAct_9fa48("2378")) {
            {}
          } else {
            stryCov_9fa48("2378");
            setSelectedTab(tabsComponents.length);
            setSelectItem(tabByUrl);
          }
        } else {
          if (stryMutAct_9fa48("2379")) {
            {}
          } else {
            stryCov_9fa48("2379");
            setSelectedTab(tabIndex);
          }
        }
      }
    }, stryMutAct_9fa48("2380") ? ["Stryker was here"] : (stryCov_9fa48("2380"), []));
    const handleNavigate = (item, index) => {
      if (stryMutAct_9fa48("2381")) {
        {}
      } else {
        stryCov_9fa48("2381");
        setSelectedTab(index);
        document.title = t(item.title);
        history.push(stryMutAct_9fa48("2382") ? {} : (stryCov_9fa48("2382"), {
          ...history.location,
          pathname: stryMutAct_9fa48("2383") ? `` : (stryCov_9fa48("2383"), `${ADMIN_PAGE_LINK}/${item.name}`)
        }));
      }
    };
    return <Paper className="admin-navigation">
            <List className="navigation-container">
                {tabsComponents.map(stryMutAct_9fa48("2384") ? () => undefined : (stryCov_9fa48("2384"), (item, index) => <ListItem selected={stryMutAct_9fa48("2387") ? selectedTab !== index : stryMutAct_9fa48("2386") ? false : stryMutAct_9fa48("2385") ? true : (stryCov_9fa48("2385", "2386", "2387"), selectedTab === index)} key={item.name} onClick={stryMutAct_9fa48("2388") ? () => undefined : (stryCov_9fa48("2388"), () => handleNavigate(item, index))} className="navigation-link">
                        <ListItemText>{t(item.title)}</ListItemText>
                    </ListItem>))}
                <ListItem className="navigation-link select-container " selected={stryMutAct_9fa48("2391") ? selectedTab !== tabsComponents.length : stryMutAct_9fa48("2390") ? false : stryMutAct_9fa48("2389") ? true : (stryCov_9fa48("2389", "2390", "2391"), selectedTab === tabsComponents.length)}>
                    <Select className="navigation-select" labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" value={selectItem} displayEmpty onChange={event => {
            if (stryMutAct_9fa48("2392")) {
              {}
            } else {
              stryCov_9fa48("2392");
              const {
                value: eventValue
              } = event.target;
              setSelectItem(eventValue);
            }
          }}>
                        <MenuItem value="" disabled selected className="navigation-select-item">
                            {t(COMMON_MORE_LABEL)}
                        </MenuItem>
                        {general.map(stryMutAct_9fa48("2393") ? () => undefined : (stryCov_9fa48("2393"), item => <MenuItem key={stryMutAct_9fa48("2394") ? item.name - item.title : (stryCov_9fa48("2394"), item.name + item.title)} className="navigation-select-item" value={item.name} onClick={stryMutAct_9fa48("2395") ? () => undefined : (stryCov_9fa48("2395"), () => handleNavigate(item, tabsComponents.length))}>
                                {t(item.title)}
                            </MenuItem>))}
                    </Select>
                </ListItem>
            </List>
        </Paper>;
  }
};
export default NavigationPanel;