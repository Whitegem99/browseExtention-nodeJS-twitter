(window.webpackJsonp = window.webpackJsonp || []).push([
    [200], {
        "+5EW": function(t, e, i) {
            "use strict";
            var n = i("7zcn"),
                a = i("QY3j")(1);
            n(n.P + n.F * !i("TLBd")([].map, !0), "Array", {
                map: function(t) {
                    return a(this, t, arguments[1])
                }
            })
        },
        "+nzf": function(t, e) {
            var i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (i) {
                var n = new Uint8Array(16);
                t.exports = function() {
                    return i(n), n
                }
            } else {
                var a = new Array(16);
                t.exports = function() {
                    for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), a[e] = t >>> ((3 & e) << 3) & 255;
                    return a
                }
            }
        },
        "/CC1": function(t, e, i) {
            var n = i("7zcn");
            n(n.S, "Array", {
                isArray: i("TPJk")
            })
        },
        "0jF3": function(t, e, i) {
            var n = i("7zcn");
            n(n.S, "Number", {
                MAX_SAFE_INTEGER: 9007199254740991
            })
        },
        "42G/": function(t, e) {
            for (var i = [], n = 0; n < 256; ++n) i[n] = (n + 256).toString(16).substr(1);
            t.exports = function(t, e) {
                var n = e || 0,
                    a = i;
                return [a[t[n++]], a[t[n++]], a[t[n++]], a[t[n++]], "-", a[t[n++]], a[t[n++]], "-", a[t[n++]], a[t[n++]], "-", a[t[n++]], a[t[n++]], "-", a[t[n++]], a[t[n++]], a[t[n++]], a[t[n++]], a[t[n++]], a[t[n++]]].join("")
            }
        },
        "7fQw": function(t, e, i) {
            var n = i("7zcn");
            n(n.S, "Date", {
                now: function() {
                    return (new Date).getTime()
                }
            })
        },
        "AA1/": function(t, e, i) {
            var n = Date.prototype,
                a = n.toString,
                r = n.getTime;
            new Date(NaN) + "" != "Invalid Date" && i("44Vk")(n, "toString", (function() {
                var t = r.call(this);
                return t == t ? a.call(this) : "Invalid Date"
            }))
        },
        Fup4: function(t, e, i) {
            var n = i("7zcn");
            n(n.P, "Function", {
                bind: i("Vzju")
            })
        },
        HUVu: function(t, e) {
            t.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }
        },
        I3FG: function(t, e) {
            t.exports = function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                    return i
                }
            }
        },
        Lta4: function(t, e) {
            t.exports = function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
        },
        NCol: function(t, e, i) {
            "use strict";
            var n = i("7zcn"),
                a = i("jDWM");
            n(n.P + n.F * !i("TLBd")([].reduce, !0), "Array", {
                reduce: function(t) {
                    return a(this, t, arguments.length, arguments[1], !1)
                }
            })
        },
        PRhO: function(t, e, i) {
            var n = i("VjGk"),
                a = i("qL0z"),
                r = a;
            r.v1 = n, r.v4 = a, t.exports = r
        },
        Ph8W: function(t, e, i) {
            "use strict";
            var n = i("7zcn"),
                a = i("r2uX")(!1),
                r = [].indexOf,
                o = !!r && 1 / [1].indexOf(1, -0) < 0;
            n(n.P + n.F * (o || !i("TLBd")(r)), "Array", {
                indexOf: function(t) {
                    return o ? r.apply(this, arguments) || 0 : a(this, t, arguments[1])
                }
            })
        },
        QHXq: function(t, e, i) {
            "use strict";
            i.r(e);
            var n, a, r, o, s, c = i("pVnL"),
                l = i.n(c),
                u = i("8OQS"),
                d = i.n(u),
                _ = (i("PN9k"), i("KI7T"), i("PJYZ")),
                h = i.n(_),
                p = i("VbXa"),
                E = i.n(p),
                v = i("lSNA"),
                y = i.n(v),
                f = i("ERkP"),
                m = i("rxPX"),
                T = i("0KEI"),
                g = i("6rlp"),
                P = i("H9MA"),
                b = i("RqPI"),
                I = i("yr4d"),
                A = i("XOJV"),
                V = i("eXeu"),
                N = function(t, e) {
                    var i = e.source && e.source.videoId;
                    return i && "tweet" === i.type ? i.id : void 0
                },
                S = Object(m.a)().dynamicPropsFromState((function() {
                    return {
                        dataSaverMode: P.c,
                        language: b.f,
                        sourceTweet: A.a.createHydratedTweetSelector(N)
                    }
                })).adjustStateProps((function(t) {
                    var e = t.dataSaverMode,
                        i = t.language,
                        n = t.sourceTweet;
                    return {
                        dataSaverMode: e,
                        language: i,
                        mediaAvailability: n && Object(V.b)(n) || void 0,
                        publisherId: n ? Object(V.c)(n) : void 0
                    }
                })).propsFromActions({
                    createLocalApiErrorHandler: Object(T.b)("INLINE_PLAYER_CONTAINER"),
                    getTwitterAuthedHttpClient: function() {
                        return function(t, e, i) {
                            return i.api.getHttpClient()
                        }
                    },
                    logPromotedVideoEvent: g.b,
                    tweetAdProvider: I.b
                }).withAnalytics(),
                C = i("wrlS"),
                M = i("aWzz"),
                w = i("6v1f"),
                L = i("ZeN/"),
                R = i("rHpw"),
                O = i("3xO4"),
                k = i.n(O),
                D = function(t) {
                    t.preventDefault(), t.stopPropagation()
                },
                W = function(t) {
                    var e = t.children;
                    return f.createElement(k.a, {
                        onClick: D,
                        style: R.a.absoluteFill
                    }, e)
                },
                F = i("epkG"),
                B = i("3XMw"),
                H = i.n(B),
                U = i("mN6z"),
                x = i("/NU0"),
                K = (i("u+Xj"), i("ylrv")),
                Y = function() {
                    function t(t, e, i) {
                        this.placement = t, this.obstructions = e, this.layerId = i
                    }
                    var e = t.prototype;
                    return e.getPositionData = function() {
                        return {
                            percentVisible: this.visibleFraction(),
                            percentOfViewportOccupied: this.placement.viewportOccupiedFraction(),
                            sizesInfo: {
                                viewportSize: this.placement.viewport,
                                mediaSize: this.placement.item
                            }
                        }
                    }, e.visibleFraction = function() {
                        var t = this.placement.visiblePart();
                        if (!t) return 0;
                        var e = Object(x.a)(this.layerId) ? this.obstructions.getObstructionAboveLayer(this.layerId, t) : this.obstructions.getTotalObstruction(t),
                            i = K.a.area(this.placement.item),
                            n = (1 - e) * K.a.area(t);
                        return i > 0 ? n / i : 0
                    }, e.top = function() {
                        return this.placement.item.top
                    }, e.distanceToCenter = function() {
                        return this.placement.verticalDistanceToViewportCenter()
                    }, t
                }(),
                j = i("7nmT"),
                z = i.n(j),
                G = i("zHh/"),
                q = i("aITJ"),
                X = i("cboP"),
                Q = i.n(X),
                J = i("Lta4"),
                Z = i.n(J),
                $ = (i("Ph8W"), i("0jF3"), i("yKDW"), i("rQdd")),
                tt = i.n($),
                et = (i("+5EW"), i("NCol"), i("p+GS"), i("AA1/"), i("zpx+"), i("WUuN"), i("7fQw"), i("XjK0"), i("SCO9"), i("/CC1"), i("Fup4"), i("3eMz"), i("DB+v"), i("LnO1"), i("r0id"), i("r2q8")),
                it = i.n(et),
                nt = i("PRhO"),
                at = i.n(nt),
                rt = {
                    AD_SKIP_EVENT: "AD_SKIP_EVENT",
                    CONFIG_LOADED_EVENT: "CONFIG_LOADED_EVENT",
                    CTA_CLICK_EVENT: "CTA_CLICK_EVENT",
                    CTA_IMPRESSION_EVENT: "CTA_IMPRESSION_EVENT",
                    ERROR_EVENT: "ERROR_EVENT",
                    FULL_SCREEN_EVENT: "FULL_SCREEN_EVENT",
                    GROUPM_VIEW_EVENT: "GROUPM_VIEW_EVENT",
                    HEARTBEAT_EVENT: "HEARTBEAT_EVENT",
                    HEARTBEAT_START_EVENT: "HEARTBEAT_START_EVENT",
                    INITIAL_CTA_IMPRESSION_EVENT: "INITIAL_CTA_IMPRESSION_EVENT",
                    INITIAL_INTEND_TO_PLAY_EVENT: "INITIAL_INTEND_TO_PLAY_EVENT",
                    INTEND_TO_PLAY_EVENT: "INTEND_TO_PLAY_EVENT",
                    LOOP_EVENT: "LOOP_EVENT",
                    MRC_AUDIBLE_VIEW_EVENT: "MRC_AUDIBLE_VIEW_EVENT",
                    MRC_VIEW_EVENT: "MRC_VIEW_EVENT",
                    MUTE_EVENT: "MUTE_EVENT",
                    ONE_SEC_VIEW_EVENT: "ONE_SEC_VIEW_EVENT",
                    SIX_SEC_VIEW_EVENT: "SIX_SEC_VIEW_EVENT",
                    PAUSE_EVENT: "PAUSE_EVENT",
                    PLAY_EVENT: "PLAY_EVENT",
                    PLAY_FROM_TAP_EVENT: "PLAY_FROM_TAP_EVENT",
                    PLAYBACK_25_EVENT: "PLAYBACK_25_EVENT",
                    PLAYBACK_50_EVENT: "PLAYBACK_50_EVENT",
                    PLAYBACK_75_EVENT: "PLAYBACK_75_EVENT",
                    PLAYBACK_95_EVENT: "PLAYBACK_95_EVENT",
                    PLAYBACK_COMPLETE_EVENT: "PLAYBACK_COMPLETE_EVENT",
                    PLAYBACK_ERROR_EVENT: "PLAYBACK_ERROR_EVENT",
                    PLAYBACK_LAPSE_EVENT: "PLAYBACK_LAPSE_EVENT",
                    PLAYBACK_START_EVENT: "PLAYBACK_START_EVENT",
                    REPLAY_EVENT: "REPLAY_EVENT",
                    REWIND_EVENT: "REWIND_EVENT",
                    SHRINK_EVENT: "SHRINK_EVENT",
                    STARTUP_ERROR_EVENT: "STARTUP_ERROR_EVENT",
                    TEARDOWN_EVENT: "TEARDOWN_EVENT",
                    TICK_EVENT: "TICK_EVENT",
                    TRACK_FINISHED_EVENT: "TRACK_FINISHED_EVENT",
                    UNMUTE_EVENT: "UNMUTE_EVENT",
                    VIDEO_SESSION_EVENT: "VIDEO_SESSION_EVENT",
                    VIDEO_QUALITY_VIEW_EVENT: "VIDEO_QUALITY_VIEW_EVENT",
                    VIDEO_VIEW_EVENT: "VIDEO_VIEW_EVENT",
                    VIEW_THRESHOLD_EVENT: "VIEW_THRESHOLD_EVENT"
                },
                ot = {
                    AD: "ad",
                    CONTENT: "content"
                },
                st = {
                    BROADCAST: "broadcast",
                    GIF: "gif",
                    LIVE: "live",
                    MEDIA_ENTITY: "media_entity",
                    PARTNER_VIDEO: "partner_video",
                    PERISCOPE: "periscope",
                    VINE: "vine",
                    VMAP: "vmap"
                };

            function ct(t) {
                return ut(t, t.source.trackId)
            }

            function lt(t) {
                return ut(t, t.currentTrackId)
            }

            function ut(t, e) {
                return t.tracks.find((function(t) {
                    return e === t.id
                }))
            }

            function dt(t) {
                return t.tracks.find((function(t) {
                    return ot.AD === t.displayType
                }))
            }

            function _t(t) {
                return Boolean(t) && t.isPlaying && !t.isScrubbing && !t.isMuted
            }
            var ht = ((n = {})[rt.VIDEO_VIEW_EVENT] = "creativeView", n[rt.PLAYBACK_25_EVENT] = "firstQuartile", n[rt.PLAYBACK_50_EVENT] = "midpoint", n[rt.PLAYBACK_75_EVENT] = "thirdQuartile", n[rt.PLAYBACK_COMPLETE_EVENT] = "complete", n[rt.PLAY_EVENT] = "resume", n[rt.PAUSE_EVENT] = "pause", n[rt.REWIND_EVENT] = "rewind", n[rt.ERROR_EVENT] = "adError", n),
                pt = function() {
                    function t(t) {
                        var e = this;
                        Object.keys(ht).forEach((function(i) {
                            t.on(i, (function(t) {
                                e.fireBeacon(ht[i], t)
                            }))
                        })), t.on(rt.PLAYBACK_START_EVENT, this.onPlaybackStart.bind(this))
                    }
                    var e = t.prototype;
                    return e.onPlaybackStart = function(t) {
                        this.fireBeacon("start", t), this.fireBeacon("adImpression", t)
                    }, e.fireBeacon = function(t, e) {
                        var i = lt(e);
                        if (void 0 !== i && void 0 !== i.beacons && void 0 !== i.beacons[t]) {
                            var n = i.beacons[t],
                                a = Array.isArray(n),
                                r = 0;
                            for (n = a ? n : n[Symbol.iterator]();;) {
                                var o;
                                if (a) {
                                    if (r >= n.length) break;
                                    o = n[r++]
                                } else {
                                    if ((r = n.next()).done) break;
                                    o = r.value
                                }
                                var s = o;
                                (new window.Image).src = s
                            }
                        }
                    }, t
                }(),
                Et = function() {
                    function t(t) {
                        this.analytics = t, this.hasFiredOnTrackMap = {}, this.analytics.on(rt.CTA_IMPRESSION_EVENT, this.onCtaImpressionEvent.bind(this))
                    }
                    return t.prototype.onCtaImpressionEvent = function(t) {
                        var e = t.currentTrackId;
                        this.hasFiredOnTrackMap[e] || (this.hasFiredOnTrackMap[e] = !0, this.analytics.emit(rt.INITIAL_CTA_IMPRESSION_EVENT, t))
                    }, t
                }(),
                vt = function() {
                    function t(t) {
                        this.analytics = t, this.hasStarted = !1, this.hasFired = !1, this.analytics.on(rt.PLAYBACK_START_EVENT, this.onPlaybackStartEvent.bind(this)), this.analytics.on(rt.INTEND_TO_PLAY_EVENT, this.onShowEvent.bind(this)), this.analytics.on(rt.ERROR_EVENT, this.onErrorEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onPlaybackStartEvent = function() {
                        this.hasStarted = !0
                    }, e.onShowEvent = function() {
                        this.intentToPlayTime = new Date
                    }, e.onErrorEvent = function(t, e) {
                        var i = this.constructClientMediaEventError(t, e);
                        if (!this.hasStarted && !this.hasFired) {
                            var n, a = void 0 !== this.intentToPlayTime ? new Date - this.intentToPlayTime : void 0;
                            i && (n = {
                                latency_millis: a,
                                error: i
                            }), this.analytics.emit(rt.STARTUP_ERROR_EVENT, t, Object.assign({
                                latency: a
                            }, e), n), this.hasFired = !0
                        }
                        this.analytics.emit(rt.PLAYBACK_ERROR_EVENT, t, e, i)
                    }, e.constructClientMediaEventError = function(t, e) {
                        var i = e && e.media_details && e.media_details.media_error || {};
                        return {
                            is_fatal: i.is_fatal,
                            category: i.category,
                            message: i.message,
                            retry_count: i.retry_count
                        }
                    }, t
                }(),
                yt = function() {
                    function t(t) {
                        this.bufferingCount = 0, this.bufferingDurationMs = 0, this.bufferingBeginTimeMs = void 0, t.on(rt.TICK_EVENT, this.onTickEvent.bind(this)), t.on(rt.HEARTBEAT_START_EVENT, this.onHeartbeatStart.bind(this)), t.on(rt.HEARTBEAT_EVENT, this.onHeartbeat.bind(this))
                    }
                    var e = t.prototype;
                    return e.onHeartbeat = function(t) {
                        this.reset(t)
                    }, e.onHeartbeatStart = function(t) {
                        this.reset(t)
                    }, e.onTickEvent = function(t) {
                        var e = lt(t);
                        void 0 !== e && (e.isBuffering && null == this.bufferingBeginTimeMs ? (this.bufferingBeginTimeMs = Date.now(), this.bufferingCount++) : e.isBuffering || null == this.bufferingBeginTimeMs || (this.bufferingDurationMs += Date.now() - this.bufferingBeginTimeMs, this.bufferingBeginTimeMs = void 0))
                    }, e.getBufferTime = function(t) {
                        var e = lt(t);
                        if (void 0 !== e) {
                            var i = this.bufferingDurationMs;
                            return e.isBuffering && null != this.bufferingBeginTimeMs && (i += Date.now() - this.bufferingBeginTimeMs), i
                        }
                    }, e.reset = function(t) {
                        var e = lt(t);
                        void 0 !== e && (this.bufferingBeginTimeMs = e.isBuffering ? Date.now() : void 0, this.bufferingCount = e.isBuffering ? 1 : 0, this.bufferingDurationMs = 0)
                    }, t
                }();

            function ft(t) {
                return "number" != typeof t || Number.isNaN(t) || t === 1 / 0 || t === -1 / 0 ? "string" == typeof t ? t : void 0 : t.toString()
            }
            var mt = function() {
                function t(t) {
                    this.analytics = t, this.bufferingDurationListener = new yt(t), this.lastKnownDataUsageBytes = 0, this.audibleDuration = 0, this.bitrateHistory = [], this.latencyHistory = [], this.previousTickTimestamp, this.analytics.on(rt.TICK_EVENT, this.onTickEvent.bind(this)), this.analytics.on(rt.PLAY_EVENT, this.onPlayEvent.bind(this)), this.analytics.on(rt.PLAYBACK_START_EVENT, this.onPlaybackStartEvent.bind(this)), this.analytics.on(rt.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this)), this.analytics.on(rt.ERROR_EVENT, this.onErrorEvent.bind(this)), this.analytics.on(rt.PAUSE_EVENT, this.onPauseEvent.bind(this)), this.analytics.on(rt.TEARDOWN_EVENT, this.onTeardownEvent.bind(this)), this.analytics.on(rt.LOOP_EVENT, this.onLoopEvent.bind(this)), this.analytics.on(rt.AD_SKIP_EVENT, this.onAdSkip.bind(this))
                }
                var e = t.prototype;
                return e.onTickEvent = function(t) {
                    var e = lt(t);
                    if (void 0 !== e) {
                        if (this.updateTimesOnTick(e, t), this.updatePerfMetrics(e), t.isScrubbing ? this.stopPolling() : t.isPlaying && this.startPolling(t), void 0 !== this.lastKnownPlayerState) {
                            var i = this.lastKnownPlayerState.percentVisible,
                                n = t.percentVisible;
                            (i > 0 && 0 === n || 0 === i && n > 0) && (this.stopPolling(), this.startPolling(t))
                        }
                        this.lastKnownPlayerState = t, this.previousTickTimestamp = Date.now()
                    }
                }, e.onPlayEvent = function(t) {
                    this.hasPlaybackStarted && this.startPolling(t), this.lastKnownPlayerState = t
                }, e.onPlaybackStartEvent = function(t) {
                    this.startPolling(t), this.lastKnownPlayerState = t, this.hasPlaybackStarted = !0
                }, e.onTrackFinishedEvent = function(t) {
                    this.hasPlaybackStarted = !1, void 0 !== lt(t) && (this.stopPolling(), this.lastKnownPlayerState = t)
                }, e.onErrorEvent = function(t, e) {
                    e && e.media_details && e.media_details.media_error && e.media_details.media_error.is_fatal && (this.stopPolling(), this.lastKnownPlayerState = t)
                }, e.onPauseEvent = function(t, e) {
                    this.stopPolling(), this.lastKnownPlayerState = t
                }, e.onTeardownEvent = function(t, e) {
                    this.stopPolling(!0), this.lastKnownPlayerState = t
                }, e.onLoopEvent = function(t) {
                    this.startPolling(t)
                }, e.onAdSkip = function() {
                    this.stopPolling()
                }, e.updateTimesOnTick = function(t, e) {
                    var i;
                    void 0 !== (i = t.contentType === st.BROADCAST || t.contentType === st.LIVE || t.contentType === st.PERISCOPE ? t.absoluteTimeMs : t.currentTimeMs) && (_t(e) && void 0 !== this.lastTimeMs && (this.audibleDuration += i - this.lastTimeMs), this.lastTimeMs = i, void 0 === this.startTimeMs && (this.startTimeMs = i))
                }, e.startPolling = function(t) {
                    var e = ct(t);
                    void 0 === this.intervalId && void 0 !== e && e.contentType !== st.VINE && (this.analytics.emit(rt.HEARTBEAT_START_EVENT, t), this.onHeartbeatStart(t))
                }, e.stopPolling = function(t) {
                    (this.intervalId || t) && (this.onHeartbeat(), this.lastTimeMs = void 0, this.startTimeMs = void 0), void 0 !== this.intervalId && (clearInterval(this.intervalId), this.intervalId = void 0)
                }, e.onHeartbeatStart = function(t) {
                    this.intervalId = setInterval(this.onHeartbeat.bind(this), t.heartbeatIntervalMs || 5e3), this.lastTimeMs = void 0, this.startTimeMs = void 0, this.bitrateHistory = [], this.latencyHistory = []
                }, e.updatePerfMetrics = function(t) {
                    if (this.previousTickTimestamp) {
                        var e = Date.now() - this.previousTickTimestamp;
                        t.currentBitrate && this.bitrateHistory.push({
                            value: t.currentBitrate,
                            weight: e
                        }), t.liveLatencyMs && this.latencyHistory.push({
                            value: t.liveLatencyMs,
                            weight: e
                        })
                    }
                }, e.onHeartbeat = function() {
                    var t = this.lastKnownPlayerState;
                    if (t) {
                        var e = lt(t),
                            i = this.getProgramDateTimeMs();
                        if (void 0 !== i && void 0 !== e) {
                            var n = e.currentBitrate ? {
                                    sampled_bitrate: e.currentBitrate
                                } : {},
                                a = 0;
                            t.dataUsageBytes && (a = t.dataUsageBytes - this.lastKnownDataUsageBytes, this.lastKnownDataUsageBytes = t.dataUsageBytes);
                            var r, o, s = {
                                    data_usage_bytes: a
                                },
                                c = this.bufferingDurationListener.bufferingCount,
                                l = this.bufferingDurationListener.getBufferTime(t),
                                u = Math.floor(100 * t.percentVisible),
                                d = Object.assign({
                                    buffering_duration_millis: l,
                                    video_visibility: u
                                }, {
                                    start_program_date_time_millis: i.start_program_date_time_millis,
                                    end_program_date_time_millis: i.end_program_date_time_millis
                                }, n, s),
                                _ = {
                                    buffering_duration_millis: ft(l),
                                    buffering_count: c,
                                    percent_in_view: u,
                                    sampled_bits_per_second: e.currentBitrate,
                                    data_usage_bytes: ft(s.data_usage_bytes),
                                    start_program_date_time_millis: ft(i.start_program_date_time_millis),
                                    end_program_date_time_millis: ft(i.end_program_date_time_millis),
                                    audible_duration_millis: ft(i.audible_duration_millis),
                                    bandwidth_estimate_bps: ft(t.bandwidthEstimateBps),
                                    bitrate_metrics: (r = this.bitrateHistory, o = gt(r), o && {
                                        min_bps: Math.round(o.min),
                                        max_bps: Math.round(o.max),
                                        avg_bps: Math.round(o.avg)
                                    }),
                                    live_or_non_live_heartbeat_metrics: Tt(e.isLive, this.latencyHistory)
                                };
                            this.analytics.emit(rt.HEARTBEAT_EVENT, t, d, _)
                        }
                    }
                }, e.getProgramDateTimeMs = function() {
                    if (void 0 !== this.startTimeMs && void 0 !== this.lastTimeMs) {
                        var t = this.startTimeMs,
                            e = this.lastTimeMs,
                            i = this.audibleDuration;
                        return this.startTimeMs = this.lastTimeMs, this.audibleDuration = 0, {
                            start_program_date_time_millis: Math.round(t),
                            end_program_date_time_millis: Math.round(e),
                            audible_duration_millis: Math.round(i)
                        }
                    }
                    return {}
                }, t
            }();

            function Tt(t, e) {
                var i = gt(e);
                return t ? {
                    live_heartbeat_metrics: {
                        latency_metrics: i && {
                            min_ms: Math.round(i.min),
                            max_ms: Math.round(i.max),
                            avg_ms: Math.round(i.avg)
                        }
                    }
                } : {
                    non_live_heartbeat_metrics: {}
                }
            }

            function gt(t) {
                if (t && t.length) {
                    var e = t.map((function(t) {
                        return t.value
                    }));
                    return {
                        min: Math.min.apply(Math, tt()(e)),
                        max: Math.max.apply(Math, tt()(e)),
                        avg: function(t) {
                            var e = t.reduce((function(t, e) {
                                return t + e.weight
                            }), 0);
                            return t.reduce((function(t, e) {
                                return t + e.value * e.weight
                            }), 0) / e
                        }(t)
                    }
                }
            }
            var Pt = function() {
                    function t(t) {
                        this.analytics = t, this.hasFiredOnTrackMap = {}, this.analytics.on(rt.INTEND_TO_PLAY_EVENT, this.onIntendToPlayEvent.bind(this)), this.analytics.on(rt.REPLAY_EVENT, this.onIntendToPlayEvent.bind(this)), this.analytics.on(rt.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onIntendToPlayEvent = function(t) {
                        this.hasFiredOnTrackMap[t.currentTrackId] || (this.hasFiredOnTrackMap[t.currentTrackId] = !0, this.analytics.emit(rt.INITIAL_INTEND_TO_PLAY_EVENT, t))
                    }, e.onTrackFinishedEvent = function(t) {
                        var e = lt(t);
                        e && (e.shouldLoop || (this.hasFiredOnTrackMap[t.currentTrackId] = !1))
                    }, t
                }(),
                bt = function() {
                    function t(t) {
                        this.analytics = t, this.analytics.on(rt.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this))
                    }
                    return t.prototype.onTrackFinishedEvent = function(t) {
                        var e = lt(t);
                        void 0 !== e && e.shouldLoop && this.analytics.emit(rt.LOOP_EVENT, t)
                    }, t
                }(),
                It = {
                    home: "HomeTimeline",
                    list: "Lists",
                    live_broadcast: "BroadcastPage",
                    live_event_timeline: "EventPage",
                    me: "UserTimeline",
                    moments: "Moments",
                    permalink: "TweetCard",
                    profile: "UserTimeline",
                    search: "Search"
                },
                At = function(t) {
                    return "/api/v2/" + t
                },
                Vt = "videoStartWatchingLive",
                Nt = "videoPingLive",
                St = "videoStopWatchingLive",
                Ct = ((a = {})[Vt] = {
                    method: "GET",
                    path: At("startPublic")
                }, a[Nt] = {
                    method: "GET",
                    path: At("pingPublic")
                }, a[St] = {
                    method: "GET",
                    path: At("stopPublic")
                }, a.videoStartWatchingReplay = {
                    method: "GET",
                    path: At("replayViewedPublic")
                }, a.videoPingReplay = {
                    method: "GET",
                    path: At("pingReplayViewedPublic")
                }, a.videoStopWatchingReplay = {
                    method: "GET",
                    path: At("endReplayViewedPublic")
                }, a),
                Mt = function() {
                    function t(t, e) {
                        if (this.httpClient = t, this.idempotenceId = Date.now() + "--" + at()(), e) {
                            var i = e.scribeContext,
                                n = e.periscopeComponent;
                            this.pageContext = this.getPageContext(i), this.componentContext = n
                        }
                    }
                    var e = t.prototype;
                    return e.getPageContext = function(t) {
                        var e = t.page;
                        return "permalink_overlay" === t.section ? "TweetCard" : It[e] || ""
                    }, e.call = function(t, e) {
                        var i = {
                                "X-Idempotence": this.idempotenceId
                            },
                            n = Ct[t],
                            a = n.method,
                            r = n.path;
                        return this.httpClient.dispatch({
                            headers: i,
                            host: "https://proxsee.pscp.tv",
                            method: a,
                            path: r,
                            params: e
                        })
                    }, e.videoStartWatching = function(t, e, i) {
                        var n = this;
                        return new Promise((function(a, r) {
                            ("string" != typeof t || t.length < 1) && r(new Error("Cannot videoStartWatching. lifecycleToken not valid, lifecycleToken=" + t));
                            var o = e ? "videoStartWatchingReplay" : Vt,
                                s = {
                                    life_cycle_token: t,
                                    auto_play: !!i
                                };
                            n.pageContext && (s.page = n.pageContext), n.componentContext && (s.component = n.componentContext), n.call(o, s).then((function(t) {
                                var e = JSON.parse(t.body).session;
                                e ? a(e) : r("No valid Session")
                            }), r)
                        }))
                    }, e.videoPingWatching = function(t, e) {
                        var i = this;
                        return new Promise((function(n, a) {
                            ("string" != typeof t || t.length < 1) && a(new Error("Cannot videoPingWatching. session not valid, session=" + t));
                            var r = e ? "videoPingReplay" : Nt;
                            i.call(r, {
                                session: t
                            }).then((function(t) {
                                JSON.parse(t.body).success ? n() : a("Ping request failed")
                            }), a)
                        }))
                    }, e.videoStopWatching = function(t, e) {
                        var i = this;
                        return new Promise((function(n, a) {
                            ("string" != typeof t || t.length < 1) && a(new Error("Cannot videoStopWatching. session not valid, session=" + t));
                            var r = e ? "videoStopWatchingReplay" : St;
                            i.call(r, {
                                session: t
                            }).then((function(t) {
                                JSON.parse(t.body).success ? n() : a("StopWatching request failed")
                            }), a)
                        }))
                    }, t
                }(),
                wt = 3e3,
                Lt = 1e4,
                Rt = .95,
                Ot = 6e3,
                kt = .95,
                Dt = 3e3,
                Wt = .5,
                Ft = .5;
            var Bt = function() {
                    function t(t) {
                        this.api = t, this.handleStartWatching = this.handleStartWatching.bind(this), this.updateSession = this.updateSession.bind(this), this.startPingWatching = this.startPingWatching.bind(this), this.isVideoPreview = !1, this.isReplay = !0
                    }
                    var e = t.prototype;
                    return e.updateSession = function(t) {
                        this.session = t
                    }, e.setStartWatchingTimer = function() {
                        this.startWatchingTimer = setTimeout(this.handleStartWatching, wt)
                    }, e.clearStartWatchingTimer = function() {
                        this.startWatchingTimer && clearTimeout(this.startWatchingTimer)
                    }, e.handleStartWatching = function() {
                        if (!this.isWatching) {
                            this.stopPingWatching();
                            var t = this.api.videoStartWatching(this.lifecycleToken, this.isReplay, this.isVideoPreview).then(this.updateSession).then(this.startPingWatching);
                            return this.isWatching = !0, t
                        }
                    }, e.startPingWatching = function() {
                        var t = this;
                        this.stopPingWatching(), this.pingWatchingTimer = setInterval((function() {
                            t.isWatching ? t.api.videoPingWatching(t.session, t.isReplay) : t.stopPingWatching()
                        }), 3e4)
                    }, e.stopPingWatching = function() {
                        clearInterval(this.pingWatchingTimer)
                    }, e.updateLifecycleToken = function(t) {
                        void 0 !== t && t !== this.lifecycleToken && (this.lifecycleToken = t, this.isWatching && (this.stopWatching(), this.handleStartWatching()))
                    }, e.updateIsReplay = function(t) {
                        void 0 !== t && t !== this.isReplay && (this.isReplay = t)
                    }, e.startWatching = function() {
                        return this.isVideoPreview = !1, this.handleStartWatching()
                    }, e.startWatchingPreview = function() {
                        this.isVideoPreview = !0, this.clearStartWatchingTimer(), this.setStartWatchingTimer()
                    }, e.stopWatching = function() {
                        this.isWatching && (this.stopPingWatching(), this.session && this.api.videoStopWatching(this.session, this.isReplay), this.isWatching = !1)
                    }, e.destroy = function() {
                        this.stopWatching(), this.clearStartWatchingTimer(), this.isVideoPreview = void 0, this.lifecycleToken = void 0, this.session = void 0, this.isReplay = void 0, this.isWatching = void 0, this.pingWatchingTimer = void 0
                    }, t
                }(),
                Ht = [rt.CONFIG_LOADED_EVENT, rt.PLAY_EVENT, rt.PAUSE_EVENT, rt.TRACK_FINISHED_EVENT, rt.TEARDOWN_EVENT],
                Ut = function() {
                    function t(t, e) {
                        var i = this;
                        this.analytics = t, this.lifecycleController = e, Ht.map((function(t) {
                            return i.analytics.on(t, i.possiblyHandleEvent.bind(i, t))
                        }))
                    }
                    var e = t.prototype;
                    return e.possiblyHandleEvent = function(t, e) {
                        if (this.shouldSendPeriscopeAnalytics(e)) {
                            var i = lt(e);
                            switch (t) {
                                case rt.CONFIG_LOADED_EVENT:
                                    this.updateLifecycleToken(e), this.updateReplayState(!i.isLive);
                                    break;
                                case rt.PLAY_EVENT:
                                    this.handleStartWatching(e);
                                    break;
                                case rt.PAUSE_EVENT:
                                    this.handleStopWatching(e);
                                    break;
                                case rt.TRACK_FINISHED_EVENT:
                                    this.handleStopWatching(e), this.updateReplayState(!0);
                                    break;
                                case rt.TEARDOWN_EVENT:
                                    this.teardownPeriscopeLifecycle()
                            }
                        }
                    }, e.shouldSendPeriscopeAnalytics = function(t) {
                        var e = lt(t);
                        return void 0 !== e && (e.contentType === st.PERISCOPE || e.contentType === st.BROADCAST)
                    }, e.getLifecycleToken = function(t) {
                        return lt(t).lifecycleToken
                    }, e.updateLifecycleToken = function(t) {
                        var e = this.getLifecycleToken(t);
                        this.lifecycleController.updateLifecycleToken(e)
                    }, e.updateReplayState = function(t) {
                        this.lifecycleController.updateIsReplay(t)
                    }, e.handleStartWatching = function(t) {
                        this.getLifecycleToken(t) && (t.isPreview ? this.lifecycleController.startWatchingPreview() : this.lifecycleController.startWatching())
                    }, e.handleStopWatching = function(t) {
                        this.getLifecycleToken(t) && this.lifecycleController.stopWatching()
                    }, e.teardownPeriscopeLifecycle = function() {
                        this.lifecycleController.destroy(), this.lifecycleController = null
                    }, t
                }(),
                xt = function() {
                    function t(t) {
                        this.analytics = t, this.lapseMap = {}, this.analytics.on(rt.TICK_EVENT, this.onTickEvent.bind(this)), this.analytics.on(rt.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this)), this.analytics.on(rt.AD_SKIP_EVENT, this.onAdSkipEvent.bind(this)), this.analytics.on(rt.VIDEO_VIEW_EVENT, this.onVideoViewEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onTrackFinishedEvent = function(t) {
                        var e = lt(t);
                        if (void 0 !== e) {
                            var i = this.lapseMap[e.id];
                            if (void 0 !== i) {
                                i.timePlayedToMs = 0;
                                var n = ct(t);
                                n && n.contentType !== st.GIF && !e.shouldLoop && (this.emit(i, t), i.viewFired = !1)
                            }
                        }
                    }, e.onAdSkipEvent = function(t) {
                        this.onTickEvent(t);
                        var e = lt(t);
                        if (void 0 !== e) {
                            var i = this.lapseMap[e.id];
                            this.emit(i, t)
                        }
                    }, e.onVideoViewEvent = function(t) {
                        var e = lt(t);
                        if (void 0 !== e) {
                            var i = this.lapseMap[e.id];
                            void 0 === i && (i = this.initializeLapseMapForTrack(e), this.lapseMap[e.id] = i), i.viewFired = !0
                        }
                    }, e.onTickEvent = function(t) {
                        var e = lt(t);
                        if (void 0 !== e) {
                            var i = this.lapseMap[e.id];
                            void 0 === i && (i = this.initializeLapseMapForTrack(e), this.lapseMap[e.id] = i), t.isScrubbing ? i.timePlayedToMs = e.currentTimeMs : (this.updateTimingData(e, i), this.checkPlaybackLapse(i, t))
                        }
                    }, e.initializeLapseMapForTrack = function(t) {
                        return {
                            timePlayedMs: 0,
                            timePlayedToMs: t.currentTimeMs,
                            viewFired: !1
                        }
                    }, e.updateTimingData = function(t, e) {
                        var i = t.currentTimeMs - e.timePlayedToMs;
                        e.timePlayedToMs = t.currentTimeMs, e.timePlayedMs += i
                    }, e.checkPlaybackLapse = function(t, e) {
                        t.timePlayedMs > 1e4 && this.emit(t, e)
                    }, e.emit = function(t, e) {
                        var i = ct(e),
                            n = t.viewFired,
                            a = t.timePlayedMs;
                        n && a > 0 && i && i.contentType !== st.LIVE && (this.analytics.emit(rt.PLAYBACK_LAPSE_EVENT, e, {
                            playback_lapse_ms: Math.round(a)
                        }), t.timePlayedMs = 0)
                    }, t
                }(),
                Kt = ((r = {})[rt.PLAYBACK_START_EVENT] = "playback_start", r[rt.PLAYBACK_25_EVENT] = "playback_25", r[rt.PLAYBACK_50_EVENT] = "playback_50", r[rt.PLAYBACK_75_EVENT] = "playback_75", r[rt.PLAYBACK_95_EVENT] = "playback_95", r[rt.PLAYBACK_COMPLETE_EVENT] = "playback_complete", r[rt.MRC_VIEW_EVENT] = "mrc_view", r[rt.GROUPM_VIEW_EVENT] = "groupm_view", r[rt.ONE_SEC_VIEW_EVENT] = "1sec_view", r[rt.SIX_SEC_VIEW_EVENT] = "6sec_view", r[rt.VIDEO_VIEW_EVENT] = "view", r[rt.PLAY_FROM_TAP_EVENT] = "play_from_tap", r[rt.VIEW_THRESHOLD_EVENT] = "view_threshold", r),
                Yt = function() {
                    function t(t, e) {
                        var i = this;
                        this.promotedLogHandler = e, Object.keys(Kt).forEach((function(e) {
                            t.on(e, (function(t, n) {
                                var a = lt(t);
                                void 0 !== a && i.log(i.buildEventName(e, a), t, n)
                            }))
                        })), t.on(rt.PLAYBACK_START_EVENT, this.logImpression.bind(this)), t.on(rt.CTA_CLICK_EVENT, this.onCtaClickEvent.bind(this)), t.on(rt.VIDEO_SESSION_EVENT, this.onVideoSessionEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.buildEventName = function(t, e) {
                        var i = Kt[t];
                        return "video_" + e.displayType + "_" + i
                    }, e.log = function(t, e, i, n) {
                        void 0 === i && (i = {});
                        var a = lt(e),
                            r = this.getPromotedEventData(e, a);
                        if (void 0 !== r.impression_id) {
                            var o = this.getAmplifyDetailsData(e, a, i),
                                s = JSON.stringify({
                                    amplify_details: o
                                }),
                                c = n && JSON.stringify(n),
                                l = Object.assign(r, o, {
                                    event: t,
                                    card_event: s,
                                    engagement_metadata: c
                                });
                            this.promotedLogHandler.log(l)
                        }
                    }, e.logImpression = function(t) {
                        var e = lt(t);
                        this.isPromotedTrack(t, e) && this.log("impression", t)
                    }, e.onCtaClickEvent = function(t) {
                        var e = lt(t);
                        if (void 0 !== e) {
                            var i = e.cta;
                            void 0 !== i && (e.displayType === ot.AD ? this.log("video_" + e.displayType + "_cta_" + i.type + "_click", t) : this.log("video_cta_" + i.type + "_click", t))
                        }
                    }, e.onVideoSessionEvent = function(t, e) {
                        void 0 !== e && this.log("video_session", t, {}, e)
                    }, e.isPromotedTrack = function(t, e) {
                        return e && e.impressionId && e.disclosureType
                    }, e.getPromotedEventData = function(t, e) {
                        var i = e.disclosureType || t.disclosureType;
                        return {
                            impression_id: e.impressionId || t.impressionId,
                            earned: "earned" === i
                        }
                    }, e.getAmplifyDetailsData = function(t, e, i) {
                        var n = ct(t),
                            a = dt(t) || {};
                        return Object.assign({
                            content_id: n.contentId,
                            dynamic_preroll_type: a.dynamicPrerollType,
                            preroll_uuid: a.contentId,
                            preroll_owner_id: a.publisherId,
                            video_uuid: e.contentId,
                            video_type: e.displayType === ot.CONTENT ? "video" : "ad",
                            video_is_muted: t.isMuted,
                            video_visibility: Math.floor(100 * t.percentVisible)
                        }, i)
                    }, t
                }(),
                jt = function() {
                    function t(t) {
                        this.analytics = t, this.analytics.on(rt.TICK_EVENT, this.onTickEvent.bind(this))
                    }
                    return t.prototype.onTickEvent = function(t) {
                        var e = lt(t);
                        void 0 !== e && (t.isScrubbing && void 0 === this.scrubbingStartTime ? this.scrubbingStartTime = e.currentTimeMs : t.isScrubbing || void 0 === this.scrubbingStartTime || (e.currentTimeMs < this.scrubbingStartTime && this.analytics.emit(rt.REWIND_EVENT, t), this.scrubbingStartTime = void 0))
                    }, t
                }(),
                zt = ((o = {})[rt.VIDEO_VIEW_EVENT] = "video_view", o[rt.PLAY_FROM_TAP_EVENT] = "play_from_tap", o[rt.VIEW_THRESHOLD_EVENT] = "view_threshold", o[rt.MRC_AUDIBLE_VIEW_EVENT] = "video_mrc_audible_view", o[rt.MRC_VIEW_EVENT] = "video_mrc_view", o[rt.SIX_SEC_VIEW_EVENT] = "video_6sec_view", o[rt.PLAYBACK_START_EVENT] = "playback_start", o[rt.PLAYBACK_25_EVENT] = "playback_25", o[rt.PLAYBACK_50_EVENT] = "playback_50", o[rt.PLAYBACK_75_EVENT] = "playback_75", o[rt.PLAYBACK_95_EVENT] = "playback_95", o[rt.PLAYBACK_COMPLETE_EVENT] = "playback_complete", o[rt.INITIAL_INTEND_TO_PLAY_EVENT] = "intent_to_play", o[rt.PLAY_EVENT] = "play", o[rt.PAUSE_EVENT] = "pause", o[rt.REPLAY_EVENT] = "replay", o[rt.LOOP_EVENT] = "loop", o[rt.MUTE_EVENT] = "mute", o[rt.UNMUTE_EVENT] = "unmute", o[rt.FULL_SCREEN_EVENT] = "full_screen", o[rt.SHRINK_EVENT] = "shrink", o[rt.PLAYBACK_LAPSE_EVENT] = "playback_lapse", o[rt.PLAYBACK_ERROR_EVENT] = "error", o[rt.STARTUP_ERROR_EVENT] = "playback_startup_error", o[rt.VIDEO_QUALITY_VIEW_EVENT] = "video_quality_view", o[rt.AD_SKIP_EVENT] = "video_ad_skip", o),
                Gt = ["playback_lapse", "video_1sec_view", "shrink", "full_screen"].reduce((function(t, e) {
                    return t[e] = !0, t
                }), {}),
                qt = "tweet",
                Xt = "client_event",
                Qt = "live_video_heartbeat_event",
                Jt = 7,
                Zt = 13,
                $t = 16,
                te = 26,
                ee = 28,
                ie = 1,
                ne = 2,
                ae = {
                    LIVE: 1,
                    REPLAY: 2,
                    UNKNOWN: 3
                },
                re = ["appplayer", "poll2choice_video", "poll3choice_video", "poll4choice_video", "promo_video_convo", "promo_video_website", "video_direct_message"],
                oe = /^([0-9]{1,2})_([0-9]+)$/,
                se = function() {
                    function t(t, e, i) {
                        var n = this;
                        this.scribeHandler = e, this.context = i || {}, this.isAdFormatsCard = -1 !== re.indexOf(this.context.cardType), Object.keys(zt).forEach((function(e) {
                            t.on(e, (function(t, i, a) {
                                n.scribe(zt[e], t, i, a)
                            }))
                        })), t.on(rt.CTA_CLICK_EVENT, this.onCtaClickEvent.bind(this)), t.on(rt.INITIAL_CTA_IMPRESSION_EVENT, this.onCtaImpressionEvent.bind(this)), t.on(rt.HEARTBEAT_EVENT, this.onHeartbeatEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onCtaClickEvent = function(t) {
                        var e = lt(t).cta;
                        e && e.type && this.scribe("cta_" + e.type + "_click", t)
                    }, e.onCtaImpressionEvent = function(t) {
                        var e = lt(t).cta;
                        e && e.type && this.scribe("cta_" + e.type + "_impression", t)
                    }, e.onHeartbeatEvent = function(t, e, i) {
                        var n = ct(t);
                        if (void 0 !== n) {
                            var a;
                            switch (n.contentType) {
                                case st.LIVE:
                                case st.BROADCAST:
                                    a = Qt;
                                    break;
                                default:
                                    a = Xt
                            }
                            this.scribe("heartbeat", t, e, i, a)
                        }
                    }, e.scribe = function(t, e, i, n, a) {
                        void 0 === i && (i = {}), void 0 === n && (n = {}), void 0 === a && (a = Xt);
                        var r, o, s = ct(e) || {},
                            c = lt(e) || {},
                            l = dt(e) || {},
                            u = e.session || {},
                            d = (e.features || {}).isLiveTimecodeEnabled && c.requestedTimecode > 0 ? 1e3 * c.requestedTimecode : void 0;
                        this.isActionSupportedInClientMediaEvent(t) && (r = {
                            media_client_event_type: (o = {}, o[t] = n, o),
                            session_state: {
                                session_id: u.id,
                                content_video_identifier: le(this.getContentIdentifier(s), this.context.scribeContext),
                                video_ads_passthrough_data: e.videoAnalyticsScribePassthrough,
                                live_event_identifier: this.getLiveEventIdentifier(e, s.contentType),
                                tweet_id: this.getTweetId(e.source, s.contentType)
                            },
                            playing_media_state: {
                                video_type: c.displayType === ot.CONTENT ? ne : ie,
                                media_asset_url: this.getVariantUrl(c),
                                media_timecode_millis: ft(d),
                                media_metadata: {
                                    broadcast_id: c.broadcastId,
                                    twitter_publisher_id: ft(c.publisherId),
                                    publisher_identifier: ue(c.publisherId, c.periscopePublisherId, this.context.scribeContext)
                                },
                                broadcast_media_state: de(c.contentType, c.isLive)
                            },
                            player_state: {
                                is_muted: e.isMuted
                            }
                        });
                        var _ = Object.assign({}, this.getBaseItem(e.source, e.eventId), {
                            media_asset_url: this.getVariantUrl(c),
                            video_uuid: c.contentId,
                            video_owner_id: c.publisherId,
                            video_type: c.displayType === ot.CONTENT ? "video" : "ad",
                            promoted_id: c.impressionId || e.impressionId,
                            content_id: s.contentId,
                            dynamic_preroll_type: l.dynamicPrerollType,
                            preroll_uuid: l.contentId,
                            preroll_owner_id: l.publisherId,
                            publisher_id: s.publisherId,
                            media_session_id: u.id,
                            video_analytics_scribe_passthrough: e.videoAnalyticsScribePassthrough,
                            client_media_event: r,
                            media_timecode_millis: d,
                            disclosure_type: c.disclosureType || e.disclosureType
                        }, i, this.getLexMetadata(e, s));
                        this.scribeHandler.log({
                            namespace: {
                                element: this.getScribeElement(s),
                                action: t
                            },
                            category: a,
                            data: {
                                items: [_]
                            }
                        })
                    }, e.getContentIdentifier = function(t) {
                        var e = t.contentId,
                            i = this.parseMediaKeyString(e);
                        if (i) return {
                            media_platform_identifier: i
                        };
                        switch (t.contentType) {
                            case st.MEDIA_ENTITY:
                            case st.GIF:
                            case st.LIVE:
                            case st.BROADCAST:
                                return this.getMediaPlatformIdentifierUsingDefaultCategory(t);
                            case st.VMAP:
                                return this.isAdFormatsCard ? {
                                    media_platform_identifier: {
                                        media_category: this.getMediaEntityCategoryUsingPlaybackUrl(t),
                                        media_id: e
                                    }
                                } : {
                                    amplify_card_identifier: {
                                        vmap_url: t.vmapUrl,
                                        content_id: e
                                    }
                                };
                            case st.VINE:
                            case st.PERISCOPE:
                            case st.PARTNER_VIDEO:
                            default:
                                return {
                                    unknown_identifier: {
                                        content_id: e
                                    }
                                }
                        }
                    }, e.parseMediaKeyString = function(t) {
                        var e = oe.exec(t) || [],
                            i = e[1],
                            n = e[2],
                            a = +i;
                        if (a && n) return {
                            media_category: a,
                            media_id: n
                        }
                    }, e.getMediaPlatformIdentifierUsingDefaultCategory = function(t) {
                        var e = this.defaultMediaCategory(t);
                        return e ? {
                            media_platform_identifier: {
                                media_category: e,
                                media_id: t.contentId
                            }
                        } : {
                            unknown_identifier: {
                                content_id: t.contentId
                            }
                        }
                    }, e.getMediaEntityCategoryUsingPlaybackUrl = function(t) {
                        var e = this.getVariantUrl(t);
                        if (e) {
                            if (-1 !== e.indexOf("amplify_video")) return Zt;
                            if (-1 !== e.indexOf("ext_tw_video")) return Jt
                        }
                    }, e.defaultMediaCategory = function(t) {
                        switch (t.contentType) {
                            case st.GIF:
                                return $t;
                            case st.LIVE:
                                return te;
                            case st.BROADCAST:
                                return ee;
                            case st.MEDIA_ENTITY:
                                return this.getMediaEntityCategoryUsingPlaybackUrl(t);
                            default:
                                return
                        }
                    }, e.getLiveEventIdentifier = function(t, e) {
                        return t.eventId ? {
                            lex_event_identifier: {
                                lex_event_id: t.eventId
                            }
                        } : e === st.LIVE ? {
                            legacy_live_event_identifier: {
                                legacy_live_event_id: t.source.id
                            }
                        } : void 0
                    }, e.getTweetId = function(t, e) {
                        return e === st.BROADCAST || e === st.LIVE ? t.tweetId : t.type === qt ? t.id : void 0
                    }, e.getScribeElement = function(t) {
                        switch (t.contentType) {
                            case st.VINE:
                                return "vine_player";
                            case st.GIF:
                                return "gif_player";
                            case st.VMAP:
                                return "platform_amplify_card";
                            case st.LIVE:
                            case st.BROADCAST:
                                return "live_video_player";
                            case st.PARTNER_VIDEO:
                                return "partner_video_player";
                            case st.PERISCOPE:
                                return "periscope_player";
                            case st.MEDIA_ENTITY:
                            default:
                                return "video_player"
                        }
                    }, e.getBaseItem = function(t, e) {
                        var i = this.context.baseScribeItem;
                        return i || (t.type === qt ? {
                            id: t.id,
                            item_type: "0"
                        } : t.tweetId ? {
                            id: t.tweetId,
                            item_type: "0"
                        } : e ? {
                            id: e,
                            item_type: "28"
                        } : void 0)
                    }, e.getLexMetadata = function(t, e) {
                        var i = this.context.scribeContext || {},
                            n = {},
                            a = {};
                        return e.broadcastId && (n.is_replay_broadcast = !e.isLive, a.tweet_id = t.source.tweetId, "live_event_timeline" === i.page && "tweet" !== i.component ? n.host_broadcast_id = e.broadcastId : n.target_broadcast_id = e.broadcastId), t.eventId && ("live_event_timeline" === i.page && "tweet" !== i.component ? a.host_event_id = t.eventId : a.target_event_id = t.eventId), {
                            live_broadcast_details: n,
                            live_video_event_details: a
                        }
                    }, e.getVariantUrl = function(t) {
                        var e = t.variants && t.variants[t.currentVariantIndex];
                        return e && e.src
                    }, e.isActionSupportedInClientMediaEvent = function(t) {
                        return !Gt[t]
                    }, t
                }();

            function ce(t) {
                return t && "messages" === t.page
            }

            function le(t, e) {
                return ce(e) ? {
                    scrubbed_identifier: {}
                } : t
            }

            function ue(t, e, i) {
                return ce(i) ? {
                    scrubbed_publisher_identifier: {}
                } : t && e ? {
                    twitter_periscope_publisher_identifier: {
                        twitter_id: ft(t),
                        periscope_id: e
                    }
                } : t ? {
                    twitter_publisher_identifier: {
                        id: ft(t)
                    }
                } : e ? {
                    periscope_publisher_identifier: {
                        id: e
                    }
                } : {
                    unknown_publisher_identifier: {}
                }
            }

            function de(t, e) {
                if (t === st.BROADCAST || t === st.LIVE || t === st.PERISCOPE) return {
                    broadcast_state: e ? ae.LIVE : ae.REPLAY
                }
            }
            var _e = function() {
                    function t(t) {
                        this.analytics = t, this.analytics.on(rt.REPLAY_EVENT, this.onReplayEvent.bind(this)), this.analytics.on(rt.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this)), this.analytics.on(rt.INITIAL_INTEND_TO_PLAY_EVENT, this.onInitialIntendToPlayEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onInitialIntendToPlayEvent = function(t) {
                        this.resetLatencyStartDate(t.intentToPlayTime)
                    }, e.onReplayEvent = function() {
                        this.resetLatencyStartDate()
                    }, e.onTrackFinishedEvent = function(t) {
                        this.resetLatencyStartDate(), this.trackId !== t.currentTrackId && (this.trackId = t.currentTrackId)
                    }, e.resetLatencyStartDate = function(t) {
                        this.latencyStartDate = t || new Date
                    }, e.getLatencyData = function() {
                        if (void 0 !== this.latencyStartDate) return {
                            latency: new Date - this.latencyStartDate
                        }
                    }, t
                }(),
                he = [{
                    progress: .25,
                    event: rt.PLAYBACK_25_EVENT
                }, {
                    progress: .5,
                    event: rt.PLAYBACK_50_EVENT
                }, {
                    progress: .75,
                    event: rt.PLAYBACK_75_EVENT
                }, {
                    progress: .95,
                    event: rt.PLAYBACK_95_EVENT
                }, {
                    progress: 1,
                    event: rt.PLAYBACK_COMPLETE_EVENT
                }],
                pe = function() {
                    function t(t) {
                        this.analytics = t, this.eventMap = {}, this.playbackLatencyListener = new _e(t), this.analytics.on(rt.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this)), this.analytics.on(rt.TICK_EVENT, this.onTickEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onTrackFinishedEvent = function(t) {
                        var e = lt(t);
                        void 0 !== e && (e.shouldLoop || (this.eventMap[t.currentTrackId] = {}))
                    }, e.onTickEvent = function(t) {
                        var e = lt(t);
                        if (void 0 !== e && e.durationMs) {
                            var i = this.eventMap[e.id];
                            void 0 === i && (i = {}, this.eventMap[e.id] = i), this.checkAllTentpoles(e, i, t)
                        }
                    }, e.checkAllTentpoles = function(t, e, i) {
                        if (i.isPlaying) {
                            var n = t.durationMs,
                                a = t.currentTimeMs,
                                r = this.playbackLatencyListener.getLatencyData() || {},
                                o = {
                                    latency_millis: r.latency,
                                    cache_info: {
                                        notCached: {}
                                    }
                                };
                            this.emitOnce(rt.PLAYBACK_START_EVENT, e, i, r, o), t.isLive || this.checkProgressTentpoles(n, a, e, i)
                        }
                    }, e.checkProgressTentpoles = function(t, e, i, n) {
                        var a = this;
                        he.forEach((function(r) {
                            var o = r.progress * t;
                            e >= o - 1e3 && e <= o + 1e3 && a.emitOnce(r.event, i, n)
                        }))
                    }, e.emitOnce = function(t, e, i, n, a) {
                        e[t] || (this.analytics.emit(t, i, n, a), e[t] = !0)
                    }, t
                }(),
                Ee = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
                ve = ((s = {})[st.VINE] = 2, s[st.GIF] = 3, s[st.VMAP] = 1, s[st.MEDIA_ENTITY] = 1, s[st.LIVE] = 1, s[st.PERISCOPE] = 5, s[st.BROADCAST] = 1, s),
                ye = function() {
                    function t(t) {
                        this.analytics = t, this.sessionDataStore = {}, this.analytics.on(rt.TICK_EVENT, this.onTickEvent.bind(this)), this.analytics.on(rt.FULL_SCREEN_EVENT, this.onFullscreenEvent.bind(this)), this.analytics.on(rt.SHRINK_EVENT, this.onShrinkEvent.bind(this)), this.analytics.on(rt.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this)), this.analytics.on(rt.AD_SKIP_EVENT, this.onTrackInterrupt.bind(this)), this.analytics.on(rt.TEARDOWN_EVENT, this.onTrackInterrupt.bind(this))
                    }
                    var e = t.prototype;
                    return e.onTickEvent = function(t) {
                        var e = lt(t);
                        if (void 0 !== e) {
                            var i = this.getOrCreateNewSessionDataForTrack(e, t);
                            t.isScrubbing ? i.currentTimeMs = e.currentTimeMs : this.updateViewData(e, i, t)
                        }
                    }, e.onFullscreenEvent = function(t) {
                        var e = lt(t);
                        void 0 !== e && (this.getOrCreateNewSessionDataForTrack(e, t).isFullscreenMode = !0)
                    }, e.onShrinkEvent = function(t) {
                        var e = lt(t);
                        void 0 !== e && (this.getOrCreateNewSessionDataForTrack(e, t).isFullscreenMode = !1)
                    }, e.onTrackFinishedEvent = function(t) {
                        var e = lt(t);
                        if (void 0 !== e) {
                            var i = this.sessionDataStore[e.id];
                            if (void 0 !== i)
                                if (e.shouldLoop) i.currentTimeMs = 0;
                                else {
                                    if (i.timeWatchedMs > 0) {
                                        var n = this.constructVideoSessionDetails(i, e);
                                        this.emitVideoSessionEvent(t, n)
                                    }
                                    this.sessionDataStore[e.id] = void 0
                                }
                        }
                    }, e.onTrackInterrupt = function(t) {
                        var e = lt(t);
                        if (void 0 !== e) {
                            var i = this.sessionDataStore[e.id];
                            if (void 0 !== i) {
                                if (i.timeWatchedMs > 0) {
                                    var n = this.constructVideoSessionDetails(i, e);
                                    this.emitVideoSessionEvent(t, n)
                                }
                                this.sessionDataStore[e.id] = void 0
                            }
                        }
                    }, e.getOrCreateNewSessionDataForTrack = function(t, e) {
                        var i = this.sessionDataStore[t.id];
                        return void 0 === i && (i = {
                            sizesInfoAtTheStart: e.sizesInfo,
                            currentTimeMs: t.currentTimeMs,
                            isFullscreenMode: !1,
                            timeWatchedMs: 0,
                            timeWatchedFullscreenMs: 0,
                            timeWatchedWithAudioMs: 0,
                            timeWatchedFullscreenWithAudioMs: 0,
                            watchedMsByInViewPct: this.generateNewAggregateHistogram(),
                            watchedWithAudioMsByInViewPct: this.generateNewAggregateHistogram(),
                            watchedMsByViewportPct: this.generateNewAggregateHistogram(),
                            maxContinuousWatchedMsByInViewPct: this.generateNewMaxContinuousHistogram(),
                            maxContinuousWatchedWithAudioMsByInViewPct: this.generateNewMaxContinuousHistogram()
                        }, this.sessionDataStore[t.id] = i), i
                    }, e.generateNewAggregateHistogram = function() {
                        for (var t = {}, e = 0; e < Ee.length; e++) {
                            t[Ee[e]] = 0
                        }
                        return t
                    }, e.generateNewMaxContinuousHistogram = function() {
                        for (var t = {}, e = 0; e < Ee.length; e++) {
                            t[Ee[e]] = {
                                current: 0,
                                max: 0
                            }
                        }
                        return t
                    }, e.resetContinuousViewDataForHistogram = function(t) {
                        for (var e = 0; e < Ee.length; e++) {
                            var i = Ee[e];
                            this.resetContinuousViewDataForBucket(t[i])
                        }
                    }, e.resetContinuousViewDataForBucket = function(t) {
                        t.max = Math.max(t.current, t.max), t.current = 0
                    }, e.updateViewData = function(t, e, i) {
                        var n = t.currentTimeMs - e.currentTimeMs,
                            a = e.isFullscreenMode ? 1 : i.percentVisible,
                            r = e.isFullscreenMode ? 1 : i.percentOfViewportOccupied;
                        e.currentTimeMs = t.currentTimeMs, n < 0 || (e.timeWatchedMs += n, this.updateAggregateHistogram(e.watchedMsByInViewPct, a, n), this.updateAggregateHistogram(e.watchedMsByViewportPct, r, n), this.updateMaxContinuousHistogram(e.maxContinuousWatchedMsByInViewPct, a, n), i.isMuted ? this.resetContinuousViewDataForHistogram(e.maxContinuousWatchedWithAudioMsByInViewPct) : (e.timeWatchedWithAudioMs += n, this.updateAggregateHistogram(e.watchedWithAudioMsByInViewPct, a, n), this.updateMaxContinuousHistogram(e.maxContinuousWatchedWithAudioMsByInViewPct, a, n)), e.isFullscreenMode && (e.timeWatchedFullscreenMs += n, i.isMuted || (e.timeWatchedFullscreenWithAudioMs += n)))
                    }, e.updateAggregateHistogram = function(t, e, i) {
                        if (0 !== e)
                            for (var n = 100 * e, a = 0; a < Ee.length; a++) {
                                var r = Ee[a];
                                n >= r && (t[r] += i)
                            }
                    }, e.updateMaxContinuousHistogram = function(t, e, i) {
                        if (0 !== e)
                            for (var n = 100 * e, a = 0; a < Ee.length; a++) {
                                var r = Ee[a];
                                n >= r ? t[r].current += i : t[r].current > 0 && this.resetContinuousViewDataForBucket(t[r])
                            } else this.resetContinuousViewDataForHistogram(t)
                    }, e.constructVideoSessionDetails = function(t, e) {
                        return {
                            video_details: {
                                is_preroll_video: e.displayType === ot.AD,
                                video_length: Math.round(e.durationMs),
                                time_watched: Math.round(t.timeWatchedMs),
                                time_watched_fullscreen: Math.round(t.timeWatchedFullscreenMs),
                                time_watched_with_audio: Math.round(t.timeWatchedWithAudioMs),
                                time_watched_fullscreen_with_audio: Math.round(t.timeWatchedFullscreenWithAudioMs),
                                time_watched_100_with_audio: Math.round(t.watchedWithAudioMsByInViewPct[100]),
                                video_type: ve[e.contentType],
                                watched_ms_by_in_view_pct: this.constructAggregateHistogramPayload(t.watchedMsByInViewPct),
                                watched_with_audio_ms_by_in_view_pct: this.constructAggregateHistogramPayload(t.watchedWithAudioMsByInViewPct),
                                watched_ms_by_viewport_pct: this.constructAggregateHistogramPayload(t.watchedMsByViewportPct),
                                max_continuous_watched_ms_by_in_view_pct: this.constructMaxContinuousHistogramPayload(t.maxContinuousWatchedMsByInViewPct),
                                max_continuous_watched_with_audio_ms_by_in_view_pct: this.constructMaxContinuousHistogramPayload(t.maxContinuousWatchedWithAudioMsByInViewPct),
                                sizes_info_at_the_start: {
                                    viewport_size: t.sizesInfoAtTheStart.viewportSize,
                                    ad_size: t.sizesInfoAtTheStart.mediaSize
                                }
                            }
                        }
                    }, e.constructAggregateHistogramPayload = function(t) {
                        for (var e = {}, i = 0; i < Ee.length; i++) {
                            var n = Ee[i];
                            e[n] = Math.round(t[n])
                        }
                        return {
                            histogram: e
                        }
                    }, e.constructMaxContinuousHistogramPayload = function(t) {
                        for (var e = {}, i = 0; i < Ee.length; i++) {
                            var n = Ee[i],
                                a = t[n];
                            e[n] = Math.round(Math.max(a.current, a.max))
                        }
                        return {
                            histogram: e
                        }
                    }, e.emitVideoSessionEvent = function(t, e) {
                        this.analytics.emit(rt.VIDEO_SESSION_EVENT, t, e)
                    }, t
                }(),
                fe = [rt.VIDEO_VIEW_EVENT, rt.PLAY_FROM_TAP_EVENT, rt.VIEW_THRESHOLD_EVENT, rt.ONE_SEC_VIEW_EVENT, rt.GROUPM_VIEW_EVENT, rt.MRC_AUDIBLE_VIEW_EVENT, rt.MRC_VIEW_EVENT, rt.VIDEO_QUALITY_VIEW_EVENT, rt.SIX_SEC_VIEW_EVENT],
                me = [rt.ONE_SEC_VIEW_EVENT, rt.MRC_AUDIBLE_VIEW_EVENT, rt.MRC_VIEW_EVENT, rt.VIDEO_QUALITY_VIEW_EVENT],
                Te = function() {
                    function t(t) {
                        this.analytics = t, this.eventMap = {}, this.analytics.on(rt.TICK_EVENT, this.onTickEvent.bind(this)), this.analytics.on(rt.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this)), this.analytics.on(rt.PAUSE_EVENT, this.onPauseEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onTrackFinishedEvent = function(t) {
                        var e = lt(t);
                        if (void 0 !== e) {
                            var i = this.eventMap[e.id];
                            void 0 !== i && (e.shouldLoop ? i.timePlayedToMs = 0 : this.eventMap[e.id] = void 0)
                        }
                    }, e.onPauseEvent = function(t) {
                        this.resetContinuousViewEventTimingData(t)
                    }, e.onTickEvent = function(t) {
                        var e = lt(t);
                        if (void 0 !== e) {
                            var i = this.eventMap[e.id];
                            if (void 0 === i) {
                                i = {
                                    timePlayedToMs: e.currentTimeMs
                                };
                                for (var n = 0; n < fe.length; n++) {
                                    i[fe[n]] = {
                                        timePlayedMs: 0,
                                        visibilityWeightedTimePlayedMs: 0,
                                        fired: !1
                                    }
                                }
                                this.eventMap[e.id] = i
                            }
                            t.isScrubbing ? (i.timePlayedToMs = e.currentTimeMs, this.resetContinuousViewEventTimingData(t)) : (this.updateTimingData(e, i, t), this.checkViewEvents(e, i, t)), this.checkPlayFromTap(i, t)
                        }
                    }, e.updateTimingData = function(t, e, i) {
                        var n = t.currentTimeMs - e.timePlayedToMs;
                        e.timePlayedToMs = t.currentTimeMs;
                        var a = i.percentVisible;
                        a >= 1 && (e[rt.VIEW_THRESHOLD_EVENT].timePlayedMs += n), a >= 1 ? e[rt.ONE_SEC_VIEW_EVENT].timePlayedMs += n : e[rt.ONE_SEC_VIEW_EVENT].timePlayedMs = 0, a >= .5 && _t(i) ? e[rt.MRC_AUDIBLE_VIEW_EVENT].timePlayedMs += n : e[rt.MRC_AUDIBLE_VIEW_EVENT].timePlayedMs = 0, a >= .5 ? e[rt.MRC_VIEW_EVENT].timePlayedMs += n : e[rt.MRC_VIEW_EVENT].timePlayedMs = 0, a >= 1 && !i.isMuted && (e[rt.GROUPM_VIEW_EVENT].timePlayedMs += n), a >= .5 ? e[rt.VIDEO_QUALITY_VIEW_EVENT].timePlayedMs += n : e[rt.VIDEO_QUALITY_VIEW_EVENT].timePlayedMs = 0, e[rt.SIX_SEC_VIEW_EVENT].timePlayedMs += n, a >= .5 && (e[rt.SIX_SEC_VIEW_EVENT].visibilityWeightedTimePlayedMs += a * n)
                    }, e.resetContinuousViewEventTimingData = function(t) {
                        var e = this.eventMap[t.currentTrackId];
                        if (void 0 !== e)
                            for (var i = 0; i < me.length; i++) {
                                e[me[i]].timePlayedMs = 0
                            }
                    }, e.checkViewEvents = function(t, e, i) {
                        var n;
                        e[rt.VIEW_THRESHOLD_EVENT].timePlayedMs >= (!(n = t).isLive && n.durationMs > 0 && !n.shouldLoop ? Math.min(n.durationMs - 500, wt) : wt) && (this.emitOnce(rt.VIEW_THRESHOLD_EVENT, e, i), this.emitOnce(rt.VIDEO_VIEW_EVENT, e, i)), e[rt.ONE_SEC_VIEW_EVENT].timePlayedMs >= 1e3 && this.emitOnce(rt.ONE_SEC_VIEW_EVENT, e, i), e[rt.GROUPM_VIEW_EVENT].timePlayedMs >= function(t) {
                            return !t.isLive && t.durationMs > 0 ? t.durationMs * Ft : Number.MAX_SAFE_INTEGER
                        }(t) && this.emitOnce(rt.GROUPM_VIEW_EVENT, e, i), e[rt.MRC_AUDIBLE_VIEW_EVENT].timePlayedMs >= 2e3 && this.emitOnce(rt.MRC_AUDIBLE_VIEW_EVENT, e, i), e[rt.MRC_VIEW_EVENT].timePlayedMs >= 2e3 && this.emitOnce(rt.MRC_VIEW_EVENT, e, i), e[rt.VIDEO_QUALITY_VIEW_EVENT].timePlayedMs >= function(t) {
                            return !t.isLive && t.durationMs > 0 ? Math.min(t.durationMs * Rt, Lt) : Lt
                        }(t) && this.emitOnce(rt.VIDEO_QUALITY_VIEW_EVENT, e, i);
                        var a = e[rt.SIX_SEC_VIEW_EVENT];
                        a.timePlayedMs >= function(t) {
                            return !t.isLive && t.durationMs > 0 ? Math.min(t.durationMs * kt, Ot) : Ot
                        }(t) && a.visibilityWeightedTimePlayedMs >= function(t) {
                            return !t.isLive && t.durationMs > 0 ? Math.min(t.durationMs * Wt, Dt) : Dt
                        }(t) && this.emitOnce(rt.SIX_SEC_VIEW_EVENT, e, i)
                    }, e.checkPlayFromTap = function(t, e) {
                        e.isPlaying && !e.isPreview && (this.emitOnce(rt.PLAY_FROM_TAP_EVENT, t, e), this.emitOnce(rt.VIDEO_VIEW_EVENT, t, e))
                    }, e.emitOnce = function(t, e, i) {
                        e[t].fired || (this.analytics.emit(t, i), e[t].fired = !0)
                    }, t
                }(),
                ge = function(t) {
                    function e(e, i, n, a) {
                        var r;
                        (r = t.call(this) || this).scribeListener = new se(Z()(Z()(r)), e, a), r.promotedLogListener = new Yt(Z()(Z()(r)), i), r.tentpoleListener = new pe(Z()(Z()(r))), r.viewListener = new Te(Z()(Z()(r))), r.playbackLapseListener = new xt(Z()(Z()(r))), r.errorListener = new vt(Z()(Z()(r))), r.beaconListener = new pt(Z()(Z()(r))), r.rewindListener = new jt(Z()(Z()(r))), r.heartbeatListener = new mt(Z()(Z()(r))), r.loopListener = new bt(Z()(Z()(r))), r.intendToPlayListener = new Pt(Z()(Z()(r))), r.videoSessionListener = new ye(Z()(Z()(r))), r.ctaImpressionListener = new Et(Z()(Z()(r)));
                        var o = new Mt(n, a),
                            s = new Bt(o);
                        return r.lifecycleListener = new Ut(Z()(Z()(r)), s), r
                    }
                    Q()(e, t);
                    var i = e.prototype;
                    return i.onTickEvent = function(t) {
                        this.emit(rt.TICK_EVENT, t)
                    }, i.onReplay = function(t) {
                        var e = lt(t);
                        void 0 !== e && (e.shouldLoop || this.emit(rt.REPLAY_EVENT, t))
                    }, i.onTrackFinished = function(t) {
                        this.emit(rt.TRACK_FINISHED_EVENT, t)
                    }, i.onIntendToPlay = function(t) {
                        this.emit(rt.INTEND_TO_PLAY_EVENT, t)
                    }, i.onPlay = function(t) {
                        this.emit(rt.PLAY_EVENT, t)
                    }, i.onPause = function(t) {
                        this.emit(rt.PAUSE_EVENT, t)
                    }, i.onMute = function(t) {
                        this.emit(rt.MUTE_EVENT, t)
                    }, i.onUnmute = function(t) {
                        this.emit(rt.UNMUTE_EVENT, t)
                    }, i.onFullScreen = function(t) {
                        this.emit(rt.FULL_SCREEN_EVENT, t)
                    }, i.onShrink = function(t) {
                        this.emit(rt.SHRINK_EVENT, t)
                    }, i.onAdSkip = function(t) {
                        this.emit(rt.AD_SKIP_EVENT, t)
                    }, i.onCtaImpression = function(t) {
                        this.emit(rt.CTA_IMPRESSION_EVENT, t)
                    }, i.onCtaClick = function(t) {
                        this.emit(rt.CTA_CLICK_EVENT, t)
                    }, i.onConfigLoaded = function(t) {
                        this.emit(rt.CONFIG_LOADED_EVENT, t)
                    }, i.onError = function(t, e) {
                        this.emit(rt.ERROR_EVENT, t, e)
                    }, i.onTeardown = function(t) {
                        this.emit(rt.TEARDOWN_EVENT, t)
                    }, e
                }(it.a),
                Pe = i("Zl35"),
                be = i("9Xij"),
                Ie = i("iOGT"),
                Ae = i("mf9H"),
                Ve = i("gZV8"),
                Ne = i("vF3p"),
                Se = i("S4UJ"),
                Ce = function(t) {
                    function e() {
                        for (var e, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(n)) || this, y()(h()(e), "_handlePlacementChange", (function(t) {
                            e._updateAndNotify({
                                placement: t
                            }, e.props.onChange)
                        })), y()(h()(e), "_handleObstructionChange", (function() {
                            var t = e.props,
                                i = t.obstructionDetection,
                                n = t.onChange;
                            e._updateAndNotify({
                                obstructions: i.getObstructions()
                            }, n)
                        })), y()(h()(e), "_setPlacementRef", (function(t) {
                            var i = e.props.setAPI;
                            e._placementRef = t, i(e._placementRef ? {
                                sample: function(t) {
                                    return e.sample(t)
                                }
                            } : void 0)
                        })), e
                    }
                    E()(e, t);
                    var i = e.prototype;
                    return i.sample = function(t) {
                        var e = this;
                        this._placementRef && this._placementRef.sample((function(i) {
                            e._updateAndNotify({
                                placement: i
                            }, t)
                        }))
                    }, i.render = function() {
                        var t = this.props,
                            e = t.children,
                            i = t.style;
                        return f.createElement(Ve.a, {
                            onPlacementChange: this._handlePlacementChange,
                            ref: this._setPlacementRef,
                            style: i
                        }, e)
                    }, i.componentDidMount = function() {
                        var t = this.props.obstructionDetection;
                        this._obstructionSubscription = t.subscribe(this._handleObstructionChange)
                    }, i.componentWillUnmount = function() {
                        this._obstructionSubscription && (this._obstructionSubscription.unsubscribe(), this._obstructionSubscription = void 0)
                    }, i._updateAndNotify = function(t, e) {
                        var i = this,
                            n = t.placement,
                            a = t.obstructions,
                            r = this.props,
                            o = r.layerId,
                            s = r.obstructionDetection;
                        this._placement = n || this._placement, this._obstructions = a || this._obstructions || s.getObstructions(), this._placement ? e(new Y(this._placement, this._obstructions, o)) : this._placementRef && this._placementRef.sample((function(t) {
                            i._placement = t, i._obstructions = i._obstructions || s.getObstructions(), e(new Y(t, i._obstructions, o))
                        }))
                    }, e
                }(f.Component);
            y()(Ce, "defaultProps", {
                obstructionDetection: Ne.a
            });
            var Me = Object(Se.a)(Ce),
                we = 7e3,
                Le = 6e4,
                Re = H.a.d58baa7e,
                Oe = new F.a({}),
                ke = function(t) {
                    function e(e, i) {
                        var n;
                        return n = t.call(this, e, i) || this, y()(h()(n), "_videoRef", f.createRef()), y()(h()(n), "_emitter", null), y()(h()(n), "_playerInternal", null), y()(h()(n), "_placementRef", null), y()(h()(n), "_isLooping", !1), y()(h()(n), "_instreamVideoEnabled", C.a.isTrue("responsive_web_instream_video_enabled")), y()(h()(n), "_renderLegacyPlayer", (function(t) {
                            var e = n.props,
                                i = e.accessibilityLabel,
                                a = e.analytics,
                                r = e.source,
                                o = r.contentId,
                                s = r.eventId,
                                c = r.videoId,
                                u = r.vmapUrl,
                                d = e.cta,
                                _ = e.displayOptions,
                                h = e.durationMs,
                                p = e.intentToPlayTime,
                                E = e.videoEl,
                                v = e.viewCount,
                                y = e.includeBroadcastEventAssociation,
                                m = e.showControls,
                                T = e.geolocationPrompt,
                                g = e.timecode,
                                P = e.mediaAvailability,
                                b = e.noAuthHttpClient,
                                I = e.publisherId,
                                A = e.twitterAuthedHttpClient,
                                V = e.language,
                                N = e.maxLoopCount,
                                S = e.videoPlayer;
                            return f.createElement(S, l()({
                                accessibilityLabel: i,
                                adProvider: n._tweetAdProvider(),
                                analytics: a,
                                contentId: o,
                                controls: m,
                                cta: d,
                                customOverlay: n._deriveCustomOverlay(),
                                disableHls: n._disableHls,
                                displayOptions: _,
                                durationMs: h,
                                enableNativeFullscreen: n._enableNativeFullscreen,
                                eventId: s,
                                geolocationPrompt: T,
                                httpClient: b,
                                includeBroadcastEventAssociation: y,
                                initiallyMutedCaptions: !0,
                                intentToPlayTime: p,
                                language: V,
                                maxLoopCount: N,
                                mediaAvailability: P,
                                playbackSessionId: c.id,
                                precache: n._precacheEnabled,
                                publisherId: I,
                                ref: m ? void 0 : n._videoRef,
                                requestedTimecode: g,
                                setPlayerApi: n._setPlayerApi,
                                shortNumberFormatter: Re,
                                twitterAuthedHttpClient: A,
                                videoEl: E,
                                videoId: c,
                                viewCount: v,
                                vmapUrl: u
                            }, t))
                        })), y()(h()(n), "_renderHorizonPlayer", (function(t) {
                            var e = n.props,
                                i = e.accessibilityLabel,
                                a = e.analytics,
                                r = e.source,
                                o = r.contentId,
                                s = r.eventId,
                                c = r.videoId,
                                u = r.vmapUrl,
                                d = e.cta,
                                _ = e.displayOptions,
                                h = e.durationMs,
                                p = e.intentToPlayTime,
                                E = e.videoEl,
                                v = e.viewCount,
                                y = e.includeBroadcastEventAssociation,
                                m = e.showControls,
                                T = e.geolocationPrompt,
                                g = e.timecode,
                                P = e.mediaAvailability,
                                b = e.noAuthHttpClient,
                                I = e.publisherId,
                                A = e.twitterAuthedHttpClient,
                                V = e.language,
                                N = e.maxLoopCount,
                                S = e.videoPlayer,
                                C = e.uiStack;
                            return (f.createElement(Pe.b, l()({
                                accessibilityLabel: i,
                                adProvider: n._tweetAdProvider(),
                                analytics: a,
                                basePlayerClass: S,
                                contentId: o,
                                cta: d,
                                disableHls: n._disableHls,
                                durationMs: h,
                                enableNativeFullscreen: n._enableNativeFullscreen,
                                eventId: s,
                                geolocationPrompt: T,
                                httpClient: b,
                                includeBroadcastEventAssociation: y,
                                initiallyMutedCaptions: !0,
                                intentToPlayTime: p,
                                language: V,
                                maxLoopCount: N,
                                mediaAvailability: P,
                                objectFitVideo: _ && _.objectFitVideo,
                                onApiReady: n._handleApiReady,
                                playbackSessionId: c.id,
                                precache: n._precacheEnabled,
                                publisherId: I,
                                ref: m ? void 0 : n._videoRef,
                                requestedTimecode: g,
                                twitterAuthedHttpClient: A,
                                videoEl: E,
                                videoId: c,
                                viewCount: v,
                                vmapUrl: u
                            }, t), C))
                        })), y()(h()(n), "_setPlayerApi", (function(t) {
                            var e = n.props,
                                i = e.onMuteChange;
                            "function" == typeof e.customOverlay && (n._playerInternal = t, n.forceUpdate()), i && (t.on("unmute", (function() {
                                return i({
                                    isPlayerMuted: !1
                                })
                            })), t.on("mute", (function() {
                                return i({
                                    isPlayerMuted: !0
                                })
                            }))), t && (t.on("fullscreenEntered", (function() {
                                return n._handleFullscreenChange({
                                    isPlayerFullscreen: !0
                                })
                            })), t.on("fullscreenExited", (function() {
                                return n._handleFullscreenChange({
                                    isPlayerFullscreen: !1
                                })
                            }))), n._setPlayerInternal(t)
                        })), y()(h()(n), "_handleApiReady", n._setPlayerApi), y()(h()(n), "_deriveCustomOverlay", (function() {
                            var t = n.props.customOverlay;
                            return "function" == typeof t ? n._playerInternal ? t(n._playerInternal, n._containerRef) : null : t
                        })), y()(h()(n), "_getLoopingThreshold", (function() {
                            var t = n.props,
                                e = t.loopingThresholdMs,
                                i = t.source.videoId;
                            return e || "tweet" === i.type && Le || we
                        })), y()(h()(n), "_handleAutoPlayRequest", (function() {
                            var t = n.props.onAutoplay;
                            n._playerInternal && (n._playerInternal.playPreview(), t && t())
                        })), y()(h()(n), "_handlePauseRequest", (function() {
                            var t = n.props.onAutopause;
                            n._playerInternal && (n._playerInternal.pause(), t && t())
                        })), y()(h()(n), "_handlePlacementChange", (function(t) {
                            n._emitter && n._emitter.signalPlacementChange(t), n._playerInternal && n._playerInternal.updatePosition(t.getPositionData())
                        })), y()(h()(n), "_handlePlaybackComplete", (function() {
                            n._emitter && n._emitter.signalPlaybackFinish()
                        })), y()(h()(n), "_handlePlaybackStarted", (function() {
                            n._emitter && n._emitter.signalPlay(), n.props.onPlaybackStarted && n.props.onPlaybackStarted()
                        })), y()(h()(n), "_handlePlaybackPaused", (function() {
                            n._emitter && n._emitter.signalPause()
                        })), y()(h()(n), "_handlePlayerState", (function(t) {
                            var e = n.props,
                                i = e.onPlayerState,
                                a = e.onProgressChange;
                            i && i(t);
                            var r = (t.tracks || []).find((function(e) {
                                return e.id === t.currentTrackId
                            }));
                            if (r) {
                                var o = (r.currentTimeMs || 0) / r.durationMs;
                                a && a(o, t.tracksFinished)
                            }
                        })), y()(h()(n), "_handleError", (function(t) {
                            var e = n.props.onError;
                            t.error && (e && e(), n._onErrorUnsubscribe && n._onErrorUnsubscribe())
                        })), y()(h()(n), "_handleFullscreenChange", (function(t) {
                            var e = n.context.viewport;
                            if (e && e.temporarilySuppressScrollListeners(2e3), q.a.isChrome())
                                if (t.isPlayerFullscreen) n._savedScrollPosition = {
                                    y: window.scrollY,
                                    x: window.scrollX
                                };
                                else if (n._savedScrollPosition) {
                                var i = n._savedScrollPosition,
                                    a = i.x,
                                    r = i.y;
                                n._savedScrollPosition = void 0, window.scrollTo(a, r)
                            }
                            var o = n.props.onFullscreenChange;
                            o && o(t)
                        })), y()(h()(n), "_setPlayerInternal", (function(t) {
                            if (n._playerInternal = t, t) {
                                var e = n.props,
                                    i = e.onPlayerState,
                                    a = e.onProgressChange;
                                (i || a) && t.subscribe(n._handlePlayerState), n.props.onError && (n._onErrorUnsubscribe = t.subscribe(n._handleError)), t.on("playbackComplete", n._handlePlaybackComplete), t.on("play", n._handlePlaybackStarted), t.on("pause", n._handlePlaybackPaused), n.props.playbackCoordination && (n._emitter = n.props.playbackCoordination.register({
                                    onAutoPlayRequest: n._handleAutoPlayRequest,
                                    onPauseRequest: n._handlePauseRequest,
                                    canAutoplay: Object(G.a)(n.props.autoplay, n.props.forwardPivotInfo),
                                    isLooping: n._isLooping
                                })), n._submitInitialPlacement()
                            }
                            if (n.props.setPlayer) {
                                var r = n._playerInternal && {
                                    play: function() {
                                        n._playerInternal && n._playerInternal.play()
                                    },
                                    pause: function() {
                                        n._playerInternal && n._playerInternal.pause()
                                    },
                                    replay: function() {
                                        n._playerInternal && n._playerInternal.replay()
                                    }
                                };
                                n.props.setPlayer(r)
                            }
                        })), y()(h()(n), "_setPlacementAPI", (function(t) {
                            n._placementRef = t, n._submitInitialPlacement()
                        })), y()(h()(n), "_getTweetId", (function() {
                            var t = n.props.source.videoId;
                            if (t) {
                                if ("tweet" === t.type) return t.id;
                                if ("broadcast" === t.type || "live_event" === t.type) return t.tweetId
                            }
                        })), y()(h()(n), "_tweetAdProvider", (function() {
                            if (n._instreamVideoEnabled) {
                                var t = n._getTweetId();
                                if (t) return function() {
                                    return n.props.tweetAdProvider(t)
                                }
                            }
                        })), n._enableNativeFullscreen = C.a.isTrue("responsive_web_video_native_fullscreen_enabled"), n._disableHls = !(q.a.isDesktopOS() || q.a.isAndroid() && C.a.isTrue("web_video_hls_android_mse_enabled")), n._precacheEnabled = !q.a.isMobileOS() && C.a.hasValue("responsive_web_video_precaching_8507", "precaching"), n
                    }
                    E()(e, t);
                    var i = e.prototype;
                    return i.componentDidMount = function() {
                        if (!this._containerRef && this._videoRef.current) {
                            var t = z.a.findDOMNode(this._videoRef.current);
                            t instanceof HTMLElement && (this._containerRef = t)
                        }
                    }, i.render = function() {
                        var t = this.props.aspectRatio;
                        return f.createElement(be.a, {
                            ratio: t,
                            style: De.aspectRatio
                        }, f.createElement(Me, {
                            onChange: this._handlePlacementChange,
                            setAPI: this._setPlacementAPI,
                            style: R.a.absoluteFill
                        }, this._renderPlayer()))
                    }, i.UNSAFE_componentWillReceiveProps = function(t) {
                        Object(U.a)(this.props.source, t.source) || this._emitter && this._emitter.reset()
                    }, i.componentWillUnmount = function() {
                        this._emitter && (this._emitter.unregister(), this._emitter = null), this._onErrorUnsubscribe && this._onErrorUnsubscribe()
                    }, i._renderPlayer = function() {
                        var t = this.props,
                            e = t.source.variants,
                            i = t.durationMs,
                            n = t.forceLoop,
                            a = t.videoType,
                            r = t.poster,
                            o = t.promotedContent,
                            s = t.dataSaverMode,
                            c = "animated_gif" === a,
                            l = "vine" === a,
                            u = e && e.length ? c ? "gif" : "media_entity" : "vmap";
                        this._isLooping = !!(n || c || l || i && i <= this._getLoopingThreshold());
                        var d = {
                            bitrateCap: s ? L.a.MEDIUM : void 0,
                            contentType: u,
                            featureProvider: C.a,
                            loop: this._isLooping,
                            poster: r && r.url,
                            promotedContext: o && (o.impression_id || o.disclosure_type) ? {
                                impressionId: o.impression_id,
                                disclosureType: o.disclosure_type
                            } : void 0,
                            variants: e && Object(V.d)(Object(Ie.c)(e, s ? Ie.a.MEDIUM : Ie.a.HIGH).map((function(t) {
                                return {
                                    src: t.url,
                                    type: t.content_type
                                }
                            })))
                        };
                        return f.createElement(W, null, Object(V.e)(this.props) ? this._renderHorizonPlayer(d) : this._renderLegacyPlayer(d))
                    }, i._submitInitialPlacement = function() {
                        this._emitter && this._placementRef && this._placementRef.sample(this._handlePlacementChange)
                    }, e
                }(f.Component);
            y()(ke, "contextTypes", {
                viewport: M.object
            }), y()(ke, "defaultProps", {
                autoplay: w.b.Off,
                playbackCoordination: Ae.b,
                showControls: !0,
                dataSaverMode: !1,
                geolocationPrompt: !0,
                noAuthHttpClient: Oe,
                includeBroadcastEventAssociation: !1
            });
            var De = R.a.create({
                    aspectRatio: {
                        zIndex: void 0
                    }
                }),
                We = i("fs1G");
            i.d(e, "InlinePlayerContainer", (function() {
                return Fe
            }));
            var Fe = function(t) {
                    function e(e) {
                        var i;
                        return i = t.call(this, e) || this, y()(h()(i), "_player", null), y()(h()(i), "_getBaseItem", (function(t) {
                            var e, n = i.props,
                                a = n.analytics,
                                r = n.includeBroadcastEventAssociation,
                                o = n.source.videoId,
                                s = a.contextualScribeData.event_id;
                            return e = "broadcast" === o.type && o.tweetId ? o.tweetId : "broadcast" === o.type && r && s ? s : o.id, t.find((function(t) {
                                return t.id === e
                            }))
                        })), y()(h()(i), "_createAnalytics", (function(t) {
                            var e = {
                                    log: i._scribeAction
                                },
                                n = i.props.analytics,
                                a = {
                                    log: C.a.isTrue("responsive_web_video_promoted_logging_enabled") ? i._logPromotedVideoEvent : We.a
                                },
                                r = n.contextualScribeNamespace,
                                o = n.contextualScribeData,
                                s = Array.isArray(o.items) ? i._getBaseItem(o.items) : void 0,
                                c = {
                                    scribeContext: Object.assign({}, r),
                                    baseScribeItem: s
                                };
                            return new ge(e, a, t, c)
                        })), y()(h()(i), "_logPromotedVideoEvent", (function(t) {
                            var e = i.props.createLocalApiErrorHandler;
                            i.props.logPromotedVideoEvent(t).catch(e())
                        })), y()(h()(i), "_scribeAction", (function(t) {
                            var e = t.category,
                                n = t.data,
                                a = t.namespace;
                            i.props.analytics.scribe(Object.assign({}, a, {
                                data: Object.assign({}, n, {
                                    _category_: e
                                })
                            }))
                        })), y()(h()(i), "_setPlayer", (function(t) {
                            if (i._player = t, i.props.setPlayer) {
                                var e = i._player && {
                                    play: function() {
                                        i._player && i._player.play()
                                    },
                                    pause: function() {
                                        i._player && i._player.pause()
                                    },
                                    replay: function() {
                                        i._player && i._player.replay()
                                    }
                                };
                                i.props.setPlayer(e)
                            }
                        })), i._twitterAuthedHttpClient = e.getTwitterAuthedHttpClient(), i._analytics = i._createAnalytics(i._twitterAuthedHttpClient), i
                    }
                    return E()(e, t), e.prototype.render = function() {
                        var t = this.props,
                            e = (t.createLocalApiErrorHandler, t.getTwitterAuthedHttpClient, t.tweetAdProvider),
                            i = d()(t, ["createLocalApiErrorHandler", "getTwitterAuthedHttpClient", "tweetAdProvider"]);
                        return f.createElement(ke, l()({}, i, {
                            analytics: this._analytics,
                            setPlayer: this._setPlayer,
                            tweetAdProvider: e,
                            twitterAuthedHttpClient: this._twitterAuthedHttpClient
                        }))
                    }, e
                }(f.PureComponent),
                Be = S(Fe);
            e.default = Be
        },
        VjGk: function(t, e, i) {
            var n, a, r = i("+nzf"),
                o = i("42G/"),
                s = 0,
                c = 0;
            t.exports = function(t, e, i) {
                var l = e && i || 0,
                    u = e || [],
                    d = (t = t || {}).node || n,
                    _ = void 0 !== t.clockseq ? t.clockseq : a;
                if (null == d || null == _) {
                    var h = r();
                    null == d && (d = n = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]), null == _ && (_ = a = 16383 & (h[6] << 8 | h[7]))
                }
                var p = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
                    E = void 0 !== t.nsecs ? t.nsecs : c + 1,
                    v = p - s + (E - c) / 1e4;
                if (v < 0 && void 0 === t.clockseq && (_ = _ + 1 & 16383), (v < 0 || p > s) && void 0 === t.nsecs && (E = 0), E >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                s = p, c = E, a = _;
                var y = (1e4 * (268435455 & (p += 122192928e5)) + E) % 4294967296;
                u[l++] = y >>> 24 & 255, u[l++] = y >>> 16 & 255, u[l++] = y >>> 8 & 255, u[l++] = 255 & y;
                var f = p / 4294967296 * 1e4 & 268435455;
                u[l++] = f >>> 8 & 255, u[l++] = 255 & f, u[l++] = f >>> 24 & 15 | 16, u[l++] = f >>> 16 & 255, u[l++] = _ >>> 8 | 128, u[l++] = 255 & _;
                for (var m = 0; m < 6; ++m) u[l + m] = d[m];
                return e || o(u)
            }
        },
        Vzju: function(t, e, i) {
            "use strict";
            var n = i("09V9"),
                a = i("GU4h"),
                r = i("ZA3W"),
                o = [].slice,
                s = {},
                c = function(t, e, i) {
                    if (!(e in s)) {
                        for (var n = [], a = 0; a < e; a++) n[a] = "a[" + a + "]";
                        s[e] = Function("F,a", "return new F(" + n.join(",") + ")")
                    }
                    return s[e](t, i)
                };
            t.exports = Function.bind || function(t) {
                var e = n(this),
                    i = o.call(arguments, 1),
                    s = function() {
                        var n = i.concat(o.call(arguments));
                        return this instanceof s ? c(e, n.length, n) : r(e, n, t)
                    };
                return a(e.prototype) && (s.prototype = e.prototype), s
            }
        },
        WUuN: function(t, e, i) {
            var n = i("7zcn");
            n(n.S, "Number", {
                isNaN: function(t) {
                    return t != t
                }
            })
        },
        Yyzf: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return v
            }));
            i("PN9k");
            var n = i("ERkP"),
                a = i("t62R"),
                r = i("/yvb"),
                o = i("3XMw"),
                s = i.n(o),
                c = i("svPC"),
                l = i.n(c),
                u = i("rHpw"),
                d = i("D4le"),
                _ = i.n(d),
                h = i("3xO4"),
                p = i.n(h),
                E = s.a.ia51a661;

            function v(t) {
                var e = t.displayBackgroundImage,
                    i = void 0 !== e && e,
                    o = t.errorMessage,
                    s = t.iconPlayError,
                    c = t.imageSrc,
                    d = t.onReloadPress;
                return n.createElement(p.a, {
                    style: [u.a.absoluteFill, i ? null : y.blankOverlay]
                }, i ? n.createElement(n.Fragment, null, n.createElement(p.a, {
                    style: y.backgroundImage
                }, c && n.createElement(_.a, {
                    resizeMode: "cover",
                    source: c,
                    style: u.a.absoluteFill
                })), n.createElement(p.a, {
                    style: y.overlay
                })) : null, n.createElement(p.a, {
                    style: y.errorContainer
                }, n.createElement(p.a, null, s ? n.createElement(l.a, {
                    style: y.playErrorIcon
                }) : null), n.createElement(p.a, {
                    accessible: !0
                }, n.createElement(a.b, {
                    style: i ? y.errorMsgTextWhite : y.errorMsgTextGray
                }, o)), d ? n.createElement(r.a, {
                    onPress: d,
                    style: y.buttonContainer,
                    type: "primary"
                }, E) : null))
            }
            var y = u.a.create((function(t) {
                return {
                    backgroundImage: Object.assign({}, u.a.absoluteFillObject, {
                        filter: "blur(5px)"
                    }),
                    overlay: Object.assign({}, u.a.absoluteFillObject, {
                        backgroundColor: t.colors.translucentBlack77
                    }),
                    blankOverlay: {
                        backgroundColor: t.colors.faintGray
                    },
                    buttonContainer: {
                        justifyContent: "center",
                        alignSelf: "center"
                    },
                    errorContainer: {
                        justifyContent: "center",
                        height: "100%",
                        marginHorizontal: t.spaces.large
                    },
                    errorMsgTextWhite: {
                        color: t.colors.white,
                        textAlign: "center",
                        marginBottom: t.spaces.medium
                    },
                    errorMsgTextGray: {
                        color: t.colors.deepGray,
                        textAlign: "center",
                        marginBottom: t.spaces.medium
                    },
                    playErrorIcon: {
                        fill: t.colors.deepGray,
                        height: t.spaces.xxLarge,
                        width: t.spaces.xxLarge,
                        marginHorizontal: "auto",
                        paddingBottom: t.spaces.medium,
                        textAlignVertical: "middle"
                    }
                }
            }))
        },
        "ZeN/": function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return n
            })), i.d(e, "b", (function() {
                return a
            })), i.d(e, "c", (function() {
                return r
            }));
            var n = {
                    LOW: 32e4,
                    MEDIUM: 832e3,
                    HIGH: 2176e3
                },
                a = {
                    EVENT: "event",
                    VISIT: "url",
                    WATCH: "watch",
                    IMAGE: "image"
                },
                r = ["cover", "contain"]
        },
        Zl35: function(t, e, i) {
            "use strict";
            var n = i("97Jx"),
                a = i.n(n),
                r = (i("PN9k"), i("LdEA")),
                o = i.n(r),
                s = i("1Pcy"),
                c = i.n(s),
                l = i("W/Kd"),
                u = i.n(l),
                d = i("KEM+"),
                _ = i.n(d),
                h = i("ERkP"),
                p = i("9Xij"),
                E = i("mN6z");

            function v(t) {
                if (!t || "object" != typeof t) return t;
                var e = JSON.parse(JSON.stringify(t));
                return delete e.dataUsageBytes, e.tracks = e.tracks.map((function(t) {
                    return "number" == typeof t.currentTimeMs && delete t.currentTimeMs, t
                })), e
            }
            var y = i("Yyzf"),
                f = i("7nmT"),
                m = i.n(f),
                T = i("rHpw");
            i("zpx+"), i("XjK0"), i("SCO9"), i("yKDW"), i("dtAy");

            function g(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            var P = function(t) {
                    function e() {
                        for (var e, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(n)) || this, _()(c()(e), "state", {
                            playerApi: void 0,
                            playerState: void 0,
                            guestsState: void 0
                        }), _()(c()(e), "_initializeState", (function(t) {
                            t && (e._unsubscribe && e._unsubscribe(), e.setState({
                                playerApi: t
                            }), e._unsubscribe = t.subscribe((function(t, i) {
                                return e.setState({
                                    playerState: t,
                                    guestsState: i
                                })
                            })))
                        })), e
                    }
                    u()(e, t);
                    var i = e.prototype;
                    return i.componentDidMount = function() {
                        this._initializeState(this.props.playerApi)
                    }, i.componentDidUpdate = function(t) {
                        var e = this.props.playerApi;
                        e !== t.playerApi && this._initializeState(e)
                    }, i.render = function() {
                        return this.props.children(this.state)
                    }, e
                }(h.Component),
                b = function(t) {
                    function e() {
                        for (var e, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(n)) || this, _()(c()(e), "state", {
                            players: {}
                        }), _()(c()(e), "_mounted", !1), _()(c()(e), "_registerPlayer", (function(t, i) {
                            var n = new Promise((function(n) {
                                setTimeout((function() {
                                    e._mounted ? e.setState((function(e) {
                                        var n;
                                        return {
                                            players: Object.assign({}, e.players, (n = {}, n[t] = i, n))
                                        }
                                    }), n) : n()
                                }))
                            }));
                            return function() {
                                n.then((function() {
                                    return e._unregisterPlayer(t)
                                }))
                            }
                        })), _()(c()(e), "_unregisterPlayer", (function(t) {
                            e._mounted && e.setState((function(i) {
                                var n = e.state.players;
                                n[t];
                                return {
                                    players: o()(n, [t].map(g))
                                }
                            }))
                        })), _()(c()(e), "_registrationContext", {
                            registerPlayer: e._registerPlayer
                        }), e
                    }
                    u()(e, t);
                    var i = e.prototype;
                    return i.componentDidMount = function() {
                        this._mounted = !0
                    }, i.componentWillUnmount = function() {
                        this._mounted = !1
                    }, i.render = function() {
                        return h.createElement(e.RegistrationContext.Provider, {
                            value: this._registrationContext
                        }, h.createElement(e.ProviderContext.Provider, {
                            value: this.state
                        }, this.props.children))
                    }, e
                }(h.Component);

            function I(t) {
                var e = t.periodic,
                    i = t.children,
                    n = e ? A.PeriodicContext.Consumer : A.Context.Consumer;
                return h.createElement(n, null, (function(t) {
                    var e = t.guestsState,
                        n = t.playerApi,
                        a = t.playerState,
                        r = t.containerRef;
                    return n && r && a ? i({
                        guestsState: e,
                        playerApi: n,
                        playerState: a,
                        containerRef: r
                    }) : null
                }))
            }
            _()(b, "MetadataSubscriber", (function(t) {
                var e = t.playerId,
                    i = t.children;
                return h.createElement(b.ProviderContext.Consumer, null, (function(t) {
                    var n = t.players;
                    return h.createElement(P, {
                        playerApi: n && n[e]
                    }, i)
                }))
            })), _()(b, "RegistrationContext", h.createContext({
                registerPlayer: void 0
            })), _()(b, "ProviderContext", h.createContext({
                players: {}
            })), i.d(e, "a", (function() {
                return I
            }));
            var A = function(t) {
                function e() {
                    for (var e, i, n, a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(r)) || this, _()(c()(e), "_cache", {
                        stablePlayerState: (i = null, n = v(i), function(t) {
                            var e = v(t);
                            return Object(E.a)(n, e) || (n = e), n
                        })
                    }), _()(c()(e), "state", {
                        hasError: null,
                        guestsState: null,
                        playerApi: null,
                        playerState: null,
                        stablePlayerState: null
                    }), _()(c()(e), "_renderCustomOverlay", (function() {
                        var t = e.props.children,
                            i = e.state,
                            n = i.guestsState,
                            a = i.playerApi,
                            r = i.stablePlayerState;
                        return a && t ? "function" == typeof t ? t({
                            guestsState: n,
                            playerApi: a,
                            playerState: r,
                            containerRef: e._containerRef
                        }) : t : null
                    })), _()(c()(e), "_handleReload", (function() {
                        return e.setState((function() {
                            return {
                                hasError: null
                            }
                        }))
                    })), _()(c()(e), "_handlePlayerApi", (function(t) {
                        return function(i) {
                            var n = e.props.playerId;
                            e.setState({
                                playerApi: i
                            }), e.props.onApiReady && e.props.onApiReady(i), n && t && (e._unregister = t(n, i)), e._unsubscribe = i.subscribe((function(t, i) {
                                var n = e._cache.stablePlayerState(t);
                                e.setState({
                                    stablePlayerState: n,
                                    playerState: t,
                                    guestsState: i
                                }), e.props.onStateUpdate && e.props.onStateUpdate(t, i)
                            }))
                        }
                    })), e
                }
                u()(e, t);
                var i = e.prototype;
                return i.componentWillUnmount = function() {
                    this._unregister && this._unregister(), this._unsubscribe && this._unsubscribe()
                }, i.componentDidUpdate = function() {
                    if (!this._containerRef) {
                        var t = m.a.findDOMNode(this);
                        t && t instanceof HTMLElement && (this._containerRef = t)
                    }
                }, i.componentDidCatch = function(t, e) {
                    var i = {
                        error: t,
                        info: e
                    };
                    this.setState((function() {
                        return {
                            hasError: i
                        }
                    }))
                }, i.render = function() {
                    var t = this,
                        i = this.state,
                        n = i.guestsState,
                        r = i.playerApi,
                        s = i.playerState,
                        c = i.stablePlayerState,
                        l = this.props,
                        u = l.aspectRatio,
                        d = (l.children, l.objectFitVideo),
                        _ = (l.onApiReady, l.onStateUpdate, l.playerId, l.basePlayerClass),
                        E = l.size,
                        v = o()(l, ["aspectRatio", "children", "objectFitVideo", "onApiReady", "onStateUpdate", "playerId", "basePlayerClass", "size"]),
                        f = {
                            guestsState: n,
                            playerApi: r,
                            playerState: s,
                            containerRef: this._containerRef
                        },
                        m = Object.assign({}, f, {
                            playerState: c
                        }),
                        g = Object.assign({}, v, {
                            customOverlay: this._renderCustomOverlay(),
                            displayOptions: {
                                objectFitVideo: d
                            }
                        });
                    return h.createElement(p.a, {
                        ratio: u || T.a.theme.aspectRatios.landscape,
                        style: [V.root, V[E]]
                    }, this.state.hasError ? h.createElement(y.a, {
                        onReloadPress: this._handleReload
                    }) : h.createElement(e.Context.Provider, {
                        value: m
                    }, h.createElement(e.PeriodicContext.Provider, {
                        value: f
                    }, h.createElement(b.RegistrationContext.Consumer, null, (function(e) {
                        var i = e.registerPlayer;
                        return h.createElement(_, a()({}, g, {
                            setPlayerApi: t._handlePlayerApi(i)
                        }))
                    })))))
                }, e
            }(h.Component);
            _()(A, "Consumer", I), _()(A, "defaultProps", {
                size: "fill"
            }), _()(A, "Context", h.createContext({
                guestsState: null,
                playerApi: null,
                playerState: null,
                containerRef: null
            })), _()(A, "PeriodicContext", h.createContext({
                guestsState: null,
                playerApi: null,
                playerState: null,
                containerRef: null
            }));
            var V = T.a.create({
                root: {
                    position: "relative"
                },
                fill: {
                    width: "100%",
                    height: "100%"
                },
                small: {
                    width: 480,
                    height: 270
                },
                medium: {
                    width: 640,
                    height: 360
                },
                large: {
                    width: 800,
                    height: 450
                }
            });
            e.b = A
        },
        cboP: function(t, e) {
            t.exports = function(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
            }
        },
        jDWM: function(t, e, i) {
            var n = i("09V9"),
                a = i("ecHh"),
                r = i("rsBL"),
                o = i("u2Rj");
            t.exports = function(t, e, i, s, c) {
                n(e);
                var l = a(t),
                    u = r(l),
                    d = o(l.length),
                    _ = c ? d - 1 : 0,
                    h = c ? -1 : 1;
                if (i < 2)
                    for (;;) {
                        if (_ in u) {
                            s = u[_], _ += h;
                            break
                        }
                        if (_ += h, c ? _ < 0 : d <= _) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; c ? _ >= 0 : d > _; _ += h) _ in u && (s = e(s, u[_], _, l));
                return s
            }
        },
        mf9H: function(t, e, i) {
            "use strict";
            i("zpx+"), i("KI7T");
            var n = i("lSNA"),
                a = i.n(n),
                r = (i("KYm4"), i("jHwr")),
                o = i("+d3d");
            i.d(e, "a", (function() {
                return l
            })), i.d(e, "b", (function() {
                return u
            }));
            var s = .25,
                c = Object.freeze({
                    INITIAL: "initial",
                    AUTO_PAUSED: "autoPaused",
                    USER_PAUSED: "userPaused",
                    AUTO_PLAYING: "autoPlaying",
                    USER_PLAYING: "userPlaying",
                    FINISHED: "finished"
                }),
                l = function() {
                    function t(t) {
                        var e = this;
                        void 0 === t && (t = s), a()(this, "_players", []), a()(this, "_setPlayerState", (function(t, e) {
                            t.previousPlaybackState = t.playbackState, t.playbackState = e
                        })), a()(this, "_updatePlaybackStates", (function() {
                            var t = e._players.find((function(t) {
                                return t.playbackState === c.USER_PLAYING
                            }));
                            t && !e._canPlay(t) ? (e._pausePlayer(t), e._triggerAutoplay()) : t ? e._stopAllExcept(t) : e._triggerAutoplay()
                        })), a()(this, "_scheduleUpdate", Object(o.a)(Object(r.a)(this._updatePlaybackStates, window.requestIdleCallback ? function(t) {
                            return window.requestIdleCallback(t, {
                                timeout: 200
                            })
                        } : window.requestAnimationFrame), 300, {
                            leading: !1,
                            trailing: !0
                        })), this._minimumVisibilityForAutoplay = t
                    }
                    var e = t.prototype;
                    return e.register = function(t) {
                        var e = this,
                            i = t.canAutoplay,
                            n = t.onAutoPlayRequest,
                            a = t.onPauseRequest,
                            r = t.isLooping,
                            o = {
                                placement: void 0,
                                playbackState: c.INITIAL,
                                previousPlaybackState: c.INITIAL,
                                commandHandlers: {
                                    onAutoPlayRequest: n,
                                    onPauseRequest: a
                                },
                                canAutoplay: i,
                                isLooping: r
                            };
                        return this._players.push(o), {
                            reset: function() {
                                return e._handleReset(o)
                            },
                            signalPlacementChange: function(t) {
                                return e._handlePlacementChange(o, t)
                            },
                            signalPlay: function() {
                                return e._handlePlay(o)
                            },
                            signalPause: function() {
                                return e._handlePause(o)
                            },
                            signalPlaybackFinish: function() {
                                return e._handlePlaybackFinished(o)
                            },
                            unregister: function() {
                                return e._handleUnregister(o)
                            }
                        }
                    }, e._handlePlacementChange = function(t, e) {
                        t.placement = e, t.playbackState === c.FINISHED && 0 === e.visibleFraction() && this._setPlayerState(t, c.INITIAL), this._scheduleUpdate()
                    }, e._handlePlay = function(t) {
                        t.playbackState !== c.AUTO_PLAYING && (t.previousPlaybackState === c.AUTO_PLAYING && t.isLooping ? this._setPlayerState(t, c.AUTO_PLAYING) : this._setPlayerState(t, c.USER_PLAYING)), this._stopAllExcept(t)
                    }, e._handlePause = function(t) {
                        t.playbackState !== c.AUTO_PAUSED && this._setPlayerState(t, c.USER_PAUSED)
                    }, e._handlePlaybackFinished = function(t) {
                        this._setPlayerState(t, c.FINISHED)
                    }, e._handleReset = function(t) {
                        this._setPlayerState(t, c.INITIAL), this._scheduleUpdate()
                    }, e._handleUnregister = function(t) {
                        var e = this._players.indexOf(t);
                        e >= 0 && this._players.splice(e, 1), this._scheduleUpdate()
                    }, e._triggerAutoplay = function() {
                        var t = this,
                            e = function(t, e) {
                                if (0 !== t.length) {
                                    for (var i = t[0], n = e(i), a = 1; a < t.length; a++) {
                                        var r = t[a],
                                            o = e(r);
                                        o < n && (i = r, n = o)
                                    }
                                    return i
                                }
                            }(this._players.filter((function(e) {
                                return t._canAutoPlay(e)
                            })), (function(t) {
                                return t.placement ? t.placement.distanceToCenter() : Number.MAX_VALUE
                            }));
                        e ? (this._stopAllExcept(e), this._autoPlayVideo(e)) : this._players.forEach((function(e) {
                            e.playbackState === c.AUTO_PLAYING && t._pausePlayer(e)
                        }))
                    }, e._canAutoPlay = function(t) {
                        var e = !!t.placement && t.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                            i = t.playbackState === c.USER_PAUSED,
                            n = t.playbackState === c.FINISHED;
                        return t.canAutoplay && e && !i && !n
                    }, e._canPlay = function(t) {
                        var e = !!t.placement && t.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                            i = !!t.placement && t.placement.visibleFraction() > 0;
                        return !t.placement || i || e
                    }, e._stopAllExcept = function(t) {
                        var e = this;
                        this._players.forEach((function(i) {
                            i === t || i.playbackState !== c.USER_PLAYING && i.playbackState !== c.AUTO_PLAYING || e._pausePlayer(i)
                        }))
                    }, e._pausePlayer = function(t) {
                        var e = t.commandHandlers.onPauseRequest;
                        this._setPlayerState(t, c.AUTO_PAUSED), e()
                    }, e._autoPlayVideo = function(t) {
                        var e = t.commandHandlers.onAutoPlayRequest;
                        this._setPlayerState(t, c.AUTO_PLAYING), e()
                    }, t
                }(),
                u = new l
        },
        qL0z: function(t, e, i) {
            var n = i("+nzf"),
                a = i("42G/");
            t.exports = function(t, e, i) {
                var r = e && i || 0;
                "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
                var o = (t = t || {}).random || (t.rng || n)();
                if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e)
                    for (var s = 0; s < 16; ++s) e[r + s] = o[s];
                return e || a(o)
            }
        },
        r0id: function(t, e, i) {
            "use strict";
            var n = i("7zcn"),
                a = i("QY3j")(0),
                r = i("TLBd")([].forEach, !0);
            n(n.P + n.F * !r, "Array", {
                forEach: function(t) {
                    return a(this, t, arguments[1])
                }
            })
        },
        rQdd: function(t, e, i) {
            var n = i("I3FG"),
                a = i("xA4I"),
                r = i("HUVu");
            t.exports = function(t) {
                return n(t) || a(t) || r()
            }
        },
        svPC: function(t, e, i) {
            "use strict";
            e.__esModule = !0, e.default = void 0, i("PN9k");
            var n = o(i("7DT3")),
                a = o(i("ERkP")),
                r = o(i("OkZJ"));

            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var s = function(t) {
                return void 0 === t && (t = {}), (0, n.default)("svg", Object.assign({}, t, {
                    style: [r.default.root, t.style],
                    viewBox: "0 0 24 24"
                }), a.default.createElement("g", null, a.default.createElement("path", {
                    d: "M15.644 11.58L10.43 8.26c-.155-.1-.35-.105-.51-.018-.16.088-.26.256-.26.438v6.64c0 .183.1.35.26.438.074.04.157.062.24.062.093 0 .187-.026.27-.078l5.214-3.32c.144-.09.23-.25.23-.42s-.086-.332-.23-.423zM2.5 22.25c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06l5.25-5.25c.293-.294.768-.294 1.06 0s.294.767 0 1.06l-5.25 5.25c-.146.147-.338.22-.53.22zM15.208 9.542c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06L20.97 1.97c.293-.293.768-.293 1.06 0s.294.768 0 1.06l-6.29 6.293c-.148.146-.34.22-.532.22z"
                }), a.default.createElement("path", {
                    d: "M3.815 17.062c-.27 0-.53-.146-.664-.4C2.4 15.236 2 13.623 2 12 2 6.486 6.486 2 12 2c1.592 0 3.176.384 4.582 1.11.368.188.512.64.322 1.01-.19.368-.643.515-1.01.32-1.21-.624-2.52-.94-3.894-.94-4.687 0-8.5 3.813-8.5 8.5 0 1.38.338 2.75.978 3.96.193.367.053.82-.313 1.015-.112.06-.232.087-.35.087zM12 22c-1.59 0-3.175-.384-4.58-1.11-.37-.188-.513-.64-.323-1.01.19-.366.644-.514 1.01-.32 1.21.624 2.52.94 3.893.94 4.687 0 8.5-3.813 8.5-8.5 0-1.364-.33-2.72-.957-3.922-.19-.367-.05-.82.318-1.012.37-.19.82-.05 1.013.318C21.61 8.8 22 10.396 22 12c0 5.514-4.486 10-10 10z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var c = s;
            e.default = c
        },
        xA4I: function(t, e) {
            t.exports = function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/ondemand.InlinePlayer.5a4c0144.js.map