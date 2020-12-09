(window.webpackJsonp = window.webpackJsonp || []).push([
    [203], {
        "+9X6": function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return a
            })), n.d(t, "o", (function() {
                return o
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "p", (function() {
                return d
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "l", (function() {
                return l
            })), n.d(t, "c", (function() {
                return h
            })), n.d(t, "m", (function() {
                return p
            })), n.d(t, "n", (function() {
                return f
            })), n.d(t, "j", (function() {
                return y
            })), n.d(t, "k", (function() {
                return T
            })), n.d(t, "h", (function() {
                return g
            })), n.d(t, "g", (function() {
                return m
            })), n.d(t, "f", (function() {
                return b
            })), n.d(t, "a", (function() {
                return O
            }));
            var i = n("RhWx"),
                r = n.n(i),
                s = (n("PN9k"), n("KI7T"), n("hmHa")),
                a = "TICK",
                o = function(e, t, n, i, r, s) {
                    return {
                        type: a,
                        currentTimeMs: t,
                        absoluteTimeMs: n,
                        durationMs: i,
                        playerId: e,
                        hasCaptions: r,
                        currentVariantIndex: s
                    }
                },
                c = "TRACK_FINISHED",
                d = function(e) {
                    return {
                        type: c,
                        playerId: e
                    }
                },
                u = "NEXT_TRACK",
                l = function(e) {
                    return {
                        type: u,
                        playerId: e
                    }
                },
                h = "PLAYER_READY",
                p = function(e) {
                    return {
                        type: h,
                        playerId: e
                    }
                },
                f = function(e, t) {
                    return {
                        type: "ROTATION_UPDATED",
                        playerId: e,
                        rotation: t
                    }
                },
                v = new Date("Jan 01 1900 GMT").getTime(),
                E = new Date("Jan 01 1970 GMT").getTime() - v,
                y = function(e, t) {
                    return {
                        type: "ID3_METADATA",
                        playerId: e,
                        metadata: t
                    }
                },
                T = function(e, t) {
                    return {
                        type: "ID3_TAG_DATA",
                        playerId: e,
                        id3Json: t,
                        currentNtpTime: (Date.now() + E) / 1e3
                    }
                },
                g = function(e) {
                    return {
                        type: "BUFFER_START",
                        playerId: e
                    }
                },
                m = function(e) {
                    return {
                        type: "BUFFER_END",
                        playerId: e
                    }
                },
                b = function(e, t) {
                    return {
                        type: "BITRATE_SWITCHED",
                        playerId: e,
                        bitrate: t
                    }
                },
                I = function(e) {
                    var t = e.tracks;
                    return {
                        currentTrack: t.find((function(t) {
                            return t.id === e.currentTrackId
                        })),
                        otherTracks: t.filter((function(t) {
                            return t.id !== e.currentTrackId
                        }))
                    }
                },
                S = function(e, t) {
                    var n = I(e),
                        i = n.currentTrack,
                        s = n.otherTracks;
                    return Object.assign({}, e, {
                        tracks: [].concat(r()(s), [Object.assign({}, t(i))])
                    })
                };
            t.i = function(e, t) {
                switch (t.type) {
                    case a:
                        var n = I(e),
                            i = n.currentTrack,
                            o = n.otherTracks;
                        return Object.assign({}, e, {
                            tracks: [].concat(r()(o), [Object.assign({}, i, {
                                durationMs: t.durationMs,
                                currentTimeMs: t.currentTimeMs,
                                absoluteTimeMs: t.absoluteTimeMs,
                                hasCaptions: t.hasCaptions,
                                currentVariantIndex: t.currentVariantIndex
                            })])
                        });
                    case s.w:
                        return Object.assign({}, e, {
                            tracksFinished: !1
                        });
                    case h:
                        var d = I(e),
                            l = d.currentTrack,
                            p = d.otherTracks;
                        return Object.assign({}, e, {
                            tracks: [].concat(r()(p), [Object.assign({}, l, {
                                playerReady: !0
                            })])
                        });
                    case "ROTATION_UPDATED":
                        var f = I(e),
                            v = f.currentTrack,
                            E = f.otherTracks;
                        return Object.assign({}, e, {
                            tracks: [].concat(r()(E), [Object.assign({}, v, {
                                rotation: t.rotation
                            })])
                        });
                    case "ID3_METADATA":
                        var y = t.metadata,
                            T = e;
                        return y && (T = S(T, (function(e) {
                            return Object.assign({}, e, {
                                metadata: y
                            })
                        }))), T;
                    case "ID3_TAG_DATA":
                        var g = t.id3Json,
                            m = t.currentNtpTime,
                            b = g.ntp,
                            O = e;
                        if (b) {
                            var P = m - b;
                            O = S(O, (function(e) {
                                return Object.assign({}, e, {
                                    liveLatencyMs: 1e3 * P
                                })
                            }))
                        }
                        return O;
                    case "BITRATE_SWITCHED":
                        var C = I(e),
                            _ = C.currentTrack,
                            R = C.otherTracks;
                        return Object.assign({}, e, {
                            tracks: [].concat(r()(R), [Object.assign({}, _, {
                                currentBitrate: t.bitrate
                            })])
                        });
                    case "BUFFER_START":
                        var L = I(e),
                            k = L.currentTrack,
                            A = L.otherTracks;
                        return Object.assign({}, e, {
                            tracks: [].concat(r()(A), [Object.assign({}, k, {
                                isBuffering: !0
                            })])
                        });
                    case "BUFFER_END":
                        var j = I(e),
                            w = j.currentTrack,
                            U = j.otherTracks;
                        return Object.assign({}, e, {
                            tracks: [].concat(r()(U), [Object.assign({}, w, {
                                isBuffering: !1
                            })])
                        });
                    case u:
                    case c:
                        if (e.nextTrackIds.length > 0) {
                            var D = e.nextTrackIds,
                                F = D[0],
                                N = D.slice(1),
                                M = e.tracks,
                                x = M.find((function(e) {
                                    return e.id === F
                                })),
                                V = M.filter((function(e) {
                                    return e.id !== F
                                }));
                            return Object.assign({}, e, {
                                currentTrackId: F,
                                nextTrackIds: N,
                                controls: Object.assign({}, e.controls, {
                                    playState: s.j.PLAY_REQUESTED,
                                    captionsState: e.areCaptionsShown ? s.e.CAPTIONS_ON_REQUESTED : s.e.CAPTIONS_OFF_REQUESTED
                                }),
                                intentToPlayTime: void 0,
                                tracks: [].concat(r()(V), [Object.assign({}, x, {
                                    playerReady: !1
                                })])
                            })
                        }
                        var H = I(e).currentTrack;
                        return Object.assign({}, e, {
                            intentToPlayTime: void 0,
                            isPlaying: !!H.shouldLoop,
                            tracksFinished: !H.shouldLoop
                        });
                    default:
                        return e
                }
            };
            var O = {
                nextTrackIds: []
            }
        },
        "+STa": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = t.updateGuestInfo = t.UPDATE_GUEST_INFO = void 0;
            t.UPDATE_GUEST_INFO = "UPDATE_GUEST_INFO";
            t.updateGuestInfo = function(e, t) {
                return {
                    type: "UPDATE_GUEST_INFO",
                    guestInfo: t,
                    experienceId: e
                }
            };
            t.default = function(e, t) {
                switch (void 0 === e && (e = {}), t.type) {
                    case "UPDATE_GUEST_INFO":
                        for (var n = t.guestInfo, i = {}, r = 0; r < n.length; r++) {
                            var s = n[r],
                                a = s.ParticipantIndex,
                                o = s.ProfileUrl,
                                c = s.SessionId,
                                d = s.StreamName,
                                u = s.UserId,
                                l = s.UserName;
                            i[r] = {
                                ParticipantIndex: a,
                                ProfileUrl: o,
                                SessionId: c,
                                StreamName: d,
                                UserId: u,
                                UserName: l
                            }
                        }
                        return i;
                    default:
                        return e
                }
            }
        },
        "0QFG": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.combineReducers = void 0, n("LnO1"), n("3eMz"), n("DB+v"), n("NCol");
            t.combineReducers = function(e) {
                return function(t, n) {
                    return Object.keys(e).reduce((function(i, r) {
                        return i[r] = e[r](t[r], n), i
                    }), {})
                }
            }
        },
        "2/88": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return s
            }));
            var i = n("Q6z5"),
                r = n("UweJ"),
                s = function(e, t) {
                    return {
                        feature: t,
                        playerId: e,
                        type: "GET_FEATURE_VALUE"
                    }
                };
            t.a = function(e) {
                return function(t) {
                    return function(n) {
                        if ("GET_FEATURE_VALUE" === n.type) {
                            var s, a, o = n.feature,
                                c = n.playerId,
                                d = Object(r.a)(c);
                            if (d && d.getValue) s = d.getValue(o), e.dispatch(Object(i.i)(c, ((a = {})[o] = s, a)));
                            return s
                        }
                        return t(n)
                    }
                }
            }
        },
        "4k9e": function(e, t, n) {
            "use strict";
            n("PN9k");
            var i = n("XSs6"),
                r = n("q+jO"),
                s = (n("zpx+"), n("XjK0"), n("SCO9"), n("RhWx")),
                a = n.n(s),
                o = n("LdEA"),
                c = n.n(o),
                d = n("Q6z5"),
                u = n("+9X6"),
                l = n("hmHa"),
                h = n("A9/4");

            function p(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(e, t || "default");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            var f = function(e, t) {
                    e[t];
                    return c()(e, [t].map(p))
                },
                v = function(e) {
                    var t = e.intentToPlayTime;
                    return void 0 === t ? new Date : t
                },
                E = {
                    volume: 1,
                    areCaptionsShown: !1,
                    hasCaptions: !1,
                    hasPlaybackStarted: !1,
                    intentToPlayTime: void 0,
                    isMuted: !1,
                    isPlaying: !1,
                    isScrubbing: !1,
                    controls: {
                        isHidden: !0,
                        isPosterShown: !0
                    }
                },
                y = n("6/SQ"),
                T = n("GV/0");
            n.d(t, "a", (function() {
                return b
            })), n.d(t, "c", (function() {
                return I
            }));
            var g = Object.assign({}, i.a, {}, r.a, {}, E, {}, d.d, {}, y.b, {}, T.a, {}, u.a, {
                    percentVisible: 1,
                    percentOfViewportOccupied: 1,
                    sizesInfo: {}
                }),
                m = [i.b, d.h, function(e, t) {
                    var n;
                    switch (t.type) {
                        case d.c:
                            return Object.assign({}, e, {
                                intentToPlayTime: t.intentToPlayTime
                            });
                        case l.o:
                        case r.c:
                            return e.isPlaying && e.controls.playState !== l.j.PAUSE_REQUESTED ? e : Object.assign({}, e, {
                                intentToPlayTime: v(e),
                                controls: Object.assign({}, e.controls, {
                                    playState: l.j.PLAY_REQUESTED
                                })
                            });
                        case r.b:
                        case l.n:
                        case l.b:
                            return e.isPlaying || e.controls.playState === l.j.PLAY_REQUESTED ? Object.assign({}, e, {
                                controls: Object.assign({}, e.controls, {
                                    playState: l.j.PAUSE_REQUESTED
                                })
                            }) : e;
                        case l.p:
                            var i = Object(h.b)(e),
                                s = Object(h.c)(e);
                            return i && "maxLoopCount" in i && (i.loopCounter = 0, i.shouldLoop = !0), Object.assign({}, e, {
                                intentToPlayTime: v(e),
                                tracks: i ? [].concat(a()(s), [Object.assign({}, i)]) : e.tracks,
                                controls: Object.assign({}, e.controls, {
                                    isReplayButtonShown: !1,
                                    playState: l.j.PLAY_REQUESTED
                                })
                            });
                        case l.w:
                            return n = f(e.controls, "playState"), e.controls.playState !== l.j.PLAY_REQUESTED && (n.playState = e.controls.playState), n.isPosterShown = !1, Object.assign({}, e, {
                                controls: n,
                                hasPlaybackStarted: !0,
                                isPlaying: !0
                            });
                        case l.v:
                            return n = f(e.controls, "playState"), e.controls.playState !== l.j.PAUSE_REQUESTED && (n.playState = e.controls.playState), Object.assign({}, e, {
                                controls: n,
                                isPlaying: !1
                            });
                        case l.m:
                            return Object.assign({}, e, {
                                controls: Object.assign({}, e.controls, {
                                    muteState: l.i.MUTE_REQUESTED
                                })
                            });
                        case l.r:
                            return n = Object.assign({}, e.controls, {
                                muteState: l.i.UNMUTE_REQUESTED
                            }), 0 !== e.volume || e.controls.volume > 0 || (n.volume = 1), Object.assign({}, e, {
                                controls: n
                            });
                        case l.s:
                            return n = Object.assign({}, e.controls, {
                                volume: t.volume
                            }), 0 !== t.volume || e.isMuted ? t.volume > 0 && e.isMuted && (n.muteState = l.i.UNMUTE_REQUESTED) : n.muteState = l.i.MUTE_REQUESTED, Object.assign({}, e, {
                                controls: n
                            });
                        case l.z:
                            return n = f(f(e.controls, "muteState"), "volume"), e.controls.muteState !== l.i.MUTE_REQUESTED || t.isMuted ? e.controls.muteState === l.i.UNMUTE_REQUESTED && t.isMuted && (n.muteState = l.i.UNMUTE_REQUESTED) : n.muteState = l.i.MUTE_REQUESTED, t.volume !== e.controls.volume && (n.volume = e.controls.volume), Object.assign({}, e, {
                                controls: n,
                                volume: t.volume,
                                isMuted: t.isMuted
                            });
                        case l.q:
                            return Object.assign({}, e, {
                                isScrubbing: !0,
                                controls: Object.assign({}, e.controls, {
                                    scrubToFraction: t.fraction
                                })
                            });
                        case l.x:
                            return n = f(e.controls, "scrubToFraction"), Object.assign({}, e, {
                                isScrubbing: !1,
                                controls: n
                            });
                        case l.y:
                            return Object.assign({}, e, {
                                isScrubbing: !0
                            });
                        case l.g:
                            return Object.assign({}, e, {
                                controls: Object.assign({}, e.controls, {
                                    isHidden: !0
                                })
                            });
                        case l.t:
                            return Object.assign({}, e, {
                                controls: Object.assign({}, e.controls, {
                                    isHidden: !1
                                })
                            });
                        case l.l:
                            return Object.assign({}, e, {
                                userSpecifiedCaptions: t.isUserSet,
                                controls: Object.assign({}, e.controls, {
                                    captionsState: l.e.CAPTIONS_ON_REQUESTED
                                })
                            });
                        case l.k:
                            return Object.assign({}, e, {
                                userSpecifiedCaptions: t.isUserSet,
                                controls: Object.assign({}, e.controls, {
                                    captionsState: l.e.CAPTIONS_OFF_REQUESTED
                                })
                            });
                        case l.d:
                            return n = f(e.controls, "captionsState"), Object.assign({}, e, {
                                areCaptionsShown: t.areCaptionsShown,
                                controls: n
                            });
                        case u.e:
                            var o = Object.assign({}, e),
                                c = Object(h.b)(e),
                                p = Object(h.c)(e);
                            c && "maxLoopCount" in c && (c.loopCounter >= c.maxLoopCount - 1 ? c.shouldLoop = !1 : c.loopCounter++, o.tracks = [].concat(a()(p), [Object.assign({}, c)]));
                            var E = (c || {}).shouldLoop;
                            return 0 === e.nextTrackIds.length && (e.isPreview ? o.controls = Object.assign({}, e.controls, {
                                isPosterShown: !E
                            }) : o.controls = Object.assign({}, e.controls, {
                                isHidden: E,
                                isReplayButtonShown: !E,
                                playState: E ? void 0 : l.j.PAUSE_REQUESTED
                            })), o;
                        case l.u:
                            return Object.assign({}, e, {
                                percentVisible: t.percentVisible,
                                percentOfViewportOccupied: t.percentOfViewportOccupied,
                                sizesInfo: t.sizesInfo || {}
                            });
                        case l.a:
                            n = f(e.controls, "playState"), e.controls.playState !== l.j.PLAY_REQUESTED && (n.playState = e.controls.playState);
                            var y = Object(h.b)(e),
                                T = Object(h.c)(e);
                            return Object.assign({}, e, {
                                controls: Object.assign({}, n, {
                                    isPosterShown: !0
                                }),
                                tracks: [].concat(a()(T), [Object.assign({}, y, {
                                    isBuffering: !1
                                })])
                            });
                        case l.f:
                            var g = void 0 === e.dataUsageBytes ? t.bytes : e.dataUsageBytes + t.bytes;
                            return Object.assign({}, e, {
                                dataUsageBytes: g
                            });
                        case l.h:
                            var m = e.liveClickthroughClicked || 0;
                            return Object.assign({}, e, {
                                liveClickthroughClicked: 1 + m
                            });
                        default:
                            return e
                    }
                }, u.i, r.d, y.e, T.e],
                b = "TEARDOWN_PLAYER",
                I = function(e) {
                    return {
                        type: b,
                        playerId: e
                    }
                };
            t.b = function(e, t, n) {
                if (void 0 === e && (e = {}), void 0 === n && (n = m), void 0 !== t.playerId) {
                    if (t.type === b) {
                        var i = Object.assign({}, e);
                        return delete i[t.playerId], i
                    }
                    var r = e[t.playerId];
                    if (t.type === d.e) {
                        if (!r) return e;
                        r = Object.assign({}, g, {
                            errorInfo: r.errorInfo
                        })
                    }
                    var s, a = function(e, t, n) {
                        return void 0 === e && (e = g), n.reduce((function(e, n) {
                            return n(e, t)
                        }), e)
                    }(r, t, n);
                    if (void 0 !== a) return Object.assign({}, e, ((s = {})[t.playerId] = a, s))
                }
                return e
            }
        },
        "5vFY": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "c", (function() {
                return f
            }));
            n("KI7T");
            var i, r = n("Q6z5"),
                s = n("ClFK"),
                a = n("cOYg"),
                o = n("6/SQ"),
                c = n("GV/0"),
                d = n("hmHa"),
                u = n("+9X6"),
                l = ((i = {})[u.c] = a.a.READY, i[u.e] = a.a.PLAYBACK_COMPLETE, i[d.v] = a.a.PAUSE, i[d.w] = a.a.PLAY, i),
                h = {},
                p = function(e, t, n) {
                    void 0 === h[e] && (h[e] = {}), void 0 === h[e][t] && (h[e][t] = []), h[e][t].push(n)
                },
                f = function(e) {
                    delete h[e]
                };
            t.b = function(e) {
                return function(t) {
                    return function(n) {
                        var i, u, p = n.playerId,
                            f = n.type,
                            v = e.getState().players[p],
                            E = t(n),
                            y = e.getState().players[p];
                        if (p in h) {
                            var T = v.tracks.find((function(e) {
                                    return "content" === e.displayType
                                })),
                                g = y.tracks.find((function(e) {
                                    return "content" === e.displayType
                                }));
                            switch (f) {
                                case o.c:
                                    n.thrownError.message === s.a.LIVE_VIDEO_GEOBLOCK_ERROR ? i = a.a.GEOBLOCK_ERROR : n.thrownError.message === s.a.LIVE_VIDEO_NO_COOKIES_ERROR && (i = a.a.NO_COOKIES_ERROR);
                                    break;
                                case d.z:
                                    !v.isMuted && y.isMuted ? i = a.a.MUTE : v.isMuted && !y.isMuted && (i = a.a.UNMUTE);
                                    break;
                                case r.a:
                                    if (T.isLive && !g.isLive) i = a.a.LIVE_ENDED;
                                    else if (!T.isLive && g.isLive) i = a.a.LIVE_STARTED;
                                    else if (v.eventTitle !== y.eventTitle || v.eventDescription !== y.eventDescription || v.eventUrl !== y.eventUrl) {
                                        var m = y.eventTitle,
                                            b = y.eventDescription,
                                            I = y.eventUrl;
                                        i = a.a.BROADCAST_EVENT_ASSOCIATION_UPDATED, u = {
                                            eventTitle: m,
                                            eventDescription: b,
                                            eventUrl: I
                                        }
                                    }
                                    break;
                                case d.h:
                                    v.liveClickthroughClicked !== y.liveClickthroughClicked && (i = a.a.LIVE_CLICKTHROUGH);
                                    break;
                                case c.d:
                                    var S = v.fullscreen.isFullscreen,
                                        O = y.fullscreen.isFullscreen;
                                    !S && O ? i = a.a.FULLSCREEN_ENTERED : S && !O && (i = a.a.FULLSCREEN_EXITED);
                                    break;
                                default:
                                    i = l[f]
                            }! function(e, t, n) {
                                t in h[e] && (h[e][t], 1) && h[e][t].forEach((function(e) {
                                    "function" == typeof e && e(n)
                                }))
                            }(p, i, u), i === a.a.READY && function(e, t) {
                                t in h[e] && delete h[e][t]
                            }(p, i)
                        }
                        return E
                    }
                }
            }
        },
        "8SPO": function(e, t, n) {
            "use strict";
            var i = n("yWCo"),
                r = n("IGGJ");
            t.__esModule = !0, t.default = t.resetGuestState = t.RESET_GUEST_STATE = t.teardownExperience = t.TEARDOWN_EXPERIENCE = t.initializeExperience = t.INITIALIZE_EXPERIENCE = void 0, n("PN9k");
            var s = n("0QFG"),
                a = r(n("+STa")),
                o = i(n("PNAC"));
            t.INITIALIZE_EXPERIENCE = "INITIALIZE_EXPERIENCE";
            t.initializeExperience = function(e) {
                return {
                    type: "INITIALIZE_EXPERIENCE",
                    experienceId: e
                }
            };
            t.TEARDOWN_EXPERIENCE = "TEARDOWN_EXPERIENCE";
            t.teardownExperience = function(e) {
                return {
                    type: "TEARDOWN_EXPERIENCE",
                    experienceId: e
                }
            };
            t.RESET_GUEST_STATE = "RESET_GUEST_STATE";
            t.resetGuestState = function(e) {
                return {
                    type: "RESET_GUEST_STATE",
                    experienceId: e
                }
            };
            var c = {
                    audioLevels: o.InitialState,
                    guests: {}
                },
                d = (0, s.combineReducers)({
                    audioLevels: o.default,
                    guests: a.default
                });
            t.default = function(e, t, n) {
                var i;
                if (void 0 === e && (e = {}), void 0 === n && (n = d), void 0 !== t.experienceId) switch (t.type) {
                    case "INITIALIZE_EXPERIENCE":
                    case "RESET_GUEST_STATE":
                        return Object.assign({}, e, ((i = {})[t.experienceId] = c, i));
                    case "TEARDOWN_EXPERIENCE":
                        var r = Object.assign({}, e);
                        return delete r[t.experienceId], r;
                    default:
                        var s, a = n(e[t.experienceId], t);
                        return Object.assign({}, e, ((s = {})[t.experienceId] = a, s))
                }
                return e
            }
        },
        ArJX: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var i = n("ZeN/"),
                r = n("aWzz"),
                s = n.n(r),
                a = {
                    displayOptions: {},
                    variants: []
                };
            t.b = {
                accessibilityLabel: s.a.string,
                adProvider: s.a.func,
                analytics: s.a.object,
                autoplay: s.a.bool,
                bitrateCap: s.a.number,
                contentId: s.a.string,
                contentType: s.a.oneOf(["media_entity", "gif", "vmap"]),
                controls: s.a.bool,
                cta: s.a.object,
                customOverlay: s.a.node,
                displayOptions: s.a.shape({
                    objectFitVideo: s.a.oneOf(i.c),
                    playerHandlesRotations: s.a.bool
                }),
                durationMs: s.a.number,
                enableNativeFullscreen: s.a.bool,
                eventId: s.a.string,
                featureProvider: s.a.shape({
                    getValue: s.a.func
                }),
                geolocationPrompt: s.a.bool,
                httpClient: s.a.object,
                includeBroadcastEventAssociation: s.a.bool,
                initiallyMuted: s.a.bool,
                initiallyMutedCaptions: s.a.bool,
                intentToPlayTime: s.a.instanceOf(Date),
                language: s.a.string,
                loop: s.a.bool,
                maxLoopCount: s.a.number,
                mediaAvailability: s.a.object,
                playbackSessionId: s.a.string,
                poster: s.a.string,
                precache: s.a.bool,
                promotedContext: s.a.object,
                publisherId: s.a.string,
                requestedTimecode: s.a.string,
                setPlayerApi: s.a.func,
                twitterAuthedHttpClient: s.a.object,
                variants: s.a.arrayOf(s.a.shape({
                    src: s.a.string,
                    type: s.a.string
                })),
                videoEl: s.a.object,
                videoId: s.a.object,
                viewCount: s.a.oneOfType([s.a.string, s.a.number]),
                vmapUrl: s.a.string
            }
        },
        BNT4: function(e, t, n) {
            "use strict";
            (function(e) {
                n("LnO1"), n("3eMz"), n("DB+v"), n("PN9k"), n("yKDW"), n("dtAy");
                var i = n("KEM+"),
                    r = n.n(i),
                    s = n("hmHa"),
                    a = n("cOYg"),
                    o = n("A9/4"),
                    c = n("WcfF"),
                    d = n("+cpJ"),
                    u = n("+9X6"),
                    l = n("ZeN/"),
                    h = n("6/SQ"),
                    p = n("yruv"),
                    f = n("UweJ"),
                    v = n("ZcJ2"),
                    E = n("lklz"),
                    y = n("q3QN"),
                    T = n("4k9e"),
                    g = n("IC1n"),
                    m = n.n(g),
                    b = n("XLH+"),
                    I = n("5vFY"),
                    S = n("Q6z5"),
                    O = n("q+jO"),
                    P = n("oFRr"),
                    C = n("GV/0"),
                    _ = function() {
                        function t(n) {
                            var i = this,
                                g = n.source,
                                b = void 0 === g ? {} : g,
                                _ = n.videoConfig,
                                R = n.domElement,
                                L = n.httpClient,
                                k = n.twitterAuthedHttpClient,
                                A = n.options,
                                j = void 0 === A ? {} : A;
                            r()(this, "teardown", (function() {
                                i.broadcastUpdater && i.broadcastUpdater.cancelUpdate(), i.unsubscribeCalls.forEach((function(e) {
                                    e()
                                })), i.unsubscribeCalls = [], Object(I.c)(i.id), i.source = void 0, i.session = void 0, y.a.dispatch(Object(T.c)(i.id)), void 0 !== i.hydraExperienceId && y.a.dispatch(Object(P.teardownExperience)(i.hydraExperienceId)), i.video && i.video.teardown(), Object(f.i)(i.id), i.logger.clearLogs(), i.rejectPlayerReadyPromise()
                            })), r()(this, "play", (function() {
                                return i.initiallyMuted ? i.playPreview() : i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.L(i.id))
                                })), i
                            })), r()(this, "pause", (function() {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.K(i.id))
                                })), i
                            })), r()(this, "replay", (function() {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.M(i.id))
                                })), i
                            })), r()(this, "mute", (function() {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.J(i.id))
                                })), i
                            })), r()(this, "unmute", (function() {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.O(i.id))
                                })), i
                            })), r()(this, "scrubToFraction", (function(e) {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.N(i.id, e))
                                })), i
                            })), r()(this, "setVolume", (function(e) {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.P(i.id, e))
                                })), i
                            })), r()(this, "fullScreen", (function(e) {
                                var t = e || i.domElement;
                                return y.a.dispatch(Object(C.f)(i.id, t, i.video.getVideoTag())), i
                            })), r()(this, "exitFullScreen", (function() {
                                return y.a.dispatch(Object(C.g)(i.id)), i
                            })), r()(this, "hideControls", (function() {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.F(i.id))
                                })), i
                            })), r()(this, "showControls", (function() {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.Q(i.id))
                                })), i
                            })), r()(this, "playPreview", (function() {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(Object(O.f)(i.id)), i.initiallyMuted && (i.initiallyMuted = !1)
                                })), i
                            })), r()(this, "pausePreview", (function() {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(Object(O.e)(i.id))
                                })), i
                            })), r()(this, "objectFitVideo", (function(e) {
                                return -1 !== l.c.indexOf(e) && i.video && (i.video.objectFitVideo = e), i
                            })), r()(this, "toggleCaptions", (function() {
                                return i.playerReadyPromise.then((function() {
                                    var e = y.a.getState(),
                                        t = e && e.players && e.players[i.id],
                                        n = !(!t || !t.areCaptionsShown);
                                    y.a.dispatch(n ? s.H(i.id, !0) : s.I(i.id, !0))
                                })), i
                            })), r()(this, "nextTrack", (function() {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(Object(u.l)(i.id))
                                })), i
                            })), r()(this, "triggerError", (function(e) {
                                var t = new Error(e || "synthetic");
                                return y.a.dispatch(Object(h.h)(i.id, t)), i
                            })), r()(this, "reload", (function(e) {
                                var t = void 0 === e ? {} : e,
                                    n = t.requestedTimecode,
                                    r = t.autoPlay,
                                    a = void 0 !== r && r;
                                i.playerReadyPromise = new Promise((function(e, t) {
                                    i.resolvePlayerReadyPromise = e, i.rejectPlayerReadyPromise = t
                                })).catch((function() {}));
                                var c = (y.a.getState() || {
                                        players: {}
                                    }).players[i.id],
                                    d = -1;
                                if (c) {
                                    if (void 0 !== n) i.playerOptions.requestedTimecode = n;
                                    else if (0 === c.currentTrackId) {
                                        d = Object(o.b)(c).currentTimeMs / 1e3
                                    }
                                    var u = c.isPreview,
                                        l = c.isPlaying,
                                        h = c.isMuted,
                                        p = l || a;
                                    i.playerReadyPromise.then((function() {
                                        u ? p ? y.a.dispatch(Object(O.f)(i.id)) : y.a.dispatch(Object(O.e)(i.id)) : (p && y.a.dispatch(s.L(i.id)), h && y.a.dispatch(s.J(i.id)))
                                    }))
                                }
                                return i.video && i.video.teardownPlayer(), y.a.dispatch(i._reloadPlayer(i.id, i.source, i.videoConfig, i.session, i.resolvePlayerReadyPromise, i.rejectPlayerReadyPromise, Object.assign({}, i.playerOptions, {
                                    reloadTimecode: d
                                }))), i
                            })), r()(this, "on", (function(e, t) {
                                return Object.keys(a.a).forEach((function(n) {
                                    a.a[n] === e && Object(I.a)(i.id, e, t)
                                })), i
                            })), r()(this, "updatePosition", (function(e) {
                                var t = e.percentVisible,
                                    n = e.percentOfViewportOccupied,
                                    r = e.sizesInfo;
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.R(i.id, t, n, r))
                                })), i
                            })), r()(this, "callToActionClicked", (function() {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.B(i.id))
                                })), i
                            })), r()(this, "callToActionImpression", (function() {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.C(i.id))
                                })), i
                            })), r()(this, "liveClickthroughClicked", (function() {
                                return i.playerReadyPromise.then((function() {
                                    y.a.dispatch(s.G(i.id))
                                })), i
                            })), r()(this, "subscribe", (function(e) {
                                var t = y.a.getState(),
                                    n = i._getPlayerState(t),
                                    r = i._getHydraState(t),
                                    s = y.a.subscribe((function() {
                                        var t = y.a.getState(),
                                            s = i._getPlayerState(t),
                                            a = i._getHydraState(t);
                                        void 0 !== s && (n !== s || r !== a) && (n = s, r = a, e(s, a))
                                    }));
                                return i.unsubscribeCalls.push(s), s
                            })), r()(this, "onStoreUpdate", (function(e) {
                                e.errorInfo.autoRetry && setTimeout((function() {
                                    i.reload()
                                }), e.errorInfo.backoffMs || 0)
                            })), this.id = t.id++, this.unsubscribeCalls = [], this.source = b, this.videoConfig = _, this.session = {
                                id: m()()
                            }, this.playbackSessionId = j.playbackSessionId, this.initiallyMuted = j.initiallyMuted, this._reloadPlayer = S.j, this.playerReadyPromise = new Promise((function(e, t) {
                                i.resolvePlayerReadyPromise = e, i.rejectPlayerReadyPromise = t
                            })).then(Promise.resolve()).catch((function() {})), j.autoplay && this.play(), this.logger = new d.a(this.id), e.env.VIDEO_PLAYER_DEBUG && (d.a.debuggingEnabled = !0), Object(f.g)(this.id, new p.a(new v.a(L)), new p.a(new v.a(k || L)), this.logger, new c.a, j.featureProvider), this.subscribe(this.onStoreUpdate), this.source.type !== E.a.BROADCAST && this.source.type !== E.a.STATIC_BROADCAST || (this.hydraExperienceId = j.hydraExperienceId = y.a.dispatch(Object(P.registerExperience)())), this.options = j;
                            var w = -1,
                                U = this.playbackSessionId ? Object(f.h)(this.playbackSessionId) : void 0;
                            U && (this.options.videoEl = j.videoEl || U.videoEl, w = U.reloadTimecode);
                            var D = this.options,
                                F = D.bitrateCap,
                                N = D.enableNativeFullscreen,
                                M = D.featureProvider,
                                x = D.includeBroadcastEventAssociation,
                                V = D.initiallyMutedCaptions,
                                H = D.intentToPlayTime,
                                Q = D.maxLoopCount,
                                G = D.promotedContext,
                                J = D.requestedTimecode,
                                B = D.showGeolocationPrompt;
                            this.playerOptions = {
                                bitrateCap: F,
                                enableNativeFullscreen: N,
                                featureProvider: M,
                                includeBroadcastEventAssociation: x,
                                initiallyMutedCaptions: V,
                                intentToPlayTime: H,
                                maxLoopCount: Q,
                                promotedContext: G,
                                reloadTimecode: w,
                                requestedTimecode: J,
                                showGeolocationPrompt: B
                            }, y.a.dispatch(Object(S.g)(this.id, b, _, this.session, j.analytics, j.adProvider, this.resolvePlayerReadyPromise, this.rejectPlayerReadyPromise, this.playerOptions, this.logger)).then((function(e) {
                                i.broadcastUpdater = e
                            })), R && this.attach(R)
                        }
                        var n = t.prototype;
                        return n.attach = function(e) {
                            this.video || (this.domElement = e, this.video = new b.a(this.domElement, this.id, y.a, this.reload, this.logger, this.options))
                        }, n._getPlayerState = function(e) {
                            if (e.players) return e.players[this.id]
                        }, n._getHydraState = function(e) {
                            if (void 0 !== this.hydraExperienceId && e.hydraExperiences) return e.hydraExperiences[this.hydraExperienceId]
                        }, t
                    }();
                r()(_, "id", 0), t.a = _
            }).call(this, n("F63i"))
        },
        "GV/0": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "c", (function() {
                return a
            })), n.d(t, "g", (function() {
                return o
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "h", (function() {
                return d
            })), n.d(t, "a", (function() {
                return u
            }));
            n("PN9k");
            var i = n("Q6z5"),
                r = "REQUEST_FULLSCREEN",
                s = function(e, t, n) {
                    return {
                        type: r,
                        playerId: e,
                        containerEl: t,
                        videoEl: n
                    }
                },
                a = "REQUEST_SHRINK",
                o = function(e, t) {
                    return {
                        playerId: e,
                        type: a,
                        element: t
                    }
                },
                c = "SET_FULLSCREEN_STATE",
                d = function(e, t) {
                    return {
                        type: c,
                        playerId: e,
                        isFullscreen: t
                    }
                };
            t.e = function(e, t) {
                switch (t.type) {
                    case i.c:
                        return Object.assign({}, e, {
                            fullscreen: Object.assign({}, e.fullscreen, {
                                enableNative: t.enableNativeFullscreen
                            })
                        });
                    case c:
                        return Object.assign({}, e, {
                            fullscreen: Object.assign({}, e.fullscreen, {
                                isFullscreen: t.isFullscreen
                            })
                        });
                    default:
                        return e
                }
            };
            var u = {
                fullscreen: {
                    isFullscreen: !1,
                    enableNative: !1
                }
            }
        },
        IC1n: function(e, t, n) {
            var i = n("fjNU"),
                r = n("X/SR");
            e.exports = function(e, t, n) {
                var s = t && n || 0;
                "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                var a = (e = e || {}).random || (e.rng || i)();
                if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
                    for (var o = 0; o < 16; ++o) t[s + o] = a[o];
                return t || r(a)
            }
        },
        PNAC: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = t.InitialState = t.updateAudioLevels = t.UPDATE_AUDIO_LEVELS = void 0, n("PN9k");
            t.UPDATE_AUDIO_LEVELS = "UPDATE_AUDIO_LEVELS";
            t.updateAudioLevels = function(e, t) {
                return {
                    type: "UPDATE_AUDIO_LEVELS",
                    audioLevels: t,
                    experienceId: e
                }
            };
            var i = {
                guests: {},
                host: 0
            };
            t.InitialState = i;
            t.default = function(e, t) {
                switch (void 0 === e && (e = i), t.type) {
                    case "UPDATE_AUDIO_LEVELS":
                        for (var n = t.audioLevels, r = n[0], s = n.slice(1), a = {}, o = 0; o < s.length; o++) a[o] = s[o];
                        return Object.assign({}, e, {
                            guests: a,
                            host: r
                        });
                    default:
                        return e
                }
            }
        },
        WcfF: function(e, t, n) {
            "use strict";
            var i = function() {
                function e() {
                    this.byteAccumulator = 0
                }
                var t = e.prototype;
                return t.add = function(e) {
                    this.byteAccumulator += e
                }, t.getAndReset = function() {
                    var e = this.byteAccumulator;
                    return this.byteAccumulator = 0, e
                }, e
            }();
            t.a = i
        },
        "X/SR": function(e, t) {
            for (var n = [], i = 0; i < 256; ++i) n[i] = (i + 256).toString(16).substr(1);
            e.exports = function(e, t) {
                var i = t || 0,
                    r = n;
                return [r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]]].join("")
            }
        },
        "XLH+": function(e, t, n) {
            "use strict";
            n("KI7T"), n("Bu8c"), n("XjK0"), n("SCO9"), n("LnO1"), n("yKDW"), n("dtAy");
            var i = n("KEM+"),
                r = n.n(i),
                s = n("hmHa"),
                a = n("ClFK"),
                o = n("A9/4"),
                c = n("2/88"),
                d = n("UweJ"),
                u = n("1Pcy"),
                l = n.n(u),
                h = n("W/Kd"),
                p = n.n(h),
                f = n("6/SQ"),
                v = n("YKqM"),
                E = n("+9X6"),
                y = n("QqIv");
            n("T7D0");

            function T(e) {
                return "captions" === e.kind && e.cues && e.cues.length > 0 || "subtitles" === e.kind
            }

            function g(e, t) {
                if (t && e) {
                    var n = t.split("-")[0];
                    return e.toLowerCase() === n.toLowerCase()
                }
            }
            var m, b = n("a9ls"),
                I = n("zytq"),
                S = n("oFRr"),
                O = n("7st9"),
                P = 1,
                C = 2,
                _ = 3,
                R = 4,
                L = "captions",
                k = "metadata",
                A = "subtitles",
                j = "disabled",
                w = "hidden",
                U = "showing",
                D = function() {
                    function e(e, t, n, i, s, a) {
                        var o = this;
                        void 0 === a && (a = {}), r()(this, "onLoadStart", (function() {
                            o.playerRenderPromise || o.dispatchPlayerReady()
                        })), this.domElement = e, this.playerId = t, this.hydraExperienceId = a.hydraExperienceId, this.store = n, this.reload = i, this.showControls = a.showControls, this.objectFitVideo = a.objectFitVideo, this.playerHandlesRotations = a.playerHandlesRotations, this.language = a.language, this.precache = a.precache, this.videoEl = a.videoEl, this.accessibilityLabel = a.accessibilityLabel, this.id3Disabled = !1, this.activeCues = {}, Object(I.c)() || (this.hlsjsVersion = n.dispatch(Object(c.b)(t, O.a))), this.isHlsWorkerEnabled = n.dispatch(Object(c.b)(t, O.b)) || !1, this.liveAdDomainRegex = /t.lv.twimg.com$|ton.twitter.com$/, this.logger = s, this.onLoadedMetadata = this.onLoadedMetadata.bind(this), this.onTimeUpdate = this.onTimeUpdate.bind(this), this.onCanPlay = this.onCanPlay.bind(this), this.onPlay = this.onPlay.bind(this), this.onPlaying = this.onPlaying.bind(this), this.onPause = this.onPause.bind(this), this.onVolumeChange = this.onVolumeChange.bind(this), this.onSeeked = this.onSeeked.bind(this), this.onSeeking = this.onSeeking.bind(this), this.onEnded = this.onEnded.bind(this), this.onError = this.onError.bind(this), this.onHlsJsError = this.onHlsJsError.bind(this), this.onId3CueWithInfo = this.onId3CueWithInfo.bind(this), this.onId3CueWithData = this.onId3CueWithData.bind(this), this.onFragmentLoading = this.onFragmentLoading.bind(this), this.onFragmentParsingInitSegment = this.onFragmentParsingInitSegment.bind(this), this.onLevelSwitching = this.onLevelSwitching.bind(this), this.onBufferStart = this.onBufferStart.bind(this), this.onManifestParsed = this.onManifestParsed.bind(this), this.render = this.render.bind(this), this.dispatchPlayerReady = this.dispatchPlayerReady.bind(this), this.hlsJsPlay = this.hlsJsPlay.bind(this), this.unsubscribeFromStore = this.store.subscribe(this.render), this.playPromise = Promise.resolve(), this.renderVideoTag(), this.render()
                    }
                    var t = e.prototype;
                    return t.teardownPlayer = function(e) {
                        void 0 === e && (e = !0), this.trackDataUsage();
                        var t = this.hlsJs;
                        if (t) {
                            t.detachMedia();
                            var n = function() {
                                t.destroy()
                            };
                            this.hlsJs = void 0, this.playPromise.then(n).catch(n)
                        }
                        if (this.videoTag) {
                            this.stopListeningForId3Tags(), this.videoTag.removeEventListener("loadedmetadata", this.onLoadedMetadata), this.videoTag.removeEventListener("timeupdate", this.onTimeUpdate), this.videoTag.removeEventListener("canplay", this.onCanPlay), this.videoTag.removeEventListener("play", this.onPlay), this.videoTag.removeEventListener("playing", this.onPlaying), this.videoTag.removeEventListener("pause", this.onPause), this.videoTag.removeEventListener("volumechange", this.onVolumeChange), this.videoTag.removeEventListener("seeked", this.onSeeked), this.videoTag.removeEventListener("seeking", this.onSeeking), this.videoTag.removeEventListener("ended", this.onEnded), this.videoTag.removeEventListener("error", this.onError), this.videoTag.removeEventListener("waiting", this.onBufferStart), this.videoTag.removeEventListener("loadstart", this.onLoadStart), this.videoTag.textTracks && (this.videoTag.textTracks.onaddtrack = void 0);
                            try {
                                this.videoTag.pause(), this.videoTag.removeAttribute("src"), this.videoTag.removeAttribute("poster"), this.videoTag.load()
                            } catch (i) {}
                            this.videoTag.parentNode && this.videoTag.parentNode.removeChild(this.videoTag), this.videoTag = void 0
                        }
                        this.renderedTrackId = void 0, this.hasLoaded = !1, this.hasEndedOnce = !1, this.activeCues = void 0, e && (this.renderVideoTag(), this.activeCues = {})
                    }, t.teardown = function() {
                        this.teardownPlayer(!1), this.domElement.parentNode && this.domElement.parentNode.removeChild(this.domElement), this.unsubscribeFromStore()
                    }, t.getVideoTag = function() {
                        return this.videoTag
                    }, t.renderVideoTag = function() {
                        this.videoTag = this.videoEl || document.createElement("video"), this.videoTag.setAttribute("preload", "none"), this.videoTag.setAttribute("playsinline", ""), this.showControls && this.videoTag.setAttribute("controls", ""), this.accessibilityLabel && this.videoTag.setAttribute("aria-label", this.accessibilityLabel), this.videoTag.style.width = "100%", this.videoTag.style.height = "100%", this.videoTag.style.position = "absolute", this.videoTag.style.backgroundColor = "black", this.videoTag.addEventListener("loadstart", this.onLoadStart, !1), this.videoTag.addEventListener("loadedmetadata", this.onLoadedMetadata), this.videoTag.addEventListener("timeupdate", this.onTimeUpdate), this.videoTag.addEventListener("play", this.onPlay), this.videoTag.addEventListener("pause", this.onPause), this.videoTag.addEventListener("volumechange", this.onVolumeChange), this.videoTag.addEventListener("seeked", this.onSeeked), this.videoTag.addEventListener("seeking", this.onSeeking), this.videoTag.addEventListener("ended", this.onEnded), this.videoTag.addEventListener("error", this.onError), this.videoTag.addEventListener("playing", this.onPlaying), this.videoTag.addEventListener("waiting", this.onBufferStart), this.videoTag.addEventListener("canplay", this.onCanPlay), this.videoTag.textTracks && (this.videoTag.textTracks.onaddtrack = this.handleTrackAdded.bind(this)), this.hasEndedOnce = !1
                    }, t.onLoadedMetadata = function() {
                        this.checkInitialSeek()
                    }, t.onTimeUpdate = function() {
                        if (void 0 === this.dateTimeAnchor && void 0 !== this.videoTag.getStartDate) {
                            var e = this.videoTag.getStartDate();
                            e && (this.dateTimeAnchor = {
                                streamTimeMs: 0,
                                absoluteTimeMs: e.getTime()
                            })
                        }
                        var t, n = 1e3 * this.videoTag.currentTime;
                        void 0 !== this.dateTimeAnchor && (t = n - this.dateTimeAnchor.streamTimeMs + this.dateTimeAnchor.absoluteTimeMs);
                        var i = 0,
                            r = this.videoTag.currentSrc;
                        if (r) {
                            var s = this.getCurrentTrack();
                            if (void 0 === s) return;
                            for (var a = s.variants, o = 0; o < a.length; o++)
                                if (a[o].src === r) {
                                    i = o;
                                    break
                                }
                        }
                        this.store.dispatch(Object(E.o)(this.playerId, n, t, 1e3 * this.videoTag.duration, this.hasCaptions(), i)), this.trackDataUsage()
                    }, t.trackDataUsage = function() {
                        var e = this;
                        Object(d.b)(this.playerId, (function(t) {
                            var n = t.getAndReset();
                            n > 0 && e.store.dispatch(s.E(e.playerId, n))
                        }))
                    }, t.checkInitialSeek = function() {
                        var e = this.videoTag,
                            t = this.getInitialTimeCode();
                        this.isSeekable(t) && !this.hasInitialSeeked && t > -1 && (this.hasInitialSeeked = !0, e.currentTime = t)
                    }, t.onCanPlay = function() {
                        this.checkInitialSeek(), this.onBufferEnd()
                    }, t.onPlay = function() {
                        var e = this.videoTag.duration;
                        this.isLooping || (this.isLive && (this.hlsJs ? this.hlsJs.liveSyncPosition && (this.videoTag.currentTime = this.hlsJs.liveSyncPosition) : e && window.isFinite(e) && (this.videoTag.currentTime = e)), this.startHlsLoad())
                    }, t.onPlaying = function() {
                        this.videoTag.paused || (this.isEnded = !1, this.reloadTimecode = void 0, this.store.dispatch(s.T(this.playerId)), this.onBufferEnd(), this.onTimeUpdate())
                    }, t.onPause = function() {
                        this.videoTag.ended || this.store.dispatch(s.S(this.playerId)), this.onBufferEnd()
                    }, t.onVolumeChange = function() {
                        this.store.dispatch(s.W(this.playerId, this.videoTag.muted, this.videoTag.volume)), Object(b.b)("volume", this.videoTag.volume)
                    }, t.onSeeking = function() {
                        this.seeking || this.isLooping || (this.seeking = !0, this.store.dispatch(s.V(this.playerId))), this.store.dispatch(Object(S.resetGuestState)(this.hydraExperienceId)), this.hasInitialSeeked = !0
                    }, t.onSeeked = function() {
                        this.seeking = !1, this.isEnded = !1, this.isLooping = !1, this.store.dispatch(s.U(this.playerId)), this.onBufferEnd(), this.updateRotation()
                    }, t.updateRotation = function() {
                        var e, t, n, i = (this.getId3Track() || {}).cues || [],
                            r = i.length,
                            s = this.videoTag.currentTime;
                        for (e = 0; e < r && i[e].startTime <= s; e++) "TXXX" === (t = i[e]).value.key && "JSONMetadata" === t.value.info && (n = t);
                        if (n) try {
                            var a = JSON.parse(n.value.data),
                                o = this.normalizeRotation(a.rotation),
                                c = this.getCurrentTrack();
                            void 0 !== o && o !== c.rotation && this.store.dispatch(Object(E.n)(this.playerId, o))
                        } catch (d) {}
                    }, t.onEnded = function() {
                        this.onBufferEnd(), this.isEnded = this.hasEndedOnce = !0, this.store.dispatch(Object(E.p)(this.playerId));
                        var e = this.getCurrentTrack().shouldLoop;
                        if (this.shouldLoop = e, this.shouldLoop) {
                            this.isLooping = !0;
                            var t = this.videoTag.play() || Promise.resolve();
                            this.playPromise = t.catch((function() {}))
                        }
                        var n = this.getCurrentTrack(),
                            i = n.isLive,
                            r = n.isLiveTimecode;
                        i && (r && this.reload({
                            requestedTimecode: -1,
                            autoPlay: !0
                        }), this.reload()), this.hasInitialSeeked = !1
                    }, t.onHlsJsError = function(e, t, n) {
                        if (n.fatal) {
                            var i = n.response && n.response.code;
                            this.teardownPlayer(), 403 === i ? "broadcast" === e || "live" === e || "periscope" === e ? this.store.dispatch(Object(f.h)(this.playerId, new Error(a.a.LIVE_VIDEO_GEOBLOCK_ERROR))) : this.store.dispatch(Object(f.h)(this.playerId, new Error(a.a.MEDIA_GEOBLOCK_ERROR))) : (i = i ? ":" + i : "", this.store.dispatch(Object(f.h)(this.playerId, new Error(n.type + ":" + n.details + i))))
                        }
                    }, t.onError = function(e, t) {
                        if (this.videoTag.error) {
                            var n;
                            switch (this.videoTag.error.code) {
                                case P:
                                    n = a.a.MEDIA_ABORTED;
                                    break;
                                case C:
                                    n = a.a.MEDIA_NETWORK_ERROR;
                                    break;
                                case _:
                                    n = a.a.MEDIA_DECODE_ERROR;
                                    break;
                                case R:
                                    n = a.a.MEDIA_SRC_INVALID_ERROR;
                                    break;
                                default:
                                    n = a.a.MEDIA_UNKNOWN_CODE_ERROR
                            }
                            this.store.dispatch(Object(f.h)(this.playerId, new Error(n))), this.teardownPlayer()
                        }
                    }, t.normalizeRotation = function(e) {
                        var t = 90 * Math.floor((Math.floor(e) + 45) / 90) % 360;
                        return 270 === t ? -90 : t
                    }, t.isMissingDataProp = function(e) {
                        var t, n = e,
                            i = Array.isArray(n),
                            r = 0;
                        for (n = i ? n : n[Symbol.iterator]();;) {
                            var s;
                            if (i) {
                                if (r >= n.length) break;
                                s = n[r++]
                            } else {
                                if ((r = n.next()).done) break;
                                s = r.value
                            }
                            var a = s;
                            if ("TXXX" === a.value.key) {
                                t = a;
                                break
                            }
                        }
                        return t && "" === t.value.data && /\[.*\]|\{.*\}$/.test(t.value.info)
                    }, t.onId3CueWithInfo = function(e) {
                        var t = /(\[|\{)/,
                            n = e.currentTarget.activeCues,
                            i = this.activeCues;
                        this.activeCues = {};
                        var r = n,
                            s = Array.isArray(r),
                            a = 0;
                        for (r = s ? r : r[Symbol.iterator]();;) {
                            var o;
                            if (s) {
                                if (a >= r.length) break;
                                o = r[a++]
                            } else {
                                if ((a = r.next()).done) break;
                                o = a.value
                            }
                            var c = o,
                                d = c.value,
                                u = d.key,
                                l = d.info,
                                h = [c.startTime, u, l].join("|");
                            if (this.activeCues[h] = !0, !i[h] && "TXXX" === u) {
                                var p = l.search(t);
                                if (-1 !== p) {
                                    var f = l.slice(0, p),
                                        v = l.slice(p);
                                    this.parseId3Data(f, v)
                                }
                            }
                        }
                    }, t.onId3CueWithData = function(e) {
                        var t = e.currentTarget.activeCues,
                            n = this.activeCues;
                        this.activeCues = {};
                        var i = [],
                            r = t,
                            s = Array.isArray(r),
                            a = 0;
                        for (r = s ? r : r[Symbol.iterator]();;) {
                            var o;
                            if (s) {
                                if (a >= r.length) break;
                                o = r[a++]
                            } else {
                                if ((a = r.next()).done) break;
                                o = a.value
                            }
                            var c = o,
                                d = c.value,
                                u = d.key,
                                l = d.info,
                                h = d.data,
                                p = [c.startTime, u, l, h].join("|");
                            this.activeCues[p] = !0, n[p] || ("TXXX" === u && this.parseId3Data(l, h), c.value && i.push(c.value))
                        }
                        this.store.dispatch(Object(E.j)(this.playerId, i))
                    }, t.parseId3Data = function(e, t) {
                        try {
                            var n = JSON.parse(t);
                            if ("JSONMetadata" === e) {
                                var i = this.normalizeRotation(n.rotation);
                                this.store.dispatch(Object(E.n)(this.playerId, i)), this.store.dispatch(Object(E.k)(this.playerId, n))
                            } else "HydraAudioLevel" === e ? this.store.dispatch(Object(S.updateAudioLevels)(this.hydraExperienceId, n)) : "HydraParticipants" === e && this.store.dispatch(Object(S.updateGuestInfo)(this.hydraExperienceId, n))
                        } catch (r) {}
                    }, t.onFragmentLoading = function(e, t) {
                        void 0 !== t && void 0 !== t.frag && t.frag.programDateTime && (this.dateTimeAnchor = {
                            streamTimeMs: 1e3 * t.frag.start,
                            absoluteTimeMs: F(t.frag.programDateTime)
                        })
                    }, t.onFragmentParsingInitSegment = function(e, t) {
                        if (void 0 !== t && void 0 !== t.frag && void 0 !== t.frag.level && void 0 !== this.hlsJs) {
                            var n = this.hlsJs.levels[t.frag.level];
                            void 0 !== n && void 0 !== n.details && void 0 !== n.details.programDateTime && void 0 !== n.details.fragments && void 0 !== n.details.fragments[0] && (this.dateTimeAnchor = {
                                streamTimeMs: 1e3 * n.details.fragments[0].start,
                                absoluteTimeMs: F(n.details.programDateTime)
                            })
                        }
                    }, t.onLevelSwitching = function(e, t) {
                        if (this.hlsJs && this.hlsJs.levels) {
                            var n = this.hlsJs.levels[t.level].bitrate;
                            void 0 !== n && this.store.dispatch(Object(E.f)(this.playerId, n))
                        }
                    }, t.onBufferStart = function() {
                        var e = this,
                            t = !this.hasEndedOnce || this.videoTag && this.videoTag.currentTime >= 2;
                        this.shouldLoop && !t || (this.buffering = !0, setTimeout((function() {
                            e.buffering && e.store.dispatch(Object(E.h)(e.playerId))
                        }), 20))
                    }, t.onBufferEnd = function() {
                        this.buffering && (this.buffering = !1, this.store.dispatch(Object(E.g)(this.playerId)))
                    }, t.getCaptionsTrack = function(e) {
                        var t = e || this.videoTag.textTracks || [],
                            n = this.language;
                        return n ? function(e, t) {
                            for (var n, i, r = e.length, s = 0; s < r; s++) {
                                var a = e[s],
                                    o = a.language;
                                if (T(a)) {
                                    if (o && t && o.toLowerCase() === t.toLowerCase()) return a;
                                    !i && g(o, t) ? i = a : n || o || (n = a)
                                }
                            }
                            return i || n
                        }(t, n) : function(e) {
                            for (var t = e.length, n = 0; n < t; n++) {
                                var i = e[n];
                                if (T(i)) return i
                            }
                        }(t)
                    }, t.getSubtitlesTrack = function() {
                        return this.getCaptionsTrack(function(e) {
                            for (var t = e.length, n = [], i = 0; i < t; i++) {
                                var r = e[i];
                                "captions" !== r.kind && n.push(r)
                            }
                            return n
                        }(this.videoTag.textTracks))
                    }, t.getId3Track = function() {
                        for (var e = 0; e < this.videoTag.textTracks.length; e++) {
                            var t = this.videoTag.textTracks[e];
                            if (t.kind === k) return t
                        }
                    }, t.handleTrackAdded = function(e) {
                        var t = e.track,
                            n = L,
                            i = k,
                            r = A;
                        t.kind === i ? this.startListeningForId3Tags() : t.mode = t.kind === n ? w : j, !Object(I.c)() || t.kind !== n && t.kind !== r || (this.id3Disabled = !0, this.stopListeningForId3Tags())
                    }, t.startListeningForId3Tags = function() {
                        var e = this.getId3Track();
                        if (void 0 !== e && !this.id3Disabled) {
                            var t = e.cues;
                            void 0 === this.missingDataProp && t && (this.missingDataProp = this.isMissingDataProp(t)), e.oncuechange = this.missingDataProp ? this.onId3CueWithInfo : this.onId3CueWithData, e.mode = w
                        }
                    }, t.stopListeningForId3Tags = function() {
                        var e = this.getId3Track();
                        void 0 !== e && (e.oncuechange = null, e.mode = j)
                    }, t.handleControlUpdate = function(e) {
                        var t = this;
                        switch (e.muteState) {
                            case s.i.MUTE_REQUESTED:
                                this.videoTag.muted = !0;
                                break;
                            case s.i.UNMUTE_REQUESTED:
                                this.videoTag.muted = !1
                        }
                        switch (e.playState) {
                            case s.j.PAUSE_REQUESTED:
                                var n = function() {
                                    t.hlsJs && (t.hlsJs.stopLoad(), t.hasLoaded = !1), t.videoTag && (t.videoTag.pause(), t.stopListeningForId3Tags())
                                };
                                this.videoTag.paused ? n() : this.playPromise.then(n);
                                break;
                            case s.j.PLAY_REQUESTED:
                                var i = this.hlsJs ? this.hlsJsPlay() : this.videoTag.play() || Promise.resolve();
                                this.playPromise = i.catch((function() {
                                    t.videoTag && t.videoTag.paused && t.store.dispatch(s.A(t.playerId))
                                })), this.startListeningForId3Tags()
                        }
                        if (e.captionsState && this.hasCaptions() && this.videoTag.readyState >= 2) {
                            var r = this.getCaptionsTrack();
                            switch (e.captionsState) {
                                case s.e.CAPTIONS_ON_REQUESTED:
                                    if (this.isUserRequestedCaptions()) r.mode = U, this.store.dispatch(s.D(this.playerId, !0));
                                    else {
                                        var a = this.getSubtitlesTrack();
                                        a && (a.mode = U, this.store.dispatch(s.D(this.playerId, !0)))
                                    }
                                    break;
                                case s.e.CAPTIONS_OFF_REQUESTED:
                                    r.mode = r.kind === L ? w : j, this.store.dispatch(s.D(this.playerId, !1))
                            }
                        }
                        if (!this.seeking) {
                            var o = Math.max(0, Math.min(this.videoTag.duration - .5, this.videoTag.duration * e.scrubToFraction));
                            window.isFinite(o) && (this.videoTag.currentTime = o)
                        }
                        e.volume >= 0 && (this.videoTag.volume = e.volume)
                    }, t.startHlsLoad = function() {
                        if (this.hlsJs && !this.hasLoaded) {
                            var e = -1;
                            this.hasInitialSeeked || (e = this.getInitialTimeCode(), this.hasInitialSeeked = !0), this.hasLoaded = !0, this.hlsJs.startLoad(e)
                        }
                    }, t.hlsJsPlay = function() {
                        var e = this;
                        return new Promise((function(t) {
                            if (e.videoTag && (e.videoTag.readyState >= 3 || e.isEnded)) t();
                            else {
                                e.videoTag.addEventListener("canplay", (function n() {
                                    e.videoTag && e.videoTag.readyState >= 3 && (t(), e.videoTag.removeEventListener("canplay", n))
                                }))
                            }
                            e.startHlsLoad()
                        })).then((function() {
                            return e.checkInitialSeek(), e.videoTag.play() || Promise.resolve()
                        }))
                    }, t.xhrSetup = function(e, t, n) {
                        var i = new v.a(t).getHostname(),
                            r = i && this.liveAdDomainRegex.test(i),
                            s = n === m.ResourceTypes.KEY;
                        (r || s) && (e.withCredentials = !0)
                    }, t.hasCaptions = function() {
                        return void 0 !== this.getCaptionsTrack()
                    }, t.renderVideoVariant = function() {
                        var e = this.getCurrentTrack(),
                            t = e.contentType,
                            n = e.variants,
                            i = this.getPlayerState().features.bitrateCap,
                            r = Object(y.a)(n),
                            s = r.useMse,
                            o = r.selectedVariant;
                        return o ? s ? this.renderHlsJs(o, i, t) : this.renderHtml5(o) : (this.store.dispatch(Object(f.h)(this.playerId, new Error(a.a.MEDIA_NOT_SUPPORTED))), Promise.resolve())
                    }, t.renderHlsJs = function(e, t, n) {
                        var i = this,
                            r = this.getInitialTimeCode();
                        return Object(y.b)(this.hlsjsVersion).then((function(s) {
                            var a, o;
                            m = s, i.hasLoaded = i.precache, i.hlsJs = new m({
                                autoStartLoad: i.precache,
                                enableWorker: i.isHlsWorkerEnabled,
                                fragLoadingMaxRetry: 6,
                                fragLoadingRetryDelay: 500,
                                fragLoadingTimeOut: 2e4,
                                levelLoadingMaxRetry: 4,
                                levelLoadingTimeOut: 2e4,
                                loader: (a = i.playerId, o = m, function(e) {
                                    function t(t) {
                                        var n, i = (n = e.call(this, t) || this).load.bind(l()(n));
                                        return n.load = function(e, t, n) {
                                            var r = n.onSuccess;
                                            n.onSuccess = function(e, t, n) {
                                                Object(d.b)(a, (function(e) {
                                                    e.add(t.total)
                                                })), r(e, t, n)
                                            }, i(e, t, n)
                                        }, n
                                    }
                                    return p()(t, e), t
                                }(o.DefaultConfig.loader)),
                                manifestLoadingMaxRetry: 4,
                                manifestLoadingTimeOut: 2e4,
                                maxBufferHole: 1.5,
                                maxSeekHole: 5,
                                startLevel: -1,
                                startPosition: r,
                                xhrSetup: i.xhrSetup.bind(i),
                                capLevelToPlayerSize: !t,
                                debug: {
                                    trace: function(e) {
                                        i.logger.log("HlsJs.trace", e)
                                    },
                                    debug: function(e) {
                                        i.logger.log("HlsJs.debug", e)
                                    },
                                    log: function(e) {
                                        i.logger.log("HlsJs.log", e)
                                    },
                                    warn: function(e) {
                                        i.logger.log("HlsJs.warn", e)
                                    },
                                    info: function(e) {
                                        i.logger.log("HlsJs.info", e)
                                    },
                                    error: function(e) {
                                        i.logger.log("HlsJs.error", e)
                                    }
                                }
                            }), i.hlsJs.on(m.Events.ERROR, i.onHlsJsError.bind(i, n)), i.hlsJs.on(m.Events.FRAG_LOADING, i.onFragmentLoading), i.hlsJs.on(m.Events.FRAG_PARSING_INIT_SEGMENT, i.onFragmentParsingInitSegment), i.hlsJs.on(m.Events.LEVEL_SWITCHING, i.onLevelSwitching), i.hlsJs.loadSource(e.src), i.hlsJs.attachMedia(i.videoTag), i.hlsJs.on(m.Events.MANIFEST_PARSED, i.onManifestParsed.bind(i, t))
                        })).catch((function() {
                            i.store.dispatch(Object(f.h)(i.playerId, new Error(a.a.CONFIG_NETWORK_ERROR + ":HlsJsChunk")))
                        }))
                    }, t.renderHtml5 = function(e) {
                        return this.videoTag.setAttribute("preload", this.precache ? "auto" : "none"), this.videoTag.setAttribute("src", e.src), this.videoTag.setAttribute("type", e.type), Promise.resolve()
                    }, t.onManifestParsed = function(e, t, n) {
                        var i = n.levels;
                        if (e) {
                            var r;
                            for (r = 1; r < i.length && !(i[r].bitrate > e); r++);
                            this.hlsJs.autoLevelCapping = r - 1
                        }
                        this.dispatchPlayerReady()
                    }, t.dispatchPlayerReady = function() {
                        this.store.dispatch(Object(E.m)(this.playerId))
                    }, t.renderContainer = function() {
                        var e = document.createElement("div");
                        if (e.style.position = "relative", e.style.width = "100%", e.style.height = "100%", e.style.backgroundColor = "transparent", e.style.overflow = "hidden", e.appendChild(this.videoTag), Object(I.b)()) {
                            var t = document.createElement("style"),
                                n = document.createTextNode("video::-webkit-media-controls { display: none !important; }");
                            t.appendChild(n), e.appendChild(t)
                        }
                        this.domElement.innerHTML = "", this.domElement.appendChild(e)
                    }, t.getPlayerState = function() {
                        return this.store.getState().players[this.playerId] || {}
                    }, t.getCurrentTrack = function() {
                        var e = this.getPlayerState();
                        return Object(o.b)(e)
                    }, t.getInitialTimeCode = function() {
                        var e = this.reloadTimecode,
                            t = this.getCurrentTrack(),
                            n = t.isLive,
                            i = t.isLiveTimecode,
                            r = [e, t.requestedTimecode, t.replayEditedStartTime].find((function(e) {
                                return e > 0 || 0 === e
                            }));
                        return n && !i || void 0 === r ? -1 : r
                    }, t.isUserRequestedCaptions = function() {
                        return this.getPlayerState().userSpecifiedCaptions
                    }, t.isSeekable = function(e) {
                        if (0 === e || e > 0)
                            for (var t = this.videoTag.seekable, n = t.length, i = 0; i < n; i++)
                                if (t.start(i) <= e && e <= t.end(i)) return !0;
                        return !1
                    }, t.cleanupVideoElement = function() {
                        if (this.hasCaptions()) {
                            var e = this.getCaptionsTrack();
                            if (Array.isArray(e.cues))
                                for (; e.cues.length;) e.removeCue(e.cues[0])
                        }
                    }, t.render = function() {
                        var e = this,
                            t = this.getPlayerState(),
                            n = t.posterImage;
                        if (void 0 !== t.currentTrackId)
                            if (t.error) this.teardownPlayer();
                            else {
                                var i = this.getCurrentTrack();
                                if (this.renderedTrackId !== t.currentTrackId) {
                                    this.cleanupVideoElement(), this.hlsJs && (this.hlsJs.destroy(), this.hlsJs = void 0, this.hasLoaded = !1), n && this.videoTag.setAttribute("poster", n);
                                    var r = i.isLive,
                                        s = i.shouldLoop,
                                        a = i.reloadTimecode;
                                    r || (this.reloadTimecode = a), this.hasInitialSeeked = !1, this.renderedTrackId = t.currentTrackId, this.playerRenderPromise = this.renderVideoVariant(), this.playerRenderPromise.then((function() {
                                        e.renderContainer(), e.isLive = r, e.shouldLoop = s, e.videoTag.volume = Object(b.a)("volume", 1) || 1, e.playerRenderPromise = void 0
                                    }))
                                }
                                if (i.playerReady) {
                                    var o = t.fullscreen.isFullscreen,
                                        c = i.rotation;
                                    this.handleControlUpdate(t.controls), this.renderRotationAndScale(c, o)
                                }
                            }
                    }, t.renderRotationAndScale = function(e, t) {
                        var n = this.videoTag,
                            i = 100,
                            r = 100,
                            s = 0,
                            a = 0,
                            o = !1 !== this.playerHandlesRotations;
                        if (o && (90 === e || -90 === e)) {
                            var c = n.parentNode || {},
                                d = c.offsetWidth / c.offsetHeight;
                            isFinite(d) && (s = (100 - (r = 100 * d)) / 2, a = (100 - (i = 100 / d)) / 2)
                        }
                        n.style.width = i + "%", n.style.height = r + "%", n.style.top = s + "%", n.style.left = a + "%", o && (t ? (n.style.transform = "rotate(" + e + "deg) scale(1.005)", n.style.objectFit = "contain") : (n.style.transform = "rotate(" + e + "deg) scale(1.005)", n.style.objectFit = this.objectFitVideo))
                    }, e
                }();

            function F(e) {
                return void 0 !== e.getTime ? e.getTime() : e
            }
            t.a = D
        },
        XSs6: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return o
            })), n.d(t, "a", (function() {
                return d
            }));
            var i = n("RhWx"),
                r = n.n(i),
                s = (n("KI7T"), n("PN9k"), n("q+jO")),
                a = n("hmHa"),
                o = function(e, t, n) {
                    return function(i) {
                        var r = t();
                        i(c(e, r)), i(n ? Object(s.f)(e) : Object(a.L)(e))
                    }
                },
                c = function(e, t) {
                    return {
                        type: "AD_LOADED",
                        playerId: e,
                        adResponse: t
                    }
                };
            t.b = function(e, t) {
                switch (t.type) {
                    case "AD_LOADED":
                        var n = e.tracks,
                            i = t.adResponse;
                        if (void 0 === i.mediaInfo) return Object.assign({}, e, {
                            adLoaded: !0
                        });
                        var s, a = i.mediaInfo.variants.find((function(e) {
                                return 0 === e.content_type.indexOf("application/x-mpegURL")
                            })),
                            o = i.promotedContent || {};
                        return i.mediaInfo.call_to_action && (s = {
                            type: "watch_now" === i.mediaInfo.call_to_action.type ? "watch" : "url",
                            url: i.mediaInfo.call_to_action.url
                        }), Object.assign({}, e, {
                            currentTrackId: 1,
                            nextTrackIds: [0],
                            tracks: [].concat(r()(n), [{
                                id: 1,
                                displayType: "ad",
                                cta: s,
                                contentId: i.adId,
                                contentType: "media_entity",
                                publisherId: i.mediaInfo.publisher_id_str,
                                durationMs: i.mediaInfo.duration_millis,
                                shouldLoop: !1,
                                impressionId: o.impressionId,
                                disclosureType: o.disclosureType,
                                dynamicPrerollType: i.dynamicPrerollType,
                                rotation: 0,
                                variants: [{
                                    src: a.url,
                                    type: a.content_type
                                }],
                                currentVariantIndex: 0,
                                advertiserName: i.advertiserName
                            }]),
                            videoAnalyticsScribePassthrough: i.videoAnalyticsScribePassthrough,
                            adLoaded: !0
                        });
                    default:
                        return e
                }
            };
            var d = {
                adLoaded: !1
            }
        },
        YvQ8: function(e, t, n) {
            "use strict";
            var i = n("IGGJ");
            t.__esModule = !0, t.default = t.registerExperience = t.REGISTER_EXPERIENCE = void 0, n("xs+y");
            var r = i(n("RhWx"));
            n("zpx+"), n("7dyJ"), n("LnO1"), n("3eMz"), n("DB+v"), n("+5EW");
            var s = n("8SPO");
            t.REGISTER_EXPERIENCE = "REGISTER_EXPERIENCE";
            t.registerExperience = function() {
                return {
                    type: "REGISTER_EXPERIENCE"
                }
            };
            t.default = function(e) {
                return function(t) {
                    return function(n) {
                        switch (n.type) {
                            case "REGISTER_EXPERIENCE":
                                var i = e.getState(),
                                    a = Object.keys(i.hydraExperiences || {}).map((function(e) {
                                        return Number.parseInt(e, 10)
                                    })),
                                    o = Math.max.apply(Math, (0, r.default)(a)) + 1;
                                return Number.isFinite(o) || (o = 0), e.dispatch((0, s.initializeExperience)(o)), o;
                            default:
                                return t(n)
                        }
                    }
                }
            }
        },
        ZcJ2: function(e, t, n) {
            "use strict";
            n("yKDW"), n("dtAy");
            var i = 200,
                r = function() {
                    function e(e, t) {
                        void 0 === t && (t = i), this.httpClient = e, this.backOffMSec = t
                    }
                    var t = e.prototype;
                    return t.dispatch = function(e) {
                        var t = this;
                        return new Promise((function(n, i) {
                            t._dispatchOnce(0, n, i, e)
                        }))
                    }, t._dispatchOnce = function(e, t, n, i) {
                        var r = this;
                        this.httpClient.dispatch(i).then((function(s) {
                            r._handleResponse(e, t, n, i, s)
                        })).catch((function(s) {
                            r._handleReject(e, t, n, i, s)
                        }))
                    }, t._handleResponse = function(e, t, n, i, r) {
                        var s = this,
                            a = !1;
                        switch (r.status) {
                            case 404:
                            case 425:
                            case 429:
                            case 500:
                            case 502:
                            case 503:
                            case 504:
                            case 508:
                                a = !0
                        }!a || e >= 3 ? t(r) : setTimeout((function() {
                            s._dispatchOnce(e + 1, t, n, i)
                        }), this._backOffMSec(e))
                    }, t._handleReject = function(e, t, n, i, r) {
                        var s = this;
                        e >= 3 ? n(r) : setTimeout((function() {
                            s._dispatchOnce(e + 1, t, n, i)
                        }), this._backOffMSec(e))
                    }, t._backOffMSec = function(e) {
                        var t = this.backOffMSec,
                            n = Math.pow(3, e) * t;
                        return t + Math.random() * (n - t)
                    }, e
                }();
            t.a = r
        },
        a9ls: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return r
            }));
            var i = function(e, t) {
                    try {
                        window.localStorage.setItem(e, t)
                    } catch (n) {}
                },
                r = function(e, t) {
                    try {
                        return window.localStorage.getItem(e)
                    } catch (n) {
                        return t
                    }
                }
        },
        cOYg: function(e, t, n) {
            "use strict";
            t.a = {
                BROADCAST_EVENT_ASSOCIATION_UPDATED: "broadcastEventAssociationUpdated",
                FULLSCREEN_ENTERED: "fullscreenEntered",
                FULLSCREEN_EXITED: "fullscreenExited",
                GEOBLOCK_ERROR: "geoblockError",
                LIVE_ENDED: "liveEnded",
                LIVE_STARTED: "liveStarted",
                LIVE_CLICKTHROUGH: "liveClickthrough",
                MUTE: "mute",
                NO_COOKIES_ERROR: "noCookiesError",
                PAUSE: "pause",
                PLAY: "play",
                PLAYBACK_COMPLETE: "playbackComplete",
                READY: "ready",
                UNMUTE: "unmute"
            }
        },
        fjNU: function(e, t) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var i = new Uint8Array(16);
                e.exports = function() {
                    return n(i), i
                }
            } else {
                var r = new Array(16);
                e.exports = function() {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
                    return r
                }
            }
        },
        hmHa: function(e, t, n) {
            "use strict";
            n.d(t, "j", (function() {
                return i
            })), n.d(t, "i", (function() {
                return r
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "o", (function() {
                return a
            })), n.d(t, "L", (function() {
                return o
            })), n.d(t, "n", (function() {
                return c
            })), n.d(t, "K", (function() {
                return d
            })), n.d(t, "p", (function() {
                return u
            })), n.d(t, "M", (function() {
                return l
            })), n.d(t, "w", (function() {
                return h
            })), n.d(t, "T", (function() {
                return p
            })), n.d(t, "v", (function() {
                return f
            })), n.d(t, "S", (function() {
                return v
            })), n.d(t, "m", (function() {
                return E
            })), n.d(t, "J", (function() {
                return y
            })), n.d(t, "r", (function() {
                return T
            })), n.d(t, "O", (function() {
                return g
            })), n.d(t, "s", (function() {
                return m
            })), n.d(t, "P", (function() {
                return b
            })), n.d(t, "z", (function() {
                return I
            })), n.d(t, "W", (function() {
                return S
            })), n.d(t, "q", (function() {
                return O
            })), n.d(t, "N", (function() {
                return P
            })), n.d(t, "x", (function() {
                return C
            })), n.d(t, "U", (function() {
                return _
            })), n.d(t, "y", (function() {
                return R
            })), n.d(t, "V", (function() {
                return L
            })), n.d(t, "g", (function() {
                return k
            })), n.d(t, "F", (function() {
                return A
            })), n.d(t, "t", (function() {
                return j
            })), n.d(t, "Q", (function() {
                return w
            })), n.d(t, "l", (function() {
                return U
            })), n.d(t, "I", (function() {
                return D
            })), n.d(t, "k", (function() {
                return F
            })), n.d(t, "H", (function() {
                return N
            })), n.d(t, "d", (function() {
                return M
            })), n.d(t, "D", (function() {
                return x
            })), n.d(t, "u", (function() {
                return V
            })), n.d(t, "R", (function() {
                return H
            })), n.d(t, "b", (function() {
                return Q
            })), n.d(t, "B", (function() {
                return G
            })), n.d(t, "c", (function() {
                return J
            })), n.d(t, "C", (function() {
                return B
            })), n.d(t, "h", (function() {
                return K
            })), n.d(t, "G", (function() {
                return X
            })), n.d(t, "a", (function() {
                return W
            })), n.d(t, "A", (function() {
                return z
            })), n.d(t, "f", (function() {
                return Y
            })), n.d(t, "E", (function() {
                return q
            }));
            var i = {
                    PAUSE_REQUESTED: "PAUSE_REQUESTED",
                    PLAY_REQUESTED: "PLAY_REQUESTED"
                },
                r = {
                    MUTE_REQUESTED: "MUTE_REQUESTED",
                    UNMUTE_REQUESTED: "UNMUTE_REQUESTED"
                },
                s = {
                    CAPTIONS_ON_REQUESTED: "CAPTIONS_ON_REQUESTED",
                    CAPTIONS_OFF_REQUESTED: "CAPTIONS_OFF_REQUESTED",
                    CAPTIONS_RESET_REQUESTED: "CAPTIONS_RESET_REQUESTED"
                },
                a = "REQUEST_PLAY",
                o = function(e) {
                    return {
                        type: a,
                        playerId: e
                    }
                },
                c = "REQUEST_PAUSE",
                d = function(e) {
                    return {
                        type: c,
                        playerId: e
                    }
                },
                u = "REQUEST_REPLAY",
                l = function(e) {
                    return {
                        type: u,
                        playerId: e
                    }
                },
                h = "VIDEO_PLAYED",
                p = function(e) {
                    return {
                        type: h,
                        playerId: e
                    }
                },
                f = "VIDEO_PAUSED",
                v = function(e) {
                    return {
                        type: f,
                        playerId: e
                    }
                },
                E = "REQUEST_MUTE",
                y = function(e) {
                    return {
                        type: E,
                        playerId: e
                    }
                },
                T = "REQUEST_UNMUTE",
                g = function(e) {
                    return {
                        type: T,
                        playerId: e
                    }
                },
                m = "REQUEST_VOLUME_CHANGE",
                b = function(e, t) {
                    return {
                        type: m,
                        volume: t,
                        playerId: e
                    }
                },
                I = "VIDEO_VOLUME_CHANGED",
                S = function(e, t, n) {
                    return {
                        type: I,
                        isMuted: t,
                        volume: n,
                        playerId: e
                    }
                },
                O = "REQUEST_SCRUB_TO_FRACTION",
                P = function(e, t) {
                    return {
                        type: O,
                        fraction: t,
                        playerId: e
                    }
                },
                C = "VIDEO_SEEKED",
                _ = function(e) {
                    return {
                        type: C,
                        playerId: e
                    }
                },
                R = "VIDEO_SEEKING",
                L = function(e) {
                    return {
                        type: R,
                        playerId: e
                    }
                },
                k = "HIDE_CONTROLS",
                A = function(e) {
                    return {
                        type: k,
                        playerId: e
                    }
                },
                j = "SHOW_CONTROLS",
                w = function(e) {
                    return {
                        type: j,
                        playerId: e
                    }
                },
                U = "REQUEST_CAPTIONS_ON",
                D = function(e, t) {
                    return void 0 === t && (t = !0), {
                        type: U,
                        isUserSet: t,
                        playerId: e
                    }
                },
                F = "REQUEST_CAPTIONS_OFF",
                N = function(e, t) {
                    return void 0 === t && (t = !0), {
                        type: F,
                        isUserSet: t,
                        playerId: e
                    }
                },
                M = "CAPTIONS_TOGGLED",
                x = function(e, t) {
                    return {
                        type: M,
                        areCaptionsShown: t,
                        playerId: e
                    }
                },
                V = "UPDATE_VISIBILITY",
                H = function(e, t, n, i) {
                    return {
                        type: V,
                        playerId: e,
                        percentVisible: t,
                        percentOfViewportOccupied: n,
                        sizesInfo: i
                    }
                },
                Q = "CALL_TO_ACTION_CLICKED",
                G = function(e) {
                    return {
                        type: Q,
                        playerId: e
                    }
                },
                J = "CALL_TO_ACTION_IMPRESSION",
                B = function(e) {
                    return {
                        type: J,
                        playerId: e
                    }
                },
                K = "LIVE_CLICKTHROUGH_CLICKED",
                X = function(e) {
                    return {
                        type: K,
                        playerId: e
                    }
                },
                W = "AUTOPLAY_DISABLED",
                z = function(e) {
                    return {
                        type: W,
                        playerId: e
                    }
                },
                Y = "DATA_USAGE_COLLECTED",
                q = function(e, t) {
                    return {
                        type: Y,
                        playerId: e,
                        bytes: t
                    }
                }
        },
        oFRr: function(e, t, n) {
            "use strict";
            var i = n("yWCo");
            t.__esModule = !0, t.default = void 0;
            var r = n("PNAC");
            t.updateAudioLevels = r.updateAudioLevels;
            var s = n("+STa");
            t.updateGuestInfo = s.updateGuestInfo;
            var a = i(n("YvQ8"));
            t.hydraMiddleware = a.default, t.registerExperience = a.registerExperience;
            var o = i(n("8SPO"));
            t.resetGuestState = o.resetGuestState, t.teardownExperience = o.teardownExperience;
            var c = o.default;
            t.default = c
        },
        "q+jO": function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return a
            })), n.d(t, "f", (function() {
                return o
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "e", (function() {
                return d
            })), n.d(t, "a", (function() {
                return u
            }));
            n("KI7T"), n("PN9k");
            var i = n("Q6z5"),
                r = n("GV/0"),
                s = n("hmHa"),
                a = "PLAY_PREVIEW",
                o = function(e) {
                    return {
                        type: a,
                        playerId: e
                    }
                },
                c = "PAUSE_PREVIEW",
                d = function(e) {
                    return {
                        type: c,
                        playerId: e
                    }
                };
            t.d = function(e, t) {
                switch (t.type) {
                    case i.c:
                        return Object.assign({}, e, {
                            initiallyMutedCaptions: t.initiallyMutedCaptions
                        });
                    case a:
                        return e.isPlaying ? e : Object.assign({}, e, {
                            isPreview: !0,
                            controls: Object.assign({}, e.controls, {
                                muteState: s.i.MUTE_REQUESTED
                            })
                        });
                    case c:
                        return Object.assign({}, e, {
                            isPreview: !0,
                            controls: Object.assign({}, e.controls, {
                                muteState: s.i.MUTE_REQUESTED
                            })
                        });
                    case s.o:
                    case s.p:
                    case s.r:
                    case s.s:
                    case s.q:
                    case r.b:
                        if (!e.isPreview) return e;
                        var n = "gif" === e.tracks.find((function(t) {
                            return t.id === e.currentTrackId
                        })).contentType ? void 0 : s.i.UNMUTE_REQUESTED;
                        return Object.assign({}, e, {
                            isPreview: !1,
                            controls: Object.assign({}, e.controls, {
                                muteState: n
                            })
                        });
                    default:
                        return e
                }
            };
            var u = {
                isPreview: !1
            }
        },
        q3QN: function(e, t, n) {
            "use strict";
            var i = n("Q6z5"),
                r = n("q+jO"),
                s = n("hmHa"),
                a = n("XSs6"),
                o = n("4k9e"),
                c = {},
                d = (n("KI7T"), n("UweJ")),
                u = n("6/SQ"),
                l = n("+9X6"),
                h = {},
                p = n("UVZ6"),
                f = n("GV/0"),
                v = n("5vFY"),
                E = n("2/88"),
                y = (n("PN9k"), n("KEM+")),
                T = n.n(y),
                g = n("zytq"),
                m = 1e3,
                b = function() {
                    function e(e) {
                        var t = this;
                        T()(this, "onNativeFullscreenBegin", (function() {
                            t.setFullscreen(!0)
                        })), T()(this, "onNativeFullscreenEnd", (function() {
                            t.setFullscreen(!1)
                        })), T()(this, "onFullscreenChanged", (function() {
                            var e = (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) === t.fullscreenTarget;
                            e || (t.fullscreenTarget = void 0, t.removeDocumentListeners()), t.setFullscreen(e)
                        })), T()(this, "expand", (function(e, n) {
                            n && (t.expandTimeout = setTimeout((function() {
                                t.setFullscreen(!1)
                            }), m), t.fullscreenTarget && (t.fullscreenTarget.removeEventListener("touchstart", t._swipeStart), t.fullscreenTarget.removeEventListener("transitionend", t._fullscreenTransitionEnd), t.setFullscreen(!1)), t.fullscreenTarget = n, t.playerId = e, t.addDocumentListeners(), t.fullscreenTarget.requestFullscreen ? t.fullscreenTarget.requestFullscreen() : t.fullscreenTarget.mozRequestFullScreen ? t.fullscreenTarget.mozRequestFullScreen() : t.fullscreenTarget.webkitRequestFullscreen ? t.fullscreenTarget.webkitRequestFullscreen() : t.fullscreenTarget.msRequestFullscreen ? t.fullscreenTarget.msRequestFullscreen() : t.fullscreenTarget.webkitEnterFullscreen ? (t.addElementListeners(n), t.fullscreenTarget.webkitEnterFullscreen()) : (t.removeDocumentListeners(), t.removeElementListeners(), t.nonFullscreenStyle = Object.assign({}, t.fullscreenTarget.style), t.nonFullscreenPosition = t.fullscreenTarget.getBoundingClientRect(), t.fullscreenTarget.style.position = "fixed", t.fullscreenTarget.style.width = t.nonFullscreenPosition.right - t.nonFullscreenPosition.left + "px", t.fullscreenTarget.style.height = t.nonFullscreenPosition.bottom - t.nonFullscreenPosition.top + "px", t.fullscreenTarget.style.top = t.nonFullscreenPosition.top + "px", t.fullscreenTarget.style.left = t.nonFullscreenPosition.left + "px", t.fullscreenTarget.style.zIndex = "100", window.requestAnimationFrame((function() {
                                t.fullscreenTarget.style.transition = "width 0.25s, height 0.25s, top 0.25s, left 0.25s", t.fullscreenTarget.style.width = "100%", t.fullscreenTarget.style.height = "100%", t.fullscreenTarget.style.top = "0", t.fullscreenTarget.style.left = "0", t.fullscreenTarget.addEventListener("transitionend", t._fullscreenTransitionEnd)
                            }))))
                        })), T()(this, "shrink", (function(e) {
                            e === t.playerId && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : t.fullscreenTarget.webkitExitFullscreen ? t.fullscreenTarget.webkitExitFullscreen() : (t.fullscreenTarget.style.width = t.nonFullscreenPosition.right - t.nonFullscreenPosition.left + "px", t.fullscreenTarget.style.height = t.nonFullscreenPosition.bottom - t.nonFullscreenPosition.top + "px", t.fullscreenTarget.style.top = t.nonFullscreenPosition.top + "px", t.fullscreenTarget.style.left = t.nonFullscreenPosition.left + "px", t.fullscreenTarget.style.transition = "width 0.25s, height 0.25s, top 0.25s, left 0.25s", t.fullscreenTarget.addEventListener("transitionend", t._shrinkTransitionEnd), t.fullscreenTarget.removeEventListener("touchstart", t._swipeStart)))
                        })), T()(this, "_swipeStart", (function(e) {
                            t.addSwipeListeners(), t.touchStart = e.touches[0]
                        })), T()(this, "_swipeMove", (function(e) {
                            e.preventDefault();
                            var n = e.touches[0].pageY - t.touchStart.pageY;
                            t.swipeVector = Math.abs(n);
                            var i = n / t.swipeVector * Math.min(t.swipeVector, t.swipeVector / (t.swipeVector + 3 * t.fullscreenTarget.clientHeight / 4) * t.fullscreenTarget.clientHeight * 1 / 2);
                            t.fullscreenTarget.style.top = i + "px"
                        })), T()(this, "_swipeEnd", (function() {
                            t.removeSwipeListeners(), t.swipeVector > t.fullscreenTarget.clientHeight / 4 ? t.shrink(t.playerId) : t.fullscreenTarget.style.top = "0"
                        })), T()(this, "_fullscreenTransitionEnd", (function() {
                            t.fullscreenTarget.style.transition = "", t.fullscreenTarget.removeEventListener("transitionend", t._fullscreenTransitionEnd), t.fullscreenTarget.addEventListener("touchstart", t._swipeStart), t.setFullscreen(!0)
                        })), T()(this, "_shrinkTransitionEnd", (function() {
                            t.fullscreenTarget.removeEventListener("transitionend", t._shrinkTransitionEnd), t.fullscreenTarget.style.transition = "", t.fullscreenTarget.style.position = t.nonFullscreenStyle.position, t.fullscreenTarget.style.width = t.nonFullscreenStyle.width, t.fullscreenTarget.style.height = t.nonFullscreenStyle.height, t.fullscreenTarget.style.top = t.nonFullscreenStyle.top, t.fullscreenTarget.style.left = t.nonFullscreenStyle.left, t.fullscreenTarget.style.zIndex = t.nonFullscreenStyle.zIndex, t.setFullscreen(!1), t.fullscreenTarget = void 0
                        })), this.fullscreenTarget = void 0, this.playerId = void 0, this.onChange = e, this.isFullscreen = !1
                    }
                    var t = e.prototype;
                    return t.addDocumentListeners = function() {
                        document.addEventListener("webkitfullscreenchange", this.onFullscreenChanged), document.addEventListener("mozfullscreenchange", this.onFullscreenChanged), document.addEventListener("MSFullscreenChange", this.onFullscreenChanged), document.addEventListener("fullscreenchange", this.onFullscreenChanged)
                    }, t.removeDocumentListeners = function() {
                        document.removeEventListener("webkitfullscreenchange", this.onFullscreenChanged), document.removeEventListener("mozfullscreenchange", this.onFullscreenChanged), document.removeEventListener("MSFullscreenChange", this.onFullscreenChanged), document.removeEventListener("fullscreenchange", this.onFullscreenChanged)
                    }, t.addSwipeListeners = function() {
                        document.addEventListener("touchend", this._swipeEnd), document.addEventListener("touchmove", this._swipeMove)
                    }, t.addElementListeners = function(e) {
                        e.addEventListener("webkitbeginfullscreen", this.onNativeFullscreenBegin), e.addEventListener("webkitendfullscreen", this.onNativeFullscreenEnd)
                    }, t.removeElementListeners = function() {
                        var e = this.fullscreenTarget;
                        e && (e.removeEventListener("webkitbeginfullscreen", this.onNativeFullscreenBegin), e.removeEventListener("webkitendfullscreen", this.onNativeFullscreenEnd), e.removeEventListener("transitionend", this._fullscreenTransitionEnd), e.removeEventListener("transitionend", this._shrinkTransitionEnd))
                    }, t.removeSwipeListeners = function() {
                        document.removeEventListener("touchend", this._swipeEnd), document.removeEventListener("touchmove", this._swipeMove)
                    }, t.setFullscreen = function(e) {
                        clearTimeout(this.expandTimeout), this.onChange(this.playerId, e), e || (this.cleanup(), this.fullscreenTarget = void 0, this.playerId = void 0)
                    }, t.cleanup = function() {
                        clearTimeout(this.expandTimeout), this.removeDocumentListeners(), this.removeElementListeners(), this.removeSwipeListeners()
                    }, e
                }(),
                I = n("a9ls"),
                S = "volume",
                O = "captions",
                P = "ENABLED",
                C = "DISABLED";

            function _() {
                var e, t = Object(I.a)(O);
                if ((e = t) === P || e === C) return t
            }

            function R(e) {
                Object(I.b)(O, e)
            }
            var L = n("V8Kl"),
                k = n("BnRF"),
                A = n("oFRr"),
                j = n.n(A),
                w = [function(e) {
                    return function(t) {
                        return function(n) {
                            switch (n.type) {
                                case i.c:
                                    c[n.playerId] = function() {
                                        return "function" == typeof n.adProvider ? n.adProvider() : {}
                                    };
                                    break;
                                case o.a:
                                    delete c[n.playerId];
                                    break;
                                case s.o:
                                case r.c:
                                    var d = e.getState().players[n.playerId];
                                    if (d && !d.adLoaded && c[n.playerId]) return t(Object(a.c)(n.playerId, c[n.playerId], n.type === r.c))
                            }
                            return t(n)
                        }
                    }
                }, function(e) {
                    return function(t) {
                        return function(n) {
                            switch (n.type) {
                                case r.c:
                                    var i = Object(p.b)(e, n.playerId),
                                        a = i.initiallyMutedCaptions,
                                        o = i.userSpecifiedCaptions;
                                    a && !o && e.dispatch(Object(s.I)(n.playerId, !1));
                                    break;
                                case s.o:
                                case s.p:
                                case s.r:
                                case s.s:
                                case s.q:
                                case f.b:
                                    var c = Object(p.b)(e, n.playerId),
                                        d = c.isPreview,
                                        u = c.userSpecifiedCaptions;
                                    d && !u && e.dispatch(Object(s.H)(n.playerId, !1))
                            }
                            return t(n)
                        }
                    }
                }, E.a, function(e) {
                    var t = new b((function(t, n) {
                        e.dispatch(Object(f.h)(t, n))
                    }));
                    return function(n) {
                        return function(i) {
                            var r = e.getState().players[i.playerId],
                                s = i.type;
                            if (!r || s !== f.b && s !== f.c) return n(i);
                            var a = r.fullscreen.enableNative && Object(g.b)() && i.videoEl ? i.videoEl : i.containerEl;
                            return s === f.b ? (e.dispatch(Object(f.h)(i.playerId, !0)), t.expand(i.playerId, a)) : t.shrink(i.playerId), n(i)
                        }
                    }
                }, function(e) {
                    return function(t) {
                        return function(n) {
                            switch (n.type) {
                                case i.c:
                                    switch (e.dispatch(Object(s.P)(n.playerId, (a = parseFloat(Object(I.a)(S)), isNaN(a) ? 1 : a))), _()) {
                                        case P:
                                            e.dispatch(Object(s.I)(n.playerId, !0));
                                            break;
                                        case C:
                                            e.dispatch(Object(s.H)(n.playerId, !0))
                                    }
                                    break;
                                case s.z:
                                    (r = n.volume) >= 0 && null !== r && Object(I.b)(S, r);
                                    break;
                                case s.l:
                                    n.isUserSet && R(P);
                                    break;
                                case s.k:
                                    n.isUserSet && R(C)
                            }
                            var r, a;
                            return t(n)
                        }
                    }
                }, function(e) {
                    return function(t) {
                        return function(n) {
                            if (void 0 !== n.playerId && Object(d.d)(n.playerId, (function(e) {
                                    e.log("redux", n.type)
                                })), n.type === i.c) return h[n.playerId] = n.analytics, t(n);
                            var a = e.getState().players[n.playerId];
                            if (!a) return t(n);
                            var c = t(n),
                                p = e.getState().players[n.playerId],
                                f = h[n.playerId];
                            if (void 0 !== f) {
                                switch (n.type) {
                                    case l.d:
                                    case s.y:
                                        f.onTickEvent(p);
                                        break;
                                    case l.e:
                                        f.onTrackFinished(a), p.currentTrackId !== a.currentTrackId && f.onIntendToPlay(p);
                                        break;
                                    case l.b:
                                        "ad" === a.tracks.find((function(e) {
                                            return e.id === a.currentTrackId
                                        })).displayType && f.onAdSkip(a), p.currentTrackId !== a.currentTrackId && f.onIntendToPlay(p);
                                        break;
                                    case s.o:
                                    case r.c:
                                        f.onIntendToPlay(p);
                                        break;
                                    case s.p:
                                        f.onReplay(p);
                                        break;
                                    case s.z:
                                        a.isMuted && !p.isMuted ? f.onUnmute(a) : !a.isMuted && p.isMuted && f.onMute(a);
                                        break;
                                    case s.b:
                                        f.onCtaClick(a);
                                        break;
                                    case s.c:
                                        f.onCtaImpression(a);
                                        break;
                                    case o.a:
                                        f.onTeardown(a), delete h[n.playerId];
                                        break;
                                    case i.b:
                                        f.onConfigLoaded(p);
                                        break;
                                    case u.a:
                                    case u.c:
                                        var v, E = p.errorInfo,
                                            y = E.autoRetry ? E.count : void 0;
                                        v = n.type === u.a || n.type === u.c ? n.thrownError.message : n.error, f.onError(a, {
                                            error_code: n.type,
                                            error_message: v,
                                            media_details: {
                                                media_error: {
                                                    category: n.type,
                                                    is_fatal: n.isFatal,
                                                    message: v,
                                                    retry_count: y
                                                }
                                            }
                                        })
                                }
                                p && p.isPlaying !== a.isPlaying && (p.isPlaying ? f.onPlay(p) : f.onPause(p))
                            }
                            return c
                        }
                    }
                }, v.b, A.hydraMiddleware, L.a];
            t.a = Object(k.c)(Object(k.b)({
                players: o.b,
                hydraExperiences: j.a
            }), k.a.apply(void 0, w))
        },
        qZ96: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("1Pcy"),
                r = n.n(i),
                s = n("W/Kd"),
                a = n.n(s),
                o = n("KEM+"),
                c = n.n(o),
                d = n("ERkP"),
                u = (n("PN9k"), n("BNT4")),
                l = {
                    showControls: !0,
                    promotedContext: {}
                },
                h = {
                    createPlayer: function(e) {
                        var t = e.domElement,
                            n = e.source,
                            i = e.videoConfig,
                            r = e.httpClient,
                            s = e.twitterAuthedHttpClient,
                            a = e.options,
                            o = void 0 === a ? {} : a;
                        return new u.a({
                            videoConfig: i,
                            source: n,
                            domElement: t,
                            httpClient: r,
                            twitterAuthedHttpClient: s,
                            options: Object.assign({}, l, {}, o)
                        })
                    }
                },
                p = n("ZeN/"),
                f = n("ArJX");
            n.d(t, "CreatePlayer", (function() {
                return h
            })), n.d(t, "OBJECT_FIT_VALUES", (function() {
                return p.c
            }));
            var v = {
                    base: {
                        height: "100%",
                        position: "relative",
                        transform: "translateZ(0)",
                        width: "100%"
                    },
                    wrapper: {
                        height: "100%",
                        position: "absolute",
                        width: "100%"
                    }
                },
                E = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this, t) || this, c()(r()(n), "_setVideoRef", (function(e) {
                            e && n.videoPlayer.attach(e)
                        })), c()(r()(n), "_setContainerRef", (function(e) {
                            n.containerDomElement = e
                        })), c()(r()(n), "_renderCustomOverlay", (function() {
                            if (n.props.customOverlay) return n.props.customOverlay
                        })), n.videoPlayer = h.createPlayer({
                            source: n.props.videoId,
                            videoConfig: {
                                contentId: n.props.contentId,
                                contentType: n.props.contentType,
                                cta: n.props.cta,
                                durationMs: n.props.durationMs,
                                expandedUrl: n.props.expandedUrl,
                                eventId: n.props.eventId,
                                mediaAvailability: n.props.mediaAvailability,
                                publisherId: n.props.publisherId,
                                poster: n.props.poster,
                                loop: n.props.loop,
                                variants: n.props.variants,
                                viewCount: n.props.viewCount,
                                vmapUrl: n.props.vmapUrl
                            },
                            httpClient: n.props.httpClient,
                            twitterAuthedHttpClient: n.props.twitterAuthedHttpClient,
                            options: {
                                accessibilityLabel: n.props.accessibilityLabel,
                                autoplay: n.props.autoplay,
                                adProvider: n.props.adProvider,
                                analytics: n.props.analytics,
                                bitrateCap: n.props.bitrateCap,
                                enableNativeFullscreen: n.props.enableNativeFullscreen,
                                featureProvider: n.props.featureProvider,
                                hlsjsVersion: n.props.hlsjsVersion,
                                includeBroadcastEventAssociation: n.props.includeBroadcastEventAssociation,
                                initiallyMuted: n.props.initiallyMuted,
                                initiallyMutedCaptions: n.props.initiallyMutedCaptions,
                                intentToPlayTime: n.props.intentToPlayTime,
                                language: n.props.language,
                                maxLoopCount: n.props.maxLoopCount,
                                objectFitVideo: n.props.displayOptions.objectFitVideo,
                                playbackSessionId: n.props.playbackSessionId,
                                playerHandlesRotations: n.props.displayOptions.playerHandlesRotations,
                                precache: n.props.precache,
                                promotedContext: n.props.promotedContext,
                                requestedTimecode: n.props.requestedTimecode,
                                showControls: !1,
                                showGeolocationPrompt: n.props.geolocationPrompt,
                                videoEl: n.props.videoEl
                            }
                        }), n.props.setPlayerApi && n.props.setPlayerApi(n.videoPlayer), n
                    }
                    a()(t, e);
                    var n = t.prototype;
                    return n.componentWillUnmount = function() {
                        try {
                            this.videoPlayer.teardown()
                        } catch (e) {}
                    }, n.render = function() {
                        return d.createElement("div", {
                            ref: this._setContainerRef,
                            style: v.base
                        }, d.createElement("div", {
                            ref: this._setVideoRef,
                            style: v.wrapper
                        }), this._renderCustomOverlay())
                    }, t
                }(d.PureComponent);
            c()(E, "defaultProps", f.a), E.propTypes = {};
            t.default = E
        },
        yruv: function(e, t, n) {
            "use strict";
            var i = n("YKqM"),
                r = {},
                s = function() {
                    function e(e) {
                        this.httpClient = e
                    }
                    return e.prototype.dispatch = function(e) {
                        if ("get" === e.method.toLowerCase()) {
                            var t = e.params ? Object(i.b)(e.params) : "",
                                n = t ? "?" + t : "",
                                s = "" + e.host + e.path + n;
                            return r[s] || (r[s] = this.httpClient.dispatch(e).then((function(e) {
                                return delete r[s], e
                            })).catch((function(e) {
                                throw delete r[s], e
                            }))), r[s]
                        }
                        return this.httpClient.dispatch(e)
                    }, e
                }();
            t.a = s
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/ondemand.PlayerBase.46166254.js.map