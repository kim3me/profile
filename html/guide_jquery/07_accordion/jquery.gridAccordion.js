(function (d) {
		function aa(Q, A) {
				function s() {
						b.settings.shuffle && g.sort(function () {
								return 0.5 - Math.random()
						});
						if (b.settings.preloadPanels) {
								ba();
								for (var a = 0, f = g.length, i = 0; i < f; i++) d("<img/>").load(function () {
										a++;
										if (a == f) {
												q.find(".preloader").remove();
												W()
										}
								}).attr("src", g[i].path)
						} else W()
				}

				function W() {
						r = g.length;
						j = b.settings.columns;
						E = Math.ceil(r / j);
						x = (b.settings.width - (j - 1) * b.settings.distance) / b.settings.columns;
						F = (b.settings.height - (E - 1) * b.settings.distance) / Math.ceil(r / b.settings.columns);
						R = b.settings.width -
								(j - 1) * (b.settings.closedPanelWidth + b.settings.distance);
						S = b.settings.height - (E - 1) * (b.settings.closedPanelHeight + b.settings.distance);
						var a = d('<div class="panel"></div>').appendTo(q);
						p = (isNaN(parseInt(a.css("borderLeftWidth"))) ? 0 : parseInt(a.css("borderLeftWidth"))) + (isNaN(parseInt(a.css("borderRightWidth"))) ? 0 : parseInt(a.css("borderRightWidth")));
						t = (isNaN(parseInt(a.css("borderTopWidth"))) ? 0 : parseInt(a.css("borderTopWidth"))) + (isNaN(parseInt(a.css("borderBottomWidth"))) ? 0 : parseInt(a.css("borderBottomWidth")));
						a.remove();
						for (a = 0; a < r; a++) ca(a);
						b.settings.slideshow && T();
						q.hover(function () {
								b.settings.slideshow && b.settings.stopSlideshowOnHover && G && clearInterval(G)
						}, function () {
								b.settings.closePanelOnMouseOut && da();
								b.settings.slideshow && b.settings.stopSlideshowOnHover && T()
						})
				}

				function ca(a) {
						var f = d('<li class="panel"></li>').appendTo(q);
						h.push(f);
						g[a].width = R;
						g[a].height = S;
						if (g[a].flo_cont) {
							var n = g[a].flo_cont,
							O = d('<div class="flo_cont"></div>').html(n).appendTo(h[a]);
						}
						if (g[a].flo_cont_bot) {
							var n2 = g[a].flo_cont_bot,
							O2 = d('<div class="flo_cont_bot"></div>').html(n2).appendTo(h[a]);
						}
						d("<img/>").load(function () {
								h[a].css("background-image", "url(" + d(this).attr("src") + ")");
								switch (g[a].properties.alignType) {
								case "leftTop":
										h[a].css("background-position",
												"left top");
										break;
								case "leftCenter":
										h[a].css("background-position", "left center");
										break;
								case "leftBottom":
										h[a].css("background-position", "left bottom");
										break;
								case "centerTop":
										h[a].css("background-position", "center top");
										break;
								case "centerCenter":
										h[a].css("background-position", "center center");
										break;
								case "centerBottom":
										h[a].css("background-position", "center bottom");
										break;
								case "rightTop":
										h[a].css("background-position", "right top");
										break;
								case "rightCenter":
										h[a].css("background-position", "right center");
										break;
								case "rightBottom":
										h[a].css("background-position", "right bottom");
										break;
								case "default":
										h[a].css("background-position", "left top")
								}
								b.settings.shadow && d('<div class="shadow"></div>').appendTo(f);
								g[a].width = d(this).attr("width") || d(this).prop("width");
								g[a].height = d(this).attr("height") || d(this).prop("height");
								var e = {
										type: "panelLoaded",
										index: a,
										data: g[a]
								};
								d.isFunction(b.settings.panelLoaded) && b.settings.panelLoaded.call(this, e)
						}).attr("src", g[a].path);
						f.css("width", x - p);
						f.css("height", F - t);
						f.css("left",
								a % j * (x + b.settings.distance));
						f.css("top", Math.floor(a / j) * (F + b.settings.distance));
						f.hover(function () {
								if (b.settings.openPanelOnMouseOver) {
										H && clearTimeout(H);
										H = setTimeout(function () {
												I(a)
										}, b.settings.openPanelDelay)
								}
								var e = {
										type: "panelMouseOver",
										index: a,
										data: g[a]
								};
								d.isFunction(b.settings.panelMouseOver) && b.settings.panelMouseOver.call(this, e)
						}, function () {
								var e = {
										type: "panelMouseOut",
										index: a,
										data: g[a]
								};
								d.isFunction(b.settings.panelMouseOut) && b.settings.panelMouseOut.call(this, e)
						});
						g[a].link && f.css("cursor",
								"pointer");
						f.click(function () {
								b.settings.openPanelOnClick && I(a);
								g[a].link && window.open(g[a].link, g[a].properties.linkTarget);
								var e = {
										type: "panelClick",
										index: a,
										data: g[a]
								};
								d.isFunction(b.settings.panelClick) && b.settings.panelClick.call(this, e)
						});
						var i = {
								type: "panelCreated",
								index: a,
								data: g[a]
						};
						d.isFunction(b.settings.panelCreated) && b.settings.panelCreated.call(this, i);
						if (a == g.length - 1) {
								i = {
										type: "allPanelsCreated"
								};
								d.isFunction(b.settings.allPanelsCreated) && b.settings.allPanelsCreated.call(this, i)
						}
				}

				function I(a) {
						if (!(m ==
								a && M == "opened")) {
								M = "opened";
								m != -1 && h[m].stop();
								m = a;
								var f = {
										type: "openPanel",
										index: a,
										data: g[a]
								};
								d.isFunction(b.settings.openPanel) && b.settings.openPanel.call(this, f);
								X();
								var i = false;
								f = h[m];
								var e, l;
								if (b.settings.openedPanelWidth == "auto") {
										e = R;
										for (var c = 0; c < r; c++)
												if (c % j == m % j) e = Math.min(e, g[c].width)
								} else e = b.settings.openedPanelWidth == "max" ? g[m].width : b.settings.openedPanelWidth; if (b.settings.openedPanelHeight == "auto") {
										l = S;
										for (c = 0; c < r; c++)
												if (Math.floor(c / j) == Math.floor(m / j)) l = Math.min(l, g[c].height)
								} else l =
										b.settings.openedPanelHeight == "max" ? g[m].height : b.settings.openedPanelHeight;
								var B = (b.settings.width - (j - 1) * b.settings.distance - e) / (j - 1),
										y = (b.settings.height - (E - 1) * b.settings.distance - l) / (E - 1),
										C = {}, u = [],
										D = [],
										v = [],
										w = [],
										o = [],
										k = [],
										Y = [],
										U = [],
										J;
								for (c = 0; c < r; c++) {
										D[c] = parseFloat(h[c].css("width"));
										w[c] = parseFloat(h[c].css("height"));
										k[c] = parseFloat(h[c].css("left"));
										U[c] = parseFloat(h[c].css("top"));
										if (c == m) {
												u[c] = e - p;
												v[c] = l - t
										} else {
												u[c] = c % j == m % j ? Math.min(e - p, g[c].width) : B - p;
												v[c] = Math.floor(c / j) == Math.floor(m /
														j) ? Math.min(l - t, g[c].height) : y - t
										}
										o[c] = c % j * (B + b.settings.distance) + (c % j <= m % j ? 0 : e - B) + (c % j == m % j && e - p > u[c] ? (e - p - u[c]) / 2 : 0);
										Y[c] = Math.floor(c / j) * (y + b.settings.distance) + (Math.floor(c / j) <= Math.floor(m / j) ? 0 : l - y) + (Math.floor(c / j) == Math.floor(m / j) && l - t > v[c] ? (l - t - v[c]) / 2 : 0)
								}
								var N, K, L;
								if (parseFloat(f.css("width")) != e - p) {
										N = parseFloat(f.css("width"));
										K = e;
										L = p;
										C.width = K - L
								} else {
										N = parseFloat(f.css("height"));
										K = l;
										L = t;
										C.height = K - L
								}
								f.stop();
								f.animate(C, {
										duration: b.settings.slideDuration,
										complete: function () {
												if (!i) {
														i =
																true;
														if (g[a].caption) {
																var n = g[a].caption,
																		z = g[m].properties,
																		ea = parseInt(z.captionFadeDuration),
																		O = parseInt(z.captionWidth),
																		V = parseInt(z.captionHeight),
																		fa = parseInt(z.captionTop);
																z = parseInt(z.captionLeft);
																O = d('<div class="caption"></div>').css({
																		width: O,
																		height: V,
																		left: z,
																		top: fa,
																		opacity: 0
																}).appendTo(h[m]);
																V = d('<div class="caption-background"></div>').css({
																		width: "100%",
																		height: "100%"
																}).appendTo(O);
																d("<p></p>").html(n).css({
																		width: "100%",
																		height: "100%",
																		opacity: 1
																}).appendTo(V);
																O.animate({
																		opacity: 1
																}, ea)
														}
														
														n = {
																type: "animationComplete"
														};

														d.isFunction(b.settings.animationComplete) && b.settings.animationComplete.call(this, n)
												}
										},
										step: function (n) {
												J = (n - N) / (K - L - N);
												for (n = 0; n < r; n++) {
														h[n].css("width", J * (u[n] - D[n]) + D[n]);
														h[n].css("height", J * (v[n] - w[n]) + w[n]);
														h[n].css("left", J * (o[n] - k[n]) + k[n]);
														h[n].css("top", J * (Y[n] - U[n]) + U[n])
												}
										}
								})
						}
				}

				function da() {
						M = "closed";
						H && clearTimeout(H);
						X();
						for (var a = false, f = h[m], i = parseFloat(f.css("width")), e = {}, l = [], c = [], B = [], y = [], C = [], u = [], D = [], v = [], w, o = 0; o < r; o++) {
								c[o] = parseFloat(h[o].css("width"));
								y[o] = parseFloat(h[o].css("height"));
								l[o] = x - p;
								B[o] = F - t;
								u[o] = parseFloat(h[o].css("left"));
								v[o] = parseFloat(h[o].css("top"));
								C[o] = o % j * (x + b.settings.distance);
								D[o] = Math.floor(o / j) * (F + b.settings.distance)
						}
						e.width = x - p;
						f.stop();
						f.animate(e, {
								duration: b.settings.slideDuration,
								complete: function () {
										if (!a) {
												a = true;
												var k = {
														type: "animationComplete"
												};
												d.isFunction(b.settings.animationComplete) && b.settings.animationComplete.call(this, k)
										}
								},
								step: function (k) {
										w = (i - k) / (i - x + p);
										for (k = 0; k < r; k++) {
												h[k].css("width", w * (l[k] - c[k]) + c[k]);
												h[k].css("height", w * (B[k] - y[k]) +
														y[k]);
												h[k].css("left", w * (C[k] - u[k]) + u[k]);
												h[k].css("top", w * (D[k] - v[k]) + v[k])
										}
								}
						})
				}

				function Z() {
						I(m == g.length - 1 ? 0 : m + 1)
				}

				function $() {
						I(m == 0 ? g.length - 1 : m - 1)
				}

				function ba() {
						var a = d('<div class="preloader"></div>').hide().fadeIn(300).appendTo(q),
								f = (b.settings.width - parseInt(a.css("width"))) * 0.5,
								i = (b.settings.height - parseInt(a.css("height"))) * 0.5;
						a.css({
								left: f,
								top: i
						})
				}

				function X() {
						var a = q.find(".caption");
						a && a.stop().animate({
								opacity: 0
						}, 300, function () {
								a.remove()
						})
				}

				function T() {
						G = setInterval(function () {
								if (b.settings.slideshowDirection ==
										"next") Z();
								else b.settings.slideshowDirection == "previous" && $()
						}, b.settings.slideshowDelay)
				}
				this.settings = d.extend({}, d.fn.gridAccordion.defaults, A);
				var q = d(Q),
						b = this,
						m = -1,
						g = [],
						h = [],
						G = 0,
						P = ["captionFadeDuration", "captionWidth", "captionHeight", "captionTop", "captionLeft", "linkTarget", "alignType"],
						x, F, R, S, M = "closed",
						p = 0,
						t = 0,
						r = 0,
						j, E, H;
				(function () {
						q.addClass("grid-accordion").css({
								width: b.settings.width,
								height: b.settings.height
						});
						if (b.settings.xmlSource) {
								q.empty();
								d.ajax({
										type: "GET",
										url: b.settings.xmlSource,
										dataType: d.browser.msie ? "text" : "xml",
										success: function (a) {
												var f;
												if (d.browser.msie) {
														f = new ActiveXObject("Microsoft.XMLDOM");
														f.async = false;
														f.loadXML(a)
												} else f = a;
												d(f).find("panel").each(function () {
														var i = {};
														i.properties = {};
														for (var e = 0; e < d(this).children().length; e++) {
																var l = d(this).children()[e];
																i[l.nodeName] = d(this).find(l.nodeName).text()
														}
														for (e = 0; e < P.length; e++) {
																l = P[e];
																var c = d(this).attr(l);
																i.properties[l] = c == undefined ? b.settings[l] : c
														}
														g.push(i)
												});
												s()
										}
								})
						} else {
								q.children().each(function (a) {
										var f = {};
										f.properties = {};
										for (var i = 0; i < d(this).children().length; i++) {
												var e = d(this).children()[i];
												if (d(e).is("a")) {
														f.path = d(e).find("img").attr("src");
														f.link = d(e).attr("href");
														if (d(e).attr("target")) f.properties.linkTarget = d(e).attr("target")
												} else if (d(e).is("img")) f.path = d(e).attr("src");
												else f[d(e).attr("class")] = d(e).html()
										}
										for (i = 0; i < P.length; i++) {
												e = P[i];
												var l;
												if (b.settings.panelProperties)
														if (b.settings.panelProperties[a]) l = b.settings.panelProperties[a][e];
												f.properties[e] || (f.properties[e] = l == undefined ? b.settings[e] :
														l)
										}
										g.push(f)
								});
								q.empty();
								s()
						}
				})();
				this.nextPanel = Z;
				this.previousSlide = $;
				this.openPanel = I;
				this.startSlideshow = function () {
						T()
				};
				this.stopSlideshow = function () {
						G && clearInterval(G)
				};
				this.getSlideshowState = function () {
						return slideshowState
				};
				this.getCurrentIndex = function () {
						return m
				};
				this.getPanelAt = function (a) {
						return g[a]
				};
				this.getAccordionState = function () {
						return M
				}
		}
		d.fn.gridAccordion = function (Q) {
				for (var A = [], s = 0; s < this.length; s++)
						if (!this[s].accordion) {
								this[s].accordion = new aa(this[s], Q);
								A.push(this[s].accordion)
						}
				return A.length >
						1 ? A : A[0]
		};
		d.fn.gridAccordion.defaults = {
				xmlSource: null,
				width: 500,
				height: 300,
				alignType: "leftTop",
				distance: 0,
				columns: 3,
				slideshow: false,
				slideshowDelay: 5E3,
				slideshowDirection: "next",
				stopSlideshowOnHover: true,
				slideDuration: 200,
				openPanelOnMouseOver: true,
				closePanelOnMouseOut: true,
				openPanelOnClick: false,
				preloadPanels: false,
				shuffle: false,
				openedPanelWidth: "auto",
				openedPanelHeight: "auto",
				closedPanelWidth: 30,
				closedPanelHeight: 30,
				captionFadeDuration: 300,
				captionWidth: 300,
				captionHeight: 100,
				captionTop: 100,
				captionLeft: 30,
				shadow: false,
				linkTarget: "_blank",
				openPanelDelay: 200,
				panelProperties: null,
				panelMouseOver: null,
				panelMouseOut: null,
				panelClick: null,
				panelLoaded: null,
				panelCreated: null,
				allPanelsCreated: null,
				animationComplete: null,
				openPanel: null
		}
})(jQuery);