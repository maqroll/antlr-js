! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).antlr4Autosuggest = t()
    }
}(function() {
    return function() {
        return function t(e, n, s) {
            function r(o, a) {
                if (!n[o]) {
                    if (!e[o]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(o, !0);
                        if (i) return i(o, !0);
                        var c = new Error("Cannot find module '" + o + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var u = n[o] = {
                        exports: {}
                    };
                    e[o][0].call(u.exports, function(t) {
                        return r(e[o][1][t] || t)
                    }, u, u.exports, t, e, n, s)
                }
                return n[o].exports
            }
            for (var i = "function" == typeof require && require, o = 0; o < s.length; o++) r(s[o]);
            return r
        }
    }()({
        1: [function(t, e, n) {}, {}],
        2: [function(t, e, n) {
            var s, r, i = e.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function l(t) {
                if (s === setTimeout) return setTimeout(t, 0);
                if ((s === o || !s) && setTimeout) return s = setTimeout, setTimeout(t, 0);
                try {
                    return s(t, 0)
                } catch (e) {
                    try {
                        return s.call(null, t, 0)
                    } catch (e) {
                        return s.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    s = "function" == typeof setTimeout ? setTimeout : o
                } catch (t) {
                    s = o
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (t) {
                    r = a
                }
            }();
            var c, u = [],
                h = !1,
                d = -1;

            function p() {
                h && c && (h = !1, c.length ? u = c.concat(u) : d = -1, u.length && f())
            }

            function f() {
                if (!h) {
                    var t = l(p);
                    h = !0;
                    for (var e = u.length; e;) {
                        for (c = u, u = []; ++d < e;) c && c[d].run();
                        d = -1, e = u.length
                    }
                    c = null, h = !1,
                        function(t) {
                            if (r === clearTimeout) return clearTimeout(t);
                            if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                            try {
                                r(t)
                            } catch (e) {
                                try {
                                    return r.call(null, t)
                                } catch (e) {
                                    return r.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function g(t, e) {
                this.fun = t, this.array = e
            }

            function T() {}
            i.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                u.push(new g(t, e)), 1 !== u.length || h || l(f)
            }, g.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = T, i.addListener = T, i.once = T, i.off = T, i.removeListener = T, i.removeAllListeners = T, i.emit = T, i.prependListener = T, i.prependOnceListener = T, i.listeners = function(t) {
                return []
            }, i.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        }, {}],
        3: [function(t, e, n) {
            var s, r;
            s = "undefined" != typeof self ? self : this, r = function() {
                return function(t) {
                    var e = {};

                    function n(s) {
                        if (e[s]) return e[s].exports;
                        var r = e[s] = {
                            i: s,
                            l: !1,
                            exports: {}
                        };
                        return t[s].call(r.exports, r, r.exports, n), r.l = !0, r.exports
                    }
                    return n.m = t, n.c = e, n.d = function(t, e, s) {
                        n.o(t, e) || Object.defineProperty(t, e, {
                            configurable: !1,
                            enumerable: !0,
                            get: s
                        })
                    }, n.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return n.d(e, "a", e), e
                    }, n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, n.p = "", n(n.s = 2)
                }([function(e, n) {
                    e.exports = t("debug")
                }, function(t, e, n) {
                    "use strict";
                    e.ATOM_TRANSITION = 5, e.SET_TRANSITION = 7
                }, function(t, e, n) {
                    "use strict";
                    var s = n(3),
                        r = n(4),
                        i = n(0)("autosuggest"),
                        o = n(1);

                    function a(t, e) {
                        return this._lexerAndParserFactory = t, this._input = e, this._inputTokens = [], this._untokenizedText = "", this._parserAtn = null, this._parserRuleNames = [], this._indent = "", this._collectedSuggestions = [], this._casePreference = "BOTH", this._parserStateToTokenListIndexWhereLastVisited = new Map, this
                    }
                    var l = function(t) {
                        return t.constructor.name + "->" + t.target
                    };
                    a.prototype.constructor = a, a.prototype.suggest = function() {
                        return this._tokenizeInput(), this._storeParserAtnAndRuleNames(), this._runParserAtnAndCollectSuggestions(), this._collectedSuggestions
                    }, a.prototype.setCasePreference = function(t) {
                        this._casePreference = t
                    }, a.prototype._tokenizeInput = function() {
                        var t = this._createLexerWithUntokenizedTextDetection().getAllTokens();
                        this._inputTokens = this._filterOutNonDefaultChannels(t), i("TOKENS FOUND IN FIRST PASS:");
                        var e = !0,
                            n = !1,
                            s = void 0;
                        try {
                            for (var r, o = this._inputTokens[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                                var a = r.value;
                                i("" + a)
                            }
                        } catch (t) {
                            n = !0, s = t
                        } finally {
                            try {
                                !e && o.return && o.return()
                            } finally {
                                if (n) throw s
                            }
                        }
                        i("UNTOKENIZED: " + this._untokenizedText)
                    }, a.prototype._filterOutNonDefaultChannels = function(t) {
                        return t.filter(function(t) {
                            return 0 === t.channel
                        })
                    }, a.prototype._createLexerWithUntokenizedTextDetection = function() {
                        var t = this._createDefaultLexer();
                        t.removeErrorListeners();
                        var e = this,
                            n = Object.create(s.error.ErrorListener);
                        return n.syntaxError = function(t, n, s, r, i, o) {
                            e._untokenizedText = e._input.substring(r)
                        }, t.addErrorListener(n), t
                    }, a.prototype._createDefaultLexer = function() {
                        return this._createLexer(this._input)
                    }, a.prototype._createLexer = function(t) {
                        var e = new s.InputStream(t);
                        return this._lexerAndParserFactory.createLexer(e)
                    }, a.prototype._storeParserAtnAndRuleNames = function() {
                        var t = new s.CommonTokenStream(this._createDefaultLexer()),
                            e = this._lexerAndParserFactory.createParser(t);
                        i("Parser rule names: " + e.ruleNames.join(", ")), this._parserAtn = e.atn, this._parserRuleNames = e.ruleNames
                    }, a.prototype._runParserAtnAndCollectSuggestions = function() {
                        var t = this._parserAtn.states[0];
                        this._parseAndCollectTokenSuggestions(t, 0)
                    }, a.prototype._parseAndCollectTokenSuggestions = function(t, e) {
                        var n = this._indent;
                        if (this._indent += "  ", this._didVisitParserStateOnThisTokenIndex(t, e)) i(this._indent + "State " + t + " had already been visited while processing token " + e + ", backtracking to avoid infinite loop.");
                        else {
                            var s = this._setParserStateLastVisitedOnThisTokenIndex(t, e);
                            try {
                                if (i(this._indent + "State: " + t + " (type: " + t.constructor.name + ")"), !this._haveMoreTokens(e)) return void this._suggestNextTokensForParserState(t);
                                var r = !0,
                                    a = !1,
                                    l = void 0;
                                try {
                                    for (var c, u = t.transitions[Symbol.iterator](); !(r = (c = u.next()).done); r = !0) {
                                        var h = c.value;
                                        h.isEpsilon ? this._handleEpsilonTransition(h, e) : h.serializationType === o.ATOM_TRANSITION ? this._handleAtomicTransition(h, e) : this._handleSetTransition(h, e)
                                    }
                                } catch (t) {
                                    a = !0, l = t
                                } finally {
                                    try {
                                        !r && u.return && u.return()
                                    } finally {
                                        if (a) throw l
                                    }
                                }
                            } finally {
                                this._indent = n, this._setParserStateLastVisitedOnThisTokenIndex(t, s)
                            }
                        }
                    }, a.prototype._didVisitParserStateOnThisTokenIndex = function(t, e) {
                        return e === this._parserStateToTokenListIndexWhereLastVisited.get(t)
                    }, a.prototype._setParserStateLastVisitedOnThisTokenIndex = function(t, e) {
                        var n = this._parserStateToTokenListIndexWhereLastVisited.get(t);
                        return void 0 === e ? this._parserStateToTokenListIndexWhereLastVisited.delete(t) : this._parserStateToTokenListIndexWhereLastVisited.set(t, e), n
                    }, a.prototype._haveMoreTokens = function(t) {
                        return t < this._inputTokens.length
                    }, a.prototype._handleEpsilonTransition = function(t, e) {
                        this._parseAndCollectTokenSuggestions(t.target, e)
                    }, a.prototype._handleAtomicTransition = function(t, e) {
                        var n = this._inputTokens.slice(e, e + 1)[0].type;
                        t.label.contains(n) && this._parseAndCollectTokenSuggestions(t.target, e + 1)
                    }, a.prototype._handleSetTransition = function(t, e) {
                        var n = this._inputTokens.slice(e, e + 1)[0],
                            s = n.type,
                            r = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var c, u = t.label.intervals[Symbol.iterator](); !(r = (c = u.next()).done); r = !0)
                                for (var h = c.value, d = h.start; d <= h.stop; ++d) {
                                    d === s ? (i(this._indent + "Token " + n + " following transition: " + l(t) + " to " + d), this._parseAndCollectTokenSuggestions(t.target, e + 1)) : i(this._indent + "Token " + n + " NOT following transition: " + l(t) + " to " + d)
                                }
                        } catch (t) {
                            o = !0, a = t
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                    }, a.prototype._suggestNextTokensForParserState = function(t) {
                        var e = new Set;
                        this._fillParserTransitionLabels(t, e, new Set);
                        var n = new r.TokenSuggester(this._createDefaultLexer(), this._casePreference).suggest(e, this._untokenizedText);
                        this._parseSuggestionsAndAddValidOnes(t, n)
                    };
                    var c = function(t, e) {
                        return t.stateNumber + "->(" + e.serializationType + ") " + e.target.stateNumber
                    };

                    function u(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        return this._lexerCtr = t, this._parserCtr = e, this._casePreference = n, this._assertLexerHasAtn(), this
                    }
                    a.prototype._fillParserTransitionLabels = function(t, e, n) {
                        var s = !0,
                            r = !1,
                            a = void 0;
                        try {
                            for (var l, u = t.transitions[Symbol.iterator](); !(s = (l = u.next()).done); s = !0) {
                                var h = l.value,
                                    d = c(t, h);
                                if (n.has(d)) return void i(this._indent + "Not following visited " + d);
                                if (h.isEpsilon) {
                                    n.add(d);
                                    try {
                                        this._fillParserTransitionLabels(h.target, e, n)
                                    } finally {
                                        n.delete(d)
                                    }
                                } else if (h.serializationType === o.ATOM_TRANSITION) e.add(h.label_);
                                else if (h.serializationType === o.SET_TRANSITION) {
                                    var p = !0,
                                        f = !1,
                                        g = void 0;
                                    try {
                                        for (var T, x = h.label.intervals[Symbol.iterator](); !(p = (T = x.next()).done); p = !0)
                                            for (var S = T.value, m = S.start; m < S.stop; ++m) e.add(m)
                                    } catch (t) {
                                        f = !0, g = t
                                    } finally {
                                        try {
                                            !p && x.return && x.return()
                                        } finally {
                                            if (f) throw g
                                        }
                                    }
                                }
                            }
                        } catch (t) {
                            r = !0, a = t
                        } finally {
                            try {
                                !s && u.return && u.return()
                            } finally {
                                if (r) throw a
                            }
                        }
                    }, a.prototype._parseSuggestionsAndAddValidOnes = function(t, e) {
                        var n = !0,
                            s = !1,
                            r = void 0;
                        try {
                            for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                var l = o.value,
                                    c = this._getAddedToken(l);
                                this._isParseableWithAddedToken(t, c, new Set) ? this._collectedSuggestions.includes(l) || this._collectedSuggestions.push(l) : i("DROPPING non-parseable suggestion: " + l)
                            }
                        } catch (t) {
                            s = !0, r = t
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (s) throw r
                            }
                        }
                    }, a.prototype._getAddedToken = function(t) {
                        var e = this._input + t,
                            n = this._createLexer(e);
                        n.removeErrorListeners();
                        var s = this._filterOutNonDefaultChannels(n.getAllTokens());
                        return s.length <= this._inputTokens.length ? null : s[s.length - 1]
                    }, a.prototype._isParseableWithAddedToken = function(t, e, n) {
                        if (null == e) return !1;
                        var s = !1,
                            r = !0,
                            a = !1,
                            u = void 0;
                        try {
                            for (var h, d = t.transitions[Symbol.iterator](); !(r = (h = d.next()).done); r = !0) {
                                var p = h.value;
                                if (p.isEpsilon) {
                                    var f = c(t, p);
                                    if (n.has(f)) return void i(this._indent + "Not following visited " + f);
                                    n.add(f);
                                    try {
                                        this._isParseableWithAddedToken(p.target, e, n) && (s = !0)
                                    } finally {
                                        n.delete(f)
                                    }
                                } else if (p.serializationType === o.ATOM_TRANSITION) {
                                    p.label.first() === e.type && (s = !0)
                                } else {
                                    if (p.serializationType !== o.SET_TRANSITION) throw "Unexpected: " + l(p);
                                    var g = !0,
                                        T = !1,
                                        x = void 0;
                                    try {
                                        for (var S, m = p.label.intervals[Symbol.iterator](); !(g = (S = m.next()).done); g = !0)
                                            for (var C = S.value, E = C.start; E <= C.stop; ++E) E === e.type && (s = !0)
                                    } catch (t) {
                                        T = !0, x = t
                                    } finally {
                                        try {
                                            !g && m.return && m.return()
                                        } finally {
                                            if (T) throw x
                                        }
                                    }
                                }
                            }
                        } catch (t) {
                            a = !0, u = t
                        } finally {
                            try {
                                !r && d.return && d.return()
                            } finally {
                                if (a) throw u
                            }
                        }
                        return s
                    }, u.prototype.constructor = u, u.prototype.createLexer = function(t) {
                        return new this._lexerCtr(t)
                    }, u.prototype.createParser = function(t) {
                        return new this._parserCtr(t)
                    }, u.prototype.autosuggest = function(t) {
                        var e = new a(this, t);
                        return i("CASE_PREF : " + this._casePreference), this._casePreference && e.setCasePreference(this._casePreference), e.suggest()
                    }, u.prototype._assertLexerHasAtn = function() {
                        var t = new this._lexerCtr(null);
                        if (void 0 === t.atn) throw "Please use ANTLR4 version 4.7.1 or above.";
                        return t
                    };
                    t.exports.autosuggester = function(t, e) {
                        return new u(t, e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
                    }
                }, function(e, n) {
                    e.exports = t("antlr4")
                }, function(t, e, n) {
                    "use strict";
                    var s = n(0)("tokensuggester"),
                        r = n(1);

                    function i(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return this._lexer = t, this._suggestions = [], this._visitedLexerStates = [], this._origPartialToken = "", this._casePreference = e, this
                    }
                    i.prototype.constructor = i, i.prototype.suggest = function(t, e) {
                        s("Suggesting tokens for rule numbers: " + t), this._origPartialToken = e;
                        var n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                var l = o.value - 1,
                                    c = this._findLexerStateByRuleNumber(l);
                                this._suggest("", c, e)
                            }
                        } catch (t) {
                            r = !0, i = t
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        return this._suggestions
                    }, i.prototype._findLexerStateByRuleNumber = function(t) {
                        return this._lexer.atn.ruleToStartState.slice(t, t + 1)[0]
                    }, i.prototype._suggest = function(t, e, n) {
                        if (s("SUGGEST: tokenSoFar=" + t + " remainingText=" + n + " lexerState=" + e), !this._visitedLexerStates.includes(e.stateNumber)) {
                            this._visitedLexerStates.push(e.stateNumber);
                            try {
                                var r = t.length > 0,
                                    i = 0 === e.transitions.length;
                                r && i && this._addSuggestedToken(t);
                                var o = !0,
                                    a = !1,
                                    l = void 0;
                                try {
                                    for (var c, u = e.transitions[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
                                        var h = c.value;
                                        this._suggestViaLexerTransition(t, n, h)
                                    }
                                } catch (t) {
                                    a = !0, l = t
                                } finally {
                                    try {
                                        !o && u.return && u.return()
                                    } finally {
                                        if (a) throw l
                                    }
                                }
                            } finally {
                                this._visitedLexerStates.pop()
                            }
                        }
                    };
                    i.prototype._suggestViaLexerTransition = function(t, e, n) {
                        if (n.isEpsilon) this._suggest(t, n.target, e);
                        else if (n.serializationType === r.ATOM_TRANSITION) {
                            var i = this._getAddedTextFor(n);
                            "" === e || e.startsWith(i) ? (s("LEXER TOKEN: " + i + " remaining=" + e), this._suggestViaNonEpsilonLexerTransition(t, e, i, n.target)) : s("NONMATCHING LEXER TOKEN: " + i + " remaining=" + e)
                        } else if (n.serializationType === r.SET_TRANSITION) {
                            var o = function(t) {
                                    var e = [],
                                        n = !0,
                                        s = !1,
                                        r = void 0;
                                    try {
                                        for (var i, o = t.intervals[Symbol.iterator](); !(n = (i = o.next()).done); n = !0)
                                            for (var a = i.value, l = a.start; l < a.stop; ++l) e.push(String.fromCharCode(l))
                                    } catch (t) {
                                        s = !0, r = t
                                    } finally {
                                        try {
                                            !n && o.return && o.return()
                                        } finally {
                                            if (s) throw r
                                        }
                                    }
                                    return e
                                }(n.label),
                                a = !0,
                                l = !1,
                                c = void 0;
                            try {
                                for (var u, h = n.label.intervals[Symbol.iterator](); !(a = (u = h.next()).done); a = !0)
                                    for (var d = u.value, p = d.start; p <= d.stop; ++p) {
                                        var f = String.fromCodePoint(p),
                                            g = this._shouldIgnoreThisCase(f, o),
                                            T = String.fromCodePoint(p);
                                        g || "" !== e && !e.startsWith(T) || this._suggestViaNonEpsilonLexerTransition(t, e, T, n.target)
                                    }
                            } catch (t) {
                                l = !0, c = t
                            } finally {
                                try {
                                    !a && h.return && h.return()
                                } finally {
                                    if (l) throw c
                                }
                            }
                        }
                    }, i.prototype._suggestViaNonEpsilonLexerTransition = function(t, e, n, s) {
                        var r = e.length > 0 ? e.substr(1) : "";
                        this._suggest(t + n, s, r)
                    }, i.prototype._addSuggestedToken = function(t) {
                        var e = this._chopOffCommonStart(t, this._origPartialToken);
                        this._suggestions.includes(e) || (s("SUGGESTIONG: " + e), this._suggestions.push(e))
                    }, i.prototype._chopOffCommonStart = function(t, e) {
                        var n = Math.min(t.length, e.length);
                        return t.substr(n, t.length - n)
                    }, i.prototype._getAddedTextFor = function(t) {
                        return String.fromCodePoint(t.label)
                    }, i.prototype._shouldIgnoreThisCase = function(t, e) {
                        if (null == this._casePreference || "BOTH" === this._casePreference) return !1;
                        var n = t.toUpperCase(),
                            s = t.toLowerCase();
                        switch (this._casePreference) {
                            case "LOWER":
                                return t === n && e.includes(s);
                            case "UPPER":
                                return t === s && e.includes(n);
                            default:
                                return !1
                        }
                    }, e.TokenSuggester = i
                }])
            }, "object" == typeof n && "object" == typeof e ? e.exports = r() : "object" == typeof n ? n.Antlr4Autosuggest = r() : s.Antlr4Autosuggest = r()
        }, {
            antlr4: 45,
            debug: 51
        }],
        4: [function(t, e, n) {
            const {
                Token: s
            } = t("./Token"), r = t("./Lexer"), {
                Interval: i
            } = t("./IntervalSet");
            class o {}
            e.exports = class extends o {
                constructor(t) {
                    super(), this.tokenSource = t, this.tokens = [], this.index = -1, this.fetchedEOF = !1
                }
                mark() {
                    return 0
                }
                release(t) {}
                reset() {
                    this.seek(0)
                }
                seek(t) {
                    this.lazyInit(), this.index = this.adjustSeekIndex(t)
                }
                get(t) {
                    return this.lazyInit(), this.tokens[t]
                }
                consume() {
                    let t = !1;
                    if (!(t = this.index >= 0 && (this.fetchedEOF ? this.index < this.tokens.length - 1 : this.index < this.tokens.length)) && this.LA(1) === s.EOF) throw "cannot consume EOF";
                    this.sync(this.index + 1) && (this.index = this.adjustSeekIndex(this.index + 1))
                }
                sync(t) {
                    const e = t - this.tokens.length + 1;
                    return !(e > 0) || this.fetch(e) >= e
                }
                fetch(t) {
                    if (this.fetchedEOF) return 0;
                    for (let e = 0; e < t; e++) {
                        const t = this.tokenSource.nextToken();
                        if (t.tokenIndex = this.tokens.length, this.tokens.push(t), t.type === s.EOF) return this.fetchedEOF = !0, e + 1
                    }
                    return t
                }
                getTokens(t, e, n) {
                    if (void 0 === n && (n = null), t < 0 || e < 0) return null;
                    this.lazyInit();
                    const r = [];
                    e >= this.tokens.length && (e = this.tokens.length - 1);
                    for (let i = t; i < e; i++) {
                        const t = this.tokens[i];
                        if (t.type === s.EOF) break;
                        (null === n || n.contains(t.type)) && r.push(t)
                    }
                    return r
                }
                LA(t) {
                    return this.LT(t).type
                }
                LB(t) {
                    return this.index - t < 0 ? null : this.tokens[this.index - t]
                }
                LT(t) {
                    if (this.lazyInit(), 0 === t) return null;
                    if (t < 0) return this.LB(-t);
                    const e = this.index + t - 1;
                    return this.sync(e), e >= this.tokens.length ? this.tokens[this.tokens.length - 1] : this.tokens[e]
                }
                adjustSeekIndex(t) {
                    return t
                }
                lazyInit() {
                    -1 === this.index && this.setup()
                }
                setup() {
                    this.sync(0), this.index = this.adjustSeekIndex(0)
                }
                setTokenSource(t) {
                    this.tokenSource = t, this.tokens = [], this.index = -1, this.fetchedEOF = !1
                }
                nextTokenOnChannel(t, e) {
                    if (this.sync(t), t >= this.tokens.length) return -1;
                    let n = this.tokens[t];
                    for (; n.channel !== this.channel;) {
                        if (n.type === s.EOF) return -1;
                        t += 1, this.sync(t), n = this.tokens[t]
                    }
                    return t
                }
                previousTokenOnChannel(t, e) {
                    for (; t >= 0 && this.tokens[t].channel !== e;) t -= 1;
                    return t
                }
                getHiddenTokensToRight(t, e) {
                    if (void 0 === e && (e = -1), this.lazyInit(), t < 0 || t >= this.tokens.length) throw t + " not in 0.." + this.tokens.length - 1;
                    const n = this.nextTokenOnChannel(t + 1, r.DEFAULT_TOKEN_CHANNEL),
                        s = t + 1,
                        i = -1 === n ? this.tokens.length - 1 : n;
                    return this.filterForChannel(s, i, e)
                }
                getHiddenTokensToLeft(t, e) {
                    if (void 0 === e && (e = -1), this.lazyInit(), t < 0 || t >= this.tokens.length) throw t + " not in 0.." + this.tokens.length - 1;
                    const n = this.previousTokenOnChannel(t - 1, r.DEFAULT_TOKEN_CHANNEL);
                    if (n === t - 1) return null;
                    const s = n + 1,
                        i = t - 1;
                    return this.filterForChannel(s, i, e)
                }
                filterForChannel(t, e, n) {
                    const s = [];
                    for (let i = t; i < e + 1; i++) {
                        const t = this.tokens[i]; - 1 === n ? t.channel !== r.DEFAULT_TOKEN_CHANNEL && s.push(t) : t.channel === n && s.push(t)
                    }
                    return 0 === s.length ? null : s
                }
                getSourceName() {
                    return this.tokenSource.getSourceName()
                }
                getText(t) {
                    this.lazyInit(), this.fill(), null == t && (t = new i(0, this.tokens.length - 1));
                    let e = t.start;
                    e instanceof s && (e = e.tokenIndex);
                    let n = t.stop;
                    if (n instanceof s && (n = n.tokenIndex), null === e || null === n || e < 0 || n < 0) return "";
                    n >= this.tokens.length && (n = this.tokens.length - 1);
                    let r = "";
                    for (let t = e; t < n + 1; t++) {
                        const e = this.tokens[t];
                        if (e.type === s.EOF) break;
                        r += e.text
                    }
                    return r
                }
                fill() {
                    for (this.lazyInit(); 1e3 === this.fetch(1e3););
                }
            }
        }, {
            "./IntervalSet": 10,
            "./Lexer": 12,
            "./Token": 18
        }],
        5: [function(t, e, n) {
            const s = t("./InputStream"),
                r = t("fs"),
                i = {
                    fromString: function(t) {
                        return new s(t, !0)
                    },
                    fromBlob: function(t, e, n, r) {
                        const i = new window.FileReader;
                        i.onload = function(t) {
                            const e = new s(t.target.result, !0);
                            n(e)
                        }, i.onerror = r, i.readAsText(t, e)
                    },
                    fromBuffer: function(t, e) {
                        return new s(t.toString(e), !0)
                    },
                    fromPath: function(t, e, n) {
                        r.readFile(t, e, function(t, e) {
                            let r = null;
                            null !== e && (r = new s(e, !0)), n(t, r)
                        })
                    },
                    fromPathSync: function(t, e) {
                        const n = r.readFileSync(t, e);
                        return new s(n, !0)
                    }
                };
            e.exports = i
        }, {
            "./InputStream": 9,
            fs: 1
        }],
        6: [function(t, e, n) {
            const s = t("./Token").CommonToken;
            class r {}
            class i extends r {
                constructor(t) {
                    super(), this.copyText = void 0 !== t && t
                }
                create(t, e, n, r, i, o, a, l) {
                    const c = new s(t, e, r, i, o);
                    return c.line = a, c.column = l, null !== n ? c.text = n : this.copyText && null !== t[1] && (c.text = t[1].getText(i, o)), c
                }
                createThin(t, e) {
                    const n = new s(null, t);
                    return n.text = e, n
                }
            }
            i.DEFAULT = new i, e.exports = i
        }, {
            "./Token": 18
        }],
        7: [function(t, e, n) {
            const s = t("./Token").Token,
                r = t("./BufferedTokenStream");
            e.exports = class extends r {
                constructor(t, e) {
                    super(t), this.channel = void 0 === e ? s.DEFAULT_CHANNEL : e
                }
                adjustSeekIndex(t) {
                    return this.nextTokenOnChannel(t, this.channel)
                }
                LB(t) {
                    if (0 === t || this.index - t < 0) return null;
                    let e = this.index,
                        n = 1;
                    for (; n <= t;) e = this.previousTokenOnChannel(e - 1, this.channel), n += 1;
                    return e < 0 ? null : this.tokens[e]
                }
                LT(t) {
                    if (this.lazyInit(), 0 === t) return null;
                    if (t < 0) return this.LB(-t);
                    let e = this.index,
                        n = 1;
                    for (; n < t;) this.sync(e + 1) && (e = this.nextTokenOnChannel(e + 1, this.channel)), n += 1;
                    return this.tokens[e]
                }
                getNumberOfOnChannelTokens() {
                    let t = 0;
                    this.fill();
                    for (let e = 0; e < this.tokens.length; e++) {
                        const n = this.tokens[e];
                        if (n.channel === this.channel && (t += 1), n.type === s.EOF) break
                    }
                    return t
                }
            }
        }, {
            "./BufferedTokenStream": 4,
            "./Token": 18
        }],
        8: [function(t, e, n) {
            const s = t("./InputStream"),
                r = t("fs");
            e.exports = class extends s {
                constructor(t, e) {
                    super(r.readFileSync(t, "utf8"), e), this.fileName = t
                }
            }
        }, {
            "./InputStream": 9,
            fs: 1
        }],
        9: [function(t, e, n) {
            const {
                Token: s
            } = t("./Token");
            t("./polyfills/codepointat"), t("./polyfills/fromcodepoint");
            e.exports = class {
                constructor(t, e) {
                    if (this.name = "<empty>", this.strdata = t, this.decodeToUnicodeCodePoints = e || !1, this._index = 0, this.data = [], this.decodeToUnicodeCodePoints)
                        for (let t = 0; t < this.strdata.length;) {
                            const e = this.strdata.codePointAt(t);
                            this.data.push(e), t += e <= 65535 ? 1 : 2
                        } else
                            for (let t = 0; t < this.strdata.length; t++) {
                                const e = this.strdata.charCodeAt(t);
                                this.data.push(e)
                            }
                    this._size = this.data.length
                }
                reset() {
                    this._index = 0
                }
                consume() {
                    if (this._index >= this._size) throw "cannot consume EOF";
                    this._index += 1
                }
                LA(t) {
                    if (0 === t) return 0;
                    t < 0 && (t += 1);
                    const e = this._index + t - 1;
                    return e < 0 || e >= this._size ? s.EOF : this.data[e]
                }
                LT(t) {
                    return this.LA(t)
                }
                mark() {
                    return -1
                }
                release(t) {}
                seek(t) {
                    t <= this._index ? this._index = t : this._index = Math.min(t, this._size)
                }
                getText(t, e) {
                    if (e >= this._size && (e = this._size - 1), t >= this._size) return "";
                    if (this.decodeToUnicodeCodePoints) {
                        let n = "";
                        for (let s = t; s <= e; s++) n += String.fromCodePoint(this.data[s]);
                        return n
                    }
                    return this.strdata.slice(t, e + 1)
                }
                toString() {
                    return this.strdata
                }
                get index() {
                    return this._index
                }
                get size() {
                    return this._size
                }
            }
        }, {
            "./Token": 18,
            "./polyfills/codepointat": 46,
            "./polyfills/fromcodepoint": 47
        }],
        10: [function(t, e, n) {
            const {
                Token: s
            } = t("./Token");
            class r {
                constructor(t, e) {
                    this.start = t, this.stop = e
                }
                contains(t) {
                    return t >= this.start && t < this.stop
                }
                toString() {
                    return this.start === this.stop - 1 ? this.start.toString() : this.start.toString() + ".." + (this.stop - 1).toString()
                }
                get length() {
                    return this.stop - this.start
                }
            }
            class i {
                constructor() {
                    this.intervals = null, this.readOnly = !1
                }
                first(t) {
                    return null === this.intervals || 0 === this.intervals.length ? s.INVALID_TYPE : this.intervals[0].start
                }
                addOne(t) {
                    this.addInterval(new r(t, t + 1))
                }
                addRange(t, e) {
                    this.addInterval(new r(t, e + 1))
                }
                addInterval(t) {
                    if (null === this.intervals) this.intervals = [], this.intervals.push(t);
                    else {
                        for (let e = 0; e < this.intervals.length; e++) {
                            const n = this.intervals[e];
                            if (t.stop < n.start) return void this.intervals.splice(e, 0, t);
                            if (t.stop === n.start) return void(this.intervals[e].start = t.start);
                            if (t.start <= n.stop) return this.intervals[e] = new r(Math.min(n.start, t.start), Math.max(n.stop, t.stop)), void this.reduce(e)
                        }
                        this.intervals.push(t)
                    }
                }
                addSet(t) {
                    if (null !== t.intervals)
                        for (let e = 0; e < t.intervals.length; e++) {
                            const n = t.intervals[e];
                            this.addInterval(new r(n.start, n.stop))
                        }
                    return this
                }
                reduce(t) {
                    if (t < this.intervalslength - 1) {
                        const e = this.intervals[t],
                            n = this.intervals[t + 1];
                        e.stop >= n.stop ? (this.intervals.pop(t + 1), this.reduce(t)) : e.stop >= n.start && (this.intervals[t] = new r(e.start, n.stop), this.intervals.pop(t + 1))
                    }
                }
                complement(t, e) {
                    const n = new i;
                    n.addInterval(new r(t, e + 1));
                    for (let t = 0; t < this.intervals.length; t++) n.removeRange(this.intervals[t]);
                    return n
                }
                contains(t) {
                    if (null === this.intervals) return !1;
                    for (let e = 0; e < this.intervals.length; e++)
                        if (this.intervals[e].contains(t)) return !0;
                    return !1
                }
                removeRange(t) {
                    if (t.start === t.stop - 1) this.removeOne(t.start);
                    else if (null !== this.intervals) {
                        let e = 0;
                        for (let n = 0; n < this.intervals.length; n++) {
                            const n = this.intervals[e];
                            if (t.stop <= n.start) return;
                            if (t.start > n.start && t.stop < n.stop) {
                                this.intervals[e] = new r(n.start, t.start);
                                const s = new r(t.stop, n.stop);
                                return void this.intervals.splice(e, 0, s)
                            }
                            t.start <= n.start && t.stop >= n.stop ? (this.intervals.splice(e, 1), e -= 1) : t.start < n.stop ? this.intervals[e] = new r(n.start, t.start) : t.stop < n.stop && (this.intervals[e] = new r(t.stop, n.stop)), e += 1
                        }
                    }
                }
                removeOne(t) {
                    if (null !== this.intervals)
                        for (let e = 0; e < this.intervals.length; e++) {
                            const n = this.intervals[e];
                            if (t < n.start) return;
                            if (t === n.start && t === n.stop - 1) return void this.intervals.splice(e, 1);
                            if (t === n.start) return void(this.intervals[e] = new r(n.start + 1, n.stop));
                            if (t === n.stop - 1) return void(this.intervals[e] = new r(n.start, n.stop - 1));
                            if (t < n.stop - 1) {
                                const s = new r(n.start, t);
                                return n.start = t + 1, void this.intervals.splice(e, 0, s)
                            }
                        }
                }
                toString(t, e, n) {
                    return t = t || null, e = e || null, n = n || !1, null === this.intervals ? "{}" : null !== t || null !== e ? this.toTokenString(t, e) : n ? this.toCharString() : this.toIndexString()
                }
                toCharString() {
                    const t = [];
                    for (let e = 0; e < this.intervals.length; e++) {
                        const n = this.intervals[e];
                        n.stop === n.start + 1 ? n.start === s.EOF ? t.push("<EOF>") : t.push("'" + String.fromCharCode(n.start) + "'") : t.push("'" + String.fromCharCode(n.start) + "'..'" + String.fromCharCode(n.stop - 1) + "'")
                    }
                    return t.length > 1 ? "{" + t.join(", ") + "}" : t[0]
                }
                toIndexString() {
                    const t = [];
                    for (let e = 0; e < this.intervals.length; e++) {
                        const n = this.intervals[e];
                        n.stop === n.start + 1 ? n.start === s.EOF ? t.push("<EOF>") : t.push(n.start.toString()) : t.push(n.start.toString() + ".." + (n.stop - 1).toString())
                    }
                    return t.length > 1 ? "{" + t.join(", ") + "}" : t[0]
                }
                toTokenString(t, e) {
                    const n = [];
                    for (let s = 0; s < this.intervals.length; s++) {
                        const r = this.intervals[s];
                        for (let s = r.start; s < r.stop; s++) n.push(this.elementName(t, e, s))
                    }
                    return n.length > 1 ? "{" + n.join(", ") + "}" : n[0]
                }
                elementName(t, e, n) {
                    return n === s.EOF ? "<EOF>" : n === s.EPSILON ? "<EPSILON>" : t[n] || e[n]
                }
                get length() {
                    let t = 0;
                    return this.intervals.map(function(e) {
                        t += e.length
                    }), t
                }
            }
            e.exports = {
                Interval: r,
                IntervalSet: i
            }
        }, {
            "./Token": 18
        }],
        11: [function(t, e, n) {
            const {
                Set: s,
                BitSet: r
            } = t("./Utils"), {
                Token: i
            } = t("./Token"), {
                ATNConfig: o
            } = t("./atn/ATNConfig"), {
                IntervalSet: a
            } = t("./IntervalSet"), {
                RuleStopState: l
            } = t("./atn/ATNState"), {
                RuleTransition: c,
                NotSetTransition: u,
                WildcardTransition: h,
                AbstractPredicateTransition: d
            } = t("./atn/Transition"), {
                predictionContextFromRuleContext: p,
                PredictionContext: f,
                SingletonPredictionContext: g
            } = t("./PredictionContext");
            class T {
                constructor(t) {
                    this.atn = t
                }
                getDecisionLookahead(t) {
                    if (null === t) return null;
                    const e = t.transitions.length,
                        n = [];
                    for (let i = 0; i < e; i++) {
                        n[i] = new a;
                        const e = new s,
                            o = !1;
                        this._LOOK(t.transition(i).target, null, f.EMPTY, n[i], e, new r, o, !1), (0 === n[i].length || n[i].contains(T.HIT_PRED)) && (n[i] = null)
                    }
                    return n
                }
                LOOK(t, e, n) {
                    const i = new a,
                        o = null !== (n = n || null) ? p(t.atn, n) : null;
                    return this._LOOK(t, e, o, i, new s, new r, !0, !0), i
                }
                _LOOK(t, e, n, s, r, a, p, x) {
                    const S = new o({
                        state: t,
                        alt: 0,
                        context: n
                    }, null);
                    if (!r.contains(S)) {
                        if (r.add(S), t === e) {
                            if (null === n) return void s.addOne(i.EPSILON);
                            if (n.isEmpty() && x) return void s.addOne(i.EOF)
                        }
                        if (t instanceof l) {
                            if (null === n) return void s.addOne(i.EPSILON);
                            if (n.isEmpty() && x) return void s.addOne(i.EOF);
                            if (n !== f.EMPTY) {
                                for (let t = 0; t < n.length; t++) {
                                    const i = this.atn.states[n.getReturnState(t)],
                                        o = a.contains(i.ruleIndex);
                                    try {
                                        a.remove(i.ruleIndex), this._LOOK(i, e, n.getParent(t), s, r, a, p, x)
                                    } finally {
                                        o && a.add(i.ruleIndex)
                                    }
                                }
                                return
                            }
                        }
                        for (let o = 0; o < t.transitions.length; o++) {
                            const l = t.transitions[o];
                            if (l.constructor === c) {
                                if (a.contains(l.target.ruleIndex)) continue;
                                const t = g.create(n, l.followState.stateNumber);
                                try {
                                    a.add(l.target.ruleIndex), this._LOOK(l.target, e, t, s, r, a, p, x)
                                } finally {
                                    a.remove(l.target.ruleIndex)
                                }
                            } else if (l instanceof d) p ? this._LOOK(l.target, e, n, s, r, a, p, x) : s.addOne(T.HIT_PRED);
                            else if (l.isEpsilon) this._LOOK(l.target, e, n, s, r, a, p, x);
                            else if (l.constructor === h) s.addRange(i.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
                            else {
                                let t = l.label;
                                null !== t && (l instanceof u && (t = t.complement(i.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType)), s.addSet(t))
                            }
                        }
                    }
                }
            }
            T.HIT_PRED = i.INVALID_TYPE, e.exports = T
        }, {
            "./IntervalSet": 10,
            "./PredictionContext": 15,
            "./Token": 18,
            "./Utils": 19,
            "./atn/ATNConfig": 21,
            "./atn/ATNState": 26,
            "./atn/Transition": 34
        }],
        12: [function(t, e, n) {
            const {
                Token: s
            } = t("./Token"), r = t("./Recognizer"), i = t("./CommonTokenFactory"), {
                RecognitionException: o
            } = t("./error/Errors"), {
                LexerNoViableAltException: a
            } = t("./error/Errors");
            class l extends r {
                constructor(t) {
                    super(), this._input = t, this._factory = i.DEFAULT, this._tokenFactorySourcePair = [this, t], this._interp = null, this._token = null, this._tokenStartCharIndex = -1, this._tokenStartLine = -1, this._tokenStartColumn = -1, this._hitEOF = !1, this._channel = s.DEFAULT_CHANNEL, this._type = s.INVALID_TYPE, this._modeStack = [], this._mode = l.DEFAULT_MODE, this._text = null
                }
                reset() {
                    null !== this._input && this._input.seek(0), this._token = null, this._type = s.INVALID_TYPE, this._channel = s.DEFAULT_CHANNEL, this._tokenStartCharIndex = -1, this._tokenStartColumn = -1, this._tokenStartLine = -1, this._text = null, this._hitEOF = !1, this._mode = l.DEFAULT_MODE, this._modeStack = [], this._interp.reset()
                }
                nextToken() {
                    if (null === this._input) throw "nextToken requires a non-null input stream.";
                    const t = this._input.mark();
                    try {
                        for (;;) {
                            if (this._hitEOF) return this.emitEOF(), this._token;
                            this._token = null, this._channel = s.DEFAULT_CHANNEL, this._tokenStartCharIndex = this._input.index, this._tokenStartColumn = this._interp.column, this._tokenStartLine = this._interp.line, this._text = null;
                            let t = !1;
                            for (;;) {
                                this._type = s.INVALID_TYPE;
                                let e = l.SKIP;
                                try {
                                    e = this._interp.match(this._input, this._mode)
                                } catch (t) {
                                    if (!(t instanceof o)) throw console.log(t.stack), t;
                                    this.notifyListeners(t), this.recover(t)
                                }
                                if (this._input.LA(1) === s.EOF && (this._hitEOF = !0), this._type === s.INVALID_TYPE && (this._type = e), this._type === l.SKIP) {
                                    t = !0;
                                    break
                                }
                                if (this._type !== l.MORE) break
                            }
                            if (!t) return null === this._token && this.emit(), this._token
                        }
                    } finally {
                        this._input.release(t)
                    }
                }
                skip() {
                    this._type = l.SKIP
                }
                more() {
                    this._type = l.MORE
                }
                mode(t) {
                    this._mode = t
                }
                pushMode(t) {
                    this._interp.debug && console.log("pushMode " + t), this._modeStack.push(this._mode), this.mode(t)
                }
                popMode() {
                    if (0 === this._modeStack.length) throw "Empty Stack";
                    return this._interp.debug && console.log("popMode back to " + this._modeStack.slice(0, -1)), this.mode(this._modeStack.pop()), this._mode
                }
                emitToken(t) {
                    this._token = t
                }
                emit() {
                    const t = this._factory.create(this._tokenFactorySourcePair, this._type, this._text, this._channel, this._tokenStartCharIndex, this.getCharIndex() - 1, this._tokenStartLine, this._tokenStartColumn);
                    return this.emitToken(t), t
                }
                emitEOF() {
                    const t = this.column,
                        e = this.line,
                        n = this._factory.create(this._tokenFactorySourcePair, s.EOF, null, s.DEFAULT_CHANNEL, this._input.index, this._input.index - 1, e, t);
                    return this.emitToken(n), n
                }
                getCharIndex() {
                    return this._input.index
                }
                getAllTokens() {
                    const t = [];
                    let e = this.nextToken();
                    for (; e.type !== s.EOF;) t.push(e), e = this.nextToken();
                    return t
                }
                notifyListeners(t) {
                    const e = this._tokenStartCharIndex,
                        n = this._input.index,
                        s = this._input.getText(e, n),
                        r = "token recognition error at: '" + this.getErrorDisplay(s) + "'";
                    this.getErrorListenerDispatch().syntaxError(this, null, this._tokenStartLine, this._tokenStartColumn, r, t)
                }
                getErrorDisplay(t) {
                    const e = [];
                    for (let n = 0; n < t.length; n++) e.push(t[n]);
                    return e.join("")
                }
                getErrorDisplayForChar(t) {
                    return t.charCodeAt(0) === s.EOF ? "<EOF>" : "\n" === t ? "\\n" : "\t" === t ? "\\t" : "\r" === t ? "\\r" : t
                }
                getCharErrorDisplay(t) {
                    return "'" + this.getErrorDisplayForChar(t) + "'"
                }
                recover(t) {
                    this._input.LA(1) !== s.EOF && (t instanceof a ? this._interp.consume(this._input) : this._input.consume())
                }
                get inputStream() {
                    return this._input
                }
                set inputStream(t) {
                    this._input = null, this._tokenFactorySourcePair = [this, this._input], this.reset(), this._input = t, this._tokenFactorySourcePair = [this, this._input]
                }
                get sourceName() {
                    return this._input.sourceName
                }
                get type() {
                    return this.type
                }
                set type(t) {
                    this._type = t
                }
                get line() {
                    return this._interp.line
                }
                set line(t) {
                    this._interp.line = t
                }
                get column() {
                    return this._interp.column
                }
                set column(t) {
                    this._interp.column = t
                }
                get text() {
                    return null !== this._text ? this._text : this._interp.getText(this._input)
                }
                set text(t) {
                    this._text = t
                }
            }
            l.DEFAULT_MODE = 0, l.MORE = -2, l.SKIP = -3, l.DEFAULT_TOKEN_CHANNEL = s.DEFAULT_CHANNEL, l.HIDDEN = s.HIDDEN_CHANNEL, l.MIN_CHAR_VALUE = 0, l.MAX_CHAR_VALUE = 1114111, e.exports = l
        }, {
            "./CommonTokenFactory": 6,
            "./Recognizer": 16,
            "./Token": 18,
            "./error/Errors": 43
        }],
        13: [function(t, e, n) {
            const {
                Token: s
            } = t("./Token"), {
                ParseTreeListener: r,
                TerminalNode: i,
                ErrorNode: o
            } = t("./tree/Tree"), a = t("./Recognizer"), {
                DefaultErrorStrategy: l
            } = t("./error/ErrorStrategy"), c = t("./atn/ATNDeserializer"), u = t("./atn/ATNDeserializationOptions"), h = t("./Lexer");
            class d extends r {
                constructor(t) {
                    super(), this.parser = t
                }
                enterEveryRule(t) {
                    console.log("enter   " + this.parser.ruleNames[t.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text)
                }
                visitTerminal(t) {
                    console.log("consume " + t.symbol + " rule " + this.parser.ruleNames[this.parser._ctx.ruleIndex])
                }
                exitEveryRule(t) {
                    console.log("exit    " + this.parser.ruleNames[t.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text)
                }
            }
            class p extends a {
                constructor(t) {
                    super(), this._input = null, this._errHandler = new l, this._precedenceStack = [], this._precedenceStack.push(0), this._ctx = null, this.buildParseTrees = !0, this._tracer = null, this._parseListeners = null, this._syntaxErrors = 0, this.setInputStream(t)
                }
                reset() {
                    null !== this._input && this._input.seek(0), this._errHandler.reset(this), this._ctx = null, this._syntaxErrors = 0, this.setTrace(!1), this._precedenceStack = [], this._precedenceStack.push(0), null !== this._interp && this._interp.reset()
                }
                match(t) {
                    let e = this.getCurrentToken();
                    return e.type === t ? (this._errHandler.reportMatch(this), this.consume()) : (e = this._errHandler.recoverInline(this), this.buildParseTrees && -1 === e.tokenIndex && this._ctx.addErrorNode(e)), e
                }
                matchWildcard() {
                    let t = this.getCurrentToken();
                    return t.type > 0 ? (this._errHandler.reportMatch(this), this.consume()) : (t = this._errHandler.recoverInline(this), this._buildParseTrees && -1 === t.tokenIndex && this._ctx.addErrorNode(t)), t
                }
                getParseListeners() {
                    return this._parseListeners || []
                }
                addParseListener(t) {
                    if (null === t) throw "listener";
                    null === this._parseListeners && (this._parseListeners = []), this._parseListeners.push(t)
                }
                removeParseListener(t) {
                    if (null !== this._parseListeners) {
                        const e = this._parseListeners.indexOf(t);
                        e >= 0 && this._parseListeners.splice(e, 1), 0 === this._parseListeners.length && (this._parseListeners = null)
                    }
                }
                removeParseListeners() {
                    this._parseListeners = null
                }
                triggerEnterRuleEvent() {
                    if (null !== this._parseListeners) {
                        const t = this._ctx;
                        this._parseListeners.map(function(e) {
                            e.enterEveryRule(t), t.enterRule(e)
                        })
                    }
                }
                triggerExitRuleEvent() {
                    if (null !== this._parseListeners) {
                        const t = this._ctx;
                        this._parseListeners.slice(0).reverse().map(function(e) {
                            t.exitRule(e), e.exitEveryRule(t)
                        })
                    }
                }
                getTokenFactory() {
                    return this._input.tokenSource._factory
                }
                setTokenFactory(t) {
                    this._input.tokenSource._factory = t
                }
                getATNWithBypassAlts() {
                    const t = this.getSerializedATN();
                    if (null === t) throw "The current parser does not support an ATN with bypass alternatives.";
                    let e = this.bypassAltsAtnCache[t];
                    if (null === e) {
                        const n = new u;
                        n.generateRuleBypassTransitions = !0, e = new c(n).deserialize(t), this.bypassAltsAtnCache[t] = e
                    }
                    return e
                }
                compileParseTreePattern(t, e, n) {
                    if (null === (n = n || null) && null !== this.getTokenStream()) {
                        const t = this.getTokenStream().tokenSource;
                        t instanceof h && (n = t)
                    }
                    if (null === n) throw "Parser can't discover a lexer to use";
                    return new ParseTreePatternMatcher(n, this).compile(t, e)
                }
                getInputStream() {
                    return this.getTokenStream()
                }
                setInputStream(t) {
                    this.setTokenStream(t)
                }
                getTokenStream() {
                    return this._input
                }
                setTokenStream(t) {
                    this._input = null, this.reset(), this._input = t
                }
                getCurrentToken() {
                    return this._input.LT(1)
                }
                notifyErrorListeners(t, e, n) {
                    n = n || null, null === (e = e || null) && (e = this.getCurrentToken()), this._syntaxErrors += 1;
                    const s = e.line,
                        r = e.column;
                    this.getErrorListenerDispatch().syntaxError(this, e, s, r, t, n)
                }
                consume() {
                    const t = this.getCurrentToken();
                    t.type !== s.EOF && this.getInputStream().consume();
                    const e = null !== this._parseListeners && this._parseListeners.length > 0;
                    if (this.buildParseTrees || e) {
                        let n;
                        (n = this._errHandler.inErrorRecoveryMode(this) ? this._ctx.addErrorNode(t) : this._ctx.addTokenNode(t)).invokingState = this.state, e && this._parseListeners.map(function(t) {
                            n instanceof o || void 0 !== n.isErrorNode && n.isErrorNode() ? t.visitErrorNode(n) : n instanceof i && t.visitTerminal(n)
                        })
                    }
                    return t
                }
                addContextToParseTree() {
                    null !== this._ctx.parentCtx && this._ctx.parentCtx.addChild(this._ctx)
                }
                enterRule(t, e, n) {
                    this.state = e, this._ctx = t, this._ctx.start = this._input.LT(1), this.buildParseTrees && this.addContextToParseTree(), null !== this._parseListeners && this.triggerEnterRuleEvent()
                }
                exitRule() {
                    this._ctx.stop = this._input.LT(-1), null !== this._parseListeners && this.triggerExitRuleEvent(), this.state = this._ctx.invokingState, this._ctx = this._ctx.parentCtx
                }
                enterOuterAlt(t, e) {
                    t.setAltNumber(e), this.buildParseTrees && this._ctx !== t && null !== this._ctx.parentCtx && (this._ctx.parentCtx.removeLastChild(), this._ctx.parentCtx.addChild(t)), this._ctx = t
                }
                getPrecedence() {
                    return 0 === this._precedenceStack.length ? -1 : this._precedenceStack[this._precedenceStack.length - 1]
                }
                enterRecursionRule(t, e, n, s) {
                    this.state = e, this._precedenceStack.push(s), this._ctx = t, this._ctx.start = this._input.LT(1), null !== this._parseListeners && this.triggerEnterRuleEvent()
                }
                pushNewRecursionContext(t, e, n) {
                    const s = this._ctx;
                    s.parentCtx = t, s.invokingState = e, s.stop = this._input.LT(-1), this._ctx = t, this._ctx.start = s.start, this.buildParseTrees && this._ctx.addChild(s), null !== this._parseListeners && this.triggerEnterRuleEvent()
                }
                unrollRecursionContexts(t) {
                    this._precedenceStack.pop(), this._ctx.stop = this._input.LT(-1);
                    const e = this._ctx;
                    if (null !== this._parseListeners)
                        for (; this._ctx !== t;) this.triggerExitRuleEvent(), this._ctx = this._ctx.parentCtx;
                    else this._ctx = t;
                    e.parentCtx = t, this.buildParseTrees && null !== t && t.addChild(e)
                }
                getInvokingContext(t) {
                    let e = this._ctx;
                    for (; null !== e;) {
                        if (e.ruleIndex === t) return e;
                        e = e.parentCtx
                    }
                    return null
                }
                precpred(t, e) {
                    return e >= this._precedenceStack[this._precedenceStack.length - 1]
                }
                inContext(t) {
                    return !1
                }
                isExpectedToken(t) {
                    const e = this._interp.atn;
                    let n = this._ctx;
                    const r = e.states[this.state];
                    let i = e.nextTokens(r);
                    if (i.contains(t)) return !0;
                    if (!i.contains(s.EPSILON)) return !1;
                    for (; null !== n && n.invokingState >= 0 && i.contains(s.EPSILON);) {
                        const s = e.states[n.invokingState].transitions[0];
                        if ((i = e.nextTokens(s.followState)).contains(t)) return !0;
                        n = n.parentCtx
                    }
                    return !(!i.contains(s.EPSILON) || t !== s.EOF)
                }
                getExpectedTokens() {
                    return this._interp.atn.getExpectedTokens(this.state, this._ctx)
                }
                getExpectedTokensWithinCurrentRule() {
                    const t = this._interp.atn,
                        e = t.states[this.state];
                    return t.nextTokens(e)
                }
                getRuleIndex(t) {
                    const e = this.getRuleIndexMap()[t];
                    return null !== e ? e : -1
                }
                getRuleInvocationStack(t) {
                    null === (t = t || null) && (t = this._ctx);
                    const e = [];
                    for (; null !== t;) {
                        const n = t.ruleIndex;
                        n < 0 ? e.push("n/a") : e.push(this.ruleNames[n]), t = t.parentCtx
                    }
                    return e
                }
                getDFAStrings() {
                    return this._interp.decisionToDFA.toString()
                }
                dumpDFA() {
                    let t = !1;
                    for (let e = 0; e < this._interp.decisionToDFA.length; e++) {
                        const n = this._interp.decisionToDFA[e];
                        n.states.length > 0 && (t && console.log(), this.printer.println("Decision " + n.decision + ":"), this.printer.print(n.toString(this.literalNames, this.symbolicNames)), t = !0)
                    }
                }
                getSourceName() {
                    return this._input.sourceName
                }
                setTrace(t) {
                    t ? (null !== this._tracer && this.removeParseListener(this._tracer), this._tracer = new d(this), this.addParseListener(this._tracer)) : (this.removeParseListener(this._tracer), this._tracer = null)
                }
            }
            p.bypassAltsAtnCache = {}, e.exports = p
        }, {
            "./Lexer": 12,
            "./Recognizer": 16,
            "./Token": 18,
            "./atn/ATNDeserializationOptions": 23,
            "./atn/ATNDeserializer": 24,
            "./error/ErrorStrategy": 42,
            "./tree/Tree": 48
        }],
        14: [function(t, e, n) {
            const s = t("./RuleContext"),
                r = t("./tree/Tree"),
                i = r.INVALID_INTERVAL,
                o = r.TerminalNode,
                a = r.TerminalNodeImpl,
                l = r.ErrorNodeImpl,
                c = t("./IntervalSet").Interval;
            class u extends s {
                constructor(t, e) {
                    super(t = t || null, e = e || null), this.ruleIndex = -1, this.children = null, this.start = null, this.stop = null, this.exception = null
                }
                copyFrom(t) {
                    this.parentCtx = t.parentCtx, this.invokingState = t.invokingState, this.children = null, this.start = t.start, this.stop = t.stop, t.children && (this.children = [], t.children.map(function(t) {
                        t instanceof l && (this.children.push(t), t.parentCtx = this)
                    }, this))
                }
                enterRule(t) {}
                exitRule(t) {}
                addChild(t) {
                    return null === this.children && (this.children = []), this.children.push(t), t
                }
                removeLastChild() {
                    null !== this.children && this.children.pop()
                }
                addTokenNode(t) {
                    const e = new a(t);
                    return this.addChild(e), e.parentCtx = this, e
                }
                addErrorNode(t) {
                    const e = new l(t);
                    return this.addChild(e), e.parentCtx = this, e
                }
                getChild(t, e) {
                    if (e = e || null, null === this.children || t < 0 || t >= this.children.length) return null;
                    if (null === e) return this.children[t];
                    for (let n = 0; n < this.children.length; n++) {
                        const s = this.children[n];
                        if (s instanceof e) {
                            if (0 === t) return s;
                            t -= 1
                        }
                    }
                    return null
                }
                getToken(t, e) {
                    if (null === this.children || e < 0 || e >= this.children.length) return null;
                    for (let n = 0; n < this.children.length; n++) {
                        const s = this.children[n];
                        if (s instanceof o && s.symbol.type === t) {
                            if (0 === e) return s;
                            e -= 1
                        }
                    }
                    return null
                }
                getTokens(t) {
                    if (null === this.children) return []; {
                        const e = [];
                        for (let n = 0; n < this.children.length; n++) {
                            const s = this.children[n];
                            s instanceof o && s.symbol.type === t && e.push(s)
                        }
                        return e
                    }
                }
                getTypedRuleContext(t, e) {
                    return this.getChild(e, t)
                }
                getTypedRuleContexts(t) {
                    if (null === this.children) return []; {
                        const e = [];
                        for (let n = 0; n < this.children.length; n++) {
                            const s = this.children[n];
                            s instanceof t && e.push(s)
                        }
                        return e
                    }
                }
                getChildCount() {
                    return null === this.children ? 0 : this.children.length
                }
                getSourceInterval() {
                    return null === this.start || null === this.stop ? i : new c(this.start.tokenIndex, this.stop.tokenIndex)
                }
            }
            s.EMPTY = new u;
            e.exports = u
        }, {
            "./IntervalSet": 10,
            "./RuleContext": 17,
            "./tree/Tree": 48
        }],
        15: [function(t, e, n) {
            const s = t("./RuleContext"),
                {
                    Hash: r,
                    Map: i,
                    equalArrays: o
                } = t("./Utils");
            class a {
                constructor(t) {
                    this.cachedHashCode = t
                }
                isEmpty() {
                    return this === a.EMPTY
                }
                hasEmptyPath() {
                    return this.getReturnState(this.length - 1) === a.EMPTY_RETURN_STATE
                }
                hashCode() {
                    return this.cachedHashCode
                }
                updateHashCode(t) {
                    t.update(this.cachedHashCode)
                }
            }
            a.EMPTY = null, a.EMPTY_RETURN_STATE = 2147483647, a.globalNodeCount = 1, a.id = a.globalNodeCount;
            class l extends a {
                constructor(t, e) {
                    let n = 0;
                    const s = new r;
                    null !== t ? s.update(t, e) : s.update(1), super(n = s.finish()), this.parentCtx = t, this.returnState = e
                }
                getParent(t) {
                    return this.parentCtx
                }
                getReturnState(t) {
                    return this.returnState
                }
                equals(t) {
                    return this === t || t instanceof l && (this.hashCode() === t.hashCode() && (this.returnState === t.returnState && (null == this.parentCtx ? null == t.parentCtx : this.parentCtx.equals(t.parentCtx))))
                }
                toString() {
                    const t = null === this.parentCtx ? "" : this.parentCtx.toString();
                    return 0 === t.length ? this.returnState === a.EMPTY_RETURN_STATE ? "$" : "" + this.returnState : this.returnState + " " + t
                }
                get length() {
                    return 1
                }
                static create(t, e) {
                    return e === a.EMPTY_RETURN_STATE && null === t ? a.EMPTY : new l(t, e)
                }
            }
            class c extends l {
                constructor() {
                    super(null, a.EMPTY_RETURN_STATE)
                }
                isEmpty() {
                    return !0
                }
                getParent(t) {
                    return null
                }
                getReturnState(t) {
                    return this.returnState
                }
                equals(t) {
                    return this === t
                }
                toString() {
                    return "$"
                }
            }
            a.EMPTY = new c;
            class u extends a {
                constructor(t, e) {
                    const n = new r;
                    return n.update(t, e), super(n.finish()), this.parents = t, this.returnStates = e, this
                }
                isEmpty() {
                    return this.returnStates[0] === a.EMPTY_RETURN_STATE
                }
                getParent(t) {
                    return this.parents[t]
                }
                getReturnState(t) {
                    return this.returnStates[t]
                }
                equals(t) {
                    return this === t || t instanceof u && (this.hashCode() === t.hashCode() && (o(this.returnStates, t.returnStates) && o(this.parents, t.parents)))
                }
                toString() {
                    if (this.isEmpty()) return "[]"; {
                        let t = "[";
                        for (let e = 0; e < this.returnStates.length; e++) e > 0 && (t += ", "), this.returnStates[e] !== a.EMPTY_RETURN_STATE ? (t += this.returnStates[e], null !== this.parents[e] ? t = t + " " + this.parents[e] : t += "null") : t += "$";
                        return t + "]"
                    }
                }
                get length() {
                    return this.returnStates.length
                }
            }

            function h(t, e, n, s) {
                if (t === e) return t;
                if (t instanceof l && e instanceof l) return function(t, e, n, s) {
                    if (null !== s) {
                        let n = s.get(t, e);
                        if (null !== n) return n;
                        if (null !== (n = s.get(e, t))) return n
                    }
                    const r = function(t, e, n) {
                        if (n) {
                            if (t === a.EMPTY) return a.EMPTY;
                            if (e === a.EMPTY) return a.EMPTY
                        } else {
                            if (t === a.EMPTY && e === a.EMPTY) return a.EMPTY;
                            if (t === a.EMPTY) {
                                const t = [e.returnState, a.EMPTY_RETURN_STATE],
                                    n = [e.parentCtx, null];
                                return new u(n, t)
                            }
                            if (e === a.EMPTY) {
                                const e = [t.returnState, a.EMPTY_RETURN_STATE],
                                    n = [t.parentCtx, null];
                                return new u(n, e)
                            }
                        }
                        return null
                    }(t, e, n);
                    if (null !== r) return null !== s && s.set(t, e, r), r;
                    if (t.returnState === e.returnState) {
                        const r = h(t.parentCtx, e.parentCtx, n, s);
                        if (r === t.parentCtx) return t;
                        if (r === e.parentCtx) return e;
                        const i = l.create(r, t.returnState);
                        return null !== s && s.set(t, e, i), i
                    } {
                        let n = null;
                        if ((t === e || null !== t.parentCtx && t.parentCtx === e.parentCtx) && (n = t.parentCtx), null !== n) {
                            const r = [t.returnState, e.returnState];
                            t.returnState > e.returnState && (r[0] = e.returnState, r[1] = t.returnState);
                            const i = [n, n],
                                o = new u(i, r);
                            return null !== s && s.set(t, e, o), o
                        }
                        const r = [t.returnState, e.returnState];
                        let i = [t.parentCtx, e.parentCtx];
                        t.returnState > e.returnState && (r[0] = e.returnState, r[1] = t.returnState, i = [e.parentCtx, t.parentCtx]);
                        const o = new u(i, r);
                        return null !== s && s.set(t, e, o), o
                    }
                }(t, e, n, s);
                if (n) {
                    if (t instanceof c) return t;
                    if (e instanceof c) return e
                }
                return t instanceof l && (t = new u([t.getParent()], [t.returnState])), e instanceof l && (e = new u([e.getParent()], [e.returnState])),
                    function(t, e, n, s) {
                        if (null !== s) {
                            let n = s.get(t, e);
                            if (null !== n) return n;
                            if (null !== (n = s.get(e, t))) return n
                        }
                        let r = 0,
                            o = 0,
                            c = 0,
                            d = [],
                            p = [];
                        for (; r < t.returnStates.length && o < e.returnStates.length;) {
                            const i = t.parents[r],
                                l = e.parents[o];
                            if (t.returnStates[r] === e.returnStates[o]) {
                                const e = t.returnStates[r],
                                    u = e === a.EMPTY_RETURN_STATE && null === i && null === l,
                                    f = null !== i && null !== l && i === l;
                                u || f ? (p[c] = i, d[c] = e) : (p[c] = h(i, l, n, s), d[c] = e), r += 1, o += 1
                            } else t.returnStates[r] < e.returnStates[o] ? (p[c] = i, d[c] = t.returnStates[r], r += 1) : (p[c] = l, d[c] = e.returnStates[o], o += 1);
                            c += 1
                        }
                        if (r < t.returnStates.length)
                            for (let e = r; e < t.returnStates.length; e++) p[c] = t.parents[e], d[c] = t.returnStates[e], c += 1;
                        else
                            for (let t = o; t < e.returnStates.length; t++) p[c] = e.parents[t], d[c] = e.returnStates[t], c += 1;
                        if (c < p.length) {
                            if (1 === c) {
                                const n = l.create(p[0], d[0]);
                                return null !== s && s.set(t, e, n), n
                            }
                            p = p.slice(0, c), d = d.slice(0, c)
                        }
                        const f = new u(p, d);
                        if (f === t) return null !== s && s.set(t, e, t), t;
                        if (f === e) return null !== s && s.set(t, e, e), e;
                        (function(t) {
                            const e = new i;
                            for (let n = 0; n < t.length; n++) {
                                const s = t[n];
                                e.containsKey(s) || e.put(s, s)
                            }
                            for (let n = 0; n < t.length; n++) t[n] = e.get(t[n])
                        })(p), null !== s && s.set(t, e, f);
                        return f
                    }(t, e, n, s)
            }
            e.exports = {
                merge: h,
                PredictionContext: a,
                PredictionContextCache: class {
                    constructor() {
                        this.cache = new i
                    }
                    add(t) {
                        if (t === a.EMPTY) return a.EMPTY;
                        const e = this.cache.get(t) || null;
                        return null !== e ? e : (this.cache.put(t, t), t)
                    }
                    get(t) {
                        return this.cache.get(t) || null
                    }
                    get length() {
                        return this.cache.length
                    }
                },
                SingletonPredictionContext: l,
                predictionContextFromRuleContext: function t(e, n) {
                    if (null == n && (n = s.EMPTY), null === n.parentCtx || n === s.EMPTY) return a.EMPTY;
                    const r = t(e, n.parentCtx),
                        i = e.states[n.invokingState].transitions[0];
                    return l.create(r, i.followState.stateNumber)
                },
                getCachedPredictionContext: function t(e, n, s) {
                    if (e.isEmpty()) return e;
                    let r = s.get(e) || null;
                    if (null !== r) return r;
                    if (null !== (r = n.get(e))) return s.put(e, r), r;
                    let i = !1,
                        o = [];
                    for (let r = 0; r < o.length; r++) {
                        const a = t(e.getParent(r), n, s);
                        if (i || a !== e.getParent(r)) {
                            if (!i) {
                                o = [];
                                for (let t = 0; t < e.length; t++) o[t] = e.getParent(t);
                                i = !0
                            }
                            o[r] = a
                        }
                    }
                    if (!i) return n.add(e), s.put(e, e), e;
                    let c = null;
                    return c = 0 === o.length ? a.EMPTY : 1 === o.length ? l.create(o[0], e.getReturnState(0)) : new u(o, e.returnStates), n.add(c), s.put(c, c), s.put(e, c), c
                }
            }
        }, {
            "./RuleContext": 17,
            "./Utils": 19
        }],
        16: [function(t, e, n) {
            const {
                Token: s
            } = t("./Token"), {
                ConsoleErrorListener: r
            } = t("./error/ErrorListener"), {
                ProxyErrorListener: i
            } = t("./error/ErrorListener");
            class o {
                constructor() {
                    this._listeners = [r.INSTANCE], this._interp = null, this._stateNumber = -1
                }
                checkVersion(t) {
                    "4.9.1" !== t && console.log("ANTLR runtime and generated code versions disagree: 4.9.1!=" + t)
                }
                addErrorListener(t) {
                    this._listeners.push(t)
                }
                removeErrorListeners() {
                    this._listeners = []
                }
                getTokenTypeMap() {
                    const t = this.getTokenNames();
                    if (null === t) throw "The current recognizer does not provide a list of token names.";
                    let e = this.tokenTypeMapCache[t];
                    return void 0 === e && ((e = t.reduce(function(t, e, n) {
                        t[e] = n
                    })).EOF = s.EOF, this.tokenTypeMapCache[t] = e), e
                }
                getRuleIndexMap() {
                    const t = this.ruleNames;
                    if (null === t) throw "The current recognizer does not provide a list of rule names.";
                    let e = this.ruleIndexMapCache[t];
                    return void 0 === e && (e = t.reduce(function(t, e, n) {
                        t[e] = n
                    }), this.ruleIndexMapCache[t] = e), e
                }
                getTokenType(t) {
                    const e = this.getTokenTypeMap()[t];
                    return void 0 !== e ? e : s.INVALID_TYPE
                }
                getErrorHeader(t) {
                    return "line " + t.getOffendingToken().line + ":" + t.getOffendingToken().column
                }
                getTokenErrorDisplay(t) {
                    if (null === t) return "<no token>";
                    let e = t.text;
                    return null === e && (e = t.type === s.EOF ? "<EOF>" : "<" + t.type + ">"), "'" + (e = e.replace("\n", "\\n").replace("\r", "\\r").replace("\t", "\\t")) + "'"
                }
                getErrorListenerDispatch() {
                    return new i(this._listeners)
                }
                sempred(t, e, n) {
                    return !0
                }
                precpred(t, e) {
                    return !0
                }
                get state() {
                    return this._stateNumber
                }
                set state(t) {
                    this._stateNumber = t
                }
            }
            o.tokenTypeMapCache = {}, o.ruleIndexMapCache = {}, e.exports = o
        }, {
            "./Token": 18,
            "./error/ErrorListener": 41
        }],
        17: [function(t, e, n) {
            const {
                RuleNode: s
            } = t("./tree/Tree"), {
                INVALID_INTERVAL: r
            } = t("./tree/Tree"), i = t("./tree/Trees");
            e.exports = class extends s {
                constructor(t, e) {
                    super(), this.parentCtx = t || null, this.invokingState = e || -1
                }
                depth() {
                    let t = 0,
                        e = this;
                    for (; null !== e;) e = e.parentCtx, t += 1;
                    return t
                }
                isEmpty() {
                    return -1 === this.invokingState
                }
                getSourceInterval() {
                    return r
                }
                getRuleContext() {
                    return this
                }
                getPayload() {
                    return this
                }
                getText() {
                    return 0 === this.getChildCount() ? "" : this.children.map(function(t) {
                        return t.getText()
                    }).join("")
                }
                getAltNumber() {
                    return 0
                }
                setAltNumber(t) {}
                getChild(t) {
                    return null
                }
                getChildCount() {
                    return 0
                }
                accept(t) {
                    return t.visitChildren(this)
                }
                toStringTree(t, e) {
                    return i.toStringTree(this, t, e)
                }
                toString(t, e) {
                    t = t || null, e = e || null;
                    let n = this,
                        s = "[";
                    for (; null !== n && n !== e;) {
                        if (null === t) n.isEmpty() || (s += n.invokingState);
                        else {
                            const e = n.ruleIndex;
                            s += e >= 0 && e < t.length ? t[e] : "" + e
                        }
                        null === n.parentCtx || null === t && n.parentCtx.isEmpty() || (s += " "), n = n.parentCtx
                    }
                    return s += "]"
                }
            }
        }, {
            "./tree/Tree": 48,
            "./tree/Trees": 49
        }],
        18: [function(t, e, n) {
            class s {
                constructor() {
                    this.source = null, this.type = null, this.channel = null, this.start = null, this.stop = null, this.tokenIndex = null, this.line = null, this.column = null, this._text = null
                }
                getTokenSource() {
                    return this.source[0]
                }
                getInputStream() {
                    return this.source[1]
                }
                get text() {
                    return this._text
                }
                set text(t) {
                    this._text = t
                }
            }
            s.INVALID_TYPE = 0, s.EPSILON = -2, s.MIN_USER_TOKEN_TYPE = 1, s.EOF = -1, s.DEFAULT_CHANNEL = 0, s.HIDDEN_CHANNEL = 1;
            class r extends s {
                constructor(t, e, n, i, o) {
                    super(), this.source = void 0 !== t ? t : r.EMPTY_SOURCE, this.type = void 0 !== e ? e : null, this.channel = void 0 !== n ? n : s.DEFAULT_CHANNEL, this.start = void 0 !== i ? i : -1, this.stop = void 0 !== o ? o : -1, this.tokenIndex = -1, null !== this.source[0] ? (this.line = t[0].line, this.column = t[0].column) : this.column = -1
                }
                clone() {
                    const t = new r(this.source, this.type, this.channel, this.start, this.stop);
                    return t.tokenIndex = this.tokenIndex, t.line = this.line, t.column = this.column, t.text = this.text, t
                }
                toString() {
                    let t = this.text;
                    return t = null !== t ? t.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : "<no text>", "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + t + "',<" + this.type + ">" + (this.channel > 0 ? ",channel=" + this.channel : "") + "," + this.line + ":" + this.column + "]"
                }
                get text() {
                    if (null !== this._text) return this._text;
                    const t = this.getInputStream();
                    if (null === t) return null;
                    const e = t.size;
                    return this.start < e && this.stop < e ? t.getText(this.start, this.stop) : "<EOF>"
                }
                set text(t) {
                    this._text = t
                }
            }
            r.EMPTY_SOURCE = [null, null], e.exports = {
                Token: s,
                CommonToken: r
            }
        }, {}],
        19: [function(t, e, n) {
            function s(t) {
                return "[" + t.join(", ") + "]"
            }

            function r(t, e) {
                return t ? t.equals(e) : t == e
            }

            function i(t) {
                return t ? t.hashCode() : -1
            }
            String.prototype.seed = String.prototype.seed || Math.round(Math.random() * Math.pow(2, 32)), String.prototype.hashCode = function() {
                const t = this.toString();
                let e, n;
                const s = 3 & t.length,
                    r = t.length - s;
                let i = String.prototype.seed;
                const o = 3432918353,
                    a = 461845907;
                let l = 0;
                for (; l < r;) n = 255 & t.charCodeAt(l) | (255 & t.charCodeAt(++l)) << 8 | (255 & t.charCodeAt(++l)) << 16 | (255 & t.charCodeAt(++l)) << 24, ++l, i = 27492 + (65535 & (e = 5 * (65535 & (i = (i ^= n = (65535 & (n = (n = (65535 & n) * o + (((n >>> 16) * o & 65535) << 16) & 4294967295) << 15 | n >>> 17)) * a + (((n >>> 16) * a & 65535) << 16) & 4294967295) << 13 | i >>> 19)) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (e >>> 16) & 65535) << 16);
                switch (n = 0, s) {
                    case 3:
                        n ^= (255 & t.charCodeAt(l + 2)) << 16;
                    case 2:
                        n ^= (255 & t.charCodeAt(l + 1)) << 8;
                    case 1:
                        i ^= n = (65535 & (n = (n = (65535 & (n ^= 255 & t.charCodeAt(l))) * o + (((n >>> 16) * o & 65535) << 16) & 4294967295) << 15 | n >>> 17)) * a + (((n >>> 16) * a & 65535) << 16) & 4294967295
                }
                return i ^= t.length, i = 2246822507 * (65535 & (i ^= i >>> 16)) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295, i = 3266489909 * (65535 & (i ^= i >>> 13)) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295, (i ^= i >>> 16) >>> 0
            };
            class o {
                constructor() {
                    this.data = []
                }
                add(t) {
                    this.data[t] = !0
                }
                or(t) {
                    const e = this;
                    Object.keys(t.data).map(function(t) {
                        e.add(t)
                    })
                }
                remove(t) {
                    delete this.data[t]
                }
                contains(t) {
                    return !0 === this.data[t]
                }
                values() {
                    return Object.keys(this.data)
                }
                minValue() {
                    return Math.min.apply(null, this.values())
                }
                hashCode() {
                    const t = new l;
                    return t.update(this.values()), t.finish()
                }
                equals(t) {
                    return t instanceof o && this.hashCode() === t.hashCode()
                }
                toString() {
                    return "{" + this.values().join(", ") + "}"
                }
                get length() {
                    return this.values().length
                }
            }
            class a {
                constructor(t, e) {
                    this.data = {}, this.hashFunction = t || i, this.equalsFunction = e || r
                }
                put(t, e) {
                    const n = "hash_" + this.hashFunction(t);
                    if (n in this.data) {
                        const s = this.data[n];
                        for (let n = 0; n < s.length; n++) {
                            const r = s[n];
                            if (this.equalsFunction(t, r.key)) {
                                const t = r.value;
                                return r.value = e, t
                            }
                        }
                        return s.push({
                            key: t,
                            value: e
                        }), e
                    }
                    return this.data[n] = [{
                        key: t,
                        value: e
                    }], e
                }
                containsKey(t) {
                    const e = "hash_" + this.hashFunction(t);
                    if (e in this.data) {
                        const n = this.data[e];
                        for (let e = 0; e < n.length; e++) {
                            const s = n[e];
                            if (this.equalsFunction(t, s.key)) return !0
                        }
                    }
                    return !1
                }
                get(t) {
                    const e = "hash_" + this.hashFunction(t);
                    if (e in this.data) {
                        const n = this.data[e];
                        for (let e = 0; e < n.length; e++) {
                            const s = n[e];
                            if (this.equalsFunction(t, s.key)) return s.value
                        }
                    }
                    return null
                }
                entries() {
                    let t = [];
                    for (const e in this.data) 0 === e.indexOf("hash_") && (t = t.concat(this.data[e]));
                    return t
                }
                getKeys() {
                    return this.entries().map(function(t) {
                        return t.key
                    })
                }
                getValues() {
                    return this.entries().map(function(t) {
                        return t.value
                    })
                }
                toString() {
                    return "[" + this.entries().map(function(t) {
                        return "{" + t.key + ":" + t.value + "}"
                    }).join(", ") + "]"
                }
                get length() {
                    let t = 0;
                    for (const e in this.data) 0 === e.indexOf("hash_") && (t += this.data[e].length);
                    return t
                }
            }
            class l {
                constructor() {
                    this.count = 0, this.hash = 0
                }
                update() {
                    for (let t = 0; t < arguments.length; t++) {
                        const e = arguments[t];
                        if (null != e)
                            if (Array.isArray(e)) this.update.apply(this, e);
                            else {
                                let t = 0;
                                switch (typeof e) {
                                    case "undefined":
                                    case "function":
                                        continue;
                                    case "number":
                                    case "boolean":
                                        t = e;
                                        break;
                                    case "string":
                                        t = e.hashCode();
                                        break;
                                    default:
                                        e.updateHashCode ? e.updateHashCode(this) : console.log("No updateHashCode for " + e.toString());
                                        continue
                                }
                                t = (t *= 3432918353) << 15 | t >>> 17, t *= 461845907, this.count = this.count + 1;
                                let n = this.hash ^ t;
                                n = 5 * (n = n << 13 | n >>> 19) + 3864292196, this.hash = n
                            }
                    }
                }
                finish() {
                    let t = this.hash ^ 4 * this.count;
                    return t ^= t >>> 16, t *= 2246822507, t ^= t >>> 13, t *= 3266489909, t ^= t >>> 16
                }
            }
            e.exports = {
                Hash: l,
                Set: class {
                    constructor(t, e) {
                        this.data = {}, this.hashFunction = t || i, this.equalsFunction = e || r
                    }
                    add(t) {
                        const e = "hash_" + this.hashFunction(t);
                        if (e in this.data) {
                            const n = this.data[e];
                            for (let e = 0; e < n.length; e++)
                                if (this.equalsFunction(t, n[e])) return n[e];
                            return n.push(t), t
                        }
                        return this.data[e] = [t], t
                    }
                    contains(t) {
                        return null != this.get(t)
                    }
                    get(t) {
                        const e = "hash_" + this.hashFunction(t);
                        if (e in this.data) {
                            const n = this.data[e];
                            for (let e = 0; e < n.length; e++)
                                if (this.equalsFunction(t, n[e])) return n[e]
                        }
                        return null
                    }
                    values() {
                        let t = [];
                        for (const e in this.data) 0 === e.indexOf("hash_") && (t = t.concat(this.data[e]));
                        return t
                    }
                    toString() {
                        return s(this.values())
                    }
                    get length() {
                        let t = 0;
                        for (const e in this.data) 0 === e.indexOf("hash_") && (t += this.data[e].length);
                        return t
                    }
                },
                Map: a,
                BitSet: o,
                AltDict: class {
                    constructor() {
                        this.data = {}
                    }
                    get(t) {
                        return (t = "k-" + t) in this.data ? this.data[t] : null
                    }
                    put(t, e) {
                        t = "k-" + t, this.data[t] = e
                    }
                    values() {
                        const t = this.data;
                        return Object.keys(this.data).map(function(e) {
                            return t[e]
                        })
                    }
                },
                DoubleDict: class {
                    constructor(t) {
                        this.defaultMapCtor = t || a, this.cacheMap = new this.defaultMapCtor
                    }
                    get(t, e) {
                        const n = this.cacheMap.get(t) || null;
                        return null === n ? null : n.get(e) || null
                    }
                    set(t, e, n) {
                        let s = this.cacheMap.get(t) || null;
                        null === s && (s = new this.defaultMapCtor, this.cacheMap.put(t, s)), s.put(e, n)
                    }
                },
                hashStuff: function() {
                    const t = new l;
                    return t.update.apply(t, arguments), t.finish()
                },
                escapeWhitespace: function(t, e) {
                    return t = t.replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r"), e && (t = t.replace(/ /g, "·")), t
                },
                arrayToString: s,
                titleCase: function(t) {
                    return t.replace(/\w\S*/g, function(t) {
                        return t.charAt(0).toUpperCase() + t.substr(1)
                    })
                },
                equalArrays: function(t, e) {
                    if (!Array.isArray(t) || !Array.isArray(e)) return !1;
                    if (t == e) return !0;
                    if (t.length != e.length) return !1;
                    for (let n = 0; n < t.length; n++)
                        if (!(t[n] == e[n] || t[n].equals && t[n].equals(e[n]))) return !1;
                    return !0
                }
            }
        }, {}],
        20: [function(t, e, n) {
            const s = t("./../LL1Analyzer"),
                {
                    IntervalSet: r
                } = t("./../IntervalSet"),
                {
                    Token: i
                } = t("./../Token");
            class o {
                constructor(t, e) {
                    this.grammarType = t, this.maxTokenType = e, this.states = [], this.decisionToState = [], this.ruleToStartState = [], this.ruleToStopState = null, this.modeNameToStartState = {}, this.ruleToTokenType = null, this.lexerActions = null, this.modeToStartState = []
                }
                nextTokensInContext(t, e) {
                    return new s(this).LOOK(t, null, e)
                }
                nextTokensNoContext(t) {
                    return null !== t.nextTokenWithinRule ? t.nextTokenWithinRule : (t.nextTokenWithinRule = this.nextTokensInContext(t, null), t.nextTokenWithinRule.readOnly = !0, t.nextTokenWithinRule)
                }
                nextTokens(t, e) {
                    return void 0 === e ? this.nextTokensNoContext(t) : this.nextTokensInContext(t, e)
                }
                addState(t) {
                    null !== t && (t.atn = this, t.stateNumber = this.states.length), this.states.push(t)
                }
                removeState(t) {
                    this.states[t.stateNumber] = null
                }
                defineDecisionState(t) {
                    return this.decisionToState.push(t), t.decision = this.decisionToState.length - 1, t.decision
                }
                getDecisionState(t) {
                    return 0 === this.decisionToState.length ? null : this.decisionToState[t]
                }
                getExpectedTokens(t, e) {
                    if (t < 0 || t >= this.states.length) throw "Invalid state number.";
                    const n = this.states[t];
                    let s = this.nextTokens(n);
                    if (!s.contains(i.EPSILON)) return s;
                    const o = new r;
                    for (o.addSet(s), o.removeOne(i.EPSILON); null !== e && e.invokingState >= 0 && s.contains(i.EPSILON);) {
                        const t = this.states[e.invokingState].transitions[0];
                        s = this.nextTokens(t.followState), o.addSet(s), o.removeOne(i.EPSILON), e = e.parentCtx
                    }
                    return s.contains(i.EPSILON) && o.addOne(i.EOF), o
                }
            }
            o.INVALID_ALT_NUMBER = 0, e.exports = o
        }, {
            "./../IntervalSet": 10,
            "./../LL1Analyzer": 11,
            "./../Token": 18
        }],
        21: [function(t, e, n) {
            const {
                DecisionState: s
            } = t("./ATNState"), {
                SemanticContext: r
            } = t("./SemanticContext"), {
                Hash: i
            } = t("../Utils");

            function o(t, e) {
                if (null === t) {
                    const t = {
                        state: null,
                        alt: null,
                        context: null,
                        semanticContext: null
                    };
                    return e && (t.reachesIntoOuterContext = 0), t
                } {
                    const n = {};
                    return n.state = t.state || null, n.alt = void 0 === t.alt ? null : t.alt, n.context = t.context || null, n.semanticContext = t.semanticContext || null, e && (n.reachesIntoOuterContext = t.reachesIntoOuterContext || 0, n.precedenceFilterSuppressed = t.precedenceFilterSuppressed || !1), n
                }
            }
            class a {
                constructor(t, e) {
                    this.checkContext(t, e), t = o(t), e = o(e, !0), this.state = null !== t.state ? t.state : e.state, this.alt = null !== t.alt ? t.alt : e.alt, this.context = null !== t.context ? t.context : e.context, this.semanticContext = null !== t.semanticContext ? t.semanticContext : null !== e.semanticContext ? e.semanticContext : r.NONE, this.reachesIntoOuterContext = e.reachesIntoOuterContext, this.precedenceFilterSuppressed = e.precedenceFilterSuppressed
                }
                checkContext(t, e) {
                    null !== t.context && void 0 !== t.context || null !== e && null !== e.context && void 0 !== e.context || (this.context = null)
                }
                hashCode() {
                    const t = new i;
                    return this.updateHashCode(t), t.finish()
                }
                updateHashCode(t) {
                    t.update(this.state.stateNumber, this.alt, this.context, this.semanticContext)
                }
                equals(t) {
                    return this === t || t instanceof a && (this.state.stateNumber === t.state.stateNumber && this.alt === t.alt && (null === this.context ? null === t.context : this.context.equals(t.context)) && this.semanticContext.equals(t.semanticContext) && this.precedenceFilterSuppressed === t.precedenceFilterSuppressed)
                }
                hashCodeForConfigSet() {
                    const t = new i;
                    return t.update(this.state.stateNumber, this.alt, this.semanticContext), t.finish()
                }
                equalsForConfigSet(t) {
                    return this === t || t instanceof a && (this.state.stateNumber === t.state.stateNumber && this.alt === t.alt && this.semanticContext.equals(t.semanticContext))
                }
                toString() {
                    return "(" + this.state + "," + this.alt + (null !== this.context ? ",[" + this.context.toString() + "]" : "") + (this.semanticContext !== r.NONE ? "," + this.semanticContext.toString() : "") + (this.reachesIntoOuterContext > 0 ? ",up=" + this.reachesIntoOuterContext : "") + ")"
                }
            }
            class l extends a {
                constructor(t, e) {
                    super(t, e);
                    const n = t.lexerActionExecutor || null;
                    return this.lexerActionExecutor = n || (null !== e ? e.lexerActionExecutor : null), this.passedThroughNonGreedyDecision = null !== e && this.checkNonGreedyDecision(e, this.state), this.hashCodeForConfigSet = l.prototype.hashCode, this.equalsForConfigSet = l.prototype.equals, this
                }
                updateHashCode(t) {
                    t.update(this.state.stateNumber, this.alt, this.context, this.semanticContext, this.passedThroughNonGreedyDecision, this.lexerActionExecutor)
                }
                equals(t) {
                    return this === t || t instanceof l && this.passedThroughNonGreedyDecision == t.passedThroughNonGreedyDecision && (this.lexerActionExecutor ? this.lexerActionExecutor.equals(t.lexerActionExecutor) : !t.lexerActionExecutor) && super.equals(t)
                }
                checkNonGreedyDecision(t, e) {
                    return t.passedThroughNonGreedyDecision || e instanceof s && e.nonGreedy
                }
            }
            e.exports.ATNConfig = a, e.exports.LexerATNConfig = l
        }, {
            "../Utils": 19,
            "./ATNState": 26,
            "./SemanticContext": 33
        }],
        22: [function(t, e, n) {
            const s = t("./ATN"),
                r = t("./../Utils"),
                {
                    SemanticContext: i
                } = t("./SemanticContext"),
                {
                    merge: o
                } = t("./../PredictionContext");

            function a(t) {
                return t.hashCodeForConfigSet()
            }

            function l(t, e) {
                return t === e || null !== t && null !== e && t.equalsForConfigSet(e)
            }
            class c {
                constructor(t) {
                    this.configLookup = new r.Set(a, l), this.fullCtx = void 0 === t || t, this.readOnly = !1, this.configs = [], this.uniqueAlt = 0, this.conflictingAlts = null, this.hasSemanticContext = !1, this.dipsIntoOuterContext = !1, this.cachedHashCode = -1
                }
                add(t, e) {
                    if (void 0 === e && (e = null), this.readOnly) throw "This set is readonly";
                    t.semanticContext !== i.NONE && (this.hasSemanticContext = !0), t.reachesIntoOuterContext > 0 && (this.dipsIntoOuterContext = !0);
                    const n = this.configLookup.add(t);
                    if (n === t) return this.cachedHashCode = -1, this.configs.push(t), !0;
                    const s = !this.fullCtx,
                        r = o(n.context, t.context, s, e);
                    return n.reachesIntoOuterContext = Math.max(n.reachesIntoOuterContext, t.reachesIntoOuterContext), t.precedenceFilterSuppressed && (n.precedenceFilterSuppressed = !0), n.context = r, !0
                }
                getStates() {
                    const t = new r.Set;
                    for (let e = 0; e < this.configs.length; e++) t.add(this.configs[e].state);
                    return t
                }
                getPredicates() {
                    const t = [];
                    for (let e = 0; e < this.configs.length; e++) {
                        const n = this.configs[e].semanticContext;
                        n !== i.NONE && t.push(n.semanticContext)
                    }
                    return t
                }
                optimizeConfigs(t) {
                    if (this.readOnly) throw "This set is readonly";
                    if (0 !== this.configLookup.length)
                        for (let e = 0; e < this.configs.length; e++) {
                            const n = this.configs[e];
                            n.context = t.getCachedContext(n.context)
                        }
                }
                addAll(t) {
                    for (let e = 0; e < t.length; e++) this.add(t[e]);
                    return !1
                }
                equals(t) {
                    return this === t || t instanceof c && r.equalArrays(this.configs, t.configs) && this.fullCtx === t.fullCtx && this.uniqueAlt === t.uniqueAlt && this.conflictingAlts === t.conflictingAlts && this.hasSemanticContext === t.hasSemanticContext && this.dipsIntoOuterContext === t.dipsIntoOuterContext
                }
                hashCode() {
                    const t = new r.Hash;
                    return t.update(this.configs), t.finish()
                }
                updateHashCode(t) {
                    this.readOnly ? (-1 === this.cachedHashCode && (this.cachedHashCode = this.hashCode()), t.update(this.cachedHashCode)) : t.update(this.hashCode())
                }
                isEmpty() {
                    return 0 === this.configs.length
                }
                contains(t) {
                    if (null === this.configLookup) throw "This method is not implemented for readonly sets.";
                    return this.configLookup.contains(t)
                }
                containsFast(t) {
                    if (null === this.configLookup) throw "This method is not implemented for readonly sets.";
                    return this.configLookup.containsFast(t)
                }
                clear() {
                    if (this.readOnly) throw "This set is readonly";
                    this.configs = [], this.cachedHashCode = -1, this.configLookup = new r.Set
                }
                setReadonly(t) {
                    this.readOnly = t, t && (this.configLookup = null)
                }
                toString() {
                    return r.arrayToString(this.configs) + (this.hasSemanticContext ? ",hasSemanticContext=" + this.hasSemanticContext : "") + (this.uniqueAlt !== s.INVALID_ALT_NUMBER ? ",uniqueAlt=" + this.uniqueAlt : "") + (null !== this.conflictingAlts ? ",conflictingAlts=" + this.conflictingAlts : "") + (this.dipsIntoOuterContext ? ",dipsIntoOuterContext" : "")
                }
                get items() {
                    return this.configs
                }
                get length() {
                    return this.configs.length
                }
            }
            e.exports = {
                ATNConfigSet: c,
                OrderedATNConfigSet: class extends c {
                    constructor() {
                        super(), this.configLookup = new r.Set
                    }
                }
            }
        }, {
            "./../PredictionContext": 15,
            "./../Utils": 19,
            "./ATN": 20,
            "./SemanticContext": 33
        }],
        23: [function(t, e, n) {
            class s {
                constructor(t) {
                    void 0 === t && (t = null), this.readOnly = !1, this.verifyATN = null === t || t.verifyATN, this.generateRuleBypassTransitions = null !== t && t.generateRuleBypassTransitions
                }
            }
            s.defaultOptions = new s, s.defaultOptions.readOnly = !0, e.exports = s
        }, {}],
        24: [function(t, e, n) {
            const {
                Token: s
            } = t("./../Token"), r = t("./ATN"), i = t("./ATNType"), {
                ATNState: o,
                BasicState: a,
                DecisionState: l,
                BlockStartState: c,
                BlockEndState: u,
                LoopEndState: h,
                RuleStartState: d,
                RuleStopState: p,
                TokensStartState: f,
                PlusLoopbackState: g,
                StarLoopbackState: T,
                StarLoopEntryState: x,
                PlusBlockStartState: S,
                StarBlockStartState: m,
                BasicBlockStartState: C
            } = t("./ATNState"), {
                Transition: E,
                AtomTransition: A,
                SetTransition: _,
                NotSetTransition: y,
                RuleTransition: N,
                RangeTransition: k,
                ActionTransition: I,
                EpsilonTransition: L,
                WildcardTransition: v,
                PredicateTransition: O,
                PrecedencePredicateTransition: P
            } = t("./Transition"), {
                IntervalSet: R
            } = t("./../IntervalSet"), F = t("./ATNDeserializationOptions"), {
                LexerActionType: w,
                LexerSkipAction: b,
                LexerChannelAction: D,
                LexerCustomAction: M,
                LexerMoreAction: U,
                LexerTypeAction: B,
                LexerPushModeAction: z,
                LexerPopModeAction: V,
                LexerModeAction: H
            } = t("./LexerAction"), q = "59627784-3BE5-417A-B9EB-8131A7286089", Y = ["AADB8D7E-AEEF-4415-AD2B-8204D6CF042E", q], K = 3, G = q;

            function W(t, e) {
                const n = [];
                return n[t - 1] = e, n.map(function(t) {
                    return e
                })
            }
            const j = function() {
                const t = [];
                for (let e = 0; e < 256; e++) t[e] = (e + 256).toString(16).substr(1).toUpperCase();
                return t
            }();
            e.exports = class {
                constructor(t) {
                    null == t && (t = F.defaultOptions), this.deserializationOptions = t, this.stateFactories = null, this.actionFactories = null
                }
                isFeatureSupported(t, e) {
                    const n = Y.indexOf(t);
                    return !(n < 0) && Y.indexOf(e) >= n
                }
                deserialize(t) {
                    this.reset(t), this.checkVersion(), this.checkUUID();
                    const e = this.readATN();
                    this.readStates(e), this.readRules(e), this.readModes(e);
                    const n = [];
                    return this.readSets(e, n, this.readInt.bind(this)), this.isFeatureSupported(q, this.uuid) && this.readSets(e, n, this.readInt32.bind(this)), this.readEdges(e, n), this.readDecisions(e), this.readLexerActions(e), this.markPrecedenceDecisions(e), this.verifyATN(e), this.deserializationOptions.generateRuleBypassTransitions && e.grammarType === i.PARSER && (this.generateRuleBypassTransitions(e), this.verifyATN(e)), e
                }
                reset(t) {
                    const e = t.split("").map(function(t) {
                        const e = t.charCodeAt(0);
                        return e > 1 ? e - 2 : e + 65534
                    });
                    e[0] = t.charCodeAt(0), this.data = e, this.pos = 0
                }
                checkVersion() {
                    const t = this.readInt();
                    if (t !== K) throw "Could not deserialize ATN with version " + t + " (expected " + K + ")."
                }
                checkUUID() {
                    const t = this.readUUID();
                    if (Y.indexOf(t) < 0) throw G;
                    this.uuid = t
                }
                readATN() {
                    const t = this.readInt(),
                        e = this.readInt();
                    return new r(t, e)
                }
                readStates(t) {
                    let e, n, s;
                    const r = [],
                        i = [],
                        a = this.readInt();
                    for (let e = 0; e < a; e++) {
                        const e = this.readInt();
                        if (e === o.INVALID_TYPE) {
                            t.addState(null);
                            continue
                        }
                        let n = this.readInt();
                        65535 === n && (n = -1);
                        const s = this.stateFactory(e, n);
                        if (e === o.LOOP_END) {
                            const t = this.readInt();
                            r.push([s, t])
                        } else if (s instanceof c) {
                            const t = this.readInt();
                            i.push([s, t])
                        }
                        t.addState(s)
                    }
                    for (e = 0; e < r.length; e++)(n = r[e])[0].loopBackState = t.states[n[1]];
                    for (e = 0; e < i.length; e++)(n = i[e])[0].endState = t.states[n[1]];
                    let l = this.readInt();
                    for (e = 0; e < l; e++) s = this.readInt(), t.states[s].nonGreedy = !0;
                    let u = this.readInt();
                    for (e = 0; e < u; e++) s = this.readInt(), t.states[s].isPrecedenceRule = !0
                }
                readRules(t) {
                    let e;
                    const n = this.readInt();
                    for (t.grammarType === i.LEXER && (t.ruleToTokenType = W(n, 0)), t.ruleToStartState = W(n, 0), e = 0; e < n; e++) {
                        const n = this.readInt();
                        if (t.ruleToStartState[e] = t.states[n], t.grammarType === i.LEXER) {
                            let n = this.readInt();
                            65535 === n && (n = s.EOF), t.ruleToTokenType[e] = n
                        }
                    }
                    for (t.ruleToStopState = W(n, 0), e = 0; e < t.states.length; e++) {
                        const n = t.states[e];
                        n instanceof p && (t.ruleToStopState[n.ruleIndex] = n, t.ruleToStartState[n.ruleIndex].stopState = n)
                    }
                }
                readModes(t) {
                    const e = this.readInt();
                    for (let n = 0; n < e; n++) {
                        let e = this.readInt();
                        t.modeToStartState.push(t.states[e])
                    }
                }
                readSets(t, e, n) {
                    const s = this.readInt();
                    for (let t = 0; t < s; t++) {
                        const t = new R;
                        e.push(t);
                        const s = this.readInt();
                        0 !== this.readInt() && t.addOne(-1);
                        for (let e = 0; e < s; e++) {
                            const e = n(),
                                s = n();
                            t.addRange(e, s)
                        }
                    }
                }
                readEdges(t, e) {
                    let n, s, r, i, o;
                    const a = this.readInt();
                    for (n = 0; n < a; n++) {
                        const n = this.readInt(),
                            s = this.readInt(),
                            r = this.readInt(),
                            o = this.readInt(),
                            a = this.readInt(),
                            l = this.readInt();
                        i = this.edgeFactory(t, r, n, s, o, a, l, e), t.states[n].addTransition(i)
                    }
                    for (n = 0; n < t.states.length; n++)
                        for (r = t.states[n], s = 0; s < r.transitions.length; s++) {
                            const e = r.transitions[s];
                            if (!(e instanceof N)) continue;
                            let n = -1;
                            t.ruleToStartState[e.target.ruleIndex].isPrecedenceRule && 0 === e.precedence && (n = e.target.ruleIndex), i = new L(e.followState, n), t.ruleToStopState[e.target.ruleIndex].addTransition(i)
                        }
                    for (n = 0; n < t.states.length; n++) {
                        if ((r = t.states[n]) instanceof c) {
                            if (null === r.endState) throw "IllegalState";
                            if (null !== r.endState.startState) throw "IllegalState";
                            r.endState.startState = r
                        }
                        if (r instanceof g)
                            for (s = 0; s < r.transitions.length; s++)(o = r.transitions[s].target) instanceof S && (o.loopBackState = r);
                        else if (r instanceof T)
                            for (s = 0; s < r.transitions.length; s++)(o = r.transitions[s].target) instanceof x && (o.loopBackState = r)
                    }
                }
                readDecisions(t) {
                    const e = this.readInt();
                    for (let n = 0; n < e; n++) {
                        const e = this.readInt(),
                            s = t.states[e];
                        t.decisionToState.push(s), s.decision = n
                    }
                }
                readLexerActions(t) {
                    if (t.grammarType === i.LEXER) {
                        const e = this.readInt();
                        t.lexerActions = W(e, null);
                        for (let n = 0; n < e; n++) {
                            const e = this.readInt();
                            let s = this.readInt();
                            65535 === s && (s = -1);
                            let r = this.readInt();
                            65535 === r && (r = -1), t.lexerActions[n] = this.lexerActionFactory(e, s, r)
                        }
                    }
                }
                generateRuleBypassTransitions(t) {
                    let e;
                    const n = t.ruleToStartState.length;
                    for (e = 0; e < n; e++) t.ruleToTokenType[e] = t.maxTokenType + e + 1;
                    for (e = 0; e < n; e++) this.generateRuleBypassTransition(t, e)
                }
                generateRuleBypassTransition(t, e) {
                    let n, s;
                    const r = new C;
                    r.ruleIndex = e, t.addState(r);
                    const i = new u;
                    i.ruleIndex = e, t.addState(i), r.endState = i, t.defineDecisionState(r), i.startState = r;
                    let o = null,
                        l = null;
                    if (t.ruleToStartState[e].isPrecedenceRule) {
                        for (l = null, n = 0; n < t.states.length; n++)
                            if (s = t.states[n], this.stateIsEndStateFor(s, e)) {
                                l = s, o = s.loopBackState.transitions[0];
                                break
                            } if (null === o) throw "Couldn't identify final state of the precedence rule prefix section."
                    } else l = t.ruleToStopState[e];
                    for (n = 0; n < t.states.length; n++) {
                        s = t.states[n];
                        for (let t = 0; t < s.transitions.length; t++) {
                            const e = s.transitions[t];
                            e !== o && e.target === l && (e.target = i)
                        }
                    }
                    const c = t.ruleToStartState[e],
                        h = c.transitions.length;
                    for (; h > 0;) r.addTransition(c.transitions[h - 1]), c.transitions = c.transitions.slice(-1);
                    t.ruleToStartState[e].addTransition(new L(r)), i.addTransition(new L(l));
                    const d = new a;
                    t.addState(d), d.addTransition(new A(i, t.ruleToTokenType[e])), r.addTransition(new L(d))
                }
                stateIsEndStateFor(t, e) {
                    if (t.ruleIndex !== e) return null;
                    if (!(t instanceof x)) return null;
                    const n = t.transitions[t.transitions.length - 1].target;
                    return n instanceof h && n.epsilonOnlyTransitions && n.transitions[0].target instanceof p ? t : null
                }
                markPrecedenceDecisions(t) {
                    for (let e = 0; e < t.states.length; e++) {
                        const n = t.states[e];
                        if (n instanceof x && t.ruleToStartState[n.ruleIndex].isPrecedenceRule) {
                            const t = n.transitions[n.transitions.length - 1].target;
                            t instanceof h && t.epsilonOnlyTransitions && t.transitions[0].target instanceof p && (n.isPrecedenceDecision = !0)
                        }
                    }
                }
                verifyATN(t) {
                    if (this.deserializationOptions.verifyATN)
                        for (let e = 0; e < t.states.length; e++) {
                            const n = t.states[e];
                            if (null !== n)
                                if (this.checkCondition(n.epsilonOnlyTransitions || n.transitions.length <= 1), n instanceof S) this.checkCondition(null !== n.loopBackState);
                                else if (n instanceof x)
                                if (this.checkCondition(null !== n.loopBackState), this.checkCondition(2 === n.transitions.length), n.transitions[0].target instanceof m) this.checkCondition(n.transitions[1].target instanceof h), this.checkCondition(!n.nonGreedy);
                                else {
                                    if (!(n.transitions[0].target instanceof h)) throw "IllegalState";
                                    this.checkCondition(n.transitions[1].target instanceof m), this.checkCondition(n.nonGreedy)
                                }
                            else n instanceof T ? (this.checkCondition(1 === n.transitions.length), this.checkCondition(n.transitions[0].target instanceof x)) : n instanceof h ? this.checkCondition(null !== n.loopBackState) : n instanceof d ? this.checkCondition(null !== n.stopState) : n instanceof c ? this.checkCondition(null !== n.endState) : n instanceof u ? this.checkCondition(null !== n.startState) : n instanceof l ? this.checkCondition(n.transitions.length <= 1 || n.decision >= 0) : this.checkCondition(n.transitions.length <= 1 || n instanceof p)
                        }
                }
                checkCondition(t, e) {
                    if (!t) throw null == e && (e = "IllegalState"), e
                }
                readInt() {
                    return this.data[this.pos++]
                }
                readInt32() {
                    return this.readInt() | this.readInt() << 16
                }
                readLong() {
                    return 4294967295 & this.readInt32() | this.readInt32() << 32
                }
                readUUID() {
                    const t = [];
                    for (let e = 7; e >= 0; e--) {
                        const n = this.readInt();
                        t[2 * e + 1] = 255 & n, t[2 * e] = n >> 8 & 255
                    }
                    return j[t[0]] + j[t[1]] + j[t[2]] + j[t[3]] + "-" + j[t[4]] + j[t[5]] + "-" + j[t[6]] + j[t[7]] + "-" + j[t[8]] + j[t[9]] + "-" + j[t[10]] + j[t[11]] + j[t[12]] + j[t[13]] + j[t[14]] + j[t[15]]
                }
                edgeFactory(t, e, n, r, i, o, a, l) {
                    const c = t.states[r];
                    switch (e) {
                        case E.EPSILON:
                            return new L(c);
                        case E.RANGE:
                            return new k(c, 0 !== a ? s.EOF : i, o);
                        case E.RULE:
                            return new N(t.states[i], o, a, c);
                        case E.PREDICATE:
                            return new O(c, i, o, 0 !== a);
                        case E.PRECEDENCE:
                            return new P(c, i);
                        case E.ATOM:
                            return new A(c, 0 !== a ? s.EOF : i);
                        case E.ACTION:
                            return new I(c, i, o, 0 !== a);
                        case E.SET:
                            return new _(c, l[i]);
                        case E.NOT_SET:
                            return new y(c, l[i]);
                        case E.WILDCARD:
                            return new v(c);
                        default:
                            throw "The specified transition type: " + e + " is not valid."
                    }
                }
                stateFactory(t, e) {
                    if (null === this.stateFactories) {
                        const t = [];
                        t[o.INVALID_TYPE] = null, t[o.BASIC] = (() => new a), t[o.RULE_START] = (() => new d), t[o.BLOCK_START] = (() => new C), t[o.PLUS_BLOCK_START] = (() => new S), t[o.STAR_BLOCK_START] = (() => new m), t[o.TOKEN_START] = (() => new f), t[o.RULE_STOP] = (() => new p), t[o.BLOCK_END] = (() => new u), t[o.STAR_LOOP_BACK] = (() => new T), t[o.STAR_LOOP_ENTRY] = (() => new x), t[o.PLUS_LOOP_BACK] = (() => new g), t[o.LOOP_END] = (() => new h), this.stateFactories = t
                    }
                    if (t > this.stateFactories.length || null === this.stateFactories[t]) throw "The specified state type " + t + " is not valid."; {
                        const n = this.stateFactories[t]();
                        if (null !== n) return n.ruleIndex = e, n
                    }
                }
                lexerActionFactory(t, e, n) {
                    if (null === this.actionFactories) {
                        const t = [];
                        t[w.CHANNEL] = ((t, e) => new D(t)), t[w.CUSTOM] = ((t, e) => new M(t, e)), t[w.MODE] = ((t, e) => new H(t)), t[w.MORE] = ((t, e) => U.INSTANCE), t[w.POP_MODE] = ((t, e) => V.INSTANCE), t[w.PUSH_MODE] = ((t, e) => new z(t)), t[w.SKIP] = ((t, e) => b.INSTANCE), t[w.TYPE] = ((t, e) => new B(t)), this.actionFactories = t
                    }
                    if (t > this.actionFactories.length || null === this.actionFactories[t]) throw "The specified lexer action type " + t + " is not valid.";
                    return this.actionFactories[t](e, n)
                }
            }
        }, {
            "./../IntervalSet": 10,
            "./../Token": 18,
            "./ATN": 20,
            "./ATNDeserializationOptions": 23,
            "./ATNState": 26,
            "./ATNType": 27,
            "./LexerAction": 29,
            "./Transition": 34
        }],
        25: [function(t, e, n) {
            const {
                DFAState: s
            } = t("./../dfa/DFAState"), {
                ATNConfigSet: r
            } = t("./ATNConfigSet"), {
                getCachedPredictionContext: i
            } = t("./../PredictionContext"), {
                Map: o
            } = t("./../Utils");
            class a {
                constructor(t, e) {
                    return this.atn = t, this.sharedContextCache = e, this
                }
                getCachedContext(t) {
                    if (null === this.sharedContextCache) return t;
                    const e = new o;
                    return i(t, this.sharedContextCache, e)
                }
            }
            a.ERROR = new s(2147483647, new r), e.exports = a
        }, {
            "./../PredictionContext": 15,
            "./../Utils": 19,
            "./../dfa/DFAState": 38,
            "./ATNConfigSet": 22
        }],
        26: [function(t, e, n) {
            class s {
                constructor() {
                    this.atn = null, this.stateNumber = s.INVALID_STATE_NUMBER, this.stateType = null, this.ruleIndex = 0, this.epsilonOnlyTransitions = !1, this.transitions = [], this.nextTokenWithinRule = null
                }
                toString() {
                    return this.stateNumber
                }
                equals(t) {
                    return t instanceof s && this.stateNumber === t.stateNumber
                }
                isNonGreedyExitState() {
                    return !1
                }
                addTransition(t, e) {
                    void 0 === e && (e = -1), 0 === this.transitions.length ? this.epsilonOnlyTransitions = t.isEpsilon : this.epsilonOnlyTransitions !== t.isEpsilon && (this.epsilonOnlyTransitions = !1), -1 === e ? this.transitions.push(t) : this.transitions.splice(e, 1, t)
                }
            }
            s.INVALID_TYPE = 0, s.BASIC = 1, s.RULE_START = 2, s.BLOCK_START = 3, s.PLUS_BLOCK_START = 4, s.STAR_BLOCK_START = 5, s.TOKEN_START = 6, s.RULE_STOP = 7, s.BLOCK_END = 8, s.STAR_LOOP_BACK = 9, s.STAR_LOOP_ENTRY = 10, s.PLUS_LOOP_BACK = 11, s.LOOP_END = 12, s.serializationNames = ["INVALID", "BASIC", "RULE_START", "BLOCK_START", "PLUS_BLOCK_START", "STAR_BLOCK_START", "TOKEN_START", "RULE_STOP", "BLOCK_END", "STAR_LOOP_BACK", "STAR_LOOP_ENTRY", "PLUS_LOOP_BACK", "LOOP_END"], s.INVALID_STATE_NUMBER = -1;
            class r extends s {
                constructor() {
                    return super(), this.decision = -1, this.nonGreedy = !1, this
                }
            }
            class i extends r {
                constructor() {
                    return super(), this.endState = null, this
                }
            }
            e.exports = {
                ATNState: s,
                BasicState: class extends s {
                    constructor() {
                        super(), this.stateType = s.BASIC
                    }
                },
                DecisionState: r,
                BlockStartState: i,
                BlockEndState: class extends s {
                    constructor() {
                        return super(), this.stateType = s.BLOCK_END, this.startState = null, this
                    }
                },
                LoopEndState: class extends s {
                    constructor() {
                        return super(), this.stateType = s.LOOP_END, this.loopBackState = null, this
                    }
                },
                RuleStartState: class extends s {
                    constructor() {
                        return super(), this.stateType = s.RULE_START, this.stopState = null, this.isPrecedenceRule = !1, this
                    }
                },
                RuleStopState: class extends s {
                    constructor() {
                        return super(), this.stateType = s.RULE_STOP, this
                    }
                },
                TokensStartState: class extends r {
                    constructor() {
                        return super(), this.stateType = s.TOKEN_START, this
                    }
                },
                PlusLoopbackState: class extends r {
                    constructor() {
                        return super(), this.stateType = s.PLUS_LOOP_BACK, this
                    }
                },
                StarLoopbackState: class extends s {
                    constructor() {
                        return super(), this.stateType = s.STAR_LOOP_BACK, this
                    }
                },
                StarLoopEntryState: class extends r {
                    constructor() {
                        return super(), this.stateType = s.STAR_LOOP_ENTRY, this.loopBackState = null, this.isPrecedenceDecision = null, this
                    }
                },
                PlusBlockStartState: class extends i {
                    constructor() {
                        return super(), this.stateType = s.PLUS_BLOCK_START, this.loopBackState = null, this
                    }
                },
                StarBlockStartState: class extends i {
                    constructor() {
                        return super(), this.stateType = s.STAR_BLOCK_START, this
                    }
                },
                BasicBlockStartState: class extends i {
                    constructor() {
                        return super(), this.stateType = s.BLOCK_START, this
                    }
                }
            }
        }, {}],
        27: [function(t, e, n) {
            e.exports = {
                LEXER: 0,
                PARSER: 1
            }
        }, {}],
        28: [function(t, e, n) {
            const {
                Token: s
            } = t("./../Token"), r = t("./../Lexer"), i = t("./ATN"), o = t("./ATNSimulator"), {
                DFAState: a
            } = t("./../dfa/DFAState"), {
                OrderedATNConfigSet: l
            } = t("./ATNConfigSet"), {
                PredictionContext: c
            } = t("./../PredictionContext"), {
                SingletonPredictionContext: u
            } = t("./../PredictionContext"), {
                RuleStopState: h
            } = t("./ATNState"), {
                LexerATNConfig: d
            } = t("./ATNConfig"), {
                Transition: p
            } = t("./Transition"), f = t("./LexerActionExecutor"), {
                LexerNoViableAltException: g
            } = t("./../error/Errors");

            function T(t) {
                t.index = -1, t.line = 0, t.column = -1, t.dfaState = null
            }
            class x {
                constructor() {
                    T(this)
                }
                reset() {
                    T(this)
                }
            }
            class S extends o {
                constructor(t, e, n, s) {
                    super(e, s), this.decisionToDFA = n, this.recog = t, this.startIndex = -1, this.line = 1, this.column = 0, this.mode = r.DEFAULT_MODE, this.prevAccept = new x
                }
                copyState(t) {
                    this.column = t.column, this.line = t.line, this.mode = t.mode, this.startIndex = t.startIndex
                }
                match(t, e) {
                    this.match_calls += 1, this.mode = e;
                    const n = t.mark();
                    try {
                        this.startIndex = t.index, this.prevAccept.reset();
                        const s = this.decisionToDFA[e];
                        return null === s.s0 ? this.matchATN(t) : this.execATN(t, s.s0)
                    } finally {
                        t.release(n)
                    }
                }
                reset() {
                    this.prevAccept.reset(), this.startIndex = -1, this.line = 1, this.column = 0, this.mode = r.DEFAULT_MODE
                }
                matchATN(t) {
                    const e = this.atn.modeToStartState[this.mode];
                    S.debug && console.log("matchATN mode " + this.mode + " start: " + e);
                    const n = this.mode,
                        s = this.computeStartState(t, e),
                        r = s.hasSemanticContext;
                    s.hasSemanticContext = !1;
                    const i = this.addDFAState(s);
                    r || (this.decisionToDFA[this.mode].s0 = i);
                    const o = this.execATN(t, i);
                    return S.debug && console.log("DFA after matchATN: " + this.decisionToDFA[n].toLexerString()), o
                }
                execATN(t, e) {
                    S.debug && console.log("start state closure=" + e.configs), e.isAcceptState && this.captureSimState(this.prevAccept, t, e);
                    let n = t.LA(1),
                        r = e;
                    for (;;) {
                        S.debug && console.log("execATN loop starting closure: " + r.configs);
                        let e = this.getExistingTargetState(r, n);
                        if (null === e && (e = this.computeTargetState(t, r, n)), e === o.ERROR) break;
                        if (n !== s.EOF && this.consume(t), e.isAcceptState && (this.captureSimState(this.prevAccept, t, e), n === s.EOF)) break;
                        n = t.LA(1), r = e
                    }
                    return this.failOrAccept(this.prevAccept, t, r.configs, n)
                }
                getExistingTargetState(t, e) {
                    if (null === t.edges || e < S.MIN_DFA_EDGE || e > S.MAX_DFA_EDGE) return null;
                    let n = t.edges[e - S.MIN_DFA_EDGE];
                    return void 0 === n && (n = null), S.debug && null !== n && console.log("reuse state " + t.stateNumber + " edge to " + n.stateNumber), n
                }
                computeTargetState(t, e, n) {
                    const s = new l;
                    return this.getReachableConfigSet(t, e.configs, s, n), 0 === s.items.length ? (s.hasSemanticContext || this.addDFAEdge(e, n, o.ERROR), o.ERROR) : this.addDFAEdge(e, n, null, s)
                }
                failOrAccept(t, e, n, r) {
                    if (null !== this.prevAccept.dfaState) {
                        const n = t.dfaState.lexerActionExecutor;
                        return this.accept(e, n, this.startIndex, t.index, t.line, t.column), t.dfaState.prediction
                    }
                    if (r === s.EOF && e.index === this.startIndex) return s.EOF;
                    throw new g(this.recog, e, this.startIndex, n)
                }
                getReachableConfigSet(t, e, n, r) {
                    let o = i.INVALID_ALT_NUMBER;
                    for (let i = 0; i < e.items.length; i++) {
                        const a = e.items[i],
                            l = a.alt === o;
                        if (!l || !a.passedThroughNonGreedyDecision) {
                            S.debug && console.log("testing %s at %s\n", this.getTokenName(r), a.toString(this.recog, !0));
                            for (let e = 0; e < a.state.transitions.length; e++) {
                                const i = a.state.transitions[e],
                                    c = this.getReachableTarget(i, r);
                                if (null !== c) {
                                    let e = a.lexerActionExecutor;
                                    null !== e && (e = e.fixOffsetBeforeMatch(t.index - this.startIndex));
                                    const i = r === s.EOF,
                                        u = new d({
                                            state: c,
                                            lexerActionExecutor: e
                                        }, a);
                                    this.closure(t, u, n, l, !0, i) && (o = a.alt)
                                }
                            }
                        }
                    }
                }
                accept(t, e, n, s, r, i) {
                    S.debug && console.log("ACTION %s\n", e), t.seek(s), this.line = r, this.column = i, null !== e && null !== this.recog && e.execute(this.recog, t, n)
                }
                getReachableTarget(t, e) {
                    return t.matches(e, 0, r.MAX_CHAR_VALUE) ? t.target : null
                }
                computeStartState(t, e) {
                    const n = c.EMPTY,
                        s = new l;
                    for (let r = 0; r < e.transitions.length; r++) {
                        const i = e.transitions[r].target,
                            o = new d({
                                state: i,
                                alt: r + 1,
                                context: n
                            }, null);
                        this.closure(t, o, s, !1, !1, !1)
                    }
                    return s
                }
                closure(t, e, n, s, r, i) {
                    let o = null;
                    if (S.debug && console.log("closure(" + e.toString(this.recog, !0) + ")"), e.state instanceof h) {
                        if (S.debug && (null !== this.recog ? console.log("closure at %s rule stop %s\n", this.recog.ruleNames[e.state.ruleIndex], e) : console.log("closure at rule stop %s\n", e)), null === e.context || e.context.hasEmptyPath()) {
                            if (null === e.context || e.context.isEmpty()) return n.add(e), !0;
                            n.add(new d({
                                state: e.state,
                                context: c.EMPTY
                            }, e)), s = !0
                        }
                        if (null !== e.context && !e.context.isEmpty())
                            for (let a = 0; a < e.context.length; a++)
                                if (e.context.getReturnState(a) !== c.EMPTY_RETURN_STATE) {
                                    const l = e.context.getParent(a),
                                        c = this.atn.states[e.context.getReturnState(a)];
                                    o = new d({
                                        state: c,
                                        context: l
                                    }, e), s = this.closure(t, o, n, s, r, i)
                                } return s
                    }
                    e.state.epsilonOnlyTransitions || s && e.passedThroughNonGreedyDecision || n.add(e);
                    for (let a = 0; a < e.state.transitions.length; a++) {
                        const l = e.state.transitions[a];
                        null !== (o = this.getEpsilonTarget(t, e, l, n, r, i)) && (s = this.closure(t, o, n, s, r, i))
                    }
                    return s
                }
                getEpsilonTarget(t, e, n, i, o, a) {
                    let l = null;
                    if (n.serializationType === p.RULE) {
                        const t = u.create(e.context, n.followState.stateNumber);
                        l = new d({
                            state: n.target,
                            context: t
                        }, e)
                    } else {
                        if (n.serializationType === p.PRECEDENCE) throw "Precedence predicates are not supported in lexers.";
                        if (n.serializationType === p.PREDICATE) S.debug && console.log("EVAL rule " + n.ruleIndex + ":" + n.predIndex), i.hasSemanticContext = !0, this.evaluatePredicate(t, n.ruleIndex, n.predIndex, o) && (l = new d({
                            state: n.target
                        }, e));
                        else if (n.serializationType === p.ACTION)
                            if (null === e.context || e.context.hasEmptyPath()) {
                                const t = f.append(e.lexerActionExecutor, this.atn.lexerActions[n.actionIndex]);
                                l = new d({
                                    state: n.target,
                                    lexerActionExecutor: t
                                }, e)
                            } else l = new d({
                                state: n.target
                            }, e);
                        else n.serializationType === p.EPSILON ? l = new d({
                            state: n.target
                        }, e) : n.serializationType !== p.ATOM && n.serializationType !== p.RANGE && n.serializationType !== p.SET || a && n.matches(s.EOF, 0, r.MAX_CHAR_VALUE) && (l = new d({
                            state: n.target
                        }, e))
                    }
                    return l
                }
                evaluatePredicate(t, e, n, s) {
                    if (null === this.recog) return !0;
                    if (!s) return this.recog.sempred(null, e, n);
                    const r = this.column,
                        i = this.line,
                        o = t.index,
                        a = t.mark();
                    try {
                        return this.consume(t), this.recog.sempred(null, e, n)
                    } finally {
                        this.column = r, this.line = i, t.seek(o), t.release(a)
                    }
                }
                captureSimState(t, e, n) {
                    t.index = e.index, t.line = this.line, t.column = this.column, t.dfaState = n
                }
                addDFAEdge(t, e, n, s) {
                    if (void 0 === n && (n = null), void 0 === s && (s = null), null === n && null !== s) {
                        const t = s.hasSemanticContext;
                        if (s.hasSemanticContext = !1, n = this.addDFAState(s), t) return n
                    }
                    return e < S.MIN_DFA_EDGE || e > S.MAX_DFA_EDGE ? n : (S.debug && console.log("EDGE " + t + " -> " + n + " upon " + e), null === t.edges && (t.edges = []), t.edges[e - S.MIN_DFA_EDGE] = n, n)
                }
                addDFAState(t) {
                    const e = new a(null, t);
                    let n = null;
                    for (let e = 0; e < t.items.length; e++) {
                        const s = t.items[e];
                        if (s.state instanceof h) {
                            n = s;
                            break
                        }
                    }
                    null !== n && (e.isAcceptState = !0, e.lexerActionExecutor = n.lexerActionExecutor, e.prediction = this.atn.ruleToTokenType[n.state.ruleIndex]);
                    const s = this.decisionToDFA[this.mode],
                        r = s.states.get(e);
                    if (null !== r) return r;
                    const i = e;
                    return i.stateNumber = s.states.length, t.setReadonly(!0), i.configs = t, s.states.add(i), i
                }
                getDFA(t) {
                    return this.decisionToDFA[t]
                }
                getText(t) {
                    return t.getText(this.startIndex, t.index - 1)
                }
                consume(t) {
                    t.LA(1) === "\n".charCodeAt(0) ? (this.line += 1, this.column = 0) : this.column += 1, t.consume()
                }
                getTokenName(t) {
                    return -1 === t ? "EOF" : "'" + String.fromCharCode(t) + "'"
                }
            }
            S.debug = !1, S.dfa_debug = !1, S.MIN_DFA_EDGE = 0, S.MAX_DFA_EDGE = 127, S.match_calls = 0, e.exports = S
        }, {
            "./../Lexer": 12,
            "./../PredictionContext": 15,
            "./../Token": 18,
            "./../dfa/DFAState": 38,
            "./../error/Errors": 43,
            "./ATN": 20,
            "./ATNConfig": 21,
            "./ATNConfigSet": 22,
            "./ATNSimulator": 25,
            "./ATNState": 26,
            "./LexerActionExecutor": 30,
            "./Transition": 34
        }],
        29: [function(t, e, n) {
            const s = {
                CHANNEL: 0,
                CUSTOM: 1,
                MODE: 2,
                MORE: 3,
                POP_MODE: 4,
                PUSH_MODE: 5,
                SKIP: 6,
                TYPE: 7
            };
            class r {
                constructor(t) {
                    this.actionType = t, this.isPositionDependent = !1
                }
                hashCode() {
                    const t = new Hash;
                    return this.updateHashCode(t), t.finish()
                }
                updateHashCode(t) {
                    t.update(this.actionType)
                }
                equals(t) {
                    return this === t
                }
            }
            class i extends r {
                constructor() {
                    super(s.SKIP)
                }
                execute(t) {
                    t.skip()
                }
                toString() {
                    return "skip"
                }
            }
            i.INSTANCE = new i;
            class o extends r {
                constructor(t) {
                    super(s.TYPE), this.type = t
                }
                execute(t) {
                    t.type = this.type
                }
                updateHashCode(t) {
                    t.update(this.actionType, this.type)
                }
                equals(t) {
                    return this === t || t instanceof o && this.type === t.type
                }
                toString() {
                    return "type(" + this.type + ")"
                }
            }
            class a extends r {
                constructor(t) {
                    super(s.PUSH_MODE), this.mode = t
                }
                execute(t) {
                    t.pushMode(this.mode)
                }
                updateHashCode(t) {
                    t.update(this.actionType, this.mode)
                }
                equals(t) {
                    return this === t || t instanceof a && this.mode === t.mode
                }
                toString() {
                    return "pushMode(" + this.mode + ")"
                }
            }
            class l extends r {
                constructor() {
                    super(s.POP_MODE)
                }
                execute(t) {
                    t.popMode()
                }
                toString() {
                    return "popMode"
                }
            }
            l.INSTANCE = new l;
            class c extends r {
                constructor() {
                    super(s.MORE)
                }
                execute(t) {
                    t.more()
                }
                toString() {
                    return "more"
                }
            }
            c.INSTANCE = new c;
            class u extends r {
                constructor(t) {
                    super(s.MODE), this.mode = t
                }
                execute(t) {
                    t.mode(this.mode)
                }
                updateHashCode(t) {
                    t.update(this.actionType, this.mode)
                }
                equals(t) {
                    return this === t || t instanceof u && this.mode === t.mode
                }
                toString() {
                    return "mode(" + this.mode + ")"
                }
            }
            class h extends r {
                constructor(t, e) {
                    super(s.CUSTOM), this.ruleIndex = t, this.actionIndex = e, this.isPositionDependent = !0
                }
                execute(t) {
                    t.action(null, this.ruleIndex, this.actionIndex)
                }
                updateHashCode(t) {
                    t.update(this.actionType, this.ruleIndex, this.actionIndex)
                }
                equals(t) {
                    return this === t || t instanceof h && (this.ruleIndex === t.ruleIndex && this.actionIndex === t.actionIndex)
                }
            }
            class d extends r {
                constructor(t) {
                    super(s.CHANNEL), this.channel = t
                }
                execute(t) {
                    t._channel = this.channel
                }
                updateHashCode(t) {
                    t.update(this.actionType, this.channel)
                }
                equals(t) {
                    return this === t || t instanceof d && this.channel === t.channel
                }
                toString() {
                    return "channel(" + this.channel + ")"
                }
            }
            class p extends r {
                constructor(t, e) {
                    super(e.actionType), this.offset = t, this.action = e, this.isPositionDependent = !0
                }
                execute(t) {
                    this.action.execute(t)
                }
                updateHashCode(t) {
                    t.update(this.actionType, this.offset, this.action)
                }
                equals(t) {
                    return this === t || t instanceof p && (this.offset === t.offset && this.action === t.action)
                }
            }
            e.exports = {
                LexerActionType: s,
                LexerSkipAction: i,
                LexerChannelAction: d,
                LexerCustomAction: h,
                LexerIndexedCustomAction: p,
                LexerMoreAction: c,
                LexerTypeAction: o,
                LexerPushModeAction: a,
                LexerPopModeAction: l,
                LexerModeAction: u
            }
        }, {}],
        30: [function(t, e, n) {
            const {
                hashStuff: s
            } = t("../Utils"), {
                LexerIndexedCustomAction: r
            } = t("./LexerAction");
            class i {
                constructor(t) {
                    return this.lexerActions = null === t ? [] : t, this.cachedHashCode = s(t), this
                }
                fixOffsetBeforeMatch(t) {
                    let e = null;
                    for (let n = 0; n < this.lexerActions.length; n++) !this.lexerActions[n].isPositionDependent || this.lexerActions[n] instanceof r || (null === e && (e = this.lexerActions.concat([])), e[n] = new r(t, this.lexerActions[n]));
                    return null === e ? this : new i(e)
                }
                execute(t, e, n) {
                    let s = !1;
                    const i = e.index;
                    try {
                        for (let o = 0; o < this.lexerActions.length; o++) {
                            let a = this.lexerActions[o];
                            if (a instanceof r) {
                                const t = a.offset;
                                e.seek(n + t), a = a.action, s = n + t !== i
                            } else a.isPositionDependent && (e.seek(i), s = !1);
                            a.execute(t)
                        }
                    } finally {
                        s && e.seek(i)
                    }
                }
                hashCode() {
                    return this.cachedHashCode
                }
                updateHashCode(t) {
                    t.update(this.cachedHashCode)
                }
                equals(t) {
                    if (this === t) return !0;
                    if (t instanceof i) {
                        if (this.cachedHashCode != t.cachedHashCode) return !1;
                        if (this.lexerActions.length != t.lexerActions.length) return !1; {
                            const e = this.lexerActions.length;
                            for (let n = 0; n < e; ++n)
                                if (!this.lexerActions[n].equals(t.lexerActions[n])) return !1;
                            return !0
                        }
                    }
                    return !1
                }
                static append(t, e) {
                    if (null === t) return new i([e]);
                    const n = t.lexerActions.concat([e]);
                    return new i(n)
                }
            }
            e.exports = i
        }, {
            "../Utils": 19,
            "./LexerAction": 29
        }],
        31: [function(t, e, n) {
            const s = t("./../Utils"),
                {
                    Set: r,
                    BitSet: i,
                    DoubleDict: o
                } = s,
                a = t("./ATN"),
                {
                    ATNState: l,
                    RuleStopState: c
                } = t("./ATNState"),
                {
                    ATNConfig: u
                } = t("./ATNConfig"),
                {
                    ATNConfigSet: h
                } = t("./ATNConfigSet"),
                {
                    Token: d
                } = t("./../Token"),
                {
                    DFAState: p,
                    PredPrediction: f
                } = t("./../dfa/DFAState"),
                g = t("./ATNSimulator"),
                T = t("./PredictionMode"),
                x = t("./../RuleContext"),
                {
                    SemanticContext: S
                } = (t("./../ParserRuleContext"), t("./SemanticContext")),
                {
                    PredictionContext: m
                } = t("./../PredictionContext"),
                {
                    Interval: C
                } = t("./../IntervalSet"),
                {
                    Transition: E,
                    SetTransition: A,
                    NotSetTransition: _,
                    RuleTransition: y,
                    ActionTransition: N
                } = t("./Transition"),
                {
                    NoViableAltException: k
                } = t("./../error/Errors"),
                {
                    SingletonPredictionContext: I,
                    predictionContextFromRuleContext: L
                } = t("./../PredictionContext");
            e.exports = class extends g {
                constructor(t, e, n, s) {
                    super(e, s), this.parser = t, this.decisionToDFA = n, this.predictionMode = T.LL, this._input = null, this._startIndex = 0, this._outerContext = null, this._dfa = null, this.mergeCache = null, this.debug = !1, this.debug_closure = !1, this.debug_add = !1, this.debug_list_atn_decisions = !1, this.dfa_debug = !1, this.retry_debug = !1
                }
                reset() {}
                adaptivePredict(t, e, n) {
                    (this.debug || this.debug_list_atn_decisions) && console.log("adaptivePredict decision " + e + " exec LA(1)==" + this.getLookaheadName(t) + " line " + t.LT(1).line + ":" + t.LT(1).column), this._input = t, this._startIndex = t.index, this._outerContext = n;
                    const s = this.decisionToDFA[e];
                    this._dfa = s;
                    const r = t.mark(),
                        i = t.index;
                    try {
                        let e;
                        if (null === (e = s.precedenceDfa ? s.getPrecedenceStartState(this.parser.getPrecedence()) : s.s0)) {
                            null === n && (n = x.EMPTY), (this.debug || this.debug_list_atn_decisions) && console.log("predictATN decision " + s.decision + " exec LA(1)==" + this.getLookaheadName(t) + ", outerContext=" + n.toString(this.parser.ruleNames));
                            const r = !1;
                            let i = this.computeStartState(s.atnStartState, x.EMPTY, r);
                            s.precedenceDfa ? (s.s0.configs = i, i = this.applyPrecedenceFilter(i), e = this.addDFAState(s, new p(null, i)), s.setPrecedenceStartState(this.parser.getPrecedence(), e)) : (e = this.addDFAState(s, new p(null, i)), s.s0 = e)
                        }
                        const o = this.execATN(s, e, t, i, n);
                        return this.debug && console.log("DFA after predictATN: " + s.toString(this.parser.literalNames)), o
                    } finally {
                        this._dfa = null, this.mergeCache = null, t.seek(i), t.release(r)
                    }
                }
                execATN(t, e, n, s, r) {
                    let i;
                    (this.debug || this.debug_list_atn_decisions) && console.log("execATN decision " + t.decision + " exec LA(1)==" + this.getLookaheadName(n) + " line " + n.LT(1).line + ":" + n.LT(1).column);
                    let o = e;
                    this.debug && console.log("s0 = " + e);
                    let l = n.LA(1);
                    for (;;) {
                        let e = this.getExistingTargetState(o, l);
                        if (null === e && (e = this.computeTargetState(t, o, l)), e === g.ERROR) {
                            const t = this.noViableAlt(n, r, o.configs, s);
                            if (n.seek(s), (i = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(o.configs, r)) !== a.INVALID_ALT_NUMBER) return i;
                            throw t
                        }
                        if (e.requiresFullContext && this.predictionMode !== T.SLL) {
                            let o = null;
                            if (null !== e.predicates) {
                                this.debug && console.log("DFA state has preds in DFA sim LL failover");
                                const t = n.index;
                                if (t !== s && n.seek(s), 1 === (o = this.evalSemanticContext(e.predicates, r, !0)).length) return this.debug && console.log("Full LL avoided"), o.minValue();
                                t !== s && n.seek(t)
                            }
                            this.dfa_debug && console.log("ctx sensitive state " + r + " in " + e);
                            const a = !0,
                                l = this.computeStartState(t.atnStartState, r, a);
                            return this.reportAttemptingFullContext(t, o, e.configs, s, n.index), i = this.execATNWithFullContext(t, e, l, n, s, r)
                        }
                        if (e.isAcceptState) {
                            if (null === e.predicates) return e.prediction;
                            const i = n.index;
                            n.seek(s);
                            const o = this.evalSemanticContext(e.predicates, r, !0);
                            if (0 === o.length) throw this.noViableAlt(n, r, e.configs, s);
                            return 1 === o.length ? o.minValue() : (this.reportAmbiguity(t, e, s, i, !1, o, e.configs), o.minValue())
                        }
                        o = e, l !== d.EOF && (n.consume(), l = n.LA(1))
                    }
                }
                getExistingTargetState(t, e) {
                    const n = t.edges;
                    return null === n ? null : n[e + 1] || null
                }
                computeTargetState(t, e, n) {
                    const r = this.computeReachSet(e.configs, n, !1);
                    if (null === r) return this.addDFAEdge(t, e, n, g.ERROR), g.ERROR;
                    let i = new p(null, r);
                    const o = this.getUniqueAlt(r);
                    if (this.debug) {
                        const t = T.getConflictingAltSubsets(r);
                        console.log("SLL altSubSets=" + s.arrayToString(t) + ", previous=" + e.configs + ", configs=" + r + ", predict=" + o + ", allSubsetsConflict=" + T.allSubsetsConflict(t) + ", conflictingAlts=" + this.getConflictingAlts(r))
                    }
                    return o !== a.INVALID_ALT_NUMBER ? (i.isAcceptState = !0, i.configs.uniqueAlt = o, i.prediction = o) : T.hasSLLConflictTerminatingPrediction(this.predictionMode, r) && (i.configs.conflictingAlts = this.getConflictingAlts(r), i.requiresFullContext = !0, i.isAcceptState = !0, i.prediction = i.configs.conflictingAlts.minValue()), i.isAcceptState && i.configs.hasSemanticContext && (this.predicateDFAState(i, this.atn.getDecisionState(t.decision)), null !== i.predicates && (i.prediction = a.INVALID_ALT_NUMBER)), i = this.addDFAEdge(t, e, n, i)
                }
                predicateDFAState(t, e) {
                    const n = e.transitions.length,
                        s = this.getConflictingAltsOrUniqueAlt(t.configs),
                        r = this.getPredsForAmbigAlts(s, t.configs, n);
                    null !== r ? (t.predicates = this.getPredicatePredictions(s, r), t.prediction = a.INVALID_ALT_NUMBER) : t.prediction = s.minValue()
                }
                execATNWithFullContext(t, e, n, s, r, i) {
                    (this.debug || this.debug_list_atn_decisions) && console.log("execATNWithFullContext " + n);
                    let o = !1,
                        l = null,
                        c = n;
                    s.seek(r);
                    let u = s.LA(1),
                        h = -1;
                    for (;;) {
                        if (null === (l = this.computeReachSet(c, u, !0))) {
                            const t = this.noViableAlt(s, i, c, r);
                            s.seek(r);
                            const e = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(c, i);
                            if (e !== a.INVALID_ALT_NUMBER) return e;
                            throw t
                        }
                        const t = T.getConflictingAltSubsets(l);
                        if (this.debug && console.log("LL altSubSets=" + t + ", predict=" + T.getUniqueAlt(t) + ", resolvesToJustOneViableAlt=" + T.resolvesToJustOneViableAlt(t)), l.uniqueAlt = this.getUniqueAlt(l), l.uniqueAlt !== a.INVALID_ALT_NUMBER) {
                            h = l.uniqueAlt;
                            break
                        }
                        if (this.predictionMode !== T.LL_EXACT_AMBIG_DETECTION) {
                            if ((h = T.resolvesToJustOneViableAlt(t)) !== a.INVALID_ALT_NUMBER) break
                        } else if (T.allSubsetsConflict(t) && T.allSubsetsEqual(t)) {
                            o = !0, h = T.getSingleViableAlt(t);
                            break
                        }
                        c = l, u !== d.EOF && (s.consume(), u = s.LA(1))
                    }
                    return l.uniqueAlt !== a.INVALID_ALT_NUMBER ? (this.reportContextSensitivity(t, h, l, r, s.index), h) : (this.reportAmbiguity(t, e, r, s.index, o, null, l), h)
                }
                computeReachSet(t, e, n) {
                    this.debug && console.log("in computeReachSet, starting closure: " + t), null === this.mergeCache && (this.mergeCache = new o);
                    const s = new h(n);
                    let i = null;
                    for (let r = 0; r < t.items.length; r++) {
                        const o = t.items[r];
                        if (this.debug_add && console.log("testing " + this.getTokenName(e) + " at " + o), o.state instanceof c)(n || e === d.EOF) && (null === i && (i = []), i.push(o), this.debug_add && console.log("added " + o + " to skippedStopStates"));
                        else
                            for (let t = 0; t < o.state.transitions.length; t++) {
                                const n = o.state.transitions[t],
                                    r = this.getReachableTarget(n, e);
                                if (null !== r) {
                                    const t = new u({
                                        state: r
                                    }, o);
                                    s.add(t, this.mergeCache), this.debug_add && console.log("added " + t + " to intermediate")
                                }
                            }
                    }
                    let l = null;
                    if (null === i && e !== d.EOF && (1 === s.items.length ? l = s : this.getUniqueAlt(s) !== a.INVALID_ALT_NUMBER && (l = s)), null === l) {
                        l = new h(n);
                        const t = new r,
                            i = e === d.EOF;
                        for (let e = 0; e < s.items.length; e++) this.closure(s.items[e], l, t, !1, n, i)
                    }
                    if (e === d.EOF && (l = this.removeAllConfigsNotInRuleStopState(l, l === s)), !(null === i || n && T.hasConfigInRuleStopState(l)))
                        for (let t = 0; t < i.length; t++) l.add(i[t], this.mergeCache);
                    return 0 === l.items.length ? null : l
                }
                removeAllConfigsNotInRuleStopState(t, e) {
                    if (T.allConfigsInRuleStopStates(t)) return t;
                    const n = new h(t.fullCtx);
                    for (let s = 0; s < t.items.length; s++) {
                        const r = t.items[s];
                        if (r.state instanceof c) n.add(r, this.mergeCache);
                        else if (e && r.state.epsilonOnlyTransitions && this.atn.nextTokens(r.state).contains(d.EPSILON)) {
                            const t = this.atn.ruleToStopState[r.state.ruleIndex];
                            n.add(new u({
                                state: t
                            }, r), this.mergeCache)
                        }
                    }
                    return n
                }
                computeStartState(t, e, n) {
                    const s = L(this.atn, e),
                        i = new h(n);
                    for (let e = 0; e < t.transitions.length; e++) {
                        const o = t.transitions[e].target,
                            a = new u({
                                state: o,
                                alt: e + 1,
                                context: s
                            }, null),
                            l = new r;
                        this.closure(a, i, l, !0, n, !1)
                    }
                    return i
                }
                applyPrecedenceFilter(t) {
                    let e;
                    const n = [],
                        s = new h(t.fullCtx);
                    for (let r = 0; r < t.items.length; r++) {
                        if (1 !== (e = t.items[r]).alt) continue;
                        const i = e.semanticContext.evalPrecedence(this.parser, this._outerContext);
                        null !== i && (n[e.state.stateNumber] = e.context, i !== e.semanticContext ? s.add(new u({
                            semanticContext: i
                        }, e), this.mergeCache) : s.add(e, this.mergeCache))
                    }
                    for (let r = 0; r < t.items.length; r++)
                        if (1 !== (e = t.items[r]).alt) {
                            if (!e.precedenceFilterSuppressed) {
                                const t = n[e.state.stateNumber] || null;
                                if (null !== t && t.equals(e.context)) continue
                            }
                            s.add(e, this.mergeCache)
                        } return s
                }
                getReachableTarget(t, e) {
                    return t.matches(e, 0, this.atn.maxTokenType) ? t.target : null
                }
                getPredsForAmbigAlts(t, e, n) {
                    let r = [];
                    for (let n = 0; n < e.items.length; n++) {
                        const s = e.items[n];
                        t.contains(s.alt) && (r[s.alt] = S.orContext(r[s.alt] || null, s.semanticContext))
                    }
                    let i = 0;
                    for (let t = 1; t < n + 1; t++) {
                        const e = r[t] || null;
                        null === e ? r[t] = S.NONE : e !== S.NONE && (i += 1)
                    }
                    return 0 === i && (r = null), this.debug && console.log("getPredsForAmbigAlts result " + s.arrayToString(r)), r
                }
                getPredicatePredictions(t, e) {
                    const n = [];
                    let s = !1;
                    for (let r = 1; r < e.length; r++) {
                        const i = e[r];
                        null !== t && t.contains(r) && n.push(new f(i, r)), i !== S.NONE && (s = !0)
                    }
                    return s ? n : null
                }
                getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(t, e) {
                    const n = this.splitAccordingToSemanticValidity(t, e),
                        s = n[0],
                        r = n[1];
                    let i = this.getAltThatFinishedDecisionEntryRule(s);
                    return i !== a.INVALID_ALT_NUMBER ? i : r.items.length > 0 && (i = this.getAltThatFinishedDecisionEntryRule(r)) !== a.INVALID_ALT_NUMBER ? i : a.INVALID_ALT_NUMBER
                }
                getAltThatFinishedDecisionEntryRule(t) {
                    const e = [];
                    for (let n = 0; n < t.items.length; n++) {
                        const s = t.items[n];
                        (s.reachesIntoOuterContext > 0 || s.state instanceof c && s.context.hasEmptyPath()) && e.indexOf(s.alt) < 0 && e.push(s.alt)
                    }
                    return 0 === e.length ? a.INVALID_ALT_NUMBER : Math.min.apply(null, e)
                }
                splitAccordingToSemanticValidity(t, e) {
                    const n = new h(t.fullCtx),
                        s = new h(t.fullCtx);
                    for (let r = 0; r < t.items.length; r++) {
                        const i = t.items[r];
                        i.semanticContext !== S.NONE ? i.semanticContext.evaluate(this.parser, e) ? n.add(i) : s.add(i) : n.add(i)
                    }
                    return [n, s]
                }
                evalSemanticContext(t, e, n) {
                    const s = new i;
                    for (let r = 0; r < t.length; r++) {
                        const i = t[r];
                        if (i.pred === S.NONE) {
                            if (s.add(i.alt), !n) break;
                            continue
                        }
                        const o = i.pred.evaluate(this.parser, e);
                        if ((this.debug || this.dfa_debug) && console.log("eval pred " + i + "=" + o), o && ((this.debug || this.dfa_debug) && console.log("PREDICT " + i.alt), s.add(i.alt), !n)) break
                    }
                    return s
                }
                closure(t, e, n, s, r, i) {
                    this.closureCheckingStopState(t, e, n, s, r, 0, i)
                }
                closureCheckingStopState(t, e, n, s, r, i, o) {
                    if ((this.debug || this.debug_closure) && (console.log("closure(" + t.toString(this.parser, !0) + ")"), t.reachesIntoOuterContext > 50)) throw "problem";
                    if (t.state instanceof c) {
                        if (!t.context.isEmpty()) {
                            for (let a = 0; a < t.context.length; a++) {
                                if (t.context.getReturnState(a) === m.EMPTY_RETURN_STATE) {
                                    if (r) {
                                        e.add(new u({
                                            state: t.state,
                                            context: m.EMPTY
                                        }, t), this.mergeCache);
                                        continue
                                    }
                                    this.debug && console.log("FALLING off rule " + this.getRuleName(t.state.ruleIndex)), this.closure_(t, e, n, s, r, i, o);
                                    continue
                                }
                                const l = this.atn.states[t.context.getReturnState(a)],
                                    c = t.context.getParent(a),
                                    h = {
                                        state: l,
                                        alt: t.alt,
                                        context: c,
                                        semanticContext: t.semanticContext
                                    },
                                    d = new u(h, null);
                                d.reachesIntoOuterContext = t.reachesIntoOuterContext, this.closureCheckingStopState(d, e, n, s, r, i - 1, o)
                            }
                            return
                        }
                        if (r) return void e.add(t, this.mergeCache);
                        this.debug && console.log("FALLING off rule " + this.getRuleName(t.state.ruleIndex))
                    }
                    this.closure_(t, e, n, s, r, i, o)
                }
                closure_(t, e, n, s, r, i, o) {
                    const a = t.state;
                    a.epsilonOnlyTransitions || e.add(t, this.mergeCache);
                    for (let l = 0; l < a.transitions.length; l++) {
                        if (0 == l && this.canDropLoopEntryEdgeInLeftRecursiveRule(t)) continue;
                        const u = a.transitions[l],
                            h = s && !(u instanceof N),
                            d = this.getEpsilonTarget(t, u, h, 0 === i, r, o);
                        if (null !== d) {
                            let s = i;
                            if (t.state instanceof c) {
                                if (null !== this._dfa && this._dfa.precedenceDfa && u.outermostPrecedenceReturn === this._dfa.atnStartState.ruleIndex && (d.precedenceFilterSuppressed = !0), d.reachesIntoOuterContext += 1, n.add(d) !== d) continue;
                                e.dipsIntoOuterContext = !0, s -= 1, this.debug && console.log("dips into outer ctx: " + d)
                            } else {
                                if (!u.isEpsilon && n.add(d) !== d) continue;
                                u instanceof y && s >= 0 && (s += 1)
                            }
                            this.closureCheckingStopState(d, e, n, h, r, s, o)
                        }
                    }
                }
                canDropLoopEntryEdgeInLeftRecursiveRule(t) {
                    const e = t.state;
                    if (e.stateType != l.STAR_LOOP_ENTRY) return !1;
                    if (e.stateType != l.STAR_LOOP_ENTRY || !e.isPrecedenceDecision || t.context.isEmpty() || t.context.hasEmptyPath()) return !1;
                    const n = t.context.length;
                    for (let s = 0; s < n; s++)
                        if (this.atn.states[t.context.getReturnState(s)].ruleIndex != e.ruleIndex) return !1;
                    const s = e.transitions[0].target.endState.stateNumber,
                        r = this.atn.states[s];
                    for (let s = 0; s < n; s++) {
                        const n = t.context.getReturnState(s),
                            i = this.atn.states[n];
                        if (1 != i.transitions.length || !i.transitions[0].isEpsilon) return !1;
                        const o = i.transitions[0].target;
                        if (!(i.stateType == l.BLOCK_END && o == e || i == r || o == r || o.stateType == l.BLOCK_END && 1 == o.transitions.length && o.transitions[0].isEpsilon && o.transitions[0].target == e)) return !1
                    }
                    return !0
                }
                getRuleName(t) {
                    return null !== this.parser && t >= 0 ? this.parser.ruleNames[t] : "<rule " + t + ">"
                }
                getEpsilonTarget(t, e, n, s, r, i) {
                    switch (e.serializationType) {
                        case E.RULE:
                            return this.ruleTransition(t, e);
                        case E.PRECEDENCE:
                            return this.precedenceTransition(t, e, n, s, r);
                        case E.PREDICATE:
                            return this.predTransition(t, e, n, s, r);
                        case E.ACTION:
                            return this.actionTransition(t, e);
                        case E.EPSILON:
                            return new u({
                                state: e.target
                            }, t);
                        case E.ATOM:
                        case E.RANGE:
                        case E.SET:
                            return i && e.matches(d.EOF, 0, 1) ? new u({
                                state: e.target
                            }, t) : null;
                        default:
                            return null
                    }
                }
                actionTransition(t, e) {
                    if (this.debug) {
                        const t = -1 == e.actionIndex ? 65535 : e.actionIndex;
                        console.log("ACTION edge " + e.ruleIndex + ":" + t)
                    }
                    return new u({
                        state: e.target
                    }, t)
                }
                precedenceTransition(t, e, n, r, i) {
                    this.debug && (console.log("PRED (collectPredicates=" + n + ") " + e.precedence + ">=_p, ctx dependent=true"), null !== this.parser && console.log("context surrounding pred is " + s.arrayToString(this.parser.getRuleInvocationStack())));
                    let o = null;
                    if (n && r)
                        if (i) {
                            const n = this._input.index;
                            this._input.seek(this._startIndex);
                            const s = e.getPredicate().evaluate(this.parser, this._outerContext);
                            this._input.seek(n), s && (o = new u({
                                state: e.target
                            }, t))
                        } else {
                            const n = S.andContext(t.semanticContext, e.getPredicate());
                            o = new u({
                                state: e.target,
                                semanticContext: n
                            }, t)
                        }
                    else o = new u({
                        state: e.target
                    }, t);
                    return this.debug && console.log("config from pred transition=" + o), o
                }
                predTransition(t, e, n, r, i) {
                    this.debug && (console.log("PRED (collectPredicates=" + n + ") " + e.ruleIndex + ":" + e.predIndex + ", ctx dependent=" + e.isCtxDependent), null !== this.parser && console.log("context surrounding pred is " + s.arrayToString(this.parser.getRuleInvocationStack())));
                    let o = null;
                    if (n && (e.isCtxDependent && r || !e.isCtxDependent))
                        if (i) {
                            const n = this._input.index;
                            this._input.seek(this._startIndex);
                            const s = e.getPredicate().evaluate(this.parser, this._outerContext);
                            this._input.seek(n), s && (o = new u({
                                state: e.target
                            }, t))
                        } else {
                            const n = S.andContext(t.semanticContext, e.getPredicate());
                            o = new u({
                                state: e.target,
                                semanticContext: n
                            }, t)
                        }
                    else o = new u({
                        state: e.target
                    }, t);
                    return this.debug && console.log("config from pred transition=" + o), o
                }
                ruleTransition(t, e) {
                    this.debug && console.log("CALL rule " + this.getRuleName(e.target.ruleIndex) + ", ctx=" + t.context);
                    const n = e.followState,
                        s = I.create(t.context, n.stateNumber);
                    return new u({
                        state: e.target,
                        context: s
                    }, t)
                }
                getConflictingAlts(t) {
                    const e = T.getConflictingAltSubsets(t);
                    return T.getAlts(e)
                }
                getConflictingAltsOrUniqueAlt(t) {
                    let e = null;
                    return t.uniqueAlt !== a.INVALID_ALT_NUMBER ? (e = new i).add(t.uniqueAlt) : e = t.conflictingAlts, e
                }
                getTokenName(t) {
                    if (t === d.EOF) return "EOF";
                    if (null !== this.parser && null !== this.parser.literalNames) {
                        if (!(t >= this.parser.literalNames.length && t >= this.parser.symbolicNames.length)) return (this.parser.literalNames[t] || this.parser.symbolicNames[t]) + "<" + t + ">";
                        console.log(t + " ttype out of range: " + this.parser.literalNames), console.log("" + this.parser.getInputStream().getTokens())
                    }
                    return "" + t
                }
                getLookaheadName(t) {
                    return this.getTokenName(t.LA(1))
                }
                dumpDeadEndConfigs(t) {
                    console.log("dead end configs: ");
                    const e = t.getDeadEndConfigs();
                    for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        let s = "no edges";
                        if (n.state.transitions.length > 0) {
                            const t = n.state.transitions[0];
                            t instanceof AtomTransition ? s = "Atom " + this.getTokenName(t.label) : t instanceof A && (s = (t instanceof _ ? "~" : "") + "Set " + t.set)
                        }
                        console.error(n.toString(this.parser, !0) + ":" + s)
                    }
                }
                noViableAlt(t, e, n, s) {
                    return new k(this.parser, t, t.get(s), t.LT(1), n, e)
                }
                getUniqueAlt(t) {
                    let e = a.INVALID_ALT_NUMBER;
                    for (let n = 0; n < t.items.length; n++) {
                        const s = t.items[n];
                        if (e === a.INVALID_ALT_NUMBER) e = s.alt;
                        else if (s.alt !== e) return a.INVALID_ALT_NUMBER
                    }
                    return e
                }
                addDFAEdge(t, e, n, s) {
                    if (this.debug && console.log("EDGE " + e + " -> " + s + " upon " + this.getTokenName(n)), null === s) return null;
                    if (s = this.addDFAState(t, s), null === e || n < -1 || n > this.atn.maxTokenType) return s;
                    if (null === e.edges && (e.edges = []), e.edges[n + 1] = s, this.debug) {
                        const e = null === this.parser ? null : this.parser.literalNames,
                            n = null === this.parser ? null : this.parser.symbolicNames;
                        console.log("DFA=\n" + t.toString(e, n))
                    }
                    return s
                }
                addDFAState(t, e) {
                    if (e == g.ERROR) return e;
                    const n = t.states.get(e);
                    return null !== n ? n : (e.stateNumber = t.states.length, e.configs.readOnly || (e.configs.optimizeConfigs(this), e.configs.setReadonly(!0)), t.states.add(e), this.debug && console.log("adding new DFA state: " + e), e)
                }
                reportAttemptingFullContext(t, e, n, s, r) {
                    if (this.debug || this.retry_debug) {
                        const e = new C(s, r + 1);
                        console.log("reportAttemptingFullContext decision=" + t.decision + ":" + n + ", input=" + this.parser.getTokenStream().getText(e))
                    }
                    null !== this.parser && this.parser.getErrorListenerDispatch().reportAttemptingFullContext(this.parser, t, s, r, e, n)
                }
                reportContextSensitivity(t, e, n, s, r) {
                    if (this.debug || this.retry_debug) {
                        const e = new C(s, r + 1);
                        console.log("reportContextSensitivity decision=" + t.decision + ":" + n + ", input=" + this.parser.getTokenStream().getText(e))
                    }
                    null !== this.parser && this.parser.getErrorListenerDispatch().reportContextSensitivity(this.parser, t, s, r, e, n)
                }
                reportAmbiguity(t, e, n, s, r, i, o) {
                    if (this.debug || this.retry_debug) {
                        const t = new C(n, s + 1);
                        console.log("reportAmbiguity " + i + ":" + o + ", input=" + this.parser.getTokenStream().getText(t))
                    }
                    null !== this.parser && this.parser.getErrorListenerDispatch().reportAmbiguity(this.parser, t, n, s, r, i, o)
                }
            }
        }, {
            "./../IntervalSet": 10,
            "./../ParserRuleContext": 14,
            "./../PredictionContext": 15,
            "./../RuleContext": 17,
            "./../Token": 18,
            "./../Utils": 19,
            "./../dfa/DFAState": 38,
            "./../error/Errors": 43,
            "./ATN": 20,
            "./ATNConfig": 21,
            "./ATNConfigSet": 22,
            "./ATNSimulator": 25,
            "./ATNState": 26,
            "./PredictionMode": 32,
            "./SemanticContext": 33,
            "./Transition": 34
        }],
        32: [function(t, e, n) {
            const {
                Map: s,
                BitSet: r,
                AltDict: i,
                hashStuff: o
            } = t("./../Utils"), a = t("./ATN"), {
                RuleStopState: l
            } = t("./ATNState"), {
                ATNConfigSet: c
            } = t("./ATNConfigSet"), {
                ATNConfig: u
            } = t("./ATNConfig"), {
                SemanticContext: h
            } = t("./SemanticContext"), d = {
                SLL: 0,
                LL: 1,
                LL_EXACT_AMBIG_DETECTION: 2,
                hasSLLConflictTerminatingPrediction: function(t, e) {
                    if (d.allConfigsInRuleStopStates(e)) return !0;
                    if (t === d.SLL && e.hasSemanticContext) {
                        const t = new c;
                        for (let n = 0; n < e.items.length; n++) {
                            let s = e.items[n];
                            s = new u({
                                semanticContext: h.NONE
                            }, s), t.add(s)
                        }
                        e = t
                    }
                    const n = d.getConflictingAltSubsets(e);
                    return d.hasConflictingAltSet(n) && !d.hasStateAssociatedWithOneAlt(e)
                },
                hasConfigInRuleStopState: function(t) {
                    for (let e = 0; e < t.items.length; e++) {
                        if (t.items[e].state instanceof l) return !0
                    }
                    return !1
                },
                allConfigsInRuleStopStates: function(t) {
                    for (let e = 0; e < t.items.length; e++) {
                        if (!(t.items[e].state instanceof l)) return !1
                    }
                    return !0
                },
                resolvesToJustOneViableAlt: function(t) {
                    return d.getSingleViableAlt(t)
                },
                allSubsetsConflict: function(t) {
                    return !d.hasNonConflictingAltSet(t)
                },
                hasNonConflictingAltSet: function(t) {
                    for (let e = 0; e < t.length; e++) {
                        if (1 === t[e].length) return !0
                    }
                    return !1
                },
                hasConflictingAltSet: function(t) {
                    for (let e = 0; e < t.length; e++) {
                        if (t[e].length > 1) return !0
                    }
                    return !1
                },
                allSubsetsEqual: function(t) {
                    let e = null;
                    for (let n = 0; n < t.length; n++) {
                        const s = t[n];
                        if (null === e) e = s;
                        else if (s !== e) return !1
                    }
                    return !0
                },
                getUniqueAlt: function(t) {
                    const e = d.getAlts(t);
                    return 1 === e.length ? e.minValue() : a.INVALID_ALT_NUMBER
                },
                getAlts: function(t) {
                    const e = new r;
                    return t.map(function(t) {
                        e.or(t)
                    }), e
                },
                getConflictingAltSubsets: function(t) {
                    const e = new s;
                    return e.hashFunction = function(t) {
                        o(t.state.stateNumber, t.context)
                    }, e.equalsFunction = function(t, e) {
                        return t.state.stateNumber == e.state.stateNumber && t.context.equals(e.context)
                    }, t.items.map(function(t) {
                        let n = e.get(t);
                        null === n && (n = new r, e.put(t, n)), n.add(t.alt)
                    }), e.getValues()
                },
                getStateToAltMap: function(t) {
                    const e = new i;
                    return t.items.map(function(t) {
                        let n = e.get(t.state);
                        null === n && (n = new r, e.put(t.state, n)), n.add(t.alt)
                    }), e
                },
                hasStateAssociatedWithOneAlt: function(t) {
                    const e = d.getStateToAltMap(t).values();
                    for (let t = 0; t < e.length; t++)
                        if (1 === e[t].length) return !0;
                    return !1
                },
                getSingleViableAlt: function(t) {
                    let e = null;
                    for (let n = 0; n < t.length; n++) {
                        const s = t[n].minValue();
                        if (null === e) e = s;
                        else if (e !== s) return a.INVALID_ALT_NUMBER
                    }
                    return e
                }
            };
            e.exports = d
        }, {
            "./../Utils": 19,
            "./ATN": 20,
            "./ATNConfig": 21,
            "./ATNConfigSet": 22,
            "./ATNState": 26,
            "./SemanticContext": 33
        }],
        33: [function(t, e, n) {
            const {
                Set: s,
                Hash: r
            } = t("./../Utils");
            class i {
                hashCode() {
                    const t = new r;
                    return this.updateHashCode(t), t.finish()
                }
                evaluate(t, e) {}
                evalPrecedence(t, e) {
                    return this
                }
                static andContext(t, e) {
                    if (null === t || t === i.NONE) return e;
                    if (null === e || e === i.NONE) return t;
                    const n = new l(t, e);
                    return 1 === n.opnds.length ? n.opnds[0] : n
                }
                static orContext(t, e) {
                    if (null === t) return e;
                    if (null === e) return t;
                    if (t === i.NONE || e === i.NONE) return i.NONE;
                    const n = new c(t, e);
                    return 1 === n.opnds.length ? n.opnds[0] : n
                }
            }
            class o extends i {
                constructor(t, e, n) {
                    super(), this.ruleIndex = void 0 === t ? -1 : t, this.predIndex = void 0 === e ? -1 : e, this.isCtxDependent = void 0 !== n && n
                }
                evaluate(t, e) {
                    const n = this.isCtxDependent ? e : null;
                    return t.sempred(n, this.ruleIndex, this.predIndex)
                }
                updateHashCode(t) {
                    t.update(this.ruleIndex, this.predIndex, this.isCtxDependent)
                }
                equals(t) {
                    return this === t || t instanceof o && (this.ruleIndex === t.ruleIndex && this.predIndex === t.predIndex && this.isCtxDependent === t.isCtxDependent)
                }
                toString() {
                    return "{" + this.ruleIndex + ":" + this.predIndex + "}?"
                }
            }
            i.NONE = new o;
            class a extends i {
                constructor(t) {
                    super(), this.precedence = void 0 === t ? 0 : t
                }
                evaluate(t, e) {
                    return t.precpred(e, this.precedence)
                }
                evalPrecedence(t, e) {
                    return t.precpred(e, this.precedence) ? i.NONE : null
                }
                compareTo(t) {
                    return this.precedence - t.precedence
                }
                updateHashCode(t) {
                    t.update(31)
                }
                equals(t) {
                    return this === t || t instanceof a && this.precedence === t.precedence
                }
                toString() {
                    return "{" + this.precedence + ">=prec}?"
                }
                static filterPrecedencePredicates(t) {
                    const e = [];
                    return t.values().map(function(t) {
                        t instanceof a && e.push(t)
                    }), e
                }
            }
            class l extends i {
                constructor(t, e) {
                    super();
                    const n = new s;
                    t instanceof l ? t.opnds.map(function(t) {
                        n.add(t)
                    }) : n.add(t), e instanceof l ? e.opnds.map(function(t) {
                        n.add(t)
                    }) : n.add(e);
                    const r = a.filterPrecedencePredicates(n);
                    if (r.length > 0) {
                        let t = null;
                        r.map(function(e) {
                            (null === t || e.precedence < t.precedence) && (t = e)
                        }), n.add(t)
                    }
                    this.opnds = n.values()
                }
                equals(t) {
                    return this === t || t instanceof l && this.opnds === t.opnds
                }
                updateHashCode(t) {
                    t.update(this.opnds, "AND")
                }
                evaluate(t, e) {
                    for (let n = 0; n < this.opnds.length; n++)
                        if (!this.opnds[n].evaluate(t, e)) return !1;
                    return !0
                }
                evalPrecedence(t, e) {
                    let n = !1;
                    const s = [];
                    for (let r = 0; r < this.opnds.length; r++) {
                        const o = this.opnds[r],
                            a = o.evalPrecedence(t, e);
                        if (n |= a !== o, null === a) return null;
                        a !== i.NONE && s.push(a)
                    }
                    if (!n) return this;
                    if (0 === s.length) return i.NONE;
                    let r = null;
                    return s.map(function(t) {
                        r = null === r ? t : i.andContext(r, t)
                    }), r
                }
                toString() {
                    let t = "";
                    return this.opnds.map(function(e) {
                        t += "&& " + e.toString()
                    }), t.length > 3 ? t.slice(3) : t
                }
            }
            class c extends i {
                constructor(t, e) {
                    super();
                    const n = new s;
                    t instanceof c ? t.opnds.map(function(t) {
                        n.add(t)
                    }) : n.add(t), e instanceof c ? e.opnds.map(function(t) {
                        n.add(t)
                    }) : n.add(e);
                    const r = a.filterPrecedencePredicates(n);
                    if (r.length > 0) {
                        const t = r.sort(function(t, e) {
                                return t.compareTo(e)
                            }),
                            e = t[t.length - 1];
                        n.add(e)
                    }
                    this.opnds = n.values()
                }
                equals(t) {
                    return this === t || t instanceof c && this.opnds === t.opnds
                }
                updateHashCode(t) {
                    t.update(this.opnds, "OR")
                }
                evaluate(t, e) {
                    for (let n = 0; n < this.opnds.length; n++)
                        if (this.opnds[n].evaluate(t, e)) return !0;
                    return !1
                }
                evalPrecedence(t, e) {
                    let n = !1;
                    const s = [];
                    for (let r = 0; r < this.opnds.length; r++) {
                        const o = this.opnds[r],
                            a = o.evalPrecedence(t, e);
                        if (n |= a !== o, a === i.NONE) return i.NONE;
                        null !== a && s.push(a)
                    }
                    if (!n) return this;
                    if (0 === s.length) return null;
                    return s.map(function(t) {
                        return t
                    }), null
                }
                toString() {
                    let t = "";
                    return this.opnds.map(function(e) {
                        t += "|| " + e.toString()
                    }), t.length > 3 ? t.slice(3) : t
                }
            }
            e.exports = {
                SemanticContext: i,
                PrecedencePredicate: a,
                Predicate: o
            }
        }, {
            "./../Utils": 19
        }],
        34: [function(t, e, n) {
            const {
                Token: s
            } = t("./../Token"), {
                IntervalSet: r
            } = t("./../IntervalSet"), {
                Predicate: i,
                PrecedencePredicate: o
            } = t("./SemanticContext");
            class a {
                constructor(t) {
                    if (null == t) throw "target cannot be null.";
                    this.target = t, this.isEpsilon = !1, this.label = null
                }
            }
            a.EPSILON = 1, a.RANGE = 2, a.RULE = 3, a.PREDICATE = 4, a.ATOM = 5, a.ACTION = 6, a.SET = 7, a.NOT_SET = 8, a.WILDCARD = 9, a.PRECEDENCE = 10, a.serializationNames = ["INVALID", "EPSILON", "RANGE", "RULE", "PREDICATE", "ATOM", "ACTION", "SET", "NOT_SET", "WILDCARD", "PRECEDENCE"], a.serializationTypes = {
                EpsilonTransition: a.EPSILON,
                RangeTransition: a.RANGE,
                RuleTransition: a.RULE,
                PredicateTransition: a.PREDICATE,
                AtomTransition: a.ATOM,
                ActionTransition: a.ACTION,
                SetTransition: a.SET,
                NotSetTransition: a.NOT_SET,
                WildcardTransition: a.WILDCARD,
                PrecedencePredicateTransition: a.PRECEDENCE
            };
            class l extends a {
                constructor(t) {
                    super(t)
                }
            }
            class c extends a {
                constructor(t, e) {
                    super(t), this.serializationType = a.SET, null != e ? this.label = e : (this.label = new r, this.label.addOne(s.INVALID_TYPE))
                }
                matches(t, e, n) {
                    return this.label.contains(t)
                }
                toString() {
                    return this.label.toString()
                }
            }
            e.exports = {
                Transition: a,
                AtomTransition: class extends a {
                    constructor(t, e) {
                        super(t), this.label_ = e, this.label = this.makeLabel(), this.serializationType = a.ATOM
                    }
                    makeLabel() {
                        const t = new r;
                        return t.addOne(this.label_), t
                    }
                    matches(t, e, n) {
                        return this.label_ === t
                    }
                    toString() {
                        return this.label_
                    }
                },
                SetTransition: c,
                NotSetTransition: class extends c {
                    constructor(t, e) {
                        super(t, e), this.serializationType = a.NOT_SET
                    }
                    matches(t, e, n) {
                        return t >= e && t <= n && !super.matches(t, e, n)
                    }
                    toString() {
                        return "~" + super.toString()
                    }
                },
                RuleTransition: class extends a {
                    constructor(t, e, n, s) {
                        super(t), this.ruleIndex = e, this.precedence = n, this.followState = s, this.serializationType = a.RULE, this.isEpsilon = !0
                    }
                    matches(t, e, n) {
                        return !1
                    }
                },
                ActionTransition: class extends a {
                    constructor(t, e, n, s) {
                        super(t), this.serializationType = a.ACTION, this.ruleIndex = e, this.actionIndex = void 0 === n ? -1 : n, this.isCtxDependent = void 0 !== s && s, this.isEpsilon = !0
                    }
                    matches(t, e, n) {
                        return !1
                    }
                    toString() {
                        return "action_" + this.ruleIndex + ":" + this.actionIndex
                    }
                },
                EpsilonTransition: class extends a {
                    constructor(t, e) {
                        super(t), this.serializationType = a.EPSILON, this.isEpsilon = !0, this.outermostPrecedenceReturn = e
                    }
                    matches(t, e, n) {
                        return !1
                    }
                    toString() {
                        return "epsilon"
                    }
                },
                RangeTransition: class extends a {
                    constructor(t, e, n) {
                        super(t), this.serializationType = a.RANGE, this.start = e, this.stop = n, this.label = this.makeLabel()
                    }
                    makeLabel() {
                        const t = new r;
                        return t.addRange(this.start, this.stop), t
                    }
                    matches(t, e, n) {
                        return t >= this.start && t <= this.stop
                    }
                    toString() {
                        return "'" + String.fromCharCode(this.start) + "'..'" + String.fromCharCode(this.stop) + "'"
                    }
                },
                WildcardTransition: class extends a {
                    constructor(t) {
                        super(t), this.serializationType = a.WILDCARD
                    }
                    matches(t, e, n) {
                        return t >= e && t <= n
                    }
                    toString() {
                        return "."
                    }
                },
                PredicateTransition: class extends l {
                    constructor(t, e, n, s) {
                        super(t), this.serializationType = a.PREDICATE, this.ruleIndex = e, this.predIndex = n, this.isCtxDependent = s, this.isEpsilon = !0
                    }
                    matches(t, e, n) {
                        return !1
                    }
                    getPredicate() {
                        return new i(this.ruleIndex, this.predIndex, this.isCtxDependent)
                    }
                    toString() {
                        return "pred_" + this.ruleIndex + ":" + this.predIndex
                    }
                },
                PrecedencePredicateTransition: class extends l {
                    constructor(t, e) {
                        super(t), this.serializationType = a.PRECEDENCE, this.precedence = e, this.isEpsilon = !0
                    }
                    matches(t, e, n) {
                        return !1
                    }
                    getPredicate() {
                        return new o(this.precedence)
                    }
                    toString() {
                        return this.precedence + " >= _p"
                    }
                },
                AbstractPredicateTransition: l
            }
        }, {
            "./../IntervalSet": 10,
            "./../Token": 18,
            "./SemanticContext": 33
        }],
        35: [function(t, e, n) {
            n.ATN = t("./ATN"), n.ATNDeserializer = t("./ATNDeserializer"), n.LexerATNSimulator = t("./LexerATNSimulator"), n.ParserATNSimulator = t("./ParserATNSimulator"), n.PredictionMode = t("./PredictionMode")
        }, {
            "./ATN": 20,
            "./ATNDeserializer": 24,
            "./LexerATNSimulator": 28,
            "./ParserATNSimulator": 31,
            "./PredictionMode": 32
        }],
        36: [function(t, e, n) {
            const {
                Set: s
            } = t("../Utils"), {
                DFAState: r
            } = t("./DFAState"), {
                StarLoopEntryState: i
            } = t("../atn/ATNState"), {
                ATNConfigSet: o
            } = t("./../atn/ATNConfigSet"), {
                DFASerializer: a
            } = t("./DFASerializer"), {
                LexerDFASerializer: l
            } = t("./DFASerializer");
            e.exports = class {
                constructor(t, e) {
                    if (void 0 === e && (e = 0), this.atnStartState = t, this.decision = e, this._states = new s, this.s0 = null, this.precedenceDfa = !1, t instanceof i && t.isPrecedenceDecision) {
                        this.precedenceDfa = !0;
                        const t = new r(null, new o);
                        t.edges = [], t.isAcceptState = !1, t.requiresFullContext = !1, this.s0 = t
                    }
                }
                getPrecedenceStartState(t) {
                    if (!this.precedenceDfa) throw "Only precedence DFAs may contain a precedence start state.";
                    return t < 0 || t >= this.s0.edges.length ? null : this.s0.edges[t] || null
                }
                setPrecedenceStartState(t, e) {
                    if (!this.precedenceDfa) throw "Only precedence DFAs may contain a precedence start state.";
                    t < 0 || (this.s0.edges[t] = e)
                }
                setPrecedenceDfa(t) {
                    if (this.precedenceDfa !== t) {
                        if (this._states = new DFAStatesSet, t) {
                            const t = new r(null, new o);
                            t.edges = [], t.isAcceptState = !1, t.requiresFullContext = !1, this.s0 = t
                        } else this.s0 = null;
                        this.precedenceDfa = t
                    }
                }
                sortedStates() {
                    return this._states.values().sort(function(t, e) {
                        return t.stateNumber - e.stateNumber
                    })
                }
                toString(t, e) {
                    return t = t || null, e = e || null, null === this.s0 ? "" : new a(this, t, e).toString()
                }
                toLexerString() {
                    return null === this.s0 ? "" : new l(this).toString()
                }
                get states() {
                    return this._states
                }
            }
        }, {
            "../Utils": 19,
            "../atn/ATNState": 26,
            "./../atn/ATNConfigSet": 22,
            "./DFASerializer": 37,
            "./DFAState": 38
        }],
        37: [function(t, e, n) {
            class s {
                constructor(t, e, n) {
                    this.dfa = t, this.literalNames = e || [], this.symbolicNames = n || []
                }
                toString() {
                    if (null === this.dfa.s0) return null;
                    let t = "";
                    const e = this.dfa.sortedStates();
                    for (let n = 0; n < e.length; n++) {
                        const s = e[n];
                        if (null !== s.edges) {
                            const e = s.edges.length;
                            for (let n = 0; n < e; n++) {
                                const e = s.edges[n] || null;
                                null !== e && 2147483647 !== e.stateNumber && (t = (t = (t = (t = (t = (t = t.concat(this.getStateString(s))).concat("-")).concat(this.getEdgeLabel(n))).concat("->")).concat(this.getStateString(e))).concat("\n"))
                            }
                        }
                    }
                    return 0 === t.length ? null : t
                }
                getEdgeLabel(t) {
                    return 0 === t ? "EOF" : null !== this.literalNames || null !== this.symbolicNames ? this.literalNames[t - 1] || this.symbolicNames[t - 1] : String.fromCharCode(t - 1)
                }
                getStateString(t) {
                    const e = (t.isAcceptState ? ":" : "") + "s" + t.stateNumber + (t.requiresFullContext ? "^" : "");
                    return t.isAcceptState ? null !== t.predicates ? e + "=>" + t.predicates.toString() : e + "=>" + t.prediction.toString() : e
                }
            }
            e.exports = {
                DFASerializer: s,
                LexerDFASerializer: class extends s {
                    constructor(t) {
                        super(t, null)
                    }
                    getEdgeLabel(t) {
                        return "'" + String.fromCharCode(t) + "'"
                    }
                }
            }
        }, {}],
        38: [function(t, e, n) {
            const {
                ATNConfigSet: s
            } = t("./../atn/ATNConfigSet"), {
                Hash: r,
                Set: i
            } = t("./../Utils");
            class o {
                constructor(t, e) {
                    return null === t && (t = -1), null === e && (e = new s), this.stateNumber = t, this.configs = e, this.edges = null, this.isAcceptState = !1, this.prediction = 0, this.lexerActionExecutor = null, this.requiresFullContext = !1, this.predicates = null, this
                }
                getAltSet() {
                    const t = new i;
                    if (null !== this.configs)
                        for (let e = 0; e < this.configs.length; e++) {
                            const n = this.configs[e];
                            t.add(n.alt)
                        }
                    return 0 === t.length ? null : t
                }
                equals(t) {
                    return this === t || t instanceof o && this.configs.equals(t.configs)
                }
                toString() {
                    let t = this.stateNumber + ":" + this.configs;
                    return this.isAcceptState && (t += "=>", null !== this.predicates ? t += this.predicates : t += this.prediction), t
                }
                hashCode() {
                    const t = new r;
                    return t.update(this.configs), t.finish()
                }
            }
            e.exports = {
                DFAState: o,
                PredPrediction: class {
                    constructor(t, e) {
                        this.alt = e, this.pred = t
                    }
                    toString() {
                        return "(" + this.pred + ", " + this.alt + ")"
                    }
                }
            }
        }, {
            "./../Utils": 19,
            "./../atn/ATNConfigSet": 22
        }],
        39: [function(t, e, n) {
            n.DFA = t("./DFA"), n.DFASerializer = t("./DFASerializer").DFASerializer, n.LexerDFASerializer = t("./DFASerializer").LexerDFASerializer, n.PredPrediction = t("./DFAState").PredPrediction
        }, {
            "./DFA": 36,
            "./DFASerializer": 37,
            "./DFAState": 38
        }],
        40: [function(t, e, n) {
            const {
                BitSet: s
            } = t("./../Utils"), {
                ErrorListener: r
            } = t("./ErrorListener"), {
                Interval: i
            } = t("./../IntervalSet");
            e.exports = class extends r {
                constructor(t) {
                    super(), t = t || !0, this.exactOnly = t
                }
                reportAmbiguity(t, e, n, s, r, o, a) {
                    if (this.exactOnly && !r) return;
                    const l = "reportAmbiguity d=" + this.getDecisionDescription(t, e) + ": ambigAlts=" + this.getConflictingAlts(o, a) + ", input='" + t.getTokenStream().getText(new i(n, s)) + "'";
                    t.notifyErrorListeners(l)
                }
                reportAttemptingFullContext(t, e, n, s, r, o) {
                    const a = "reportAttemptingFullContext d=" + this.getDecisionDescription(t, e) + ", input='" + t.getTokenStream().getText(new i(n, s)) + "'";
                    t.notifyErrorListeners(a)
                }
                reportContextSensitivity(t, e, n, s, r, o) {
                    const a = "reportContextSensitivity d=" + this.getDecisionDescription(t, e) + ", input='" + t.getTokenStream().getText(new i(n, s)) + "'";
                    t.notifyErrorListeners(a)
                }
                getDecisionDescription(t, e) {
                    const n = e.decision,
                        s = e.atnStartState.ruleIndex,
                        r = t.ruleNames;
                    if (s < 0 || s >= r.length) return "" + n;
                    const i = r[s] || null;
                    return null === i || 0 === i.length ? "" + n : `${n} (${i})`
                }
                getConflictingAlts(t, e) {
                    if (null !== t) return t;
                    const n = new s;
                    for (let t = 0; t < e.items.length; t++) n.add(e.items[t].alt);
                    return `{${n.values().join(", ")}}`
                }
            }
        }, {
            "./../IntervalSet": 10,
            "./../Utils": 19,
            "./ErrorListener": 41
        }],
        41: [function(t, e, n) {
            class s {
                syntaxError(t, e, n, s, r, i) {}
                reportAmbiguity(t, e, n, s, r, i, o) {}
                reportAttemptingFullContext(t, e, n, s, r, i) {}
                reportContextSensitivity(t, e, n, s, r, i) {}
            }
            class r extends s {
                constructor() {
                    super()
                }
                syntaxError(t, e, n, s, r, i) {
                    console.error("line " + n + ":" + s + " " + r)
                }
            }
            r.INSTANCE = new r;
            e.exports = {
                ErrorListener: s,
                ConsoleErrorListener: r,
                ProxyErrorListener: class extends s {
                    constructor(t) {
                        if (super(), null === t) throw "delegates";
                        return this.delegates = t, this
                    }
                    syntaxError(t, e, n, s, r, i) {
                        this.delegates.map(o => o.syntaxError(t, e, n, s, r, i))
                    }
                    reportAmbiguity(t, e, n, s, r, i, o) {
                        this.delegates.map(a => a.reportAmbiguity(t, e, n, s, r, i, o))
                    }
                    reportAttemptingFullContext(t, e, n, s, r, i) {
                        this.delegates.map(o => o.reportAttemptingFullContext(t, e, n, s, r, i))
                    }
                    reportContextSensitivity(t, e, n, s, r, i) {
                        this.delegates.map(o => o.reportContextSensitivity(t, e, n, s, r, i))
                    }
                }
            }
        }, {}],
        42: [function(t, e, n) {
            const {
                Token: s
            } = t("./../Token"), {
                NoViableAltException: r,
                InputMismatchException: i,
                FailedPredicateException: o,
                ParseCancellationException: a
            } = t("./Errors"), {
                ATNState: l
            } = t("./../atn/ATNState"), {
                Interval: c,
                IntervalSet: u
            } = t("./../IntervalSet");
            class h {
                reset(t) {}
                recoverInline(t) {}
                recover(t, e) {}
                sync(t) {}
                inErrorRecoveryMode(t) {}
                reportError(t) {}
            }
            class d extends h {
                constructor() {
                    super(), this.errorRecoveryMode = !1, this.lastErrorIndex = -1, this.lastErrorStates = null
                }
                reset(t) {
                    this.endErrorCondition(t)
                }
                beginErrorCondition(t) {
                    this.errorRecoveryMode = !0
                }
                inErrorRecoveryMode(t) {
                    return this.errorRecoveryMode
                }
                endErrorCondition(t) {
                    this.errorRecoveryMode = !1, this.lastErrorStates = null, this.lastErrorIndex = -1
                }
                reportMatch(t) {
                    this.endErrorCondition(t)
                }
                reportError(t, e) {
                    this.inErrorRecoveryMode(t) || (this.beginErrorCondition(t), e instanceof r ? this.reportNoViableAlternative(t, e) : e instanceof i ? this.reportInputMismatch(t, e) : e instanceof o ? this.reportFailedPredicate(t, e) : (console.log("unknown recognition error type: " + e.constructor.name), console.log(e.stack), t.notifyErrorListeners(e.getOffendingToken(), e.getMessage(), e)))
                }
                recover(t, e) {
                    this.lastErrorIndex === t.getInputStream().index && null !== this.lastErrorStates && this.lastErrorStates.indexOf(t.state) >= 0 && t.consume(), this.lastErrorIndex = t._input.index, null === this.lastErrorStates && (this.lastErrorStates = []), this.lastErrorStates.push(t.state);
                    const n = this.getErrorRecoverySet(t);
                    this.consumeUntil(t, n)
                }
                sync(t) {
                    if (this.inErrorRecoveryMode(t)) return;
                    const e = t._interp.atn.states[t.state],
                        n = t.getTokenStream().LA(1),
                        r = t.atn.nextTokens(e);
                    if (!r.contains(s.EPSILON) && !r.contains(n)) switch (e.stateType) {
                        case l.BLOCK_START:
                        case l.STAR_BLOCK_START:
                        case l.PLUS_BLOCK_START:
                        case l.STAR_LOOP_ENTRY:
                            if (null !== this.singleTokenDeletion(t)) return;
                            throw new i(t);
                        case l.PLUS_LOOP_BACK:
                        case l.STAR_LOOP_BACK:
                            this.reportUnwantedToken(t);
                            const n = new u;
                            n.addSet(t.getExpectedTokens());
                            const s = n.addSet(this.getErrorRecoverySet(t));
                            this.consumeUntil(t, s)
                    }
                }
                reportNoViableAlternative(t, e) {
                    const n = t.getTokenStream();
                    let r;
                    r = null !== n ? e.startToken.type === s.EOF ? "<EOF>" : n.getText(new c(e.startToken.tokenIndex, e.offendingToken.tokenIndex)) : "<unknown input>";
                    const i = "no viable alternative at input " + this.escapeWSAndQuote(r);
                    t.notifyErrorListeners(i, e.offendingToken, e)
                }
                reportInputMismatch(t, e) {
                    const n = "mismatched input " + this.getTokenErrorDisplay(e.offendingToken) + " expecting " + e.getExpectedTokens().toString(t.literalNames, t.symbolicNames);
                    t.notifyErrorListeners(n, e.offendingToken, e)
                }
                reportFailedPredicate(t, e) {
                    const n = "rule " + t.ruleNames[t._ctx.ruleIndex] + " " + e.message;
                    t.notifyErrorListeners(n, e.offendingToken, e)
                }
                reportUnwantedToken(t) {
                    if (this.inErrorRecoveryMode(t)) return;
                    this.beginErrorCondition(t);
                    const e = t.getCurrentToken(),
                        n = "extraneous input " + this.getTokenErrorDisplay(e) + " expecting " + this.getExpectedTokens(t).toString(t.literalNames, t.symbolicNames);
                    t.notifyErrorListeners(n, e, null)
                }
                reportMissingToken(t) {
                    if (this.inErrorRecoveryMode(t)) return;
                    this.beginErrorCondition(t);
                    const e = t.getCurrentToken(),
                        n = "missing " + this.getExpectedTokens(t).toString(t.literalNames, t.symbolicNames) + " at " + this.getTokenErrorDisplay(e);
                    t.notifyErrorListeners(n, e, null)
                }
                recoverInline(t) {
                    const e = this.singleTokenDeletion(t);
                    if (null !== e) return t.consume(), e;
                    if (this.singleTokenInsertion(t)) return this.getMissingSymbol(t);
                    throw new i(t)
                }
                singleTokenInsertion(t) {
                    const e = t.getTokenStream().LA(1),
                        n = t._interp.atn,
                        s = n.states[t.state].transitions[0].target;
                    return !!n.nextTokens(s, t._ctx).contains(e) && (this.reportMissingToken(t), !0)
                }
                singleTokenDeletion(t) {
                    const e = t.getTokenStream().LA(2);
                    if (this.getExpectedTokens(t).contains(e)) {
                        this.reportUnwantedToken(t), t.consume();
                        const e = t.getCurrentToken();
                        return this.reportMatch(t), e
                    }
                    return null
                }
                getMissingSymbol(t) {
                    const e = t.getCurrentToken(),
                        n = this.getExpectedTokens(t).first();
                    let r;
                    r = n === s.EOF ? "<missing EOF>" : "<missing " + t.literalNames[n] + ">";
                    let i = e;
                    const o = t.getTokenStream().LT(-1);
                    return i.type === s.EOF && null !== o && (i = o), t.getTokenFactory().create(i.source, n, r, s.DEFAULT_CHANNEL, -1, -1, i.line, i.column)
                }
                getExpectedTokens(t) {
                    return t.getExpectedTokens()
                }
                getTokenErrorDisplay(t) {
                    if (null === t) return "<no token>";
                    let e = t.text;
                    return null === e && (e = t.type === s.EOF ? "<EOF>" : "<" + t.type + ">"), this.escapeWSAndQuote(e)
                }
                escapeWSAndQuote(t) {
                    return "'" + (t = (t = (t = t.replace(/\n/g, "\\n")).replace(/\r/g, "\\r")).replace(/\t/g, "\\t")) + "'"
                }
                getErrorRecoverySet(t) {
                    const e = t._interp.atn;
                    let n = t._ctx;
                    const r = new u;
                    for (; null !== n && n.invokingState >= 0;) {
                        const t = e.states[n.invokingState].transitions[0],
                            s = e.nextTokens(t.followState);
                        r.addSet(s), n = n.parentCtx
                    }
                    return r.removeOne(s.EPSILON), r
                }
                consumeUntil(t, e) {
                    let n = t.getTokenStream().LA(1);
                    for (; n !== s.EOF && !e.contains(n);) t.consume(), n = t.getTokenStream().LA(1)
                }
            }
            e.exports = {
                BailErrorStrategy: class extends d {
                    constructor() {
                        super()
                    }
                    recover(t, e) {
                        let n = t._ctx;
                        for (; null !== n;) n.exception = e, n = n.parentCtx;
                        throw new a(e)
                    }
                    recoverInline(t) {
                        this.recover(t, new i(t))
                    }
                    sync(t) {}
                },
                DefaultErrorStrategy: d
            }
        }, {
            "./../IntervalSet": 10,
            "./../Token": 18,
            "./../atn/ATNState": 26,
            "./Errors": 43
        }],
        43: [function(t, e, n) {
            const {
                PredicateTransition: s
            } = t("./../atn/Transition");
            class r extends Error {
                constructor(t) {
                    if (super(t.message), Error.captureStackTrace) Error.captureStackTrace(this, r);
                    else(new Error).stack;
                    this.message = t.message, this.recognizer = t.recognizer, this.input = t.input, this.ctx = t.ctx, this.offendingToken = null, this.offendingState = -1, null !== this.recognizer && (this.offendingState = this.recognizer.state)
                }
                getExpectedTokens() {
                    return null !== this.recognizer ? this.recognizer.atn.getExpectedTokens(this.offendingState, this.ctx) : null
                }
                toString() {
                    return this.message
                }
            }

            function i(t, e) {
                return null !== e ? e : "failed predicate: {" + t + "}?"
            }
            class o extends Error {
                constructor() {
                    super(), Error.captureStackTrace(this, o)
                }
            }
            e.exports = {
                RecognitionException: r,
                NoViableAltException: class extends r {
                    constructor(t, e, n, s, r, i) {
                        i = i || t._ctx, s = s || t.getCurrentToken(), n = n || t.getCurrentToken(), e = e || t.getInputStream(), super({
                            message: "",
                            recognizer: t,
                            input: e,
                            ctx: i
                        }), this.deadEndConfigs = r, this.startToken = n, this.offendingToken = s
                    }
                },
                LexerNoViableAltException: class extends r {
                    constructor(t, e, n, s) {
                        super({
                            message: "",
                            recognizer: t,
                            input: e,
                            ctx: null
                        }), this.startIndex = n, this.deadEndConfigs = s
                    }
                    toString() {
                        let t = "";
                        return this.startIndex >= 0 && this.startIndex < this.input.size && (t = this.input.getText((this.startIndex, this.startIndex))), "LexerNoViableAltException" + t
                    }
                },
                InputMismatchException: class extends r {
                    constructor(t) {
                        super({
                            message: "",
                            recognizer: t,
                            input: t.getInputStream(),
                            ctx: t._ctx
                        }), this.offendingToken = t.getCurrentToken()
                    }
                },
                FailedPredicateException: class extends r {
                    constructor(t, e, n) {
                        super({
                            message: i(e, n || null),
                            recognizer: t,
                            input: t.getInputStream(),
                            ctx: t._ctx
                        });
                        const r = t._interp.atn.states[t.state].transitions[0];
                        r instanceof s ? (this.ruleIndex = r.ruleIndex, this.predicateIndex = r.predIndex) : (this.ruleIndex = 0, this.predicateIndex = 0), this.predicate = e, this.offendingToken = t.getCurrentToken()
                    }
                },
                ParseCancellationException: o
            }
        }, {
            "./../atn/Transition": 34
        }],
        44: [function(t, e, n) {
            e.exports.RecognitionException = t("./Errors").RecognitionException, e.exports.NoViableAltException = t("./Errors").NoViableAltException, e.exports.LexerNoViableAltException = t("./Errors").LexerNoViableAltException, e.exports.InputMismatchException = t("./Errors").InputMismatchException, e.exports.FailedPredicateException = t("./Errors").FailedPredicateException, e.exports.DiagnosticErrorListener = t("./DiagnosticErrorListener"), e.exports.BailErrorStrategy = t("./ErrorStrategy").BailErrorStrategy, e.exports.DefaultErrorStrategy = t("./ErrorStrategy").DefaultErrorStrategy, e.exports.ErrorListener = t("./ErrorListener").ErrorListener
        }, {
            "./DiagnosticErrorListener": 40,
            "./ErrorListener": 41,
            "./ErrorStrategy": 42,
            "./Errors": 43
        }],
        45: [function(t, e, n) {
            n.atn = t("./atn/index"), n.codepointat = t("./polyfills/codepointat"), n.dfa = t("./dfa/index"), n.fromcodepoint = t("./polyfills/fromcodepoint"), n.tree = t("./tree/index"), n.error = t("./error/index"), n.Token = t("./Token").Token, n.CharStreams = t("./CharStreams"), n.CommonToken = t("./Token").CommonToken, n.InputStream = t("./InputStream"), n.FileStream = t("./FileStream"), n.CommonTokenStream = t("./CommonTokenStream"), n.Lexer = t("./Lexer"), n.Parser = t("./Parser");
            var s = t("./PredictionContext");
            n.PredictionContextCache = s.PredictionContextCache, n.ParserRuleContext = t("./ParserRuleContext"), n.Interval = t("./IntervalSet").Interval, n.IntervalSet = t("./IntervalSet").IntervalSet, n.Utils = t("./Utils"), n.LL1Analyzer = t("./LL1Analyzer").LL1Analyzer
        }, {
            "./CharStreams": 5,
            "./CommonTokenStream": 7,
            "./FileStream": 8,
            "./InputStream": 9,
            "./IntervalSet": 10,
            "./LL1Analyzer": 11,
            "./Lexer": 12,
            "./Parser": 13,
            "./ParserRuleContext": 14,
            "./PredictionContext": 15,
            "./Token": 18,
            "./Utils": 19,
            "./atn/index": 35,
            "./dfa/index": 39,
            "./error/index": 44,
            "./polyfills/codepointat": 46,
            "./polyfills/fromcodepoint": 47,
            "./tree/index": 50
        }],
        46: [function(t, e, n) {
            String.prototype.codePointAt || function() {
                "use strict";
                var t = function() {
                        try {
                            var t = {},
                                e = Object.defineProperty,
                                n = e(t, t, t) && e
                        } catch (t) {}
                        return n
                    }(),
                    e = function(t) {
                        if (null == this) throw TypeError();
                        var e = String(this),
                            n = e.length,
                            s = t ? Number(t) : 0;
                        if (s != s && (s = 0), !(s < 0 || s >= n)) {
                            var r, i = e.charCodeAt(s);
                            return i >= 55296 && i <= 56319 && n > s + 1 && (r = e.charCodeAt(s + 1)) >= 56320 && r <= 57343 ? 1024 * (i - 55296) + r - 56320 + 65536 : i
                        }
                    };
                t ? t(String.prototype, "codePointAt", {
                    value: e,
                    configurable: !0,
                    writable: !0
                }) : String.prototype.codePointAt = e
            }()
        }, {}],
        47: [function(t, e, n) {
            var s, r, i, o;
            String.fromCodePoint || (s = function() {
                try {
                    var t = {},
                        e = Object.defineProperty,
                        n = e(t, t, t) && e
                } catch (t) {}
                return n
            }(), r = String.fromCharCode, i = Math.floor, o = function(t) {
                var e, n, s = [],
                    o = -1,
                    a = arguments.length;
                if (!a) return "";
                for (var l = ""; ++o < a;) {
                    var c = Number(arguments[o]);
                    if (!isFinite(c) || c < 0 || c > 1114111 || i(c) != c) throw RangeError("Invalid code point: " + c);
                    c <= 65535 ? s.push(c) : (e = 55296 + ((c -= 65536) >> 10), n = c % 1024 + 56320, s.push(e, n)), (o + 1 == a || s.length > 16384) && (l += r.apply(null, s), s.length = 0)
                }
                return l
            }, s ? s(String, "fromCodePoint", {
                value: o,
                configurable: !0,
                writable: !0
            }) : String.fromCodePoint = o)
        }, {}],
        48: [function(t, e, n) {
            const {
                Token: s
            } = t("./../Token"), {
                Interval: r
            } = t("./../IntervalSet"), i = new r(-1, -2);
            class o {}
            class a extends o {
                constructor() {
                    super()
                }
            }
            class l extends a {
                constructor() {
                    super()
                }
            }
            class c extends l {
                constructor() {
                    super()
                }
            }
            class u extends c {
                constructor() {
                    super()
                }
            }
            class h extends c {
                constructor(t) {
                    super(), this.parentCtx = null, this.symbol = t
                }
                getChild(t) {
                    return null
                }
                getSymbol() {
                    return this.symbol
                }
                getParent() {
                    return this.parentCtx
                }
                getPayload() {
                    return this.symbol
                }
                getSourceInterval() {
                    if (null === this.symbol) return i;
                    const t = this.symbol.tokenIndex;
                    return new r(t, t)
                }
                getChildCount() {
                    return 0
                }
                accept(t) {
                    return t.visitTerminal(this)
                }
                getText() {
                    return this.symbol.text
                }
                toString() {
                    return this.symbol.type === s.EOF ? "<EOF>" : this.symbol.text
                }
            }
            class d {
                walk(t, e) {
                    if (e instanceof u || void 0 !== e.isErrorNode && e.isErrorNode()) t.visitErrorNode(e);
                    else if (e instanceof c) t.visitTerminal(e);
                    else {
                        this.enterRule(t, e);
                        for (let n = 0; n < e.getChildCount(); n++) {
                            const s = e.getChild(n);
                            this.walk(t, s)
                        }
                        this.exitRule(t, e)
                    }
                }
                enterRule(t, e) {
                    const n = e.getRuleContext();
                    t.enterEveryRule(n), n.enterRule(t)
                }
                exitRule(t, e) {
                    const n = e.getRuleContext();
                    n.exitRule(t), t.exitEveryRule(n)
                }
            }
            d.DEFAULT = new d, e.exports = {
                RuleNode: class extends l {
                    constructor() {
                        super()
                    }
                    getRuleContext() {
                        throw new Error("missing interface implementation")
                    }
                },
                ErrorNode: u,
                TerminalNode: c,
                ErrorNodeImpl: class extends h {
                    constructor(t) {
                        super(t)
                    }
                    isErrorNode() {
                        return !0
                    }
                    accept(t) {
                        return t.visitErrorNode(this)
                    }
                },
                TerminalNodeImpl: h,
                ParseTreeListener: class {
                    visitTerminal(t) {}
                    visitErrorNode(t) {}
                    enterEveryRule(t) {}
                    exitEveryRule(t) {}
                },
                ParseTreeVisitor: class {
                    visit(t) {
                        return Array.isArray(t) ? t.map(function(t) {
                            return t.accept(this)
                        }, this) : t.accept(this)
                    }
                    visitChildren(t) {
                        return t.children ? this.visit(t.children) : null
                    }
                    visitTerminal(t) {}
                    visitErrorNode(t) {}
                },
                ParseTreeWalker: d,
                INVALID_INTERVAL: i
            }
        }, {
            "./../IntervalSet": 10,
            "./../Token": 18
        }],
        49: [function(t, e, n) {
            const s = t("./../Utils"),
                {
                    Token: r
                } = t("./../Token"),
                {
                    ErrorNode: i,
                    TerminalNode: o,
                    RuleNode: a
                } = t("./Tree"),
                l = {
                    toStringTree: function(t, e, n) {
                        e = e || null, null !== (n = n || null) && (e = n.ruleNames);
                        let r = l.getNodeText(t, e);
                        r = s.escapeWhitespace(r, !1);
                        const i = t.getChildCount();
                        if (0 === i) return r;
                        let o = "(" + r + " ";
                        i > 0 && (r = l.toStringTree(t.getChild(0), e), o = o.concat(r));
                        for (let n = 1; n < i; n++) r = l.toStringTree(t.getChild(n), e), o = o.concat(" " + r);
                        return o = o.concat(")")
                    },
                    getNodeText: function(t, e, n) {
                        if (e = e || null, null !== (n = n || null) && (e = n.ruleNames), null !== e) {
                            if (t instanceof a) {
                                const n = t.getRuleContext().getAltNumber();
                                return 0 != n ? e[t.ruleIndex] + ":" + n : e[t.ruleIndex]
                            }
                            if (t instanceof i) return t.toString();
                            if (t instanceof o && null !== t.symbol) return t.symbol.text
                        }
                        const s = t.getPayload();
                        return s instanceof r ? s.text : t.getPayload().toString()
                    },
                    getChildren: function(t) {
                        const e = [];
                        for (let n = 0; n < t.getChildCount(); n++) e.push(t.getChild(n));
                        return e
                    },
                    getAncestors: function(t) {
                        let e = [];
                        for (t = t.getParent(); null !== t;) e = [t].concat(e), t = t.getParent();
                        return e
                    },
                    findAllTokenNodes: function(t, e) {
                        return l.findAllNodes(t, e, !0)
                    },
                    findAllRuleNodes: function(t, e) {
                        return l.findAllNodes(t, e, !1)
                    },
                    findAllNodes: function(t, e, n) {
                        const s = [];
                        return l._findAllNodes(t, e, n, s), s
                    },
                    _findAllNodes: function(t, e, n, s) {
                        n && t instanceof o ? t.symbol.type === e && s.push(t) : !n && t instanceof a && t.ruleIndex === e && s.push(t);
                        for (let r = 0; r < t.getChildCount(); r++) l._findAllNodes(t.getChild(r), e, n, s)
                    },
                    descendants: function(t) {
                        let e = [t];
                        for (let n = 0; n < t.getChildCount(); n++) e = e.concat(l.descendants(t.getChild(n)));
                        return e
                    }
                };
            e.exports = l
        }, {
            "./../Token": 18,
            "./../Utils": 19,
            "./Tree": 48
        }],
        50: [function(t, e, n) {
            const s = t("./Tree"),
                r = t("./Trees");
            e.exports = {
                ...s,
                Trees: r
            }
        }, {
            "./Tree": 48,
            "./Trees": 49
        }],
        51: [function(t, e, n) {
            (function(s) {
                "use strict";

                function r(t) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                n.log = function() {
                    var t;
                    return "object" === ("undefined" == typeof console ? "undefined" : r(console)) && console.log && (t = console).log.apply(t, arguments)
                }, n.formatArgs = function(t) {
                    if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
                    var n = "color: " + this.color;
                    t.splice(1, 0, n, "color: inherit");
                    var s = 0,
                        r = 0;
                    t[0].replace(/%[a-zA-Z%]/g, function(t) {
                        "%%" !== t && (s++, "%c" === t && (r = s))
                    }), t.splice(r, 0, n)
                }, n.save = function(t) {
                    try {
                        t ? n.storage.setItem("debug", t) : n.storage.removeItem("debug")
                    } catch (t) {}
                }, n.load = function() {
                    var t;
                    try {
                        t = n.storage.getItem("debug")
                    } catch (t) {}!t && void 0 !== s && "env" in s && (t = s.env.DEBUG);
                    return t
                }, n.useColors = function() {
                    if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
                    if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                }, n.storage = function() {
                    try {
                        return localStorage
                    } catch (t) {}
                }(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = t("./common")(n), e.exports.formatters.j = function(t) {
                    try {
                        return JSON.stringify(t)
                    } catch (t) {
                        return "[UnexpectedJSONParseError]: " + t.message
                    }
                }
            }).call(this, t("_process"))
        }, {
            "./common": 52,
            _process: 2
        }],
        52: [function(t, e, n) {
            "use strict";
            e.exports = function(e) {
                function n(t) {
                    for (var e = 0, n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n), e |= 0;
                    return s.colors[Math.abs(e) % s.colors.length]
                }

                function s(t) {
                    var e;

                    function o() {
                        if (o.enabled) {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var i = o,
                                a = Number(new Date),
                                l = a - (e || a);
                            i.diff = l, i.prev = e, i.curr = a, e = a, n[0] = s.coerce(n[0]), "string" != typeof n[0] && n.unshift("%O");
                            var c = 0;
                            n[0] = n[0].replace(/%([a-zA-Z%])/g, function(t, e) {
                                if ("%%" === t) return t;
                                c++;
                                var r = s.formatters[e];
                                if ("function" == typeof r) {
                                    var o = n[c];
                                    t = r.call(i, o), n.splice(c, 1), c--
                                }
                                return t
                            }), s.formatArgs.call(i, n), (i.log || s.log).apply(i, n)
                        }
                    }
                    return o.namespace = t, o.enabled = s.enabled(t), o.useColors = s.useColors(), o.color = n(t), o.destroy = r, o.extend = i, "function" == typeof s.init && s.init(o), s.instances.push(o), o
                }

                function r() {
                    var t = s.instances.indexOf(this);
                    return -1 !== t && (s.instances.splice(t, 1), !0)
                }

                function i(t, e) {
                    return s(this.namespace + (void 0 === e ? ":" : e) + t)
                }
                return s.debug = s, s.default = s, s.coerce = function(t) {
                    return t instanceof Error ? t.stack || t.message : t
                }, s.disable = function() {
                    s.enable("")
                }, s.enable = function(t) {
                    var e;
                    s.save(t), s.names = [], s.skips = [];
                    var n = ("string" == typeof t ? t : "").split(/[\s,]+/),
                        r = n.length;
                    for (e = 0; e < r; e++) n[e] && ("-" === (t = n[e].replace(/\*/g, ".*?"))[0] ? s.skips.push(new RegExp("^" + t.substr(1) + "$")) : s.names.push(new RegExp("^" + t + "$")));
                    for (e = 0; e < s.instances.length; e++) {
                        var i = s.instances[e];
                        i.enabled = s.enabled(i.namespace)
                    }
                }, s.enabled = function(t) {
                    if ("*" === t[t.length - 1]) return !0;
                    var e, n;
                    for (e = 0, n = s.skips.length; e < n; e++)
                        if (s.skips[e].test(t)) return !1;
                    for (e = 0, n = s.names.length; e < n; e++)
                        if (s.names[e].test(t)) return !0;
                    return !1
                }, s.humanize = t("ms"), Object.keys(e).forEach(function(t) {
                    s[t] = e[t]
                }), s.instances = [], s.names = [], s.skips = [], s.formatters = {}, s.selectColor = n, s.enable(s.load()), s
            }
        }, {
            ms: 53
        }],
        53: [function(t, e, n) {
            var s = 1e3,
                r = 60 * s,
                i = 60 * r,
                o = 24 * i,
                a = 7 * o,
                l = 365.25 * o;

            function c(t, e, n, s) {
                var r = e >= 1.5 * n;
                return Math.round(t / n) + " " + s + (r ? "s" : "")
            }
            e.exports = function(t, e) {
                e = e || {};
                var n = typeof t;
                if ("string" === n && t.length > 0) return function(t) {
                    if ((t = String(t)).length > 100) return;
                    var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
                    if (!e) return;
                    var n = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * l;
                        case "weeks":
                        case "week":
                        case "w":
                            return n * a;
                        case "days":
                        case "day":
                        case "d":
                            return n * o;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * i;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * r;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * s;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return
                    }
                }(t);
                if ("number" === n && isFinite(t)) return e.long ? function(t) {
                    var e = Math.abs(t);
                    if (e >= o) return c(t, e, o, "day");
                    if (e >= i) return c(t, e, i, "hour");
                    if (e >= r) return c(t, e, r, "minute");
                    if (e >= s) return c(t, e, s, "second");
                    return t + " ms"
                }(t) : function(t) {
                    var e = Math.abs(t);
                    if (e >= o) return Math.round(t / o) + "d";
                    if (e >= i) return Math.round(t / i) + "h";
                    if (e >= r) return Math.round(t / r) + "m";
                    if (e >= s) return Math.round(t / s) + "s";
                    return t + "ms"
                }(t);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
            }
        }, {}]
    }, {}, [3])(3)
});