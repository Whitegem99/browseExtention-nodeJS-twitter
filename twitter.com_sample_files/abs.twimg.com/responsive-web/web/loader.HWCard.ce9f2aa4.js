(window.webpackJsonp = window.webpackJsonp || []).push([
    [177], {
        TzCa: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return o
            }));
            var n = a("ERkP"),
                r = a("zb92"),
                i = Object(r.a)({
                    loader: function() {
                        return a.e(180).then(a.bind(null, "tpds"))
                    },
                    renderPlaceholder: function() {
                        return null
                    }
                });

            function o(e) {
                return n.createElement(i, {
                    player: e
                })
            }
        },
        W5XZ: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return o
            }));
            var n, r = a("k49u"),
                i = a("fs1G"),
                o = ((n = {})[r.a.OtherUserSuspended] = {
                    customAction: i.a
                }, n[r.a.StatusViewForbidden] = {
                    customAction: i.a
                }, n)
        },
        "aX4+": function(e, t, a) {
            "use strict";
            a.r(t);
            var n, r = a("8OQS"),
                i = a.n(r),
                o = a("pVnL"),
                s = a.n(o),
                l = (a("PN9k"), a("yIC7"), a("PJYZ")),
                d = a.n(l),
                c = a("VbXa"),
                _ = a.n(c),
                u = a("lSNA"),
                p = a.n(u),
                m = a("ERkP"),
                I = (a("KYm4"), a("KI7T"), a("97Jx")),
                g = a.n(I),
                T = a("1Pcy"),
                E = a.n(T),
                v = a("W/Kd"),
                y = a.n(v),
                b = a("KEM+"),
                h = a.n(b),
                f = a("TIdA"),
                A = a("A91F"),
                S = {
                    composeDirectMessage: function(e) {
                        e.recipient, e.welcomeMessageId, e.messageText
                    },
                    composeTweet: function(e, t, a) {},
                    getCtaString: function(e) {
                        switch (e) {
                            case "play":
                                return "Play";
                            case "shop":
                                return "Shop";
                            case "book":
                                return "Book";
                            case "connect":
                                return "Connect";
                            case "order":
                                return "Order";
                            case "open":
                                return "Open";
                            case "install":
                            default:
                                return "Install"
                        }
                    },
                    getFetchIntervalSeconds: function() {
                        return 30
                    },
                    getMessageMeString: function(e) {
                        switch (e) {
                            case "message_me_card_cta_1":
                                return "Message us";
                            case "message_me_card_cta_3":
                                return "Send us a private message";
                            case "message_me_card_cta_4":
                                return "Send me a private message";
                            case "message_me_card_cta_2":
                            default:
                                return "Send a private message"
                        }
                    },
                    getMobileOS: function() {
                        return "android"
                    },
                    getBroadcastLink: function(e) {
                        return "https://twitter.com/i/broadcasts/" + e
                    },
                    getEventLink: function(e) {
                        return "https://twitter.com/i/events/" + e
                    },
                    getMomentLink: function(e) {
                        return "https://twitter.com/i/moments/" + e
                    },
                    renderImage: function(e, t, a, n, r) {
                        var i = e.uri,
                            o = e.width,
                            s = e.height;
                        return m.createElement(f.a, {
                            accessibilityLabel: "",
                            aspectMode: A.a.exact(t || 1),
                            cropCandidates: r,
                            image: {
                                url: i,
                                width: o || 1e3,
                                height: s || 1e3
                            }
                        })
                    },
                    renderTwemojiText: function(e) {
                        return e
                    },
                    renderNumVotesLabel: function(e) {
                        return e.toLocaleString() + " vote" + (1 === e ? "" : "s")
                    },
                    renderFinalResultsLabel: function() {
                        return "Final results"
                    },
                    renderRatingsLabel: function(e) {
                        return e.appStarRating + "/5.0 stars – " + e.appNumRatings + " ratings"
                    },
                    renderStartingTimeLabel: function(e) {
                        return "Starting " + new Date(parseInt(e, 10)).toLocaleString("default", {
                            day: "2-digit",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    },
                    renderTimeLeftLabel: function(e) {
                        return "Ends at " + new Date(e).toLocaleString()
                    },
                    renderTweetActionLabel: function(e) {
                        return "Tweet " + e
                    },
                    renderVoteLabel: function() {
                        return "Vote"
                    },
                    shouldLimitTextToSingleLine: function() {
                        return !1
                    },
                    storeCardState: function(e, t) {}
                },
                O = {
                    init: function(e) {
                        for (var t in e) S[t] = e[t]
                    },
                    setRenderImage: function(e) {
                        S.renderImage = e
                    },
                    setRenderTwemojiText: function(e) {
                        S.renderTwemojiText = e
                    },
                    setRenderNumVotesLabel: function(e) {
                        S.renderNumVotesLabel = e
                    },
                    setRenderFinalResultsLabel: function(e) {
                        S.renderFinalResultsLabel = e
                    },
                    setRenderTimeLeftLabel: function(e) {
                        S.renderTimeLeftLabel = e
                    },
                    setRenderTweetActionLabel: function(e) {
                        S.renderTweetActionLabel = e
                    },
                    setRenderRatingsLabel: function(e) {
                        S.renderRatingsLabel = e
                    },
                    setRenderVoteLabel: function(e) {
                        S.renderVoteLabel = e
                    }
                },
                C = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    y()(t, e);
                    var a = t.prototype;
                    return a.render = function() {
                        return null
                    }, a.componentDidMount = function() {
                        this._startTimer()
                    }, a.componentWillUnmount = function() {
                        this._stopTimer()
                    }, a._startTimer = function() {
                        var e = this.props.requestCardUpdate,
                            t = S.getFetchIntervalSeconds();
                        this._timer = setInterval(e, 1e3 * t)
                    }, a._stopTimer = function() {
                        clearInterval(this._timer)
                    }, t
                }(m.Component),
                D = (a("cI1W"), a("9Xij")),
                N = (a("0rpg"), a("/yvb")),
                w = {
                    AMPLIFY: "amplify",
                    APP: "app",
                    APPPLAYER: "appplayer",
                    AUDIO: "audio",
                    BROADCAST: "745291183405076480:broadcast",
                    DIRECT_STORE_LINK_APP: "direct_store_link_app",
                    IMAGE_DIRECT_MESSAGE: "2586390716:image_direct_message",
                    LIVE_EVENT: "745291183405076480:live_event",
                    MESSAGE_ME: "2586390716:message_me",
                    MOMENT: "3260518932:moment",
                    PERISCOPE_BROADCAST: "3691233323:periscope_broadcast",
                    PLAYER: "player",
                    POLL_2_CHOICE_TEXT: "poll2choice_text_only",
                    POLL_3_CHOICE_TEXT: "poll3choice_text_only",
                    POLL_4_CHOICE_TEXT: "poll4choice_text_only",
                    POLL_2_CHOICE_IMAGE: "poll2choice_image",
                    POLL_3_CHOICE_IMAGE: "poll3choice_image",
                    POLL_4_CHOICE_IMAGE: "poll4choice_image",
                    POLL_2_CHOICE_VIDEO: "poll2choice_video",
                    POLL_3_CHOICE_VIDEO: "poll3choice_video",
                    POLL_4_CHOICE_VIDEO: "poll4choice_video",
                    PROMO_IMAGE_APP: "promo_image_app",
                    PROMO_IMAGE_CONVO: "promo_image_convo",
                    PROMO_VIDEO_CONVO: "promo_video_convo",
                    PROMO_VIDEO_WEBSITE: "2586390716:promo_video_website",
                    PROMO_WEBSITE: "promo_website",
                    SUMMARY: "summary",
                    SUMMARY_LARGE_IMAGE: "summary_large_image",
                    UNIFIED_CARD: "unified_card",
                    VIDEO_DIRECT_MESSAGE: "2586390716:video_direct_message"
                },
                M = {
                    BUTTON_GROUP: "button_group",
                    BUTTON_GROUP_STATIC: "button_group_static",
                    DESTINATION: "destination_default",
                    DESTINATION_SECONDARY: "destination_secondary",
                    DESTINATION_STATIC: "destination_static",
                    DETAILS: "details_default",
                    DETAILS_SECONDARY: "details_secondary",
                    DETAILS_STATIC: "details_static",
                    MEDIA: "media_default",
                    MEDIA_SECONDARY: "media_secondary",
                    MEDIA_STATIC: "media_static",
                    IMAGE_ENTITY: "image_entity_default",
                    IMAGE_ENTITY_SECONDARY: "image_entity_secondary",
                    IMAGE_ENTITY_STATIC: "image_entity_static",
                    VIDEO_ENTITY: "video_entity_default",
                    VIDEO_ENTITY_SECONDARY: "video_entity_secondary",
                    IFRAME_ENTITY: "iframe_entity",
                    POLL: "poll",
                    POLL_STATIC: "poll_static",
                    SWIPEABLE_MEDIA_STATIC: "swipeable_media_static"
                },
                R = "default",
                L = "secondary",
                P = "static",
                x = "data_saver",
                k = {
                    LABEL: "label",
                    MOMENTS: "moments",
                    PLAY: "play"
                },
                B = {
                    ACTION: "action",
                    BROADCAST: "broadcast",
                    BROWSER: "browser",
                    BROWSER_WITH_DOCKED_MEDIA: "browser_with_docked_media",
                    BROWSER_WITH_MEDIA: "browser_with_media",
                    EVENT: "event",
                    MOMENT: "moment"
                },
                Y = "media",
                G = "details",
                j = "button_group",
                U = "swipeable_media",
                W = "twitter_list_details",
                z = function(e) {
                    function t() {
                        for (var t, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(n)) || this, h()(E()(t), "_scribeAndLogAction", (function(e, a, n) {
                            var r = t.props.scribeCardAction,
                                i = n && void 0 !== n.index ? n.index : void 0,
                                o = e.type === B.ACTION && e.data.auth_required;
                            r && r({
                                action: e.data.scribe,
                                componentType: a,
                                ctaIndex: i,
                                isAuthRequired: o
                            }), t._logPromotedCardAction({
                                action: e.data.promoted_log,
                                componentType: a,
                                ctaIndex: i,
                                isAuthRequired: o
                            })
                        })), h()(E()(t), "_voteForChoice", (function(e) {
                            var a = t.props,
                                n = a.card,
                                r = a.onPollVote;
                            r && n && r({
                                cardId: n.id,
                                choice: e
                            })
                        })), h()(E()(t), "_toggleEventReminder", (function(e) {
                            var a = t.props,
                                n = a.card,
                                r = a.onEventReminderClick;
                            if (e.eventId && e.notificationId) {
                                var i = e.eventId,
                                    o = e.isSelected,
                                    s = void 0 !== o && o,
                                    l = e.notificationId;
                                r && n && r({
                                    cardId: n.id,
                                    eventId: i,
                                    notificationId: l,
                                    remindMe: !s
                                })
                            }
                        })), h()(E()(t), "_updateCardStateAndPersistIfNeeded", (function(e, a, n) {
                            var r = t.props.updateCardState;
                            n && (r && r(n), a && S.storeCardState(e, n))
                        })), h()(E()(t), "_logPromotedCardAction", (function(e) {
                            var a = e.action,
                                n = e.componentType,
                                r = e.ctaIndex,
                                i = e.isAuthRequired,
                                o = t.props,
                                s = o.card,
                                l = o.onPromotedLogEvent;
                            s && l && l(Object.assign({
                                action: a,
                                componentType: n
                            }, "number" == typeof r ? {
                                buttonIndex: r
                            } : null, {
                                isAuthRequired: i
                            }))
                        })), t
                    }
                    return y()(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            a = t.card,
                            n = t.children,
                            r = t.destinationKey,
                            i = t.buttonData,
                            o = t.componentType,
                            s = t.media,
                            l = t.promotedContent;
                        if (!a || !r) return n({});
                        var d = a.destinations[r];
                        if (!d) return n({});
                        switch (d.type) {
                            case B.BROWSER:
                            case B.BROWSER_WITH_DOCKED_MEDIA:
                            case B.BROWSER_WITH_MEDIA:
                                return n({
                                    link: d.data.url_data.url,
                                    onClick: function() {
                                        return e._scribeAndLogAction(d, o, i)
                                    }
                                });
                            case B.MOMENT:
                                return n({
                                    link: S.getMomentLink(d.data.moment_data.moment),
                                    onClick: function() {
                                        return e._scribeAndLogAction(d, o, i)
                                    }
                                });
                            case B.EVENT:
                                return n({
                                    link: {
                                        pathname: S.getEventLink(d.data.event_data.id),
                                        state: {
                                            promotedCardState: {
                                                media: s,
                                                promotedContent: l
                                            }
                                        }
                                    },
                                    onClick: function() {
                                        return e._scribeAndLogAction(d, o, i)
                                    }
                                });
                            case B.BROADCAST:
                                return n({
                                    link: S.getBroadcastLink(d.data.broadcast_data.id),
                                    onClick: function() {
                                        return e._scribeAndLogAction(d, o, i)
                                    }
                                });
                            case B.ACTION:
                                var c = d.data.action_data,
                                    _ = c.next_state,
                                    u = c.persist;
                                return n({
                                    onClick: function(t) {
                                        switch (e._scribeAndLogAction(d, o, i), c.type) {
                                            case "compose":
                                                i && S.composeTweet(a.id, i.tweet || void 0, _);
                                                break;
                                            case "dm":
                                                c.recipient && S.composeDirectMessage(Object.assign({
                                                    recipient: c.recipient
                                                }, i && i.wm_id ? {
                                                    welcomeMessageId: i.wm_id
                                                } : null, {}, i && i.composer_text ? {
                                                    messageText: i.composer_text
                                                } : null));
                                                break;
                                            case "vote":
                                                i && e._voteForChoice(i.index);
                                                break;
                                            case "reminder":
                                                i && e._toggleEventReminder(i);
                                                break;
                                            default:
                                                e._updateCardStateAndPersistIfNeeded(a.id, u, _), t.stopPropagation()
                                        }
                                    }
                                });
                            default:
                                return n({})
                        }
                    }, t
                }(m.Component),
                V = (n = z, function(e) {
                    return m.createElement(Na.Context.Consumer, null, (function(t) {
                        return m.createElement(n, g()({}, e, t))
                    }))
                }),
                F = a("Uwiv"),
                H = a.n(F),
                q = a("SvUW"),
                K = a.n(q),
                X = a("rHpw"),
                J = a("3xO4"),
                Z = a.n(J),
                Q = function(e) {
                    function t() {
                        for (var t, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(n)) || this, h()(E()(t), "_renderButton", (function(e, a) {
                            var n = t.props.buttonSize,
                                r = t._getButtonIcon(e.icon) || void 0,
                                i = a > 0;
                            return m.createElement(V, {
                                buttonData: e,
                                componentType: "button_group",
                                destinationKey: e.destination,
                                key: e.cta
                            }, (function(t) {
                                var a = t.link,
                                    o = t.onClick;
                                return m.createElement(N.a, {
                                    icon: r,
                                    key: e.cta,
                                    link: a,
                                    onClick: o,
                                    size: n,
                                    style: [$.button, i && $.buttonTopMargin],
                                    type: e.isSelected ? "primary" : "secondary"
                                }, e.cta)
                            }))
                        })), t
                    }
                    y()(t, e);
                    var a = t.prototype;
                    return a.render = function() {
                        var e = this.props,
                            t = e.chromeless,
                            a = e.buttons;
                        return m.createElement(Z.a, {
                            style: !t && $.wrapperPadding
                        }, a.map(this._renderButton))
                    }, a._getButtonIcon = function(e) {
                        switch (e) {
                            case "dm":
                                return m.createElement(K.a, null);
                            case "link":
                                return m.createElement(H.a, null);
                            default:
                                return null
                        }
                    }, t
                }(m.Component);
            h()(Q, "displayName", "@twitter/CardButtons");
            var $ = X.a.create((function(e) {
                    return {
                        wrapperPadding: {
                            padding: e.spaces.xSmall
                        },
                        button: {
                            flexGrow: 1
                        },
                        buttonTopMargin: {
                            marginTop: e.spaces.xxSmall
                        }
                    }
                })),
                ee = Q,
                te = a("n4Eu"),
                ae = function(e) {
                    var t = e.ext_media_color && e.ext_media_color.palette,
                        a = t && te.a.get(t);
                    return a ? "rgb(" + a.rgb.red + ", " + a.rgb.green + ", " + a.rgb.blue + ")" : void 0
                },
                ne = a("1E7s"),
                re = a.n(ne),
                ie = a("kc0B"),
                oe = a.n(ie),
                se = a("a6qo"),
                le = a("mXq/"),
                de = a("8t7K"),
                ce = (a("aWzz"), function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    y()(t, e);
                    var a = t.prototype;
                    return a.render = function() {
                        var e = this.props,
                            t = e.destination,
                            a = e.locationKey,
                            n = e.mediaEntity,
                            r = e.ratio,
                            i = e.renderPlaceholder,
                            o = e.style,
                            s = n || {},
                            l = s.media_url_https,
                            d = s.original_info,
                            c = (d = void 0 === d ? {} : d).width,
                            _ = d.height,
                            u = s.cropCandidates,
                            p = n && ae(n),
                            I = m.createElement(m.Fragment, null, m.createElement(Na.Context.Consumer, null, (function(e) {
                                var t = e.isDataSaverEnabled,
                                    n = e.isPromoted,
                                    i = t ? n ? "suboptimal" : "preview" : void 0;
                                return S.renderImage({
                                    uri: l,
                                    width: c,
                                    height: _
                                }, r, i, a, u)
                            })), this._renderOverlay()),
                            g = m.createElement(D.a, {
                                ratio: r || 1
                            }, m.createElement(Z.a, {
                                style: [_e.image, _e.mediaMissingIconContainer]
                            }, m.createElement(oe.a, {
                                style: _e.newsIcon
                            }))),
                            T = l && !i,
                            E = [o, _e.root, {
                                backgroundColor: p
                            }],
                            v = [_e.root, _e.mediaMissing],
                            y = T ? E : v,
                            b = T ? I : g;
                        return m.createElement(V, {
                            componentType: "image",
                            destinationKey: t
                        }, (function(e) {
                            var t = e.link,
                                a = e.onClick;
                            return m.createElement(de.a, {
                                link: t,
                                onClick: a,
                                style: y
                            }, b)
                        }))
                    }, a._renderOverlay = function() {
                        var e = this.props,
                            t = e.overlay,
                            a = e.playOverlaySize;
                        if (!t) return null;
                        switch (t.type) {
                            case k.MOMENTS:
                                return m.createElement(se.a, {
                                    align: "left",
                                    square: !0
                                }, m.createElement(re.a, null));
                            case k.PLAY:
                                return m.createElement(Z.a, {
                                    style: _e.playOverlay
                                }, m.createElement(le.a, {
                                    size: a
                                }));
                            case k.LABEL:
                                return m.createElement(se.a, {
                                    align: "left"
                                }, t.text);
                            default:
                                return null
                        }
                    }, t
                }(m.Component));
            h()(ce, "defaultProps", {
                playOverlaySize: "small"
            }), ce.propTypes = {};
            var _e = X.a.create((function(e) {
                    return {
                        root: {
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        },
                        image: {
                            width: "100%",
                            height: "100%"
                        },
                        playOverlay: {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        momentsIcon: {
                            height: e.spaces.small,
                            color: e.colors.white
                        },
                        mediaMissing: {
                            backgroundColor: e.colors.faintGray
                        },
                        mediaMissingIconContainer: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        newsIcon: {
                            color: e.colors.deepGray,
                            height: "2em"
                        }
                    }
                })),
                ue = ce,
                pe = a("uavX"),
                me = function(e) {
                    function t() {
                        for (var t, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(n)) || this, h()(E()(t), "state", {
                            currentSlide: 0,
                            loadedSlide: 0
                        }), h()(E()(t), "_renderPhotoType", (function(e, a, n, r) {
                            if ("photo" !== a.type) return null;
                            var i = a.original_info,
                                o = i.width,
                                s = i.height;
                            return m.createElement(ue, {
                                destination: r,
                                key: e,
                                mediaEntity: a,
                                overlay: n,
                                playOverlaySize: t.props.playOverlaySize,
                                ratio: a ? Math.max(o / s, 1) : void 0,
                                style: [Ie.image, 0 === e && Ie.firstImage, e === t.props.swipeableMedia.length - 1 && Ie.lastImage]
                            })
                        })), h()(E()(t), "_renderVideoType", (function(e, a, n) {
                            var r = e.media_entity;
                            if ("uc_video" !== r.type) return null;
                            var i = t.props,
                                o = i.renderVideoPlayer,
                                s = i.swipeableMedia;
                            if (t.state.loadedSlide === a && o) return m.createElement(Na.Context.Consumer, {
                                key: a
                            }, (function(e) {
                                var t = e.isDataSaverEnabled,
                                    i = e.isPromoted,
                                    l = t ? i ? "suboptimal" : "preview" : void 0;
                                return m.createElement(Z.a, {
                                    style: [Ie.video, 0 === a && Ie.firstImage, a === s.length - 1 && Ie.lastImage]
                                }, o(r, l, n))
                            }));
                            var l = {
                                media_url_https: r.media_url_https,
                                type: "photo",
                                original_info: r.original_info
                            };
                            return t._renderPhotoType(a, l, {
                                type: k.PLAY
                            })
                        })), h()(E()(t), "_handleChange", (function(e) {
                            t.setState({
                                currentSlide: e
                            })
                        })), h()(E()(t), "_handleOnRest", (function() {
                            t.setState({
                                loadedSlide: t.state.currentSlide
                            })
                        })), t
                    }
                    return y()(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.swipeableMedia,
                            a = t[0].media_entity;
                        if ("photo" !== a.type && "uc_video" !== a.type) return null;
                        var n = a.original_info,
                            r = n.width / n.height;
                        return m.createElement(D.a, {
                            ratio: r,
                            style: Ie.aspectRatio
                        }, m.createElement(Z.a, {
                            style: [Ie.root]
                        }, m.createElement(pe.a, {
                            cellSpacing: 5,
                            currentSlide: this.state.currentSlide,
                            onChange: this._handleChange,
                            onRest: this._handleOnRest,
                            showNavButtonsOnHover: !0
                        }, t.map((function(t, a) {
                            var n = t.media_entity,
                                i = t.destination;
                            return "photo" === n.type ? e._renderPhotoType(a, n, t.overlay, i) : "uc_video" === n.type ? e._renderVideoType(t, a, r) : void 0
                        })))))
                    }, t
                }(m.Component),
                Ie = X.a.create((function(e) {
                    return {
                        root: {
                            height: "100%"
                        },
                        aspectRatio: {
                            overflow: "visible"
                        },
                        image: {
                            borderColor: e.colors.nestedBorderColor,
                            borderStyle: "solid",
                            borderWidth: e.borderWidths.small
                        },
                        video: {
                            overflow: "hidden",
                            maxHeight: "100%"
                        },
                        firstImage: {
                            borderTopLeftRadius: e.borderRadii.large
                        },
                        lastImage: {
                            borderTopRightRadius: e.borderRadii.large
                        }
                    }
                })),
                ge = me,
                Te = a("t62R"),
                Ee = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return y()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.weight,
                            a = e.children,
                            n = e.dir,
                            r = e.numberOfLines,
                            i = e.type;
                        return m.createElement(Te.b, {
                            color: "vanity" === i || "description" === i ? "deepGray" : "normal",
                            dir: n,
                            numberOfLines: r,
                            weight: t
                        }, "vanity" === i ? m.createElement(Te.b, {
                            size: "small",
                            style: ve.icon
                        }, m.createElement(H.a, null)) : null, S.renderTwemojiText(a))
                    }, t
                }(m.Component);
            h()(Ee, "displayName", "@twitter/CardText"), h()(Ee, "defaultProps", {
                dir: "auto"
            }), Ee.propTypes = {};
            var ve = X.a.create((function(e) {
                    return {
                        icon: {
                            marginRight: e.spaces.micro
                        }
                    }
                })),
                ye = Ee,
                be = a("jV+4"),
                he = function(e) {
                    function t() {
                        for (var t, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(n)) || this, h()(E()(t), "_hasText", (function() {
                            var e = t.props,
                                a = e.attribution,
                                n = e.category,
                                r = e.title,
                                i = e.description,
                                o = e.vanity;
                            return !!(a || r || i || o || n)
                        })), t
                    }
                    y()(t, e);
                    var a = t.prototype;
                    return a.render = function() {
                        var e = this,
                            t = this.props.destination;
                        return m.createElement(V, {
                            componentType: "details",
                            destinationKey: t
                        }, (function(t) {
                            var a = t.link,
                                n = t.onClick;
                            return m.createElement(de.a, {
                                link: a,
                                onClick: n,
                                style: Ae.detailItemsWrapper
                            }, e._renderContent(), e._renderExtraContent())
                        }))
                    }, a._renderExtraContent = function() {
                        var e = this.props.extraContent;
                        return e ? m.createElement(Z.a, {
                            style: Ae.extraContentWrapper
                        }, e) : null
                    }, a._renderContent = function() {
                        var e = this.props,
                            t = e.attribution,
                            a = e.category,
                            n = e.chromeless,
                            r = e.destination,
                            i = e.footer,
                            o = e.title,
                            s = e.titleMaxLines,
                            l = e.description,
                            d = e.descriptionMaxLines,
                            c = e.vanity,
                            _ = e.withBottomPadding,
                            u = !r;
                        return m.createElement(Z.a, {
                            style: [Ae.textContentWrapper, n ? null : [Ae.wrapperPadding, _ && Ae.bottomPadding]]
                        }, t ? m.createElement(be.a, {
                            isProtected: t.protected,
                            isVerified: t.verified,
                            name: t.name,
                            profileImageUrl: t.profile_image_url_https,
                            screenName: t.screen_name,
                            style: [Ae.attributionWrapper, this._hasText() && Ae.spaceBelow],
                            withLink: u
                        }) : null, a ? m.createElement(Z.a, {
                            style: [o || l || c || i ? Ae.spaceBelow : null]
                        }, m.createElement(ye, {
                            dir: fe(a.is_rtl),
                            numberOfLines: 1,
                            type: "description"
                        }, a.content)) : null, o ? m.createElement(Z.a, {
                            style: [l || c || i ? Ae.spaceBelow : null]
                        }, m.createElement(ye, {
                            dir: fe(o.is_rtl),
                            numberOfLines: S.shouldLimitTextToSingleLine() ? 1 : s,
                            type: "title"
                        }, o.content)) : null, l ? m.createElement(Z.a, {
                            style: [c || i ? Ae.spaceBelow : null]
                        }, m.createElement(ye, {
                            dir: fe(l.is_rtl),
                            numberOfLines: S.shouldLimitTextToSingleLine() ? 1 : d,
                            type: "description"
                        }, l.content)) : null, i ? m.createElement(Z.a, {
                            style: [c ? Ae.spaceBelow : null]
                        }, m.createElement(ye, {
                            dir: "auto",
                            numberOfLines: 1,
                            type: "description"
                        }, i)) : null, c ? m.createElement(Z.a, null, m.createElement(ye, {
                            dir: "auto",
                            numberOfLines: 1,
                            type: "vanity"
                        }, c)) : null)
                    }, t
                }(m.Component);
            h()(he, "displayName", "@twitter/CardDetail");
            var fe = function(e) {
                    switch (e) {
                        case !0:
                            return "rtl";
                        case !1:
                            return "ltr";
                        default:
                            return "auto"
                    }
                },
                Ae = X.a.create((function(e) {
                    return {
                        attributionWrapper: {
                            alignItems: "flex-start"
                        },
                        detailItemsWrapper: {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            flexGrow: 1
                        },
                        extraContentWrapper: {
                            flexShrink: 0,
                            padding: e.spaces.xSmall
                        },
                        textContentWrapper: {
                            flexGrow: 1,
                            flexShrink: 1,
                            justifyContent: "center"
                        },
                        wrapperPadding: {
                            paddingTop: e.spaces.xSmall,
                            paddingHorizontal: e.spaces.xSmall
                        },
                        bottomPadding: {
                            paddingBottom: e.spaces.xSmall
                        },
                        spaceBelow: {
                            marginBottom: e.spaces.micro
                        }
                    }
                })),
                Se = he,
                Oe = a("UZ11"),
                Ce = a.n(Oe),
                De = a("21zW"),
                Ne = a("3XMw"),
                we = a.n(Ne),
                Me = we.a.d58baa7e,
                Re = we.a.g37da5a4,
                Le = function(e) {
                    switch (e) {
                        case !0:
                            return "rtl";
                        case !1:
                            return "ltr";
                        default:
                            return "auto"
                    }
                },
                Pe = X.a.create((function(e) {
                    return {
                        contentWrapper: {
                            flexGrow: 1,
                            flexShrink: 1,
                            justifyContent: "center"
                        },
                        attributionWrapper: {
                            alignItems: "flex-start"
                        },
                        detailItemsWrapper: {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            flexGrow: 1
                        },
                        wrapperPadding: {
                            paddingTop: e.spaces.xxSmall,
                            paddingHorizontal: e.spaces.xSmall
                        },
                        bottomPadding: {
                            paddingBottom: e.spaces.xSmall
                        },
                        spaceBelow: {
                            marginBottom: e.spaces.xxSmall
                        },
                        icon: {
                            marginRight: e.spaces.micro
                        },
                        innerRow: {
                            flexDirection: "row",
                            flexShrink: 1
                        }
                    }
                })),
                xe = function(e) {
                    var t = e.attribution,
                        a = e.destination,
                        n = e.title,
                        r = e.memberCount,
                        i = e.titleMaxLines;
                    return m.createElement(V, {
                        componentType: "twitter_list_details",
                        destinationKey: a
                    }, (function(e) {
                        var a = e.link,
                            o = e.onClick;
                        return m.createElement(de.a, {
                            link: a,
                            onClick: o,
                            style: [Pe.contentWrapper, Pe.wrapperPadding, Pe.bottomPadding]
                        }, m.createElement(Z.a, {
                            style: [Pe.innerRow, Pe.spaceBelow]
                        }, m.createElement(Te.b, {
                            color: "deepGray",
                            size: "small",
                            weight: "bold"
                        }, m.createElement(Ce.a, {
                            style: Pe.icon
                        }), Re), m.createElement(De.a, {
                            color: "deepGray"
                        }), m.createElement(Te.b, {
                            color: "deepGray",
                            size: "small"
                        }, m.createElement(we.a.I18NFormatMessage, {
                            $i18n: "f7f41f53",
                            formattedCount: Me(r),
                            count: r
                        }))), m.createElement(Z.a, {
                            style: Pe.spaceBelow
                        }, m.createElement(ye, {
                            dir: Le(n.is_rtl),
                            numberOfLines: S.shouldLimitTextToSingleLine() ? 1 : i,
                            type: "title",
                            weight: "bold"
                        }, n.content)), m.createElement(be.a, {
                            avatarSize: "small",
                            isProtected: t.protected,
                            isVerified: t.verified,
                            name: t.name,
                            nameSize: "small",
                            profileImageUrl: t.profile_image_url_https,
                            screenName: t.screen_name,
                            screenNameSize: "small",
                            style: [Pe.attributionWrapper],
                            withLink: !1
                        }))
                    }))
                },
                ke = a("RhWx"),
                Be = a.n(ke),
                Ye = a("5Zlm"),
                Ge = a.n(Ye),
                je = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return y()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.noVotes,
                            a = e.isFinal,
                            n = e.isSelected,
                            r = e.isWinner,
                            i = e.label,
                            o = e.percentageOfTotalVote,
                            s = 100 === o,
                            l = r ? "bold" : void 0,
                            d = t ? "7px" : o + "%";
                        return m.createElement(Z.a, {
                            style: Ue.choice
                        }, m.createElement(Z.a, {
                            style: [Ue.choicePercentageBar, (a || s || t) && Ue.choicePercentageBarRoundCorners, r && Ue.choicePercentageBarWinner, {
                                width: d
                            }]
                        }), m.createElement(Z.a, {
                            style: Ue.choiceLabel
                        }, m.createElement(Te.b, {
                            weight: l
                        }, i, n ? " " : null, n ? m.createElement(Ge.a, null) : null)), m.createElement(Z.a, {
                            style: Ue.choiceLabel
                        }, m.createElement(Te.b, {
                            weight: l
                        }, " " + o + "%")))
                    }, t
                }(m.Component);
            je.propTypes = {};
            var Ue = X.a.create((function(e) {
                    return {
                        choice: {
                            alignItems: "center",
                            flexDirection: "row",
                            height: e.spaces.large,
                            justifyContent: "space-between"
                        },
                        choicePercentageBar: {
                            backgroundColor: e.colors.lightGray,
                            borderTopLeftRadius: e.borderRadii.medium,
                            borderBottomLeftRadius: e.borderRadii.medium,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0
                        },
                        choicePercentageBarRoundCorners: {
                            borderRadius: e.borderRadii.medium
                        },
                        choicePercentageBarWinner: {
                            backgroundColor: e.colors.lightPrimary
                        },
                        choiceLabel: {
                            paddingVertical: 0,
                            paddingHorizontal: e.spaces.xSmall
                        }
                    }
                })),
                We = je,
                ze = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    y()(t, e);
                    var a = t.prototype;
                    return a.render = function() {
                        var e = this,
                            t = this.props,
                            a = t.choices,
                            n = t.totalVotes,
                            r = Math.max.apply(Math, Be()(a.map((function(e) {
                                return e.count
                            }))));
                        return a.map((function(t, a) {
                            return m.createElement(Z.a, {
                                key: t.index,
                                style: 0 !== a && Ve.topMargin
                            }, e._renderChoiceResult(t, n, r))
                        }))
                    }, a._renderChoiceResult = function(e, t, a) {
                        var n = this.props,
                            r = n.isFinal,
                            i = n.selectedChoice,
                            o = Math.round(e.count / t * 1e3) / 10 || 0;
                        return m.createElement(We, {
                            isFinal: r,
                            isSelected: i === e.index,
                            isWinner: r && e.count === a,
                            label: S.renderTwemojiText(e.cta, !0),
                            noVotes: 0 === e.count,
                            percentageOfTotalVote: o
                        })
                    }, t
                }(m.Component),
                Ve = X.a.create((function(e) {
                    return {
                        topMargin: {
                            marginTop: e.spaces.xxSmall
                        }
                    }
                })),
                Fe = ze,
                He = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return y()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.choices,
                            a = e.endDatetimeUtc,
                            n = e.isAuthor,
                            r = e.isFinal,
                            i = e.totalVotes,
                            o = e.resultTextSize,
                            s = e.selectedChoice;
                        return m.createElement(Z.a, null, s || r || n ? m.createElement(Fe, {
                            choices: t,
                            isFinal: r,
                            selectedChoice: s,
                            totalVotes: i
                        }) : m.createElement(ee, {
                            buttonSize: "normalCompact",
                            buttons: t.map((function(e) {
                                return {
                                    cta: e.cta,
                                    index: e.index,
                                    destination: e.destination
                                }
                            })),
                            chromeless: !0
                        }), m.createElement(Te.b, {
                            color: "deepGray",
                            size: o,
                            style: qe.pollStatus
                        }, S.renderNumVotesLabel(i), " ·", " ", r ? S.renderFinalResultsLabel() : S.renderTimeLeftLabel(a)))
                    }, t
                }(m.Component);
            h()(He, "displayName", "@twitter/CardPoll");
            var qe = X.a.create((function(e) {
                    return {
                        pollStatus: {
                            marginTop: e.spaces.xSmall
                        }
                    }
                })),
                Ke = He,
                Xe = a("bPFD"),
                Je = a("htQn"),
                Ze = a("7nmT"),
                Qe = a.n(Ze),
                $e = Object.freeze({
                    large: {
                        title: 1,
                        description: 2
                    },
                    medium: {
                        title: 2,
                        description: 1
                    },
                    small: {
                        title: 2,
                        description: 0
                    }
                }),
                et = Object.freeze({
                    large: {
                        title: 1,
                        description: 2
                    },
                    medium: {
                        title: 2,
                        description: 1
                    },
                    small: {
                        title: 2,
                        description: 0
                    }
                }),
                tt = Object.freeze({
                    large: 5,
                    medium: 4,
                    small: 3
                }),
                at = Object.freeze({
                    large: "normal",
                    medium: "normalCompact",
                    small: "normalCompact"
                }),
                nt = function(e, t, a) {
                    var n = {
                            large: et,
                            small: $e
                        }[e],
                        r = t >= 450 ? n.large : t >= 400 ? n.medium : n.small,
                        i = a.attribution,
                        o = a.category,
                        s = a.description,
                        l = a.footer,
                        d = a.title,
                        c = [o, i, a.vanity, l].some(Boolean),
                        _ = r.title + (s ? 0 : r.description) + (c ? 0 : 1),
                        u = "small" !== e || d || c ? r.description : r.description + 1;
                    return "small" === e ? {
                        titleMaxLines: _,
                        descriptionMaxLines: u
                    } : {
                        titleMaxLines: Math.min(2, _),
                        descriptionMaxLines: u
                    }
                },
                rt = function(e, t) {
                    var a = [t.attribution, t.category, t.description, t.footer, t.title, t.vanity].filter(Boolean).length,
                        n = e >= 450 ? tt.large : e >= 400 ? tt.medium : tt.small;
                    return ot(n, a)
                },
                it = function(e) {
                    return e >= 450 ? at.large : e >= 400 ? at.medium : at.small
                },
                ot = function(e, t) {
                    var a = X.a.theme,
                        n = a.borderWidths,
                        r = a.fontSizes,
                        i = a.lineHeight,
                        o = a.spaces;
                    return "calc(" + (r.normal + " * " + i + " * " + e) + " + " + (o.xSmall + " * 2") + " + " + (n.small + " * 2") + " + " + (o.micro + " * " + (t - 1)) + ")"
                },
                st = function(e) {
                    function t(t) {
                        var a;
                        return a = e.call(this, t) || this, h()(E()(a), "_updateSizes", (function(e) {
                            var t = a.props,
                                n = t.details,
                                r = t.buttons,
                                i = a.state,
                                o = i.titleMaxLines,
                                s = i.descriptionMaxLines,
                                l = i.buttonSize,
                                d = i.playOverlaySize,
                                c = n ? nt("large", e, n) : {
                                    titleMaxLines: null,
                                    descriptionMaxLines: null
                                },
                                _ = r ? it(e) : void 0,
                                u = e < 175 ? "small" : "normal",
                                p = c.titleMaxLines,
                                m = c.descriptionMaxLines;
                            (p !== o || m !== s || u !== d || _ && _ !== l) && a.setState(Object.assign({}, p ? {
                                titleMaxLines: p
                            } : null, {}, m || 0 === m ? {
                                descriptionMaxLines: m
                            } : null, {}, _ ? {
                                buttonSize: _
                            } : null, {
                                playOverlaySize: u
                            }))
                        })), h()(E()(a), "_handleLayout", (function(e) {
                            var t = e.nativeEvent.layout.width;
                            a._updateSizes(t)
                        })), h()(E()(a), "_setRootNode", (function(e) {
                            if (e) {
                                var t = Qe.a.findDOMNode(e);
                                t && t instanceof window.HTMLElement && a._updateSizes(t.clientWidth)
                            }
                        })), a.state = Object.assign({}, t.details ? nt("large", 500, t.details) : null, {}, t.buttons ? {
                            buttonSize: it(500)
                        } : null), a
                    }
                    y()(t, e);
                    var a = t.prototype;
                    return a.render = function() {
                        var e = this.props,
                            t = e.buttons,
                            a = e.chromeless,
                            n = e.details,
                            r = e.dmSentOrReceived,
                            i = e.poll,
                            o = e.withInteractiveStyling,
                            s = e.withSquareBottomBorderRadius,
                            l = this._renderSwipeableMedia(),
                            d = this._renderMedia() || l,
                            c = !!i,
                            _ = !a && !l,
                            u = a && !l,
                            p = !!(i || t || n) && !l;
                        return m.createElement(Je.a, {
                            interactiveStyles: o ? void 0 : null,
                            onLayout: this._handleLayout,
                            style: [r && dt[r], _ && dt.border, s && lt[s], l && dt.rootWithCarousel],
                            viewRef: this._setRootNode,
                            withOutsetFocusRing: !0
                        }, d ? m.createElement(Z.a, {
                            importantForAccessibility: "no-hide-descendants",
                            style: [dt.media, u && dt.border, p && dt.mediaBottomBorder, c && dt.mediaBottomSpace, !!n && lt.both]
                        }, d) : null, m.createElement(Z.a, {
                            style: [l && dt.carouselBottomContent]
                        }, this._renderDetail(), this._renderListDetail(), this._renderButtons(), this._renderPoll()))
                    }, a._renderDetail = function() {
                        if (!this.props.details) return null;
                        var e = this.state,
                            t = e.titleMaxLines,
                            a = e.descriptionMaxLines,
                            n = this.props,
                            r = n.buttons,
                            i = n.chromeless,
                            o = n.details,
                            s = o.attribution,
                            l = o.category,
                            d = o.description,
                            c = o.destination,
                            _ = o.footer,
                            u = o.title,
                            p = o.vanity;
                        return m.createElement(Se, {
                            attribution: s,
                            category: l,
                            chromeless: i,
                            description: 0 !== a ? d : void 0,
                            descriptionMaxLines: a,
                            destination: c,
                            footer: _,
                            title: u,
                            titleMaxLines: t,
                            vanity: p,
                            withBottomPadding: !r
                        })
                    }, a._renderListDetail = function() {
                        var e = this.props.listDetails,
                            t = this.state.titleMaxLines;
                        if (!e) return null;
                        var a = e.attribution,
                            n = e.destination,
                            r = e.title,
                            i = e.memberCount;
                        return m.createElement(xe, {
                            attribution: a,
                            destination: n,
                            memberCount: i,
                            title: r,
                            titleMaxLines: t
                        })
                    }, a._renderButtons = function() {
                        var e = this.state.buttonSize,
                            t = this.props,
                            a = t.chromeless,
                            n = t.buttons;
                        return n ? m.createElement(ee, {
                            buttonSize: e,
                            buttons: n,
                            chromeless: a
                        }) : null
                    }, a._renderPoll = function() {
                        var e = this.props.poll;
                        return e ? m.createElement(Ke, e) : null
                    }, a._renderSwipeableMedia = function() {
                        var e = this.props,
                            t = e.renderVideoPlayer,
                            a = e.swipeableMedia;
                        return a ? m.createElement(ge, {
                            playOverlaySize: this.state.playOverlaySize,
                            renderVideoPlayer: t,
                            swipeableMedia: a
                        }) : null
                    }, a._renderMedia = function() {
                        var e = this.props,
                            t = e.locationKey,
                            a = e.media,
                            n = e.renderVideoPlayer;
                        if (!a || !a.mediaEntity) return null;
                        var r = a.aspect_ratio,
                            i = a.mediaEntity,
                            o = a.destination,
                            s = a.overlay;
                        if ("photo" === i.type) {
                            var l = i.original_info,
                                d = l.width,
                                c = l.height;
                            return m.createElement(ue, {
                                destination: o,
                                locationKey: t && t + "-largeCard",
                                mediaEntity: i,
                                overlay: s,
                                playOverlaySize: this.state.playOverlaySize,
                                ratio: r || (i ? Math.max(d / c, 1) : void 0)
                            })
                        }
                        return "iframe" === i.type ? m.createElement(D.a, {
                            ratio: Math.max(i.aspect_ratio, 1)
                        }, m.createElement(Xe.a, {
                            src: i.url,
                            style: dt.iframe
                        })) : "video" === i.type || "uc_video" === i.type || "live_broadcast" === i.type || "vine" === i.type || "tweet_video" === i.type ? n ? m.createElement(Na.Context.Consumer, null, (function(e) {
                            var t = e.isDataSaverEnabled,
                                a = e.isPromoted;
                            return n(i, t ? a ? "suboptimal" : "preview" : void 0)
                        })) : null : void 0
                    }, t
                }(m.Component);
            h()(st, "defaultProps", {
                isPromoted: !1,
                withInteractiveStyling: !0
            }), st.propTypes = {};
            var lt = X.a.create((function(e) {
                    return {
                        both: {
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0
                        },
                        left: {
                            borderBottomLeftRadius: 0
                        },
                        right: {
                            borderBottomRightRadius: 0
                        }
                    }
                })),
                dt = X.a.create((function(e) {
                    return {
                        media: {
                            display: "block"
                        },
                        mediaBottomBorder: {
                            borderBottomColor: e.colors.nestedBorderColor,
                            borderBottomStyle: "solid",
                            borderBottomWidth: e.borderWidths.small
                        },
                        mediaBottomSpace: {
                            marginBottom: e.spaces.xSmall
                        },
                        border: {
                            borderRadius: e.borderRadii.large,
                            borderColor: e.colors.nestedBorderColor,
                            borderStyle: "solid",
                            borderWidth: e.borderWidths.small,
                            overflow: "hidden"
                        },
                        rootWithCarousel: {
                            marginRight: e.spaces.large,
                            borderRadius: e.borderRadii.large
                        },
                        carouselBottomContent: {
                            borderBottomLeftRadius: e.borderRadii.large,
                            borderBottomRightRadius: e.borderRadii.large,
                            borderColor: e.colors.nestedBorderColor,
                            borderStyle: "solid",
                            borderWidth: e.borderWidths.small,
                            marginTop: -.5
                        },
                        iframe: {
                            height: "100%"
                        },
                        sent: {
                            borderColor: e.colors.primary
                        },
                        received: {
                            borderColor: e.colors.lightGray
                        }
                    }
                })),
                ct = st,
                _t = function(e) {
                    function t(t) {
                        var a;
                        return a = e.call(this, t) || this, h()(E()(a), "_updateSizes", (function(e) {
                            var t = a.state,
                                n = t.titleMaxLines,
                                r = t.descriptionMaxLines,
                                i = t.imageWidthStyle,
                                o = nt("small", e, a.props.details),
                                s = rt(e, a.props.details),
                                l = o.titleMaxLines,
                                d = o.descriptionMaxLines;
                            s === i && l === n && d === r || a.setState({
                                titleMaxLines: l,
                                descriptionMaxLines: d,
                                imageWidthStyle: s
                            })
                        })), h()(E()(a), "_handleLayout", (function(e) {
                            var t = e.nativeEvent.layout.width;
                            a._updateSizes(t)
                        })), h()(E()(a), "_setRootNode", (function(e) {
                            if (e) {
                                var t = Qe.a.findDOMNode(e);
                                t && t instanceof window.HTMLElement && a._updateSizes(t.clientWidth)
                            }
                        })), a.state = Object.assign({}, nt("small", 500, t.details), {}, {
                            imageWidthStyle: rt(500, t.details)
                        }), a
                    }
                    y()(t, e);
                    var a = t.prototype;
                    return a.render = function() {
                        var e = this.props,
                            t = e.dmSentOrReceived,
                            a = e.reverse,
                            n = e.withInteractiveStyling,
                            r = e.withSquareBottomBorderRadius,
                            i = this.state.imageWidthStyle,
                            o = m.createElement(Z.a, {
                                key: "details",
                                style: mt.details
                            }, this._renderDetail()),
                            s = m.createElement(Z.a, {
                                importantForAccessibility: "no-hide-descendants",
                                key: "media",
                                style: [mt.media, {
                                    width: i
                                }, a ? mt.mediaLeftBorder : mt.mediaRightBorder]
                            }, this._renderMedia());
                        return m.createElement(Je.a, {
                            interactiveStyles: n ? void 0 : null,
                            onLayout: this._handleLayout,
                            style: [mt.root, r && pt[r], t && mt[t]],
                            viewRef: this._setRootNode,
                            withOutsetFocusRing: !0
                        }, a ? [o, s] : [s, o])
                    }, a._renderDetail = function() {
                        if (!this.props.details) return null;
                        var e = this.state,
                            t = e.titleMaxLines,
                            a = e.descriptionMaxLines,
                            n = this.props.details;
                        return m.createElement(Se, {
                            attribution: n.attribution,
                            category: n.category,
                            description: 0 !== a ? n.description : void 0,
                            descriptionMaxLines: a,
                            destination: n.destination,
                            footer: n.footer,
                            title: n.title,
                            titleMaxLines: t,
                            vanity: n.vanity,
                            withBottomPadding: !0
                        })
                    }, a._renderMedia = function() {
                        var e = this.props,
                            t = e.locationKey,
                            a = e.media,
                            n = a.mediaEntity,
                            r = a.destination,
                            i = a.overlay;
                        return n && "photo" !== n.type ? null : m.createElement(Na.Context.Consumer, null, (function(e) {
                            var a = e.isDataSaverEnabled,
                                o = e.isPromoted,
                                s = a && !o;
                            return m.createElement(ue, {
                                destination: r,
                                locationKey: t && t + "-smallCard",
                                mediaEntity: n,
                                overlay: i,
                                ratio: 1,
                                renderPlaceholder: s
                            })
                        }))
                    }, t
                }(m.Component);
            h()(_t, "defaultProps", {
                withInteractiveStyling: !0
            }), _t.propTypes = {};
            var ut, pt = X.a.create((function(e) {
                    return {
                        both: {
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0
                        },
                        left: {
                            borderBottomLeftRadius: 0
                        },
                        right: {
                            borderBottomRightRadius: 0
                        }
                    }
                })),
                mt = X.a.create((function(e) {
                    return {
                        root: {
                            borderColor: e.colors.nestedBorderColor,
                            borderStyle: "solid",
                            borderWidth: e.borderWidths.small,
                            borderRadius: e.borderRadii.large,
                            flexDirection: "row",
                            overflow: "hidden"
                        },
                        media: {
                            display: "block",
                            borderColor: e.colors.nestedBorderColor,
                            borderStyle: "solid",
                            borderRadius: e.borderRadii.large,
                            overflow: "hidden"
                        },
                        mediaLeftBorder: {
                            borderLeftWidth: e.borderWidths.small,
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0
                        },
                        mediaRightBorder: {
                            borderRightWidth: e.borderWidths.small,
                            borderBottomRightRadius: 0,
                            borderTopRightRadius: 0
                        },
                        details: {
                            flexGrow: 1,
                            flexShrink: 1,
                            justifyContent: "center"
                        },
                        sent: {
                            borderColor: e.colors.primary
                        },
                        received: {
                            borderColor: e.colors.lightGray
                        }
                    }
                })),
                It = _t,
                gt = (a("NlgC"), function(e, t, a) {
                    return ("string" == typeof a ? [a] : a).map((function(a) {
                        return e[a] && e[a][t]
                    })).find((function(e) {
                        return !!e
                    }))
                }),
                Tt = gt,
                Et = gt,
                vt = gt,
                yt = gt,
                bt = function(e, t) {
                    var a = function e(t) {
                            return {
                                and: function(a) {
                                    return e(t && n(a))
                                },
                                or: function(a) {
                                    return e(t || n(a))
                                },
                                result: function() {
                                    return t
                                }
                            }
                        },
                        n = function(t) {
                            return "string" == typeof t ? !!e[t] : t(a(!0).and).result()
                        };
                    return n(t)
                },
                ht = function(e, t) {
                    return {
                        media_url_https: e.url,
                        type: "photo",
                        original_info: {
                            width: e.width,
                            height: e.height
                        },
                        ext_media_color: {
                            palette: []
                        },
                        cropCandidates: t
                    }
                },
                ft = function(e) {
                    var t = e.match(/\/([0-9]+)(\/|\.)/);
                    return t ? t[1] : ""
                },
                At = function(e) {
                    return "https://cards-frame.twitter.com/i/cards/tfw/v1/uc/" + e
                },
                St = {
                    url: "https://pbs.twimg.com/lex/placeholder_live_nomargin.png",
                    width: 1920,
                    height: 1080
                },
                Ot = "NOT_STARTED",
                Ct = we.a.h19e8033,
                Dt = we.a.j33a92ca,
                Nt = function(e) {
                    var t = Tt(e, "string_value", "domain"),
                        a = vt(e, "user_value", "site"),
                        n = Tt(e, "string_value", "app_name");
                    return t && "vine.co" === t.toLowerCase() || a && "586671909" === a.id_str || n && "vine" === n.toLowerCase()
                },
                wt = function(e) {
                    var t, a, n, r, i, o = e.cardId,
                        s = e.cardType,
                        l = e.data,
                        d = e.cardContext,
                        c = yt(l, "image_value", "player_image_original"),
                        _ = Tt(l, "string_value", "description"),
                        u = parseInt(Tt(l, "string_value", "player_width"), 10) / parseInt(Tt(l, "string_value", "player_height"), 10);
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t[P] = {
                            size: "small"
                        }, t),
                        card: {
                            card_name: s,
                            card_url: Tt(l, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: o,
                            destinations: (a = {}, a[M.DESTINATION] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: Tt(l, "string_value", "card_url"),
                                        vanity: Tt(l, "string_value", ["vanity_url", "card_url"])
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, a),
                            components: (n = {}, n[R] = [M.MEDIA, M.DETAILS], n[P] = [M.MEDIA_STATIC, M.DETAILS], n),
                            media_entities: (r = {}, r[M.IMAGE_ENTITY] = ht(c), r[M.VIDEO_ENTITY] = {
                                type: "vine",
                                aspect_ratio: u,
                                content_id: ft(c.url),
                                poster_image: c,
                                publisher_id: Tt(l, "string_value", "site") || d.tweetUserId,
                                variants: [{
                                    src: Tt(l, "string_value", "player_stream_url"),
                                    type: Tt(l, "string_value", "player_stream_content_type")
                                }]
                            }, r),
                            components_data: (i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.VIDEO_ENTITY
                                }
                            }, i[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY,
                                    destination: M.DESTINATION,
                                    overlay: {
                                        type: k.PLAY
                                    }
                                }
                            }, i[M.DETAILS] = {
                                type: G,
                                data: Object.assign({
                                    destination: M.DESTINATION
                                }, _ ? {
                                    description: {
                                        content: _
                                    }
                                } : null, {
                                    title: {
                                        content: Tt(l, "string_value", "title")
                                    }
                                })
                            }, i)
                        }
                    }
                },
                Mt = (a("LnO1"), a("3eMz"), a("dtAy"), a("DB+v"), {
                    media: !0,
                    details: !0,
                    button_group: !0,
                    app_store_details: !0,
                    swipeable_media: !0,
                    twitter_list_details: !0
                }),
                Rt = function(e) {
                    var t = function(t) {
                            return t.map((function(t) {
                                return e.find((function(e) {
                                    return e.type === t
                                }))
                            })).find(Boolean)
                        },
                        a = "android" === S.getMobileOS() ? t(["android_app", "iphone_app", "ipad_app"]) : t(["iphone_app", "ipad_app", "android_app"]);
                    if (a) return a.category || (a.category = {
                        is_rtl: !1,
                        content: "android_app" === a.type ? "Play Store" : "App Store"
                    }), a.url = "android_app" === a.type ? "http://play.google.com/store/apps/details?id=" + a.id : function(e) {
                        return "https://itunes.apple.com/app/id" + e
                    }(a.id), a
                },
                Lt = function(e) {
                    return e.unified_card && e.unified_card.string_value && "string" == typeof e.unified_card.string_value ? JSON.parse(e.unified_card.string_value) : {
                        components: [],
                        component_objects: {},
                        destination_objects: {},
                        media_entities: {},
                        app_store_data: {},
                        users: {}
                    }
                },
                Pt = function(e) {
                    return e + "_static"
                },
                xt = function(e) {
                    var t, a, n, r, i, o = e.cardId,
                        s = e.cardType,
                        l = e.data,
                        d = e.cardContext,
                        c = yt(l, "image_value", "player_image_original"),
                        _ = parseInt(Tt(l, "string_value", "player_width"), 10) / parseInt(Tt(l, "string_value", "player_height"), 10),
                        u = Tt(l, "string_value", "content_duration_seconds"),
                        p = Tt(l, "string_value", "title"),
                        m = Tt(l, "string_value", "description");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t[P] = {
                            size: "large"
                        }, t),
                        card: {
                            card_name: s,
                            card_url: Tt(l, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: o,
                            components: (a = {}, a[R] = p || m ? [M.MEDIA, M.DETAILS] : [M.MEDIA], a[P] = p || m ? [M.MEDIA_STATIC, M.DETAILS_STATIC] : [M.MEDIA_STATIC], a),
                            destinations: (n = {}, n[M.DESTINATION_STATIC] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: d.tweetPermalink || "https://twitter.com"
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: (r = {}, r[M.IMAGE_ENTITY] = ht(c || {}), r[M.VIDEO_ENTITY] = Object.assign({
                                type: "video",
                                aspect_ratio: _,
                                content_id: Tt(l, "string_value", "amplify_content_id")
                            }, u ? {
                                duration_ms: 1e3 * parseInt(u, 10)
                            } : null, {
                                vmap_url: Tt(l, "string_value", "amplify_url_vmap"),
                                poster_image: c,
                                publisher_id: Tt(l, "string_value", "site") || d.tweetUserId,
                                variants: []
                            }), r),
                            components_data: (i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.VIDEO_ENTITY
                                }
                            }, i[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY,
                                    destination: M.DESTINATION_STATIC,
                                    overlay: {
                                        type: k.PLAY
                                    }
                                }
                            }, i[M.DETAILS] = {
                                type: G,
                                data: Object.assign({}, p ? {
                                    title: {
                                        content: p
                                    }
                                } : null, {}, m ? {
                                    description: {
                                        content: m
                                    }
                                } : null)
                            }, i[M.DETAILS_STATIC] = {
                                type: G,
                                data: Object.assign({}, p ? {
                                    title: {
                                        content: p
                                    }
                                } : null, {}, m ? {
                                    description: {
                                        content: m
                                    }
                                } : null, {
                                    destination: M.DESTINATION_STATIC
                                })
                            }, i)
                        }
                    }
                },
                kt = function(e) {
                    var t, a, n, r, i, o = e.cardId,
                        s = e.cardType,
                        l = e.data,
                        d = yt(l, "image_value", "thumbnail_original"),
                        c = Tt(l, "string_value", "description"),
                        _ = Tt(l, "string_value", "app_star_rating"),
                        u = Tt(l, "string_value", "app_num_ratings"),
                        p = _ && u ? S.renderRatingsLabel({
                            appStarRating: _,
                            appNumRatings: u
                        }) : null,
                        m = Tt(l, "string_value", "card_url");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "small"
                        }, t),
                        card: {
                            card_name: s,
                            card_url: Tt(l, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: o,
                            components: (a = {}, a[R] = [M.MEDIA, M.DETAILS], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: Object.assign({
                                        url: Tt(l, "string_value", "card_url")
                                    }, p ? null : {
                                        vanity: m
                                    }),
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: Object.assign({}, d ? (r = {}, r[M.IMAGE_ENTITY] = ht(d), r) : null),
                            components_data: (i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: d ? M.IMAGE_ENTITY : null,
                                    aspect_ratio: 1,
                                    destination: M.DESTINATION
                                }
                            }, i[M.DETAILS] = {
                                type: G,
                                data: Object.assign({
                                    destination: M.DESTINATION
                                }, c ? {
                                    description: {
                                        content: c
                                    }
                                } : null, {
                                    title: {
                                        content: Tt(l, "string_value", "title")
                                    }
                                }, p ? {
                                    footer: p
                                } : null)
                            }, i)
                        }
                    }
                },
                Bt = function(e) {
                    var t, a, n, r, i, o = e.cardId,
                        s = e.cardType,
                        l = e.data,
                        d = e.cardContext,
                        c = yt(l, "image_value", "player_image_original"),
                        _ = parseInt(Tt(l, "string_value", "player_width"), 10) / parseInt(Tt(l, "string_value", "player_height"), 10),
                        u = Tt(l, "string_value", "content_duration_seconds");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t[P] = {
                            size: "large"
                        }, t),
                        card: {
                            card_name: s,
                            card_url: Tt(l, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: o,
                            components: (a = {}, a[R] = [M.MEDIA, M.DETAILS], a[P] = [M.MEDIA_STATIC, M.DETAILS], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: Tt(l, "string_value", "card_url")
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: (r = {}, r[M.IMAGE_ENTITY] = ht(c), r[M.VIDEO_ENTITY] = Object.assign({
                                type: "video",
                                aspect_ratio: _,
                                content_id: Tt(l, "string_value", "player_content_id") || ft(c.url)
                            }, u ? {
                                duration_ms: 1e3 * parseInt(u, 10)
                            } : null, {
                                vmap_url: Tt(l, "string_value", "player_stream_url"),
                                poster_image: c,
                                publisher_id: Tt(l, "string_value", "player_owner_id") || d.tweetUserId,
                                variants: [{
                                    src: Tt(l, "string_value", "player_hls_url"),
                                    type: "application/x-mpegURL"
                                }]
                            }), r),
                            components_data: (i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.VIDEO_ENTITY,
                                    aspect_ratio: _
                                }
                            }, i[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY,
                                    aspect_ratio: _,
                                    destination: M.DESTINATION
                                }
                            }, i[M.DETAILS] = {
                                type: G,
                                data: {
                                    destination: M.DESTINATION,
                                    title: {
                                        content: Tt(l, "string_value", "title")
                                    },
                                    footer: Tt(l, "string_value", "app_category") || "App Store"
                                }
                            }, i)
                        }
                    }
                },
                Yt = function(e) {
                    var t, a, n, r, i, o, s = e.cardId,
                        l = e.cardType,
                        d = e.data,
                        c = e.cardContext,
                        _ = yt(d, "image_value", "player_image_original"),
                        u = Tt(d, "string_value", "description"),
                        p = Tt(d, "string_value", "player_url"),
                        m = Tt(d, "string_value", "player_width"),
                        I = Tt(d, "string_value", "player_height"),
                        g = m && I ? parseInt(m, 10) / parseInt(I, 10) : 16 / 9,
                        T = [M.MEDIA, M.DETAILS],
                        E = [M.MEDIA_STATIC, M.DETAILS_SECONDARY];
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "small"
                        }, t[L] = {
                            size: "large"
                        }, t[P] = {
                            size: "small"
                        }, t[x] = {
                            size: "small"
                        }, t),
                        card: {
                            card_name: l,
                            card_url: Tt(d, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: s,
                            components: (a = {}, a[R] = c.tweetId ? T : E, a[L] = [M.MEDIA_SECONDARY, M.DETAILS_SECONDARY], a[P] = E, a[x] = [M.MEDIA_STATIC, M.DETAILS_SECONDARY], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.ACTION,
                                data: {
                                    action_data: {
                                        next_state: L,
                                        persist: !1,
                                        vanity: Tt(d, "string_value", ["partner", "card_url"])
                                    },
                                    scribe: "click",
                                    promoted_log: "card_url_click"
                                }
                            }, n[M.DESTINATION_SECONDARY] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: Tt(d, "string_value", "card_url"),
                                        vanity: Tt(d, "string_value", ["partner", "card_url"])
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: Object.assign({}, _ ? (r = {}, r[M.IMAGE_ENTITY] = ht(_), r) : null, {}, p && c.tweetId ? (i = {}, i[M.IFRAME_ENTITY] = {
                                aspect_ratio: g,
                                type: "iframe",
                                url: At(c.tweetId)
                            }, i) : null),
                            components_data: (o = {}, o[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: _ ? M.IMAGE_ENTITY : null,
                                    aspect_ratio: 1,
                                    overlay: {
                                        type: k.PLAY
                                    },
                                    destination: p ? M.DESTINATION : M.DESTINATION_SECONDARY
                                }
                            }, o[M.MEDIA_SECONDARY] = {
                                type: Y,
                                data: {
                                    id: p ? M.IFRAME_ENTITY : null,
                                    aspect_ratio: g
                                }
                            }, o[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: _ ? M.IMAGE_ENTITY : null,
                                    aspect_ratio: 1,
                                    overlay: {
                                        type: k.PLAY
                                    },
                                    destination: M.DESTINATION_SECONDARY
                                }
                            }, o[M.DETAILS] = {
                                type: G,
                                data: Object.assign({
                                    destination: p ? M.DESTINATION : M.DESTINATION_SECONDARY
                                }, u ? {
                                    description: {
                                        content: u
                                    }
                                } : null, {
                                    title: {
                                        content: Tt(d, "string_value", "title")
                                    }
                                })
                            }, o[M.DETAILS_SECONDARY] = {
                                type: G,
                                data: Object.assign({
                                    destination: M.DESTINATION_SECONDARY
                                }, u ? {
                                    description: {
                                        content: u
                                    }
                                } : null, {
                                    title: {
                                        content: Tt(d, "string_value", "title")
                                    }
                                })
                            }, o)
                        }
                    }
                },
                Gt = function(e) {
                    var t, a, n, r, i, o, s, l = e.cardId,
                        d = e.cardType,
                        c = e.data,
                        _ = e.users,
                        u = vt(c, "user_value", "site"),
                        p = u && _[u.id_str],
                        m = Tt(c, "string_value", "broadcaster_display_name"),
                        I = Tt(c, "string_value", "broadcast_state") === Ot,
                        g = yt(c, "image_value", "broadcast_thumbnail_original"),
                        T = yt(c, "image_value", "broadcast_pre_live_slate") || St,
                        E = I ? T : g,
                        v = Tt(c, "string_value", "broadcast_scheduled_start_time"),
                        y = I && v ? S.renderStartingTimeLabel(v) : void 0,
                        b = X.a.theme.aspectRatios.landscape,
                        h = Math.max(parseInt(Tt(c, "string_value", "broadcast_width"), 10) / parseInt(Tt(c, "string_value", "broadcast_height"), 10), 1);
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t[P] = {
                            size: E ? "large" : "small"
                        }, t),
                        card: {
                            card_name: d,
                            card_url: Tt(c, "string_value", "card_url"),
                            fetch_updates: (a = {}, a[R] = !0, a),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: l,
                            components: (n = {}, n[R] = [I ? M.MEDIA_SECONDARY : M.MEDIA, M.DETAILS], n[P] = [M.MEDIA_SECONDARY, M.DETAILS], n),
                            destinations: (r = {}, r[M.DESTINATION] = {
                                type: B.BROADCAST,
                                data: {
                                    broadcast_data: {
                                        id: Tt(c, "string_value", "broadcast_id")
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, r),
                            media_entities: Object.assign({}, E ? (i = {}, i[M.IMAGE_ENTITY] = ht(E), i) : null, (o = {}, o[M.VIDEO_ENTITY] = Object.assign({
                                type: "live_broadcast",
                                aspect_ratio: h,
                                broadcast_id: Tt(c, "string_value", "broadcast_id"),
                                content_id: Tt(c, "string_value", "broadcast_media_key"),
                                destination: M.DESTINATION
                            }, E ? {
                                poster_image: E
                            } : null, {
                                timecode: Tt(c, "string_value", "broadcast_timecode") || Tt(c, "string_value", "broadcast_replay_edited_start_time")
                            }), o)),
                            components_data: (s = {}, s[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.VIDEO_ENTITY,
                                    aspect_ratio: h
                                }
                            }, s[M.MEDIA_SECONDARY] = {
                                type: Y,
                                data: {
                                    id: E ? M.IMAGE_ENTITY : null,
                                    aspect_ratio: b,
                                    destination: M.DESTINATION,
                                    overlay: I ? y ? {
                                        type: k.LABEL,
                                        text: y
                                    } : void 0 : {
                                        type: k.PLAY
                                    }
                                }
                            }, s[M.DETAILS] = {
                                type: G,
                                data: Object.assign({
                                    destination: M.DESTINATION
                                }, p ? {
                                    attribution: p
                                } : {
                                    category: {
                                        content: m
                                    }
                                }, {
                                    title: {
                                        content: Tt(c, "string_value", "broadcast_title")
                                    }
                                })
                            }, s)
                        }
                    }
                },
                jt = function(e) {
                    var t, a, n, r, i, o = e.cardId,
                        s = e.cardType,
                        l = e.data,
                        d = yt(l, "image_value", "thumbnail_original"),
                        c = Tt(l, "string_value", "description"),
                        _ = Tt(l, "string_value", "app_star_rating"),
                        u = Tt(l, "string_value", "app_num_ratings"),
                        p = _ && u ? S.renderRatingsLabel({
                            appStarRating: _,
                            appNumRatings: u
                        }) : null,
                        m = Tt(l, "string_value", "card_url");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "small"
                        }, t),
                        card: {
                            card_name: s,
                            card_url: Tt(l, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: o,
                            components: (a = {}, a[R] = [M.MEDIA, M.DETAILS], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: Object.assign({
                                        url: Tt(l, "string_value", "card_url")
                                    }, p ? null : {
                                        vanity: m
                                    }),
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: Object.assign({}, d ? (r = {}, r[M.IMAGE_ENTITY] = ht(d), r) : null),
                            components_data: (i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: d ? M.IMAGE_ENTITY : null,
                                    aspect_ratio: 1,
                                    destination: M.DESTINATION
                                }
                            }, i[M.DETAILS] = {
                                type: G,
                                data: Object.assign({
                                    destination: M.DESTINATION
                                }, c ? {
                                    description: {
                                        content: c
                                    }
                                } : null, {
                                    title: {
                                        content: Tt(l, "string_value", "title")
                                    }
                                }, p ? {
                                    footer: p
                                } : null)
                            }, i)
                        }
                    }
                },
                Ut = function(e) {
                    var t, a, n, r, i, o, s, l = e.cardId,
                        d = e.cardType,
                        c = e.data,
                        _ = e.cardContext,
                        u = e.users,
                        p = yt(c, "image_value", "image_original"),
                        m = function(e) {
                            return [1, 2, 3, 4].map((function(t) {
                                var a = Tt(c, "string_value", "cta" + t),
                                    n = Tt(c, "string_value", "cta" + t + "_wm_id");
                                return a && n ? {
                                    cta: a,
                                    wm_id: n,
                                    destination: e,
                                    icon: "dm",
                                    index: t
                                } : null
                            })).filter(Boolean)
                        },
                        I = m(M.DESTINATION),
                        g = m(M.DESTINATION_STATIC),
                        T = vt(c, "user_value", "recipient"),
                        E = T && u[T.id_str],
                        v = T.id_str !== _.tweetUserId && E;
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t),
                        card: {
                            card_name: d,
                            card_url: Tt(c, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: l,
                            components: (a = {}, a[R] = [M.MEDIA].concat(Be()(v ? [M.DETAILS] : []), [M.BUTTON_GROUP]), a[P] = [M.MEDIA_STATIC].concat(Be()(v ? [M.DETAILS] : []), [M.BUTTON_GROUP_STATIC]), a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.ACTION,
                                data: {
                                    action_data: {
                                        persist: !1,
                                        type: "dm",
                                        recipient: T.id_str
                                    },
                                    auth_required: !0,
                                    scribe: "click",
                                    promoted_log: "dm_button_click"
                                }
                            }, n[M.DESTINATION_STATIC] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: _.tweetPermalink || "https://twitter.com"
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: (r = {}, r[M.IMAGE_ENTITY] = ht(p), r),
                            components_data: Object.assign((i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY
                                }
                            }, i[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY,
                                    destination: M.DESTINATION_STATIC
                                }
                            }, i), v ? (o = {}, o[M.DETAILS] = {
                                type: G,
                                data: {
                                    attribution: E
                                }
                            }, o) : null, (s = {}, s[M.BUTTON_GROUP] = {
                                type: j,
                                data: {
                                    buttons: I
                                }
                            }, s[M.BUTTON_GROUP_STATIC] = {
                                type: j,
                                data: {
                                    buttons: g
                                }
                            }, s))
                        }
                    }
                },
                Wt = function(e) {
                    var t, a, n, r, i, o, s, l = e.cardContext,
                        d = e.cardId,
                        c = e.cardType,
                        _ = e.data,
                        u = e.users,
                        p = vt(_, "user_value", "author"),
                        m = p && u[p.id_str],
                        I = Tt(_, "string_value", "event_id"),
                        g = Tt(_, "string_value", "event_category"),
                        T = Tt(_, "string_value", "media_type"),
                        E = "broadcast" === T,
                        v = "video" === T,
                        y = Tt(_, "string_value", "broadcast_id"),
                        b = Math.max(parseInt(Tt(_, "string_value", "broadcast_width"), 10) / parseInt(Tt(_, "string_value", "broadcast_height"), 10), 1),
                        h = Tt(_, "string_value", "broadcast_media_key"),
                        f = Tt(_, "string_value", "media_tweet_id"),
                        A = yt(_, "image_value", "event_thumbnail_original"),
                        S = yt(_, "image_value", "broadcast_thumbnail"),
                        O = E ? S : A,
                        C = E ? void 0 : [{
                            h: parseInt(Tt(_, "string_value", "event_thumbnail_media_size_crops_16x9_h"), 10),
                            w: parseInt(Tt(_, "string_value", "event_thumbnail_media_size_crops_16x9_w"), 10),
                            x: parseInt(Tt(_, "string_value", "event_thumbnail_media_size_crops_16x9_x"), 10),
                            y: parseInt(Tt(_, "string_value", "event_thumbnail_media_size_crops_16x9_y"), 10)
                        }],
                        D = Tt(_, "string_value", "remind_me_notification_id"),
                        N = Et(_, "boolean_value", "remind_me_toggle_visible") && !!D,
                        w = Et(_, "boolean_value", "remind_me_subscribed"),
                        k = w ? Dt : Ct;
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t[x] = {
                            size: "small"
                        }, t[L] = {
                            size: "small",
                            reverse: !0
                        }, t[P] = {
                            size: O ? "large" : "small"
                        }, t),
                        card: {
                            card_name: c,
                            card_url: Tt(_, "string_value", "card_url"),
                            fetch_updates: (a = {}, a[R] = !0, a[x] = !0, a),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: d,
                            components: (n = {}, n[R] = [E || v ? M.MEDIA : M.MEDIA_STATIC, M.DETAILS, M.BUTTON_GROUP], n[x] = [M.MEDIA_STATIC, M.DETAILS, M.BUTTON_GROUP], n[L] = [M.MEDIA_STATIC, M.DETAILS], n[P] = [M.MEDIA_STATIC, M.DETAILS, M.BUTTON_GROUP_STATIC], n),
                            destinations: (r = {}, r[M.DESTINATION] = {
                                type: B.EVENT,
                                data: {
                                    event_data: {
                                        id: I
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, r[M.DESTINATION_SECONDARY] = {
                                type: B.ACTION,
                                data: {
                                    action_data: {
                                        persist: !0,
                                        type: "reminder"
                                    },
                                    auth_required: !0,
                                    scribe: "reminder",
                                    promoted_log: "card_url_click"
                                }
                            }, r[M.DESTINATION_STATIC] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: l && l.tweetPermalink || "https://twitter.com"
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, r),
                            media_entities: Object.assign({}, O ? (i = {}, i[M.IMAGE_ENTITY] = ht(O, C), i) : null, (o = {}, o[M.VIDEO_ENTITY] = E ? {
                                type: "live_broadcast",
                                aspect_ratio: b,
                                broadcast_id: y,
                                content_id: h,
                                destination: M.DESTINATION,
                                poster_image: O,
                                timecode: Tt(_, "string_value", "broadcast_replay_edited_start_time")
                            } : {
                                type: "tweet_video",
                                aspect_ratio: X.a.theme.aspectRatios.landscape,
                                media_tweet_id: f,
                                event_id: I,
                                poster_image: O
                            }, o)),
                            components_data: (s = {}, s[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.VIDEO_ENTITY,
                                    aspect_ratio: E ? b : X.a.theme.aspectRatios.landscape
                                }
                            }, s[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY,
                                    aspect_ratio: X.a.theme.aspectRatios.landscape,
                                    destination: M.DESTINATION
                                }
                            }, s[M.BUTTON_GROUP] = {
                                type: j,
                                data: Object.assign({}, N ? {
                                    buttons: [{
                                        cta: k,
                                        destination: M.DESTINATION_SECONDARY,
                                        eventId: I,
                                        index: 0,
                                        isSelected: w,
                                        notificationId: D
                                    }]
                                } : null)
                            }, s[M.BUTTON_GROUP_STATIC] = {
                                type: j,
                                data: Object.assign({}, N ? {
                                    buttons: [{
                                        cta: k,
                                        destination: M.DESTINATION_STATIC,
                                        eventId: I,
                                        index: 0,
                                        isSelected: w,
                                        notificationId: D
                                    }]
                                } : null)
                            }, s[M.DETAILS] = {
                                type: G,
                                data: Object.assign({
                                    destination: M.DESTINATION
                                }, m ? {
                                    attribution: m
                                } : g ? {
                                    category: {
                                        content: g
                                    }
                                } : null, {
                                    title: {
                                        content: Tt(_, "string_value", "event_title")
                                    }
                                })
                            }, s)
                        }
                    }
                },
                zt = function(e) {
                    var t, a, n, r, i = e.cardId,
                        o = e.cardType,
                        s = e.data,
                        l = e.cardContext,
                        d = Tt(s, "string_value", "default_composer_text"),
                        c = Tt(s, "string_value", "welcome_message_id"),
                        _ = Object.assign({
                            icon: "dm",
                            index: 0,
                            cta: S.getMessageMeString(Tt(s, "string_value", "cta"))
                        }, d ? {
                            composer_text: d
                        } : null, {}, c ? {
                            wm_id: c
                        } : null),
                        u = vt(s, "user_value", "recipient");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large",
                            chromeless: !0
                        }, t[P] = {
                            size: "large",
                            chromeless: !0
                        }, t),
                        card: {
                            card_name: o,
                            card_url: Tt(s, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "message_me_show"
                            },
                            id: i,
                            components: (a = {}, a[R] = [M.BUTTON_GROUP], a[P] = [M.BUTTON_GROUP_STATIC], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.ACTION,
                                data: {
                                    action_data: {
                                        persist: !1,
                                        type: "dm",
                                        recipient: u.id_str
                                    },
                                    auth_required: !0,
                                    scribe: "message_me_click",
                                    promoted_log: "card_url_click"
                                }
                            }, n[M.DESTINATION_STATIC] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: l.tweetPermalink || "https://twitter.com"
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: {},
                            components_data: (r = {}, r[M.BUTTON_GROUP] = {
                                type: j,
                                data: {
                                    buttons: [Object.assign({}, _, {
                                        destination: M.DESTINATION
                                    })]
                                }
                            }, r[M.BUTTON_GROUP_STATIC] = {
                                type: j,
                                data: {
                                    buttons: [Object.assign({}, _, {
                                        destination: M.DESTINATION_STATIC
                                    })]
                                }
                            }, r)
                        }
                    }
                },
                Vt = function(e) {
                    var t, a, n, r, i, o = e.cardId,
                        s = e.cardType,
                        l = e.data,
                        d = e.users,
                        c = yt(l, "image_value", "photo_image") || {
                            url: Tt(l, "string_value", "cover_format_media_url"),
                            width: parseInt(Tt(l, "string_value", "cover_format_media_size_w"), 10) || 0,
                            height: parseInt(Tt(l, "string_value", "cover_format_media_size_h"), 10) || 0
                        },
                        _ = vt(l, "user_value", "author"),
                        u = _ && d[_.id_str],
                        p = Tt(l, "string_value", "title"),
                        m = Tt(l, "string_value", "description"),
                        I = Tt(l, "string_value", "subcategory_string");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "small",
                            reverse: !0
                        }, t),
                        card: {
                            card_name: s,
                            card_url: Tt(l, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: o,
                            components: (a = {}, a[R] = [M.MEDIA, M.DETAILS], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.MOMENT,
                                data: {
                                    moment_data: {
                                        moment: Tt(l, "string_value", "id")
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: (r = {}, r[M.IMAGE_ENTITY] = ht(c), r),
                            components_data: (i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY,
                                    aspect_ratio: 1,
                                    overlay: {
                                        type: k.MOMENTS
                                    },
                                    destination: M.DESTINATION
                                }
                            }, i[M.DETAILS] = {
                                type: G,
                                data: Object.assign({
                                    destination: M.DESTINATION
                                }, u ? {
                                    attribution: u
                                } : I ? {
                                    category: {
                                        content: I
                                    }
                                } : null, {}, p ? {
                                    title: {
                                        content: p
                                    }
                                } : null, {}, m ? {
                                    description: {
                                        content: m
                                    }
                                } : null)
                            }, i)
                        }
                    }
                },
                Ft = function(e) {
                    var t, a, n, r, i, o, s = e.cardId,
                        l = e.cardType,
                        d = e.data,
                        c = e.users,
                        _ = yt(d, "image_value", "thumbnail_original"),
                        u = Math.max(parseInt(Tt(d, "string_value", "broadcast_width"), 10) / parseInt(Tt(d, "string_value", "broadcast_height"), 10), 1),
                        p = Tt(d, "string_value", "broadcaster_twitter_id"),
                        m = p && c[p],
                        I = Tt(d, "string_value", "description");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t[P] = {
                            size: _ ? "large" : "small"
                        }, t),
                        card: {
                            card_name: l,
                            card_url: Tt(d, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: s,
                            components: (a = {}, a[R] = [M.MEDIA, M.DETAILS], a[P] = [M.MEDIA_STATIC, M.DETAILS], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: Tt(d, "string_value", "card_url"),
                                        vanity: Tt(d, "string_value", ["vanity_url", "card_url"])
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: Object.assign({}, _ ? (r = {}, r[M.IMAGE_ENTITY] = ht(_), r) : null, (i = {}, i[M.VIDEO_ENTITY] = Object.assign({
                                type: "live_broadcast",
                                aspect_ratio: u,
                                broadcast_id: Tt(d, "string_value", "id"),
                                content_id: Tt(d, "string_value", "broadcast_media_key"),
                                destination: M.DESTINATION
                            }, _ ? {
                                poster_image: _
                            } : null, {
                                timecode: Tt(d, "string_value", "timecode") || Tt(d, "string_value", "replay_edited_start_time")
                            }), i)),
                            components_data: (o = {}, o[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.VIDEO_ENTITY,
                                    aspect_ratio: u
                                }
                            }, o[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: _ ? M.IMAGE_ENTITY : null,
                                    destination: M.DESTINATION,
                                    overlay: {
                                        type: k.PLAY
                                    }
                                }
                            }, o[M.DETAILS] = {
                                type: G,
                                data: Object.assign({
                                    destination: M.DESTINATION
                                }, I ? {
                                    description: {
                                        content: I
                                    }
                                } : null, {}, m ? {
                                    attribution: m
                                } : null, {}, p ? null : {
                                    title: {
                                        content: Tt(d, "string_value", "title")
                                    }
                                })
                            }, o)
                        }
                    }
                },
                Ht = function(e) {
                    var t, a, n, r, i, o, s = e.cardId,
                        l = e.cardType,
                        d = e.data,
                        c = e.cardContext,
                        _ = e.users,
                        u = yt(d, "image_value", "player_image_original"),
                        p = Tt(d, "string_value", "description"),
                        m = Tt(d, "string_value", "player_url"),
                        I = parseInt(Tt(d, "string_value", "player_width"), 10) / parseInt(Tt(d, "string_value", "player_height"), 10),
                        g = [M.MEDIA, M.DETAILS],
                        T = [M.MEDIA_STATIC, M.DETAILS_SECONDARY];
                    return Nt(d) ? wt({
                        cardId: s,
                        cardType: l,
                        data: d,
                        cardContext: c,
                        users: _
                    }) : {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "small"
                        }, t[L] = {
                            size: "large"
                        }, t[P] = {
                            size: "small"
                        }, t[x] = {
                            size: "small"
                        }, t),
                        card: {
                            card_name: l,
                            card_url: Tt(d, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: s,
                            components: (a = {}, a[R] = c.tweetId ? g : T, a[L] = [M.MEDIA_SECONDARY, M.DETAILS_SECONDARY], a[P] = T, a[x] = [M.MEDIA_STATIC, M.DETAILS_SECONDARY], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.ACTION,
                                data: {
                                    action_data: {
                                        next_state: L,
                                        persist: !1,
                                        vanity: Tt(d, "string_value", ["vanity_url", "card_url"])
                                    },
                                    scribe: "click",
                                    promoted_log: "card_url_click"
                                }
                            }, n[M.DESTINATION_SECONDARY] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: Tt(d, "string_value", "card_url"),
                                        vanity: Tt(d, "string_value", ["vanity_url", "card_url"])
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: Object.assign({}, u ? (r = {}, r[M.IMAGE_ENTITY] = ht(u), r) : null, {}, m && c.tweetId ? (i = {}, i[M.IFRAME_ENTITY] = {
                                type: "iframe",
                                url: At(c.tweetId),
                                aspect_ratio: I
                            }, i) : null),
                            components_data: (o = {}, o[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: u ? M.IMAGE_ENTITY : null,
                                    aspect_ratio: 1,
                                    overlay: {
                                        type: k.PLAY
                                    },
                                    destination: m ? M.DESTINATION : M.DESTINATION_SECONDARY
                                }
                            }, o[M.MEDIA_SECONDARY] = {
                                type: Y,
                                data: {
                                    id: m ? M.IFRAME_ENTITY : null,
                                    aspect_ratio: I
                                }
                            }, o[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: u ? M.IMAGE_ENTITY : null,
                                    aspect_ratio: 1,
                                    overlay: {
                                        type: k.PLAY
                                    },
                                    destination: M.DESTINATION_SECONDARY
                                }
                            }, o[M.DETAILS] = {
                                type: G,
                                data: Object.assign({
                                    destination: m ? M.DESTINATION : M.DESTINATION_SECONDARY
                                }, p ? {
                                    description: {
                                        content: p
                                    }
                                } : null, {
                                    title: {
                                        content: Tt(d, "string_value", "title")
                                    }
                                })
                            }, o[M.DETAILS_SECONDARY] = {
                                type: G,
                                data: Object.assign({
                                    destination: M.DESTINATION_SECONDARY
                                }, p ? {
                                    description: {
                                        content: p
                                    }
                                } : null, {
                                    title: {
                                        content: Tt(d, "string_value", "title")
                                    }
                                })
                            }, o)
                        }
                    }
                },
                qt = function(e) {
                    var t, a, n, r, i, o, s, l, d, c, _ = e.cardId,
                        u = e.cardType,
                        p = e.data,
                        m = e.cardContext,
                        I = yt(p, "image_value", "image_original"),
                        g = Tt(p, "string_value", "player_stream_url"),
                        T = yt(p, "image_value", "player_image_original"),
                        E = parseInt(Tt(p, "string_value", "player_width"), 10) / parseInt(Tt(p, "string_value", "player_height"), 10),
                        v = Tt(p, "string_value", "content_duration_seconds"),
                        y = Et(p, "boolean_value", "counts_are_final"),
                        b = Tt(p, "string_value", "selected_choice"),
                        h = Tt(p, "string_value", "end_datetime_utc"),
                        f = m.viewerUserId === m.tweetUserId,
                        A = "detail" === m.locationKey ? "normal" : "small",
                        S = function(e) {
                            var t = [1, 2, 3, 4].map((function(t) {
                                var a = Tt(p, "string_value", "choice" + t + "_label"),
                                    n = Tt(p, "string_value", "choice" + t + "_count");
                                return a ? {
                                    index: t,
                                    cta: a,
                                    count: parseInt(n, 10) || 0,
                                    destination: e
                                } : null
                            })).filter(Boolean);
                            return {
                                type: "poll",
                                data: Object.assign({
                                    choices: t,
                                    isAuthor: f,
                                    isFinal: y,
                                    resultTextSize: A,
                                    endDatetimeUtc: h
                                }, b ? {
                                    selectedChoice: parseInt(b, 10)
                                } : null, {
                                    totalVotes: t.reduce((function(e, t) {
                                        return e + t.count
                                    }), 0)
                                })
                            }
                        };
                    return {
                        layout: (t = {}, t[R] = {
                            size: "large",
                            chromeless: !0
                        }, t),
                        state: R,
                        card: {
                            id: _,
                            card_name: u,
                            card_url: Tt(p, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            fetch_updates: (a = {}, a[R] = !y, a),
                            components: (n = {}, n[R] = I || g ? [M.POLL, M.MEDIA] : [M.POLL], n[P] = I || g ? [M.POLL_STATIC, M.MEDIA_STATIC] : [M.POLL_STATIC], n),
                            components_data: Object.assign((r = {}, r[M.POLL] = S(M.DESTINATION), r[M.POLL_STATIC] = S(M.DESTINATION_STATIC), r), I ? (i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY
                                }
                            }, i[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY
                                }
                            }, i) : g ? (o = {}, o[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.VIDEO_ENTITY
                                }
                            }, o[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY_STATIC
                                }
                            }, o) : null),
                            destinations: (s = {}, s[M.DESTINATION] = {
                                type: B.ACTION,
                                data: {
                                    action_data: {
                                        persist: !0,
                                        type: "vote"
                                    },
                                    auth_required: !0,
                                    scribe: "vote",
                                    promoted_log: "poll_card_vote"
                                }
                            }, s[M.DESTINATION_STATIC] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: m.tweetPermalink || "https://twitter.com"
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, s),
                            media_entities: Object.assign({}, I ? (l = {}, l[M.IMAGE_ENTITY] = ht(I), l) : null, {}, g ? (d = {}, d[M.VIDEO_ENTITY] = Object.assign({
                                type: "video",
                                aspect_ratio: E,
                                content_id: Tt(p, "string_value", "player_content_id") || ft(g)
                            }, v ? {
                                duration_ms: 1e3 * parseInt(v, 10)
                            } : null, {
                                vmap_url: g,
                                poster_image: T,
                                publisher_id: Tt(p, "string_value", "player_owner_id") || m.tweetUserId,
                                variants: [{
                                    src: Tt(p, "string_value", "player_hls_url"),
                                    type: "application/x-mpegURL"
                                }]
                            }), d) : null, {}, g ? (c = {}, c[M.IMAGE_ENTITY_STATIC] = ht(T || {}), c) : null)
                        }
                    }
                },
                Kt = function(e) {
                    var t, a, n, r, i, o = e.cardId,
                        s = e.cardType,
                        l = e.data,
                        d = yt(l, "image_value", "promo_image_original");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t),
                        card: {
                            card_name: s,
                            card_url: Tt(l, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: o,
                            components: (a = {}, a[R] = [M.MEDIA, M.DETAILS, M.BUTTON_GROUP], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: Tt(l, "string_value", ["app_url", "card_url"])
                                    },
                                    scribe: "open_link",
                                    promoted_log: "install_app"
                                }
                            }, n),
                            media_entities: (r = {}, r[M.IMAGE_ENTITY] = ht(d), r),
                            components_data: (i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY,
                                    destination: M.DESTINATION
                                }
                            }, i[M.DETAILS] = {
                                type: G,
                                data: {
                                    destination: M.DESTINATION,
                                    title: {
                                        content: Tt(l, "string_value", "title")
                                    },
                                    footer: "App Store"
                                }
                            }, i[M.BUTTON_GROUP] = {
                                type: j,
                                data: {
                                    buttons: [{
                                        index: 0,
                                        cta: S.getCtaString(Tt(l, "string_value", "cta_key")),
                                        destination: M.DESTINATION
                                    }]
                                }
                            }, i)
                        }
                    }
                },
                Xt = function(e) {
                    var t, a, n, r, i, o, s = e.cardId,
                        l = e.cardType,
                        d = e.data,
                        c = e.cardContext,
                        _ = Tt(d, "string_value", "thank_you_url"),
                        u = yt(d, "image_value", ["cover_promo_image", "promo_image"]),
                        p = yt(d, "image_value", "promo_image"),
                        m = Tt(d, "string_value", "title"),
                        I = function(e) {
                            return ["one", "two", "three", "four"].map((function(t, a) {
                                var n = Tt(d, "string_value", "cta_" + t),
                                    r = Tt(d, "string_value", "cta_" + t + "_tweet");
                                return n && r ? {
                                    icon: "compose",
                                    index: a,
                                    cta: S.renderTweetActionLabel(n),
                                    tweet: r,
                                    destination: e
                                } : null
                            })).filter(Boolean)
                        },
                        g = I(M.DESTINATION),
                        T = I(M.DESTINATION_STATIC);
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t[L] = {
                            size: "large"
                        }, t),
                        card: {
                            card_name: l,
                            card_url: Tt(d, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: s,
                            components: {
                                default: [M.MEDIA, M.DETAILS, M.BUTTON_GROUP],
                                secondary: [M.MEDIA_SECONDARY, M.DETAILS_SECONDARY],
                                static: [M.MEDIA_STATIC, M.DETAILS_STATIC, M.BUTTON_GROUP_STATIC]
                            },
                            destinations: Object.assign((a = {}, a[M.DESTINATION] = {
                                type: B.ACTION,
                                data: {
                                    action_data: {
                                        next_state: L,
                                        persist: !0,
                                        type: "compose"
                                    },
                                    auth_required: !0,
                                    scribe: "click",
                                    promoted_log: "convo_button_click"
                                }
                            }, a), _ ? (n = {}, n[M.DESTINATION_SECONDARY] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: _,
                                        vanity: Tt(d, "string_value", ["thank_you_vanity_url", "thank_you_shortened_url", "thank_you_url"])
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n) : null, (r = {}, r[M.DESTINATION_STATIC] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: c.tweetPermalink || "https://twitter.com"
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, r)),
                            media_entities: (i = {}, i[M.IMAGE_ENTITY] = ht(u), i[M.IMAGE_ENTITY_SECONDARY] = ht(p), i),
                            components_data: (o = {}, o[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY
                                }
                            }, o[M.MEDIA_SECONDARY] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY_SECONDARY,
                                    destination: M.DESTINATION_SECONDARY
                                }
                            }, o[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY,
                                    destination: M.DESTINATION_STATIC
                                }
                            }, o[M.DETAILS] = {
                                type: G,
                                data: Object.assign({}, m ? {
                                    title: {
                                        content: m
                                    }
                                } : null)
                            }, o[M.DETAILS_SECONDARY] = {
                                type: G,
                                data: Object.assign({
                                    title: {
                                        content: Tt(d, "string_value", "thank_you_text")
                                    }
                                }, _ ? {
                                    destination: M.DESTINATION_SECONDARY
                                } : null)
                            }, o[M.DETAILS_STATIC] = {
                                type: G,
                                data: Object.assign({}, m ? {
                                    title: {
                                        content: m
                                    }
                                } : null)
                            }, o[M.BUTTON_GROUP] = {
                                type: j,
                                data: {
                                    buttons: g
                                }
                            }, o[M.BUTTON_GROUP_STATIC] = {
                                type: j,
                                data: {
                                    buttons: T
                                }
                            }, o)
                        }
                    }
                },
                Jt = function(e) {
                    var t, a, n, r, i, o, s, l = e.cardId,
                        d = e.cardType,
                        c = e.data,
                        _ = e.cardContext,
                        u = Tt(c, "string_value", "thank_you_url"),
                        p = yt(c, "image_value", ["cover_player_image_original", "player_image_original"]),
                        m = yt(c, "image_value", "player_image_original"),
                        I = yt(c, "image_value", "cover_promo_image_original"),
                        g = Tt(c, "string_value", "title"),
                        T = parseInt(Tt(c, "string_value", "cover_player_width"), 10) / parseInt(Tt(c, "string_value", "cover_player_height"), 10),
                        E = parseInt(Tt(c, "string_value", "player_width"), 10) / parseInt(Tt(c, "string_value", "player_height"), 10),
                        v = function(e) {
                            return ["one", "two", "three", "four"].map((function(t, a) {
                                var n = Tt(c, "string_value", "cta_" + t),
                                    r = Tt(c, "string_value", "cta_" + t + "_tweet");
                                return n && r ? {
                                    icon: "compose",
                                    index: a,
                                    cta: S.renderTweetActionLabel(n),
                                    tweet: r,
                                    destination: e
                                } : null
                            })).filter(Boolean)
                        },
                        y = v(M.DESTINATION),
                        b = v(M.DESTINATION_STATIC),
                        h = Tt(c, "string_value", "cover_player_stream_url"),
                        f = Tt(c, "string_value", "player_stream_url"),
                        A = Tt(c, "string_value", "player_hls_url"),
                        O = vt(c, "user_value", "site"),
                        C = Tt(c, "string_value", "content_duration_seconds"),
                        D = Tt(c, "string_value", "cover_content_duration_seconds");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t[L] = {
                            size: "large"
                        }, t[P] = {
                            size: "large"
                        }, t),
                        card: {
                            card_name: d,
                            card_url: Tt(c, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: l,
                            components: {
                                default: [M.MEDIA, M.DETAILS, M.BUTTON_GROUP],
                                secondary: [M.MEDIA_SECONDARY, M.DETAILS_SECONDARY],
                                static: [M.MEDIA_STATIC, M.DETAILS_STATIC, M.BUTTON_GROUP_STATIC]
                            },
                            destinations: Object.assign((a = {}, a[M.DESTINATION] = {
                                type: B.ACTION,
                                data: {
                                    action_data: {
                                        next_state: L,
                                        persist: !0,
                                        type: "compose"
                                    },
                                    auth_required: !0,
                                    scribe: "click",
                                    promoted_log: "convo_button_click"
                                }
                            }, a), u ? (n = {}, n[M.DESTINATION_SECONDARY] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: u,
                                        vanity: Tt(c, "string_value", ["thank_you_vanity_url", "thank_you_shortened_url", "thank_you_url"])
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n) : null, (r = {}, r[M.DESTINATION_STATIC] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: _.tweetPermalink || "https://twitter.com"
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, r)),
                            media_entities: Object.assign({}, h ? (i = {}, i[M.VIDEO_ENTITY] = Object.assign({
                                type: "video",
                                aspect_ratio: T,
                                content_id: ft(h)
                            }, D ? {
                                duration_ms: 1e3 * parseInt(D, 10)
                            } : null, {
                                vmap_url: h,
                                poster_image: p,
                                publisher_id: O ? O.id_str : _.tweetUserId
                            }), i) : null, (o = {}, o[M.VIDEO_ENTITY_SECONDARY] = Object.assign({
                                type: "video",
                                aspect_ratio: E,
                                content_id: ft(f)
                            }, C ? {
                                duration_ms: 1e3 * parseInt(C, 10)
                            } : null, {
                                vmap_url: f,
                                poster_image: m,
                                publisher_id: O ? O.id_str : _.tweetUserId
                            }, A ? {
                                variants: [{
                                    src: A,
                                    type: "application/x-mpegURL"
                                }]
                            } : null), o[M.IMAGE_ENTITY] = ht(I || {}), o[M.IMAGE_ENTITY_STATIC] = ht(m || {}), o)),
                            components_data: (s = {}, s[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: h ? M.VIDEO_ENTITY : I ? M.IMAGE_ENTITY : M.VIDEO_ENTITY_SECONDARY
                                }
                            }, s[M.MEDIA_SECONDARY] = {
                                type: Y,
                                data: {
                                    id: M.VIDEO_ENTITY_SECONDARY
                                }
                            }, s[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: m ? M.IMAGE_ENTITY_STATIC : M.IMAGE_ENTITY,
                                    destination: M.DESTINATION_STATIC,
                                    aspect_ratio: m ? void 0 : 1.91
                                }
                            }, s[M.DETAILS] = {
                                type: G,
                                data: Object.assign({}, g ? {
                                    title: {
                                        content: g
                                    }
                                } : null)
                            }, s[M.DETAILS_SECONDARY] = {
                                type: G,
                                data: Object.assign({
                                    title: {
                                        content: Tt(c, "string_value", "thank_you_text")
                                    }
                                }, u ? {
                                    destination: M.DESTINATION_SECONDARY
                                } : null)
                            }, s[M.DETAILS_STATIC] = {
                                type: G,
                                data: Object.assign({}, g ? {
                                    title: {
                                        content: g
                                    }
                                } : null)
                            }, s[M.BUTTON_GROUP] = {
                                type: j,
                                data: {
                                    buttons: y
                                }
                            }, s[M.BUTTON_GROUP_STATIC] = {
                                type: j,
                                data: {
                                    buttons: b
                                }
                            }, s)
                        }
                    }
                },
                Zt = function(e) {
                    var t, a, n, r, i, o = e.cardId,
                        s = e.cardType,
                        l = e.data,
                        d = e.cardContext,
                        c = yt(l, "image_value", "player_image_original"),
                        _ = Tt(l, "string_value", "player_hls_url"),
                        u = parseInt(Tt(l, "string_value", "player_width"), 10) / parseInt(Tt(l, "string_value", "player_height"), 10),
                        p = Tt(l, "string_value", "content_duration_seconds");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t[P] = {
                            size: "large"
                        }, t),
                        card: {
                            card_name: s,
                            card_url: Tt(l, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: o,
                            components: (a = {}, a[R] = [M.MEDIA, M.DETAILS], a[P] = [M.MEDIA_STATIC, M.DETAILS], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: Tt(l, "string_value", ["website_shortened_url", "website_url", "card_url"]),
                                        vanity: Tt(l, "string_value", ["vanity_url", "website_shortened_url", "website_url", "card_url"])
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: (r = {}, r[M.IMAGE_ENTITY] = ht(c), r[M.VIDEO_ENTITY] = Object.assign({
                                type: "video",
                                aspect_ratio: u,
                                content_id: Tt(l, "string_value", "player_content_id") || ft(c.url)
                            }, p ? {
                                duration_ms: 1e3 * parseInt(p, 10)
                            } : null, {
                                vmap_url: Tt(l, "string_value", "player_stream_url"),
                                poster_image: c,
                                publisher_id: Tt(l, "string_value", "player_owner_id") || d.tweetUserId
                            }, _ ? {
                                variants: [{
                                    src: _,
                                    type: "application/x-mpegURL"
                                }]
                            } : null), r),
                            components_data: (i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.VIDEO_ENTITY,
                                    aspect_ratio: u
                                }
                            }, i[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY,
                                    aspect_ratio: u,
                                    destination: M.DESTINATION
                                }
                            }, i[M.DETAILS] = {
                                type: G,
                                data: {
                                    destination: M.DESTINATION,
                                    title: {
                                        content: Tt(l, "string_value", "title")
                                    }
                                }
                            }, i)
                        }
                    }
                },
                Qt = function(e) {
                    var t, a, n, r, i, o = e.cardId,
                        s = e.cardType,
                        l = e.data,
                        d = yt(l, "image_value", "promo_image_original");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t),
                        card: {
                            card_name: s,
                            card_url: Tt(l, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: o,
                            components: (a = {}, a[R] = [M.MEDIA, M.DETAILS], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: Tt(l, "string_value", ["website_shortened_url", "website_url", "card_url"]),
                                        vanity: Tt(l, "string_value", ["vanity_url", "website_shortened_url", "website_url", "card_url"])
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: (r = {}, r[M.IMAGE_ENTITY] = ht(d), r),
                            components_data: (i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY,
                                    destination: M.DESTINATION
                                }
                            }, i[M.DETAILS] = {
                                type: G,
                                data: {
                                    destination: M.DESTINATION,
                                    title: {
                                        content: Tt(l, "string_value", "title")
                                    }
                                }
                            }, i)
                        }
                    }
                },
                $t = function(e) {
                    var t, a, n, r, i, o = e.cardId,
                        s = e.cardType,
                        l = e.data,
                        d = yt(l, "image_value", "thumbnail_image_original"),
                        c = Tt(l, "string_value", "description");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "small"
                        }, t),
                        card: {
                            card_name: s,
                            card_url: Tt(l, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: o,
                            components: (a = {}, a[R] = [M.MEDIA, M.DETAILS], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: Tt(l, "string_value", "card_url"),
                                        vanity: Tt(l, "string_value", ["vanity_url", "card_url"])
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: Object.assign({}, d ? (r = {}, r[M.IMAGE_ENTITY] = ht(d), r) : null),
                            components_data: (i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: d ? M.IMAGE_ENTITY : null,
                                    aspect_ratio: 1,
                                    destination: M.DESTINATION
                                }
                            }, i[M.DETAILS] = {
                                type: G,
                                data: Object.assign({
                                    destination: M.DESTINATION
                                }, c ? {
                                    description: {
                                        content: c
                                    }
                                } : null, {
                                    title: {
                                        content: Tt(l, "string_value", "title")
                                    }
                                })
                            }, i)
                        }
                    }
                },
                ea = function(e) {
                    var t, a, n, r, i, o = e.cardId,
                        s = e.cardType,
                        l = e.data,
                        d = yt(l, "image_value", "summary_photo_image_original"),
                        c = Tt(l, "string_value", "description");
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: d ? "large" : "small"
                        }, t),
                        card: {
                            card_name: s,
                            card_url: Tt(l, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: o,
                            components: (a = {}, a[R] = [M.MEDIA, M.DETAILS], a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: Tt(l, "string_value", "card_url"),
                                        vanity: Tt(l, "string_value", ["vanity_url", "card_url"])
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: Object.assign({}, d ? (r = {}, r[M.IMAGE_ENTITY] = ht(d), r) : null),
                            components_data: (i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: d ? M.IMAGE_ENTITY : null,
                                    aspect_ratio: d ? 1.91 : 1,
                                    destination: M.DESTINATION
                                }
                            }, i[M.DETAILS] = {
                                type: G,
                                data: Object.assign({
                                    destination: M.DESTINATION
                                }, c ? {
                                    description: {
                                        content: c
                                    }
                                } : null, {
                                    title: {
                                        content: Tt(l, "string_value", "title")
                                    }
                                })
                            }, i)
                        }
                    }
                },
                ta = function(e) {
                    var t, a, n, r, i, o, s, l, d, c = e.cardId,
                        _ = e.cardType,
                        u = e.data,
                        p = Lt(u),
                        m = p.app_store_data,
                        I = p.components,
                        g = p.component_objects,
                        T = p.destination_objects,
                        E = p.media_entities,
                        v = p.users,
                        y = function(e, t) {
                            return Object.keys(e).reduce((function(a, n) {
                                var r = e[n];
                                if ("app_store_with_docked_media" === r.type || "app_store" === r.type) {
                                    var i = Rt(t[r.data.app_id]);
                                    a[n] = {
                                        type: "browser",
                                        data: {
                                            url_data: {
                                                url: i ? i.url : "https://twitter.com"
                                            },
                                            scribe: "unified_card_app_store_open_link",
                                            promoted_log: "unified_card_component_app_store_click"
                                        }
                                    }
                                } else a[n] = Object.assign({}, r, {
                                    data: Object.assign({}, r.data, {
                                        scribe: "open_link",
                                        promoted_log: "unified_card_component_url_click"
                                    })
                                });
                                return a
                            }), {})
                        }(T, m),
                        b = I.find((function(e) {
                            return g[e] && "details" === g[e].type
                        })),
                        h = b && "details" === g[b].type ? g[b] : null,
                        f = I.find((function(e) {
                            return g[e] && "app_store_details" === g[e].type
                        })),
                        A = f && "app_store_details" === g[f].type ? g[f] : null,
                        O = function(e, t) {
                            var a, n, r = e ? e.data.destination : void 0;
                            if (e)
                                if ("details" === e.type) a = Object.assign({}, e.data.title);
                                else if ("app_store_details" === e.type) {
                                var i = e.data.app_id,
                                    o = Rt(t[i]) || {};
                                a = o.title, n = o.category ? o.category.content : void 0
                            }
                            return {
                                type: "details",
                                data: {
                                    title: a,
                                    footer: n,
                                    destination: r
                                }
                            }
                        }(h || A || void 0, m),
                        C = b || f,
                        D = I.find((function(e) {
                            return g[e] && "twitter_list_details" === g[e].type
                        })),
                        N = D && "twitter_list_details" === g[D].type ? function(e, t) {
                            var a = e.data.destination,
                                n = Object.assign({}, e.data.name),
                                r = t[e.data.user_id],
                                i = e.data.member_count;
                            return {
                                type: W,
                                data: {
                                    title: n,
                                    destination: a,
                                    memberCount: i,
                                    attribution: r
                                }
                            }
                        }(g[D], v) : null,
                        w = I.find((function(e) {
                            return g[e] && "button_group" === g[e].type
                        })),
                        L = w && "button_group" === g[w].type ? {
                            type: j,
                            data: {
                                buttons: g[w].data.buttons.map((function(e, t) {
                                    return {
                                        index: t + 1,
                                        icon: e.icon_type,
                                        destination: e.destination,
                                        cta: "cta" === e.type ? S.getCtaString(e.action) : e.text.content,
                                        is_rtl: "custom" === e.type ? e.text.is_rtl : void 0
                                    }
                                }))
                            }
                        } : null,
                        x = I.find((function(e) {
                            return g[e] && "swipeable_media" === g[e].type
                        })),
                        B = x && "swipeable_media" === g[x].type ? {
                            type: U,
                            data: {
                                media_list: g[x].data.media_list
                            }
                        } : null,
                        G = I.find((function(e) {
                            return g[e] && "media" === g[e].type
                        })),
                        z = G && "media" === g[G].type ? g[G] : null,
                        V = Object.keys(E).reduce((function(e, t) {
                            var a = E[t];
                            return e[t] = Object.assign({}, a, {
                                type: "video" === a.type ? "uc_video" : a.type
                            }), e
                        }), {}),
                        F = z ? V[z.data.id] : null,
                        H = F ? F.original_info.width / F.original_info.height : null,
                        q = Object.keys(E).reduce((function(e, t) {
                            var a = E[t];
                            return e[Pt(t)] = {
                                media_url_https: a.media_url_https,
                                type: "photo",
                                original_info: a.original_info
                            }, e
                        }), {}),
                        K = F && "uc_video" === F.type,
                        X = B && B.data.media_list.some((function(e) {
                            return e.id && "uc_video" === V[e.id].type
                        })),
                        J = [].concat(Be()(K ? [M.MEDIA_STATIC] : []), Be()(X ? [M.SWIPEABLE_MEDIA_STATIC] : []), Be()(I.filter((function(e) {
                            return !(K && e === G || X && e === x)
                        }))));
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t[P] = {
                            size: "large"
                        }, t),
                        card: {
                            card_name: _,
                            card_url: Tt(u, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: c,
                            components: (a = {}, a[R] = I, a[P] = J, a),
                            destinations: y,
                            media_entities: Object.assign({}, V, {}, q),
                            components_data: Object.assign({}, O && C ? (n = {}, n[C] = O, n) : null, {}, L && w ? (r = {}, r[w] = L, r) : null, {}, B && x ? (i = {}, i[x] = B, i) : null, {}, N && D ? (o = {}, o[D] = N, o) : null, {}, z && G ? (s = {}, s[G] = {
                                type: Y,
                                data: Object.assign({}, z.data)
                            }, s) : null, {}, K && z ? (l = {}, l[M.MEDIA_STATIC] = {
                                type: Y,
                                data: Object.assign({
                                    destination: z.data.destination
                                }, H ? {
                                    aspect_ratio: H
                                } : null, {
                                    id: Pt(z.data.id),
                                    overlay: {
                                        type: k.PLAY
                                    }
                                })
                            }, l) : null, {}, X && B ? (d = {}, d[M.SWIPEABLE_MEDIA_STATIC] = {
                                type: U,
                                data: {
                                    media_list: B.data.media_list.map((function(e) {
                                        return Object.assign({}, e, {
                                            id: e.id && Pt(e.id),
                                            overlay: {
                                                type: k.PLAY
                                            }
                                        })
                                    }))
                                }
                            }, d) : null)
                        }
                    }
                },
                aa = function(e) {
                    var t, a, n, r, i, o, s, l = e.cardId,
                        d = e.cardType,
                        c = e.data,
                        _ = e.cardContext,
                        u = e.users,
                        p = yt(c, "image_value", "player_image_original"),
                        m = Tt(c, "string_value", "player_stream_url"),
                        I = parseInt(Tt(c, "string_value", "player_width"), 10) / parseInt(Tt(c, "string_value", "player_height"), 10),
                        g = Tt(c, "string_value", "content_duration_seconds"),
                        T = function(e) {
                            return [1, 2, 3, 4].map((function(t) {
                                var a = Tt(c, "string_value", "cta" + t),
                                    n = Tt(c, "string_value", "cta" + t + "_wm_id");
                                return a && n ? {
                                    icon: "dm",
                                    index: t,
                                    cta: a,
                                    wm_id: n,
                                    destination: e
                                } : null
                            })).filter(Boolean)
                        },
                        E = T(M.DESTINATION),
                        v = T(M.DESTINATION_STATIC),
                        y = vt(c, "user_value", "recipient"),
                        b = y && u[y.id_str],
                        h = y.id_str !== _.tweetUserId && b;
                    return {
                        state: R,
                        layout: (t = {}, t[R] = {
                            size: "large"
                        }, t[P] = {
                            size: "large"
                        }, t),
                        card: {
                            card_name: d,
                            card_url: Tt(c, "string_value", "card_url"),
                            on_visibility: {
                                scribe: "show"
                            },
                            id: l,
                            components: (a = {}, a[R] = [M.MEDIA].concat(Be()(h ? [M.DETAILS] : []), [M.BUTTON_GROUP]), a[P] = [M.MEDIA_STATIC].concat(Be()(h ? [M.DETAILS] : []), [M.BUTTON_GROUP_STATIC]), a),
                            destinations: (n = {}, n[M.DESTINATION] = {
                                type: B.ACTION,
                                data: {
                                    action_data: {
                                        persist: !1,
                                        type: "dm",
                                        recipient: y.id_str
                                    },
                                    auth_required: !0,
                                    scribe: "click",
                                    promoted_log: "dm_button_click"
                                }
                            }, n[M.DESTINATION_STATIC] = {
                                type: B.BROWSER,
                                data: {
                                    url_data: {
                                        url: _.tweetPermalink || "https://twitter.com"
                                    },
                                    scribe: "open_link",
                                    promoted_log: "card_url_click"
                                }
                            }, n),
                            media_entities: (r = {}, r[M.IMAGE_ENTITY] = ht(p || {}), r[M.VIDEO_ENTITY] = Object.assign({
                                type: "video",
                                aspect_ratio: I,
                                content_id: Tt(c, "string_value", "player_content_id") || ft(m)
                            }, g ? {
                                duration_ms: 1e3 * parseInt(g, 10)
                            } : null, {
                                vmap_url: m,
                                poster_image: p,
                                publisher_id: Tt(c, "string_value", "player_owner_id") || _.tweetUserId,
                                variants: [{
                                    src: Tt(c, "string_value", "player_hls_url"),
                                    type: "application/x-mpegURL"
                                }]
                            }), r),
                            components_data: Object.assign((i = {}, i[M.MEDIA] = {
                                type: Y,
                                data: {
                                    id: M.VIDEO_ENTITY
                                }
                            }, i[M.MEDIA_STATIC] = {
                                type: Y,
                                data: {
                                    id: M.IMAGE_ENTITY,
                                    destination: M.DESTINATION_STATIC
                                }
                            }, i), h ? (o = {}, o[M.DETAILS] = {
                                type: G,
                                data: {
                                    attribution: b
                                }
                            }, o) : null, (s = {}, s[M.BUTTON_GROUP] = {
                                type: j,
                                data: {
                                    buttons: E
                                }
                            }, s[M.BUTTON_GROUP_STATIC] = {
                                type: j,
                                data: {
                                    buttons: v
                                }
                            }, s))
                        }
                    }
                },
                na = function(e) {
                    return bt(e, (function(e) {
                        return e("player_width").and("player_height").and("amplify_url_vmap").and("amplify_content_id")
                    }))
                },
                ra = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("title")
                    }))
                },
                ia = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("title").and("player_width").and("player_height").and("player_image_original").and("player_stream_url")
                    }))
                },
                oa = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("title").and("partner").and("source")
                    }))
                },
                sa = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("broadcast_id").and("broadcast_title")
                    }))
                },
                la = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("title")
                    }))
                },
                da = function(e) {
                    return bt(e, (function(e) {
                        return e("recipient").and("cta1").and("cta1_wm_id").and("image_original")
                    }))
                },
                ca = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("event_id").and("event_title")
                    }))
                },
                _a = function(e, t) {
                    return bt(e, (function(e) {
                        return e("recipient").and("cta")
                    })) && t.tweetUserId === vt(e, "user_value", "recipient").id_str
                },
                ua = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and((function(e) {
                            return e("photo_image").or("cover_format_media_url")
                        })).and("id").and((function(e) {
                            return e("title").or("author").or("subcategory_string")
                        }))
                    }))
                },
                pa = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("broadcast_width").and("broadcast_height").and("id").and((function(e) {
                            return e("broadcaster_twitter_id").or("title")
                        }))
                    }))
                },
                ma = function(e) {
                    return Nt(e) ? bt(e, (function(e) {
                        return e("card_url").and("title").and("player_width").and("player_height").and("player_image_original").and("player_stream_url").and("player_stream_content_type")
                    })) : bt(e, (function(e) {
                        return e("card_url").and("player_url").and("player_height").and("player_width").and("title")
                    }))
                },
                Ia = function(e) {
                    return bt(e, (function(e) {
                        return e("choice1_label").and("choice2_label").and("end_datetime_utc").and("counts_are_final").and("api").and("card_url")
                    }))
                },
                ga = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("title").and("promo_image_original").and("cta_key")
                    }))
                },
                Ta = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("thank_you_text").and("card_id").and("promo_image").and("cta_one").and("cta_one_tweet")
                    }))
                },
                Ea = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("thank_you_text").and("card_id").and("cta_one").and("cta_one_tweet").and("player_width").and("player_height").and("player_stream_url")
                    }))
                },
                va = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("title").and("player_width").and("player_height").and("player_image_original").and("player_stream_url")
                    }))
                },
                ya = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("title").and("promo_image_original")
                    }))
                },
                ba = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("title")
                    }))
                },
                ha = function(e) {
                    return bt(e, (function(e) {
                        return e("card_url").and("title")
                    }))
                },
                fa = function(e) {
                    var t = Lt(e);
                    return !!(t && t.components && t.component_objects && t.components.length && t.components.every((function(e) {
                        return t.component_objects[e] && t.component_objects[e].type in Mt
                    })))
                },
                Aa = function(e) {
                    return bt(e, (function(e) {
                        return e("recipient").and("cta1").and("cta1_wm_id").and("player_width").and("player_height").and("player_stream_url")
                    }))
                },
                Sa = function(e, t, a) {
                    var n, r = (n = {}, n[w.AMPLIFY] = na, n[w.APP] = ra, n[w.APPPLAYER] = ia, n[w.AUDIO] = oa, n[w.BROADCAST] = sa, n[w.DIRECT_STORE_LINK_APP] = la, n[w.IMAGE_DIRECT_MESSAGE] = da, n[w.LIVE_EVENT] = ca, n[w.MESSAGE_ME] = _a, n[w.MOMENT] = ua, n[w.PERISCOPE_BROADCAST] = pa, n[w.PLAYER] = ma, n[w.POLL_2_CHOICE_TEXT] = Ia, n[w.POLL_3_CHOICE_TEXT] = Ia, n[w.POLL_4_CHOICE_TEXT] = Ia, n[w.POLL_2_CHOICE_IMAGE] = Ia, n[w.POLL_3_CHOICE_IMAGE] = Ia, n[w.POLL_4_CHOICE_IMAGE] = Ia, n[w.POLL_2_CHOICE_VIDEO] = Ia, n[w.POLL_3_CHOICE_VIDEO] = Ia, n[w.POLL_4_CHOICE_VIDEO] = Ia, n[w.PROMO_IMAGE_APP] = ga, n[w.PROMO_IMAGE_CONVO] = Ta, n[w.PROMO_VIDEO_CONVO] = Ea, n[w.PROMO_VIDEO_WEBSITE] = va, n[w.PROMO_WEBSITE] = ya, n[w.SUMMARY] = ba, n[w.SUMMARY_LARGE_IMAGE] = ha, n[w.UNIFIED_CARD] = fa, n[w.VIDEO_DIRECT_MESSAGE] = Aa, n)[e];
                    return !!r && r(t, a)
                },
                Oa = ((ut = {})[w.AMPLIFY] = xt, ut[w.APP] = kt, ut[w.APPPLAYER] = Bt, ut[w.AUDIO] = Yt, ut[w.BROADCAST] = Gt, ut[w.DIRECT_STORE_LINK_APP] = jt, ut[w.IMAGE_DIRECT_MESSAGE] = Ut, ut[w.LIVE_EVENT] = Wt, ut[w.MESSAGE_ME] = zt, ut[w.MOMENT] = Vt, ut[w.PERISCOPE_BROADCAST] = Ft, ut[w.PLAYER] = Ht, ut[w.POLL_2_CHOICE_TEXT] = qt, ut[w.POLL_3_CHOICE_TEXT] = qt, ut[w.POLL_4_CHOICE_TEXT] = qt, ut[w.POLL_2_CHOICE_IMAGE] = qt, ut[w.POLL_3_CHOICE_IMAGE] = qt, ut[w.POLL_4_CHOICE_IMAGE] = qt, ut[w.POLL_2_CHOICE_VIDEO] = qt, ut[w.POLL_3_CHOICE_VIDEO] = qt, ut[w.POLL_4_CHOICE_VIDEO] = qt, ut[w.PROMO_IMAGE_APP] = Kt, ut[w.PROMO_IMAGE_CONVO] = Xt, ut[w.PROMO_VIDEO_CONVO] = Jt, ut[w.PROMO_VIDEO_WEBSITE] = Zt, ut[w.PROMO_WEBSITE] = Qt, ut[w.SUMMARY] = $t, ut[w.SUMMARY_LARGE_IMAGE] = ea, ut[w.UNIFIED_CARD] = ta, ut[w.VIDEO_DIRECT_MESSAGE] = aa, ut),
                Ca = function(e, t) {
                    var a = e.binding_values,
                        n = e.name,
                        r = e.url,
                        i = e.users,
                        o = void 0 === i ? {} : i,
                        s = Oa[n];
                    return Sa(n, a, t) && s ? s({
                        cardId: r,
                        cardType: n,
                        data: a,
                        cardContext: t,
                        users: o
                    }) : null
                },
                Da = function(e) {
                    function t(t) {
                        var a;
                        a = e.call(this, t) || this, h()(E()(a), "_updateCardState", (function(e) {
                            a.setState({
                                state: e
                            })
                        })), h()(E()(a), "_scribeCardAction", (function(e) {
                            var t = e.action,
                                n = e.componentType,
                                r = e.ctaIndex,
                                i = e.isAuthRequired,
                                o = a.state.card,
                                s = a.props.onScribeEvent;
                            o && s && s({
                                action: t,
                                componentType: n,
                                cardName: o.card_name,
                                cardUrl: o.card_url,
                                ctaIndex: r,
                                isMessageMe: o.card_name === w.MESSAGE_ME,
                                isAuthRequired: i
                            })
                        })), h()(E()(a), "_requestCardUpdate", (function() {
                            var e = a.props.requestCardUpdate,
                                t = a.state.card;
                            e && t && e({
                                url: t.id,
                                name: t.card_name
                            })
                        }));
                        var n = a._convertCard(t);
                        return n && (a.state = n), a
                    }
                    y()(t, e);
                    var a = t.prototype;
                    return a.componentDidMount = function() {
                        var e = this.state.card;
                        e && this._scribeCardAction({
                            action: e.on_visibility.scribe,
                            componentType: "card"
                        })
                    }, a.UNSAFE_componentWillReceiveProps = function(e) {
                        this.setState(this._convertCard(e))
                    }, a.render = function() {
                        var e = this.state,
                            a = e.card,
                            n = e.state,
                            r = this.props,
                            i = r.cardContext,
                            o = r.dmSentOrReceived,
                            s = r.isDataSaverEnabled,
                            l = r.isPromoted,
                            d = r.onEventReminderClick,
                            c = r.onPollVote,
                            _ = r.onPromotedLogEvent,
                            u = r.onScribeEvent,
                            p = r.promotedContent,
                            I = r.requestCardUpdate,
                            T = r.withSquareBottomBorderRadius;
                        if (!a) return null;
                        var E = this._getCurrentLayout(),
                            v = this._getDetailData(),
                            y = this._getTwitterListDetailsData(),
                            b = this._getMediaData(),
                            h = this._getPollData(),
                            f = this._getButtonsData(),
                            A = this._getSwipeableMediaData(),
                            S = a.fetch_updates,
                            O = this.props.withInteractiveStyling && !!(v && v.destination || y && y.destination),
                            D = Object.assign({
                                dmSentOrReceived: o,
                                locationKey: i.locationKey,
                                withInteractiveStyling: O,
                                withSquareBottomBorderRadius: T
                            }, v ? {
                                details: v
                            } : null, {}, b ? {
                                media: b
                            } : null),
                            N = I && S && S[n],
                            w = b && b.mediaEntity && "photo" === b.mediaEntity.type,
                            M = "small" === E.size || s && v && !f && w && !l;
                        return m.createElement(t.Context.Provider, {
                            value: {
                                card: a,
                                isDataSaverEnabled: s,
                                isPromoted: l,
                                media: b,
                                promotedContent: p,
                                onEventReminderClick: d,
                                onPollVote: c,
                                onPromotedLogEvent: _,
                                onScribeEvent: u,
                                scribeCardAction: this._scribeCardAction,
                                updateCardState: this._updateCardState
                            }
                        }, N ? m.createElement(C, {
                            requestCardUpdate: this._requestCardUpdate
                        }) : null, M ? m.createElement(It, g()({}, D, {
                            reverse: E.reverse
                        })) : m.createElement(ct, g()({}, D, f ? {
                            buttons: f
                        } : null, A ? {
                            swipeableMedia: A
                        } : null, h ? {
                            poll: h
                        } : null, y ? {
                            listDetails: y
                        } : null, {
                            chromeless: E.chromeless,
                            renderVideoPlayer: this.props.renderVideoPlayer
                        })))
                    }, a._getCurrentLayout = function() {
                        var e = this.state,
                            t = e.layout,
                            a = e.state;
                        return t[this.props.isDataSaverEnabled ? x : a] || t[R]
                    }, a._getButtonsData = function() {
                        var e = this._getComponent("button_group");
                        return e ? e.data.buttons : null
                    }, a._getSwipeableMediaData = function() {
                        var e = this.state.card,
                            t = this._getComponent("swipeable_media"),
                            a = t && t.data;
                        return a && a.media_list ? a.media_list.map((function(t) {
                            return Object.assign({}, t, {
                                media_entity: t && t.id && e ? e.media_entities[t.id] : void 0
                            })
                        })) : null
                    }, a._getDetailData = function() {
                        var e = this._getComponent("details"),
                            t = e && e.data;
                        if (!t) return null;
                        if (t.destination) {
                            var a = this._getVanityText(t.destination);
                            t.vanity = a || void 0
                        }
                        return t
                    }, a._getTwitterListDetailsData = function() {
                        var e = this._getComponent("twitter_list_details");
                        return e && e.data || null
                    }, a._getMediaData = function() {
                        var e = this.state.card,
                            t = this._getComponent("media"),
                            a = t && t.data,
                            n = a && a.id && e ? e.media_entities[a.id] : void 0,
                            r = a && a.overlay,
                            i = a && a.aspect_ratio;
                        return a ? Object.assign({}, a.destination ? {
                            destination: a.destination
                        } : null, {
                            aspect_ratio: i,
                            mediaEntity: n,
                            overlay: r
                        }) : void 0
                    }, a._getPollData = function() {
                        var e = this._getComponent("poll");
                        return e ? e.data : null
                    }, a._getComponent = function(e) {
                        var t = this.state,
                            a = t.card,
                            n = t.state,
                            r = this.props.isDataSaverEnabled;
                        if (!a) throw new Error("No card data available");
                        var i = r ? x : n,
                            o = (a.components[i] || a.components[R]).map((function(e) {
                                return a.components_data[e]
                            })).find((function(t) {
                                return t.type === e
                            }));
                        return o || void 0
                    }, a._getVanityText = function(e) {
                        var t = this.state.card;
                        if (t) {
                            var a = t.destinations[e];
                            if (a) switch (a.type) {
                                case B.BROWSER:
                                case B.BROWSER_WITH_DOCKED_MEDIA:
                                case B.BROWSER_WITH_MEDIA:
                                    return a.data.url_data.vanity;
                                case B.ACTION:
                                    return a.data.action_data.vanity;
                                default:
                                    return
                            }
                        }
                    }, a._convertCard = function(e) {
                        var t = e.card,
                            a = e.cardState,
                            n = e.cardContext,
                            r = Ca(t, n),
                            i = a || !!this.state && this.state.state || r && r.state || void 0;
                        return Object.assign({}, r, {
                            state: i
                        })
                    }, t
                }(m.Component);
            h()(Da, "defaultProps", {
                isDataSaverEnabled: !1,
                isPromoted: !1,
                withInteractiveStyling: !0
            }), h()(Da, "Context", m.createContext(Object.freeze({}))), Da.propTypes = {};
            var Na = Da,
                wa = a("SMZj"),
                Ma = a("Tb0w"),
                Ra = a("6rlp"),
                La = a("vjRr"),
                Pa = a("rxPX"),
                xa = a("0KEI"),
                ka = a("P1r1"),
                Ba = a("oEOe"),
                Ya = a("/kEJ"),
                Ga = Ba.a("rweb/cards", ""),
                ja = function(e, t) {
                    var a = e.pre_live_slate_url,
                        n = e.scheduled_start_ms,
                        r = e.state,
                        i = e.status,
                        o = e.twitter_user_id,
                        s = e.user_display_name,
                        l = t.hw_card_binding_values;
                    return {
                        hw_card_binding_values: Object.assign({}, l, {
                            broadcast_state: {
                                type: "STRING",
                                string_value: r
                            },
                            broadcast_title: {
                                type: "STRING",
                                string_value: i
                            },
                            site: {
                                type: "USER",
                                user_value: {
                                    id_str: o
                                }
                            },
                            broadcaster_display_name: {
                                type: "STRING",
                                string_value: s
                            },
                            broadcast_scheduled_start_time: {
                                type: "STRING",
                                string_value: n
                            }
                        }, a ? {
                            broadcast_pre_live_slate: {
                                type: "IMAGE",
                                image_value: {
                                    url: a
                                }
                            }
                        } : null)
                    }
                },
                Ua = Object(Pa.a)().propsFromState({
                    cardState: function(e, t) {
                        return t.cardState || Ma.b(e, t.card.url)
                    },
                    isDataSaverEnabled: ka.j,
                    broadcastId: function(e, t) {
                        return t.card.binding_values.broadcast_id && "STRING" === t.card.binding_values.broadcast_id.type ? t.card.binding_values.broadcast_id.string_value : void 0
                    }
                }).propsFromActions({
                    createLocalApiErrorHandler: Object(xa.b)("CARD_CONTAINER"),
                    requestCardUpdate: La.a.fetchOne,
                    log: Ra.a,
                    updateBroadcastCard: function(e, t) {
                        return function(a, n, r) {
                            var i = r.api;
                            return Ba.b(a, {
                                params: {
                                    ids: [t]
                                },
                                request: i.Broadcasts.fetchBroadcast
                            })({
                                actionTypes: Ga,
                                context: "FETCH_BROADCAST",
                                meta: {}
                            }, (function(t) {
                                if (t) {
                                    var a, r = t.result.broadcasts[0],
                                        i = t.entities.broadcasts[r],
                                        o = La.a.select(n(), e);
                                    if (!o) return [];
                                    var s = ja(i, o);
                                    return [Object(Ya.b)({
                                        cards: (a = {}, a[e] = Object.assign({}, s), a)
                                    })]
                                }
                            }))
                        }
                    },
                    vote: La.a.vote,
                    remindMeButtonSubscribe: La.a.eventSubscribe,
                    remindMeButtonUnsubscribe: La.a.eventUnsubscribe
                }).withAnalytics({
                    element: "platform_card"
                }),
                Wa = a("TrHT"),
                za = a("wrlS"),
                Va = function(e, t, a) {
                    switch (e) {
                        case "card_url_click":
                            return {
                                event: "card_url_click"
                            };
                        case "install_app":
                            return {
                                event: "install_app"
                            };
                        case "dm_button_click":
                            return {
                                event: "card_url_click",
                                engagement_metadata: JSON.stringify({
                                    direct_message_card_details: {
                                        button_index: a
                                    }
                                })
                            };
                        case "convo_button_click":
                            return {
                                event: "card_url_click",
                                engagement_metadata: JSON.stringify({
                                    conversational_card_details: {
                                        button_index: a
                                    }
                                })
                            };
                        case "poll_card_vote":
                            return {
                                event: "poll_card_vote"
                            };
                        case "unified_card_component_url_click":
                            return Object.assign({
                                event: "unified_card",
                                uc_event: JSON.stringify({
                                    event: "click",
                                    component: t,
                                    destination: "browser"
                                })
                            }, "button_group" === t ? {
                                engagement_metadata: JSON.stringify({
                                    uc_button_group_details: {
                                        button_index: a
                                    }
                                })
                            } : null);
                        case "unified_card_component_app_store_click":
                            return {
                                event: "unified_card",
                                uc_event: JSON.stringify({
                                    event: "click",
                                    component: "details" === t ? "app_store_details" : t,
                                    destination: "app_store"
                                }),
                                engagement_metadata: JSON.stringify({
                                    uc_event_metadata: Object.assign({
                                        app_event: "install_app"
                                    }, "button_group" === t ? {
                                        button_index: a
                                    } : null)
                                })
                            };
                        default:
                            return null
                    }
                },
                Fa = a("Zb1g"),
                Ha = a("nT9l"),
                qa = a("aITJ"),
                Ka = !1,
                Xa = we.a.fb79efe3,
                Ja = we.a.daeffc96,
                Za = we.a.a0fdf14a,
                Qa = we.a.aff03b01,
                $a = we.a.g66535d9,
                en = we.a.bc305387,
                tn = we.a.f71cfb85,
                an = we.a.b1ac5af7,
                nn = we.a.e2ad5ae4,
                rn = we.a.j7f394d9,
                on = we.a.fba9ea70,
                sn = we.a.b79ffef4,
                ln = we.a.i7c776d5,
                dn = we.a.fc209bb7,
                cn = qa.a.isIOS() ? "ios" : qa.a.isAndroid() ? "android" : "other",
                _n = {},
                un = function(e) {
                    if (_n[e]) return _n[e];
                    var t = f.a.createLayoutCache();
                    return _n[e] = t, t
                },
                pn = function(e) {
                    return function(t, a, n) {
                        var r = 0 === t.indexOf("card://"),
                            i = a || !r ? "" + (a || "") + (a && !r ? " " : "") + (r ? "" : t) : null;
                        e.push(Object.assign({
                            pathname: "/compose/tweet"
                        }, i ? {
                            query: {
                                text: i
                            }
                        } : null, {
                            state: {
                                convoCardData: {
                                    cardId: t,
                                    cardUrl: r ? t : null,
                                    nextState: n
                                }
                            }
                        }))
                    }
                };

            function mn(e) {
                var t, a;
                Ka || (Ka = !0, O.init((t = e, a = t.history, [{
                    composeDirectMessage: function(e) {
                        var t = e.recipient,
                            n = e.welcomeMessageId,
                            r = e.messageText;
                        a.push({
                            pathname: "/messages/compose",
                            query: Object.assign({
                                recipient_id: t
                            }, n ? {
                                welcome_message_id: n
                            } : null, {}, r ? {
                                text: r
                            } : null)
                        })
                    },
                    composeTweet: pn(a),
                    getFetchIntervalSeconds: function() {
                        return 30
                    },
                    getCtaString: function(e) {
                        switch (e) {
                            case "play":
                                return Xa;
                            case "shop":
                                return Ja;
                            case "book":
                                return Za;
                            case "connect":
                                return Qa;
                            case "order":
                                return $a;
                            case "open":
                                return en;
                            case "install":
                            default:
                                return tn
                        }
                    },
                    getMessageMeString: function(e) {
                        switch (e) {
                            case "message_me_card_cta_1":
                                return an;
                            case "message_me_card_cta_3":
                                return rn;
                            case "message_me_card_cta_4":
                                return on;
                            case "message_me_card_cta_2":
                            default:
                                return nn
                        }
                    },
                    getMobileOS: function() {
                        return cn
                    },
                    renderImage: function(e, t, a, n, r) {
                        var i = e.uri,
                            o = e.width,
                            s = e.height,
                            l = n ? un(n) : void 0,
                            d = function(e) {
                                var a = e.useMinimumData;
                                return m.createElement(f.a, {
                                    accessibilityLabel: "",
                                    aspectMode: A.a.exact(t || 1),
                                    cropCandidates: r,
                                    image: {
                                        url: i,
                                        width: o || 1e3,
                                        height: s || 1e3
                                    },
                                    layoutCache: l,
                                    previewMode: a
                                })
                            };
                        return "preview" === a ? m.createElement(Ha.a, {
                            acceptLabel: ln,
                            renderContent: d,
                            resourceId: i
                        }) : d({
                            useMinimumData: !1
                        })
                    },
                    renderTwemojiText: function(e) {
                        return m.createElement(Te.b, null, e)
                    },
                    renderNumVotesLabel: function(e) {
                        return Fa.d({
                            count: e,
                            formattedCount: Fa.c(e)
                        })
                    },
                    renderFinalResultsLabel: function() {
                        return Fa.a
                    },
                    renderTimeLeftLabel: function(e) {
                        return Fa.b(e)
                    },
                    renderStartingTimeLabel: function(e) {
                        var t = new Date(parseInt(e, 10));
                        return sn({
                            date: dn(t)
                        })
                    }
                }])[0]))
            }
            var In = a("ZxDS"),
                gn = a("v6aA"),
                Tn = a("TzCa"),
                En = a("cFuS"),
                vn = a("Rp9C"),
                yn = a("Jkc4"),
                bn = a("XOJV"),
                hn = function(e, t) {
                    return t.media_tweet_id
                },
                fn = Object(Pa.a)().propsFromState({
                    videoTweetFetchStatus: function(e, t) {
                        var a = hn(0, t);
                        return a ? bn.a.selectFetchStatus(e, a) : void 0
                    },
                    videoTweet: bn.a.createHydratedTweetSelector(hn)
                }).propsFromActions({
                    createLocalApiErrorHandler: Object(xa.b)("EVENT_CARD_CONTEXT"),
                    fetchTweetIfNeeded: bn.a.fetchOneIfNeeded
                }),
                An = a("v//M"),
                Sn = a("W5XZ"),
                On = a("fUT7"),
                Cn = a("Modb"),
                Dn = a("lklz"),
                Nn = we.a.f0a19192,
                wn = fn(function(e) {
                    function t() {
                        for (var t, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(n)) || this, p()(d()(t), "_renderInlinePlayer", (function() {
                            var e, a = t.props,
                                n = a.aspect_ratio,
                                r = a.event_id,
                                i = a.media_tweet_id,
                                o = a.poster_image,
                                l = a.promotedContent,
                                d = a.videoTweet,
                                c = null == d ? void 0 : null === (e = d.extended_entities) || void 0 === e ? void 0 : e.media[0],
                                _ = Dn.b.forTweet(i);
                            return c ? m.createElement(Cn.a, s()({}, Object(Wa.a)(_, c, r), {
                                aspectRatio: n,
                                poster: o,
                                promotedContent: l
                            })) : null
                        })), p()(d()(t), "_handleFetchTweet", (function() {
                            var e = t.props,
                                a = e.createLocalApiErrorHandler,
                                n = e.fetchTweetIfNeeded,
                                r = e.media_tweet_id;
                            On.a.preload(), n(r).catch(a(Sn.a))
                        })), t
                    }
                    _()(t, e);
                    var a = t.prototype;
                    return a.componentDidMount = function() {
                        this._handleFetchTweet()
                    }, a.render = function() {
                        var e = this.props,
                            t = e.aspect_ratio,
                            a = e.media_tweet_id,
                            n = e.videoTweetFetchStatus;
                        return a ? m.createElement(D.a, {
                            ratio: t
                        }, m.createElement(Z.a, {
                            style: X.a.absoluteFill
                        }, m.createElement(An.a, {
                            accessibilityLabel: Nn,
                            fetchStatus: n,
                            onRequestRetry: this._handleFetchTweet,
                            render: this._renderInlinePlayer
                        }))) : null
                    }, t
                }(m.Component)),
                Mn = a("TnY3");
            a.d(t, "HWCard", (function() {
                return xn
            }));
            var Rn = Object(In.c)(window),
                Ln = we.a.j67b44cd,
                Pn = {
                    objectFitVideo: "cover"
                },
                xn = function(e) {
                    function t(t, a) {
                        var n;
                        return n = e.call(this, t, a) || this, p()(d()(n), "_getCardState", (function() {
                            var e = n.props,
                                t = e.cardState,
                                a = e.card;
                            return "player" !== a.name && "audio" !== a.name || !Rn ? t : "static"
                        })), p()(d()(n), "_updateBroadcastCard", (function(e) {
                            var t = e.url,
                                a = n.props,
                                r = a.broadcastId,
                                i = a.updateBroadcastCard,
                                o = a.createLocalApiErrorHandler;
                            r && i(t, r).catch(o())
                        })), p()(d()(n), "_handleRequestCardUpdate", (function() {
                            var e = n.context.loggedInUserId,
                                t = n.props,
                                a = t.card,
                                r = t.requestCardUpdate,
                                i = t.createLocalApiErrorHandler;
                            return a.name === wa.c.TwitterBroadcast ? n._updateBroadcastCard : e ? function(e) {
                                r(e).catch(i())
                            } : void 0
                        })), p()(d()(n), "_handlePromotedLogEvent", (function(e) {
                            var t = e.action,
                                a = e.componentType,
                                r = e.buttonIndex,
                                i = e.isAuthRequired,
                                o = n.props,
                                s = o.createLocalApiErrorHandler,
                                l = o.cardContext,
                                d = o.log,
                                c = o.promotedContent,
                                _ = n.context.loggedInUserId;
                            if ((!i || _) && c && l) {
                                var u = c.disclosure_type,
                                    p = c.impression_id;
                                d({
                                    disclosureType: u,
                                    itemId: l.tweetId,
                                    itemType: En.c.TWEET,
                                    params: Object.assign({
                                        impression_id: p
                                    }, Va(t, a, r))
                                }).catch(s())
                            }
                        })), p()(d()(n), "_handleScribeEvent", (function(e) {
                            var t = e.action,
                                a = e.componentType,
                                r = e.cardName,
                                i = e.cardUrl,
                                o = e.ctaIndex,
                                s = e.isMessageMe,
                                l = e.isAuthRequired,
                                d = n.props,
                                c = d.analytics,
                                _ = d.cardContext,
                                u = d.promotedContent,
                                p = n.context.loggedInUserId,
                                m = "unified_card_app_store_open_link" === t ? "open_link" : t,
                                I = u && "earned" !== u.disclosure_type ? u.impression_id : void 0;
                            l && !p || c.scribe({
                                action: m,
                                data: {
                                    items: [vn.a.getHWCardItem(Object.assign({
                                        componentType: a,
                                        cardName: r,
                                        cardUrl: i,
                                        ctaIndex: o
                                    }, _ && _.tweetId ? {
                                        tweetId: _.tweetId
                                    } : null, {}, _ && _.tweetUserId ? {
                                        tweetUserId: _.tweetUserId
                                    } : null, {}, s ? {
                                        viewingUserId: p
                                    } : null, {
                                        isUCAppInstall: "unified_card_app_store_open_link" === t,
                                        impressionId: I
                                    }))]
                                }
                            })
                        })), p()(d()(n), "_handlePollVote", (function(e) {
                            var t = e.choice,
                                a = e.cardId,
                                r = n.props,
                                i = r.cardContext.tweetId;
                            (0, r.vote)(a, {
                                selectedIndex: t,
                                tweetId: i
                            })
                        })), p()(d()(n), "_handleEventReminderClick", (function(e) {
                            var t = e.cardId,
                                a = e.eventId,
                                r = e.notificationId,
                                i = e.remindMe,
                                o = n.props,
                                s = o.remindMeButtonSubscribe,
                                l = o.remindMeButtonUnsubscribe;
                            i ? s(t, a, {
                                remind_me: i,
                                notification_id: r
                            }) : l(t, a, {
                                remind_me: i,
                                notification_id: r
                            })
                        })), p()(d()(n), "_renderVideoPlayer", (function(e, t, a) {
                            var r = n.props,
                                o = r.cardContext.tweetId,
                                l = r.promotedContent,
                                d = (l || {}).impression_id;
                            if ("live_broadcast" === e.type) {
                                var c = e.broadcast_id,
                                    _ = e.aspect_ratio,
                                    u = e.content_id,
                                    p = e.poster_image,
                                    I = e.timecode;
                                return m.createElement(Cn.a, {
                                    accessibilityLabel: Ln,
                                    aspectRatio: a || _,
                                    customOverlay: Tn.a,
                                    displayOptions: Pn,
                                    forceFullPreviewImage: "suboptimal" === t,
                                    poster: p,
                                    promotedContent: l,
                                    source: {
                                        contentId: u,
                                        videoId: Dn.b.forBroadcast(c, o, d)
                                    },
                                    timecode: I,
                                    videoType: "video"
                                })
                            }
                            if ("tweet_video" === e.type) return m.createElement(wn, s()({}, e, {
                                promotedContent: za.a.isTrue("live_event_vod_promoted_content_enabled") ? l : void 0
                            }));
                            if ("uc_video" === e.type) {
                                e.type;
                                var g = e.original_info,
                                    T = i()(e, ["type", "original_info"]),
                                    E = Object(Wa.a)(Dn.b.forTweet(o, d), Object.assign({}, T, {
                                        original_info: Object.assign({}, g),
                                        type: "video"
                                    })),
                                    v = (E.accessibilityLabel, E.backgroundColor, E.primaryLabel, E.secondaryLabel, i()(E, ["accessibilityLabel", "backgroundColor", "primaryLabel", "secondaryLabel"]));
                                return a && (v.aspectRatio = a), m.createElement(Cn.a, s()({
                                    forceFullPreviewImage: "suboptimal" === t
                                }, v, {
                                    accessibilityLabel: Ln,
                                    promotedContent: l
                                }))
                            }
                            var y = e.aspect_ratio,
                                b = e.content_id,
                                h = e.duration_ms,
                                f = e.poster_image,
                                A = e.variants,
                                S = e.vmap_url;
                            return o ? m.createElement(Cn.a, {
                                accessibilityLabel: Ln,
                                aspectRatio: a || y,
                                durationMs: h,
                                forceFullPreviewImage: "suboptimal" === t,
                                poster: f,
                                promotedContent: l,
                                source: Object.assign({
                                    contentId: b
                                }, A ? {
                                    variants: A.map((function(e) {
                                        return {
                                            content_type: e.type,
                                            url: e.src
                                        }
                                    }))
                                } : null, {
                                    videoId: {
                                        type: "tweet",
                                        id: o
                                    },
                                    vmapUrl: S
                                }),
                                videoType: "vine" === e.type ? "vine" : "video"
                            }) : null
                        })), mn({
                            history: t.history
                        }), n
                    }
                    return _()(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            a = t.dmSentOrReceived,
                            n = t.isDataSaverEnabled,
                            r = t.promotedContent,
                            i = t.card,
                            o = t.cardContext,
                            s = t.withSquareBottomBorderRadius;
                        return m.createElement(yn.a, null, (function(t) {
                            return m.createElement(Na, {
                                card: i,
                                cardContext: o,
                                cardState: e._getCardState(),
                                dmSentOrReceived: a,
                                isDataSaverEnabled: n,
                                isPromoted: !!r,
                                onEventReminderClick: t(e._handleEventReminderClick),
                                onPollVote: t(e._handlePollVote),
                                onPromotedLogEvent: e._handlePromotedLogEvent,
                                onScribeEvent: e._handleScribeEvent,
                                promotedContent: r,
                                renderVideoPlayer: e._renderVideoPlayer,
                                requestCardUpdate: e._handleRequestCardUpdate(),
                                withSquareBottomBorderRadius: s
                            })
                        }))
                    }, t
                }(m.Component);
            p()(xn, "contextType", gn.a);
            var kn = Ua(Object(Mn.a)(xn));
            t.default = kn
        },
        bPFD: function(e, t, a) {
            "use strict";
            var n = a("97Jx"),
                r = a.n(n),
                i = (a("PN9k"), a("1Pcy")),
                o = a.n(i),
                s = a("W/Kd"),
                l = a.n(s),
                d = a("KEM+"),
                c = a.n(d),
                _ = a("ERkP"),
                u = a("6/RC"),
                p = a("rHpw"),
                m = (a("aWzz"), a("7DT3")),
                I = a.n(m),
                g = a("3xO4"),
                T = a.n(g),
                E = function(e) {
                    function t() {
                        for (var t, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(n)) || this, c()(o()(t), "_handleMessage", (function(e) {
                            var a = t.props,
                                n = a.onMessage,
                                r = a.forwardedRef,
                                i = a.reportError;
                            if (n && ("string" != typeof e.data || 0 !== e.data.indexOf("setImmediate$"))) {
                                if (e.origin !== window.location.protocol + "//" + window.location.host) return i ? i("Invalid cross-origin postMessage from " + e.origin) : null;
                                var o;
                                if (r && r.current && r.current.contentWindow && r.current.contentWindow === e.source)
                                    if (e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data) {
                                        try {
                                            o = JSON.parse(e.data)
                                        } catch (s) {
                                            return void(i && i("Invalid postMessage data from " + e.origin + ": " + e.data))
                                        }
                                        n(o)
                                    }
                            }
                        })), t
                    }
                    l()(t, e);
                    var a = t.prototype;
                    return a.componentDidMount = function() {
                        var e;
                        this.props.onMessage && (e = this._handleMessage, u.canUseDOM && window.addEventListener("message", e, !1))
                    }, a.componentWillUnmount = function() {
                        var e;
                        this.props.onMessage && (e = this._handleMessage, u.canUseDOM && window.removeEventListener("message", e, !1))
                    }, a.render = function() {
                        var e = this.props,
                            t = e.allowForms,
                            a = e.dangerouslyDisableSandbox,
                            n = e.src,
                            r = e.style,
                            i = e.title,
                            o = I()("iframe", Object.assign({
                                allow: "autoplay; fullscreen",
                                allowFullScreen: !0,
                                ref: this.props.forwardedRef,
                                src: n,
                                style: v.iframe,
                                title: i
                            }, a ? null : {
                                sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" + (t ? " allow-forms" : "")
                            }));
                        return _.createElement(T.a, {
                            style: [v.root, r]
                        }, o)
                    }, t
                }(_.Component);
            E.propTypes = {};
            var v = p.a.create((function(e) {
                return {
                    root: {
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch"
                    },
                    iframe: {
                        borderWidth: 0,
                        flexGrow: 1
                    }
                }
            }));
            t.a = _.forwardRef((function(e, t) {
                return _.createElement(E, r()({
                    forwardedRef: t
                }, e))
            }))
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.HWCard.ce9f2aa4.js.map