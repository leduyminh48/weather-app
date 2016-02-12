/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.4", n = function (a, b) {
        return new n.fn.init(a, b)
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isPlainObject: function (a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
                } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
            } else if (g) {
                for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
            } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        }, now: Date.now, support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
            return a === b && (l = !0), 0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, ea = function () {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode)return d;
                        if (h.id === j)return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
                } else {
                    if (f[2])return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName)return H.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                    return p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)while (b = b.parentNode)if (b === a)return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b)return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b)return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)return la(a, b);
                c = a;
                while (c = c.parentNode)h.unshift(c);
                c = b;
                while (c = c.parentNode)i.unshift(c);
                while (h[d] === i[d])d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }), contains: ia(function (a) {
                    return a = a.replace(ca, da), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: oa(function () {
                    return [0]
                }), last: oa(function (a, b) {
                    return [b - 1]
                }), eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = ma(b);
        for (b in{submit: !0, reset: !0})d.pseudos[b] = na(b);
        function qa() {
        }

        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
                } else while (b = b[d])if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g))return !0
                }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)if (c = d.relative[a[i].type])m = [sa(ta(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                }
                m.push(c)
            }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])o(r, s, g, h);
                    if (f) {
                        if (p > 0)while (q--)r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ia(f) : f
        }

        return h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a)return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b))return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b))return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++)if (n.contains(e[b], this))return !0
            }));
            for (b = 0; c > b; b++)n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))for (c in b)n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
                if (e && n(a).is(c))break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)if (n.contains(this, b[a]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            }, remove: function () {
                return h && n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], f = 0, this
            }, disable: function () {
                return h = i = b = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, b || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, b) {
                return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return n.Deferred(function (c) {
                        n.each(b, function (b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? n.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c)
            })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }

    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a))return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)f[b] = c; else if (n.isEmptyObject(f))n.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--)delete g[d[c]]
            }
        }, hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
            } catch (e) {
            }
            M.set(a, b, c)
        } else c = void 0;
        return c
    }

    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        }, data: function (a, b, c) {
            return M.access(a, b, c)
        }, removeData: function (a, b) {
            M.remove(a, b)
        }, _data: function (a, b, c) {
            return L.access(a, b, c)
        }, _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                M.set(this, a)
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c)return c;
                    if (c = M.get(f, d), void 0 !== c)return c;
                    if (c = P(f, d, void 0), void 0 !== c)return c
                } else this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                    empty: n.Callbacks("once memory").add(function () {
                        L.remove(a, [b + "queue", c])
                    })
                })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {
        }
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--)h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i)n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--)c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = $; else if (!d)return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/, ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i, fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;
    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++)pa(f[d], g[d]);
            if (b)if (c)for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++)na(f[d], g[d]); else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)if (e = a[m], e || 0 === e)if ("object" === n.type(e))n.merge(l, e.nodeType ? [e] : e); else if (ca.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                while (j--)f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                j = 0;
                while (e = f[j++])fa.test(e.type || "") && c.push(e)
            }
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)for (d in b.events)f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p))return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++)h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g)for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++)h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};

    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function ta(a) {
        var b = l, c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }

    var ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wa = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };

    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }

            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b
                }, boxSizingReliable: function () {
                    return null == c && g(), c
                }, reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp("^(" + Q + ")(.*)$", "i"), Ba = new RegExp("^([+-])=(" + Q + ")", "i"), Ca = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Da = {letterSpacing: "0", fontWeight: "400"}, Ea = ["Webkit", "O", "Moz", "ms"];

    function Fa(a, b) {
        if (b in a)return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length;
        while (e--)if (b = Ea[e] + c, b in a)return b;
        return d
    }

    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ia(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wa(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e))return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {display: "inline-block"}, xa, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Ja(this, !0)
        }, hide: function () {
            return Ja(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e)
    }

    n.Tween = Ka, Ka.prototype = {
        constructor: Ka, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pa = /queueHooks$/, Qa = [Va], Ra = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
    };

    function Sa() {
        return setTimeout(function () {
            La = void 0
        }), La = n.now()
    }

    function Ta(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], Na.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d])continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m))"inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m)n.style(a, b, m[b])
            });
            for (d in m)g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: La || Sa(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; d > c; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++)if (d = Qa[f].call(j, a, k, j.opts))return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(Xa, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? Qa.unshift(a) : Qa.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = Xa(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Ma), Ma = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
                void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)while (c = f[e++])d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function (a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                f = 0;
                while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                f = 0;
                while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0)return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now(), db = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a)return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm, hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//, kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat("*"), ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];

    function qb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rb(a, b, c, d) {
        var e = {}, f = a === mb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)for (e in h)if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c)f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"])b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = gb.exec(e))f[b[1].toLowerCase()] = b[2]
                        }
                        b = f[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === t ? e : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function (a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function (a) {
                    var b;
                    if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t)return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
            u = "abort";
            for (j in{success: 1, error: 1, complete: 1})v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t))throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild)a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b))n.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b))d(a, b); else for (e in b)Ab(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(xb, "\r\n")}
                }) : {name: b.name, value: c.replace(xb, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Bb = 0, Cb = {}, Db = {0: 200, 1223: 204}, Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Cb)Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)throw h
                }
            }, abort: function () {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Hb)return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Ib = a.document.documentElement;

    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f)return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))a = a.offsetParent;
                return a || Ib
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Kb = a.jQuery, Lb = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
//# sourceMappingURL=jquery.min.map;
/*! jQuery UI - v1.11.4 - 2016-01-05
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (factory) {
    if (typeof define === "function" && define.amd) {

        // AMD. Register as an anonymous module.
        define('jqueryUi', ["jquery"], factory);
    } else {

        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    /*!
     * jQuery UI Core 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */


// $.ui might exist from components with no dependencies, e.g., $.ui.position
    $.ui = $.ui || {};

    $.extend($.ui, {
        version: "1.11.4",

        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });

// plugins
    $.fn.extend({
        scrollParent: function (includeHidden) {
            var position = this.css("position"),
                excludeStaticParent = position === "absolute",
                overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                scrollParent = this.parents().filter(function () {
                    var parent = $(this);
                    if (excludeStaticParent && parent.css("position") === "static") {
                        return false;
                    }
                    return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
                }).eq(0);

            return position === "fixed" || !scrollParent.length ? $(this[0].ownerDocument || document) : scrollParent;
        },

        uniqueId: (function () {
            var uuid = 0;

            return function () {
                return this.each(function () {
                    if (!this.id) {
                        this.id = "ui-id-" + ( ++uuid );
                    }
                });
            };
        })(),

        removeUniqueId: function () {
            return this.each(function () {
                if (/^ui-id-\d+$/.test(this.id)) {
                    $(this).removeAttr("id");
                }
            });
        }
    });

// selectors
    function focusable(element, isTabIndexNotNaN) {
        var map, mapName, img,
            nodeName = element.nodeName.toLowerCase();
        if ("area" === nodeName) {
            map = element.parentNode;
            mapName = map.name;
            if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
                return false;
            }
            img = $("img[usemap='#" + mapName + "']")[0];
            return !!img && visible(img);
        }
        return ( /^(input|select|textarea|button|object)$/.test(nodeName) ?
                !element.disabled :
                "a" === nodeName ?
                element.href || isTabIndexNotNaN :
                    isTabIndexNotNaN) &&
                // the element and all of its ancestors must be visible
            visible(element);
    }

    function visible(element) {
        return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function () {
                return $.css(this, "visibility") === "hidden";
            }).length;
    }

    $.extend($.expr[":"], {
        data: $.expr.createPseudo ?
            $.expr.createPseudo(function (dataName) {
                return function (elem) {
                    return !!$.data(elem, dataName);
                };
            }) :
            // support: jQuery <1.8
            function (elem, i, match) {
                return !!$.data(elem, match[3]);
            },

        focusable: function (element) {
            return focusable(element, !isNaN($.attr(element, "tabindex")));
        },

        tabbable: function (element) {
            var tabIndex = $.attr(element, "tabindex"),
                isTabIndexNaN = isNaN(tabIndex);
            return ( isTabIndexNaN || tabIndex >= 0 ) && focusable(element, !isTabIndexNaN);
        }
    });

// support: jQuery <1.8
    if (!$("<a>").outerWidth(1).jquery) {
        $.each(["Width", "Height"], function (i, name) {
            var side = name === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                type = name.toLowerCase(),
                orig = {
                    innerWidth: $.fn.innerWidth,
                    innerHeight: $.fn.innerHeight,
                    outerWidth: $.fn.outerWidth,
                    outerHeight: $.fn.outerHeight
                };

            function reduce(elem, size, border, margin) {
                $.each(side, function () {
                    size -= parseFloat($.css(elem, "padding" + this)) || 0;
                    if (border) {
                        size -= parseFloat($.css(elem, "border" + this + "Width")) || 0;
                    }
                    if (margin) {
                        size -= parseFloat($.css(elem, "margin" + this)) || 0;
                    }
                });
                return size;
            }

            $.fn["inner" + name] = function (size) {
                if (size === undefined) {
                    return orig["inner" + name].call(this);
                }

                return this.each(function () {
                    $(this).css(type, reduce(this, size) + "px");
                });
            };

            $.fn["outer" + name] = function (size, margin) {
                if (typeof size !== "number") {
                    return orig["outer" + name].call(this, size);
                }

                return this.each(function () {
                    $(this).css(type, reduce(this, size, true, margin) + "px");
                });
            };
        });
    }

// support: jQuery <1.8
    if (!$.fn.addBack) {
        $.fn.addBack = function (selector) {
            return this.add(selector == null ?
                this.prevObject : this.prevObject.filter(selector)
            );
        };
    }

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
    if ($("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        $.fn.removeData = (function (removeData) {
            return function (key) {
                if (arguments.length) {
                    return removeData.call(this, $.camelCase(key));
                } else {
                    return removeData.call(this);
                }
            };
        })($.fn.removeData);
    }

// deprecated
    $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());

    $.fn.extend({
        focus: (function (orig) {
            return function (delay, fn) {
                return typeof delay === "number" ?
                    this.each(function () {
                        var elem = this;
                        setTimeout(function () {
                            $(elem).focus();
                            if (fn) {
                                fn.call(elem);
                            }
                        }, delay);
                    }) :
                    orig.apply(this, arguments);
            };
        })($.fn.focus),

        disableSelection: (function () {
            var eventType = "onselectstart" in document.createElement("div") ?
                "selectstart" :
                "mousedown";

            return function () {
                return this.bind(eventType + ".ui-disableSelection", function (event) {
                    event.preventDefault();
                });
            };
        })(),

        enableSelection: function () {
            return this.unbind(".ui-disableSelection");
        },

        zIndex: function (zIndex) {
            if (zIndex !== undefined) {
                return this.css("zIndex", zIndex);
            }

            if (this.length) {
                var elem = $(this[0]), position, value;
                while (elem.length && elem[0] !== document) {
                    // Ignore z-index if position is set to a value where z-index is ignored by the browser
                    // This makes behavior of this function consistent across browsers
                    // WebKit always returns auto if the element is positioned
                    position = elem.css("position");
                    if (position === "absolute" || position === "relative" || position === "fixed") {
                        // IE returns 0 when zIndex is not specified
                        // other browsers return a string
                        // we ignore the case of nested elements with an explicit value of 0
                        // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                        value = parseInt(elem.css("zIndex"), 10);
                        if (!isNaN(value) && value !== 0) {
                            return value;
                        }
                    }
                    elem = elem.parent();
                }
            }

            return 0;
        }
    });

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
    $.ui.plugin = {
        add: function (module, option, set) {
            var i,
                proto = $.ui[module].prototype;
            for (i in set) {
                proto.plugins[i] = proto.plugins[i] || [];
                proto.plugins[i].push([option, set[i]]);
            }
        },
        call: function (instance, name, args, allowDisconnected) {
            var i,
                set = instance.plugins[name];

            if (!set) {
                return;
            }

            if (!allowDisconnected && ( !instance.element[0].parentNode || instance.element[0].parentNode.nodeType === 11 )) {
                return;
            }

            for (i = 0; i < set.length; i++) {
                if (instance.options[set[i][0]]) {
                    set[i][1].apply(instance.element, args);
                }
            }
        }
    };


    /*!
     * jQuery UI Widget 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/jQuery.widget/
     */


    var widget_uuid = 0,
        widget_slice = Array.prototype.slice;

    $.cleanData = (function (orig) {
        return function (elems) {
            var events, elem, i;
            for (i = 0; (elem = elems[i]) != null; i++) {
                try {

                    // Only trigger remove when necessary to save time
                    events = $._data(elem, "events");
                    if (events && events.remove) {
                        $(elem).triggerHandler("remove");
                    }

                    // http://bugs.jquery.com/ticket/8235
                } catch (e) {
                }
            }
            orig(elems);
        };
    })($.cleanData);

    $.widget = function (name, base, prototype) {
        var fullName, existingConstructor, constructor, basePrototype,
        // proxiedPrototype allows the provided prototype to remain unmodified
        // so that it can be used as a mixin for multiple widgets (#8876)
            proxiedPrototype = {},
            namespace = name.split(".")[0];

        name = name.split(".")[1];
        fullName = namespace + "-" + name;

        if (!prototype) {
            prototype = base;
            base = $.Widget;
        }

        // create selector for plugin
        $.expr[":"][fullName.toLowerCase()] = function (elem) {
            return !!$.data(elem, fullName);
        };

        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function (options, element) {
            // allow instantiation without "new" keyword
            if (!this._createWidget) {
                return new constructor(options, element);
            }

            // allow instantiation without initializing for simple inheritance
            // must use "new" keyword (the code above always passes args)
            if (arguments.length) {
                this._createWidget(options, element);
            }
        };
        // extend with the existing constructor to carry over any static properties
        $.extend(constructor, existingConstructor, {
            version: prototype.version,
            // copy the object used to create the prototype in case we need to
            // redefine the widget later
            _proto: $.extend({}, prototype),
            // track widgets that inherit from this widget in case this widget is
            // redefined after a widget inherits from it
            _childConstructors: []
        });

        basePrototype = new base();
        // we need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, function (prop, value) {
            if (!$.isFunction(value)) {
                proxiedPrototype[prop] = value;
                return;
            }
            proxiedPrototype[prop] = (function () {
                var _super = function () {
                        return base.prototype[prop].apply(this, arguments);
                    },
                    _superApply = function (args) {
                        return base.prototype[prop].apply(this, args);
                    };
                return function () {
                    var __super = this._super,
                        __superApply = this._superApply,
                        returnValue;

                    this._super = _super;
                    this._superApply = _superApply;

                    returnValue = value.apply(this, arguments);

                    this._super = __super;
                    this._superApply = __superApply;

                    return returnValue;
                };
            })();
        });
        constructor.prototype = $.widget.extend(basePrototype, {
            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });

        // If this widget is being redefined then we need to find all widgets that
        // are inheriting from it and redefine all of them so that they inherit from
        // the new version of this widget. We're essentially trying to replace one
        // level in the prototype chain.
        if (existingConstructor) {
            $.each(existingConstructor._childConstructors, function (i, child) {
                var childPrototype = child.prototype;

                // redefine the child widget using the same prototype that was
                // originally used, but inherit from the new version of the base
                $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
            });
            // remove the list of existing child constructors from the old constructor
            // so the old child constructors can be garbage collected
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push(constructor);
        }

        $.widget.bridge(name, constructor);

        return constructor;
    };

    $.widget.extend = function (target) {
        var input = widget_slice.call(arguments, 1),
            inputIndex = 0,
            inputLength = input.length,
            key,
            value;
        for (; inputIndex < inputLength; inputIndex++) {
            for (key in input[inputIndex]) {
                value = input[inputIndex][key];
                if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                    // Clone objects
                    if ($.isPlainObject(value)) {
                        target[key] = $.isPlainObject(target[key]) ?
                            $.widget.extend({}, target[key], value) :
                            // Don't extend strings, arrays, etc. with objects
                            $.widget.extend({}, value);
                        // Copy everything else by reference
                    } else {
                        target[key] = value;
                    }
                }
            }
        }
        return target;
    };

    $.widget.bridge = function (name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function (options) {
            var isMethodCall = typeof options === "string",
                args = widget_slice.call(arguments, 1),
                returnValue = this;

            if (isMethodCall) {
                this.each(function () {
                    var methodValue,
                        instance = $.data(this, fullName);
                    if (options === "instance") {
                        returnValue = instance;
                        return false;
                    }
                    if (!instance) {
                        return $.error("cannot call methods on " + name + " prior to initialization; " +
                            "attempted to call method '" + options + "'");
                    }
                    if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                        return $.error("no such method '" + options + "' for " + name + " widget instance");
                    }
                    methodValue = instance[options].apply(instance, args);
                    if (methodValue !== instance && methodValue !== undefined) {
                        returnValue = methodValue && methodValue.jquery ?
                            returnValue.pushStack(methodValue.get()) :
                            methodValue;
                        return false;
                    }
                });
            } else {

                // Allow multiple hashes to be passed on init
                if (args.length) {
                    options = $.widget.extend.apply(null, [options].concat(args));
                }

                this.each(function () {
                    var instance = $.data(this, fullName);
                    if (instance) {
                        instance.option(options || {});
                        if (instance._init) {
                            instance._init();
                        }
                    } else {
                        $.data(this, fullName, new object(options, this));
                    }
                });
            }

            return returnValue;
        };
    };

    $.Widget = function (/* options, element */) {
    };
    $.Widget._childConstructors = [];

    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,

            // callbacks
            create: null
        },
        _createWidget: function (options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = widget_uuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;

            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();

            if (element !== this) {
                $.data(element, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function (event) {
                        if (event.target === element) {
                            this.destroy();
                        }
                    }
                });
                this.document = $(element.style ?
                    // element within the document
                    element.ownerDocument :
                    // element is window or document
                element.document || element);
                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
            }

            this.options = $.widget.extend({},
                this.options,
                this._getCreateOptions(),
                options);

            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init();
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,

        destroy: function () {
            this._destroy();
            // we can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element
                .unbind(this.eventNamespace)
                .removeData(this.widgetFullName)
                // support: jquery <1.6.3
                // http://bugs.jquery.com/ticket/9413
                .removeData($.camelCase(this.widgetFullName));
            this.widget()
                .unbind(this.eventNamespace)
                .removeAttr("aria-disabled")
                .removeClass(
                    this.widgetFullName + "-disabled " +
                    "ui-state-disabled");

            // clean up events and states
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: $.noop,

        widget: function () {
            return this.element;
        },

        option: function (key, value) {
            var options = key,
                parts,
                curOption,
                i;

            if (arguments.length === 0) {
                // don't return a reference to the internal hash
                return $.widget.extend({}, this.options);
            }

            if (typeof key === "string") {
                // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split(".");
                key = parts.shift();
                if (parts.length) {
                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                    for (i = 0; i < parts.length - 1; i++) {
                        curOption[parts[i]] = curOption[parts[i]] || {};
                        curOption = curOption[parts[i]];
                    }
                    key = parts.pop();
                    if (arguments.length === 1) {
                        return curOption[key] === undefined ? null : curOption[key];
                    }
                    curOption[key] = value;
                } else {
                    if (arguments.length === 1) {
                        return this.options[key] === undefined ? null : this.options[key];
                    }
                    options[key] = value;
                }
            }

            this._setOptions(options);

            return this;
        },
        _setOptions: function (options) {
            var key;

            for (key in options) {
                this._setOption(key, options[key]);
            }

            return this;
        },
        _setOption: function (key, value) {
            this.options[key] = value;

            if (key === "disabled") {
                this.widget()
                    .toggleClass(this.widgetFullName + "-disabled", !!value);

                // If the widget is becoming disabled, then nothing is interactive
                if (value) {
                    this.hoverable.removeClass("ui-state-hover");
                    this.focusable.removeClass("ui-state-focus");
                }
            }

            return this;
        },

        enable: function () {
            return this._setOptions({disabled: false});
        },
        disable: function () {
            return this._setOptions({disabled: true});
        },

        _on: function (suppressDisabledCheck, element, handlers) {
            var delegateElement,
                instance = this;

            // no suppressDisabledCheck flag, shuffle arguments
            if (typeof suppressDisabledCheck !== "boolean") {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }

            // no element argument, shuffle and use this.element
            if (!handlers) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $(element);
                this.bindings = this.bindings.add(element);
            }

            $.each(handlers, function (event, handler) {
                function handlerProxy() {
                    // allow widgets to customize the disabled handling
                    // - disabled as an array instead of boolean
                    // - disabled class as method for disabling individual parts
                    if (!suppressDisabledCheck &&
                        ( instance.options.disabled === true ||
                        $(this).hasClass("ui-state-disabled") )) {
                        return;
                    }
                    return ( typeof handler === "string" ? instance[handler] : handler )
                        .apply(instance, arguments);
                }

                // copy the guid so direct unbinding works
                if (typeof handler !== "string") {
                    handlerProxy.guid = handler.guid =
                        handler.guid || handlerProxy.guid || $.guid++;
                }

                var match = event.match(/^([\w:-]*)\s*(.*)$/),
                    eventName = match[1] + instance.eventNamespace,
                    selector = match[2];
                if (selector) {
                    delegateElement.delegate(selector, eventName, handlerProxy);
                } else {
                    element.bind(eventName, handlerProxy);
                }
            });
        },

        _off: function (element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") +
                this.eventNamespace;
            element.unbind(eventName).undelegate(eventName);

            // Clear the stack to avoid memory leaks (#10056)
            this.bindings = $(this.bindings.not(element).get());
            this.focusable = $(this.focusable.not(element).get());
            this.hoverable = $(this.hoverable.not(element).get());
        },

        _delay: function (handler, delay) {
            function handlerProxy() {
                return ( typeof handler === "string" ? instance[handler] : handler )
                    .apply(instance, arguments);
            }

            var instance = this;
            return setTimeout(handlerProxy, delay || 0);
        },

        _hoverable: function (element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
                mouseenter: function (event) {
                    $(event.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function (event) {
                    $(event.currentTarget).removeClass("ui-state-hover");
                }
            });
        },

        _focusable: function (element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
                focusin: function (event) {
                    $(event.currentTarget).addClass("ui-state-focus");
                },
                focusout: function (event) {
                    $(event.currentTarget).removeClass("ui-state-focus");
                }
            });
        },

        _trigger: function (type, event, data) {
            var prop, orig,
                callback = this.options[type];

            data = data || {};
            event = $.Event(event);
            event.type = ( type === this.widgetEventPrefix ?
                type :
            this.widgetEventPrefix + type ).toLowerCase();
            // the original event may come from any element
            // so we need to reset the target on the new event
            event.target = this.element[0];

            // copy original event properties over to the new event
            orig = event.originalEvent;
            if (orig) {
                for (prop in orig) {
                    if (!( prop in event )) {
                        event[prop] = orig[prop];
                    }
                }
            }

            this.element.trigger(event, data);
            return !( $.isFunction(callback) &&
            callback.apply(this.element[0], [event].concat(data)) === false ||
            event.isDefaultPrevented() );
        }
    };

    $.each({show: "fadeIn", hide: "fadeOut"}, function (method, defaultEffect) {
        $.Widget.prototype["_" + method] = function (element, options, callback) {
            if (typeof options === "string") {
                options = {effect: options};
            }
            var hasOptions,
                effectName = !options ?
                    method :
                    options === true || typeof options === "number" ?
                        defaultEffect :
                    options.effect || defaultEffect;
            options = options || {};
            if (typeof options === "number") {
                options = {duration: options};
            }
            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;
            if (options.delay) {
                element.delay(options.delay);
            }
            if (hasOptions && $.effects && $.effects.effect[effectName]) {
                element[method](options);
            } else if (effectName !== method && element[effectName]) {
                element[effectName](options.duration, options.easing, callback);
            } else {
                element.queue(function (next) {
                    $(this)[method]();
                    if (callback) {
                        callback.call(element[0]);
                    }
                    next();
                });
            }
        };
    });

    var widget = $.widget;


    /*!
     * jQuery UI Mouse 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/mouse/
     */


    var mouseHandled = false;
    $(document).mouseup(function () {
        mouseHandled = false;
    });

    var mouse = $.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var that = this;

            this.element
                .bind("mousedown." + this.widgetName, function (event) {
                    return that._mouseDown(event);
                })
                .bind("click." + this.widgetName, function (event) {
                    if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
                        $.removeData(event.target, that.widgetName + ".preventClickEvent");
                        event.stopImmediatePropagation();
                        return false;
                    }
                });

            this.started = false;
        },

        // TODO: make sure destroying one instance of mouse doesn't mess with
        // other instances of mouse
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                this.document
                    .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            }
        },

        _mouseDown: function (event) {
            // don't let more than one widget handle mouseStart
            if (mouseHandled) {
                return;
            }

            this._mouseMoved = false;

            // we may have missed mouseup (out of window)
            (this._mouseStarted && this._mouseUp(event));

            this._mouseDownEvent = event;

            var that = this,
                btnIsLeft = (event.which === 1),
            // event.target.nodeName works around a bug in IE 8 with
            // disabled inputs (#7620)
                elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
            if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
                return true;
            }

            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function () {
                    that.mouseDelayMet = true;
                }, this.options.delay);
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = (this._mouseStart(event) !== false);
                if (!this._mouseStarted) {
                    event.preventDefault();
                    return true;
                }
            }

            // Click event may never have fired (Gecko & Opera)
            if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
                $.removeData(event.target, this.widgetName + ".preventClickEvent");
            }

            // these delegates are required to keep context
            this._mouseMoveDelegate = function (event) {
                return that._mouseMove(event);
            };
            this._mouseUpDelegate = function (event) {
                return that._mouseUp(event);
            };

            this.document
                .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .bind("mouseup." + this.widgetName, this._mouseUpDelegate);

            event.preventDefault();

            mouseHandled = true;
            return true;
        },

        _mouseMove: function (event) {
            // Only check for mouseups outside the document if you've moved inside the document
            // at least once. This prevents the firing of mouseup in the case of IE<9, which will
            // fire a mousemove event if content is placed under the cursor. See #7778
            // Support: IE <9
            if (this._mouseMoved) {
                // IE mouseup check - mouseup happened when mouse was out of window
                if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
                    return this._mouseUp(event);

                    // Iframe mouseup check - mouseup occurred in another document
                } else if (!event.which) {
                    return this._mouseUp(event);
                }
            }

            if (event.which || event.button) {
                this._mouseMoved = true;
            }

            if (this._mouseStarted) {
                this._mouseDrag(event);
                return event.preventDefault();
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted =
                    (this._mouseStart(this._mouseDownEvent, event) !== false);
                (this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
            }

            return !this._mouseStarted;
        },

        _mouseUp: function (event) {
            this.document
                .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);

            if (this._mouseStarted) {
                this._mouseStarted = false;

                if (event.target === this._mouseDownEvent.target) {
                    $.data(event.target, this.widgetName + ".preventClickEvent", true);
                }

                this._mouseStop(event);
            }

            mouseHandled = false;
            return false;
        },

        _mouseDistanceMet: function (event) {
            return (Math.max(
                    Math.abs(this._mouseDownEvent.pageX - event.pageX),
                    Math.abs(this._mouseDownEvent.pageY - event.pageY)
                ) >= this.options.distance
            );
        },

        _mouseDelayMet: function (/* event */) {
            return this.mouseDelayMet;
        },

        // These are placeholder methods, to be overriden by extending plugin
        _mouseStart: function (/* event */) {
        },
        _mouseDrag: function (/* event */) {
        },
        _mouseStop: function (/* event */) {
        },
        _mouseCapture: function (/* event */) {
            return true;
        }
    });


    /*!
     * jQuery UI Position 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */

    (function () {

        $.ui = $.ui || {};

        var cachedScrollbarWidth, supportsOffsetFractions,
            max = Math.max,
            abs = Math.abs,
            round = Math.round,
            rhorizontal = /left|center|right/,
            rvertical = /top|center|bottom/,
            roffset = /[\+\-]\d+(\.[\d]+)?%?/,
            rposition = /^\w+/,
            rpercent = /%$/,
            _position = $.fn.position;

        function getOffsets(offsets, width, height) {
            return [
                parseFloat(offsets[0]) * ( rpercent.test(offsets[0]) ? width / 100 : 1 ),
                parseFloat(offsets[1]) * ( rpercent.test(offsets[1]) ? height / 100 : 1 )
            ];
        }

        function parseCss(element, property) {
            return parseInt($.css(element, property), 10) || 0;
        }

        function getDimensions(elem) {
            var raw = elem[0];
            if (raw.nodeType === 9) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: {top: 0, left: 0}
                };
            }
            if ($.isWindow(raw)) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: {top: elem.scrollTop(), left: elem.scrollLeft()}
                };
            }
            if (raw.preventDefault) {
                return {
                    width: 0,
                    height: 0,
                    offset: {top: raw.pageY, left: raw.pageX}
                };
            }
            return {
                width: elem.outerWidth(),
                height: elem.outerHeight(),
                offset: elem.offset()
            };
        }

        $.position = {
            scrollbarWidth: function () {
                if (cachedScrollbarWidth !== undefined) {
                    return cachedScrollbarWidth;
                }
                var w1, w2,
                    div = $("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    innerDiv = div.children()[0];

                $("body").append(div);
                w1 = innerDiv.offsetWidth;
                div.css("overflow", "scroll");

                w2 = innerDiv.offsetWidth;

                if (w1 === w2) {
                    w2 = div[0].clientWidth;
                }

                div.remove();

                return (cachedScrollbarWidth = w1 - w2);
            },
            getScrollInfo: function (within) {
                var overflowX = within.isWindow || within.isDocument ? "" :
                        within.element.css("overflow-x"),
                    overflowY = within.isWindow || within.isDocument ? "" :
                        within.element.css("overflow-y"),
                    hasOverflowX = overflowX === "scroll" ||
                        ( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
                    hasOverflowY = overflowY === "scroll" ||
                        ( overflowY === "auto" && within.height < within.element[0].scrollHeight );
                return {
                    width: hasOverflowY ? $.position.scrollbarWidth() : 0,
                    height: hasOverflowX ? $.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function (element) {
                var withinElement = $(element || window),
                    isWindow = $.isWindow(withinElement[0]),
                    isDocument = !!withinElement[0] && withinElement[0].nodeType === 9;
                return {
                    element: withinElement,
                    isWindow: isWindow,
                    isDocument: isDocument,
                    offset: withinElement.offset() || {left: 0, top: 0},
                    scrollLeft: withinElement.scrollLeft(),
                    scrollTop: withinElement.scrollTop(),

                    // support: jQuery 1.6.x
                    // jQuery 1.6 doesn't support .outerWidth/Height() on documents or windows
                    width: isWindow || isDocument ? withinElement.width() : withinElement.outerWidth(),
                    height: isWindow || isDocument ? withinElement.height() : withinElement.outerHeight()
                };
            }
        };

        $.fn.position = function (options) {
            if (!options || !options.of) {
                return _position.apply(this, arguments);
            }

            // make a copy, we don't want to modify arguments
            options = $.extend({}, options);

            var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
                target = $(options.of),
                within = $.position.getWithinInfo(options.within),
                scrollInfo = $.position.getScrollInfo(within),
                collision = ( options.collision || "flip" ).split(" "),
                offsets = {};

            dimensions = getDimensions(target);
            if (target[0].preventDefault) {
                // force left top to allow flipping
                options.at = "left top";
            }
            targetWidth = dimensions.width;
            targetHeight = dimensions.height;
            targetOffset = dimensions.offset;
            // clone to reuse original targetOffset later
            basePosition = $.extend({}, targetOffset);

            // force my and at to have valid horizontal and vertical positions
            // if a value is missing or invalid, it will be converted to center
            $.each(["my", "at"], function () {
                var pos = ( options[this] || "" ).split(" "),
                    horizontalOffset,
                    verticalOffset;

                if (pos.length === 1) {
                    pos = rhorizontal.test(pos[0]) ?
                        pos.concat(["center"]) :
                        rvertical.test(pos[0]) ?
                            ["center"].concat(pos) :
                            ["center", "center"];
                }
                pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center";
                pos[1] = rvertical.test(pos[1]) ? pos[1] : "center";

                // calculate offsets
                horizontalOffset = roffset.exec(pos[0]);
                verticalOffset = roffset.exec(pos[1]);
                offsets[this] = [
                    horizontalOffset ? horizontalOffset[0] : 0,
                    verticalOffset ? verticalOffset[0] : 0
                ];

                // reduce to just the positions without the offsets
                options[this] = [
                    rposition.exec(pos[0])[0],
                    rposition.exec(pos[1])[0]
                ];
            });

            // normalize collision option
            if (collision.length === 1) {
                collision[1] = collision[0];
            }

            if (options.at[0] === "right") {
                basePosition.left += targetWidth;
            } else if (options.at[0] === "center") {
                basePosition.left += targetWidth / 2;
            }

            if (options.at[1] === "bottom") {
                basePosition.top += targetHeight;
            } else if (options.at[1] === "center") {
                basePosition.top += targetHeight / 2;
            }

            atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
            basePosition.left += atOffset[0];
            basePosition.top += atOffset[1];

            return this.each(function () {
                var collisionPosition, using,
                    elem = $(this),
                    elemWidth = elem.outerWidth(),
                    elemHeight = elem.outerHeight(),
                    marginLeft = parseCss(this, "marginLeft"),
                    marginTop = parseCss(this, "marginTop"),
                    collisionWidth = elemWidth + marginLeft + parseCss(this, "marginRight") + scrollInfo.width,
                    collisionHeight = elemHeight + marginTop + parseCss(this, "marginBottom") + scrollInfo.height,
                    position = $.extend({}, basePosition),
                    myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());

                if (options.my[0] === "right") {
                    position.left -= elemWidth;
                } else if (options.my[0] === "center") {
                    position.left -= elemWidth / 2;
                }

                if (options.my[1] === "bottom") {
                    position.top -= elemHeight;
                } else if (options.my[1] === "center") {
                    position.top -= elemHeight / 2;
                }

                position.left += myOffset[0];
                position.top += myOffset[1];

                // if the browser doesn't support fractions, then round for consistent results
                if (!supportsOffsetFractions) {
                    position.left = round(position.left);
                    position.top = round(position.top);
                }

                collisionPosition = {
                    marginLeft: marginLeft,
                    marginTop: marginTop
                };

                $.each(["left", "top"], function (i, dir) {
                    if ($.ui.position[collision[i]]) {
                        $.ui.position[collision[i]][dir](position, {
                            targetWidth: targetWidth,
                            targetHeight: targetHeight,
                            elemWidth: elemWidth,
                            elemHeight: elemHeight,
                            collisionPosition: collisionPosition,
                            collisionWidth: collisionWidth,
                            collisionHeight: collisionHeight,
                            offset: [atOffset[0] + myOffset[0], atOffset [1] + myOffset[1]],
                            my: options.my,
                            at: options.at,
                            within: within,
                            elem: elem
                        });
                    }
                });

                if (options.using) {
                    // adds feedback as second argument to using callback, if present
                    using = function (props) {
                        var left = targetOffset.left - position.left,
                            right = left + targetWidth - elemWidth,
                            top = targetOffset.top - position.top,
                            bottom = top + targetHeight - elemHeight,
                            feedback = {
                                target: {
                                    element: target,
                                    left: targetOffset.left,
                                    top: targetOffset.top,
                                    width: targetWidth,
                                    height: targetHeight
                                },
                                element: {
                                    element: elem,
                                    left: position.left,
                                    top: position.top,
                                    width: elemWidth,
                                    height: elemHeight
                                },
                                horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                                vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
                            };
                        if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
                            feedback.horizontal = "center";
                        }
                        if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
                            feedback.vertical = "middle";
                        }
                        if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
                            feedback.important = "horizontal";
                        } else {
                            feedback.important = "vertical";
                        }
                        options.using.call(this, props, feedback);
                    };
                }

                elem.offset($.extend(position, {using: using}));
            });
        };

        $.ui.position = {
            fit: {
                left: function (position, data) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
                        outerWidth = within.width,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = withinOffset - collisionPosLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
                        newOverRight;

                    // element is wider than within
                    if (data.collisionWidth > outerWidth) {
                        // element is initially over the left side of within
                        if (overLeft > 0 && overRight <= 0) {
                            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
                            position.left += overLeft - newOverRight;
                            // element is initially over right side of within
                        } else if (overRight > 0 && overLeft <= 0) {
                            position.left = withinOffset;
                            // element is initially over both left and right sides of within
                        } else {
                            if (overLeft > overRight) {
                                position.left = withinOffset + outerWidth - data.collisionWidth;
                            } else {
                                position.left = withinOffset;
                            }
                        }
                        // too far left -> align with left edge
                    } else if (overLeft > 0) {
                        position.left += overLeft;
                        // too far right -> align with right edge
                    } else if (overRight > 0) {
                        position.left -= overRight;
                        // adjust based on position and margin
                    } else {
                        position.left = max(position.left - collisionPosLeft, position.left);
                    }
                },
                top: function (position, data) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
                        outerHeight = data.within.height,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = withinOffset - collisionPosTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
                        newOverBottom;

                    // element is taller than within
                    if (data.collisionHeight > outerHeight) {
                        // element is initially over the top of within
                        if (overTop > 0 && overBottom <= 0) {
                            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
                            position.top += overTop - newOverBottom;
                            // element is initially over bottom of within
                        } else if (overBottom > 0 && overTop <= 0) {
                            position.top = withinOffset;
                            // element is initially over both top and bottom of within
                        } else {
                            if (overTop > overBottom) {
                                position.top = withinOffset + outerHeight - data.collisionHeight;
                            } else {
                                position.top = withinOffset;
                            }
                        }
                        // too far up -> align with top
                    } else if (overTop > 0) {
                        position.top += overTop;
                        // too far down -> align with bottom edge
                    } else if (overBottom > 0) {
                        position.top -= overBottom;
                        // adjust based on position and margin
                    } else {
                        position.top = max(position.top - collisionPosTop, position.top);
                    }
                }
            },
            flip: {
                left: function (position, data) {
                    var within = data.within,
                        withinOffset = within.offset.left + within.scrollLeft,
                        outerWidth = within.width,
                        offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = collisionPosLeft - offsetLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
                        myOffset = data.my[0] === "left" ?
                            -data.elemWidth :
                            data.my[0] === "right" ?
                                data.elemWidth :
                                0,
                        atOffset = data.at[0] === "left" ?
                            data.targetWidth :
                            data.at[0] === "right" ?
                                -data.targetWidth :
                                0,
                        offset = -2 * data.offset[0],
                        newOverRight,
                        newOverLeft;

                    if (overLeft < 0) {
                        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
                        if (newOverRight < 0 || newOverRight < abs(overLeft)) {
                            position.left += myOffset + atOffset + offset;
                        }
                    } else if (overRight > 0) {
                        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                        if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
                            position.left += myOffset + atOffset + offset;
                        }
                    }
                },
                top: function (position, data) {
                    var within = data.within,
                        withinOffset = within.offset.top + within.scrollTop,
                        outerHeight = within.height,
                        offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = collisionPosTop - offsetTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
                        top = data.my[1] === "top",
                        myOffset = top ?
                            -data.elemHeight :
                            data.my[1] === "bottom" ?
                                data.elemHeight :
                                0,
                        atOffset = data.at[1] === "top" ?
                            data.targetHeight :
                            data.at[1] === "bottom" ?
                                -data.targetHeight :
                                0,
                        offset = -2 * data.offset[1],
                        newOverTop,
                        newOverBottom;
                    if (overTop < 0) {
                        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
                        if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
                            position.top += myOffset + atOffset + offset;
                        }
                    } else if (overBottom > 0) {
                        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                        if (newOverTop > 0 || abs(newOverTop) < overBottom) {
                            position.top += myOffset + atOffset + offset;
                        }
                    }
                }
            },
            flipfit: {
                left: function () {
                    $.ui.position.flip.left.apply(this, arguments);
                    $.ui.position.fit.left.apply(this, arguments);
                },
                top: function () {
                    $.ui.position.flip.top.apply(this, arguments);
                    $.ui.position.fit.top.apply(this, arguments);
                }
            }
        };

// fraction support test
        (function () {
            var testElement, testElementParent, testElementStyle, offsetLeft, i,
                body = document.getElementsByTagName("body")[0],
                div = document.createElement("div");

            //Create a "fake body" for testing based on method used in jQuery.support
            testElement = document.createElement(body ? "div" : "body");
            testElementStyle = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            if (body) {
                $.extend(testElementStyle, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
            }
            for (i in testElementStyle) {
                testElement.style[i] = testElementStyle[i];
            }
            testElement.appendChild(div);
            testElementParent = body || document.documentElement;
            testElementParent.insertBefore(testElement, testElementParent.firstChild);

            div.style.cssText = "position: absolute; left: 10.7432222px;";

            offsetLeft = $(div).offset().left;
            supportsOffsetFractions = offsetLeft > 10 && offsetLeft < 11;

            testElement.innerHTML = "";
            testElementParent.removeChild(testElement);
        })();

    })();

    var position = $.ui.position;


    /*!
     * jQuery UI Draggable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/draggable/
     */


    $.widget("ui.draggable", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,

            // callbacks
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {

            if (this.options.helper === "original") {
                this._setPositionRelative();
            }
            if (this.options.addClasses) {
                this.element.addClass("ui-draggable");
            }
            if (this.options.disabled) {
                this.element.addClass("ui-draggable-disabled");
            }
            this._setHandleClassName();

            this._mouseInit();
        },

        _setOption: function (key, value) {
            this._super(key, value);
            if (key === "handle") {
                this._removeHandleClassName();
                this._setHandleClassName();
            }
        },

        _destroy: function () {
            if (( this.helper || this.element ).is(".ui-draggable-dragging")) {
                this.destroyOnClear = true;
                return;
            }
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._removeHandleClassName();
            this._mouseDestroy();
        },

        _mouseCapture: function (event) {
            var o = this.options;

            this._blurActiveElement(event);

            // among others, prevent a drag on a resizable-handle
            if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) {
                return false;
            }

            //Quit if we're not on a valid handle
            this.handle = this._getHandle(event);
            if (!this.handle) {
                return false;
            }

            this._blockFrames(o.iframeFix === true ? "iframe" : o.iframeFix);

            return true;

        },

        _blockFrames: function (selector) {
            this.iframeBlocks = this.document.find(selector).map(function () {
                var iframe = $(this);

                return $("<div>")
                    .css("position", "absolute")
                    .appendTo(iframe.parent())
                    .outerWidth(iframe.outerWidth())
                    .outerHeight(iframe.outerHeight())
                    .offset(iframe.offset())[0];
            });
        },

        _unblockFrames: function () {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },

        _blurActiveElement: function (event) {
            var document = this.document[0];

            // Only need to blur if the event occurred on the draggable itself, see #10527
            if (!this.handleElement.is(event.target)) {
                return;
            }

            // support: IE9
            // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
            try {

                // Support: IE9, IE10
                // If the <body> is blurred, IE will switch windows, see #9520
                if (document.activeElement && document.activeElement.nodeName.toLowerCase() !== "body") {

                    // Blur any element that currently has focus, see #4261
                    $(document.activeElement).blur();
                }
            } catch (error) {
            }
        },

        _mouseStart: function (event) {

            var o = this.options;

            //Create and append the visible helper
            this.helper = this._createHelper(event);

            this.helper.addClass("ui-draggable-dragging");

            //Cache the helper size
            this._cacheHelperProportions();

            //If ddmanager is used for droppables, set the global draggable
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }

            /*
             * - Position generation -
             * This block generates everything position related - it's the core of draggables.
             */

            //Cache the margins of the original element
            this._cacheMargins();

            //Store the helper's css position
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent(true);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter(function () {
                    return $(this).css("position") === "fixed";
                }).length > 0;

            //The element's absolute position on the page minus margins
            this.positionAbs = this.element.offset();
            this._refreshOffsets(event);

            //Generate the original position
            this.originalPosition = this.position = this._generatePosition(event, false);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

            //Set a containment if given in the options
            this._setContainment();

            //Trigger event + callbacks
            if (this._trigger("start", event) === false) {
                this._clear();
                return false;
            }

            //Recache the helper size
            this._cacheHelperProportions();

            //Prepare the droppable offsets
            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }

            // Reset helper's right/bottom css if they're set and set explicit width/height instead
            // as this prevents resizing of elements with right/bottom set (see #7772)
            this._normalizeRightBottom();

            this._mouseDrag(event, true); //Execute the drag once - this causes the helper not to be visible before getting its correct position

            //If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
            if ($.ui.ddmanager) {
                $.ui.ddmanager.dragStart(this, event);
            }

            return true;
        },

        _refreshOffsets: function (event) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: false,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };

            this.offset.click = {
                left: event.pageX - this.offset.left,
                top: event.pageY - this.offset.top
            };
        },

        _mouseDrag: function (event, noPropagation) {
            // reset any necessary cached properties (see #5009)
            if (this.hasFixedAncestor) {
                this.offset.parent = this._getParentOffset();
            }

            //Compute the helpers position
            this.position = this._generatePosition(event, true);
            this.positionAbs = this._convertPositionTo("absolute");

            //Call plugins and callbacks and use the resulting position if something is returned
            if (!noPropagation) {
                var ui = this._uiHash();
                if (this._trigger("drag", event, ui) === false) {
                    this._mouseUp({});
                    return false;
                }
                this.position = ui.position;
            }

            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px";

            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }

            return false;
        },

        _mouseStop: function (event) {

            //If we are using droppables, inform the manager about the drop
            var that = this,
                dropped = false;
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                dropped = $.ui.ddmanager.drop(this, event);
            }

            //if a drop comes from outside (a sortable)
            if (this.dropped) {
                dropped = this.dropped;
                this.dropped = false;
            }

            if ((this.options.revert === "invalid" && !dropped) || (this.options.revert === "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
                $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    if (that._trigger("stop", event) !== false) {
                        that._clear();
                    }
                });
            } else {
                if (this._trigger("stop", event) !== false) {
                    this._clear();
                }
            }

            return false;
        },

        _mouseUp: function (event) {
            this._unblockFrames();

            //If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
            if ($.ui.ddmanager) {
                $.ui.ddmanager.dragStop(this, event);
            }

            // Only need to focus if the event occurred on the draggable itself, see #10527
            if (this.handleElement.is(event.target)) {
                // The interaction is over; whether or not the click resulted in a drag, focus the element
                this.element.focus();
            }

            return $.ui.mouse.prototype._mouseUp.call(this, event);
        },

        cancel: function () {

            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({});
            } else {
                this._clear();
            }

            return this;

        },

        _getHandle: function (event) {
            return this.options.handle ?
                !!$(event.target).closest(this.element.find(this.options.handle)).length :
                true;
        },

        _setHandleClassName: function () {
            this.handleElement = this.options.handle ?
                this.element.find(this.options.handle) : this.element;
            this.handleElement.addClass("ui-draggable-handle");
        },

        _removeHandleClassName: function () {
            this.handleElement.removeClass("ui-draggable-handle");
        },

        _createHelper: function (event) {

            var o = this.options,
                helperIsFunction = $.isFunction(o.helper),
                helper = helperIsFunction ?
                    $(o.helper.apply(this.element[0], [event])) :
                    ( o.helper === "clone" ?
                        this.element.clone().removeAttr("id") :
                        this.element );

            if (!helper.parents("body").length) {
                helper.appendTo((o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo));
            }

            // http://bugs.jqueryui.com/ticket/9446
            // a helper function can return the original element
            // which wouldn't have been set to relative in _create
            if (helperIsFunction && helper[0] === this.element[0]) {
                this._setPositionRelative();
            }

            if (helper[0] !== this.element[0] && !(/(fixed|absolute)/).test(helper.css("position"))) {
                helper.css("position", "absolute");
            }

            return helper;

        },

        _setPositionRelative: function () {
            if (!( /^(?:r|a|f)/ ).test(this.element.css("position"))) {
                this.element[0].style.position = "relative";
            }
        },

        _adjustOffsetFromHelper: function (obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = {left: +obj[0], top: +obj[1] || 0};
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _isRootNode: function (element) {
            return ( /(html|body)/i ).test(element.tagName) || element === this.document[0];
        },

        _getParentOffset: function () {

            //Get the offsetParent and cache its position
            var po = this.offsetParent.offset(),
                document = this.document[0];

            // This is a special case where we need to modify a offset calculated on start, since the following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
            //    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            if (this._isRootNode(this.offsetParent[0])) {
                po = {top: 0, left: 0};
            }

            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };

        },

        _getRelativeOffset: function () {
            if (this.cssPosition !== "relative") {
                return {top: 0, left: 0};
            }

            var p = this.element.position(),
                scrollIsRootNode = this._isRootNode(this.scrollParent[0]);

            return {
                top: p.top - ( parseInt(this.helper.css("top"), 10) || 0 ) + ( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
                left: p.left - ( parseInt(this.helper.css("left"), 10) || 0 ) + ( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
            };

        },

        _cacheMargins: function () {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            };
        },

        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function () {

            var isUserScrollable, c, ce,
                o = this.options,
                document = this.document[0];

            this.relativeContainer = null;

            if (!o.containment) {
                this.containment = null;
                return;
            }

            if (o.containment === "window") {
                this.containment = [
                    $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                    $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                    $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left,
                    $(window).scrollTop() + ( $(window).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
                ];
                return;
            }

            if (o.containment === "document") {
                this.containment = [
                    0,
                    0,
                    $(document).width() - this.helperProportions.width - this.margins.left,
                    ( $(document).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
                ];
                return;
            }

            if (o.containment.constructor === Array) {
                this.containment = o.containment;
                return;
            }

            if (o.containment === "parent") {
                o.containment = this.helper[0].parentNode;
            }

            c = $(o.containment);
            ce = c[0];

            if (!ce) {
                return;
            }

            isUserScrollable = /(scroll|auto)/.test(c.css("overflow"));

            this.containment = [
                ( parseInt(c.css("borderLeftWidth"), 10) || 0 ) + ( parseInt(c.css("paddingLeft"), 10) || 0 ),
                ( parseInt(c.css("borderTopWidth"), 10) || 0 ) + ( parseInt(c.css("paddingTop"), 10) || 0 ),
                ( isUserScrollable ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth ) -
                ( parseInt(c.css("borderRightWidth"), 10) || 0 ) -
                ( parseInt(c.css("paddingRight"), 10) || 0 ) -
                this.helperProportions.width -
                this.margins.left -
                this.margins.right,
                ( isUserScrollable ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight ) -
                ( parseInt(c.css("borderBottomWidth"), 10) || 0 ) -
                ( parseInt(c.css("paddingBottom"), 10) || 0 ) -
                this.helperProportions.height -
                this.margins.top -
                this.margins.bottom
            ];
            this.relativeContainer = c;
        },

        _convertPositionTo: function (d, pos) {

            if (!pos) {
                pos = this.position;
            }

            var mod = d === "absolute" ? 1 : -1,
                scrollIsRootNode = this._isRootNode(this.scrollParent[0]);

            return {
                top: (
                    pos.top +																// The absolute mouse position
                    this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.top * mod -										// The offsetParent's offset without borders (offset + border)
                    ( ( this.cssPosition === "fixed" ? -this.offset.scroll.top : ( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod)
                ),
                left: (
                    pos.left +																// The absolute mouse position
                    this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.left * mod -										// The offsetParent's offset without borders (offset + border)
                    ( ( this.cssPosition === "fixed" ? -this.offset.scroll.left : ( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod)
                )
            };

        },

        _generatePosition: function (event, constrainPosition) {

            var containment, co, top, left,
                o = this.options,
                scrollIsRootNode = this._isRootNode(this.scrollParent[0]),
                pageX = event.pageX,
                pageY = event.pageY;

            // Cache the scroll
            if (!scrollIsRootNode || !this.offset.scroll) {
                this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                };
            }

            /*
             * - Position constraining -
             * Constrain the position to a mix of grid, containment.
             */

            // If we are not dragging yet, we won't check for options
            if (constrainPosition) {
                if (this.containment) {
                    if (this.relativeContainer) {
                        co = this.relativeContainer.offset();
                        containment = [
                            this.containment[0] + co.left,
                            this.containment[1] + co.top,
                            this.containment[2] + co.left,
                            this.containment[3] + co.top
                        ];
                    } else {
                        containment = this.containment;
                    }

                    if (event.pageX - this.offset.click.left < containment[0]) {
                        pageX = containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < containment[1]) {
                        pageY = containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > containment[2]) {
                        pageX = containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > containment[3]) {
                        pageY = containment[3] + this.offset.click.top;
                    }
                }

                if (o.grid) {
                    //Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
                    top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
                    pageY = containment ? ((top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3]) ? top : ((top - this.offset.click.top >= containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

                    left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
                    pageX = containment ? ((left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2]) ? left : ((left - this.offset.click.left >= containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
                }

                if (o.axis === "y") {
                    pageX = this.originalPageX;
                }

                if (o.axis === "x") {
                    pageY = this.originalPageY;
                }
            }

            return {
                top: (
                    pageY -																	// The absolute mouse position
                    this.offset.click.top -												// Click offset (relative to the element)
                    this.offset.relative.top -												// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
                    ( this.cssPosition === "fixed" ? -this.offset.scroll.top : ( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
                ),
                left: (
                    pageX -																	// The absolute mouse position
                    this.offset.click.left -												// Click offset (relative to the element)
                    this.offset.relative.left -												// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
                    ( this.cssPosition === "fixed" ? -this.offset.scroll.left : ( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
                )
            };

        },

        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove();
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
            if (this.destroyOnClear) {
                this.destroy();
            }
        },

        _normalizeRightBottom: function () {
            if (this.options.axis !== "y" && this.helper.css("right") !== "auto") {
                this.helper.width(this.helper.width());
                this.helper.css("right", "auto");
            }
            if (this.options.axis !== "x" && this.helper.css("bottom") !== "auto") {
                this.helper.height(this.helper.height());
                this.helper.css("bottom", "auto");
            }
        },

        // From now on bulk stuff - mainly helpers

        _trigger: function (type, event, ui) {
            ui = ui || this._uiHash();
            $.ui.plugin.call(this, type, [event, ui, this], true);

            // Absolute position and offset (see #6884 ) have to be recalculated after plugins
            if (/^(drag|start|stop)/.test(type)) {
                this.positionAbs = this._convertPositionTo("absolute");
                ui.offset = this.positionAbs;
            }
            return $.Widget.prototype._trigger.call(this, type, event, ui);
        },

        plugins: {},

        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }

    });

    $.ui.plugin.add("draggable", "connectToSortable", {
        start: function (event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });

            draggable.sortables = [];
            $(draggable.options.connectToSortable).each(function () {
                var sortable = $(this).sortable("instance");

                if (sortable && !sortable.options.disabled) {
                    draggable.sortables.push(sortable);

                    // refreshPositions is called at drag start to refresh the containerCache
                    // which is used in drag. This ensures it's initialized and synchronized
                    // with any changes that might have happened on the page since initialization.
                    sortable.refreshPositions();
                    sortable._trigger("activate", event, uiSortable);
                }
            });
        },
        stop: function (event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });

            draggable.cancelHelperRemoval = false;

            $.each(draggable.sortables, function () {
                var sortable = this;

                if (sortable.isOver) {
                    sortable.isOver = 0;

                    // Allow this sortable to handle removing the helper
                    draggable.cancelHelperRemoval = true;
                    sortable.cancelHelperRemoval = false;

                    // Use _storedCSS To restore properties in the sortable,
                    // as this also handles revert (#9675) since the draggable
                    // may have modified them in unexpected ways (#8809)
                    sortable._storedCSS = {
                        position: sortable.placeholder.css("position"),
                        top: sortable.placeholder.css("top"),
                        left: sortable.placeholder.css("left")
                    };

                    sortable._mouseStop(event);

                    // Once drag has ended, the sortable should return to using
                    // its original helper, not the shared helper from draggable
                    sortable.options.helper = sortable.options._helper;
                } else {
                    // Prevent this Sortable from removing the helper.
                    // However, don't set the draggable to remove the helper
                    // either as another connected Sortable may yet handle the removal.
                    sortable.cancelHelperRemoval = true;

                    sortable._trigger("deactivate", event, uiSortable);
                }
            });
        },
        drag: function (event, ui, draggable) {
            $.each(draggable.sortables, function () {
                var innermostIntersecting = false,
                    sortable = this;

                // Copy over variables that sortable's _intersectsWith uses
                sortable.positionAbs = draggable.positionAbs;
                sortable.helperProportions = draggable.helperProportions;
                sortable.offset.click = draggable.offset.click;

                if (sortable._intersectsWith(sortable.containerCache)) {
                    innermostIntersecting = true;

                    $.each(draggable.sortables, function () {
                        // Copy over variables that sortable's _intersectsWith uses
                        this.positionAbs = draggable.positionAbs;
                        this.helperProportions = draggable.helperProportions;
                        this.offset.click = draggable.offset.click;

                        if (this !== sortable &&
                            this._intersectsWith(this.containerCache) &&
                            $.contains(sortable.element[0], this.element[0])) {
                            innermostIntersecting = false;
                        }

                        return innermostIntersecting;
                    });
                }

                if (innermostIntersecting) {
                    // If it intersects, we use a little isOver variable and set it once,
                    // so that the move-in stuff gets fired only once.
                    if (!sortable.isOver) {
                        sortable.isOver = 1;

                        // Store draggable's parent in case we need to reappend to it later.
                        draggable._parent = ui.helper.parent();

                        sortable.currentItem = ui.helper
                            .appendTo(sortable.element)
                            .data("ui-sortable-item", true);

                        // Store helper option to later restore it
                        sortable.options._helper = sortable.options.helper;

                        sortable.options.helper = function () {
                            return ui.helper[0];
                        };

                        // Fire the start events of the sortable with our passed browser event,
                        // and our own helper (so it doesn't create a new one)
                        event.target = sortable.currentItem[0];
                        sortable._mouseCapture(event, true);
                        sortable._mouseStart(event, true, true);

                        // Because the browser event is way off the new appended portlet,
                        // modify necessary variables to reflect the changes
                        sortable.offset.click.top = draggable.offset.click.top;
                        sortable.offset.click.left = draggable.offset.click.left;
                        sortable.offset.parent.left -= draggable.offset.parent.left -
                            sortable.offset.parent.left;
                        sortable.offset.parent.top -= draggable.offset.parent.top -
                            sortable.offset.parent.top;

                        draggable._trigger("toSortable", event);

                        // Inform draggable that the helper is in a valid drop zone,
                        // used solely in the revert option to handle "valid/invalid".
                        draggable.dropped = sortable.element;

                        // Need to refreshPositions of all sortables in the case that
                        // adding to one sortable changes the location of the other sortables (#9675)
                        $.each(draggable.sortables, function () {
                            this.refreshPositions();
                        });

                        // hack so receive/update callbacks work (mostly)
                        draggable.currentItem = draggable.element;
                        sortable.fromOutside = draggable;
                    }

                    if (sortable.currentItem) {
                        sortable._mouseDrag(event);
                        // Copy the sortable's position because the draggable's can potentially reflect
                        // a relative position, while sortable is always absolute, which the dragged
                        // element has now become. (#8809)
                        ui.position = sortable.position;
                    }
                } else {
                    // If it doesn't intersect with the sortable, and it intersected before,
                    // we fake the drag stop of the sortable, but make sure it doesn't remove
                    // the helper by using cancelHelperRemoval.
                    if (sortable.isOver) {

                        sortable.isOver = 0;
                        sortable.cancelHelperRemoval = true;

                        // Calling sortable's mouseStop would trigger a revert,
                        // so revert must be temporarily false until after mouseStop is called.
                        sortable.options._revert = sortable.options.revert;
                        sortable.options.revert = false;

                        sortable._trigger("out", event, sortable._uiHash(sortable));
                        sortable._mouseStop(event, true);

                        // restore sortable behaviors that were modfied
                        // when the draggable entered the sortable area (#9481)
                        sortable.options.revert = sortable.options._revert;
                        sortable.options.helper = sortable.options._helper;

                        if (sortable.placeholder) {
                            sortable.placeholder.remove();
                        }

                        // Restore and recalculate the draggable's offset considering the sortable
                        // may have modified them in unexpected ways. (#8809, #10669)
                        ui.helper.appendTo(draggable._parent);
                        draggable._refreshOffsets(event);
                        ui.position = draggable._generatePosition(event, true);

                        draggable._trigger("fromSortable", event);

                        // Inform draggable that the helper is no longer in a valid drop zone
                        draggable.dropped = false;

                        // Need to refreshPositions of all sortables just in case removing
                        // from one sortable changes the location of other sortables (#9675)
                        $.each(draggable.sortables, function () {
                            this.refreshPositions();
                        });
                    }
                }
            });
        }
    });

    $.ui.plugin.add("draggable", "cursor", {
        start: function (event, ui, instance) {
            var t = $("body"),
                o = instance.options;

            if (t.css("cursor")) {
                o._cursor = t.css("cursor");
            }
            t.css("cursor", o.cursor);
        },
        stop: function (event, ui, instance) {
            var o = instance.options;
            if (o._cursor) {
                $("body").css("cursor", o._cursor);
            }
        }
    });

    $.ui.plugin.add("draggable", "opacity", {
        start: function (event, ui, instance) {
            var t = $(ui.helper),
                o = instance.options;
            if (t.css("opacity")) {
                o._opacity = t.css("opacity");
            }
            t.css("opacity", o.opacity);
        },
        stop: function (event, ui, instance) {
            var o = instance.options;
            if (o._opacity) {
                $(ui.helper).css("opacity", o._opacity);
            }
        }
    });

    $.ui.plugin.add("draggable", "scroll", {
        start: function (event, ui, i) {
            if (!i.scrollParentNotHidden) {
                i.scrollParentNotHidden = i.helper.scrollParent(false);
            }

            if (i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML") {
                i.overflowOffset = i.scrollParentNotHidden.offset();
            }
        },
        drag: function (event, ui, i) {

            var o = i.options,
                scrolled = false,
                scrollParent = i.scrollParentNotHidden[0],
                document = i.document[0];

            if (scrollParent !== document && scrollParent.tagName !== "HTML") {
                if (!o.axis || o.axis !== "x") {
                    if (( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY < o.scrollSensitivity) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
                    } else if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
                    }
                }

                if (!o.axis || o.axis !== "y") {
                    if (( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX < o.scrollSensitivity) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
                    } else if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
                    }
                }

            } else {

                if (!o.axis || o.axis !== "x") {
                    if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
                    } else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
                    }
                }

                if (!o.axis || o.axis !== "y") {
                    if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
                    } else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
                    }
                }

            }

            if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(i, event);
            }

        }
    });

    $.ui.plugin.add("draggable", "snap", {
        start: function (event, ui, i) {

            var o = i.options;

            i.snapElements = [];

            $(o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap).each(function () {
                var $t = $(this),
                    $o = $t.offset();
                if (this !== i.element[0]) {
                    i.snapElements.push({
                        item: this,
                        width: $t.outerWidth(), height: $t.outerHeight(),
                        top: $o.top, left: $o.left
                    });
                }
            });

        },
        drag: function (event, ui, inst) {

            var ts, bs, ls, rs, l, r, t, b, i, first,
                o = inst.options,
                d = o.snapTolerance,
                x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
                y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

            for (i = inst.snapElements.length - 1; i >= 0; i--) {

                l = inst.snapElements[i].left - inst.margins.left;
                r = l + inst.snapElements[i].width;
                t = inst.snapElements[i].top - inst.margins.top;
                b = t + inst.snapElements[i].height;

                if (x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains(inst.snapElements[i].item.ownerDocument, inst.snapElements[i].item)) {
                    if (inst.snapElements[i].snapping) {
                        (inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), {snapItem: inst.snapElements[i].item})));
                    }
                    inst.snapElements[i].snapping = false;
                    continue;
                }

                if (o.snapMode !== "inner") {
                    ts = Math.abs(t - y2) <= d;
                    bs = Math.abs(b - y1) <= d;
                    ls = Math.abs(l - x2) <= d;
                    rs = Math.abs(r - x1) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: t - inst.helperProportions.height,
                            left: 0
                        }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", {top: b, left: 0}).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: l - inst.helperProportions.width
                        }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", {top: 0, left: r}).left;
                    }
                }

                first = (ts || bs || ls || rs);

                if (o.snapMode !== "outer") {
                    ts = Math.abs(t - y1) <= d;
                    bs = Math.abs(b - y2) <= d;
                    ls = Math.abs(l - x1) <= d;
                    rs = Math.abs(r - x2) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", {top: t, left: 0}).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: b - inst.helperProportions.height,
                            left: 0
                        }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", {top: 0, left: l}).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: r - inst.helperProportions.width
                        }).left;
                    }
                }

                if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
                    (inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), {snapItem: inst.snapElements[i].item})));
                }
                inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

            }

        }
    });

    $.ui.plugin.add("draggable", "stack", {
        start: function (event, ui, instance) {
            var min,
                o = instance.options,
                group = $.makeArray($(o.stack)).sort(function (a, b) {
                    return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0);
                });

            if (!group.length) {
                return;
            }

            min = parseInt($(group[0]).css("zIndex"), 10) || 0;
            $(group).each(function (i) {
                $(this).css("zIndex", min + i);
            });
            this.css("zIndex", (min + group.length));
        }
    });

    $.ui.plugin.add("draggable", "zIndex", {
        start: function (event, ui, instance) {
            var t = $(ui.helper),
                o = instance.options;

            if (t.css("zIndex")) {
                o._zIndex = t.css("zIndex");
            }
            t.css("zIndex", o.zIndex);
        },
        stop: function (event, ui, instance) {
            var o = instance.options;

            if (o._zIndex) {
                $(ui.helper).css("zIndex", o._zIndex);
            }
        }
    });

    var draggable = $.ui.draggable;


    /*!
     * jQuery UI Droppable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/droppable/
     */


    $.widget("ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: false,
            addClasses: true,
            greedy: false,
            hoverClass: false,
            scope: "default",
            tolerance: "intersect",

            // callbacks
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {

            var proportions,
                o = this.options,
                accept = o.accept;

            this.isover = false;
            this.isout = true;

            this.accept = $.isFunction(accept) ? accept : function (d) {
                return d.is(accept);
            };

            this.proportions = function (/* valueToWrite */) {
                if (arguments.length) {
                    // Store the droppable's proportions
                    proportions = arguments[0];
                } else {
                    // Retrieve or derive the droppable's proportions
                    return proportions ?
                        proportions :
                        proportions = {
                            width: this.element[0].offsetWidth,
                            height: this.element[0].offsetHeight
                        };
                }
            };

            this._addToManager(o.scope);

            o.addClasses && this.element.addClass("ui-droppable");

        },

        _addToManager: function (scope) {
            // Add the reference and positions to the manager
            $.ui.ddmanager.droppables[scope] = $.ui.ddmanager.droppables[scope] || [];
            $.ui.ddmanager.droppables[scope].push(this);
        },

        _splice: function (drop) {
            var i = 0;
            for (; i < drop.length; i++) {
                if (drop[i] === this) {
                    drop.splice(i, 1);
                }
            }
        },

        _destroy: function () {
            var drop = $.ui.ddmanager.droppables[this.options.scope];

            this._splice(drop);

            this.element.removeClass("ui-droppable ui-droppable-disabled");
        },

        _setOption: function (key, value) {

            if (key === "accept") {
                this.accept = $.isFunction(value) ? value : function (d) {
                    return d.is(value);
                };
            } else if (key === "scope") {
                var drop = $.ui.ddmanager.droppables[this.options.scope];

                this._splice(drop);
                this._addToManager(value);
            }

            this._super(key, value);
        },

        _activate: function (event) {
            var draggable = $.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.addClass(this.options.activeClass);
            }
            if (draggable) {
                this._trigger("activate", event, this.ui(draggable));
            }
        },

        _deactivate: function (event) {
            var draggable = $.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.removeClass(this.options.activeClass);
            }
            if (draggable) {
                this._trigger("deactivate", event, this.ui(draggable));
            }
        },

        _over: function (event) {

            var draggable = $.ui.ddmanager.current;

            // Bail if draggable and droppable are same element
            if (!draggable || ( draggable.currentItem || draggable.element )[0] === this.element[0]) {
                return;
            }

            if (this.accept.call(this.element[0], ( draggable.currentItem || draggable.element ))) {
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass);
                }
                this._trigger("over", event, this.ui(draggable));
            }

        },

        _out: function (event) {

            var draggable = $.ui.ddmanager.current;

            // Bail if draggable and droppable are same element
            if (!draggable || ( draggable.currentItem || draggable.element )[0] === this.element[0]) {
                return;
            }

            if (this.accept.call(this.element[0], ( draggable.currentItem || draggable.element ))) {
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass);
                }
                this._trigger("out", event, this.ui(draggable));
            }

        },

        _drop: function (event, custom) {

            var draggable = custom || $.ui.ddmanager.current,
                childrenIntersection = false;

            // Bail if draggable and droppable are same element
            if (!draggable || ( draggable.currentItem || draggable.element )[0] === this.element[0]) {
                return false;
            }

            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var inst = $(this).droppable("instance");
                if (
                    inst.options.greedy && !inst.options.disabled &&
                    inst.options.scope === draggable.options.scope &&
                    inst.accept.call(inst.element[0], ( draggable.currentItem || draggable.element )) &&
                    $.ui.intersect(draggable, $.extend(inst, {offset: inst.element.offset()}), inst.options.tolerance, event)
                ) {
                    childrenIntersection = true;
                    return false;
                }
            });
            if (childrenIntersection) {
                return false;
            }

            if (this.accept.call(this.element[0], ( draggable.currentItem || draggable.element ))) {
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass);
                }
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass);
                }
                this._trigger("drop", event, this.ui(draggable));
                return this.element;
            }

            return false;

        },

        ui: function (c) {
            return {
                draggable: ( c.currentItem || c.element ),
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
            };
        }

    });

    $.ui.intersect = (function () {
        function isOverAxis(x, reference, size) {
            return ( x >= reference ) && ( x < ( reference + size ) );
        }

        return function (draggable, droppable, toleranceMode, event) {

            if (!droppable.offset) {
                return false;
            }

            var x1 = ( draggable.positionAbs || draggable.position.absolute ).left + draggable.margins.left,
                y1 = ( draggable.positionAbs || draggable.position.absolute ).top + draggable.margins.top,
                x2 = x1 + draggable.helperProportions.width,
                y2 = y1 + draggable.helperProportions.height,
                l = droppable.offset.left,
                t = droppable.offset.top,
                r = l + droppable.proportions().width,
                b = t + droppable.proportions().height;

            switch (toleranceMode) {
                case "fit":
                    return ( l <= x1 && x2 <= r && t <= y1 && y2 <= b );
                case "intersect":
                    return ( l < x1 + ( draggable.helperProportions.width / 2 ) && // Right Half
                    x2 - ( draggable.helperProportions.width / 2 ) < r && // Left Half
                    t < y1 + ( draggable.helperProportions.height / 2 ) && // Bottom Half
                    y2 - ( draggable.helperProportions.height / 2 ) < b ); // Top Half
                case "pointer":
                    return isOverAxis(event.pageY, t, droppable.proportions().height) && isOverAxis(event.pageX, l, droppable.proportions().width);
                case "touch":
                    return (
                            ( y1 >= t && y1 <= b ) || // Top edge touching
                            ( y2 >= t && y2 <= b ) || // Bottom edge touching
                            ( y1 < t && y2 > b ) // Surrounded vertically
                        ) && (
                            ( x1 >= l && x1 <= r ) || // Left edge touching
                            ( x2 >= l && x2 <= r ) || // Right edge touching
                            ( x1 < l && x2 > r ) // Surrounded horizontally
                        );
                default:
                    return false;
            }
        };
    })();

    /*
     This manager tracks offsets of draggables and droppables
     */
    $.ui.ddmanager = {
        current: null,
        droppables: {"default": []},
        prepareOffsets: function (t, event) {

            var i, j,
                m = $.ui.ddmanager.droppables[t.options.scope] || [],
                type = event ? event.type : null, // workaround for #2317
                list = ( t.currentItem || t.element ).find(":data(ui-droppable)").addBack();

            droppablesLoop: for (i = 0; i < m.length; i++) {

                // No disabled and non-accepted
                if (m[i].options.disabled || ( t && !m[i].accept.call(m[i].element[0], ( t.currentItem || t.element )) )) {
                    continue;
                }

                // Filter out elements in the current dragged item
                for (j = 0; j < list.length; j++) {
                    if (list[j] === m[i].element[0]) {
                        m[i].proportions().height = 0;
                        continue droppablesLoop;
                    }
                }

                m[i].visible = m[i].element.css("display") !== "none";
                if (!m[i].visible) {
                    continue;
                }

                // Activate the droppable if used directly from draggables
                if (type === "mousedown") {
                    m[i]._activate.call(m[i], event);
                }

                m[i].offset = m[i].element.offset();
                m[i].proportions({width: m[i].element[0].offsetWidth, height: m[i].element[0].offsetHeight});

            }

        },
        drop: function (draggable, event) {

            var dropped = false;
            // Create a copy of the droppables in case the list changes during the drop (#9116)
            $.each(( $.ui.ddmanager.droppables[draggable.options.scope] || [] ).slice(), function () {

                if (!this.options) {
                    return;
                }
                if (!this.options.disabled && this.visible && $.ui.intersect(draggable, this, this.options.tolerance, event)) {
                    dropped = this._drop.call(this, event) || dropped;
                }

                if (!this.options.disabled && this.visible && this.accept.call(this.element[0], ( draggable.currentItem || draggable.element ))) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call(this, event);
                }

            });
            return dropped;

        },
        dragStart: function (draggable, event) {
            // Listen for scrolling so that if the dragging causes scrolling the position of the droppables can be recalculated (see #5003)
            draggable.element.parentsUntil("body").bind("scroll.droppable", function () {
                if (!draggable.options.refreshPositions) {
                    $.ui.ddmanager.prepareOffsets(draggable, event);
                }
            });
        },
        drag: function (draggable, event) {

            // If you have a highly dynamic page, you might try this option. It renders positions every time you move the mouse.
            if (draggable.options.refreshPositions) {
                $.ui.ddmanager.prepareOffsets(draggable, event);
            }

            // Run through all droppables and check their positions based on specific tolerance options
            $.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function () {

                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return;
                }

                var parentInstance, scope, parent,
                    intersects = $.ui.intersect(draggable, this, this.options.tolerance, event),
                    c = !intersects && this.isover ? "isout" : ( intersects && !this.isover ? "isover" : null );
                if (!c) {
                    return;
                }

                if (this.options.greedy) {
                    // find droppable parents with same scope
                    scope = this.options.scope;
                    parent = this.element.parents(":data(ui-droppable)").filter(function () {
                        return $(this).droppable("instance").options.scope === scope;
                    });

                    if (parent.length) {
                        parentInstance = $(parent[0]).droppable("instance");
                        parentInstance.greedyChild = ( c === "isover" );
                    }
                }

                // we just moved into a greedy child
                if (parentInstance && c === "isover") {
                    parentInstance.isover = false;
                    parentInstance.isout = true;
                    parentInstance._out.call(parentInstance, event);
                }

                this[c] = true;
                this[c === "isout" ? "isover" : "isout"] = false;
                this[c === "isover" ? "_over" : "_out"].call(this, event);

                // we just moved out of a greedy child
                if (parentInstance && c === "isout") {
                    parentInstance.isout = false;
                    parentInstance.isover = true;
                    parentInstance._over.call(parentInstance, event);
                }
            });

        },
        dragStop: function (draggable, event) {
            draggable.element.parentsUntil("body").unbind("scroll.droppable");
            // Call prepareOffsets one final time since IE does not fire return scroll events when overflow was caused by drag (see #5003)
            if (!draggable.options.refreshPositions) {
                $.ui.ddmanager.prepareOffsets(draggable, event);
            }
        }
    };

    var droppable = $.ui.droppable;


    /*!
     * jQuery UI Resizable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/resizable/
     */


    $.widget("ui.resizable", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            // See #7960
            zIndex: 90,

            // callbacks
            resize: null,
            start: null,
            stop: null
        },

        _num: function (value) {
            return parseInt(value, 10) || 0;
        },

        _isNumber: function (value) {
            return !isNaN(parseInt(value, 10));
        },

        _hasScroll: function (el, a) {

            if ($(el).css("overflow") === "hidden") {
                return false;
            }

            var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
                has = false;

            if (el[scroll] > 0) {
                return true;
            }

            // TODO: determine which cases actually cause this to happen
            // if the element doesn't have the scroll set, see if it's possible to
            // set the scroll
            el[scroll] = 1;
            has = ( el[scroll] > 0 );
            el[scroll] = 0;
            return has;
        },

        _create: function () {

            var n, i, handle, axis, hname,
                that = this,
                o = this.options;
            this.element.addClass("ui-resizable");

            $.extend(this, {
                _aspectRatio: !!(o.aspectRatio),
                aspectRatio: o.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
            });

            // Wrap the element if it cannot hold child nodes
            if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {

                this.element.wrap(
                    $("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })
                );

                this.element = this.element.parent().data(
                    "ui-resizable", this.element.resizable("instance")
                );

                this.elementIsWrapper = true;

                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                });
                this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                });
                // support: Safari
                // Prevent Safari textarea resize
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");

                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));

                // support: IE9
                // avoid IE jump (hard set the margin)
                this.originalElement.css({margin: this.originalElement.css("margin")});

                this._proportionallyResize();
            }

            this.handles = o.handles ||
                ( !$(".ui-resizable-handle", this.element).length ?
                    "e,s,se" : {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } );

            this._handles = $();
            if (this.handles.constructor === String) {

                if (this.handles === "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw";
                }

                n = this.handles.split(",");
                this.handles = {};

                for (i = 0; i < n.length; i++) {

                    handle = $.trim(n[i]);
                    hname = "ui-resizable-" + handle;
                    axis = $("<div class='ui-resizable-handle " + hname + "'></div>");

                    axis.css({zIndex: o.zIndex});

                    // TODO : What's going on here?
                    if ("se" === handle) {
                        axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
                    }

                    this.handles[handle] = ".ui-resizable-" + handle;
                    this.element.append(axis);
                }

            }

            this._renderAxis = function (target) {

                var i, axis, padPos, padWrapper;

                target = target || this.element;

                for (i in this.handles) {

                    if (this.handles[i].constructor === String) {
                        this.handles[i] = this.element.children(this.handles[i]).first().show();
                    } else if (this.handles[i].jquery || this.handles[i].nodeType) {
                        this.handles[i] = $(this.handles[i]);
                        this._on(this.handles[i], {"mousedown": that._mouseDown});
                    }

                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {

                        axis = $(this.handles[i], this.element);

                        padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();

                        padPos = ["padding",
                            /ne|nw|n/.test(i) ? "Top" :
                                /se|sw|s/.test(i) ? "Bottom" :
                                    /^e$/.test(i) ? "Right" : "Left"].join("");

                        target.css(padPos, padWrapper);

                        this._proportionallyResize();
                    }

                    this._handles = this._handles.add(this.handles[i]);
                }
            };

            // TODO: make renderAxis a prototype function
            this._renderAxis(this.element);

            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();

            this._handles.mouseover(function () {
                if (!that.resizing) {
                    if (this.className) {
                        axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    }
                    that.axis = axis && axis[1] ? axis[1] : "se";
                }
            });

            if (o.autoHide) {
                this._handles.hide();
                $(this.element)
                    .addClass("ui-resizable-autohide")
                    .mouseenter(function () {
                        if (o.disabled) {
                            return;
                        }
                        $(this).removeClass("ui-resizable-autohide");
                        that._handles.show();
                    })
                    .mouseleave(function () {
                        if (o.disabled) {
                            return;
                        }
                        if (!that.resizing) {
                            $(this).addClass("ui-resizable-autohide");
                            that._handles.hide();
                        }
                    });
            }

            this._mouseInit();
        },

        _destroy: function () {

            this._mouseDestroy();

            var wrapper,
                _destroy = function (exp) {
                    $(exp)
                        .removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing")
                        .removeData("resizable")
                        .removeData("ui-resizable")
                        .unbind(".resizable")
                        .find(".ui-resizable-handle")
                        .remove();
                };

            // TODO: Unwrap at same DOM position
            if (this.elementIsWrapper) {
                _destroy(this.element);
                wrapper = this.element;
                this.originalElement.css({
                    position: wrapper.css("position"),
                    width: wrapper.outerWidth(),
                    height: wrapper.outerHeight(),
                    top: wrapper.css("top"),
                    left: wrapper.css("left")
                }).insertAfter(wrapper);
                wrapper.remove();
            }

            this.originalElement.css("resize", this.originalResizeStyle);
            _destroy(this.originalElement);

            return this;
        },

        _mouseCapture: function (event) {
            var i, handle,
                capture = false;

            for (i in this.handles) {
                handle = $(this.handles[i])[0];
                if (handle === event.target || $.contains(handle, event.target)) {
                    capture = true;
                }
            }

            return !this.options.disabled && capture;
        },

        _mouseStart: function (event) {

            var curleft, curtop, cursor,
                o = this.options,
                el = this.element;

            this.resizing = true;

            this._renderProxy();

            curleft = this._num(this.helper.css("left"));
            curtop = this._num(this.helper.css("top"));

            if (o.containment) {
                curleft += $(o.containment).scrollLeft() || 0;
                curtop += $(o.containment).scrollTop() || 0;
            }

            this.offset = this.helper.offset();
            this.position = {left: curleft, top: curtop};

            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: el.width(),
                height: el.height()
            };

            this.originalSize = this._helper ? {
                width: el.outerWidth(),
                height: el.outerHeight()
            } : {
                width: el.width(),
                height: el.height()
            };

            this.sizeDiff = {
                width: el.outerWidth() - el.width(),
                height: el.outerHeight() - el.height()
            };

            this.originalPosition = {left: curleft, top: curtop};
            this.originalMousePosition = {left: event.pageX, top: event.pageY};

            this.aspectRatio = (typeof o.aspectRatio === "number") ?
                o.aspectRatio :
                ((this.originalSize.width / this.originalSize.height) || 1);

            cursor = $(".ui-resizable-" + this.axis).css("cursor");
            $("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);

            el.addClass("ui-resizable-resizing");
            this._propagate("start", event);
            return true;
        },

        _mouseDrag: function (event) {

            var data, props,
                smp = this.originalMousePosition,
                a = this.axis,
                dx = (event.pageX - smp.left) || 0,
                dy = (event.pageY - smp.top) || 0,
                trigger = this._change[a];

            this._updatePrevProperties();

            if (!trigger) {
                return false;
            }

            data = trigger.apply(this, [event, dx, dy]);

            this._updateVirtualBoundaries(event.shiftKey);
            if (this._aspectRatio || event.shiftKey) {
                data = this._updateRatio(data, event);
            }

            data = this._respectSize(data, event);

            this._updateCache(data);

            this._propagate("resize", event);

            props = this._applyChanges();

            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize();
            }

            if (!$.isEmptyObject(props)) {
                this._updatePrevProperties();
                this._trigger("resize", event, this.ui());
                this._applyChanges();
            }

            return false;
        },

        _mouseStop: function (event) {

            this.resizing = false;
            var pr, ista, soffseth, soffsetw, s, left, top,
                o = this.options, that = this;

            if (this._helper) {

                pr = this._proportionallyResizeElements;
                ista = pr.length && (/textarea/i).test(pr[0].nodeName);
                soffseth = ista && this._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height;
                soffsetw = ista ? 0 : that.sizeDiff.width;

                s = {
                    width: (that.helper.width() - soffsetw),
                    height: (that.helper.height() - soffseth)
                };
                left = (parseInt(that.element.css("left"), 10) +
                    (that.position.left - that.originalPosition.left)) || null;
                top = (parseInt(that.element.css("top"), 10) +
                    (that.position.top - that.originalPosition.top)) || null;

                if (!o.animate) {
                    this.element.css($.extend(s, {top: top, left: left}));
                }

                that.helper.height(that.size.height);
                that.helper.width(that.size.width);

                if (this._helper && !o.animate) {
                    this._proportionallyResize();
                }
            }

            $("body").css("cursor", "auto");

            this.element.removeClass("ui-resizable-resizing");

            this._propagate("stop", event);

            if (this._helper) {
                this.helper.remove();
            }

            return false;

        },

        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            };
        },

        _applyChanges: function () {
            var props = {};

            if (this.position.top !== this.prevPosition.top) {
                props.top = this.position.top + "px";
            }
            if (this.position.left !== this.prevPosition.left) {
                props.left = this.position.left + "px";
            }
            if (this.size.width !== this.prevSize.width) {
                props.width = this.size.width + "px";
            }
            if (this.size.height !== this.prevSize.height) {
                props.height = this.size.height + "px";
            }

            this.helper.css(props);

            return props;
        },

        _updateVirtualBoundaries: function (forceAspectRatio) {
            var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
                o = this.options;

            b = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
                minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
            };

            if (this._aspectRatio || forceAspectRatio) {
                pMinWidth = b.minHeight * this.aspectRatio;
                pMinHeight = b.minWidth / this.aspectRatio;
                pMaxWidth = b.maxHeight * this.aspectRatio;
                pMaxHeight = b.maxWidth / this.aspectRatio;

                if (pMinWidth > b.minWidth) {
                    b.minWidth = pMinWidth;
                }
                if (pMinHeight > b.minHeight) {
                    b.minHeight = pMinHeight;
                }
                if (pMaxWidth < b.maxWidth) {
                    b.maxWidth = pMaxWidth;
                }
                if (pMaxHeight < b.maxHeight) {
                    b.maxHeight = pMaxHeight;
                }
            }
            this._vBoundaries = b;
        },

        _updateCache: function (data) {
            this.offset = this.helper.offset();
            if (this._isNumber(data.left)) {
                this.position.left = data.left;
            }
            if (this._isNumber(data.top)) {
                this.position.top = data.top;
            }
            if (this._isNumber(data.height)) {
                this.size.height = data.height;
            }
            if (this._isNumber(data.width)) {
                this.size.width = data.width;
            }
        },

        _updateRatio: function (data) {

            var cpos = this.position,
                csize = this.size,
                a = this.axis;

            if (this._isNumber(data.height)) {
                data.width = (data.height * this.aspectRatio);
            } else if (this._isNumber(data.width)) {
                data.height = (data.width / this.aspectRatio);
            }

            if (a === "sw") {
                data.left = cpos.left + (csize.width - data.width);
                data.top = null;
            }
            if (a === "nw") {
                data.top = cpos.top + (csize.height - data.height);
                data.left = cpos.left + (csize.width - data.width);
            }

            return data;
        },

        _respectSize: function (data) {

            var o = this._vBoundaries,
                a = this.axis,
                ismaxw = this._isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width),
                ismaxh = this._isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
                isminw = this._isNumber(data.width) && o.minWidth && (o.minWidth > data.width),
                isminh = this._isNumber(data.height) && o.minHeight && (o.minHeight > data.height),
                dw = this.originalPosition.left + this.originalSize.width,
                dh = this.position.top + this.size.height,
                cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
            if (isminw) {
                data.width = o.minWidth;
            }
            if (isminh) {
                data.height = o.minHeight;
            }
            if (ismaxw) {
                data.width = o.maxWidth;
            }
            if (ismaxh) {
                data.height = o.maxHeight;
            }

            if (isminw && cw) {
                data.left = dw - o.minWidth;
            }
            if (ismaxw && cw) {
                data.left = dw - o.maxWidth;
            }
            if (isminh && ch) {
                data.top = dh - o.minHeight;
            }
            if (ismaxh && ch) {
                data.top = dh - o.maxHeight;
            }

            // Fixing jump error on top/left - bug #2330
            if (!data.width && !data.height && !data.left && data.top) {
                data.top = null;
            } else if (!data.width && !data.height && !data.top && data.left) {
                data.left = null;
            }

            return data;
        },

        _getPaddingPlusBorderDimensions: function (element) {
            var i = 0,
                widths = [],
                borders = [
                    element.css("borderTopWidth"),
                    element.css("borderRightWidth"),
                    element.css("borderBottomWidth"),
                    element.css("borderLeftWidth")
                ],
                paddings = [
                    element.css("paddingTop"),
                    element.css("paddingRight"),
                    element.css("paddingBottom"),
                    element.css("paddingLeft")
                ];

            for (; i < 4; i++) {
                widths[i] = ( parseInt(borders[i], 10) || 0 );
                widths[i] += ( parseInt(paddings[i], 10) || 0 );
            }

            return {
                height: widths[0] + widths[2],
                width: widths[1] + widths[3]
            };
        },

        _proportionallyResize: function () {

            if (!this._proportionallyResizeElements.length) {
                return;
            }

            var prel,
                i = 0,
                element = this.helper || this.element;

            for (; i < this._proportionallyResizeElements.length; i++) {

                prel = this._proportionallyResizeElements[i];

                // TODO: Seems like a bug to cache this.outerDimensions
                // considering that we are in a loop.
                if (!this.outerDimensions) {
                    this.outerDimensions = this._getPaddingPlusBorderDimensions(prel);
                }

                prel.css({
                    height: (element.height() - this.outerDimensions.height) || 0,
                    width: (element.width() - this.outerDimensions.width) || 0
                });

            }

        },

        _renderProxy: function () {

            var el = this.element, o = this.options;
            this.elementOffset = el.offset();

            if (this._helper) {

                this.helper = this.helper || $("<div style='overflow:hidden;'></div>");

                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++o.zIndex //TODO: Don't modify option
                });

                this.helper
                    .appendTo("body")
                    .disableSelection();

            } else {
                this.helper = this.element;
            }

        },

        _change: {
            e: function (event, dx) {
                return {width: this.originalSize.width + dx};
            },
            w: function (event, dx) {
                var cs = this.originalSize, sp = this.originalPosition;
                return {left: sp.left + dx, width: cs.width - dx};
            },
            n: function (event, dx, dy) {
                var cs = this.originalSize, sp = this.originalPosition;
                return {top: sp.top + dy, height: cs.height - dy};
            },
            s: function (event, dx, dy) {
                return {height: this.originalSize.height + dy};
            },
            se: function (event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments),
                    this._change.e.apply(this, [event, dx, dy]));
            },
            sw: function (event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments),
                    this._change.w.apply(this, [event, dx, dy]));
            },
            ne: function (event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments),
                    this._change.e.apply(this, [event, dx, dy]));
            },
            nw: function (event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments),
                    this._change.w.apply(this, [event, dx, dy]));
            }
        },

        _propagate: function (n, event) {
            $.ui.plugin.call(this, n, [event, this.ui()]);
            (n !== "resize" && this._trigger(n, event, this.ui()));
        },

        plugins: {},

        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }

    });

    /*
     * Resizable Extensions
     */

    $.ui.plugin.add("resizable", "animate", {

        stop: function (event) {
            var that = $(this).resizable("instance"),
                o = that.options,
                pr = that._proportionallyResizeElements,
                ista = pr.length && (/textarea/i).test(pr[0].nodeName),
                soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height,
                soffsetw = ista ? 0 : that.sizeDiff.width,
                style = {width: (that.size.width - soffsetw), height: (that.size.height - soffseth)},
                left = (parseInt(that.element.css("left"), 10) +
                    (that.position.left - that.originalPosition.left)) || null,
                top = (parseInt(that.element.css("top"), 10) +
                    (that.position.top - that.originalPosition.top)) || null;

            that.element.animate(
                $.extend(style, top && left ? {top: top, left: left} : {}), {
                    duration: o.animateDuration,
                    easing: o.animateEasing,
                    step: function () {

                        var data = {
                            width: parseInt(that.element.css("width"), 10),
                            height: parseInt(that.element.css("height"), 10),
                            top: parseInt(that.element.css("top"), 10),
                            left: parseInt(that.element.css("left"), 10)
                        };

                        if (pr && pr.length) {
                            $(pr[0]).css({width: data.width, height: data.height});
                        }

                        // propagating resize, and updating values for each animation step
                        that._updateCache(data);
                        that._propagate("resize", event);

                    }
                }
            );
        }

    });

    $.ui.plugin.add("resizable", "containment", {

        start: function () {
            var element, p, co, ch, cw, width, height,
                that = $(this).resizable("instance"),
                o = that.options,
                el = that.element,
                oc = o.containment,
                ce = ( oc instanceof $ ) ? oc.get(0) : ( /parent/.test(oc) ) ? el.parent().get(0) : oc;

            if (!ce) {
                return;
            }

            that.containerElement = $(ce);

            if (/document/.test(oc) || oc === document) {
                that.containerOffset = {
                    left: 0,
                    top: 0
                };
                that.containerPosition = {
                    left: 0,
                    top: 0
                };

                that.parentData = {
                    element: $(document),
                    left: 0,
                    top: 0,
                    width: $(document).width(),
                    height: $(document).height() || document.body.parentNode.scrollHeight
                };
            } else {
                element = $(ce);
                p = [];
                $(["Top", "Right", "Left", "Bottom"]).each(function (i, name) {
                    p[i] = that._num(element.css("padding" + name));
                });

                that.containerOffset = element.offset();
                that.containerPosition = element.position();
                that.containerSize = {
                    height: ( element.innerHeight() - p[3] ),
                    width: ( element.innerWidth() - p[1] )
                };

                co = that.containerOffset;
                ch = that.containerSize.height;
                cw = that.containerSize.width;
                width = ( that._hasScroll(ce, "left") ? ce.scrollWidth : cw );
                height = ( that._hasScroll(ce) ? ce.scrollHeight : ch );

                that.parentData = {
                    element: ce,
                    left: co.left,
                    top: co.top,
                    width: width,
                    height: height
                };
            }
        },

        resize: function (event) {
            var woset, hoset, isParent, isOffsetRelative,
                that = $(this).resizable("instance"),
                o = that.options,
                co = that.containerOffset,
                cp = that.position,
                pRatio = that._aspectRatio || event.shiftKey,
                cop = {
                    top: 0,
                    left: 0
                },
                ce = that.containerElement,
                continueResize = true;

            if (ce[0] !== document && ( /static/ ).test(ce.css("position"))) {
                cop = co;
            }

            if (cp.left < ( that._helper ? co.left : 0 )) {
                that.size.width = that.size.width +
                    ( that._helper ?
                        ( that.position.left - co.left ) :
                        ( that.position.left - cop.left ) );

                if (pRatio) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
                that.position.left = o.helper ? co.left : 0;
            }

            if (cp.top < ( that._helper ? co.top : 0 )) {
                that.size.height = that.size.height +
                    ( that._helper ?
                        ( that.position.top - co.top ) :
                        that.position.top );

                if (pRatio) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
                that.position.top = that._helper ? co.top : 0;
            }

            isParent = that.containerElement.get(0) === that.element.parent().get(0);
            isOffsetRelative = /relative|absolute/.test(that.containerElement.css("position"));

            if (isParent && isOffsetRelative) {
                that.offset.left = that.parentData.left + that.position.left;
                that.offset.top = that.parentData.top + that.position.top;
            } else {
                that.offset.left = that.element.offset().left;
                that.offset.top = that.element.offset().top;
            }

            woset = Math.abs(that.sizeDiff.width +
                (that._helper ?
                that.offset.left - cop.left :
                    (that.offset.left - co.left)));

            hoset = Math.abs(that.sizeDiff.height +
                (that._helper ?
                that.offset.top - cop.top :
                    (that.offset.top - co.top)));

            if (woset + that.size.width >= that.parentData.width) {
                that.size.width = that.parentData.width - woset;
                if (pRatio) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
            }

            if (hoset + that.size.height >= that.parentData.height) {
                that.size.height = that.parentData.height - hoset;
                if (pRatio) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
            }

            if (!continueResize) {
                that.position.left = that.prevPosition.left;
                that.position.top = that.prevPosition.top;
                that.size.width = that.prevSize.width;
                that.size.height = that.prevSize.height;
            }
        },

        stop: function () {
            var that = $(this).resizable("instance"),
                o = that.options,
                co = that.containerOffset,
                cop = that.containerPosition,
                ce = that.containerElement,
                helper = $(that.helper),
                ho = helper.offset(),
                w = helper.outerWidth() - that.sizeDiff.width,
                h = helper.outerHeight() - that.sizeDiff.height;

            if (that._helper && !o.animate && ( /relative/ ).test(ce.css("position"))) {
                $(this).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                });
            }

            if (that._helper && !o.animate && ( /static/ ).test(ce.css("position"))) {
                $(this).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                });
            }
        }
    });

    $.ui.plugin.add("resizable", "alsoResize", {

        start: function () {
            var that = $(this).resizable("instance"),
                o = that.options;

            $(o.alsoResize).each(function () {
                var el = $(this);
                el.data("ui-resizable-alsoresize", {
                    width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
                    left: parseInt(el.css("left"), 10), top: parseInt(el.css("top"), 10)
                });
            });
        },

        resize: function (event, ui) {
            var that = $(this).resizable("instance"),
                o = that.options,
                os = that.originalSize,
                op = that.originalPosition,
                delta = {
                    height: (that.size.height - os.height) || 0,
                    width: (that.size.width - os.width) || 0,
                    top: (that.position.top - op.top) || 0,
                    left: (that.position.left - op.left) || 0
                };

            $(o.alsoResize).each(function () {
                var el = $(this), start = $(this).data("ui-resizable-alsoresize"), style = {},
                    css = el.parents(ui.originalElement[0]).length ?
                        ["width", "height"] :
                        ["width", "height", "top", "left"];

                $.each(css, function (i, prop) {
                    var sum = (start[prop] || 0) + (delta[prop] || 0);
                    if (sum && sum >= 0) {
                        style[prop] = sum || null;
                    }
                });

                el.css(style);
            });
        },

        stop: function () {
            $(this).removeData("resizable-alsoresize");
        }
    });

    $.ui.plugin.add("resizable", "ghost", {

        start: function () {

            var that = $(this).resizable("instance"), o = that.options, cs = that.size;

            that.ghost = that.originalElement.clone();
            that.ghost
                .css({
                    opacity: 0.25,
                    display: "block",
                    position: "relative",
                    height: cs.height,
                    width: cs.width,
                    margin: 0,
                    left: 0,
                    top: 0
                })
                .addClass("ui-resizable-ghost")
                .addClass(typeof o.ghost === "string" ? o.ghost : "");

            that.ghost.appendTo(that.helper);

        },

        resize: function () {
            var that = $(this).resizable("instance");
            if (that.ghost) {
                that.ghost.css({
                    position: "relative",
                    height: that.size.height,
                    width: that.size.width
                });
            }
        },

        stop: function () {
            var that = $(this).resizable("instance");
            if (that.ghost && that.helper) {
                that.helper.get(0).removeChild(that.ghost.get(0));
            }
        }

    });

    $.ui.plugin.add("resizable", "grid", {

        resize: function () {
            var outerDimensions,
                that = $(this).resizable("instance"),
                o = that.options,
                cs = that.size,
                os = that.originalSize,
                op = that.originalPosition,
                a = that.axis,
                grid = typeof o.grid === "number" ? [o.grid, o.grid] : o.grid,
                gridX = (grid[0] || 1),
                gridY = (grid[1] || 1),
                ox = Math.round((cs.width - os.width) / gridX) * gridX,
                oy = Math.round((cs.height - os.height) / gridY) * gridY,
                newWidth = os.width + ox,
                newHeight = os.height + oy,
                isMaxWidth = o.maxWidth && (o.maxWidth < newWidth),
                isMaxHeight = o.maxHeight && (o.maxHeight < newHeight),
                isMinWidth = o.minWidth && (o.minWidth > newWidth),
                isMinHeight = o.minHeight && (o.minHeight > newHeight);

            o.grid = grid;

            if (isMinWidth) {
                newWidth += gridX;
            }
            if (isMinHeight) {
                newHeight += gridY;
            }
            if (isMaxWidth) {
                newWidth -= gridX;
            }
            if (isMaxHeight) {
                newHeight -= gridY;
            }

            if (/^(se|s|e)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
            } else if (/^(ne)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.top = op.top - oy;
            } else if (/^(sw)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.left = op.left - ox;
            } else {
                if (newHeight - gridY <= 0 || newWidth - gridX <= 0) {
                    outerDimensions = that._getPaddingPlusBorderDimensions(this);
                }

                if (newHeight - gridY > 0) {
                    that.size.height = newHeight;
                    that.position.top = op.top - oy;
                } else {
                    newHeight = gridY - outerDimensions.height;
                    that.size.height = newHeight;
                    that.position.top = op.top + os.height - newHeight;
                }
                if (newWidth - gridX > 0) {
                    that.size.width = newWidth;
                    that.position.left = op.left - ox;
                } else {
                    newWidth = gridX - outerDimensions.width;
                    that.size.width = newWidth;
                    that.position.left = op.left + os.width - newWidth;
                }
            }
        }

    });

    var resizable = $.ui.resizable;


    /*!
     * jQuery UI Selectable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/selectable/
     */


    var selectable = $.widget("ui.selectable", $.ui.mouse, {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch",

            // callbacks
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var selectees,
                that = this;

            this.element.addClass("ui-selectable");

            this.dragged = false;

            // cache selectee children based on filter
            this.refresh = function () {
                selectees = $(that.options.filter, that.element[0]);
                selectees.addClass("ui-selectee");
                selectees.each(function () {
                    var $this = $(this),
                        pos = $this.offset();
                    $.data(this, "selectable-item", {
                        element: this,
                        $element: $this,
                        left: pos.left,
                        top: pos.top,
                        right: pos.left + $this.outerWidth(),
                        bottom: pos.top + $this.outerHeight(),
                        startselected: false,
                        selected: $this.hasClass("ui-selected"),
                        selecting: $this.hasClass("ui-selecting"),
                        unselecting: $this.hasClass("ui-unselecting")
                    });
                });
            };
            this.refresh();

            this.selectees = selectees.addClass("ui-selectee");

            this._mouseInit();

            this.helper = $("<div class='ui-selectable-helper'></div>");
        },

        _destroy: function () {
            this.selectees
                .removeClass("ui-selectee")
                .removeData("selectable-item");
            this.element
                .removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy();
        },

        _mouseStart: function (event) {
            var that = this,
                options = this.options;

            this.opos = [event.pageX, event.pageY];

            if (this.options.disabled) {
                return;
            }

            this.selectees = $(options.filter, this.element[0]);

            this._trigger("start", event);

            $(options.appendTo).append(this.helper);
            // position helper (lasso)
            this.helper.css({
                "left": event.pageX,
                "top": event.pageY,
                "width": 0,
                "height": 0
            });

            if (options.autoRefresh) {
                this.refresh();
            }

            this.selectees.filter(".ui-selected").each(function () {
                var selectee = $.data(this, "selectable-item");
                selectee.startselected = true;
                if (!event.metaKey && !event.ctrlKey) {
                    selectee.$element.removeClass("ui-selected");
                    selectee.selected = false;
                    selectee.$element.addClass("ui-unselecting");
                    selectee.unselecting = true;
                    // selectable UNSELECTING callback
                    that._trigger("unselecting", event, {
                        unselecting: selectee.element
                    });
                }
            });

            $(event.target).parents().addBack().each(function () {
                var doSelect,
                    selectee = $.data(this, "selectable-item");
                if (selectee) {
                    doSelect = (!event.metaKey && !event.ctrlKey) || !selectee.$element.hasClass("ui-selected");
                    selectee.$element
                        .removeClass(doSelect ? "ui-unselecting" : "ui-selected")
                        .addClass(doSelect ? "ui-selecting" : "ui-unselecting");
                    selectee.unselecting = !doSelect;
                    selectee.selecting = doSelect;
                    selectee.selected = doSelect;
                    // selectable (UN)SELECTING callback
                    if (doSelect) {
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    } else {
                        that._trigger("unselecting", event, {
                            unselecting: selectee.element
                        });
                    }
                    return false;
                }
            });

        },

        _mouseDrag: function (event) {

            this.dragged = true;

            if (this.options.disabled) {
                return;
            }

            var tmp,
                that = this,
                options = this.options,
                x1 = this.opos[0],
                y1 = this.opos[1],
                x2 = event.pageX,
                y2 = event.pageY;

            if (x1 > x2) {
                tmp = x2;
                x2 = x1;
                x1 = tmp;
            }
            if (y1 > y2) {
                tmp = y2;
                y2 = y1;
                y1 = tmp;
            }
            this.helper.css({left: x1, top: y1, width: x2 - x1, height: y2 - y1});

            this.selectees.each(function () {
                var selectee = $.data(this, "selectable-item"),
                    hit = false;

                //prevent helper from being selected if appendTo: selectable
                if (!selectee || selectee.element === that.element[0]) {
                    return;
                }

                if (options.tolerance === "touch") {
                    hit = ( !(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1) );
                } else if (options.tolerance === "fit") {
                    hit = (selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2);
                }

                if (hit) {
                    // SELECT
                    if (selectee.selected) {
                        selectee.$element.removeClass("ui-selected");
                        selectee.selected = false;
                    }
                    if (selectee.unselecting) {
                        selectee.$element.removeClass("ui-unselecting");
                        selectee.unselecting = false;
                    }
                    if (!selectee.selecting) {
                        selectee.$element.addClass("ui-selecting");
                        selectee.selecting = true;
                        // selectable SELECTING callback
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    }
                } else {
                    // UNSELECT
                    if (selectee.selecting) {
                        if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
                            selectee.$element.removeClass("ui-selecting");
                            selectee.selecting = false;
                            selectee.$element.addClass("ui-selected");
                            selectee.selected = true;
                        } else {
                            selectee.$element.removeClass("ui-selecting");
                            selectee.selecting = false;
                            if (selectee.startselected) {
                                selectee.$element.addClass("ui-unselecting");
                                selectee.unselecting = true;
                            }
                            // selectable UNSELECTING callback
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                    if (selectee.selected) {
                        if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
                            selectee.$element.removeClass("ui-selected");
                            selectee.selected = false;

                            selectee.$element.addClass("ui-unselecting");
                            selectee.unselecting = true;
                            // selectable UNSELECTING callback
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                }
            });

            return false;
        },

        _mouseStop: function (event) {
            var that = this;

            this.dragged = false;

            $(".ui-unselecting", this.element[0]).each(function () {
                var selectee = $.data(this, "selectable-item");
                selectee.$element.removeClass("ui-unselecting");
                selectee.unselecting = false;
                selectee.startselected = false;
                that._trigger("unselected", event, {
                    unselected: selectee.element
                });
            });
            $(".ui-selecting", this.element[0]).each(function () {
                var selectee = $.data(this, "selectable-item");
                selectee.$element.removeClass("ui-selecting").addClass("ui-selected");
                selectee.selecting = false;
                selectee.selected = true;
                selectee.startselected = true;
                that._trigger("selected", event, {
                    selected: selectee.element
                });
            });
            this._trigger("stop", event);

            this.helper.remove();

            return false;
        }

    });


    /*!
     * jQuery UI Sortable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/sortable/
     */


    var sortable = $.widget("ui.sortable", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000,

            // callbacks
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },

        _isOverAxis: function (x, reference, size) {
            return ( x >= reference ) && ( x < ( reference + size ) );
        },

        _isFloating: function (item) {
            return (/left|right/).test(item.css("float")) || (/inline|table-cell/).test(item.css("display"));
        },

        _create: function () {
            this.containerCache = {};
            this.element.addClass("ui-sortable");

            //Get the items
            this.refresh();

            //Let's determine the parent's offset
            this.offset = this.element.offset();

            //Initialize mouse events for interaction
            this._mouseInit();

            this._setHandleClassName();

            //We're ready to go
            this.ready = true;

        },

        _setOption: function (key, value) {
            this._super(key, value);

            if (key === "handle") {
                this._setHandleClassName();
            }
        },

        _setHandleClassName: function () {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            $.each(this.items, function () {
                ( this.instance.options.handle ?
                    this.item.find(this.instance.options.handle) : this.item )
                    .addClass("ui-sortable-handle");
            });
        },

        _destroy: function () {
            this.element
                .removeClass("ui-sortable ui-sortable-disabled")
                .find(".ui-sortable-handle")
                .removeClass("ui-sortable-handle");
            this._mouseDestroy();

            for (var i = this.items.length - 1; i >= 0; i--) {
                this.items[i].item.removeData(this.widgetName + "-item");
            }

            return this;
        },

        _mouseCapture: function (event, overrideHandle) {
            var currentItem = null,
                validHandle = false,
                that = this;

            if (this.reverting) {
                return false;
            }

            if (this.options.disabled || this.options.type === "static") {
                return false;
            }

            //We have to refresh the items data once first
            this._refreshItems(event);

            //Find out if the clicked node (or one of its parents) is a actual item in this.items
            $(event.target).parents().each(function () {
                if ($.data(this, that.widgetName + "-item") === that) {
                    currentItem = $(this);
                    return false;
                }
            });
            if ($.data(event.target, that.widgetName + "-item") === that) {
                currentItem = $(event.target);
            }

            if (!currentItem) {
                return false;
            }
            if (this.options.handle && !overrideHandle) {
                $(this.options.handle, currentItem).find("*").addBack().each(function () {
                    if (this === event.target) {
                        validHandle = true;
                    }
                });
                if (!validHandle) {
                    return false;
                }
            }

            this.currentItem = currentItem;
            this._removeCurrentsFromItems();
            return true;

        },

        _mouseStart: function (event, overrideHandle, noActivation) {

            var i, body,
                o = this.options;

            this.currentContainer = this;

            //We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
            this.refreshPositions();

            //Create and append the visible helper
            this.helper = this._createHelper(event);

            //Cache the helper size
            this._cacheHelperProportions();

            /*
             * - Position generation -
             * This block generates everything position related - it's the core of draggables.
             */

            //Cache the margins of the original element
            this._cacheMargins();

            //Get the next scrolling parent
            this.scrollParent = this.helper.scrollParent();

            //The element's absolute position on the page minus margins
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };

            $.extend(this.offset, {
                click: { //Where the click happened, relative to the element
                    left: event.pageX - this.offset.left,
                    top: event.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
            });

            // Only after we got the offset, we can change the helper's position to absolute
            // TODO: Still need to figure out a way to make relative sorting possible
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");

            //Generate the original position
            this.originalPosition = this._generatePosition(event);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

            //Cache the former DOM position
            this.domPosition = {prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0]};

            //If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
            if (this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide();
            }

            //Create the placeholder
            this._createPlaceholder();

            //Set a containment if given in the options
            if (o.containment) {
                this._setContainment();
            }

            if (o.cursor && o.cursor !== "auto") { // cursor option
                body = this.document.find("body");

                // support: IE
                this.storedCursor = body.css("cursor");
                body.css("cursor", o.cursor);

                this.storedStylesheet = $("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(body);
            }

            if (o.opacity) { // opacity option
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity");
                }
                this.helper.css("opacity", o.opacity);
            }

            if (o.zIndex) { // zIndex option
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex");
                }
                this.helper.css("zIndex", o.zIndex);
            }

            //Prepare scrolling
            if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset();
            }

            //Call callbacks
            this._trigger("start", event, this._uiHash());

            //Recache the helper size
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions();
            }


            //Post "activate" events to possible containers
            if (!noActivation) {
                for (i = this.containers.length - 1; i >= 0; i--) {
                    this.containers[i]._trigger("activate", event, this._uiHash(this));
                }
            }

            //Prepare possible droppables
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }

            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }

            this.dragging = true;

            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position
            return true;

        },

        _mouseDrag: function (event) {
            var i, item, itemElement, intersection,
                o = this.options,
                scrolled = false;

            //Compute the helpers position
            this.position = this._generatePosition(event);
            this.positionAbs = this._convertPositionTo("absolute");

            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs;
            }

            //Do scrolling
            if (this.options.scroll) {
                if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {

                    if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
                    } else if (event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
                    }

                    if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
                    } else if (event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
                    }

                } else {

                    if (event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
                        scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
                    } else if (this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) {
                        scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
                    }

                    if (event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
                        scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed);
                    } else if (this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) {
                        scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed);
                    }

                }

                if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                    $.ui.ddmanager.prepareOffsets(this, event);
                }
            }

            //Regenerate the absolute position used for position checks
            this.positionAbs = this._convertPositionTo("absolute");

            //Set the helper position
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px";
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px";
            }

            //Rearrange
            for (i = this.items.length - 1; i >= 0; i--) {

                //Cache variables and intersection, continue if no intersection
                item = this.items[i];
                itemElement = item.item[0];
                intersection = this._intersectsWithPointer(item);
                if (!intersection) {
                    continue;
                }

                // Only put the placeholder inside the current Container, skip all
                // items from other containers. This works because when moving
                // an item from one container to another the
                // currentContainer is switched before the placeholder is moved.
                //
                // Without this, moving items in "sub-sortables" can cause
                // the placeholder to jitter between the outer and inner container.
                if (item.instance !== this.currentContainer) {
                    continue;
                }

                // cannot intersect with itself
                // no useless actions that have been done before
                // no action if the item moved is the parent of the item checked
                if (itemElement !== this.currentItem[0] &&
                    this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement && !$.contains(this.placeholder[0], itemElement) &&
                    (this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)
                ) {

                    this.direction = intersection === 1 ? "down" : "up";

                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
                        this._rearrange(event, item);
                    } else {
                        break;
                    }

                    this._trigger("change", event, this._uiHash());
                    break;
                }
            }

            //Post events to containers
            this._contactContainers(event);

            //Interconnect with droppables
            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }

            //Call callbacks
            this._trigger("sort", event, this._uiHash());

            this.lastPositionAbs = this.positionAbs;
            return false;

        },

        _mouseStop: function (event, noPropagation) {

            if (!event) {
                return;
            }

            //If we are using droppables, inform the manager about the drop
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                $.ui.ddmanager.drop(this, event);
            }

            if (this.options.revert) {
                var that = this,
                    cur = this.placeholder.offset(),
                    axis = this.options.axis,
                    animation = {};

                if (!axis || axis === "x") {
                    animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
                }
                if (!axis || axis === "y") {
                    animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
                }
                this.reverting = true;
                $(this.helper).animate(animation, parseInt(this.options.revert, 10) || 500, function () {
                    that._clear(event);
                });
            } else {
                this._clear(event, noPropagation);
            }

            return false;

        },

        cancel: function () {

            if (this.dragging) {

                this._mouseUp({target: null});

                if (this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
                } else {
                    this.currentItem.show();
                }

                //Post deactivating events to containers
                for (var i = this.containers.length - 1; i >= 0; i--) {
                    this.containers[i]._trigger("deactivate", null, this._uiHash(this));
                    if (this.containers[i].containerCache.over) {
                        this.containers[i]._trigger("out", null, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }

            }

            if (this.placeholder) {
                //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                }
                if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove();
                }

                $.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });

                if (this.domPosition.prev) {
                    $(this.domPosition.prev).after(this.currentItem);
                } else {
                    $(this.domPosition.parent).prepend(this.currentItem);
                }
            }

            return this;

        },

        serialize: function (o) {

            var items = this._getItemsAsjQuery(o && o.connected),
                str = [];
            o = o || {};

            $(items).each(function () {
                var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || (/(.+)[\-=_](.+)/));
                if (res) {
                    str.push((o.key || res[1] + "[]") + "=" + (o.key && o.expression ? res[1] : res[2]));
                }
            });

            if (!str.length && o.key) {
                str.push(o.key + "=");
            }

            return str.join("&");

        },

        toArray: function (o) {

            var items = this._getItemsAsjQuery(o && o.connected),
                ret = [];

            o = o || {};

            items.each(function () {
                ret.push($(o.item || this).attr(o.attribute || "id") || "");
            });
            return ret;

        },

        /* Be careful with the following core functions */
        _intersectsWith: function (item) {

            var x1 = this.positionAbs.left,
                x2 = x1 + this.helperProportions.width,
                y1 = this.positionAbs.top,
                y2 = y1 + this.helperProportions.height,
                l = item.left,
                r = l + item.width,
                t = item.top,
                b = t + item.height,
                dyClick = this.offset.click.top,
                dxClick = this.offset.click.left,
                isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t && ( y1 + dyClick ) < b ),
                isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l && ( x1 + dxClick ) < r ),
                isOverElement = isOverElementHeight && isOverElementWidth;

            if (this.options.tolerance === "pointer" ||
                this.options.forcePointerForContainers ||
                (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"])
            ) {
                return isOverElement;
            } else {

                return (l < x1 + (this.helperProportions.width / 2) && // Right Half
                x2 - (this.helperProportions.width / 2) < r && // Left Half
                t < y1 + (this.helperProportions.height / 2) && // Bottom Half
                y2 - (this.helperProportions.height / 2) < b ); // Top Half

            }
        },

        _intersectsWithPointer: function (item) {

            var isOverElementHeight = (this.options.axis === "x") || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
                isOverElementWidth = (this.options.axis === "y") || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
                isOverElement = isOverElementHeight && isOverElementWidth,
                verticalDirection = this._getDragVerticalDirection(),
                horizontalDirection = this._getDragHorizontalDirection();

            if (!isOverElement) {
                return false;
            }

            return this.floating ?
                ( ((horizontalDirection && horizontalDirection === "right") || verticalDirection === "down") ? 2 : 1 )
                : ( verticalDirection && (verticalDirection === "down" ? 2 : 1) );

        },

        _intersectsWithSides: function (item) {

            var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height / 2), item.height),
                isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width / 2), item.width),
                verticalDirection = this._getDragVerticalDirection(),
                horizontalDirection = this._getDragHorizontalDirection();

            if (this.floating && horizontalDirection) {
                return ((horizontalDirection === "right" && isOverRightHalf) || (horizontalDirection === "left" && !isOverRightHalf));
            } else {
                return verticalDirection && ((verticalDirection === "down" && isOverBottomHalf) || (verticalDirection === "up" && !isOverBottomHalf));
            }

        },

        _getDragVerticalDirection: function () {
            var delta = this.positionAbs.top - this.lastPositionAbs.top;
            return delta !== 0 && (delta > 0 ? "down" : "up");
        },

        _getDragHorizontalDirection: function () {
            var delta = this.positionAbs.left - this.lastPositionAbs.left;
            return delta !== 0 && (delta > 0 ? "right" : "left");
        },

        refresh: function (event) {
            this._refreshItems(event);
            this._setHandleClassName();
            this.refreshPositions();
            return this;
        },

        _connectWith: function () {
            var options = this.options;
            return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
        },

        _getItemsAsjQuery: function (connected) {

            var i, j, cur, inst,
                items = [],
                queries = [],
                connectWith = this._connectWith();

            if (connectWith && connected) {
                for (i = connectWith.length - 1; i >= 0; i--) {
                    cur = $(connectWith[i], this.document[0]);
                    for (j = cur.length - 1; j >= 0; j--) {
                        inst = $.data(cur[j], this.widgetFullName);
                        if (inst && inst !== this && !inst.options.disabled) {
                            queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
                        }
                    }
                }
            }

            queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

            function addItems() {
                items.push(this);
            }

            for (i = queries.length - 1; i >= 0; i--) {
                queries[i][0].each(addItems);
            }

            return $(items);

        },

        _removeCurrentsFromItems: function () {

            var list = this.currentItem.find(":data(" + this.widgetName + "-item)");

            this.items = $.grep(this.items, function (item) {
                for (var j = 0; j < list.length; j++) {
                    if (list[j] === item.item[0]) {
                        return false;
                    }
                }
                return true;
            });

        },

        _refreshItems: function (event) {

            this.items = [];
            this.containers = [this];

            var i, j, cur, inst, targetData, _queries, item, queriesLength,
                items = this.items,
                queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, {item: this.currentItem}) : $(this.options.items, this.element), this]],
                connectWith = this._connectWith();

            if (connectWith && this.ready) { //Shouldn't be run the first time through due to massive slow-down
                for (i = connectWith.length - 1; i >= 0; i--) {
                    cur = $(connectWith[i], this.document[0]);
                    for (j = cur.length - 1; j >= 0; j--) {
                        inst = $.data(cur[j], this.widgetFullName);
                        if (inst && inst !== this && !inst.options.disabled) {
                            queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, {item: this.currentItem}) : $(inst.options.items, inst.element), inst]);
                            this.containers.push(inst);
                        }
                    }
                }
            }

            for (i = queries.length - 1; i >= 0; i--) {
                targetData = queries[i][1];
                _queries = queries[i][0];

                for (j = 0, queriesLength = _queries.length; j < queriesLength; j++) {
                    item = $(_queries[j]);

                    item.data(this.widgetName + "-item", targetData); // Data for target checking (mouse manager)

                    items.push({
                        item: item,
                        instance: targetData,
                        width: 0, height: 0,
                        left: 0, top: 0
                    });
                }
            }

        },

        refreshPositions: function (fast) {

            // Determine whether items are being displayed horizontally
            this.floating = this.items.length ?
            this.options.axis === "x" || this._isFloating(this.items[0].item) :
                false;

            //This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset();
            }

            var i, item, t, p;

            for (i = this.items.length - 1; i >= 0; i--) {
                item = this.items[i];

                //We ignore calculating positions of all connected containers when we're not over them
                if (item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
                    continue;
                }

                t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

                if (!fast) {
                    item.width = t.outerWidth();
                    item.height = t.outerHeight();
                }

                p = t.offset();
                item.left = p.left;
                item.top = p.top;
            }

            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this);
            } else {
                for (i = this.containers.length - 1; i >= 0; i--) {
                    p = this.containers[i].element.offset();
                    this.containers[i].containerCache.left = p.left;
                    this.containers[i].containerCache.top = p.top;
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                }
            }

            return this;
        },

        _createPlaceholder: function (that) {
            that = that || this;
            var className,
                o = that.options;

            if (!o.placeholder || o.placeholder.constructor === String) {
                className = o.placeholder;
                o.placeholder = {
                    element: function () {

                        var nodeName = that.currentItem[0].nodeName.toLowerCase(),
                            element = $("<" + nodeName + ">", that.document[0])
                                .addClass(className || that.currentItem[0].className + " ui-sortable-placeholder")
                                .removeClass("ui-sortable-helper");

                        if (nodeName === "tbody") {
                            that._createTrPlaceholder(
                                that.currentItem.find("tr").eq(0),
                                $("<tr>", that.document[0]).appendTo(element)
                            );
                        } else if (nodeName === "tr") {
                            that._createTrPlaceholder(that.currentItem, element);
                        } else if (nodeName === "img") {
                            element.attr("src", that.currentItem.attr("src"));
                        }

                        if (!className) {
                            element.css("visibility", "hidden");
                        }

                        return element;
                    },
                    update: function (container, p) {

                        // 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
                        // 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
                        if (className && !o.forcePlaceholderSize) {
                            return;
                        }

                        //If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
                        if (!p.height()) {
                            p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop") || 0, 10) - parseInt(that.currentItem.css("paddingBottom") || 0, 10));
                        }
                        if (!p.width()) {
                            p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft") || 0, 10) - parseInt(that.currentItem.css("paddingRight") || 0, 10));
                        }
                    }
                };
            }

            //Create the placeholder
            that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));

            //Append it after the actual current item
            that.currentItem.after(that.placeholder);

            //Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
            o.placeholder.update(that, that.placeholder);

        },

        _createTrPlaceholder: function (sourceTr, targetTr) {
            var that = this;

            sourceTr.children().each(function () {
                $("<td>&#160;</td>", that.document[0])
                    .attr("colspan", $(this).attr("colspan") || 1)
                    .appendTo(targetTr);
            });
        },

        _contactContainers: function (event) {
            var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis,
                innermostContainer = null,
                innermostIndex = null;

            // get innermost container that intersects with item
            for (i = this.containers.length - 1; i >= 0; i--) {

                // never consider a container that's located within the item itself
                if ($.contains(this.currentItem[0], this.containers[i].element[0])) {
                    continue;
                }

                if (this._intersectsWith(this.containers[i].containerCache)) {

                    // if we've already found a container and it's more "inner" than this, then continue
                    if (innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
                        continue;
                    }

                    innermostContainer = this.containers[i];
                    innermostIndex = i;

                } else {
                    // container doesn't intersect. trigger "out" event if necessary
                    if (this.containers[i].containerCache.over) {
                        this.containers[i]._trigger("out", event, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }

            }

            // if no intersecting containers found, return
            if (!innermostContainer) {
                return;
            }

            // move the item into the container if it's not there already
            if (this.containers.length === 1) {
                if (!this.containers[innermostIndex].containerCache.over) {
                    this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
                    this.containers[innermostIndex].containerCache.over = 1;
                }
            } else {

                //When entering a new container, we will find the item with the least distance and append our item near it
                dist = 10000;
                itemWithLeastDistance = null;
                floating = innermostContainer.floating || this._isFloating(this.currentItem);
                posProperty = floating ? "left" : "top";
                sizeProperty = floating ? "width" : "height";
                axis = floating ? "clientX" : "clientY";

                for (j = this.items.length - 1; j >= 0; j--) {
                    if (!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
                        continue;
                    }
                    if (this.items[j].item[0] === this.currentItem[0]) {
                        continue;
                    }

                    cur = this.items[j].item.offset()[posProperty];
                    nearBottom = false;
                    if (event[axis] - cur > this.items[j][sizeProperty] / 2) {
                        nearBottom = true;
                    }

                    if (Math.abs(event[axis] - cur) < dist) {
                        dist = Math.abs(event[axis] - cur);
                        itemWithLeastDistance = this.items[j];
                        this.direction = nearBottom ? "up" : "down";
                    }
                }

                //Check if dropOnEmpty is enabled
                if (!itemWithLeastDistance && !this.options.dropOnEmpty) {
                    return;
                }

                if (this.currentContainer === this.containers[innermostIndex]) {
                    if (!this.currentContainer.containerCache.over) {
                        this.containers[innermostIndex]._trigger("over", event, this._uiHash());
                        this.currentContainer.containerCache.over = 1;
                    }
                    return;
                }

                itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
                this._trigger("change", event, this._uiHash());
                this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
                this.currentContainer = this.containers[innermostIndex];

                //Update the placeholder
                this.options.placeholder.update(this.currentContainer, this.placeholder);

                this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
                this.containers[innermostIndex].containerCache.over = 1;
            }


        },

        _createHelper: function (event) {

            var o = this.options,
                helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper === "clone" ? this.currentItem.clone() : this.currentItem);

            //Add the helper to the DOM if that didn't happen already
            if (!helper.parents("body").length) {
                $(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
            }

            if (helper[0] === this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                };
            }

            if (!helper[0].style.width || o.forceHelperSize) {
                helper.width(this.currentItem.width());
            }
            if (!helper[0].style.height || o.forceHelperSize) {
                helper.height(this.currentItem.height());
            }

            return helper;

        },

        _adjustOffsetFromHelper: function (obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = {left: +obj[0], top: +obj[1] || 0};
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _getParentOffset: function () {


            //Get the offsetParent and cache its position
            this.offsetParent = this.helper.offsetParent();
            var po = this.offsetParent.offset();

            // This is a special case where we need to modify a offset calculated on start, since the following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
            //    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            // This needs to be actually done for all browsers, since pageX/pageY includes this information
            // with an ugly IE fix
            if (this.offsetParent[0] === this.document[0].body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
                po = {top: 0, left: 0};
            }

            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };

        },

        _getRelativeOffset: function () {

            if (this.cssPosition === "relative") {
                var p = this.currentItem.position();
                return {
                    top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            } else {
                return {top: 0, left: 0};
            }

        },

        _cacheMargins: function () {
            this.margins = {
                left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
                top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
            };
        },

        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function () {

            var ce, co, over,
                o = this.options;
            if (o.containment === "parent") {
                o.containment = this.helper[0].parentNode;
            }
            if (o.containment === "document" || o.containment === "window") {
                this.containment = [
                    0 - this.offset.relative.left - this.offset.parent.left,
                    0 - this.offset.relative.top - this.offset.parent.top,
                    o.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left,
                    (o.containment === "document" ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
                ];
            }

            if (!(/^(document|window|parent)$/).test(o.containment)) {
                ce = $(o.containment)[0];
                co = $(o.containment).offset();
                over = ($(ce).css("overflow") !== "hidden");

                this.containment = [
                    co.left + (parseInt($(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($(ce).css("paddingLeft"), 10) || 0) - this.margins.left,
                    co.top + (parseInt($(ce).css("borderTopWidth"), 10) || 0) + (parseInt($(ce).css("paddingTop"), 10) || 0) - this.margins.top,
                    co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left,
                    co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"), 10) || 0) - (parseInt($(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top
                ];
            }

        },

        _convertPositionTo: function (d, pos) {

            if (!pos) {
                pos = this.position;
            }
            var mod = d === "absolute" ? 1 : -1,
                scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

            return {
                top: (
                    pos.top +																// The absolute mouse position
                    this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.top * mod -											// The offsetParent's offset without borders (offset + border)
                    ( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
                ),
                left: (
                    pos.left +																// The absolute mouse position
                    this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.left * mod -										// The offsetParent's offset without borders (offset + border)
                    ( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
                )
            };

        },

        _generatePosition: function (event) {

            var top, left,
                o = this.options,
                pageX = event.pageX,
                pageY = event.pageY,
                scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

            // This is another very weird special case that only happens for relative elements:
            // 1. If the css position is relative
            // 2. and the scroll parent is the document or similar to the offset parent
            // we have to refresh the relative offset during the scroll so there are no jumps
            if (this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset();
            }

            /*
             * - Position constraining -
             * Constrain the position to a mix of grid, containment.
             */

            if (this.originalPosition) { //If we are not dragging yet, we won't check for options

                if (this.containment) {
                    if (event.pageX - this.offset.click.left < this.containment[0]) {
                        pageX = this.containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < this.containment[1]) {
                        pageY = this.containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > this.containment[2]) {
                        pageX = this.containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > this.containment[3]) {
                        pageY = this.containment[3] + this.offset.click.top;
                    }
                }

                if (o.grid) {
                    top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
                    pageY = this.containment ? ( (top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3]) ? top : ((top - this.offset.click.top >= this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

                    left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
                    pageX = this.containment ? ( (left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2]) ? left : ((left - this.offset.click.left >= this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
                }

            }

            return {
                top: (
                    pageY -																// The absolute mouse position
                    this.offset.click.top -													// Click offset (relative to the element)
                    this.offset.relative.top -											// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
                    ( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
                ),
                left: (
                    pageX -																// The absolute mouse position
                    this.offset.click.left -												// Click offset (relative to the element)
                    this.offset.relative.left -											// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
                    ( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
                )
            };

        },

        _rearrange: function (event, i, a, hardRefresh) {

            a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? i.item[0] : i.item[0].nextSibling));

            //Various things done here to improve the performance:
            // 1. we create a setTimeout, that calls refreshPositions
            // 2. on the instance, we have a counter variable, that get's higher after every append
            // 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
            // 4. this lets only the last addition to the timeout stack through
            this.counter = this.counter ? ++this.counter : 1;
            var counter = this.counter;

            this._delay(function () {
                if (counter === this.counter) {
                    this.refreshPositions(!hardRefresh); //Precompute after each DOM insertion, NOT on mousemove
                }
            });

        },

        _clear: function (event, noPropagation) {

            this.reverting = false;
            // We delay all events that have to be triggered to after the point where the placeholder has been removed and
            // everything else normalized again
            var i,
                delayedTriggers = [];

            // We first have to update the dom position of the actual currentItem
            // Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem);
            }
            this._noFinalSort = null;

            if (this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) {
                    if (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
                        this._storedCSS[i] = "";
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else {
                this.currentItem.show();
            }

            if (this.fromOutside && !noPropagation) {
                delayedTriggers.push(function (event) {
                    this._trigger("receive", event, this._uiHash(this.fromOutside));
                });
            }
            if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
                delayedTriggers.push(function (event) {
                    this._trigger("update", event, this._uiHash());
                }); //Trigger update callback if the DOM position has changed
            }

            // Check if the items Container has Changed and trigger appropriate
            // events.
            if (this !== this.currentContainer) {
                if (!noPropagation) {
                    delayedTriggers.push(function (event) {
                        this._trigger("remove", event, this._uiHash());
                    });
                    delayedTriggers.push((function (c) {
                        return function (event) {
                            c._trigger("receive", event, this._uiHash(this));
                        };
                    }).call(this, this.currentContainer));
                    delayedTriggers.push((function (c) {
                        return function (event) {
                            c._trigger("update", event, this._uiHash(this));
                        };
                    }).call(this, this.currentContainer));
                }
            }


            //Post events to containers
            function delayEvent(type, instance, container) {
                return function (event) {
                    container._trigger(type, event, instance._uiHash(instance));
                };
            }

            for (i = this.containers.length - 1; i >= 0; i--) {
                if (!noPropagation) {
                    delayedTriggers.push(delayEvent("deactivate", this, this.containers[i]));
                }
                if (this.containers[i].containerCache.over) {
                    delayedTriggers.push(delayEvent("out", this, this.containers[i]));
                    this.containers[i].containerCache.over = 0;
                }
            }

            //Do what was originally in plugins
            if (this.storedCursor) {
                this.document.find("body").css("cursor", this.storedCursor);
                this.storedStylesheet.remove();
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity);
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
            }

            this.dragging = false;

            if (!noPropagation) {
                this._trigger("beforeStop", event, this._uiHash());
            }

            //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

            if (!this.cancelHelperRemoval) {
                if (this.helper[0] !== this.currentItem[0]) {
                    this.helper.remove();
                }
                this.helper = null;
            }

            if (!noPropagation) {
                for (i = 0; i < delayedTriggers.length; i++) {
                    delayedTriggers[i].call(this, event);
                } //Trigger all delayed events
                this._trigger("stop", event, this._uiHash());
            }

            this.fromOutside = false;
            return !this.cancelHelperRemoval;

        },

        _trigger: function () {
            if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel();
            }
        },

        _uiHash: function (_inst) {
            var inst = _inst || this;
            return {
                helper: inst.helper,
                placeholder: inst.placeholder || $([]),
                position: inst.position,
                originalPosition: inst.originalPosition,
                offset: inst.positionAbs,
                item: inst.currentItem,
                sender: _inst ? _inst.element : null
            };
        }

    });


    /*!
     * jQuery UI Slider 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/slider/
     */


    var slider = $.widget("ui.slider", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",

        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null,

            // callbacks
            change: null,
            slide: null,
            start: null,
            stop: null
        },

        // number of pages in a slider
        // (how many times can you page up/down to go through the whole range)
        numPages: 5,

        _create: function () {
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();

            this.element
                .addClass("ui-slider" +
                    " ui-slider-" + this.orientation +
                    " ui-widget" +
                    " ui-widget-content" +
                    " ui-corner-all");

            this._refresh();
            this._setOption("disabled", this.options.disabled);

            this._animateOff = false;
        },

        _refresh: function () {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue();
        },

        _createHandles: function () {
            var i, handleCount,
                options = this.options,
                existingHandles = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                handle = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                handles = [];

            handleCount = ( options.values && options.values.length ) || 1;

            if (existingHandles.length > handleCount) {
                existingHandles.slice(handleCount).remove();
                existingHandles = existingHandles.slice(0, handleCount);
            }

            for (i = existingHandles.length; i < handleCount; i++) {
                handles.push(handle);
            }

            this.handles = existingHandles.add($(handles.join("")).appendTo(this.element));

            this.handle = this.handles.eq(0);

            this.handles.each(function (i) {
                $(this).data("ui-slider-handle-index", i);
            });
        },

        _createRange: function () {
            var options = this.options,
                classes = "";

            if (options.range) {
                if (options.range === true) {
                    if (!options.values) {
                        options.values = [this._valueMin(), this._valueMin()];
                    } else if (options.values.length && options.values.length !== 2) {
                        options.values = [options.values[0], options.values[0]];
                    } else if ($.isArray(options.values)) {
                        options.values = options.values.slice(0);
                    }
                }

                if (!this.range || !this.range.length) {
                    this.range = $("<div></div>")
                        .appendTo(this.element);

                    classes = "ui-slider-range" +
                            // note: this isn't the most fittingly semantic framework class for this element,
                            // but worked best visually with a variety of themes
                        " ui-widget-header ui-corner-all";
                } else {
                    this.range.removeClass("ui-slider-range-min ui-slider-range-max")
                        // Handle range switching from true to min/max
                        .css({
                            "left": "",
                            "bottom": ""
                        });
                }

                this.range.addClass(classes +
                    ( ( options.range === "min" || options.range === "max" ) ? " ui-slider-range-" + options.range : "" ));
            } else {
                if (this.range) {
                    this.range.remove();
                }
                this.range = null;
            }
        },

        _setupEvents: function () {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles);
        },

        _destroy: function () {
            this.handles.remove();
            if (this.range) {
                this.range.remove();
            }

            this.element
                .removeClass("ui-slider" +
                    " ui-slider-horizontal" +
                    " ui-slider-vertical" +
                    " ui-widget" +
                    " ui-widget-content" +
                    " ui-corner-all");

            this._mouseDestroy();
        },

        _mouseCapture: function (event) {
            var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
                that = this,
                o = this.options;

            if (o.disabled) {
                return false;
            }

            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();

            position = {x: event.pageX, y: event.pageY};
            normValue = this._normValueFromMouse(position);
            distance = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function (i) {
                var thisDistance = Math.abs(normValue - that.values(i));
                if (( distance > thisDistance ) ||
                    ( distance === thisDistance &&
                    (i === that._lastChangedValue || that.values(i) === o.min ))) {
                    distance = thisDistance;
                    closestHandle = $(this);
                    index = i;
                }
            });

            allowed = this._start(event, index);
            if (allowed === false) {
                return false;
            }
            this._mouseSliding = true;

            this._handleIndex = index;

            closestHandle
                .addClass("ui-state-active")
                .focus();

            offset = closestHandle.offset();
            mouseOverHandle = !$(event.target).parents().addBack().is(".ui-slider-handle");
            this._clickOffset = mouseOverHandle ? {left: 0, top: 0} : {
                left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
                top: event.pageY - offset.top -
                ( closestHandle.height() / 2 ) -
                ( parseInt(closestHandle.css("borderTopWidth"), 10) || 0 ) -
                ( parseInt(closestHandle.css("borderBottomWidth"), 10) || 0) +
                ( parseInt(closestHandle.css("marginTop"), 10) || 0)
            };

            if (!this.handles.hasClass("ui-state-hover")) {
                this._slide(event, index, normValue);
            }
            this._animateOff = true;
            return true;
        },

        _mouseStart: function () {
            return true;
        },

        _mouseDrag: function (event) {
            var position = {x: event.pageX, y: event.pageY},
                normValue = this._normValueFromMouse(position);

            this._slide(event, this._handleIndex, normValue);

            return false;
        },

        _mouseStop: function (event) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;

            this._stop(event, this._handleIndex);
            this._change(event, this._handleIndex);

            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;

            return false;
        },

        _detectOrientation: function () {
            this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
        },

        _normValueFromMouse: function (position) {
            var pixelTotal,
                pixelMouse,
                percentMouse,
                valueTotal,
                valueMouse;

            if (this.orientation === "horizontal") {
                pixelTotal = this.elementSize.width;
                pixelMouse = position.x - this.elementOffset.left - ( this._clickOffset ? this._clickOffset.left : 0 );
            } else {
                pixelTotal = this.elementSize.height;
                pixelMouse = position.y - this.elementOffset.top - ( this._clickOffset ? this._clickOffset.top : 0 );
            }

            percentMouse = ( pixelMouse / pixelTotal );
            if (percentMouse > 1) {
                percentMouse = 1;
            }
            if (percentMouse < 0) {
                percentMouse = 0;
            }
            if (this.orientation === "vertical") {
                percentMouse = 1 - percentMouse;
            }

            valueTotal = this._valueMax() - this._valueMin();
            valueMouse = this._valueMin() + percentMouse * valueTotal;

            return this._trimAlignValue(valueMouse);
        },

        _start: function (event, index) {
            var uiHash = {
                handle: this.handles[index],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                uiHash.value = this.values(index);
                uiHash.values = this.values();
            }
            return this._trigger("start", event, uiHash);
        },

        _slide: function (event, index, newVal) {
            var otherVal,
                newValues,
                allowed;

            if (this.options.values && this.options.values.length) {
                otherVal = this.values(index ? 0 : 1);

                if (( this.options.values.length === 2 && this.options.range === true ) &&
                    ( ( index === 0 && newVal > otherVal) || ( index === 1 && newVal < otherVal ) )
                ) {
                    newVal = otherVal;
                }

                if (newVal !== this.values(index)) {
                    newValues = this.values();
                    newValues[index] = newVal;
                    // A slide can be canceled by returning false from the slide callback
                    allowed = this._trigger("slide", event, {
                        handle: this.handles[index],
                        value: newVal,
                        values: newValues
                    });
                    otherVal = this.values(index ? 0 : 1);
                    if (allowed !== false) {
                        this.values(index, newVal);
                    }
                }
            } else {
                if (newVal !== this.value()) {
                    // A slide can be canceled by returning false from the slide callback
                    allowed = this._trigger("slide", event, {
                        handle: this.handles[index],
                        value: newVal
                    });
                    if (allowed !== false) {
                        this.value(newVal);
                    }
                }
            }
        },

        _stop: function (event, index) {
            var uiHash = {
                handle: this.handles[index],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                uiHash.value = this.values(index);
                uiHash.values = this.values();
            }

            this._trigger("stop", event, uiHash);
        },

        _change: function (event, index) {
            if (!this._keySliding && !this._mouseSliding) {
                var uiHash = {
                    handle: this.handles[index],
                    value: this.value()
                };
                if (this.options.values && this.options.values.length) {
                    uiHash.value = this.values(index);
                    uiHash.values = this.values();
                }

                //store the last changed value index for reference when handles overlap
                this._lastChangedValue = index;

                this._trigger("change", event, uiHash);
            }
        },

        value: function (newValue) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(newValue);
                this._refreshValue();
                this._change(null, 0);
                return;
            }

            return this._value();
        },

        values: function (index, newValue) {
            var vals,
                newValues,
                i;

            if (arguments.length > 1) {
                this.options.values[index] = this._trimAlignValue(newValue);
                this._refreshValue();
                this._change(null, index);
                return;
            }

            if (arguments.length) {
                if ($.isArray(arguments[0])) {
                    vals = this.options.values;
                    newValues = arguments[0];
                    for (i = 0; i < vals.length; i += 1) {
                        vals[i] = this._trimAlignValue(newValues[i]);
                        this._change(null, i);
                    }
                    this._refreshValue();
                } else {
                    if (this.options.values && this.options.values.length) {
                        return this._values(index);
                    } else {
                        return this.value();
                    }
                }
            } else {
                return this._values();
            }
        },

        _setOption: function (key, value) {
            var i,
                valsLength = 0;

            if (key === "range" && this.options.range === true) {
                if (value === "min") {
                    this.options.value = this._values(0);
                    this.options.values = null;
                } else if (value === "max") {
                    this.options.value = this._values(this.options.values.length - 1);
                    this.options.values = null;
                }
            }

            if ($.isArray(this.options.values)) {
                valsLength = this.options.values.length;
            }

            if (key === "disabled") {
                this.element.toggleClass("ui-state-disabled", !!value);
            }

            this._super(key, value);

            switch (key) {
                case "orientation":
                    this._detectOrientation();
                    this.element
                        .removeClass("ui-slider-horizontal ui-slider-vertical")
                        .addClass("ui-slider-" + this.orientation);
                    this._refreshValue();

                    // Reset positioning from previous orientation
                    this.handles.css(value === "horizontal" ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();
                    for (i = 0; i < valsLength; i += 1) {
                        this._change(null, i);
                    }
                    this._animateOff = false;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = true;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = false;
                    break;
                case "range":
                    this._animateOff = true;
                    this._refresh();
                    this._animateOff = false;
                    break;
            }
        },

        //internal value getter
        // _value() returns value trimmed by min and max, aligned by step
        _value: function () {
            var val = this.options.value;
            val = this._trimAlignValue(val);

            return val;
        },

        //internal values getter
        // _values() returns array of values trimmed by min and max, aligned by step
        // _values( index ) returns single value trimmed by min and max, aligned by step
        _values: function (index) {
            var val,
                vals,
                i;

            if (arguments.length) {
                val = this.options.values[index];
                val = this._trimAlignValue(val);

                return val;
            } else if (this.options.values && this.options.values.length) {
                // .slice() creates a copy of the array
                // this copy gets trimmed by min and max and then returned
                vals = this.options.values.slice();
                for (i = 0; i < vals.length; i += 1) {
                    vals[i] = this._trimAlignValue(vals[i]);
                }

                return vals;
            } else {
                return [];
            }
        },

        // returns the step-aligned value that val is closest to, between (inclusive) min and max
        _trimAlignValue: function (val) {
            if (val <= this._valueMin()) {
                return this._valueMin();
            }
            if (val >= this._valueMax()) {
                return this._valueMax();
            }
            var step = ( this.options.step > 0 ) ? this.options.step : 1,
                valModStep = (val - this._valueMin()) % step,
                alignValue = val - valModStep;

            if (Math.abs(valModStep) * 2 >= step) {
                alignValue += ( valModStep > 0 ) ? step : ( -step );
            }

            // Since JavaScript has problems with large floats, round
            // the final value to 5 digits after the decimal point (see #4124)
            return parseFloat(alignValue.toFixed(5));
        },

        _calculateNewMax: function () {
            var max = this.options.max,
                min = this._valueMin(),
                step = this.options.step,
                aboveMin = Math.floor(( +( max - min ).toFixed(this._precision()) ) / step) * step;
            max = aboveMin + min;
            this.max = parseFloat(max.toFixed(this._precision()));
        },

        _precision: function () {
            var precision = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                precision = Math.max(precision, this._precisionOf(this.options.min));
            }
            return precision;
        },

        _precisionOf: function (num) {
            var str = num.toString(),
                decimal = str.indexOf(".");
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },

        _valueMin: function () {
            return this.options.min;
        },

        _valueMax: function () {
            return this.max;
        },

        _refreshValue: function () {
            var lastValPercent, valPercent, value, valueMin, valueMax,
                oRange = this.options.range,
                o = this.options,
                that = this,
                animate = ( !this._animateOff ) ? o.animate : false,
                _set = {};

            if (this.options.values && this.options.values.length) {
                this.handles.each(function (i) {
                    valPercent = ( that.values(i) - that._valueMin() ) / ( that._valueMax() - that._valueMin() ) * 100;
                    _set[that.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%";
                    $(this).stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);
                    if (that.options.range === true) {
                        if (that.orientation === "horizontal") {
                            if (i === 0) {
                                that.range.stop(1, 1)[animate ? "animate" : "css"]({left: valPercent + "%"}, o.animate);
                            }
                            if (i === 1) {
                                that.range[animate ? "animate" : "css"]({width: ( valPercent - lastValPercent ) + "%"}, {
                                    queue: false,
                                    duration: o.animate
                                });
                            }
                        } else {
                            if (i === 0) {
                                that.range.stop(1, 1)[animate ? "animate" : "css"]({bottom: ( valPercent ) + "%"}, o.animate);
                            }
                            if (i === 1) {
                                that.range[animate ? "animate" : "css"]({height: ( valPercent - lastValPercent ) + "%"}, {
                                    queue: false,
                                    duration: o.animate
                                });
                            }
                        }
                    }
                    lastValPercent = valPercent;
                });
            } else {
                value = this.value();
                valueMin = this._valueMin();
                valueMax = this._valueMax();
                valPercent = ( valueMax !== valueMin ) ?
                ( value - valueMin ) / ( valueMax - valueMin ) * 100 :
                    0;
                _set[this.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%";
                this.handle.stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);

                if (oRange === "min" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[animate ? "animate" : "css"]({width: valPercent + "%"}, o.animate);
                }
                if (oRange === "max" && this.orientation === "horizontal") {
                    this.range[animate ? "animate" : "css"]({width: ( 100 - valPercent ) + "%"}, {
                        queue: false,
                        duration: o.animate
                    });
                }
                if (oRange === "min" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[animate ? "animate" : "css"]({height: valPercent + "%"}, o.animate);
                }
                if (oRange === "max" && this.orientation === "vertical") {
                    this.range[animate ? "animate" : "css"]({height: ( 100 - valPercent ) + "%"}, {
                        queue: false,
                        duration: o.animate
                    });
                }
            }
        },

        _handleEvents: {
            keydown: function (event) {
                var allowed, curVal, newVal, step,
                    index = $(event.target).data("ui-slider-handle-index");

                switch (event.keyCode) {
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_UP:
                    case $.ui.keyCode.PAGE_DOWN:
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        event.preventDefault();
                        if (!this._keySliding) {
                            this._keySliding = true;
                            $(event.target).addClass("ui-state-active");
                            allowed = this._start(event, index);
                            if (allowed === false) {
                                return;
                            }
                        }
                        break;
                }

                step = this.options.step;
                if (this.options.values && this.options.values.length) {
                    curVal = newVal = this.values(index);
                } else {
                    curVal = newVal = this.value();
                }

                switch (event.keyCode) {
                    case $.ui.keyCode.HOME:
                        newVal = this._valueMin();
                        break;
                    case $.ui.keyCode.END:
                        newVal = this._valueMax();
                        break;
                    case $.ui.keyCode.PAGE_UP:
                        newVal = this._trimAlignValue(
                            curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
                        );
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                        newVal = this._trimAlignValue(
                            curVal - ( (this._valueMax() - this._valueMin()) / this.numPages ));
                        break;
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                        if (curVal === this._valueMax()) {
                            return;
                        }
                        newVal = this._trimAlignValue(curVal + step);
                        break;
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        if (curVal === this._valueMin()) {
                            return;
                        }
                        newVal = this._trimAlignValue(curVal - step);
                        break;
                }

                this._slide(event, index, newVal);
            },
            keyup: function (event) {
                var index = $(event.target).data("ui-slider-handle-index");

                if (this._keySliding) {
                    this._keySliding = false;
                    this._stop(event, index);
                    this._change(event, index);
                    $(event.target).removeClass("ui-state-active");
                }
            }
        }
    });


}));
/* perfect-scrollbar v0.6.8 */
!function t(e, n, r) {
    function o(l, s) {
        if (!n[l]) {
            if (!e[l]) {
                var a = "function" == typeof require && require;
                if (!s && a)return a(l, !0);
                if (i)return i(l, !0);
                var c = new Error("Cannot find module '" + l + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = n[l] = {exports: {}};
            e[l][0].call(u.exports, function (t) {
                var n = e[l][1][t];
                return o(n ? n : t)
            }, u, u.exports, t, e, n, r)
        }
        return n[l].exports
    }

    for (var i = "function" == typeof require && require, l = 0; l < r.length; l++)o(r[l]);
    return o
}({
    1: [function (t, e, n) {
        "use strict";
        function r(t) {
            t.fn.perfectScrollbar = function (e) {
                return this.each(function () {
                    if ("object" == typeof e || "undefined" == typeof e) {
                        var n = e;
                        i.get(this) || o.initialize(this, n)
                    } else {
                        var r = e;
                        "update" === r ? o.update(this) : "destroy" === r && o.destroy(this)
                    }
                    return t(this)
                })
            }
        }

        var o = t("../main"), i = t("../plugin/instances");
        if ("function" == typeof define && define.amd)define('perfectScrollbar', ["jquery"], r); else {
            var l = window.jQuery ? window.jQuery : window.$;
            "undefined" != typeof l && r(l)
        }
        e.exports = r
    }, {"../main": 7, "../plugin/instances": 18}],
    2: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            var n = t.className.split(" ");
            n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")
        }

        function o(t, e) {
            var n = t.className.split(" "), r = n.indexOf(e);
            r >= 0 && n.splice(r, 1), t.className = n.join(" ")
        }

        n.add = function (t, e) {
            t.classList ? t.classList.add(e) : r(t, e)
        }, n.remove = function (t, e) {
            t.classList ? t.classList.remove(e) : o(t, e)
        }, n.list = function (t) {
            return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
        }
    }, {}],
    3: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            return window.getComputedStyle(t)[e]
        }

        function o(t, e, n) {
            return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
        }

        function i(t, e) {
            for (var n in e) {
                var r = e[n];
                "number" == typeof r && (r = r.toString() + "px"), t.style[n] = r
            }
            return t
        }

        var l = {};
        l.e = function (t, e) {
            var n = document.createElement(t);
            return n.className = e, n
        }, l.appendTo = function (t, e) {
            return e.appendChild(t), t
        }, l.css = function (t, e, n) {
            return "object" == typeof e ? i(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n)
        }, l.matches = function (t, e) {
            return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
        }, l.remove = function (t) {
            "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
        }, l.queryChildren = function (t, e) {
            return Array.prototype.filter.call(t.childNodes, function (t) {
                return l.matches(t, e)
            })
        }, e.exports = l
    }, {}],
    4: [function (t, e, n) {
        "use strict";
        var r = function (t) {
            this.element = t, this.events = {}
        };
        r.prototype.bind = function (t, e) {
            "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
        }, r.prototype.unbind = function (t, e) {
            var n = "undefined" != typeof e;
            this.events[t] = this.events[t].filter(function (r) {
                return n && r !== e ? !0 : (this.element.removeEventListener(t, r, !1), !1)
            }, this)
        }, r.prototype.unbindAll = function () {
            for (var t in this.events)this.unbind(t)
        };
        var o = function () {
            this.eventElements = []
        };
        o.prototype.eventElement = function (t) {
            var e = this.eventElements.filter(function (e) {
                return e.element === t
            })[0];
            return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e
        }, o.prototype.bind = function (t, e, n) {
            this.eventElement(t).bind(e, n)
        }, o.prototype.unbind = function (t, e, n) {
            this.eventElement(t).unbind(e, n)
        }, o.prototype.unbindAll = function () {
            for (var t = 0; t < this.eventElements.length; t++)this.eventElements[t].unbindAll()
        }, o.prototype.once = function (t, e, n) {
            var r = this.eventElement(t), o = function (t) {
                r.unbind(e, o), n(t)
            };
            r.bind(e, o)
        }, e.exports = o
    }, {}],
    5: [function (t, e, n) {
        "use strict";
        e.exports = function () {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            return function () {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
        }()
    }, {}],
    6: [function (t, e, n) {
        "use strict";
        var r = t("./class"), o = t("./dom");
        n.toInt = function (t) {
            return parseInt(t, 10) || 0
        }, n.clone = function (t) {
            if (null === t)return null;
            if ("object" == typeof t) {
                var e = {};
                for (var n in t)e[n] = this.clone(t[n]);
                return e
            }
            return t
        }, n.extend = function (t, e) {
            var n = this.clone(t);
            for (var r in e)n[r] = this.clone(e[r]);
            return n
        }, n.isEditable = function (t) {
            return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
        }, n.removePsClasses = function (t) {
            for (var e = r.list(t), n = 0; n < e.length; n++) {
                var o = e[n];
                0 === o.indexOf("ps-") && r.remove(t, o)
            }
        }, n.outerWidth = function (t) {
            return this.toInt(o.css(t, "width")) + this.toInt(o.css(t, "paddingLeft")) + this.toInt(o.css(t, "paddingRight")) + this.toInt(o.css(t, "borderLeftWidth")) + this.toInt(o.css(t, "borderRightWidth"))
        }, n.startScrolling = function (t, e) {
            r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y"))
        }, n.stopScrolling = function (t, e) {
            r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y"))
        }, n.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        }
    }, {"./class": 2, "./dom": 3}],
    7: [function (t, e, n) {
        "use strict";
        var r = t("./plugin/destroy"), o = t("./plugin/initialize"), i = t("./plugin/update");
        e.exports = {initialize: o, update: i, destroy: r}
    }, {"./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21}],
    8: [function (t, e, n) {
        "use strict";
        e.exports = {
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            stopPropagationOnClick: !0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            useBothWheelAxes: !1,
            useKeyboard: !0,
            useSelectionScroll: !1,
            wheelPropagation: !1,
            wheelSpeed: 1
        }
    }, {}],
    9: [function (t, e, n) {
        "use strict";
        var r = t("../lib/dom"), o = t("../lib/helper"), i = t("./instances");
        e.exports = function (t) {
            var e = i.get(t);
            e && (e.event.unbindAll(), r.remove(e.scrollbarX), r.remove(e.scrollbarY), r.remove(e.scrollbarXRail), r.remove(e.scrollbarYRail), o.removePsClasses(t), i.remove(t))
        }
    }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18}],
    10: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            function n(t) {
                return t.getBoundingClientRect()
            }

            var r = window.Event.prototype.stopPropagation.bind;
            e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function (r) {
                var i = o.toInt(e.scrollbarYHeight / 2), a = e.railYRatio * (r.pageY - window.pageYOffset - n(e.scrollbarYRail).top - i), c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight), u = a / c;
                0 > u ? u = 0 : u > 1 && (u = 1), s(t, "top", (e.contentHeight - e.containerHeight) * u), l(t), r.stopPropagation()
            }), e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function (r) {
                var i = o.toInt(e.scrollbarXWidth / 2), a = e.railXRatio * (r.pageX - window.pageXOffset - n(e.scrollbarXRail).left - i), c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth), u = a / c;
                0 > u ? u = 0 : u > 1 && (u = 1), s(t, "left", (e.contentWidth - e.containerWidth) * u - e.negativeScrollAdjustment), l(t), r.stopPropagation()
            })
        }

        var o = t("../../lib/helper"), i = t("../instances"), l = t("../update-geometry"), s = t("../update-scroll");
        e.exports = function (t) {
            var e = i.get(t);
            r(t, e)
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    11: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            function n(n) {
                var o = r + n * e.railXRatio, i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                0 > o ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o;
                var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
                c(t, "left", s)
            }

            var r = null, o = null, s = function (e) {
                n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault()
            }, u = function () {
                l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s)
            };
            e.event.bind(e.scrollbarX, "mousedown", function (n) {
                o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
            })
        }

        function o(t, e) {
            function n(n) {
                var o = r + n * e.railYRatio, i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                0 > o ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o;
                var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
                c(t, "top", s)
            }

            var r = null, o = null, s = function (e) {
                n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault()
            }, u = function () {
                l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s)
            };
            e.event.bind(e.scrollbarY, "mousedown", function (n) {
                o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
            })
        }

        var i = t("../../lib/dom"), l = t("../../lib/helper"), s = t("../instances"), a = t("../update-geometry"), c = t("../update-scroll");
        e.exports = function (t) {
            var e = s.get(t);
            r(t, e), o(t, e)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            function n(n, r) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive)return !1;
                    if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r)return !e.settings.wheelPropagation
                }
                var i = t.scrollLeft;
                if (0 === r) {
                    if (!e.scrollbarXActive)return !1;
                    if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0)return !e.settings.wheelPropagation
                }
                return !0
            }

            var r = !1;
            e.event.bind(t, "mouseenter", function () {
                r = !0
            }), e.event.bind(t, "mouseleave", function () {
                r = !1
            });
            var i = !1;
            e.event.bind(e.ownerDocument, "keydown", function (a) {
                if ((!a.isDefaultPrevented || !a.isDefaultPrevented()) && r) {
                    var c = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                    if (c) {
                        for (; c.shadowRoot;)c = c.shadowRoot.activeElement;
                        if (o.isEditable(c))return
                    }
                    var u = 0, d = 0;
                    switch (a.which) {
                        case 37:
                            u = -30;
                            break;
                        case 38:
                            d = 30;
                            break;
                        case 39:
                            u = 30;
                            break;
                        case 40:
                            d = -30;
                            break;
                        case 33:
                            d = 90;
                            break;
                        case 32:
                            d = a.shiftKey ? 90 : -90;
                            break;
                        case 34:
                            d = -90;
                            break;
                        case 35:
                            d = a.ctrlKey ? -e.contentHeight : -e.containerHeight;
                            break;
                        case 36:
                            d = a.ctrlKey ? t.scrollTop : e.containerHeight;
                            break;
                        default:
                            return
                    }
                    s(t, "top", t.scrollTop - d), s(t, "left", t.scrollLeft + u), l(t), i = n(u, d), i && a.preventDefault()
                }
            })
        }

        var o = t("../../lib/helper"), i = t("../instances"), l = t("../update-geometry"), s = t("../update-scroll");
        e.exports = function (t) {
            var e = i.get(t);
            r(t, e)
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    13: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            function n(n, r) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive)return !1;
                    if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r)return !e.settings.wheelPropagation
                }
                var i = t.scrollLeft;
                if (0 === r) {
                    if (!e.scrollbarXActive)return !1;
                    if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0)return !e.settings.wheelPropagation
                }
                return !0
            }

            function r(t) {
                var e = t.deltaX, n = -1 * t.deltaY;
                return ("undefined" == typeof e || "undefined" == typeof n) && (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), [e, n]
            }

            function o(e, n) {
                var r = t.querySelector("textarea:hover");
                if (r) {
                    var o = r.scrollHeight - r.clientHeight;
                    if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && 0 > n))return !0;
                    var i = r.scrollLeft - r.clientWidth;
                    if (i > 0 && !(0 === r.scrollLeft && 0 > e || r.scrollLeft === i && e > 0))return !0
                }
                return !1
            }

            function s(s) {
                var c = r(s), u = c[0], d = c[1];
                o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? l(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : l(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : l(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (l(t, "top", t.scrollTop - d * e.settings.wheelSpeed), l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), i(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault()))
            }

            var a = !1;
            "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s)
        }

        var o = t("../instances"), i = t("../update-geometry"), l = t("../update-scroll");
        e.exports = function (t) {
            var e = o.get(t);
            r(t, e)
        }
    }, {"../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    14: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            e.event.bind(t, "scroll", function () {
                i(t)
            })
        }

        var o = t("../instances"), i = t("../update-geometry");
        e.exports = function (t) {
            var e = o.get(t);
            r(t, e)
        }
    }, {"../instances": 18, "../update-geometry": 19}],
    15: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            function n() {
                var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
            }

            function r() {
                c || (c = setInterval(function () {
                    return i.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void l(t)) : void clearInterval(c)
                }, 50))
            }

            function a() {
                c && (clearInterval(c), c = null), o.stopScrolling(t)
            }

            var c = null, u = {top: 0, left: 0}, d = !1;
            e.event.bind(e.ownerDocument, "selectionchange", function () {
                t.contains(n()) ? d = !0 : (d = !1, a())
            }), e.event.bind(window, "mouseup", function () {
                d && (d = !1, a())
            }), e.event.bind(window, "mousemove", function (e) {
                if (d) {
                    var n = {x: e.pageX, y: e.pageY}, i = {
                        left: t.offsetLeft,
                        right: t.offsetLeft + t.offsetWidth,
                        top: t.offsetTop,
                        bottom: t.offsetTop + t.offsetHeight
                    };
                    n.x < i.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > i.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < i.top + 3 ? (i.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > i.bottom - 3 ? (n.y - i.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r()
                }
            })
        }

        var o = t("../../lib/helper"), i = t("../instances"), l = t("../update-geometry"), s = t("../update-scroll");
        e.exports = function (t) {
            var e = i.get(t);
            r(t, e)
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    16: [function (t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            function s(n, r) {
                var o = t.scrollTop, i = t.scrollLeft, l = Math.abs(n), s = Math.abs(r);
                if (s > l) {
                    if (0 > r && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o)return !e.settings.swipePropagation
                } else if (l > s && (0 > n && i === e.contentWidth - e.containerWidth || n > 0 && 0 === i))return !e.settings.swipePropagation;
                return !0
            }

            function a(e, n) {
                l(t, "top", t.scrollTop - n), l(t, "left", t.scrollLeft - e), i(t)
            }

            function c() {
                Y = !0
            }

            function u() {
                Y = !1
            }

            function d(t) {
                return t.targetTouches ? t.targetTouches[0] : t
            }

            function p(t) {
                return t.targetTouches && 1 === t.targetTouches.length ? !0 : t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE ? !0 : !1
            }

            function f(t) {
                if (p(t)) {
                    w = !0;
                    var e = d(t);
                    b.pageX = e.pageX, b.pageY = e.pageY, g = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation()
                }
            }

            function h(t) {
                if (!Y && w && p(t)) {
                    var e = d(t), n = {pageX: e.pageX, pageY: e.pageY}, r = n.pageX - b.pageX, o = n.pageY - b.pageY;
                    a(r, o), b = n;
                    var i = (new Date).getTime(), l = i - g;
                    l > 0 && (m.x = r / l, m.y = o / l, g = i), s(r, o) && (t.stopPropagation(), t.preventDefault())
                }
            }

            function v() {
                !Y && w && (w = !1, clearInterval(y), y = setInterval(function () {
                    return o.get(t) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8)) : void clearInterval(y)
                }, 10))
            }

            var b = {}, g = 0, m = {}, y = null, Y = !1, w = !1;
            n && (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", v)), r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", v)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", v)))
        }

        var o = t("../instances"), i = t("../update-geometry"), l = t("../update-scroll");
        e.exports = function (t, e, n) {
            var i = o.get(t);
            r(t, i, e, n)
        }
    }, {"../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    17: [function (t, e, n) {
        "use strict";
        var r = t("../lib/class"), o = t("../lib/helper"), i = t("./instances"), l = t("./update-geometry"), s = t("./handler/click-rail"), a = t("./handler/drag-scrollbar"), c = t("./handler/keyboard"), u = t("./handler/mouse-wheel"), d = t("./handler/native-scroll"), p = t("./handler/selection"), f = t("./handler/touch");
        e.exports = function (t, e) {
            e = "object" == typeof e ? e : {}, r.add(t, "ps-container");
            var n = i.add(t);
            n.settings = o.extend(n.settings, e), s(t), a(t), u(t), d(t), n.settings.useSelectionScroll && p(t), (o.env.supportsTouch || o.env.supportsIePointer) && f(t, o.env.supportsTouch, o.env.supportsIePointer), n.settings.useKeyboard && c(t), l(t)
        }
    }, {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function (t, e, n) {
        "use strict";
        function r(t) {
            var e = this;
            e.settings = d.clone(a), e.containerWidth = null, e.containerHeight = null, e.contentWidth = null, e.contentHeight = null, e.isRtl = "rtl" === s.css(t, "direction"), e.isNegativeScroll = function () {
                var e = t.scrollLeft, n = null;
                return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
            }(), e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, e.event = new c, e.ownerDocument = t.ownerDocument || document, e.scrollbarXRail = s.appendTo(s.e("div", "ps-scrollbar-x-rail"), t), e.scrollbarX = s.appendTo(s.e("div", "ps-scrollbar-x"), e.scrollbarXRail), e.scrollbarX.setAttribute("tabindex", 0), e.scrollbarXActive = null, e.scrollbarXWidth = null, e.scrollbarXLeft = null, e.scrollbarXBottom = d.toInt(s.css(e.scrollbarXRail, "bottom")), e.isScrollbarXUsingBottom = e.scrollbarXBottom === e.scrollbarXBottom, e.scrollbarXTop = e.isScrollbarXUsingBottom ? null : d.toInt(s.css(e.scrollbarXRail, "top")), e.railBorderXWidth = d.toInt(s.css(e.scrollbarXRail, "borderLeftWidth")) + d.toInt(s.css(e.scrollbarXRail, "borderRightWidth")), s.css(e.scrollbarXRail, "display", "block"), e.railXMarginWidth = d.toInt(s.css(e.scrollbarXRail, "marginLeft")) + d.toInt(s.css(e.scrollbarXRail, "marginRight")), s.css(e.scrollbarXRail, "display", ""), e.railXWidth = null, e.railXRatio = null, e.scrollbarYRail = s.appendTo(s.e("div", "ps-scrollbar-y-rail"), t), e.scrollbarY = s.appendTo(s.e("div", "ps-scrollbar-y"), e.scrollbarYRail), e.scrollbarY.setAttribute("tabindex", 0), e.scrollbarYActive = null, e.scrollbarYHeight = null, e.scrollbarYTop = null, e.scrollbarYRight = d.toInt(s.css(e.scrollbarYRail, "right")), e.isScrollbarYUsingRight = e.scrollbarYRight === e.scrollbarYRight, e.scrollbarYLeft = e.isScrollbarYUsingRight ? null : d.toInt(s.css(e.scrollbarYRail, "left")), e.scrollbarYOuterWidth = e.isRtl ? d.outerWidth(e.scrollbarY) : null, e.railBorderYWidth = d.toInt(s.css(e.scrollbarYRail, "borderTopWidth")) + d.toInt(s.css(e.scrollbarYRail, "borderBottomWidth")), s.css(e.scrollbarYRail, "display", "block"), e.railYMarginHeight = d.toInt(s.css(e.scrollbarYRail, "marginTop")) + d.toInt(s.css(e.scrollbarYRail, "marginBottom")), s.css(e.scrollbarYRail, "display", ""), e.railYHeight = null, e.railYRatio = null
        }

        function o(t) {
            return "undefined" == typeof t.dataset ? t.getAttribute("data-ps-id") : t.dataset.psId
        }

        function i(t, e) {
            "undefined" == typeof t.dataset ? t.setAttribute("data-ps-id", e) : t.dataset.psId = e
        }

        function l(t) {
            "undefined" == typeof t.dataset ? t.removeAttribute("data-ps-id") : delete t.dataset.psId
        }

        var s = t("../lib/dom"), a = t("./default-setting"), c = t("../lib/event-manager"), u = t("../lib/guid"), d = t("../lib/helper"), p = {};
        n.add = function (t) {
            var e = u();
            return i(t, e), p[e] = new r(t), p[e]
        }, n.remove = function (t) {
            delete p[o(t)], l(t)
        }, n.get = function (t) {
            return p[o(t)]
        }
    }, {"../lib/dom": 3, "../lib/event-manager": 4, "../lib/guid": 5, "../lib/helper": 6, "./default-setting": 8}],
    19: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
        }

        function o(t, e) {
            var n = {width: e.railXWidth};
            e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, l.css(e.scrollbarXRail, n);
            var r = {top: t.scrollTop, height: e.railYHeight};
            e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, l.css(e.scrollbarYRail, r), l.css(e.scrollbarX, {
                left: e.scrollbarXLeft,
                width: e.scrollbarXWidth - e.railBorderXWidth
            }), l.css(e.scrollbarY, {top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth})
        }

        var i = t("../lib/class"), l = t("../lib/dom"), s = t("../lib/helper"), a = t("./instances"), c = t("./update-scroll");
        e.exports = function (t) {
            var e = a.get(t);
            e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
            var n;
            t.contains(e.scrollbarXRail) || (n = l.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function (t) {
                l.remove(t)
            }), l.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = l.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function (t) {
                l.remove(t)
            }), l.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, s.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = s.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, s.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = s.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? i.add(t, "ps-active-x") : (i.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? i.add(t, "ps-active-y") : (i.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0))
        }
    }, {"../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20}],
    20: [function (t, e, n) {
        "use strict";
        var r, o, i = t("./instances"), l = document.createEvent("Event"), s = document.createEvent("Event"), a = document.createEvent("Event"), c = document.createEvent("Event"), u = document.createEvent("Event"), d = document.createEvent("Event"), p = document.createEvent("Event"), f = document.createEvent("Event"), h = document.createEvent("Event"), v = document.createEvent("Event");
        l.initEvent("ps-scroll-up", !0, !0), s.initEvent("ps-scroll-down", !0, !0), a.initEvent("ps-scroll-left", !0, !0), c.initEvent("ps-scroll-right", !0, !0), u.initEvent("ps-scroll-y", !0, !0), d.initEvent("ps-scroll-x", !0, !0), p.initEvent("ps-x-reach-start", !0, !0), f.initEvent("ps-x-reach-end", !0, !0), h.initEvent("ps-y-reach-start", !0, !0), v.initEvent("ps-y-reach-end", !0, !0), e.exports = function (t, e, n) {
            if ("undefined" == typeof t)throw"You must provide an element to the update-scroll function";
            if ("undefined" == typeof e)throw"You must provide an axis to the update-scroll function";
            if ("undefined" == typeof n)throw"You must provide a value to the update-scroll function";
            if ("top" === e && 0 >= n)return t.scrollTop = 0, void t.dispatchEvent(h);
            if ("left" === e && 0 >= n)return t.scrollLeft = 0, void t.dispatchEvent(p);
            var b = i.get(t);
            return "top" === e && n >= b.contentHeight - b.containerHeight ? (t.scrollTop = b.contentHeight - b.containerHeight, void t.dispatchEvent(v)) : "left" === e && n >= b.contentWidth - b.containerWidth ? (t.scrollLeft = b.contentWidth - b.containerWidth, void t.dispatchEvent(f)) : (r || (r = t.scrollTop), o || (o = t.scrollLeft), "top" === e && r > n && t.dispatchEvent(l), "top" === e && n > r && t.dispatchEvent(s), "left" === e && o > n && t.dispatchEvent(a), "left" === e && n > o && t.dispatchEvent(c), "top" === e && (t.scrollTop = r = n, t.dispatchEvent(u)), void("left" === e && (t.scrollLeft = o = n, t.dispatchEvent(d))))
        }
    }, {"./instances": 18}],
    21: [function (t, e, n) {
        "use strict";
        var r = t("../lib/dom"), o = t("../lib/helper"), i = t("./instances"), l = t("./update-geometry"), s = t("./update-scroll");
        e.exports = function (t) {
            var e = i.get(t);
            e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.css(e.scrollbarXRail, "display", "block"), r.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = o.toInt(r.css(e.scrollbarXRail, "marginLeft")) + o.toInt(r.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = o.toInt(r.css(e.scrollbarYRail, "marginTop")) + o.toInt(r.css(e.scrollbarYRail, "marginBottom")), r.css(e.scrollbarXRail, "display", "none"), r.css(e.scrollbarYRail, "display", "none"), l(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), r.css(e.scrollbarXRail, "display", ""), r.css(e.scrollbarYRail, "display", ""))
        }
    }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20}]
}, {}, [1]);
/*
 * jQuery css bezier animation support -- Jonah Fox
 * version 0.0.1
 * Released under the MIT license.
 */
/*
 var path = $.path.bezier({
 start: {x:10, y:10, angle: 20, length: 0.3},
 end:   {x:20, y:30, angle: -20, length: 0.2}
 })
 $("myobj").animate({path: path}, duration)

 */

;(function ($) {

    $.path = {};

    var V = {
        rotate: function (p, degrees) {
            var radians = degrees * Math.PI / 180,
                c = Math.cos(radians),
                s = Math.sin(radians);
            return [c * p[0] - s * p[1], s * p[0] + c * p[1]];
        },
        scale: function (p, n) {
            return [n * p[0], n * p[1]];
        },
        add: function (a, b) {
            return [a[0] + b[0], a[1] + b[1]];
        },
        minus: function (a, b) {
            return [a[0] - b[0], a[1] - b[1]];
        }
    };

    $.path.bezier = function (params, rotate) {
        params.start = $.extend({angle: 0, length: 0.3333}, params.start);
        params.end = $.extend({angle: 0, length: 0.3333}, params.end);

        this.p1 = [params.start.x, params.start.y];
        this.p4 = [params.end.x, params.end.y];

        var v14 = V.minus(this.p4, this.p1),
            v12 = V.scale(v14, params.start.length),
            v41 = V.scale(v14, -1),
            v43 = V.scale(v41, params.end.length);

        v12 = V.rotate(v12, params.start.angle);
        this.p2 = V.add(this.p1, v12);

        v43 = V.rotate(v43, params.end.angle);
        this.p3 = V.add(this.p4, v43);

        this.f1 = function (t) {
            return (t * t * t);
        };
        this.f2 = function (t) {
            return (3 * t * t * (1 - t));
        };
        this.f3 = function (t) {
            return (3 * t * (1 - t) * (1 - t));
        };
        this.f4 = function (t) {
            return ((1 - t) * (1 - t) * (1 - t));
        };

        /* p from 0 to 1 */
        this.css = function (p) {
            var f1 = this.f1(p), f2 = this.f2(p), f3 = this.f3(p), f4 = this.f4(p), css = {};
            if (rotate) {
                css.prevX = this.x;
                css.prevY = this.y;
            }
            css.x = this.x = ( this.p1[0] * f1 + this.p2[0] * f2 + this.p3[0] * f3 + this.p4[0] * f4 + .5 ) | 0;
            css.y = this.y = ( this.p1[1] * f1 + this.p2[1] * f2 + this.p3[1] * f3 + this.p4[1] * f4 + .5 ) | 0;
            css.left = css.x + "px";
            css.top = css.y + "px";
            return css;
        };
    };

    $.path.arc = function (params, rotate) {
        for (var i in params) {
            this[i] = params[i];
        }

        this.dir = this.dir || 1;

        while (this.start > this.end && this.dir > 0) {
            this.start -= 360;
        }

        while (this.start < this.end && this.dir < 0) {
            this.start += 360;
        }

        this.css = function (p) {
            var a = ( this.start * (p ) + this.end * (1 - (p )) ) * Math.PI / 180,
                css = {};

            if (rotate) {
                css.prevX = this.x;
                css.prevY = this.y;
            }
            css.x = this.x = ( Math.sin(a) * this.radius + this.center[0] + .5 ) | 0;
            css.y = this.y = ( Math.cos(a) * this.radius + this.center[1] + .5 ) | 0;
            css.left = css.x + "px";
            css.top = css.y + "px";
            return css;
        };
    };

    $.fx.step.path = function (fx) {
        var css = fx.end.css(1 - fx.pos);
        if (css.prevX != null) {
            $.cssHooks.transform.set(fx.elem, "rotate(" + Math.atan2(css.prevY - css.y, css.prevX - css.x) + ")");
        }
        fx.elem.style.top = css.top;
        fx.elem.style.left = css.left;
    };

})(jQuery);
define("jqueryPath", function () {
});

/*! Hammer.JS - v2.0.6 - 2016-01-06
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the  license */
!function (a, b, c, d) {
    "use strict";
    function e(a, b, c) {
        return setTimeout(j(a, c), b)
    }

    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
    }

    function g(a, b, c) {
        var e;
        if (a)if (a.forEach)a.forEach(b, c); else if (a.length !== d)for (e = 0; e < a.length;)b.call(c, a[e], e, a), e++; else for (e in a)a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }

    function h(b, c, d) {
        var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
        return function () {
            var c = new Error("get-stack-trace"), d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", f = a.console && (a.console.warn || a.console.log);
            return f && f.call(a.console, e, d), b.apply(this, arguments)
        }
    }

    function i(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && ha(d, c)
    }

    function j(a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }

    function k(a, b) {
        return typeof a == ka ? a.apply(b ? b[0] || d : d, b) : a
    }

    function l(a, b) {
        return a === d ? b : a
    }

    function m(a, b, c) {
        g(q(b), function (b) {
            a.addEventListener(b, c, !1)
        })
    }

    function n(a, b, c) {
        g(q(b), function (b) {
            a.removeEventListener(b, c, !1)
        })
    }

    function o(a, b) {
        for (; a;) {
            if (a == b)return !0;
            a = a.parentNode
        }
        return !1
    }

    function p(a, b) {
        return a.indexOf(b) > -1
    }

    function q(a) {
        return a.trim().split(/\s+/g)
    }

    function r(a, b, c) {
        if (a.indexOf && !c)return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b)return d;
            d++
        }
        return -1
    }

    function s(a) {
        return Array.prototype.slice.call(a, 0)
    }

    function t(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];
            r(e, g) < 0 && d.push(a[f]), e[f] = g, f++
        }
        return c && (d = b ? d.sort(function (a, c) {
            return a[b] > c[b]
        }) : d.sort()), d
    }

    function u(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ia.length;) {
            if (c = ia[g], e = c ? c + f : b, e in a)return e;
            g++
        }
        return d
    }

    function v() {
        return qa++
    }

    function w(b) {
        var c = b.ownerDocument || b;
        return c.defaultView || c.parentWindow || a
    }

    function x(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
            k(a.options.enable, [a]) && c.handler(b)
        }, this.init()
    }

    function y(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : ta ? M : ua ? P : sa ? R : L)(a, z)
    }

    function z(a, b, c) {
        var d = c.pointers.length, e = c.changedPointers.length, f = b & Aa && d - e === 0, g = b & (Ca | Da) && d - e === 0;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }

    function A(a, b) {
        var c = a.session, d = b.pointers, e = d.length;
        c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput, g = c.firstMultiple, h = g ? g.center : f.center, i = b.center = E(d);
        b.timeStamp = na(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
        var j = F(b.deltaTime, b.deltaX, b.deltaY);
        b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = ma(j.x) > ma(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
        var k = a.element;
        o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k
    }

    function B(a, b) {
        var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {};
        (b.eventType === Aa || f.eventType === Ca) && (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {x: c.x, y: c.y}), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }

    function C(a, b) {
        var c, e, f, g, h = a.lastInterval || b, i = b.timeStamp - h.timeStamp;
        if (b.eventType != Da && (i > za || h.velocity === d)) {
            var j = b.deltaX - h.deltaX, k = b.deltaY - h.deltaY, l = F(i, j, k);
            e = l.x, f = l.y, c = ma(l.x) > ma(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b
        } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
    }

    function D(a) {
        for (var b = [], c = 0; c < a.pointers.length;)b[c] = {
            clientX: la(a.pointers[c].clientX),
            clientY: la(a.pointers[c].clientY)
        }, c++;
        return {timeStamp: na(), pointers: b, center: E(b), deltaX: a.deltaX, deltaY: a.deltaY}
    }

    function E(a) {
        var b = a.length;
        if (1 === b)return {x: la(a[0].clientX), y: la(a[0].clientY)};
        for (var c = 0, d = 0, e = 0; b > e;)c += a[e].clientX, d += a[e].clientY, e++;
        return {x: la(c / b), y: la(d / b)}
    }

    function F(a, b, c) {
        return {x: b / a || 0, y: c / a || 0}
    }

    function G(a, b) {
        return a === b ? Ea : ma(a) >= ma(b) ? 0 > a ? Fa : Ga : 0 > b ? Ha : Ia
    }

    function H(a, b, c) {
        c || (c = Ma);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }

    function I(a, b, c) {
        c || (c = Ma);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }

    function J(a, b) {
        return I(b[1], b[0], Na) + I(a[1], a[0], Na)
    }

    function K(a, b) {
        return H(b[0], b[1], Na) / H(a[0], a[1], Na)
    }

    function L() {
        this.evEl = Pa, this.evWin = Qa, this.allow = !0, this.pressed = !1, x.apply(this, arguments)
    }

    function M() {
        this.evEl = Ta, this.evWin = Ua, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function N() {
        this.evTarget = Wa, this.evWin = Xa, this.started = !1, x.apply(this, arguments)
    }

    function O(a, b) {
        var c = s(a.touches), d = s(a.changedTouches);
        return b & (Ca | Da) && (c = t(c.concat(d), "identifier", !0)), [c, d]
    }

    function P() {
        this.evTarget = Za, this.targetIds = {}, x.apply(this, arguments)
    }

    function Q(a, b) {
        var c = s(a.touches), d = this.targetIds;
        if (b & (Aa | Ba) && 1 === c.length)return d[c[0].identifier] = !0, [c, c];
        var e, f, g = s(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function (a) {
                return o(a.target, i)
            }), b === Aa)for (e = 0; e < f.length;)d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length;)d[g[e].identifier] && h.push(g[e]), b & (Ca | Da) && delete d[g[e].identifier], e++;
        return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
    }

    function R() {
        x.apply(this, arguments);
        var a = j(this.handler, this);
        this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a)
    }

    function S(a, b) {
        this.manager = a, this.set(b)
    }

    function T(a) {
        if (p(a, db))return db;
        var b = p(a, eb), c = p(a, fb);
        return b && c ? db : b || c ? b ? eb : fb : p(a, cb) ? cb : bb
    }

    function U(a) {
        this.options = ha({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = gb, this.simultaneous = {}, this.requireFail = []
    }

    function V(a) {
        return a & lb ? "cancel" : a & jb ? "end" : a & ib ? "move" : a & hb ? "start" : ""
    }

    function W(a) {
        return a == Ia ? "down" : a == Ha ? "up" : a == Fa ? "left" : a == Ga ? "right" : ""
    }

    function X(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }

    function Y() {
        U.apply(this, arguments)
    }

    function Z() {
        Y.apply(this, arguments), this.pX = null, this.pY = null
    }

    function $() {
        Y.apply(this, arguments)
    }

    function _() {
        U.apply(this, arguments), this._timer = null, this._input = null
    }

    function aa() {
        Y.apply(this, arguments)
    }

    function ba() {
        Y.apply(this, arguments)
    }

    function ca() {
        U.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function da(a, b) {
        return b = b || {}, b.recognizers = l(b.recognizers, da.defaults.preset), new ea(a, b)
    }

    function ea(a, b) {
        this.options = ha({}, da.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = y(this), this.touchAction = new S(this, this.options.touchAction), fa(this, !0), g(this.options.recognizers, function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
        }, this)
    }

    function fa(a, b) {
        var c = a.element;
        c.style && g(a.options.cssProps, function (a, d) {
            c.style[u(c.style, d)] = b ? a : ""
        })
    }

    function ga(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }

    var ha, ia = ["", "webkit", "Moz", "MS", "ms", "o"], ja = b.createElement("div"), ka = "function", la = Math.round, ma = Math.abs, na = Date.now;
    ha = "function" != typeof Object.assign ? function (a) {
        if (a === d || null === a)throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var e = arguments[c];
            if (e !== d && null !== e)for (var f in e)e.hasOwnProperty(f) && (b[f] = e[f])
        }
        return b
    } : Object.assign;
    var oa = h(function (a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
        return a
    }, "extend", "Use `assign`."), pa = h(function (a, b) {
        return oa(a, b, !0)
    }, "merge", "Use `assign`."), qa = 1, ra = /mobile|tablet|ip(ad|hone|od)|android/i, sa = "ontouchstart" in a, ta = u(a, "PointerEvent") !== d, ua = sa && ra.test(navigator.userAgent), va = "touch", wa = "pen", xa = "mouse", ya = "kinect", za = 25, Aa = 1, Ba = 2, Ca = 4, Da = 8, Ea = 1, Fa = 2, Ga = 4, Ha = 8, Ia = 16, Ja = Fa | Ga, Ka = Ha | Ia, La = Ja | Ka, Ma = ["x", "y"], Na = ["clientX", "clientY"];
    x.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler)
        }
    };
    var Oa = {mousedown: Aa, mousemove: Ba, mouseup: Ca}, Pa = "mousedown", Qa = "mousemove mouseup";
    i(L, x, {
        handler: function (a) {
            var b = Oa[a.type];
            b & Aa && 0 === a.button && (this.pressed = !0), b & Ba && 1 !== a.which && (b = Ca), this.pressed && this.allow && (b & Ca && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: xa,
                srcEvent: a
            }))
        }
    });
    var Ra = {pointerdown: Aa, pointermove: Ba, pointerup: Ca, pointercancel: Da, pointerout: Da}, Sa = {
        2: va,
        3: wa,
        4: xa,
        5: ya
    }, Ta = "pointerdown", Ua = "pointermove pointerup pointercancel";
    a.MSPointerEvent && !a.PointerEvent && (Ta = "MSPointerDown", Ua = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
        handler: function (a) {
            var b = this.store, c = !1, d = a.type.toLowerCase().replace("ms", ""), e = Ra[d], f = Sa[a.pointerType] || a.pointerType, g = f == va, h = r(b, a.pointerId, "pointerId");
            e & Aa && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ca | Da) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1))
        }
    });
    var Va = {
        touchstart: Aa,
        touchmove: Ba,
        touchend: Ca,
        touchcancel: Da
    }, Wa = "touchstart", Xa = "touchstart touchmove touchend touchcancel";
    i(N, x, {
        handler: function (a) {
            var b = Va[a.type];
            if (b === Aa && (this.started = !0), this.started) {
                var c = O.call(this, a, b);
                b & (Ca | Da) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: va,
                    srcEvent: a
                })
            }
        }
    });
    var Ya = {
        touchstart: Aa,
        touchmove: Ba,
        touchend: Ca,
        touchcancel: Da
    }, Za = "touchstart touchmove touchend touchcancel";
    i(P, x, {
        handler: function (a) {
            var b = Ya[a.type], c = Q.call(this, a, b);
            c && this.callback(this.manager, b, {pointers: c[0], changedPointers: c[1], pointerType: va, srcEvent: a})
        }
    }), i(R, x, {
        handler: function (a, b, c) {
            var d = c.pointerType == va, e = c.pointerType == xa;
            if (d)this.mouse.allow = !1; else if (e && !this.mouse.allow)return;
            b & (Ca | Da) && (this.mouse.allow = !0), this.callback(a, b, c)
        }, destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var $a = u(ja.style, "touchAction"), _a = $a !== d, ab = "compute", bb = "auto", cb = "manipulation", db = "none", eb = "pan-x", fb = "pan-y";
    S.prototype = {
        set: function (a) {
            a == ab && (a = this.compute()), _a && this.manager.element.style && (this.manager.element.style[$a] = a), this.actions = a.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var a = [];
            return g(this.manager.recognizers, function (b) {
                k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }), T(a.join(" "))
        }, preventDefaults: function (a) {
            if (!_a) {
                var b = a.srcEvent, c = a.offsetDirection;
                if (this.manager.session.prevented)return void b.preventDefault();
                var d = this.actions, e = p(d, db), f = p(d, fb), g = p(d, eb);
                if (e) {
                    var h = 1 === a.pointers.length, i = a.distance < 2, j = a.deltaTime < 250;
                    if (h && i && j)return
                }
                if (!g || !f)return e || f && c & Ja || g && c & Ka ? this.preventSrc(b) : void 0
            }
        }, preventSrc: function (a) {
            this.manager.session.prevented = !0, a.preventDefault()
        }
    };
    var gb = 1, hb = 2, ib = 4, jb = 8, kb = jb, lb = 16, mb = 32;
    U.prototype = {
        defaults: {}, set: function (a) {
            return ha(this.options, a), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (a) {
            if (f(a, "recognizeWith", this))return this;
            var b = this.simultaneous;
            return a = X(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
        }, dropRecognizeWith: function (a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = X(a, this), delete this.simultaneous[a.id], this)
        }, requireFailure: function (a) {
            if (f(a, "requireFailure", this))return this;
            var b = this.requireFail;
            return a = X(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this
        }, dropRequireFailure: function (a) {
            if (f(a, "dropRequireFailure", this))return this;
            a = X(a, this);
            var b = r(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this
        }, hasRequireFailures: function () {
            return this.requireFail.length > 0
        }, canRecognizeWith: function (a) {
            return !!this.simultaneous[a.id]
        }, emit: function (a) {
            function b(b) {
                c.manager.emit(b, a)
            }

            var c = this, d = this.state;
            jb > d && b(c.options.event + V(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= jb && b(c.options.event + V(d))
        }, tryEmit: function (a) {
            return this.canEmit() ? this.emit(a) : void(this.state = mb)
        }, canEmit: function () {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (mb | gb)))return !1;
                a++
            }
            return !0
        }, recognize: function (a) {
            var b = ha({}, a);
            return k(this.options.enable, [this, b]) ? (this.state & (kb | lb | mb) && (this.state = gb), this.state = this.process(b), void(this.state & (hb | ib | jb | lb) && this.tryEmit(b))) : (this.reset(), void(this.state = mb))
        }, process: function (a) {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    }, i(Y, U, {
        defaults: {pointers: 1}, attrTest: function (a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        }, process: function (a) {
            var b = this.state, c = a.eventType, d = b & (hb | ib), e = this.attrTest(a);
            return d && (c & Da || !e) ? b | lb : d || e ? c & Ca ? b | jb : b & hb ? b | ib : hb : mb
        }
    }), i(Z, Y, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: La}, getTouchAction: function () {
            var a = this.options.direction, b = [];
            return a & Ja && b.push(fb), a & Ka && b.push(eb), b
        }, directionTest: function (a) {
            var b = this.options, c = !0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY;
            return e & b.direction || (b.direction & Ja ? (e = 0 === f ? Ea : 0 > f ? Fa : Ga, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ea : 0 > g ? Ha : Ia, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
        }, attrTest: function (a) {
            return Y.prototype.attrTest.call(this, a) && (this.state & hb || !(this.state & hb) && this.directionTest(a))
        }, emit: function (a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = W(a.direction);
            b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a)
        }
    }), i($, Y, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [db]
        }, attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & hb)
        }, emit: function (a) {
            if (1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                a.additionalEvent = this.options.event + b
            }
            this._super.emit.call(this, a)
        }
    }), i(_, U, {
        defaults: {event: "press", pointers: 1, time: 251, threshold: 9}, getTouchAction: function () {
            return [bb]
        }, process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Ca | Da) && !f)this.reset(); else if (a.eventType & Aa)this.reset(), this._timer = e(function () {
                this.state = kb, this.tryEmit()
            }, b.time, this); else if (a.eventType & Ca)return kb;
            return mb
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (a) {
            this.state === kb && (a && a.eventType & Ca ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = na(), this.manager.emit(this.options.event, this._input)))
        }
    }), i(aa, Y, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [db]
        }, attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & hb)
        }
    }), i(ba, Y, {
        defaults: {event: "swipe", threshold: 10, velocity: .3, direction: Ja | Ka, pointers: 1},
        getTouchAction: function () {
            return Z.prototype.getTouchAction.call(this)
        },
        attrTest: function (a) {
            var b, c = this.options.direction;
            return c & (Ja | Ka) ? b = a.overallVelocity : c & Ja ? b = a.overallVelocityX : c & Ka && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && ma(b) > this.options.velocity && a.eventType & Ca
        },
        emit: function (a) {
            var b = W(a.offsetDirection);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
        }
    }), i(ca, U, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        }, getTouchAction: function () {
            return [cb]
        }, process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & Aa && 0 === this.count)return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ca)return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0, h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                var i = this.count % b.taps;
                if (0 === i)return this.hasRequireFailures() ? (this._timer = e(function () {
                    this.state = kb, this.tryEmit()
                }, b.interval, this), hb) : kb
            }
            return mb
        }, failTimeout: function () {
            return this._timer = e(function () {
                this.state = mb
            }, this.options.interval, this), mb
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function () {
            this.state == kb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), da.VERSION = "2.0.6", da.defaults = {
        domEvents: !1,
        touchAction: ab,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[aa, {enable: !1}], [$, {enable: !1}, ["rotate"]], [ba, {direction: Ja}], [Z, {direction: Ja}, ["swipe"]], [ca], [ca, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [_]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var nb = 1, ob = 2;
    ea.prototype = {
        set: function (a) {
            return ha(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
        }, stop: function (a) {
            this.session.stopped = a ? ob : nb
        }, recognize: function (a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & kb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;)c = d[f], b.stopped === ob || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (hb | ib | jb) && (e = b.curRecognizer = c), f++
            }
        }, get: function (a) {
            if (a instanceof U)return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)if (b[c].options.event == a)return b[c];
            return null
        }, add: function (a) {
            if (f(a, "add", this))return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
        }, remove: function (a) {
            if (f(a, "remove", this))return this;
            if (a = this.get(a)) {
                var b = this.recognizers, c = r(b, a);
                -1 !== c && (b.splice(c, 1), this.touchAction.update())
            }
            return this
        }, on: function (a, b) {
            var c = this.handlers;
            return g(q(a), function (a) {
                c[a] = c[a] || [], c[a].push(b)
            }), this
        }, off: function (a, b) {
            var c = this.handlers;
            return g(q(a), function (a) {
                b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
            }), this
        }, emit: function (a, b) {
            this.options.domEvents && ga(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function () {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;)c[d](b), d++
            }
        }, destroy: function () {
            this.element && fa(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, ha(da, {
        INPUT_START: Aa,
        INPUT_MOVE: Ba,
        INPUT_END: Ca,
        INPUT_CANCEL: Da,
        STATE_POSSIBLE: gb,
        STATE_BEGAN: hb,
        STATE_CHANGED: ib,
        STATE_ENDED: jb,
        STATE_RECOGNIZED: kb,
        STATE_CANCELLED: lb,
        STATE_FAILED: mb,
        DIRECTION_NONE: Ea,
        DIRECTION_LEFT: Fa,
        DIRECTION_RIGHT: Ga,
        DIRECTION_UP: Ha,
        DIRECTION_DOWN: Ia,
        DIRECTION_HORIZONTAL: Ja,
        DIRECTION_VERTICAL: Ka,
        DIRECTION_ALL: La,
        Manager: ea,
        Input: x,
        TouchAction: S,
        TouchInput: P,
        MouseInput: L,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: U,
        AttrRecognizer: Y,
        Tap: ca,
        Pan: Z,
        Swipe: ba,
        Pinch: $,
        Rotate: aa,
        Press: _,
        on: m,
        off: n,
        each: g,
        merge: pa,
        extend: oa,
        assign: ha,
        inherit: i,
        bindFn: j,
        prefixed: u
    });
    var pb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
    pb.Hammer = da, "function" == typeof define && define.amd ? define('hammerjs', [], function () {
        return da
    }) : "undefined" != typeof module && module.exports ? module.exports = da : a[c] = da
}(window, document, "Hammer");
//# sourceMappingURL=hammer.min.map;
/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash compat -o ./lodash.js`
 */
;(function () {
    function n(n, t) {
        if (n !== t) {
            var r = null === n, e = n === w, u = n === n, o = null === t, i = t === w, f = t === t;
            if (n > t && !o || !u || r && !i && f || e && f)return 1;
            if (n < t && !r || !f || o && !e && u || i && u)return -1
        }
        return 0
    }

    function t(n, t, r) {
        for (var e = n.length, u = r ? e : -1; r ? u-- : ++u < e;)if (t(n[u], u, n))return u;
        return -1
    }

    function r(n, t, r) {
        if (t !== t)return p(n, r);
        r -= 1;
        for (var e = n.length; ++r < e;)if (n[r] === t)return r;
        return -1
    }

    function e(n) {
        return typeof n == "function" || false
    }

    function u(n) {
        return null == n ? "" : n + ""
    }

    function o(n, t) {
        for (var r = -1, e = n.length; ++r < e && -1 < t.indexOf(n.charAt(r)););
        return r
    }

    function i(n, t) {
        for (var r = n.length; r-- && -1 < t.indexOf(n.charAt(r)););
        return r
    }

    function f(t, r) {
        return n(t.a, r.a) || t.b - r.b
    }

    function a(n) {
        return Nn[n]
    }

    function c(n) {
        return Tn[n]
    }

    function l(n, t, r) {
        return t ? n = Bn[n] : r && (n = Dn[n]), "\\" + n
    }

    function s(n) {
        return "\\" + Dn[n]
    }

    function p(n, t, r) {
        var e = n.length;
        for (t += r ? 0 : -1; r ? t-- : ++t < e;) {
            var u = n[t];
            if (u !== u)return t
        }
        return -1
    }

    function h(n) {
        return !!n && typeof n == "object"
    }

    function _(n) {
        return 160 >= n && 9 <= n && 13 >= n || 32 == n || 160 == n || 5760 == n || 6158 == n || 8192 <= n && (8202 >= n || 8232 == n || 8233 == n || 8239 == n || 8287 == n || 12288 == n || 65279 == n);
    }

    function v(n, t) {
        for (var r = -1, e = n.length, u = -1, o = []; ++r < e;)n[r] === t && (n[r] = P, o[++u] = r);
        return o
    }

    function g(n) {
        for (var t = -1, r = n.length; ++t < r && _(n.charCodeAt(t)););
        return t
    }

    function y(n) {
        for (var t = n.length; t-- && _(n.charCodeAt(t)););
        return t
    }

    function d(n) {
        return Pn[n]
    }

    function m(_) {
        function Nn(n) {
            if (h(n) && !(Wo(n) || n instanceof zn)) {
                if (n instanceof Pn)return n;
                if (eu.call(n, "__chain__") && eu.call(n, "__wrapped__"))return qr(n)
            }
            return new Pn(n)
        }

        function Tn() {
        }

        function Pn(n, t, r) {
            this.__wrapped__ = n, this.__actions__ = r || [],
                this.__chain__ = !!t
        }

        function zn(n) {
            this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Cu, this.__views__ = []
        }

        function Bn() {
            this.__data__ = {}
        }

        function Dn(n) {
            var t = n ? n.length : 0;
            for (this.data = {hash: mu(null), set: new hu}; t--;)this.push(n[t])
        }

        function Mn(n, t) {
            var r = n.data;
            return (typeof t == "string" || de(t) ? r.set.has(t) : r.hash[t]) ? 0 : -1
        }

        function qn(n, t) {
            var r = -1, e = n.length;
            for (t || (t = De(e)); ++r < e;)t[r] = n[r];
            return t
        }

        function Kn(n, t) {
            for (var r = -1, e = n.length; ++r < e && false !== t(n[r], r, n););
            return n
        }

        function Vn(n, t) {
            for (var r = -1, e = n.length; ++r < e;)if (!t(n[r], r, n))return false;
            return true
        }

        function Zn(n, t) {
            for (var r = -1, e = n.length, u = -1, o = []; ++r < e;) {
                var i = n[r];
                t(i, r, n) && (o[++u] = i)
            }
            return o
        }

        function Xn(n, t) {
            for (var r = -1, e = n.length, u = De(e); ++r < e;)u[r] = t(n[r], r, n);
            return u
        }

        function Hn(n, t) {
            for (var r = -1, e = t.length, u = n.length; ++r < e;)n[u + r] = t[r];
            return n
        }

        function Qn(n, t, r, e) {
            var u = -1, o = n.length;
            for (e && o && (r = n[++u]); ++u < o;)r = t(r, n[u], u, n);
            return r
        }

        function nt(n, t) {
            for (var r = -1, e = n.length; ++r < e;)if (t(n[r], r, n))return true;
            return false
        }

        function tt(n, t, r, e) {
            return n !== w && eu.call(e, r) ? n : t
        }

        function rt(n, t, r) {
            for (var e = -1, u = Ko(t), o = u.length; ++e < o;) {
                var i = u[e], f = n[i], a = r(f, t[i], i, n, t);
                (a === a ? a === f : f !== f) && (f !== w || i in n) || (n[i] = a)
            }
            return n
        }

        function et(n, t) {
            return null == t ? n : ot(t, Ko(t), n)
        }

        function ut(n, t) {
            for (var r = -1, e = null == n, u = !e && Sr(n), o = u ? n.length : 0, i = t.length, f = De(i); ++r < i;) {
                var a = t[r];
                f[r] = u ? Ur(a, o) ? n[a] : w : e ? w : n[a]
            }
            return f
        }

        function ot(n, t, r) {
            r || (r = {});
            for (var e = -1, u = t.length; ++e < u;) {
                var o = t[e];
                r[o] = n[o]
            }
            return r
        }

        function it(n, t, r) {
            var e = typeof n;
            return "function" == e ? t === w ? n : Dt(n, t, r) : null == n ? Ne : "object" == e ? At(n) : t === w ? Be(n) : jt(n, t)
        }

        function ft(n, t, r, e, u, o, i) {
            var f;
            if (r && (f = u ? r(n, e, u) : r(n)), f !== w)return f;
            if (!de(n))return n;
            if (e = Wo(n)) {
                if (f = Ir(n), !t)return qn(n, f)
            } else {
                var a = ou.call(n), c = a == K;
                if (a != Z && a != z && (!c || u))return Ln[a] ? Er(n, a, t) : u ? n : {};
                if (Gn(n))return u ? n : {};
                if (f = Rr(c ? {} : n), !t)return et(f, n)
            }
            for (o || (o = []), i || (i = []), u = o.length; u--;)if (o[u] == n)return i[u];
            return o.push(n), i.push(f), (e ? Kn : gt)(n, function (e, u) {
                f[u] = ft(e, t, r, u, n, o, i);
            }), f
        }

        function at(n, t, r) {
            if (typeof n != "function")throw new Xe(T);
            return _u(function () {
                n.apply(w, r)
            }, t)
        }

        function ct(n, t) {
            var e = n ? n.length : 0, u = [];
            if (!e)return u;
            var o = -1, i = jr(), f = i === r, a = f && t.length >= F && mu && hu ? new Dn(t) : null, c = t.length;
            a && (i = Mn, f = false, t = a);
            n:for (; ++o < e;)if (a = n[o], f && a === a) {
                for (var l = c; l--;)if (t[l] === a)continue n;
                u.push(a)
            } else 0 > i(t, a, 0) && u.push(a);
            return u
        }

        function lt(n, t) {
            var r = true;
            return zu(n, function (n, e, u) {
                return r = !!t(n, e, u)
            }), r
        }

        function st(n, t, r, e) {
            var u = e, o = u;
            return zu(n, function (n, i, f) {
                i = +t(n, i, f), (r(i, u) || i === e && i === o) && (u = i, o = n)
            }), o
        }

        function pt(n, t) {
            var r = [];
            return zu(n, function (n, e, u) {
                t(n, e, u) && r.push(n)
            }), r
        }

        function ht(n, t, r, e) {
            var u;
            return r(n, function (n, r, o) {
                return t(n, r, o) ? (u = e ? r : n, false) : void 0
            }), u
        }

        function _t(n, t, r, e) {
            e || (e = []);
            for (var u = -1, o = n.length; ++u < o;) {
                var i = n[u];
                h(i) && Sr(i) && (r || Wo(i) || _e(i)) ? t ? _t(i, t, r, e) : Hn(e, i) : r || (e[e.length] = i)
            }
            return e
        }

        function vt(n, t) {
            return Du(n, t, Ee)
        }

        function gt(n, t) {
            return Du(n, t, Ko)
        }

        function yt(n, t) {
            return Mu(n, t, Ko)
        }

        function dt(n, t) {
            for (var r = -1, e = t.length, u = -1, o = []; ++r < e;) {
                var i = t[r];
                ye(n[i]) && (o[++u] = i)
            }
            return o
        }

        function mt(n, t, r) {
            if (null != n) {
                n = Dr(n), r !== w && r in n && (t = [r]), r = 0;
                for (var e = t.length; null != n && r < e;)n = Dr(n)[t[r++]];
                return r && r == e ? n : w
            }
        }

        function wt(n, t, r, e, u, o) {
            if (n === t)return true;
            if (null == n || null == t || !de(n) && !h(t))return n !== n && t !== t;
            n:{
                var i = wt, f = Wo(n), a = Wo(t), c = B, l = B;
                f || (c = ou.call(n), c == z ? c = Z : c != Z && (f = je(n))), a || (l = ou.call(t), l == z ? l = Z : l != Z && je(t));
                var s = c == Z && !Gn(n), a = l == Z && !Gn(t), l = c == l;
                if (!l || f || s) {
                    if (!e && (c = s && eu.call(n, "__wrapped__"), a = a && eu.call(t, "__wrapped__"),
                        c || a)) {
                        n = i(c ? n.value() : n, a ? t.value() : t, r, e, u, o);
                        break n
                    }
                    if (l) {
                        for (u || (u = []), o || (o = []), c = u.length; c--;)if (u[c] == n) {
                            n = o[c] == t;
                            break n
                        }
                        u.push(n), o.push(t), n = (f ? mr : xr)(n, t, i, r, e, u, o), u.pop(), o.pop()
                    } else n = false
                } else n = wr(n, t, c)
            }
            return n
        }

        function xt(n, t, r) {
            var e = t.length, u = e, o = !r;
            if (null == n)return !u;
            for (n = Dr(n); e--;) {
                var i = t[e];
                if (o && i[2] ? i[1] !== n[i[0]] : !(i[0] in n))return false
            }
            for (; ++e < u;) {
                var i = t[e], f = i[0], a = n[f], c = i[1];
                if (o && i[2]) {
                    if (a === w && !(f in n))return false
                } else if (i = r ? r(a, c, f) : w, i === w ? !wt(c, a, r, true) : !i)return false;
            }
            return true
        }

        function bt(n, t) {
            var r = -1, e = Sr(n) ? De(n.length) : [];
            return zu(n, function (n, u, o) {
                e[++r] = t(n, u, o)
            }), e
        }

        function At(n) {
            var t = kr(n);
            if (1 == t.length && t[0][2]) {
                var r = t[0][0], e = t[0][1];
                return function (n) {
                    return null == n ? false : (n = Dr(n), n[r] === e && (e !== w || r in n))
                }
            }
            return function (n) {
                return xt(n, t)
            }
        }

        function jt(n, t) {
            var r = Wo(n), e = Wr(n) && t === t && !de(t), u = n + "";
            return n = Mr(n), function (o) {
                if (null == o)return false;
                var i = u;
                if (o = Dr(o), !(!r && e || i in o)) {
                    if (o = 1 == n.length ? o : mt(o, St(n, 0, -1)), null == o)return false;
                    i = Gr(n), o = Dr(o);
                }
                return o[i] === t ? t !== w || i in o : wt(t, o[i], w, true)
            }
        }

        function kt(n, t, r, e, u) {
            if (!de(n))return n;
            var o = Sr(t) && (Wo(t) || je(t)), i = o ? w : Ko(t);
            return Kn(i || t, function (f, a) {
                if (i && (a = f, f = t[a]), h(f)) {
                    e || (e = []), u || (u = []);
                    n:{
                        for (var c = a, l = e, s = u, p = l.length, _ = t[c]; p--;)if (l[p] == _) {
                            n[c] = s[p];
                            break n
                        }
                        var p = n[c], v = r ? r(p, _, c, n, t) : w, g = v === w;
                        g && (v = _, Sr(_) && (Wo(_) || je(_)) ? v = Wo(p) ? p : Sr(p) ? qn(p) : [] : xe(_) || _e(_) ? v = _e(p) ? Ie(p) : xe(p) ? p : {} : g = false), l.push(_), s.push(v), g ? n[c] = kt(v, _, r, l, s) : (v === v ? v !== p : p === p) && (n[c] = v)
                    }
                } else c = n[a],
                    l = r ? r(c, f, a, n, t) : w, (s = l === w) && (l = f), l === w && (!o || a in n) || !s && (l === l ? l === c : c !== c) || (n[a] = l)
            }), n
        }

        function Ot(n) {
            return function (t) {
                return null == t ? w : Dr(t)[n]
            }
        }

        function It(n) {
            var t = n + "";
            return n = Mr(n), function (r) {
                return mt(r, n, t)
            }
        }

        function Rt(n, t) {
            for (var r = n ? t.length : 0; r--;) {
                var e = t[r];
                if (e != u && Ur(e)) {
                    var u = e;
                    vu.call(n, e, 1)
                }
            }
            return n
        }

        function Et(n, t) {
            return n + wu(Ru() * (t - n + 1))
        }

        function Ct(n, t, r, e, u) {
            return u(n, function (n, u, o) {
                r = e ? (e = false, n) : t(r, n, u, o)
            }), r
        }

        function St(n, t, r) {
            var e = -1, u = n.length;
            for (t = null == t ? 0 : +t || 0,
                 0 > t && (t = -t > u ? 0 : u + t), r = r === w || r > u ? u : +r || 0, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = De(u); ++e < u;)r[e] = n[e + t];
            return r
        }

        function Ut(n, t) {
            var r;
            return zu(n, function (n, e, u) {
                return r = t(n, e, u), !r
            }), !!r
        }

        function $t(n, t) {
            var r = n.length;
            for (n.sort(t); r--;)n[r] = n[r].c;
            return n
        }

        function Wt(t, r, e) {
            var u = br(), o = -1;
            return r = Xn(r, function (n) {
                return u(n)
            }), t = bt(t, function (n) {
                return {
                    a: Xn(r, function (t) {
                        return t(n)
                    }), b: ++o, c: n
                }
            }), $t(t, function (t, r) {
                var u;
                n:{
                    for (var o = -1, i = t.a, f = r.a, a = i.length, c = e.length; ++o < a;)if (u = n(i[o], f[o])) {
                        if (o >= c)break n;
                        o = e[o], u *= "asc" === o || true === o ? 1 : -1;
                        break n
                    }
                    u = t.b - r.b
                }
                return u
            })
        }

        function Ft(n, t) {
            var r = 0;
            return zu(n, function (n, e, u) {
                r += +t(n, e, u) || 0
            }), r
        }

        function Lt(n, t) {
            var e = -1, u = jr(), o = n.length, i = u === r, f = i && o >= F, a = f && mu && hu ? new Dn(void 0) : null, c = [];
            a ? (u = Mn, i = false) : (f = false, a = t ? [] : c);
            n:for (; ++e < o;) {
                var l = n[e], s = t ? t(l, e, n) : l;
                if (i && l === l) {
                    for (var p = a.length; p--;)if (a[p] === s)continue n;
                    t && a.push(s), c.push(l)
                } else 0 > u(a, s, 0) && ((t || f) && a.push(s), c.push(l))
            }
            return c
        }

        function Nt(n, t) {
            for (var r = -1, e = t.length, u = De(e); ++r < e;)u[r] = n[t[r]];
            return u
        }

        function Tt(n, t, r, e) {
            for (var u = n.length, o = e ? u : -1; (e ? o-- : ++o < u) && t(n[o], o, n););
            return r ? St(n, e ? 0 : o, e ? o + 1 : u) : St(n, e ? o + 1 : 0, e ? u : o)
        }

        function Pt(n, t) {
            var r = n;
            r instanceof zn && (r = r.value());
            for (var e = -1, u = t.length; ++e < u;)var o = t[e], r = o.func.apply(o.thisArg, Hn([r], o.args));
            return r
        }

        function zt(n, t, r) {
            var e = 0, u = n ? n.length : e;
            if (typeof t == "number" && t === t && u <= Uu) {
                for (; e < u;) {
                    var o = e + u >>> 1, i = n[o];
                    (r ? i <= t : i < t) && null !== i ? e = o + 1 : u = o
                }
                return u
            }
            return Bt(n, t, Ne, r)
        }

        function Bt(n, t, r, e) {
            t = r(t);
            for (var u = 0, o = n ? n.length : 0, i = t !== t, f = null === t, a = t === w; u < o;) {
                var c = wu((u + o) / 2), l = r(n[c]), s = l !== w, p = l === l;
                (i ? p || e : f ? p && s && (e || null != l) : a ? p && (e || s) : null == l ? 0 : e ? l <= t : l < t) ? u = c + 1 : o = c
            }
            return ku(o, Su)
        }

        function Dt(n, t, r) {
            if (typeof n != "function")return Ne;
            if (t === w)return n;
            switch (r) {
                case 1:
                    return function (r) {
                        return n.call(t, r)
                    };
                case 3:
                    return function (r, e, u) {
                        return n.call(t, r, e, u)
                    };
                case 4:
                    return function (r, e, u, o) {
                        return n.call(t, r, e, u, o)
                    };
                case 5:
                    return function (r, e, u, o, i) {
                        return n.call(t, r, e, u, o, i)
                    }
            }
            return function () {
                return n.apply(t, arguments)
            }
        }

        function Mt(n) {
            var t = new au(n.byteLength);
            return new gu(t).set(new gu(n)), t
        }

        function qt(n, t, r) {
            for (var e = r.length, u = -1, o = ju(n.length - e, 0), i = -1, f = t.length, a = De(f + o); ++i < f;)a[i] = t[i];
            for (; ++u < e;)a[r[u]] = n[u];
            for (; o--;)a[i++] = n[u++];
            return a
        }

        function Kt(n, t, r) {
            for (var e = -1, u = r.length, o = -1, i = ju(n.length - u, 0), f = -1, a = t.length, c = De(i + a); ++o < i;)c[o] = n[o];
            for (i = o; ++f < a;)c[i + f] = t[f];
            for (; ++e < u;)c[i + r[e]] = n[o++];
            return c
        }

        function Vt(n, t) {
            return function (r, e, u) {
                var o = t ? t() : {};
                if (e = br(e, u, 3), Wo(r)) {
                    u = -1;
                    for (var i = r.length; ++u < i;) {
                        var f = r[u];
                        n(o, f, e(f, u, r), r);
                    }
                } else zu(r, function (t, r, u) {
                    n(o, t, e(t, r, u), u)
                });
                return o
            }
        }

        function Zt(n) {
            return pe(function (t, r) {
                var e = -1, u = null == t ? 0 : r.length, o = 2 < u ? r[u - 2] : w, i = 2 < u ? r[2] : w, f = 1 < u ? r[u - 1] : w;
                for (typeof o == "function" ? (o = Dt(o, f, 5), u -= 2) : (o = typeof f == "function" ? f : w, u -= o ? 1 : 0), i && $r(r[0], r[1], i) && (o = 3 > u ? w : o, u = 1); ++e < u;)(i = r[e]) && n(t, i, o);
                return t
            })
        }

        function Yt(n, t) {
            return function (r, e) {
                var u = r ? Vu(r) : 0;
                if (!Lr(u))return n(r, e);
                for (var o = t ? u : -1, i = Dr(r); (t ? o-- : ++o < u) && false !== e(i[o], o, i););
                return r
            }
        }

        function Gt(n) {
            return function (t, r, e) {
                var u = Dr(t);
                e = e(t);
                for (var o = e.length, i = n ? o : -1; n ? i-- : ++i < o;) {
                    var f = e[i];
                    if (false === r(u[f], f, u))break
                }
                return t
            }
        }

        function Jt(n, t) {
            function r() {
                return (this && this !== Yn && this instanceof r ? e : n).apply(t, arguments)
            }

            var e = Ht(n);
            return r
        }

        function Xt(n) {
            return function (t) {
                var r = -1;
                t = Fe(Ue(t));
                for (var e = t.length, u = ""; ++r < e;)u = n(u, t[r], r);
                return u
            }
        }

        function Ht(n) {
            return function () {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return new n;
                    case 1:
                        return new n(t[0]);
                    case 2:
                        return new n(t[0], t[1]);
                    case 3:
                        return new n(t[0], t[1], t[2]);
                    case 4:
                        return new n(t[0], t[1], t[2], t[3]);
                    case 5:
                        return new n(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                }
                var r = Pu(n.prototype), t = n.apply(r, t);
                return de(t) ? t : r
            }
        }

        function Qt(n) {
            function t(r, e, u) {
                return u && $r(r, e, u) && (e = w), r = dr(r, n, w, w, w, w, w, e), r.placeholder = t.placeholder, r
            }

            return t
        }

        function nr(n, t) {
            return pe(function (r) {
                var e = r[0];
                return null == e ? e : (r.push(t), n.apply(w, r))
            })
        }

        function tr(n, t) {
            return function (r, e, u) {
                if (u && $r(r, e, u) && (e = w), e = br(e, u, 3), 1 == e.length) {
                    u = r = Wo(r) ? r : Br(r);
                    for (var o = e, i = -1, f = u.length, a = t, c = a; ++i < f;) {
                        var l = u[i], s = +o(l);
                        n(s, a) && (a = s, c = l)
                    }
                    if (u = c, !r.length || u !== t)return u
                }
                return st(r, e, n, t)
            }
        }

        function rr(n, r) {
            return function (e, u, o) {
                return u = br(u, o, 3), Wo(e) ? (u = t(e, u, r), -1 < u ? e[u] : w) : ht(e, u, n)
            }
        }

        function er(n) {
            return function (r, e, u) {
                return r && r.length ? (e = br(e, u, 3), t(r, e, n)) : -1
            }
        }

        function ur(n) {
            return function (t, r, e) {
                return r = br(r, e, 3), ht(t, r, n, true)
            }
        }

        function or(n) {
            return function () {
                for (var t, r = arguments.length, e = n ? r : -1, u = 0, o = De(r); n ? e-- : ++e < r;) {
                    var i = o[u++] = arguments[e];
                    if (typeof i != "function")throw new Xe(T);
                    !t && Pn.prototype.thru && "wrapper" == Ar(i) && (t = new Pn([], true))
                }
                for (e = t ? -1 : r; ++e < r;) {
                    var i = o[e], u = Ar(i), f = "wrapper" == u ? Ku(i) : w;
                    t = f && Fr(f[0]) && f[1] == (E | k | I | C) && !f[4].length && 1 == f[9] ? t[Ar(f[0])].apply(t, f[3]) : 1 == i.length && Fr(i) ? t[u]() : t.thru(i)
                }
                return function () {
                    var n = arguments, e = n[0];
                    if (t && 1 == n.length && Wo(e) && e.length >= F)return t.plant(e).value();
                    for (var u = 0, n = r ? o[u].apply(this, n) : e; ++u < r;)n = o[u].call(this, n);
                    return n
                }
            }
        }

        function ir(n, t) {
            return function (r, e, u) {
                return typeof e == "function" && u === w && Wo(r) ? n(r, e) : t(r, Dt(e, u, 3))
            }
        }

        function fr(n) {
            return function (t, r, e) {
                return (typeof r != "function" || e !== w) && (r = Dt(r, e, 3)), n(t, r, Ee)
            }
        }

        function ar(n) {
            return function (t, r, e) {
                return (typeof r != "function" || e !== w) && (r = Dt(r, e, 3)), n(t, r)
            }
        }

        function cr(n) {
            return function (t, r, e) {
                var u = {};
                return r = br(r, e, 3), gt(t, function (t, e, o) {
                    o = r(t, e, o), e = n ? o : e, t = n ? t : o, u[e] = t
                }), u
            }
        }

        function lr(n) {
            return function (t, r, e) {
                return t = u(t), (n ? t : "") + _r(t, r, e) + (n ? "" : t)
            }
        }

        function sr(n) {
            var t = pe(function (r, e) {
                var u = v(e, t.placeholder);
                return dr(r, n, w, e, u)
            });
            return t
        }

        function pr(n, t) {
            return function (r, e, u, o) {
                var i = 3 > arguments.length;
                return typeof e == "function" && o === w && Wo(r) ? n(r, e, u, i) : Ct(r, br(e, o, 4), u, i, t)
            }
        }

        function hr(n, t, r, e, u, o, i, f, a, c) {
            function l() {
                for (var m = arguments.length, x = m, j = De(m); x--;)j[x] = arguments[x];
                if (e && (j = qt(j, e, u)), o && (j = Kt(j, o, i)), _ || y) {
                    var x = l.placeholder, k = v(j, x), m = m - k.length;
                    if (m < c) {
                        var O = f ? qn(f) : w, m = ju(c - m, 0), E = _ ? k : w, k = _ ? w : k, C = _ ? j : w, j = _ ? w : j;
                        return t |= _ ? I : R, t &= ~(_ ? R : I),
                        g || (t &= ~(b | A)), j = [n, t, r, C, E, j, k, O, a, m], O = hr.apply(w, j), Fr(n) && Zu(O, j), O.placeholder = x, O
                    }
                }
                if (x = p ? r : this, O = h ? x[n] : n, f)for (m = j.length, E = ku(f.length, m), k = qn(j); E--;)C = f[E], j[E] = Ur(C, m) ? k[C] : w;
                return s && a < j.length && (j.length = a), this && this !== Yn && this instanceof l && (O = d || Ht(n)), O.apply(x, j)
            }

            var s = t & E, p = t & b, h = t & A, _ = t & k, g = t & j, y = t & O, d = h ? w : Ht(n);
            return l
        }

        function _r(n, t, r) {
            return n = n.length, t = +t, n < t && bu(t) ? (t -= n, r = null == r ? " " : r + "", $e(r, du(t / r.length)).slice(0, t)) : ""
        }

        function vr(n, t, r, e) {
            function u() {
                for (var t = -1, f = arguments.length, a = -1, c = e.length, l = De(c + f); ++a < c;)l[a] = e[a];
                for (; f--;)l[a++] = arguments[++t];
                return (this && this !== Yn && this instanceof u ? i : n).apply(o ? r : this, l)
            }

            var o = t & b, i = Ht(n);
            return u
        }

        function gr(n) {
            var t = Ve[n];
            return function (n, r) {
                return (r = r === w ? 0 : +r || 0) ? (r = su(10, r), t(n * r) / r) : t(n)
            }
        }

        function yr(n) {
            return function (t, r, e, u) {
                var o = br(e);
                return null == e && o === it ? zt(t, r, n) : Bt(t, r, o(e, u, 1), n)
            }
        }

        function dr(n, t, r, e, u, o, i, f) {
            var a = t & A;
            if (!a && typeof n != "function")throw new Xe(T);
            var c = e ? e.length : 0;
            if (c || (t &= ~(I | R), e = u = w), c -= u ? u.length : 0, t & R) {
                var l = e, s = u;
                e = u = w
            }
            var p = a ? w : Ku(n);
            return r = [n, t, r, e, u, l, s, o, i, f], p && (e = r[1], t = p[1], f = e | t, u = t == E && e == k || t == E && e == C && r[7].length <= p[8] || t == (E | C) && e == k, (f < E || u) && (t & b && (r[2] = p[2], f |= e & b ? 0 : j), (e = p[3]) && (u = r[3], r[3] = u ? qt(u, e, p[4]) : qn(e), r[4] = u ? v(r[3], P) : qn(p[4])), (e = p[5]) && (u = r[5], r[5] = u ? Kt(u, e, p[6]) : qn(e), r[6] = u ? v(r[5], P) : qn(p[6])), (e = p[7]) && (r[7] = qn(e)), t & E && (r[8] = null == r[8] ? p[8] : ku(r[8], p[8])), null == r[9] && (r[9] = p[9]), r[0] = p[0], r[1] = f), t = r[1], f = r[9]), r[9] = null == f ? a ? 0 : n.length : ju(f - c, 0) || 0, n = t == b ? Jt(r[0], r[2]) : t != I && t != (b | I) || r[4].length ? hr.apply(w, r) : vr.apply(w, r),
                (p ? qu : Zu)(n, r)
        }

        function mr(n, t, r, e, u, o, i) {
            var f = -1, a = n.length, c = t.length;
            if (a != c && (!u || c <= a))return false;
            for (; ++f < a;) {
                var l = n[f], c = t[f], s = e ? e(u ? c : l, u ? l : c, f) : w;
                if (s !== w) {
                    if (s)continue;
                    return false
                }
                if (u) {
                    if (!nt(t, function (n) {
                            return l === n || r(l, n, e, u, o, i)
                        }))return false
                } else if (l !== c && !r(l, c, e, u, o, i))return false
            }
            return true
        }

        function wr(n, t, r) {
            switch (r) {
                case D:
                case M:
                    return +n == +t;
                case q:
                    return n.name == t.name && n.message == t.message;
                case V:
                    return n != +n ? t != +t : n == +t;
                case Y:
                case G:
                    return n == t + ""
            }
            return false
        }

        function xr(n, t, r, e, u, o, i) {
            var f = Ko(n), a = f.length, c = Ko(t).length;
            if (a != c && !u)return false;
            for (c = a; c--;) {
                var l = f[c];
                if (!(u ? l in t : eu.call(t, l)))return false
            }
            for (var s = u; ++c < a;) {
                var l = f[c], p = n[l], h = t[l], _ = e ? e(u ? h : p, u ? p : h, l) : w;
                if (_ === w ? !r(p, h, e, u, o, i) : !_)return false;
                s || (s = "constructor" == l)
            }
            return s || (r = n.constructor, e = t.constructor, !(r != e && "constructor" in n && "constructor" in t) || typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) ? true : false
        }

        function br(n, t, r) {
            var e = Nn.callback || Le, e = e === Le ? it : e;
            return r ? e(n, t, r) : e
        }

        function Ar(n) {
            for (var t = n.name + "", r = Fu[t], e = r ? r.length : 0; e--;) {
                var u = r[e], o = u.func;
                if (null == o || o == n)return u.name
            }
            return t
        }

        function jr(n, t, e) {
            var u = Nn.indexOf || Yr, u = u === Yr ? r : u;
            return n ? u(n, t, e) : u
        }

        function kr(n) {
            n = Ce(n);
            for (var t = n.length; t--;) {
                var r, e = n[t];
                r = n[t][1], r = r === r && !de(r), e[2] = r
            }
            return n
        }

        function Or(n, t) {
            var r = null == n ? w : n[t];
            return me(r) ? r : w
        }

        function Ir(n) {
            var t = n.length, r = new n.constructor(t);
            return t && "string" == typeof n[0] && eu.call(n, "index") && (r.index = n.index, r.input = n.input), r
        }

        function Rr(n) {
            return n = n.constructor,
            typeof n == "function" && n instanceof n || (n = Ye), new n
        }

        function Er(n, t, r) {
            var e = n.constructor;
            switch (t) {
                case J:
                    return Mt(n);
                case D:
                case M:
                    return new e(+n);
                case X:
                case H:
                case Q:
                case nn:
                case tn:
                case rn:
                case en:
                case un:
                case on:
                    return e instanceof e && (e = Lu[t]), t = n.buffer, new e(r ? Mt(t) : t, n.byteOffset, n.length);
                case V:
                case G:
                    return new e(n);
                case Y:
                    var u = new e(n.source, kn.exec(n));
                    u.lastIndex = n.lastIndex
            }
            return u
        }

        function Cr(n, t, r) {
            return null == n || Wr(t, n) || (t = Mr(t), n = 1 == t.length ? n : mt(n, St(t, 0, -1)), t = Gr(t)),
                t = null == n ? n : n[t], null == t ? w : t.apply(n, r)
        }

        function Sr(n) {
            return null != n && Lr(Vu(n))
        }

        function Ur(n, t) {
            return n = typeof n == "number" || Rn.test(n) ? +n : -1, t = null == t ? $u : t, -1 < n && 0 == n % 1 && n < t
        }

        function $r(n, t, r) {
            if (!de(r))return false;
            var e = typeof t;
            return ("number" == e ? Sr(r) && Ur(t, r.length) : "string" == e && t in r) ? (t = r[t], n === n ? n === t : t !== t) : false
        }

        function Wr(n, t) {
            var r = typeof n;
            return "string" == r && dn.test(n) || "number" == r ? true : Wo(n) ? false : !yn.test(n) || null != t && n in Dr(t)
        }

        function Fr(n) {
            var t = Ar(n), r = Nn[t];
            return typeof r == "function" && t in zn.prototype ? n === r ? true : (t = Ku(r),
            !!t && n === t[0]) : false
        }

        function Lr(n) {
            return typeof n == "number" && -1 < n && 0 == n % 1 && n <= $u
        }

        function Nr(n, t) {
            return n === w ? t : Fo(n, t, Nr)
        }

        function Tr(n, t) {
            n = Dr(n);
            for (var r = -1, e = t.length, u = {}; ++r < e;) {
                var o = t[r];
                o in n && (u[o] = n[o])
            }
            return u
        }

        function Pr(n, t) {
            var r = {};
            return vt(n, function (n, e, u) {
                t(n, e, u) && (r[e] = n)
            }), r
        }

        function zr(n) {
            for (var t = Ee(n), r = t.length, e = r && n.length, u = !!e && Lr(e) && (Wo(n) || _e(n) || Ae(n)), o = -1, i = []; ++o < r;) {
                var f = t[o];
                (u && Ur(f, e) || eu.call(n, f)) && i.push(f)
            }
            return i
        }

        function Br(n) {
            return null == n ? [] : Sr(n) ? Nn.support.unindexedChars && Ae(n) ? n.split("") : de(n) ? n : Ye(n) : Se(n);
        }

        function Dr(n) {
            if (Nn.support.unindexedChars && Ae(n)) {
                for (var t = -1, r = n.length, e = Ye(n); ++t < r;)e[t] = n.charAt(t);
                return e
            }
            return de(n) ? n : Ye(n)
        }

        function Mr(n) {
            if (Wo(n))return n;
            var t = [];
            return u(n).replace(mn, function (n, r, e, u) {
                t.push(e ? u.replace(An, "$1") : r || n)
            }), t
        }

        function qr(n) {
            return n instanceof zn ? n.clone() : new Pn(n.__wrapped__, n.__chain__, qn(n.__actions__))
        }

        function Kr(n, t, r) {
            return n && n.length ? ((r ? $r(n, t, r) : null == t) && (t = 1), St(n, 0 > t ? 0 : t)) : []
        }

        function Vr(n, t, r) {
            var e = n ? n.length : 0;
            return e ? ((r ? $r(n, t, r) : null == t) && (t = 1),
                t = e - (+t || 0), St(n, 0, 0 > t ? 0 : t)) : []
        }

        function Zr(n) {
            return n ? n[0] : w
        }

        function Yr(n, t, e) {
            var u = n ? n.length : 0;
            if (!u)return -1;
            if (typeof e == "number")e = 0 > e ? ju(u + e, 0) : e; else if (e)return e = zt(n, t), e < u && (t === t ? t === n[e] : n[e] !== n[e]) ? e : -1;
            return r(n, t, e || 0)
        }

        function Gr(n) {
            var t = n ? n.length : 0;
            return t ? n[t - 1] : w
        }

        function Jr(n) {
            return Kr(n, 1)
        }

        function Xr(n, t, e, u) {
            if (!n || !n.length)return [];
            null != t && typeof t != "boolean" && (u = e, e = $r(n, t, u) ? w : t, t = false);
            var o = br();
            if ((null != e || o !== it) && (e = o(e, u, 3)), t && jr() === r) {
                t = e;
                var i;
                e = -1,
                    u = n.length;
                for (var o = -1, f = []; ++e < u;) {
                    var a = n[e], c = t ? t(a, e, n) : a;
                    e && i === c || (i = c, f[++o] = a)
                }
                n = f
            } else n = Lt(n, e);
            return n
        }

        function Hr(n) {
            if (!n || !n.length)return [];
            var t = -1, r = 0;
            n = Zn(n, function (n) {
                return Sr(n) ? (r = ju(n.length, r), true) : void 0
            });
            for (var e = De(r); ++t < r;)e[t] = Xn(n, Ot(t));
            return e
        }

        function Qr(n, t, r) {
            return n && n.length ? (n = Hr(n), null == t ? n : (t = Dt(t, r, 4), Xn(n, function (n) {
                return Qn(n, t, w, true)
            }))) : []
        }

        function ne(n, t) {
            var r = -1, e = n ? n.length : 0, u = {};
            for (!e || t || Wo(n[0]) || (t = []); ++r < e;) {
                var o = n[r];
                t ? u[o] = t[r] : o && (u[o[0]] = o[1]);
            }
            return u
        }

        function te(n) {
            return n = Nn(n), n.__chain__ = true, n
        }

        function re(n, t, r) {
            return t.call(r, n)
        }

        function ee(n, t, r) {
            var e = Wo(n) ? Vn : lt;
            return r && $r(n, t, r) && (t = w), (typeof t != "function" || r !== w) && (t = br(t, r, 3)), e(n, t)
        }

        function ue(n, t, r) {
            var e = Wo(n) ? Zn : pt;
            return t = br(t, r, 3), e(n, t)
        }

        function oe(n, t, r, e) {
            var u = n ? Vu(n) : 0;
            return Lr(u) || (n = Se(n), u = n.length), r = typeof r != "number" || e && $r(t, r, e) ? 0 : 0 > r ? ju(u + r, 0) : r || 0, typeof n == "string" || !Wo(n) && Ae(n) ? r <= u && -1 < n.indexOf(t, r) : !!u && -1 < jr(n, t, r)
        }

        function ie(n, t, r) {
            var e = Wo(n) ? Xn : bt;
            return t = br(t, r, 3), e(n, t)
        }

        function fe(n, t, r) {
            if (r ? $r(n, t, r) : null == t) {
                n = Br(n);
                var e = n.length;
                return 0 < e ? n[Et(0, e - 1)] : w
            }
            r = -1, n = Oe(n);
            var e = n.length, u = e - 1;
            for (t = ku(0 > t ? 0 : +t || 0, e); ++r < t;) {
                var e = Et(r, u), o = n[e];
                n[e] = n[r], n[r] = o
            }
            return n.length = t, n
        }

        function ae(n, t, r) {
            var e = Wo(n) ? nt : Ut;
            return r && $r(n, t, r) && (t = w), (typeof t != "function" || r !== w) && (t = br(t, r, 3)), e(n, t)
        }

        function ce(n, t) {
            var r;
            if (typeof t != "function") {
                if (typeof n != "function")throw new Xe(T);
                var e = n;
                n = t, t = e
            }
            return function () {
                return 0 < --n && (r = t.apply(this, arguments)),
                1 >= n && (t = w), r
            }
        }

        function le(n, t, r) {
            function e(t, r) {
                r && cu(r), a = p = h = w, t && (_ = wo(), c = n.apply(s, f), p || a || (f = s = w))
            }

            function u() {
                var n = t - (wo() - l);
                0 >= n || n > t ? e(h, a) : p = _u(u, n)
            }

            function o() {
                e(g, p)
            }

            function i() {
                if (f = arguments, l = wo(), s = this, h = g && (p || !y), false === v)var r = y && !p; else {
                    a || y || (_ = l);
                    var e = v - (l - _), i = 0 >= e || e > v;
                    i ? (a && (a = cu(a)), _ = l, c = n.apply(s, f)) : a || (a = _u(o, e))
                }
                return i && p ? p = cu(p) : p || t === v || (p = _u(u, t)), r && (i = true, c = n.apply(s, f)), !i || p || a || (f = s = w), c
            }

            var f, a, c, l, s, p, h, _ = 0, v = false, g = true;
            if (typeof n != "function")throw new Xe(T);
            if (t = 0 > t ? 0 : +t || 0, true === r)var y = true, g = false; else de(r) && (y = !!r.leading, v = "maxWait" in r && ju(+r.maxWait || 0, t), g = "trailing" in r ? !!r.trailing : g);
            return i.cancel = function () {
                p && cu(p), a && cu(a), _ = 0, a = p = h = w
            }, i
        }

        function se(n, t) {
            if (typeof n != "function" || t && typeof t != "function")throw new Xe(T);
            var r = function () {
                var e = arguments, u = t ? t.apply(this, e) : e[0], o = r.cache;
                return o.has(u) ? o.get(u) : (e = n.apply(this, e), r.cache = o.set(u, e), e)
            };
            return r.cache = new se.Cache, r
        }

        function pe(n, t) {
            if (typeof n != "function")throw new Xe(T);
            return t = ju(t === w ? n.length - 1 : +t || 0, 0),
                function () {
                    for (var r = arguments, e = -1, u = ju(r.length - t, 0), o = De(u); ++e < u;)o[e] = r[t + e];
                    switch (t) {
                        case 0:
                            return n.call(this, o);
                        case 1:
                            return n.call(this, r[0], o);
                        case 2:
                            return n.call(this, r[0], r[1], o)
                    }
                    for (u = De(t + 1), e = -1; ++e < t;)u[e] = r[e];
                    return u[t] = o, n.apply(this, u)
                }
        }

        function he(n, t) {
            return n > t
        }

        function _e(n) {
            return h(n) && Sr(n) && eu.call(n, "callee") && !pu.call(n, "callee")
        }

        function ve(n, t, r, e) {
            return e = (r = typeof r == "function" ? Dt(r, e, 3) : w) ? r(n, t) : w, e === w ? wt(n, t, r) : !!e
        }

        function ge(n) {
            return h(n) && typeof n.message == "string" && ou.call(n) == q;
        }

        function ye(n) {
            return de(n) && ou.call(n) == K
        }

        function de(n) {
            var t = typeof n;
            return !!n && ("object" == t || "function" == t)
        }

        function me(n) {
            return null == n ? false : ye(n) ? fu.test(ru.call(n)) : h(n) && (Gn(n) ? fu : In).test(n)
        }

        function we(n) {
            return typeof n == "number" || h(n) && ou.call(n) == V
        }

        function xe(n) {
            var t;
            if (!h(n) || ou.call(n) != Z || Gn(n) || _e(n) || !(eu.call(n, "constructor") || (t = n.constructor, typeof t != "function" || t instanceof t)))return false;
            var r;
            return Nn.support.ownLast ? (vt(n, function (n, t, e) {
                return r = eu.call(e, t), false
            }), false !== r) : (vt(n, function (n, t) {
                r = t
            }), r === w || eu.call(n, r))
        }

        function be(n) {
            return de(n) && ou.call(n) == Y
        }

        function Ae(n) {
            return typeof n == "string" || h(n) && ou.call(n) == G
        }

        function je(n) {
            return h(n) && Lr(n.length) && !!Fn[ou.call(n)]
        }

        function ke(n, t) {
            return n < t
        }

        function Oe(n) {
            var t = n ? Vu(n) : 0;
            return Lr(t) ? t ? Nn.support.unindexedChars && Ae(n) ? n.split("") : qn(n) : [] : Se(n)
        }

        function Ie(n) {
            return ot(n, Ee(n))
        }

        function Re(n) {
            return dt(n, Ee(n))
        }

        function Ee(n) {
            if (null == n)return [];
            de(n) || (n = Ye(n));
            for (var t = n.length, r = Nn.support, t = t && Lr(t) && (Wo(n) || _e(n) || Ae(n)) && t || 0, e = n.constructor, u = -1, e = ye(e) && e.prototype || nu, o = e === n, i = De(t), f = 0 < t, a = r.enumErrorProps && (n === Qe || n instanceof qe), c = r.enumPrototypes && ye(n); ++u < t;)i[u] = u + "";
            for (var l in n)c && "prototype" == l || a && ("message" == l || "name" == l) || f && Ur(l, t) || "constructor" == l && (o || !eu.call(n, l)) || i.push(l);
            if (r.nonEnumShadows && n !== nu)for (t = n === tu ? G : n === Qe ? q : ou.call(n), r = Nu[t] || Nu[Z], t == Z && (e = nu), t = Wn.length; t--;)l = Wn[t], u = r[l], o && u || (u ? !eu.call(n, l) : n[l] === e[l]) || i.push(l);
            return i
        }

        function Ce(n) {
            n = Dr(n);
            for (var t = -1, r = Ko(n), e = r.length, u = De(e); ++t < e;) {
                var o = r[t];
                u[t] = [o, n[o]]
            }
            return u
        }

        function Se(n) {
            return Nt(n, Ko(n))
        }

        function Ue(n) {
            return (n = u(n)) && n.replace(En, a).replace(bn, "");
        }

        function $e(n, t) {
            var r = "";
            if (n = u(n), t = +t, 1 > t || !n || !bu(t))return r;
            do t % 2 && (r += n), t = wu(t / 2), n += n; while (t);
            return r
        }

        function We(n, t, r) {
            var e = n;
            return (n = u(n)) ? (r ? $r(e, t, r) : null == t) ? n.slice(g(n), y(n) + 1) : (t += "", n.slice(o(n, t), i(n, t) + 1)) : n
        }

        function Fe(n, t, r) {
            return r && $r(n, t, r) && (t = w), n = u(n), n.match(t || Un) || []
        }

        function Le(n, t, r) {
            return r && $r(n, t, r) && (t = w), h(n) ? Te(n) : it(n, t)
        }

        function Ne(n) {
            return n
        }

        function Te(n) {
            return At(ft(n, true))
        }

        function Pe(n, t, r) {
            if (null == r) {
                var e = de(t), u = e ? Ko(t) : w;
                ((u = u && u.length ? dt(t, u) : w) ? u.length : e) || (u = false,
                    r = t, t = n, n = this)
            }
            u || (u = dt(t, Ko(t)));
            var o = true, e = -1, i = ye(n), f = u.length;
            false === r ? o = false : de(r) && "chain" in r && (o = r.chain);
            for (; ++e < f;) {
                r = u[e];
                var a = t[r];
                n[r] = a, i && (n.prototype[r] = function (t) {
                    return function () {
                        var r = this.__chain__;
                        if (o || r) {
                            var e = n(this.__wrapped__);
                            return (e.__actions__ = qn(this.__actions__)).push({
                                func: t,
                                args: arguments,
                                thisArg: n
                            }), e.__chain__ = r, e
                        }
                        return t.apply(n, Hn([this.value()], arguments))
                    }
                }(a))
            }
            return n
        }

        function ze() {
        }

        function Be(n) {
            return Wr(n) ? Ot(n) : It(n)
        }

        _ = _ ? Jn.defaults(Yn.Object(), _, Jn.pick(Yn, $n)) : Yn;
        var De = _.Array, Me = _.Date, qe = _.Error, Ke = _.Function, Ve = _.Math, Ze = _.Number, Ye = _.Object, Ge = _.RegExp, Je = _.String, Xe = _.TypeError, He = De.prototype, Qe = qe.prototype, nu = Ye.prototype, tu = Je.prototype, ru = Ke.prototype.toString, eu = nu.hasOwnProperty, uu = 0, ou = nu.toString, iu = Yn._, fu = Ge("^" + ru.call(eu).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), au = _.ArrayBuffer, cu = _.clearTimeout, lu = _.parseFloat, su = Ve.pow, pu = nu.propertyIsEnumerable, hu = Or(_, "Set"), _u = _.setTimeout, vu = He.splice, gu = _.Uint8Array, yu = Or(_, "WeakMap"), du = Ve.ceil, mu = Or(Ye, "create"), wu = Ve.floor, xu = Or(De, "isArray"), bu = _.isFinite, Au = Or(Ye, "keys"), ju = Ve.max, ku = Ve.min, Ou = Or(Me, "now"), Iu = _.parseInt, Ru = Ve.random, Eu = Ze.NEGATIVE_INFINITY, Cu = Ze.POSITIVE_INFINITY, Su = 4294967294, Uu = 2147483647, $u = 9007199254740991, Wu = yu && new yu, Fu = {}, Lu = {};
        Lu[X] = _.Float32Array, Lu[H] = _.Float64Array, Lu[Q] = _.Int8Array, Lu[nn] = _.Int16Array, Lu[tn] = _.Int32Array, Lu[rn] = gu, Lu[en] = _.Uint8ClampedArray, Lu[un] = _.Uint16Array, Lu[on] = _.Uint32Array;
        var Nu = {};
        Nu[B] = Nu[M] = Nu[V] = {
            constructor: true,
            toLocaleString: true,
            toString: true,
            valueOf: true
        }, Nu[D] = Nu[G] = {
            constructor: true,
            toString: true,
            valueOf: true
        }, Nu[q] = Nu[K] = Nu[Y] = {
            constructor: true,
            toString: true
        }, Nu[Z] = {constructor: true}, Kn(Wn, function (n) {
            for (var t in Nu)if (eu.call(Nu, t)) {
                var r = Nu[t];
                r[n] = eu.call(r, n)
            }
        });
        var Tu = Nn.support = {};
        !function (n) {
            var t = function () {
                this.x = n
            }, r = {0: n, length: n}, e = [];
            t.prototype = {valueOf: n, y: n};
            for (var u in new t)e.push(u);
            Tu.enumErrorProps = pu.call(Qe, "message") || pu.call(Qe, "name"), Tu.enumPrototypes = pu.call(t, "prototype"), Tu.nonEnumShadows = !/valueOf/.test(e), Tu.ownLast = "x" != e[0], Tu.spliceObjects = (vu.call(r, 0, 1), !r[0]), Tu.unindexedChars = "xx" != "x"[0] + Ye("x")[0]
        }(1, 0), Nn.templateSettings = {escape: _n, evaluate: vn, interpolate: gn, variable: "", imports: {_: Nn}};
        var Pu = function () {
            function n() {
            }

            return function (t) {
                if (de(t)) {
                    n.prototype = t;
                    var r = new n;
                    n.prototype = w
                }
                return r || {}
            }
        }(), zu = Yt(gt), Bu = Yt(yt, true), Du = Gt(), Mu = Gt(true), qu = Wu ? function (n, t) {
            return Wu.set(n, t), n
        } : Ne, Ku = Wu ? function (n) {
            return Wu.get(n)
        } : ze, Vu = Ot("length"), Zu = function () {
            var n = 0, t = 0;
            return function (r, e) {
                var u = wo(), o = W - (u - t);
                if (t = u, 0 < o) {
                    if (++n >= $)return r
                } else n = 0;
                return qu(r, e)
            }
        }(), Yu = pe(function (n, t) {
            return h(n) && Sr(n) ? ct(n, _t(t, false, true)) : []
        }), Gu = er(), Ju = er(true), Xu = pe(function (n) {
            for (var t = n.length, e = t, u = De(l), o = jr(), i = o === r, f = []; e--;) {
                var a = n[e] = Sr(a = n[e]) ? a : [];
                u[e] = i && 120 <= a.length && mu && hu ? new Dn(e && a) : null;
            }
            var i = n[0], c = -1, l = i ? i.length : 0, s = u[0];
            n:for (; ++c < l;)if (a = i[c], 0 > (s ? Mn(s, a) : o(f, a, 0))) {
                for (e = t; --e;) {
                    var p = u[e];
                    if (0 > (p ? Mn(p, a) : o(n[e], a, 0)))continue n
                }
                s && s.push(a), f.push(a)
            }
            return f
        }), Hu = pe(function (t, r) {
            r = _t(r);
            var e = ut(t, r);
            return Rt(t, r.sort(n)), e
        }), Qu = yr(), no = yr(true), to = pe(function (n) {
            return Lt(_t(n, false, true))
        }), ro = pe(function (n, t) {
            return Sr(n) ? ct(n, t) : []
        }), eo = pe(Hr), uo = pe(function (n) {
            var t = n.length, r = 2 < t ? n[t - 2] : w, e = 1 < t ? n[t - 1] : w;
            return 2 < t && typeof r == "function" ? t -= 2 : (r = 1 < t && typeof e == "function" ? (--t,
                e) : w, e = w), n.length = t, Qr(n, r, e)
        }), oo = pe(function (n) {
            return n = _t(n), this.thru(function (t) {
                t = Wo(t) ? t : [Dr(t)];
                for (var r = n, e = -1, u = t.length, o = -1, i = r.length, f = De(u + i); ++e < u;)f[e] = t[e];
                for (; ++o < i;)f[e++] = r[o];
                return f
            })
        }), io = pe(function (n, t) {
            return Sr(n) && (n = Br(n)), ut(n, _t(t))
        }), fo = Vt(function (n, t, r) {
            eu.call(n, r) ? ++n[r] : n[r] = 1
        }), ao = rr(zu), co = rr(Bu, true), lo = ir(Kn, zu), so = ir(function (n, t) {
            for (var r = n.length; r-- && false !== t(n[r], r, n););
            return n
        }, Bu), po = Vt(function (n, t, r) {
            eu.call(n, r) ? n[r].push(t) : n[r] = [t]
        }), ho = Vt(function (n, t, r) {
            n[r] = t
        }), _o = pe(function (n, t, r) {
            var e = -1, u = typeof t == "function", o = Wr(t), i = Sr(n) ? De(n.length) : [];
            return zu(n, function (n) {
                var f = u ? t : o && null != n ? n[t] : w;
                i[++e] = f ? f.apply(n, r) : Cr(n, t, r)
            }), i
        }), vo = Vt(function (n, t, r) {
            n[r ? 0 : 1].push(t)
        }, function () {
            return [[], []]
        }), go = pr(Qn, zu), yo = pr(function (n, t, r, e) {
            var u = n.length;
            for (e && u && (r = n[--u]); u--;)r = t(r, n[u], u, n);
            return r
        }, Bu), mo = pe(function (n, t) {
            if (null == n)return [];
            var r = t[2];
            return r && $r(t[0], t[1], r) && (t.length = 1), Wt(n, _t(t), [])
        }), wo = Ou || function () {
                return (new Me).getTime();
            }, xo = pe(function (n, t, r) {
            var e = b;
            if (r.length)var u = v(r, xo.placeholder), e = e | I;
            return dr(n, e, t, r, u)
        }), bo = pe(function (n, t) {
            t = t.length ? _t(t) : Re(n);
            for (var r = -1, e = t.length; ++r < e;) {
                var u = t[r];
                n[u] = dr(n[u], b, n)
            }
            return n
        }), Ao = pe(function (n, t, r) {
            var e = b | A;
            if (r.length)var u = v(r, Ao.placeholder), e = e | I;
            return dr(t, e, n, r, u)
        }), jo = Qt(k), ko = Qt(O), Oo = pe(function (n, t) {
            return at(n, 1, t)
        }), Io = pe(function (n, t, r) {
            return at(n, t, r)
        }), Ro = or(), Eo = or(true), Co = pe(function (n, t) {
            if (t = _t(t), typeof n != "function" || !Vn(t, e))throw new Xe(T);
            var r = t.length;
            return pe(function (e) {
                for (var u = ku(e.length, r); u--;)e[u] = t[u](e[u]);
                return n.apply(this, e)
            })
        }), So = sr(I), Uo = sr(R), $o = pe(function (n, t) {
            return dr(n, C, w, w, w, _t(t))
        }), Wo = xu || function (n) {
                return h(n) && Lr(n.length) && ou.call(n) == B
            }, Fo = Zt(kt), Lo = Zt(function (n, t, r) {
            return r ? rt(n, t, r) : et(n, t)
        }), No = nr(Lo, function (n, t) {
            return n === w ? t : n
        }), To = nr(Fo, Nr), Po = ur(gt), zo = ur(yt), Bo = fr(Du), Do = fr(Mu), Mo = ar(gt), qo = ar(yt), Ko = Au ? function (n) {
            var t = null == n ? w : n.constructor;
            return typeof t == "function" && t.prototype === n || (typeof n == "function" ? Nn.support.enumPrototypes : Sr(n)) ? zr(n) : de(n) ? Au(n) : [];
        } : zr, Vo = cr(true), Zo = cr(), Yo = pe(function (n, t) {
            if (null == n)return {};
            if ("function" != typeof t[0])return t = Xn(_t(t), Je), Tr(n, ct(Ee(n), t));
            var r = Dt(t[0], t[1], 3);
            return Pr(n, function (n, t, e) {
                return !r(n, t, e)
            })
        }), Go = pe(function (n, t) {
            return null == n ? {} : "function" == typeof t[0] ? Pr(n, Dt(t[0], t[1], 3)) : Tr(n, _t(t))
        }), Jo = Xt(function (n, t, r) {
            return t = t.toLowerCase(), n + (r ? t.charAt(0).toUpperCase() + t.slice(1) : t)
        }), Xo = Xt(function (n, t, r) {
            return n + (r ? "-" : "") + t.toLowerCase()
        }), Ho = lr(), Qo = lr(true), ni = Xt(function (n, t, r) {
            return n + (r ? "_" : "") + t.toLowerCase();
        }), ti = Xt(function (n, t, r) {
            return n + (r ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1))
        }), ri = pe(function (n, t) {
            try {
                return n.apply(w, t)
            } catch (r) {
                return ge(r) ? r : new qe(r)
            }
        }), ei = pe(function (n, t) {
            return function (r) {
                return Cr(r, n, t)
            }
        }), ui = pe(function (n, t) {
            return function (r) {
                return Cr(n, r, t)
            }
        }), oi = gr("ceil"), ii = gr("floor"), fi = tr(he, Eu), ai = tr(ke, Cu), ci = gr("round");
        return Nn.prototype = Tn.prototype, Pn.prototype = Pu(Tn.prototype), Pn.prototype.constructor = Pn, zn.prototype = Pu(Tn.prototype), zn.prototype.constructor = zn,
            Bn.prototype["delete"] = function (n) {
                return this.has(n) && delete this.__data__[n]
            }, Bn.prototype.get = function (n) {
            return "__proto__" == n ? w : this.__data__[n]
        }, Bn.prototype.has = function (n) {
            return "__proto__" != n && eu.call(this.__data__, n)
        }, Bn.prototype.set = function (n, t) {
            return "__proto__" != n && (this.__data__[n] = t), this
        }, Dn.prototype.push = function (n) {
            var t = this.data;
            typeof n == "string" || de(n) ? t.set.add(n) : t.hash[n] = true
        }, se.Cache = Bn, Nn.after = function (n, t) {
            if (typeof t != "function") {
                if (typeof n != "function")throw new Xe(T);
                var r = n;
                n = t, t = r
            }
            return n = bu(n = +n) ? n : 0, function () {
                return 1 > --n ? t.apply(this, arguments) : void 0
            }
        }, Nn.ary = function (n, t, r) {
            return r && $r(n, t, r) && (t = w), t = n && null == t ? n.length : ju(+t || 0, 0), dr(n, E, w, w, w, w, t)
        }, Nn.assign = Lo, Nn.at = io, Nn.before = ce, Nn.bind = xo, Nn.bindAll = bo, Nn.bindKey = Ao, Nn.callback = Le, Nn.chain = te, Nn.chunk = function (n, t, r) {
            t = (r ? $r(n, t, r) : null == t) ? 1 : ju(wu(t) || 1, 1), r = 0;
            for (var e = n ? n.length : 0, u = -1, o = De(du(e / t)); r < e;)o[++u] = St(n, r, r += t);
            return o
        }, Nn.compact = function (n) {
            for (var t = -1, r = n ? n.length : 0, e = -1, u = []; ++t < r;) {
                var o = n[t];
                o && (u[++e] = o)
            }
            return u
        }, Nn.constant = function (n) {
            return function () {
                return n
            }
        }, Nn.countBy = fo, Nn.create = function (n, t, r) {
            var e = Pu(n);
            return r && $r(n, t, r) && (t = w), t ? et(e, t) : e
        }, Nn.curry = jo, Nn.curryRight = ko, Nn.debounce = le, Nn.defaults = No, Nn.defaultsDeep = To, Nn.defer = Oo, Nn.delay = Io, Nn.difference = Yu, Nn.drop = Kr, Nn.dropRight = Vr, Nn.dropRightWhile = function (n, t, r) {
            return n && n.length ? Tt(n, br(t, r, 3), true, true) : []
        }, Nn.dropWhile = function (n, t, r) {
            return n && n.length ? Tt(n, br(t, r, 3), true) : []
        }, Nn.fill = function (n, t, r, e) {
            var u = n ? n.length : 0;
            if (!u)return [];
            for (r && typeof r != "number" && $r(n, t, r) && (r = 0, e = u), u = n.length, r = null == r ? 0 : +r || 0, 0 > r && (r = -r > u ? 0 : u + r), e = e === w || e > u ? u : +e || 0, 0 > e && (e += u), u = r > e ? 0 : e >>> 0, r >>>= 0; r < u;)n[r++] = t;
            return n
        }, Nn.filter = ue, Nn.flatten = function (n, t, r) {
            var e = n ? n.length : 0;
            return r && $r(n, t, r) && (t = false), e ? _t(n, t) : []
        }, Nn.flattenDeep = function (n) {
            return n && n.length ? _t(n, true) : []
        }, Nn.flow = Ro, Nn.flowRight = Eo, Nn.forEach = lo, Nn.forEachRight = so, Nn.forIn = Bo, Nn.forInRight = Do, Nn.forOwn = Mo, Nn.forOwnRight = qo, Nn.functions = Re,
            Nn.groupBy = po, Nn.indexBy = ho, Nn.initial = function (n) {
            return Vr(n, 1)
        }, Nn.intersection = Xu, Nn.invert = function (n, t, r) {
            r && $r(n, t, r) && (t = w), r = -1;
            for (var e = Ko(n), u = e.length, o = {}; ++r < u;) {
                var i = e[r], f = n[i];
                t ? eu.call(o, f) ? o[f].push(i) : o[f] = [i] : o[f] = i
            }
            return o
        }, Nn.invoke = _o, Nn.keys = Ko, Nn.keysIn = Ee, Nn.map = ie, Nn.mapKeys = Vo, Nn.mapValues = Zo, Nn.matches = Te, Nn.matchesProperty = function (n, t) {
            return jt(n, ft(t, true))
        }, Nn.memoize = se, Nn.merge = Fo, Nn.method = ei, Nn.methodOf = ui, Nn.mixin = Pe, Nn.modArgs = Co, Nn.negate = function (n) {
            if (typeof n != "function")throw new Xe(T);
            return function () {
                return !n.apply(this, arguments)
            }
        }, Nn.omit = Yo, Nn.once = function (n) {
            return ce(2, n)
        }, Nn.pairs = Ce, Nn.partial = So, Nn.partialRight = Uo, Nn.partition = vo, Nn.pick = Go, Nn.pluck = function (n, t) {
            return ie(n, Be(t))
        }, Nn.property = Be, Nn.propertyOf = function (n) {
            return function (t) {
                return mt(n, Mr(t), t + "")
            }
        }, Nn.pull = function () {
            var n = arguments, t = n[0];
            if (!t || !t.length)return t;
            for (var r = 0, e = jr(), u = n.length; ++r < u;)for (var o = 0, i = n[r]; -1 < (o = e(t, i, o));)vu.call(t, o, 1);
            return t
        }, Nn.pullAt = Hu, Nn.range = function (n, t, r) {
            r && $r(n, t, r) && (t = r = w), n = +n || 0, r = null == r ? 1 : +r || 0, null == t ? (t = n, n = 0) : t = +t || 0;
            var e = -1;
            t = ju(du((t - n) / (r || 1)), 0);
            for (var u = De(t); ++e < t;)u[e] = n, n += r;
            return u
        }, Nn.rearg = $o, Nn.reject = function (n, t, r) {
            var e = Wo(n) ? Zn : pt;
            return t = br(t, r, 3), e(n, function (n, r, e) {
                return !t(n, r, e)
            })
        }, Nn.remove = function (n, t, r) {
            var e = [];
            if (!n || !n.length)return e;
            var u = -1, o = [], i = n.length;
            for (t = br(t, r, 3); ++u < i;)r = n[u], t(r, u, n) && (e.push(r), o.push(u));
            return Rt(n, o), e
        }, Nn.rest = Jr, Nn.restParam = pe, Nn.set = function (n, t, r) {
            if (null == n)return n;
            var e = t + "";
            t = null != n[e] || Wr(t, n) ? [e] : Mr(t);
            for (var e = -1, u = t.length, o = u - 1, i = n; null != i && ++e < u;) {
                var f = t[e];
                de(i) && (e == o ? i[f] = r : null == i[f] && (i[f] = Ur(t[e + 1]) ? [] : {})), i = i[f]
            }
            return n
        }, Nn.shuffle = function (n) {
            return fe(n, Cu)
        }, Nn.slice = function (n, t, r) {
            var e = n ? n.length : 0;
            return e ? (r && typeof r != "number" && $r(n, t, r) && (t = 0, r = e), St(n, t, r)) : []
        }, Nn.sortBy = function (n, t, r) {
            if (null == n)return [];
            r && $r(n, t, r) && (t = w);
            var e = -1;
            return t = br(t, r, 3), n = bt(n, function (n, r, u) {
                return {a: t(n, r, u), b: ++e, c: n}
            }), $t(n, f)
        }, Nn.sortByAll = mo,
            Nn.sortByOrder = function (n, t, r, e) {
                return null == n ? [] : (e && $r(t, r, e) && (r = w), Wo(t) || (t = null == t ? [] : [t]), Wo(r) || (r = null == r ? [] : [r]), Wt(n, t, r))
            }, Nn.spread = function (n) {
            if (typeof n != "function")throw new Xe(T);
            return function (t) {
                return n.apply(this, t)
            }
        }, Nn.take = function (n, t, r) {
            return n && n.length ? ((r ? $r(n, t, r) : null == t) && (t = 1), St(n, 0, 0 > t ? 0 : t)) : []
        }, Nn.takeRight = function (n, t, r) {
            var e = n ? n.length : 0;
            return e ? ((r ? $r(n, t, r) : null == t) && (t = 1), t = e - (+t || 0), St(n, 0 > t ? 0 : t)) : []
        }, Nn.takeRightWhile = function (n, t, r) {
            return n && n.length ? Tt(n, br(t, r, 3), false, true) : [];
        }, Nn.takeWhile = function (n, t, r) {
            return n && n.length ? Tt(n, br(t, r, 3)) : []
        }, Nn.tap = function (n, t, r) {
            return t.call(r, n), n
        },Nn.throttle = function (n, t, r) {
            var e = true, u = true;
            if (typeof n != "function")throw new Xe(T);
            return false === r ? e = false : de(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), le(n, t, {
                leading: e,
                maxWait: +t,
                trailing: u
            })
        },Nn.thru = re,Nn.times = function (n, t, r) {
            if (n = wu(n), 1 > n || !bu(n))return [];
            var e = -1, u = De(ku(n, 4294967295));
            for (t = Dt(t, r, 1); ++e < n;)4294967295 > e ? u[e] = t(e) : t(e);
            return u
        },Nn.toArray = Oe,
            Nn.toPlainObject = Ie,Nn.transform = function (n, t, r, e) {
            var u = Wo(n) || je(n);
            return t = br(t, e, 4), null == r && (u || de(n) ? (e = n.constructor, r = u ? Wo(n) ? new e : [] : Pu(ye(e) ? e.prototype : w)) : r = {}), (u ? Kn : gt)(n, function (n, e, u) {
                return t(r, n, e, u)
            }), r
        },Nn.union = to,Nn.uniq = Xr,Nn.unzip = Hr,Nn.unzipWith = Qr,Nn.values = Se,Nn.valuesIn = function (n) {
            return Nt(n, Ee(n))
        },Nn.where = function (n, t) {
            return ue(n, At(t))
        },Nn.without = ro,Nn.wrap = function (n, t) {
            return t = null == t ? Ne : t, dr(t, I, w, [n], [])
        },Nn.xor = function () {
            for (var n = -1, t = arguments.length; ++n < t;) {
                var r = arguments[n];
                if (Sr(r))var e = e ? Hn(ct(e, r), ct(r, e)) : r
            }
            return e ? Lt(e) : []
        },Nn.zip = eo,Nn.zipObject = ne,Nn.zipWith = uo,Nn.backflow = Eo,Nn.collect = ie,Nn.compose = Eo,Nn.each = lo,Nn.eachRight = so,Nn.extend = Lo,Nn.iteratee = Le,Nn.methods = Re,Nn.object = ne,Nn.select = ue,Nn.tail = Jr,Nn.unique = Xr,Pe(Nn, Nn),Nn.add = function (n, t) {
            return (+n || 0) + (+t || 0)
        },Nn.attempt = ri,Nn.camelCase = Jo,Nn.capitalize = function (n) {
            return (n = u(n)) && n.charAt(0).toUpperCase() + n.slice(1)
        },Nn.ceil = oi,Nn.clone = function (n, t, r, e) {
            return t && typeof t != "boolean" && $r(n, t, r) ? t = false : typeof t == "function" && (e = r,
                r = t, t = false), typeof r == "function" ? ft(n, t, Dt(r, e, 3)) : ft(n, t)
        },Nn.cloneDeep = function (n, t, r) {
            return typeof t == "function" ? ft(n, true, Dt(t, r, 3)) : ft(n, true)
        },Nn.deburr = Ue,Nn.endsWith = function (n, t, r) {
            n = u(n), t += "";
            var e = n.length;
            return r = r === w ? e : ku(0 > r ? 0 : +r || 0, e), r -= t.length, 0 <= r && n.indexOf(t, r) == r
        },Nn.escape = function (n) {
            return (n = u(n)) && hn.test(n) ? n.replace(sn, c) : n
        },Nn.escapeRegExp = function (n) {
            return (n = u(n)) && xn.test(n) ? n.replace(wn, l) : n || "(?:)"
        },Nn.every = ee,Nn.find = ao,Nn.findIndex = Gu,Nn.findKey = Po,Nn.findLast = co,
            Nn.findLastIndex = Ju,Nn.findLastKey = zo,Nn.findWhere = function (n, t) {
            return ao(n, At(t))
        },Nn.first = Zr,Nn.floor = ii,Nn.get = function (n, t, r) {
            return n = null == n ? w : mt(n, Mr(t), t + ""), n === w ? r : n
        },Nn.gt = he,Nn.gte = function (n, t) {
            return n >= t
        },Nn.has = function (n, t) {
            if (null == n)return false;
            var r = eu.call(n, t);
            if (!r && !Wr(t)) {
                if (t = Mr(t), n = 1 == t.length ? n : mt(n, St(t, 0, -1)), null == n)return false;
                t = Gr(t), r = eu.call(n, t)
            }
            return r || Lr(n.length) && Ur(t, n.length) && (Wo(n) || _e(n) || Ae(n))
        },Nn.identity = Ne,Nn.includes = oe,Nn.indexOf = Yr,Nn.inRange = function (n, t, r) {
            return t = +t || 0, r === w ? (r = t, t = 0) : r = +r || 0, n >= ku(t, r) && n < ju(t, r)
        },Nn.isArguments = _e,Nn.isArray = Wo,Nn.isBoolean = function (n) {
            return true === n || false === n || h(n) && ou.call(n) == D
        },Nn.isDate = function (n) {
            return h(n) && ou.call(n) == M
        },Nn.isElement = function (n) {
            return !!n && 1 === n.nodeType && h(n) && !xe(n)
        },Nn.isEmpty = function (n) {
            return null == n ? true : Sr(n) && (Wo(n) || Ae(n) || _e(n) || h(n) && ye(n.splice)) ? !n.length : !Ko(n).length
        },Nn.isEqual = ve,Nn.isError = ge,Nn.isFinite = function (n) {
            return typeof n == "number" && bu(n)
        },Nn.isFunction = ye,Nn.isMatch = function (n, t, r, e) {
            return r = typeof r == "function" ? Dt(r, e, 3) : w, xt(n, kr(t), r)
        },Nn.isNaN = function (n) {
            return we(n) && n != +n
        },Nn.isNative = me,Nn.isNull = function (n) {
            return null === n
        },Nn.isNumber = we,Nn.isObject = de,Nn.isPlainObject = xe,Nn.isRegExp = be,Nn.isString = Ae,Nn.isTypedArray = je,Nn.isUndefined = function (n) {
            return n === w
        },Nn.kebabCase = Xo,Nn.last = Gr,Nn.lastIndexOf = function (n, t, r) {
            var e = n ? n.length : 0;
            if (!e)return -1;
            var u = e;
            if (typeof r == "number")u = (0 > r ? ju(e + r, 0) : ku(r || 0, e - 1)) + 1; else if (r)return u = zt(n, t, true) - 1, n = n[u], (t === t ? t === n : n !== n) ? u : -1;
            if (t !== t)return p(n, u, true);
            for (; u--;)if (n[u] === t)return u;
            return -1
        },Nn.lt = ke,Nn.lte = function (n, t) {
            return n <= t
        },Nn.max = fi,Nn.min = ai,Nn.noConflict = function () {
            return Yn._ = iu, this
        },Nn.noop = ze,Nn.now = wo,Nn.pad = function (n, t, r) {
            n = u(n), t = +t;
            var e = n.length;
            return e < t && bu(t) ? (e = (t - e) / 2, t = wu(e), e = du(e), r = _r("", e, r), r.slice(0, t) + n + r) : n
        },Nn.padLeft = Ho,Nn.padRight = Qo,Nn.parseInt = function (n, t, r) {
            return (r ? $r(n, t, r) : null == t) ? t = 0 : t && (t = +t), n = We(n), Iu(n, t || (On.test(n) ? 16 : 10))
        },Nn.random = function (n, t, r) {
            r && $r(n, t, r) && (t = r = w);
            var e = null == n, u = null == t;
            return null == r && (u && typeof n == "boolean" ? (r = n, n = 1) : typeof t == "boolean" && (r = t, u = true)), e && u && (t = 1, u = false), n = +n || 0, u ? (t = n, n = 0) : t = +t || 0, r || n % 1 || t % 1 ? (r = Ru(), ku(n + r * (t - n + lu("1e-" + ((r + "").length - 1))), t)) : Et(n, t)
        },Nn.reduce = go,Nn.reduceRight = yo,Nn.repeat = $e,Nn.result = function (n, t, r) {
            var e = null == n ? w : Dr(n)[t];
            return e === w && (null == n || Wr(t, n) || (t = Mr(t), n = 1 == t.length ? n : mt(n, St(t, 0, -1)), e = null == n ? w : Dr(n)[Gr(t)]), e = e === w ? r : e), ye(e) ? e.call(n) : e
        },Nn.round = ci,Nn.runInContext = m,Nn.size = function (n) {
            var t = n ? Vu(n) : 0;
            return Lr(t) ? t : Ko(n).length
        },Nn.snakeCase = ni,Nn.some = ae,Nn.sortedIndex = Qu,Nn.sortedLastIndex = no,Nn.startCase = ti,Nn.startsWith = function (n, t, r) {
            return n = u(n), r = null == r ? 0 : ku(0 > r ? 0 : +r || 0, n.length), n.lastIndexOf(t, r) == r
        },Nn.sum = function (n, t, r) {
            if (r && $r(n, t, r) && (t = w), t = br(t, r, 3), 1 == t.length) {
                n = Wo(n) ? n : Br(n), r = n.length;
                for (var e = 0; r--;)e += +t(n[r]) || 0;
                n = e
            } else n = Ft(n, t);
            return n
        },Nn.template = function (n, t, r) {
            var e = Nn.templateSettings;
            r && $r(n, t, r) && (t = r = w), n = u(n), t = rt(et({}, r || t), e, tt), r = rt(et({}, t.imports), e.imports, tt);
            var o, i, f = Ko(r), a = Nt(r, f), c = 0;
            r = t.interpolate || Cn;
            var l = "__p+='";
            r = Ge((t.escape || Cn).source + "|" + r.source + "|" + (r === gn ? jn : Cn).source + "|" + (t.evaluate || Cn).source + "|$", "g");
            var p = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
            if (n.replace(r, function (t, r, e, u, f, a) {
                    return e || (e = u), l += n.slice(c, a).replace(Sn, s), r && (o = true, l += "'+__e(" + r + ")+'"), f && (i = true, l += "';" + f + ";\n__p+='"), e && (l += "'+((__t=(" + e + "))==null?'':__t)+'"), c = a + t.length, t
                }), l += "';", (t = t.variable) || (l = "with(obj){" + l + "}"), l = (i ? l.replace(fn, "") : l).replace(an, "$1").replace(cn, "$1;"),
                    l = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (o ? ",__e=_.escape" : "") + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + l + "return __p}", t = ri(function () {
                    return Ke(f, p + "return " + l).apply(w, a)
                }), t.source = l, ge(t))throw t;
            return t
        },Nn.trim = We,Nn.trimLeft = function (n, t, r) {
            var e = n;
            return (n = u(n)) ? n.slice((r ? $r(e, t, r) : null == t) ? g(n) : o(n, t + "")) : n
        },Nn.trimRight = function (n, t, r) {
            var e = n;
            return (n = u(n)) ? (r ? $r(e, t, r) : null == t) ? n.slice(0, y(n) + 1) : n.slice(0, i(n, t + "") + 1) : n;
        },Nn.trunc = function (n, t, r) {
            r && $r(n, t, r) && (t = w);
            var e = S;
            if (r = U, null != t)if (de(t)) {
                var o = "separator" in t ? t.separator : o, e = "length" in t ? +t.length || 0 : e;
                r = "omission" in t ? u(t.omission) : r
            } else e = +t || 0;
            if (n = u(n), e >= n.length)return n;
            if (e -= r.length, 1 > e)return r;
            if (t = n.slice(0, e), null == o)return t + r;
            if (be(o)) {
                if (n.slice(e).search(o)) {
                    var i, f = n.slice(0, e);
                    for (o.global || (o = Ge(o.source, (kn.exec(o) || "") + "g")), o.lastIndex = 0; n = o.exec(f);)i = n.index;
                    t = t.slice(0, null == i ? e : i)
                }
            } else n.indexOf(o, e) != e && (o = t.lastIndexOf(o),
            -1 < o && (t = t.slice(0, o)));
            return t + r
        },Nn.unescape = function (n) {
            return (n = u(n)) && pn.test(n) ? n.replace(ln, d) : n
        },Nn.uniqueId = function (n) {
            var t = ++uu;
            return u(n) + t
        },Nn.words = Fe,Nn.all = ee,Nn.any = ae,Nn.contains = oe,Nn.eq = ve,Nn.detect = ao,Nn.foldl = go,Nn.foldr = yo,Nn.head = Zr,Nn.include = oe,Nn.inject = go,Pe(Nn, function () {
            var n = {};
            return gt(Nn, function (t, r) {
                Nn.prototype[r] || (n[r] = t)
            }), n
        }(), false),Nn.sample = fe,Nn.prototype.sample = function (n) {
            return this.__chain__ || null != n ? this.thru(function (t) {
                return fe(t, n)
            }) : fe(this.value());
        },Nn.VERSION = x,Kn("bind bindKey curry curryRight partial partialRight".split(" "), function (n) {
            Nn[n].placeholder = Nn
        }),Kn(["drop", "take"], function (n, t) {
            zn.prototype[n] = function (r) {
                var e = this.__filtered__;
                if (e && !t)return new zn(this);
                r = null == r ? 1 : ju(wu(r) || 0, 0);
                var u = this.clone();
                return e ? u.__takeCount__ = ku(u.__takeCount__, r) : u.__views__.push({
                    size: r,
                    type: n + (0 > u.__dir__ ? "Right" : "")
                }), u
            }, zn.prototype[n + "Right"] = function (t) {
                return this.reverse()[n](t).reverse()
            }
        }),Kn(["filter", "map", "takeWhile"], function (n, t) {
            var r = t + 1, e = r != N;
            zn.prototype[n] = function (n, t) {
                var u = this.clone();
                return u.__iteratees__.push({iteratee: br(n, t, 1), type: r}), u.__filtered__ = u.__filtered__ || e, u
            }
        }),Kn(["first", "last"], function (n, t) {
            var r = "take" + (t ? "Right" : "");
            zn.prototype[n] = function () {
                return this[r](1).value()[0]
            }
        }),Kn(["initial", "rest"], function (n, t) {
            var r = "drop" + (t ? "" : "Right");
            zn.prototype[n] = function () {
                return this.__filtered__ ? new zn(this) : this[r](1)
            }
        }),Kn(["pluck", "where"], function (n, t) {
            var r = t ? "filter" : "map", e = t ? At : Be;
            zn.prototype[n] = function (n) {
                return this[r](e(n))
            }
        }),zn.prototype.compact = function () {
            return this.filter(Ne)
        },zn.prototype.reject = function (n, t) {
            return n = br(n, t, 1), this.filter(function (t) {
                return !n(t)
            })
        },zn.prototype.slice = function (n, t) {
            n = null == n ? 0 : +n || 0;
            var r = this;
            return r.__filtered__ && (0 < n || 0 > t) ? new zn(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== w && (t = +t || 0, r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r)
        },zn.prototype.takeRightWhile = function (n, t) {
            return this.reverse().takeWhile(n, t).reverse()
        },zn.prototype.toArray = function () {
            return this.take(Cu);
        },gt(zn.prototype, function (n, t) {
            var r = /^(?:filter|map|reject)|While$/.test(t), e = /^(?:first|last)$/.test(t), u = Nn[e ? "take" + ("last" == t ? "Right" : "") : t];
            u && (Nn.prototype[t] = function () {
                var t = e ? [1] : arguments, o = this.__chain__, i = this.__wrapped__, f = !!this.__actions__.length, a = i instanceof zn, c = t[0], l = a || Wo(i);
                l && r && typeof c == "function" && 1 != c.length && (a = l = false);
                var s = function (n) {
                    return e && o ? u(n, 1)[0] : u.apply(w, Hn([n], t))
                }, c = {func: re, args: [s], thisArg: w}, f = a && !f;
                return e && !o ? f ? (i = i.clone(), i.__actions__.push(c),
                    n.call(i)) : u.call(w, this.value())[0] : !e && l ? (i = f ? i : new zn(this), i = n.apply(i, t), i.__actions__.push(c), new Pn(i, o)) : this.thru(s)
            })
        }),Kn("join pop push replace shift sort splice split unshift".split(" "), function (n) {
            var t = (/^(?:replace|split)$/.test(n) ? tu : He)[n], r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", e = !Tu.spliceObjects && /^(?:pop|shift|splice)$/.test(n), u = /^(?:join|pop|replace|shift)$/.test(n), o = e ? function () {
                var n = t.apply(this, arguments);
                return 0 === this.length && delete this[0], n
            } : t;
            Nn.prototype[n] = function () {
                var n = arguments;
                return u && !this.__chain__ ? o.apply(this.value(), n) : this[r](function (t) {
                    return o.apply(t, n)
                })
            }
        }),gt(zn.prototype, function (n, t) {
            var r = Nn[t];
            if (r) {
                var e = r.name + "";
                (Fu[e] || (Fu[e] = [])).push({name: t, func: r})
            }
        }),Fu[hr(w, A).name] = [{name: "wrapper", func: w}],zn.prototype.clone = function () {
            var n = new zn(this.__wrapped__);
            return n.__actions__ = qn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = qn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = qn(this.__views__),
                n
        },zn.prototype.reverse = function () {
            if (this.__filtered__) {
                var n = new zn(this);
                n.__dir__ = -1, n.__filtered__ = true
            } else n = this.clone(), n.__dir__ *= -1;
            return n
        },zn.prototype.value = function () {
            var n, t = this.__wrapped__.value(), r = this.__dir__, e = Wo(t), u = 0 > r, o = e ? t.length : 0;
            n = 0;
            for (var i = o, f = this.__views__, a = -1, c = f.length; ++a < c;) {
                var l = f[a], s = l.size;
                switch (l.type) {
                    case"drop":
                        n += s;
                        break;
                    case"dropRight":
                        i -= s;
                        break;
                    case"take":
                        i = ku(i, n + s);
                        break;
                    case"takeRight":
                        n = ju(n, i - s)
                }
            }
            if (n = {start: n, end: i}, i = n.start, f = n.end, n = f - i,
                    u = u ? f : i - 1, i = this.__iteratees__, f = i.length, a = 0, c = ku(n, this.__takeCount__), !e || o < F || o == n && c == n)return Pt(t, this.__actions__);
            e = [];
            n:for (; n-- && a < c;) {
                for (u += r, o = -1, l = t[u]; ++o < f;) {
                    var p = i[o], s = p.type, p = p.iteratee(l);
                    if (s == N)l = p; else if (!p) {
                        if (s == L)continue n;
                        break n
                    }
                }
                e[a++] = l
            }
            return e
        },Nn.prototype.chain = function () {
            return te(this)
        },Nn.prototype.commit = function () {
            return new Pn(this.value(), this.__chain__)
        },Nn.prototype.concat = oo,Nn.prototype.plant = function (n) {
            for (var t, r = this; r instanceof Tn;) {
                var e = qr(r);
                t ? u.__wrapped__ = e : t = e;
                var u = e, r = r.__wrapped__
            }
            return u.__wrapped__ = n, t
        },Nn.prototype.reverse = function () {
            var n = this.__wrapped__, t = function (n) {
                return n.reverse()
            };
            return n instanceof zn ? (this.__actions__.length && (n = new zn(this)), n = n.reverse(), n.__actions__.push({
                func: re,
                args: [t],
                thisArg: w
            }), new Pn(n, this.__chain__)) : this.thru(t)
        },Nn.prototype.toString = function () {
            return this.value() + ""
        },Nn.prototype.run = Nn.prototype.toJSON = Nn.prototype.valueOf = Nn.prototype.value = function () {
            return Pt(this.__wrapped__, this.__actions__);
        },Nn.prototype.collect = Nn.prototype.map,Nn.prototype.head = Nn.prototype.first,Nn.prototype.select = Nn.prototype.filter,Nn.prototype.tail = Nn.prototype.rest,Nn
    }

    var w, x = "3.10.1", b = 1, A = 2, j = 4, k = 8, O = 16, I = 32, R = 64, E = 128, C = 256, S = 30, U = "...", $ = 150, W = 16, F = 200, L = 1, N = 2, T = "Expected a function", P = "__lodash_placeholder__", z = "[object Arguments]", B = "[object Array]", D = "[object Boolean]", M = "[object Date]", q = "[object Error]", K = "[object Function]", V = "[object Number]", Z = "[object Object]", Y = "[object RegExp]", G = "[object String]", J = "[object ArrayBuffer]", X = "[object Float32Array]", H = "[object Float64Array]", Q = "[object Int8Array]", nn = "[object Int16Array]", tn = "[object Int32Array]", rn = "[object Uint8Array]", en = "[object Uint8ClampedArray]", un = "[object Uint16Array]", on = "[object Uint32Array]", fn = /\b__p\+='';/g, an = /\b(__p\+=)''\+/g, cn = /(__e\(.*?\)|\b__t\))\+'';/g, ln = /&(?:amp|lt|gt|quot|#39|#96);/g, sn = /[&<>"'`]/g, pn = RegExp(ln.source), hn = RegExp(sn.source), _n = /<%-([\s\S]+?)%>/g, vn = /<%([\s\S]+?)%>/g, gn = /<%=([\s\S]+?)%>/g, yn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/, dn = /^\w*$/, mn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g, wn = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g, xn = RegExp(wn.source), bn = /[\u0300-\u036f\ufe20-\ufe23]/g, An = /\\(\\)?/g, jn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, kn = /\w*$/, On = /^0[xX]/, In = /^\[object .+?Constructor\]$/, Rn = /^\d+$/, En = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, Cn = /($^)/, Sn = /['\n\r\u2028\u2029\\]/g, Un = RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+", "g"), $n = "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "), Wn = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Fn = {};
    Fn[X] = Fn[H] = Fn[Q] = Fn[nn] = Fn[tn] = Fn[rn] = Fn[en] = Fn[un] = Fn[on] = true, Fn[z] = Fn[B] = Fn[J] = Fn[D] = Fn[M] = Fn[q] = Fn[K] = Fn["[object Map]"] = Fn[V] = Fn[Z] = Fn[Y] = Fn["[object Set]"] = Fn[G] = Fn["[object WeakMap]"] = false;
    var Ln = {};
    Ln[z] = Ln[B] = Ln[J] = Ln[D] = Ln[M] = Ln[X] = Ln[H] = Ln[Q] = Ln[nn] = Ln[tn] = Ln[V] = Ln[Z] = Ln[Y] = Ln[G] = Ln[rn] = Ln[en] = Ln[un] = Ln[on] = true, Ln[q] = Ln[K] = Ln["[object Map]"] = Ln["[object Set]"] = Ln["[object WeakMap]"] = false;
    var Nn = {
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\xc3": "A",
        "\xc4": "A",
        "\xc5": "A",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\xe3": "a",
        "\xe4": "a",
        "\xe5": "a",
        "\xc7": "C",
        "\xe7": "c",
        "\xd0": "D",
        "\xf0": "d",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\xcb": "E",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\xeb": "e",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\xcf": "I",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\xef": "i",
        "\xd1": "N",
        "\xf1": "n",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\xd5": "O",
        "\xd6": "O",
        "\xd8": "O",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\xf5": "o",
        "\xf6": "o",
        "\xf8": "o",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\xdc": "U",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\xfc": "u",
        "\xdd": "Y",
        "\xfd": "y",
        "\xff": "y",
        "\xc6": "Ae",
        "\xe6": "ae",
        "\xde": "Th",
        "\xfe": "th",
        "\xdf": "ss"
    }, Tn = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;"}, Pn = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
        "&#96;": "`"
    }, zn = {"function": true, object: true}, Bn = {
        0: "x30",
        1: "x31",
        2: "x32",
        3: "x33",
        4: "x34",
        5: "x35",
        6: "x36",
        7: "x37",
        8: "x38",
        9: "x39",
        A: "x41",
        B: "x42",
        C: "x43",
        D: "x44",
        E: "x45",
        F: "x46",
        a: "x61",
        b: "x62",
        c: "x63",
        d: "x64",
        e: "x65",
        f: "x66",
        n: "x6e",
        r: "x72",
        t: "x74",
        u: "x75",
        v: "x76",
        x: "x78"
    }, Dn = {
        "\\": "\\",
        "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"
    }, Mn = zn[typeof exports] && exports && !exports.nodeType && exports, qn = zn[typeof module] && module && !module.nodeType && module, Kn = zn[typeof self] && self && self.Object && self, Vn = zn[typeof window] && window && window.Object && window, Zn = qn && qn.exports === Mn && Mn, Yn = Mn && qn && typeof global == "object" && global && global.Object && global || Vn !== (this && this.window) && Vn || Kn || this, Gn = function () {
        try {
            Object({toString: 0} + "")
        } catch (n) {
            return function () {
                return false
            }
        }
        return function (n) {
            return typeof n.toString != "function" && typeof(n + "") == "string"
        }
    }(), Jn = m();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (Yn._ = Jn, define('lodash', [], function () {
        return Jn
    })) : Mn && qn ? Zn ? (qn.exports = Jn)._ = Jn : Mn._ = Jn : Yn._ = Jn
}).call(this);
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function () {
    function n(n) {
        function t(t, r, e, u, i, o) {
            for (; i >= 0 && o > i; i += n) {
                var a = u ? u[i] : i;
                e = r(e, t[a], a, t)
            }
            return e
        }

        return function (r, e, u, i) {
            e = b(e, i, 4);
            var o = !k(r) && m.keys(r), a = (o || r).length, c = n > 0 ? 0 : a - 1;
            return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a)
        }
    }

    function t(n) {
        return function (t, r, e) {
            r = x(r, e);
            for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)if (r(t[i], i, t))return i;
            return -1
        }
    }

    function r(n, t, r) {
        return function (e, u, i) {
            var o = 0, a = O(e);
            if ("number" == typeof i)n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1; else if (r && i && a)return i = r(e, u), e[i] === u ? i : -1;
            if (u !== u)return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1;
            for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)if (e[i] === u)return i;
            return -1
        }
    }

    function e(n, t) {
        var r = I.length, e = n.constructor, u = m.isFunction(e) && e.prototype || a, i = "constructor";
        for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;)i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
    }

    var u = this, i = u._, o = Array.prototype, a = Object.prototype, c = Function.prototype, f = o.push, l = o.slice, s = a.toString, p = a.hasOwnProperty, h = Array.isArray, v = Object.keys, g = c.bind, y = Object.create, d = function () {
    }, m = function (n) {
        return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3";
    var b = function (n, t, r) {
        if (t === void 0)return n;
        switch (null == r ? 3 : r) {
            case 1:
                return function (r) {
                    return n.call(t, r)
                };
            case 2:
                return function (r, e) {
                    return n.call(t, r, e)
                };
            case 3:
                return function (r, e, u) {
                    return n.call(t, r, e, u)
                };
            case 4:
                return function (r, e, u, i) {
                    return n.call(t, r, e, u, i)
                }
        }
        return function () {
            return n.apply(t, arguments)
        }
    }, x = function (n, t, r) {
        return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
    };
    m.iteratee = function (n, t) {
        return x(n, t, 1 / 0)
    };
    var _ = function (n, t) {
        return function (r) {
            var e = arguments.length;
            if (2 > e || null == r)return r;
            for (var u = 1; e > u; u++)for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                var f = o[c];
                t && r[f] !== void 0 || (r[f] = i[f])
            }
            return r
        }
    }, j = function (n) {
        if (!m.isObject(n))return {};
        if (y)return y(n);
        d.prototype = n;
        var t = new d;
        return d.prototype = null, t
    }, w = function (n) {
        return function (t) {
            return null == t ? void 0 : t[n]
        }
    }, A = Math.pow(2, 53) - 1, O = w("length"), k = function (n) {
        var t = O(n);
        return "number" == typeof t && t >= 0 && A >= t
    };
    m.each = m.forEach = function (n, t, r) {
        t = b(t, r);
        var e, u;
        if (k(n))for (e = 0, u = n.length; u > e; e++)t(n[e], e, n); else {
            var i = m.keys(n);
            for (e = 0, u = i.length; u > e; e++)t(n[i[e]], i[e], n)
        }
        return n
    }, m.map = m.collect = function (n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
            var a = e ? e[o] : o;
            i[o] = t(n[a], a, n)
        }
        return i
    }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function (n, t, r) {
        var e;
        return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0
    }, m.filter = m.select = function (n, t, r) {
        var e = [];
        return t = x(t, r), m.each(n, function (n, r, u) {
            t(n, r, u) && e.push(n)
        }), e
    }, m.reject = function (n, t, r) {
        return m.filter(n, m.negate(x(t)), r)
    }, m.every = m.all = function (n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (!t(n[o], o, n))return !1
        }
        return !0
    }, m.some = m.any = function (n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (t(n[o], o, n))return !0
        }
        return !1
    }, m.contains = m.includes = m.include = function (n, t, r, e) {
        return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0
    }, m.invoke = function (n, t) {
        var r = l.call(arguments, 2), e = m.isFunction(t);
        return m.map(n, function (n) {
            var u = e ? t : n[t];
            return null == u ? u : u.apply(n, r)
        })
    }, m.pluck = function (n, t) {
        return m.map(n, m.property(t))
    }, m.where = function (n, t) {
        return m.filter(n, m.matcher(t))
    }, m.findWhere = function (n, t) {
        return m.find(n, m.matcher(t))
    }, m.max = function (n, t, r) {
        var e, u, i = -1 / 0, o = -1 / 0;
        if (null == t && null != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++)e = n[a], e > i && (i = e)
        } else t = x(t, r), m.each(n, function (n, r, e) {
            u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
        });
        return i
    }, m.min = function (n, t, r) {
        var e, u, i = 1 / 0, o = 1 / 0;
        if (null == t && null != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++)e = n[a], i > e && (i = e)
        } else t = x(t, r), m.each(n, function (n, r, e) {
            u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u)
        });
        return i
    }, m.shuffle = function (n) {
        for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i];
        return u
    }, m.sample = function (n, t, r) {
        return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
    }, m.sortBy = function (n, t, r) {
        return t = x(t, r), m.pluck(m.map(n, function (n, r, e) {
            return {value: n, index: r, criteria: t(n, r, e)}
        }).sort(function (n, t) {
            var r = n.criteria, e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0)return 1;
                if (e > r || e === void 0)return -1
            }
            return n.index - t.index
        }), "value")
    };
    var F = function (n) {
        return function (t, r, e) {
            var u = {};
            return r = x(r, e), m.each(t, function (e, i) {
                var o = r(e, i, t);
                n(u, e, o)
            }), u
        }
    };
    m.groupBy = F(function (n, t, r) {
        m.has(n, r) ? n[r].push(t) : n[r] = [t]
    }), m.indexBy = F(function (n, t, r) {
        n[r] = t
    }), m.countBy = F(function (n, t, r) {
        m.has(n, r) ? n[r]++ : n[r] = 1
    }), m.toArray = function (n) {
        return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
    }, m.size = function (n) {
        return null == n ? 0 : k(n) ? n.length : m.keys(n).length
    }, m.partition = function (n, t, r) {
        t = x(t, r);
        var e = [], u = [];
        return m.each(n, function (n, r, i) {
            (t(n, r, i) ? e : u).push(n)
        }), [e, u]
    }, m.first = m.head = m.take = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
    }, m.initial = function (n, t, r) {
        return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
    }, m.last = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
    }, m.rest = m.tail = m.drop = function (n, t, r) {
        return l.call(n, null == t || r ? 1 : t)
    }, m.compact = function (n) {
        return m.filter(n, m.identity)
    };
    var S = function (n, t, r, e) {
        for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
            var c = n[o];
            if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                t || (c = S(c, t, r));
                var f = 0, l = c.length;
                for (u.length += l; l > f;)u[i++] = c[f++]
            } else r || (u[i++] = c)
        }
        return u
    };
    m.flatten = function (n, t) {
        return S(n, t, !1)
    }, m.without = function (n) {
        return m.difference(n, l.call(arguments, 1))
    }, m.uniq = m.unique = function (n, t, r, e) {
        m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = x(r, e));
        for (var u = [], i = [], o = 0, a = O(n); a > o; o++) {
            var c = n[o], f = r ? r(c, o, n) : c;
            t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c)
        }
        return u
    }, m.union = function () {
        return m.uniq(S(arguments, !0, !0))
    }, m.intersection = function (n) {
        for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++) {
            var i = n[e];
            if (!m.contains(t, i)) {
                for (var o = 1; r > o && m.contains(arguments[o], i); o++);
                o === r && t.push(i)
            }
        }
        return t
    }, m.difference = function (n) {
        var t = S(arguments, !0, !0, 1);
        return m.filter(n, function (n) {
            return !m.contains(t, n)
        })
    }, m.zip = function () {
        return m.unzip(arguments)
    }, m.unzip = function (n) {
        for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++)r[e] = m.pluck(n, e);
        return r
    }, m.object = function (n, t) {
        for (var r = {}, e = 0, u = O(n); u > e; e++)t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function (n, t, r, e) {
        r = x(r, e, 1);
        for (var u = r(t), i = 0, o = O(n); o > i;) {
            var a = Math.floor((i + o) / 2);
            r(n[a]) < u ? i = a + 1 : o = a
        }
        return i
    }, m.indexOf = r(1, m.findIndex, m.sortedIndex), m.lastIndexOf = r(-1, m.findLastIndex), m.range = function (n, t, r) {
        null == t && (t = n || 0, n = 0), r = r || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r)u[i] = n;
        return u
    };
    var E = function (n, t, r, e, u) {
        if (!(e instanceof t))return n.apply(r, u);
        var i = j(n.prototype), o = n.apply(i, u);
        return m.isObject(o) ? o : i
    };
    m.bind = function (n, t) {
        if (g && n.bind === g)return g.apply(n, l.call(arguments, 1));
        if (!m.isFunction(n))throw new TypeError("Bind must be called on a function");
        var r = l.call(arguments, 2), e = function () {
            return E(n, e, t, this, r.concat(l.call(arguments)))
        };
        return e
    }, m.partial = function (n) {
        var t = l.call(arguments, 1), r = function () {
            for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++)i[o] = t[o] === m ? arguments[e++] : t[o];
            for (; e < arguments.length;)i.push(arguments[e++]);
            return E(n, r, this, this, i)
        };
        return r
    }, m.bindAll = function (n) {
        var t, r, e = arguments.length;
        if (1 >= e)throw new Error("bindAll must be passed function names");
        for (t = 1; e > t; t++)r = arguments[t], n[r] = m.bind(n[r], n);
        return n
    }, m.memoize = function (n, t) {
        var r = function (e) {
            var u = r.cache, i = "" + (t ? t.apply(this, arguments) : e);
            return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
        };
        return r.cache = {}, r
    }, m.delay = function (n, t) {
        var r = l.call(arguments, 2);
        return setTimeout(function () {
            return n.apply(null, r)
        }, t)
    }, m.defer = m.partial(m.delay, m, 1), m.throttle = function (n, t, r) {
        var e, u, i, o = null, a = 0;
        r || (r = {});
        var c = function () {
            a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null)
        };
        return function () {
            var f = m.now();
            a || r.leading !== !1 || (a = f);
            var l = t - (f - a);
            return e = this, u = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i
        }
    }, m.debounce = function (n, t, r) {
        var e, u, i, o, a, c = function () {
            var f = m.now() - o;
            t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null)))
        };
        return function () {
            i = this, u = arguments, o = m.now();
            var f = r && !e;
            return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a
        }
    }, m.wrap = function (n, t) {
        return m.partial(t, n)
    }, m.negate = function (n) {
        return function () {
            return !n.apply(this, arguments)
        }
    }, m.compose = function () {
        var n = arguments, t = n.length - 1;
        return function () {
            for (var r = t, e = n[t].apply(this, arguments); r--;)e = n[r].call(this, e);
            return e
        }
    }, m.after = function (n, t) {
        return function () {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }, m.before = function (n, t) {
        var r;
        return function () {
            return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r
        }
    }, m.once = m.partial(m.before, 2);
    var M = !{toString: null}.propertyIsEnumerable("toString"), I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    m.keys = function (n) {
        if (!m.isObject(n))return [];
        if (v)return v(n);
        var t = [];
        for (var r in n)m.has(n, r) && t.push(r);
        return M && e(n, t), t
    }, m.allKeys = function (n) {
        if (!m.isObject(n))return [];
        var t = [];
        for (var r in n)t.push(r);
        return M && e(n, t), t
    }, m.values = function (n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)e[u] = n[t[u]];
        return e
    }, m.mapObject = function (n, t, r) {
        t = x(t, r);
        for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++)e = u[a], o[e] = t(n[e], e, n);
        return o
    }, m.pairs = function (n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)e[u] = [t[u], n[t[u]]];
        return e
    }, m.invert = function (n) {
        for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++)t[n[r[e]]] = r[e];
        return t
    }, m.functions = m.methods = function (n) {
        var t = [];
        for (var r in n)m.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function (n, t, r) {
        t = x(t, r);
        for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)if (e = u[i], t(n[e], e, n))return e
    }, m.pick = function (n, t, r) {
        var e, u, i = {}, o = n;
        if (null == o)return i;
        m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function (n, t, r) {
            return t in r
        }, o = Object(o));
        for (var a = 0, c = u.length; c > a; a++) {
            var f = u[a], l = o[f];
            e(l, f, o) && (i[f] = l)
        }
        return i
    }, m.omit = function (n, t, r) {
        if (m.isFunction(t))t = m.negate(t); else {
            var e = m.map(S(arguments, !1, !1, 1), String);
            t = function (n, t) {
                return !m.contains(e, t)
            }
        }
        return m.pick(n, t, r)
    }, m.defaults = _(m.allKeys, !0), m.create = function (n, t) {
        var r = j(n);
        return t && m.extendOwn(r, t), r
    }, m.clone = function (n) {
        return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
    }, m.tap = function (n, t) {
        return t(n), n
    }, m.isMatch = function (n, t) {
        var r = m.keys(t), e = r.length;
        if (null == n)return !e;
        for (var u = Object(n), i = 0; e > i; i++) {
            var o = r[i];
            if (t[o] !== u[o] || !(o in u))return !1
        }
        return !0
    };
    var N = function (n, t, r, e) {
        if (n === t)return 0 !== n || 1 / n === 1 / t;
        if (null == n || null == t)return n === t;
        n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
        var u = s.call(n);
        if (u !== s.call(t))return !1;
        switch (u) {
            case"[object RegExp]":
            case"[object String]":
                return "" + n == "" + t;
            case"[object Number]":
                return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
            case"[object Date]":
            case"[object Boolean]":
                return +n === +t
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof t)return !1;
            var o = n.constructor, a = t.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t)return !1
        }
        r = r || [], e = e || [];
        for (var c = r.length; c--;)if (r[c] === n)return e[c] === t;
        if (r.push(n), e.push(t), i) {
            if (c = n.length, c !== t.length)return !1;
            for (; c--;)if (!N(n[c], t[c], r, e))return !1
        } else {
            var f, l = m.keys(n);
            if (c = l.length, m.keys(t).length !== c)return !1;
            for (; c--;)if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e))return !1
        }
        return r.pop(), e.pop(), !0
    };
    m.isEqual = function (n, t) {
        return N(n, t)
    }, m.isEmpty = function (n) {
        return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length
    }, m.isElement = function (n) {
        return !(!n || 1 !== n.nodeType)
    }, m.isArray = h || function (n) {
            return "[object Array]" === s.call(n)
        }, m.isObject = function (n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n
    }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (n) {
        m["is" + n] = function (t) {
            return s.call(t) === "[object " + n + "]"
        }
    }), m.isArguments(arguments) || (m.isArguments = function (n) {
        return m.has(n, "callee")
    }), "function" != typeof/./ && "object" != typeof Int8Array && (m.isFunction = function (n) {
        return "function" == typeof n || !1
    }), m.isFinite = function (n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, m.isNaN = function (n) {
        return m.isNumber(n) && n !== +n
    }, m.isBoolean = function (n) {
        return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
    }, m.isNull = function (n) {
        return null === n
    }, m.isUndefined = function (n) {
        return n === void 0
    }, m.has = function (n, t) {
        return null != n && p.call(n, t)
    }, m.noConflict = function () {
        return u._ = i, this
    }, m.identity = function (n) {
        return n
    }, m.constant = function (n) {
        return function () {
            return n
        }
    }, m.noop = function () {
    }, m.property = w, m.propertyOf = function (n) {
        return null == n ? function () {
        } : function (t) {
            return n[t]
        }
    }, m.matcher = m.matches = function (n) {
        return n = m.extendOwn({}, n), function (t) {
            return m.isMatch(t, n)
        }
    }, m.times = function (n, t, r) {
        var e = Array(Math.max(0, n));
        t = b(t, r, 1);
        for (var u = 0; n > u; u++)e[u] = t(u);
        return e
    }, m.random = function (n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    }, m.now = Date.now || function () {
            return (new Date).getTime()
        };
    var B = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, T = m.invert(B), R = function (n) {
        var t = function (t) {
            return n[t]
        }, r = "(?:" + m.keys(n).join("|") + ")", e = RegExp(r), u = RegExp(r, "g");
        return function (n) {
            return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
        }
    };
    m.escape = R(B), m.unescape = R(T), m.result = function (n, t, r) {
        var e = null == n ? void 0 : n[t];
        return e === void 0 && (e = r), m.isFunction(e) ? e.call(n) : e
    };
    var q = 0;
    m.uniqueId = function (n) {
        var t = ++q + "";
        return n ? n + t : t
    }, m.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var K = /(.)^/, z = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, D = /\\|'|\r|\n|\u2028|\u2029/g, L = function (n) {
        return "\\" + z[n]
    };
    m.template = function (n, t, r) {
        !t && r && (t = r), t = m.defaults({}, t, m.templateSettings);
        var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"), u = 0, i = "__p+='";
        n.replace(e, function (t, r, e, o, a) {
            return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t
        }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj", "_", i)
        } catch (a) {
            throw a.source = i, a
        }
        var c = function (n) {
            return o.call(this, n, m)
        }, f = t.variable || "obj";
        return c.source = "function(" + f + "){\n" + i + "}", c
    }, m.chain = function (n) {
        var t = m(n);
        return t._chain = !0, t
    };
    var P = function (n, t) {
        return n._chain ? m(t).chain() : t
    };
    m.mixin = function (n) {
        m.each(m.functions(n), function (t) {
            var r = m[t] = n[t];
            m.prototype[t] = function () {
                var n = [this._wrapped];
                return f.apply(n, arguments), P(this, r.apply(m, n))
            }
        })
    }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) {
        var t = o[n];
        m.prototype[n] = function () {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r)
        }
    }), m.each(["concat", "join", "slice"], function (n) {
        var t = o[n];
        m.prototype[n] = function () {
            return P(this, t.apply(this._wrapped, arguments))
        }
    }), m.prototype.value = function () {
        return this._wrapped
    }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function () {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return m
    })
}).call(this);
//# sourceMappingURL=underscore-min.map;
//     Backbone.js 1.2.3

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function (factory) {

    // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
    // We use `self` instead of `window` for `WebWorker` support.
    var root = (typeof self == 'object' && self.self == self && self) ||
        (typeof global == 'object' && global.global == global && global);

    // Set up Backbone appropriately for the environment. Start with AMD.
    if (typeof define === 'function' && define.amd) {
        define('backbone', ['underscore', 'jquery', 'exports'], function (_, $, exports) {
            // Export global even in AMD case in case this script is loaded with
            // others that may still expect a global Backbone.
            root.Backbone = factory(root, exports, _, $);
        });

        // Next for Node.js or CommonJS. jQuery may not be needed as a module.
    } else if (typeof exports !== 'undefined') {
        var _ = require('underscore'), $;
        try {
            $ = require('jquery');
        } catch (e) {
        }
        factory(root, exports, _, $);

        // Finally, as a browser global.
    } else {
        root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
    }

}(function (root, Backbone, _, $) {

    // Initial Setup
    // -------------

    // Save the previous value of the `Backbone` variable, so that it can be
    // restored later on, if `noConflict` is used.
    var previousBackbone = root.Backbone;

    // Create a local reference to a common array method we'll want to use later.
    var slice = Array.prototype.slice;

    // Current version of the library. Keep in sync with `package.json`.
    Backbone.VERSION = '1.2.3';

    // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
    // the `$` variable.
    Backbone.$ = $;

    // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
    // to its previous owner. Returns a reference to this Backbone object.
    Backbone.noConflict = function () {
        root.Backbone = previousBackbone;
        return this;
    };

    // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
    // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
    // set a `X-Http-Method-Override` header.
    Backbone.emulateHTTP = false;

    // Turn on `emulateJSON` to support legacy servers that can't deal with direct
    // `application/json` requests ... this will encode the body as
    // `application/x-www-form-urlencoded` instead and will send the model in a
    // form param named `model`.
    Backbone.emulateJSON = false;

    // Proxy Backbone class methods to Underscore functions, wrapping the model's
    // `attributes` object or collection's `models` array behind the scenes.
    //
    // collection.filter(function(model) { return model.get('age') > 10 });
    // collection.each(this.addView);
    //
    // `Function#apply` can be slow so we use the method's arg count, if we know it.
    var addMethod = function (length, method, attribute) {
        switch (length) {
            case 1:
                return function () {
                    return _[method](this[attribute]);
                };
            case 2:
                return function (value) {
                    return _[method](this[attribute], value);
                };
            case 3:
                return function (iteratee, context) {
                    return _[method](this[attribute], cb(iteratee, this), context);
                };
            case 4:
                return function (iteratee, defaultVal, context) {
                    return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
                };
            default:
                return function () {
                    var args = slice.call(arguments);
                    args.unshift(this[attribute]);
                    return _[method].apply(_, args);
                };
        }
    };
    var addUnderscoreMethods = function (Class, methods, attribute) {
        _.each(methods, function (length, method) {
            if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
        });
    };

    // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
    var cb = function (iteratee, instance) {
        if (_.isFunction(iteratee)) return iteratee;
        if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
        if (_.isString(iteratee)) return function (model) {
            return model.get(iteratee);
        };
        return iteratee;
    };
    var modelMatcher = function (attrs) {
        var matcher = _.matches(attrs);
        return function (model) {
            return matcher(model.attributes);
        };
    };

    // Backbone.Events
    // ---------------

    // A module that can be mixed in to *any object* in order to provide it with
    // a custom event channel. You may bind a callback to an event with `on` or
    // remove with `off`; `trigger`-ing an event fires all callbacks in
    // succession.
    //
    //     var object = {};
    //     _.extend(object, Backbone.Events);
    //     object.on('expand', function(){ alert('expanded'); });
    //     object.trigger('expand');
    //
    var Events = Backbone.Events = {};

    // Regular expression used to split event strings.
    var eventSplitter = /\s+/;

    // Iterates over the standard `event, callback` (as well as the fancy multiple
    // space-separated events `"change blur", callback` and jQuery-style event
    // maps `{event: callback}`).
    var eventsApi = function (iteratee, events, name, callback, opts) {
        var i = 0, names;
        if (name && typeof name === 'object') {
            // Handle event maps.
            if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
            for (names = _.keys(name); i < names.length; i++) {
                events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
            }
        } else if (name && eventSplitter.test(name)) {
            // Handle space separated event names by delegating them individually.
            for (names = name.split(eventSplitter); i < names.length; i++) {
                events = iteratee(events, names[i], callback, opts);
            }
        } else {
            // Finally, standard events.
            events = iteratee(events, name, callback, opts);
        }
        return events;
    };

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    Events.on = function (name, callback, context) {
        return internalOn(this, name, callback, context);
    };

    // Guard the `listening` argument from the public API.
    var internalOn = function (obj, name, callback, context, listening) {
        obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
            context: context,
            ctx: obj,
            listening: listening
        });

        if (listening) {
            var listeners = obj._listeners || (obj._listeners = {});
            listeners[listening.id] = listening;
        }

        return obj;
    };

    // Inversion-of-control versions of `on`. Tell *this* object to listen to
    // an event in another object... keeping track of what it's listening to
    // for easier unbinding later.
    Events.listenTo = function (obj, name, callback) {
        if (!obj) return this;
        var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
        var listeningTo = this._listeningTo || (this._listeningTo = {});
        var listening = listeningTo[id];

        // This object is not listening to any other events on `obj` yet.
        // Setup the necessary references to track the listening callbacks.
        if (!listening) {
            var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
            listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
        }

        // Bind callbacks on obj, and keep track of them on listening.
        internalOn(obj, name, callback, this, listening);
        return this;
    };

    // The reducing API that adds a callback to the `events` object.
    var onApi = function (events, name, callback, options) {
        if (callback) {
            var handlers = events[name] || (events[name] = []);
            var context = options.context, ctx = options.ctx, listening = options.listening;
            if (listening) listening.count++;

            handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
        }
        return events;
    };

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    Events.off = function (name, callback, context) {
        if (!this._events) return this;
        this._events = eventsApi(offApi, this._events, name, callback, {
            context: context,
            listeners: this._listeners
        });
        return this;
    };

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    Events.stopListening = function (obj, name, callback) {
        var listeningTo = this._listeningTo;
        if (!listeningTo) return this;

        var ids = obj ? [obj._listenId] : _.keys(listeningTo);

        for (var i = 0; i < ids.length; i++) {
            var listening = listeningTo[ids[i]];

            // If listening doesn't exist, this object is not currently
            // listening to obj. Break out early.
            if (!listening) break;

            listening.obj.off(name, callback, this);
        }
        if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

        return this;
    };

    // The reducing API that removes a callback from the `events` object.
    var offApi = function (events, name, callback, options) {
        if (!events) return;

        var i = 0, listening;
        var context = options.context, listeners = options.listeners;

        // Delete all events listeners and "drop" events.
        if (!name && !callback && !context) {
            var ids = _.keys(listeners);
            for (; i < ids.length; i++) {
                listening = listeners[ids[i]];
                delete listeners[listening.id];
                delete listening.listeningTo[listening.objId];
            }
            return;
        }

        var names = name ? [name] : _.keys(events);
        for (; i < names.length; i++) {
            name = names[i];
            var handlers = events[name];

            // Bail out if there are no events stored.
            if (!handlers) break;

            // Replace events if there are any remaining.  Otherwise, clean up.
            var remaining = [];
            for (var j = 0; j < handlers.length; j++) {
                var handler = handlers[j];
                if (
                    callback && callback !== handler.callback &&
                    callback !== handler.callback._callback ||
                    context && context !== handler.context
                ) {
                    remaining.push(handler);
                } else {
                    listening = handler.listening;
                    if (listening && --listening.count === 0) {
                        delete listeners[listening.id];
                        delete listening.listeningTo[listening.objId];
                    }
                }
            }

            // Update tail event if the list has any events.  Otherwise, clean up.
            if (remaining.length) {
                events[name] = remaining;
            } else {
                delete events[name];
            }
        }
        if (_.size(events)) return events;
    };

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, its listener will be removed. If multiple events
    // are passed in using the space-separated syntax, the handler will fire
    // once for each event, not once for a combination of all events.
    Events.once = function (name, callback, context) {
        // Map the event into a `{event: once}` object.
        var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
        return this.on(events, void 0, context);
    };

    // Inversion-of-control versions of `once`.
    Events.listenToOnce = function (obj, name, callback) {
        // Map the event into a `{event: once}` object.
        var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
        return this.listenTo(obj, events);
    };

    // Reduces the event callbacks into a map of `{event: onceWrapper}`.
    // `offer` unbinds the `onceWrapper` after it has been called.
    var onceMap = function (map, name, callback, offer) {
        if (callback) {
            var once = map[name] = _.once(function () {
                offer(name, once);
                callback.apply(this, arguments);
            });
            once._callback = callback;
        }
        return map;
    };

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    Events.trigger = function (name) {
        if (!this._events) return this;

        var length = Math.max(0, arguments.length - 1);
        var args = Array(length);
        for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

        eventsApi(triggerApi, this._events, name, void 0, args);
        return this;
    };

    // Handles triggering the appropriate event callbacks.
    var triggerApi = function (objEvents, name, cb, args) {
        if (objEvents) {
            var events = objEvents[name];
            var allEvents = objEvents.all;
            if (events && allEvents) allEvents = allEvents.slice();
            if (events) triggerEvents(events, args);
            if (allEvents) triggerEvents(allEvents, [name].concat(args));
        }
        return objEvents;
    };

    // A difficult-to-believe, but optimized internal dispatch function for
    // triggering events. Tries to keep the usual cases speedy (most internal
    // Backbone events have 3 arguments).
    var triggerEvents = function (events, args) {
        var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
        switch (args.length) {
            case 0:
                while (++i < l) (ev = events[i]).callback.call(ev.ctx);
                return;
            case 1:
                while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1);
                return;
            case 2:
                while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2);
                return;
            case 3:
                while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                return;
            default:
                while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
                return;
        }
    };

    // Aliases for backwards compatibility.
    Events.bind = Events.on;
    Events.unbind = Events.off;

    // Allow the `Backbone` object to serve as a global event bus, for folks who
    // want global "pubsub" in a convenient place.
    _.extend(Backbone, Events);

    // Backbone.Model
    // --------------

    // Backbone **Models** are the basic data object in the framework --
    // frequently representing a row in a table in a database on your server.
    // A discrete chunk of data and a bunch of useful, related methods for
    // performing computations and transformations on that data.

    // Create a new model with the specified attributes. A client id (`cid`)
    // is automatically generated and assigned for you.
    var Model = Backbone.Model = function (attributes, options) {
        var attrs = attributes || {};
        options || (options = {});
        this.cid = _.uniqueId(this.cidPrefix);
        this.attributes = {};
        if (options.collection) this.collection = options.collection;
        if (options.parse) attrs = this.parse(attrs, options) || {};
        attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
        this.set(attrs, options);
        this.changed = {};
        this.initialize.apply(this, arguments);
    };

    // Attach all inheritable methods to the Model prototype.
    _.extend(Model.prototype, Events, {

        // A hash of attributes whose current and previous value differ.
        changed: null,

        // The value returned during the last failed validation.
        validationError: null,

        // The default name for the JSON `id` attribute is `"id"`. MongoDB and
        // CouchDB users may want to set this to `"_id"`.
        idAttribute: 'id',

        // The prefix is used to create the client id which is used to identify models locally.
        // You may want to override this if you're experiencing name clashes with model ids.
        cidPrefix: 'c',

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
        },

        // Return a copy of the model's `attributes` object.
        toJSON: function (options) {
            return _.clone(this.attributes);
        },

        // Proxy `Backbone.sync` by default -- but override this if you need
        // custom syncing semantics for *this* particular model.
        sync: function () {
            return Backbone.sync.apply(this, arguments);
        },

        // Get the value of an attribute.
        get: function (attr) {
            return this.attributes[attr];
        },

        // Get the HTML-escaped value of an attribute.
        escape: function (attr) {
            return _.escape(this.get(attr));
        },

        // Returns `true` if the attribute contains a value that is not null
        // or undefined.
        has: function (attr) {
            return this.get(attr) != null;
        },

        // Special-cased proxy to underscore's `_.matches` method.
        matches: function (attrs) {
            return !!_.iteratee(attrs, this)(this.attributes);
        },

        // Set a hash of model attributes on the object, firing `"change"`. This is
        // the core primitive operation of a model, updating the data and notifying
        // anyone who needs to know about the change in state. The heart of the beast.
        set: function (key, val, options) {
            if (key == null) return this;

            // Handle both `"key", value` and `{key: value}` -style arguments.
            var attrs;
            if (typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }

            options || (options = {});

            // Run validation.
            if (!this._validate(attrs, options)) return false;

            // Extract attributes and options.
            var unset = options.unset;
            var silent = options.silent;
            var changes = [];
            var changing = this._changing;
            this._changing = true;

            if (!changing) {
                this._previousAttributes = _.clone(this.attributes);
                this.changed = {};
            }

            var current = this.attributes;
            var changed = this.changed;
            var prev = this._previousAttributes;

            // For each `set` attribute, update or delete the current value.
            for (var attr in attrs) {
                val = attrs[attr];
                if (!_.isEqual(current[attr], val)) changes.push(attr);
                if (!_.isEqual(prev[attr], val)) {
                    changed[attr] = val;
                } else {
                    delete changed[attr];
                }
                unset ? delete current[attr] : current[attr] = val;
            }

            // Update the `id`.
            this.id = this.get(this.idAttribute);

            // Trigger all relevant attribute changes.
            if (!silent) {
                if (changes.length) this._pending = options;
                for (var i = 0; i < changes.length; i++) {
                    this.trigger('change:' + changes[i], this, current[changes[i]], options);
                }
            }

            // You might be wondering why there's a `while` loop here. Changes can
            // be recursively nested within `"change"` events.
            if (changing) return this;
            if (!silent) {
                while (this._pending) {
                    options = this._pending;
                    this._pending = false;
                    this.trigger('change', this, options);
                }
            }
            this._pending = false;
            this._changing = false;
            return this;
        },

        // Remove an attribute from the model, firing `"change"`. `unset` is a noop
        // if the attribute doesn't exist.
        unset: function (attr, options) {
            return this.set(attr, void 0, _.extend({}, options, {unset: true}));
        },

        // Clear all attributes on the model, firing `"change"`.
        clear: function (options) {
            var attrs = {};
            for (var key in this.attributes) attrs[key] = void 0;
            return this.set(attrs, _.extend({}, options, {unset: true}));
        },

        // Determine if the model has changed since the last `"change"` event.
        // If you specify an attribute name, determine if that attribute has changed.
        hasChanged: function (attr) {
            if (attr == null) return !_.isEmpty(this.changed);
            return _.has(this.changed, attr);
        },

        // Return an object containing all the attributes that have changed, or
        // false if there are no changed attributes. Useful for determining what
        // parts of a view need to be updated and/or what attributes need to be
        // persisted to the server. Unset attributes will be set to undefined.
        // You can also pass an attributes object to diff against the model,
        // determining if there *would be* a change.
        changedAttributes: function (diff) {
            if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
            var old = this._changing ? this._previousAttributes : this.attributes;
            var changed = {};
            for (var attr in diff) {
                var val = diff[attr];
                if (_.isEqual(old[attr], val)) continue;
                changed[attr] = val;
            }
            return _.size(changed) ? changed : false;
        },

        // Get the previous value of an attribute, recorded at the time the last
        // `"change"` event was fired.
        previous: function (attr) {
            if (attr == null || !this._previousAttributes) return null;
            return this._previousAttributes[attr];
        },

        // Get all of the attributes of the model at the time of the previous
        // `"change"` event.
        previousAttributes: function () {
            return _.clone(this._previousAttributes);
        },

        // Fetch the model from the server, merging the response with the model's
        // local attributes. Any changed attributes will trigger a "change" event.
        fetch: function (options) {
            options = _.extend({parse: true}, options);
            var model = this;
            var success = options.success;
            options.success = function (resp) {
                var serverAttrs = options.parse ? model.parse(resp, options) : resp;
                if (!model.set(serverAttrs, options)) return false;
                if (success) success.call(options.context, model, resp, options);
                model.trigger('sync', model, resp, options);
            };
            wrapError(this, options);
            return this.sync('read', this, options);
        },

        // Set a hash of model attributes, and sync the model to the server.
        // If the server returns an attributes hash that differs, the model's
        // state will be `set` again.
        save: function (key, val, options) {
            // Handle both `"key", value` and `{key: value}` -style arguments.
            var attrs;
            if (key == null || typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }

            options = _.extend({validate: true, parse: true}, options);
            var wait = options.wait;

            // If we're not waiting and attributes exist, save acts as
            // `set(attr).save(null, opts)` with validation. Otherwise, check if
            // the model will be valid when the attributes, if any, are set.
            if (attrs && !wait) {
                if (!this.set(attrs, options)) return false;
            } else {
                if (!this._validate(attrs, options)) return false;
            }

            // After a successful server-side save, the client is (optionally)
            // updated with the server-side state.
            var model = this;
            var success = options.success;
            var attributes = this.attributes;
            options.success = function (resp) {
                // Ensure attributes are restored during synchronous saves.
                model.attributes = attributes;
                var serverAttrs = options.parse ? model.parse(resp, options) : resp;
                if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
                if (serverAttrs && !model.set(serverAttrs, options)) return false;
                if (success) success.call(options.context, model, resp, options);
                model.trigger('sync', model, resp, options);
            };
            wrapError(this, options);

            // Set temporary attributes if `{wait: true}` to properly find new ids.
            if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

            var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
            if (method === 'patch' && !options.attrs) options.attrs = attrs;
            var xhr = this.sync(method, this, options);

            // Restore attributes.
            this.attributes = attributes;

            return xhr;
        },

        // Destroy this model on the server if it was already persisted.
        // Optimistically removes the model from its collection, if it has one.
        // If `wait: true` is passed, waits for the server to respond before removal.
        destroy: function (options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;
            var wait = options.wait;

            var destroy = function () {
                model.stopListening();
                model.trigger('destroy', model, model.collection, options);
            };

            options.success = function (resp) {
                if (wait) destroy();
                if (success) success.call(options.context, model, resp, options);
                if (!model.isNew()) model.trigger('sync', model, resp, options);
            };

            var xhr = false;
            if (this.isNew()) {
                _.defer(options.success);
            } else {
                wrapError(this, options);
                xhr = this.sync('delete', this, options);
            }
            if (!wait) destroy();
            return xhr;
        },

        // Default URL for the model's representation on the server -- if you're
        // using Backbone's restful methods, override this to change the endpoint
        // that will be called.
        url: function () {
            var base =
                _.result(this, 'urlRoot') ||
                _.result(this.collection, 'url') ||
                urlError();
            if (this.isNew()) return base;
            var id = this.get(this.idAttribute);
            return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
        },

        // **parse** converts a response into the hash of attributes to be `set` on
        // the model. The default implementation is just to pass the response along.
        parse: function (resp, options) {
            return resp;
        },

        // Create a new model with identical attributes to this one.
        clone: function () {
            return new this.constructor(this.attributes);
        },

        // A model is new if it has never been saved to the server, and lacks an id.
        isNew: function () {
            return !this.has(this.idAttribute);
        },

        // Check if the model is currently in a valid state.
        isValid: function (options) {
            return this._validate({}, _.defaults({validate: true}, options));
        },

        // Run validation against the next complete set of model attributes,
        // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
        _validate: function (attrs, options) {
            if (!options.validate || !this.validate) return true;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validationError = this.validate(attrs, options) || null;
            if (!error) return true;
            this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
            return false;
        }

    });

    // Underscore methods that we want to implement on the Model, mapped to the
    // number of arguments they take.
    var modelMethods = {
        keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
        omit: 0, chain: 1, isEmpty: 1
    };

    // Mix in each Underscore method as a proxy to `Model#attributes`.
    addUnderscoreMethods(Model, modelMethods, 'attributes');

    // Backbone.Collection
    // -------------------

    // If models tend to represent a single row of data, a Backbone Collection is
    // more analogous to a table full of data ... or a small slice or page of that
    // table, or a collection of rows that belong together for a particular reason
    // -- all of the messages in this particular folder, all of the documents
    // belonging to this particular author, and so on. Collections maintain
    // indexes of their models, both in order, and for lookup by `id`.

    // Create a new **Collection**, perhaps to contain a specific type of `model`.
    // If a `comparator` is specified, the Collection will maintain
    // its models in sort order, as they're added and removed.
    var Collection = Backbone.Collection = function (models, options) {
        options || (options = {});
        if (options.model) this.model = options.model;
        if (options.comparator !== void 0) this.comparator = options.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (models) this.reset(models, _.extend({silent: true}, options));
    };

    // Default options for `Collection#set`.
    var setOptions = {add: true, remove: true, merge: true};
    var addOptions = {add: true, remove: false};

    // Splices `insert` into `array` at index `at`.
    var splice = function (array, insert, at) {
        at = Math.min(Math.max(at, 0), array.length);
        var tail = Array(array.length - at);
        var length = insert.length;
        for (var i = 0; i < tail.length; i++) tail[i] = array[i + at];
        for (i = 0; i < length; i++) array[i + at] = insert[i];
        for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
    };

    // Define the Collection's inheritable methods.
    _.extend(Collection.prototype, Events, {

        // The default model for a collection is just a **Backbone.Model**.
        // This should be overridden in most cases.
        model: Model,

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
        },

        // The JSON representation of a Collection is an array of the
        // models' attributes.
        toJSON: function (options) {
            return this.map(function (model) {
                return model.toJSON(options);
            });
        },

        // Proxy `Backbone.sync` by default.
        sync: function () {
            return Backbone.sync.apply(this, arguments);
        },

        // Add a model, or list of models to the set. `models` may be Backbone
        // Models or raw JavaScript objects to be converted to Models, or any
        // combination of the two.
        add: function (models, options) {
            return this.set(models, _.extend({merge: false}, options, addOptions));
        },

        // Remove a model, or a list of models from the set.
        remove: function (models, options) {
            options = _.extend({}, options);
            var singular = !_.isArray(models);
            models = singular ? [models] : _.clone(models);
            var removed = this._removeModels(models, options);
            if (!options.silent && removed) this.trigger('update', this, options);
            return singular ? removed[0] : removed;
        },

        // Update a collection by `set`-ing a new list of models, adding new ones,
        // removing models that are no longer present, and merging models that
        // already exist in the collection, as necessary. Similar to **Model#set**,
        // the core operation for updating the data contained by the collection.
        set: function (models, options) {
            if (models == null) return;

            options = _.defaults({}, options, setOptions);
            if (options.parse && !this._isModel(models)) models = this.parse(models, options);

            var singular = !_.isArray(models);
            models = singular ? [models] : models.slice();

            var at = options.at;
            if (at != null) at = +at;
            if (at < 0) at += this.length + 1;

            var set = [];
            var toAdd = [];
            var toRemove = [];
            var modelMap = {};

            var add = options.add;
            var merge = options.merge;
            var remove = options.remove;

            var sort = false;
            var sortable = this.comparator && (at == null) && options.sort !== false;
            var sortAttr = _.isString(this.comparator) ? this.comparator : null;

            // Turn bare objects into model references, and prevent invalid models
            // from being added.
            var model;
            for (var i = 0; i < models.length; i++) {
                model = models[i];

                // If a duplicate is found, prevent it from being added and
                // optionally merge it into the existing model.
                var existing = this.get(model);
                if (existing) {
                    if (merge && model !== existing) {
                        var attrs = this._isModel(model) ? model.attributes : model;
                        if (options.parse) attrs = existing.parse(attrs, options);
                        existing.set(attrs, options);
                        if (sortable && !sort) sort = existing.hasChanged(sortAttr);
                    }
                    if (!modelMap[existing.cid]) {
                        modelMap[existing.cid] = true;
                        set.push(existing);
                    }
                    models[i] = existing;

                    // If this is a new, valid model, push it to the `toAdd` list.
                } else if (add) {
                    model = models[i] = this._prepareModel(model, options);
                    if (model) {
                        toAdd.push(model);
                        this._addReference(model, options);
                        modelMap[model.cid] = true;
                        set.push(model);
                    }
                }
            }

            // Remove stale models.
            if (remove) {
                for (i = 0; i < this.length; i++) {
                    model = this.models[i];
                    if (!modelMap[model.cid]) toRemove.push(model);
                }
                if (toRemove.length) this._removeModels(toRemove, options);
            }

            // See if sorting is needed, update `length` and splice in new models.
            var orderChanged = false;
            var replace = !sortable && add && remove;
            if (set.length && replace) {
                orderChanged = this.length != set.length || _.some(this.models, function (model, index) {
                        return model !== set[index];
                    });
                this.models.length = 0;
                splice(this.models, set, 0);
                this.length = this.models.length;
            } else if (toAdd.length) {
                if (sortable) sort = true;
                splice(this.models, toAdd, at == null ? this.length : at);
                this.length = this.models.length;
            }

            // Silently sort the collection if appropriate.
            if (sort) this.sort({silent: true});

            // Unless silenced, it's time to fire all appropriate add/sort events.
            if (!options.silent) {
                for (i = 0; i < toAdd.length; i++) {
                    if (at != null) options.index = at + i;
                    model = toAdd[i];
                    model.trigger('add', model, this, options);
                }
                if (sort || orderChanged) this.trigger('sort', this, options);
                if (toAdd.length || toRemove.length) this.trigger('update', this, options);
            }

            // Return the added (or merged) model (or models).
            return singular ? models[0] : models;
        },

        // When you have more items than you want to add or remove individually,
        // you can reset the entire set with a new list of models, without firing
        // any granular `add` or `remove` events. Fires `reset` when finished.
        // Useful for bulk operations and optimizations.
        reset: function (models, options) {
            options = options ? _.clone(options) : {};
            for (var i = 0; i < this.models.length; i++) {
                this._removeReference(this.models[i], options);
            }
            options.previousModels = this.models;
            this._reset();
            models = this.add(models, _.extend({silent: true}, options));
            if (!options.silent) this.trigger('reset', this, options);
            return models;
        },

        // Add a model to the end of the collection.
        push: function (model, options) {
            return this.add(model, _.extend({at: this.length}, options));
        },

        // Remove a model from the end of the collection.
        pop: function (options) {
            var model = this.at(this.length - 1);
            return this.remove(model, options);
        },

        // Add a model to the beginning of the collection.
        unshift: function (model, options) {
            return this.add(model, _.extend({at: 0}, options));
        },

        // Remove a model from the beginning of the collection.
        shift: function (options) {
            var model = this.at(0);
            return this.remove(model, options);
        },

        // Slice out a sub-array of models from the collection.
        slice: function () {
            return slice.apply(this.models, arguments);
        },

        // Get a model from the set by id.
        get: function (obj) {
            if (obj == null) return void 0;
            var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
            return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
        },

        // Get the model at the given index.
        at: function (index) {
            if (index < 0) index += this.length;
            return this.models[index];
        },

        // Return models with matching attributes. Useful for simple cases of
        // `filter`.
        where: function (attrs, first) {
            return this[first ? 'find' : 'filter'](attrs);
        },

        // Return the first model with matching attributes. Useful for simple cases
        // of `find`.
        findWhere: function (attrs) {
            return this.where(attrs, true);
        },

        // Force the collection to re-sort itself. You don't need to call this under
        // normal circumstances, as the set will maintain sort order as each item
        // is added.
        sort: function (options) {
            var comparator = this.comparator;
            if (!comparator) throw new Error('Cannot sort a set without a comparator');
            options || (options = {});

            var length = comparator.length;
            if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

            // Run sort based on type of `comparator`.
            if (length === 1 || _.isString(comparator)) {
                this.models = this.sortBy(comparator);
            } else {
                this.models.sort(comparator);
            }
            if (!options.silent) this.trigger('sort', this, options);
            return this;
        },

        // Pluck an attribute from each model in the collection.
        pluck: function (attr) {
            return _.invoke(this.models, 'get', attr);
        },

        // Fetch the default set of models for this collection, resetting the
        // collection when they arrive. If `reset: true` is passed, the response
        // data will be passed through the `reset` method instead of `set`.
        fetch: function (options) {
            options = _.extend({parse: true}, options);
            var success = options.success;
            var collection = this;
            options.success = function (resp) {
                var method = options.reset ? 'reset' : 'set';
                collection[method](resp, options);
                if (success) success.call(options.context, collection, resp, options);
                collection.trigger('sync', collection, resp, options);
            };
            wrapError(this, options);
            return this.sync('read', this, options);
        },

        // Create a new instance of a model in this collection. Add the model to the
        // collection immediately, unless `wait: true` is passed, in which case we
        // wait for the server to agree.
        create: function (model, options) {
            options = options ? _.clone(options) : {};
            var wait = options.wait;
            model = this._prepareModel(model, options);
            if (!model) return false;
            if (!wait) this.add(model, options);
            var collection = this;
            var success = options.success;
            options.success = function (model, resp, callbackOpts) {
                if (wait) collection.add(model, callbackOpts);
                if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
            };
            model.save(null, options);
            return model;
        },

        // **parse** converts a response into a list of models to be added to the
        // collection. The default implementation is just to pass it through.
        parse: function (resp, options) {
            return resp;
        },

        // Create a new collection with an identical list of models as this one.
        clone: function () {
            return new this.constructor(this.models, {
                model: this.model,
                comparator: this.comparator
            });
        },

        // Define how to uniquely identify models in the collection.
        modelId: function (attrs) {
            return attrs[this.model.prototype.idAttribute || 'id'];
        },

        // Private method to reset all internal state. Called when the collection
        // is first initialized or reset.
        _reset: function () {
            this.length = 0;
            this.models = [];
            this._byId = {};
        },

        // Prepare a hash of attributes (or other model) to be added to this
        // collection.
        _prepareModel: function (attrs, options) {
            if (this._isModel(attrs)) {
                if (!attrs.collection) attrs.collection = this;
                return attrs;
            }
            options = options ? _.clone(options) : {};
            options.collection = this;
            var model = new this.model(attrs, options);
            if (!model.validationError) return model;
            this.trigger('invalid', this, model.validationError, options);
            return false;
        },

        // Internal method called by both remove and set.
        _removeModels: function (models, options) {
            var removed = [];
            for (var i = 0; i < models.length; i++) {
                var model = this.get(models[i]);
                if (!model) continue;

                var index = this.indexOf(model);
                this.models.splice(index, 1);
                this.length--;

                if (!options.silent) {
                    options.index = index;
                    model.trigger('remove', model, this, options);
                }

                removed.push(model);
                this._removeReference(model, options);
            }
            return removed.length ? removed : false;
        },

        // Method for checking whether an object should be considered a model for
        // the purposes of adding to the collection.
        _isModel: function (model) {
            return model instanceof Model;
        },

        // Internal method to create a model's ties to a collection.
        _addReference: function (model, options) {
            this._byId[model.cid] = model;
            var id = this.modelId(model.attributes);
            if (id != null) this._byId[id] = model;
            model.on('all', this._onModelEvent, this);
        },

        // Internal method to sever a model's ties to a collection.
        _removeReference: function (model, options) {
            delete this._byId[model.cid];
            var id = this.modelId(model.attributes);
            if (id != null) delete this._byId[id];
            if (this === model.collection) delete model.collection;
            model.off('all', this._onModelEvent, this);
        },

        // Internal method called every time a model in the set fires an event.
        // Sets need to update their indexes when models change ids. All other
        // events simply proxy through. "add" and "remove" events that originate
        // in other collections are ignored.
        _onModelEvent: function (event, model, collection, options) {
            if ((event === 'add' || event === 'remove') && collection !== this) return;
            if (event === 'destroy') this.remove(model, options);
            if (event === 'change') {
                var prevId = this.modelId(model.previousAttributes());
                var id = this.modelId(model.attributes);
                if (prevId !== id) {
                    if (prevId != null) delete this._byId[prevId];
                    if (id != null) this._byId[id] = model;
                }
            }
            this.trigger.apply(this, arguments);
        }

    });

    // Underscore methods that we want to implement on the Collection.
    // 90% of the core usefulness of Backbone Collections is actually implemented
    // right here:
    var collectionMethods = {
        forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
        foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
        select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
        contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
        head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
        without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
        isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
        sortBy: 3, indexBy: 3
    };

    // Mix in each Underscore method as a proxy to `Collection#models`.
    addUnderscoreMethods(Collection, collectionMethods, 'models');

    // Backbone.View
    // -------------

    // Backbone Views are almost more convention than they are actual code. A View
    // is simply a JavaScript object that represents a logical chunk of UI in the
    // DOM. This might be a single item, an entire list, a sidebar or panel, or
    // even the surrounding frame which wraps your whole app. Defining a chunk of
    // UI as a **View** allows you to define your DOM events declaratively, without
    // having to worry about render order ... and makes it easy for the view to
    // react to specific changes in the state of your models.

    // Creating a Backbone.View creates its initial element outside of the DOM,
    // if an existing element is not provided...
    var View = Backbone.View = function (options) {
        this.cid = _.uniqueId('view');
        _.extend(this, _.pick(options, viewOptions));
        this._ensureElement();
        this.initialize.apply(this, arguments);
    };

    // Cached regex to split keys for `delegate`.
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    // List of view options to be set as properties.
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

    // Set up all inheritable **Backbone.View** properties and methods.
    _.extend(View.prototype, Events, {

        // The default `tagName` of a View's element is `"div"`.
        tagName: 'div',

        // jQuery delegate for element lookup, scoped to DOM elements within the
        // current view. This should be preferred to global lookups where possible.
        $: function (selector) {
            return this.$el.find(selector);
        },

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
        },

        // **render** is the core function that your view should override, in order
        // to populate its element (`this.el`), with the appropriate HTML. The
        // convention is for **render** to always return `this`.
        render: function () {
            return this;
        },

        // Remove this view by taking the element out of the DOM, and removing any
        // applicable Backbone.Events listeners.
        remove: function () {
            this._removeElement();
            this.stopListening();
            return this;
        },

        // Remove this view's element from the document and all event listeners
        // attached to it. Exposed for subclasses using an alternative DOM
        // manipulation API.
        _removeElement: function () {
            this.$el.remove();
        },

        // Change the view's element (`this.el` property) and re-delegate the
        // view's events on the new element.
        setElement: function (element) {
            this.undelegateEvents();
            this._setElement(element);
            this.delegateEvents();
            return this;
        },

        // Creates the `this.el` and `this.$el` references for this view using the
        // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
        // context or an element. Subclasses can override this to utilize an
        // alternative DOM manipulation API and are only required to set the
        // `this.el` property.
        _setElement: function (el) {
            this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
            this.el = this.$el[0];
        },

        // Set callbacks, where `this.events` is a hash of
        //
        // *{"event selector": "callback"}*
        //
        //     {
        //       'mousedown .title':  'edit',
        //       'click .button':     'save',
        //       'click .open':       function(e) { ... }
        //     }
        //
        // pairs. Callbacks will be bound to the view, with `this` set properly.
        // Uses event delegation for efficiency.
        // Omitting the selector binds the event to `this.el`.
        delegateEvents: function (events) {
            events || (events = _.result(this, 'events'));
            if (!events) return this;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method)) method = this[method];
                if (!method) continue;
                var match = key.match(delegateEventSplitter);
                this.delegate(match[1], match[2], _.bind(method, this));
            }
            return this;
        },

        // Add a single event listener to the view's element (or a child element
        // using `selector`). This only works for delegate-able events: not `focus`,
        // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
        delegate: function (eventName, selector, listener) {
            this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
            return this;
        },

        // Clears all callbacks previously bound to the view by `delegateEvents`.
        // You usually don't need to use this, but may wish to if you have multiple
        // Backbone views attached to the same DOM element.
        undelegateEvents: function () {
            if (this.$el) this.$el.off('.delegateEvents' + this.cid);
            return this;
        },

        // A finer-grained `undelegateEvents` for removing a single delegated event.
        // `selector` and `listener` are both optional.
        undelegate: function (eventName, selector, listener) {
            this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
            return this;
        },

        // Produces a DOM element to be assigned to your view. Exposed for
        // subclasses using an alternative DOM manipulation API.
        _createElement: function (tagName) {
            return document.createElement(tagName);
        },

        // Ensure that the View has a DOM element to render into.
        // If `this.el` is a string, pass it through `$()`, take the first
        // matching element, and re-assign it to `el`. Otherwise, create
        // an element from the `id`, `className` and `tagName` properties.
        _ensureElement: function () {
            if (!this.el) {
                var attrs = _.extend({}, _.result(this, 'attributes'));
                if (this.id) attrs.id = _.result(this, 'id');
                if (this.className) attrs['class'] = _.result(this, 'className');
                this.setElement(this._createElement(_.result(this, 'tagName')));
                this._setAttributes(attrs);
            } else {
                this.setElement(_.result(this, 'el'));
            }
        },

        // Set attributes from a hash on this view's element.  Exposed for
        // subclasses using an alternative DOM manipulation API.
        _setAttributes: function (attributes) {
            this.$el.attr(attributes);
        }

    });

    // Backbone.sync
    // -------------

    // Override this function to change the manner in which Backbone persists
    // models to the server. You will be passed the type of request, and the
    // model in question. By default, makes a RESTful Ajax request
    // to the model's `url()`. Some possible customizations could be:
    //
    // * Use `setTimeout` to batch rapid-fire updates into a single request.
    // * Send up the models as XML instead of JSON.
    // * Persist models via WebSockets instead of Ajax.
    //
    // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
    // as `POST`, with a `_method` parameter containing the true HTTP method,
    // as well as all requests with the body as `application/x-www-form-urlencoded`
    // instead of `application/json` with the model in a param named `model`.
    // Useful when interfacing with server-side languages like **PHP** that make
    // it difficult to read the body of `PUT` requests.
    Backbone.sync = function (method, model, options) {
        var type = methodMap[method];

        // Default options, unless specified.
        _.defaults(options || (options = {}), {
            emulateHTTP: Backbone.emulateHTTP,
            emulateJSON: Backbone.emulateJSON
        });

        // Default JSON-request options.
        var params = {type: type, dataType: 'json'};

        // Ensure that we have a URL.
        if (!options.url) {
            params.url = _.result(model, 'url') || urlError();
        }

        // Ensure that we have the appropriate request data.
        if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
            params.contentType = 'application/json';
            params.data = JSON.stringify(options.attrs || model.toJSON(options));
        }

        // For older servers, emulate JSON by encoding the request into an HTML-form.
        if (options.emulateJSON) {
            params.contentType = 'application/x-www-form-urlencoded';
            params.data = params.data ? {model: params.data} : {};
        }

        // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
        // And an `X-HTTP-Method-Override` header.
        if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
            params.type = 'POST';
            if (options.emulateJSON) params.data._method = type;
            var beforeSend = options.beforeSend;
            options.beforeSend = function (xhr) {
                xhr.setRequestHeader('X-HTTP-Method-Override', type);
                if (beforeSend) return beforeSend.apply(this, arguments);
            };
        }

        // Don't process data on a non-GET request.
        if (params.type !== 'GET' && !options.emulateJSON) {
            params.processData = false;
        }

        // Pass along `textStatus` and `errorThrown` from jQuery.
        var error = options.error;
        options.error = function (xhr, textStatus, errorThrown) {
            options.textStatus = textStatus;
            options.errorThrown = errorThrown;
            if (error) error.call(options.context, xhr, textStatus, errorThrown);
        };

        // Make the request, allowing the user to override any Ajax options.
        var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
        model.trigger('request', model, xhr, options);
        return xhr;
    };

    // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
    var methodMap = {
        'create': 'POST',
        'update': 'PUT',
        'patch': 'PATCH',
        'delete': 'DELETE',
        'read': 'GET'
    };

    // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
    // Override this if you'd like to use a different library.
    Backbone.ajax = function () {
        return Backbone.$.ajax.apply(Backbone.$, arguments);
    };

    // Backbone.Router
    // ---------------

    // Routers map faux-URLs to actions, and fire events when routes are
    // matched. Creating a new one sets its `routes` hash, if not set statically.
    var Router = Backbone.Router = function (options) {
        options || (options = {});
        if (options.routes) this.routes = options.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };

    // Cached regular expressions for matching named param parts and splatted
    // parts of route strings.
    var optionalParam = /\((.*?)\)/g;
    var namedParam = /(\(\?)?:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

    // Set up all inheritable **Backbone.Router** properties and methods.
    _.extend(Router.prototype, Events, {

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
        },

        // Manually bind a single named route to a callback. For example:
        //
        //     this.route('search/:query/p:num', 'search', function(query, num) {
        //       ...
        //     });
        //
        route: function (route, name, callback) {
            if (!_.isRegExp(route)) route = this._routeToRegExp(route);
            if (_.isFunction(name)) {
                callback = name;
                name = '';
            }
            if (!callback) callback = this[name];
            var router = this;
            Backbone.history.route(route, function (fragment) {
                var args = router._extractParameters(route, fragment);
                if (router.execute(callback, args, name) !== false) {
                    router.trigger.apply(router, ['route:' + name].concat(args));
                    router.trigger('route', name, args);
                    Backbone.history.trigger('route', router, name, args);
                }
            });
            return this;
        },

        // Execute a route handler with the provided parameters.  This is an
        // excellent place to do pre-route setup or post-route cleanup.
        execute: function (callback, args, name) {
            if (callback) callback.apply(this, args);
        },

        // Simple proxy to `Backbone.history` to save a fragment into the history.
        navigate: function (fragment, options) {
            Backbone.history.navigate(fragment, options);
            return this;
        },

        // Bind all defined routes to `Backbone.history`. We have to reverse the
        // order of the routes here to support behavior where the most general
        // routes can be defined at the bottom of the route map.
        _bindRoutes: function () {
            if (!this.routes) return;
            this.routes = _.result(this, 'routes');
            var route, routes = _.keys(this.routes);
            while ((route = routes.pop()) != null) {
                this.route(route, this.routes[route]);
            }
        },

        // Convert a route string into a regular expression, suitable for matching
        // against the current location hash.
        _routeToRegExp: function (route) {
            route = route.replace(escapeRegExp, '\\$&')
                .replace(optionalParam, '(?:$1)?')
                .replace(namedParam, function (match, optional) {
                    return optional ? match : '([^/?]+)';
                })
                .replace(splatParam, '([^?]*?)');
            return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
        },

        // Given a route, and a URL fragment that it matches, return the array of
        // extracted decoded parameters. Empty or unmatched parameters will be
        // treated as `null` to normalize cross-browser behavior.
        _extractParameters: function (route, fragment) {
            var params = route.exec(fragment).slice(1);
            return _.map(params, function (param, i) {
                // Don't decode the search params.
                if (i === params.length - 1) return param || null;
                return param ? decodeURIComponent(param) : null;
            });
        }

    });

    // Backbone.History
    // ----------------

    // Handles cross-browser history management, based on either
    // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
    // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
    // and URL fragments. If the browser supports neither (old IE, natch),
    // falls back to polling.
    var History = Backbone.History = function () {
        this.handlers = [];
        this.checkUrl = _.bind(this.checkUrl, this);

        // Ensure that `History` can be used outside of the browser.
        if (typeof window !== 'undefined') {
            this.location = window.location;
            this.history = window.history;
        }
    };

    // Cached regex for stripping a leading hash/slash and trailing space.
    var routeStripper = /^[#\/]|\s+$/g;

    // Cached regex for stripping leading and trailing slashes.
    var rootStripper = /^\/+|\/+$/g;

    // Cached regex for stripping urls of hash.
    var pathStripper = /#.*$/;

    // Has the history handling already been started?
    History.started = false;

    // Set up all inheritable **Backbone.History** properties and methods.
    _.extend(History.prototype, Events, {

        // The default interval to poll for hash changes, if necessary, is
        // twenty times a second.
        interval: 50,

        // Are we at the app root?
        atRoot: function () {
            var path = this.location.pathname.replace(/[^\/]$/, '$&/');
            return path === this.root && !this.getSearch();
        },

        // Does the pathname match the root?
        matchRoot: function () {
            var path = this.decodeFragment(this.location.pathname);
            var root = path.slice(0, this.root.length - 1) + '/';
            return root === this.root;
        },

        // Unicode characters in `location.pathname` are percent encoded so they're
        // decoded for comparison. `%25` should not be decoded since it may be part
        // of an encoded parameter.
        decodeFragment: function (fragment) {
            return decodeURI(fragment.replace(/%25/g, '%2525'));
        },

        // In IE6, the hash fragment and search params are incorrect if the
        // fragment contains `?`.
        getSearch: function () {
            var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
            return match ? match[0] : '';
        },

        // Gets the true hash value. Cannot use location.hash directly due to bug
        // in Firefox where location.hash will always be decoded.
        getHash: function (window) {
            var match = (window || this).location.href.match(/#(.*)$/);
            return match ? match[1] : '';
        },

        // Get the pathname and search params, without the root.
        getPath: function () {
            var path = this.decodeFragment(
                this.location.pathname + this.getSearch()
            ).slice(this.root.length - 1);
            return path.charAt(0) === '/' ? path.slice(1) : path;
        },

        // Get the cross-browser normalized URL fragment from the path or hash.
        getFragment: function (fragment) {
            if (fragment == null) {
                if (this._usePushState || !this._wantsHashChange) {
                    fragment = this.getPath();
                } else {
                    fragment = this.getHash();
                }
            }
            return fragment.replace(routeStripper, '');
        },

        // Start the hash change handling, returning `true` if the current URL matches
        // an existing route, and `false` otherwise.
        start: function (options) {
            if (History.started) throw new Error('Backbone.history has already been started');
            History.started = true;

            // Figure out the initial configuration. Do we need an iframe?
            // Is pushState desired ... is it available?
            this.options = _.extend({root: '/'}, this.options, options);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._hasHashChange = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
            this._useHashChange = this._wantsHashChange && this._hasHashChange;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.history && this.history.pushState);
            this._usePushState = this._wantsPushState && this._hasPushState;
            this.fragment = this.getFragment();

            // Normalize root to always include a leading and trailing slash.
            this.root = ('/' + this.root + '/').replace(rootStripper, '/');

            // Transition from hashChange to pushState or vice versa if both are
            // requested.
            if (this._wantsHashChange && this._wantsPushState) {

                // If we've started off with a route from a `pushState`-enabled
                // browser, but we're currently in a browser that doesn't support it...
                if (!this._hasPushState && !this.atRoot()) {
                    var root = this.root.slice(0, -1) || '/';
                    this.location.replace(root + '#' + this.getPath());
                    // Return immediately as browser will do redirect to new url
                    return true;

                    // Or if we've started out with a hash-based route, but we're currently
                    // in a browser where it could be `pushState`-based instead...
                } else if (this._hasPushState && this.atRoot()) {
                    this.navigate(this.getHash(), {replace: true});
                }

            }

            // Proxy an iframe to handle location events if the browser doesn't
            // support the `hashchange` event, HTML5 history, or the user wants
            // `hashChange` but not `pushState`.
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement('iframe');
                this.iframe.src = 'javascript:0';
                this.iframe.style.display = 'none';
                this.iframe.tabIndex = -1;
                var body = document.body;
                // Using `appendChild` will throw on IE < 9 if the document is not ready.
                var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
                iWindow.document.open();
                iWindow.document.close();
                iWindow.location.hash = '#' + this.fragment;
            }

            // Add a cross-platform `addEventListener` shim for older browsers.
            var addEventListener = window.addEventListener || function (eventName, listener) {
                    return attachEvent('on' + eventName, listener);
                };

            // Depending on whether we're using pushState or hashes, and whether
            // 'onhashchange' is supported, determine how we check the URL state.
            if (this._usePushState) {
                addEventListener('popstate', this.checkUrl, false);
            } else if (this._useHashChange && !this.iframe) {
                addEventListener('hashchange', this.checkUrl, false);
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }

            if (!this.options.silent) return this.loadUrl();
        },

        // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
        // but possibly useful for unit testing Routers.
        stop: function () {
            // Add a cross-platform `removeEventListener` shim for older browsers.
            var removeEventListener = window.removeEventListener || function (eventName, listener) {
                    return detachEvent('on' + eventName, listener);
                };

            // Remove window listeners.
            if (this._usePushState) {
                removeEventListener('popstate', this.checkUrl, false);
            } else if (this._useHashChange && !this.iframe) {
                removeEventListener('hashchange', this.checkUrl, false);
            }

            // Clean up the iframe if necessary.
            if (this.iframe) {
                document.body.removeChild(this.iframe);
                this.iframe = null;
            }

            // Some environments will throw when clearing an undefined interval.
            if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
            History.started = false;
        },

        // Add a route to be tested when the fragment changes. Routes added later
        // may override previous routes.
        route: function (route, callback) {
            this.handlers.unshift({route: route, callback: callback});
        },

        // Checks the current URL to see if it has changed, and if it has,
        // calls `loadUrl`, normalizing across the hidden iframe.
        checkUrl: function (e) {
            var current = this.getFragment();

            // If the user pressed the back button, the iframe's hash will have
            // changed and we should use that for comparison.
            if (current === this.fragment && this.iframe) {
                current = this.getHash(this.iframe.contentWindow);
            }

            if (current === this.fragment) return false;
            if (this.iframe) this.navigate(current);
            this.loadUrl();
        },

        // Attempt to load the current URL fragment. If a route succeeds with a
        // match, returns `true`. If no defined routes matches the fragment,
        // returns `false`.
        loadUrl: function (fragment) {
            // If the root doesn't match, no routes can match either.
            if (!this.matchRoot()) return false;
            fragment = this.fragment = this.getFragment(fragment);
            return _.some(this.handlers, function (handler) {
                if (handler.route.test(fragment)) {
                    handler.callback(fragment);
                    return true;
                }
            });
        },

        // Save a fragment into the hash history, or replace the URL state if the
        // 'replace' option is passed. You are responsible for properly URL-encoding
        // the fragment in advance.
        //
        // The options object can contain `trigger: true` if you wish to have the
        // route callback be fired (not usually desirable), or `replace: true`, if
        // you wish to modify the current URL without adding an entry to the history.
        navigate: function (fragment, options) {
            if (!History.started) return false;
            if (!options || options === true) options = {trigger: !!options};

            // Normalize the fragment.
            fragment = this.getFragment(fragment || '');

            // Don't include a trailing slash on the root.
            var root = this.root;
            if (fragment === '' || fragment.charAt(0) === '?') {
                root = root.slice(0, -1) || '/';
            }
            var url = root + fragment;

            // Strip the hash and decode for matching.
            fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

            if (this.fragment === fragment) return;
            this.fragment = fragment;

            // If pushState is available, we use it to set the fragment as a real URL.
            if (this._usePushState) {
                this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

                // If hash changes haven't been explicitly disabled, update the hash
                // fragment to store history.
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, fragment, options.replace);
                if (this.iframe && (fragment !== this.getHash(this.iframe.contentWindow))) {
                    var iWindow = this.iframe.contentWindow;

                    // Opening and closing the iframe tricks IE7 and earlier to push a
                    // history entry on hash-tag change.  When replace is true, we don't
                    // want this.
                    if (!options.replace) {
                        iWindow.document.open();
                        iWindow.document.close();
                    }

                    this._updateHash(iWindow.location, fragment, options.replace);
                }

                // If you've told us that you explicitly don't want fallback hashchange-
                // based history, then `navigate` becomes a page refresh.
            } else {
                return this.location.assign(url);
            }
            if (options.trigger) return this.loadUrl(fragment);
        },

        // Update the hash location, either replacing the current entry, or adding
        // a new one to the browser history.
        _updateHash: function (location, fragment, replace) {
            if (replace) {
                var href = location.href.replace(/(javascript:|#).*$/, '');
                location.replace(href + '#' + fragment);
            } else {
                // Some browsers require that `hash` contains a leading #.
                location.hash = '#' + fragment;
            }
        }

    });

    // Create the default Backbone.history.
    Backbone.history = new History;

    // Helpers
    // -------

    // Helper function to correctly set up the prototype chain for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    var extend = function (protoProps, staticProps) {
        var parent = this;
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent constructor.
        if (protoProps && _.has(protoProps, 'constructor')) {
            child = protoProps.constructor;
        } else {
            child = function () {
                return parent.apply(this, arguments);
            };
        }

        // Add static properties to the constructor function, if supplied.
        _.extend(child, parent, staticProps);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent` constructor function.
        var Surrogate = function () {
            this.constructor = child;
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate;

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) _.extend(child.prototype, protoProps);

        // Set a convenience property in case the parent's prototype is needed
        // later.
        child.__super__ = parent.prototype;

        return child;
    };

    // Set up inheritance for the model, collection, router, view and history.
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

    // Throw an error when a URL is needed, and none is supplied.
    var urlError = function () {
        throw new Error('A "url" property or function must be specified');
    };

    // Wrap an optional error callback with a fallback error event.
    var wrapError = function (model, options) {
        var error = options.error;
        options.error = function (resp) {
            if (error) error.call(options.context, model, resp, options);
            model.trigger('error', model, resp, options);
        };
    };

    return Backbone;

}));

define('utils', ["lodash", "backbone"], function (_, Backbone) {
    "use strict";

    function getDayFromIdx(idx) {
        var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return dayArr[idx];
    }

    function getMonthFromIdx(idx) {
        var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];

        return monthArr[idx];
    }

    function convertToDate(time) { //time: SECONDS from January 1st, 1970
        var date = new Date(parseFloat(time) * 1000);

        return getDayFromIdx(date.getDay()) + ", " + getMonthFromIdx(date.getMonth()) + " " + date.getDate();
    }

    function convertToTime(time) {
        var date = new Date(parseFloat(time) * 1000),
            hours = date.getHours(),
            minutes = date.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return hours + ":" + minutes;
    }

    function convertToWeekday(time) {
        var date = new Date(parseFloat(time) * 1000),
            dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

        return dayArr[date.getDay()];
    }

    function convertToF(temp) {
        return (parseFloat(temp) * 1.8 + 32).toFixed(0);
    }

    function getTimeByOffset(time, offset) {
        var myOffset = -(new Date()).getTimezoneOffset() / 60,
            localTime = time + (offset - myOffset) * 3600;

        return convertToTime(localTime);
    }

    function getWindDirection(windBearing) {
        windBearing = parseFloat(windBearing);

        if ((350 <= windBearing && windBearing < 359.999) || (0 <= windBearing && windBearing < 10)) {
            return "N";
        } else if (10 <= windBearing && windBearing < 80) {
            return "NE"
        } else if (80 <= windBearing && windBearing < 100) {
            return "E";
        } else if (100 <= windBearing && windBearing < 170) {
            return "SE"
        } else if (170 <= windBearing && windBearing < 190) {
            return "S";
        } else if (190 <= windBearing && windBearing < 260) {
            return "SW"
        } else if (260 <= windBearing && windBearing < 280) {
            return "W";
        }

        return "NW";
    }

    function getSunPosition(sunRadius, currentTime, sunriseTime, sunsetTime) {
        var W = innerWidth, //browser width
            H = innerHeight, //browser height
            h = W > H ? H * 0.5 : W / 2,//highest point of the sun at noon
            R = W * W / (8 * h) + h / 2, //circle trajectory radius
            alpha = 2 * Math.acos((R - h) / R), //angle created by two furthest radius at the edge of screen
            gamma = 2 * Math.asin(sunRadius / (2 * R)), // angle created by two furthest radius at the edge of screen plus radius of the sun
            phi = alpha + 2 * gamma,
            t = (currentTime - sunriseTime) / (sunsetTime - sunriseTime), //portion between passed time from sunrise vs whole day time
            phiDeg = phi / Math.PI * 180; //convert phi to degree

        return 180 - (phiDeg * t - phiDeg / 2);
    }

    /**
     * Get static options and cache all the value to DashboardView
     * @param sunRadius
     * @returns {{Xc: number, Yc: number, R: number, sunSetDeg: number, sunRiseDeg: number}}
     */

    function getSunOptions(sunRadius) {
        var W = innerWidth, //browser width
            H = innerHeight, //browser height
            h = H * 0.5,//highest point of the sun at noon
            R = W * W / (8 * h) + h / 2, //circle trajectory radius
            Xc = W / 2 - sunRadius, //circle trajectory center X-coordinate
            Yc = H * 0.5 + R - sunRadius, //circle trajectory center Y-coordinate
            alpha = 2 * Math.acos((R - h) / R), //angle created by two furthest radius at the edge of screen
            gamma = 2 * Math.asin(sunRadius / (2 * R)), // angle created by two furthest radius at the edge of screen plus radius of the sun
            phi = alpha + 2 * gamma,
            phiDeg = phi / Math.PI * 180;

        return {
            Xc: Xc,
            Yc: Yc,
            R: R,
            sunSetDeg: 180 - phiDeg / 2, //angle at which sun set relative to SOUTH
            sunRiseDeg: 180 + phiDeg / 2 //angle at which sun rise relative to SOUTH
        }
    }

    /**
     * Return angle relative to SOUTH
     * @param currentCoords
     * @param centerCoords
     * @returns {number}
     */

    function getCurrentPosition(currentCoords, centerCoords) {
        var angle = Math.atan((centerCoords.left - currentCoords.left) / (centerCoords.top - currentCoords.top));

        return 180 + angle / Math.PI * 180;
    }

    function getMoonPhase(moonPhase) {
        if (moonPhase < 0.1 || 0.9 <= moonPhase) {
            return "empty-moon";
        } else if (0.1 <= moonPhase && moonPhase < 0.25) {
            return "young-moon";
        } else if (0.25 <= moonPhase && moonPhase < 0.45) {
            return "almost-full";
        } else if (0.45 <= moonPhase && moonPhase < 0.55) {
            return "full-moon";
        } else if (0.55 <= moonPhase && moonPhase < 0.75) {
            return "almost-old";
        } else if (0.75 <= moonPhase && moonPhase < 0.9) {
            return "old-moon";
        }
    }

    return {
        EventBus: _.extend({}, Backbone.Events),
        lodashHelper: {
            convertToDate: convertToDate,
            convertToTime: convertToTime,
            convertToWeekday: convertToWeekday,
            convertToF: convertToF,
            getTimeByOffset: getTimeByOffset,
            getWindDirection: getWindDirection,
            getMoonPhase: getMoonPhase
        },
        getSunPosition: getSunPosition,
        getSunOptions: getSunOptions,
        getCurrentPosition: getCurrentPosition
    };
});
define('forecast', ["jquery",
    "lodash"], function () {
    var Forecast = function () {

        this.API_KEY = "26710c2ac7fef0b6d5e2f629dcb090c0";

        this.baseUrl = "https://api.forecast.io/forecast/" + this.API_KEY + "/";

        this.fetch = function (latLng, callback) {
            var self = this;
            $.getJSON(self.baseUrl + latLng + "?units=si&callback=?", function (data) {
                callback(data);
            })
        };
    }

    return new Forecast();
});
/** @license
 * RequireJS plugin for async dependency load like JSONP and Google Maps
 * Author: Miller Medeiros
 * Version: 0.1.2 (2014/02/24)
 * Released under the MIT license
 */
define('async', [], function () {

    var DEFAULT_PARAM_NAME = 'callback',
        _uid = 0;

    function injectScript(src) {
        var s, t;
        s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = src;
        t = document.getElementsByTagName('script')[0];
        t.parentNode.insertBefore(s, t);
    }

    function formatUrl(name, id) {
        var paramRegex = /!(.+)/,
            url = name.replace(paramRegex, ''),
            param = (paramRegex.test(name)) ? name.replace(/.+!/, '') : DEFAULT_PARAM_NAME;
        url += (url.indexOf('?') < 0) ? '?' : '&';
        return url + param + '=' + id;
    }

    function uid() {
        _uid += 1;
        return '__async_req_' + _uid + '__';
    }

    return {
        load: function (name, req, onLoad, config) {
            if (config.isBuild) {
                onLoad(null); //avoid errors on the optimizer
            } else {
                var id = uid();
                //create a global variable that stores onLoad so callback
                //function can define new module after async load
                window[id] = onLoad;
                injectScript(formatUrl(req.toUrl(name), id));
            }
        }
    };
});


define('autocomplete', ["jquery",
    "lodash",
    "async!https://maps.googleapis.com/maps/api/js?key=AIzaSyAhZrD3LuU4EuGuINJJMVxouh-LJxWb7-8&libraries=places"], function ($, _) {
    "use strict";
    var Autocomplete = function () {
        this.collection = [];

        this.queryOptions = {
            types: ["(cities)"]
        };

        this.getGeocode = function (placeId, callback) {
            var geocoder = new google.maps.Geocoder(),
                coords = "";
            geocoder.geocode({
                'placeId': placeId
            }, function (results, status) {
                if (status !== google.maps.GeocoderStatus.OK) {
                    console.log("Geocode service failed due to: " + status);
                    return;
                }
                coords = results[0].geometry.location.lat() + "," + results[0].geometry.location.lng();
                callback(coords);
            });
        };

        this.getCitiesInfo = function (predictions, callback, thisArg) {
            var self = this;
            _.each(predictions, function (el) {
                if (el.place_id && (el.types[0] === "locality" || el.types[0] === "administrative_area_level_1" || el.types[0] === "administrative_area_level_2")) {

                    var offset = el.matched_substrings[0].offset,
                        matchLength = el.matched_substrings[0].length,
                        matchedString = _.first(el.terms).value.slice(offset, offset + matchLength),
                        otherParts = [_.first(el.terms).value.slice(0, offset), _.first(el.terms).value.slice(offset + matchLength)];

                    self.collection.push({
                        placeId: el.place_id,
                        matchedSubstring: matchedString,
                        otherParts: otherParts,
                        cityName: _.first(el.terms).value,
                        countryName: _.last(el.terms).value
                    });
                }
            });
            callback.call(thisArg, self.collection);
        };

        this.fetch = function (text, callback, thisArg) {
            var self = this,
                service = new google.maps.places.AutocompleteService();

            self.collection = [];

            service.getQueryPredictions({
                input: text,
                types: self.queryOptions.types
            }, function (predictions, status) {
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    console.log("Autocomplete failed due to: " + status);
                    return;
                }
                self.getCitiesInfo(predictions, callback, thisArg);
            });
        };
    };

    return new Autocomplete();
});
/*jslint nomen: true*/
define('CityModel', ["lodash",
    "forecast",
    "utils",
    "autocomplete"], function (_, forecast, utils, autocomplete) {
    "use strict";
    var CityModel = function (options) {
        _.extend(this, options);
        if (!this.uid) {
            this.uid = this.placeId + (new Date()).getTime();
        }
    };

    CityModel.prototype = {

        constructor: CityModel,

        fetchForecast: function () {
            var self = this,
                d = $.Deferred();
            autocomplete.getGeocode(self.placeId, function (coords) {
                self.coords = coords;
                self.updateForecast();
            });
            return d.promise();
        },

        //a faster version of fetchForecast, providing that we already knew coords
        updateForecast: function () {
            var self = this,
                d = $.Deferred();
            forecast.fetch(self.coords, function (data) {
                var now = new Date();

                self.forecast = data;
                self.updateTime = now.getTime() / 1000;

                utils.EventBus.trigger("CityModel:update", self);
            });

            return d.promise();
        }
    };

    return CityModel;
});
define('store', ["lodash"], function (_) {
    var store;

    function Store(name) {
        var self = this;
        this._CollectionName = name;

        this._settingName = "setting_" + name;

        if (!localStorage.getItem(name)) {

            localStorage.setItem(self._CollectionName, JSON.stringify([]));
            localStorage.setItem(self._settingName, JSON.stringify({
                activeDashboard: null,
                tempUnit: "C",
                updateInterval: 15,
                showDays: 7
            }));

        }
    }

    Store.prototype = {
        constructor: Store,

        saveCollection: function (collection) {
            var self = this;

            localStorage.setItem(self._CollectionName, JSON.stringify(collection));

        },

        getCollection: function () {
            var self = this;

            return JSON.parse(localStorage.getItem(self._CollectionName));
        },

        //I know this two next method will be slower than just simply use saveCollection when changes occur to CityCollection, but I implement it anyway, because imagine if this is not localStorage but some kind of database, then these two method will help because we dont have to re-write the whole databse but just only part of it

        updateByIdx: function (idx, changesObj) {
            var self = this,
                collection = JSON.parse(localStorage.getItem(self._CollectionName));

            _.forOwn(changesObj, function (value, key) {
                collection[idx][key] = value
            });

            self.saveCollection(collection);
        },

        addCity: function (cityModel) {
            var self = this,
                collection = JSON.parse(localStorage.getItem(self._CollectionName));

            collection.push(cityModel);

            self.saveCollection(collection);
        },

        updateSetting: function (changes) {
            var self = this,
                settings = JSON.parse(localStorage.getItem(self._settingName));

            _.forOwn(changes, function (value, key) {
                settings[key] = value;
            });

            localStorage.setItem(self._settingName, JSON.stringify(settings));
        },

        getSetting: function () {
            var self = this;
            return JSON.parse(localStorage.getItem(self._settingName));

        }
    };

    return new Store("WeatherApp");
})
;
/**
 * Created by Minh on 1/7/2016.
 */
/*jslint nomen:true*/
define('CityCollection', ["jquery",
    "lodash",
    "utils",
    "store",
    "CityModel"], function ($, _, utils, store, CityModel) {
    "use strict";

    /**
     *
     * @constructor
     */
    var CityCollection = function () {

        this.collection = [];

        this.updateInterval = null;

    };

    CityCollection.prototype = {

        constructor: CityCollection,
        /**
         *
         * @returns {Array}
         */
        getCollection: function () {
            return this.collection;
        },

        getInstance: function (cityModel) {
            return cityModel instanceof CityModel ? cityModel : new CityModel(cityModel);
        },

        add: function (cityModel) {
            var self = this,
                cityInstance = self.getInstance(cityModel);
            self.collection.push(cityInstance);

            utils.EventBus.trigger("cityCollection:add", cityInstance);
        },


        /**
         *
         * @param collection
         */
        addAll: function (collection) {
            var self = this;

            _.each(collection, function (cityModel) {

                self.collection.push(self.getInstance(cityModel));

            });

            utils.EventBus.trigger("cityCollection:addAll", self.getCollection());
        },

        /**
         * update all city forecast
         */
        updateAll: function () {
            var self = this;
            _.each(self.collection, function (cityModel) {
                cityModel.updateForecast();
            });
        },

        /**
         *
         * @param uids
         */
        remove: function (uids) {
            var self = this;

            _.each(uids, function (uid) {
                var idx = _.findIndex(self.collection, function (el) {
                    return el.uid === uid;
                });

                if (idx !== -1) {
                    self.collection.splice(idx, 1);
                }
            });

            utils.EventBus.trigger("cityCollection:remove", uids);
        },

        /**
         *
         * @param uid
         */
        getCityByUid: function (uid) {
            var self = this;

            return _.find(self.collection, function (el) {
                return el.uid === uid;
            });
        },

        /**
         *
         * @param interval
         */
        setUpdateInterval: function (interval) {
            var self = this;
            console.log(interval);
            self.cancelUpdateInterval();
            self.updateInterval = setInterval(function () {
                self.updateAll.call(self);
            }, interval);

        },

        /**
         * cancel update interval
         */
        cancelUpdateInterval: function () {

            clearInterval(this.updateInterval);

            this.updateInterval = null;

        }
    };

    return CityCollection;
});
/**
 * Created by Minh on 1/7/2016.
 * This controller will listen and handle events which directly change Collection and Model (adding, updating and removing)
 */

/*jslint nomen: true*/
define('CityController', ["jquery",
        "lodash",
        "utils",
        "CityModel",
        "CityCollection",
        "store"],
    function ($, _, utils, CityModel, CityCollection, Store) {
        "use strict";

        /**
         *
         * @constructor
         */

        var CityController = function () {

                this.cityCollection = new CityCollection();

                this.CityModel = CityModel;

                this.settings = {};
            },
            EventBus = utils.EventBus;

        CityController.prototype = {
            constructor: CityController,

            /**
             *
             * @param selected
             */
            addSelectedCities: function (selected) {
                var self = this;

                _.each(selected, function (el) {
                    var city = new self.CityModel(el);
                    city.fetchForecast();
                });
            },

            /**
             *
             * @param cityModel
             */
            cityModelUpdate: function (cityModel) {
                var self = this,
                    idx = _.findIndex(self.cityCollection.getCollection(), function (el) {
                        return el.uid === cityModel.uid;
                    }),
                    changes;
                if (idx === -1) {
                    self.cityCollection.add(cityModel);
                } else {
                    changes = {
                        updateTime: cityModel.updateTime,
                        forecast: cityModel.forecast
                    };
                    Store.updateByIdx(idx, changes);
                }
            },

            /**
             *
             * @param uid
             */
            dashboardUpdateRequest: function (uid) {
                var self = this;
                /*var city = self.cityCollection.getCityByUid(uid);

                 city.updateForecast();*/
                self.cityCollection.updateAll();
            },


            cityCollectionAdd: function () {
                var self = this;
                Store.saveCollection(self.cityCollection.getCollection());
            },

            /**
             *
             * @param selected
             */
            deleteCities: function (selected) {
                var self = this;
                self.cityCollection.remove(selected);
                Store.saveCollection(self.cityCollection.getCollection());
            },

            loadFromStorage: function () {
                var self = this,
                    collection = Store.getCollection();

                _.extend(self.settings, Store.getSetting());

                self.cityCollection.addAll(collection);

                self.cityCollection.setUpdateInterval(self.settings.updateInterval * 60000);

                EventBus.trigger("cityController:loadFromStorage");
            },

            /**
             *
             * @param changes
             */
            settingModelChange: function (changes) {
                var self = this;

                _.forOwn(changes, function (value, key) {

                    self.settings[key] = value;

                });

                if (_.has(changes, "updateInterval")) {
                    self.cityCollection.setUpdateInterval(changes.updateInterval * 60000);
                }

                EventBus.trigger("cityController:setting:change", changes);
            },

            initialize: function () {
                var self = this;


                EventBus.on("cityCollectionView:add", self.addSelectedCities, self);
                EventBus.on("CityModel:update", self.cityModelUpdate, self);
                EventBus.on("cityCollection:add", self.cityCollectionAdd, self);
                EventBus.on("cityCollectionView:remove", self.deleteCities, self);
                EventBus.on("dashboard:updateRequest", self.dashboardUpdateRequest, self);
                EventBus.on("SettingModel:change", self.settingModelChange, self);


                self.loadFromStorage();
            }
        };

        return new CityController();
    });
/**
 * @license RequireJS text 2.0.12 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
 define, window, process, Packages,
 java, location, Components, FileUtils */

define('text', ['module'], function (module) {
    'use strict';

    var text, fs, Cc, Ci, xpcIsWindows,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = {},
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.12',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {
                    }

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.indexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                    name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1, name.length);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config && config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config && config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                    text.useXhr;

            // Do not load if it is an empty: url
            if (url.indexOf('empty:') === 0) {
                onLoad();
                return;
            }

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                        parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                    "define(function () { return '" +
                    content +
                    "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
            //Use a '.js' file name so that it indicates it is a
            //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
        typeof process !== "undefined" &&
        process.versions && !!process.versions.node && !process.versions['node-webkit'])) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback, errback) {
            try {
                var file = fs.readFileSync(url, 'utf8');
                //Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file.indexOf('\uFEFF') === 0) {
                    file = file.substring(1);
                }
                callback(file);
            } catch (e) {
                if (errback) {
                    errback(e);
                }
            }
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
        text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status || 0;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        if (errback) {
                            errback(err);
                        }
                    } else {
                        callback(xhr.responseText);
                    }

                    if (masterConfig.onXhrComplete) {
                        masterConfig.onXhrComplete(xhr, url);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
        typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                if (line !== null) {
                    stringBuffer.append(line);
                }

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
        typeof Components !== 'undefined' && Components.classes &&
        Components.interfaces)) {
        //Avert your gaze!
        Cc = Components.classes;
        Ci = Components.interfaces;
        Components.utils['import']('resource://gre/modules/FileUtils.jsm');
        xpcIsWindows = ('@mozilla.org/windows-registry-key;1' in Cc);

        text.get = function (url, callback) {
            var inStream, convertStream, fileObj,
                readData = {};

            if (xpcIsWindows) {
                url = url.replace(/\//g, '\\');
            }

            fileObj = new FileUtils.File(url);

            //XPCOM, you so crazy
            try {
                inStream = Cc['@mozilla.org/network/file-input-stream;1']
                    .createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, false);

                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']
                    .createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(),
                    Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);

                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value);
            } catch (e) {
                throw new Error((fileObj && fileObj.path || '') + ': ' + e);
            }
        };
    }
    return text;
});


define('text!suggestionTmpl', [], function () {
    return '<li class="added-cities__item clearfix">\r\n  <div class="added-cities__item-desc">\r\n    <p class="added-cities__item-name"><%= otherParts[0] %><span class="white"><%= matchedSubstring %></span><%= otherParts[1] %></p>\r\n    <p class="added-cities__item-status"><%= countryName %></p>\r\n  </div>\r\n  <form class="right">\r\n    <input class="added-cities__item-checkbox" data-city-name="<%= cityName %>" data-city-placeId="<%= placeId %>" type="checkbox" name="sg_<%= placeId %>" id="sg_<%= placeId %>" />\r\n    <label class="added-cities__item-checkbox--ct" for="sg_<%= placeId %>"></label>\r\n  </form>\r\n</li>';
});


define('text!noResultTmpl', [], function () {
    return '<span class="no-result">No result</span>';
});

define('SuggestionView', ["jquery",
        "lodash",
        "utils",
        "text!suggestionTmpl",
        "text!noResultTmpl",
        "autocomplete"],
    function ($, _, utils, suggestionTmpl, noResultTmpl, autocomplete) {
        "use strict";
        var SuggestionView = function () {

            _.extend(this, {
                $input: $("#searchCity"),

                $placeholder: $("#suggestion-list"),

                cityTmpl: _.template(suggestionTmpl),

                searchItem: ".added-cities__item",

                selected: []
            })

        };

        SuggestionView.prototype = {

            constructor: SuggestionView,

            getSelected: function () {
                var self = this;
                self.selected = [];
                _.each(self.$placeholder.find(":checked"), function (el) {
                    self.selected.push({
                        cityName: $(el).attr("data-city-name"),
                        placeId: $(el).attr("data-city-placeId")
                    });
                });

                return self.selected;
            },

            showNoResult: function () {
                var self = this;

                self.$placeholder.html(noResultTmpl);
            },

            render: function (suggestions) {
                var self = this;

                self.$placeholder.empty();

                if (!suggestions.length) {
                    self.showNoResult();
                    return false;
                }

                _.each(suggestions, function (model) {
                    self.$placeholder.append(self.cityTmpl(model));
                });

                self.$placeholder.find("input").on("change", function () {
                    utils.EventBus.trigger("suggestSelection:change", self.getSelected());
                });
            },

            on: function () {
                this.$input.val("");
                this.showNoResult();
                this.$input.show().focus();
            },

            off: function () {
                var self = this;
                self.$input.hide();
            },

            initialize: function () {
                var self = this;

                self.$input.on("keyup", _.debounce(function () {
                    var $input = $(this);
                    if ($input.val()) {
                        autocomplete.fetch($input.val(), self.render, self);
                    } else {
                        self.showNoResult();
                    }
                }, 100));

                self.$placeholder.on("click", self.searchItem, function (event) {
                    if ($(this).is(event.target)) {
                        $(this).find("input").click();
                    }
                });

                self.$input.hide();
            }
        };

        return SuggestionView;
    });

define('text!cityViewTmpl', [], function () {
    return '<li id="sb-<%= uid %>" class="added-cities__item clearfix">\r\n  <span class="added-cities__item-icon"><i class="icon-<%= forecast.currently.icon %>"></i></span>\r\n  <span class="added-cities__item-temp"><%= tempUnit === "C"? forecast.currently.temperature.toFixed(0) : convertToF(forecast.currently.temperature) %>&deg;</span>\r\n  <div class="added-cities__item-desc">\r\n\t<p class="added-cities__item-name"><span class="white"> <%= cityName %> </span></p>\r\n    <p class="added-cities__item-status"><%= forecast.currently.summary %></p>\r\n  </div>\r\n  <form class="right">\r\n    <input class="added-cities__item-checkbox" type="checkbox" value="<%= uid %>" name="<%= uid %>" id="<%= uid %>" />\r\n    <label class="added-cities__item-checkbox--ct" for="<%= uid %>"></label>\r\n  </form>\r\n</li>';
});

/**
 * Created by Minh on 1/7/2016.
 */
/*jslint nomen:true*/
define('CityCollectionView', ["lodash",
        "jquery",
        "utils",
        "text!cityViewTmpl"],
    function (_, $, utils, cityViewTmpl) {
        "use strict";

        var CityCollectionView = function () {

            _.extend(this, {
                $menuBtn: $("#btn-menu"),

                $menu: $("#menu"),

                $upperMenu: $("#menu--upper"),

                $addBtn: $("#btn-add"),

                $deleteBtn: $("#btn-delete"),

                $listHolder: $("#added-city-list"),

                cityTemplate: _.template(cityViewTmpl),

                itemNamespace: "#sb-",

                adding: false,

                deleting: false,

                selected: []
            });
        };

        CityCollectionView.prototype = {

            constructor: CityCollectionView,

            render: function (model, settings) {
                var self = this,
                    modelCopy = _.clone(model, true);

                _.extend(modelCopy, settings);

                _.extend(modelCopy, {
                    convertToF: utils.lodashHelper.convertToF
                });

                return self.cityTemplate(modelCopy);
            },
            /**
             *
             * @param model
             * @param settings
             */
            addOne: function (model, settings) {
                var self = this;

                $(self.render(model, settings)).hide().appendTo(self.$listHolder).fadeIn(500);
                //self.$listHolder.append(self.cityTemplate(model));
            },

            /**
             *
             * @param collection
             * @param settings
             */
            addAll: function (collection, settings) {
                var self = this,
                    html = [];


                _.each(collection, function (model) {
                    html.push(self.render(model, settings));
                });

                self.$listHolder.html(html.join(""));
            },

            update: function (cityModel, settings) {
                var self = this;

                $(self.itemNamespace + cityModel.uid)
                    .html($(self.render(cityModel, settings)).html());
            },

            /**
             * add selected cities into view own array
             */
            getSelected: function () {
                var self = this;

                self.selected = [];

                _.each(self.$listHolder.find(":checked"), function (el) {

                    self.selected.push($(el).val());

                });
            },

            removeSelected: function () {
                var self = this;

                _.each(self.selected, function (uid) {
                    $(self.itemNamespace + uid).remove();
                });
            },

            /**
             * toggle Button style corresponding to flag
             */
            toggleBtnStyle: function () {
                var self = this;
                self.$addBtn.toggleClass("selecting", self.adding);
                self.$deleteBtn.toggleClass("selecting", self.deleting);
                if (self.adding) {

                    self.$deleteBtn.toggleClass("has-selected", !!self.selected.length);

                } else if (self.deleting) {

                    self.$addBtn.toggleClass("has-selected", !!self.selected.length);

                } else {

                    self.$deleteBtn.toggleClass("has-selected", !!self.selected.length);
                    self.$addBtn.toggleClass("has-selected", !!self.selected.length);

                }
            },

            /**
             * toggle menu style corresponding to flag
             */

            toggleMenuStyle: function () {
                var self = this;

                self.$menu.toggleClass("menu--suggest", self.adding);
                self.$menu.toggleClass("menu--delete", self.deleting);
            },

            /**
             * undo selecting cities
             */
            resetSelected: function () {
                var self = this;

                self.selected = [];
                _.each(self.$listHolder.find("input[type='checkbox']"), function (el) {

                    $(el).attr("checked", false);

                });
            },

            initialize: function () {
                var self = this;

                self.$menuBtn.on("click", function (e) {

                    e.preventDefault();
                    self.$menu.toggleClass("menu--open");

                });

                self.$addBtn.on("click", function () {
                    if (!self.adding && !self.deleting) {

                        self.adding = true;
                        utils.EventBus.trigger("addCityMode:on");

                    } else if (self.deleting) { //if deleting, click on addBtn will confirm selection

                        self.deleting = false;

                        if (self.selected.length) {

                            self.getSelected();
                            self.removeSelected();
                            utils.EventBus.trigger("cityCollectionView:remove", self.selected);
                            self.resetSelected();

                        } else {

                            self.adding = true;
                            utils.EventBus.trigger("addCityMode:on");

                        }
                    } else if (self.adding) {

                        self.adding = false;
                        self.resetSelected();
                        utils.EventBus.trigger("addCityMode:off");

                    }
                    self.toggleMenuStyle();
                    self.toggleBtnStyle();
                });

                self.$deleteBtn.on("click", function () {

                    if (!self.adding && !self.deleting) {

                        self.deleting = true;

                    } else if (self.deleting) {

                        self.deleting = false;
                        self.resetSelected();

                    } else if (self.adding) { //if adding, click on deleteBtn will confirm selection

                        self.adding = false;
                        utils.EventBus.trigger("addCityMode:off");

                        if (self.selected.length) {

                            utils.EventBus.trigger("cityCollectionView:add", self.selected);
                            self.resetSelected();

                        } else {

                            self.deleting = true;

                        }
                    }
                    self.toggleMenuStyle();
                    self.toggleBtnStyle();
                });

                self.$listHolder.on("click", ".added-cities__item", function (event) {
                    var cityUid = $(this).attr("id").slice(3);

                    if (!self.deleting) {

                        utils.EventBus.trigger("cityCollectionViewItem:click", cityUid);

                    } else if ($(this).is(event.target)) {

                        $(this).find("input").click();

                    }
                });

                self.$listHolder.on("click", ".added-cities__item-checkbox", function () {
                    self.getSelected();
                    self.toggleBtnStyle();
                });

                self.$upperMenu.perfectScrollbar();
            }
        };

        return CityCollectionView;
    })
;
/**
 * Created by Minh on 1/7/2016.
 *
 * This controller will handle events related to sidebar, can read and render CityCollection inherited from CityController
 */
/*jslint nomen: true*/
define('Sidebar/SidebarController', ["jquery",
        "lodash",
        "utils",
        "SuggestionView",
        "CityCollectionView",
        "CityController"],
    function ($, _, utils, SuggestionView, CityCollectionView, CityController) {
        "use strict";

        var SidebarController = function () {

                _.extend(this, CityController);

                this.cityCollectionView = new CityCollectionView();

                this.suggestionView = new SuggestionView();
            },
            EventBus = utils.EventBus;

        _.extend(SidebarController.prototype, {

            constructor: SidebarController,

            /**
             * Handle event when auto-complete suggestion change
             * @param selected
             */

            suggestionChange: function (selected) {
                var self = this;

                self.cityCollectionView.selected = selected;
                self.cityCollectionView.toggleBtnStyle();
            },

            addCityModeOn: function () {
                var self = this;

                self.suggestionView.on();
            },

            addCityModeOff: function () {
                var self = this;

                self.suggestionView.off();
            },

            cityCollectionUpdate: function (cityModel) {
                var self = this;

                self.cityCollectionView.update(cityModel, self.settings);
            },

            /**
             *
             * @param cityModel
             */
            cityCollectionAdd: function (cityModel) {
                var self = this;

                self.cityCollectionView.addOne(cityModel, self.settings);
            },

            cityCollectionAddAll: function (collection) {
                var self = this;

                self.cityCollectionView.addAll(collection, self.settings);
            },

            /**
             *
             * @param changes
             */

            settingChange: function (changes) {
                var self = this;

                if (_.has(changes, "tempUnit")) {

                    self.cityCollectionView.addAll(self.cityCollection.getCollection(), self.settings);

                }
            },

            initialize: function () {
                var self = this;

                EventBus.on("suggestSelection:change", self.suggestionChange, self);
                EventBus.on("addCityMode:on", self.addCityModeOn, self);
                EventBus.on("addCityMode:off", self.addCityModeOff, self);
                EventBus.on("CityModel:update", self.cityCollectionUpdate, self);
                EventBus.on("cityCollection:add", self.cityCollectionAdd, self);
                EventBus.on("cityCollection:addAll", self.cityCollectionAddAll, self);
                EventBus.on("cityController:setting:change", self.settingChange, self);

                self.cityCollectionView.initialize();
                self.suggestionView.initialize();
            }
        });

        return SidebarController;
    });

define('text!galleryItemTmpl', [], function () {
    return '<li id="db-<%= uid %>" class="city-list__item">\r\n    <div class="<%= forecast.currently.icon.match(\'snow\') !== null? \'snow\' : forecast.currently.icon.match(\'rain\') !== null? \'rain\' : \'\' %>">\r\n        <section class="forecast forecast--hourly">\r\n            <div class="forecast__half">\r\n                <div class="city-desc">\r\n                    <p class="update">\r\n                        <span class="sr-only">Time of last update:</span>\r\n                        <time class="update__time" datetime="<%= updateTime %>"><%= getTimeByOffset(updateTime,\r\n                            forecast.offset) %>\r\n                        </time>\r\n                        <a data-update="<%= uid %>" href="#" class="update__button" role="button"\r\n                           title="Click here to update forecast data for this city">\r\n                            <span class="sr-only">Click here to update data</span>\r\n                            <i class="icon-refresh"></i>\r\n                        </a>\r\n                    </p>\r\n                    <h1 class="city-desc__name"><%= cityName %></h1>\r\n\r\n                    <h2 class="city-desc__date">\r\n                        <time datetime="<%= convertToDate(forecast.daily.data[0].time) %>"><%=\r\n                            convertToDate(forecast.daily.data[0].time) %>\r\n                        </time>\r\n                    </h2>\r\n                </div>\r\n                <div class="current clearfix">\r\n                    <div class="current__icon"><i class="icon-<%= forecast.currently.icon %>"></i></div>\r\n                    <div class="current__text">\r\n                        <p class="current__temp"><%= tempUnit === "C"? forecast.currently.temperature.toFixed(0) :\r\n                            convertToF(forecast.currently.temperature) %>&deg;</p>\r\n\r\n                        <p class="current__status">//<%= forecast.currently.summary %></p>\r\n                    </div>\r\n                    <div class="current__moon">\r\n                        <p class="current__moon-icon"><i\r\n                                class="icon-<%= getMoonPhase(forecast.daily.data[0].moonPhase) %>"></i></p>\r\n\r\n                        <p class="current__moon-time">\r\n                            <span class="sr-only">When the Moon set:</span>\r\n                            <time datetime="<%= getTimeByOffset(forecast.daily.data[0].sunsetTime, forecast.offset) %>">\r\n                                <%= getTimeByOffset(forecast.daily.data[0].sunsetTime, forecast.offset) %>\r\n                            </time>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="forecast__half">\r\n                <ul class="hourly clearfix">\r\n                    <% for (var i = 0; i < 24; i++) { var data = forecast.hourly.data[i]; %>\r\n                    <li class="hourly__item">\r\n                        <time class="hourly__item-time" datetime="getTimeByOffset(data.time, forecast.offset)"><%=\r\n                            getTimeByOffset(data.time, forecast.offset) %>\r\n                        </time>\r\n                        <p class="hourly__item-icon"><i class="icon-<%= data.icon %>"></i></p>\r\n\r\n                        <p class="hourly__item-temp"><%= tempUnit === "C"? data.temperature.toFixed(0) :\r\n                            convertToF(data.temperature) %>&deg;</p>\r\n                    </li>\r\n                    <% } %>\r\n                </ul>\r\n                <ul class="add-info">\r\n                    <li class="add-info__item">\r\n                        <p class="add-info__item-icon"><i class="icon-humidity"></i></p>\r\n\r\n                        <p class="add-info__item-data"><span class="data-humidity"><%= (parseFloat(forecast.currently.humidity) * 100).toFixed(0) %>%</span>\r\n                        </p>\r\n                    </li>\r\n                    <li class="add-info__item">\r\n                        <p style="transform: rotate(<%= forecast.currently.windBearing %>deg)"\r\n                           class="add-info__item-icon"><i class="icon-wind-direction"></i><span\r\n                                style="transform: rotate(-<%= forecast.currently.windBearing %>deg)"\r\n                                class="add-info__item-wind-direction"><%= getWindDirection(forecast.currently.windBearing) %></span>\r\n                        </p>\r\n\r\n                        <p class="add-info__item-data"><span\r\n                                class="data-wind-velocity"><%= parseFloat(forecast.currently.windSpeed).toFixed(1) %><sup>m/c</sup></span>\r\n                        </p>\r\n                    </li>\r\n                    <li class="add-info__item">\r\n                        <p class="add-info__item-icon"><i class="icon-sunrise"></i></p>\r\n\r\n                        <p class="add-info__item-data">\r\n                            <time class="data-sunrise" datetime="<%= forecast.daily.data[0].sunriseTime %>"><%=\r\n                                getTimeByOffset(forecast.daily.data[0].sunriseTime, forecast.offset) %>\r\n                            </time>\r\n                        </p>\r\n                    </li>\r\n                    <li class="add-info__item">\r\n                        <p class="add-info__item-icon"><i class="icon-sunset"></i></p>\r\n\r\n                        <p class="add-info__item-data">\r\n                            <time class="data-sunset" datetime="<%= forecast.daily.data[0].sunsetTime %>"><%=\r\n                                getTimeByOffset(forecast.daily.data[0].sunsetTime, forecast.offset) %>\r\n                            </time>\r\n                        </p>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </section>\r\n        <section class="forecast forecast--daily">\r\n            <ul class="daily">\r\n                <% for (var i = 0; i < 7; i++) { var data = forecast.daily.data[i]; %>\r\n                <li class="daily__item">\r\n                    <p class="daily__item-text clearfix">\r\n                        <span class="dail y__item-weekday"><%= i!==0? convertToWeekday(data.time) : "Today" %></span>\r\n                        <span class="daily__item-icon"><i class="icon-<%= data.icon %>"></i></span>\r\n                    </p>\r\n\r\n                    <p class="daily__item-temp">\r\n                        <span class="daily__item-temp-text"><%= tempUnit === "C"? data.temperatureMin.toFixed(0) : convertToF(data.temperatureMin) %>&deg;</span>\r\n                        <span class="daily__item-temp-indicator"></span>\r\n                        <span class="daily__item-temp-text"><%= tempUnit === "C"? data.temperatureMax.toFixed(0) : convertToF(data.temperatureMax) %>&deg;</span>\r\n                    </p>\r\n                </li>\r\n                <% } %>\r\n            </ul>\r\n        </section>\r\n    </div>\r\n</li>';
});


define('text!sliderbtnTmpl', [], function () {
    return '<li data-background= "<%= dataBackground %>" data-sun-position="<%= dataSun %>" data-city-slider="<%= uid %>" data-slider="<%= dataSlider %>" class="slider-control__item"><i class="icon-next-window"></i></li>';
});

/**
 * Created by Minh on 1/7/2016.
 */
/*jslint nomen: true*/
define('DashboardView', ["lodash",
    "jquery",
    "text!galleryItemTmpl",
    "text!sliderbtnTmpl",
    "utils"], function (_, $, galleryTmpl, sliderBtnTmpl, utils) {

    "use strict";

    /**
     *
     * @constructor
     */
    function DashboardView() {
        var self = this,
            sunRadius = 300,
            sunOptions = utils.getSunOptions(sunRadius);
        _.extend(self, {
            $listHolder: $("#city-list"),

            galleryTmpl: _.template(galleryTmpl),

            $paginationHolder: $("#slider-control"),

            itemNamespace: "#db-", //for easily selecting dashboardItem

            $dailyHolder: ".daily",

            $controlBtnTmpl: _.template(sliderBtnTmpl),

            updateBtn: ".update__button",

            sunBlock: "#sun-block",

            sunRadius: sunRadius,

            sunOptions: sunOptions,

            sunArcBaseParams: {
                center: [sunOptions.Xc, sunOptions.Yc],
                radius: sunOptions.R
            },

            lastSunPosition: null,

            sunIsRunning: false,

            activeDashboard: null
        });
    }

    DashboardView.prototype = {

        constructor: DashboardView,

        /**
         *
         * @param cityModel
         * @returns {*}
         */

        getDataSun: function (cityModel) {
            var self = this,
                sunriseTime = cityModel.forecast.daily.data[0].sunriseTime,
                sunsetTime = cityModel.forecast.daily.data[0].sunsetTime,
                sunPosition = utils.getSunPosition(200, cityModel.updateTime, sunriseTime, sunsetTime);

            return parseFloat(cityModel.updateTime) < sunriseTime ? self.sunOptions.sunRiseDeg :
                parseFloat(cityModel.updateTime) > sunsetTime ? self.sunOptions.sunSetDeg : sunPosition;
        },

        getDataBackground: function (cityModel) {
            var temp = cityModel.forecast.currently.temperature,
                currentTime = parseFloat(cityModel.updateTime),
                sunsetTime = parseFloat(cityModel.forecast.daily.data[0].sunsetTime),
                sunriseTime = parseFloat(cityModel.forecast.daily.data[0].sunriseTime);

            if (currentTime > sunriseTime && currentTime < sunsetTime) {
                if (currentTime - sunriseTime < 7200) {
                    return temp > 20 ? "morning--hot-season" : "morning--cold-season";
                } else {
                    return temp > 20 ? "day--hot-season" : "day--cold-season";
                }
            } else {
                if (currentTime - sunsetTime < 7200 && currentTime - sunsetTime > 0) {
                    return temp > 20 ? "evening--hot-season" : "evening--cold-season";
                }
                return "night";
            }
        },

        renderCity: function (cityModel, settings) {
            var self = this,
                model = _.clone(cityModel, true);

            _.extend(model, utils.lodashHelper);

            _.extend(model, settings);

            return self.galleryTmpl(model);
        },

        renderPagination: function (cityModel, idx) {
            var self = this;
            return self.$controlBtnTmpl({
                uid: cityModel.uid,
                dataSlider: idx,
                dataSun: self.getDataSun(cityModel),
                dataBackground: self.getDataBackground(cityModel)
            });
        },

        addCity: function (cityModel, settings) {
            var self = this;

            self.$listHolder.append(self.renderCity(cityModel, settings));
            self.$paginationHolder.append(self.renderPagination(cityModel, self.$listHolder.children().length));
            if (self.$listHolder.children().length === 1) {
                self.moveToSlide(1);
            }
            $(self.itemNamespace + cityModel.uid).find(".hourly").perfectScrollbar();
        },

        updateCity: function (cityModel, settings) {
            var self = this;

            //update forecast data
            $(self.itemNamespace + cityModel.uid)
                .html($(self.renderCity(cityModel, settings)).html())
                .find(".hourly").perfectScrollbar();

            //update pagination
            $("[data-city-slider=" + cityModel.uid + "]")
                .attr("data-background", self.getDataBackground(cityModel))
                .attr("data-sun-position", self.getDataSun(cityModel));

            self.moveToSlide(self.activeDashboard);
        },

        /**
         *
         * @param collection
         * @param settings
         */

        addCities: function (collection, settings) {
            var self = this,
                htmlCity = [],
                htmlPagination = [];

            _.each(collection, function (el, idx) {
                htmlCity.push(self.renderCity(el, settings));
                htmlPagination.push(self.renderPagination(el, idx + 1));
            });

            self.$listHolder
                .html(htmlCity.join(""))
                .find(".hourly").perfectScrollbar();

            self.$paginationHolder.html(htmlPagination.join(""));
        },

        /**
         *
         * @param id
         */

        moveToSlide: function (id) {
            var self = this,
                indicator;

            id = id !== undefined ? id : self.$listHolder.children().length;

            indicator = $("[data-slider=" + id + "]");

            if (indicator.length) {
                indicator.click();
            } else {
                self.$listHolder[0].style.transform = "translateX(0)";
            }
        },

        /**
         *
         * @param uid
         */
        moveToSlideByUid: function (uid) {

            $("[data-city-slider=" + uid + "]").click();

        },

        moveNext: function () {
            var self = this;

            if (parseInt(self.activeDashboard) < self.$listHolder.children().length) {
                self.moveToSlide(parseInt(self.activeDashboard) + 1);
            } else {
                return false;
            }

        },

        moveBack: function () {
            var self = this;

            if (self.activeDashboard) {
                self.moveToSlide(parseInt(self.activeDashboard) - 1)
            }
        },

        /**
         *
         * @param collection
         */

        reloadPagination: function (collection) {
            var self = this,
                html = [];

            _.each(collection, function (cityModel, idx) {
                html.push(self.renderPagination(cityModel, idx + 1));
            });
            self.$paginationHolder.html(html);
        },

        /**
         *
         * @param selected
         */

        removeSelected: function (selected) {
            var self = this;

            _.each(selected, function (uid) {
                $(self.itemNamespace + uid).remove();
            });
        },

        /**
         *
         * @param showDays
         */
        toggleDailyDisplay: function (showDays) {
            var self = this;

            $(self.$dailyHolder).children().hide();
            $(self.$dailyHolder).children().removeClass("last-child");

            _.each($(self.$dailyHolder), function (el) {
                $(el).children(":lt(" + showDays + ")").show();
            });

            $(self.$dailyHolder).children(":nth-child(" + (showDays) + ")").addClass("last-child");
        },

        /**
         *
         * @param end
         */

        moveSunTo: function (end) {
            var self = this,
                direction,
                arcParams,
                lastSunPosition,
                currentCoords = {};

            end = parseFloat(end);

            if (!self.sunIsRunning) {
                self.sunIsRunning = true;
                lastSunPosition = self.lastSunPosition ? parseFloat(self.lastSunPosition) : parseFloat(self.sunOptions.sunRiseDeg);
            } else {
                $(self.sunBlock).stop(true, false);
                _.extend(currentCoords, {
                    top: parseFloat($(self.sunBlock).css("top")),
                    left: parseFloat($(self.sunBlock).css("left"))
                });
                lastSunPosition = utils.getCurrentPosition(currentCoords, {
                    left: self.sunOptions.Xc,
                    top: self.sunOptions.Yc
                });
            }

            direction = end > lastSunPosition ? 1 : -1;

            arcParams = _.extend({
                start: lastSunPosition,
                end: end,
                dir: direction
            }, self.sunArcBaseParams);

            $(self.sunBlock).animate({path: new $.path.arc(arcParams)}, 3000, "linear", function () {
                self.sunIsRunning = false;
                self.lastSunPosition = end;
            });
        },

        resetBackground: function () {
            $("body").attr("class", "");
            this.$listHolder.css({
                transform: "translateX(0)"
            });
            this.moveSunTo(this.sunOptions.sunRiseDeg);
        },

        initialize: function () {
            var self = this,
                hammerSwipe = new Hammer(self.$listHolder[0]);

            self.$listHolder.on("click", self.updateBtn, function () {
                var uid = $(this).attr("data-update");
                utils.EventBus.trigger("dashboard:updateRequest", uid);
            });

            hammerSwipe.on("swipe", function (event) {
                if (event.direction === 2) {
                    self.moveNext();
                } else if (event.direction === 4) {
                    self.moveBack();
                }
            });


            self.$paginationHolder.on("click", ".slider-control__item", function () {
                self.$paginationHolder
                    .find("i")
                    .removeClass("icon-active-window")
                    .addClass("icon-next-window");

                $(this)
                    .find("i")
                    .removeClass("icon-next-window")
                    .addClass("icon-active-window");

                var dataSlider = $(this).attr("data-slider"),
                    dataSun = $(this).attr("data-sun-position"),
                    dataBackground = $(this).attr("data-background"),
                    distance = (-(parseFloat(dataSlider) - 1) * 100) + "%";

                self.$listHolder.css({
                    transform: "translateX(" + distance + ")"
                });

                self.activeDashboard = dataSlider;

                $("body").attr("class", dataBackground);

                self.moveSunTo(dataSun);

                utils.EventBus.trigger("dashboardView:slideChange", dataSlider);
            });
        }

    };

    return DashboardView;
})
;
/**
 * Created by Minh on 1/7/2016.
 * This controller will handle events related to dashboard, can read and render CityCollection inherited from CityController
 */
/*jslint nomen: true*/
define('DashboardController', ["jquery",
        "lodash",
        "utils",
        "DashboardView",
        "CityController"],
    function ($, _, utils, DashboardView, CityController) {
        "use strict";

        /**
         *
         * @constructor
         */

        var DashboardController = function () {

                _.extend(this, CityController);

                this.dashboardView = new DashboardView();
            },
            EventBus = utils.EventBus;

        _.extend(DashboardController.prototype, {

            constructor: DashboardController,

            /**
             *
             * @param cityModel
             */

            cityCollectionUpdate: function (cityModel) {
                var self = this;

                self.dashboardView.updateCity(cityModel, self.settings);
                self.dashboardView.toggleDailyDisplay(self.settings.showDays);
            },

            /**
             *
             * @param cityModel
             */
            cityCollectionAdd: function (cityModel) {
                var self = this;
                self.dashboardView.addCity(cityModel, self.settings);
                self.dashboardView.toggleDailyDisplay(self.settings.showDays);
            },

            cityCollectionAddAll: function (collection) {
                var self = this;

                self.dashboardView.addCities(collection, self.settings);
            },

            /**
             *
             * @param selected
             */

            deleteCities: function (selected) {
                var self = this;
                self.dashboardView.removeSelected(selected);
                self.dashboardView.reloadPagination(self.cityCollection.getCollection());
                if (self.cityCollection.getCollection().length === 0) {
                    self.dashboardView.resetBackground();
                } else {
                    self.dashboardView.moveToSlide(1);
                }
            },

            /**
             *
             * @param uid
             */

            cityCollectionViewClick: function (uid) {
                var self = this;

                self.dashboardView.moveToSlideByUid(uid);
            },

            slideChange: function (dataSlider) {
                var self = this;

                self.settings.activeDashboard = dataSlider;

                EventBus.trigger("dashboardController:slideChange", dataSlider);
            },

            /**
             *  toggle daily display after loading from Storage
             */

            loadFromStorage: function () {
                var self = this;

                self.dashboardView.toggleDailyDisplay(self.settings.showDays);

                if (self.settings.activeDashboard) {
                    self.dashboardView.moveToSlide(self.settings.activeDashboard);
                }
            },

            /**
             *
             * @param changes
             */

            settingChange: function (changes) {
                var self = this;

                _.forOwn(changes, function (value, key) {

                    switch (key) {
                        case "showDays":
                            self.dashboardView.toggleDailyDisplay(value);
                            break;

                        case "tempUnit":
                            self.dashboardView.addCities(self.cityCollection.getCollection(), self.settings);
                            self.dashboardView.toggleDailyDisplay(self.settings.showDays);
                            if (self.settings.activeDashboard) {
                                self.dashboardView.moveToSlide(self.settings.activeDashboard);
                            } else {
                                self.dashboardView.moveToSlide(1);
                            }
                            break;
                        default:
                            return false;
                    }
                });
            },

            initialize: function () {
                var self = this;

                EventBus.on("CityModel:update", self.cityCollectionUpdate, self);
                EventBus.on("cityCollection:add", self.cityCollectionAdd, self);
                EventBus.on("cityCollection:addAll", self.cityCollectionAddAll, self);
                EventBus.on("cityCollection:remove", self.deleteCities, self);
                EventBus.on("cityCollectionViewItem:click", self.cityCollectionViewClick, self);
                EventBus.on("dashboardView:slideChange", self.slideChange, self);
                EventBus.on("cityController:setting:change", self.settingChange, self);
                EventBus.on("cityController:loadFromStorage", self.loadFromStorage, self);

                self.dashboardView.initialize();
            }
        });

        return DashboardController;
    });
/*jslint nomen:true*/
define('SettingModel', ["jquery",
    "lodash",
    "utils"], function ($, _, utils) {
    "use strict";

    function SettingModel(options) {

        options = _.extend({
            _maxShowDays: 7,
            _minShowDays: 1,
            _maxUpdateInterval: 60,
            _minUpdateInterval: 15,
            _stepShowDays: 1,
            _stepUpdateInterval: 15,
            activeDashboard: null,
            showDays: 7,
            tempUnit: "C",
            updateInterval: 15
        }, options);

        _.extend(this, options);
    }

    SettingModel.prototype = {

        constructor: SettingModel,

        updateSetting: function (changes) {
            var self = this;

            _.forOwn(changes, function (value, key) {
                self[key] = value;
            });

            utils.EventBus.trigger("SettingModel:change", changes);
        },

        getSetting: function (property) {
            return this[property];
        },

        getAllSetting: function () {
            var self = this;

            return {
                activeDashboard: self.activeDashboard,
                showDays: self.showDays,
                tempUnit: self.tempUnit,
                updateInterval: self.updateInterval,
                maxShowDays: self._maxShowDays,
                minShowDays: self._minShowDays,
                stepShowDays: self._stepShowDays,
                minUpdateInterval: self._minUpdateInterval,
                maxUpdateInterval: self._maxUpdateInterval,
                stepUpdateInterval: self._stepUpdateInterval
            };
        }
    };

    return SettingModel;
});
/*jslint nomen: true*/
define('SettingView', ["jquery",
    "lodash",
    "utils"], function ($, _, utils) {
    "use strict";

    function SettingView() {

        _.extend(this, {
            $unitSwitch: $(".scale-sys__item"),

            $updateIntervalDragger: $("#dr-interval"),

            $forecastRangeDragger: $("#dr-forecast-range"),

            $updateIntervalLabel: $("#lb-interval"),

            $forecastRangeLabel: $("#lb-forecast-range")
        });


    }

    SettingView.prototype = {

        constructor: SettingView,
        /**
         *
         * @param options
         */

        updateView: function (options) {
            var self = this;
            self.$updateIntervalDragger.slider("value", parseFloat(options.updateInterval));

            self.$forecastRangeDragger.slider("value", parseFloat(options.showDays));

            self.$updateIntervalLabel.html(options.updateInterval);

            self.$forecastRangeLabel.html(options.showDays);

            $("[data-unit=" + options.tempUnit + "]").click();
        },

        /**
         *
         * @param options
         */

        initialize: function (options) {
            var self = this;


            self.$unitSwitch.on("click", function (event) {

                self.$unitSwitch.removeClass("scale-sys__item--active");

                $(this).addClass("scale-sys__item--active");

                utils.EventBus.trigger("SettingView:change", {
                    tempUnit: $(event.currentTarget).attr("data-unit")
                });
            });

            self.$updateIntervalDragger.slider({
                range: 'min',
                min: parseInt(options.minUpdateInterval),
                max: parseInt(options.maxUpdateInterval),
                step: parseInt(options.stepUpdateInterval)
            });

            self.$forecastRangeDragger.slider({
                range: 'min',
                min: parseInt(options.minShowDays),
                max: parseInt(options.maxShowDays),
                step: parseInt(options.stepShowDays)
            });

            self.updateView(options);

            self.$updateIntervalDragger.on("slidechange", function (event) {

                self.$updateIntervalLabel.html($(event.currentTarget).slider("value"));

                utils.EventBus.trigger("SettingView:change", {
                    updateInterval: $(event.currentTarget).slider("value")
                });
            });

            self.$forecastRangeDragger.on("slidechange", function (event) {

                self.$forecastRangeLabel.html($(event.currentTarget).slider("value"));

                utils.EventBus.trigger("SettingView:change", {
                    showDays: $(event.currentTarget).slider("value")
                });
            });
        }
    };

    return SettingView;
});
define('SettingController', ["jquery",
    "lodash",
    "SettingModel",
    "SettingView",
    "utils",
    "store"], function ($, _, SettingModel, SettingView, utils, Store) {

    var EventBus = utils.EventBus;

    function SettingController() {
        this.settingModel = new SettingModel();

        this.settingView = new SettingView();
    }

    SettingController.prototype = {

        constructor: SettingController,

        settingViewChange: function (changes) {
            var self = this;

            self.settingModel.updateSetting(changes);
        },

        settingModelChange: function (changes) {

            Store.updateSetting(changes);

        },

        slideChange: function (dataSlider) {
            var self = this;

            self.settingModel.updateSetting({
                activeDashboard: dataSlider
            });
        },

        initialize: function () {
            var self = this;

            EventBus.on("SettingView:change", self.settingViewChange, self);

            EventBus.on("SettingModel:change", self.settingModelChange, self);

            EventBus.on("dashboardController:slideChange", self.slideChange, self);

            self.settingModel.updateSetting(Store.getSetting());

            self.settingView.initialize(self.settingModel.getAllSetting());
        }
    };

    return SettingController;
});
/*jslint nomen:true*/
require.config({
    shim: {
        jqueryUi: ["jquery"],
        perfectScrollbar: ["jquery"],
        jqueryPath: ["jquery"],
        hammerjs: {
            exports: "Hammer"
        },
        lodash: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },

    paths: {
        utils: 'utils/utils',
        'async': 'libs/requirejs-plugins/src/async',

        jquery: 'libs/jquery/dist/jquery.min',
        lodash: 'libs/lodash/lodash.min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone',
        text: 'libs/requirejs-text/text',

        autocomplete: "vendors/google/searchCity",
        forecast: "vendors/forecast/forecast",
        store: "vendors/localstorage/Store",
        jqueryUi: "libs/jquery-ui-1.11.4.custom/jquery-ui",
        perfectScrollbar: "libs/perfect-scrollbar/perfect-scrollbar.jquery.min",
        hammerjs: "libs/hammerjs/hammer",
        jqueryPath: "libs/jquery-path/jquery.path",

        CityCollection: "CityCollection/CityCollection",
        CityModel: "CityCollection/CityModel",

        SuggestionView: "Sidebar/SuggestionView",
        CityCollectionView: "Sidebar/CityCollectionView",
        DashboardView: "Dashboard/DashboardView",

        CityController: "CityCollection/CityController",
        SidebarController: "Sidebar/SidebarController",
        DashboardController: "Dashboard/DashboardController",

        suggestionTmpl: "Sidebar/templates/citySuggestion.html",
        noResultTmpl: "Sidebar/templates/noResult.html",
        cityViewTmpl: "Sidebar/templates/cityView.html",
        galleryItemTmpl: "Dashboard/templates/gallery.html",
        sliderbtnTmpl: "Dashboard/templates/sliderBtn.html",


        SettingModel: "Setting/SettingModel",
        SettingView: "Setting/SettingView",
        SettingController: "Setting/SettingController"
    }
});

require(["jqueryUi",
        "perfectScrollbar",
        "jqueryPath",
        "hammerjs",
        "CityController",
        "Sidebar/SidebarController",
        "DashboardController",
        "SettingController"],

    function (jqui,
              ps,
              jqueryPath,
              hammerjs,
              cityController,
              SidebarController,
              DashboardController,
              SettingController) {

        "use strict";

        var settingController = new SettingController(),
            sidebarController = new SidebarController(),
            dashboardController = new DashboardController();

        settingController.initialize();
        sidebarController.initialize();
        dashboardController.initialize();
        cityController.initialize();

    });
define("main", function () {
});

