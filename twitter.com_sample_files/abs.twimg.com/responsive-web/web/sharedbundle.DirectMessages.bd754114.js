(window.webpackJsonp = window.webpackJsonp || []).push([
    [3, 179], {
        "+/sI": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return f
            }));
            n("VAC4");
            var r = n("VbXa"),
                i = n.n(r),
                a = n("ERkP"),
                o = n("kd3K"),
                s = n.n(o),
                c = n("t62R"),
                u = n("a6qo"),
                d = n("rHpw"),
                l = "animated_gif",
                f = "video",
                p = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return i()(t, e), t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.durationInMilliseconds,
                            r = t.type;
                        if (r === l || "vine" === r) e = r === l ? a.createElement(c.b, {
                            weight: "bold"
                        }, "GIF") : a.createElement(s.a, {
                            style: h.icon
                        });
                        else if (r === f && n) {
                            var i = Math.trunc(n / 6e4),
                                o = ("0" + Math.trunc(n % 6e4 / 1e3)).slice(-2);
                            e = a.createElement(c.b, {
                                color: "white"
                            }, i + ":" + o)
                        }
                        return e ? a.createElement(u.a, {
                            align: "left"
                        }, e) : null
                    }, t
                }(a.PureComponent),
                h = d.a.create((function(e) {
                    return {
                        icon: {
                            color: e.colors.white
                        }
                    }
                }));
            t.c = p
        },
        "0Ki6": function(e, t, n) {
            "use strict";
            n("0ra8"), n("PN9k");
            var r = n("1Pcy"),
                i = n.n(r),
                a = n("W/Kd"),
                o = n.n(a),
                s = n("KEM+"),
                c = n.n(s),
                u = n("YRQv"),
                d = n("ERkP"),
                l = n("CHgo"),
                f = n("fs1G"),
                p = n("7nmT"),
                h = n.n(p),
                m = n("rHpw"),
                v = n("3xO4"),
                _ = n.n(v),
                b = n("Enqy"),
                y = u.a(),
                g = 300,
                E = {
                    zoom: 1,
                    lastX: 0,
                    lastY: 0,
                    zoomCenter: {
                        x: 0,
                        y: 0
                    }
                },
                O = {
                    height: 0,
                    width: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                I = function(e, t, n) {
                    return Math.min(t, Math.max(e, n))
                },
                S = function(e, t) {
                    return Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2))
                },
                C = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this, t) || this, c()(i()(n), "_itemDimensions", O), c()(i()(n), "_setTouchableNode", (function(e) {
                            n._touchableNode = h.a.findDOMNode(e), n._touchableNode && (n._removeTouchListener = Object(l.a)(n._touchableNode, n._handleTouchMove, !1))
                        })), c()(i()(n), "_handleTouchStart", (function(e) {
                            n._zoomable instanceof Element && (n._zoomedDimensions = n._zoomable.getBoundingClientRect()), n._moved = !1;
                            var t = e.touches.length;
                            2 === t ? (e.preventDefault(), n._handlePinchStart(e)) : 1 === t && n._handleTapStart(e)
                        })), c()(i()(n), "_handleTouchMove", (function(e) {
                            var t = e.touches.length;
                            2 === t ? n._handlePinchMove(e) : 1 === t && (n._moved = !0, n._handlePanMove(e)), e.preventDefault()
                        })), c()(i()(n), "_handleTouchEnd", (function(e) {
                            var t = n.props,
                                r = t.maxZoom,
                                i = t.minZoom,
                                a = t.onTap,
                                o = I(i, r, n.state.zoom),
                                s = n.state.zoom;
                            s !== o && 1 === o ? n.resetZoom() : n.setState({
                                lastX: 0,
                                lastY: 0,
                                zoom: o
                            }), 0 === e.touches.length ? (n._lastTouchTime && n._lastTouchTime + g > e.timeStamp ? (n._clickTimer && clearTimeout(n._clickTimer), n._handleDoubleTap(e)) : s <= 1 && !n._moved && (n._clickTimer = setTimeout(a, g)), n._lastTouchTime = e.timeStamp) : e.preventDefault()
                        })), n.state = Object.assign({}, E), n._ref = d.createRef(), n
                    }
                    o()(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return y && e.resetZoom ? (e.onZoomed(!1), Object.assign({}, E)) : t
                    };
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this;
                        if (!y) return this.props.children;
                        var t = this.state,
                            n = t.zoom,
                            r = t.zoomCenter,
                            i = this._moved,
                            a = {
                                zoom: Object(b.spring)(n),
                                zoomCenterX: Object(b.spring)(r.x),
                                zoomCenterY: Object(b.spring)(r.y)
                            };
                        return d.createElement(_.a, {
                            onTouchEnd: this._handleTouchEnd,
                            onTouchStart: this._handleTouchStart,
                            ref: this._setTouchableNode,
                            style: T.fill
                        }, d.createElement(b.Motion, {
                            style: a
                        }, (function(t) {
                            var n = t.zoom,
                                a = t.zoomCenterX,
                                o = t.zoomCenterY;
                            return d.createElement(_.a, {
                                ref: e._ref,
                                style: [T.fill, {
                                    transform: [{
                                        scale: n
                                    }],
                                    transformOrigin: (i ? a : r.x) + "px " + (i ? o : r.y) + "px"
                                }]
                            }, e.props.children)
                        })))
                    }, n.componentDidMount = function() {
                        y && (this._zoomable = h.a.findDOMNode(this._ref.current), this._updateWindowDimensions())
                    }, n.componentWillUnmount = function() {
                        this._removeTouchListener && this._removeTouchListener()
                    }, n.resetZoom = function() {
                        this.props.onZoomed(!1), this.setState({
                            zoom: E.zoom
                        })
                    }, n._handlePanMove = function(e) {
                        if (!(this.state.zoom <= 1) && this._zoomedDimensions && this._windowDimensions) {
                            var t = e.touches[0],
                                n = t.clientX,
                                r = t.clientY;
                            if (this.state.lastX && this.state.lastY) {
                                var i = this.state,
                                    a = i.lastX,
                                    o = i.lastY,
                                    s = i.zoomCenter,
                                    c = s.x,
                                    u = s.y,
                                    d = this._windowDimensions,
                                    l = d.height,
                                    f = d.width,
                                    p = this._zoomedDimensions,
                                    h = p.height,
                                    m = 0,
                                    v = 0;
                                p.width - f > 0 && (m = n - a), h - l > 0 && (v = r - o), this.setState({
                                    lastX: n,
                                    lastY: r,
                                    zoomCenter: {
                                        x: Math.min(Math.max(c - m, 0), f),
                                        y: Math.min(Math.max(u - v, 0), l)
                                    }
                                })
                            } else this.setState({
                                lastX: n,
                                lastY: r
                            })
                        }
                    }, n._handlePinchStart = function(e) {
                        var t, n, r = e.touches;
                        if (this._updateWindowDimensions(), this._lastDistance = S(r[0], r[1]), 1 === this.state.zoom) {
                            var i = (t = r[0], n = r[1], {
                                x: (t.clientX + n.clientX) / 2,
                                y: (t.clientY + n.clientY) / 2
                            });
                            this.setState({
                                zoomCenter: this._getZoomCenter(i.x, i.y)
                            }), this.props.onZoomed(!0)
                        }
                    }, n._handlePinchMove = function(e) {
                        var t = this.state,
                            n = t.zoom,
                            r = t.zoomCenter,
                            i = this.props,
                            a = i.maxZoom,
                            o = i.maxZoomBounce,
                            s = i.minZoom,
                            c = i.minZoomBounce;
                        if (0 !== r.x || 0 !== r.y) {
                            var u = S(e.touches[0], e.touches[1]),
                                d = this._lastDistance ? u / this._lastDistance : 1,
                                l = I(s - c, a + o, n * d);
                            this._lastDistance = u, this.setState({
                                zoom: l
                            })
                        } else 2 === e.touches.length && this._handlePinchStart(e)
                    }, n._handleTapStart = function(e) {
                        var t = e.touches;
                        this._tapCenter = this._getZoomCenter(t[0].clientX, t[0].clientY)
                    }, n._handleDoubleTap = function(e) {
                        var t = this.props,
                            n = t.maxZoom,
                            r = t.onZoomed;
                        1 !== this.state.zoom ? this.resetZoom() : (this._updateWindowDimensions(), this.setState({
                            zoom: n,
                            zoomCenter: this._tapCenter || E.zoomCenter
                        }), r(!0))
                    }, n._getZoomCenter = function(e, t) {
                        this._zoomable instanceof Element && (this._itemDimensions = this._zoomable.getBoundingClientRect());
                        var n = this._itemDimensions;
                        return {
                            x: e - n.left,
                            y: t - n.top
                        }
                    }, n._updateWindowDimensions = function() {
                        this._windowDimensions = {
                            height: window.innerHeight,
                            width: window.innerWidth
                        }
                    }, t
                }(d.Component);
            c()(C, "defaultProps", {
                maxZoom: 2.5,
                maxZoomBounce: .15,
                minZoom: 1,
                minZoomBounce: .15,
                onTap: f.a,
                onZoomed: f.a,
                resetZoom: !1
            });
            var T = m.a.create((function(e) {
                return {
                    fill: {
                        flex: 1
                    }
                }
            }));
            t.a = C
        },
        "3A2y": function(e, t, n) {
            "use strict";
            n("LnO1"), n("3eMz"), n("dtAy"), n("DB+v");
            var r = n("zrOZ");
            t.a = function(e, t) {
                var n = Object(r.a)(Array.isArray(t) ? t : [t]);
                return Object.keys(e).reduce((function(t, r) {
                    return n.has(r) || (t[r] = e[r]), t
                }), {})
            }
        },
        "3GUV": function(e, t, n) {
            "use strict";
            var r = n("VbXa"),
                i = n.n(r),
                a = n("ERkP"),
                o = n("rHpw"),
                s = n("3xO4"),
                c = n.n(s),
                u = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.shouldComponentUpdate = function() {
                        return !1
                    }, n.render = function() {
                        return a.createElement(c.a, {
                            style: d.root
                        })
                    }, t
                }(a.Component),
                d = o.a.create((function(e) {
                    return {
                        root: {
                            height: 5 * parseInt(e.lineHeight, 10) + "rem"
                        }
                    }
                }));
            t.a = u
        },
        "5UID": function(e, t, n) {
            "use strict";
            var r = n("PJYZ"),
                i = n.n(r),
                a = n("VbXa"),
                o = n.n(a),
                s = n("lSNA"),
                c = n.n(s),
                u = n("ERkP"),
                d = n("3XMw"),
                l = n.n(d),
                f = n("rHpw"),
                p = (n("aWzz"), n("PARX")),
                h = n.n(p),
                m = n("3xO4"),
                v = n.n(m),
                _ = l.a.ca8dc768,
                b = 0,
                y = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_listDomId", "accessible-list-" + b++), t
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.title,
                            r = _({
                                title: n
                            });
                        return u.createElement(v.a, {
                            accessibilityRole: "region",
                            "aria-labelledby": this._listDomId
                        }, u.createElement(h.a, {
                            accessibilityRole: "heading",
                            "aria-level": 1,
                            nativeID: this._listDomId,
                            style: f.a.visuallyHidden
                        }, n), u.createElement(v.a, {
                            accessibilityLabel: r
                        }, t))
                    }, t
                }(u.Component);
            t.a = y
        },
        "6OUF": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return C
            }));
            n("PN9k"), n("cI1W");
            var r = n("97Jx"),
                i = n.n(r),
                a = n("LdEA"),
                o = n.n(a),
                s = n("1Pcy"),
                c = n.n(s),
                u = n("W/Kd"),
                d = n.n(u),
                l = n("KEM+"),
                f = n.n(l),
                p = n("ERkP"),
                h = n("t62R"),
                m = n("/yvb"),
                v = n("ZL4l"),
                _ = n.n(v),
                b = n("mN6z"),
                y = n("rHpw"),
                g = n("ioan"),
                E = n("aITJ"),
                O = n("3xO4"),
                I = n.n(O),
                S = (n("aWzz"), "pill"),
                C = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, f()(c()(t), "_blurOnBackspaceKeyUpForKaiOS", !1), f()(c()(t), "state", {
                            isFocused: !1
                        }), f()(c()(t), "getContainerStyle", (function() {
                            var e = t.props,
                                n = e.styleType,
                                r = e.multiline,
                                i = e.invalid,
                                a = t.state.isFocused;
                            return n === S ? [!i && !a && A.transparent, !a && D.fadedGrayColor, !r && T.infinite, D.root, i && A.invalid, !i && a && A.focused, a && D.transparentColor, r && T.round] : [A.none, D.root, D.fadedGrayColor]
                        })), f()(c()(t), "_handleBlur", (function(e) {
                            var n = t.props.onBlur;
                            t.setState({
                                isFocused: !1
                            }), n && n(e)
                        })), f()(c()(t), "_handleClear", (function(e) {
                            t.props.focusOnClear && t.focus(), t._textInput && t._textInput.clear()
                        })), f()(c()(t), "_handleChange", (function(e) {
                            var n = t.props.onChange;
                            t.setState({
                                isFocused: !0
                            }), n && n(e)
                        })), f()(c()(t), "_handleFocus", (function(e) {
                            var n = t.props.onFocus;
                            t.setState({
                                isFocused: !0
                            }), n && n(e)
                        })), f()(c()(t), "_handleKeyPress", (function(e) {
                            var n = t.props,
                                r = n.multiline,
                                i = n.onKeyPress,
                                a = n.onSubmitEditing;
                            i && i(e), e.isDefaultPrevented() || "Enter" !== e.key || e.shiftKey || r || !a || (e.preventDefault(), a(e))
                        })), f()(c()(t), "_handleKeyDown", (function(e) {
                            var n = t.props.onKeyDown,
                                r = 0 === t.getValue().length;
                            E.a.isKaiOS() && "Backspace" === e.key && r ? t._blurOnBackspaceKeyUpForKaiOS = r : n && n(e)
                        })), f()(c()(t), "_handleKeyUp", (function(e) {
                            var n = t.props.onKeyUp;
                            E.a.isKaiOS() && "Backspace" === e.key && t._blurOnBackspaceKeyUpForKaiOS && (e.preventDefault(), t.blur()), n && n(e)
                        })), f()(c()(t), "_setTextInputRef", (function(e) {
                            t._textInput = e
                        })), f()(c()(t), "_setRichTextInputRef", (function(e) {
                            t._richTextInput = e
                        })), t
                    }
                    d()(t, e);
                    var n = t.prototype;
                    return n.shouldComponentUpdate = function(e, t) {
                        return !Object(b.a)(this.props, e) || !Object(b.a)(this.state, t)
                    }, n.render = function() {
                        var e = this.props,
                            t = e.appTextSize,
                            n = e.onLayout,
                            r = e.renderCloseButton,
                            i = e.renderEmojiPicker,
                            a = e.renderContentAbove,
                            o = e.renderContentBelow,
                            s = e.editable,
                            c = e.style,
                            u = e.richTextInputContext,
                            d = e.withClearButton;
                        return p.createElement(I.a, {
                            onBlur: this._handleBlur,
                            onFocus: this._handleFocus,
                            onLayout: n,
                            style: [this.getContainerStyle(), !s && D.disabled, c]
                        }, a && a(), p.createElement(I.a, {
                            style: D.textInput
                        }, this._renderIcon(), p.createElement(h.b, {
                            size: t,
                            style: D.appText
                        }, u ? this._renderRichTextInput() : this._renderTextInput()), p.createElement(I.a, {
                            style: [R.root, i && R.withEmojiPicker]
                        }, r && this._renderCloseButton(), i && this._renderEmojiPicker(), d && this._renderClearButton())), o && o())
                    }, n._renderIcon = function() {
                        var e = this.props,
                            t = e.Icon,
                            n = e.iconStyle,
                            r = this.state.isFocused,
                            i = [x.root, r && x.focused, n];
                        return t ? p.createElement(I.a, {
                            style: R.leftIcon
                        }, p.createElement(t, {
                            style: i
                        })) : null
                    }, n._renderTextInput = function() {
                        var e = this.props,
                            t = (e.Icon, e.appTextSize, e.focusOnClear, e.handleReturn, e.iconStyle, e.inputStyle),
                            n = (e.invalid, e.keyCommandHandlers, e.onLayout, e.onSubmitEditing, e.renderCloseButton, e.renderContentAbove, e.renderContentBelow, e.renderEmojiPicker, e.richTextInputContext, e.style, e.styleType, e.withClearButton, o()(e, ["Icon", "appTextSize", "focusOnClear", "handleReturn", "iconStyle", "inputStyle", "invalid", "keyCommandHandlers", "onLayout", "onSubmitEditing", "renderCloseButton", "renderContentAbove", "renderContentBelow", "renderEmojiPicker", "richTextInputContext", "style", "styleType", "withClearButton"]));
                        return p.createElement(p.Fragment, null, E.a.isEdge() ? p.createElement("style", null, "input[type=text]::-ms-clear { display: none; }") : null, p.createElement(g.a, i()({}, n, {
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            placeholderTextColor: y.a.theme.colors.deepGray,
                            ref: this._setTextInputRef,
                            style: [w.root, t]
                        })))
                    }, n._renderRichTextInput = function() {
                        var e = this.props,
                            t = e.ariaAutocomplete,
                            n = e.ariaControls,
                            r = e.ariaActiveDescendant,
                            i = e.autoFocus,
                            a = e.ariaLabel,
                            o = e.inputStyle,
                            s = e.keyCommandHandlers,
                            c = e.numberOfLines,
                            u = e.maxNumberOfLines,
                            d = e.onFilesAdded,
                            l = e.placeholder,
                            f = e.positionCursorAtEnd,
                            h = e.richTextInputContext,
                            m = e.handleReturn,
                            v = e.testID,
                            _ = h || {},
                            b = _.dismissComposerCommandName,
                            y = _.editorState,
                            g = _.element,
                            E = _.sendTweetCommandName,
                            O = [w.root, w.rich];
                        return g && y ? p.createElement(I.a, {
                            style: [w.richContainer, o]
                        }, p.createElement(g, {
                            ariaActiveDescendant: r,
                            ariaAutocomplete: t,
                            ariaControls: n,
                            ariaLabel: a,
                            autoFocus: i,
                            dismissComposerCommandName: b,
                            editorState: y,
                            handleReturn: m,
                            keyCommandHandlers: s,
                            maxNumberOfLines: u,
                            numberOfLines: c,
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFilesAdded: d,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            placeholder: l,
                            positionCursorAtEnd: f,
                            ref: this._setRichTextInputRef,
                            sendTweetCommandName: E,
                            style: O,
                            testID: v
                        })) : null
                    }, n._renderClearButton = function() {
                        var e = p.createElement(m.a, {
                            accessible: !1,
                            icon: p.createElement(_.a, {
                                style: j.icon
                            }),
                            onPress: this._handleClear,
                            size: "smallCompact",
                            style: j.root,
                            type: "primary"
                        });
                        return this.getValue() ? e : p.createElement(I.a, null)
                    }, n._renderEmojiPicker = function() {
                        var e = this.props.renderEmojiPicker;
                        return e ? p.createElement(I.a, null, e && e()) : null
                    }, n._renderCloseButton = function() {
                        var e = this.props.renderCloseButton;
                        return e ? p.createElement(I.a, {
                            style: R.closeButton
                        }, e && e()) : null
                    }, n.applyFinalValue = function(e) {
                        var t = this;
                        this.focus(), window.requestAnimationFrame((function() {
                            t.blur(), e(t.getValue())
                        }))
                    }, n.blur = function() {
                        this._richTextInput && this._richTextInput.blur(), this._textInput && this._textInput.blur()
                    }, n.focus = function() {
                        this._richTextInput && this._richTextInput.focus(), this._textInput && this._textInput.focus()
                    }, n.getValue = function() {
                        var e = this.props,
                            t = e.richTextInputContext,
                            n = e.value;
                        return t ? this._richTextInput && this._richTextInput.value() || n || "" : this._textInput && this._textInput.getValue() || n || ""
                    }, n.getTextInputHeight = function() {
                        var e = this.props.richTextInputContext,
                            t = 2 * parseInt(y.a.theme.spaces.xSmall, 10),
                            n = 2 * parseInt(y.a.theme.borderWidths.small, 10);
                        return e ? this._richTextInput && this._richTextInput.getOffsetHeight() + t + n : this._textInput && this._textInput.getOffsetHeight() + n
                    }, t
                }(p.Component);
            f()(C, "defaultProps", {
                appTextSize: "normal",
                autoComplete: "on",
                styleType: S,
                autoCorrect: !0,
                editable: !0,
                focusOnClear: !0,
                withClearButton: !1
            }), C.propTypes = {};
            var T = y.a.create((function(e) {
                    return {
                        infinite: {
                            borderRadius: e.borderRadii.infinite
                        },
                        round: {
                            borderRadius: "calc(" + e.borderRadii.large + " + " + e.borderWidths.small + " * 2)"
                        },
                        none: {
                            borderRadius: 0
                        }
                    }
                })),
                A = y.a.create((function(e) {
                    return {
                        transparent: {
                            borderColor: e.colors.transparent,
                            borderStyle: "solid",
                            borderWidth: e.borderWidths.small
                        },
                        focused: {
                            borderColor: e.colors.primary,
                            borderStyle: "solid",
                            borderWidth: e.borderWidths.small
                        },
                        invalid: {
                            borderColor: e.colors.red,
                            borderStyle: "solid",
                            borderWidth: e.borderWidths.small
                        },
                        none: {
                            borderWidth: 0
                        }
                    }
                })),
                w = y.a.create((function(e) {
                    return {
                        root: {
                            backgroundColor: "transparent",
                            borderRadius: 0,
                            borderWidth: 0,
                            boxSizing: "border-box",
                            color: "inherit",
                            outlineStyle: "none",
                            fontFamily: "inherit",
                            fontSize: "inherit",
                            padding: e.spaces.xSmall,
                            textAlign: "inherit"
                        },
                        richContainer: {
                            width: "100%",
                            padding: e.spaces.xSmall
                        },
                        rich: {
                            padding: 0
                        }
                    }
                })),
                x = y.a.create((function(e) {
                    return {
                        root: {
                            color: e.colors.deepGray,
                            minWidth: e.spaces.large,
                            paddingLeft: e.spaces.xSmall
                        },
                        focused: {
                            color: e.colors.primary
                        }
                    }
                })),
                j = y.a.create((function(e) {
                    return {
                        root: {
                            borderWidth: 0,
                            marginRight: e.spaces.xSmall
                        },
                        icon: {
                            width: "10px",
                            height: "10px",
                            color: e.colors.cellBackground
                        }
                    }
                })),
                R = y.a.create((function(e) {
                    return {
                        root: {
                            display: "flex",
                            justifyContent: "center"
                        },
                        withEmojiPicker: {
                            display: "flex",
                            justifyContent: "flex-end",
                            flexDirection: "column"
                        },
                        closeButton: {
                            flexGrow: 1
                        },
                        leftIcon: {
                            display: "flex",
                            justifyContent: "center"
                        }
                    }
                })),
                D = y.a.create((function(e) {
                    return {
                        root: {
                            flexDirection: "column",
                            flexGrow: 1,
                            flexShrink: 1,
                            justifyContent: "center"
                        },
                        disabled: {
                            cursor: "default",
                            opacity: .8
                        },
                        fadedGrayColor: {
                            backgroundColor: e.colors.fadedGray
                        },
                        transparentColor: {
                            backgroundColor: "transparent"
                        },
                        textInput: {
                            flexDirection: "row"
                        },
                        appText: {
                            display: "flex",
                            flexGrow: 1
                        }
                    }
                }))
        },
        "7myi": function(e, t, n) {
            "use strict";
            var r = n("PJYZ"),
                i = n.n(r),
                a = n("VbXa"),
                o = n.n(a),
                s = n("lSNA"),
                c = n.n(s),
                u = n("ERkP"),
                d = n("oEoC"),
                l = n("2dXj"),
                f = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "state", {
                            queryContext: void 0,
                            canShowTypeahead: !1
                        }), c()(i()(t), "render", (function() {
                            var e = t.props,
                                n = e.contextText,
                                r = e.children,
                                i = e.isInline,
                                a = e.onTypeaheadStateChange,
                                o = e.source,
                                s = t.state,
                                c = s.queryContext,
                                d = s.canShowTypeahead && c ? {
                                    word: c.word,
                                    resultType: c.resultType
                                } : void 0;
                            return u.createElement(l.a, {
                                contextText: n,
                                isInline: i,
                                onDismiss: t._handleDismiss,
                                onSelectItem: t._handleSelectItem,
                                onTypeaheadStateChange: a,
                                query: d,
                                setRef: t._setGenericWrapperRef,
                                source: o
                            }, r(t._handleInputChange))
                        })), c()(i()(t), "_handleSelectItem", (function(e) {
                            var n = t.props.onTextUpdated,
                                r = t.state.queryContext;
                            if (r) {
                                var i = "users" === r.resultType && "user" === e.type ? "@" + e.data.screen_name + " " : (e.data.topic || e.data.text || "") + " ",
                                    a = t._replaceToken(i, r),
                                    o = a.newCursor,
                                    s = a.newTweetText;
                                n({
                                    target: {
                                        value: s
                                    }
                                }), t._updateDOMTextArea(o, s)
                            }
                            t._setQueryContext(void 0)
                        })), c()(i()(t), "_updateDOMTextArea", (function(e, n) {
                            t._textAreaRef && (t._textAreaRef.value = n, t._textAreaRef.selectionStart = e, t._textAreaRef.selectionEnd = e, t._textAreaRef.focus())
                        })), c()(i()(t), "_handleInputChange", (function(e) {
                            var n = e && (e.currentTarget || e.target),
                                r = t.state.queryContext;
                            t._textAreaRef = n;
                            var i = r && r.fullText,
                                a = n.value;
                            if (i !== a) {
                                t._genericWrapperRef && t._genericWrapperRef.resetSelectedItem();
                                var o = d.c(n.selectionStart, a),
                                    s = o.word,
                                    c = o.start;
                                if (-1 === c) t._setQueryContext(void 0);
                                else {
                                    var u = d.d(s || "", "compose");
                                    if (u) {
                                        var l = u.q,
                                            f = u.result_type;
                                        t._setQueryContext({
                                            word: l,
                                            resultType: f,
                                            cursorPosition: n.selectionStart,
                                            fullText: n.value,
                                            startIndex: c
                                        })
                                    } else t._setQueryContext(void 0)
                                }
                            }
                        })), c()(i()(t), "_setGenericWrapperRef", (function(e) {
                            t._genericWrapperRef = e
                        })), c()(i()(t), "_setQueryContext", (function(e) {
                            return t.setState({
                                queryContext: e,
                                canShowTypeahead: !!e
                            })
                        })), c()(i()(t), "_handleDismiss", (function() {
                            return t.setState({
                                canShowTypeahead: !1
                            })
                        })), t
                    }
                    return o()(t, e), t.prototype._replaceToken = function(e, t) {
                        var n = t.fullText,
                            r = t.startIndex,
                            i = n.slice(0, r),
                            a = t.cursorPosition;
                        return {
                            newTweetText: i + e + n.slice(a),
                            newCursor: i.length + e.length
                        }
                    }, t
                }(u.Component);
            t.a = f
        },
        AQOc: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return c
            })), n.d(t, "a", (function() {
                return u
            }));
            var r = n("8OQS"),
                i = n.n(r),
                a = (n("LnO1"), n("3eMz"), n("dtAy"), n("PN9k"), {
                    entries: {},
                    entryIdsByConversationId: {},
                    reactionsByMessageId: {}
                }),
                o = function(e, t) {
                    return void 0 === e && (e = []), void 0 === t && (t = {}), e.reduce((function(e, n) {
                        var r = n.user_id,
                            i = t[r] || {
                                id_str: r
                            };
                        return e[r] = Object.assign({}, n, {
                            user: i
                        }), e
                    }), {})
                },
                s = function(e, t) {
                    var n = t.entries;
                    return (t.entryIdsByConversationId[e] || []).map((function(e) {
                        return n[e] && n[e].data
                    })).filter(Boolean)
                },
                c = function(e, t, n) {
                    void 0 === e && (e = {}), void 0 === t && (t = a);
                    var r = e,
                        s = r.conversation_id,
                        c = r.participants,
                        u = i()(r, ["conversation_id", "participants"]);
                    return Object.assign({
                        conversation_id: s
                    }, u, {
                        entries: t.entryIdsByConversationId[s] || [],
                        participants: o(c, n)
                    })
                },
                u = function(e, t, n) {
                    void 0 === e && (e = {});
                    var r = e,
                        a = r.conversation_id,
                        c = r.participants,
                        u = i()(r, ["conversation_id", "participants"]);
                    return Object.assign({
                        conversation_id: a
                    }, u, {
                        entries: s(a, t),
                        participants: o(c, n)
                    })
                }
        },
        BU0j: function(e, t, n) {
            "use strict";
            n("0ra8");
            var r = n("8OQS"),
                i = n.n(r),
                a = n("VbXa"),
                o = n.n(a),
                s = n("lSNA"),
                c = n.n(s),
                u = n("+/5o"),
                d = n("ERkP"),
                l = n("HPNB"),
                f = n("VAZu"),
                p = n("o94C"),
                h = n("wiP2"),
                m = n("cHvH"),
                v = n("Es6L"),
                _ = (n("PN9k"), n("rHpw")),
                b = _.a.create((function(e) {
                    return {
                        fill: {
                            flex: 1,
                            alignSelf: "stretch"
                        },
                        viewportView: Object.assign({}, _.a.absoluteFillObject, {
                            overflowY: "auto"
                        }),
                        appBarContainer: {
                            backfaceVisibility: "hidden",
                            position: "sticky",
                            top: 0,
                            zIndex: 1
                        }
                    }
                })),
                y = n("3xO4"),
                g = n.n(y),
                E = n("yw4N"),
                O = n("TnY3"),
                I = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    o()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this;
                        return d.createElement(m.a, null, (function(t) {
                            var n = t.windowWidth;
                            return l.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                        }))
                    }, n._renderForOneColumnLayout = function() {
                        var e = this.props,
                            t = (e.screenType, e.children),
                            n = i()(e, ["screenType", "children"]);
                        return d.createElement(d.Fragment, null, Object(v.a)() ? this._renderInlineNav({
                            isTwoColumnLayout: !1
                        }) : d.createElement(h.a.Configure, n), t)
                    }, n._renderForTwoColumnLayout = function() {
                        return d.createElement(d.Fragment, null, this._renderInlineNav({
                            isTwoColumnLayout: !0
                        }), this._renderChildren())
                    }, n._renderInlineNav = function(e) {
                        var t = e.isTwoColumnLayout,
                            n = this.props,
                            r = n.backLocation,
                            i = n.documentTitle,
                            a = n.headerless,
                            o = n.history,
                            s = n.location,
                            c = n.onBackClick,
                            l = n.rightControl,
                            p = n.screenType,
                            m = n.searchBoxOptions,
                            v = n.secondaryBar,
                            _ = n.showSubtitleOnWideDetail,
                            y = n.subtitle,
                            E = n.title,
                            O = n.withDetailOpen,
                            I = n.withSearchBox,
                            S = "master" === p,
                            C = "secondaryMaster" === p,
                            T = "primaryDetail" === p,
                            A = S || T && t,
                            w = S ? u.c : T ? u.b : void 0,
                            x = d.createElement(g.a, {
                                style: b.appBarContainer
                            }, d.createElement(f.a, {
                                backLocation: r,
                                fixed: !1,
                                hideBackButton: A,
                                history: o,
                                location: s,
                                onBackClick: c,
                                rightControl: l,
                                subtitle: T && _ ? y : void 0,
                                title: E,
                                titleDomId: w,
                                withBottomBorder: !v
                            })),
                            j = S || C && O ? null : d.createElement(h.a.Configure, {
                                backLocation: r,
                                documentTitle: i,
                                headerless: a,
                                onBackClick: c,
                                rightControl: l,
                                searchBoxOptions: m,
                                subtitle: y,
                                title: E,
                                withSearchBox: I
                            });
                        return d.createElement(d.Fragment, null, j, x, v)
                    }, n._renderChildren = function() {
                        var e = this.props.children;
                        return this.context.masterDetailPerColumnScroll ? d.createElement(g.a, {
                            style: b.fill
                        }, d.createElement(E.a, {
                            style: b.viewportView
                        }, e)) : e
                    }, t
                }(d.Component);
            c()(I, "contextType", p.a), c()(I, "defaultProps", {
                screenType: "secondaryDetail",
                showSubtitleOnWideDetail: !0
            });
            t.a = Object(O.a)(I)
        },
        BUB3: function(e, t, n) {
            "use strict";
            n("PN9k");
            var r = n("8OQS"),
                i = n.n(r),
                a = n("ERkP"),
                o = n("sNn6"),
                s = n("rHpw"),
                c = n("3xO4"),
                u = n.n(c),
                d = s.a.create((function(e) {
                    return {
                        activeRoot: {
                            backgroundColor: e.colors.faintGray
                        },
                        overlay: Object.assign({}, s.a.absoluteFillObject, {
                            borderRightStyle: "solid",
                            borderRightWidth: e.borderWidths.medium,
                            borderRightColor: e.colors.primary,
                            zIndex: 1
                        })
                    }
                }));
            t.a = function(e) {
                var t = e.children,
                    n = i()(e, ["children"]);
                return a.createElement(o.a, n, (function(e) {
                    return a.createElement(u.a, {
                        style: [e && d.activeRoot]
                    }, "function" == typeof t ? t(e) : t, e ? a.createElement(u.a, {
                        pointerEvents: "none",
                        style: d.overlay
                    }) : null)
                }))
            }
        },
        "CK8+": function(e, t, n) {
            "use strict";
            var r = n("97Jx"),
                i = n.n(r),
                a = n("W/Kd"),
                o = n.n(a),
                s = n("KEM+"),
                c = n.n(s),
                u = n("ERkP"),
                d = n("s7+0"),
                l = n.n(d),
                f = n("rHpw"),
                p = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = f.a.theme.colors;
                        return u.createElement(l.a, i()({
                            activeThumbColor: e.primary,
                            activeTrackColor: e.lightPrimary
                        }, this.props))
                    }, t
                }(u.Component);
            c()(p, "displayName", "@twitter/Switch"), p.propTypes = {}, t.a = p
        },
        EPsT: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            }));
            var r = n("PJYZ"),
                i = n.n(r),
                a = n("VbXa"),
                o = n.n(a),
                s = n("lSNA"),
                c = n.n(s),
                u = n("ERkP"),
                d = n("jtO7"),
                l = n("eb3s"),
                f = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this, t) || this, c()(i()(n), "_handleClick", (function(e) {
                            n.setState({
                                showConfirmation: !0
                            })
                        })), c()(i()(n), "_handleCancel", (function() {
                            n.setState({
                                showConfirmation: !1
                            })
                        })), c()(i()(n), "_handleConfirm", (function() {
                            n.setState({
                                showConfirmation: !1
                            }), n.props.onConfirmationSheetConfirm()
                        })), n.state = {
                            showConfirmation: !1
                        }, n
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.color,
                            n = e.confirmationSheetConfirmButtonLabel,
                            r = e.confirmationSheetHeadline,
                            i = e.confirmationSheetText,
                            a = e.label,
                            o = e.confirmationSheetConfirmButtonType,
                            s = e.withBottomBorder;
                        return u.createElement(u.Fragment, null, u.createElement(d.a, {
                            color: t,
                            label: a,
                            onPress: this._handleClick,
                            withBottomBorder: s
                        }), this.state.showConfirmation ? u.createElement(l.a, {
                            confirmButtonLabel: n,
                            confirmButtonType: o,
                            headline: r,
                            onCancel: this._handleCancel,
                            onConfirm: this._handleConfirm,
                            text: i
                        }) : null)
                    }, t
                }(u.Component);
            c()(f, "defaultProps", {
                color: "red"
            })
        },
        GSsg: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            n("KYm4");
            var r = n("B5iK"),
                i = function() {
                    function e(e, t) {
                        void 0 === t && (t = Object.freeze({}));
                        var n = t,
                            i = n.interval,
                            a = void 0 === i ? 6e4 : i,
                            o = n.burstInterval,
                            s = void 0 === o ? 3e3 : o,
                            c = n.burstDuration,
                            u = void 0 === c ? 3e5 : c;
                        this.pollTimer = new r.b(a).interval(e), this.burstTimer = new r.a(this.pollTimer, s, u)
                    }
                    var t = e.prototype;
                    return t.start = function(e) {
                        return this.pollTimer.start(), e && this.burstTimer.requestBurst(), this
                    }, t.stop = function() {
                        return this.burstTimer.stopBurst(), this.pollTimer.stop(), this
                    }, t.restart = function() {
                        return this.stop(), this.start(), this
                    }, e
                }()
        },
        "K2+g": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = o(n("7DT3")),
                i = o(n("ERkP")),
                a = o(n("OkZJ"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [a.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), i.default.createElement("g", null, i.default.createElement("path", {
                    d: "M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"
                }), i.default.createElement("path", {
                    d: "M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var c = s;
            t.default = c
        },
        LMPK: function(e, t, n) {
            "use strict";
            n.d(t, "i", (function() {
                return T
            })), n.d(t, "e", (function() {
                return w
            })), n.d(t, "f", (function() {
                return x
            })), n.d(t, "h", (function() {
                return j
            })), n.d(t, "d", (function() {
                return R
            })), n.d(t, "g", (function() {
                return D
            })), n.d(t, "a", (function() {
                return N
            })), n.d(t, "j", (function() {
                return k
            })), n.d(t, "b", (function() {
                return L
            })), n.d(t, "c", (function() {
                return F
            }));
            n("AJ0U");
            var r, i = n("RIqP"),
                a = n.n(i),
                o = (n("DB+v"), n("yKDW"), n("LnO1"), n("3eMz"), n("4oWw"), n("8OQS")),
                s = n.n(o),
                c = (n("p+GS"), n("dtAy"), n("PN9k"), n("AspN")),
                u = n("xPna"),
                d = n("jxu1"),
                l = n("lnti"),
                f = n("oEOe"),
                p = n("xCUF"),
                h = n("ude7"),
                m = n("/NU0"),
                v = n("Ssj5"),
                _ = n("fEA7"),
                b = n.n(_),
                y = n("uKEd"),
                g = function(e) {
                    return "rweb/directMessagesDraft/" + e
                },
                E = {
                    gifMetadata: null,
                    mediaMetadata: void 0,
                    isUploading: !1,
                    mediaId: null
                };
            v.a.register(((r = {}).directMessagesDraft = function(e, t) {
                void 0 === e && (e = E);
                switch (t.type) {
                    case M:
                    case P:
                        return Object.assign({}, e, {}, t.payload);
                    case V:
                        return Object.assign({}, e, {
                            isUploading: !0
                        });
                    case B:
                        return Object.assign({}, e, {
                            isUploading: !1
                        });
                    case H:
                    case W:
                        return Object.assign({}, e, {
                            isUploading: !1,
                            mediaId: null
                        });
                    case U:
                        return E;
                    default:
                        return e
                }
            }, r));
            var O = function(e) {
                    var t = e.conversation_id,
                        n = e.id,
                        r = e.recipient_ids,
                        i = e.sender_id,
                        a = e.text,
                        o = e.attachment,
                        s = void 0 === o ? {} : o,
                        c = e.error,
                        u = Date.now().toString();
                    return {
                        conversation_id: t,
                        recipient_ids: r,
                        error: c,
                        id: n,
                        isEmojiOnly: !!(!s.photo && !s.animated_gif) && Object(d.a)({
                            text: a
                        }),
                        is_draft: !0,
                        message_data: {
                            attachment: s,
                            sender_id: i,
                            text: a,
                            time: u
                        },
                        type: "message",
                        time: u
                    }
                },
                I = g("SEND_MESSAGE_REQUEST"),
                S = g("SEND_MESSAGE_SUCCESS"),
                C = g("SEND_MESSAGE_FAILURE"),
                T = function(e) {
                    return function(t, n, r) {
                        var i = r.api;
                        t(z());
                        var o = n(),
                            d = e || {},
                            v = d.senderId,
                            _ = d.conversationId,
                            g = d.recipients,
                            E = void 0 === g ? [] : g,
                            T = d.requestId,
                            w = void 0 === T ? b.a.v1() : T,
                            j = d.tweetAttachment,
                            P = d.quickReply,
                            N = s()(d, ["senderId", "conversationId", "recipients", "requestId", "tweetAttachment", "quickReply"]),
                            M = A(n()),
                            k = (c.g(o, M)[0] || {}).mediaFile,
                            B = E.length > 0 && E.join(","),
                            L = c.k(M),
                            U = [t(L)],
                            V = (R(o) || {}).found_media_origin,
                            W = D(o);
                        return k && k.isGif && U.push(Object(h.a)(k)), Promise.all(U).then((function(r) {
                            var o = r[0][0],
                                s = r[1];
                            if (!x(n())) throw new Error("Upload cancelled");
                            var d = W && Object.keys(W).length && W[o.id] && (W[o.id].altText || W[o.id].defaultAltText),
                                h = !!d;
                            return (o && (V || h) ? t(Object(c.i)(Object.assign({
                                media_id: o.uploadId,
                                found_media_origin: V
                            }, !!h && {
                                alt_text: {
                                    text: d
                                }
                            }))) : Promise.resolve()).then((function() {
                                var n = (j || {}).id_str,
                                    r = {};
                                if (o) {
                                    var c = o.mediaFile,
                                        d = void 0 === c ? {} : c,
                                        h = {
                                            original_info: {
                                                width: d.width,
                                                height: d.height
                                            },
                                            sizes: [{
                                                h: d.height,
                                                w: d.width,
                                                resize: "fit"
                                            }]
                                        };
                                    d.isImage ? r.photo = Object.assign({}, h, {
                                        media_url_https: d.url
                                    }) : d.isGif ? r.animated_gif = Object.assign({}, h, {
                                        media_url_https: s,
                                        type: "animated_gif"
                                    }) : d.isVideo && (r.video = Object.assign({}, h, {
                                        media_url_https: d.url,
                                        type: "video"
                                    }))
                                } else j && (r.tweet = {
                                    status: n
                                });
                                var b = (o || {}).uploadId,
                                    g = O({
                                        attachment: r,
                                        conversation_id: _,
                                        id: w,
                                        recipient_ids: B,
                                        sender_id: v,
                                        text: e.text
                                    }),
                                    E = Object.assign({}, N, {
                                        conversation_id: _,
                                        media_id: b,
                                        recipient_ids: B,
                                        request_id: w,
                                        tweet_id: n
                                    });
                                P && (E["quick_reply_response[options][id]"] = P.id, E["quick_reply_response[options][selected_id]"] = P.selected_id);
                                var T = Object(l.a)([G(), {
                                    type: p.c.REQUEST
                                }, {
                                    type: I
                                }, _ && Object(y.b)(_, w, g)]);
                                return t(T), i.DirectMessages.sendMessage(E).then((function(n) {
                                    var r = n.entities,
                                        i = r.entries,
                                        o = r.users,
                                        s = r.tweets,
                                        c = r.cards,
                                        d = n.result.conversations;
                                    Object(m.a)(M) && t(F(M));
                                    var f = Object(l.a)([{
                                        type: p.c.SUCCESS
                                    }].concat(a()(Object(u.b)({
                                        conversations: d,
                                        entries: i,
                                        users: o,
                                        tweets: s,
                                        cards: c
                                    })), [{
                                        type: S
                                    }, _ && Object(y.j)(_, w, e)]));
                                    return t(f), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                                }), (function(n) {
                                    var i = O({
                                            attachment: r,
                                            conversation_id: _,
                                            error: !0,
                                            id: w,
                                            recipient_ids: B,
                                            sender_id: v,
                                            text: e.text
                                        }),
                                        a = Object(l.a)([{
                                            type: p.c.SUCCESS
                                        }, {
                                            type: C
                                        }, _ && Object(y.b)(_, w, i)]);
                                    return t(a), Object(f.e)(t, n, "ACTION_SEND_DM")
                                }))
                            }), (function(e) {
                                return t(K()), e.type = "metadata", Promise.reject(e)
                            }))
                        }), (function(e) {
                            return t(Object(l.a)([Object(m.a)(M) && F(M), K()])), Promise.reject(e)
                        }))
                    }
                },
                A = function(e) {
                    return e.directMessagesDraft.mediaId
                },
                w = function(e) {
                    var t = c.g(e, A(e));
                    return t.length > 0 ? t[0] : null
                },
                x = function(e) {
                    return e.directMessagesDraft.isUploading
                },
                j = function(e) {
                    return c.h(e, A(e))
                },
                R = function(e) {
                    return e.directMessagesDraft.gifMetadata
                },
                D = function(e) {
                    return e.directMessagesDraft.mediaMetadata
                },
                P = g("ADD_MEDIA"),
                N = function(e, t, n) {
                    return {
                        payload: {
                            isUploading: !1,
                            mediaId: e[0],
                            gifMetadata: t,
                            mediaMetadata: n
                        },
                        type: P
                    }
                },
                M = g("UPDATE_MEDIA_METADATA"),
                k = function(e) {
                    return {
                        payload: e,
                        type: M
                    }
                },
                B = g("CANCEL_UPLOAD"),
                L = function() {
                    return {
                        type: B
                    }
                },
                U = g("REMOVE_MEDIA"),
                F = function(e) {
                    return function(t) {
                        t(c.e(e)), t([L(), {
                            type: U
                        }])
                    }
                },
                V = g("UPLOAD_REQUEST"),
                z = function() {
                    return {
                        type: V
                    }
                },
                W = g("UPLOAD_SUCCESS"),
                G = function() {
                    return {
                        type: W
                    }
                },
                H = g("UPLOAD_FAILURE"),
                K = function() {
                    return {
                        type: H
                    }
                }
        },
        LfYE: function(e, t, n) {
            e.exports = n.p + "twemoji_sprite_high_res.4463ed34.png"
        },
        MLl7: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return a
            }));
            n("LnO1"), n("3eMz"), n("dtAy"), n("AJ0U"), n("KYm4");
            var r = Object.freeze({
                    Composition: "composition",
                    DMComposition: "dm_composition"
                }),
                i = function(e) {
                    return Object.values(r).indexOf(e) >= 0
                },
                a = function(e, t) {
                    return "boolean" == typeof e ? e : t
                }
        },
        MMRb: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("9OUN"),
                i = n("lRnM"),
                a = n("uKEd"),
                o = n("AQ79");
            n.d(t, "GLOBAL_STATE_KEY", (function() {
                return o.a
            }));
            var s, c = n("xPna"),
                u = n("Ssj5"),
                d = n("xCUF"),
                l = n("aWyx");
            n.d(t, "CONVERSATION_TYPE", (function() {
                return l.a
            })), n.d(t, "ENTRY_TYPE", (function() {
                return l.b
            })), n.d(t, "PAGINATION_STATUS", (function() {
                return l.c
            })), n.d(t, "addParticipants", (function() {
                return i.d
            })), n.d(t, "selectConversation", (function() {
                return i.t
            })), n.d(t, "selectConversationAvatarMediaId", (function() {
                return i.u
            })), n.d(t, "selectConversationFetchStatus", (function() {
                return i.x
            })), n.d(t, "selectConversationIsLoaded", (function() {
                return i.y
            })), n.d(t, "selectConversationIsRead", (function() {
                return i.z
            })), n.d(t, "selectConversationAvatarMediaIsUploading", (function() {
                return i.v
            })), n.d(t, "selectConversationAvatarMediaUploadProgress", (function() {
                return i.w
            })), n.d(t, "selectConversations", (function() {
                return i.B
            })), n.d(t, "selectEntries", (function() {
                return a.l
            })), n.d(t, "selectEntriesForConversation", (function() {
                return a.m
            })), n.d(t, "selectEntry", (function() {
                return a.n
            })), n.d(t, "selectInbox", (function() {
                return c.m
            })), n.d(t, "selectFetchStatus", (function() {
                return c.l
            })), n.d(t, "selectInboxIsLoaded", (function() {
                return c.n
            })), n.d(t, "selectIsLoadingTop", (function() {
                return c.o
            })), n.d(t, "selectUnreadCount", (function() {
                return c.q
            })), n.d(t, "selectUntrustedCursor", (function() {
                return c.s
            })), n.d(t, "selectUntrustedUnreadCount", (function() {
                return c.v
            })), n.d(t, "selectUntrustedConversationCount", (function() {
                return c.r
            })), n.d(t, "selectUntrustedLowQualityCursor", (function() {
                return c.u
            })), n.d(t, "selectUntrustedLowQualityConversationCount", (function() {
                return c.t
            })), n.d(t, "selectPoppedOutConversationId", (function() {
                return c.p
            })), n.d(t, "selectDrawerVisibility", (function() {
                return c.k
            })), n.d(t, "selectUpdates", (function() {
                return d.e
            })), n.d(t, "acceptConversation", (function() {
                return i.a
            })), n.d(t, "addAvatarMedia", (function() {
                return i.b
            })), n.d(t, "addWelcomeMessageToConversation", (function() {
                return i.e
            })), n.d(t, "disableMentionNotifications", (function() {
                return i.g
            })), n.d(t, "disableNotifications", (function() {
                return i.h
            })), n.d(t, "enableMentionNotifications", (function() {
                return i.i
            })), n.d(t, "enableNotifications", (function() {
                return i.j
            })), n.d(t, "fetchConversation", (function() {
                return i.k
            })), n.d(t, "fetchConversationFromParticipants", (function() {
                return i.l
            })), n.d(t, "fetchConversationIfNeeded", (function() {
                return i.n
            })), n.d(t, "fetchConversationHistory", (function() {
                return i.m
            })), n.d(t, "leaveConversation", (function() {
                return i.o
            })), n.d(t, "markAllAsRead", (function() {
                return i.p
            })), n.d(t, "markConversationRead", (function() {
                return i.q
            })), n.d(t, "removeAvatarMedia", (function() {
                return i.r
            })), n.d(t, "removeConversation", (function() {
                return i.s
            })), n.d(t, "setConversationAvatar", (function() {
                return i.C
            })), n.d(t, "toggleNotifications", (function() {
                return i.D
            })), n.d(t, "updateConversationReadState", (function() {
                return i.I
            })), n.d(t, "updateConversationAvatar", (function() {
                return i.E
            })), n.d(t, "updateConversationName", (function() {
                return i.G
            })), n.d(t, "updateTyping", (function() {
                return i.J
            })), n.d(t, "fetchInbox", (function() {
                return c.d
            })), n.d(t, "fetchInboxIfNeeded", (function() {
                return c.e
            })), n.d(t, "fetchTrustedInboxHistory", (function() {
                return c.f
            })), n.d(t, "fetchUntrustedInboxHistory", (function() {
                return c.g
            })), n.d(t, "fetchUntrustedLowQualityInboxHistory", (function() {
                return c.h
            })), n.d(t, "updateLastSeenEventId", (function() {
                return c.x
            })), n.d(t, "updateTrustedLastSeenEventId", (function() {
                return c.y
            })), n.d(t, "updateUntrustedLastSeenEventId", (function() {
                return c.z
            })), n.d(t, "popOutConversation", (function() {
                return c.j
            })), n.d(t, "setDrawerVisibility", (function() {
                return c.w
            })), n.d(t, "deleteEntry", (function() {
                return a.f
            })), n.d(t, "markSpamStatus", (function() {
                return a.h
            })), n.d(t, "removeEntry", (function() {
                return a.j
            })), n.d(t, "fetchUpdates", (function() {
                return d.b
            })), n.d(t, "fetchUpdatesIfNeeded", (function() {
                return d.d
            }));
            var f = Object(r.c)({
                conversations: i.f,
                entries: a.e,
                inbox: c.c,
                updates: d.a
            });
            u.a.register(((s = {})[o.a] = f, s)), t.default = f
        },
        OhSZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            n("yIC7");
            var r = n("ERkP"),
                i = n("aWyx"),
                a = n("XnpN"),
                o = n("jV+4"),
                s = n("t62R"),
                c = n("p9G8"),
                u = function(e) {
                    return void 0 === e && (e = []), e.map((function(e) {
                        return e.data
                    }))
                },
                d = function(e) {
                    var t = e.conversation,
                        n = e.newConversationParticipants,
                        r = e.perspective;
                    if (t) return t.type === i.a.ONE_TO_ONE ? Object(a.a)(t, r).map((function(e) {
                        return e.user
                    }))[0].name : Object(c.a)(t, r);
                    var o = u(n);
                    return Object(c.b)(o, r)
                };
            t.b = function(e) {
                var t = e.conversation,
                    n = e.newConversationParticipants,
                    d = e.perspective,
                    l = e.titleWeight,
                    f = void 0 === l ? "bold" : l,
                    p = e.withScreenName,
                    h = void 0 === p || p;
                if (t) {
                    if (t.type === i.a.ONE_TO_ONE) {
                        var m = Object(a.a)(t, d).map((function(e) {
                            return e.user
                        }))[0];
                        return r.createElement(o.a, {
                            isProtected: m.protected,
                            isVerified: m.verified,
                            name: m.name,
                            screenName: m.screen_name,
                            weight: f,
                            withLink: !1,
                            withScreenName: h
                        })
                    }
                    return r.createElement(s.b, {
                        numberOfLines: 1,
                        weight: f
                    }, Object(c.a)(t, d))
                }
                var v = u(n);
                return r.createElement(s.b, {
                    numberOfLines: 1,
                    weight: f
                }, Object(c.b)(v, d))
            }
        },
        RCZO: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "e", (function() {
                return f
            })), n.d(t, "b", (function() {
                return p
            })), n.d(t, "c", (function() {
                return h
            })), n.d(t, "d", (function() {
                return m
            })), n.d(t, "f", (function() {
                return v
            }));
            var r = n("ZUOq"),
                i = n("n4Eu"),
                a = n("h/wS"),
                o = function(e, t) {
                    return "rgba(" + e.rgb.red + ", " + e.rgb.green + ", " + e.rgb.blue + ", " + t + ")"
                },
                s = function(e) {
                    var t = e && i.a.getForGallery(e);
                    return t ? {
                        rgb: v(t),
                        rgba: o(t, .9)
                    } : d
                },
                c = r.a.columnWidths.primary,
                u = function(e) {
                    return Math.min(c, e)
                },
                d = {
                    rgb: "rgb(0, 0, 0)",
                    rgba: "rgba(0, 0, 0, 0.9)"
                },
                l = {
                    transitionProperty: "background-color",
                    transitionDuration: ".5s"
                },
                f = function(e) {
                    var t = e.mediaWidth,
                        n = e.mediaHeight,
                        r = e.containerWidth,
                        i = e.containerHeight,
                        o = t && n ? t / n : 1,
                        s = o > 1,
                        d = s && t < c ? u(r) : r,
                        l = !s && n < c ? u(i) : i;
                    return a.a.getContainDimensions({
                        width: d,
                        height: l
                    }, o)
                },
                p = function(e) {
                    var t = e && e.ext_media_color && e.ext_media_color.palette;
                    return s(t)
                },
                h = function(e) {
                    var t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return s(t)
                },
                m = function(e) {
                    var t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return s(t)
                },
                v = function(e) {
                    return "rgb(" + e.rgb.red + ", " + e.rgb.green + ", " + e.rgb.blue + ")"
                }
        },
        TEoO: function(e, t, n) {
            "use strict";
            var r = n("8OQS"),
                i = n.n(r),
                a = n("ERkP"),
                o = n("5UID"),
                s = n("3GUV"),
                c = n("iBK2"),
                u = a.createElement(s.a, null),
                d = function(e) {
                    var t = e.accessibilityTitle,
                        n = i()(e, ["accessibilityTitle"]),
                        r = a.createElement(c.a, n);
                    return t ? a.createElement(o.a, {
                        title: t
                    }, r) : r
                };
            d.defaultProps = {
                footer: u
            }, t.a = d
        },
        UPvq: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return I
            }));
            n("PN9k");
            var r = n("PJYZ"),
                i = n.n(r),
                a = n("VbXa"),
                o = n.n(a),
                s = n("lSNA"),
                c = n.n(s),
                u = n("ERkP"),
                d = n("RCZO"),
                l = n("aWzz"),
                f = n("3XMw"),
                p = n.n(f),
                h = n("l2F/"),
                m = n.n(h),
                v = n("3xO4"),
                _ = n.n(v),
                b = n("mw9i"),
                y = n("cm6r"),
                g = n("/yvb"),
                E = n("rHpw"),
                O = p.a.c6d63ac0,
                I = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_handleCloseButtonPress", (function(e) {
                            e.stopPropagation(), (0, t.props.onCloseButtonPress)()
                        })), c()(i()(t), "_handleBackgroundPress", (function() {
                            var e = t.props.onCloseButtonPress;
                            t.context.isModal && e()
                        })), t
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            r = t.backgroundColor,
                            i = t.mediaItem,
                            a = t.mediaUrl,
                            o = t.hideButtons,
                            s = t.topRightButton,
                            c = t.footerButtons,
                            l = t.overlayFooter,
                            f = this.context.isModal,
                            p = Object.assign({
                                backgroundColor: r.rgba
                            }, d.a),
                            h = Object.assign({
                                backgroundColor: r.rgb
                            }, d.a),
                            v = [S.root, f ? p : h, {
                                position: f ? "relative" : "fixed"
                            }];
                        return u.createElement(u.Fragment, null, u.createElement(_.a, {
                            onClick: this._handleBackgroundPress,
                            style: v
                        }, n, c ? u.createElement(_.a, {
                            pointerEvents: o ? "none" : void 0,
                            style: [S.footerButtons, l && p, l && S.footerButtonsAbsolute, o && S.fadeOut]
                        }, u.createElement(b.a, {
                            withGutter: !0
                        }, c)) : null), u.createElement(y.a, {
                            accessibilityRole: "none",
                            interactiveStyles: null,
                            onClick: this._handleCloseButtonPress,
                            pointerEvents: o ? "none" : void 0,
                            style: [S.buttonWrapper, S.buttonWrapperLeft, d.a, o && S.fadeOut]
                        }, (function(t) {
                            var n = t.hasFocusRing,
                                o = t.isHovered,
                                s = t.isPressed;
                            return u.createElement(g.a, {
                                accessibilityLabel: O,
                                dominantColor: r.rgb,
                                icon: u.createElement(m.a, null),
                                interactivityState: {
                                    isHovered: o,
                                    hasFocusRing: n,
                                    isPressed: s
                                },
                                onClick: e._handleCloseButtonPress,
                                type: i || a ? "onMedia" : "invertedPrimary"
                            })
                        })), s ? u.createElement(_.a, {
                            pointerEvents: o ? "none" : void 0,
                            style: [S.buttonWrapper, S.buttonWrapperRight, d.a, o && S.fadeOut]
                        }, s) : null)
                    }, t
                }(u.Component);
            c()(I, "contextTypes", {
                isModal: l.bool
            }), c()(I, "defaultProps", {
                hideButtons: !1
            });
            var S = E.a.create((function(e) {
                return {
                    root: {
                        overflowX: "hidden",
                        overflowY: "hidden",
                        height: "100%",
                        width: "100%"
                    },
                    buttonWrapper: {
                        position: "absolute",
                        top: 0,
                        padding: e.spaces.xSmall,
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                    },
                    buttonWrapperLeft: {
                        left: 0
                    },
                    buttonWrapperRight: {
                        right: 0
                    },
                    fadeOut: {
                        opacity: 0
                    },
                    footerButtons: {
                        width: "100%",
                        alignSelf: "center"
                    },
                    footerButtonsAbsolute: {
                        position: "absolute",
                        bottom: 0,
                        paddingBottom: E.a.iPhoneOffsetBottom,
                        zIndex: 1
                    }
                }
            }))
        },
        VAZu: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            }));
            n("8NJi");
            var r = n("PJYZ"),
                i = n.n(r),
                a = n("VbXa"),
                o = n.n(a),
                s = n("lSNA"),
                c = n.n(s),
                u = n("ERkP"),
                d = n("xKuM"),
                l = n("E89d"),
                f = n("tI3i"),
                p = n.n(f),
                h = n("QK5w"),
                m = n("aWzz"),
                v = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_handleBackClick", (function() {
                            var e = t.props,
                                n = e.history,
                                r = e.location,
                                i = e.onBackClick;
                            p()(i || n && r, "Either onBackClick must be specified, or history and location should be supplied"), i ? i(t.goBack) : t.goBack()
                        })), c()(i()(t), "goBack", (function() {
                            var e = t.props,
                                n = e.backLocation,
                                r = e.history,
                                i = e.location;
                            Object(h.a)({}, {
                                location: i
                            }) && r ? r.goBack() : r && r.push({
                                pathname: n,
                                state: {
                                    usedFallback: !0
                                }
                            })
                        })), t
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.backButtonType,
                            n = e.centeredLogo,
                            r = e.fixed,
                            i = e.hideBackButton,
                            a = e.leftControl,
                            o = e.middleControl,
                            s = e.rightControl,
                            c = e.style,
                            f = e.subtitle,
                            p = e.title,
                            h = e.titleDomId,
                            m = e.withBottomBorder,
                            v = i ? a : u.createElement(l.a, {
                                backButtonType: t,
                                onClick: this._handleBackClick
                            });
                        return u.Children.toArray([u.createElement(d.a, {
                            centeredLogo: n,
                            fixed: !this.context.isModal && r,
                            leftControl: v,
                            middleControl: o,
                            rightControl: s,
                            style: c,
                            subtitle: f,
                            title: p,
                            titleDomId: h,
                            withBottomBorder: m
                        })])
                    }, t
                }(u.Component);
            c()(v, "contextTypes", {
                isModal: m.bool
            }), c()(v, "defaultProps", {
                fixed: !0,
                backLocation: "/",
                withBottomBorder: !0
            })
        },
        VPdC: function(e, t, n) {
            "use strict";
            var r = n("pVnL"),
                i = n.n(r),
                a = n("8OQS"),
                o = n.n(a),
                s = n("VbXa"),
                c = n.n(s),
                u = n("lSNA"),
                d = n.n(u),
                l = n("ERkP"),
                f = n("3XMw"),
                p = n.n(f),
                h = n("04FZ"),
                m = n.n(h),
                v = n("sjK1"),
                _ = n("97Jx"),
                b = n.n(_),
                y = n("LdEA"),
                g = n.n(y),
                E = n("1Pcy"),
                O = n.n(E),
                I = n("W/Kd"),
                S = n.n(I),
                C = n("KEM+"),
                T = n.n(C),
                A = n("/yvb"),
                w = n("7DT3"),
                x = n.n(w),
                j = n("rHpw"),
                R = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, T()(O()(t), "_handlePress", (function(e) {
                            var n = t.props.onPress;
                            n && n(e), t._fileInput && t._fileInput.click()
                        })), T()(O()(t), "_handleChange", (function(e) {
                            var n = t.props.onChange,
                                r = e.target,
                                i = r.files;
                            i.length && n && n(i), r.value = ""
                        })), T()(O()(t), "_handleFileInputButtonRef", (function(e) {
                            t._fileInput = e
                        })), t
                    }
                    return S()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.accept,
                            n = e.disabled,
                            r = e.multiple,
                            i = (e.onChange, g()(e, ["accept", "disabled", "multiple", "onChange"]));
                        return l.createElement(l.Fragment, null, l.createElement(A.a, b()({}, i, {
                            disabled: n,
                            onPress: this._handlePress
                        })), x()("input", {
                            accept: t,
                            disabled: n,
                            multiple: r,
                            onChange: this._handleChange,
                            ref: this._handleFileInputButtonRef,
                            style: D.input,
                            tabIndex: -1,
                            type: "file"
                        }))
                    }, t
                }(l.Component);
            T()(R, "defaultProps", {
                disabled: !1,
                multiple: !1
            });
            var D = j.a.create((function(e) {
                    return {
                        input: {
                            width: "0.1px",
                            height: "0.1px",
                            opacity: 0,
                            overflow: "hidden",
                            position: "absolute",
                            zIndex: -1
                        }
                    }
                })),
                P = R,
                N = n("9HgX");
            n.d(t, "b", (function() {
                return B
            }));
            var M = p.a.b1934ea8,
                k = l.createElement(m.a, null),
                B = function(e) {
                    var t = e.acceptGifs,
                        n = e.acceptVideo;
                    return N.b.concat(t ? [N.a] : []).concat(n ? v.a : [])
                },
                L = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return c()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.acceptGifs,
                            n = e.acceptVideo,
                            r = e.style,
                            a = o()(e, ["acceptGifs", "acceptVideo", "style"]),
                            s = B({
                                acceptGifs: t,
                                acceptVideo: n
                            }).join(",");
                        return l.createElement(P, i()({}, a, {
                            accept: s,
                            style: [U.root, r]
                        }))
                    }, t
                }(l.PureComponent);
            d()(L, "defaultProps", {
                acceptGifs: !0,
                acceptVideo: !0,
                accessibilityLabel: M,
                icon: k,
                size: "normal"
            });
            var U = j.a.create((function(e) {
                return {
                    root: {
                        margin: "-" + e.spaces.xSmall
                    }
                }
            }));
            t.a = L
        },
        VnFT: function(e, t, n) {
            "use strict";
            n.d(t, "l", (function() {
                return A
            })), n.d(t, "k", (function() {
                return x
            })), n.d(t, "e", (function() {
                return R
            })), n.d(t, "d", (function() {
                return P
            })), n.d(t, "g", (function() {
                return M
            })), n.d(t, "h", (function() {
                return k
            })), n.d(t, "j", (function() {
                return B
            })), n.d(t, "f", (function() {
                return L
            })), n.d(t, "i", (function() {
                return U
            })), n.d(t, "a", (function() {
                return V
            })), n.d(t, "m", (function() {
                return W
            })), n.d(t, "b", (function() {
                return H
            })), n.d(t, "c", (function() {
                return X
            }));
            n("AJ0U");
            var r, i = n("RIqP"),
                a = n.n(i),
                o = (n("DB+v"), n("yKDW"), n("LnO1"), n("3eMz"), n("4oWw"), n("8OQS")),
                s = n.n(o),
                c = (n("p+GS"), n("dtAy"), n("PN9k"), n("AspN")),
                u = n("xPna"),
                d = n("jxu1"),
                l = n("lnti"),
                f = n("oEOe"),
                p = n("xCUF"),
                h = n("ude7"),
                m = n("/NU0"),
                v = n("Ssj5"),
                _ = n("fEA7"),
                b = n.n(_),
                y = n("uKEd"),
                g = function(e) {
                    return "rweb/multiDraftDMs/" + e
                },
                E = {};

            function O() {
                return {
                    gifMetadata: null,
                    isUploading: !1,
                    mediaMetadata: void 0,
                    mediaId: null,
                    text: null
                }
            }
            v.a.register(((r = {}).multiDraftDMs = function(e, t) {
                void 0 === e && (e = E);
                switch (t.type) {
                    case z:
                    case F:
                        var n, r = e[t.conversationId] || O();
                        return Object.assign({}, e, ((n = {})[t.conversationId] = Object.assign({}, r, {}, t.payload), n));
                    case Y:
                        var i, a = e[t.conversationId] || O();
                        return Object.assign({}, e, ((i = {})[t.conversationId] = Object.assign({}, a, {
                            isUploading: !0
                        }), i));
                    case G:
                        var o, s = e[t.conversationId] || O();
                        return Object.assign({}, e, ((o = {})[t.conversationId] = Object.assign({}, s, {
                            isUploading: !1
                        }), o));
                    case $:
                    case Z:
                    case K:
                        var c, u = e[t.conversationId] || O();
                        return Object.assign({}, e, ((c = {})[t.conversationId] = Object.assign({}, u, {
                            isUploading: !1,
                            mediaId: null,
                            mediaMetadata: void 0,
                            gifMetadata: void 0
                        }), c));
                    case j:
                        var d, l = e[t.conversationId] || O();
                        return Object.assign({}, e, ((d = {})[t.conversationId] = Object.assign({}, l, {
                            text: t.text
                        }), d));
                    case D:
                        var f, p = e[t.conversationId] || O();
                        return Object.assign({}, e, ((f = {})[t.conversationId] = Object.assign({}, p, {
                            text: null
                        }), f));
                    default:
                        return e
                }
            }, r));
            var I = function(e) {
                    var t = e.conversation_id,
                        n = e.id,
                        r = e.recipient_ids,
                        i = e.sender_id,
                        a = e.text,
                        o = e.attachment,
                        s = void 0 === o ? {} : o,
                        c = e.error,
                        u = Date.now().toString();
                    return {
                        conversation_id: t,
                        recipient_ids: r,
                        error: c,
                        id: n,
                        isEmojiOnly: !!(!s.photo && !s.animated_gif) && Object(d.a)({
                            text: a
                        }),
                        is_draft: !0,
                        message_data: {
                            attachment: s,
                            sender_id: i,
                            text: a,
                            time: u
                        },
                        type: "message",
                        time: u
                    }
                },
                S = g("SEND_MESSAGE_REQUEST"),
                C = g("SEND_MESSAGE_SUCCESS"),
                T = g("SEND_MESSAGE_FAILURE"),
                A = function(e) {
                    return function(t, n, r) {
                        var i = r.api,
                            o = e || {},
                            d = o.senderId,
                            v = o.conversationId,
                            _ = o.recipients,
                            g = void 0 === _ ? [] : _,
                            E = o.requestId,
                            O = void 0 === E ? b.a.v1() : E,
                            A = o.tweetAttachment,
                            w = o.quickReply,
                            x = s()(o, ["senderId", "conversationId", "recipients", "requestId", "tweetAttachment", "quickReply"]);
                        t(Q(v));
                        var j = n(),
                            R = N(n(), v),
                            D = (c.g(j, R)[0] || {}).mediaFile,
                            M = g.length > 0 && g.join(","),
                            k = {};
                        D && D.isGif ? k.extraInitParams = "&media_category=dm_gif" : D && D.isVideo && (k.extraInitParams = "&media_category=dm_video");
                        var B = c.k(R, k),
                            F = [t(B)],
                            V = (L(j, v) || {}).found_media_origin,
                            z = U(j, v);
                        return D && D.isGif && F.push(Object(h.a)(D)), Promise.all(F).then((function(n) {
                            var r = n[0][0],
                                o = n[1],
                                s = z && Object.keys(z).length && z[r.id] && (z[r.id].altText || z[r.id].defaultAltText),
                                h = !!s;
                            return (r && (V || h) ? t(Object(c.i)(Object.assign({
                                media_id: r.uploadId,
                                found_media_origin: V
                            }, !!h && {
                                alt_text: {
                                    text: s
                                }
                            }))) : Promise.resolve()).then((function() {
                                var n = (A || {}).id_str,
                                    s = {};
                                if (r) {
                                    var c = r.mediaFile,
                                        h = void 0 === c ? {} : c,
                                        _ = {
                                            original_info: {
                                                width: h.width,
                                                height: h.height
                                            },
                                            sizes: [{
                                                h: h.height,
                                                w: h.width,
                                                resize: "fit"
                                            }]
                                        };
                                    h.isImage ? s.photo = Object.assign({}, _, {
                                        media_url_https: h.url
                                    }) : h.isGif ? s.animated_gif = Object.assign({}, _, {
                                        media_url_https: o,
                                        type: "animated_gif"
                                    }) : h.isVideo && (s.video = Object.assign({}, _, {
                                        media_url_https: h.url,
                                        type: "video"
                                    }))
                                } else A && (s.tweet = {
                                    status: n
                                });
                                var b = (r || {}).uploadId,
                                    g = I({
                                        attachment: s,
                                        conversation_id: v,
                                        id: O,
                                        recipient_ids: M,
                                        sender_id: d,
                                        text: e.text
                                    }),
                                    E = Object.assign({}, x, {
                                        conversation_id: v,
                                        media_id: b,
                                        recipient_ids: M,
                                        request_id: O,
                                        tweet_id: n
                                    });
                                w && (E["quick_reply_response[options][id]"] = w.id, E["quick_reply_response[options][selected_id]"] = w.selected_id);
                                var j = Object(l.a)([J(v), {
                                    type: p.c.REQUEST
                                }, {
                                    type: S
                                }, v && Object(y.b)(v, O, g)]);
                                return t(j), i.DirectMessages.sendMessage(E).then((function(n) {
                                    var r = n.entities,
                                        i = r.entries,
                                        o = r.users,
                                        s = r.tweets,
                                        c = r.cards,
                                        d = n.result.conversations;
                                    Object(m.a)(R) && t(X(v, R));
                                    var f = Object(l.a)([{
                                        type: p.c.SUCCESS
                                    }].concat(a()(Object(u.b)({
                                        conversations: d,
                                        entries: i,
                                        users: o,
                                        tweets: s,
                                        cards: c
                                    })), [{
                                        type: C
                                    }, v && Object(y.j)(v, O, e), P(v)]));
                                    return t(f), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                                }), (function(n) {
                                    var r = I({
                                            attachment: s,
                                            conversation_id: v,
                                            error: !0,
                                            id: O,
                                            recipient_ids: M,
                                            sender_id: d,
                                            text: e.text
                                        }),
                                        i = Object(l.a)([{
                                            type: p.c.SUCCESS
                                        }, {
                                            type: T
                                        }, v && Object(y.b)(v, O, r)]);
                                    return t(i), Object(f.e)(t, n, "ACTION_SEND_DM")
                                }))
                            }), (function(e) {
                                return t(ee(v)), e.type = "metadata", Promise.reject(e)
                            }))
                        }), (function(e) {
                            return t(Object(l.a)([Object(m.a)(R) && X(v, R), ee(v)])), Promise.reject(e)
                        }))
                    }
                },
                w = function(e, t) {
                    return e.multiDraftDMs[t]
                },
                x = function(e, t) {
                    var n = w(e, t);
                    return n ? n.text : null
                },
                j = g("SAVE_TEXT"),
                R = function(e, t) {
                    return {
                        type: j,
                        conversationId: e,
                        text: t
                    }
                },
                D = g("REMOVE_TEXT"),
                P = function(e) {
                    return {
                        type: D,
                        conversationId: e
                    }
                },
                N = function(e, t) {
                    var n = w(e, t);
                    return n ? n.mediaId : null
                },
                M = function(e, t) {
                    var n = c.g(e, N(e, t));
                    return n.length > 0 ? n[0] : null
                },
                k = function(e, t) {
                    var n = w(e, t);
                    return !!n && n.isUploading
                },
                B = function(e, t) {
                    return c.h(e, N(e, t))
                },
                L = function(e, t) {
                    var n = w(e, t);
                    return n ? n.gifMetadata : null
                },
                U = function(e, t) {
                    var n = w(e, t);
                    return n ? n.mediaMetadata : void 0
                },
                F = g("ADD_MEDIA"),
                V = function(e, t, n, r) {
                    return {
                        payload: {
                            isUploading: !1,
                            mediaId: t[0],
                            gifMetadata: n,
                            mediaMetadata: r
                        },
                        type: F,
                        conversationId: e
                    }
                },
                z = g("UPDATE_MEDIA_METADATA"),
                W = function(e, t) {
                    return {
                        payload: t,
                        type: z,
                        conversationId: e
                    }
                },
                G = g("CANCEL_UPLOAD"),
                H = function(e) {
                    return {
                        type: G,
                        conversationId: e
                    }
                },
                K = g("REMOVE_MEDIA"),
                q = function(e) {
                    return {
                        type: K,
                        conversationId: e
                    }
                },
                X = function(e, t) {
                    return function(n) {
                        n(c.e(t)), n([H(e), q(e)])
                    }
                },
                Y = g("UPLOAD_REQUEST"),
                Q = function(e) {
                    return {
                        type: Y,
                        conversationId: e
                    }
                },
                Z = g("UPLOAD_SUCCESS"),
                J = function(e) {
                    return {
                        type: Z,
                        conversationId: e
                    }
                },
                $ = g("UPLOAD_FAILURE"),
                ee = function(e) {
                    return {
                        type: $,
                        conversationId: e
                    }
                }
        },
        WMlK: function(e, t) {
            e.exports = Math.sign || function(e) {
                return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
            }
        },
        WVrH: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return a
            }));
            var r = n("AQ79"),
                i = Object(r.c)("RESET"),
                a = function() {
                    return {
                        type: i
                    }
                }
        },
        XnpN: function(e, t, n) {
            "use strict";
            n("Yyzt");
            var r = n("RIqP"),
                i = n.n(r),
                a = n("aWyx"),
                o = (n("zpx+"), n("t0aI")),
                s = function(e) {
                    return void 0 === e && (e = 0), new Date(Number(e))
                },
                c = function(e, t) {
                    return s(e.join_time) - s(t.join_time)
                },
                u = function(e, t) {
                    var n = e.user,
                        r = t.user;
                    return Object(o.a)(n.id_str, r.id_str)
                },
                d = function(e) {
                    return function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, n) {
                            return t.map((function(t) {
                                return t(e, n)
                            })).filter((function(e) {
                                return !!e
                            }))[0] || 0
                        }
                    }(function(e) {
                        return function(t, n) {
                            var r = t.user,
                                i = n.user;
                            switch (e) {
                                case r.id_str:
                                    return -1;
                                case i.id_str:
                                    return 1;
                                default:
                                    return 0
                            }
                        }
                    }(e), c, u)
                },
                l = n("tn7R"),
                f = n("VIKJ");
            t.a = function(e, t) {
                var n = e.participants,
                    r = e.type,
                    o = e.created_by_user_id,
                    s = Object(l.a)(n),
                    c = Object(f.a)(s, (function(e) {
                        return e.user.id_str === t
                    })),
                    u = c[0],
                    p = c[1];
                return p.length ? r === a.a.GROUP && 1 === p.length ? [].concat(i()(u), i()(p)) : o ? p.sort(d(o)) : p : u
            }
        },
        ZL4l: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = o(n("7DT3")),
                i = o(n("ERkP")),
                a = o(n("OkZJ"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [a.default.root, e.style],
                    viewBox: "0 0 15 15"
                }), i.default.createElement("g", null, i.default.createElement("path", {
                    d: "M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z"
                })))
            };
            s.metadata = {
                height: 15,
                width: 15
            };
            var c = s;
            t.default = c
        },
        aA19: function(e, t, n) {
            "use strict";
            n("0rpg");
            var r = n("VbXa"),
                i = n.n(r),
                a = (n("cI1W"), n("ERkP")),
                o = n("aWyx"),
                s = n("XnpN"),
                c = n("rHpw"),
                u = n("9Xij"),
                d = n("cm6r"),
                l = n("TIdA"),
                f = n("A91F"),
                p = n("oSwX"),
                h = n("D4le"),
                m = n.n(h),
                v = n("3xO4"),
                _ = n.n(v),
                b = c.a.create((function(e) {
                    return {
                        root: {
                            borderRadius: e.borderRadii.infinite,
                            overflow: "hidden"
                        },
                        container: {
                            height: "auto",
                            overflow: "hidden",
                            width: "100%"
                        },
                        image: {
                            borderRadius: 0
                        }
                    }
                })),
                y = c.a.create((function(e) {
                    return {
                        container: {
                            flexDirection: "row"
                        },
                        left: {
                            flex: 1
                        },
                        right: {
                            flex: 1,
                            marginLeft: e.borderWidths.small,
                            marginRight: "calc(-1 * " + e.borderWidths.small + ")"
                        }
                    }
                })),
                g = c.a.create((function(e) {
                    return {
                        container: {
                            flexDirection: "column"
                        },
                        top: {
                            flex: 1,
                            marginBottom: e.borderWidths.small
                        },
                        bottom: {
                            flex: 1
                        }
                    }
                })),
                E = function(e) {
                    var t = e.left,
                        n = e.right;
                    return a.createElement(_.a, {
                        style: y.container
                    }, a.createElement(_.a, {
                        style: y.left
                    }, t), a.createElement(_.a, {
                        style: y.right
                    }, n))
                },
                O = function(e) {
                    var t = e.top,
                        n = e.bottom;
                    return a.createElement(_.a, {
                        style: g.container
                    }, a.createElement(_.a, {
                        style: g.top
                    }, t), a.createElement(_.a, {
                        style: g.bottom
                    }, n))
                },
                I = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this.props,
                            t = e.link,
                            n = e.conversation,
                            r = e.perspective,
                            i = n && n.avatar_image_https,
                            o = Object(s.a)(n, r).map((function(e) {
                                return e.user
                            })),
                            c = o.slice(0, 3),
                            l = this._avatarFromGroup(n) || this._avatarFromSrc(i) || this._avatarFromParticipants(c),
                            f = t || this._defaultLink(n, o);
                        return l ? a.createElement(u.a, {
                            ratio: 1,
                            style: b.root
                        }, f ? a.createElement(d.a, {
                            interactiveStyles: null,
                            link: f
                        }, l) : l) : null
                    }, n._defaultLink = function(e, t) {
                        return e.type === o.a.GROUP ? "/messages/" + e.conversation_id + "/participants" : e.type === o.a.ONE_TO_ONE ? "/" + t[0].screen_name : void 0
                    }, n._avatarFromGroup = function(e) {
                        var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info;
                        return t ? a.createElement(l.a, {
                            accessibilityLabel: "",
                            aspectMode: f.a.SQUARE,
                            backgroundColor: c.a.theme.colors.fadedGray,
                            image: t,
                            rounded: !0
                        }) : null
                    }, n._avatarFromSrc = function(e) {
                        return e ? a.createElement(m.a, {
                            source: e
                        }) : null
                    }, n._avatarFromParticipants = function(e) {
                        var t = e.length;
                        return 0 === t ? null : 1 === t ? this._singleParticipantAvatar(e[0]) : this._multipleParticipantAvatar(e)
                    }, n._singleParticipantAvatar = function(e) {
                        return a.createElement(_.a, {
                            key: e.id_str,
                            style: b.container
                        }, a.createElement(p.default, {
                            importantForAccessibility: "no-hide-descendants",
                            size: "custom",
                            style: b.image,
                            uri: e.profile_image_url_https
                        }))
                    }, n._multipleParticipantAvatar = function(e) {
                        var t = e.length,
                            n = e.map((function(e, n) {
                                var r = 2 === t || 3 === t && 0 === n ? .5 : 1;
                                return a.createElement(_.a, {
                                    key: e.id_str,
                                    style: b.container
                                }, a.createElement(p.default, {
                                    aspectRatio: r,
                                    circle: !1,
                                    importantForAccessibility: "no-hide-descendants",
                                    size: "custom",
                                    style: b.image,
                                    uri: e.profile_image_url_https
                                }))
                            }));
                        if (2 === t) return a.createElement(E, {
                            left: n[1],
                            right: n[0]
                        });
                        var r = a.createElement(O, {
                                bottom: n[2],
                                top: n[1]
                            }),
                            i = n[0];
                        return a.createElement(E, {
                            left: r,
                            right: i
                        })
                    }, t
                }(a.Component);
            t.a = I
        },
        aWyx: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "c", (function() {
                return i
            })), n.d(t, "b", (function() {
                return a
            }));
            n("KYm4");
            var r = Object.freeze({
                    ONE_TO_ONE: "ONE_TO_ONE",
                    GROUP: "GROUP_DM"
                }),
                i = Object.freeze({
                    AT_END: "AT_END",
                    HAS_MORE: "HAS_MORE"
                }),
                a = Object.freeze({
                    CONVERSATION_AVATAR_UPDATE: "conversation_avatar_update",
                    CONVERSATION_NAME_UPDATE: "conversation_name_update",
                    CONVERSATION_READ: "conversation_read",
                    DISABLE_NOTIFICATIONS: "disable_notifications",
                    ENABLE_NOTIFICATIONS: "enable_notifications",
                    JOIN_CONVERSATION: "join_conversation",
                    MARK_ALL_AS_READ: "mark_all_as_read",
                    MENTION_NOTIFICATIONS_UPDATE: "mention_notifications_setting_update",
                    MESSAGE: "message",
                    MESSAGE_DELETE: "message_delete",
                    MESSAGE_MARK_AS_NOT_SPAM: "message_unmark_as_spam",
                    MESSAGE_MARK_AS_SPAM: "message_mark_as_spam",
                    PARTICIPANTS_JOIN: "participants_join",
                    PARTICIPANTS_LEAVE: "participants_leave",
                    REACTION_CREATE: "reaction_create",
                    REACTION_DELETE: "reaction_delete",
                    READ_ONLY_INDICATOR: "read_only_indicator",
                    REMOVE_CONVERSATION: "remove_conversation",
                    TRUST_CONVERSATION: "trust_conversation",
                    TYPING_INDICATOR: "typing_indicator",
                    WELCOME_MESSAGE: "welcome_message_create"
                })
        },
        b5s6: function(e, t, n) {
            "use strict";
            var r = n("ERkP"),
                i = n("rxPX"),
                a = n("P1r1"),
                o = n("XOJV"),
                s = function(e, t) {
                    return t.tweetId
                },
                c = Object(i.a)().dynamicPropsFromState((function() {
                    return {
                        mediaPreviewsEnabled: a.r,
                        tweet: o.a.createHydratedTweetSelector(s)
                    }
                })),
                u = n("VoLI"),
                d = c((function(e) {
                    var t = e.dmType,
                        n = e.mediaPreviewsEnabled,
                        i = e.style,
                        a = e.tweet;
                    return r.createElement(u.a, {
                        dmType: t,
                        style: i,
                        tweet: a,
                        withInlineMedia: n
                    })
                }));
            t.a = d
        },
        c2p2: function(e, t, n) {
            "use strict";
            var r = n("ERkP"),
                i = n("3xO4"),
                a = n.n(i),
                o = n("oSwX"),
                s = n("rHpw"),
                c = function(e) {
                    var t = e.users.slice(0, e.maxItems).filter((function(e) {
                        return !!e
                    }));
                    return r.createElement(a.a, {
                        style: [u.root, "center" === e.align && u.rootCenter, e.style]
                    }, t.map((function(t, n) {
                        return r.createElement(o.default, {
                            importantForAccessibility: "no-hide-descendants",
                            key: n,
                            screenName: t.screen_name,
                            size: "large",
                            style: [u.item, 0 === n && "left" === e.align && u.itemLeftFirst],
                            uri: t.profile_image_url_https,
                            withHoverCard: !0,
                            withLink: !0
                        })
                    })))
                };
            c.defaultProps = {
                align: "left",
                maxItems: 5
            };
            var u = s.a.create((function(e) {
                return {
                    root: {
                        flexWrap: "wrap",
                        flexDirection: "row",
                        overflow: "hidden",
                        height: e.spaces.large
                    },
                    rootCenter: {
                        justifyContent: "center"
                    },
                    item: {
                        marginHorizontal: e.spaces.xxSmall
                    },
                    itemLeftFirst: {
                        marginLeft: 0
                    }
                }
            }));
            t.a = c
        },
        cIoY: function(e, t, n) {
            "use strict";
            var r = n("ERkP"),
                i = n("1YZw"),
                a = n("rxPX"),
                o = Object(a.a)().propsFromActions({
                    addToast: i.b
                }),
                s = (n("cI1W"), n("yIC7"), n("PJYZ")),
                c = n.n(s),
                u = n("VbXa"),
                d = n.n(u),
                l = n("lSNA"),
                f = n.n(l),
                p = n("gt4B"),
                h = n("8aq1"),
                m = n.n(h),
                v = (n("0rpg"), n("7DT3")),
                _ = n.n(v),
                b = n("3XMw"),
                y = n.n(b),
                g = n("sgih"),
                E = n("t62R"),
                O = n("/yvb"),
                I = n("rHpw"),
                S = y.a.f4c9593e,
                C = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, f()(c()(t), "_handleOnFocus", (function(e) {
                            e.currentTarget.select()
                        })), t
                    }
                    return d()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.cancelButtonLabel,
                            n = e.description,
                            i = e.headerText,
                            a = e.link,
                            o = e.onCancel,
                            s = _()("input", {
                                autoFocus: !0,
                                onFocus: this._handleOnFocus,
                                readOnly: !0,
                                style: T.linkInput,
                                value: a
                            });
                        return r.createElement(g.a, {
                            onMaskClick: o,
                            style: T.container,
                            type: "center",
                            withMask: !0
                        }, i && r.createElement(E.b, {
                            align: "center",
                            color: "normal",
                            style: T.headerText,
                            weight: "bold"
                        }, i), n && r.createElement(E.b, {
                            align: "center",
                            color: "deepGray",
                            style: T.labelText
                        }, n), s, r.createElement(O.a, {
                            onPress: o,
                            size: "normalLarge",
                            style: T.cancelButton,
                            type: "text"
                        }, t))
                    }, t
                }(r.Component);
            f()(C, "defaultProps", {
                cancelButtonLabel: S
            });
            var T = I.a.create((function(e) {
                    return {
                        container: {
                            alignItems: "center",
                            backgroundColor: e.colors.cellBackground,
                            paddingVertical: e.spaces.large,
                            paddingHorizontal: e.spaces.xSmall,
                            position: "relative"
                        },
                        headerText: {
                            marginBottom: e.spaces.small
                        },
                        labelText: {
                            marginBottom: e.spaces.small,
                            width: "100%"
                        },
                        linkInput: {
                            backgroundColor: e.colors.faintGray,
                            borderColor: "transparent",
                            color: e.colors.deepGray,
                            fontSize: e.fontSizes.normal,
                            marginBottom: e.spaces.xSmall,
                            paddingVertical: e.spaces.xSmall,
                            paddingHorizontal: e.spaces.medium
                        },
                        cancelButton: {
                            width: "100%"
                        }
                    }
                })),
                A = C,
                w = n("Uwiv"),
                x = n.n(w),
                j = n("D4le"),
                R = n.n(j),
                D = n("cm6r"),
                P = y.a.j66a90c0,
                N = y.a.gb1e4015,
                M = y.a.f621b47b,
                k = y.a.dcf9f291,
                B = {
                    riffsy: "https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png",
                    giphy: "https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png"
                },
                L = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this, t) || this, f()(c()(n), "_renderMenu", (function(e) {
                            return r.createElement(p.a, {
                                items: [{
                                    text: M,
                                    Icon: x.a,
                                    onClick: n._handleCopyGifLinkButtonClick
                                }],
                                onCloseRequested: e
                            })
                        })), f()(c()(n), "_handleCopyGifLinkButtonClick", (function(e) {
                            var t = n.props,
                                r = t.addToast,
                                i = t.gifUrl;
                            m.a.isAvailable() ? (m.a.setString(i), r({
                                text: k
                            })) : n.setState({
                                showCopyLinkSheet: !0
                            }), e && e()
                        })), f()(c()(n), "_handleCopyLinkSheetCancel", (function() {
                            n.setState({
                                showCopyLinkSheet: !1
                            })
                        })), n.state = {
                            showCopyLinkSheet: !1
                        }, n
                    }
                    d()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this.state.showCopyLinkSheet,
                            t = this.props,
                            n = t.provider,
                            i = t.gifUrl,
                            a = n.display_name,
                            o = n.name,
                            s = B[o];
                        return s ? r.createElement(r.Fragment, null, e ? r.createElement(A, {
                            description: N({
                                providerName: a
                            }),
                            headerText: P,
                            link: i,
                            onCancel: this._handleCopyLinkSheetCancel
                        }) : null, r.createElement(E.b, {
                            align: "center",
                            color: "deepGray",
                            style: U.root
                        }, r.createElement(y.a.I18NFormatMessage, {
                            $i18n: "ea6e0e4f"
                        }, this._renderAttribution(a, s)))) : null
                    }, n._renderAttribution = function(e, t) {
                        return r.createElement(D.a, {
                            interactiveStyles: null,
                            renderMenu: this._renderMenu
                        }, r.createElement(E.b, {
                            weight: "bold",
                            withInteractiveStyling: !0
                        }, r.createElement(R.a, {
                            source: {
                                uri: t
                            },
                            style: U.image
                        }), r.createElement(E.b, {
                            color: "normal"
                        }, e.toUpperCase())))
                    }, t
                }(r.PureComponent),
                U = I.a.create((function(e) {
                    return {
                        button: {
                            marginLeft: e.spaces.xSmall
                        },
                        image: {
                            display: "inline-block",
                            height: e.spaces.small,
                            marginHorizontal: e.spaces.xxSmall,
                            width: e.spaces.small
                        },
                        root: {
                            marginHorizontal: e.spaces.xSmall
                        }
                    }
                })),
                F = L,
                V = o((function(e) {
                    var t = e.addToast,
                        n = e.provider,
                        i = e.gifUrl;
                    return r.createElement(F, {
                        addToast: t,
                        gifUrl: i,
                        provider: n
                    })
                }));
            t.a = V
        },
        decI: function(e, t, n) {
            var r = n("7zcn");
            r(r.S, "Math", {
                sign: n("WMlK")
            })
        },
        "h/wS": function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var r = function(e, t) {
                    var n, r, i = e.width,
                        a = e.height;
                    return t >= 1 ? i > (n = (r = a) * t) && (r = (n = i) / t) : a > (r = (n = i) / t) && (r = a, n = a * t), {
                        width: n,
                        height: r
                    }
                },
                i = function(e, t) {
                    var n, r, i = e.width,
                        a = e.height;
                    return t >= 1 ? (r = (n = i) / t) > a && (r = a, n = a * t) : (n = (r = a) * t) > i && (n = i, r = i / t), {
                        width: n,
                        height: r
                    }
                };
            t.a = {
                getCoverDimensions: r,
                getContainDimensions: i
            }
        },
        hqDb: function(e, t, n) {
            "use strict";
            var r = n("pVnL"),
                i = n.n(r),
                a = n("8OQS"),
                o = n.n(a),
                s = n("PJYZ"),
                c = n.n(s),
                u = n("VbXa"),
                d = n.n(u),
                l = n("lSNA"),
                f = n.n(l),
                p = n("ERkP"),
                h = n("k49u"),
                m = n("rxPX"),
                v = n("0KEI"),
                _ = n("6xIQ"),
                b = n("kGix"),
                y = n("G6rE"),
                g = function(e, t) {
                    return t.userIds
                },
                E = function(e, t) {
                    return t.userIds.filter((function(t) {
                        return !!y.e.select(e, t)
                    }))
                },
                O = function(e, t) {
                    return t.userIds.reduce((function(t, n) {
                        var r = y.e.selectFetchStatus(e, n);
                        return t[n] = r === b.a.NONE ? b.a.LOADING : r, t
                    }), {})
                },
                I = Object(m.a)().dynamicPropsFromState((function() {
                    return {
                        availableUserIds: Object(_.a)(E, (function(e) {
                            return e
                        })),
                        fetchStatus: Object(_.a)(E, O, g, (function(e, t, n) {
                            for (var r = b.a.LOADED, i = 0; i < n.length; i++) {
                                var a = n[i];
                                if (-1 === e.indexOf(a)) {
                                    var o = t[a] || b.a.LOADING;
                                    r = r === b.a.LOADED ? o : r
                                }
                                if (r === b.a.LOADED) break
                            }
                            return r
                        }))
                    }
                })).propsFromActions({
                    createLocalApiErrorHandler: Object(v.b)("USERS_LIST_CONTAINER"),
                    fetchUsersIfNeeded: y.e.fetchManyIfNeeded
                }),
                S = n("v//M"),
                C = n("3XMw"),
                T = n.n(C),
                A = n("pQ3Z"),
                w = n.n(A),
                x = n("cFuS"),
                j = n("Re5t"),
                R = n("3xO4"),
                D = n.n(R),
                P = n("88ay"),
                N = function(e) {
                    var t = e.displayMode,
                        n = e.renderUserCell,
                        r = e.withFinalItemBorder,
                        i = e.withItemBorder,
                        a = e.userIds;
                    return p.createElement(D.a, null, a.map((function(e, o) {
                        var s = o === a.length - 1,
                            c = s && i && r || !s && i;
                        return n ? n(e) : p.createElement(P.b, {
                            decoration: P.d,
                            displayMode: t,
                            key: e,
                            promotedItemType: x.c.USER,
                            userId: e,
                            withBottomBorder: !!c,
                            withFollowsYou: !0
                        })
                    })))
                };
            N.defaultProps = {
                displayMode: j.a.UserDetailed,
                withFinalItemBorder: !0,
                withItemBorder: !1
            };
            var M = N,
                k = T.a.g5bbb398,
                B = I(function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, f()(c()(t), "state", {
                            allUsersUnavailable: !1
                        }), f()(c()(t), "_renderContent", (function() {
                            var e = t.props,
                                n = e.availableUserIds,
                                r = (e.createLocalApiErrorHandler, e.fetchStatus, e.fetchUsersIfNeeded, e.userIds, o()(e, ["availableUserIds", "createLocalApiErrorHandler", "fetchStatus", "fetchUsersIfNeeded", "userIds"]));
                            return p.createElement(M, i()({}, r, {
                                userIds: n
                            }))
                        })), f()(c()(t), "_handleFetch", (function() {
                            t._fetchUsersIfNeeded()
                        })), t
                    }
                    d()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this._fetchUsersIfNeeded()
                    }, n.componentDidUpdate = function(e) {
                        w()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                    }, n.render = function() {
                        return p.createElement(S.a, {
                            accessibilityLabel: k,
                            fetchStatus: this.state.allUsersUnavailable ? b.a.LOADED : this.props.fetchStatus,
                            onRequestRetry: this._handleFetch,
                            render: this._renderContent,
                            retryable: !1
                        })
                    }, n._fetchUsersIfNeeded = function() {
                        var e, t = this,
                            n = this.props,
                            r = n.createLocalApiErrorHandler,
                            i = n.fetchUsersIfNeeded,
                            a = n.availableUserIds;
                        i(n.userIds).then((function() {
                            t.setState({
                                allUsersUnavailable: !1
                            })
                        }), r(((e = {})[h.a.AddressBookLookupNotFound] = {
                            customAction: function() {
                                0 === a.length && t.setState({
                                    allUsersUnavailable: !0
                                })
                            }
                        }, e)))
                    }, t
                }(p.Component));
            t.a = B
        },
        jHSc: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            }));
            n("cI1W");
            var r = n("PJYZ"),
                i = n.n(r),
                a = n("VbXa"),
                o = n.n(a),
                s = n("lSNA"),
                c = n.n(s),
                u = n("+/5o"),
                d = n("ERkP"),
                l = n("aWzz"),
                f = n("VAZu"),
                p = n("yoO3"),
                h = n("wiP2"),
                m = n("3xO4"),
                v = n.n(m),
                _ = n("yw4N"),
                b = n("mw9i"),
                y = n("rHpw"),
                g = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_handleLayout", (function(e) {
                            var n = t.props.onLayout,
                                r = t.context.isModal;
                            n && (r ? window.requestAnimationFrame((function() {
                                return n(e)
                            })) : n(e))
                        })), t
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.appBarRef,
                            n = e.backLocation,
                            r = e.bottomBar,
                            i = e.children,
                            a = e.containerStyle,
                            o = e.backButtonType,
                            s = e.documentStatusCode,
                            c = e.documentTitle,
                            l = e.hideBackButton,
                            m = e.history,
                            y = e.location,
                            g = e.middleControl,
                            O = e.onBackClick,
                            I = e.renderHeader,
                            S = e.rightControl,
                            C = e.title,
                            T = e.withBottomBorder,
                            A = this.context.isModal,
                            w = d.createElement(f.a, {
                                backButtonType: o || (A ? "close" : "back"),
                                backLocation: n,
                                fixed: !A,
                                hideBackButton: l,
                                history: m,
                                location: y,
                                middleControl: g,
                                onBackClick: O,
                                ref: t,
                                rightControl: S,
                                style: A && E.appBarModal,
                                title: C,
                                titleDomId: u.d,
                                withBottomBorder: T
                            });
                        return d.createElement(p.a, null, d.createElement(h.a.Configure, {
                            documentStatusCode: s,
                            documentTitle: c,
                            headerless: !0,
                            title: C
                        }), d.createElement(v.a, {
                            onLayout: this._handleLayout,
                            style: [E.root, A && E.rootModal]
                        }, I ? I(w) : w, d.createElement(b.a, {
                            style: [E.container, A && E.containerModal, a]
                        }, A ? d.createElement(_.a, {
                            style: E.viewport
                        }, i) : i), r ? d.createElement(v.a, {
                            style: E.bottomBar
                        }, r) : null))
                    }, t
                }(d.Component);
            c()(g, "defaultProps", {
                withBottomBorder: !0
            }), c()(g, "contextTypes", {
                isModal: l.bool
            });
            var E = y.a.create((function(e) {
                return {
                    root: {
                        backgroundColor: e.colors.cellBackground,
                        flexGrow: 1,
                        flexShrink: 1
                    },
                    rootModal: {
                        borderRadius: e.borderRadii.medium,
                        flexShrink: 1
                    },
                    appBarModal: {
                        borderTopLeftRadius: e.borderRadii.medium,
                        borderTopRightRadius: e.borderRadii.medium
                    },
                    container: {
                        flexGrow: 1
                    },
                    containerModal: {
                        flexShrink: 1
                    },
                    viewport: {
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: "auto",
                        zIndex: void 0
                    },
                    bottomBar: {
                        borderTopColor: e.colors.borderColor,
                        borderTopWidth: e.borderWidths.small
                    }
                }
            }));
            t.b = g
        },
        jtO7: function(e, t, n) {
            "use strict";
            n("cI1W");
            var r = n("97Jx"),
                i = n.n(r),
                a = n("LdEA"),
                o = n.n(a),
                s = n("ERkP"),
                c = n("t62R"),
                u = n("I4+6"),
                d = n("cm6r"),
                l = n("rHpw"),
                f = n("3xO4"),
                p = n.n(f),
                h = l.a.create((function(e) {
                    return {
                        container: {
                            backgroundColor: e.colors.cellBackground
                        },
                        root: {
                            justifyContent: "center",
                            minHeight: e.spaces.xxLarge,
                            paddingHorizontal: e.componentDimensions.gutterHorizontal,
                            paddingVertical: e.spaces.small
                        },
                        bottomBorder: {
                            borderBottomColor: e.colors.borderColor,
                            borderBottomStyle: "solid",
                            borderBottomWidth: 1
                        }
                    }
                }));
            t.a = function(e) {
                var t = e.align,
                    n = void 0 === t ? "center" : t,
                    r = e.color,
                    a = e.label,
                    f = e.withBottomBorder,
                    m = void 0 === f || f,
                    v = o()(e, ["align", "color", "label", "withBottomBorder"]),
                    _ = u.a.generate({
                        backgroundColor: l.a.theme.colors.transparent,
                        color: l.a.theme.colors[r],
                        insetFocusRing: !0
                    }),
                    b = [h.root, m && h.bottomBorder];
                return s.createElement(p.a, {
                    style: h.container
                }, s.createElement(d.a, i()({}, v, {
                    interactiveStyles: _,
                    style: b
                }), s.createElement(c.b, {
                    align: n,
                    color: r
                }, a)))
            }
        },
        kIAd: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return a
            }));
            var r = n("0vv5"),
                i = 500,
                a = {
                    scoper: [{
                        type: "dmUserSearch",
                        regexp: /^[@＠]?(.*)|^$/,
                        srcInputs: ["compose_message"],
                        scope: {
                            result_type: "users",
                            count: 20
                        }
                    }, {
                        type: "username",
                        regexp: /^[@＠](\w{1,20})/,
                        srcInputs: ["compose"],
                        scope: {
                            result_type: "users",
                            count: 20
                        }
                    }, {
                        type: "hashtag",
                        regexp: n.n(r).a,
                        srcInputs: ["compose"],
                        scope: {
                            result_type: "topics",
                            count: 20
                        }
                    }, {
                        type: "topic",
                        regexp: /(.+)/,
                        srcInputs: ["search_box"],
                        scope: {
                            result_type: "all"
                        }
                    }, {
                        type: "ttt",
                        regexp: /(.+)/,
                        srcInputs: ["welcome_flow"],
                        scope: {
                            count: 10,
                            result_type: "topics,ttt"
                        }
                    }],
                    WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
                    WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/
                }
        },
        krmn: function(e, t, n) {
            "use strict";
            var r = n("PJYZ"),
                i = n.n(r),
                a = n("VbXa"),
                o = n.n(a),
                s = n("lSNA"),
                c = n.n(s),
                u = n("ERkP"),
                d = n("zb92"),
                l = n("RuTB"),
                f = n("3XMw"),
                p = n.n(f),
                h = Object(d.a)({
                    loader: function() {
                        return p.a.emoji.then((function() {
                            return Promise.all([n.e(2), n.e(3), n.e(310), n.e(198)]).then(n.bind(null, "5RdJ"))
                        }))
                    },
                    renderPlaceholder: function(e, t) {
                        return u.createElement(l.a, {
                            error: e,
                            onRetry: t
                        })
                    }
                }),
                m = n("rrSi"),
                v = n.n(m),
                _ = n("LfYE"),
                b = n.n(_),
                y = n("rHpw"),
                g = n("D4le"),
                E = n.n(g),
                O = n("S9L7"),
                I = n.n(O),
                S = n("3xO4"),
                C = n.n(S),
                T = {
                    search: p.a.f4d93c05,
                    notFoundHeader: p.a.cc36cfaa,
                    notFoundMessage: p.a.f36390bf,
                    skintext: p.a.jeaab6f4,
                    skinTones: {
                        none: p.a.db88be15,
                        light: p.a.g9d86f6e,
                        "medium-light": p.a.d90edd79,
                        medium: p.a.b49b4e92,
                        "medium-dark": p.a.cf36797f,
                        dark: p.a.c2436d51
                    },
                    clear: p.a.h0c3f102,
                    categories: {
                        search: p.a.ec376b90,
                        recent: p.a.a280e2df,
                        people: p.a.bbadcad9,
                        nature: p.a.ec7b06fb,
                        food: p.a.ed375d08,
                        activity: p.a.daa68d31,
                        travel: p.a.fae5aed9,
                        objects: p.a.f395252d,
                        symbols: p.a.dcae2639,
                        flags: p.a.f50de0a0
                    }
                },
                A = y.a.create((function(e) {
                    return {
                        content: {
                            backgroundColor: e.colors.cellBackground
                        },
                        dimensions: {
                            height: "400px",
                            minWidth: "calc(" + e.spaces.large + " * 9 + 2 * " + e.spaces.xSmall + ")"
                        },
                        hidden: {
                            display: "none"
                        }
                    }
                })),
                w = function(e) {
                    var t = e.partialRender,
                        n = e.onDismiss,
                        r = e.onSelect,
                        i = I.a.get() > 1 ? b.a : v.a;
                    return u.createElement(u.Fragment, null, u.createElement(C.a, {
                        style: [A.content, A.dimensions]
                    }, u.createElement(h, {
                        onDismiss: n,
                        onSelect: r,
                        partialRender: t,
                        rowSize: 9,
                        spriteUrl: i,
                        uiStrings: T
                    })), u.createElement(E.a, {
                        source: i,
                        style: A.hidden
                    }))
                },
                x = n("EvIa"),
                j = n.n(x),
                R = n("OiMc"),
                D = n("/yvb"),
                P = n("2ZFc"),
                N = p.a.f9b394e6,
                M = u.createElement(j.a, null),
                k = function(e) {
                    function t(t, n) {
                        var r;
                        return r = e.call(this, t) || this, c()(i()(r), "_renderEmojiPicker", (function() {
                            var e = r.props,
                                t = e.onEmojiDropdownDismiss,
                                n = e.onEmojiSelect,
                                i = r.state.partialRender;
                            return u.createElement(w, {
                                onDismiss: t,
                                onSelect: n,
                                partialRender: i
                            })
                        })), c()(i()(r), "_handleClick", (function(e) {
                            var t = r.props.onPress;
                            t && t(e)
                        })), c()(i()(r), "_handleDismiss", (function() {
                            r.setState({
                                partialRender: !0
                            })
                        })), c()(i()(r), "_handleAnimateComplete", (function() {
                            r.setState({
                                partialRender: !1
                            })
                        })), r.state = {
                            partialRender: !0
                        }, r
                    }
                    o()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = this;
                        setTimeout((function() {
                            e._prepareEmojiPicker()
                        }), 5e3)
                    }, n.render = function() {
                        var e = this.props,
                            t = e.disabled,
                            n = e.size,
                            r = e.style;
                        return u.createElement(R.a, {
                            enableEnterKeyToggle: !0,
                            onAnimateComplete: this._handleAnimateComplete,
                            onDismiss: this._handleDismiss,
                            renderContent: this._renderEmojiPicker,
                            withArrow: !0
                        }, u.createElement(D.a, {
                            accessibilityLabel: N,
                            "aria-haspopup": "true",
                            disabled: t,
                            icon: M,
                            onPress: this._handleClick,
                            size: n,
                            style: r,
                            type: "text"
                        }))
                    }, n._prepareEmojiPicker = function() {
                        h.preload(), P.a.get("emojiPicker2")
                    }, t
                }(u.Component);
            c()(k, "defaultProps", {
                disabled: !1,
                size: "small"
            });
            t.a = k
        },
        lRnM: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return F
            })), n.d(t, "t", (function() {
                return z
            })), n.d(t, "x", (function() {
                return W
            })), n.d(t, "y", (function() {
                return G
            })), n.d(t, "B", (function() {
                return K
            })), n.d(t, "A", (function() {
                return q
            })), n.d(t, "z", (function() {
                return X
            })), n.d(t, "u", (function() {
                return Y
            })), n.d(t, "v", (function() {
                return Q
            })), n.d(t, "w", (function() {
                return Z
            })), n.d(t, "d", (function() {
                return J
            })), n.d(t, "k", (function() {
                return $
            })), n.d(t, "l", (function() {
                return ee
            })), n.d(t, "n", (function() {
                return te
            })), n.d(t, "m", (function() {
                return ne
            })), n.d(t, "a", (function() {
                return re
            })), n.d(t, "o", (function() {
                return ie
            })), n.d(t, "c", (function() {
                return oe
            })), n.d(t, "p", (function() {
                return ce
            })), n.d(t, "q", (function() {
                return ue
            })), n.d(t, "I", (function() {
                return de
            })), n.d(t, "s", (function() {
                return fe
            })), n.d(t, "D", (function() {
                return he
            })), n.d(t, "h", (function() {
                return me
            })), n.d(t, "j", (function() {
                return ve
            })), n.d(t, "g", (function() {
                return _e
            })), n.d(t, "i", (function() {
                return be
            })), n.d(t, "J", (function() {
                return ye
            })), n.d(t, "G", (function() {
                return ge
            })), n.d(t, "H", (function() {
                return Ee
            })), n.d(t, "F", (function() {
                return Ie
            })), n.d(t, "b", (function() {
                return Ce
            })), n.d(t, "r", (function() {
                return Ae
            })), n.d(t, "E", (function() {
                return xe
            })), n.d(t, "C", (function() {
                return je
            })), n.d(t, "e", (function() {
                return Re
            }));
            n("zpx+"), n("XjK0"), n("SCO9"), n("DB+v"), n("yKDW"), n("yIC7");
            var r = n("8OQS"),
                i = n.n(r),
                a = n("RIqP"),
                o = n.n(a),
                s = (n("AJ0U"), n("LnO1"), n("3eMz"), n("dtAy"), n("DiDI"), n("PN9k"), n("oEOe")),
                c = n("AspN"),
                u = n("RqPI"),
                d = n("AQ79"),
                l = n("/kEJ"),
                f = n("xPna"),
                p = n("pXBW"),
                h = n("hqKg"),
                m = n("k49u"),
                v = n("/NU0"),
                _ = n("aWyx"),
                b = n("WVrH"),
                y = n("uKEd"),
                g = n("k6jb"),
                E = n("kGix"),
                O = n("t0aI");

            function I(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            var S = s.a(d.b, "ACCEPT_CONVERSATION"),
                C = s.a(d.b, "ADD_PARTICIPANTS"),
                T = s.a(d.b, "FETCH_CONVERSATION"),
                A = s.a(d.b, "FETCH_CONVERSATION_FROM_PARTICIPANTS"),
                w = s.a(d.b, "LEAVE_CONVERSATION"),
                x = s.a(d.b, "MARK_CONVERSATION_READ"),
                j = s.a(d.b, "DISABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                R = s.a(d.b, "DISABLE_CONVERSATION_NOTIFICATIONS"),
                D = s.a(d.b, "ENABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                P = s.a(d.b, "ENABLE_CONVERSATION_NOTIFICATIONS"),
                N = s.a(d.b, "UPDATE_CONVERSATION_NAME"),
                M = s.a(d.b, "UPLOAD_MEDIA"),
                k = s.a(d.b, "UPDATE_GROUP_AVATAR"),
                B = function(e) {
                    return (new Date).getTime() + 36e5 * e
                },
                L = [void 0, B(1), B(8), B(168)],
                U = {};

            function F(e, t) {
                var n, r, a, s, c, u, d, l, f, p, h, m, v;
                switch (void 0 === e && (e = U), t.type) {
                    case S.SUCCESS:
                        var _, y = t.meta.conversationId,
                            A = e[y];
                        return Object.assign({}, e, ((_ = {})[y] = Object.assign({}, A, {
                            data: Object.assign({}, A.data, {
                                trusted: !0
                            })
                        }), _));
                    case ae:
                        var k = Object.entries(t.payload || {}).reduce((function(t, n) {
                            var r, i = n[0],
                                a = n[1];
                            return t[i] = Object.assign({}, V(e[i], a), {
                                fetchStatus: (r = {}, r[g.a] = E.a.LOADED, r[g.b] = E.a.LOADED, r)
                            }), t
                        }), {});
                        return Object.assign({}, e, {}, k);
                    case C.REQUEST:
                        var B, F, z = t.meta.conversationId,
                            W = e[z];
                        return Object.assign({}, e, ((F = {})[z] = Object.assign({}, W, {
                            fetchStatus: Object.assign({}, W.fetchStatus, (B = {}, B[g.b] = E.a.LOADING, B))
                        }), F));
                    case C.FAILURE:
                        var G, H, K = t.meta.conversationId,
                            q = e[K];
                        return Object.assign({}, e, ((H = {})[K] = Object.assign({}, q, {
                            fetchStatus: Object.assign({}, q.fetchStatus, (G = {}, G[g.b] = E.a.FAILED, G))
                        }), H));
                    case C.SUCCESS:
                        var X, Y, Q = t.meta.conversationId,
                            Z = e[Q],
                            J = Z.data.participants,
                            $ = t.payload.entities.entries ? Object.values(t.payload.entities.entries)[0].participants : [];
                        return Object.assign({}, e, ((Y = {})[Q] = Object.assign({}, Z, {
                            fetchStatus: Object.assign({}, Z.fetchStatus, (X = {}, X[g.b] = E.a.LOADED, X)),
                            data: Object.assign({}, Z.data, {
                                participants: [].concat(o()(J), o()($))
                            })
                        }), Y));
                    case T.REQUEST:
                        var ee, te, ne = t.meta,
                            re = ne.conversationId,
                            ie = ne.direction,
                            oe = void 0 === ie ? g.a : ie,
                            ce = e[re];
                        return Object.assign({}, e, ((te = {})[re] = Object.assign({}, ce, {
                            fetchStatus: Object.assign({}, ce && ce.fetchStatus || {}, (ee = {}, ee[oe] = E.a.LOADING, ee))
                        }), te));
                    case T.FAILURE:
                        var ue, de, fe = t.meta,
                            he = fe.conversationId,
                            me = fe.direction,
                            ve = void 0 === me ? g.a : me,
                            _e = e[he];
                        return Object.assign({}, e, ((de = {})[he] = Object.assign({}, _e, {
                            fetchStatus: Object.assign({}, _e && _e.fetchStatus || {}, (ue = {}, ue[ve] = E.a.FAILED, ue)),
                            error: t.payload
                        }), de));
                    case T.SUCCESS:
                        var be, ye, ge = t.meta,
                            Ee = ge.conversationId,
                            Ie = ge.direction,
                            Ce = void 0 === Ie ? g.a : Ie;
                        return Object.assign({}, e, ((ye = {})[Ee] = Object.assign({}, e[Ee], {
                            fetchStatus: Object.assign({}, e[Ee] && e[Ee].fetchStatus || {}, (be = {}, be[Ce] = E.a.LOADED, be))
                        }), ye));
                    case se:
                        return Object.entries(e).reduce((function(n, r) {
                            var i = r[0];
                            r[1];
                            return n[i] = V(e[i], {
                                last_read_event_id: t.payload
                            }), n
                        }), {});
                    case x.REQUEST:
                        return Object.assign({}, e, ((n = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            last_read_event_id: t.meta.lastReadEventId
                        }), n));
                    case le:
                        var Ae = e,
                            xe = t.payload;
                        Ae[xe];
                        return i()(Ae, [xe].map(I));
                    case w.REQUEST:
                        return Object.assign({}, e, ((r = {})[t.meta.conversationId] = Object.assign({}, e[t.meta.conversationId], {
                            isDeleted: !0
                        }), r));
                    case pe:
                        return Object.assign({}, e, ((a = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            notifications_disabled: !t.payload
                        }), a));
                    case R.REQUEST:
                        return Object.assign({}, e, ((s = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            notifications_disabled: !0,
                            mute_expiration_time: L[t.meta.duration]
                        }), s));
                    case j.REQUEST:
                        return Object.assign({}, e, ((c = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            mention_notifications_disabled: !0
                        }), c));
                    case P.REQUEST:
                        return Object.assign({}, e, ((u = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            notifications_disabled: !1
                        }), u));
                    case D.REQUEST:
                        return Object.assign({}, e, ((d = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            mention_notifications_disabled: !1
                        }), d));
                    case we:
                        return Object.assign({}, e, ((l = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            avatar_image_https: t.payload
                        }), l));
                    case N.REQUEST:
                    case N.SUCCESS:
                        return Object.assign({}, e, ((f = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            name: t.meta.name
                        }), f));
                    case Oe:
                        var je, Re = e[t.meta.conversationId],
                            De = Re && Re.data && Re.data.max_entry_id || "0";
                        return Object(O.b)(t.payload, De) ? Object.assign({}, e, ((je = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            max_entry_id: t.payload
                        }), je)) : e;
                    case M.REQUEST:
                        return Object.assign({}, e, ((p = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            isUploading: !0
                        }), p));
                    case M.FAILURE:
                    case M.SUCCESS:
                        return Object.assign({}, e, ((h = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            isUploading: !1
                        }), h));
                    case Se:
                        return Object.assign({}, e, ((m = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            avatarMediaId: t.payload
                        }), m));
                    case Te:
                        return Object.assign({}, e, ((v = {})[t.meta.conversationId] = V(e[t.meta.conversationId], {
                            avatarMediaId: null
                        }), v));
                    case b.a:
                        return U;
                    default:
                        return e
                }
            }
            var V = function(e, t, n) {
                    void 0 === e && (e = {}), void 0 === t && (t = {}), void 0 === n && (n = []);
                    var r, a, o = e,
                        s = (o.error, i()(o, ["error"])),
                        c = (Object(v.a)(t.avatarMediaId) ? t : s).avatarMediaId,
                        u = void 0 === c ? null : c,
                        d = t.isUploading,
                        l = void 0 !== d && d,
                        f = t,
                        p = (f.avatarMediaId, f.isUploading, f.max_entry_id),
                        h = i()(f, ["avatarMediaId", "isUploading", "max_entry_id"]),
                        m = Object.assign({}, s && s.data, {}, h);
                    return p && (m.max_entry_id = (r = p, a = s && s.data && s.data.max_entry_id, Object(O.c)(r, a) ? r : a)), Object.assign({}, s, {
                        avatarMediaId: u,
                        data: m,
                        isUploading: l
                    })
                },
                z = function(e, t) {
                    return e[d.a].conversations[t]
                },
                W = function(e, t) {
                    var n = z(e, t);
                    return n ? Object(E.b)(n.fetchStatus, n.data) : E.a.LOADED
                },
                G = function(e, t) {
                    var n = z(e, t);
                    return !!n && Object(E.b)(n.fetchStatus, n.data) === E.a.LOADED
                },
                H = function(e, t) {
                    var n = z(e, t);
                    return !!n && n.fetchStatus[g.a] === E.a.LOADING
                },
                K = Object(h.createSelector)((function(e) {
                    return e[d.a].conversations
                }), (function(e) {
                    return Object.entries(e).reduce((function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return r.data && (e[n] = r), e
                    }), {})
                })),
                q = function(e, t) {
                    var n = ((z(e, t) || {}).data || {}).sort_event_id;
                    if (n) {
                        var r = u.g(e),
                            i = Object(y.n)(e, n) || {},
                            a = i.message_data,
                            o = i.by_user_id,
                            s = i.id,
                            c = i.sender_id;
                        if (c && c !== r || a && a.sender_id !== r || o && o !== r) return s
                    }
                    return null
                },
                X = function(e, t) {
                    var n = q(e, t),
                        r = (z(e, t) || {}).data;
                    return !n || !!(r && r.last_read_event_id && Object(O.c)(r.last_read_event_id, n))
                },
                Y = function(e, t) {
                    return (z(e, t) || {}).avatarMediaId
                },
                Q = function(e, t) {
                    return (z(e, t) || {}).isUploading
                },
                Z = function(e, t) {
                    return c.h(e, Y(e, t))
                },
                J = function(e, t) {
                    return function(n, r, i) {
                        var a = i.api,
                            o = t.join(",");
                        return s.b(n, {
                            params: {
                                conversationId: e,
                                joinedParticipantIds: o
                            },
                            request: a.DirectMessages.addParticipants
                        })({
                            actionTypes: C,
                            context: "ACTION_DM_ADD_PARTICIPANTS",
                            meta: {
                                conversationId: e,
                                participantIds: t
                            }
                        }, (function(e) {
                            if (e) {
                                var t = e.entities;
                                return [t.entries && Object(y.a)(t.entries), Object(l.b)(t)]
                            }
                        })).then((function(e) {
                            var t = e.result.failed_participants;
                            if (!t) return Promise.resolve(e);
                            var n = Object.keys(t),
                                r = 1 === n.length ? t[n[0]] : m.a.DefaultApiError,
                                i = new p.a("addParticpants URL", 500, [{
                                    code: r
                                }]);
                            return i.context.action = "ACTION_DM_ADD_PARTICIPANTS", Promise.reject(i)
                        }))
                    }
                },
                $ = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n, r) {
                            var i = r.api,
                                a = e,
                                o = a.conversationId,
                                c = a.context;
                            return s.b(t, {
                                params: e,
                                request: i.DirectMessages.fetchConversation
                            })({
                                actionTypes: T,
                                context: c,
                                meta: {
                                    conversationId: o,
                                    direction: Object(g.c)(e)
                                }
                            }, (function(e) {
                                if (e) {
                                    var t = e.entities,
                                        n = t.cards,
                                        r = t.entries,
                                        i = t.tweets,
                                        a = t.users,
                                        o = e.result.conversation_timeline,
                                        s = function(e, t) {
                                            return void 0 === e && (e = {}), Object.entries(e).reduce((function(e, n) {
                                                var r, i = n[0],
                                                    a = n[1];
                                                return Object.assign({}, e, ((r = {})[i] = Object.assign({}, a, {}, t), r))
                                            }), {})
                                        }(o.conversations, {
                                            max_entry_id: o.max_entry_id,
                                            min_entry_id: o.min_entry_id,
                                            status: o.status
                                        });
                                    return Object(f.b)({
                                        conversations: s,
                                        entries: r,
                                        users: a,
                                        tweets: i,
                                        cards: n
                                    })
                                }
                            }))
                        }
                },
                ee = function(e) {
                    return function(t, n, r) {
                        var i = r.api;
                        return s.b(t, {
                            params: {
                                participantIds: e
                            },
                            request: i.DirectMessages.fetchConversationFromParticipants
                        })({
                            actionTypes: A,
                            meta: {
                                participantIds: e
                            }
                        })
                    }
                },
                te = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n) {
                            var r = n(),
                                i = e.conversationId,
                                a = (z(r, i) || {}).data,
                                o = void 0 === a ? {} : a,
                                s = H(r, i);
                            return (!o.status || o.status === _.c.HAS_MORE) && !s ? t($({
                                conversationId: i,
                                context: "FETCH_DM_CONVERSATION"
                            })) : Promise.resolve()
                        }
                },
                ne = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n) {
                            var r = n(),
                                i = e.conversationId,
                                a = (z(r, i) || {}).data || {},
                                o = a.status,
                                s = a.min_entry_id,
                                c = H(r, i);
                            return o !== _.c.HAS_MORE || c ? Promise.resolve() : t($(Object.assign({}, e, {
                                max_id: s,
                                context: "FETCH_DM_CONVERSATION_HISTORY"
                            })))
                        }
                },
                re = function(e) {
                    return function(t, n, r) {
                        var i = r.api;
                        return s.b(t, {
                            params: {
                                conversationId: e
                            },
                            request: i.DirectMessages.acceptConversation
                        })({
                            actionTypes: S,
                            meta: {
                                conversationId: e
                            }
                        })
                    }
                },
                ie = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n, r) {
                            var i = r.api,
                                a = e.conversationId;
                            return s.c(t, {
                                params: e,
                                request: i.DirectMessages.leaveConversation
                            })({
                                actionTypes: w,
                                context: "ACTION_LEAVE_CONVERSATION",
                                meta: {
                                    conversationId: a
                                }
                            })
                        }
                },
                ae = d.c("ADD_CONVERSATIONS"),
                oe = function(e) {
                    return {
                        payload: e,
                        type: ae
                    }
                },
                se = d.c("MARK_ALL_AS_READ"),
                ce = function(e) {
                    return {
                        payload: e,
                        type: se
                    }
                },
                ue = function(e, t) {
                    return {
                        type: x.REQUEST,
                        meta: {
                            conversationId: e,
                            lastReadEventId: t
                        }
                    }
                },
                de = function(e) {
                    return function(t, n, r) {
                        var i = r.api,
                            a = n(),
                            o = (z(a, e) || {}).data,
                            c = (void 0 === o ? {} : o).sort_event_id,
                            u = !X(a, e);
                        return e && c && u ? s.c(t, {
                            params: {
                                conversationId: e,
                                last_read_event_id: c
                            },
                            request: i.DirectMessages.markRead
                        })({
                            actionTypes: x,
                            bypassFailureOnErrors: function() {
                                return !0
                            },
                            context: "APP_DM_UPDATE_CONVERSATION_READ_STATE",
                            meta: {
                                conversationId: e,
                                lastReadEventId: c
                            }
                        }) : Promise.resolve()
                    }
                },
                le = d.c("REMOVE_CONVERSATION"),
                fe = function(e) {
                    return [{
                        payload: e,
                        type: le
                    }, Object(y.i)(e)]
                },
                pe = d.c("TOGGLE_CONVERSATION_NOTIFICATIONS"),
                he = function(e, t) {
                    return {
                        meta: {
                            conversationId: e
                        },
                        payload: t,
                        type: pe
                    }
                },
                me = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n, r) {
                            var i = r.api,
                                a = e,
                                o = a.conversationId,
                                c = a.duration;
                            return s.c(t, {
                                params: e,
                                request: i.DirectMessages.disableNotifications
                            })({
                                actionTypes: R,
                                context: "ACTION_DISABLE_NOTIFICATIONS",
                                meta: {
                                    conversationId: o,
                                    duration: c
                                }
                            })
                        }
                },
                ve = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n, r) {
                            var i = r.api,
                                a = e.conversationId;
                            return s.c(t, {
                                params: e,
                                request: i.DirectMessages.enableNotifications
                            })({
                                actionTypes: P,
                                context: "ACTION_ENABLE_NOTIFICATIONS",
                                meta: {
                                    conversationId: a
                                }
                            })
                        }
                },
                _e = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n, r) {
                            var i = r.api,
                                a = e.conversationId,
                                o = Object.assign({
                                    mention_notifications_disabled: !0
                                }, e);
                            return s.c(t, {
                                params: o,
                                request: i.DirectMessages.updateMentionNotificationsSetting
                            })({
                                actionTypes: j,
                                context: "ACTION_DISABLE_DM_MENTION_NOTIFICATIONS",
                                meta: {
                                    conversationId: a
                                }
                            })
                        }
                },
                be = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n, r) {
                            var i = r.api,
                                a = e.conversationId,
                                o = Object.assign({
                                    mention_notifications_disabled: !1
                                }, e);
                            return s.c(t, {
                                params: o,
                                request: i.DirectMessages.updateMentionNotificationsSetting
                            })({
                                actionTypes: D,
                                context: "ACTION_ENABLE_DM_MENTION_NOTIFICATIONS",
                                meta: {
                                    conversationId: a
                                }
                            })
                        }
                },
                ye = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n, r) {
                            return r.api.DirectMessages.updateTyping(e)
                        }
                },
                ge = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n, r) {
                            var i = r.api,
                                a = e,
                                o = a.conversationId,
                                c = a.name;
                            return s.c(t, {
                                params: e,
                                request: i.DirectMessages.updateConversationName
                            })({
                                actionTypes: N,
                                context: "ACTION_UPDATE_CONVERSATION_NAME",
                                meta: {
                                    conversationId: o,
                                    name: c
                                }
                            })
                        }
                },
                Ee = function(e) {
                    return {
                        type: N.SUCCESS,
                        meta: {
                            conversationId: e.conversation_id,
                            name: e.conversation_name
                        }
                    }
                },
                Oe = d.c("UPDATE_CONVERSATION_MAX_ENTRY_ID"),
                Ie = function(e, t) {
                    return {
                        meta: {
                            conversationId: e
                        },
                        payload: t,
                        type: Oe
                    }
                },
                Se = d.c("ADD_AVATAR_MEDIA"),
                Ce = function(e, t) {
                    return {
                        meta: {
                            conversationId: e
                        },
                        payload: t,
                        type: Se
                    }
                },
                Te = d.c("REMOVE_AVATAR_MEDIA"),
                Ae = function(e, t) {
                    return {
                        meta: {
                            conversationId: e
                        },
                        payload: t,
                        type: Te
                    }
                },
                we = d.c("UPDATE_CONVERSATION_AVATAR"),
                xe = function(e, t) {
                    return {
                        meta: {
                            conversationId: e
                        },
                        payload: t,
                        type: we
                    }
                },
                je = function(e) {
                    return function(t, n, r) {
                        var i = r.api;
                        t({
                            meta: {
                                conversationId: e
                            },
                            type: M.REQUEST
                        });
                        var a = Y(n(), e),
                            o = c.k(a);
                        return t(o).then((function(n) {
                            var r = n[0];
                            return t({
                                meta: {
                                    conversationId: e
                                },
                                type: M.SUCCESS
                            }), s.b(t, {
                                params: {
                                    conversationId: e,
                                    avatar_id: r.uploadId
                                },
                                request: i.DirectMessages.updateConversationAvatar
                            })({
                                actionTypes: k,
                                context: "APP_DM_UPDATE_CONVERSATION_AVATAR"
                            })
                        }), (function(n) {
                            var r = {
                                errors: n,
                                context: "APP_DM_UPDATE_CONVERSATION_AVATAR"
                            };
                            return t({
                                meta: {
                                    conversationId: e
                                },
                                type: M.FAILURE
                            }), Promise.reject(r)
                        }))
                    }
                },
                Re = function(e, t) {
                    return function(n, r, i) {
                        var a = i.api;
                        return s.d(n, {
                            params: {
                                conversation_id: e,
                                welcome_message_id: t
                            },
                            request: a.DirectMessages.addWelcomeMessageToConversation
                        })("ADD_WELCOME_MESSAGE_TO_CONVERSATION")
                    }
                }
        },
        "n+Zb": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            }));
            var r = function(e) {
                    return {
                        id: e,
                        distanceToViewportTop: 0
                    }
                },
                i = function(e) {
                    return {
                        id: e,
                        distanceToViewportBottom: 0
                    }
                }
        },
        oEoC: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return o
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "a", (function() {
                return d
            }));
            var r = n("RIqP"),
                i = n.n(r),
                a = (n("Bu8c"), n("PN9k"), n("NlgC"), n("KI7T"), n("kIAd"));

            function o(e, t) {
                var n, r, i = a.b.scoper.find((function(r) {
                    if (-1 !== r.srcInputs.indexOf(t)) return n = e.match(r.regexp)
                }));
                return n && (r = n && (1 === n.length ? n[0] : n[1])), i ? Object.assign({}, i.scope, {
                    src: t,
                    q: r
                }) : null
            }

            function s(e, t) {
                var n = t.slice(0, e),
                    r = t.slice(e, t.length),
                    i = n.search(a.b.WordEnd),
                    o = (i >= 0 ? n.slice(i) : "") + r.slice(0, r.search(a.b.WordBoundary));
                return o.trim() ? {
                    start: i,
                    word: o
                } : {
                    start: -1,
                    word: ""
                }
            }

            function c() {
                return "typeaheadFocus-" + Math.random()
            }

            function u(e) {
                var t = e.altKey,
                    n = e.ctrlKey,
                    r = e.metaKey;
                return !(t || n || r)
            }

            function d(e, t) {
                var n = [];
                e.forEach((function(e) {
                    var r = t.find((function(t) {
                        return t.id === e.id
                    }));
                    r && r.data && r.data.result_context ? n.push(r) : n.push(e)
                }));
                var r = n.map((function(e) {
                        return e.id
                    })),
                    a = t.filter((function(e) {
                        return r.indexOf(e.id) < 0
                    }));
                return [].concat(n, i()(a))
            }
        },
        p9G8: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return f
            }));
            n("LnO1"), n("3eMz"), n("dtAy"), n("DB+v"), n("yIC7");
            var r = n("aWyx"),
                i = n("XnpN"),
                a = n("3XMw"),
                o = n.n(a),
                s = r.a.GROUP,
                c = o.a.f99851d2,
                u = o.a.d41c718e,
                d = o.a.cab8984c,
                l = o.a.a559663d;
            t.a = function(e, t) {
                var n = e.type,
                    r = e.name,
                    a = e.participants,
                    o = void 0 === a ? {} : a;
                if (n === s && r) return r;
                if (Object.keys(o).length) {
                    var c = Object(i.a)(e, t).map((function(e) {
                        return e.user
                    }));
                    return f(c, t, n)
                }
            };
            var f = function(e, t, n) {
                void 0 === e && (e = []), void 0 === n && (n = s);
                var r = e.filter((function(e) {
                        return e.id_str !== t
                    })),
                    i = r[0],
                    a = r.slice(1);
                switch (r.length) {
                    case 0:
                        return c;
                    case 1:
                        return n === s ? u({
                            name: i.name
                        }) : i.name;
                    case 2:
                        return d({
                            name1: i.name,
                            name2: a[0].name
                        });
                    default:
                        return l({
                            name: i.name,
                            count: a.length
                        })
                }
            }
        },
        pKoL: function(e, t, n) {
            "use strict";
            var r = n("PJYZ"),
                i = n.n(r),
                a = n("VbXa"),
                o = n.n(a),
                s = n("lSNA"),
                c = n.n(s),
                u = n("ERkP"),
                d = n("HPNB"),
                l = n("wrlS"),
                f = n("9HgX"),
                p = n("3XMw"),
                h = n.n(p),
                m = n("l2F/"),
                v = n.n(m),
                _ = n("ur9R"),
                b = n.n(_),
                y = n("mN6z"),
                g = (n("AxOO"), n("Qwev")),
                E = n("rHpw"),
                O = (n("aWzz"), n("1auM")),
                I = n("ude7"),
                S = n("D4le"),
                C = n.n(S),
                T = n("3xO4"),
                A = n.n(T),
                w = h.a.a54d17e1,
                x = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "state", {
                            imagePreviewUrl: null
                        }), c()(i()(t), "_getImageSrc", (function() {
                            var e = t.props,
                                n = e.mediaItem,
                                r = e.enableGif,
                                i = t.state.imagePreviewUrl;
                            if (n && n.mediaFile) return n.mediaFile.isGif && !r ? i : n.mediaFile.url
                        })), t
                    }
                    o()(t, e);
                    var n = t.prototype;
                    return n.componentDidUpdate = function() {
                        var e = this,
                            t = this.props,
                            n = t.enableGif,
                            r = t.mediaItem.mediaFile,
                            i = this.state.imagePreviewUrl;
                        n || i || r instanceof O.a && r.isGif && Object(I.a)(r).then((function(t) {
                            e.setState({
                                imagePreviewUrl: t
                            })
                        }))
                    }, n.shouldComponentUpdate = function(e, t) {
                        return !Object(y.a)(e, this.props) || !Object(y.a)(t, this.state)
                    }, n.render = function() {
                        var e = this.props,
                            t = e.borderRadius,
                            n = e.enableGif,
                            r = e.mediaItem,
                            i = e.onClick,
                            a = (this.state || {}).imagePreviewUrl,
                            o = r.mediaFile && r.mediaFile.isGif && !n && !a,
                            s = r.needsProcessing || o,
                            c = [R.root, j[t], s && R.loadingBorder],
                            d = this._getImageSrc();
                        return u.createElement(A.a, {
                            onClick: i,
                            style: c
                        }, s || !d ? u.createElement(g.a, {
                            accessibilityLabel: w,
                            style: R.activityIndicator
                        }) : u.createElement(C.a, {
                            resizeMode: "cover",
                            source: d,
                            style: R.image
                        }))
                    }, t
                }(u.Component);
            c()(x, "defaultProps", {
                borderRadius: "none",
                enableGif: !0
            });
            var j = E.a.create((function(e) {
                    return {
                        infinite: {
                            borderRadius: e.borderRadii.infinite
                        },
                        medium: {
                            borderRadius: e.borderRadii.medium
                        },
                        none: {
                            borderRadius: 0
                        }
                    }
                })),
                R = E.a.create((function(e) {
                    return {
                        root: {
                            borderRadius: e.borderRadii.large,
                            borderStyle: "solid",
                            borderWidth: 0,
                            borderColor: "transparent",
                            maxWidth: "100%",
                            height: "100%",
                            overflow: "hidden"
                        },
                        image: {
                            display: "block",
                            height: "100%",
                            width: "100%"
                        },
                        loadingBorder: {
                            borderColor: e.colors.mediumGray
                        },
                        activityIndicator: {
                            height: "100%"
                        }
                    }
                })),
                D = x,
                P = (n("PN9k"), n("8OQS")),
                N = n.n(P),
                M = n("7DT3"),
                k = n.n(M),
                B = n("eXeu"),
                L = n("iOGT"),
                U = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_setVideoRef", (function(e) {
                            var n = t.props.getVideoRef;
                            n && n(e)
                        })), t
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.dataSaverMode,
                            r = (e.getVideoRef, e.style),
                            i = e.variants,
                            a = N()(e, ["children", "dataSaverMode", "getVideoRef", "style", "variants"]),
                            o = Object(L.c)(i, n ? L.a.MEDIUM : L.a.HIGH) || [],
                            s = Object(B.d)(o.map((function(e) {
                                return {
                                    src: e.url,
                                    type: e.content_type
                                }
                            })));
                        return k()("video", Object.assign({}, a, {
                            children: [s.map((function(e) {
                                return u.createElement("source", {
                                    key: e.src,
                                    src: e.src,
                                    type: e.type
                                })
                            })), t],
                            ref: this._setVideoRef,
                            style: r
                        }))
                    }, t
                }(u.Component);
            c()(U, "defaultProps", {
                dataSaverMode: !1,
                variants: []
            });
            var F = n("cHvH"),
                V = n("mXq/"),
                z = n("/yvb"),
                W = n("a6qo"),
                G = n("+/sI"),
                H = h.a.b2e1930b,
                K = h.a.c650c591,
                q = h.a.j0fc88f7,
                X = h.a.i82022e8,
                Y = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "state", {
                            isVideoPaused: !0,
                            playGif: !1
                        }), c()(i()(t), "_handleGifClick", (function() {
                            t.setState({
                                playGif: !t.state.playGif
                            })
                        })), c()(i()(t), "_handleMediaPreviewLayout", (function(e) {
                            var n = t.props,
                                r = n.mediaItem,
                                i = n.resizeIfNeeded,
                                a = r.mediaFile || r.externalMediaDetails;
                            if (a) {
                                var o = e.nativeEvent.layout,
                                    s = o.height,
                                    c = o.width,
                                    u = a.height,
                                    d = a.width / u;
                                d !== c / s && t._mediaContainer && ("width" === i ? t._mediaContainer.setNativeProps({
                                    style: {
                                        width: s * d
                                    }
                                }) : "height" === i && t._mediaContainer.setNativeProps({
                                    style: {
                                        height: c / d
                                    }
                                }))
                            }
                        })), c()(i()(t), "_handleVideoOnPlay", (function(e) {
                            t.setState({
                                isVideoPaused: !1
                            })
                        })), c()(i()(t), "_handleVideoOnPause", (function(e) {
                            t.setState({
                                isVideoPaused: !0
                            })
                        })), c()(i()(t), "_setMediaContainerRef", (function(e) {
                            t._mediaContainer = e
                        })), c()(i()(t), "_setVideoRef", (function(e) {
                            t._video = e
                        })), c()(i()(t), "_playVideo", (function() {
                            t._video && (t._video.play(), t._handleVideoOnPlay())
                        })), c()(i()(t), "_pauseVideo", (function() {
                            t._video && (t._video.pause(), t._handleVideoOnPause())
                        })), t
                    }
                    o()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.accessibilityRole,
                            r = t.enableGif,
                            i = t.mediaItem,
                            a = t.onEdit,
                            o = t.onRemove,
                            s = t.style,
                            c = t.withAltTextLabel,
                            p = t.withCloseButton,
                            h = t.withEditButton,
                            m = this.state.playGif,
                            _ = i.externalMediaDetails && i.externalMediaDetails.mediaType === f.a,
                            y = _ || r && i.mediaFile && i.mediaFile.isGif;
                        return u.createElement(F.a, null, (function(t) {
                            var r = t.windowWidth,
                                i = d.a.isTwoColumnLayout(r);
                            return u.createElement(A.a, {
                                accessibilityRole: n,
                                onLayout: e._handleMediaPreviewLayout,
                                ref: e._setMediaContainerRef,
                                style: [s, _ && Q.gifPlayButton]
                            }, e._renderPreview(), _ && !m && u.createElement(V.a, {
                                accessibilityLabel: q,
                                onPress: e._handleGifClick,
                                size: "small"
                            }), p ? u.createElement(z.a, {
                                accessibilityLabel: X,
                                icon: u.createElement(v.a, null),
                                onPress: o,
                                size: "small",
                                style: l.a.isTrue("responsive_web_alt_text_by_default_enabled") ? Q.close : Q.oldClose,
                                type: "onMedia"
                            }) : null, y ? u.createElement(G.c, {
                                type: G.a
                            }) : null, c ? u.createElement(W.a, {
                                align: "left",
                                bold: !0
                            }, "ALT") : null, h ? u.createElement(z.a, {
                                accessibilityLabel: H,
                                icon: l.a.isTrue("responsive_web_alt_text_by_default_enabled") && i ? void 0 : u.createElement(b.a, null),
                                onPress: a,
                                size: l.a.isTrue("responsive_web_alt_text_by_default_enabled") && i ? "normalCompact" : "small",
                                style: l.a.isTrue("responsive_web_alt_text_by_default_enabled") ? Q.edit : Q.oldEdit,
                                type: "onMedia"
                            }, l.a.isTrue("responsive_web_alt_text_by_default_enabled") && i && K) : null)
                        }))
                    }, n._renderPreview = function() {
                        var e = this.props.mediaItem;
                        if (e.externalMediaDetails) {
                            var t = e.externalMediaDetails.previewUrl,
                                n = e.externalMediaDetails.stillMediaUrl;
                            return this._renderGifPreview(t, n)
                        }
                        if (e.mediaFile && e.mediaFile.isVideo) {
                            var r = [{
                                content_type: e.mediaFile.type,
                                url: e.mediaFile.url
                            }];
                            return this._renderVideoPreview(r)
                        }
                        return u.createElement(A.a, {
                            style: E.a.absoluteFill
                        }, this._renderImagePreview())
                    }, n._renderGifPreview = function(e, t) {
                        var n = {
                            uri: this.state.playGif ? e : t
                        };
                        return u.createElement(A.a, {
                            onClick: this._handleGifClick,
                            style: E.a.absoluteFill
                        }, u.createElement(C.a, {
                            resizeMode: "cover",
                            source: n,
                            style: Q.video
                        }))
                    }, n._renderImagePreview = function() {
                        var e = this.props,
                            t = e.borderRadius,
                            n = e.enableGif,
                            r = e.mediaItem,
                            i = e.onClick;
                        return u.createElement(D, {
                            borderRadius: t,
                            enableGif: n,
                            mediaItem: r,
                            onClick: i
                        })
                    }, n._renderVideoPreview = function(e) {
                        return u.createElement(U, {
                            autoPlay: !1,
                            controls: !0,
                            getVideoRef: this._setVideoRef,
                            loop: !0,
                            muted: !0,
                            onPause: this._handleVideoOnPause,
                            onPlay: this._handleVideoOnPlay,
                            playsInline: !0,
                            style: Q.video,
                            variants: e
                        })
                    }, t
                }(u.Component);
            c()(Y, "defaultProps", {
                enableGif: !0,
                withAltTextLabel: !1,
                withCloseButton: !0,
                withEditButton: !1
            });
            var Q = E.a.create((function(e) {
                return {
                    close: {
                        position: "absolute",
                        left: e.spaces.xxSmall,
                        top: e.spaces.xxSmall
                    },
                    oldClose: {
                        position: "absolute",
                        right: e.spaces.xxSmall,
                        top: e.spaces.xxSmall
                    },
                    edit: {
                        position: "absolute",
                        right: e.spaces.xxSmall,
                        top: e.spaces.xxSmall
                    },
                    oldEdit: {
                        position: "absolute",
                        right: e.spaces.xxSmall,
                        bottom: e.spaces.xxSmall
                    },
                    gifPlayButton: {
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    video: {
                        height: "100%",
                        width: "100%"
                    }
                }
            }));
            t.a = Y
        },
        prG5: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            }));
            var r = n("pVnL"),
                i = n.n(r),
                a = n("8OQS"),
                o = n.n(a),
                s = n("PJYZ"),
                c = n.n(s),
                u = n("VbXa"),
                d = n.n(u),
                l = n("lSNA"),
                f = n.n(l),
                p = n("ERkP"),
                h = (n("aWzz"), n("nT9l")),
                m = n("3XMw"),
                v = n.n(m),
                _ = n("TIdA"),
                b = n("a6qo"),
                y = v.a.i7c776d5,
                g = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, f()(c()(t), "_renderContent", (function(e) {
                            var n = e.useMinimumData,
                                r = e.resourceSelectionHandler,
                                a = t.props,
                                s = (a.hideAcceptOverlay, a.shouldShowAltLabel),
                                c = o()(a, ["hideAcceptOverlay", "shouldShowAltLabel"]);
                            return p.createElement(p.Fragment, null, p.createElement(_.a, i()({}, c, {
                                onVariantSelection: r,
                                previewMode: n
                            })), s ? p.createElement(b.a, {
                                align: "left",
                                bold: !0
                            }, "ALT") : null)
                        })), t
                    }
                    return d()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.image,
                            n = e.hideAcceptOverlay;
                        return p.createElement(h.a, {
                            acceptLabel: y,
                            hideAcceptOverlay: n,
                            renderContent: this._renderContent,
                            resourceId: "string" == typeof t ? t : t.url
                        })
                    }, t
                }(p.Component)
        },
        rFBM: function(e, t, n) {
            "use strict";
            n("4oWw"), n("nruA");
            var r = n("1Pcy"),
                i = n.n(r),
                a = n("W/Kd"),
                o = n.n(a),
                s = n("KEM+"),
                c = n.n(s),
                u = n("ERkP"),
                d = n("rHpw"),
                l = n("7DT3"),
                f = n.n(l),
                p = n("3xO4"),
                h = n.n(p),
                m = function(e) {
                    return f()("div", e)
                },
                v = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_dragEnterCount", 0), c()(i()(t), "state", {
                            active: !1
                        }), c()(i()(t), "_handleDragDrop", (function(e) {
                            var n = t.props.onFilesAdded;
                            e.preventDefault(), n(Array.from(e && e.dataTransfer.files)), t._updateDragCount(0)
                        })), c()(i()(t), "_handleDragEnter", (function(e) {
                            var n = t.props.onDragEnter;
                            e.preventDefault(), n && n(), t._updateDragCount(t._dragEnterCount + 1)
                        })), c()(i()(t), "_handleDragLeave", (function(e) {
                            e.preventDefault(), t._updateDragCount(t._dragEnterCount - 1)
                        })), c()(i()(t), "_handleDragOver", (function(e) {
                            e.preventDefault()
                        })), t
                    }
                    o()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this.props,
                            t = e.allowDragDrop,
                            n = e.children,
                            r = e.style,
                            i = this.state.active,
                            a = t ? _.dragBorderValid : _.dragBorderInvalid;
                        return u.createElement(m, {
                            onDragEnter: this._handleDragEnter,
                            onDragLeave: this._handleDragLeave,
                            onDragOver: this._handleDragOver,
                            onDrop: this._handleDragDrop,
                            style: [_.root, r, i && a]
                        }, u.createElement(h.a, {
                            style: _.inner
                        }, "function" == typeof n ? n(i) : n))
                    }, n._updateDragCount = function(e) {
                        this._dragEnterCount = e, 0 === this._dragEnterCount ? this.setState({
                            active: !1
                        }) : this._dragEnterCount > 0 && this.setState({
                            active: !0
                        })
                    }, t
                }(u.Component);
            c()(v, "defaultProps", {
                allowDragDrop: !0
            });
            var _ = d.a.create((function(e) {
                return {
                    root: {
                        display: "flex",
                        flexDirection: "column"
                    },
                    dragBorderValid: {
                        borderStyle: "dashed",
                        borderWidth: e.spaces.micro,
                        borderColor: e.colors.primary
                    },
                    dragBorderInvalid: {
                        borderStyle: "dashed",
                        borderWidth: e.spaces.micro,
                        borderColor: e.colors.red
                    },
                    inner: {
                        flexGrow: 1
                    }
                }
            }));
            t.a = v
        },
        rYvg: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = s(n("7DT3")),
                i = s(n("/uF9")),
                a = s(n("ERkP")),
                o = s(n("OkZJ"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [o.default.root, e.style, i.default.isRTL && o.default.iconRtl],
                    viewBox: "0 0 24 24"
                }), a.default.createElement("g", null, a.default.createElement("path", {
                    d: "M19.707 11.293l-6-6c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L16.586 11H4c-.553 0-1 .447-1 1s.447 1 1 1h12.586l-4.293 4.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l6-6c.39-.39.39-1.023 0-1.414z"
                })))
            };
            c.metadata = {
                height: 24,
                width: 24
            };
            var u = c;
            t.default = u
        },
        rrSi: function(e, t, n) {
            e.exports = n.p + "twemoji_sprite.bfc36644.png"
        },
        "s7+0": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var r = d(n("9GF2")),
                i = (d(n("7Sm6")), d(n("7DT3"))),
                a = d(n("mnkn")),
                o = d(n("fNhy")),
                s = d(n("RU7y")),
                c = d(n("3xO4")),
                u = (d(n("n0Hp")), function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                            }
                    return t.default = e, t
                }(n("ERkP")));
            n("aWzz");

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var h = "0px 1px 3px rgba(0,0,0,0.5)",
                m = h + ", 0 0 0 10px rgba(0,0,0,0.1)",
                v = function(e) {
                    var t, n;

                    function r() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this)._handleChange = function(e) {
                            var n = t.props.onValueChange;
                            n && n(e.nativeEvent.target.checked)
                        }, t._handleFocusState = function(e) {
                            var n = "focus" === e.nativeEvent.type ? m : h;
                            t._thumbElement && t._thumbElement.setNativeProps({
                                style: {
                                    boxShadow: n
                                }
                            })
                        }, t._setCheckboxRef = function(e) {
                            t._checkboxElement = e
                        }, t._setThumbRef = function(e) {
                            t._thumbElement = e
                        }, t
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var d = r.prototype;
                    return d.blur = function() {
                        s.default.blur(this._checkboxElement)
                    }, d.focus = function() {
                        s.default.focus(this._checkboxElement)
                    }, d.render = function() {
                        var e = this.props,
                            t = e.accessibilityLabel,
                            n = e.activeThumbColor,
                            r = e.activeTrackColor,
                            s = e.disabled,
                            d = (e.onValueChange, e.style),
                            l = e.thumbColor,
                            f = e.trackColor,
                            h = e.value,
                            m = e.onTintColor,
                            v = e.thumbTintColor,
                            b = e.tintColor,
                            y = function(e, t) {
                                if (null == e) return {};
                                var n, r, i = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i
                            }(e, ["accessibilityLabel", "activeThumbColor", "activeTrackColor", "disabled", "onValueChange", "style", "thumbColor", "trackColor", "value", "onTintColor", "thumbTintColor", "tintColor"]),
                            g = o.default.flatten(d),
                            E = g.height,
                            O = g.width,
                            I = E || 20,
                            S = (0, a.default)(I, 2),
                            C = O > S ? O : S,
                            T = (0, a.default)(I, .5),
                            A = h ? m || r : b || f,
                            w = h ? n : v || l,
                            x = I,
                            j = x,
                            R = [_.root, d, {
                                height: I,
                                width: C
                            }, s && _.cursorDefault],
                            D = [_.track, {
                                backgroundColor: A,
                                borderRadius: T
                            }, s && _.disabledTrack],
                            P = [_.thumb, {
                                backgroundColor: w,
                                height: x,
                                width: j
                            }, s && _.disabledThumb],
                            N = (0, i.default)("input", {
                                accessibilityLabel: t,
                                checked: h,
                                disabled: s,
                                onBlur: this._handleFocusState,
                                onChange: this._handleChange,
                                onFocus: this._handleFocusState,
                                ref: this._setCheckboxRef,
                                style: [_.nativeControl, _.cursorInherit],
                                type: "checkbox"
                            });
                        return u.default.createElement(c.default, p({}, y, {
                            style: R
                        }), u.default.createElement(c.default, {
                            style: D
                        }), u.default.createElement(c.default, {
                            ref: this._setThumbRef,
                            style: [P, h && _.thumbOn, {
                                marginStart: h ? (0, a.default)(j, -1) : 0
                            }]
                        }), N)
                    }, r
                }(u.Component);
            v.displayName = "Switch", v.defaultProps = {
                activeThumbColor: "#009688",
                activeTrackColor: "#A3D3CF",
                disabled: !1,
                style: {},
                thumbColor: "#FAFAFA",
                trackColor: "#939393",
                value: !1
            }, v.propTypes = {};
            var _ = o.default.create({
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
                    track: l({}, o.default.absoluteFillObject, {
                        height: "70%",
                        margin: "auto",
                        transitionDuration: "0.1s",
                        width: "100%"
                    }),
                    disabledTrack: {
                        backgroundColor: "#D5D5D5"
                    },
                    thumb: {
                        alignSelf: "flex-start",
                        borderRadius: "100%",
                        boxShadow: h,
                        start: "0%",
                        transform: [{
                            translateZ: 0
                        }],
                        transitionDuration: "0.1s"
                    },
                    thumbOn: {
                        start: "100%"
                    },
                    disabledThumb: {
                        backgroundColor: "#BDBDBD"
                    },
                    nativeControl: l({}, o.default.absoluteFillObject, {
                        height: "100%",
                        margin: 0,
                        opacity: 0,
                        padding: 0,
                        width: "100%"
                    })
                }),
                b = (0, r.default)(v);
            t.default = b, e.exports = t.default
        },
        uKEd: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return C
            })), n.d(t, "a", (function() {
                return x
            })), n.d(t, "f", (function() {
                return j
            })), n.d(t, "d", (function() {
                return R
            })), n.d(t, "k", (function() {
                return D
            })), n.d(t, "i", (function() {
                return N
            })), n.d(t, "r", (function() {
                return M
            })), n.d(t, "h", (function() {
                return k
            })), n.d(t, "b", (function() {
                return L
            })), n.d(t, "j", (function() {
                return F
            })), n.d(t, "c", (function() {
                return z
            })), n.d(t, "g", (function() {
                return G
            })), n.d(t, "l", (function() {
                return H
            })), n.d(t, "n", (function() {
                return K
            })), n.d(t, "o", (function() {
                return q
            })), n.d(t, "m", (function() {
                return X
            })), n.d(t, "p", (function() {
                return Y
            })), n.d(t, "q", (function() {
                return Q
            }));
            n("p+GS"), n("Yyzt");
            var r = n("8OQS"),
                i = n.n(r),
                a = (n("KI7T"), n("DB+v"), n("AJ0U"), n("RIqP")),
                o = n.n(a),
                s = (n("LnO1"), n("3eMz"), n("dtAy"), n("PN9k"), n("lnti")),
                c = n("t0aI"),
                u = n("4FGy"),
                d = n("aWyx"),
                l = n("J4ZH"),
                f = n("3A2y"),
                p = n("WVrH"),
                h = n("s1N3"),
                m = n("fEA7"),
                v = n.n(m),
                _ = n("AQ79"),
                b = n("oEOe"),
                y = Object(b.a)(_.b, "DELETE_MESSAGE"),
                g = Object(b.a)(_.b, "REACTION_CREATE"),
                E = Object(b.a)(_.b, "REACTION_DELETE"),
                O = Object(b.a)(_.b, "MARK_ENTRIES_AS_SPAM"),
                I = Object(b.a)(_.b, "MARK_ENTRIES_AS_NOT_SPAM"),
                S = {
                    entries: {},
                    entryIdsByConversationId: {},
                    reactionsByMessageId: {}
                };

            function C(e, t) {
                void 0 === e && (e = S);
                var n = t.meta || {},
                    r = n.conversationId,
                    i = n.requestId;
                switch (t.type) {
                    case B:
                        var a, s, c = t.payload.id,
                            h = Object.assign({}, e.entries, ((a = {})[c] = T(e.entries[c], {
                                data: t.payload
                            }), a));
                        return Object.assign({}, e, {
                            entries: h,
                            entryIdsByConversationId: Object.assign({}, e.entryIdsByConversationId, (s = {}, s[r] = A([].concat(o()(e.entryIdsByConversationId[r] || []), [c]), h), s))
                        });
                    case w:
                        var m = Object.values(t.payload).filter((function(e) {
                                return e.type !== d.b.CONVERSATION_READ
                            })).reduce((function(t, n) {
                                var r = n.id,
                                    i = Object(f.a)(n, "message_reactions");
                                return t.allEntries[r] = T(e.entries[r], {
                                    data: i,
                                    isLoading: !1,
                                    isLoaded: !0
                                }), n.message_reactions && (n.message_reactions.forEach((function(r) {
                                    var i = Object.assign({}, r, {
                                        affects_sort: !0,
                                        message_id: n.id,
                                        type: d.b.REACTION_CREATE
                                    });
                                    t.allEntries[i.id] = T(e.entries[i.id], {
                                        data: i,
                                        isLoading: !1,
                                        isLoaded: !0
                                    })
                                })), t.embeddedReactionsByMessageId[r] = A([].concat(o()(e.reactionsByMessageId[r] || []), o()(n.message_reactions.map((function(e) {
                                    return e.id
                                })))), Object.assign({}, e.entries, {}, t.allEntries))), t
                            }), {
                                allEntries: {},
                                embeddedReactionsByMessageId: {}
                            }),
                            v = Object.assign({}, e.entries, {}, m.allEntries),
                            _ = Object(l.a)(Object.values(m.allEntries), (function(e) {
                                return e.data.conversation_id
                            })),
                            b = Object.keys(_).reduce((function(t, n) {
                                var r = _[n].map((function(e) {
                                    return e.data.id
                                }));
                                return t[n] = A([].concat(o()(e.entryIdsByConversationId[n] || []), o()(r)), v), t
                            }), {});
                        return Object.assign({}, e, {
                            entries: v,
                            entryIdsByConversationId: Object.assign({}, e.entryIdsByConversationId, {}, b),
                            reactionsByMessageId: Object.assign({}, e.reactionsByMessageId, {}, m.embeddedReactionsByMessageId)
                        });
                    case O.REQUEST:
                    case I.REQUEST:
                        var g = t.type === O.REQUEST,
                            C = t.payload.reduce((function(t, n) {
                                var r, i = e.entries[n] && e.entries[n].data;
                                return Object.assign({}, t, ((r = {})[n] = Object.assign({}, e.entries[n], {
                                    data: Object.assign({}, i, {
                                        marked_as_spam: g
                                    })
                                }), r))
                            }), {});
                        return Object.assign({}, e, {
                            entries: Object.assign({}, e.entries, {}, C)
                        });
                    case y.REQUEST:
                    case P:
                        var x, j = t.type === P && !Array.isArray(t.payload),
                            R = e.entryIdsByConversationId[r] || [],
                            D = t.type === P ? j ? R : t.payload : [t.payload].concat(o()(e.reactionsByMessageId[t.payload] || []));
                        return Object.assign({}, e, {
                            entries: Object(f.a)(e.entries, D),
                            entryIdsByConversationId: Object.assign({}, Object(f.a)(e.entryIdsByConversationId, r), {}, j ? {} : (x = {}, x[r] = Object(u.a)(R, D), x)),
                            reactionsByMessageId: Object(f.a)(e.reactionsByMessageId, D)
                        });
                    case U:
                        var N, M = t.payload.id || i,
                            k = Object.assign({}, Object(f.a)(e.entries, M)),
                            L = A((e.entryIdsByConversationId[r] || []).filter((function(e) {
                                return e !== M
                            })), k),
                            F = L ? ((N = {})[r] = L, N) : {};
                        return Object.assign({}, e, {
                            entries: k,
                            entryIdsByConversationId: Object.assign({}, Object(f.a)(e.entryIdsByConversationId, r), {}, F),
                            reactionsByMessageId: Object(f.a)(e.reactionsByMessageId, M)
                        });
                    case V:
                        var z, G = t.payload,
                            H = A([].concat(o()(e.reactionsByMessageId[G.message_id] || []), [G.id]), e.entries);
                        return Object.assign({}, e, {
                            reactionsByMessageId: Object.assign({}, e.reactionsByMessageId, (z = {}, z[G.message_id] = H, z))
                        });
                    case E.REQUEST:
                    case W:
                        var K, q, X = t.payload,
                            Y = (e.reactionsByMessageId[X.message_id] || []).find((function(t) {
                                return e.entries[t].data.sender_id === X.sender_id
                            }));
                        if (!Y) return e;
                        var Q = Object(u.a)(e.entryIdsByConversationId[X.conversation_id], Y),
                            Z = Object(u.a)(e.reactionsByMessageId[X.message_id], Y);
                        return Object.assign({}, e, {
                            entries: Object(f.a)(e.entries, Y),
                            entryIdsByConversationId: Object.assign({}, e.entryIdsByConversationId, (K = {}, K[X.conversation_id] = Q, K)),
                            reactionsByMessageId: Object.assign({}, e.reactionsByMessageId, (q = {}, q[X.message_id] = Z, q))
                        });
                    case p.a:
                        return S;
                    default:
                        return e
                }
            }
            var T = function(e, t) {
                    var n = e || {},
                        r = (n.error, n.isLoaded, n.isLoading, i()(n, ["error", "isLoaded", "isLoading"])),
                        a = t || {},
                        o = a.data,
                        s = i()(a, ["data"]);
                    return Object.assign({}, r, {
                        data: Object.assign({}, r && r.data, {}, o)
                    }, s)
                },
                A = function(e, t) {
                    void 0 === e && (e = []);
                    var n = Object(h.a)(e).sort((function(e, n) {
                        var r = Object(c.a)(t[e].data.time, t[n].data.time);
                        return 0 === r ? Object(c.a)(t[e].id, t[n].id) : r
                    }));
                    return n.length ? n : void 0
                },
                w = Object(_.c)("ADD_ENTRIES"),
                x = function(e) {
                    return {
                        payload: e,
                        type: w
                    }
                },
                j = function(e) {
                    return function(t, n, r) {
                        var a = r.api,
                            o = e || {},
                            s = o.id,
                            c = o.conversationId,
                            u = o.requestId,
                            d = void 0 === u ? v.a.v1() : u,
                            l = i()(o, ["id", "conversationId", "requestId"]),
                            f = Object.assign({}, l, {
                                id: s,
                                request_id: d
                            });
                        return Object(b.c)(t, {
                            params: f,
                            request: a.DirectMessages.deleteMessage
                        })({
                            actionTypes: y,
                            context: "ACTION_DELETE_DM",
                            payload: s,
                            meta: {
                                conversationId: c
                            }
                        })
                    }
                },
                R = function(e) {
                    return function(t, n, r) {
                        var i, a, o, s, c, u = r.api,
                            l = (a = (i = e).reaction_key, o = i.conversation_id, s = i.dm_id, c = i.perspective, {
                                id: v.a.v1(),
                                time: (new Date).getTime().toString(),
                                reaction_key: a,
                                conversation_id: o,
                                message_id: s,
                                sender_id: c,
                                type: d.b.REACTION_CREATE
                            });
                        t([L(l.conversation_id, l.id, l), G(l), z(l)]);
                        return Object(b.b)(t, {
                            params: Object(f.a)(e, "perspective"),
                            request: u.DirectMessages.addReaction
                        })({
                            actionTypes: g,
                            context: "ACTION_REACTION_CREATE"
                        }, (function(e, t) {
                            if (t) return [G(l)]
                        }))
                    }
                },
                D = function(e) {
                    return function(t, n, r) {
                        var a = r.api,
                            o = e.perspective,
                            s = i()(e, ["perspective"]);
                        return Object(b.c)(t, {
                            params: s,
                            request: a.DirectMessages.deleteReaction
                        })({
                            actionTypes: E,
                            context: "ACTION_REACTION_DELETE",
                            payload: {
                                conversation_id: e.conversation_id,
                                message_id: e.dm_id,
                                sender_id: o
                            }
                        })
                    }
                },
                P = "rweb/dm/REMOVE_CONVERSATION_ENTRIES",
                N = function(e, t) {
                    return {
                        meta: {
                            conversationId: e
                        },
                        payload: t,
                        type: P
                    }
                },
                M = function(e, t) {
                    return {
                        payload: e,
                        type: t ? O.REQUEST : I.REQUEST
                    }
                },
                k = function(e) {
                    var t = e.conversationId,
                        n = e.dmId,
                        r = e.markSpam;
                    return function(e, i, a) {
                        var o = a.api;
                        return Object(b.c)(e, {
                            params: {
                                dm_id: n,
                                report_as: r ? "spam" : "not_spam"
                            },
                            request: o.DirectMessages.reportSpam
                        })({
                            actionTypes: r ? y : I,
                            payload: r ? n : [n],
                            meta: {
                                conversationId: t
                            }
                        })
                    }
                },
                B = Object(_.c)("ADD_ENTRY"),
                L = function(e, t, n) {
                    return {
                        meta: {
                            conversationId: e,
                            requestId: t
                        },
                        payload: n,
                        type: B
                    }
                },
                U = Object(_.c)("REMOVE_ENTRY"),
                F = function(e, t, n) {
                    return {
                        meta: {
                            conversationId: e,
                            requestId: t
                        },
                        payload: n,
                        type: U
                    }
                },
                V = Object(_.c)("ADD_REACTION"),
                z = function(e) {
                    return {
                        payload: e,
                        type: V
                    }
                },
                W = Object(_.c)("DELETE_REACTION"),
                G = function(e) {
                    return {
                        payload: e,
                        type: W
                    }
                },
                H = function(e) {
                    return e[_.a].entries
                },
                K = function(e, t) {
                    var n = H(e).entries[t];
                    return n && n.data
                },
                q = function(e, t) {
                    return e[_.a].entries.entryIdsByConversationId[t]
                },
                X = function(e, t) {
                    var n = q(e, t);
                    return n ? Object(s.a)(n.map((function(t) {
                        return K(e, t)
                    }))) : []
                },
                Y = function(e, t) {
                    return H(e).reactionsByMessageId[t]
                },
                Q = function(e, t) {
                    return (Y(e, t) || []).map((function(t) {
                        return K(e, t).sender_id
                    }))
                }
        },
        uavX: function(e, t, n) {
            "use strict";
            var r = n("1Pcy"),
                i = n.n(r),
                a = n("W/Kd"),
                o = n.n(a),
                s = n("KEM+"),
                c = n.n(s),
                u = n("ERkP"),
                d = n("/yvb"),
                l = n("ZToW"),
                f = n("3XMw"),
                p = n.n(f),
                h = n("17Sk"),
                m = n.n(h),
                v = n("rYvg"),
                _ = n.n(v),
                b = n("py1r"),
                y = n("YRQv"),
                g = n("fs1G"),
                E = n("rHpw"),
                O = (n("PN9k"), n("decI"), n("38/B")),
                I = n("CHgo"),
                S = n("tI3i"),
                C = n.n(S),
                T = n("7nmT"),
                A = n.n(T),
                w = n("/uF9"),
                x = n.n(w),
                j = n("3xO4"),
                R = n.n(j),
                D = n("/NU0"),
                P = n("Enqy"),
                N = .6,
                M = 10,
                k = 37,
                B = 39,
                L = {
                    stiffness: 267,
                    damping: 20
                },
                U = 1,
                F = function(e) {
                    function t(t, n) {
                        var r;
                        r = e.call(this, t, n) || this, c()(i()(r), "_handleResize", (function() {
                            window.requestAnimationFrame((function() {
                                return window.requestAnimationFrame((function() {
                                    return r._setDimensions(!0)
                                }))
                            }))
                        })), c()(i()(r), "_handleLayout", (function() {
                            r._setDimensions(!0)
                        })), c()(i()(r), "_handleKeyPress", (function(e) {
                            r.props.locked || (e.keyCode === B ? r._handleKeyRight(e) : e.keyCode === k && r._handleKeyLeft(e))
                        })), c()(i()(r), "_handleKeyRight", (function(e) {
                            e && e.stopPropagation(), r._goToItem(r.state.currentItem + (x.a.isRTL ? -1 : 1))
                        })), c()(i()(r), "_handleKeyLeft", (function(e) {
                            e && e.stopPropagation(), r._goToItem(r.state.currentItem - (x.a.isRTL ? -1 : 1))
                        })), c()(i()(r), "_handleTouchStart", (function(e) {
                            if (!(e.touches && e.touches.length > 1)) {
                                var t = e.changedTouches[0].clientX;
                                r._handleSwipeStart(e, t)
                            }
                        })), c()(i()(r), "_handleTouchMove", (function(e) {
                            if (!(e.touches && e.touches.length > 1)) {
                                var t = e.changedTouches[0].clientX;
                                r._handleSwipeMove(e, t)
                            }
                        })), c()(i()(r), "_handleTouchEnd", (function(e) {
                            var t = e.changedTouches[0].clientX;
                            r._handleSwipeEnd(e, t)
                        })), c()(i()(r), "_handleSwipeStart", (function(e, t) {
                            r.props.locked || (e.preventDefault(), r._xPos = t, r._swipeStart = Date.now(), r._isSwiping = !1)
                        })), c()(i()(r), "_handleSwipeMove", (function(e, t) {
                            if (!r.props.locked && null != r._xPos) {
                                var n = r._xPos - t;
                                Math.abs(n) < M || (e.preventDefault(), r.setState((function(e) {
                                    if ("number" == typeof e.itemWidth) return {
                                        disableAnimation: !1,
                                        transformLeft: (x.a.isRTL ? 1 : -1) * e.itemWidth * e.currentItem - n
                                    }
                                })), r._isSwiping = !0)
                            }
                        })), c()(i()(r), "_handleSwipeEnd", (function(e, t) {
                            var n = r.state,
                                i = n.currentItem,
                                a = n.itemWidth;
                            if (!r._isSwiping || "number" != typeof r._xPos || "number" != typeof a || "number" != typeof r._swipeStart) return r._isSwiping = !1, void(r._xPos = null);
                            e.preventDefault();
                            var o = (r._xPos || 0) - t,
                                s = Math.abs(o),
                                c = s / (Date.now() - (r._swipeStart || 0));
                            s > a / 3 || c > N ? r._goToItem(i + (x.a.isRTL ? -1 : 1) * Math.sign(o)) : r._goToItem(i), r._isSwiping = !1, r._xPos = null
                        })), c()(i()(r), "_transitionComplete", (function() {
                            var e = r.props.onChange,
                                t = r.state;
                            e(t.currentItem, t.direction)
                        })), c()(i()(r), "_setDimensions", (function(e) {
                            void 0 === e && (e = !1);
                            var t = r.props,
                                n = t.itemWidth,
                                i = t.itemsToShow,
                                a = !n && i ? r._getFrameOffsetWidth() / i : n,
                                o = n ? r._getFrameOffsetWidth() / n : i || U;
                            "number" == typeof a && r.setState({
                                itemWidth: a,
                                itemsToShow: o
                            }, (function() {
                                r.setState((function(t) {
                                    return {
                                        areDimensionsSet: !0,
                                        disableAnimation: e,
                                        transformLeft: r._getLeftForItem(t.currentItem, a)
                                    }
                                }))
                            }))
                        })), c()(i()(r), "_setSwipeableNode", (function(e) {
                            r._swipeableNode = A.a.findDOMNode(e)
                        }));
                        var a = r.props,
                            o = a.itemsToShow,
                            s = a.itemWidth;
                        return r._checkComponentPropsUsageCorrectness(o, s), r.state = Object.assign({
                            disableAnimation: !1,
                            areDimensionsSet: !1,
                            currentItem: t.currentItem,
                            transformLeft: 0
                        }, s ? {
                            itemsToShow: 0,
                            itemWidth: s
                        } : {
                            itemWidth: 0,
                            itemsToShow: o || U
                        }), r._springOptions = Object(y.a)() ? L : P.presets.noWobble, r._isSwiping = !1, r._xPos = null, r
                    }
                    o()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this._setDimensions(), window.addEventListener("resize", this._handleResize), window.document.addEventListener("keydown", this._handleKeyPress), this._swipeableNode && (this._removeTouchListener = Object(I.a)(this._swipeableNode, this._handleTouchMove, !1))
                    }, n.componentWillUnmount = function() {
                        window.removeEventListener("resize", this._handleResize), window.document.removeEventListener("keydown", this._handleKeyPress), this._removeTouchListener && this._removeTouchListener()
                    }, n.UNSAFE_componentWillReceiveProps = function(e) {
                        e.currentItem !== this.props.currentItem && e.currentItem !== this.state.currentItem && this._goToItem(e.currentItem, !0)
                    }, n.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.itemsToShow,
                            r = t.itemWidth;
                        this._checkComponentPropsUsageCorrectness(n, r)
                    }, n.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.cellSpacing,
                            r = e.onRest,
                            i = e.style,
                            a = u.Children.count(t),
                            o = n * a,
                            s = this.state,
                            c = s.transformLeft,
                            d = s.itemWidth,
                            l = s.disableAnimation,
                            f = {
                                transformLeft: O.a.reducedMotionEnabled && !this._isSwiping || l ? c : Object(P.spring)(c, this._springOptions)
                            },
                            p = this._renderItems(t);
                        return u.createElement(R.a, {
                            onLayout: this._handleLayout,
                            onTouchEnd: this._handleTouchEnd,
                            onTouchStart: this._handleTouchStart,
                            ref: this._setSwipeableNode,
                            style: [V.root, i]
                        }, this.state.areDimensionsSet ? u.createElement(P.Motion, {
                            onRest: r,
                            style: f
                        }, (function(e) {
                            var t = e.transformLeft;
                            return u.createElement(R.a, {
                                accessibilityRole: "list",
                                style: [V.list, {
                                    marginLeft: -.5 * n,
                                    marginRight: -.5 * n,
                                    transform: [{
                                        translate3d: t + "px, 0, 0"
                                    }],
                                    width: d && a ? d * a + o + "px" : "100%"
                                }]
                            }, p)
                        })) : null)
                    }, n._renderItems = function(e) {
                        var t = this.props.cellSpacing,
                            n = this.state,
                            r = n.currentItem,
                            i = n.itemWidth,
                            a = n.itemsToShow,
                            o = r + 2 * Math.ceil(a);
                        return u.Children.toArray(u.Children.map(e, (function(e, n) {
                            return u.createElement(R.a, {
                                accessibilityRole: "listitem",
                                style: [V.item, {
                                    width: i ? i + "px" : "100%",
                                    marginLeft: t / 2 + "px",
                                    marginRight: t / 2 + "px"
                                }]
                            }, n <= r || n < o ? e : null)
                        })))
                    }, n._goToItem = function(e, t) {
                        var n = this.state,
                            r = n.currentItem,
                            i = n.itemWidth,
                            a = this.props.children,
                            o = e,
                            s = o > r ? "next" : "prev";
                        (e < 0 || e >= u.Children.count(a)) && (o = r), "number" == typeof i && this.setState({
                            disableAnimation: !1,
                            currentItem: o,
                            transformLeft: this._getLeftForItem(o, i),
                            direction: s
                        }, r === o || t ? g.a : this._transitionComplete)
                    }, n._getLeftForItem = function(e, t) {
                        return (t * e + this.props.cellSpacing * e) * (x.a.isRTL ? 1 : -1)
                    }, n._getFrameOffsetWidth = function() {
                        var e = this._swipeableNode;
                        return e && e instanceof window.HTMLElement ? e.offsetWidth : 0
                    }, n._checkComponentPropsUsageCorrectness = function(e, t) {
                        var n = !e && Object(D.a)(t),
                            r = !t && Object(D.a)(e),
                            i = !t && !e;
                        C()(n || r || i, "Requires itemsToShow OR itemWidth, both cannot be set")
                    }, n.getItemsToShow = function() {
                        return this.state.itemsToShow
                    }, n.goToNextItem = function() {
                        this._goToItem(this.state.currentItem + Math.max(Math.floor(this.state.itemsToShow), 1))
                    }, n.goToPreviousItem = function() {
                        var e = this.state.currentItem - Math.max(Math.floor(this.state.itemsToShow), 1);
                        this._goToItem(e >= 0 ? e : 0)
                    }, t
                }(u.PureComponent);
            c()(F, "defaultProps", {
                cellSpacing: 0,
                currentItem: 0,
                locked: !1,
                onChange: g.a
            });
            var V = E.a.create((function(e) {
                return {
                    root: {
                        flexGrow: 1,
                        transform: [{
                            translate3d: "0,0,0"
                        }]
                    },
                    list: {
                        height: "100%",
                        padding: "0",
                        position: "absolute",
                        transform: [{
                            translate3d: "0,0,0"
                        }],
                        display: "flex",
                        flexDirection: "row"
                    },
                    item: {
                        boxSizing: "border-box",
                        display: "inline-flex",
                        flexDirection: "column",
                        height: "100%",
                        marginVertical: "auto"
                    }
                }
            }));
            n("aWzz");
            n.d(t, "a", (function() {
                return K
            }));
            var z = p.a.e6580b36,
                W = p.a.g4c9627f,
                G = {
                    left: 10,
                    right: 10,
                    top: 9999,
                    bottom: 9999
                },
                H = {
                    top: 50,
                    bottom: 50,
                    left: 10,
                    right: 10
                },
                K = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_nextButtonRef", u.createRef()), c()(i()(t), "_prevButtonRef", u.createRef()), c()(i()(t), "_swipeableRef", u.createRef()), c()(i()(t), "_handleChange", (function(e, n) {
                            (0, t.props.onChange)(e), t._handleFocus(e, n)
                        })), c()(i()(t), "_getNavButtonHitSlop", (function() {
                            return t.props.withReducedNavButtonClickArea ? H : G
                        })), c()(i()(t), "_handleNextSlide", (function(e) {
                            e.stopPropagation(), t._swipeableRef.current && t._swipeableRef.current.goToNextItem()
                        })), c()(i()(t), "_handlePreviousSlide", (function(e) {
                            e.stopPropagation(), t._swipeableRef.current && t._swipeableRef.current.goToPreviousItem()
                        })), t
                    }
                    o()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            r = t.childContainerStyle,
                            i = t.cellSpacing,
                            a = t.currentSlide,
                            o = t.locked,
                            s = t.childWidth,
                            c = t.slidesToShow,
                            d = t.onRest;
                        return u.createElement(b.a, null, (function(t) {
                            var f = t.isHovered;
                            return u.createElement(R.a, {
                                style: q.root
                            }, u.createElement(F, {
                                cellSpacing: i,
                                children: n,
                                currentItem: a,
                                itemWidth: c ? void 0 : s,
                                itemsToShow: s ? void 0 : c || 1,
                                locked: o,
                                onChange: e._handleChange,
                                onRest: d,
                                ref: e._swipeableRef,
                                style: r
                            }), !Object(y.a)() || l.a.isEnabled ? e._renderNavButtons(f) : null)
                        }))
                    }, n._handleFocus = function(e, t) {
                        var n = 0 === e,
                            r = e === u.Children.count(this.props.children) - 1;
                        "next" === t && !r && this._nextButtonRef && this._nextButtonRef.current && this._nextButtonRef.current.focus(), "prev" === t && !n && this._prevButtonRef && this._prevButtonRef.current && this._prevButtonRef.current.focus(), n && this._prevButtonRef && this._prevButtonRef.current && this._prevButtonRef.current.blur(), r && this._nextButtonRef && this._nextButtonRef.current && this._nextButtonRef.current.blur()
                    }, n._renderNavButtons = function(e) {
                        var t = this.props,
                            n = t.dominantColor,
                            r = t.showNavButtonsOnHover,
                            i = t.currentSlide,
                            a = u.Children.count(this.props.children),
                            o = a <= this._getSlidesToShow() && 0 === i,
                            s = 0 === i,
                            c = i + this._getSlidesToShow() >= a;
                        return o ? null : u.createElement(R.a, {
                            pointerEvents: "box-none",
                            style: [q.navButtons, s && q.navButtonsRight, c && q.navButtonsLeft, r && !e && q.navButtonsHidden]
                        }, s ? null : u.createElement(d.a, {
                            accessibilityLabel: W,
                            dominantColor: n,
                            hitSlop: this._getNavButtonHitSlop(),
                            icon: u.createElement(m.a, null),
                            onClick: this._handlePreviousSlide,
                            ref: this._prevButtonRef,
                            style: q.navButton,
                            type: "onMedia"
                        }), c ? null : u.createElement(d.a, {
                            accessibilityLabel: z,
                            dominantColor: n,
                            hitSlop: this._getNavButtonHitSlop(),
                            icon: u.createElement(_.a, null),
                            onClick: this._handleNextSlide,
                            ref: this._nextButtonRef,
                            style: q.navButton,
                            type: "onMedia"
                        }))
                    }, n._getSlidesToShow = function() {
                        return this.props.slidesToShow || this._swipeableRef.current && this._swipeableRef.current.getItemsToShow() || 1
                    }, t
                }(u.Component);
            c()(K, "defaultProps", {
                cellSpacing: 0,
                currentSlide: 0,
                locked: !1,
                onChange: g.a,
                withReducedNavButtonClickArea: !1
            }), K.propTypes = {};
            var q = E.a.create((function(e) {
                return {
                    root: {
                        flex: 1
                    },
                    navButtons: {
                        height: "100%",
                        position: "absolute",
                        transitionProperty: "opacity",
                        transitionDuration: "0.2s",
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    navButtonsRight: {
                        justifyContent: "flex-end"
                    },
                    navButtonsLeft: {
                        justifyContent: "flex-start"
                    },
                    navButton: {
                        margin: e.spaces.xSmall
                    },
                    navButtonsHidden: {
                        opacity: 0
                    }
                }
            }))
        },
        ude7: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            n("yKDW"), n("dtAy");
            var r = n("A0bJ"),
                i = n("hJBK"),
                a = n("1auM"),
                o = 1,
                s = 2,
                c = 3,
                u = function(e) {
                    if (Object(a.b)(e)) {
                        if (e.isGif) {
                            var t = e.img,
                                n = e.width,
                                u = e.height,
                                d = e.orientation;
                            return Object(i.b)(t, n, u, d).then((function(e) {
                                return Object(i.a)(e)
                            }), (function(e) {
                                throw new r.a("Gif preview could not be generated", c)
                            }))
                        }
                        var l = new r.a("The provided image must be a gif", s);
                        return Promise.reject(l)
                    }
                    var f = new r.a("The provided file is not a valid image", o);
                    return Promise.reject(f)
                }
        },
        ur9R: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = o(n("7DT3")),
                i = o(n("ERkP")),
                a = o(n("OkZJ"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [a.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), i.default.createElement("g", null, i.default.createElement("path", {
                    d: "M21.592 5.576c.877-.967.882-2.298.006-3.174-.877-.877-2.208-.87-3.174.006 0 0-.003 0-.004.002l-.006.006-.005.004s-.002 0-.002.002L8.398 11.27c-1.716-.214-3.424.31-4.534 1.42-3.872 3.874-1.523 9.616-1.422 9.858.1.24.32.41.577.45.037.007.075.01.113.01.218 0 .428-.095.57-.265 1.83-2.15 3.043-2.023 4.328-1.89 1.164.122 2.477.258 3.834-1.282.975-1.106 1.302-2.585.922-4.03l8.792-9.948h.002l.004-.006.006-.006.002-.004zm-1.055-2.113c.305.305.28.74-.06 1.11-.003.003-.004.007-.006.01 0 0-.003 0-.004.003l-5.662 6.406-1.796-1.796 6.406-5.662c.002 0 .002-.003.004-.005.002-.003.006-.004.008-.006.37-.34.807-.365 1.11-.06zm-8.62 10.797L9.74 12.084l2.142-1.894 1.927 1.927-1.894 2.143zm-1.178 4.32c-.848.96-1.488.895-2.552.78-1.27-.13-2.808-.293-4.722 1.463-.415-1.673-.784-4.83 1.457-7.072.807-.805 2.086-1.168 3.377-.983l2.977 2.976c.333 1.03.15 2.057-.538 2.836z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var c = s;
            t.default = c
        },
        w3n3: function(e, t, n) {
            "use strict";
            var r = n("PJYZ"),
                i = n.n(r),
                a = n("VbXa"),
                o = n.n(a),
                s = n("lSNA"),
                c = n.n(s),
                u = n("ERkP"),
                d = n("/yvb"),
                l = (n("MLl7"), n("3XMw")),
                f = n.n(l),
                p = n("9In0"),
                h = n.n(p),
                m = n("Irs7"),
                v = f.a.a1e0145e,
                _ = u.createElement(h.a, null),
                b = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_handleGifSearchButtonPress", (function() {
                            var e = t.props,
                                n = e.analytics,
                                r = e.dmConversationId,
                                i = e.gifSearchKeySource,
                                a = e.history,
                                o = e.onPress;
                            o && o(), n.scribe({
                                element: "found_media_button",
                                action: "click"
                            }), a.push({
                                pathname: "/i/foundmedia/search",
                                state: {
                                    gifSearchKeySource: i,
                                    dmConversationId: r
                                }
                            })
                        })), t
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.style,
                            n = e.enabled;
                        return u.createElement(d.a, {
                            accessibilityLabel: v,
                            disabled: !n,
                            icon: _,
                            onPress: this._handleGifSearchButtonPress,
                            size: "normal",
                            style: [t],
                            type: "text"
                        })
                    }, t
                }(u.PureComponent);
            c()(b, "defaultProps", {
                enabled: !0
            }), t.a = Object(m.a)(b)
        },
        wpu3: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            })), n.d(t, "b", (function() {
                return f
            })), n.d(t, "c", (function() {
                return p
            }));
            var r = n("RIqP"),
                i = n.n(r),
                a = (n("yIC7"), n("SMZj")),
                o = n("lnti"),
                s = n("1auM"),
                c = n("Olyj"),
                u = (n("S1qy"), n("s1N3")),
                d = function(e) {
                    var t, n = e.inReplyToStatus,
                        r = e.loggedInUserId,
                        a = e.excludeReplyUser,
                        s = n.retweeted_status,
                        d = (s || n).entities,
                        f = (n.retweeted_status || n).user,
                        p = s ? s.user : {},
                        h = s ? n.user : {},
                        m = d.user_mentions || [],
                        v = Object(c.a)(d.media || []),
                        _ = l(s || n) || {},
                        b = ((t = {})[p.id_str] = p, t[h.id_str] = h, t[f.id_str] = f, t[_.id_str] = _, t);
                    m.forEach((function(e) {
                        b[e.id_str] = e
                    })), v.forEach((function(e) {
                        var t = e.user_id,
                            n = e.name,
                            r = e.screen_name;
                        b[t] = {
                            id_str: t,
                            name: n,
                            screen_name: r
                        }
                    }));
                    var y = Object(u.a)(Object(o.a)([p.id_str, h.id_str, f.id_str].concat(i()(m.map((function(e) {
                            return e.id_str
                        }))), i()(v.map((function(e) {
                            return e.user_id
                        })))))).filter((function(e) {
                            return e !== r
                        })),
                        g = r && f.id_str === r ? [r].concat(i()(y)) : y;
                    return a && (g = g.filter((function(e) {
                        return e !== f.id_str
                    }))), g.map((function(e) {
                        return b[e]
                    }))
                },
                l = function(e) {
                    var t = e.card,
                        n = null;
                    if (t) {
                        var r = a.f(t.binding_values, "site");
                        r && t.users && (n = t.users[r.id_str])
                    }
                    return n
                },
                f = function(e) {
                    var t = e.maxNumberOfPhotos;
                    return function(e) {
                        if (0 === e.length) return !0;
                        var n = e.some((function(e) {
                                return !!e.externalMediaDetails
                            })),
                            r = !n && e.some((function(e) {
                                return e.mediaFile && e.mediaFile.isGif
                            })),
                            i = e.some((function(e) {
                                return e.mediaFile && !(e.mediaFile instanceof s.a) && e.mediaFile.isVideo
                            }));
                        if (r || n || i) return 1 === e.length;
                        var a = e.length <= t,
                            o = e.every((function(e) {
                                return e.mediaFile && e.mediaFile.isImage
                            }));
                        return a && o
                    }
                },
                p = f({
                    maxNumberOfPhotos: 4
                })
        },
        xCUF: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return v
            })), n.d(t, "a", (function() {
                return b
            })), n.d(t, "b", (function() {
                return y
            })), n.d(t, "d", (function() {
                return g
            })), n.d(t, "f", (function() {
                return O
            })), n.d(t, "e", (function() {
                return T
            }));
            n("Yyzt"), n("yKDW"), n("AJ0U");
            var r = n("RIqP"),
                i = n.n(r),
                a = (n("LnO1"), n("3eMz"), n("dtAy"), n("8OQS")),
                o = n.n(a),
                s = (n("PN9k"), n("oEOe")),
                c = n("xPna"),
                u = n("aWyx"),
                d = n("k6jb"),
                l = n("P1r1"),
                f = n("AQ79"),
                p = n("uKEd"),
                h = n("lRnM"),
                m = n("WVrH"),
                v = s.a(f.b, "FETCH_UPDATES"),
                _ = {
                    isLoaded: !1,
                    isLoading: !1
                };

            function b(e, t) {
                switch (void 0 === e && (e = _), t.type) {
                    case v.REQUEST:
                        return Object.assign({}, e, {
                            isLoading: !0
                        });
                    case v.FAILURE:
                        return Object.assign({}, e, {
                            error: t.payload,
                            isLoaded: !1,
                            isLoading: !1
                        });
                    case v.SUCCESS:
                        var n = e,
                            r = (n.error, o()(n, ["error"]));
                        return Object.assign({}, r, {
                            isLoaded: !0,
                            isLoading: !1
                        });
                    case E:
                        return Object.assign({}, e, {
                            cursor: t.payload
                        });
                    case I:
                        return Object.assign({}, e, {
                            tertiaryInboxStatus: t.payload
                        });
                    case m.a:
                        return _;
                    default:
                        return e
                }
            }
            var y = function(e) {
                    return function(t, n, r) {
                        var a = r.api,
                            u = n().directMessages,
                            f = void 0 === u ? {} : u,
                            p = (f.updates || {}).cursor,
                            h = e || {},
                            _ = h.polling,
                            b = o()(h, ["polling"]),
                            y = (f.updates || {}).tertiaryInboxStatus,
                            g = !1,
                            E = _ ? {
                                "x-twitter-polling": "true"
                            } : {},
                            O = Object(l.p)(n()) ? "on" : "off";
                        y ? y !== O && (p = null, g = !0) : g = !0;
                        var I = Object(c.i)(Object.assign({}, b, {
                            cursor: p
                        }), n());
                        return s.b(t, {
                            params: I,
                            headers: E,
                            request: a.DirectMessages.fetchUserUpdates
                        })({
                            actionTypes: v,
                            context: "FETCH_DM_USER_UPDATES",
                            meta: {
                                direction: Object(d.c)(e)
                            }
                        }, (function(e) {
                            if (e) {
                                var t = e.entities,
                                    n = t.entries,
                                    r = t.tweets,
                                    a = t.users,
                                    o = t.cards,
                                    s = e.result,
                                    u = s.user_events,
                                    d = s.inbox_initial_state;
                                return [d && Object(m.b)()].concat(i()(Object(c.b)(Object.assign({}, u || d, {
                                    entries: n,
                                    users: a,
                                    tweets: r,
                                    cards: o
                                }))), i()(u ? C(Object.values(n || [])) : []), [g && S(O)])
                            }
                        }))
                    }
                },
                g = function(e) {
                    return function(t, n) {
                        return A(n()) ? Promise.resolve() : t(y(e))
                    }
                },
                E = Object(f.c)("UPDATE_CURSOR"),
                O = function(e) {
                    return {
                        payload: e,
                        type: E
                    }
                },
                I = Object(f.c)("UPDATE_TERTIARY_INBOX_STATUS"),
                S = function(e) {
                    return {
                        payload: e,
                        type: I
                    }
                },
                C = function(e) {
                    return void 0 === e && (e = []), e.sort((function(e, t) {
                        return e.id - t.id
                    })).reduce((function(e, t) {
                        switch (t.type) {
                            case u.b.CONVERSATION_AVATAR_UPDATE:
                                return [].concat(i()(e), [Object(h.E)(t.conversation_id, t.conversation_avatar_image_https), Object(h.F)(t.conversation_id, t.id)]).filter((function(e) {
                                    return e
                                }));
                            case u.b.CONVERSATION_NAME_UPDATE:
                                return [].concat(i()(e), [Object(h.H)(t), Object(h.F)(t.conversation_id, t.id)]).filter((function(e) {
                                    return e
                                }));
                            case u.b.CONVERSATION_READ:
                                return [].concat(i()(e), [Object(h.q)(t.conversation_id, t.last_read_event_id)]);
                            case u.b.DISABLE_NOTIFICATIONS:
                            case u.b.ENABLE_NOTIFICATIONS:
                                var n = t.type === u.b.ENABLE_NOTIFICATIONS;
                                return [].concat(i()(e), [Object(h.D)(t.conversation_id, n)]);
                            case u.b.MARK_ALL_AS_READ:
                                return [].concat(i()(e), [Object(h.p)(t.last_read_event_id)]);
                            case u.b.MESSAGE_DELETE:
                                return [].concat(i()(e), [Object(p.i)(t.conversation_id, t.messages.reduce((function(e, t) {
                                    return [].concat(i()(e), i()(Object.values(t)))
                                }), []))]);
                            case u.b.MESSAGE_MARK_AS_NOT_SPAM:
                            case u.b.MESSAGE_MARK_AS_SPAM:
                                var r = t.type === u.b.MESSAGE_MARK_AS_SPAM;
                                return [].concat(i()(e), [Object(p.r)(t.messages.reduce((function(e, t) {
                                    return [].concat(i()(e), i()(Object.values(t)))
                                }), []), r)]);
                            case u.b.REMOVE_CONVERSATION:
                                return [].concat(i()(e), i()(Object(h.s)(t.conversation_id)));
                            case u.b.JOIN_CONVERSATION:
                            case u.b.PARTICIPANTS_JOIN:
                            case u.b.PARTICIPANTS_LEAVE:
                                return [].concat(i()(e), [Object(h.F)(t.conversation_id, t.id)]);
                            case u.b.REACTION_CREATE:
                                return [].concat(i()(e), [Object(p.g)(t), Object(p.c)(t), Object(h.F)(t.conversation_id, t.id)]);
                            case u.b.REACTION_DELETE:
                                return [].concat(i()(e), [Object(p.g)(t)]);
                            case u.b.MESSAGE:
                                return [].concat(i()(e), [Object(h.F)(t.conversation_id, t.id)]).filter((function(e) {
                                    return e
                                }));
                            default:
                                return e
                        }
                    }), [])
                },
                T = function(e) {
                    return e[f.a].updates
                },
                A = function(e) {
                    return T(e).isLoading
                }
        },
        xPna: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return S
            })), n.d(t, "c", (function() {
                return T
            })), n.d(t, "i", (function() {
                return x
            })), n.d(t, "m", (function() {
                return j
            })), n.d(t, "p", (function() {
                return P
            })), n.d(t, "k", (function() {
                return N
            })), n.d(t, "s", (function() {
                return M
            })), n.d(t, "u", (function() {
                return k
            })), n.d(t, "l", (function() {
                return B
            })), n.d(t, "o", (function() {
                return L
            })), n.d(t, "n", (function() {
                return U
            })), n.d(t, "q", (function() {
                return F
            })), n.d(t, "v", (function() {
                return V
            })), n.d(t, "r", (function() {
                return z
            })), n.d(t, "t", (function() {
                return W
            })), n.d(t, "d", (function() {
                return H
            })), n.d(t, "e", (function() {
                return K
            })), n.d(t, "g", (function() {
                return X
            })), n.d(t, "h", (function() {
                return Y
            })), n.d(t, "f", (function() {
                return Q
            })), n.d(t, "b", (function() {
                return $
            })), n.d(t, "y", (function() {
                return ee
            })), n.d(t, "z", (function() {
                return te
            })), n.d(t, "x", (function() {
                return ne
            })), n.d(t, "j", (function() {
                return ie
            })), n.d(t, "w", (function() {
                return oe
            }));
            var r, i = n("8OQS"),
                a = n.n(i),
                o = (n("yKDW"), n("LnO1"), n("3eMz"), n("dtAy"), n("AJ0U"), n("PN9k"), n("KYm4"), n("oEOe")),
                s = n("/kEJ"),
                c = n("uKEd"),
                u = n("kGix"),
                d = n("YeIG"),
                l = n("aWyx"),
                f = n("WVrH"),
                p = n("xCUF"),
                h = n("AQ79"),
                m = n("lRnM"),
                v = n("t0aI"),
                _ = n("P1r1"),
                b = o.a(h.b, "FETCH_INBOX"),
                y = o.a(h.b, "UPDATE_LAST_SEEN_EVENT_ID"),
                g = "inbox",
                E = "trusted",
                O = "untrusted",
                I = "untrusted_low_quality",
                S = Object.freeze({
                    CLOSED: "closed",
                    COLLAPSED: "collapsed",
                    EXPANDED: "expanded"
                }),
                C = {
                    cursors: (r = {}, r[g] = {
                        fetchStatus: u.a.NONE
                    }, r[E] = {
                        fetchStatus: u.a.NONE
                    }, r[O] = {
                        fetchStatus: u.a.NONE
                    }, r[I] = {
                        fetchStatus: u.a.NONE
                    }, r),
                    lastSeenEventIds: {},
                    poppedOutConversationId: null,
                    drawerVisibility: S.EXPANDED
                };

            function T(e, t) {
                switch (void 0 === e && (e = C), t.type) {
                    case b.REQUEST:
                        var n, r = t.meta.timelineType;
                        return Object.assign({}, e, {
                            cursors: Object.assign({}, e.cursors, (n = {}, n[r] = Object.assign({}, e.cursors[r], {
                                fetchStatus: u.a.LOADING
                            }), n))
                        });
                    case b.FAILURE:
                        var i, a = t.meta.timelineType;
                        return Object.assign({}, e, {
                            cursors: Object.assign({}, e.cursors, (i = {}, i[a] = Object.assign({}, e.cursors[a], {
                                error: t.payload,
                                fetchStatus: u.a.FAILED
                            }), i))
                        });
                    case b.SUCCESS:
                        var o, s = t.meta.timelineType;
                        return Object.assign({}, e, {
                            cursors: Object.assign({}, e.cursors, (o = {}, o[s] = Object.assign({}, e.cursors[s], {
                                error: void 0,
                                fetchStatus: u.a.LOADED
                            }), o))
                        });
                    case Z:
                        return Object.assign({}, e, {
                            cursors: Object.assign({}, e.cursors, {}, t.payload.cursors),
                            lastSeenEventIds: A(e.lastSeenEventIds, t.payload.lastSeenEventIds)
                        });
                    case y.REQUEST:
                        return Object.assign({}, e, {
                            lastSeenEventIds: Object.assign({}, e.lastSeenEventIds, {}, t.meta.lastSeenEventIds)
                        });
                    case f.a:
                        return Object.assign({}, C, {
                            cursors: Object.assign({}, C.cursors, {
                                inbox: e.cursors.inbox
                            })
                        });
                    case re:
                        return Object.assign({}, e, {
                            poppedOutConversationId: t.conversationId,
                            drawerVisibility: S.EXPANDED
                        });
                    case ae:
                        return Object.assign({}, e, {
                            drawerVisibility: t.visibility
                        });
                    default:
                        return e
                }
            }
            var A = function(e, t) {
                    return {
                        last_seen_event_id: w(e.last_seen_event_id, t.last_seen_event_id),
                        trusted_last_seen_event_id: w(e.trusted_last_seen_event_id, t.trusted_last_seen_event_id),
                        untrusted_last_seen_event_id: w(e.untrusted_last_seen_event_id, t.untrusted_last_seen_event_id)
                    }
                },
                w = function(e, t) {
                    return Object(v.c)(e, t) ? e : t
                },
                x = function(e, t, n) {
                    void 0 === n && (n = "all");
                    var r = Object(_.o)(t);
                    return Object(_.p)(t) ? Object.assign({}, e, {
                        filter_low_quality: r,
                        include_quality: n
                    }) : Object.assign({}, e, {
                        filter_low_quality: r
                    })
                },
                j = function(e) {
                    return e[h.a].inbox
                },
                R = function(e) {
                    return j(e).cursors
                },
                D = function(e) {
                    return j(e).lastSeenEventIds
                },
                P = function(e) {
                    return j(e).poppedOutConversationId
                },
                N = function(e) {
                    return j(e).drawerVisibility
                },
                M = function(e) {
                    return R(e)[O]
                },
                k = function(e) {
                    return R(e)[I]
                },
                B = function(e) {
                    return function(e) {
                        return R(e)[g]
                    }(e).fetchStatus
                },
                L = function(e) {
                    return B(e) === u.a.LOADING
                },
                U = function(e) {
                    return B(e) === u.a.LOADED
                },
                F = function(e) {
                    var t = Object(_.p)(e),
                        n = Object.values(Object(m.B)(e)),
                        r = t ? n.filter((function(e) {
                            var t = e.data,
                                n = t.low_quality;
                            return t.trusted || !n
                        })) : n,
                        i = D(e).last_seen_event_id;
                    return G(e, r, i)
                },
                V = function(e) {
                    var t = Object(_.p)(e),
                        n = D(e).untrusted_last_seen_event_id,
                        r = Object.values(Object(m.B)(e)),
                        i = t ? r.filter((function(e) {
                            var t = e.data,
                                n = t.trusted,
                                r = t.low_quality;
                            return !n && !r
                        })) : r.filter((function(e) {
                            return !e.data.trusted
                        }));
                    return G(e, i, n)
                },
                z = function(e) {
                    return Object.values(Object(m.B)(e)).filter((function(e) {
                        return !e.data.trusted
                    })).length
                },
                W = function(e) {
                    return Object.values(Object(m.B)(e)).filter((function(e) {
                        var t = e.data,
                            n = t.trusted,
                            r = t.low_quality;
                        return !n && r
                    })).length
                },
                G = function(e, t, n) {
                    return n ? t.reduce((function(t, r) {
                        var i = r.data.conversation_id,
                            a = Object(m.A)(e, i),
                            o = Object(m.z)(e, i);
                        return a && Object(v.b)(a, n) && !o ? t + 1 : t
                    }), 0) : 0
                },
                H = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n, r) {
                            var i = r.api,
                                a = x(e, n());
                            return o.b(t, {
                                params: a,
                                request: i.DirectMessages.fetchUserInbox
                            })({
                                actionTypes: b,
                                context: "FETCH_DM_INBOX",
                                meta: {
                                    timelineType: g
                                }
                            }, (function(e) {
                                if (e) {
                                    var t = e.entities,
                                        n = t.entries,
                                        r = t.users,
                                        i = t.tweets,
                                        a = t.cards;
                                    return $(Object.assign({}, e.result.inbox_initial_state, {
                                        entries: n,
                                        users: r,
                                        tweets: i,
                                        cards: a
                                    }))
                                }
                            }))
                        }
                },
                K = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n) {
                            var r = n(),
                                i = B(r);
                            return i !== u.a.LOADED && i !== u.a.LOADING ? t(H(e)) : Promise.resolve()
                        }
                },
                q = function(e, t) {
                    return function(n, r, i) {
                        var a = i.api,
                            s = R(r())[e],
                            c = s.status,
                            u = s.min_entry_id,
                            d = e === I ? O : e,
                            f = Object.assign({}, t, {
                                max_id: u,
                                timelineType: d
                            });
                        if (c !== l.c.HAS_MORE) return Promise.resolve();
                        return o.b(n, {
                            params: f,
                            request: a.DirectMessages.fetchInboxHistory
                        })({
                            actionTypes: b,
                            context: "FETCH_DM_INBOX_HISTORY",
                            meta: {
                                timelineType: e
                            }
                        }, (function(t) {
                            if (t) {
                                var n, r = t.entities,
                                    i = r.entries,
                                    a = r.users,
                                    o = r.tweets,
                                    s = r.cards,
                                    c = t.result.inbox_timeline;
                                return $({
                                    conversations: c.conversations,
                                    inbox_timelines: (n = {}, n[e] = c, n),
                                    entries: i,
                                    users: a,
                                    tweets: o,
                                    cards: s
                                })
                            }
                        }))
                    }
                },
                X = function(e) {
                    return function(t, n) {
                        var r = x(e, n(), "high");
                        return t(q(O, r))
                    }
                },
                Y = function(e) {
                    return function(t, n) {
                        var r = x(e, n(), "low");
                        return t(q(I, r))
                    }
                },
                Q = function(e) {
                    return function(t, n) {
                        var r = x(e, n());
                        return t(q(E, r))
                    }
                },
                Z = Object(h.c)("UPDATE_INBOX"),
                J = function(e) {
                    return {
                        payload: {
                            cursors: e.inbox_timelines,
                            lastSeenEventIds: a()(e, ["inbox_timelines"])
                        },
                        type: Z
                    }
                },
                $ = function(e) {
                    void 0 === e && (e = {});
                    var t = e,
                        n = t.conversations,
                        r = t.entries,
                        i = t.users,
                        o = t.tweets,
                        u = t.cards,
                        l = t.cursor,
                        f = a()(t, ["conversations", "entries", "users", "tweets", "cards", "cursor"]);
                    return [Object(s.b)({
                        cards: u,
                        tweets: o,
                        users: i
                    }), !Object(d.a)(n) && Object(m.c)(n), !Object(d.a)(r) && Object(c.a)(r), !Object(d.a)(l) && Object(p.f)(l), !Object(d.a)(f) && J(f)].filter((function(e) {
                        return e
                    }))
                },
                ee = function() {
                    return function(e) {
                        return e(ne({
                            withTrusted: !0
                        }))
                    }
                },
                te = function() {
                    return function(e) {
                        return e(ne({
                            withUntrusted: !0
                        }))
                    }
                },
                ne = function(e) {
                    var t = void 0 === e ? {} : e,
                        n = t.withTrusted,
                        r = t.withUntrusted;
                    return function(e, t, i) {
                        var a = i.api,
                            s = t(),
                            c = Object(m.B)(s),
                            u = D(s),
                            d = u.last_seen_event_id,
                            l = u.trusted_last_seen_event_id,
                            f = u.untrusted_last_seen_event_id,
                            p = Object.values(c).reduce((function(e, t) {
                                var n = t.data,
                                    r = n.sort_event_id,
                                    i = n.trusted;
                                return e.last_seen_event_id = w(e.last_seen_event_id, r), e.trusted_last_seen_event_id = i ? w(e.trusted_last_seen_event_id, r) : e.trusted_last_seen_event_id, e.untrusted_last_seen_event_id = i ? e.untrusted_last_seen_event_id : w(e.untrusted_last_seen_event_id, r), e
                            }), Object.assign({}, u));
                        return Object(v.b)(p.last_seen_event_id, d) || n && Object(v.b)(p.trusted_last_seen_event_id, l) || r && Object(v.b)(p.untrusted_last_seen_event_id, f) ? (n || delete p.trusted_last_seen_event_id, r || delete p.untrusted_last_seen_event_id, o.c(e, {
                            params: p,
                            request: a.DirectMessages.updateLastSeenEventId
                        })({
                            actionTypes: y,
                            context: "APP_DM_UPDATE_LAST_SEEN",
                            meta: {
                                lastSeenEventIds: p
                            }
                        })) : Promise.resolve()
                    }
                },
                re = Object(h.c)("POP_OUT_CONVERSATION"),
                ie = function(e) {
                    return function(t) {
                        return t({
                            conversationId: e,
                            type: re
                        })
                    }
                },
                ae = Object(h.c)("SET_DRAWER_VISIBILITY"),
                oe = function(e) {
                    return function(t) {
                        return t({
                            visibility: e,
                            type: ae
                        })
                    }
                }
        },
        yw4N: function(e, t, n) {
            "use strict";
            var r = n("pVnL"),
                i = n.n(r),
                a = n("8OQS"),
                o = n.n(a),
                s = n("PJYZ"),
                c = n.n(s),
                u = n("VbXa"),
                d = n.n(u),
                l = n("lSNA"),
                f = n.n(l),
                p = n("ERkP"),
                h = n("Resy"),
                m = n("4m92"),
                v = function() {
                    function e(e) {
                        this._domNode = e, this._suppressListeners = !1
                    }
                    var t = e.prototype;
                    return t.getRect = function() {
                        var e = this._domNode.getBoundingClientRect();
                        return new h.a(e.top, e.height)
                    }, t.getRect2D = function() {
                        var e = this._domNode.getBoundingClientRect();
                        return new m.a(e.left, e.top, e.right, e.bottom)
                    }, t.getWidth = function() {
                        return this._domNode.getBoundingClientRect().width
                    }, t.scrollBy = function(e) {
                        this._domNode.scrollTop += e
                    }, t.scrollToTop = function() {
                        this._domNode.scrollTop = 0
                    }, t.addScrollListener = function(e) {
                        var t = this;
                        return this._addListener("scroll", (function() {
                            t._suppressListeners || e()
                        }))
                    }, t.temporarilySuppressScrollListeners = function(e) {
                        var t = this;
                        this._suppressListeners = !0, window.setTimeout((function() {
                            t._suppressListeners = !1
                        }), e)
                    }, t._addListener = function(e, t) {
                        var n = this,
                            r = function() {
                                return t()
                            };
                        this._domNode.addEventListener(e, r);
                        return function() {
                            n._domNode.removeEventListener(e, r)
                        }
                    }, e
                }(),
                _ = n("7nmT"),
                b = n.n(_),
                y = n("aWzz"),
                g = n("3xO4"),
                E = n.n(g);
            n.d(t, "a", (function() {
                return O
            }));
            var O = function(e) {
                function t(t, n) {
                    var r;
                    return r = e.call(this, t, n) || this, f()(c()(r), "_unmounted", !1), f()(c()(r), "_handleViewRef", (function(e) {
                        var t = r.props.onViewportSet;
                        window.requestAnimationFrame((function() {
                            if (!r._unmounted) {
                                var n = b.a.findDOMNode(e),
                                    i = n instanceof window.Element ? new v(n) : void 0;
                                r.setState({
                                    viewport: i
                                }), t && t(i)
                            }
                        }))
                    })), r.state = {
                        viewport: void 0
                    }, r
                }
                d()(t, e);
                var n = t.prototype;
                return n.getChildContext = function() {
                    return {
                        viewport: this.state.viewport
                    }
                }, n.render = function() {
                    var e = this.props,
                        t = e.children,
                        n = (e.onViewportSet, o()(e, ["children", "onViewportSet"])),
                        r = !!this.state.viewport;
                    return p.createElement(E.a, i()({
                        ref: this._handleViewRef
                    }, n), r && t)
                }, n.componentWillUnmount = function() {
                    this._unmounted = !0
                }, t
            }(p.Component);
            f()(O, "childContextTypes", {
                viewport: y.object
            })
        },
        zML4: function(e, t, n) {
            "use strict";
            var r = n("VbXa"),
                i = n.n(r),
                a = n("ERkP"),
                o = n("3XMw"),
                s = n.n(o),
                c = n("3c1N"),
                u = n.n(c),
                d = n("/yvb"),
                l = n("rHpw"),
                f = s.a.f92bc7c1,
                p = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return i()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.onPress,
                            n = e.to;
                        return a.createElement(d.a, {
                            accessibilityLabel: f,
                            icon: a.createElement(u.a, null),
                            link: n,
                            onPress: t,
                            pullRight: !0,
                            style: h.button,
                            type: "text"
                        })
                    }, t
                }(a.PureComponent),
                h = l.a.create((function(e) {
                    return {
                        button: {
                            marginVertical: "calc(-" + e.spaces.xSmall + ")"
                        }
                    }
                }));
            t.a = p
        },
        ziVO: function(e, t, n) {
            "use strict";
            n("PN9k");
            var r = n("PJYZ"),
                i = n.n(r),
                a = n("VbXa"),
                o = n.n(a),
                s = n("lSNA"),
                c = n.n(s),
                u = n("ERkP"),
                d = n("3xO4"),
                l = n.n(d),
                f = 50,
                p = 10,
                h = {
                    startX: 0,
                    startY: 0
                },
                m = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_pullDistanceY", 0), c()(i()(t), "_pullInfo", Object.assign({}, h)), c()(i()(t), "_handleTouchStart", (function(e) {
                            t._pullInfo.startX = e.touches[0].clientX, t._pullInfo.startY = e.touches[0].clientY
                        })), c()(i()(t), "_handleTouchMove", (function(e) {
                            if ("number" == typeof t._pullInfo.startX && "number" == typeof t._pullInfo.startY) {
                                var n = e.touches[0],
                                    r = n.clientX - t._pullInfo.startX,
                                    i = n.clientY - t._pullInfo.startY;
                                Math.abs(r) > p || (e.preventDefault(), t._updatePullPosition(i))
                            }
                        })), c()(i()(t), "_handleTouchEnd", (function(e) {
                            Math.abs(t._pullDistanceY) > f ? t._handleDismiss() : t._resetPullInfo()
                        })), c()(i()(t), "_updatePullPosition", (function(e) {
                            t._pullDistanceY = e
                        })), c()(i()(t), "_handleDismiss", (function() {
                            var e = t.props.onDismiss;
                            e && e(), t._resetPullInfo()
                        })), c()(i()(t), "_resetPullInfo", (function() {
                            t._updatePullPosition(0), t._pullInfo = Object.assign({}, h)
                        })), t
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.onDismiss,
                            r = e.onLayout,
                            i = e.style,
                            a = !!n;
                        return u.createElement(l.a, {
                            onLayout: r,
                            onTouchEnd: a ? this._handleTouchEnd : void 0,
                            onTouchMove: a ? this._handleTouchMove : void 0,
                            onTouchStart: a ? this._handleTouchStart : void 0,
                            style: i
                        }, t)
                    }, t
                }(u.Component);
            t.a = m
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/shared~bundle.DirectMessages.bd754114.js.map