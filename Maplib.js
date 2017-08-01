! function(n, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    function di(n) {
        var t = n.length,
            r = i.type(n);
        return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
    }

    function gi(n, t, r) {
        if (i.isFunction(t)) return i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n, function(n) {
            return n === t !== r
        });
        if ("string" == typeof t) {
            if (bo.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }

    function gr(n, t) {
        do n = n[t]; while (n && 1 !== n.nodeType);
        return n
    }

    function ve(n) {
        var t = bi[n] = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function ou() {
        u.addEventListener ? (u.removeEventListener("DOMContentLoaded", l, !1), n.removeEventListener("load", l, !1)) : (u.detachEvent("onreadystatechange", l), n.detachEvent("onload", l))
    }

    function l() {
        (u.addEventListener || "load" === event.type || "complete" === u.readyState) && (ou(), i.ready())
    }

    function wf(n, t, r) {
        if (void 0 === r && 1 === n.nodeType) {
            var u = "data-" + t.replace(uf, "-$1").toLowerCase();
            if (r = n.getAttribute(u), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : cr.test(r) ? i.parseJSON(r) : r
                } catch (f) {}
                i.data(n, t, r)
            } else r = void 0
        }
        return r
    }

    function tr(n) {
        var t;
        for (t in n)
            if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function pf(n, t, r, u) {
        if (i.acceptData(n)) {
            var s, e, h = i.expando,
                c = n.nodeType,
                o = c ? i.cache : n,
                f = c ? n[h] : n[h] && h;
            if (f && o[f] && (u || o[f].data) || void 0 !== r || "string" != typeof t) return f || (f = c ? n[h] = v.pop() || i.guid++ : h), o[f] || (o[f] = c ? {} : {
                toJSON: i.noop
            }), ("object" == typeof t || "function" == typeof t) && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)), e = o[f], u || (e.data || (e.data = {}), e = e.data), void 0 !== r && (e[i.camelCase(t)] = r), "string" == typeof t ? (s = e[t], null == s && (s = e[i.camelCase(t)])) : s = e, s
        }
    }

    function cf(n, t, u) {
        if (i.acceptData(n)) {
            var o, s, h = n.nodeType,
                f = h ? i.cache : n,
                e = h ? n[i.expando] : i.expando;
            if (f[e]) {
                if (t && (o = u ? f[e] : f[e].data)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in o) ? t = [t] : (t = i.camelCase(t), t = t in o ? [t] : t.split(" ")), s = t.length; s--;) delete o[t[s]];
                    if (u ? !tr(o) : !i.isEmptyObject(o)) return
                }(u || (delete f[e].data, tr(f[e]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[e] : f[e] = null)
            }
        }
    }

    function vt() {
        return !0
    }

    function rt() {
        return !1
    }

    function vr() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function lu(n) {
        var i = au.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length) t.createElement(i.pop());
        return t
    }

    function f(n, t) {
        var e, u, o = 0,
            r = typeof n.getElementsByTagName !== s ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll !== s ? n.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], e = n.childNodes || n; null != (u = e[o]); o++) !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
        return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }

    function ro(n) {
        wi.test(n.type) && (n.defaultChecked = n.checked)
    }

    function ef(n, t) {
        return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function of(n) {
        return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type, n
    }

    function sf(n) {
        var t = de.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function oi(n, t) {
        for (var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }

    function hf(n, t) {
        if (1 === t.nodeType && i.hasData(n)) {
            var u, f, o, s = i._data(n),
                r = i._data(t, s),
                e = s.events;
            if (e) {
                delete r.handle, r.events = {};
                for (u in e)
                    for (f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }

    function uo(n, t) {
        var u, e, f;
        if (1 === t.nodeType) {
            if (u = t.nodeName.toLowerCase(), !r.noCloneEvent && t[i.expando]) {
                f = i._data(t);
                for (e in f.events) i.removeEvent(t, e, f.handle);
                t.removeAttribute(i.expando)
            }
            "script" === u && t.text !== n.text ? (of(t).text = n.text, sf(t)) : "object" === u ? (t.parentNode && (t.outerHTML = n.outerHTML), r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === u && wi.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === u ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === u || "textarea" === u) && (t.defaultValue = n.defaultValue)
        }
    }

    function af(t, r) {
        var u = i(r.createElement(t)).appendTo(r.body),
            f = n.getDefaultComputedStyle ? n.getDefaultComputedStyle(u[0]).display : i.css(u[0], "display");
        return u.detach(), f
    }

    function vf(n) {
        var r = u,
            t = yi[n];
        return t || (t = af(n, r), "none" !== t && t || (et = (et || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = (et[0].contentWindow || et[0].contentDocument).document, r.write(), r.close(), t = af(n, r), et.detach()), yi[n] = t), t
    }

    function cu(n, t) {
        return {
            get: function() {
                var i = n();
                if (null != i) return i ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function lr(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = ir.length; i--;)
            if (t = ir[i] + r, t in n) return t;
        return u
    }

    function rr(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++) r = n[u], r.style && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || "none" !== f || (r.style.display = ""), "" === r.style.display && ht(r) && (e[u] = i._data(r, "olddisplay", vf(r.nodeName)))) : e[u] || (o = ht(r), (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; s > u; u++) r = n[u], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none"));
        return n
    }

    function ar(n, t, i) {
        var r = so.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function or(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + d[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + d[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + d[e] + "Width", !0, f))) : (o += i.css(n, "padding" + d[e], !0, f), "padding" !== r && (o += i.css(n, "border" + d[e] + "Width", !0, f)));
        return o
    }

    function hr(n, t, u) {
        var o = !0,
            f = "width" === t ? n.offsetWidth : n.offsetHeight,
            e = k(n),
            s = r.boxSizing() && "border-box" === i.css(n, "boxSizing", !1, e);
        if (0 >= f || null == f) {
            if (f = w(n, t, e), (0 > f || null == f) && (f = n.style[t]), ct.test(f)) return f;
            o = s && (r.boxSizingReliable() || f === n.style[t]), f = parseFloat(f) || 0
        }
        return f + or(n, t, u || (s ? "border" : "content"), o, e) + "px"
    }

    function e(n, t, i, r, u) {
        return new e.prototype.init(n, t, i, r, u)
    }

    function dr() {
        return setTimeout(function() {
            tt = void 0
        }), tt = i.now()
    }

    function ni(n, t) {
        var r, i = {
                height: n
            },
            u = 0;
        for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = d[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function nu(n, t, i) {
        for (var u, f = (ft[t] || []).concat(ft["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function vo(n, t, u) {
        var f, l, p, a, o, b, y, w, c = this,
            v = {},
            s = n.style,
            h = n.nodeType && ht(n),
            e = i._data(n, "fxshow");
        u.queue || (o = i._queueHooks(n, "fx"), null == o.unqueued && (o.unqueued = 0, b = o.empty.fire, o.empty.fire = function() {
            o.unqueued || b()
        }), o.unqueued++, c.always(function() {
            c.always(function() {
                o.unqueued--, i.queue(n, "fx").length || o.empty.fire()
            })
        })), 1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], y = i.css(n, "display"), w = vf(n.nodeName), "none" === y && (y = w), "inline" === y && "none" === i.css(n, "float") && (r.inlineBlockNeedsLayout && "inline" !== w ? s.zoom = 1 : s.display = "inline-block")), u.overflow && (s.overflow = "hidden", r.shrinkWrapBlocks() || c.always(function() {
            s.overflow = u.overflow[0], s.overflowX = u.overflow[1], s.overflowY = u.overflow[2]
        }));
        for (f in t)
            if (l = t[f], lo.exec(l)) {
                if (delete t[f], p = p || "toggle" === l, l === (h ? "hide" : "show")) {
                    if ("show" !== l || !e || void 0 === e[f]) continue;
                    h = !0
                }
                v[f] = e && e[f] || i.style(n, f)
            }
        if (!i.isEmptyObject(v)) {
            e ? "hidden" in e && (h = e.hidden) : e = i._data(n, "fxshow", {}), p && (e.hidden = !h), h ? i(n).show() : c.done(function() {
                i(n).hide()
            }), c.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in v) i.style(n, t, v[t])
            });
            for (f in v) a = nu(h ? e[f] : 0, f, c), f in e || (e[f] = a.start, h && (a.end = a.start, a.start = "width" === f || "height" === f ? 1 : 0))
        }
    }

    function yo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u), delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function iu(n, t, r) {
        var h, e, o = 0,
            l = yt.length,
            f = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (e) return !1;
                for (var s = tt || dr(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: tt || dr(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; r > i; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                }
            }),
            s = u.props;
        for (yo(s, u.opts.specialEasing); l > o; o++)
            if (h = yt[o].call(u, n, s, u.opts)) return h;
        return i.map(s, nu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function bf(n) {
        return function(t, r) {
            "string" != typeof t && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) "+" === u.charAt(0) ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function tu(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }
        var f = {},
            o = n === ri;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ui(n, t) {
        var u, r, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function ie(n, t, i) {
        for (var o, e, u, f, s = n.contents, r = n.dataTypes;
            "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (f in s)
                if (s[f] && s[f].test(e)) {
                    r.unshift(f);
                    break
                }
        if (r[0] in i) u = r[0];
        else {
            for (f in i) {
                if (!r[0] || n.converters[f + " " + r[0]]) {
                    u = f;
                    break
                }
                o || (o = f)
            }
            u = u || o
        }
        if (u) return u !== r[0] && r.unshift(u), i[u]
    }

    function re(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                if ("*" === u) u = e;
                else if ("*" !== e && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                        break
                    }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e + " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function fi(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function(t, i) {
            r || te.test(n) ? u(n, i) : fi(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== i.type(t)) u(n, t);
        else
            for (f in t) fi(n + "[" + f + "]", t[f], r, u)
    }

    function ff() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }

    function he() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function du(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
    }
    var v = [],
        a = v.slice,
        gu = v.concat,
        ki = v.push,
        tf = v.indexOf,
        wt = {},
        ce = wt.toString,
        it = wt.hasOwnProperty,
        pi = "".trim,
        r = {},
        kf = "1.11.0",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        le = /^-ms-/,
        ne = /-([\da-z])/gi,
        go = function(n, t) {
            return t.toUpperCase()
        },
        p, eu, uu, h, bi, bt, s, ur, cr, uf, et, yi, ru, br, pr, dt, ei, pt, si, ci, vu, lf;
    i.fn = i.prototype = {
        jquery: kf,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(n) {
            return null != n ? 0 > n ? this[n + this.length] : this[n] : a.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ki,
        sort: v.sort,
        splice: v.splice
    }, i.extend = i.fn.extend = function() {
        var r, e, t, f, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
            if (null != (o = arguments[u]))
                for (f in o) r = n[f], t = o[f], n !== t && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n
    }, i.extend({
        expando: "jQuery" + (kf + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray || function(n) {
            return "array" === i.type(n)
        },
        isWindow: function(n) {
            return null != n && n == n.window
        },
        isNumeric: function(n) {
            return n - parseFloat(n) >= 0
        },
        isEmptyObject: function(n) {
            var t;
            for (t in n) return !1;
            return !0
        },
        isPlainObject: function(n) {
            var t;
            if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !it.call(n, "constructor") && !it.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (u) {
                return !1
            }
            if (r.ownLast)
                for (t in n) return it.call(n, t);
            for (t in n);
            return void 0 === t || it.call(n, t)
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? wt[ce.call(n)] || "object" : typeof n
        },
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            })(t)
        },
        camelCase: function(n) {
            return n.replace(le, "ms-").replace(ne, go)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0,
                f = n.length,
                e = di(n);
            if (i) {
                if (e) {
                    for (; f > r; r++)
                        if (u = t.apply(n[r], i), u === !1) break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i), u === !1) break
            } else if (e) {
                for (; f > r; r++)
                    if (u = t.call(n[r], r, n[r]), u === !1) break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]), u === !1) break; return n
        },
        trim: pi && !pi.call("﻿ ") ? function(n) {
            return null == n ? "" : pi.call(n)
        } : function(n) {
            return null == n ? "" : (n + "").replace(oe, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (di(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ki.call(r, n)), r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (tf) return tf.call(t, n, i);
                for (r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
                    if (i in t && t[i] === n) return i
            }
            return -1
        },
        merge: function(n, t) {
            for (var r = +t.length, i = 0, u = n.length; r > i;) n[u++] = t[i++];
            if (r !== r)
                while (void 0 !== t[i]) n[u++] = t[i++];
            return n.length = u, n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0,
                e = n.length,
                o = di(n),
                f = [];
            if (o)
                for (; e > r; r++) u = t(n[r], r, i), null != u && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), null != u && f.push(u);
            return gu.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, r, f;
            return "string" == typeof t && (f = n[t], t = n, n = f), i.isFunction(n) ? (u = a.call(arguments, 2), r = function() {
                return n.apply(t || this, u.concat(a.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: r
    }), i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        wt["[object " + t + "]"] = t.toLowerCase()
    }), p = function(n) {
        function u(n, t, i, u) {
            var w, h, c, v, b, y, k, l, nt, g;
            if ((t ? t.ownerDocument || t : s) !== e && p(t), t = t || e, i = i || [], !n || "string" != typeof n) return i;
            if (1 !== (v = t.nodeType) && 9 !== v) return [];
            if (a && !u) {
                if (w = vr.exec(n))
                    if (c = w[1]) {
                        if (9 === v) {
                            if (h = t.getElementById(c), !h || !h.parentNode) return i;
                            if (h.id === c) return i.push(h), i
                        } else if (t.ownerDocument && (h = t.ownerDocument.getElementById(c)) && ot(t, h) && h.id === c) return i.push(h), i
                    } else {
                        if (w[2]) return d.apply(i, t.getElementsByTagName(n)), i;
                        if ((c = w[3]) && r.getElementsByClassName && t.getElementsByClassName) return d.apply(i, t.getElementsByClassName(c)), i
                    }
                if (r.qsa && (!o || !o.test(n))) {
                    if (l = k = f, nt = t, g = 9 === v && n, 1 === v && "object" !== t.nodeName.toLowerCase()) {
                        for (y = st(n), (k = t.getAttribute("id")) ? l = k.replace(ar, "\\$&") : t.setAttribute("id", l), l = "[id='" + l + "'] ", b = y.length; b--;) y[b] = l + pt(y[b]);
                        nt = ui.test(n) && ri(t.parentNode) || t, g = y.join(",")
                    }
                    if (g) try {
                        return d.apply(i, nt.querySelectorAll(g)), i
                    } catch (tt) {} finally {
                        k || t.removeAttribute("id")
                    }
                }
            }
            return fr(n.replace(yt, "$1"), t, i, u)
        }

        function kt() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function h(n) {
            return n[f] = !0, n
        }

        function c(n) {
            var t = e.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function dt(n, i) {
            for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i
        }

        function oi(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || wi) - (~n.sourceIndex || wi);
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function ur(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }

        function rr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }

        function tt(n) {
            return h(function(t) {
                return t = +t, h(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ri(n) {
            return n && typeof n.getElementsByTagName !== ft && n
        }

        function si() {}

        function st(n, i) {
            var e, f, s, o, r, h, c, l = vi[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = er.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = [])), e = !1, (f = or.exec(r)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(yt, " ")
                }), r = r.slice(e.length));
                for (o in t.filter) !(f = ct[o].exec(r)) || c[o] && !(f = c[o](f)) || (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : vi(n, h).slice(0)
        }

        function pt(n) {
            for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
            return i
        }

        function ii(n, t, i) {
            var r = t.dir,
                u = i && "parentNode" === r,
                e = di++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (1 === t.nodeType || u) return n(t, i, f)
            } : function(t, i, o) {
                var s, h, c = [l, e];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i, o)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || u) {
                            if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === l && s[1] === e) return c[2] = s[2];
                            if (h[r] = c, c[2] = n(t, i, o)) return !0
                        }
            }
        }

        function ti(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function lt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }

        function gt(n, t, i, r, u, e) {
            return r && !r[f] && (r = gt(r)), u && !u[f] && (u = gt(u, e)), h(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    b = f || bi(t || "*", o.nodeType ? [o] : o, []),
                    v = !n || !f && t ? b : lt(b, p, n, o, s),
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = lt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = lt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : d.apply(e, h)
            })
        }

        function wt(n) {
            for (var s, u, r, o = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ii(function(n) {
                    return n === s
                }, c, !0), a = ii(function(n) {
                    return nt.call(s, n) > -1
                }, c, !0), e = [function(n, t, i) {
                    return !h && (i || t !== at) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                }]; o > i; i++)
                if (u = t.relative[n[i].type]) e = [ii(ti(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                        for (r = ++i; o > r; r++)
                            if (t.relative[n[r].type]) break;
                        return gt(i > 1 && ti(e), i > 1 && pt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(yt, "$1"), u, r > i && wt(n.slice(i, r)), o > r && wt(n = n.slice(r)), o > r && pt(n))
                    }
                    e.push(u)
                }
            return ti(e)
        }

        function ki(n, i) {
            var r = i.length > 0,
                f = n.length > 0,
                o = function(o, s, h, c, a) {
                    var y, k, w, b = 0,
                        v = "0",
                        g = o && [],
                        p = [],
                        nt = at,
                        tt = o || f && t.find.TAG("*", a),
                        it = l += null == nt ? 1 : Math.random() || .1,
                        rt = tt.length;
                    for (a && (at = s !== e && s); v !== rt && null != (y = tt[v]); v++) {
                        if (f && y) {
                            for (k = 0; w = n[k++];)
                                if (w(y, s, h)) {
                                    c.push(y);
                                    break
                                }
                            a && (l = it)
                        }
                        r && ((y = !w && y) && b--, o && g.push(y))
                    }
                    if (b += v, r && v !== b) {
                        for (k = 0; w = i[k++];) w(g, p, s, h);
                        if (o) {
                            if (b > 0)
                                while (v--) g[v] || p[v] || (p[v] = nr.call(c));
                            p = lt(p)
                        }
                        d.apply(c, p), a && !o && p.length > 0 && b + i.length > 1 && u.uniqueSort(c)
                    }
                    return a && (l = it, at = nt), g
                };
            return r ? h(o) : o
        }

        function bi(n, t, i) {
            for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
            return i
        }

        function fr(n, i, u, f) {
            var s, e, o, c, l, h = st(n);
            if (!f && 1 === h.length) {
                if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && r.getById && 9 === i.nodeType && a && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(k, b), i) || [])[0], !i) return u;
                    n = n.slice(e.shift().value.length)
                }
                for (s = ct.needsContext.test(n) ? 0 : e.length; s--;) {
                    if (o = e[s], t.relative[c = o.type]) break;
                    if ((l = t.find[c]) && (f = l(o.matches[0].replace(k, b), ui.test(e[0].type) && ri(i.parentNode) || i))) {
                        if (e.splice(s, 1), n = f.length && pt(e), !n) return d.apply(u, f), u;
                        break
                    }
                }
            }
            return bt(n, h)(f, i, !a, u, ui.test(n) && ri(i.parentNode) || i), u
        }
        var ut, r, t, ht, li, bt, at, w, it, p, e, v, a, o, g, vt, ot, f = "sizzle" + -new Date,
            s = n.document,
            l = 0,
            di = 0,
            ai = kt(),
            vi = kt(),
            yi = kt(),
            ei = function(n, t) {
                return n === t && (it = !0), 0
            },
            ft = "undefined",
            wi = -2147483648,
            gi = {}.hasOwnProperty,
            y = [],
            nr = y.pop,
            tr = y.push,
            d = y.push,
            ci = y.slice,
            nt = y.indexOf || function(n) {
                for (var t = 0, i = this.length; i > t; t++)
                    if (this[t] === n) return t;
                return -1
            },
            ni = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            i = "[\\x20\\t\\r\\n\\f]",
            rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            hi = rt.replace("w", "w#"),
            pi = "\\[" + i + "*(" + rt + ")" + i + "*(?:([*^$|!~]?=)" + i + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + hi + ")|)|)" + i + "*\\]",
            fi = ":(" + rt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + pi.replace(3, 8) + ")*)|.*)\\)|)",
            yt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
            er = new RegExp("^" + i + "*," + i + "*"),
            or = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
            sr = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
            hr = new RegExp(fi),
            cr = new RegExp("^" + hi + "$"),
            ct = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + pi),
                PSEUDO: new RegExp("^" + fi),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ni + ")$", "i"),
                needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
            },
            lr = /^(?:input|select|textarea|button)$/i,
            ir = /^h\d$/i,
            et = /^[^{]+\{\s*\[native \w/,
            vr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ui = /[+~]/,
            ar = /'|\\/g,
            k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
            b = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            d.apply(y = ci.call(s.childNodes), s.childNodes), y[s.childNodes.length].nodeType
        } catch (yr) {
            d = {
                apply: y.length ? function(n, t) {
                    tr.apply(n, ci.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        r = u.support = {}, li = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, p = u.setDocument = function(n) {
            var l, u = n ? n.ownerDocument || n : s,
                h = u.defaultView;
            return u !== e && 9 === u.nodeType && u.documentElement ? (e = u, v = u.documentElement, a = !li(u), h && h !== h.top && (h.addEventListener ? h.addEventListener("unload", function() {
                p()
            }, !1) : h.attachEvent && h.attachEvent("onunload", function() {
                p()
            })), r.attributes = c(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), r.getElementsByTagName = c(function(n) {
                return n.appendChild(u.createComment("")), !n.getElementsByTagName("*").length
            }), r.getElementsByClassName = et.test(u.getElementsByClassName) && c(function(n) {
                return n.innerHTML = "<div class='a'></div><div class='a i'></div>", n.firstChild.className = "i", 2 === n.getElementsByClassName("i").length
            }), r.getById = c(function(n) {
                return v.appendChild(n).id = f, !u.getElementsByName || !u.getElementsByName(f).length
            }), r.getById ? (t.find.ID = function(n, t) {
                if (typeof t.getElementById !== ft && a) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }, t.filter.ID = function(n) {
                var t = n.replace(k, b);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }) : (delete t.find.ID, t.filter.ID = function(n) {
                var t = n.replace(k, b);
                return function(n) {
                    var i = typeof n.getAttributeNode !== ft && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }), t.find.TAG = r.getElementsByTagName ? function(n, t) {
                if (typeof t.getElementsByTagName !== ft) return t.getElementsByTagName(n)
            } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++]) 1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = r.getElementsByClassName && function(n, t) {
                if (typeof t.getElementsByClassName !== ft && a) return t.getElementsByClassName(n)
            }, g = [], o = [], (r.qsa = et.test(u.querySelectorAll)) && (c(function(n) {
                n.innerHTML = "<select t=''><option selected=''></option></select>", n.querySelectorAll("[t^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")"), n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + ni + ")"), n.querySelectorAll(":checked").length || o.push(":checked")
            }), c(function(n) {
                var t = u.createElement("input");
                t.setAttribute("type", "hidden"), n.appendChild(t).setAttribute("name", "D"), n.querySelectorAll("[name=d]").length && o.push("name" + i + "*[*^$|!~]?="), n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), n.querySelectorAll("*,:x"), o.push(",.*:")
            })), (r.matchesSelector = et.test(vt = v.webkitMatchesSelector || v.mozMatchesSelector || v.oMatchesSelector || v.msMatchesSelector)) && c(function(n) {
                r.disconnectedMatch = vt.call(n, "div"), vt.call(n, "[s!='']:x"), g.push("!=", fi)
            }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), l = et.test(v.compareDocumentPosition), ot = l || et.test(v.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, ei = l ? function(n, t) {
                if (n === t) return it = !0, 0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & i || !r.sortDetached && t.compareDocumentPosition(n) === i ? n === u || n.ownerDocument === s && ot(s, n) ? -1 : t === u || t.ownerDocument === s && ot(s, t) ? 1 : w ? nt.call(w, n) - nt.call(w, t) : 0 : 4 & i ? -1 : 1)
            } : function(n, t) {
                if (n === t) return it = !0, 0;
                var i, r = 0,
                    o = n.parentNode,
                    h = t.parentNode,
                    f = [n],
                    e = [t];
                if (!o || !h) return n === u ? -1 : t === u ? 1 : o ? -1 : h ? 1 : w ? nt.call(w, n) - nt.call(w, t) : 0;
                if (o === h) return oi(n, t);
                for (i = n; i = i.parentNode;) f.unshift(i);
                for (i = t; i = i.parentNode;) e.unshift(i);
                while (f[r] === e[r]) r++;
                return r ? oi(f[r], e[r]) : f[r] === s ? -1 : e[r] === s ? 1 : 0
            }, u) : e
        }, u.matches = function(n, t) {
            return u(n, null, null, t)
        }, u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== e && p(n), t = t.replace(sr, "='$1']"), !(!r.matchesSelector || !a || g && g.test(t) || o && o.test(t))) try {
                var i = vt.call(n, t);
                if (i || r.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
            } catch (f) {}
            return u(t, e, null, [n]).length > 0
        }, u.contains = function(n, t) {
            return (n.ownerDocument || n) !== e && p(n), ot(n, t)
        }, u.attr = function(n, i) {
            (n.ownerDocument || n) !== e && p(n);
            var f = t.attrHandle[i.toLowerCase()],
                u = f && gi.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !a) : void 0;
            return void 0 !== u ? u : r.attributes || !a ? n.getAttribute(i) : (u = n.getAttributeNode(i)) && u.specified ? u.value : null
        }, u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }, u.uniqueSort = function(n) {
            var u, f = [],
                t = 0,
                i = 0;
            if (it = !r.detectDuplicates, w = !r.sortStable && n.slice(0), n.sort(ei), it) {
                while (u = n[i++]) u === n[i] && (t = f.push(i));
                while (t--) n.splice(f[t], 1)
            }
            return w = null, n
        }, ht = u.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += ht(n)
                } else if (3 === t || 4 === t) return n.nodeValue
            } else
                while (r = n[u++]) i += ht(r);
            return i
        }, t = u.selectors = {
            cacheLength: 50,
            createPseudo: h,
            match: ct,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(k, b), n[3] = (n[4] || n[5] || "").replace(k, b), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[5] && n[2];
                    return ct.CHILD.test(n[0]) ? null : (n[3] && void 0 !== n[4] ? n[2] = n[4] : t && hr.test(t) && (i = st(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(k, b).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = ai[n + " "];
                    return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && ai(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== ft && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3),
                        o = "last" !== n.slice(-4),
                        e = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var v, k, c, a, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                            p = t.parentNode,
                            g = e && t.nodeName.toLowerCase(),
                            d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];)
                                        if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                for (k = p[f] || (p[f] = {}), v = k[n] || [], y = v[0] === l && v[1], a = v[0] === l && v[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (a = y = 0) || w.pop();)
                                    if (1 === c.nodeType && ++a && c === t) {
                                        k[n] = [l, y, a];
                                        break
                                    }
                            } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === l) a = v[1];
                            else
                                while (c = ++y && c && c[b] || (a = y = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++a && (d && ((c[f] || (c[f] = {}))[n] = [l, a]), c === t)) break; return a -= u, a === r || a % r == 0 && a / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function(n, t) {
                        for (var u, f = r(n, i), e = f.length; e--;) u = nt.call(n, f[e]), n[u] = !(t[u] = f[e])
                    }) : function(n) {
                        return r(n, 0, e)
                    }) : r
                }
            },
            pseudos: {
                not: h(function(n) {
                    var i = [],
                        r = [],
                        t = bt(n.replace(yt, "$1"));
                    return t[f] ? h(function(n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function(n, u, f) {
                        return i[0] = n, t(i, null, f, r), !r.pop()
                    }
                }),
                has: h(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: h(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || ht(t)).indexOf(n) > -1
                    }
                }),
                lang: h(function(n) {
                    return cr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(k, b).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = a ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === v
                },
                focus: function(n) {
                    return n === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return ir.test(n.nodeName)
                },
                input: function(n) {
                    return lr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: tt(function() {
                    return [0]
                }),
                last: tt(function(n, t) {
                    return [t - 1]
                }),
                eq: tt(function(n, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: tt(function(n, t) {
                    for (var i = 0; t > i; i += 2) n.push(i);
                    return n
                }),
                odd: tt(function(n, t) {
                    for (var i = 1; t > i; i += 2) n.push(i);
                    return n
                }),
                lt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        }, t.pseudos.nth = t.pseudos.eq;
        for (ut in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[ut] = ur(ut);
        for (ut in {
                submit: !0,
                reset: !0
            }) t.pseudos[ut] = rr(ut);
        return si.prototype = t.filters = t.pseudos, t.setFilters = new si, bt = u.compile = function(n, t) {
            var r, u = [],
                e = [],
                i = yi[n + " "];
            if (!i) {
                for (t || (t = st(n)), r = t.length; r--;) i = wt(t[r]), i[f] ? u.push(i) : e.push(i);
                i = yi(n, ki(e, u))
            }
            return i
        }, r.sortStable = f.split("").sort(ei).join("") === f, r.detectDuplicates = !!it, p(), r.sortDetached = c(function(n) {
            return 1 & n.compareDocumentPosition(e.createElement("div"))
        }), c(function(n) {
            return n.innerHTML = "<a href='#'></a>", "#" === n.firstChild.getAttribute("href")
        }) || dt("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), r.attributes && c(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
        }) || dt("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
        }), c(function(n) {
            return null == n.getAttribute("disabled")
        }) || dt(ni, function(n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n), i.find = p, i.expr = p.selectors, i.expr[":"] = i.expr.pseudos, i.unique = p.uniqueSort, i.text = p.getText, i.isXMLDoc = p.isXML, i.contains = p.contains;
    var su = i.expr.match.needsContext,
        yr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        bo = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    }, i.fn.extend({
        find: function(n) {
            var t, r = [],
                u = this,
                f = u.length;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; f > t; t++)
                    if (i.contains(u[t], this)) return !0
            }));
            for (t = 0; f > t; t++) i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
        },
        filter: function(n) {
            return this.pushStack(gi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(gi(this, n || [], !0))
        },
        is: function(n) {
            return !!gi(this, "string" == typeof n && su.test(n) ? i(n) : n || [], !1).length
        }
    });
    var ot, u = n.document,
        wo = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        po = i.fn.init = function(n, t) {
            var r, f;
            if (!n) return this;
            if ("string" == typeof n) {
                if (r = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : wo.exec(n), !r || !r[1] && t) return !t || t.jquery ? (t || ot).find(n) : this.constructor(t).find(n);
                if (r[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), yr.test(r[1]) && i.isPlainObject(t))
                        for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (f = u.getElementById(r[2]), f && f.parentNode) {
                    if (f.id !== r[2]) return ot.find(n);
                    this.length = 1, this[0] = f
                }
                return this.context = u, this.selector = n, this
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? "undefined" != typeof ot.ready ? ot.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        };
    po.prototype = i.fn, ot = i(u), eu = /^(?:parents|prev(?:Until|All))/, uu = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    }, i.extend({
        dir: function(n, t, r) {
            for (var f = [], u = n[t]; u && 9 !== u.nodeType && (void 0 === r || 1 !== u.nodeType || !i(u).is(r));) 1 === u.nodeType && f.push(u), u = u[t];
            return f
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    }), i.fn.extend({
        has: function(n) {
            var t, r = i(n, this),
                u = r.length;
            return this.filter(function() {
                for (t = 0; u > t; t++)
                    if (i.contains(this, r[t])) return !0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = su.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    }), i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return gr(n, "nextSibling")
        },
        prev: function(n) {
            return gr(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (uu[n] || (f = i.unique(f)), eu.test(n) && (f = f.reverse())), this.pushStack(f)
        }
    }), h = /\S+/g, bi = {}, i.Callbacks = function(n) {
        n = "string" == typeof n ? bi[n] || ve(n) : i.extend({}, n);
        var o, u, h, f, e, c, t = [],
            r = !n.once && [],
            l = function(i) {
                for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && f > e; e++)
                    if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                        u = !1;
                        break
                    }
                o = !1, t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
            },
            s = {
                add: function() {
                    if (t) {
                        var r = t.length;
                        ! function e(r) {
                            i.each(r, function(r, u) {
                                var f = i.type(u);
                                "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u)
                            })
                        }(arguments), o ? f = t.length : u && (c = r, l(u))
                    }
                    return this
                },
                remove: function() {
                    return t && i.each(arguments, function(n, r) {
                        for (var u;
                            (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), o && (f >= u && f--, e >= u && e--)
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, t) > -1 : !(!t || !t.length)
                },
                empty: function() {
                    return t = [], f = 0, this
                },
                disable: function() {
                    return t = r = u = void 0, this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return r = void 0, u || s.disable(), this
                },
                locked: function() {
                    return !r
                },
                fireWith: function(n, i) {
                    return !t || h && !r || (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!h
                }
            };
        return s
    }, i.extend({
        Deferred: function(n) {
            var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var n = arguments;
                        return i.Deferred(function(f) {
                            i.each(u, function(u, e) {
                                var o = i.isFunction(n[u]) && n[u];
                                t[e[1]](function() {
                                    var n = o && o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                })
                            }), n = null
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function(n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add, o && e.add(function() {
                    f = o
                }, u[1 ^ n][2].disable, u[2][2].lock), t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments), this
                }, t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function(n) {
            var t = 0,
                u = a.call(arguments),
                r = u.length,
                e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                f = 1 === e ? n : i.Deferred(),
                h = function(n, t, i) {
                    return function(r) {
                        t[n] = this, i[n] = arguments.length > 1 ? a.call(arguments) : r, i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                },
                o, c, s;
            if (r > 1)
                for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    }), i.fn.ready = function(n) {
        return i.ready.promise().done(n), this
    }, i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!u.body) return setTimeout(i.ready);
                i.isReady = !0, n !== !0 && --i.readyWait > 0 || (bt.resolveWith(u, [i]), i.fn.trigger && i(u).trigger("ready").off("ready"))
            }
        }
    }), i.ready.promise = function(t) {
        if (!bt)
            if (bt = i.Deferred(), "complete" === u.readyState) setTimeout(i.ready);
            else if (u.addEventListener) u.addEventListener("DOMContentLoaded", l, !1), n.addEventListener("load", l, !1);
        else {
            u.attachEvent("onreadystatechange", l), n.attachEvent("onload", l);
            var r = !1;
            try {
                r = null == n.frameElement && u.documentElement
            } catch (e) {}
            r && r.doScroll && ! function f() {
                if (!i.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (n) {
                        return setTimeout(f, 50)
                    }
                    ou(), i.ready()
                }
            }()
        }
        return bt.promise(t)
    }, s = "undefined";
    for (ur in i(r)) break;
    r.ownLast = "0" !== ur, r.inlineBlockNeedsLayout = !1, i(function() {
            var t, n, i = u.getElementsByTagName("body")[0];
            i && (t = u.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", n = u.createElement("div"), i.appendChild(t).appendChild(n), typeof n.style.zoom !== s && (n.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (r.inlineBlockNeedsLayout = 3 === n.offsetWidth) && (i.style.zoom = 1)), i.removeChild(t), t = n = null)
        }),
        function() {
            var n = u.createElement("div");
            if (null == r.deleteExpando) {
                r.deleteExpando = !0;
                try {
                    delete n.test
                } catch (t) {
                    r.deleteExpando = !1
                }
            }
            n = null
        }(), i.acceptData = function(n) {
            var t = i.noData[(n.nodeName + " ").toLowerCase()],
                r = +n.nodeType || 1;
            return 1 !== r && 9 !== r ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
        }, cr = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, uf = /([A-Z])/g, i.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(n) {
                return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !tr(n)
            },
            data: function(n, t, i) {
                return pf(n, t, i)
            },
            removeData: function(n, t) {
                return cf(n, t)
            },
            _data: function(n, t, i) {
                return pf(n, t, i, !0)
            },
            _removeData: function(n, t) {
                return cf(n, t, !0)
            }
        }), i.fn.extend({
            data: function(n, t) {
                var f, u, e, r = this[0],
                    o = r && r.attributes;
                if (void 0 === n) {
                    if (this.length && (e = i.data(r), 1 === r.nodeType && !i._data(r, "parsedAttrs"))) {
                        for (f = o.length; f--;) u = o[f].name, 0 === u.indexOf("data-") && (u = i.camelCase(u.slice(5)), wf(r, u, e[u]));
                        i._data(r, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof n ? this.each(function() {
                    i.data(this, n)
                }) : arguments.length > 1 ? this.each(function() {
                    i.data(this, n, t)
                }) : r ? wf(r, n, i.data(r, n)) : void 0
            },
            removeData: function(n) {
                return this.each(function() {
                    i.removeData(this, n)
                })
            }
        }), i.extend({
            queue: function(n, t, r) {
                var u;
                if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
            },
            dequeue: function(n, t) {
                t = t || "fx";
                var r = i.queue(n, t),
                    e = r.length,
                    u = r.shift(),
                    f = i._queueHooks(n, t),
                    o = function() {
                        i.dequeue(n, t)
                    };
                "inprogress" === u && (u = r.shift(), e--), u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f)), !e && f && f.empty.fire()
            },
            _queueHooks: function(n, t) {
                var r = t + "queueHooks";
                return i._data(n, r) || i._data(n, r, {
                    empty: i.Callbacks("once memory").add(function() {
                        i._removeData(n, t + "queue"), i._removeData(n, r)
                    })
                })
            }
        }), i.fn.extend({
            queue: function(n, t) {
                var r = 2;
                return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                    var r = i.queue(this, n, t);
                    i._queueHooks(this, n), "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
                })
            },
            dequeue: function(n) {
                return this.each(function() {
                    i.dequeue(this, n)
                })
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", [])
            },
            promise: function(n, t) {
                var r, f = 1,
                    e = i.Deferred(),
                    u = this,
                    o = this.length,
                    s = function() {
                        --f || e.resolveWith(u, [u])
                    };
                for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; o--;) r = i._data(u[o], n + "queueHooks"), r && r.empty && (f++, r.empty.add(s));
                return s(), e.promise(t)
            }
        });
    var lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        d = ["Top", "Right", "Bottom", "Left"],
        ht = function(n, t) {
            return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
        },
        g = i.access = function(n, t, r, u, f, e, o) {
            var s = 0,
                c = n.length,
                h = null == r;
            if ("object" === i.type(r)) {
                f = !0;
                for (s in r) i.access(n, t, s, r[s], !0, e, o)
            } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                    return h.call(i(n), r)
                })), t))
                for (; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        },
        wi = /^(?:checkbox|radio)$/i;
    ! function() {
        var i = u.createDocumentFragment(),
            n = u.createElement("div"),
            t = u.createElement("input");
        if (n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a>", r.leadingWhitespace = 3 === n.firstChild.nodeType, r.tbody = !n.getElementsByTagName("tbody").length, r.htmlSerialize = !!n.getElementsByTagName("link").length, r.html5Clone = "<:nav></:nav>" !== u.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), r.appendChecked = t.checked, n.innerHTML = "<textarea>x</textarea>", r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, i.appendChild(n), n.innerHTML = "<input type='radio' checked='checked' name='t'/>", r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, r.noCloneEvent = !0, n.attachEvent && (n.attachEvent("onclick", function() {
                r.noCloneEvent = !1
            }), n.cloneNode(!0).click()), null == r.deleteExpando) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch (f) {
                r.deleteExpando = !1
            }
        }
        i = n = t = null
    }(),
    function() {
        var t, i, f = u.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + t, (r[t + "Bubbles"] = i in n) || (f.setAttribute(i, "t"), r[t + "Bubbles"] = f.attributes[i].expando === !1);
        f = null
    }();
    var nr = /^(?:input|select|textarea)$/i,
        io = /^key/,
        no = /^(?:mouse|contextmenu)|click/,
        pu = /^(?:focusinfocus|focusoutblur)$/,
        kr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, t, r, u, f) {
            var b, y, w, p, o, c, a, l, e, k, d, v = i._data(n);
            if (v) {
                for (r.handler && (p = r, r = p.handler, f = p.selector), r.guid || (r.guid = i.guid++), (y = v.events) || (y = v.events = {}), (c = v.handle) || (c = v.handle = function(n) {
                        if (typeof i !== s && (!n || i.event.triggered !== n.type)) return i.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = n), t = (t || "").match(h) || [""], w = t.length; w--;) b = kr.exec(t[w]) || [], e = d = b[1], k = (b[2] || "").split(".").sort(), e && (o = i.event.special[e] || {}, e = (f ? o.delegateType : o.bindType) || e, o = i.event.special[e] || {}, a = i.extend({
                    type: e,
                    origType: d,
                    data: u,
                    handler: r,
                    guid: r.guid,
                    selector: f,
                    needsContext: f && i.expr.match.needsContext.test(f),
                    namespace: k.join(".")
                }, p), (l = y[e]) || (l = y[e] = [], l.delegateCount = 0, o.setup && o.setup.call(n, u, k, c) !== !1 || (n.addEventListener ? n.addEventListener(e, c, !1) : n.attachEvent && n.attachEvent("on" + e, c))), o.add && (o.add.call(n, a), a.handler.guid || (a.handler.guid = r.guid)), f ? l.splice(l.delegateCount++, 0, a) : l.push(a), i.event.global[e] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var p, o, s, k, y, v, c, l, e, w, b, a = i.hasData(n) && i._data(n);
            if (a && (v = a.events)) {
                for (t = (t || "").match(h) || [""], y = t.length; y--;)
                    if (s = kr.exec(t[y]) || [], e = b = s[1], w = (s[2] || "").split(".").sort(), e) {
                        for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = v[e] || [], s = s[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = p = l.length; p--;) o = l[p], !f && b !== o.origType || r && r.guid !== o.guid || s && !s.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(p, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                        k && !l.length && (c.teardown && c.teardown.call(n, w, a.handle) !== !1 || i.removeEvent(n, e, a.handle), delete v[e])
                    } else
                        for (e in v) i.event.remove(n, e + t[y], r, u, !0);
                i.isEmptyObject(v) && (delete a.handle, i._removeData(n, "events"))
            }
        },
        trigger: function(t, r, f, e) {
            var l, a, o, p, c, h, w, y = [f || u],
                s = it.call(t, "type") ? t.type : t,
                v = it.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = h = f = f || u, 3 !== f.nodeType && 8 !== f.nodeType && !pu.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (v = s.split("."), s = v.shift(), v.sort()), a = s.indexOf(":") < 0 && "on" + s, t = t[i.expando] ? t : new i.Event(s, "object" == typeof t && t), t.isTrigger = e ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = f), r = null == r ? [t] : i.makeArray(r, [t]), c = i.event.special[s] || {}, e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
                if (!e && !c.noBubble && !i.isWindow(f)) {
                    for (p = c.delegateType || s, pu.test(p + s) || (o = o.parentNode); o; o = o.parentNode) y.push(o), h = o;
                    h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
                }
                for (w = 0;
                    (o = y[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? p : c.bindType || s, l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"), l && l.apply(o, r), l = a && o[a], l && l.apply && i.acceptData(o) && (t.result = l.apply(o, r), t.result === !1 && t.preventDefault());
                if (t.type = s, !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && i.acceptData(f) && a && f[s] && !i.isWindow(f)) {
                    h = f[a], h && (f[a] = null), i.event.triggered = s;
                    try {
                        f[s]()
                    } catch (b) {}
                    i.event.triggered = void 0, h && (f[a] = h)
                }
                return t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var e, f, t, r, o, s = [],
                h = a.call(arguments),
                c = (i._data(this, "events") || {})[n.type] || [],
                u = i.event.special[n.type] || {};
            if (h[0] = n, n.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                for (s = i.event.handlers.call(this, n, c), e = 0;
                    (r = s[e++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = r.elem, o = 0;
                        (t = r.handlers[o++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h), void 0 !== f && (n.result = f) === !1 && (n.preventDefault(), n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, n), n.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, h = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && (!n.button || "click" !== n.type))
                for (; r != this; r = r.parentNode || this)
                    if (1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) {
                        for (u = [], o = 0; s > o; o++) e = t[o], f = e.selector + " ", void 0 === u[f] && (u[f] = e.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(e);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }), h
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var e, o, s, r = n.type,
                f = n,
                t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = no.test(r) ? this.mouseHooks : io.test(r) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o];
            return n.target || (n.target = f.srcElement || u), 3 === n.target.nodeType && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var i, e, r, f = t.button,
                    o = t.fromElement;
                return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, r = e.documentElement, i = e.body, n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== vr() && this.focus) try {
                        return this.focus(), !1
                    } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === vr() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (i.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f), f.isDefaultPrevented() && r.preventDefault()
        }
    }, i.removeEvent = u.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === s && (n[r] = null), n.detachEvent(r, i))
    }, i.Event = function(n, t) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && (n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault()) ? vt : rt) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
    }, i.Event.prototype = {
        isDefaultPrevented: rt,
        isPropagationStopped: rt,
        isImmediatePropagationStopped: rt,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = vt, n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = vt, n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = vt, this.stopPropagation()
        }
    }, i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    }), r.submitBubbles || (i.event.special.submit = {
        setup: function() {
            return i.nodeName(this, "form") ? !1 : void i.event.add(this, "click._submit keypress._submit", function(n) {
                var r = n.target,
                    t = i.nodeName(r, "input") || i.nodeName(r, "button") ? r.form : void 0;
                t && !i._data(t, "submitBubbles") && (i.event.add(t, "submit._submit", function(n) {
                    n._submit_bubble = !0
                }), i._data(t, "submitBubbles", !0))
            })
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            return i.nodeName(this, "form") ? !1 : void i.event.remove(this, "._submit")
        }
    }), r.changeBubbles || (i.event.special.change = {
        setup: function() {
            return nr.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) {
                "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
            }), i.event.add(this, "click._change", function(n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1), i.event.simulate("change", this, n, !0)
            })), !1) : void i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                nr.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }), i._data(t, "changeBubbles", !0))
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"), !nr.test(this.nodeName)
        }
    }), r.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var r = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                var u = this.ownerDocument || this,
                    f = i._data(u, t);
                f || u.addEventListener(n, r, !0), i._data(u, t, (f || 0) + 1)
            },
            teardown: function() {
                var u = this.ownerDocument || this,
                    f = i._data(u, t) - 1;
                f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0), i._removeData(u, t))
            }
        }
    }), i.fn.extend({
        on: function(n, t, r, u, f) {
            var o, e;
            if ("object" == typeof n) {
                "string" != typeof t && (r = r || t, t = void 0);
                for (o in n) this.on(o, t, r, n[o], f);
                return this
            }
            if (null == r && null == u ? (u = t, r = t = void 0) : null == u && ("string" == typeof t ? (u = r, r = void 0) : (u = r, r = t, t = void 0)), u === !1) u = rt;
            else if (!u) return this;
            return 1 === f && (e = u, u = function(n) {
                return i().off(n), e.apply(this, arguments)
            }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function() {
                i.event.add(this, n, u, r, t)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = rt), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    var au = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        pe = / jQuery\d+="(?:null|\d+)"/g,
        yu = new RegExp("<(?:" + au + ")[\\s/>]", "i"),
        li = /^\s+/,
        wu = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bu = /<([\w:]+)/,
        ku = /<tbody/i,
        we = /<|&#?\w+;/,
        be = /<(?:script|style|link)/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nf = /^$|\/(?:java|ecma)script/i,
        de = /^true\/(.*)/,
        ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        o = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        to = lu(u),
        hi = to.appendChild(u.createElement("div"));
    o.optgroup = o.option, o.tbody = o.tfoot = o.colgroup = o.caption = o.thead, o.th = o.td, i.extend({
        clone: function(n, t, u) {
            var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
            if (r.html5Clone || i.isXMLDoc(n) || !yu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (hi.innerHTML = n.outerHTML, hi.removeChild(s = hi.firstChild)), !(r.noCloneEvent && r.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = f(s), h = f(n), o = 0; null != (c = h[o]); ++o) e[o] && uo(c, e[o]);
            if (t)
                if (u)
                    for (h = h || f(n), e = e || f(s), o = 0; null != (c = h[o]); o++) hf(c, e[o]);
                else hf(n, s);
            return e = f(s, "script"), e.length > 0 && oi(e, !l && f(n, "script")), e = h = c = null, s
        },
        buildFragment: function(n, t, u, e) {
            for (var c, s, b, h, p, w, a, k = n.length, v = lu(t), l = [], y = 0; k > y; y++)
                if (s = n[y], s || 0 === s)
                    if ("object" === i.type(s)) i.merge(l, s.nodeType ? [s] : s);
                    else if (we.test(s)) {
                for (h = h || v.appendChild(t.createElement("div")), p = (bu.exec(s) || ["", ""])[1].toLowerCase(), a = o[p] || o._default, h.innerHTML = a[1] + s.replace(wu, "<$1></$2>") + a[2], c = a[0]; c--;) h = h.lastChild;
                if (!r.leadingWhitespace && li.test(s) && l.push(t.createTextNode(li.exec(s)[0])), !r.tbody)
                    for (s = "table" !== p || ku.test(s) ? "<table>" !== a[1] || ku.test(s) ? 0 : h : h.firstChild, c = s && s.childNodes.length; c--;) i.nodeName(w = s.childNodes[c], "tbody") && !w.childNodes.length && s.removeChild(w);
                for (i.merge(l, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = v.lastChild
            } else l.push(t.createTextNode(s));
            for (h && v.removeChild(h), r.appendChecked || i.grep(f(l, "input"), ro), y = 0; s = l[y++];)
                if ((!e || -1 === i.inArray(s, e)) && (b = i.contains(s.ownerDocument, s), h = f(v.appendChild(s), "script"), b && oi(h), u))
                    for (c = 0; s = h[c++];) nf.test(s.type || "") && u.push(s);
            return h = null, v
        },
        cleanData: function(n, t) {
            for (var u, e, f, o, l = 0, h = i.expando, c = i.cache, a = r.deleteExpando, y = i.event.special; null != (u = n[l]); l++)
                if ((t || i.acceptData(u)) && (f = u[h], o = f && c[f])) {
                    if (o.events)
                        for (e in o.events) y[e] ? i.event.remove(u, e) : i.removeEvent(u, e, o.handle);
                    c[f] && (delete c[f], a ? delete u[h] : typeof u.removeAttribute !== s ? u.removeAttribute(h) : u[h] = null, v.push(f))
                }
        }
    }), i.fn.extend({
        text: function(n) {
            return g(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ef(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ef(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, e = n ? i.filter(n, this) : this, u = 0; null != (r = e[u]); u++) t || 1 !== r.nodeType || i.cleanData(f(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && oi(f(r, "script")), r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) {
                for (1 === n.nodeType && i.cleanData(f(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return g(this, function(n) {
                var t = this[0] || {},
                    u = 0,
                    e = this.length;
                if (void 0 === n) return 1 === t.nodeType ? t.innerHTML.replace(pe, "") : void 0;
                if (!("string" != typeof n || be.test(n) || !r.htmlSerialize && yu.test(n) || !r.leadingWhitespace && li.test(n) || o[(bu.exec(n) || ["", ""])[1].toLowerCase()])) {
                    n = n.replace(wu, "<$1></$2>");
                    try {
                        for (; e > u; u++) t = this[u] || {}, 1 === t.nodeType && (i.cleanData(f(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (s) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = arguments[0];
            return this.domManip(arguments, function(t) {
                n = this.parentNode, i.cleanData(f(this)), n && n.replaceChild(t, this)
            }), n && (n.length || n.nodeType) ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t) {
            n = gu.apply([], n);
            var h, u, c, o, v, s, e = 0,
                l = this.length,
                p = this,
                w = l - 1,
                a = n[0],
                y = i.isFunction(a);
            if (y || l > 1 && "string" == typeof a && !r.checkClone && ke.test(a)) return this.each(function(i) {
                var r = p.eq(i);
                y && (n[0] = a.call(this, i, r.html())), r.domManip(n, t)
            });
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this), h = s.firstChild, 1 === s.childNodes.length && (s = h), h)) {
                for (o = i.map(f(s, "script"), of), c = o.length; l > e; e++) u = s, e !== w && (u = i.clone(u, !0, !0), c && i.merge(o, f(u, "script"))), t.call(this[e], u, e);
                if (c)
                    for (v = o[o.length - 1].ownerDocument, i.map(o, sf), e = 0; c > e; e++) u = o[e], nf.test(u.type || "") && !i._data(u, "globalEval") && i.contains(v, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval((u.text || u.textContent || u.innerHTML || "").replace(ge, "")));
                s = h = null
            }
            return this
        }
    }), i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ki.apply(f, u.get());
            return this.pushStack(f)
        }
    }), yi = {}, ! function() {
        var t, i, n = u.createElement("div"),
            f = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", r.opacity = /^0.5/.test(t.style.opacity), r.cssFloat = !!t.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", r.clearCloneStyle = "content-box" === n.style.backgroundClip, t = n = null, r.shrinkWrapBlocks = function() {
            var t, r, n, e;
            if (null == i) {
                if (t = u.getElementsByTagName("body")[0], !t) return;
                e = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", r = u.createElement("div"), n = u.createElement("div"), t.appendChild(r).appendChild(n), i = !1, typeof n.style.zoom !== s && (n.style.cssText = f + ";width:1px;padding:1px;zoom:1", n.innerHTML = "<div></div>", n.firstChild.style.width = "5px", i = 3 !== n.offsetWidth), t.removeChild(r), t = r = n = null
            }
            return i
        }
    }();
    var yf = /^margin/,
        ct = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"),
        k, w, fo = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (k = function(n) {
        return n.ownerDocument.defaultView.getComputedStyle(n, null)
    }, w = function(n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || k(n), u = r ? r.getPropertyValue(t) || r[t] : void 0, r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), ct.test(u) && yf.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), void 0 === u ? u : u + ""
    }) : u.documentElement.currentStyle && (k = function(n) {
        return n.currentStyle
    }, w = function(n, t, i) {
        var o, f, e, r, u = n.style;
        return i = i || k(n), r = i ? i[t] : void 0, null == r && u && u[t] && (r = u[t]), ct.test(r) && !fo.test(t) && (o = u.left, f = n.runtimeStyle, e = f && f.left, e && (f.left = n.currentStyle.left), u.left = "fontSize" === t ? "1em" : r, r = u.pixelLeft + "px", u.left = o, e && (f.left = e)), void 0 === r ? r : r + "" || "auto"
    }), ! function() {
        function a() {
            var f, t, r = u.getElementsByTagName("body")[0];
            r && (f = u.createElement("div"), t = u.createElement("div"), f.style.cssText = l, r.appendChild(f).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", i.swap(r, null != r.style.zoom ? {
                zoom: 1
            } : {}, function() {
                c = 4 === t.offsetWidth
            }), o = !0, s = !1, h = !0, n.getComputedStyle && (s = "1%" !== (n.getComputedStyle(t, null) || {}).top, o = "4px" === (n.getComputedStyle(t, null) || {
                width: "4px"
            }).width), r.removeChild(f), t = r = null)
        }
        var f, e, c, o, s, h, t = u.createElement("div"),
            l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            v = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", f = t.getElementsByTagName("a")[0], f.style.cssText = "float:left;opacity:.5", r.opacity = /^0.5/.test(f.style.opacity), r.cssFloat = !!f.style.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", r.clearCloneStyle = "content-box" === t.style.backgroundClip, f = t = null, i.extend(r, {
            reliableHiddenOffsets: function() {
                if (null != e) return e;
                var i, n, f, t = u.createElement("div"),
                    r = u.getElementsByTagName("body")[0];
                if (r) return t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = u.createElement("div"), i.style.cssText = l, r.appendChild(i).appendChild(t), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", n = t.getElementsByTagName("td"), n[0].style.cssText = "padding:0;margin:0;border:0;display:none", f = 0 === n[0].offsetHeight, n[0].style.display = "", n[1].style.display = "none", e = f && 0 === n[0].offsetHeight, r.removeChild(i), t = r = null, e
            },
            boxSizing: function() {
                return null == c && a(), c
            },
            boxSizingReliable: function() {
                return null == o && a(), o
            },
            pixelPosition: function() {
                return null == s && a(), s
            },
            reliableMarginRight: function() {
                var r, f, t, i;
                if (null == h && n.getComputedStyle) {
                    if (r = u.getElementsByTagName("body")[0], !r) return;
                    f = u.createElement("div"), t = u.createElement("div"), f.style.cssText = l, r.appendChild(f).appendChild(t), i = t.appendChild(u.createElement("div")), i.style.cssText = t.style.cssText = v, i.style.marginRight = i.style.width = "0", t.style.width = "1px", h = !parseFloat((n.getComputedStyle(i, null) || {}).marginRight), r.removeChild(f)
                }
                return h
            }
        })
    }(), i.swap = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t) e[u] = n.style[u], n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t) n.style[u] = e[u];
        return f
    };
    var ti = /alpha\([^)]*\)/i,
        eo = /opacity\s*=\s*([^)]*)/,
        oo = /^(none|table(?!-c[ea]).+)/,
        so = new RegExp("^(" + lt + ")(.*)$", "i"),
        ho = new RegExp("^([+-])=(" + lt + ")", "i"),
        co = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        fr = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ir = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = w(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: r.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, t, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var o, c, e, s = i.camelCase(t),
                    h = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = lr(h, s)), e = i.cssHooks[t] || i.cssHooks[s], void 0 === u) return e && "get" in e && void 0 !== (o = e.get(n, !1, f)) ? o : h[t];
                if (c = typeof u, "string" === c && (o = ho.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), c = "number"), null != u && u === u && ("number" !== c || i.cssNumber[s] || (u += "px"), r.clearCloneStyle || "" !== u || 0 !== t.indexOf("background") || (h[t] = "inherit"), !(e && "set" in e && void 0 === (u = e.set(n, u, f))))) try {
                    h[t] = "", h[t] = u
                } catch (l) {}
            }
        },
        css: function(n, t, r, u) {
            var s, f, e, o = i.camelCase(t);
            return t = i.cssProps[o] || (i.cssProps[o] = lr(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), void 0 === f && (f = w(n, t, u)), "normal" === f && t in fr && (f = fr[t]), "" === r || r ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
        }
    }), i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return 0 === n.offsetWidth && oo.test(i.css(n, "display")) ? i.swap(n, co, function() {
                    return hr(n, t, u)
                }) : hr(n, t, u)
            },
            set: function(n, u, f) {
                var e = f && k(n);
                return ar(n, u, f ? or(n, t, f, r.boxSizing() && "border-box" === i.css(n, "boxSizing", !1, e), e) : 0)
            }
        }
    }), r.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return eo.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                f = u && u.filter || r.filter || "";
            r.zoom = 1, (t >= 1 || "" === t) && "" === i.trim(f.replace(ti, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || u && !u.filter) || (r.filter = ti.test(f) ? f.replace(ti, e) : f + " " + e)
        }
    }), i.cssHooks.marginRight = cu(r.reliableMarginRight, function(n, t) {
        if (t) return i.swap(n, {
            display: "inline-block"
        }, w, [n, "marginRight"])
    }), i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + d[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        }, yf.test(n) || (i.cssHooks[n + t].set = ar)
    }), i.fn.extend({
        css: function(n, t) {
            return g(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (i.isArray(t)) {
                    for (f = k(n), e = t.length; e > u; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return rr(this, !0)
        },
        hide: function() {
            return rr(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                ht(this) ? i(this).show() : i(this).hide()
            })
        }
    }), i.Tween = e, e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n, this.prop = r, this.easing = f || "swing", this.options = t, this.start = this.now = this.cur(), this.end = u, this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = e.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : e.propHooks._default.set(this), this
        }
    }, e.prototype.init.prototype = e.prototype, e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    }, e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    }, i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    }, i.fx = e.prototype.init, i.fx.step = {};
    var tt, at, lo = /^(?:toggle|show|hide)$/,
        wr = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"),
        ao = /queueHooks$/,
        yt = [vo],
        ft = {
            "*": [function(n, t) {
                var f = this.createTween(n, t),
                    s = f.cur(),
                    r = wr.exec(t),
                    e = r && r[3] || (i.cssNumber[n] ? "" : "px"),
                    u = (i.cssNumber[n] || "px" !== e && +s) && wr.exec(i.css(f.elem, n)),
                    o = 1,
                    h = 20;
                if (u && u[3] !== e) {
                    e = e || u[3], r = r || [], u = +s || 1;
                    do o = o || ".5", u /= o, i.style(f.elem, n, u + e); while (o !== (o = f.cur() / s) && 1 !== o && --h)
                }
                return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]), f
            }]
        };
    i.Animation = i.extend(iu, {
            tweener: function(n, t) {
                i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
                for (var r, u = 0, f = n.length; f > u; u++) r = n[u], ft[r] = ft[r] || [], ft[r].unshift(t)
            },
            prefilter: function(n, t) {
                t ? yt.unshift(n) : yt.push(n)
            }
        }), i.speed = function(n, t, r) {
            var u = n && "object" == typeof n ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
                i.isFunction(u.old) && u.old.call(this), u.queue && i.dequeue(this, u.queue)
            }, u
        }, i.fn.extend({
            fadeTo: function(n, t, i, r) {
                return this.filter(ht).css("opacity", 0).show().end().animate({
                    opacity: t
                }, n, i, r)
            },
            animate: function(n, t, r, u) {
                var o = i.isEmptyObject(n),
                    e = i.speed(t, r, u),
                    f = function() {
                        var t = iu(this, i.extend({}, n), e);
                        (o || i._data(this, "finish")) && t.stop(!0)
                    };
                return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
            },
            stop: function(n, t, r) {
                var u = function(n) {
                    var t = n.stop;
                    delete n.stop, t(r)
                };
                return "string" != typeof n && (r = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                    var o = !0,
                        t = null != n && n + "queueHooks",
                        e = i.timers,
                        f = i._data(this);
                    if (t) f[t] && f[t].stop && u(f[t]);
                    else
                        for (t in f) f[t] && f[t].stop && ao.test(t) && u(f[t]);
                    for (t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(r), o = !1, e.splice(t, 1));
                    (o || !r) && i.dequeue(this, n)
                })
            },
            finish: function(n) {
                return n !== !1 && (n = n || "fx"), this.each(function() {
                    var t, f = i._data(this),
                        r = f[n + "queue"],
                        e = f[n + "queueHooks"],
                        u = i.timers,
                        o = r ? r.length : 0;
                    for (f.finish = !0, i.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
                    for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete f.finish
                })
            }
        }), i.each(["toggle", "show", "hide"], function(n, t) {
            var r = i.fn[t];
            i.fn[t] = function(n, i, u) {
                return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ni(t, !0), n, i, u)
            }
        }), i.each({
            slideDown: ni("show"),
            slideUp: ni("hide"),
            slideToggle: ni("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, t) {
            i.fn[n] = function(n, i, r) {
                return this.animate(t, n, i, r)
            }
        }), i.timers = [], i.fx.tick = function() {
            var r, n = i.timers,
                t = 0;
            for (tt = i.now(); t < n.length; t++) r = n[t], r() || n[t] !== r || n.splice(t--, 1);
            n.length || i.fx.stop(), tt = void 0
        }, i.fx.timer = function(n) {
            i.timers.push(n), n() ? i.fx.start() : i.timers.pop()
        }, i.fx.interval = 13, i.fx.start = function() {
            at || (at = setInterval(i.fx.tick, i.fx.interval))
        }, i.fx.stop = function() {
            clearInterval(at), at = null
        }, i.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, i.fn.delay = function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var i, n, f, e, t = u.createElement("div");
            t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], f = u.createElement("select"), e = f.appendChild(u.createElement("option")), n = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", r.getSetAttribute = "t" !== t.className, r.style = /top/.test(i.getAttribute("style")), r.hrefNormalized = "/a" === i.getAttribute("href"), r.checkOn = !!n.value, r.optSelected = e.selected, r.enctype = !!u.createElement("form").enctype, f.disabled = !0, r.optDisabled = !e.disabled, n = u.createElement("input"), n.setAttribute("value", ""), r.input = "" === n.getAttribute("value"), n.value = "t", n.setAttribute("type", "radio"), r.radioValue = "t" === n.value, i = n = f = e = t = null
        }(), ru = /\r/g, i.fn.extend({
            val: function(n) {
                var t, r, f, u = this[0];
                return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                    var u;
                    1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                        return null == n ? "" : n + ""
                    })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
                })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(ru, "") : null == r ? "" : r)) : void 0
            }
        }), i.extend({
            valHooks: {
                option: {
                    get: function(n) {
                        var t = i.find.attr(n, "value");
                        return null != t ? t : i.text(n)
                    }
                },
                select: {
                    get: function(n) {
                        for (var o, t, s = n.options, u = n.selectedIndex, f = "select-one" === n.type || 0 > u, h = f ? null : [], c = f ? u + 1 : s.length, e = 0 > u ? c : f ? u : 0; c > e; e++)
                            if (t = s[e], !(!t.selected && e !== u || (r.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                                if (o = i(t).val(), f) return o;
                                h.push(o)
                            }
                        return h
                    },
                    set: function(n, t) {
                        for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--;)
                            if (r = u[e], i.inArray(i.valHooks.option.get(r), o) >= 0) try {
                                r.selected = f = !0
                            } catch (s) {
                                r.scrollHeight
                            } else r.selected = !1;
                        return f || (n.selectedIndex = -1), u
                    }
                }
            }
        }), i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = {
                set: function(n, t) {
                    if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
                }
            }, r.checkOn || (i.valHooks[this].get = function(n) {
                return null === n.getAttribute("value") ? "on" : n.value
            })
        });
    var ut, fu, c = i.expr.attrHandle,
        vi = /^(?:checked|selected)$/i,
        b = r.getSetAttribute,
        gt = r.input;
    i.fn.extend({
        attr: function(n, t) {
            return g(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    }), i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e) return typeof n.getAttribute === s ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? fu : ut)), void 0 === r ? u && "get" in u && null !== (f = u.get(n, t)) ? f : (f = i.find.attr(n, t), null == f ? void 0 : f) : null !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : void i.removeAttr(n, t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
                f = t && t.match(h);
            if (f && 1 === n.nodeType)
                while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) ? gt && b || !vi.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(b ? r : u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!r.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var u = n.value;
                        return n.setAttribute("type", t), u && (n.value = u), t
                    }
                }
            }
        }
    }), fu = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : gt && b || !vi.test(r) ? n.setAttribute(!b && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
        }
    }, i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = c[t] || i.find.attr;
        c[t] = gt && b || !vi.test(t) ? function(n, t, i) {
            var u, f;
            return i || (f = c[t], c[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, c[t] = f), u
        } : function(n, t, r) {
            if (!r) return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), gt && b || (i.attrHooks.value = {
        set: function(n, t, r) {
            return i.nodeName(n, "input") ? void(n.defaultValue = t) : ut && ut.set(n, t, r)
        }
    }), b || (ut = {
        set: function(n, t, i) {
            var r = n.getAttributeNode(i);
            return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)), r.value = t += "", "value" === i || t === n.getAttribute(i) ? t : void 0
        }
    }, c.id = c.name = c.coords = function(n, t, i) {
        var r;
        if (!i) return (r = n.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, i.valHooks.button = {
        get: function(n, t) {
            var i = n.getAttributeNode(t);
            if (i && i.specified) return i.value
        },
        set: ut.set
    }, i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            ut.set(n, "" === t ? !1 : t, i)
        }
    }, i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = {
            set: function(n, i) {
                if ("" === i) return n.setAttribute(t, "auto"), i
            }
        }
    })), r.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || void 0
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    }), br = /^(?:input|select|textarea|button|object)$/i, pr = /^(?:a|area)$/i, i.fn.extend({
        prop: function(n, t) {
            return g(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n, this.each(function() {
                try {
                    this[n] = void 0, delete this[n]
                } catch (t) {}
            })
        }
    }), i.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, t, r) {
            var f, u, o, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e) return o = 1 !== e || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : br.test(n.nodeName) || pr.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    }), r.hrefNormalized || i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    }), r.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    }), r.enctype || (i.propFix.enctype = "encoding"), dt = /[\t\r\n\f]/g, i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, s, f, e = 0,
                c = this.length,
                l = "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (l)
                for (o = (n || "").match(h) || []; c > e; e++)
                    if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(dt, " ") : " ")) {
                        for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                        f = i.trim(r), t.className !== f && (t.className = f)
                    }
            return this
        },
        removeClass: function(n) {
            var o, t, r, u, s, f, e = 0,
                c = this.length,
                l = 0 === arguments.length || "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (l)
                for (o = (n || "").match(h) || []; c > e; e++)
                    if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(dt, " ") : "")) {
                        for (s = 0; u = o[s++];)
                            while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                        f = n ? i.trim(r) : "", t.className !== f && (t.className = f)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ? function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            } : function() {
                if ("string" === r)
                    for (var t, f = 0, u = i(this), e = n.match(h) || []; t = e[f++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else(r === s || "boolean" === r) && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(dt, " ").indexOf(i) >= 0) return !0;
            return !1
        }
    }), i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    }), i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var ai = i.now(),
        ii = /\?/,
        ko = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function(t) {
        if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
        var f, r = null,
            u = i.trim(t + "");
        return u && !i.trim(u.replace(ko, function(n, t, i, u) {
            return f && t && (r = 0), 0 === r ? n : (f = i || t, r += !u - !i, "")
        })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
    }, i.parseXML = function(t) {
        var r, u;
        if (!t || "string" != typeof t) return null;
        try {
            n.DOMParser ? (u = new DOMParser, r = u.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t))
        } catch (f) {
            r = void 0
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
    };
    var nt, y, ns = /#.*$/,
        er = /([?&])_=[^&]*/,
        ye = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        ts = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ae = /^(?:GET|HEAD)$/,
        gf = /^\/\//,
        rf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        hu = {},
        ri = {},
        df = "*/".concat("*");
    try {
        y = location.href
    } catch (is) {
        y = u.createElement("a"), y.href = "", y = y.href
    }
    nt = rf.exec(y.toLowerCase()) || [], i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: y,
            type: "GET",
            isLocal: ts.test(nt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": df,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ui(ui(n, i.ajaxSettings), t) : ui(i.ajaxSettings, n)
        },
        ajaxPrefilter: bf(hu),
        ajaxTransport: bf(ri),
        ajax: function(n, t) {
            function p(n, t, s, h) {
                var v, it, nt, y, p, c = t;
                2 !== e && (e = 2, g && clearTimeout(g), a = void 0, b = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && 300 > n || 304 === n, s && (y = ie(r, u, s)), y = re(r, y, u, v), v ? (r.ifModified && (p = u.getResponseHeader("Last-Modified"), p && (i.lastModified[f] = p), p = u.getResponseHeader("etag"), p && (i.etag[f] = p)), 204 === n || "HEAD" === r.type ? c = "nocontent" : 304 === n ? c = "notmodified" : (c = y.state, it = y.data, nt = y.error, v = !nt)) : (nt = c, (n || !c) && (c = "error", 0 > n && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? d.resolveWith(o, [it, c, u]) : d.rejectWith(o, [u, c, nt]), u.statusCode(w), w = void 0, l && k.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : nt]), tt.fireWith(o, [u, c]), l && (k.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof n && (t = n, n = void 0), t = t || {};
            var c, s, f, b, g, l, a, v, r = i.ajaxSetup({}, t),
                o = r.context || r,
                k = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
                d = i.Deferred(),
                tt = i.Callbacks("once memory"),
                w = r.statusCode || {},
                it = {},
                rt = {},
                e = 0,
                ut = "canceled",
                u = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (2 === e) {
                            if (!v)
                                for (v = {}; t = ye.exec(b);) v[t[1].toLowerCase()] = t[2];
                            t = v[n.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === e ? b : null
                    },
                    setRequestHeader: function(n, t) {
                        var i = n.toLowerCase();
                        return e || (n = rt[i] = rt[i] || n, it[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return e || (r.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (2 > e)
                                for (t in n) w[t] = [w[t], n[t]];
                            else u.always(n[u.status]);
                        return this
                    },
                    abort: function(n) {
                        var t = n || ut;
                        return a && a.abort(t), p(0, t), this
                    }
                };
            if (d.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || y) + "").replace(ns, "").replace(gf, nt[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(h) || [""], null == r.crossDomain && (c = rf.exec(r.url.toLowerCase()), r.crossDomain = !(!c || c[1] === nt[1] && c[2] === nt[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (nt[3] || ("http:" === nt[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)), tu(hu, r, t, u), 2 === e) return u;
            l = r.global, l && 0 == i.active++ && i.event.trigger("ajaxStart"), r.type = r.type.toUpperCase(), r.hasContent = !ae.test(r.type), f = r.url, r.hasContent || (r.data && (f = r.url += (ii.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = er.test(f) ? f.replace(er, "$1_=" + ai++) : f + (ii.test(f) ? "&" : "?") + "_=" + ai++)), r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f])), (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType), u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + df + "; q=0.01" : "") : r.accepts["*"]);
            for (s in r.headers) u.setRequestHeader(s, r.headers[s]);
            if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e)) return u.abort();
            ut = "abort";
            for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) u[s](r[s]);
            if (a = tu(ri, r, t, u)) {
                u.readyState = 1, l && k.trigger("ajaxSend", [u, r]), r.async && r.timeout > 0 && (g = setTimeout(function() {
                    u.abort("timeout")
                }, r.timeout));
                try {
                    e = 1, a.send(it, p)
                } catch (ft) {
                    if (!(2 > e)) throw ft;
                    p(-1, ft)
                }
            } else p(-1, "No Transport");
            return u
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    }), i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            })
        }
    }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return this.each(i.isFunction(n) ? function(t) {
                i(this).wrapInner(n.call(this, t))
            } : function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    }), i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() && "none" === (n.style && n.style.display || i.css(n, "display"))
    }, i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    };
    var ue = /%20/g,
        te = /\[\]$/,
        sr = /\r?\n/g,
        fe = /^(?:submit|button|image|reset|file)$/i,
        ee = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
            f = function(n, t) {
                t = i.isFunction(t) ? t() : null == t ? "" : t, u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            f(this.name, this.value)
        });
        else
            for (r in n) fi(r, n[r], t, f);
        return u.join("&").replace(ue, "+")
    }, i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && ee.test(this.nodeName) && !fe.test(n) && (this.checked || !wi.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(sr, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(sr, "\r\n")
                }
            }).get()
        }
    }), i.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && ff() || he()
    } : ff;
    var se = 0,
        kt = {},
        st = i.ajaxSettings.xhr();
    return n.ActiveXObject && i(n).on("unload", function() {
        for (var n in kt) kt[n](void 0, !0)
    }), r.cors = !!st && "withCredentials" in st, st = r.ajax = !!st, st && i.ajaxTransport(function(n) {
        if (!n.crossDomain || r.cors) {
            var t;
            return {
                send: function(r, u) {
                    var e, f = n.xhr(),
                        o = ++se;
                    if (f.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                        for (e in n.xhrFields) f[e] = n.xhrFields[e];
                    n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (e in r) void 0 !== r[e] && f.setRequestHeader(e, r[e] + "");
                    f.send(n.hasContent && n.data || null), t = function(r, e) {
                        var s, c, h;
                        if (t && (e || 4 === f.readyState))
                            if (delete kt[o], t = void 0, f.onreadystatechange = i.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                h = {}, s = f.status, "string" == typeof f.responseText && (h.text = f.responseText);
                                try {
                                    c = f.statusText
                                } catch (l) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = h.text ? 200 : 404
                            }
                        h && u(s, c, h, f.getAllResponseHeaders())
                    }, n.async ? 4 === f.readyState ? setTimeout(t) : f.onreadystatechange = kt[o] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1), n.crossDomain && (n.type = "GET", n.global = !1)
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var t, r = u.head || i("head")[0] || u.documentElement;
            return {
                send: function(i, f) {
                    t = u.createElement("script"), t.async = !0, n.scriptCharset && (t.charset = n.scriptCharset), t.src = n.url, t.onload = t.onreadystatechange = function(n, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || f(200, "success"))
                    }, r.insertBefore(t, r.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    }), ei = [], pt = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = ei.pop() || i.expando + "_" + ai++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, o, e, s = t.jsonp !== !1 && (pt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && pt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(pt, "$1" + f) : t.jsonp !== !1 && (t.url += (ii.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
            return e || i.error(f + " was not called"), e[0]
        }, t.dataTypes[0] = "json", o = n[f], n[f] = function() {
            e = arguments
        }, u.always(function() {
            n[f] = o, t[f] && (t.jsonpCallback = r.jsonpCallback, ei.push(f)), e && i.isFunction(o) && o(e[0]), e = o = void 0
        }), "script"
    }), i.parseHTML = function(n, t, r) {
        if (!n || "string" != typeof n) return null;
        "boolean" == typeof t && (r = t, t = !1), t = t || u;
        var f = yr.exec(n),
            e = !r && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
    }, si = i.fn.load, i.fn.load = function(n, t, r) {
        if ("string" != typeof n && si) return si.apply(this, arguments);
        var u, o, s, f = this,
            e = n.indexOf(" ");
        return e >= 0 && (u = n.slice(e, n.length), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: s,
            dataType: "html",
            data: t
        }).done(function(n) {
            o = arguments, f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).complete(r && function(n, t) {
            f.each(r, o || [n.responseText, t, n])
        }), this
    }, i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, ci = n.document.documentElement, i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            "static" === l && (n.style.position = "relative"), u = a.offset(), s = i.css(n, "top"), c = i.css(n, "left"), v = ("absolute" === l || "fixed" === l) && i.inArray("auto", [s, c]) > -1, v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0), i.isFunction(t) && (t = t.call(n, r, u)), null != t.top && (f.top = t.top - u.top + h), null != t.left && (f.left = t.left - u.left + o), "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var t, f, u = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                e = r && r.ownerDocument;
            if (e) return t = e.documentElement, i.contains(t, r) ? (typeof r.getBoundingClientRect !== s && (u = r.getBoundingClientRect()), f = du(e), {
                top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : u
        },
        position: function() {
            if (this[0]) {
                var n, r, t = {
                        top: 0,
                        left: 0
                    },
                    u = this[0];
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || ci; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || ci
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = /Y/.test(t);
        i.fn[n] = function(u) {
            return g(this, function(n, u, f) {
                var e = du(n);
                return void 0 === f ? e ? t in e ? e[t] : e.document.documentElement[u] : n[u] : void(e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f)
            }, n, u, arguments.length, null)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = cu(r.pixelPosition, function(n, r) {
            if (r) return r = w(n, t), ct.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || "boolean" != typeof u),
                    o = r || (u === !0 || f === !0 ? "margin" : "border");
                return g(this, function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : void 0, e, null)
            }
        })
    }), i.fn.size = function() {
        return this.length
    }, i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }), vu = n.jQuery, lf = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = lf), t && n.jQuery === i && (n.jQuery = vu), i
    }, typeof t === s && (n.jQuery = n.$ = i), i
}),
function(n) {
    function i(n, t) {
        for (var i = window, r = (n || "").split("."); i && r.length;) i = i[r.shift()];
        return typeof i == "function" ? i : (t.push(n), Function.constructor.apply(null, t))
    }

    function u(n) {
        return n === "GET" || n === "POST"
    }

    function o(n, t) {
        !u(t) && n.setRequestHeader("X-HTTP-Method-Override", t)
    }

    function s(t, i, r) {
        var u;
        r.indexOf("application/x-javascript") === -1 && (u = (t.getAttribute("data-ajax-mode") || "").toUpperCase(), n(t.getAttribute("data-ajax-update")).each(function(t, r) {
            var f;
            switch (u) {
                case "BEFORE":
                    f = r.firstChild, n("<div />").html(i).contents().each(function() {
                        r.insertBefore(this, f)
                    });
                    break;
                case "AFTER":
                    n("<div />").html(i).contents().each(function() {
                        r.appendChild(this)
                    });
                    break;
                case "REPLACE-WITH":
                    n(r).replaceWith(i);
                    break;
                default:
                    n(r).html(i)
            }
        }))
    }

    function f(t, r) {
        var e, h, f, c;
        (e = t.getAttribute("data-ajax-confirm"), !e || window.confirm(e)) && (h = n(t.getAttribute("data-ajax-loading")), c = parseInt(t.getAttribute("data-ajax-loading-duration"), 10) || 0, n.extend(r, {
            type: t.getAttribute("data-ajax-method") || undefined,
            url: t.getAttribute("data-ajax-url") || undefined,
            cache: !!t.getAttribute("data-ajax-cache"),
            beforeSend: function(n) {
                var r;
                return o(n, f), r = i(t.getAttribute("data-ajax-begin"), ["xhr"]).apply(t, arguments), r !== !1 && h.show(c), r
            },
            complete: function() {
                h.hide(c), i(t.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(t, arguments)
            },
            success: function(n, r, u) {
                s(t, n, u.getResponseHeader("Content-Type") || "text/html"), i(t.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(t, arguments)
            },
            error: function() {
                i(t.getAttribute("data-ajax-failure"), ["xhr", "status", "error"]).apply(t, arguments)
            }
        }), r.data.push({
            name: "X-Requested-With",
            value: "XMLHttpRequest"
        }), f = r.type.toUpperCase(), u(f) || (r.type = "POST", r.data.push({
            name: "X-HTTP-Method-Override",
            value: f
        })), n.ajax(r))
    }

    function h(t) {
        var i = n(t).data(e);
        return !i || !i.validate || i.validate()
    }
    var t = "unobtrusiveAjaxClick",
        r = "unobtrusiveAjaxClickTarget",
        e = "unobtrusiveValidation";
    n(document).on("click", "a[data-ajax=true]", function(n) {
        n.preventDefault(), f(this, {
            url: this.href,
            type: "GET",
            data: []
        })
    });
    n(document).on("click", "form[data-ajax=true] input[type=image]", function(i) {
        var r = i.target.name,
            u = n(i.target),
            f = n(u.parents("form")[0]),
            e = u.offset();
        f.data(t, [{
            name: r + ".x",
            value: Math.round(i.pageX - e.left)
        }, {
            name: r + ".y",
            value: Math.round(i.pageY - e.top)
        }]), setTimeout(function() {
            f.removeData(t)
        }, 0)
    });
    n(document).on("click", "form[data-ajax=true] :submit", function(i) {
        var f = i.currentTarget.name,
            e = n(i.target),
            u = n(e.parents("form")[0]);
        u.data(t, f ? [{
            name: f,
            value: i.currentTarget.value
        }] : []), u.data(r, e), setTimeout(function() {
            u.removeData(t), u.removeData(r)
        }, 0)
    });
    n(document).on("submit", "form[data-ajax=true]", function(i) {
        var e = n(this).data(t) || [],
            u = n(this).data(r),
            o = u && u.hasClass("cancel");
        (i.preventDefault(), o || h(this)) && f(this, {
            url: this.action,
            type: this.method || "GET",
            data: e.concat(n(this).serializeArray())
        })
    })
}(jQuery), ! function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : n(jQuery)
}(function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = n.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                i.settings.submitHandler && (i.submitButton = t.target), n(t.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== n(t.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function(t) {
                function r() {
                    var u, r;
                    return i.settings.submitHandler ? (i.submitButton && (u = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), r = i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && u.remove(), void 0 !== r ? r : !1) : !0
                }
                return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function() {
            var t, i;
            return n(this[0]).is("form") ? t = this.validate().form() : (t = !0, i = n(this[0].form).validate(), this.each(function() {
                t = i.element(this) && t
            })), t
        },
        removeAttrs: function(t) {
            var i = {},
                r = this;
            return n.each(t.split(/\s/), function(n, t) {
                i[t] = r.attr(t), r.removeAttr(t)
            }), i
        },
        rules: function(t, i) {
            var e, s, f, u, o, h, r = this[0];
            if (t) switch (e = n.data(r.form, "validator").settings, s = e.rules, f = n.validator.staticRules(r), t) {
                case "add":
                    n.extend(f, n.validator.normalizeRule(i)), delete f.messages, s[r.name] = f, i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                    break;
                case "remove":
                    return i ? (h = {}, n.each(i.split(/\s/), function(t, i) {
                        h[i] = f[i], delete f[i], "required" === i && n(r).removeAttr("aria-required")
                    }), h) : (delete s[r.name], f)
            }
            return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r), u.required && (o = u.required, delete u.required, u = n.extend({
                required: o
            }, u), n(r).attr("aria-required", "true")), u.remote && (o = u.remote, delete u.remote, u = n.extend(u, {
                remote: o
            })), u
        }
    }), n.extend(n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + n(t).val())
        },
        filled: function(t) {
            return !!n.trim("" + n(t).val())
        },
        unchecked: function(t) {
            return !n(t).prop("checked")
        }
    }), n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t), this.currentForm = i, this.init()
    }, n.validator.format = function(t, i) {
        return 1 === arguments.length ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function(n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function() {
                return i
            })
        }), t)
    }, n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(n)))
            },
            onfocusout: function(n) {
                this.checkable(n) || !(n.name in this.submitted) && this.optional(n) || this.element(n)
            },
            onkeyup: function(n, t) {
                (9 !== t.which || "" !== this.elementValue(n)) && (n.name in this.submitted || n === this.lastElement) && this.element(n)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function i(t) {
                    var r = n.data(this[0].form, "validator"),
                        u = "on" + t.type.replace(/^validate/, ""),
                        i = r.settings;
                    i[u] && !this.is(i.ignore) && i[u].call(r, this[0], t)
                }
                this.labelContainer = n(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm), this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var t, r = this.groups = {};
                n.each(this.settings.groups, function(t, i) {
                    "string" == typeof i && (i = i.split(/\s/)), n.each(i, function(n, i) {
                        r[i] = t
                    })
                }), t = this.settings.rules, n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                }), n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", i).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", i), this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), n(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                var u = this.clean(t),
                    i = this.validationTargetFor(u),
                    r = !0;
                return this.lastElement = i, void 0 === i ? delete this.invalid[u.name] : (this.prepareElement(i), this.currentElements = n(i), r = this.check(i) !== !1, r ? delete this.invalid[i.name] : this.invalid[i.name] = !0), n(t).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t), this.errorList = [];
                    for (var i in t) this.errorList.push({
                        message: t[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var i, t = 0;
                for (i in n) t++;
                return t
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(n) {
                n.not(this.containers).text(""), this.addWrapper(n).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === n.grep(this.errorList, function(n) {
                    return n.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this,
                    i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = n([]), this.toHide = n([]), this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset(), this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var i, u = n(t),
                    r = t.type;
                return "radio" === r || "checkbox" === r ? n("input[name='" + t.name + "']:checked").val() : "number" === r && "undefined" != typeof t.validity ? t.validity.badInput ? !1 : u.val() : (i = u.val(), "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var i, r, u, f = n(t).rules(),
                    o = n.map(f, function(n, t) {
                        return t
                    }).length,
                    e = !1,
                    s = this.elementValue(t);
                for (r in f) {
                    u = {
                        method: r,
                        parameters: f[r]
                    };
                    try {
                        if (i = n.validator.methods[r].call(this, s, t, u.parameters), "dependency-mismatch" === i && 1 === o) {
                            e = !0;
                            continue
                        }
                        if (e = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!i) return this.formatAndAdd(t, u), !1
                    } catch (h) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + u.method + "' method.", h), h;
                    }
                }
                if (!e) return this.objectLength(f) && this.successList.push(t), !0
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || n(t).data("msg")
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (void 0 !== arguments[n]) return arguments[n];
                return void 0
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || void 0, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "</strong>")
            },
            formatAndAdd: function(t, i) {
                var r = this.defaultMessage(t, i.method),
                    u = /\$?\{(\d+)\}/g;
                "function" == typeof r ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters)), this.errorList.push({
                    message: r,
                    element: t,
                    method: i.method
                }), this.errorMap[t.name] = r, this.submitted[t.name] = r
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var u, o, e, r = this.errorsFor(t),
                    s = this.idOrName(t),
                    f = n(t).attr("aria-describedby");
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(i || ""), u = r, this.settings.wrapper && (u = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(u) : this.settings.errorPlacement ? this.settings.errorPlacement(u, n(t)) : u.insertAfter(t), r.is("label") ? r.attr("for", s) : 0 === r.parents("label[for='" + s + "']").length && (e = r.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), f ? f.match(new RegExp("\\b" + e + "\\b")) || (f += " " + e) : f = e, n(t).attr("aria-describedby", f), o = this.groups[t.name], o && n.each(this.groups, function(t, i) {
                    i === o && n("[name='" + t + "']", this.currentForm).attr("aria-describedby", r.attr("id"))
                }))), !i && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var r = this.idOrName(t),
                    u = n(t).attr("aria-describedby"),
                    i = "label[for='" + r + "'], label[for='" + r + "'] *";
                return u && (i = i + ", #" + u.replace(/\s+/g, ", #")), this.errors().filter(i)
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)), n(t).not(this.settings.ignore)[0]
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return n("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {},
                r = n(t).attr("class");
            return r && n.each(r.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function(t) {
            var r, i, u = {},
                e = n(t),
                f = t.getAttribute("type");
            for (r in n.validator.methods) "required" === r ? (i = t.getAttribute(r), "" === i && (i = !0), i = !!i) : i = e.attr(r), /min|max/.test(r) && (null === f || /number|range|text/.test(f)) && (i = Number(i)), i || 0 === i ? u[r] = i : f === r && "range" !== f && (u[r] = !0);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength, u
        },
        dataRules: function(t) {
            var i, r, u = {},
                f = n(t);
            for (i in n.validator.methods) r = f.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), void 0 !== r && (u[i] = r);
            return u
        },
        staticRules: function(t) {
            var i = {},
                r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1) return void delete t[r];
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                        case "string":
                            f = !!n(u.depends, i.form).length;
                            break;
                        case "function":
                            f = u.depends.call(i, i)
                    }
                    f ? t[r] = void 0 !== u.param ? u.param : !0 : delete t[r]
                }
            }), n.each(t, function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }), n.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), n.each(["rangelength", "range"], function() {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), n.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                }), t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i, n.validator.messages[t] = void 0 !== r ? r : n.validator.messages[t], i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
            },
            email: function(n, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n)) return !1;
                var i, f, e = 0,
                    r = 0,
                    u = !1;
                if (n = n.replace(/\D/g, ""), n.length < 13 || n.length > 19) return !1;
                for (i = n.length - 1; i >= 0; i--) f = n.charAt(i), r = parseInt(f, 10), u && (r *= 2) > 9 && (r -= 9), e += r, u = !u;
                return e % 10 == 0
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || r >= u
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || i >= n
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    n(i).valid()
                }), t === u.val()
            },
            remote: function(t, i, r) {
                if (this.optional(i)) return "dependency-mismatch";
                var u, e, f = this.previousValue(i);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = "string" == typeof r && {
                    url: r
                } || r, f.old === t ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    context: u.currentForm,
                    success: function(r) {
                        var o, e, h, s = r === !0 || "true" === r;
                        u.settings.messages[i.name].remote = f.originalMessage, s ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (o = {}, e = r || u.defaultMessage(i, "remote"), o[i.name] = f.message = n.isFunction(e) ? e(t) : e, u.invalid[i.name] = !0, u.showErrors(o)), f.valid = s, u.stopRequest(i, s)
                    }
                }, r)), "pending")
            }
        }
    }), n.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead.";
    };
    var i, t = {};
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        "abort" === n.mode && (t[u] && t[u].abort(), t[u] = r)
    }) : (i = n.ajax, n.ajax = function(r) {
        var f = ("mode" in r ? r : n.ajaxSettings).mode,
            u = ("port" in r ? r : n.ajaxSettings).port;
        return "abort" === f ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
    }), n.extend(n.fn, {
        validateDelegate: function(t, i, r) {
            return this.bind(i, function(i) {
                var u = n(i.target);
                if (u.is(t)) return r.apply(u, arguments)
            })
        }
    })
}),
function(n) {
    function i(n, t, i) {
        n.rules[t] = i, n.message && (n.messages[t] = n.message)
    }

    function h(n) {
        return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
    }

    function f(n) {
        return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
    }

    function e(n) {
        return n.substr(0, n.lastIndexOf(".") + 1)
    }

    function o(n, t) {
        return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n
    }

    function c(t, i) {
        var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']"),
            u = r.attr("data-valmsg-replace"),
            e = u ? n.parseJSON(u) !== !1 : null;
        r.removeClass("field-validation-valid").addClass("field-validation-error"), t.data("unobtrusiveContainer", r), e ? (r.empty(), t.removeClass("input-validation-error").appendTo(r)) : t.hide()
    }

    function l(t, i) {
        var u = n(this).find("[data-valmsg-summary=true]"),
            r = u.find("ul");
        r && r.length && i.errorList.length && (r.empty(), u.addClass("validation-summary-errors").removeClass("validation-summary-valid"), n.each(i.errorList, function() {
            n("<li />").html(this.message).appendTo(r)
        }))
    }

    function a(t) {
        var i = t.data("unobtrusiveContainer"),
            r = i.attr("data-valmsg-replace"),
            u = r ? n.parseJSON(r) : null;
        i && (i.addClass("field-validation-valid").removeClass("field-validation-error"), t.removeData("unobtrusiveContainer"), u && i.empty())
    }

    function v() {
        var t = n(this),
            i = "__jquery_unobtrusive_validation_form_reset";
        if (!t.data(i)) {
            t.data(i, !0);
            try {
                t.data("validator").resetForm()
            } finally {
                t.removeData(i)
            }
            t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors"), t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
        }
    }

    function s(t) {
        var i = n(t),
            f = i.data(u),
            s = n.proxy(v, t),
            e = r.unobtrusive.options || {},
            o = function(i, r) {
                var u = e[i];
                u && n.isFunction(u) && u.apply(t, r)
            };
        return f || (f = {
            options: {
                errorClass: e.errorClass || "input-validation-error",
                errorElement: e.errorElement || "span",
                errorPlacement: function() {
                    c.apply(t, arguments), o("errorPlacement", arguments)
                },
                invalidHandler: function() {
                    l.apply(t, arguments), o("invalidHandler", arguments)
                },
                messages: {},
                rules: {},
                success: function() {
                    a.apply(t, arguments), o("success", arguments)
                }
            },
            attachValidation: function() {
                i.off("reset." + u, s).on("reset." + u, s).validate(this.options)
            },
            validate: function() {
                return i.validate(), i.valid()
            }
        }, i.data(u, f)), f
    }
    var r = n.validator,
        t, u = "unobtrusiveValidation";
    r.unobtrusive = {
        adapters: [],
        parseElement: function(t, i) {
            var u = n(t),
                f = u.parents("form")[0],
                r, e, o;
            f && (r = s(f), r.options.rules[t.name] = e = {}, r.options.messages[t.name] = o = {}, n.each(this.adapters, function() {
                var i = "data-val-" + this.name,
                    r = u.attr(i),
                    s = {};
                r !== undefined && (i += "-", n.each(this.params, function() {
                    s[this] = u.attr(i + this)
                }), this.adapt({
                    element: t,
                    form: f,
                    message: r,
                    params: s,
                    rules: e,
                    messages: o
                }))
            }), n.extend(e, {
                __dummy__: !0
            }), !i && r.attachValidation())
        },
        parse: function(t) {
            var i = n(t),
                u = i.parents().addBack().filter("form").add(i.find("form")).has("[data-val=true]");
            i.find("[data-val=true]").each(function() {
                r.unobtrusive.parseElement(this, !0)
            }), u.each(function() {
                var n = s(this);
                n && n.attachValidation()
            })
        }
    }, t = r.unobtrusive.adapters, t.add = function(n, t, i) {
        return i || (i = t, t = []), this.push({
            name: n,
            params: t,
            adapt: i
        }), this
    }, t.addBool = function(n, t) {
        return this.add(n, function(r) {
            i(r, t || n, !0)
        })
    }, t.addMinMax = function(n, t, r, u, f, e) {
        return this.add(n, [f || "min", e || "max"], function(n) {
            var f = n.params.min,
                e = n.params.max;
            f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
        })
    }, t.addSingleVal = function(n, t, r) {
        return this.add(n, [t || "val"], function(u) {
            i(u, r || n, u.params[t])
        })
    }, r.addMethod("__dummy__", function() {
        return !0
    }), r.addMethod("regex", function(n, t, i) {
        var r;
        return this.optional(t) ? !0 : (r = new RegExp(i).exec(n), r && r.index === 0 && r[0].length === n.length)
    }), r.addMethod("nonalphamin", function(n, t, i) {
        var r;
        return i && (r = n.match(/\W/g), r = r && r.length >= i), r
    }), r.methods.extension ? (t.addSingleVal("accept", "mimtype"), t.addSingleVal("extension", "extension")) : t.addSingleVal("extension", "extension", "accept"), t.addSingleVal("regex", "pattern"), t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"), t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range"), t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength"), t.add("equalto", ["other"], function(t) {
        var r = e(t.element.name),
            u = t.params.other,
            s = o(u, r),
            h = n(t.form).find(":input").filter("[name='" + f(s) + "']")[0];
        i(t, "equalTo", h)
    }), t.add("required", function(n) {
        (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && i(n, "required", !0)
    }), t.add("remote", ["url", "type", "additionalfields"], function(t) {
        var r = {
                url: t.params.url,
                type: t.params.type || "GET",
                data: {}
            },
            u = e(t.element.name);
        n.each(h(t.params.additionalfields || t.element.name), function(i, e) {
            var s = o(e, u);
            r.data[s] = function() {
                var i = n(t.form).find(":input").filter("[name='" + f(s) + "']");
                return i.is(":checkbox") ? i.filter(":checked").val() || i.filter(":hidden").val() || "" : i.is(":radio") ? i.filter(":checked").val() || "" : i.val()
            }
        }), i(t, "remote", r)
    }), t.add("password", ["min", "nonalphamin", "regex"], function(n) {
        n.params.min && i(n, "minlength", n.params.min), n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin), n.params.regex && i(n, "regex", n.params.regex)
    }), n(function() {
        r.unobtrusive.parse(document)
    })
}(jQuery),
function(n, t, i) {
    function l(n) {
        var t = {},
            r = /^jQuery\d+$/;
        return i.each(n.attributes, function(n, i) {
            i.specified && !r.test(i.name) && (t[i.name] = i.value)
        }), t
    }

    function f(n, r) {
        var f = this,
            u = i(f);
        if (f.value == u.attr("placeholder") && u.hasClass("placeholder"))
            if (u.data("placeholder-password")) {
                if (u = u.hide().next().show().attr("id", u.removeAttr("id").data("placeholder-id")), n === !0) return u[0].value = r;
                u.focus()
            } else f.value = "", u.removeClass("placeholder"), f == t.activeElement && f.select()
    }

    function s() {
        var t, r = this,
            n = i(r),
            e = n,
            u = this.id;
        if (r.value == "") {
            if (r.type == "password") {
                if (!n.data("placeholder-textinput")) {
                    try {
                        t = n.clone().attr({
                            type: "text"
                        })
                    } catch (o) {
                        t = i("<input>").attr(i.extend(l(this), {
                            type: "text"
                        }))
                    }
                    t.removeAttr("name").data({
                        "placeholder-password": !0,
                        "placeholder-id": u
                    }).bind("focus.placeholder", f), n.data({
                        "placeholder-textinput": t,
                        "placeholder-id": u
                    }).before(t)
                }
                n = n.removeAttr("id").hide().prev().attr("id", u).show()
            }
            n.addClass("placeholder"), n[0].value = n.attr("placeholder")
        } else n.removeClass("placeholder")
    }
    var u = "placeholder" in t.createElement("input"),
        e = "placeholder" in t.createElement("textarea"),
        h = i.fn,
        c = i.valHooks,
        o, r;
    u && e ? (r = h.placeholder = function() {
        return this
    }, r.input = r.textarea = !0) : (r = h.placeholder = function() {
        var n = this;
        return n.filter((u ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": f,
            "blur.placeholder": s
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), n
    }, r.input = u, r.textarea = e, o = {
        get: function(n) {
            var t = i(n);
            return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : n.value
        },
        set: function(n, r) {
            var u = i(n);
            return u.data("placeholder-enabled") ? (r == "" ? (n.value = r, n != t.activeElement && s.call(n)) : u.hasClass("placeholder") ? f.call(n, !0, r) || (n.value = r) : n.value = r, u) : n.value = r
        }
    }, u || (c.input = o), e || (c.textarea = o), i(function() {
        i(t).delegate("form", "submit.placeholder", function() {
            var n = i(".placeholder", this).each(f);
            setTimeout(function() {
                n.each(s)
            }, 10)
        })
    }), i(n).bind("beforeunload.placeholder", function() {
        i(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery),
function(n) {
    n.fn.hasClassWhichStartsWith = function(t) {
        return this.filter(function() {
            var i = !1,
                r = this.className.split(" ");
            return n(r).each(function() {
                this.indexOf(t) == 0 && (i = !0)
            }), i
        })
    }, n.fn.removeClassWhichStartsWith = function(t) {
        return this.hasClassWhichStartsWith(t).each(function() {
            var i = this,
                r = this.className.split(" ");
            n(r).each(function() {
                this.indexOf(t) == 0 && n(i).removeClass(this.toString())
            })
        }), this
    }, n.browser = n.browser || {}, n.browser.IE6 = navigator.userAgent.match(/msie/i) && parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE") + 5)) == 6, n.browser.IE7 = navigator.userAgent.match(/msie/i) && parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE") + 5)) == 7, n.browser.IE8 = navigator.userAgent.match(/msie/i) && parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE") + 5)) == 8, n.fn.scrollTo = function(t) {
        if (this.length > 0) {
            t = n.extend({
                duration: 2e3,
                offset: 0
            }, t);
            var i = this[0];
            n("html, body").animate({
                scrollTop: n(i).offset().top + t.offset
            }, t.duration)
        }
        return this
    }, n.Event.KEY_RETURN = 13, n.fn.visible = function() {
        if (this.length == 0) return !1;
        var t = !0;
        return this.each(function() {
            return n(this).is(":visible") ? !0 : (t = !1, !1)
        }), t
    }, n.fn.inputmask = function(t, i) {
        if (!arguments.length) return this.find("*[data-inputmask]").inputmask(function(t) {
            return new RegExp(n(t).attr("data-inputmask"))
        }), this;
        var r = {
            highlightColour: "#FFDDDD"
        };
        i = n.extend(r, i), this.each(function() {
            var r = n(this),
                f = r.val(),
                u = function() {
                    if (r.val() != "") {
                        var u = t;
                        u instanceof Function && (u = u(this)), u || (u = n(this).attr("data-inputmask")), u.test(r.val()) || (r.val(r.attr("data-LastValue") || f), r.stop(!0, !0).effect("highlight", {
                            color: i.highlightColour
                        }, 1e3))
                    }
                    r.attr("data-LastValue", r.val())
                };
            r.change(u).keyup(u)
        })
    }, n.fn.clickGuardPrompt = function(n) {
        this.click(function(t) {
            confirm(n) || (t.preventDefault(), t.stopPropagation())
        })
    }, n.fn.checked = function() {
        return this.is(":checked")
    }, n.fn.simulateUserClick = function() {
        return this.each(function() {
            if (this.tagName) switch (this.tagName.toLowerCase()) {
                case "input":
                    this.click();
                    break;
                case "a":
                    var carryOn = !1;
                    this.onclick && this.onclick() != !1 && (carryOn = !0), carryOn && this.href && (this.href.toLowerCase().indexOf("javascript:") > -1 ? eval(decodeURI(this.href)) : window.location = this.href)
            }
        }), this
    }, n.fn.autofocus = function() {
        return this.closest("form").find("input:visible, textarea:visible, select:visible").first().focus(), this
    }, n.fn.formVal = function() {
        if (!this.length) return null;
        var t = this[0];
        return t.tagName == "INPUT" && t.type == "checkbox" ? n(t).checked() : n(t).val()
    }, n.fn.isOnScreen = function() {
        if (!this.length) return !1;
        var t = this.offset().top,
            r = this.height(),
            u = n(window).height(),
            i = n(window).scrollTop();
        return t > i && t + r < i + u
    }, n.fn.intVal = function() {
        return this.length ? parseInt(n(this[0]).val()) : NaN
    }, n.fn.pressEnter = function(t) {
        return this.each(function() {
            n(this).bind("enterPress", t), n(this).keyup(function(t) {
                t.keyCode == 13 && n(this).trigger("enterPress")
            })
        })
    }
}(jQuery), $(function() {
        $('*[data-autofocus="true"]').autofocus()
    }), $(function() {
        $(document).ajaxSend(function(n, t) {
            var u = "__RequestVerificationToken",
                r = $('input[name="' + u + '"]').val();
            "" == r || null == r || t.setRequestHeader(u, r), t.setRequestHeader("X-AjaxHostingPage", window.location.pathname + window.location.search + window.location.hash)
        }).ajaxComplete(function(n, t) {
            t.readyState == 4 && t.responseText == "ACCESS_DENIED" && (typeof window.top.XibAjax != "undefined" && window.top.XibAjax.LoginPage && window.top.XibAjax.LoginPage != "" ? window.top.XibAjax.ForwardToLogin() : window.top.location = "/Login?nextUrl=" + encodeURIComponent(window.top.location.pathname + window.top.location.search + window.top.location.hash))
        })
    }), + function(n) {
        "use strict";

        function r(i) {
            return this.each(function() {
                var u = n(this),
                    r = u.data("bs.tooltip"),
                    f = typeof i == "object" && i;
                (r || i != "destroy") && (r || u.data("bs.tooltip", r = new t(this, f)), typeof i == "string" && r[i]())
            })
        }
        var t = function(n, t) {
                this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", n, t)
            },
            i;
        t.VERSION = "3.3.2", t.TRANSITION_DURATION = 150, t.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, t.prototype.init = function(t, i, r) {
            var f, e, u, o, s;
            for (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(this.options.viewport.selector || this.options.viewport), f = this.options.trigger.split(" "), e = f.length; e--;)
                if (u = f[e], u == "click") this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
                else if (u != "manual") {
                o = u == "hover" ? "mouseenter" : "focusin", s = u == "hover" ? "mouseleave" : "focusout";
                this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this));
                this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this))
            }
            this.options.selector ? this._options = n.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, t.prototype.getDefaults = function() {
            return t.DEFAULTS
        }, t.prototype.getOptions = function(t) {
            return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        }, t.prototype.getDelegateOptions = function() {
            var t = {},
                i = this.getDefaults();
            return this._options && n.each(this._options, function(n, r) {
                i[n] != r && (t[n] = r)
            }), t
        }, t.prototype.enter = function(t) {
            var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
            if (i && i.$tip && i.$tip.is(":visible")) {
                i.hoverState = "in";
                return
            }
            if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
            i.timeout = setTimeout(function() {
                i.hoverState == "in" && i.show()
            }, i.options.delay.show)
        }, t.prototype.leave = function(t) {
            var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
            if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout(function() {
                i.hoverState == "out" && i.hide()
            }, i.options.delay.hide)
        }, t.prototype.show = function() {
            var c = n.Event("show.bs." + this.type),
                l, p, h;
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
                var u = this,
                    r = this.tip(),
                    a = this.getUID(this.type);
                this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
                var i = typeof this.options.placement == "function" ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                    v = /\s?auto?\s?/i,
                    y = v.test(i);
                y && (i = i.replace(v, "") || "top"), r.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(i).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
                var f = this.getPosition(),
                    o = r[0].offsetWidth,
                    s = r[0].offsetHeight;
                if (y) {
                    var w = i,
                        b = this.options.container ? n(this.options.container) : this.$element.parent(),
                        e = this.getPosition(b);
                    i = i == "bottom" && f.bottom + s > e.bottom ? "top" : i == "top" && f.top - s < e.top ? "bottom" : i == "right" && f.right + o > e.width ? "left" : i == "left" && f.left - o < e.left ? "right" : i, r.removeClass(w).addClass(i)
                }
                p = this.getCalculatedOffset(i, f, o, s), this.applyPlacement(p, i), h = function() {
                    var n = u.hoverState;
                    u.$element.trigger("shown.bs." + u.type), u.hoverState = null, n == "out" && u.leave(u)
                }, n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
            }
        }, t.prototype.applyPlacement = function(t, i) {
            var r = this.tip(),
                l = r[0].offsetWidth,
                e = r[0].offsetHeight,
                o = parseInt(r.css("margin-top"), 10),
                s = parseInt(r.css("margin-left"), 10),
                h, f, u;
            isNaN(o) && (o = 0), isNaN(s) && (s = 0), t.top = t.top + o, t.left = t.left + s, n.offset.setOffset(r[0], n.extend({
                using: function(n) {
                    r.css({
                        top: Math.round(n.top),
                        left: Math.round(n.left)
                    })
                }
            }, t), 0), r.addClass("in"), h = r[0].offsetWidth, f = r[0].offsetHeight, i == "top" && f != e && (t.top = t.top + e - f), u = this.getViewportAdjustedDelta(i, t, h, f), u.left ? t.left += u.left : t.top += u.top;
            var c = /top|bottom/.test(i),
                a = c ? u.left * 2 - l + h : u.top * 2 - e + f,
                v = c ? "offsetWidth" : "offsetHeight";
            r.offset(t), this.replaceArrow(a, r[0][v], c)
        }, t.prototype.replaceArrow = function(n, t, i) {
            this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
        }, t.prototype.setContent = function() {
            var n = this.tip(),
                t = this.getTitle();
            n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), n.removeClass("fade in top bottom left right")
        }, t.prototype.hide = function(i) {
            function e() {
                r.hoverState != "in" && u.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), i && i()
            }
            var r = this,
                u = this.tip(),
                f = n.Event("hide.bs." + this.type);
            if (this.$element.trigger(f), !f.isDefaultPrevented()) return u.removeClass("in"), n.support.transition && this.$tip.hasClass("fade") ? u.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e(), this.hoverState = null, this
        }, t.prototype.fixTitle = function() {
            var n = this.$element;
            (n.attr("title") || typeof n.attr("data-original-title") != "string") && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
        }, t.prototype.hasContent = function() {
            return this.getTitle()
        }, t.prototype.getPosition = function(t) {
            t = t || this.$element;
            var u = t[0],
                r = u.tagName == "BODY",
                i = u.getBoundingClientRect();
            i.width == null && (i = n.extend({}, i, {
                width: i.right - i.left,
                height: i.bottom - i.top
            }));
            var f = r ? {
                    top: 0,
                    left: 0
                } : t.offset(),
                e = {
                    scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
                },
                o = r ? {
                    width: n(window).width(),
                    height: n(window).height()
                } : null;
            return n.extend({}, i, e, o, f)
        }, t.prototype.getCalculatedOffset = function(n, t, i, r) {
            return n == "bottom" ? {
                top: t.top + t.height,
                left: t.left + t.width / 2 - i / 2
            } : n == "top" ? {
                top: t.top - r,
                left: t.left + t.width / 2 - i / 2
            } : n == "left" ? {
                top: t.top + t.height / 2 - r / 2,
                left: t.left - i
            } : {
                top: t.top + t.height / 2 - r / 2,
                left: t.left + t.width
            }
        }, t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
            var f = {
                    top: 0,
                    left: 0
                },
                e, u, o, s, h, c;
            return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.width && (f.left = u.left + u.width - c)), f) : f
        }, t.prototype.getTitle = function() {
            var i, t = this.$element,
                n = this.options;
            return i = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title)
        }, t.prototype.getUID = function(n) {
            do n += ~~(Math.random() * 1e6); while (document.getElementById(n));
            return n
        }, t.prototype.tip = function() {
            return this.$tip = this.$tip || n(this.options.template)
        }, t.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, t.prototype.enable = function() {
            this.enabled = !0
        }, t.prototype.disable = function() {
            this.enabled = !1
        }, t.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, t.prototype.toggle = function(t) {
            var i = this;
            t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }, t.prototype.destroy = function() {
            var n = this;
            clearTimeout(this.timeout), this.hide(function() {
                n.$element.off("." + n.type).removeData("bs." + n.type)
            })
        }, i = n.fn.tooltip, n.fn.tooltip = r, n.fn.tooltip.Constructor = t, n.fn.tooltip.noConflict = function() {
            return n.fn.tooltip = i, this
        }
    }(jQuery), + function(n) {
        "use strict";

        function r(i) {
            return this.each(function() {
                var u = n(this),
                    r = u.data("bs.popover"),
                    f = typeof i == "object" && i;
                (r || i != "destroy") && (r || u.data("bs.popover", r = new t(this, f)), typeof i == "string" && r[i]())
            })
        }
        var t = function(n, t) {
                this.init("popover", n, t)
            },
            i;
        if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
        t.VERSION = "3.3.2", t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
            return t.DEFAULTS
        }, t.prototype.setContent = function() {
            var n = this.tip(),
                i = this.getTitle(),
                t = this.getContent();
            n.find(".popover-title")[this.options.html ? "html" : "text"](i), n.find(".popover-content").children().detach().end()[this.options.html ? typeof t == "string" ? "html" : "append" : "text"](t), n.removeClass("fade top bottom left right in"), n.find(".popover-title").html() || n.find(".popover-title").hide()
        }, t.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, t.prototype.getContent = function() {
            var t = this.$element,
                n = this.options;
            return t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content)
        }, t.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }, t.prototype.tip = function() {
            return this.$tip || (this.$tip = n(this.options.template)), this.$tip
        }, i = n.fn.popover, n.fn.popover = r, n.fn.popover.Constructor = t, n.fn.popover.noConflict = function() {
            return n.fn.popover = i, this
        }
    }(jQuery), window.scrollReveal = function(n) {
        "use strict";

        function u(f) {
            if (!(this instanceof u)) return new u(f);
            if (t = this, t.elems = {}, t.serial = 1, t.blocked = !1, t.config = i(t.defaults, f), t.isMobile() && !t.config.mobile || !t.isSupported()) {
                t.destroy();
                return
            }
            t.config.viewport === n.document.documentElement ? (n.addEventListener("scroll", r, !1), n.addEventListener("resize", r, !1)) : t.config.viewport.addEventListener("scroll", r, !1), t.init(!0)
        }
        var f, i, r, t;
        return u.prototype = {
            defaults: {
                enter: "bottom",
                move: "8px",
                over: "0.6s",
                wait: "0s",
                easing: "ease",
                scale: {
                    direction: "up",
                    power: "5%"
                },
                rotate: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                opacity: 0,
                mobile: !1,
                reset: !1,
                viewport: n.document.documentElement,
                delay: "once",
                vFactor: .6,
                complete: function() {}
            },
            init: function(n) {
                var r, i, u;
                u = Array.prototype.slice.call(t.config.viewport.querySelectorAll("[data-sr]")), u.forEach(function(n) {
                    r = t.serial++, i = t.elems[r] = {
                        domEl: n
                    }, i.config = t.configFactory(i), i.styles = t.styleFactory(i), i.seen = !1, n.removeAttribute("data-sr"), n.setAttribute("style", i.styles.inline + i.styles.initial)
                }), t.scrolled = t.scrollY(), t.animate(n)
            },
            animate: function(n) {
                function f(n) {
                    var i = t.elems[n];
                    setTimeout(function() {
                        i.domEl.setAttribute("style", i.styles.inline), i.config.complete(i.domEl), delete t.elems[n]
                    }, i.styles.duration)
                }
                var r, i, u;
                for (r in t.elems) t.elems.hasOwnProperty(r) && (i = t.elems[r], u = t.isElemInViewport(i), u ? (t.config.delay === "always" || t.config.delay === "onload" && n || t.config.delay === "once" && !i.seen ? i.domEl.setAttribute("style", i.styles.inline + i.styles.target + i.styles.transition) : i.domEl.setAttribute("style", i.styles.inline + i.styles.target + i.styles.reset), i.seen = !0, i.config.reset || i.animating || (i.animating = !0, f(r))) : !u && i.config.reset && i.domEl.setAttribute("style", i.styles.inline + i.styles.initial + i.styles.reset));
                t.blocked = !1
            },
            configFactory: function(n) {
                var r = {},
                    f = {},
                    u = n.domEl.getAttribute("data-sr").split(/[, ]+/);
                return u.forEach(function(n, t) {
                    switch (n) {
                        case "enter":
                            r.enter = u[t + 1];
                            break;
                        case "wait":
                            r.wait = u[t + 1];
                            break;
                        case "move":
                            r.move = u[t + 1];
                            break;
                        case "ease":
                            r.move = u[t + 1], r.ease = "ease";
                            break;
                        case "ease-in":
                            if (u[t + 1] == "up" || u[t + 1] == "down") {
                                r.scale.direction = u[t + 1], r.scale.power = u[t + 2], r.easing = "ease-in";
                                break
                            }
                            r.move = u[t + 1], r.easing = "ease-in";
                            break;
                        case "ease-in-out":
                            if (u[t + 1] == "up" || u[t + 1] == "down") {
                                r.scale.direction = u[t + 1], r.scale.power = u[t + 2], r.easing = "ease-in-out";
                                break
                            }
                            r.move = u[t + 1], r.easing = "ease-in-out";
                            break;
                        case "ease-out":
                            if (u[t + 1] == "up" || u[t + 1] == "down") {
                                r.scale.direction = u[t + 1], r.scale.power = u[t + 2], r.easing = "ease-out";
                                break
                            }
                            r.move = u[t + 1], r.easing = "ease-out";
                            break;
                        case "hustle":
                            if (u[t + 1] == "up" || u[t + 1] == "down") {
                                r.scale.direction = u[t + 1], r.scale.power = u[t + 2], r.easing = "cubic-bezier( 0.6, 0.2, 0.1, 1 )";
                                break
                            }
                            r.move = u[t + 1], r.easing = "cubic-bezier( 0.6, 0.2, 0.1, 1 )";
                            break;
                        case "over":
                            r.over = u[t + 1];
                            break;
                        case "flip":
                        case "pitch":
                            r.rotate = r.rotate || {}, r.rotate.x = u[t + 1];
                            break;
                        case "spin":
                        case "yaw":
                            r.rotate = r.rotate || {}, r.rotate.y = u[t + 1];
                            break;
                        case "roll":
                            r.rotate = r.rotate || {}, r.rotate.z = u[t + 1];
                            break;
                        case "reset":
                            r.reset = u[t - 1] == "no" ? !1 : !0;
                            break;
                        case "scale":
                            if (r.scale = {}, u[t + 1] == "up" || u[t + 1] == "down") {
                                r.scale.direction = u[t + 1], r.scale.power = u[t + 2];
                                break
                            }
                            r.scale.power = u[t + 1];
                            break;
                        case "vFactor":
                        case "vF":
                            r.vFactor = u[t + 1];
                            break;
                        case "opacity":
                            r.opacity = u[t + 1];
                            break;
                        default:
                            return
                    }
                }), f = i(f, t.config), f = i(f, r), f.enter === "top" || f.enter === "bottom" ? f.axis = "Y" : (f.enter === "left" || f.enter === "right") && (f.axis = "X"), (f.enter === "top" || f.enter === "left") && (f.move = "-" + f.move), f
            },
            styleFactory: function(n) {
                function o() {
                    parseInt(t.move) !== 0 && (i += " translate" + t.axis + "(" + t.move + ")", r += " translate" + t.axis + "(0)"), parseInt(t.scale.power) !== 0 && (t.scale.direction === "up" ? t.scale.value = 1 - parseFloat(t.scale.power) * .01 : t.scale.direction === "down" && (t.scale.value = 1 + parseFloat(t.scale.power) * .01), i += " scale(" + t.scale.value + ")", r += " scale(1)"), t.rotate.x && (i += " rotateX(" + t.rotate.x + ")", r += " rotateX(0)"), t.rotate.y && (i += " rotateY(" + t.rotate.y + ")", r += " rotateY(0)"), t.rotate.z && (i += " rotateZ(" + t.rotate.z + ")", r += " rotateZ(0)"), i += "; opacity: " + t.opacity + "; ", r += "; opacity: 1; "
                }
                var u, i, f, r, e, t = n.config,
                    s = (parseFloat(t.over) + parseFloat(t.wait)) * 1e3;
                return u = n.domEl.getAttribute("style") ? n.domEl.getAttribute("style") + "; visibility: visible; " : "visibility: visible; ", e = "-webkit-transition: -webkit-transform " + t.over + " " + t.easing + " " + t.wait + ", opacity " + t.over + " " + t.easing + " " + t.wait + "; transition: transform " + t.over + " " + t.easing + " " + t.wait + ", opacity " + t.over + " " + t.easing + " " + t.wait + "; -webkit-perspective: 1000;-webkit-backface-visibility: hidden;", f = "-webkit-transition: -webkit-transform " + t.over + " " + t.easing + " 0s, opacity " + t.over + " " + t.easing + " 0s; transition: transform " + t.over + " " + t.easing + " 0s, opacity " + t.over + " " + t.easing + " 0s; -webkit-perspective: 1000; -webkit-backface-visibility: hidden; ", i = "transform:", r = "transform:", o(), i += "-webkit-transform:", r += "-webkit-transform:", o(), {
                    transition: e,
                    initial: i,
                    target: r,
                    reset: f,
                    inline: u,
                    duration: s
                }
            },
            getViewportH: function() {
                var i = t.config.viewport.clientHeight,
                    r = n.innerHeight;
                return t.config.viewport === n.document.documentElement ? i < r ? r : i : i
            },
            scrollY: function() {
                return t.config.viewport === n.document.documentElement ? n.pageYOffset : t.config.viewport.scrollTop + t.config.viewport.offsetTop
            },
            getOffset: function(n) {
                var t = 0,
                    i = 0;
                do isNaN(n.offsetTop) || (t += n.offsetTop), isNaN(n.offsetLeft) || (i += n.offsetLeft); while (n = n.offsetParent);
                return {
                    top: t,
                    left: i
                }
            },
            isElemInViewport: function(i) {
                function o() {
                    var n = u + r * f,
                        i = e - r * f,
                        o = t.scrolled + t.getViewportH(),
                        s = t.scrolled;
                    return n < o && i > s
                }

                function s() {
                    var t = i.domEl,
                        r = t.currentStyle || n.getComputedStyle(t, null);
                    return r.position === "fixed"
                }
                var r = i.domEl.offsetHeight,
                    u = t.getOffset(i.domEl).top,
                    e = u + r,
                    f = i.config.vFactor || 0;
                return o() || s()
            },
            isMobile: function() {
                var t = navigator.userAgent || navigator.vendor || n.opera;
                return /(ipad|playbook|silk|android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) ? !0 : !1
            },
            isSupported: function() {
                for (var i = document.createElement("sensor"), r = "Webkit,Moz,O,".split(","), t = ("transition " + r.join("transition,")).split(","), n = 0; n < t.length; n++)
                    if (0) return !1;
                return !0
            },
            destroy: function() {
                var n = t.config.viewport,
                    i = Array.prototype.slice.call(n.querySelectorAll("[data-sr]"));
                i.forEach(function(n) {
                    n.removeAttribute("data-sr")
                })
            }
        }, r = function() {
            t.blocked || (t.blocked = !0, t.scrolled = t.scrollY(), f(function() {
                t.animate()
            }))
        }, i = function(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
            return n
        }, f = function() {
            return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || function(t) {
                n.setTimeout(t, 1e3 / 60)
            }
        }(), u
    }(window), ! function() {
        "use strict";

        function n(r) {
            if (!r) throw new Error("No options passed to Waypoint constructor");
            if (!r.element) throw new Error("No element option passed to Waypoint constructor");
            if (!r.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + i, this.options = n.Adapter.extend({}, n.defaults, r), this.element = this.options.element, this.adapter = new n.Adapter(this.element), this.callback = r.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = n.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = n.Context.findOrCreateByElement(this.options.context), n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), t[this.key] = this, i += 1
        }
        var i = 0,
            t = {};
        n.prototype.queueTrigger = function(n) {
            this.group.queueTrigger(this, n)
        }, n.prototype.trigger = function(n) {
            this.enabled && this.callback && this.callback.apply(this, n)
        }, n.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete t[this.key]
        }, n.prototype.disable = function() {
            return this.enabled = !1, this
        }, n.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, n.prototype.next = function() {
            return this.group.next(this)
        }, n.prototype.previous = function() {
            return this.group.previous(this)
        }, n.invokeAll = function(n) {
            var r = [],
                u, i, f;
            for (u in t) r.push(t[u]);
            for (i = 0, f = r.length; f > i; i++) r[i][n]()
        }, n.destroyAll = function() {
            n.invokeAll("destroy")
        }, n.disableAll = function() {
            n.invokeAll("disable")
        }, n.enableAll = function() {
            n.invokeAll("enable")
        }, n.refreshAll = function() {
            n.Context.refreshAll()
        }, n.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, n.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, n.adapters = [], n.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, n.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = n
    }(),
    function() {
        "use strict";

        function f(n) {
            window.setTimeout(n, 1e3 / 60)
        }

        function n(n) {
            this.element = n, this.Adapter = t.Adapter, this.adapter = new this.Adapter(n), this.key = "waypoint-context-" + r, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, n.waypointContextKey = this.key, i[n.waypointContextKey] = this, r += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var r = 0,
            i = {},
            t = window.Waypoint,
            u = window.onload;
        n.prototype.add = function(n) {
            var t = n.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][n.key] = n, this.refresh()
        }, n.prototype.checkEmpty = function() {
            var n = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical);
            n && t && (this.adapter.off(".waypoints"), delete i[this.key])
        }, n.prototype.createThrottledResizeHandler = function() {
            function i() {
                n.handleResize(), n.didResize = !1
            }
            var n = this;
            this.adapter.on("resize.waypoints", function() {
                n.didResize || (n.didResize = !0, t.requestAnimationFrame(i))
            })
        }, n.prototype.createThrottledScrollHandler = function() {
            function i() {
                n.handleScroll(), n.didScroll = !1
            }
            var n = this;
            this.adapter.on("scroll.waypoints", function() {
                (!n.didScroll || t.isTouch) && (n.didScroll = !0, t.requestAnimationFrame(i))
            })
        }, n.prototype.handleResize = function() {
            t.Context.refreshAll()
        }, n.prototype.handleScroll = function() {
            var u = {},
                i = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                },
                r, f, s;
            for (r in i) {
                var n = i[r],
                    h = n.newScroll > n.oldScroll,
                    c = h ? n.forward : n.backward;
                for (f in this.waypoints[r]) {
                    var t = this.waypoints[r][f],
                        e = n.oldScroll < t.triggerPoint,
                        o = n.newScroll >= t.triggerPoint,
                        l = e && o,
                        a = !e && !o;
                    (l || a) && (t.queueTrigger(c), u[t.group.id] = t.group)
                }
            }
            for (s in u) u[s].flushTriggers();
            this.oldScroll = {
                x: i.horizontal.newScroll,
                y: i.vertical.newScroll
            }
        }, n.prototype.innerHeight = function() {
            return this.element == this.element.window ? t.viewportHeight() : this.adapter.innerHeight()
        }, n.prototype.remove = function(n) {
            delete this.waypoints[n.axis][n.key], this.checkEmpty()
        }, n.prototype.innerWidth = function() {
            return this.element == this.element.window ? t.viewportWidth() : this.adapter.innerWidth()
        }, n.prototype.destroy = function() {
            var t = [],
                i, r, n, u;
            for (i in this.waypoints)
                for (r in this.waypoints[i]) t.push(this.waypoints[i][r]);
            for (n = 0, u = t.length; u > n; n++) t[n].destroy()
        }, n.prototype.refresh = function() {
            var e, u = this.element == this.element.window,
                y = this.adapter.offset(),
                r = {},
                f, t, v, b;
            this.handleScroll(), e = {
                horizontal: {
                    contextOffset: u ? 0 : y.left,
                    contextScroll: u ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: u ? 0 : y.top,
                    contextScroll: u ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (f in e) {
                t = e[f];
                for (v in this.waypoints[f]) {
                    var c, s, o, l, a, n = this.waypoints[f][v],
                        i = n.options.offset,
                        p = n.triggerPoint,
                        w = 0,
                        h = null == p;
                    n.element !== n.element.window && (w = n.adapter.offset()[t.offsetProp]), "function" == typeof i ? i = i.apply(n) : "string" == typeof i && (i = parseFloat(i), n.options.offset.indexOf("%") > -1 && (i = Math.ceil(t.contextDimension * i / 100))), c = t.contextScroll - t.contextOffset, n.triggerPoint = w + c - i, s = p < t.oldScroll, o = n.triggerPoint >= t.oldScroll, l = s && o, a = !s && !o, !h && l ? (n.queueTrigger(t.backward), r[n.group.id] = n.group) : !h && a ? (n.queueTrigger(t.forward), r[n.group.id] = n.group) : h && t.oldScroll >= n.triggerPoint && (n.queueTrigger(t.forward), r[n.group.id] = n.group)
                }
            }
            for (b in r) r[b].flushTriggers();
            return this
        }, n.findOrCreateByElement = function(t) {
            return n.findByElement(t) || new n(t)
        }, n.refreshAll = function() {
            for (var n in i) i[n].refresh()
        }, n.findByElement = function(n) {
            return i[n.waypointContextKey]
        }, window.onload = function() {
            u && u(), n.refreshAll()
        }, t.requestAnimationFrame = function(n) {
            var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || f;
            t.call(window, n)
        }, t.Context = n
    }(),
    function() {
        "use strict";

        function i(n, t) {
            return n.triggerPoint - t.triggerPoint
        }

        function u(n, t) {
            return t.triggerPoint - n.triggerPoint
        }

        function n(n) {
            this.name = n.name, this.axis = n.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), r[this.axis][this.name] = this
        }
        var r = {
                vertical: {},
                horizontal: {}
            },
            t = window.Waypoint;
        n.prototype.add = function(n) {
            this.waypoints.push(n)
        }, n.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, n.prototype.flushTriggers = function() {
            var n, t, e, r, o, f;
            for (n in this.triggerQueues)
                for (t = this.triggerQueues[n], e = "up" === n || "left" === n, t.sort(e ? u : i), r = 0, o = t.length; o > r; r += 1) f = t[r], (f.options.continuous || r === t.length - 1) && f.trigger([n]);
            this.clearTriggerQueues()
        }, n.prototype.next = function(n) {
            this.waypoints.sort(i);
            var r = t.Adapter.inArray(n, this.waypoints),
                u = r === this.waypoints.length - 1;
            return u ? null : this.waypoints[r + 1]
        }, n.prototype.previous = function(n) {
            this.waypoints.sort(i);
            var r = t.Adapter.inArray(n, this.waypoints);
            return r ? this.waypoints[r - 1] : null
        }, n.prototype.queueTrigger = function(n, t) {
            this.triggerQueues[t].push(n)
        }, n.prototype.remove = function(n) {
            var i = t.Adapter.inArray(n, this.waypoints);
            i > -1 && this.waypoints.splice(i, 1)
        }, n.prototype.first = function() {
            return this.waypoints[0]
        }, n.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, n.findOrCreate = function(t) {
            return r[t.axis][t.name] || new n(t)
        }, t.Group = n
    }(),
    function() {
        "use strict";

        function n(n) {
            this.$element = t(n)
        }
        var t = window.jQuery,
            i = window.Waypoint;
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, i) {
            n.prototype[i] = function() {
                var n = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, n)
            }
        }), t.each(["extend", "inArray", "isEmptyObject"], function(i, r) {
            n[r] = t[r]
        }), i.adapters.push({
            name: "jquery",
            Adapter: n
        }), i.Adapter = n
    }(),
    function() {
        "use strict";

        function n(n) {
            return function() {
                var r = [],
                    i = arguments[0];
                return n.isFunction(arguments[0]) && (i = n.extend({}, arguments[1]), i.handler = arguments[0]), this.each(function() {
                    var u = n.extend({}, i, {
                        element: this
                    });
                    "string" == typeof u.context && (u.context = n(this).closest(u.context)[0]), r.push(new t(u))
                }), r
            }
        }
        var t = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = n(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = n(window.Zepto))
    }(), ! function(n) {
        var t = function(t, i) {
            this.$element = n(t), this.options = n.extend({}, n.fn.loadMask.defaults, i), this.$maskElem = null, this.state = "hidden", this.showTimer = null, this.init()
        };
        t.prototype = {
            constructor: t,
            init: function() {
                this.$maskElem = n(this.options.templateHtml).appendTo(this.$element), this.$maskElem.addClass(this.options.theme);
                var t = this.$element.outerHeight();
                t < 100 ? this.$maskElem.addClass("loadMask-size-s") : t < 300 ? this.$maskElem.addClass("loadMask-size-m") : this.$maskElem.addClass("loadMask-size-l"), n(".loadMask-spinner", this.$maskElem).html(this.options.spinnerHtml), n(".loadMask-msg", this.$maskElem).text(this.options.message), this.$element.prop("tagName") !== "BODY" && this.$element.css("position") == "static" && this.$element.addClass("masked-relative")
            },
            show: function() {
                var n = this,
                    t = this.options.delay === undefined ? 0 : this.options.delay;
                n.state !== "showing" && n.state !== "visible" && (n.state = "showing", n.showTimer = setTimeout(function() {
                    n.state = "visible", n.$maskElem.addClass("on")
                }, t))
            },
            hide: function() {
                self.state !== "hidden" && (this.showTimer && (clearTimeout(this.showTimer), this.showTimer = null), this.state = "hidden", this.$maskElem.removeClass("on"))
            }
        }, n.fn.loadMask = function(i) {
            return this.each(function() {
                var r = n(this),
                    u = r.data("loadMask"),
                    f = n.extend({}, n.fn.loadMask.defaults, r.data(), typeof i == "object" && i);
                u || r.data("loadMask", u = new t(this, f)), typeof i == "string" && u[i]()
            })
        }, n.fn.loadMask.defaults = {
            theme: "dark",
            templateHtml: '<div class="loadMask-mask"><div class="loadMask-content"><div class="loadMask-indicator"><div class="loadMask-spinner"></div><div class="loadMask-msg"></div></div></div></div>',
            spinnerHtml: '<div class="loader-pulse"></div>',
            message: "Please wait..",
            delay: 300
        }, n.fn.loadMask.Constructor = t
    }(window.jQuery), "function" != typeof Object.create && (Object.create = function(n) {
        function t() {}
        return t.prototype = n, new t
    }),
    function(n, t, i) {
        var r = {
            init: function(t, i) {
                this.$elem = n(i), this.options = n.extend({}, n.fn.owlCarousel.options, this.$elem.data(), t), this.userOptions = t, this.loadContent()
            },
            loadContent: function() {
                function r(n) {
                    var i, r = "";
                    if ("function" == typeof t.options.jsonSuccess) t.options.jsonSuccess.apply(this, [n]);
                    else {
                        for (i in n.owl) n.owl.hasOwnProperty(i) && (r += n.owl[i].item);
                        t.$elem.html(r)
                    }
                    t.logIn()
                }
                var t = this,
                    i;
                "function" == typeof t.options.beforeInit && t.options.beforeInit.apply(this, [t.$elem]), "string" == typeof t.options.jsonPath ? (i = t.options.jsonPath, n.getJSON(i, r)) : t.logIn()
            },
            logIn: function() {
                this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({
                    opacity: 0
                }), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars()
            },
            setVars: function() {
                if (0 === this.$elem.children().length) return !1;
                this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), this.onStartup()
            },
            onStartup: function() {
                this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
            },
            eachMoveUpdate: function() {
                !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
            },
            updateVars: function() {
                "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
            },
            reload: function() {
                var n = this;
                t.setTimeout(function() {
                    n.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var n = this;
                if (!1 === n.$elem.is(":visible")) n.$elem.css({
                    opacity: 0
                }), t.clearInterval(n.autoPlayInterval), t.clearInterval(n.checkVisible);
                else return !1;
                n.checkVisible = t.setInterval(function() {
                    n.$elem.is(":visible") && (n.reload(), n.$elem.animate({
                        opacity: 1
                    }, 200), t.clearInterval(n.checkVisible))
                }, 500)
            },
            wrapItems: function() {
                this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block")
            },
            baseClass: function() {
                var n = this.$elem.hasClass(this.options.baseClass),
                    t = this.$elem.hasClass(this.options.theme);
                n || this.$elem.addClass(this.options.baseClass), t || this.$elem.addClass(this.options.theme)
            },
            updateItems: function() {
                var t, i;
                if (!1 === this.options.responsive) return !1;
                if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
                if (t = n(this.options.responsiveBaseWidth).width(), t > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)
                    for (this.options.itemsCustom.sort(function(n, t) {
                            return n[0] - t[0]
                        }), i = 0; i < this.options.itemsCustom.length; i += 1) this.options.itemsCustom[i][0] <= t && (this.options.items = this.options.itemsCustom[i][1]);
                else t <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), t <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), t <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), t <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), t <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
                this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
            },
            response: function() {
                var i = this,
                    u, r;
                if (!0 !== i.options.responsive) return !1;
                r = n(t).width(), i.resizer = function() {
                    n(t).width() !== r && (!1 !== i.options.autoPlay && t.clearInterval(i.autoPlayInterval), t.clearTimeout(u), u = t.setTimeout(function() {
                        r = n(t).width(), i.updateVars()
                    }, i.options.responsiveRefreshRate))
                }, n(t).resize(i.resizer)
            },
            updatePosition: function() {
                this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
            },
            appendItemsSizes: function() {
                var t = this,
                    i = 0,
                    r = t.itemsAmount - t.options.items;
                t.$owlItems.each(function(u) {
                    var f = n(this);
                    f.css({
                        width: t.itemWidth
                    }).data("owl-item", Number(u)), (0 == u % t.options.items || u === r) && (u > r || (i += 1)), f.data("owl-roundPages", i)
                })
            },
            appendWrapperSizes: function() {
                this.$owlWrapper.css({
                    width: this.$owlItems.length * this.itemWidth * 2,
                    left: 0
                }), this.appendItemsSizes()
            },
            calculateAll: function() {
                this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
            },
            calculateWidth: function() {
                this.itemWidth = Math.round(this.$elem.width() / this.options.items)
            },
            max: function() {
                var n = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
                return this.options.items > this.itemsAmount ? this.maximumPixels = n = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = n), n
            },
            min: function() {
                return 0
            },
            loops: function() {
                var r = 0,
                    u = 0,
                    t, i;
                for (this.positionsInArray = [0], this.pagesInArray = [], t = 0; t < this.itemsAmount; t += 1) u += this.itemWidth, this.positionsInArray.push(-u), !0 === this.options.scrollPerPage && (i = n(this.$owlItems[t]), i = i.data("owl-roundPages"), i !== r && (this.pagesInArray[r] = this.positionsInArray[t], r = i))
            },
            buildControls: function() {
                (!0 === this.options.navigation || !0 === this.options.pagination) && (this.owlControls = n('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons()
            },
            buildButtons: function() {
                var t = this,
                    i = n('<div class="owl-buttons"/>');
                t.owlControls.append(i), t.buttonPrev = n("<div/>", {
                    "class": "owl-prev",
                    html: t.options.navigationText[0] || ""
                }), t.buttonNext = n("<div/>", {
                    "class": "owl-next",
                    html: t.options.navigationText[1] || ""
                }), i.append(t.buttonPrev).append(t.buttonNext);
                i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(n) {
                    n.preventDefault()
                });
                i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(i) {
                    i.preventDefault(), n(this).hasClass("owl-next") ? t.next() : t.prev()
                })
            },
            buildPagination: function() {
                var t = this;
                t.paginationWrapper = n('<div class="owl-pagination"/>'), t.owlControls.append(t.paginationWrapper);
                t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(i) {
                    i.preventDefault(), Number(n(this).data("owl-page")) !== t.currentItem && t.goTo(Number(n(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var r, u, f, t, i, e;
                if (!1 === this.options.pagination) return !1;
                for (this.paginationWrapper.html(""), r = 0, u = this.itemsAmount - this.itemsAmount % this.options.items, t = 0; t < this.itemsAmount; t += 1) 0 == t % this.options.items && (r += 1, u === t && (f = this.itemsAmount - this.options.items), i = n("<div/>", {
                    "class": "owl-page"
                }), e = n("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? r : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), i.append(e), i.data("owl-page", u === t ? f : t), i.data("owl-roundPages", r), this.paginationWrapper.append(i));
                this.checkPagination()
            },
            checkPagination: function() {
                var t = this;
                if (!1 === t.options.pagination) return !1;
                t.paginationWrapper.find(".owl-page").each(function() {
                    n(this).data("owl-roundPages") === n(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), n(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                if (!1 === this.options.navigation) return !1;
                !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
            },
            updateControls: function() {
                this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
            },
            destroyControls: function() {
                this.owlControls && this.owlControls.remove()
            },
            next: function(n) {
                if (this.isTransition) return !1;
                if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                    if (!0 === this.options.rewindNav) this.currentItem = 0, n = "rewind";
                    else return this.currentItem = this.maximumItem, !1;
                this.goTo(this.currentItem, n)
            },
            prev: function(n) {
                if (this.isTransition) return !1;
                if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem)
                    if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, n = "rewind";
                    else return this.currentItem = 0, !1;
                this.goTo(this.currentItem, n)
            },
            goTo: function(n, i, r) {
                var u = this;
                if (u.isTransition) return !1;
                if ("function" == typeof u.options.beforeMove && u.options.beforeMove.apply(this, [u.$elem]), n >= u.maximumItem ? n = u.maximumItem : 0 >= n && (n = 0), u.currentItem = u.owl.currentItem = n, !1 !== u.options.transitionStyle && "drag" !== r && 1 === u.options.items && !0 === u.browser.support3d) return u.swapSpeed(0), !0 === u.browser.support3d ? u.transition3d(u.positionsInArray[n]) : u.css2slide(u.positionsInArray[n], 1), u.afterGo(), u.singleItemTransition(), !1;
                n = u.positionsInArray[n], !0 === u.browser.support3d ? (u.isCss3Finish = !1, !0 === i ? (u.swapSpeed("paginationSpeed"), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.paginationSpeed)) : "rewind" === i ? (u.swapSpeed(u.options.rewindSpeed), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.rewindSpeed)) : (u.swapSpeed("slideSpeed"), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.slideSpeed)), u.transition3d(n)) : !0 === i ? u.css2slide(n, u.options.paginationSpeed) : "rewind" === i ? u.css2slide(n, u.options.rewindSpeed) : u.css2slide(n, u.options.slideSpeed), u.afterGo()
            },
            jumpTo: function(n) {
                "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), n >= this.maximumItem || -1 === n ? n = this.maximumItem : 0 >= n && (n = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[n]) : this.css2slide(this.positionsInArray[n], 1), this.currentItem = this.owl.currentItem = n, this.afterGo()
            },
            afterGo: function() {
                this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
            },
            stop: function() {
                this.apStatus = "stop", t.clearInterval(this.autoPlayInterval)
            },
            checkAp: function() {
                "stop" !== this.apStatus && this.play()
            },
            play: function() {
                var n = this;
                if (n.apStatus = "play", !1 === n.options.autoPlay) return !1;
                t.clearInterval(n.autoPlayInterval), n.autoPlayInterval = t.setInterval(function() {
                    n.next(!0)
                }, n.options.autoPlay)
            },
            swapSpeed: function(n) {
                "slideSpeed" === n ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === n ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof n && this.$owlWrapper.css(this.addCssSpeed(n))
            },
            addCssSpeed: function(n) {
                return {
                    "-webkit-transition": "all " + n + "ms ease",
                    "-moz-transition": "all " + n + "ms ease",
                    "-o-transition": "all " + n + "ms ease",
                    transition: "all " + n + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(n) {
                return {
                    "-webkit-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + n + "px, 0px, 0px)",
                    transform: "translate3d(" + n + "px, 0px,0px)"
                }
            },
            transition3d: function(n) {
                this.$owlWrapper.css(this.doTranslate(n))
            },
            css2move: function(n) {
                this.$owlWrapper.css({
                    left: n
                })
            },
            css2slide: function(n, t) {
                var i = this;
                i.isCssFinish = !1, i.$owlWrapper.stop(!0, !0).animate({
                    left: n
                }, {
                    duration: t || i.options.slideSpeed,
                    complete: function() {
                        i.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var n = i.createElement("div");
                n.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", n = n.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
                    support3d: null !== n && 1 === n.length,
                    isTouch: "ontouchstart" in t || t.navigator.msMaxTouchPoints
                }
            },
            moveEvents: function() {
                (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) && (this.gestures(), this.disabledEvents())
            },
            eventTypes: function() {
                var n = ["s", "e", "x"];
                this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? n = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? n = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (n = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = n[0], this.ev_types.move = n[1], this.ev_types.end = n[2]
            },
            disabledEvents: function() {
                this.$elem.on("dragstart.owl", function(n) {
                    n.preventDefault()
                });
                this.$elem.on("mousedown.disableTextSelect", function(t) {
                    return n(t.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function f(n) {
                    if (void 0 !== n.touches) return {
                        x: n.touches[0].pageX,
                        y: n.touches[0].pageY
                    };
                    if (void 0 === n.touches) {
                        if (void 0 !== n.pageX) return {
                            x: n.pageX,
                            y: n.pageY
                        };
                        if (void 0 === n.pageX) return {
                            x: n.clientX,
                            y: n.clientY
                        }
                    }
                }

                function e(t) {
                    "on" === t ? (n(i).on(r.ev_types.move, o), n(i).on(r.ev_types.end, s)) : "off" === t && (n(i).off(r.ev_types.move), n(i).off(r.ev_types.end))
                }

                function o(e) {
                    e = e.originalEvent || e || t.event, r.newPosX = f(e).x - u.offsetX, r.newPosY = f(e).y - u.offsetY, r.newRelativeX = r.newPosX - u.relativePos, "function" == typeof r.options.startDragging && !0 !== u.dragging && 0 !== r.newRelativeX && (u.dragging = !0, r.options.startDragging.apply(r, [r.$elem])), (8 < r.newRelativeX || -8 > r.newRelativeX) && !0 === r.browser.isTouch && (void 0 !== e.preventDefault ? e.preventDefault() : e.returnValue = !1, u.sliding = !0), (10 < r.newPosY || -10 > r.newPosY) && !1 === u.sliding && n(i).off("touchmove.owl"), r.newPosX = Math.max(Math.min(r.newPosX, r.newRelativeX / 5), r.maximumPixels + r.newRelativeX / 5), !0 === r.browser.support3d ? r.transition3d(r.newPosX) : r.css2move(r.newPosX)
                }

                function s(i) {
                    i = i.originalEvent || i || t.event;
                    var f;
                    i.target = i.target || i.srcElement, u.dragging = !1, !0 !== r.browser.isTouch && r.$owlWrapper.removeClass("grabbing"), r.dragDirection = r.owl.dragDirection = 0 > r.newRelativeX ? "left" : "right", 0 !== r.newRelativeX && (f = r.getNewPosition(), r.goTo(f, !1, "drag"), u.targetElement === i.target && !0 !== r.browser.isTouch && (n(i.target).on("click.disable", function(t) {
                        t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), n(t.target).off("click.disable")
                    }), i = n._data(i.target, "events").click, f = i.pop(), i.splice(0, 0, f))), e("off")
                }
                var r = this,
                    u = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                r.isCssFinish = !0;
                r.$elem.on(r.ev_types.start, ".owl-wrapper", function(i) {
                    i = i.originalEvent || i || t.event;
                    var o;
                    if (3 === i.which) return !1;
                    if (!(r.itemsAmount <= r.options.items)) {
                        if (!1 === r.isCssFinish && !r.options.dragBeforeAnimFinish || !1 === r.isCss3Finish && !r.options.dragBeforeAnimFinish) return !1;
                        !1 !== r.options.autoPlay && t.clearInterval(r.autoPlayInterval), !0 === r.browser.isTouch || r.$owlWrapper.hasClass("grabbing") || r.$owlWrapper.addClass("grabbing"), r.newPosX = 0, r.newRelativeX = 0, n(this).css(r.removeTransition()), o = n(this).position(), u.relativePos = o.left, u.offsetX = f(i).x - o.left, u.offsetY = f(i).y - o.top, e("on"), u.sliding = !1, u.targetElement = i.target || i.srcElement
                    }
                })
            },
            getNewPosition: function() {
                var n = this.closestItem();
                return n > this.maximumItem ? n = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = n = 0), n
            },
            closestItem: function() {
                var t = this,
                    i = !0 === t.options.scrollPerPage ? t.pagesInArray : t.positionsInArray,
                    u = t.newPosX,
                    r = null;
                return n.each(i, function(f, e) {
                    u - t.itemWidth / 20 > i[f + 1] && u - t.itemWidth / 20 < e && "left" === t.moveDirection() ? (r = e, t.currentItem = !0 === t.options.scrollPerPage ? n.inArray(r, t.positionsInArray) : f) : u + t.itemWidth / 20 < e && u + t.itemWidth / 20 > (i[f + 1] || i[f] - t.itemWidth) && "right" === t.moveDirection() && (!0 === t.options.scrollPerPage ? (r = i[f + 1] || i[i.length - 1], t.currentItem = n.inArray(r, t.positionsInArray)) : (r = i[f + 1], t.currentItem = f + 1))
                }), t.currentItem
            },
            moveDirection: function() {
                var n;
                return 0 > this.newRelativeX ? (n = "right", this.playDirection = "next") : (n = "left", this.playDirection = "prev"), n
            },
            customEvents: function() {
                var n = this;
                n.$elem.on("owl.next", function() {
                    n.next()
                });
                n.$elem.on("owl.prev", function() {
                    n.prev()
                });
                n.$elem.on("owl.play", function(t, i) {
                    n.options.autoPlay = i, n.play(), n.hoverStatus = "play"
                });
                n.$elem.on("owl.stop", function() {
                    n.stop(), n.hoverStatus = "stop"
                });
                n.$elem.on("owl.goTo", function(t, i) {
                    n.goTo(i)
                });
                n.$elem.on("owl.jumpTo", function(t, i) {
                    n.jumpTo(i)
                })
            },
            stopOnHover: function() {
                var n = this;
                !0 === n.options.stopOnHover && !0 !== n.browser.isTouch && !1 !== n.options.autoPlay && (n.$elem.on("mouseover", function() {
                    n.stop()
                }), n.$elem.on("mouseout", function() {
                    "stop" !== n.hoverStatus && n.play()
                }))
            },
            lazyLoad: function() {
                var r, t, u, i, f;
                if (!1 === this.options.lazyLoad) return !1;
                for (r = 0; r < this.itemsAmount; r += 1) t = n(this.$owlItems[r]), "loaded" !== t.data("owl-loaded") && (u = t.data("owl-item"), i = t.find(".lazyOwl"), "string" != typeof i.data("src") ? t.data("owl-loaded", "loaded") : (void 0 === t.data("owl-loaded") && (i.hide(), t.addClass("loading").data("owl-loaded", "checked")), (f = !0 === this.options.lazyFollow ? u >= this.currentItem : !0) && u < this.currentItem + this.options.items && i.length && this.lazyPreload(t, i)))
            },
            lazyPreload: function(n, i) {
                function u() {
                    n.data("owl-loaded", "loaded").removeClass("loading"), i.removeAttr("data-src"), "fade" === r.options.lazyEffect ? i.fadeIn(400) : i.show(), "function" == typeof r.options.afterLazyLoad && r.options.afterLazyLoad.apply(this, [r.$elem])
                }

                function f() {
                    e += 1, r.completeImg(i.get(0)) || !0 === o ? u() : 100 >= e ? t.setTimeout(f, 100) : u()
                }
                var r = this,
                    e = 0,
                    o;
                "DIV" === i.prop("tagName") ? (i.css("background-image", "url(" + i.data("src") + ")"), o = !0) : i[0].src = i.data("src"), f()
            },
            autoHeight: function() {
                function u() {
                    var r = n(i.$owlItems[i.currentItem]).height();
                    i.wrapperOuter.css("height", r + "px"), i.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function() {
                        i.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function f() {
                    r += 1, i.completeImg(e.get(0)) ? u() : 100 >= r ? t.setTimeout(f, 100) : i.wrapperOuter.css("height", "")
                }
                var i = this,
                    e = n(i.$owlItems[i.currentItem]).find("img"),
                    r;
                void 0 !== e.get(0) ? (r = 0, f()) : u()
            },
            completeImg: function(n) {
                return !n.complete || "undefined" != typeof n.naturalWidth && 0 === n.naturalWidth ? !1 : !0
            },
            onVisibleItems: function() {
                var t;
                for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], t = this.currentItem; t < this.currentItem + this.options.items; t += 1) this.visibleItems.push(t), !0 === this.options.addClassActive && n(this.$owlItems[t]).addClass("active");
                this.owl.visibleItems = this.visibleItems
            },
            transitionTypes: function(n) {
                this.outClass = "owl-" + n + "-out", this.inClass = "owl-" + n + "-in"
            },
            singleItemTransition: function() {
                var n = this,
                    u = n.outClass,
                    f = n.inClass,
                    t = n.$owlItems.eq(n.currentItem),
                    i = n.$owlItems.eq(n.prevItem),
                    e = Math.abs(n.positionsInArray[n.currentItem]) + n.positionsInArray[n.prevItem],
                    r = Math.abs(n.positionsInArray[n.currentItem]) + n.itemWidth / 2;
                n.isTransition = !0, n.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": r + "px",
                    "-moz-perspective-origin": r + "px",
                    "perspective-origin": r + "px"
                });
                i.css({
                    position: "relative",
                    left: e + "px"
                }).addClass(u).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                    n.endPrev = !0, i.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), n.clearTransStyle(i, u)
                });
                t.addClass(f).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                    n.endCurrent = !0, t.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), n.clearTransStyle(t, f)
                })
            },
            clearTransStyle: function(n, t) {
                n.css({
                    position: "",
                    left: ""
                }).removeClass(t), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
            },
            owlStatus: function() {
                this.owl = {
                    userOptions: this.userOptions,
                    baseElement: this.$elem,
                    userItems: this.$userItems,
                    owlItems: this.$owlItems,
                    currentItem: this.currentItem,
                    prevItem: this.prevItem,
                    visibleItems: this.visibleItems,
                    isTouch: this.browser.isTouch,
                    browser: this.browser,
                    dragDirection: this.dragDirection
                }
            },
            clearEvents: function() {
                this.$elem.off(".owl owl mousedown.disableTextSelect"), n(i).off(".owl owl"), n(t).off("resize", this.resizer)
            },
            unWrap: function() {
                0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                this.stop(), t.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
            },
            reinit: function(t) {
                t = n.extend({}, this.userOptions, t), this.unWrap(), this.init(t, this.$elem)
            },
            addItem: function(n, t) {
                var i;
                if (!n) return !1;
                if (0 === this.$elem.children().length) return this.$elem.append(n), this.setVars(), !1;
                this.unWrap(), i = void 0 === t || -1 === t ? -1 : t, i >= this.$userItems.length || -1 === i ? this.$userItems.eq(-1).after(n) : this.$userItems.eq(i).before(n), this.setVars()
            },
            removeItem: function(n) {
                if (0 === this.$elem.children().length) return !1;
                n = void 0 === n || -1 === n ? -1 : n, this.unWrap(), this.$userItems.eq(n).remove(), this.setVars()
            }
        };
        n.fn.owlCarousel = function(t) {
            return this.each(function() {
                if (!0 === n(this).data("owl-init")) return !1;
                n(this).data("owl-init", !0);
                var i = Object.create(r);
                i.init(t, this), n.data(this, "owlCarousel", i)
            })
        }, n.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: t,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document), window.xibisdotcom = window.xibisdotcom || {}, window.xibisdotcom.app = function(n, t) {
        function i() {
            MBP.enableActive(), t("html").hasClass("lt-ie9") || n.sr || (n.sr = new scrollReveal), n.xibisdotcom.nav.init(), t("input, textarea").placeholder()
        }

        function r() {
            n.sr = new scrollReveal
        }

        function u(n) {
            n === undefined ? i() : r(n)
        }

        function f(n, i) {
            t("html, body").animate({
                scrollTop: n.offset().top
            }, i || 1200)
        }
        return {
            init: u,
            scrollTo: f
        }
    }(window, jQuery), window.xibisdotcom.nav = function() {
        function e() {
            n ? i() : h()
        }

        function h() {
            n || ($("html").addClass("nav-open"), n = !0)
        }

        function i() {
            n && ($("html").removeClass("nav-open"), n = !1)
        }

        function c() {
            if (!r) {
                u = $("#nav-toggle"), f = $("#nav-mask"), o();
                u.on("click", function(n) {
                    n.preventDefault(), e()
                });
                f.on("touchmove touchstart touchend MSPointerMove MSPointerDown MSPointerUp click", function(n) {
                    n.preventDefault(), i()
                });
                $(window).on("resize", function() {
                    o()
                });
                r = !0
            }
        }

        function o() {
            screen.width <= s ? t || ($("html").addClass("nav-slide"), t = !0) : t && ($("html").removeClass("nav-slide"), t = !1, i())
        }

        function l() {
            return n
        }
        var r = !1,
            u, f, n = !1,
            t = !1,
            s = 767;
        return {
            init: c,
            toggle: e,
            isOpen: l
        }
    }(),
    function(n) {
        window.MBP = window.MBP || {}, MBP.enableActive = function() {
            n.addEventListener && n.addEventListener("touchstart", function() {}, !1)
        }
    }(document), ! function(n) {
        var t = function(t, i) {
            this.$element = n(t), this.options = n.extend({}, n.fn.percentPie.defaults, i), this.drawn = !1, this.init()
        };
        t.prototype = {
            constructor: t,
            init: function() {
                var t = this,
                    i;
                if (n("html").hasClass("svg"))
                    if (t.options.delayDraw)
                        if (i = t.$element.closest(".carousel"), i.length == 0) t.$element.waypoint({
                            handler: function() {
                                this.destroy(), t.draw()
                            },
                            offset: "bottom-in-view"
                        });
                        else i.on("slid.bs.carousel", function(i) {
                            n.contains(i.relatedTarget, t.$element[0]) && t.draw()
                        });
                else t.draw()
            },
            draw: function() {
                function tt(n) {
                    var r = -l / 2,
                        c = 1,
                        e, a;
                    for (t.animation && (c = n), w[0].setAttribute("opacity", n), e = 0, a = o.length; e < a; e++) {
                        var v = c * o[e].value / g * l * 2,
                            s = r + v,
                            p = (s - r) % (l * 2) > l ? 1 : 0,
                            it = u + y(r) * i,
                            ut = f + h(r) * i,
                            rt = u + y(s) * i,
                            et = f + h(s) * i,
                            tt = u + y(r) * (i + t.lightPiesOffset),
                            nt = f + h(r) * (i + t.lightPiesOffset),
                            d = u + y(s) * (i + t.lightPiesOffset),
                            b = f + h(s) * (i + t.lightPiesOffset),
                            ft = ["M", it, ut, "A", i, i, 0, p, 1, rt, et, "L", u, f, "Z"],
                            ot = ["M", tt, nt, "A", i + t.lightPiesOffset, i + t.lightPiesOffset, 0, p, 1, d, b, "L", u, f, "Z"];
                        k[e][0].setAttribute("d", ft.join(" ")), r += v
                    }
                }

                function ut() {
                    t.animation ? d(et) : tt(1)
                }

                function et() {
                    a += nt, tt(ft(a)), a < 1 ? d(arguments.callee) : t.afterDrawed.call(e)
                }

                function ht(n) {
                    return Math.min.apply(null, n)
                }
                var r, it, p, s, nt, a;
                if (!this.drawn) {
                    var e = this.$element,
                        c = e.width(),
                        v = e.height(),
                        u = c / 2,
                        f = v / 2,
                        y = Math.cos,
                        h = Math.sin,
                        l = Math.PI,
                        t = this.options,
                        ot = {
                            linear: function(n) {
                                return n
                            },
                            easeInOutExpo: function(n) {
                                var t = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
                                return t > 1 ? 1 : t
                            }
                        },
                        d = function() {
                            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n) {
                                window.setTimeout(n, 1e3 / 60)
                            }
                        }(),
                        o = [{
                            value: t.theValue,
                            color: t.theValueColour
                        }, {
                            value: 100 - t.theValue,
                            color: "rgba(0,0,0,0)"
                        }],
                        rt = n('<svg width="' + c + '" height="' + v + '" viewBox="0 0 ' + c + " " + v + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>').appendTo(e),
                        b = [],
                        k = [],
                        ft = ot[t.animationEasing],
                        i = ht([v / 2, c / 2]) - t.edgeOffset,
                        g = 0,
                        ct = function() {
                            var r = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
                                e = n(r).appendTo(rt);
                            r.setAttribute("cx", u), r.setAttribute("cy", f), r.setAttribute("r", i + t.baseOffset), r.setAttribute("stroke-width", t.baseStrokeWidth), r.setAttribute("stroke", t.baseStrokeColour), r.setAttribute("fill", t.baseColor)
                        }(),
                        st = document.createElementNS("http://www.w3.org/2000/svg", "g"),
                        w = n(st).appendTo(rt);
                    for (w[0].setAttribute("opacity", 0), r = 0, it = o.length; r < it; r++) g += o[r].value, p = document.createElementNS("http://www.w3.org/2000/svg", "g"), p.setAttribute("data-order", r), p.setAttribute("class", t.pieSegmentGroupClass), b[r] = n(p).appendTo(w), s = document.createElementNS("http://www.w3.org/2000/svg", "path"), s.setAttribute("stroke-miterlimit", 2), s.setAttribute("fill", o[r].color), s.setAttribute("class", t.pieSegmentClass), k[r] = n(s).appendTo(b[r]);
                    t.beforeDraw.call(e), ut(), this.drawn = !0, nt = t.animation ? 1 / t.animationSteps : 1, a = t.animation ? 0 : 1
                }
            }
        }, n.fn.percentPie = function(i) {
            return this.each(function() {
                var r = n(this),
                    u = r.data("percentPie"),
                    f = n.extend({}, n.fn.percentPie.defaults, r.data(), typeof i == "object" && i);
                u || r.data("percentPie", u = new t(this, f)), typeof i == "string" && u[i]()
            })
        }, n.fn.percentPie.defaults = {
            delayDraw: !1,
            theValue: 75,
            theValueColour: "red",
            baseColor: "#fff",
            baseOffset: 0,
            edgeOffset: 3,
            baseStrokeWidth: 0,
            baseStrokeColour: "#fff",
            pieSegmentGroupClass: "pieSegmentGroup",
            pieSegmentClass: "pieSegment",
            lightPiesOffset: 12,
            lightPiesOpacity: 0,
            lightPieClass: "lightPie",
            animation: !0,
            animationSteps: 90,
            animationEasing: "easeInOutExpo",
            beforeDraw: function() {},
            afterDrawed: function() {}
        }, n.fn.percentPie.Constructor = t
    }(window.jQuery)
