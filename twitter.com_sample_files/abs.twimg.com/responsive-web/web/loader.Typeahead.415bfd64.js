(window.webpackJsonp = window.webpackJsonp || []).push([
    [189], {
        "4e/K": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("PJYZ"),
                a = n.n(r),
                o = n("VbXa"),
                s = n.n(o),
                i = n("lSNA"),
                c = n.n(i),
                u = (n("PN9k"), n("3EFP")),
                l = n("ERkP"),
                d = n("3XMw"),
                p = n.n(d),
                h = n("Gzkc"),
                f = n.n(h),
                m = n("oQhu"),
                y = n("WPfJ"),
                v = n("7nmT"),
                _ = n.n(v),
                S = n("Es6L"),
                g = (n("AxOO"), n("OEYw")),
                b = n("rHpw"),
                I = b.a.create({
                    initial: {
                        alignItems: "stretch",
                        borderWidth: 0,
                        borderStyle: "solid",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        zIndex: 0,
                        minHeight: 0,
                        minWidth: 0
                    }
                }),
                w = (n("aWzz"), n("7DT3")),
                R = n.n(w),
                x = n("3xO4"),
                C = n.n(x),
                D = n("xoZN"),
                E = n("6OUF"),
                O = n("pf9B"),
                T = n("cHvH"),
                k = n("oEoC"),
                F = n("GZwR");
            n.d(t, "TypeaheadInput", (function() {
                return L
            })), n.d(t, "styles", (function() {
                return N
            }));
            var A = p.a.a3e8c892,
                P = Object(m.a)((function(e) {
                    return {
                        bottom: 0,
                        paddingBottom: "calc(2.5 * " + b.a.theme.spaces.jumbo + ")",
                        position: "fixed",
                        top: e + "px",
                        transform: [{
                            translate3d: "0,0,0"
                        }]
                    }
                })),
                j = function(e) {
                    return R()("form", Object.assign({}, e, {
                        action: "#",
                        style: [I.initial, N.wrapper]
                    }))
                },
                U = 1,
                L = function(e) {
                    function t(t, n) {
                        var r;
                        return r = e.call(this, t) || this, c()(a()(r), "_render", (function(e) {
                            var t = e.windowWidth,
                                n = r.props,
                                a = n.alwaysOpen,
                                o = n.disableClearButton,
                                s = n.inputStyle,
                                i = n.placeholder,
                                c = n.rounded,
                                u = n.renderInSearchField,
                                d = n.shouldAutoFocus,
                                p = n.shouldFocusOnClear,
                                h = n.style,
                                m = n.testID,
                                y = r.state.showTypeaheadDropdown || a;
                            return l.createElement(C.a, {
                                onLayout: r._handleLayout,
                                ref: r._setRootContainerNode,
                                style: [N.root, h]
                            }, l.createElement(D.a, {
                                onKeyDown: r._handleKeyDown,
                                style: N.keydownInputListener
                            }, l.createElement(j, {
                                accessibilityLabel: i,
                                accessibilityRole: "search",
                                onSubmit: r._handleFormSubmit
                            }, l.createElement(C.a, {
                                ref: r._setInputContainerNode,
                                style: s
                            }, l.createElement(E.a, {
                                Icon: f.a,
                                ariaActiveDescendant: r.state.ariaDescendantId,
                                ariaAutocomplete: "list",
                                ariaExpanded: y,
                                ariaLabel: A,
                                ariaOwns: r._dropdownDomId,
                                ariaRole: "combobox",
                                autoComplete: "off",
                                autoFocus: d,
                                focusOnClear: p,
                                onChange: r._handleInputChange,
                                onClear: r._handleInputClear,
                                onFocus: r._handleInputFocus,
                                onLayout: r._handleInputLayoutChanged,
                                placeholder: i,
                                ref: r._setInputRef,
                                renderContentBelow: u,
                                returnKeyType: "search",
                                styleType: c ? "pill" : "selection",
                                testID: m,
                                value: r.state.query,
                                withClearButton: !o && r.state.showTypeaheadDropdown
                            })), l.createElement(C.a, {
                                style: N.typeaheadContainer
                            }, y ? r._renderDropdown(t) : null))))
                        })), c()(a()(r), "_renderDropdown", (function(e) {
                            var t = r.props,
                                n = t.filter,
                                a = t.getItemDisabledMessage,
                                o = t.getItemIsDisabled,
                                s = t.getTopicExactMatch,
                                i = t.getUserExactMatch,
                                c = t.injectedItems,
                                u = t.isModal,
                                d = t.maxEvents,
                                p = t.maxTopics,
                                h = t.renderEmptyState,
                                f = t.selectedItems,
                                m = t.shouldDeferPrefetch,
                                y = t.source,
                                v = t.withFixedPositioning,
                                _ = t.withSectionDivider,
                                I = e >= b.a.theme.breakpoints.medium || Object(S.a)(),
                                w = r.state,
                                R = w.dropdownOffset,
                                x = w.query,
                                C = u ? N.modalDropdown : [N.dropdown, !I && v && R ? P(R) : null, I && N.wideModeDropdown],
                                D = {
                                    ariaDescendantId: r.state.ariaDescendantId,
                                    domId: r._dropdownDomId,
                                    onDismiss: r._handleOnEmptyStateDismiss,
                                    onItemFocusChanged: r._handleItemFocusChanged,
                                    onRef: r._handleEmptyStateRef,
                                    style: C
                                };
                            return h && !x ? h(D) : l.createElement(g.a, {
                                ariaDescendantId: r.state.ariaDescendantId,
                                domId: r._dropdownDomId,
                                filter: n,
                                getItemDisabledMessage: a,
                                getItemIsDisabled: o,
                                getTopicExactMatch: s,
                                getUserExactMatch: i,
                                injectedItems: c,
                                maxEvents: d,
                                maxTopics: p,
                                onItemClick: r._handleItemClick,
                                onItemFocusChanged: r._handleItemFocusChanged,
                                onRef: r._handleTypeaheadRef,
                                query: r.state.query,
                                selectedItems: f,
                                shouldDeferPrefetch: m,
                                source: y,
                                style: C,
                                withSectionDivider: _
                            })
                        })), c()(a()(r), "_dismissDropdown", (function() {
                            r.setState({
                                showTypeaheadDropdown: !1
                            }), r.props.onDismiss && r.props.onDismiss()
                        })), c()(a()(r), "_handleOnEmptyStateDismiss", (function() {
                            r._dismissDropdown(), r._inputRef && r._inputRef.blur()
                        })), c()(a()(r), "_handleLayout", (function() {
                            r._updatePosition()
                        })), c()(a()(r), "_handleInputLayoutChanged", (function() {
                            r._updatePosition()
                        })), c()(a()(r), "_updatePosition", (function() {
                            if (r._inputContainerNode) {
                                var e = r._inputContainerNode.getBoundingClientRect().bottom;
                                e !== r.state.dropdownOffset && r.setState({
                                    dropdownOffset: e
                                })
                            }
                        })), c()(a()(r), "_handleTypeaheadRef", (function(e) {
                            r._typeaheadRef = e
                        })), c()(a()(r), "_handleEmptyStateRef", (function(e) {
                            r._emptyStateRef = e
                        })), c()(a()(r), "_setRootContainerNode", (function(e) {
                            r._rootContainerNode = _.a.findDOMNode(e)
                        })), c()(a()(r), "_setInputRef", (function(e) {
                            r._inputRef = e
                        })), c()(a()(r), "_setInputContainerNode", (function(e) {
                            r._inputContainerNode = _.a.findDOMNode(e), r._inputContainerNode && r._updatePosition()
                        })), c()(a()(r), "_handleFocusChange", (function(e) {
                            var t = O.a.getCount() > 0;
                            r._rootContainerNode && r._rootContainerNode.contains(e.target) || t || r.state.showTypeaheadDropdown && r._dismissDropdown()
                        })), c()(a()(r), "_handleKeyDown", (function(e) {
                            var t = e.key,
                                n = r.state.showTypeaheadDropdown;
                            if (Object(k.e)(e)) {
                                if (t === u.a) return r._focusNext(), void e.preventDefault();
                                if (t === u.b) return r._focusPrevious(), void e.preventDefault();
                                if (t === u.d) return r._dismissDropdown(), void e.preventDefault();
                                if (t !== u.f) return t === u.c && r._hasFocusedItem() ? (r._selectFocusedItem(), void e.preventDefault()) : void(n || r.setState({
                                    showTypeaheadDropdown: !0
                                }));
                                r._dismissDropdown()
                            }
                        })), c()(a()(r), "_handleItemFocusChanged", (function() {
                            r.setState({
                                ariaDescendantId: Object(k.b)()
                            })
                        })), c()(a()(r), "_handleInputClear", (function() {
                            r.setQuery("")
                        })), c()(a()(r), "_handleInputFocus", (function() {
                            r.setState({
                                showTypeaheadDropdown: !0
                            }), r._updatePosition(), r.props.onFocus && r.props.onFocus()
                        })), c()(a()(r), "_handleInputChange", (function(e) {
                            r.setQuery(e.target.value), r._updatePosition()
                        })), c()(a()(r), "_handleFormSubmit", (function(e) {
                            e.preventDefault(), e.stopPropagation(), r._inputRef && r._inputRef.blur(), r.setState({
                                showTypeaheadDropdown: !1
                            }), r.props.onDismiss && r.props.onDismiss(), r.props.onSubmit && r.props.onSubmit()
                        })), c()(a()(r), "_handleItemClick", (function(e, t) {
                            var n = r.props,
                                a = n.shouldClearOnSelect,
                                o = n.shouldFocusOnClear,
                                s = a ? "" : r.state.query;
                            r.setState({
                                showTypeaheadDropdown: !1
                            }), r._inputRef && (a && o ? r._inputRef.focus() : r._inputRef.blur()), r.setQuery(s), r.props.onDismiss && r.props.onDismiss(), r.props.onItemClick(e, t)
                        })), c()(a()(r), "_hasFocusedItem", (function() {
                            var e = r._emptyStateRef || r._typeaheadRef;
                            return e && e.hasFocusedItem()
                        })), c()(a()(r), "_selectFocusedItem", (function() {
                            var e = r._emptyStateRef || r._typeaheadRef;
                            e && e.selectFocusedItem()
                        })), c()(a()(r), "_focusNext", (function() {
                            var e = r._emptyStateRef || r._typeaheadRef;
                            e && e.focusNext()
                        })), c()(a()(r), "_focusPrevious", (function() {
                            var e = r._emptyStateRef || r._typeaheadRef;
                            e && e.focusPrevious()
                        })), r.state = {
                            ariaDescendantId: Object(k.b)(),
                            query: t.initialValue,
                            showTypeaheadDropdown: !1
                        }, r._dropdownDomId = "typeaheadDropdown-" + U++, r
                    }
                    s()(t, e);
                    var n = t.prototype;
                    return n.UNSAFE_componentWillReceiveProps = function(e) {
                        this.props.initialValue !== e.initialValue && this.setQuery(e.initialValue)
                    }, n.componentDidMount = function() {
                        window.document.addEventListener("click", this._handleFocusChange, !0)
                    }, n.componentWillUnmount = function() {
                        window.document.removeEventListener("click", this._handleFocusChange, !0)
                    }, n.render = function() {
                        return l.createElement(T.a, null, this._render)
                    }, n.focus = function() {
                        this._inputRef && this._inputRef.focus()
                    }, n.setQuery = function(e) {
                        this.setState({
                            query: e
                        }), this.props.onQueryChange && this.props.onQueryChange(e)
                    }, t
                }(l.Component);
            c()(L, "defaultProps", {
                disableClearButton: !1,
                filter: [F.a.Users, F.a.Topics],
                initialValue: "",
                withSectionDivider: !0
            });
            var N = b.a.create((function(e) {
                return {
                    root: {
                        flex: 1,
                        flexDirection: "column",
                        position: "relative",
                        zIndex: y.d + 1
                    },
                    typeaheadContainer: {
                        flex: 1,
                        position: "relative"
                    },
                    keydownInputListener: {
                        flex: 1
                    },
                    dropdown: {
                        backgroundColor: e.colors.cellBackground,
                        left: 0,
                        right: 0,
                        overflowY: "auto",
                        overscrollBehavior: "contain",
                        position: "absolute",
                        top: 0,
                        WebkitOverflowScrolling: "touch"
                    },
                    modalDropdown: {
                        backgroundColor: e.colors.cellBackground,
                        flex: 1,
                        minHeight: 300,
                        position: "relative",
                        overflowY: "auto",
                        overscrollBehavior: "auto",
                        WebkitOverflowScrolling: "touch"
                    },
                    wideModeDropdown: {
                        borderRadius: e.borderRadii.medium,
                        boxShadow: e.boxShadows.medium,
                        minHeight: 100,
                        maxHeight: "calc(80vh - " + e.componentDimensions.appBarHeight + ")"
                    },
                    wrapper: {
                        alignItems: "stretch",
                        flex: 1
                    }
                }
            }));
            t.default = L
        },
        "72nz": function(e, t, n) {
            "use strict";
            n.r(t);
            n("rmZQ"), n("PN9k"), n("NlgC"), n("0rpg");
            var r = n("pVnL"),
                a = n.n(r),
                o = n("PJYZ"),
                s = n.n(o),
                i = n("VbXa"),
                c = n.n(i),
                u = n("lSNA"),
                l = n.n(u),
                d = n("ERkP"),
                p = n("wtjx"),
                h = n("rxPX"),
                f = Object(h.a)().propsFromActions({
                    addQuery: p.a
                }).withAnalytics({
                    component: "search_box"
                }),
                m = n("3XMw"),
                y = n.n(m),
                v = n("8jkQ"),
                _ = n("u3ZE"),
                S = n("rRIm"),
                g = (n("KI7T"), n("lnti")),
                b = n("0KEI"),
                I = n("hqKg"),
                w = n("kGix"),
                R = n("3IPs"),
                x = n("G6rE"),
                C = n("k49u"),
                D = n("J4ZH"),
                E = n("v4XE"),
                O = function(e) {
                    return Object(C.c)(e, C.a.GenericUserNotFound) || Object(C.c)(e, C.a.OtherUserSuspended) || Object(C.c)(e, C.a.AddressBookLookupNotFound)
                },
                T = Object(h.a)().dynamicPropsFromState((function() {
                    var e = Object(I.createSelector)(p.g, x.e.selectFetchStatuses, (function(e, t) {
                            var n = Object(g.a)(e.map((function(e) {
                                return e.user && e.user.id
                            })));
                            return Object(D.a)(n.map((function(e) {
                                return {
                                    id: e,
                                    fetchStatus: t[e]
                                }
                            })), (function(e) {
                                return e.fetchStatus
                            }))
                        })),
                        t = Object(I.createSelector)(e, (function(e) {
                            return (e[w.a.FAILED] || []).map((function(e) {
                                return e.id
                            }))
                        })),
                        n = Object(I.createSelector)(e, x.e.selectErrors, (function(e, t) {
                            return (e[w.a.FAILED] || []).filter((function(e) {
                                var n = e.id;
                                return O(t[n] || {})
                            })).map((function(e) {
                                return e.id
                            }))
                        })),
                        r = Object(I.createSelector)(e, x.e.selectErrors, (function(e, t) {
                            var n = (e[w.a.FAILED] || []).filter((function(e) {
                                var n = e.id;
                                return !O(t[n] || {})
                            }));
                            return (e[w.a.LOADING] || []).length > 0 ? w.a.LOADING : (e[w.a.LOADED] || []).length > 0 ? w.a.LOADED : n.length > 0 ? w.a.FAILED : w.a.NONE
                        })),
                        a = Object(I.createSelector)(p.g, (function(e) {
                            return e.map((function(e) {
                                return Object.assign({}, e, {
                                    category: R.b.RecentSearch
                                })
                            }))
                        })),
                        o = Object(I.createSelector)(E.d, (function(e) {
                            return e.map((function(e) {
                                return {
                                    keyword: {
                                        query: e.query
                                    },
                                    savedSearchId: e.id_str,
                                    category: R.b.SavedSearch
                                }
                            }))
                        }));
                    return {
                        isRecentSearchDataLoaded: p.e,
                        recentSearches: a,
                        usersFetchStatus: r,
                        invalidRecentSearchUserIds: n,
                        failedRecentSearchUserIds: t,
                        savedSearches: o
                    }
                })).adjustStateProps((function(e) {
                    var t = e.isRecentSearchDataLoaded,
                        n = e.recentSearches,
                        r = e.usersFetchStatus,
                        a = e.invalidRecentSearchUserIds,
                        o = e.failedRecentSearchUserIds,
                        s = e.savedSearches,
                        i = !n.filter((function(e) {
                            var t = e.user;
                            return t && a.indexOf(t.id) < 0
                        })).length,
                        c = r !== w.a.LOADING && t && i ? w.a.LOADED : r;
                    return {
                        failedRecentSearchUserIds: o,
                        invalidRecentSearchUserIds: a,
                        recentSearches: n,
                        fetchStatus: c,
                        savedSearches: s
                    }
                })).propsFromActions({
                    clearAll: p.b,
                    createLocalApiErrorHandler: Object(b.b)("SEARCH_ONE_CLICK"),
                    deleteSavedSearch: E.a,
                    fetchRecentSearchesIfNeeded: p.c,
                    fetchSavedSearchesIfNeeded: E.b,
                    fetchUsersIfNeeded: x.e.fetchManyIfNeeded,
                    removeQuery: p.d
                }).withAnalytics({
                    element: "typeahead"
                }),
                k = n("sYRn"),
                F = n("v//M"),
                A = n("7nmT"),
                P = n.n(A),
                j = n("Rp9C"),
                U = n("W8MJ"),
                L = n.n(U),
                N = (n("yIC7"), Object(h.a)().propsFromState({
                    user: function(e, t) {
                        return x.e.select(e, t.id)
                    }
                })),
                q = n("l2F/"),
                M = n.n(q),
                H = n("/yvb"),
                B = n("IMA+"),
                W = n("rHpw"),
                V = d.createElement(M.a, null),
                z = y.a.ef65abf0,
                G = N(function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    c()(t, e);
                    var n = t.prototype;
                    return n.UNSAFE_componentWillMount = function() {
                        var e = this.props.onRef;
                        e && e(this)
                    }, n.componentWillUnmount = function() {
                        var e = this.props.onRef;
                        e && e(void 0)
                    }, n.componentDidUpdate = function(e) {
                        var t = this.props.onRef;
                        e.onRef && e.onRef !== t && e.onRef(void 0), t && t !== e.onRef && t(this)
                    }, n.render = function() {
                        var e = this.props,
                            t = e.user,
                            n = e.onRemove;
                        if (!t) return null;
                        var r = d.createElement(H.a, {
                            accessibilityLabel: z,
                            icon: V,
                            onPress: n,
                            size: "small",
                            type: "text"
                        });
                        return d.createElement(B.a, {
                            avatarUri: t.profile_image_url_https,
                            decoration: r,
                            displayMode: "UserCompact",
                            isProtected: t.protected,
                            isVerified: t.verified,
                            name: t.name,
                            screenName: t.screen_name,
                            style: Q.cell,
                            userId: t.id_str,
                            withLink: !1
                        })
                    }, L()(t, [{
                        key: "searchItemData",
                        get: function() {
                            return this.props.user ? {
                                category: R.b.RecentSearch,
                                link: this.props.user.screen_name,
                                query: this.props.id,
                                recentSearchType: R.a.User
                            } : null
                        }
                    }]), t
                }(d.Component)),
                Q = W.a.create((function(e) {
                    return {
                        cell: {
                            paddingHorizontal: 0,
                            paddingVertical: 0
                        }
                    }
                })),
                K = n("Gzkc"),
                Y = n.n(K),
                X = n("K2+g"),
                Z = n.n(X),
                J = n("I7xG"),
                $ = n("DNho"),
                ee = n("j7Bv"),
                te = n("5mJL"),
                ne = n("t62R"),
                re = d.createElement(M.a, null),
                ae = d.createElement(Z.a, null),
                oe = y.a.ef65abf0,
                se = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, l()(s()(t), "_getButtonType", Object(J.a)(s()(t), (function(e) {
                            return e.category
                        }), (function(e) {
                            return e === R.b.SavedSearch ? "destructiveText" : "text"
                        }))), l()(s()(t), "_getRemoveIcon", Object(J.a)(s()(t), (function(e) {
                            return e.category
                        }), (function(e) {
                            return e === R.b.SavedSearch ? ae : re
                        }))), t
                    }
                    c()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.query,
                            r = t.onRemove,
                            a = d.createElement($.a.Consumer, null, (function(t) {
                                var n = t.avatarSize;
                                return d.createElement(ee.a, {
                                    Icon: Y.a,
                                    color: "neutral",
                                    size: e._convertAvatarSizeToThumbnailSize(n),
                                    style: ie.searchIcon
                                })
                            }));
                        return d.createElement(te.a, {
                            avatarCell: a,
                            cellStyle: ie.bodyColumn
                        }, d.createElement(ne.b, {
                            numberOfLines: 1,
                            withHashflags: !0
                        }, n), d.createElement(H.a, {
                            accessibilityLabel: oe,
                            icon: this._getRemoveIcon(),
                            onPress: r,
                            size: "small",
                            type: this._getButtonType()
                        }))
                    }, n._convertAvatarSizeToThumbnailSize = function(e) {
                        switch (e) {
                            case "xLarge":
                                return "xLarge";
                            case "xxLarge":
                                return "xxLarge";
                            default:
                                return "large"
                        }
                    }, L()(t, [{
                        key: "searchItemData",
                        get: function() {
                            var e = this.props,
                                t = e.category;
                            return {
                                category: t,
                                query: e.query,
                                recentSearchType: t === R.b.RecentSearch ? R.a.Keyword : void 0
                            }
                        }
                    }]), t
                }(d.Component),
                ie = W.a.create((function(e) {
                    return {
                        bodyColumn: {
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        },
                        searchIcon: {
                            marginRight: e.spaces.xSmall
                        }
                    }
                })),
                ce = se,
                ue = n("htQn"),
                le = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, l()(s()(t), "_renderSearchItem", (function() {
                            var e = t.props.item;
                            return e.keyword ? d.createElement(ce, {
                                category: e.category,
                                onRemove: t._handleOnRemove,
                                query: e.keyword.query,
                                ref: t._handleItemRef
                            }) : e.user ? d.createElement(G, {
                                id: e.user.id || "",
                                onRef: t._handleItemRef,
                                onRemove: t._handleOnRemove
                            }) : null
                        })), l()(s()(t), "_handleItemRef", (function(e) {
                            t._itemRef = e
                        })), l()(s()(t), "_handleOnRemove", (function(e) {
                            var n = t.props;
                            (0, n.onRemoveQuery)(n.item, n.index), e.stopPropagation()
                        })), l()(s()(t), "_handleOnClick", (function() {
                            var e = t.props,
                                n = e.onItemClick,
                                r = e.index;
                            t.searchItemData && n(t.searchItemData, r)
                        })), t
                    }
                    return c()(t, e), t.prototype.render = function() {
                        var e = this.props.domId;
                        return d.createElement(ue.a, {
                            accessibilityRole: "option",
                            accessible: !0,
                            "aria-selected": !!e,
                            nativeID: e,
                            onClick: this._handleOnClick,
                            style: [de.root, e && de.focused]
                        }, this._renderSearchItem())
                    }, L()(t, [{
                        key: "searchItemData",
                        get: function() {
                            return this._itemRef && this._itemRef.searchItemData
                        }
                    }]), t
                }(d.Component),
                de = W.a.create((function(e) {
                    return {
                        root: {
                            borderBottomColor: e.colors.borderColor,
                            borderBottomStyle: "solid",
                            borderBottomWidth: 1,
                            cursor: "pointer",
                            paddingHorizontal: e.componentDimensions.gutterHorizontal,
                            paddingVertical: e.componentDimensions.gutterVertical
                        },
                        focused: {
                            backgroundColor: e.colors.faintGray
                        }
                    }
                })),
                pe = le,
                he = n("3xO4"),
                fe = n.n(he),
                me = n("eb3s"),
                ye = n("MXDK"),
                ve = y.a.fb55413d,
                _e = {
                    headline: y.a.e9b5cf65,
                    text: y.a.fed0a0fc,
                    confirmButtonLabel: y.a.cd1d6d93
                },
                Se = y.a.a280e2df,
                ge = y.a.jb083a88,
                be = y.a.h0c3f102,
                Ie = 15,
                we = function(e) {
                    return e.map((function(e) {
                        return e.user
                    })).filter(Boolean).map((function(e) {
                        return e.id
                    }))
                },
                Re = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this, t) || this, l()(s()(n), "_getRecentSearchItems", (function() {
                            var e = n.props,
                                t = e.failedRecentSearchUserIds,
                                r = e.recentSearches.filter((function(e) {
                                    var n = e.user;
                                    return !n || t.indexOf(n.id) < 0
                                }));
                            return r.length > Ie ? r.slice(0, Ie) : r
                        })), l()(s()(n), "_render", (function() {
                            var e = n.props,
                                t = e.domId,
                                r = e.savedSearches,
                                a = n._getRecentSearchItems();
                            return 0 === a.length && 0 === r.length ? d.createElement(fe.a, {
                                style: [xe.emptyState]
                            }, d.createElement(ne.b, {
                                align: "center",
                                color: "deepGray"
                            }, ve)) : d.createElement(fe.a, null, a.length > 0 ? d.createElement(d.Fragment, null, d.createElement(fe.a, {
                                style: xe.header
                            }, d.createElement(ne.b, {
                                numberOfLines: 1,
                                size: "large",
                                weight: "bold"
                            }, Se), d.createElement(H.a, {
                                onPress: n._handleClearAllClick,
                                size: "small",
                                type: "text"
                            }, be)), d.createElement(fe.a, {
                                accessibilityRole: "listbox",
                                nativeID: t
                            }, a.map((function(e, t) {
                                return n._renderRecentSearchItem(e, t)
                            })))) : null, r.length > 0 ? d.createElement(d.Fragment, null, d.createElement(fe.a, {
                                style: xe.header
                            }, d.createElement(ne.b, {
                                numberOfLines: 1,
                                size: "large",
                                weight: "bold"
                            }, ge)), d.createElement(fe.a, null, n._renderSavedSearches())) : null)
                        })), l()(s()(n), "_renderSavedSearches", (function() {
                            var e = n.props,
                                t = e.ariaDescendantId,
                                r = e.savedSearches,
                                a = n.state.focusIndex,
                                o = n._getRecentSearchItems();
                            return d.createElement(fe.a, null, r.map((function(e, r) {
                                var s = a === r + o.length;
                                return d.createElement(pe, {
                                    domId: s ? t : void 0,
                                    index: r,
                                    item: e,
                                    key: e.savedSearchId,
                                    onItemClick: n._handleOnItemClick,
                                    onRemoveQuery: n._handleRemoveQuery,
                                    ref: s ? n._setFocusedItemRef : void 0
                                })
                            })))
                        })), l()(s()(n), "_handleUsersRetry", (function() {
                            n._fetchUsersIfNeeded()
                        })), l()(s()(n), "_handleClearAllClick", (function() {
                            n.setState({
                                shouldShowClearAllConfirmationSheet: !0
                            })
                        })), l()(s()(n), "_handleRemoveQuery", (function(e, t) {
                            var r = n.props,
                                a = r.analytics,
                                o = r.removeQuery;
                            switch (e.category) {
                                case R.b.RecentSearch:
                                    var s = {
                                        keyword: e.keyword,
                                        user: e.user
                                    };
                                    o(s), n._resetFocus();
                                    var i = j.a.forRecentSearchResult(s, t),
                                        c = e.user ? "clear_user" : "clear_topic";
                                    i && a.scribe({
                                        action: c,
                                        data: {
                                            items: [i]
                                        }
                                    });
                                    break;
                                case R.b.SavedSearch:
                                    n.setState({
                                        shouldShowDeleteSavedSearchConfirmation: !0,
                                        savedSearchIdToDelete: e.savedSearchId
                                    });
                                    break;
                                default:
                                    return
                            }
                        })), l()(s()(n), "_handleOnClearAllConfirm", (function() {
                            var e = n.props,
                                t = e.analytics;
                            (0, e.clearAll)(), t.scribeAction("clear_all"), n.setState({
                                shouldShowClearAllConfirmationSheet: !1
                            })
                        })), l()(s()(n), "_handleOnClearAllCancel", (function() {
                            n.setState({
                                shouldShowClearAllConfirmationSheet: !1
                            })
                        })), l()(s()(n), "_handleOnDeleteSavedSearchConfirm", (function() {
                            var e = n.props,
                                t = e.analytics,
                                r = e.deleteSavedSearch,
                                a = e.savedSearches,
                                o = n.state.savedSearchIdToDelete,
                                s = a.find((function(e) {
                                    return e.savedSearchId === o
                                }));
                            if (o) {
                                r(o);
                                var i = s && j.a.forSavedSearchResult(s.keyword.query);
                                i && t.scribe({
                                    element: "saved_search",
                                    action: "delete",
                                    data: {
                                        items: [i]
                                    }
                                })
                            }
                            n.setState({
                                shouldShowDeleteSavedSearchConfirmation: !1,
                                savedSearchIdToDelete: void 0
                            })
                        })), l()(s()(n), "_handleOnDeleteSavedSearchCancel", (function() {
                            n.setState({
                                shouldShowDeleteSavedSearchConfirmation: !1,
                                savedSearchIdToDelete: void 0
                            })
                        })), l()(s()(n), "_renderRecentSearchItem", (function(e, t) {
                            var r = n.props.ariaDescendantId,
                                a = n.state.focusIndex === t,
                                o = e.keyword ? "keyword_" + e.keyword.query : e.user ? "user_" + e.user.id : "" + t;
                            return d.createElement(pe, {
                                domId: a ? r : void 0,
                                index: t,
                                item: e,
                                key: o,
                                onItemClick: n._handleOnItemClick,
                                onRemoveQuery: n._handleRemoveQuery,
                                ref: a ? n._setFocusedItemRef : void 0
                            })
                        })), l()(s()(n), "_handleOnItemClick", (function(e, t) {
                            var r = n.props,
                                a = r.onDismiss;
                            (0, r.onItemClick)(e, t), n._scribeClick(e, t), a && a()
                        })), l()(s()(n), "_setFocusedItemRef", (function(e) {
                            n._focusedItemRef = e, e && n._shouldScrollToFocusedItem && (Object(ye.c)(n._getScrollParent(), n._getFocusedItem()), n._shouldScrollToFocusedItem = !1)
                        })), l()(s()(n), "hasFocusedItem", (function() {
                            return n._getRecentSearchItems().length > 0
                        })), l()(s()(n), "selectFocusedItem", (function() {
                            if (n.hasFocusedItem()) {
                                var e = n._focusedItemRef && n._focusedItemRef.searchItemData;
                                e && n._handleOnItemClick(e, n.state.focusIndex)
                            }
                        })), l()(s()(n), "_scribeRecentSearchImpression", (function() {
                            var e = n.props,
                                t = e.analytics,
                                r = e.recentSearches;
                            if (r && r.length) {
                                var a = Object(g.a)(r.map((function(e, t) {
                                    return j.a.forRecentSearchResult(e, t)
                                })));
                                t.scribe({
                                    action: "impression",
                                    data: {
                                        items: a
                                    }
                                })
                            }
                        })), l()(s()(n), "_scribeSavedSearchImpression", (function() {
                            var e = n.props,
                                t = e.analytics,
                                r = e.savedSearches;
                            if (r && r.length) {
                                var a = Object(g.a)(r.map((function(e, t) {
                                    return j.a.forSavedSearchResult(e.keyword.query)
                                })));
                                t.scribe({
                                    element: "saved_search",
                                    action: "impression",
                                    data: {
                                        items: a
                                    }
                                })
                            }
                        })), l()(s()(n), "_scribeClick", (function(e, t) {
                            var r = n.props.analytics;
                            switch (e.category) {
                                case R.b.SavedSearch:
                                    var a = j.a.forSavedSearchResult(e.query);
                                    r.scribe({
                                        element: "saved_search",
                                        action: "search",
                                        data: {
                                            targets: [a]
                                        }
                                    });
                                    break;
                                case R.b.RecentSearch:
                                    var o;
                                    e.recentSearchType && (o = e.recentSearchType === R.a.User ? {
                                        user: {
                                            type: R.a.User,
                                            id: e.query
                                        }
                                    } : {
                                        keyword: {
                                            type: R.a.Keyword,
                                            query: e.query
                                        }
                                    });
                                    var s = o && j.a.forRecentSearchResult(o, t);
                                    s && r.scribe({
                                        action: "click",
                                        data: {
                                            targets: [s]
                                        }
                                    })
                            }
                        })), l()(s()(n), "_setFocusIndex", (function(e, t) {
                            var r = n.props.onItemFocusChanged;
                            n._shouldScrollToFocusedItem = t, n.setState({
                                focusIndex: e
                            }), r && r()
                        })), l()(s()(n), "_resetFocus", (function() {
                            n._setFocusIndex(-1)
                        })), l()(s()(n), "focusNext", (function() {
                            var e = n.state.focusIndex,
                                t = n.props,
                                r = t.recentSearches,
                                a = t.savedSearches,
                                o = r.length + a.length;
                            if (0 !== o) {
                                var s = e + 1 >= o ? 0 : e + 1;
                                n._setFocusIndex(s, !0)
                            }
                        })), l()(s()(n), "focusPrevious", (function() {
                            var e = n.state.focusIndex,
                                t = n.props,
                                r = t.recentSearches,
                                a = t.savedSearches,
                                o = r.length + a.length;
                            if (0 !== o) {
                                var s = e - 1 < 0 ? o - 1 : e - 1;
                                n._setFocusIndex(s, !0)
                            }
                        })), l()(s()(n), "_fetchUsersIfNeeded", (function() {
                            var e = n.props,
                                t = e.fetchUsersIfNeeded,
                                r = e.createLocalApiErrorHandler,
                                a = e.recentSearches,
                                o = e.invalidRecentSearchUserIds;
                            t(we(a).filter((function(e) {
                                return o.indexOf(e) < 0
                            }))).catch(r({}))
                        })), n.state = {
                            focusIndex: 0,
                            shouldShowClearAllConfirmationSheet: !1,
                            shouldShowDeleteSavedSearchConfirmation: !1
                        }, n
                    }
                    c()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = this.props,
                            t = e.createLocalApiErrorHandler,
                            n = e.fetchRecentSearchesIfNeeded,
                            r = e.fetchSavedSearchesIfNeeded,
                            a = e.recentSearches,
                            o = e.savedSearches,
                            s = e.onRef;
                        s && s(this), n(), this._fetchUsersIfNeeded(), r().catch(t({})), this._scribeRecentSearchImpression(), this._scribeSavedSearchImpression(), (a && a.length || o && o.length) && this._resetFocus()
                    }, n.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.recentSearches,
                            r = t.savedSearches,
                            a = t.onRef;
                        e.recentSearches !== n && (this._fetchUsersIfNeeded(), this._resetFocus(), this._scribeRecentSearchImpression()), e.savedSearches !== r && (this._resetFocus(), this._scribeSavedSearchImpression()), e.onRef && e.onRef !== a && e.onRef(void 0), a && a !== e.onRef && a(this)
                    }, n.componentWillUnmount = function() {
                        this.props.onRef && this.props.onRef(void 0)
                    }, n.render = function() {
                        var e = this.props,
                            t = e.style,
                            n = e.fetchStatus,
                            r = this.state,
                            a = r.shouldShowClearAllConfirmationSheet,
                            o = r.shouldShowDeleteSavedSearchConfirmation;
                        return d.createElement(fe.a, {
                            style: t
                        }, d.createElement(F.a, {
                            fetchStatus: n,
                            onRequestRetry: this._handleUsersRetry,
                            render: this._render
                        }), a ? d.createElement(me.a, {
                            confirmButtonLabel: _e.confirmButtonLabel,
                            confirmButtonType: "destructive",
                            headline: _e.headline,
                            onCancel: this._handleOnClearAllCancel,
                            onConfirm: this._handleOnClearAllConfirm,
                            text: _e.text
                        }) : null, o ? d.createElement(k.a, {
                            onCancel: this._handleOnDeleteSavedSearchCancel,
                            onConfirm: this._handleOnDeleteSavedSearchConfirm
                        }) : null)
                    }, n._getScrollParent = function() {
                        if (!this._scrollParent) {
                            var e = Object(ye.a)(P.a.findDOMNode(this));
                            this._scrollParent = e === window ? null : e
                        }
                        return this._scrollParent
                    }, n._getFocusedItem = function() {
                        var e = this._focusedItemRef && P.a.findDOMNode(this._focusedItemRef);
                        return e instanceof Element ? e : null
                    }, t
                }(d.Component),
                xe = W.a.create((function(e) {
                    return {
                        emptyState: {
                            padding: e.spaces.xSmall,
                            paddingTop: e.spaces.medium
                        },
                        header: {
                            alignItems: "center",
                            borderBottomColor: e.colors.borderColor,
                            borderBottomStyle: "solid",
                            borderBottomWidth: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingVertical: e.componentDimensions.gutterVertical,
                            paddingHorizontal: e.componentDimensions.gutterHorizontal
                        }
                    }
                })),
                Ce = T(Re),
                De = "SearchBox_Search_Input",
                Ee = n("4e/K"),
                Oe = n("TnY3"),
                Te = n("GZwR");
            n.d(t, "SearchBoxContainer", (function() {
                return Le
            }));
            var ke = y.a.f2b908ed,
                Fe = y.a.ad7f8447,
                Ae = y.a.j7de856a,
                Pe = /^(\w+)$/,
                je = [Te.a.Events, Te.a.Users, Te.a.Topics],
                Ue = function(e) {
                    return "@" === e[0] ? e.substring(1) : e
                },
                Le = function(e) {
                    function t(t, n) {
                        var r;
                        return r = e.call(this, t, n) || this, l()(s()(r), "_renderSearchBoxEmptyState", (function(e) {
                            return d.createElement(Ce, a()({}, e, {
                                onItemClick: r._handleSearchItemClick
                            }))
                        })), l()(s()(r), "_handleSearchItemClick", (function(e) {
                            var t = e.link,
                                n = e.query,
                                a = e.recentSearchType,
                                o = e.category,
                                s = r.props.addQuery;
                            o === R.b.SavedSearch ? r._submitQuery({
                                query: n,
                                shouldAddToRecentSearch: !1,
                                src: _.a.SavedSearchClick
                            }) : a === R.a.Keyword ? r._submitQuery({
                                query: n,
                                shouldAddToRecentSearch: !0,
                                src: _.a.RecentSearchClick
                            }) : t && (r._routeTransition({
                                pathname: "/" + t
                            }), s({
                                user: {
                                    id: n,
                                    type: R.a.User
                                }
                            }))
                        })), l()(s()(r), "_handleSearchShortcut", (function(e) {
                            var t = r._inputRef;
                            t && (e && t.setQuery(e), t.focus())
                        })), l()(s()(r), "_getTopicExactMatch", (function(e) {
                            var t = e.query,
                                n = e.hasResults,
                                r = e.isLoaded;
                            return n || !r ? void 0 : {
                                id: t + "_no_result_topic",
                                type: Te.b.NoResult,
                                data: {
                                    text: Fe({
                                        query: t
                                    }),
                                    type: "topic"
                                }
                            }
                        })), l()(s()(r), "_getUserExactMatch", (function(e) {
                            var t = e.query,
                                n = (e.hasResults, e.isLoaded, Ue(t));
                            if (n.match(Pe)) return {
                                id: t + "_no_result_user",
                                type: Te.b.NoResult,
                                data: {
                                    text: Ae({
                                        screenName: n
                                    }),
                                    type: "user"
                                }
                            }
                        })), l()(s()(r), "_handleOnDismiss", (function() {
                            var e = r.props.history,
                                t = e.location,
                                n = t.state || {};
                            if (n.searchFocused) {
                                var a = Object.assign({}, t, {
                                    state: Object.assign({}, n, {
                                        lockScroll: !1,
                                        searchFocused: !1
                                    })
                                });
                                e.replace(a)
                            }
                        })), l()(s()(r), "_handleOnFocus", (function() {
                            var e = r.props,
                                t = e.analytics,
                                n = e.history,
                                a = n.location,
                                o = a.state || {};
                            if (!o.searchFocused) {
                                var s = Object.assign({}, a, {
                                    state: Object.assign({}, o, {
                                        searchFocused: !0,
                                        lockScroll: !0
                                    })
                                });
                                t.scribe({
                                    action: "focus_field"
                                }), n.push(s)
                            }
                        })), l()(s()(r), "_handleChange", (function(e) {
                            r.setState({
                                query: e,
                                querySubmitted: !1
                            })
                        })), l()(s()(r), "_handleTypeaheadSubmit", (function(e) {
                            var t = r.state.query;
                            /^\s*$/.test(t) || r._submitQuery({
                                query: t,
                                shouldAddToRecentSearch: !0
                            })
                        })), l()(s()(r), "_handleItemClick", (function(e, t) {
                            var n = r.props.addQuery,
                                a = r.state.query;
                            switch (e.type) {
                                case Te.b.User:
                                    if (e.data.id_str) n({
                                        user: {
                                            id: e.data.id_str,
                                            type: R.a.User
                                        }
                                    });
                                    r._routeTransition({
                                        pathname: "/" + e.data.screen_name
                                    });
                                    break;
                                case Te.b.Topic:
                                case Te.b.Hashtag:
                                    r._submitQuery({
                                        query: e.data.topic,
                                        shouldAddToRecentSearch: !0,
                                        src: _.a.TypeaheadClick
                                    });
                                    break;
                                case Te.b.Event:
                                    e.data && e.data.url ? r._routeTransition({
                                        pathname: v.b.parseInternalUrl(e.data.url)
                                    }) : r._submitQuery({
                                        query: e.data.topic,
                                        src: _.a.TypeaheadClick
                                    });
                                    break;
                                case Te.b.NoResult:
                                    var o = e.data.type;
                                    "user" === o ? r._routeTransition({
                                        pathname: "/" + Ue(a)
                                    }) : "topic" === o && r._submitQuery({
                                        query: a,
                                        shouldAddToRecentSearch: !0,
                                        src: _.a.TypeaheadClick
                                    })
                            }
                        })), l()(s()(r), "_routeTransition", (function(e) {
                            var t = e.pathname,
                                n = e.query,
                                a = e.params,
                                o = e.src,
                                s = r.props,
                                i = s.history,
                                c = s.location,
                                u = Object.assign({}, c, {
                                    pathname: t,
                                    search: "",
                                    query: a || (n ? {
                                        q: n,
                                        src: o
                                    } : {}),
                                    state: Object.assign({}, c.state, {
                                        searchFocused: !1,
                                        lockScroll: !1
                                    })
                                });
                            i.replace(u)
                        })), l()(s()(r), "_submitQuery", (function(e) {
                            var t = e.query,
                                n = e.shouldAddToRecentSearch,
                                a = void 0 !== n && n,
                                o = e.src,
                                s = void 0 === o ? _.a.Typed : o,
                                i = r.props,
                                c = i.addQuery,
                                u = i.mode,
                                l = i.onSubmit,
                                d = i.searchFilters,
                                p = i.searchRoute;
                            (l && l(t, s), a) && c({
                                keyword: {
                                    query: t,
                                    type: R.a.Keyword
                                }
                            });
                            var h = Object(R.f)({
                                query: t,
                                querySrc: s,
                                mode: u,
                                searchFilters: d
                            });
                            r._routeTransition({
                                pathname: p,
                                params: h,
                                src: s
                            }), r.setState({
                                querySubmitted: !0
                            })
                        })), l()(s()(r), "_setInputRef", (function(e) {
                            r._inputRef = e
                        })), r.state = {
                            query: t.initialValue,
                            querySubmitted: !0
                        }, r
                    }
                    c()(t, e);
                    var n = t.prototype;
                    return n.UNSAFE_componentWillMount = function() {
                        var e = this.props,
                            t = e.location,
                            n = e.shouldHandleSearchShortcut,
                            r = (t.state || {}).searchFocused;
                        this._autoFocus = !!r, n && (this._unregisterSearchShortcutHandler = Object(S.b)(this._handleSearchShortcut))
                    }, n.componentWillUnmount = function() {
                        this._unregisterSearchShortcutHandler && this._unregisterSearchShortcutHandler()
                    }, n.UNSAFE_componentWillReceiveProps = function(e) {
                        this.props.initialValue !== e.initialValue && this.setState({
                            query: e.initialValue,
                            querySubmitted: !0
                        })
                    }, n.render = function() {
                        var e = this.props,
                            t = e.location,
                            n = e.placeholder,
                            r = this.state.query,
                            a = (t.state || {}).searchPrefill,
                            o = this.props.initialValue || a;
                        return d.createElement(fe.a, {
                            style: Ne.root
                        }, d.createElement(Ee.default, {
                            filter: je,
                            getTopicExactMatch: r ? this._getTopicExactMatch : void 0,
                            getUserExactMatch: r ? this._getUserExactMatch : void 0,
                            initialValue: o,
                            inputStyle: Ne.input,
                            onDismiss: this._handleOnDismiss,
                            onFocus: this._handleOnFocus,
                            onItemClick: this._handleItemClick,
                            onQueryChange: this._handleChange,
                            onSubmit: this._handleTypeaheadSubmit,
                            placeholder: n,
                            ref: this._setInputRef,
                            renderEmptyState: this._renderSearchBoxEmptyState,
                            rounded: !0,
                            shouldAutoFocus: this._autoFocus,
                            shouldClearOnSelect: !0,
                            shouldDeferPrefetch: !0,
                            source: Te.d.SearchBox,
                            testID: De,
                            withFixedPositioning: !0,
                            withFocusStyling: !0
                        }))
                    }, t
                }(d.Component);
            l()(Le, "defaultProps", {
                initialValue: "",
                placeholder: ke,
                searchRoute: "/search"
            });
            var Ne = W.a.create((function(e) {
                return {
                    root: {
                        alignItems: "stretch",
                        flexBasis: 0,
                        flexDirection: "row",
                        flexGrow: 1
                    },
                    input: {
                        flexShrink: 1
                    }
                }
            }));
            t.default = Object(Oe.a)(f(Le))
        },
        LbZ7: function(e, t, n) {
            "use strict";
            var r = n("97Jx"),
                a = n.n(r),
                o = n("LdEA"),
                s = n.n(o),
                i = n("W/Kd"),
                c = n.n(i),
                u = n("KEM+"),
                l = n.n(u),
                d = n("ERkP"),
                p = n("rHpw"),
                h = n("3xO4"),
                f = n.n(h),
                m = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return c()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.style,
                            r = e.withGutter,
                            o = s()(e, ["children", "style", "withGutter"]),
                            i = d.Children.map(t, (function(e) {
                                return e && d.cloneElement(e, {
                                    style: [e.props.style, y.column, r && y.withGutterColumn]
                                })
                            }));
                        return d.createElement(f.a, a()({
                            style: [n, y.root, r && y.withGutter]
                        }, o), i)
                    }, t
                }(d.Component);
            l()(m, "defaultProps", {
                withGutter: !1
            });
            var y = p.a.create((function(e) {
                return {
                    root: {
                        flexDirection: "row"
                    },
                    column: {
                        flexBasis: 0,
                        minWidth: 0
                    },
                    withGutter: {
                        marginHorizontal: "-" + e.spaces.xxSmall
                    },
                    withGutterColumn: {
                        marginHorizontal: e.spaces.xxSmall
                    }
                }
            }));
            t.a = m
        },
        OEYw: function(e, t, n) {
            "use strict";
            var r, a = n("pVnL"),
                o = n.n(a),
                s = n("8OQS"),
                i = n.n(s),
                c = n("PJYZ"),
                u = n.n(c),
                l = n("VbXa"),
                d = n.n(l),
                p = n("lSNA"),
                h = n.n(p),
                f = n("ERkP"),
                m = n("lnti"),
                y = n("RIqP"),
                v = n.n(y),
                _ = (n("Yyzt"), n("Qyxo")),
                S = n("rxPX"),
                g = n("0KEI"),
                b = n("hqKg"),
                I = n("oEoC"),
                w = n("o52z"),
                R = n("kGix"),
                x = (n("yKDW"), n("dtAy"), n("rmZQ"), n("PN9k"), n("vy4g")),
                C = n("3A2y"),
                D = n("Ssj5"),
                E = n("oEOe"),
                O = n("GZwR"),
                T = 25,
                k = [],
                F = Object(E.a)("rweb/typeaheadV2", "FETCH"),
                A = function(e) {
                    return e.q + "_" + e.result_type + "_" + e.src
                },
                P = {
                    remoteResults: {},
                    cachedIds: []
                };
            var j = function(e) {
                    return e.map((function(e) {
                        var t = e.tokens,
                            n = e.rounded_score,
                            r = i()(e, ["tokens", "rounded_score"]),
                            a = r.topic,
                            o = r.topic_type || O.b.Topic;
                        return {
                            id: o + "_" + a.replace(" ", "_"),
                            type: o,
                            tokens: t,
                            rounded_score: n,
                            data: r
                        }
                    }))
                },
                U = function(e) {
                    return e.map((function(e) {
                        var t = e.tokens,
                            n = e.rounded_score,
                            r = i()(e, ["tokens", "rounded_score"]),
                            a = r.topic_type || O.b.Event;
                        return {
                            id: a + "_" + r.topic.replace(" ", "_"),
                            type: a,
                            tokens: t,
                            rounded_score: n,
                            data: r
                        }
                    }))
                };
            D.a.register(((r = {}).typeaheadV2 = function(e, t) {
                switch (void 0 === e && (e = P), t.type) {
                    case F.REQUEST:
                        var n, r = t.meta.queryId;
                        return Object.assign({}, e, {
                            remoteResults: Object.assign({}, e.remoteResults, (n = {}, n[r] = Object.assign({}, e.remoteResults[r], {
                                fetchStatus: R.a.LOADING
                            }), n))
                        });
                    case F.SUCCESS:
                        var a, o = t.meta.queryId,
                            s = t.payload,
                            i = e.cachedIds.filter((function(e) {
                                return e !== o
                            })),
                            c = i.length >= T ? Object(C.a)(e.remoteResults, i.splice(0, 1)) : e.remoteResults,
                            u = s.users.map((function(e) {
                                return Object(x.a)(e, O.c.Remote)
                            }));
                        return Object.assign({}, e, {
                            cachedIds: [].concat(v()(i), [o]),
                            remoteResults: Object.assign({}, c, (a = {}, a[o] = {
                                fetchStatus: R.a.LOADED,
                                id: o,
                                orderedSections: s.ordered_sections,
                                events: U(s.events),
                                topics: j(s.topics),
                                users: Object(O.e)(u),
                                timestamp: Date.now()
                            }, a))
                        });
                    case F.FAILURE:
                        var l, d = t.meta.queryId;
                        return Object.assign({}, e, {
                            remoteResults: Object.assign({}, e.remoteResults, (l = {}, l[d] = Object.assign({}, e.remoteResults[d], {
                                fetchStatus: R.a.FAILED
                            }), l))
                        });
                    default:
                        return e
                }
            }, r));
            var L = function(e, t) {
                    return e.typeaheadV2.remoteResults[t]
                },
                N = function(e) {
                    return function(t, n, r) {
                        var a = r.api;
                        if (!e || !e.q || "" === e.q.trim()) return Promise.resolve();
                        var o = {
                            queryId: A(e)
                        };
                        return Object(E.b)(t, {
                            params: e,
                            request: a.Typeahead.fetch
                        })({
                            actionTypes: F,
                            context: "FETCH_TYPEAHEAD",
                            meta: o
                        })
                    }
                },
                q = n("UQTn"),
                M = [O.a.Users],
                H = function(e) {
                    var t = e.filter,
                        n = e.query,
                        r = e.source;
                    return A({
                        q: n,
                        result_type: (t || M).join(","),
                        src: r
                    })
                },
                B = function(e, t) {
                    return function(e, t) {
                        var n = L(e, t);
                        return n && n.fetchStatus
                    }(e, H(t))
                },
                W = function(e, t) {
                    return function(e, t) {
                        var n = L(e, t);
                        return n && n.users || k
                    }(e, H(t))
                },
                V = function(e, t) {
                    return function(e, t) {
                        var n = L(e, t);
                        return n && n.topics || k
                    }(e, H(t))
                },
                z = function(e, t) {
                    return function(e, t) {
                        var n = L(e, t);
                        return n && n.events || k
                    }(e, H(t))
                },
                G = function(e, t) {
                    return (t.rounded_graph_weight || 0) - (e.rounded_graph_weight || 0)
                },
                Q = function() {
                    return Object(b.createSelector)(W, Object(b.createSelector)((function(e, t) {
                        return t.query
                    }), (function(e, t) {
                        return t.filter
                    }), q.d, q.e, (function(e, t, n, r) {
                        if (!e || !t || t.indexOf(O.a.Users) < 0) return Object(w.a)();
                        var a = Object(q.f)(n, e);
                        return Object(O.e)(a.map((function(e) {
                            return r[e]
                        })).sort(G).slice(0, 10))
                    })), B, (function(e, t) {
                        return t.injectedItems
                    }), (function(e, t) {
                        return t.query
                    }), (function(e, t) {
                        return t.getUserExactMatch
                    }), (function(e, t, n, r, a, o) {
                        var s = Object(_.a)(r || [], (function(e) {
                                return e.type === O.b.User ? e.data.id_str : void 0
                            })),
                            i = t.filter((function(e) {
                                return s.indexOf(e.id) < 0
                            })),
                            c = e.filter((function(e) {
                                return s.indexOf(e.id) < 0
                            })),
                            u = Object(I.a)(i, c).slice(0, 10),
                            l = n === R.a.LOADED,
                            d = o && o({
                                query: a,
                                hasResults: !!e.length,
                                isLoaded: l
                            }),
                            p = d ? [].concat(v()(u), [d]) : u;
                        return p.length ? p : Object(w.a)()
                    }))
                },
                K = function() {
                    return Object(b.createSelector)(Q(), Object(b.createSelector)(V, B, (function(e, t) {
                        return t.query
                    }), (function(e, t) {
                        return t.maxTopics
                    }), (function(e, t) {
                        return t.getTopicExactMatch
                    }), (function(e, t, n, r, a) {
                        var o = t === R.a.LOADED,
                            s = a && a({
                                query: n,
                                hasResults: !!e.length,
                                isLoaded: o
                            }),
                            i = e.slice(0, r || 3);
                        return s && i.push(s), i.length ? i : Object(w.a)()
                    })), Object(b.createSelector)(z, B, (function(e, t) {
                        return t.query
                    }), (function(e, t) {
                        return t.maxEvents
                    }), (function(e, t) {
                        return t.filter
                    }), (function(e, t, n, r, a) {
                        var o = n && a && a.indexOf(O.a.Events) >= 0,
                            s = e.slice(0, r || 1);
                        return s.length && o ? s : Object(w.a)()
                    })), (function(e, t) {
                        return t.injectedItems
                    }), (function(e, t, n, r) {
                        var a = r && r.length ? r : null;
                        return t.length || e.length || n.length ? Object(m.a)([a, n.length ? n : void 0, t.length ? t : void 0, e.length ? e : void 0]) : a ? [a] : Object(w.a)()
                    }))
                },
                Y = Object(S.a)().dynamicPropsFromState((function() {
                    return {
                        fetchStatus: B,
                        items: K()
                    }
                })).propsFromActions({
                    createLocalApiErrorHandler: Object(g.b)("TYPEAHEAD_DROPDOWN_CONTAINER_CONTEXT"),
                    fetchTypeaheadIfNeeded: function(e) {
                        return function(t, n) {
                            var r = L(n(), A(e));
                            return r && r.timestamp && Date.now() - r.timestamp <= 3e5 ? Promise.resolve() : t(N(e))
                        }
                    },
                    prefetchTypeaheadUsersIfNeeded: q.b
                }).withAnalytics({
                    element: "typeahead"
                }),
                X = n("VY6S"),
                Z = n("w6IS"),
                J = n("kIAd"),
                $ = n("Rp9C"),
                ee = (n("AxOO"), n("7nmT")),
                te = n.n(ee),
                ne = (n("cI1W"), n("yIC7"), n("W8MJ")),
                re = n.n(ne),
                ae = n("v6aA"),
                oe = n("AQOc"),
                se = n("V5Qi"),
                ie = n("G6rE"),
                ce = function(e, t) {
                    return t.conversationId
                },
                ue = Object(S.a)().propsFromState({
                    conversationId: ce,
                    conversation: function(e, t) {
                        return Object(se.a)(e, ce(0, t))
                    },
                    users: ie.e.selectAll
                }).adjustStateProps((function(e) {
                    e.conversationId;
                    var t = e.conversation,
                        n = e.users;
                    return {
                        conversation: t && Object(oe.b)(t.data, void 0, n)
                    }
                })),
                le = n("aA19"),
                de = n("OhSZ"),
                pe = n("5/+E"),
                he = n.n(pe),
                fe = n("5mJL"),
                me = n("rHpw"),
                ye = me.a.create((function(e) {
                    return {
                        root: {
                            paddingHorizontal: e.componentDimensions.gutterHorizontal,
                            paddingVertical: e.componentDimensions.gutterVertical,
                            width: "100%"
                        },
                        avatarColumn: {
                            flexGrow: 1,
                            maxWidth: e.spaces.xxLarge,
                            minWidth: "32px"
                        },
                        bodyColumn: {
                            flexGrow: 7,
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        },
                        checkIcon: {
                            color: e.colors.primary
                        },
                        disabled: {
                            opacity: .6,
                            backgroundColor: e.colors.faintGray
                        }
                    }
                })),
                ve = ue((function(e) {
                    var t = e.conversation,
                        n = e.perspective,
                        r = e.isDisabled,
                        a = e.isSelected;
                    return t ? f.createElement(fe.a, {
                        avatarCell: f.createElement(le.a, {
                            conversation: t,
                            perspective: n
                        }),
                        avatarCellStyle: ye.avatarColumn,
                        cellStyle: ye.bodyColumn,
                        style: [ye.root, !a && r && ye.disabled]
                    }, f.createElement(de.b, {
                        conversation: t,
                        perspective: n
                    }), a ? f.createElement(he.a, {
                        importantForAccessibility: "no-hide-descendants",
                        style: ye.checkIcon
                    }) : null) : null
                })),
                _e = n("3xO4"),
                Se = n.n(_e),
                ge = n("LbZ7"),
                be = n("t62R"),
                Ie = n("9Xij"),
                we = n("TIdA"),
                Re = n("A91F"),
                xe = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return d()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.image,
                            n = e.event,
                            r = e.supportText;
                        return f.createElement(Se.a, {
                            style: Ce.root
                        }, f.createElement(ge.a, {
                            withGutter: !0
                        }, f.createElement(Se.a, {
                            style: Ce.bodyColumn
                        }, r ? f.createElement(be.b, {
                            color: "deepGray",
                            size: "small"
                        }, r) : null, f.createElement(be.b, {
                            numberOfLines: 1
                        }, n)), t ? f.createElement(Se.a, {
                            style: Ce.coverContainer
                        }, f.createElement(Ie.a, {
                            ratio: 1
                        }, f.createElement(we.a, {
                            accessibilityLabel: "",
                            aspectMode: Re.a.SQUARE,
                            image: t
                        }))) : null))
                    }, t
                }(f.PureComponent),
                Ce = me.a.create((function(e) {
                    return {
                        root: {
                            paddingHorizontal: e.componentDimensions.gutterHorizontal,
                            paddingVertical: e.spaces.small
                        },
                        bodyColumn: {
                            flexGrow: 7,
                            justifyContent: "center"
                        },
                        coverContainer: {
                            backgroundColor: e.colors.lightGray,
                            borderRadius: e.borderRadii.medium,
                            flexGrow: 1,
                            justifyContent: "flex-end",
                            maxHeight: "100px",
                            maxWidth: "100px",
                            overflow: "hidden",
                            width: "25%"
                        }
                    }
                })),
                De = xe,
                Ee = n("hi+m"),
                Oe = n.n(Ee),
                Te = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    d()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this.props,
                            t = e.isDisabled,
                            n = e.resultContext,
                            r = e.topic;
                        return f.createElement(Se.a, {
                            style: [ke.root, t && ke.disabled]
                        }, f.createElement(be.b, {
                            weight: "bold",
                            withHashflags: !0
                        }, r), n ? f.createElement(Se.a, {
                            style: ke.context
                        }, this._renderIcon(), f.createElement(be.b, {
                            color: "deepGray"
                        }, n.display_string)) : null)
                    }, n._renderIcon = function() {
                        var e = this.props.resultContext;
                        return e && e.types[0] && "followable_topic" === e.types[0].type ? f.createElement(Oe.a, {
                            style: ke.icon
                        }) : null
                    }, t
                }(f.PureComponent),
                ke = me.a.create((function(e) {
                    return {
                        root: {
                            paddingHorizontal: e.componentDimensions.gutterHorizontal,
                            paddingVertical: e.spaces.small
                        },
                        context: {
                            alignItems: "center",
                            flexDirection: "row"
                        },
                        icon: {
                            color: e.colors.primary,
                            height: e.fontSizes.small,
                            paddingRight: e.spaces.xxSmall,
                            width: e.fontSizes.small
                        },
                        disabled: {
                            backgroundColor: e.colors.faintGray
                        }
                    }
                })),
                Fe = Te,
                Ae = n("3XMw"),
                Pe = n.n(Ae),
                je = n("tocL"),
                Ue = "TypeaheadUser",
                Le = n("IMA+"),
                Ne = Pe.a.h740c039,
                qe = Pe.a.fd87318c,
                Me = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    d()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this.props,
                            t = e.avatarUri,
                            n = e.disabledMessage,
                            r = e.isDisabled,
                            a = e.isProtected,
                            o = e.isSelected,
                            s = e.isVerified,
                            i = e.name,
                            c = e.screenName,
                            u = e.userId,
                            l = this._getSocialContext(),
                            d = this._getResultContext(),
                            p = l || d,
                            h = o ? f.createElement(he.a, {
                                importantForAccessibility: "no-hide-descendants",
                                style: He.checkIcon
                            }) : null;
                        return f.createElement(Le.a, {
                            avatarUri: t,
                            decoration: h,
                            disabledMessage: r ? n : void 0,
                            displayMode: "UserCompact",
                            isProtected: a,
                            isVerified: s,
                            name: i,
                            screenName: c,
                            socialContext: p,
                            testID: Ue,
                            userId: u,
                            withLink: !1
                        })
                    }, n._getSocialContext = function() {
                        var e = this.props.socialContext;
                        if (e && e.following) {
                            var t = e.followed_by ? Ne : qe;
                            return {
                                contextType: je.a.Follow,
                                text: t
                            }
                        }
                    }, n._getResultContext = function() {
                        var e = this.props.resultContext;
                        if (e && e.display_string && e.types) return {
                            contextType: "num_tweets" === e.types[0].type ? je.a.NewTweets : je.a.Follow,
                            text: e.display_string
                        }
                    }, t
                }(f.PureComponent),
                He = me.a.create((function(e) {
                    return {
                        root: {
                            flexDirection: "column-reverse",
                            paddingHorizontal: e.componentDimensions.gutterHorizontal,
                            paddingVertical: e.componentDimensions.gutterVertical
                        },
                        body: {
                            alignItems: "center"
                        },
                        checkIcon: {
                            color: e.colors.primary
                        },
                        withContext: {
                            paddingTop: e.spaces.xSmall
                        },
                        context: {
                            paddingBottom: e.spaces.micro
                        },
                        avatarColumn: {
                            flexGrow: 1,
                            justifyContent: "flex-start",
                            minWidth: 32,
                            maxWidth: e.spaces.xxLarge
                        },
                        avatar: {
                            display: "block",
                            width: "100%"
                        },
                        namesColumn: {
                            flexDirection: "column",
                            maxWidth: "100%"
                        },
                        names: {
                            alignItems: "center",
                            flexDirection: "row",
                            flexGrow: 7,
                            justifyContent: "space-between"
                        }
                    }
                })),
                Be = Me,
                We = n("htQn"),
                Ve = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, h()(u()(t), "_onViewRef", (function(e) {
                            t._viewRef = e;
                            var n = t.props.onRef;
                            n && n(e)
                        })), h()(u()(t), "_handleClick", (function() {
                            var e = t.props.item;
                            t.props.onClick && t.props.onClick(e, t.isDisabled)
                        })), t
                    }
                    d()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = this;
                        this._loaded = !0, this._viewRef && (this._rafId = window.requestAnimationFrame((function() {
                            e._viewRef && e._viewRef.setNativeProps({
                                style: {
                                    opacity: 1
                                }
                            })
                        })))
                    }, n.componentWillUnmount = function() {
                        this._rafId && window.cancelAnimationFrame(this._rafId)
                    }, n.render = function() {
                        var e = this.props,
                            t = e.domId,
                            n = e.isDisabled,
                            r = e.isFocused,
                            a = e.isInMultiSelect,
                            o = e.isSelected,
                            s = e.style;
                        return f.createElement(We.a, {
                            accessibilityRole: "button",
                            "aria-checked": !(!a || !o) || void 0,
                            "aria-selected": n ? void 0 : a && o || !a && !!r,
                            disabled: n,
                            nativeID: t,
                            onPress: this._handleClick,
                            style: [ze.root, r && ze.focused, ze.transitionStyles, this._loaded && ze.loaded, s],
                            viewRef: this._onViewRef
                        }, this._renderResult())
                    }, n._renderResult = function() {
                        var e = this.props,
                            t = e.item,
                            n = e.disabledMessage,
                            r = e.isDisabled,
                            a = e.isSelected;
                        switch (t.type) {
                            case O.b.User:
                                var o = t.data;
                                return f.createElement(Be, {
                                    avatarUri: o.profile_image_url_https,
                                    canDm: !!o.can_dm,
                                    canMediaTag: !!o.can_media_tag,
                                    disabledMessage: n,
                                    isDisabled: r,
                                    isProtected: !!o.protected,
                                    isSelected: a,
                                    isVerified: !!o.verified,
                                    name: o.name,
                                    resultContext: o.result_context,
                                    screenName: o.screen_name,
                                    socialContext: o.social_context,
                                    userId: o.id_str
                                });
                            case O.b.Event:
                                var s = t.data;
                                return f.createElement(De, {
                                    event: s.topic,
                                    image: s.primary_image && s.primary_image.original_info,
                                    supportText: s.supporting_text
                                });
                            case O.b.Hashtag:
                            case O.b.Topic:
                                var i = t.data;
                                return f.createElement(Fe, {
                                    isDisabled: r,
                                    resultContext: i.result_context,
                                    topic: i.topic
                                });
                            case O.b.DMConversation:
                                return !!this.context.loggedInUserId && f.createElement(ve, {
                                    conversationId: t.id,
                                    isDisabled: r,
                                    isSelected: a,
                                    perspective: this.context.loggedInUserId
                                });
                            case O.b.NoResult:
                                var c = t.data.text;
                                return f.createElement(be.b, {
                                    style: ze.noResult
                                }, c);
                            default:
                                return null
                        }
                    }, re()(t, [{
                        key: "isDisabled",
                        get: function() {
                            return !!this.props.isDisabled
                        }
                    }]), t
                }(f.Component);
            h()(Ve, "contextType", ae.a);
            var ze = me.a.create((function(e) {
                    return {
                        root: {
                            borderBottomColor: e.colors.borderColor,
                            borderBottomStyle: "solid",
                            borderBottomWidth: e.borderWidths.small
                        },
                        noResult: {
                            paddingHorizontal: e.componentDimensions.gutterHorizontal,
                            paddingVertical: e.spaces.small
                        },
                        loaded: {
                            opacity: 1
                        },
                        focused: {
                            backgroundColor: e.colors.faintGray
                        },
                        transitionStyles: {
                            transitionProperty: "opacity",
                            transitionDuration: "250ms",
                            opacity: 0
                        }
                    }
                })),
                Ge = Ve,
                Qe = n("I7xG"),
                Ke = n("JYMr"),
                Ye = n("0yYu"),
                Xe = n("MXDK"),
                Ze = function(e) {
                    function t(t, n) {
                        var r;
                        return r = e.call(this, t) || this, h()(u()(r), "_setFocusedItemRef", (function(e) {
                            var t = te.a.findDOMNode(e);
                            r._shouldScrollToFocusedItem && t instanceof window.Element && (Object(Xe.c)(r._getScrollParent(), t), r._shouldScrollToFocusedItem = !1)
                        })), h()(u()(r), "_resetScroll", (function() {
                            var e = r._getScrollParent();
                            e && (e.scrollTop = 0)
                        })), h()(u()(r), "_handleItemClick", (function(e, t) {
                            var n = r.props.onItemClick,
                                a = r._getFlattenedItems().indexOf(e);
                            e && !t && !r._shouldBlockInteractivity && n(e, a), r._resetFocus()
                        })), h()(u()(r), "_getResultCount", (function() {
                            return r._getFlattenedItems().length
                        })), h()(u()(r), "_getFlattenedItems", Object(Qe.a)(u()(r), (function(e) {
                            return e.items
                        }), (function(e) {
                            return Object(Z.a)(e)
                        }))), h()(u()(r), "_setFocusIndex", (function(e, t) {
                            var n = r.props.onItemFocusChanged;
                            r._shouldScrollToFocusedItem = t, r.setState({
                                focusIndex: e
                            }), n && n(r._getFlattenedItems()[e])
                        })), h()(u()(r), "_resetFocus", (function() {
                            r._setFocusIndex(r.props.withItemAlwaysSelected ? 0 : -1)
                        })), h()(u()(r), "focusNext", (function() {
                            var e = r.state.focusIndex,
                                t = r._getResultCount();
                            if (0 !== t) {
                                var n = e + 1 >= t ? 0 : e + 1;
                                r._setFocusIndex(n, !0)
                            }
                        })), h()(u()(r), "focusPrevious", (function() {
                            var e = r.state.focusIndex,
                                t = r._getResultCount();
                            if (0 !== t) {
                                var n = e - 1 < 0 ? t - 1 : e - 1;
                                r._setFocusIndex(n, !0)
                            }
                        })), h()(u()(r), "hasFocusedItem", (function() {
                            var e = r.state.focusIndex,
                                t = r._getFlattenedItems();
                            return e >= 0 && t.length > e
                        })), h()(u()(r), "selectFocusedItem", (function() {
                            var e = r.state.focusIndex,
                                t = r.props.getItemIsDisabled;
                            if (r.hasFocusedItem()) {
                                var n = r._getFlattenedItems()[e],
                                    a = !!t && t(n, n.data);
                                r._handleItemClick(n, a)
                            }
                        })), r.state = {
                            focusIndex: t.withItemAlwaysSelected ? 0 : -1,
                            showProgressBar: !1
                        }, r
                    }
                    d()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this._resetFocus()
                    }, n.componentWillUnmount = function() {
                        clearTimeout(this._interactivityTimeout), clearTimeout(this._delayedProgressTimeout)
                    }, n.UNSAFE_componentWillReceiveProps = function(e) {
                        var t = this;
                        e.items !== this.props.items && (this._resetFocus(), this._resetScroll()), !this.props.isLoading && e.isLoading && (this._delayedProgressTimeout = setTimeout((function() {
                            return t.setState({
                                showProgressBar: !0
                            })
                        }), J.a)), this.props.isLoading && !e.isLoading && (clearTimeout(this._delayedProgressTimeout), this.setState({
                            showProgressBar: !1
                        }))
                    }, n.componentDidUpdate = function(e) {
                        var t = this;
                        e.items !== this.props.items && (this._interactivityTimeout && clearTimeout(this._interactivityTimeout), this._shouldBlockInteractivity = !0, this._interactivityTimeout = setTimeout((function() {
                            t._shouldBlockInteractivity = !1
                        }), 500))
                    }, n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.domId,
                            r = t.isLoading,
                            a = t.items,
                            o = t.selectedItems,
                            s = t.style,
                            i = this.state.showProgressBar,
                            c = r || a.length,
                            u = 0,
                            l = !!o;
                        return c ? f.createElement(Se.a, {
                            accessibilityRole: "listbox",
                            "aria-multiselectable": l,
                            nativeID: n,
                            style: [Je.root, s]
                        }, f.createElement(Ke.a, {
                            ariaValueText: i ? "Loading results" : "",
                            indeterminate: i,
                            style: !i && Je.hidden
                        }), a.length ? a.map((function(t, n) {
                            var r = !Array.isArray(a[n - 1]) && n > 0,
                                o = n < a.length - 1,
                                s = Array.isArray(t) ? e._renderTypeaheadGroup(t, u, r, o) : e._renderTypeaheadItem(t, u);
                            return u += Array.isArray(t) ? t.length : 1, s
                        })) : null) : null
                    }, n._renderTypeaheadGroup = function(e, t, n, r) {
                        var a = this,
                            o = this.props.withSectionDivider;
                        return f.createElement(Se.a, {
                            key: "typeaheadGroup-" + t
                        }, o && n ? f.createElement(Ye.a, {
                            key: "typeaheadDividerTop-" + t
                        }) : null, e.map((function(e, n) {
                            return a._renderTypeaheadItem(e, t + n)
                        })), o && r ? f.createElement(Ye.a, {
                            key: "typeaheadDividerBottom-" + t
                        }) : null)
                    }, n._renderTypeaheadItem = function(e, t) {
                        var n = this.props,
                            r = n.ariaDescendantId,
                            a = n.getItemDisabledMessage,
                            o = n.getItemIsDisabled,
                            s = n.selectedItems,
                            i = this.state.focusIndex,
                            c = !(!s || !e.id) && s.indexOf(e.id) >= 0,
                            u = !!s,
                            l = i === t,
                            d = o && o(e, e.data),
                            p = a && a(e, e.data);
                        return f.createElement(Ge, {
                            disabledMessage: p,
                            domId: l ? r : void 0,
                            isDisabled: d,
                            isFocused: l,
                            isInMultiSelect: u,
                            isSelected: c,
                            item: e,
                            key: "typeaheadItem-" + t + "-" + (e.id || ""),
                            onClick: this._handleItemClick,
                            onRef: l ? this._setFocusedItemRef : void 0
                        })
                    }, n._getScrollParent = function() {
                        if (!this._scrollParent) {
                            var e = Object(Xe.a)(te.a.findDOMNode(this));
                            this._scrollParent = e === window ? null : e
                        }
                        return this._scrollParent
                    }, t
                }(f.Component),
                Je = me.a.create((function(e) {
                    return {
                        root: {},
                        hidden: {
                            visibility: "hidden"
                        }
                    }
                })),
                $e = (n("aWzz"), function(e) {
                    function t(t, n) {
                        var r;
                        return r = e.call(this, t, n) || this, h()(u()(r), "_fetchTypeaheadResultsIfNeeded", (function(e) {
                            (null == e ? void 0 : e.query) && e.fetchTypeaheadIfNeeded({
                                q: e.query,
                                src: e.source,
                                result_type: e.filter.join(","),
                                context_text: e.contextText,
                                topic_type: e.topicType
                            }).catch(e.createLocalApiErrorHandler({}))
                        })), h()(u()(r), "_setComponentRef", (function(e) {
                            r._componentRef = e
                        })), h()(u()(r), "focusNext", (function() {
                            r._componentRef && r._componentRef.focusNext()
                        })), h()(u()(r), "focusPrevious", (function() {
                            r._componentRef && r._componentRef.focusPrevious()
                        })), h()(u()(r), "selectFocusedItem", (function() {
                            r._componentRef && r._componentRef.selectFocusedItem()
                        })), h()(u()(r), "hasFocusedItem", (function() {
                            return r._componentRef && r._componentRef.hasFocusedItem()
                        })), h()(u()(r), "_handleItemClick", (function(e, t) {
                            var n = r.props,
                                a = n.analytics,
                                o = n.onItemClick,
                                s = n.query;
                            o(e, t), a.scribe({
                                action: "click",
                                data: {
                                    search_details: {
                                        query: s
                                    },
                                    targets: [$.a.forTypeaheadResult(e, t)]
                                }
                            })
                        })), h()(u()(r), "_scribeResults", (function() {
                            var e = r.props,
                                t = e.analytics,
                                n = e.items,
                                a = e.query,
                                o = Object(m.a)(Object(Z.a)(n).map((function(e, t) {
                                    return $.a.forTypeaheadResult(e, t)
                                })));
                            t.scribe({
                                action: "impression",
                                data: {
                                    items: o,
                                    search_details: {
                                        query: a
                                    }
                                }
                            })
                        })), r._debouncedFetchTypeaheadResultsIfNeeded = Object(X.a)(r._fetchTypeaheadResultsIfNeeded, 250), r.state = {
                            shouldShowPrefetchResults: !0
                        }, r
                    }
                    d()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = this.props,
                            t = e.createLocalApiErrorHandler,
                            n = e.onRef,
                            r = e.prefetchTypeaheadUsersIfNeeded;
                        n && n(this), this._debouncedFetchTypeaheadResultsIfNeeded(this.props), r().catch(t({}))
                    }, n.componentWillUnmount = function() {
                        this.props.onRef && this.props.onRef(void 0), clearTimeout(this._prefetchResultsTimer)
                    }, n.UNSAFE_componentWillReceiveProps = function(e) {
                        var t = this,
                            n = this.props,
                            r = n.onRef,
                            a = n.query,
                            o = n.filter,
                            s = n.source,
                            i = e.query,
                            c = e.filter,
                            u = e.source;
                        r && r !== e.onRef && r(void 0), i === a && c === o && u === s || (this._debouncedFetchTypeaheadResultsIfNeeded(e), e.shouldDeferPrefetch && (clearTimeout(this._prefetchResultsTimer), this.setState({
                            shouldShowPrefetchResults: !1
                        }), this._prefetchResultsTimer = setTimeout((function() {
                            t.props.query && t.props.fetchStatus !== R.a.LOADED && t.setState({
                                shouldShowPrefetchResults: !0
                            })
                        }), J.a)))
                    }, n.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.onRef,
                            r = t.items;
                        n && n !== e.onRef && n(this), (null == r ? void 0 : r.length) && r !== e.items && this._scribeResults()
                    }, n.render = function() {
                        var e = this.props,
                            t = (e.analytics, e.contextText, e.filter, e.getTopicExactMatch, e.getUserExactMatch, e.injectedItems),
                            n = e.items,
                            r = (e.onRef, e.onItemClick, e.query),
                            a = (e.shouldDeferPrefetch, e.source, e.topicType, e.fetchStatus),
                            s = (e.createLocalApiErrorHandler, e.fetchTypeaheadIfNeeded, e.maxEvents, e.maxTopics, e.prefetchTypeaheadUsersIfNeeded, i()(e, ["analytics", "contextText", "filter", "getTopicExactMatch", "getUserExactMatch", "injectedItems", "items", "onRef", "onItemClick", "query", "shouldDeferPrefetch", "source", "topicType", "fetchStatus", "createLocalApiErrorHandler", "fetchTypeaheadIfNeeded", "maxEvents", "maxTopics", "prefetchTypeaheadUsersIfNeeded"])),
                            c = r && a !== R.a.LOADED,
                            u = c && !this.state.shouldShowPrefetchResults ? t : n;
                        return f.createElement(Ze, o()({}, s, {
                            isLoading: !!c,
                            items: u,
                            onItemClick: this._handleItemClick,
                            ref: this._setComponentRef
                        }))
                    }, t
                }(f.Component));
            h()($e, "defaultProps", {
                filter: [O.a.Users],
                injectedItems: [],
                maxEvents: 3,
                maxTopics: 1
            });
            var et = Y($e);
            t.a = et
        },
        V2l4: function(e, t, n) {
            "use strict";
            n.r(t);
            n("yIC7");
            var r = n("PJYZ"),
                a = n.n(r),
                o = n("VbXa"),
                s = n.n(o),
                i = n("lSNA"),
                c = n.n(i),
                u = n("ERkP"),
                l = n("3XMw"),
                d = n.n(l),
                p = "searchPeople",
                h = n("4e/K"),
                f = n("3xO4"),
                m = n.n(f),
                y = n("aV/s"),
                v = n("rHpw"),
                _ = n("GZwR");
            n.d(t, "UserPicker", (function() {
                return I
            }));
            var S = [_.a.Users],
                g = d.a.g40ba985,
                b = d.a.f7c11d6c,
                I = function(e) {
                    function t(t, n) {
                        var r;
                        return r = e.call(this, t, n) || this, c()(a()(r), "_renderSelectedUsersList", (function() {
                            var e = r.props.selectedUsers;
                            return u.createElement(m.a, {
                                style: w.selectedUsersList
                            }, e.map(r._renderSelectedUserPill))
                        })), c()(a()(r), "_renderSelectedUserPill", (function(e) {
                            var t, n = r.props.withCompactPills,
                                o = r.props.onRemove.bind(a()(r), e);
                            return e.type === _.b.User && (t = e.data.profile_image_url_https), u.createElement(y.a, {
                                accessibilityLabel: b({
                                    name: e.data.name
                                }),
                                compact: n,
                                key: e.id,
                                mode: "remove",
                                onClick: o,
                                style: w.selectionPill,
                                text: e.data.name,
                                userAvatarURI: t
                            })
                        })), c()(a()(r), "_getItemIsDisabled", (function(e) {
                            var t = r.props,
                                n = t.getItemIsDisabled;
                            return t.preselectedUsers.indexOf(e.id) >= 0 || !(!n || !n(e))
                        })), c()(a()(r), "_getItemDisabledMessage", (function(e) {
                            var t = r.props,
                                n = t.getItemDisabledMessage;
                            return t.preselectedUsers.indexOf(e.id) >= 0 ? null : n && n(e)
                        })), c()(a()(r), "_handleQueryChange", (function(e) {
                            var t = r.props.onQueryChange;
                            r.setState({
                                query: e
                            }), t && t(e)
                        })), c()(a()(r), "_handleOnSelect", (function(e) {
                            var t = r.props.onSelect;
                            t && t(e)
                        })), r.state = {
                            query: ""
                        }, r
                    }
                    return s()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.injections,
                            n = e.selectedUsers,
                            r = e.shouldAutoFocus,
                            a = e.preselectedUsers,
                            o = e.source,
                            s = n.map((function(e) {
                                return e.id
                            })).concat(a);
                        return u.createElement(m.a, {
                            style: w.root
                        }, u.createElement(h.default, {
                            alwaysOpen: !0,
                            disableClearButton: !0,
                            filter: S,
                            getItemDisabledMessage: this._getItemDisabledMessage,
                            getItemIsDisabled: this._getItemIsDisabled,
                            injectedItems: t,
                            isModal: !0,
                            onItemClick: this._handleOnSelect,
                            onQueryChange: this._handleQueryChange,
                            placeholder: g,
                            renderInSearchField: n.length ? this._renderSelectedUsersList : null,
                            selectedItems: s,
                            shouldAutoFocus: r,
                            shouldClearOnSelect: !0,
                            shouldFocusOnClear: !0,
                            source: o,
                            testID: p,
                            withSectionDivider: !1
                        }))
                    }, t
                }(u.Component);
            c()(I, "defaultProps", {
                preselectedUsers: [],
                shouldAutoFocus: !0,
                withCompactPills: !1
            });
            var w = v.a.create((function(e) {
                return {
                    root: {
                        flex: 1
                    },
                    selectionPill: {
                        margin: e.spaces.xxSmall
                    },
                    selectedUsersList: {
                        flexDirection: "row",
                        flexWrap: "wrap",
                        padding: e.spaces.xxSmall
                    }
                }
            }));
            t.default = I
        },
        "aV/s": function(e, t, n) {
            "use strict";
            var r = n("W/Kd"),
                a = n.n(r),
                o = n("KEM+"),
                s = n.n(o),
                i = n("ERkP"),
                c = n("t62R"),
                u = n("5/+E"),
                l = n.n(u),
                d = n("l2F/"),
                p = n.n(d),
                h = n("B4TA"),
                f = n.n(h),
                m = n("I4+6"),
                y = n("cm6r"),
                v = n("rHpw"),
                _ = n("oSwX"),
                S = (n("aWzz"), n("3xO4")),
                g = n.n(S),
                b = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    a()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this.props,
                            t = e.accessibilityLabel,
                            n = e.compact,
                            r = e.onClick,
                            a = e.selected,
                            o = e.style,
                            s = e.text,
                            u = e.userAvatarURI,
                            l = this._renderIcon(),
                            d = [I.root, n && I.compact, a && I.selected, u && (n && I.withAvatarImageCompact || I.withAvatarImage), o],
                            p = m.a.generate({
                                backgroundColor: a ? v.a.theme.colors.primary : "transparent",
                                color: a ? v.a.theme.colors.white : v.a.theme.colors.primary
                            });
                        return i.createElement(y.a, {
                            accessibilityLabel: t,
                            interactiveStyles: p,
                            onPress: r,
                            style: d
                        }, i.createElement(g.a, {
                            style: I.content
                        }, this._renderUserAvatar(), i.createElement(c.b, {
                            color: a ? "whiteOnColor" : "primary",
                            selectable: !1
                        }, s), l))
                    }, n._renderIcon = function() {
                        var e = this.props,
                            t = e.mode,
                            n = e.selected,
                            r = [I.icon, n && I.iconSelected];
                        switch (t) {
                            case "remove":
                                return i.createElement(p.a, {
                                    style: r
                                });
                            case "expand":
                                return i.createElement(f.a, {
                                    style: r
                                });
                            case "active":
                                return i.createElement(l.a, {
                                    style: r
                                });
                            default:
                                return null
                        }
                    }, n._renderUserAvatar = function() {
                        var e = this.props,
                            t = e.compact,
                            n = e.userAvatarURI;
                        return n ? i.createElement(g.a, {
                            style: I.avatarContainer
                        }, i.createElement(_.default, {
                            size: "custom",
                            style: [t && I.avatarCompact || I.avatar],
                            uri: n
                        })) : null
                    }, t
                }(i.PureComponent);
            s()(b, "defaultProps", {
                compact: !1,
                selected: !1
            }), b.propTypes = {};
            var I = v.a.create((function(e) {
                return {
                    root: {
                        backgroundColor: e.colors.cellBackground,
                        borderColor: e.colors.primary,
                        borderRadius: e.borderRadii.infinite,
                        borderStyle: "solid",
                        borderWidth: "1px",
                        minHeight: e.spaces.xLarge,
                        paddingHorizontal: e.spaces.xSmall
                    },
                    content: {
                        alignItems: "center",
                        flexDirection: "row",
                        flexGrow: 1,
                        flexWrap: "nowrap"
                    },
                    compact: {
                        minHeight: e.spaces.large
                    },
                    selected: {
                        backgroundColor: e.colors.primary
                    },
                    avatar: {
                        height: "calc(" + e.spaces.large + " + " + e.spaces.micro + ")",
                        width: "calc(" + e.spaces.large + " + " + e.spaces.micro + ")"
                    },
                    avatarCompact: {
                        height: "calc(" + e.spaces.medium + " + " + e.spaces.micro + " * 2)",
                        width: "calc(" + e.spaces.medium + " + " + e.spaces.micro + " * 2)"
                    },
                    avatarContainer: {
                        paddingRight: e.spaces.xxSmall
                    },
                    icon: {
                        color: e.colors.primary,
                        marginLeft: e.spaces.xSmall
                    },
                    iconSelected: {
                        color: e.colors.whiteOnColor
                    },
                    withAvatarImage: {
                        paddingLeft: "calc(" + e.spaces.micro + " * 2)"
                    },
                    withAvatarImageCompact: {
                        paddingLeft: "calc(" + e.spaces.nano + " * 3)"
                    }
                }
            }));
            t.a = b
        },
        bJYH: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "GenericTypeaheadComposeWrapper", (function() {
                return O
            }));
            n("cI1W"), n("PN9k");
            var r = n("PJYZ"),
                a = n.n(r),
                o = n("VbXa"),
                s = n.n(o),
                i = n("lSNA"),
                c = n.n(i),
                u = n("ERkP"),
                l = n("oEoC"),
                d = n("aWzz"),
                p = n("oQhu"),
                h = n("7nmT"),
                f = n.n(h),
                m = n("WPfJ"),
                y = n("OEYw"),
                v = n("3xO4"),
                _ = n.n(v),
                S = n("7JQg"),
                g = n("0FVZ"),
                b = n("xoZN"),
                I = n("rHpw"),
                w = n("GZwR"),
                R = [w.a.Users],
                x = [w.a.Topics],
                C = 50,
                D = 20,
                E = 0,
                O = function(e) {
                    function t(t, n) {
                        var r;
                        return r = e.call(this, t, n) || this, c()(a()(r), "_typeaheadActive", !1), c()(a()(r), "_dropdownDomId", "typeaheadDropdownWrapped-" + E++), c()(a()(r), "_renderTypeaheadDropdown", (function(e) {
                            var t = r.props,
                                n = t.contextText,
                                a = t.isInline,
                                o = t.onSelectItem,
                                s = t.scribeNamespace,
                                i = t.source,
                                c = r.context.isModal,
                                l = e.resultType === w.a.Topics ? "hashtag" : void 0,
                                d = u.createElement(y.a, {
                                    ariaDescendantId: r.state.ariaDescendantId,
                                    contextText: n,
                                    domId: r._dropdownDomId,
                                    filter: r._getFilter(e.resultType),
                                    maxTopics: 8,
                                    onItemClick: o,
                                    onItemFocusChanged: r._handleItemFocusChanged,
                                    onRef: r._handleTypeaheadRef,
                                    query: e.word,
                                    source: i,
                                    style: r._calcStyle(),
                                    topicType: l,
                                    withItemAlwaysSelected: !0
                                });
                            return c || a ? u.createElement(g.a.HalfSheet, null, u.createElement(S.c, {
                                namespace: s
                            }, u.createElement(u.Fragment, null, u.createElement(_.a, {
                                onClick: r._handleDismiss,
                                style: T.mask
                            }), d))) : u.createElement(u.Fragment, null, u.createElement(_.a, {
                                onClick: r._handleDismiss,
                                style: T.mask
                            }), d)
                        })), c()(a()(r), "render", (function() {
                            var e = r.props,
                                t = e.children,
                                n = e.query,
                                a = u.cloneElement(t, {
                                    ariaAutocomplete: "list",
                                    ariaControls: r._dropdownDomId,
                                    ariaActiveDescendant: r.state.ariaDescendantId,
                                    ref: function(e) {
                                        r._textInputNode = f.a.findDOMNode(e), r._textInputRef = e;
                                        var n = t.ref;
                                        n && n(e)
                                    }
                                });
                            return u.createElement(_.a, {
                                style: T.inputContainer
                            }, u.createElement(b.a, {
                                onKeyDown: r._handleKeyDown
                            }, a, r._textInputNode && n ? r._renderTypeaheadDropdown(n) : null))
                        })), c()(a()(r), "_getFilter", (function(e) {
                            return "users" === e ? R : x
                        })), c()(a()(r), "_calcStyle", (function() {
                            var e = r.context.isModal,
                                t = r.props.isInline,
                                n = r._textInputNode,
                                a = window.innerHeight,
                                o = window.innerWidth,
                                s = r._textInputRef && r._textInputRef.getTextInputHeight() || D;
                            if (n instanceof window.HTMLElement) {
                                var i = n.getBoundingClientRect();
                                return e || t ? [r._getDropdownPositioningStyle(a, o, i.top, i.top + s, i.left), T.dropdownStyle] : [r._getInlinePositioningStyle(s), T.inlineStyle]
                            }
                            return [r._getDropdownPositioningStyle(s, o, 0, 0, 0), T.dropdownStyle]
                        })), c()(a()(r), "_handleKeyDown", (function(e) {
                            var t = r.state.selectedItem,
                                n = r.props,
                                a = n.onSelectItem,
                                o = n.query,
                                s = e.key;
                            l.e(e) && o && ("ArrowDown" === s ? (r._typeaheadRef && r._typeaheadRef.focusNext(), e.preventDefault()) : "ArrowUp" === s ? (r._typeaheadRef && r._typeaheadRef.focusPrevious(), e.preventDefault()) : "Enter" === s || "Tab" === s ? t && (a(t), e.preventDefault()) : "Escape" === s && (r._handleDismiss(), e.preventDefault()))
                        })), c()(a()(r), "_handleItemFocusChanged", (function(e) {
                            return r.setState({
                                ariaDescendantId: l.b(),
                                selectedItem: e
                            })
                        })), c()(a()(r), "_handleTypeaheadRef", (function(e) {
                            r._typeaheadRef = e
                        })), c()(a()(r), "_handleDismiss", (function() {
                            r._textInputRef && r._textInputRef.focus(), r.props.onDismiss()
                        })), c()(a()(r), "_getDropdownHeight", Object(p.a)((function(e, t) {
                            var n = e * C / 100;
                            return n > t ? t : n
                        }))), c()(a()(r), "_getDropdownPositioningStyle", Object(p.a)((function(e, t, n, a, o) {
                            void 0 === n && (n = 0), void 0 === a && (a = 0), void 0 === o && (o = 0);
                            var s = e - a,
                                i = n,
                                c = i > s,
                                u = s / e < C / 100,
                                l = t - o - 10,
                                d = Math.min(l, 300);
                            return u && c ? {
                                bottom: e - n + "px",
                                left: o + "px",
                                maxHeight: r._getDropdownHeight(e, i - 10) + "px",
                                maxWidth: l + "px",
                                minWidth: d + "px"
                            } : {
                                top: a + "px",
                                left: o + "px",
                                maxHeight: r._getDropdownHeight(e, s - 10) + "px",
                                maxWidth: l + "px",
                                minWidth: d + "px"
                            }
                        }))), c()(a()(r), "_getInlinePositioningStyle", Object(p.a)((function(e) {
                            return {
                                position: "absolute",
                                top: (e || 0) + "px",
                                overflowX: "hidden",
                                overflowY: "auto"
                            }
                        }))), r.state = {
                            ariaDescendantId: l.b()
                        }, r
                    }
                    s()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = this.props.setRef;
                        e && e(this)
                    }, n.componentDidUpdate = function() {
                        var e = this.props,
                            t = e.onTypeaheadStateChange,
                            n = e.query,
                            r = !(!this._textInputNode || !n);
                        r !== this._typeaheadActive && (this._typeaheadActive = r, t && t(r))
                    }, n.resetSelectedItem = function() {
                        this.setState({
                            selectedItem: void 0
                        })
                    }, t
                }(u.Component);
            c()(O, "contextTypes", {
                isModal: d.bool
            }), c()(O, "defaultProps", {
                source: w.d.Compose
            });
            var T = I.a.create((function(e) {
                return {
                    dropdownStyle: {
                        backgroundColor: e.colors.cellBackground,
                        borderRadius: e.borderRadii.medium,
                        boxShadow: e.boxShadows.medium,
                        minHeight: 100,
                        position: "fixed",
                        overflowX: "hidden",
                        overflowY: "auto"
                    },
                    mask: Object.assign({}, I.a.absoluteFillObject, {
                        position: "fixed"
                    }),
                    inlineStyle: {
                        backgroundColor: e.colors.cellBackground,
                        right: 0,
                        left: 0,
                        borderTopColor: e.colors.borderColor,
                        borderTopStyle: "solid",
                        borderTopWidth: e.borderWidths.small,
                        minHeight: 100
                    },
                    inputContainer: {
                        flexGrow: 1,
                        position: "static",
                        width: "100%",
                        zIndex: m.g
                    }
                }
            }));
            t.default = Object(S.d)({
                component: "compose"
            })(O)
        },
        o52z: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return o
            }));
            var r = n("VPAj"),
                a = Object(r.a)([]),
                o = Object(r.a)({})
        },
        rRIm: function(e, t, n) {
            "use strict";
            n("PN9k"), n("Bu8c");
            var r = n("PJYZ"),
                a = n.n(r),
                o = n("VbXa"),
                s = n.n(o),
                i = n("lSNA"),
                c = n.n(i),
                u = n("ERkP"),
                l = n("sTyV"),
                d = n("rxPX"),
                p = n("G6rE"),
                h = Object(d.a)().propsFromState({
                    loggedInUser: p.e.selectLoggedInUser
                }).adjustStateProps((function(e) {
                    var t = e.loggedInUser;
                    return {
                        loggedInUserScreenName: t ? t.screen_name : void 0
                    }
                })),
                f = n("3XMw"),
                m = n.n(f),
                y = n("BcsE"),
                v = n("V/Zl"),
                _ = n("OrGc"),
                S = n("QK5w"),
                g = n("uScj"),
                b = n("aITJ"),
                I = n("3xO4"),
                w = n.n(I),
                R = n("TnY3"),
                x = n("rHpw"),
                C = n("t62R");
            n("aWzz");
            n.d(t, "b", (function() {
                return k
            }));
            var D = m.a.b92f34d0,
                E = m.a.h61e78de,
                O = new g.a,
                T = function(e) {
                    if (e.target instanceof HTMLInputElement) {
                        var t = e.target.tagName.toLowerCase();
                        return "input" === t || "textarea" === t
                    }
                    return !1
                },
                k = function(e) {
                    return O.subscribe(e).unsubscribe
                },
                F = h(function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(a()(t), "_bindKeyboardShortcuts", (function() {
                            var e, n, r, a = t.props,
                                o = a.history,
                                s = a.loggedInUserScreenName,
                                i = function(e) {
                                    return function(t) {
                                        t.preventDefault(), O._listeners.length ? O.notify(e) : o.push({
                                            pathname: "/explore",
                                            state: {
                                                searchFocused: !0,
                                                searchPrefill: e
                                            }
                                        })
                                    }
                                },
                                c = ((e = {})[_.d.search] = i(), e[_.d.goToUser] = i("@"), e[_.d.openKeyboardShortcuts] = function() {
                                    return o.push("/i/keyboard_shortcuts")
                                }, e[_.d.goExplore] = function() {
                                    return o.push("/explore")
                                }, e[_.d.goSettings] = function() {
                                    return o.push("/settings")
                                }, e),
                                u = s ? ((n = {})[_.d.goProfile] = function() {
                                    return o.push("/" + s)
                                }, n[_.d.goLikes] = function() {
                                    return o.push("/" + s + "/likes")
                                }, n[_.d.goLists] = function() {
                                    return o.push("/" + s + "/lists")
                                }, n) : {},
                                d = Object.assign({}, c, {}, u, ((r = {})[_.d.goHome] = function() {
                                    return o.push("/home")
                                }, r[_.d.goDisplay] = function() {
                                    return o.push("/i/display")
                                }, r[_.d.goNotifications] = function() {
                                    return o.push("/notifications")
                                }, r[_.d.goMentions] = function() {
                                    return o.push("/notifications/mentions")
                                }, r[_.d.goMessages] = function() {
                                    return o.push("/messages")
                                }, r[_.d.newMessage] = function() {
                                    return o.push("/messages/compose")
                                }, r[_.d.newTweet] = function() {
                                    return o.push("/compose/tweet")
                                }, r[_.d.goBookmarks] = function() {
                                    return o.push("/i/bookmarks")
                                }, r)),
                                p = t.props.loggedInUserScreenName ? d : c;
                            t._unbindKeyboardShortcuts = Object(l.a)(p)
                        })), c()(a()(t), "_handleKeyDown", (function(e) {
                            T(e) || "Backspace" !== e.key || (t._backspaceDown = Date.now(), e.preventDefault(), e.stopPropagation())
                        })), c()(a()(t), "_handleKeyUp", (function(e) {
                            if (!T(e) && "Backspace" === e.key) {
                                e.preventDefault(), e.stopPropagation();
                                var n = t._backspaceDown,
                                    r = !!Object(y.a)(n) && Date.now() - n < 500,
                                    a = Object(S.a)({}, {
                                        location: t.props.location
                                    });
                                r && a ? t.props.history.goBack() : window.close()
                            }
                        })), t
                    }
                    s()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this._bindKeyboardShortcuts(), b.a.isKaiOS() && Object(v.a)() && (document.addEventListener("keydown", this._handleKeyDown), document.addEventListener("keyup", this._handleKeyUp))
                    }, n.componentWillUnmount = function() {
                        this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(), b.a.isKaiOS() && Object(v.a)() && (document.removeEventListener("keydown", this._handleKeyDown), document.removeEventListener("keyup", this._handleKeyUp))
                    }, n.render = function() {
                        return this.props.loggedInUserScreenName ? u.createElement(w.a, {
                            accessibilityRole: "heading",
                            "aria-level": "2",
                            style: x.a.visuallyHidden
                        }, u.createElement(C.b, null, D), u.createElement(C.b, {
                            importantForAccessibility: "no",
                            link: "/i/keyboard_shortcuts"
                        }, E)) : null
                    }, t
                }(u.Component));
            t.a = Object(R.a)(F)
        },
        sYRn: function(e, t, n) {
            "use strict";
            var r = n("ERkP"),
                a = n("eb3s"),
                o = n("3XMw"),
                s = n.n(o),
                i = s.a.b08b6c00,
                c = s.a.af6a2c4a,
                u = s.a.h74cf577;
            t.a = function(e) {
                var t = e.onCancel,
                    n = e.onConfirm;
                return r.createElement(a.a, {
                    confirmButtonLabel: u,
                    confirmButtonType: "destructive",
                    headline: i,
                    onCancel: t,
                    onConfirm: n,
                    text: c
                })
            }
        },
        v4XE: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return y
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "a", (function() {
                return _
            })), n.d(t, "b", (function() {
                return S
            }));
            n("yKDW"), n("dtAy");
            var r, a = n("RIqP"),
                o = n.n(a),
                s = (n("PN9k"), n("kGix")),
                i = n("Ssj5"),
                c = n("RqPI"),
                u = n("oEOe"),
                l = "rweb/savedSearches",
                d = {
                    fetchStatus: s.a.NONE,
                    savedSearches: []
                },
                p = Object(u.a)(l, "FETCH_SAVED_SEARCHES"),
                h = Object(u.a)(l, "SAVE_SEARCH"),
                f = Object(u.a)(l, "DELETE_SAVED_SEARCH");

            function m(e, t) {
                switch (void 0 === e && (e = d), t.type) {
                    case p.SUCCESS:
                        return Object.assign({}, e, {
                            fetchStatus: s.a.LOADED,
                            savedSearches: t.payload
                        });
                    case p.FAILURE:
                        return Object.assign({}, e, {
                            fetchStatus: s.a.FAILED
                        });
                    case h.SUCCESS:
                        return Object.assign({}, e, {
                            savedSearches: [].concat(o()(e.savedSearches), [t.payload])
                        });
                    case f.SUCCESS:
                        return Object.assign({}, e, {
                            savedSearches: e.savedSearches.filter((function(e) {
                                return e.id_str !== t.payload.id_str
                            }))
                        });
                    default:
                        return e
                }
            }
            i.a.register(((r = {}).savedSearches = m, r));
            var y = function(e) {
                    return e.savedSearches.savedSearches
                },
                v = function(e) {
                    return function(t, n, r) {
                        var a = r.api;
                        return Object(u.b)(t, {
                            request: a.SavedSearches.create,
                            params: {
                                query: e
                            }
                        })({
                            actionTypes: h,
                            context: "SAVE_SEARCH"
                        })
                    }
                },
                _ = function(e) {
                    return function(t, n, r) {
                        var a = r.api;
                        return Object(u.b)(t, {
                            request: a.SavedSearches.destroy,
                            params: {
                                id: e
                            }
                        })({
                            actionTypes: f,
                            context: "DELETE_SAVED_SEARCH"
                        })
                    }
                },
                S = function() {
                    return function(e, t, n) {
                        n.api;
                        var r = t();
                        return Object(c.e)(r) ? function(e) {
                            return e.savedSearches.fetchStatus
                        }(r) === s.a.LOADED ? Promise.resolve() : e((function(e, t, n) {
                            var r = n.api;
                            return Object(u.b)(e, {
                                request: r.SavedSearches.fetch,
                                params: {}
                            })({
                                actionTypes: p,
                                context: "FETCH_SAVED_SEARCHES"
                            })
                        })) : Promise.resolve()
                    }
                }
        },
        wtjx: function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() {
                return u
            })), n.d(t, "f", (function() {
                return l
            })), n.d(t, "e", (function() {
                return d
            })), n.d(t, "d", (function() {
                return m
            })), n.d(t, "b", (function() {
                return v
            })), n.d(t, "a", (function() {
                return S
            })), n.d(t, "c", (function() {
                return g
            }));
            n("PN9k"), n("yKDW"), n("dtAy");
            var r, a = n("Ssj5"),
                o = n("RqPI"),
                s = function(e) {
                    return function(t, n, r) {
                        return r.userPersistence.set("rweb.recentSearches", {
                            recentSearches: e
                        }).catch((function() {
                            Promise.resolve()
                        }))
                    }
                },
                i = function(e, t) {
                    var n = [];
                    if (e && e.user) {
                        var r = e.user;
                        n = t.filter((function(e) {
                            return e.keyword || e.user && e.user.id !== r.id
                        }))
                    } else if (e && e.keyword) {
                        var a = e.keyword;
                        n = t.filter((function(e) {
                            return e.keyword && e.keyword.query !== a.query || e.user
                        }))
                    }
                    return n
                },
                c = {
                    fetched: !1,
                    recentSearches: []
                };
            a.a.register(((r = {}).recentSearches = function(e, t) {
                switch (void 0 === e && (e = c), t.type) {
                    case _:
                        var n = t.payload,
                            r = n ? i(n, e.recentSearches) : [];
                        return r.length > 49 && r.splice(49, 1), n && r.unshift(n), Object.assign({}, e, {
                            recentSearches: r
                        });
                    case f:
                        var a = t.payload,
                            o = a ? i(a, e.recentSearches) : [];
                        return Object.assign({}, e, {
                            recentSearches: o
                        });
                    case y:
                        return {
                            fetched: !0,
                            recentSearches: []
                        };
                    case p:
                        return Object.assign({}, e, {}, t.payload, {
                            fetched: !0
                        });
                    default:
                        return e
                }
            }, r));
            var u = function(e) {
                    return e.recentSearches.recentSearches
                },
                l = function(e) {
                    return u(e)[0] || null
                },
                d = function(e) {
                    return e.recentSearches.fetched
                },
                p = "rweb/recentSearches/INIT_FROM_CACHE",
                h = function(e) {
                    return {
                        type: p,
                        payload: e
                    }
                },
                f = "rweb/recentSearches/REMOVE_QUERY",
                m = function(e) {
                    return function(t, n, r) {
                        r.userPersistence;
                        t({
                            payload: e,
                            type: f
                        });
                        var a = n().recentSearches;
                        return Object(o.e)(n()) ? t(s(a.recentSearches)) : Promise.resolve()
                    }
                },
                y = "rweb/recentSearches/CLEAR_ALL",
                v = function() {
                    return function(e, t, n) {
                        n.userPersistence;
                        e({
                            type: y
                        });
                        var r = t().recentSearches;
                        return Object(o.e)(t()) ? e(s(r.recentSearches)) : Promise.resolve()
                    }
                },
                _ = "rweb/recentSearches/ADD_QUERY",
                S = function(e) {
                    return function(t, n, r) {
                        r.userPersistence;
                        t({
                            payload: e,
                            type: _
                        });
                        var a = n().recentSearches;
                        return Object(o.e)(n()) ? t(s(a.recentSearches)) : Promise.resolve()
                    }
                },
                g = function() {
                    return function(e, t, n) {
                        n.userPersistence;
                        return t().recentSearches.fetched ? Promise.resolve() : e((function(e, t, n) {
                            var r = n.userPersistence,
                                a = t();
                            return Object(o.e)(a) ? r.get("rweb.recentSearches").then((function(t) {
                                e(h(t))
                            })).catch((function() {
                                e(h())
                            })) : (e(h()), Promise.resolve())
                        }))
                    }
                }
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.Typeahead.415bfd64.js.map