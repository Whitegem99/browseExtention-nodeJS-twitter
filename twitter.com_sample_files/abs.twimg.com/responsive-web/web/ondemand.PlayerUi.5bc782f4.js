(window.webpackJsonp = window.webpackJsonp || []).push([
    [205], {
        "+cpJ": function(e, t, n) {
            "use strict";
            var r = n("KEM+"),
                o = n.n(r),
                i = function e(t) {
                    var n = this;
                    o()(this, "clearLogs", (function() {
                        try {
                            window.sessionStorage.removeItem(n.storageKey)
                        } catch (e) {}
                    })), o()(this, "log", (function(t, r) {
                        if (e.debuggingEnabled) {
                            var o = t + ": " + r;
                            n.logItemInSessionStorage(o)
                        }
                    })), o()(this, "logItemInSessionStorage", (function(e) {
                        try {
                            var t = window.sessionStorage.getItem(n.storageKey),
                                r = t ? JSON.parse(t) : [];
                            r.push(e), window.sessionStorage.setItem(n.storageKey, JSON.stringify(r))
                        } catch (o) {}
                    })), this.storageKey = e.generateStorageKey(t), this.clearLogs()
                };
            o()(i, "debuggingEnabled", !1), o()(i, "generateStorageKey", (function(e) {
                return "TwitterVideoPlayerDebugLog:" + e
            })), o()(i, "getDebugFileLink", (function(e) {
                var t = window.sessionStorage.getItem(i.generateStorageKey(e)),
                    n = new window.Blob([JSON.parse(t).join("\n")], {
                        type: "application/octet-stream"
                    });
                return window.URL.createObjectURL(n)
            })), t.a = i
        },
        "3Ymp": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M12.253 22.75c-.166 0-.33-.055-.466-.162L4.74 17H2.254c-1.24 0-2.25-1.01-2.25-2.25v-5.5C.003 8.01 1.013 7 2.253 7H4.74l7.047-5.588c.225-.18.533-.215.792-.087.258.125.423.387.423.675v20c0 .288-.165.55-.424.675-.104.05-.216.075-.327.075zm-10-14.25c-.413 0-.75.337-.75.75v5.5c0 .413.337.75.75.75h2.75c.17 0 .333.058.466.162l6.033 4.786V3.552L5.47 8.338c-.134.104-.298.162-.467.162h-2.75zm14.33 8.226c-.308 0-.596-.19-.705-.495-.14-.39.06-.818.45-.96 1.373-.495 2.296-1.81 2.296-3.27s-.923-2.774-2.296-3.27c-.39-.14-.592-.57-.45-.96.14-.39.57-.59.958-.45 1.967.707 3.288 2.59 3.288 4.68s-1.32 3.972-3.286 4.68c-.084.03-.17.046-.255.046z"
                }), o.default.createElement("path", {
                    d: "M17.82 20.135c-.306 0-.594-.19-.704-.495-.14-.39.06-.82.45-.96 2.802-1.014 4.684-3.698 4.684-6.68 0-2.98-1.883-5.665-4.684-6.68-.39-.14-.592-.57-.45-.96.14-.39.573-.59.96-.45C21.47 5.14 23.75 8.39 23.75 12c0 3.61-2.28 6.862-5.674 8.09-.084.03-.17.045-.255.045z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        ArJX: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("ZeN/"),
                o = n("aWzz"),
                i = n.n(o),
                a = {
                    displayOptions: {},
                    variants: []
                };
            t.b = {
                accessibilityLabel: i.a.string,
                adProvider: i.a.func,
                analytics: i.a.object,
                autoplay: i.a.bool,
                bitrateCap: i.a.number,
                contentId: i.a.string,
                contentType: i.a.oneOf(["media_entity", "gif", "vmap"]),
                controls: i.a.bool,
                cta: i.a.object,
                customOverlay: i.a.node,
                displayOptions: i.a.shape({
                    objectFitVideo: i.a.oneOf(r.c),
                    playerHandlesRotations: i.a.bool
                }),
                durationMs: i.a.number,
                enableNativeFullscreen: i.a.bool,
                eventId: i.a.string,
                featureProvider: i.a.shape({
                    getValue: i.a.func
                }),
                geolocationPrompt: i.a.bool,
                httpClient: i.a.object,
                includeBroadcastEventAssociation: i.a.bool,
                initiallyMuted: i.a.bool,
                initiallyMutedCaptions: i.a.bool,
                intentToPlayTime: i.a.instanceOf(Date),
                language: i.a.string,
                loop: i.a.bool,
                maxLoopCount: i.a.number,
                mediaAvailability: i.a.object,
                playbackSessionId: i.a.string,
                poster: i.a.string,
                precache: i.a.bool,
                promotedContext: i.a.object,
                publisherId: i.a.string,
                requestedTimecode: i.a.string,
                setPlayerApi: i.a.func,
                twitterAuthedHttpClient: i.a.object,
                variants: i.a.arrayOf(i.a.shape({
                    src: i.a.string,
                    type: i.a.string
                })),
                videoEl: i.a.object,
                videoId: i.a.object,
                viewCount: i.a.oneOfType([i.a.string, i.a.number]),
                vmapUrl: i.a.string
            }
        },
        ClFK: function(e, t, n) {
            "use strict";
            t.a = {
                BROADCAST_REQUEST_ERROR: "BROADCAST_REQUEST_ERROR",
                BROADCAST_ENDED_NO_REPLAY: "BROADCAST_ENDED_NO_REPLAY",
                BROADCAST_NOT_FOUND: "BROADCAST_NOT_FOUND",
                CONFIG_USER_DATA_NETWORK_ERROR: "CONFIG_USER_DATA_NETWORK_ERROR",
                CONFIG_NETWORK_ERROR: "CONFIG_NETWORK_ERROR",
                DMCA_TAKEDOWN_ERROR: "DMCA_TAKEDOWN_ERROR",
                LIVE_PARSE_ERROR: "LIVE_PARSE_ERROR",
                LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID: "LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID",
                LIVE_STREAM_ACQUISITION_NETWORK_ERROR: "LIVE_STREAM_ACQUISITION_NETWORK_ERROR",
                LIVE_VIDEO_GEOBLOCK_ERROR: "LIVE_VIDEO_GEOBLOCK_ERROR",
                LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR: "LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR",
                LIVE_VIDEO_GEOLOCATION_PROMPT: "LIVE_VIDEO_GEOLOCATION_PROMPT",
                LIVE_VIDEO_NO_COOKIES_ERROR: "LIVE_VIDEO_NO_COOKIES_ERROR",
                MEDIA_NOT_SUPPORTED: "MEDIA_NOT_SUPPORTED",
                MEDIA_SRC_INVALID_ERROR: "MEDIA_SRC_INVALID_ERROR",
                MEDIA_ABORTED: "MEDIA_ABORTED",
                MEDIA_NETWORK_ERROR: "MEDIA_NETWORK_ERROR",
                MEDIA_DECODE_ERROR: "MEDIA_DECODE_ERROR",
                MEDIA_GEOBLOCK_ERROR: "MEDIA_GEOBLOCK_ERROR",
                MEDIA_UNKNOWN_CODE_ERROR: "MEDIA_UNKNOWN_CODE_ERROR",
                ORIGINAL_CONTEXT_DELETED: "ORIGINAL_CONTEXT_DELETED",
                UNSUPPORTED_TYPE: "UNSUPPORTED_TYPE",
                VMAP_NETWORK_ERROR: "VMAP_NETWORK_ERROR",
                VMAP_PARSE_ERROR: "VMAP_PARSE_ERROR"
            }
        },
        FTlx: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M3.5 19.44v-4c0-.414-.336-.75-.75-.75s-.75.336-.75.75v5.81c0 .414.336.75.75.75h5.81c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4l6.577-6.576c.146-.146.22-.338.22-.53s-.073-.384-.22-.53c-.293-.293-.768-.293-1.06 0L3.5 19.44zM14.69 2.75c0 .414.336.75.75.75h4l-6.577 6.576c-.293.293-.293.768 0 1.06s.768.294 1.06 0L20.5 4.562v4c0 .414.336.75.75.75s.75-.336.75-.75V2.75c0-.414-.336-.75-.75-.75h-5.81c-.414 0-.75.336-.75.75z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        HqD1: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M20.5 2h-1c-.828 0-1.5.672-1.5 1.5v6.976L4.87 2.116c-.228-.146-.522-.157-.762-.023-.24.132-.39.384-.39.657v18.5c0 .273.15.525.39.657.113.063.237.093.36.093.142 0 .28-.04.403-.117L18 13.527V20.5c0 .828.672 1.5 1.5 1.5h1c.828 0 1.5-.672 1.5-1.5v-17c0-.828-.672-1.5-1.5-1.5z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        Ix6Q: function(e, t, n) {
            "use strict";
            e.exports = n("thYI")
        },
        NXnr: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("ERkP"),
                o = (n("yIC7"), n("W/Kd")),
                i = n.n(o),
                a = n("KEM+"),
                s = n.n(a),
                l = n("Noa2"),
                u = n.n(l),
                c = {
                    wrapper: {
                        backgroundColor: "#CCD7DD",
                        height: "100%",
                        width: "100%"
                    },
                    icon: {
                        fill: "#AAB8C2",
                        height: "46px",
                        verticalAlign: "middle",
                        textAlign: "center",
                        position: "absolute",
                        bottom: "50%",
                        transform: "translateY(50%)",
                        width: "100%"
                    }
                },
                d = function(e) {
                    var t, n;
                    return n = t = function(t) {
                        function n(e) {
                            var n;
                            return (n = t.call(this, e) || this).state = {
                                hasError: !1
                            }, n
                        }
                        i()(n, t);
                        var o = n.prototype;
                        return o.componentDidCatch = function(e, t) {
                            this.setState({
                                hasError: !0
                            })
                        }, o.render = function() {
                            return this.state.hasError ? r.createElement("div", {
                                style: c.wrapper
                            }, r.createElement(u.a, {
                                style: c.icon
                            })) : r.createElement(e, this.props)
                        }, n
                    }(r.Component), s()(t, "displayName", "ErrorBoundary(" + (e.displayName || e.name) + ")"), n
                },
                p = (n("LnO1"), n("3eMz"), n("dtAy"), n("DB+v"), n("KI7T"), n("1Pcy")),
                h = n.n(p),
                f = (n("PN9k"), n("aWzz")),
                m = n.n(f),
                v = {
                    ad: "ad",
                    captions: "captions",
                    controlBar: "controlBar",
                    cta: "cta",
                    duration: "duration",
                    error: "error",
                    fullscreen: "fullscreen",
                    gif: "gif",
                    live: "live",
                    mute: "mute",
                    pause: "pause",
                    periscopeLink: "periscopeLink",
                    play: "play",
                    poster: "poster",
                    posterPlayBtn: "posterPlayBtn",
                    publisherAttribution: "publisherAttribution",
                    replay: "replay",
                    scrubber: "scrubber",
                    shrink: "shrink",
                    skip: "skip",
                    spinner: "spinner",
                    timecode: "timecode",
                    timePlayed: "timePlayed",
                    unmute: "unmute",
                    viewCount: "viewCount",
                    volume: "volume"
                },
                E = {
                    background: {
                        borderTop: "5.5px solid rgba(255, 255, 255, 0.2)",
                        borderRight: "5.5px solid rgba(255, 255, 255, 0.2)",
                        borderBottom: "5.5px solid rgba(255, 255, 255, 0.2)",
                        borderLeft: "5.5px solid #fff",
                        boxSizing: "border-box",
                        borderRadius: "50%",
                        height: "100%",
                        width: "100%",
                        animation: "TwitterVideoPlayerBufferingAnimation 1.1s infinite"
                    }
                },
                _ = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return i()(t, e), t.prototype.render = function() {
                        return r.createElement("div", {
                            style: this.props.style
                        }, r.createElement("div", {
                            className: "spinner",
                            "data-testid": v.spinner,
                            style: E.background
                        }))
                    }, t
                }(r.PureComponent);
            _.propTypes = {};
            var y;
            (y = document.createElement("style")).innerText = "@keyframes TwitterVideoPlayerBufferingAnimation { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }", document.body.appendChild(y);
            var g = _,
                b = (n("AJ0U"), '"helvetica neue",arial'),
                S = "13px",
                C = "#fff",
                T = "rgba(255, 255, 255, .85)",
                O = 400,
                w = n("97Jx"),
                R = n.n(w),
                I = function(e) {
                    var t, n;
                    return n = t = function(t) {
                        function n(e) {
                            var n;
                            return n = t.call(this, e) || this, s()(h()(n), "_handleMouseOut", (function() {
                                n.setState(Object.assign({}, n.state, {
                                    isHovered: !1
                                }))
                            })), s()(h()(n), "_handleMouseOver", (function() {
                                n.setState(Object.assign({}, n.state, {
                                    isHovered: !0
                                }))
                            })), n.state = {
                                isHovered: !1
                            }, n
                        }
                        return i()(n, t), n.prototype.render = function() {
                            return r.createElement("span", {
                                onBlur: this._handleMouseOut,
                                onFocus: this._handleMouseOver,
                                onMouseOut: this._handleMouseOut,
                                onMouseOver: this._handleMouseOver
                            }, r.createElement(e, R()({
                                isHovered: this.state.isHovered
                            }, this.props)))
                        }, n
                    }(r.PureComponent), s()(t, "displayName", "Hoverable(" + (e.displayName || e.name) + ")"), n
                },
                P = {
                    base: {
                        color: T,
                        backgroundColor: "transparent",
                        boxSizing: "content-box",
                        borderWidth: 0,
                        outlineStyle: "none",
                        userSelect: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                        padding: "2px 6px 6px",
                        boxShadow: "none",
                        fontFamily: b,
                        lineHeight: "normal",
                        verticalAlign: "middle"
                    },
                    hovered: {
                        color: C
                    }
                },
                k = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return i()(t, e), t.prototype.render = function() {
                        var e = this.props.isHovered ? P.hovered : {};
                        return r.createElement("button", {
                            "data-testid": this.props.testID,
                            onClick: this.props.onClick,
                            style: Object.assign({}, P.base, {}, e, {}, this.props.style)
                        }, this.props.children)
                    }, t
                }(r.PureComponent);
            k.propTypes = {};
            var M = I(k),
                A = n("ZeN/"),
                L = n("LdEA"),
                x = n.n(L),
                D = function(e, t) {
                    return {
                        opacity: e ? 0 : 1,
                        transition: "opacity " + t + "s ease-in-out"
                    }
                },
                N = function(e) {
                    var t, n;
                    return n = t = function(t) {
                        function n(n) {
                            var o;
                            return o = t.call(this, n) || this, s()(h()(o), "_handleTransitionEnd", (function() {
                                o.state.isHiding && o.setState({
                                    isHiding: !1
                                })
                            })), s()(h()(o), "_renderWrappedComponent", (function(t) {
                                if (!o.props.isHidden || o.state.isHiding) return r.createElement(e, t)
                            })), o.state = {
                                isHiding: !1
                            }, o
                        }
                        i()(n, t);
                        var o = n.prototype;
                        return o.componentWillReceiveProps = function(e) {
                            !this.props.isHidden && e.isHidden && this.setState(Object.assign({}, this.state, {
                                isHiding: !0
                            }))
                        }, o.render = function() {
                            var e = this.props,
                                t = e.fadeTimeSeconds,
                                n = e.isHidden,
                                o = x()(e, ["fadeTimeSeconds", "isHidden"]);
                            return r.createElement("span", {
                                onTransitionEnd: this._handleTransitionEnd,
                                style: D(n, t)
                            }, this._renderWrappedComponent(o))
                        }, n
                    }(r.PureComponent), s()(t, "propTypes", {
                        fadeTimeSeconds: m.a.number,
                        isHidden: m.a.bool
                    }), s()(t, "defaultProps", {
                        fadeTimeSeconds: .15
                    }), s()(t, "displayName", "Fadable(" + (e.displayName || e.name) + ")"), n
                },
                B = n("i9V9"),
                V = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return t = e.call.apply(e, [this].concat(r)) || this, s()(h()(t), "renderHtml", (function() {
                            return {
                                __html: Object(B.b)(t.props.children, t.props.params)
                            }
                        })), t
                    }
                    return i()(t, e), t.prototype.render = function() {
                        return this.props.isHtml ? r.createElement("span", {
                            dangerouslySetInnerHTML: this.renderHtml(),
                            "data-testid": this.props.testID,
                            style: this.props.style
                        }) : r.createElement("span", {
                            "data-testid": this.props.testID,
                            style: this.props.style
                        }, Object(B.b)(this.props.children, this.props.params))
                    }, t
                }(r.PureComponent);
            s()(V, "defaultProps", {
                params: {}
            }), V.propTypes = {};
            var U = V,
                H = n("pXH+"),
                F = n.n(H),
                j = n("YKqM"),
                z = {
                    base: {
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.8)",
                        border: "1px solid " + C,
                        borderRadius: "3px",
                        display: "flex",
                        fontFamily: b,
                        fontSize: S,
                        justifyContent: "space-between",
                        maxWidth: "75%",
                        padding: "5px 8px"
                    },
                    chevron: {
                        fontSize: "1.5em",
                        marginLeft: "6px",
                        verticalAlign: "middle"
                    },
                    eventLabel: {
                        display: "inline-block",
                        maxWidth: "calc(100% - 30px)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    },
                    image: {
                        maxHeight: "25px",
                        maxWidth: "250px",
                        pointerEvents: "none"
                    }
                },
                W = function(e) {
                    function t() {
                        for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(o)) || this, s()(h()(t), "_handleClick", (function() {
                            t.props.onClick(), window.open(t.props.url, "_blank")
                        })), s()(h()(t), "_renderButton", (function() {
                            return r.createElement(M, {
                                onClick: t._handleClick,
                                style: Object.assign({}, z.base, {}, t.props.style),
                                testID: v.cta
                            }, t._renderMessage(), r.createElement(F.a, {
                                style: z.chevron
                            }))
                        })), s()(h()(t), "_renderMessage", (function() {
                            var e = new j.a(t.props.url).getHostname(),
                                n = 0 === e.indexOf("www.") ? e.substr(4) : e;
                            switch (t.props.type) {
                                case A.b.EVENT:
                                    return r.createElement("span", {
                                        style: z.eventLabel,
                                        title: t.props.label
                                    }, t.props.label);
                                case A.b.WATCH:
                                    return r.createElement(U, {
                                        params: {
                                            hostname: n
                                        }
                                    }, "Watch now at %{hostname}");
                                case A.b.VISIT:
                                default:
                                    return r.createElement(U, {
                                        params: {
                                            hostname: n
                                        }
                                    }, "Visit %{hostname}")
                            }
                        })), s()(h()(t), "_renderImage", (function() {
                            return r.createElement("img", {
                                alt: "Video Badge",
                                "data-testid": v.cta,
                                src: t.props.url,
                                style: Object.assign({}, z.image, {}, t.props.style)
                            })
                        })), t
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.props.onImpression()
                    }, n.render = function() {
                        return this.props.type === A.b.IMAGE ? this._renderImage() : this._renderButton()
                    }, t
                }(r.PureComponent);
            W.propTypes = {};
            var K = N(W),
                G = {
                    base: {
                        color: C,
                        position: "fixed",
                        fontSize: S,
                        fontFamily: b,
                        borderRadius: "3px",
                        display: "none",
                        overflow: "hidden"
                    },
                    item: {
                        background: "rgba(0,0,0,0.85)",
                        padding: "8px",
                        cursor: "pointer",
                        userSelect: "none"
                    }
                },
                Q = (r.createElement(U, null, "Copy Video Address"), function(e) {
                    var t = this;
                    s()(this, "teardown", (function() {
                        document.removeEventListener("click", t._closeMenu), t.copyVideoAddressElement.removeEventListener("click", t._copyVideoAddress), t.copyVideoAddressElement.removeEventListener("mouseenter", t._hoverOn), t.copyVideoAddressElement.removeEventListener("mouseleave", t._hoverOff), t.root.parentNode.removeChild(t.root), t.root = void 0, t.copyVideoAddressElement = void 0
                    })), s()(this, "openAt", (function(e, n) {
                        t.root.style.left = e + "px", t.root.style.top = n + "px", t.root.style.display = "block"
                    })), s()(this, "_applyStylesToElement", (function(e, t) {
                        Object.keys(t).forEach((function(n) {
                            e.style[n] = t[n]
                        }))
                    })), s()(this, "_hoverOn", (function() {
                        t.copyVideoAddressElement.style.backgroundColor = "rgba(25,25,25,0.85)"
                    })), s()(this, "_hoverOff", (function() {
                        t.copyVideoAddressElement.style.backgroundColor = "rgba(0,0,0,0.85)"
                    })), s()(this, "_copyVideoAddress", (function() {
                        document.addEventListener("copy", t._handleCopy), document.execCommand("copy")
                    })), s()(this, "_handleCopy", (function(e) {
                        e.clipboardData.setData("text/plain", "https://twitter.com/i/status/" + t.tweetId), e.preventDefault(), document.removeEventListener("copy", t._handleCopy)
                    })), s()(this, "_closeMenu", (function() {
                        t.root && (t.root.style.display = "none")
                    })), this.tweetId = e, this.root = document.createElement("div"), this._applyStylesToElement(this.root, G.base), this.copyVideoAddressElement = document.createElement("div"), this.copyVideoAddressElement.innerText = Object(B.b)("Copy Video Address"), this.copyVideoAddressElement.addEventListener("click", this._copyVideoAddress), this.copyVideoAddressElement.addEventListener("mouseenter", this._hoverOn), this.copyVideoAddressElement.addEventListener("mouseleave", this._hoverOff), this._applyStylesToElement(this.copyVideoAddressElement, G.item), this.root.appendChild(this.copyVideoAddressElement), document.body.appendChild(this.root), document.addEventListener("click", this._closeMenu)
                }),
                Y = (n("p+GS"), n("XsvF")),
                J = n.n(Y),
                q = n("jHWr"),
                X = n.n(q),
                Z = n("FTlx"),
                $ = n.n(Z),
                ee = n("Paks"),
                te = n.n(ee),
                ne = n("RdYg"),
                re = n.n(ne),
                oe = n("k8e1"),
                ie = n.n(oe),
                ae = n("kjXU"),
                se = n.n(ae),
                le = n("lzNf"),
                ue = n.n(le),
                ce = {
                    base: function(e, t) {
                        return {
                            position: "absolute",
                            top: t + "px",
                            left: e + "px",
                            paddingBottom: "8px",
                            cursor: "default",
                            userSelect: "none"
                        }
                    },
                    message: {
                        backgroundColor: "rgba(0,0,0,0.8)",
                        borderRadius: "3px",
                        whiteSpace: "nowrap",
                        lineHeight: "15px",
                        padding: "6px"
                    },
                    caret: {
                        position: "absolute",
                        bottom: "0px",
                        right: "26px",
                        width: "0px",
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderTop: "8px solid rgba(0,0,0,0.8)"
                    }
                },
                de = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this) || this, s()(h()(n), "_setRef", (function(e) {
                            e && n.setState({
                                width: e.clientWidth,
                                height: e.clientHeight
                            })
                        })), n.state = {
                            width: 0,
                            height: 0
                        }, n
                    }
                    return i()(t, e), t.prototype.render = function() {
                        return r.createElement("div", {
                            ref: this._setRef,
                            style: ce.base(this.props.xPos - this.state.width + 30, this.props.yPos - this.state.height)
                        }, r.createElement("div", {
                            style: ce.message
                        }, this.props.children), r.createElement("div", {
                            style: ce.caret
                        }))
                    }, t
                }(r.PureComponent);
            de.propTypes = {};
            var pe = de,
                he = {
                    base: {
                        flexShrink: "0",
                        position: "relative"
                    },
                    periscopeIcon: {
                        height: "1.25em",
                        verticalAlign: "middle",
                        width: "1.25em"
                    }
                },
                fe = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this, t) || this, s()(h()(n), "_handleClick", (function() {
                            n.props.onClick(), window.open(n.props.url, "_blank")
                        })), s()(h()(n), "_handleMouseEnter", (function() {
                            n.setState(Object.assign({}, n.state, {
                                isMouseOver: !0
                            }))
                        })), s()(h()(n), "_handleMouseLeave", (function() {
                            n.setState(Object.assign({}, n.state, {
                                isMouseOver: !1
                            }))
                        })), s()(h()(n), "_renderTooltip", (function() {
                            if (n.state.isMouseOver) return r.createElement(pe, {
                                xPos: n.element.clientWidth / 2 + 3,
                                yPos: 4
                            }, r.createElement(U, null, "View on Periscope with hearts and chats"))
                        })), s()(h()(n), "_renderButton", (function() {
                            return r.createElement(M, {
                                onClick: n._handleClick
                            }, r.createElement(ue.a, {
                                style: he.periscopeIcon
                            }))
                        })), s()(h()(n), "_setRef", (function(e) {
                            n.element = e
                        })), n.state = {
                            isMouseOver: !1
                        }, n
                    }
                    return i()(t, e), t.prototype.render = function() {
                        var e = this.props.style;
                        return r.createElement("span", {
                            "data-testid": v.periscopeLink,
                            onBlur: this._handleMouseLeave,
                            onFocus: this._handleMouseEnter,
                            onMouseEnter: this._handleMouseEnter,
                            onMouseLeave: this._handleMouseLeave,
                            ref: this._setRef,
                            style: Object.assign({}, e, {}, he.base)
                        }, this._renderTooltip(), this._renderButton())
                    }, t
                }(r.PureComponent);
            fe.propTypes = {};
            var me = fe,
                ve = {
                    touchAction: "none",
                    cursor: "pointer",
                    direction: "ltr",
                    height: "30px",
                    margin: "0 15px",
                    position: "relative",
                    userSelect: "none"
                },
                Ee = function(e) {
                    return {
                        height: e ? "5px" : "3px",
                        width: "100%",
                        position: "relative",
                        top: e ? "15px" : "16px",
                        backgroundColor: "rgba(255, 255, 255, .3)",
                        borderRadius: "5px"
                    }
                },
                _e = function(e) {
                    return {
                        backgroundColor: "#fff",
                        position: "absolute",
                        width: e + "%"
                    }
                },
                ye = function(e, t) {
                    return {
                        backgroundColor: "#fff",
                        height: "17px",
                        width: "17px",
                        borderRadius: "19px",
                        top: "9px",
                        marginLeft: "-9px",
                        position: "absolute",
                        left: t + "%",
                        boxShadow: "0 0 3px rgba(0,0,0,.5)",
                        transform: "scale(" + (e ? 1 : .3) + ")",
                        opacity: e ? 1 : 0,
                        transition: "transform 125ms cubic-bezier(.15, .75, .5, .95)"
                    }
                },
                ge = !0,
                be = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this, t) || this, s()(h()(n), "_handleMouseDown", (function() {
                            n.setState({
                                isScrubbing: !0
                            }), document.addEventListener("mousemove", n._handleMouseMove), document.addEventListener("mouseup", n._handleMouseUp), document.addEventListener("click", n._handleScrubClick, ge), n.props.onScrubStart()
                        })), s()(h()(n), "_handleScrubClick", (function(e) {
                            e.preventDefault(), e.stopPropagation(), document.removeEventListener("click", n._handleScrubClick, ge)
                        })), s()(h()(n), "_handleClick", (function(e) {
                            e.preventDefault()
                        })), s()(h()(n), "_handleMouseUp", (function(e) {
                            n.setState({
                                isScrubbing: !1
                            }), n._handleScrub(e.pageX), n._cleanupScrubListeners(), n.props.onScrubEnd()
                        })), s()(h()(n), "_handleMouseMove", (function(e) {
                            n._handleScrub(e.pageX)
                        })), s()(h()(n), "_handleTouchStart", (function(e) {
                            1 === e.changedTouches.length && (n.setState({
                                isScrubbing: !0
                            }), document.addEventListener("touchmove", n._handleTouchMove), document.addEventListener("touchend", n._handleTouchEnd), document.addEventListener("touchcancel", n._handleTouchEnd), n.props.onScrubStart())
                        })), s()(h()(n), "_handleTouchEnd", (function(e) {
                            if (0 === e.touches.length) {
                                var t = e.changedTouches[0].pageX;
                                n._handleScrub(t), n.setState({
                                    isScrubbing: !1
                                }), n._cleanupScrubListeners(), n.props.onScrubEnd(), e.preventDefault()
                            }
                        })), s()(h()(n), "_handleTouchMove", (function(e) {
                            if (1 === e.touches.length) {
                                var t = e.touches[0].pageX;
                                n._handleScrub(t)
                            }
                        })), s()(h()(n), "_setRef", (function(e) {
                            n.scrubberElement = e
                        })), n.state = {
                            isScrubbing: !1
                        }, n
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.componentWillUnmount = function() {
                        this._cleanupScrubListeners()
                    }, n._cleanupScrubListeners = function() {
                        document.removeEventListener("mouseup", this._handleMouseUp), document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("touchmove", this._handleTouchMove), document.removeEventListener("touchend", this._handleTouchEnd), document.removeEventListener("touchcancel", this._handleTouchEnd)
                    }, n._handleScrub = function(e) {
                        if (this.scrubberElement) {
                            var t = this.scrubberElement.getBoundingClientRect(),
                                n = t.left,
                                r = t.width,
                                o = n || this.props.left,
                                i = r || this.props.width,
                                a = (window.pageXOffset || this.props.scroll || 0) + o,
                                s = Math.min(i, Math.max(e - a, 0)) / i;
                            this.setState({
                                scrubFraction: s
                            }), this.props.onScrubToFraction(s)
                        }
                    }, n.render = function() {
                        var e = this.props,
                            t = e.style,
                            n = e.testID,
                            o = this.props.isHovered || this.state.isScrubbing,
                            i = this.state.isScrubbing && void 0 !== this.state.scrubFraction ? 100 * this.state.scrubFraction : this.props.currentTimeSeconds / this.props.durationSeconds * 100;
                        return r.createElement("div", {
                            className: "scrubber",
                            "data-testid": n,
                            onClick: this._handleClick,
                            onMouseDown: this._handleMouseDown,
                            onTouchStart: this._handleTouchStart,
                            ref: this._setRef,
                            style: Object.assign({}, ve, {}, t)
                        }, r.createElement("div", {
                            className: "scrubBar",
                            style: Ee(o)
                        }), r.createElement("div", {
                            className: "playedBar",
                            style: Object.assign({}, Ee(o), {}, _e(i))
                        }), r.createElement("div", {
                            className: "scrubHandle",
                            style: ye(o, i)
                        }))
                    }, t
                }(r.PureComponent);
            be.propTypes = {};
            var Se = I(be),
                Ce = n("HqD1"),
                Te = n.n(Ce),
                Oe = {
                    base: {
                        fontSize: S,
                        verticalAlign: "middle"
                    },
                    icon: {
                        fontSize: "25px",
                        marginTop: "-2px",
                        height: "1em",
                        width: "1em",
                        verticalAlign: "middle"
                    },
                    label: {
                        float: "left",
                        marginRight: "5px"
                    }
                },
                we = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return i()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.durationSeconds,
                            n = e.onClick,
                            o = e.style;
                        return t >= 7 ? r.createElement(M, {
                            onClick: n,
                            style: Object.assign({}, Oe.base, {}, o),
                            testID: v.skip
                        }, r.createElement(U, {
                            style: Oe.label
                        }, "Skip"), r.createElement(Te.a, {
                            style: Oe.icon
                        })) : null
                    }, t
                }(r.PureComponent);
            we.propTypes = {};
            var Re = we,
                Ie = n("Yfpf"),
                Pe = {
                    base: {
                        color: T,
                        cursor: "default",
                        fontSize: S,
                        fontWeight: O,
                        fontFamily: b,
                        userSelect: "none"
                    }
                },
                ke = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return i()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.currentTimeSeconds,
                            n = e.durationSeconds,
                            o = e.style;
                        return r.createElement("span", {
                            "data-testid": v.timePlayed,
                            style: Object.assign({}, Pe.base, {}, o)
                        }, Object(Ie.a)(t), " / ", Object(Ie.a)(n))
                    }, t
                }(r.PureComponent);
            s()(ke, "defaultProps", {
                currentTimeSeconds: 0
            }), ke.propTypes = {};
            var Me = ke,
                Ae = n("zO/3"),
                Le = n.n(Ae),
                xe = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return i()(t, e), t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.viewCount,
                            o = t.viewerCount;
                        return o ? (o = Object(B.c)(o), e = r.createElement(U, {
                            params: {
                                viewerCount: o
                            }
                        }, "%{viewerCount} viewers")) : ("number" == typeof n && (n = Object(B.c)(n)), e = r.createElement(U, {
                            params: {
                                viewCount: n
                            }
                        }, "%{viewCount} views")), r.createElement(Le.a, {
                            "data-testid": v.viewCount,
                            selectable: !1,
                            style: {
                                color: "inherit"
                            }
                        }, e)
                    }, t
                }(r.PureComponent);
            xe.propTypes = {};
            var De = xe,
                Ne = n("3Ymp"),
                Be = n.n(Ne),
                Ve = n("azNW"),
                Ue = n.n(Ve),
                He = {
                    base: {
                        flexShrink: "0",
                        position: "relative"
                    },
                    icon: {
                        verticalAlign: "middle",
                        width: "1.25em"
                    },
                    volumeSliderContainer: {
                        position: "absolute",
                        bottom: "25px",
                        left: "4px"
                    },
                    volumeSlider: {
                        height: "115px",
                        width: "26px",
                        backgroundColor: "rgba(0,0,0,0.3)",
                        borderRadius: "15px",
                        display: "inline-block",
                        cursor: "pointer"
                    },
                    volumeSliderTrack: {
                        width: "4px",
                        height: "85px",
                        borderRadius: "4px",
                        margin: "15px 11px",
                        backgroundColor: "rgba(255,255,255,0.3)",
                        display: "inline-block",
                        position: "relative"
                    },
                    volumeThumb: function(e) {
                        return {
                            backgroundColor: "#fff",
                            height: "14px",
                            width: "14px",
                            borderRadius: "8px",
                            position: "absolute",
                            bottom: 100 * e + "%",
                            marginLeft: "-5px",
                            marginBottom: "-7px",
                            boxShadow: "0 0 3px rgba(0,0,0,.5)"
                        }
                    },
                    volumeTrackHighlight: function(e) {
                        return {
                            backgroundColor: "#fff",
                            position: "absolute",
                            borderRadius: "4px",
                            width: "4px",
                            height: 100 * e + "%",
                            bottom: 0
                        }
                    }
                },
                Fe = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this, t) || this, s()(h()(n), "_isVolumeTrackOpen", (function() {
                            return !n.state.disableVolumeSlider && (n.state.isMouseOver || n.state.isVolumeChanging)
                        })), s()(h()(n), "_handleMouseEnter", (function() {
                            n.state.disableVolumeSlider || n.setState({
                                isMouseOver: !0
                            })
                        })), s()(h()(n), "_handleMouseLeave", (function() {
                            n.setState({
                                isMouseOver: !1
                            })
                        })), s()(h()(n), "_handleMouseUp", (function() {
                            n.setState({
                                disableVolumeSlider: !1
                            })
                        })), s()(h()(n), "_handleTouchStart", (function() {
                            n.setState({
                                disableVolumeSlider: !0
                            })
                        })), s()(h()(n), "_handleVolumeChangeStart", (function(e) {
                            e.preventDefault(), document.addEventListener("mousemove", n._handleVolumeChange), document.addEventListener("mouseup", n._handleVolumeChangeEnd), n.setState({
                                isVolumeChanging: !0
                            })
                        })), s()(h()(n), "_handleVolumeChange", (function(e) {
                            if (n.volumeElement) {
                                var t = n.volumeElement.getBoundingClientRect(),
                                    r = t.bottom,
                                    o = t.height,
                                    i = r || n.props.bottom,
                                    a = o || n.props.height,
                                    s = (window.pageYOffset || n.props.scroll || 0) + i,
                                    l = Math.min(a, Math.max(s - e.pageY, 0)) / a;
                                n.props.onSetVolume(l)
                            }
                        })), s()(h()(n), "_handleVolumeChangeEnd", (function(e) {
                            n._handleVolumeChange(e), document.removeEventListener("mousemove", n._handleVolumeChange), document.removeEventListener("mouseup", n._handleVolumeChangeEnd), n.setState({
                                isVolumeChanging: !1
                            })
                        })), s()(h()(n), "_setVolumeRef", (function(e) {
                            n.volumeElement = e
                        })), s()(h()(n), "_renderVolume", (function() {
                            if (n._isVolumeTrackOpen()) {
                                var e = n.props.isMuted ? 0 : n.props.volume;
                                return r.createElement("span", {
                                    style: He.volumeSliderContainer
                                }, r.createElement("span", {
                                    className: "volume-slider",
                                    "data-testid": v.volume,
                                    onMouseDown: n._handleVolumeChangeStart,
                                    style: He.volumeSlider
                                }, r.createElement("span", {
                                    ref: n._setVolumeRef,
                                    style: He.volumeSliderTrack
                                }, r.createElement("span", {
                                    className: "volume-track",
                                    style: He.volumeTrackHighlight(e)
                                }), r.createElement("span", {
                                    className: "volume-thumb",
                                    style: He.volumeThumb(e)
                                }))))
                            }
                        })), s()(h()(n), "_renderButton", (function() {
                            return n.props.isMuted ? r.createElement(M, {
                                onClick: n.props.onUnmute,
                                testID: v.unmute
                            }, r.createElement(Ue.a, {
                                style: He.icon
                            })) : r.createElement(M, {
                                onClick: n.props.onMute,
                                testID: v.mute
                            }, r.createElement(Be.a, {
                                style: He.icon
                            }))
                        })), n.state = {
                            disableVolumeSlider: !1,
                            isMouseOver: !1,
                            isVolumeChanging: !1
                        }, n
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        document.addEventListener("touchstart", this._handleTouchStart)
                    }, n.componentWillUnmount = function() {
                        document.removeEventListener("touchstart", this._handleTouchStart)
                    }, n.componentWillUpdate = function(e, t) {
                        var n = t.isMouseOver || t.isVolumeChanging;
                        n && !this._isVolumeTrackOpen() ? this.props.onVolumeSliderOpened() : !n && this._isVolumeTrackOpen() && this.props.onVolumeSliderClosed()
                    }, n.render = function() {
                        return r.createElement("span", {
                            className: "volume-control",
                            onBlur: this._handleMouseLeave,
                            onFocus: this._handleMouseEnter,
                            onMouseEnter: this._handleMouseEnter,
                            onMouseLeave: this._handleMouseLeave,
                            onMouseUp: this._handleMouseUp,
                            style: Object.assign({}, He.base, {}, this.props.style)
                        }, this._renderVolume(), this._renderButton())
                    }, t
                }(r.PureComponent);
            Fe.propTypes = {};
            var je = Fe,
                ze = n("avmV"),
                We = n.n(ze),
                Ke = n("8vOL"),
                Ge = n.n(Ke),
                Qe = {
                    actionButton: {
                        height: "1.25em",
                        verticalAlign: "middle",
                        width: "1.25em"
                    },
                    actionLink: {
                        flexShrink: "0"
                    },
                    adBadge: {
                        color: T,
                        cursor: "default",
                        flex: "1 1 auto",
                        float: "left",
                        fontSize: S,
                        fontFamily: b,
                        fontWeight: O,
                        marginLeft: "10px",
                        userSelect: "none"
                    },
                    base: {
                        background: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.65))",
                        bottom: 0,
                        cursor: "auto",
                        height: "65px",
                        paddingBottom: "5px",
                        position: "absolute",
                        width: "100%"
                    },
                    bottomBar: {
                        bottom: "0",
                        display: "flex",
                        lineHeight: "43px",
                        margin: "0 6px",
                        position: "absolute",
                        width: "calc(100% - 12px)"
                    },
                    captionsLink: {
                        flexShrink: "0"
                    },
                    captionsButton: function(e) {
                        return {
                            color: e ? "rgba(255, 255, 255, .85)" : "rgba(255, 255, 255, .4)",
                            height: "1.25em",
                            verticalAlign: "middle",
                            width: "1.25em"
                        }
                    },
                    icon: {
                        verticalAlign: "middle",
                        width: "1.25em"
                    },
                    leftContainer: {
                        display: "flex",
                        alignItems: "center",
                        flex: "1",
                        overflow: "hidden"
                    },
                    scrubber: {
                        marginBottom: "-4px"
                    },
                    skipButton: {
                        borderLeft: "1px solid rgba(170,184,194,.3)",
                        color: "transparent",
                        lineHeight: "20px",
                        marginLeft: "15px",
                        paddingLeft: "18px",
                        paddingRight: "11px"
                    },
                    skipLink: {
                        flexShrink: "0"
                    },
                    timePlayed: {
                        flexShrink: "0",
                        marginRight: "15px"
                    },
                    fullscreenButton: {
                        flexShrink: "0",
                        height: "1.25em",
                        verticalAlign: "middle",
                        width: "1.25em"
                    },
                    fullscreenLink: {
                        flexShrink: "0"
                    },
                    publisherAttribution: {
                        alignItems: "center",
                        color: T,
                        cursor: "default",
                        display: "flex",
                        fontFamily: b,
                        fontSize: S,
                        fontWeight: O,
                        justifyContent: "flex-start",
                        marginLeft: "4px",
                        minWidth: "0",
                        overflow: "hidden",
                        userSelect: "none"
                    },
                    publisherAttributionDisplayName: {
                        display: "inline-block",
                        flexShrink: "1",
                        marginLeft: "6px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        verticalAlign: "middle",
                        whiteSpace: "nowrap"
                    },
                    publisherAttributionProfileImage: {
                        borderRadius: "10px",
                        flexShrink: "0",
                        height: "20px",
                        width: "20px",
                        verticalAlign: "middle"
                    },
                    publisherAttributionSeparator: {
                        marginLeft: "10px",
                        verticalAlign: "middle"
                    }
                },
                Ye = We.a.create({
                    viewCount: {
                        marginLeft: "10px"
                    }
                }),
                Je = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this, t) || this, s()(h()(n), "_handleVolumeSliderClosed", (function() {
                            n.setState({
                                hideScrubber: !1
                            }), n.props.onInteractionEnd()
                        })), s()(h()(n), "_handleVolumeSliderOpened", (function() {
                            n.setState({
                                hideScrubber: !0
                            }), n.props.onInteractionStart()
                        })), s()(h()(n), "_handleScrubEnd", (function() {
                            n.props.onInteractionEnd()
                        })), s()(h()(n), "_handleScrubStart", (function() {
                            n.props.onInteractionStart()
                        })), n.state = {
                            hideScrubber: !1,
                            isHiding: !1
                        }, n
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n._renderScrubber = function() {
                        var e = this.props,
                            t = e.isAd,
                            n = e.isLive,
                            o = e.currentTimeSeconds,
                            i = e.durationSeconds,
                            a = e.onScrubToFraction;
                        if (!t && !n && !this.state.hideScrubber) return r.createElement(Se, {
                            currentTimeSeconds: o,
                            durationSeconds: i,
                            onScrubEnd: this._handleScrubEnd,
                            onScrubStart: this._handleScrubStart,
                            onScrubToFraction: a,
                            style: Qe.scrubber
                        })
                    }, n._renderActionButton = function() {
                        var e = this.props,
                            t = e.contentType,
                            n = e.isLive,
                            o = e.isPlaying,
                            i = e.isReplayButtonShown,
                            a = e.onPause,
                            s = e.onPlay,
                            l = e.onReplay;
                        if ("broadcast" !== t || !n) return o ? r.createElement("span", {
                            style: Qe.actionLink
                        }, r.createElement(M, {
                            className: "action-button",
                            onClick: a,
                            style: Qe.actionButton,
                            testID: v.pause
                        }, "live" === t ? r.createElement(se.a, {
                            style: Qe.icon
                        }) : r.createElement(te.a, {
                            style: Qe.icon
                        }))) : i ? r.createElement("span", {
                            style: Qe.actionLink
                        }, r.createElement(M, {
                            className: "action-button",
                            onClick: l,
                            style: Qe.actionButton,
                            testID: v.replay
                        }, r.createElement(ie.a, {
                            style: Qe.icon
                        }))) : r.createElement("span", {
                            style: Qe.actionLink
                        }, r.createElement(M, {
                            className: "action-button",
                            onClick: s,
                            style: Qe.actionButton,
                            testID: v.play
                        }, r.createElement(re.a, {
                            style: Qe.icon
                        })))
                    }, n._renderCaptionsButton = function() {
                        var e = this.props,
                            t = e.areCaptionsShown,
                            n = e.hasCaptions,
                            o = e.onToggleCaptions;
                        if (n) return r.createElement("span", {
                            style: Qe.captionsLink
                        }, r.createElement(M, {
                            className: "captions-button",
                            onClick: o,
                            style: Qe.captionsButton(t),
                            testID: v.captions
                        }, r.createElement(J.a, {
                            style: Qe.icon
                        })))
                    }, n._renderAdBadge = function() {
                        if (this.props.isAd) {
                            var e = this.props.advertiserName;
                            return e ? r.createElement(U, {
                                className: "ad-badge",
                                params: {
                                    advertiserName: e
                                },
                                style: Qe.adBadge,
                                testID: v.ad
                            }, "Ad by %{advertiserName}") : r.createElement(U, {
                                className: "ad-badge",
                                style: Qe.adBadge,
                                testID: v.ad
                            }, "Ad")
                        }
                    }, n._renderSkipButton = function() {
                        var e = this.props,
                            t = e.durationSeconds,
                            n = e.isAd,
                            o = e.onAdSkip;
                        if (n) return r.createElement("span", {
                            style: Qe.skipLink
                        }, r.createElement(Re, {
                            durationSeconds: t,
                            onClick: o,
                            style: Qe.skipButton
                        }))
                    }, n._renderFullscreenButton = function() {
                        if (!this.props.shouldHideFullScreenButton) return this.props.isFullscreen ? r.createElement("span", {
                            style: Qe.fullscreenLink
                        }, r.createElement(M, {
                            className: "fullscreen-button",
                            onClick: this.props.onShrink,
                            style: Qe.fullscreenButton,
                            testID: v.shrink
                        }, r.createElement(X.a, {
                            style: Qe.icon
                        }))) : r.createElement("span", {
                            style: Qe.fullscreenLink
                        }, r.createElement(M, {
                            className: "fullscreen-button",
                            onClick: this.props.onFullscreen,
                            style: Qe.fullscreenButton,
                            testID: v.fullscreen
                        }, r.createElement($.a, {
                            style: Qe.icon
                        })))
                    }, n._renderTimePlayed = function() {
                        var e = this.props,
                            t = e.isLive,
                            n = e.currentTimeSeconds,
                            o = e.durationSeconds;
                        if (!t && o) return r.createElement(Me, {
                            currentTimeSeconds: n,
                            durationSeconds: o,
                            style: Qe.timePlayed
                        })
                    }, n._renderViewCount = function() {
                        var e = this.props,
                            t = e.viewCount,
                            n = e.viewerCount;
                        return n ? r.createElement(Ge.a, {
                            style: Ye.viewCount
                        }, r.createElement(De, {
                            viewerCount: n
                        })) : t ? r.createElement(Ge.a, {
                            style: Ye.viewCount
                        }, r.createElement(De, {
                            viewCount: t
                        })) : void 0
                    }, n._renderPublisherAttribution = function() {
                        var e = this.props,
                            t = e.publisherDisplayName,
                            n = e.publisherProfileImageUrl,
                            o = e.viewCount,
                            i = e.viewerCount;
                        if (t && n) {
                            var a = o || i ? r.createElement("span", {
                                "data-separator": !0,
                                style: Qe.publisherAttributionSeparator
                            }, "•") : void 0;
                            return r.createElement("div", {
                                "data-publisher-attribution": !0,
                                "data-testid": v.publisherAttribution,
                                style: Qe.publisherAttribution
                            }, r.createElement("img", {
                                alt: "",
                                src: n,
                                style: Qe.publisherAttributionProfileImage
                            }), r.createElement("span", {
                                style: Qe.publisherAttributionDisplayName
                            }, t), a)
                        }
                    }, n._renderPeriscopeLink = function() {
                        var e = this.props,
                            t = e.broadcastShareUrl,
                            n = e.shouldHidePeriscopeCta,
                            o = e.currentTimeSeconds,
                            i = e.isLive,
                            a = e.requestedTimecode;
                        if (t && !n) {
                            var s = new j.a(t);
                            return o > 0 && !i ? s.addSearchParam("t", o) : i && a && s.addSearchParam("t", a + o), r.createElement(me, {
                                onClick: this.props.onPause,
                                style: Qe.periscopeLink,
                                url: s.toString()
                            })
                        }
                    }, n.render = function() {
                        var e = this.props,
                            t = e.isMuted,
                            n = e.onMute,
                            o = e.onSetVolume,
                            i = e.onUnmute,
                            a = e.volume;
                        return r.createElement("div", {
                            "data-testid": v.controlBar,
                            style: Qe.base
                        }, this._renderScrubber(), r.createElement("div", {
                            style: Qe.bottomBar
                        }, r.createElement("div", {
                            style: Qe.leftContainer
                        }, this._renderActionButton(), this._renderAdBadge(), this._renderPublisherAttribution(), this._renderViewCount()), this._renderTimePlayed(), this._renderCaptionsButton(), r.createElement(je, {
                            isMuted: t,
                            onMute: n,
                            onSetVolume: o,
                            onUnmute: i,
                            onVolumeSliderClosed: this._handleVolumeSliderClosed,
                            onVolumeSliderOpened: this._handleVolumeSliderOpened,
                            volume: a
                        }), this._renderPeriscopeLink(), this._renderFullscreenButton(), this._renderSkipButton()))
                    }, t
                }(r.PureComponent);
            Je.propTypes = {};
            var qe = N(Je),
                Xe = n("/yvb"),
                Ze = n("ClFK"),
                $e = n("zytq"),
                et = n("+cpJ"),
                tt = "https://t.lv.twimg.com/live_video_cookies",
                nt = {
                    base: {
                        backgroundColor: "#CCD7DD",
                        height: "100%",
                        width: "100%",
                        fontFamily: b,
                        fontSize: "14px",
                        color: "#677886",
                        position: "absolute",
                        top: 0,
                        left: 0
                    },
                    playErrorIcon: {
                        fill: "#AAB8C2",
                        height: "46px",
                        width: "46px",
                        paddingBottom: "20px",
                        verticalAlign: "middle",
                        margin: "auto"
                    },
                    reloadIcon: {
                        width: "1.25em",
                        verticalAlign: "middle"
                    },
                    errorContainer: {
                        textAlign: "center",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 32px"
                    },
                    message: {
                        textAlign: "center"
                    },
                    allowCookiesButton: {
                        border: "1px solid white",
                        borderRadius: "3px",
                        color: C,
                        fontSize: "14px",
                        height: "30px",
                        padding: "0 11px",
                        width: "150px"
                    },
                    buttonContainer: {
                        flexGrow: 1
                    }
                },
                rt = function(e) {
                    function t() {
                        for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(o)) || this, s()(h()(t), "_receiveMessage", (function(e) {
                            "https://t.lv.twimg.com" === e.origin && "reload" === e.data.method && t.props.onReload()
                        })), s()(h()(t), "_handleAllowCookiesButtonClick", (function() {
                            window.open(tt)
                        })), s()(h()(t), "_renderMessage", (function() {
                            switch (t.props.error) {
                                case Ze.a.BROADCAST_ENDED_NO_REPLAY:
                                    return r.createElement(U, null, "This broadcast has ended.");
                                case Ze.a.BROADCAST_NOT_FOUND:
                                    return r.createElement(U, null, "This broadcast is not available.");
                                case Ze.a.LIVE_VIDEO_GEOBLOCK_ERROR:
                                    return r.createElement(U, null, "This broadcast is not available in your location.");
                                case Ze.a.MEDIA_GEOBLOCK_ERROR:
                                    return r.createElement(U, null, "This video is not available in your location.");
                                case Ze.a.LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR:
                                    var e = t.props.errorData.copyright_violation_copyright_holder_name;
                                    return r.createElement(U, {
                                        params: {
                                            holder: e
                                        }
                                    }, "Video not available due to a copyright claim by %{holder}");
                                case Ze.a.LIVE_VIDEO_GEOLOCATION_PROMPT:
                                    return r.createElement(U, null, "Sorry, this video is restricted in certain areas, please wait a few seconds as we acquire your location. Make sure to enable location settings in your browser.");
                                case Ze.a.MEDIA_NOT_SUPPORTED:
                                    return r.createElement(U, null, "We cannot play the video in this browser.  Please try a different web browser.");
                                case Ze.a.LIVE_VIDEO_NO_COOKIES_ERROR:
                                    return Object($e.c)() ? r.createElement(U, {
                                        isHtml: !0
                                    }, 'Playing this requires cookies from another Twitter domain (twimg.com). Allowing this briefly opens a new window and sets the cookie necessary to view this video. <a href="https://t.co/livevideobrowsers" style="color: #1DA1F2" target="_blank">Learn more</a>') : r.createElement(U, {
                                        isHtml: !0
                                    }, 'We cannot play the video in this browser.  Please try a different web browser or <a href="https://t.co/livevideobrowsers" style="color: #1DA1F2" target="_blank">update your cookie settings.</a>');
                                case Ze.a.DMCA_TAKEDOWN_ERROR:
                                    return r.createElement(U, null, "This media has been disabled in response to a report by the copyright owner");
                                case Ze.a.ORIGINAL_CONTEXT_DELETED:
                                    return r.createElement(U, null, "This video has been deleted.");
                                default:
                                    return r.createElement("div", null, r.createElement(U, null, "The media could not be played."), t._renderDebugLogDownloadMessage())
                            }
                        })), s()(h()(t), "_renderPlayError", (function() {
                            if (t.props.error === Ze.a.BROADCAST_NOT_FOUND) return r.createElement(u.a, {
                                style: nt.playErrorIcon
                            })
                        })), s()(h()(t), "_renderRetryButton", (function() {
                            var e = t.props,
                                n = e.canRetry,
                                o = e.error,
                                i = e.onReload;
                            if (!n) return null;
                            if (o !== Ze.a.LIVE_VIDEO_NO_COOKIES_ERROR) {
                                var a = r.createElement(ie.a, {
                                    styles: nt.reloadIcon
                                });
                                return r.createElement("span", {
                                    style: nt.buttonContainer
                                }, r.createElement(Xe.a, {
                                    backgroundColor: "transparent",
                                    borderColor: "transparent",
                                    icon: a,
                                    onPress: i
                                }))
                            }
                            return Object($e.c)() ? r.createElement("span", {
                                style: nt.buttonContainer
                            }, r.createElement(Xe.a, {
                                backgroundColor: "white",
                                borderColor: "blue",
                                color: "blue",
                                onPress: t._handleAllowCookiesButtonClick
                            }, r.createElement(U, null, "Allow"))) : void 0
                        })), s()(h()(t), "_renderDebugLogDownloadMessage", (function() {
                            if (et.a.debuggingEnabled) {
                                var e = et.a.getDebugFileLink(t.props.playerId);
                                return r.createElement("div", null, "Please file a ticket against MCI with this", " ", r.createElement("a", {
                                    download: "playerLog.txt",
                                    href: e
                                }, "file"), " ", "attached")
                            }
                        })), t
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        window.addEventListener("message", this._receiveMessage)
                    }, n.componentWillUnmount = function() {
                        window.removeEventListener("message", this._receiveMessage)
                    }, n.render = function() {
                        return r.createElement("div", {
                            style: nt.base
                        }, r.createElement("div", {
                            "data-testid": v.error,
                            style: nt.errorContainer
                        }, r.createElement("span", {
                            style: {
                                flexGrow: 10
                            }
                        }), this._renderPlayError(), r.createElement("span", {
                            style: nt.message
                        }, this._renderMessage()), this._renderRetryButton(), r.createElement("span", {
                            style: {
                                flexGrow: 10
                            }
                        })))
                    }, t
                }(r.PureComponent);
            rt.propTypes = {};
            var ot = rt,
                it = function() {
                    var e = !1;
                    try {
                        var t = {
                            get passive() {
                                e = !0
                            }
                        };
                        window.addEventListener("passiveoptiontest", t, t), window.removeEventListener("passiveoptiontest", t, t)
                    } catch (n) {
                        e = !1
                    }
                    return e
                },
                at = n("Wms4"),
                st = n("t62R"),
                lt = n("vCAy"),
                ut = function(e) {
                    function t() {
                        for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(o)) || this, s()(h()(t), "_renderTime", (function() {
                            var e = t.props,
                                n = e.advertiserName,
                                o = e.currentTimeSeconds,
                                i = e.durationSeconds,
                                a = e.isAd;
                            if (void 0 !== o && i && (t.props.isPlaying || o < i)) {
                                var s = Object(Ie.a)(i - o);
                                return a ? n ? r.createElement(U, {
                                    params: {
                                        advertiserName: n,
                                        timeRemaining: s
                                    },
                                    testID: v.duration
                                }, "Ad by %{advertiserName} · %{timeRemaining}") : r.createElement(U, {
                                    params: {
                                        timeRemaining: s
                                    },
                                    testID: v.duration
                                }, "Ad · %{timeRemaining}") : r.createElement(Le.a, {
                                    "data-testid": v.duration
                                }, s)
                            }
                            if (i) return r.createElement(Le.a, {
                                "data-testid": v.duration
                            }, Object(Ie.a)(i))
                        })), t
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n._renderViewCountBadge = function() {
                        var e = this.props,
                            t = e.viewCount,
                            n = e.viewerCount;
                        if (t || n) return r.createElement(at.a, {
                            key: "view-count-badge"
                        }, r.createElement(De, {
                            viewCount: t,
                            viewerCount: n
                        }))
                    }, n._renderDurationBadge = function() {
                        return this.props.isLive ? r.createElement(at.a, {
                            background: "red",
                            bold: !0,
                            key: "live-badge"
                        }, r.createElement(U, null, "LIVE")) : this._renderTime() ? r.createElement(at.a, {
                            key: "time-badge"
                        }, this._renderTime()) : void 0
                    }, n._renderBadges = function() {
                        return this.props.isGif ? r.createElement(at.a, null, r.createElement(st.b, {
                            weight: "bold"
                        }, "GIF")) : [this._renderDurationBadge(), this._renderViewCountBadge()].filter((function(e) {
                            return e
                        }))
                    }, n.render = function() {
                        return !this.props.isPlaying || this.props.isPreview || this.props.isGif ? r.createElement(lt.a, {
                            align: "left"
                        }, this._renderBadges()) : null
                    }, t
                }(r.PureComponent);
            ut.propTypes = {};
            var ct = N(ut),
                dt = n("hmHa"),
                pt = n("mXq/"),
                ht = function(e) {
                    return {
                        backgroundImage: "url(" + e + ")"
                    }
                },
                ft = We.a.create({
                    base: {
                        position: "absolute",
                        top: "0",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        cursor: "pointer"
                    }
                }),
                mt = Object(B.b)("Play"),
                vt = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return t = e.call.apply(e, [this].concat(r)) || this, s()(h()(t), "state", {
                            buttonSize: "normal"
                        }), s()(h()(t), "_handleLayout", (function(e) {
                            var n = e.nativeEvent.layout,
                                r = n.width,
                                o = n.height;
                            t.setState({
                                buttonSize: r < 175 || o < 175 ? "small" : "normal"
                            })
                        })), t
                    }
                    return i()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.accessibilityLabel,
                            n = e.onClick,
                            o = e.src,
                            i = "string" == typeof o && o.length > 0 ? [ft.base, ht(o)] : ft.base;
                        return r.createElement(Ge.a, {
                            accessibilityLabel: t,
                            accessibilityRole: "button",
                            onClick: n,
                            onLayout: this._handleLayout,
                            style: i,
                            testID: v.poster
                        }, this.props.showPlayButton && r.createElement("div", {
                            "data-testid": v.posterPlayBtn
                        }, r.createElement(pt.a, {
                            accessibilityLabel: mt,
                            onPress: n,
                            size: this.state.buttonSize
                        })))
                    }, t
                }(r.PureComponent);
            vt.propTypes = {};
            var Et = vt,
                _t = n("iye6"),
                yt = n.n(_t),
                gt = We.a.create({
                    timecodeIcon: {
                        marginRight: "4px",
                        marginBottom: "1px",
                        height: "1em",
                        width: "1em"
                    }
                }),
                bt = function(e) {
                    function t() {
                        for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(o)) || this, s()(h()(t), "_renderTimecodeBadge", (function() {
                            var e = t.props.requestedTimecode;
                            if (e && e >= 1) return r.createElement(at.a, {
                                key: "timecode-badge"
                            }, r.createElement(Le.a, {
                                "data-testid": v.timecode
                            }, r.createElement(yt.a, {
                                style: gt.timecodeIcon
                            }), Object(Ie.a)(e)))
                        })), t
                    }
                    return i()(t, e), t.prototype.render = function() {
                        var e = [this._renderTimecodeBadge()].filter((function(e) {
                            return !!e
                        }));
                        return e.length > 0 ? r.createElement(lt.a, {
                            align: "right"
                        }, e) : null
                    }, t
                }(r.PureComponent);
            bt.propTypes = {};
            var St = N(bt),
                Ct = n("lklz"),
                Tt = n("ArJX"),
                Ot = 2e3,
                wt = {
                    base: {
                        cursor: "pointer",
                        height: "100%",
                        width: "100%",
                        position: "relative",
                        color: T,
                        fontSize: S,
                        fontWeight: O,
                        fontFamily: b,
                        lineHeight: "normal",
                        transform: "translateZ(0)"
                    },
                    bufferingIndicator: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        height: "60px",
                        width: "60px",
                        transform: "translate(-50%, -50%)"
                    },
                    callToAction: {
                        position: "absolute",
                        left: "8px",
                        top: "8px"
                    },
                    skipButton: function(e) {
                        return {
                            position: "absolute",
                            right: "11px",
                            bottom: "2px",
                            lineHeight: "26px",
                            backgroundColor: e ? "rgba(0,0,0,0.5)" : "transparent",
                            borderRadius: "4px"
                        }
                    },
                    wrapper: {
                        position: "absolute",
                        height: "100%",
                        width: "100%"
                    }
                },
                Rt = function(e) {
                    function t(t) {
                        var n;
                        n = e.call(this, t) || this, s()(h()(n), "handlePlayerApi", (function(e) {
                            n.videoPlayer = e, e.subscribe(n._handlePlayerStateChange), n.props.setPlayerApi && n.props.setPlayerApi(e)
                        })), s()(h()(n), "_attachTouchStartListener", (function(e) {
                            e && !n.state.isTouchStartListenerAttached && (e.addEventListener("touchstart", n._handleTouchStart, !!it() && {
                                passive: !1
                            }), n.setState({
                                isTouchStartListenerAttached: !0
                            }))
                        })), s()(h()(n), "_detachTouchStartListener", (function(e) {
                            !e && n.backgroundElement && n.state.isTouchStartListenerAttached && (n.backgroundElement.removeEventListener("touchstart", n._handleTouchStart, !!it() && {
                                passive: !1
                            }), n.setState({
                                isTouchStartListenerAttached: !1
                            }))
                        })), s()(h()(n), "_setVideoRef", (function(e) {
                            n._attachTouchStartListener(e), n._detachTouchStartListener(e), n.backgroundElement = e
                        })), s()(h()(n), "_setContainerRef", (function(e) {
                            n.containerDomElement = e
                        })), s()(h()(n), "_handlePlayerStateChange", (function(e) {
                            var t = e.tracks.find((function(t) {
                                    return t.id === e.currentTrackId
                                })) || {},
                                r = e.tracks.find((function(t) {
                                    return t.id === e.source.trackId
                                })) || {},
                                o = e.controls,
                                i = o.isHidden,
                                a = o.isPosterShown,
                                s = o.isReplayButtonShown,
                                l = o.playState,
                                u = o.scrubToFraction,
                                c = e.errorInfo && e.errorInfo.canRetry,
                                d = l === dt.j.PLAY_REQUESTED,
                                p = a ? r.durationMs : t.durationMs,
                                h = p ? Math.round(p / 1e3) : void 0,
                                f = e.features && e.features.isLiveTimecodeEnabled ? t.requestedTimecode : void 0,
                                m = f > 0 ? f : t.replayEditedStartTime,
                                v = void 0 !== u ? u * p : t.currentTimeMs,
                                E = e.errorData || {};
                            n.setState(Object.assign({}, n.state, {
                                advertiserName: t.advertiserName,
                                areCaptionsShown: e.areCaptionsShown,
                                broadcastShareUrl: t.broadcastShareUrl,
                                canRetry: c,
                                contentType: t.contentType,
                                currentTimeSeconds: Math.round(v / 1e3) || 0,
                                cta: t.cta,
                                displayType: t.displayType,
                                durationSeconds: h,
                                liveClickthrough: n.props.displayOptions.liveClickthrough,
                                error: e.error,
                                errorData: E,
                                eventShareUrl: e.eventUrl,
                                hasCaptions: t.hasCaptions,
                                isBuffering: t.isBuffering,
                                isControlsHidden: i,
                                isFullscreen: e.fullscreen.isFullscreen,
                                isLive: t.isLive,
                                isMuted: e.isMuted,
                                isPlaying: e.isPlaying,
                                isPlayRequested: d,
                                isPosterShown: a,
                                isPreview: e.isPreview,
                                isReplayButtonShown: s,
                                playerId: e.playerId,
                                posterImage: e.posterImage,
                                publisherDisplayName: t.publisherDisplayName,
                                publisherProfileImageUrl: t.publisherProfileImageUrl,
                                requestedTimecode: m,
                                shouldHideFullScreenButton: n.props.displayOptions.hideFullScreenButton,
                                shouldHidePeriscopeCta: t.unavailableInPeriscope || n.props.displayOptions.hidePeriscopeLink,
                                showEventCta: n.props.displayOptions.showEventCta,
                                tweetId: e.source && e.source.type === Ct.a.TWEET ? e.source.id : void 0,
                                viewCount: a ? r.viewCount : t.viewCount,
                                viewerCount: a ? r.viewerCount : t.viewerCount,
                                volume: e.volume
                            }))
                        })), s()(h()(n), "_handleMouseDown", (function() {
                            n.backgroundElement.addEventListener("mouseup", n._handleMouseUp)
                        })), s()(h()(n), "_handleMouseMove", (function() {
                            n.backgroundElement.removeEventListener("mousemove", n._handleMouseMove), n.backgroundElement.removeEventListener("mouseup", n._handleMouseUp)
                        })), s()(h()(n), "_handleMouseUp", (function(e) {
                            n.backgroundElement.removeEventListener("mousemove", n._handleMouseMove), n.backgroundElement.removeEventListener("mouseup", n._handleMouseUp), n._handleBackgroundTap()
                        })), s()(h()(n), "_handleBackgroundTap", (function() {
                            var e = n.state.liveClickthrough && n.state.liveClickthrough.enabled && n.state.isLive && n.state.isPlaying;
                            n.props.displayOptions.disableBackgroundClick || (n.state.isReplayButtonShown ? n._handleReplay() : n.state.isPreview && n.state.isPlaying && "gif" === n.state.contentType ? n._handlePause() : n.state.isPreview || !n.state.isPlaying ? n._handlePlay() : e ? (n._handleLiveClickthrough(), n._handlePause()) : n._handlePause(), n._handleShowControls())
                        })), s()(h()(n), "_handlePlay", (function() {
                            n.videoPlayer.play()
                        })), s()(h()(n), "_handlePause", (function() {
                            n.videoPlayer.pause()
                        })), s()(h()(n), "_handleReplay", (function() {
                            n.videoPlayer.replay()
                        })), s()(h()(n), "_handleMute", (function() {
                            n.videoPlayer.mute()
                        })), s()(h()(n), "_handleUnmute", (function() {
                            n.videoPlayer.unmute()
                        })), s()(h()(n), "_handleScrubToFraction", (function(e) {
                            n.videoPlayer.scrubToFraction(e)
                        })), s()(h()(n), "_handleSetVolume", (function(e) {
                            n.videoPlayer.setVolume(e)
                        })), s()(h()(n), "_handleInteractionEnd", (function() {
                            n.setState({
                                isInteracting: !1
                            }), n._handleShowControls()
                        })), s()(h()(n), "_handleInteractionStart", (function() {
                            n.setState({
                                isInteracting: !0
                            })
                        })), s()(h()(n), "_handleFullscreen", (function() {
                            n.videoPlayer.fullScreen(n.containerDomElement)
                        })), s()(h()(n), "_handleShrink", (function() {
                            n.videoPlayer.exitFullScreen()
                        })), s()(h()(n), "_handleShowControls", (function() {
                            n.state.isPosterShown || n.state.isPreview && !n.state.isPlaying || "gif" === n.state.contentType || (n.state.isControlsHidden && n.videoPlayer.showControls(), clearInterval(n.controlHideTimer), n.controlHideTimer = setInterval(n._handleHideControls, Ot))
                        })), s()(h()(n), "_handleHideControls", (function() {
                            n.state.isPlaying && !n.state.isInteracting && "gif" !== n.state.contentType && (n.videoPlayer.hideControls(), clearInterval(n.controlHideTimer))
                        })), s()(h()(n), "_handleTouchStart", (function(e) {
                            n.backgroundElement.addEventListener("touchend", n._handleTouchEnd), n.backgroundElement.addEventListener("touchmove", n._handleTouchMove)
                        })), s()(h()(n), "_handleTouchMove", (function(e) {
                            n._cleanupTouchListeners()
                        })), s()(h()(n), "_handleTouchEnd", (function(e) {
                            e.preventDefault(), n._cleanupTouchListeners(), n.state.isControlsHidden && "gif" !== n.state.contentType || n._handleBackgroundTap(), n._handleShowControls(e)
                        })), s()(h()(n), "_handleToggleCaptions", (function() {
                            n.videoPlayer.toggleCaptions()
                        })), s()(h()(n), "_handleAdSkip", (function() {
                            n.videoPlayer.nextTrack()
                        })), s()(h()(n), "_handleReload", (function() {
                            n.videoPlayer.reload()
                        })), s()(h()(n), "_handleCtaClick", (function() {
                            n.videoPlayer.callToActionClicked()
                        })), s()(h()(n), "_handleCtaImpression", (function() {
                            n.videoPlayer.callToActionImpression()
                        })), s()(h()(n), "_handleLiveClickthrough", (function() {
                            var e = n.state.liveClickthrough.url || n.state.eventShareUrl || n.state.broadcastShareUrl;
                            e && (window.open(e, n.state.liveClickthrough.target || "_blank"), n.videoPlayer.liveClickthroughClicked())
                        })), s()(h()(n), "_handleContextMenu", (function(e) {
                            if (e.preventDefault(), n.state.tweetId) {
                                n.contextMenu || (n.contextMenu = new Q(n.state.tweetId));
                                var t = e.nativeEvent.pageY - window.scrollY,
                                    r = e.nativeEvent.pageX - window.scrollX;
                                n.contextMenu.openAt(r, t)
                            }
                        })), s()(h()(n), "_renderPosterImage", (function() {
                            if (n.state.isPosterShown && !n.props.displayOptions.hidePosterImage) return r.createElement(Et, {
                                accessibilityLabel: n.props.accessibilityLabel,
                                onClick: n._handlePlay,
                                showPlayButton: !n.state.isPlayRequested,
                                src: n.state.posterImage
                            })
                        })), s()(h()(n), "_renderCta", (function() {
                            var e = n.state.cta;
                            if (e) return new j.a(e.url).isSafe() && (!n.state.isPosterShown && e.type !== A.b.EVENT || e.type === A.b.EVENT && n.state.showEventCta) ? r.createElement(K, {
                                isHidden: n.state.isControlsHidden,
                                label: e.label,
                                onClick: n._handleCtaClick,
                                onImpression: n._handleCtaImpression,
                                style: wt.callToAction,
                                type: e.type,
                                url: e.url
                            }) : void 0
                        })), s()(h()(n), "_renderControlBar", (function() {
                            if (!n.state.isPosterShown && "gif" !== n.state.contentType && !n.props.displayOptions.hideControlBar) return r.createElement(qe, {
                                advertiserName: n.state.advertiserName,
                                areCaptionsShown: n.state.areCaptionsShown,
                                broadcastShareUrl: n.state.broadcastShareUrl,
                                contentType: n.state.contentType,
                                currentTimeSeconds: n.state.currentTimeSeconds,
                                durationSeconds: n.state.durationSeconds,
                                hasCaptions: n.state.hasCaptions,
                                isAd: "ad" === n.state.displayType,
                                isFullscreen: n.state.isFullscreen,
                                isHidden: n.state.isControlsHidden,
                                isLive: n.state.isLive,
                                isMuted: n.state.isMuted,
                                isPlaying: n.state.isPlaying,
                                isReplayButtonShown: n.state.isReplayButtonShown,
                                onAdSkip: n._handleAdSkip,
                                onFullscreen: n._handleFullscreen,
                                onInteractionEnd: n._handleInteractionEnd,
                                onInteractionStart: n._handleInteractionStart,
                                onMute: n._handleMute,
                                onPause: n._handlePause,
                                onPlay: n._handlePlay,
                                onReplay: n._handleReplay,
                                onScrubToFraction: n._handleScrubToFraction,
                                onSetVolume: n._handleSetVolume,
                                onShrink: n._handleShrink,
                                onToggleCaptions: n._handleToggleCaptions,
                                onUnmute: n._handleUnmute,
                                publisherDisplayName: n.state.publisherDisplayName,
                                publisherProfileImageUrl: n.state.publisherProfileImageUrl,
                                requestedTimecode: n.state.requestedTimecode,
                                shouldHideFullScreenButton: n.state.shouldHideFullScreenButton,
                                shouldHidePeriscopeCta: n.state.shouldHidePeriscopeCta,
                                viewCount: n.state.viewCount,
                                viewerCount: n.state.viewerCount,
                                volume: n.state.volume
                            })
                        })), s()(h()(n), "_renderLeftBadges", (function() {
                            if (!n.props.displayOptions.hideLeftBadges) return r.createElement(ct, {
                                advertiserName: n.state.advertiserName,
                                currentTimeSeconds: n.state.currentTimeSeconds,
                                durationSeconds: n.state.durationSeconds,
                                isAd: "ad" === n.state.displayType,
                                isGif: "gif" === n.state.contentType,
                                isHidden: !n.state.isControlsHidden && "gif" !== n.state.contentType,
                                isLive: n.state.isLive,
                                isPlaying: n.state.isPlaying,
                                isPreview: n.state.isPreview,
                                viewCount: n.state.viewCount,
                                viewerCount: n.state.viewerCount
                            })
                        })), s()(h()(n), "_renderRightBadges", (function() {
                            if (!n.props.displayOptions.hideRightBadges) return r.createElement(St, {
                                isHidden: !n.state.isControlsHidden,
                                requestedTimecode: n.state.requestedTimecode
                            })
                        })), s()(h()(n), "_renderBufferingIndicator", (function() {
                            if (n.state.isBuffering) return r.createElement(g, {
                                style: wt.bufferingIndicator
                            })
                        })), s()(h()(n), "_renderOverlay", (function() {
                            if (n.videoPlayer) return n.props.controls ? n.state.error ? r.createElement(ot, {
                                canRetry: n.state.canRetry,
                                error: n.state.error,
                                errorData: n.state.errorData,
                                key: Object(B.a)(),
                                onReload: n._handleReload,
                                playerId: n.state.playerId
                            }) : r.createElement("div", {
                                key: Object(B.a)()
                            }, n._renderPosterImage(), n._renderBufferingIndicator(), n._renderCta(), n._renderControlBar(), n._renderLeftBadges(), n._renderRightBadges(), n._renderSkipButton()) : void 0
                        }));
                        var o = n.props.durationMs,
                            i = o ? Math.round(o / 1e3) : void 0;
                        return n.state = {
                            isControlsHidden: !0,
                            isInteracting: !1,
                            isPosterShown: !0,
                            isPreview: !0,
                            posterImage: n.props.poster,
                            viewCount: n.props.viewCount,
                            contentType: n.props.contentType,
                            durationSeconds: i
                        }, Object(B.d)(n.props.shortNumberFormatter), n
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.componentWillUnmount = function() {
                        try {
                            this.videoPlayer.teardown(), this.contextMenu && (this.contextMenu.teardown(), this.contextMenu = void 0)
                        } catch (e) {}
                    }, n._cleanupTouchListeners = function() {
                        this.backgroundElement.removeEventListener("touchend", this._handleTouchEnd), this.backgroundElement.removeEventListener("touchmove", this._handleTouchMove)
                    }, n._renderSkipButton = function() {
                        if ("ad" === this.state.displayType && !this.state.isPosterShown) return r.createElement(Re, {
                            durationSeconds: this.state.durationSeconds,
                            onClick: this._handleAdSkip,
                            style: wt.skipButton(this.state.isControlsHidden)
                        })
                    }, n.render = function() {
                        var e = this.props,
                            t = e.VideoComponent,
                            n = Object.keys(this.props).filter((function(e) {
                                return Tt.b[e]
                            })).reduce((function(t, n) {
                                return t[n] = e[n], t
                            }), {});
                        return n.setPlayerApi = this.handlePlayerApi, r.createElement("div", {
                            onContextMenu: this._handleContextMenu,
                            onMouseLeave: this._handleHideControls,
                            onMouseMove: this._handleShowControls,
                            ref: this._setContainerRef,
                            style: wt.base
                        }, r.createElement("div", {
                            onMouseDown: this._handleMouseDown,
                            ref: this._setVideoRef,
                            role: "button",
                            style: wt.wrapper,
                            tabIndex: "0"
                        }, r.createElement(t, n)), this._renderOverlay())
                    }, t
                }(r.PureComponent);
            s()(Rt, "defaultProps", Tt.a), Rt.propTypes = {};
            var It = Rt,
                Pt = d((function(e) {
                    return r.createElement(It, e)
                }));
            t.default = Pt
        },
        Noa2: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M15.644 11.58L10.43 8.26c-.155-.1-.35-.105-.51-.018-.16.088-.26.256-.26.438v6.64c0 .183.1.35.26.438.074.04.157.062.24.062.093 0 .187-.026.27-.078l5.214-3.32c.144-.09.23-.25.23-.42s-.086-.332-.23-.423zM2.5 22.25c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06l5.25-5.25c.293-.294.768-.294 1.06 0s.294.767 0 1.06l-5.25 5.25c-.146.147-.338.22-.53.22zM15.208 9.542c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06L20.97 1.97c.293-.293.768-.293 1.06 0s.294.768 0 1.06l-6.29 6.293c-.148.146-.34.22-.532.22z"
                }), o.default.createElement("path", {
                    d: "M3.815 17.062c-.27 0-.53-.146-.664-.4C2.4 15.236 2 13.623 2 12 2 6.486 6.486 2 12 2c1.592 0 3.176.384 4.582 1.11.368.188.512.64.322 1.01-.19.368-.643.515-1.01.32-1.21-.624-2.52-.94-3.894-.94-4.687 0-8.5 3.813-8.5 8.5 0 1.38.338 2.75.978 3.96.193.367.053.82-.313 1.015-.112.06-.232.087-.35.087zM12 22c-1.59 0-3.175-.384-4.58-1.11-.37-.188-.513-.64-.323-1.01.19-.366.644-.514 1.01-.32 1.21.624 2.52.94 3.893.94 4.687 0 8.5-3.813 8.5-8.5 0-1.364-.33-2.72-.957-3.922-.19-.367-.05-.82.318-1.012.37-.19.82-.05 1.013.318C21.61 8.8 22 10.396 22 12c0 5.514-4.486 10-10 10z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        Paks: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M10 20.5c0 .828-.672 1.5-1.5 1.5h-2c-.828 0-1.5-.672-1.5-1.5v-17C5 2.672 5.672 2 6.5 2h2c.828 0 1.5.672 1.5 1.5v17zm9 0c0 .828-.672 1.5-1.5 1.5h-2c-.828 0-1.5-.672-1.5-1.5v-17c0-.828.672-1.5 1.5-1.5h2c.828 0 1.5.672 1.5 1.5v17z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        RdYg: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M20.436 11.37L5.904 2.116c-.23-.147-.523-.158-.762-.024-.24.132-.39.384-.39.657v18.5c0 .273.15.525.39.657.112.063.236.093.36.093.14 0 .28-.04.402-.117l14.53-9.248c.218-.138.35-.376.35-.633 0-.256-.132-.495-.348-.633z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        XsvF: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M20.5 2h-17C2.26 2 1.25 3.008 1.25 4.247v15.507C1.25 20.992 2.26 22 3.5 22h17c1.24 0 2.25-1.008 2.25-2.246V4.247C22.75 3.007 21.74 2 20.5 2zM9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.387-3.213 3.26-3.213 1.26 0 2.074.53 2.62 1.29L10.493 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.685 1.685 1.685c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.803-1.368 1.395-2.737 1.395zm6.583 0c-1.765 0-3.186-1.35-3.186-3.196v-.02c0-1.8 1.386-3.213 3.258-3.213 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.695-1.356-.695-.93 0-1.684.754-1.684 1.684s.754 1.685 1.684 1.685c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.803-1.368 1.395-2.737 1.395z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        YKqM: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            }));
            n("p+GS"), n("Bu8c"), n("NlgC"), n("LnO1"), n("3eMz"), n("dtAy"), n("DB+v");

            function r(e) {
                return Object.keys(e).map((function(t) {
                    var n = void 0 === e[t] ? "" : encodeURIComponent(e[t]);
                    return encodeURIComponent(t) + "=" + n
                })).join("&")
            }
            var o = function() {
                function e(e) {
                    try {
                        this.parser = new URL(e)
                    } catch (t) {
                        this.parser = document.createElement("a"), this.parser.href = e
                    }
                }
                var t = e.prototype;
                return t.getHostname = function() {
                    return this.parser.hostname
                }, t.getPath = function() {
                    return this.parser.pathname
                }, t.isSafe = function() {
                    return !!this.parser.protocol.match(/^https?:$/)
                }, t.addSearchParam = function(e, t) {
                    this.parser.search ? this.parser.search = this.parser.search + "&" + e + "=" + t : this.parser.search = "?" + e + "=" + t
                }, t.toString = function() {
                    return this.parser.href
                }, e
            }();
            t.a = o
        },
        Yfpf: function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e % 60,
                    n = t < 10 ? "0" + t : t,
                    r = (e - t) / 60 % 60,
                    o = Math.floor(e / 3600),
                    i = r < 10 && o ? "0" + r : r;
                return o ? o + ":" + i + ":" + n : i + ":" + n
            }
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return a
            }));
            var o = /^[0-9]{1,6}(\.[0-9]+)?$/,
                i = /^([0-9]{0,3}[hH])?([0-9]{0,2}[mM])?([0-9]{0,6}[sS])?$/,
                a = function(e) {
                    if (o.test(e)) return +e;
                    var t = i.exec(e);
                    if (t && t[0]) {
                        var n = t[1],
                            r = t[2],
                            a = t[3],
                            s = 0;
                        return n && (s += 3600 * +n.slice(0, -1)), r && (s += 60 * +r.slice(0, -1)), a && (s += +a.slice(0, -1)), s
                    }
                }
        },
        "ZeN/": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return i
            }));
            var r = {
                    LOW: 32e4,
                    MEDIUM: 832e3,
                    HIGH: 2176e3
                },
                o = {
                    EVENT: "event",
                    VISIT: "url",
                    WATCH: "watch",
                    IMAGE: "image"
                },
                i = ["cover", "contain"]
        },
        azNW: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M20.654 12l3.032-3.032c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-3.033 3.03-3.032-3.03c-.292-.294-.767-.294-1.06 0s-.293.767 0 1.06L18.533 12 15.5 15.032c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l3.033-3.03 3.032 3.03c.146.147.338.22.53.22s.384-.072.53-.22c.293-.292.293-.767 0-1.06L20.655 12zm-8.401 10.75c-.166 0-.33-.055-.466-.162L4.74 17H2.254c-1.24 0-2.25-1.01-2.25-2.25v-5.5C.003 8.01 1.013 7 2.253 7H4.74l7.047-5.588c.225-.18.533-.215.792-.087.258.125.423.387.423.675v20c0 .288-.165.55-.424.675-.104.05-.216.075-.327.075zm-10-14.25c-.413 0-.75.337-.75.75v5.5c0 .413.337.75.75.75h2.75c.17 0 .333.058.466.162l6.033 4.786V3.552L5.47 8.338c-.134.104-.298.162-.467.162h-2.75z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        fBgJ: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.default = void 0;
            var o = ((r = n("avmV")) && r.__esModule ? r : {
                default: r
            }).default.create({
                root: {
                    display: "inline-block",
                    fill: "currentcolor",
                    height: "1.25em",
                    maxWidth: "100%",
                    position: "relative",
                    userSelect: "none",
                    textAlignVertical: "text-bottom"
                }
            });
            t.default = o
        },
        hmHa: function(e, t, n) {
            "use strict";
            n.d(t, "j", (function() {
                return r
            })), n.d(t, "i", (function() {
                return o
            })), n.d(t, "e", (function() {
                return i
            })), n.d(t, "o", (function() {
                return a
            })), n.d(t, "L", (function() {
                return s
            })), n.d(t, "n", (function() {
                return l
            })), n.d(t, "K", (function() {
                return u
            })), n.d(t, "p", (function() {
                return c
            })), n.d(t, "M", (function() {
                return d
            })), n.d(t, "w", (function() {
                return p
            })), n.d(t, "T", (function() {
                return h
            })), n.d(t, "v", (function() {
                return f
            })), n.d(t, "S", (function() {
                return m
            })), n.d(t, "m", (function() {
                return v
            })), n.d(t, "J", (function() {
                return E
            })), n.d(t, "r", (function() {
                return _
            })), n.d(t, "O", (function() {
                return y
            })), n.d(t, "s", (function() {
                return g
            })), n.d(t, "P", (function() {
                return b
            })), n.d(t, "z", (function() {
                return S
            })), n.d(t, "W", (function() {
                return C
            })), n.d(t, "q", (function() {
                return T
            })), n.d(t, "N", (function() {
                return O
            })), n.d(t, "x", (function() {
                return w
            })), n.d(t, "U", (function() {
                return R
            })), n.d(t, "y", (function() {
                return I
            })), n.d(t, "V", (function() {
                return P
            })), n.d(t, "g", (function() {
                return k
            })), n.d(t, "F", (function() {
                return M
            })), n.d(t, "t", (function() {
                return A
            })), n.d(t, "Q", (function() {
                return L
            })), n.d(t, "l", (function() {
                return x
            })), n.d(t, "I", (function() {
                return D
            })), n.d(t, "k", (function() {
                return N
            })), n.d(t, "H", (function() {
                return B
            })), n.d(t, "d", (function() {
                return V
            })), n.d(t, "D", (function() {
                return U
            })), n.d(t, "u", (function() {
                return H
            })), n.d(t, "R", (function() {
                return F
            })), n.d(t, "b", (function() {
                return j
            })), n.d(t, "B", (function() {
                return z
            })), n.d(t, "c", (function() {
                return W
            })), n.d(t, "C", (function() {
                return K
            })), n.d(t, "h", (function() {
                return G
            })), n.d(t, "G", (function() {
                return Q
            })), n.d(t, "a", (function() {
                return Y
            })), n.d(t, "A", (function() {
                return J
            })), n.d(t, "f", (function() {
                return q
            })), n.d(t, "E", (function() {
                return X
            }));
            var r = {
                    PAUSE_REQUESTED: "PAUSE_REQUESTED",
                    PLAY_REQUESTED: "PLAY_REQUESTED"
                },
                o = {
                    MUTE_REQUESTED: "MUTE_REQUESTED",
                    UNMUTE_REQUESTED: "UNMUTE_REQUESTED"
                },
                i = {
                    CAPTIONS_ON_REQUESTED: "CAPTIONS_ON_REQUESTED",
                    CAPTIONS_OFF_REQUESTED: "CAPTIONS_OFF_REQUESTED",
                    CAPTIONS_RESET_REQUESTED: "CAPTIONS_RESET_REQUESTED"
                },
                a = "REQUEST_PLAY",
                s = function(e) {
                    return {
                        type: a,
                        playerId: e
                    }
                },
                l = "REQUEST_PAUSE",
                u = function(e) {
                    return {
                        type: l,
                        playerId: e
                    }
                },
                c = "REQUEST_REPLAY",
                d = function(e) {
                    return {
                        type: c,
                        playerId: e
                    }
                },
                p = "VIDEO_PLAYED",
                h = function(e) {
                    return {
                        type: p,
                        playerId: e
                    }
                },
                f = "VIDEO_PAUSED",
                m = function(e) {
                    return {
                        type: f,
                        playerId: e
                    }
                },
                v = "REQUEST_MUTE",
                E = function(e) {
                    return {
                        type: v,
                        playerId: e
                    }
                },
                _ = "REQUEST_UNMUTE",
                y = function(e) {
                    return {
                        type: _,
                        playerId: e
                    }
                },
                g = "REQUEST_VOLUME_CHANGE",
                b = function(e, t) {
                    return {
                        type: g,
                        volume: t,
                        playerId: e
                    }
                },
                S = "VIDEO_VOLUME_CHANGED",
                C = function(e, t, n) {
                    return {
                        type: S,
                        isMuted: t,
                        volume: n,
                        playerId: e
                    }
                },
                T = "REQUEST_SCRUB_TO_FRACTION",
                O = function(e, t) {
                    return {
                        type: T,
                        fraction: t,
                        playerId: e
                    }
                },
                w = "VIDEO_SEEKED",
                R = function(e) {
                    return {
                        type: w,
                        playerId: e
                    }
                },
                I = "VIDEO_SEEKING",
                P = function(e) {
                    return {
                        type: I,
                        playerId: e
                    }
                },
                k = "HIDE_CONTROLS",
                M = function(e) {
                    return {
                        type: k,
                        playerId: e
                    }
                },
                A = "SHOW_CONTROLS",
                L = function(e) {
                    return {
                        type: A,
                        playerId: e
                    }
                },
                x = "REQUEST_CAPTIONS_ON",
                D = function(e, t) {
                    return void 0 === t && (t = !0), {
                        type: x,
                        isUserSet: t,
                        playerId: e
                    }
                },
                N = "REQUEST_CAPTIONS_OFF",
                B = function(e, t) {
                    return void 0 === t && (t = !0), {
                        type: N,
                        isUserSet: t,
                        playerId: e
                    }
                },
                V = "CAPTIONS_TOGGLED",
                U = function(e, t) {
                    return {
                        type: V,
                        areCaptionsShown: t,
                        playerId: e
                    }
                },
                H = "UPDATE_VISIBILITY",
                F = function(e, t, n, r) {
                    return {
                        type: H,
                        playerId: e,
                        percentVisible: t,
                        percentOfViewportOccupied: n,
                        sizesInfo: r
                    }
                },
                j = "CALL_TO_ACTION_CLICKED",
                z = function(e) {
                    return {
                        type: j,
                        playerId: e
                    }
                },
                W = "CALL_TO_ACTION_IMPRESSION",
                K = function(e) {
                    return {
                        type: W,
                        playerId: e
                    }
                },
                G = "LIVE_CLICKTHROUGH_CLICKED",
                Q = function(e) {
                    return {
                        type: G,
                        playerId: e
                    }
                },
                Y = "AUTOPLAY_DISABLED",
                J = function(e) {
                    return {
                        type: Y,
                        playerId: e
                    }
                },
                q = "DATA_USAGE_COLLECTED",
                X = function(e, t) {
                    return {
                        type: q,
                        playerId: e,
                        bytes: t
                    }
                }
        },
        i9V9: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return i
            })), n.d(t, "e", (function() {
                return a
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "a", (function() {
                return l
            }));
            n("rmZQ"), n("BPcy"), n("LnO1"), n("3eMz"), n("DB+v"), n("p+GS"), n("dtAy");
            var r, o = {},
                i = function(e) {
                    r = e
                },
                a = function(e) {
                    void 0 === e && (e = {}), o = e
                },
                s = function(e) {
                    return r ? r(e) : e.toString()
                },
                l = function() {
                    return Object.keys(o).length > 0
                };
            t.b = function(e, t) {
                void 0 === t && (t = {});
                var n = o[e] || e;
                return Object.keys(t).reduce((function(e, n) {
                    var r = new RegExp("%{" + n + "}", "g");
                    return e.replace(r, t[n])
                }), n)
            }
        },
        iye6: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M17.273 15.78c-.148 0-.298-.045-.43-.137l-4.326-3.03c-.2-.14-.32-.368-.32-.613V7.89c0-.414.336-.75.75-.75s.75.336.75.75v3.72l4.007 2.806c.34.237.422.705.185 1.044-.147.208-.38.32-.617.32z"
                }), o.default.createElement("path", {
                    d: "M12.947 1.25c-4.633 0-8.713 3.002-10.172 7.298L1.51 5.538c-.158-.382-.594-.564-.98-.403-.382.16-.56.6-.4.982L2.175 11c.08.19.233.338.424.41.095.037.194.053.294.05.102-.005.203-.03.296-.074l4.778-2.282c.374-.178.532-.625.354-1-.178-.374-.63-.53-1-.352L4.103 9.29c1.175-3.837 4.764-6.54 8.845-6.54 5.1 0 9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25c-3.337 0-6.428-1.81-8.066-4.72-.2-.36-.658-.488-1.02-.285-.36.203-.488.66-.285 1.02 1.903 3.383 5.495 5.484 9.373 5.484 5.928 0 10.75-4.823 10.75-10.75S18.874 1.25 12.948 1.25z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        jHWr: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M3.983 13.605c0 .414.336.75.75.75H8.57l-6.357 6.357c-.297.297-.297.777 0 1.074s.777.297 1.074 0l6.357-6.357v3.828c0 .414.336.75.75.75s.75-.336.75-.75v-5.653c0-.414-.336-.75-.75-.75h-5.66c-.415 0-.75.336-.75.75zm16.73-11.392L14.355 8.57V4.74c0-.413-.336-.75-.75-.75s-.75.337-.75.75v5.654c0 .414.336.75.75.75h5.653c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H15.43l6.357-6.357c.148-.148.223-.343.223-.537s-.074-.39-.223-.537c-.297-.297-.777-.297-1.074 0z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        k8e1: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M12 2C6.486 2 2 6.486 2 12c0 .414.336.75.75.75s.75-.336.75-.75c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5c-2.886 0-5.576-1.5-7.13-3.888l2.983.55c.402.08.798-.193.874-.6.076-.408-.194-.8-.6-.874l-4.663-.86c-.204-.04-.414.01-.58.132-.168.123-.276.31-.3.515l-.57 4.706c-.05.412.242.785.653.835.03.004.06.006.09.006.375 0 .698-.278.745-.66l.32-2.63C5.673 20.36 8.728 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        kjXU: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M19.75 22H4.25C3.012 22 2 20.988 2 19.75V4.25C2 3.013 3.012 2 4.25 2h15.5C20.987 2 22 3.013 22 4.25v15.5c0 1.238-1.013 2.25-2.25 2.25z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        lzNf: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M12.13 1.5c-4.684 0-8.387 4.316-8.387 9.055 0 4.95 6.51 11.945 8.386 11.945 1.642 0 8.152-7.383 8.152-12.334 0-4.74-3.702-8.666-8.153-8.666zm.026 13.17c-2.924 0-5.178-2.232-5.178-4.84 0-1.217.402-2.313 1.08-3.178v.01c0 1.08.884 1.958 1.976 1.958s1.977-.877 1.977-1.958c0-.8-.486-1.488-1.182-1.79.422-.106.865-.168 1.327-.168 2.636 0 4.89 2.23 4.89 5.126 0 2.61-2.252 4.84-4.89 4.84z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        "pXH+": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("2Uo0")),
                o = a(n("ERkP")),
                i = a(n("fBgJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [i.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), o.default.createElement("g", null, o.default.createElement("path", {
                    d: "M17.207 11.293l-7.5-7.5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L15.086 12l-6.793 6.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        thYI: function(e, t, n) {
            "use strict";
            /** @license React v16.5.2
             * schedule.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = null,
                o = !1,
                i = !1,
                a = "object" == typeof performance && "function" == typeof performance.now,
                s = {
                    timeRemaining: a ? function() {
                        var e = m() - performance.now();
                        return 0 < e ? e : 0
                    } : function() {
                        var e = m() - Date.now();
                        return 0 < e ? e : 0
                    },
                    didTimeout: !1
                };

            function l() {
                if (!o) {
                    var e = r.timesOutAt;
                    i ? f() : i = !0, h(c, e)
                }
            }

            function u() {
                var e = r,
                    t = r.next;
                if (r === t) r = null;
                else {
                    var n = r.previous;
                    r = n.next = t, t.previous = n
                }
                e.next = e.previous = null, (e = e.callback)(s)
            }

            function c(e) {
                o = !0, s.didTimeout = e;
                try {
                    if (e)
                        for (; null !== r;) {
                            var n = t.unstable_now();
                            if (!(r.timesOutAt <= n)) break;
                            do {
                                u()
                            } while (null !== r && r.timesOutAt <= n)
                        } else if (null !== r)
                            do {
                                u()
                            } while (null !== r && 0 < m() - t.unstable_now())
                } finally {
                    o = !1, null !== r ? l() : i = !1
                }
            }
            var d, p, h, f, m, v = Date,
                E = "function" == typeof setTimeout ? setTimeout : void 0,
                _ = "function" == typeof clearTimeout ? clearTimeout : void 0,
                y = "function" == typeof requestAnimationFrame ? requestAnimationFrame : void 0,
                g = "function" == typeof cancelAnimationFrame ? cancelAnimationFrame : void 0;

            function b(e) {
                d = y((function(t) {
                    _(p), e(t)
                })), p = E((function() {
                    g(d), e(t.unstable_now())
                }), 100)
            }
            if (a) {
                var S = performance;
                t.unstable_now = function() {
                    return S.now()
                }
            } else t.unstable_now = function() {
                return v.now()
            };
            if ("undefined" == typeof window) {
                var C = -1;
                h = function(e) {
                    C = setTimeout(e, 0, !0)
                }, f = function() {
                    clearTimeout(C)
                }, m = function() {
                    return 0
                }
            } else if (window._schedMock) {
                var T = window._schedMock;
                h = T[0], f = T[1], m = T[2]
            } else {
                var O = null,
                    w = !1,
                    R = -1,
                    I = !1,
                    P = !1,
                    k = 0,
                    M = 33,
                    A = 33;
                m = function() {
                    return k
                };
                var L = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
                window.addEventListener("message", (function(e) {
                    if (e.source === window && e.data === L) {
                        w = !1;
                        var n = t.unstable_now();
                        if (e = !1, 0 >= k - n) {
                            if (!(-1 !== R && R <= n)) return void(I || (I = !0, b(x)));
                            e = !0
                        }
                        if (R = -1, n = O, O = null, null !== n) {
                            P = !0;
                            try {
                                n(e)
                            } finally {
                                P = !1
                            }
                        }
                    }
                }), !1);
                var x = function(e) {
                    I = !1;
                    var t = e - k + A;
                    t < A && M < A ? (8 > t && (t = 8), A = t < M ? M : t) : M = t, k = e + A, w || (w = !0, window.postMessage(L, "*"))
                };
                h = function(e, t) {
                    O = e, R = t, P ? window.postMessage(L, "*") : I || (I = !0, b(x))
                }, f = function() {
                    O = null, w = !1, R = -1
                }
            }
            t.unstable_scheduleWork = function(e, n) {
                var o = t.unstable_now();
                if (e = {
                        callback: e,
                        timesOutAt: n = null != n && null !== n.timeout && void 0 !== n.timeout ? o + n.timeout : o + 5e3,
                        next: null,
                        previous: null
                    }, null === r) r = e.next = e.previous = e, l();
                else {
                    o = null;
                    var i = r;
                    do {
                        if (i.timesOutAt > n) {
                            o = i;
                            break
                        }
                        i = i.next
                    } while (i !== r);
                    null === o ? o = r : o === r && (r = e, l()), (n = o.previous).next = o.previous = e, e.next = o, e.previous = n
                }
                return e
            }, t.unstable_cancelScheduledWork = function(e) {
                var t = e.next;
                if (null !== t) {
                    if (t === e) r = null;
                    else {
                        e === r && (r = t);
                        var n = e.previous;
                        n.next = t, t.previous = n
                    }
                    e.next = e.previous = null
                }
            }
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/ondemand.PlayerUi.5bc782f4.js.map