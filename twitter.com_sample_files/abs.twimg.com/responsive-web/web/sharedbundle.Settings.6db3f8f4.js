(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        "2Jqb": function(e, t, n) {
            (function(r) {
                var i;
                ! function() {
                    var a = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                            if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
                            e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                        },
                        o = "undefined" != typeof window && window === this ? this : void 0 !== r && null != r ? r : this;

                    function s(e, t) {
                        if (t) {
                            for (var n = o, r = e.split("."), i = 0; i < r.length - 1; i++) {
                                var s = r[i];
                                s in n || (n[s] = {}), n = n[s]
                            }(s = t(i = n[r = r[r.length - 1]])) != i && null != s && a(n, r, {
                                configurable: !0,
                                writable: !0,
                                value: s
                            })
                        }
                    }

                    function c(e, t, n) {
                        return e.call.apply(e.bind, arguments)
                    }

                    function l(e, t, n) {
                        if (!e) throw Error();
                        if (2 < arguments.length) {
                            var r = Array.prototype.slice.call(arguments, 2);
                            return function() {
                                var n = Array.prototype.slice.call(arguments);
                                return Array.prototype.unshift.apply(n, r), e.apply(t, n)
                            }
                        }
                        return function() {
                            return e.apply(t, arguments)
                        }
                    }

                    function d(e, t, n) {
                        return (d = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? c : l).apply(null, arguments)
                    }

                    function u(e) {
                        var t = [];
                        return function e(t, n, r) {
                            if (null == n) r.push("null");
                            else {
                                if ("object" == typeof n) {
                                    if ("array" == function(e) {
                                            var t = typeof e;
                                            if ("object" == t) {
                                                if (!e) return "null";
                                                if (e instanceof Array) return "array";
                                                if (e instanceof Object) return t;
                                                var n = Object.prototype.toString.call(e);
                                                if ("[object Window]" == n) return "object";
                                                if ("[object Array]" == n || "number" == typeof e.length && void 0 !== e.splice && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
                                                if ("[object Function]" == n || void 0 !== e.call && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
                                            } else if ("function" == t && void 0 === e.call) return "object";
                                            return t
                                        }(n)) {
                                        var i = n;
                                        n = i.length, r.push("[");
                                        for (var a = "", o = 0; o < n; o++) r.push(a), a = i[o], e(t, a, r), a = ",";
                                        return void r.push("]")
                                    }
                                    if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) {
                                        for (i in r.push("{"), o = "", n) Object.prototype.hasOwnProperty.call(n, i) && ("function" != typeof(a = n[i]) && (r.push(o), b(i, r), r.push(":"), e(t, a, r), o = ","));
                                        return void r.push("}")
                                    }
                                    n = n.valueOf()
                                }
                                switch (typeof n) {
                                    case "string":
                                        b(n, r);
                                        break;
                                    case "number":
                                        r.push(isFinite(n) && !isNaN(n) ? String(n) : "null");
                                        break;
                                    case "boolean":
                                        r.push(String(n));
                                        break;
                                    case "function":
                                        r.push("null");
                                        break;
                                    default:
                                        throw Error("Unknown type: " + typeof n)
                                }
                            }
                        }(new p, e, t), t.join("")
                    }

                    function p() {}
                    s("String.prototype.includes", (function(e) {
                        return e || function(e, t) {
                            if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
                            if (e instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
                            return -1 !== (this + "").indexOf(e, t || 0)
                        }
                    })), s("Number.isFinite", (function(e) {
                        return e || function(e) {
                            return "number" == typeof e && (!isNaN(e) && 1 / 0 !== e && -1 / 0 !== e)
                        }
                    })), s("Number.isInteger", (function(e) {
                        return e || function(e) {
                            return !!Number.isFinite(e) && e === Math.floor(e)
                        }
                    }));
                    var h = {
                            '"': '\\"',
                            "\\": "\\\\",
                            "/": "\\/",
                            "\b": "\\b",
                            "\f": "\\f",
                            "\n": "\\n",
                            "\r": "\\r",
                            "\t": "\\t",
                            "\v": "\\u000b"
                        },
                        f = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

                    function b(e, t) {
                        t.push('"', e.replace(f, (function(e) {
                            var t = h[e];
                            return t || (t = "\\u" + (65536 | e.charCodeAt(0)).toString(16).substr(1), h[e] = t), t
                        })), '"')
                    }

                    function m(e) {
                        e = String(e);
                        try {
                            return JSON.parse(e)
                        } catch (t) {}
                        throw Error("Invalid JSON string: " + e)
                    }

                    function g(e) {
                        try {
                            return "object" == typeof JSON && "function" == typeof JSON.stringify ? JSON.stringify(e) : u(e)
                        } catch (t) {}
                        throw Error("Could not stringify object")
                    }

                    function v() {
                        var e = [];
                        return function(t) {
                            e.push(t), 1 === e.length && function t() {
                                e.length && e[0]((function() {
                                    e.shift(), t()
                                }))
                            }()
                        }
                    }
                    var _ = 2,
                        y = 200,
                        w = 5e3,
                        k = "",
                        x = {},
                        S = "undefined" != typeof window && !!(window.performance && window.performance.timing && window.performance.timing.navigationStart),
                        E = "";

                    function C(e) {
                        return e && "number" == typeof e ? (Date.now() - e).toString() : null
                    }
                    var T = !1,
                        O = {
                            "/v1/open": {
                                link_identifier: "\\d+"
                            },
                            "/v1/pageview": {
                                event: "pageview"
                            },
                            "/v1/dismiss": {
                                event: "dismiss"
                            }
                        },
                        A = !1;

                    function R(e, t) {
                        if (e || t) {
                            for (var n = "https://bnc.lt/a/" + e + "?", r = "tags alias channel feature stage campaign type duration sdk source data".split(" "), i = 0; i < r.length; i++) {
                                var a = r[i],
                                    o = t[a];
                                if (o)
                                    if ("tags" === a && Array.isArray(o))
                                        for (var s = 0; s < o.length; s++) n = ("?" === n[n.length - 1] ? n + a : n + "&" + a) + "=" + encodeURIComponent(o[s]);
                                    else("string" == typeof o && 0 < o.length || "number" == typeof o) && ("data" === a && "string" == typeof o && (o = G(o)), n = ("?" === n[n.length - 1] ? n + a : n + "&" + a) + "=" + encodeURIComponent(o))
                            }
                            return n
                        }
                    }

                    function P(e) {
                        e && (e.ga = null, e.M = null, e.G = null, e.v = null, e.C = null, e.B = null, e.o && delete e.o, e.s && delete e.s, e.c.remove("branch_view_enabled"), $e(e.c, {}, !0))
                    }

                    function I(e, t, n) {
                        return e = e.replace(/\$(\d)/g, (function(e, n) {
                            return t[parseInt(n, 10) - 1]
                        })), n && (e += "\n Failure Code:" + n), e
                    }

                    function j(e) {
                        return {
                            data: e.data || "",
                            data_parsed: e.data_parsed || {},
                            has_app: e.has_app || null,
                            identity: e.identity || null,
                            referring_identity: e.referring_identity || null,
                            referring_link: e.referring_link || null
                        }
                    }

                    function D() {
                        return ae() ? document.referrer : String(window.location)
                    }

                    function L(e) {
                        e.source = "web-sdk";
                        var t = e.data;
                        switch (typeof t) {
                            case "string":
                                try {
                                    t = m(t)
                                } catch (n) {
                                    t = {
                                        _bncNoEval: !0
                                    }
                                }
                                break;
                            case "object":
                                break;
                            default:
                                t = {}
                        }
                        t.$canonical_url || (t.$canonical_url = D()), t.$og_title || (t.$og_title = K("title")), t.$og_description || (t.$og_description = K("description")), t.$og_image_url || (t.$og_image_url = K("image")), t.$og_video || (t.$og_video = K("video")), t.$og_type || (t.$og_type = K("type")), "string" == typeof t.$desktop_url && (t.$desktop_url = t.$desktop_url.replace(/#r:[a-z0-9-_]+$/i, "").replace(/([\?\&]_branch_match_id=\d+)/, ""));
                        try {
                            m(t)
                        } catch (n) {
                            t = u(t)
                        }
                        return e.data = t, e
                    }

                    function B(e) {
                        if (!e || "string" != typeof e) return "";
                        var t = document.createElement("a");
                        return t.href = e, e = t.pathname && t.pathname.split("/").filter((function(e) {
                            return "" !== e
                        })), Array.isArray(e) && e.length ? e[e.length - 1] + t.search : t.search
                    }

                    function M(e, t) {
                        if (e && "object" == typeof e || (e = {}), !t || "object" != typeof t) return e;
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        return e
                    }

                    function N(e) {
                        return !!/^((?!chrome|android|crios|fxios).)*safari/i.test(e)
                    }

                    function z(e, t) {
                        t = t || 11;
                        var n = /version\/([^ ]*)/i.exec(e);
                        if (n && n[1]) try {
                            if (parseFloat(n[1]) >= t) return !0
                        } catch (r) {}
                        return !1
                    }

                    function H() {
                        var e = navigator.userAgent;
                        return e.match(/android/i) ? "android" : e.match(/ipad/i) || e && N(e) && e && -1 < e.indexOf("Macintosh") && z(e, 13) && screen.height > screen.width ? "ipad" : e.match(/i(os|p(hone|od))/i) ? "ios" : e.match(/\(BB[1-9][0-9]*\;/i) ? "blackberry" : e.match(/Windows Phone/i) ? "windows_phone" : !!(e.match(/Kindle/i) || e.match(/Silk/i) || e.match(/KFTT/i) || e.match(/KFOT/i) || e.match(/KFJWA/i) || e.match(/KFJWI/i) || e.match(/KFSOWI/i) || e.match(/KFTHWA/i) || e.match(/KFTHWI/i) || e.match(/KFAPWA/i) || e.match(/KFAPWI/i)) && "kindle"
                    }

                    function F() {
                        var e = navigator.userAgent;
                        return !!N(e) && z(e, 11)
                    }

                    function W(e) {
                        try {
                            var t = (ae() && oe() ? window.top.location.search : window.location.search).substring(1).match(new RegExp(e + "=([^&]*)"));
                            if (t && 1 <= t.length) return t[1]
                        } catch (n) {}
                    }

                    function G(e) {
                        var t, n, r, i, a, o, s = "",
                            c = 0;
                        for (e = e.replace(/\r\n/g, "\n"), n = "", r = 0; r < e.length; r++) 128 > (i = e.charCodeAt(r)) ? n += String.fromCharCode(i) : (127 < i && 2048 > i ? n += String.fromCharCode(i >> 6 | 192) : (n += String.fromCharCode(i >> 12 | 224), n += String.fromCharCode(i >> 6 & 63 | 128)), n += String.fromCharCode(63 & i | 128));
                        for (e = n; c < e.length;) i = (t = e.charCodeAt(c++)) >> 2, t = (3 & t) << 4 | (n = e.charCodeAt(c++)) >> 4, a = (15 & n) << 2 | (r = e.charCodeAt(c++)) >> 6, o = 63 & r, isNaN(n) ? o = a = 64 : isNaN(r) && (o = 64), s = s + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(o);
                        return s
                    }

                    function U(e, t, n) {
                        "function" == typeof e.addEventListener ? e.addEventListener(t, n, void 0) : "function" == typeof e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
                    }

                    function $(e) {
                        return e ? (-1 < e.indexOf("://") ? e = e.split("://")[1] : "/" === e.charAt(0) && (e = e.slice(1)), e) : null
                    }

                    function K(e) {
                        var t;
                        return e = String(e), t = t || null, (e = document.querySelector('meta[property="og:' + e + '"]')) && e.content && (t = e.content), t
                    }

                    function q() {
                        var e = document.getElementsByTagName("meta"),
                            t = {};
                        if (!e || 0 === e.length) return t;
                        for (var n = {
                                hostedIOS: null,
                                hostedAndroid: null,
                                applinksIOS: null,
                                applinksAndroid: null,
                                twitterIOS: null,
                                twitterAndroid: null
                            }, r = 0; r < e.length; r++)
                            if ((e[r].getAttribute("name") || e[r].getAttribute("property")) && e[r].getAttribute("content")) {
                                var i = e[r].getAttribute("name"),
                                    a = e[r].getAttribute("property");
                                3 === (a = (i = i || a).split(":")).length && "branch" === a[0] && "deeplink" === a[1] && ("$ios_deeplink_path" === a[2] ? n.hostedIOS = $(e[r].getAttribute("content")) : "$android_deeplink_path" === a[2] ? n.hostedAndroid = $(e[r].getAttribute("content")) : t[a[2]] = e[r].getAttribute("content")), "al:ios:url" === i && (n.applinksIOS = $(e[r].getAttribute("content"))), "twitter:app:url:iphone" === i && (n.twitterIOS = $(e[r].getAttribute("content"))), "al:android:url" === i && (n.applinksAndroid = $(e[r].getAttribute("content"))), "twitter:app:url:googleplay" === i && (n.twitterAndroid = $(e[r].getAttribute("content")))
                            }
                        return n && "object" == typeof n && Object.keys(n).length && (n.hostedIOS ? t.$ios_deeplink_path = n.hostedIOS : n.applinksIOS ? t.$ios_deeplink_path = n.applinksIOS : n.twitterIOS && (t.$ios_deeplink_path = n.twitterIOS), n.hostedAndroid ? t.$android_deeplink_path = n.hostedAndroid : n.applinksAndroid ? t.$android_deeplink_path = n.applinksAndroid : n.twitterAndroid && (t.$android_deeplink_path = n.twitterAndroid), t.hasOwnProperty("$ios_deeplink_path") && t.hasOwnProperty("$android_deeplink_path") && t.$ios_deeplink_path === t.$android_deeplink_path && (t.$deeplink_path = t.$ios_deeplink_path)), t
                    }

                    function V() {
                        var e;
                        try {
                            navigator.languages && 0 < navigator.languages.length ? e = navigator.languages[0] : navigator.language && (e = navigator.language), e = e.substring(0, 2).toUpperCase()
                        } catch (t) {
                            e = null
                        }
                        return e
                    }

                    function J(e, t) {
                        var n = [];
                        return t.forEach((function(t) {
                            -1 === e.indexOf(t) && n.push(t)
                        })), n
                    }
                    var Y = ["purchase"],
                        X = {
                            missingPurchaseEvent: "event name is either missing, of the wrong type or not valid. Please specify 'purchase' as the event name.",
                            missingCommerceData: "commerce_data is either missing, of the wrong type or empty. Please ensure that commerce_data is constructed correctly.",
                            invalidKeysForRoot: "Please remove the following keys from the root of commerce_data: ",
                            invalidKeysForProducts: "Please remove the following keys from commerce_data.products: ",
                            invalidProductListType: "commerce_data.products must be an array of objects",
                            invalidProductType: "Each product in the products list must be an object"
                        };

                    function Q(e, t) {
                        if (!e || "string" != typeof e || -1 === Y.indexOf(e.toLowerCase())) return X.missingPurchaseEvent;
                        if (!t || "object" != typeof t || !Object.keys(t).length) return X.missingCommerceData;
                        var n = function(e) {
                            var t = "sku name price quantity brand category variant".split(" "),
                                n = J("common type transaction_id currency revenue revenue_in_usd exchange_rate shipping tax coupon affiliation persona products".split(" "), Object.keys(e));
                            if (n.length) return X.invalidKeysForRoot + n.join(", ");
                            var r, i = [];
                            if (e.hasOwnProperty("products")) {
                                if (!Array.isArray(e.products)) return X.invalidProductListType;
                                if (e.products.forEach((function(e) {
                                        "object" != typeof e && (r = X.invalidProductType), i = i.concat(J(t, Object.keys(e)))
                                    })), r) return r;
                                if (i.length) return X.invalidKeysForProducts + i.join(", ")
                            }
                            return null
                        }(t);
                        return n || null
                    }

                    function Z(e) {
                        return "string" != typeof e ? null : e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    }

                    function ee(e, t, n) {
                        if (null != n) {
                            if ("object" == typeof n && !Object.keys(n).length) return e;
                            e[t] = n
                        }
                        return e
                    }
                    var te = "ADD_TO_CART ADD_TO_WISHLIST VIEW_CART INITIATE_PURCHASE ADD_PAYMENT_INFO PURCHASE SPEND_CREDITS SEARCH VIEW_ITEM VIEW_ITEMS RATE SHARE COMPLETE_REGISTRATION COMPLETE_TUTORIAL ACHIEVE_LEVEL UNLOCK_ACHIEVEMENT LOGIN SUBSCRIBE".split(" "),
                        ne = "transaction_id revenue currency shipping tax coupon affiliation search_query description".split(" ");

                    function re(e, t) {
                        return !(!t || null === e && "object" === t) && ("array" === t ? Array.isArray(e) : typeof e === t && !Array.isArray(e))
                    }

                    function ie(e) {
                        var t = ee(t = {}, "http_origin", document.URL);
                        t = ee(t, "user_agent", navigator.userAgent), t = ee(t, "language", V()), t = ee(t, "screen_width", screen.width), t = ee(t, "screen_height", screen.height), t = ee(t, "http_referrer", document.referrer), t = ee(t, "browser_fingerprint_id", e.B), t = ee(t, "developer_identity", e.C), t = ee(t, "sdk", "web");
                        return ee(t, "sdk_version", "2.52.3")
                    }

                    function ae() {
                        return window.self !== window.top
                    }

                    function oe() {
                        var e = "true";
                        try {
                            window.top.location.search && (e = "true")
                        } catch (t) {
                            return !1
                        }
                        return "true" === e
                    }

                    function se(e) {
                        return e || (ae() ? oe() ? window.top.document.referrer : "" : document.referrer)
                    }

                    function ce(e) {
                        if (!re(e, "object") || !Object.keys(e).length) return {};
                        for (var t in e) e.hasOwnProperty(t) && (e[t] = re(e[t], "object") || re(e[t], "array") ? g(e[t]) : e[t].toString());
                        return e
                    }

                    function le(e, t) {
                        var n = e ? M({}, e) : {};
                        return t && 0 < Object.keys(t).length ? 0 < Object.keys(n).length ? M(n, t) : M({}, t) : n
                    }

                    function de(e) {
                        "" !== k && e.setAttribute("nonce", k)
                    }

                    function ue(e, t) {
                        return function(n, r, i) {
                            if (T) return !1;
                            if ("number" == typeof i || i)
                                if (0 === t) {
                                    if ("object" != typeof i) return I("API request $1, parameter $2 is not $3", [n, r, "an object"])
                                } else if (3 === t) {
                                if (!(i instanceof Array)) return I("API request $1, parameter $2 is not $3", [n, r, "an array"])
                            } else if (2 === t) {
                                if ("number" != typeof i) return I("API request $1, parameter $2 is not $3", [n, r, "a number"])
                            } else if (4 === t) {
                                if ("boolean" != typeof i) return I("API request $1, parameter $2 is not $3", [n, r, "a boolean"])
                            } else {
                                if ("string" != typeof i) return I("API request $1, parameter $2 is not $3", [n, r, "a string"]);
                                if (1 !== t && !t.test(i)) return I("API request $1, parameter $2 is not $3", [n, r, "in the proper format"])
                            } else if (e) return I("API request $1 missing parameter $2", [n, r]);
                            return !1
                        }
                    }
                    var pe = /^[0-9]{15,20}$/;

                    function he(e) {
                        return M(e, {
                            browser_fingerprint_id: ue(!0, pe),
                            identity_id: ue(!0, pe),
                            sdk: ue(!0, 1),
                            session_id: ue(!0, pe)
                        })
                    }
                    var fe = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/open",
                            method: "POST",
                            a: {
                                browser_fingerprint_id: ue(!1, pe),
                                alternative_browser_fingerprint_id: ue(!1, pe),
                                identity_id: ue(!1, pe),
                                link_identifier: ue(!1, 1),
                                sdk: ue(!1, 1),
                                options: ue(!1, 0),
                                initial_referrer: ue(!1, 1),
                                tracking_disabled: ue(!1, 4),
                                current_url: ue(!1, 1)
                            }
                        },
                        be = {
                            destination: "https://app.link",
                            endpoint: "/_r",
                            method: "GET",
                            Y: !0,
                            a: {
                                sdk: ue(!0, 1),
                                _t: ue(!1, pe),
                                branch_key: ue(!0, 1)
                            }
                        },
                        me = {
                            destination: "",
                            endpoint: "",
                            method: "GET",
                            f: {
                                link_url: ue(!0, 1)
                            },
                            a: {
                                click: ue(!0, 1)
                            }
                        },
                        ge = {
                            destination: "https://bnc.lt",
                            endpoint: "/c",
                            method: "POST",
                            f: {
                                link_url: ue(!0, 1)
                            },
                            a: {
                                sdk: ue(!1, 1),
                                phone: ue(!0, 1)
                            }
                        },
                        ve = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/referralcode",
                            method: "POST",
                            a: he({
                                amount: ue(!0, 2),
                                bucket: ue(!1, 1),
                                calculation_type: ue(!0, 2),
                                creation_source: ue(!0, 2),
                                expiration: ue(!1, 1),
                                location: ue(!0, 2),
                                prefix: ue(!1, 1),
                                type: ue(!0, 1)
                            })
                        },
                        _e = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/referralcode",
                            method: "POST",
                            f: {
                                code: ue(!0, 1)
                            },
                            a: he({})
                        },
                        ye = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/applycode",
                            method: "POST",
                            f: {
                                code: ue(!0, 1)
                            },
                            a: he({})
                        },
                        we = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/logout",
                            method: "POST",
                            a: he({
                                session_id: ue(!0, pe)
                            })
                        },
                        ke = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/profile",
                            method: "POST",
                            a: he({
                                identity_id: ue(!0, pe),
                                identity: ue(!0, 1)
                            })
                        },
                        xe = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/referrals",
                            method: "GET",
                            f: {
                                identity_id: ue(!0, pe)
                            },
                            a: he({})
                        },
                        Se = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/credithistory",
                            method: "GET",
                            a: he({
                                begin_after_id: ue(!1, pe),
                                bucket: ue(!1, 1),
                                direction: ue(!1, 2),
                                length: ue(!1, 2),
                                link_click_id: ue(!1, pe)
                            })
                        },
                        Ee = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/credits",
                            method: "GET",
                            a: he({
                                branch_key: ue(!0, 1),
                                identity: ue(!0, 1)
                            })
                        },
                        Ce = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/redeem",
                            method: "POST",
                            a: he({
                                amount: ue(!0, 2),
                                bucket: ue(!0, 1),
                                identity_id: ue(!0, pe)
                            })
                        },
                        Te = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/url",
                            method: "POST",
                            Aa: "obj",
                            a: he({
                                alias: ue(!1, 1),
                                campaign: ue(!1, 1),
                                channel: ue(!1, 1),
                                data: ue(!1, 1),
                                feature: ue(!1, 1),
                                identity_id: ue(!0, pe),
                                stage: ue(!1, 1),
                                tags: ue(!1, 3),
                                type: ue(!1, 2),
                                source: ue(!1, 1),
                                instrumentation: ue(!1, 1)
                            })
                        },
                        Oe = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/deepview",
                            Y: !0,
                            method: "POST",
                            a: he({
                                campaign: ue(!1, 1),
                                _t: ue(!1, pe),
                                channel: ue(!1, 1),
                                data: ue(!0, 1),
                                feature: ue(!1, 1),
                                link_click_id: ue(!1, 1),
                                open_app: ue(!1, 4),
                                append_deeplink_path: ue(!1, 4),
                                stage: ue(!1, 1),
                                tags: ue(!1, 3),
                                deepview_type: ue(!0, 1),
                                source: ue(!0, 1)
                            })
                        },
                        Ae = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/has-app",
                            method: "GET",
                            a: {
                                browser_fingerprint_id: ue(!0, pe),
                                instrumentation: ue(!1, 1)
                            }
                        },
                        Re = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/event",
                            method: "POST",
                            a: he({
                                event: ue(!0, 1),
                                metadata: ue(!0, 0),
                                initial_referrer: ue(!1, 1),
                                tracking_disabled: ue(!1, 4)
                            })
                        },
                        Pe = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/event",
                            method: "POST",
                            a: he({
                                event: ue(!0, 1),
                                metadata: ue(!1, 0),
                                initial_referrer: ue(!1, 1),
                                commerce_data: ue(!0, 0)
                            })
                        },
                        Ie = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v2/event/standard",
                            method: "POST",
                            a: {
                                name: ue(!0, 1),
                                user_data: ue(!0, 1),
                                custom_data: ue(!1, 1),
                                event_data: ue(!1, 1),
                                content_items: ue(!1, 1),
                                customer_event_alias: ue(!1, 1)
                            }
                        },
                        je = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v2/event/custom",
                            method: "POST",
                            a: {
                                name: ue(!0, 1),
                                user_data: ue(!0, 1),
                                custom_data: ue(!1, 1)
                            }
                        },
                        De = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/pageview",
                            method: "POST",
                            a: he({
                                event: ue(!0, 1),
                                metadata: ue(!1, 0),
                                initial_referrer: ue(!1, 1),
                                tracking_disabled: ue(!1, 4),
                                branch_view_id: ue(!1, 1),
                                no_journeys: ue(!1, 4),
                                user_language: ue(!1, 1),
                                open_app: ue(!1, 4),
                                has_app_websdk: ue(!1, 4),
                                source: ue(!1, 1),
                                feature: ue(!1, 1),
                                is_iframe: ue(!1, 4),
                                data: ue(!1, 0),
                                callback_string: ue(!1, 1),
                                journey_displayed: ue(!1, 4),
                                audience_rule_id: ue(!1, 1),
                                journey_dismissals: ue(!1, 0)
                            })
                        },
                        Le = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/dismiss",
                            method: "POST",
                            a: he({
                                event: ue(!0, 1),
                                metadata: ue(!1, 0),
                                initial_referrer: ue(!1, 1),
                                tracking_disabled: ue(!1, 4),
                                branch_view_id: ue(!1, 1),
                                no_journeys: ue(!1, 4),
                                user_language: ue(!1, 1),
                                open_app: ue(!1, 4),
                                has_app_websdk: ue(!1, 4),
                                source: ue(!1, 1),
                                feature: ue(!1, 1),
                                is_iframe: ue(!1, 4),
                                data: ue(!1, 0),
                                callback_string: ue(!1, 1),
                                journey_displayed: ue(!1, 4),
                                audience_rule_id: ue(!1, 1),
                                journey_dismissals: ue(!1, 0)
                            })
                        },
                        Be = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/cpid",
                            method: "POST",
                            a: {
                                user_data: ue(!0, 1)
                            }
                        },
                        Me = {
                            destination: "https://api2.branch.io",
                            endpoint: "/v1/cpid/latd",
                            method: "POST",
                            a: {
                                user_data: ue(!0, 1)
                            }
                        };

                    function Ne(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n;
                            if ((n = "function" == typeof(n = this[e[t]]) ? n() : n).isEnabled()) return n.u = {}, n
                        }
                    }

                    function ze(e) {
                        return "branch_session" === e || "branch_session_first" === e ? e : "BRANCH_WEBSDK_KEY" + e
                    }

                    function He(e) {
                        return "true" === e || "false" !== e && e
                    }

                    function Fe(e) {
                        return "branch_session" === e || "branch_session_first" === e || 0 === e.indexOf("BRANCH_WEBSDK_KEY")
                    }

                    function We(e) {
                        var t = (e = e.trim()).indexOf("=");
                        return {
                            name: e.substring(0, t),
                            value: He(e.substring(t + 1, e.length))
                        }
                    }

                    function Ge(e) {
                        var t;
                        try {
                            t = e && localStorage ? localStorage : sessionStorage
                        } catch (n) {
                            return {
                                isEnabled: function() {
                                    return !1
                                }
                            }
                        }
                        return {
                            getAll: function() {
                                if (void 0 === t) return null;
                                var e, n = null;
                                for (e in t) e.indexOf("BRANCH_WEBSDK_KEY") || (null === n && (n = {}), n[e.replace("BRANCH_WEBSDK_KEY", "")] = He(t.getItem(e)));
                                return n
                            },
                            get: function(e, n) {
                                return He(n && localStorage ? localStorage.getItem(ze(e)) : t.getItem(ze(e)))
                            },
                            set: function(e, n, r) {
                                r && localStorage ? localStorage.setItem(ze(e), n) : t.setItem(ze(e), n)
                            },
                            remove: function(e, n) {
                                n && localStorage ? localStorage.removeItem(ze(e)) : t.removeItem(ze(e))
                            },
                            clear: function() {
                                Object.keys(t).forEach((function(e) {
                                    e.indexOf("BRANCH_WEBSDK_KEY") || t.removeItem(e)
                                }))
                            },
                            isEnabled: function() {
                                try {
                                    return t.setItem("test", ""), t.removeItem("test"), !0
                                } catch (n) {
                                    return !1
                                }
                            }
                        }
                    }

                    function Ue(e, t) {
                        try {
                            return m(e.get(t ? "branch_session_first" : "branch_session", t)) || null
                        } catch (n) {
                            return null
                        }
                    }

                    function $e(e, t, n) {
                        e.set("branch_session", u(t)), n && e.set("branch_session_first", u(t), !0)
                    }

                    function Ke(e, t) {
                        if (t) {
                            var n = M(n = Ue(e) || {}, t);
                            e.set("branch_session", u(n))
                        }
                    }

                    function qe() {}

                    function Ve(e, t, n) {
                        if (void 0 === t) return "";
                        var r = [];
                        if (t instanceof Array) {
                            for (e = 0; e < t.length; e++) r.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[e]));
                            return r.join("&")
                        }
                        for (var i in t) t.hasOwnProperty(i) && (t[i] instanceof Array || "object" == typeof t[i] ? r.push(Ve(e, t[i], n ? n + "." + i : i)) : r.push(encodeURIComponent(n ? n + "." + i : i) + "=" + encodeURIComponent(t[i])));
                        return r.join("&")
                    }

                    function Je(e, t, n, r, i) {
                        var a = Date.now(),
                            o = E;
                        !e.g && F() && e.g++;
                        var s = "branch_callback__" + e.g++;
                        e = 0 <= t.indexOf("branch.io") ? "&data=" : "&post_data=", n = "POST" === r ? encodeURIComponent(G(u(n))) : "";
                        var c = window.setTimeout((function() {
                            window[s] = function() {}, ee(x, o, C(a)), i(Error("Request timed out"), null, 504)
                        }), w);
                        window[s] = function(e) {
                                window.clearTimeout(c), i(null, e)
                            },
                            function(e, t, n) {
                                var r = document.createElement("script");
                                r.type = "text/javascript", r.async = !0, r.src = e, de(r), !(e = document.getElementsByTagName("head")) || 1 > e.length ? "function" == typeof t && t() : (e[0].appendChild(r), "function" == typeof t && U(r, "error", t), "function" == typeof n && U(r, "load", n))
                            }(t + (0 > t.indexOf("?") ? "?" : "") + (n ? e + n : "") + (0 <= t.indexOf("/c/") ? "&click=1" : "") + "&callback=" + s, (function() {
                                i(Error("Request blocked by client, probably adblock"), null)
                            }), (function() {
                                ee(x, o, C(a));
                                try {
                                    "function" == typeof this.remove ? this.remove() : this.parentNode.removeChild(this)
                                } catch (e) {}
                                delete window[s]
                            }))
                    }

                    function Ye(e, t, n, r, i) {
                        function a() {
                            r.get("use_jsonp") || t.Y ? Je(e, l, n, t.method, o) : function(e, t, n, r, i, a) {
                                var o = Date.now(),
                                    s = E,
                                    c = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                                c.ontimeout = function() {
                                    ee(x, s, C(o)), a(Error("Request timed out"), null, 504)
                                }, c.onerror = function(e) {
                                    a(Error(e.error || "Error in API: " + c.status), null, c.status)
                                }, c.onreadystatechange = function() {
                                    var e;
                                    if (4 === c.readyState)
                                        if (ee(x, s, C(o)), 200 === c.status) {
                                            try {
                                                e = m(c.responseText)
                                            } catch (d) {
                                                e = {}
                                            }
                                            a(null, e, c.status)
                                        } else 402 === c.status ? a(Error("Not enough credits to redeem."), null, c.status) : "4" !== c.status.toString().substring(0, 1) && "5" !== c.status.toString().substring(0, 1) || (c.responseURL && c.responseURL.includes("v2/event") ? a(c.responseText, null, c.status) : a(Error("Error in API: " + c.status), null, c.status))
                                };
                                try {
                                    c.open(r, t, !0), c.timeout = w, c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.send(n)
                                } catch (l) {
                                    i.set("use_jsonp", !0), Je(e, t, n, r, a)
                                }
                            }(e, l, d, t.method, r, o)
                        }

                        function o(e, t, n) {
                            e && 0 < u && "5" === (n || "").toString().substring(0, 1) ? (u--, window.setTimeout((function() {
                                a()
                            }), y)) : i(e, t)
                        }
                        if (E = "/v1/pageview" === t.endpoint && n && n.journey_displayed ? t.endpoint + "-1-brtt" : t.endpoint + "-brtt", ("/v1/url" === t.endpoint || "/v1/has-app" === t.endpoint) && 1 < Object.keys(x).length && (delete x["-brtt"], n.instrumentation = g(M({}, x)), x = {}), T)
                            for (var s = ["browser_fingerprint_id", "alternative_browser_fingerprint_id", "identity_id", "session_id"], c = 0; c < s.length; c++) n.hasOwnProperty(s[c]) && delete n[s[c]];
                        if ((s = function(e, t, n) {
                                function r(e, n) {
                                    if (void 0 === n && (n = {}), e.branch_key && c.test(e.branch_key)) return n.branch_key = e.branch_key, n;
                                    if (e.app_id && s.test(e.app_id)) return n.app_id = e.app_id, n;
                                    if (!e.instrumentation) throw Error(I("API request $1 missing parameter $2", [t.endpoint, "branch_key or app_id"]));
                                    n.instrumentation = e.instrumentation
                                }
                                var i, a, o = t.destination + t.endpoint,
                                    s = /^[0-9]{15,20}$/,
                                    c = /key_(live|test)_[A-Za-z0-9]{32}/;
                                if ("/v1/has-app" === t.endpoint) try {
                                    t.f = r(n, t.f)
                                } catch (d) {
                                    return {
                                        error: d.message
                                    }
                                }
                                if (void 0 !== t.f)
                                    for (i in t.f)
                                        if (t.f.hasOwnProperty(i)) {
                                            if (a = "function" == typeof t.f[i] ? t.f[i](t.endpoint, i, n[i]) : a) return {
                                                error: a
                                            };
                                            o += "/" + n[i]
                                        }
                                var l = {};
                                if (void 0 !== t.a && "/v1/pageview" !== t.endpoint && "/v1/dismiss" !== t.endpoint) {
                                    for (i in t.a)
                                        if (t.a.hasOwnProperty(i)) {
                                            if (a = t.a[i](t.endpoint, i, n[i])) return {
                                                error: a
                                            };
                                            void 0 !== (a = n[i]) && "" !== a && null !== a && (l[i] = a)
                                        }
                                } else "/v1/pageview" !== t.endpoint && "/v1/dismiss" !== t.endpoint || M(l, n);
                                if ("POST" === t.method || "/v1/credithistory" === t.endpoint) try {
                                    n = r(n, l)
                                } catch (d) {
                                    return {
                                        error: d.message
                                    }
                                }
                                return "/v1/event" === t.endpoint && (l.metadata = g(l.metadata || {}), l.hasOwnProperty("commerce_data") && (l.commerce_data = g(l.commerce_data || {}))), ("/v1/pageview" === t.endpoint || "/v1/dismiss" === t.endpoint) && l.metadata && (l.metadata = g(l.metadata || {})), "/v1/open" === t.endpoint && (l.options = g(l.options || {})), {
                                    data: Ve(e, l, ""),
                                    url: o.replace(/^\//, "")
                                }
                            }(e, t, n)).error) return i(Error(g({
                            message: s.error,
                            endpoint: t.endpoint,
                            data: n
                        })));
                        var l, d = "";
                        "GET" === t.method ? l = s.url + "?" + s.data : (l = s.url, d = s.data);
                        var u = _;
                        if (T && function(e, t) {
                                var n = document.createElement("a");
                                if (n.href = e, "/" != (n = n.pathname)[0] && (n = "/" + n), !(n = O[n])) return !0;
                                if (0 < Object.keys(n).length) {
                                    if (!t) return !0;
                                    for (var r in n) {
                                        var i = new RegExp(n[r]);
                                        if (!t.hasOwnProperty(r) || !i.test(t[r])) return !0
                                    }
                                }
                                return !1
                            }(l, n)) return A ? o(Error("Requested operation cannot be completed since tracking is disabled"), null, 300) : o(null, {}, 200);
                        a()
                    }

                    function Xe(e) {
                        e && e.parentNode.removeChild(e)
                    }

                    function Qe(e, t) {
                        e && !e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)")) && (e.className += " " + t)
                    }

                    function Ze(e) {
                        var t = document.body;
                        t && t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)")) && (t.className = t.className.replace(new RegExp("(\\s|^)" + e + "(\\s|$)"), " "))
                    }

                    function et(e) {
                        return document.body.currentStyle ? document.body.currentStyle[function(e) {
                            return e.replace(/(\-\w)/g, (function(e) {
                                return e[1].toUpperCase()
                            }))
                        }(e)] : window.getComputedStyle(document.body).getPropertyValue(e)
                    }

                    function tt(e) {
                        function t(e) {
                            function n() {
                                return Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100
                            }

                            function r() {
                                return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 100
                            }
                            if (!e) return 0;
                            var i = e.replace(/[0-9,\.]/g, "");
                            e = e.match(/\d+/g);
                            var a = parseInt(0 < e.length ? e[0] : "0", 10);
                            return parseInt({
                                px: function(e) {
                                    return e
                                },
                                em: function(e) {
                                    return document.body.currentStyle ? e * t(document.body.currentStyle.fontSize) : e * parseFloat(window.getComputedStyle(document.body).fontSize)
                                },
                                rem: function(e) {
                                    return document.documentElement.currentStyle ? e * t(document.documentElement.currentStyle.fontSize) : e * parseFloat(window.getComputedStyle(document.documentElement).fontSize)
                                },
                                vw: function(e) {
                                    return e * r()
                                },
                                vh: function(e) {
                                    return e * n()
                                },
                                vmin: function(e) {
                                    return e * Math.min(n(), r())
                                },
                                vmax: function(e) {
                                    return e * Math.max(n(), r())
                                },
                                "%": function() {
                                    return document.body.clientWidth / 100 * a
                                }
                            }[i](a), 10)
                        }
                        return (t("76px") + t(e)).toString() + "px"
                    }

                    function nt(e, t) {
                        return "#branch-banner-iframe { position: " + ("top" !== t || e ? "fixed" : "absolute") + "; }\n"
                    }

                    function rt(e, t) {
                        var n;
                        if (e.w || e.L) {
                            if (e.w) {
                                n = "";
                                for (var r = 0; 5 > r; r++) n += '<span class="star"><svg class="star" fill="#555555" height="12" viewBox="3 2 20 19" width="12"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/><path d="M0 0h24v24H0z" fill="none"/><foreignObject display="none"><span class="star">☆</span></foreignObject></svg>', e.w > r && (n += r + 1 > e.w && e.w % 1 ? '<span class="half"><svg fill="#555555" height="12" viewBox="3 2 20 19" width="12"><defs><path d="M0 0h24v24H0V0z" id="a"/></defs><clipPath id="b"><use overflow="visible" xlink:href="#a"/></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg><foreignObject display="none"><span class="half">★</span></foreignObject></span>' : '<span class="full"><svg fill="#555555" height="12" viewBox="3 2 20 19" width="12"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/><foreignObject display="none"><span class="full">★</span></foreignObject></svg> </span>'), n += "</span>";
                                n = '<span class="stars">' + n + "</span>"
                            } else n = "";
                            n = '<div class="reviews">' + n + (e.L ? '<span class="review-count">' + e.L + "</span>" : "") + "</div>"
                        } else n = "";
                        return '<div class="content' + (e.theme ? " theme-" + e.theme : "") + '"><div class="right">' + t + '</div><div class="left">' + (e.ha ? "" : '<div id="branch-banner-close" class="branch-animation" aria-label="Close">&times;</div>') + '<div class="icon"><img src="' + e.icon + '" alt="Application icon"></div><div class="details vertically-align-middle"><div class="title">' + e.title + "</div>" + n + '<div class="description">' + e.description + "</div></div></div></div>"
                    }

                    function it(e, t, n, r) {
                        function i() {
                            o(), l.style.background = "#FFD4D4", c.className = "error", setTimeout((function() {
                                l.style.background = "#FFFFFF", c.className = ""
                            }), 2e3)
                        }

                        function a() {
                            (s = e.createElement("div")).className = "branch-icon-wrapper", s.id = "branch-checkmark", s.style = "opacity: 0;", s.innerHTML = window.ActiveXObject ? '<span class="checkmark">&#x2713;</span>' : '<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 98.5 98.5" enable-background="new 0 0 98.5 98.5" xml:space="preserve"><path class="checkmark" fill="none" stroke-width="8" stroke-miterlimit="10" d="M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"/></svg>', u.appendChild(s), l.style.opacity = "0", c.style.opacity = "0", d.style.opacity = "0", setTimeout((function() {
                                s.style.opacity = "1"
                            }), 20), c.value = ""
                        }

                        function o() {
                            l.removeAttribute("disabled"), c.removeAttribute("disabled"), l.style.opacity = "1", c.style.opacity = "1", d.style.opacity = "0"
                        }
                        var s, c = e.getElementById("branch-sms-phone"),
                            l = e.getElementById("branch-sms-send"),
                            d = e.getElementById("branch-loader-wrapper"),
                            u = e.getElementById("branch-sms-form-container");
                        if (c) {
                            var p = c.value;
                            /^\d{7,}$/.test(p.replace(/[\s()+\-\.]|ext/gi, "")) ? (rn(t, "willSendBannerSMS"), l.setAttribute("disabled", ""), c.setAttribute("disabled", ""), l.style.opacity = ".4", c.style.opacity = ".4", d.style.opacity = "1", c.className = "", t.sendSMS(p, r, n, (function(e) {
                                e ? (rn(t, "sendBannerSMSError"), i()) : (rn(t, "didSendBannerSMS"), a(), setTimeout((function() {
                                    u.removeChild(s), o()
                                }), 3e3))
                            }))) : i()
                        }
                    }

                    function at(e, t, n, r) {
                        function i(e, n) {
                            "function" == typeof e && (n = e, e = {}), e = e || {}, "top" === t.position ? o.style.top = "-76px" : "bottom" === t.position && (o.style.bottom = "-76px"), "number" == typeof t.K ? r.set("hideBanner", function(e) {
                                var t = new Date;
                                return t.setDate(t.getDate() + e)
                            }(t.K), !0) : r.set("hideBanner", !0, !0), e.X ? ("top" === t.position ? document.body.style.marginTop = l : "bottom" === t.position && (document.body.style.marginBottom = u), Ze("branch-banner-is-active"), Xe(o), Xe(document.getElementById("branch-css")), n()) : (setTimeout((function() {
                                Xe(o), Xe(document.getElementById("branch-css")), n()
                            }), 270), setTimeout((function() {
                                "top" === t.position ? document.body.style.marginTop = l : "bottom" === t.position && (document.body.style.marginBottom = u), Ze("branch-banner-is-active")
                            }), 20))
                        }

                        function a() {
                            "top" === t.position ? o.style.top = "0" : "bottom" === t.position && (o.style.bottom = "0"), rn(e, "didShowBanner")
                        }
                        if (! function(e, t) {
                                var n = e.get("hideBanner", !0);
                                if (t.pa && navigator && Number(navigator.doNotTrack)) return !1;
                                try {
                                    "string" == typeof n && (n = m(n))
                                } catch (i) {
                                    n = !1
                                }
                                n = "number" == typeof n ? new Date >= new Date(n) : !n;
                                var r = t.K;
                                return "number" == typeof r && (r = !1), !document.getElementById("branch-banner") && !document.getElementById("branch-banner-iframe") && (n || r) && (t.ra && !H() || t.O && "android" === H() || t.sa && "ipad" === H() || t.T && "ios" === H() || t.P && "blackberry" === H() || t.S && "windows_phone" === H() || t.R && "kindle" === H())
                            }(r, t)) return rn(e, "willNotShowBanner"), null;
                        rn(e, "willShowBanner");
                        var o = function(e, t) {
                            var n = '<div id="branch-sms-form-container">' + (H() ? '<a id="branch-mobile-action" class="button" href="#" target="_parent">' + ((Ue(t) || {}).has_app ? e.ma : e.ia) + "</a>" : '<div class="branch-icon-wrapper" id="branch-loader-wrapper" style="opacity: 0;"><div id="branch-spinner"></div></div><div id="branch-sms-block"><form id="sms-form"><input type="phone" aria-label="Enter phone number" class="branch-animation" name="branch-sms-phone" id="branch-sms-phone" placeholder="' + e.oa + '"><button type="submit" id="branch-sms-send" class="branch-animation button">' + e.qa + "</button></form></div>") + "</div>";
                            if (e.D) {
                                var r = document.createElement("iframe");
                                r.src = "about:blank", r.style.overflow = "hidden", r.scrolling = "no", r.id = "branch-banner-iframe", r.className = "branch-animation", de(r), document.body.appendChild(r);
                                var i = H();
                                n = '<html><head></head><body class="' + ("ios" === i || "ipad" === i ? "branch-banner-ios" : "android" === i ? "branch-banner-android" : "branch-banner-desktop") + '"><div id="branch-banner" class="branch-animation">' + rt(e, n) + "</body></html>";
                                r.contentWindow.document.open(), r.contentWindow.document.write(n), r.contentWindow.document.close()
                            } else(r = document.createElement("div")).id = "branch-banner", r.className = "branch-animation", r.innerHTML = rt(e, n), document.body.appendChild(r);
                            return r
                        }(t, r);
                        ! function(e, t) {
                            var n = ".branch-banner-is-active { -webkit-transition: all 0.375s ease; transition: all 00.375s ease; }\n#branch-banner { width:100%; z-index: 99999; font-family: Helvetica Neue, Sans-serif; -webkit-font-smoothing: antialiased; -webkit-user-select: none; -moz-user-select: none; user-select: none; -webkit-transition: all 0.25s ease; transition: all 00.25s ease; }\n#branch-banner .button{ border: 1px solid " + (e.buttonBorderColor || ("dark" === e.theme ? "transparent" : "#ccc")) + "; background: " + (e.buttonBackgroundColor || "#fff") + "; color: " + (e.buttonFontColor || "#000") + "; cursor: pointer; margin-top: 0px; font-size: 14px; display: inline-block; margin-left: 5px; font-weight: 400; text-decoration: none;  border-radius: 4px; padding: 6px 12px; transition: all .2s ease;}\n#branch-banner .button:hover {  border: 1px solid " + (e.buttonBorderColorHover || ("dark" === e.theme ? "transparent" : "#BABABA")) + "; background: " + (e.buttonBackgroundColorHover || "#E0E0E0") + "; color: " + (e.buttonFontColorHover || "#000") + ";}\n#branch-banner .button:focus { outline: none; }\n#branch-banner * { margin-right: 4px; position: relative; line-height: 1.2em; }\n#branch-banner-close { font-weight: 400; cursor: pointer; float: left; z-index: 2;padding: 0 5px 0 5px; margin-right: 0; }\n#branch-banner .content { width:100%; overflow: hidden; height: 76px; background: rgba(255, 255, 255, 0.95); color: #333; " + ("top" === e.position ? "border-bottom" : "border-top") + ': 1px solid #ddd; }\n#branch-banner-close { color: #000; font-size: 24px; top: 14px; opacity: .5; transition: opacity .3s ease; }\n#branch-banner-close:hover { opacity: 1; }\n#branch-banner .title { font-size: 18px; font-weight:bold; color: #555; }\n#branch-banner .description { font-size: 12px; font-weight: normal; color: #777; max-height: 30px; overflow: hidden; }\n#branch-banner .icon { float: left; padding-bottom: 40px; margin-right: 10px; margin-left: 5px; }\n#branch-banner .icon img { width: 63px; height: 63px; margin-right: 0; }\n#branch-banner .reviews { font-size:13px; margin: 1px 0 3px 0; color: #777; }\n#branch-banner .reviews .star { display:inline-block; position: relative; margin-right:0; }\n#branch-banner .reviews .star span { display: inline-block; margin-right: 0; color: #555; position: absolute; top: 0; left: 0; }\n#branch-banner .reviews .review-count { font-size:10px; }\n#branch-banner .reviews .star .half { width: 50%; overflow: hidden; display: block; }\n#branch-banner .content .left { padding: 6px 5px 6px 5px; }\n#branch-banner .vertically-align-middle { top: 50%; transform: translateY(-50%); -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); }\n#branch-banner .details > * { display: block; }\n#branch-banner .content .left { height: 63px; }\n#branch-banner .content .right { float: right; height: 63px; margin-bottom: 50px; padding-top: 22px; z-index: 1; }\n#branch-banner .right > div { float: left; }\n#branch-banner-action { top: 17px; }\n#branch-banner .content:after { content: ""; position: absolute; left: 0; right: 0; top: 100%; height: 1px; background: rgba(0, 0, 0, 0.2); }\n#branch-banner .theme-dark.content { background: rgba(51, 51, 51, 0.95); }\n#branch-banner .theme-dark #branch-banner-close{ color: #fff; text-shadow: 0 1px 1px rgba(0, 0, 0, .15); }\n#branch-banner .theme-dark .details { text-shadow: 0 1px 1px rgba(0, 0, 0, .15); }\n#branch-banner .theme-dark .title { color: #fff; }\n#branch-banner .theme-dark .description { color: #fff; }\n#branch-banner .theme-dark .reviews { color: #888; }\n#branch-banner .theme-dark .reviews .star span{ color: #fff; }\n#branch-banner .theme-dark .reviews .review-count{ color: #fff; }\n',
                                r = H();
                            "ios" !== r && "ipad" !== r || !e.T ? "android" === r && e.O ? n += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n#branch-banner #branch-banner-close,#branch-banner .theme-dark #branch-banner-close { height:17px; width: 17px; text-align: center; font-size: 15px; top: 24px;  border-radius:14px; border:0; line-height:14px; color:#b1b1b3; background:#efefef; padding: 0; opacity: 1; }\n#branch-banner .button { top: 0; text-decoration:none; border-bottom: 3px solid #A4C639; padding: 0 10px; height: 24px; line-height: 24px; text-align: center; color: #fff; margin-top: 2px;  font-weight: bold; background-color: #A4C639; border-radius: 5px; }\n#branch-banner .button:hover { border-bottom:3px solid #8c9c29; background-color: #c1d739; }\n" : "blackberry" === r && e.P ? n += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n" : "windows_phone" === r && e.S ? n += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n" : "kindle" === r && e.R ? n += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n" : (n += "#branch-banner { position: fixed; min-width: 600px; }\n#branch-sms-block * { vertical-align: bottom; font-size: 15px; }\n#branch-sms-block { display: inline-block; }\n#branch-banner input{ border: 1px solid #ccc;  font-weight: 400;  border-radius: 4px; height: 30px; padding: 5px 7px 4px; width: 145px; font-size: 14px;}\n#branch-banner input:focus { outline: none; }\n#branch-banner input.error { color: rgb(194, 0, 0); border-color: rgb(194, 0, 0); }\n#branch-banner .branch-icon-wrapper { width:25px; height: 25px; vertical-align: middle; display: inline-block; margin-top: -18px; }\n@keyframes branch-spinner { 0% { transform: rotate(0deg); -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); } 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); } }\n@-webkit-keyframes branch-spinner { 0% { transform: rotate(0deg); -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); } 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); } }\n#branch-spinner { -webkit-animation: branch-spinner 1s ease-in-out infinite; animation: branch-spinner 1s ease-in-out infinite; transition: all 0.7s ease-in-out; border:2px solid #ddd; border-bottom-color:#428bca; width:80%; height:80%; border-radius:50%; -webkit-font-smoothing: antialiased !important; }\n#branch-banner .theme-dark input { border-color: transparent; }\n", n = window.ActiveXObject ? n + "#branch-banner .checkmark { color: #428bca; font-size: 22px; }\n" : n + "#branch-banner .checkmark { stroke: #428bca; stroke-dashoffset: 745.74853515625; stroke-dasharray: 745.74853515625; -webkit-animation: dash 2s ease-out forwards; animation: dash 2s ease-out forwards; }\n@-webkit-keyframes dash { 0% { stroke-dashoffset: 745.748535 15625; } 100% { stroke-dashoffset: 0; } }\n@keyframes dash { 0% { stroke-dashoffset: 745.74853515625; } 100% { stroke-dashoffset: 0; } }\n") : n += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n", n += e.ea, e.D && (n += "body { margin: 0; }\n", (r = document.createElement("style")).type = "text/css", r.id = "branch-iframe-css", de(r), r.innerHTML = "body { -webkit-transition: all 0.375s ease; transition: all 00.375s ease; }\n#branch-banner-iframe { box-shadow: 0 0 5px rgba(0, 0, 0, .35); width: 1px; min-width:100%; left: 0; right: 0; border: 0; height: 76px; z-index: 99999; -webkit-transition: all 0.25s ease; transition: all 00.25s ease; }\n" + (H() ? nt(e.la, e.position) : nt(e.fa, e.position)), (document.head || document.getElementsByTagName("head")[0]).appendChild(r)), (r = document.createElement("style")).type = "text/css", r.id = "branch-css", r.innerHTML = n, de(r), (n = (n = e.D ? t.contentWindow.document : document).head || n.getElementsByTagName("head")[0]) && "function" == typeof n.appendChild && n.appendChild(r), "top" === e.position ? t.style.top = "-76px" : "bottom" === e.position && (t.style.bottom = "-76px")
                        }(t, o), n.channel = n.channel || "app banner";
                        var s = t.D ? o.contentWindow.document : document;
                        H() ? (t.open_app = t.na, t.append_deeplink_path = t.ba, t.make_new_link = t.ka, t.deepview_type = "banner", e.deepview(n, t), (c = s.getElementById("branch-mobile-action")) && (c.onclick = function(t) {
                            t.preventDefault(), e.deepviewCta()
                        })) : s.getElementById("sms-form") ? s.getElementById("sms-form").addEventListener("submit", (function(r) {
                            r.preventDefault(), it(s, e, t, n)
                        })) : o.onload = function() {
                            (s = o.contentWindow.document).getElementById("sms-form") && s.getElementById("sms-form").addEventListener("submit", (function(r) {
                                r.preventDefault(), it(s, e, t, n)
                            }))
                        };
                        var c = et("margin-top"),
                            l = document.body.style.marginTop,
                            d = et("margin-bottom"),
                            u = document.body.style.marginBottom,
                            p = s.getElementById("branch-banner-close");
                        return p && (p.onclick = function(t) {
                            t.preventDefault(), rn(e, "willCloseBanner"), i({}, (function() {
                                rn(e, "didCloseBanner")
                            }))
                        }), Qe(document.body, "branch-banner-is-active"), "top" === t.position ? document.body.style.marginTop = tt(c) : "bottom" === t.position && (document.body.style.marginBottom = tt(d)), t.X ? a() : setTimeout(a, 20), i
                    }
                    Ne.prototype.local = function() {
                        return Ge(!0)
                    }, Ne.prototype.session = function() {
                        return Ge(!1)
                    }, Ne.prototype.cookie = function() {
                        return function() {
                            function e(e, t) {
                                t && (e = ze(e)), document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"
                            }
                            return {
                                getAll: function() {
                                    for (var e = {}, t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                                        var r = We(t[n]);
                                        r && r.hasOwnProperty("name") && r.hasOwnProperty("value") && Fe(r.name) && (e[r.name.replace("BRANCH_WEBSDK_KEY", "")] = r.value)
                                    }
                                    return e
                                },
                                get: function(e) {
                                    e = ze(e);
                                    for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                                        var r = We(t[n]);
                                        if (r && r.hasOwnProperty("name") && r.hasOwnProperty("value") && r.name === e) return r.value
                                    }
                                    return null
                                },
                                set: function(e, t) {
                                    document.cookie = ze(e) + "=" + t + "; path=/"
                                },
                                remove: function(t) {
                                    e(t, !0)
                                },
                                clear: function() {
                                    for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                                        var r = We(t[n]);
                                        r && r.hasOwnProperty("name") && Fe(r.name) && e(r.name, !1)
                                    }
                                },
                                isEnabled: function() {
                                    return navigator.cookieEnabled
                                }
                            }
                        }()
                    }, Ne.prototype.pojo = {
                        getAll: function() {
                            return this.u
                        },
                        get: function(e) {
                            return this.u[e] || null
                        },
                        set: function(e, t) {
                            this.u[e] = t
                        },
                        remove: function(e) {
                            delete this.u[e]
                        },
                        clear: function() {
                            this.u = {}
                        },
                        isEnabled: function() {
                            return !0
                        }
                    }, qe.prototype.g = 0;
                    var ot, st = 1,
                        ct = "top",
                        lt = "absolute",
                        dt = "76px",
                        ut = !1,
                        pt = !1,
                        ht = [],
                        ft = !1,
                        bt = window.innerHeight,
                        mt = window.innerWidth;
                    window.innerHeight < window.innerWidth && (bt = window.innerWidth, mt = window.innerHeight);
                    var gt = 0,
                        vt = 0,
                        _t = /<script type="application\/json">((.|\s)*?)<\/script>/,
                        yt = /<script type="text\/javascript">((.|\s)*?)<\/script>/,
                        wt = /<style type="text\/css" id="branch-css">((.|\s)*?)<\/style>/,
                        kt = /<style type="text\/css" id="branch-iframe-css">((.|\s)*?)<\/style>/,
                        xt = /#branch-banner-spacer {((.|\s)*?)}/,
                        St = /margin-bottom: (.*?);/,
                        Et = null,
                        Ct = null,
                        Tt = !1,
                        Ot = !1,
                        At = !1,
                        Rt = !1,
                        Pt = !1,
                        It = "",
                        jt = [],
                        Dt = null;

                    function Lt(e) {
                        if (e = e.match(_t)) return m(e[1])
                    }

                    function Bt(e) {
                        var t = document.createElement("style");
                        t.type = "text/css", t.id = "branch-iframe-css";
                        var n = +(gt = et("margin-top")).slice(0, -2),
                            r = +(vt = et("margin-bottom")).slice(0, -2),
                            i = +dt.slice(0, -2);
                        e || ("top" === ct ? document.body.style.marginTop = (+i + n).toString() + "px" : "bottom" === ct && (document.body.style.marginBottom = (+i + r).toString() + "px")), 0 < ht.length && ht.forEach((function(e) {
                            var t, n = window.getComputedStyle(e);
                            n && (t = ut && "fixed" === n.getPropertyValue("position")), t || (e.style.marginTop = dt)
                        })), "top" === It && It !== ct && Pt && jt && 0 < jt.length && jt.forEach((function(e) {
                            e.style.marginTop = 0
                        })), Pt = !1, It = "", jt = [], Rt = !1, t.innerHTML = e || function() {
                            var e = "",
                                t = "";
                            return document.body.style.transition = "", document.getElementById("branch-banner-iframe") && (document.getElementById("branch-banner-iframe").style.transition = ""), At || (e = "body { -webkit-transition: all 0.375s ease; }\n", document.body.style.transition = "all 00.375s ease", t = "-webkit-transition: all 0.25s ease; transition: all 00.25s ease;"), (e || "") + "#branch-banner-iframe { box-shadow: 0 0 5px rgba(0, 0, 0, .35); width: 1px; min-width:100%; left: 0; right: 0; border: 0; height: " + dt + "; z-index: 99999; " + t + " }\n#branch-banner-iframe { position: " + lt + "; }\n@media only screen and (orientation: landscape) { body { " + ("top" === ct ? "margin-top: " : "margin-bottom: ") + (ut ? mt + "px" : dt) + "; }\n#branch-banner-iframe { height: " + (ut ? mt + "px" : dt) + "; }"
                        }(), de(t), document.head.appendChild(t)
                    }

                    function Mt() {
                        ft && zt(!1, !1)
                    }

                    function Nt() {
                        ft && (window.pageYOffset > window.innerHeight ? zt(!0, !1) : zt(!1, !1))
                    }

                    function zt(e, t) {
                        var n = document.getElementById("branch-banner-iframe"),
                            r = n.offsetHeight,
                            i = n.offsetTop,
                            a = window.innerHeight;
                        t && window.pageYOffset ? n.style.bottom = "0" : e ? n.style.top = a - r + r / 2 + "px" : a - i != r && (n.style.top = a - r + "px")
                    }

                    function Ht(e, t, n, r, i, a, o) {
                        var s = Ut;
                        r && i && (Array.prototype.forEach.call(i.contentWindow.document.querySelectorAll("#branch-mobile-action"), (function(e) {
                            e.addEventListener("click", (function() {
                                rn(Et, "didClickJourneyCTA", Dt), Rt = !0, r(), Gt(i)
                            }))
                        })), Ft(".branch-banner-continue", "didClickJourneyContinue", n, i, e, t, a, o, s), Ft(".branch-banner-close", "didClickJourneyClose", n, i, e, t, a, o, s))
                    }

                    function Ft(e, t, n, r, i, a, o, s, c) {
                        Array.prototype.forEach.call(r.contentWindow.document.querySelectorAll(e), (function(e) {
                            e.addEventListener("click", (function() {
                                ! function(e, t, n, r, i, a, o, s) {
                                    var c = o ? 0 : function(e) {
                                        if ("number" == typeof(e = e.globalDismissPeriod)) {
                                            if (-1 === e) e = !0;
                                            else {
                                                var t = new Date;
                                                e = t.setSeconds(t.getSeconds() + e)
                                            }
                                            return e
                                        }
                                    }(a);
                                    if (rn(Et, e, Dt), Rt = !0, Gt(n), !o)
                                        if (void 0 !== c && t.set("globalJourneysDismiss", c, !0), function(e, t, n) {
                                                var r;
                                                (r = (r = e.get("journeyDismissals", !0)) ? m(r) : {})[n] = {
                                                    view_id: t,
                                                    dismiss_time: Date.now()
                                                }, e.set("journeyDismissals", g(r), !0)
                                            }(t, r, i), a.dismissRedirect) window.location = a.dismissRedirect;
                                        else {
                                            var l = function() {
                                                Et.removeListener(l);
                                                var e = function(e) {
                                                    var t = {},
                                                        n = q();
                                                    return n && 0 < Object.keys(n).length && (t.hosted_deeplink_data = n), e.I(Wt(null, t), null, Et, !0)
                                                }(s);
                                                Et.b(Le, e, (function(t, n) {
                                                    !t && "object" == typeof n && n.template && s.N(n, null, !1) && s.J(n.template, e, e.branch_view_id || n.event_data.branch_view_data.id, n.event_data.branch_view_data, !1, n.journey_link_data)
                                                }))
                                            };
                                            Et.addListener("branch_internal_event_didCloseJourney", l)
                                        }
                                }(t, n, r, i, a, o, s, c)
                            }))
                        }))
                    }

                    function Wt(e, t) {
                        return M({
                            url: e && e.url || D(),
                            user_agent: navigator.userAgent,
                            language: navigator.language,
                            screen_width: screen.width || -1,
                            screen_height: screen.height || -1,
                            window_device_pixel_ratio: window.devicePixelRatio || 1
                        }, t || {})
                    }

                    function Gt(e, t) {
                        if (At && !Ot) {
                            document.body.style.transition = "all 00.375s ease", document.getElementById("branch-banner-iframe").style.transition = "all 00.25s ease";
                            var n = document.getElementById("branch-iframe-css").innerHTML + "\n";
                            document.getElementById("branch-iframe-css").innerHTML = "", document.getElementById("branch-iframe-css").innerHTML = n + "body { -webkit-transition: all 0.375s ease; }\n#branch-banner-iframe { -webkit-transition: all 0.25s ease; }\n"
                        }
                        "top" === ct ? e.style.top = "-" + dt : "bottom" === ct && (e.style.bottom = "-" + dt), rn(Et, "willCloseJourney", Dt), setTimeout((function() {
                            Xe(e), Xe(document.getElementById("branch-css")), Xe(document.getElementById("branch-iframe-css")), Xe(document.getElementById("branch-journey-cta")), (!Ot || Rt) && ht && 0 < ht.length ? ht.forEach((function(e) {
                                e.style.marginTop = 0
                            })) : (Pt = Ot, It = ct, jt = ht), "top" === ct ? document.body.style.marginTop = gt : "bottom" === ct && (document.body.style.marginBottom = vt), Ze("branch-banner-is-active"), Ze("branch-banner-no-scroll"), ft && (ft = !1, window.removeEventListener("resize", Mt), window.removeEventListener("scroll", Nt)), rn(Et, "didCloseJourney", Dt), t || rn(Et, "branch_internal_event_didCloseJourney", Dt), Tt = !1
                        }), Ot ? 0 : 270)
                    }
                    var Ut = {};

                    function $t(e, t) {
                        var n, r = t ? "OPEN" : "GET",
                            i = e;
                        if (((a = Lt(i)) && a.bannerHeight && a.position && a.sticky ? (dt = a.bannerHeight, ct = a.position, lt = a.sticky) : (i = i.match(xt)) ? (ct = "top", (i = i[1].match(St)) && (dt = i[1]), lt = "absolute") : (ct = "bottom", lt = "fixed"), -1 === dt.indexOf("vh") && -1 === dt.indexOf("%") || (i = dt.indexOf("vh") ? dt.slice(0, -2) : dt.slice(0, -1), dt = i / 100 * bt + "px", 100 > i ? pt = !0 : ut = !0), i = Lt(e)) && (t && i && i.ctaText && i.ctaText.has_app ? n = i.ctaText.has_app : i && i.ctaText && i.ctaText.no_app && (n = i.ctaText.no_app), r = n, ht = [], i && i.injectorSelector && (n = document.querySelectorAll(i.injectorSelector))))
                            for (i = 0; i < n.length; i++) ht.push(n[i].parentElement);
                        n = (n = e.match(wt)) ? n[1] : void 0, (i = e.match(yt)) && (i = i[1], (a = document.createElement("script")).id = "branch-journey-cta", de(a), a.innerHTML = i, document.body.appendChild(a)), i = (i = e.match(kt)) ? i[1] : void 0;
                        var a, o = (a = e).match(_t),
                            s = a.match(yt),
                            c = a.match(wt),
                            l = a.match(kt);
                        (o && (a = a.replace(_t, "")), s && (a = a.replace(yt, "")), c && (a = a.replace(wt, "")), l && (a = a.replace(kt, "")), e = a, (a = document.createElement("iframe")).src = "about:blank", a.style.overflow = "hidden", a.scrolling = "no", a.id = "branch-banner-iframe", a.className = "branch-animation", a.title = "Branch Banner", a.setAttribute("aria-label", "Branch Banner"), de(a), document.body.appendChild(a), o = '<html><head></head><body class="' + ("ios" === (o = H()) || "ipad" === o ? "branch-banner-ios" : "android" === o ? "branch-banner-android" : "branch-banner-desktop") + '">' + e + "</body></html>", a.contentWindow.document.open(), a.contentWindow.document.write(o), a.contentWindow.document.close(), Bt(i), (o = document.createElement("style")).type = "text/css", o.id = "branch-css", o.innerHTML = n, de(o), (n = a.contentWindow.document).head.appendChild(o), pt || ut) && ((d = n.getElementsByClassName("branch-banner-content")[0]) && (d.style.height = dt));
                        "top" === ct ? a.style.top = "-" + dt : "bottom" === ct && (a.style.bottom = "-" + dt);
                        try {
                            var d = n.getElementsByClassName("branch-banner-content")[0],
                                u = window.getComputedStyle(d).getPropertyValue("background-color").split(", ");
                            u[3] && !parseFloat(u[3]) && (a.style.boxShadow = "none")
                        } catch (p) {}
                        return a.contentWindow.document.getElementById("branch-mobile-action").innerHTML = r, rn(Et, "willShowJourney", Dt),
                            function(e, t) {
                                Qe(document.body, "branch-banner-is-active"), ut && "fixed" === lt && Qe(document.body, "branch-banner-no-scroll"), setTimeout((function() {
                                    t ? (e.style.top = null, e.style.bottom = null) : "top" === ct ? e.style.top = "0" : "bottom" === ct && (Dt && Dt.journey_link_data && !Dt.journey_link_data.safeAreaRequired ? e.style.bottom = "0" : (ft = !0, document.getElementById("branch-banner-iframe").style.transition = "all 0s", zt(!1, !0), window.addEventListener("resize", Mt), window.addEventListener("scroll", Nt))), rn(Et, "didShowJourney", Dt), Tt = !0
                                }), 20)
                            }(a, i), a
                    }
                    Ut.N = function(e, t, n) {
                        return !(document.getElementById("branch-banner") || document.getElementById("branch-banner-iframe") || document.getElementById("branch-banner-container") || !H() || !e.event_data || !e.template) && (!!n || ((e = !e.event_data.branch_view_data.id || t && t.no_journeys) || (!0 === (t = (e = Et).c.get("globalJourneysDismiss", !0)) || t > Date.now() ? e = !0 : (e.c.remove("globalJourneysDismiss", !0), e = !1)), !e || (Ut.za = 1, !1)))
                    }, Ut.ja = function(e) {
                        Et.b(De, {
                            event: "pageview",
                            journey_displayed: !0,
                            audience_rule_id: e.audience_rule_id,
                            branch_view_id: e.branch_view_id
                        }, (function() {}))
                    }, Ut.J = function(e, t, n, r, i, a) {
                        ot = n,
                            function(e) {
                                var t = {
                                    banner_id: ot
                                };
                                if (e && "object" == typeof e && 0 < Object.keys(e).length) {
                                    var n = ["browser_fingerprint_id", "app_id", "source", "open_app", "link_click_id"];
                                    if (e && "object" == typeof e && !Array.isArray(e) && 0 < Object.keys(e).length && n && Array.isArray(n) && 0 < n.length)
                                        for (var r in e) e.hasOwnProperty(r) && -1 < n.indexOf(r) && delete e[r];
                                    t.journey_link_data = {}, M(t.journey_link_data, e)
                                }
                                Dt = t
                            }(a);
                        var o = r.audience_rule_id;
                        (a = document.getElementById("branch-iframe-css")) && a.parentElement.removeChild(a), (a = document.createElement("div")).id = "branch-banner", document.body.insertBefore(a, null), Qe(a, "branch-banner-is-active");
                        var s = !1,
                            c = t.callback_string,
                            l = null,
                            d = null,
                            u = Et.c;
                        if (e) {
                            var p = Lt(e) || {},
                                h = window.setTimeout((function() {
                                    window[c] = function() {}
                                }), w);
                            if (window[c] = function(e) {
                                    window.clearTimeout(h), s || Ht(n, o, u, d = e, l, p, i)
                                }, Ct = l = $t(e, t.has_app_websdk), null === l) return void(s = !0);
                            Ht(n, o, u, d, l, p, i), S && (x["journey-load-time"] = (Date.now() - window.performance.timing.navigationStart).toString())
                        }
                        document.body.removeChild(a), T || i || Ut.ja(r)
                    }, Ut.I = function(e, t, n, r) {
                        Et = n, t || (t = {}), e || (e = {}), At = t.disable_entry_animation || !1, Ot = t.disable_exit_animation || !1;
                        var i, a = M({}, n.H),
                            o = Ue(n.c) || {},
                            s = !!o.hasOwnProperty("has_app") && o.has_app,
                            c = n.c.get("journeyDismissals", !0),
                            l = (t.user_language || V() || "en").toLowerCase() || null,
                            d = se(nn(n));
                        return (i = t.branch_view_id) || (i = "_branch_view_id".replace(/[\[\]]/g, "\\$&"), i = (i = new RegExp("[?&]" + i + "(=([^&#]*)|&|#|$)").exec(D())) && i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : ""), i = i || null, n = t.make_new_link ? null : B(nn(n)), a.event = r ? "dismiss" : "pageview", a.metadata = e, a = ee(a, "initial_referrer", d), a = ee(a, "branch_view_id", i), a = ee(a, "no_journeys", t.no_journeys), a = ee(a, "is_iframe", ae()), (a = ee(a, "journey_dismissals", c)).user_language = l, a.open_app = t.open_app || !1, a.has_app_websdk = s, a.feature = "journeys", a.callback_string = "branch_view_callback__" + st++, a.data || (a.data = {}), a.data = M(q(), a.data), a.data = M(function(e) {
                            var t = /^\$journeys_\S+$/,
                                n = e.data,
                                r = {};
                            if (!n) return {};
                            switch (typeof n) {
                                case "string":
                                    try {
                                        n = m(n)
                                    } catch (a) {
                                        n = {}
                                    }
                                    break;
                                case "object":
                                    break;
                                default:
                                    n = {}
                            }
                            return Object.keys(n).forEach((function(e) {
                                t.test(e) && (r[e] = n[e])
                            })), r
                        }(o || {}), a.data), n && (a.data.link_click_id = n), (e = o.data ? JSON.parse(o.data) : null) && e["+referrer"] && (a.data["+referrer"] = e["+referrer"]), L(a)
                    };
                    var Kt, qt = {
                            androidAppIndexingTagsPresent: !1,
                            iosAppIndexingTagsPresent: !1,
                            androidDetailsComplete: !1,
                            iosDetailsComplete: !1
                        },
                        Vt = {};

                    function Jt(e) {
                        "android" === e && qt.androidDetailsComplete && Xt(Yt("android-app://" + Vt.androidPackageName + "/" + Vt.androidURL)), "ios" === e && qt.iosDetailsComplete && Xt(Yt("ios-app://" + Vt.iosAppId + "/" + Vt.iosURL))
                    }

                    function Yt(e) {
                        var t = {
                            "~channel": "Firebase App Indexing",
                            "~feature": "Auto App Indexing",
                            $canonical_url: D()
                        };
                        if ("object" == typeof Vt.data)
                            for (var n in Vt.data) Vt.data.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = Vt.data[n]);
                        return e + (-1 < e.indexOf("?") ? "&" : "?") + "link_click_id=a-" + btoa(g(t))
                    }

                    function Xt(e) {
                        var t = document.createElement("link");
                        t.setAttribute("rel", "alternate"), t.setAttribute("href", e), document.head.appendChild(t)
                    }

                    function Qt(e) {
                        "android" === e && "string" == typeof Vt.androidPackageName && "string" == typeof Vt.androidURL && (qt.androidDetailsComplete = !0, Jt("android")), "ios" === e && "string" == typeof Vt.iosAppId && "string" == typeof Vt.iosURL && (qt.iosDetailsComplete = !0, Jt("ios"))
                    }

                    function Zt(e) {
                        for (var t = document.getElementsByTagName("meta"), n = 0; n < t.length; n++) {
                            var r = t[n];
                            "ios" === e && "al:ios:app_store_id" === r.getAttribute("property") && (Vt.iosAppId = r.getAttribute("content")), "ios" === e && "al:ios:url" === r.getAttribute("property") && (Vt.iosURL = r.getAttribute("content").replace("://", "/")), "android" === e && "al:android:package" === r.getAttribute("property") && (Vt.androidPackageName = r.getAttribute("content")), "android" === e && "al:android:url" === r.getAttribute("property") && (Vt.androidURL = r.getAttribute("content").replace("://", "/"))
                        }
                        Qt(e)
                    }

                    function en(e, t, n) {
                        return function() {
                            var r, i, a = this,
                                o = arguments[arguments.length - 1];
                            e && "function" == typeof o ? (r = Array.prototype.slice.call(arguments, 0, arguments.length - 1) || [], i = o) : (i = function() {}, r = Array.prototype.slice.call(arguments)), a.$((function(o) {
                                function s(t, n) {
                                    try {
                                        if (t && !e) throw t;
                                        1 === e ? i(t) : 2 === e && i(t, n)
                                    } finally {
                                        o()
                                    }
                                }
                                if (!n) {
                                    if (1 === a.j) return s(Error(I("Branch SDK initialization pending and a Branch method was called outside of the queue order")), null);
                                    if (2 === a.j) return s(Error(I("Branch SDK initialization failed, so further methods cannot be called", a.i, a.l)), null);
                                    if (0 === a.j || !a.j) return s(Error(I("Branch SDK not initialized")), null)
                                }
                                r.unshift(s), t.apply(a, r)
                            }))
                        }
                    }

                    function tn() {
                        if (!(this instanceof tn)) return Kt || (Kt = new tn), Kt;
                        this.$ = v(), this.c = new Ne(["session", "cookie", "pojo"]), this.ca = new qe, this.g = [], this.V = "web2.52.3", this.i = this.j = 0, this.l = null
                    }

                    function nn(e) {
                        var t = Ue(e.c);
                        return (t = t && t.referring_link) ? t : (e = e.c.get("click_id")) ? "https://bnc.lt/c/" + e : null
                    }

                    function rn(e, t, n) {
                        for (var r = 0; r < e.g.length; r++) e.g[r].event && e.g[r].event !== t || e.g[r].listener(t, n)
                    }

                    function an(e, t, n) {
                        n = n || {};
                        try {
                            e.H = m(g(n))
                        } finally {
                            e.H = e.H || {}
                        }
                        t()
                    }
                    tn.prototype.b = function(e, t, n) {
                        return this.U && (t.app_id = this.U), this.h && (t.branch_key = this.h), (e.a && e.a.session_id || e.f && e.f.session_id) && this.G && (t.session_id = this.G), (e.a && e.a.identity_id || e.f && e.f.identity_id) && this.v && (t.identity_id = this.v), (e.a && e.a.link_click_id || e.f && e.f.link_click_id) && this.Z && (t.link_click_id = this.Z), (e.a && e.a.sdk || e.f && e.f.sdk) && this.V && (t.sdk = this.V), (e.a && e.a.browser_fingerprint_id || e.f && e.f.browser_fingerprint_id) && this.B && (t.browser_fingerprint_id = this.B), T && (t.tracking_disabled = T), Ye(this.ca, e, t, this.c, (function(e, t) {
                            n(e, t)
                        }))
                    }, tn.prototype.init = en(2, (function(e, t, n) {
                        function r() {
                            var e, t;
                            void 0 !== document.hidden ? (e = "hidden", t = "visibilitychange") : void 0 !== document.mozHidden ? (e = "mozHidden", t = "mozvisibilitychange") : void 0 !== document.msHidden ? (e = "msHidden", t = "msvisibilitychange") : void 0 !== document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange"), t && !o.da && (o.da = !0, document.addEventListener(t, (function() {
                                document[e] || (a(null), "function" == typeof o.s && o.s())
                            }), !1))
                        }

                        function i(t, r) {
                            if (r && (r = function(e) {
                                    if (e.link_click_id && (o.Z = e.link_click_id.toString()), e.session_id && (o.G = e.session_id.toString()), e.identity_id && (o.v = e.identity_id.toString()), e.link && (o.M = e.link), e.referring_link) {
                                        var t = e.referring_link;
                                        e.referring_link = t ? "http" !== t.substring(0, 4) ? "https://bnc.lt" + t : t : null
                                    }
                                    return !e.click_id && e.referring_link && (e.click_id = B(e.referring_link)), o.B = e.browser_fingerprint_id, e
                                }(r), T || $e(o.c, r, l), o.j = 3, r.data_parsed = r.data && 0 !== r.data.length ? m(r.data) : {}), t) return o.j = 2, o.i || (o.i = 1, o.l = t.message), e(t, r && j(r));
                            try {
                                e(t, r && j(r))
                            } catch (d) {} finally {
                                o.renderFinalize()
                            }
                            var i = function() {
                                    var e, t = {};
                                    return e = ee(e = {}, "$og_title", K("title")), e = ee(e, "$og_description", K("description")), e = ee(e, "$og_image_url", K("image")), e = ee(e, "$og_video", K("video")), e = (e = ee(e, "$og_type", K("type"))) && 0 < Object.keys(e).length ? e : null, t = ee(t, "og_data", e), t = ee(t, "hosted_deeplink_data", q()), t = ee(t, "title", 0 < (e = document.getElementsByTagName("title")).length ? e[0].innerText : null), t = ee(t, "description", (e = document.querySelector('meta[name="description"]')) && e.content ? e.content : null), (t = ee(t, "canonical_url", (e = document.querySelector('link[rel="canonical"]')) && e.href ? e.href : null)) && 0 < Object.keys(t).length ? t : {}
                                }(),
                                a = re(n.metadata, "object") ? n.metadata : null;
                            a && (a = le(i.hosted_deeplink_data, a)) && 0 < Object.keys(a).length && (i.hosted_deeplink_data = a);
                            var c = Ut.I(Wt(n, i), n, o, !1);
                            o.renderQueue((function() {
                                o.b(De, c, (function(e, t) {
                                    if (!e && "object" == typeof t) {
                                        var r = !!c.branch_view_id;
                                        Ut.N(t, n, r) ? Ut.J(t.template, c, c.branch_view_id || t.event_data.branch_view_data.id, t.event_data.branch_view_data, r, t.journey_link_data) : ((t.auto_branchify || !s && W("branchify_url") && nn(o)) && this.branch.deepview({}, {
                                            make_new_link: !1,
                                            open_app: !0,
                                            auto_branchify: !0
                                        }), rn(Et, "willNotShowJourney"))
                                    }
                                    T && (A = !0)
                                }))
                            }))
                        }

                        function a(e) {
                            var t = {
                                    sdk: "2.52.3",
                                    branch_key: o.h
                                },
                                n = Ue(o.c) || {},
                                r = Ue(o.c, !0) || {};
                            r.browser_fingerprint_id && (t._t = r.browser_fingerprint_id), F() || o.b(be, t, (function(e, t) {
                                e && (o.i = 3, o.l = e.message), t && (n.browser_fingerprint_id = t)
                            })), o.b(Ae, {
                                browser_fingerprint_id: n.browser_fingerprint_id
                            }, (function(t, r) {
                                t && (o.i = 4, o.l = t.message), t || !r || n.has_app || (n.has_app = !0, Ke(o.c, n), rn(o, "didDownloadApp")), e && e(null, n)
                            }))
                        }
                        S && (x["init-began-at"] = (Date.now() - window.performance.timing.navigationStart).toString());
                        var o = this;
                        o.j = 1, -1 < t.indexOf("key_") ? o.h = t : o.U = t, n = n && re(n, "object") ? n : {}, _ = (o.F = n) && n.retries && Number.isInteger(n.retries) ? n.retries : _, y = n && n.retry_delay && Number.isInteger(n.retry_delay) ? n.retry_delay : y, w = n && n.timeout && Number.isInteger(n.timeout) ? n.timeout : w, k = n && n.nonce ? n.nonce : k, T = !(!n || !n.tracking_disabled || !0 !== n.tracking_disabled), A = !1, T && P(o), t = Ue(o.c);
                        var s = n && void 0 !== n.branch_match_id && null !== n.branch_match_id ? n.branch_match_id : null,
                            c = s || W("_branch_match_id") || function() {
                                try {
                                    var e = (ae() && oe() ? window.top.location.hash : window.location.hash).match(/r:([^&]*)/);
                                    if (e && 1 <= e.length) return e[1]
                                } catch (t) {}
                            }(),
                            l = !t || !t.identity_id;
                        if (o.A = !!o.c.get("branch_view_enabled"), t && t.session_id && !c && !W("branchify_url")) Ke(o.c, {
                            data: ""
                        }), Ke(o.c, {
                            referring_link: ""
                        }), r(), a(i);
                        else {
                            t = {
                                sdk: "2.52.3",
                                branch_key: o.h
                            };
                            var d = Ue(o.c, !0) || {};
                            d.browser_fingerprint_id && (t._t = d.browser_fingerprint_id), F() ? o.b(fe, {
                                link_identifier: c,
                                browser_fingerprint_id: c || d.browser_fingerprint_id,
                                alternative_browser_fingerprint_id: d.browser_fingerprint_id,
                                options: n,
                                initial_referrer: se(nn(o)),
                                current_url: ae() && oe() ? window.top.location.href : window.location.href
                            }, (function(e, t) {
                                e && (o.i = 2, o.l = e.message), e || "object" != typeof t || (t.branch_view_enabled && (o.A = !!t.branch_view_enabled, o.c.set("branch_view_enabled", o.A)), c && (t.click_id = c)), r(), i(e, t)
                            })) : o.b(be, t, (function(e, t) {
                                if (e) return o.i = 3, o.l = e.message, i(e, null);
                                o.b(fe, {
                                    link_identifier: c,
                                    browser_fingerprint_id: c || t,
                                    alternative_browser_fingerprint_id: d.browser_fingerprint_id,
                                    options: n,
                                    initial_referrer: se(nn(o)),
                                    current_url: ae() && oe() ? window.top.location.href : window.location.href
                                }, (function(e, t) {
                                    e && (o.i = 2, o.l = e.message), e || "object" != typeof t || (t.branch_view_enabled && (o.A = !!t.branch_view_enabled, o.c.set("branch_view_enabled", o.A)), c && (t.click_id = c)), r(), i(e, t)
                                }))
                            }))
                        }
                    }), !0), tn.prototype.renderQueue = en(0, (function(e, t) {
                        this.aa ? t() : (this.m = this.m || [], this.m.push(t)), e(null, null)
                    })), tn.prototype.renderFinalize = en(2, (function(e) {
                        this.m && 0 < this.m.length && (this.m.forEach((function(e) {
                            e.call(this)
                        })), delete this.m), this.aa = !0, e(null, null)
                    })), tn.prototype.data = en(2, (function(e) {
                        var t = j(Ue(this.c));
                        t.referring_link = nn(this), t.data_parsed = t.data && 0 !== t.data.length ? m(t.data) : {}, e(null, t)
                    })), tn.prototype.first = en(2, (function(e) {
                        e(null, j(Ue(this.c, !0)))
                    })), tn.prototype.setIdentity = en(2, (function(e, t) {
                        var n = this;
                        this.b(ke, {
                            identity: t
                        }, (function(r, i) {
                            r && e(r), i = i || {}, n.v = i.identity_id ? i.identity_id.toString() : null, n.M = i.link, n.C = t, i.referring_data_parsed = i.referring_data ? m(i.referring_data) : null, Ke(n.c, i), e(null, i)
                        }))
                    })), tn.prototype.logout = en(1, (function(e) {
                        var t = this;
                        this.b(we, {}, (function(n, r) {
                            n && e(n), r = {
                                data_parsed: null,
                                data: null,
                                referring_link: null,
                                click_id: null,
                                link_click_id: null,
                                identity: null,
                                session_id: (r = r || {}).session_id,
                                identity_id: r.identity_id,
                                link: r.link,
                                device_fingerprint_id: t.ga || null
                            }, t.M = r.link, t.G = r.session_id, t.v = r.identity_id, t.C = r.identity, Ke(t.c, r), e(null)
                        }))
                    })), tn.prototype.getBrowserFingerprintId = en(2, (function(e) {
                        e(null, (Ue(this.c, !0) || {}).browser_fingerprint_id || null)
                    })), tn.prototype.crossPlatformIds = en(2, (function(e) {
                        this.b(Be, {
                            user_data: g(ie(this))
                        }, (function(t, n) {
                            return e(t || null, n && n.user_data || null)
                        }))
                    })), tn.prototype.lastAttributedTouchData = en(2, (function(e, t) {
                        t = re(t, "number") ? t : null;
                        var n = ie(this);
                        ee(n, "attribution_window", t), this.b(Me, {
                            user_data: g(n)
                        }, (function(t, n) {
                            return e(t || null, n || null)
                        }))
                    })), tn.prototype.track = en(1, (function(e, t, n, r) {
                        if (n = n || {}, k = (r = r || {}).nonce ? r.nonce : k, "pageview" === t) {
                            (t = le(q(), n)) && 0 < Object.keys(t).length && (n.hosted_deeplink_data = t);
                            var i = Ut.I(Wt(r, n), r, this, !1);
                            this.b(De, i, (function(t, n) {
                                if (!t && "object" == typeof n) {
                                    var a = !!i.branch_view_id;
                                    Ut.N(n, r, a) ? Ut.J(n.template, i, i.branch_view_id || n.event_data.branch_view_data.id, n.event_data.branch_view_data, a, n.journey_link_data) : rn(Et, "willNotShowJourney")
                                }
                                "function" == typeof e && e.apply(this, arguments)
                            }))
                        } else this.b(Re, {
                            event: t,
                            metadata: M({
                                url: D(),
                                user_agent: navigator.userAgent,
                                language: navigator.language
                            }, n),
                            initial_referrer: se(nn(this))
                        }, (function(t, n) {
                            "function" == typeof e && e.apply(this, arguments)
                        }))
                    })), tn.prototype.logEvent = en(1, (function(e, t, n, r, i) {
                        t = re(t, "string") ? t : null, n = re(n, "object") ? n : null, i = re(i, "string") ? i : null, t && -1 < te.indexOf(t) ? (r = re(r, "array") ? r : null, n = function(e) {
                            if (!e || !Object.keys(e).length) return null;
                            for (var t = J(ne, Object.keys(e)), n = {}, r = 0; r < t.length; r++) {
                                var i = t[r];
                                n[i] = e[i], delete e[i]
                            }
                            return {
                                custom_data: ce(n),
                                event_data: e
                            }
                        }(n), this.b(Ie, {
                            name: t,
                            user_data: g(ie(this)),
                            custom_data: g(n && n.custom_data || {}),
                            event_data: g(n && n.event_data || {}),
                            content_items: g(r || []),
                            customer_event_alias: i
                        }, (function(t) {
                            return e(t || null)
                        }))) : this.b(je, {
                            name: t,
                            user_data: g(ie(this)),
                            custom_data: g(ce(n || {}))
                        }, (function(t) {
                            return e(t || null)
                        }))
                    })), tn.prototype.link = en(2, (function(e, t) {
                        var n = L(t),
                            r = this.h;
                        this.b(Te, n, (function(t, i) {
                            if (t) return e(t, R(r, n));
                            e(null, i && i.url)
                        }))
                    })), tn.prototype.sendSMS = en(1, (function(e, t, n, r) {
                        function i(n) {
                            a.b(ge, {
                                link_url: n,
                                phone: t
                            }, (function(t) {
                                e(t || null)
                            }))
                        }
                        var a = this;
                        "function" == typeof r ? r = {} : null == r && (r = {}), r.make_new_link = r.make_new_link || !1, n.channel && "app banner" !== n.channel || (n.channel = "sms");
                        var o = nn(a);
                        o && !r.make_new_link ? i(B(o)) : a.b(Te, L(n), (function(t, n) {
                            if (t) return e(t);
                            var r = n.url;
                            /(bnc.lt\/|app\.link\/)/.test(r) || (r = "https://bnc.lt/" + function(e) {
                                return e ? (-1 < e.indexOf("://") && (e = e.split("://")[1]), e.substring(e.indexOf("/") + 1)) : null
                            }(r)), a.b(me, {
                                link_url: r,
                                click: "click"
                            }, (function(t, n) {
                                if (t) return e(t);
                                i(n.click_id)
                            }))
                        }))
                    })), tn.prototype.deepview = en(1, (function(e, t, n) {
                        var r = this;
                        n || (n = {}), n.deepview_type = void 0 === n.deepview_type ? "deepview" : "banner", t.data = M(q(), t.data), t = L(t = ae() ? M({
                            is_iframe: !0
                        }, t) : t);
                        var i = R(this.h, t);
                        (n.open_app || null === n.open_app || void 0 === n.open_app) && (t.open_app = !0), t.append_deeplink_path = !!n.append_deeplink_path, t.deepview_type = n.deepview_type;
                        var a = nn(r);
                        a && !n.make_new_link && (t.link_click_id = B(a)), t.banner_options = n, n.auto_branchify && (t.auto_branchify = !0), r.s = d(this.b, r, Oe, t, (function(t, n) {
                            if (t) return T || (r.o = function() {
                                window.top.location = i
                            }), e(t);
                            "function" == typeof n && (r.o = n), e(null)
                        })), r.s()
                    })), tn.prototype.deepviewCta = en(1, (function(e) {
                        if (void 0 === this.o) return e(T ? Error("Requested operation cannot be completed since tracking is disabled") : Error("Cannot call Deepview CTA, please call branch.deepview() first"), null);
                        window.event && (window.event.preventDefault ? window.event.preventDefault() : window.event.returnValue = !1), rn(this, "didDeepviewCTA"), this.o(), e()
                    })), tn.prototype.referrals = en(2, (function(e) {
                        this.b(xe, {}, e)
                    })), tn.prototype.getCode = en(2, (function(e, t) {
                        t.type = "credit", t.creation_source = t.creation_source || 2, this.b(ve, t, e)
                    })), tn.prototype.validateCode = en(1, (function(e, t) {
                        this.b(_e, {
                            code: t
                        }, e)
                    })), tn.prototype.applyCode = en(1, (function(e, t) {
                        this.b(ye, {
                            code: t
                        }, e)
                    })), tn.prototype.credits = en(2, (function(e) {
                        this.b(Ee, {
                            branch_key: this.h,
                            identity: this.C
                        }, e)
                    })), tn.prototype.creditHistory = en(2, (function(e, t) {
                        this.b(Se, t || {}, e)
                    })), tn.prototype.redeem = en(1, (function(e, t, n) {
                        this.b(Ce, {
                            amount: t,
                            bucket: n
                        }, (function(t) {
                            e(t || null)
                        }))
                    })), tn.prototype.addListener = function(e, t) {
                        "function" == typeof e && void 0 === t && (t = e, e = null), t && this.g.push({
                            listener: t,
                            event: e || null
                        })
                    }, tn.prototype.removeListener = function(e) {
                        e && (this.g = this.g.filter((function(t) {
                            if (t.listener !== e) return t
                        })))
                    }, tn.prototype.setBranchViewData = en(1, (function(e, t) {
                        an.call(null, this, e, t)
                    })), tn.prototype.closeJourney = en(1, (function(e) {
                        var t = this;
                        t.renderQueue((function() {
                            if (!Ct || !Tt) return e("Journey already dismissed.");
                            rn(t, "didCallJourneyClose", Dt), Gt(Ct, !0)
                        })), e()
                    })), tn.prototype.banner = en(1, (function(e, t, n) {
                        n = n || {}, an.call(null, this, (function() {}), n), void 0 === t.showAgain && void 0 !== t.forgetHide && (t.showAgain = t.forgetHide);
                        var r = {
                            icon: Z(t.icon) || "",
                            title: Z(t.title) || "",
                            description: Z(t.description) || "",
                            L: "number" == typeof t.reviewCount && 0 < t.reviewCount ? Math.floor(t.reviewCount) : null,
                            w: "number" == typeof t.rating && 5 >= t.rating && 0 < t.rating ? Math.round(2 * t.rating) / 2 : null,
                            ma: Z(t.openAppButtonText) || "View in app",
                            ia: Z(t.downloadAppButtonText) || "Download App",
                            qa: Z(t.sendLinkText) || "Send Link",
                            oa: Z(t.phonePreviewText) || "(999) 999-9999",
                            D: void 0 === t.iframe || t.iframe,
                            T: void 0 === t.showiOS || t.showiOS,
                            sa: void 0 === t.showiPad || t.showiPad,
                            O: void 0 === t.showAndroid || t.showAndroid,
                            P: void 0 === t.showBlackberry || t.showBlackberry,
                            S: void 0 === t.showWindowsPhone || t.showWindowsPhone,
                            R: void 0 === t.showKindle || t.showKindle,
                            ra: void 0 === t.showDesktop || t.showDesktop,
                            ha: !!t.disableHide,
                            K: "number" == typeof t.forgetHide ? t.forgetHide : !!t.forgetHide,
                            pa: void 0 !== t.respectDNT && t.respectDNT,
                            position: t.position || "top",
                            ea: t.customCSS || "",
                            la: void 0 !== t.mobileSticky && t.mobileSticky,
                            fa: void 0 === t.desktopSticky || t.desktopSticky,
                            va: t.buttonBorderColor || "",
                            ta: t.buttonBackgroundColor || "",
                            xa: t.buttonFontColor || "",
                            wa: t.buttonBorderColorHover || "",
                            ua: t.buttonBackgroundColorHover || "",
                            ya: t.buttonFontColorHover || "",
                            ka: !!t.make_new_link,
                            na: !!t.open_app,
                            X: !!t.immediate,
                            ba: !!t.append_deeplink_path
                        };
                        void 0 !== t.showMobile && (r.T = t.showMobile, r.O = t.showMobile, r.P = t.showMobile, r.S = t.showMobile, r.R = t.showMobile), n.data = M(q(), n.data);
                        var i = this;
                        i.renderQueue((function() {
                            i.W = at(i, r, n, i.c)
                        })), e()
                    })), tn.prototype.closeBanner = en(0, (function(e) {
                        var t = this;
                        t.renderQueue((function() {
                            t.W && (rn(t, "willCloseBanner"), t.W((function() {
                                rn(t, "didCloseBanner")
                            })))
                        })), e()
                    })), tn.prototype.autoAppIndex = en(1, (function(e, t) {
                        t = t || {};
                        var n = document.getElementsByTagName("link"),
                            r = n.length;
                        if (r)
                            for (var i = 0; i < r; i++) {
                                var a = n[i],
                                    o = a.href;
                                o && (o.includes("ios-app") && (qt.iosAppIndexingTagsPresent = !0, a.setAttribute("href", Yt(o))), o.includes("android-app") && (qt.androidAppIndexingTagsPresent = !0, a.setAttribute("href", Yt(o))))
                            }
                        Vt = t, qt.androidAppIndexingTagsPresent || (Qt("android"), qt.androidDetailsComplete || Zt("android")), qt.iosAppIndexingTagsPresent || (Qt("ios"), qt.iosDetailsComplete || Zt("ios")), qt.iosDetailsComplete || qt.androidDetailsComplete ? e(null) : e("Firebase App Indexing tags were not added to your webpage. Please check your configuration.")
                    })), tn.prototype.trackCommerceEvent = en(1, (function(e, t, n, r) {
                        var i = this;
                        i.renderQueue((function() {
                            var a = Q(t, n);
                            if (a) return e(Error(a));
                            i.b(Pe, {
                                event: t,
                                metadata: M({
                                    url: document.URL,
                                    user_agent: navigator.userAgent,
                                    language: navigator.language
                                }, r || {}),
                                initial_referrer: se(nn(i)),
                                commerce_data: n
                            }, (function(t) {
                                e(t || null)
                            }))
                        })), e()
                    })), tn.prototype.disableTracking = en(1, (function(e, t) {
                        !1 === t || "false" === t ? (A = T = !1, this.h && this.F && (!0 === this.F.tracking_disabled && delete this.F.tracking_disabled, this.init(this.h, this.F))) : void 0 !== t && !0 !== t && "true" !== t || (P(this), A = T = !0, this.closeBanner(), this.closeJourney()), e()
                    }));
                    var on = new tn;
                    if (window.branch && window.branch._q)
                        for (var sn = window.branch._q, cn = 0; cn < sn.length; cn++) {
                            var ln = sn[cn];
                            on[ln[0]].apply(on, ln[1])
                        }
                    void 0 === (i = function() {
                        return on
                    }.call(t, n, t, e)) || (e.exports = i), window && (window.branch = on)
                }()
            }).call(this, n("yLpj"))
        },
        "3EFP": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return a
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "f", (function() {
                return c
            }));
            var r = "ArrowDown",
                i = "ArrowUp",
                a = "Enter",
                o = "Escape",
                s = "ESC",
                c = "Tab"
        },
        "45mF": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var r = n("1YZw"),
                i = n("pXBW"),
                a = n("3XMw"),
                o = n.n(a),
                s = n("SrIh"),
                c = o.a.i9cec7a1,
                l = function(e, t) {
                    return void 0 === e && (e = c), void 0 === t && (t = !0), {
                        customErrorHandler: function(n) {
                            var a = n.context;
                            return !n instanceof i.a && (n.message = "Strato error occurred in " + a.id + ": " + a.action), Object(s.a)(n, {
                                extra: {
                                    context: a,
                                    isStrato: !0
                                }
                            }), t ? Object(r.b)({
                                text: e
                            }) : []
                        }
                    }
                }
        },
        "6Gv9": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var r = {
                    centroidDimension: function(e, t, n, i) {
                        var a = e.touchBank,
                            o = 0,
                            s = 0,
                            c = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                        if (null !== c) c.touchActive && c.currentTimeStamp > t && (o += i && n ? c.currentPageX : i && !n ? c.currentPageY : !i && n ? c.previousPageX : c.previousPageY, s = 1);
                        else
                            for (var l = 0; l < a.length; l++) {
                                var d = a[l];
                                if (null != d && d.touchActive && d.currentTimeStamp >= t) {
                                    o += i && n ? d.currentPageX : i && !n ? d.currentPageY : !i && n ? d.previousPageX : d.previousPageY, s++
                                }
                            }
                        return s > 0 ? o / s : r.noCentroid
                    },
                    currentCentroidXOfTouchesChangedAfter: function(e, t) {
                        return r.centroidDimension(e, t, !0, !0)
                    },
                    currentCentroidYOfTouchesChangedAfter: function(e, t) {
                        return r.centroidDimension(e, t, !1, !0)
                    },
                    previousCentroidXOfTouchesChangedAfter: function(e, t) {
                        return r.centroidDimension(e, t, !0, !1)
                    },
                    previousCentroidYOfTouchesChangedAfter: function(e, t) {
                        return r.centroidDimension(e, t, !1, !1)
                    },
                    currentCentroidX: function(e) {
                        return r.centroidDimension(e, 0, !0, !0)
                    },
                    currentCentroidY: function(e) {
                        return r.centroidDimension(e, 0, !1, !0)
                    },
                    noCentroid: -1
                },
                i = r;
            t.default = i, e.exports = t.default
        },
        "6XNv": function(e, t, n) {
            "use strict";
            n("cI1W");
            var r = n("1Pcy"),
                i = n.n(r),
                a = n("W/Kd"),
                o = n.n(a),
                s = n("KEM+"),
                c = n.n(s),
                l = (n("PN9k"), n("ERkP")),
                d = n("t62R"),
                u = n("SKmd"),
                p = n.n(u),
                h = n("rHpw"),
                f = (n("aWzz"), n("7DT3")),
                b = n.n(f),
                m = n("3xO4"),
                g = n.n(m),
                v = l.forwardRef((function(e, t) {
                    return b()("select", Object.assign({}, e, {
                        ref: t
                    }))
                })),
                _ = function(e) {
                    return b()("option", e)
                },
                y = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_selectRef", l.createRef()), c()(i()(t), "state", {
                            isFocused: !1
                        }), c()(i()(t), "_handleChange", (function(e) {
                            var n = t.props,
                                r = n.onChange,
                                i = n.withEmptyOption,
                                a = e.target,
                                o = a.selectedIndex,
                                s = a.value;
                            r && r(s, o - (i ? 1 : 0))
                        })), c()(i()(t), "_handleBlur", (function(e) {
                            var n = t.props.onBlur;
                            t.setState({
                                isFocused: !1
                            }), n && n()
                        })), c()(i()(t), "_handleFocus", (function(e) {
                            var n = t.props.onFocus;
                            t.setState({
                                isFocused: !0
                            }), n && n()
                        })), t
                    }
                    o()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus()
                    }, n.render = function() {
                        var e = this.props,
                            t = e.style,
                            n = e.disabled,
                            r = e.options,
                            i = e.value,
                            a = e.label,
                            o = e.hasError,
                            s = e.helperText,
                            c = e.testID,
                            d = e.withEmptyOption,
                            u = this.state.isFocused;
                        return l.createElement(l.Fragment, null, l.createElement(g.a, {
                            style: [w.container, n && w.disabled, w.bottomBorder, n && w.bottomBorderDisabled, u && w.bottomBorderFocused, o && w.bottomBorderError, t]
                        }, this._renderLabel(), l.createElement(g.a, {
                            style: w.dropdownContainer
                        }, l.createElement(v, {
                            accessibilityLabel: a,
                            disabled: n,
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            ref: this._selectRef,
                            style: [w.select, a && w.selectWithLabel, n && w.disabled],
                            testID: c || "",
                            value: i
                        }, d ? l.createElement(_, {
                            disabled: !0,
                            style: w.option,
                            value: ""
                        }) : null, r.map((function(e) {
                            var t = e.disabled,
                                n = e.label,
                                r = e.value;
                            return l.createElement(_, {
                                disabled: t,
                                key: n + "-" + r,
                                style: w.option,
                                value: r
                            }, n)
                        }))), l.createElement(p.a, {
                            style: [w.dropdownCaret, u && w.dropdownCaretFocused, o && w.dropdownCaretError]
                        }))), s ? this._renderHelperText() : null)
                    }, n._renderLabel = function() {
                        var e = this.props,
                            t = e.hasError,
                            n = e.label,
                            r = this.state.isFocused;
                        return l.createElement(d.b, {
                            color: t ? "red" : r ? "primary" : "deepGray",
                            style: w.label
                        }, n)
                    }, n._renderHelperText = function() {
                        return l.createElement(g.a, {
                            accessibilityLiveRegion: "polite"
                        }, l.createElement(d.b, {
                            color: "deepGray",
                            style: w.helperText
                        }, this.props.helperText))
                    }, t
                }(l.PureComponent);
            c()(y, "defaultProps", {
                disabled: !1,
                autofocus: !1,
                withEmptyOption: !1
            }), y.propTypes = {};
            var w = h.a.create((function(e) {
                return {
                    container: {
                        backgroundColor: e.colors.faintGray,
                        paddingHorizontal: e.spaces.xSmall,
                        borderWidth: e.borderWidths.none
                    },
                    disabled: {
                        cursor: "default",
                        opacity: .5
                    },
                    dropdownCaret: {
                        color: e.colors.deepGray,
                        height: "1.5em",
                        pointerEvents: "none",
                        position: "absolute",
                        marginTop: "-0.75em",
                        top: "50%",
                        right: 0
                    },
                    dropdownCaretFocused: {
                        color: e.colors.primary
                    },
                    dropdownContainer: {
                        position: "relative"
                    },
                    bottomBorder: {
                        borderBottomWidth: e.borderWidths.medium,
                        borderBottomColor: e.colors.deepGray,
                        borderRadius: e.borderWidths.medium
                    },
                    bottomBorderFocused: {
                        borderBottomColor: e.colors.primary
                    },
                    bottomBorderDisabled: {
                        borderBottomColor: e.colors.transparent
                    },
                    dropdownCaretError: {
                        color: e.colors.red
                    },
                    bottomBorderError: {
                        borderBottomColor: e.colors.red
                    },
                    label: {
                        alignSelf: "flex-start",
                        paddingTop: e.spaces.xxSmall
                    },
                    option: {
                        backgroundColor: e.colors.navigationBackground
                    },
                    select: {
                        appearance: "none",
                        backgroundColor: "transparent",
                        borderRadius: 0,
                        borderWidth: e.borderWidths.none,
                        color: e.colors.text,
                        cursor: "pointer",
                        fontSize: e.fontSizes.large,
                        margin: 0,
                        outlineStyle: "none",
                        padding: 0,
                        paddingRight: "1.5em",
                        paddingVertical: e.spaces.small
                    },
                    selectWithLabel: {
                        paddingBottom: e.spaces.xxSmall,
                        paddingTop: e.spaces.micro
                    },
                    helperText: {
                        alignSelf: "flex-start",
                        paddingHorizontal: e.spaces.xSmall,
                        paddingTop: e.spaces.xxSmall
                    }
                }
            }));
            t.a = y
        },
        "7FtF": function(e, t, n) {
            "use strict";
            var r = n("PJYZ"),
                i = n.n(r),
                a = n("VbXa"),
                o = n.n(a),
                s = n("lSNA"),
                c = n.n(s),
                l = n("ERkP"),
                d = n("P1r1"),
                u = n("oEGd"),
                p = n("0KEI"),
                h = n("hqKg"),
                f = n("G6rE"),
                b = Object(h.createSelector)(d.m, f.e.selectLoggedInUser, (function(e, t) {
                    return {
                        fetchStatus: e,
                        loggedInUser: t
                    }
                })),
                m = {
                    fetchSettingsIfNeeded: d.e,
                    createLocalApiErrorHandler: Object(p.b)("SETTINGS_LOADER")
                },
                g = Object(u.g)(b, m),
                v = n("v//M"),
                _ = n("3XMw"),
                y = n.n(_),
                w = n("BU0j"),
                k = {
                    settingsDetailSave: "settingsDetailSave"
                },
                x = n("mw9i"),
                S = n("0yYu"),
                E = n("/yvb"),
                C = n("rHpw"),
                T = y.a.e4cb8f8f,
                O = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_renderWithFetchSettings", (function() {
                            var e = t.props.fetchStatus;
                            return l.createElement(v.a, {
                                fetchStatus: e,
                                onRequestRetry: t._handleFetch,
                                render: t._render
                            })
                        })), c()(i()(t), "_render", (function() {
                            var e = t.props,
                                n = e.children,
                                r = e.onSubmit,
                                i = e.submitDisabled,
                                a = e.submitLabel,
                                o = e.submitType,
                                s = e.withMarginBottom;
                            return l.createElement(x.a, {
                                style: [A.contentRoot, s && A.withMarginBottom]
                            }, n, r ? l.createElement(l.Fragment, null, l.createElement(S.a, null), l.createElement(x.a, {
                                style: [A.buttonContainer]
                            }, l.createElement(E.a, {
                                disabled: i,
                                onPress: r,
                                style: A.button,
                                testID: k.settingsDetailSave,
                                type: o
                            }, a))) : null)
                        })), c()(i()(t), "_handleFetch", (function() {
                            var e = t.props,
                                n = e.createLocalApiErrorHandler;
                            (0, e.fetchSettingsIfNeeded)().catch(n())
                        })), t
                    }
                    o()(t, e);
                    var n = t.prototype;
                    return n.UNSAFE_componentWillMount = function() {
                        this._handleFetch()
                    }, n.getBackLocation = function() {
                        var e = this.props,
                            t = e.location,
                            n = e.loggedInUser ? "/settings" : "/settings/account/personalization";
                        return t && t.pathname === n ? "/" : n
                    }, n.render = function() {
                        var e = this.props,
                            t = e.screenType,
                            n = e.loggedInUser,
                            r = e.rightControl,
                            i = e.secondaryBar,
                            a = e.title,
                            o = this.getBackLocation(),
                            s = n ? "@" + n.screen_name : void 0;
                        return l.createElement(w.a, {
                            backLocation: o,
                            rightControl: r,
                            screenType: t,
                            secondaryBar: i,
                            showSubtitleOnWideDetail: !1,
                            subtitle: s,
                            title: a
                        }, n ? this._renderWithFetchSettings() : this._render())
                    }, t
                }(l.Component);
            c()(O, "defaultProps", {
                submitLabel: T,
                submitType: "primary",
                withMarginBottom: !0
            });
            var A = C.a.create((function(e) {
                return {
                    contentRoot: {
                        backgroundColor: e.colors.cellBackground,
                        backgroundClip: "content-box",
                        justifyContent: "flex-start"
                    },
                    buttonContainer: {
                        backgroundColor: e.colors.cellBackground,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        marginVertical: 0,
                        marginHorizontal: "auto",
                        paddingVertical: e.spaces.xSmall,
                        paddingHorizontal: 0
                    },
                    button: {
                        marginVertical: 0,
                        marginHorizontal: e.spaces.xSmall
                    },
                    withMarginBottom: {
                        marginBottom: e.spaces.jumbo
                    }
                }
            }));
            t.a = g(O)
        },
        "9RkS": function(e, t, n) {
            "use strict";
            n("cI1W");
            var r = n("97Jx"),
                i = n.n(r),
                a = (n("4oWw"), n("nruA"), n("1Pcy")),
                o = n.n(a),
                s = n("W/Kd"),
                c = n.n(s),
                l = n("KEM+"),
                d = n.n(l),
                u = n("l0/+"),
                p = n("xa7s"),
                h = n("ERkP"),
                f = n("CHgo"),
                b = n("py1r"),
                m = n("I4+6"),
                g = n("cm6r"),
                v = n("7nmT"),
                _ = n.n(v),
                y = n("rHpw"),
                w = n("/uF9"),
                k = n.n(w),
                x = n("ix0h"),
                S = n.n(x),
                E = n("3xO4"),
                C = n.n(E),
                T = function(e) {
                    function t(t, n) {
                        var r;
                        return r = e.call(this, t, n) || this, d()(o()(r), "_sliderLength", 1), d()(o()(r), "_isActive", !1), d()(o()(r), "_keyPressValueDelta", 1), d()(o()(r), "_shouldOverrideRTL", (function() {
                            return k.a.isRTL && r.props.keepLTR
                        })), d()(o()(r), "_isRTL", (function() {
                            return k.a.isRTL && !r.props.keepLTR
                        })), d()(o()(r), "_handleRootRef", (function(e) {
                            var t = _.a.findDOMNode(e);
                            t instanceof window.HTMLElement && (r._removeTouchMoveToScrollListener = Object(f.a)(t, r._handleTouchMoveToScroll, !1))
                        })), d()(o()(r), "_handleSliderRef", (function(e) {
                            r._sliderRef = e
                        })), d()(o()(r), "_handleLayout", (function(e) {
                            var t = r.props.isVertical;
                            r._sliderLength = e.nativeEvent.layout[t ? "height" : "width"]
                        })), d()(o()(r), "_resetKeyPressValueDelta", (function() {
                            var e = r.props,
                                t = e.min,
                                n = e.max,
                                i = e.step;
                            r._keyPressValueDelta = "number" == typeof i ? i : .001 * (n - t)
                        })), d()(o()(r), "_handleKeyUp", (function(e) {
                            r._resetKeyPressValueDelta()
                        })), d()(o()(r), "_handleKeyDown", (function(e) {
                            var t = r.props,
                                n = t.keyboardStep,
                                i = t.min,
                                a = t.max,
                                o = t.step,
                                s = t.value,
                                c = e.altKey,
                                l = e.ctrlKey,
                                d = e.metaKey;
                            if (!(c || l || d)) {
                                var u = r._isRTL(),
                                    p = "ArrowUp" === e.key || e.key === (u ? "ArrowLeft" : "ArrowRight"),
                                    h = "ArrowDown" === e.key || e.key === (u ? "ArrowRight" : "ArrowLeft");
                                if (p || h) {
                                    var f = s;
                                    if (n) f = r._normalizeValue(s + n * (p ? 1 : -1));
                                    else {
                                        var b = .05 * (a - i);
                                        "number" == typeof o && b < o && (b = o);
                                        var m = Math.min(r._keyPressValueDelta, b) * (p ? 1 : -1);
                                        r._keyPressValueDelta *= 1.4, f = r._normalizeValue(s + m)
                                    }
                                    r._triggerChange(f), f !== i && f !== a || r._resetKeyPressValueDelta(), e.preventDefault()
                                }
                            }
                        })), d()(o()(r), "_handleMouseDown", (function(e) {
                            e.preventDefault()
                        })), d()(o()(r), "_normalizeValue", (function(e) {
                            var t = r.props,
                                n = t.min,
                                i = t.max,
                                a = r._roundToMultipleOfStep(e);
                            return Math.max(n, Math.min(a, i))
                        })), d()(o()(r), "_roundToMultipleOfStep", (function(e) {
                            var t = r.props.step;
                            return "number" == typeof t ? t * Math.round(e / t) : e
                        })), d()(o()(r), "_triggerChange", (function(e) {
                            (0, r.props.onChange)(r._normalizeValue(e))
                        })), d()(o()(r), "_handleStartShouldSetPanResponder", (function(e, t) {
                            return !0
                        })), d()(o()(r), "_handleMoveShouldSetPanResponder", (function(e, t) {
                            return !0
                        })), d()(o()(r), "_handlePanResponderGrant", (function(e, t) {
                            var n = r.props,
                                i = n.isVertical,
                                a = n.min,
                                o = i ? r._getLocationY(e) : r._getLocationX(e),
                                s = r._normalizeValue(a + r._scaleLengthByMinMaxRatio(o));
                            r._triggerChange(s), r._valueOnGrant = s, r._setActive(!0)
                        })), d()(o()(r), "_scaleLengthByMinMaxRatio", (function(e) {
                            var t = r.props,
                                n = t.min,
                                i = t.max;
                            return e / r._sliderLength * (i - n)
                        })), d()(o()(r), "_getLocationX", (function(e) {
                            var t = e.currentTarget,
                                n = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                                    left: 0
                                },
                                i = e.nativeEvent.pageX - window.pageXOffset - (n && n.left || 0);
                            return r._isRTL() ? r._sliderLength - i : i
                        })), d()(o()(r), "_getLocationY", (function(e) {
                            var t = e.currentTarget,
                                n = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                                    top: 0
                                },
                                i = e.nativeEvent.pageY - window.pageYOffset - (n && n.top || 0);
                            return r._sliderLength - i
                        })), d()(o()(r), "_setActive", (function(e) {
                            var t = r.props.onActive;
                            r._isActive = e, t && t(r._isActive)
                        })), d()(o()(r), "_handleTouchMoveToScroll", (function(e) {
                            e.preventDefault()
                        })), d()(o()(r), "_handlePanResponderChange", (function(e) {
                            var t = 0;
                            t = r.props.isVertical ? -1 * e.dy : (r._isRTL() ? -1 : 1) * e.dx, r._triggerChange(r._valueOnGrant + r._scaleLengthByMinMaxRatio(t))
                        })), d()(o()(r), "_handlePanResponderMove", (function(e, t) {
                            r._handlePanResponderChange(t)
                        })), d()(o()(r), "_handlePanResponderEnd", (function(e, t) {
                            r._handlePanResponderChange(t), r._setActive(!1)
                        })), d()(o()(r), "_handleFocusRingGained", (function() {
                            r.setState({
                                focused: !0
                            })
                        })), d()(o()(r), "_handleFocusRingLost", (function() {
                            r.setState({
                                focused: !1
                            })
                        })), r.state = {
                            focused: !1
                        }, r._resetKeyPressValueDelta(), r._panResponder = S.a.create({
                            onStartShouldSetPanResponder: r._handleStartShouldSetPanResponder,
                            onMoveShouldSetPanResponder: r._handleMoveShouldSetPanResponder,
                            onPanResponderGrant: r._handlePanResponderGrant,
                            onPanResponderMove: r._handlePanResponderMove,
                            onPanResponderRelease: r._handlePanResponderEnd,
                            onPanResponderTerminate: r._handlePanResponderEnd
                        }), r
                    }
                    c()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.props.autoFocus && this._sliderRef && this._sliderRef.focus()
                    }, n.componentWillUnmount = function() {
                        this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener()
                    }, n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.accessibilityLabel,
                            r = t.accessibilityLabelValueText,
                            a = t.color,
                            o = t.isVertical,
                            s = t.min,
                            c = t.minIcon,
                            l = t.max,
                            d = t.maxIcon,
                            f = t.step,
                            v = t.withHidingThumb,
                            _ = t.withMarkers,
                            w = t.value,
                            k = y.a.theme.colors[a],
                            x = p.b(k),
                            S = u.c({
                                color: x,
                                percent: .33,
                                replace: !0
                            }),
                            E = p.e(S),
                            T = m.a.generate({
                                backgroundColor: y.a.theme.colors.transparent,
                                color: k
                            }),
                            A = "white" === a ? u.a({
                                color: x,
                                coefficient: .4
                            }) : u.b({
                                color: x,
                                coefficient: .5
                            }),
                            R = p.e(A),
                            P = {
                                backgroundColor: k
                            },
                            I = {
                                backgroundColor: R
                            },
                            j = {
                                backgroundColor: E
                            },
                            D = this._shouldOverrideRTL(),
                            L = this.props.isVertical ? "bottom" : D ? "right" : "left",
                            B = [];
                        if (_ && "number" == typeof f) {
                            var M = l - s / f + 1;
                            B = Array.from({
                                length: M
                            }).map((function(e, t) {
                                return t * f + s
                            })).filter((function(e) {
                                return e !== w
                            })).map((function(e) {
                                var t;
                                return {
                                    value: e,
                                    style: ((t = {})[L] = 100 * ((e - s) / (l - s)) + "%", t),
                                    thumbStyle: e <= w ? P : I
                                }
                            }))
                        }
                        return h.createElement(C.a, {
                            style: [O.root, o && O.verticalRoot, D && O.ltr]
                        }, o && d ? h.createElement(C.a, {
                            style: O.maxIconVerticalMargin
                        }, d) : !o && c ? h.createElement(C.a, {
                            style: D ? O.minIconHorizontalMarginOverrideRTL : O.minIconHorizontalMargin
                        }, c) : null, h.createElement(b.a, null, (function(t) {
                            var c, d = t.isHovered,
                                u = e.state.focused || e._isActive,
                                p = v && !d && !u,
                                f = (w - s) / (l - s),
                                m = {
                                    flexGrow: f
                                },
                                _ = ((c = {})[L] = 100 * f + "%", c),
                                y = [O.thumbButton, o ? O.verticalThumbButton : D ? O.horizontalThumbButtonOverrideRTL : O.horizontalThumbButton];
                            return h.createElement(C.a, i()({
                                style: [O.slider, o ? O.verticalSlider : O.horizontalSlider]
                            }, e._panResponder.panHandlers, {
                                onLayout: e._handleLayout,
                                ref: e._handleRootRef
                            }), h.createElement(C.a, {
                                style: [O.track, o ? O.verticalTrack : O.horizontalTrack, p && (o ? O.verticalTrackWithHiddenThumb : O.horizontalTrackWithHiddenThumb), "white" === a ? j : I]
                            }, h.createElement(C.a, {
                                style: [O.progress, P, m]
                            }), h.createElement(b.a, {
                                onFocusRingGained: e._handleFocusRingGained,
                                onFocusRingLost: e._handleFocusRingLost
                            }, (function(t) {
                                var i = t.isHovered,
                                    a = (t.isPressed, t.hasFocusRing);
                                return h.createElement(C.a, {
                                    accessibilityLabel: n,
                                    accessibilityRole: "slider",
                                    accessible: !0,
                                    "aria-valuemax": l,
                                    "aria-valuemin": s,
                                    "aria-valuenow": w,
                                    "aria-valuetext": r || w,
                                    onKeyDown: e._handleKeyDown,
                                    onKeyUp: e._handleKeyUp,
                                    onMouseDown: e._handleMouseDown,
                                    ref: e._handleSliderRef,
                                    style: [y, T.transitionStyle, (a || i) && T.hoverStyle, u && T.pressedStyle, a && T.focusRingStyle, _]
                                }, h.createElement(C.a, {
                                    style: [O.thumb, p && O.thumbHidden, u && O.thumbActive, P]
                                }))
                            })), B.map((function(e) {
                                return h.createElement(g.a, {
                                    accessibilityRole: "none",
                                    interactiveStyles: T,
                                    key: e.value,
                                    style: [y, e.style]
                                }, h.createElement(C.a, {
                                    style: [O.markerThumb, e.thumbStyle]
                                }))
                            }))))
                        })), o && c ? h.createElement(C.a, {
                            style: O.minIconVerticalMargin
                        }, c) : !o && d ? h.createElement(C.a, {
                            style: D ? O.maxIconHorizontalMarginOverrideRTL : O.maxIconHorizontalMargin
                        }, d) : null)
                    }, t
                }(h.Component);
            d()(T, "defaultProps", {
                color: "primary",
                step: 1
            });
            var O = y.a.create((function(e) {
                return {
                    root: {
                        userSelect: "none",
                        flexDirection: "row",
                        alignItems: "center"
                    },
                    ltr: {
                        direction: "ltr"
                    },
                    verticalRoot: {
                        flexDirection: "column",
                        flexGrow: 1
                    },
                    minIconHorizontalMargin: {
                        marginRight: e.spaces.xSmall
                    },
                    maxIconHorizontalMargin: {
                        marginLeft: e.spaces.xSmall
                    },
                    minIconHorizontalMarginOverrideRTL: {
                        marginLeft: e.spaces.xSmall
                    },
                    maxIconHorizontalMarginOverrideRTL: {
                        marginRight: e.spaces.xSmall
                    },
                    maxIconVerticalMargin: {
                        marginBottom: e.spaces.xSmall
                    },
                    minIconVerticalMargin: {
                        marginTop: e.spaces.xSmall
                    },
                    slider: {
                        cursor: "pointer",
                        flexGrow: 1,
                        alignItems: "center"
                    },
                    verticalSlider: {
                        width: e.spaces.medium,
                        flexDirection: "column"
                    },
                    horizontalSlider: {
                        height: e.spaces.medium,
                        flexDirection: "row"
                    },
                    track: {
                        backgroundColor: e.colors.lightGray,
                        borderRadius: e.borderRadii.medium,
                        flexGrow: 1,
                        alignItems: "center"
                    },
                    verticalTrack: {
                        width: e.spaces.xxSmall,
                        flexDirection: "column",
                        justifyContent: "flex-end"
                    },
                    horizontalTrack: {
                        height: e.spaces.xxSmall,
                        flexDirection: "row"
                    },
                    verticalTrackWithHiddenThumb: {
                        width: "calc(" + e.spaces.xxSmall + " / 2)"
                    },
                    horizontalTrackWithHiddenThumb: {
                        height: "calc(" + e.spaces.xxSmall + " / 2)"
                    },
                    progress: {
                        backgroundColor: e.colors.primary,
                        borderRadius: e.borderRadii.medium,
                        alignSelf: "stretch"
                    },
                    thumbButton: {
                        borderRadius: e.borderRadii.infinite,
                        cursor: "pointer",
                        height: e.spaces.large,
                        width: e.spaces.large,
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute"
                    },
                    verticalThumbButton: {
                        marginBottom: "calc(-1 * (" + e.spaces.large + " / 2))"
                    },
                    horizontalThumbButton: {
                        marginLeft: "calc(-1 * (" + e.spaces.large + " / 2))"
                    },
                    horizontalThumbButtonOverrideRTL: {
                        marginRight: "calc(-1 * (" + e.spaces.large + " / 2))"
                    },
                    thumb: {
                        backgroundColor: e.colors.white,
                        height: e.spaces.small,
                        width: e.spaces.small,
                        borderRadius: e.borderRadii.infinite,
                        transitionProperty: "transform",
                        transitionDuration: "0.1s",
                        transform: [{
                            scale: 1
                        }],
                        boxShadow: e.boxShadows.xSmall
                    },
                    markerThumb: {
                        height: 12,
                        width: 12,
                        borderRadius: e.borderRadii.infinite,
                        boxShadow: e.boxShadows.xSmall
                    },
                    thumbActive: {
                        transform: [{
                            scale: 1.2
                        }]
                    },
                    thumbHidden: {
                        transform: [{
                            scale: 0
                        }]
                    }
                }
            }));
            t.a = T
        },
        MGTW: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var r = a(n("Z1lb")),
                i = a(n("6Gv9"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = i.default.currentCentroidXOfTouchesChangedAfter,
                s = i.default.currentCentroidYOfTouchesChangedAfter,
                c = i.default.previousCentroidXOfTouchesChangedAfter,
                l = i.default.previousCentroidYOfTouchesChangedAfter,
                d = i.default.currentCentroidX,
                u = i.default.currentCentroidY,
                p = {
                    _initializeGestureState: function(e) {
                        e.moveX = 0, e.moveY = 0, e.x0 = 0, e.y0 = 0, e.dx = 0, e.dy = 0, e.vx = 0, e.vy = 0, e.numberActiveTouches = 0, e._accountsForMovesUpTo = 0
                    },
                    _updateGestureStateOnMove: function(e, t) {
                        e.numberActiveTouches = t.numberActiveTouches, e.moveX = o(t, e._accountsForMovesUpTo), e.moveY = s(t, e._accountsForMovesUpTo);
                        var n = e._accountsForMovesUpTo,
                            r = c(t, n),
                            i = o(t, n),
                            a = l(t, n),
                            d = s(t, n),
                            u = e.dx + (i - r),
                            p = e.dy + (d - a),
                            h = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        e.vx = (u - e.dx) / h, e.vy = (p - e.dy) / h, e.dx = u, e.dy = p, e._accountsForMovesUpTo = t.mostRecentTimeStamp
                    },
                    create: function(e) {
                        var t = {
                                handle: null
                            },
                            n = {
                                stateID: Math.random()
                            };
                        return p._initializeGestureState(n), {
                            panHandlers: {
                                onStartShouldSetResponder: function(t) {
                                    return void 0 !== e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, n)
                                },
                                onMoveShouldSetResponder: function(t) {
                                    return void 0 !== e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, n)
                                },
                                onStartShouldSetResponderCapture: function(t) {
                                    return 1 === t.nativeEvent.touches.length && p._initializeGestureState(n), n.numberActiveTouches = t.touchHistory.numberActiveTouches, void 0 !== e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, n)
                                },
                                onMoveShouldSetResponderCapture: function(t) {
                                    var r = t.touchHistory;
                                    return n._accountsForMovesUpTo !== r.mostRecentTimeStamp && (p._updateGestureStateOnMove(n, r), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, n))
                                },
                                onResponderGrant: function(i) {
                                    return t.handle || (t.handle = r.default.createInteractionHandle()), n.x0 = d(i.touchHistory), n.y0 = u(i.touchHistory), n.dx = 0, n.dy = 0, e.onPanResponderGrant && e.onPanResponderGrant(i, n), void 0 === e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder()
                                },
                                onResponderReject: function(r) {
                                    h(t, e.onPanResponderReject, r, n)
                                },
                                onResponderRelease: function(r) {
                                    h(t, e.onPanResponderRelease, r, n), p._initializeGestureState(n)
                                },
                                onResponderStart: function(t) {
                                    var r = t.touchHistory;
                                    n.numberActiveTouches = r.numberActiveTouches, e.onPanResponderStart && e.onPanResponderStart(t, n)
                                },
                                onResponderMove: function(t) {
                                    var r = t.touchHistory;
                                    n._accountsForMovesUpTo !== r.mostRecentTimeStamp && (p._updateGestureStateOnMove(n, r), e.onPanResponderMove && e.onPanResponderMove(t, n))
                                },
                                onResponderEnd: function(r) {
                                    var i = r.touchHistory;
                                    n.numberActiveTouches = i.numberActiveTouches, h(t, e.onPanResponderEnd, r, n)
                                },
                                onResponderTerminate: function(r) {
                                    h(t, e.onPanResponderTerminate, r, n), p._initializeGestureState(n)
                                },
                                onResponderTerminationRequest: function(t) {
                                    return void 0 === e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, n)
                                }
                            },
                            getInteractionHandle: function() {
                                return t.handle
                            }
                        }
                    }
                };

            function h(e, t, n, i) {
                e.handle && (r.default.clearInteractionHandle(e.handle), e.handle = null), t && t(n, i)
            }
            var f = p;
            t.default = f, e.exports = t.default
        },
        NeAX: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return w
            })), n.d(t, "selectPreferences", (function() {
                return E
            })), n.d(t, "selectData", (function() {
                return C
            })), n.d(t, "selectUserPreferences", (function() {
                return T
            })), n.d(t, "selectPreferencesFetchStatus", (function() {
                return O
            })), n.d(t, "selectFetchDataStatus", (function() {
                return A
            })), n.d(t, "selectAge", (function() {
                return R
            })), n.d(t, "selectBirthdate", (function() {
                return P
            })), n.d(t, "selectHasExactAge", (function() {
                return I
            })), n.d(t, "selectGender", (function() {
                return j
            })), n.d(t, "selectLanguage", (function() {
                return D
            })), n.d(t, "selectSignupDetails", (function() {
                return L
            })), n.d(t, "selectTwitterInterests", (function() {
                return B
            })), n.d(t, "selectFetchTwitterInterestsStatus", (function() {
                return M
            })), n.d(t, "selectPartnerInterests", (function() {
                return N
            })), n.d(t, "selectFetchPartnerInterestsStatus", (function() {
                return z
            })), n.d(t, "clearLocations", (function() {
                return H
            })), n.d(t, "updateGender", (function() {
                return F
            })), n.d(t, "updateLanguage", (function() {
                return W
            })), n.d(t, "updateInterest", (function() {
                return G
            })), n.d(t, "fetchPreferencesIfNeeded", (function() {
                return U
            })), n.d(t, "updatePreferences", (function() {
                return K
            })), n.d(t, "updateSettings", (function() {
                return q
            })), n.d(t, "fetchDataIfNeeded", (function() {
                return J
            })), n.d(t, "createAudienceDownload", (function() {
                return X
            })), n.d(t, "createDataDownload", (function() {
                return Q
            })), n.d(t, "fetchTwitterInterestsIfNeeded", (function() {
                return Z
            })), n.d(t, "fetchPartnerInterestsIfNeeded", (function() {
                return te
            })), n.d(t, "syncSettings", (function() {
                return ie
            }));
            n("yKDW"), n("LnO1"), n("3eMz"), n("dtAy"), n("DB+v"), n("PN9k");
            var r, i = n("RqPI"),
                a = n("P1r1"),
                o = n("hqKg"),
                s = n("kGix"),
                c = n("YeIG"),
                l = n("Ssj5"),
                d = n("WDmn"),
                u = n("oEOe"),
                p = "rweb/personalization",
                h = Object(u.a)(p, "FETCH_PREFERENCES"),
                f = Object(u.a)(p, "UPDATE_PREFERENCES"),
                b = Object(u.a)(p, "FETCH_DATA"),
                m = Object(u.a)(p, "UPDATE_COOKIES"),
                g = Object(u.a)(p, "FETCH_TWITTER_INTERESTS"),
                v = Object(u.a)(p, "FETCH_PARTNER_INTERESTS"),
                _ = p + "/" + "CLEAR_LOCATIONS",
                y = {
                    preferences: {
                        data: {},
                        fetchStatus: s.a.NONE
                    },
                    data: {
                        data: {},
                        fetchStatus: s.a.NONE
                    },
                    twitter_interests: {
                        data: {},
                        fetchStatus: s.a.NONE
                    },
                    partner_interests: {
                        data: {},
                        fetchStatus: s.a.NONE
                    }
                };

            function w(e, t) {
                switch (void 0 === e && (e = y), t.type) {
                    case h.REQUEST:
                        return Object.assign({}, e, {
                            preferences: Object.assign({}, e.preferences, {
                                fetchStatus: s.a.LOADING
                            })
                        });
                    case h.SUCCESS:
                        return Object.assign({}, e, {
                            preferences: {
                                data: Object.assign({}, e.preferences.data, {}, t.payload),
                                error: null,
                                fetchStatus: s.a.LOADED
                            }
                        });
                    case h.FAILURE:
                        return Object.assign({}, e, {
                            preferences: Object.assign({}, e.preferences, {
                                error: t.payload,
                                fetchStatus: s.a.FAILED
                            })
                        });
                    case f.REQUEST:
                        return Object.assign({}, e, {
                            preferences: {
                                data: Object.assign({}, e.preferences.data, {}, t.payload),
                                error: null,
                                fetchStatus: s.a.LOADED
                            }
                        });
                    case b.REQUEST:
                        return Object.assign({}, e, {
                            data: Object.assign({}, e.data, {
                                fetchStatus: s.a.LOADING
                            })
                        });
                    case b.SUCCESS:
                        return Object.assign({}, e, {
                            data: {
                                data: Object.assign({}, e.data.data, {}, t.payload),
                                error: null,
                                fetchStatus: s.a.LOADED
                            }
                        });
                    case b.FAILURE:
                        return Object.assign({}, e, {
                            data: Object.assign({}, e.data, {
                                error: t.payload,
                                fetchStatus: s.a.FAILED
                            })
                        });
                    case g.REQUEST:
                        return Object.assign({}, e, {
                            twitter_interests: Object.assign({}, e.twitter_interests, {
                                fetchStatus: s.a.LOADING
                            })
                        });
                    case g.SUCCESS:
                        return Object.assign({}, e, {
                            twitter_interests: {
                                data: Object.assign({}, e.twitter_interests.data, {}, t.payload),
                                error: null,
                                fetchStatus: s.a.LOADED
                            }
                        });
                    case g.FAILURE:
                        return Object.assign({}, e, {
                            twitter_interests: Object.assign({}, e.twitter_interests, {
                                error: t.payload,
                                fetchStatus: s.a.FAILED
                            })
                        });
                    case v.REQUEST:
                        return Object.assign({}, e, {
                            partner_interests: Object.assign({}, e.partner_interests, {
                                fetchStatus: s.a.LOADING
                            })
                        });
                    case v.SUCCESS:
                        return Object.assign({}, e, {
                            partner_interests: {
                                data: Object.assign({}, e.partner_interests.data, {}, t.payload),
                                error: null,
                                fetchStatus: s.a.LOADED
                            }
                        });
                    case v.FAILURE:
                        return Object.assign({}, e, {
                            partner_interests: Object.assign({}, e.partner_interests, {
                                error: t.payload,
                                fetchStatus: s.a.FAILED
                            })
                        });
                    case _:
                        return Object.assign({}, e, {
                            data: Object.assign({}, e.data, {
                                data: Object.assign({}, e.data.data, {
                                    location_history: []
                                })
                            })
                        });
                    default:
                        return e
                }
            }
            l.a.register(((r = {}).personalization = w, r));
            var k = {
                    allowCookieUse: "use_cookie_personalization",
                    allowDeviceAccess: "allow_logged_out_device_personalization",
                    allowLocationHistoryUse: "allow_location_history_personalization",
                    allowPartnerships: "allow_sharing_data_for_third_party_personalization",
                    allowPersonalization: "allow_ads_personalization"
                },
                x = {
                    allowCookieUse: "use_cookie_personalization",
                    allowDeviceAccess: "link_logged_out_devices",
                    allowPartnerships: "share_data_with_third_party",
                    allowPersonalization: "allow_ads_personalization"
                },
                S = {
                    use_age_for_personalization: "age_preferences",
                    use_gender_for_personalization: "gender_preferences"
                },
                E = function(e) {
                    return e.personalization.preferences.data
                },
                C = function(e) {
                    return e.personalization.data.data
                },
                T = Object(o.createSelector)(i.e, E, a.f, (function(e, t, n) {
                    var r = e ? [k, n] : [x, t],
                        i = r[0],
                        a = r[1];
                    return Object.keys(i).reduce((function(e, t) {
                        return e[t] = a[i[t]], e
                    }), {})
                })),
                O = function(e) {
                    var t = E(e);
                    return Object(c.a)(t) ? e.personalization.preferences.fetchStatus : s.a.LOADED
                },
                A = function(e) {
                    return e.personalization.data.fetchStatus
                },
                R = function(e) {
                    return e.personalization.data.data.age ? e.personalization.data.data.age : []
                },
                P = function(e) {
                    return e.personalization.data.data.birth_date ? e.personalization.data.data.birth_date : ""
                },
                I = function(e) {
                    return !!e.personalization.data.data.has_exact_age
                },
                j = function(e) {
                    var t = C(e),
                        n = E(e),
                        r = n.gender_preferences && n.gender_preferences.gender_override;
                    return r && r.type ? r : {
                        type: t.gender,
                        value: t.gender
                    }
                },
                D = function(e) {
                    return e.personalization.data.data.languages ? e.personalization.data.data.languages : []
                },
                L = function(e) {
                    return e.personalization.data.data.sign_up_details ? e.personalization.data.data.sign_up_details : {}
                },
                B = function(e) {
                    return e.personalization.twitter_interests.data
                },
                M = function(e) {
                    return e.personalization.twitter_interests.fetchStatus
                },
                N = function(e) {
                    return e.personalization.partner_interests.data
                },
                z = function(e) {
                    return e.personalization.partner_interests.fetchStatus
                },
                H = function() {
                    return function(e, t) {
                        var n = t(),
                            r = E(n),
                            i = Date.now(),
                            a = {
                                location_preferences: Object.assign({}, r.location_preferences, {
                                    override_times: [i]
                                })
                            };
                        return e(K(a)).then((function() {
                            return e({
                                type: _
                            })
                        }))
                    }
                },
                F = function(e) {
                    return function(t, n) {
                        var r = n(),
                            i = E(r),
                            a = {
                                gender_preferences: Object.assign({}, i.gender_preferences, {
                                    gender_override: e
                                })
                            };
                        return t(K(a))
                    }
                },
                W = function(e, t) {
                    return function(n, r) {
                        if (Object(c.a)(e)) return Promise.resolve();
                        var i = r(),
                            a = E(i),
                            o = a.language_preferences.disabled_languages || [],
                            s = o.indexOf(e),
                            l = s > -1;
                        if (l && t) o.splice(s, 1);
                        else {
                            if (l || t) return Promise.resolve();
                            o.push(e)
                        }
                        var d = {
                            language_preferences: Object.assign({}, a.language_preferences, {
                                disabled_languages: o
                            })
                        };
                        return n(K(d))
                    }
                },
                G = function(e, t, n) {
                    return function(r, i) {
                        var a;
                        if (Object(c.a)(e) || -1 === ["ads", "partner"].indexOf(n)) return Promise.resolve();
                        var o = "partner" === n,
                            s = i(),
                            l = E(s).interest_preferences,
                            d = o ? "disabled_partner_interests" : "disabled_interests",
                            u = l[d],
                            p = u.indexOf(e),
                            h = p > -1;
                        if (h && t) u.splice(p, 1);
                        else {
                            if (h || t) return Promise.resolve();
                            u.push(e)
                        }
                        var f = {
                            interest_preferences: (a = {
                                disabled_interests: l.disabled_interests,
                                disabled_partner_interests: l.disabled_partner_interests
                            }, a[d] = u, a)
                        };
                        return r(K(f))
                    }
                },
                U = function() {
                    return function(e, t, n) {
                        n.api;
                        var r = t().personalization.preferences;
                        return r.fetchStatus !== s.a.LOADING && r.fetchStatus !== s.a.LOADED ? e($()) : Promise.resolve()
                    }
                },
                $ = function() {
                    return function(e, t, n) {
                        var r = n.api;
                        return Object(u.b)(e, {
                            request: r.Personalization.fetchPreferences
                        })({
                            actionTypes: h,
                            context: "FETCH_PERSONALIZATION_PREFERENCES"
                        })
                    }
                },
                K = function(e) {
                    return function(t, n, r) {
                        var i = r.api;
                        return Object(c.a)(e) ? Promise.resolve() : Object(u.c)(t, {
                            params: {
                                preferences: e
                            },
                            request: i.Personalization.updatePreferences
                        })({
                            actionTypes: f,
                            context: "ACTION_UPDATE_PERSONALIZATION_PREFERENCES",
                            payload: e
                        })
                    }
                },
                q = function(e) {
                    return function(t, n, r) {
                        var o = r.api;
                        if (Object(c.a)(e)) return Promise.resolve();
                        var s = n(),
                            l = i.e(s),
                            u = l ? k : x,
                            p = Object.keys(e).reduce((function(t, n) {
                                var r;
                                n in u && (t[u[n]] = e[n]);
                                n in S && (t[S[n]] = ((r = {})[n] = e[n], r));
                                return t
                            }), {});
                        return l ? t(a.E(p)).then((function() {
                            Object(d.updateBranchTracking)(o), t(re(p))
                        })) : V(t, p, o)
                    }
                },
                V = function(e, t, n) {
                    return Object(u.c)(e, {
                        params: {
                            preferences: t
                        },
                        request: n.Personalization.updatePreferences
                    })({
                        actionTypes: f,
                        context: "ACTION_UPDATE_PERSONALIZATION_PREFERENCES",
                        payload: t
                    }).then((function() {
                        Object(d.updateBranchTracking)(n)
                    }))
                },
                J = function() {
                    return function(e, t, n) {
                        n.api;
                        var r = t().personalization.data;
                        return r.fetchStatus !== s.a.LOADING && r.fetchStatus !== s.a.LOADED ? e(Y()) : Promise.resolve()
                    }
                },
                Y = function() {
                    return function(e, t, n) {
                        var r = n.api;
                        return Object(u.b)(e, {
                            request: r.Personalization.fetchData
                        })({
                            actionTypes: b,
                            context: "FETCH_PERSONALIZATION_DATA"
                        })
                    }
                },
                X = function() {
                    return function(e, t, n) {
                        var r = n.api;
                        return Object(u.d)(e, {
                            request: r.Personalization.createAudienceDownload
                        })("CREATE_AUDIENCE_DOWNLOAD")
                    }
                },
                Q = function() {
                    return function(e, t, n) {
                        var r = n.api;
                        return Object(u.d)(e, {
                            request: r.Personalization.createDataDownload
                        })("CREATE_DATA_DOWNLOAD")
                    }
                },
                Z = function() {
                    return function(e, t, n) {
                        n.api;
                        var r = t().personalization.twitter_interests;
                        return r.fetchStatus !== s.a.LOADING && r.fetchStatus !== s.a.LOADED ? e(ee()) : Promise.resolve()
                    }
                },
                ee = function() {
                    return function(e, t, n) {
                        var r = n.api;
                        return Object(u.b)(e, {
                            request: r.Personalization.fetchTwitterInterests
                        })({
                            actionTypes: g,
                            context: "FETCH_PERSONALIZATION_TWITTER_INTERESTS"
                        })
                    }
                },
                te = function() {
                    return function(e, t, n) {
                        n.api;
                        var r = t().personalization.partner_interests;
                        return r.fetchStatus !== s.a.LOADING && r.fetchStatus !== s.a.LOADED ? e(ne()) : Promise.resolve()
                    }
                },
                ne = function() {
                    return function(e, t, n) {
                        var r = n.api;
                        return Object(u.b)(e, {
                            request: r.Personalization.fetchPartnerInterests
                        })({
                            actionTypes: v,
                            context: "FETCH_PERSONALIZATION_PARTNER_INTERESTS"
                        })
                    }
                },
                re = function(e) {
                    return function(t, n, r) {
                        var i = r.api,
                            a = {};
                        return e.hasOwnProperty("use_cookie_personalization") && (a.use_cookie_personalization = e.use_cookie_personalization), e.hasOwnProperty("allow_ads_personalization") && (a.allow_ads_personalization = e.allow_ads_personalization), Object(c.a)(a) ? Promise.resolve() : Object(u.b)(t, {
                            params: a,
                            request: i.Personalization.updateCookies
                        })({
                            actionTypes: m,
                            context: "APP_UPDATE_PERSONALIZATION_COOKIES",
                            params: a
                        })
                    }
                },
                ie = function() {
                    return function(e, t, n) {
                        var r = n.api;
                        return Object(u.d)(e, {
                            request: r.Personalization.syncSettings
                        })("SYNC_SETTINGS")
                    }
                }
        },
        QN5Q: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.cancelIdleCallback = t.default = void 0;
            var r = n("6/RC").canUseDOM && void 0 !== window.requestIdleCallback,
                i = r ? window.requestIdleCallback : function(e, t) {
                    return setTimeout((function() {
                        var t = Date.now();
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }), 1)
                },
                a = r ? window.cancelIdleCallback : function(e) {
                    clearTimeout(e)
                };
            t.cancelIdleCallback = a;
            var o = i;
            t.default = o
        },
        V2ml: function(e, t, n) {
            "use strict";
            n("yIC7");
            var r = n("1Pcy"),
                i = n.n(r),
                a = n("W/Kd"),
                o = n.n(a),
                s = n("KEM+"),
                c = n.n(s),
                l = n("ERkP"),
                d = n("t62R"),
                u = (n("PN9k"), n("5/+E")),
                p = n.n(u),
                h = n("py1r"),
                f = n("I4+6"),
                b = n("rHpw"),
                m = (n("aWzz"), n("7DT3")),
                g = n.n(m),
                v = n("3xO4"),
                _ = n.n(v),
                y = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_handleChange", (function(e) {
                            var n = t.props,
                                r = n.onChange,
                                i = n.checked;
                            r && !i && r(e.nativeEvent.target.checked)
                        })), c()(i()(t), "_setRef", (function(e) {
                            t._ref = e
                        })), t
                    }
                    o()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.disabled,
                            r = t.label,
                            i = t.name,
                            a = t.checked,
                            o = f.a.generate({
                                backgroundColor: b.a.theme.colors.transparent,
                                color: b.a.theme.colors.primary
                            }),
                            s = f.a.generate({
                                backgroundColor: b.a.theme.colors.transparent,
                                color: b.a.theme.colors.deepGray
                            }),
                            c = a ? o : s;
                        return l.createElement(h.a, {
                            disabled: n
                        }, (function(t) {
                            var o = t.hasFocusRing,
                                s = t.isHovered,
                                u = t.isPressed;
                            return l.createElement(_.a, {
                                accessibilityRole: "label",
                                style: [w.root, !n && w.interactive]
                            }, l.createElement(d.b, null, r), l.createElement(_.a, {
                                style: [w.radioContainer]
                            }, l.createElement(_.a, {
                                style: [w.radioBackground, c.transitionStyle, (s || o) && c.hoverStyle, u && c.pressedStyle, o && c.focusRingStyle]
                            }, l.createElement(_.a, {
                                style: [w.circle, a && w.circleActive, n && w.circleDisabled, a && n && w.circleCheckedAndDisabled]
                            }, a ? l.createElement(p.a, {
                                style: w.checkMark
                            }) : null)), g()("input", {
                                checked: a,
                                disabled: n,
                                name: i,
                                onChange: e._handleChange,
                                ref: e._setRef,
                                style: [w.nativeControl],
                                type: "radio"
                            })))
                        }))
                    }, n.focus = function() {
                        this._ref && this._ref.focus()
                    }, t
                }(l.Component);
            c()(y, "displayName", "Radio"), c()(y, "defaultProps", {
                disabled: !1,
                checked: !1
            }), y.propTypes = {};
            var w = b.a.create((function(e) {
                    return {
                        root: {
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            flexGrow: 1,
                            paddingVertical: e.spaces.xxSmall
                        },
                        interactive: {
                            cursor: "pointer"
                        },
                        circleDisabled: {
                            borderColor: e.colors.lightGray
                        },
                        circleCheckedAndDisabled: {
                            backgroundColor: e.colors.mediumGray,
                            borderColor: e.colors.mediumGray
                        },
                        radioContainer: {
                            userSelect: "none",
                            marginLeft: e.spaces.medium
                        },
                        radioBackground: {
                            borderRadius: e.borderRadii.infinite,
                            margin: "-" + e.spaces.xSmall,
                            padding: e.spaces.xSmall
                        },
                        circle: {
                            alignItems: "center",
                            backgroundColor: e.colors.cellBackground,
                            borderColor: e.colors.deepGray,
                            borderStyle: "solid",
                            borderWidth: e.borderWidths.medium,
                            borderRadius: e.spaces.large,
                            height: e.spaces.medium,
                            justifyContent: "center",
                            width: e.spaces.medium
                        },
                        circleActive: {
                            borderColor: e.colors.primary,
                            backgroundColor: e.colors.primary
                        },
                        checkMark: {
                            width: "18px",
                            height: "18px",
                            color: e.colors.whiteOnColor
                        },
                        nativeControl: Object.assign({}, b.a.absoluteFillObject, {
                            cursor: "inherit",
                            height: "100%",
                            margin: 0,
                            opacity: 0,
                            padding: 0,
                            width: "100%"
                        })
                    }
                })),
                k = y;
            n.d(t, "a", (function() {
                return S
            }));
            var x = 1,
                S = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_labelId", "RADIO_GROUP_" + x++ + "_LABEL"), c()(i()(t), "_radioRefs", {}), c()(i()(t), "_handleItemChanged", (function(e) {
                            return function() {
                                var n = t.props,
                                    r = n.name;
                                (0, n.onChange)(r, e)
                            }
                        })), c()(i()(t), "_setRadioRef", (function(e, n) {
                            return function(r) {
                                t._radioRefs[e] = r, n && (t._radioRefs.checked = e)
                            }
                        })), c()(i()(t), "focus", (function() {
                            var e = t._radioRefs.checked,
                                n = e ? t._radioRefs[e] : t._radioRefs[0];
                            n && n.focus()
                        })), t
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.accessibilityLabel,
                            r = t.description,
                            i = t.disabled,
                            a = t.label,
                            o = t.name,
                            s = t.options,
                            c = t.value;
                        return l.createElement(_.a, {
                            accessibilityLabel: n,
                            accessibilityRole: "group",
                            "aria-labelledby": a && !n ? this._labelId : void 0,
                            style: i && E.disabled
                        }, a ? l.createElement(_.a, {
                            accessibilityRole: "label",
                            nativeID: this._labelId,
                            style: E.header
                        }, l.createElement(d.b, {
                            style: E.label,
                            weight: "bold"
                        }, a), r ? l.createElement(d.b, {
                            color: "deepGray",
                            size: "small"
                        }, r) : null) : null, s.map((function(t, n) {
                            return l.createElement(k, {
                                checked: t.value === c,
                                disabled: i,
                                key: t.value,
                                label: t.label,
                                name: o,
                                onChange: e._handleItemChanged(t.value),
                                ref: e._setRadioRef(n, t.value === c)
                            })
                        })))
                    }, t
                }(l.Component);
            c()(S, "defaultProps", {
                disabled: !1
            });
            var E = b.a.create((function(e) {
                return {
                    header: {
                        alignItems: "flex-start"
                    },
                    label: {
                        paddingTop: e.spaces.xSmall,
                        paddingBottom: e.spaces.xxSmall
                    },
                    disabled: {
                        opacity: .5
                    }
                }
            }))
        },
        WDmn: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "initBranchSdk", (function() {
                return o
            })), n.d(t, "updateBranchTracking", (function() {
                return s
            }));
            n("yKDW"), n("dtAy");
            var r = n("2Jqb"),
                i = n.n(r),
                a = n("wrlS"),
                o = function(e) {
                    return a.a.isTrue("responsive_web_branch_sdk_enabled") ? e.Branch.initSdk().then((function(e) {
                        e.is_loading_enabled && c(e.is_tracking_enabled, e.user_identifier)
                    })).catch((function() {
                        return {}
                    })) : Promise.resolve({})
                },
                s = function(e) {
                    return a.a.isTrue("responsive_web_branch_sdk_enabled") ? e.Branch.initSdk().then((function(e) {
                        i.a.disableTracking(!e.is_tracking_enabled)
                    })).catch((function() {
                        return {}
                    })) : Promise.resolve({})
                };
            t.default = o;
            var c = function(e, t) {
                i.a.init("key_live_knJAF6W45vSHVJiP0wn8figpqFePX59K", {
                    tracking_disabled: !e
                }), t && i.a.setIdentity(t)
            }
        },
        XiMS: function(e, t, n) {
            "use strict";
            n("PN9k");
            var r = n("97Jx"),
                i = n.n(r),
                a = n("LdEA"),
                o = n.n(a),
                s = n("1Pcy"),
                c = n.n(s),
                l = n("W/Kd"),
                d = n.n(l),
                u = n("KEM+"),
                p = n.n(u),
                h = n("ERkP"),
                f = n("5/+E"),
                b = n.n(f),
                m = n("py1r"),
                g = n("I4+6"),
                v = n("rHpw"),
                _ = (n("aWzz"), n("7DT3")),
                y = n.n(_),
                w = n("RU7y"),
                k = n.n(w),
                x = n("3xO4"),
                S = n.n(x),
                E = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, p()(c()(t), "_handleChange", (function(e) {
                            var n = t.props,
                                r = n.onChange,
                                i = n.onValueChange,
                                a = r || i;
                            a && a(e.nativeEvent.target.checked)
                        })), p()(c()(t), "_setCheckboxRef", (function(e) {
                            t._checkboxElement = e
                        })), t
                    }
                    d()(t, e);
                    var n = t.prototype;
                    return n.blur = function() {
                        this._checkboxElement && k.a.blur(this._checkboxElement)
                    }, n.focus = function() {
                        this._checkboxElement && k.a.focus(this._checkboxElement)
                    }, n.render = function() {
                        var e = this.props,
                            t = e.checked,
                            n = e.disabled,
                            r = (e.onChange, e.onValueChange, e.style),
                            a = e.value,
                            s = o()(e, ["checked", "disabled", "onChange", "onValueChange", "style", "value"]),
                            c = t || a,
                            l = g.a.generate({
                                backgroundColor: v.a.theme.colors.transparent,
                                color: v.a.theme.colors.primary
                            }),
                            d = g.a.generate({
                                backgroundColor: v.a.theme.colors.transparent,
                                color: v.a.theme.colors.deepGray
                            }),
                            u = c ? l : d,
                            p = y()("input", {
                                checked: c,
                                disabled: n,
                                onChange: this._handleChange,
                                ref: this._setCheckboxRef,
                                style: [C.nativeControl, C.cursorInherit],
                                type: "checkbox"
                            });
                        return h.createElement(m.a, {
                            disabled: n
                        }, (function(e) {
                            return h.createElement(S.a, i()({}, s, {
                                style: [C.root, r, n && C.cursorDefault]
                            }), (a = (t = e).hasFocusRing, o = t.isHovered, l = t.isPressed, h.createElement(S.a, {
                                style: [C.fakeControlInteractiveStyles, u.transitionStyle, (o || a) && u.hoverStyle, l && u.pressedStyle, a && u.focusRingStyle]
                            }, h.createElement(S.a, {
                                style: [C.fakeControl, c && C.fakeControlChecked, n && C.fakeControlDisabled, c && n && C.fakeControlCheckedAndDisabled]
                            }, c ? h.createElement(b.a, {
                                style: C.icon
                            }) : null))), p);
                            var t, a, o, l
                        }))
                    }, t
                }(h.Component);
            p()(E, "displayName", "@twitter/Checkbox"), p()(E, "defaultProps", {
                checked: !1,
                disabled: !1,
                value: !1
            }), E.propTypes = {};
            var C = v.a.create((function(e) {
                return {
                    root: {
                        cursor: "pointer",
                        userSelect: "none"
                    },
                    cursorDefault: {
                        cursor: "default"
                    },
                    cursorInherit: {
                        cursor: "inherit"
                    },
                    fakeControlInteractiveStyles: {
                        padding: e.spaces.xSmall,
                        margin: "-" + e.spaces.xSmall,
                        borderRadius: e.borderRadii.infinite
                    },
                    fakeControl: {
                        alignItems: "center",
                        backgroundColor: e.colors.cellBackground,
                        borderColor: e.colors.deepGray,
                        borderRadius: 4,
                        borderStyle: "solid",
                        borderWidth: 2,
                        height: e.spaces.medium,
                        justifyContent: "center",
                        width: e.spaces.medium
                    },
                    fakeControlChecked: {
                        backgroundColor: e.colors.primary,
                        borderColor: e.colors.primary
                    },
                    fakeControlDisabled: {
                        borderColor: e.colors.lightGray
                    },
                    fakeControlCheckedAndDisabled: {
                        backgroundColor: e.colors.mediumGray,
                        borderColor: e.colors.mediumGray
                    },
                    nativeControl: Object.assign({}, v.a.absoluteFillObject, {
                        height: "100%",
                        margin: 0,
                        opacity: 0,
                        padding: 0,
                        width: "100%"
                    }),
                    icon: Object.assign({}, v.a.absoluteFillObject, {
                        color: e.colors.whiteOnColor,
                        height: e.spaces.medium,
                        margin: "auto"
                    })
                }
            }));
            t.a = E
        },
        Z1lb: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var r, i = (r = n("tI3i")) && r.__esModule ? r : {
                    default: r
                },
                a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                            }
                    return t.default = e, t
                }(n("QN5Q"));
            var o = {
                Events: {
                    interactionStart: "interactionStart",
                    interactionComplete: "interactionComplete"
                },
                runAfterInteractions: function(e) {
                    var t, n = new Promise((function(n) {
                        t = (0, a.default)((function() {
                            e ? n(e()) : n()
                        }))
                    }));
                    return {
                        then: n.then.bind(n),
                        done: n.then.bind(n),
                        cancel: function() {
                            (0, a.cancelIdleCallback)(t)
                        }
                    }
                },
                createInteractionHandle: function() {
                    return 1
                },
                clearInteractionHandle: function(e) {
                    (0, i.default)(!!e, "Must provide a handle to clear.")
                },
                addListener: function() {}
            };
            t.default = o, e.exports = t.default
        },
        ix0h: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.default = void 0;
            var i = ((r = n("MGTW")) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = i, e.exports = t.default
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/shared~bundle.Settings.6db3f8f4.js.map