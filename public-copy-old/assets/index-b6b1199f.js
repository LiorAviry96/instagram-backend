function Pm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Nf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Pf = { exports: {} },
  Co = {},
  Lf = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kr = Symbol.for("react.element"),
  Lm = Symbol.for("react.portal"),
  Am = Symbol.for("react.fragment"),
  jm = Symbol.for("react.strict_mode"),
  Um = Symbol.for("react.profiler"),
  Dm = Symbol.for("react.provider"),
  Im = Symbol.for("react.context"),
  Mm = Symbol.for("react.forward_ref"),
  $m = Symbol.for("react.suspense"),
  Bm = Symbol.for("react.memo"),
  Fm = Symbol.for("react.lazy"),
  ja = Symbol.iterator;
function zm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ja && e[ja]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Af = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jf = Object.assign,
  Uf = {};
function Qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uf),
    (this.updater = n || Af);
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Df() {}
Df.prototype = Qn.prototype;
function pu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uf),
    (this.updater = n || Af);
}
var hu = (pu.prototype = new Df());
hu.constructor = pu;
jf(hu, Qn.prototype);
hu.isPureReactComponent = !0;
var Ua = Array.isArray,
  If = Object.prototype.hasOwnProperty,
  mu = { current: null },
  Mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function $f(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      If.call(t, r) && !Mf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Kr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: mu.current,
  };
}
function Vm(e, t) {
  return {
    $$typeof: Kr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function yu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kr;
}
function bm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Da = /\/+/g;
function xs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? bm("" + e.key)
    : t.toString(36);
}
function Ri(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Kr:
          case Lm:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + xs(s, 0) : r),
      Ua(i)
        ? ((n = ""),
          e != null && (n = e.replace(Da, "$&/") + "/"),
          Ri(i, t, n, "", function (a) {
            return a;
          }))
        : i != null &&
          (yu(i) &&
            (i = Vm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Da, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Ua(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var u = r + xs(o, l);
      s += Ri(o, t, n, u, i);
    }
  else if (((u = zm(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + xs(o, l++)), (s += Ri(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ii(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ri(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Wm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ce = { current: null },
  Ti = { transition: null },
  Hm = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: Ti,
    ReactCurrentOwner: mu,
  };
function Bf() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = {
  map: ii,
  forEach: function (e, t, n) {
    ii(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ii(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ii(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!yu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
D.Component = Qn;
D.Fragment = Am;
D.Profiler = Um;
D.PureComponent = pu;
D.StrictMode = jm;
D.Suspense = $m;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hm;
D.act = Bf;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = jf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = mu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      If.call(t, u) &&
        !Mf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
    r.children = l;
  }
  return { $$typeof: Kr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: Im,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Dm, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = $f;
D.createFactory = function (e) {
  var t = $f.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: Mm, render: e };
};
D.isValidElement = yu;
D.lazy = function (e) {
  return { $$typeof: Fm, _payload: { _status: -1, _result: e }, _init: Wm };
};
D.memo = function (e, t) {
  return { $$typeof: Bm, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = Ti.transition;
  Ti.transition = {};
  try {
    e();
  } finally {
    Ti.transition = t;
  }
};
D.unstable_act = Bf;
D.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
D.useContext = function (e) {
  return Ce.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
D.useId = function () {
  return Ce.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return Ce.current.useRef(e);
};
D.useState = function (e) {
  return Ce.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return Ce.current.useTransition();
};
D.version = "18.3.1";
Lf.exports = D;
var x = Lf.exports;
const qm = Nf(x),
  Km = Pm({ __proto__: null, default: qm }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qm = x,
  Jm = Symbol.for("react.element"),
  Gm = Symbol.for("react.fragment"),
  Ym = Object.prototype.hasOwnProperty,
  Xm = Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ff(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Ym.call(t, r) && !Zm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Jm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Xm.current,
  };
}
Co.Fragment = Gm;
Co.jsx = Ff;
Co.jsxs = Ff;
Pf.exports = Co;
var h = Pf.exports,
  rl = {},
  zf = { exports: {} },
  Ie = {},
  Vf = { exports: {} },
  bf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, A) {
    var U = N.length;
    N.push(A);
    e: for (; 0 < U; ) {
      var Y = (U - 1) >>> 1,
        se = N[Y];
      if (0 < i(se, A)) (N[Y] = A), (N[U] = se), (U = Y);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var A = N[0],
      U = N.pop();
    if (U !== A) {
      N[0] = U;
      e: for (var Y = 0, se = N.length, ni = se >>> 1; Y < ni; ) {
        var Zt = 2 * (Y + 1) - 1,
          Es = N[Zt],
          en = Zt + 1,
          ri = N[en];
        if (0 > i(Es, U))
          en < se && 0 > i(ri, Es)
            ? ((N[Y] = ri), (N[en] = U), (Y = en))
            : ((N[Y] = Es), (N[Zt] = U), (Y = Zt));
        else if (en < se && 0 > i(ri, U)) (N[Y] = ri), (N[en] = U), (Y = en);
        else break e;
      }
    }
    return A;
  }
  function i(N, A) {
    var U = N.sortIndex - A.sortIndex;
    return U !== 0 ? U : N.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var u = [],
    a = [],
    c = 1,
    d = null,
    y = 3,
    w = !1,
    g = !1,
    v = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var A = n(a); A !== null; ) {
      if (A.callback === null) r(a);
      else if (A.startTime <= N)
        r(a), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(a);
    }
  }
  function E(N) {
    if (((v = !1), m(N), !g))
      if (n(u) !== null) (g = !0), ws(_);
      else {
        var A = n(a);
        A !== null && Ss(E, A.startTime - N);
      }
  }
  function _(N, A) {
    (g = !1), v && ((v = !1), p(P), (P = -1)), (w = !0);
    var U = y;
    try {
      for (
        m(A), d = n(u);
        d !== null && (!(d.expirationTime > A) || (N && !Le()));

      ) {
        var Y = d.callback;
        if (typeof Y == "function") {
          (d.callback = null), (y = d.priorityLevel);
          var se = Y(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof se == "function" ? (d.callback = se) : d === n(u) && r(u),
            m(A);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var ni = !0;
      else {
        var Zt = n(a);
        Zt !== null && Ss(E, Zt.startTime - A), (ni = !1);
      }
      return ni;
    } finally {
      (d = null), (y = U), (w = !1);
    }
  }
  var R = !1,
    T = null,
    P = -1,
    H = 5,
    j = -1;
  function Le() {
    return !(e.unstable_now() - j < H);
  }
  function tr() {
    if (T !== null) {
      var N = e.unstable_now();
      j = N;
      var A = !0;
      try {
        A = T(!0, N);
      } finally {
        A ? nr() : ((R = !1), (T = null));
      }
    } else R = !1;
  }
  var nr;
  if (typeof f == "function")
    nr = function () {
      f(tr);
    };
  else if (typeof MessageChannel < "u") {
    var Aa = new MessageChannel(),
      Nm = Aa.port2;
    (Aa.port1.onmessage = tr),
      (nr = function () {
        Nm.postMessage(null);
      });
  } else
    nr = function () {
      C(tr, 0);
    };
  function ws(N) {
    (T = N), R || ((R = !0), nr());
  }
  function Ss(N, A) {
    P = C(function () {
      N(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || w || ((g = !0), ws(_));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (N) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = y;
      }
      var U = y;
      y = A;
      try {
        return N();
      } finally {
        y = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, A) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var U = y;
      y = N;
      try {
        return A();
      } finally {
        y = U;
      }
    }),
    (e.unstable_scheduleCallback = function (N, A, U) {
      var Y = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? Y + U : Y))
          : (U = Y),
        N)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = U + se),
        (N = {
          id: c++,
          callback: A,
          priorityLevel: N,
          startTime: U,
          expirationTime: se,
          sortIndex: -1,
        }),
        U > Y
          ? ((N.sortIndex = U),
            t(a, N),
            n(u) === null &&
              N === n(a) &&
              (v ? (p(P), (P = -1)) : (v = !0), Ss(E, U - Y)))
          : ((N.sortIndex = se), t(u, N), g || w || ((g = !0), ws(_))),
        N
      );
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (N) {
      var A = y;
      return function () {
        var U = y;
        y = A;
        try {
          return N.apply(this, arguments);
        } finally {
          y = U;
        }
      };
    });
})(bf);
Vf.exports = bf;
var ey = Vf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ty = x,
  De = ey;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Wf = new Set(),
  Tr = {};
function mn(e, t) {
  $n(e, t), $n(e + "Capture", t);
}
function $n(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) Wf.add(t[e]);
}
var wt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  il = Object.prototype.hasOwnProperty,
  ny =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ia = {},
  Ma = {};
function ry(e) {
  return il.call(Ma, e)
    ? !0
    : il.call(Ia, e)
    ? !1
    : ny.test(e)
    ? (Ma[e] = !0)
    : ((Ia[e] = !0), !1);
}
function iy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function oy(e, t, n, r) {
  if (t === null || typeof t > "u" || iy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ke(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gu = /[\-:]([a-z])/g;
function vu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gu, vu);
    pe[t] = new ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gu, vu);
    pe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(gu, vu);
  pe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wu(e, t, n, r) {
  var i = pe.hasOwnProperty(t) ? pe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (oy(t, n, i, r) && (n = null),
    r || i === null
      ? ry(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  oi = Symbol.for("react.element"),
  wn = Symbol.for("react.portal"),
  Sn = Symbol.for("react.fragment"),
  Su = Symbol.for("react.strict_mode"),
  ol = Symbol.for("react.profiler"),
  Hf = Symbol.for("react.provider"),
  qf = Symbol.for("react.context"),
  Eu = Symbol.for("react.forward_ref"),
  sl = Symbol.for("react.suspense"),
  ll = Symbol.for("react.suspense_list"),
  xu = Symbol.for("react.memo"),
  Ot = Symbol.for("react.lazy"),
  Kf = Symbol.for("react.offscreen"),
  $a = Symbol.iterator;
function rr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($a && e[$a]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Cs;
function pr(e) {
  if (Cs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cs = (t && t[1]) || "";
    }
  return (
    `
` +
    Cs +
    e
  );
}
var ks = !1;
function _s(e, t) {
  if (!e || ks) return "";
  ks = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var i = a.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var u =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ks = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? pr(e) : "";
}
function sy(e) {
  switch (e.tag) {
    case 5:
      return pr(e.type);
    case 16:
      return pr("Lazy");
    case 13:
      return pr("Suspense");
    case 19:
      return pr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _s(e.type, !1)), e;
    case 11:
      return (e = _s(e.type.render, !1)), e;
    case 1:
      return (e = _s(e.type, !0)), e;
    default:
      return "";
  }
}
function ul(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case wn:
      return "Portal";
    case ol:
      return "Profiler";
    case Su:
      return "StrictMode";
    case sl:
      return "Suspense";
    case ll:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qf:
        return (e.displayName || "Context") + ".Consumer";
      case Hf:
        return (e._context.displayName || "Context") + ".Provider";
      case Eu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case xu:
        return (
          (t = e.displayName || null), t !== null ? t : ul(e.type) || "Memo"
        );
      case Ot:
        (t = e._payload), (e = e._init);
        try {
          return ul(e(t));
        } catch {}
    }
  return null;
}
function ly(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ul(t);
    case 8:
      return t === Su ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Qf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function uy(e) {
  var t = Qf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function si(e) {
  e._valueTracker || (e._valueTracker = uy(e));
}
function Jf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Qf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Hi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function al(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ba(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Gf(e, t) {
  (t = t.checked), t != null && wu(e, "checked", t, !1);
}
function cl(e, t) {
  Gf(e, t);
  var n = Ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? fl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fl(e, t.type, Ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Fa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function fl(e, t, n) {
  (t !== "number" || Hi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var hr = Array.isArray;
function Ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ht(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function dl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function za(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (hr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function Yf(e, t) {
  var n = Ht(t.value),
    r = Ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Va(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Xf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var li,
  Zf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        li = li || document.createElement("div"),
          li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = li.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Or(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ay = ["Webkit", "ms", "Moz", "O"];
Object.keys(vr).forEach(function (e) {
  ay.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vr[t] = vr[e]);
  });
});
function ed(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (vr.hasOwnProperty(e) && vr[e])
    ? ("" + t).trim()
    : t + "px";
}
function td(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ed(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var cy = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function hl(e, t) {
  if (t) {
    if (cy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function ml(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var yl = null;
function Cu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var gl = null,
  An = null,
  jn = null;
function ba(e) {
  if ((e = Gr(e))) {
    if (typeof gl != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Oo(t)), gl(e.stateNode, e.type, t));
  }
}
function nd(e) {
  An ? (jn ? jn.push(e) : (jn = [e])) : (An = e);
}
function rd() {
  if (An) {
    var e = An,
      t = jn;
    if (((jn = An = null), ba(e), t)) for (e = 0; e < t.length; e++) ba(t[e]);
  }
}
function id(e, t) {
  return e(t);
}
function od() {}
var Rs = !1;
function sd(e, t, n) {
  if (Rs) return e(t, n);
  Rs = !0;
  try {
    return id(e, t, n);
  } finally {
    (Rs = !1), (An !== null || jn !== null) && (od(), rd());
  }
}
function Nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Oo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var vl = !1;
if (wt)
  try {
    var ir = {};
    Object.defineProperty(ir, "passive", {
      get: function () {
        vl = !0;
      },
    }),
      window.addEventListener("test", ir, ir),
      window.removeEventListener("test", ir, ir);
  } catch {
    vl = !1;
  }
function fy(e, t, n, r, i, o, s, l, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var wr = !1,
  qi = null,
  Ki = !1,
  wl = null,
  dy = {
    onError: function (e) {
      (wr = !0), (qi = e);
    },
  };
function py(e, t, n, r, i, o, s, l, u) {
  (wr = !1), (qi = null), fy.apply(dy, arguments);
}
function hy(e, t, n, r, i, o, s, l, u) {
  if ((py.apply(this, arguments), wr)) {
    if (wr) {
      var a = qi;
      (wr = !1), (qi = null);
    } else throw Error(k(198));
    Ki || ((Ki = !0), (wl = a));
  }
}
function yn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ld(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wa(e) {
  if (yn(e) !== e) throw Error(k(188));
}
function my(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Wa(i), e;
        if (o === r) return Wa(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function ud(e) {
  return (e = my(e)), e !== null ? ad(e) : null;
}
function ad(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ad(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cd = De.unstable_scheduleCallback,
  Ha = De.unstable_cancelCallback,
  yy = De.unstable_shouldYield,
  gy = De.unstable_requestPaint,
  X = De.unstable_now,
  vy = De.unstable_getCurrentPriorityLevel,
  ku = De.unstable_ImmediatePriority,
  fd = De.unstable_UserBlockingPriority,
  Qi = De.unstable_NormalPriority,
  wy = De.unstable_LowPriority,
  dd = De.unstable_IdlePriority,
  ko = null,
  ct = null;
function Sy(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : Cy,
  Ey = Math.log,
  xy = Math.LN2;
function Cy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ey(e) / xy) | 0)) | 0;
}
var ui = 64,
  ai = 4194304;
function mr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ji(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = mr(l)) : ((o &= s), o !== 0 && (r = mr(o)));
  } else (s = n & ~i), s !== 0 ? (r = mr(s)) : o !== 0 && (r = mr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - et(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ky(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function _y(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - et(o),
      l = 1 << s,
      u = i[s];
    u === -1
      ? (!(l & n) || l & r) && (i[s] = ky(l, t))
      : u <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Sl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function pd() {
  var e = ui;
  return (ui <<= 1), !(ui & 4194240) && (ui = 64), e;
}
function Ts(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - et(t)),
    (e[t] = n);
}
function Ry(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - et(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function _u(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var $ = 0;
function hd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var md,
  Ru,
  yd,
  gd,
  vd,
  El = !1,
  ci = [],
  Dt = null,
  It = null,
  Mt = null,
  Pr = new Map(),
  Lr = new Map(),
  Pt = [],
  Ty =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function qa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dt = null;
      break;
    case "dragenter":
    case "dragleave":
      It = null;
      break;
    case "mouseover":
    case "mouseout":
      Mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Pr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Lr.delete(t.pointerId);
  }
}
function or(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Gr(t)), t !== null && Ru(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Oy(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Dt = or(Dt, e, t, n, r, i)), !0;
    case "dragenter":
      return (It = or(It, e, t, n, r, i)), !0;
    case "mouseover":
      return (Mt = or(Mt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Pr.set(o, or(Pr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Lr.set(o, or(Lr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function wd(e) {
  var t = rn(e.target);
  if (t !== null) {
    var n = yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ld(n)), t !== null)) {
          (e.blockedOn = t),
            vd(e.priority, function () {
              yd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Oi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (yl = r), n.target.dispatchEvent(r), (yl = null);
    } else return (t = Gr(n)), t !== null && Ru(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ka(e, t, n) {
  Oi(e) && n.delete(t);
}
function Ny() {
  (El = !1),
    Dt !== null && Oi(Dt) && (Dt = null),
    It !== null && Oi(It) && (It = null),
    Mt !== null && Oi(Mt) && (Mt = null),
    Pr.forEach(Ka),
    Lr.forEach(Ka);
}
function sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    El ||
      ((El = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, Ny)));
}
function Ar(e) {
  function t(i) {
    return sr(i, e);
  }
  if (0 < ci.length) {
    sr(ci[0], e);
    for (var n = 1; n < ci.length; n++) {
      var r = ci[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Dt !== null && sr(Dt, e),
      It !== null && sr(It, e),
      Mt !== null && sr(Mt, e),
      Pr.forEach(t),
      Lr.forEach(t),
      n = 0;
    n < Pt.length;
    n++
  )
    (r = Pt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pt.length && ((n = Pt[0]), n.blockedOn === null); )
    wd(n), n.blockedOn === null && Pt.shift();
}
var Un = kt.ReactCurrentBatchConfig,
  Gi = !0;
function Py(e, t, n, r) {
  var i = $,
    o = Un.transition;
  Un.transition = null;
  try {
    ($ = 1), Tu(e, t, n, r);
  } finally {
    ($ = i), (Un.transition = o);
  }
}
function Ly(e, t, n, r) {
  var i = $,
    o = Un.transition;
  Un.transition = null;
  try {
    ($ = 4), Tu(e, t, n, r);
  } finally {
    ($ = i), (Un.transition = o);
  }
}
function Tu(e, t, n, r) {
  if (Gi) {
    var i = xl(e, t, n, r);
    if (i === null) Ms(e, t, r, Yi, n), qa(e, r);
    else if (Oy(i, e, t, n, r)) r.stopPropagation();
    else if ((qa(e, r), t & 4 && -1 < Ty.indexOf(e))) {
      for (; i !== null; ) {
        var o = Gr(i);
        if (
          (o !== null && md(o),
          (o = xl(e, t, n, r)),
          o === null && Ms(e, t, r, Yi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ms(e, t, r, null, n);
  }
}
var Yi = null;
function xl(e, t, n, r) {
  if (((Yi = null), (e = Cu(r)), (e = rn(e)), e !== null))
    if (((t = yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ld(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yi = e), null;
}
function Sd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (vy()) {
        case ku:
          return 1;
        case fd:
          return 4;
        case Qi:
        case wy:
          return 16;
        case dd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var At = null,
  Ou = null,
  Ni = null;
function Ed() {
  if (Ni) return Ni;
  var e,
    t = Ou,
    n = t.length,
    r,
    i = "value" in At ? At.value : At.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ni = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Pi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fi() {
  return !0;
}
function Qa() {
  return !1;
}
function Me(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? fi
        : Qa),
      (this.isPropagationStopped = Qa),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fi));
      },
      persist: function () {},
      isPersistent: fi,
    }),
    t
  );
}
var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nu = Me(Jn),
  Jr = Q({}, Jn, { view: 0, detail: 0 }),
  Ay = Me(Jr),
  Os,
  Ns,
  lr,
  _o = Q({}, Jr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== lr &&
            (lr && e.type === "mousemove"
              ? ((Os = e.screenX - lr.screenX), (Ns = e.screenY - lr.screenY))
              : (Ns = Os = 0),
            (lr = e)),
          Os);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ns;
    },
  }),
  Ja = Me(_o),
  jy = Q({}, _o, { dataTransfer: 0 }),
  Uy = Me(jy),
  Dy = Q({}, Jr, { relatedTarget: 0 }),
  Ps = Me(Dy),
  Iy = Q({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  My = Me(Iy),
  $y = Q({}, Jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  By = Me($y),
  Fy = Q({}, Jn, { data: 0 }),
  Ga = Me(Fy),
  zy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Vy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  by = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Wy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = by[e]) ? !!t[e] : !1;
}
function Pu() {
  return Wy;
}
var Hy = Q({}, Jr, {
    key: function (e) {
      if (e.key) {
        var t = zy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Pi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Vy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pu,
    charCode: function (e) {
      return e.type === "keypress" ? Pi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Pi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  qy = Me(Hy),
  Ky = Q({}, _o, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ya = Me(Ky),
  Qy = Q({}, Jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pu,
  }),
  Jy = Me(Qy),
  Gy = Q({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yy = Me(Gy),
  Xy = Q({}, _o, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zy = Me(Xy),
  eg = [9, 13, 27, 32],
  Lu = wt && "CompositionEvent" in window,
  Sr = null;
wt && "documentMode" in document && (Sr = document.documentMode);
var tg = wt && "TextEvent" in window && !Sr,
  xd = wt && (!Lu || (Sr && 8 < Sr && 11 >= Sr)),
  Xa = String.fromCharCode(32),
  Za = !1;
function Cd(e, t) {
  switch (e) {
    case "keyup":
      return eg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function kd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var En = !1;
function ng(e, t) {
  switch (e) {
    case "compositionend":
      return kd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Za = !0), Xa);
    case "textInput":
      return (e = t.data), e === Xa && Za ? null : e;
    default:
      return null;
  }
}
function rg(e, t) {
  if (En)
    return e === "compositionend" || (!Lu && Cd(e, t))
      ? ((e = Ed()), (Ni = Ou = At = null), (En = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ig = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ec(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ig[e.type] : t === "textarea";
}
function _d(e, t, n, r) {
  nd(r),
    (t = Xi(t, "onChange")),
    0 < t.length &&
      ((n = new Nu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Er = null,
  jr = null;
function og(e) {
  Id(e, 0);
}
function Ro(e) {
  var t = kn(e);
  if (Jf(t)) return e;
}
function sg(e, t) {
  if (e === "change") return t;
}
var Rd = !1;
if (wt) {
  var Ls;
  if (wt) {
    var As = "oninput" in document;
    if (!As) {
      var tc = document.createElement("div");
      tc.setAttribute("oninput", "return;"),
        (As = typeof tc.oninput == "function");
    }
    Ls = As;
  } else Ls = !1;
  Rd = Ls && (!document.documentMode || 9 < document.documentMode);
}
function nc() {
  Er && (Er.detachEvent("onpropertychange", Td), (jr = Er = null));
}
function Td(e) {
  if (e.propertyName === "value" && Ro(jr)) {
    var t = [];
    _d(t, jr, e, Cu(e)), sd(og, t);
  }
}
function lg(e, t, n) {
  e === "focusin"
    ? (nc(), (Er = t), (jr = n), Er.attachEvent("onpropertychange", Td))
    : e === "focusout" && nc();
}
function ug(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ro(jr);
}
function ag(e, t) {
  if (e === "click") return Ro(t);
}
function cg(e, t) {
  if (e === "input" || e === "change") return Ro(t);
}
function fg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var it = typeof Object.is == "function" ? Object.is : fg;
function Ur(e, t) {
  if (it(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!il.call(t, i) || !it(e[i], t[i])) return !1;
  }
  return !0;
}
function rc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ic(e, t) {
  var n = rc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = rc(n);
  }
}
function Od(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Od(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Nd() {
  for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hi(e.document);
  }
  return t;
}
function Au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function dg(e) {
  var t = Nd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Od(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Au(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = ic(n, o));
        var s = ic(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var pg = wt && "documentMode" in document && 11 >= document.documentMode,
  xn = null,
  Cl = null,
  xr = null,
  kl = !1;
function oc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  kl ||
    xn == null ||
    xn !== Hi(r) ||
    ((r = xn),
    "selectionStart" in r && Au(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (xr && Ur(xr, r)) ||
      ((xr = r),
      (r = Xi(Cl, "onSelect")),
      0 < r.length &&
        ((t = new Nu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = xn))));
}
function di(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Cn = {
    animationend: di("Animation", "AnimationEnd"),
    animationiteration: di("Animation", "AnimationIteration"),
    animationstart: di("Animation", "AnimationStart"),
    transitionend: di("Transition", "TransitionEnd"),
  },
  js = {},
  Pd = {};
wt &&
  ((Pd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cn.animationend.animation,
    delete Cn.animationiteration.animation,
    delete Cn.animationstart.animation),
  "TransitionEvent" in window || delete Cn.transitionend.transition);
function To(e) {
  if (js[e]) return js[e];
  if (!Cn[e]) return e;
  var t = Cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Pd) return (js[e] = t[n]);
  return e;
}
var Ld = To("animationend"),
  Ad = To("animationiteration"),
  jd = To("animationstart"),
  Ud = To("transitionend"),
  Dd = new Map(),
  sc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Jt(e, t) {
  Dd.set(e, t), mn(t, [e]);
}
for (var Us = 0; Us < sc.length; Us++) {
  var Ds = sc[Us],
    hg = Ds.toLowerCase(),
    mg = Ds[0].toUpperCase() + Ds.slice(1);
  Jt(hg, "on" + mg);
}
Jt(Ld, "onAnimationEnd");
Jt(Ad, "onAnimationIteration");
Jt(jd, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(Ud, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  yg = new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));
function lc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), hy(r, t, void 0, e), (e.currentTarget = null);
}
function Id(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            u = l.instance,
            a = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          lc(i, l, a), (o = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (u = l.instance),
            (a = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          lc(i, l, a), (o = u);
        }
    }
  }
  if (Ki) throw ((e = wl), (Ki = !1), (wl = null), e);
}
function V(e, t) {
  var n = t[Nl];
  n === void 0 && (n = t[Nl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Md(t, e, 2, !1), n.add(r));
}
function Is(e, t, n) {
  var r = 0;
  t && (r |= 4), Md(n, e, r, t);
}
var pi = "_reactListening" + Math.random().toString(36).slice(2);
function Dr(e) {
  if (!e[pi]) {
    (e[pi] = !0),
      Wf.forEach(function (n) {
        n !== "selectionchange" && (yg.has(n) || Is(n, !1, e), Is(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pi] || ((t[pi] = !0), Is("selectionchange", !1, t));
  }
}
function Md(e, t, n, r) {
  switch (Sd(t)) {
    case 1:
      var i = Py;
      break;
    case 4:
      i = Ly;
      break;
    default:
      i = Tu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !vl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ms(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = rn(l)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  sd(function () {
    var a = o,
      c = Cu(n),
      d = [];
    e: {
      var y = Dd.get(e);
      if (y !== void 0) {
        var w = Nu,
          g = e;
        switch (e) {
          case "keypress":
            if (Pi(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = qy;
            break;
          case "focusin":
            (g = "focus"), (w = Ps);
            break;
          case "focusout":
            (g = "blur"), (w = Ps);
            break;
          case "beforeblur":
          case "afterblur":
            w = Ps;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Ja;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Uy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Jy;
            break;
          case Ld:
          case Ad:
          case jd:
            w = My;
            break;
          case Ud:
            w = Yy;
            break;
          case "scroll":
            w = Ay;
            break;
          case "wheel":
            w = Zy;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = By;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Ya;
        }
        var v = (t & 4) !== 0,
          C = !v && e === "scroll",
          p = v ? (y !== null ? y + "Capture" : null) : y;
        v = [];
        for (var f = a, m; f !== null; ) {
          m = f;
          var E = m.stateNode;
          if (
            (m.tag === 5 &&
              E !== null &&
              ((m = E),
              p !== null && ((E = Nr(f, p)), E != null && v.push(Ir(f, E, m)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < v.length &&
          ((y = new w(y, g, null, n, c)), d.push({ event: y, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          y &&
            n !== yl &&
            (g = n.relatedTarget || n.fromElement) &&
            (rn(g) || g[St]))
        )
          break e;
        if (
          (w || y) &&
          ((y =
            c.window === c
              ? c
              : (y = c.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          w
            ? ((g = n.relatedTarget || n.toElement),
              (w = a),
              (g = g ? rn(g) : null),
              g !== null &&
                ((C = yn(g)), g !== C || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = a)),
          w !== g)
        ) {
          if (
            ((v = Ja),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Ya),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (C = w == null ? y : kn(w)),
            (m = g == null ? y : kn(g)),
            (y = new v(E, f + "leave", w, n, c)),
            (y.target = C),
            (y.relatedTarget = m),
            (E = null),
            rn(c) === a &&
              ((v = new v(p, f + "enter", g, n, c)),
              (v.target = m),
              (v.relatedTarget = C),
              (E = v)),
            (C = E),
            w && g)
          )
            t: {
              for (v = w, p = g, f = 0, m = v; m; m = gn(m)) f++;
              for (m = 0, E = p; E; E = gn(E)) m++;
              for (; 0 < f - m; ) (v = gn(v)), f--;
              for (; 0 < m - f; ) (p = gn(p)), m--;
              for (; f--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = gn(v)), (p = gn(p));
              }
              v = null;
            }
          else v = null;
          w !== null && uc(d, y, w, v, !1),
            g !== null && C !== null && uc(d, C, g, v, !0);
        }
      }
      e: {
        if (
          ((y = a ? kn(a) : window),
          (w = y.nodeName && y.nodeName.toLowerCase()),
          w === "select" || (w === "input" && y.type === "file"))
        )
          var _ = sg;
        else if (ec(y))
          if (Rd) _ = cg;
          else {
            _ = ug;
            var R = lg;
          }
        else
          (w = y.nodeName) &&
            w.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (_ = ag);
        if (_ && (_ = _(e, a))) {
          _d(d, _, n, c);
          break e;
        }
        R && R(e, y, a),
          e === "focusout" &&
            (R = y._wrapperState) &&
            R.controlled &&
            y.type === "number" &&
            fl(y, "number", y.value);
      }
      switch (((R = a ? kn(a) : window), e)) {
        case "focusin":
          (ec(R) || R.contentEditable === "true") &&
            ((xn = R), (Cl = a), (xr = null));
          break;
        case "focusout":
          xr = Cl = xn = null;
          break;
        case "mousedown":
          kl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (kl = !1), oc(d, n, c);
          break;
        case "selectionchange":
          if (pg) break;
        case "keydown":
        case "keyup":
          oc(d, n, c);
      }
      var T;
      if (Lu)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        En
          ? Cd(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (xd &&
          n.locale !== "ko" &&
          (En || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && En && (T = Ed())
            : ((At = c),
              (Ou = "value" in At ? At.value : At.textContent),
              (En = !0))),
        (R = Xi(a, P)),
        0 < R.length &&
          ((P = new Ga(P, e, null, n, c)),
          d.push({ event: P, listeners: R }),
          T ? (P.data = T) : ((T = kd(n)), T !== null && (P.data = T)))),
        (T = tg ? ng(e, n) : rg(e, n)) &&
          ((a = Xi(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new Ga("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: a }),
            (c.data = T)));
    }
    Id(d, t);
  });
}
function Ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Nr(e, n)),
      o != null && r.unshift(Ir(e, o, i)),
      (o = Nr(e, t)),
      o != null && r.push(Ir(e, o, i))),
      (e = e.return);
  }
  return r;
}
function gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uc(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      a = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      i
        ? ((u = Nr(n, o)), u != null && s.unshift(Ir(n, u, l)))
        : i || ((u = Nr(n, o)), u != null && s.push(Ir(n, u, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var gg = /\r\n?/g,
  vg = /\u0000|\uFFFD/g;
function ac(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      gg,
      `
`
    )
    .replace(vg, "");
}
function hi(e, t, n) {
  if (((t = ac(t)), ac(e) !== t && n)) throw Error(k(425));
}
function Zi() {}
var _l = null,
  Rl = null;
function Tl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ol = typeof setTimeout == "function" ? setTimeout : void 0,
  wg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  cc = typeof Promise == "function" ? Promise : void 0,
  Sg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof cc < "u"
      ? function (e) {
          return cc.resolve(null).then(e).catch(Eg);
        }
      : Ol;
function Eg(e) {
  setTimeout(function () {
    throw e;
  });
}
function $s(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ar(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ar(t);
}
function $t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gn = Math.random().toString(36).slice(2),
  at = "__reactFiber$" + Gn,
  Mr = "__reactProps$" + Gn,
  St = "__reactContainer$" + Gn,
  Nl = "__reactEvents$" + Gn,
  xg = "__reactListeners$" + Gn,
  Cg = "__reactHandles$" + Gn;
function rn(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fc(e); e !== null; ) {
          if ((n = e[at])) return n;
          e = fc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Gr(e) {
  return (
    (e = e[at] || e[St]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Oo(e) {
  return e[Mr] || null;
}
var Pl = [],
  _n = -1;
function Gt(e) {
  return { current: e };
}
function b(e) {
  0 > _n || ((e.current = Pl[_n]), (Pl[_n] = null), _n--);
}
function z(e, t) {
  _n++, (Pl[_n] = e.current), (e.current = t);
}
var qt = {},
  ge = Gt(qt),
  Oe = Gt(!1),
  an = qt;
function Bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ne(e) {
  return (e = e.childContextTypes), e != null;
}
function eo() {
  b(Oe), b(ge);
}
function dc(e, t, n) {
  if (ge.current !== qt) throw Error(k(168));
  z(ge, t), z(Oe, n);
}
function $d(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, ly(e) || "Unknown", i));
  return Q({}, n, r);
}
function to(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || qt),
    (an = ge.current),
    z(ge, e),
    z(Oe, Oe.current),
    !0
  );
}
function pc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = $d(e, t, an)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      b(Oe),
      b(ge),
      z(ge, e))
    : b(Oe),
    z(Oe, n);
}
var ht = null,
  No = !1,
  Bs = !1;
function Bd(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
function kg(e) {
  (No = !0), Bd(e);
}
function Yt() {
  if (!Bs && ht !== null) {
    Bs = !0;
    var e = 0,
      t = $;
    try {
      var n = ht;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ht = null), (No = !1);
    } catch (i) {
      throw (ht !== null && (ht = ht.slice(e + 1)), cd(ku, Yt), i);
    } finally {
      ($ = t), (Bs = !1);
    }
  }
  return null;
}
var Rn = [],
  Tn = 0,
  no = null,
  ro = 0,
  Be = [],
  Fe = 0,
  cn = null,
  mt = 1,
  yt = "";
function tn(e, t) {
  (Rn[Tn++] = ro), (Rn[Tn++] = no), (no = e), (ro = t);
}
function Fd(e, t, n) {
  (Be[Fe++] = mt), (Be[Fe++] = yt), (Be[Fe++] = cn), (cn = e);
  var r = mt;
  e = yt;
  var i = 32 - et(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - et(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (mt = (1 << (32 - et(t) + i)) | (n << i) | r),
      (yt = o + e);
  } else (mt = (1 << o) | (n << i) | r), (yt = e);
}
function ju(e) {
  e.return !== null && (tn(e, 1), Fd(e, 1, 0));
}
function Uu(e) {
  for (; e === no; )
    (no = Rn[--Tn]), (Rn[Tn] = null), (ro = Rn[--Tn]), (Rn[Tn] = null);
  for (; e === cn; )
    (cn = Be[--Fe]),
      (Be[Fe] = null),
      (yt = Be[--Fe]),
      (Be[Fe] = null),
      (mt = Be[--Fe]),
      (Be[Fe] = null);
}
var Ue = null,
  je = null,
  W = !1,
  Ze = null;
function zd(e, t) {
  var n = Ve(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ue = e), (je = $t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ue = e), (je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = cn !== null ? { id: mt, overflow: yt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ue = e),
            (je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ll(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Al(e) {
  if (W) {
    var t = je;
    if (t) {
      var n = t;
      if (!hc(e, t)) {
        if (Ll(e)) throw Error(k(418));
        t = $t(n.nextSibling);
        var r = Ue;
        t && hc(e, t)
          ? zd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ue = e));
      }
    } else {
      if (Ll(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Ue = e);
    }
  }
}
function mc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function mi(e) {
  if (e !== Ue) return !1;
  if (!W) return mc(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Tl(e.type, e.memoizedProps))),
    t && (t = je))
  ) {
    if (Ll(e)) throw (Vd(), Error(k(418)));
    for (; t; ) zd(e, t), (t = $t(t.nextSibling));
  }
  if ((mc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = $t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Ue ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function Vd() {
  for (var e = je; e; ) e = $t(e.nextSibling);
}
function Fn() {
  (je = Ue = null), (W = !1);
}
function Du(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
var _g = kt.ReactCurrentBatchConfig;
function ur(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function yi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function yc(e) {
  var t = e._init;
  return t(e._payload);
}
function bd(e) {
  function t(p, f) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [f]), (p.flags |= 16)) : m.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function i(p, f) {
    return (p = Vt(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, f, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((p.flags |= 2), f) : m)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, f, m, E) {
    return f === null || f.tag !== 6
      ? ((f = qs(m, p.mode, E)), (f.return = p), f)
      : ((f = i(f, m)), (f.return = p), f);
  }
  function u(p, f, m, E) {
    var _ = m.type;
    return _ === Sn
      ? c(p, f, m.props.children, E, m.key)
      : f !== null &&
        (f.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === Ot &&
            yc(_) === f.type))
      ? ((E = i(f, m.props)), (E.ref = ur(p, f, m)), (E.return = p), E)
      : ((E = Mi(m.type, m.key, m.props, null, p.mode, E)),
        (E.ref = ur(p, f, m)),
        (E.return = p),
        E);
  }
  function a(p, f, m, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = Ks(m, p.mode, E)), (f.return = p), f)
      : ((f = i(f, m.children || [])), (f.return = p), f);
  }
  function c(p, f, m, E, _) {
    return f === null || f.tag !== 7
      ? ((f = un(m, p.mode, E, _)), (f.return = p), f)
      : ((f = i(f, m)), (f.return = p), f);
  }
  function d(p, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = qs("" + f, p.mode, m)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case oi:
          return (
            (m = Mi(f.type, f.key, f.props, null, p.mode, m)),
            (m.ref = ur(p, null, f)),
            (m.return = p),
            m
          );
        case wn:
          return (f = Ks(f, p.mode, m)), (f.return = p), f;
        case Ot:
          var E = f._init;
          return d(p, E(f._payload), m);
      }
      if (hr(f) || rr(f))
        return (f = un(f, p.mode, m, null)), (f.return = p), f;
      yi(p, f);
    }
    return null;
  }
  function y(p, f, m, E) {
    var _ = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return _ !== null ? null : l(p, f, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case oi:
          return m.key === _ ? u(p, f, m, E) : null;
        case wn:
          return m.key === _ ? a(p, f, m, E) : null;
        case Ot:
          return (_ = m._init), y(p, f, _(m._payload), E);
      }
      if (hr(m) || rr(m)) return _ !== null ? null : c(p, f, m, E, null);
      yi(p, m);
    }
    return null;
  }
  function w(p, f, m, E, _) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(m) || null), l(f, p, "" + E, _);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case oi:
          return (p = p.get(E.key === null ? m : E.key) || null), u(f, p, E, _);
        case wn:
          return (p = p.get(E.key === null ? m : E.key) || null), a(f, p, E, _);
        case Ot:
          var R = E._init;
          return w(p, f, m, R(E._payload), _);
      }
      if (hr(E) || rr(E)) return (p = p.get(m) || null), c(f, p, E, _, null);
      yi(f, E);
    }
    return null;
  }
  function g(p, f, m, E) {
    for (
      var _ = null, R = null, T = f, P = (f = 0), H = null;
      T !== null && P < m.length;
      P++
    ) {
      T.index > P ? ((H = T), (T = null)) : (H = T.sibling);
      var j = y(p, T, m[P], E);
      if (j === null) {
        T === null && (T = H);
        break;
      }
      e && T && j.alternate === null && t(p, T),
        (f = o(j, f, P)),
        R === null ? (_ = j) : (R.sibling = j),
        (R = j),
        (T = H);
    }
    if (P === m.length) return n(p, T), W && tn(p, P), _;
    if (T === null) {
      for (; P < m.length; P++)
        (T = d(p, m[P], E)),
          T !== null &&
            ((f = o(T, f, P)), R === null ? (_ = T) : (R.sibling = T), (R = T));
      return W && tn(p, P), _;
    }
    for (T = r(p, T); P < m.length; P++)
      (H = w(T, p, P, m[P], E)),
        H !== null &&
          (e && H.alternate !== null && T.delete(H.key === null ? P : H.key),
          (f = o(H, f, P)),
          R === null ? (_ = H) : (R.sibling = H),
          (R = H));
    return (
      e &&
        T.forEach(function (Le) {
          return t(p, Le);
        }),
      W && tn(p, P),
      _
    );
  }
  function v(p, f, m, E) {
    var _ = rr(m);
    if (typeof _ != "function") throw Error(k(150));
    if (((m = _.call(m)), m == null)) throw Error(k(151));
    for (
      var R = (_ = null), T = f, P = (f = 0), H = null, j = m.next();
      T !== null && !j.done;
      P++, j = m.next()
    ) {
      T.index > P ? ((H = T), (T = null)) : (H = T.sibling);
      var Le = y(p, T, j.value, E);
      if (Le === null) {
        T === null && (T = H);
        break;
      }
      e && T && Le.alternate === null && t(p, T),
        (f = o(Le, f, P)),
        R === null ? (_ = Le) : (R.sibling = Le),
        (R = Le),
        (T = H);
    }
    if (j.done) return n(p, T), W && tn(p, P), _;
    if (T === null) {
      for (; !j.done; P++, j = m.next())
        (j = d(p, j.value, E)),
          j !== null &&
            ((f = o(j, f, P)), R === null ? (_ = j) : (R.sibling = j), (R = j));
      return W && tn(p, P), _;
    }
    for (T = r(p, T); !j.done; P++, j = m.next())
      (j = w(T, p, P, j.value, E)),
        j !== null &&
          (e && j.alternate !== null && T.delete(j.key === null ? P : j.key),
          (f = o(j, f, P)),
          R === null ? (_ = j) : (R.sibling = j),
          (R = j));
    return (
      e &&
        T.forEach(function (tr) {
          return t(p, tr);
        }),
      W && tn(p, P),
      _
    );
  }
  function C(p, f, m, E) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Sn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case oi:
          e: {
            for (var _ = m.key, R = f; R !== null; ) {
              if (R.key === _) {
                if (((_ = m.type), _ === Sn)) {
                  if (R.tag === 7) {
                    n(p, R.sibling),
                      (f = i(R, m.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  R.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === Ot &&
                    yc(_) === R.type)
                ) {
                  n(p, R.sibling),
                    (f = i(R, m.props)),
                    (f.ref = ur(p, R, m)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, R);
                break;
              } else t(p, R);
              R = R.sibling;
            }
            m.type === Sn
              ? ((f = un(m.props.children, p.mode, E, m.key)),
                (f.return = p),
                (p = f))
              : ((E = Mi(m.type, m.key, m.props, null, p.mode, E)),
                (E.ref = ur(p, f, m)),
                (E.return = p),
                (p = E));
          }
          return s(p);
        case wn:
          e: {
            for (R = m.key; f !== null; ) {
              if (f.key === R)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(p, f.sibling),
                    (f = i(f, m.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = Ks(m, p.mode, E)), (f.return = p), (p = f);
          }
          return s(p);
        case Ot:
          return (R = m._init), C(p, f, R(m._payload), E);
      }
      if (hr(m)) return g(p, f, m, E);
      if (rr(m)) return v(p, f, m, E);
      yi(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = i(f, m)), (f.return = p), (p = f))
          : (n(p, f), (f = qs(m, p.mode, E)), (f.return = p), (p = f)),
        s(p))
      : n(p, f);
  }
  return C;
}
var zn = bd(!0),
  Wd = bd(!1),
  io = Gt(null),
  oo = null,
  On = null,
  Iu = null;
function Mu() {
  Iu = On = oo = null;
}
function $u(e) {
  var t = io.current;
  b(io), (e._currentValue = t);
}
function jl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Dn(e, t) {
  (oo = e),
    (Iu = On = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Te = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if (Iu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
      if (oo === null) throw Error(k(308));
      (On = e), (oo.dependencies = { lanes: 0, firstContext: e });
    } else On = On.next = e;
  return t;
}
var on = null;
function Bu(e) {
  on === null ? (on = [e]) : on.push(e);
}
function Hd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Bu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Et(e, r)
  );
}
function Et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Nt = !1;
function Fu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function gt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Et(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Bu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Et(e, n)
  );
}
function Li(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _u(e, n);
  }
}
function gc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function so(e, t, n, r) {
  var i = e.updateQueue;
  Nt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      a = u.next;
    (u.next = null), s === null ? (o = a) : (s.next = a), (s = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = a) : (l.next = a),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (c = a = u = null), (l = o);
    do {
      var y = l.lane,
        w = l.eventTime;
      if ((r & y) === y) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            v = l;
          switch (((y = t), (w = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                d = g.call(w, d, y);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (y = typeof g == "function" ? g.call(w, d, y) : g),
                y == null)
              )
                break e;
              d = Q({}, d, y);
              break e;
            case 2:
              Nt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (y = i.effects),
          y === null ? (i.effects = [l]) : y.push(l));
      } else
        (w = {
          eventTime: w,
          lane: y,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((a = c = w), (u = d)) : (c = c.next = w),
          (s |= y);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (y = l),
          (l = y.next),
          (y.next = null),
          (i.lastBaseUpdate = y),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (u = d),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (dn |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function vc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Yr = {},
  ft = Gt(Yr),
  $r = Gt(Yr),
  Br = Gt(Yr);
function sn(e) {
  if (e === Yr) throw Error(k(174));
  return e;
}
function zu(e, t) {
  switch ((z(Br, t), z($r, e), z(ft, Yr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pl(t, e));
  }
  b(ft), z(ft, t);
}
function Vn() {
  b(ft), b($r), b(Br);
}
function Kd(e) {
  sn(Br.current);
  var t = sn(ft.current),
    n = pl(t, e.type);
  t !== n && (z($r, e), z(ft, n));
}
function Vu(e) {
  $r.current === e && (b(ft), b($r));
}
var q = Gt(0);
function lo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Fs = [];
function bu() {
  for (var e = 0; e < Fs.length; e++)
    Fs[e]._workInProgressVersionPrimary = null;
  Fs.length = 0;
}
var Ai = kt.ReactCurrentDispatcher,
  zs = kt.ReactCurrentBatchConfig,
  fn = 0,
  K = null,
  re = null,
  le = null,
  uo = !1,
  Cr = !1,
  Fr = 0,
  Rg = 0;
function he() {
  throw Error(k(321));
}
function Wu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!it(e[n], t[n])) return !1;
  return !0;
}
function Hu(e, t, n, r, i, o) {
  if (
    ((fn = o),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ai.current = e === null || e.memoizedState === null ? Pg : Lg),
    (e = n(r, i)),
    Cr)
  ) {
    o = 0;
    do {
      if (((Cr = !1), (Fr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (le = re = null),
        (t.updateQueue = null),
        (Ai.current = Ag),
        (e = n(r, i));
    } while (Cr);
  }
  if (
    ((Ai.current = ao),
    (t = re !== null && re.next !== null),
    (fn = 0),
    (le = re = K = null),
    (uo = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function qu() {
  var e = Fr !== 0;
  return (Fr = 0), e;
}
function ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (K.memoizedState = le = e) : (le = le.next = e), le;
}
function qe() {
  if (re === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = le === null ? K.memoizedState : le.next;
  if (t !== null) (le = t), (re = e);
  else {
    if (e === null) throw Error(k(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      le === null ? (K.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function zr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vs(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = re,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      u = null,
      a = o;
    do {
      var c = a.lane;
      if ((fn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((l = u = d), (s = r)) : (u = u.next = d),
          (K.lanes |= c),
          (dn |= c);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (s = r) : (u.next = l),
      it(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (K.lanes |= o), (dn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bs(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    it(o, t.memoizedState) || (Te = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Qd() {}
function Jd(e, t) {
  var n = K,
    r = qe(),
    i = t(),
    o = !it(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Te = !0)),
    (r = r.queue),
    Ku(Xd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vr(9, Yd.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(k(349));
    fn & 30 || Gd(n, t, i);
  }
  return i;
}
function Gd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zd(t) && ep(e);
}
function Xd(e, t, n) {
  return n(function () {
    Zd(t) && ep(e);
  });
}
function Zd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !it(e, n);
  } catch {
    return !0;
  }
}
function ep(e) {
  var t = Et(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function wc(e) {
  var t = ut();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ng.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Vr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function tp() {
  return qe().memoizedState;
}
function ji(e, t, n, r) {
  var i = ut();
  (K.flags |= e),
    (i.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Po(e, t, n, r) {
  var i = qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (((o = s.destroy), r !== null && Wu(r, s.deps))) {
      i.memoizedState = Vr(t, n, o, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = Vr(1 | t, n, o, r));
}
function Sc(e, t) {
  return ji(8390656, 8, e, t);
}
function Ku(e, t) {
  return Po(2048, 8, e, t);
}
function np(e, t) {
  return Po(4, 2, e, t);
}
function rp(e, t) {
  return Po(4, 4, e, t);
}
function ip(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function op(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Po(4, 4, ip.bind(null, t, e), n)
  );
}
function Qu() {}
function sp(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function lp(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function up(e, t, n) {
  return fn & 21
    ? (it(n, t) || ((n = pd()), (K.lanes |= n), (dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function Tg(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = zs.transition;
  zs.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (zs.transition = r);
  }
}
function ap() {
  return qe().memoizedState;
}
function Og(e, t, n) {
  var r = zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cp(e))
  )
    fp(t, n);
  else if (((n = Hd(e, t, n, r)), n !== null)) {
    var i = xe();
    tt(n, e, r, i), dp(n, t, r);
  }
}
function Ng(e, t, n) {
  var r = zt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cp(e)) fp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), it(l, s))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Bu(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hd(e, t, i, r)),
      n !== null && ((i = xe()), tt(n, e, r, i), dp(n, t, r));
  }
}
function cp(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function fp(e, t) {
  Cr = uo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function dp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _u(e, n);
  }
}
var ao = {
    readContext: He,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  Pg = {
    readContext: He,
    useCallback: function (e, t) {
      return (ut().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: Sc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ji(4194308, 4, ip.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ji(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ji(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ut();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ut();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Og.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ut();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wc,
    useDebugValue: Qu,
    useDeferredValue: function (e) {
      return (ut().memoizedState = e);
    },
    useTransition: function () {
      var e = wc(!1),
        t = e[0];
      return (e = Tg.bind(null, e[1])), (ut().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = ut();
      if (W) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(k(349));
        fn & 30 || Gd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Sc(Xd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Vr(9, Yd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ut(),
        t = ae.identifierPrefix;
      if (W) {
        var n = yt,
          r = mt;
        (n = (r & ~(1 << (32 - et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Rg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Lg = {
    readContext: He,
    useCallback: sp,
    useContext: He,
    useEffect: Ku,
    useImperativeHandle: op,
    useInsertionEffect: np,
    useLayoutEffect: rp,
    useMemo: lp,
    useReducer: Vs,
    useRef: tp,
    useState: function () {
      return Vs(zr);
    },
    useDebugValue: Qu,
    useDeferredValue: function (e) {
      var t = qe();
      return up(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Vs(zr)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Qd,
    useSyncExternalStore: Jd,
    useId: ap,
    unstable_isNewReconciler: !1,
  },
  Ag = {
    readContext: He,
    useCallback: sp,
    useContext: He,
    useEffect: Ku,
    useImperativeHandle: op,
    useInsertionEffect: np,
    useLayoutEffect: rp,
    useMemo: lp,
    useReducer: bs,
    useRef: tp,
    useState: function () {
      return bs(zr);
    },
    useDebugValue: Qu,
    useDeferredValue: function (e) {
      var t = qe();
      return re === null ? (t.memoizedState = e) : up(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = bs(zr)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Qd,
    useSyncExternalStore: Jd,
    useId: ap,
    unstable_isNewReconciler: !1,
  };
function Je(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ul(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = zt(e),
      o = gt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Bt(e, o, i)),
      t !== null && (tt(t, e, i, r), Li(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = zt(e),
      o = gt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Bt(e, o, i)),
      t !== null && (tt(t, e, i, r), Li(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe(),
      r = zt(e),
      i = gt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Bt(e, i, r)),
      t !== null && (tt(t, e, r, n), Li(t, e, r));
  },
};
function Ec(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ur(n, r) || !Ur(i, o)
      : !0
  );
}
function pp(e, t, n) {
  var r = !1,
    i = qt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = He(o))
      : ((i = Ne(t) ? an : ge.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Bn(e, i) : qt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Lo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function xc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Lo.enqueueReplaceState(t, t.state, null);
}
function Dl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Fu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = He(o))
    : ((o = Ne(t) ? an : ge.current), (i.context = Bn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ul(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Lo.enqueueReplaceState(i, i.state, null),
      so(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function bn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += sy(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ws(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Il(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jg = typeof WeakMap == "function" ? WeakMap : Map;
function hp(e, t, n) {
  (n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      fo || ((fo = !0), (ql = r)), Il(e, t);
    }),
    n
  );
}
function mp(e, t, n) {
  (n = gt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Il(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Il(e, t),
          typeof r != "function" &&
            (Ft === null ? (Ft = new Set([this])) : Ft.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Cc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Kg.bind(null, e, t, n)), t.then(e, e));
}
function kc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _c(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = gt(-1, 1)), (t.tag = 2), Bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ug = kt.ReactCurrentOwner,
  Te = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? Wd(t, null, n, r) : zn(t, e.child, n, r);
}
function Rc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Dn(t, i),
    (r = Hu(e, t, n, r, o, i)),
    (n = qu()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        xt(e, t, i))
      : (W && n && ju(t), (t.flags |= 1), Ee(e, t, r, i), t.child)
  );
}
function Tc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !na(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), yp(e, t, o, r, i))
      : ((e = Mi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ur), n(s, r) && e.ref === t.ref)
    )
      return xt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Vt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function yp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ur(o, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Te = !0);
      else return (t.lanes = e.lanes), xt(e, t, i);
  }
  return Ml(e, t, n, r, i);
}
function gp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Pn, Ae),
        (Ae |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(Pn, Ae),
          (Ae |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        z(Pn, Ae),
        (Ae |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Pn, Ae),
      (Ae |= r);
  return Ee(e, t, i, n), t.child;
}
function vp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ml(e, t, n, r, i) {
  var o = Ne(n) ? an : ge.current;
  return (
    (o = Bn(t, o)),
    Dn(t, i),
    (n = Hu(e, t, n, r, o, i)),
    (r = qu()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        xt(e, t, i))
      : (W && r && ju(t), (t.flags |= 1), Ee(e, t, n, i), t.child)
  );
}
function Oc(e, t, n, r, i) {
  if (Ne(n)) {
    var o = !0;
    to(t);
  } else o = !1;
  if ((Dn(t, i), t.stateNode === null))
    Ui(e, t), pp(t, n, r), Dl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var u = s.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = He(a))
      : ((a = Ne(n) ? an : ge.current), (a = Bn(t, a)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || u !== a) && xc(t, s, r, a)),
      (Nt = !1);
    var y = t.memoizedState;
    (s.state = y),
      so(t, r, s, i),
      (u = t.memoizedState),
      l !== r || y !== u || Oe.current || Nt
        ? (typeof c == "function" && (Ul(t, n, c, r), (u = t.memoizedState)),
          (l = Nt || Ec(t, n, l, r, y, u, a))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = a),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      qd(e, t),
      (l = t.memoizedProps),
      (a = t.type === t.elementType ? l : Je(t.type, l)),
      (s.props = a),
      (d = t.pendingProps),
      (y = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = He(u))
        : ((u = Ne(n) ? an : ge.current), (u = Bn(t, u)));
    var w = n.getDerivedStateFromProps;
    (c =
      typeof w == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== d || y !== u) && xc(t, s, r, u)),
      (Nt = !1),
      (y = t.memoizedState),
      (s.state = y),
      so(t, r, s, i);
    var g = t.memoizedState;
    l !== d || y !== g || Oe.current || Nt
      ? (typeof w == "function" && (Ul(t, n, w, r), (g = t.memoizedState)),
        (a = Nt || Ec(t, n, a, r, y, g, u) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, u),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, u)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = u),
        (r = a))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $l(e, t, n, r, o, i);
}
function $l(e, t, n, r, i, o) {
  vp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && pc(t, n, !1), xt(e, t, o);
  (r = t.stateNode), (Ug.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = zn(t, e.child, null, o)), (t.child = zn(t, null, l, o)))
      : Ee(e, t, l, o),
    (t.memoizedState = r.state),
    i && pc(t, n, !0),
    t.child
  );
}
function wp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? dc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && dc(e, t.context, !1),
    zu(e, t.containerInfo);
}
function Nc(e, t, n, r, i) {
  return Fn(), Du(i), (t.flags |= 256), Ee(e, t, n, r), t.child;
}
var Bl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sp(e, t, n) {
  var r = t.pendingProps,
    i = q.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z(q, i & 1),
    e === null)
  )
    return (
      Al(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Uo(s, r, 0, null)),
              (e = un(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Fl(n)),
              (t.memoizedState = Bl),
              e)
            : Ju(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Dg(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Vt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Vt(l, o)) : ((o = un(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Fl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Vt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ju(e, t) {
  return (
    (t = Uo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gi(e, t, n, r) {
  return (
    r !== null && Du(r),
    zn(t, e.child, null, n),
    (e = Ju(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Dg(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ws(Error(k(422)))), gi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Uo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = un(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && zn(t, e.child, null, s),
        (t.child.memoizedState = Fl(s)),
        (t.memoizedState = Bl),
        o);
  if (!(t.mode & 1)) return gi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(k(419))), (r = Ws(o, r, void 0)), gi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Te || l)) {
    if (((r = ae), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Et(e, i), tt(r, e, i, -1));
    }
    return ta(), (r = Ws(Error(k(421)))), gi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Qg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (je = $t(i.nextSibling)),
      (Ue = t),
      (W = !0),
      (Ze = null),
      e !== null &&
        ((Be[Fe++] = mt),
        (Be[Fe++] = yt),
        (Be[Fe++] = cn),
        (mt = e.id),
        (yt = e.overflow),
        (cn = t)),
      (t = Ju(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Pc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), jl(e.return, t, n);
}
function Hs(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Ep(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ee(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Pc(e, n, t);
        else if (e.tag === 19) Pc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && lo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Hs(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && lo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Hs(t, !0, n, null, o);
        break;
      case "together":
        Hs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ui(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ig(e, t, n) {
  switch (t.tag) {
    case 3:
      wp(t), Fn();
      break;
    case 5:
      Kd(t);
      break;
    case 1:
      Ne(t.type) && to(t);
      break;
    case 4:
      zu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      z(io, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Sp(e, t, n)
          : (z(q, q.current & 1),
            (e = xt(e, t, n)),
            e !== null ? e.sibling : null);
      z(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ep(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gp(e, t, n);
  }
  return xt(e, t, n);
}
var xp, zl, Cp, kp;
xp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
zl = function () {};
Cp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), sn(ft.current);
    var o = null;
    switch (n) {
      case "input":
        (i = al(e, i)), (r = al(e, r)), (o = []);
        break;
      case "select":
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = dl(e, i)), (r = dl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Zi);
    }
    hl(n, r);
    var s;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var l = i[a];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Tr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((l = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && u !== l && (u != null || l != null))
      )
        if (a === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in u)
              u.hasOwnProperty(s) &&
                l[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Tr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && V("scroll", e),
                  o || l === u || (o = []))
                : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
kp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Mg(e, t, n) {
  var r = t.pendingProps;
  switch ((Uu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return me(t), null;
    case 1:
      return Ne(t.type) && eo(), me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Vn(),
        b(Oe),
        b(ge),
        bu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ze !== null && (Jl(Ze), (Ze = null)))),
        zl(e, t),
        me(t),
        null
      );
    case 5:
      Vu(t);
      var i = sn(Br.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return me(t), null;
        }
        if (((e = sn(ft.current)), mi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[at] = t), (r[Mr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < yr.length; i++) V(yr[i], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V("error", r), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              Ba(r, o), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              za(r, o), V("invalid", r);
          }
          hl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Tr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              si(r), Fa(r, o, !0);
              break;
            case "textarea":
              si(r), Va(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Xf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[at] = t),
            (e[Mr] = r),
            xp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ml(n, r)), n)) {
              case "dialog":
                V("cancel", e), V("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < yr.length; i++) V(yr[i], e);
                i = r;
                break;
              case "source":
                V("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                V("error", e), V("load", e), (i = r);
                break;
              case "details":
                V("toggle", e), (i = r);
                break;
              case "input":
                Ba(e, r), (i = al(e, r)), V("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                za(e, r), (i = dl(e, r)), V("invalid", e);
                break;
              default:
                i = r;
            }
            hl(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var u = l[o];
                o === "style"
                  ? td(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Zf(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Or(e, u)
                    : typeof u == "number" && Or(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Tr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && V("scroll", e)
                      : u != null && wu(e, o, u, s));
              }
            switch (n) {
              case "input":
                si(e), Fa(e, r, !1);
                break;
              case "textarea":
                si(e), Va(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Ln(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Ln(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Zi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) kp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = sn(Br.current)), sn(ft.current), mi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (o = r.nodeValue !== n) && ((e = Ue), e !== null))
          )
            switch (e.tag) {
              case 3:
                hi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r);
      }
      return me(t), null;
    case 13:
      if (
        (b(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && je !== null && t.mode & 1 && !(t.flags & 128))
          Vd(), Fn(), (t.flags |= 98560), (o = !1);
        else if (((o = mi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[at] = t;
          } else
            Fn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (o = !1);
        } else Ze !== null && (Jl(Ze), (Ze = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? ie === 0 && (ie = 3) : ta())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        Vn(), zl(e, t), e === null && Dr(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return $u(t.type._context), me(t), null;
    case 17:
      return Ne(t.type) && eo(), me(t), null;
    case 19:
      if ((b(q), (o = t.memoizedState), o === null)) return me(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ar(o, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = lo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ar(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            X() > Wn &&
            ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = lo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !W)
            )
              return me(t), null;
          } else
            2 * X() - o.renderingStartTime > Wn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = X()),
          (t.sibling = null),
          (n = q.current),
          z(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        ea(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ae & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function $g(e, t) {
  switch ((Uu(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && eo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Vn(),
        b(Oe),
        b(ge),
        bu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vu(t), null;
    case 13:
      if ((b(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Fn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return b(q), null;
    case 4:
      return Vn(), null;
    case 10:
      return $u(t.type._context), null;
    case 22:
    case 23:
      return ea(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vi = !1,
  ye = !1,
  Bg = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function Vl(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Lc = !1;
function Fg(e, t) {
  if (((_l = Gi), (e = Nd()), Au(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            u = -1,
            a = 0,
            c = 0,
            d = e,
            y = null;
          t: for (;;) {
            for (
              var w;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (u = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (w = d.firstChild) !== null;

            )
              (y = d), (d = w);
            for (;;) {
              if (d === e) break t;
              if (
                (y === n && ++a === i && (l = s),
                y === o && ++c === r && (u = s),
                (w = d.nextSibling) !== null)
              )
                break;
              (d = y), (y = d.parentNode);
            }
            d = w;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Rl = { focusedElem: e, selectionRange: n }, Gi = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    C = g.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Je(t.type, v),
                      C
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (E) {
          J(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (g = Lc), (Lc = !1), g;
}
function kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Vl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ao(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function _p(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _p(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[Mr], delete t[Nl], delete t[xg], delete t[Cg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ac(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Zi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), (e = e.sibling);
}
function Hl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hl(e, t, n), e = e.sibling; e !== null; ) Hl(e, t, n), (e = e.sibling);
}
var fe = null,
  Ge = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; ) Tp(e, t, n), (n = n.sibling);
}
function Tp(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ye || Nn(n, t);
    case 6:
      var r = fe,
        i = Ge;
      (fe = null),
        Rt(e, t, n),
        (fe = r),
        (Ge = i),
        fe !== null &&
          (Ge
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (Ge
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? $s(e.parentNode, n)
              : e.nodeType === 1 && $s(e, n),
            Ar(e))
          : $s(fe, n.stateNode));
      break;
    case 4:
      (r = fe),
        (i = Ge),
        (fe = n.stateNode.containerInfo),
        (Ge = !0),
        Rt(e, t, n),
        (fe = r),
        (Ge = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Vl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Rt(e, t, n);
      break;
    case 1:
      if (
        !ye &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          J(n, t, l);
        }
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ye = (r = ye) || n.memoizedState !== null), Rt(e, t, n), (ye = r))
        : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function jc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Bg()),
      t.forEach(function (r) {
        var i = Jg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (fe = l.stateNode), (Ge = !1);
              break e;
            case 3:
              (fe = l.stateNode.containerInfo), (Ge = !0);
              break e;
            case 4:
              (fe = l.stateNode.containerInfo), (Ge = !0);
              break e;
          }
          l = l.return;
        }
        if (fe === null) throw Error(k(160));
        Tp(o, s, i), (fe = null), (Ge = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (a) {
        J(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Op(t, e), (t = t.sibling);
}
function Op(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), lt(e), r & 4)) {
        try {
          kr(3, e, e.return), Ao(3, e);
        } catch (v) {
          J(e, e.return, v);
        }
        try {
          kr(5, e, e.return);
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 1:
      Qe(t, e), lt(e), r & 512 && n !== null && Nn(n, n.return);
      break;
    case 5:
      if (
        (Qe(t, e),
        lt(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Or(i, "");
        } catch (v) {
          J(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Gf(i, o),
              ml(l, s);
            var a = ml(l, o);
            for (s = 0; s < u.length; s += 2) {
              var c = u[s],
                d = u[s + 1];
              c === "style"
                ? td(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Zf(i, d)
                : c === "children"
                ? Or(i, d)
                : wu(i, c, d, a);
            }
            switch (l) {
              case "input":
                cl(i, o);
                break;
              case "textarea":
                Yf(i, o);
                break;
              case "select":
                var y = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? Ln(i, !!o.multiple, w, !1)
                  : y !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Ln(i, !!o.multiple, o.defaultValue, !0)
                      : Ln(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Mr] = o;
          } catch (v) {
            J(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ar(t.containerInfo);
        } catch (v) {
          J(e, e.return, v);
        }
      break;
    case 4:
      Qe(t, e), lt(e);
      break;
    case 13:
      Qe(t, e),
        lt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Xu = X())),
        r & 4 && jc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ye = (a = ye) || c), Qe(t, e), (ye = a)) : Qe(t, e),
        lt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (O = e, c = e.child; c !== null; ) {
            for (d = O = c; O !== null; ) {
              switch (((y = O), (w = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kr(4, y, y.return);
                  break;
                case 1:
                  Nn(y, y.return);
                  var g = y.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = y), (n = y.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      J(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Nn(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    Dc(d);
                    continue;
                  }
              }
              w !== null ? ((w.return = y), (O = w)) : Dc(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = d.stateNode),
                      (u = d.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = ed("display", s)));
              } catch (v) {
                J(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (v) {
                J(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Qe(t, e), lt(e), r & 4 && jc(e);
      break;
    case 21:
      break;
    default:
      Qe(t, e), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Or(i, ""), (r.flags &= -33));
          var o = Ac(e);
          Hl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Ac(e);
          Wl(e, l, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      J(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zg(e, t, n) {
  (O = e), Np(e);
}
function Np(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || vi;
      if (!s) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || ye;
        l = vi;
        var a = ye;
        if (((vi = s), (ye = u) && !a))
          for (O = i; O !== null; )
            (s = O),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Ic(i)
                : u !== null
                ? ((u.return = s), (O = u))
                : Ic(i);
        for (; o !== null; ) (O = o), Np(o), (o = o.sibling);
        (O = i), (vi = l), (ye = a);
      }
      Uc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (O = o)) : Uc(e);
  }
}
function Uc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || Ao(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ye)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Je(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && vc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                vc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ar(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ye || (t.flags & 512 && bl(t));
      } catch (y) {
        J(t, t.return, y);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Dc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Ic(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ao(4, t);
          } catch (u) {
            J(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              J(t, i, u);
            }
          }
          var o = t.return;
          try {
            bl(t);
          } catch (u) {
            J(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            bl(t);
          } catch (u) {
            J(t, s, u);
          }
      }
    } catch (u) {
      J(t, t.return, u);
    }
    if (t === e) {
      O = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (O = l);
      break;
    }
    O = t.return;
  }
}
var Vg = Math.ceil,
  co = kt.ReactCurrentDispatcher,
  Gu = kt.ReactCurrentOwner,
  be = kt.ReactCurrentBatchConfig,
  M = 0,
  ae = null,
  Z = null,
  de = 0,
  Ae = 0,
  Pn = Gt(0),
  ie = 0,
  br = null,
  dn = 0,
  jo = 0,
  Yu = 0,
  _r = null,
  Re = null,
  Xu = 0,
  Wn = 1 / 0,
  pt = null,
  fo = !1,
  ql = null,
  Ft = null,
  wi = !1,
  jt = null,
  po = 0,
  Rr = 0,
  Kl = null,
  Di = -1,
  Ii = 0;
function xe() {
  return M & 6 ? X() : Di !== -1 ? Di : (Di = X());
}
function zt(e) {
  return e.mode & 1
    ? M & 2 && de !== 0
      ? de & -de
      : _g.transition !== null
      ? (Ii === 0 && (Ii = pd()), Ii)
      : ((e = $),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sd(e.type))),
        e)
    : 1;
}
function tt(e, t, n, r) {
  if (50 < Rr) throw ((Rr = 0), (Kl = null), Error(k(185)));
  Qr(e, n, r),
    (!(M & 2) || e !== ae) &&
      (e === ae && (!(M & 2) && (jo |= n), ie === 4 && Lt(e, de)),
      Pe(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((Wn = X() + 500), No && Yt()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  _y(e, t);
  var r = Ji(e, e === ae ? de : 0);
  if (r === 0)
    n !== null && Ha(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ha(n), t === 1))
      e.tag === 0 ? kg(Mc.bind(null, e)) : Bd(Mc.bind(null, e)),
        Sg(function () {
          !(M & 6) && Yt();
        }),
        (n = null);
    else {
      switch (hd(r)) {
        case 1:
          n = ku;
          break;
        case 4:
          n = fd;
          break;
        case 16:
          n = Qi;
          break;
        case 536870912:
          n = dd;
          break;
        default:
          n = Qi;
      }
      n = Mp(n, Pp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Pp(e, t) {
  if (((Di = -1), (Ii = 0), M & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (In() && e.callbackNode !== n) return null;
  var r = Ji(e, e === ae ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ho(e, r);
  else {
    t = r;
    var i = M;
    M |= 2;
    var o = Ap();
    (ae !== e || de !== t) && ((pt = null), (Wn = X() + 500), ln(e, t));
    do
      try {
        Hg();
        break;
      } catch (l) {
        Lp(e, l);
      }
    while (1);
    Mu(),
      (co.current = o),
      (M = i),
      Z !== null ? (t = 0) : ((ae = null), (de = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Sl(e)), i !== 0 && ((r = i), (t = Ql(e, i)))), t === 1)
    )
      throw ((n = br), ln(e, 0), Lt(e, r), Pe(e, X()), n);
    if (t === 6) Lt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !bg(i) &&
          ((t = ho(e, r)),
          t === 2 && ((o = Sl(e)), o !== 0 && ((r = o), (t = Ql(e, o)))),
          t === 1))
      )
        throw ((n = br), ln(e, 0), Lt(e, r), Pe(e, X()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          nn(e, Re, pt);
          break;
        case 3:
          if (
            (Lt(e, r), (r & 130023424) === r && ((t = Xu + 500 - X()), 10 < t))
          ) {
            if (Ji(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ol(nn.bind(null, e, Re, pt), t);
            break;
          }
          nn(e, Re, pt);
          break;
        case 4:
          if ((Lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - et(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Vg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ol(nn.bind(null, e, Re, pt), r);
            break;
          }
          nn(e, Re, pt);
          break;
        case 5:
          nn(e, Re, pt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Pe(e, X()), e.callbackNode === n ? Pp.bind(null, e) : null;
}
function Ql(e, t) {
  var n = _r;
  return (
    e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
    (e = ho(e, t)),
    e !== 2 && ((t = Re), (Re = n), t !== null && Jl(t)),
    e
  );
}
function Jl(e) {
  Re === null ? (Re = e) : Re.push.apply(Re, e);
}
function bg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!it(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Lt(e, t) {
  for (
    t &= ~Yu,
      t &= ~jo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - et(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Mc(e) {
  if (M & 6) throw Error(k(327));
  In();
  var t = Ji(e, 0);
  if (!(t & 1)) return Pe(e, X()), null;
  var n = ho(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Sl(e);
    r !== 0 && ((t = r), (n = Ql(e, r)));
  }
  if (n === 1) throw ((n = br), ln(e, 0), Lt(e, t), Pe(e, X()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, Re, pt),
    Pe(e, X()),
    null
  );
}
function Zu(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((Wn = X() + 500), No && Yt());
  }
}
function pn(e) {
  jt !== null && jt.tag === 0 && !(M & 6) && In();
  var t = M;
  M |= 1;
  var n = be.transition,
    r = $;
  try {
    if (((be.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (be.transition = n), (M = t), !(M & 6) && Yt();
  }
}
function ea() {
  (Ae = Pn.current), b(Pn);
}
function ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), wg(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((Uu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && eo();
          break;
        case 3:
          Vn(), b(Oe), b(ge), bu();
          break;
        case 5:
          Vu(r);
          break;
        case 4:
          Vn();
          break;
        case 13:
          b(q);
          break;
        case 19:
          b(q);
          break;
        case 10:
          $u(r.type._context);
          break;
        case 22:
        case 23:
          ea();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (Z = e = Vt(e.current, null)),
    (de = Ae = t),
    (ie = 0),
    (br = null),
    (Yu = jo = dn = 0),
    (Re = _r = null),
    on !== null)
  ) {
    for (t = 0; t < on.length; t++)
      if (((n = on[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    on = null;
  }
  return e;
}
function Lp(e, t) {
  do {
    var n = Z;
    try {
      if ((Mu(), (Ai.current = ao), uo)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        uo = !1;
      }
      if (
        ((fn = 0),
        (le = re = K = null),
        (Cr = !1),
        (Fr = 0),
        (Gu.current = null),
        n === null || n.return === null)
      ) {
        (ie = 1), (br = t), (Z = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          u = t;
        if (
          ((t = de),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var y = c.alternate;
            y
              ? ((c.updateQueue = y.updateQueue),
                (c.memoizedState = y.memoizedState),
                (c.lanes = y.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var w = kc(s);
          if (w !== null) {
            (w.flags &= -257),
              _c(w, s, l, o, t),
              w.mode & 1 && Cc(o, a, t),
              (t = w),
              (u = a);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(u), (t.updateQueue = v);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Cc(o, a, t), ta();
              break e;
            }
            u = Error(k(426));
          }
        } else if (W && l.mode & 1) {
          var C = kc(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              _c(C, s, l, o, t),
              Du(bn(u, l));
            break e;
          }
        }
        (o = u = bn(u, l)),
          ie !== 4 && (ie = 2),
          _r === null ? (_r = [o]) : _r.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = hp(o, u, t);
              gc(o, p);
              break e;
            case 1:
              l = u;
              var f = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Ft === null || !Ft.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = mp(o, l, t);
                gc(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Up(n);
    } catch (_) {
      (t = _), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ap() {
  var e = co.current;
  return (co.current = ao), e === null ? ao : e;
}
function ta() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    ae === null || (!(dn & 268435455) && !(jo & 268435455)) || Lt(ae, de);
}
function ho(e, t) {
  var n = M;
  M |= 2;
  var r = Ap();
  (ae !== e || de !== t) && ((pt = null), ln(e, t));
  do
    try {
      Wg();
      break;
    } catch (i) {
      Lp(e, i);
    }
  while (1);
  if ((Mu(), (M = n), (co.current = r), Z !== null)) throw Error(k(261));
  return (ae = null), (de = 0), ie;
}
function Wg() {
  for (; Z !== null; ) jp(Z);
}
function Hg() {
  for (; Z !== null && !yy(); ) jp(Z);
}
function jp(e) {
  var t = Ip(e.alternate, e, Ae);
  (e.memoizedProps = e.pendingProps),
    t === null ? Up(e) : (Z = t),
    (Gu.current = null);
}
function Up(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $g(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (Z = null);
        return;
      }
    } else if (((n = Mg(n, t, Ae)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function nn(e, t, n) {
  var r = $,
    i = be.transition;
  try {
    (be.transition = null), ($ = 1), qg(e, t, n, r);
  } finally {
    (be.transition = i), ($ = r);
  }
  return null;
}
function qg(e, t, n, r) {
  do In();
  while (jt !== null);
  if (M & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Ry(e, o),
    e === ae && ((Z = ae = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wi ||
      ((wi = !0),
      Mp(Qi, function () {
        return In(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = be.transition), (be.transition = null);
    var s = $;
    $ = 1;
    var l = M;
    (M |= 4),
      (Gu.current = null),
      Fg(e, n),
      Op(n, e),
      dg(Rl),
      (Gi = !!_l),
      (Rl = _l = null),
      (e.current = n),
      zg(n),
      gy(),
      (M = l),
      ($ = s),
      (be.transition = o);
  } else e.current = n;
  if (
    (wi && ((wi = !1), (jt = e), (po = i)),
    (o = e.pendingLanes),
    o === 0 && (Ft = null),
    Sy(n.stateNode),
    Pe(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (fo) throw ((fo = !1), (e = ql), (ql = null), e);
  return (
    po & 1 && e.tag !== 0 && In(),
    (o = e.pendingLanes),
    o & 1 ? (e === Kl ? Rr++ : ((Rr = 0), (Kl = e))) : (Rr = 0),
    Yt(),
    null
  );
}
function In() {
  if (jt !== null) {
    var e = hd(po),
      t = be.transition,
      n = $;
    try {
      if (((be.transition = null), ($ = 16 > e ? 16 : e), jt === null))
        var r = !1;
      else {
        if (((e = jt), (jt = null), (po = 0), M & 6)) throw Error(k(331));
        var i = M;
        for (M |= 4, O = e.current; O !== null; ) {
          var o = O,
            s = o.child;
          if (O.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var a = l[u];
                for (O = a; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (O = d);
                  else
                    for (; O !== null; ) {
                      c = O;
                      var y = c.sibling,
                        w = c.return;
                      if ((_p(c), c === a)) {
                        O = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = w), (O = y);
                        break;
                      }
                      O = w;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var C = v.sibling;
                    (v.sibling = null), (v = C);
                  } while (v !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (O = s);
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (O = p);
                break e;
              }
              O = o.return;
            }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          s = O;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (O = m);
          else
            e: for (s = f; O !== null; ) {
              if (((l = O), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ao(9, l);
                  }
                } catch (_) {
                  J(l, l.return, _);
                }
              if (l === s) {
                O = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (O = E);
                break e;
              }
              O = l.return;
            }
        }
        if (
          ((M = i), Yt(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (be.transition = t);
    }
  }
  return !1;
}
function $c(e, t, n) {
  (t = bn(n, t)),
    (t = hp(e, t, 1)),
    (e = Bt(e, t, 1)),
    (t = xe()),
    e !== null && (Qr(e, 1, t), Pe(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) $c(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $c(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ft === null || !Ft.has(r)))
        ) {
          (e = bn(n, e)),
            (e = mp(t, e, 1)),
            (t = Bt(t, e, 1)),
            (e = xe()),
            t !== null && (Qr(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Kg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (de & n) === n &&
      (ie === 4 || (ie === 3 && (de & 130023424) === de && 500 > X() - Xu)
        ? ln(e, 0)
        : (Yu |= n)),
    Pe(e, t);
}
function Dp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ai), (ai <<= 1), !(ai & 130023424) && (ai = 4194304))
      : (t = 1));
  var n = xe();
  (e = Et(e, t)), e !== null && (Qr(e, t, n), Pe(e, n));
}
function Qg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dp(e, n);
}
function Jg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Dp(e, n);
}
var Ip;
Ip = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Oe.current) Te = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), Ig(e, t, n);
      Te = !!(e.flags & 131072);
    }
  else (Te = !1), W && t.flags & 1048576 && Fd(t, ro, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ui(e, t), (e = t.pendingProps);
      var i = Bn(t, ge.current);
      Dn(t, n), (i = Hu(null, t, r, e, i, n));
      var o = qu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((o = !0), to(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Fu(t),
            (i.updater = Lo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Dl(t, r, e, n),
            (t = $l(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && ju(t), Ee(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ui(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Yg(r)),
          (e = Je(r, e)),
          i)
        ) {
          case 0:
            t = Ml(null, t, r, e, n);
            break e;
          case 1:
            t = Oc(null, t, r, e, n);
            break e;
          case 11:
            t = Rc(null, t, r, e, n);
            break e;
          case 14:
            t = Tc(null, t, r, Je(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Ml(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Oc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((wp(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          qd(e, t),
          so(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = bn(Error(k(423)), t)), (t = Nc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = bn(Error(k(424)), t)), (t = Nc(e, t, r, n, i));
            break e;
          } else
            for (
              je = $t(t.stateNode.containerInfo.firstChild),
                Ue = t,
                W = !0,
                Ze = null,
                n = Wd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Fn(), r === i)) {
            t = xt(e, t, n);
            break e;
          }
          Ee(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Kd(t),
        e === null && Al(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Tl(r, i) ? (s = null) : o !== null && Tl(r, o) && (t.flags |= 32),
        vp(e, t),
        Ee(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Al(t), null;
    case 13:
      return Sp(e, t, n);
    case 4:
      return (
        zu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zn(t, null, r, n)) : Ee(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Rc(e, t, r, i, n)
      );
    case 7:
      return Ee(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          z(io, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (it(o.value, s)) {
            if (o.children === i.children && !Oe.current) {
              t = xt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = gt(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      jl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  jl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ee(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Dn(t, n),
        (i = He(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ee(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Je(r, t.pendingProps)),
        (i = Je(r.type, i)),
        Tc(e, t, r, i, n)
      );
    case 15:
      return yp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Ui(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), to(t)) : (e = !1),
        Dn(t, n),
        pp(t, r, i),
        Dl(t, r, i, n),
        $l(null, t, r, !0, e, n)
      );
    case 19:
      return Ep(e, t, n);
    case 22:
      return gp(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Mp(e, t) {
  return cd(e, t);
}
function Gg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ve(e, t, n, r) {
  return new Gg(e, t, n, r);
}
function na(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Yg(e) {
  if (typeof e == "function") return na(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Eu)) return 11;
    if (e === xu) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Mi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) na(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Sn:
        return un(n.children, i, o, t);
      case Su:
        (s = 8), (i |= 8);
        break;
      case ol:
        return (
          (e = Ve(12, n, t, i | 2)), (e.elementType = ol), (e.lanes = o), e
        );
      case sl:
        return (e = Ve(13, n, t, i)), (e.elementType = sl), (e.lanes = o), e;
      case ll:
        return (e = Ve(19, n, t, i)), (e.elementType = ll), (e.lanes = o), e;
      case Kf:
        return Uo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hf:
              s = 10;
              break e;
            case qf:
              s = 9;
              break e;
            case Eu:
              s = 11;
              break e;
            case xu:
              s = 14;
              break e;
            case Ot:
              (s = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function un(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e;
}
function Uo(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = Kf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function qs(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e;
}
function Ks(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Xg(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ts(0)),
    (this.expirationTimes = Ts(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ts(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ra(e, t, n, r, i, o, s, l, u) {
  return (
    (e = new Xg(e, t, n, l, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ve(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fu(o),
    e
  );
}
function Zg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function $p(e) {
  if (!e) return qt;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return $d(e, n, t);
  }
  return t;
}
function Bp(e, t, n, r, i, o, s, l, u) {
  return (
    (e = ra(n, r, !0, e, i, o, s, l, u)),
    (e.context = $p(null)),
    (n = e.current),
    (r = xe()),
    (i = zt(n)),
    (o = gt(r, i)),
    (o.callback = t ?? null),
    Bt(n, o, i),
    (e.current.lanes = i),
    Qr(e, i, r),
    Pe(e, r),
    e
  );
}
function Do(e, t, n, r) {
  var i = t.current,
    o = xe(),
    s = zt(i);
  return (
    (n = $p(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bt(i, t, s)),
    e !== null && (tt(e, i, s, o), Li(e, i, s)),
    s
  );
}
function mo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ia(e, t) {
  Bc(e, t), (e = e.alternate) && Bc(e, t);
}
function ev() {
  return null;
}
var Fp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function oa(e) {
  this._internalRoot = e;
}
Io.prototype.render = oa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Do(e, t, null, null);
};
Io.prototype.unmount = oa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    pn(function () {
      Do(null, e, null, null);
    }),
      (t[St] = null);
  }
};
function Io(e) {
  this._internalRoot = e;
}
Io.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++);
    Pt.splice(n, 0, e), n === 0 && wd(e);
  }
};
function sa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Mo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Fc() {}
function tv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = mo(s);
        o.call(a);
      };
    }
    var s = Bp(t, r, e, 0, null, !1, !1, "", Fc);
    return (
      (e._reactRootContainer = s),
      (e[St] = s.current),
      Dr(e.nodeType === 8 ? e.parentNode : e),
      pn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var a = mo(u);
      l.call(a);
    };
  }
  var u = ra(e, 0, !1, null, null, !1, !1, "", Fc);
  return (
    (e._reactRootContainer = u),
    (e[St] = u.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    pn(function () {
      Do(t, u, n, r);
    }),
    u
  );
}
function $o(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = mo(s);
        l.call(u);
      };
    }
    Do(t, s, e, i);
  } else s = tv(n, t, e, i, r);
  return mo(s);
}
md = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 &&
          (_u(t, n | 1), Pe(t, X()), !(M & 6) && ((Wn = X() + 500), Yt()));
      }
      break;
    case 13:
      pn(function () {
        var r = Et(e, 1);
        if (r !== null) {
          var i = xe();
          tt(r, e, 1, i);
        }
      }),
        ia(e, 1);
  }
};
Ru = function (e) {
  if (e.tag === 13) {
    var t = Et(e, 134217728);
    if (t !== null) {
      var n = xe();
      tt(t, e, 134217728, n);
    }
    ia(e, 134217728);
  }
};
yd = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = Et(e, t);
    if (n !== null) {
      var r = xe();
      tt(n, e, t, r);
    }
    ia(e, t);
  }
};
gd = function () {
  return $;
};
vd = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
gl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((cl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Oo(r);
            if (!i) throw Error(k(90));
            Jf(r), cl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Yf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ln(e, !!n.multiple, t, !1);
  }
};
id = Zu;
od = pn;
var nv = { usingClientEntryPoint: !1, Events: [Gr, kn, Oo, nd, rd, Zu] },
  cr = {
    findFiberByHostInstance: rn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  rv = {
    bundleType: cr.bundleType,
    version: cr.version,
    rendererPackageName: cr.rendererPackageName,
    rendererConfig: cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ud(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: cr.findFiberByHostInstance || ev,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Si.isDisabled && Si.supportsFiber)
    try {
      (ko = Si.inject(rv)), (ct = Si);
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nv;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!sa(t)) throw Error(k(200));
  return Zg(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!sa(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = Fp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ra(e, 1, !1, null, null, n, !1, r, i)),
    (e[St] = t.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    new oa(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = ud(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
  return pn(e);
};
Ie.hydrate = function (e, t, n) {
  if (!Mo(t)) throw Error(k(200));
  return $o(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!sa(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Fp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Bp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[St] = t.current),
    Dr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Io(t);
};
Ie.render = function (e, t, n) {
  if (!Mo(t)) throw Error(k(200));
  return $o(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!Mo(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (pn(function () {
        $o(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[St] = null);
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = Zu;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Mo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return $o(e, t, n, !1, r);
};
Ie.version = "18.3.1-next-f1338f8080-20240426";
function zp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zp);
    } catch (e) {
      console.error(e);
    }
}
zp(), (zf.exports = Ie);
var Vp = zf.exports,
  zc = Vp;
(rl.createRoot = zc.createRoot), (rl.hydrateRoot = zc.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Wr() {
  return (
    (Wr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wr.apply(this, arguments)
  );
}
var Ut;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ut || (Ut = {}));
const Vc = "popstate";
function iv(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: l } = r.location;
    return Gl(
      "",
      { pathname: o, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : yo(i);
  }
  return sv(t, n, null, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function bp(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ov() {
  return Math.random().toString(36).substr(2, 8);
}
function bc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Gl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Wr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Yn(t) : t,
      { state: n, key: (t && t.key) || r || ov() }
    )
  );
}
function yo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Yn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function sv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    l = Ut.Pop,
    u = null,
    a = c();
  a == null && ((a = 0), s.replaceState(Wr({}, s.state, { idx: a }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    l = Ut.Pop;
    let C = c(),
      p = C == null ? null : C - a;
    (a = C), u && u({ action: l, location: v.location, delta: p });
  }
  function y(C, p) {
    l = Ut.Push;
    let f = Gl(v.location, C, p);
    n && n(f, C), (a = c() + 1);
    let m = bc(f, a),
      E = v.createHref(f);
    try {
      s.pushState(m, "", E);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
      i.location.assign(E);
    }
    o && u && u({ action: l, location: v.location, delta: 1 });
  }
  function w(C, p) {
    l = Ut.Replace;
    let f = Gl(v.location, C, p);
    n && n(f, C), (a = c());
    let m = bc(f, a),
      E = v.createHref(f);
    s.replaceState(m, "", E),
      o && u && u({ action: l, location: v.location, delta: 0 });
  }
  function g(C) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof C == "string" ? C : yo(C);
    return (
      (f = f.replace(/ $/, "%20")),
      G(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, p)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(C) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Vc, d),
        (u = C),
        () => {
          i.removeEventListener(Vc, d), (u = null);
        }
      );
    },
    createHref(C) {
      return t(i, C);
    },
    createURL: g,
    encodeLocation(C) {
      let p = g(C);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: y,
    replace: w,
    go(C) {
      return s.go(C);
    },
  };
  return v;
}
var Wc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Wc || (Wc = {}));
function lv(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Yn(t) : t,
    i = Hn(r.pathname || "/", n);
  if (i == null) return null;
  let o = Wp(e);
  uv(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) {
    let u = wv(i);
    s = gv(o[l], u);
  }
  return s;
}
function Wp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, l) => {
    let u = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (G(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let a = bt([r, u.relativePath]),
      c = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (G(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Wp(o.children, t, c, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: mv(a, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
      else for (let u of Hp(o.path)) i(o, s, u);
    }),
    t
  );
}
function Hp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Hp(r.join("/")),
    l = [];
  return (
    l.push(...s.map((u) => (u === "" ? o : [o, u].join("/")))),
    i && l.push(...s),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function uv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : yv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const av = /^:[\w-]+$/,
  cv = 3,
  fv = 2,
  dv = 1,
  pv = 10,
  hv = -2,
  Hc = (e) => e === "*";
function mv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Hc) && (r += hv),
    t && (r += fv),
    n
      .filter((i) => !Hc(i))
      .reduce((i, o) => i + (av.test(o) ? cv : o === "" ? dv : pv), r)
  );
}
function yv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function gv(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      u = s === n.length - 1,
      a = i === "/" ? t : t.slice(i.length) || "/",
      c = Yl(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        a
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = l.route;
    o.push({
      params: r,
      pathname: bt([i, c.pathname]),
      pathnameBase: Cv(bt([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = bt([i, c.pathnameBase]));
  }
  return o;
}
function Yl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = vv(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((a, c, d) => {
      let { paramName: y, isOptional: w } = c;
      if (y === "*") {
        let v = l[d] || "";
        s = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const g = l[d];
      return (
        w && !g ? (a[y] = void 0) : (a[y] = (g || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function vv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    bp(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, u) => (
            r.push({ paramName: l, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function wv(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      bp(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Hn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Sv(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Yn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Ev(n, t)) : t,
    search: kv(r),
    hash: _v(i),
  };
}
function Ev(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Qs(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function xv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function qp(e, t) {
  let n = xv(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Kp(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Yn(e))
    : ((i = Wr({}, e)),
      G(
        !i.pathname || !i.pathname.includes("?"),
        Qs("?", "pathname", "search", i)
      ),
      G(
        !i.pathname || !i.pathname.includes("#"),
        Qs("#", "pathname", "hash", i)
      ),
      G(!i.search || !i.search.includes("#"), Qs("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    l;
  if (s == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let y = s.split("/");
      for (; y[0] === ".."; ) y.shift(), (d -= 1);
      i.pathname = y.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let u = Sv(i, l),
    a = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (a || c) && (u.pathname += "/"), u;
}
const bt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Cv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  kv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  _v = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Rv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Qp = ["post", "put", "patch", "delete"];
new Set(Qp);
const Tv = ["get", ...Qp];
new Set(Tv);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hr() {
  return (
    (Hr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Hr.apply(this, arguments)
  );
}
const Bo = x.createContext(null),
  Jp = x.createContext(null),
  Xt = x.createContext(null),
  Fo = x.createContext(null),
  _t = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Gp = x.createContext(null);
function Ov(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Xr() || G(!1);
  let { basename: r, navigator: i } = x.useContext(Xt),
    { hash: o, pathname: s, search: l } = Vo(e, { relative: n }),
    u = s;
  return (
    r !== "/" && (u = s === "/" ? r : bt([r, s])),
    i.createHref({ pathname: u, search: l, hash: o })
  );
}
function Xr() {
  return x.useContext(Fo) != null;
}
function Zr() {
  return Xr() || G(!1), x.useContext(Fo).location;
}
function Yp(e) {
  x.useContext(Xt).static || x.useLayoutEffect(e);
}
function zo() {
  let { isDataRoute: e } = x.useContext(_t);
  return e ? bv() : Nv();
}
function Nv() {
  Xr() || G(!1);
  let e = x.useContext(Bo),
    { basename: t, future: n, navigator: r } = x.useContext(Xt),
    { matches: i } = x.useContext(_t),
    { pathname: o } = Zr(),
    s = JSON.stringify(qp(i, n.v7_relativeSplatPath)),
    l = x.useRef(!1);
  return (
    Yp(() => {
      l.current = !0;
    }),
    x.useCallback(
      function (a, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let d = Kp(a, JSON.parse(s), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : bt([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, s, o, e]
    )
  );
}
const Pv = x.createContext(null);
function Lv(e) {
  let t = x.useContext(_t).outlet;
  return t && x.createElement(Pv.Provider, { value: e }, t);
}
function Xp() {
  let { matches: e } = x.useContext(_t),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Vo(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = x.useContext(Xt),
    { matches: i } = x.useContext(_t),
    { pathname: o } = Zr(),
    s = JSON.stringify(qp(i, r.v7_relativeSplatPath));
  return x.useMemo(() => Kp(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function Av(e, t) {
  return jv(e, t);
}
function jv(e, t, n, r) {
  Xr() || G(!1);
  let { navigator: i } = x.useContext(Xt),
    { matches: o } = x.useContext(_t),
    s = o[o.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let u = s ? s.pathnameBase : "/";
  s && s.route;
  let a = Zr(),
    c;
  if (t) {
    var d;
    let C = typeof t == "string" ? Yn(t) : t;
    u === "/" || ((d = C.pathname) != null && d.startsWith(u)) || G(!1),
      (c = C);
  } else c = a;
  let y = c.pathname || "/",
    w = y;
  if (u !== "/") {
    let C = u.replace(/^\//, "").split("/");
    w = "/" + y.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let g = lv(e, { pathname: w }),
    v = $v(
      g &&
        g.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, l, C.params),
            pathname: bt([
              u,
              i.encodeLocation
                ? i.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? u
                : bt([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && v
    ? x.createElement(
        Fo.Provider,
        {
          value: {
            location: Hr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Ut.Pop,
          },
        },
        v
      )
    : v;
}
function Uv() {
  let e = Vv(),
    t = Rv(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: i }, n) : null,
    o
  );
}
const Dv = x.createElement(Uv, null);
class Iv extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          _t.Provider,
          { value: this.props.routeContext },
          x.createElement(Gp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Mv(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = x.useContext(Bo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(_t.Provider, { value: t }, r)
  );
}
function $v(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let s = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let c = s.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0
    );
    c >= 0 || G(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let u = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (a = c),
        d.route.id)
      ) {
        let { loaderData: y, errors: w } = n,
          g =
            d.route.loader &&
            y[d.route.id] === void 0 &&
            (!w || w[d.route.id] === void 0);
        if (d.route.lazy || g) {
          (u = !0), a >= 0 ? (s = s.slice(0, a + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, d, y) => {
    let w,
      g = !1,
      v = null,
      C = null;
    n &&
      ((w = l && d.route.id ? l[d.route.id] : void 0),
      (v = d.route.errorElement || Dv),
      u &&
        (a < 0 && y === 0
          ? (Wv("route-fallback", !1), (g = !0), (C = null))
          : a === y &&
            ((g = !0), (C = d.route.hydrateFallbackElement || null))));
    let p = t.concat(s.slice(0, y + 1)),
      f = () => {
        let m;
        return (
          w
            ? (m = v)
            : g
            ? (m = C)
            : d.route.Component
            ? (m = x.createElement(d.route.Component, null))
            : d.route.element
            ? (m = d.route.element)
            : (m = c),
          x.createElement(Mv, {
            match: d,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || y === 0)
      ? x.createElement(Iv, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: w,
          children: f(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Zp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Zp || {}),
  go = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(go || {});
function Bv(e) {
  let t = x.useContext(Bo);
  return t || G(!1), t;
}
function Fv(e) {
  let t = x.useContext(Jp);
  return t || G(!1), t;
}
function zv(e) {
  let t = x.useContext(_t);
  return t || G(!1), t;
}
function eh(e) {
  let t = zv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || G(!1), n.route.id;
}
function Vv() {
  var e;
  let t = x.useContext(Gp),
    n = Fv(go.UseRouteError),
    r = eh(go.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function bv() {
  let { router: e } = Bv(Zp.UseNavigateStable),
    t = eh(go.UseNavigateStable),
    n = x.useRef(!1);
  return (
    Yp(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Hr({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const qc = {};
function Wv(e, t, n) {
  !t && !qc[e] && (qc[e] = !0);
}
function th(e) {
  return Lv(e.context);
}
function _e(e) {
  G(!1);
}
function Hv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ut.Pop,
    navigator: o,
    static: s = !1,
    future: l,
  } = e;
  Xr() && G(!1);
  let u = t.replace(/^\/*/, "/"),
    a = x.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: s,
        future: Hr({ v7_relativeSplatPath: !1 }, l),
      }),
      [u, l, o, s]
    );
  typeof r == "string" && (r = Yn(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: y = "",
      state: w = null,
      key: g = "default",
    } = r,
    v = x.useMemo(() => {
      let C = Hn(c, u);
      return C == null
        ? null
        : {
            location: { pathname: C, search: d, hash: y, state: w, key: g },
            navigationType: i,
          };
    }, [u, c, d, y, w, g, i]);
  return v == null
    ? null
    : x.createElement(
        Xt.Provider,
        { value: a },
        x.createElement(Fo.Provider, { children: n, value: v })
      );
}
function qv(e) {
  let { children: t, location: n } = e;
  return Av(Xl(t), n);
}
new Promise(() => {});
function Xl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === x.Fragment) {
        n.push.apply(n, Xl(r.props.children, o));
        return;
      }
      r.type !== _e && G(!1), !r.props.index || !r.props.children || G(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Xl(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vo() {
  return (
    (vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vo.apply(this, arguments)
  );
}
function nh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Kv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Qv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Kv(e);
}
const Jv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Gv = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Yv = "6";
try {
  window.__reactRouterVersion = Yv;
} catch {}
const Xv = x.createContext({ isTransitioning: !1 }),
  Zv = "startTransition",
  Kc = Km[Zv];
function e0(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = x.useRef();
  o.current == null && (o.current = iv({ window: i, v5Compat: !0 }));
  let s = o.current,
    [l, u] = x.useState({ action: s.action, location: s.location }),
    { v7_startTransition: a } = r || {},
    c = x.useCallback(
      (d) => {
        a && Kc ? Kc(() => u(d)) : u(d);
      },
      [u, a]
    );
  return (
    x.useLayoutEffect(() => s.listen(c), [s, c]),
    x.createElement(Hv, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
const t0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  n0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Kt = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: u,
        to: a,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      y = nh(t, Jv),
      { basename: w } = x.useContext(Xt),
      g,
      v = !1;
    if (typeof a == "string" && n0.test(a) && ((g = a), t0))
      try {
        let m = new URL(window.location.href),
          E = a.startsWith("//") ? new URL(m.protocol + a) : new URL(a),
          _ = Hn(E.pathname, w);
        E.origin === m.origin && _ != null
          ? (a = _ + E.search + E.hash)
          : (v = !0);
      } catch {}
    let C = Ov(a, { relative: i }),
      p = i0(a, {
        replace: s,
        state: l,
        target: u,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: d,
      });
    function f(m) {
      r && r(m), m.defaultPrevented || p(m);
    }
    return x.createElement(
      "a",
      vo({}, y, { href: g || C, onClick: v || o ? r : f, ref: n, target: u })
    );
  }),
  Ye = x.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: s = !1,
        style: l,
        to: u,
        unstable_viewTransition: a,
        children: c,
      } = t,
      d = nh(t, Gv),
      y = Vo(u, { relative: d.relative }),
      w = Zr(),
      g = x.useContext(Jp),
      { navigator: v, basename: C } = x.useContext(Xt),
      p = g != null && o0(y) && a === !0,
      f = v.encodeLocation ? v.encodeLocation(y).pathname : y.pathname,
      m = w.pathname,
      E =
        g && g.navigation && g.navigation.location
          ? g.navigation.location.pathname
          : null;
    i ||
      ((m = m.toLowerCase()),
      (E = E ? E.toLowerCase() : null),
      (f = f.toLowerCase())),
      E && C && (E = Hn(E, C) || E);
    const _ = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let R = m === f || (!s && m.startsWith(f) && m.charAt(_) === "/"),
      T =
        E != null &&
        (E === f || (!s && E.startsWith(f) && E.charAt(f.length) === "/")),
      P = { isActive: R, isPending: T, isTransitioning: p },
      H = R ? r : void 0,
      j;
    typeof o == "function"
      ? (j = o(P))
      : (j = [
          o,
          R ? "active" : null,
          T ? "pending" : null,
          p ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let Le = typeof l == "function" ? l(P) : l;
    return x.createElement(
      Kt,
      vo({}, d, {
        "aria-current": H,
        className: j,
        ref: n,
        style: Le,
        to: u,
        unstable_viewTransition: a,
      }),
      typeof c == "function" ? c(P) : c
    );
  });
var Zl;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Zl || (Zl = {}));
var Qc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Qc || (Qc = {}));
function r0(e) {
  let t = x.useContext(Bo);
  return t || G(!1), t;
}
function i0(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    u = zo(),
    a = Zr(),
    c = Vo(e, { relative: s });
  return x.useCallback(
    (d) => {
      if (Qv(d, n)) {
        d.preventDefault();
        let y = r !== void 0 ? r : yo(a) === yo(c);
        u(e, {
          replace: y,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: l,
        });
      }
    },
    [a, u, c, r, i, n, e, o, s, l]
  );
}
function o0(e, t) {
  t === void 0 && (t = {});
  let n = x.useContext(Xv);
  n == null && G(!1);
  let { basename: r } = r0(Zl.useViewTransitionState),
    i = Vo(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Hn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = Hn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Yl(i.pathname, s) != null || Yl(i.pathname, o) != null;
}
var rh = { exports: {} },
  ih = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qn = x;
function s0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var l0 = typeof Object.is == "function" ? Object.is : s0,
  u0 = qn.useState,
  a0 = qn.useEffect,
  c0 = qn.useLayoutEffect,
  f0 = qn.useDebugValue;
function d0(e, t) {
  var n = t(),
    r = u0({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    c0(
      function () {
        (i.value = n), (i.getSnapshot = t), Js(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    a0(
      function () {
        return (
          Js(i) && o({ inst: i }),
          e(function () {
            Js(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    f0(n),
    n
  );
}
function Js(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !l0(e, n);
  } catch {
    return !0;
  }
}
function p0(e, t) {
  return t();
}
var h0 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? p0
    : d0;
ih.useSyncExternalStore =
  qn.useSyncExternalStore !== void 0 ? qn.useSyncExternalStore : h0;
rh.exports = ih;
var m0 = rh.exports,
  oh = { exports: {} },
  sh = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bo = x,
  y0 = m0;
function g0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var v0 = typeof Object.is == "function" ? Object.is : g0,
  w0 = y0.useSyncExternalStore,
  S0 = bo.useRef,
  E0 = bo.useEffect,
  x0 = bo.useMemo,
  C0 = bo.useDebugValue;
sh.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = S0(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = x0(
    function () {
      function u(w) {
        if (!a) {
          if (((a = !0), (c = w), (w = r(w)), i !== void 0 && s.hasValue)) {
            var g = s.value;
            if (i(g, w)) return (d = g);
          }
          return (d = w);
        }
        if (((g = d), v0(c, w))) return g;
        var v = r(w);
        return i !== void 0 && i(g, v) ? g : ((c = w), (d = v));
      }
      var a = !1,
        c,
        d,
        y = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        y === null
          ? void 0
          : function () {
              return u(y());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = w0(e, o[0], o[1]);
  return (
    E0(
      function () {
        (s.hasValue = !0), (s.value = l);
      },
      [l]
    ),
    C0(l),
    l
  );
};
oh.exports = sh;
var k0 = oh.exports;
function _0(e) {
  e();
}
let lh = _0;
const R0 = (e) => (lh = e),
  T0 = () => lh,
  Jc = Symbol.for("react-redux-context"),
  Gc = typeof globalThis < "u" ? globalThis : {};
function O0() {
  var e;
  if (!x.createContext) return {};
  const t = (e = Gc[Jc]) != null ? e : (Gc[Jc] = new Map());
  let n = t.get(x.createContext);
  return n || ((n = x.createContext(null)), t.set(x.createContext, n)), n;
}
const Qt = O0();
function la(e = Qt) {
  return function () {
    return x.useContext(e);
  };
}
const uh = la(),
  N0 = () => {
    throw new Error("uSES not initialized!");
  };
let ah = N0;
const P0 = (e) => {
    ah = e;
  },
  L0 = (e, t) => e === t;
function A0(e = Qt) {
  const t = e === Qt ? uh : la(e);
  return function (r, i = {}) {
    const {
        equalityFn: o = L0,
        stabilityCheck: s = void 0,
        noopCheck: l = void 0,
      } = typeof i == "function" ? { equalityFn: i } : i,
      {
        store: u,
        subscription: a,
        getServerState: c,
        stabilityCheck: d,
        noopCheck: y,
      } = t();
    x.useRef(!0);
    const w = x.useCallback(
        {
          [r.name](v) {
            return r(v);
          },
        }[r.name],
        [r, d, s]
      ),
      g = ah(a.addNestedSub, u.getState, c || u.getState, w, o);
    return x.useDebugValue(g), g;
  };
}
const ot = A0();
var ch = { exports: {} },
  B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ce = typeof Symbol == "function" && Symbol.for,
  ua = ce ? Symbol.for("react.element") : 60103,
  aa = ce ? Symbol.for("react.portal") : 60106,
  Wo = ce ? Symbol.for("react.fragment") : 60107,
  Ho = ce ? Symbol.for("react.strict_mode") : 60108,
  qo = ce ? Symbol.for("react.profiler") : 60114,
  Ko = ce ? Symbol.for("react.provider") : 60109,
  Qo = ce ? Symbol.for("react.context") : 60110,
  ca = ce ? Symbol.for("react.async_mode") : 60111,
  Jo = ce ? Symbol.for("react.concurrent_mode") : 60111,
  Go = ce ? Symbol.for("react.forward_ref") : 60112,
  Yo = ce ? Symbol.for("react.suspense") : 60113,
  j0 = ce ? Symbol.for("react.suspense_list") : 60120,
  Xo = ce ? Symbol.for("react.memo") : 60115,
  Zo = ce ? Symbol.for("react.lazy") : 60116,
  U0 = ce ? Symbol.for("react.block") : 60121,
  D0 = ce ? Symbol.for("react.fundamental") : 60117,
  I0 = ce ? Symbol.for("react.responder") : 60118,
  M0 = ce ? Symbol.for("react.scope") : 60119;
function $e(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ua:
        switch (((e = e.type), e)) {
          case ca:
          case Jo:
          case Wo:
          case qo:
          case Ho:
          case Yo:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Qo:
              case Go:
              case Zo:
              case Xo:
              case Ko:
                return e;
              default:
                return t;
            }
        }
      case aa:
        return t;
    }
  }
}
function fh(e) {
  return $e(e) === Jo;
}
B.AsyncMode = ca;
B.ConcurrentMode = Jo;
B.ContextConsumer = Qo;
B.ContextProvider = Ko;
B.Element = ua;
B.ForwardRef = Go;
B.Fragment = Wo;
B.Lazy = Zo;
B.Memo = Xo;
B.Portal = aa;
B.Profiler = qo;
B.StrictMode = Ho;
B.Suspense = Yo;
B.isAsyncMode = function (e) {
  return fh(e) || $e(e) === ca;
};
B.isConcurrentMode = fh;
B.isContextConsumer = function (e) {
  return $e(e) === Qo;
};
B.isContextProvider = function (e) {
  return $e(e) === Ko;
};
B.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ua;
};
B.isForwardRef = function (e) {
  return $e(e) === Go;
};
B.isFragment = function (e) {
  return $e(e) === Wo;
};
B.isLazy = function (e) {
  return $e(e) === Zo;
};
B.isMemo = function (e) {
  return $e(e) === Xo;
};
B.isPortal = function (e) {
  return $e(e) === aa;
};
B.isProfiler = function (e) {
  return $e(e) === qo;
};
B.isStrictMode = function (e) {
  return $e(e) === Ho;
};
B.isSuspense = function (e) {
  return $e(e) === Yo;
};
B.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Wo ||
    e === Jo ||
    e === qo ||
    e === Ho ||
    e === Yo ||
    e === j0 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Zo ||
        e.$$typeof === Xo ||
        e.$$typeof === Ko ||
        e.$$typeof === Qo ||
        e.$$typeof === Go ||
        e.$$typeof === D0 ||
        e.$$typeof === I0 ||
        e.$$typeof === M0 ||
        e.$$typeof === U0))
  );
};
B.typeOf = $e;
ch.exports = B;
var $0 = ch.exports,
  dh = $0,
  B0 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  F0 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ph = {};
ph[dh.ForwardRef] = B0;
ph[dh.Memo] = F0;
var F = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fa = Symbol.for("react.element"),
  da = Symbol.for("react.portal"),
  es = Symbol.for("react.fragment"),
  ts = Symbol.for("react.strict_mode"),
  ns = Symbol.for("react.profiler"),
  rs = Symbol.for("react.provider"),
  is = Symbol.for("react.context"),
  z0 = Symbol.for("react.server_context"),
  os = Symbol.for("react.forward_ref"),
  ss = Symbol.for("react.suspense"),
  ls = Symbol.for("react.suspense_list"),
  us = Symbol.for("react.memo"),
  as = Symbol.for("react.lazy"),
  V0 = Symbol.for("react.offscreen"),
  hh;
hh = Symbol.for("react.module.reference");
function Ke(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case fa:
        switch (((e = e.type), e)) {
          case es:
          case ns:
          case ts:
          case ss:
          case ls:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case z0:
              case is:
              case os:
              case as:
              case us:
              case rs:
                return e;
              default:
                return t;
            }
        }
      case da:
        return t;
    }
  }
}
F.ContextConsumer = is;
F.ContextProvider = rs;
F.Element = fa;
F.ForwardRef = os;
F.Fragment = es;
F.Lazy = as;
F.Memo = us;
F.Portal = da;
F.Profiler = ns;
F.StrictMode = ts;
F.Suspense = ss;
F.SuspenseList = ls;
F.isAsyncMode = function () {
  return !1;
};
F.isConcurrentMode = function () {
  return !1;
};
F.isContextConsumer = function (e) {
  return Ke(e) === is;
};
F.isContextProvider = function (e) {
  return Ke(e) === rs;
};
F.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === fa;
};
F.isForwardRef = function (e) {
  return Ke(e) === os;
};
F.isFragment = function (e) {
  return Ke(e) === es;
};
F.isLazy = function (e) {
  return Ke(e) === as;
};
F.isMemo = function (e) {
  return Ke(e) === us;
};
F.isPortal = function (e) {
  return Ke(e) === da;
};
F.isProfiler = function (e) {
  return Ke(e) === ns;
};
F.isStrictMode = function (e) {
  return Ke(e) === ts;
};
F.isSuspense = function (e) {
  return Ke(e) === ss;
};
F.isSuspenseList = function (e) {
  return Ke(e) === ls;
};
F.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === es ||
    e === ns ||
    e === ts ||
    e === ss ||
    e === ls ||
    e === V0 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === as ||
        e.$$typeof === us ||
        e.$$typeof === rs ||
        e.$$typeof === is ||
        e.$$typeof === os ||
        e.$$typeof === hh ||
        e.getModuleId !== void 0))
  );
};
F.typeOf = Ke;
function b0() {
  const e = T0();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const Yc = { notify() {}, get: () => [] };
function W0(e, t) {
  let n,
    r = Yc,
    i = 0,
    o = !1;
  function s(v) {
    c();
    const C = r.subscribe(v);
    let p = !1;
    return () => {
      p || ((p = !0), C(), d());
    };
  }
  function l() {
    r.notify();
  }
  function u() {
    g.onStateChange && g.onStateChange();
  }
  function a() {
    return o;
  }
  function c() {
    i++, n || ((n = t ? t.addNestedSub(u) : e.subscribe(u)), (r = b0()));
  }
  function d() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Yc));
  }
  function y() {
    o || ((o = !0), c());
  }
  function w() {
    o && ((o = !1), d());
  }
  const g = {
    addNestedSub: s,
    notifyNestedSubs: l,
    handleChangeWrapper: u,
    isSubscribed: a,
    trySubscribe: y,
    tryUnsubscribe: w,
    getListeners: () => r,
  };
  return g;
}
const H0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  q0 = H0 ? x.useLayoutEffect : x.useEffect;
function K0({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  noopCheck: o = "once",
}) {
  const s = x.useMemo(() => {
      const a = W0(e);
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        noopCheck: o,
      };
    }, [e, r, i, o]),
    l = x.useMemo(() => e.getState(), [e]);
  q0(() => {
    const { subscription: a } = s;
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      l !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0);
      }
    );
  }, [s, l]);
  const u = t || Qt;
  return x.createElement(u.Provider, { value: s }, n);
}
function mh(e = Qt) {
  const t = e === Qt ? uh : la(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Q0 = mh();
function J0(e = Qt) {
  const t = e === Qt ? Q0 : mh(e);
  return function () {
    return t().dispatch;
  };
}
const G0 = J0();
P0(k0.useSyncExternalStoreWithSelector);
R0(Vp.unstable_batchedUpdates);
const Y0 = !!(
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);
function X0(e) {
  if ("serviceWorker" in navigator) {
    if (
      new URL({}.PUBLIC_URL, window.location.href).origin !==
      window.location.origin
    )
      return;
    window.addEventListener("load", () => {
      const n = `${{}.PUBLIC_URL}/service-worker.js`;
      Y0
        ? (Z0(n, e),
          navigator.serviceWorker.ready.then(() => {
            console.log(
              "This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA"
            );
          }))
        : yh(n, e);
    });
  }
}
function yh(e, t) {
  navigator.serviceWorker
    .register(e)
    .then((n) => {
      n.onupdatefound = () => {
        const r = n.installing;
        r != null &&
          (r.onstatechange = () => {
            r.state === "installed" &&
              (navigator.serviceWorker.controller
                ? (console.log(
                    "New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."
                  ),
                  t && t.onUpdate && t.onUpdate(n))
                : (console.log("Content is cached for offline use."),
                  t && t.onSuccess && t.onSuccess(n)));
          });
      };
    })
    .catch((n) => {
      console.error("Error during service worker registration:", n);
    });
}
function Z0(e, t) {
  fetch(e, { headers: { "Service-Worker": "script" } })
    .then((n) => {
      const r = n.headers.get("content-type");
      n.status === 404 || (r != null && r.indexOf("javascript") === -1)
        ? navigator.serviceWorker.ready.then((i) => {
            i.unregister().then(() => {
              window.location.reload();
            });
          })
        : yh(e, t);
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}
function Se(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Xc = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Gs = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  wo = {
    INIT: "@@redux/INIT" + Gs(),
    REPLACE: "@@redux/REPLACE" + Gs(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Gs();
    },
  };
function ew(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function gh(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Se(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Se(1));
    return n(gh)(e, t);
  }
  if (typeof e != "function") throw new Error(Se(2));
  var i = e,
    o = t,
    s = [],
    l = s,
    u = !1;
  function a() {
    l === s && (l = s.slice());
  }
  function c() {
    if (u) throw new Error(Se(3));
    return o;
  }
  function d(v) {
    if (typeof v != "function") throw new Error(Se(4));
    if (u) throw new Error(Se(5));
    var C = !0;
    return (
      a(),
      l.push(v),
      function () {
        if (C) {
          if (u) throw new Error(Se(6));
          (C = !1), a();
          var f = l.indexOf(v);
          l.splice(f, 1), (s = null);
        }
      }
    );
  }
  function y(v) {
    if (!ew(v)) throw new Error(Se(7));
    if (typeof v.type > "u") throw new Error(Se(8));
    if (u) throw new Error(Se(9));
    try {
      (u = !0), (o = i(o, v));
    } finally {
      u = !1;
    }
    for (var C = (s = l), p = 0; p < C.length; p++) {
      var f = C[p];
      f();
    }
    return v;
  }
  function w(v) {
    if (typeof v != "function") throw new Error(Se(10));
    (i = v), y({ type: wo.REPLACE });
  }
  function g() {
    var v,
      C = d;
    return (
      (v = {
        subscribe: function (f) {
          if (typeof f != "object" || f === null) throw new Error(Se(11));
          function m() {
            f.next && f.next(c());
          }
          m();
          var E = C(m);
          return { unsubscribe: E };
        },
      }),
      (v[Xc] = function () {
        return this;
      }),
      v
    );
  }
  return (
    y({ type: wo.INIT }),
    (r = { dispatch: y, subscribe: d, getState: c, replaceReducer: w }),
    (r[Xc] = g),
    r
  );
}
function tw(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: wo.INIT });
    if (typeof r > "u") throw new Error(Se(12));
    if (typeof n(void 0, { type: wo.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Se(13));
  });
}
function nw(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  var o = Object.keys(n),
    s;
  try {
    tw(n);
  } catch (l) {
    s = l;
  }
  return function (u, a) {
    if ((u === void 0 && (u = {}), s)) throw s;
    for (var c = !1, d = {}, y = 0; y < o.length; y++) {
      var w = o[y],
        g = n[w],
        v = u[w],
        C = g(v, a);
      if (typeof C > "u") throw (a && a.type, new Error(Se(14)));
      (d[w] = C), (c = c || C !== v);
    }
    return (c = c || o.length !== Object.keys(u).length), c ? d : u;
  };
}
const vh = "SET_CARS",
  wh = "SET_CAR",
  Sh = "REMOVE_CAR",
  Eh = "ADD_CAR",
  xh = "UPDATE_CAR",
  Ch = "ADD_CAR_MSG",
  rw = { cars: [], car: null };
function iw(e = rw, t) {
  var n = e,
    r;
  switch (t.type) {
    case vh:
      n = { ...e, cars: t.cars };
      break;
    case wh:
      n = { ...e, car: t.car };
      break;
    case Sh:
      const i = e.cars.find((o) => o._id === t.carId);
      (r = e.cars.filter((o) => o._id !== t.carId)),
        (n = { ...e, cars: r, lastRemovedCar: i });
      break;
    case Eh:
      n = { ...e, cars: [...e.cars, t.car] };
      break;
    case xh:
      (r = e.cars.map((o) => (o._id === t.car._id ? t.car : o))),
        (n = { ...e, cars: r });
      break;
    case Ch:
      n = { ...e, car: { ...e.car, msgs: [...(e.car.msgs || []), t.msg] } };
      break;
  }
  return n;
}
const ve = { query: ei, get: ow, post: sw, put: lw, remove: uw };
function ei(e, t = 500) {
  var n = JSON.parse(localStorage.getItem(e)) || [];
  return new Promise((r) => setTimeout(() => r(n), t));
}
function ow(e, t) {
  return ei(e).then((n) => {
    const r = n.find((i) => i._id === t);
    if (!r)
      throw new Error(`Get failed, cannot find entity with id: ${t} in: ${e}`);
    return r;
  });
}
function sw(e, t) {
  return (t._id = aw()), ei(e).then((n) => (n.push(t), pa(e, n), t));
}
function lw(e, t) {
  return ei(e).then((n) => {
    const r = n.findIndex((o) => o._id === t._id);
    if (r < 0)
      throw new Error(
        `Update failed, cannot find entity with id: ${t._id} in: ${e}`
      );
    const i = { ...n[r], ...t };
    return n.splice(r, 1, i), pa(e, n), i;
  });
}
function uw(e, t) {
  return ei(e).then((n) => {
    const r = n.findIndex((i) => i._id === t);
    if (r < 0)
      throw new Error(
        `Remove failed, cannot find entity with id: ${t} in: ${e}`
      );
    n.splice(r, 1), pa(e, n);
  });
}
function pa(e, t) {
  localStorage.setItem(e, JSON.stringify(t));
}
function aw(e = 5) {
  for (
    var t = "",
      n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      r = 0;
    r < e;
    r++
  )
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
const ha = "loggedinUser",
  cw = {
    login: mw,
    logout: gw,
    signup: yw,
    getUsers: fw,
    getById: dw,
    remove: pw,
    update: hw,
    getLoggedinUser: kh,
  };
function fw() {
  return ve.query("user");
}
async function dw(e) {
  return await ve.get("user", e);
}
function pw(e) {
  return ve.remove("user", e);
}
async function hw({ _id: e, score: t }) {
  const n = await ve.get("user", e);
  return (n.score = t), await ve.put("user", n), kh()._id === n._id && ma(n), n;
}
async function mw(e) {
  const n = (await ve.query("user")).find((r) => r.username === e.username);
  if (n) return ma(n);
}
async function yw(e) {
  e.imgUrl ||
    (e.imgUrl =
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"),
    (e.score = 1e4);
  const t = await ve.post("user", e);
  return ma(t);
}
async function gw() {
  sessionStorage.removeItem(ha);
}
function kh() {
  return JSON.parse(sessionStorage.getItem(ha));
}
function ma(e) {
  return (
    (e = {
      _id: e._id,
      fullname: e.fullname,
      imgUrl: e.imgUrl,
      score: e.score,
      isAdmin: e.isAdmin,
    }),
    sessionStorage.setItem(ha, JSON.stringify(e)),
    e
  );
}
function _h(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: vw } = Object.prototype,
  { getPrototypeOf: ya } = Object,
  cs = ((e) => (t) => {
    const n = vw.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  st = (e) => ((e = e.toLowerCase()), (t) => cs(t) === e),
  fs = (e) => (t) => typeof t === e,
  { isArray: Xn } = Array,
  qr = fs("undefined");
function ww(e) {
  return (
    e !== null &&
    !qr(e) &&
    e.constructor !== null &&
    !qr(e.constructor) &&
    We(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Rh = st("ArrayBuffer");
function Sw(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Rh(e.buffer)),
    t
  );
}
const Ew = fs("string"),
  We = fs("function"),
  Th = fs("number"),
  ds = (e) => e !== null && typeof e == "object",
  xw = (e) => e === !0 || e === !1,
  $i = (e) => {
    if (cs(e) !== "object") return !1;
    const t = ya(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Cw = st("Date"),
  kw = st("File"),
  _w = st("Blob"),
  Rw = st("FileList"),
  Tw = (e) => ds(e) && We(e.pipe),
  Ow = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (We(e.append) &&
          ((t = cs(e)) === "formdata" ||
            (t === "object" &&
              We(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Nw = st("URLSearchParams"),
  [Pw, Lw, Aw, jw] = ["ReadableStream", "Request", "Response", "Headers"].map(
    st
  ),
  Uw = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ti(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Xn(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length;
    let l;
    for (r = 0; r < s; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function Oh(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const Nh = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Ph = (e) => !qr(e) && e !== Nh;
function eu() {
  const { caseless: e } = (Ph(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && Oh(t, i)) || i;
      $i(t[o]) && $i(r)
        ? (t[o] = eu(t[o], r))
        : $i(r)
        ? (t[o] = eu({}, r))
        : Xn(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && ti(arguments[r], n);
  return t;
}
const Dw = (e, t, n, { allOwnKeys: r } = {}) => (
    ti(
      t,
      (i, o) => {
        n && We(i) ? (e[o] = _h(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Iw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Mw = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  $w = (e, t, n, r) => {
    let i, o, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (s = i[o]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && ya(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Bw = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Fw = (e) => {
    if (!e) return null;
    if (Xn(e)) return e;
    let t = e.length;
    if (!Th(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  zw = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ya(Uint8Array)),
  Vw = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  bw = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Ww = st("HTMLFormElement"),
  Hw = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Zc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  qw = st("RegExp"),
  Lh = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ti(n, (i, o) => {
      let s;
      (s = t(i, o, e)) !== !1 && (r[o] = s || i);
    }),
      Object.defineProperties(e, r);
  },
  Kw = (e) => {
    Lh(e, (t, n) => {
      if (We(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (We(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Qw = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return Xn(e) ? r(e) : r(String(e).split(t)), n;
  },
  Jw = () => {},
  Gw = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ys = "abcdefghijklmnopqrstuvwxyz",
  ef = "0123456789",
  Ah = { DIGIT: ef, ALPHA: Ys, ALPHA_DIGIT: Ys + Ys.toUpperCase() + ef },
  Yw = (e = 16, t = Ah.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Xw(e) {
  return !!(
    e &&
    We(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Zw = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (ds(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = Xn(r) ? [] : {};
            return (
              ti(r, (s, l) => {
                const u = n(s, i + 1);
                !qr(u) && (o[l] = u);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  e1 = st("AsyncFunction"),
  t1 = (e) => e && (ds(e) || We(e)) && We(e.then) && We(e.catch),
  S = {
    isArray: Xn,
    isArrayBuffer: Rh,
    isBuffer: ww,
    isFormData: Ow,
    isArrayBufferView: Sw,
    isString: Ew,
    isNumber: Th,
    isBoolean: xw,
    isObject: ds,
    isPlainObject: $i,
    isReadableStream: Pw,
    isRequest: Lw,
    isResponse: Aw,
    isHeaders: jw,
    isUndefined: qr,
    isDate: Cw,
    isFile: kw,
    isBlob: _w,
    isRegExp: qw,
    isFunction: We,
    isStream: Tw,
    isURLSearchParams: Nw,
    isTypedArray: zw,
    isFileList: Rw,
    forEach: ti,
    merge: eu,
    extend: Dw,
    trim: Uw,
    stripBOM: Iw,
    inherits: Mw,
    toFlatObject: $w,
    kindOf: cs,
    kindOfTest: st,
    endsWith: Bw,
    toArray: Fw,
    forEachEntry: Vw,
    matchAll: bw,
    isHTMLForm: Ww,
    hasOwnProperty: Zc,
    hasOwnProp: Zc,
    reduceDescriptors: Lh,
    freezeMethods: Kw,
    toObjectSet: Qw,
    toCamelCase: Hw,
    noop: Jw,
    toFiniteNumber: Gw,
    findKey: Oh,
    global: Nh,
    isContextDefined: Ph,
    ALPHABET: Ah,
    generateString: Yw,
    isSpecCompliantForm: Xw,
    toJSONObject: Zw,
    isAsyncFn: e1,
    isThenable: t1,
  };
function L(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
S.inherits(L, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const jh = L.prototype,
  Uh = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Uh[e] = { value: e };
});
Object.defineProperties(L, Uh);
Object.defineProperty(jh, "isAxiosError", { value: !0 });
L.from = (e, t, n, r, i, o) => {
  const s = Object.create(jh);
  return (
    S.toFlatObject(
      e,
      s,
      function (u) {
        return u !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    L.call(s, e.message, t, n, r, i),
    (s.cause = e),
    (s.name = e.name),
    o && Object.assign(s, o),
    s
  );
};
const n1 = null;
function tu(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Dh(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function tf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Dh(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function r1(e) {
  return S.isArray(e) && !e.some(tu);
}
const i1 = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ps(e, t, n) {
  if (!S.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, C) {
        return !S.isUndefined(C[v]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    o = n.dots,
    s = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && S.isSpecCompliantForm(t);
  if (!S.isFunction(i)) throw new TypeError("visitor must be a function");
  function a(g) {
    if (g === null) return "";
    if (S.isDate(g)) return g.toISOString();
    if (!u && S.isBlob(g))
      throw new L("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(g) || S.isTypedArray(g)
      ? u && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, v, C) {
    let p = g;
    if (g && !C && typeof g == "object") {
      if (S.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (S.isArray(g) && r1(g)) ||
        ((S.isFileList(g) || S.endsWith(v, "[]")) && (p = S.toArray(g)))
      )
        return (
          (v = Dh(v)),
          p.forEach(function (m, E) {
            !(S.isUndefined(m) || m === null) &&
              t.append(
                s === !0 ? tf([v], E, o) : s === null ? v : v + "[]",
                a(m)
              );
          }),
          !1
        );
    }
    return tu(g) ? !0 : (t.append(tf(C, v, o), a(g)), !1);
  }
  const d = [],
    y = Object.assign(i1, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: tu,
    });
  function w(g, v) {
    if (!S.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(g),
        S.forEach(g, function (p, f) {
          (!(S.isUndefined(p) || p === null) &&
            i.call(t, p, S.isString(f) ? f.trim() : f, v, y)) === !0 &&
            w(p, v ? v.concat(f) : [f]);
        }),
        d.pop();
    }
  }
  if (!S.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function nf(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ga(e, t) {
  (this._pairs = []), e && ps(e, this, t);
}
const Ih = ga.prototype;
Ih.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ih.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, nf);
      }
    : nf;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function o1(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Mh(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || o1,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = S.isURLSearchParams(t) ? t.toString() : new ga(t, n).toString(r)),
    o)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class s1 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const rf = s1,
  $h = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  l1 = typeof URLSearchParams < "u" ? URLSearchParams : ga,
  u1 = typeof FormData < "u" ? FormData : null,
  a1 = typeof Blob < "u" ? Blob : null,
  c1 = {
    isBrowser: !0,
    classes: { URLSearchParams: l1, FormData: u1, Blob: a1 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  va = typeof window < "u" && typeof document < "u",
  f1 = ((e) => va && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  d1 = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  p1 = (va && window.location.href) || "http://localhost",
  h1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: va,
        hasStandardBrowserEnv: f1,
        hasStandardBrowserWebWorkerEnv: d1,
        origin: p1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  nt = { ...h1, ...c1 };
function m1(e, t) {
  return ps(
    e,
    new nt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return nt.isNode && S.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function y1(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function g1(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Bh(e) {
  function t(n, r, i, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s),
      u = o >= n.length;
    return (
      (s = !s && S.isArray(i) ? i.length : s),
      u
        ? (S.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !l)
        : ((!i[s] || !S.isObject(i[s])) && (i[s] = []),
          t(n, r, i[s], o) && S.isArray(i[s]) && (i[s] = g1(i[s])),
          !l)
    );
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return (
      S.forEachEntry(e, (r, i) => {
        t(y1(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function v1(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const wa = {
  transitional: $h,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = S.isObject(t);
      if ((o && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return i ? JSON.stringify(Bh(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t) ||
        S.isReadableStream(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return m1(t, this.formSerializer).toString();
        if ((l = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return ps(
            l ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), v1(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || wa.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (S.isResponse(t) || S.isReadableStream(t)) return t;
      if (t && S.isString(t) && ((r && !this.responseType) || i)) {
        const s = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? L.from(l, L.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: nt.classes.FormData, Blob: nt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  wa.headers[e] = {};
});
const Sa = wa,
  w1 = S.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  S1 = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (i = s.indexOf(":")),
              (n = s.substring(0, i).trim().toLowerCase()),
              (r = s.substring(i + 1).trim()),
              !(!n || (t[n] && w1[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  of = Symbol("internals");
function fr(e) {
  return e && String(e).trim().toLowerCase();
}
function Bi(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Bi) : String(e);
}
function E1(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const x1 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Xs(e, t, n, r, i) {
  if (S.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1;
    if (S.isRegExp(r)) return r.test(t);
  }
}
function C1(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function k1(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, s) {
        return this[r].call(this, t, i, o, s);
      },
      configurable: !0,
    });
  });
}
class hs {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(l, u, a) {
      const c = fr(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = S.findKey(i, c);
      (!d || i[d] === void 0 || a === !0 || (a === void 0 && i[d] !== !1)) &&
        (i[d || u] = Bi(l));
    }
    const s = (l, u) => S.forEach(l, (a, c) => o(a, c, u));
    if (S.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (S.isString(t) && (t = t.trim()) && !x1(t)) s(S1(t), n);
    else if (S.isHeaders(t)) for (const [l, u] of t.entries()) o(u, l, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = fr(t)), t)) {
      const r = S.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return E1(i);
        if (S.isFunction(n)) return n.call(this, i, r);
        if (S.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = fr(t)), t)) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Xs(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (((s = fr(s)), s)) {
        const l = S.findKey(r, s);
        l && (!n || Xs(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return S.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Xs(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      S.forEach(this, (i, o) => {
        const s = S.findKey(r, o);
        if (s) {
          (n[s] = Bi(i)), delete n[o];
          return;
        }
        const l = t ? C1(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = Bi(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      S.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && S.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[of] = this[of] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(s) {
      const l = fr(s);
      r[l] || (k1(i, s), (r[l] = !0));
    }
    return S.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
hs.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
S.reduceDescriptors(hs.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
S.freezeMethods(hs);
const rt = hs;
function Zs(e, t) {
  const n = this || Sa,
    r = t || n,
    i = rt.from(r.headers);
  let o = r.data;
  return (
    S.forEach(e, function (l) {
      o = l.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function Fh(e) {
  return !!(e && e.__CANCEL__);
}
function Zn(e, t, n) {
  L.call(this, e ?? "canceled", L.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
S.inherits(Zn, L, { __CANCEL__: !0 });
function zh(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new L(
          "Request failed with status code " + n.status,
          [L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function _1(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function R1(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        c = r[o];
      s || (s = a), (n[i] = u), (r[i] = a);
      let d = o,
        y = 0;
      for (; d !== i; ) (y += n[d++]), (d = d % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), a - s < t)) return;
      const w = c && a - c;
      return w ? Math.round((y * 1e3) / w) : void 0;
    }
  );
}
function T1(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let i = null;
  return function () {
    const s = this === !0,
      l = Date.now();
    if (s || l - n > r)
      return (
        i && (clearTimeout(i), (i = null)), (n = l), e.apply(null, arguments)
      );
    i ||
      (i = setTimeout(
        () => ((i = null), (n = Date.now()), e.apply(null, arguments)),
        r - (l - n)
      ));
  };
}
const So = (e, t, n = 3) => {
    let r = 0;
    const i = R1(50, 250);
    return T1((o) => {
      const s = o.loaded,
        l = o.lengthComputable ? o.total : void 0,
        u = s - r,
        a = i(u),
        c = s <= l;
      r = s;
      const d = {
        loaded: s,
        total: l,
        progress: l ? s / l : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && l && c ? (l - s) / a : void 0,
        event: o,
        lengthComputable: l != null,
      };
      (d[t ? "download" : "upload"] = !0), e(d);
    }, n);
  },
  O1 = nt.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(o) {
          let s = o;
          return (
            t && (n.setAttribute("href", s), (s = n.href)),
            n.setAttribute("href", s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = i(window.location.href)),
          function (s) {
            const l = S.isString(s) ? i(s) : s;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  N1 = nt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, o) {
          const s = [e + "=" + encodeURIComponent(t)];
          S.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            S.isString(r) && s.push("path=" + r),
            S.isString(i) && s.push("domain=" + i),
            o === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function P1(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function L1(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Vh(e, t) {
  return e && !P1(t) ? L1(e, t) : t;
}
const sf = (e) => (e instanceof rt ? { ...e } : e);
function hn(e, t) {
  t = t || {};
  const n = {};
  function r(a, c, d) {
    return S.isPlainObject(a) && S.isPlainObject(c)
      ? S.merge.call({ caseless: d }, a, c)
      : S.isPlainObject(c)
      ? S.merge({}, c)
      : S.isArray(c)
      ? c.slice()
      : c;
  }
  function i(a, c, d) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a, d);
    } else return r(a, c, d);
  }
  function o(a, c) {
    if (!S.isUndefined(c)) return r(void 0, c);
  }
  function s(a, c) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, c);
  }
  function l(a, c, d) {
    if (d in t) return r(a, c);
    if (d in e) return r(void 0, a);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (a, c) => i(sf(a), sf(c), !0),
  };
  return (
    S.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = u[c] || i,
        y = d(e[c], t[c], c);
      (S.isUndefined(y) && d !== l) || (n[c] = y);
    }),
    n
  );
}
const bh = (e) => {
    const t = hn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: o,
      headers: s,
      auth: l,
    } = t;
    (t.headers = s = rt.from(s)),
      (t.url = Mh(Vh(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : "")
            )
        );
    let u;
    if (S.isFormData(n)) {
      if (nt.hasStandardBrowserEnv || nt.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((u = s.getContentType()) !== !1) {
        const [a, ...c] = u
          ? u
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        s.setContentType([a || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      nt.hasStandardBrowserEnv &&
      (r && S.isFunction(r) && (r = r(t)), r || (r !== !1 && O1(t.url)))
    ) {
      const a = i && o && N1.read(o);
      a && s.set(i, a);
    }
    return t;
  },
  A1 = typeof XMLHttpRequest < "u",
  j1 =
    A1 &&
    function (e) {
      return new Promise(function (n, r) {
        const i = bh(e);
        let o = i.data;
        const s = rt.from(i.headers).normalize();
        let { responseType: l } = i,
          u;
        function a() {
          i.cancelToken && i.cancelToken.unsubscribe(u),
            i.signal && i.signal.removeEventListener("abort", u);
        }
        let c = new XMLHttpRequest();
        c.open(i.method.toUpperCase(), i.url, !0), (c.timeout = i.timeout);
        function d() {
          if (!c) return;
          const w = rt.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            v = {
              data:
                !l || l === "text" || l === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: w,
              config: e,
              request: c,
            };
          zh(
            function (p) {
              n(p), a();
            },
            function (p) {
              r(p), a();
            },
            v
          ),
            (c = null);
        }
        "onloadend" in c
          ? (c.onloadend = d)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 &&
                  !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                setTimeout(d);
            }),
          (c.onabort = function () {
            c &&
              (r(new L("Request aborted", L.ECONNABORTED, i, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new L("Network Error", L.ERR_NETWORK, i, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let g = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const v = i.transitional || $h;
            i.timeoutErrorMessage && (g = i.timeoutErrorMessage),
              r(
                new L(
                  g,
                  v.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED,
                  i,
                  c
                )
              ),
              (c = null);
          }),
          o === void 0 && s.setContentType(null),
          "setRequestHeader" in c &&
            S.forEach(s.toJSON(), function (g, v) {
              c.setRequestHeader(v, g);
            }),
          S.isUndefined(i.withCredentials) ||
            (c.withCredentials = !!i.withCredentials),
          l && l !== "json" && (c.responseType = i.responseType),
          typeof i.onDownloadProgress == "function" &&
            c.addEventListener("progress", So(i.onDownloadProgress, !0)),
          typeof i.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", So(i.onUploadProgress)),
          (i.cancelToken || i.signal) &&
            ((u = (w) => {
              c &&
                (r(!w || w.type ? new Zn(null, e, c) : w),
                c.abort(),
                (c = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal &&
              (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
        const y = _1(i.url);
        if (y && nt.protocols.indexOf(y) === -1) {
          r(new L("Unsupported protocol " + y + ":", L.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(o || null);
      });
    },
  U1 = (e, t) => {
    let n = new AbortController(),
      r;
    const i = function (u) {
      if (!r) {
        (r = !0), s();
        const a = u instanceof Error ? u : this.reason;
        n.abort(
          a instanceof L ? a : new Zn(a instanceof Error ? a.message : a)
        );
      }
    };
    let o =
      t &&
      setTimeout(() => {
        i(new L(`timeout ${t} of ms exceeded`, L.ETIMEDOUT));
      }, t);
    const s = () => {
      e &&
        (o && clearTimeout(o),
        (o = null),
        e.forEach((u) => {
          u &&
            (u.removeEventListener
              ? u.removeEventListener("abort", i)
              : u.unsubscribe(i));
        }),
        (e = null));
    };
    e.forEach((u) => u && u.addEventListener && u.addEventListener("abort", i));
    const { signal: l } = n;
    return (
      (l.unsubscribe = s),
      [
        l,
        () => {
          o && clearTimeout(o), (o = null);
        },
      ]
    );
  },
  D1 = U1,
  I1 = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  M1 = async function* (e, t, n) {
    for await (const r of e)
      yield* I1(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  lf = (e, t, n, r, i) => {
    const o = M1(e, t, i);
    let s = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(l) {
          const { done: u, value: a } = await o.next();
          if (u) {
            l.close(), r();
            return;
          }
          let c = a.byteLength;
          n && n((s += c)), l.enqueue(new Uint8Array(a));
        },
        cancel(l) {
          return r(l), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  uf = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  ms =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Wh = ms && typeof ReadableStream == "function",
  nu =
    ms &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  $1 =
    Wh &&
    (() => {
      let e = !1;
      const t = new Request(nt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  af = 64 * 1024,
  ru =
    Wh &&
    !!(() => {
      try {
        return S.isReadableStream(new Response("").body);
      } catch {}
    })(),
  Eo = { stream: ru && ((e) => e.body) };
ms &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Eo[t] &&
        (Eo[t] = S.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new L(
                `Response type '${t}' is not supported`,
                L.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const B1 = async (e) => {
    if (e == null) return 0;
    if (S.isBlob(e)) return e.size;
    if (S.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (S.isArrayBufferView(e)) return e.byteLength;
    if ((S.isURLSearchParams(e) && (e = e + ""), S.isString(e)))
      return (await nu(e)).byteLength;
  },
  F1 = async (e, t) => {
    const n = S.toFiniteNumber(e.getContentLength());
    return n ?? B1(t);
  },
  z1 =
    ms &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: o,
        timeout: s,
        onDownloadProgress: l,
        onUploadProgress: u,
        responseType: a,
        headers: c,
        withCredentials: d = "same-origin",
        fetchOptions: y,
      } = bh(e);
      a = a ? (a + "").toLowerCase() : "text";
      let [w, g] = i || o || s ? D1([i, o], s) : [],
        v,
        C;
      const p = () => {
        !v &&
          setTimeout(() => {
            w && w.unsubscribe();
          }),
          (v = !0);
      };
      let f;
      try {
        if (
          u &&
          $1 &&
          n !== "get" &&
          n !== "head" &&
          (f = await F1(c, r)) !== 0
        ) {
          let R = new Request(t, { method: "POST", body: r, duplex: "half" }),
            T;
          S.isFormData(r) &&
            (T = R.headers.get("content-type")) &&
            c.setContentType(T),
            R.body && (r = lf(R.body, af, uf(f, So(u)), null, nu));
        }
        S.isString(d) || (d = d ? "cors" : "omit"),
          (C = new Request(t, {
            ...y,
            signal: w,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: d,
          }));
        let m = await fetch(C);
        const E = ru && (a === "stream" || a === "response");
        if (ru && (l || E)) {
          const R = {};
          ["status", "statusText", "headers"].forEach((P) => {
            R[P] = m[P];
          });
          const T = S.toFiniteNumber(m.headers.get("content-length"));
          m = new Response(
            lf(m.body, af, l && uf(T, So(l, !0)), E && p, nu),
            R
          );
        }
        a = a || "text";
        let _ = await Eo[S.findKey(Eo, a) || "text"](m, e);
        return (
          !E && p(),
          g && g(),
          await new Promise((R, T) => {
            zh(R, T, {
              data: _,
              headers: rt.from(m.headers),
              status: m.status,
              statusText: m.statusText,
              config: e,
              request: C,
            });
          })
        );
      } catch (m) {
        throw (
          (p(),
          m && m.name === "TypeError" && /fetch/i.test(m.message)
            ? Object.assign(new L("Network Error", L.ERR_NETWORK, e, C), {
                cause: m.cause || m,
              })
            : L.from(m, m && m.code, e, C))
        );
      }
    }),
  iu = { http: n1, xhr: j1, fetch: z1 };
S.forEach(iu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const cf = (e) => `- ${e}`,
  V1 = (e) => S.isFunction(e) || e === null || e === !1,
  Hh = {
    getAdapter: (e) => {
      e = S.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let s;
        if (
          ((r = n),
          !V1(n) && ((r = iu[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new L(`Unknown adapter '${s}'`);
        if (r) break;
        i[s || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([l, u]) =>
            `adapter ${l} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let s = t
          ? o.length > 1
            ? `since :
` +
              o.map(cf).join(`
`)
            : " " + cf(o[0])
          : "as no adapter specified";
        throw new L(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: iu,
  };
function el(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Zn(null, e);
}
function ff(e) {
  return (
    el(e),
    (e.headers = rt.from(e.headers)),
    (e.data = Zs.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Hh.getAdapter(e.adapter || Sa.adapter)(e).then(
      function (r) {
        return (
          el(e),
          (r.data = Zs.call(e, e.transformResponse, r)),
          (r.headers = rt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Fh(r) ||
            (el(e),
            r &&
              r.response &&
              ((r.response.data = Zs.call(e, e.transformResponse, r.response)),
              (r.response.headers = rt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const qh = "1.7.2",
  Ea = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ea[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const df = {};
Ea.transitional = function (t, n, r) {
  function i(o, s) {
    return (
      "[Axios v" +
      qh +
      "] Transitional option '" +
      o +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (o, s, l) => {
    if (t === !1)
      throw new L(
        i(s, " has been removed" + (n ? " in " + n : "")),
        L.ERR_DEPRECATED
      );
    return (
      n &&
        !df[s] &&
        ((df[s] = !0),
        console.warn(
          i(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, s, l) : !0
    );
  };
};
function b1(e, t, n) {
  if (typeof e != "object")
    throw new L("options must be an object", L.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      s = t[o];
    if (s) {
      const l = e[o],
        u = l === void 0 || s(l, o, e);
      if (u !== !0)
        throw new L("option " + o + " must be " + u, L.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new L("Unknown option " + o, L.ERR_BAD_OPTION);
  }
}
const ou = { assertOptions: b1, validators: Ea },
  Tt = ou.validators;
let xo = class {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new rf(), response: new rf() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = hn(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      ou.assertOptions(
        r,
        {
          silentJSONParsing: Tt.transitional(Tt.boolean),
          forcedJSONParsing: Tt.transitional(Tt.boolean),
          clarifyTimeoutError: Tt.transitional(Tt.boolean),
        },
        !1
      ),
      i != null &&
        (S.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : ou.assertOptions(
              i,
              { encode: Tt.function, serialize: Tt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = o && S.merge(o.common, o[n.method]);
    o &&
      S.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete o[g];
        }
      ),
      (n.headers = rt.concat(s, o));
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((u = u && v.synchronous), l.unshift(v.fulfilled, v.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected);
    });
    let c,
      d = 0,
      y;
    if (!u) {
      const g = [ff.bind(this), void 0];
      for (
        g.unshift.apply(g, l),
          g.push.apply(g, a),
          y = g.length,
          c = Promise.resolve(n);
        d < y;

      )
        c = c.then(g[d++], g[d++]);
      return c;
    }
    y = l.length;
    let w = n;
    for (d = 0; d < y; ) {
      const g = l[d++],
        v = l[d++];
      try {
        w = g(w);
      } catch (C) {
        v.call(this, C);
        break;
      }
    }
    try {
      c = ff.call(this, w);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, y = a.length; d < y; ) c = c.then(a[d++], a[d++]);
    return c;
  }
  getUri(t) {
    t = hn(this.defaults, t);
    const n = Vh(t.baseURL, t.url);
    return Mh(n, t.params, t.paramsSerializer);
  }
};
S.forEach(["delete", "get", "head", "options"], function (t) {
  xo.prototype[t] = function (n, r) {
    return this.request(
      hn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
S.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, s, l) {
      return this.request(
        hn(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: s,
        })
      );
    };
  }
  (xo.prototype[t] = n()), (xo.prototype[t + "Form"] = n(!0));
});
const Fi = xo;
class xa {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const s = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(i);
        return (
          (s.cancel = function () {
            r.unsubscribe(o);
          }),
          s
        );
      }),
      t(function (o, s, l) {
        r.reason || ((r.reason = new Zn(o, s, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new xa(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const W1 = xa;
function H1(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function q1(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const su = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(su).forEach(([e, t]) => {
  su[t] = e;
});
const K1 = su;
function Kh(e) {
  const t = new Fi(e),
    n = _h(Fi.prototype.request, t);
  return (
    S.extend(n, Fi.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Kh(hn(e, i));
    }),
    n
  );
}
const ne = Kh(Sa);
ne.Axios = Fi;
ne.CanceledError = Zn;
ne.CancelToken = W1;
ne.isCancel = Fh;
ne.VERSION = qh;
ne.toFormData = ps;
ne.AxiosError = L;
ne.Cancel = ne.CanceledError;
ne.all = function (t) {
  return Promise.all(t);
};
ne.spread = H1;
ne.isAxiosError = q1;
ne.mergeConfig = hn;
ne.AxiosHeaders = rt;
ne.formToJSON = (e) => Bh(S.isHTMLForm(e) ? new FormData(e) : e);
ne.getAdapter = Hh.getAdapter;
ne.HttpStatusCode = K1;
ne.default = ne;
const Q1 = ne,
  J1 = "/api/",
  G1 = Q1.create({ withCredentials: !0 }),
  we = {
    get(e, t) {
      return Ei(e, "GET", t);
    },
    post(e, t) {
      return Ei(e, "POST", t);
    },
    put(e, t) {
      return Ei(e, "PUT", t);
    },
    delete(e, t) {
      return Ei(e, "DELETE", t);
    },
  };
async function Ei(e, t = "GET", n = null) {
  const o = {
    url: `${J1}${e}`,
    method: t,
    data: n,
    params: t === "GET" ? n : null,
  };
  try {
    return (await G1(o)).data;
  } catch (s) {
    throw (
      (console.log(
        `Had Issues ${t}ing to the backend, endpoint: ${e}, with data: `,
        n
      ),
      console.dir(s),
      s.response &&
        s.response.status === 401 &&
        (sessionStorage.clear(), window.location.assign("/")),
      s)
    );
  }
}
const Ca = "loggedinUser",
  Y1 = {
    login: nS,
    logout: iS,
    signup: rS,
    getUsers: X1,
    getById: Z1,
    remove: eS,
    update: tS,
    getLoggedinUser: Qh,
  };
function X1() {
  return we.get("user");
}
async function Z1(e) {
  return await we.get(`user/${e}`);
}
function eS(e) {
  return we.delete(`user/${e}`);
}
async function tS({ _id: e, score: t }) {
  const n = await we.put(`user/${e}`, { _id: e, score: t });
  return Qh()._id === n._id && ka(n), n;
}
async function nS(e) {
  const t = await we.post("auth/", e);
  if (t) return ka(t);
}
async function rS(e) {
  e.imgUrl ||
    (e.imgUrl =
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"),
    (e.score = 1e4);
  const t = await we.post("auth/signup", e);
  return ka(t);
}
async function iS() {
  return sessionStorage.removeItem(Ca), await we.post("auth/logout");
}
function Qh() {
  return JSON.parse(sessionStorage.getItem(Ca));
}
function ka(e) {
  return (
    (e = {
      _id: e._id,
      fullname: e.fullname,
      imgUrl: e.imgUrl,
      score: e.score,
      isAdmin: e.isAdmin,
    }),
    sessionStorage.setItem(Ca, JSON.stringify(e)),
    e
  );
}
const { DEV: oS, VITE_LOCAL: sS } = {
  VITE_TEST_VAR: "123",
  BASE_URL: "/",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1,
};
function lS() {
  return { username: "", password: "", fullname: "", isAdmin: !1, score: 100 };
}
const uS = sS === "true" ? cw : Y1,
  oe = { ...uS, getEmptyUser: lS };
oS && (window.userService = oe);
const aS = "INCREMENT",
  cS = "DECREMENT",
  fS = "CHANGE_COUNT",
  ys = "SET_USER",
  Jh = "SET_WATCHED_USER",
  Gh = "REMOVE_USER",
  Yh = "SET_USERS",
  Xh = "SET_SCORE",
  dS = { count: 10, user: oe.getLoggedinUser(), users: [], watchedUser: null };
function pS(e = dS, t) {
  var n = e;
  switch (t.type) {
    case aS:
      n = { ...e, count: e.count + 1 };
      break;
    case cS:
      n = { ...e, count: e.count - 1 };
      break;
    case fS:
      n = { ...e, count: e.count + t.diff };
      break;
    case ys:
      n = { ...e, user: t.user };
      break;
    case Jh:
      n = { ...e, watchedUser: t.user };
      break;
    case Gh:
      n = { ...e, users: e.users.filter((r) => r._id !== t.userId) };
      break;
    case Yh:
      n = { ...e, users: t.users };
      break;
    case Xh:
      n = { ...e, user: { ...e.user, score: t.score } };
      break;
  }
  return n;
}
const Zh = "SET_REVIEWS",
  em = "ADD_REVIEW",
  tm = "REMOVE_REVIEW",
  hS = "UPDATE_REVIEW",
  mS = { reviews: [] };
function yS(e = mS, t = {}) {
  switch (t.type) {
    case Zh:
      return { ...e, reviews: t.reviews };
    case em:
      return { ...e, reviews: [...e.reviews, t.review] };
    case tm:
      return { ...e, reviews: e.reviews.filter((n) => n._id !== t.reviewId) };
    case hS:
      return {
        ...e,
        reviews: e.reviews.map((n) => (n._id === t.review._id ? t.review : n)),
      };
    default:
      return e;
  }
}
const nm = "LOADING_START",
  rm = "LOADING_DONE",
  gS = { isLoading: !1 };
function vS(e = gS, t = {}) {
  switch (t.type) {
    case nm:
      return { ...e, isLoading: !0 };
    case rm:
      return { ...e, isLoading: !1 };
    default:
      return e;
  }
}
const wS = nw({
    carModule: iw,
    userModule: pS,
    systemModule: vS,
    reviewModule: yS,
  }),
  SS = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : void 0,
  te = gh(wS, SS);
function ES() {
  return h.jsxs("section", {
    children: [
      h.jsx("h1", { children: "Home sweet Home" }),
      h.jsx("p", {
        children:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ea omnis blanditiis deleniti impedit illo ullam, magnam aut minus veritatis corporis quos iure fugiat repellat assumenda fugit mollitia illum! Delectus velit fugit dolores maiores quam laudantium minima similique sapiente minus deserunt vel cum tenetur molestias commodi eos distinctio, consequatur ducimus dolorum odio itaque natus soluta fuga! Deserunt in hic harum magnam quos. Expedita, quis corrupti quia esse excepturi alias aperiam repudiandae soluta animi modi temporibus veniam vero eveniet nemo ipsa?",
      }),
      h.jsx(Kt, { to: "/car", children: "Check Our Cars!" }),
    ],
  });
}
var im = { exports: {} },
  xS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  CS = xS,
  kS = CS;
function om() {}
function sm() {}
sm.resetWarningCache = om;
var _S = function () {
  function e(r, i, o, s, l, u) {
    if (u !== kS) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((a.name = "Invariant Violation"), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: sm,
    resetWarningCache: om,
  };
  return (n.PropTypes = n), n;
};
im.exports = _S();
var RS = im.exports;
const TS = Nf(RS);
function OS() {
  const [e, t] = x.useState(100);
  function n() {
    console.log("Telling you more");
  }
  return h.jsxs("section", {
    children: [
      h.jsx("h2", { children: "About Us" }),
      h.jsxs("nav", {
        children: [
          h.jsx(Ye, { to: "team", children: "Team" }),
          " |",
          h.jsx(Ye, { to: "vision", children: "Vision" }),
        ],
      }),
      h.jsx("section", { children: h.jsx(th, {}) }),
      h.jsx(jS, { left: h.jsx(LS, {}), right: h.jsx(AS, {}) }),
      h.jsxs(lm, {
        onClose: () => console.log("ok, closing"),
        children: [
          h.jsxs("h3", { children: [e.toLocaleString(), " Followers"] }),
          h.jsx("button", { onClick: n, children: "Tell me More" }),
        ],
      }),
      h.jsx("p", {
        children:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam quo veniam velit dolor reprehenderit, laudantium consequatur neque numquam labore quae. Accusamus libero perferendis ducimus? Alias unde hic quisquam doloremque.",
      }),
    ],
  });
}
function NS() {
  return h.jsxs("section", {
    children: [
      h.jsx("h2", { children: "Best Team" }),
      h.jsxs("ul", {
        children: [
          h.jsx("li", { children: "Popo Decaprio " }),
          h.jsx("li", { children: "Jini Baba" }),
        ],
      }),
    ],
  });
}
function PS() {
  return h.jsxs("section", {
    children: [
      h.jsx("h2", { children: "Vision" }),
      h.jsxs("ul", {
        children: [
          h.jsx("li", { children: "Save the day" }),
          h.jsx("li", { children: "Spread some love" }),
          h.jsx("li", { children: "Take over the world" }),
        ],
      }),
    ],
  });
}
function lm(e) {
  return h.jsxs("div", {
    className: "fancy-box",
    children: [
      h.jsx("button", {
        style: { float: "right" },
        onClick: e.onClose,
        children: "x",
      }),
      e.children,
    ],
  });
}
lm.propTypes = { onClose: TS.func.isRequired };
function LS() {
  return h.jsxs("section", {
    style: { height: "50vh", backgroundColor: "pink" },
    children: [
      h.jsx("h2", { children: "Contacts" }),
      h.jsx("p", { children: "Click me" }),
    ],
  });
}
function AS() {
  const [e, t] = x.useState(["Puki Proj", "Muki Proj"]),
    n = e.map((r, i) =>
      h.jsx(
        "article",
        {
          className: "proj-preview",
          onClick: (o) => {
            o.stopPropagation(), t(e.filter((s) => s !== r));
          },
          children: r,
        },
        r
      )
    );
  return h.jsxs("section", {
    style: { minHeight: "50vh", backgroundColor: "lightblue" },
    children: [
      h.jsx("h2", { children: "Projects" }),
      n,
      h.jsx("button", {
        onClick: (r) => {
          r.stopPropagation(), t([...e, "Babu Proj" + (Date.now() % 100)]);
        },
        children: "Add",
      }),
    ],
  });
}
function jS(e) {
  const [t, n] = x.useState(30);
  return h.jsxs("div", {
    className: "split-pane",
    style: { display: "flex" },
    children: [
      h.jsx("div", {
        style: { width: t + "%" },
        onClick: () => {
          t + 10 <= 100 && n(t + 10);
        },
        children: e.left,
      }),
      h.jsx("div", {
        style: { flex: 1 },
        onClick: () => {
          t > 10 && n(t - 10);
        },
        children: e.right,
      }),
    ],
  });
}
function um(e = 6) {
  for (
    var t = "",
      n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      r = 0;
    r < e;
    r++
  )
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
function pf(e, t) {
  return (
    (e = Math.ceil(e)),
    (t = Math.floor(t)),
    Math.floor(Math.random() * (t - e + 1)) + e
  );
}
const Kn = "car",
  am = { query: US, getById: cm, save: IS, remove: DS, addCarMsg: MS };
window.cs = am;
async function US(e = { txt: "", price: 0 }) {
  var t = await ve.query(Kn);
  console.log("cars:", t);
  const { txt: n, minSpeed: r, maxPrice: i, sortField: o, sortDir: s } = e;
  if (n) {
    const l = new RegExp(e.txt, "i");
    t = t.filter((u) => l.test(u.vendor) || l.test(u.description));
  }
  return (
    r && (t = t.filter((l) => l.speed <= r)),
    i && (t = t.filter((l) => l.price <= i)),
    (o === "vendor" || o === "owner") &&
      t.sort((l, u) => l[o].localeCompare(u[o]) * +s),
    (o === "price" || o === "speed") && t.sort((l, u) => (l[o] - u[o]) * +s),
    (t = t.map(({ _id: l, vendor: u, price: a, speed: c, owner: d }) => ({
      _id: l,
      vendor: u,
      price: a,
      speed: c,
      owner: d,
    }))),
    t
  );
}
function cm(e) {
  return ve.get(Kn, e);
}
async function DS(e) {
  await ve.remove(Kn, e);
}
async function IS(e) {
  var t;
  if (e._id) {
    const n = { _id: e._id, price: e.price, speed: e.speed };
    t = await ve.put(Kn, n);
  } else {
    const n = {
      vendor: e.vendor,
      price: e.price,
      speed: e.speed,
      owner: oe.getLoggedinUser(),
      msgs: [],
    };
    t = await ve.post(Kn, n);
  }
  return t;
}
async function MS(e, t) {
  const n = await cm(e),
    r = { id: um(), by: oe.getLoggedinUser(), txt: t };
  return n.msgs.push(r), await ve.put(Kn, n), r;
}
const $S = { query: BS, getById: FS, save: VS, remove: zS, addCarMsg: bS };
async function BS(e = { txt: "", price: 0 }) {
  return we.get("car", e);
}
function FS(e) {
  return we.get(`car/${e}`);
}
async function zS(e) {
  return we.delete(`car/${e}`);
}
async function VS(e) {
  var t;
  return (
    e._id
      ? (t = await we.put(`car/${e._id}`, e))
      : (t = await we.post("car", e)),
    t
  );
}
async function bS(e, t) {
  return await we.post(`car/${e}/msg`, { txt: t });
}
const { DEV: WS, VITE_LOCAL: HS } = {
  VITE_TEST_VAR: "123",
  BASE_URL: "/",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1,
};
function qS() {
  return { vendor: um(), price: pf(1e3, 9e3), speed: pf(80, 240), msgs: [] };
}
function KS() {
  return { txt: "", maxPrice: "", minSpeed: "", sortField: "", sortDir: "" };
}
const QS = HS === "true" ? am : $S,
  Ct = { getEmptyCar: qS, getDefaultFilter: KS, ...QS };
WS && (window.carService = Ct);
async function JS(e) {
  try {
    const t = await Ct.query(e);
    te.dispatch(tE(t));
  } catch (t) {
    throw (console.log("Cannot load cars", t), t);
  }
}
async function GS(e) {
  try {
    const t = await Ct.getById(e);
    te.dispatch(nE(t));
  } catch (t) {
    throw (console.log("Cannot load car", t), t);
  }
}
async function YS(e) {
  try {
    await Ct.remove(e), te.dispatch(rE(e));
  } catch (t) {
    throw (console.log("Cannot remove car", t), t);
  }
}
async function XS(e) {
  try {
    const t = await Ct.save(e);
    return te.dispatch(iE(t)), t;
  } catch (t) {
    throw (console.log("Cannot add car", t), t);
  }
}
async function ZS(e) {
  try {
    const t = await Ct.save(e);
    return te.dispatch(oE(t)), t;
  } catch (t) {
    throw (console.log("Cannot save car", t), t);
  }
}
async function eE(e, t) {
  try {
    const n = await Ct.addCarMsg(e, t);
    return te.dispatch(sE(n)), n;
  } catch (n) {
    throw (console.log("Cannot add car msg", n), n);
  }
}
function tE(e) {
  return { type: vh, cars: e };
}
function nE(e) {
  return { type: wh, car: e };
}
function rE(e) {
  return { type: Sh, carId: e };
}
function iE(e) {
  return { type: Eh, car: e };
}
function oE(e) {
  return { type: xh, car: e };
}
function sE(e) {
  return { type: Ch, msg: e };
}
const lE = "show-msg";
function uE() {
  const e = {};
  return {
    on(t, n) {
      return (
        (e[t] = e[t] ? [...e[t], n] : [n]),
        () => {
          e[t] = e[t].filter((r) => r !== n);
        }
      );
    },
    emit(t, n) {
      e[t] && e[t].forEach((r) => r(n));
    },
  };
}
const fm = uE();
function _a(e) {
  fm.emit(lE, e);
}
function vt(e) {
  _a({ txt: e, type: "success" });
}
function Wt(e) {
  _a({ txt: e, type: "error" });
}
window.showUserMsg = _a;
function aE({ car: e }) {
  return h.jsxs("article", {
    className: "preview",
    children: [
      h.jsx("header", {
        children: h.jsx(Kt, { to: `/car/${e._id}`, children: e.vendor }),
      }),
      h.jsxs("p", {
        children: [
          "Speed: ",
          h.jsxs("span", { children: [e.speed.toLocaleString(), " Km/h"] }),
        ],
      }),
      e.owner &&
        h.jsxs("p", {
          children: [
            "Owner: ",
            h.jsx(Kt, {
              to: `/user/${e.owner._id}`,
              children: e.owner.fullname,
            }),
          ],
        }),
    ],
  });
}
function cE({ cars: e, onRemoveCar: t, onUpdateCar: n }) {
  function r(i) {
    var s;
    const o = oe.getLoggedinUser();
    return o
      ? o.isAdmin
        ? !0
        : ((s = i.owner) == null ? void 0 : s._id) === o._id
      : !1;
  }
  return h.jsx("section", {
    children: h.jsx("ul", {
      className: "list",
      children: e.map((i) =>
        h.jsxs(
          "li",
          {
            children: [
              h.jsx(aE, { car: i }),
              r(i) &&
                h.jsxs("div", {
                  className: "actions",
                  children: [
                    h.jsx("button", { onClick: () => n(i), children: "Edit" }),
                    h.jsx("button", { onClick: () => t(i._id), children: "x" }),
                  ],
                }),
            ],
          },
          i._id
        )
      ),
    }),
  });
}
function fE({ filterBy: e, onSetFilterBy: t }) {
  const [n, r] = x.useState(structuredClone(e));
  x.useEffect(() => {
    t(n);
  }, [n]);
  function i(l) {
    const u = l.target.type,
      a = l.target.name;
    let c;
    switch (u) {
      case "text":
      case "radio":
        (c = a === "sortDir" ? +l.target.value : l.target.value),
          n.sortDir || (n.sortDir = 1);
        break;
      case "number":
      case "range":
        c = +l.target.value;
        break;
    }
    r({ ...n, [a]: c });
  }
  function o() {
    r({ ...n, txt: "", minSpeed: "", maxPrice: "" });
  }
  function s() {
    r({ ...n, sortField: "", sortDir: "" });
  }
  return h.jsxs("section", {
    className: "car-filter",
    children: [
      h.jsx("h3", { children: "Filter:" }),
      h.jsx("input", {
        type: "text",
        name: "txt",
        value: n.txt,
        placeholder: "Free text",
        onChange: i,
        required: !0,
      }),
      h.jsx("input", {
        type: "number",
        min: "0",
        name: "minSpeed",
        value: n.minSpeed,
        placeholder: "min. speed",
        onChange: i,
        required: !0,
      }),
      h.jsx("button", {
        className: "btn-clear",
        onClick: o,
        children: "Clear",
      }),
      h.jsx("h3", { children: "Sort:" }),
      h.jsxs("div", {
        className: "sort-field",
        children: [
          h.jsxs("label", {
            children: [
              h.jsx("span", { children: "Speed" }),
              h.jsx("input", {
                type: "radio",
                name: "sortField",
                value: "speed",
                checked: n.sortField === "speed",
                onChange: i,
              }),
            ],
          }),
          h.jsxs("label", {
            children: [
              h.jsx("span", { children: "Vendor" }),
              h.jsx("input", {
                type: "radio",
                name: "sortField",
                value: "vendor",
                checked: n.sortField === "vendor",
                onChange: i,
              }),
            ],
          }),
          h.jsxs("label", {
            children: [
              h.jsx("span", { children: "Owner" }),
              h.jsx("input", {
                type: "radio",
                name: "sortField",
                value: "owner",
                checked: n.sortField === "owner",
                onChange: i,
              }),
            ],
          }),
        ],
      }),
      h.jsxs("div", {
        className: "sort-dir",
        children: [
          h.jsxs("label", {
            children: [
              h.jsx("span", { children: "Asce" }),
              h.jsx("input", {
                type: "radio",
                name: "sortDir",
                value: "1",
                checked: n.sortDir === 1,
                onChange: i,
              }),
            ],
          }),
          h.jsxs("label", {
            children: [
              h.jsx("span", { children: "Desc" }),
              h.jsx("input", {
                type: "radio",
                name: "sortDir",
                value: "-1",
                onChange: i,
                checked: n.sortDir === -1,
              }),
            ],
          }),
        ],
      }),
      h.jsx("button", {
        className: "btn-clear",
        onClick: s,
        children: "Clear",
      }),
    ],
  });
}
function dE() {
  const [e, t] = x.useState(Ct.getDefaultFilter()),
    n = ot((l) => l.carModule.cars);
  x.useEffect(() => {
    JS(e);
  }, [e]);
  function r(l) {
    t((u) => ({ ...u, ...l }));
  }
  async function i(l) {
    try {
      await YS(l), vt("Car removed");
    } catch {
      Wt("Cannot remove car");
    }
  }
  async function o() {
    const l = Ct.getEmptyCar();
    l.vendor = prompt("Vendor?");
    try {
      const u = await XS(l);
      vt(`Car added (id: ${u._id})`);
    } catch {
      Wt("Cannot add car");
    }
  }
  async function s(l) {
    const u = +prompt("New speed?", l.speed);
    if (!u) return;
    const a = { ...l, speed: u };
    try {
      const c = await ZS(a);
      vt(`Car updated, new speed: ${c.speed}`);
    } catch {
      Wt("Cannot update car");
    }
  }
  return h.jsxs("main", {
    className: "car-index",
    children: [
      h.jsxs("header", {
        children: [
          h.jsx("h2", { children: "Cars" }),
          oe.getLoggedinUser() &&
            h.jsx("button", { onClick: o, children: "Add a Car" }),
        ],
      }),
      h.jsx(fE, { filterBy: e, onSetFilterBy: r }),
      h.jsx(cE, { cars: n, onRemoveCar: i, onUpdateCar: s }),
    ],
  });
}
const pE = { add: yE, query: hE, remove: mE };
function hE(e) {
  return ve.query("review");
}
async function mE(e) {
  await ve.remove("review", e);
}
async function yE({ txt: e, aboutUserId: t }) {
  const n = await oe.getById(t),
    r = {
      txt: e,
      byUser: oe.getLoggedinUser(),
      aboutUser: { _id: n._id, fullname: n.fullname, imgUrl: n.imgUrl },
    };
  return (
    (r.byUser.score += 10),
    await oe.update(r.byUser),
    await ve.post("review", r)
  );
}
const gE = { add: SE, query: vE, remove: wE };
function vE(e) {
  var t = e ? `?name=${e.name}&sort=anaAref` : "";
  return we.get(`review${t}`);
}
async function wE(e) {
  await we.delete(`review/${e}`);
}
async function SE({ txt: e, aboutUserId: t }) {
  return await we.post("review", { txt: e, aboutUserId: t });
}
const { DEV: EE, VITE_LOCAL: xE } = {
    VITE_TEST_VAR: "123",
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
  },
  gs = xE === "true" ? pE : gE;
EE && (window.reviewService = gs);
async function CE() {
  try {
    const e = await gs.query();
    te.dispatch({ type: Zh, reviews: e });
  } catch (e) {
    throw (console.log("ReviewActions: err in loadReviews", e), e);
  }
}
async function kE(e) {
  try {
    const t = await gs.add(e);
    te.dispatch(pm(t));
    const { score: n } = t.byUser;
    te.dispatch({ type: Xh, score: n });
  } catch (t) {
    throw (console.log("ReviewActions: err in addReview", t), t);
  }
}
async function _E(e) {
  try {
    await gs.remove(e), te.dispatch(dm(e));
  } catch (t) {
    throw (console.log("ReviewActions: err in removeReview", t), t);
  }
}
function dm(e) {
  return { type: tm, reviewId: e };
}
function pm(e) {
  return { type: em, review: e };
}
const dt = Object.create(null);
dt.open = "0";
dt.close = "1";
dt.ping = "2";
dt.pong = "3";
dt.message = "4";
dt.upgrade = "5";
dt.noop = "6";
const zi = Object.create(null);
Object.keys(dt).forEach((e) => {
  zi[dt[e]] = e;
});
const lu = { type: "error", data: "parser error" },
  hm =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  mm = typeof ArrayBuffer == "function",
  ym = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Ra = ({ type: e, data: t }, n, r) =>
    hm && t instanceof Blob
      ? n
        ? r(t)
        : hf(t, r)
      : mm && (t instanceof ArrayBuffer || ym(t))
      ? n
        ? r(t)
        : hf(new Blob([t]), r)
      : r(dt[e] + (t || "")),
  hf = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        t("b" + (r || ""));
      }),
      n.readAsDataURL(e)
    );
  };
function mf(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let tl;
function RE(e, t) {
  if (hm && e.data instanceof Blob)
    return e.data.arrayBuffer().then(mf).then(t);
  if (mm && (e.data instanceof ArrayBuffer || ym(e.data))) return t(mf(e.data));
  Ra(e, !1, (n) => {
    tl || (tl = new TextEncoder()), t(tl.encode(n));
  });
}
const yf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  gr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < yf.length; e++) gr[yf.charCodeAt(e)] = e;
const TE = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      o,
      s,
      l,
      u;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const a = new ArrayBuffer(t),
      c = new Uint8Array(a);
    for (r = 0; r < n; r += 4)
      (o = gr[e.charCodeAt(r)]),
        (s = gr[e.charCodeAt(r + 1)]),
        (l = gr[e.charCodeAt(r + 2)]),
        (u = gr[e.charCodeAt(r + 3)]),
        (c[i++] = (o << 2) | (s >> 4)),
        (c[i++] = ((s & 15) << 4) | (l >> 2)),
        (c[i++] = ((l & 3) << 6) | (u & 63));
    return a;
  },
  OE = typeof ArrayBuffer == "function",
  Ta = (e, t) => {
    if (typeof e != "string") return { type: "message", data: gm(e, t) };
    const n = e.charAt(0);
    return n === "b"
      ? { type: "message", data: NE(e.substring(1), t) }
      : zi[n]
      ? e.length > 1
        ? { type: zi[n], data: e.substring(1) }
        : { type: zi[n] }
      : lu;
  },
  NE = (e, t) => {
    if (OE) {
      const n = TE(e);
      return gm(n, t);
    } else return { base64: !0, data: e };
  },
  gm = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  vm = String.fromCharCode(30),
  PE = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let i = 0;
    e.forEach((o, s) => {
      Ra(o, !1, (l) => {
        (r[s] = l), ++i === n && t(r.join(vm));
      });
    });
  },
  LE = (e, t) => {
    const n = e.split(vm),
      r = [];
    for (let i = 0; i < n.length; i++) {
      const o = Ta(n[i], t);
      if ((r.push(o), o.type === "error")) break;
    }
    return r;
  };
function AE() {
  return new TransformStream({
    transform(e, t) {
      RE(e, (n) => {
        const r = n.length;
        let i;
        if (r < 126)
          (i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, r);
        else if (r < 65536) {
          i = new Uint8Array(3);
          const o = new DataView(i.buffer);
          o.setUint8(0, 126), o.setUint16(1, r);
        } else {
          i = new Uint8Array(9);
          const o = new DataView(i.buffer);
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (i[0] |= 128),
          t.enqueue(i),
          t.enqueue(n);
      });
    },
  });
}
let nl;
function xi(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Ci(e, t) {
  if (e[0].length === t) return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let i = 0; i < t; i++)
    (n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function jE(e, t) {
  nl || (nl = new TextDecoder());
  const n = [];
  let r = 0,
    i = -1,
    o = !1;
  return new TransformStream({
    transform(s, l) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (xi(n) < 1) break;
          const u = Ci(n, 1);
          (o = (u[0] & 128) === 128),
            (i = u[0] & 127),
            i < 126 ? (r = 3) : i === 126 ? (r = 1) : (r = 2);
        } else if (r === 1) {
          if (xi(n) < 2) break;
          const u = Ci(n, 2);
          (i = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0)),
            (r = 3);
        } else if (r === 2) {
          if (xi(n) < 8) break;
          const u = Ci(n, 8),
            a = new DataView(u.buffer, u.byteOffset, u.length),
            c = a.getUint32(0);
          if (c > Math.pow(2, 53 - 32) - 1) {
            l.enqueue(lu);
            break;
          }
          (i = c * Math.pow(2, 32) + a.getUint32(4)), (r = 3);
        } else {
          if (xi(n) < i) break;
          const u = Ci(n, i);
          l.enqueue(Ta(o ? u : nl.decode(u), t)), (r = 0);
        }
        if (i === 0 || i > e) {
          l.enqueue(lu);
          break;
        }
      }
    },
  });
}
const wm = 4;
function ee(e) {
  if (e) return UE(e);
}
function UE(e) {
  for (var t in ee.prototype) e[t] = ee.prototype[t];
  return e;
}
ee.prototype.on = ee.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
ee.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return (n.fn = t), this.on(e, n), this;
};
ee.prototype.off =
  ee.prototype.removeListener =
  ee.prototype.removeAllListeners =
  ee.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var r, i = 0; i < n.length; i++)
        if (((r = n[i]), r === t || r.fn === t)) {
          n.splice(i, 1);
          break;
        }
      return n.length === 0 && delete this._callbacks["$" + e], this;
    };
ee.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      n = this._callbacks["$" + e],
      r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
  }
  return this;
};
ee.prototype.emitReserved = ee.prototype.emit;
ee.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
ee.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const ze = (() =>
  typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : Function("return this")())();
function Sm(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const DE = ze.setTimeout,
  IE = ze.clearTimeout;
function vs(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = DE.bind(ze)), (e.clearTimeoutFn = IE.bind(ze)))
    : ((e.setTimeoutFn = ze.setTimeout.bind(ze)),
      (e.clearTimeoutFn = ze.clearTimeout.bind(ze)));
}
const ME = 1.33;
function $E(e) {
  return typeof e == "string"
    ? BE(e)
    : Math.ceil((e.byteLength || e.size) * ME);
}
function BE(e) {
  let t = 0,
    n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    (t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
        ? (n += 2)
        : t < 55296 || t >= 57344
        ? (n += 3)
        : (r++, (n += 4));
  return n;
}
function FE(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
  return t;
}
function zE(e) {
  let t = {},
    n = e.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let o = n[r].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
class VE extends Error {
  constructor(t, n, r) {
    super(t),
      (this.description = n),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class Oa extends ee {
  constructor(t) {
    super(),
      (this.writable = !1),
      vs(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket);
  }
  onError(t, n, r) {
    return super.emitReserved("error", new VE(t, n, r)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const n = Ta(t, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
  pause(t) {}
  createUri(t, n = {}) {
    return (
      t +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(n)
    );
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(t) {
    const n = FE(t);
    return n.length ? "?" + n : "";
  }
}
const Em =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
      ""
    ),
  uu = 64,
  bE = {};
let gf = 0,
  ki = 0,
  vf;
function wf(e) {
  let t = "";
  do (t = Em[e % uu] + t), (e = Math.floor(e / uu));
  while (e > 0);
  return t;
}
function xm() {
  const e = wf(+new Date());
  return e !== vf ? ((gf = 0), (vf = e)) : e + "." + wf(gf++);
}
for (; ki < uu; ki++) bE[Em[ki]] = ki;
let Cm = !1;
try {
  Cm = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const WE = Cm;
function km(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || WE)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new ze[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
function HE() {}
const qE = (function () {
  return new km({ xdomain: !1 }).responseType != null;
})();
class KE extends Oa {
  constructor(t) {
    if ((super(t), (this.polling = !1), typeof location < "u")) {
      const r = location.protocol === "https:";
      let i = location.port;
      i || (i = r ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && t.hostname !== location.hostname) ||
          i !== t.port);
    }
    const n = t && t.forceBase64;
    (this.supportsBinary = qE && !n),
      this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      (this.readyState = "paused"), t();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || n();
          }));
    } else n();
  }
  poll() {
    (this.polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const n = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(r);
    };
    LE(t, this.socket.binaryType).forEach(n),
      this.readyState !== "closed" &&
        ((this.polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this.poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      PE(t, (n) => {
        this.doWrite(n, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const t = this.opts.secure ? "https" : "http",
      n = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (n[this.opts.timestampParam] = xm()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts),
      new Mn(this.uri(), t)
    );
  }
  doWrite(t, n) {
    const r = this.request({ method: "POST", data: t });
    r.on("success", n),
      r.on("error", (i, o) => {
        this.onError("xhr post error", i, o);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (n, r) => {
        this.onError("xhr poll error", n, r);
      }),
      (this.pollXhr = t);
  }
}
let Mn = class Vi extends ee {
  constructor(t, n) {
    super(),
      vs(this, n),
      (this.opts = n),
      (this.method = n.method || "GET"),
      (this.uri = t),
      (this.data = n.data !== void 0 ? n.data : null),
      this.create();
  }
  create() {
    var t;
    const n = Sm(
      this.opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    n.xdomain = !!this.opts.xd;
    const r = (this.xhr = new km(n));
    try {
      r.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let i in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(i) &&
              r.setRequestHeader(i, this.opts.extraHeaders[i]);
        }
      } catch {}
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      (t = this.opts.cookieJar) === null || t === void 0 || t.addCookies(r),
        "withCredentials" in r &&
          (r.withCredentials = this.opts.withCredentials),
        this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout),
        (r.onreadystatechange = () => {
          var i;
          r.readyState === 3 &&
            ((i = this.opts.cookieJar) === null ||
              i === void 0 ||
              i.parseCookies(r)),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this.onLoad()
                : this.setTimeoutFn(() => {
                    this.onError(typeof r.status == "number" ? r.status : 0);
                  }, 0));
        }),
        r.send(this.data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this.onError(i);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this.index = Vi.requestsCount++), (Vi.requests[this.index] = this));
  }
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (((this.xhr.onreadystatechange = HE), t))
        try {
          this.xhr.abort();
        } catch {}
      typeof document < "u" && delete Vi.requests[this.index],
        (this.xhr = null);
    }
  }
  onLoad() {
    const t = this.xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this.cleanup());
  }
  abort() {
    this.cleanup();
  }
};
Mn.requestsCount = 0;
Mn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", Sf);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in ze ? "pagehide" : "unload";
    addEventListener(e, Sf, !1);
  }
}
function Sf() {
  for (let e in Mn.requests)
    Mn.requests.hasOwnProperty(e) && Mn.requests[e].abort();
}
const Na = (() =>
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0))(),
  _i = ze.WebSocket || ze.MozWebSocket,
  Ef = !0,
  QE = "arraybuffer",
  xf =
    typeof navigator < "u" &&
    typeof navigator.product == "string" &&
    navigator.product.toLowerCase() === "reactnative";
class JE extends Oa {
  constructor(t) {
    super(t), (this.supportsBinary = !t.forceBase64);
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) return;
    const t = this.uri(),
      n = this.opts.protocols,
      r = xf
        ? {}
        : Sm(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = Ef && !xf ? (n ? new _i(t, n) : new _i(t)) : new _i(t, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      Ra(r, this.supportsBinary, (o) => {
        const s = {};
        try {
          Ef && this.ws.send(o);
        } catch {}
        i &&
          Na(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
  }
  uri() {
    const t = this.opts.secure ? "wss" : "ws",
      n = this.query || {};
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = xm()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  check() {
    return !!_i;
  }
}
class GE extends Oa {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" &&
      ((this.transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      )),
      this.transport.closed
        .then(() => {
          this.onClose();
        })
        .catch((t) => {
          this.onError("webtransport error", t);
        }),
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((t) => {
          const n = jE(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            i = AE();
          i.readable.pipeTo(t.writable), (this.writer = i.writable.getWriter());
          const o = () => {
            r.read()
              .then(({ done: l, value: u }) => {
                l || (this.onPacket(u), o());
              })
              .catch((l) => {});
          };
          o();
          const s = { type: "open" };
          this.query.sid && (s.data = `{"sid":"${this.query.sid}"}`),
            this.writer.write(s).then(() => this.onOpen());
        });
      }));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      this.writer.write(r).then(() => {
        i &&
          Na(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this.transport) === null || t === void 0 || t.close();
  }
}
const YE = { websocket: JE, webtransport: GE, polling: KE },
  XE =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  ZE = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function au(e) {
  if (e.length > 2e3) throw "URI too long";
  const t = e,
    n = e.indexOf("["),
    r = e.indexOf("]");
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, ";") +
      e.substring(r, e.length));
  let i = XE.exec(e || ""),
    o = {},
    s = 14;
  for (; s--; ) o[ZE[s]] = i[s] || "";
  return (
    n != -1 &&
      r != -1 &&
      ((o.source = t),
      (o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":")),
      (o.authority = o.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (o.ipv6uri = !0)),
    (o.pathNames = ex(o, o.path)),
    (o.queryKey = tx(o, o.query)),
    o
  );
}
function ex(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function tx(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, o) {
      i && (n[i] = o);
    }),
    n
  );
}
let _m = class vn extends ee {
  constructor(t, n = {}) {
    super(),
      (this.binaryType = QE),
      (this.writeBuffer = []),
      t && typeof t == "object" && ((n = t), (t = null)),
      t
        ? ((t = au(t)),
          (n.hostname = t.host),
          (n.secure = t.protocol === "https" || t.protocol === "wss"),
          (n.port = t.port),
          t.query && (n.query = t.query))
        : n.host && (n.hostname = au(n.host).host),
      vs(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < "u" && location.protocol === "https:"),
      n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
      (this.hostname =
        n.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        n.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = n.transports || [
        "polling",
        "websocket",
        "webtransport",
      ]),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        n
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = zE(this.opts.query)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingTimeoutTimer = null),
      typeof addEventListener == "function" &&
        (this.opts.closeOnBeforeunload &&
          ((this.beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener("beforeunload", this.beforeunloadEventListener, !1)),
        this.hostname !== "localhost" &&
          ((this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost",
            });
          }),
          addEventListener("offline", this.offlineEventListener, !1))),
      this.open();
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    (n.EIO = wm), (n.transport = t), this.id && (n.sid = this.id);
    const r = Object.assign(
      {},
      this.opts,
      {
        query: n,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t]
    );
    return new YE[t](r);
  }
  open() {
    let t;
    if (
      this.opts.rememberUpgrade &&
      vn.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
    )
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this.onDrain.bind(this))
        .on("packet", this.onPacket.bind(this))
        .on("error", this.onError.bind(this))
        .on("close", (n) => this.onClose("transport close", n));
  }
  probe(t) {
    let n = this.createTransport(t),
      r = !1;
    vn.priorWebsocketSuccess = !1;
    const i = () => {
      r ||
        (n.send([{ type: "ping", data: "probe" }]),
        n.once("packet", (d) => {
          if (!r)
            if (d.type === "pong" && d.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", n), !n)
              )
                return;
              (vn.priorWebsocketSuccess = n.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (c(),
                      this.setTransport(n),
                      n.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const y = new Error("probe error");
              (y.transport = n.name), this.emitReserved("upgradeError", y);
            }
        }));
    };
    function o() {
      r || ((r = !0), c(), n.close(), (n = null));
    }
    const s = (d) => {
      const y = new Error("probe error: " + d);
      (y.transport = n.name), o(), this.emitReserved("upgradeError", y);
    };
    function l() {
      s("transport closed");
    }
    function u() {
      s("socket closed");
    }
    function a(d) {
      n && d.name !== n.name && o();
    }
    const c = () => {
      n.removeListener("open", i),
        n.removeListener("error", s),
        n.removeListener("close", l),
        this.off("close", u),
        this.off("upgrading", a);
    };
    n.once("open", i),
      n.once("error", s),
      n.once("close", l),
      this.once("close", u),
      this.once("upgrading", a),
      this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            r || n.open();
          }, 200)
        : n.open();
  }
  onOpen() {
    if (
      ((this.readyState = "open"),
      (vn.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush(),
      this.readyState === "open" && this.opts.upgrade)
    ) {
      let t = 0;
      const n = this.upgrades.length;
      for (; t < n; t++) this.probe(this.upgrades[t]);
    }
  }
  onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t),
        this.emitReserved("heartbeat"),
        this.resetPingTimeout(),
        t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          (n.code = t.data), this.onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this.upgrades = this.filterUpgrades(t.upgrades)),
      (this.pingInterval = t.pingInterval),
      (this.pingTimeout = t.pingTimeout),
      (this.maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer),
      (this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout)),
      this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen),
      (this.prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this.getWritablePackets();
      this.transport.send(t),
        (this.prevBufferLen = t.length),
        this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    if (
      !(
        this.maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if ((i && (n += $E(i)), r > 0 && n > this.maxPayload))
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  write(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  send(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  sendPacket(t, n, r, i) {
    if (
      (typeof n == "function" && ((i = n), (n = void 0)),
      typeof r == "function" && ((i = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const o = { type: t, data: n, options: r };
    this.emitReserved("packetCreate", o),
      this.writeBuffer.push(o),
      i && this.once("flush", i),
      this.flush();
  }
  close() {
    const t = () => {
        this.onClose("forced close"), this.transport.close();
      },
      n = () => {
        this.off("upgrade", n), this.off("upgradeError", n), t();
      },
      r = () => {
        this.once("upgrade", n), this.once("upgradeError", n);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
          ? r()
          : t()),
      this
    );
  }
  onError(t) {
    (vn.priorWebsocketSuccess = !1),
      this.emitReserved("error", t),
      this.onClose("transport error", t);
  }
  onClose(t, n) {
    (this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing") &&
      (this.clearTimeoutFn(this.pingTimeoutTimer),
      this.transport.removeAllListeners("close"),
      this.transport.close(),
      this.transport.removeAllListeners(),
      typeof removeEventListener == "function" &&
        (removeEventListener(
          "beforeunload",
          this.beforeunloadEventListener,
          !1
        ),
        removeEventListener("offline", this.offlineEventListener, !1)),
      (this.readyState = "closed"),
      (this.id = null),
      this.emitReserved("close", t, n),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0));
  }
  filterUpgrades(t) {
    const n = [];
    let r = 0;
    const i = t.length;
    for (; r < i; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
};
_m.protocol = wm;
function nx(e, t = "", n) {
  let r = e;
  (n = n || (typeof location < "u" && location)),
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < "u" ? (e = n.protocol + "//" + e) : (e = "https://" + e)),
      (r = au(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/");
  const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + o + ":" + r.port + t),
    (r.href =
      r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const rx = typeof ArrayBuffer == "function",
  ix = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  Rm = Object.prototype.toString,
  ox =
    typeof Blob == "function" ||
    (typeof Blob < "u" && Rm.call(Blob) === "[object BlobConstructor]"),
  sx =
    typeof File == "function" ||
    (typeof File < "u" && Rm.call(File) === "[object FileConstructor]");
function Pa(e) {
  return (
    (rx && (e instanceof ArrayBuffer || ix(e))) ||
    (ox && e instanceof Blob) ||
    (sx && e instanceof File)
  );
}
function bi(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (bi(e[n])) return !0;
    return !1;
  }
  if (Pa(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return bi(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && bi(e[n])) return !0;
  return !1;
}
function lx(e) {
  const t = [],
    n = e.data,
    r = e;
  return (
    (r.data = cu(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
  );
}
function cu(e, t) {
  if (!e) return e;
  if (Pa(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = cu(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = cu(e[r], t));
    return n;
  }
  return e;
}
function ux(e, t) {
  return (e.data = fu(e.data, t)), delete e.attachments, e;
}
function fu(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = fu(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = fu(e[n], t));
  return e;
}
const ax = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  cx = 5;
var I;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(I || (I = {}));
class fx {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === I.EVENT || t.type === I.ACK) && bi(t)
      ? this.encodeAsBinary({
          type: t.type === I.EVENT ? I.BINARY_EVENT : I.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let n = "" + t.type;
    return (
      (t.type === I.BINARY_EVENT || t.type === I.BINARY_ACK) &&
        (n += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(t) {
    const n = lx(t),
      r = this.encodeAsString(n.packet),
      i = n.buffers;
    return i.unshift(r), i;
  }
}
function Cf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class La extends ee {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === I.BINARY_EVENT;
      r || n.type === I.BINARY_ACK
        ? ((n.type = r ? I.EVENT : I.ACK),
          (this.reconstructor = new dx(n)),
          n.attachments === 0 && super.emitReserved("decoded", n))
        : super.emitReserved("decoded", n);
    } else if (Pa(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved("decoded", n));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let n = 0;
    const r = { type: Number(t.charAt(0)) };
    if (I[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === I.BINARY_EVENT || r.type === I.BINARY_ACK) {
      const o = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; );
      const s = t.substring(o, n);
      if (s != Number(s) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (t.charAt(n + 1) === "/") {
      const o = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); );
      r.nsp = t.substring(o, n);
    } else r.nsp = "/";
    const i = t.charAt(n + 1);
    if (i !== "" && Number(i) == i) {
      const o = n + 1;
      for (; ++n; ) {
        const s = t.charAt(n);
        if (s == null || Number(s) != s) {
          --n;
          break;
        }
        if (n === t.length) break;
      }
      r.id = Number(t.substring(o, n + 1));
    }
    if (t.charAt(++n)) {
      const o = this.tryParse(t.substr(n));
      if (La.isPayloadValid(r.type, o)) r.data = o;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case I.CONNECT:
        return Cf(n);
      case I.DISCONNECT:
        return n === void 0;
      case I.CONNECT_ERROR:
        return typeof n == "string" || Cf(n);
      case I.EVENT:
      case I.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == "number" ||
            (typeof n[0] == "string" && ax.indexOf(n[0]) === -1))
        );
      case I.ACK:
      case I.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class dx {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = ux(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const px = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: La,
      Encoder: fx,
      get PacketType() {
        return I;
      },
      protocol: cx,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Xe(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
const hx = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Tm extends ee {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      Xe(t, "open", this.onopen.bind(this)),
      Xe(t, "packet", this.onpacket.bind(this)),
      Xe(t, "error", this.onerror.bind(this)),
      Xe(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...n) {
    if (hx.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (n.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(n), this;
    const r = { type: I.EVENT, data: n };
    if (
      ((r.options = {}),
      (r.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == "function")
    ) {
      const s = this.ids++,
        l = n.pop();
      this._registerAckCallback(s, l), (r.id = s);
    }
    const i =
      this.io.engine &&
      this.io.engine.transport &&
      this.io.engine.transport.writable;
    return (
      (this.flags.volatile && (!i || !this.connected)) ||
        (this.connected
          ? (this.notifyOutgoingListeners(r), this.packet(r))
          : this.sendBuffer.push(r)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, n) {
    var r;
    const i =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = n;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
        delete this.acks[t];
        for (let l = 0; l < this.sendBuffer.length; l++)
          this.sendBuffer[l].id === t && this.sendBuffer.splice(l, 1);
        n.call(this, new Error("operation has timed out"));
      }, i),
      s = (...l) => {
        this.io.clearTimeoutFn(o), n.apply(this, l);
      };
    (s.withError = !0), (this.acks[t] = s);
  }
  emitWithAck(t, ...n) {
    return new Promise((r, i) => {
      const o = (s, l) => (s ? i(s) : r(l));
      (o.withError = !0), n.push(o), this.emit(t, ...n);
    });
  }
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((i, ...o) =>
      r !== this._queue[0]
        ? void 0
        : (i !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), n && n(i))
            : (this._queue.shift(), n && n(null, ...o)),
          (r.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(r),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const n = this._queue[0];
    (n.pending && !t) ||
      ((n.pending = !0),
      n.tryCount++,
      (this.flags = n.flags),
      this.emit.apply(this, n.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: I.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, n) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, n),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t],
          r.withError &&
            r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case I.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case I.EVENT:
        case I.BINARY_EVENT:
          this.onevent(t);
          break;
        case I.ACK:
        case I.BINARY_ACK:
          this.onack(t);
          break;
        case I.DISCONNECT:
          this.ondisconnect();
          break;
        case I.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          (r.data = t.data.data), this.emitReserved("connect_error", r);
          break;
      }
  }
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const n = this;
    let r = !1;
    return function (...i) {
      r || ((r = !0), n.packet({ type: I.ACK, id: t, data: i }));
    };
  }
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" &&
      (delete this.acks[t.id],
      n.withError && t.data.unshift(null),
      n.apply(this, t.data));
  }
  onconnect(t, n) {
    (this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: I.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, t.data);
    }
  }
}
function er(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
er.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
er.prototype.reset = function () {
  this.attempts = 0;
};
er.prototype.setMin = function (e) {
  this.ms = e;
};
er.prototype.setMax = function (e) {
  this.max = e;
};
er.prototype.setJitter = function (e) {
  this.jitter = e;
};
class du extends ee {
  constructor(t, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      vs(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
      ),
      (this.backoff = new er({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const i = n.parser || px;
    (this.encoder = new i.Encoder()),
      (this.decoder = new i.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new _m(this.uri, this.opts);
    const n = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const i = Xe(n, "open", function () {
        r.onopen(), t && t();
      }),
      o = (l) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", l),
          t ? t(l) : this.maybeReconnectOnOpen();
      },
      s = Xe(n, "error", o);
    if (this._timeout !== !1) {
      const l = this._timeout,
        u = this.setTimeoutFn(() => {
          i(), o(new Error("timeout")), n.close();
        }, l);
      this.opts.autoUnref && u.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(u);
        });
    }
    return this.subs.push(i), this.subs.push(s), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      Xe(t, "ping", this.onping.bind(this)),
      Xe(t, "data", this.ondata.bind(this)),
      Xe(t, "error", this.onerror.bind(this)),
      Xe(t, "close", this.onclose.bind(this)),
      Xe(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  ondecoded(t) {
    Na(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, n) {
    let r = this.nsps[t];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new Tm(this, t, n)), (this.nsps[t] = r)),
      r
    );
  }
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"),
      this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(t, n) {
    this.cleanup(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, n),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((i) => {
              i
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", i))
                : t.onreconnect();
            }));
      }, n);
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const dr = {};
function Wi(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const n = nx(e, t.path || "/socket.io"),
    r = n.source,
    i = n.id,
    o = n.path,
    s = dr[i] && o in dr[i].nsps,
    l = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let u;
  return (
    l ? (u = new du(r, t)) : (dr[i] || (dr[i] = new du(r, t)), (u = dr[i])),
    n.query && !t.query && (t.query = n.queryKey),
    u.socket(n.path, t)
  );
}
Object.assign(Wi, { Manager: du, Socket: Tm, io: Wi, connect: Wi });
const kf = "chat-add-msg",
  mx = "chat-send-msg",
  yx = "chat-set-topic",
  gx = "user-watch",
  _f = "user-updated",
  Rf = "review-added",
  Tf = "review-removed",
  Of = "review-about-you",
  vx = "set-user-socket",
  wx = "unset-user-socket",
  Sx = "",
  ue = Ex();
window.socketService = ue;
ue.setup();
function Ex() {
  var e = null;
  return {
    setup() {
      e = Wi(Sx);
      const n = oe.getLoggedinUser();
      n && this.login(n._id);
    },
    on(n, r) {
      e.on(n, r);
    },
    off(n, r = null) {
      e && (r ? e.off(n, r) : e.removeAllListeners(n));
    },
    emit(n, r) {
      e.emit(n, r);
    },
    login(n) {
      e.emit(vx, n);
    },
    logout() {
      e.emit(wx);
    },
    terminate() {
      e = null;
    },
  };
}
async function Om() {
  try {
    te.dispatch({ type: nm });
    const e = await oe.getUsers();
    te.dispatch({ type: Yh, users: e });
  } catch (e) {
    console.log("UserActions: err in loadUsers", e);
  } finally {
    te.dispatch({ type: rm });
  }
}
async function xx(e) {
  try {
    await oe.remove(e), te.dispatch({ type: Gh, userId: e });
  } catch (t) {
    console.log("UserActions: err in removeUser", t);
  }
}
async function Cx(e) {
  try {
    const t = await oe.login(e);
    return te.dispatch({ type: ys, user: t }), ue.login(t._id), t;
  } catch (t) {
    throw (console.log("Cannot login", t), t);
  }
}
async function kx(e) {
  try {
    const t = await oe.signup(e);
    return te.dispatch({ type: ys, user: t }), ue.login(t), t;
  } catch (t) {
    throw (console.log("Cannot signup", t), t);
  }
}
async function _x() {
  try {
    await oe.logout(), te.dispatch({ type: ys, user: null }), ue.logout();
  } catch (e) {
    throw (console.log("Cannot logout", e), e);
  }
}
async function Rx(e) {
  try {
    const t = await oe.getById(e);
    te.dispatch({ type: Jh, user: t });
  } catch (t) {
    Wt("Cannot load user"), console.log("Cannot load user", t);
  }
}
function Tx({ review: e }) {
  const { byUser: t, aboutUser: n } = e;
  return h.jsxs("article", {
    className: "preview review-preview",
    children: [
      h.jsxs("p", {
        children: [
          "About: ",
          h.jsx(Kt, { to: `/user/${n._id}`, children: n.fullname }),
        ],
      }),
      h.jsxs("p", {
        className: "review-by",
        children: [
          "By: ",
          h.jsx(Kt, { to: `/user/${t._id}`, children: t.fullname }),
        ],
      }),
      h.jsx("pre", { className: "review-txt", children: e.txt }),
      e.createdAt &&
        h.jsxs("section", {
          className: "created-at",
          children: [
            h.jsx("h4", { children: "Created At:" }),
            new Date(e.createdAt).toLocaleString("he"),
          ],
        }),
    ],
  });
}
function Ox({ reviews: e, onRemoveReview: t }) {
  function n(r) {
    var o;
    const i = oe.getLoggedinUser();
    return i
      ? i.isAdmin
        ? !0
        : ((o = r.byUser) == null ? void 0 : o._id) === i._id
      : !1;
  }
  return h.jsx("section", {
    children: h.jsx("ul", {
      className: "list review-list",
      children: e.map((r) =>
        h.jsxs(
          "li",
          {
            children: [
              h.jsx(Tx, { review: r }),
              n(r) &&
                h.jsx("div", {
                  className: "actions",
                  children: h.jsx("button", {
                    onClick: () => t(r._id),
                    children: "x",
                  }),
                }),
            ],
          },
          r._id
        )
      ),
    }),
  });
}
function Nx() {
  const e = ot((o) => o.userModule.users),
    [t, n] = x.useState({ txt: "", aboutUserId: "" });
  function r(o) {
    const { name: s, value: l } = o.target;
    n({ ...t, [s]: l });
  }
  async function i(o) {
    if ((o.preventDefault(), !t.txt || !t.aboutUserId))
      return alert("All fields are required");
    try {
      await kE(t), vt("Review added"), n({ txt: "", aboutUserId: "" });
    } catch {
      Wt("Cannot add review");
    }
  }
  return h.jsxs("form", {
    className: "review-edit",
    onSubmit: i,
    children: [
      h.jsxs("select", {
        onChange: r,
        value: t.aboutUserId,
        name: "aboutUserId",
        children: [
          h.jsx("option", { value: "", children: "Review about..." }),
          e.map((o) =>
            h.jsx("option", { value: o._id, children: o.fullname }, o._id)
          ),
        ],
      }),
      h.jsx("textarea", { name: "txt", onChange: r, value: t.txt }),
      h.jsx("button", { children: "Add" }),
    ],
  });
}
function Px() {
  const e = ot((i) => i.userModule.user),
    t = ot((i) => i.reviewModule.reviews);
  console.log("reviews:", t);
  const n = G0();
  x.useEffect(
    () => (
      CE(),
      Om(),
      ue.on(Rf, (i) => {
        console.log("GOT from socket", i), n(pm(i));
      }),
      ue.on(Tf, (i) => {
        console.log("GOT from socket", i), n(dm(i));
      }),
      () => {
        ue.off(Rf), ue.off(Tf);
      }
    ),
    []
  );
  async function r(i) {
    try {
      await _E(i), vt("Review removed");
    } catch {
      Wt("Cannot remove");
    }
  }
  return h.jsxs("div", {
    className: "review-index",
    children: [
      h.jsx("h2", { children: "Reviews and Gossip" }),
      e && h.jsx(Nx, {}),
      h.jsx(Ox, { reviews: t, onRemoveReview: r }),
    ],
  });
}
function Lx() {
  const [e, t] = x.useState({ txt: "" }),
    [n, r] = x.useState([]),
    [i, o] = x.useState("Love"),
    [s, l] = x.useState(!1),
    u = ot((g) => g.userModule.user),
    a = x.useRef();
  x.useEffect(
    () => (
      ue.on(kf, c),
      () => {
        ue.off(kf, c), a.current && clearTimeout(a.current);
      }
    ),
    []
  ),
    x.useEffect(() => {
      ue.emit(yx, i);
    }, [i]);
  function c(g) {
    r((v) => [...v, g]);
  }
  function d() {
    a.current && clearTimeout(a.current),
      (a.current = setTimeout(() => {
        r((g) => [...g, { from: "Bot", txt: "You are amazing!" }]);
      }, 1250));
  }
  function y(g) {
    g.preventDefault();
    const C = { from: (u == null ? void 0 : u.fullname) || "Me", txt: e.txt };
    ue.emit(mx, C), s && d(), t({ txt: "" });
  }
  function w(g) {
    const { name: v, value: C } = g.target;
    t((p) => ({ ...p, [v]: C }));
  }
  return h.jsxs("section", {
    className: "chat",
    children: [
      h.jsxs("h2", { children: ["Lets Chat about ", i] }),
      h.jsxs("label", {
        children: [
          h.jsx("input", {
            type: "checkbox",
            name: "isBotMode",
            checked: s,
            onChange: ({ target: g }) => l(g.checked),
          }),
          "Bot Mode",
        ],
      }),
      h.jsxs("div", {
        children: [
          h.jsxs("label", {
            children: [
              h.jsx("input", {
                type: "radio",
                name: "topic",
                value: "Love",
                checked: i === "Love",
                onChange: ({ target: g }) => o(g.value),
              }),
              "Love",
            ],
          }),
          h.jsxs("label", {
            children: [
              h.jsx("input", {
                type: "radio",
                name: "topic",
                value: "Politics",
                checked: i === "Politics",
                onChange: ({ target: g }) => o(g.value),
              }),
              "Politics",
            ],
          }),
        ],
      }),
      h.jsxs("form", {
        onSubmit: y,
        children: [
          h.jsx("input", {
            type: "text",
            value: e.txt,
            onChange: w,
            name: "txt",
            autoComplete: "off",
          }),
          h.jsx("button", { children: "Send" }),
        ],
      }),
      h.jsx("ul", {
        children: n.map((g, v) =>
          h.jsxs("li", { children: [g.from, ": ", g.txt] }, v)
        ),
      }),
    ],
  });
}
function Ax() {
  const e = ot((n) => n.userModule.users),
    t = ot((n) => n.userModule.isLoading);
  return (
    x.useEffect(() => {
      Om();
    }, []),
    h.jsxs("section", {
      className: "admin",
      children: [
        t && "Loading...",
        e &&
          h.jsx("ul", {
            children: e.map((n) =>
              h.jsxs(
                "li",
                {
                  children: [
                    h.jsx("pre", { children: JSON.stringify(n, null, 2) }),
                    h.jsxs("button", {
                      onClick: () => {
                        xx(n._id);
                      },
                      children: ["Remove ", n.username],
                    }),
                  ],
                },
                n._id
              )
            ),
          }),
      ],
    })
  );
}
function jx() {
  const { carId: e } = Xp(),
    t = ot((r) => r.carModule.car);
  x.useEffect(() => {
    GS(e);
  }, [e]);
  async function n(r) {
    try {
      await eE(r, "bla bla " + parseInt(Math.random() * 10)),
        vt("Car msg added");
    } catch {
      Wt("Cannot add car msg");
    }
  }
  return h.jsxs("section", {
    className: "car-details",
    children: [
      h.jsx(Kt, { to: "/car", children: "Back to list" }),
      h.jsx("h1", { children: "Car Details" }),
      t &&
        h.jsxs("div", {
          children: [
            h.jsx("h3", { children: t.vendor }),
            h.jsxs("h4", { children: ["$", t.price] }),
            h.jsxs("pre", { children: [" ", JSON.stringify(t, null, 2), " "] }),
          ],
        }),
      h.jsx("button", {
        onClick: () => {
          n(t._id);
        },
        children: "Add car msg",
      }),
    ],
  });
}
function Ux() {
  const e = Xp(),
    t = ot((r) => r.userModule.watchedUser);
  x.useEffect(
    () => (
      Rx(e.id),
      ue.emit(gx, e.id),
      ue.on(_f, n),
      () => {
        ue.off(_f, n);
      }
    ),
    [e.id]
  );
  function n(r) {
    vt(
      `This user ${r.fullname} just got updated from socket, new score: ${r.score}`
    ),
      te.dispatch({ type: "SET_WATCHED_USER", user: r });
  }
  return h.jsxs("main", {
    className: "user-details",
    children: [
      h.jsx("h1", { children: "User Details" }),
      t &&
        h.jsxs("div", {
          children: [
            h.jsx("h3", { children: t.fullname }),
            h.jsx("img", { src: t.imgUrl, style: { width: "100px" } }),
            h.jsxs("pre", { children: [" ", JSON.stringify(t, null, 4), " "] }),
          ],
        }),
    ],
  });
}
function Dx() {
  const e = ot((r) => r.userModule.user),
    t = zo();
  async function n() {
    try {
      await _x(), t("/"), vt("Bye now");
    } catch {
      Wt("Cannot logout");
    }
  }
  return h.jsx("header", {
    className: "app-header main-container full",
    children: h.jsxs("nav", {
      className: "",
      children: [
        h.jsx(Ye, { to: "/", className: "/logo", children: "E2E Demo" }),
        h.jsx(Ye, { to: "/about", children: "About" }),
        h.jsx(Ye, { to: "/car", children: "Cars" }),
        h.jsx(Ye, { to: "/chat", children: "Chat" }),
        h.jsx(Ye, { to: "/review", children: "Review" }),
        (e == null ? void 0 : e.isAdmin) &&
          h.jsx(Ye, { to: "/admin", children: "Admin" }),
        !e &&
          h.jsx(Ye, {
            to: "login",
            className: "login-link",
            children: "Login",
          }),
        e &&
          h.jsxs("div", {
            className: "user-info",
            children: [
              h.jsxs(Kt, {
                to: `user/${e._id}`,
                children: [
                  e.imgUrl && h.jsx("img", { src: e.imgUrl }),
                  e.fullname,
                ],
              }),
              h.jsx("button", { onClick: n, children: "logout" }),
            ],
          }),
      ],
    }),
  });
}
function Ix() {
  const e = ot((t) => t.userModule.count);
  return h.jsx("footer", {
    className: "app-footer main-container full",
    children: h.jsxs("section", {
      children: [
        h.jsx("p", { children: "Coffeerights © 2024" }),
        h.jsxs("p", { children: ["Count: ", e] }),
      ],
    }),
  });
}
function Mx() {
  const [e, t] = x.useState(null),
    n = x.useRef();
  x.useEffect(() => {
    const o = fm.on("show-msg", (s) => {
      t(s),
        n.current && ((n.current = null), clearTimeout(n.current)),
        (n.current = setTimeout(r, 3e3));
    });
    return (
      ue.on(Of, (s) => {
        vt(`New review about me ${s.txt}`);
      }),
      () => {
        o(), ue.off(Of);
      }
    );
  }, []);
  function r() {
    t(null);
  }
  function i() {
    return e ? "visible" : "";
  }
  return h.jsxs("section", {
    className: `user-msg ${e == null ? void 0 : e.type} ${i()}`,
    children: [
      h.jsx("button", { onClick: r, children: "x" }),
      e == null ? void 0 : e.txt,
    ],
  });
}
function $x() {
  return h.jsxs("div", {
    className: "login-page",
    children: [
      h.jsxs("nav", {
        children: [
          h.jsx(Ye, { to: ".", children: "Login" }),
          h.jsx(Ye, { to: "signup", children: "Signup" }),
        ],
      }),
      h.jsx(th, {}),
    ],
  });
}
function Bx() {
  const [e, t] = x.useState([]),
    [n, r] = x.useState({ username: "", password: "", fullname: "" }),
    i = zo();
  x.useEffect(() => {
    o();
  }, []);
  async function o() {
    const u = await oe.getUsers();
    t(u);
  }
  async function s(u = null) {
    u && u.preventDefault(), n.username && (await Cx(n), i("/"));
  }
  function l(u) {
    const a = u.target.name,
      c = u.target.value;
    r({ ...n, [a]: c });
  }
  return h.jsxs("form", {
    className: "login-form",
    onSubmit: s,
    children: [
      h.jsxs("select", {
        name: "username",
        value: n.username,
        onChange: l,
        children: [
          h.jsx("option", { value: "", children: "Select User" }),
          e.map((u) =>
            h.jsx("option", { value: u.username, children: u.fullname }, u._id)
          ),
        ],
      }),
      h.jsx("button", { children: "Login" }),
    ],
  });
}
const Fx = { uploadImg: zx };
async function zx(e) {
  const t = "vanilla-test-images",
    n = "stavs_preset",
    r = `https://api.cloudinary.com/v1_1/${t}/image/upload`,
    i = new FormData();
  i.append("file", e.target.files[0]), i.append("upload_preset", n);
  try {
    return await (await fetch(r, { method: "POST", body: i })).json();
  } catch (o) {
    throw (console.error(o), o);
  }
}
function Vx({ onUploaded: e }) {
  const [t, n] = x.useState({ imgUrl: null, height: 500, width: 500 }),
    [r, i] = x.useState(!1);
  async function o(l) {
    i(!0);
    const { secure_url: u, height: a, width: c } = await Fx.uploadImg(l);
    console.log(u), n({ imgUrl: u, width: c, height: a }), i(!1), e && e(u);
  }
  function s() {
    return t.imgUrl ? "Upload Another?" : r ? "Uploading...." : "Upload Image";
  }
  return h.jsxs("div", {
    className: "upload-preview",
    children: [
      t.imgUrl &&
        h.jsx("img", {
          src: t.imgUrl,
          style: { maxWidth: "50px", float: "right" },
        }),
      h.jsx("label", { htmlFor: "imgUpload", children: s() }),
      h.jsx("input", {
        type: "file",
        onChange: o,
        accept: "img/*",
        id: "imgUpload",
      }),
    ],
  });
}
function bx() {
  const [e, t] = x.useState(oe.getEmptyUser()),
    n = zo();
  function r() {
    t({ username: "", password: "", fullname: "", imgUrl: "", score: 100 });
  }
  function i(l) {
    const u = l.target.name,
      a = l.target.value;
    t((c) => ({ ...c, [u]: a }));
  }
  async function o(l = null) {
    l && l.preventDefault(),
      !(!e.username || !e.password || !e.fullname) &&
        (await kx(e), r(), n("/"));
  }
  function s(l) {
    t((u) => ({ ...u, imgUrl: l }));
  }
  return h.jsxs("form", {
    className: "signup-form",
    onSubmit: o,
    children: [
      h.jsx("input", {
        type: "text",
        name: "fullname",
        value: e.fullname,
        placeholder: "Fullname",
        onChange: i,
        required: !0,
      }),
      h.jsx("input", {
        type: "text",
        name: "username",
        value: e.username,
        placeholder: "Username",
        onChange: i,
        required: !0,
      }),
      h.jsx("input", {
        type: "password",
        name: "password",
        value: e.password,
        placeholder: "Password",
        onChange: i,
        required: !0,
      }),
      h.jsx(Vx, { onUploaded: s }),
      h.jsx("button", { children: "Signup" }),
    ],
  });
}
function Wx() {
  return h.jsxs("div", {
    className: "main-container",
    children: [
      h.jsx(Dx, {}),
      h.jsx(Mx, {}),
      h.jsx("main", {
        children: h.jsxs(qv, {
          children: [
            h.jsx(_e, { path: "", element: h.jsx(ES, {}) }),
            h.jsxs(_e, {
              path: "about",
              element: h.jsx(OS, {}),
              children: [
                h.jsx(_e, { path: "team", element: h.jsx(NS, {}) }),
                h.jsx(_e, { path: "vision", element: h.jsx(PS, {}) }),
              ],
            }),
            h.jsx(_e, { path: "car", element: h.jsx(dE, {}) }),
            h.jsx(_e, { path: "car/:carId", element: h.jsx(jx, {}) }),
            h.jsx(_e, { path: "user/:id", element: h.jsx(Ux, {}) }),
            h.jsx(_e, { path: "review", element: h.jsx(Px, {}) }),
            h.jsx(_e, { path: "chat", element: h.jsx(Lx, {}) }),
            h.jsx(_e, { path: "admin", element: h.jsx(Ax, {}) }),
            h.jsxs(_e, {
              path: "login",
              element: h.jsx($x, {}),
              children: [
                h.jsx(_e, { index: !0, element: h.jsx(Bx, {}) }),
                h.jsx(_e, { path: "signup", element: h.jsx(bx, {}) }),
              ],
            }),
          ],
        }),
      }),
      h.jsx(Ix, {}),
    ],
  });
}
const Hx = rl.createRoot(document.getElementById("root"));
Hx.render(
  h.jsx(K0, { store: te, children: h.jsx(e0, { children: h.jsx(Wx, {}) }) })
);
X0();
