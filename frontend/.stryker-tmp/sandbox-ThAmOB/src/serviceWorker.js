/* eslint-disable */
// @ts-nocheck

// serviceWorker doesn't use
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
const isLocalhost = Boolean(stryMutAct_9fa48("8269") ? (window.location.hostname === 'localhost' || window.location.hostname === '[::1]') && window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/) : stryMutAct_9fa48("8268") ? false : stryMutAct_9fa48("8267") ? true : (stryCov_9fa48("8267", "8268", "8269"), (stryMutAct_9fa48("8271") ? window.location.hostname === 'localhost' && window.location.hostname === '[::1]' : stryMutAct_9fa48("8270") ? false : (stryCov_9fa48("8270", "8271"), (stryMutAct_9fa48("8273") ? window.location.hostname !== 'localhost' : stryMutAct_9fa48("8272") ? false : (stryCov_9fa48("8272", "8273"), window.location.hostname === (stryMutAct_9fa48("8274") ? "" : (stryCov_9fa48("8274"), 'localhost')))) || (stryMutAct_9fa48("8276") ? window.location.hostname !== '[::1]' : stryMutAct_9fa48("8275") ? false : (stryCov_9fa48("8275", "8276"), window.location.hostname === (stryMutAct_9fa48("8277") ? "" : (stryCov_9fa48("8277"), '[::1]')))))) || window.location.hostname.match(stryMutAct_9fa48("8288") ? /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][^0-9]?)){3}$/ : stryMutAct_9fa48("8287") ? /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9])){3}$/ : stryMutAct_9fa48("8286") ? /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[^0-9][0-9]?)){3}$/ : stryMutAct_9fa48("8285") ? /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[^01]?[0-9][0-9]?)){3}$/ : stryMutAct_9fa48("8284") ? /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01][0-9][0-9]?)){3}$/ : stryMutAct_9fa48("8283") ? /^127(?:\.(?:25[0-5]|2[0-4][^0-9]|[01]?[0-9][0-9]?)){3}$/ : stryMutAct_9fa48("8282") ? /^127(?:\.(?:25[0-5]|2[^0-4][0-9]|[01]?[0-9][0-9]?)){3}$/ : stryMutAct_9fa48("8281") ? /^127(?:\.(?:25[^0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/ : stryMutAct_9fa48("8280") ? /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))$/ : stryMutAct_9fa48("8279") ? /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/ : stryMutAct_9fa48("8278") ? /127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/ : (stryCov_9fa48("8278", "8279", "8280", "8281", "8282", "8283", "8284", "8285", "8286", "8287", "8288"), /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))));
function registerValidSW(swUrl, config) {
  if (stryMutAct_9fa48("8289")) {
    {}
  } else {
    stryCov_9fa48("8289");
    navigator.serviceWorker.register(swUrl).then(registration => {
      if (stryMutAct_9fa48("8290")) {
        {}
      } else {
        stryCov_9fa48("8290");
        registration.onupdatefound = () => {
          if (stryMutAct_9fa48("8291")) {
            {}
          } else {
            stryCov_9fa48("8291");
            const installingWorker = registration.installing;
            if (stryMutAct_9fa48("8294") ? installingWorker != null : stryMutAct_9fa48("8293") ? false : stryMutAct_9fa48("8292") ? true : (stryCov_9fa48("8292", "8293", "8294"), installingWorker == null)) {
              if (stryMutAct_9fa48("8295")) {
                {}
              } else {
                stryCov_9fa48("8295");
                return;
              }
            }
            installingWorker.onstatechange = () => {
              if (stryMutAct_9fa48("8296")) {
                {}
              } else {
                stryCov_9fa48("8296");
                if (stryMutAct_9fa48("8299") ? installingWorker.state !== 'installed' : stryMutAct_9fa48("8298") ? false : stryMutAct_9fa48("8297") ? true : (stryCov_9fa48("8297", "8298", "8299"), installingWorker.state === (stryMutAct_9fa48("8300") ? "" : (stryCov_9fa48("8300"), 'installed')))) {
                  if (stryMutAct_9fa48("8301")) {
                    {}
                  } else {
                    stryCov_9fa48("8301");
                    if (stryMutAct_9fa48("8303") ? false : stryMutAct_9fa48("8302") ? true : (stryCov_9fa48("8302", "8303"), navigator.serviceWorker.controller)) {
                      if (stryMutAct_9fa48("8304")) {
                        {}
                      } else {
                        stryCov_9fa48("8304");
                        console.log((stryMutAct_9fa48("8305") ? "" : (stryCov_9fa48("8305"), 'New content is available and will be used when all ')) + (stryMutAct_9fa48("8306") ? "" : (stryCov_9fa48("8306"), 'tabs for this page are closed. See https://bit.ly/CRA-PWA.')));
                        if (stryMutAct_9fa48("8309") ? config || config.onUpdate : stryMutAct_9fa48("8308") ? false : stryMutAct_9fa48("8307") ? true : (stryCov_9fa48("8307", "8308", "8309"), config && config.onUpdate)) {
                          if (stryMutAct_9fa48("8310")) {
                            {}
                          } else {
                            stryCov_9fa48("8310");
                            config.onUpdate(registration);
                          }
                        }
                      }
                    } else {
                      if (stryMutAct_9fa48("8311")) {
                        {}
                      } else {
                        stryCov_9fa48("8311");
                        console.log(stryMutAct_9fa48("8312") ? "" : (stryCov_9fa48("8312"), 'Content is cached for offline use.'));
                        if (stryMutAct_9fa48("8315") ? config || config.onSuccess : stryMutAct_9fa48("8314") ? false : stryMutAct_9fa48("8313") ? true : (stryCov_9fa48("8313", "8314", "8315"), config && config.onSuccess)) {
                          if (stryMutAct_9fa48("8316")) {
                            {}
                          } else {
                            stryCov_9fa48("8316");
                            config.onSuccess(registration);
                          }
                        }
                      }
                    }
                  }
                }
              }
            };
          }
        };
      }
    }).catch(error => {
      if (stryMutAct_9fa48("8317")) {
        {}
      } else {
        stryCov_9fa48("8317");
        console.error(stryMutAct_9fa48("8318") ? "" : (stryCov_9fa48("8318"), 'Error during service worker registration:'), error);
      }
    });
  }
}
function checkValidServiceWorker(swUrl, config) {
  if (stryMutAct_9fa48("8319")) {
    {}
  } else {
    stryCov_9fa48("8319");
    fetch(swUrl, stryMutAct_9fa48("8320") ? {} : (stryCov_9fa48("8320"), {
      headers: stryMutAct_9fa48("8321") ? {} : (stryCov_9fa48("8321"), {
        'Service-Worker': stryMutAct_9fa48("8322") ? "" : (stryCov_9fa48("8322"), 'script')
      })
    })).then(response => {
      if (stryMutAct_9fa48("8323")) {
        {}
      } else {
        stryCov_9fa48("8323");
        const contentType = response.headers.get(stryMutAct_9fa48("8324") ? "" : (stryCov_9fa48("8324"), 'content-type'));
        if (stryMutAct_9fa48("8327") ? response.status === 404 && contentType != null && contentType.indexOf('javascript') === -1 : stryMutAct_9fa48("8326") ? false : stryMutAct_9fa48("8325") ? true : (stryCov_9fa48("8325", "8326", "8327"), (stryMutAct_9fa48("8329") ? response.status !== 404 : stryMutAct_9fa48("8328") ? false : (stryCov_9fa48("8328", "8329"), response.status === 404)) || (stryMutAct_9fa48("8331") ? contentType != null || contentType.indexOf('javascript') === -1 : stryMutAct_9fa48("8330") ? false : (stryCov_9fa48("8330", "8331"), (stryMutAct_9fa48("8333") ? contentType == null : stryMutAct_9fa48("8332") ? true : (stryCov_9fa48("8332", "8333"), contentType != null)) && (stryMutAct_9fa48("8335") ? contentType.indexOf('javascript') !== -1 : stryMutAct_9fa48("8334") ? true : (stryCov_9fa48("8334", "8335"), contentType.indexOf(stryMutAct_9fa48("8336") ? "" : (stryCov_9fa48("8336"), 'javascript')) === (stryMutAct_9fa48("8337") ? +1 : (stryCov_9fa48("8337"), -1)))))))) {
          if (stryMutAct_9fa48("8338")) {
            {}
          } else {
            stryCov_9fa48("8338");
            navigator.serviceWorker.ready.then(registration => {
              if (stryMutAct_9fa48("8339")) {
                {}
              } else {
                stryCov_9fa48("8339");
                registration.unregister().then(() => {
                  if (stryMutAct_9fa48("8340")) {
                    {}
                  } else {
                    stryCov_9fa48("8340");
                    window.location.reload();
                  }
                });
              }
            });
          }
        } else {
          if (stryMutAct_9fa48("8341")) {
            {}
          } else {
            stryCov_9fa48("8341");
            registerValidSW(swUrl, config);
          }
        }
      }
    }).catch(() => {
      if (stryMutAct_9fa48("8342")) {
        {}
      } else {
        stryCov_9fa48("8342");
        console.log(stryMutAct_9fa48("8343") ? "" : (stryCov_9fa48("8343"), 'No internet connection found. App is running in offline mode.'));
      }
    });
  }
}
export function register(config) {
  if (stryMutAct_9fa48("8344")) {
    {}
  } else {
    stryCov_9fa48("8344");
    if (stryMutAct_9fa48("8347") ? process.env.NODE_ENV === 'production' || 'serviceWorker' in navigator : stryMutAct_9fa48("8346") ? false : stryMutAct_9fa48("8345") ? true : (stryCov_9fa48("8345", "8346", "8347"), (stryMutAct_9fa48("8349") ? process.env.NODE_ENV !== 'production' : stryMutAct_9fa48("8348") ? true : (stryCov_9fa48("8348", "8349"), process.env.NODE_ENV === (stryMutAct_9fa48("8350") ? "" : (stryCov_9fa48("8350"), 'production')))) && (stryMutAct_9fa48("8351") ? "" : (stryCov_9fa48("8351"), 'serviceWorker')) in navigator)) {
      if (stryMutAct_9fa48("8352")) {
        {}
      } else {
        stryCov_9fa48("8352");
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (stryMutAct_9fa48("8355") ? publicUrl.origin === window.location.origin : stryMutAct_9fa48("8354") ? false : stryMutAct_9fa48("8353") ? true : (stryCov_9fa48("8353", "8354", "8355"), publicUrl.origin !== window.location.origin)) {
          if (stryMutAct_9fa48("8356")) {
            {}
          } else {
            stryCov_9fa48("8356");
            return;
          }
        }
        window.addEventListener(stryMutAct_9fa48("8357") ? "" : (stryCov_9fa48("8357"), 'load'), () => {
          if (stryMutAct_9fa48("8358")) {
            {}
          } else {
            stryCov_9fa48("8358");
            const swUrl = stryMutAct_9fa48("8359") ? `` : (stryCov_9fa48("8359"), `${process.env.PUBLIC_URL}/service-worker.js`);
            if (stryMutAct_9fa48("8361") ? false : stryMutAct_9fa48("8360") ? true : (stryCov_9fa48("8360", "8361"), isLocalhost)) {
              if (stryMutAct_9fa48("8362")) {
                {}
              } else {
                stryCov_9fa48("8362");
                checkValidServiceWorker(swUrl, config);
                navigator.serviceWorker.ready.then(() => {
                  if (stryMutAct_9fa48("8363")) {
                    {}
                  } else {
                    stryCov_9fa48("8363");
                    console.log((stryMutAct_9fa48("8364") ? "" : (stryCov_9fa48("8364"), 'This web app is being served cache-first by a service ')) + (stryMutAct_9fa48("8365") ? "" : (stryCov_9fa48("8365"), 'worker. To learn more, visit https://bit.ly/CRA-PWA')));
                  }
                });
              }
            } else {
              if (stryMutAct_9fa48("8366")) {
                {}
              } else {
                stryCov_9fa48("8366");
                registerValidSW(swUrl, config);
              }
            }
          }
        });
      }
    }
  }
}
export function unregister() {
  if (stryMutAct_9fa48("8367")) {
    {}
  } else {
    stryCov_9fa48("8367");
    if (stryMutAct_9fa48("8369") ? false : stryMutAct_9fa48("8368") ? true : (stryCov_9fa48("8368", "8369"), (stryMutAct_9fa48("8370") ? "" : (stryCov_9fa48("8370"), 'serviceWorker')) in navigator)) {
      if (stryMutAct_9fa48("8371")) {
        {}
      } else {
        stryCov_9fa48("8371");
        navigator.serviceWorker.ready.then(registration => {
          if (stryMutAct_9fa48("8372")) {
            {}
          } else {
            stryCov_9fa48("8372");
            registration.unregister();
          }
        }).catch(error => {
          if (stryMutAct_9fa48("8373")) {
            {}
          } else {
            stryCov_9fa48("8373");
            console.error(error.message);
          }
        });
      }
    }
  }
}