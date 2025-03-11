/**
 * @imqa/web-agent
 *  version: 0.0.29
 *  commit-hash: d0ad511
 *  build time: 2025-03-06T00:09:18.486Z
 *  SPDX-FileCopyrightText: © 2024-2025 ONYCOM CO., LTD. <https://www.imqa.io>
 */
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
      ? define(t)
      : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).IMQA = t())
})(this, function () {
  'use strict'
  var e =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
            ? self
            : {}
  function t(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
  }
  function n(e) {
    if (e.__esModule) return e
    var t = e.default
    if ('function' == typeof t) {
      var n = function e() {
        if (this instanceof e) {
          var n = [null]
          return n.push.apply(n, arguments), new (Function.bind.apply(t, n))()
        }
        return t.apply(this, arguments)
      }
      n.prototype = t.prototype
    } else n = {}
    return (
      Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.keys(e).forEach(function (t) {
        var r = Object.getOwnPropertyDescriptor(e, t)
        Object.defineProperty(
          n,
          t,
          r.get
            ? r
            : {
                enumerable: !0,
                get: function () {
                  return e[t]
                },
              },
        )
      }),
      n
    )
  }
  var r = {},
    o = {},
    i = function (e, t) {
      return (
        (i =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }),
        i(e, t)
      )
    }
  function s(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null')
    function n() {
      this.constructor = e
    }
    i(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
  }
  var a = function () {
    return (
      (a =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          return e
        }),
      a.apply(this, arguments)
    )
  }
  function c(e, t) {
    var n = {}
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var o = 0
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]])
    }
    return n
  }
  function _(e, t, n, r) {
    var o,
      i = arguments.length,
      s = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      s = Reflect.decorate(e, t, n, r)
    else
      for (var a = e.length - 1; a >= 0; a--)
        (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s)
    return i > 3 && s && Object.defineProperty(t, n, s), s
  }
  function u(e, t) {
    return function (n, r) {
      t(n, r, e)
    }
  }
  function E(e, t, n, r, o, i) {
    function s(e) {
      if (void 0 !== e && 'function' != typeof e) throw new TypeError('Function expected')
      return e
    }
    for (
      var a,
        c = r.kind,
        _ = 'getter' === c ? 'get' : 'setter' === c ? 'set' : 'value',
        u = !t && e ? (r.static ? e : e.prototype) : null,
        E = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}),
        l = !1,
        T = n.length - 1;
      T >= 0;
      T--
    ) {
      var p = {}
      for (var d in r) p[d] = 'access' === d ? {} : r[d]
      for (var d in r.access) p.access[d] = r.access[d]
      p.addInitializer = function (e) {
        if (l) throw new TypeError('Cannot add initializers after decoration has completed')
        i.push(s(e || null))
      }
      var S = (0, n[T])('accessor' === c ? { get: E.get, set: E.set } : E[_], p)
      if ('accessor' === c) {
        if (void 0 === S) continue
        if (null === S || 'object' != typeof S) throw new TypeError('Object expected')
        ;(a = s(S.get)) && (E.get = a),
          (a = s(S.set)) && (E.set = a),
          (a = s(S.init)) && o.unshift(a)
      } else (a = s(S)) && ('field' === c ? o.unshift(a) : (E[_] = a))
    }
    u && Object.defineProperty(u, r.name, E), (l = !0)
  }
  function l(e, t, n) {
    for (var r = arguments.length > 2, o = 0; o < t.length; o++)
      n = r ? t[o].call(e, n) : t[o].call(e)
    return r ? n : void 0
  }
  function T(e) {
    return 'symbol' == typeof e ? e : ''.concat(e)
  }
  function p(e, t, n) {
    return (
      'symbol' == typeof t && (t = t.description ? '['.concat(t.description, ']') : ''),
      Object.defineProperty(e, 'name', { configurable: !0, value: n ? ''.concat(n, ' ', t) : t })
    )
  }
  function d(e, t) {
    if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
      return Reflect.metadata(e, t)
  }
  function S(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          c(r.next(e))
        } catch (e) {
          i(e)
        }
      }
      function a(e) {
        try {
          c(r.throw(e))
        } catch (e) {
          i(e)
        }
      }
      function c(e) {
        var t
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t)
                })).then(s, a)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
  function f(e, t) {
    var n,
      r,
      o,
      i = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1]
          return o[1]
        },
        trys: [],
        ops: [],
      },
      s = Object.create(('function' == typeof Iterator ? Iterator : Object).prototype)
    return (
      (s.next = a(0)),
      (s.throw = a(1)),
      (s.return = a(2)),
      'function' == typeof Symbol &&
        (s[Symbol.iterator] = function () {
          return this
        }),
      s
    )
    function a(a) {
      return function (c) {
        return (function (a) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; s && ((s = 0), a[0] && (i = 0)), i; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & a[0]
                      ? r.return
                      : a[0]
                        ? r.throw || ((o = r.return) && o.call(r), 0)
                        : r.next) &&
                  !(o = o.call(r, a[1])).done)
              )
                return o
              switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                case 0:
                case 1:
                  o = a
                  break
                case 4:
                  return i.label++, { value: a[1], done: !1 }
                case 5:
                  i.label++, (r = a[1]), (a = [0])
                  continue
                case 7:
                  ;(a = i.ops.pop()), i.trys.pop()
                  continue
                default:
                  if (
                    !((o = i.trys),
                    (o = o.length > 0 && o[o.length - 1]) || (6 !== a[0] && 2 !== a[0]))
                  ) {
                    i = 0
                    continue
                  }
                  if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                    i.label = a[1]
                    break
                  }
                  if (6 === a[0] && i.label < o[1]) {
                    ;(i.label = o[1]), (o = a)
                    break
                  }
                  if (o && i.label < o[2]) {
                    ;(i.label = o[2]), i.ops.push(a)
                    break
                  }
                  o[2] && i.ops.pop(), i.trys.pop()
                  continue
              }
              a = t.call(e, i)
            } catch (e) {
              ;(a = [6, e]), (r = 0)
            } finally {
              n = o = 0
            }
          if (5 & a[0]) throw a[1]
          return { value: a[0] ? a[1] : void 0, done: !0 }
        })([a, c])
      }
    }
  }
  var A = Object.create
    ? function (e, t, n, r) {
        void 0 === r && (r = n)
        var o = Object.getOwnPropertyDescriptor(t, n)
        ;(o && !('get' in o ? !t.__esModule : o.writable || o.configurable)) ||
          (o = {
            enumerable: !0,
            get: function () {
              return t[n]
            },
          }),
          Object.defineProperty(e, r, o)
      }
    : function (e, t, n, r) {
        void 0 === r && (r = n), (e[r] = t[n])
      }
  function h(e, t) {
    for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || A(t, e, n)
  }
  function m(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0
    if (n) return n.call(e)
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        },
      }
    throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
  }
  function R(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!n) return e
    var r,
      o,
      i = n.call(e),
      s = []
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
    } catch (e) {
      o = { error: e }
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i)
      } finally {
        if (o) throw o.error
      }
    }
    return s
  }
  function g() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(R(arguments[t]))
    return e
  }
  function O() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length
    var r = Array(e),
      o = 0
    for (t = 0; t < n; t++)
      for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s]
    return r
  }
  function v(e, t, n) {
    if (n || 2 === arguments.length)
      for (var r, o = 0, i = t.length; o < i; o++)
        (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
    return e.concat(r || Array.prototype.slice.call(t))
  }
  function I(e) {
    return this instanceof I ? ((this.v = e), this) : new I(e)
  }
  function N(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
    var r,
      o = n.apply(e, t || []),
      i = []
    return (
      (r = Object.create(('function' == typeof AsyncIterator ? AsyncIterator : Object).prototype)),
      s('next'),
      s('throw'),
      s('return', function (e) {
        return function (t) {
          return Promise.resolve(t).then(e, _)
        }
      }),
      (r[Symbol.asyncIterator] = function () {
        return this
      }),
      r
    )
    function s(e, t) {
      o[e] &&
        ((r[e] = function (t) {
          return new Promise(function (n, r) {
            i.push([e, t, n, r]) > 1 || a(e, t)
          })
        }),
        t && (r[e] = t(r[e])))
    }
    function a(e, t) {
      try {
        !(function (e) {
          e.value instanceof I ? Promise.resolve(e.value.v).then(c, _) : u(i[0][2], e)
        })(o[e](t))
      } catch (e) {
        u(i[0][3], e)
      }
    }
    function c(e) {
      a('next', e)
    }
    function _(e) {
      a('throw', e)
    }
    function u(e, t) {
      e(t), i.shift(), i.length && a(i[0][0], i[0][1])
    }
  }
  function y(e) {
    var t, n
    return (
      (t = {}),
      r('next'),
      r('throw', function (e) {
        throw e
      }),
      r('return'),
      (t[Symbol.iterator] = function () {
        return this
      }),
      t
    )
    function r(r, o) {
      t[r] = e[r]
        ? function (t) {
            return (n = !n) ? { value: I(e[r](t)), done: !1 } : o ? o(t) : t
          }
        : o
    }
  }
  function C(e) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
    var t,
      n = e[Symbol.asyncIterator]
    return n
      ? n.call(e)
      : ((e = m(e)),
        (t = {}),
        r('next'),
        r('throw'),
        r('return'),
        (t[Symbol.asyncIterator] = function () {
          return this
        }),
        t)
    function r(n) {
      t[n] =
        e[n] &&
        function (t) {
          return new Promise(function (r, o) {
            ;(function (e, t, n, r) {
              Promise.resolve(r).then(function (t) {
                e({ value: t, done: n })
              }, t)
            })(r, o, (t = e[n](t)).done, t.value)
          })
        }
    }
  }
  function L(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
  }
  var b = Object.create
      ? function (e, t) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: t })
        }
      : function (e, t) {
          e.default = t
        },
    M = function (e) {
      return (
        (M =
          Object.getOwnPropertyNames ||
          function (e) {
            var t = []
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n)
            return t
          }),
        M(e)
      )
    }
  function P(e) {
    if (e && e.__esModule) return e
    var t = {}
    if (null != e) for (var n = M(e), r = 0; r < n.length; r++) 'default' !== n[r] && A(t, e, n[r])
    return b(t, e), t
  }
  function U(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function D(e, t, n, r) {
    if ('a' === n && !r) throw new TypeError('Private accessor was defined without a getter')
    if ('function' == typeof t ? e !== t || !r : !t.has(e))
      throw new TypeError(
        'Cannot read private member from an object whose class did not declare it',
      )
    return 'm' === n ? r : 'a' === n ? r.call(e) : r ? r.value : t.get(e)
  }
  function w(e, t, n, r, o) {
    if ('m' === r) throw new TypeError('Private method is not writable')
    if ('a' === r && !o) throw new TypeError('Private accessor was defined without a setter')
    if ('function' == typeof t ? e !== t || !o : !t.has(e))
      throw new TypeError('Cannot write private member to an object whose class did not declare it')
    return 'a' === r ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
  }
  function x(e, t) {
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      throw new TypeError("Cannot use 'in' operator on non-object")
    return 'function' == typeof e ? t === e : e.has(t)
  }
  function V(e, t, n) {
    if (null != t) {
      if ('object' != typeof t && 'function' != typeof t) throw new TypeError('Object expected.')
      var r, o
      if (n) {
        if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.')
        r = t[Symbol.asyncDispose]
      }
      if (void 0 === r) {
        if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.')
        ;(r = t[Symbol.dispose]), n && (o = r)
      }
      if ('function' != typeof r) throw new TypeError('Object not disposable.')
      o &&
        (r = function () {
          try {
            o.call(this)
          } catch (e) {
            return Promise.reject(e)
          }
        }),
        e.stack.push({ value: t, dispose: r, async: n })
    } else n && e.stack.push({ async: !0 })
    return t
  }
  var G =
    'function' == typeof SuppressedError
      ? SuppressedError
      : function (e, t, n) {
          var r = new Error(n)
          return (r.name = 'SuppressedError'), (r.error = e), (r.suppressed = t), r
        }
  function B(e) {
    function t(t) {
      ;(e.error = e.hasError ? new G(t, e.error, 'An error was suppressed during disposal.') : t),
        (e.hasError = !0)
    }
    var n,
      r = 0
    return (function o() {
      for (; (n = e.stack.pop()); )
        try {
          if (!n.async && 1 === r) return (r = 0), e.stack.push(n), Promise.resolve().then(o)
          if (n.dispose) {
            var i = n.dispose.call(n.value)
            if (n.async)
              return (
                (r |= 2),
                Promise.resolve(i).then(o, function (e) {
                  return t(e), o()
                })
              )
          } else r |= 1
        } catch (e) {
          t(e)
        }
      if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve()
      if (e.hasError) throw e.error
    })()
  }
  function k(e, t) {
    return 'string' == typeof e && /^\.\.?\//.test(e)
      ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (e, n, r, o, i) {
          return n
            ? t
              ? '.jsx'
              : '.js'
            : !r || (o && i)
              ? r + o + '.' + i.toLowerCase() + 'js'
              : e
        })
      : e
  }
  var F = {
      __extends: s,
      __assign: a,
      __rest: c,
      __decorate: _,
      __param: u,
      __esDecorate: E,
      __runInitializers: l,
      __propKey: T,
      __setFunctionName: p,
      __metadata: d,
      __awaiter: S,
      __generator: f,
      __createBinding: A,
      __exportStar: h,
      __values: m,
      __read: R,
      __spread: g,
      __spreadArrays: O,
      __spreadArray: v,
      __await: I,
      __asyncGenerator: N,
      __asyncDelegator: y,
      __asyncValues: C,
      __makeTemplateObject: L,
      __importStar: P,
      __importDefault: U,
      __classPrivateFieldGet: D,
      __classPrivateFieldSet: w,
      __classPrivateFieldIn: x,
      __addDisposableResource: V,
      __disposeResources: B,
      __rewriteRelativeImportExtension: k,
    },
    H = n(
      Object.freeze({
        __proto__: null,
        __addDisposableResource: V,
        get __assign() {
          return a
        },
        __asyncDelegator: y,
        __asyncGenerator: N,
        __asyncValues: C,
        __await: I,
        __awaiter: S,
        __classPrivateFieldGet: D,
        __classPrivateFieldIn: x,
        __classPrivateFieldSet: w,
        __createBinding: A,
        __decorate: _,
        __disposeResources: B,
        __esDecorate: E,
        __exportStar: h,
        __extends: s,
        __generator: f,
        __importDefault: U,
        __importStar: P,
        __makeTemplateObject: L,
        __metadata: d,
        __param: u,
        __propKey: T,
        __read: R,
        __rest: c,
        __rewriteRelativeImportExtension: k,
        __runInitializers: l,
        __setFunctionName: p,
        __spread: g,
        __spreadArray: v,
        __spreadArrays: O,
        __values: m,
        default: F,
      }),
    ),
    Y = {},
    j =
      'object' == typeof globalThis
        ? globalThis
        : 'object' == typeof self
          ? self
          : 'object' == typeof window
            ? window
            : 'object' == typeof global
              ? global
              : {},
    K = '1.9.0',
    W = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/
  var q = (function (e) {
      var t = new Set([e]),
        n = new Set(),
        r = e.match(W)
      if (!r)
        return function () {
          return !1
        }
      var o = +r[1],
        i = +r[2],
        s = +r[3]
      if (null != r[4])
        return function (t) {
          return t === e
        }
      function a(e) {
        return n.add(e), !1
      }
      function c(e) {
        return t.add(e), !0
      }
      return function (e) {
        if (t.has(e)) return !0
        if (n.has(e)) return !1
        var r = e.match(W)
        if (!r) return a(e)
        var _ = +r[1],
          u = +r[2],
          E = +r[3]
        return null != r[4] || o !== _
          ? a(e)
          : 0 === o
            ? i === u && s <= E
              ? c(e)
              : a(e)
            : i <= u
              ? c(e)
              : a(e)
      }
    })(K),
    Q = K.split('.')[0],
    z = Symbol.for('opentelemetry.js.api.' + Q),
    $ = j
  function X(e, t, n, r) {
    var o
    void 0 === r && (r = !1)
    var i = ($[z] = null !== (o = $[z]) && void 0 !== o ? o : { version: K })
    if (!r && i[e]) {
      var s = new Error('@opentelemetry/api: Attempted duplicate registration of API: ' + e)
      return n.error(s.stack || s.message), !1
    }
    if (i.version !== K) {
      s = new Error(
        '@opentelemetry/api: Registration of version v' +
          i.version +
          ' for ' +
          e +
          ' does not match previously registered API v' +
          K,
      )
      return n.error(s.stack || s.message), !1
    }
    return (
      (i[e] = t), n.debug('@opentelemetry/api: Registered a global for ' + e + ' v' + K + '.'), !0
    )
  }
  function J(e) {
    var t,
      n,
      r = null === (t = $[z]) || void 0 === t ? void 0 : t.version
    if (r && q(r)) return null === (n = $[z]) || void 0 === n ? void 0 : n[e]
  }
  function Z(e, t) {
    t.debug('@opentelemetry/api: Unregistering a global for ' + e + ' v' + K + '.')
    var n = $[z]
    n && delete n[e]
  }
  var ee,
    te = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    ne = function (e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; o < i; o++)
          (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
      return e.concat(r || Array.prototype.slice.call(t))
    },
    re = (function () {
      function e(e) {
        this._namespace = e.namespace || 'DiagComponentLogger'
      }
      return (
        (e.prototype.debug = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return oe('debug', this._namespace, e)
        }),
        (e.prototype.error = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return oe('error', this._namespace, e)
        }),
        (e.prototype.info = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return oe('info', this._namespace, e)
        }),
        (e.prototype.warn = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return oe('warn', this._namespace, e)
        }),
        (e.prototype.verbose = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return oe('verbose', this._namespace, e)
        }),
        e
      )
    })()
  function oe(e, t, n) {
    var r = J('diag')
    if (r) return n.unshift(t), r[e].apply(r, ne([], te(n), !1))
  }
  !(function (e) {
    ;(e[(e.NONE = 0)] = 'NONE'),
      (e[(e.ERROR = 30)] = 'ERROR'),
      (e[(e.WARN = 50)] = 'WARN'),
      (e[(e.INFO = 60)] = 'INFO'),
      (e[(e.DEBUG = 70)] = 'DEBUG'),
      (e[(e.VERBOSE = 80)] = 'VERBOSE'),
      (e[(e.ALL = 9999)] = 'ALL')
  })(ee || (ee = {}))
  var ie = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    se = function (e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; o < i; o++)
          (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
      return e.concat(r || Array.prototype.slice.call(t))
    },
    ae = (function () {
      function e() {
        function e(e) {
          return function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
            var r = J('diag')
            if (r) return r[e].apply(r, se([], ie(t), !1))
          }
        }
        var t = this
        ;(t.setLogger = function (e, n) {
          var r, o, i
          if ((void 0 === n && (n = { logLevel: ee.INFO }), e === t)) {
            var s = new Error(
              'Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation',
            )
            return t.error(null !== (r = s.stack) && void 0 !== r ? r : s.message), !1
          }
          'number' == typeof n && (n = { logLevel: n })
          var a = J('diag'),
            c = (function (e, t) {
              function n(n, r) {
                var o = t[n]
                return 'function' == typeof o && e >= r ? o.bind(t) : function () {}
              }
              return (
                e < ee.NONE ? (e = ee.NONE) : e > ee.ALL && (e = ee.ALL),
                (t = t || {}),
                {
                  error: n('error', ee.ERROR),
                  warn: n('warn', ee.WARN),
                  info: n('info', ee.INFO),
                  debug: n('debug', ee.DEBUG),
                  verbose: n('verbose', ee.VERBOSE),
                }
              )
            })(null !== (o = n.logLevel) && void 0 !== o ? o : ee.INFO, e)
          if (a && !n.suppressOverrideMessage) {
            var _ =
              null !== (i = new Error().stack) && void 0 !== i
                ? i
                : '<failed to generate stacktrace>'
            a.warn('Current logger will be overwritten from ' + _),
              c.warn('Current logger will overwrite one already registered from ' + _)
          }
          return X('diag', c, t, !0)
        }),
          (t.disable = function () {
            Z('diag', t)
          }),
          (t.createComponentLogger = function (e) {
            return new re(e)
          }),
          (t.verbose = e('verbose')),
          (t.debug = e('debug')),
          (t.info = e('info')),
          (t.warn = e('warn')),
          (t.error = e('error'))
      }
      return (
        (e.instance = function () {
          return this._instance || (this._instance = new e()), this._instance
        }),
        e
      )
    })(),
    ce = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    _e = function (e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0
      if (n) return n.call(e)
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          },
        }
      throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    },
    ue = (function () {
      function e(e) {
        this._entries = e ? new Map(e) : new Map()
      }
      return (
        (e.prototype.getEntry = function (e) {
          var t = this._entries.get(e)
          if (t) return Object.assign({}, t)
        }),
        (e.prototype.getAllEntries = function () {
          return Array.from(this._entries.entries()).map(function (e) {
            var t = ce(e, 2)
            return [t[0], t[1]]
          })
        }),
        (e.prototype.setEntry = function (t, n) {
          var r = new e(this._entries)
          return r._entries.set(t, n), r
        }),
        (e.prototype.removeEntry = function (t) {
          var n = new e(this._entries)
          return n._entries.delete(t), n
        }),
        (e.prototype.removeEntries = function () {
          for (var t, n, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o]
          var i = new e(this._entries)
          try {
            for (var s = _e(r), a = s.next(); !a.done; a = s.next()) {
              var c = a.value
              i._entries.delete(c)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              a && !a.done && (n = s.return) && n.call(s)
            } finally {
              if (t) throw t.error
            }
          }
          return i
        }),
        (e.prototype.clear = function () {
          return new e()
        }),
        e
      )
    })(),
    Ee = Symbol('BaggageEntryMetadata'),
    le = ae.instance()
  function Te(e) {
    return void 0 === e && (e = {}), new ue(new Map(Object.entries(e)))
  }
  function pe(e) {
    return (
      'string' != typeof e &&
        (le.error('Cannot create baggage metadata from unknown type: ' + typeof e), (e = '')),
      {
        __TYPE__: Ee,
        toString: function () {
          return e
        },
      }
    )
  }
  function de(e) {
    return Symbol.for(e)
  }
  var Se,
    fe = function e(t) {
      var n = this
      ;(n._currentContext = t ? new Map(t) : new Map()),
        (n.getValue = function (e) {
          return n._currentContext.get(e)
        }),
        (n.setValue = function (t, r) {
          var o = new e(n._currentContext)
          return o._currentContext.set(t, r), o
        }),
        (n.deleteValue = function (t) {
          var r = new e(n._currentContext)
          return r._currentContext.delete(t), r
        })
    },
    Ae = new fe(),
    he = [
      { n: 'error', c: 'error' },
      { n: 'warn', c: 'warn' },
      { n: 'info', c: 'info' },
      { n: 'debug', c: 'debug' },
      { n: 'verbose', c: 'trace' },
    ],
    me = function () {
      function e(e) {
        return function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          if (console) {
            var r = console[e]
            if (('function' != typeof r && (r = console.log), 'function' == typeof r))
              return r.apply(console, t)
          }
        }
      }
      for (var t = 0; t < he.length; t++) this[he[t].n] = e(he[t].c)
    },
    Re = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    ge = (function () {
      function e() {}
      return (
        (e.prototype.createGauge = function (e, t) {
          return De
        }),
        (e.prototype.createHistogram = function (e, t) {
          return we
        }),
        (e.prototype.createCounter = function (e, t) {
          return Ue
        }),
        (e.prototype.createUpDownCounter = function (e, t) {
          return xe
        }),
        (e.prototype.createObservableGauge = function (e, t) {
          return Ge
        }),
        (e.prototype.createObservableCounter = function (e, t) {
          return Ve
        }),
        (e.prototype.createObservableUpDownCounter = function (e, t) {
          return Be
        }),
        (e.prototype.addBatchObservableCallback = function (e, t) {}),
        (e.prototype.removeBatchObservableCallback = function (e) {}),
        e
      )
    })(),
    Oe = function () {},
    ve = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return Re(t, e), (t.prototype.add = function (e, t) {}), t
    })(Oe),
    Ie = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return Re(t, e), (t.prototype.add = function (e, t) {}), t
    })(Oe),
    Ne = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return Re(t, e), (t.prototype.record = function (e, t) {}), t
    })(Oe),
    ye = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return Re(t, e), (t.prototype.record = function (e, t) {}), t
    })(Oe),
    Ce = (function () {
      function e() {}
      return (
        (e.prototype.addCallback = function (e) {}),
        (e.prototype.removeCallback = function (e) {}),
        e
      )
    })(),
    Le = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return Re(t, e), t
    })(Ce),
    be = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return Re(t, e), t
    })(Ce),
    Me = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return Re(t, e), t
    })(Ce),
    Pe = new ge(),
    Ue = new ve(),
    De = new Ne(),
    we = new ye(),
    xe = new Ie(),
    Ve = new Le(),
    Ge = new be(),
    Be = new Me()
  !(function (e) {
    ;(e[(e.INT = 0)] = 'INT'), (e[(e.DOUBLE = 1)] = 'DOUBLE')
  })(Se || (Se = {}))
  var ke,
    Fe = {
      get: function (e, t) {
        if (null != e) return e[t]
      },
      keys: function (e) {
        return null == e ? [] : Object.keys(e)
      },
    },
    He = {
      set: function (e, t, n) {
        null != e && (e[t] = n)
      },
    },
    Ye = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    je = function (e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; o < i; o++)
          (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
      return e.concat(r || Array.prototype.slice.call(t))
    },
    Ke = (function () {
      function e() {}
      return (
        (e.prototype.active = function () {
          return Ae
        }),
        (e.prototype.with = function (e, t, n) {
          for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o]
          return t.call.apply(t, je([n], Ye(r), !1))
        }),
        (e.prototype.bind = function (e, t) {
          return t
        }),
        (e.prototype.enable = function () {
          return this
        }),
        (e.prototype.disable = function () {
          return this
        }),
        e
      )
    })(),
    We = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    qe = function (e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; o < i; o++)
          (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
      return e.concat(r || Array.prototype.slice.call(t))
    },
    Qe = 'context',
    ze = new Ke(),
    $e = (function () {
      function e() {}
      return (
        (e.getInstance = function () {
          return this._instance || (this._instance = new e()), this._instance
        }),
        (e.prototype.setGlobalContextManager = function (e) {
          return X(Qe, e, ae.instance())
        }),
        (e.prototype.active = function () {
          return this._getContextManager().active()
        }),
        (e.prototype.with = function (e, t, n) {
          for (var r, o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i]
          return (r = this._getContextManager()).with.apply(r, qe([e, t, n], We(o), !1))
        }),
        (e.prototype.bind = function (e, t) {
          return this._getContextManager().bind(e, t)
        }),
        (e.prototype._getContextManager = function () {
          return J(Qe) || ze
        }),
        (e.prototype.disable = function () {
          this._getContextManager().disable(), Z(Qe, ae.instance())
        }),
        e
      )
    })()
  !(function (e) {
    ;(e[(e.NONE = 0)] = 'NONE'), (e[(e.SAMPLED = 1)] = 'SAMPLED')
  })(ke || (ke = {}))
  var Xe = '0000000000000000',
    Je = '00000000000000000000000000000000',
    Ze = { traceId: Je, spanId: Xe, traceFlags: ke.NONE },
    et = (function () {
      function e(e) {
        void 0 === e && (e = Ze), (this._spanContext = e)
      }
      return (
        (e.prototype.spanContext = function () {
          return this._spanContext
        }),
        (e.prototype.setAttribute = function (e, t) {
          return this
        }),
        (e.prototype.setAttributes = function (e) {
          return this
        }),
        (e.prototype.addEvent = function (e, t) {
          return this
        }),
        (e.prototype.addLink = function (e) {
          return this
        }),
        (e.prototype.addLinks = function (e) {
          return this
        }),
        (e.prototype.setStatus = function (e) {
          return this
        }),
        (e.prototype.updateName = function (e) {
          return this
        }),
        (e.prototype.end = function (e) {}),
        (e.prototype.isRecording = function () {
          return !1
        }),
        (e.prototype.recordException = function (e, t) {}),
        e
      )
    })(),
    tt = de('OpenTelemetry Context Key SPAN')
  function nt(e) {
    return e.getValue(tt) || void 0
  }
  function rt() {
    return nt($e.getInstance().active())
  }
  function ot(e, t) {
    return e.setValue(tt, t)
  }
  function it(e) {
    return e.deleteValue(tt)
  }
  function st(e, t) {
    return ot(e, new et(t))
  }
  function at(e) {
    var t
    return null === (t = nt(e)) || void 0 === t ? void 0 : t.spanContext()
  }
  var ct = /^([0-9a-f]{32})$/i,
    _t = /^[0-9a-f]{16}$/i
  function ut(e) {
    return ct.test(e) && e !== Je
  }
  function Et(e) {
    return _t.test(e) && e !== Xe
  }
  function lt(e) {
    return ut(e.traceId) && Et(e.spanId)
  }
  function Tt(e) {
    return new et(e)
  }
  var pt = $e.getInstance(),
    dt = (function () {
      function e() {}
      return (
        (e.prototype.startSpan = function (e, t, n) {
          if ((void 0 === n && (n = pt.active()), Boolean(null == t ? void 0 : t.root)))
            return new et()
          var r,
            o = n && at(n)
          return 'object' == typeof (r = o) &&
            'string' == typeof r.spanId &&
            'string' == typeof r.traceId &&
            'number' == typeof r.traceFlags &&
            lt(o)
            ? new et(o)
            : new et()
        }),
        (e.prototype.startActiveSpan = function (e, t, n, r) {
          var o, i, s
          if (!(arguments.length < 2)) {
            2 === arguments.length
              ? (s = t)
              : 3 === arguments.length
                ? ((o = t), (s = n))
                : ((o = t), (i = n), (s = r))
            var a = null != i ? i : pt.active(),
              c = this.startSpan(e, o, a),
              _ = ot(a, c)
            return pt.with(_, s, void 0, c)
          }
        }),
        e
      )
    })()
  var St,
    ft,
    At,
    ht = new dt(),
    mt = (function () {
      function e(e, t, n, r) {
        ;(this._provider = e), (this.name = t), (this.version = n), (this.options = r)
      }
      return (
        (e.prototype.startSpan = function (e, t, n) {
          return this._getTracer().startSpan(e, t, n)
        }),
        (e.prototype.startActiveSpan = function (e, t, n, r) {
          var o = this._getTracer()
          return Reflect.apply(o.startActiveSpan, o, arguments)
        }),
        (e.prototype._getTracer = function () {
          if (this._delegate) return this._delegate
          var e = this._provider.getDelegateTracer(this.name, this.version, this.options)
          return e ? ((this._delegate = e), this._delegate) : ht
        }),
        e
      )
    })(),
    Rt = new ((function () {
      function e() {}
      return (
        (e.prototype.getTracer = function (e, t, n) {
          return new dt()
        }),
        e
      )
    })())(),
    gt = (function () {
      function e() {}
      return (
        (e.prototype.getTracer = function (e, t, n) {
          var r
          return null !== (r = this.getDelegateTracer(e, t, n)) && void 0 !== r
            ? r
            : new mt(this, e, t, n)
        }),
        (e.prototype.getDelegate = function () {
          var e
          return null !== (e = this._delegate) && void 0 !== e ? e : Rt
        }),
        (e.prototype.setDelegate = function (e) {
          this._delegate = e
        }),
        (e.prototype.getDelegateTracer = function (e, t, n) {
          var r
          return null === (r = this._delegate) || void 0 === r ? void 0 : r.getTracer(e, t, n)
        }),
        e
      )
    })()
  !(function (e) {
    ;(e[(e.NOT_RECORD = 0)] = 'NOT_RECORD'),
      (e[(e.RECORD = 1)] = 'RECORD'),
      (e[(e.RECORD_AND_SAMPLED = 2)] = 'RECORD_AND_SAMPLED')
  })(St || (St = {})),
    (function (e) {
      ;(e[(e.INTERNAL = 0)] = 'INTERNAL'),
        (e[(e.SERVER = 1)] = 'SERVER'),
        (e[(e.CLIENT = 2)] = 'CLIENT'),
        (e[(e.PRODUCER = 3)] = 'PRODUCER'),
        (e[(e.CONSUMER = 4)] = 'CONSUMER')
    })(ft || (ft = {})),
    (function (e) {
      ;(e[(e.UNSET = 0)] = 'UNSET'), (e[(e.OK = 1)] = 'OK'), (e[(e.ERROR = 2)] = 'ERROR')
    })(At || (At = {}))
  var Ot = '[_0-9a-z-*/]',
    vt = new RegExp(
      '^(?:' +
        ('[a-z]' + Ot + '{0,255}') +
        '|' +
        ('[a-z0-9]' + Ot + '{0,240}@[a-z]' + Ot + '{0,13}') +
        ')$',
    ),
    It = /^[ -~]{0,255}[!-~]$/,
    Nt = /,|=/
  var yt = (function () {
    function e(e) {
      ;(this._internalState = new Map()), e && this._parse(e)
    }
    return (
      (e.prototype.set = function (e, t) {
        var n = this._clone()
        return n._internalState.has(e) && n._internalState.delete(e), n._internalState.set(e, t), n
      }),
      (e.prototype.unset = function (e) {
        var t = this._clone()
        return t._internalState.delete(e), t
      }),
      (e.prototype.get = function (e) {
        return this._internalState.get(e)
      }),
      (e.prototype.serialize = function () {
        var e = this
        return this._keys()
          .reduce(function (t, n) {
            return t.push(n + '=' + e.get(n)), t
          }, [])
          .join(',')
      }),
      (e.prototype._parse = function (e) {
        e.length > 512 ||
          ((this._internalState = e
            .split(',')
            .reverse()
            .reduce(function (e, t) {
              var n = t.trim(),
                r = n.indexOf('=')
              if (-1 !== r) {
                var o = n.slice(0, r),
                  i = n.slice(r + 1, t.length)
                ;(function (e) {
                  return vt.test(e)
                })(o) &&
                  (function (e) {
                    return It.test(e) && !Nt.test(e)
                  })(i) &&
                  e.set(o, i)
              }
              return e
            }, new Map())),
          this._internalState.size > 32 &&
            (this._internalState = new Map(
              Array.from(this._internalState.entries()).reverse().slice(0, 32),
            )))
      }),
      (e.prototype._keys = function () {
        return Array.from(this._internalState.keys()).reverse()
      }),
      (e.prototype._clone = function () {
        var t = new e()
        return (t._internalState = new Map(this._internalState)), t
      }),
      e
    )
  })()
  var Ct = $e.getInstance(),
    Lt = ae.instance(),
    bt = new ((function () {
      function e() {}
      return (
        (e.prototype.getMeter = function (e, t, n) {
          return Pe
        }),
        e
      )
    })())(),
    Mt = 'metrics',
    Pt = (function () {
      function e() {}
      return (
        (e.getInstance = function () {
          return this._instance || (this._instance = new e()), this._instance
        }),
        (e.prototype.setGlobalMeterProvider = function (e) {
          return X(Mt, e, ae.instance())
        }),
        (e.prototype.getMeterProvider = function () {
          return J(Mt) || bt
        }),
        (e.prototype.getMeter = function (e, t, n) {
          return this.getMeterProvider().getMeter(e, t, n)
        }),
        (e.prototype.disable = function () {
          Z(Mt, ae.instance())
        }),
        e
      )
    })(),
    Ut = Pt.getInstance(),
    Dt = (function () {
      function e() {}
      return (
        (e.prototype.inject = function (e, t) {}),
        (e.prototype.extract = function (e, t) {
          return e
        }),
        (e.prototype.fields = function () {
          return []
        }),
        e
      )
    })(),
    wt = de('OpenTelemetry Baggage Key')
  function xt(e) {
    return e.getValue(wt) || void 0
  }
  function Vt() {
    return xt($e.getInstance().active())
  }
  function Gt(e, t) {
    return e.setValue(wt, t)
  }
  function Bt(e) {
    return e.deleteValue(wt)
  }
  var kt,
    Ft = 'propagation',
    Ht = new Dt(),
    Yt = (function () {
      function e() {
        ;(this.createBaggage = Te),
          (this.getBaggage = xt),
          (this.getActiveBaggage = Vt),
          (this.setBaggage = Gt),
          (this.deleteBaggage = Bt)
      }
      return (
        (e.getInstance = function () {
          return this._instance || (this._instance = new e()), this._instance
        }),
        (e.prototype.setGlobalPropagator = function (e) {
          return X(Ft, e, ae.instance())
        }),
        (e.prototype.inject = function (e, t, n) {
          return void 0 === n && (n = He), this._getGlobalPropagator().inject(e, t, n)
        }),
        (e.prototype.extract = function (e, t, n) {
          return void 0 === n && (n = Fe), this._getGlobalPropagator().extract(e, t, n)
        }),
        (e.prototype.fields = function () {
          return this._getGlobalPropagator().fields()
        }),
        (e.prototype.disable = function () {
          Z(Ft, ae.instance())
        }),
        (e.prototype._getGlobalPropagator = function () {
          return J(Ft) || Ht
        }),
        e
      )
    })(),
    jt = Yt.getInstance(),
    Kt = 'trace',
    Wt = (function () {
      function e() {
        ;(this._proxyTracerProvider = new gt()),
          (this.wrapSpanContext = Tt),
          (this.isSpanContextValid = lt),
          (this.deleteSpan = it),
          (this.getSpan = nt),
          (this.getActiveSpan = rt),
          (this.getSpanContext = at),
          (this.setSpan = ot),
          (this.setSpanContext = st)
      }
      return (
        (e.getInstance = function () {
          return this._instance || (this._instance = new e()), this._instance
        }),
        (e.prototype.setGlobalTracerProvider = function (e) {
          var t = X(Kt, this._proxyTracerProvider, ae.instance())
          return t && this._proxyTracerProvider.setDelegate(e), t
        }),
        (e.prototype.getTracerProvider = function () {
          return J(Kt) || this._proxyTracerProvider
        }),
        (e.prototype.getTracer = function (e, t) {
          return this.getTracerProvider().getTracer(e, t)
        }),
        (e.prototype.disable = function () {
          Z(Kt, ae.instance()), (this._proxyTracerProvider = new gt())
        }),
        e
      )
    })(),
    qt = Wt.getInstance(),
    Qt = { context: Ct, diag: Lt, metrics: Ut, propagation: jt, trace: qt },
    zt = n(
      Object.freeze({
        __proto__: null,
        DiagConsoleLogger: me,
        get DiagLogLevel() {
          return ee
        },
        INVALID_SPANID: Xe,
        INVALID_SPAN_CONTEXT: Ze,
        INVALID_TRACEID: Je,
        ProxyTracer: mt,
        ProxyTracerProvider: gt,
        ROOT_CONTEXT: Ae,
        get SamplingDecision() {
          return St
        },
        get SpanKind() {
          return ft
        },
        get SpanStatusCode() {
          return At
        },
        get TraceFlags() {
          return ke
        },
        get ValueType() {
          return Se
        },
        baggageEntryMetadataFromString: pe,
        context: Ct,
        createContextKey: de,
        createNoopMeter: function () {
          return Pe
        },
        createTraceState: function (e) {
          return new yt(e)
        },
        default: Qt,
        defaultTextMapGetter: Fe,
        defaultTextMapSetter: He,
        diag: Lt,
        isSpanContextValid: lt,
        isValidSpanId: Et,
        isValidTraceId: ut,
        metrics: Ut,
        propagation: jt,
        trace: qt,
      }),
    ),
    $t = {}
  function Xt(e) {
    for (var t = {}, n = e.length, r = 0; r < n; r++) {
      var o = e[r]
      o && (t[String(o).toUpperCase().replace(/[-.]/g, '_')] = o)
    }
    return t
  }
  var Jt = 'aws.lambda.invoked_arn',
    Zt = 'db.system',
    en = 'db.connection_string',
    tn = 'db.user',
    nn = 'db.jdbc.driver_classname',
    rn = 'db.name',
    on = 'db.statement',
    sn = 'db.operation',
    an = 'db.mssql.instance_name',
    cn = 'db.cassandra.keyspace',
    _n = 'db.cassandra.page_size',
    un = 'db.cassandra.consistency_level',
    En = 'db.cassandra.table',
    ln = 'db.cassandra.idempotence',
    Tn = 'db.cassandra.speculative_execution_count',
    pn = 'db.cassandra.coordinator.id',
    dn = 'db.cassandra.coordinator.dc',
    Sn = 'db.hbase.namespace',
    fn = 'db.redis.database_index',
    An = 'db.mongodb.collection',
    hn = 'db.sql.table',
    mn = 'exception.type',
    Rn = 'exception.message',
    gn = 'exception.stacktrace',
    On = 'exception.escaped',
    vn = 'faas.trigger',
    In = 'faas.execution',
    Nn = 'faas.document.collection',
    yn = 'faas.document.operation',
    Cn = 'faas.document.time',
    Ln = 'faas.document.name',
    bn = 'faas.time',
    Mn = 'faas.cron',
    Pn = 'faas.coldstart',
    Un = 'faas.invoked_name',
    Dn = 'faas.invoked_provider',
    wn = 'faas.invoked_region',
    xn = 'net.transport',
    Vn = 'net.peer.ip',
    Gn = 'net.peer.port',
    Bn = 'net.peer.name',
    kn = 'net.host.ip',
    Fn = 'net.host.port',
    Hn = 'net.host.name',
    Yn = 'net.host.connection.type',
    jn = 'net.host.connection.subtype',
    Kn = 'net.host.carrier.name',
    Wn = 'net.host.carrier.mcc',
    qn = 'net.host.carrier.mnc',
    Qn = 'net.host.carrier.icc',
    zn = 'peer.service',
    $n = 'enduser.id',
    Xn = 'enduser.role',
    Jn = 'enduser.scope',
    Zn = 'thread.id',
    er = 'thread.name',
    tr = 'code.function',
    nr = 'code.namespace',
    rr = 'code.filepath',
    or = 'code.lineno',
    ir = 'http.method',
    sr = 'http.url',
    ar = 'http.target',
    cr = 'http.host',
    _r = 'http.scheme',
    ur = 'http.status_code',
    Er = 'http.flavor',
    lr = 'http.user_agent',
    Tr = 'http.request_content_length',
    pr = 'http.request_content_length_uncompressed',
    dr = 'http.response_content_length',
    Sr = 'http.response_content_length_uncompressed',
    fr = 'http.server_name',
    Ar = 'http.route',
    hr = 'http.client_ip',
    mr = 'aws.dynamodb.table_names',
    Rr = 'aws.dynamodb.consumed_capacity',
    gr = 'aws.dynamodb.item_collection_metrics',
    Or = 'aws.dynamodb.provisioned_read_capacity',
    vr = 'aws.dynamodb.provisioned_write_capacity',
    Ir = 'aws.dynamodb.consistent_read',
    Nr = 'aws.dynamodb.projection',
    yr = 'aws.dynamodb.limit',
    Cr = 'aws.dynamodb.attributes_to_get',
    Lr = 'aws.dynamodb.index_name',
    br = 'aws.dynamodb.select',
    Mr = 'aws.dynamodb.global_secondary_indexes',
    Pr = 'aws.dynamodb.local_secondary_indexes',
    Ur = 'aws.dynamodb.exclusive_start_table',
    Dr = 'aws.dynamodb.table_count',
    wr = 'aws.dynamodb.scan_forward',
    xr = 'aws.dynamodb.segment',
    Vr = 'aws.dynamodb.total_segments',
    Gr = 'aws.dynamodb.count',
    Br = 'aws.dynamodb.scanned_count',
    kr = 'aws.dynamodb.attribute_definitions',
    Fr = 'aws.dynamodb.global_secondary_index_updates',
    Hr = 'messaging.system',
    Yr = 'messaging.destination',
    jr = 'messaging.destination_kind',
    Kr = 'messaging.temp_destination',
    Wr = 'messaging.protocol',
    qr = 'messaging.protocol_version',
    Qr = 'messaging.url',
    zr = 'messaging.message_id',
    $r = 'messaging.conversation_id',
    Xr = 'messaging.message_payload_size_bytes',
    Jr = 'messaging.message_payload_compressed_size_bytes',
    Zr = 'messaging.operation',
    eo = 'messaging.consumer_id',
    to = 'messaging.rabbitmq.routing_key',
    no = 'messaging.kafka.message_key',
    ro = 'messaging.kafka.consumer_group',
    oo = 'messaging.kafka.client_id',
    io = 'messaging.kafka.partition',
    so = 'messaging.kafka.tombstone',
    ao = 'rpc.system',
    co = 'rpc.service',
    _o = 'rpc.method',
    uo = 'rpc.grpc.status_code',
    Eo = 'rpc.jsonrpc.version',
    lo = 'rpc.jsonrpc.request_id',
    To = 'rpc.jsonrpc.error_code',
    po = 'rpc.jsonrpc.error_message',
    So = 'message.type',
    fo = 'message.id',
    Ao = 'message.compressed_size',
    ho = 'message.uncompressed_size',
    mo = Jt,
    Ro = Zt,
    go = en,
    Oo = tn,
    vo = nn,
    Io = rn,
    No = on,
    yo = sn,
    Co = an,
    Lo = cn,
    bo = _n,
    Mo = un,
    Po = En,
    Uo = ln,
    Do = Tn,
    wo = pn,
    xo = dn,
    Vo = Sn,
    Go = fn,
    Bo = An,
    ko = hn,
    Fo = mn,
    Ho = Rn,
    Yo = gn,
    jo = On,
    Ko = vn,
    Wo = In,
    qo = Nn,
    Qo = yn,
    zo = Cn,
    $o = Ln,
    Xo = bn,
    Jo = Mn,
    Zo = Pn,
    ei = Un,
    ti = Dn,
    ni = wn,
    ri = xn,
    oi = Vn,
    ii = Gn,
    si = Bn,
    ai = kn,
    ci = Fn,
    _i = Hn,
    ui = Yn,
    Ei = jn,
    li = Kn,
    Ti = Wn,
    pi = qn,
    di = Qn,
    Si = zn,
    fi = $n,
    Ai = Xn,
    hi = Jn,
    mi = Zn,
    Ri = er,
    gi = tr,
    Oi = nr,
    vi = rr,
    Ii = or,
    Ni = ir,
    yi = sr,
    Ci = ar,
    Li = cr,
    bi = _r,
    Mi = ur,
    Pi = Er,
    Ui = lr,
    Di = Tr,
    wi = pr,
    xi = dr,
    Vi = Sr,
    Gi = fr,
    Bi = Ar,
    ki = hr,
    Fi = mr,
    Hi = Rr,
    Yi = gr,
    ji = Or,
    Ki = vr,
    Wi = Ir,
    qi = Nr,
    Qi = yr,
    zi = Cr,
    $i = Lr,
    Xi = br,
    Ji = Mr,
    Zi = Pr,
    es = Ur,
    ts = Dr,
    ns = wr,
    rs = xr,
    os = Vr,
    is = Gr,
    ss = Br,
    as = kr,
    cs = Fr,
    _s = Hr,
    us = Yr,
    Es = jr,
    ls = Kr,
    Ts = Wr,
    ps = qr,
    ds = Qr,
    Ss = zr,
    fs = $r,
    As = Xr,
    hs = Jr,
    ms = Zr,
    Rs = eo,
    gs = to,
    Os = no,
    vs = ro,
    Is = oo,
    Ns = io,
    ys = so,
    Cs = ao,
    Ls = co,
    bs = _o,
    Ms = uo,
    Ps = Eo,
    Us = lo,
    Ds = To,
    ws = po,
    xs = So,
    Vs = fo,
    Gs = Ao,
    Bs = ho,
    ks = Xt([
      Jt,
      Zt,
      en,
      tn,
      nn,
      rn,
      on,
      sn,
      an,
      cn,
      _n,
      un,
      En,
      ln,
      Tn,
      pn,
      dn,
      Sn,
      fn,
      An,
      hn,
      mn,
      Rn,
      gn,
      On,
      vn,
      In,
      Nn,
      yn,
      Cn,
      Ln,
      bn,
      Mn,
      Pn,
      Un,
      Dn,
      wn,
      xn,
      Vn,
      Gn,
      Bn,
      kn,
      Fn,
      Hn,
      Yn,
      jn,
      Kn,
      Wn,
      qn,
      Qn,
      zn,
      $n,
      Xn,
      Jn,
      Zn,
      er,
      tr,
      nr,
      rr,
      or,
      ir,
      sr,
      ar,
      cr,
      _r,
      ur,
      Er,
      lr,
      Tr,
      pr,
      dr,
      Sr,
      fr,
      Ar,
      hr,
      mr,
      Rr,
      gr,
      Or,
      vr,
      Ir,
      Nr,
      yr,
      Cr,
      Lr,
      br,
      Mr,
      Pr,
      Ur,
      Dr,
      wr,
      xr,
      Vr,
      Gr,
      Br,
      kr,
      Fr,
      Hr,
      Yr,
      jr,
      Kr,
      Wr,
      qr,
      Qr,
      zr,
      $r,
      Xr,
      Jr,
      Zr,
      eo,
      to,
      no,
      ro,
      oo,
      io,
      so,
      ao,
      co,
      _o,
      uo,
      Eo,
      lo,
      To,
      po,
      So,
      fo,
      Ao,
      ho,
    ]),
    Fs = 'other_sql',
    Hs = 'mssql',
    Ys = 'mysql',
    js = 'oracle',
    Ks = 'postgresql',
    Ws = 'redshift',
    qs = 'hive',
    Qs = 'cloudscape',
    zs = 'hsqldb',
    $s = 'progress',
    Xs = 'maxdb',
    Js = 'hanadb',
    Zs = 'ingres',
    ea = 'firstsql',
    ta = 'cache',
    na = 'adabas',
    ra = 'firebird',
    oa = 'derby',
    ia = 'filemaker',
    sa = 'informix',
    aa = 'instantdb',
    ca = 'interbase',
    _a = 'mariadb',
    ua = 'netezza',
    Ea = 'pervasive',
    la = 'pointbase',
    Ta = 'sqlite',
    pa = 'sybase',
    da = 'teradata',
    Sa = 'vertica',
    fa = 'coldfusion',
    Aa = 'cassandra',
    ha = 'hbase',
    ma = 'mongodb',
    Ra = 'redis',
    ga = 'couchbase',
    Oa = 'couchdb',
    va = 'cosmosdb',
    Ia = 'dynamodb',
    Na = 'neo4j',
    ya = 'geode',
    Ca = 'elasticsearch',
    La = 'memcached',
    ba = 'cockroachdb',
    Ma = Fs,
    Pa = Hs,
    Ua = Ys,
    Da = js,
    wa = Ks,
    xa = Ws,
    Va = qs,
    Ga = Qs,
    Ba = zs,
    ka = $s,
    Fa = Xs,
    Ha = Js,
    Ya = Zs,
    ja = ea,
    Ka = ta,
    Wa = na,
    qa = ra,
    Qa = oa,
    za = ia,
    $a = sa,
    Xa = aa,
    Ja = ca,
    Za = _a,
    ec = ua,
    tc = Ea,
    nc = la,
    rc = Ta,
    oc = pa,
    ic = da,
    sc = Sa,
    ac = fa,
    cc = Aa,
    _c = ha,
    uc = ma,
    Ec = Ra,
    lc = ga,
    Tc = Oa,
    pc = va,
    dc = Ia,
    Sc = Na,
    fc = ya,
    Ac = Ca,
    hc = La,
    mc = ba,
    Rc = Xt([
      Fs,
      Hs,
      Ys,
      js,
      'db2',
      Ks,
      Ws,
      qs,
      Qs,
      zs,
      $s,
      Xs,
      Js,
      Zs,
      ea,
      'edb',
      ta,
      na,
      ra,
      oa,
      ia,
      sa,
      aa,
      ca,
      _a,
      ua,
      Ea,
      la,
      Ta,
      pa,
      da,
      Sa,
      'h2',
      fa,
      Aa,
      ha,
      ma,
      Ra,
      ga,
      Oa,
      va,
      Ia,
      Na,
      ya,
      Ca,
      La,
      ba,
    ]),
    gc = 'each_quorum',
    Oc = 'quorum',
    vc = 'local_quorum',
    Ic = 'three',
    Nc = 'local_one',
    yc = 'serial',
    Cc = 'local_serial',
    Lc = gc,
    bc = Oc,
    Mc = vc,
    Pc = Ic,
    Uc = Nc,
    Dc = yc,
    wc = Cc,
    xc = Xt(['all', gc, Oc, vc, 'one', 'two', Ic, Nc, 'any', yc, Cc]),
    Vc = 'datasource',
    Gc = 'http',
    Bc = 'pubsub',
    kc = 'timer',
    Fc = 'other',
    Hc = Vc,
    Yc = Gc,
    jc = Bc,
    Kc = kc,
    Wc = Fc,
    qc = Xt([Vc, Gc, Bc, kc, Fc]),
    Qc = 'insert',
    zc = 'edit',
    $c = 'delete',
    Xc = Qc,
    Jc = zc,
    Zc = $c,
    e_ = Xt([Qc, zc, $c]),
    t_ = 'alibaba_cloud',
    n_ = 'azure',
    r_ = t_,
    o_ = n_,
    i_ = Xt([t_, 'aws', n_, 'gcp']),
    s_ = 'ip_tcp',
    a_ = 'ip_udp',
    c_ = 'unix',
    __ = 'pipe',
    u_ = 'inproc',
    E_ = 'other',
    l_ = s_,
    T_ = a_,
    p_ = c_,
    d_ = __,
    S_ = u_,
    f_ = E_,
    A_ = Xt([s_, a_, 'ip', c_, __, u_, E_]),
    h_ = 'wifi',
    m_ = 'wired',
    R_ = 'cell',
    g_ = 'unavailable',
    O_ = 'unknown',
    v_ = h_,
    I_ = m_,
    N_ = R_,
    y_ = g_,
    C_ = O_,
    L_ = Xt([h_, m_, R_, g_, O_]),
    b_ = 'gprs',
    M_ = 'edge',
    P_ = 'umts',
    U_ = 'cdma',
    D_ = 'evdo_0',
    w_ = 'evdo_a',
    x_ = 'cdma2000_1xrtt',
    V_ = 'hsdpa',
    G_ = 'hsupa',
    B_ = 'hspa',
    k_ = 'iden',
    F_ = 'evdo_b',
    H_ = 'ehrpd',
    Y_ = 'hspap',
    j_ = 'td_scdma',
    K_ = 'iwlan',
    W_ = 'nrnsa',
    q_ = 'lte_ca',
    Q_ = b_,
    z_ = M_,
    $_ = P_,
    X_ = U_,
    J_ = D_,
    Z_ = w_,
    eu = x_,
    tu = V_,
    nu = G_,
    ru = B_,
    ou = k_,
    iu = F_,
    su = H_,
    au = Y_,
    cu = j_,
    _u = K_,
    uu = W_,
    Eu = q_,
    lu = Xt([
      b_,
      M_,
      P_,
      U_,
      D_,
      w_,
      x_,
      V_,
      G_,
      B_,
      k_,
      F_,
      'lte',
      H_,
      Y_,
      'gsm',
      j_,
      K_,
      'nr',
      W_,
      q_,
    ]),
    Tu = 'SPDY',
    pu = 'QUIC',
    du = Tu,
    Su = pu,
    fu = { HTTP_1_0: '1.0', HTTP_1_1: '1.1', HTTP_2_0: '2.0', SPDY: Tu, QUIC: pu },
    Au = 'queue',
    hu = 'topic',
    mu = Au,
    Ru = hu,
    gu = Xt([Au, hu]),
    Ou = 'receive',
    vu = 'process',
    Iu = Ou,
    Nu = vu,
    yu = Xt([Ou, vu]),
    Cu = {
      OK: 0,
      CANCELLED: 1,
      UNKNOWN: 2,
      INVALID_ARGUMENT: 3,
      DEADLINE_EXCEEDED: 4,
      NOT_FOUND: 5,
      ALREADY_EXISTS: 6,
      PERMISSION_DENIED: 7,
      RESOURCE_EXHAUSTED: 8,
      FAILED_PRECONDITION: 9,
      ABORTED: 10,
      OUT_OF_RANGE: 11,
      UNIMPLEMENTED: 12,
      INTERNAL: 13,
      UNAVAILABLE: 14,
      DATA_LOSS: 15,
      UNAUTHENTICATED: 16,
    },
    Lu = 'SENT',
    bu = 'RECEIVED',
    Mu = Lu,
    Pu = bu,
    Uu = Xt([Lu, bu]),
    Du = 'cloud.provider',
    wu = 'cloud.account.id',
    xu = 'cloud.region',
    Vu = 'cloud.availability_zone',
    Gu = 'cloud.platform',
    Bu = 'aws.ecs.container.arn',
    ku = 'aws.ecs.cluster.arn',
    Fu = 'aws.ecs.launchtype',
    Hu = 'aws.ecs.task.arn',
    Yu = 'aws.ecs.task.family',
    ju = 'aws.ecs.task.revision',
    Ku = 'aws.eks.cluster.arn',
    Wu = 'aws.log.group.names',
    qu = 'aws.log.group.arns',
    Qu = 'aws.log.stream.names',
    zu = 'aws.log.stream.arns',
    $u = 'container.name',
    Xu = 'container.id',
    Ju = 'container.runtime',
    Zu = 'container.image.name',
    eE = 'container.image.tag',
    tE = 'deployment.environment',
    nE = 'device.id',
    rE = 'device.model.identifier',
    oE = 'device.model.name',
    iE = 'faas.name',
    sE = 'faas.id',
    aE = 'faas.version',
    cE = 'faas.instance',
    _E = 'faas.max_memory',
    uE = 'host.id',
    EE = 'host.name',
    lE = 'host.type',
    TE = 'host.arch',
    pE = 'host.image.name',
    dE = 'host.image.id',
    SE = 'host.image.version',
    fE = 'k8s.cluster.name',
    AE = 'k8s.node.name',
    hE = 'k8s.node.uid',
    mE = 'k8s.namespace.name',
    RE = 'k8s.pod.uid',
    gE = 'k8s.pod.name',
    OE = 'k8s.container.name',
    vE = 'k8s.replicaset.uid',
    IE = 'k8s.replicaset.name',
    NE = 'k8s.deployment.uid',
    yE = 'k8s.deployment.name',
    CE = 'k8s.statefulset.uid',
    LE = 'k8s.statefulset.name',
    bE = 'k8s.daemonset.uid',
    ME = 'k8s.daemonset.name',
    PE = 'k8s.job.uid',
    UE = 'k8s.job.name',
    DE = 'k8s.cronjob.uid',
    wE = 'k8s.cronjob.name',
    xE = 'os.type',
    VE = 'os.description',
    GE = 'os.name',
    BE = 'os.version',
    kE = 'process.pid',
    FE = 'process.executable.name',
    HE = 'process.executable.path',
    YE = 'process.command',
    jE = 'process.command_line',
    KE = 'process.command_args',
    WE = 'process.owner',
    qE = 'process.runtime.name',
    QE = 'process.runtime.version',
    zE = 'process.runtime.description',
    $E = 'service.name',
    XE = 'service.namespace',
    JE = 'service.instance.id',
    ZE = 'service.version',
    el = 'telemetry.sdk.name',
    tl = 'telemetry.sdk.language',
    nl = 'telemetry.sdk.version',
    rl = 'telemetry.auto.version',
    ol = 'webengine.name',
    il = 'webengine.version',
    sl = 'webengine.description',
    al = Du,
    cl = wu,
    _l = xu,
    ul = Vu,
    El = Gu,
    ll = Bu,
    Tl = ku,
    pl = Fu,
    dl = Hu,
    Sl = Yu,
    fl = ju,
    Al = Ku,
    hl = Wu,
    ml = qu,
    Rl = Qu,
    gl = zu,
    Ol = $u,
    vl = Xu,
    Il = Ju,
    Nl = Zu,
    yl = eE,
    Cl = tE,
    Ll = nE,
    bl = rE,
    Ml = oE,
    Pl = iE,
    Ul = sE,
    Dl = aE,
    wl = cE,
    xl = _E,
    Vl = uE,
    Gl = EE,
    Bl = lE,
    kl = TE,
    Fl = pE,
    Hl = dE,
    Yl = SE,
    jl = fE,
    Kl = AE,
    Wl = hE,
    ql = mE,
    Ql = RE,
    zl = gE,
    $l = OE,
    Xl = vE,
    Jl = IE,
    Zl = NE,
    eT = yE,
    tT = CE,
    nT = LE,
    rT = bE,
    oT = ME,
    iT = PE,
    sT = UE,
    aT = DE,
    cT = wE,
    _T = xE,
    uT = VE,
    ET = GE,
    lT = BE,
    TT = kE,
    pT = FE,
    dT = HE,
    ST = YE,
    fT = jE,
    AT = KE,
    hT = WE,
    mT = qE,
    RT = QE,
    gT = zE,
    OT = $E,
    vT = XE,
    IT = JE,
    NT = ZE,
    yT = el,
    CT = tl,
    LT = nl,
    bT = rl,
    MT = ol,
    PT = il,
    UT = sl,
    DT = Xt([
      Du,
      wu,
      xu,
      Vu,
      Gu,
      Bu,
      ku,
      Fu,
      Hu,
      Yu,
      ju,
      Ku,
      Wu,
      qu,
      Qu,
      zu,
      $u,
      Xu,
      Ju,
      Zu,
      eE,
      tE,
      nE,
      rE,
      oE,
      iE,
      sE,
      aE,
      cE,
      _E,
      uE,
      EE,
      lE,
      TE,
      pE,
      dE,
      SE,
      fE,
      AE,
      hE,
      mE,
      RE,
      gE,
      OE,
      vE,
      IE,
      NE,
      yE,
      CE,
      LE,
      bE,
      ME,
      PE,
      UE,
      DE,
      wE,
      xE,
      VE,
      GE,
      BE,
      kE,
      FE,
      HE,
      YE,
      jE,
      KE,
      WE,
      qE,
      QE,
      zE,
      $E,
      XE,
      JE,
      ZE,
      el,
      tl,
      nl,
      rl,
      ol,
      il,
      sl,
    ]),
    wT = 'alibaba_cloud',
    xT = 'azure',
    VT = wT,
    GT = xT,
    BT = Xt([wT, 'aws', xT, 'gcp']),
    kT = 'alibaba_cloud_ecs',
    FT = 'alibaba_cloud_fc',
    HT = 'aws_ec2',
    YT = 'aws_ecs',
    jT = 'aws_eks',
    KT = 'aws_lambda',
    WT = 'aws_elastic_beanstalk',
    qT = 'azure_vm',
    QT = 'azure_container_instances',
    zT = 'azure_aks',
    $T = 'azure_functions',
    XT = 'azure_app_service',
    JT = 'gcp_compute_engine',
    ZT = 'gcp_cloud_run',
    ep = 'gcp_kubernetes_engine',
    tp = 'gcp_cloud_functions',
    np = 'gcp_app_engine',
    rp = kT,
    op = FT,
    ip = HT,
    sp = YT,
    ap = jT,
    cp = KT,
    _p = WT,
    up = qT,
    Ep = QT,
    lp = zT,
    Tp = $T,
    pp = XT,
    dp = JT,
    Sp = ZT,
    fp = ep,
    Ap = tp,
    hp = np,
    mp = Xt([kT, FT, HT, YT, jT, KT, WT, qT, QT, zT, $T, XT, JT, ZT, ep, tp, np]),
    Rp = 'fargate',
    gp = Rp,
    Op = Xt(['ec2', Rp]),
    vp = 'amd64',
    Ip = 'arm32',
    Np = 'arm64',
    yp = 'ia64',
    Cp = 'ppc32',
    Lp = 'ppc64',
    bp = vp,
    Mp = Ip,
    Pp = Np,
    Up = yp,
    Dp = Cp,
    wp = Lp,
    xp = Xt([vp, Ip, Np, yp, Cp, Lp, 'x86']),
    Vp = 'windows',
    Gp = 'linux',
    Bp = 'darwin',
    kp = 'freebsd',
    Fp = 'netbsd',
    Hp = 'openbsd',
    Yp = 'dragonflybsd',
    jp = 'hpux',
    Kp = 'solaris',
    Wp = 'z_os',
    qp = Vp,
    Qp = Gp,
    zp = Bp,
    $p = kp,
    Xp = Fp,
    Jp = Hp,
    Zp = Yp,
    ed = jp,
    td = Kp,
    nd = Wp,
    rd = Xt([Vp, Gp, Bp, kp, Fp, Hp, Yp, jp, 'aix', Kp, Wp]),
    od = 'dotnet',
    id = 'erlang',
    sd = 'java',
    ad = 'nodejs',
    cd = 'python',
    _d = 'ruby',
    ud = 'webjs',
    Ed = od,
    ld = id,
    Td = sd,
    pd = ad,
    dd = cd,
    Sd = _d,
    fd = ud,
    Ad = Xt(['cpp', od, id, 'go', sd, ad, 'php', cd, _d, ud]),
    hd = 'aspnetcore.rate_limiting.result',
    md = 'acquired',
    Rd = 'endpoint_limiter',
    gd = 'global_limiter',
    Od = 'request_canceled',
    vd = 'telemetry.sdk.language',
    Id = 'dotnet',
    Nd = 'erlang',
    yd = 'java',
    Cd = 'nodejs',
    Ld = 'python',
    bd = 'ruby',
    Md = 'rust',
    Pd = 'swift',
    Ud = 'webjs',
    Dd = 'telemetry.sdk.name',
    wd = 'telemetry.sdk.version',
    xd = 'aspnetcore.diagnostics.handler.type',
    Vd = 'aspnetcore.diagnostics.exception.result',
    Gd = 'aborted',
    Bd = 'handled',
    kd = 'skipped',
    Fd = 'unhandled',
    Hd = 'aspnetcore.rate_limiting.policy',
    Yd = 'aspnetcore.request.is_unhandled',
    jd = 'aspnetcore.routing.is_fallback',
    Kd = 'aspnetcore.routing.match_status',
    Wd = 'failure',
    qd = 'success',
    Qd = 'client.address',
    zd = 'client.port',
    $d = 'error.type',
    Xd = '_OTHER',
    Jd = 'exception.escaped',
    Zd = 'exception.message',
    eS = 'exception.stacktrace',
    tS = 'exception.type',
    nS = function (e) {
      return 'http.request.header.' + e
    },
    rS = 'http.request.method',
    oS = '_OTHER',
    iS = 'CONNECT',
    sS = 'DELETE',
    aS = 'HEAD',
    cS = 'OPTIONS',
    _S = 'PATCH',
    uS = 'POST',
    ES = 'TRACE',
    lS = 'http.request.method_original',
    TS = 'http.request.resend_count',
    pS = function (e) {
      return 'http.response.header.' + e
    },
    dS = 'http.response.status_code',
    SS = 'http.route',
    fS = 'jvm.gc.action',
    AS = 'jvm.gc.name',
    hS = 'jvm.memory.pool.name',
    mS = 'jvm.memory.type',
    RS = 'heap',
    gS = 'non_heap',
    OS = 'jvm.thread.daemon',
    vS = 'jvm.thread.state',
    IS = 'blocked',
    NS = 'runnable',
    yS = 'terminated',
    CS = 'timed_waiting',
    LS = 'waiting',
    bS = 'network.local.address',
    MS = 'network.local.port',
    PS = 'network.peer.address',
    US = 'network.peer.port',
    DS = 'network.protocol.name',
    wS = 'network.protocol.version',
    xS = 'network.transport',
    VS = 'pipe',
    GS = 'quic',
    BS = 'unix',
    kS = 'network.type',
    FS = 'ipv4',
    HS = 'ipv6',
    YS = 'otel.scope.name',
    jS = 'otel.scope.version',
    KS = 'otel.status_code',
    WS = 'ERROR',
    qS = 'otel.status_description',
    QS = 'server.address',
    zS = 'server.port',
    $S = 'service.name',
    XS = 'service.version',
    JS = 'signalr.connection.status',
    ZS = 'app_shutdown',
    ef = 'normal_closure',
    tf = 'timeout',
    nf = 'signalr.transport',
    rf = 'long_polling',
    of = 'server_sent_events',
    sf = 'web_sockets',
    af = 'url.fragment',
    cf = 'url.full',
    _f = 'url.path',
    uf = 'url.query',
    Ef = 'url.scheme',
    lf = 'user_agent.original',
    Tf = 'aspnetcore.diagnostics.exceptions',
    pf = 'aspnetcore.rate_limiting.active_request_leases',
    df = 'aspnetcore.rate_limiting.queued_requests',
    Sf = 'aspnetcore.rate_limiting.request.time_in_queue',
    ff = 'aspnetcore.rate_limiting.request_lease.duration',
    Af = 'aspnetcore.rate_limiting.requests',
    hf = 'aspnetcore.routing.match_attempts',
    mf = 'http.client.request.duration',
    Rf = 'http.server.request.duration',
    gf = 'jvm.class.count',
    Of = 'jvm.class.loaded',
    vf = 'jvm.class.unloaded',
    If = 'jvm.cpu.count',
    Nf = 'jvm.cpu.recent_utilization',
    yf = 'jvm.cpu.time',
    Cf = 'jvm.gc.duration',
    Lf = 'jvm.memory.committed',
    bf = 'jvm.memory.limit',
    Mf = 'jvm.memory.used',
    Pf = 'jvm.memory.used_after_last_gc',
    Uf = 'jvm.thread.count',
    Df = 'kestrel.active_connections',
    wf = 'kestrel.active_tls_handshakes',
    xf = 'kestrel.connection.duration',
    Vf = 'kestrel.queued_connections',
    Gf = 'kestrel.queued_requests',
    Bf = 'kestrel.rejected_connections',
    kf = 'kestrel.tls_handshake.duration',
    Ff = 'kestrel.upgraded_connections',
    Hf = 'signalr.server.active_connections',
    Yf = 'signalr.server.connection.duration',
    jf = n(
      Object.freeze({
        __proto__: null,
        ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED: Gd,
        ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED: Bd,
        ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED: kd,
        ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED: Fd,
        ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED: md,
        ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER: Rd,
        ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER: gd,
        ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED: Od,
        ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE: Wd,
        ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS: qd,
        ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT: Vd,
        ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE: xd,
        ATTR_ASPNETCORE_RATE_LIMITING_POLICY: Hd,
        ATTR_ASPNETCORE_RATE_LIMITING_RESULT: hd,
        ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED: Yd,
        ATTR_ASPNETCORE_ROUTING_IS_FALLBACK: jd,
        ATTR_ASPNETCORE_ROUTING_MATCH_STATUS: Kd,
        ATTR_CLIENT_ADDRESS: Qd,
        ATTR_CLIENT_PORT: zd,
        ATTR_ERROR_TYPE: $d,
        ATTR_EXCEPTION_ESCAPED: Jd,
        ATTR_EXCEPTION_MESSAGE: Zd,
        ATTR_EXCEPTION_STACKTRACE: eS,
        ATTR_EXCEPTION_TYPE: tS,
        ATTR_HTTP_REQUEST_HEADER: nS,
        ATTR_HTTP_REQUEST_METHOD: rS,
        ATTR_HTTP_REQUEST_METHOD_ORIGINAL: lS,
        ATTR_HTTP_REQUEST_RESEND_COUNT: TS,
        ATTR_HTTP_RESPONSE_HEADER: pS,
        ATTR_HTTP_RESPONSE_STATUS_CODE: dS,
        ATTR_HTTP_ROUTE: SS,
        ATTR_JVM_GC_ACTION: fS,
        ATTR_JVM_GC_NAME: AS,
        ATTR_JVM_MEMORY_POOL_NAME: hS,
        ATTR_JVM_MEMORY_TYPE: mS,
        ATTR_JVM_THREAD_DAEMON: OS,
        ATTR_JVM_THREAD_STATE: vS,
        ATTR_NETWORK_LOCAL_ADDRESS: bS,
        ATTR_NETWORK_LOCAL_PORT: MS,
        ATTR_NETWORK_PEER_ADDRESS: PS,
        ATTR_NETWORK_PEER_PORT: US,
        ATTR_NETWORK_PROTOCOL_NAME: DS,
        ATTR_NETWORK_PROTOCOL_VERSION: wS,
        ATTR_NETWORK_TRANSPORT: xS,
        ATTR_NETWORK_TYPE: kS,
        ATTR_OTEL_SCOPE_NAME: YS,
        ATTR_OTEL_SCOPE_VERSION: jS,
        ATTR_OTEL_STATUS_CODE: KS,
        ATTR_OTEL_STATUS_DESCRIPTION: qS,
        ATTR_SERVER_ADDRESS: QS,
        ATTR_SERVER_PORT: zS,
        ATTR_SERVICE_NAME: $S,
        ATTR_SERVICE_VERSION: XS,
        ATTR_SIGNALR_CONNECTION_STATUS: JS,
        ATTR_SIGNALR_TRANSPORT: nf,
        ATTR_TELEMETRY_SDK_LANGUAGE: vd,
        ATTR_TELEMETRY_SDK_NAME: Dd,
        ATTR_TELEMETRY_SDK_VERSION: wd,
        ATTR_URL_FRAGMENT: af,
        ATTR_URL_FULL: cf,
        ATTR_URL_PATH: _f,
        ATTR_URL_QUERY: uf,
        ATTR_URL_SCHEME: Ef,
        ATTR_USER_AGENT_ORIGINAL: lf,
        AWSECSLAUNCHTYPEVALUES_EC2: 'ec2',
        AWSECSLAUNCHTYPEVALUES_FARGATE: gp,
        AwsEcsLaunchtypeValues: Op,
        CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS: rp,
        CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC: op,
        CLOUDPLATFORMVALUES_AWS_EC2: ip,
        CLOUDPLATFORMVALUES_AWS_ECS: sp,
        CLOUDPLATFORMVALUES_AWS_EKS: ap,
        CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK: _p,
        CLOUDPLATFORMVALUES_AWS_LAMBDA: cp,
        CLOUDPLATFORMVALUES_AZURE_AKS: lp,
        CLOUDPLATFORMVALUES_AZURE_APP_SERVICE: pp,
        CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES: Ep,
        CLOUDPLATFORMVALUES_AZURE_FUNCTIONS: Tp,
        CLOUDPLATFORMVALUES_AZURE_VM: up,
        CLOUDPLATFORMVALUES_GCP_APP_ENGINE: hp,
        CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS: Ap,
        CLOUDPLATFORMVALUES_GCP_CLOUD_RUN: Sp,
        CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE: dp,
        CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE: fp,
        CLOUDPROVIDERVALUES_ALIBABA_CLOUD: VT,
        CLOUDPROVIDERVALUES_AWS: 'aws',
        CLOUDPROVIDERVALUES_AZURE: GT,
        CLOUDPROVIDERVALUES_GCP: 'gcp',
        CloudPlatformValues: mp,
        CloudProviderValues: BT,
        DBCASSANDRACONSISTENCYLEVELVALUES_ALL: 'all',
        DBCASSANDRACONSISTENCYLEVELVALUES_ANY: 'any',
        DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM: Lc,
        DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE: Uc,
        DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM: Mc,
        DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL: wc,
        DBCASSANDRACONSISTENCYLEVELVALUES_ONE: 'one',
        DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM: bc,
        DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL: Dc,
        DBCASSANDRACONSISTENCYLEVELVALUES_THREE: Pc,
        DBCASSANDRACONSISTENCYLEVELVALUES_TWO: 'two',
        DBSYSTEMVALUES_ADABAS: Wa,
        DBSYSTEMVALUES_CACHE: Ka,
        DBSYSTEMVALUES_CASSANDRA: cc,
        DBSYSTEMVALUES_CLOUDSCAPE: Ga,
        DBSYSTEMVALUES_COCKROACHDB: mc,
        DBSYSTEMVALUES_COLDFUSION: ac,
        DBSYSTEMVALUES_COSMOSDB: pc,
        DBSYSTEMVALUES_COUCHBASE: lc,
        DBSYSTEMVALUES_COUCHDB: Tc,
        DBSYSTEMVALUES_DB2: 'db2',
        DBSYSTEMVALUES_DERBY: Qa,
        DBSYSTEMVALUES_DYNAMODB: dc,
        DBSYSTEMVALUES_EDB: 'edb',
        DBSYSTEMVALUES_ELASTICSEARCH: Ac,
        DBSYSTEMVALUES_FILEMAKER: za,
        DBSYSTEMVALUES_FIREBIRD: qa,
        DBSYSTEMVALUES_FIRSTSQL: ja,
        DBSYSTEMVALUES_GEODE: fc,
        DBSYSTEMVALUES_H2: 'h2',
        DBSYSTEMVALUES_HANADB: Ha,
        DBSYSTEMVALUES_HBASE: _c,
        DBSYSTEMVALUES_HIVE: Va,
        DBSYSTEMVALUES_HSQLDB: Ba,
        DBSYSTEMVALUES_INFORMIX: $a,
        DBSYSTEMVALUES_INGRES: Ya,
        DBSYSTEMVALUES_INSTANTDB: Xa,
        DBSYSTEMVALUES_INTERBASE: Ja,
        DBSYSTEMVALUES_MARIADB: Za,
        DBSYSTEMVALUES_MAXDB: Fa,
        DBSYSTEMVALUES_MEMCACHED: hc,
        DBSYSTEMVALUES_MONGODB: uc,
        DBSYSTEMVALUES_MSSQL: Pa,
        DBSYSTEMVALUES_MYSQL: Ua,
        DBSYSTEMVALUES_NEO4J: Sc,
        DBSYSTEMVALUES_NETEZZA: ec,
        DBSYSTEMVALUES_ORACLE: Da,
        DBSYSTEMVALUES_OTHER_SQL: Ma,
        DBSYSTEMVALUES_PERVASIVE: tc,
        DBSYSTEMVALUES_POINTBASE: nc,
        DBSYSTEMVALUES_POSTGRESQL: wa,
        DBSYSTEMVALUES_PROGRESS: ka,
        DBSYSTEMVALUES_REDIS: Ec,
        DBSYSTEMVALUES_REDSHIFT: xa,
        DBSYSTEMVALUES_SQLITE: rc,
        DBSYSTEMVALUES_SYBASE: oc,
        DBSYSTEMVALUES_TERADATA: ic,
        DBSYSTEMVALUES_VERTICA: sc,
        DbCassandraConsistencyLevelValues: xc,
        DbSystemValues: Rc,
        ERROR_TYPE_VALUE_OTHER: Xd,
        FAASDOCUMENTOPERATIONVALUES_DELETE: Zc,
        FAASDOCUMENTOPERATIONVALUES_EDIT: Jc,
        FAASDOCUMENTOPERATIONVALUES_INSERT: Xc,
        FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD: r_,
        FAASINVOKEDPROVIDERVALUES_AWS: 'aws',
        FAASINVOKEDPROVIDERVALUES_AZURE: o_,
        FAASINVOKEDPROVIDERVALUES_GCP: 'gcp',
        FAASTRIGGERVALUES_DATASOURCE: Hc,
        FAASTRIGGERVALUES_HTTP: Yc,
        FAASTRIGGERVALUES_OTHER: Wc,
        FAASTRIGGERVALUES_PUBSUB: jc,
        FAASTRIGGERVALUES_TIMER: Kc,
        FaasDocumentOperationValues: e_,
        FaasInvokedProviderValues: i_,
        FaasTriggerValues: qc,
        HOSTARCHVALUES_AMD64: bp,
        HOSTARCHVALUES_ARM32: Mp,
        HOSTARCHVALUES_ARM64: Pp,
        HOSTARCHVALUES_IA64: Up,
        HOSTARCHVALUES_PPC32: Dp,
        HOSTARCHVALUES_PPC64: wp,
        HOSTARCHVALUES_X86: 'x86',
        HTTPFLAVORVALUES_HTTP_1_0: '1.0',
        HTTPFLAVORVALUES_HTTP_1_1: '1.1',
        HTTPFLAVORVALUES_HTTP_2_0: '2.0',
        HTTPFLAVORVALUES_QUIC: Su,
        HTTPFLAVORVALUES_SPDY: du,
        HTTP_REQUEST_METHOD_VALUE_CONNECT: iS,
        HTTP_REQUEST_METHOD_VALUE_DELETE: sS,
        HTTP_REQUEST_METHOD_VALUE_GET: 'GET',
        HTTP_REQUEST_METHOD_VALUE_HEAD: aS,
        HTTP_REQUEST_METHOD_VALUE_OPTIONS: cS,
        HTTP_REQUEST_METHOD_VALUE_OTHER: oS,
        HTTP_REQUEST_METHOD_VALUE_PATCH: _S,
        HTTP_REQUEST_METHOD_VALUE_POST: uS,
        HTTP_REQUEST_METHOD_VALUE_PUT: 'PUT',
        HTTP_REQUEST_METHOD_VALUE_TRACE: ES,
        HostArchValues: xp,
        HttpFlavorValues: fu,
        JVM_MEMORY_TYPE_VALUE_HEAP: RS,
        JVM_MEMORY_TYPE_VALUE_NON_HEAP: gS,
        JVM_THREAD_STATE_VALUE_BLOCKED: IS,
        JVM_THREAD_STATE_VALUE_NEW: 'new',
        JVM_THREAD_STATE_VALUE_RUNNABLE: NS,
        JVM_THREAD_STATE_VALUE_TERMINATED: yS,
        JVM_THREAD_STATE_VALUE_TIMED_WAITING: CS,
        JVM_THREAD_STATE_VALUE_WAITING: LS,
        MESSAGETYPEVALUES_RECEIVED: Pu,
        MESSAGETYPEVALUES_SENT: Mu,
        MESSAGINGDESTINATIONKINDVALUES_QUEUE: mu,
        MESSAGINGDESTINATIONKINDVALUES_TOPIC: Ru,
        MESSAGINGOPERATIONVALUES_PROCESS: Nu,
        MESSAGINGOPERATIONVALUES_RECEIVE: Iu,
        METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS: Tf,
        METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES: pf,
        METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS: df,
        METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS: Af,
        METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION: ff,
        METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE: Sf,
        METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS: hf,
        METRIC_HTTP_CLIENT_REQUEST_DURATION: mf,
        METRIC_HTTP_SERVER_REQUEST_DURATION: Rf,
        METRIC_JVM_CLASS_COUNT: gf,
        METRIC_JVM_CLASS_LOADED: Of,
        METRIC_JVM_CLASS_UNLOADED: vf,
        METRIC_JVM_CPU_COUNT: If,
        METRIC_JVM_CPU_RECENT_UTILIZATION: Nf,
        METRIC_JVM_CPU_TIME: yf,
        METRIC_JVM_GC_DURATION: Cf,
        METRIC_JVM_MEMORY_COMMITTED: Lf,
        METRIC_JVM_MEMORY_LIMIT: bf,
        METRIC_JVM_MEMORY_USED: Mf,
        METRIC_JVM_MEMORY_USED_AFTER_LAST_GC: Pf,
        METRIC_JVM_THREAD_COUNT: Uf,
        METRIC_KESTREL_ACTIVE_CONNECTIONS: Df,
        METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES: wf,
        METRIC_KESTREL_CONNECTION_DURATION: xf,
        METRIC_KESTREL_QUEUED_CONNECTIONS: Vf,
        METRIC_KESTREL_QUEUED_REQUESTS: Gf,
        METRIC_KESTREL_REJECTED_CONNECTIONS: Bf,
        METRIC_KESTREL_TLS_HANDSHAKE_DURATION: kf,
        METRIC_KESTREL_UPGRADED_CONNECTIONS: Ff,
        METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS: Hf,
        METRIC_SIGNALR_SERVER_CONNECTION_DURATION: Yf,
        MessageTypeValues: Uu,
        MessagingDestinationKindValues: gu,
        MessagingOperationValues: yu,
        NETHOSTCONNECTIONSUBTYPEVALUES_CDMA: X_,
        NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT: eu,
        NETHOSTCONNECTIONSUBTYPEVALUES_EDGE: z_,
        NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD: su,
        NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0: J_,
        NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A: Z_,
        NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B: iu,
        NETHOSTCONNECTIONSUBTYPEVALUES_GPRS: Q_,
        NETHOSTCONNECTIONSUBTYPEVALUES_GSM: 'gsm',
        NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA: tu,
        NETHOSTCONNECTIONSUBTYPEVALUES_HSPA: ru,
        NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP: au,
        NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA: nu,
        NETHOSTCONNECTIONSUBTYPEVALUES_IDEN: ou,
        NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN: _u,
        NETHOSTCONNECTIONSUBTYPEVALUES_LTE: 'lte',
        NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA: Eu,
        NETHOSTCONNECTIONSUBTYPEVALUES_NR: 'nr',
        NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA: uu,
        NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA: cu,
        NETHOSTCONNECTIONSUBTYPEVALUES_UMTS: $_,
        NETHOSTCONNECTIONTYPEVALUES_CELL: N_,
        NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE: y_,
        NETHOSTCONNECTIONTYPEVALUES_UNKNOWN: C_,
        NETHOSTCONNECTIONTYPEVALUES_WIFI: v_,
        NETHOSTCONNECTIONTYPEVALUES_WIRED: I_,
        NETTRANSPORTVALUES_INPROC: S_,
        NETTRANSPORTVALUES_IP: 'ip',
        NETTRANSPORTVALUES_IP_TCP: l_,
        NETTRANSPORTVALUES_IP_UDP: T_,
        NETTRANSPORTVALUES_OTHER: f_,
        NETTRANSPORTVALUES_PIPE: d_,
        NETTRANSPORTVALUES_UNIX: p_,
        NETWORK_TRANSPORT_VALUE_PIPE: VS,
        NETWORK_TRANSPORT_VALUE_QUIC: GS,
        NETWORK_TRANSPORT_VALUE_TCP: 'tcp',
        NETWORK_TRANSPORT_VALUE_UDP: 'udp',
        NETWORK_TRANSPORT_VALUE_UNIX: BS,
        NETWORK_TYPE_VALUE_IPV4: FS,
        NETWORK_TYPE_VALUE_IPV6: HS,
        NetHostConnectionSubtypeValues: lu,
        NetHostConnectionTypeValues: L_,
        NetTransportValues: A_,
        OSTYPEVALUES_AIX: 'aix',
        OSTYPEVALUES_DARWIN: zp,
        OSTYPEVALUES_DRAGONFLYBSD: Zp,
        OSTYPEVALUES_FREEBSD: $p,
        OSTYPEVALUES_HPUX: ed,
        OSTYPEVALUES_LINUX: Qp,
        OSTYPEVALUES_NETBSD: Xp,
        OSTYPEVALUES_OPENBSD: Jp,
        OSTYPEVALUES_SOLARIS: td,
        OSTYPEVALUES_WINDOWS: qp,
        OSTYPEVALUES_Z_OS: nd,
        OTEL_STATUS_CODE_VALUE_ERROR: WS,
        OTEL_STATUS_CODE_VALUE_OK: 'OK',
        OsTypeValues: rd,
        RPCGRPCSTATUSCODEVALUES_ABORTED: 10,
        RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS: 6,
        RPCGRPCSTATUSCODEVALUES_CANCELLED: 1,
        RPCGRPCSTATUSCODEVALUES_DATA_LOSS: 15,
        RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED: 4,
        RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION: 9,
        RPCGRPCSTATUSCODEVALUES_INTERNAL: 13,
        RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT: 3,
        RPCGRPCSTATUSCODEVALUES_NOT_FOUND: 5,
        RPCGRPCSTATUSCODEVALUES_OK: 0,
        RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE: 11,
        RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED: 7,
        RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED: 8,
        RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED: 16,
        RPCGRPCSTATUSCODEVALUES_UNAVAILABLE: 14,
        RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED: 12,
        RPCGRPCSTATUSCODEVALUES_UNKNOWN: 2,
        RpcGrpcStatusCodeValues: Cu,
        SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET: zi,
        SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: as,
        SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ: Wi,
        SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY: Hi,
        SEMATTRS_AWS_DYNAMODB_COUNT: is,
        SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE: es,
        SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: Ji,
        SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: cs,
        SEMATTRS_AWS_DYNAMODB_INDEX_NAME: $i,
        SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS: Yi,
        SEMATTRS_AWS_DYNAMODB_LIMIT: Qi,
        SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: Zi,
        SEMATTRS_AWS_DYNAMODB_PROJECTION: qi,
        SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: ji,
        SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: Ki,
        SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT: ss,
        SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD: ns,
        SEMATTRS_AWS_DYNAMODB_SEGMENT: rs,
        SEMATTRS_AWS_DYNAMODB_SELECT: Xi,
        SEMATTRS_AWS_DYNAMODB_TABLE_COUNT: ts,
        SEMATTRS_AWS_DYNAMODB_TABLE_NAMES: Fi,
        SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS: os,
        SEMATTRS_AWS_LAMBDA_INVOKED_ARN: mo,
        SEMATTRS_CODE_FILEPATH: vi,
        SEMATTRS_CODE_FUNCTION: gi,
        SEMATTRS_CODE_LINENO: Ii,
        SEMATTRS_CODE_NAMESPACE: Oi,
        SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL: Mo,
        SEMATTRS_DB_CASSANDRA_COORDINATOR_DC: xo,
        SEMATTRS_DB_CASSANDRA_COORDINATOR_ID: wo,
        SEMATTRS_DB_CASSANDRA_IDEMPOTENCE: Uo,
        SEMATTRS_DB_CASSANDRA_KEYSPACE: Lo,
        SEMATTRS_DB_CASSANDRA_PAGE_SIZE: bo,
        SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: Do,
        SEMATTRS_DB_CASSANDRA_TABLE: Po,
        SEMATTRS_DB_CONNECTION_STRING: go,
        SEMATTRS_DB_HBASE_NAMESPACE: Vo,
        SEMATTRS_DB_JDBC_DRIVER_CLASSNAME: vo,
        SEMATTRS_DB_MONGODB_COLLECTION: Bo,
        SEMATTRS_DB_MSSQL_INSTANCE_NAME: Co,
        SEMATTRS_DB_NAME: Io,
        SEMATTRS_DB_OPERATION: yo,
        SEMATTRS_DB_REDIS_DATABASE_INDEX: Go,
        SEMATTRS_DB_SQL_TABLE: ko,
        SEMATTRS_DB_STATEMENT: No,
        SEMATTRS_DB_SYSTEM: Ro,
        SEMATTRS_DB_USER: Oo,
        SEMATTRS_ENDUSER_ID: fi,
        SEMATTRS_ENDUSER_ROLE: Ai,
        SEMATTRS_ENDUSER_SCOPE: hi,
        SEMATTRS_EXCEPTION_ESCAPED: jo,
        SEMATTRS_EXCEPTION_MESSAGE: Ho,
        SEMATTRS_EXCEPTION_STACKTRACE: Yo,
        SEMATTRS_EXCEPTION_TYPE: Fo,
        SEMATTRS_FAAS_COLDSTART: Zo,
        SEMATTRS_FAAS_CRON: Jo,
        SEMATTRS_FAAS_DOCUMENT_COLLECTION: qo,
        SEMATTRS_FAAS_DOCUMENT_NAME: $o,
        SEMATTRS_FAAS_DOCUMENT_OPERATION: Qo,
        SEMATTRS_FAAS_DOCUMENT_TIME: zo,
        SEMATTRS_FAAS_EXECUTION: Wo,
        SEMATTRS_FAAS_INVOKED_NAME: ei,
        SEMATTRS_FAAS_INVOKED_PROVIDER: ti,
        SEMATTRS_FAAS_INVOKED_REGION: ni,
        SEMATTRS_FAAS_TIME: Xo,
        SEMATTRS_FAAS_TRIGGER: Ko,
        SEMATTRS_HTTP_CLIENT_IP: ki,
        SEMATTRS_HTTP_FLAVOR: Pi,
        SEMATTRS_HTTP_HOST: Li,
        SEMATTRS_HTTP_METHOD: Ni,
        SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH: Di,
        SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: wi,
        SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH: xi,
        SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: Vi,
        SEMATTRS_HTTP_ROUTE: Bi,
        SEMATTRS_HTTP_SCHEME: bi,
        SEMATTRS_HTTP_SERVER_NAME: Gi,
        SEMATTRS_HTTP_STATUS_CODE: Mi,
        SEMATTRS_HTTP_TARGET: Ci,
        SEMATTRS_HTTP_URL: yi,
        SEMATTRS_HTTP_USER_AGENT: Ui,
        SEMATTRS_MESSAGE_COMPRESSED_SIZE: Gs,
        SEMATTRS_MESSAGE_ID: Vs,
        SEMATTRS_MESSAGE_TYPE: xs,
        SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE: Bs,
        SEMATTRS_MESSAGING_CONSUMER_ID: Rs,
        SEMATTRS_MESSAGING_CONVERSATION_ID: fs,
        SEMATTRS_MESSAGING_DESTINATION: us,
        SEMATTRS_MESSAGING_DESTINATION_KIND: Es,
        SEMATTRS_MESSAGING_KAFKA_CLIENT_ID: Is,
        SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP: vs,
        SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY: Os,
        SEMATTRS_MESSAGING_KAFKA_PARTITION: Ns,
        SEMATTRS_MESSAGING_KAFKA_TOMBSTONE: ys,
        SEMATTRS_MESSAGING_MESSAGE_ID: Ss,
        SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: hs,
        SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: As,
        SEMATTRS_MESSAGING_OPERATION: ms,
        SEMATTRS_MESSAGING_PROTOCOL: Ts,
        SEMATTRS_MESSAGING_PROTOCOL_VERSION: ps,
        SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY: gs,
        SEMATTRS_MESSAGING_SYSTEM: _s,
        SEMATTRS_MESSAGING_TEMP_DESTINATION: ls,
        SEMATTRS_MESSAGING_URL: ds,
        SEMATTRS_NET_HOST_CARRIER_ICC: di,
        SEMATTRS_NET_HOST_CARRIER_MCC: Ti,
        SEMATTRS_NET_HOST_CARRIER_MNC: pi,
        SEMATTRS_NET_HOST_CARRIER_NAME: li,
        SEMATTRS_NET_HOST_CONNECTION_SUBTYPE: Ei,
        SEMATTRS_NET_HOST_CONNECTION_TYPE: ui,
        SEMATTRS_NET_HOST_IP: ai,
        SEMATTRS_NET_HOST_NAME: _i,
        SEMATTRS_NET_HOST_PORT: ci,
        SEMATTRS_NET_PEER_IP: oi,
        SEMATTRS_NET_PEER_NAME: si,
        SEMATTRS_NET_PEER_PORT: ii,
        SEMATTRS_NET_TRANSPORT: ri,
        SEMATTRS_PEER_SERVICE: Si,
        SEMATTRS_RPC_GRPC_STATUS_CODE: Ms,
        SEMATTRS_RPC_JSONRPC_ERROR_CODE: Ds,
        SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE: ws,
        SEMATTRS_RPC_JSONRPC_REQUEST_ID: Us,
        SEMATTRS_RPC_JSONRPC_VERSION: Ps,
        SEMATTRS_RPC_METHOD: bs,
        SEMATTRS_RPC_SERVICE: Ls,
        SEMATTRS_RPC_SYSTEM: Cs,
        SEMATTRS_THREAD_ID: mi,
        SEMATTRS_THREAD_NAME: Ri,
        SEMRESATTRS_AWS_ECS_CLUSTER_ARN: Tl,
        SEMRESATTRS_AWS_ECS_CONTAINER_ARN: ll,
        SEMRESATTRS_AWS_ECS_LAUNCHTYPE: pl,
        SEMRESATTRS_AWS_ECS_TASK_ARN: dl,
        SEMRESATTRS_AWS_ECS_TASK_FAMILY: Sl,
        SEMRESATTRS_AWS_ECS_TASK_REVISION: fl,
        SEMRESATTRS_AWS_EKS_CLUSTER_ARN: Al,
        SEMRESATTRS_AWS_LOG_GROUP_ARNS: ml,
        SEMRESATTRS_AWS_LOG_GROUP_NAMES: hl,
        SEMRESATTRS_AWS_LOG_STREAM_ARNS: gl,
        SEMRESATTRS_AWS_LOG_STREAM_NAMES: Rl,
        SEMRESATTRS_CLOUD_ACCOUNT_ID: cl,
        SEMRESATTRS_CLOUD_AVAILABILITY_ZONE: ul,
        SEMRESATTRS_CLOUD_PLATFORM: El,
        SEMRESATTRS_CLOUD_PROVIDER: al,
        SEMRESATTRS_CLOUD_REGION: _l,
        SEMRESATTRS_CONTAINER_ID: vl,
        SEMRESATTRS_CONTAINER_IMAGE_NAME: Nl,
        SEMRESATTRS_CONTAINER_IMAGE_TAG: yl,
        SEMRESATTRS_CONTAINER_NAME: Ol,
        SEMRESATTRS_CONTAINER_RUNTIME: Il,
        SEMRESATTRS_DEPLOYMENT_ENVIRONMENT: Cl,
        SEMRESATTRS_DEVICE_ID: Ll,
        SEMRESATTRS_DEVICE_MODEL_IDENTIFIER: bl,
        SEMRESATTRS_DEVICE_MODEL_NAME: Ml,
        SEMRESATTRS_FAAS_ID: Ul,
        SEMRESATTRS_FAAS_INSTANCE: wl,
        SEMRESATTRS_FAAS_MAX_MEMORY: xl,
        SEMRESATTRS_FAAS_NAME: Pl,
        SEMRESATTRS_FAAS_VERSION: Dl,
        SEMRESATTRS_HOST_ARCH: kl,
        SEMRESATTRS_HOST_ID: Vl,
        SEMRESATTRS_HOST_IMAGE_ID: Hl,
        SEMRESATTRS_HOST_IMAGE_NAME: Fl,
        SEMRESATTRS_HOST_IMAGE_VERSION: Yl,
        SEMRESATTRS_HOST_NAME: Gl,
        SEMRESATTRS_HOST_TYPE: Bl,
        SEMRESATTRS_K8S_CLUSTER_NAME: jl,
        SEMRESATTRS_K8S_CONTAINER_NAME: $l,
        SEMRESATTRS_K8S_CRONJOB_NAME: cT,
        SEMRESATTRS_K8S_CRONJOB_UID: aT,
        SEMRESATTRS_K8S_DAEMONSET_NAME: oT,
        SEMRESATTRS_K8S_DAEMONSET_UID: rT,
        SEMRESATTRS_K8S_DEPLOYMENT_NAME: eT,
        SEMRESATTRS_K8S_DEPLOYMENT_UID: Zl,
        SEMRESATTRS_K8S_JOB_NAME: sT,
        SEMRESATTRS_K8S_JOB_UID: iT,
        SEMRESATTRS_K8S_NAMESPACE_NAME: ql,
        SEMRESATTRS_K8S_NODE_NAME: Kl,
        SEMRESATTRS_K8S_NODE_UID: Wl,
        SEMRESATTRS_K8S_POD_NAME: zl,
        SEMRESATTRS_K8S_POD_UID: Ql,
        SEMRESATTRS_K8S_REPLICASET_NAME: Jl,
        SEMRESATTRS_K8S_REPLICASET_UID: Xl,
        SEMRESATTRS_K8S_STATEFULSET_NAME: nT,
        SEMRESATTRS_K8S_STATEFULSET_UID: tT,
        SEMRESATTRS_OS_DESCRIPTION: uT,
        SEMRESATTRS_OS_NAME: ET,
        SEMRESATTRS_OS_TYPE: _T,
        SEMRESATTRS_OS_VERSION: lT,
        SEMRESATTRS_PROCESS_COMMAND: ST,
        SEMRESATTRS_PROCESS_COMMAND_ARGS: AT,
        SEMRESATTRS_PROCESS_COMMAND_LINE: fT,
        SEMRESATTRS_PROCESS_EXECUTABLE_NAME: pT,
        SEMRESATTRS_PROCESS_EXECUTABLE_PATH: dT,
        SEMRESATTRS_PROCESS_OWNER: hT,
        SEMRESATTRS_PROCESS_PID: TT,
        SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION: gT,
        SEMRESATTRS_PROCESS_RUNTIME_NAME: mT,
        SEMRESATTRS_PROCESS_RUNTIME_VERSION: RT,
        SEMRESATTRS_SERVICE_INSTANCE_ID: IT,
        SEMRESATTRS_SERVICE_NAME: OT,
        SEMRESATTRS_SERVICE_NAMESPACE: vT,
        SEMRESATTRS_SERVICE_VERSION: NT,
        SEMRESATTRS_TELEMETRY_AUTO_VERSION: bT,
        SEMRESATTRS_TELEMETRY_SDK_LANGUAGE: CT,
        SEMRESATTRS_TELEMETRY_SDK_NAME: yT,
        SEMRESATTRS_TELEMETRY_SDK_VERSION: LT,
        SEMRESATTRS_WEBENGINE_DESCRIPTION: UT,
        SEMRESATTRS_WEBENGINE_NAME: MT,
        SEMRESATTRS_WEBENGINE_VERSION: PT,
        SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN: ZS,
        SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE: ef,
        SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT: tf,
        SIGNALR_TRANSPORT_VALUE_LONG_POLLING: rf,
        SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS: of,
        SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS: sf,
        SemanticAttributes: ks,
        SemanticResourceAttributes: DT,
        TELEMETRYSDKLANGUAGEVALUES_CPP: 'cpp',
        TELEMETRYSDKLANGUAGEVALUES_DOTNET: Ed,
        TELEMETRYSDKLANGUAGEVALUES_ERLANG: ld,
        TELEMETRYSDKLANGUAGEVALUES_GO: 'go',
        TELEMETRYSDKLANGUAGEVALUES_JAVA: Td,
        TELEMETRYSDKLANGUAGEVALUES_NODEJS: pd,
        TELEMETRYSDKLANGUAGEVALUES_PHP: 'php',
        TELEMETRYSDKLANGUAGEVALUES_PYTHON: dd,
        TELEMETRYSDKLANGUAGEVALUES_RUBY: Sd,
        TELEMETRYSDKLANGUAGEVALUES_WEBJS: fd,
        TELEMETRY_SDK_LANGUAGE_VALUE_CPP: 'cpp',
        TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET: Id,
        TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG: Nd,
        TELEMETRY_SDK_LANGUAGE_VALUE_GO: 'go',
        TELEMETRY_SDK_LANGUAGE_VALUE_JAVA: yd,
        TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS: Cd,
        TELEMETRY_SDK_LANGUAGE_VALUE_PHP: 'php',
        TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON: Ld,
        TELEMETRY_SDK_LANGUAGE_VALUE_RUBY: bd,
        TELEMETRY_SDK_LANGUAGE_VALUE_RUST: Md,
        TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT: Pd,
        TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS: Ud,
        TelemetrySdkLanguageValues: Ad,
      }),
    ),
    Kf = {
      name: '@imqa/instrumentation-node',
      version: '0.0.12',
      homepage: 'https://www.imqa.io',
      repository: { type: 'git', url: 'https://github.com/onycom-imqa/imqa-js.git' },
      publishConfig: { access: 'public' },
      files: ['build/*'],
      main: 'build/src/index.js',
      scripts: {
        clean: 'rimraf coverage build tmp',
        prebuild: 'npm run clean',
        build: 'tsc -p tsconfig.release.json',
        postbuild: 'npm run build:types',
        'build:types': 'tsc -d -p tsconfig.release.json --declarationMap --emitDeclarationOnly',
        'build:watch': 'tsc -w -p tsconfig.json',
        lint: 'eslint .',
        'ci:lint': 'yarn lint && yarn tsc --noEmit',
        prettier: 'prettier --config .prettierrc --write .',
        typecheck: 'tsc --noEmit',
      },
      dependencies: {
        '@opentelemetry/core': '^1.30.1',
        '@opentelemetry/instrumentation': '^0.57.2',
        '@opentelemetry/semantic-conventions': '^1.30.0',
        'json-stringify-safe': '^5.0.1',
        shimmer: '^1.2.1',
        tslib: '^2.8.1',
      },
      devDependencies: {
        '@opentelemetry/api': '^1.9.0',
        '@sentry/node': '7.x',
        '@sentry/types-v7': 'npm:@sentry/types@7.x',
        '@sentry/types-v8': 'npm:@sentry/types@8.x',
      },
      peerDependencies: { '@opentelemetry/api': '^1.3.0' },
      nx: { tags: ['package'] },
    },
    Wf = {},
    qf = { exports: {} }
  !(function (e) {
    function t(e, t) {
      var n = [],
        r = []
      return (
        null == t &&
          (t = function (e, t) {
            return n[0] === t
              ? '[Circular ~]'
              : '[Circular ~.' + r.slice(0, n.indexOf(t)).join('.') + ']'
          }),
        function (o, i) {
          if (n.length > 0) {
            var s = n.indexOf(this)
            ~s ? n.splice(s + 1) : n.push(this),
              ~s ? r.splice(s, 1 / 0, o) : r.push(o),
              ~n.indexOf(i) && (i = t.call(this, o, i))
          } else n.push(i)
          return null == e ? i : e.call(this, o, i)
        }
      )
    }
    ;(e.exports = function (e, n, r, o) {
      return JSON.stringify(e, t(n, o), r)
    }).getSerialize = t
  })(qf)
  var Qf,
    zf,
    $f = qf.exports,
    Xf = t($f)
  function Jf() {
    return (
      zf ||
        ((zf = 1),
        (function (e) {
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.getEventProcessor =
              e.getSpanNameFromEvent =
              e.isSentryEventAnException =
              e.extractSpanEventsFromException =
              e.extractSemAttrsFromEvent =
              e.SEMATTRS_SENTRY_VERSION =
              e.SEMATTRS_EXCEPTION_THREAD_ID =
              e.SEMATTRS_EXCEPTION_TAGS =
              e.SEMATTRS_EXCEPTION_PARSED_STACKTRACE =
              e.SEMATTRS_EXCEPTION_MODULES =
              e.SEMATTRS_EXCEPTION_MODULE =
              e.SEMATTRS_EXCEPTION_MECHANISM =
                void 0)
          const t = H.__importStar(zt),
            n =
              (kt ||
                ((kt = 1),
                Object.defineProperty($t, '__esModule', { value: !0 }),
                ($t.ExceptionEventName = void 0),
                ($t.ExceptionEventName = 'exception')),
              $t),
            r = jf,
            o = Kf,
            i = (function () {
              if (Qf) return Wf
              ;(Qf = 1),
                Object.defineProperty(Wf, '__esModule', { value: !0 }),
                (Wf.jsonToString = void 0)
              const e = zt,
                t = H.__importDefault($f)
              return (
                (Wf.jsonToString = (n) => {
                  try {
                    return JSON.stringify(n)
                  } catch (r) {
                    return e.diag.error('Failed to stringify json', r), (0, t.default)(n)
                  }
                }),
                Wf
              )
            })(),
            s = t.default.trace.getTracer(o.name, o.version)
          ;(e.SEMATTRS_EXCEPTION_MECHANISM = 'exception.mechanism'),
            (e.SEMATTRS_EXCEPTION_MODULE = 'exception.module'),
            (e.SEMATTRS_EXCEPTION_MODULES = 'exception.modules'),
            (e.SEMATTRS_EXCEPTION_PARSED_STACKTRACE = 'exception.parsed_stacktrace'),
            (e.SEMATTRS_EXCEPTION_TAGS = 'exception.tags'),
            (e.SEMATTRS_EXCEPTION_THREAD_ID = 'exception.thread_id'),
            (e.SEMATTRS_SENTRY_VERSION = 'sentry.version')
          e.extractSemAttrsFromEvent = (t, n, o) => {
            var s, a, c, _, u, E
            return {
              ...(o && { [e.SEMATTRS_SENTRY_VERSION]: o }),
              ...(t.modules && { [e.SEMATTRS_EXCEPTION_MODULES]: (0, i.jsonToString)(t.modules) }),
              [e.SEMATTRS_EXCEPTION_TAGS]: (0, i.jsonToString)({
                culture: null === (s = t.contexts) || void 0 === s ? void 0 : s.culture,
                dist: t.dist,
                environment: t.environment,
                mechanism: n.mechanism,
                release: t.release,
              }),
              ...((null === (a = t.contexts) || void 0 === a ? void 0 : a.app) && {
                'app.build_type': t.contexts.app.build_type,
                'app.id': t.contexts.app.app_identifier,
                'app.memory': t.contexts.app.app_memory,
                'app.name': t.contexts.app.app_name,
                'app.start_time': t.contexts.app.app_start_time,
                'app.version': t.contexts.app.app_version,
              }),
              ...((null === (c = t.contexts) || void 0 === c ? void 0 : c.response) && {
                [r.SEMATTRS_HTTP_STATUS_CODE]: t.contexts.response.status_code,
                [r.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH]: t.contexts.response.body_size,
                ...(t.contexts.response.headers &&
                  Object.entries(t.contexts.response.headers).reduce(
                    (e, [t, n]) => ((e[`http.response.header.${t}`] = n), e),
                  ),
                {}),
              }),
              ...((null === (_ = t.contexts) || void 0 === _ ? void 0 : _.cloud_resource) && {
                'cloud.provider': t.contexts.cloud_resource['cloud.provider'],
                'cloud.account.id': t.contexts.cloud_resource['cloud.account.id'],
                'cloud.region': t.contexts.cloud_resource['cloud.region'],
                'cloud.availability_zone': t.contexts.cloud_resource['cloud.availability_zone'],
                'cloud.platform': t.contexts.cloud_resource['cloud.platform'],
                'host.id': t.contexts.cloud_resource['host.id'],
                'host.type': t.contexts.cloud_resource['host.type'],
              }),
              ...((null === (u = t.contexts) || void 0 === u ? void 0 : u.os) && {
                'os.build_id': t.contexts.os.build,
                'os.kernel_version': t.contexts.os.kernel_version,
                'os.type': t.contexts.os.name,
                'os.version': t.contexts.os.version,
              }),
              ...((null === (E = t.contexts) || void 0 === E ? void 0 : E.device) && {
                'device.id': t.contexts.device.device_unique_identifier,
                'device.manufacturer': t.contexts.device.manufacturer,
                'device.model.identifier': t.contexts.device.model_id,
                'device.model.name': t.contexts.device.model,
                'device.type': t.contexts.device.device_type,
                'device.battery_level': t.contexts.device.battery_level,
                'device.battery_status': t.contexts.device.battery_status,
                'device.orientation': t.contexts.device.orientation,
                'device.brand': t.contexts.device.brand,
                'device.sreen_resolution': t.contexts.device.screen_resolution,
                'device.screen_height_pixels': t.contexts.device.screen_height_pixels,
                'device.screen_width_pixels': t.contexts.device.screen_width_pixels,
                'device.screen_density': t.contexts.device.screen_density,
                'device.screen_dpi': t.contexts.device.screen_dpi,
                'device.online': t.contexts.device.online,
                'device.charging': t.contexts.device.charging,
                'device.supports_vibration': t.contexts.device.supports_vibration,
                'device.supports_accelerometer': t.contexts.device.supports_accelerometer,
                'device.supports_gyroscope': t.contexts.device.supports_gyroscope,
                'device.supports_audio': t.contexts.device.supports_audio,
                'device.supports_location_service': t.contexts.device.supports_location_service,
                'device.boot_time': t.contexts.device.boot_time,
                'device.low_memory': t.contexts.device.low_memory,
                'device.simulator': t.contexts.device.simulator,
                'device.memory_size': t.contexts.device.memory_size,
                'device.free_memory': t.contexts.device.free_memory,
                'device.usable_memory': t.contexts.device.usable_memory,
                'device.storage_size': t.contexts.device.storage_size,
                'device.free_storage': t.contexts.device.free_storage,
                'device.external_storage_size': t.contexts.device.external_storage_size,
                'device.external_free_storage': t.contexts.device.external_free_storage,
                'host.cpu.model.name': t.contexts.device.cpu_description,
                'host.cpu.count': t.contexts.device.processor_count,
                'host.cpu.frequency': t.contexts.device.processor_frequency,
              }),
              ...(t.server_name && { 'host.name': t.server_name }),
            }
          }
          e.extractSpanEventsFromException = (t) => ({
            [r.SEMATTRS_EXCEPTION_MESSAGE]: t.value,
            [e.SEMATTRS_EXCEPTION_PARSED_STACKTRACE]: (0, i.jsonToString)(t.stacktrace),
            [r.SEMATTRS_EXCEPTION_TYPE]: t.type,
            ...(t.mechanism && {
              [e.SEMATTRS_EXCEPTION_MECHANISM]: (0, i.jsonToString)(t.mechanism),
            }),
            ...(t.module && { [e.SEMATTRS_EXCEPTION_MODULE]: t.module }),
            ...(t.thread_id && { [e.SEMATTRS_EXCEPTION_THREAD_ID]: t.thread_id }),
          })
          e.isSentryEventAnException = (e) => {
            var t, n
            return (
              (null === (n = null === (t = e.exception) || void 0 === t ? void 0 : t.values) ||
              void 0 === n
                ? void 0
                : n.length) > 0
            )
          }
          e.getSpanNameFromEvent = (e) => {
            var t
            return e.message
              ? e.message
              : [
                  null === (t = e.exception) || void 0 === t ? void 0 : t.values[0].type,
                  e.transaction,
                ].join(' ')
          }
          e.getEventProcessor = (r, o) => (i, a, c, _) => {
            try {
              if ((t.diag.debug('Received Sentry event', i), (0, e.isSentryEventAnException)(i))) {
                let u = r
                null == u && ((u = s), t.diag.debug('Using default tracer')),
                  (({
                    customAttributes: r,
                    event: o,
                    hint: i,
                    sentryVersion: s,
                    span: a,
                    spanStatus: c,
                    tracer: _,
                  }) => {
                    var u, E
                    let l = a,
                      T = !1
                    const p = 1e3 * o.timestamp,
                      d = (0, e.extractSemAttrsFromEvent)(o, i, s)
                    null == l &&
                      ((T = !0),
                      (l = _.startSpan((0, e.getSpanNameFromEvent)(o), {
                        attributes: { ...r, ...d },
                        startTime: p,
                        kind: t.SpanKind.INTERNAL,
                      }))),
                      l.setStatus({ code: c })
                    for (const t of null !==
                      (E = null === (u = o.exception) || void 0 === u ? void 0 : u.values) &&
                    void 0 !== E
                      ? E
                      : [])
                      l.addEvent(n.ExceptionEventName, (0, e.extractSpanEventsFromException)(t))
                    T && l.end(p)
                  })({
                    customAttributes: _,
                    event: i,
                    hint: a,
                    sentryVersion: o,
                    span: c,
                    spanStatus: t.SpanStatusCode.ERROR,
                    tracer: u,
                  })
              }
            } catch (e) {
              t.diag.error('Error processing event', e)
            }
            return i
          }
        })(Y)),
      Y
    )
  }
  var Zf = {},
    eA = (function () {
      function e() {}
      return (e.prototype.emit = function (e) {}), e
    })(),
    tA = new eA(),
    nA = new ((function () {
      function e() {}
      return (
        (e.prototype.getLogger = function (e, t, n) {
          return new eA()
        }),
        e
      )
    })())(),
    rA = (function () {
      function e(e, t, n, r) {
        ;(this._provider = e), (this.name = t), (this.version = n), (this.options = r)
      }
      return (
        (e.prototype.emit = function (e) {
          this._getLogger().emit(e)
        }),
        (e.prototype._getLogger = function () {
          if (this._delegate) return this._delegate
          var e = this._provider.getDelegateLogger(this.name, this.version, this.options)
          return e ? ((this._delegate = e), this._delegate) : tA
        }),
        e
      )
    })(),
    oA = (function () {
      function e() {}
      return (
        (e.prototype.getLogger = function (e, t, n) {
          var r
          return null !== (r = this.getDelegateLogger(e, t, n)) && void 0 !== r
            ? r
            : new rA(this, e, t, n)
        }),
        (e.prototype.getDelegate = function () {
          var e
          return null !== (e = this._delegate) && void 0 !== e ? e : nA
        }),
        (e.prototype.setDelegate = function (e) {
          this._delegate = e
        }),
        (e.prototype.getDelegateLogger = function (e, t, n) {
          var r
          return null === (r = this._delegate) || void 0 === r ? void 0 : r.getLogger(e, t, n)
        }),
        e
      )
    })(),
    iA =
      'object' == typeof globalThis
        ? globalThis
        : 'object' == typeof self
          ? self
          : 'object' == typeof window
            ? window
            : 'object' == typeof global
              ? global
              : {},
    sA = Symbol.for('io.opentelemetry.js.api.logs'),
    aA = iA
  var cA = (function () {
      function e() {
        this._proxyLoggerProvider = new oA()
      }
      return (
        (e.getInstance = function () {
          return this._instance || (this._instance = new e()), this._instance
        }),
        (e.prototype.setGlobalLoggerProvider = function (e) {
          return aA[sA]
            ? this.getLoggerProvider()
            : ((aA[sA] = (function (e, t, n) {
                return function (r) {
                  return r === e ? t : n
                }
              })(1, e, nA)),
              this._proxyLoggerProvider.setDelegate(e),
              e)
        }),
        (e.prototype.getLoggerProvider = function () {
          var e, t
          return null !== (t = null === (e = aA[sA]) || void 0 === e ? void 0 : e.call(aA, 1)) &&
            void 0 !== t
            ? t
            : this._proxyLoggerProvider
        }),
        (e.prototype.getLogger = function (e, t, n) {
          return this.getLoggerProvider().getLogger(e, t, n)
        }),
        (e.prototype.disable = function () {
          delete aA[sA], (this._proxyLoggerProvider = new oA())
        }),
        e
      )
    })(),
    _A = cA.getInstance()
  function uA(e) {
    var t,
      n,
      r = e.tracerProvider || qt.getTracerProvider(),
      o = e.meterProvider || Ut.getMeterProvider(),
      i = e.loggerProvider || _A.getLoggerProvider(),
      s =
        null !== (n = null === (t = e.instrumentations) || void 0 === t ? void 0 : t.flat()) &&
        void 0 !== n
          ? n
          : []
    return (
      (function (e, t, n, r) {
        for (var o = 0, i = e.length; o < i; o++) {
          var s = e[o]
          t && s.setTracerProvider(t),
            n && s.setMeterProvider(n),
            r && s.setLoggerProvider && s.setLoggerProvider(r),
            s.getConfig().enabled || s.enable()
        }
      })(s, r, o, i),
      function () {
        !(function (e) {
          e.forEach(function (e) {
            return e.disable()
          })
        })(s)
      }
    )
  }
  function EA(e) {
    return 'function' == typeof e
  }
  var lA = console.error.bind(console)
  function TA(e, t, n) {
    var r = !!e[t] && e.propertyIsEnumerable(t)
    Object.defineProperty(e, t, { configurable: !0, enumerable: r, writable: !0, value: n })
  }
  function pA(e) {
    e &&
      e.logger &&
      (EA(e.logger) ? (lA = e.logger) : lA("new logger isn't a function, not replacing"))
  }
  function dA(e, t, n) {
    if (e && e[t]) {
      if (!n) return lA('no wrapper function'), void lA(new Error().stack)
      if (EA(e[t]) && EA(n)) {
        var r = e[t],
          o = n(r, t)
        return (
          TA(o, '__original', r),
          TA(o, '__unwrap', function () {
            e[t] === o && TA(e, t, r)
          }),
          TA(o, '__wrapped', !0),
          TA(e, t, o),
          o
        )
      }
      lA('original object and wrapper must be functions')
    } else lA('no original function ' + t + ' to wrap')
  }
  function SA(e, t) {
    return e && e[t]
      ? e[t].__unwrap
        ? e[t].__unwrap()
        : void lA('no original to unwrap to -- has ' + t + ' already been unwrapped?')
      : (lA('no function to unwrap.'), void lA(new Error().stack))
  }
  ;(pA.wrap = dA),
    (pA.massWrap = function (e, t, n) {
      if (!e) return lA('must provide one or more modules to patch'), void lA(new Error().stack)
      Array.isArray(e) || (e = [e]),
        t && Array.isArray(t)
          ? e.forEach(function (e) {
              t.forEach(function (t) {
                dA(e, t, n)
              })
            })
          : lA('must provide one or more functions to wrap on modules')
    }),
    (pA.unwrap = SA),
    (pA.massUnwrap = function (e, t) {
      if (!e) return lA('must provide one or more modules to patch'), void lA(new Error().stack)
      Array.isArray(e) || (e = [e]),
        t && Array.isArray(t)
          ? e.forEach(function (e) {
              t.forEach(function (t) {
                SA(e, t)
              })
            })
          : lA('must provide one or more functions to unwrap on modules')
    })
  var fA = pA,
    AA = function () {
      return (
        (AA =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }),
        AA.apply(this, arguments)
      )
    },
    hA = (function () {
      function e(e, t, n) {
        ;(this.instrumentationName = e),
          (this.instrumentationVersion = t),
          (this._config = {}),
          (this._wrap = fA.wrap),
          (this._unwrap = fA.unwrap),
          (this._massWrap = fA.massWrap),
          (this._massUnwrap = fA.massUnwrap),
          this.setConfig(n),
          (this._diag = Lt.createComponentLogger({ namespace: e })),
          (this._tracer = qt.getTracer(e, t)),
          (this._meter = Ut.getMeter(e, t)),
          (this._logger = _A.getLogger(e, t)),
          this._updateMetricInstruments()
      }
      return (
        Object.defineProperty(e.prototype, 'meter', {
          get: function () {
            return this._meter
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.setMeterProvider = function (e) {
          ;(this._meter = e.getMeter(this.instrumentationName, this.instrumentationVersion)),
            this._updateMetricInstruments()
        }),
        Object.defineProperty(e.prototype, 'logger', {
          get: function () {
            return this._logger
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.setLoggerProvider = function (e) {
          this._logger = e.getLogger(this.instrumentationName, this.instrumentationVersion)
        }),
        (e.prototype.getModuleDefinitions = function () {
          var e,
            t = null !== (e = this.init()) && void 0 !== e ? e : []
          return Array.isArray(t) ? t : [t]
        }),
        (e.prototype._updateMetricInstruments = function () {}),
        (e.prototype.getConfig = function () {
          return this._config
        }),
        (e.prototype.setConfig = function (e) {
          this._config = AA({ enabled: !0 }, e)
        }),
        (e.prototype.setTracerProvider = function (e) {
          this._tracer = e.getTracer(this.instrumentationName, this.instrumentationVersion)
        }),
        Object.defineProperty(e.prototype, 'tracer', {
          get: function () {
            return this._tracer
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype._runSpanCustomizationHook = function (e, t, n, r) {
          if (e)
            try {
              e(n, r)
            } catch (e) {
              this._diag.error(
                'Error running span customization hook due to exception in handler',
                { triggerName: t },
                e,
              )
            }
        }),
        e
      )
    })(),
    mA = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    RA = (function (e) {
      function t(t, n, r) {
        var o = e.call(this, t, n, r) || this
        return o._config.enabled && o.enable(), o
      }
      return mA(t, e), t
    })(hA)
  var gA = function (e, t, n, r, o) {
      ;(this.name = e),
        (this.supportedVersions = t),
        (this.patch = n),
        (this.unpatch = r),
        (this.files = o || [])
    },
    OA = function (e, t, n, r) {
      ;(this.supportedVersions = t),
        (this.patch = n),
        (this.unpatch = r),
        (this.name = (function (e) {
          return (
            Lt.warn(
              'Path normalization is not implemented for this platform. To silence this warning, ensure no node-specific instrumentations are loaded, and node-specific types (e.g. InstrumentationNodeModuleFile), are not used in a browser context)',
            ),
            e
          )
        })(e))
    },
    vA = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (e) {
            i(e)
          }
        }
        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function c(e) {
          var t
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t)
                  })).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
    IA = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1]
            return o[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this
          }),
        i
      )
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.')
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i
                    break
                  case 4:
                    return s.label++, { value: i[1], done: !1 }
                  case 5:
                    s.label++, (r = i[1]), (i = [0])
                    continue
                  case 7:
                    ;(i = s.ops.pop()), s.trys.pop()
                    continue
                  default:
                    if (
                      !((o = s.trys),
                      (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                    ) {
                      s = 0
                      continue
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1]
                      break
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      ;(s.label = o[1]), (o = i)
                      break
                    }
                    if (o && s.label < o[2]) {
                      ;(s.label = o[2]), s.ops.push(i)
                      break
                    }
                    o[2] && s.ops.pop(), s.trys.pop()
                    continue
                }
                i = t.call(e, s)
              } catch (e) {
                ;(i = [6, e]), (r = 0)
              } finally {
                n = o = 0
              }
            if (5 & i[0]) throw i[1]
            return { value: i[0] ? i[1] : void 0, done: !0 }
          })([i, a])
        }
      }
    }
  function NA(e, t, n) {
    var r, o
    try {
      o = e()
    } catch (e) {
      r = e
    } finally {
      if ((t(r, o), r && !n)) throw r
      return o
    }
  }
  function yA(e) {
    return (
      'function' == typeof e &&
      'function' == typeof e.__original &&
      'function' == typeof e.__unwrap &&
      !0 === e.__wrapped
    )
  }
  var CA,
    LA,
    bA = Object.freeze({
      __proto__: null,
      InstrumentationBase: RA,
      InstrumentationNodeModuleDefinition: gA,
      InstrumentationNodeModuleFile: OA,
      isWrapped: yA,
      registerInstrumentations: uA,
      safeExecuteInTheMiddle: NA,
      safeExecuteInTheMiddleAsync: function (e, t, n) {
        return vA(this, void 0, void 0, function () {
          var r, o, i
          return IA(this, function (s) {
            switch (s.label) {
              case 0:
                return s.trys.push([0, 2, 3, 4]), [4, e()]
              case 1:
                return (o = s.sent()), [3, 4]
              case 2:
                return (i = s.sent()), (r = i), [3, 4]
              case 3:
                if ((t(r, o), r && !n)) throw r
                return [2, o]
              case 4:
                return [2]
            }
          })
        })
      },
    }),
    MA = n(bA),
    PA = {}
  function UA() {
    if (LA) return Zf
    ;(LA = 1),
      Object.defineProperty(Zf, '__esModule', { value: !0 }),
      (Zf.SentryNodeInstrumentation = void 0)
    const e = zt,
      t = MA,
      n = Kf,
      r =
        (CA ||
          ((CA = 1),
          (function (e) {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.imqaIntegration = e._imqaIntegration = void 0)
            const t = Jf()
            ;(e._imqaIntegration = () => ({
              name: 'IMQA',
              setupOnce() {},
              setup(e) {
                var n
                if (!e.on) return
                const r = e.getSdkMetadata(),
                  o = (0, t.getEventProcessor)(
                    void 0,
                    null === (n = r.sdk) || void 0 === n ? void 0 : n.version,
                  )
                e.on('beforeSendEvent', (e, t) => {
                  o(e, t)
                })
              },
            })),
              (e.imqaIntegration = e._imqaIntegration)
          })(PA)),
        PA)
    class o extends t.InstrumentationBase {
      constructor(e = {}) {
        super(n.name, n.version, e)
      }
      setConfig(e = {}) {
        this._config = Object.assign({}, e)
      }
      getConfig() {
        return this._config
      }
      init() {
        return [
          new t.InstrumentationNodeModuleDefinition(
            '@sentry/node',
            ['>=7.30.0 <9'],
            (t) => (
              e.diag.debug(`Detected Sentry installed with SDK version: ${t.SDK_VERSION}`),
              this._wrap(t, 'init', (n) => (...o) => {
                const i = n.apply(this, o)
                try {
                  t.addIntegration instanceof Function
                    ? (t.addIntegration((0, r.imqaIntegration)()),
                      e.diag.debug('Added IMQA Sentry integration'))
                    : e.diag.error('Sentry SDK does not support addIntegration method')
                } catch (t) {
                  e.diag.error('Error adding IMQA Sentry integration', t)
                }
                return i
              }),
              t
            ),
            (e) => {},
          ),
        ]
      }
    }
    return (Zf.SentryNodeInstrumentation = o), Zf
  }
  var DA,
    wA = {}
  !(function (e) {
    Object.defineProperty(e, '__esModule', { value: !0 })
    const t = H
    t.__exportStar(Jf(), e),
      t.__exportStar(UA(), e),
      t.__exportStar(
        (DA || ((DA = 1), Object.defineProperty(wA, '__esModule', { value: !0 })), wA),
        e,
      )
  })(o)
  var xA = {},
    VA = {},
    GA = {}
  Object.defineProperty(GA, '__esModule', { value: !0 })
  const BA = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
  GA.DEBUG_BUILD = BA
  var kA = {},
    FA = {},
    HA = {}
  Object.defineProperty(HA, '__esModule', { value: !0 })
  ;(HA.SDK_VERSION = '8.50.0'), Object.defineProperty(FA, '__esModule', { value: !0 })
  const YA = HA,
    jA = globalThis
  ;(FA.GLOBAL_OBJ = jA),
    (FA.getGlobalSingleton = function (e, t, n) {
      const r = n || jA,
        o = (r.__SENTRY__ = r.__SENTRY__ || {}),
        i = (o[YA.SDK_VERSION] = o[YA.SDK_VERSION] || {})
      return i[e] || (i[e] = t())
    })
  var KA = {},
    WA = {}
  Object.defineProperty(WA, '__esModule', { value: !0 })
  const qA = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
  WA.DEBUG_BUILD = qA
  var QA = {}
  Object.defineProperty(QA, '__esModule', { value: !0 })
  const zA = WA,
    $A = FA,
    XA = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'],
    JA = {}
  function ZA(e) {
    if (!('console' in $A.GLOBAL_OBJ)) return e()
    const t = $A.GLOBAL_OBJ.console,
      n = {},
      r = Object.keys(JA)
    r.forEach((e) => {
      const r = JA[e]
      ;(n[e] = t[e]), (t[e] = r)
    })
    try {
      return e()
    } finally {
      r.forEach((e) => {
        t[e] = n[e]
      })
    }
  }
  const eh = $A.getGlobalSingleton('logger', function () {
    let e = !1
    const t = {
      enable: () => {
        e = !0
      },
      disable: () => {
        e = !1
      },
      isEnabled: () => e,
    }
    return (
      zA.DEBUG_BUILD
        ? XA.forEach((n) => {
            t[n] = (...t) => {
              e &&
                ZA(() => {
                  $A.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`, ...t)
                })
            }
          })
        : XA.forEach((e) => {
            t[e] = () => {}
          }),
      t
    )
  })
  ;(QA.CONSOLE_LEVELS = XA),
    (QA.consoleSandbox = ZA),
    (QA.logger = eh),
    (QA.originalConsoleMethods = JA)
  var th = {}
  Object.defineProperty(th, '__esModule', { value: !0 })
  const nh = /\(error: (.*)\)/,
    rh = /captureMessage|captureException/
  function oh(...e) {
    const t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1])
    return (e, n = 0, r = 0) => {
      const o = [],
        i = e.split('\n')
      for (let e = n; e < i.length; e++) {
        const n = i[e]
        if (n.length > 1024) continue
        const s = nh.test(n) ? n.replace(nh, '$1') : n
        if (!s.match(/\S*Error: /)) {
          for (const e of t) {
            const t = e(s)
            if (t) {
              o.push(t)
              break
            }
          }
          if (o.length >= 50 + r) break
        }
      }
      return ih(o.slice(r))
    }
  }
  function ih(e) {
    if (!e.length) return []
    const t = Array.from(e)
    return (
      /sentryWrapped/.test(sh(t).function || '') && t.pop(),
      t.reverse(),
      rh.test(sh(t).function || '') && (t.pop(), rh.test(sh(t).function || '') && t.pop()),
      t
        .slice(0, 50)
        .map((e) => ({ ...e, filename: e.filename || sh(t).filename, function: e.function || '?' }))
    )
  }
  function sh(e) {
    return e[e.length - 1] || {}
  }
  const ah = '<anonymous>'
  ;(th.UNKNOWN_FUNCTION = '?'),
    (th.createStackParser = oh),
    (th.getFramesFromEvent = function (e) {
      const t = e.exception
      if (t) {
        const e = []
        try {
          return (
            t.values.forEach((t) => {
              t.stacktrace.frames && e.push(...t.stacktrace.frames)
            }),
            e
          )
        } catch (e) {
          return
        }
      }
    }),
    (th.getFunctionName = function (e) {
      try {
        return (e && 'function' == typeof e && e.name) || ah
      } catch (e) {
        return ah
      }
    }),
    (th.stackParserFromStackParserOptions = function (e) {
      return Array.isArray(e) ? oh(...e) : e
    }),
    (th.stripSentryFramesAndReverse = ih),
    Object.defineProperty(KA, '__esModule', { value: !0 })
  const ch = WA,
    _h = QA,
    uh = th,
    Eh = {},
    lh = {}
  ;(KA.addHandler = function (e, t) {
    ;(Eh[e] = Eh[e] || []), Eh[e].push(t)
  }),
    (KA.maybeInstrument = function (e, t) {
      if (!lh[e]) {
        lh[e] = !0
        try {
          t()
        } catch (t) {
          ch.DEBUG_BUILD && _h.logger.error(`Error while instrumenting ${e}`, t)
        }
      }
    }),
    (KA.resetInstrumentationHandlers = function () {
      Object.keys(Eh).forEach((e) => {
        Eh[e] = void 0
      })
    }),
    (KA.triggerHandlers = function (e, t) {
      const n = e && Eh[e]
      if (n)
        for (const r of n)
          try {
            r(t)
          } catch (t) {
            ch.DEBUG_BUILD &&
              _h.logger.error(
                `Error while triggering instrumentation handler.\nType: ${e}\nName: ${uh.getFunctionName(r)}\nError:`,
                t,
              )
          }
    }),
    Object.defineProperty(kA, '__esModule', { value: !0 })
  const Th = FA,
    ph = KA
  let dh = null
  function Sh() {
    ;(dh = Th.GLOBAL_OBJ.onerror),
      (Th.GLOBAL_OBJ.onerror = function (e, t, n, r, o) {
        const i = { column: r, error: o, line: n, msg: e, url: t }
        return ph.triggerHandlers('error', i), !!dh && dh.apply(this, arguments)
      }),
      (Th.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0)
  }
  kA.addGlobalErrorInstrumentationHandler = function (e) {
    const t = 'error'
    ph.addHandler(t, e), ph.maybeInstrument(t, Sh)
  }
  var fh = {}
  Object.defineProperty(fh, '__esModule', { value: !0 })
  const Ah = FA,
    hh = KA
  let mh = null
  function Rh() {
    ;(mh = Ah.GLOBAL_OBJ.onunhandledrejection),
      (Ah.GLOBAL_OBJ.onunhandledrejection = function (e) {
        const t = e
        return hh.triggerHandlers('unhandledrejection', t), !mh || mh.apply(this, arguments)
      }),
      (Ah.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0)
  }
  fh.addGlobalUnhandledRejectionInstrumentationHandler = function (e) {
    const t = 'unhandledrejection'
    hh.addHandler(t, e), hh.maybeInstrument(t, Rh)
  }
  var gh = {},
    Oh = {},
    vh = {}
  Object.defineProperty(vh, '__esModule', { value: !0 })
  const Ih = HA,
    Nh = FA
  function yh(e) {
    const t = (e.__SENTRY__ = e.__SENTRY__ || {})
    return (t.version = t.version || Ih.SDK_VERSION), (t[Ih.SDK_VERSION] = t[Ih.SDK_VERSION] || {})
  }
  ;(vh.getMainCarrier = function () {
    return yh(Nh.GLOBAL_OBJ), Nh.GLOBAL_OBJ
  }),
    (vh.getSentryCarrier = yh)
  var Ch = {},
    Lh = {},
    bh = {},
    Mh = {},
    Ph = {},
    Uh = {},
    Dh = {}
  Object.defineProperty(Dh, '__esModule', { value: !0 })
  const wh = Object.prototype.toString
  function xh(e, t) {
    return wh.call(e) === `[object ${t}]`
  }
  function Vh(e) {
    return (
      'object' == typeof e &&
      null !== e &&
      '__sentry_template_string__' in e &&
      '__sentry_template_values__' in e
    )
  }
  function Gh(e) {
    return xh(e, 'Object')
  }
  function Bh(e, t) {
    try {
      return e instanceof t
    } catch (e) {
      return !1
    }
  }
  ;(Dh.isDOMError = function (e) {
    return xh(e, 'DOMError')
  }),
    (Dh.isDOMException = function (e) {
      return xh(e, 'DOMException')
    }),
    (Dh.isElement = function (e) {
      return 'undefined' != typeof Element && Bh(e, Element)
    }),
    (Dh.isError = function (e) {
      switch (wh.call(e)) {
        case '[object Error]':
        case '[object Exception]':
        case '[object DOMException]':
        case '[object WebAssembly.Exception]':
          return !0
        default:
          return Bh(e, Error)
      }
    }),
    (Dh.isErrorEvent = function (e) {
      return xh(e, 'ErrorEvent')
    }),
    (Dh.isEvent = function (e) {
      return 'undefined' != typeof Event && Bh(e, Event)
    }),
    (Dh.isInstanceOf = Bh),
    (Dh.isParameterizedString = Vh),
    (Dh.isPlainObject = Gh),
    (Dh.isPrimitive = function (e) {
      return null === e || Vh(e) || ('object' != typeof e && 'function' != typeof e)
    }),
    (Dh.isRegExp = function (e) {
      return xh(e, 'RegExp')
    }),
    (Dh.isString = function (e) {
      return xh(e, 'String')
    }),
    (Dh.isSyntheticEvent = function (e) {
      return Gh(e) && 'nativeEvent' in e && 'preventDefault' in e && 'stopPropagation' in e
    }),
    (Dh.isThenable = function (e) {
      return Boolean(e && e.then && 'function' == typeof e.then)
    }),
    (Dh.isVueViewModel = function (e) {
      return !('object' != typeof e || null === e || (!e.__isVue && !e._isVue))
    }),
    Object.defineProperty(Uh, '__esModule', { value: !0 })
  const kh = Dh,
    Fh = FA.GLOBAL_OBJ
  function Hh(e, t) {
    const n = e,
      r = []
    if (!n || !n.tagName) return ''
    if (Fh.HTMLElement && n instanceof HTMLElement && n.dataset) {
      if (n.dataset.sentryComponent) return n.dataset.sentryComponent
      if (n.dataset.sentryElement) return n.dataset.sentryElement
    }
    r.push(n.tagName.toLowerCase())
    const o =
      t && t.length ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)]) : null
    if (o && o.length)
      o.forEach((e) => {
        r.push(`[${e[0]}="${e[1]}"]`)
      })
    else {
      n.id && r.push(`#${n.id}`)
      const e = n.className
      if (e && kh.isString(e)) {
        const t = e.split(/\s+/)
        for (const e of t) r.push(`.${e}`)
      }
    }
    const i = ['aria-label', 'type', 'name', 'title', 'alt']
    for (const e of i) {
      const t = n.getAttribute(e)
      t && r.push(`[${e}="${t}"]`)
    }
    return r.join('')
  }
  ;(Uh.getComponentName = function (e) {
    if (!Fh.HTMLElement) return null
    let t = e
    for (let e = 0; e < 5; e++) {
      if (!t) return null
      if (t instanceof HTMLElement) {
        if (t.dataset.sentryComponent) return t.dataset.sentryComponent
        if (t.dataset.sentryElement) return t.dataset.sentryElement
      }
      t = t.parentNode
    }
    return null
  }),
    (Uh.getDomElement = function (e) {
      return Fh.document && Fh.document.querySelector ? Fh.document.querySelector(e) : null
    }),
    (Uh.getLocationHref = function () {
      try {
        return Fh.document.location.href
      } catch (e) {
        return ''
      }
    }),
    (Uh.htmlTreeAsString = function (e, t = {}) {
      if (!e) return '<unknown>'
      try {
        let n = e
        const r = 5,
          o = []
        let i = 0,
          s = 0
        const a = ' > ',
          c = a.length
        let _
        const u = Array.isArray(t) ? t : t.keyAttrs,
          E = (!Array.isArray(t) && t.maxStringLength) || 80
        for (
          ;
          n &&
          i++ < r &&
          ((_ = Hh(n, u)), !('html' === _ || (i > 1 && s + o.length * c + _.length >= E)));

        )
          o.push(_), (s += _.length), (n = n.parentNode)
        return o.reverse().join(a)
      } catch (e) {
        return '<unknown>'
      }
    })
  var Yh = {}
  Object.defineProperty(Yh, '__esModule', { value: !0 })
  const jh = Dh
  function Kh(e, t, n = !1) {
    return (
      !!jh.isString(e) &&
      (jh.isRegExp(t) ? t.test(e) : !!jh.isString(t) && (n ? e === t : e.includes(t)))
    )
  }
  ;(Yh.isMatchingPattern = Kh),
    (Yh.safeJoin = function (e, t) {
      if (!Array.isArray(e)) return ''
      const n = []
      for (let t = 0; t < e.length; t++) {
        const r = e[t]
        try {
          jh.isVueViewModel(r) ? n.push('[VueViewModel]') : n.push(String(r))
        } catch (e) {
          n.push('[value cannot be serialized]')
        }
      }
      return n.join(t)
    }),
    (Yh.snipLine = function (e, t) {
      let n = e
      const r = n.length
      if (r <= 150) return n
      t > r && (t = r)
      let o = Math.max(t - 60, 0)
      o < 5 && (o = 0)
      let i = Math.min(o + 140, r)
      return (
        i > r - 5 && (i = r),
        i === r && (o = Math.max(i - 140, 0)),
        (n = n.slice(o, i)),
        o > 0 && (n = `'{snip} ${n}`),
        i < r && (n += ' {snip}'),
        n
      )
    }),
    (Yh.stringMatchesSomePattern = function (e, t = [], n = !1) {
      return t.some((t) => Kh(e, t, n))
    }),
    (Yh.truncate = function (e, t = 0) {
      return 'string' != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`
    }),
    Object.defineProperty(Ph, '__esModule', { value: !0 })
  const Wh = Uh,
    qh = WA,
    Qh = Dh,
    zh = QA,
    $h = Yh
  function Xh(e, t, n) {
    try {
      Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 })
    } catch (n) {
      qh.DEBUG_BUILD && zh.logger.log(`Failed to add non-enumerable property "${t}" to object`, e)
    }
  }
  function Jh(e, t) {
    try {
      const n = t.prototype || {}
      ;(e.prototype = t.prototype = n), Xh(e, '__sentry_original__', t)
    } catch (e) {}
  }
  function Zh(e) {
    if (Qh.isError(e)) return { message: e.message, name: e.name, stack: e.stack, ...tm(e) }
    if (Qh.isEvent(e)) {
      const t = { type: e.type, target: em(e.target), currentTarget: em(e.currentTarget), ...tm(e) }
      return (
        'undefined' != typeof CustomEvent &&
          Qh.isInstanceOf(e, CustomEvent) &&
          (t.detail = e.detail),
        t
      )
    }
    return e
  }
  function em(e) {
    try {
      return Qh.isElement(e) ? Wh.htmlTreeAsString(e) : Object.prototype.toString.call(e)
    } catch (e) {
      return '<unknown>'
    }
  }
  function tm(e) {
    if ('object' == typeof e && null !== e) {
      const t = {}
      for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
      return t
    }
    return {}
  }
  function nm(e, t) {
    if (
      (function (e) {
        if (!Qh.isPlainObject(e)) return !1
        try {
          const t = Object.getPrototypeOf(e).constructor.name
          return !t || 'Object' === t
        } catch (e) {
          return !0
        }
      })(e)
    ) {
      const n = t.get(e)
      if (void 0 !== n) return n
      const r = {}
      t.set(e, r)
      for (const n of Object.getOwnPropertyNames(e)) void 0 !== e[n] && (r[n] = nm(e[n], t))
      return r
    }
    if (Array.isArray(e)) {
      const n = t.get(e)
      if (void 0 !== n) return n
      const r = []
      return (
        t.set(e, r),
        e.forEach((e) => {
          r.push(nm(e, t))
        }),
        r
      )
    }
    return e
  }
  ;(Ph.addNonEnumerableProperty = Xh),
    (Ph.convertToPlainObject = Zh),
    (Ph.dropUndefinedKeys = function (e) {
      return nm(e, new Map())
    }),
    (Ph.extractExceptionKeysForMessage = function (e, t = 40) {
      const n = Object.keys(Zh(e))
      n.sort()
      const r = n[0]
      if (!r) return '[object has no keys]'
      if (r.length >= t) return $h.truncate(r, t)
      for (let e = n.length; e > 0; e--) {
        const r = n.slice(0, e).join(', ')
        if (!(r.length > t)) return e === n.length ? r : $h.truncate(r, t)
      }
      return ''
    }),
    (Ph.fill = function (e, t, n) {
      if (!(t in e)) return
      const r = e[t],
        o = n(r)
      'function' == typeof o && Jh(o, r)
      try {
        e[t] = o
      } catch (n) {
        qh.DEBUG_BUILD && zh.logger.log(`Failed to replace method "${t}" in object`, e)
      }
    }),
    (Ph.getOriginalFunction = function (e) {
      return e.__sentry_original__
    }),
    (Ph.markFunctionWrapped = Jh),
    (Ph.objectify = function (e) {
      let t
      switch (!0) {
        case null == e:
          t = new String(e)
          break
        case 'symbol' == typeof e || 'bigint' == typeof e:
          t = Object(e)
          break
        case Qh.isPrimitive(e):
          t = new e.constructor(e)
          break
        default:
          t = e
      }
      return t
    }),
    (Ph.urlEncode = function (e) {
      return Object.entries(e)
        .map(([e, t]) => `${encodeURIComponent(e)}=${encodeURIComponent(t)}`)
        .join('&')
    })
  var rm = {}
  Object.defineProperty(rm, '__esModule', { value: !0 })
  const om = FA
  function im() {
    return Date.now() / 1e3
  }
  const sm = (function () {
    const { performance: e } = om.GLOBAL_OBJ
    if (!e || !e.now) return im
    const t = Date.now() - e.now(),
      n = null == e.timeOrigin ? t : e.timeOrigin
    return () => (n + e.now()) / 1e3
  })()
  rm._browserPerformanceTimeOriginMode = void 0
  const am = (() => {
    const { performance: e } = om.GLOBAL_OBJ
    if (!e || !e.now) return void (rm._browserPerformanceTimeOriginMode = 'none')
    const t = 36e5,
      n = e.now(),
      r = Date.now(),
      o = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
      i = o < t,
      s = e.timing && e.timing.navigationStart,
      a = 'number' == typeof s ? Math.abs(s + n - r) : t
    return i || a < t
      ? o <= a
        ? ((rm._browserPerformanceTimeOriginMode = 'timeOrigin'), e.timeOrigin)
        : ((rm._browserPerformanceTimeOriginMode = 'navigationStart'), s)
      : ((rm._browserPerformanceTimeOriginMode = 'dateNow'), r)
  })()
  ;(rm.browserPerformanceTimeOrigin = am),
    (rm.dateTimestampInSeconds = im),
    (rm.timestampInSeconds = sm)
  var cm = {}
  Object.defineProperty(cm, '__esModule', { value: !0 })
  const _m = Ph,
    um = Yh,
    Em = FA
  function lm(e) {
    return e.exception && e.exception.values ? e.exception.values[0] : void 0
  }
  const Tm =
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
  function pm(e) {
    return parseInt(e || '', 10)
  }
  ;(cm.addContextToFrame = function (e, t, n = 5) {
    if (void 0 === t.lineno) return
    const r = e.length,
      o = Math.max(Math.min(r - 1, t.lineno - 1), 0)
    t.pre_context = e.slice(Math.max(0, o - n), o).map((e) => um.snipLine(e, 0))
    const i = Math.min(r - 1, o)
    ;(t.context_line = um.snipLine(e[i], t.colno || 0)),
      (t.post_context = e.slice(Math.min(o + 1, r), o + 1 + n).map((e) => um.snipLine(e, 0)))
  }),
    (cm.addExceptionMechanism = function (e, t) {
      const n = lm(e)
      if (!n) return
      const r = n.mechanism
      if (((n.mechanism = { type: 'generic', handled: !0, ...r, ...t }), t && 'data' in t)) {
        const e = { ...(r && r.data), ...t.data }
        n.mechanism.data = e
      }
    }),
    (cm.addExceptionTypeValue = function (e, t, n) {
      const r = (e.exception = e.exception || {}),
        o = (r.values = r.values || []),
        i = (o[0] = o[0] || {})
      i.value || (i.value = t || ''), i.type || (i.type = n || 'Error')
    }),
    (cm.arrayify = function (e) {
      return Array.isArray(e) ? e : [e]
    }),
    (cm.checkOrSetAlreadyCaught = function (e) {
      if (
        (function (e) {
          try {
            return e.__sentry_captured__
          } catch (e) {}
        })(e)
      )
        return !0
      try {
        _m.addNonEnumerableProperty(e, '__sentry_captured__', !0)
      } catch (e) {}
      return !1
    }),
    (cm.getEventDescription = function (e) {
      const { message: t, event_id: n } = e
      if (t) return t
      const r = lm(e)
      return r
        ? r.type && r.value
          ? `${r.type}: ${r.value}`
          : r.type || r.value || n || '<unknown>'
        : n || '<unknown>'
    }),
    (cm.parseSemver = function (e) {
      const t = e.match(Tm) || [],
        n = pm(t[1]),
        r = pm(t[2]),
        o = pm(t[3])
      return {
        buildmetadata: t[5],
        major: isNaN(n) ? void 0 : n,
        minor: isNaN(r) ? void 0 : r,
        patch: isNaN(o) ? void 0 : o,
        prerelease: t[4],
      }
    }),
    (cm.uuid4 = function () {
      const e = Em.GLOBAL_OBJ,
        t = e.crypto || e.msCrypto
      let n = () => 16 * Math.random()
      try {
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, '')
        t &&
          t.getRandomValues &&
          (n = () => {
            const e = new Uint8Array(1)
            return t.getRandomValues(e), e[0]
          })
      } catch (e) {}
      return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e) =>
        (e ^ ((15 & n()) >> (e / 4))).toString(16),
      )
    })
  var dm = {}
  Object.defineProperty(dm, '__esModule', { value: !0 })
  const Sm = Dh
  var fm
  !(function (e) {
    e[(e.PENDING = 0)] = 'PENDING'
    e[(e.RESOLVED = 1)] = 'RESOLVED'
    e[(e.REJECTED = 2)] = 'REJECTED'
  })(fm || (fm = {}))
  let Am = class e {
    constructor(t) {
      e.prototype.__init.call(this),
        e.prototype.__init2.call(this),
        e.prototype.__init3.call(this),
        e.prototype.__init4.call(this),
        (this._state = fm.PENDING),
        (this._handlers = [])
      try {
        t(this._resolve, this._reject)
      } catch (e) {
        this._reject(e)
      }
    }
    then(t, n) {
      return new e((e, r) => {
        this._handlers.push([
          !1,
          (n) => {
            if (t)
              try {
                e(t(n))
              } catch (e) {
                r(e)
              }
            else e(n)
          },
          (t) => {
            if (n)
              try {
                e(n(t))
              } catch (e) {
                r(e)
              }
            else r(t)
          },
        ]),
          this._executeHandlers()
      })
    }
    catch(e) {
      return this.then((e) => e, e)
    }
    finally(t) {
      return new e((e, n) => {
        let r, o
        return this.then(
          (e) => {
            ;(o = !1), (r = e), t && t()
          },
          (e) => {
            ;(o = !0), (r = e), t && t()
          },
        ).then(() => {
          o ? n(r) : e(r)
        })
      })
    }
    __init() {
      this._resolve = (e) => {
        this._setResult(fm.RESOLVED, e)
      }
    }
    __init2() {
      this._reject = (e) => {
        this._setResult(fm.REJECTED, e)
      }
    }
    __init3() {
      this._setResult = (e, t) => {
        this._state === fm.PENDING &&
          (Sm.isThenable(t)
            ? t.then(this._resolve, this._reject)
            : ((this._state = e), (this._value = t), this._executeHandlers()))
      }
    }
    __init4() {
      this._executeHandlers = () => {
        if (this._state === fm.PENDING) return
        const e = this._handlers.slice()
        ;(this._handlers = []),
          e.forEach((e) => {
            e[0] ||
              (this._state === fm.RESOLVED && e[1](this._value),
              this._state === fm.REJECTED && e[2](this._value),
              (e[0] = !0))
          })
      }
    }
  }
  ;(dm.SyncPromise = Am),
    (dm.rejectedSyncPromise = function (e) {
      return new Am((t, n) => {
        n(e)
      })
    }),
    (dm.resolvedSyncPromise = function (e) {
      return new Am((t) => {
        t(e)
      })
    }),
    Object.defineProperty(Mh, '__esModule', { value: !0 })
  const hm = Ph,
    mm = rm,
    Rm = cm
  function gm(e, t = {}) {
    if (
      (t.user &&
        (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
        e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
      (e.timestamp = t.timestamp || mm.timestampInSeconds()),
      t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
      t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
      t.sid && (e.sid = 32 === t.sid.length ? t.sid : Rm.uuid4()),
      void 0 !== t.init && (e.init = t.init),
      !e.did && t.did && (e.did = `${t.did}`),
      'number' == typeof t.started && (e.started = t.started),
      e.ignoreDuration)
    )
      e.duration = void 0
    else if ('number' == typeof t.duration) e.duration = t.duration
    else {
      const t = e.timestamp - e.started
      e.duration = t >= 0 ? t : 0
    }
    t.release && (e.release = t.release),
      t.environment && (e.environment = t.environment),
      !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
      !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
      'number' == typeof t.errors && (e.errors = t.errors),
      t.status && (e.status = t.status)
  }
  ;(Mh.closeSession = function (e, t) {
    let n = {}
    t ? (n = { status: t }) : 'ok' === e.status && (n = { status: 'exited' }), gm(e, n)
  }),
    (Mh.makeSession = function (e) {
      const t = mm.timestampInSeconds(),
        n = {
          sid: Rm.uuid4(),
          init: !0,
          timestamp: t,
          started: t,
          duration: 0,
          status: 'ok',
          errors: 0,
          ignoreDuration: !1,
          toJSON: () =>
            (function (e) {
              return hm.dropUndefinedKeys({
                sid: `${e.sid}`,
                init: e.init,
                started: new Date(1e3 * e.started).toISOString(),
                timestamp: new Date(1e3 * e.timestamp).toISOString(),
                status: e.status,
                errors: e.errors,
                did: 'number' == typeof e.did || 'string' == typeof e.did ? `${e.did}` : void 0,
                duration: e.duration,
                abnormal_mechanism: e.abnormal_mechanism,
                attrs: {
                  release: e.release,
                  environment: e.environment,
                  ip_address: e.ipAddress,
                  user_agent: e.userAgent,
                },
              })
            })(n),
        }
      return e && gm(n, e), n
    }),
    (Mh.updateSession = gm)
  var Om = {}
  Object.defineProperty(Om, '__esModule', { value: !0 })
  const vm = cm
  function Im() {
    return vm.uuid4()
  }
  function Nm() {
    return vm.uuid4().substring(16)
  }
  ;(Om.generatePropagationContext = function () {
    return { traceId: Im(), spanId: Nm() }
  }),
    (Om.generateSpanId = Nm),
    (Om.generateTraceId = Im)
  var ym = {}
  Object.defineProperty(ym, '__esModule', { value: !0 }),
    (ym.merge = function e(t, n, r = 2) {
      if (!n || 'object' != typeof n || r <= 0) return n
      if (t && n && 0 === Object.keys(n).length) return t
      const o = { ...t }
      for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && (o[t] = e(o[t], n[t], r - 1))
      return o
    })
  var Cm = {}
  Object.defineProperty(Cm, '__esModule', { value: !0 })
  const Lm = Ph,
    bm = '_sentrySpan'
  ;(Cm._getSpanForScope = function (e) {
    return e[bm]
  }),
    (Cm._setSpanForScope = function (e, t) {
      t ? Lm.addNonEnumerableProperty(e, bm, t) : delete e[bm]
    }),
    Object.defineProperty(bh, '__esModule', { value: !0 })
  const Mm = Mh,
    Pm = Dh,
    Um = QA,
    Dm = cm,
    wm = Om,
    xm = rm,
    Vm = ym,
    Gm = Cm
  class Bm {
    constructor() {
      ;(this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._attachments = []),
        (this._user = {}),
        (this._tags = {}),
        (this._extra = {}),
        (this._contexts = {}),
        (this._sdkProcessingMetadata = {}),
        (this._propagationContext = { traceId: wm.generateTraceId(), spanId: wm.generateSpanId() })
    }
    clone() {
      const e = new Bm()
      return (
        (e._breadcrumbs = [...this._breadcrumbs]),
        (e._tags = { ...this._tags }),
        (e._extra = { ...this._extra }),
        (e._contexts = { ...this._contexts }),
        this._contexts.flags && (e._contexts.flags = { values: [...this._contexts.flags.values] }),
        (e._user = this._user),
        (e._level = this._level),
        (e._session = this._session),
        (e._transactionName = this._transactionName),
        (e._fingerprint = this._fingerprint),
        (e._eventProcessors = [...this._eventProcessors]),
        (e._requestSession = this._requestSession),
        (e._attachments = [...this._attachments]),
        (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
        (e._propagationContext = { ...this._propagationContext }),
        (e._client = this._client),
        (e._lastEventId = this._lastEventId),
        Gm._setSpanForScope(e, Gm._getSpanForScope(this)),
        e
      )
    }
    setClient(e) {
      this._client = e
    }
    setLastEventId(e) {
      this._lastEventId = e
    }
    getClient() {
      return this._client
    }
    lastEventId() {
      return this._lastEventId
    }
    addScopeListener(e) {
      this._scopeListeners.push(e)
    }
    addEventProcessor(e) {
      return this._eventProcessors.push(e), this
    }
    setUser(e) {
      return (
        (this._user = e || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }),
        this._session && Mm.updateSession(this._session, { user: e }),
        this._notifyScopeListeners(),
        this
      )
    }
    getUser() {
      return this._user
    }
    getRequestSession() {
      return this._requestSession
    }
    setRequestSession(e) {
      return (this._requestSession = e), this
    }
    setTags(e) {
      return (this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this
    }
    setTag(e, t) {
      return (this._tags = { ...this._tags, [e]: t }), this._notifyScopeListeners(), this
    }
    setExtras(e) {
      return (this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this
    }
    setExtra(e, t) {
      return (this._extra = { ...this._extra, [e]: t }), this._notifyScopeListeners(), this
    }
    setFingerprint(e) {
      return (this._fingerprint = e), this._notifyScopeListeners(), this
    }
    setLevel(e) {
      return (this._level = e), this._notifyScopeListeners(), this
    }
    setTransactionName(e) {
      return (this._transactionName = e), this._notifyScopeListeners(), this
    }
    setContext(e, t) {
      return (
        null === t ? delete this._contexts[e] : (this._contexts[e] = t),
        this._notifyScopeListeners(),
        this
      )
    }
    setSession(e) {
      return e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this
    }
    getSession() {
      return this._session
    }
    update(e) {
      if (!e) return this
      const t = 'function' == typeof e ? e(this) : e,
        [n, r] =
          t instanceof km
            ? [t.getScopeData(), t.getRequestSession()]
            : Pm.isPlainObject(t)
              ? [e, e.requestSession]
              : [],
        {
          tags: o,
          extra: i,
          user: s,
          contexts: a,
          level: c,
          fingerprint: _ = [],
          propagationContext: u,
        } = n || {}
      return (
        (this._tags = { ...this._tags, ...o }),
        (this._extra = { ...this._extra, ...i }),
        (this._contexts = { ...this._contexts, ...a }),
        s && Object.keys(s).length && (this._user = s),
        c && (this._level = c),
        _.length && (this._fingerprint = _),
        u && (this._propagationContext = u),
        r && (this._requestSession = r),
        this
      )
    }
    clear() {
      return (
        (this._breadcrumbs = []),
        (this._tags = {}),
        (this._extra = {}),
        (this._user = {}),
        (this._contexts = {}),
        (this._level = void 0),
        (this._transactionName = void 0),
        (this._fingerprint = void 0),
        (this._requestSession = void 0),
        (this._session = void 0),
        Gm._setSpanForScope(this, void 0),
        (this._attachments = []),
        this.setPropagationContext({ traceId: wm.generateTraceId() }),
        this._notifyScopeListeners(),
        this
      )
    }
    addBreadcrumb(e, t) {
      const n = 'number' == typeof t ? t : 100
      if (n <= 0) return this
      const r = { timestamp: xm.dateTimestampInSeconds(), ...e },
        o = this._breadcrumbs
      return (
        o.push(r),
        (this._breadcrumbs = o.length > n ? o.slice(-n) : o),
        this._notifyScopeListeners(),
        this
      )
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
      return (this._breadcrumbs = []), this._notifyScopeListeners(), this
    }
    addAttachment(e) {
      return this._attachments.push(e), this
    }
    clearAttachments() {
      return (this._attachments = []), this
    }
    getScopeData() {
      return {
        breadcrumbs: this._breadcrumbs,
        attachments: this._attachments,
        contexts: this._contexts,
        tags: this._tags,
        extra: this._extra,
        user: this._user,
        level: this._level,
        fingerprint: this._fingerprint || [],
        eventProcessors: this._eventProcessors,
        propagationContext: this._propagationContext,
        sdkProcessingMetadata: this._sdkProcessingMetadata,
        transactionName: this._transactionName,
        span: Gm._getSpanForScope(this),
      }
    }
    setSDKProcessingMetadata(e) {
      return (this._sdkProcessingMetadata = Vm.merge(this._sdkProcessingMetadata, e, 2)), this
    }
    setPropagationContext(e) {
      return (this._propagationContext = { spanId: wm.generateSpanId(), ...e }), this
    }
    getPropagationContext() {
      return this._propagationContext
    }
    captureException(e, t) {
      const n = t && t.event_id ? t.event_id : Dm.uuid4()
      if (!this._client)
        return Um.logger.warn('No client configured on scope - will not capture exception!'), n
      const r = new Error('Sentry syntheticException')
      return (
        this._client.captureException(
          e,
          { originalException: e, syntheticException: r, ...t, event_id: n },
          this,
        ),
        n
      )
    }
    captureMessage(e, t, n) {
      const r = n && n.event_id ? n.event_id : Dm.uuid4()
      if (!this._client)
        return Um.logger.warn('No client configured on scope - will not capture message!'), r
      const o = new Error(e)
      return (
        this._client.captureMessage(
          e,
          t,
          { originalException: e, syntheticException: o, ...n, event_id: r },
          this,
        ),
        r
      )
    }
    captureEvent(e, t) {
      const n = t && t.event_id ? t.event_id : Dm.uuid4()
      return this._client
        ? (this._client.captureEvent(e, { ...t, event_id: n }, this), n)
        : (Um.logger.warn('No client configured on scope - will not capture event!'), n)
    }
    _notifyScopeListeners() {
      this._notifyingListeners ||
        ((this._notifyingListeners = !0),
        this._scopeListeners.forEach((e) => {
          e(this)
        }),
        (this._notifyingListeners = !1))
    }
  }
  const km = Bm
  ;(bh.Scope = km), Object.defineProperty(Lh, '__esModule', { value: !0 })
  const Fm = bh,
    Hm = FA
  ;(Lh.getDefaultCurrentScope = function () {
    return Hm.getGlobalSingleton('defaultCurrentScope', () => new Fm.Scope())
  }),
    (Lh.getDefaultIsolationScope = function () {
      return Hm.getGlobalSingleton('defaultIsolationScope', () => new Fm.Scope())
    }),
    Object.defineProperty(Ch, '__esModule', { value: !0 })
  const Ym = Lh,
    jm = bh,
    Km = Dh,
    Wm = vh
  class qm {
    constructor(e, t) {
      let n, r
      ;(n = e || new jm.Scope()),
        (r = t || new jm.Scope()),
        (this._stack = [{ scope: n }]),
        (this._isolationScope = r)
    }
    withScope(e) {
      const t = this._pushScope()
      let n
      try {
        n = e(t)
      } catch (e) {
        throw (this._popScope(), e)
      }
      return Km.isThenable(n)
        ? n.then(
            (e) => (this._popScope(), e),
            (e) => {
              throw (this._popScope(), e)
            },
          )
        : (this._popScope(), n)
    }
    getClient() {
      return this.getStackTop().client
    }
    getScope() {
      return this.getStackTop().scope
    }
    getIsolationScope() {
      return this._isolationScope
    }
    getStackTop() {
      return this._stack[this._stack.length - 1]
    }
    _pushScope() {
      const e = this.getScope().clone()
      return this._stack.push({ client: this.getClient(), scope: e }), e
    }
    _popScope() {
      return !(this._stack.length <= 1) && !!this._stack.pop()
    }
  }
  function Qm() {
    const e = Wm.getMainCarrier(),
      t = Wm.getSentryCarrier(e)
    return (t.stack = t.stack || new qm(Ym.getDefaultCurrentScope(), Ym.getDefaultIsolationScope()))
  }
  function zm(e) {
    return Qm().withScope(e)
  }
  function $m(e, t) {
    const n = Qm()
    return n.withScope(() => ((n.getStackTop().scope = e), t(e)))
  }
  function Xm(e) {
    return Qm().withScope(() => e(Qm().getIsolationScope()))
  }
  ;(Ch.AsyncContextStack = qm),
    (Ch.getStackAsyncContextStrategy = function () {
      return {
        withIsolationScope: Xm,
        withScope: zm,
        withSetScope: $m,
        withSetIsolationScope: (e, t) => Xm(t),
        getCurrentScope: () => Qm().getScope(),
        getIsolationScope: () => Qm().getIsolationScope(),
      }
    }),
    Object.defineProperty(Oh, '__esModule', { value: !0 })
  const Jm = vh,
    Zm = Ch
  ;(Oh.getAsyncContextStrategy = function (e) {
    const t = Jm.getSentryCarrier(e)
    return t.acs ? t.acs : Zm.getStackAsyncContextStrategy()
  }),
    (Oh.setAsyncContextStrategy = function (e) {
      const t = Jm.getMainCarrier()
      Jm.getSentryCarrier(t).acs = e
    })
  var eR = {}
  Object.defineProperty(eR, '__esModule', { value: !0 })
  const tR = Oh,
    nR = vh,
    rR = bh,
    oR = Ph,
    iR = FA
  function sR() {
    const e = nR.getMainCarrier()
    return tR.getAsyncContextStrategy(e).getCurrentScope()
  }
  ;(eR.getClient = function () {
    return sR().getClient()
  }),
    (eR.getCurrentScope = sR),
    (eR.getGlobalScope = function () {
      return iR.getGlobalSingleton('globalScope', () => new rR.Scope())
    }),
    (eR.getIsolationScope = function () {
      const e = nR.getMainCarrier()
      return tR.getAsyncContextStrategy(e).getIsolationScope()
    }),
    (eR.getTraceContextFromScope = function (e) {
      const t = e.getPropagationContext(),
        { traceId: n, spanId: r, parentSpanId: o } = t
      return oR.dropUndefinedKeys({ trace_id: n, span_id: r, parent_span_id: o })
    }),
    (eR.withIsolationScope = function (...e) {
      const t = nR.getMainCarrier(),
        n = tR.getAsyncContextStrategy(t)
      if (2 === e.length) {
        const [t, r] = e
        return t ? n.withSetIsolationScope(t, r) : n.withIsolationScope(r)
      }
      return n.withIsolationScope(e[0])
    }),
    (eR.withScope = function (...e) {
      const t = nR.getMainCarrier(),
        n = tR.getAsyncContextStrategy(t)
      if (2 === e.length) {
        const [t, r] = e
        return t ? n.withSetScope(t, r) : n.withScope(r)
      }
      return n.withScope(e[0])
    })
  var aR = {}
  Object.defineProperty(aR, '__esModule', { value: !0 })
  const cR = Ph,
    _R = '_sentryMetrics'
  ;(aR.getMetricSummaryJsonForSpan = function (e) {
    const t = e[_R]
    if (!t) return
    const n = {}
    for (const [, [e, r]] of t) {
      ;(n[e] || (n[e] = [])).push(cR.dropUndefinedKeys(r))
    }
    return n
  }),
    (aR.updateMetricSummaryOnSpan = function (e, t, n, r, o, i, s) {
      const a = e[_R] || (e[_R] = new Map()),
        c = `${t}:${n}@${o}`,
        _ = a.get(s)
      if (_) {
        const [, e] = _
        a.set(s, [
          c,
          {
            min: Math.min(e.min, r),
            max: Math.max(e.max, r),
            count: (e.count += 1),
            sum: (e.sum += r),
            tags: e.tags,
          },
        ])
      } else a.set(s, [c, { min: r, max: r, count: 1, sum: r, tags: i }])
    })
  var uR = {}
  Object.defineProperty(uR, '__esModule', { value: !0 })
  ;(uR.SEMANTIC_ATTRIBUTE_CACHE_HIT = 'cache.hit'),
    (uR.SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE = 'cache.item_size'),
    (uR.SEMANTIC_ATTRIBUTE_CACHE_KEY = 'cache.key'),
    (uR.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = 'sentry.exclusive_time'),
    (uR.SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD = 'http.request.method'),
    (uR.SEMANTIC_ATTRIBUTE_PROFILE_ID = 'sentry.profile_id'),
    (uR.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = 'sentry.custom_span_name'),
    (uR.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON = 'sentry.idle_span_finish_reason'),
    (uR.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = 'sentry.measurement_unit'),
    (uR.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = 'sentry.measurement_value'),
    (uR.SEMANTIC_ATTRIBUTE_SENTRY_OP = 'sentry.op'),
    (uR.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = 'sentry.origin'),
    (uR.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = 'sentry.sample_rate'),
    (uR.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = 'sentry.source'),
    (uR.SEMANTIC_ATTRIBUTE_URL_FULL = 'url.full')
  var ER = {}
  Object.defineProperty(ER, '__esModule', { value: !0 })
  function lR(e) {
    if (e < 400 && e >= 100) return { code: 1 }
    if (e >= 400 && e < 500)
      switch (e) {
        case 401:
          return { code: 2, message: 'unauthenticated' }
        case 403:
          return { code: 2, message: 'permission_denied' }
        case 404:
          return { code: 2, message: 'not_found' }
        case 409:
          return { code: 2, message: 'already_exists' }
        case 413:
          return { code: 2, message: 'failed_precondition' }
        case 429:
          return { code: 2, message: 'resource_exhausted' }
        case 499:
          return { code: 2, message: 'cancelled' }
        default:
          return { code: 2, message: 'invalid_argument' }
      }
    if (e >= 500 && e < 600)
      switch (e) {
        case 501:
          return { code: 2, message: 'unimplemented' }
        case 503:
          return { code: 2, message: 'unavailable' }
        case 504:
          return { code: 2, message: 'deadline_exceeded' }
        default:
          return { code: 2, message: 'internal_error' }
      }
    return { code: 2, message: 'unknown_error' }
  }
  ;(ER.SPAN_STATUS_ERROR = 2),
    (ER.SPAN_STATUS_OK = 1),
    (ER.SPAN_STATUS_UNSET = 0),
    (ER.getSpanStatusFromHttpCode = lR),
    (ER.setHttpStatus = function (e, t) {
      e.setAttribute('http.response.status_code', t)
      const n = lR(t)
      'unknown_error' !== n.message && e.setStatus(n)
    })
  var TR = {},
    pR = {}
  Object.defineProperty(pR, '__esModule', { value: !0 })
  const dR = WA,
    SR = Dh,
    fR = QA,
    AR = 'sentry-',
    hR = /^sentry-/,
    mR = 8192
  function RR(e) {
    if (e && (SR.isString(e) || Array.isArray(e)))
      return Array.isArray(e)
        ? e.reduce((e, t) => {
            const n = gR(t)
            return (
              Object.entries(n).forEach(([t, n]) => {
                e[t] = n
              }),
              e
            )
          }, {})
        : gR(e)
  }
  function gR(e) {
    return e
      .split(',')
      .map((e) => e.split('=').map((e) => decodeURIComponent(e.trim())))
      .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {})
  }
  ;(pR.BAGGAGE_HEADER_NAME = 'baggage'),
    (pR.MAX_BAGGAGE_STRING_LENGTH = mR),
    (pR.SENTRY_BAGGAGE_KEY_PREFIX = AR),
    (pR.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = hR),
    (pR.baggageHeaderToDynamicSamplingContext = function (e) {
      const t = RR(e)
      if (!t) return
      const n = Object.entries(t).reduce((e, [t, n]) => {
        if (t.match(hR)) {
          e[t.slice(7)] = n
        }
        return e
      }, {})
      return Object.keys(n).length > 0 ? n : void 0
    }),
    (pR.dynamicSamplingContextToSentryBaggageHeader = function (e) {
      if (!e) return
      return (function (e) {
        if (0 === Object.keys(e).length) return
        return Object.entries(e).reduce((e, [t, n], r) => {
          const o = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
            i = 0 === r ? o : `${e},${o}`
          return i.length > mR
            ? (dR.DEBUG_BUILD &&
                fR.logger.warn(
                  `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
                ),
              e)
            : i
        }, '')
      })(Object.entries(e).reduce((e, [t, n]) => (n && (e[`${AR}${t}`] = n), e), {}))
    }),
    (pR.parseBaggageHeader = RR),
    Object.defineProperty(TR, '__esModule', { value: !0 })
  const OR = pR,
    vR = Om,
    IR = new RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$')
  function NR(e) {
    if (!e) return
    const t = e.match(IR)
    if (!t) return
    let n
    return (
      '1' === t[3] ? (n = !0) : '0' === t[3] && (n = !1),
      { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
    )
  }
  ;(TR.TRACEPARENT_REGEXP = IR),
    (TR.extractTraceparentData = NR),
    (TR.generateSentryTraceHeader = function (
      e = vR.generateTraceId(),
      t = vR.generateSpanId(),
      n,
    ) {
      let r = ''
      return void 0 !== n && (r = n ? '-1' : '-0'), `${e}-${t}${r}`
    }),
    (TR.propagationContextFromHeaders = function (e, t) {
      const n = NR(e),
        r = OR.baggageHeaderToDynamicSamplingContext(t)
      if (!n || !n.traceId) return { traceId: vR.generateTraceId(), spanId: vR.generateSpanId() }
      const { traceId: o, parentSpanId: i, parentSampled: s } = n
      return { traceId: o, parentSpanId: i, spanId: vR.generateSpanId(), sampled: s, dsc: r || {} }
    }),
    Object.defineProperty(gh, '__esModule', { value: !0 })
  const yR = Oh,
    CR = vh,
    LR = eR,
    bR = aR,
    MR = uR,
    PR = ER,
    UR = QA,
    DR = Ph,
    wR = Om,
    xR = rm,
    VR = TR,
    GR = Cm
  let BR = !1
  function kR(e) {
    return 'number' == typeof e
      ? FR(e)
      : Array.isArray(e)
        ? e[0] + e[1] / 1e9
        : e instanceof Date
          ? FR(e.getTime())
          : xR.timestampInSeconds()
  }
  function FR(e) {
    return e > 9999999999 ? e / 1e3 : e
  }
  function HR(e) {
    if (
      (function (e) {
        return 'function' == typeof e.getSpanJSON
      })(e)
    )
      return e.getSpanJSON()
    try {
      const { spanId: t, traceId: n } = e.spanContext()
      if (
        (function (e) {
          const t = e
          return !!(t.attributes && t.startTime && t.name && t.endTime && t.status)
        })(e)
      ) {
        const { attributes: r, startTime: o, name: i, endTime: s, parentSpanId: a, status: c } = e
        return DR.dropUndefinedKeys({
          span_id: t,
          trace_id: n,
          data: r,
          description: i,
          parent_span_id: a,
          start_timestamp: kR(o),
          timestamp: kR(s) || void 0,
          status: jR(c),
          op: r[MR.SEMANTIC_ATTRIBUTE_SENTRY_OP],
          origin: r[MR.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
          _metrics_summary: bR.getMetricSummaryJsonForSpan(e),
        })
      }
      return { span_id: t, trace_id: n }
    } catch (e) {
      return {}
    }
  }
  function YR(e) {
    const { traceFlags: t } = e.spanContext()
    return 1 === t
  }
  function jR(e) {
    if (e && e.code !== PR.SPAN_STATUS_UNSET)
      return e.code === PR.SPAN_STATUS_OK ? 'ok' : e.message || 'unknown_error'
  }
  const KR = '_sentryChildSpans',
    WR = '_sentryRootSpan'
  function qR() {
    const e = CR.getMainCarrier(),
      t = yR.getAsyncContextStrategy(e)
    return t.getActiveSpan ? t.getActiveSpan() : GR._getSpanForScope(LR.getCurrentScope())
  }
  ;(gh.TRACE_FLAG_NONE = 0),
    (gh.TRACE_FLAG_SAMPLED = 1),
    (gh.addChildSpanToSpan = function (e, t) {
      const n = e[WR] || e
      DR.addNonEnumerableProperty(t, WR, n),
        e[KR] ? e[KR].add(t) : DR.addNonEnumerableProperty(e, KR, new Set([t]))
    }),
    (gh.getActiveSpan = qR),
    (gh.getRootSpan = function (e) {
      return e[WR] || e
    }),
    (gh.getSpanDescendants = function (e) {
      const t = new Set()
      return (
        (function e(n) {
          if (!t.has(n) && YR(n)) {
            t.add(n)
            const r = n[KR] ? Array.from(n[KR]) : []
            for (const t of r) e(t)
          }
        })(e),
        Array.from(t)
      )
    }),
    (gh.getStatusMessage = jR),
    (gh.removeChildSpanFromSpan = function (e, t) {
      e[KR] && e[KR].delete(t)
    }),
    (gh.showSpanDropWarning = function () {
      BR ||
        (UR.consoleSandbox(() => {
          console.warn(
            '[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.',
          )
        }),
        (BR = !0))
    }),
    (gh.spanIsSampled = YR),
    (gh.spanTimeInputToSeconds = kR),
    (gh.spanToJSON = HR),
    (gh.spanToTraceContext = function (e) {
      const { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
        o = r ? t : HR(e).parent_span_id,
        i = r ? wR.generateSpanId() : t
      return DR.dropUndefinedKeys({ parent_span_id: o, span_id: i, trace_id: n })
    }),
    (gh.spanToTraceHeader = function (e) {
      const { traceId: t, spanId: n } = e.spanContext(),
        r = YR(e)
      return VR.generateSentryTraceHeader(t, n, r)
    }),
    (gh.spanToTransactionTraceContext = function (e) {
      const { spanId: t, traceId: n } = e.spanContext(),
        { data: r, op: o, parent_span_id: i, status: s, origin: a } = HR(e)
      return DR.dropUndefinedKeys({
        parent_span_id: i,
        span_id: t,
        trace_id: n,
        data: r,
        op: o,
        status: s,
        origin: a,
      })
    }),
    (gh.updateMetricSummaryOnActiveSpan = function (e, t, n, r, o, i) {
      const s = qR()
      s && bR.updateMetricSummaryOnSpan(s, e, t, n, r, o, i)
    }),
    (gh.updateSpanName = function (e, t) {
      e.updateName(t),
        e.setAttributes({
          [MR.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: 'custom',
          [MR.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: t,
        })
    }),
    Object.defineProperty(VA, '__esModule', { value: !0 })
  const QR = GA,
    zR = kA,
    $R = fh,
    XR = QA,
    JR = gh,
    ZR = ER
  let eg = !1
  function tg() {
    const e = JR.getActiveSpan(),
      t = e && JR.getRootSpan(e)
    if (t) {
      const e = 'internal_error'
      QR.DEBUG_BUILD && XR.logger.log(`[Tracing] Root span: ${e} -> Global error occurred`),
        t.setStatus({ code: ZR.SPAN_STATUS_ERROR, message: e })
    }
  }
  ;(tg.tag = 'sentry_tracingErrorCallback'),
    (VA.registerSpanErrorInstrumentation = function () {
      eg ||
        ((eg = !0),
        zR.addGlobalErrorInstrumentationHandler(tg),
        $R.addGlobalUnhandledRejectionInstrumentationHandler(tg))
    })
  var ng = {}
  Object.defineProperty(ng, '__esModule', { value: !0 })
  const rg = Ph,
    og = '_sentryScope',
    ig = '_sentryIsolationScope'
  ;(ng.getCapturedScopesOnSpan = function (e) {
    return { scope: e[og], isolationScope: e[ig] }
  }),
    (ng.setCapturedScopesOnSpan = function (e, t, n) {
      e && (rg.addNonEnumerableProperty(e, ig, n), rg.addNonEnumerableProperty(e, og, t))
    })
  var sg = {}
  Object.defineProperty(sg, '__esModule', { value: !0 })
  const ag = VA
  sg.addTracingExtensions = function () {
    ag.registerSpanErrorInstrumentation()
  }
  var cg = {},
    _g = {}
  Object.defineProperty(_g, '__esModule', { value: !0 })
  const ug = eR
  _g.hasTracingEnabled = function (e) {
    if ('boolean' == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1
    const t = ug.getClient(),
      n = e || (t && t.getOptions())
    return !!n && (n.enableTracing || 'tracesSampleRate' in n || 'tracesSampler' in n)
  }
  var Eg = {}
  Object.defineProperty(Eg, '__esModule', { value: !0 })
  const lg = Om,
    Tg = gh
  Eg.SentryNonRecordingSpan = class {
    constructor(e = {}) {
      ;(this._traceId = e.traceId || lg.generateTraceId()),
        (this._spanId = e.spanId || lg.generateSpanId())
    }
    spanContext() {
      return { spanId: this._spanId, traceId: this._traceId, traceFlags: Tg.TRACE_FLAG_NONE }
    }
    end(e) {}
    setAttribute(e, t) {
      return this
    }
    setAttributes(e) {
      return this
    }
    setStatus(e) {
      return this
    }
    updateName(e) {
      return this
    }
    isRecording() {
      return !1
    }
    addEvent(e, t, n) {
      return this
    }
    addLink(e) {
      return this
    }
    addLinks(e) {
      return this
    }
    recordException(e, t) {}
  }
  var pg = {},
    dg = {}
  Object.defineProperty(dg, '__esModule', { value: !0 })
  const Sg = Dh
  dg.handleCallbackErrors = function (e, t, n = () => {}) {
    let r
    try {
      r = e()
    } catch (e) {
      throw (t(e), n(), e)
    }
    return (function (e, t, n) {
      if (Sg.isThenable(e))
        return e.then(
          (e) => (n(), e),
          (e) => {
            throw (t(e), n(), e)
          },
        )
      return n(), e
    })(r, t, n)
  }
  var fg = {},
    Ag = {}
  Object.defineProperty(Ag, '__esModule', { value: !0 })
  ;(Ag.DEFAULT_ENVIRONMENT = 'production'), Object.defineProperty(fg, '__esModule', { value: !0 })
  const hg = Ag,
    mg = eR,
    Rg = uR,
    gg = pR,
    Og = Ph,
    vg = _g,
    Ig = gh,
    Ng = '_frozenDsc'
  function yg(e, t) {
    const n = t.getOptions(),
      { publicKey: r } = t.getDsn() || {},
      o = Og.dropUndefinedKeys({
        environment: n.environment || hg.DEFAULT_ENVIRONMENT,
        release: n.release,
        public_key: r,
        trace_id: e,
      })
    return t.emit('createDsc', o), o
  }
  function Cg(e) {
    const t = mg.getClient()
    if (!t) return {}
    const n = Ig.getRootSpan(e),
      r = n[Ng]
    if (r) return r
    const o = n.spanContext().traceState,
      i = o && o.get('sentry.dsc'),
      s = i && gg.baggageHeaderToDynamicSamplingContext(i)
    if (s) return s
    const a = yg(e.spanContext().traceId, t),
      c = Ig.spanToJSON(n),
      _ = c.data || {},
      u = _[Rg.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]
    null != u && (a.sample_rate = `${u}`)
    const E = _[Rg.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      l = c.description
    return (
      'url' !== E && l && (a.transaction = l),
      vg.hasTracingEnabled() && (a.sampled = String(Ig.spanIsSampled(n))),
      t.emit('createDsc', a, n),
      a
    )
  }
  ;(fg.freezeDscOnSpan = function (e, t) {
    const n = e
    Og.addNonEnumerableProperty(n, Ng, t)
  }),
    (fg.getDynamicSamplingContextFromClient = yg),
    (fg.getDynamicSamplingContextFromScope = function (e, t) {
      const n = t.getPropagationContext()
      return n.dsc || yg(n.traceId, e)
    }),
    (fg.getDynamicSamplingContextFromSpan = Cg),
    (fg.spanToBaggageHeader = function (e) {
      const t = Cg(e)
      return gg.dynamicSamplingContextToSentryBaggageHeader(t)
    })
  var Lg = {}
  Object.defineProperty(Lg, '__esModule', { value: !0 })
  const bg = GA,
    Mg = QA,
    Pg = gh
  ;(Lg.logSpanEnd = function (e) {
    if (!bg.DEBUG_BUILD) return
    const { description: t = '< unknown name >', op: n = '< unknown op >' } = Pg.spanToJSON(e),
      { spanId: r } = e.spanContext(),
      o = `[Tracing] Finishing "${n}" ${Pg.getRootSpan(e) === e ? 'root ' : ''}span "${t}" with ID ${r}`
    Mg.logger.log(o)
  }),
    (Lg.logSpanStart = function (e) {
      if (!bg.DEBUG_BUILD) return
      const {
          description: t = '< unknown name >',
          op: n = '< unknown op >',
          parent_span_id: r,
        } = Pg.spanToJSON(e),
        { spanId: o } = e.spanContext(),
        i = Pg.spanIsSampled(e),
        s = Pg.getRootSpan(e),
        a = s === e,
        c = `[Tracing] Starting ${i ? 'sampled' : 'unsampled'} ${a ? 'root ' : ''}span`,
        _ = [`op: ${n}`, `name: ${t}`, `ID: ${o}`]
      if ((r && _.push(`parent ID: ${r}`), !a)) {
        const { op: e, description: t } = Pg.spanToJSON(s)
        _.push(`root ID: ${s.spanContext().spanId}`),
          e && _.push(`root op: ${e}`),
          t && _.push(`root description: ${t}`)
      }
      Mg.logger.log(`${c}\n  ${_.join('\n  ')}`)
    })
  var Ug = {},
    Dg = {}
  Object.defineProperty(Dg, '__esModule', { value: !0 })
  const wg = GA,
    xg = QA
  ;(Dg.parseSampleRate = function (e) {
    if ('boolean' == typeof e) return Number(e)
    const t = 'string' == typeof e ? parseFloat(e) : e
    if (!('number' != typeof t || isNaN(t) || t < 0 || t > 1)) return t
    wg.DEBUG_BUILD &&
      xg.logger.warn(
        `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
      )
  }),
    Object.defineProperty(Ug, '__esModule', { value: !0 })
  const Vg = eR,
    Gg = GA,
    Bg = QA,
    kg = _g,
    Fg = Dg
  Ug.sampleSpan = function (e, t) {
    if (!kg.hasTracingEnabled(e)) return [!1]
    const n = Vg.getIsolationScope().getScopeData().sdkProcessingMetadata.normalizedRequest,
      r = { ...t, normalizedRequest: t.normalizedRequest || n }
    let o
    o =
      'function' == typeof e.tracesSampler
        ? e.tracesSampler(r)
        : void 0 !== r.parentSampled
          ? r.parentSampled
          : void 0 !== e.tracesSampleRate
            ? e.tracesSampleRate
            : 1
    const i = Fg.parseSampleRate(o)
    return void 0 === i
      ? (Gg.DEBUG_BUILD &&
          Bg.logger.warn('[Tracing] Discarding transaction because of invalid sample rate.'),
        [!1])
      : i
        ? Math.random() < i
          ? [!0, i]
          : (Gg.DEBUG_BUILD &&
              Bg.logger.log(
                `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(o)})`,
              ),
            [!1, i])
        : (Gg.DEBUG_BUILD &&
            Bg.logger.log(
              '[Tracing] Discarding transaction because ' +
                ('function' == typeof e.tracesSampler
                  ? 'tracesSampler returned 0 or false'
                  : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'),
            ),
          [!1, i])
  }
  var Hg = {},
    Yg = {},
    jg = {}
  Object.defineProperty(jg, '__esModule', { value: !0 })
  const Kg = WA,
    Wg = QA,
    qg = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/
  function Qg(e) {
    const t = qg.exec(e)
    if (!t)
      return void Wg.consoleSandbox(() => {
        console.error(`Invalid Sentry Dsn: ${e}`)
      })
    const [n, r, o = '', i = '', s = '', a = ''] = t.slice(1)
    let c = '',
      _ = a
    const u = _.split('/')
    if ((u.length > 1 && ((c = u.slice(0, -1).join('/')), (_ = u.pop())), _)) {
      const e = _.match(/^\d+/)
      e && (_ = e[0])
    }
    return zg({ host: i, pass: o, path: c, projectId: _, port: s, protocol: n, publicKey: r })
  }
  function zg(e) {
    return {
      protocol: e.protocol,
      publicKey: e.publicKey || '',
      pass: e.pass || '',
      host: e.host,
      port: e.port || '',
      path: e.path || '',
      projectId: e.projectId,
    }
  }
  ;(jg.dsnFromString = Qg),
    (jg.dsnToString = function (e, t = !1) {
      const { host: n, path: r, pass: o, port: i, projectId: s, protocol: a, publicKey: c } = e
      return `${a}://${c}${t && o ? `:${o}` : ''}@${n}${i ? `:${i}` : ''}/${r ? `${r}/` : r}${s}`
    }),
    (jg.makeDsn = function (e) {
      const t = 'string' == typeof e ? Qg(e) : zg(e)
      if (
        t &&
        (function (e) {
          if (!Kg.DEBUG_BUILD) return !0
          const { port: t, projectId: n, protocol: r } = e
          return !(
            ['protocol', 'publicKey', 'host', 'projectId'].find(
              (t) => !e[t] && (Wg.logger.error(`Invalid Sentry Dsn: ${t} missing`), !0),
            ) ||
            (n.match(/^\d+$/)
              ? (function (e) {
                  return 'http' === e || 'https' === e
                })(r)
                ? t &&
                  isNaN(parseInt(t, 10)) &&
                  (Wg.logger.error(`Invalid Sentry Dsn: Invalid port ${t}`), 1)
                : (Wg.logger.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), 1)
              : (Wg.logger.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1))
          )
        })(t)
      )
        return t
    })
  var $g = {},
    Xg = {},
    Jg = {}
  Object.defineProperty(Jg, '__esModule', { value: !0 }),
    (Jg.memoBuilder = function () {
      const e = 'function' == typeof WeakSet,
        t = e ? new WeakSet() : []
      return [
        function (n) {
          if (e) return !!t.has(n) || (t.add(n), !1)
          for (let e = 0; e < t.length; e++) {
            if (t[e] === n) return !0
          }
          return t.push(n), !1
        },
        function (n) {
          if (e) t.delete(n)
          else
            for (let e = 0; e < t.length; e++)
              if (t[e] === n) {
                t.splice(e, 1)
                break
              }
        },
      ]
    }),
    Object.defineProperty(Xg, '__esModule', { value: !0 })
  const Zg = Dh,
    eO = Jg,
    tO = Ph,
    nO = th
  function rO(e, t = 100, n = 1 / 0) {
    try {
      return oO('', e, t, n)
    } catch (e) {
      return { ERROR: `**non-serializable** (${e})` }
    }
  }
  function oO(t, n, r = 1 / 0, o = 1 / 0, i = eO.memoBuilder()) {
    const [s, a] = i
    if (
      null == n ||
      ['boolean', 'string'].includes(typeof n) ||
      ('number' == typeof n && Number.isFinite(n))
    )
      return n
    const c = (function (t, n) {
      try {
        if ('domain' === t && n && 'object' == typeof n && n._events) return '[Domain]'
        if ('domainEmitter' === t) return '[DomainEmitter]'
        if (void 0 !== e && n === e) return '[Global]'
        if ('undefined' != typeof window && n === window) return '[Window]'
        if ('undefined' != typeof document && n === document) return '[Document]'
        if (Zg.isVueViewModel(n)) return '[VueViewModel]'
        if (Zg.isSyntheticEvent(n)) return '[SyntheticEvent]'
        if ('number' == typeof n && !Number.isFinite(n)) return `[${n}]`
        if ('function' == typeof n) return `[Function: ${nO.getFunctionName(n)}]`
        if ('symbol' == typeof n) return `[${String(n)}]`
        if ('bigint' == typeof n) return `[BigInt: ${String(n)}]`
        const r = (function (e) {
          const t = Object.getPrototypeOf(e)
          return t ? t.constructor.name : 'null prototype'
        })(n)
        return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
      } catch (e) {
        return `**non-serializable** (${e})`
      }
    })(t, n)
    if (!c.startsWith('[object ')) return c
    if (n.__sentry_skip_normalization__) return n
    const _ =
      'number' == typeof n.__sentry_override_normalization_depth__
        ? n.__sentry_override_normalization_depth__
        : r
    if (0 === _) return c.replace('object ', '')
    if (s(n)) return '[Circular ~]'
    const u = n
    if (u && 'function' == typeof u.toJSON)
      try {
        return oO('', u.toJSON(), _ - 1, o, i)
      } catch (e) {}
    const E = Array.isArray(n) ? [] : {}
    let l = 0
    const T = tO.convertToPlainObject(n)
    for (const e in T) {
      if (!Object.prototype.hasOwnProperty.call(T, e)) continue
      if (l >= o) {
        E[e] = '[MaxProperties ~]'
        break
      }
      const t = T[e]
      ;(E[e] = oO(e, t, _ - 1, o, i)), l++
    }
    return a(n), E
  }
  ;(Xg.normalize = rO),
    (Xg.normalizeToSize = function e(t, n = 3, r = 102400) {
      const o = rO(t, n)
      return (
        (i = o),
        (function (e) {
          return ~-encodeURI(e).split(/%..|./).length
        })(JSON.stringify(i)) > r
          ? e(t, n - 1, r)
          : o
      )
      var i
    }),
    (Xg.normalizeUrlToBase = function (e, t) {
      const n = t.replace(/\\/g, '/').replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
      let r = e
      try {
        r = decodeURI(e)
      } catch (e) {}
      return r
        .replace(/\\/g, '/')
        .replace(/webpack:\/?/g, '')
        .replace(new RegExp(`(file://)?/*${n}/*`, 'ig'), 'app:///')
    }),
    Object.defineProperty($g, '__esModule', { value: !0 })
  const iO = jg,
    sO = Xg,
    aO = Ph,
    cO = FA
  function _O(e, t) {
    const n = e[1]
    for (const e of n) {
      if (t(e, e[0].type)) return !0
    }
    return !1
  }
  function uO(e) {
    return cO.GLOBAL_OBJ.__SENTRY__ && cO.GLOBAL_OBJ.__SENTRY__.encodePolyfill
      ? cO.GLOBAL_OBJ.__SENTRY__.encodePolyfill(e)
      : new TextEncoder().encode(e)
  }
  const EO = {
    session: 'session',
    sessions: 'session',
    attachment: 'attachment',
    transaction: 'transaction',
    event: 'error',
    client_report: 'internal',
    user_report: 'default',
    profile: 'profile',
    profile_chunk: 'profile',
    replay_event: 'replay',
    replay_recording: 'replay',
    check_in: 'monitor',
    feedback: 'feedback',
    span: 'span',
    statsd: 'metric_bucket',
    raw_security: 'security',
  }
  ;($g.addItemToEnvelope = function (e, t) {
    const [n, r] = e
    return [n, [...r, t]]
  }),
    ($g.createAttachmentEnvelopeItem = function (e) {
      const t = 'string' == typeof e.data ? uO(e.data) : e.data
      return [
        aO.dropUndefinedKeys({
          type: 'attachment',
          length: t.length,
          filename: e.filename,
          content_type: e.contentType,
          attachment_type: e.attachmentType,
        }),
        t,
      ]
    }),
    ($g.createEnvelope = function (e, t = []) {
      return [e, t]
    }),
    ($g.createEventEnvelopeHeaders = function (e, t, n, r) {
      const o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext
      return {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...(t && { sdk: t }),
        ...(!!n && r && { dsn: iO.dsnToString(r) }),
        ...(o && { trace: aO.dropUndefinedKeys({ ...o }) }),
      }
    }),
    ($g.createSpanEnvelopeItem = function (e) {
      return [{ type: 'span' }, e]
    }),
    ($g.envelopeContainsItemType = function (e, t) {
      return _O(e, (e, n) => t.includes(n))
    }),
    ($g.envelopeItemTypeToDataCategory = function (e) {
      return EO[e]
    }),
    ($g.forEachEnvelopeItem = _O),
    ($g.getSdkMetadataForEnvelopeHeader = function (e) {
      if (!e || !e.sdk) return
      const { name: t, version: n } = e.sdk
      return { name: t, version: n }
    }),
    ($g.parseEnvelope = function (e) {
      let t = 'string' == typeof e ? uO(e) : e
      function n(e) {
        const n = t.subarray(0, e)
        return (t = t.subarray(e + 1)), n
      }
      function r() {
        let e = t.indexOf(10)
        return (
          e < 0 && (e = t.length),
          JSON.parse(
            ((r = n(e)),
            cO.GLOBAL_OBJ.__SENTRY__ && cO.GLOBAL_OBJ.__SENTRY__.decodePolyfill
              ? cO.GLOBAL_OBJ.__SENTRY__.decodePolyfill(r)
              : new TextDecoder().decode(r)),
          )
        )
        var r
      }
      const o = r(),
        i = []
      for (; t.length; ) {
        const e = r(),
          t = 'number' == typeof e.length ? e.length : void 0
        i.push([e, t ? n(t) : r()])
      }
      return [o, i]
    }),
    ($g.serializeEnvelope = function (e) {
      const [t, n] = e
      let r = JSON.stringify(t)
      function o(e) {
        'string' == typeof r
          ? (r = 'string' == typeof e ? r + e : [uO(r), e])
          : r.push('string' == typeof e ? uO(e) : e)
      }
      for (const e of n) {
        const [t, n] = e
        if ((o(`\n${JSON.stringify(t)}\n`), 'string' == typeof n || n instanceof Uint8Array)) o(n)
        else {
          let e
          try {
            e = JSON.stringify(n)
          } catch (t) {
            e = JSON.stringify(sO.normalize(n))
          }
          o(e)
        }
      }
      return 'string' == typeof r
        ? r
        : (function (e) {
            const t = e.reduce((e, t) => e + t.length, 0),
              n = new Uint8Array(t)
            let r = 0
            for (const t of e) n.set(t, r), (r += t.length)
            return n
          })(r)
    }),
    Object.defineProperty(Yg, '__esModule', { value: !0 })
  const lO = fg,
    TO = jg,
    pO = $g,
    dO = gh
  ;(Yg.createEventEnvelope = function (e, t, n, r) {
    const o = pO.getSdkMetadataForEnvelopeHeader(n),
      i = e.type && 'replay_event' !== e.type ? e.type : 'event'
    !(function (e, t) {
      t &&
        ((e.sdk = e.sdk || {}),
        (e.sdk.name = e.sdk.name || t.name),
        (e.sdk.version = e.sdk.version || t.version),
        (e.sdk.integrations = [...(e.sdk.integrations || []), ...(t.integrations || [])]),
        (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])]))
    })(e, n && n.sdk)
    const s = pO.createEventEnvelopeHeaders(e, o, r, t)
    delete e.sdkProcessingMetadata
    const a = [{ type: i }, e]
    return pO.createEnvelope(s, [a])
  }),
    (Yg.createSessionEnvelope = function (e, t, n, r) {
      const o = pO.getSdkMetadataForEnvelopeHeader(n),
        i = {
          sent_at: new Date().toISOString(),
          ...(o && { sdk: o }),
          ...(!!r && t && { dsn: TO.dsnToString(t) }),
        },
        s = 'aggregates' in e ? [{ type: 'sessions' }, e] : [{ type: 'session' }, e.toJSON()]
      return pO.createEnvelope(i, [s])
    }),
    (Yg.createSpanEnvelope = function (e, t) {
      const n = lO.getDynamicSamplingContextFromSpan(e[0]),
        r = t && t.getDsn(),
        o = t && t.getOptions().tunnel,
        i = {
          sent_at: new Date().toISOString(),
          ...((function (e) {
            return !!e.trace_id && !!e.public_key
          })(n) && { trace: n }),
          ...(!!o && r && { dsn: TO.dsnToString(r) }),
        },
        s = t && t.getOptions().beforeSendSpan,
        a = s
          ? (e) => {
              const t = s(dO.spanToJSON(e))
              return t || dO.showSpanDropWarning(), t
            }
          : (e) => dO.spanToJSON(e),
        c = []
      for (const t of e) {
        const e = a(t)
        e && c.push(pO.createSpanEnvelopeItem(e))
      }
      return pO.createEnvelope(i, c)
    })
  var SO = {}
  Object.defineProperty(SO, '__esModule', { value: !0 })
  const fO = GA,
    AO = uR,
    hO = QA,
    mO = gh
  ;(SO.setMeasurement = function (e, t, n, r = mO.getActiveSpan()) {
    const o = r && mO.getRootSpan(r)
    o &&
      (fO.DEBUG_BUILD &&
        hO.logger.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`),
      o.addEvent(e, {
        [AO.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: t,
        [AO.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: n,
      }))
  }),
    (SO.timedEventsToMeasurements = function (e) {
      if (!e || 0 === e.length) return
      const t = {}
      return (
        e.forEach((e) => {
          const n = e.attributes || {},
            r = n[AO.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT],
            o = n[AO.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]
          'string' == typeof r && 'number' == typeof o && (t[e.name] = { value: o, unit: r })
        }),
        t
      )
    }),
    Object.defineProperty(Hg, '__esModule', { value: !0 })
  const RO = eR,
    gO = GA,
    OO = Yg,
    vO = aR,
    IO = uR,
    NO = QA,
    yO = Ph,
    CO = Om,
    LO = rm,
    bO = gh,
    MO = fg,
    PO = Lg,
    UO = SO,
    DO = ng
  class wO {
    constructor(e = {}) {
      ;(this._traceId = e.traceId || CO.generateTraceId()),
        (this._spanId = e.spanId || CO.generateSpanId()),
        (this._startTime = e.startTimestamp || LO.timestampInSeconds()),
        (this._attributes = {}),
        this.setAttributes({
          [IO.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: 'manual',
          [IO.SEMANTIC_ATTRIBUTE_SENTRY_OP]: e.op,
          ...e.attributes,
        }),
        (this._name = e.name),
        e.parentSpanId && (this._parentSpanId = e.parentSpanId),
        'sampled' in e && (this._sampled = e.sampled),
        e.endTimestamp && (this._endTime = e.endTimestamp),
        (this._events = []),
        (this._isStandaloneSpan = e.isStandalone),
        this._endTime && this._onSpanEnded()
    }
    addLink(e) {
      return this
    }
    addLinks(e) {
      return this
    }
    recordException(e, t) {}
    spanContext() {
      const { _spanId: e, _traceId: t, _sampled: n } = this
      return { spanId: e, traceId: t, traceFlags: n ? bO.TRACE_FLAG_SAMPLED : bO.TRACE_FLAG_NONE }
    }
    setAttribute(e, t) {
      return void 0 === t ? delete this._attributes[e] : (this._attributes[e] = t), this
    }
    setAttributes(e) {
      return Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this
    }
    updateStartTime(e) {
      this._startTime = bO.spanTimeInputToSeconds(e)
    }
    setStatus(e) {
      return (this._status = e), this
    }
    updateName(e) {
      return (
        (this._name = e), this.setAttribute(IO.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, 'custom'), this
      )
    }
    end(e) {
      this._endTime ||
        ((this._endTime = bO.spanTimeInputToSeconds(e)), PO.logSpanEnd(this), this._onSpanEnded())
    }
    getSpanJSON() {
      return yO.dropUndefinedKeys({
        data: this._attributes,
        description: this._name,
        op: this._attributes[IO.SEMANTIC_ATTRIBUTE_SENTRY_OP],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: bO.getStatusMessage(this._status),
        timestamp: this._endTime,
        trace_id: this._traceId,
        origin: this._attributes[IO.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
        _metrics_summary: vO.getMetricSummaryJsonForSpan(this),
        profile_id: this._attributes[IO.SEMANTIC_ATTRIBUTE_PROFILE_ID],
        exclusive_time: this._attributes[IO.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
        measurements: UO.timedEventsToMeasurements(this._events),
        is_segment: (this._isStandaloneSpan && bO.getRootSpan(this) === this) || void 0,
        segment_id: this._isStandaloneSpan ? bO.getRootSpan(this).spanContext().spanId : void 0,
      })
    }
    isRecording() {
      return !this._endTime && !!this._sampled
    }
    addEvent(e, t, n) {
      gO.DEBUG_BUILD && NO.logger.log('[Tracing] Adding an event to span:', e)
      const r = xO(t) ? t : n || LO.timestampInSeconds(),
        o = xO(t) ? {} : t || {},
        i = { name: e, time: bO.spanTimeInputToSeconds(r), attributes: o }
      return this._events.push(i), this
    }
    isStandaloneSpan() {
      return !!this._isStandaloneSpan
    }
    _onSpanEnded() {
      const e = RO.getClient()
      e && e.emit('spanEnd', this)
      if (!(this._isStandaloneSpan || this === bO.getRootSpan(this))) return
      if (this._isStandaloneSpan)
        return void (this._sampled
          ? (function (e) {
              const t = RO.getClient()
              if (!t) return
              const n = e[1]
              if (!n || 0 === n.length) return void t.recordDroppedEvent('before_send', 'span')
              t.sendEnvelope(e)
            })(OO.createSpanEnvelope([this], e))
          : (gO.DEBUG_BUILD &&
              NO.logger.log(
                '[Tracing] Discarding standalone span because its trace was not chosen to be sampled.',
              ),
            e && e.recordDroppedEvent('sample_rate', 'span')))
      const t = this._convertSpanToTransaction()
      if (t) {
        ;(DO.getCapturedScopesOnSpan(this).scope || RO.getCurrentScope()).captureEvent(t)
      }
    }
    _convertSpanToTransaction() {
      if (!VO(bO.spanToJSON(this))) return
      this._name ||
        (gO.DEBUG_BUILD &&
          NO.logger.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'),
        (this._name = '<unlabeled transaction>'))
      const { scope: e, isolationScope: t } = DO.getCapturedScopesOnSpan(this),
        n = (e || RO.getCurrentScope()).getClient() || RO.getClient()
      if (!0 !== this._sampled)
        return (
          gO.DEBUG_BUILD &&
            NO.logger.log(
              '[Tracing] Discarding transaction because its trace was not chosen to be sampled.',
            ),
          void (n && n.recordDroppedEvent('sample_rate', 'transaction'))
        )
      const r = bO
          .getSpanDescendants(this)
          .filter(
            (e) =>
              e !== this &&
              !(function (e) {
                return e instanceof wO && e.isStandaloneSpan()
              })(e),
          )
          .map((e) => bO.spanToJSON(e))
          .filter(VO),
        o = this._attributes[IO.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]
      delete this._attributes[IO.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME],
        r.forEach((e) => {
          e.data && delete e.data[IO.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]
        })
      const i = {
          contexts: { trace: bO.spanToTransactionTraceContext(this) },
          spans:
            r.length > 1e3
              ? r.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3)
              : r,
          start_timestamp: this._startTime,
          timestamp: this._endTime,
          transaction: this._name,
          type: 'transaction',
          sdkProcessingMetadata: {
            capturedSpanScope: e,
            capturedSpanIsolationScope: t,
            ...yO.dropUndefinedKeys({
              dynamicSamplingContext: MO.getDynamicSamplingContextFromSpan(this),
            }),
          },
          _metrics_summary: vO.getMetricSummaryJsonForSpan(this),
          ...(o && { transaction_info: { source: o } }),
        },
        s = UO.timedEventsToMeasurements(this._events)
      return (
        s &&
          Object.keys(s).length &&
          (gO.DEBUG_BUILD &&
            NO.logger.log(
              '[Measurements] Adding measurements to transaction event',
              JSON.stringify(s, void 0, 2),
            ),
          (i.measurements = s)),
        i
      )
    }
  }
  function xO(e) {
    return (e && 'number' == typeof e) || e instanceof Date || Array.isArray(e)
  }
  function VO(e) {
    return !!(e.start_timestamp && e.timestamp && e.span_id && e.trace_id)
  }
  ;(Hg.SentrySpan = wO), Object.defineProperty(pg, '__esModule', { value: !0 })
  const GO = vh,
    BO = eR,
    kO = Oh,
    FO = GA,
    HO = uR,
    YO = QA,
    jO = Om,
    KO = TR,
    WO = dg,
    qO = _g,
    QO = Cm,
    zO = gh,
    $O = fg,
    XO = Lg,
    JO = Ug,
    ZO = Eg,
    ev = Hg,
    tv = ER,
    nv = ng,
    rv = '__SENTRY_SUPPRESS_TRACING__'
  function ov(e, t) {
    const n = av()
    return n.withActiveSpan
      ? n.withActiveSpan(e, t)
      : BO.withScope((n) => (QO._setSpanForScope(n, e || void 0), t(n)))
  }
  function iv({ parentSpan: e, spanArguments: t, forceTransaction: n, scope: r }) {
    if (!qO.hasTracingEnabled()) return new ZO.SentryNonRecordingSpan()
    const o = BO.getIsolationScope()
    let i
    if (e && !n)
      (i = (function (e, t, n) {
        const { spanId: r, traceId: o } = e.spanContext(),
          i = !t.getScopeData().sdkProcessingMetadata[rv] && zO.spanIsSampled(e),
          s = i
            ? new ev.SentrySpan({ ...n, parentSpanId: r, traceId: o, sampled: i })
            : new ZO.SentryNonRecordingSpan({ traceId: o })
        zO.addChildSpanToSpan(e, s)
        const a = BO.getClient()
        a && (a.emit('spanStart', s), n.endTimestamp && a.emit('spanEnd', s))
        return s
      })(e, r, t)),
        zO.addChildSpanToSpan(e, i)
    else if (e) {
      const n = $O.getDynamicSamplingContextFromSpan(e),
        { traceId: o, spanId: s } = e.spanContext(),
        a = zO.spanIsSampled(e)
      ;(i = cv({ traceId: o, parentSpanId: s, ...t }, r, a)), $O.freezeDscOnSpan(i, n)
    } else {
      const {
        traceId: e,
        dsc: n,
        parentSpanId: s,
        sampled: a,
      } = { ...o.getPropagationContext(), ...r.getPropagationContext() }
      ;(i = cv({ traceId: e, parentSpanId: s, ...t }, r, a)), n && $O.freezeDscOnSpan(i, n)
    }
    return XO.logSpanStart(i), nv.setCapturedScopesOnSpan(i, r, o), i
  }
  function sv(e) {
    const t = { isStandalone: (e.experimental || {}).standalone, ...e }
    if (e.startTime) {
      const n = { ...t }
      return (n.startTimestamp = zO.spanTimeInputToSeconds(e.startTime)), delete n.startTime, n
    }
    return t
  }
  function av() {
    const e = GO.getMainCarrier()
    return kO.getAsyncContextStrategy(e)
  }
  function cv(e, t, n) {
    const r = BO.getClient(),
      o = (r && r.getOptions()) || {},
      { name: i = '', attributes: s } = e,
      [a, c] = t.getScopeData().sdkProcessingMetadata[rv]
        ? [!1]
        : JO.sampleSpan(o, {
            name: i,
            parentSampled: n,
            attributes: s,
            transactionContext: { name: i, parentSampled: n },
          }),
      _ = new ev.SentrySpan({
        ...e,
        attributes: { [HO.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: 'custom', ...e.attributes },
        sampled: a,
      })
    return (
      void 0 !== c && _.setAttribute(HO.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, c),
      r && r.emit('spanStart', _),
      _
    )
  }
  function _v(e) {
    const t = QO._getSpanForScope(e)
    if (!t) return
    const n = BO.getClient()
    return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? zO.getRootSpan(t) : t
  }
  function uv(e) {
    return void 0 !== e ? (t) => ov(e, t) : (e) => e()
  }
  ;(pg.continueTrace = (e, t) => {
    const n = GO.getMainCarrier(),
      r = kO.getAsyncContextStrategy(n)
    if (r.continueTrace) return r.continueTrace(e, t)
    const { sentryTrace: o, baggage: i } = e
    return BO.withScope((e) => {
      const n = KO.propagationContextFromHeaders(o, i)
      return e.setPropagationContext(n), t()
    })
  }),
    (pg.startInactiveSpan = function (e) {
      const t = av()
      if (t.startInactiveSpan) return t.startInactiveSpan(e)
      const n = sv(e),
        { forceTransaction: r, parentSpan: o } = e
      return (
        e.scope ? (t) => BO.withScope(e.scope, t) : void 0 !== o ? (e) => ov(o, e) : (e) => e()
      )(() => {
        const t = BO.getCurrentScope(),
          o = _v(t)
        return e.onlyIfParent && !o
          ? new ZO.SentryNonRecordingSpan()
          : iv({ parentSpan: o, spanArguments: n, forceTransaction: r, scope: t })
      })
    }),
    (pg.startNewTrace = function (e) {
      return BO.withScope(
        (t) => (
          t.setPropagationContext({ traceId: jO.generateTraceId() }),
          FO.DEBUG_BUILD &&
            YO.logger.info(`Starting a new trace with id ${t.getPropagationContext().traceId}`),
          ov(null, e)
        ),
      )
    }),
    (pg.startSpan = function (e, t) {
      const n = av()
      if (n.startSpan) return n.startSpan(e, t)
      const r = sv(e),
        { forceTransaction: o, parentSpan: i } = e
      return BO.withScope(e.scope, () =>
        uv(i)(() => {
          const n = BO.getCurrentScope(),
            i = _v(n),
            s =
              e.onlyIfParent && !i
                ? new ZO.SentryNonRecordingSpan()
                : iv({ parentSpan: i, spanArguments: r, forceTransaction: o, scope: n })
          return (
            QO._setSpanForScope(n, s),
            WO.handleCallbackErrors(
              () => t(s),
              () => {
                const { status: e } = zO.spanToJSON(s)
                !s.isRecording() ||
                  (e && 'ok' !== e) ||
                  s.setStatus({ code: tv.SPAN_STATUS_ERROR, message: 'internal_error' })
              },
              () => s.end(),
            )
          )
        }),
      )
    }),
    (pg.startSpanManual = function (e, t) {
      const n = av()
      if (n.startSpanManual) return n.startSpanManual(e, t)
      const r = sv(e),
        { forceTransaction: o, parentSpan: i } = e
      return BO.withScope(e.scope, () =>
        uv(i)(() => {
          const n = BO.getCurrentScope(),
            i = _v(n),
            s =
              e.onlyIfParent && !i
                ? new ZO.SentryNonRecordingSpan()
                : iv({ parentSpan: i, spanArguments: r, forceTransaction: o, scope: n })
          function a() {
            s.end()
          }
          return (
            QO._setSpanForScope(n, s),
            WO.handleCallbackErrors(
              () => t(s, a),
              () => {
                const { status: e } = zO.spanToJSON(s)
                !s.isRecording() ||
                  (e && 'ok' !== e) ||
                  s.setStatus({ code: tv.SPAN_STATUS_ERROR, message: 'internal_error' })
              },
            )
          )
        }),
      )
    }),
    (pg.suppressTracing = function (e) {
      const t = av()
      return t.suppressTracing
        ? t.suppressTracing(e)
        : BO.withScope((t) => (t.setSDKProcessingMetadata({ [rv]: !0 }), e()))
    }),
    (pg.withActiveSpan = ov),
    Object.defineProperty(cg, '__esModule', { value: !0 })
  const Ev = eR,
    lv = GA,
    Tv = uR,
    pv = QA,
    dv = rm,
    Sv = _g,
    fv = Cm,
    Av = gh,
    hv = Eg,
    mv = ER,
    Rv = pg,
    gv = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 }
  ;(cg.TRACING_DEFAULTS = gv),
    (cg.startIdleSpan = function (e, t = {}) {
      const n = new Map()
      let r,
        o = !1,
        i = 'externalFinish',
        s = !t.disableAutoFinish
      const a = [],
        {
          idleTimeout: c = gv.idleTimeout,
          finalTimeout: _ = gv.finalTimeout,
          childSpanTimeout: u = gv.childSpanTimeout,
          beforeSpanEnd: E,
        } = t,
        l = Ev.getClient()
      if (!l || !Sv.hasTracingEnabled()) return new hv.SentryNonRecordingSpan()
      const T = Ev.getCurrentScope(),
        p = Av.getActiveSpan(),
        d = (function (e) {
          const t = Rv.startInactiveSpan(e)
          return (
            fv._setSpanForScope(Ev.getCurrentScope(), t),
            lv.DEBUG_BUILD && pv.logger.log('[Tracing] Started span is an idle span'),
            t
          )
        })(e)
      function S() {
        r && (clearTimeout(r), (r = void 0))
      }
      function f(e) {
        S(),
          (r = setTimeout(() => {
            !o && 0 === n.size && s && ((i = 'idleTimeout'), d.end(e))
          }, c))
      }
      function A(e) {
        r = setTimeout(() => {
          !o && s && ((i = 'heartbeatFailed'), d.end(e))
        }, u)
      }
      function h(e) {
        ;(o = !0), n.clear(), a.forEach((e) => e()), fv._setSpanForScope(T, p)
        const t = Av.spanToJSON(d),
          { start_timestamp: r } = t
        if (!r) return
        ;(t.data || {})[Tv.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON] ||
          d.setAttribute(Tv.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, i),
          pv.logger.log(`[Tracing] Idle span "${t.op}" finished`)
        const s = Av.getSpanDescendants(d).filter((e) => e !== d)
        let u = 0
        s.forEach((t) => {
          t.isRecording() &&
            (t.setStatus({ code: mv.SPAN_STATUS_ERROR, message: 'cancelled' }),
            t.end(e),
            lv.DEBUG_BUILD &&
              pv.logger.log(
                '[Tracing] Cancelling span since span ended early',
                JSON.stringify(t, void 0, 2),
              ))
          const n = Av.spanToJSON(t),
            { timestamp: r = 0, start_timestamp: o = 0 } = n,
            i = o <= e,
            s = r - o <= (_ + c) / 1e3
          if (lv.DEBUG_BUILD) {
            const e = JSON.stringify(t, void 0, 2)
            i
              ? s ||
                pv.logger.log(
                  '[Tracing] Discarding span since it finished after idle span final timeout',
                  e,
                )
              : pv.logger.log(
                  '[Tracing] Discarding span since it happened after idle span was finished',
                  e,
                )
          }
          ;(s && i) || (Av.removeChildSpanFromSpan(d, t), u++)
        }),
          u > 0 && d.setAttribute('sentry.idle_span_discarded_spans', u)
      }
      return (
        (d.end = new Proxy(d.end, {
          apply(e, t, n) {
            E && E(d)
            const [r, ...o] = n,
              i = r || dv.timestampInSeconds(),
              s = Av.spanTimeInputToSeconds(i),
              a = Av.getSpanDescendants(d).filter((e) => e !== d)
            if (!a.length) return h(s), Reflect.apply(e, t, [s, ...o])
            const c = a.map((e) => Av.spanToJSON(e).timestamp).filter((e) => !!e),
              u = c.length ? Math.max(...c) : void 0,
              l = Av.spanToJSON(d).start_timestamp,
              T = Math.min(l ? l + _ / 1e3 : 1 / 0, Math.max(l || -1 / 0, Math.min(s, u || 1 / 0)))
            return h(T), Reflect.apply(e, t, [T, ...o])
          },
        })),
        a.push(
          l.on('spanStart', (e) => {
            if (o || e === d || Av.spanToJSON(e).timestamp) return
            var t
            Av.getSpanDescendants(d).includes(e) &&
              ((t = e.spanContext().spanId),
              S(),
              n.set(t, !0),
              A(dv.timestampInSeconds() + u / 1e3))
          }),
        ),
        a.push(
          l.on('spanEnd', (e) => {
            var t
            o ||
              ((t = e.spanContext().spanId),
              n.has(t) && n.delete(t),
              0 === n.size && f(dv.timestampInSeconds() + c / 1e3))
          }),
        ),
        a.push(
          l.on('idleSpanEnableAutoFinish', (e) => {
            e === d && ((s = !0), f(), n.size && A())
          }),
        ),
        t.disableAutoFinish || f(),
        setTimeout(() => {
          o ||
            (d.setStatus({ code: mv.SPAN_STATUS_ERROR, message: 'deadline_exceeded' }),
            (i = 'finalTimeout'),
            d.end())
        }, _),
        d
      )
    })
  var Ov = {},
    vv = {},
    Iv = {}
  Object.defineProperty(Iv, '__esModule', { value: !0 })
  const Nv = GA,
    yv = Dh,
    Cv = QA,
    Lv = dm
  Iv.notifyEventProcessors = function e(t, n, r, o = 0) {
    return new Lv.SyncPromise((i, s) => {
      const a = t[o]
      if (null === n || 'function' != typeof a) i(n)
      else {
        const c = a({ ...n }, r)
        Nv.DEBUG_BUILD &&
          a.id &&
          null === c &&
          Cv.logger.log(`Event processor "${a.id}" dropped event`),
          yv.isThenable(c)
            ? c.then((n) => e(t, n, r, o + 1).then(i)).then(null, s)
            : e(t, c, r, o + 1)
                .then(i)
                .then(null, s)
      }
    })
  }
  var bv = {}
  Object.defineProperty(bv, '__esModule', { value: !0 })
  const Mv = FA
  let Pv, Uv, Dv
  function wv(e) {
    const t = Mv.GLOBAL_OBJ._sentryDebugIds
    if (!t) return {}
    const n = Object.keys(t)
    return (
      (Dv && n.length === Uv) ||
        ((Uv = n.length),
        (Dv = n.reduce((n, r) => {
          Pv || (Pv = {})
          const o = Pv[r]
          if (o) n[o[0]] = o[1]
          else {
            const o = e(r)
            for (let e = o.length - 1; e >= 0; e--) {
              const i = o[e],
                s = i && i.filename,
                a = t[r]
              if (s && a) {
                ;(n[s] = a), (Pv[r] = [s, a])
                break
              }
            }
          }
          return n
        }, {}))),
      Dv
    )
  }
  ;(bv.getDebugImagesForResources = function (e, t) {
    const n = wv(e)
    if (!n) return []
    const r = []
    for (const e of t) e && n[e] && r.push({ type: 'sourcemap', code_file: e, debug_id: n[e] })
    return r
  }),
    (bv.getFilenameToDebugIdMap = wv)
  var xv = {}
  Object.defineProperty(xv, '__esModule', { value: !0 })
  const Vv = fg,
    Gv = Ph,
    Bv = ym,
    kv = gh
  function Fv(e, t, n) {
    e[t] = Bv.merge(e[t], n, 1)
  }
  ;(xv.applyScopeDataToEvent = function (e, t) {
    const { fingerprint: n, span: r, breadcrumbs: o, sdkProcessingMetadata: i } = t
    !(function (e, t) {
      const { extra: n, tags: r, user: o, contexts: i, level: s, transactionName: a } = t,
        c = Gv.dropUndefinedKeys(n)
      c && Object.keys(c).length && (e.extra = { ...c, ...e.extra })
      const _ = Gv.dropUndefinedKeys(r)
      _ && Object.keys(_).length && (e.tags = { ..._, ...e.tags })
      const u = Gv.dropUndefinedKeys(o)
      u && Object.keys(u).length && (e.user = { ...u, ...e.user })
      const E = Gv.dropUndefinedKeys(i)
      E && Object.keys(E).length && (e.contexts = { ...E, ...e.contexts })
      s && (e.level = s)
      a && 'transaction' !== e.type && (e.transaction = a)
    })(e, t),
      r &&
        (function (e, t) {
          ;(e.contexts = { trace: kv.spanToTraceContext(t), ...e.contexts }),
            (e.sdkProcessingMetadata = {
              dynamicSamplingContext: Vv.getDynamicSamplingContextFromSpan(t),
              ...e.sdkProcessingMetadata,
            })
          const n = kv.getRootSpan(t),
            r = kv.spanToJSON(n).description
          r && !e.transaction && 'transaction' === e.type && (e.transaction = r)
        })(e, r),
      (function (e, t) {
        ;(e.fingerprint = e.fingerprint
          ? Array.isArray(e.fingerprint)
            ? e.fingerprint
            : [e.fingerprint]
          : []),
          t && (e.fingerprint = e.fingerprint.concat(t))
        e.fingerprint && !e.fingerprint.length && delete e.fingerprint
      })(e, n),
      (function (e, t) {
        const n = [...(e.breadcrumbs || []), ...t]
        e.breadcrumbs = n.length ? n : void 0
      })(e, o),
      (function (e, t) {
        e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t }
      })(e, i)
  }),
    (xv.mergeAndOverwriteScopeData = Fv),
    (xv.mergeScopeData = function (e, t) {
      const {
        extra: n,
        tags: r,
        user: o,
        contexts: i,
        level: s,
        sdkProcessingMetadata: a,
        breadcrumbs: c,
        fingerprint: _,
        eventProcessors: u,
        attachments: E,
        propagationContext: l,
        transactionName: T,
        span: p,
      } = t
      Fv(e, 'extra', n),
        Fv(e, 'tags', r),
        Fv(e, 'user', o),
        Fv(e, 'contexts', i),
        (e.sdkProcessingMetadata = Bv.merge(e.sdkProcessingMetadata, a, 2)),
        s && (e.level = s),
        T && (e.transactionName = T),
        p && (e.span = p),
        c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]),
        _.length && (e.fingerprint = [...e.fingerprint, ..._]),
        u.length && (e.eventProcessors = [...e.eventProcessors, ...u]),
        E.length && (e.attachments = [...e.attachments, ...E]),
        (e.propagationContext = { ...e.propagationContext, ...l })
    }),
    Object.defineProperty(vv, '__esModule', { value: !0 })
  const Hv = Ag,
    Yv = eR,
    jv = Iv,
    Kv = bh,
    Wv = bv,
    qv = cm,
    Qv = Xg,
    zv = Yh,
    $v = rm,
    Xv = xv
  function Jv(e, t) {
    const { environment: n, release: r, dist: o, maxValueLength: i = 250 } = t
    ;(e.environment = e.environment || n || Hv.DEFAULT_ENVIRONMENT),
      !e.release && r && (e.release = r),
      !e.dist && o && (e.dist = o),
      e.message && (e.message = zv.truncate(e.message, i))
    const s = e.exception && e.exception.values && e.exception.values[0]
    s && s.value && (s.value = zv.truncate(s.value, i))
    const a = e.request
    a && a.url && (a.url = zv.truncate(a.url, i))
  }
  function Zv(e, t) {
    const n = Wv.getFilenameToDebugIdMap(t)
    try {
      e.exception.values.forEach((e) => {
        e.stacktrace.frames.forEach((e) => {
          n && e.filename && (e.debug_id = n[e.filename])
        })
      })
    } catch (e) {}
  }
  function eI(e) {
    const t = {}
    try {
      e.exception.values.forEach((e) => {
        e.stacktrace.frames.forEach((e) => {
          e.debug_id &&
            (e.abs_path ? (t[e.abs_path] = e.debug_id) : e.filename && (t[e.filename] = e.debug_id),
            delete e.debug_id)
        })
      })
    } catch (e) {}
    if (0 === Object.keys(t).length) return
    ;(e.debug_meta = e.debug_meta || {}), (e.debug_meta.images = e.debug_meta.images || [])
    const n = e.debug_meta.images
    Object.entries(t).forEach(([e, t]) => {
      n.push({ type: 'sourcemap', code_file: e, debug_id: t })
    })
  }
  function tI(e, t) {
    if (!t) return e
    const n = e ? e.clone() : new Kv.Scope()
    return n.update(t), n
  }
  const nI = [
    'user',
    'level',
    'extra',
    'contexts',
    'tags',
    'fingerprint',
    'requestSession',
    'propagationContext',
  ]
  ;(vv.applyClientOptions = Jv),
    (vv.applyDebugIds = Zv),
    (vv.applyDebugMeta = eI),
    (vv.parseEventHintOrCaptureContext = function (e) {
      if (e)
        return (function (e) {
          return e instanceof Kv.Scope || 'function' == typeof e
        })(e) ||
          (function (e) {
            return Object.keys(e).some((e) => nI.includes(e))
          })(e)
          ? { captureContext: e }
          : e
    }),
    (vv.prepareEvent = function (e, t, n, r, o, i) {
      const { normalizeDepth: s = 3, normalizeMaxBreadth: a = 1e3 } = e,
        c = {
          ...t,
          event_id: t.event_id || n.event_id || qv.uuid4(),
          timestamp: t.timestamp || $v.dateTimestampInSeconds(),
        },
        _ = n.integrations || e.integrations.map((e) => e.name)
      Jv(c, e),
        (function (e, t) {
          t.length > 0 &&
            ((e.sdk = e.sdk || {}), (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]))
        })(c, _),
        o && o.emit('applyFrameMetadata', t),
        void 0 === t.type && Zv(c, e.stackParser)
      const u = tI(r, n.captureContext)
      n.mechanism && qv.addExceptionMechanism(c, n.mechanism)
      const E = o ? o.getEventProcessors() : [],
        l = Yv.getGlobalScope().getScopeData()
      if (i) {
        const e = i.getScopeData()
        Xv.mergeScopeData(l, e)
      }
      if (u) {
        const e = u.getScopeData()
        Xv.mergeScopeData(l, e)
      }
      const T = [...(n.attachments || []), ...l.attachments]
      T.length && (n.attachments = T), Xv.applyScopeDataToEvent(c, l)
      const p = [...E, ...l.eventProcessors]
      return jv.notifyEventProcessors(p, c, n).then(
        (e) => (
          e && eI(e),
          'number' == typeof s && s > 0
            ? (function (e, t, n) {
                if (!e) return null
                const r = {
                  ...e,
                  ...(e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map((e) => ({
                      ...e,
                      ...(e.data && { data: Qv.normalize(e.data, t, n) }),
                    })),
                  }),
                  ...(e.user && { user: Qv.normalize(e.user, t, n) }),
                  ...(e.contexts && { contexts: Qv.normalize(e.contexts, t, n) }),
                  ...(e.extra && { extra: Qv.normalize(e.extra, t, n) }),
                }
                e.contexts &&
                  e.contexts.trace &&
                  r.contexts &&
                  ((r.contexts.trace = e.contexts.trace),
                  e.contexts.trace.data &&
                    (r.contexts.trace.data = Qv.normalize(e.contexts.trace.data, t, n)))
                e.spans &&
                  (r.spans = e.spans.map((e) => ({
                    ...e,
                    ...(e.data && { data: Qv.normalize(e.data, t, n) }),
                  })))
                e.contexts &&
                  e.contexts.flags &&
                  r.contexts &&
                  (r.contexts.flags = Qv.normalize(e.contexts.flags, 3, n))
                return r
              })(e, s, a)
            : e
        ),
      )
    }),
    Object.defineProperty(Ov, '__esModule', { value: !0 })
  const rI = Ag,
    oI = eR,
    iI = GA,
    sI = Mh,
    aI = Dh,
    cI = QA,
    _I = cm,
    uI = rm,
    EI = FA,
    lI = vv
  function TI(e, t) {
    const n = oI.getCurrentScope(),
      r = oI.getClient()
    if (r) {
      if (r.captureCheckIn) return r.captureCheckIn(e, t, n)
      iI.DEBUG_BUILD &&
        cI.logger.warn('Cannot capture check-in. Client does not support sending check-ins.')
    } else iI.DEBUG_BUILD && cI.logger.warn('Cannot capture check-in. No client defined.')
    return _I.uuid4()
  }
  function pI() {
    const e = oI.getIsolationScope(),
      t = oI.getCurrentScope(),
      n = t.getSession() || e.getSession()
    n && sI.closeSession(n), dI(), e.setSession(), t.setSession()
  }
  function dI() {
    const e = oI.getIsolationScope(),
      t = oI.getCurrentScope(),
      n = oI.getClient(),
      r = t.getSession() || e.getSession()
    r && n && n.captureSession(r)
  }
  ;(Ov.addEventProcessor = function (e) {
    oI.getIsolationScope().addEventProcessor(e)
  }),
    (Ov.captureCheckIn = TI),
    (Ov.captureEvent = function (e, t) {
      return oI.getCurrentScope().captureEvent(e, t)
    }),
    (Ov.captureException = function (e, t) {
      return oI.getCurrentScope().captureException(e, lI.parseEventHintOrCaptureContext(t))
    }),
    (Ov.captureMessage = function (e, t) {
      const n = 'string' == typeof t ? t : void 0,
        r = 'string' != typeof t ? { captureContext: t } : void 0
      return oI.getCurrentScope().captureMessage(e, n, r)
    }),
    (Ov.captureSession = function (e = !1) {
      e ? pI() : dI()
    }),
    (Ov.close = async function (e) {
      const t = oI.getClient()
      return t
        ? t.close(e)
        : (iI.DEBUG_BUILD &&
            cI.logger.warn('Cannot flush events and disable SDK. No client defined.'),
          Promise.resolve(!1))
    }),
    (Ov.endSession = pI),
    (Ov.flush = async function (e) {
      const t = oI.getClient()
      return t
        ? t.flush(e)
        : (iI.DEBUG_BUILD && cI.logger.warn('Cannot flush events. No client defined.'),
          Promise.resolve(!1))
    }),
    (Ov.isEnabled = function () {
      const e = oI.getClient()
      return !!e && !1 !== e.getOptions().enabled && !!e.getTransport()
    }),
    (Ov.isInitialized = function () {
      return !!oI.getClient()
    }),
    (Ov.lastEventId = function () {
      return oI.getIsolationScope().lastEventId()
    }),
    (Ov.setContext = function (e, t) {
      oI.getIsolationScope().setContext(e, t)
    }),
    (Ov.setExtra = function (e, t) {
      oI.getIsolationScope().setExtra(e, t)
    }),
    (Ov.setExtras = function (e) {
      oI.getIsolationScope().setExtras(e)
    }),
    (Ov.setTag = function (e, t) {
      oI.getIsolationScope().setTag(e, t)
    }),
    (Ov.setTags = function (e) {
      oI.getIsolationScope().setTags(e)
    }),
    (Ov.setUser = function (e) {
      oI.getIsolationScope().setUser(e)
    }),
    (Ov.startSession = function (e) {
      const t = oI.getClient(),
        n = oI.getIsolationScope(),
        r = oI.getCurrentScope(),
        { release: o, environment: i = rI.DEFAULT_ENVIRONMENT } = (t && t.getOptions()) || {},
        { userAgent: s } = EI.GLOBAL_OBJ.navigator || {},
        a = sI.makeSession({
          release: o,
          environment: i,
          user: r.getUser() || n.getUser(),
          ...(s && { userAgent: s }),
          ...e,
        }),
        c = n.getSession()
      return (
        c && 'ok' === c.status && sI.updateSession(c, { status: 'exited' }),
        pI(),
        n.setSession(a),
        r.setSession(a),
        a
      )
    }),
    (Ov.withMonitor = function (e, t, n) {
      const r = TI({ monitorSlug: e, status: 'in_progress' }, n),
        o = uI.timestampInSeconds()
      function i(t) {
        TI({ monitorSlug: e, status: t, checkInId: r, duration: uI.timestampInSeconds() - o })
      }
      return oI.withIsolationScope(() => {
        let e
        try {
          e = t()
        } catch (e) {
          throw (i('error'), e)
        }
        return (
          aI.isThenable(e)
            ? Promise.resolve(e).then(
                () => {
                  i('ok')
                },
                (e) => {
                  throw (i('error'), e)
                },
              )
            : i('ok'),
          e
        )
      })
    })
  var SI = {}
  Object.defineProperty(SI, '__esModule', { value: !0 })
  const fI = eR,
    AI = Ph
  SI.SessionFlusher = class {
    constructor(e, t) {
      ;(this._client = e),
        (this.flushTimeout = 60),
        (this._pendingAggregates = new Map()),
        (this._isEnabled = !0),
        (this._intervalId = setInterval(() => this.flush(), 1e3 * this.flushTimeout)),
        this._intervalId.unref && this._intervalId.unref(),
        (this._sessionAttrs = t)
    }
    flush() {
      const e = this.getSessionAggregates()
      0 !== e.aggregates.length &&
        ((this._pendingAggregates = new Map()), this._client.sendSession(e))
    }
    getSessionAggregates() {
      const e = Array.from(this._pendingAggregates.values()),
        t = { attrs: this._sessionAttrs, aggregates: e }
      return AI.dropUndefinedKeys(t)
    }
    close() {
      clearInterval(this._intervalId), (this._isEnabled = !1), this.flush()
    }
    incrementSessionStatusCount() {
      if (!this._isEnabled) return
      const e = fI.getIsolationScope(),
        t = e.getRequestSession()
      t &&
        t.status &&
        (this._incrementSessionStatusCount(t.status, new Date()), e.setRequestSession(void 0))
    }
    _incrementSessionStatusCount(e, t) {
      const n = new Date(t).setSeconds(0, 0)
      let r = this._pendingAggregates.get(n)
      switch (
        (r || ((r = { started: new Date(n).toISOString() }), this._pendingAggregates.set(n, r)), e)
      ) {
        case 'errored':
          return (r.errored = (r.errored || 0) + 1), r.errored
        case 'ok':
          return (r.exited = (r.exited || 0) + 1), r.exited
        default:
          return (r.crashed = (r.crashed || 0) + 1), r.crashed
      }
    }
  }
  var hI = {}
  Object.defineProperty(hI, '__esModule', { value: !0 })
  const mI = jg
  function RI(e) {
    const t = e.protocol ? `${e.protocol}:` : '',
      n = e.port ? `:${e.port}` : ''
    return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ''}/api/`
  }
  ;(hI.getEnvelopeEndpointWithUrlEncodedAuth = function (e, t, n) {
    return (
      t ||
      `${(function (e) {
        return `${RI(e)}${e.projectId}/envelope/`
      })(e)}?${(function (e, t) {
        const n = { sentry_version: '7' }
        return (
          e.publicKey && (n.sentry_key = e.publicKey),
          t && (n.sentry_client = `${t.name}/${t.version}`),
          new URLSearchParams(n).toString()
        )
      })(e, n)}`
    )
  }),
    (hI.getReportDialogEndpoint = function (e, t) {
      const n = mI.makeDsn(e)
      if (!n) return ''
      const r = `${RI(n)}embed/error-page/`
      let o = `dsn=${mI.dsnToString(n)}`
      for (const e in t)
        if ('dsn' !== e && 'onClose' !== e)
          if ('user' === e) {
            const e = t.user
            if (!e) continue
            e.name && (o += `&name=${encodeURIComponent(e.name)}`),
              e.email && (o += `&email=${encodeURIComponent(e.email)}`)
          } else o += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`
      return `${r}?${o}`
    })
  var gI = {},
    OI = {}
  Object.defineProperty(OI, '__esModule', { value: !0 })
  const vI = eR,
    II = GA,
    NI = QA,
    yI = []
  function CI(e, t, n) {
    if (n[t.name])
      II.DEBUG_BUILD &&
        NI.logger.log(`Integration skipped because it was already installed: ${t.name}`)
    else {
      if (
        ((n[t.name] = t),
        -1 === yI.indexOf(t.name) &&
          'function' == typeof t.setupOnce &&
          (t.setupOnce(), yI.push(t.name)),
        t.setup && 'function' == typeof t.setup && t.setup(e),
        'function' == typeof t.preprocessEvent)
      ) {
        const n = t.preprocessEvent.bind(t)
        e.on('preprocessEvent', (t, r) => n(t, r, e))
      }
      if ('function' == typeof t.processEvent) {
        const n = t.processEvent.bind(t),
          r = Object.assign((t, r) => n(t, r, e), { id: t.name })
        e.addEventProcessor(r)
      }
      II.DEBUG_BUILD && NI.logger.log(`Integration installed: ${t.name}`)
    }
  }
  ;(OI.addIntegration = function (e) {
    const t = vI.getClient()
    t
      ? t.addIntegration(e)
      : II.DEBUG_BUILD &&
        NI.logger.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`)
  }),
    (OI.afterSetupIntegrations = function (e, t) {
      for (const n of t) n && n.afterAllSetup && n.afterAllSetup(e)
    }),
    (OI.defineIntegration = function (e) {
      return e
    }),
    (OI.getIntegrationsToSetup = function (e) {
      const t = e.defaultIntegrations || [],
        n = e.integrations
      let r
      if (
        (t.forEach((e) => {
          e.isDefaultInstance = !0
        }),
        Array.isArray(n))
      )
        r = [...t, ...n]
      else if ('function' == typeof n) {
        const e = n(t)
        r = Array.isArray(e) ? e : [e]
      } else r = t
      const o = (function (e) {
          const t = {}
          return (
            e.forEach((e) => {
              const { name: n } = e,
                r = t[n]
              ;(r && !r.isDefaultInstance && e.isDefaultInstance) || (t[n] = e)
            }),
            Object.values(t)
          )
        })(r),
        i = o.findIndex((e) => 'Debug' === e.name)
      if (i > -1) {
        const [e] = o.splice(i, 1)
        o.push(e)
      }
      return o
    }),
    (OI.installedIntegrations = yI),
    (OI.setupIntegration = CI),
    (OI.setupIntegrations = function (e, t) {
      const n = {}
      return (
        t.forEach((t) => {
          t && CI(e, t, n)
        }),
        n
      )
    })
  var LI = {}
  Object.defineProperty(LI, '__esModule', { value: !0 })
  const bI = $g,
    MI = rm
  LI.createClientReportEnvelope = function (e, t, n) {
    const r = [
      { type: 'client_report' },
      { timestamp: n || MI.dateTimestampInSeconds(), discarded_events: e },
    ]
    return bI.createEnvelope(t ? { dsn: t } : {}, [r])
  }
  var PI = {}
  Object.defineProperty(PI, '__esModule', { value: !0 })
  let UI = class extends Error {
    constructor(e, t = 'warn') {
      super(e),
        (this.message = e),
        (this.name = new.target.prototype.constructor.name),
        Object.setPrototypeOf(this, new.target.prototype),
        (this.logLevel = t)
    }
  }
  ;(PI.SentryError = UI), Object.defineProperty(gI, '__esModule', { value: !0 })
  const DI = hI,
    wI = eR,
    xI = GA,
    VI = Yg,
    GI = OI,
    BI = Mh,
    kI = fg,
    FI = LI,
    HI = jg,
    YI = $g,
    jI = PI,
    KI = Dh,
    WI = QA,
    qI = cm,
    QI = dm,
    zI = Dg,
    $I = vv,
    XI = gh,
    JI = "Not capturing exception because it's already been captured."
  function ZI(e) {
    return void 0 === e.type
  }
  function eN(e) {
    return 'transaction' === e.type
  }
  gI.BaseClient = class {
    constructor(e) {
      if (
        ((this._options = e),
        (this._integrations = {}),
        (this._numProcessing = 0),
        (this._outcomes = {}),
        (this._hooks = {}),
        (this._eventProcessors = []),
        e.dsn
          ? (this._dsn = HI.makeDsn(e.dsn))
          : xI.DEBUG_BUILD && WI.logger.warn('No DSN provided, client will not send events.'),
        this._dsn)
      ) {
        const t = DI.getEnvelopeEndpointWithUrlEncodedAuth(
          this._dsn,
          e.tunnel,
          e._metadata ? e._metadata.sdk : void 0,
        )
        this._transport = e.transport({
          tunnel: this._options.tunnel,
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...e.transportOptions,
          url: t,
        })
      }
      const t = ['enableTracing', 'tracesSampleRate', 'tracesSampler'].find(
        (t) => t in e && null == e[t],
      )
      t &&
        WI.consoleSandbox(() => {
          console.warn(
            `[Sentry] Deprecation warning: \`${t}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`,
          )
        })
    }
    captureException(e, t, n) {
      const r = qI.uuid4()
      if (qI.checkOrSetAlreadyCaught(e)) return xI.DEBUG_BUILD && WI.logger.log(JI), r
      const o = { event_id: r, ...t }
      return (
        this._process(this.eventFromException(e, o).then((e) => this._captureEvent(e, o, n))),
        o.event_id
      )
    }
    captureMessage(e, t, n, r) {
      const o = { event_id: qI.uuid4(), ...n },
        i = KI.isParameterizedString(e) ? e : String(e),
        s = KI.isPrimitive(e) ? this.eventFromMessage(i, t, o) : this.eventFromException(e, o)
      return this._process(s.then((e) => this._captureEvent(e, o, r))), o.event_id
    }
    captureEvent(e, t, n) {
      const r = qI.uuid4()
      if (t && t.originalException && qI.checkOrSetAlreadyCaught(t.originalException))
        return xI.DEBUG_BUILD && WI.logger.log(JI), r
      const o = { event_id: r, ...t },
        i = (e.sdkProcessingMetadata || {}).capturedSpanScope
      return this._process(this._captureEvent(e, o, i || n)), o.event_id
    }
    captureSession(e) {
      'string' != typeof e.release
        ? xI.DEBUG_BUILD &&
          WI.logger.warn('Discarded session because of missing or non-string release')
        : (this.sendSession(e), BI.updateSession(e, { init: !1 }))
    }
    getDsn() {
      return this._dsn
    }
    getOptions() {
      return this._options
    }
    getSdkMetadata() {
      return this._options._metadata
    }
    getTransport() {
      return this._transport
    }
    flush(e) {
      const t = this._transport
      return t
        ? (this.emit('flush'),
          this._isClientDoneProcessing(e).then((n) => t.flush(e).then((e) => n && e)))
        : QI.resolvedSyncPromise(!0)
    }
    close(e) {
      return this.flush(e).then((e) => ((this.getOptions().enabled = !1), this.emit('close'), e))
    }
    getEventProcessors() {
      return this._eventProcessors
    }
    addEventProcessor(e) {
      this._eventProcessors.push(e)
    }
    init() {
      ;(this._isEnabled() ||
        this._options.integrations.some(({ name: e }) => e.startsWith('Spotlight'))) &&
        this._setupIntegrations()
    }
    getIntegrationByName(e) {
      return this._integrations[e]
    }
    addIntegration(e) {
      const t = this._integrations[e.name]
      GI.setupIntegration(this, e, this._integrations), t || GI.afterSetupIntegrations(this, [e])
    }
    sendEvent(e, t = {}) {
      this.emit('beforeSendEvent', e, t)
      let n = VI.createEventEnvelope(e, this._dsn, this._options._metadata, this._options.tunnel)
      for (const e of t.attachments || [])
        n = YI.addItemToEnvelope(n, YI.createAttachmentEnvelopeItem(e))
      const r = this.sendEnvelope(n)
      r && r.then((t) => this.emit('afterSendEvent', e, t), null)
    }
    sendSession(e) {
      const t = VI.createSessionEnvelope(
        e,
        this._dsn,
        this._options._metadata,
        this._options.tunnel,
      )
      this.sendEnvelope(t)
    }
    recordDroppedEvent(e, t, n) {
      if (this._options.sendClientReports) {
        const r = 'number' == typeof n ? n : 1,
          o = `${e}:${t}`
        xI.DEBUG_BUILD && WI.logger.log(`Recording outcome: "${o}"${r > 1 ? ` (${r} times)` : ''}`),
          (this._outcomes[o] = (this._outcomes[o] || 0) + r)
      }
    }
    on(e, t) {
      const n = (this._hooks[e] = this._hooks[e] || [])
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t)
          e > -1 && n.splice(e, 1)
        }
      )
    }
    emit(e, ...t) {
      const n = this._hooks[e]
      n && n.forEach((e) => e(...t))
    }
    sendEnvelope(e) {
      return (
        this.emit('beforeEnvelope', e),
        this._isEnabled() && this._transport
          ? this._transport
              .send(e)
              .then(
                null,
                (e) => (xI.DEBUG_BUILD && WI.logger.error('Error while sending envelope:', e), e),
              )
          : (xI.DEBUG_BUILD && WI.logger.error('Transport disabled'), QI.resolvedSyncPromise({}))
      )
    }
    _setupIntegrations() {
      const { integrations: e } = this._options
      ;(this._integrations = GI.setupIntegrations(this, e)), GI.afterSetupIntegrations(this, e)
    }
    _updateSessionFromEvent(e, t) {
      let n = !1,
        r = !1
      const o = t.exception && t.exception.values
      if (o) {
        r = !0
        for (const e of o) {
          const t = e.mechanism
          if (t && !1 === t.handled) {
            n = !0
            break
          }
        }
      }
      const i = 'ok' === e.status
      ;((i && 0 === e.errors) || (i && n)) &&
        (BI.updateSession(e, {
          ...(n && { status: 'crashed' }),
          errors: e.errors || Number(r || n),
        }),
        this.captureSession(e))
    }
    _isClientDoneProcessing(e) {
      return new QI.SyncPromise((t) => {
        let n = 0
        const r = setInterval(() => {
          0 == this._numProcessing
            ? (clearInterval(r), t(!0))
            : ((n += 1), e && n >= e && (clearInterval(r), t(!1)))
        }, 1)
      })
    }
    _isEnabled() {
      return !1 !== this.getOptions().enabled && void 0 !== this._transport
    }
    _prepareEvent(e, t, n = wI.getCurrentScope(), r = wI.getIsolationScope()) {
      const o = this.getOptions(),
        i = Object.keys(this._integrations)
      return (
        !t.integrations && i.length > 0 && (t.integrations = i),
        this.emit('preprocessEvent', e, t),
        e.type || r.setLastEventId(e.event_id || t.event_id),
        $I.prepareEvent(o, e, t, n, this, r).then((e) => {
          if (null === e) return e
          e.contexts = { trace: wI.getTraceContextFromScope(n), ...e.contexts }
          const t = kI.getDynamicSamplingContextFromScope(this, n)
          return (
            (e.sdkProcessingMetadata = { dynamicSamplingContext: t, ...e.sdkProcessingMetadata }), e
          )
        })
      )
    }
    _captureEvent(e, t = {}, n) {
      return this._processEvent(e, t, n).then(
        (e) => e.event_id,
        (e) => {
          if (xI.DEBUG_BUILD) {
            const t = e
            'log' === t.logLevel ? WI.logger.log(t.message) : WI.logger.warn(t)
          }
        },
      )
    }
    _processEvent(e, t, n) {
      const r = this.getOptions(),
        { sampleRate: o } = r,
        i = eN(e),
        s = ZI(e),
        a = e.type || 'error',
        c = `before send for type \`${a}\``,
        _ = void 0 === o ? void 0 : zI.parseSampleRate(o)
      if (s && 'number' == typeof _ && Math.random() > _)
        return (
          this.recordDroppedEvent('sample_rate', 'error', e),
          QI.rejectedSyncPromise(
            new jI.SentryError(
              `Discarding event because it's not included in the random sample (sampling rate = ${o})`,
              'log',
            ),
          )
        )
      const u = 'replay_event' === a ? 'replay' : a,
        E = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope
      return this._prepareEvent(e, t, n, E)
        .then((n) => {
          if (null === n)
            throw (
              (this.recordDroppedEvent('event_processor', u, e),
              new jI.SentryError('An event processor returned `null`, will not send event.', 'log'))
            )
          if (t.data && !0 === t.data.__sentry__) return n
          const o = (function (e, t, n, r) {
            const { beforeSend: o, beforeSendTransaction: i, beforeSendSpan: s } = t
            if (ZI(n) && o) return o(n, r)
            if (eN(n)) {
              if (n.spans && s) {
                const t = []
                for (const r of n.spans) {
                  const n = s(r)
                  n
                    ? t.push(n)
                    : (XI.showSpanDropWarning(), e.recordDroppedEvent('before_send', 'span'))
                }
                n.spans = t
              }
              if (i) {
                if (n.spans) {
                  const e = n.spans.length
                  n.sdkProcessingMetadata = {
                    ...n.sdkProcessingMetadata,
                    spanCountBeforeProcessing: e,
                  }
                }
                return i(n, r)
              }
            }
            return n
          })(this, r, n, t)
          return (function (e, t) {
            const n = `${t} must return \`null\` or a valid event.`
            if (KI.isThenable(e))
              return e.then(
                (e) => {
                  if (!KI.isPlainObject(e) && null !== e) throw new jI.SentryError(n)
                  return e
                },
                (e) => {
                  throw new jI.SentryError(`${t} rejected with ${e}`)
                },
              )
            if (!KI.isPlainObject(e) && null !== e) throw new jI.SentryError(n)
            return e
          })(o, c)
        })
        .then((r) => {
          if (null === r) {
            if ((this.recordDroppedEvent('before_send', u, e), i)) {
              const t = 1 + (e.spans || []).length
              this.recordDroppedEvent('before_send', 'span', t)
            }
            throw new jI.SentryError(`${c} returned \`null\`, will not send event.`, 'log')
          }
          const o = n && n.getSession()
          if ((!i && o && this._updateSessionFromEvent(o, r), i)) {
            const e =
              ((r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing) ||
                0) - (r.spans ? r.spans.length : 0)
            e > 0 && this.recordDroppedEvent('before_send', 'span', e)
          }
          const s = r.transaction_info
          if (i && s && r.transaction !== e.transaction) {
            const e = 'custom'
            r.transaction_info = { ...s, source: e }
          }
          return this.sendEvent(r, t), r
        })
        .then(null, (e) => {
          if (e instanceof jI.SentryError) throw e
          throw (
            (this.captureException(e, { data: { __sentry__: !0 }, originalException: e }),
            new jI.SentryError(
              `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`,
            ))
          )
        })
    }
    _process(e) {
      this._numProcessing++,
        e.then(
          (e) => (this._numProcessing--, e),
          (e) => (this._numProcessing--, e),
        )
    }
    _clearOutcomes() {
      const e = this._outcomes
      return (
        (this._outcomes = {}),
        Object.entries(e).map(([e, t]) => {
          const [n, r] = e.split(':')
          return { reason: n, category: r, quantity: t }
        })
      )
    }
    _flushOutcomes() {
      xI.DEBUG_BUILD && WI.logger.log('Flushing outcomes...')
      const e = this._clearOutcomes()
      if (0 === e.length) return void (xI.DEBUG_BUILD && WI.logger.log('No outcomes to send'))
      if (!this._dsn)
        return void (xI.DEBUG_BUILD && WI.logger.log('No dsn provided, will not send outcomes'))
      xI.DEBUG_BUILD && WI.logger.log('Sending outcomes:', e)
      const t = FI.createClientReportEnvelope(e, this._options.tunnel && HI.dsnToString(this._dsn))
      this.sendEnvelope(t)
    }
  }
  var tN = {},
    nN = {}
  Object.defineProperty(nN, '__esModule', { value: !0 })
  const rN = jg,
    oN = $g,
    iN = Ph
  nN.createCheckInEnvelope = function (e, t, n, r, o) {
    const i = { sent_at: new Date().toISOString() }
    n && n.sdk && (i.sdk = { name: n.sdk.name, version: n.sdk.version }),
      r && o && (i.dsn = rN.dsnToString(o)),
      t && (i.trace = iN.dropUndefinedKeys(t))
    const s = (function (e) {
      return [{ type: 'check_in' }, e]
    })(e)
    return oN.createEnvelope(i, [s])
  }
  var sN = {}
  Object.defineProperty(sN, '__esModule', { value: !0 })
  const aN = Dh,
    cN = cm,
    _N = Xg,
    uN = Ph
  function EN(e, t) {
    return e(t.stack || '', 1)
  }
  function lN(e, t) {
    const n = { type: t.name || t.constructor.name, value: t.message },
      r = EN(e, t)
    return r.length && (n.stacktrace = { frames: r }), n
  }
  function TN(e) {
    if ('name' in e && 'string' == typeof e.name) {
      let t = `'${e.name}' captured as exception`
      return (
        'message' in e && 'string' == typeof e.message && (t += ` with message '${e.message}'`), t
      )
    }
    if ('message' in e && 'string' == typeof e.message) return e.message
    const t = uN.extractExceptionKeysForMessage(e)
    if (aN.isErrorEvent(e))
      return `Event \`ErrorEvent\` captured as exception with message \`${e.message}\``
    const n = (function (e) {
      try {
        const t = Object.getPrototypeOf(e)
        return t ? t.constructor.name : void 0
      } catch (e) {}
    })(e)
    return `${n && 'Object' !== n ? `'${n}'` : 'Object'} captured as exception with keys: ${t}`
  }
  function pN(e, t, n, r) {
    if (aN.isError(n)) return [n, void 0]
    if (((t.synthetic = !0), aN.isPlainObject(n))) {
      const t = e && e.getOptions().normalizeDepth,
        o = { __serialized__: _N.normalizeToSize(n, t) },
        i = (function (e) {
          for (const t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) {
              const n = e[t]
              if (n instanceof Error) return n
            }
        })(n)
      if (i) return [i, o]
      const s = TN(n),
        a = (r && r.syntheticException) || new Error(s)
      return (a.message = s), [a, o]
    }
    const o = (r && r.syntheticException) || new Error(n)
    return (o.message = `${n}`), [o, void 0]
  }
  ;(sN.eventFromMessage = function (e, t, n = 'info', r, o) {
    const i = { event_id: r && r.event_id, level: n }
    if (o && r && r.syntheticException) {
      const n = EN(e, r.syntheticException)
      n.length &&
        ((i.exception = { values: [{ value: t, stacktrace: { frames: n } }] }),
        cN.addExceptionMechanism(i, { synthetic: !0 }))
    }
    if (aN.isParameterizedString(t)) {
      const { __sentry_template_string__: e, __sentry_template_values__: n } = t
      return (i.logentry = { message: e, params: n }), i
    }
    return (i.message = t), i
  }),
    (sN.eventFromUnknownInput = function (e, t, n, r) {
      const o = (r && r.data && r.data.mechanism) || { handled: !0, type: 'generic' },
        [i, s] = pN(e, o, n, r),
        a = { exception: { values: [lN(t, i)] } }
      return (
        s && (a.extra = s),
        cN.addExceptionTypeValue(a, void 0, void 0),
        cN.addExceptionMechanism(a, o),
        { ...a, event_id: r && r.event_id }
      )
    }),
    (sN.exceptionFromError = lN),
    (sN.parseStackFrames = EN),
    Object.defineProperty(tN, '__esModule', { value: !0 })
  const dN = gI,
    SN = nN,
    fN = eR,
    AN = GA,
    hN = SI,
    mN = VA,
    RN = QA,
    gN = Cm,
    ON = gh,
    vN = cm,
    IN = dm,
    NN = sN,
    yN = fg
  class CN extends dN.BaseClient {
    constructor(e) {
      mN.registerSpanErrorInstrumentation(), super(e)
    }
    eventFromException(e, t) {
      const n = NN.eventFromUnknownInput(this, this._options.stackParser, e, t)
      return (n.level = 'error'), IN.resolvedSyncPromise(n)
    }
    eventFromMessage(e, t = 'info', n) {
      return IN.resolvedSyncPromise(
        NN.eventFromMessage(this._options.stackParser, e, t, n, this._options.attachStacktrace),
      )
    }
    captureException(e, t, n) {
      if (this._options.autoSessionTracking && this._sessionFlusher) {
        const e = fN.getIsolationScope().getRequestSession()
        e && 'ok' === e.status && (e.status = 'errored')
      }
      return super.captureException(e, t, n)
    }
    captureEvent(e, t, n) {
      if (this._options.autoSessionTracking && this._sessionFlusher) {
        if (
          'exception' === (e.type || 'exception') &&
          e.exception &&
          e.exception.values &&
          e.exception.values.length > 0
        ) {
          const e = fN.getIsolationScope().getRequestSession()
          e && 'ok' === e.status && (e.status = 'errored')
        }
      }
      return super.captureEvent(e, t, n)
    }
    close(e) {
      return this._sessionFlusher && this._sessionFlusher.close(), super.close(e)
    }
    initSessionFlusher() {
      const { release: e, environment: t } = this._options
      e
        ? (this._sessionFlusher = new hN.SessionFlusher(this, { release: e, environment: t }))
        : AN.DEBUG_BUILD &&
          RN.logger.warn(
            'Cannot initialize an instance of SessionFlusher if no release is provided!',
          )
    }
    captureCheckIn(e, t, n) {
      const r = 'checkInId' in e && e.checkInId ? e.checkInId : vN.uuid4()
      if (!this._isEnabled())
        return AN.DEBUG_BUILD && RN.logger.warn('SDK not enabled, will not capture checkin.'), r
      const o = this.getOptions(),
        { release: i, environment: s, tunnel: a } = o,
        c = {
          check_in_id: r,
          monitor_slug: e.monitorSlug,
          status: e.status,
          release: i,
          environment: s,
        }
      'duration' in e && (c.duration = e.duration),
        t &&
          (c.monitor_config = {
            schedule: t.schedule,
            checkin_margin: t.checkinMargin,
            max_runtime: t.maxRuntime,
            timezone: t.timezone,
            failure_issue_threshold: t.failureIssueThreshold,
            recovery_threshold: t.recoveryThreshold,
          })
      const [_, u] = this._getTraceInfoFromScope(n)
      u && (c.contexts = { trace: u })
      const E = SN.createCheckInEnvelope(c, _, this.getSdkMetadata(), a, this.getDsn())
      return (
        AN.DEBUG_BUILD && RN.logger.info('Sending checkin:', e.monitorSlug, e.status),
        this.sendEnvelope(E),
        r
      )
    }
    _captureRequestSession() {
      this._sessionFlusher
        ? this._sessionFlusher.incrementSessionStatusCount()
        : AN.DEBUG_BUILD &&
          RN.logger.warn(
            'Discarded request mode session because autoSessionTracking option was disabled',
          )
    }
    _prepareEvent(e, t, n, r) {
      return (
        this._options.platform && (e.platform = e.platform || this._options.platform),
        this._options.runtime &&
          (e.contexts = {
            ...e.contexts,
            runtime: (e.contexts || {}).runtime || this._options.runtime,
          }),
        this._options.serverName && (e.server_name = e.server_name || this._options.serverName),
        super._prepareEvent(e, t, n, r)
      )
    }
    _getTraceInfoFromScope(e) {
      if (!e) return [void 0, void 0]
      const t = gN._getSpanForScope(e),
        n = t ? ON.spanToTraceContext(t) : fN.getTraceContextFromScope(e)
      return [
        t
          ? yN.getDynamicSamplingContextFromSpan(t)
          : yN.getDynamicSamplingContextFromScope(this, e),
        n,
      ]
    }
  }
  tN.ServerRuntimeClient = CN
  var LN = {}
  Object.defineProperty(LN, '__esModule', { value: !0 })
  const bN = eR,
    MN = GA,
    PN = QA
  function UN(e) {
    bN.getCurrentScope().setClient(e)
  }
  ;(LN.initAndBind = function (e, t) {
    !0 === t.debug &&
      (MN.DEBUG_BUILD
        ? PN.logger.enable()
        : PN.consoleSandbox(() => {
            console.warn(
              '[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.',
            )
          })),
      bN.getCurrentScope().update(t.initialScope)
    const n = new e(t)
    return UN(n), n.init(), n
  }),
    (LN.setCurrentClient = UN)
  var DN = {},
    wN = {}
  Object.defineProperty(wN, '__esModule', { value: !0 })
  const xN = PI,
    VN = dm
  wN.makePromiseBuffer = function (e) {
    const t = []
    function n(e) {
      return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0)
    }
    return {
      $: t,
      add: function (r) {
        if (!(void 0 === e || t.length < e))
          return VN.rejectedSyncPromise(
            new xN.SentryError('Not adding Promise because buffer limit was reached.'),
          )
        const o = r()
        return (
          -1 === t.indexOf(o) && t.push(o),
          o.then(() => n(o)).then(null, () => n(o).then(null, () => {})),
          o
        )
      },
      drain: function (e) {
        return new VN.SyncPromise((n, r) => {
          let o = t.length
          if (!o) return n(!0)
          const i = setTimeout(() => {
            e && e > 0 && n(!1)
          }, e)
          t.forEach((e) => {
            VN.resolvedSyncPromise(e).then(() => {
              --o || (clearTimeout(i), n(!0))
            }, r)
          })
        })
      },
    }
  }
  var GN = {}
  Object.defineProperty(GN, '__esModule', { value: !0 })
  function BN(e, t = Date.now()) {
    const n = parseInt(`${e}`, 10)
    if (!isNaN(n)) return 1e3 * n
    const r = Date.parse(`${e}`)
    return isNaN(r) ? 6e4 : r - t
  }
  function kN(e, t) {
    return e[t] || e.all || 0
  }
  ;(GN.DEFAULT_RETRY_AFTER = 6e4),
    (GN.disabledUntil = kN),
    (GN.isRateLimited = function (e, t, n = Date.now()) {
      return kN(e, t) > n
    }),
    (GN.parseRetryAfterHeader = BN),
    (GN.updateRateLimits = function (e, { statusCode: t, headers: n }, r = Date.now()) {
      const o = { ...e },
        i = n && n['x-sentry-rate-limits'],
        s = n && n['retry-after']
      if (i)
        for (const e of i.trim().split(',')) {
          const [t, n, , , i] = e.split(':', 5),
            s = parseInt(t, 10),
            a = 1e3 * (isNaN(s) ? 60 : s)
          if (n)
            for (const e of n.split(';'))
              ('metric_bucket' === e && i && !i.split(';').includes('custom')) || (o[e] = r + a)
          else o.all = r + a
        }
      else s ? (o.all = r + BN(s, r)) : 429 === t && (o.all = r + 6e4)
      return o
    }),
    Object.defineProperty(DN, '__esModule', { value: !0 })
  const FN = GA,
    HN = $g,
    YN = PI,
    jN = QA,
    KN = wN,
    WN = GN,
    qN = dm
  function QN(e, t) {
    if ('event' === t || 'transaction' === t) return Array.isArray(e) ? e[1] : void 0
  }
  ;(DN.DEFAULT_TRANSPORT_BUFFER_SIZE = 64),
    (DN.createTransport = function (e, t, n = KN.makePromiseBuffer(e.bufferSize || 64)) {
      let r = {}
      return {
        send: function (o) {
          const i = []
          if (
            (HN.forEachEnvelopeItem(o, (t, n) => {
              const o = HN.envelopeItemTypeToDataCategory(n)
              if (WN.isRateLimited(r, o)) {
                const r = QN(t, n)
                e.recordDroppedEvent('ratelimit_backoff', o, r)
              } else i.push(t)
            }),
            0 === i.length)
          )
            return qN.resolvedSyncPromise({})
          const s = HN.createEnvelope(o[0], i),
            a = (t) => {
              HN.forEachEnvelopeItem(s, (n, r) => {
                const o = QN(n, r)
                e.recordDroppedEvent(t, HN.envelopeItemTypeToDataCategory(r), o)
              })
            }
          return n
            .add(() =>
              t({ body: HN.serializeEnvelope(s) }).then(
                (e) => (
                  void 0 !== e.statusCode &&
                    (e.statusCode < 200 || e.statusCode >= 300) &&
                    FN.DEBUG_BUILD &&
                    jN.logger.warn(
                      `Sentry responded with status code ${e.statusCode} to sent event.`,
                    ),
                  (r = WN.updateRateLimits(r, e)),
                  e
                ),
                (e) => {
                  throw (a('network_error'), e)
                },
              ),
            )
            .then(
              (e) => e,
              (e) => {
                if (e instanceof YN.SentryError)
                  return (
                    FN.DEBUG_BUILD &&
                      jN.logger.error('Skipped sending event because buffer is full.'),
                    a('queue_overflow'),
                    qN.resolvedSyncPromise({})
                  )
                throw e
              },
            )
        },
        flush: (e) => n.drain(e),
      }
    })
  var zN = {}
  Object.defineProperty(zN, '__esModule', { value: !0 })
  const $N = GA,
    XN = $g,
    JN = QA,
    ZN = GN,
    ey = 100,
    ty = 5e3
  ;(zN.MIN_DELAY = ey),
    (zN.START_DELAY = ty),
    (zN.makeOfflineTransport = function (e) {
      function t(...e) {
        $N.DEBUG_BUILD && JN.logger.info('[Offline]:', ...e)
      }
      return (n) => {
        const r = e(n)
        if (!n.createStore) throw new Error('No `createStore` function was provided')
        const o = n.createStore(n)
        let i,
          s = ty
        function a(e) {
          i && clearTimeout(i),
            (i = setTimeout(async () => {
              i = void 0
              const e = await o.shift()
              e &&
                (t('Attempting to send previously queued event'),
                (e[0].sent_at = new Date().toISOString()),
                _(e, !0).catch((e) => {
                  t('Failed to retry sending', e)
                }))
            }, e)),
            'number' != typeof i && i.unref && i.unref()
        }
        function c() {
          i || (a(s), (s = Math.min(2 * s, 36e5)))
        }
        async function _(e, i = !1) {
          if (!i && XN.envelopeContainsItemType(e, ['replay_event', 'replay_recording']))
            return await o.push(e), a(ey), {}
          try {
            const t = await r.send(e)
            let n = ey
            if (t)
              if (t.headers && t.headers['retry-after'])
                n = ZN.parseRetryAfterHeader(t.headers['retry-after'])
              else if (t.headers && t.headers['x-sentry-rate-limits']) n = 6e4
              else if ((t.statusCode || 0) >= 400) return t
            return a(n), (s = ty), t
          } catch (r) {
            if (
              await (function (e, t, r) {
                return (
                  !XN.envelopeContainsItemType(e, ['client_report']) &&
                  (!n.shouldStore || n.shouldStore(e, t, r))
                )
              })(e, r, s)
            )
              return (
                i ? await o.unshift(e) : await o.push(e),
                c(),
                t('Error sending. Event queued.', r),
                {}
              )
            throw r
          }
        }
        return (
          n.flushAtStartup && c(),
          { send: _, flush: (e) => (void 0 === e && ((s = ty), a(ey)), r.flush(e)) }
        )
      }
    })
  var ny = {}
  Object.defineProperty(ny, '__esModule', { value: !0 })
  const ry = hI,
    oy = jg,
    iy = $g
  function sy(e, t) {
    let n
    return (
      iy.forEachEnvelopeItem(
        e,
        (e, r) => (t.includes(r) && (n = Array.isArray(e) ? e[1] : void 0), !!n),
      ),
      n
    )
  }
  ;(ny.eventFromEnvelope = sy),
    (ny.makeMultiplexedTransport = function (e, t) {
      return (n) => {
        const r = e(n),
          o = new Map()
        function i(t, r) {
          const i = r ? `${t}:${r}` : t
          let s = o.get(i)
          if (!s) {
            const a = oy.dsnFromString(t)
            if (!a) return
            const c = ry.getEnvelopeEndpointWithUrlEncodedAuth(a, n.tunnel)
            ;(s = r
              ? (function (e, t) {
                  return (n) => {
                    const r = e(n)
                    return {
                      ...r,
                      send: async (e) => {
                        const n = sy(e, ['event', 'transaction', 'profile', 'replay_event'])
                        return n && (n.release = t), r.send(e)
                      },
                    }
                  }
                })(
                  e,
                  r,
                )({ ...n, url: c })
              : e({ ...n, url: c })),
              o.set(i, s)
          }
          return [t, s]
        }
        return {
          send: async function (e) {
            const n = t({
                envelope: e,
                getEvent: function (t) {
                  const n = t && t.length ? t : ['event']
                  return sy(e, n)
                },
              })
                .map((e) => ('string' == typeof e ? i(e, void 0) : i(e.dsn, e.release)))
                .filter((e) => !!e),
              o = n.length ? n : [['', r]],
              s = await Promise.all(
                o.map(([t, n]) =>
                  n.send(
                    (function (e, t) {
                      return iy.createEnvelope(t ? { ...e[0], dsn: t } : e[0], e[1])
                    })(e, t),
                  ),
                ),
              )
            return s[0]
          },
          flush: async function (e) {
            const t = [...o.values(), r]
            return (await Promise.all(t.map((t) => t.flush(e)))).every((e) => e)
          },
        }
      }
    })
  var ay = {}
  function cy(e) {
    return '/' === e[e.length - 1] ? e.slice(0, -1) : e
  }
  Object.defineProperty(ay, '__esModule', { value: !0 }),
    (ay.isSentryRequestUrl = function (e, t) {
      const n = t && t.getDsn(),
        r = t && t.getOptions().tunnel
      return (
        (function (e, t) {
          return !!t && e.includes(t.host)
        })(e, n) ||
        (function (e, t) {
          if (!t) return !1
          return cy(e) === cy(t)
        })(e, r)
      )
    })
  var _y = {}
  Object.defineProperty(_y, '__esModule', { value: !0 }),
    (_y.parameterize = function (e, ...t) {
      const n = new String(String.raw(e, ...t))
      return (
        (n.__sentry_template_string__ = e.join('\0').replace(/%/g, '%%').replace(/\0/g, '%s')),
        (n.__sentry_template_values__ = t),
        n
      )
    })
  var uy = {}
  Object.defineProperty(uy, '__esModule', { value: !0 })
  const Ey = HA
  uy.applySdkMetadata = function (e, t, n = [t], r = 'npm') {
    const o = e._metadata || {}
    o.sdk ||
      (o.sdk = {
        name: `sentry.javascript.${t}`,
        packages: n.map((e) => ({ name: `${r}:@sentry/${e}`, version: Ey.SDK_VERSION })),
        version: Ey.SDK_VERSION,
      }),
      (e._metadata = o)
  }
  var ly = {}
  Object.defineProperty(ly, '__esModule', { value: !0 })
  const Ty = Oh,
    py = vh,
    dy = eR,
    Sy = Ov,
    fy = QA,
    Ay = gh,
    hy = TR,
    my = fg,
    Ry = pR
  ly.getTraceData = function (e = {}) {
    const t = dy.getClient()
    if (!Sy.isEnabled() || !t) return {}
    const n = py.getMainCarrier(),
      r = Ty.getAsyncContextStrategy(n)
    if (r.getTraceData) return r.getTraceData(e)
    const o = dy.getCurrentScope(),
      i = e.span || Ay.getActiveSpan(),
      s = i
        ? Ay.spanToTraceHeader(i)
        : (function (e) {
            const { traceId: t, sampled: n, spanId: r } = e.getPropagationContext()
            return hy.generateSentryTraceHeader(t, r, n)
          })(o),
      a = i ? my.getDynamicSamplingContextFromSpan(i) : my.getDynamicSamplingContextFromScope(t, o),
      c = Ry.dynamicSamplingContextToSentryBaggageHeader(a)
    return hy.TRACEPARENT_REGEXP.test(s)
      ? { 'sentry-trace': s, baggage: c }
      : (fy.logger.warn('Invalid sentry-trace data. Cannot generate trace data'), {})
  }
  var gy = {}
  Object.defineProperty(gy, '__esModule', { value: !0 })
  const Oy = ly
  gy.getTraceMetaTags = function () {
    return Object.entries(Oy.getTraceData())
      .map(([e, t]) => `<meta name="${e}" content="${t}"/>`)
      .join('\n')
  }
  var vy = {}
  Object.defineProperty(vy, '__esModule', { value: !0 })
  const Iy = eR,
    Ny = QA,
    yy = rm,
    Cy = 100
  vy.addBreadcrumb = function (e, t) {
    const n = Iy.getClient(),
      r = Iy.getIsolationScope()
    if (!n) return
    const { beforeBreadcrumb: o = null, maxBreadcrumbs: i = Cy } = n.getOptions()
    if (i <= 0) return
    const s = { timestamp: yy.dateTimestampInSeconds(), ...e },
      a = o ? Ny.consoleSandbox(() => o(s, t)) : s
    null !== a && (n.emit && n.emit('beforeAddBreadcrumb', a, t), r.addBreadcrumb(a, i))
  }
  var Ly = {}
  Object.defineProperty(Ly, '__esModule', { value: !0 })
  const by = eR,
    My = OI,
    Py = Ph
  let Uy
  const Dy = new WeakMap(),
    wy = My.defineIntegration(() => ({
      name: 'FunctionToString',
      setupOnce() {
        Uy = Function.prototype.toString
        try {
          Function.prototype.toString = function (...e) {
            const t = Py.getOriginalFunction(this),
              n = Dy.has(by.getClient()) && void 0 !== t ? t : this
            return Uy.apply(n, e)
          }
        } catch (e) {}
      },
      setup(e) {
        Dy.set(e, !0)
      },
    }))
  Ly.functionToStringIntegration = wy
  var xy = {}
  Object.defineProperty(xy, '__esModule', { value: !0 })
  const Vy = GA,
    Gy = QA,
    By = cm,
    ky = Yh,
    Fy = [
      /^Script error\.?$/,
      /^Javascript error: Script error\.? on line 0$/,
      /^ResizeObserver loop completed with undelivered notifications.$/,
      /^Cannot redefine property: googletag$/,
      "undefined is not an object (evaluating 'a.L')",
      'can\'t redefine non-configurable property "solana"',
      "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
      "Can't find variable: _AutofillCallbackHandler",
      /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
    ],
    Hy = OI.defineIntegration((e = {}) => ({
      name: 'InboundFilters',
      processEvent(t, n, r) {
        const o = r.getOptions(),
          i = (function (e = {}, t = {}) {
            return {
              allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
              denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
              ignoreErrors: [
                ...(e.ignoreErrors || []),
                ...(t.ignoreErrors || []),
                ...(e.disableErrorDefaults ? [] : Fy),
              ],
              ignoreTransactions: [
                ...(e.ignoreTransactions || []),
                ...(t.ignoreTransactions || []),
              ],
              ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal,
            }
          })(e, o)
        return (function (e, t) {
          if (
            t.ignoreInternal &&
            (function (e) {
              try {
                return 'SentryError' === e.exception.values[0].type
              } catch (e) {}
              return !1
            })(e)
          )
            return (
              Vy.DEBUG_BUILD &&
                Gy.logger.warn(
                  `Event dropped due to being internal Sentry Error.\nEvent: ${By.getEventDescription(e)}`,
                ),
              !0
            )
          if (
            (function (e, t) {
              if (e.type || !t || !t.length) return !1
              return (function (e) {
                const t = []
                e.message && t.push(e.message)
                let n
                try {
                  n = e.exception.values[e.exception.values.length - 1]
                } catch (e) {}
                n && n.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`))
                return t
              })(e).some((e) => ky.stringMatchesSomePattern(e, t))
            })(e, t.ignoreErrors)
          )
            return (
              Vy.DEBUG_BUILD &&
                Gy.logger.warn(
                  `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${By.getEventDescription(e)}`,
                ),
              !0
            )
          if (
            (function (e) {
              if (e.type) return !1
              if (!e.exception || !e.exception.values || 0 === e.exception.values.length) return !1
              return (
                !e.message &&
                !e.exception.values.some(
                  (e) => e.stacktrace || (e.type && 'Error' !== e.type) || e.value,
                )
              )
            })(e)
          )
            return (
              Vy.DEBUG_BUILD &&
                Gy.logger.warn(
                  `Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${By.getEventDescription(e)}`,
                ),
              !0
            )
          if (
            (function (e, t) {
              if ('transaction' !== e.type || !t || !t.length) return !1
              const n = e.transaction
              return !!n && ky.stringMatchesSomePattern(n, t)
            })(e, t.ignoreTransactions)
          )
            return (
              Vy.DEBUG_BUILD &&
                Gy.logger.warn(
                  `Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${By.getEventDescription(e)}`,
                ),
              !0
            )
          if (
            (function (e, t) {
              if (!t || !t.length) return !1
              const n = Yy(e)
              return !!n && ky.stringMatchesSomePattern(n, t)
            })(e, t.denyUrls)
          )
            return (
              Vy.DEBUG_BUILD &&
                Gy.logger.warn(
                  `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${By.getEventDescription(e)}.\nUrl: ${Yy(e)}`,
                ),
              !0
            )
          if (
            !(function (e, t) {
              if (!t || !t.length) return !0
              const n = Yy(e)
              return !n || ky.stringMatchesSomePattern(n, t)
            })(e, t.allowUrls)
          )
            return (
              Vy.DEBUG_BUILD &&
                Gy.logger.warn(
                  `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${By.getEventDescription(e)}.\nUrl: ${Yy(e)}`,
                ),
              !0
            )
          return !1
        })(t, i)
          ? null
          : t
      },
    }))
  function Yy(e) {
    try {
      let t
      try {
        t = e.exception.values[0].stacktrace.frames
      } catch (e) {}
      return t
        ? (function (e = []) {
            for (let t = e.length - 1; t >= 0; t--) {
              const n = e[t]
              if (n && '<anonymous>' !== n.filename && '[native code]' !== n.filename)
                return n.filename || null
            }
            return null
          })(t)
        : null
    } catch (t) {
      return (
        Vy.DEBUG_BUILD &&
          Gy.logger.error(`Cannot extract url for event ${By.getEventDescription(e)}`),
        null
      )
    }
  }
  xy.inboundFiltersIntegration = Hy
  var jy = {},
    Ky = {}
  Object.defineProperty(Ky, '__esModule', { value: !0 })
  const Wy = Dh,
    qy = Yh
  function Qy(e, t, n, r, o, i, s, a) {
    if (i.length >= n + 1) return i
    let c = [...i]
    if (Wy.isInstanceOf(r[o], Error)) {
      zy(s, a)
      const i = e(t, r[o]),
        _ = c.length
      $y(i, o, _, a), (c = Qy(e, t, n, r[o], o, [i, ...c], i, _))
    }
    return (
      Array.isArray(r.errors) &&
        r.errors.forEach((r, i) => {
          if (Wy.isInstanceOf(r, Error)) {
            zy(s, a)
            const _ = e(t, r),
              u = c.length
            $y(_, `errors[${i}]`, u, a), (c = Qy(e, t, n, r, o, [_, ...c], _, u))
          }
        }),
      c
    )
  }
  function zy(e, t) {
    ;(e.mechanism = e.mechanism || { type: 'generic', handled: !0 }),
      (e.mechanism = {
        ...e.mechanism,
        ...('AggregateError' === e.type && { is_exception_group: !0 }),
        exception_id: t,
      })
  }
  function $y(e, t, n, r) {
    ;(e.mechanism = e.mechanism || { type: 'generic', handled: !0 }),
      (e.mechanism = { ...e.mechanism, type: 'chained', source: t, exception_id: n, parent_id: r })
  }
  ;(Ky.applyAggregateErrorsToEvent = function (e, t, n = 250, r, o, i, s) {
    if (!(i.exception && i.exception.values && s && Wy.isInstanceOf(s.originalException, Error)))
      return
    const a =
      i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0
    var c, _
    a &&
      (i.exception.values =
        ((c = Qy(e, t, o, s.originalException, r, i.exception.values, a, 0)),
        (_ = n),
        c.map((e) => (e.value && (e.value = qy.truncate(e.value, _)), e))))
  }),
    Object.defineProperty(jy, '__esModule', { value: !0 })
  const Xy = Ky,
    Jy = sN,
    Zy = OI.defineIntegration((e = {}) => {
      const t = e.limit || 5,
        n = e.key || 'cause'
      return {
        name: 'LinkedErrors',
        preprocessEvent(e, r, o) {
          const i = o.getOptions()
          Xy.applyAggregateErrorsToEvent(
            Jy.exceptionFromError,
            i.stackParser,
            i.maxValueLength,
            n,
            t,
            e,
            r,
          )
        },
      }
    })
  jy.linkedErrorsIntegration = Zy
  var eC = {},
    tC = {}
  Object.defineProperty(tC, '__esModule', { value: !0 })
  const nC = FA,
    rC = new Map(),
    oC = new Set()
  function iC(e, t) {
    return (
      (function (e) {
        if (nC.GLOBAL_OBJ._sentryModuleMetadata)
          for (const t of Object.keys(nC.GLOBAL_OBJ._sentryModuleMetadata)) {
            const n = nC.GLOBAL_OBJ._sentryModuleMetadata[t]
            if (oC.has(t)) continue
            oC.add(t)
            const r = e(t)
            for (const e of r.reverse())
              if (e.filename) {
                rC.set(e.filename, n)
                break
              }
          }
      })(e),
      rC.get(t)
    )
  }
  ;(tC.addMetadataToStackFrames = function (e, t) {
    try {
      t.exception.values.forEach((t) => {
        if (t.stacktrace)
          for (const n of t.stacktrace.frames || []) {
            if (!n.filename || n.module_metadata) continue
            const t = iC(e, n.filename)
            t && (n.module_metadata = t)
          }
      })
    } catch (e) {}
  }),
    (tC.getMetadataForUrl = iC),
    (tC.stripMetadataFromStackFrames = function (e) {
      try {
        e.exception.values.forEach((e) => {
          if (e.stacktrace) for (const t of e.stacktrace.frames || []) delete t.module_metadata
        })
      } catch (e) {}
    }),
    Object.defineProperty(eC, '__esModule', { value: !0 })
  const sC = tC,
    aC = $g,
    cC = OI.defineIntegration(() => ({
      name: 'ModuleMetadata',
      setup(e) {
        e.on('beforeEnvelope', (e) => {
          aC.forEachEnvelopeItem(e, (e, t) => {
            if ('event' === t) {
              const t = Array.isArray(e) ? e[1] : void 0
              t && (sC.stripMetadataFromStackFrames(t), (e[1] = t))
            }
          })
        }),
          e.on('applyFrameMetadata', (t) => {
            if (t.type) return
            const n = e.getOptions().stackParser
            sC.addMetadataToStackFrames(n, t)
          })
      },
    }))
  eC.moduleMetadataIntegration = cC
  var _C = {},
    uC = {},
    EC = {}
  Object.defineProperty(EC, '__esModule', { value: !0 }),
    (EC.parseCookie = function (e) {
      const t = {}
      let n = 0
      for (; n < e.length; ) {
        const r = e.indexOf('=', n)
        if (-1 === r) break
        let o = e.indexOf(';', n)
        if (-1 === o) o = e.length
        else if (o < r) {
          n = e.lastIndexOf(';', r - 1) + 1
          continue
        }
        const i = e.slice(n, r).trim()
        if (void 0 === t[i]) {
          let n = e.slice(r + 1, o).trim()
          34 === n.charCodeAt(0) && (n = n.slice(1, -1))
          try {
            t[i] = -1 !== n.indexOf('%') ? decodeURIComponent(n) : n
          } catch (e) {
            t[i] = n
          }
        }
        n = o + 1
      }
      return t
    })
  var lC = {}
  Object.defineProperty(lC, '__esModule', { value: !0 }),
    (lC.getNumberOfUrlSegments = function (e) {
      return e.split(/\\?\//).filter((e) => e.length > 0 && ',' !== e).length
    }),
    (lC.getSanitizedUrlString = function (e) {
      const { protocol: t, host: n, path: r } = e
      return `${t ? `${t}://` : ''}${
        (n &&
          n
            .replace(/^.*@/, '[filtered]:[filtered]@')
            .replace(/(:80)$/, '')
            .replace(/(:443)$/, '')) ||
        ''
      }${r}`
    }),
    (lC.parseUrl = function (e) {
      if (!e) return {}
      const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
      if (!t) return {}
      const n = t[6] || '',
        r = t[8] || ''
      return { host: t[4], path: t[5], protocol: t[2], search: n, hash: r, relative: t[5] + n + r }
    }),
    (lC.stripUrlQueryAndFragment = function (e) {
      return e.split(/[?#]/, 1)[0]
    })
  var TC = {}
  Object.defineProperty(TC, '__esModule', { value: !0 })
  const pC = [
    'X-Client-IP',
    'X-Forwarded-For',
    'Fly-Client-IP',
    'CF-Connecting-IP',
    'Fastly-Client-Ip',
    'True-Client-Ip',
    'X-Real-IP',
    'X-Cluster-Client-IP',
    'X-Forwarded',
    'Forwarded-For',
    'Forwarded',
    'X-Vercel-Forwarded-For',
  ]
  ;(TC.getClientIPAddress = function (e) {
    const t = pC.map((t) => {
      const n = e[t],
        r = Array.isArray(n) ? n.join(';') : n
      return 'Forwarded' === t
        ? (function (e) {
            if (!e) return null
            for (const t of e.split(';')) if (t.startsWith('for=')) return t.slice(4)
            return null
          })(r)
        : r && r.split(',').map((e) => e.trim())
    })
    return (
      t
        .reduce((e, t) => (t ? e.concat(t) : e), [])
        .find(
          (e) =>
            null !== e &&
            /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/.test(
              e,
            ),
        ) || null
    )
  }),
    (TC.ipHeaderNames = pC),
    Object.defineProperty(uC, '__esModule', { value: !0 })
  const dC = EC,
    SC = WA,
    fC = Dh,
    AC = QA,
    hC = Xg,
    mC = Ph,
    RC = Yh,
    gC = lC,
    OC = TC,
    vC = { ip: !1, request: !0, user: !0 },
    IC = ['cookies', 'data', 'headers', 'method', 'query_string', 'url'],
    NC = ['id', 'username', 'email']
  function yC(e, t) {
    const n = {}
    return (
      (Array.isArray(t) ? t : NC).forEach((t) => {
        e && t in e && (n[t] = e[t])
      }),
      n
    )
  }
  function CC(e, t = {}) {
    const { include: n = IC } = t,
      r = {},
      o = e.headers || {},
      i = e.method,
      s = o.host || e.hostname || e.host || '<no host>',
      a = 'https' === e.protocol || (e.socket && e.socket.encrypted) ? 'https' : 'http',
      c = e.originalUrl || e.url || '',
      _ = c.startsWith(a) ? c : `${a}://${s}${c}`
    return (
      n.forEach((t) => {
        switch (t) {
          case 'headers':
            ;(r.headers = o),
              n.includes('cookies') || delete r.headers.cookie,
              n.includes('ip') ||
                OC.ipHeaderNames.forEach((e) => {
                  delete r.headers[e]
                })
            break
          case 'method':
            r.method = i
            break
          case 'url':
            r.url = _
            break
          case 'cookies':
            r.cookies = e.cookies || (o.cookie && dC.parseCookie(o.cookie)) || {}
            break
          case 'query_string':
            r.query_string = (function (e) {
              let t = e.originalUrl || e.url || ''
              if (!t) return
              t.startsWith('/') && (t = `http://dogs.are.great${t}`)
              try {
                const n = e.query || new URL(t).search.slice(1)
                return n.length ? n : void 0
              } catch (e) {
                return
              }
            })(e)
            break
          case 'data': {
            if ('GET' === i || 'HEAD' === i) break
            const t = e.body
            if (void 0 !== t) {
              const e = fC.isString(t)
                ? t
                : fC.isPlainObject(t)
                  ? JSON.stringify(hC.normalize(t))
                  : RC.truncate(`${t}`, 1024)
              e && (r.data = e)
            }
            break
          }
          default:
            ;({}).hasOwnProperty.call(e, t) && (r[t] = e[t])
        }
      }),
      r
    )
  }
  function LC(e) {
    const t = {}
    try {
      e.forEach((e, n) => {
        'string' == typeof e && (t[n] = e)
      })
    } catch (e) {
      SC.DEBUG_BUILD &&
        AC.logger.warn(
          'Sentry failed extracting headers from a request object. If you see this, please file an issue.',
        )
    }
    return t
  }
  function bC(e) {
    const t = Object.create(null)
    try {
      Object.entries(e).forEach(([e, n]) => {
        'string' == typeof n && (t[e] = n)
      })
    } catch (e) {
      SC.DEBUG_BUILD &&
        AC.logger.warn(
          'Sentry failed extracting headers from a request object. If you see this, please file an issue.',
        )
    }
    return t
  }
  function MC(e) {
    if (e)
      try {
        const t = new URL(e, 'http://dogs.are.great').search.slice(1)
        return t.length ? t : void 0
      } catch (e) {
        return
      }
  }
  ;(uC.DEFAULT_USER_INCLUDES = NC),
    (uC.addNormalizedRequestDataToEvent = function (e, t, n, r) {
      const o = { ...vC, ...(r && r.include) }
      if (o.request) {
        const n = Array.isArray(o.request) ? [...o.request] : [...IC]
        o.ip && n.push('ip')
        const r = (function (e, { include: t }) {
          const n = t ? (Array.isArray(t) ? t : IC) : [],
            r = {},
            o = { ...e.headers }
          n.includes('headers') &&
            ((r.headers = o),
            t.includes('cookies') || delete o.cookie,
            t.includes('ip') ||
              OC.ipHeaderNames.forEach((e) => {
                delete o[e]
              }))
          n.includes('method') && (r.method = e.method)
          n.includes('url') && (r.url = e.url)
          if (n.includes('cookies')) {
            const t = e.cookies || (o && o.cookie ? dC.parseCookie(o.cookie) : void 0)
            r.cookies = t || {}
          }
          n.includes('query_string') && (r.query_string = e.query_string)
          n.includes('data') && (r.data = e.data)
          return r
        })(t, { include: n })
        e.request = { ...e.request, ...r }
      }
      if (o.user) {
        const t = n.user && fC.isPlainObject(n.user) ? yC(n.user, o.user) : {}
        Object.keys(t).length && (e.user = { ...t, ...e.user })
      }
      if (o.ip) {
        const r = (t.headers && OC.getClientIPAddress(t.headers)) || n.ipAddress
        r && (e.user = { ...e.user, ip_address: r })
      }
    }),
    (uC.addRequestDataToEvent = function (e, t, n) {
      const r = { ...vC, ...(n && n.include) }
      if (r.request) {
        const n = Array.isArray(r.request) ? [...r.request] : [...IC]
        r.ip && n.push('ip')
        const o = CC(t, { include: n })
        e.request = { ...e.request, ...o }
      }
      if (r.user) {
        const n = t.user && fC.isPlainObject(t.user) ? yC(t.user, r.user) : {}
        Object.keys(n).length && (e.user = { ...e.user, ...n })
      }
      if (r.ip) {
        const n =
          (t.headers && OC.getClientIPAddress(t.headers)) ||
          t.ip ||
          (t.socket && t.socket.remoteAddress)
        n && (e.user = { ...e.user, ip_address: n })
      }
      return e
    }),
    (uC.extractPathForTransaction = function (e, t = {}) {
      const n = e.method && e.method.toUpperCase()
      let r = '',
        o = 'url'
      t.customRoute || e.route
        ? ((r = t.customRoute || `${e.baseUrl || ''}${e.route && e.route.path}`), (o = 'route'))
        : (e.originalUrl || e.url) &&
          (r = gC.stripUrlQueryAndFragment(e.originalUrl || e.url || ''))
      let i = ''
      return (
        t.method && n && (i += n), t.method && t.path && (i += ' '), t.path && r && (i += r), [i, o]
      )
    }),
    (uC.extractQueryParamsFromUrl = MC),
    (uC.extractRequestData = CC),
    (uC.headersToDict = bC),
    (uC.httpRequestToRequestData = function (e) {
      const t = e.headers || {},
        n = t.host || '<no host>',
        r = e.socket && e.socket.encrypted ? 'https' : 'http',
        o = e.url || '',
        i = o.startsWith(r) ? o : `${r}://${n}${o}`,
        s = e.body || void 0,
        a = e.cookies
      return mC.dropUndefinedKeys({
        url: i,
        method: e.method,
        query_string: MC(o),
        headers: bC(t),
        cookies: a,
        data: s,
      })
    }),
    (uC.winterCGHeadersToDict = LC),
    (uC.winterCGRequestToRequestData = function (e) {
      const t = LC(e.headers)
      return { method: e.method, url: e.url, query_string: MC(e.url), headers: t }
    }),
    Object.defineProperty(_C, '__esModule', { value: !0 })
  const PC = uC,
    UC = {
      include: {
        cookies: !0,
        data: !0,
        headers: !0,
        ip: !1,
        query_string: !0,
        url: !0,
        user: { id: !0, username: !0, email: !0 },
      },
      transactionNamingScheme: 'methodPath',
    },
    DC = OI.defineIntegration((e = {}) => {
      const t = {
        ...UC,
        ...e,
        include: {
          ...UC.include,
          ...e.include,
          user:
            e.include && 'boolean' == typeof e.include.user
              ? e.include.user
              : { ...UC.include.user, ...(e.include || {}).user },
        },
      }
      return {
        name: 'RequestData',
        processEvent(e) {
          const { sdkProcessingMetadata: n = {} } = e,
            { request: r, normalizedRequest: o } = n,
            i = (function (e) {
              const {
                  transactionNamingScheme: t,
                  include: { ip: n, user: r, ...o },
                } = e,
                i = ['method']
              for (const [e, t] of Object.entries(o)) t && i.push(e)
              let s
              if (void 0 === r) s = !0
              else if ('boolean' == typeof r) s = r
              else {
                const e = []
                for (const [t, n] of Object.entries(r)) n && e.push(t)
                s = e
              }
              return {
                include: { ip: n, user: s, request: 0 !== i.length ? i : void 0, transaction: t },
              }
            })(t)
          if (o) {
            const t = r ? r.ip || (r.socket && r.socket.remoteAddress) : void 0,
              n = r ? r.user : void 0
            return PC.addNormalizedRequestDataToEvent(e, o, { ipAddress: t, user: n }, i), e
          }
          return r ? PC.addRequestDataToEvent(e, r, i) : e
        },
      }
    })
  _C.requestDataIntegration = DC
  var wC = {},
    xC = {}
  Object.defineProperty(xC, '__esModule', { value: !0 })
  const VC = QA,
    GC = Ph,
    BC = FA,
    kC = KA
  function FC() {
    'console' in BC.GLOBAL_OBJ &&
      VC.CONSOLE_LEVELS.forEach(function (e) {
        e in BC.GLOBAL_OBJ.console &&
          GC.fill(BC.GLOBAL_OBJ.console, e, function (t) {
            return (
              (VC.originalConsoleMethods[e] = t),
              function (...t) {
                const n = { args: t, level: e }
                kC.triggerHandlers('console', n)
                const r = VC.originalConsoleMethods[e]
                r && r.apply(BC.GLOBAL_OBJ.console, t)
              }
            )
          })
      })
  }
  xC.addConsoleInstrumentationHandler = function (e) {
    const t = 'console'
    kC.addHandler(t, e), kC.maybeInstrument(t, FC)
  }
  var HC = {}
  Object.defineProperty(HC, '__esModule', { value: !0 })
  ;(HC.severityLevelFromString = function (e) {
    return 'warn' === e
      ? 'warning'
      : ['fatal', 'error', 'warning', 'log', 'info', 'debug'].includes(e)
        ? e
        : 'log'
  }),
    (HC.validSeverityLevels = ['fatal', 'error', 'warning', 'log', 'info', 'debug']),
    Object.defineProperty(wC, '__esModule', { value: !0 })
  const YC = eR,
    jC = Ov,
    KC = xC,
    WC = QA,
    qC = cm,
    QC = HC,
    zC = Yh,
    $C = FA,
    XC = OI.defineIntegration((e = {}) => {
      const t = e.levels || WC.CONSOLE_LEVELS,
        n = !!e.handled
      return {
        name: 'CaptureConsole',
        setup(e) {
          'console' in $C.GLOBAL_OBJ &&
            KC.addConsoleInstrumentationHandler(({ args: r, level: o }) => {
              YC.getClient() === e &&
                t.includes(o) &&
                (function (e, t, n) {
                  const r = { level: QC.severityLevelFromString(t), extra: { arguments: e } }
                  YC.withScope((o) => {
                    if (
                      (o.addEventProcessor(
                        (e) => (
                          (e.logger = 'console'),
                          qC.addExceptionMechanism(e, { handled: n, type: 'console' }),
                          e
                        ),
                      ),
                      'assert' === t)
                    ) {
                      if (!e[0]) {
                        const t = `Assertion failed: ${zC.safeJoin(e.slice(1), ' ') || 'console.assert'}`
                        o.setExtra('arguments', e.slice(1)), jC.captureMessage(t, r)
                      }
                      return
                    }
                    const i = e.find((e) => e instanceof Error)
                    if (i) return void jC.captureException(i, r)
                    const s = zC.safeJoin(e, ' ')
                    jC.captureMessage(s, r)
                  })
                })(r, o, n)
            })
        },
      }
    })
  wC.captureConsoleIntegration = XC
  var JC = {}
  Object.defineProperty(JC, '__esModule', { value: !0 })
  const ZC = QA,
    eL = OI.defineIntegration((e = {}) => {
      const t = { debugger: !1, stringify: !1, ...e }
      return {
        name: 'Debug',
        setup(e) {
          e.on('beforeSendEvent', (e, n) => {
            t.debugger,
              ZC.consoleSandbox(() => {
                t.stringify
                  ? (console.log(JSON.stringify(e, null, 2)),
                    n && Object.keys(n).length && console.log(JSON.stringify(n, null, 2)))
                  : (console.log(e), n && Object.keys(n).length && console.log(n))
              })
          })
        },
      }
    })
  JC.debugIntegration = eL
  var tL = {}
  Object.defineProperty(tL, '__esModule', { value: !0 })
  const nL = GA,
    rL = QA,
    oL = th,
    iL = OI.defineIntegration(() => {
      let e
      return {
        name: 'Dedupe',
        processEvent(t) {
          if (t.type) return t
          try {
            if (sL(t, e))
              return (
                nL.DEBUG_BUILD &&
                  rL.logger.warn(
                    'Event dropped due to being a duplicate of previously captured event.',
                  ),
                null
              )
          } catch (e) {}
          return (e = t)
        },
      }
    })
  function sL(e, t) {
    return (
      !!t &&
      (!!(function (e, t) {
        const n = e.message,
          r = t.message
        if (!n && !r) return !1
        if ((n && !r) || (!n && r)) return !1
        if (n !== r) return !1
        if (!cL(e, t)) return !1
        if (!aL(e, t)) return !1
        return !0
      })(e, t) ||
        !!(function (e, t) {
          const n = _L(t),
            r = _L(e)
          if (!n || !r) return !1
          if (n.type !== r.type || n.value !== r.value) return !1
          if (!cL(e, t)) return !1
          if (!aL(e, t)) return !1
          return !0
        })(e, t))
    )
  }
  function aL(e, t) {
    let n = oL.getFramesFromEvent(e),
      r = oL.getFramesFromEvent(t)
    if (!n && !r) return !0
    if ((n && !r) || (!n && r)) return !1
    if (r.length !== n.length) return !1
    for (let e = 0; e < r.length; e++) {
      const t = r[e],
        o = n[e]
      if (
        t.filename !== o.filename ||
        t.lineno !== o.lineno ||
        t.colno !== o.colno ||
        t.function !== o.function
      )
        return !1
    }
    return !0
  }
  function cL(e, t) {
    let n = e.fingerprint,
      r = t.fingerprint
    if (!n && !r) return !0
    if ((n && !r) || (!n && r)) return !1
    try {
      return !(n.join('') !== r.join(''))
    } catch (e) {
      return !1
    }
  }
  function _L(e) {
    return e.exception && e.exception.values && e.exception.values[0]
  }
  ;(tL._shouldDropEvent = sL), (tL.dedupeIntegration = iL)
  var uL = {}
  Object.defineProperty(uL, '__esModule', { value: !0 })
  const EL = GA,
    lL = Dh,
    TL = QA,
    pL = Xg,
    dL = Ph,
    SL = Yh,
    fL = OI.defineIntegration((e = {}) => {
      const { depth: t = 3, captureErrorCause: n = !0 } = e
      return {
        name: 'ExtraErrorData',
        processEvent(e, r, o) {
          const { maxValueLength: i = 250 } = o.getOptions()
          return (function (e, t = {}, n, r, o) {
            if (!t.originalException || !lL.isError(t.originalException)) return e
            const i = t.originalException.name || t.originalException.constructor.name,
              s = (function (e, t, n) {
                try {
                  const r = [
                      'name',
                      'message',
                      'stack',
                      'line',
                      'column',
                      'fileName',
                      'lineNumber',
                      'columnNumber',
                      'toJSON',
                    ],
                    o = {}
                  for (const t of Object.keys(e)) {
                    if (-1 !== r.indexOf(t)) continue
                    const i = e[t]
                    o[t] = lL.isError(i) || 'string' == typeof i ? SL.truncate(`${i}`, n) : i
                  }
                  if (
                    (t &&
                      void 0 !== e.cause &&
                      (o.cause = lL.isError(e.cause) ? e.cause.toString() : e.cause),
                    'function' == typeof e.toJSON)
                  ) {
                    const t = e.toJSON()
                    for (const e of Object.keys(t)) {
                      const n = t[e]
                      o[e] = lL.isError(n) ? n.toString() : n
                    }
                  }
                  return o
                } catch (e) {
                  EL.DEBUG_BUILD &&
                    TL.logger.error('Unable to extract extra data from the Error object:', e)
                }
                return null
              })(t.originalException, r, o)
            if (s) {
              const t = { ...e.contexts },
                r = pL.normalize(s, n)
              return (
                lL.isPlainObject(r) &&
                  (dL.addNonEnumerableProperty(r, '__sentry_skip_normalization__', !0), (t[i] = r)),
                { ...e, contexts: t }
              )
            }
            return e
          })(e, r, t, n, i)
        },
      }
    })
  uL.extraErrorDataIntegration = fL
  var AL = {},
    hL = {}
  function mL(e, t) {
    let n = 0
    for (let t = e.length - 1; t >= 0; t--) {
      const r = e[t]
      '.' === r ? e.splice(t, 1) : '..' === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--)
    }
    if (t) for (; n--; n) e.unshift('..')
    return e
  }
  Object.defineProperty(hL, '__esModule', { value: !0 })
  const RL = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/
  function gL(e) {
    const t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
      n = RL.exec(t)
    return n ? n.slice(1) : []
  }
  function OL(...e) {
    let t = '',
      n = !1
    for (let r = e.length - 1; r >= -1 && !n; r--) {
      const o = r >= 0 ? e[r] : '/'
      o && ((t = `${o}/${t}`), (n = '/' === o.charAt(0)))
    }
    return (
      (t = mL(
        t.split('/').filter((e) => !!e),
        !n,
      ).join('/')),
      (n ? '/' : '') + t || '.'
    )
  }
  function vL(e) {
    let t = 0
    for (; t < e.length && '' === e[t]; t++);
    let n = e.length - 1
    for (; n >= 0 && '' === e[n]; n--);
    return t > n ? [] : e.slice(t, n - t + 1)
  }
  function IL(e) {
    const t = NL(e),
      n = '/' === e.slice(-1)
    let r = mL(
      e.split('/').filter((e) => !!e),
      !t,
    ).join('/')
    return r || t || (r = '.'), r && n && (r += '/'), (t ? '/' : '') + r
  }
  function NL(e) {
    return '/' === e.charAt(0)
  }
  ;(hL.basename = function (e, t) {
    let n = gL(e)[2] || ''
    return t && n.slice(-1 * t.length) === t && (n = n.slice(0, n.length - t.length)), n
  }),
    (hL.dirname = function (e) {
      const t = gL(e),
        n = t[0] || ''
      let r = t[1]
      return n || r ? (r && (r = r.slice(0, r.length - 1)), n + r) : '.'
    }),
    (hL.isAbsolute = NL),
    (hL.join = function (...e) {
      return IL(e.join('/'))
    }),
    (hL.normalizePath = IL),
    (hL.relative = function (e, t) {
      ;(e = OL(e).slice(1)), (t = OL(t).slice(1))
      const n = vL(e.split('/')),
        r = vL(t.split('/')),
        o = Math.min(n.length, r.length)
      let i = o
      for (let e = 0; e < o; e++)
        if (n[e] !== r[e]) {
          i = e
          break
        }
      let s = []
      for (let e = i; e < n.length; e++) s.push('..')
      return (s = s.concat(r.slice(i))), s.join('/')
    }),
    (hL.resolve = OL),
    Object.defineProperty(AL, '__esModule', { value: !0 })
  const yL = hL,
    CL = FA,
    LL = OI.defineIntegration((e = {}) => {
      const t = e.root,
        n = e.prefix || 'app:///',
        r = 'window' in CL.GLOBAL_OBJ && void 0 !== CL.GLOBAL_OBJ.window,
        o = e.iteratee || bL({ isBrowser: r, root: t, prefix: n })
      function i(e) {
        return { ...e, frames: e && e.frames && e.frames.map((e) => o(e)) }
      }
      return {
        name: 'RewriteFrames',
        processEvent(e) {
          let t = e
          return (
            e.exception &&
              Array.isArray(e.exception.values) &&
              (t = (function (e) {
                try {
                  return {
                    ...e,
                    exception: {
                      ...e.exception,
                      values: e.exception.values.map((e) => ({
                        ...e,
                        ...(e.stacktrace && { stacktrace: i(e.stacktrace) }),
                      })),
                    },
                  }
                } catch (t) {
                  return e
                }
              })(t)),
            t
          )
        },
      }
    })
  function bL({ isBrowser: e, root: t, prefix: n }) {
    return (r) => {
      if (!r.filename) return r
      const o =
          /^[a-zA-Z]:\\/.test(r.filename) ||
          (r.filename.includes('\\') && !r.filename.includes('/')),
        i = /^\//.test(r.filename)
      if (e) {
        if (t) {
          const e = r.filename
          0 === e.indexOf(t) && (r.filename = e.replace(t, n))
        }
      } else if (o || i) {
        const e = o ? r.filename.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/') : r.filename,
          i = t ? yL.relative(t, e) : yL.basename(e)
        r.filename = `${n}${i}`
      }
      return r
    }
  }
  ;(AL.generateIteratee = bL), (AL.rewriteFramesIntegration = LL)
  var ML = {}
  Object.defineProperty(ML, '__esModule', { value: !0 })
  const PL = rm,
    UL = OI.defineIntegration(() => {
      const e = 1e3 * PL.timestampInSeconds()
      return {
        name: 'SessionTiming',
        processEvent(t) {
          const n = 1e3 * PL.timestampInSeconds()
          return {
            ...t,
            extra: { ...t.extra, 'session:start': e, 'session:duration': n - e, 'session:end': n },
          }
        },
      }
    })
  ML.sessionTimingIntegration = UL
  var DL = {}
  Object.defineProperty(DL, '__esModule', { value: !0 })
  const wL = Dh,
    xL = Yh
  function VL(e) {
    return {
      ...e,
      path: 'path' in e && Array.isArray(e.path) ? e.path.join('.') : void 0,
      keys: 'keys' in e ? JSON.stringify(e.keys) : void 0,
      unionErrors: 'unionErrors' in e ? JSON.stringify(e.unionErrors) : void 0,
    }
  }
  function GL(e) {
    const t = new Set()
    for (const n of e.issues) n.path && n.path[0] && t.add(n.path[0])
    const n = Array.from(t)
    return `Failed to validate keys: ${xL.truncate(n.join(', '), 100)}`
  }
  function BL(e, t, n) {
    return t.exception &&
      t.exception.values &&
      n &&
      n.originalException &&
      ((r = n.originalException),
      wL.isError(r) && 'ZodError' === r.name && Array.isArray(r.errors)) &&
      0 !== n.originalException.issues.length
      ? {
          ...t,
          exception: {
            ...t.exception,
            values: [
              { ...t.exception.values[0], value: GL(n.originalException) },
              ...t.exception.values.slice(1),
            ],
          },
          extra: { ...t.extra, 'zoderror.issues': n.originalException.errors.slice(0, e).map(VL) },
        }
      : t
    var r
  }
  const kL = OI.defineIntegration((e = {}) => {
    const t = e.limit || 10
    return { name: 'ZodErrors', processEvent: (e, n) => BL(t, e, n) }
  })
  ;(DL.applyZodErrorsToEvent = BL), (DL.zodErrorsIntegration = kL)
  var FL = {}
  Object.defineProperty(FL, '__esModule', { value: !0 })
  const HL = tC,
    YL = $g,
    jL = th,
    KL = OI.defineIntegration((e) => ({
      name: 'ThirdPartyErrorsFilter',
      setup(e) {
        e.on('beforeEnvelope', (e) => {
          YL.forEachEnvelopeItem(e, (e, t) => {
            if ('event' === t) {
              const t = Array.isArray(e) ? e[1] : void 0
              t && (HL.stripMetadataFromStackFrames(t), (e[1] = t))
            }
          })
        }),
          e.on('applyFrameMetadata', (t) => {
            if (t.type) return
            const n = e.getOptions().stackParser
            HL.addMetadataToStackFrames(n, t)
          })
      },
      processEvent(t) {
        const n = (function (e) {
          const t = jL.getFramesFromEvent(e)
          if (!t) return
          return t
            .filter((e) => !!e.filename)
            .map((e) =>
              e.module_metadata
                ? Object.keys(e.module_metadata)
                    .filter((e) => e.startsWith(WL))
                    .map((e) => e.slice(WL.length))
                : [],
            )
        })(t)
        if (n) {
          if (
            n[
              'drop-error-if-contains-third-party-frames' === e.behaviour ||
              'apply-tag-if-contains-third-party-frames' === e.behaviour
                ? 'some'
                : 'every'
            ]((t) => !t.some((t) => e.filterKeys.includes(t)))
          ) {
            if (
              'drop-error-if-contains-third-party-frames' === e.behaviour ||
              'drop-error-if-exclusively-contains-third-party-frames' === e.behaviour
            )
              return null
            t.tags = { ...t.tags, third_party_code: !0 }
          }
        }
        return t
      },
    }))
  const WL = '_sentryBundlerPluginAppKey:'
  FL.thirdPartyErrorFilterIntegration = KL
  var qL = {},
    QL = {}
  Object.defineProperty(QL, '__esModule', { value: !0 })
  ;(QL.COUNTER_METRIC_TYPE = 'c'),
    (QL.DEFAULT_BROWSER_FLUSH_INTERVAL = 5e3),
    (QL.DEFAULT_FLUSH_INTERVAL = 1e4),
    (QL.DISTRIBUTION_METRIC_TYPE = 'd'),
    (QL.GAUGE_METRIC_TYPE = 'g'),
    (QL.MAX_WEIGHT = 1e4),
    (QL.SET_METRIC_TYPE = 's'),
    Object.defineProperty(qL, '__esModule', { value: !0 })
  const zL = eR,
    $L = GA,
    XL = FA,
    JL = QA,
    ZL = rm,
    eb = gh,
    tb = pg,
    nb = dg,
    rb = QL
  function ob(e, t) {
    const n = XL.getGlobalSingleton('globalMetricsAggregators', () => new WeakMap()),
      r = n.get(e)
    if (r) return r
    const o = new t(e)
    return e.on('flush', () => o.flush()), e.on('close', () => o.close()), n.set(e, o), o
  }
  function ib(e, t, n, r, o = {}) {
    const i = o.client || zL.getClient()
    if (!i) return
    const s = eb.getActiveSpan(),
      a = s ? eb.getRootSpan(s) : void 0,
      c = a && eb.spanToJSON(a).description,
      { unit: _, tags: u, timestamp: E } = o,
      { release: l, environment: T } = i.getOptions(),
      p = {}
    l && (p.release = l),
      T && (p.environment = T),
      c && (p.transaction = c),
      $L.DEBUG_BUILD && JL.logger.log(`Adding value of ${r} to ${t} metric ${n}`)
    ob(i, e).add(t, n, r, _, { ...p, ...u }, E)
  }
  function sb(e, t, n, r) {
    ib(e, rb.DISTRIBUTION_METRIC_TYPE, t, cb(n), r)
  }
  const ab = {
    increment: function (e, t, n = 1, r) {
      ib(e, rb.COUNTER_METRIC_TYPE, t, cb(n), r)
    },
    distribution: sb,
    set: function (e, t, n, r) {
      ib(e, rb.SET_METRIC_TYPE, t, n, r)
    },
    gauge: function (e, t, n, r) {
      ib(e, rb.GAUGE_METRIC_TYPE, t, cb(n), r)
    },
    timing: function (e, t, n, r = 'second', o) {
      if ('function' == typeof n) {
        const r = ZL.timestampInSeconds()
        return tb.startSpanManual(
          { op: 'metrics.timing', name: t, startTime: r, onlyIfParent: !0 },
          (i) =>
            nb.handleCallbackErrors(
              () => n(),
              () => {},
              () => {
                const n = ZL.timestampInSeconds()
                sb(e, t, n - r, { ...o, unit: 'second' }), i.end(n)
              },
            ),
        )
      }
      sb(e, t, n, { ...o, unit: r })
    },
    getMetricsAggregatorForClient: ob,
  }
  function cb(e) {
    return 'string' == typeof e ? parseInt(e) : e
  }
  qL.metrics = ab
  var _b = {}
  Object.defineProperty(_b, '__esModule', { value: !0 })
  const ub = eR,
    Eb = GA,
    lb = QA
  function Tb(e) {
    return (
      !!e &&
      void 0 !== e._profiler &&
      'function' == typeof e._profiler.start &&
      'function' == typeof e._profiler.stop
    )
  }
  const pb = {
    startProfiler: function () {
      const e = ub.getClient()
      if (!e)
        return void (
          Eb.DEBUG_BUILD && lb.logger.warn('No Sentry client available, profiling is not started')
        )
      const t = e.getIntegrationByName('ProfilingIntegration')
      t
        ? Tb(t)
          ? t._profiler.start()
          : Eb.DEBUG_BUILD && lb.logger.warn('Profiler is not available on profiling integration.')
        : Eb.DEBUG_BUILD && lb.logger.warn('ProfilingIntegration is not available')
    },
    stopProfiler: function () {
      const e = ub.getClient()
      if (!e)
        return void (
          Eb.DEBUG_BUILD && lb.logger.warn('No Sentry client available, profiling is not started')
        )
      const t = e.getIntegrationByName('ProfilingIntegration')
      t
        ? Tb(t)
          ? t._profiler.stop()
          : Eb.DEBUG_BUILD && lb.logger.warn('Profiler is not available on profiling integration.')
        : Eb.DEBUG_BUILD && lb.logger.warn('ProfilingIntegration is not available')
    },
  }
  _b.profiler = pb
  var db = {},
    Sb = {},
    fb = {},
    Ab = {}
  Object.defineProperty(Ab, '__esModule', { value: !0 })
  const hb = Ph
  function mb(e) {
    return e.replace(/[^\w\-./]+/gi, '')
  }
  const Rb = [
    ['\n', '\\n'],
    ['\r', '\\r'],
    ['\t', '\\t'],
    ['\\', '\\\\'],
    ['|', '\\u{7c}'],
    [',', '\\u{2c}'],
  ]
  function gb(e) {
    return [...e].reduce(
      (e, t) =>
        e +
        (function (e) {
          for (const [t, n] of Rb) if (e === t) return n
          return e
        })(t),
      '',
    )
  }
  ;(Ab.getBucketKey = function (e, t, n, r) {
    const o = Object.entries(hb.dropUndefinedKeys(r)).sort((e, t) => e[0].localeCompare(t[0]))
    return `${e}${t}${n}${o}`
  }),
    (Ab.sanitizeMetricKey = function (e) {
      return e.replace(/[^\w\-.]+/gi, '_')
    }),
    (Ab.sanitizeTags = function (e) {
      const t = {}
      for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          t[mb(n)] = gb(String(e[n]))
        }
      return t
    }),
    (Ab.sanitizeUnit = function (e) {
      return e.replace(/[^\w]+/gi, '_')
    }),
    (Ab.serializeMetricBuckets = function (e) {
      let t = ''
      for (const n of e) {
        const e = Object.entries(n.tags),
          r = e.length > 0 ? `|#${e.map(([e, t]) => `${e}:${t}`).join(',')}` : ''
        t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}\n`
      }
      return t
    }),
    (Ab.simpleHash = function (e) {
      let t = 0
      for (let n = 0; n < e.length; n++) {
        ;(t = (t << 5) - t + e.charCodeAt(n)), (t &= t)
      }
      return t >>> 0
    }),
    Object.defineProperty(fb, '__esModule', { value: !0 })
  const Ob = jg,
    vb = $g,
    Ib = QA,
    Nb = Ab
  function yb(e, t, n, r) {
    const o = { sent_at: new Date().toISOString() }
    n && n.sdk && (o.sdk = { name: n.sdk.name, version: n.sdk.version }),
      r && t && (o.dsn = Ob.dsnToString(t))
    const i = (function (e) {
      const t = Nb.serializeMetricBuckets(e)
      return [{ type: 'statsd', length: t.length }, t]
    })(e)
    return vb.createEnvelope(o, [i])
  }
  ;(fb.captureAggregateMetrics = function (e, t) {
    Ib.logger.log(`Flushing aggregated metrics, number of metrics: ${t.length}`)
    const n = yb(t, e.getDsn(), e.getSdkMetadata(), e.getOptions().tunnel)
    e.sendEnvelope(n)
  }),
    (fb.createMetricEnvelope = yb)
  var Cb = {}
  Object.defineProperty(Cb, '__esModule', { value: !0 })
  const Lb = QL,
    bb = Ab
  class Mb {
    constructor(e) {
      this._value = e
    }
    get weight() {
      return 1
    }
    add(e) {
      this._value += e
    }
    toString() {
      return `${this._value}`
    }
  }
  class Pb {
    constructor(e) {
      ;(this._last = e), (this._min = e), (this._max = e), (this._sum = e), (this._count = 1)
    }
    get weight() {
      return 5
    }
    add(e) {
      ;(this._last = e),
        e < this._min && (this._min = e),
        e > this._max && (this._max = e),
        (this._sum += e),
        this._count++
    }
    toString() {
      return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`
    }
  }
  class Ub {
    constructor(e) {
      this._value = [e]
    }
    get weight() {
      return this._value.length
    }
    add(e) {
      this._value.push(e)
    }
    toString() {
      return this._value.join(':')
    }
  }
  class Db {
    constructor(e) {
      ;(this.first = e), (this._value = new Set([e]))
    }
    get weight() {
      return this._value.size
    }
    add(e) {
      this._value.add(e)
    }
    toString() {
      return Array.from(this._value)
        .map((e) => ('string' == typeof e ? bb.simpleHash(e) : e))
        .join(':')
    }
  }
  const wb = {
    [Lb.COUNTER_METRIC_TYPE]: Mb,
    [Lb.GAUGE_METRIC_TYPE]: Pb,
    [Lb.DISTRIBUTION_METRIC_TYPE]: Ub,
    [Lb.SET_METRIC_TYPE]: Db,
  }
  ;(Cb.CounterMetric = Mb),
    (Cb.DistributionMetric = Ub),
    (Cb.GaugeMetric = Pb),
    (Cb.METRIC_MAP = wb),
    (Cb.SetMetric = Db),
    Object.defineProperty(Sb, '__esModule', { value: !0 })
  const xb = rm,
    Vb = gh,
    Gb = QL,
    Bb = fb,
    kb = Cb,
    Fb = Ab
  ;(Sb.MetricsAggregator = class {
    constructor(e) {
      ;(this._client = e),
        (this._buckets = new Map()),
        (this._bucketsTotalWeight = 0),
        (this._interval = setInterval(() => this._flush(), Gb.DEFAULT_FLUSH_INTERVAL)),
        this._interval.unref && this._interval.unref(),
        (this._flushShift = Math.floor((Math.random() * Gb.DEFAULT_FLUSH_INTERVAL) / 1e3)),
        (this._forceFlush = !1)
    }
    add(e, t, n, r = 'none', o = {}, i = xb.timestampInSeconds()) {
      const s = Math.floor(i),
        a = Fb.sanitizeMetricKey(t),
        c = Fb.sanitizeTags(o),
        _ = Fb.sanitizeUnit(r),
        u = Fb.getBucketKey(e, a, _, c)
      let E = this._buckets.get(u)
      const l = E && e === Gb.SET_METRIC_TYPE ? E.metric.weight : 0
      E
        ? (E.metric.add(n), E.timestamp < s && (E.timestamp = s))
        : ((E = {
            metric: new kb.METRIC_MAP[e](n),
            timestamp: s,
            metricType: e,
            name: a,
            unit: _,
            tags: c,
          }),
          this._buckets.set(u, E))
      const T = 'string' == typeof n ? E.metric.weight - l : n
      Vb.updateMetricSummaryOnActiveSpan(e, a, T, _, o, u),
        (this._bucketsTotalWeight += E.metric.weight),
        this._bucketsTotalWeight >= Gb.MAX_WEIGHT && this.flush()
    }
    flush() {
      ;(this._forceFlush = !0), this._flush()
    }
    close() {
      ;(this._forceFlush = !0), clearInterval(this._interval), this._flush()
    }
    _flush() {
      if (this._forceFlush)
        return (
          (this._forceFlush = !1),
          (this._bucketsTotalWeight = 0),
          this._captureMetrics(this._buckets),
          void this._buckets.clear()
        )
      const e =
          Math.floor(xb.timestampInSeconds()) - Gb.DEFAULT_FLUSH_INTERVAL / 1e3 - this._flushShift,
        t = new Map()
      for (const [n, r] of this._buckets)
        r.timestamp <= e && (t.set(n, r), (this._bucketsTotalWeight -= r.metric.weight))
      for (const [e] of t) this._buckets.delete(e)
      this._captureMetrics(t)
    }
    _captureMetrics(e) {
      if (e.size > 0) {
        const t = Array.from(e).map(([, e]) => e)
        Bb.captureAggregateMetrics(this._client, t)
      }
    }
  }),
    Object.defineProperty(db, '__esModule', { value: !0 })
  const Hb = Sb,
    Yb = qL
  const jb = {
    increment: function (e, t = 1, n) {
      Yb.metrics.increment(Hb.MetricsAggregator, e, t, n)
    },
    distribution: function (e, t, n) {
      Yb.metrics.distribution(Hb.MetricsAggregator, e, t, n)
    },
    set: function (e, t, n) {
      Yb.metrics.set(Hb.MetricsAggregator, e, t, n)
    },
    gauge: function (e, t, n) {
      Yb.metrics.gauge(Hb.MetricsAggregator, e, t, n)
    },
    timing: function (e, t, n = 'second', r) {
      return Yb.metrics.timing(Hb.MetricsAggregator, e, t, n, r)
    },
    getMetricsAggregatorForClient: function (e) {
      return Yb.metrics.getMetricsAggregatorForClient(e, Hb.MetricsAggregator)
    },
  }
  db.metricsDefault = jb
  var Kb = {}
  Object.defineProperty(Kb, '__esModule', { value: !0 })
  const Wb = rm,
    qb = gh,
    Qb = QL,
    zb = fb,
    $b = Cb,
    Xb = Ab
  Kb.BrowserMetricsAggregator = class {
    constructor(e) {
      ;(this._client = e),
        (this._buckets = new Map()),
        (this._interval = setInterval(() => this.flush(), Qb.DEFAULT_BROWSER_FLUSH_INTERVAL))
    }
    add(e, t, n, r = 'none', o = {}, i = Wb.timestampInSeconds()) {
      const s = Math.floor(i),
        a = Xb.sanitizeMetricKey(t),
        c = Xb.sanitizeTags(o),
        _ = Xb.sanitizeUnit(r),
        u = Xb.getBucketKey(e, a, _, c)
      let E = this._buckets.get(u)
      const l = E && e === Qb.SET_METRIC_TYPE ? E.metric.weight : 0
      E
        ? (E.metric.add(n), E.timestamp < s && (E.timestamp = s))
        : ((E = {
            metric: new $b.METRIC_MAP[e](n),
            timestamp: s,
            metricType: e,
            name: a,
            unit: _,
            tags: c,
          }),
          this._buckets.set(u, E))
      const T = 'string' == typeof n ? E.metric.weight - l : n
      qb.updateMetricSummaryOnActiveSpan(e, a, T, _, o, u)
    }
    flush() {
      if (0 === this._buckets.size) return
      const e = Array.from(this._buckets.values())
      zb.captureAggregateMetrics(this._client, e), this._buckets.clear()
    }
    close() {
      clearInterval(this._interval), this.flush()
    }
  }
  var Jb = {}
  Object.defineProperty(Jb, '__esModule', { value: !0 })
  const Zb = uR,
    eM = Dh,
    tM = lC,
    nM = pR,
    rM = _g,
    oM = gh,
    iM = Eg,
    sM = ER,
    aM = pg,
    cM = ly
  function _M(e, t, n) {
    const r = cM.getTraceData({ span: n }),
      o = r['sentry-trace'],
      i = r.baggage
    if (!o) return
    const s =
      t.headers ||
      ((function (e) {
        return 'undefined' != typeof Request && eM.isInstanceOf(e, Request)
      })(e)
        ? e.headers
        : void 0)
    if (s) {
      if (
        (function (e) {
          return 'undefined' != typeof Headers && eM.isInstanceOf(e, Headers)
        })(s)
      ) {
        const e = new Headers(s)
        if ((e.set('sentry-trace', o), i)) {
          const t = e.get('baggage')
          if (t) {
            const n = uM(t)
            e.set('baggage', n ? `${n},${i}` : i)
          } else e.set('baggage', i)
        }
        return e
      }
      if (Array.isArray(s)) {
        const e = [
          ...s
            .filter((e) => !(Array.isArray(e) && 'sentry-trace' === e[0]))
            .map((e) => {
              if (Array.isArray(e) && 'baggage' === e[0] && 'string' == typeof e[1]) {
                const [t, n, ...r] = e
                return [t, uM(n), ...r]
              }
              return e
            }),
          ['sentry-trace', o],
        ]
        return i && e.push(['baggage', i]), e
      }
      {
        const e = 'baggage' in s ? s.baggage : void 0
        let t = []
        return (
          Array.isArray(e)
            ? (t = e.map((e) => ('string' == typeof e ? uM(e) : e)).filter((e) => '' === e))
            : e && t.push(uM(e)),
          i && t.push(i),
          { ...s, 'sentry-trace': o, baggage: t.length > 0 ? t.join(',') : void 0 }
        )
      }
    }
    return { ...r }
  }
  function uM(e) {
    return e
      .split(',')
      .filter((e) => !e.split('=')[0].startsWith(nM.SENTRY_BAGGAGE_KEY_PREFIX))
      .join(',')
  }
  ;(Jb.addTracingHeadersToFetchRequest = function (e, t, n, r, o) {
    return _M(e, r, o)
  }),
    (Jb.instrumentFetchRequest = function (e, t, n, r, o = 'auto.http.browser') {
      if (!e.fetchData) return
      const i = rM.hasTracingEnabled() && t(e.fetchData.url)
      if (e.endTimestamp && i) {
        const t = e.fetchData.__span
        if (!t) return
        const n = r[t]
        return void (
          n &&
          (!(function (e, t) {
            if (t.response) {
              sM.setHttpStatus(e, t.response.status)
              const n = t.response && t.response.headers && t.response.headers.get('content-length')
              if (n) {
                const t = parseInt(n)
                t > 0 && e.setAttribute('http.response_content_length', t)
              }
            } else t.error && e.setStatus({ code: sM.SPAN_STATUS_ERROR, message: 'internal_error' })
            e.end()
          })(n, e),
          delete r[t])
        )
      }
      const { method: s, url: a } = e.fetchData,
        c = (function (e) {
          try {
            return new URL(e).href
          } catch (e) {
            return
          }
        })(a),
        _ = c ? tM.parseUrl(c).host : void 0,
        u = !!oM.getActiveSpan(),
        E =
          i && u
            ? aM.startInactiveSpan({
                name: `${s} ${a}`,
                attributes: {
                  url: a,
                  type: 'fetch',
                  'http.method': s,
                  'http.url': c,
                  'server.address': _,
                  [Zb.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: o,
                  [Zb.SEMANTIC_ATTRIBUTE_SENTRY_OP]: 'http.client',
                },
              })
            : new iM.SentryNonRecordingSpan()
      if (
        ((e.fetchData.__span = E.spanContext().spanId),
        (r[E.spanContext().spanId] = E),
        n(e.fetchData.url))
      ) {
        const t = e.args[0],
          n = e.args[1] || {},
          r = _M(t, n, rM.hasTracingEnabled() && u ? E : void 0)
        r && ((e.args[1] = n), (n.headers = r))
      }
      return E
    })
  var EM = {}
  Object.defineProperty(EM, '__esModule', { value: !0 })
  const lM = eR,
    TM = Ov,
    pM = uR,
    dM = Xg,
    SM = pg,
    fM = { mechanism: { handled: !1, data: { function: 'trpcMiddleware' } } }
  EM.trpcMiddleware = function (e = {}) {
    return async function (t) {
      const { path: n, type: r, next: o, rawInput: i, getRawInput: s } = t,
        a = lM.getClient(),
        c = a && a.getOptions(),
        _ = { procedure_path: n, procedure_type: r }
      if (
        (void 0 !== e.attachRpcInput ? e.attachRpcInput : c && c.sendDefaultPii) &&
        (void 0 !== i && (_.input = dM.normalize(i)), void 0 !== s && 'function' == typeof s)
      )
        try {
          const e = await s()
          _.input = dM.normalize(e)
        } catch (e) {}
      return lM.withScope(
        (e) => (
          e.setContext('trpc', _),
          SM.startSpanManual(
            {
              name: `trpc/${n}`,
              op: 'rpc.server',
              attributes: {
                [pM.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: 'route',
                [pM.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: 'auto.rpc.trpc',
              },
            },
            async (e) => {
              try {
                const t = await o()
                return (
                  (function (e) {
                    'object' == typeof e &&
                      null !== e &&
                      'ok' in e &&
                      !e.ok &&
                      'error' in e &&
                      TM.captureException(e.error, fM)
                  })(t),
                  e.end(),
                  t
                )
              } catch (t) {
                throw (TM.captureException(t, fM), e.end(), t)
              }
            },
          )
        ),
      )
    }
  }
  var AM = {}
  Object.defineProperty(AM, '__esModule', { value: !0 })
  const hM = eR,
    mM = Ph
  AM.captureFeedback = function (e, t = {}, n = hM.getCurrentScope()) {
    const { message: r, name: o, email: i, url: s, source: a, associatedEventId: c, tags: _ } = e,
      u = {
        contexts: {
          feedback: mM.dropUndefinedKeys({
            contact_email: i,
            name: o,
            message: r,
            url: s,
            source: a,
            associated_event_id: c,
          }),
        },
        type: 'feedback',
        level: 'info',
        tags: _,
      },
      E = (n && n.getClient()) || hM.getClient()
    return E && E.emit('beforeSendFeedback', u, t), n.captureEvent(u, t)
  }
  var RM = {}
  Object.defineProperty(RM, '__esModule', { value: !0 })
  const gM = vy,
    OM = eR,
    vM = Ov
  function IM() {
    return {
      bindClient(e) {
        OM.getCurrentScope().setClient(e)
      },
      withScope: OM.withScope,
      getClient: () => OM.getClient(),
      getScope: OM.getCurrentScope,
      getIsolationScope: OM.getIsolationScope,
      captureException: (e, t) => OM.getCurrentScope().captureException(e, t),
      captureMessage: (e, t, n) => OM.getCurrentScope().captureMessage(e, t, n),
      captureEvent: vM.captureEvent,
      addBreadcrumb: gM.addBreadcrumb,
      setUser: vM.setUser,
      setTags: vM.setTags,
      setTag: vM.setTag,
      setExtra: vM.setExtra,
      setExtras: vM.setExtras,
      setContext: vM.setContext,
      getIntegration(e) {
        const t = OM.getClient()
        return (t && t.getIntegrationByName(e.id)) || null
      },
      startSession: vM.startSession,
      endSession: vM.endSession,
      captureSession(e) {
        if (e) return vM.endSession()
        !(function () {
          const e = OM.getCurrentScope(),
            t = OM.getClient(),
            n = e.getSession()
          t && n && t.captureSession(n)
        })()
      },
    }
  }
  const NM = IM
  ;(RM.getCurrentHub = NM), (RM.getCurrentHubShim = IM)
  var yM = {}
  Object.defineProperty(yM, '__esModule', { value: !0 }),
    (yM.flatten = function (e) {
      const t = [],
        n = (e) => {
          e.forEach((e) => {
            Array.isArray(e) ? n(e) : t.push(e)
          })
        }
      return n(e), t
    })
  var CM = {}
  Object.defineProperty(CM, '__esModule', { value: !0 }),
    (CM.getBreadcrumbLogLevelFromHttpStatusCode = function (e) {
      return void 0 === e ? void 0 : e >= 400 && e < 500 ? 'warning' : e >= 500 ? 'error' : void 0
    })
  var LM = {},
    bM = {}
  Object.defineProperty(bM, '__esModule', { value: !0 })
  const MM = WA,
    PM = QA,
    UM = FA.GLOBAL_OBJ
  function DM() {
    if (!('fetch' in UM)) return !1
    try {
      return new Headers(), new Request('http://www.example.com'), new Response(), !0
    } catch (e) {
      return !1
    }
  }
  function wM(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  }
  ;(bM.isNativeFunction = wM),
    (bM.supportsDOMError = function () {
      try {
        return new DOMError(''), !0
      } catch (e) {
        return !1
      }
    }),
    (bM.supportsDOMException = function () {
      try {
        return new DOMException(''), !0
      } catch (e) {
        return !1
      }
    }),
    (bM.supportsErrorEvent = function () {
      try {
        return new ErrorEvent(''), !0
      } catch (e) {
        return !1
      }
    }),
    (bM.supportsFetch = DM),
    (bM.supportsNativeFetch = function () {
      if ('string' == typeof EdgeRuntime) return !0
      if (!DM()) return !1
      if (wM(UM.fetch)) return !0
      let e = !1
      const t = UM.document
      if (t && 'function' == typeof t.createElement)
        try {
          const n = t.createElement('iframe')
          ;(n.hidden = !0),
            t.head.appendChild(n),
            n.contentWindow && n.contentWindow.fetch && (e = wM(n.contentWindow.fetch)),
            t.head.removeChild(n)
        } catch (e) {
          MM.DEBUG_BUILD &&
            PM.logger.warn(
              'Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ',
              e,
            )
        }
      return e
    }),
    (bM.supportsReferrerPolicy = function () {
      if (!DM()) return !1
      try {
        return new Request('_', { referrerPolicy: 'origin' }), !0
      } catch (e) {
        return !1
      }
    }),
    (bM.supportsReportingObserver = function () {
      return 'ReportingObserver' in UM
    }),
    Object.defineProperty(LM, '__esModule', { value: !0 })
  const xM = Dh,
    VM = Ph,
    GM = bM,
    BM = rm,
    kM = FA,
    FM = KA
  function HM(e, t = !1) {
    ;(t && !GM.supportsNativeFetch()) ||
      VM.fill(kM.GLOBAL_OBJ, 'fetch', function (t) {
        return function (...n) {
          const r = new Error(),
            { method: o, url: i } = WM(n),
            s = {
              args: n,
              fetchData: { method: o, url: i },
              startTimestamp: 1e3 * BM.timestampInSeconds(),
              virtualError: r,
            }
          return (
            e || FM.triggerHandlers('fetch', { ...s }),
            t.apply(kM.GLOBAL_OBJ, n).then(
              async (t) => (
                e
                  ? e(t)
                  : FM.triggerHandlers('fetch', {
                      ...s,
                      endTimestamp: 1e3 * BM.timestampInSeconds(),
                      response: t,
                    }),
                t
              ),
              (e) => {
                throw (
                  (FM.triggerHandlers('fetch', {
                    ...s,
                    endTimestamp: 1e3 * BM.timestampInSeconds(),
                    error: e,
                  }),
                  xM.isError(e) &&
                    void 0 === e.stack &&
                    ((e.stack = r.stack), VM.addNonEnumerableProperty(e, 'framesToPop', 1)),
                  e)
                )
              },
            )
          )
        }
      })
  }
  function YM(e) {
    let t
    try {
      t = e.clone()
    } catch (e) {
      return
    }
    !(async function (e, t) {
      if (e && e.body) {
        const n = e.body,
          r = n.getReader(),
          o = setTimeout(() => {
            n.cancel().then(null, () => {})
          }, 9e4)
        let i = !0
        for (; i; ) {
          let e
          try {
            e = setTimeout(() => {
              n.cancel().then(null, () => {})
            }, 5e3)
            const { done: o } = await r.read()
            clearTimeout(e), o && (t(), (i = !1))
          } catch (e) {
            i = !1
          } finally {
            clearTimeout(e)
          }
        }
        clearTimeout(o), r.releaseLock(), n.cancel().then(null, () => {})
      }
    })(t, () => {
      FM.triggerHandlers('fetch-body-resolved', {
        endTimestamp: 1e3 * BM.timestampInSeconds(),
        response: e,
      })
    })
  }
  function jM(e, t) {
    return !!e && 'object' == typeof e && !!e[t]
  }
  function KM(e) {
    return 'string' == typeof e
      ? e
      : e
        ? jM(e, 'url')
          ? e.url
          : e.toString
            ? e.toString()
            : ''
        : ''
  }
  function WM(e) {
    if (0 === e.length) return { method: 'GET', url: '' }
    if (2 === e.length) {
      const [t, n] = e
      return { url: KM(t), method: jM(n, 'method') ? String(n.method).toUpperCase() : 'GET' }
    }
    const t = e[0]
    return { url: KM(t), method: jM(t, 'method') ? String(t.method).toUpperCase() : 'GET' }
  }
  ;(LM.addFetchEndInstrumentationHandler = function (e) {
    const t = 'fetch-body-resolved'
    FM.addHandler(t, e), FM.maybeInstrument(t, () => HM(YM))
  }),
    (LM.addFetchInstrumentationHandler = function (e, t) {
      const n = 'fetch'
      FM.addHandler(n, e), FM.maybeInstrument(n, () => HM(void 0, t))
    }),
    (LM.parseFetchArgs = WM)
  var qM = {},
    QM = { exports: {} },
    zM = {}
  Object.defineProperty(zM, '__esModule', { value: !0 }),
    (zM.getSDKSource = function () {
      return 'npm'
    }),
    (zM.isBrowserBundle = function () {
      return 'undefined' != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
    }),
    (function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = zM
      function r(e, t) {
        return e.require(t)
      }
      ;(t.dynamicRequire = r),
        (t.isNodeEnv = function () {
          return (
            !n.isBrowserBundle() &&
            '[object process]' ===
              Object.prototype.toString.call('undefined' != typeof process ? process : 0)
          )
        }),
        (t.loadModule = function (t) {
          let n
          try {
            n = r(e, t)
          } catch (e) {}
          if (!n)
            try {
              const { cwd: o } = r(e, 'process')
              n = r(e, `${o()}/node_modules/${t}`)
            } catch (e) {}
          return n
        })
    })(QM, QM.exports)
  var $M = QM.exports
  Object.defineProperty(qM, '__esModule', { value: !0 })
  const XM = $M,
    JM = FA
  qM.isBrowser = function () {
    return (
      'undefined' != typeof window &&
      (!XM.isNodeEnv() ||
        (function () {
          const e = JM.GLOBAL_OBJ.process
          return !!e && 'renderer' === e.type
        })())
    )
  }
  var ZM = {}
  Object.defineProperty(ZM, '__esModule', { value: !0 })
  const eP = th
  function tP(e, t = !1) {
    return (
      !(
        t ||
        (e &&
          !e.startsWith('/') &&
          !e.match(/^[A-Z]:/) &&
          !e.startsWith('.') &&
          !e.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))
      ) &&
      void 0 !== e &&
      !e.includes('node_modules/')
    )
  }
  function nP(e) {
    const t = /^\s*[-]{4,}$/,
      n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/
    return (r) => {
      const o = r.match(n)
      if (o) {
        let t, n, r, i, s
        if (o[1]) {
          r = o[1]
          let e = r.lastIndexOf('.')
          if (('.' === r[e - 1] && e--, e > 0)) {
            ;(t = r.slice(0, e)), (n = r.slice(e + 1))
            const o = t.indexOf('.Module')
            o > 0 && ((r = r.slice(o + 1)), (t = t.slice(0, o)))
          }
          i = void 0
        }
        n && ((i = t), (s = n)),
          '<anonymous>' === n && ((s = void 0), (r = void 0)),
          void 0 === r && ((s = s || eP.UNKNOWN_FUNCTION), (r = i ? `${i}.${s}` : s))
        let a = o[2] && o[2].startsWith('file://') ? o[2].slice(7) : o[2]
        const c = 'native' === o[5]
        return (
          a && a.match(/\/[A-Z]:/) && (a = a.slice(1)),
          a || !o[5] || c || (a = o[5]),
          {
            filename: a ? decodeURI(a) : void 0,
            module: e ? e(a) : void 0,
            function: r,
            lineno: rP(o[3]),
            colno: rP(o[4]),
            in_app: tP(a || '', c),
          }
        )
      }
      if (r.match(t)) return { filename: r }
    }
  }
  function rP(e) {
    return parseInt(e || '', 10) || void 0
  }
  ;(ZM.filenameIsInApp = tP),
    (ZM.node = nP),
    (ZM.nodeStackLineParser = function (e) {
      return [90, nP(e)]
    })
  var oP = {}
  Object.defineProperty(oP, '__esModule', { value: !0 }),
    (oP.makeFifoCache = function (e) {
      let t = [],
        n = {}
      return {
        add(r, o) {
          for (; t.length >= e; ) {
            const e = t.shift()
            void 0 !== e && delete n[e]
          }
          n[r] && this.delete(r), t.push(r), (n[r] = o)
        },
        clear() {
          ;(n = {}), (t = [])
        },
        get: (e) => n[e],
        size: () => t.length,
        delete(e) {
          if (!n[e]) return !1
          delete n[e]
          for (let n = 0; n < t.length; n++)
            if (t[n] === e) {
              t.splice(n, 1)
              break
            }
          return !0
        },
      }
    })
  var iP = {}
  Object.defineProperty(iP, '__esModule', { value: !0 })
  const sP = ZM,
    aP = Ph,
    cP = th
  ;(iP.callFrameToStackFrame = function (e, t, n) {
    const r = t ? t.replace(/^file:\/\//, '') : void 0,
      o = e.location.columnNumber ? e.location.columnNumber + 1 : void 0,
      i = e.location.lineNumber ? e.location.lineNumber + 1 : void 0
    return aP.dropUndefinedKeys({
      filename: r,
      module: n(r),
      function: e.functionName || cP.UNKNOWN_FUNCTION,
      colno: o,
      lineno: i,
      in_app: r ? sP.filenameIsInApp(r) : void 0,
    })
  }),
    (iP.watchdogTimer = function (e, t, n, r) {
      const o = e()
      let i = !1,
        s = !0
      return (
        setInterval(() => {
          const e = o.getTimeMs()
          !1 === i && e > t + n && ((i = !0), s && r()), e < t + n && (i = !1)
        }, 20),
        {
          poll: () => {
            o.reset()
          },
          enabled: (e) => {
            s = e
          },
        }
      )
    })
  var _P = {}
  Object.defineProperty(_P, '__esModule', { value: !0 })
  _P.LRUMap = class {
    constructor(e) {
      ;(this._maxSize = e), (this._cache = new Map())
    }
    get size() {
      return this._cache.size
    }
    get(e) {
      const t = this._cache.get(e)
      if (void 0 !== t) return this._cache.delete(e), this._cache.set(e, t), t
    }
    set(e, t) {
      this._cache.size >= this._maxSize && this._cache.delete(this._cache.keys().next().value),
        this._cache.set(e, t)
    }
    remove(e) {
      const t = this._cache.get(e)
      return t && this._cache.delete(e), t
    }
    clear() {
      this._cache.clear()
    }
    keys() {
      return Array.from(this._cache.keys())
    }
    values() {
      const e = []
      return this._cache.forEach((t) => e.push(t)), e
    }
  }
  var uP = {}
  Object.defineProperty(uP, '__esModule', { value: !0 })
  const EP = FA
  uP.vercelWaitUntil = function (e) {
    const t = EP.GLOBAL_OBJ[Symbol.for('@vercel/request-context')],
      n = t && t.get && t.get() ? t.get() : {}
    n && n.waitUntil && n.waitUntil(e)
  }
  var lP = {}
  Object.defineProperty(lP, '__esModule', { value: !0 }),
    (lP.escapeStringForRegex = function (e) {
      return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
    })
  var TP = {}
  Object.defineProperty(TP, '__esModule', { value: !0 })
  const pP = FA.GLOBAL_OBJ
  TP.supportsHistory = function () {
    const e = pP.chrome,
      t = e && e.app && e.app.runtime,
      n = 'history' in pP && !!pP.history.pushState && !!pP.history.replaceState
    return !t && n
  }
  var dP = {},
    SP = {}
  Object.defineProperty(SP, '__esModule', { value: !0 }),
    (SP._nullishCoalesce = function (e, t) {
      return null != e ? e : t()
    }),
    Object.defineProperty(dP, '__esModule', { value: !0 })
  const fP = SP
  dP._asyncNullishCoalesce = async function (e, t) {
    return fP._nullishCoalesce(e, t)
  }
  var AP = {}
  Object.defineProperty(AP, '__esModule', { value: !0 }),
    (AP._asyncOptionalChain = async function (e) {
      let t,
        n = e[0],
        r = 1
      for (; r < e.length; ) {
        const o = e[r],
          i = e[r + 1]
        if (((r += 2), ('optionalAccess' === o || 'optionalCall' === o) && null == n)) return
        'access' === o || 'optionalAccess' === o
          ? ((t = n), (n = await i(n)))
          : ('call' !== o && 'optionalCall' !== o) ||
            ((n = await i((...e) => n.call(t, ...e))), (t = void 0))
      }
      return n
    })
  var hP = {}
  Object.defineProperty(hP, '__esModule', { value: !0 })
  const mP = AP
  hP._asyncOptionalChainDelete = async function (e) {
    const t = await mP._asyncOptionalChain(e)
    return null == t || t
  }
  var RP = {}
  Object.defineProperty(RP, '__esModule', { value: !0 }),
    (RP._optionalChain = function (e) {
      let t,
        n = e[0],
        r = 1
      for (; r < e.length; ) {
        const o = e[r],
          i = e[r + 1]
        if (((r += 2), ('optionalAccess' === o || 'optionalCall' === o) && null == n)) return
        'access' === o || 'optionalAccess' === o
          ? ((t = n), (n = i(n)))
          : ('call' !== o && 'optionalCall' !== o) ||
            ((n = i((...e) => n.call(t, ...e))), (t = void 0))
      }
      return n
    })
  var gP = {}
  Object.defineProperty(gP, '__esModule', { value: !0 })
  const OP = RP
  ;(gP._optionalChainDelete = function (e) {
    const t = OP._optionalChain(e)
    return null == t || t
  }),
    (function (e) {
      Object.defineProperty(e, '__esModule', { value: !0 })
      const t = VA,
        n = ng,
        r = sg,
        o = cg,
        i = Hg,
        s = Eg,
        a = ER,
        c = pg,
        _ = fg,
        u = SO,
        E = Ug,
        l = Lg,
        T = uR,
        p = Yg,
        d = Ov,
        S = eR,
        f = Lh,
        A = Oh,
        h = vh,
        m = Mh,
        R = SI,
        g = bh,
        O = Iv,
        v = hI,
        I = gI,
        N = tN,
        y = LN,
        C = DN,
        L = zN,
        b = ny,
        M = OI,
        P = xv,
        U = vv,
        D = nN,
        w = _g,
        x = ay,
        V = dg,
        G = _y,
        B = gh,
        k = Dg,
        F = uy,
        H = ly,
        Y = gy,
        j = Ag,
        K = vy,
        W = Ly,
        q = xy,
        Q = jy,
        z = eC,
        $ = _C,
        X = wC,
        J = JC,
        Z = tL,
        ee = uL,
        te = AL,
        ne = ML,
        re = DL,
        oe = FL,
        ie = qL,
        se = _b,
        ae = db,
        ce = Kb,
        _e = aR,
        ue = Jb,
        Ee = EM,
        le = AM,
        Te = RM,
        pe = Ky,
        de = yM,
        Se = CM,
        fe = Uh,
        Ae = jg,
        he = PI,
        me = FA,
        Re = xC,
        ge = LM,
        Oe = kA,
        ve = fh,
        Ie = KA,
        Ne = Dh,
        ye = qM,
        Ce = QA,
        Le = Jg,
        be = cm,
        Me = $M,
        Pe = Xg,
        Ue = Ph,
        De = hL,
        we = wN,
        xe = uC,
        Ve = HC,
        Ge = th,
        Be = ZM,
        ke = Yh,
        Fe = bM,
        He = dm,
        Ye = rm,
        je = TR,
        Ke = zM,
        We = $g,
        qe = LI,
        Qe = GN,
        ze = pR,
        $e = lC,
        Xe = oP,
        Je = sN,
        Ze = iP,
        et = _P,
        tt = Om,
        nt = uP,
        rt = HA,
        ot = bv,
        it = lP,
        st = TP,
        at = dP,
        ct = AP,
        _t = hP,
        ut = SP,
        Et = RP,
        lt = gP
      ;(e.registerSpanErrorInstrumentation = t.registerSpanErrorInstrumentation),
        (e.getCapturedScopesOnSpan = n.getCapturedScopesOnSpan),
        (e.setCapturedScopesOnSpan = n.setCapturedScopesOnSpan),
        (e.addTracingExtensions = r.addTracingExtensions),
        (e.TRACING_DEFAULTS = o.TRACING_DEFAULTS),
        (e.startIdleSpan = o.startIdleSpan),
        (e.SentrySpan = i.SentrySpan),
        (e.SentryNonRecordingSpan = s.SentryNonRecordingSpan),
        (e.SPAN_STATUS_ERROR = a.SPAN_STATUS_ERROR),
        (e.SPAN_STATUS_OK = a.SPAN_STATUS_OK),
        (e.SPAN_STATUS_UNSET = a.SPAN_STATUS_UNSET),
        (e.getSpanStatusFromHttpCode = a.getSpanStatusFromHttpCode),
        (e.setHttpStatus = a.setHttpStatus),
        (e.continueTrace = c.continueTrace),
        (e.startInactiveSpan = c.startInactiveSpan),
        (e.startNewTrace = c.startNewTrace),
        (e.startSpan = c.startSpan),
        (e.startSpanManual = c.startSpanManual),
        (e.suppressTracing = c.suppressTracing),
        (e.withActiveSpan = c.withActiveSpan),
        (e.getDynamicSamplingContextFromClient = _.getDynamicSamplingContextFromClient),
        (e.getDynamicSamplingContextFromScope = _.getDynamicSamplingContextFromScope),
        (e.getDynamicSamplingContextFromSpan = _.getDynamicSamplingContextFromSpan),
        (e.spanToBaggageHeader = _.spanToBaggageHeader),
        (e.setMeasurement = u.setMeasurement),
        (e.timedEventsToMeasurements = u.timedEventsToMeasurements),
        (e.sampleSpan = E.sampleSpan),
        (e.logSpanEnd = l.logSpanEnd),
        (e.logSpanStart = l.logSpanStart),
        (e.SEMANTIC_ATTRIBUTE_CACHE_HIT = T.SEMANTIC_ATTRIBUTE_CACHE_HIT),
        (e.SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE = T.SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE),
        (e.SEMANTIC_ATTRIBUTE_CACHE_KEY = T.SEMANTIC_ATTRIBUTE_CACHE_KEY),
        (e.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = T.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME),
        (e.SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD = T.SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD),
        (e.SEMANTIC_ATTRIBUTE_PROFILE_ID = T.SEMANTIC_ATTRIBUTE_PROFILE_ID),
        (e.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME =
          T.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME),
        (e.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON =
          T.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON),
        (e.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT =
          T.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT),
        (e.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE =
          T.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE),
        (e.SEMANTIC_ATTRIBUTE_SENTRY_OP = T.SEMANTIC_ATTRIBUTE_SENTRY_OP),
        (e.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = T.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN),
        (e.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = T.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE),
        (e.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = T.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE),
        (e.SEMANTIC_ATTRIBUTE_URL_FULL = T.SEMANTIC_ATTRIBUTE_URL_FULL),
        (e.createEventEnvelope = p.createEventEnvelope),
        (e.createSessionEnvelope = p.createSessionEnvelope),
        (e.createSpanEnvelope = p.createSpanEnvelope),
        (e.addEventProcessor = d.addEventProcessor),
        (e.captureCheckIn = d.captureCheckIn),
        (e.captureEvent = d.captureEvent),
        (e.captureException = d.captureException),
        (e.captureMessage = d.captureMessage),
        (e.captureSession = d.captureSession),
        (e.close = d.close),
        (e.endSession = d.endSession),
        (e.flush = d.flush),
        (e.isEnabled = d.isEnabled),
        (e.isInitialized = d.isInitialized),
        (e.lastEventId = d.lastEventId),
        (e.setContext = d.setContext),
        (e.setExtra = d.setExtra),
        (e.setExtras = d.setExtras),
        (e.setTag = d.setTag),
        (e.setTags = d.setTags),
        (e.setUser = d.setUser),
        (e.startSession = d.startSession),
        (e.withMonitor = d.withMonitor),
        (e.getClient = S.getClient),
        (e.getCurrentScope = S.getCurrentScope),
        (e.getGlobalScope = S.getGlobalScope),
        (e.getIsolationScope = S.getIsolationScope),
        (e.getTraceContextFromScope = S.getTraceContextFromScope),
        (e.withIsolationScope = S.withIsolationScope),
        (e.withScope = S.withScope),
        (e.getDefaultCurrentScope = f.getDefaultCurrentScope),
        (e.getDefaultIsolationScope = f.getDefaultIsolationScope),
        (e.setAsyncContextStrategy = A.setAsyncContextStrategy),
        (e.getMainCarrier = h.getMainCarrier),
        (e.closeSession = m.closeSession),
        (e.makeSession = m.makeSession),
        (e.updateSession = m.updateSession),
        (e.SessionFlusher = R.SessionFlusher),
        (e.Scope = g.Scope),
        (e.notifyEventProcessors = O.notifyEventProcessors),
        (e.getEnvelopeEndpointWithUrlEncodedAuth = v.getEnvelopeEndpointWithUrlEncodedAuth),
        (e.getReportDialogEndpoint = v.getReportDialogEndpoint),
        (e.BaseClient = I.BaseClient),
        (e.ServerRuntimeClient = N.ServerRuntimeClient),
        (e.initAndBind = y.initAndBind),
        (e.setCurrentClient = y.setCurrentClient),
        (e.createTransport = C.createTransport),
        (e.makeOfflineTransport = L.makeOfflineTransport),
        (e.makeMultiplexedTransport = b.makeMultiplexedTransport),
        (e.addIntegration = M.addIntegration),
        (e.defineIntegration = M.defineIntegration),
        (e.getIntegrationsToSetup = M.getIntegrationsToSetup),
        (e.applyScopeDataToEvent = P.applyScopeDataToEvent),
        (e.mergeScopeData = P.mergeScopeData),
        (e.prepareEvent = U.prepareEvent),
        (e.createCheckInEnvelope = D.createCheckInEnvelope),
        (e.hasTracingEnabled = w.hasTracingEnabled),
        (e.isSentryRequestUrl = x.isSentryRequestUrl),
        (e.handleCallbackErrors = V.handleCallbackErrors),
        (e.parameterize = G.parameterize),
        (e.addChildSpanToSpan = B.addChildSpanToSpan),
        (e.getActiveSpan = B.getActiveSpan),
        (e.getRootSpan = B.getRootSpan),
        (e.getSpanDescendants = B.getSpanDescendants),
        (e.getStatusMessage = B.getStatusMessage),
        (e.spanIsSampled = B.spanIsSampled),
        (e.spanTimeInputToSeconds = B.spanTimeInputToSeconds),
        (e.spanToJSON = B.spanToJSON),
        (e.spanToTraceContext = B.spanToTraceContext),
        (e.spanToTraceHeader = B.spanToTraceHeader),
        (e.updateSpanName = B.updateSpanName),
        (e.parseSampleRate = k.parseSampleRate),
        (e.applySdkMetadata = F.applySdkMetadata),
        (e.getTraceData = H.getTraceData),
        (e.getTraceMetaTags = Y.getTraceMetaTags),
        (e.DEFAULT_ENVIRONMENT = j.DEFAULT_ENVIRONMENT),
        (e.addBreadcrumb = K.addBreadcrumb),
        (e.functionToStringIntegration = W.functionToStringIntegration),
        (e.inboundFiltersIntegration = q.inboundFiltersIntegration),
        (e.linkedErrorsIntegration = Q.linkedErrorsIntegration),
        (e.moduleMetadataIntegration = z.moduleMetadataIntegration),
        (e.requestDataIntegration = $.requestDataIntegration),
        (e.captureConsoleIntegration = X.captureConsoleIntegration),
        (e.debugIntegration = J.debugIntegration),
        (e.dedupeIntegration = Z.dedupeIntegration),
        (e.extraErrorDataIntegration = ee.extraErrorDataIntegration),
        (e.rewriteFramesIntegration = te.rewriteFramesIntegration),
        (e.sessionTimingIntegration = ne.sessionTimingIntegration),
        (e.zodErrorsIntegration = re.zodErrorsIntegration),
        (e.thirdPartyErrorFilterIntegration = oe.thirdPartyErrorFilterIntegration),
        (e.metrics = ie.metrics),
        (e.profiler = se.profiler),
        (e.metricsDefault = ae.metricsDefault),
        (e.BrowserMetricsAggregator = ce.BrowserMetricsAggregator),
        (e.getMetricSummaryJsonForSpan = _e.getMetricSummaryJsonForSpan),
        (e.addTracingHeadersToFetchRequest = ue.addTracingHeadersToFetchRequest),
        (e.instrumentFetchRequest = ue.instrumentFetchRequest),
        (e.trpcMiddleware = Ee.trpcMiddleware),
        (e.captureFeedback = le.captureFeedback),
        (e.getCurrentHub = Te.getCurrentHub),
        (e.getCurrentHubShim = Te.getCurrentHubShim),
        (e.applyAggregateErrorsToEvent = pe.applyAggregateErrorsToEvent),
        (e.flatten = de.flatten),
        (e.getBreadcrumbLogLevelFromHttpStatusCode = Se.getBreadcrumbLogLevelFromHttpStatusCode),
        (e.getComponentName = fe.getComponentName),
        (e.getDomElement = fe.getDomElement),
        (e.getLocationHref = fe.getLocationHref),
        (e.htmlTreeAsString = fe.htmlTreeAsString),
        (e.dsnFromString = Ae.dsnFromString),
        (e.dsnToString = Ae.dsnToString),
        (e.makeDsn = Ae.makeDsn),
        (e.SentryError = he.SentryError),
        (e.GLOBAL_OBJ = me.GLOBAL_OBJ),
        (e.getGlobalSingleton = me.getGlobalSingleton),
        (e.addConsoleInstrumentationHandler = Re.addConsoleInstrumentationHandler),
        (e.addFetchEndInstrumentationHandler = ge.addFetchEndInstrumentationHandler),
        (e.addFetchInstrumentationHandler = ge.addFetchInstrumentationHandler),
        (e.addGlobalErrorInstrumentationHandler = Oe.addGlobalErrorInstrumentationHandler),
        (e.addGlobalUnhandledRejectionInstrumentationHandler =
          ve.addGlobalUnhandledRejectionInstrumentationHandler),
        (e.addHandler = Ie.addHandler),
        (e.maybeInstrument = Ie.maybeInstrument),
        (e.resetInstrumentationHandlers = Ie.resetInstrumentationHandlers),
        (e.triggerHandlers = Ie.triggerHandlers),
        (e.isDOMError = Ne.isDOMError),
        (e.isDOMException = Ne.isDOMException),
        (e.isElement = Ne.isElement),
        (e.isError = Ne.isError),
        (e.isErrorEvent = Ne.isErrorEvent),
        (e.isEvent = Ne.isEvent),
        (e.isInstanceOf = Ne.isInstanceOf),
        (e.isParameterizedString = Ne.isParameterizedString),
        (e.isPlainObject = Ne.isPlainObject),
        (e.isPrimitive = Ne.isPrimitive),
        (e.isRegExp = Ne.isRegExp),
        (e.isString = Ne.isString),
        (e.isSyntheticEvent = Ne.isSyntheticEvent),
        (e.isThenable = Ne.isThenable),
        (e.isVueViewModel = Ne.isVueViewModel),
        (e.isBrowser = ye.isBrowser),
        (e.CONSOLE_LEVELS = Ce.CONSOLE_LEVELS),
        (e.consoleSandbox = Ce.consoleSandbox),
        (e.logger = Ce.logger),
        (e.originalConsoleMethods = Ce.originalConsoleMethods),
        (e.memoBuilder = Le.memoBuilder),
        (e.addContextToFrame = be.addContextToFrame),
        (e.addExceptionMechanism = be.addExceptionMechanism),
        (e.addExceptionTypeValue = be.addExceptionTypeValue),
        (e.arrayify = be.arrayify),
        (e.checkOrSetAlreadyCaught = be.checkOrSetAlreadyCaught),
        (e.getEventDescription = be.getEventDescription),
        (e.parseSemver = be.parseSemver),
        (e.uuid4 = be.uuid4),
        (e.dynamicRequire = Me.dynamicRequire),
        (e.isNodeEnv = Me.isNodeEnv),
        (e.loadModule = Me.loadModule),
        (e.normalize = Pe.normalize),
        (e.normalizeToSize = Pe.normalizeToSize),
        (e.normalizeUrlToBase = Pe.normalizeUrlToBase),
        (e.addNonEnumerableProperty = Ue.addNonEnumerableProperty),
        (e.convertToPlainObject = Ue.convertToPlainObject),
        (e.dropUndefinedKeys = Ue.dropUndefinedKeys),
        (e.extractExceptionKeysForMessage = Ue.extractExceptionKeysForMessage),
        (e.fill = Ue.fill),
        (e.getOriginalFunction = Ue.getOriginalFunction),
        (e.markFunctionWrapped = Ue.markFunctionWrapped),
        (e.objectify = Ue.objectify),
        (e.urlEncode = Ue.urlEncode),
        (e.basename = De.basename),
        (e.dirname = De.dirname),
        (e.isAbsolute = De.isAbsolute),
        (e.join = De.join),
        (e.normalizePath = De.normalizePath),
        (e.relative = De.relative),
        (e.resolve = De.resolve),
        (e.makePromiseBuffer = we.makePromiseBuffer),
        (e.DEFAULT_USER_INCLUDES = xe.DEFAULT_USER_INCLUDES),
        (e.addNormalizedRequestDataToEvent = xe.addNormalizedRequestDataToEvent),
        (e.addRequestDataToEvent = xe.addRequestDataToEvent),
        (e.extractPathForTransaction = xe.extractPathForTransaction),
        (e.extractQueryParamsFromUrl = xe.extractQueryParamsFromUrl),
        (e.extractRequestData = xe.extractRequestData),
        (e.headersToDict = xe.headersToDict),
        (e.httpRequestToRequestData = xe.httpRequestToRequestData),
        (e.winterCGHeadersToDict = xe.winterCGHeadersToDict),
        (e.winterCGRequestToRequestData = xe.winterCGRequestToRequestData),
        (e.severityLevelFromString = Ve.severityLevelFromString),
        (e.validSeverityLevels = Ve.validSeverityLevels),
        (e.UNKNOWN_FUNCTION = Ge.UNKNOWN_FUNCTION),
        (e.createStackParser = Ge.createStackParser),
        (e.getFramesFromEvent = Ge.getFramesFromEvent),
        (e.getFunctionName = Ge.getFunctionName),
        (e.stackParserFromStackParserOptions = Ge.stackParserFromStackParserOptions),
        (e.stripSentryFramesAndReverse = Ge.stripSentryFramesAndReverse),
        (e.filenameIsInApp = Be.filenameIsInApp),
        (e.node = Be.node),
        (e.nodeStackLineParser = Be.nodeStackLineParser),
        (e.isMatchingPattern = ke.isMatchingPattern),
        (e.safeJoin = ke.safeJoin),
        (e.snipLine = ke.snipLine),
        (e.stringMatchesSomePattern = ke.stringMatchesSomePattern),
        (e.truncate = ke.truncate),
        (e.isNativeFunction = Fe.isNativeFunction),
        (e.supportsDOMError = Fe.supportsDOMError),
        (e.supportsDOMException = Fe.supportsDOMException),
        (e.supportsErrorEvent = Fe.supportsErrorEvent),
        (e.supportsFetch = Fe.supportsFetch),
        (e.supportsNativeFetch = Fe.supportsNativeFetch),
        (e.supportsReferrerPolicy = Fe.supportsReferrerPolicy),
        (e.supportsReportingObserver = Fe.supportsReportingObserver),
        (e.SyncPromise = He.SyncPromise),
        (e.rejectedSyncPromise = He.rejectedSyncPromise),
        (e.resolvedSyncPromise = He.resolvedSyncPromise),
        Object.defineProperty(e, '_browserPerformanceTimeOriginMode', {
          enumerable: !0,
          get: () => Ye._browserPerformanceTimeOriginMode,
        }),
        (e.browserPerformanceTimeOrigin = Ye.browserPerformanceTimeOrigin),
        (e.dateTimestampInSeconds = Ye.dateTimestampInSeconds),
        (e.timestampInSeconds = Ye.timestampInSeconds),
        (e.TRACEPARENT_REGEXP = je.TRACEPARENT_REGEXP),
        (e.extractTraceparentData = je.extractTraceparentData),
        (e.generateSentryTraceHeader = je.generateSentryTraceHeader),
        (e.propagationContextFromHeaders = je.propagationContextFromHeaders),
        (e.getSDKSource = Ke.getSDKSource),
        (e.isBrowserBundle = Ke.isBrowserBundle),
        (e.addItemToEnvelope = We.addItemToEnvelope),
        (e.createAttachmentEnvelopeItem = We.createAttachmentEnvelopeItem),
        (e.createEnvelope = We.createEnvelope),
        (e.createEventEnvelopeHeaders = We.createEventEnvelopeHeaders),
        (e.createSpanEnvelopeItem = We.createSpanEnvelopeItem),
        (e.envelopeContainsItemType = We.envelopeContainsItemType),
        (e.envelopeItemTypeToDataCategory = We.envelopeItemTypeToDataCategory),
        (e.forEachEnvelopeItem = We.forEachEnvelopeItem),
        (e.getSdkMetadataForEnvelopeHeader = We.getSdkMetadataForEnvelopeHeader),
        (e.parseEnvelope = We.parseEnvelope),
        (e.serializeEnvelope = We.serializeEnvelope),
        (e.createClientReportEnvelope = qe.createClientReportEnvelope),
        (e.DEFAULT_RETRY_AFTER = Qe.DEFAULT_RETRY_AFTER),
        (e.disabledUntil = Qe.disabledUntil),
        (e.isRateLimited = Qe.isRateLimited),
        (e.parseRetryAfterHeader = Qe.parseRetryAfterHeader),
        (e.updateRateLimits = Qe.updateRateLimits),
        (e.BAGGAGE_HEADER_NAME = ze.BAGGAGE_HEADER_NAME),
        (e.MAX_BAGGAGE_STRING_LENGTH = ze.MAX_BAGGAGE_STRING_LENGTH),
        (e.SENTRY_BAGGAGE_KEY_PREFIX = ze.SENTRY_BAGGAGE_KEY_PREFIX),
        (e.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = ze.SENTRY_BAGGAGE_KEY_PREFIX_REGEX),
        (e.baggageHeaderToDynamicSamplingContext = ze.baggageHeaderToDynamicSamplingContext),
        (e.dynamicSamplingContextToSentryBaggageHeader =
          ze.dynamicSamplingContextToSentryBaggageHeader),
        (e.parseBaggageHeader = ze.parseBaggageHeader),
        (e.getNumberOfUrlSegments = $e.getNumberOfUrlSegments),
        (e.getSanitizedUrlString = $e.getSanitizedUrlString),
        (e.parseUrl = $e.parseUrl),
        (e.stripUrlQueryAndFragment = $e.stripUrlQueryAndFragment),
        (e.makeFifoCache = Xe.makeFifoCache),
        (e.eventFromMessage = Je.eventFromMessage),
        (e.eventFromUnknownInput = Je.eventFromUnknownInput),
        (e.exceptionFromError = Je.exceptionFromError),
        (e.parseStackFrames = Je.parseStackFrames),
        (e.callFrameToStackFrame = Ze.callFrameToStackFrame),
        (e.watchdogTimer = Ze.watchdogTimer),
        (e.LRUMap = et.LRUMap),
        (e.generatePropagationContext = tt.generatePropagationContext),
        (e.generateSpanId = tt.generateSpanId),
        (e.generateTraceId = tt.generateTraceId),
        (e.vercelWaitUntil = nt.vercelWaitUntil),
        (e.SDK_VERSION = rt.SDK_VERSION),
        (e.getDebugImagesForResources = ot.getDebugImagesForResources),
        (e.getFilenameToDebugIdMap = ot.getFilenameToDebugIdMap),
        (e.escapeStringForRegex = it.escapeStringForRegex),
        (e.supportsHistory = st.supportsHistory),
        (e._asyncNullishCoalesce = at._asyncNullishCoalesce),
        (e._asyncOptionalChain = ct._asyncOptionalChain),
        (e._asyncOptionalChainDelete = _t._asyncOptionalChainDelete),
        (e._nullishCoalesce = ut._nullishCoalesce),
        (e._optionalChain = Et._optionalChain),
        (e._optionalChainDelete = lt._optionalChainDelete)
    })(xA)
  var vP = {
      name: '@imqa/instrumentation-exception',
      version: '0.0.12',
      homepage: 'https://www.imqa.io',
      repository: { type: 'git', url: 'https://github.com/onycom-imqa/imqa-js.git' },
      publishConfig: { access: 'public' },
      files: ['build/*'],
      main: 'build/src/index.js',
      scripts: {
        clean: 'rimraf coverage build tmp',
        prebuild: 'npm run clean',
        build: 'tsc -p tsconfig.release.json',
        postbuild: 'npm run build:types',
        'build:types': 'tsc -d -p tsconfig.release.json --declarationMap --emitDeclarationOnly',
        'build:watch': 'tsc -w -p tsconfig.json',
        lint: 'eslint .',
        'ci:lint': 'yarn lint && yarn tsc --noEmit',
        prettier: 'prettier --config .prettierrc --write .',
        test: 'jest',
        'test:watch': 'jest --watch',
        typecheck: 'tsc --noEmit',
      },
      dependencies: {
        '@imqa/instrumentation-node': '^0.0.12',
        '@imqa/meta': '0.0.11',
        '@imqa/session': '0.0.12',
        '@opentelemetry/core': '^1.30.1',
        '@opentelemetry/instrumentation': '^0.57.2',
        '@opentelemetry/semantic-conventions': '^1.30.0',
        '@sentry/core': '^8.7.0',
        '@sentry/types': '^8.7.0',
        '@sentry/utils': '^8.7.0',
        'json-stringify-safe': '^5.0.1',
        shimmer: '^1.2.1',
        tslib: '^2.8.1',
      },
      devDependencies: {
        '@opentelemetry/api': '^1.9.0',
        '@types/jest': '^29.5.14',
        jest: '^29.7.0',
        'ts-jest': '^29.2.6',
      },
      peerDependencies: { '@opentelemetry/api': '^1.3.0' },
      nx: { tags: ['package'] },
    },
    IP = {},
    NP = {},
    {
      _asyncNullishCoalesce: yP,
      _asyncOptionalChain: CP,
      _asyncOptionalChainDelete: LP,
      _nullishCoalesce: bP,
      _optionalChain: MP,
      _optionalChainDelete: PP,
    } = xA
  Object.defineProperty(NP, '__esModule', { value: !0 })
  const UP = xA.applyAggregateErrorsToEvent,
    DP = xA.getBreadcrumbLogLevelFromHttpStatusCode,
    wP = xA.dsnFromString,
    xP = xA.dsnToString,
    VP = xA.makeDsn,
    GP = xA.SentryError,
    BP = xA.GLOBAL_OBJ,
    kP = xA.getGlobalSingleton,
    FP = xA.addConsoleInstrumentationHandler,
    HP = xA.addFetchEndInstrumentationHandler,
    YP = xA.addFetchInstrumentationHandler,
    jP = xA.addGlobalErrorInstrumentationHandler,
    KP = xA.addGlobalUnhandledRejectionInstrumentationHandler,
    WP = xA.addHandler,
    qP = xA.maybeInstrument,
    QP = xA.resetInstrumentationHandlers,
    zP = xA.triggerHandlers,
    $P = xA.isDOMError,
    XP = xA.isDOMException,
    JP = xA.isElement,
    ZP = xA.isError,
    eU = xA.isErrorEvent,
    tU = xA.isEvent,
    nU = xA.isInstanceOf,
    rU = xA.isParameterizedString,
    oU = xA.isPlainObject,
    iU = xA.isPrimitive,
    sU = xA.isRegExp,
    aU = xA.isString,
    cU = xA.isSyntheticEvent,
    _U = xA.isThenable,
    uU = xA.isVueViewModel,
    EU = xA.isBrowser,
    lU = xA.CONSOLE_LEVELS,
    TU = xA.consoleSandbox,
    pU = xA.logger,
    dU = xA.originalConsoleMethods,
    SU = xA.addContextToFrame,
    fU = xA.addExceptionMechanism,
    AU = xA.addExceptionTypeValue,
    hU = xA.checkOrSetAlreadyCaught,
    mU = xA.getEventDescription,
    RU = xA.parseSemver,
    gU = xA.uuid4,
    OU = xA.normalize,
    vU = xA.normalizeToSize,
    IU = xA.addNonEnumerableProperty,
    NU = xA.convertToPlainObject,
    yU = xA.dropUndefinedKeys,
    CU = xA.extractExceptionKeysForMessage,
    LU = xA.fill,
    bU = xA.getOriginalFunction,
    MU = xA.markFunctionWrapped,
    PU = xA.objectify,
    UU = xA.makePromiseBuffer,
    DU = xA.addNormalizedRequestDataToEvent,
    wU = xA.winterCGHeadersToDict,
    xU = xA.winterCGRequestToRequestData,
    VU = xA.severityLevelFromString,
    GU = xA.validSeverityLevels,
    BU = xA.UNKNOWN_FUNCTION,
    kU = xA.createStackParser,
    FU = xA.getFramesFromEvent,
    HU = xA.getFunctionName,
    YU = xA.stackParserFromStackParserOptions,
    jU = xA.stripSentryFramesAndReverse,
    KU = xA.filenameIsInApp,
    WU = xA.node,
    qU = xA.nodeStackLineParser,
    QU = xA.isMatchingPattern,
    zU = xA.safeJoin,
    $U = xA.snipLine,
    XU = xA.stringMatchesSomePattern,
    JU = xA.truncate,
    ZU = xA.SyncPromise,
    eD = xA.rejectedSyncPromise,
    tD = xA.resolvedSyncPromise,
    nD = xA.dateTimestampInSeconds,
    rD = xA.timestampInSeconds,
    oD = xA.TRACEPARENT_REGEXP,
    iD = xA.extractTraceparentData,
    sD = xA.generateSentryTraceHeader,
    aD = xA.propagationContextFromHeaders,
    cD = xA.getSDKSource,
    _D = xA.isBrowserBundle,
    uD = xA.MAX_BAGGAGE_STRING_LENGTH,
    ED = xA.SENTRY_BAGGAGE_KEY_PREFIX,
    lD = xA.SENTRY_BAGGAGE_KEY_PREFIX_REGEX,
    TD = xA.baggageHeaderToDynamicSamplingContext,
    pD = xA.dynamicSamplingContextToSentryBaggageHeader,
    dD = xA.parseBaggageHeader,
    SD = xA.addItemToEnvelope,
    fD = xA.createAttachmentEnvelopeItem,
    AD = xA.createEnvelope,
    hD = xA.createEventEnvelopeHeaders,
    mD = xA.createSpanEnvelopeItem,
    RD = xA.envelopeContainsItemType,
    gD = xA.envelopeItemTypeToDataCategory,
    OD = xA.forEachEnvelopeItem,
    vD = xA.getSdkMetadataForEnvelopeHeader,
    ID = xA.parseEnvelope,
    ND = xA.serializeEnvelope,
    yD = xA.createClientReportEnvelope,
    CD = xA.DEFAULT_RETRY_AFTER,
    LD = xA.disabledUntil,
    bD = xA.isRateLimited,
    MD = xA.parseRetryAfterHeader,
    PD = xA.updateRateLimits,
    UD = xA.eventFromMessage,
    DD = xA.eventFromUnknownInput,
    wD = xA.exceptionFromError,
    xD = xA.parseStackFrames,
    VD = xA.callFrameToStackFrame,
    GD = xA.watchdogTimer,
    BD = xA.LRUMap,
    kD = xA.generatePropagationContext,
    FD = xA.vercelWaitUntil,
    HD = xA.SDK_VERSION,
    YD = xA.getDebugImagesForResources,
    jD = xA.getFilenameToDebugIdMap,
    KD = xA.escapeStringForRegex,
    WD = xA.basename,
    qD = xA.dirname,
    QD = xA.isAbsolute,
    zD = xA.join,
    $D = xA.normalizePath,
    XD = xA.relative,
    JD = xA.resolve,
    ZD = xA.getComponentName,
    ew = xA.getDomElement,
    tw = xA.getLocationHref,
    nw = xA.htmlTreeAsString,
    rw = xA.isNativeFunction,
    ow = xA.supportsDOMError,
    iw = xA.supportsDOMException,
    sw = xA.supportsErrorEvent,
    aw = xA.supportsFetch,
    cw = xA.supportsNativeFetch,
    _w = xA.supportsReferrerPolicy,
    uw = xA.supportsReportingObserver,
    Ew = xA._browserPerformanceTimeOriginMode,
    lw = xA.browserPerformanceTimeOrigin,
    Tw = xA.supportsHistory,
    pw = xA.dynamicRequire,
    dw = xA.isNodeEnv,
    Sw = xA.loadModule,
    fw = xA.flatten,
    Aw = xA.memoBuilder,
    hw = xA.arrayify,
    mw = xA.normalizeUrlToBase,
    Rw = xA.urlEncode,
    gw = xA.extractPathForTransaction,
    Ow = xA.DEFAULT_USER_INCLUDES,
    vw = xA.extractRequestData,
    Iw = xA.addRequestDataToEvent,
    Nw = xA.BAGGAGE_HEADER_NAME,
    yw = xA.getNumberOfUrlSegments,
    Cw = xA.getSanitizedUrlString,
    Lw = xA.parseUrl,
    bw = xA.stripUrlQueryAndFragment,
    Mw = xA.makeFifoCache
  ;(NP.BAGGAGE_HEADER_NAME = Nw),
    (NP.CONSOLE_LEVELS = lU),
    (NP.DEFAULT_RETRY_AFTER = CD),
    (NP.DEFAULT_USER_INCLUDES = Ow),
    (NP.GLOBAL_OBJ = BP),
    (NP.LRUMap = BD),
    (NP.MAX_BAGGAGE_STRING_LENGTH = uD),
    (NP.SDK_VERSION = HD),
    (NP.SENTRY_BAGGAGE_KEY_PREFIX = ED),
    (NP.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = lD),
    (NP.SentryError = GP),
    (NP.SyncPromise = ZU),
    (NP.TRACEPARENT_REGEXP = oD),
    (NP.UNKNOWN_FUNCTION = BU),
    (NP._asyncNullishCoalesce = yP),
    (NP._asyncOptionalChain = CP),
    (NP._asyncOptionalChainDelete = LP),
    (NP._browserPerformanceTimeOriginMode = Ew),
    (NP._nullishCoalesce = bP),
    (NP._optionalChain = MP),
    (NP._optionalChainDelete = PP),
    (NP.addConsoleInstrumentationHandler = FP),
    (NP.addContextToFrame = SU),
    (NP.addExceptionMechanism = fU),
    (NP.addExceptionTypeValue = AU),
    (NP.addFetchEndInstrumentationHandler = HP),
    (NP.addFetchInstrumentationHandler = YP),
    (NP.addGlobalErrorInstrumentationHandler = jP),
    (NP.addGlobalUnhandledRejectionInstrumentationHandler = KP),
    (NP.addHandler = WP),
    (NP.addItemToEnvelope = SD),
    (NP.addNonEnumerableProperty = IU),
    (NP.addNormalizedRequestDataToEvent = DU),
    (NP.addRequestDataToEvent = Iw),
    (NP.applyAggregateErrorsToEvent = UP),
    (NP.arrayify = hw),
    (NP.baggageHeaderToDynamicSamplingContext = TD),
    (NP.basename = WD),
    (NP.browserPerformanceTimeOrigin = lw),
    (NP.callFrameToStackFrame = VD),
    (NP.checkOrSetAlreadyCaught = hU),
    (NP.consoleSandbox = TU),
    (NP.convertToPlainObject = NU),
    (NP.createAttachmentEnvelopeItem = fD),
    (NP.createClientReportEnvelope = yD),
    (NP.createEnvelope = AD),
    (NP.createEventEnvelopeHeaders = hD),
    (NP.createSpanEnvelopeItem = mD),
    (NP.createStackParser = kU),
    (NP.dateTimestampInSeconds = nD),
    (NP.dirname = qD),
    (NP.disabledUntil = LD),
    (NP.dropUndefinedKeys = yU),
    (NP.dsnFromString = wP),
    (NP.dsnToString = xP),
    (NP.dynamicRequire = pw),
    (NP.dynamicSamplingContextToSentryBaggageHeader = pD),
    (NP.envelopeContainsItemType = RD),
    (NP.envelopeItemTypeToDataCategory = gD),
    (NP.escapeStringForRegex = KD),
    (NP.eventFromMessage = UD),
    (NP.eventFromUnknownInput = DD),
    (NP.exceptionFromError = wD),
    (NP.extractExceptionKeysForMessage = CU),
    (NP.extractPathForTransaction = gw),
    (NP.extractRequestData = vw),
    (NP.extractTraceparentData = iD),
    (NP.filenameIsInApp = KU),
    (NP.fill = LU),
    (NP.flatten = fw),
    (NP.forEachEnvelopeItem = OD),
    (NP.generatePropagationContext = kD),
    (NP.generateSentryTraceHeader = sD),
    (NP.getBreadcrumbLogLevelFromHttpStatusCode = DP),
    (NP.getComponentName = ZD),
    (NP.getDebugImagesForResources = YD),
    (NP.getDomElement = ew),
    (NP.getEventDescription = mU),
    (NP.getFilenameToDebugIdMap = jD),
    (NP.getFramesFromEvent = FU),
    (NP.getFunctionName = HU),
    (NP.getGlobalSingleton = kP),
    (NP.getLocationHref = tw),
    (NP.getNumberOfUrlSegments = yw),
    (NP.getOriginalFunction = bU),
    (NP.getSDKSource = cD),
    (NP.getSanitizedUrlString = Cw),
    (NP.getSdkMetadataForEnvelopeHeader = vD),
    (NP.htmlTreeAsString = nw),
    (NP.isAbsolute = QD),
    (NP.isBrowser = EU),
    (NP.isBrowserBundle = _D),
    (NP.isDOMError = $P),
    (NP.isDOMException = XP),
    (NP.isElement = JP),
    (NP.isError = ZP),
    (NP.isErrorEvent = eU),
    (NP.isEvent = tU),
    (NP.isInstanceOf = nU),
    (NP.isMatchingPattern = QU),
    (NP.isNativeFunction = rw),
    (NP.isNodeEnv = dw),
    (NP.isParameterizedString = rU),
    (NP.isPlainObject = oU),
    (NP.isPrimitive = iU),
    (NP.isRateLimited = bD),
    (NP.isRegExp = sU),
    (NP.isString = aU),
    (NP.isSyntheticEvent = cU),
    (NP.isThenable = _U),
    (NP.isVueViewModel = uU),
    (NP.join = zD),
    (NP.loadModule = Sw),
    (NP.logger = pU),
    (NP.makeDsn = VP),
    (NP.makeFifoCache = Mw),
    (NP.makePromiseBuffer = UU),
    (NP.markFunctionWrapped = MU),
    (NP.maybeInstrument = qP),
    (NP.memoBuilder = Aw),
    (NP.node = WU),
    (NP.nodeStackLineParser = qU),
    (NP.normalize = OU),
    (NP.normalizePath = $D),
    (NP.normalizeToSize = vU),
    (NP.normalizeUrlToBase = mw),
    (NP.objectify = PU),
    (NP.originalConsoleMethods = dU),
    (NP.parseBaggageHeader = dD),
    (NP.parseEnvelope = ID),
    (NP.parseRetryAfterHeader = MD),
    (NP.parseSemver = RU),
    (NP.parseStackFrames = xD),
    (NP.parseUrl = Lw),
    (NP.propagationContextFromHeaders = aD),
    (NP.rejectedSyncPromise = eD),
    (NP.relative = XD),
    (NP.resetInstrumentationHandlers = QP),
    (NP.resolve = JD),
    (NP.resolvedSyncPromise = tD),
    (NP.safeJoin = zU),
    (NP.serializeEnvelope = ND),
    (NP.severityLevelFromString = VU),
    (NP.snipLine = $U),
    (NP.stackParserFromStackParserOptions = YU),
    (NP.stringMatchesSomePattern = XU),
    (NP.stripSentryFramesAndReverse = jU),
    (NP.stripUrlQueryAndFragment = bw),
    (NP.supportsDOMError = ow),
    (NP.supportsDOMException = iw),
    (NP.supportsErrorEvent = sw),
    (NP.supportsFetch = aw),
    (NP.supportsHistory = Tw),
    (NP.supportsNativeFetch = cw),
    (NP.supportsReferrerPolicy = _w),
    (NP.supportsReportingObserver = uw),
    (NP.timestampInSeconds = rD),
    (NP.triggerHandlers = zP),
    (NP.truncate = JU),
    (NP.updateRateLimits = PD),
    (NP.urlEncode = Rw),
    (NP.uuid4 = gU),
    (NP.validSeverityLevels = GU),
    (NP.vercelWaitUntil = FD),
    (NP.watchdogTimer = GD),
    (NP.winterCGHeadersToDict = wU),
    (NP.winterCGRequestToRequestData = xU),
    Object.defineProperty(IP, '__esModule', { value: !0 }),
    (IP.exceptionFromError = Dw),
    (IP.eventFromException = function (e, t, n, r) {
      const o = (n && n.syntheticException) || void 0,
        i = kw(e, t, o, r)
      ;(0, Uw.addExceptionMechanism)(i),
        (i.level = 'error'),
        n && n.event_id && (i.event_id = n.event_id)
      return (0, Uw.resolvedSyncPromise)(i)
    }),
    (IP.eventFromMessage = function (e, t, n = 'info', r, o) {
      const i = (r && r.syntheticException) || void 0,
        s = Fw(e, t, i, o)
      ;(s.level = n), r && r.event_id && (s.event_id = r.event_id)
      return (0, Uw.resolvedSyncPromise)(s)
    }),
    (IP.eventFromUnknownInput = kw)
  const Pw = xA,
    Uw = NP
  function Dw(e, t) {
    const n = Vw(e, t),
      r = { type: t && t.name, value: Bw(t) }
    return (
      n.length && (r.stacktrace = { frames: n }),
      void 0 === r.type && '' === r.value && (r.value = 'Unrecoverable error caught'),
      r
    )
  }
  function ww(e, t, n, r) {
    const o = (0, Pw.getClient)(),
      i = o && o.getOptions().normalizeDepth,
      s = (function (e) {
        for (const t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) {
            const n = e[t]
            if (n instanceof Error) return n
          }
        return
      })(t),
      a = { __serialized__: (0, Uw.normalizeToSize)(t, i) }
    if (s) return { exception: { values: [Dw(e, s)] }, extra: a }
    const c = {
      exception: {
        values: [
          {
            type: (0, Uw.isEvent)(t) ? t.constructor.name : r ? 'UnhandledRejection' : 'Error',
            value: Hw(t, { isUnhandledRejection: r }),
          },
        ],
      },
      extra: a,
    }
    if (n) {
      const t = Vw(e, n)
      t.length && (c.exception.values[0].stacktrace = { frames: t })
    }
    return c
  }
  function xw(e, t) {
    return { exception: { values: [Dw(e, t)] } }
  }
  function Vw(e, t) {
    const n = t.stacktrace || t.stack || '',
      r = (function (e) {
        if (e && Gw.test(e.message)) return 1
        return 0
      })(t),
      o = (function (e) {
        if ('number' == typeof e.framesToPop) return e.framesToPop
        return 0
      })(t)
    try {
      return e(n, r, o)
    } catch (e) {}
    return []
  }
  const Gw = /Minified React error #\d+;/i
  function Bw(e) {
    const t = e && e.message
    return t
      ? t.error && 'string' == typeof t.error.message
        ? t.error.message
        : t
      : 'No error message'
  }
  function kw(e, t, n, r, o) {
    let i
    if ((0, Uw.isErrorEvent)(t) && t.error) {
      return xw(e, t.error)
    }
    if ((0, Uw.isDOMError)(t) || (0, Uw.isDOMException)(t)) {
      const o = t
      if ('stack' in t) i = xw(e, t)
      else {
        const t = o.name || ((0, Uw.isDOMError)(o) ? 'DOMError' : 'DOMException'),
          s = o.message ? `${t}: ${o.message}` : t
        ;(i = Fw(e, s, n, r)), (0, Uw.addExceptionTypeValue)(i, s)
      }
      return 'code' in o && (i.tags = { ...i.tags, 'DOMException.code': `${o.code}` }), i
    }
    if ((0, Uw.isError)(t)) return xw(e, t)
    if ((0, Uw.isPlainObject)(t) || (0, Uw.isEvent)(t)) {
      return (i = ww(e, t, n, o)), (0, Uw.addExceptionMechanism)(i, { synthetic: !0 }), i
    }
    return (
      (i = Fw(e, t, n, r)),
      (0, Uw.addExceptionTypeValue)(i, `${t}`, void 0),
      (0, Uw.addExceptionMechanism)(i, { synthetic: !0 }),
      i
    )
  }
  function Fw(e, t, n, r) {
    const o = {}
    if (r && n) {
      const r = Vw(e, n)
      r.length && (o.exception = { values: [{ value: t, stacktrace: { frames: r } }] })
    }
    if ((0, Uw.isParameterizedString)(t)) {
      const { __sentry_template_string__: e, __sentry_template_values__: n } = t
      return (o.logentry = { message: e, params: n }), o
    }
    return (o.message = t), o
  }
  function Hw(e, { isUnhandledRejection: t }) {
    const n = (0, Uw.extractExceptionKeysForMessage)(e),
      r = t ? 'promise rejection' : 'exception'
    if ((0, Uw.isErrorEvent)(e))
      return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    if ((0, Uw.isEvent)(e)) {
      return `Event \`${(function (e) {
        try {
          const t = Object.getPrototypeOf(e)
          return t ? t.constructor.name : void 0
        } catch (e) {}
      })(e)}\` (type=${e.type}) captured as ${r}`
    }
    return `Object captured as ${r} with keys: ${n}`
  }
  var Yw = {},
    jw = {}
  Object.defineProperty(jw, '__esModule', { value: !0 }),
    (jw.WINDOW = void 0),
    (jw.shouldIgnoreOnError = function () {
      return qw > 0
    }),
    (jw.ignoreNextOnError = Qw),
    (jw.wrap = function e(t, n = {}, r) {
      if ('function' != typeof t) return t
      try {
        const e = t.__sentry_wrapped__
        if (e) return e
        if ((0, Ww.getOriginalFunction)(t)) return t
      } catch (e) {
        return t
      }
      const o = function () {
        const o = Array.prototype.slice.call(arguments)
        try {
          r && 'function' == typeof r && r.apply(this, arguments)
          const i = o.map((t) => e(t, n))
          return t.apply(this, i)
        } catch (e) {
          throw (
            (Qw(),
            (0, Kw.withScope)((t) => {
              t.addEventProcessor(
                (e) => (
                  n.mechanism &&
                    ((0, Ww.addExceptionTypeValue)(e, void 0, void 0),
                    (0, Ww.addExceptionMechanism)(e, n.mechanism)),
                  (e.extra = { ...e.extra, arguments: o }),
                  e
                ),
              ),
                (0, Kw.captureException)(e)
            }),
            e)
          )
        }
      }
      try {
        for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e])
      } catch (e) {}
      ;(0, Ww.markFunctionWrapped)(o, t),
        (0, Ww.addNonEnumerableProperty)(t, '__sentry_wrapped__', o)
      try {
        Object.getOwnPropertyDescriptor(o, 'name').configurable &&
          Object.defineProperty(o, 'name', { get: () => t.name })
      } catch (e) {}
      return o
    })
  const Kw = xA,
    Ww = NP
  jw.WINDOW = Ww.GLOBAL_OBJ
  let qw = 0
  function Qw() {
    qw++,
      setTimeout(() => {
        qw--
      })
  }
  Object.defineProperty(Yw, '__esModule', { value: !0 }), (Yw.browserApiErrorsIntegration = void 0)
  const zw = xA,
    $w = NP,
    Xw = jw,
    Jw = [
      'EventTarget',
      'Window',
      'Node',
      'ApplicationCache',
      'AudioTrackList',
      'BroadcastChannel',
      'ChannelMergerNode',
      'CryptoOperation',
      'EventSource',
      'FileReader',
      'HTMLUnknownElement',
      'IDBDatabase',
      'IDBRequest',
      'IDBTransaction',
      'KeyOperation',
      'MediaController',
      'MessagePort',
      'ModalWindow',
      'Notification',
      'SVGElementInstance',
      'Screen',
      'SharedWorker',
      'TextTrack',
      'TextTrackCue',
      'TextTrackList',
      'WebSocket',
      'WebSocketWorker',
      'Worker',
      'XMLHttpRequest',
      'XMLHttpRequestEventTarget',
      'XMLHttpRequestUpload',
    ]
  function Zw(e) {
    return function (...t) {
      const n = t[0]
      return (
        (t[0] = (0, Xw.wrap)(n, {
          mechanism: {
            data: { function: (0, $w.getFunctionName)(e) },
            handled: !1,
            type: 'instrument',
          },
        })),
        e.apply(this, t)
      )
    }
  }
  function ex(e) {
    return function (t) {
      return e.apply(this, [
        (0, Xw.wrap)(t, {
          mechanism: {
            data: { function: 'requestAnimationFrame', handler: (0, $w.getFunctionName)(e) },
            handled: !1,
            type: 'instrument',
          },
        }),
      ])
    }
  }
  function tx(e) {
    return function (...t) {
      const n = this
      return (
        ['onload', 'onerror', 'onprogress', 'onreadystatechange'].forEach((e) => {
          e in n &&
            'function' == typeof n[e] &&
            (0, $w.fill)(n, e, function (t) {
              const n = {
                  mechanism: {
                    data: { function: e, handler: (0, $w.getFunctionName)(t) },
                    handled: !1,
                    type: 'instrument',
                  },
                },
                r = (0, $w.getOriginalFunction)(t)
              return (
                r && (n.mechanism.data.handler = (0, $w.getFunctionName)(r)), (0, Xw.wrap)(t, n)
              )
            })
        }),
        e.apply(this, t)
      )
    }
  }
  function nx(e) {
    const t = Xw.WINDOW,
      n = t[e] && t[e].prototype
    n &&
      n.hasOwnProperty &&
      n.hasOwnProperty('addEventListener') &&
      ((0, $w.fill)(n, 'addEventListener', function (t) {
        return function (n, r, o) {
          try {
            'function' == typeof r.handleEvent &&
              (r.handleEvent = (0, Xw.wrap)(r.handleEvent, {
                mechanism: {
                  data: { function: 'handleEvent', handler: (0, $w.getFunctionName)(r), target: e },
                  handled: !1,
                  type: 'instrument',
                },
              }))
          } catch (e) {}
          return t.apply(this, [
            n,
            (0, Xw.wrap)(r, {
              mechanism: {
                data: {
                  function: 'addEventListener',
                  handler: (0, $w.getFunctionName)(r),
                  target: e,
                },
                handled: !1,
                type: 'instrument',
              },
            }),
            o,
          ])
        }
      }),
      (0, $w.fill)(n, 'removeEventListener', function (e) {
        return function (t, n, r) {
          const o = n
          try {
            const n = o && o.__sentry_wrapped__
            n && e.call(this, t, n, r)
          } catch (e) {}
          return e.call(this, t, o, r)
        }
      }))
  }
  Yw.browserApiErrorsIntegration = (0, zw.defineIntegration)((e = {}) => {
    const t = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      ...e,
    }
    return {
      name: 'BrowserApiErrors',
      setupOnce() {
        t.setTimeout && (0, $w.fill)(Xw.WINDOW, 'setTimeout', Zw),
          t.setInterval && (0, $w.fill)(Xw.WINDOW, 'setInterval', Zw),
          t.requestAnimationFrame && (0, $w.fill)(Xw.WINDOW, 'requestAnimationFrame', ex),
          t.XMLHttpRequest &&
            'XMLHttpRequest' in Xw.WINDOW &&
            (0, $w.fill)(XMLHttpRequest.prototype, 'send', tx)
        const e = t.eventTarget
        if (e) {
          ;(Array.isArray(e) ? e : Jw).forEach(nx)
        }
      },
    }
  })
  var rx = {}
  Object.defineProperty(rx, '__esModule', { value: !0 }),
    (rx.contextLinesIntegration = void 0),
    (rx.applySourceContextToFrame = ax)
  const ox = xA,
    ix = NP,
    sx = ix.GLOBAL_OBJ
  function ax(e, t, n, r) {
    return e.filename === n && e.lineno && t.length ? ((0, ix.addContextToFrame)(t, e, r), e) : e
  }
  rx.contextLinesIntegration = (0, ox.defineIntegration)((e = {}) => {
    const t = null != e.frameContextLines ? e.frameContextLines : 7
    return {
      name: 'ContextLines',
      processEvent: (e) =>
        (function (e, t) {
          const n = sx.document,
            r = sx.location && (0, ix.stripUrlQueryAndFragment)(sx.location.href)
          if (!n || !r) return e
          const o = e.exception && e.exception.values
          if (!o || !o.length) return e
          const i = n.documentElement.innerHTML
          if (!i) return e
          const s = ['<!DOCTYPE html>', '<html>', ...i.split('\n'), '</html>']
          return (
            o.forEach((e) => {
              const n = e.stacktrace
              n && n.frames && (n.frames = n.frames.map((e) => ax(e, s, r, t)))
            }),
            e
          )
        })(e, t),
    }
  })
  var cx = {}
  Object.defineProperty(cx, '__esModule', { value: !0 }), (cx.httpContextIntegration = void 0)
  const _x = xA,
    ux = jw
  cx.httpContextIntegration = (0, _x.defineIntegration)(() => ({
    name: 'HttpContext',
    preprocessEvent(e) {
      if (!ux.WINDOW.navigator && !ux.WINDOW.location && !ux.WINDOW.document) return
      const t = (e.request && e.request.url) || (ux.WINDOW.location && ux.WINDOW.location.href),
        { referrer: n } = ux.WINDOW.document || {},
        { userAgent: r } = ux.WINDOW.navigator || {},
        o = {
          ...(e.request && e.request.headers),
          ...(n && { Referer: n }),
          ...(r && { 'User-Agent': r }),
        },
        i = { ...e.request, ...(t && { url: t }), headers: o }
      e.request = i
    },
  }))
  var Ex = {}
  !(function (e) {
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.imqaIntegration = e._imqaIntegration = void 0)
    const t = xA
    ;(e._imqaIntegration = () => ({
      name: 'IMQA',
      processEvent(e) {
        var t, n, r, o, i, s, a, c
        const _ = (function (e) {
          const t = []
          e.message && t.push(e.message)
          let n
          try {
            n = e.exception.values[e.exception.values.length - 1]
          } catch (e) {}
          n && n.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`))
          return t
        })(e)
        _.length > 0 && (e.message = _[_.length - 1])
        const u = null === (t = e.exception) || void 0 === t ? void 0 : t.values
        if (u && u.length > 0)
          for (const e of u)
            if (null === (n = e.stacktrace) || void 0 === n ? void 0 : n.frames) {
              const t = []
              let n = null
              for (let _ = e.stacktrace.frames.length - 1; _ >= 0; _--) {
                const u = e.stacktrace.frames[_]
                ;(null === (r = u.filename) || void 0 === r ? void 0 : r.includes('framework-')) ||
                  (null === (o = u.function) || void 0 === o
                    ? void 0
                    : o.endsWith('hdxReportString')) ||
                  (null === (i = u.function) || void 0 === i
                    ? void 0
                    : i.endsWith('hdxReportError')) ||
                  (null === (s = u.function) || void 0 === s
                    ? void 0
                    : s.endsWith('hdxReportErrorEvent')) ||
                  (null === (a = u.function) || void 0 === a
                    ? void 0
                    : a.endsWith('hdxReportEvent')) ||
                  ((null === (c = u.function) || void 0 === c ? void 0 : c.endsWith('hdxReport'))
                    ? (n = u.filename)
                    : n && u.filename === n
                      ? (n = null)
                      : t.unshift(u))
              }
              e.stacktrace.frames = t
            }
        return e
      },
    })),
      (e.imqaIntegration = (0, t.defineIntegration)(e._imqaIntegration))
  })(Ex)
  var lx = {}
  Object.defineProperty(lx, '__esModule', { value: !0 }), (lx.linkedErrorsIntegration = void 0)
  const Tx = xA,
    px = NP,
    dx = IP
  lx.linkedErrorsIntegration = (0, Tx.defineIntegration)((e = {}) => {
    const t = e.limit || 5,
      n = e.key || 'cause'
    return {
      name: 'LinkedErrors',
      preprocessEvent(e, r, o) {
        const i = o.getOptions()
        ;(0, px.applyAggregateErrorsToEvent)(
          dx.exceptionFromError,
          i.stackParser,
          i.maxValueLength,
          n,
          t,
          e,
          r,
        )
      },
    }
  })
  var Sx = {}
  !(function (e) {
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.defaultStackParser =
        e.defaultStackLineParsers =
        e.opera11StackLineParser =
        e.opera10StackLineParser =
        e.winjsStackLineParser =
        e.geckoStackLineParser =
        e.chromeStackLineParser =
          void 0)
    const t = NP
    function n(e, n, r, o) {
      const i = { filename: e, function: '<anonymous>' === n ? t.UNKNOWN_FUNCTION : n, in_app: !0 }
      return void 0 !== r && (i.lineno = r), void 0 !== o && (i.colno = o), i
    }
    const r =
        /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      o = /\((\S*)(?::(\d+))(?::(\d+))\)/
    e.chromeStackLineParser = [
      30,
      (e) => {
        const i = r.exec(e)
        if (i) {
          if (i[2] && 0 === i[2].indexOf('eval')) {
            const e = o.exec(i[2])
            e && ((i[2] = e[1]), (i[3] = e[2]), (i[4] = e[3]))
          }
          const [e, r] = u(i[1] || t.UNKNOWN_FUNCTION, i[2])
          return n(r, e, i[3] ? +i[3] : void 0, i[4] ? +i[4] : void 0)
        }
      },
    ]
    const i =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      s = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
    e.geckoStackLineParser = [
      50,
      (e) => {
        const r = i.exec(e)
        if (r) {
          if (r[3] && r[3].indexOf(' > eval') > -1) {
            const e = s.exec(r[3])
            e && ((r[1] = r[1] || 'eval'), (r[3] = e[1]), (r[4] = e[2]), (r[5] = ''))
          }
          let e = r[3],
            o = r[1] || t.UNKNOWN_FUNCTION
          return ([o, e] = u(o, e)), n(e, o, r[4] ? +r[4] : void 0, r[5] ? +r[5] : void 0)
        }
      },
    ]
    const a = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
    e.winjsStackLineParser = [
      40,
      (e) => {
        const r = a.exec(e)
        return r ? n(r[2], r[1] || t.UNKNOWN_FUNCTION, +r[3], r[4] ? +r[4] : void 0) : void 0
      },
    ]
    const c = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i
    e.opera10StackLineParser = [
      10,
      (e) => {
        const r = c.exec(e)
        return r ? n(r[2], r[3] || t.UNKNOWN_FUNCTION, +r[1]) : void 0
      },
    ]
    const _ =
      / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i
    ;(e.opera11StackLineParser = [
      20,
      (e) => {
        const r = _.exec(e)
        return r ? n(r[5], r[3] || r[4] || t.UNKNOWN_FUNCTION, +r[1], +r[2]) : void 0
      },
    ]),
      (e.defaultStackLineParsers = [e.chromeStackLineParser, e.geckoStackLineParser]),
      (e.defaultStackParser = (0, t.createStackParser)(...e.defaultStackLineParsers))
    const u = (e, n) => {
      const r = -1 !== e.indexOf('safari-extension'),
        o = -1 !== e.indexOf('safari-web-extension')
      return r || o
        ? [
            -1 !== e.indexOf('@') ? e.split('@')[0] : t.UNKNOWN_FUNCTION,
            r ? `safari-extension:${n}` : `safari-web-extension:${n}`,
          ]
        : [e, n]
    }
  })(Sx),
    (function (e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.recordException =
          e.buildEventFromException =
          e.applyIntegrations =
          e.setupIntegrations =
            void 0)
      const t = o,
        n = zt,
        r = xA,
        i = vP,
        s = IP,
        a = Yw,
        c = rx,
        _ = cx,
        u = Ex,
        E = lx,
        l = Sx,
        T = n.trace.getTracer(i.name, i.version),
        p = [
          (0, r.inboundFiltersIntegration)(),
          (0, c.contextLinesIntegration)(),
          (0, a.browserApiErrorsIntegration)(),
          (0, E.linkedErrorsIntegration)(),
          (0, _.httpContextIntegration)(),
          (0, u.imqaIntegration)(),
        ],
        d = {
          integrations: p,
          stackParser: l.defaultStackParser,
          maxValueLength: 250,
          transport: {},
        },
        S = { getOptions: () => d }
      e.setupIntegrations = () => {
        var e, t
        for (const n of p)
          null === (e = n.setupOnce) || void 0 === e || e.call(n),
            null === (t = n.setup) || void 0 === t || t.call(n, S)
      }
      e.applyIntegrations = async (e, t) => {
        var n
        for (const r of p)
          await (null === (n = r.preprocessEvent) || void 0 === n ? void 0 : n.call(r, e, t, S))
        for (const n of p)
          'function' == typeof n.processEvent && (e = await n.processEvent(e, t, S))
        return e
      }
      e.buildEventFromException = async (t, o) => {
        let i = (0, s.eventFromUnknownInput)(l.defaultStackParser, t)
        try {
          i = await (0, r.prepareEvent)(d, i, o)
        } catch (e) {
          n.diag.error('Failed to prepare event', e)
        }
        return (0, e.applyIntegrations)(i, o)
      }
      e.recordException = async (r, o) => {
        try {
          const { tracer: n, span: i, attributes: s, ...a } = null != o ? o : {},
            c = Object.keys(a).length > 0 ? a : { mechanism: { type: 'generic', handled: !0 } },
            _ = (0, t.getEventProcessor)(null != n ? n : T)
          _(await (0, e.buildEventFromException)(r, { data: c }), c, i, s)
        } catch (e) {
          n.diag.error('Failed to capture exception', e)
        }
      }
    })(r)
  var fx = {},
    Ax = {},
    hx = {},
    mx = n(
      Object.freeze({
        __proto__: null,
        ANDROID_STATE_VALUE_BACKGROUND: 'background',
        ANDROID_STATE_VALUE_CREATED: 'created',
        ANDROID_STATE_VALUE_FOREGROUND: 'foreground',
        ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED: Gd,
        ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED: Bd,
        ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED: kd,
        ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED: Fd,
        ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED: md,
        ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER: Rd,
        ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER: gd,
        ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED: Od,
        ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE: Wd,
        ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS: qd,
        ATTR_ANDROID_OS_API_LEVEL: 'android.os.api_level',
        ATTR_ANDROID_STATE: 'android.state',
        ATTR_ARTIFACT_ATTESTATION_FILENAME: 'artifact.attestation.filename',
        ATTR_ARTIFACT_ATTESTATION_HASH: 'artifact.attestation.hash',
        ATTR_ARTIFACT_ATTESTATION_ID: 'artifact.attestation.id',
        ATTR_ARTIFACT_FILENAME: 'artifact.filename',
        ATTR_ARTIFACT_HASH: 'artifact.hash',
        ATTR_ARTIFACT_PURL: 'artifact.purl',
        ATTR_ARTIFACT_VERSION: 'artifact.version',
        ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT: Vd,
        ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE: xd,
        ATTR_ASPNETCORE_RATE_LIMITING_POLICY: Hd,
        ATTR_ASPNETCORE_RATE_LIMITING_RESULT: hd,
        ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED: Yd,
        ATTR_ASPNETCORE_ROUTING_IS_FALLBACK: jd,
        ATTR_ASPNETCORE_ROUTING_MATCH_STATUS: Kd,
        ATTR_AWS_DYNAMODB_ATTRIBUTES_TO_GET: 'aws.dynamodb.attributes_to_get',
        ATTR_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: 'aws.dynamodb.attribute_definitions',
        ATTR_AWS_DYNAMODB_CONSISTENT_READ: 'aws.dynamodb.consistent_read',
        ATTR_AWS_DYNAMODB_CONSUMED_CAPACITY: 'aws.dynamodb.consumed_capacity',
        ATTR_AWS_DYNAMODB_COUNT: 'aws.dynamodb.count',
        ATTR_AWS_DYNAMODB_EXCLUSIVE_START_TABLE: 'aws.dynamodb.exclusive_start_table',
        ATTR_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: 'aws.dynamodb.global_secondary_indexes',
        ATTR_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES:
          'aws.dynamodb.global_secondary_index_updates',
        ATTR_AWS_DYNAMODB_INDEX_NAME: 'aws.dynamodb.index_name',
        ATTR_AWS_DYNAMODB_ITEM_COLLECTION_METRICS: 'aws.dynamodb.item_collection_metrics',
        ATTR_AWS_DYNAMODB_LIMIT: 'aws.dynamodb.limit',
        ATTR_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: 'aws.dynamodb.local_secondary_indexes',
        ATTR_AWS_DYNAMODB_PROJECTION: 'aws.dynamodb.projection',
        ATTR_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: 'aws.dynamodb.provisioned_read_capacity',
        ATTR_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: 'aws.dynamodb.provisioned_write_capacity',
        ATTR_AWS_DYNAMODB_SCANNED_COUNT: 'aws.dynamodb.scanned_count',
        ATTR_AWS_DYNAMODB_SCAN_FORWARD: 'aws.dynamodb.scan_forward',
        ATTR_AWS_DYNAMODB_SEGMENT: 'aws.dynamodb.segment',
        ATTR_AWS_DYNAMODB_SELECT: 'aws.dynamodb.select',
        ATTR_AWS_DYNAMODB_TABLE_COUNT: 'aws.dynamodb.table_count',
        ATTR_AWS_DYNAMODB_TABLE_NAMES: 'aws.dynamodb.table_names',
        ATTR_AWS_DYNAMODB_TOTAL_SEGMENTS: 'aws.dynamodb.total_segments',
        ATTR_AWS_ECS_CLUSTER_ARN: 'aws.ecs.cluster.arn',
        ATTR_AWS_ECS_CONTAINER_ARN: 'aws.ecs.container.arn',
        ATTR_AWS_ECS_LAUNCHTYPE: 'aws.ecs.launchtype',
        ATTR_AWS_ECS_TASK_ARN: 'aws.ecs.task.arn',
        ATTR_AWS_ECS_TASK_FAMILY: 'aws.ecs.task.family',
        ATTR_AWS_ECS_TASK_ID: 'aws.ecs.task.id',
        ATTR_AWS_ECS_TASK_REVISION: 'aws.ecs.task.revision',
        ATTR_AWS_EKS_CLUSTER_ARN: 'aws.eks.cluster.arn',
        ATTR_AWS_LAMBDA_INVOKED_ARN: 'aws.lambda.invoked_arn',
        ATTR_AWS_LOG_GROUP_ARNS: 'aws.log.group.arns',
        ATTR_AWS_LOG_GROUP_NAMES: 'aws.log.group.names',
        ATTR_AWS_LOG_STREAM_ARNS: 'aws.log.stream.arns',
        ATTR_AWS_LOG_STREAM_NAMES: 'aws.log.stream.names',
        ATTR_AWS_REQUEST_ID: 'aws.request_id',
        ATTR_AWS_S3_BUCKET: 'aws.s3.bucket',
        ATTR_AWS_S3_COPY_SOURCE: 'aws.s3.copy_source',
        ATTR_AWS_S3_DELETE: 'aws.s3.delete',
        ATTR_AWS_S3_KEY: 'aws.s3.key',
        ATTR_AWS_S3_PART_NUMBER: 'aws.s3.part_number',
        ATTR_AWS_S3_UPLOAD_ID: 'aws.s3.upload_id',
        ATTR_AZ_NAMESPACE: 'az.namespace',
        ATTR_AZ_SERVICE_REQUEST_ID: 'az.service_request_id',
        ATTR_BROWSER_BRANDS: 'browser.brands',
        ATTR_BROWSER_LANGUAGE: 'browser.language',
        ATTR_BROWSER_MOBILE: 'browser.mobile',
        ATTR_BROWSER_PLATFORM: 'browser.platform',
        ATTR_CICD_PIPELINE_NAME: 'cicd.pipeline.name',
        ATTR_CICD_PIPELINE_RUN_ID: 'cicd.pipeline.run.id',
        ATTR_CICD_PIPELINE_TASK_NAME: 'cicd.pipeline.task.name',
        ATTR_CICD_PIPELINE_TASK_RUN_ID: 'cicd.pipeline.task.run.id',
        ATTR_CICD_PIPELINE_TASK_RUN_URL_FULL: 'cicd.pipeline.task.run.url.full',
        ATTR_CICD_PIPELINE_TASK_TYPE: 'cicd.pipeline.task.type',
        ATTR_CLIENT_ADDRESS: Qd,
        ATTR_CLIENT_PORT: zd,
        ATTR_CLOUDEVENTS_EVENT_ID: 'cloudevents.event_id',
        ATTR_CLOUDEVENTS_EVENT_SOURCE: 'cloudevents.event_source',
        ATTR_CLOUDEVENTS_EVENT_SPEC_VERSION: 'cloudevents.event_spec_version',
        ATTR_CLOUDEVENTS_EVENT_SUBJECT: 'cloudevents.event_subject',
        ATTR_CLOUDEVENTS_EVENT_TYPE: 'cloudevents.event_type',
        ATTR_CLOUDFOUNDRY_APP_ID: 'cloudfoundry.app.id',
        ATTR_CLOUDFOUNDRY_APP_INSTANCE_ID: 'cloudfoundry.app.instance.id',
        ATTR_CLOUDFOUNDRY_APP_NAME: 'cloudfoundry.app.name',
        ATTR_CLOUDFOUNDRY_ORG_ID: 'cloudfoundry.org.id',
        ATTR_CLOUDFOUNDRY_ORG_NAME: 'cloudfoundry.org.name',
        ATTR_CLOUDFOUNDRY_PROCESS_ID: 'cloudfoundry.process.id',
        ATTR_CLOUDFOUNDRY_PROCESS_TYPE: 'cloudfoundry.process.type',
        ATTR_CLOUDFOUNDRY_SPACE_ID: 'cloudfoundry.space.id',
        ATTR_CLOUDFOUNDRY_SPACE_NAME: 'cloudfoundry.space.name',
        ATTR_CLOUDFOUNDRY_SYSTEM_ID: 'cloudfoundry.system.id',
        ATTR_CLOUDFOUNDRY_SYSTEM_INSTANCE_ID: 'cloudfoundry.system.instance.id',
        ATTR_CLOUD_ACCOUNT_ID: 'cloud.account.id',
        ATTR_CLOUD_AVAILABILITY_ZONE: 'cloud.availability_zone',
        ATTR_CLOUD_PLATFORM: 'cloud.platform',
        ATTR_CLOUD_PROVIDER: 'cloud.provider',
        ATTR_CLOUD_REGION: 'cloud.region',
        ATTR_CLOUD_RESOURCE_ID: 'cloud.resource_id',
        ATTR_CODE_COLUMN: 'code.column',
        ATTR_CODE_FILEPATH: 'code.filepath',
        ATTR_CODE_FUNCTION: 'code.function',
        ATTR_CODE_LINENO: 'code.lineno',
        ATTR_CODE_NAMESPACE: 'code.namespace',
        ATTR_CODE_STACKTRACE: 'code.stacktrace',
        ATTR_CONTAINER_COMMAND: 'container.command',
        ATTR_CONTAINER_COMMAND_ARGS: 'container.command_args',
        ATTR_CONTAINER_COMMAND_LINE: 'container.command_line',
        ATTR_CONTAINER_CPU_STATE: 'container.cpu.state',
        ATTR_CONTAINER_CSI_PLUGIN_NAME: 'container.csi.plugin.name',
        ATTR_CONTAINER_CSI_VOLUME_ID: 'container.csi.volume.id',
        ATTR_CONTAINER_ID: 'container.id',
        ATTR_CONTAINER_IMAGE_ID: 'container.image.id',
        ATTR_CONTAINER_IMAGE_NAME: 'container.image.name',
        ATTR_CONTAINER_IMAGE_REPO_DIGESTS: 'container.image.repo_digests',
        ATTR_CONTAINER_IMAGE_TAGS: 'container.image.tags',
        ATTR_CONTAINER_LABEL: function (e) {
          return 'container.label.' + e
        },
        ATTR_CONTAINER_LABELS: function (e) {
          return 'container.labels.' + e
        },
        ATTR_CONTAINER_NAME: 'container.name',
        ATTR_CONTAINER_RUNTIME: 'container.runtime',
        ATTR_CPU_MODE: 'cpu.mode',
        ATTR_DB_CASSANDRA_CONSISTENCY_LEVEL: 'db.cassandra.consistency_level',
        ATTR_DB_CASSANDRA_COORDINATOR_DC: 'db.cassandra.coordinator.dc',
        ATTR_DB_CASSANDRA_COORDINATOR_ID: 'db.cassandra.coordinator.id',
        ATTR_DB_CASSANDRA_IDEMPOTENCE: 'db.cassandra.idempotence',
        ATTR_DB_CASSANDRA_PAGE_SIZE: 'db.cassandra.page_size',
        ATTR_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: 'db.cassandra.speculative_execution_count',
        ATTR_DB_CASSANDRA_TABLE: 'db.cassandra.table',
        ATTR_DB_CLIENT_CONNECTIONS_POOL_NAME: 'db.client.connections.pool.name',
        ATTR_DB_CLIENT_CONNECTIONS_STATE: 'db.client.connections.state',
        ATTR_DB_CLIENT_CONNECTION_POOL_NAME: 'db.client.connection.pool.name',
        ATTR_DB_CLIENT_CONNECTION_STATE: 'db.client.connection.state',
        ATTR_DB_COLLECTION_NAME: 'db.collection.name',
        ATTR_DB_CONNECTION_STRING: 'db.connection_string',
        ATTR_DB_COSMOSDB_CLIENT_ID: 'db.cosmosdb.client_id',
        ATTR_DB_COSMOSDB_CONNECTION_MODE: 'db.cosmosdb.connection_mode',
        ATTR_DB_COSMOSDB_CONTAINER: 'db.cosmosdb.container',
        ATTR_DB_COSMOSDB_OPERATION_TYPE: 'db.cosmosdb.operation_type',
        ATTR_DB_COSMOSDB_REQUEST_CHARGE: 'db.cosmosdb.request_charge',
        ATTR_DB_COSMOSDB_REQUEST_CONTENT_LENGTH: 'db.cosmosdb.request_content_length',
        ATTR_DB_COSMOSDB_STATUS_CODE: 'db.cosmosdb.status_code',
        ATTR_DB_COSMOSDB_SUB_STATUS_CODE: 'db.cosmosdb.sub_status_code',
        ATTR_DB_ELASTICSEARCH_CLUSTER_NAME: 'db.elasticsearch.cluster.name',
        ATTR_DB_ELASTICSEARCH_NODE_NAME: 'db.elasticsearch.node.name',
        ATTR_DB_ELASTICSEARCH_PATH_PARTS: function (e) {
          return 'db.elasticsearch.path_parts.' + e
        },
        ATTR_DB_INSTANCE_ID: 'db.instance.id',
        ATTR_DB_JDBC_DRIVER_CLASSNAME: 'db.jdbc.driver_classname',
        ATTR_DB_MONGODB_COLLECTION: 'db.mongodb.collection',
        ATTR_DB_MSSQL_INSTANCE_NAME: 'db.mssql.instance_name',
        ATTR_DB_NAME: 'db.name',
        ATTR_DB_NAMESPACE: 'db.namespace',
        ATTR_DB_OPERATION: 'db.operation',
        ATTR_DB_OPERATION_BATCH_SIZE: 'db.operation.batch.size',
        ATTR_DB_OPERATION_NAME: 'db.operation.name',
        ATTR_DB_QUERY_PARAMETER: function (e) {
          return 'db.query.parameter.' + e
        },
        ATTR_DB_QUERY_TEXT: 'db.query.text',
        ATTR_DB_REDIS_DATABASE_INDEX: 'db.redis.database_index',
        ATTR_DB_RESPONSE_STATUS_CODE: 'db.response.status_code',
        ATTR_DB_SQL_TABLE: 'db.sql.table',
        ATTR_DB_STATEMENT: 'db.statement',
        ATTR_DB_SYSTEM: 'db.system',
        ATTR_DB_USER: 'db.user',
        ATTR_DEPLOYMENT_ENVIRONMENT: 'deployment.environment',
        ATTR_DEPLOYMENT_ENVIRONMENT_NAME: 'deployment.environment.name',
        ATTR_DEPLOYMENT_ID: 'deployment.id',
        ATTR_DEPLOYMENT_NAME: 'deployment.name',
        ATTR_DEPLOYMENT_STATUS: 'deployment.status',
        ATTR_DESTINATION_ADDRESS: 'destination.address',
        ATTR_DESTINATION_PORT: 'destination.port',
        ATTR_DEVICE_ID: 'device.id',
        ATTR_DEVICE_MANUFACTURER: 'device.manufacturer',
        ATTR_DEVICE_MODEL_IDENTIFIER: 'device.model.identifier',
        ATTR_DEVICE_MODEL_NAME: 'device.model.name',
        ATTR_DISK_IO_DIRECTION: 'disk.io.direction',
        ATTR_DNS_QUESTION_NAME: 'dns.question.name',
        ATTR_DOTNET_GC_HEAP_GENERATION: 'dotnet.gc.heap.generation',
        ATTR_ENDUSER_ID: 'enduser.id',
        ATTR_ENDUSER_ROLE: 'enduser.role',
        ATTR_ENDUSER_SCOPE: 'enduser.scope',
        ATTR_ERROR_TYPE: $d,
        ATTR_EVENT_NAME: 'event.name',
        ATTR_EXCEPTION_ESCAPED: Jd,
        ATTR_EXCEPTION_MESSAGE: Zd,
        ATTR_EXCEPTION_STACKTRACE: eS,
        ATTR_EXCEPTION_TYPE: tS,
        ATTR_FAAS_COLDSTART: 'faas.coldstart',
        ATTR_FAAS_CRON: 'faas.cron',
        ATTR_FAAS_DOCUMENT_COLLECTION: 'faas.document.collection',
        ATTR_FAAS_DOCUMENT_NAME: 'faas.document.name',
        ATTR_FAAS_DOCUMENT_OPERATION: 'faas.document.operation',
        ATTR_FAAS_DOCUMENT_TIME: 'faas.document.time',
        ATTR_FAAS_INSTANCE: 'faas.instance',
        ATTR_FAAS_INVOCATION_ID: 'faas.invocation_id',
        ATTR_FAAS_INVOKED_NAME: 'faas.invoked_name',
        ATTR_FAAS_INVOKED_PROVIDER: 'faas.invoked_provider',
        ATTR_FAAS_INVOKED_REGION: 'faas.invoked_region',
        ATTR_FAAS_MAX_MEMORY: 'faas.max_memory',
        ATTR_FAAS_NAME: 'faas.name',
        ATTR_FAAS_TIME: 'faas.time',
        ATTR_FAAS_TRIGGER: 'faas.trigger',
        ATTR_FAAS_VERSION: 'faas.version',
        ATTR_FEATURE_FLAG_KEY: 'feature_flag.key',
        ATTR_FEATURE_FLAG_PROVIDER_NAME: 'feature_flag.provider_name',
        ATTR_FEATURE_FLAG_VARIANT: 'feature_flag.variant',
        ATTR_FILE_ACCESSED: 'file.accessed',
        ATTR_FILE_ATTRIBUTES: 'file.attributes',
        ATTR_FILE_CHANGED: 'file.changed',
        ATTR_FILE_CREATED: 'file.created',
        ATTR_FILE_DIRECTORY: 'file.directory',
        ATTR_FILE_EXTENSION: 'file.extension',
        ATTR_FILE_FORK_NAME: 'file.fork_name',
        ATTR_FILE_GROUP_ID: 'file.group.id',
        ATTR_FILE_GROUP_NAME: 'file.group.name',
        ATTR_FILE_INODE: 'file.inode',
        ATTR_FILE_MODE: 'file.mode',
        ATTR_FILE_MODIFIED: 'file.modified',
        ATTR_FILE_NAME: 'file.name',
        ATTR_FILE_OWNER_ID: 'file.owner.id',
        ATTR_FILE_OWNER_NAME: 'file.owner.name',
        ATTR_FILE_PATH: 'file.path',
        ATTR_FILE_SIZE: 'file.size',
        ATTR_FILE_SYMBOLIC_LINK_TARGET_PATH: 'file.symbolic_link.target_path',
        ATTR_GCP_CLIENT_SERVICE: 'gcp.client.service',
        ATTR_GCP_CLOUD_RUN_JOB_EXECUTION: 'gcp.cloud_run.job.execution',
        ATTR_GCP_CLOUD_RUN_JOB_TASK_INDEX: 'gcp.cloud_run.job.task_index',
        ATTR_GCP_GCE_INSTANCE_HOSTNAME: 'gcp.gce.instance.hostname',
        ATTR_GCP_GCE_INSTANCE_NAME: 'gcp.gce.instance.name',
        ATTR_GEN_AI_COMPLETION: 'gen_ai.completion',
        ATTR_GEN_AI_OPENAI_REQUEST_RESPONSE_FORMAT: 'gen_ai.openai.request.response_format',
        ATTR_GEN_AI_OPENAI_REQUEST_SEED: 'gen_ai.openai.request.seed',
        ATTR_GEN_AI_OPENAI_REQUEST_SERVICE_TIER: 'gen_ai.openai.request.service_tier',
        ATTR_GEN_AI_OPENAI_RESPONSE_SERVICE_TIER: 'gen_ai.openai.response.service_tier',
        ATTR_GEN_AI_OPERATION_NAME: 'gen_ai.operation.name',
        ATTR_GEN_AI_PROMPT: 'gen_ai.prompt',
        ATTR_GEN_AI_REQUEST_FREQUENCY_PENALTY: 'gen_ai.request.frequency_penalty',
        ATTR_GEN_AI_REQUEST_MAX_TOKENS: 'gen_ai.request.max_tokens',
        ATTR_GEN_AI_REQUEST_MODEL: 'gen_ai.request.model',
        ATTR_GEN_AI_REQUEST_PRESENCE_PENALTY: 'gen_ai.request.presence_penalty',
        ATTR_GEN_AI_REQUEST_STOP_SEQUENCES: 'gen_ai.request.stop_sequences',
        ATTR_GEN_AI_REQUEST_TEMPERATURE: 'gen_ai.request.temperature',
        ATTR_GEN_AI_REQUEST_TOP_K: 'gen_ai.request.top_k',
        ATTR_GEN_AI_REQUEST_TOP_P: 'gen_ai.request.top_p',
        ATTR_GEN_AI_RESPONSE_FINISH_REASONS: 'gen_ai.response.finish_reasons',
        ATTR_GEN_AI_RESPONSE_ID: 'gen_ai.response.id',
        ATTR_GEN_AI_RESPONSE_MODEL: 'gen_ai.response.model',
        ATTR_GEN_AI_SYSTEM: 'gen_ai.system',
        ATTR_GEN_AI_TOKEN_TYPE: 'gen_ai.token.type',
        ATTR_GEN_AI_USAGE_COMPLETION_TOKENS: 'gen_ai.usage.completion_tokens',
        ATTR_GEN_AI_USAGE_INPUT_TOKENS: 'gen_ai.usage.input_tokens',
        ATTR_GEN_AI_USAGE_OUTPUT_TOKENS: 'gen_ai.usage.output_tokens',
        ATTR_GEN_AI_USAGE_PROMPT_TOKENS: 'gen_ai.usage.prompt_tokens',
        ATTR_GO_MEMORY_TYPE: 'go.memory.type',
        ATTR_GRAPHQL_DOCUMENT: 'graphql.document',
        ATTR_GRAPHQL_OPERATION_NAME: 'graphql.operation.name',
        ATTR_GRAPHQL_OPERATION_TYPE: 'graphql.operation.type',
        ATTR_HEROKU_APP_ID: 'heroku.app.id',
        ATTR_HEROKU_RELEASE_COMMIT: 'heroku.release.commit',
        ATTR_HEROKU_RELEASE_CREATION_TIMESTAMP: 'heroku.release.creation_timestamp',
        ATTR_HOST_ARCH: 'host.arch',
        ATTR_HOST_CPU_CACHE_L2_SIZE: 'host.cpu.cache.l2.size',
        ATTR_HOST_CPU_FAMILY: 'host.cpu.family',
        ATTR_HOST_CPU_MODEL_ID: 'host.cpu.model.id',
        ATTR_HOST_CPU_MODEL_NAME: 'host.cpu.model.name',
        ATTR_HOST_CPU_STEPPING: 'host.cpu.stepping',
        ATTR_HOST_CPU_VENDOR_ID: 'host.cpu.vendor.id',
        ATTR_HOST_ID: 'host.id',
        ATTR_HOST_IMAGE_ID: 'host.image.id',
        ATTR_HOST_IMAGE_NAME: 'host.image.name',
        ATTR_HOST_IMAGE_VERSION: 'host.image.version',
        ATTR_HOST_IP: 'host.ip',
        ATTR_HOST_MAC: 'host.mac',
        ATTR_HOST_NAME: 'host.name',
        ATTR_HOST_TYPE: 'host.type',
        ATTR_HTTP_CLIENT_IP: 'http.client_ip',
        ATTR_HTTP_CONNECTION_STATE: 'http.connection.state',
        ATTR_HTTP_FLAVOR: 'http.flavor',
        ATTR_HTTP_HOST: 'http.host',
        ATTR_HTTP_METHOD: 'http.method',
        ATTR_HTTP_REQUEST_BODY_SIZE: 'http.request.body.size',
        ATTR_HTTP_REQUEST_CONTENT_LENGTH: 'http.request_content_length',
        ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: 'http.request_content_length_uncompressed',
        ATTR_HTTP_REQUEST_HEADER: nS,
        ATTR_HTTP_REQUEST_METHOD: rS,
        ATTR_HTTP_REQUEST_METHOD_ORIGINAL: lS,
        ATTR_HTTP_REQUEST_RESEND_COUNT: TS,
        ATTR_HTTP_REQUEST_SIZE: 'http.request.size',
        ATTR_HTTP_RESPONSE_BODY_SIZE: 'http.response.body.size',
        ATTR_HTTP_RESPONSE_CONTENT_LENGTH: 'http.response_content_length',
        ATTR_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: 'http.response_content_length_uncompressed',
        ATTR_HTTP_RESPONSE_HEADER: pS,
        ATTR_HTTP_RESPONSE_SIZE: 'http.response.size',
        ATTR_HTTP_RESPONSE_STATUS_CODE: dS,
        ATTR_HTTP_ROUTE: SS,
        ATTR_HTTP_SCHEME: 'http.scheme',
        ATTR_HTTP_SERVER_NAME: 'http.server_name',
        ATTR_HTTP_STATUS_CODE: 'http.status_code',
        ATTR_HTTP_TARGET: 'http.target',
        ATTR_HTTP_URL: 'http.url',
        ATTR_HTTP_USER_AGENT: 'http.user_agent',
        ATTR_HW_ID: 'hw.id',
        ATTR_HW_NAME: 'hw.name',
        ATTR_HW_PARENT: 'hw.parent',
        ATTR_HW_STATE: 'hw.state',
        ATTR_HW_TYPE: 'hw.type',
        ATTR_IOS_STATE: 'ios.state',
        ATTR_JVM_BUFFER_POOL_NAME: 'jvm.buffer.pool.name',
        ATTR_JVM_GC_ACTION: fS,
        ATTR_JVM_GC_NAME: AS,
        ATTR_JVM_MEMORY_POOL_NAME: hS,
        ATTR_JVM_MEMORY_TYPE: mS,
        ATTR_JVM_THREAD_DAEMON: OS,
        ATTR_JVM_THREAD_STATE: vS,
        ATTR_K8S_CLUSTER_NAME: 'k8s.cluster.name',
        ATTR_K8S_CLUSTER_UID: 'k8s.cluster.uid',
        ATTR_K8S_CONTAINER_NAME: 'k8s.container.name',
        ATTR_K8S_CONTAINER_RESTART_COUNT: 'k8s.container.restart_count',
        ATTR_K8S_CONTAINER_STATUS_LAST_TERMINATED_REASON:
          'k8s.container.status.last_terminated_reason',
        ATTR_K8S_CRONJOB_NAME: 'k8s.cronjob.name',
        ATTR_K8S_CRONJOB_UID: 'k8s.cronjob.uid',
        ATTR_K8S_DAEMONSET_NAME: 'k8s.daemonset.name',
        ATTR_K8S_DAEMONSET_UID: 'k8s.daemonset.uid',
        ATTR_K8S_DEPLOYMENT_NAME: 'k8s.deployment.name',
        ATTR_K8S_DEPLOYMENT_UID: 'k8s.deployment.uid',
        ATTR_K8S_JOB_NAME: 'k8s.job.name',
        ATTR_K8S_JOB_UID: 'k8s.job.uid',
        ATTR_K8S_NAMESPACE_NAME: 'k8s.namespace.name',
        ATTR_K8S_NODE_NAME: 'k8s.node.name',
        ATTR_K8S_NODE_UID: 'k8s.node.uid',
        ATTR_K8S_POD_ANNOTATION: function (e) {
          return 'k8s.pod.annotation.' + e
        },
        ATTR_K8S_POD_LABEL: function (e) {
          return 'k8s.pod.label.' + e
        },
        ATTR_K8S_POD_LABELS: function (e) {
          return 'k8s.pod.labels.' + e
        },
        ATTR_K8S_POD_NAME: 'k8s.pod.name',
        ATTR_K8S_POD_UID: 'k8s.pod.uid',
        ATTR_K8S_REPLICASET_NAME: 'k8s.replicaset.name',
        ATTR_K8S_REPLICASET_UID: 'k8s.replicaset.uid',
        ATTR_K8S_STATEFULSET_NAME: 'k8s.statefulset.name',
        ATTR_K8S_STATEFULSET_UID: 'k8s.statefulset.uid',
        ATTR_K8S_VOLUME_NAME: 'k8s.volume.name',
        ATTR_K8S_VOLUME_TYPE: 'k8s.volume.type',
        ATTR_LINUX_MEMORY_SLAB_STATE: 'linux.memory.slab.state',
        ATTR_LOG_FILE_NAME: 'log.file.name',
        ATTR_LOG_FILE_NAME_RESOLVED: 'log.file.name_resolved',
        ATTR_LOG_FILE_PATH: 'log.file.path',
        ATTR_LOG_FILE_PATH_RESOLVED: 'log.file.path_resolved',
        ATTR_LOG_IOSTREAM: 'log.iostream',
        ATTR_LOG_RECORD_ORIGINAL: 'log.record.original',
        ATTR_LOG_RECORD_UID: 'log.record.uid',
        ATTR_MESSAGE_COMPRESSED_SIZE: 'message.compressed_size',
        ATTR_MESSAGE_ID: 'message.id',
        ATTR_MESSAGE_TYPE: 'message.type',
        ATTR_MESSAGE_UNCOMPRESSED_SIZE: 'message.uncompressed_size',
        ATTR_MESSAGING_BATCH_MESSAGE_COUNT: 'messaging.batch.message_count',
        ATTR_MESSAGING_CLIENT_ID: 'messaging.client.id',
        ATTR_MESSAGING_CONSUMER_GROUP_NAME: 'messaging.consumer.group.name',
        ATTR_MESSAGING_DESTINATION_ANONYMOUS: 'messaging.destination.anonymous',
        ATTR_MESSAGING_DESTINATION_NAME: 'messaging.destination.name',
        ATTR_MESSAGING_DESTINATION_PARTITION_ID: 'messaging.destination.partition.id',
        ATTR_MESSAGING_DESTINATION_PUBLISH_ANONYMOUS: 'messaging.destination_publish.anonymous',
        ATTR_MESSAGING_DESTINATION_PUBLISH_NAME: 'messaging.destination_publish.name',
        ATTR_MESSAGING_DESTINATION_SUBSCRIPTION_NAME: 'messaging.destination.subscription.name',
        ATTR_MESSAGING_DESTINATION_TEMPLATE: 'messaging.destination.template',
        ATTR_MESSAGING_DESTINATION_TEMPORARY: 'messaging.destination.temporary',
        ATTR_MESSAGING_EVENTHUBS_CONSUMER_GROUP: 'messaging.eventhubs.consumer.group',
        ATTR_MESSAGING_EVENTHUBS_MESSAGE_ENQUEUED_TIME: 'messaging.eventhubs.message.enqueued_time',
        ATTR_MESSAGING_GCP_PUBSUB_MESSAGE_ACK_DEADLINE: 'messaging.gcp_pubsub.message.ack_deadline',
        ATTR_MESSAGING_GCP_PUBSUB_MESSAGE_ACK_ID: 'messaging.gcp_pubsub.message.ack_id',
        ATTR_MESSAGING_GCP_PUBSUB_MESSAGE_DELIVERY_ATTEMPT:
          'messaging.gcp_pubsub.message.delivery_attempt',
        ATTR_MESSAGING_GCP_PUBSUB_MESSAGE_ORDERING_KEY: 'messaging.gcp_pubsub.message.ordering_key',
        ATTR_MESSAGING_KAFKA_CONSUMER_GROUP: 'messaging.kafka.consumer.group',
        ATTR_MESSAGING_KAFKA_DESTINATION_PARTITION: 'messaging.kafka.destination.partition',
        ATTR_MESSAGING_KAFKA_MESSAGE_KEY: 'messaging.kafka.message.key',
        ATTR_MESSAGING_KAFKA_MESSAGE_OFFSET: 'messaging.kafka.message.offset',
        ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE: 'messaging.kafka.message.tombstone',
        ATTR_MESSAGING_KAFKA_OFFSET: 'messaging.kafka.offset',
        ATTR_MESSAGING_MESSAGE_BODY_SIZE: 'messaging.message.body.size',
        ATTR_MESSAGING_MESSAGE_CONVERSATION_ID: 'messaging.message.conversation_id',
        ATTR_MESSAGING_MESSAGE_ENVELOPE_SIZE: 'messaging.message.envelope.size',
        ATTR_MESSAGING_MESSAGE_ID: 'messaging.message.id',
        ATTR_MESSAGING_OPERATION: 'messaging.operation',
        ATTR_MESSAGING_OPERATION_NAME: 'messaging.operation.name',
        ATTR_MESSAGING_OPERATION_TYPE: 'messaging.operation.type',
        ATTR_MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY:
          'messaging.rabbitmq.destination.routing_key',
        ATTR_MESSAGING_RABBITMQ_MESSAGE_DELIVERY_TAG: 'messaging.rabbitmq.message.delivery_tag',
        ATTR_MESSAGING_ROCKETMQ_CLIENT_GROUP: 'messaging.rocketmq.client_group',
        ATTR_MESSAGING_ROCKETMQ_CONSUMPTION_MODEL: 'messaging.rocketmq.consumption_model',
        ATTR_MESSAGING_ROCKETMQ_MESSAGE_DELAY_TIME_LEVEL:
          'messaging.rocketmq.message.delay_time_level',
        ATTR_MESSAGING_ROCKETMQ_MESSAGE_DELIVERY_TIMESTAMP:
          'messaging.rocketmq.message.delivery_timestamp',
        ATTR_MESSAGING_ROCKETMQ_MESSAGE_GROUP: 'messaging.rocketmq.message.group',
        ATTR_MESSAGING_ROCKETMQ_MESSAGE_KEYS: 'messaging.rocketmq.message.keys',
        ATTR_MESSAGING_ROCKETMQ_MESSAGE_TAG: 'messaging.rocketmq.message.tag',
        ATTR_MESSAGING_ROCKETMQ_MESSAGE_TYPE: 'messaging.rocketmq.message.type',
        ATTR_MESSAGING_ROCKETMQ_NAMESPACE: 'messaging.rocketmq.namespace',
        ATTR_MESSAGING_SERVICEBUS_DESTINATION_SUBSCRIPTION_NAME:
          'messaging.servicebus.destination.subscription_name',
        ATTR_MESSAGING_SERVICEBUS_DISPOSITION_STATUS: 'messaging.servicebus.disposition_status',
        ATTR_MESSAGING_SERVICEBUS_MESSAGE_DELIVERY_COUNT:
          'messaging.servicebus.message.delivery_count',
        ATTR_MESSAGING_SERVICEBUS_MESSAGE_ENQUEUED_TIME:
          'messaging.servicebus.message.enqueued_time',
        ATTR_MESSAGING_SYSTEM: 'messaging.system',
        ATTR_NETWORK_CARRIER_ICC: 'network.carrier.icc',
        ATTR_NETWORK_CARRIER_MCC: 'network.carrier.mcc',
        ATTR_NETWORK_CARRIER_MNC: 'network.carrier.mnc',
        ATTR_NETWORK_CARRIER_NAME: 'network.carrier.name',
        ATTR_NETWORK_CONNECTION_SUBTYPE: 'network.connection.subtype',
        ATTR_NETWORK_CONNECTION_TYPE: 'network.connection.type',
        ATTR_NETWORK_IO_DIRECTION: 'network.io.direction',
        ATTR_NETWORK_LOCAL_ADDRESS: bS,
        ATTR_NETWORK_LOCAL_PORT: MS,
        ATTR_NETWORK_PEER_ADDRESS: PS,
        ATTR_NETWORK_PEER_PORT: US,
        ATTR_NETWORK_PROTOCOL_NAME: DS,
        ATTR_NETWORK_PROTOCOL_VERSION: wS,
        ATTR_NETWORK_TRANSPORT: xS,
        ATTR_NETWORK_TYPE: kS,
        ATTR_NET_HOST_IP: 'net.host.ip',
        ATTR_NET_HOST_NAME: 'net.host.name',
        ATTR_NET_HOST_PORT: 'net.host.port',
        ATTR_NET_PEER_IP: 'net.peer.ip',
        ATTR_NET_PEER_NAME: 'net.peer.name',
        ATTR_NET_PEER_PORT: 'net.peer.port',
        ATTR_NET_PROTOCOL_NAME: 'net.protocol.name',
        ATTR_NET_PROTOCOL_VERSION: 'net.protocol.version',
        ATTR_NET_SOCK_FAMILY: 'net.sock.family',
        ATTR_NET_SOCK_HOST_ADDR: 'net.sock.host.addr',
        ATTR_NET_SOCK_HOST_PORT: 'net.sock.host.port',
        ATTR_NET_SOCK_PEER_ADDR: 'net.sock.peer.addr',
        ATTR_NET_SOCK_PEER_NAME: 'net.sock.peer.name',
        ATTR_NET_SOCK_PEER_PORT: 'net.sock.peer.port',
        ATTR_NET_TRANSPORT: 'net.transport',
        ATTR_NODEJS_EVENTLOOP_STATE: 'nodejs.eventloop.state',
        ATTR_OCI_MANIFEST_DIGEST: 'oci.manifest.digest',
        ATTR_OPENTRACING_REF_TYPE: 'opentracing.ref_type',
        ATTR_OS_BUILD_ID: 'os.build_id',
        ATTR_OS_DESCRIPTION: 'os.description',
        ATTR_OS_NAME: 'os.name',
        ATTR_OS_TYPE: 'os.type',
        ATTR_OS_VERSION: 'os.version',
        ATTR_OTEL_LIBRARY_NAME: 'otel.library.name',
        ATTR_OTEL_LIBRARY_VERSION: 'otel.library.version',
        ATTR_OTEL_SCOPE_NAME: YS,
        ATTR_OTEL_SCOPE_VERSION: jS,
        ATTR_OTEL_STATUS_CODE: KS,
        ATTR_OTEL_STATUS_DESCRIPTION: qS,
        ATTR_PEER_SERVICE: 'peer.service',
        ATTR_POOL_NAME: 'pool.name',
        ATTR_PROCESS_ARGS_COUNT: 'process.args_count',
        ATTR_PROCESS_COMMAND: 'process.command',
        ATTR_PROCESS_COMMAND_ARGS: 'process.command_args',
        ATTR_PROCESS_COMMAND_LINE: 'process.command_line',
        ATTR_PROCESS_CONTEXT_SWITCH_TYPE: 'process.context_switch_type',
        ATTR_PROCESS_CPU_STATE: 'process.cpu.state',
        ATTR_PROCESS_CREATION_TIME: 'process.creation.time',
        ATTR_PROCESS_EXECUTABLE_BUILD_ID_GNU: 'process.executable.build_id.gnu',
        ATTR_PROCESS_EXECUTABLE_BUILD_ID_GO: 'process.executable.build_id.go',
        ATTR_PROCESS_EXECUTABLE_BUILD_ID_PROFILING: 'process.executable.build_id.profiling',
        ATTR_PROCESS_EXECUTABLE_NAME: 'process.executable.name',
        ATTR_PROCESS_EXECUTABLE_PATH: 'process.executable.path',
        ATTR_PROCESS_EXIT_CODE: 'process.exit.code',
        ATTR_PROCESS_EXIT_TIME: 'process.exit.time',
        ATTR_PROCESS_GROUP_LEADER_PID: 'process.group_leader.pid',
        ATTR_PROCESS_INTERACTIVE: 'process.interactive',
        ATTR_PROCESS_OWNER: 'process.owner',
        ATTR_PROCESS_PAGING_FAULT_TYPE: 'process.paging.fault_type',
        ATTR_PROCESS_PARENT_PID: 'process.parent_pid',
        ATTR_PROCESS_PID: 'process.pid',
        ATTR_PROCESS_REAL_USER_ID: 'process.real_user.id',
        ATTR_PROCESS_REAL_USER_NAME: 'process.real_user.name',
        ATTR_PROCESS_RUNTIME_DESCRIPTION: 'process.runtime.description',
        ATTR_PROCESS_RUNTIME_NAME: 'process.runtime.name',
        ATTR_PROCESS_RUNTIME_VERSION: 'process.runtime.version',
        ATTR_PROCESS_SAVED_USER_ID: 'process.saved_user.id',
        ATTR_PROCESS_SAVED_USER_NAME: 'process.saved_user.name',
        ATTR_PROCESS_SESSION_LEADER_PID: 'process.session_leader.pid',
        ATTR_PROCESS_TITLE: 'process.title',
        ATTR_PROCESS_USER_ID: 'process.user.id',
        ATTR_PROCESS_USER_NAME: 'process.user.name',
        ATTR_PROCESS_VPID: 'process.vpid',
        ATTR_PROCESS_WORKING_DIRECTORY: 'process.working_directory',
        ATTR_PROFILE_FRAME_TYPE: 'profile.frame.type',
        ATTR_RPC_CONNECT_RPC_ERROR_CODE: 'rpc.connect_rpc.error_code',
        ATTR_RPC_CONNECT_RPC_REQUEST_METADATA: function (e) {
          return 'rpc.connect_rpc.request.metadata.' + e
        },
        ATTR_RPC_CONNECT_RPC_RESPONSE_METADATA: function (e) {
          return 'rpc.connect_rpc.response.metadata.' + e
        },
        ATTR_RPC_GRPC_REQUEST_METADATA: function (e) {
          return 'rpc.grpc.request.metadata.' + e
        },
        ATTR_RPC_GRPC_RESPONSE_METADATA: function (e) {
          return 'rpc.grpc.response.metadata.' + e
        },
        ATTR_RPC_GRPC_STATUS_CODE: 'rpc.grpc.status_code',
        ATTR_RPC_JSONRPC_ERROR_CODE: 'rpc.jsonrpc.error_code',
        ATTR_RPC_JSONRPC_ERROR_MESSAGE: 'rpc.jsonrpc.error_message',
        ATTR_RPC_JSONRPC_REQUEST_ID: 'rpc.jsonrpc.request_id',
        ATTR_RPC_JSONRPC_VERSION: 'rpc.jsonrpc.version',
        ATTR_RPC_MESSAGE_COMPRESSED_SIZE: 'rpc.message.compressed_size',
        ATTR_RPC_MESSAGE_ID: 'rpc.message.id',
        ATTR_RPC_MESSAGE_TYPE: 'rpc.message.type',
        ATTR_RPC_MESSAGE_UNCOMPRESSED_SIZE: 'rpc.message.uncompressed_size',
        ATTR_RPC_METHOD: 'rpc.method',
        ATTR_RPC_SERVICE: 'rpc.service',
        ATTR_RPC_SYSTEM: 'rpc.system',
        ATTR_SERVER_ADDRESS: QS,
        ATTR_SERVER_PORT: zS,
        ATTR_SERVICE_INSTANCE_ID: 'service.instance.id',
        ATTR_SERVICE_NAME: $S,
        ATTR_SERVICE_NAMESPACE: 'service.namespace',
        ATTR_SERVICE_VERSION: XS,
        ATTR_SESSION_ID: 'session.id',
        ATTR_SESSION_PREVIOUS_ID: 'session.previous_id',
        ATTR_SIGNALR_CONNECTION_STATUS: JS,
        ATTR_SIGNALR_TRANSPORT: nf,
        ATTR_SOURCE_ADDRESS: 'source.address',
        ATTR_SOURCE_PORT: 'source.port',
        ATTR_STATE: 'state',
        ATTR_SYSTEM_CPU_LOGICAL_NUMBER: 'system.cpu.logical_number',
        ATTR_SYSTEM_CPU_STATE: 'system.cpu.state',
        ATTR_SYSTEM_DEVICE: 'system.device',
        ATTR_SYSTEM_FILESYSTEM_MODE: 'system.filesystem.mode',
        ATTR_SYSTEM_FILESYSTEM_MOUNTPOINT: 'system.filesystem.mountpoint',
        ATTR_SYSTEM_FILESYSTEM_STATE: 'system.filesystem.state',
        ATTR_SYSTEM_FILESYSTEM_TYPE: 'system.filesystem.type',
        ATTR_SYSTEM_MEMORY_STATE: 'system.memory.state',
        ATTR_SYSTEM_NETWORK_STATE: 'system.network.state',
        ATTR_SYSTEM_PAGING_DIRECTION: 'system.paging.direction',
        ATTR_SYSTEM_PAGING_STATE: 'system.paging.state',
        ATTR_SYSTEM_PAGING_TYPE: 'system.paging.type',
        ATTR_SYSTEM_PROCESSES_STATUS: 'system.processes.status',
        ATTR_SYSTEM_PROCESS_STATUS: 'system.process.status',
        ATTR_TELEMETRY_DISTRO_NAME: 'telemetry.distro.name',
        ATTR_TELEMETRY_DISTRO_VERSION: 'telemetry.distro.version',
        ATTR_TELEMETRY_SDK_LANGUAGE: vd,
        ATTR_TELEMETRY_SDK_NAME: Dd,
        ATTR_TELEMETRY_SDK_VERSION: wd,
        ATTR_TEST_CASE_NAME: 'test.case.name',
        ATTR_TEST_CASE_RESULT_STATUS: 'test.case.result.status',
        ATTR_TEST_SUITE_NAME: 'test.suite.name',
        ATTR_TEST_SUITE_RUN_STATUS: 'test.suite.run.status',
        ATTR_THREAD_ID: 'thread.id',
        ATTR_THREAD_NAME: 'thread.name',
        ATTR_TLS_CIPHER: 'tls.cipher',
        ATTR_TLS_CLIENT_CERTIFICATE: 'tls.client.certificate',
        ATTR_TLS_CLIENT_CERTIFICATE_CHAIN: 'tls.client.certificate_chain',
        ATTR_TLS_CLIENT_HASH_MD5: 'tls.client.hash.md5',
        ATTR_TLS_CLIENT_HASH_SHA1: 'tls.client.hash.sha1',
        ATTR_TLS_CLIENT_HASH_SHA256: 'tls.client.hash.sha256',
        ATTR_TLS_CLIENT_ISSUER: 'tls.client.issuer',
        ATTR_TLS_CLIENT_JA3: 'tls.client.ja3',
        ATTR_TLS_CLIENT_NOT_AFTER: 'tls.client.not_after',
        ATTR_TLS_CLIENT_NOT_BEFORE: 'tls.client.not_before',
        ATTR_TLS_CLIENT_SERVER_NAME: 'tls.client.server_name',
        ATTR_TLS_CLIENT_SUBJECT: 'tls.client.subject',
        ATTR_TLS_CLIENT_SUPPORTED_CIPHERS: 'tls.client.supported_ciphers',
        ATTR_TLS_CURVE: 'tls.curve',
        ATTR_TLS_ESTABLISHED: 'tls.established',
        ATTR_TLS_NEXT_PROTOCOL: 'tls.next_protocol',
        ATTR_TLS_PROTOCOL_NAME: 'tls.protocol.name',
        ATTR_TLS_PROTOCOL_VERSION: 'tls.protocol.version',
        ATTR_TLS_RESUMED: 'tls.resumed',
        ATTR_TLS_SERVER_CERTIFICATE: 'tls.server.certificate',
        ATTR_TLS_SERVER_CERTIFICATE_CHAIN: 'tls.server.certificate_chain',
        ATTR_TLS_SERVER_HASH_MD5: 'tls.server.hash.md5',
        ATTR_TLS_SERVER_HASH_SHA1: 'tls.server.hash.sha1',
        ATTR_TLS_SERVER_HASH_SHA256: 'tls.server.hash.sha256',
        ATTR_TLS_SERVER_ISSUER: 'tls.server.issuer',
        ATTR_TLS_SERVER_JA3S: 'tls.server.ja3s',
        ATTR_TLS_SERVER_NOT_AFTER: 'tls.server.not_after',
        ATTR_TLS_SERVER_NOT_BEFORE: 'tls.server.not_before',
        ATTR_TLS_SERVER_SUBJECT: 'tls.server.subject',
        ATTR_URL_DOMAIN: 'url.domain',
        ATTR_URL_EXTENSION: 'url.extension',
        ATTR_URL_FRAGMENT: af,
        ATTR_URL_FULL: cf,
        ATTR_URL_ORIGINAL: 'url.original',
        ATTR_URL_PATH: _f,
        ATTR_URL_PORT: 'url.port',
        ATTR_URL_QUERY: uf,
        ATTR_URL_REGISTERED_DOMAIN: 'url.registered_domain',
        ATTR_URL_SCHEME: Ef,
        ATTR_URL_SUBDOMAIN: 'url.subdomain',
        ATTR_URL_TEMPLATE: 'url.template',
        ATTR_URL_TOP_LEVEL_DOMAIN: 'url.top_level_domain',
        ATTR_USER_AGENT_NAME: 'user_agent.name',
        ATTR_USER_AGENT_ORIGINAL: lf,
        ATTR_USER_AGENT_VERSION: 'user_agent.version',
        ATTR_USER_EMAIL: 'user.email',
        ATTR_USER_FULL_NAME: 'user.full_name',
        ATTR_USER_HASH: 'user.hash',
        ATTR_USER_ID: 'user.id',
        ATTR_USER_NAME: 'user.name',
        ATTR_USER_ROLES: 'user.roles',
        ATTR_V8JS_GC_TYPE: 'v8js.gc.type',
        ATTR_V8JS_HEAP_SPACE_NAME: 'v8js.heap.space.name',
        ATTR_VCS_REPOSITORY_CHANGE_ID: 'vcs.repository.change.id',
        ATTR_VCS_REPOSITORY_CHANGE_TITLE: 'vcs.repository.change.title',
        ATTR_VCS_REPOSITORY_REF_NAME: 'vcs.repository.ref.name',
        ATTR_VCS_REPOSITORY_REF_REVISION: 'vcs.repository.ref.revision',
        ATTR_VCS_REPOSITORY_REF_TYPE: 'vcs.repository.ref.type',
        ATTR_VCS_REPOSITORY_URL_FULL: 'vcs.repository.url.full',
        ATTR_WEBENGINE_DESCRIPTION: 'webengine.description',
        ATTR_WEBENGINE_NAME: 'webengine.name',
        ATTR_WEBENGINE_VERSION: 'webengine.version',
        AWS_ECS_LAUNCHTYPE_VALUE_EC2: 'ec2',
        AWS_ECS_LAUNCHTYPE_VALUE_FARGATE: 'fargate',
        CICD_PIPELINE_TASK_TYPE_VALUE_BUILD: 'build',
        CICD_PIPELINE_TASK_TYPE_VALUE_DEPLOY: 'deploy',
        CICD_PIPELINE_TASK_TYPE_VALUE_TEST: 'test',
        CLOUD_PLATFORM_VALUE_ALIBABA_CLOUD_ECS: 'alibaba_cloud_ecs',
        CLOUD_PLATFORM_VALUE_ALIBABA_CLOUD_FC: 'alibaba_cloud_fc',
        CLOUD_PLATFORM_VALUE_ALIBABA_CLOUD_OPENSHIFT: 'alibaba_cloud_openshift',
        CLOUD_PLATFORM_VALUE_AWS_APP_RUNNER: 'aws_app_runner',
        CLOUD_PLATFORM_VALUE_AWS_EC2: 'aws_ec2',
        CLOUD_PLATFORM_VALUE_AWS_ECS: 'aws_ecs',
        CLOUD_PLATFORM_VALUE_AWS_EKS: 'aws_eks',
        CLOUD_PLATFORM_VALUE_AWS_ELASTIC_BEANSTALK: 'aws_elastic_beanstalk',
        CLOUD_PLATFORM_VALUE_AWS_LAMBDA: 'aws_lambda',
        CLOUD_PLATFORM_VALUE_AWS_OPENSHIFT: 'aws_openshift',
        CLOUD_PLATFORM_VALUE_AZURE_AKS: 'azure_aks',
        CLOUD_PLATFORM_VALUE_AZURE_APP_SERVICE: 'azure_app_service',
        CLOUD_PLATFORM_VALUE_AZURE_CONTAINER_APPS: 'azure_container_apps',
        CLOUD_PLATFORM_VALUE_AZURE_CONTAINER_INSTANCES: 'azure_container_instances',
        CLOUD_PLATFORM_VALUE_AZURE_FUNCTIONS: 'azure_functions',
        CLOUD_PLATFORM_VALUE_AZURE_OPENSHIFT: 'azure_openshift',
        CLOUD_PLATFORM_VALUE_AZURE_VM: 'azure_vm',
        CLOUD_PLATFORM_VALUE_GCP_APP_ENGINE: 'gcp_app_engine',
        CLOUD_PLATFORM_VALUE_GCP_BARE_METAL_SOLUTION: 'gcp_bare_metal_solution',
        CLOUD_PLATFORM_VALUE_GCP_CLOUD_FUNCTIONS: 'gcp_cloud_functions',
        CLOUD_PLATFORM_VALUE_GCP_CLOUD_RUN: 'gcp_cloud_run',
        CLOUD_PLATFORM_VALUE_GCP_COMPUTE_ENGINE: 'gcp_compute_engine',
        CLOUD_PLATFORM_VALUE_GCP_KUBERNETES_ENGINE: 'gcp_kubernetes_engine',
        CLOUD_PLATFORM_VALUE_GCP_OPENSHIFT: 'gcp_openshift',
        CLOUD_PLATFORM_VALUE_IBM_CLOUD_OPENSHIFT: 'ibm_cloud_openshift',
        CLOUD_PLATFORM_VALUE_TENCENT_CLOUD_CVM: 'tencent_cloud_cvm',
        CLOUD_PLATFORM_VALUE_TENCENT_CLOUD_EKS: 'tencent_cloud_eks',
        CLOUD_PLATFORM_VALUE_TENCENT_CLOUD_SCF: 'tencent_cloud_scf',
        CLOUD_PROVIDER_VALUE_ALIBABA_CLOUD: 'alibaba_cloud',
        CLOUD_PROVIDER_VALUE_AWS: 'aws',
        CLOUD_PROVIDER_VALUE_AZURE: 'azure',
        CLOUD_PROVIDER_VALUE_GCP: 'gcp',
        CLOUD_PROVIDER_VALUE_HEROKU: 'heroku',
        CLOUD_PROVIDER_VALUE_IBM_CLOUD: 'ibm_cloud',
        CLOUD_PROVIDER_VALUE_TENCENT_CLOUD: 'tencent_cloud',
        CONTAINER_CPU_STATE_VALUE_KERNEL: 'kernel',
        CONTAINER_CPU_STATE_VALUE_SYSTEM: 'system',
        CONTAINER_CPU_STATE_VALUE_USER: 'user',
        CPU_MODE_VALUE_IDLE: 'idle',
        CPU_MODE_VALUE_INTERRUPT: 'interrupt',
        CPU_MODE_VALUE_IOWAIT: 'iowait',
        CPU_MODE_VALUE_KERNEL: 'kernel',
        CPU_MODE_VALUE_NICE: 'nice',
        CPU_MODE_VALUE_STEAL: 'steal',
        CPU_MODE_VALUE_SYSTEM: 'system',
        CPU_MODE_VALUE_USER: 'user',
        DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_ALL: 'all',
        DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_ANY: 'any',
        DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_EACH_QUORUM: 'each_quorum',
        DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_LOCAL_ONE: 'local_one',
        DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_LOCAL_QUORUM: 'local_quorum',
        DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_LOCAL_SERIAL: 'local_serial',
        DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_ONE: 'one',
        DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_QUORUM: 'quorum',
        DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_SERIAL: 'serial',
        DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_THREE: 'three',
        DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_TWO: 'two',
        DB_CLIENT_CONNECTIONS_STATE_VALUE_IDLE: 'idle',
        DB_CLIENT_CONNECTIONS_STATE_VALUE_USED: 'used',
        DB_CLIENT_CONNECTION_STATE_VALUE_IDLE: 'idle',
        DB_CLIENT_CONNECTION_STATE_VALUE_USED: 'used',
        DB_COSMOSDB_CONNECTION_MODE_VALUE_DIRECT: 'direct',
        DB_COSMOSDB_CONNECTION_MODE_VALUE_GATEWAY: 'gateway',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_BATCH: 'batch',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_CREATE: 'create',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_DELETE: 'delete',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_EXECUTE: 'execute',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_EXECUTE_JAVASCRIPT: 'execute_javascript',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_HEAD: 'head',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_HEAD_FEED: 'head_feed',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_INVALID: 'invalid',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_PATCH: 'patch',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_QUERY: 'query',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_QUERY_PLAN: 'query_plan',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_READ: 'read',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_READ_FEED: 'read_feed',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_REPLACE: 'replace',
        DB_COSMOSDB_OPERATION_TYPE_VALUE_UPSERT: 'upsert',
        DB_SYSTEM_VALUE_ADABAS: 'adabas',
        DB_SYSTEM_VALUE_CACHE: 'cache',
        DB_SYSTEM_VALUE_CASSANDRA: 'cassandra',
        DB_SYSTEM_VALUE_CLICKHOUSE: 'clickhouse',
        DB_SYSTEM_VALUE_CLOUDSCAPE: 'cloudscape',
        DB_SYSTEM_VALUE_COCKROACHDB: 'cockroachdb',
        DB_SYSTEM_VALUE_COLDFUSION: 'coldfusion',
        DB_SYSTEM_VALUE_COSMOSDB: 'cosmosdb',
        DB_SYSTEM_VALUE_COUCHBASE: 'couchbase',
        DB_SYSTEM_VALUE_COUCHDB: 'couchdb',
        DB_SYSTEM_VALUE_DB2: 'db2',
        DB_SYSTEM_VALUE_DERBY: 'derby',
        DB_SYSTEM_VALUE_DYNAMODB: 'dynamodb',
        DB_SYSTEM_VALUE_EDB: 'edb',
        DB_SYSTEM_VALUE_ELASTICSEARCH: 'elasticsearch',
        DB_SYSTEM_VALUE_FILEMAKER: 'filemaker',
        DB_SYSTEM_VALUE_FIREBIRD: 'firebird',
        DB_SYSTEM_VALUE_FIRSTSQL: 'firstsql',
        DB_SYSTEM_VALUE_GEODE: 'geode',
        DB_SYSTEM_VALUE_H2: 'h2',
        DB_SYSTEM_VALUE_HANADB: 'hanadb',
        DB_SYSTEM_VALUE_HBASE: 'hbase',
        DB_SYSTEM_VALUE_HIVE: 'hive',
        DB_SYSTEM_VALUE_HSQLDB: 'hsqldb',
        DB_SYSTEM_VALUE_INFLUXDB: 'influxdb',
        DB_SYSTEM_VALUE_INFORMIX: 'informix',
        DB_SYSTEM_VALUE_INGRES: 'ingres',
        DB_SYSTEM_VALUE_INSTANTDB: 'instantdb',
        DB_SYSTEM_VALUE_INTERBASE: 'interbase',
        DB_SYSTEM_VALUE_INTERSYSTEMS_CACHE: 'intersystems_cache',
        DB_SYSTEM_VALUE_MARIADB: 'mariadb',
        DB_SYSTEM_VALUE_MAXDB: 'maxdb',
        DB_SYSTEM_VALUE_MEMCACHED: 'memcached',
        DB_SYSTEM_VALUE_MONGODB: 'mongodb',
        DB_SYSTEM_VALUE_MSSQL: 'mssql',
        DB_SYSTEM_VALUE_MSSQLCOMPACT: 'mssqlcompact',
        DB_SYSTEM_VALUE_MYSQL: 'mysql',
        DB_SYSTEM_VALUE_NEO4J: 'neo4j',
        DB_SYSTEM_VALUE_NETEZZA: 'netezza',
        DB_SYSTEM_VALUE_OPENSEARCH: 'opensearch',
        DB_SYSTEM_VALUE_ORACLE: 'oracle',
        DB_SYSTEM_VALUE_OTHER_SQL: 'other_sql',
        DB_SYSTEM_VALUE_PERVASIVE: 'pervasive',
        DB_SYSTEM_VALUE_POINTBASE: 'pointbase',
        DB_SYSTEM_VALUE_POSTGRESQL: 'postgresql',
        DB_SYSTEM_VALUE_PROGRESS: 'progress',
        DB_SYSTEM_VALUE_REDIS: 'redis',
        DB_SYSTEM_VALUE_REDSHIFT: 'redshift',
        DB_SYSTEM_VALUE_SPANNER: 'spanner',
        DB_SYSTEM_VALUE_SQLITE: 'sqlite',
        DB_SYSTEM_VALUE_SYBASE: 'sybase',
        DB_SYSTEM_VALUE_TERADATA: 'teradata',
        DB_SYSTEM_VALUE_TRINO: 'trino',
        DB_SYSTEM_VALUE_VERTICA: 'vertica',
        DEPLOYMENT_STATUS_VALUE_FAILED: 'failed',
        DEPLOYMENT_STATUS_VALUE_SUCCEEDED: 'succeeded',
        DISK_IO_DIRECTION_VALUE_READ: 'read',
        DISK_IO_DIRECTION_VALUE_WRITE: 'write',
        DOTNET_GC_HEAP_GENERATION_VALUE_GEN0: 'gen0',
        DOTNET_GC_HEAP_GENERATION_VALUE_GEN1: 'gen1',
        DOTNET_GC_HEAP_GENERATION_VALUE_GEN2: 'gen2',
        DOTNET_GC_HEAP_GENERATION_VALUE_LOH: 'loh',
        DOTNET_GC_HEAP_GENERATION_VALUE_POH: 'poh',
        ERROR_TYPE_VALUE_OTHER: Xd,
        FAAS_DOCUMENT_OPERATION_VALUE_DELETE: 'delete',
        FAAS_DOCUMENT_OPERATION_VALUE_EDIT: 'edit',
        FAAS_DOCUMENT_OPERATION_VALUE_INSERT: 'insert',
        FAAS_INVOKED_PROVIDER_VALUE_ALIBABA_CLOUD: 'alibaba_cloud',
        FAAS_INVOKED_PROVIDER_VALUE_AWS: 'aws',
        FAAS_INVOKED_PROVIDER_VALUE_AZURE: 'azure',
        FAAS_INVOKED_PROVIDER_VALUE_GCP: 'gcp',
        FAAS_INVOKED_PROVIDER_VALUE_TENCENT_CLOUD: 'tencent_cloud',
        FAAS_TRIGGER_VALUE_DATASOURCE: 'datasource',
        FAAS_TRIGGER_VALUE_HTTP: 'http',
        FAAS_TRIGGER_VALUE_OTHER: 'other',
        FAAS_TRIGGER_VALUE_PUBSUB: 'pubsub',
        FAAS_TRIGGER_VALUE_TIMER: 'timer',
        GEN_AI_OPENAI_REQUEST_RESPONSE_FORMAT_VALUE_JSON_OBJECT: 'json_object',
        GEN_AI_OPENAI_REQUEST_RESPONSE_FORMAT_VALUE_JSON_SCHEMA: 'json_schema',
        GEN_AI_OPENAI_REQUEST_RESPONSE_FORMAT_VALUE_TEXT: 'text',
        GEN_AI_OPENAI_REQUEST_SERVICE_TIER_VALUE_AUTO: 'auto',
        GEN_AI_OPENAI_REQUEST_SERVICE_TIER_VALUE_DEFAULT: 'default',
        GEN_AI_OPERATION_NAME_VALUE_CHAT: 'chat',
        GEN_AI_OPERATION_NAME_VALUE_TEXT_COMPLETION: 'text_completion',
        GEN_AI_SYSTEM_VALUE_ANTHROPIC: 'anthropic',
        GEN_AI_SYSTEM_VALUE_COHERE: 'cohere',
        GEN_AI_SYSTEM_VALUE_OPENAI: 'openai',
        GEN_AI_SYSTEM_VALUE_VERTEX_AI: 'vertex_ai',
        GEN_AI_TOKEN_TYPE_VALUE_COMPLETION: 'output',
        GEN_AI_TOKEN_TYPE_VALUE_INPUT: 'input',
        GO_MEMORY_TYPE_VALUE_OTHER: 'other',
        GO_MEMORY_TYPE_VALUE_STACK: 'stack',
        GRAPHQL_OPERATION_TYPE_VALUE_MUTATION: 'mutation',
        GRAPHQL_OPERATION_TYPE_VALUE_QUERY: 'query',
        GRAPHQL_OPERATION_TYPE_VALUE_SUBSCRIPTION: 'subscription',
        HOST_ARCH_VALUE_AMD64: 'amd64',
        HOST_ARCH_VALUE_ARM32: 'arm32',
        HOST_ARCH_VALUE_ARM64: 'arm64',
        HOST_ARCH_VALUE_IA64: 'ia64',
        HOST_ARCH_VALUE_PPC32: 'ppc32',
        HOST_ARCH_VALUE_PPC64: 'ppc64',
        HOST_ARCH_VALUE_S390X: 's390x',
        HOST_ARCH_VALUE_X86: 'x86',
        HTTP_CONNECTION_STATE_VALUE_ACTIVE: 'active',
        HTTP_CONNECTION_STATE_VALUE_IDLE: 'idle',
        HTTP_FLAVOR_VALUE_HTTP_1_0: '1.0',
        HTTP_FLAVOR_VALUE_HTTP_1_1: '1.1',
        HTTP_FLAVOR_VALUE_HTTP_2_0: '2.0',
        HTTP_FLAVOR_VALUE_HTTP_3_0: '3.0',
        HTTP_FLAVOR_VALUE_QUIC: 'QUIC',
        HTTP_FLAVOR_VALUE_SPDY: 'SPDY',
        HTTP_REQUEST_METHOD_VALUE_CONNECT: iS,
        HTTP_REQUEST_METHOD_VALUE_DELETE: sS,
        HTTP_REQUEST_METHOD_VALUE_GET: 'GET',
        HTTP_REQUEST_METHOD_VALUE_HEAD: aS,
        HTTP_REQUEST_METHOD_VALUE_OPTIONS: cS,
        HTTP_REQUEST_METHOD_VALUE_OTHER: oS,
        HTTP_REQUEST_METHOD_VALUE_PATCH: _S,
        HTTP_REQUEST_METHOD_VALUE_POST: uS,
        HTTP_REQUEST_METHOD_VALUE_PUT: 'PUT',
        HTTP_REQUEST_METHOD_VALUE_TRACE: ES,
        HW_STATE_VALUE_DEGRADED: 'degraded',
        HW_STATE_VALUE_FAILED: 'failed',
        HW_STATE_VALUE_OK: 'ok',
        HW_TYPE_VALUE_BATTERY: 'battery',
        HW_TYPE_VALUE_CPU: 'cpu',
        HW_TYPE_VALUE_DISK_CONTROLLER: 'disk_controller',
        HW_TYPE_VALUE_ENCLOSURE: 'enclosure',
        HW_TYPE_VALUE_FAN: 'fan',
        HW_TYPE_VALUE_GPU: 'gpu',
        HW_TYPE_VALUE_LOGICAL_DISK: 'logical_disk',
        HW_TYPE_VALUE_MEMORY: 'memory',
        HW_TYPE_VALUE_NETWORK: 'network',
        HW_TYPE_VALUE_PHYSICAL_DISK: 'physical_disk',
        HW_TYPE_VALUE_POWER_SUPPLY: 'power_supply',
        HW_TYPE_VALUE_TAPE_DRIVE: 'tape_drive',
        HW_TYPE_VALUE_TEMPERATURE: 'temperature',
        HW_TYPE_VALUE_VOLTAGE: 'voltage',
        IOS_STATE_VALUE_ACTIVE: 'active',
        IOS_STATE_VALUE_BACKGROUND: 'background',
        IOS_STATE_VALUE_FOREGROUND: 'foreground',
        IOS_STATE_VALUE_INACTIVE: 'inactive',
        IOS_STATE_VALUE_TERMINATE: 'terminate',
        JVM_MEMORY_TYPE_VALUE_HEAP: RS,
        JVM_MEMORY_TYPE_VALUE_NON_HEAP: gS,
        JVM_THREAD_STATE_VALUE_BLOCKED: IS,
        JVM_THREAD_STATE_VALUE_NEW: 'new',
        JVM_THREAD_STATE_VALUE_RUNNABLE: NS,
        JVM_THREAD_STATE_VALUE_TERMINATED: yS,
        JVM_THREAD_STATE_VALUE_TIMED_WAITING: CS,
        JVM_THREAD_STATE_VALUE_WAITING: LS,
        K8S_VOLUME_TYPE_VALUE_CONFIG_MAP: 'configMap',
        K8S_VOLUME_TYPE_VALUE_DOWNWARD_API: 'downwardAPI',
        K8S_VOLUME_TYPE_VALUE_EMPTY_DIR: 'emptyDir',
        K8S_VOLUME_TYPE_VALUE_LOCAL: 'local',
        K8S_VOLUME_TYPE_VALUE_PERSISTENT_VOLUME_CLAIM: 'persistentVolumeClaim',
        K8S_VOLUME_TYPE_VALUE_SECRET: 'secret',
        LINUX_MEMORY_SLAB_STATE_VALUE_RECLAIMABLE: 'reclaimable',
        LINUX_MEMORY_SLAB_STATE_VALUE_UNRECLAIMABLE: 'unreclaimable',
        LOG_IOSTREAM_VALUE_STDERR: 'stderr',
        LOG_IOSTREAM_VALUE_STDOUT: 'stdout',
        MESSAGE_TYPE_VALUE_RECEIVED: 'RECEIVED',
        MESSAGE_TYPE_VALUE_SENT: 'SENT',
        MESSAGING_OPERATION_TYPE_VALUE_CREATE: 'create',
        MESSAGING_OPERATION_TYPE_VALUE_DELIVER: 'deliver',
        MESSAGING_OPERATION_TYPE_VALUE_PROCESS: 'process',
        MESSAGING_OPERATION_TYPE_VALUE_PUBLISH: 'publish',
        MESSAGING_OPERATION_TYPE_VALUE_RECEIVE: 'receive',
        MESSAGING_OPERATION_TYPE_VALUE_SEND: 'send',
        MESSAGING_OPERATION_TYPE_VALUE_SETTLE: 'settle',
        MESSAGING_ROCKETMQ_CONSUMPTION_MODEL_VALUE_BROADCASTING: 'broadcasting',
        MESSAGING_ROCKETMQ_CONSUMPTION_MODEL_VALUE_CLUSTERING: 'clustering',
        MESSAGING_ROCKETMQ_MESSAGE_TYPE_VALUE_DELAY: 'delay',
        MESSAGING_ROCKETMQ_MESSAGE_TYPE_VALUE_FIFO: 'fifo',
        MESSAGING_ROCKETMQ_MESSAGE_TYPE_VALUE_NORMAL: 'normal',
        MESSAGING_ROCKETMQ_MESSAGE_TYPE_VALUE_TRANSACTION: 'transaction',
        MESSAGING_SERVICEBUS_DISPOSITION_STATUS_VALUE_ABANDON: 'abandon',
        MESSAGING_SERVICEBUS_DISPOSITION_STATUS_VALUE_COMPLETE: 'complete',
        MESSAGING_SERVICEBUS_DISPOSITION_STATUS_VALUE_DEAD_LETTER: 'dead_letter',
        MESSAGING_SERVICEBUS_DISPOSITION_STATUS_VALUE_DEFER: 'defer',
        MESSAGING_SYSTEM_VALUE_ACTIVEMQ: 'activemq',
        MESSAGING_SYSTEM_VALUE_AWS_SQS: 'aws_sqs',
        MESSAGING_SYSTEM_VALUE_EVENTGRID: 'eventgrid',
        MESSAGING_SYSTEM_VALUE_EVENTHUBS: 'eventhubs',
        MESSAGING_SYSTEM_VALUE_GCP_PUBSUB: 'gcp_pubsub',
        MESSAGING_SYSTEM_VALUE_JMS: 'jms',
        MESSAGING_SYSTEM_VALUE_KAFKA: 'kafka',
        MESSAGING_SYSTEM_VALUE_PULSAR: 'pulsar',
        MESSAGING_SYSTEM_VALUE_RABBITMQ: 'rabbitmq',
        MESSAGING_SYSTEM_VALUE_ROCKETMQ: 'rocketmq',
        MESSAGING_SYSTEM_VALUE_SERVICEBUS: 'servicebus',
        METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS: Tf,
        METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES: pf,
        METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS: df,
        METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS: Af,
        METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION: ff,
        METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE: Sf,
        METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS: hf,
        METRIC_CONTAINER_CPU_TIME: 'container.cpu.time',
        METRIC_CONTAINER_CPU_USAGE: 'container.cpu.usage',
        METRIC_CONTAINER_DISK_IO: 'container.disk.io',
        METRIC_CONTAINER_MEMORY_USAGE: 'container.memory.usage',
        METRIC_CONTAINER_NETWORK_IO: 'container.network.io',
        METRIC_DB_CLIENT_CONNECTIONS_CREATE_TIME: 'db.client.connections.create_time',
        METRIC_DB_CLIENT_CONNECTIONS_IDLE_MAX: 'db.client.connections.idle.max',
        METRIC_DB_CLIENT_CONNECTIONS_IDLE_MIN: 'db.client.connections.idle.min',
        METRIC_DB_CLIENT_CONNECTIONS_MAX: 'db.client.connections.max',
        METRIC_DB_CLIENT_CONNECTIONS_PENDING_REQUESTS: 'db.client.connections.pending_requests',
        METRIC_DB_CLIENT_CONNECTIONS_TIMEOUTS: 'db.client.connections.timeouts',
        METRIC_DB_CLIENT_CONNECTIONS_USAGE: 'db.client.connections.usage',
        METRIC_DB_CLIENT_CONNECTIONS_USE_TIME: 'db.client.connections.use_time',
        METRIC_DB_CLIENT_CONNECTIONS_WAIT_TIME: 'db.client.connections.wait_time',
        METRIC_DB_CLIENT_CONNECTION_COUNT: 'db.client.connection.count',
        METRIC_DB_CLIENT_CONNECTION_CREATE_TIME: 'db.client.connection.create_time',
        METRIC_DB_CLIENT_CONNECTION_IDLE_MAX: 'db.client.connection.idle.max',
        METRIC_DB_CLIENT_CONNECTION_IDLE_MIN: 'db.client.connection.idle.min',
        METRIC_DB_CLIENT_CONNECTION_MAX: 'db.client.connection.max',
        METRIC_DB_CLIENT_CONNECTION_PENDING_REQUESTS: 'db.client.connection.pending_requests',
        METRIC_DB_CLIENT_CONNECTION_TIMEOUTS: 'db.client.connection.timeouts',
        METRIC_DB_CLIENT_CONNECTION_USE_TIME: 'db.client.connection.use_time',
        METRIC_DB_CLIENT_CONNECTION_WAIT_TIME: 'db.client.connection.wait_time',
        METRIC_DB_CLIENT_OPERATION_DURATION: 'db.client.operation.duration',
        METRIC_DNS_LOOKUP_DURATION: 'dns.lookup.duration',
        METRIC_DOTNET_ASSEMBLY_COUNT: 'dotnet.assembly.count',
        METRIC_DOTNET_EXCEPTIONS: 'dotnet.exceptions',
        METRIC_DOTNET_GC_COLLECTIONS: 'dotnet.gc.collections',
        METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED: 'dotnet.gc.heap.total_allocated',
        METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE:
          'dotnet.gc.last_collection.heap.fragmentation.size',
        METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE: 'dotnet.gc.last_collection.heap.size',
        METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE:
          'dotnet.gc.last_collection.memory.committed_size',
        METRIC_DOTNET_GC_PAUSE_TIME: 'dotnet.gc.pause.time',
        METRIC_DOTNET_JIT_COMPILATION_TIME: 'dotnet.jit.compilation.time',
        METRIC_DOTNET_JIT_COMPILED_IL_SIZE: 'dotnet.jit.compiled_il.size',
        METRIC_DOTNET_JIT_COMPILED_METHODS: 'dotnet.jit.compiled_methods',
        METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS: 'dotnet.monitor.lock_contentions',
        METRIC_DOTNET_PROCESS_CPU_COUNT: 'dotnet.process.cpu.count',
        METRIC_DOTNET_PROCESS_CPU_TIME: 'dotnet.process.cpu.time',
        METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET: 'dotnet.process.memory.working_set',
        METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH: 'dotnet.thread_pool.queue.length',
        METRIC_DOTNET_THREAD_POOL_THREAD_COUNT: 'dotnet.thread_pool.thread.count',
        METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT: 'dotnet.thread_pool.work_item.count',
        METRIC_DOTNET_TIMER_COUNT: 'dotnet.timer.count',
        METRIC_FAAS_COLDSTARTS: 'faas.coldstarts',
        METRIC_FAAS_CPU_USAGE: 'faas.cpu_usage',
        METRIC_FAAS_ERRORS: 'faas.errors',
        METRIC_FAAS_INIT_DURATION: 'faas.init_duration',
        METRIC_FAAS_INVOCATIONS: 'faas.invocations',
        METRIC_FAAS_INVOKE_DURATION: 'faas.invoke_duration',
        METRIC_FAAS_MEM_USAGE: 'faas.mem_usage',
        METRIC_FAAS_NET_IO: 'faas.net_io',
        METRIC_FAAS_TIMEOUTS: 'faas.timeouts',
        METRIC_GEN_AI_CLIENT_OPERATION_DURATION: 'gen_ai.client.operation.duration',
        METRIC_GEN_AI_CLIENT_TOKEN_USAGE: 'gen_ai.client.token.usage',
        METRIC_GEN_AI_SERVER_REQUEST_DURATION: 'gen_ai.server.request.duration',
        METRIC_GEN_AI_SERVER_TIME_PER_OUTPUT_TOKEN: 'gen_ai.server.time_per_output_token',
        METRIC_GEN_AI_SERVER_TIME_TO_FIRST_TOKEN: 'gen_ai.server.time_to_first_token',
        METRIC_GO_CONFIG_GOGC: 'go.config.gogc',
        METRIC_GO_GOROUTINE_COUNT: 'go.goroutine.count',
        METRIC_GO_MEMORY_ALLOCATED: 'go.memory.allocated',
        METRIC_GO_MEMORY_ALLOCATIONS: 'go.memory.allocations',
        METRIC_GO_MEMORY_GC_GOAL: 'go.memory.gc.goal',
        METRIC_GO_MEMORY_LIMIT: 'go.memory.limit',
        METRIC_GO_MEMORY_USED: 'go.memory.used',
        METRIC_GO_PROCESSOR_LIMIT: 'go.processor.limit',
        METRIC_GO_SCHEDULE_DURATION: 'go.schedule.duration',
        METRIC_HTTP_CLIENT_ACTIVE_REQUESTS: 'http.client.active_requests',
        METRIC_HTTP_CLIENT_CONNECTION_DURATION: 'http.client.connection.duration',
        METRIC_HTTP_CLIENT_OPEN_CONNECTIONS: 'http.client.open_connections',
        METRIC_HTTP_CLIENT_REQUEST_BODY_SIZE: 'http.client.request.body.size',
        METRIC_HTTP_CLIENT_REQUEST_DURATION: mf,
        METRIC_HTTP_CLIENT_RESPONSE_BODY_SIZE: 'http.client.response.body.size',
        METRIC_HTTP_SERVER_ACTIVE_REQUESTS: 'http.server.active_requests',
        METRIC_HTTP_SERVER_REQUEST_BODY_SIZE: 'http.server.request.body.size',
        METRIC_HTTP_SERVER_REQUEST_DURATION: Rf,
        METRIC_HTTP_SERVER_RESPONSE_BODY_SIZE: 'http.server.response.body.size',
        METRIC_HW_ENERGY: 'hw.energy',
        METRIC_HW_ERRORS: 'hw.errors',
        METRIC_HW_POWER: 'hw.power',
        METRIC_HW_STATUS: 'hw.status',
        METRIC_JVM_BUFFER_COUNT: 'jvm.buffer.count',
        METRIC_JVM_BUFFER_MEMORY_LIMIT: 'jvm.buffer.memory.limit',
        METRIC_JVM_BUFFER_MEMORY_USAGE: 'jvm.buffer.memory.usage',
        METRIC_JVM_BUFFER_MEMORY_USED: 'jvm.buffer.memory.used',
        METRIC_JVM_CLASS_COUNT: gf,
        METRIC_JVM_CLASS_LOADED: Of,
        METRIC_JVM_CLASS_UNLOADED: vf,
        METRIC_JVM_CPU_COUNT: If,
        METRIC_JVM_CPU_RECENT_UTILIZATION: Nf,
        METRIC_JVM_CPU_TIME: yf,
        METRIC_JVM_GC_DURATION: Cf,
        METRIC_JVM_MEMORY_COMMITTED: Lf,
        METRIC_JVM_MEMORY_INIT: 'jvm.memory.init',
        METRIC_JVM_MEMORY_LIMIT: bf,
        METRIC_JVM_MEMORY_USED: Mf,
        METRIC_JVM_MEMORY_USED_AFTER_LAST_GC: Pf,
        METRIC_JVM_SYSTEM_CPU_LOAD_1M: 'jvm.system.cpu.load_1m',
        METRIC_JVM_SYSTEM_CPU_UTILIZATION: 'jvm.system.cpu.utilization',
        METRIC_JVM_THREAD_COUNT: Uf,
        METRIC_K8S_NODE_CPU_TIME: 'k8s.node.cpu.time',
        METRIC_K8S_NODE_CPU_USAGE: 'k8s.node.cpu.usage',
        METRIC_K8S_NODE_MEMORY_USAGE: 'k8s.node.memory.usage',
        METRIC_K8S_POD_CPU_TIME: 'k8s.pod.cpu.time',
        METRIC_K8S_POD_CPU_USAGE: 'k8s.pod.cpu.usage',
        METRIC_K8S_POD_MEMORY_USAGE: 'k8s.pod.memory.usage',
        METRIC_KESTREL_ACTIVE_CONNECTIONS: Df,
        METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES: wf,
        METRIC_KESTREL_CONNECTION_DURATION: xf,
        METRIC_KESTREL_QUEUED_CONNECTIONS: Vf,
        METRIC_KESTREL_QUEUED_REQUESTS: Gf,
        METRIC_KESTREL_REJECTED_CONNECTIONS: Bf,
        METRIC_KESTREL_TLS_HANDSHAKE_DURATION: kf,
        METRIC_KESTREL_UPGRADED_CONNECTIONS: Ff,
        METRIC_MESSAGING_CLIENT_CONSUMED_MESSAGES: 'messaging.client.consumed.messages',
        METRIC_MESSAGING_CLIENT_OPERATION_DURATION: 'messaging.client.operation.duration',
        METRIC_MESSAGING_CLIENT_PUBLISHED_MESSAGES: 'messaging.client.published.messages',
        METRIC_MESSAGING_CLIENT_SENT_MESSAGES: 'messaging.client.sent.messages',
        METRIC_MESSAGING_PROCESS_DURATION: 'messaging.process.duration',
        METRIC_MESSAGING_PROCESS_MESSAGES: 'messaging.process.messages',
        METRIC_MESSAGING_PUBLISH_DURATION: 'messaging.publish.duration',
        METRIC_MESSAGING_PUBLISH_MESSAGES: 'messaging.publish.messages',
        METRIC_MESSAGING_RECEIVE_DURATION: 'messaging.receive.duration',
        METRIC_MESSAGING_RECEIVE_MESSAGES: 'messaging.receive.messages',
        METRIC_NODEJS_EVENTLOOP_DELAY_MAX: 'nodejs.eventloop.delay.max',
        METRIC_NODEJS_EVENTLOOP_DELAY_MEAN: 'nodejs.eventloop.delay.mean',
        METRIC_NODEJS_EVENTLOOP_DELAY_MIN: 'nodejs.eventloop.delay.min',
        METRIC_NODEJS_EVENTLOOP_DELAY_P50: 'nodejs.eventloop.delay.p50',
        METRIC_NODEJS_EVENTLOOP_DELAY_P90: 'nodejs.eventloop.delay.p90',
        METRIC_NODEJS_EVENTLOOP_DELAY_P99: 'nodejs.eventloop.delay.p99',
        METRIC_NODEJS_EVENTLOOP_DELAY_STDDEV: 'nodejs.eventloop.delay.stddev',
        METRIC_NODEJS_EVENTLOOP_TIME: 'nodejs.eventloop.time',
        METRIC_NODEJS_EVENTLOOP_UTILIZATION: 'nodejs.eventloop.utilization',
        METRIC_PROCESS_CONTEXT_SWITCHES: 'process.context_switches',
        METRIC_PROCESS_CPU_TIME: 'process.cpu.time',
        METRIC_PROCESS_CPU_UTILIZATION: 'process.cpu.utilization',
        METRIC_PROCESS_DISK_IO: 'process.disk.io',
        METRIC_PROCESS_MEMORY_USAGE: 'process.memory.usage',
        METRIC_PROCESS_MEMORY_VIRTUAL: 'process.memory.virtual',
        METRIC_PROCESS_NETWORK_IO: 'process.network.io',
        METRIC_PROCESS_OPEN_FILE_DESCRIPTOR_COUNT: 'process.open_file_descriptor.count',
        METRIC_PROCESS_PAGING_FAULTS: 'process.paging.faults',
        METRIC_PROCESS_THREAD_COUNT: 'process.thread.count',
        METRIC_PROCESS_UPTIME: 'process.uptime',
        METRIC_RPC_CLIENT_DURATION: 'rpc.client.duration',
        METRIC_RPC_CLIENT_REQUESTS_PER_RPC: 'rpc.client.requests_per_rpc',
        METRIC_RPC_CLIENT_REQUEST_SIZE: 'rpc.client.request.size',
        METRIC_RPC_CLIENT_RESPONSES_PER_RPC: 'rpc.client.responses_per_rpc',
        METRIC_RPC_CLIENT_RESPONSE_SIZE: 'rpc.client.response.size',
        METRIC_RPC_SERVER_DURATION: 'rpc.server.duration',
        METRIC_RPC_SERVER_REQUESTS_PER_RPC: 'rpc.server.requests_per_rpc',
        METRIC_RPC_SERVER_REQUEST_SIZE: 'rpc.server.request.size',
        METRIC_RPC_SERVER_RESPONSES_PER_RPC: 'rpc.server.responses_per_rpc',
        METRIC_RPC_SERVER_RESPONSE_SIZE: 'rpc.server.response.size',
        METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS: Hf,
        METRIC_SIGNALR_SERVER_CONNECTION_DURATION: Yf,
        METRIC_SYSTEM_CPU_FREQUENCY: 'system.cpu.frequency',
        METRIC_SYSTEM_CPU_LOGICAL_COUNT: 'system.cpu.logical.count',
        METRIC_SYSTEM_CPU_PHYSICAL_COUNT: 'system.cpu.physical.count',
        METRIC_SYSTEM_CPU_TIME: 'system.cpu.time',
        METRIC_SYSTEM_CPU_UTILIZATION: 'system.cpu.utilization',
        METRIC_SYSTEM_DISK_IO: 'system.disk.io',
        METRIC_SYSTEM_DISK_IO_TIME: 'system.disk.io_time',
        METRIC_SYSTEM_DISK_LIMIT: 'system.disk.limit',
        METRIC_SYSTEM_DISK_MERGED: 'system.disk.merged',
        METRIC_SYSTEM_DISK_OPERATIONS: 'system.disk.operations',
        METRIC_SYSTEM_DISK_OPERATION_TIME: 'system.disk.operation_time',
        METRIC_SYSTEM_FILESYSTEM_LIMIT: 'system.filesystem.limit',
        METRIC_SYSTEM_FILESYSTEM_USAGE: 'system.filesystem.usage',
        METRIC_SYSTEM_FILESYSTEM_UTILIZATION: 'system.filesystem.utilization',
        METRIC_SYSTEM_LINUX_MEMORY_AVAILABLE: 'system.linux.memory.available',
        METRIC_SYSTEM_LINUX_MEMORY_SLAB_USAGE: 'system.linux.memory.slab.usage',
        METRIC_SYSTEM_MEMORY_LIMIT: 'system.memory.limit',
        METRIC_SYSTEM_MEMORY_SHARED: 'system.memory.shared',
        METRIC_SYSTEM_MEMORY_USAGE: 'system.memory.usage',
        METRIC_SYSTEM_MEMORY_UTILIZATION: 'system.memory.utilization',
        METRIC_SYSTEM_NETWORK_CONNECTIONS: 'system.network.connections',
        METRIC_SYSTEM_NETWORK_DROPPED: 'system.network.dropped',
        METRIC_SYSTEM_NETWORK_ERRORS: 'system.network.errors',
        METRIC_SYSTEM_NETWORK_IO: 'system.network.io',
        METRIC_SYSTEM_NETWORK_PACKETS: 'system.network.packets',
        METRIC_SYSTEM_PAGING_FAULTS: 'system.paging.faults',
        METRIC_SYSTEM_PAGING_OPERATIONS: 'system.paging.operations',
        METRIC_SYSTEM_PAGING_USAGE: 'system.paging.usage',
        METRIC_SYSTEM_PAGING_UTILIZATION: 'system.paging.utilization',
        METRIC_SYSTEM_PROCESS_COUNT: 'system.process.count',
        METRIC_SYSTEM_PROCESS_CREATED: 'system.process.created',
        METRIC_V8JS_GC_DURATION: 'v8js.gc.duration',
        METRIC_V8JS_HEAP_SPACE_AVAILABLE_SIZE: 'v8js.heap.space.available_size',
        METRIC_V8JS_HEAP_SPACE_PHYSICAL_SIZE: 'v8js.heap.space.physical_size',
        METRIC_V8JS_MEMORY_HEAP_LIMIT: 'v8js.memory.heap.limit',
        METRIC_V8JS_MEMORY_HEAP_USED: 'v8js.memory.heap.used',
        NETWORK_CONNECTION_SUBTYPE_VALUE_CDMA: 'cdma',
        NETWORK_CONNECTION_SUBTYPE_VALUE_CDMA2000_1XRTT: 'cdma2000_1xrtt',
        NETWORK_CONNECTION_SUBTYPE_VALUE_EDGE: 'edge',
        NETWORK_CONNECTION_SUBTYPE_VALUE_EHRPD: 'ehrpd',
        NETWORK_CONNECTION_SUBTYPE_VALUE_EVDO_0: 'evdo_0',
        NETWORK_CONNECTION_SUBTYPE_VALUE_EVDO_A: 'evdo_a',
        NETWORK_CONNECTION_SUBTYPE_VALUE_EVDO_B: 'evdo_b',
        NETWORK_CONNECTION_SUBTYPE_VALUE_GPRS: 'gprs',
        NETWORK_CONNECTION_SUBTYPE_VALUE_GSM: 'gsm',
        NETWORK_CONNECTION_SUBTYPE_VALUE_HSDPA: 'hsdpa',
        NETWORK_CONNECTION_SUBTYPE_VALUE_HSPA: 'hspa',
        NETWORK_CONNECTION_SUBTYPE_VALUE_HSPAP: 'hspap',
        NETWORK_CONNECTION_SUBTYPE_VALUE_HSUPA: 'hsupa',
        NETWORK_CONNECTION_SUBTYPE_VALUE_IDEN: 'iden',
        NETWORK_CONNECTION_SUBTYPE_VALUE_IWLAN: 'iwlan',
        NETWORK_CONNECTION_SUBTYPE_VALUE_LTE: 'lte',
        NETWORK_CONNECTION_SUBTYPE_VALUE_LTE_CA: 'lte_ca',
        NETWORK_CONNECTION_SUBTYPE_VALUE_NR: 'nr',
        NETWORK_CONNECTION_SUBTYPE_VALUE_NRNSA: 'nrnsa',
        NETWORK_CONNECTION_SUBTYPE_VALUE_TD_SCDMA: 'td_scdma',
        NETWORK_CONNECTION_SUBTYPE_VALUE_UMTS: 'umts',
        NETWORK_CONNECTION_TYPE_VALUE_CELL: 'cell',
        NETWORK_CONNECTION_TYPE_VALUE_UNAVAILABLE: 'unavailable',
        NETWORK_CONNECTION_TYPE_VALUE_UNKNOWN: 'unknown',
        NETWORK_CONNECTION_TYPE_VALUE_WIFI: 'wifi',
        NETWORK_CONNECTION_TYPE_VALUE_WIRED: 'wired',
        NETWORK_IO_DIRECTION_VALUE_RECEIVE: 'receive',
        NETWORK_IO_DIRECTION_VALUE_TRANSMIT: 'transmit',
        NETWORK_TRANSPORT_VALUE_PIPE: VS,
        NETWORK_TRANSPORT_VALUE_QUIC: GS,
        NETWORK_TRANSPORT_VALUE_TCP: 'tcp',
        NETWORK_TRANSPORT_VALUE_UDP: 'udp',
        NETWORK_TRANSPORT_VALUE_UNIX: BS,
        NETWORK_TYPE_VALUE_IPV4: FS,
        NETWORK_TYPE_VALUE_IPV6: HS,
        NET_SOCK_FAMILY_VALUE_INET: 'inet',
        NET_SOCK_FAMILY_VALUE_INET6: 'inet6',
        NET_SOCK_FAMILY_VALUE_UNIX: 'unix',
        NET_TRANSPORT_VALUE_INPROC: 'inproc',
        NET_TRANSPORT_VALUE_IP_TCP: 'ip_tcp',
        NET_TRANSPORT_VALUE_IP_UDP: 'ip_udp',
        NET_TRANSPORT_VALUE_OTHER: 'other',
        NET_TRANSPORT_VALUE_PIPE: 'pipe',
        NODEJS_EVENTLOOP_STATE_VALUE_ACTIVE: 'active',
        NODEJS_EVENTLOOP_STATE_VALUE_IDLE: 'idle',
        OPENTRACING_REF_TYPE_VALUE_CHILD_OF: 'child_of',
        OPENTRACING_REF_TYPE_VALUE_FOLLOWS_FROM: 'follows_from',
        OS_TYPE_VALUE_AIX: 'aix',
        OS_TYPE_VALUE_DARWIN: 'darwin',
        OS_TYPE_VALUE_DRAGONFLYBSD: 'dragonflybsd',
        OS_TYPE_VALUE_FREEBSD: 'freebsd',
        OS_TYPE_VALUE_HPUX: 'hpux',
        OS_TYPE_VALUE_LINUX: 'linux',
        OS_TYPE_VALUE_NETBSD: 'netbsd',
        OS_TYPE_VALUE_OPENBSD: 'openbsd',
        OS_TYPE_VALUE_SOLARIS: 'solaris',
        OS_TYPE_VALUE_WINDOWS: 'windows',
        OS_TYPE_VALUE_Z_OS: 'z_os',
        OTEL_STATUS_CODE_VALUE_ERROR: WS,
        OTEL_STATUS_CODE_VALUE_OK: 'OK',
        PROCESS_CONTEXT_SWITCH_TYPE_VALUE_INVOLUNTARY: 'involuntary',
        PROCESS_CONTEXT_SWITCH_TYPE_VALUE_VOLUNTARY: 'voluntary',
        PROCESS_CPU_STATE_VALUE_SYSTEM: 'system',
        PROCESS_CPU_STATE_VALUE_USER: 'user',
        PROCESS_CPU_STATE_VALUE_WAIT: 'wait',
        PROCESS_PAGING_FAULT_TYPE_VALUE_MAJOR: 'major',
        PROCESS_PAGING_FAULT_TYPE_VALUE_MINOR: 'minor',
        PROFILE_FRAME_TYPE_VALUE_CPYTHON: 'cpython',
        PROFILE_FRAME_TYPE_VALUE_DOTNET: 'dotnet',
        PROFILE_FRAME_TYPE_VALUE_JVM: 'jvm',
        PROFILE_FRAME_TYPE_VALUE_KERNEL: 'kernel',
        PROFILE_FRAME_TYPE_VALUE_NATIVE: 'native',
        PROFILE_FRAME_TYPE_VALUE_PERL: 'perl',
        PROFILE_FRAME_TYPE_VALUE_PHP: 'php',
        PROFILE_FRAME_TYPE_VALUE_RUBY: 'ruby',
        PROFILE_FRAME_TYPE_VALUE_V8JS: 'v8js',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_ABORTED: 'aborted',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_ALREADY_EXISTS: 'already_exists',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_CANCELLED: 'cancelled',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_DATA_LOSS: 'data_loss',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_DEADLINE_EXCEEDED: 'deadline_exceeded',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_FAILED_PRECONDITION: 'failed_precondition',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_INTERNAL: 'internal',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_INVALID_ARGUMENT: 'invalid_argument',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_NOT_FOUND: 'not_found',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_OUT_OF_RANGE: 'out_of_range',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_PERMISSION_DENIED: 'permission_denied',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_RESOURCE_EXHAUSTED: 'resource_exhausted',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_UNAUTHENTICATED: 'unauthenticated',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_UNAVAILABLE: 'unavailable',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_UNIMPLEMENTED: 'unimplemented',
        RPC_CONNECT_RPC_ERROR_CODE_VALUE_UNKNOWN: 'unknown',
        RPC_GRPC_STATUS_CODE_VALUE_ABORTED: 10,
        RPC_GRPC_STATUS_CODE_VALUE_ALREADY_EXISTS: 6,
        RPC_GRPC_STATUS_CODE_VALUE_CANCELLED: 1,
        RPC_GRPC_STATUS_CODE_VALUE_DATA_LOSS: 15,
        RPC_GRPC_STATUS_CODE_VALUE_DEADLINE_EXCEEDED: 4,
        RPC_GRPC_STATUS_CODE_VALUE_FAILED_PRECONDITION: 9,
        RPC_GRPC_STATUS_CODE_VALUE_INTERNAL: 13,
        RPC_GRPC_STATUS_CODE_VALUE_INVALID_ARGUMENT: 3,
        RPC_GRPC_STATUS_CODE_VALUE_NOT_FOUND: 5,
        RPC_GRPC_STATUS_CODE_VALUE_OK: 0,
        RPC_GRPC_STATUS_CODE_VALUE_OUT_OF_RANGE: 11,
        RPC_GRPC_STATUS_CODE_VALUE_PERMISSION_DENIED: 7,
        RPC_GRPC_STATUS_CODE_VALUE_RESOURCE_EXHAUSTED: 8,
        RPC_GRPC_STATUS_CODE_VALUE_UNAUTHENTICATED: 16,
        RPC_GRPC_STATUS_CODE_VALUE_UNAVAILABLE: 14,
        RPC_GRPC_STATUS_CODE_VALUE_UNIMPLEMENTED: 12,
        RPC_GRPC_STATUS_CODE_VALUE_UNKNOWN: 2,
        RPC_MESSAGE_TYPE_VALUE_RECEIVED: 'RECEIVED',
        RPC_MESSAGE_TYPE_VALUE_SENT: 'SENT',
        RPC_SYSTEM_VALUE_APACHE_DUBBO: 'apache_dubbo',
        RPC_SYSTEM_VALUE_CONNECT_RPC: 'connect_rpc',
        RPC_SYSTEM_VALUE_DOTNET_WCF: 'dotnet_wcf',
        RPC_SYSTEM_VALUE_GRPC: 'grpc',
        RPC_SYSTEM_VALUE_JAVA_RMI: 'java_rmi',
        SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN: ZS,
        SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE: ef,
        SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT: tf,
        SIGNALR_TRANSPORT_VALUE_LONG_POLLING: rf,
        SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS: of,
        SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS: sf,
        STATE_VALUE_IDLE: 'idle',
        STATE_VALUE_USED: 'used',
        SYSTEM_CPU_STATE_VALUE_IDLE: 'idle',
        SYSTEM_CPU_STATE_VALUE_INTERRUPT: 'interrupt',
        SYSTEM_CPU_STATE_VALUE_IOWAIT: 'iowait',
        SYSTEM_CPU_STATE_VALUE_NICE: 'nice',
        SYSTEM_CPU_STATE_VALUE_STEAL: 'steal',
        SYSTEM_CPU_STATE_VALUE_SYSTEM: 'system',
        SYSTEM_CPU_STATE_VALUE_USER: 'user',
        SYSTEM_FILESYSTEM_STATE_VALUE_FREE: 'free',
        SYSTEM_FILESYSTEM_STATE_VALUE_RESERVED: 'reserved',
        SYSTEM_FILESYSTEM_STATE_VALUE_USED: 'used',
        SYSTEM_FILESYSTEM_TYPE_VALUE_EXFAT: 'exfat',
        SYSTEM_FILESYSTEM_TYPE_VALUE_EXT4: 'ext4',
        SYSTEM_FILESYSTEM_TYPE_VALUE_FAT32: 'fat32',
        SYSTEM_FILESYSTEM_TYPE_VALUE_HFSPLUS: 'hfsplus',
        SYSTEM_FILESYSTEM_TYPE_VALUE_NTFS: 'ntfs',
        SYSTEM_FILESYSTEM_TYPE_VALUE_REFS: 'refs',
        SYSTEM_MEMORY_STATE_VALUE_BUFFERS: 'buffers',
        SYSTEM_MEMORY_STATE_VALUE_CACHED: 'cached',
        SYSTEM_MEMORY_STATE_VALUE_FREE: 'free',
        SYSTEM_MEMORY_STATE_VALUE_SHARED: 'shared',
        SYSTEM_MEMORY_STATE_VALUE_USED: 'used',
        SYSTEM_NETWORK_STATE_VALUE_CLOSE: 'close',
        SYSTEM_NETWORK_STATE_VALUE_CLOSE_WAIT: 'close_wait',
        SYSTEM_NETWORK_STATE_VALUE_CLOSING: 'closing',
        SYSTEM_NETWORK_STATE_VALUE_DELETE: 'delete',
        SYSTEM_NETWORK_STATE_VALUE_ESTABLISHED: 'established',
        SYSTEM_NETWORK_STATE_VALUE_FIN_WAIT_1: 'fin_wait_1',
        SYSTEM_NETWORK_STATE_VALUE_FIN_WAIT_2: 'fin_wait_2',
        SYSTEM_NETWORK_STATE_VALUE_LAST_ACK: 'last_ack',
        SYSTEM_NETWORK_STATE_VALUE_LISTEN: 'listen',
        SYSTEM_NETWORK_STATE_VALUE_SYN_RECV: 'syn_recv',
        SYSTEM_NETWORK_STATE_VALUE_SYN_SENT: 'syn_sent',
        SYSTEM_NETWORK_STATE_VALUE_TIME_WAIT: 'time_wait',
        SYSTEM_PAGING_DIRECTION_VALUE_IN: 'in',
        SYSTEM_PAGING_DIRECTION_VALUE_OUT: 'out',
        SYSTEM_PAGING_STATE_VALUE_FREE: 'free',
        SYSTEM_PAGING_STATE_VALUE_USED: 'used',
        SYSTEM_PAGING_TYPE_VALUE_MAJOR: 'major',
        SYSTEM_PAGING_TYPE_VALUE_MINOR: 'minor',
        SYSTEM_PROCESSES_STATUS_VALUE_DEFUNCT: 'defunct',
        SYSTEM_PROCESSES_STATUS_VALUE_RUNNING: 'running',
        SYSTEM_PROCESSES_STATUS_VALUE_SLEEPING: 'sleeping',
        SYSTEM_PROCESSES_STATUS_VALUE_STOPPED: 'stopped',
        SYSTEM_PROCESS_STATUS_VALUE_DEFUNCT: 'defunct',
        SYSTEM_PROCESS_STATUS_VALUE_RUNNING: 'running',
        SYSTEM_PROCESS_STATUS_VALUE_SLEEPING: 'sleeping',
        SYSTEM_PROCESS_STATUS_VALUE_STOPPED: 'stopped',
        TELEMETRY_SDK_LANGUAGE_VALUE_CPP: 'cpp',
        TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET: Id,
        TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG: Nd,
        TELEMETRY_SDK_LANGUAGE_VALUE_GO: 'go',
        TELEMETRY_SDK_LANGUAGE_VALUE_JAVA: yd,
        TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS: Cd,
        TELEMETRY_SDK_LANGUAGE_VALUE_PHP: 'php',
        TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON: Ld,
        TELEMETRY_SDK_LANGUAGE_VALUE_RUBY: bd,
        TELEMETRY_SDK_LANGUAGE_VALUE_RUST: Md,
        TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT: Pd,
        TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS: Ud,
        TEST_CASE_RESULT_STATUS_VALUE_FAIL: 'fail',
        TEST_CASE_RESULT_STATUS_VALUE_PASS: 'pass',
        TEST_SUITE_RUN_STATUS_VALUE_ABORTED: 'aborted',
        TEST_SUITE_RUN_STATUS_VALUE_FAILURE: 'failure',
        TEST_SUITE_RUN_STATUS_VALUE_IN_PROGRESS: 'in_progress',
        TEST_SUITE_RUN_STATUS_VALUE_SKIPPED: 'skipped',
        TEST_SUITE_RUN_STATUS_VALUE_SUCCESS: 'success',
        TEST_SUITE_RUN_STATUS_VALUE_TIMED_OUT: 'timed_out',
        TLS_PROTOCOL_NAME_VALUE_SSL: 'ssl',
        TLS_PROTOCOL_NAME_VALUE_TLS: 'tls',
        V8JS_GC_TYPE_VALUE_INCREMENTAL: 'incremental',
        V8JS_GC_TYPE_VALUE_MAJOR: 'major',
        V8JS_GC_TYPE_VALUE_MINOR: 'minor',
        V8JS_GC_TYPE_VALUE_WEAKCB: 'weakcb',
        V8JS_HEAP_SPACE_NAME_VALUE_CODE_SPACE: 'code_space',
        V8JS_HEAP_SPACE_NAME_VALUE_LARGE_OBJECT_SPACE: 'large_object_space',
        V8JS_HEAP_SPACE_NAME_VALUE_MAP_SPACE: 'map_space',
        V8JS_HEAP_SPACE_NAME_VALUE_NEW_SPACE: 'new_space',
        V8JS_HEAP_SPACE_NAME_VALUE_OLD_SPACE: 'old_space',
        VCS_REPOSITORY_REF_TYPE_VALUE_BRANCH: 'branch',
        VCS_REPOSITORY_REF_TYPE_VALUE_TAG: 'tag',
      }),
    )
  !(function (e) {
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ATTR_IMQA_USER_INTERACTION_PREV_HREF =
        e.ATTR_IMQA_BROWSER_LOCATION_HREF =
        e.ATTR_IMQA_LONGTASK_DURATION =
        e.ATTR_IMQA_LONGTASK_ENTRY_TYPE =
        e.ATTR_IMQA_LONGTASK_NAME =
        e.ATTR_IMQA_DOCUMENT_SCREEN_XY =
        e.ATTR_IMQA_DOCUMENT_REFERRER =
        e.ATTR_IMQA_CONNECTIVITY_ONLINE =
        e.ATTR_IMQA_LINK_SPAN_ID =
        e.ATTR_IMQA_LINK_TRACE_ID =
        e.ATTR_IMQA_HTTP_REQUEST_BODY =
        e.ATTR_IMQA_RUM_SCRIPT_INSTANCE =
        e.ATTR_IMQA_RUM_VERSION =
        e.ATTR_IMQA_AGENT_VERSION =
        e.ATTR_IMQA_SERVICE_KEY =
        e.ATTR_IMQA_LOG_MESSAGE =
        e.ATTR_IMQA_LOG_LEVEL =
        e.ATTR_IMQA_SESSION_ID =
        e.ATTR_IMQA_SCREEN_TYPE =
        e.ATTR_IMQA_SCREEN_NAME =
        e.ATTR_IMQA_SPAN_TYPE =
        e.ATTR_IMQA_RUM_COMPONENT =
        e.ATTR_IMQA_BROWSER_VERSION_MAJOR =
        e.ATTR_IMQA_BROWSER_VERSION =
        e.ATTR_IMQA_BROWSER_NAME =
        e.ATTR_IMQA_BROWSER_DEVICE =
        e.INCUBATING =
          void 0)
    const t = H
    t.__exportStar(jf, e)
    const n = t.__importStar(mx)
    ;(e.INCUBATING = n),
      (e.ATTR_IMQA_BROWSER_DEVICE = 'imqa.browser.device'),
      (e.ATTR_IMQA_BROWSER_NAME = 'imqa.browser.name'),
      (e.ATTR_IMQA_BROWSER_VERSION = 'imqa.browser.version'),
      (e.ATTR_IMQA_BROWSER_VERSION_MAJOR = 'imqa.browser.version_major'),
      (e.ATTR_IMQA_RUM_COMPONENT = 'component'),
      (e.ATTR_IMQA_SPAN_TYPE = 'span.type'),
      (e.ATTR_IMQA_SCREEN_NAME = 'screen.name'),
      (e.ATTR_IMQA_SCREEN_TYPE = 'screen.type'),
      (e.ATTR_IMQA_SESSION_ID = 'session.id'),
      (e.ATTR_IMQA_LOG_LEVEL = 'level'),
      (e.ATTR_IMQA_LOG_MESSAGE = 'message'),
      (e.ATTR_IMQA_SERVICE_KEY = 'service.key'),
      (e.ATTR_IMQA_AGENT_VERSION = 'imqa.agent.version'),
      (e.ATTR_IMQA_RUM_VERSION = 'rum.version'),
      (e.ATTR_IMQA_RUM_SCRIPT_INSTANCE = 'rum.scriptInstance'),
      (e.ATTR_IMQA_HTTP_REQUEST_BODY = 'http.request.body'),
      (e.ATTR_IMQA_LINK_TRACE_ID = 'link.traceId'),
      (e.ATTR_IMQA_LINK_SPAN_ID = 'link.spanId'),
      (e.ATTR_IMQA_CONNECTIVITY_ONLINE = 'online'),
      (e.ATTR_IMQA_DOCUMENT_REFERRER = 'document.referrer'),
      (e.ATTR_IMQA_DOCUMENT_SCREEN_XY = 'screen.xy'),
      (e.ATTR_IMQA_LONGTASK_NAME = 'longtask.name'),
      (e.ATTR_IMQA_LONGTASK_ENTRY_TYPE = 'longtask.entry_type'),
      (e.ATTR_IMQA_LONGTASK_DURATION = 'longtask.duration'),
      (e.ATTR_IMQA_BROWSER_LOCATION_HREF = 'location.href'),
      (e.ATTR_IMQA_USER_INTERACTION_PREV_HREF = 'prev.href')
  })(hx)
  var Rx = {}
  Object.defineProperty(Rx, '__esModule', { value: !0 }),
    (Rx.generateId = function (e) {
      return 'x'.repeat(e / 4).replace(/x/g, function () {
        return ((16 * Math.random()) | 0).toString(16)
      })
    }),
    (Rx.findCookieValue = function (e) {
      const t = decodeURIComponent(document.cookie).split(';')
      for (let n = 0; n < t.length; n++) {
        const r = t[n].trim()
        if (0 === r.indexOf(e + '=')) return r.substring((e + '=').length, r.length)
      }
      return
    }),
    (Rx.isIframe = function () {
      try {
        return window.self !== window.top
      } catch (e) {
        return console.error(e), !0
      }
    }),
    (function (e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.COOKIE_NAME = void 0),
        (e.setSessionId = function (e) {
          ;(window.__imqa_session_id = e), l()
        }),
        (e.updateSessionStatus = l),
        (e.initSessionTracking = function (e, t, n) {
          n && (a = n)
          ;(s = e), (_ = !0), (c = t), l()
          const r = setInterval(() => l(), 1e3 * i)
          return (
            ['click', 'scroll', 'mousedown', 'keydown', 'touchend', 'visibilitychange'].forEach(
              (e) => document.addEventListener(e, u, { capture: !0, passive: !0 }),
            ),
            {
              deinit: () => {
                clearInterval(r), (s = void 0), (c = void 0)
              },
            }
          )
        }),
        (e.getRumSessionId = T),
        (e.setRumSessionId = function (e) {
          e.setAttribute(t.ATTR_IMQA_SESSION_ID, T())
        })
      const t = hx,
        n = Rx,
        r = 144e5,
        o = 900,
        i = 60
      let s
      e.COOKIE_NAME = '__imqa_rum_sid'
      let a,
        c,
        _ = !1
      function u() {
        _ = !0
      }
      function E(e) {
        const t = Date.now()
        return e > t || t > e + r
      }
      function l() {
        let t = (function () {
          if (window.__imqa_session_id) return
          const t = (0, n.findCookieValue)(e.COOKIE_NAME)
          if (!t) return
          const r = decodeURIComponent(t)
          if (!r) return
          let o
          try {
            o = JSON.parse(r)
          } catch (e) {
            return void console.error(e)
          }
          return o &&
            'object' == typeof o &&
            o.id &&
            'string' == typeof o.id &&
            o.id.length &&
            32 === o.id.length &&
            o.startTime &&
            'number' == typeof o.startTime &&
            !E(o.startTime)
            ? o
            : void 0
        })()
        t ||
          ((t = window.__imqa_session_id
            ? { id: window.__imqa_session_id, startTime: Date.now() }
            : { id: (0, n.generateId)(128), startTime: Date.now() }),
          (_ = !0)),
          (s = t.id),
          s && (null == c || c.emit('session-changed', { sessionId: s })),
          _ &&
            (function (t) {
              if (E(t.startTime)) return
              const r = encodeURIComponent(JSON.stringify(t)),
                i = a ? `domain=${a};` : ''
              let s = e.COOKIE_NAME + '=' + r + '; path=/;' + i + 'max-age=' + o
              ;(0, n.isIframe)() ? (s += ';SameSite=None; Secure') : (s += ';SameSite=Strict'),
                (document.cookie = s)
            })(t),
          (_ = !1)
      }
      function T() {
        return s || ''
      }
    })(Ax)
  var gx = {}
  !(function (e) {
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.setScreenName = e.getScreenName = e.getTitle = void 0)
    e.getTitle = () => {
      if (!document) return ''
      const e = document.getElementsByTagName('title')[0]
      return e ? e.innerHTML : 'unknown'
    }
    e.getScreenName = (t) => {
      if (!window) return 'unknown'
      const n = (0, e.getTitle)()
      if ('titleOnly' === t) return n
      const r = window.location.href || 'unknown'
      return 'routeOnly' === t ? r : `${n} - ${r}`
    }
    e.setScreenName = (t, n) => {
      t.setAttribute('screen.name', (0, e.getScreenName)(n)), t.setAttribute('screen.type', 'page')
    }
  })(gx)
  var Ox,
    vx = {}
  function Ix() {
    if (Ox) return vx
    return (
      (Ox = 1),
      Object.defineProperty(vx, '__esModule', { value: !0 }),
      (vx.limitLen = function (e, t) {
        return e.length > t ? e.substring(0, t) : e
      }),
      (vx.getElementXPath = function e(t, n) {
        if (t.nodeType === Node.DOCUMENT_NODE) return '/'
        const r = (function (e, t) {
          const n = e.nodeType,
            r = (function (e) {
              if (!e.parentNode) return 0
              const t = [e.nodeType]
              e.nodeType === Node.CDATA_SECTION_NODE && t.push(Node.TEXT_NODE)
              let n = Array.from(e.parentNode.childNodes)
              if (
                ((n = n.filter((n) => {
                  const r = n.localName
                  return t.indexOf(n.nodeType) >= 0 && r === e.localName
                })),
                n.length >= 1)
              )
                return n.indexOf(e) + 1
              return 0
            })(e)
          let o = ''
          if (n === Node.ELEMENT_NODE) {
            const n = e.getAttribute('id')
            if (t && n) return `//*[@id="${n}"]`
            o = e.localName
          } else if (n === Node.TEXT_NODE || n === Node.CDATA_SECTION_NODE) o = 'text()'
          else {
            if (n !== Node.COMMENT_NODE) return ''
            o = 'comment()'
          }
          if (o && r > 1) return `/${o}[${r}]`
          return `/${o}`
        })(t, n)
        if (n && r.indexOf('@id') > 0) return r
        let o = ''
        t.parentNode && (o += e(t.parentNode, !1))
        return (o += r), o
      }),
      vx
    )
  }
  !(function (e) {
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.IMQAErrorInstrumentation =
        e.ERROR_INSTRUMENTATION_VERSION =
        e.ERROR_INSTRUMENTATION_NAME =
          void 0)
    const t = zt,
      n = MA,
      o = H.__importStar(fA),
      i = Ax,
      s = gx,
      a = r,
      c = Ix(),
      _ = Symbol('traceId'),
      u = Symbol('spanId')
    function E(e) {
      return e && '' !== e.trim() && !e.startsWith('[object') && 'error' !== e
    }
    function l(e) {
      return void 0 === e ? '(undefined)' : e.toString()
    }
    function T(e, t) {
      t &&
        t.stack &&
        E(t.stack) &&
        e.setAttribute('error.stack', (0, c.limitLen)(t.stack.toString(), 4096))
    }
    ;(e.ERROR_INSTRUMENTATION_NAME = '@imqa/errors'), (e.ERROR_INSTRUMENTATION_VERSION = '1')
    class p extends n.InstrumentationBase {
      constructor(t) {
        super(e.ERROR_INSTRUMENTATION_NAME, e.ERROR_INSTRUMENTATION_VERSION, t),
          (this._consoleErrorHandler =
            (e) =>
            (...t) => (this.imqaReport('console.error', t), e.apply(this, t))),
          (this._unhandledRejectionListener = (e) => {
            this.imqaReport('unhandledrejection', e.reason)
          }),
          (this._errorListener = (e) => {
            this.imqaReport('onerror', e)
          }),
          (this._documentErrorListener = (e) => {
            this.imqaReport('eventListener.error', e)
          })
      }
      init() {}
      enable() {
        o.wrap(console, 'error', this._consoleErrorHandler),
          window.addEventListener('unhandledrejection', this._unhandledRejectionListener),
          window.addEventListener('error', this._errorListener),
          document.documentElement.addEventListener('error', this._documentErrorListener, {
            capture: !0,
          })
      }
      disable() {
        o.unwrap(console, 'error'),
          window.removeEventListener('unhandledrejection', this._unhandledRejectionListener),
          window.removeEventListener('error', this._errorListener),
          document.documentElement.removeEventListener('error', this._documentErrorListener, {
            capture: !0,
          })
      }
      imqaReportError(e, n) {
        const r = n.message || n.toString()
        if (!E(r) && !n.stack) return
        const o = Date.now(),
          l = this.tracer.startSpan(e, { startTime: o })
        l.setAttribute('component', 'error'),
          l.setAttribute('span.type', 'error'),
          l.setAttribute('error', !0),
          l.setAttribute(
            'error.object',
            E(n.name) ? n.name : n.constructor && n.constructor.name ? n.constructor.name : 'Error',
          ),
          l.setAttribute('error.message', (0, c.limitLen)(r, 1024)),
          T(l, n),
          (0, i.setRumSessionId)(l),
          (0, s.setScreenName)(l, 'full')
        const p = t.context
          .active()
          .setValue(_, l.spanContext().traceId)
          .setValue(u, l.spanContext().spanId)
        this.logger.emit({
          timestamp: o,
          severityText: 'error',
          severityNumber: 17,
          body: r,
          attributes: {
            component: 'error',
            'span.type': 'error',
            'screen.name': 'full',
            'session.id': (0, i.getRumSessionId)(),
          },
          context: p,
        }),
          (0, a.recordException)(n, { tracer: this.tracer, span: l }).finally(() => {
            l.end(o)
          })
      }
      imqaReportString(e, n, r) {
        if (!E(n)) return
        const o = Date.now(),
          l = this.tracer.startSpan(e, { startTime: o })
        l.setAttribute('component', 'error'),
          l.setAttribute('error', !0),
          l.setAttribute('error.object', 'String'),
          l.setAttribute('error.message', (0, c.limitLen)(n, 1024)),
          (0, i.setRumSessionId)(l),
          (0, s.setScreenName)(l, 'full')
        const p = t.context
          .active()
          .setValue(_, l.spanContext().traceId)
          .setValue(u, l.spanContext().spanId)
        this.logger.emit({
          timestamp: o,
          severityText: 'error',
          severityNumber: 17,
          body: n,
          attributes: {
            component: 'error',
            'span.type': 'error',
            'screen.name': 'full',
            'session.id': (0, i.getRumSessionId)(),
          },
          context: p,
        }),
          r
            ? (T(l, r),
              (0, a.recordException)(r, { tracer: this.tracer, span: l }).finally(() => {
                l.end(o)
              }))
            : l.end(o)
      }
      imqaReportErrorEvent(e, t) {
        t.error ? this.imqaReport(e, t.error) : t.message && this.imqaReport(e, t.message)
      }
      imqaReportEvent(e, t) {
        if (!t.target && !E(t.type)) return
        const n = Date.now(),
          r = this.tracer.startSpan(e, { startTime: n })
        r.setAttribute('component', 'error'),
          r.setAttribute('error.type', t.type),
          t.target &&
            (r.setAttribute('target_element', t.target.tagName),
            r.setAttribute('target_xpath', (0, c.getElementXPath)(t.target, !0)),
            r.setAttribute('target_src', t.target.src)),
          (0, i.setRumSessionId)(r),
          (0, s.setScreenName)(r, 'full'),
          (0, a.recordException)(t, { tracer: this.tracer, span: r }).finally(() => {
            r.end(n)
          })
      }
      imqaReport(e, t) {
        if (!Array.isArray(t) || 0 !== t.length)
          if ((t instanceof Array && 1 === t.length && (t = t[0]), t instanceof Error))
            this.imqaReportError(e, t)
          else if (t instanceof ErrorEvent) this.imqaReportErrorEvent(e, t)
          else if (t instanceof Event) this.imqaReportEvent(e, t)
          else if ('string' == typeof t) this.imqaReportString(e, t)
          else if (t instanceof Array) {
            const n = t.find((e) => e instanceof Error)
            this.imqaReportString(e, t.map((e) => l(e)).join(' '), n)
          } else this.imqaReportString(e, l(t))
      }
    }
    e.IMQAErrorInstrumentation = p
  })(fx)
  var Nx = de('OpenTelemetry SDK Context Key SUPPRESS_TRACING')
  function yx(e) {
    return e.setValue(Nx, !0)
  }
  function Cx(e) {
    return !0 === e.getValue(Nx)
  }
  var Lx = 'baggage',
    bx = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    }
  var Mx = (function () {
      function e() {}
      return (
        (e.prototype.inject = function (e, t, n) {
          var r = jt.getBaggage(e)
          if (r && !Cx(e)) {
            var o = (function (e) {
                return e.getAllEntries().map(function (e) {
                  var t = bx(e, 2),
                    n = t[0],
                    r = t[1],
                    o = encodeURIComponent(n) + '=' + encodeURIComponent(r.value)
                  return void 0 !== r.metadata && (o += ';' + r.metadata.toString()), o
                })
              })(r)
                .filter(function (e) {
                  return e.length <= 4096
                })
                .slice(0, 180),
              i = (function (e) {
                return e.reduce(function (e, t) {
                  var n = e + ('' !== e ? ',' : '') + t
                  return n.length > 8192 ? e : n
                }, '')
              })(o)
            i.length > 0 && n.set(t, Lx, i)
          }
        }),
        (e.prototype.extract = function (e, t, n) {
          var r = n.get(t, Lx),
            o = Array.isArray(r) ? r.join(',') : r
          if (!o) return e
          var i = {}
          return 0 === o.length
            ? e
            : (o.split(',').forEach(function (e) {
                var t = (function (e) {
                  var t = e.split(';')
                  if (!(t.length <= 0)) {
                    var n = t.shift()
                    if (n) {
                      var r = n.indexOf('=')
                      if (!(r <= 0)) {
                        var o,
                          i = decodeURIComponent(n.substring(0, r).trim()),
                          s = decodeURIComponent(n.substring(r + 1).trim())
                        return (
                          t.length > 0 && (o = pe(t.join(';'))), { key: i, value: s, metadata: o }
                        )
                      }
                    }
                  }
                })(e)
                if (t) {
                  var n = { value: t.value }
                  t.metadata && (n.metadata = t.metadata), (i[t.key] = n)
                }
              }),
              0 === Object.entries(i).length ? e : jt.setBaggage(e, jt.createBaggage(i)))
        }),
        (e.prototype.fields = function () {
          return [Lx]
        }),
        e
      )
    })(),
    Px = function (e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0
      if (n) return n.call(e)
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          },
        }
      throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    },
    Ux = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    }
  function Dx(e) {
    var t,
      n,
      r = {}
    if ('object' != typeof e || null == e) return r
    try {
      for (var o = Px(Object.entries(e)), i = o.next(); !i.done; i = o.next()) {
        var s = Ux(i.value, 2),
          a = s[0],
          c = s[1]
        wx(a)
          ? xx(c)
            ? Array.isArray(c)
              ? (r[a] = c.slice())
              : (r[a] = c)
            : Lt.warn('Invalid attribute value set for key: ' + a)
          : Lt.warn('Invalid attribute key: ' + a)
      }
    } catch (e) {
      t = { error: e }
    } finally {
      try {
        i && !i.done && (n = o.return) && n.call(o)
      } finally {
        if (t) throw t.error
      }
    }
    return r
  }
  function wx(e) {
    return 'string' == typeof e && e.length > 0
  }
  function xx(e) {
    return (
      null == e ||
      (Array.isArray(e)
        ? (function (e) {
            var t, n, r
            try {
              for (var o = Px(e), i = o.next(); !i.done; i = o.next()) {
                var s = i.value
                if (null != s) {
                  if (!r) {
                    if (Vx(s)) {
                      r = typeof s
                      continue
                    }
                    return !1
                  }
                  if (typeof s !== r) return !1
                }
              }
            } catch (e) {
              t = { error: e }
            } finally {
              try {
                i && !i.done && (n = o.return) && n.call(o)
              } finally {
                if (t) throw t.error
              }
            }
            return !0
          })(e)
        : Vx(e))
    )
  }
  function Vx(e) {
    switch (typeof e) {
      case 'number':
      case 'boolean':
      case 'string':
        return !0
    }
    return !1
  }
  var Gx,
    Bx = function (e) {
      Lt.error(
        (function (e) {
          return 'string' == typeof e
            ? e
            : JSON.stringify(
                (function (e) {
                  for (var t = {}, n = e; null !== n; )
                    Object.getOwnPropertyNames(n).forEach(function (e) {
                      if (!t[e]) {
                        var r = n[e]
                        r && (t[e] = String(r))
                      }
                    }),
                      (n = Object.getPrototypeOf(n))
                  return t
                })(e),
              )
        })(e),
      )
    }
  function kx(e) {
    try {
      Bx(e)
    } catch (e) {}
  }
  !(function (e) {
    ;(e.AlwaysOff = 'always_off'),
      (e.AlwaysOn = 'always_on'),
      (e.ParentBasedAlwaysOff = 'parentbased_always_off'),
      (e.ParentBasedAlwaysOn = 'parentbased_always_on'),
      (e.ParentBasedTraceIdRatio = 'parentbased_traceidratio'),
      (e.TraceIdRatio = 'traceidratio')
  })(Gx || (Gx = {}))
  var Fx = ['OTEL_SDK_DISABLED']
  function Hx(e) {
    return Fx.indexOf(e) > -1
  }
  var Yx = [
    'OTEL_BSP_EXPORT_TIMEOUT',
    'OTEL_BSP_MAX_EXPORT_BATCH_SIZE',
    'OTEL_BSP_MAX_QUEUE_SIZE',
    'OTEL_BSP_SCHEDULE_DELAY',
    'OTEL_BLRP_EXPORT_TIMEOUT',
    'OTEL_BLRP_MAX_EXPORT_BATCH_SIZE',
    'OTEL_BLRP_MAX_QUEUE_SIZE',
    'OTEL_BLRP_SCHEDULE_DELAY',
    'OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT',
    'OTEL_ATTRIBUTE_COUNT_LIMIT',
    'OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT',
    'OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT',
    'OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT',
    'OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT',
    'OTEL_SPAN_EVENT_COUNT_LIMIT',
    'OTEL_SPAN_LINK_COUNT_LIMIT',
    'OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT',
    'OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT',
    'OTEL_EXPORTER_OTLP_TIMEOUT',
    'OTEL_EXPORTER_OTLP_TRACES_TIMEOUT',
    'OTEL_EXPORTER_OTLP_METRICS_TIMEOUT',
    'OTEL_EXPORTER_OTLP_LOGS_TIMEOUT',
    'OTEL_EXPORTER_JAEGER_AGENT_PORT',
  ]
  function jx(e) {
    return Yx.indexOf(e) > -1
  }
  var Kx = ['OTEL_NO_PATCH_MODULES', 'OTEL_PROPAGATORS', 'OTEL_SEMCONV_STABILITY_OPT_IN']
  function Wx(e) {
    return Kx.indexOf(e) > -1
  }
  var qx = 1 / 0,
    Qx = 128,
    zx = {
      OTEL_SDK_DISABLED: !1,
      CONTAINER_NAME: '',
      ECS_CONTAINER_METADATA_URI_V4: '',
      ECS_CONTAINER_METADATA_URI: '',
      HOSTNAME: '',
      KUBERNETES_SERVICE_HOST: '',
      NAMESPACE: '',
      OTEL_BSP_EXPORT_TIMEOUT: 3e4,
      OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
      OTEL_BSP_MAX_QUEUE_SIZE: 2048,
      OTEL_BSP_SCHEDULE_DELAY: 5e3,
      OTEL_BLRP_EXPORT_TIMEOUT: 3e4,
      OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
      OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
      OTEL_BLRP_SCHEDULE_DELAY: 5e3,
      OTEL_EXPORTER_JAEGER_AGENT_HOST: '',
      OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
      OTEL_EXPORTER_JAEGER_ENDPOINT: '',
      OTEL_EXPORTER_JAEGER_PASSWORD: '',
      OTEL_EXPORTER_JAEGER_USER: '',
      OTEL_EXPORTER_OTLP_ENDPOINT: '',
      OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: '',
      OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: '',
      OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: '',
      OTEL_EXPORTER_OTLP_HEADERS: '',
      OTEL_EXPORTER_OTLP_TRACES_HEADERS: '',
      OTEL_EXPORTER_OTLP_METRICS_HEADERS: '',
      OTEL_EXPORTER_OTLP_LOGS_HEADERS: '',
      OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
      OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
      OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
      OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 1e4,
      OTEL_EXPORTER_ZIPKIN_ENDPOINT: 'http://localhost:9411/api/v2/spans',
      OTEL_LOG_LEVEL: ee.INFO,
      OTEL_NO_PATCH_MODULES: [],
      OTEL_PROPAGATORS: ['tracecontext', 'baggage'],
      OTEL_RESOURCE_ATTRIBUTES: '',
      OTEL_SERVICE_NAME: '',
      OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: qx,
      OTEL_ATTRIBUTE_COUNT_LIMIT: Qx,
      OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: qx,
      OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: Qx,
      OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: qx,
      OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: Qx,
      OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
      OTEL_SPAN_LINK_COUNT_LIMIT: 128,
      OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: 128,
      OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: 128,
      OTEL_TRACES_EXPORTER: '',
      OTEL_TRACES_SAMPLER: Gx.ParentBasedAlwaysOn,
      OTEL_TRACES_SAMPLER_ARG: '',
      OTEL_LOGS_EXPORTER: '',
      OTEL_EXPORTER_OTLP_INSECURE: '',
      OTEL_EXPORTER_OTLP_TRACES_INSECURE: '',
      OTEL_EXPORTER_OTLP_METRICS_INSECURE: '',
      OTEL_EXPORTER_OTLP_LOGS_INSECURE: '',
      OTEL_EXPORTER_OTLP_CERTIFICATE: '',
      OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: '',
      OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: '',
      OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: '',
      OTEL_EXPORTER_OTLP_COMPRESSION: '',
      OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: '',
      OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: '',
      OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: '',
      OTEL_EXPORTER_OTLP_CLIENT_KEY: '',
      OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: '',
      OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: '',
      OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: '',
      OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: '',
      OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: '',
      OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: '',
      OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: '',
      OTEL_EXPORTER_OTLP_PROTOCOL: 'http/protobuf',
      OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: 'http/protobuf',
      OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: 'http/protobuf',
      OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: 'http/protobuf',
      OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: 'cumulative',
      OTEL_SEMCONV_STABILITY_OPT_IN: [],
    }
  function $x(e, t, n) {
    if (void 0 !== n[e]) {
      var r = String(n[e])
      t[e] = 'true' === r.toLowerCase()
    }
  }
  function Xx(e, t, n, r, o) {
    if ((void 0 === r && (r = -1 / 0), void 0 === o && (o = 1 / 0), void 0 !== n[e])) {
      var i = Number(n[e])
      isNaN(i) || (t[e] = i < r ? r : i > o ? o : i)
    }
  }
  function Jx(e, t, n, r) {
    void 0 === r && (r = ',')
    var o = n[e]
    'string' == typeof o &&
      (t[e] = o.split(r).map(function (e) {
        return e.trim()
      }))
  }
  var Zx = {
    ALL: ee.ALL,
    VERBOSE: ee.VERBOSE,
    DEBUG: ee.DEBUG,
    INFO: ee.INFO,
    WARN: ee.WARN,
    ERROR: ee.ERROR,
    NONE: ee.NONE,
  }
  function eV(e, t, n) {
    var r = n[e]
    if ('string' == typeof r) {
      var o = Zx[r.toUpperCase()]
      null != o && (t[e] = o)
    }
  }
  function tV(e) {
    var t = {}
    for (var n in zx) {
      var r = n
      if ('OTEL_LOG_LEVEL' === r) eV(r, t, e)
      else if (Hx(r)) $x(r, t, e)
      else if (jx(r)) Xx(r, t, e)
      else if (Wx(r)) Jx(r, t, e)
      else {
        var o = e[r]
        null != o && (t[r] = String(o))
      }
    }
    return t
  }
  var nV =
    'object' == typeof globalThis
      ? globalThis
      : 'object' == typeof self
        ? self
        : 'object' == typeof window
          ? window
          : 'object' == typeof global
            ? global
            : {}
  function rV() {
    var e = tV(nV)
    return Object.assign({}, zx, e)
  }
  function oV() {
    return tV(nV)
  }
  function iV(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 97 && e <= 102 ? e - 87 : e - 55
  }
  function sV(e) {
    for (var t = new Uint8Array(e.length / 2), n = 0, r = 0; r < e.length; r += 2) {
      var o = iV(e.charCodeAt(r)),
        i = iV(e.charCodeAt(r + 1))
      t[n++] = (o << 4) | i
    }
    return t
  }
  var aV,
    cV = performance,
    _V =
      (((aV = {})[yT] = 'opentelemetry'),
      (aV[mT] = 'browser'),
      (aV[CT] = fd),
      (aV[LT] = '1.30.1'),
      aV)
  var uV,
    EV = Math.pow(10, 6),
    lV = Math.pow(10, 9)
  function TV(e) {
    var t = e / 1e3
    return [Math.trunc(t), Math.round((e % 1e3) * EV)]
  }
  function pV() {
    var e = cV.timeOrigin
    if ('number' != typeof e) {
      var t = cV
      e = t.timing && t.timing.fetchStart
    }
    return e
  }
  function dV(e) {
    return RV(TV(pV()), TV('number' == typeof e ? e : cV.now()))
  }
  function SV(e) {
    if (hV(e)) return e
    if ('number' == typeof e) return e < pV() ? dV(e) : TV(e)
    if (e instanceof Date) return TV(e.getTime())
    throw TypeError('Invalid input type')
  }
  function fV(e) {
    return e[0] * lV + e[1]
  }
  function AV(e) {
    return 1e6 * e[0] + e[1] / 1e3
  }
  function hV(e) {
    return Array.isArray(e) && 2 === e.length && 'number' == typeof e[0] && 'number' == typeof e[1]
  }
  function mV(e) {
    return hV(e) || 'number' == typeof e || e instanceof Date
  }
  function RV(e, t) {
    var n = [e[0] + t[0], e[1] + t[1]]
    return n[1] >= lV && ((n[1] -= lV), (n[0] += 1)), n
  }
  !(function (e) {
    ;(e[(e.SUCCESS = 0)] = 'SUCCESS'), (e[(e.FAILED = 1)] = 'FAILED')
  })(uV || (uV = {}))
  var gV = function (e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0
      if (n) return n.call(e)
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          },
        }
      throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    },
    OV = (function () {
      function e(e) {
        var t
        void 0 === e && (e = {}),
          (this._propagators = null !== (t = e.propagators) && void 0 !== t ? t : []),
          (this._fields = Array.from(
            new Set(
              this._propagators
                .map(function (e) {
                  return 'function' == typeof e.fields ? e.fields() : []
                })
                .reduce(function (e, t) {
                  return e.concat(t)
                }, []),
            ),
          ))
      }
      return (
        (e.prototype.inject = function (e, t, n) {
          var r, o
          try {
            for (var i = gV(this._propagators), s = i.next(); !s.done; s = i.next()) {
              var a = s.value
              try {
                a.inject(e, t, n)
              } catch (e) {
                Lt.warn('Failed to inject with ' + a.constructor.name + '. Err: ' + e.message)
              }
            }
          } catch (e) {
            r = { error: e }
          } finally {
            try {
              s && !s.done && (o = i.return) && o.call(i)
            } finally {
              if (r) throw r.error
            }
          }
        }),
        (e.prototype.extract = function (e, t, n) {
          return this._propagators.reduce(function (e, r) {
            try {
              return r.extract(e, t, n)
            } catch (e) {
              Lt.warn('Failed to extract with ' + r.constructor.name + '. Err: ' + e.message)
            }
            return e
          }, e)
        }),
        (e.prototype.fields = function () {
          return this._fields.slice()
        }),
        e
      )
    })(),
    vV = '[_0-9a-z-*/]',
    IV = new RegExp(
      '^(?:' +
        ('[a-z]' + vV + '{0,255}') +
        '|' +
        ('[a-z0-9]' + vV + '{0,240}@[a-z]' + vV + '{0,13}') +
        ')$',
    ),
    NV = /^[ -~]{0,255}[!-~]$/,
    yV = /,|=/
  var CV = (function () {
      function e(e) {
        ;(this._internalState = new Map()), e && this._parse(e)
      }
      return (
        (e.prototype.set = function (e, t) {
          var n = this._clone()
          return (
            n._internalState.has(e) && n._internalState.delete(e), n._internalState.set(e, t), n
          )
        }),
        (e.prototype.unset = function (e) {
          var t = this._clone()
          return t._internalState.delete(e), t
        }),
        (e.prototype.get = function (e) {
          return this._internalState.get(e)
        }),
        (e.prototype.serialize = function () {
          var e = this
          return this._keys()
            .reduce(function (t, n) {
              return t.push(n + '=' + e.get(n)), t
            }, [])
            .join(',')
        }),
        (e.prototype._parse = function (e) {
          e.length > 512 ||
            ((this._internalState = e
              .split(',')
              .reverse()
              .reduce(function (e, t) {
                var n = t.trim(),
                  r = n.indexOf('=')
                if (-1 !== r) {
                  var o = n.slice(0, r),
                    i = n.slice(r + 1, t.length)
                  ;(function (e) {
                    return IV.test(e)
                  })(o) &&
                    (function (e) {
                      return NV.test(e) && !yV.test(e)
                    })(i) &&
                    e.set(o, i)
                }
                return e
              }, new Map())),
            this._internalState.size > 32 &&
              (this._internalState = new Map(
                Array.from(this._internalState.entries()).reverse().slice(0, 32),
              )))
        }),
        (e.prototype._keys = function () {
          return Array.from(this._internalState.keys()).reverse()
        }),
        (e.prototype._clone = function () {
          var t = new e()
          return (t._internalState = new Map(this._internalState)), t
        }),
        e
      )
    })(),
    LV = 'traceparent',
    bV = 'tracestate',
    MV = new RegExp(
      '^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$',
    )
  var PV,
    UV,
    DV = (function () {
      function e() {}
      return (
        (e.prototype.inject = function (e, t, n) {
          var r = qt.getSpanContext(e)
          if (r && !Cx(e) && lt(r)) {
            var o =
              '00-' +
              r.traceId +
              '-' +
              r.spanId +
              '-0' +
              Number(r.traceFlags || ke.NONE).toString(16)
            n.set(t, LV, o), r.traceState && n.set(t, bV, r.traceState.serialize())
          }
        }),
        (e.prototype.extract = function (e, t, n) {
          var r = n.get(t, LV)
          if (!r) return e
          var o = Array.isArray(r) ? r[0] : r
          if ('string' != typeof o) return e
          var i = (function (e) {
            var t = MV.exec(e)
            return t
              ? '00' === t[1] && t[5]
                ? null
                : { traceId: t[2], spanId: t[3], traceFlags: parseInt(t[4], 16) }
              : null
          })(o)
          if (!i) return e
          i.isRemote = !0
          var s = n.get(t, bV)
          if (s) {
            var a = Array.isArray(s) ? s.join(',') : s
            i.traceState = new CV('string' == typeof a ? a : void 0)
          }
          return qt.setSpanContext(e, i)
        }),
        (e.prototype.fields = function () {
          return [LV, bV]
        }),
        e
      )
    })(),
    wV = '[object Null]',
    xV = '[object Undefined]',
    VV = Function.prototype.toString,
    GV = VV.call(Object),
    BV =
      ((PV = Object.getPrototypeOf),
      (UV = Object),
      function (e) {
        return PV(UV(e))
      }),
    kV = Object.prototype,
    FV = kV.hasOwnProperty,
    HV = Symbol ? Symbol.toStringTag : void 0,
    YV = kV.toString
  function jV(e) {
    if (
      !(function (e) {
        return null != e && 'object' == typeof e
      })(e) ||
      '[object Object]' !==
        (function (e) {
          if (null == e) return void 0 === e ? xV : wV
          return HV && HV in Object(e)
            ? (function (e) {
                var t = FV.call(e, HV),
                  n = e[HV],
                  r = !1
                try {
                  ;(e[HV] = void 0), (r = !0)
                } catch (e) {}
                var o = YV.call(e)
                r && (t ? (e[HV] = n) : delete e[HV])
                return o
              })(e)
            : (function (e) {
                return YV.call(e)
              })(e)
        })(e)
    )
      return !1
    var t = BV(e)
    if (null === t) return !0
    var n = FV.call(t, 'constructor') && t.constructor
    return 'function' == typeof n && n instanceof n && VV.call(n) === GV
  }
  function KV() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    for (var n = e.shift(), r = new WeakMap(); e.length > 0; ) n = qV(n, e.shift(), 0, r)
    return n
  }
  function WV(e) {
    return zV(e) ? e.slice() : e
  }
  function qV(e, t, n, r) {
    var o
    if ((void 0 === n && (n = 0), !(n > 20))) {
      if ((n++, JV(e) || JV(t) || $V(t))) o = WV(t)
      else if (zV(e)) {
        if (((o = e.slice()), zV(t))) for (var i = 0, s = t.length; i < s; i++) o.push(WV(t[i]))
        else if (XV(t))
          for (i = 0, s = (a = Object.keys(t)).length; i < s; i++) {
            o[(c = a[i])] = WV(t[c])
          }
      } else if (XV(e))
        if (XV(t)) {
          if (
            !(function (e, t) {
              if (!jV(e) || !jV(t)) return !1
              return !0
            })(e, t)
          )
            return t
          o = Object.assign({}, e)
          var a
          for (i = 0, s = (a = Object.keys(t)).length; i < s; i++) {
            var c,
              _ = t[(c = a[i])]
            if (JV(_)) void 0 === _ ? delete o[c] : (o[c] = _)
            else {
              var u = o[c],
                E = _
              if (QV(e, c, r) || QV(t, c, r)) delete o[c]
              else {
                if (XV(u) && XV(E)) {
                  var l = r.get(u) || [],
                    T = r.get(E) || []
                  l.push({ obj: e, key: c }), T.push({ obj: t, key: c }), r.set(u, l), r.set(E, T)
                }
                o[c] = qV(o[c], _, n, r)
              }
            }
          }
        } else o = t
      return o
    }
  }
  function QV(e, t, n) {
    for (var r = n.get(e[t]) || [], o = 0, i = r.length; o < i; o++) {
      var s = r[o]
      if (s.key === t && s.obj === e) return !0
    }
    return !1
  }
  function zV(e) {
    return Array.isArray(e)
  }
  function $V(e) {
    return 'function' == typeof e
  }
  function XV(e) {
    return !JV(e) && !zV(e) && !$V(e) && 'object' == typeof e
  }
  function JV(e) {
    return (
      'string' == typeof e ||
      'number' == typeof e ||
      'boolean' == typeof e ||
      void 0 === e ||
      e instanceof Date ||
      e instanceof RegExp ||
      null === e
    )
  }
  var ZV = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    eG = (function (e) {
      function t(n) {
        var r = e.call(this, n) || this
        return Object.setPrototypeOf(r, t.prototype), r
      }
      return ZV(t, e), t
    })(Error)
  function tG(e, t) {
    var n,
      r = new Promise(function (e, r) {
        n = setTimeout(function () {
          r(new eG('Operation timed out.'))
        }, t)
      })
    return Promise.race([e, r]).then(
      function (e) {
        return clearTimeout(n), e
      },
      function (e) {
        throw (clearTimeout(n), e)
      },
    )
  }
  var nG = function (e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0
    if (n) return n.call(e)
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        },
      }
    throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
  }
  function rG(e, t) {
    return 'string' == typeof t ? e === t : !!e.match(t)
  }
  function oG(e, t) {
    var n, r
    if (!t) return !1
    try {
      for (var o = nG(t), i = o.next(); !i.done; i = o.next()) {
        if (rG(e, i.value)) return !0
      }
    } catch (e) {
      n = { error: e }
    } finally {
      try {
        i && !i.done && (r = o.return) && r.call(o)
      } finally {
        if (n) throw n.error
      }
    }
    return !1
  }
  var iG = (function () {
      function e() {
        var e = this
        this._promise = new Promise(function (t, n) {
          ;(e._resolve = t), (e._reject = n)
        })
      }
      return (
        Object.defineProperty(e.prototype, 'promise', {
          get: function () {
            return this._promise
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.resolve = function (e) {
          this._resolve(e)
        }),
        (e.prototype.reject = function (e) {
          this._reject(e)
        }),
        e
      )
    })(),
    sG = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    aG = function (e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; o < i; o++)
          (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
      return e.concat(r || Array.prototype.slice.call(t))
    },
    cG = (function () {
      function e(e, t) {
        ;(this._callback = e), (this._that = t), (this._isCalled = !1), (this._deferred = new iG())
      }
      return (
        Object.defineProperty(e.prototype, 'isCalled', {
          get: function () {
            return this._isCalled
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'promise', {
          get: function () {
            return this._deferred.promise
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.call = function () {
          for (var e, t = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
          if (!this._isCalled) {
            this._isCalled = !0
            try {
              Promise.resolve((e = this._callback).call.apply(e, aG([this._that], sG(n), !1))).then(
                function (e) {
                  return t._deferred.resolve(e)
                },
                function (e) {
                  return t._deferred.reject(e)
                },
              )
            } catch (e) {
              this._deferred.reject(e)
            }
          }
          return this._deferred.promise
        }),
        e
      )
    })()
  var _G,
    uG = {
      _export: function (e, t) {
        return new Promise(function (n) {
          Ct.with(yx(Ct.active()), function () {
            e.export(t, function (e) {
              n(e)
            })
          })
        })
      },
    },
    EG = function () {
      return (
        (EG =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }),
        EG.apply(this, arguments)
      )
    },
    lG = function (e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0
      if (n) return n.call(e)
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          },
        }
      throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    },
    TG = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    pG = function (e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; o < i; o++)
          (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
      return e.concat(r || Array.prototype.slice.call(t))
    },
    dG = (function () {
      function e(e, t, n, r, o, i, s, a, c, _) {
        void 0 === s && (s = []),
          (this.attributes = {}),
          (this.links = []),
          (this.events = []),
          (this._droppedAttributesCount = 0),
          (this._droppedEventsCount = 0),
          (this._droppedLinksCount = 0),
          (this.status = { code: At.UNSET }),
          (this.endTime = [0, 0]),
          (this._ended = !1),
          (this._duration = [-1, -1]),
          (this.name = n),
          (this._spanContext = r),
          (this.parentSpanId = i),
          (this.kind = o),
          (this.links = s)
        var u = Date.now()
        ;(this._performanceStartTime = cV.now()),
          (this._performanceOffset = u - (this._performanceStartTime + pV())),
          (this._startTimeProvided = null != a),
          (this.startTime = this._getTime(null != a ? a : u)),
          (this.resource = e.resource),
          (this.instrumentationLibrary = e.instrumentationLibrary),
          (this._spanLimits = e.getSpanLimits()),
          (this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0),
          null != _ && this.setAttributes(_),
          (this._spanProcessor = e.getActiveSpanProcessor()),
          this._spanProcessor.onStart(this, t)
      }
      return (
        (e.prototype.spanContext = function () {
          return this._spanContext
        }),
        (e.prototype.setAttribute = function (e, t) {
          return null == t || this._isSpanEnded()
            ? this
            : 0 === e.length
              ? (Lt.warn('Invalid attribute key: ' + e), this)
              : xx(t)
                ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit &&
                  !Object.prototype.hasOwnProperty.call(this.attributes, e)
                  ? (this._droppedAttributesCount++, this)
                  : ((this.attributes[e] = this._truncateToSize(t)), this)
                : (Lt.warn('Invalid attribute value set for key: ' + e), this)
        }),
        (e.prototype.setAttributes = function (e) {
          var t, n
          try {
            for (var r = lG(Object.entries(e)), o = r.next(); !o.done; o = r.next()) {
              var i = TG(o.value, 2),
                s = i[0],
                a = i[1]
              this.setAttribute(s, a)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r)
            } finally {
              if (t) throw t.error
            }
          }
          return this
        }),
        (e.prototype.addEvent = function (e, t, n) {
          if (this._isSpanEnded()) return this
          if (0 === this._spanLimits.eventCountLimit)
            return Lt.warn('No events allowed.'), this._droppedEventsCount++, this
          this.events.length >= this._spanLimits.eventCountLimit &&
            (0 === this._droppedEventsCount && Lt.debug('Dropping extra events.'),
            this.events.shift(),
            this._droppedEventsCount++),
            mV(t) && (mV(n) || (n = t), (t = void 0))
          var r = Dx(t)
          return (
            this.events.push({
              name: e,
              attributes: r,
              time: this._getTime(n),
              droppedAttributesCount: 0,
            }),
            this
          )
        }),
        (e.prototype.addLink = function (e) {
          return this.links.push(e), this
        }),
        (e.prototype.addLinks = function (e) {
          var t
          return (t = this.links).push.apply(t, pG([], TG(e), !1)), this
        }),
        (e.prototype.setStatus = function (e) {
          return (
            this._isSpanEnded() ||
              ((this.status = EG({}, e)),
              null != this.status.message &&
                'string' != typeof e.message &&
                (Lt.warn(
                  "Dropping invalid status.message of type '" +
                    typeof e.message +
                    "', expected 'string'",
                ),
                delete this.status.message)),
            this
          )
        }),
        (e.prototype.updateName = function (e) {
          return this._isSpanEnded() || (this.name = e), this
        }),
        (e.prototype.end = function (e) {
          this._isSpanEnded()
            ? Lt.error(
                this.name +
                  ' ' +
                  this._spanContext.traceId +
                  '-' +
                  this._spanContext.spanId +
                  ' - You can only call end() on a span once.',
              )
            : ((this._ended = !0),
              (this.endTime = this._getTime(e)),
              (this._duration = (function (e, t) {
                var n = t[0] - e[0],
                  r = t[1] - e[1]
                return r < 0 && ((n -= 1), (r += lV)), [n, r]
              })(this.startTime, this.endTime)),
              this._duration[0] < 0 &&
                (Lt.warn(
                  'Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.',
                  this.startTime,
                  this.endTime,
                ),
                (this.endTime = this.startTime.slice()),
                (this._duration = [0, 0])),
              this._droppedEventsCount > 0 &&
                Lt.warn(
                  'Dropped ' + this._droppedEventsCount + ' events because eventCountLimit reached',
                ),
              this._spanProcessor.onEnd(this))
        }),
        (e.prototype._getTime = function (e) {
          if ('number' == typeof e && e <= cV.now()) return dV(e + this._performanceOffset)
          if ('number' == typeof e) return TV(e)
          if (e instanceof Date) return TV(e.getTime())
          if (hV(e)) return e
          if (this._startTimeProvided) return TV(Date.now())
          var t = cV.now() - this._performanceStartTime
          return RV(this.startTime, TV(t))
        }),
        (e.prototype.isRecording = function () {
          return !1 === this._ended
        }),
        (e.prototype.recordException = function (e, t) {
          var n = {}
          'string' == typeof e
            ? (n[Ho] = e)
            : e &&
              (e.code ? (n[Fo] = e.code.toString()) : e.name && (n[Fo] = e.name),
              e.message && (n[Ho] = e.message),
              e.stack && (n[Yo] = e.stack)),
            n[Fo] || n[Ho]
              ? this.addEvent('exception', n, t)
              : Lt.warn('Failed to record an exception ' + e)
        }),
        Object.defineProperty(e.prototype, 'duration', {
          get: function () {
            return this._duration
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'ended', {
          get: function () {
            return this._ended
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'droppedAttributesCount', {
          get: function () {
            return this._droppedAttributesCount
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'droppedEventsCount', {
          get: function () {
            return this._droppedEventsCount
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'droppedLinksCount', {
          get: function () {
            return this._droppedLinksCount
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype._isSpanEnded = function () {
          return (
            this._ended &&
              Lt.warn(
                'Can not execute the operation on ended Span {traceId: ' +
                  this._spanContext.traceId +
                  ', spanId: ' +
                  this._spanContext.spanId +
                  '}',
              ),
            this._ended
          )
        }),
        (e.prototype._truncateToLimitUtil = function (e, t) {
          return e.length <= t ? e : e.substring(0, t)
        }),
        (e.prototype._truncateToSize = function (e) {
          var t = this,
            n = this._attributeValueLengthLimit
          return n <= 0
            ? (Lt.warn('Attribute value limit must be positive, got ' + n), e)
            : 'string' == typeof e
              ? this._truncateToLimitUtil(e, n)
              : Array.isArray(e)
                ? e.map(function (e) {
                    return 'string' == typeof e ? t._truncateToLimitUtil(e, n) : e
                  })
                : e
        }),
        e
      )
    })()
  !(function (e) {
    ;(e[(e.NOT_RECORD = 0)] = 'NOT_RECORD'),
      (e[(e.RECORD = 1)] = 'RECORD'),
      (e[(e.RECORD_AND_SAMPLED = 2)] = 'RECORD_AND_SAMPLED')
  })(_G || (_G = {}))
  var SG = (function () {
      function e() {}
      return (
        (e.prototype.shouldSample = function () {
          return { decision: _G.NOT_RECORD }
        }),
        (e.prototype.toString = function () {
          return 'AlwaysOffSampler'
        }),
        e
      )
    })(),
    fG = (function () {
      function e() {}
      return (
        (e.prototype.shouldSample = function () {
          return { decision: _G.RECORD_AND_SAMPLED }
        }),
        (e.prototype.toString = function () {
          return 'AlwaysOnSampler'
        }),
        e
      )
    })(),
    AG = (function () {
      function e(e) {
        var t, n, r, o
        ;(this._root = e.root),
          this._root ||
            (kx(new Error('ParentBasedSampler must have a root sampler configured')),
            (this._root = new fG())),
          (this._remoteParentSampled =
            null !== (t = e.remoteParentSampled) && void 0 !== t ? t : new fG()),
          (this._remoteParentNotSampled =
            null !== (n = e.remoteParentNotSampled) && void 0 !== n ? n : new SG()),
          (this._localParentSampled =
            null !== (r = e.localParentSampled) && void 0 !== r ? r : new fG()),
          (this._localParentNotSampled =
            null !== (o = e.localParentNotSampled) && void 0 !== o ? o : new SG())
      }
      return (
        (e.prototype.shouldSample = function (e, t, n, r, o, i) {
          var s = qt.getSpanContext(e)
          return s && lt(s)
            ? s.isRemote
              ? s.traceFlags & ke.SAMPLED
                ? this._remoteParentSampled.shouldSample(e, t, n, r, o, i)
                : this._remoteParentNotSampled.shouldSample(e, t, n, r, o, i)
              : s.traceFlags & ke.SAMPLED
                ? this._localParentSampled.shouldSample(e, t, n, r, o, i)
                : this._localParentNotSampled.shouldSample(e, t, n, r, o, i)
            : this._root.shouldSample(e, t, n, r, o, i)
        }),
        (e.prototype.toString = function () {
          return (
            'ParentBased{root=' +
            this._root.toString() +
            ', remoteParentSampled=' +
            this._remoteParentSampled.toString() +
            ', remoteParentNotSampled=' +
            this._remoteParentNotSampled.toString() +
            ', localParentSampled=' +
            this._localParentSampled.toString() +
            ', localParentNotSampled=' +
            this._localParentNotSampled.toString() +
            '}'
          )
        }),
        e
      )
    })(),
    hG = (function () {
      function e(e) {
        void 0 === e && (e = 0),
          (this._ratio = e),
          (this._ratio = this._normalize(e)),
          (this._upperBound = Math.floor(4294967295 * this._ratio))
      }
      return (
        (e.prototype.shouldSample = function (e, t) {
          return {
            decision:
              ut(t) && this._accumulate(t) < this._upperBound
                ? _G.RECORD_AND_SAMPLED
                : _G.NOT_RECORD,
          }
        }),
        (e.prototype.toString = function () {
          return 'TraceIdRatioBased{' + this._ratio + '}'
        }),
        (e.prototype._normalize = function (e) {
          return 'number' != typeof e || isNaN(e) ? 0 : e >= 1 ? 1 : e <= 0 ? 0 : e
        }),
        (e.prototype._accumulate = function (e) {
          for (var t = 0, n = 0; n < e.length / 8; n++) {
            var r = 8 * n
            t = (t ^ parseInt(e.slice(r, r + 8), 16)) >>> 0
          }
          return t
        }),
        e
      )
    })(),
    mG = Gx.AlwaysOn
  function RG() {
    var e = rV()
    return {
      sampler: gG(e),
      forceFlushTimeoutMillis: 3e4,
      generalLimits: {
        attributeValueLengthLimit: e.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
        attributeCountLimit: e.OTEL_ATTRIBUTE_COUNT_LIMIT,
      },
      spanLimits: {
        attributeValueLengthLimit: e.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
        attributeCountLimit: e.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
        linkCountLimit: e.OTEL_SPAN_LINK_COUNT_LIMIT,
        eventCountLimit: e.OTEL_SPAN_EVENT_COUNT_LIMIT,
        attributePerEventCountLimit: e.OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
        attributePerLinkCountLimit: e.OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT,
      },
      mergeResourceWithDefaults: !0,
    }
  }
  function gG(e) {
    switch ((void 0 === e && (e = rV()), e.OTEL_TRACES_SAMPLER)) {
      case Gx.AlwaysOn:
        return new fG()
      case Gx.AlwaysOff:
        return new SG()
      case Gx.ParentBasedAlwaysOn:
        return new AG({ root: new fG() })
      case Gx.ParentBasedAlwaysOff:
        return new AG({ root: new SG() })
      case Gx.TraceIdRatio:
        return new hG(OG(e))
      case Gx.ParentBasedTraceIdRatio:
        return new AG({ root: new hG(OG(e)) })
      default:
        return (
          Lt.error(
            'OTEL_TRACES_SAMPLER value "' +
              e.OTEL_TRACES_SAMPLER +
              ' invalid, defaulting to ' +
              mG +
              '".',
          ),
          new fG()
        )
    }
  }
  function OG(e) {
    if (void 0 === e.OTEL_TRACES_SAMPLER_ARG || '' === e.OTEL_TRACES_SAMPLER_ARG)
      return Lt.error('OTEL_TRACES_SAMPLER_ARG is blank, defaulting to 1.'), 1
    var t = Number(e.OTEL_TRACES_SAMPLER_ARG)
    return isNaN(t)
      ? (Lt.error(
          'OTEL_TRACES_SAMPLER_ARG=' +
            e.OTEL_TRACES_SAMPLER_ARG +
            ' was given, but it is invalid, defaulting to 1.',
        ),
        1)
      : t < 0 || t > 1
        ? (Lt.error(
            'OTEL_TRACES_SAMPLER_ARG=' +
              e.OTEL_TRACES_SAMPLER_ARG +
              ' was given, but it is out of range ([0..1]), defaulting to 1.',
          ),
          1)
        : t
  }
  var vG = (function () {
      function e(e, t) {
        ;(this._exporter = e),
          (this._isExporting = !1),
          (this._finishedSpans = []),
          (this._droppedSpansCount = 0)
        var n = rV()
        ;(this._maxExportBatchSize =
          'number' == typeof (null == t ? void 0 : t.maxExportBatchSize)
            ? t.maxExportBatchSize
            : n.OTEL_BSP_MAX_EXPORT_BATCH_SIZE),
          (this._maxQueueSize =
            'number' == typeof (null == t ? void 0 : t.maxQueueSize)
              ? t.maxQueueSize
              : n.OTEL_BSP_MAX_QUEUE_SIZE),
          (this._scheduledDelayMillis =
            'number' == typeof (null == t ? void 0 : t.scheduledDelayMillis)
              ? t.scheduledDelayMillis
              : n.OTEL_BSP_SCHEDULE_DELAY),
          (this._exportTimeoutMillis =
            'number' == typeof (null == t ? void 0 : t.exportTimeoutMillis)
              ? t.exportTimeoutMillis
              : n.OTEL_BSP_EXPORT_TIMEOUT),
          (this._shutdownOnce = new cG(this._shutdown, this)),
          this._maxExportBatchSize > this._maxQueueSize &&
            (Lt.warn(
              'BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize',
            ),
            (this._maxExportBatchSize = this._maxQueueSize))
      }
      return (
        (e.prototype.forceFlush = function () {
          return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
        }),
        (e.prototype.onStart = function (e, t) {}),
        (e.prototype.onEnd = function (e) {
          this._shutdownOnce.isCalled ||
            (e.spanContext().traceFlags & ke.SAMPLED && this._addToBuffer(e))
        }),
        (e.prototype.shutdown = function () {
          return this._shutdownOnce.call()
        }),
        (e.prototype._shutdown = function () {
          var e = this
          return Promise.resolve()
            .then(function () {
              return e.onShutdown()
            })
            .then(function () {
              return e._flushAll()
            })
            .then(function () {
              return e._exporter.shutdown()
            })
        }),
        (e.prototype._addToBuffer = function (e) {
          if (this._finishedSpans.length >= this._maxQueueSize)
            return (
              0 === this._droppedSpansCount && Lt.debug('maxQueueSize reached, dropping spans'),
              void this._droppedSpansCount++
            )
          this._droppedSpansCount > 0 &&
            (Lt.warn('Dropped ' + this._droppedSpansCount + ' spans because maxQueueSize reached'),
            (this._droppedSpansCount = 0)),
            this._finishedSpans.push(e),
            this._maybeStartTimer()
        }),
        (e.prototype._flushAll = function () {
          var e = this
          return new Promise(function (t, n) {
            for (
              var r = [], o = 0, i = Math.ceil(e._finishedSpans.length / e._maxExportBatchSize);
              o < i;
              o++
            )
              r.push(e._flushOneBatch())
            Promise.all(r)
              .then(function () {
                t()
              })
              .catch(n)
          })
        }),
        (e.prototype._flushOneBatch = function () {
          var e = this
          return (
            this._clearTimer(),
            0 === this._finishedSpans.length
              ? Promise.resolve()
              : new Promise(function (t, n) {
                  var r = setTimeout(function () {
                    n(new Error('Timeout'))
                  }, e._exportTimeoutMillis)
                  Ct.with(yx(Ct.active()), function () {
                    var o
                    e._finishedSpans.length <= e._maxExportBatchSize
                      ? ((o = e._finishedSpans), (e._finishedSpans = []))
                      : (o = e._finishedSpans.splice(0, e._maxExportBatchSize))
                    for (
                      var i = function () {
                          return e._exporter.export(o, function (e) {
                            var o
                            clearTimeout(r),
                              e.code === uV.SUCCESS
                                ? t()
                                : n(
                                    null !== (o = e.error) && void 0 !== o
                                      ? o
                                      : new Error('BatchSpanProcessor: span export failed'),
                                  )
                          })
                        },
                        s = null,
                        a = 0,
                        c = o.length;
                      a < c;
                      a++
                    ) {
                      var _ = o[a]
                      _.resource.asyncAttributesPending &&
                        _.resource.waitForAsyncAttributes &&
                        (null != s || (s = []), s.push(_.resource.waitForAsyncAttributes()))
                    }
                    null === s
                      ? i()
                      : Promise.all(s).then(i, function (e) {
                          kx(e), n(e)
                        })
                  })
                })
          )
        }),
        (e.prototype._maybeStartTimer = function () {
          var e = this
          if (!this._isExporting) {
            var t = function () {
              ;(e._isExporting = !0),
                e
                  ._flushOneBatch()
                  .finally(function () {
                    ;(e._isExporting = !1),
                      e._finishedSpans.length > 0 && (e._clearTimer(), e._maybeStartTimer())
                  })
                  .catch(function (t) {
                    ;(e._isExporting = !1), kx(t)
                  })
            }
            if (this._finishedSpans.length >= this._maxExportBatchSize) return t()
            void 0 === this._timer &&
              ((this._timer = setTimeout(function () {
                return t()
              }, this._scheduledDelayMillis)),
              this._timer)
          }
        }),
        (e.prototype._clearTimer = function () {
          void 0 !== this._timer && (clearTimeout(this._timer), (this._timer = void 0))
        }),
        e
      )
    })(),
    IG = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    NG = (function (e) {
      function t(t, n) {
        var r = e.call(this, t, n) || this
        return r.onInit(n), r
      }
      return (
        IG(t, e),
        (t.prototype.onInit = function (e) {
          var t = this
          !0 !== (null == e ? void 0 : e.disableAutoFlushOnDocumentHide) &&
            'undefined' != typeof document &&
            ((this._visibilityChangeListener = function () {
              'hidden' === document.visibilityState &&
                t.forceFlush().catch(function (e) {
                  kx(e)
                })
            }),
            (this._pageHideListener = function () {
              t.forceFlush().catch(function (e) {
                kx(e)
              })
            }),
            document.addEventListener('visibilitychange', this._visibilityChangeListener),
            document.addEventListener('pagehide', this._pageHideListener))
        }),
        (t.prototype.onShutdown = function () {
          'undefined' != typeof document &&
            (this._visibilityChangeListener &&
              document.removeEventListener('visibilitychange', this._visibilityChangeListener),
            this._pageHideListener &&
              document.removeEventListener('pagehide', this._pageHideListener))
        }),
        t
      )
    })(vG),
    yG = function () {
      ;(this.generateTraceId = LG(16)), (this.generateSpanId = LG(8))
    },
    CG = Array(32)
  function LG(e) {
    return function () {
      for (var t = 0; t < 2 * e; t++)
        (CG[t] = Math.floor(16 * Math.random()) + 48), CG[t] >= 58 && (CG[t] += 39)
      return String.fromCharCode.apply(null, CG.slice(0, 2 * e))
    }
  }
  var bG = (function () {
    function e(e, t, n) {
      this._tracerProvider = n
      var r,
        o,
        i,
        s,
        a =
          ((r = t),
          (o = { sampler: gG() }),
          (i = RG()),
          ((s = Object.assign({}, i, o, r)).generalLimits = Object.assign(
            {},
            i.generalLimits,
            r.generalLimits || {},
          )),
          (s.spanLimits = Object.assign({}, i.spanLimits, r.spanLimits || {})),
          s)
      ;(this._sampler = a.sampler),
        (this._generalLimits = a.generalLimits),
        (this._spanLimits = a.spanLimits),
        (this._idGenerator = t.idGenerator || new yG()),
        (this.resource = n.resource),
        (this.instrumentationLibrary = e)
    }
    return (
      (e.prototype.startSpan = function (e, t, n) {
        var r, o, i
        void 0 === t && (t = {}),
          void 0 === n && (n = Ct.active()),
          t.root && (n = qt.deleteSpan(n))
        var s = qt.getSpan(n)
        if (Cx(n))
          return Lt.debug('Instrumentation suppressed, returning Noop Span'), qt.wrapSpanContext(Ze)
        var a,
          c,
          _,
          u = null == s ? void 0 : s.spanContext(),
          E = this._idGenerator.generateSpanId()
        u && qt.isSpanContextValid(u)
          ? ((a = u.traceId), (c = u.traceState), (_ = u.spanId))
          : (a = this._idGenerator.generateTraceId())
        var l = null !== (r = t.kind) && void 0 !== r ? r : ft.INTERNAL,
          T = (null !== (o = t.links) && void 0 !== o ? o : []).map(function (e) {
            return { context: e.context, attributes: Dx(e.attributes) }
          }),
          p = Dx(t.attributes),
          d = this._sampler.shouldSample(n, a, e, l, p, T)
        c = null !== (i = d.traceState) && void 0 !== i ? i : c
        var S = {
          traceId: a,
          spanId: E,
          traceFlags: d.decision === St.RECORD_AND_SAMPLED ? ke.SAMPLED : ke.NONE,
          traceState: c,
        }
        if (d.decision === St.NOT_RECORD)
          return (
            Lt.debug('Recording is off, propagating context in a non-recording span'),
            qt.wrapSpanContext(S)
          )
        var f = Dx(Object.assign(p, d.attributes))
        return new dG(this, n, e, S, l, _, T, t.startTime, void 0, f)
      }),
      (e.prototype.startActiveSpan = function (e, t, n, r) {
        var o, i, s
        if (!(arguments.length < 2)) {
          2 === arguments.length
            ? (s = t)
            : 3 === arguments.length
              ? ((o = t), (s = n))
              : ((o = t), (i = n), (s = r))
          var a = null != i ? i : Ct.active(),
            c = this.startSpan(e, o, a),
            _ = qt.setSpan(a, c)
          return Ct.with(_, s, void 0, c)
        }
      }),
      (e.prototype.getGeneralLimits = function () {
        return this._generalLimits
      }),
      (e.prototype.getSpanLimits = function () {
        return this._spanLimits
      }),
      (e.prototype.getActiveSpanProcessor = function () {
        return this._tracerProvider.getActiveSpanProcessor()
      }),
      e
    )
  })()
  var MG,
    PG = function () {
      return (
        (PG =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }),
        PG.apply(this, arguments)
      )
    },
    UG = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (e) {
            i(e)
          }
        }
        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function c(e) {
          var t
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t)
                  })).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
    DG = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1]
            return o[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this
          }),
        i
      )
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.')
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i
                    break
                  case 4:
                    return s.label++, { value: i[1], done: !1 }
                  case 5:
                    s.label++, (r = i[1]), (i = [0])
                    continue
                  case 7:
                    ;(i = s.ops.pop()), s.trys.pop()
                    continue
                  default:
                    if (
                      !((o = s.trys),
                      (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                    ) {
                      s = 0
                      continue
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1]
                      break
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      ;(s.label = o[1]), (o = i)
                      break
                    }
                    if (o && s.label < o[2]) {
                      ;(s.label = o[2]), s.ops.push(i)
                      break
                    }
                    o[2] && s.ops.pop(), s.trys.pop()
                    continue
                }
                i = t.call(e, s)
              } catch (e) {
                ;(i = [6, e]), (r = 0)
              } finally {
                n = o = 0
              }
            if (5 & i[0]) throw i[1]
            return { value: i[0] ? i[1] : void 0, done: !0 }
          })([i, a])
        }
      }
    },
    wG = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    xG = (function () {
      function e(e, t) {
        var n,
          r = this
        ;(this._attributes = e),
          (this.asyncAttributesPending = null != t),
          (this._syncAttributes = null !== (n = this._attributes) && void 0 !== n ? n : {}),
          (this._asyncAttributesPromise =
            null == t
              ? void 0
              : t.then(
                  function (e) {
                    return (
                      (r._attributes = Object.assign({}, r._attributes, e)),
                      (r.asyncAttributesPending = !1),
                      e
                    )
                  },
                  function (e) {
                    return (
                      Lt.debug("a resource's async attributes promise rejected: %s", e),
                      (r.asyncAttributesPending = !1),
                      {}
                    )
                  },
                ))
      }
      return (
        (e.empty = function () {
          return e.EMPTY
        }),
        (e.default = function () {
          var t
          return new e(
            (((t = {})[OT] = 'unknown_service'),
            (t[CT] = _V[CT]),
            (t[yT] = _V[yT]),
            (t[LT] = _V[LT]),
            t),
          )
        }),
        Object.defineProperty(e.prototype, 'attributes', {
          get: function () {
            var e
            return (
              this.asyncAttributesPending &&
                Lt.error('Accessing resource attributes before async attributes settled'),
              null !== (e = this._attributes) && void 0 !== e ? e : {}
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.waitForAsyncAttributes = function () {
          return UG(this, void 0, void 0, function () {
            return DG(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.asyncAttributesPending ? [4, this._asyncAttributesPromise] : [3, 2]
                case 1:
                  e.sent(), (e.label = 2)
                case 2:
                  return [2]
              }
            })
          })
        }),
        (e.prototype.merge = function (t) {
          var n,
            r = this
          if (!t) return this
          var o = PG(
            PG({}, this._syncAttributes),
            null !== (n = t._syncAttributes) && void 0 !== n ? n : t.attributes,
          )
          if (!this._asyncAttributesPromise && !t._asyncAttributesPromise) return new e(o)
          var i = Promise.all([this._asyncAttributesPromise, t._asyncAttributesPromise]).then(
            function (e) {
              var n,
                o = wG(e, 2),
                i = o[0],
                s = o[1]
              return PG(
                PG(
                  PG(PG({}, r._syncAttributes), i),
                  null !== (n = t._syncAttributes) && void 0 !== n ? n : t.attributes,
                ),
                s,
              )
            },
          )
          return new e(o, i)
        }),
        (e.EMPTY = new e({})),
        e
      )
    })(),
    VG = function (e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0
      if (n) return n.call(e)
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          },
        }
      throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    },
    GG = (function () {
      function e(e) {
        this._spanProcessors = e
      }
      return (
        (e.prototype.forceFlush = function () {
          var e,
            t,
            n = []
          try {
            for (var r = VG(this._spanProcessors), o = r.next(); !o.done; o = r.next()) {
              var i = o.value
              n.push(i.forceFlush())
            }
          } catch (t) {
            e = { error: t }
          } finally {
            try {
              o && !o.done && (t = r.return) && t.call(r)
            } finally {
              if (e) throw e.error
            }
          }
          return new Promise(function (e) {
            Promise.all(n)
              .then(function () {
                e()
              })
              .catch(function (t) {
                kx(t || new Error('MultiSpanProcessor: forceFlush failed')), e()
              })
          })
        }),
        (e.prototype.onStart = function (e, t) {
          var n, r
          try {
            for (var o = VG(this._spanProcessors), i = o.next(); !i.done; i = o.next()) {
              i.value.onStart(e, t)
            }
          } catch (e) {
            n = { error: e }
          } finally {
            try {
              i && !i.done && (r = o.return) && r.call(o)
            } finally {
              if (n) throw n.error
            }
          }
        }),
        (e.prototype.onEnd = function (e) {
          var t, n
          try {
            for (var r = VG(this._spanProcessors), o = r.next(); !o.done; o = r.next()) {
              o.value.onEnd(e)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r)
            } finally {
              if (t) throw t.error
            }
          }
        }),
        (e.prototype.shutdown = function () {
          var e,
            t,
            n = []
          try {
            for (var r = VG(this._spanProcessors), o = r.next(); !o.done; o = r.next()) {
              var i = o.value
              n.push(i.shutdown())
            }
          } catch (t) {
            e = { error: t }
          } finally {
            try {
              o && !o.done && (t = r.return) && t.call(r)
            } finally {
              if (e) throw e.error
            }
          }
          return new Promise(function (e, t) {
            Promise.all(n).then(function () {
              e()
            }, t)
          })
        }),
        e
      )
    })(),
    BG = (function () {
      function e() {}
      return (
        (e.prototype.onStart = function (e, t) {}),
        (e.prototype.onEnd = function (e) {}),
        (e.prototype.shutdown = function () {
          return Promise.resolve()
        }),
        (e.prototype.forceFlush = function () {
          return Promise.resolve()
        }),
        e
      )
    })(),
    kG = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    FG = function (e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; o < i; o++)
          (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
      return e.concat(r || Array.prototype.slice.call(t))
    }
  !(function (e) {
    ;(e[(e.resolved = 0)] = 'resolved'),
      (e[(e.timeout = 1)] = 'timeout'),
      (e[(e.error = 2)] = 'error'),
      (e[(e.unresolved = 3)] = 'unresolved')
  })(MG || (MG = {}))
  var HG,
    YG,
    jG,
    KG = (function () {
      function e(e) {
        var t, n
        void 0 === e && (e = {}), (this._registeredSpanProcessors = []), (this._tracers = new Map())
        var r = KV(
          {},
          RG(),
          (function (e) {
            var t,
              n,
              r,
              o,
              i,
              s,
              a,
              c,
              _,
              u,
              E,
              l,
              T = Object.assign({}, e.spanLimits),
              p = oV()
            return (
              (T.attributeCountLimit =
                null !==
                  (s =
                    null !==
                      (i =
                        null !==
                          (o =
                            null !==
                              (n =
                                null === (t = e.spanLimits) || void 0 === t
                                  ? void 0
                                  : t.attributeCountLimit) && void 0 !== n
                              ? n
                              : null === (r = e.generalLimits) || void 0 === r
                                ? void 0
                                : r.attributeCountLimit) && void 0 !== o
                          ? o
                          : p.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) && void 0 !== i
                      ? i
                      : p.OTEL_ATTRIBUTE_COUNT_LIMIT) && void 0 !== s
                  ? s
                  : Qx),
              (T.attributeValueLengthLimit =
                null !==
                  (l =
                    null !==
                      (E =
                        null !==
                          (u =
                            null !==
                              (c =
                                null === (a = e.spanLimits) || void 0 === a
                                  ? void 0
                                  : a.attributeValueLengthLimit) && void 0 !== c
                              ? c
                              : null === (_ = e.generalLimits) || void 0 === _
                                ? void 0
                                : _.attributeValueLengthLimit) && void 0 !== u
                          ? u
                          : p.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== E
                      ? E
                      : p.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== l
                  ? l
                  : qx),
              Object.assign({}, e, { spanLimits: T })
            )
          })(e),
        )
        if (
          ((this.resource = null !== (t = r.resource) && void 0 !== t ? t : xG.empty()),
          r.mergeResourceWithDefaults && (this.resource = xG.default().merge(this.resource)),
          (this._config = Object.assign({}, r, { resource: this.resource })),
          null === (n = e.spanProcessors) || void 0 === n ? void 0 : n.length)
        )
          (this._registeredSpanProcessors = FG([], kG(e.spanProcessors), !1)),
            (this.activeSpanProcessor = new GG(this._registeredSpanProcessors))
        else {
          var o = this._buildExporterFromEnv()
          if (void 0 !== o) {
            var i = new NG(o)
            this.activeSpanProcessor = i
          } else this.activeSpanProcessor = new BG()
        }
      }
      return (
        (e.prototype.getTracer = function (e, t, n) {
          var r = e + '@' + (t || '') + ':' + ((null == n ? void 0 : n.schemaUrl) || '')
          return (
            this._tracers.has(r) ||
              this._tracers.set(
                r,
                new bG(
                  { name: e, version: t, schemaUrl: null == n ? void 0 : n.schemaUrl },
                  this._config,
                  this,
                ),
              ),
            this._tracers.get(r)
          )
        }),
        (e.prototype.addSpanProcessor = function (e) {
          0 === this._registeredSpanProcessors.length &&
            this.activeSpanProcessor.shutdown().catch(function (e) {
              return Lt.error('Error while trying to shutdown current span processor', e)
            }),
            this._registeredSpanProcessors.push(e),
            (this.activeSpanProcessor = new GG(this._registeredSpanProcessors))
        }),
        (e.prototype.getActiveSpanProcessor = function () {
          return this.activeSpanProcessor
        }),
        (e.prototype.register = function (e) {
          void 0 === e && (e = {}),
            qt.setGlobalTracerProvider(this),
            void 0 === e.propagator && (e.propagator = this._buildPropagatorFromEnv()),
            e.contextManager && Ct.setGlobalContextManager(e.contextManager),
            e.propagator && jt.setGlobalPropagator(e.propagator)
        }),
        (e.prototype.forceFlush = function () {
          var e = this._config.forceFlushTimeoutMillis,
            t = this._registeredSpanProcessors.map(function (t) {
              return new Promise(function (n) {
                var r,
                  o = setTimeout(function () {
                    n(
                      new Error(
                        'Span processor did not completed within timeout period of ' + e + ' ms',
                      ),
                    ),
                      (r = MG.timeout)
                  }, e)
                t.forceFlush()
                  .then(function () {
                    clearTimeout(o), r !== MG.timeout && ((r = MG.resolved), n(r))
                  })
                  .catch(function (e) {
                    clearTimeout(o), (r = MG.error), n(e)
                  })
              })
            })
          return new Promise(function (e, n) {
            Promise.all(t)
              .then(function (t) {
                var r = t.filter(function (e) {
                  return e !== MG.resolved
                })
                r.length > 0 ? n(r) : e()
              })
              .catch(function (e) {
                return n([e])
              })
          })
        }),
        (e.prototype.shutdown = function () {
          return this.activeSpanProcessor.shutdown()
        }),
        (e.prototype._getPropagator = function (e) {
          var t
          return null === (t = this.constructor._registeredPropagators.get(e)) || void 0 === t
            ? void 0
            : t()
        }),
        (e.prototype._getSpanExporter = function (e) {
          var t
          return null === (t = this.constructor._registeredExporters.get(e)) || void 0 === t
            ? void 0
            : t()
        }),
        (e.prototype._buildPropagatorFromEnv = function () {
          var e = this,
            t = Array.from(new Set(rV().OTEL_PROPAGATORS)),
            n = t.map(function (t) {
              var n = e._getPropagator(t)
              return (
                n ||
                  Lt.warn(
                    'Propagator "' + t + '" requested through environment variable is unavailable.',
                  ),
                n
              )
            }),
            r = n.reduce(function (e, t) {
              return t && e.push(t), e
            }, [])
          return 0 === r.length ? void 0 : 1 === t.length ? r[0] : new OV({ propagators: r })
        }),
        (e.prototype._buildExporterFromEnv = function () {
          var e = rV().OTEL_TRACES_EXPORTER
          if ('none' !== e && '' !== e) {
            var t = this._getSpanExporter(e)
            return (
              t ||
                Lt.error(
                  'Exporter "' + e + '" requested through environment variable is unavailable.',
                ),
              t
            )
          }
        }),
        (e._registeredPropagators = new Map([
          [
            'tracecontext',
            function () {
              return new DV()
            },
          ],
          [
            'baggage',
            function () {
              return new Mx()
            },
          ],
        ])),
        (e._registeredExporters = new Map()),
        e
      )
    })(),
    WG = function (e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0
      if (n) return n.call(e)
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          },
        }
      throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    },
    qG = (function () {
      function e() {}
      return (
        (e.prototype.export = function (e, t) {
          return this._sendSpans(e, t)
        }),
        (e.prototype.shutdown = function () {
          return this._sendSpans([]), this.forceFlush()
        }),
        (e.prototype.forceFlush = function () {
          return Promise.resolve()
        }),
        (e.prototype._exportInfo = function (e) {
          var t
          return {
            resource: { attributes: e.resource.attributes },
            instrumentationScope: e.instrumentationLibrary,
            traceId: e.spanContext().traceId,
            parentId: e.parentSpanId,
            traceState:
              null === (t = e.spanContext().traceState) || void 0 === t ? void 0 : t.serialize(),
            name: e.name,
            id: e.spanContext().spanId,
            kind: e.kind,
            timestamp: AV(e.startTime),
            duration: AV(e.duration),
            attributes: e.attributes,
            status: e.status,
            events: e.events,
            links: e.links,
          }
        }),
        (e.prototype._sendSpans = function (e, t) {
          var n, r
          try {
            for (var o = WG(e), i = o.next(); !i.done; i = o.next()) {
              var s = i.value
              console.dir(this._exportInfo(s), { depth: 3 })
            }
          } catch (e) {
            n = { error: e }
          } finally {
            try {
              i && !i.done && (r = o.return) && r.call(o)
            } finally {
              if (n) throw n.error
            }
          }
          if (t) return t({ code: uV.SUCCESS })
        }),
        e
      )
    })(),
    QG = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (e) {
            i(e)
          }
        }
        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function c(e) {
          var t
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t)
                  })).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
    zG = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1]
            return o[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this
          }),
        i
      )
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.')
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i
                    break
                  case 4:
                    return s.label++, { value: i[1], done: !1 }
                  case 5:
                    s.label++, (r = i[1]), (i = [0])
                    continue
                  case 7:
                    ;(i = s.ops.pop()), s.trys.pop()
                    continue
                  default:
                    if (
                      !((o = s.trys),
                      (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                    ) {
                      s = 0
                      continue
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1]
                      break
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      ;(s.label = o[1]), (o = i)
                      break
                    }
                    if (o && s.label < o[2]) {
                      ;(s.label = o[2]), s.ops.push(i)
                      break
                    }
                    o[2] && s.ops.pop(), s.trys.pop()
                    continue
                }
                i = t.call(e, s)
              } catch (e) {
                ;(i = [6, e]), (r = 0)
              } finally {
                n = o = 0
              }
            if (5 & i[0]) throw i[1]
            return { value: i[0] ? i[1] : void 0, done: !0 }
          })([i, a])
        }
      }
    },
    $G = (function () {
      function e(e) {
        ;(this._exporter = e),
          (this._shutdownOnce = new cG(this._shutdown, this)),
          (this._unresolvedExports = new Set())
      }
      return (
        (e.prototype.forceFlush = function () {
          return QG(this, void 0, void 0, function () {
            return zG(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, Promise.all(Array.from(this._unresolvedExports))]
                case 1:
                  return (
                    e.sent(), this._exporter.forceFlush ? [4, this._exporter.forceFlush()] : [3, 3]
                  )
                case 2:
                  e.sent(), (e.label = 3)
                case 3:
                  return [2]
              }
            })
          })
        }),
        (e.prototype.onStart = function (e, t) {}),
        (e.prototype.onEnd = function (e) {
          var t,
            n,
            r = this
          if (!this._shutdownOnce.isCalled && e.spanContext().traceFlags & ke.SAMPLED) {
            var o = function () {
              return uG
                ._export(r._exporter, [e])
                .then(function (e) {
                  var t
                  e.code !== uV.SUCCESS &&
                    kx(
                      null !== (t = e.error) && void 0 !== t
                        ? t
                        : new Error('SimpleSpanProcessor: span export failed (status ' + e + ')'),
                    )
                })
                .catch(function (e) {
                  kx(e)
                })
            }
            if (e.resource.asyncAttributesPending) {
              var i =
                null === (n = (t = e.resource).waitForAsyncAttributes) || void 0 === n
                  ? void 0
                  : n.call(t).then(
                      function () {
                        return null != i && r._unresolvedExports.delete(i), o()
                      },
                      function (e) {
                        return kx(e)
                      },
                    )
              null != i && this._unresolvedExports.add(i)
            } else o()
          }
        }),
        (e.prototype.shutdown = function () {
          return this._shutdownOnce.call()
        }),
        (e.prototype._shutdown = function () {
          return this._exporter.shutdown()
        }),
        e
      )
    })(),
    XG = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    JG = function (e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; o < i; o++)
          (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
      return e.concat(r || Array.prototype.slice.call(t))
    },
    ZG = (function () {
      function e() {
        ;(this._enabled = !1), (this._currentContext = Ae)
      }
      return (
        (e.prototype._bindFunction = function (e, t) {
          void 0 === e && (e = Ae)
          var n = this,
            r = function () {
              for (var r = this, o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i]
              return n.with(e, function () {
                return t.apply(r, o)
              })
            }
          return (
            Object.defineProperty(r, 'length', {
              enumerable: !1,
              configurable: !0,
              writable: !1,
              value: t.length,
            }),
            r
          )
        }),
        (e.prototype.active = function () {
          return this._currentContext
        }),
        (e.prototype.bind = function (e, t) {
          return (
            void 0 === e && (e = this.active()),
            'function' == typeof t ? this._bindFunction(e, t) : t
          )
        }),
        (e.prototype.disable = function () {
          return (this._currentContext = Ae), (this._enabled = !1), this
        }),
        (e.prototype.enable = function () {
          return this._enabled || ((this._enabled = !0), (this._currentContext = Ae)), this
        }),
        (e.prototype.with = function (e, t, n) {
          for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o]
          var i = this._currentContext
          this._currentContext = e || Ae
          try {
            return t.call.apply(t, JG([n], XG(r), !1))
          } finally {
            this._currentContext = i
          }
        }),
        e
      )
    })(),
    eB = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    tB = (function (e) {
      function t(t) {
        void 0 === t && (t = {})
        var n = e.call(this, t) || this
        if (t.contextManager)
          throw 'contextManager should be defined in register method not in constructor'
        if (t.propagator) throw 'propagator should be defined in register method not in constructor'
        return n
      }
      return (
        eB(t, e),
        (t.prototype.register = function (t) {
          void 0 === t && (t = {}),
            void 0 === t.contextManager && (t.contextManager = new ZG()),
            t.contextManager && t.contextManager.enable(),
            e.prototype.register.call(this, t)
        }),
        t
      )
    })(KG)
  function nB(e, t) {
    return t in e
  }
  function rB(e, t, n, r) {
    var o = void 0,
      i = void 0
    nB(n, t) && 'number' == typeof n[t] && (o = n[t])
    var s = r || HG.FETCH_START
    if ((nB(n, s) && 'number' == typeof n[s] && (i = n[s]), void 0 !== o && void 0 !== i && o >= i))
      return e.addEvent(t, o), e
  }
  function oB(e, t, n) {
    void 0 === n && (n = !1),
      n ||
        (rB(e, HG.FETCH_START, t),
        rB(e, HG.DOMAIN_LOOKUP_START, t),
        rB(e, HG.DOMAIN_LOOKUP_END, t),
        rB(e, HG.CONNECT_START, t),
        nB(t, 'name') && t.name.startsWith('https:') && rB(e, HG.SECURE_CONNECTION_START, t),
        rB(e, HG.CONNECT_END, t),
        rB(e, HG.REQUEST_START, t),
        rB(e, HG.RESPONSE_START, t),
        rB(e, HG.RESPONSE_END, t))
    var r = t[HG.ENCODED_BODY_SIZE]
    void 0 !== r && e.setAttribute(xi, r)
    var o = t[HG.DECODED_BODY_SIZE]
    void 0 !== o && r !== o && e.setAttribute(Vi, o)
  }
  function iB() {
    return 'undefined' != typeof location ? location.origin : void 0
  }
  function sB(e, t, n, r, o, i) {
    void 0 === o && (o = new WeakSet())
    var s = aB(e),
      a = (function (e, t, n, r, o, i) {
        var s = fV(t),
          a = fV(n),
          c = r.filter(function (t) {
            var n = fV(SV(t[HG.FETCH_START])),
              r = fV(SV(t[HG.RESPONSE_END]))
            return (
              t.initiatorType.toLowerCase() === (i || 'xmlhttprequest') &&
              t.name === e &&
              n >= s &&
              r <= a
            )
          })
        c.length > 0 &&
          (c = c.filter(function (e) {
            return !o.has(e)
          }))
        return c
      })((e = s.toString()), t, n, r, o, i)
    if (0 === a.length) return { mainRequest: void 0 }
    if (1 === a.length) return { mainRequest: a[0] }
    var c = (function (e) {
      return e.slice().sort(function (e, t) {
        var n = e[HG.FETCH_START],
          r = t[HG.FETCH_START]
        return n > r ? 1 : n < r ? -1 : 0
      })
    })(a)
    if (s.origin !== iB() && c.length > 1) {
      var _ = c[0],
        u = (function (e, t, n) {
          for (var r, o = fV(n), i = fV(SV(t)), s = e[1], a = e.length, c = 1; c < a; c++) {
            var _ = e[c],
              u = fV(SV(_[HG.FETCH_START])),
              E = o - fV(SV(_[HG.RESPONSE_END]))
            u >= i && (!r || E < r) && ((r = E), (s = _))
          }
          return s
        })(c, _[HG.RESPONSE_END], n),
        E = _[HG.RESPONSE_END]
      return (
        u[HG.FETCH_START] < E && ((u = _), (_ = void 0)),
        { corsPreFlightRequest: _, mainRequest: u }
      )
    }
    return { mainRequest: a[0] }
  }
  function aB(e) {
    if ('function' == typeof URL)
      return new URL(
        e,
        'undefined' != typeof document
          ? document.baseURI
          : 'undefined' != typeof location
            ? location.href
            : void 0,
      )
    var t = (YG || (YG = document.createElement('a')), YG)
    return (t.href = e), t
  }
  function cB(e, t) {
    if (e.nodeType === Node.DOCUMENT_NODE) return '/'
    var n = (function (e, t) {
      var n = e.nodeType,
        r = (function (e) {
          if (!e.parentNode) return 0
          var t = [e.nodeType]
          e.nodeType === Node.CDATA_SECTION_NODE && t.push(Node.TEXT_NODE)
          var n = Array.from(e.parentNode.childNodes)
          if (
            ((n = n.filter(function (n) {
              var r = n.localName
              return t.indexOf(n.nodeType) >= 0 && r === e.localName
            })),
            n.length >= 1)
          )
            return n.indexOf(e) + 1
          return 0
        })(e),
        o = ''
      if (n === Node.ELEMENT_NODE) {
        var i = e.getAttribute('id')
        if (t && i) return '//*[@id="' + i + '"]'
        o = e.localName
      } else if (n === Node.TEXT_NODE || n === Node.CDATA_SECTION_NODE) o = 'text()'
      else {
        if (n !== Node.COMMENT_NODE) return ''
        o = 'comment()'
      }
      if (o && r > 1) return '/' + o + '[' + r + ']'
      return '/' + o
    })(e, t)
    if (t && n.indexOf('@id') > 0) return n
    var r = ''
    return e.parentNode && (r += cB(e.parentNode, !1)), (r += n)
  }
  function _B(e, t) {
    var n = t || []
    return (
      ('string' == typeof n || n instanceof RegExp) && (n = [n]),
      aB(e).origin === iB() ||
        n.some(function (t) {
          return rG(e, t)
        })
    )
  }
  !(function (e) {
    ;(e.CONNECT_END = 'connectEnd'),
      (e.CONNECT_START = 'connectStart'),
      (e.DECODED_BODY_SIZE = 'decodedBodySize'),
      (e.DOM_COMPLETE = 'domComplete'),
      (e.DOM_CONTENT_LOADED_EVENT_END = 'domContentLoadedEventEnd'),
      (e.DOM_CONTENT_LOADED_EVENT_START = 'domContentLoadedEventStart'),
      (e.DOM_INTERACTIVE = 'domInteractive'),
      (e.DOMAIN_LOOKUP_END = 'domainLookupEnd'),
      (e.DOMAIN_LOOKUP_START = 'domainLookupStart'),
      (e.ENCODED_BODY_SIZE = 'encodedBodySize'),
      (e.FETCH_START = 'fetchStart'),
      (e.LOAD_EVENT_END = 'loadEventEnd'),
      (e.LOAD_EVENT_START = 'loadEventStart'),
      (e.NAVIGATION_START = 'navigationStart'),
      (e.REDIRECT_END = 'redirectEnd'),
      (e.REDIRECT_START = 'redirectStart'),
      (e.REQUEST_START = 'requestStart'),
      (e.RESPONSE_END = 'responseEnd'),
      (e.RESPONSE_START = 'responseStart'),
      (e.SECURE_CONNECTION_START = 'secureConnectionStart'),
      (e.UNLOAD_EVENT_END = 'unloadEventEnd'),
      (e.UNLOAD_EVENT_START = 'unloadEventStart')
  })(HG || (HG = {})),
    (function (e) {
      ;(e.EVENT_TYPE = 'event_type'),
        (e.TARGET_ELEMENT = 'target_element'),
        (e.TARGET_XPATH = 'target_xpath'),
        (e.HTTP_URL = 'http.url')
    })(jG || (jG = {}))
  var uB = '0.44.1',
    EB = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    lB = ['click']
  function TB() {
    return !1
  }
  var pB = (function (e) {
    function t(t) {
      var n
      void 0 === t && (t = {})
      var r = e.call(this, '@opentelemetry/instrumentation-user-interaction', uB, t) || this
      return (
        (r.version = uB),
        (r.moduleName = 'user-interaction'),
        (r._spansData = new WeakMap()),
        (r._wrappedListeners = new WeakMap()),
        (r._eventsSpanMap = new WeakMap()),
        (r._eventNames = new Set(
          null !== (n = null == t ? void 0 : t.eventNames) && void 0 !== n ? n : lB,
        )),
        (r._shouldPreventSpanCreation =
          'function' == typeof (null == t ? void 0 : t.shouldPreventSpanCreation)
            ? t.shouldPreventSpanCreation
            : TB),
        r
      )
    }
    return (
      EB(t, e),
      (t.prototype.init = function () {}),
      (t.prototype._checkForTimeout = function (e, t) {
        var n = this._spansData.get(t)
        n &&
          ('setTimeout' === e.source
            ? (n.hrTimeLastTimeout = dV())
            : 'Promise.then' !== e.source &&
              'setTimeout' !== e.source &&
              (n.hrTimeLastTimeout = void 0))
      }),
      (t.prototype._allowEventName = function (e) {
        return this._eventNames.has(e)
      }),
      (t.prototype._createSpan = function (e, t, n) {
        var r
        if (
          e instanceof HTMLElement &&
          e.getAttribute &&
          !e.hasAttribute('disabled') &&
          this._allowEventName(t)
        ) {
          var o = cB(e, !0)
          try {
            var i = this.tracer.startSpan(
              t,
              {
                attributes:
                  ((r = {}),
                  (r[jG.EVENT_TYPE] = t),
                  (r[jG.TARGET_ELEMENT] = e.tagName),
                  (r[jG.TARGET_XPATH] = o),
                  (r[jG.HTTP_URL] = window.location.href),
                  r),
              },
              n ? qt.setSpan(Ct.active(), n) : void 0,
            )
            if (!0 === this._shouldPreventSpanCreation(t, e, i)) return
            return this._spansData.set(i, { taskCount: 0 }), i
          } catch (e) {
            this._diag.error('failed to start create new user interaction span', e)
          }
        }
      }),
      (t.prototype._decrementTask = function (e) {
        var t = this._spansData.get(e)
        t && (t.taskCount--, 0 === t.taskCount && this._tryToEndSpan(e, t.hrTimeLastTimeout))
      }),
      (t.prototype._getCurrentSpan = function (e) {
        var t = e.get('OT_ZONE_CONTEXT')
        return t ? qt.getSpan(t) : t
      }),
      (t.prototype._incrementTask = function (e) {
        var t = this._spansData.get(e)
        t && t.taskCount++
      }),
      (t.prototype.addPatchedListener = function (e, t, n, r) {
        var o = this._wrappedListeners.get(n)
        o || ((o = new Map()), this._wrappedListeners.set(n, o))
        var i = o.get(t)
        return i || ((i = new Map()), o.set(t, i)), !i.has(e) && (i.set(e, r), !0)
      }),
      (t.prototype.removePatchedListener = function (e, t, n) {
        var r = this._wrappedListeners.get(n)
        if (r) {
          var o = r.get(t)
          if (o) {
            var i = o.get(e)
            return (
              i &&
                (o.delete(e),
                0 === o.size && (r.delete(t), 0 === r.size && this._wrappedListeners.delete(n))),
              i
            )
          }
        }
      }),
      (t.prototype._invokeListener = function (e, t, n) {
        return 'function' == typeof e ? e.apply(t, n) : e.handleEvent(n[0])
      }),
      (t.prototype._patchAddEventListener = function () {
        var e = this
        return function (t) {
          return function (n, r, o) {
            if (!r) return t.call(this, n, r, o)
            var i = o && 'object' == typeof o && o.once,
              s = function () {
                for (var t, o = this, s = [], a = 0; a < arguments.length; a++) s[a] = arguments[a]
                var c = s[0],
                  _ = null == c ? void 0 : c.target
                c && (t = e._eventsSpanMap.get(c)), i && e.removePatchedListener(this, n, r)
                var u = e._createSpan(_, n, t)
                return u
                  ? (c && e._eventsSpanMap.set(c, u),
                    Ct.with(qt.setSpan(Ct.active(), u), function () {
                      var t = e._invokeListener(r, o, s)
                      return u.end(), t
                    }))
                  : e._invokeListener(r, this, s)
              }
            return e.addPatchedListener(this, n, r, s) ? t.call(this, n, s, o) : void 0
          }
        }
      }),
      (t.prototype._patchRemoveEventListener = function () {
        var e = this
        return function (t) {
          return function (n, r, o) {
            var i = e.removePatchedListener(this, n, r)
            return i ? t.call(this, n, i, o) : t.call(this, n, r, o)
          }
        }
      }),
      (t.prototype._getPatchableEventTargets = function () {
        return window.EventTarget ? [EventTarget.prototype] : [Node.prototype, Window.prototype]
      }),
      (t.prototype._patchHistoryApi = function () {
        this._unpatchHistoryApi(),
          this._wrap(history, 'replaceState', this._patchHistoryMethod()),
          this._wrap(history, 'pushState', this._patchHistoryMethod()),
          this._wrap(history, 'back', this._patchHistoryMethod()),
          this._wrap(history, 'forward', this._patchHistoryMethod()),
          this._wrap(history, 'go', this._patchHistoryMethod())
      }),
      (t.prototype._patchHistoryMethod = function () {
        var e = this
        return function (t) {
          return function () {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
            var o = '' + location.pathname + location.hash + location.search,
              i = t.apply(this, n),
              s = '' + location.pathname + location.hash + location.search
            return o !== s && e._updateInteractionName(s), i
          }
        }
      }),
      (t.prototype._unpatchHistoryApi = function () {
        yA(history.replaceState) && this._unwrap(history, 'replaceState'),
          yA(history.pushState) && this._unwrap(history, 'pushState'),
          yA(history.back) && this._unwrap(history, 'back'),
          yA(history.forward) && this._unwrap(history, 'forward'),
          yA(history.go) && this._unwrap(history, 'go')
      }),
      (t.prototype._updateInteractionName = function (e) {
        var t = qt.getSpan(Ct.active())
        t && 'function' == typeof t.updateName && t.updateName('Navigation: ' + e)
      }),
      (t.prototype._patchZoneCancelTask = function () {
        var e = this
        return function (t) {
          return function (n) {
            var r = Zone.current,
              o = e._getCurrentSpan(r)
            return o && e._shouldCountTask(n, r) && e._decrementTask(o), t.call(this, n)
          }
        }
      }),
      (t.prototype._patchZoneScheduleTask = function () {
        var e = this
        return function (t) {
          return function (n) {
            var r = Zone.current,
              o = e._getCurrentSpan(r)
            return (
              o && e._shouldCountTask(n, r) && (e._incrementTask(o), e._checkForTimeout(n, o)),
              t.call(this, n)
            )
          }
        }
      }),
      (t.prototype._patchZoneRunTask = function () {
        var e = this
        return function (t) {
          return function (n, r, o) {
            var i,
              s = Array.isArray(o) && o[0] instanceof Event ? o[0] : void 0,
              a = null == s ? void 0 : s.target,
              c = this
            if (a) {
              if ((i = e._createSpan(a, n.eventName)))
                return (
                  e._incrementTask(i),
                  c.run(function () {
                    try {
                      return Ct.with(qt.setSpan(Ct.active(), i), function () {
                        var e = Zone.current
                        return (n._zone = e), t.call(e, n, r, o)
                      })
                    } finally {
                      e._decrementTask(i)
                    }
                  })
                )
            } else i = e._getCurrentSpan(c)
            try {
              return t.call(c, n, r, o)
            } finally {
              i && e._shouldCountTask(n, c) && e._decrementTask(i)
            }
          }
        }
      }),
      (t.prototype._shouldCountTask = function (e, t) {
        if ((e._zone && (t = e._zone), !t || !e.data || e.data.isPeriodic)) return !1
        var n = this._getCurrentSpan(t)
        return !!n && !!this._spansData.get(n) && ('macroTask' === e.type || 'microTask' === e.type)
      }),
      (t.prototype._tryToEndSpan = function (e, t) {
        e && this._spansData.get(e) && (e.end(t), this._spansData.delete(e))
      }),
      (t.prototype.enable = function () {
        var e = this,
          t = this._getZoneWithPrototype()
        ;(this._diag.debug('applying patch to', this.moduleName, this.version, 'zone:', !!t), t)
          ? (yA(t.prototype.runTask) &&
              (this._unwrap(t.prototype, 'runTask'),
              this._diag.debug('removing previous patch from method runTask')),
            yA(t.prototype.scheduleTask) &&
              (this._unwrap(t.prototype, 'scheduleTask'),
              this._diag.debug('removing previous patch from method scheduleTask')),
            yA(t.prototype.cancelTask) &&
              (this._unwrap(t.prototype, 'cancelTask'),
              this._diag.debug('removing previous patch from method cancelTask')),
            (this._zonePatched = !0),
            this._wrap(t.prototype, 'runTask', this._patchZoneRunTask()),
            this._wrap(t.prototype, 'scheduleTask', this._patchZoneScheduleTask()),
            this._wrap(t.prototype, 'cancelTask', this._patchZoneCancelTask()))
          : ((this._zonePatched = !1),
            this._getPatchableEventTargets().forEach(function (t) {
              yA(t.addEventListener) &&
                (e._unwrap(t, 'addEventListener'),
                e._diag.debug('removing previous patch from method addEventListener')),
                yA(t.removeEventListener) &&
                  (e._unwrap(t, 'removeEventListener'),
                  e._diag.debug('removing previous patch from method removeEventListener')),
                e._wrap(t, 'addEventListener', e._patchAddEventListener()),
                e._wrap(t, 'removeEventListener', e._patchRemoveEventListener())
            }))
        this._patchHistoryApi()
      }),
      (t.prototype.disable = function () {
        var e = this,
          t = this._getZoneWithPrototype()
        ;(this._diag.debug('removing patch from', this.moduleName, this.version, 'zone:', !!t),
        t && this._zonePatched)
          ? (yA(t.prototype.runTask) && this._unwrap(t.prototype, 'runTask'),
            yA(t.prototype.scheduleTask) && this._unwrap(t.prototype, 'scheduleTask'),
            yA(t.prototype.cancelTask) && this._unwrap(t.prototype, 'cancelTask'))
          : this._getPatchableEventTargets().forEach(function (t) {
              yA(t.addEventListener) && e._unwrap(t, 'addEventListener'),
                yA(t.removeEventListener) && e._unwrap(t, 'removeEventListener')
            })
        this._unpatchHistoryApi()
      }),
      (t.prototype._getZoneWithPrototype = function () {
        return window.Zone
      }),
      t
    )
  })(RA)
  const dB = (e) => {
      gx.setScreenName(e, 'full'),
        Ax.setRumSessionId(e),
        e.setAttribute(hx.ATTR_URL_FULL, window.location.href)
    },
    SB = {
      click: !0,
      dblclick: !0,
      mousedown: !0,
      mouseup: !0,
      submit: !0,
      reset: !0,
      change: !0,
      dragend: !0,
      drop: !0,
      ended: !0,
      pause: !0,
      play: !0,
    },
    fB = Object.keys(SB),
    AB = 'route'
  function hB(e, t, n) {
    return !1 === e ? e : (void 0 !== e || !n) && Object.assign({}, t, e)
  }
  function mB(e) {
    return 'function' == typeof e
  }
  function RB(e, t, n) {
    const r = e[t]
    fA.wrap(e, t, n)
    e[t].toString = r.toString.bind(r)
  }
  function gB(e) {
    for (; e.__original && e.__original !== e; ) e = e.__original
    return e
  }
  function OB(e, t) {
    const n = new Map(t.map((e) => [e, e.toLowerCase().replace(/-/g, '_')]))
    return (t, r) => {
      for (const [o, i] of n) {
        const n = r(o)
        if (void 0 === n) continue
        const s = `http.${e}.header.${i}`
        'string' == typeof n
          ? t.setAttribute(s, [n])
          : Array.isArray(n)
            ? t.setAttribute(s, n)
            : t.setAttribute(s, [n])
      }
    }
  }
  var vB,
    IB,
    NB,
    yB,
    CB,
    LB = -1,
    bB = function (e) {
      addEventListener(
        'pageshow',
        function (t) {
          t.persisted && ((LB = t.timeStamp), e(t))
        },
        !0,
      )
    },
    MB = function () {
      var e =
        self.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType('navigation')[0]
      if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
    },
    PB = function () {
      var e = MB()
      return (e && e.activationStart) || 0
    },
    UB = function (e, t) {
      var n = MB(),
        r = 'navigate'
      return (
        LB >= 0
          ? (r = 'back-forward-cache')
          : n &&
            (document.prerendering || PB() > 0
              ? (r = 'prerender')
              : document.wasDiscarded
                ? (r = 'restore')
                : n.type && (r = n.type.replace(/_/g, '-'))),
        {
          name: e,
          value: void 0 === t ? -1 : t,
          rating: 'good',
          delta: 0,
          entries: [],
          id: 'v4-'
            .concat(Date.now(), '-')
            .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
          navigationType: r,
        }
      )
    },
    DB = function (e, t, n) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          var r = new PerformanceObserver(function (e) {
            Promise.resolve().then(function () {
              t(e.getEntries())
            })
          })
          return r.observe(Object.assign({ type: e, buffered: !0 }, n || {})), r
        }
      } catch (e) {}
    },
    wB = function (e, t, n, r) {
      var o, i
      return function (s) {
        t.value >= 0 &&
          (s || r) &&
          ((i = t.value - (o || 0)) || void 0 === o) &&
          ((o = t.value),
          (t.delta = i),
          (t.rating = (function (e, t) {
            return e > t[1] ? 'poor' : e > t[0] ? 'needs-improvement' : 'good'
          })(t.value, n)),
          e(t))
      }
    },
    xB = function (e) {
      requestAnimationFrame(function () {
        return requestAnimationFrame(function () {
          return e()
        })
      })
    },
    VB = function (e) {
      document.addEventListener('visibilitychange', function () {
        'hidden' === document.visibilityState && e()
      })
    },
    GB = function (e) {
      var t = !1
      return function () {
        t || (e(), (t = !0))
      }
    },
    BB = -1,
    kB = function () {
      return 'hidden' !== document.visibilityState || document.prerendering ? 1 / 0 : 0
    },
    FB = function (e) {
      'hidden' === document.visibilityState &&
        BB > -1 &&
        ((BB = 'visibilitychange' === e.type ? e.timeStamp : 0), YB())
    },
    HB = function () {
      addEventListener('visibilitychange', FB, !0), addEventListener('prerenderingchange', FB, !0)
    },
    YB = function () {
      removeEventListener('visibilitychange', FB, !0),
        removeEventListener('prerenderingchange', FB, !0)
    },
    jB = function () {
      return (
        BB < 0 &&
          ((BB = kB()),
          HB(),
          bB(function () {
            setTimeout(function () {
              ;(BB = kB()), HB()
            }, 0)
          })),
        {
          get firstHiddenTime() {
            return BB
          },
        }
      )
    },
    KB = function (e) {
      document.prerendering
        ? addEventListener(
            'prerenderingchange',
            function () {
              return e()
            },
            !0,
          )
        : e()
    },
    WB = [1800, 3e3],
    qB = [0.1, 0.25],
    QB = function (e, t) {
      ;(t = t || {}),
        (function (e, t) {
          ;(t = t || {}),
            KB(function () {
              var n,
                r = jB(),
                o = UB('FCP'),
                i = DB('paint', function (e) {
                  e.forEach(function (e) {
                    'first-contentful-paint' === e.name &&
                      (i.disconnect(),
                      e.startTime < r.firstHiddenTime &&
                        ((o.value = Math.max(e.startTime - PB(), 0)), o.entries.push(e), n(!0)))
                  })
                })
              i &&
                ((n = wB(e, o, WB, t.reportAllChanges)),
                bB(function (r) {
                  ;(o = UB('FCP')),
                    (n = wB(e, o, WB, t.reportAllChanges)),
                    xB(function () {
                      ;(o.value = performance.now() - r.timeStamp), n(!0)
                    })
                }))
            })
        })(
          GB(function () {
            var n,
              r = UB('CLS', 0),
              o = 0,
              i = [],
              s = function (e) {
                e.forEach(function (e) {
                  if (!e.hadRecentInput) {
                    var t = i[0],
                      n = i[i.length - 1]
                    o && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3
                      ? ((o += e.value), i.push(e))
                      : ((o = e.value), (i = [e]))
                  }
                }),
                  o > r.value && ((r.value = o), (r.entries = i), n())
              },
              a = DB('layout-shift', s)
            a &&
              ((n = wB(e, r, qB, t.reportAllChanges)),
              VB(function () {
                s(a.takeRecords()), n(!0)
              }),
              bB(function () {
                ;(o = 0),
                  (r = UB('CLS', 0)),
                  (n = wB(e, r, qB, t.reportAllChanges)),
                  xB(function () {
                    return n()
                  })
              }),
              setTimeout(n, 0))
          }),
        )
    },
    zB = 0,
    $B = 1 / 0,
    XB = 0,
    JB = function (e) {
      e.forEach(function (e) {
        e.interactionId &&
          (($B = Math.min($B, e.interactionId)),
          (XB = Math.max(XB, e.interactionId)),
          (zB = XB ? (XB - $B) / 7 + 1 : 0))
      })
    },
    ZB = function () {
      return vB ? zB : performance.interactionCount || 0
    },
    ek = function () {
      'interactionCount' in performance ||
        vB ||
        (vB = DB('event', JB, { type: 'event', buffered: !0, durationThreshold: 0 }))
    },
    tk = [],
    nk = new Map(),
    rk = 0,
    ok = [],
    ik = function (e) {
      if (
        (ok.forEach(function (t) {
          return t(e)
        }),
        e.interactionId || 'first-input' === e.entryType)
      ) {
        var t = tk[tk.length - 1],
          n = nk.get(e.interactionId)
        if (n || tk.length < 10 || e.duration > t.latency) {
          if (n)
            e.duration > n.latency
              ? ((n.entries = [e]), (n.latency = e.duration))
              : e.duration === n.latency &&
                e.startTime === n.entries[0].startTime &&
                n.entries.push(e)
          else {
            var r = { id: e.interactionId, latency: e.duration, entries: [e] }
            nk.set(r.id, r), tk.push(r)
          }
          tk.sort(function (e, t) {
            return t.latency - e.latency
          }),
            tk.length > 10 &&
              tk.splice(10).forEach(function (e) {
                return nk.delete(e.id)
              })
        }
      }
    },
    sk = function (e) {
      var t = self.requestIdleCallback || self.setTimeout,
        n = -1
      return (e = GB(e)), 'hidden' === document.visibilityState ? e() : ((n = t(e)), VB(e)), n
    },
    ak = [200, 500],
    ck = function (e, t) {
      'PerformanceEventTiming' in self &&
        'interactionId' in PerformanceEventTiming.prototype &&
        ((t = t || {}),
        KB(function () {
          var n
          ek()
          var r,
            o = UB('INP'),
            i = function (e) {
              sk(function () {
                e.forEach(ik)
                var t = (function () {
                  var e = Math.min(tk.length - 1, Math.floor((ZB() - rk) / 50))
                  return tk[e]
                })()
                t && t.latency !== o.value && ((o.value = t.latency), (o.entries = t.entries), r())
              })
            },
            s = DB('event', i, {
              durationThreshold: null !== (n = t.durationThreshold) && void 0 !== n ? n : 40,
            })
          ;(r = wB(e, o, ak, t.reportAllChanges)),
            s &&
              (s.observe({ type: 'first-input', buffered: !0 }),
              VB(function () {
                i(s.takeRecords()), r(!0)
              }),
              bB(function () {
                ;(rk = ZB()),
                  (tk.length = 0),
                  nk.clear(),
                  (o = UB('INP')),
                  (r = wB(e, o, ak, t.reportAllChanges))
              }))
        }))
    },
    _k = [2500, 4e3],
    uk = {},
    Ek = { passive: !0, capture: !0 },
    lk = new Date(),
    Tk = function (e, t) {
      IB || ((IB = t), (NB = e), (yB = new Date()), Sk(removeEventListener), pk())
    },
    pk = function () {
      if (NB >= 0 && NB < yB - lk) {
        var e = {
          entryType: 'first-input',
          name: IB.type,
          target: IB.target,
          cancelable: IB.cancelable,
          startTime: IB.timeStamp,
          processingStart: IB.timeStamp + NB,
        }
        CB.forEach(function (t) {
          t(e)
        }),
          (CB = [])
      }
    },
    dk = function (e) {
      if (e.cancelable) {
        var t = (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp
        'pointerdown' == e.type
          ? (function (e, t) {
              var n = function () {
                  Tk(e, t), o()
                },
                r = function () {
                  o()
                },
                o = function () {
                  removeEventListener('pointerup', n, Ek),
                    removeEventListener('pointercancel', r, Ek)
                }
              addEventListener('pointerup', n, Ek), addEventListener('pointercancel', r, Ek)
            })(t, e)
          : Tk(t, e)
      }
    },
    Sk = function (e) {
      ;['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(function (t) {
        return e(t, dk, Ek)
      })
    },
    fk = [100, 300]
  const Ak = {}
  function hk(e, t, n) {
    if (Ak[t]) return
    Ak[t] = !0
    const r = n.value,
      o = Date.now(),
      i = e.startSpan('webvitals', { startTime: o })
    Ax.setRumSessionId(i),
      gx.setScreenName(i, 'full'),
      i.setAttribute(hx.ATTR_IMQA_SPAN_TYPE, 'webvitals'),
      i.setAttribute(t, r),
      i.end(o)
  }
  function mk(e) {
    const t = e.getTracer('webvitals')
    !(function (e, t) {
      ;(t = t || {}),
        KB(function () {
          var n,
            r = jB(),
            o = UB('FID'),
            i = function (e) {
              e.startTime < r.firstHiddenTime &&
                ((o.value = e.processingStart - e.startTime), o.entries.push(e), n(!0))
            },
            s = function (e) {
              e.forEach(i)
            },
            a = DB('first-input', s)
          ;(n = wB(e, o, fk, t.reportAllChanges)),
            a &&
              (VB(
                GB(function () {
                  s(a.takeRecords()), a.disconnect()
                }),
              ),
              bB(function () {
                var r
                ;(o = UB('FID')),
                  (n = wB(e, o, fk, t.reportAllChanges)),
                  (CB = []),
                  (NB = -1),
                  (IB = null),
                  Sk(addEventListener),
                  (r = i),
                  CB.push(r),
                  pk()
              }))
        })
    })((e) => {
      hk(t, 'fid', e)
    }),
      QB((e) => {
        hk(t, 'cls', e)
      }),
      (function (e, t) {
        ;(t = t || {}),
          KB(function () {
            var n,
              r = jB(),
              o = UB('LCP'),
              i = function (e) {
                t.reportAllChanges || (e = e.slice(-1)),
                  e.forEach(function (e) {
                    e.startTime < r.firstHiddenTime &&
                      ((o.value = Math.max(e.startTime - PB(), 0)), (o.entries = [e]), n())
                  })
              },
              s = DB('largest-contentful-paint', i)
            if (s) {
              n = wB(e, o, _k, t.reportAllChanges)
              var a = GB(function () {
                uk[o.id] || (i(s.takeRecords()), s.disconnect(), (uk[o.id] = !0), n(!0))
              })
              ;['keydown', 'click'].forEach(function (e) {
                addEventListener(
                  e,
                  function () {
                    return sk(a)
                  },
                  { once: !0, capture: !0 },
                )
              }),
                VB(a),
                bB(function (r) {
                  ;(o = UB('LCP')),
                    (n = wB(e, o, _k, t.reportAllChanges)),
                    xB(function () {
                      ;(o.value = performance.now() - r.timeStamp), (uk[o.id] = !0), n(!0)
                    })
                })
            }
          })
      })((e) => {
        hk(t, 'lcp', e)
      }),
      ck((e) => {
        hk(t, 'inp', e)
      })
  }
  const Rk = '0.0.12',
    gk = 'post-doc-load-resource',
    Ok = ['img', 'script'],
    vk = (e) => e instanceof HTMLScriptElement || e instanceof HTMLImageElement
  class Ik extends RA {
    constructor(e = {}) {
      const t = Object.assign({}, { allowedInitiatorTypes: Ok }, e)
      super(gk, Rk, t), (this.config = t), (this.urlToContextMap = {})
    }
    init() {}
    enable() {
      window.PerformanceObserver &&
        window.addEventListener('load', () => {
          this._startPerformanceObserver()
        }),
        window.MutationObserver && this._startHeadMutationObserver()
    }
    disable() {
      this.performanceObserver && this.performanceObserver.disconnect(),
        this.headMutationObserver && this.headMutationObserver.disconnect()
    }
    onBeforeContextChange() {
      var e
      this._processHeadMutationObserverRecords(
        (null === (e = this.headMutationObserver) || void 0 === e ? void 0 : e.takeRecords()) || [],
      )
    }
    _startPerformanceObserver() {
      ;(this.performanceObserver = new PerformanceObserver((e) => {
        'complete' === window.document.readyState &&
          e.getEntries().forEach((e) => {
            var t
            ;(null === (t = this.config.allowedInitiatorTypes) || void 0 === t
              ? void 0
              : t.includes(e.initiatorType)) && this._createSpan(e)
          })
      })),
        this.performanceObserver.observe({ entryTypes: ['resource'] })
    }
    _startHeadMutationObserver() {
      ;(this.headMutationObserver = new MutationObserver(
        this._processHeadMutationObserverRecords.bind(this),
      )),
        this.headMutationObserver.observe(document.head, { childList: !0 })
    }
    _processHeadMutationObserverRecords(e) {
      Ct.active() !== Ae &&
        e
          .flatMap((e) => Array.from(e.addedNodes || []))
          .filter(vk)
          .forEach((e) => {
            try {
              const t = e.getAttribute('src')
              if (!t) return
              const n = new URL(t, location.origin)
              this.urlToContextMap[n.toString()] = Ct.active()
            } catch (e) {}
          })
    }
    _createSpan(e) {
      if (oG(e.name, this.config.ignoreUrls)) return
      const t = new URL(e.name, location.origin),
        n = this.tracer.startSpan(
          'resourceFetch',
          { startTime: e.fetchStart },
          this.urlToContextMap[t.toString()],
        )
      n.setAttribute(hx.ATTR_IMQA_RUM_COMPONENT, gk),
        n.setAttribute(hx.ATTR_URL_FULL, e.name),
        n.setAttribute(hx.ATTR_HTTP_REQUEST_METHOD, 'GET'),
        dB(n),
        n.setAttribute(hx.ATTR_IMQA_SPAN_TYPE, 'postDocLoadResource'),
        oB(n, e)
      const r = e.responseEnd
      r && r > 0 ? n.end(r) : n.end()
    }
  }
  class Nk extends tB {
    shutdown() {
      return new Promise((e) => {
        jt.disable(), Ct.disable(), qt.disable(), e()
      }).then(() => super.shutdown())
    }
  }
  var yk = {}
  Object.defineProperty(yk, '__esModule', { value: !0 })
  var Ck = (yk.InternalEventTarget = void 0)
  Ck = yk.InternalEventTarget = class {
    constructor() {
      this.events = {}
    }
    addEventListener(e, t) {
      this.events[e] || (this.events[e] = []), this.events[e].push(t)
    }
    removeEventListener(e, t) {
      if (!this.events[e]) return
      const n = this.events[e].indexOf(t)
      n >= 0 && this.events[e].splice(n, 1)
    }
    emit(e, t) {
      const n = this.events[e]
      n &&
        n.forEach((e) => {
          Promise.resolve({ payload: t }).then(e)
        })
    }
  }
  const Lk = '__imqa_context'
  class bk {
    constructor(e = {}) {
      ;(this._config = e),
        (this._enabled = !1),
        (this._currentContext = Ae),
        (this._hashChangeContext = null),
        (this._contextResumingListeners = new WeakMap()),
        (this._messagePorts = new WeakMap())
    }
    _bindFunction(e, t = Ae) {
      const n = this,
        r = function (...r) {
          return n.with(t, () => e.apply(this, r))
        }
      return (
        Object.defineProperty(r, 'length', {
          enumerable: !1,
          configurable: !0,
          writable: !1,
          value: e.length,
        }),
        r
      )
    }
    active() {
      return this._currentContext
    }
    bind(e, t) {
      return mB(t) ? this._bindFunction(t, e) : t
    }
    disable() {
      return this._enabled
        ? (this._config.async &&
            (this._unpatchTimeouts(),
            this._unpatchPromise(),
            this._unpatchMutationObserver(),
            this._unpatchEvents(),
            this._unpatchMessageChannel()),
          (this._currentContext = Ae),
          (this._enabled = !1),
          this)
        : this
    }
    enable() {
      return (
        this._enabled ||
          (this._config.async &&
            (this._patchTimeouts(),
            this._patchPromise(),
            this._patchMutationObserver(),
            this._patchEvents(),
            this._patchMessageChannel()),
          (this._enabled = !0),
          (this._currentContext = Ae)),
        this
      )
    }
    bindActiveToArgument(e, t) {
      mB(e[t]) && (e[t] = this.bind(this.active(), e[t]))
    }
    _patchTimeouts() {
      const e = this
      RB(
        window,
        'setTimeout',
        (t) =>
          function (...n) {
            return (!n[1] || n[1] <= 34) && e.bindActiveToArgument(n, 0), t.apply(this, n)
          },
      ),
        'function' == typeof window.setImmediate &&
          RB(
            window,
            'setImmediate',
            (t) =>
              function (...n) {
                return e.bindActiveToArgument(n, 0), t.apply(this, n)
              },
          ),
        'function' == typeof window.requestAnimationFrame &&
          RB(
            window,
            'requestAnimationFrame',
            (t) =>
              function (...n) {
                return e.bindActiveToArgument(n, 0), t.apply(this, n)
              },
          )
    }
    _unpatchTimeouts() {
      fA.unwrap(window, 'setTimeout'),
        'function' == typeof window.setImmediate && fA.unwrap(window, 'setImmediate')
    }
    _patchPromise() {
      if (!window.Promise) return
      const e = this
      RB(
        Promise.prototype,
        'then',
        (t) =>
          function (...n) {
            return e.bindActiveToArgument(n, 0), e.bindActiveToArgument(n, 1), t.apply(this, n)
          },
      ),
        RB(
          Promise.prototype,
          'catch',
          (t) =>
            function (...n) {
              return e.bindActiveToArgument(n, 0), t.apply(this, n)
            },
        ),
        RB(
          Promise.prototype,
          'finally',
          (t) =>
            function (...n) {
              return e.bindActiveToArgument(n, 0), t.apply(this, n)
            },
        )
    }
    _unpatchPromise() {
      window.Promise &&
        (fA.unwrap(Promise.prototype, 'then'),
        fA.unwrap(Promise.prototype, 'catch'),
        fA.unwrap(Promise.prototype, 'finally'))
    }
    _patchMutationObserver() {
      const e = this
      RB(
        window,
        'MutationObserver',
        (t) =>
          class extends t {
            constructor(...t) {
              if (mB(t[0])) {
                const n = t[0]
                t[0] = function (...t) {
                  return this[Lk] && e._enabled ? e.with(this[Lk], n, this, ...t) : n.apply(this, t)
                }
              }
              super(...t),
                Object.defineProperty(this, Lk, { value: null, writable: !0, enumerable: !1 })
            }
            observe(...t) {
              if (t[0] && t[0] instanceof Text && !t[0].parentNode && t[1] && t[1].characterData) {
                const n = this,
                  r = t[0],
                  o = Object.getOwnPropertyDescriptor(CharacterData.prototype, 'data')
                Object.defineProperty(
                  r,
                  'data',
                  Object.assign(Object.assign({}, o), {
                    enumerable: !1,
                    set: function (...t) {
                      const r = e.active()
                      if ((r && (n[Lk] = r), o && o.set)) return o.set.apply(this, t)
                    },
                  }),
                )
              }
              return super.observe(...t)
            }
          },
      )
    }
    _unpatchMutationObserver() {
      fA.unwrap(window, 'MutationObserver')
    }
    _getListenersMap(e, t) {
      this._contextResumingListeners.has(e) || this._contextResumingListeners.set(e, new Map())
      const n = this._contextResumingListeners.get(e)
      if (!n) throw new Error('Listeners by type map is undefined')
      n.has(t) || n.set(t, new WeakMap())
      const r = n.get(t)
      if (!r) throw new Error('Listeners by type map is undefined')
      return r
    }
    _patchEvents() {
      const e = this
      RB(
        XMLHttpRequest.prototype,
        'addEventListener',
        (t) =>
          function (...n) {
            if (mB(n[1])) {
              const t = e._getListenersMap(this, n[0])
              let r = t.get(n[1])
              r || ((r = e.bind(e.active(), n[1])), t.set(n[1], r)), (n[1] = r)
            }
            return t.apply(this, n)
          },
      ),
        RB(
          XMLHttpRequest.prototype,
          'removeEventListener',
          (t) =>
            function (...n) {
              if (mB(n[1])) {
                const t = e._getListenersMap(this, n[0]).get(n[1])
                t && (n[1] = t)
              }
              return t.apply(this, n)
            },
        ),
        [
          'onabort',
          'onerror',
          'onload',
          'onloadend',
          'onloadstart',
          'onprogress',
          'ontimeout',
        ].forEach((t) => {
          const n = Object.getOwnPropertyDescriptor(XMLHttpRequestEventTarget.prototype, t)
          n &&
            (RB(
              n,
              'get',
              (e) =>
                function () {
                  const t = e ? e.call(this) : void 0
                  return mB(t) && t._orig ? t._orig : t
                },
            ),
            RB(
              n,
              'set',
              (t) =>
                function (n) {
                  if (mB(n)) {
                    const t = n,
                      r = e.bind(e.active(), n)
                    ;(r._orig = t), (n = r)
                  }
                  if (t) return t.call(this, n)
                },
            ),
            n && Object.defineProperty(XMLHttpRequestEventTarget.prototype, t, n))
        }),
        RB(
          Window.prototype,
          'addEventListener',
          (t) =>
            function (...n) {
              if ('hashchange' === n[0] && mB(n[1])) {
                const t = e._getListenersMap(this, n[0])
                let r = t.get(n[1])
                r ||
                  ((r = e._getWrappedEventListener(n[1], () => e._hashChangeContext || void 0)),
                  t.set(n[1], r)),
                  (n[1] = r)
              }
              return t.apply(this, n)
            },
        )
      const t = Object.getOwnPropertyDescriptor(window, 'onhashchange')
      t &&
        (RB(
          t,
          'get',
          (e) =>
            function () {
              const t = e ? e.call(this) : void 0
              return mB(t) && t._orig ? t._orig : t
            },
        ),
        RB(
          t,
          'set',
          (t) =>
            function (n) {
              if (mB(n)) {
                const t = e._getWrappedEventListener(n, () => e._hashChangeContext || void 0)
                ;(t._orig = n), (n = t)
              }
              if (t) return t.call(this, n)
            },
        )),
        t && Object.defineProperty(window, 'onhashchange', t)
    }
    _unpatchEvents() {
      fA.unwrap(XMLHttpRequest.prototype, 'addEventListener'),
        fA.unwrap(XMLHttpRequest.prototype, 'removeEventListener')
    }
    _patchMessageChannel() {
      const e = this
      RB(
        window,
        'MessageChannel',
        (t) =>
          class extends t {
            constructor(...t) {
              super(...t),
                e._messagePorts.set(this.port1, this.port2),
                e._messagePorts.set(this.port2, this.port1),
                Object.defineProperty(this.port1, Lk, {
                  value: null,
                  writable: !0,
                  enumerable: !1,
                }),
                Object.defineProperty(this.port2, Lk, { value: null, writable: !0, enumerable: !1 })
            }
          },
      ),
        RB(
          MessagePort.prototype,
          'postMessage',
          (t) =>
            function (...n) {
              const r = e.active()
              if (!e._messagePorts.has(this) || !r) return t.apply(this, n)
              const o = e._messagePorts.get(this)
              o && (o[Lk] = r)
              const i = t.apply(this, n)
              return (
                gB(setTimeout)(() => {
                  ;(null == o ? void 0 : o[Lk]) === r && o && (o[Lk] = null)
                }, 100),
                i
              )
            },
        ),
        RB(
          MessagePort.prototype,
          'addEventListener',
          (t) =>
            function (...n) {
              if ('message' === n[0] && mB(n[1])) {
                const t = e._getListenersMap(this, n[0])
                let r = t.get(n[1])
                r || ((r = e._getWrappedEventListener(n[1], () => this[Lk])), t.set(n[1], r)),
                  (n[1] = r)
              }
              return t.apply(this, n)
            },
        ),
        RB(
          MessagePort.prototype,
          'removeEventListener',
          (t) =>
            function (...n) {
              if ('message' === n[0] && mB(n[1])) {
                const t = e._getListenersMap(this, n[0]).get(n[1])
                t && (n[1] = t)
              }
              return t.apply(this, n)
            },
        )
      const t = Object.getOwnPropertyDescriptor(MessagePort.prototype, 'onmessage')
      t &&
        (RB(
          t,
          'get',
          (e) =>
            function () {
              const t = e ? e.call(this) : void 0
              return mB(t) && t._orig ? t._orig : t
            },
        ),
        RB(
          t,
          'set',
          (t) =>
            function (n) {
              if (mB(n)) {
                const t = e._getWrappedEventListener(n, () => this[Lk])
                ;(t._orig = n), (n = t)
              }
              if (t) return t.call(this, n)
            },
        )),
        t && Object.defineProperty(MessagePort.prototype, 'onmessage', t)
    }
    _getWrappedEventListener(e, t) {
      const n = this
      return function (...r) {
        const o = t()
        return o && n._enabled ? n.with(o, e, this, ...r) : e.apply(this, r)
      }
    }
    _unpatchMessageChannel() {
      fA.unwrap(window, 'MessageChannel'),
        fA.unwrap(MessagePort.prototype, 'postMessage'),
        fA.unwrap(MessagePort.prototype, 'addEventListener'),
        fA.unwrap(MessagePort.prototype, 'removeEventListener')
      const e = Object.getOwnPropertyDescriptor(MessagePort.prototype, 'onmessage')
      e && fA.unwrap(e, 'get'),
        e && fA.unwrap(e, 'set'),
        e && Object.defineProperty(MessagePort.prototype, 'onmessage', e)
    }
    with(e, t, n, ...r) {
      var o, i, s, a
      try {
        null === (i = (o = this._config).onBeforeContextStart) || void 0 === i || i.call(o)
      } catch (e) {}
      const c = this._currentContext
      this._currentContext = e || Ae
      const _ = location.hash
      try {
        const e = t.call(n, ...r)
        return null === (a = (s = this._config).onBeforeContextEnd) || void 0 === a || a.call(s), e
      } finally {
        ;(this._currentContext = c),
          _ !== location.hash &&
            ((this._hashChangeContext = e),
            gB(setTimeout)(() => {
              this._hashChangeContext === e && (this._hashChangeContext = null)
            }, 33))
      }
    }
  }
  class Mk {
    constructor(e) {
      this._globalAttributes = null != e ? e : {}
    }
    setGlobalAttributes(e) {
      if (e) Object.assign(this._globalAttributes, e)
      else for (const e of Object.keys(this._globalAttributes)) delete this._globalAttributes[e]
    }
    getGlobalAttributes() {
      return this._globalAttributes
    }
    forceFlush() {
      return Promise.resolve()
    }
    onStart(e) {
      e.setAttribute(hx.ATTR_IMQA_BROWSER_LOCATION_HREF, location.href),
        e.setAttributes(this._globalAttributes),
        dB(e)
    }
    onEnd() {}
    shutdown() {
      return Promise.resolve()
    }
  }
  var Pk,
    Uk = 'user-agent',
    Dk = '',
    wk = 'function',
    xk = 'undefined',
    Vk = 'object',
    Gk = 'string',
    Bk = 'browser',
    kk = 'cpu',
    Fk = 'device',
    Hk = 'engine',
    Yk = 'os',
    jk = 'result',
    Kk = 'name',
    Wk = 'type',
    qk = 'vendor',
    Qk = 'version',
    zk = 'architecture',
    $k = 'major',
    Xk = 'model',
    Jk = 'console',
    Zk = 'mobile',
    eF = 'tablet',
    tF = 'smarttv',
    nF = 'wearable',
    rF = 'xr',
    oF = 'embedded',
    iF = 'inapp',
    sF = 'brands',
    aF = 'formFactors',
    cF = 'fullVersionList',
    _F = 'platform',
    uF = 'platformVersion',
    EF = 'bitness',
    lF = 'sec-ch-ua',
    TF = lF + '-full-version-list',
    pF = lF + '-arch',
    dF = lF + '-' + EF,
    SF = lF + '-form-factors',
    fF = lF + '-' + Zk,
    AF = lF + '-' + Xk,
    hF = lF + '-' + _F,
    mF = hF + '-version',
    RF = [sF, cF, Zk, Xk, _F, uF, zk, aF, EF],
    gF = 'Amazon',
    OF = 'Apple',
    vF = 'ASUS',
    IF = 'BlackBerry',
    NF = 'Google',
    yF = 'Huawei',
    CF = 'Lenovo',
    LF = 'Honor',
    bF = 'LG',
    MF = 'Microsoft',
    PF = 'Motorola',
    UF = 'Nvidia',
    DF = 'OnePlus',
    wF = 'OPPO',
    xF = 'Samsung',
    VF = 'Sharp',
    GF = 'Sony',
    BF = 'Xiaomi',
    kF = 'Zebra',
    FF = 'Chrome',
    HF = 'Chromium',
    YF = 'Chromecast',
    jF = 'Firefox',
    KF = 'Opera',
    WF = 'Facebook',
    qF = 'Sogou',
    QF = 'Mobile ',
    zF = ' Browser',
    $F = 'Windows',
    XF = typeof window !== xk && window.navigator ? window.navigator : void 0,
    JF = XF && XF.userAgentData ? XF.userAgentData : void 0,
    ZF = function (e) {
      for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n]
      return t
    },
    eH = function (e, t) {
      if (typeof e === Vk && e.length > 0) {
        for (var n in e) if (oH(e[n]) == oH(t)) return !0
        return !1
      }
      return !!nH(e) && -1 !== oH(t).indexOf(oH(e))
    },
    tH = function (e, t) {
      for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (!!t && tH(e[n]))
    },
    nH = function (e) {
      return typeof e === Gk
    },
    rH = function (e) {
      if (e) {
        for (var t = [], n = aH(/\\?\"/g, e).split(','), r = 0; r < n.length; r++)
          if (n[r].indexOf(';') > -1) {
            var o = _H(n[r]).split(';v=')
            t[r] = { brand: o[0], version: o[1] }
          } else t[r] = _H(n[r])
        return t
      }
    },
    oH = function (e) {
      return nH(e) ? e.toLowerCase() : e
    },
    iH = function (e) {
      return nH(e) ? aH(/[^\d\.]/g, e).split('.')[0] : void 0
    },
    sH = function (e) {
      for (var t in e) {
        var n = e[t]
        typeof n == Vk && 2 == n.length ? (this[n[0]] = n[1]) : (this[n] = void 0)
      }
      return this
    },
    aH = function (e, t) {
      return nH(t) ? t.replace(e, Dk) : t
    },
    cH = function (e) {
      return aH(/\\?\"/g, e)
    },
    _H = function (e, t) {
      if (nH(e)) return (e = aH(/^\s\s*/, e)), typeof t === xk ? e : e.substring(0, 500)
    },
    uH = function (e, t) {
      if (e && t)
        for (var n, r, o, i, s, a, c = 0; c < t.length && !s; ) {
          var _ = t[c],
            u = t[c + 1]
          for (n = r = 0; n < _.length && !s && _[n]; )
            if ((s = _[n++].exec(e)))
              for (o = 0; o < u.length; o++)
                (a = s[++r]),
                  typeof (i = u[o]) === Vk && i.length > 0
                    ? 2 === i.length
                      ? typeof i[1] == wk
                        ? (this[i[0]] = i[1].call(this, a))
                        : (this[i[0]] = i[1])
                      : 3 === i.length
                        ? typeof i[1] !== wk || (i[1].exec && i[1].test)
                          ? (this[i[0]] = a ? a.replace(i[1], i[2]) : void 0)
                          : (this[i[0]] = a ? i[1].call(this, a, i[2]) : void 0)
                        : 4 === i.length &&
                          (this[i[0]] = a ? i[3].call(this, a.replace(i[1], i[2])) : void 0)
                    : (this[i] = a || void 0)
          c += 2
        }
    },
    EH = function (e, t) {
      for (var n in t)
        if (typeof t[n] === Vk && t[n].length > 0) {
          for (var r = 0; r < t[n].length; r++) if (eH(t[n][r], e)) return '?' === n ? void 0 : n
        } else if (eH(t[n], e)) return '?' === n ? void 0 : n
      return t.hasOwnProperty('*') ? t['*'] : e
    },
    lH = {
      ME: '4.90',
      'NT 3.11': 'NT3.51',
      'NT 4.0': 'NT4.0',
      2e3: 'NT 5.0',
      XP: ['NT 5.1', 'NT 5.2'],
      Vista: 'NT 6.0',
      7: 'NT 6.1',
      8: 'NT 6.2',
      8.1: 'NT 6.3',
      10: ['NT 6.4', 'NT 10.0'],
      RT: 'ARM',
    },
    TH = {
      embedded: 'Automotive',
      mobile: 'Mobile',
      tablet: ['Tablet', 'EInk'],
      smarttv: 'TV',
      wearable: 'Watch',
      xr: ['VR', 'XR'],
      '?': ['Desktop', 'Unknown'],
      '*': void 0,
    },
    pH = {
      browser: [
        [/\b(?:crmo|crios)\/([\w\.]+)/i],
        [Qk, [Kk, QF + 'Chrome']],
        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
        [Qk, [Kk, 'Edge']],
        [
          /(opera mini)\/([-\w\.]+)/i,
          /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
          /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
        ],
        [Kk, Qk],
        [/opios[\/ ]+([\w\.]+)/i],
        [Qk, [Kk, KF + ' Mini']],
        [/\bop(?:rg)?x\/([\w\.]+)/i],
        [Qk, [Kk, KF + ' GX']],
        [/\bopr\/([\w\.]+)/i],
        [Qk, [Kk, KF]],
        [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
        [Qk, [Kk, 'Baidu']],
        [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
        [Qk, [Kk, 'Maxthon']],
        [
          /(kindle)\/([\w\.]+)/i,
          /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
          /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
          /(?:ms|\()(ie) ([\w\.]+)/i,
          /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
          /(heytap|ovi|115)browser\/([\d\.]+)/i,
          /(weibo)__([\d\.]+)/i,
        ],
        [Kk, Qk],
        [/quark(?:pc)?\/([-\w\.]+)/i],
        [Qk, [Kk, 'Quark']],
        [/\bddg\/([\w\.]+)/i],
        [Qk, [Kk, 'DuckDuckGo']],
        [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
        [Qk, [Kk, 'UCBrowser']],
        [
          /microm.+\bqbcore\/([\w\.]+)/i,
          /\bqbcore\/([\w\.]+).+microm/i,
          /micromessenger\/([\w\.]+)/i,
        ],
        [Qk, [Kk, 'WeChat']],
        [/konqueror\/([\w\.]+)/i],
        [Qk, [Kk, 'Konqueror']],
        [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
        [Qk, [Kk, 'IE']],
        [/ya(?:search)?browser\/([\w\.]+)/i],
        [Qk, [Kk, 'Yandex']],
        [/slbrowser\/([\w\.]+)/i],
        [Qk, [Kk, 'Smart ' + CF + zF]],
        [/(avast|avg)\/([\w\.]+)/i],
        [[Kk, /(.+)/, '$1 Secure' + zF], Qk],
        [/\bfocus\/([\w\.]+)/i],
        [Qk, [Kk, jF + ' Focus']],
        [/\bopt\/([\w\.]+)/i],
        [Qk, [Kk, KF + ' Touch']],
        [/coc_coc\w+\/([\w\.]+)/i],
        [Qk, [Kk, 'Coc Coc']],
        [/dolfin\/([\w\.]+)/i],
        [Qk, [Kk, 'Dolphin']],
        [/coast\/([\w\.]+)/i],
        [Qk, [Kk, KF + ' Coast']],
        [/miuibrowser\/([\w\.]+)/i],
        [Qk, [Kk, 'MIUI' + zF]],
        [/fxios\/([\w\.-]+)/i],
        [Qk, [Kk, QF + jF]],
        [/\bqihoobrowser\/?([\w\.]*)/i],
        [Qk, [Kk, '360']],
        [/\b(qq)\/([\w\.]+)/i],
        [[Kk, /(.+)/, '$1Browser'], Qk],
        [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
        [[Kk, /(.+)/, '$1' + zF], Qk],
        [/samsungbrowser\/([\w\.]+)/i],
        [Qk, [Kk, xF + ' Internet']],
        [/metasr[\/ ]?([\d\.]+)/i],
        [Qk, [Kk, qF + ' Explorer']],
        [/(sogou)mo\w+\/([\d\.]+)/i],
        [[Kk, qF + ' Mobile'], Qk],
        [
          /(electron)\/([\w\.]+) safari/i,
          /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
          /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
        ],
        [Kk, Qk],
        [/(lbbrowser|rekonq)/i],
        [Kk],
        [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
        [Qk, Kk],
        [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
        [[Kk, WF], Qk, [Wk, iF]],
        [
          /(Klarna)\/([\w\.]+)/i,
          /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
          /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
          /(daum)apps[\/ ]([\w\.]+)/i,
          /safari (line)\/([\w\.]+)/i,
          /\b(line)\/([\w\.]+)\/iab/i,
          /(alipay)client\/([\w\.]+)/i,
          /(twitter)(?:and| f.+e\/([\w\.]+))/i,
          /(instagram|snapchat)[\/ ]([-\w\.]+)/i,
        ],
        [Kk, Qk, [Wk, iF]],
        [/\bgsa\/([\w\.]+) .*safari\//i],
        [Qk, [Kk, 'GSA'], [Wk, iF]],
        [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
        [Qk, [Kk, 'TikTok'], [Wk, iF]],
        [/\[(linkedin)app\]/i],
        [Kk, [Wk, iF]],
        [/(chromium)[\/ ]([-\w\.]+)/i],
        [Kk, Qk],
        [/headlesschrome(?:\/([\w\.]+)| )/i],
        [Qk, [Kk, FF + ' Headless']],
        [/ wv\).+(chrome)\/([\w\.]+)/i],
        [[Kk, FF + ' WebView'], Qk],
        [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
        [Qk, [Kk, 'Android' + zF]],
        [/chrome\/([\w\.]+) mobile/i],
        [Qk, [Kk, QF + 'Chrome']],
        [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
        [Kk, Qk],
        [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
        [Qk, [Kk, QF + 'Safari']],
        [/iphone .*mobile(?:\/\w+ | ?)safari/i],
        [[Kk, QF + 'Safari']],
        [/version\/([\w\.\,]+) .*(safari)/i],
        [Qk, Kk],
        [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
        [Kk, [Qk, '1']],
        [/(webkit|khtml)\/([\w\.]+)/i],
        [Kk, Qk],
        [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
        [[Kk, QF + jF], Qk],
        [/(navigator|netscape\d?)\/([-\w\.]+)/i],
        [[Kk, 'Netscape'], Qk],
        [/(wolvic|librewolf)\/([\w\.]+)/i],
        [Kk, Qk],
        [/mobile vr; rv:([\w\.]+)\).+firefox/i],
        [Qk, [Kk, jF + ' Reality']],
        [
          /ekiohf.+(flow)\/([\w\.]+)/i,
          /(swiftfox)/i,
          /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
          /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
          /(firefox)\/([\w\.]+)/i,
          /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
          /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
          /\b(links) \(([\w\.]+)/i,
        ],
        [Kk, [Qk, /_/g, '.']],
        [/(cobalt)\/([\w\.]+)/i],
        [Kk, [Qk, /[^\d\.]+./, Dk]],
      ],
      cpu: [
        [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
        [[zk, 'amd64']],
        [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
        [[zk, 'ia32']],
        [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
        [[zk, 'arm64']],
        [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
        [[zk, 'armhf']],
        [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
        [[zk, 'arm']],
        [/((ppc|powerpc)(64)?)( mac|;|\))/i],
        [[zk, /ower/, Dk, oH]],
        [/ sun4\w[;\)]/i],
        [[zk, 'sparc']],
        [
          /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
        ],
        [[zk, oH]],
      ],
      device: [
        [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
        [Xk, [qk, xF], [Wk, eF]],
        [
          /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
          /samsung[- ]((?!sm-[lr])[-\w]+)/i,
          /sec-(sgh\w+)/i,
        ],
        [Xk, [qk, xF], [Wk, Zk]],
        [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
        [Xk, [qk, OF], [Wk, Zk]],
        [
          /\((ipad);[-\w\),; ]+apple/i,
          /applecoremedia\/[\w\.]+ \((ipad)/i,
          /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
        ],
        [Xk, [qk, OF], [Wk, eF]],
        [/(macintosh);/i],
        [Xk, [qk, OF]],
        [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
        [Xk, [qk, VF], [Wk, Zk]],
        [
          /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
        ],
        [Xk, [qk, LF], [Wk, eF]],
        [/honor([-\w ]+)[;\)]/i],
        [Xk, [qk, LF], [Wk, Zk]],
        [
          /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
        ],
        [Xk, [qk, yF], [Wk, eF]],
        [
          /(?:huawei)([-\w ]+)[;\)]/i,
          /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
        ],
        [Xk, [qk, yF], [Wk, Zk]],
        [
          /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
          /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
        ],
        [
          [Xk, /_/g, ' '],
          [qk, BF],
          [Wk, eF],
        ],
        [
          /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
          /\b; (\w+) build\/hm\1/i,
          /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
          /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
          /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
          /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
          / ([\w ]+) miui\/v?\d/i,
        ],
        [
          [Xk, /_/g, ' '],
          [qk, BF],
          [Wk, Zk],
        ],
        [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
        [Xk, [qk, wF], [Wk, Zk]],
        [/\b(opd2(\d{3}a?))(?: bui|\))/i],
        [Xk, [qk, EH, { OnePlus: ['304', '403', '203'], '*': wF }], [Wk, eF]],
        [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
        [Xk, [qk, 'Vivo'], [Wk, Zk]],
        [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
        [Xk, [qk, 'Realme'], [Wk, Zk]],
        [
          /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
          /\bmot(?:orola)?[- ](\w*)/i,
          /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
        ],
        [Xk, [qk, PF], [Wk, Zk]],
        [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
        [Xk, [qk, PF], [Wk, eF]],
        [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
        [Xk, [qk, bF], [Wk, eF]],
        [
          /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
          /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
          /\blg-?([\d\w]+) bui/i,
        ],
        [Xk, [qk, bF], [Wk, Zk]],
        [
          /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
          /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
        ],
        [Xk, [qk, CF], [Wk, eF]],
        [/(nokia) (t[12][01])/i],
        [qk, Xk, [Wk, eF]],
        [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
        [
          [Xk, /_/g, ' '],
          [Wk, Zk],
          [qk, 'Nokia'],
        ],
        [/(pixel (c|tablet))\b/i],
        [Xk, [qk, NF], [Wk, eF]],
        [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
        [Xk, [qk, NF], [Wk, Zk]],
        [
          /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
        ],
        [Xk, [qk, GF], [Wk, Zk]],
        [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
        [
          [Xk, 'Xperia Tablet'],
          [qk, GF],
          [Wk, eF],
        ],
        [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
        [Xk, [qk, DF], [Wk, Zk]],
        [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
        [Xk, [qk, gF], [Wk, eF]],
        [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
        [
          [Xk, /(.+)/g, 'Fire Phone $1'],
          [qk, gF],
          [Wk, Zk],
        ],
        [/(playbook);[-\w\),; ]+(rim)/i],
        [Xk, qk, [Wk, eF]],
        [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
        [Xk, [qk, IF], [Wk, Zk]],
        [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
        [Xk, [qk, vF], [Wk, eF]],
        [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
        [Xk, [qk, vF], [Wk, Zk]],
        [/(nexus 9)/i],
        [Xk, [qk, 'HTC'], [Wk, eF]],
        [
          /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
          /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
          /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
        ],
        [qk, [Xk, /_/g, ' '], [Wk, Zk]],
        [
          /tcl (xess p17aa)/i,
          /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i,
        ],
        [Xk, [qk, 'TCL'], [Wk, eF]],
        [
          /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i,
        ],
        [Xk, [qk, 'TCL'], [Wk, Zk]],
        [/(itel) ((\w+))/i],
        [[qk, oH], Xk, [Wk, EH, { tablet: ['p10001l', 'w7001'], '*': 'mobile' }]],
        [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
        [Xk, [qk, 'Acer'], [Wk, eF]],
        [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
        [Xk, [qk, 'Meizu'], [Wk, Zk]],
        [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
        [Xk, [qk, 'Ulefone'], [Wk, Zk]],
        [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
        [Xk, [qk, 'Energizer'], [Wk, Zk]],
        [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
        [Xk, [qk, 'Cat'], [Wk, Zk]],
        [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
        [Xk, [qk, 'Smartfren'], [Wk, Zk]],
        [/droid.+; (a(?:015|06[35]|142p?))/i],
        [Xk, [qk, 'Nothing'], [Wk, Zk]],
        [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
        [qk, Xk, [Wk, eF]],
        [
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
          /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
          /(hp) ([\w ]+\w)/i,
          /(microsoft); (lumia[\w ]+)/i,
          /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
          /(oppo) ?([\w ]+) bui/i,
        ],
        [qk, Xk, [Wk, Zk]],
        [
          /(kobo)\s(ereader|touch)/i,
          /(archos) (gamepad2?)/i,
          /(hp).+(touchpad(?!.+tablet)|tablet)/i,
          /(kindle)\/([\w\.]+)/i,
        ],
        [qk, Xk, [Wk, eF]],
        [/(surface duo)/i],
        [Xk, [qk, MF], [Wk, eF]],
        [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
        [Xk, [qk, 'Fairphone'], [Wk, Zk]],
        [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
        [Xk, [qk, UF], [Wk, eF]],
        [/(sprint) (\w+)/i],
        [qk, Xk, [Wk, Zk]],
        [/(kin\.[onetw]{3})/i],
        [
          [Xk, /\./g, ' '],
          [qk, MF],
          [Wk, Zk],
        ],
        [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
        [Xk, [qk, kF], [Wk, eF]],
        [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
        [Xk, [qk, kF], [Wk, Zk]],
        [/smart-tv.+(samsung)/i],
        [qk, [Wk, tF]],
        [/hbbtv.+maple;(\d+)/i],
        [
          [Xk, /^/, 'SmartTV'],
          [qk, xF],
          [Wk, tF],
        ],
        [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
        [
          [qk, bF],
          [Wk, tF],
        ],
        [/(apple) ?tv/i],
        [qk, [Xk, OF + ' TV'], [Wk, tF]],
        [/crkey.*devicetype\/chromecast/i],
        [
          [Xk, YF + ' Third Generation'],
          [qk, NF],
          [Wk, tF],
        ],
        [/crkey.*devicetype\/([^/]*)/i],
        [
          [Xk, /^/, 'Chromecast '],
          [qk, NF],
          [Wk, tF],
        ],
        [/fuchsia.*crkey/i],
        [
          [Xk, YF + ' Nest Hub'],
          [qk, NF],
          [Wk, tF],
        ],
        [/crkey/i],
        [
          [Xk, YF],
          [qk, NF],
          [Wk, tF],
        ],
        [/droid.+aft(\w+)( bui|\))/i],
        [Xk, [qk, gF], [Wk, tF]],
        [/(shield \w+ tv)/i],
        [Xk, [qk, UF], [Wk, tF]],
        [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
        [Xk, [qk, VF], [Wk, tF]],
        [/(bravia[\w ]+)( bui|\))/i],
        [Xk, [qk, GF], [Wk, tF]],
        [/(mi(tv|box)-?\w+) bui/i],
        [Xk, [qk, BF], [Wk, tF]],
        [/Hbbtv.*(technisat) (.*);/i],
        [qk, Xk, [Wk, tF]],
        [
          /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
          /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
        ],
        [
          [qk, _H],
          [Xk, _H],
          [Wk, tF],
        ],
        [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
        [Xk, [Wk, tF]],
        [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
        [[Wk, tF]],
        [/(ouya)/i, /(nintendo) (\w+)/i],
        [qk, Xk, [Wk, Jk]],
        [/droid.+; (shield)( bui|\))/i],
        [Xk, [qk, UF], [Wk, Jk]],
        [/(playstation \w+)/i],
        [Xk, [qk, GF], [Wk, Jk]],
        [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
        [Xk, [qk, MF], [Wk, Jk]],
        [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
        [Xk, [qk, xF], [Wk, nF]],
        [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
        [qk, Xk, [Wk, nF]],
        [/(ow(?:19|20)?we?[1-3]{1,3})/i],
        [Xk, [qk, wF], [Wk, nF]],
        [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
        [Xk, [qk, OF], [Wk, nF]],
        [/(opwwe\d{3})/i],
        [Xk, [qk, DF], [Wk, nF]],
        [/(moto 360)/i],
        [Xk, [qk, PF], [Wk, nF]],
        [/(smartwatch 3)/i],
        [Xk, [qk, GF], [Wk, nF]],
        [/(g watch r)/i],
        [Xk, [qk, bF], [Wk, nF]],
        [/droid.+; (wt63?0{2,3})\)/i],
        [Xk, [qk, kF], [Wk, nF]],
        [/droid.+; (glass) \d/i],
        [Xk, [qk, NF], [Wk, rF]],
        [/(pico) (4|neo3(?: link|pro)?)/i],
        [qk, Xk, [Wk, rF]],
        [/; (quest( \d| pro)?)/i],
        [Xk, [qk, WF], [Wk, rF]],
        [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
        [qk, [Wk, oF]],
        [/(aeobc)\b/i],
        [Xk, [qk, gF], [Wk, oF]],
        [/(homepod).+mac os/i],
        [Xk, [qk, OF], [Wk, oF]],
        [/windows iot/i],
        [[Wk, oF]],
        [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i],
        [Xk, [Wk, EH, { mobile: 'Mobile', xr: 'VR', '*': eF }]],
        [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
        [[Wk, eF]],
        [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
        [[Wk, Zk]],
        [/droid .+?; ([\w\. -]+)( bui|\))/i],
        [Xk, [qk, 'Generic']],
      ],
      engine: [
        [/windows.+ edge\/([\w\.]+)/i],
        [Qk, [Kk, 'EdgeHTML']],
        [/(arkweb)\/([\w\.]+)/i],
        [Kk, Qk],
        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
        [Qk, [Kk, 'Blink']],
        [
          /(presto)\/([\w\.]+)/i,
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
          /ekioh(flow)\/([\w\.]+)/i,
          /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
          /(icab)[\/ ]([23]\.[\d\.]+)/i,
          /\b(libweb)/i,
        ],
        [Kk, Qk],
        [/ladybird\//i],
        [[Kk, 'LibWeb']],
        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
        [Qk, Kk],
      ],
      os: [
        [/microsoft (windows) (vista|xp)/i],
        [Kk, Qk],
        [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
        [Kk, [Qk, EH, lH]],
        [
          /windows nt 6\.2; (arm)/i,
          /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
          /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
        ],
        [
          [Qk, EH, lH],
          [Kk, $F],
        ],
        [
          /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
          /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
          /cfnetwork\/.+darwin/i,
        ],
        [
          [Qk, /_/g, '.'],
          [Kk, 'iOS'],
        ],
        [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
        [
          [Kk, 'macOS'],
          [Qk, /_/g, '.'],
        ],
        [/android ([\d\.]+).*crkey/i],
        [Qk, [Kk, YF + ' Android']],
        [/fuchsia.*crkey\/([\d\.]+)/i],
        [Qk, [Kk, YF + ' Fuchsia']],
        [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
        [Qk, [Kk, YF + ' SmartSpeaker']],
        [/linux.*crkey\/([\d\.]+)/i],
        [Qk, [Kk, YF + ' Linux']],
        [/crkey\/([\d\.]+)/i],
        [Qk, [Kk, YF]],
        [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
        [Qk, Kk],
        [/(ubuntu) ([\w\.]+) like android/i],
        [[Kk, /(.+)/, '$1 Touch'], Qk],
        [
          /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
        ],
        [Kk, Qk],
        [/\(bb(10);/i],
        [Qk, [Kk, IF]],
        [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
        [Qk, [Kk, 'Symbian']],
        [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
        [Qk, [Kk, jF + ' OS']],
        [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
        [Qk, [Kk, 'webOS']],
        [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
        [Qk, [Kk, 'watchOS']],
        [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
        [[Kk, 'Chrome OS'], Qk],
        [
          /panasonic;(viera)/i,
          /(netrange)mmh/i,
          /(nettv)\/(\d+\.[\w\.]+)/i,
          /(nintendo|playstation) (\w+)/i,
          /(xbox); +xbox ([^\);]+)/i,
          /(pico) .+os([\w\.]+)/i,
          /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
          /(mint)[\/\(\) ]?(\w*)/i,
          /(mageia|vectorlinux)[; ]/i,
          /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
          /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
          /(gnu) ?([\w\.]*)/i,
          /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
          /(haiku) (\w+)/i,
        ],
        [Kk, Qk],
        [/(sunos) ?([\w\.\d]*)/i],
        [[Kk, 'Solaris'], Qk],
        [
          /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
          /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
          /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
          /(unix) ?([\w\.]*)/i,
        ],
        [Kk, Qk],
      ],
    },
    dH =
      (sH.call((Pk = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} }).init, [
        [Bk, [Kk, Qk, $k, Wk]],
        [kk, [zk]],
        [Fk, [Wk, Xk, qk]],
        [Hk, [Kk, Qk]],
        [Yk, [Kk, Qk]],
      ]),
      sH.call(Pk.isIgnore, [
        [Bk, [Qk, $k]],
        [Hk, [Qk]],
        [Yk, [Qk]],
      ]),
      sH.call(Pk.isIgnoreRgx, [
        [Bk, / ?browser$/i],
        [Yk, / ?os$/i],
      ]),
      sH.call(Pk.toString, [
        [Bk, [Kk, Qk]],
        [kk, [zk]],
        [Fk, [qk, Xk]],
        [Hk, [Kk, Qk]],
        [Yk, [Kk, Qk]],
      ]),
      Pk),
    SH = function (e, t) {
      var n = dH.init[t],
        r = dH.isIgnore[t] || 0,
        o = dH.isIgnoreRgx[t] || 0,
        i = dH.toString[t] || 0
      function s() {
        sH.call(this, n)
      }
      return (
        (s.prototype.getItem = function () {
          return e
        }),
        (s.prototype.withClientHints = function () {
          return JF
            ? JF.getHighEntropyValues(RF).then(function (t) {
                return e.setCH(new fH(t, !1)).parseCH().get()
              })
            : e.parseCH().get()
        }),
        (s.prototype.withFeatureCheck = function () {
          return e.detectFeature().get()
        }),
        t != jk &&
          ((s.prototype.is = function (e) {
            var t = !1
            for (var n in this)
              if (
                this.hasOwnProperty(n) &&
                !eH(r, n) &&
                oH(o ? aH(o, this[n]) : this[n]) == oH(o ? aH(o, e) : e)
              ) {
                if (((t = !0), e != xk)) break
              } else if (e == xk && t) {
                t = !t
                break
              }
            return t
          }),
          (s.prototype.toString = function () {
            var e = Dk
            for (var t in i) typeof this[i[t]] !== xk && (e += (e ? ' ' : Dk) + this[i[t]])
            return e || xk
          })),
        JF ||
          (s.prototype.then = function (e) {
            var t = this,
              n = function () {
                for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e])
              }
            n.prototype = { is: s.prototype.is, toString: s.prototype.toString }
            var r = new n()
            return e(r), r
          }),
        new s()
      )
    }
  function fH(e, t) {
    if (((e = e || {}), sH.call(this, RF), t))
      sH.call(this, [
        [sF, rH(e[lF])],
        [cF, rH(e[TF])],
        [Zk, /\?1/.test(e[fF])],
        [Xk, cH(e[AF])],
        [_F, cH(e[hF])],
        [uF, cH(e[mF])],
        [zk, cH(e[pF])],
        [aF, rH(e[SF])],
        [EF, cH(e[dF])],
      ])
    else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== xk && (this[n] = e[n])
  }
  function AH(e, t, n, r) {
    return (
      (this.get = function (e) {
        return e ? (this.data.hasOwnProperty(e) ? this.data[e] : void 0) : this.data
      }),
      (this.set = function (e, t) {
        return (this.data[e] = t), this
      }),
      (this.setCH = function (e) {
        return (this.uaCH = e), this
      }),
      (this.detectFeature = function () {
        if (XF && XF.userAgent == this.ua)
          switch (this.itemType) {
            case Bk:
              XF.brave && typeof XF.brave.isBrave == wk && this.set(Kk, 'Brave')
              break
            case Fk:
              !this.get(Wk) && JF && JF[Zk] && this.set(Wk, Zk),
                'Macintosh' == this.get(Xk) &&
                  XF &&
                  typeof XF.standalone !== xk &&
                  XF.maxTouchPoints &&
                  XF.maxTouchPoints > 2 &&
                  this.set(Xk, 'iPad').set(Wk, eF)
              break
            case Yk:
              !this.get(Kk) && JF && JF[_F] && this.set(Kk, JF[_F])
              break
            case jk:
              var e = this.data,
                t = function (t) {
                  return e[t].getItem().detectFeature().get()
                }
              this.set(Bk, t(Bk)).set(kk, t(kk)).set(Fk, t(Fk)).set(Hk, t(Hk)).set(Yk, t(Yk))
          }
        return this
      }),
      (this.parseUA = function () {
        return (
          this.itemType != jk && uH.call(this.data, this.ua, this.rgxMap),
          this.itemType == Bk && this.set($k, iH(this.get(Qk))),
          this
        )
      }),
      (this.parseCH = function () {
        var e = this.uaCH,
          t = this.rgxMap
        switch (this.itemType) {
          case Bk:
          case Hk:
            var n,
              r = e[cF] || e[sF]
            if (r)
              for (var o in r) {
                var i = r[o].brand || r[o],
                  s = r[o].version
                this.itemType != Bk ||
                  /not.a.brand/i.test(i) ||
                  (n && (!/chrom/i.test(n) || i == HF)) ||
                  ((i = EH(i, {
                    Chrome: 'Google Chrome',
                    Edge: 'Microsoft Edge',
                    'Chrome WebView': 'Android WebView',
                    'Chrome Headless': 'HeadlessChrome',
                  })),
                  this.set(Kk, i).set(Qk, s).set($k, iH(s)),
                  (n = i)),
                  this.itemType == Hk && i == HF && this.set(Qk, s)
              }
            break
          case kk:
            var a = e[zk]
            a && (a && '64' == e[EF] && (a += '64'), uH.call(this.data, a + ';', t))
            break
          case Fk:
            if (
              (e[Zk] && this.set(Wk, Zk),
              e[Xk] && (this.set(Xk, e[Xk]), !this.get(Wk) || !this.get(qk)))
            ) {
              var c = {}
              uH.call(c, 'droid 9; ' + e[Xk] + ')', t),
                !this.get(Wk) && c.type && this.set(Wk, c.type),
                !this.get(qk) && c.vendor && this.set(qk, c.vendor)
            }
            if (e[aF]) {
              var _
              if ('string' != typeof e[aF])
                for (var u = 0; !_ && u < e[aF].length; ) _ = EH(e[aF][u++], TH)
              else _ = EH(e[aF], TH)
              this.set(Wk, _)
            }
            break
          case Yk:
            var E = e[_F]
            if (E) {
              var l = e[uF]
              E == $F && (l = parseInt(iH(l), 10) >= 13 ? '11' : '10'), this.set(Kk, E).set(Qk, l)
            }
            this.get(Kk) == $F && 'Xbox' == e[Xk] && this.set(Kk, 'Xbox').set(Qk, void 0)
            break
          case jk:
            var T = this.data,
              p = function (t) {
                return T[t].getItem().setCH(e).parseCH().get()
              }
            this.set(Bk, p(Bk)).set(kk, p(kk)).set(Fk, p(Fk)).set(Hk, p(Hk)).set(Yk, p(Yk))
        }
        return this
      }),
      sH.call(this, [
        ['itemType', e],
        ['ua', t],
        ['uaCH', r],
        ['rgxMap', n],
        ['data', SH(this, e)],
      ]),
      this
    )
  }
  function hH(e, t, n) {
    if (
      (typeof e === Vk
        ? (tH(e, !0) ? (typeof t === Vk && (n = t), (t = e)) : ((n = e), (t = void 0)),
          (e = void 0))
        : typeof e !== Gk || tH(t, !0) || ((n = t), (t = void 0)),
      n && typeof n.append === wk)
    ) {
      var r = {}
      n.forEach(function (e, t) {
        r[t] = e
      }),
        (n = r)
    }
    if (!(this instanceof hH)) return new hH(e, t, n).getResult()
    var o = typeof e === Gk ? e : n && n[Uk] ? n[Uk] : XF && XF.userAgent ? XF.userAgent : Dk,
      i = new fH(n, !0),
      s = t
        ? (function (e, t) {
            var n = {},
              r = t
            if (!tH(t))
              for (var o in ((r = {}), t))
                for (var i in t[o]) r[i] = t[o][i].concat(r[i] ? r[i] : [])
            for (var s in e) n[s] = r[s] && r[s].length % 2 == 0 ? r[s].concat(e[s]) : e[s]
            return n
          })(pH, t)
        : pH,
      a = function (e) {
        return e == jk
          ? function () {
              return new AH(e, o, s, i)
                .set('ua', o)
                .set(Bk, this.getBrowser())
                .set(kk, this.getCPU())
                .set(Fk, this.getDevice())
                .set(Hk, this.getEngine())
                .set(Yk, this.getOS())
                .get()
            }
          : function () {
              return new AH(e, o, s[e], i).parseUA().get()
            }
      }
    return (
      sH
        .call(this, [
          ['getBrowser', a(Bk)],
          ['getCPU', a(kk)],
          ['getDevice', a(Fk)],
          ['getEngine', a(Hk)],
          ['getOS', a(Yk)],
          ['getResult', a(jk)],
          [
            'getUA',
            function () {
              return o
            },
          ],
          [
            'setUA',
            function (e) {
              return nH(e) && (o = e.length > 500 ? _H(e, 500) : e), this
            },
          ],
        ])
        .setUA(o),
      this
    )
  }
  ;(hH.VERSION = '2.0.2'),
    (hH.BROWSER = ZF([Kk, Qk, $k, Wk])),
    (hH.CPU = ZF([zk])),
    (hH.DEVICE = ZF([Xk, qk, Wk, Jk, Zk, tF, eF, nF, oF])),
    (hH.ENGINE = hH.OS = ZF([Kk, Qk]))
  const mH = (e) => {
    switch (e) {
      case 'wearable':
      case 'mobile':
        return 'mobile'
      default:
        return 'desktop'
    }
  }
  var RH = function (e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0
      if (n) return n.call(e)
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          },
        }
      throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    },
    gH = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    OH = (function () {
      function e(e, t, n) {
        ;(this.attributes = {}), (this.totalAttributesCount = 0), (this._isReadonly = !1)
        var r = n.timestamp,
          o = n.observedTimestamp,
          i = n.severityNumber,
          s = n.severityText,
          a = n.body,
          c = n.attributes,
          _ = void 0 === c ? {} : c,
          u = n.context,
          E = Date.now()
        if (
          ((this.hrTime = SV(null != r ? r : E)), (this.hrTimeObserved = SV(null != o ? o : E)), u)
        ) {
          var l = qt.getSpanContext(u)
          l && lt(l) && (this.spanContext = l)
        }
        ;(this.severityNumber = i),
          (this.severityText = s),
          (this.body = a),
          (this.resource = e.resource),
          (this.instrumentationScope = t),
          (this._logRecordLimits = e.logRecordLimits),
          this.setAttributes(_)
      }
      return (
        Object.defineProperty(e.prototype, 'severityText', {
          get: function () {
            return this._severityText
          },
          set: function (e) {
            this._isLogRecordReadonly() || (this._severityText = e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'severityNumber', {
          get: function () {
            return this._severityNumber
          },
          set: function (e) {
            this._isLogRecordReadonly() || (this._severityNumber = e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'body', {
          get: function () {
            return this._body
          },
          set: function (e) {
            this._isLogRecordReadonly() || (this._body = e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'droppedAttributesCount', {
          get: function () {
            return this.totalAttributesCount - Object.keys(this.attributes).length
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.setAttribute = function (e, t) {
          return this._isLogRecordReadonly() || null === t
            ? this
            : 0 === e.length
              ? (Lt.warn('Invalid attribute key: ' + e), this)
              : xx(t) || ('object' == typeof t && !Array.isArray(t) && Object.keys(t).length > 0)
                ? ((this.totalAttributesCount += 1),
                  Object.keys(this.attributes).length >=
                    this._logRecordLimits.attributeCountLimit &&
                  !Object.prototype.hasOwnProperty.call(this.attributes, e)
                    ? (1 === this.droppedAttributesCount && Lt.warn('Dropping extra attributes.'),
                      this)
                    : (xx(t)
                        ? (this.attributes[e] = this._truncateToSize(t))
                        : (this.attributes[e] = t),
                      this))
                : (Lt.warn('Invalid attribute value set for key: ' + e), this)
        }),
        (e.prototype.setAttributes = function (e) {
          var t, n
          try {
            for (var r = RH(Object.entries(e)), o = r.next(); !o.done; o = r.next()) {
              var i = gH(o.value, 2),
                s = i[0],
                a = i[1]
              this.setAttribute(s, a)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r)
            } finally {
              if (t) throw t.error
            }
          }
          return this
        }),
        (e.prototype.setBody = function (e) {
          return (this.body = e), this
        }),
        (e.prototype.setSeverityNumber = function (e) {
          return (this.severityNumber = e), this
        }),
        (e.prototype.setSeverityText = function (e) {
          return (this.severityText = e), this
        }),
        (e.prototype._makeReadonly = function () {
          this._isReadonly = !0
        }),
        (e.prototype._truncateToSize = function (e) {
          var t = this,
            n = this._logRecordLimits.attributeValueLengthLimit
          return n <= 0
            ? (Lt.warn('Attribute value limit must be positive, got ' + n), e)
            : 'string' == typeof e
              ? this._truncateToLimitUtil(e, n)
              : Array.isArray(e)
                ? e.map(function (e) {
                    return 'string' == typeof e ? t._truncateToLimitUtil(e, n) : e
                  })
                : e
        }),
        (e.prototype._truncateToLimitUtil = function (e, t) {
          return e.length <= t ? e : e.substring(0, t)
        }),
        (e.prototype._isLogRecordReadonly = function () {
          return (
            this._isReadonly && Lt.warn('Can not execute the operation on emitted log record'),
            this._isReadonly
          )
        }),
        e
      )
    })(),
    vH = function () {
      return (
        (vH =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }),
        vH.apply(this, arguments)
      )
    },
    IH = (function () {
      function e(e, t) {
        ;(this.instrumentationScope = e), (this._sharedState = t)
      }
      return (
        (e.prototype.emit = function (e) {
          var t = e.context || Ct.active(),
            n = new OH(this._sharedState, this.instrumentationScope, vH({ context: t }, e))
          this._sharedState.activeProcessor.onEmit(n, t), n._makeReadonly()
        }),
        e
      )
    })()
  var NH = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (e) {
            i(e)
          }
        }
        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function c(e) {
          var t
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t)
                  })).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
    yH = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1]
            return o[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this
          }),
        i
      )
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.')
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i
                    break
                  case 4:
                    return s.label++, { value: i[1], done: !1 }
                  case 5:
                    s.label++, (r = i[1]), (i = [0])
                    continue
                  case 7:
                    ;(i = s.ops.pop()), s.trys.pop()
                    continue
                  default:
                    if (
                      !((o = s.trys),
                      (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                    ) {
                      s = 0
                      continue
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1]
                      break
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      ;(s.label = o[1]), (o = i)
                      break
                    }
                    if (o && s.label < o[2]) {
                      ;(s.label = o[2]), s.ops.push(i)
                      break
                    }
                    o[2] && s.ops.pop(), s.trys.pop()
                    continue
                }
                i = t.call(e, s)
              } catch (e) {
                ;(i = [6, e]), (r = 0)
              } finally {
                n = o = 0
              }
            if (5 & i[0]) throw i[1]
            return { value: i[0] ? i[1] : void 0, done: !0 }
          })([i, a])
        }
      }
    },
    CH = (function () {
      function e(e, t) {
        ;(this.processors = e), (this.forceFlushTimeoutMillis = t)
      }
      return (
        (e.prototype.forceFlush = function () {
          return NH(this, void 0, void 0, function () {
            var e
            return yH(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = this.forceFlushTimeoutMillis),
                    [
                      4,
                      Promise.all(
                        this.processors.map(function (t) {
                          return tG(t.forceFlush(), e)
                        }),
                      ),
                    ]
                  )
                case 1:
                  return t.sent(), [2]
              }
            })
          })
        }),
        (e.prototype.onEmit = function (e, t) {
          this.processors.forEach(function (n) {
            return n.onEmit(e, t)
          })
        }),
        (e.prototype.shutdown = function () {
          return NH(this, void 0, void 0, function () {
            return yH(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    Promise.all(
                      this.processors.map(function (e) {
                        return e.shutdown()
                      }),
                    ),
                  ]
                case 1:
                  return e.sent(), [2]
              }
            })
          })
        }),
        e
      )
    })(),
    LH = (function () {
      function e() {}
      return (
        (e.prototype.forceFlush = function () {
          return Promise.resolve()
        }),
        (e.prototype.onEmit = function (e, t) {}),
        (e.prototype.shutdown = function () {
          return Promise.resolve()
        }),
        e
      )
    })(),
    bH = function (e, t, n) {
      ;(this.resource = e),
        (this.forceFlushTimeoutMillis = t),
        (this.logRecordLimits = n),
        (this.loggers = new Map()),
        (this.registeredLogRecordProcessors = []),
        (this.activeProcessor = new LH())
    }
  var MH,
    PH = (function () {
      function e(e) {
        void 0 === e && (e = {})
        var t = KV(
            {},
            {
              forceFlushTimeoutMillis: 3e4,
              logRecordLimits: {
                attributeValueLengthLimit: rV().OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: rV().OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT,
              },
              includeTraceContext: !0,
              mergeResourceWithDefaults: !0,
            },
            e,
          ),
          n = (function (e, t) {
            var n = null != t ? t : xG.empty()
            return e ? xG.default().merge(n) : n
          })(t.mergeResourceWithDefaults, e.resource)
        ;(this._sharedState = new bH(
          n,
          t.forceFlushTimeoutMillis,
          (function (e) {
            var t,
              n,
              r,
              o,
              i,
              s,
              a = oV()
            return {
              attributeCountLimit:
                null !==
                  (r =
                    null !==
                      (n =
                        null !== (t = e.attributeCountLimit) && void 0 !== t
                          ? t
                          : a.OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT) && void 0 !== n
                      ? n
                      : a.OTEL_ATTRIBUTE_COUNT_LIMIT) && void 0 !== r
                  ? r
                  : Qx,
              attributeValueLengthLimit:
                null !==
                  (s =
                    null !==
                      (i =
                        null !== (o = e.attributeValueLengthLimit) && void 0 !== o
                          ? o
                          : a.OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== i
                      ? i
                      : a.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== s
                  ? s
                  : qx,
            }
          })(t.logRecordLimits),
        )),
          (this._shutdownOnce = new cG(this._shutdown, this))
      }
      return (
        (e.prototype.getLogger = function (e, t, n) {
          if (this._shutdownOnce.isCalled)
            return Lt.warn('A shutdown LoggerProvider cannot provide a Logger'), tA
          e || Lt.warn('Logger requested without instrumentation scope name.')
          var r = e || 'unknown',
            o = r + '@' + (t || '') + ':' + ((null == n ? void 0 : n.schemaUrl) || '')
          return (
            this._sharedState.loggers.has(o) ||
              this._sharedState.loggers.set(
                o,
                new IH(
                  { name: r, version: t, schemaUrl: null == n ? void 0 : n.schemaUrl },
                  this._sharedState,
                ),
              ),
            this._sharedState.loggers.get(o)
          )
        }),
        (e.prototype.addLogRecordProcessor = function (e) {
          0 === this._sharedState.registeredLogRecordProcessors.length &&
            this._sharedState.activeProcessor.shutdown().catch(function (e) {
              return Lt.error('Error while trying to shutdown current log record processor', e)
            }),
            this._sharedState.registeredLogRecordProcessors.push(e),
            (this._sharedState.activeProcessor = new CH(
              this._sharedState.registeredLogRecordProcessors,
              this._sharedState.forceFlushTimeoutMillis,
            ))
        }),
        (e.prototype.forceFlush = function () {
          return this._shutdownOnce.isCalled
            ? (Lt.warn('invalid attempt to force flush after LoggerProvider shutdown'),
              this._shutdownOnce.promise)
            : this._sharedState.activeProcessor.forceFlush()
        }),
        (e.prototype.shutdown = function () {
          return this._shutdownOnce.isCalled
            ? (Lt.warn('shutdown may only be called once per LoggerProvider'),
              this._shutdownOnce.promise)
            : this._shutdownOnce.call()
        }),
        (e.prototype._shutdown = function () {
          return this._sharedState.activeProcessor.shutdown()
        }),
        e
      )
    })(),
    UH = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (e) {
            i(e)
          }
        }
        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function c(e) {
          var t
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t)
                  })).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
    DH = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1]
            return o[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this
          }),
        i
      )
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.')
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i
                    break
                  case 4:
                    return s.label++, { value: i[1], done: !1 }
                  case 5:
                    s.label++, (r = i[1]), (i = [0])
                    continue
                  case 7:
                    ;(i = s.ops.pop()), s.trys.pop()
                    continue
                  default:
                    if (
                      !((o = s.trys),
                      (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                    ) {
                      s = 0
                      continue
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1]
                      break
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      ;(s.label = o[1]), (o = i)
                      break
                    }
                    if (o && s.label < o[2]) {
                      ;(s.label = o[2]), s.ops.push(i)
                      break
                    }
                    o[2] && s.ops.pop(), s.trys.pop()
                    continue
                }
                i = t.call(e, s)
              } catch (e) {
                ;(i = [6, e]), (r = 0)
              } finally {
                n = o = 0
              }
            if (5 & i[0]) throw i[1]
            return { value: i[0] ? i[1] : void 0, done: !0 }
          })([i, a])
        }
      }
    },
    wH = (function () {
      function e(e, t) {
        var n, r, o, i
        ;(this._exporter = e), (this._finishedLogRecords = [])
        var s = rV()
        ;(this._maxExportBatchSize =
          null !== (n = null == t ? void 0 : t.maxExportBatchSize) && void 0 !== n
            ? n
            : s.OTEL_BLRP_MAX_EXPORT_BATCH_SIZE),
          (this._maxQueueSize =
            null !== (r = null == t ? void 0 : t.maxQueueSize) && void 0 !== r
              ? r
              : s.OTEL_BLRP_MAX_QUEUE_SIZE),
          (this._scheduledDelayMillis =
            null !== (o = null == t ? void 0 : t.scheduledDelayMillis) && void 0 !== o
              ? o
              : s.OTEL_BLRP_SCHEDULE_DELAY),
          (this._exportTimeoutMillis =
            null !== (i = null == t ? void 0 : t.exportTimeoutMillis) && void 0 !== i
              ? i
              : s.OTEL_BLRP_EXPORT_TIMEOUT),
          (this._shutdownOnce = new cG(this._shutdown, this)),
          this._maxExportBatchSize > this._maxQueueSize &&
            (Lt.warn(
              'BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize',
            ),
            (this._maxExportBatchSize = this._maxQueueSize))
      }
      return (
        (e.prototype.onEmit = function (e) {
          this._shutdownOnce.isCalled || this._addToBuffer(e)
        }),
        (e.prototype.forceFlush = function () {
          return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
        }),
        (e.prototype.shutdown = function () {
          return this._shutdownOnce.call()
        }),
        (e.prototype._shutdown = function () {
          return UH(this, void 0, void 0, function () {
            return DH(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.onShutdown(), [4, this._flushAll()]
                case 1:
                  return e.sent(), [4, this._exporter.shutdown()]
                case 2:
                  return e.sent(), [2]
              }
            })
          })
        }),
        (e.prototype._addToBuffer = function (e) {
          this._finishedLogRecords.length >= this._maxQueueSize ||
            (this._finishedLogRecords.push(e), this._maybeStartTimer())
        }),
        (e.prototype._flushAll = function () {
          var e = this
          return new Promise(function (t, n) {
            for (
              var r = [],
                o = Math.ceil(e._finishedLogRecords.length / e._maxExportBatchSize),
                i = 0;
              i < o;
              i++
            )
              r.push(e._flushOneBatch())
            Promise.all(r)
              .then(function () {
                t()
              })
              .catch(n)
          })
        }),
        (e.prototype._flushOneBatch = function () {
          var e = this
          return (
            this._clearTimer(),
            0 === this._finishedLogRecords.length
              ? Promise.resolve()
              : new Promise(function (t, n) {
                  tG(
                    e._export(e._finishedLogRecords.splice(0, e._maxExportBatchSize)),
                    e._exportTimeoutMillis,
                  )
                    .then(function () {
                      return t()
                    })
                    .catch(n)
                })
          )
        }),
        (e.prototype._maybeStartTimer = function () {
          var e = this
          void 0 === this._timer &&
            ((this._timer = setTimeout(function () {
              e._flushOneBatch()
                .then(function () {
                  e._finishedLogRecords.length > 0 && (e._clearTimer(), e._maybeStartTimer())
                })
                .catch(function (e) {
                  kx(e)
                })
            }, this._scheduledDelayMillis)),
            this._timer)
        }),
        (e.prototype._clearTimer = function () {
          void 0 !== this._timer && (clearTimeout(this._timer), (this._timer = void 0))
        }),
        (e.prototype._export = function (e) {
          var t = this,
            n = function () {
              return uG
                ._export(t._exporter, e)
                .then(function (e) {
                  var t
                  e.code !== uV.SUCCESS &&
                    kx(
                      null !== (t = e.error) && void 0 !== t
                        ? t
                        : new Error(
                            'BatchLogRecordProcessor: log record export failed (status ' + e + ')',
                          ),
                    )
                })
                .catch(kx)
            },
            r = e
              .map(function (e) {
                return e.resource
              })
              .filter(function (e) {
                return e.asyncAttributesPending
              })
          return 0 === r.length
            ? n()
            : Promise.all(
                r.map(function (e) {
                  var t
                  return null === (t = e.waitForAsyncAttributes) || void 0 === t
                    ? void 0
                    : t.call(e)
                }),
              ).then(n, kx)
        }),
        e
      )
    })(),
    xH = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    VH = (function (e) {
      function t(t, n) {
        var r = e.call(this, t, n) || this
        return r._onInit(n), r
      }
      return (
        xH(t, e),
        (t.prototype.onShutdown = function () {
          'undefined' != typeof document &&
            (this._visibilityChangeListener &&
              document.removeEventListener('visibilitychange', this._visibilityChangeListener),
            this._pageHideListener &&
              document.removeEventListener('pagehide', this._pageHideListener))
        }),
        (t.prototype._onInit = function (e) {
          var t = this
          !0 !== (null == e ? void 0 : e.disableAutoFlushOnDocumentHide) &&
            'undefined' != typeof document &&
            ((this._visibilityChangeListener = function () {
              'hidden' === document.visibilityState && t.forceFlush()
            }),
            (this._pageHideListener = function () {
              t.forceFlush()
            }),
            document.addEventListener('visibilitychange', this._visibilityChangeListener),
            document.addEventListener('pagehide', this._pageHideListener))
        }),
        t
      )
    })(wH)
  class GH extends PH {
    shutdown() {
      return new Promise((e) => {
        jt.disable(), Ct.disable(), qt.disable(), e()
      }).then(() => super.shutdown())
    }
  }
  !(function (e) {
    ;(e.DOCUMENT_LOAD = 'documentLoad'),
      (e.DOCUMENT_FETCH = 'documentFetch'),
      (e.RESOURCE_FETCH = 'resourceFetch')
  })(MH || (MH = {}))
  var BH
  !(function (e) {
    ;(e.FIRST_PAINT = 'firstPaint'), (e.FIRST_CONTENTFUL_PAINT = 'firstContentfulPaint')
  })(BH || (BH = {}))
  var kH = { 'first-paint': BH.FIRST_PAINT, 'first-contentful-paint': BH.FIRST_CONTENTFUL_PAINT },
    FH = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    HH = (function (e) {
      function t(t) {
        void 0 === t && (t = {})
        var n = e.call(this, '@opentelemetry/instrumentation-document-load', '0.44.1', t) || this
        return (n.component = 'document-load'), (n.version = '1'), (n.moduleName = n.component), n
      }
      return (
        FH(t, e),
        (t.prototype.init = function () {}),
        (t.prototype._onDocumentLoaded = function () {
          var e = this
          window.setTimeout(function () {
            e._collectPerformance()
          })
        }),
        (t.prototype._addResourcesSpans = function (e) {
          var t,
            n,
            r = this,
            o =
              null === (n = (t = cV).getEntriesByType) || void 0 === n
                ? void 0
                : n.call(t, 'resource')
          o &&
            o.forEach(function (t) {
              r._initResourceSpan(t, e)
            })
        }),
        (t.prototype._collectPerformance = function () {
          var e = this,
            t = Array.from(document.getElementsByTagName('meta')).find(function (e) {
              return e.getAttribute('name') === LV
            }),
            n = (function () {
              var e,
                t,
                n = {},
                r =
                  null === (t = (e = cV).getEntriesByType) || void 0 === t
                    ? void 0
                    : t.call(e, 'navigation')[0]
              if (r)
                Object.values(HG).forEach(function (e) {
                  if (nB(r, e)) {
                    var t = r[e]
                    'number' == typeof t && (n[e] = t)
                  }
                })
              else {
                var o = cV.timing
                o &&
                  Object.values(HG).forEach(function (e) {
                    if (nB(o, e)) {
                      var t = o[e]
                      'number' == typeof t && (n[e] = t)
                    }
                  })
              }
              return n
            })(),
            r = (t && t.content) || ''
          Ct.with(jt.extract(Ae, { traceparent: r }), function () {
            var t,
              r = e._startSpan(MH.DOCUMENT_LOAD, HG.FETCH_START, n)
            r &&
              (Ct.with(qt.setSpan(Ct.active(), r), function () {
                var t = e._startSpan(MH.DOCUMENT_FETCH, HG.FETCH_START, n)
                t &&
                  (t.setAttribute(yi, location.href),
                  Ct.with(qt.setSpan(Ct.active(), t), function () {
                    var r
                    e.getConfig().ignoreNetworkEvents || oB(t, n),
                      e._addCustomAttributesOnSpan(
                        t,
                        null === (r = e.getConfig().applyCustomAttributesOnSpan) || void 0 === r
                          ? void 0
                          : r.documentFetch,
                      ),
                      e._endSpan(t, HG.RESPONSE_END, n)
                  }))
              }),
              r.setAttribute(yi, location.href),
              r.setAttribute(Ui, navigator.userAgent),
              e._addResourcesSpans(r),
              e.getConfig().ignoreNetworkEvents ||
                (rB(r, HG.FETCH_START, n),
                rB(r, HG.UNLOAD_EVENT_START, n),
                rB(r, HG.UNLOAD_EVENT_END, n),
                rB(r, HG.DOM_INTERACTIVE, n),
                rB(r, HG.DOM_CONTENT_LOADED_EVENT_START, n),
                rB(r, HG.DOM_CONTENT_LOADED_EVENT_END, n),
                rB(r, HG.DOM_COMPLETE, n),
                rB(r, HG.LOAD_EVENT_START, n),
                rB(r, HG.LOAD_EVENT_END, n)),
              e.getConfig().ignorePerformancePaintEvents ||
                (function (e) {
                  var t,
                    n,
                    r =
                      null === (n = (t = cV).getEntriesByType) || void 0 === n
                        ? void 0
                        : n.call(t, 'paint')
                  r &&
                    r.forEach(function (t) {
                      var n = t.name,
                        r = t.startTime
                      nB(kH, n) && e.addEvent(kH[n], r)
                    })
                })(r),
              e._addCustomAttributesOnSpan(
                r,
                null === (t = e.getConfig().applyCustomAttributesOnSpan) || void 0 === t
                  ? void 0
                  : t.documentLoad,
              ),
              e._endSpan(r, HG.LOAD_EVENT_END, n))
          })
        }),
        (t.prototype._endSpan = function (e, t, n) {
          e && (nB(n, t) ? e.end(n[t]) : e.end())
        }),
        (t.prototype._initResourceSpan = function (e, t) {
          var n,
            r = this._startSpan(MH.RESOURCE_FETCH, HG.FETCH_START, e, t)
          r &&
            (r.setAttribute(yi, e.name),
            this.getConfig().ignoreNetworkEvents || oB(r, e),
            this._addCustomAttributesOnResourceSpan(
              r,
              e,
              null === (n = this.getConfig().applyCustomAttributesOnSpan) || void 0 === n
                ? void 0
                : n.resourceFetch,
            ),
            this._endSpan(r, HG.RESPONSE_END, e))
        }),
        (t.prototype._startSpan = function (e, t, n, r) {
          if (nB(n, t) && 'number' == typeof n[t])
            return this.tracer.startSpan(
              e,
              { startTime: n[t] },
              r ? qt.setSpan(Ct.active(), r) : void 0,
            )
        }),
        (t.prototype._waitForPageLoad = function () {
          'complete' === window.document.readyState
            ? this._onDocumentLoaded()
            : ((this._onDocumentLoaded = this._onDocumentLoaded.bind(this)),
              window.addEventListener('load', this._onDocumentLoaded))
        }),
        (t.prototype._addCustomAttributesOnSpan = function (e, t) {
          var n = this
          t &&
            NA(
              function () {
                return t(e)
              },
              function (e) {
                e && n._diag.error('addCustomAttributesOnSpan', e)
              },
              !0,
            )
        }),
        (t.prototype._addCustomAttributesOnResourceSpan = function (e, t, n) {
          var r = this
          n &&
            NA(
              function () {
                return n(e, t)
              },
              function (e) {
                e && r._diag.error('addCustomAttributesOnResourceSpan', e)
              },
              !0,
            )
        }),
        (t.prototype.enable = function () {
          window.removeEventListener('load', this._onDocumentLoaded), this._waitForPageLoad()
        }),
        (t.prototype.disable = function () {
          window.removeEventListener('load', this._onDocumentLoaded)
        }),
        t
      )
    })(RA)
  function YH(e, t) {
    if (e && e[1] && e[2]) {
      const n = e[1],
        r = e[2]
      t.setAttribute(hx.ATTR_IMQA_LINK_TRACE_ID, n), t.setAttribute(hx.ATTR_IMQA_LINK_SPAN_ID, r)
    }
  }
  const jH = new RegExp('traceparent;desc=[\'"]00-([0-9a-f]{32})-([0-9a-f]{16})-01[\'"]')
  function KH(e, t) {
    for (let n of e.split(',')) {
      n = n.trim()
      const e = n.match(jH)
      e && YH(e, t)
    }
  }
  const WH = new RegExp('00-([0-9a-f]{32})-([0-9a-f]{16})-01')
  const qH = ['beacon', 'fetch', 'xmlhttprequest']
  var QH = (function () {
      function e(e) {
        this._delegate = e
      }
      return (
        (e.prototype.export = function (e, t) {
          this._delegate.export(e, t)
        }),
        (e.prototype.forceFlush = function () {
          return this._delegate.forceFlush()
        }),
        (e.prototype.shutdown = function () {
          return this._delegate.shutdown()
        }),
        e
      )
    })(),
    zH = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    $H = (function (e) {
      function t(t, n, r) {
        var o = e.call(this, t) || this
        return (o.name = 'OTLPExporterError'), (o.data = r), (o.code = n), o
      }
      return zH(t, e), t
    })(Error)
  function XH(e) {
    if (!Number.isNaN(e) && Number.isFinite(e) && e > 0) return e
    throw new Error(
      "Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '" +
        e +
        "')",
    )
  }
  function JH(e) {
    if (null != e)
      return function () {
        return e
      }
  }
  var ZH = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (e) {
            i(e)
          }
        }
        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function c(e) {
          var t
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t)
                  })).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
    eY = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1]
            return o[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this
          }),
        i
      )
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.')
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i
                    break
                  case 4:
                    return s.label++, { value: i[1], done: !1 }
                  case 5:
                    s.label++, (r = i[1]), (i = [0])
                    continue
                  case 7:
                    ;(i = s.ops.pop()), s.trys.pop()
                    continue
                  default:
                    if (
                      !((o = s.trys),
                      (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                    ) {
                      s = 0
                      continue
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1]
                      break
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      ;(s.label = o[1]), (o = i)
                      break
                    }
                    if (o && s.label < o[2]) {
                      ;(s.label = o[2]), s.ops.push(i)
                      break
                    }
                    o[2] && s.ops.pop(), s.trys.pop()
                    continue
                }
                i = t.call(e, s)
              } catch (e) {
                ;(i = [6, e]), (r = 0)
              } finally {
                n = o = 0
              }
            if (5 & i[0]) throw i[1]
            return { value: i[0] ? i[1] : void 0, done: !0 }
          })([i, a])
        }
      }
    },
    tY = (function () {
      function e(e) {
        ;(this._sendingPromises = []), (this._concurrencyLimit = e)
      }
      return (
        (e.prototype.pushPromise = function (e) {
          var t = this
          if (this.hasReachedLimit()) throw new Error('Concurrency Limit reached')
          this._sendingPromises.push(e)
          var n = function () {
            var n = t._sendingPromises.indexOf(e)
            t._sendingPromises.splice(n, 1)
          }
          e.then(n, n)
        }),
        (e.prototype.hasReachedLimit = function () {
          return this._sendingPromises.length >= this._concurrencyLimit
        }),
        (e.prototype.awaitAll = function () {
          return ZH(this, void 0, void 0, function () {
            return eY(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, Promise.all(this._sendingPromises)]
                case 1:
                  return e.sent(), [2]
              }
            })
          })
        }),
        e
      )
    })()
  function nY(e) {
    return new tY(e.concurrencyLimit)
  }
  function rY() {
    return {
      handleResponse: function (e) {
        null != e &&
          (function (e) {
            return Object.prototype.hasOwnProperty.call(e, 'partialSuccess')
          })(e) &&
          null != e.partialSuccess &&
          0 !== Object.keys(e.partialSuccess).length &&
          Lt.warn('Received Partial Success response:', JSON.stringify(e.partialSuccess))
      },
    }
  }
  var oY = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (e) {
            i(e)
          }
        }
        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function c(e) {
          var t
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t)
                  })).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
    iY = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1]
            return o[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this
          }),
        i
      )
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.')
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i
                    break
                  case 4:
                    return s.label++, { value: i[1], done: !1 }
                  case 5:
                    s.label++, (r = i[1]), (i = [0])
                    continue
                  case 7:
                    ;(i = s.ops.pop()), s.trys.pop()
                    continue
                  default:
                    if (
                      !((o = s.trys),
                      (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                    ) {
                      s = 0
                      continue
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1]
                      break
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      ;(s.label = o[1]), (o = i)
                      break
                    }
                    if (o && s.label < o[2]) {
                      ;(s.label = o[2]), s.ops.push(i)
                      break
                    }
                    o[2] && s.ops.pop(), s.trys.pop()
                    continue
                }
                i = t.call(e, s)
              } catch (e) {
                ;(i = [6, e]), (r = 0)
              } finally {
                n = o = 0
              }
            if (5 & i[0]) throw i[1]
            return { value: i[0] ? i[1] : void 0, done: !0 }
          })([i, a])
        }
      }
    },
    sY = (function () {
      function e(e, t, n, r, o) {
        ;(this._transport = e),
          (this._serializer = t),
          (this._responseHandler = n),
          (this._promiseQueue = r),
          (this._timeout = o),
          (this._diagLogger = Lt.createComponentLogger({ namespace: 'OTLPExportDelegate' }))
      }
      return (
        (e.prototype.export = function (e, t) {
          var n = this
          if ((this._diagLogger.debug('items to be sent', e), this._promiseQueue.hasReachedLimit()))
            t({ code: uV.FAILED, error: new Error('Concurrent export limit reached') })
          else {
            var r = this._serializer.serializeRequest(e)
            null != r
              ? this._promiseQueue.pushPromise(
                  this._transport.send(r, this._timeout).then(
                    function (e) {
                      if ('success' !== e.status)
                        'failure' === e.status && e.error
                          ? t({ code: uV.FAILED, error: e.error })
                          : 'retryable' === e.status
                            ? t({
                                code: uV.FAILED,
                                error: new $H('Export failed with retryable status'),
                              })
                            : t({
                                code: uV.FAILED,
                                error: new $H('Export failed with unknown error'),
                              })
                      else {
                        if (null != e.data)
                          try {
                            n._responseHandler.handleResponse(
                              n._serializer.deserializeResponse(e.data),
                            )
                          } catch (t) {
                            n._diagLogger.warn(
                              'Export succeeded but could not deserialize response - is the response specification compliant?',
                              t,
                              e.data,
                            )
                          }
                        t({ code: uV.SUCCESS })
                      }
                    },
                    function (e) {
                      return t({ code: uV.FAILED, error: e })
                    },
                  ),
                )
              : t({ code: uV.FAILED, error: new Error('Nothing to send') })
          }
        }),
        (e.prototype.forceFlush = function () {
          return this._promiseQueue.awaitAll()
        }),
        (e.prototype.shutdown = function () {
          return oY(this, void 0, void 0, function () {
            return iY(this, function (e) {
              switch (e.label) {
                case 0:
                  return this._diagLogger.debug('shutdown started'), [4, this.forceFlush()]
                case 1:
                  return e.sent(), this._transport.shutdown(), [2]
              }
            })
          })
        }),
        e
      )
    })()
  function aY(e, t, n) {
    return (
      (r = { transport: n, serializer: t, promiseHandler: nY(e) }),
      (o = { timeout: e.timeoutMillis }),
      new sY(r.transport, r.serializer, rY(), r.promiseHandler, o.timeout)
    )
    var r, o
  }
  function cY(e) {
    var t = BigInt(1e9)
    return BigInt(e[0]) * t + BigInt(e[1])
  }
  function _Y(e) {
    var t,
      n = cY(e)
    return (
      (t = n),
      { low: Number(BigInt.asUintN(32, t)), high: Number(BigInt.asUintN(32, t >> BigInt(32))) }
    )
  }
  var uY =
    'undefined' != typeof BigInt
      ? function (e) {
          return cY(e).toString()
        }
      : fV
  function EY(e) {
    return e
  }
  function lY(e) {
    if (void 0 !== e) return sV(e)
  }
  var TY = { encodeHrTime: _Y, encodeSpanContext: sV, encodeOptionalSpanContext: lY }
  function pY(e) {
    var t, n
    if (void 0 === e) return TY
    var r = null === (t = e.useLongBits) || void 0 === t || t,
      o = null !== (n = e.useHex) && void 0 !== n && n
    return {
      encodeHrTime: r ? _Y : uY,
      encodeSpanContext: o ? EY : sV,
      encodeOptionalSpanContext: o ? EY : lY,
    }
  }
  var dY = function (e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!n) return e
    var r,
      o,
      i = n.call(e),
      s = []
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
    } catch (e) {
      o = { error: e }
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i)
      } finally {
        if (o) throw o.error
      }
    }
    return s
  }
  function SY(e) {
    return { attributes: AY(e.attributes), droppedAttributesCount: 0 }
  }
  function fY(e) {
    return { name: e.name, version: e.version }
  }
  function AY(e) {
    return Object.keys(e).map(function (t) {
      return hY(t, e[t])
    })
  }
  function hY(e, t) {
    return { key: e, value: mY(t) }
  }
  function mY(e) {
    var t = typeof e
    return 'string' === t
      ? { stringValue: e }
      : 'number' === t
        ? Number.isInteger(e)
          ? { intValue: e }
          : { doubleValue: e }
        : 'boolean' === t
          ? { boolValue: e }
          : e instanceof Uint8Array
            ? { bytesValue: e }
            : Array.isArray(e)
              ? { arrayValue: { values: e.map(mY) } }
              : 'object' === t && null != e
                ? {
                    kvlistValue: {
                      values: Object.entries(e).map(function (e) {
                        var t = dY(e, 2)
                        return hY(t[0], t[1])
                      }),
                    },
                  }
                : {}
  }
  var RY = function (e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0
      if (n) return n.call(e)
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          },
        }
      throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    },
    gY = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    }
  function OY(e, t) {
    var n = (function (e) {
      var t,
        n,
        r = new Map()
      try {
        for (var o = RY(e), i = o.next(); !i.done; i = o.next()) {
          var s = i.value,
            a = s.resource,
            c = s.instrumentationScope,
            _ = c.name,
            u = c.version,
            E = void 0 === u ? '' : u,
            l = c.schemaUrl,
            T = void 0 === l ? '' : l,
            p = r.get(a)
          p || ((p = new Map()), r.set(a, p))
          var d = _ + '@' + E + ':' + T,
            S = p.get(d)
          S || ((S = []), p.set(d, S)), S.push(s)
        }
      } catch (e) {
        t = { error: e }
      } finally {
        try {
          i && !i.done && (n = o.return) && n.call(o)
        } finally {
          if (t) throw t.error
        }
      }
      return r
    })(e)
    return Array.from(n, function (e) {
      var n = gY(e, 2),
        r = n[0],
        o = n[1]
      return {
        resource: SY(r),
        scopeLogs: Array.from(o, function (e) {
          var n = gY(e, 2)[1]
          return {
            scope: fY(n[0].instrumentationScope),
            logRecords: n.map(function (e) {
              return (function (e, t) {
                var n, r, o
                return {
                  timeUnixNano: t.encodeHrTime(e.hrTime),
                  observedTimeUnixNano: t.encodeHrTime(e.hrTimeObserved),
                  severityNumber: e.severityNumber,
                  severityText: e.severityText,
                  body: mY(e.body),
                  attributes: vY(e.attributes),
                  droppedAttributesCount: e.droppedAttributesCount,
                  flags: null === (n = e.spanContext) || void 0 === n ? void 0 : n.traceFlags,
                  traceId: t.encodeOptionalSpanContext(
                    null === (r = e.spanContext) || void 0 === r ? void 0 : r.traceId,
                  ),
                  spanId: t.encodeOptionalSpanContext(
                    null === (o = e.spanContext) || void 0 === o ? void 0 : o.spanId,
                  ),
                }
              })(e, t)
            }),
            schemaUrl: n[0].instrumentationScope.schemaUrl,
          }
        }),
        schemaUrl: void 0,
      }
    })
  }
  function vY(e) {
    return Object.keys(e).map(function (t) {
      return hY(t, e[t])
    })
  }
  var IY = function (e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0
      if (n) return n.call(e)
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          },
        }
      throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    },
    NY = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    }
  function yY(e, t) {
    var n,
      r = e.spanContext(),
      o = e.status
    return {
      traceId: t.encodeSpanContext(r.traceId),
      spanId: t.encodeSpanContext(r.spanId),
      parentSpanId: t.encodeOptionalSpanContext(e.parentSpanId),
      traceState: null === (n = r.traceState) || void 0 === n ? void 0 : n.serialize(),
      name: e.name,
      kind: null == e.kind ? 0 : e.kind + 1,
      startTimeUnixNano: t.encodeHrTime(e.startTime),
      endTimeUnixNano: t.encodeHrTime(e.endTime),
      attributes: AY(e.attributes),
      droppedAttributesCount: e.droppedAttributesCount,
      events: e.events.map(function (e) {
        return (function (e, t) {
          return {
            attributes: e.attributes ? AY(e.attributes) : [],
            name: e.name,
            timeUnixNano: t.encodeHrTime(e.time),
            droppedAttributesCount: e.droppedAttributesCount || 0,
          }
        })(e, t)
      }),
      droppedEventsCount: e.droppedEventsCount,
      status: { code: o.code, message: o.message },
      links: e.links.map(function (e) {
        return (function (e, t) {
          var n
          return {
            attributes: e.attributes ? AY(e.attributes) : [],
            spanId: t.encodeSpanContext(e.context.spanId),
            traceId: t.encodeSpanContext(e.context.traceId),
            traceState:
              null === (n = e.context.traceState) || void 0 === n ? void 0 : n.serialize(),
            droppedAttributesCount: e.droppedAttributesCount || 0,
          }
        })(e, t)
      }),
      droppedLinksCount: e.droppedLinksCount,
    }
  }
  function CY(e, t) {
    for (
      var n = (function (e) {
          var t,
            n,
            r = new Map()
          try {
            for (var o = IY(e), i = o.next(); !i.done; i = o.next()) {
              var s = i.value,
                a = r.get(s.resource)
              a || ((a = new Map()), r.set(s.resource, a))
              var c =
                  s.instrumentationLibrary.name +
                  '@' +
                  (s.instrumentationLibrary.version || '') +
                  ':' +
                  (s.instrumentationLibrary.schemaUrl || ''),
                _ = a.get(c)
              _ || ((_ = []), a.set(c, _)), _.push(s)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              i && !i.done && (n = o.return) && n.call(o)
            } finally {
              if (t) throw t.error
            }
          }
          return r
        })(e),
        r = [],
        o = n.entries(),
        i = o.next();
      !i.done;

    ) {
      for (var s = NY(i.value, 2), a = s[0], c = [], _ = s[1].values(), u = _.next(); !u.done; ) {
        var E = u.value
        if (E.length > 0) {
          var l = E.map(function (e) {
            return yY(e, t)
          })
          c.push({
            scope: fY(E[0].instrumentationLibrary),
            spans: l,
            schemaUrl: E[0].instrumentationLibrary.schemaUrl,
          })
        }
        u = _.next()
      }
      var T = { resource: SY(a), scopeSpans: c, schemaUrl: void 0 }
      r.push(T), (i = o.next())
    }
    return r
  }
  var LY = {
      serializeRequest: function (e) {
        var t = { resourceLogs: OY(e, pY({ useHex: !0, useLongBits: !1 })) }
        return new TextEncoder().encode(JSON.stringify(t))
      },
      deserializeResponse: function (e) {
        var t = new TextDecoder()
        return JSON.parse(t.decode(e))
      },
    },
    bY = {
      serializeRequest: function (e) {
        var t = { resourceSpans: CY(e, pY({ useHex: !0, useLongBits: !1 })) }
        return new TextEncoder().encode(JSON.stringify(t))
      },
      deserializeResponse: function (e) {
        var t = new TextDecoder()
        return JSON.parse(t.decode(e))
      },
    },
    MY = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (e) {
            i(e)
          }
        }
        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function c(e) {
          var t
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t)
                  })).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
    PY = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1]
            return o[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this
          }),
        i
      )
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.')
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i
                    break
                  case 4:
                    return s.label++, { value: i[1], done: !1 }
                  case 5:
                    s.label++, (r = i[1]), (i = [0])
                    continue
                  case 7:
                    ;(i = s.ops.pop()), s.trys.pop()
                    continue
                  default:
                    if (
                      !((o = s.trys),
                      (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                    ) {
                      s = 0
                      continue
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1]
                      break
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      ;(s.label = o[1]), (o = i)
                      break
                    }
                    if (o && s.label < o[2]) {
                      ;(s.label = o[2]), s.ops.push(i)
                      break
                    }
                    o[2] && s.ops.pop(), s.trys.pop()
                    continue
                }
                i = t.call(e, s)
              } catch (e) {
                ;(i = [6, e]), (r = 0)
              } finally {
                n = o = 0
              }
            if (5 & i[0]) throw i[1]
            return { value: i[0] ? i[1] : void 0, done: !0 }
          })([i, a])
        }
      }
    }
  var UY = (function () {
    function e(e) {
      this._transport = e
    }
    return (
      (e.prototype.retry = function (e, t, n) {
        var r = this
        return new Promise(function (o, i) {
          setTimeout(function () {
            r._transport.send(e, t).then(o, i)
          }, n)
        })
      }),
      (e.prototype.send = function (e, t) {
        var n
        return MY(this, void 0, void 0, function () {
          var r, o, i, s, a, c, _
          return PY(this, function (u) {
            switch (u.label) {
              case 0:
                return (r = Date.now() + t), [4, this._transport.send(e, t)]
              case 1:
                ;(o = u.sent()), (i = 5), (s = 1e3), (u.label = 2)
              case 2:
                return 'retryable' === o.status && i > 0
                  ? (i--,
                    (a = Math.max(Math.min(s, 5e3) + (0.4 * Math.random() - 0.2), 0)),
                    (s *= 1.5),
                    (c = null !== (n = o.retryInMillis) && void 0 !== n ? n : a),
                    (_ = r - Date.now()),
                    c > _ ? [2, o] : [4, this.retry(e, _, c)])
                  : [3, 4]
              case 3:
                return (o = u.sent()), [3, 2]
              case 4:
                return [2, o]
            }
          })
        })
      }),
      (e.prototype.shutdown = function () {
        return this._transport.shutdown()
      }),
      e
    )
  })()
  function DY(e) {
    return new UY(e.transport)
  }
  function wY(e) {
    if (null != e) {
      var t = Number.parseInt(e, 10)
      if (Number.isInteger(t)) return t > 0 ? 1e3 * t : -1
      var n = new Date(e).getTime() - Date.now()
      return n >= 0 ? n : 0
    }
  }
  var xY = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    VY = (function () {
      function e(e) {
        this._parameters = e
      }
      return (
        (e.prototype.send = function (e, t) {
          var n = this
          return new Promise(function (r) {
            var o = new XMLHttpRequest()
            ;(o.timeout = t), o.open('POST', n._parameters.url)
            var i = n._parameters.headers()
            Object.entries(i).forEach(function (e) {
              var t = xY(e, 2),
                n = t[0],
                r = t[1]
              o.setRequestHeader(n, r)
            }),
              (o.ontimeout = function (e) {
                r({ status: 'failure', error: new Error('XHR request timed out') })
              }),
              (o.onreadystatechange = function () {
                var e
                o.status >= 200 && o.status <= 299
                  ? (Lt.debug('XHR success'), r({ status: 'success' }))
                  : o.status && ((e = o.status), [429, 502, 503, 504].includes(e))
                    ? r({
                        status: 'retryable',
                        retryInMillis: wY(o.getResponseHeader('Retry-After')),
                      })
                    : 0 !== o.status &&
                      r({
                        status: 'failure',
                        error: new Error('XHR request failed with non-retryable status'),
                      })
              }),
              (o.onabort = function () {
                r({ status: 'failure', error: new Error('XHR request aborted') })
              }),
              (o.onerror = function () {
                r({ status: 'failure', error: new Error('XHR request errored') })
              }),
              o.send(e)
          })
        }),
        (e.prototype.shutdown = function () {}),
        e
      )
    })()
  var GY = (function () {
    function e(e) {
      this._params = e
    }
    return (
      (e.prototype.send = function (e) {
        var t = this
        return new Promise(function (n) {
          navigator.sendBeacon(t._params.url, new Blob([e], { type: t._params.blobType }))
            ? (Lt.debug('SendBeacon success'), n({ status: 'success' }))
            : n({ status: 'failure', error: new Error('SendBeacon failed') })
        })
      }),
      (e.prototype.shutdown = function () {}),
      e
    )
  })()
  var BY = function (e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!n) return e
    var r,
      o,
      i = n.call(e),
      s = []
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
    } catch (e) {
      o = { error: e }
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i)
      } finally {
        if (o) throw o.error
      }
    }
    return s
  }
  var kY = function () {
    return (
      (kY =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          return e
        }),
      kY.apply(this, arguments)
    )
  }
  function FY(e) {
    if (null != e)
      try {
        return new URL(e), e
      } catch (t) {
        throw new Error("Configuration: Could not parse user-provided export URL: '" + e + "'")
      }
  }
  function HY(e, t, n) {
    var r, o, i, s, a, c, _, u, E, l
    return kY(
      kY(
        {},
        (function (e, t, n) {
          var r, o, i, s, a, c
          return {
            timeoutMillis: XH(
              null !== (o = null !== (r = e.timeoutMillis) && void 0 !== r ? r : t.timeoutMillis) &&
                void 0 !== o
                ? o
                : n.timeoutMillis,
            ),
            concurrencyLimit:
              null !==
                (s = null !== (i = e.concurrencyLimit) && void 0 !== i ? i : t.concurrencyLimit) &&
              void 0 !== s
                ? s
                : n.concurrencyLimit,
            compression:
              null !== (c = null !== (a = e.compression) && void 0 !== a ? a : t.compression) &&
              void 0 !== c
                ? c
                : n.compression,
          }
        })(e, t, n),
      ),
      {
        headers:
          ((l = e.headers),
          (a = function () {
            var e,
              t = {}
            return (
              Object.entries(
                null !== (e = null == l ? void 0 : l()) && void 0 !== e ? e : {},
              ).forEach(function (e) {
                var n = BY(e, 2),
                  r = n[0],
                  o = n[1]
                void 0 !== o
                  ? (t[r] = String(o))
                  : Lt.warn('Header "' + r + '" has invalid value (' + o + ') and will be ignored')
              }),
              t
            )
          }),
          (c = t.headers),
          (_ = n.headers),
          (u = kY({}, _())),
          (E = {}),
          function () {
            return (
              null != c && Object.assign(E, c()),
              null != a && Object.assign(E, a()),
              Object.assign(E, u)
            )
          }),
        url:
          null !== (o = null !== (r = FY(e.url)) && void 0 !== r ? r : t.url) && void 0 !== o
            ? o
            : n.url,
        agentOptions:
          null !== (s = null !== (i = e.agentOptions) && void 0 !== i ? i : t.agentOptions) &&
          void 0 !== s
            ? s
            : n.agentOptions,
      },
    )
  }
  function YY(e, t, n) {
    return HY(
      {
        url: e.url,
        timeoutMillis: e.timeoutMillis,
        headers: JH(e.headers),
        concurrencyLimit: e.concurrencyLimit,
      },
      {},
      (function (e, t) {
        return kY(kY({}, { timeoutMillis: 1e4, concurrencyLimit: 30, compression: 'none' }), {
          headers: function () {
            return e
          },
          url: 'http://localhost:4318/' + t,
          agentOptions: { keepAlive: !0 },
        })
      })(n, t),
    )
  }
  function jY(e, t, n, r) {
    var o = !!e.headers || 'function' != typeof navigator.sendBeacon,
      i = YY(e, n, r)
    return o
      ? (function (e, t) {
          return aY(e, t, DY({ transport: ((n = e), new VY(n)) }))
          var n
        })(i, t)
      : (function (e, t) {
          return aY(
            e,
            t,
            DY({
              transport: ((n = { url: e.url, blobType: e.headers()['Content-Type'] }), new GY(n)),
            }),
          )
          var n
        })(i, t)
  }
  var KY = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    WY = (function (e) {
      function t(t) {
        return (
          void 0 === t && (t = {}),
          e.call(this, jY(t, bY, 'v1/traces', { 'Content-Type': 'application/json' })) || this
        )
      }
      return KY(t, e), t
    })(QH)
  function qY(e) {
    return e.byteLength || e.size || e.length || void 0
  }
  const QY = 'longtask',
    zY = 'browser-longtask'
  const $Y = 'messaging.socket.io.namespace',
    XY = 'messaging.socket.io.event_name'
  const JY = [
    'connect',
    'connect_error',
    'disconnect',
    'disconnecting',
    'newListener',
    'removeListener',
  ]
  class ZY extends NG {
    constructor(e, t) {
      super(e, t)
    }
    onInit(e) {
      !0 !== (null == e ? void 0 : e.disableAutoFlushOnDocumentHide) &&
        'undefined' != typeof document &&
        ((this._visibilityChangeListener = () => {
          'hidden' === document.visibilityState && this.forceFlush().catch((e) => kx(e))
        }),
        (this._pageHideListener = () => {
          this.forceFlush().catch((e) => kx(e))
        }),
        document.addEventListener('visibilitychange', this._visibilityChangeListener),
        document.addEventListener('pagehide', this._pageHideListener))
    }
  }
  var ej = t(function (e) {
      var t = typeof e
      return null != e && ('object' == t || 'function' == t)
    }),
    tj = 'object' == typeof e && e && e.Object === Object && e,
    nj = 'object' == typeof self && self && self.Object === Object && self,
    rj = (tj || nj || Function('return this')()).Symbol,
    oj = rj,
    ij = Object.prototype,
    sj = ij.hasOwnProperty,
    aj = ij.toString,
    cj = oj ? oj.toStringTag : void 0
  var _j = function (e) {
      var t = sj.call(e, cj),
        n = e[cj]
      try {
        e[cj] = void 0
        var r = !0
      } catch (e) {}
      var o = aj.call(e)
      return r && (t ? (e[cj] = n) : delete e[cj]), o
    },
    uj = Object.prototype.toString
  var Ej = _j,
    lj = function (e) {
      return uj.call(e)
    },
    Tj = rj ? rj.toStringTag : void 0
  var pj = function (e) {
    return null == e
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : Tj && Tj in Object(e)
        ? Ej(e)
        : lj(e)
  }
  var dj = function (e, t) {
      return function (n) {
        return e(t(n))
      }
    },
    Sj = dj(Object.getPrototypeOf, Object)
  var fj = function (e) {
      return null != e && 'object' == typeof e
    },
    Aj = pj,
    hj = Sj,
    mj = fj,
    Rj = Function.prototype,
    gj = Object.prototype,
    Oj = Rj.toString,
    vj = gj.hasOwnProperty,
    Ij = Oj.call(Object)
  var Nj = t(function (e) {
      if (!mj(e) || '[object Object]' != Aj(e)) return !1
      var t = hj(e)
      if (null === t) return !0
      var n = vj.call(t, 'constructor') && t.constructor
      return 'function' == typeof n && n instanceof n && Oj.call(n) == Ij
    }),
    yj = Array.isArray,
    Cj = pj,
    Lj = yj,
    bj = fj
  var Mj = t(function (e) {
    return 'string' == typeof e || (!Lj(e) && bj(e) && '[object String]' == Cj(e))
  })
  const Pj = 'console',
    Uj = Symbol('traceId'),
    Dj = Symbol('spanId')
  var wj
  !(function (e) {
    ;(e.COMPONENT = 'component'),
      (e.HTTP_ERROR_NAME = 'http.error_name'),
      (e.HTTP_STATUS_TEXT = 'http.status_text')
  })(wj || (wj = {}))
  var xj = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (e) {
            i(e)
          }
        }
        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function c(e) {
          var t
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t)
                  })).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
    Vj = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1]
            return o[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this
          }),
        i
      )
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.')
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i
                    break
                  case 4:
                    return s.label++, { value: i[1], done: !1 }
                  case 5:
                    s.label++, (r = i[1]), (i = [0])
                    continue
                  case 7:
                    ;(i = s.ops.pop()), s.trys.pop()
                    continue
                  default:
                    if (
                      !((o = s.trys),
                      (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                    ) {
                      s = 0
                      continue
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1]
                      break
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      ;(s.label = o[1]), (o = i)
                      break
                    }
                    if (o && s.label < o[2]) {
                      ;(s.label = o[2]), s.ops.push(i)
                      break
                    }
                    o[2] && s.ops.pop(), s.trys.pop()
                    continue
                }
                i = t.call(e, s)
              } catch (e) {
                ;(i = [6, e]), (r = 0)
              } finally {
                n = o = 0
              }
            if (5 & i[0]) throw i[1]
            return { value: i[0] ? i[1] : void 0, done: !0 }
          })([i, a])
        }
      }
    },
    Gj = function (e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0
      if (n) return n.call(e)
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          },
        }
      throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    },
    Bj = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    kj = Lt.createComponentLogger({
      namespace: '@opentelemetry/opentelemetry-instrumentation-fetch/utils',
    })
  function Fj() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    if (e[0] instanceof URL || 'string' == typeof e[0]) {
      var n = e[1]
      if (!(null == n ? void 0 : n.body)) return Promise.resolve()
      if (n.body instanceof ReadableStream) {
        var r = (function (e) {
            if (!e.pipeThrough)
              return (
                kj.warn('Platform has ReadableStream but not pipeThrough!'),
                { body: e, length: Promise.resolve(void 0) }
              )
            var t,
              n = 0,
              r = new Promise(function (e) {
                t = e
              }),
              o = new TransformStream({
                start: function () {},
                transform: function (e, t) {
                  return xj(this, void 0, void 0, function () {
                    var r
                    return Vj(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return [4, e]
                        case 1:
                          return (r = o.sent()), (n += r.byteLength), t.enqueue(e), [2]
                      }
                    })
                  })
                },
                flush: function () {
                  t(n)
                },
              })
            return { body: e.pipeThrough(o), length: r }
          })(n.body),
          o = r.body,
          i = r.length
        return (n.body = o), i
      }
      return Promise.resolve(
        (function (e) {
          if ('undefined' != typeof Document && e instanceof Document)
            return new XMLSerializer().serializeToString(document).length
          if (e instanceof Blob) return e.size
          if (void 0 !== e.byteLength) return e.byteLength
          if (e instanceof FormData)
            return (function (e) {
              var t,
                n,
                r = 0
              try {
                for (var o = Gj(e.entries()), i = o.next(); !i.done; i = o.next()) {
                  var s = Bj(i.value, 2),
                    a = s[0],
                    c = s[1]
                  ;(r += a.length), c instanceof Blob ? (r += c.size) : (r += c.length)
                }
              } catch (e) {
                t = { error: e }
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o)
                } finally {
                  if (t) throw t.error
                }
              }
              return r
            })(e)
          if (e instanceof URLSearchParams) return Yj(e.toString())
          if ('string' == typeof e) return Yj(e)
          return void kj.warn('unknown body type')
        })(n.body),
      )
    }
    var s = e[0]
    return (null == s ? void 0 : s.body)
      ? s
          .clone()
          .text()
          .then(function (e) {
            return Yj(e)
          })
      : Promise.resolve()
  }
  var Hj = new TextEncoder()
  function Yj(e) {
    return Hj.encode(e).byteLength
  }
  var jj,
    Kj,
    Wj = '0.57.2',
    qj = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    Qj = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    zj = function (e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; o < i; o++)
          (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
      return e.concat(r || Array.prototype.slice.call(t))
    },
    $j =
      'object' == typeof process &&
      'node' === (null === (jj = process.release) || void 0 === jj ? void 0 : jj.name),
    Xj = (function (e) {
      function t(t) {
        void 0 === t && (t = {})
        var n = e.call(this, '@opentelemetry/instrumentation-fetch', Wj, t) || this
        return (
          (n.component = 'fetch'),
          (n.version = Wj),
          (n.moduleName = n.component),
          (n._usedResources = new WeakSet()),
          (n._tasksCount = 0),
          n
        )
      }
      return (
        qj(t, e),
        (t.prototype.init = function () {}),
        (t.prototype._addChildSpan = function (e, t) {
          var n = this.tracer.startSpan(
            'CORS Preflight',
            { startTime: t[HG.FETCH_START] },
            qt.setSpan(Ct.active(), e),
          )
          oB(n, t, this.getConfig().ignoreNetworkEvents), n.end(t[HG.RESPONSE_END])
        }),
        (t.prototype._addFinalSpanAttributes = function (e, t) {
          var n = aB(t.url)
          e.setAttribute(Mi, t.status),
            null != t.statusText && e.setAttribute(wj.HTTP_STATUS_TEXT, t.statusText),
            e.setAttribute(Li, n.host),
            e.setAttribute(bi, n.protocol.replace(':', '')),
            'undefined' != typeof navigator && e.setAttribute(Ui, navigator.userAgent)
        }),
        (t.prototype._addHeaders = function (e, t) {
          if (!_B(t, this.getConfig().propagateTraceHeaderCorsUrls)) {
            var n = {}
            return (
              jt.inject(Ct.active(), n),
              void (
                Object.keys(n).length > 0 &&
                this._diag.debug('headers inject skipped due to CORS policy')
              )
            )
          }
          if (e instanceof Request)
            jt.inject(Ct.active(), e.headers, {
              set: function (e, t, n) {
                return e.set(t, 'string' == typeof n ? n : String(n))
              },
            })
          else if (e.headers instanceof Headers)
            jt.inject(Ct.active(), e.headers, {
              set: function (e, t, n) {
                return e.set(t, 'string' == typeof n ? n : String(n))
              },
            })
          else if (e.headers instanceof Map)
            jt.inject(Ct.active(), e.headers, {
              set: function (e, t, n) {
                return e.set(t, 'string' == typeof n ? n : String(n))
              },
            })
          else {
            n = {}
            jt.inject(Ct.active(), n), (e.headers = Object.assign({}, n, e.headers || {}))
          }
        }),
        (t.prototype._clearResources = function () {
          0 === this._tasksCount &&
            this.getConfig().clearTimingResources &&
            (performance.clearResourceTimings(), (this._usedResources = new WeakSet()))
        }),
        (t.prototype._createSpan = function (e, t) {
          var n
          if ((void 0 === t && (t = {}), !oG(e, this.getConfig().ignoreUrls))) {
            var r = (t.method || 'GET').toUpperCase(),
              o = 'HTTP ' + r
            return this.tracer.startSpan(o, {
              kind: ft.CLIENT,
              attributes:
                ((n = {}), (n[wj.COMPONENT] = this.moduleName), (n[Ni] = r), (n[yi] = e), n),
            })
          }
          this._diag.debug('ignoring span as url matches ignored url')
        }),
        (t.prototype._findResourceAndAddNetworkEvents = function (e, t, n) {
          var r = t.entries
          if (!r.length) {
            if (!performance.getEntriesByType) return
            r = performance.getEntriesByType('resource')
          }
          var o = sB(t.spanUrl, t.startTime, n, r, this._usedResources, 'fetch')
          if (o.mainRequest) {
            var i = o.mainRequest
            this._markResourceAsUsed(i)
            var s = o.corsPreFlightRequest
            s && (this._addChildSpan(e, s), this._markResourceAsUsed(s)),
              oB(e, i, this.getConfig().ignoreNetworkEvents)
          }
        }),
        (t.prototype._markResourceAsUsed = function (e) {
          this._usedResources.add(e)
        }),
        (t.prototype._endSpan = function (e, t, n) {
          var r = this,
            o = TV(Date.now()),
            i = dV()
          this._addFinalSpanAttributes(e, n),
            setTimeout(function () {
              var n
              null === (n = t.observer) || void 0 === n || n.disconnect(),
                r._findResourceAndAddNetworkEvents(e, t, i),
                r._tasksCount--,
                r._clearResources(),
                e.end(o)
            }, 300)
        }),
        (t.prototype._patchConstructor = function () {
          var e = this
          return function (t) {
            var n = e
            return function () {
              for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
              var o = this,
                i = aB(e[0] instanceof Request ? e[0].url : String(e[0])).href,
                s = e[0] instanceof Request ? e[0] : e[1] || {},
                a = n._createSpan(i, s)
              if (!a) return t.apply(this, e)
              var c = n._prepareSpanData(i)
              function _(e, t) {
                n._applyAttributesAfterFetch(e, s, t),
                  n._endSpan(e, c, { status: t.status || 0, statusText: t.message, url: i })
              }
              function u(e, t) {
                n._applyAttributesAfterFetch(e, s, t),
                  t.status >= 200 && t.status < 400
                    ? n._endSpan(e, c, t)
                    : n._endSpan(e, c, { status: t.status, statusText: t.statusText, url: i })
              }
              function E(e, t, n) {
                try {
                  var r = n.clone(),
                    o = n.clone(),
                    i = r.body
                  if (i) {
                    var s = i.getReader(),
                      a = function () {
                        s.read().then(
                          function (t) {
                            t.done ? u(e, o) : a()
                          },
                          function (t) {
                            _(e, t)
                          },
                        )
                      }
                    a()
                  } else u(e, n)
                } finally {
                  t(n)
                }
              }
              function l(e, t, n) {
                try {
                  _(e, n)
                } finally {
                  t(n)
                }
              }
              return (
                n.getConfig().measureRequestSize &&
                  Fj.apply(void 0, zj([], Qj(e), !1))
                    .then(function (e) {
                      e && a.setAttribute(wi, e)
                    })
                    .catch(function (e) {
                      n._diag.warn('getFetchBodyLength', e)
                    }),
                new Promise(function (e, r) {
                  return Ct.with(qt.setSpan(Ct.active(), a), function () {
                    return (
                      n._addHeaders(s, i),
                      n._tasksCount++,
                      t
                        .apply(o, s instanceof Request ? [s] : [i, s])
                        .then(E.bind(o, a, e), l.bind(o, a, r))
                    )
                  })
                })
              )
            }
          }
        }),
        (t.prototype._applyAttributesAfterFetch = function (e, t, n) {
          var r = this,
            o = this.getConfig().applyCustomAttributesOnSpan
          o &&
            NA(
              function () {
                return o(e, t, n)
              },
              function (e) {
                e && r._diag.error('applyCustomAttributesOnSpan', e)
              },
              !0,
            )
        }),
        (t.prototype._prepareSpanData = function (e) {
          var t = dV(),
            n = []
          if ('function' != typeof PerformanceObserver)
            return { entries: n, startTime: t, spanUrl: e }
          var r = new PerformanceObserver(function (t) {
            t.getEntries().forEach(function (t) {
              'fetch' === t.initiatorType && t.name === e && n.push(t)
            })
          })
          return (
            r.observe({ entryTypes: ['resource'] }),
            { entries: n, observer: r, startTime: t, spanUrl: e }
          )
        }),
        (t.prototype.enable = function () {
          $j
            ? this._diag.warn(
                "this instrumentation is intended for web usage only, it does not instrument Node.js's fetch()",
              )
            : (yA(fetch) &&
                (this._unwrap(nV, 'fetch'),
                this._diag.debug('removing previous patch for constructor')),
              this._wrap(nV, 'fetch', this._patchConstructor()))
        }),
        (t.prototype.disable = function () {
          $j || (this._unwrap(nV, 'fetch'), (this._usedResources = new WeakSet()))
        }),
        t
      )
    })(RA)
  !(function (e) {
    ;(e.METHOD_OPEN = 'open'),
      (e.METHOD_SEND = 'send'),
      (e.EVENT_ABORT = 'abort'),
      (e.EVENT_ERROR = 'error'),
      (e.EVENT_LOAD = 'loaded'),
      (e.EVENT_TIMEOUT = 'timeout')
  })(Kj || (Kj = {}))
  var Jj = function (e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0
      if (n) return n.call(e)
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          },
        }
      throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    },
    Zj = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        s = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    },
    eK = Lt.createComponentLogger({
      namespace: '@opentelemetry/opentelemetry-instrumentation-xml-http-request/utils',
    })
  function tK(e) {
    return 'undefined' != typeof Document && e instanceof Document
      ? new XMLSerializer().serializeToString(document).length
      : e instanceof Blob
        ? e.size
        : void 0 !== e.byteLength
          ? e.byteLength
          : e instanceof FormData
            ? (function (e) {
                var t,
                  n,
                  r = 0
                try {
                  for (var o = Jj(e.entries()), i = o.next(); !i.done; i = o.next()) {
                    var s = Zj(i.value, 2),
                      a = s[0],
                      c = s[1]
                    ;(r += a.length), c instanceof Blob ? (r += c.size) : (r += c.length)
                  }
                } catch (e) {
                  t = { error: e }
                } finally {
                  try {
                    i && !i.done && (n = o.return) && n.call(o)
                  } finally {
                    if (t) throw t.error
                  }
                }
                return r
              })(e)
            : e instanceof URLSearchParams
              ? rK(e.toString())
              : 'string' == typeof e
                ? rK(e)
                : void eK.warn('unknown body type')
  }
  var nK = new TextEncoder()
  function rK(e) {
    return nK.encode(e).byteLength
  }
  var oK,
    iK = '0.57.2'
  !(function (e) {
    e.HTTP_STATUS_TEXT = 'http.status_text'
  })(oK || (oK = {}))
  var sK = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    aK = (function (e) {
      function t(t) {
        void 0 === t && (t = {})
        var n = e.call(this, '@opentelemetry/instrumentation-xml-http-request', iK, t) || this
        return (
          (n.component = 'xml-http-request'),
          (n.version = iK),
          (n.moduleName = n.component),
          (n._tasksCount = 0),
          (n._xhrMem = new WeakMap()),
          (n._usedResources = new WeakSet()),
          n
        )
      }
      return (
        sK(t, e),
        (t.prototype.init = function () {}),
        (t.prototype._addHeaders = function (e, t) {
          if (!_B(aB(t).href, this.getConfig().propagateTraceHeaderCorsUrls)) {
            var n = {}
            return (
              jt.inject(Ct.active(), n),
              void (
                Object.keys(n).length > 0 &&
                this._diag.debug('headers inject skipped due to CORS policy')
              )
            )
          }
          var r = {}
          jt.inject(Ct.active(), r),
            Object.keys(r).forEach(function (t) {
              e.setRequestHeader(t, String(r[t]))
            })
        }),
        (t.prototype._addChildSpan = function (e, t) {
          var n = this
          Ct.with(qt.setSpan(Ct.active(), e), function () {
            var e = n.tracer.startSpan('CORS Preflight', { startTime: t[HG.FETCH_START] })
            oB(e, t, n.getConfig().ignoreNetworkEvents), e.end(t[HG.RESPONSE_END])
          })
        }),
        (t.prototype._addFinalSpanAttributes = function (e, t, n) {
          if ('string' == typeof n) {
            var r = aB(n)
            void 0 !== t.status && e.setAttribute(Mi, t.status),
              void 0 !== t.statusText && e.setAttribute(oK.HTTP_STATUS_TEXT, t.statusText),
              e.setAttribute(Li, r.host),
              e.setAttribute(bi, r.protocol.replace(':', '')),
              e.setAttribute(Ui, navigator.userAgent)
          }
        }),
        (t.prototype._applyAttributesAfterXHR = function (e, t) {
          var n = this,
            r = this.getConfig().applyCustomAttributesOnSpan
          'function' == typeof r &&
            NA(
              function () {
                return r(e, t)
              },
              function (e) {
                e && n._diag.error('applyCustomAttributesOnSpan', e)
              },
              !0,
            )
        }),
        (t.prototype._addResourceObserver = function (e, t) {
          var n = this._xhrMem.get(e)
          n &&
            'function' == typeof PerformanceObserver &&
            'function' == typeof PerformanceResourceTiming &&
            ((n.createdResources = {
              observer: new PerformanceObserver(function (e) {
                var r = e.getEntries(),
                  o = aB(t)
                r.forEach(function (e) {
                  'xmlhttprequest' === e.initiatorType &&
                    e.name === o.href &&
                    n.createdResources &&
                    n.createdResources.entries.push(e)
                })
              }),
              entries: [],
            }),
            n.createdResources.observer.observe({ entryTypes: ['resource'] }))
        }),
        (t.prototype._clearResources = function () {
          0 === this._tasksCount &&
            this.getConfig().clearTimingResources &&
            (cV.clearResourceTimings(),
            (this._xhrMem = new WeakMap()),
            (this._usedResources = new WeakSet()))
        }),
        (t.prototype._findResourceAndAddNetworkEvents = function (e, t, n, r, o) {
          if (n && r && o && e.createdResources) {
            var i = e.createdResources.entries
            ;(i && i.length) || (i = cV.getEntriesByType('resource'))
            var s = sB(aB(n).href, r, o, i, this._usedResources)
            if (s.mainRequest) {
              var a = s.mainRequest
              this._markResourceAsUsed(a)
              var c = s.corsPreFlightRequest
              c && (this._addChildSpan(t, c), this._markResourceAsUsed(c)),
                oB(t, a, this.getConfig().ignoreNetworkEvents)
            }
          }
        }),
        (t.prototype._cleanPreviousSpanInformation = function (e) {
          var t = this._xhrMem.get(e)
          if (t) {
            var n = t.callbackToRemoveEvents
            n && n(), this._xhrMem.delete(e)
          }
        }),
        (t.prototype._createSpan = function (e, t, n) {
          var r
          if (!oG(t, this.getConfig().ignoreUrls)) {
            var o = n.toUpperCase(),
              i = this.tracer.startSpan(o, {
                kind: ft.CLIENT,
                attributes: ((r = {}), (r[Ni] = n), (r[yi] = aB(t).toString()), r),
              })
            return (
              i.addEvent(Kj.METHOD_OPEN),
              this._cleanPreviousSpanInformation(e),
              this._xhrMem.set(e, { span: i, spanUrl: t }),
              i
            )
          }
          this._diag.debug('ignoring span as url matches ignored url')
        }),
        (t.prototype._markResourceAsUsed = function (e) {
          this._usedResources.add(e)
        }),
        (t.prototype._patchOpen = function () {
          var e = this
          return function (t) {
            var n = e
            return function () {
              for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
              var o = e[0],
                i = e[1]
              return n._createSpan(this, i, o), t.apply(this, e)
            }
          }
        }),
        (t.prototype._patchSend = function () {
          var e = this
          function t(t, n) {
            var r = e._xhrMem.get(n)
            if (r) {
              ;(r.status = n.status),
                (r.statusText = n.statusText),
                e._xhrMem.delete(n),
                r.span && e._applyAttributesAfterXHR(r.span, n)
              var o = dV(),
                i = Date.now()
              setTimeout(function () {
                !(function (t, n, r, o) {
                  var i = n.callbackToRemoveEvents
                  'function' == typeof i && i()
                  var s = n.span,
                    a = n.spanUrl,
                    c = n.sendStartTime
                  s &&
                    (e._findResourceAndAddNetworkEvents(n, s, a, c, r),
                    s.addEvent(t, o),
                    e._addFinalSpanAttributes(s, n, a),
                    s.end(o),
                    e._tasksCount--),
                    e._clearResources()
                })(t, r, o, i)
              }, 300)
            }
          }
          function n() {
            t(Kj.EVENT_ERROR, this)
          }
          function r() {
            t(Kj.EVENT_ABORT, this)
          }
          function o() {
            t(Kj.EVENT_TIMEOUT, this)
          }
          function i() {
            this.status < 299 ? t(Kj.EVENT_LOAD, this) : t(Kj.EVENT_ERROR, this)
          }
          return function (t) {
            return function () {
              for (var s = this, a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c]
              var _ = e._xhrMem.get(this)
              if (!_) return t.apply(this, a)
              var u = _.span,
                E = _.spanUrl
              if (u && E) {
                if (e.getConfig().measureRequestSize && (null == a ? void 0 : a[0])) {
                  var l = tK(a[0])
                  void 0 !== l && u.setAttribute(wi, l)
                }
                Ct.with(qt.setSpan(Ct.active(), u), function () {
                  e._tasksCount++,
                    (_.sendStartTime = dV()),
                    u.addEvent(Kj.METHOD_SEND),
                    s.addEventListener('abort', r),
                    s.addEventListener('error', n),
                    s.addEventListener('load', i),
                    s.addEventListener('timeout', o),
                    (_.callbackToRemoveEvents = function () {
                      !(function (t) {
                        t.removeEventListener('abort', r),
                          t.removeEventListener('error', n),
                          t.removeEventListener('load', i),
                          t.removeEventListener('timeout', o)
                        var s = e._xhrMem.get(t)
                        s && (s.callbackToRemoveEvents = void 0)
                      })(s),
                        _.createdResources && _.createdResources.observer.disconnect()
                    }),
                    e._addHeaders(s, E),
                    e._addResourceObserver(s, E)
                })
              }
              return t.apply(this, a)
            }
          }
        }),
        (t.prototype.enable = function () {
          this._diag.debug('applying patch to', this.moduleName, this.version),
            yA(XMLHttpRequest.prototype.open) &&
              (this._unwrap(XMLHttpRequest.prototype, 'open'),
              this._diag.debug('removing previous patch from method open')),
            yA(XMLHttpRequest.prototype.send) &&
              (this._unwrap(XMLHttpRequest.prototype, 'send'),
              this._diag.debug('removing previous patch from method send')),
            this._wrap(XMLHttpRequest.prototype, 'open', this._patchOpen()),
            this._wrap(XMLHttpRequest.prototype, 'send', this._patchSend())
        }),
        (t.prototype.disable = function () {
          this._diag.debug('removing patch from', this.moduleName, this.version),
            this._unwrap(XMLHttpRequest.prototype, 'open'),
            this._unwrap(XMLHttpRequest.prototype, 'send'),
            (this._tasksCount = 0),
            (this._xhrMem = new WeakMap()),
            (this._usedResources = new WeakSet())
        }),
        t
      )
    })(RA)
  var cK = (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
      }
    })(),
    _K = (function (e) {
      function t(t) {
        return (
          void 0 === t && (t = {}),
          e.call(this, jY(t, LY, 'v1/logs', { 'Content-Type': 'application/json' })) || this
        )
      }
      return cK(t, e), t
    })(QH)
  const uK = {
      serviceName: 'unknown-browser-service',
      serviceVersion: 'unknown-browser-version',
      serviceKey: 'unknown-browser-key',
      collectorUrl: void 0,
      bufferTimeout: 4e3,
      bufferSize: 50,
      instrumentations: {},
      spanExporter: { factory: (e) => new WY({ url: e.url }) },
      logExporter: { factory: (e) => new _K({ url: e.url }) },
      spanProcessor: { factory: (e, t) => new ZY(e, t) },
      logProcessor: { factory: (e, t) => new VH(e, t) },
    },
    EK = [
      {
        Instrument: class extends HH {
          constructor(e = {}) {
            super(e)
            const t = this,
              n = t._endSpan.bind(this)
            t._endSpan = (e, t, r) => {
              var o
              const i = e
              if (
                (e &&
                  (e.setAttribute(hx.ATTR_IMQA_RUM_COMPONENT, this.component),
                  e.setAttribute(hx.ATTR_IMQA_SPAN_TYPE, 'document-load'),
                  dB(e)),
                e && 'documentLoad' !== i.name)
              ) {
                if ('documentFetch' === i.name && !r.serverTiming && performance.getEntriesByType) {
                  const e = performance.getEntriesByType('navigation')
                  ;(null === (o = e[0]) || void 0 === o ? void 0 : o.serverTiming) &&
                    (r.serverTiming = e[0].serverTiming)
                }
                !(function (e, t) {
                  if (e.serverTiming)
                    for (const n of e.serverTiming)
                      if ('traceparent' === n.name && n.description) {
                        const e = n.description.match(WH)
                        e && YH(e, t)
                      }
                })(r, e),
                  e.setAttribute(rS, 'GET')
              }
              return (
                e &&
                  'documentLoad' === i.name &&
                  (function (e) {
                    document.referrer &&
                      '' !== document.referrer &&
                      e.setAttribute(hx.ATTR_IMQA_DOCUMENT_REFERRER, document.referrer),
                      window.screen &&
                        e.setAttribute(
                          hx.ATTR_IMQA_DOCUMENT_SCREEN_XY,
                          window.screen.width + 'x' + window.screen.height,
                        )
                  })(e),
                n(e, t, r)
              )
            }
            const r = t._initResourceSpan.bind(this)
            t._initResourceSpan = (t, n) => {
              ;-1 !== qH.indexOf(t.initiatorType) || oG(t.name, e.ignoreUrls) || r(t, n)
            }
          }
        },
        confKey: 'document',
        disable: !1,
      },
      {
        Instrument: class extends aK {
          constructor(e = {}) {
            super(e)
            const t = this._createSpan.bind(this)
            this._createSpan = (n, r, o) => {
              var i
              const s = t(n, r, o)
              return (
                s &&
                  ((null === (i = e.advancedNetworkCapture) || void 0 === i ? void 0 : i.call(e)) &&
                    n.addEventListener('readystatechange', function () {
                      if (n.readyState === n.OPENED)
                        fA.wrap(
                          n,
                          'setRequestHeader',
                          (e) =>
                            function (t, n) {
                              return OB('request', [t])(s, () => n), e.apply(this, arguments)
                            },
                        ),
                          fA.wrap(
                            n,
                            'send',
                            (e) =>
                              function (t) {
                                return (
                                  t && s.setAttribute('http.request.body', t.toString()),
                                  e.apply(this, arguments)
                                )
                              },
                          )
                      else if (n.readyState === n.DONE) {
                        const e = n
                          .getAllResponseHeaders()
                          .split('\r\n')
                          .reduce((e, t) => {
                            const [n, r] = t.split(': ')
                            return n && r && (e[n] = r), e
                          }, {})
                        OB('response', Object.keys(e))(s, (t) => e[t])
                        try {
                          s.setAttribute(hx.ATTR_IMQA_HTTP_REQUEST_BODY, n.responseText)
                        } catch (e) {}
                        fA.unwrap(n, 'setRequestHeader'), fA.unwrap(n, 'send')
                      }
                    }),
                  n.addEventListener('readystatechange', function () {
                    if (n.readyState === n.HEADERS_RECEIVED) {
                      if (-1 !== n.getAllResponseHeaders().toLowerCase().indexOf('server-timing')) {
                        const e = n.getResponseHeader('server-timing')
                        null !== e && KH(e, s)
                      }
                    }
                  }),
                  dB(s),
                  s.setAttribute(hx.ATTR_IMQA_RUM_COMPONENT, this.moduleName),
                  s.setAttribute(hx.ATTR_IMQA_SPAN_TYPE, 'xhr'),
                  s.updateName(`HTTP ${o.toUpperCase()}`)),
                s
              )
            }
            const n = this._addResourceObserver.bind(this)
            this._addResourceObserver = (e, t) => {
              'function' == typeof PerformanceObserver &&
                'function' == typeof PerformanceResourceTiming &&
                n(e, t)
            }
          }
        },
        confKey: 'xhr',
        disable: !1,
      },
      {
        Instrument: class extends pB {
          constructor(e = {}) {
            if (!e.eventNames) {
              const t = Object.assign({}, SB, e.events),
                n = Object.entries(t)
                  .filter(([, e]) => e)
                  .map(([e]) => e)
              e.eventNames = n
            }
            super(e), (this._routingTracer = qt.getTracer(AB, '1'))
            const t = this._createSpan.bind(this)
            this._createSpan = (e, n, r) => {
              e === document && (e = document.documentElement)
              const o = t(e, n, r)
              return (
                o &&
                  (o.setAttribute(hx.ATTR_IMQA_RUM_COMPONENT, this.moduleName),
                  o.setAttribute(hx.ATTR_IMQA_SPAN_TYPE, this.moduleName),
                  dB(o)),
                o
              )
            }
            const n = this._patchAddEventListener.bind(this)
            this._patchAddEventListener = () => {
              const e = n()
              return (t) => {
                const n = e(t)
                return function (e, r, o) {
                  return (function (e) {
                    return (
                      e &&
                      ('function' == typeof e ||
                        ('object' == typeof e && 'function' == typeof e.handleEvent))
                    )
                  })(r)
                    ? (null === o && (o = void 0), n.call(this, e, r, o))
                    : t.call(this, e, r, o)
                }
              }
            }
          }
          setTracerProvider(e) {
            super.setTracerProvider(e), (this._routingTracer = e.getTracer(AB, '1'))
          }
          getZoneWithPrototype() {}
          enable() {
            ;(this.__hashChangeHandler = (e) => {
              this._emitRouteChangeSpan(e.oldURL)
            }),
              window.addEventListener('hashchange', this.__hashChangeHandler),
              super.enable()
          }
          disable() {
            super.disable(), window.removeEventListener('hashchange', this.__hashChangeHandler)
          }
          _patchHistoryMethod() {
            const e = this
            return (t) =>
              function (...n) {
                const r = location.href,
                  o = t.apply(this, n)
                return r !== location.href && e._emitRouteChangeSpan(r), o
              }
          }
          _emitRouteChangeSpan(e) {
            const t = Date.now(),
              n = this._routingTracer.startSpan('routeChange', { startTime: t })
            n.setAttribute(hx.ATTR_IMQA_RUM_COMPONENT, this.moduleName),
              n.setAttribute(hx.ATTR_IMQA_SPAN_TYPE, 'user-interaction'),
              n.setAttribute(hx.ATTR_IMQA_USER_INTERACTION_PREV_HREF, e),
              dB(n),
              n.end(t)
          }
        },
        confKey: 'interactions',
        disable: !1,
      },
      { Instrument: Ik, confKey: 'postload', disable: !1 },
      {
        Instrument: class extends Xj {
          constructor(e = {}) {
            const t = e.applyCustomAttributesOnSpan
            ;(e.applyCustomAttributesOnSpan = function (n, r, o) {
              var i
              if (
                (n.updateName(`HTTP ${(r.method || 'GET').toUpperCase()}`),
                n.setAttribute(hx.ATTR_IMQA_RUM_COMPONENT, 'fetch'),
                n.setAttribute(hx.ATTR_IMQA_SPAN_TYPE, 'fetch'),
                dB(n),
                (null === (i = e.advancedNetworkCapture) || void 0 === i ? void 0 : i.call(e)) &&
                  n &&
                  (r.headers &&
                    OB('request', Object.keys(r.headers))(n, (e) => {
                      var t
                      return null === (t = r.headers) || void 0 === t ? void 0 : t[e]
                    }),
                  r.body &&
                    (r.body instanceof ReadableStream
                      ? n.setAttribute(hx.ATTR_IMQA_HTTP_REQUEST_BODY, '[ReadableStream]')
                      : n.setAttribute(hx.ATTR_IMQA_HTTP_REQUEST_BODY, r.body.toString())),
                  o instanceof Response))
              ) {
                if (o.headers) {
                  const e = []
                  o.headers.forEach((t, n) => {
                    e.push(n)
                  }),
                    OB('response', e)(n, (e) => {
                      var t
                      return null !== (t = o.headers.get(e)) && void 0 !== t ? t : ''
                    })
                }
                o.clone()
                  .text()
                  .then((e) => {
                    n.setAttribute(hx.ATTR_IMQA_HTTP_REQUEST_BODY, e)
                  })
                  .catch(() => {})
              }
              if (n && o instanceof Response && o.headers) {
                const e = o.headers.get('Server-Timing')
                e && KH(e, n)
              }
              t && t(n, r, o)
            }),
              super(e)
          }
          enable() {
            window.fetch && super.enable()
          }
        },
        confKey: 'fetch',
        disable: !1,
      },
      {
        Instrument: class extends RA {
          constructor(e) {
            super('imqa-websocket', Rk, e),
              (this.listener2ws2patched = new WeakMap()),
              (this._config = e)
          }
          init() {}
          enable() {
            const e = this
            fA.wrap(window, 'WebSocket', function () {
              class t extends WebSocket {
                constructor(t, n) {
                  if (oG(t, e._config.ignoreUrls)) return void super(t, n)
                  const r = e.tracer.startSpan('connect', {
                    kind: ft.CLIENT,
                    attributes: { component: 'websocket' },
                  })
                  dB(r),
                    t && r.setAttribute('http.url', t),
                    n &&
                      ('string' == typeof n
                        ? r.setAttribute('protocols', n)
                        : r.setAttribute('protocols', JSON.stringify(n)))
                  try {
                    super(t, n)
                  } catch (t) {
                    throw (e.endSpanExceptionally(r, t), t)
                  }
                  this.addEventListener('open', function () {
                    r.end()
                  }),
                    this.addEventListener('error', function (t) {
                      r.isRecording()
                        ? e.endSpanExceptionally(
                            r,
                            new Error(t.error || t.message || 'Could not connect.'),
                          )
                        : e.startSpan(this, 'error', ft.CLIENT).end()
                    }),
                    e.patchSend(this),
                    e.patchEventListener(this)
                }
              }
              return t
            })
          }
          disable() {
            fA.unwrap(window, 'WebSocket')
          }
          startSpan(e, t, n) {
            const r = this.tracer.startSpan(t, { kind: n })
            return (
              dB(r),
              r.setAttribute(hx.ATTR_IMQA_RUM_COMPONENT, 'websocket'),
              r.setAttribute(hx.ATTR_IMQA_SPAN_TYPE, 'websocket'),
              gx.setScreenName(r, 'full'),
              r.setAttribute(hx.ATTR_NETWORK_PROTOCOL_NAME, e.protocol),
              r.setAttribute(hx.ATTR_URL_FULL, e.url),
              r
            )
          }
          patchSend(e) {
            const t = this,
              n = e.send
            e.send = function (...r) {
              const o = t.startSpan(e, 'send', ft.PRODUCER)
              dB(o)
              const i = r.length > 0 ? qY(r[0]) : void 0
              let s
              o.setAttribute('http.request_content_length', i)
              try {
                s = n.apply(e, r)
              } catch (e) {
                throw (t.endSpanExceptionally(o, e), e)
              }
              return (
                !1 === s && t.endSpanExceptionally(o, new Error('Failed to send frame.')),
                o.end(),
                s
              )
            }
          }
          addPatchedListener(e, t, n) {
            let r = this.listener2ws2patched.get(t)
            return (
              r || ((r = new Map()), this.listener2ws2patched.set(t, r)),
              !r.has(e) && (r.set(e, n), !0)
            )
          }
          removePatchedListener(e, t) {
            const n = this.listener2ws2patched.get(t)
            if (!n) return
            const r = n.get(e)
            return r && (n.delete(e), 0 === n.size && this.listener2ws2patched.delete(e)), r
          }
          patchEventListener(e) {
            const t = this,
              n = e.addEventListener.bind(e)
            e.addEventListener = function (r, o, i) {
              if ('message' !== r) return void n(r, o, i)
              const s = 'boolean' == typeof i || null == i ? void 0 : i.once,
                a = function (...n) {
                  const r = this,
                    i = n
                  s && t.removePatchedListener(e, o)
                  const a = t.startSpan(e, 'onmessage', ft.CONSUMER)
                  dB(a),
                    i &&
                      i[0] &&
                      i[0].data &&
                      a.setAttribute('http.response_content_length', qY(i[0].data)),
                    Ct.with(qt.setSpan(Ct.active(), a), () => {
                      let e
                      return (
                        (e = 'function' == typeof o ? o.apply(r, i) : o.handleEvent(n[0])),
                        a.end(),
                        e
                      )
                    })
                }
              t.addPatchedListener(e, o, a) && n.apply(e, [r, a, i])
            }
            const r = e.removeEventListener
            e.removeEventListener = function (n, o, i) {
              if ('message' !== n) return r.call(e, n, o, i)
              const s = t.removePatchedListener(e, o)
              return s ? r.call(e, n, s, i) : r.call(e, n, o, i)
            }
          }
          endSpanExceptionally(e, t) {
            e.setAttribute('error', !0),
              e.setAttribute('error.message', t.message),
              e.setAttribute(
                'error.object',
                t.name
                  ? t.name
                  : t.constructor && t.constructor.name
                    ? t.constructor.name
                    : 'Error',
              ),
              dB(e),
              e.end()
          }
        },
        confKey: 'websocket',
        disable: !0,
      },
      {
        Instrument: class extends RA {
          constructor(e = {}) {
            super(zY, Rk, Object.assign({}, e))
          }
          init() {}
          enable() {
            this.isSupported() &&
              ((this._longtaskObserver = new PerformanceObserver((e) => {
                e.getEntries().forEach((e) => this._createSpanFromEntry(e))
              })),
              this._longtaskObserver.observe({ type: QY, buffered: !0 }))
          }
          disable() {
            var e
            this.isSupported() &&
              (null === (e = this._longtaskObserver) || void 0 === e || e.disconnect())
          }
          _createSpanFromEntry(e) {
            const t = this.tracer.startSpan(QY, { startTime: e.startTime })
            t.setAttribute(hx.ATTR_IMQA_RUM_COMPONENT, zY),
              t.setAttribute(hx.ATTR_IMQA_SPAN_TYPE, 'longtask'),
              dB(t),
              t.setAttribute(hx.ATTR_IMQA_LONGTASK_NAME, e.name),
              t.setAttribute(hx.ATTR_IMQA_LONGTASK_ENTRY_TYPE, e.entryType),
              t.setAttribute(hx.ATTR_IMQA_LONGTASK_DURATION, e.duration)
            const n = e.attribution
            Array.isArray(n) &&
              n.forEach((e, n) => {
                const r = e > 1 ? `longtask.attribution[${n}]` : 'longtask.attribution'
                t.setAttribute(`${r}.name`, e.name),
                  t.setAttribute(`${r}.entry_type`, e.entryType),
                  t.setAttribute(`${r}.start_time`, e.startTime),
                  t.setAttribute(`${r}.duration`, e.duration),
                  t.setAttribute(`${r}.container_type`, e.containerType),
                  t.setAttribute(`${r}.container_src`, e.containerSrc),
                  t.setAttribute(`${r}.container_id`, e.containerId),
                  t.setAttribute(`${r}.container_name`, e.containerName)
              }),
              t.end(e.startTime + e.duration)
          }
          isSupported() {
            return (
              (window.PerformanceObserver && PerformanceObserver.supportedEntryTypes) ||
              []
            ).includes(QY)
          }
        },
        confKey: 'longtask',
        disable: !1,
      },
      {
        Instrument: fx.IMQAErrorInstrumentation,
        confKey: fx.ERROR_INSTRUMENTATION_NAME,
        disable: !1,
      },
      {
        Instrument: class extends RA {
          constructor(e = {}) {
            super('page-visibility', Rk, Object.assign({}, e)), (this.unloading = !1)
          }
          init() {}
          enable() {
            document.hidden && this._createSpan(document.hidden),
              (this.unloadListener = () => {
                this.unloading = !0
              }),
              (this.visibilityListener = () => {
                this.unloading || this._createSpan(document.hidden)
              }),
              window.addEventListener('beforeunload', this.unloadListener),
              window.addEventListener('visibilitychange', this.visibilityListener)
          }
          disable() {
            window.removeEventListener('beforeunload', this.unloadListener),
              window.removeEventListener('visibilitychange', this.visibilityListener)
          }
          _createSpan(e) {
            const t = Date.now(),
              n = this.tracer.startSpan('visibility', { startTime: t })
            n.setAttribute(hx.ATTR_IMQA_SPAN_TYPE, 'visibility'),
              dB(n),
              n.setAttribute('hidden', e),
              n.end(t)
          }
        },
        confKey: 'visibility',
        disable: !0,
      },
      {
        Instrument: class extends RA {
          constructor(e = {}) {
            super('imqa-connectivity', Rk, Object.assign({}, e)),
              (this.offlineStart = navigator.onLine ? null : Date.now())
          }
          init() {}
          enable() {
            ;(this.offlineListener = () => {
              this.offlineStart = Date.now()
            }),
              (this.onlineListener = () => {
                this.offlineStart &&
                  (this._createSpan(!1, this.offlineStart), this._createSpan(!0, Date.now()))
              }),
              window.addEventListener('offline', this.offlineListener),
              window.addEventListener('online', this.onlineListener)
          }
          disable() {
            window.removeEventListener('offline', this.offlineListener),
              window.removeEventListener('online', this.onlineListener)
          }
          _createSpan(e, t) {
            const n = this.tracer.startSpan('connectivity', { startTime: t })
            n.setAttribute(hx.ATTR_IMQA_CONNECTIVITY_ONLINE, e),
              n.setAttribute(hx.ATTR_IMQA_SPAN_TYPE, 'connectivity'),
              dB(n),
              n.end(t)
          }
        },
        confKey: 'connectivity',
        disable: !0,
      },
      {
        Instrument: class extends RA {
          constructor(e = {}) {
            super('imqa-socket.io-client', Rk, Object.assign({ target: 'io' }, e)),
              (this.listeners = new WeakMap())
          }
          init() {}
          getConfig() {
            return this._config
          }
          patchSocketIo(e) {
            if (
              !(function (e) {
                return 'function' == typeof e && 'function' == typeof e.Socket
              })(e)
            )
              return void this._diag.debug("Doesn't seem like socket.io-client", e)
            const t = this
            this._wrap(
              e.Socket.prototype,
              'emit',
              (e) =>
                function (n, ...r) {
                  const o = t.tracer.startSpan(`${n} send`, {
                    kind: ft.PRODUCER,
                    attributes: {
                      [ks.MESSAGING_SYSTEM]: 'socket.io',
                      [ks.MESSAGING_DESTINATION]: this.nsp,
                      [ks.MESSAGING_DESTINATION_KIND]: gu.TOPIC,
                      [$Y]: this.nsp,
                      [XY]: n,
                    },
                  })
                  try {
                    return Ct.with(qt.setSpan(Ct.active(), o), () => e.apply(this, [n, ...r]))
                  } catch (e) {
                    let t = ''
                    throw (
                      (e instanceof Error && (o.recordException(e), (t = e.message)),
                      o.setStatus({ code: At.ERROR, message: t }),
                      e)
                    )
                  } finally {
                    o.end()
                  }
                },
            ),
              this._wrap(
                e.Socket.prototype,
                'on',
                (e) =>
                  function (n, r) {
                    if (JY.includes(n) || 'function' != typeof r) return e.call(this, n, r)
                    let o
                    return (
                      t.listeners.has(r)
                        ? (o = t.listeners.get(r))
                        : ((o = function (...e) {
                            const o = t.tracer.startSpan(`${n} ${yu.RECEIVE}`, {
                              kind: ft.CONSUMER,
                              attributes: {
                                [ks.MESSAGING_SYSTEM]: 'socket.io',
                                [ks.MESSAGING_DESTINATION]: this.nsp,
                                [ks.MESSAGING_DESTINATION_KIND]: gu.TOPIC,
                                [ks.MESSAGING_OPERATION]: yu.RECEIVE,
                                [$Y]: this.nsp,
                                [XY]: n,
                              },
                            })
                            dB(o), o.setAttribute('span.type', 'socket-io')
                            try {
                              r.call(this, e)
                            } catch (e) {
                              throw (e instanceof Error && o.recordException(e), e)
                            } finally {
                              o.end()
                            }
                          }),
                          t.listeners.set(r, o)),
                      e.call(this, n, o)
                    )
                  },
              ),
              (e.Socket.prototype.addEventListener = e.Socket.prototype.on),
              this._wrap(
                e.Socket.prototype,
                'off',
                (e) =>
                  function (n, r) {
                    return !n || JY.includes(n) || 'function' != typeof r
                      ? e.call(this, n, r)
                      : t.listeners.has(r)
                        ? e.call(this, n, t.listeners.get(r))
                        : e.call(this, n, r)
                  },
              ),
              (e.Socket.prototype.removeListener = e.Socket.prototype.off),
              (e.Socket.prototype.removeEventListener = e.Socket.prototype.off),
              (e.Socket.prototype.removeAllListeners = e.Socket.prototype.off),
              (this._onDisable = () => {
                this._unwrap(e.Socket.prototype, 'emit'),
                  this._unwrap(e.Socket.prototype, 'on'),
                  (e.Socket.prototype.addEventListener = e.Socket.prototype.on),
                  this._unwrap(e.Socket.prototype, 'off'),
                  (e.Socket.prototype.removeListener = e.Socket.prototype.off),
                  (e.Socket.prototype.removeEventListener = e.Socket.prototype.off),
                  (e.Socket.prototype.removeAllListeners = e.Socket.prototype.off)
              })
          }
          enable() {
            const e = this.getConfig()
            e.target &&
              ('string' == typeof e.target
                ? (this._onDisable = (function (e, t) {
                    if (window[e]) return t(window[e]), () => {}
                    const n = window[e]
                    let r = !1
                    return (
                      Object.defineProperty(window, e, {
                        get: () => n,
                        set(n) {
                          delete window[e], (r = !0), (window[e] = n), t(n)
                        },
                        configurable: !0,
                        enumerable: !1,
                      }),
                      () => {
                        r || window[e] !== n || (delete window[e], void 0 !== n && (window[e] = n))
                      }
                    )
                  })(e.target, (e) => this.patchSocketIo(e)))
                : this.patchSocketIo(e.target))
          }
          disable() {
            this._onDisable && (this._onDisable(), (this._onDisable = void 0))
          }
        },
        confKey: 'socketio',
        disable: !0,
      },
      {
        Instrument: class extends RA {
          _createSpan(e, ...t) {
            const n = Date.now(),
              r = ((e) => {
                const t = []
                let n
                for (const r of e)
                  if (ej(r)) {
                    null == n && Nj(r) && (n = r)
                    try {
                      const e = JSON.stringify(r)
                      null != e && t.push(e)
                    } catch (e) {}
                  } else t.push(r)
                return n
                  ? Object.assign(Object.assign({}, n), e.length > 1 && { message: t.join(' ') })
                  : t.join(' ')
              })(t),
              o = Mj(r)
                ? r
                : ((e) => {
                    let t = '[IMQA] Failed to stringify',
                      n = !1
                    try {
                      t = JSON.stringify(e)
                    } catch (e) {
                      n = !0
                    }
                    if (n)
                      try {
                        t = Xf(e)
                      } catch (e) {}
                    return t
                  })(r),
              i = this.tracer.startSpan(`console.${e}`, { kind: ft.INTERNAL, startTime: n })
            let s = e,
              a = 0
            'log' === e && ((s = 'info'), (a = 9)),
              'info' === e && (a = 9),
              'warn' === e && (a = 13),
              'debug' === e && (a = 5),
              dB(i),
              i.setAttribute(hx.ATTR_IMQA_RUM_COMPONENT, Pj),
              i.setAttribute(hx.ATTR_IMQA_SPAN_TYPE, Pj),
              i.setAttribute(hx.ATTR_IMQA_LOG_LEVEL, s),
              i.setAttribute(hx.ATTR_IMQA_LOG_MESSAGE, o),
              Nj(r) && i.setAttributes(r)
            const c = Ct.active()
              .setValue(Uj, i.spanContext().traceId)
              .setValue(Dj, i.spanContext().spanId)
            this.logger.emit({
              timestamp: n,
              severityText: s,
              severityNumber: a,
              body: o,
              attributes: {
                [hx.ATTR_IMQA_RUM_COMPONENT]: Pj,
                [hx.ATTR_IMQA_SPAN_TYPE]: Pj,
                [hx.ATTR_IMQA_SCREEN_NAME]: gx.getScreenName('full'),
                [hx.ATTR_IMQA_SCREEN_TYPE]: 'page',
                level: s,
                [hx.ATTR_IMQA_SESSION_ID]: Ax.getRumSessionId(),
              },
              context: c,
            }),
              i.end(n)
          }
          constructor(e = {}) {
            super(Pj, Rk, Object.assign({}, e)),
              (this._consoleLogHandler =
                (e) =>
                (...t) => (this._createSpan('log', ...t), e.apply(this, t))),
              (this._consoleInfoHandler =
                (e) =>
                (...t) => (this._createSpan('info', ...t), e.apply(this, t))),
              (this._consoleWarnHandler =
                (e) =>
                (...t) => (this._createSpan('warn', ...t), e.apply(this, t))),
              (this._consoleDebugHandler =
                (e) =>
                (...t) => (this._createSpan('debug', ...t), e.apply(this, t)))
          }
          init() {}
          enable() {
            fA.wrap(console, 'debug', this._consoleDebugHandler),
              fA.wrap(console, 'info', this._consoleInfoHandler),
              fA.wrap(console, 'log', this._consoleLogHandler),
              fA.wrap(console, 'warn', this._consoleWarnHandler)
          }
          disable() {
            fA.unwrap(console, 'debug'),
              fA.unwrap(console, 'info'),
              fA.unwrap(console, 'log'),
              fA.unwrap(console, 'warn')
          }
        },
        confKey: '@imqa/console',
        disable: !1,
      },
    ]
  EK.map((e) => e.confKey).reduce((e, t) => ((e[t] = !1), e), { webvitals: !1 })
  let lK,
    TK,
    pK,
    dK,
    SK,
    fK = !1
  const AK = {
    DEFAULT_AUTO_INSTRUMENTED_EVENTS: SB,
    DEFAULT_AUTO_INSTRUMENTED_EVENT_NAMES: fB,
    AlwaysOnSampler: fG,
    AlwaysOffSampler: SG,
    ParentBasedSampler: AG,
    SessionBasedSampler: class {
      constructor({ ratio: e = 1, sampled: t = new fG(), notSampled: n = new SG() } = {}) {
        ;(this._ratio = this._normalize(e)),
          (this._upperBound = Math.floor(4294967295 * this._ratio)),
          (this._sampled = t),
          (this._notSampled = n)
      }
      shouldSample(e, t, n, r, o, i) {
        const s = Ax.getRumSessionId()
        this._currentSession !== s &&
          ((this._currentSessionSampled = this._accumulate(s) < this._upperBound),
          (this._currentSession = s))
        return (this._currentSessionSampled ? this._sampled : this._notSampled).shouldSample(
          e,
          t,
          n,
          r,
          o,
          i,
        )
      }
      toString() {
        return `SessionBased{ratio=${this._ratio}, sampled=${this._sampled.toString()}, notSampled=${this._notSampled.toString()}}`
      }
      _normalize(e) {
        return 'number' != typeof e || isNaN(e) ? 0 : e >= 1 ? 1 : e <= 0 ? 0 : e
      }
      _accumulate(e) {
        let t = 0
        for (let n = 0; n < e.length / 8; n++) {
          const r = 8 * n
          t = (t ^ parseInt(e.slice(r, r + 8), 16)) >>> 0
        }
        return t
      }
    },
    get inited() {
      return fK
    },
    _internalInit: function (e) {
      AK.init(Object.assign(Object.assign({}, uK), e))
    },
    init: function (e) {
      'OTEL_TRACES_EXPORTER' in nV || (nV.OTEL_TRACES_EXPORTER = 'none')
      const t = (e, t) => 'function' == typeof e && !0 !== e.__wrapped && e.name === t,
        n = t(null === console || void 0 === console ? void 0 : console.log, 'log')
          ? console.log
          : () => {},
        r = t(null === console || void 0 === console ? void 0 : console.warn, 'warn')
          ? console.warn
          : n,
        o = t(null === console || void 0 === console ? void 0 : console.error, 'error')
          ? console.error
          : n,
        i = t(null === console || void 0 === console ? void 0 : console.debug, 'debug')
          ? console.debug
          : n,
        s = t(null === console || void 0 === console ? void 0 : console.trace, 'trace')
          ? console.trace
          : n
      if (
        (Lt.setLogger(
          {
            error: (...e) => {
              t(o, 'error') && o(...e)
            },
            warn: (...e) => {
              t(r, 'warn') && r(...e)
            },
            info: (...e) => {
              t(n, 'log') && n(...e)
            },
            debug: (...e) => {
              t(i, 'debug') && i(...e)
            },
            verbose: (...e) => {
              t(s, 'trace') && s(...e)
            },
          },
          {
            suppressOverrideMessage: !0,
            logLevel: (null == e ? void 0 : e.debug) ? ee.DEBUG : ee.NONE,
          },
        ),
        'object' != typeof window)
      )
        return void Lt.error('IMQA: Non-browser environment detected, aborting')
      if ('function' != typeof Symbol)
        return void Lt.error('IMQA: browser not supported, disabling instrumentation.')
      SK = new Ck()
      const a = e.collectorUrl
          ? ((e) => {
              const t = new URL(e)
              return (
                (t.pathname = t.pathname.replace(/\/v1\/(traces|metrics|logs)\/?$/, '')),
                t.pathname.endsWith('/') || (t.pathname += '/'),
                t.href
              )
            })(e.collectorUrl)
          : void 0,
        c = Object.assign({}, uK, e, a, { exporter: Object.assign({}, uK.exporter, e.exporter) })
      if (fK) return void Lt.warn('IMQA already init()ed.')
      if (!c.debug) {
        if (!c.collectorUrl)
          throw new Error(
            "IMQA.init( { collectorUrl: 'https://collector.yourdomain'} ) is required.",
          )
        if (!c.collectorUrl.startsWith('https') && !c.allowInsecureUrl)
          throw new Error(
            'Not using https is unsafe, if you want to force it use allowInsecureUrl option.',
          )
      }
      const _ = 'x'.repeat(64 / 4).replace(/x/g, function () {
        return ((16 * Math.random()) | 0).toString(16)
      })
      TK = Ax.initSessionTracking(_, SK, c.cookieDomain).deinit
      const {
          ignoreUrls: u,
          deploymentEnvironment: E,
          version: l,
          serviceName: T,
          serviceKey: p,
          serviceVersion: d,
        } = c,
        S = { ignoreUrls: u, enabled: !1 },
        f = new hH(navigator.userAgent),
        A = Object.assign(Object.assign({}, _V), {
          [hx.ATTR_TELEMETRY_SDK_NAME]: '@imqa/web-agent',
          [hx.ATTR_TELEMETRY_SDK_VERSION]: Rk,
          [hx.ATTR_SERVICE_NAME]: T,
          [hx.ATTR_SERVICE_VERSION]: d,
          [hx.INCUBATING.ATTR_OS_NAME]: f.getOS().name,
          [hx.INCUBATING.ATTR_OS_VERSION]: f.getOS().version,
          [hx.ATTR_IMQA_BROWSER_DEVICE]: mH(f.getDevice().type),
          [hx.ATTR_IMQA_BROWSER_NAME]: f.getBrowser().name,
          [hx.ATTR_IMQA_BROWSER_VERSION]: f.getBrowser().version,
          [hx.ATTR_IMQA_BROWSER_VERSION_MAJOR]: f.getBrowser().major,
          [hx.ATTR_IMQA_SERVICE_KEY]: p,
          [hx.ATTR_IMQA_AGENT_VERSION]: Rk,
          [hx.ATTR_IMQA_RUM_VERSION]: Rk,
          [hx.ATTR_IMQA_RUM_SCRIPT_INSTANCE]: _,
        }),
        h = window.syntheticsRunId
      h && (A['Synthetics-RunId'] = h)
      const m = new Nk(Object.assign(Object.assign({}, c.tracer), { resource: new xG(A) })),
        R = new GH({ resource: new xG(A) })
      Object.defineProperty(m.resource.attributes, 'session.id', {
        get: () => Ax.getRumSessionId(),
        configurable: !0,
        enumerable: !0,
      })
      const g = EK.map(({ Instrument: e, confKey: t, disable: n }) => {
        const r = hB(c.instrumentations[t], S, n)
        if (r) {
          const n = new e(r)
          return (
            t === fx.ERROR_INSTRUMENTATION_NAME &&
              n instanceof fx.IMQAErrorInstrumentation &&
              (pK = n),
            'postload' === t && n instanceof Ik && (dK = n),
            n
          )
        }
        return null
      }).filter((e) => Boolean(e))
      if (
        ((this.attributesProcessor = new Mk(
          Object.assign(
            Object.assign(
              Object.assign({}, E ? { environment: E, 'deployment.environment': E } : {}),
              l ? { 'service.version': l } : {},
            ),
            c.globalAttributes || {},
          ),
        )),
        m.addSpanProcessor(this.attributesProcessor),
        c.collectorUrl)
      ) {
        const e = (function (e) {
            return e.spanExporter.factory({ url: new URL('v1/traces', e.collectorUrl).href })
          })(c),
          t = (function (e) {
            return e.logExporter.factory({ url: new URL('v1/logs', e.collectorUrl).href })
          })(c),
          n = c.spanProcessor.factory(e, {
            scheduledDelayMillis: c.bufferTimeout,
            maxExportBatchSize: c.bufferSize,
          }),
          r = c.logProcessor.factory(t, {
            scheduledDelayMillis: c.bufferTimeout,
            maxExportBatchSize: c.bufferSize,
          })
        m.addSpanProcessor(n), R.addLogRecordProcessor(r), (this._processor = n)
      }
      c.debug && m.addSpanProcessor(new $G(new qG())),
        window.addEventListener('visibilitychange', () => {
          'hidden' === document.visibilityState && this._processor.forceFlush()
        }),
        m.register({
          contextManager: new bk(
            Object.assign(Object.assign({}, c.context), {
              onBeforeContextStart: () => (null == dK ? void 0 : dK.onBeforeContextChange()),
              onBeforeContextEnd: () => (null == dK ? void 0 : dK.onBeforeContextChange()),
            }),
          ),
        }),
        (lK = uA({ tracerProvider: m, loggerProvider: R, instrumentations: g })),
        (this.provider = m)
      !1 !== hB(c.instrumentations.webvitals) && mk(m), (fK = !0), Lt.info('IMQA.init() complete')
    },
    deinit() {
      fK &&
        (null == lK || lK(),
        (lK = void 0),
        null == TK || TK(),
        (TK = void 0),
        this.provider.shutdown(),
        delete this.provider,
        (SK = void 0),
        Lt.disable(),
        (fK = !1))
    },
    setGlobalAttributes(e) {
      var t, n
      null === (t = this.attributesProcessor) || void 0 === t || t.setGlobalAttributes(e),
        null == SK ||
          SK.emit('global-attributes-changed', {
            attributes:
              (null === (n = this.attributesProcessor) || void 0 === n
                ? void 0
                : n.getGlobalAttributes()) || {},
          })
    },
    setUserIdAttribute(e) {
      var t, n
      null === (t = this.attributesProcessor) ||
        void 0 === t ||
        t.setGlobalAttributes({ 'user.id': e }),
        null == SK ||
          SK.emit('global-attributes-changed', {
            attributes:
              (null === (n = this.attributesProcessor) || void 0 === n
                ? void 0
                : n.getGlobalAttributes()) || {},
          })
    },
    setAreaCodeAttribute(e) {
      var t, n
      null === (t = this.attributesProcessor) ||
        void 0 === t ||
        t.setGlobalAttributes({ 'area.code': e }),
        null == SK ||
          SK.emit('global-attributes-changed', {
            attributes:
              (null === (n = this.attributesProcessor) || void 0 === n
                ? void 0
                : n.getGlobalAttributes()) || {},
          })
    },
    getGlobalAttributes() {
      var e
      return (
        (null === (e = this.attributesProcessor) || void 0 === e
          ? void 0
          : e.getGlobalAttributes()) || {}
      )
    },
    addAction(e, t) {
      if (!fK) return void Lt.debug('IMQA not inited')
      const n = Date.now(),
        r = this.provider.getTracer('custom-action').startSpan(e, { startTime: n })
      r.setAttributes(t), r.end(n)
    },
    _experimental_getGlobalAttributes() {
      return this.getGlobalAttributes()
    },
    recordException(e, t) {
      if (!fK) return void Lt.debug('IMQA RUM is not inited')
      const n = this.provider.getTracer('record-exception')
      return r.recordException(e, { tracer: n, attributes: t })
    },
    error(...e) {
      fK
        ? pK
          ? pK.imqaReport('IMQA.error', e)
          : Lt.error('Error was reported, but error instrumentation is disabled.')
        : Lt.debug('IMQA not inited')
    },
    addEventListener(e, t) {
      null == SK || SK.addEventListener(e, t)
    },
    removeEventListener(e, t) {
      null == SK || SK.removeEventListener(e, t)
    },
    _experimental_addEventListener(e, t) {
      return this.addEventListener(e, t)
    },
    _experimental_removeEventListener(e, t) {
      return this.removeEventListener(e, t)
    },
    getSessionId: () => Ax.getRumSessionId(),
    _experimental_getSessionId() {
      return this.getSessionId()
    },
  }
  function hK() {
    return 'undefined' != typeof window
  }
  var mK = new (class {
    constructor() {
      this._advancedNetworkCapture = !1
    }
    init({
      collectorUrl: e,
      serviceName: t,
      serviceKey: n,
      serviceVersion: r,
      deploymentEnvironment: o,
      defaultAttributes: i,
      samplingProbability: s,
      advancedNetworkCapture: a = !1,
      blockClass: c,
      consoleCapture: _,
      debug: u = !1,
      disableIntercom: E = !1,
      disableReplay: l = !0,
      ignoreClass: T,
      ignoreUrls: p,
      instrumentations: d = {},
      maskAllInputs: S = !0,
      maskAllText: f = !1,
      maskClass: A,
      recordCanvas: h = !1,
      tracePropagationTargets: m,
    }) {
      if (!hK()) return
      if (
        (null == r
          ? console.warn('IMQA: Missing serviceVersion, telemetry will not be saved.')
          : '' === r
            ? console.warn('IMQA: serviceVersion is empty string, telemetry will not be saved.')
            : 'string' != typeof r &&
              console.warn('IMQA: serviceVersion must be a string, telemetry will not be saved.'),
        null == t
          ? console.warn('IMQA: Missing serviceName, telemetry will not be saved.')
          : '' === t
            ? console.warn('IMQA: serviceName is empty string, telemetry will not be saved.')
            : 'string' != typeof t &&
              console.warn('IMQA: serviceName must be a string, telemetry will not be saved.'),
        null == n
          ? console.warn('IMQA: Missing serviceKey, telemetry will not be saved.')
          : '' === n
            ? console.warn('IMQA: serviceKey is empty string, telemetry will not be saved.')
            : 'string' != typeof n &&
              console.warn('IMQA: serviceKey must be a string, telemetry will not be saved.'),
        !e)
      )
        throw new Error('IMQA: Missing url, telemetry will not be saved.')
      const R = null != e ? e : 'https://in-otel.imqa.io'
      ;(this._advancedNetworkCapture = a),
        (window.IMQA = AK),
        window.__imqa_deactivated ||
          AK.init({
            debug: u,
            collectorUrl: R,
            allowInsecureUrl: !0,
            deploymentEnvironment: o,
            globalAttributes: i,
            serviceName: t,
            serviceVersion: r,
            serviceKey: n,
            ignoreUrls: p,
            instrumentations: {
              visibility: !0,
              console: null != _ && _,
              fetch: {
                ...(null != m ? { propagateTraceHeaderCorsUrls: m } : {}),
                advancedNetworkCapture: () => this._advancedNetworkCapture,
              },
              xhr: {
                ...(null != m ? { propagateTraceHeaderCorsUrls: m } : {}),
                advancedNetworkCapture: () => this._advancedNetworkCapture,
              },
              ...d,
            },
          })
      const g = Qt.trace.getTracer('@imqa/web-agent')
      !0 !== E &&
        (function (e) {
          return new Promise((t, n) => {
            let r = 0
            const o = setInterval(() => {
              r > 20 && (clearInterval(o), n(new Error(`Global ${e} not found`))),
                window[e] && (clearInterval(o), t(window[e])),
                r++
            }, 100)
          })
        })('Intercom')
          .then(() => {
            window.Intercom('onShow', () => {
              const e = this.getSessionUrl()
              if (null != e) {
                const t = { imqaSessionUrl: e }
                window.Intercom('update', t), window.Intercom('trackEvent', 'IMQA', t)
                const n = Date.now(),
                  r = g.startSpan('intercom.onShow', { startTime: n })
                r.setAttribute('component', 'intercom'), r.end(n)
              }
            })
          })
          .catch(() => {})
    }
    addAction(e, t) {
      hK() && AK.addAction(e, t)
    }
    recordException(e, t) {
      hK() && AK.recordException(e, t)
    }
    enableAdvancedNetworkCapture() {
      this._advancedNetworkCapture = !0
    }
    disableAdvancedNetworkCapture() {
      this._advancedNetworkCapture = !1
    }
    setGlobalAttributes(e) {
      hK() && AK.setGlobalAttributes(e)
    }
    setUserIdAttribute(e) {
      hK() && AK.setGlobalAttributes({ 'user.id': e })
    }
    setAreaCodeAttribute(e) {
      hK() && AK.setGlobalAttributes({ 'area.code': e })
    }
    getSessionId() {
      return AK.getSessionId()
    }
    getSessionUrl() {
      const e = Date.now(),
        t = 144e5,
        n = e - t,
        r = e + t
      return AK.inited
        ? `https://www.imqa.io/sessions?q=process.tag.rum.sessionId%3A"${AK.getSessionId()}"&sid=${AK.getSessionId()}&sfrom=${n}&sto=${r}&ts=${e}`
        : void 0
    }
    attachToReactErrorBoundary(e) {
      if (!e) return console.warn('Attempted to attach to an ErrorBoundary that does not exist.')
      const t = this.recordException,
        n = e.prototype.componentDidCatch
      e.prototype.componentDidCatch = function (e, r) {
        const o = null == r ? void 0 : r.componentStack
        t(e, { componentStack: o }), n.call(this, e, r)
      }
    }
  })()
  return mK
})
